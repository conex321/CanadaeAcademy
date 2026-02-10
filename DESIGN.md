# Design System: Canada e Academy (Canonet)
**Project ID:** [TO BE SET]

## 1. Visual Theme & Atmosphere

Canada e Academy embodies a **modern, authoritative Canadian digital institution** that balances academic credibility with contemporary warmth. The interface feels **clean and confident**, projecting the trust of a Ministry-inspected school while embracing the energy of interactive, technology-forward education.

The overall mood is **polished yet inviting** — inspired by the trust architecture of Virtual High School (layered credibility signals, heritage messaging) and the modern design sophistication of Preply (responsive typography, premium micro-interactions, semantic color systems). The design communicates three things immediately: trust, engagement, and accessibility.

**Key Characteristics:**
- Bold Canadian identity through deep blue and red accents echoing the national flag
- Clean, spacious layouts with generous whitespace between sections
- Trust signals woven throughout — Ministry inspection, BSID, OCT certification
- Card-based content organization for courses, features, and audience paths
- Photography-first hero sections balanced with clean iconography
- Professional yet approachable — serious academic institution, not a casual startup
- Responsive-first: optimized from mobile (320px) through large desktop (1440px+)

## 2. Color Palette & Roles

### Primary Brand Colors
- **Authoritative Deep Blue** (#2c3892) — The anchor of the brand. Used for primary call-to-action buttons, navigation links, header backgrounds, section headings, and trust badges. Conveys authority, education, and reliability. This is the dominant interactive color across the site.
- **Canadian Red** (#ed1c23) — Bold accent inspired by the Canadian flag. Used for secondary CTAs ("Register Now"), urgency indicators, sale badges, notification dots, the maple leaf logo mark, and accent highlights. Creates energy and draws attention to conversion-critical elements.

### Foundation Colors
- **Clean White** (#ffffff) — Primary page background. Creates a bright, open canvas that lets content breathe and photography shine.
- **Soft Cool Gray** (#f5f7fa) — Secondary surface for alternating content sections, card backgrounds, and form input backgrounds. Provides subtle visual separation without introducing visual weight.
- **Whisper Gray** (#eef0f4) — Tertiary surface for nested elements, table rows, and hover states on light backgrounds.

### Typography Colors
- **Near Black** (#1a1a2e) — Primary text for headlines, navigation items, and high-emphasis content. Softer than pure black for refined readability.
- **Warm Gray** (#6b7280) — Secondary text for body copy, descriptions, metadata, and supporting content. Creates clear typographic hierarchy.
- **Light Silver** (#d1d5db) — Tertiary use for borders, dividers, placeholder text, and subtle structural elements.

### Functional/Semantic Colors
- **Credential Green** (#10b981) — Success states: enrolled, approved, passed, available, active
- **Caution Amber** (#f59e0b) — Warning states: prerequisites needed, in-progress, pending review
- **Alert Red** (#ef4444) — Error states: payment failure, registration error, validation failure
- **Info Slate** (#64748b) — Neutral system messages, informational callouts

## 3. Typography Rules

**Primary Font Family:** Inter
**Character:** Modern geometric sans-serif with subtle humanist warmth. Clean, highly legible at all sizes, with excellent weight range for typographic hierarchy.

### Hierarchy & Weights
- **Display Headlines (H1):** Semi-bold (600), generous letter-spacing (0.01em), 2.5-3rem. Used for hero headlines and major page titles. Commanding presence without shouting.
- **Section Headers (H2):** Semi-bold (600), 1.75-2.25rem. Establishes clear content zones — "Why Choose Us," "How It Works," "Our Courses."
- **Subsection Headers (H3):** Medium (500), 1.25-1.5rem. Card titles, FAQ questions, feature names.
- **Body Text:** Regular (400), relaxed line-height (1.7), 1rem (16px). Descriptions, paragraphs, and supporting content prioritize comfortable reading.
- **Small Text/Meta:** Regular (400), 0.875rem (14px). Course codes, prices, timestamps, badge labels.
- **CTA Buttons:** Medium (500), subtle letter-spacing (0.01em), 1rem. Balanced presence.
- **Navigation:** Medium (500), 0.9375rem (15px), slightly expanded letter-spacing (0.02em).

### Spacing Principles
- Headers use slightly expanded letter-spacing for refined authority
- Body text maintains generous line-height (1.7) for effortless reading
- Consistent 1.5-2rem vertical rhythm between related text blocks
- 4-6rem between major sections for dramatic breathing room

## 4. Component Stylings

### Buttons
- **Primary CTA:** Authoritative Deep Blue (#2c3892) background, white text, subtly rounded corners (8px), comfortable padding (0.875rem vertical, 2rem horizontal). Hover: darkens slightly, subtle lift (translateY -2px), soft shadow appears. Transition: 200ms ease-out.
- **Secondary CTA:** Canadian Red (#ed1c23) background, white text, same shape as primary. Used for "Register Now" and conversion-critical actions. Hover: deepens to darker red, same lift effect.
- **Outlined/Ghost CTA:** Transparent background, Deep Blue border (2px), Deep Blue text. Hover: fills with Deep Blue, text turns white. For secondary navigation actions like "Learn More."
- **Focus State:** Visible 3px outline in Deep Blue with 2px offset for keyboard navigation accessibility.
- **Disabled State:** Light Silver background, Warm Gray text, no hover effect, cursor: not-allowed.

### Cards & Content Containers
- **Corner Style:** Gently rounded corners (12px) for approachable, modern edges
- **Background:** Soft Cool Gray (#f5f7fa) or Clean White, depending on section background
- **Shadow Strategy:** Flat by default. On hover: whisper-soft shadow (`0 4px 16px rgba(44,56,146,0.08)`) with subtle lift (translateY -4px). Transition: 250ms ease-out.
- **Border:** Optional hairline border (1px #eef0f4) for definition on white backgrounds
- **Internal Padding:** Generous 1.5-2rem for comfortable content breathing room
- **Image Treatment:** Full-bleed at top of cards, 16:9 or 4:3 ratio

### Trust Badges
- **Style:** Inline horizontal layout with icon (shield, checkmark, certificate) + text
- **Background:** Deep Blue at low opacity (#2c3892 at 8%) or Soft Cool Gray
- **Text:** Near Black, medium weight (500), 0.875rem
- **Icon:** Deep Blue or Canadian Red, 20-24px
- **Layout:** Flexbox row, wrapping on mobile, centered in trust bar sections

### Navigation
- **Header:** Sticky, white background with subtle bottom border (1px #eef0f4)
- **Logo:** Left-aligned, maple leaf icon + "Canada e Academy" text
- **Links:** Center-aligned, medium weight, Near Black, 0.02em letter-spacing
- **Active/Hover:** Deep Blue color with thin underline (2px) appearing via 200ms transition
- **Register CTA:** Right-aligned, Canadian Red button, always visible
- **Mobile (<768px):** Hamburger menu with sliding drawer, full-width Register CTA at bottom

### Inputs & Forms
- **Stroke:** 1px border in Light Silver (#d1d5db)
- **Background:** Clean White, transitions to Soft Cool Gray on focus
- **Corners:** Matching button roundness (8px) for visual consistency
- **Focus:** Border shifts to Deep Blue (#2c3892) with subtle outer glow (0 0 0 3px rgba(44,56,146,0.1))
- **Padding:** 0.875rem vertical, 1.25rem horizontal, touch-friendly (min 44px height)
- **Labels:** Warm Gray (#6b7280), medium weight, positioned above inputs
- **Error State:** Border turns Alert Red, helper text appears below in red

### FAQ Accordion
- **Style:** Full-width expandable sections with clean divider lines
- **Question:** Semi-bold (600), Near Black, with chevron icon rotating on expand
- **Answer:** Regular weight, Warm Gray body text, appears with smooth slide transition
- **Hover:** Soft Cool Gray background tint on the question row

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 1280px for readability, centered with auto margins
- **Grid System:** 12-column, fluid gutters (16px mobile, 24px tablet, 32px desktop)
- **Course Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Card Grid:** 3 columns for features/benefits, 2-3 for audience paths
- **Breakpoints:**
  - Mobile: <768px
  - Tablet: 768-1024px
  - Desktop: 1024-1280px
  - Large Desktop: >1280px

### Whitespace Strategy
- **Base Unit:** 8px, scaling to 16px for component spacing
- **Section Margins:** 5-8rem (80-128px) between major page sections
- **Card Gaps:** 1.5-2rem between cards in a grid
- **Edge Padding:** 1rem (16px) mobile, 2rem (32px) tablet, 3rem (48px) desktop
- **Hero Sections:** Extra-generous padding (6-10rem top/bottom)

### Trust Signal Placement Strategy
- **Header:** BSID badge or Ministry-inspected micro-badge
- **Below Hero:** Horizontal trust bar with 5 key signals
- **Mid-page:** University acceptance logos section
- **CTAs/Registration:** Trust reinforcement near conversion points
- **Footer:** Full Ministry inspection statement + BSID + contact

### Responsive Behavior
- Mobile-first foundation with progressive enhancement
- Navigation collapses to hamburger below 768px
- Grid reduces columns fluidly across breakpoints
- Touch targets: minimum 44x44px (WCAG AAA)
- Images: responsive with lazy-loading
- Typography: 16px base mobile, scaling to 18px desktop

## 6. Design System Notes for Stitch Generation

When creating new screens for this project using Stitch, reference these specific instructions:

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first, responsive
- Theme: Light, modern, authoritative Canadian education institution
- Background: Clean White (#ffffff) main canvas, Soft Cool Gray (#f5f7fa) for alternate sections and cards
- Primary Accent: Authoritative Deep Blue (#2c3892) for buttons, links, headers, navigation active states, and trust badges
- Secondary Accent: Canadian Red (#ed1c23) for Register CTA, urgency indicators, maple leaf logo accent, and conversion highlights
- Text Primary: Near Black (#1a1a2e) for headlines and navigation
- Text Secondary: Warm Gray (#6b7280) for body copy and descriptions
- Borders/Dividers: Light Silver (#d1d5db)
- Font: Inter or similar clean geometric sans-serif, semi-bold (600) for headlines, regular (400) for body, generous line-height (1.7)
- Buttons: Subtly rounded corners (8px), comfortable padding, hover lift effect with soft shadow transition (200ms ease-out). Primary in Deep Blue, secondary in Canadian Red, tertiary outlined in Deep Blue.
- Cards: Gently rounded corners (12px), Soft Cool Gray background, whisper-soft blue-tinted shadow on hover with subtle lift
- Navigation: Sticky white header, logo left, nav links center, red Register CTA right. Clean bottom border.
- Layout: Centered content (max-width 1280px), generous whitespace (5-8rem between sections), 12-column grid
- Trust Signals: Shield/checkmark icons with text badges in a horizontal bar. Deep Blue icon tint. BSID #665804 always visible.
- Footer: Deep Blue background, white text, logo, tagline "Your Path. Your Pace. Your Future.", Ministry inspection statement, nav links, social icons
- Imagery: Modern, clean photography of diverse students learning online. No harsh stock photos.
- Micro-interactions: Smooth hover transitions (200-300ms ease-out), button lift on hover, card elevation on hover, link color transitions
