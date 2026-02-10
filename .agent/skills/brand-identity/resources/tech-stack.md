# Preferred Tech Stack & Implementation Rules

When generating code or UI components for Canada e Academy, you **MUST** strictly adhere to the following technology choices.

---

## Platform Context

- **Production CMS:** WordPress / WooCommerce (canadaeacademy.com)
- **Content format:** Markdown with YAML front matter
- **LMS:** Self-hosted Moodle (course delivery)
- **New UI work:** React/Next.js components, landing pages, and internal tools

When building **new** pages, components, or internal tools, use the React stack below. When working within the existing WordPress site, respect the existing theme structure and use the design tokens for consistency.

---

## Core Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Framework** | Next.js 14+ (App Router) | TypeScript required |
| **Styling** | Tailwind CSS 3.4+ | Mandatory. Do not use plain CSS, CSS modules, or styled-components unless explicitly asked |
| **Component Library** | shadcn/ui | Use as the base for all new components. Extend, don't replace |
| **Icons** | Lucide React | Consistent icon language across all interfaces |
| **Fonts** | Plus Jakarta Sans (headings) + Inter (body) | Load via `next/font/google` or self-host |
| **Animation** | Framer Motion | For page transitions, scroll animations, and micro-interactions |
| **Forms** | React Hook Form + Zod | For all form validation |

---

## Tailwind Configuration

Extend the default Tailwind config with brand tokens from `design-tokens.json`:

```js
// tailwind.config.ts — key brand extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef0ff',
          100: '#dde2ff',
          200: '#b3baff',
          300: '#7e8afc',
          400: '#4f5de6',
          DEFAULT: '#2c3892',
          600: '#232e7a',
          700: '#1b2463',
          800: '#141b4d',
          900: '#0e1338',
          foreground: '#FFFFFF',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#f87171',
          400: '#f43f3f',
          DEFAULT: '#ed1c23',
          600: '#d41920',
          700: '#b1151b',
          800: '#8c1116',
          900: '#6b0d11',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
      },
    },
  },
}
```

---

## Implementation Guidelines

### 1. Colour Usage Rules

| Use Case | Colour | Tailwind Class |
|----------|--------|---------------|
| Primary CTA buttons, nav active state, hero headings | Primary Blue | `bg-primary text-primary-foreground` |
| Urgent CTAs, sale badges, "Register Now" buttons | Secondary Red | `bg-secondary text-secondary-foreground` |
| Page backgrounds | White | `bg-background` |
| Card backgrounds | White with shadow | `bg-card shadow-md` |
| Muted backgrounds, alternating sections | Slate 50 | `bg-muted` |
| Body text | Slate 900 | `text-foreground` |
| Secondary/helper text | Slate 500 | `text-muted-foreground` |
| Trust signal banners | Primary gradient | `bg-gradient-to-r from-primary to-primary-700` |

**Important:** The secondary red (`#ed1c23`) is an **accent** colour. It should never dominate a layout. Use it for high-priority CTAs, badges, and small graphic elements (maple leaf motifs, notification dots). Primary blue is the dominant brand colour.

### 2. Component Patterns

- **Buttons:**
  - Primary action — Solid primary blue (`bg-primary text-primary-foreground hover:bg-primary-600`)
  - Urgent/conversion action — Solid secondary red (`bg-secondary text-secondary-foreground hover:bg-secondary-600`)
  - Secondary action — Ghost or outline variant from shadcn/ui
  - All buttons use `rounded-lg` (0.75rem) for the modern, friendly feel
  - Minimum touch target: 44×44px on mobile

- **Cards:**
  - Use `rounded-xl` (1rem) with `shadow-md` and `hover:shadow-lg` transition
  - Course cards must include: course code badge, grade indicator, credit value, and CTA
  - Inspired by Preply's card warmth — generous padding (`p-6`), clear hierarchy

- **Forms:**
  - Labels placed *above* input fields, always
  - Use `gap-4` between form items
  - Registration forms must include trust signals near the submit button
  - Error states use `destructive` colour tokens

- **Hero Sections:**
  - Large headline (Display size), supporting text, prominent CTA
  - Use the hero gradient for full-width backgrounds or pair with illustration
  - Include at least 2 trust metrics (e.g., "170+ Courses", "Ministry-Inspected")

- **Navigation:**
  - Sticky top nav with white background, subtle border-bottom
  - Primary blue for active/hover states
  - Mobile: full-screen overlay menu with smooth animation

### 3. Layout

- Use Flexbox and CSS Grid via Tailwind utilities for all layout structures
- Max container width: `max-w-7xl` (1280px), centred
- Section spacing: `py-16 md:py-24` for major sections, `py-8 md:py-12` for sub-sections
- Responsive breakpoints follow Tailwind defaults: `sm` (640), `md` (768), `lg` (1024), `xl` (1280)

### 4. Accessibility

- All interactive elements must be keyboard navigable
- Colour contrast must meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- Images require meaningful `alt` text
- Form inputs require associated `<label>` elements
- Focus rings use `ring-primary` (the brand blue)

### 5. Dark Mode

- Support dark mode using Tailwind's `dark:` variant modifier
- Reference the `dark_mode` tokens in `design-tokens.json`
- Dark mode is secondary — design light-first, then adapt

### 6. Forbidden Patterns

| ✗ Do NOT | ✓ Do Instead |
|-----------|--------------|
| Use jQuery | Use React hooks and native DOM APIs |
| Use Bootstrap classes | Use Tailwind CSS utilities |
| Create separate CSS files | Keep styles in component files via Tailwind |
| Hardcode hex values | Reference design token classes |
| Use stock photo clichés (handshake photos, generic classroom) | Use brand illustrations, real student photos, or styled graphics |
| Use Comic Sans, Papyrus, or decorative fonts | Use Plus Jakarta Sans / Inter only |
| Place Canadian flag imagery without context | Use subtle maple leaf motifs as accent elements |

---

## WordPress-Specific Rules

When working within the existing WordPress/WooCommerce site:

- Respect the existing theme's structure
- Use the brand colour hex values directly when Tailwind is not available
- Ensure WooCommerce checkout flow uses consistent branding
- Course pages follow the standardised Markdown template with YAML front matter
- All images should be optimised (WebP preferred, max 200KB for thumbnails)

---

## Performance Targets

- Lighthouse Performance score: ≥ 90
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Bundle size budget: < 200KB JS (initial load)
