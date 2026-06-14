# Research: AppCloid Technologies Website

**Feature**: `001-appcloid-website`
**Date**: 2026-06-14
**Branch**: `new-site`

---

## 1. Framework & Static Export

**Decision**: Next.js 14+ (App Router) with `output: 'export'` for GitHub Pages deployment.

**Rationale**: Next.js is mandated by the project constitution. The `output: 'export'` flag generates a fully static site (HTML/CSS/JS) with no server runtime, compatible with GitHub Pages. The App Router provides file-based routing, built-in metadata API for SEO, and React Server Components for performance optimisation. Next.js static export supports all required features: dynamic page routes, image optimisation (via `next/image` with `unoptimized` flag for static hosting), and TypeScript out of the box.

**Alternatives considered**:
- Vite + React (rejected — lacks built-in SSG, metadata API, and image optimisation)
- Astro (rejected — constitution mandates Next.js)
- Create React App (rejected — deprecated, no SSG)

**GitHub Pages deployment**: Requires a `CNAME` file or custom domain config. The `basePath` setting in `next.config.js` must be set to the repo name unless a custom domain is used (recommended). A GitHub Actions workflow (`pages.yml`) will handle automated builds and deployments on push to `new-site`.

---

## 2. Styling: Tailwind CSS v3

**Decision**: Tailwind CSS v3 with the `@tailwindcss/typography` plugin and custom design tokens.

**Rationale**: Constitution mandates Tailwind CSS. v3 is the stable release with full JIT (Just-In-Time) compiler, arbitrary value support, and `dark:` variant (though the site is dark-mode only). Custom design tokens will be defined in `tailwind.config.ts` to encode the brand colour palette.

**Brand colour tokens** (from constitution):
```typescript
colors: {
  midnight: '#0B0C10',      // primary background
  obsidian: '#121212',      // secondary background
  cyan: '#66FCF1',          // primary accent / CTA
  purple: '#BB86FC',        // secondary accent / gradients
}
```
> Note: The user's instruction prompt also specifies a Blue-Grey palette (`#384959`, `#6A89A7`, `#88BDF2`, `#BDDDFC`). The implementation will use the Blue-Grey palette as the **card/surface accent system** layered on top of the Midnight/Obsidian backgrounds, with Cyan and Purple reserved for primary CTAs and glowing effects — creating a richer, more nuanced palette.

---

## 3. Animation: Framer Motion

**Decision**: Framer Motion v11 (latest stable).

**Rationale**: Constitution mandates Framer Motion or GSAP. Framer Motion integrates natively with React and Next.js, supports `useReducedMotion()` hook (critical for FR-011), and provides `AnimatePresence` for page transitions and `whileInView` for scroll-triggered reveals. GSAP was considered but requires additional setup for React integration and licence consideration for commercial use.

**Key patterns**:
- `variants` + `whileInView` for scroll-triggered section reveals
- `AnimatePresence` for the mobile slide-out drawer and expanded industry cards
- `useReducedMotion()` globally wrapping all animation configs to respect FR-011
- `whileHover` / `whileT tap` for card and button micro-interactions

---

## 4. Contact Form: EmailJS

**Decision**: EmailJS SDK v4 (`@emailjs/browser`).

**Rationale**: Confirmed by the user in clarification Q1. EmailJS sends form data directly from the browser to a pre-configured email template without any server-side code — fully compatible with the static GitHub Pages deployment. No API keys are exposed at runtime (EmailJS uses a public key model). Free tier allows 200 emails/month, sufficient for initial launch volumes.

**Integration pattern**:
- Service ID, Template ID, and Public Key stored in environment variables (`.env.local`, committed to Vercel/GitHub Actions secrets, never in source).
- Form submission calls `emailjs.sendForm()` with a React ref pointing at the form element.
- Loading, success, and error states managed with `useState`.

---

## 5. Mobile Navigation: Slide-Out Drawer

**Decision**: Hamburger icon triggering a full-height glassmorphism drawer sliding in from the right edge, implemented with Framer Motion `x` transform.

**Rationale**: Confirmed by user in clarification Q4. Implementation uses `AnimatePresence` + `motion.div` with `initial={{ x: '100%' }}` → `animate={{ x: 0 }}`. A semi-transparent overlay covers the rest of the screen and dismisses the drawer on click (FR-013). Focus is trapped inside the drawer when open for keyboard accessibility (FR-012). Drawer closes on route change.

---

## 6. Industry Card Expand-in-Place

**Decision**: CSS 3D card flip on click, toggling between front face (icon + sector name) and back face (use cases list).

**Rationale**: Confirmed by user in clarification Q3. The flip animation is implemented with CSS `perspective` + `rotateY` transform wrapped in a Framer Motion `motion.div` for smooth 60fps physics. A `useState` boolean controls the flip state per card. Mobile tap works identically to desktop click. The card back includes a "flip back" affordance button for accessibility.

**Fallback**: When `prefers-reduced-motion` is active, the card switches instantly (no animation) rather than flipping.

---

## 7. SEO & Structured Data

**Decision**: Next.js Metadata API (App Router) + JSON-LD via `<script type="application/ld+json">` in each page's `layout.tsx` or `page.tsx`.

**Schema.org types**:
- `Organization` — sitewide in root layout (name, url, logo, address, contactPoint)
- `WebPage` — per page (name, description, breadcrumb)
- `Service` — for each AI/traditional service entry
- `LocalBusiness` → `ProfessionalService` — on the About page (Glasgow address, areaServed: GB)

**Open Graph & Twitter meta** generated via Next.js `metadata` export per page.

---

## 8. Performance Strategy (Lighthouse 95+)

**Decision**: Combination of Next.js static optimisation + Tailwind CSS purging + Framer Motion lazy loading.

**Key techniques**:
- `next/image` with `priority` on hero image/animation for LCP optimisation
- All non-hero Framer Motion components loaded with `dynamic(() => import(...), { ssr: false })` to reduce JS bundle on initial load
- Google Fonts loaded via `next/font` (zero layout shift, self-hosted subset)
- Tailwind JIT eliminates unused CSS classes (near-zero CSS payload)
- `<link rel="preconnect">` for EmailJS CDN
- Vercel / GitHub Pages CDN handles compression (Brotli/gzip)

---

## 9. TypeScript Configuration

**Decision**: Strict TypeScript (`"strict": true`) with no `any` types.

**Key types to define**:
- `IndustryCard` — `{ id: string; sector: string; icon: ReactNode; useCases: string[] }`
- `ServiceCard` — `{ id: string; title: string; summary: string; detail: string; icon: ReactNode }`
- `ContactFormData` — `{ name: string; company: string; email: string; sector: string; message: string }`
- `NavLink` — `{ href: string; label: string }`

---

## 10. Project Structure

```
appcloid.com/
├── public/
│   ├── CNAME                    # GitHub Pages custom domain
│   └── favicon.ico
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout (nav, footer, fonts, metadata)
│   │   ├── page.tsx             # Home
│   │   ├── ai-solutions/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── industries/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── not-found.tsx        # Branded 404
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GlossyButton.tsx
│   │   │   ├── GlassContainer.tsx
│   │   │   └── SectionReveal.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IndustryTicker.tsx
│   │   │   └── ValueProposition.tsx
│   │   ├── ai-solutions/
│   │   │   └── AICapabilityCard.tsx
│   │   ├── services/
│   │   │   └── ServiceBlock.tsx
│   │   ├── industries/
│   │   │   └── IndustryCard.tsx
│   │   ├── about/
│   │   │   └── AboutContent.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── data/
│   │   ├── industries.ts        # Nine industry entries with use cases
│   │   ├── ai-services.ts       # Six AI capability entries
│   │   └── services.ts          # Traditional service entries
│   ├── hooks/
│   │   └── useReducedMotion.ts  # Wrapper around Framer Motion hook
│   ├── lib/
│   │   └── emailjs.ts           # EmailJS send helper
│   ├── types/
│   │   └── index.ts             # All shared TypeScript interfaces
│   └── styles/
│       └── globals.css          # Tailwind base + custom glassmorphism utilities
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Actions: build + deploy to gh-pages
```
