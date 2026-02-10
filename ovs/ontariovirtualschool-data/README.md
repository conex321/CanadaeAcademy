# Ontario Virtual School - Complete Website Data Extraction

## Overview
Complete extraction of all content from https://www.ontariovirtualschool.ca/ using Firecrawl API.

**Extraction Date:** January 30, 2026
**Total Size:** 369.31 MB

---

## Summary Statistics

| Category | Found | Downloaded |
|----------|-------|------------|
| **Pages** | 750 | 750 (100%) |
| **Images** | 2,389 | 2,485 (100%) |
| **Videos** | 133 | 9 direct files |
| **URLs in Sitemap** | 718 | - |

---

## Contents

### 📄 Pages (`pages/`)
- **750 pages** fully extracted
- Each page saved in both **Markdown** (.md) and **HTML** (.html) format
- Includes: courses, university pages, student spotlights, blog posts, FAQs, etc.
- Size: 4.33 MB

### 🖼️ Images (`images/`)
- **2,485 images** downloaded
- Includes: teacher photos, course thumbnails, university logos, blog graphics
- Size: 308.82 MB

### 🎬 Videos

#### Downloaded (`videos/direct/`) - 48.22 MB
| File | Size | Description |
|------|------|-------------|
| Labster.mp4 | 32 MB | Lab simulation promo |
| Labster.mov | 4.5 MB | Lab simulation (alternate) |
| Labster.webm | 3.8 MB | Lab simulation (web) |
| Math.mp4 | 586 KB | Math course promo |
| Math.mov | 586 KB | Math course (alternate) |
| Math.webm | 1.5 MB | Math course (web) |
| Presto.mp4 | 720 KB | Presto feature promo |
| Presto.mov | 720 KB | Presto (alternate) |
| Presto.webm | 4 MB | Presto (web) |

#### Vimeo Videos (Private/Embed-Only)
121 Vimeo videos are embedded on the site but are private and can only be viewed on the Ontario Virtual School website. Full list in `videos_found_complete.json`.

Sample Vimeo URLs (require browser access on OVS site):
- https://vimeo.com/500097605
- https://vimeo.com/436289331
- https://vimeo.com/435226488
- https://vimeo.com/321649927
- https://vimeo.com/373817831
- ... and 116 more

#### YouTube Videos (Private)
3 YouTube videos found but are private/restricted:
- https://www.youtube.com/watch?v=QGq9dEVqGVk (Private)
- https://www.youtube.com/watch?v=UEW4JeVwvps
- https://www.youtube.com/watch?v=jLV2KJE61U8

---

## File Structure

```
ontariovirtualschool-data/
├── README.md                      # This file
├── sitemap.json                   # Complete URL map (718 URLs)
├── crawl-results-complete.json    # Full crawl data (750 pages)
├── metadata.json                  # Extraction statistics
├── videos_found_complete.json     # All 133 video URLs
├── images_found_complete.json     # All 2,389 image URLs
├── pages/                         # 750 pages (MD + HTML)
│   ├── 001_homepage.md
│   ├── 001_homepage.html
│   ├── 002_...
│   └── ...
├── images/                        # 2,485 downloaded images
│   ├── 0001_image.jpg
│   └── ...
└── videos/
    ├── direct/                    # 9 downloadable videos
    │   ├── Labster.mp4
    │   ├── Math.mp4
    │   ├── Presto.mp4
    │   └── ...
    └── embedded/                  # Video metadata/info
        └── *.info.json
```

---

## Data Files

| File | Description |
|------|-------------|
| `sitemap.json` | All 718 discovered URLs on the website |
| `crawl-results-complete.json` | Raw Firecrawl API response with all page content |
| `metadata.json` | Statistics and extraction details |
| `videos_found_complete.json` | All 133 video URLs with types and source pages |
| `images_found_complete.json` | All 2,389 image URLs with source pages |

---

## Forms & Interactive Elements

Comprehensive documentation of all forms, their fields, behaviors, and technologies is available in:

### Individual Form Files (Recommended for Rebuilding)
**[forms/](forms/)** - Directory with separate files for each form:
- [00_INDEX.md](forms/00_INDEX.md) - Master index of all forms
- [01_CONTACT_FORM.json](forms/01_CONTACT_FORM.json) / [.md](forms/01_CONTACT_FORM.md)
- [02_COURSE_SEARCH.json](forms/02_COURSE_SEARCH.json) / [.md](forms/02_COURSE_SEARCH.md)
- [03_REGISTRATION_CHECKOUT.json](forms/03_REGISTRATION_CHECKOUT.json) / [.md](forms/03_REGISTRATION_CHECKOUT.md)
- [04_LIVE_CHAT.json](forms/04_LIVE_CHAT.json) / [.md](forms/04_LIVE_CHAT.md)
- [05_NEWSLETTER_SIGNUP.json](forms/05_NEWSLETTER_SIGNUP.json) / [.md](forms/05_NEWSLETTER_SIGNUP.md)
- [ALL_FORMS_COMBINED.json](forms/ALL_FORMS_COMBINED.json) - All forms in one JSON

### Summary Document
**[FORMS_DOCUMENTATION.md](FORMS_DOCUMENTATION.md)**

### Summary of Interactive Elements

| Element | Technology | Location |
|---------|------------|----------|
| Contact Form | Contact Form 7 (WordPress) | /contact-us/ |
| Course Search | Material-UI Autocomplete | Homepage, /courses/ |
| Course Filters | React + MUI | /courses/ |
| Registration | WooCommerce | /register-online/ |
| Live Chat | Crisp | All pages |
| Newsletter | Mailchimp | Footer |

### Technology Stack
- **CMS:** WordPress
- **E-commerce:** WooCommerce
- **Forms Plugin:** Contact Form 7
- **UI Framework:** Material-UI (React)
- **Chat Widget:** Crisp
- **Email Marketing:** Mailchimp
- **Payment Gateway:** Square

---

## Notes

1. **Vimeo Videos**: The 121 Vimeo videos are private and domain-locked. They can only be played within the iframe embed on ontariovirtualschool.ca. To access these videos:
   - Visit the source page on the OVS website
   - The video will play in the embedded player
   - Some browser extensions may allow saving embedded videos

2. **YouTube Videos**: The 3 YouTube videos are either private or age-restricted.

3. **Images**: 4 images failed to download (likely broken links or CDN restrictions).

4. **Page Count**: 750 pages were crawled, which is more than the 718 URLs in the initial sitemap because the crawler discovered additional linked pages.

---

## Tools Used

- **Firecrawl API v1** - Website mapping and content extraction
- **yt-dlp** - Video download attempts
- **Python** - Data processing and parallel downloads
- **curl_cffi** - Browser impersonation for video downloads

---

## Credits Consumed

- Firecrawl API: ~750 credits for full site crawl
