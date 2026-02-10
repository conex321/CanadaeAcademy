#!/usr/bin/env python3
"""
Re-scrape all Ontario Virtual School pages and generate complete LLM-editable .md files.

This script:
1. Reads all page URLs from the existing .md files
2. Fetches each page via HTTP
3. Extracts the main content area
4. Converts to well-structured Markdown
5. Adds metadata (title, source URL, images/assets inventory)
6. Saves as comprehensive .md files

Usage: python3 rescrape_pages.py [--test N] [--start N] [--force]
  --test N   Only process N pages for testing
  --start N  Start from page index N (for resuming)
  --force    Overwrite existing completed files
"""

import os
import re
import sys
import json
import time
import signal
import requests
from bs4 import BeautifulSoup, Comment
from markdownify import markdownify as md
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse, urljoin

# Configuration
PAGES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pages')
PROGRESS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'rescrape_progress.json')
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
}
MAX_WORKERS = 5  # Concurrent requests
REQUEST_DELAY = 0.5  # Seconds between requests per thread
TIMEOUT = 30

# Global flag for graceful shutdown
shutdown_requested = False

def signal_handler(sig, frame):
    global shutdown_requested
    print('\n⚠️  Shutdown requested, finishing current pages...')
    shutdown_requested = True

signal.signal(signal.SIGINT, signal_handler)


def get_page_urls():
    """Extract all page URLs and their corresponding filenames from existing .md files."""
    url_map = {}
    for fname in sorted(os.listdir(PAGES_DIR)):
        if not fname.endswith('.md'):
            continue
        filepath = os.path.join(PAGES_DIR, fname)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read(500)  # Only need the first few lines
            match = re.search(r'Source:\s*(https?://\S+)', content)
            if match:
                url = match.group(1).rstrip('/')
                url_map[url] = fname
        except Exception:
            pass
    return url_map


def fetch_page(url):
    """Fetch a page and return the response text."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
        resp.raise_for_status()
        return resp.text
    except requests.exceptions.RequestException as e:
        return None


def extract_assets(soup, base_url):
    """Extract all assets (images, videos, iframes) from the page."""
    assets = []
    
    # Images
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if not src or src.startswith('data:'):
            continue
        src = urljoin(base_url, src)
        alt = img.get('alt', '').strip()
        width = img.get('width', '')
        height = img.get('height', '')
        
        asset = {
            'type': 'image',
            'src': src,
            'alt': alt,
        }
        if width:
            asset['width'] = width
        if height:
            asset['height'] = height
        
        # Determine image purpose from context
        parent = img.parent
        if parent:
            parent_class = ' '.join(parent.get('class', []))
            if 'logo' in (alt + parent_class + src).lower():
                asset['purpose'] = 'Logo'
            elif 'icon' in (alt + parent_class + src).lower():
                asset['purpose'] = 'Icon'
            elif 'teacher' in (alt + parent_class + src).lower() or 'instructor' in (alt + parent_class + src).lower():
                asset['purpose'] = 'Staff Photo'
            elif 'course' in (alt + parent_class + src).lower():
                asset['purpose'] = 'Course Image'
            elif 'university' in (alt + parent_class + src).lower():
                asset['purpose'] = 'University Logo'
            elif 'student' in (alt + parent_class + src).lower():
                asset['purpose'] = 'Student Photo'
        assets.append(asset)
    
    # Videos (iframes)
    for iframe in soup.find_all('iframe'):
        src = iframe.get('src', '') or iframe.get('data-src', '')
        if not src:
            continue
        src = urljoin(base_url, src)
        title = iframe.get('title', '').strip()
        
        video_type = 'embed'
        if 'vimeo' in src:
            video_type = 'vimeo'
        elif 'youtube' in src or 'youtu.be' in src:
            video_type = 'youtube'
        
        assets.append({
            'type': 'video',
            'src': src,
            'title': title,
            'platform': video_type,
        })
    
    # Video elements
    for video in soup.find_all('video'):
        sources = video.find_all('source')
        for source in sources:
            src = source.get('src', '')
            if src:
                src = urljoin(base_url, src)
                assets.append({
                    'type': 'video',
                    'src': src,
                    'title': '',
                    'platform': 'direct',
                })
    
    return assets


def extract_main_content(soup):
    """Extract the main content area from the page, removing nav/header/footer."""
    # Remove unwanted elements
    for tag in soup(['script', 'style', 'noscript', 'svg']):
        tag.decompose()
    
    # Remove HTML comments
    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()
    
    # Try to find the main content area
    main = None
    
    # Try common content selectors
    selectors = [
        ('div', {'class': 'elementor-section-wrap'}),
        ('main', {}),
        ('div', {'id': 'content'}),
        ('div', {'class': 'entry-content'}),
        ('article', {}),
        ('div', {'class': 'page-content'}),
    ]
    
    for tag_name, attrs in selectors:
        main = soup.find(tag_name, attrs)
        if main:
            break
    
    if not main:
        # Fall back to body
        main = soup.body if soup.body else soup
    
    return main


def remove_boilerplate(content_md):
    """Remove common boilerplate sections from the markdown."""
    # Remove cookie consent banners
    content_md = re.sub(r'(?i)(?:use coupon code|save \$\d+).*?\n', '', content_md)
    
    # Remove navigation breadcrumbs that appear at the top
    lines = content_md.split('\n')
    cleaned_lines = []
    skip_nav = True
    
    for line in lines:
        stripped = line.strip()
        # Skip empty lines at the start
        if skip_nav and not stripped:
            continue
        # Skip simple nav-like lines (just text links with no real content)
        if skip_nav and stripped in ['✕', '×', 'x', 'X']:
            continue
        # Once we hit a heading or substantial content, stop skipping
        if stripped.startswith('#') or len(stripped) > 100:
            skip_nav = False
        cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)


def html_to_markdown(html_content, url):
    """Convert HTML content to well-structured markdown."""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract page title
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else ''
    
    # Extract meta description
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'})
    if meta_tag:
        meta_desc = meta_tag.get('content', '').strip()
    
    # Extract OG description as fallback
    if not meta_desc:
        og_desc = soup.find('meta', attrs={'property': 'og:description'})
        if og_desc:
            meta_desc = og_desc.get('content', '').strip()
    
    # Extract assets before content extraction
    assets = extract_assets(soup, url)
    
    # Get main content
    main_content = extract_main_content(soup)
    
    # Remove header/nav/footer from main content
    for nav in main_content.find_all(['nav', 'header']):
        nav.decompose()
    
    # Remove footer sections (but keep content footers like CTAs)
    for footer in main_content.find_all('footer'):
        # Check if it's a page footer vs content footer
        footer_text = footer.get_text(strip=True)
        if len(footer_text) > 500 or 'copyright' in footer_text.lower() or 'privacy' in footer_text.lower():
            footer.decompose()
    
    # Remove elements with specific classes that are boilerplate
    boilerplate_classes = [
        'crisp-client', 'woocommerce-notices-wrapper', 'screen-reader-text',
        'site-footer', 'main-footer', 'footer-widget', 'cookie-notice',
        'popup-overlay', 'newsletter-popup', 'site-header', 'main-header',
        'menu-main', 'mobile-menu'
    ]
    for cls in boilerplate_classes:
        for el in main_content.find_all(class_=re.compile(cls, re.I)):
            el.decompose()
    
    # Convert to markdown
    content_md = md(str(main_content), heading_style='ATX', strip=['nav'])
    
    # Clean up the markdown
    content_md = remove_boilerplate(content_md)
    
    # Remove excessive blank lines
    content_md = re.sub(r'\n{4,}', '\n\n\n', content_md)
    
    # Remove leading/trailing whitespace from each line but preserve structure
    lines = content_md.split('\n')
    lines = [line.rstrip() for line in lines]
    content_md = '\n'.join(lines).strip()
    
    return title, meta_desc, content_md, assets


def format_assets_section(assets):
    """Format the assets inventory as a markdown section."""
    if not assets:
        return ''
    
    sections = []
    sections.append('\n---\n')
    sections.append('## Assets Inventory\n')
    
    images = [a for a in assets if a['type'] == 'image']
    videos = [a for a in assets if a['type'] == 'video']
    
    if images:
        sections.append(f'### Images ({len(images)} found)\n')
        for i, img in enumerate(images, 1):
            purpose = img.get('purpose', 'Content Image')
            alt = img.get('alt', 'No alt text')
            dims = ''
            if img.get('width') and img.get('height'):
                dims = f' ({img["width"]}×{img["height"]})'
            sections.append(f'{i}. **{purpose}**: {alt}{dims}')
            sections.append(f'   - URL: `{img["src"]}`')
        sections.append('')
    
    if videos:
        sections.append(f'### Videos ({len(videos)} found)\n')
        for i, vid in enumerate(videos, 1):
            title = vid.get('title', 'Untitled')
            platform = vid.get('platform', 'unknown')
            sections.append(f'{i}. **{platform.title()} Video**: {title}')
            sections.append(f'   - URL: `{vid["src"]}`')
        sections.append('')
    
    return '\n'.join(sections)


def generate_md_file(url, filename, title, meta_desc, content_md, assets):
    """Generate the complete .md file content."""
    parts = []
    
    # Header
    parts.append(f'# {title}')
    parts.append('')
    parts.append(f'**Source:** {url}')
    if meta_desc:
        parts.append(f'**Description:** {meta_desc}')
    parts.append('')
    parts.append('---')
    parts.append('')
    
    # Main content
    parts.append(content_md)
    
    # Assets inventory
    assets_section = format_assets_section(assets)
    if assets_section:
        parts.append(assets_section)
    
    return '\n'.join(parts)


def process_page(url, filename):
    """Process a single page: fetch, convert, save."""
    global shutdown_requested
    if shutdown_requested:
        return filename, 'skipped', 'Shutdown requested'
    
    try:
        # Fetch page
        html = fetch_page(url)
        if html is None:
            return filename, 'error', 'Failed to fetch'
        
        # Check for Cloudflare challenge
        if 'challenge-platform' in html[:2000] and len(html) < 5000:
            return filename, 'cloudflare', 'Cloudflare challenge detected'
        
        # Convert to markdown
        title, meta_desc, content_md, assets = html_to_markdown(html, url)
        
        # Check if we got meaningful content
        text_only = re.sub(r'!\[.*?\]\(.*?\)', '', content_md)
        text_only = re.sub(r'\[.*?\]\(.*?\)', '', text_only)
        text_only = re.sub(r'[#*\-_\[\]()>|`]', '', text_only)
        text_only = text_only.strip()
        
        if len(text_only) < 50:
            return filename, 'empty', f'No substantial content (only {len(text_only)} chars of text)'
        
        # Generate complete .md file
        md_content = generate_md_file(url, filename, title, meta_desc, content_md, assets)
        
        # Save
        filepath = os.path.join(PAGES_DIR, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md_content)
        
        return filename, 'success', f'{len(content_md)} chars, {len(assets)} assets'
        
    except Exception as e:
        return filename, 'error', str(e)


def load_progress():
    """Load progress from previous run."""
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r') as f:
            return json.load(f)
    return {'completed': [], 'errors': [], 'cloudflare': [], 'empty': []}


def save_progress(progress):
    """Save progress for resume capability."""
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f, indent=2)


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Re-scrape OVS pages to generate complete .md files')
    parser.add_argument('--test', type=int, help='Only process N pages for testing')
    parser.add_argument('--start', type=int, default=0, help='Start from page index N')
    parser.add_argument('--force', action='store_true', help='Re-process already completed pages')
    parser.add_argument('--workers', type=int, default=MAX_WORKERS, help='Number of concurrent workers')
    args = parser.parse_args()
    
    # Get all page URLs
    url_map = get_page_urls()
    print(f'📋 Found {len(url_map)} pages to process')
    
    # Load progress
    progress = load_progress()
    if not args.force:
        completed_set = set(progress.get('completed', []))
        print(f'📊 Already completed: {len(completed_set)} pages')
    else:
        completed_set = set()
    
    # Prepare work items
    items = [(url, fname) for url, fname in sorted(url_map.items(), key=lambda x: x[1])]
    items = items[args.start:]
    
    if not args.force:
        items = [(url, fname) for url, fname in items if fname not in completed_set]
    
    if args.test:
        items = items[:args.test]
    
    print(f'🚀 Processing {len(items)} pages with {args.workers} workers...\n')
    
    stats = {'success': 0, 'error': 0, 'cloudflare': 0, 'empty': 0, 'skipped': 0}
    
    # Process pages
    for i, (url, fname) in enumerate(items):
        if shutdown_requested:
            print('\n⚠️  Stopping due to shutdown request')
            break
        
        result_fname, status, message = process_page(url, fname)
        stats[status] = stats.get(status, 0) + 1
        
        # Update progress
        if status == 'success':
            if result_fname not in progress.get('completed', []):
                progress.setdefault('completed', []).append(result_fname)
        elif status == 'error':
            progress.setdefault('errors', []).append({'file': result_fname, 'error': message})
        elif status == 'cloudflare':
            if result_fname not in progress.get('cloudflare', []):
                progress.setdefault('cloudflare', []).append(result_fname)
        elif status == 'empty':
            if result_fname not in progress.get('empty', []):
                progress.setdefault('empty', []).append(result_fname)
        
        # Status icon
        icon = {'success': '✅', 'error': '❌', 'cloudflare': '🔒', 'empty': '📭', 'skipped': '⏭️'}.get(status, '❓')
        print(f'  [{i+1}/{len(items)}] {icon} {fname}: {message}')
        
        # Save progress every 10 pages
        if (i + 1) % 10 == 0:
            save_progress(progress)
        
        # Rate limiting
        time.sleep(REQUEST_DELAY)
    
    # Final save
    save_progress(progress)
    
    # Summary
    print(f'\n{"="*60}')
    print(f'📊 RESULTS SUMMARY')
    print(f'{"="*60}')
    print(f'  ✅ Success:    {stats["success"]}')
    print(f'  ❌ Errors:     {stats["error"]}')
    print(f'  🔒 Cloudflare: {stats["cloudflare"]}')
    print(f'  📭 Empty:      {stats["empty"]}')
    print(f'  ⏭️  Skipped:    {stats["skipped"]}')
    print(f'  📋 Total:      {sum(stats.values())}')
    
    if progress.get('errors'):
        print(f'\n❌ Error details (last 10):')
        for err in progress['errors'][-10:]:
            print(f"  - {err['file']}: {err['error']}")
    
    if progress.get('cloudflare'):
        print(f'\n🔒 Cloudflare-blocked pages ({len(progress["cloudflare"])}):')
        for f in progress['cloudflare'][:10]:
            print(f'  - {f}')


if __name__ == '__main__':
    main()
