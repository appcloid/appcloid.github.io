# Implementation Plan: AppCloid Technologies Website

**Branch**: `new-site` | **Date**: 2026-06-14 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-appcloid-website/spec.md`

---

## Summary

Full ground-up rebuild of the AppCloid Technologies website as a premium, visually mesmerising static Next.js site deployed to GitHub Pages. The site must serve as proof of AppCloid's engineering competence — achieving 95+ Lighthouse scores, strict WCAG 2.1 AA compliance, and a "highly glossy" dark-mode aesthetic using glassmorphism, Framer Motion animations, and the brand's Blue-Grey colour palette layered over a Midnight/Obsidian background system.

The site comprises six pages (Home, AI Solutions, Services, Industries, About, Contact), a reusable component library, and a static data layer. Form submissions use EmailJS (browser-side, no backend). The build output is a fully static export compatible with GitHub Pages. Implementation is organised into **10 phases** across a sequential foundation + parallel user-story delivery model.

---

## Technical Context

**Language/Version**: TypeScript 5+ (strict mode, no `any`)

**Framework**: Next.js 14+ (App Router, `output: 'export'`)

**Styling**: Tailwind CSS v3 + `@tailwindcss/typography`

**Animation**: Framer Motion v11

**Form Delivery**: EmailJS (`@emailjs/browser` v4)

**Hosting**: GitHub Pages (static export via GitHub Actions)

**Testing**: Manual validation per `quickstart.md`; no automated test suite in v1

**Target Platform**: Web (desktop + mobile); UK English (en-GB) only

**Performance Goals**: Google Lighthouse 95+ (Performance, Accessibility, Best Practices, SEO) on both desktop and mobile

**Constraints**: Fully static — no runtime server, no SSR, no API routes at runtime. EmailJS public key in env vars. No CMS.

**Scale/Scope**: 6 pages, ~20 reusable components, 20 static data entries, 1 GitHub Actions workflow

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Next.js + TypeScript strict | ✅ PASS | App Router, `output: 'export'`, strict TS |
| Tailwind CSS utility-first | ✅ PASS | Custom design tokens in `tailwind.config.ts` |
| Framer Motion / GSAP 60fps+ | ✅ PASS | Framer Motion v11 with `useReducedMotion` |
| Glassmorphism surfaces | ✅ PASS | `GlassContainer` component enforces the pattern |
| No stock photos | ✅ PASS | SVG icons + abstract CSS/SVG geometry |
| Scroll-linked reveals | ✅ PASS | `SectionReveal` wrapper component |
| Mobile-first | ✅ PASS | All layouts built mobile-first in Tailwind |
| WCAG 2.1 AA | ✅ PASS | Colour contrast checked; ARIA labels on all interactive elements |
| Modular / DRY components | ✅ PASS | ~20 components; data-driven from static data layer |
| UK English copy | ✅ PASS | en-GB locale; `<html lang="en-GB">` |
| Lighthouse 95–100 | ✅ PASS | Static export + `next/font` + `next/image` + Tailwind JIT |

**Post-design re-check**: ✅ All gates pass. Glassmorphism drawer, card flip, and EmailJS are all fully static-compatible. No gate violations requiring justification.

---

## Project Structure

### Documentation (this feature)

```text
specs/001-appcloid-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── ui-contracts.md  # Phase 1 output
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
appcloid.com/
├── public/
│   ├── CNAME
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout — Navbar, Footer, fonts, metadata, JSON-LD
│   │   ├── page.tsx                 # Home page
│   │   ├── ai-solutions/page.tsx
│   │   ├── services/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── not-found.tsx            # Branded 404
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
│   │   ├── industries.ts
│   │   ├── ai-services.ts
│   │   └── services.ts
│   ├── hooks/
│   │   └── useReducedMotion.ts
│   ├── lib/
│   │   └── emailjs.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .github/
    └── workflows/
        └── deploy.yml
```

**Structure Decision**: Web application (Option 2) — single Next.js App Router project. No separate backend; all data is static TypeScript files.

---

## Phase-by-Phase Implementation Guide

### Phase 1 — Foundation (Project Scaffold & Design System)

Set up the Next.js project, Tailwind design tokens, base layout (Navbar + Footer), and shared UI primitives before any page content is built.

**Key deliverables**: Working dev server, correct Tailwind tokens, `GlossyButton`, `GlassContainer`, `SectionReveal`, `Navbar` (desktop), `MobileDrawer`, `Footer`, TypeScript types, static data files.

---

### Phase 2 — Home Page (P1 — Primary Acquisition Flow)

Build the hero section, industry ticker, and value proposition section that form the P1 user story.

**Key deliverables**: `HeroSection` (full-viewport, animated), `IndustryTicker` (marquee), `ValueProposition` (three service highlights). All scroll-reveal animations applied.

---

### Phase 3 — AI Solutions Page (P2 — Technical Credibility)

Build the AI capabilities grid with expandable `AICapabilityCard` components.

**Key deliverables**: 6 × `AICapabilityCard` (collapsed → expanded on click/tap), page-level metadata, JSON-LD `Service` structured data.

---

### Phase 4 — Traditional Services Page (P3)

Build the always-visible service blocks for the five traditional offerings.

**Key deliverables**: 5 × `ServiceBlock` (no expand/collapse), CTA on each block, page metadata.

---

### Phase 5 — Industries Page (P3 — Sector Specificity)

Build the 9-card flip grid.

**Key deliverables**: 9 × `IndustryCard` (flip animation, 2+ use cases per card), page metadata, JSON-LD.

---

### Phase 6 — About Page (P4 — Trust & Brand Narrative)

Build the About page content.

**Key deliverables**: `AboutContent` (Glasgow story, UK reach, ethos), `LocalBusiness` JSON-LD structured data, page metadata.

---

### Phase 7 — Contact Page (P1 — Lead Capture)

Build the EmailJS-powered contact form.

**Key deliverables**: `ContactForm` (validation, loading/success/error states, EmailJS integration), env var setup, `.env.local` instructions.

---

### Phase 8 — SEO, Accessibility & 404

Implement sitewide SEO metadata, all JSON-LD schemas, branded 404, and final accessibility audit.

**Key deliverables**: `not-found.tsx`, sitewide `metadata` exports, `<html lang="en-GB">`, all ARIA labels verified, Lighthouse run.

---

### Phase 9 — GitHub Actions Deployment

Set up automated CI/CD to build and deploy the static export to GitHub Pages on every push to `new-site`.

**Key deliverables**: `.github/workflows/deploy.yml`, `CNAME` file (or custom domain config), `next.config.ts` `basePath` verified.

---

## Complexity Tracking

No constitution gate violations requiring justification.
