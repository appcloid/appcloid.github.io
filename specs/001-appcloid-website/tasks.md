---
description: "Task list for AppCloid Technologies Website implementation"
---

# Tasks: AppCloid Technologies Website

**Input**: Design documents from `specs/001-appcloid-website/`

**Prerequisites**: plan.md ✅ · spec.md ✅ · research.md ✅ · data-model.md ✅ · contracts/ui-contracts.md ✅ · quickstart.md ✅

**Tests**: No automated test suite for v1 (not requested in spec). Manual validation via quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US5)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Project Scaffold & Design System)

**Purpose**: Initialize the Next.js project, install all dependencies, configure Tailwind design tokens, and establish the TypeScript type system. Nothing else can begin until this phase is complete.

- [x] T001 Scaffold Next.js 14+ project with App Router and TypeScript at repo root (`npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-git`)
- [x] T002 Configure `next.config.ts` with `output: 'export'`, `images: { unoptimized: true }`, and `trailingSlash: true` for GitHub Pages
- [x] T003 [P] Configure `tailwind.config.ts` with brand design tokens: midnight (`#0B0C10`), obsidian (`#121212`), cyan (`#66FCF1`), purple (`#BB86FC`), and Blue-Grey scale (`#384959`, `#6A89A7`, `#88BDF2`, `#BDDDFC`)
- [x] T004 [P] Configure `tsconfig.json` with `strict: true`, path aliases (`@/` → `src/`), and no `any` enforcement
- [x] T005 [P] Install animation, form, and utility dependencies: `framer-motion`, `@emailjs/browser`, `focus-trap-react` (for keyboard-accessible MobileDrawer focus trap per FR-012), `@next/third-parties` (for GA4 analytics per FR-020)
- [x] T006 [P] Create `src/styles/globals.css` with Tailwind directives and custom glassmorphism utility classes (`.glass`, `.glass-border`, `.glow-cyan`, `.glow-purple`)
- [x] T007 [P] Create `src/types/index.ts` with all shared TypeScript interfaces: `IndustryCard`, `ServiceCard`, `NavLink`, `ContactFormData`, `PageMeta`
- [x] T008 [P] Create `src/hooks/useReducedMotion.ts` wrapping Framer Motion's `useReducedMotion` hook for sitewide reduced-motion compliance
- [x] T009 [P] Create `src/data/industries.tsx` with all nine industry entries (id, sector, useCases × 2+, accentColor, icon referencing components from `src/components/icons/`)
- [x] T010 [P] Create `src/data/ai-services.tsx` with all six AI capability entries integrating StudyStride as the primary case study (id, title, summary, detail, category: 'ai', icon referencing components from `src/components/icons/`)
- [x] T011 [P] Create `src/data/services.tsx` with all five traditional service entries (id, title, summary, detail, category: 'traditional', icon referencing components from `src/components/icons/`)
- [x] T012 [P] Create `src/lib/emailjs.ts` with the `sendEnquiry(data: ContactFormData)` helper wrapping `emailjs.sendForm()`; all three config values (`SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`) sourced from `process.env.NEXT_PUBLIC_*` — none hardcoded
- [x] T013 [P] Create `.env.local` template (`.env.local.example`) with `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [x] T014 [P] Create `.github/workflows/deploy.yml` stub file (full configuration finalised in T045); trigger: push to `new-site`; steps placeholder: checkout → setup-node → build → upload-pages-artifact → deploy-pages (GitHub Actions source model, NOT gh-pages branch push)
- [x] T015 [P] Create `public/CNAME` file (placeholder for custom domain) and `public/favicon.ico`
- [x] T041 [P] Create all thin-line SVG icon components in `src/components/icons/` — one unique glowing icon per industry (9) and per service (11 total); export each as a named React component; import into `src/data/industries.tsx`, `src/data/ai-services.tsx`, `src/data/services.tsx` replacing placeholder references *(moved from Phase 9 — icons MUST exist before any component that renders them is built)*

**Checkpoint**: Project runs locally with `npm run dev` and builds cleanly with `npm run build`. Design tokens are visible in Tailwind IntelliSense. All 20 SVG icon components exist and import correctly from `src/components/icons/`.

---

## Phase 2: Foundational (Shared Layout & UI Primitives)

**Purpose**: Build the Navbar, MobileDrawer, Footer, and reusable UI primitives that every page depends on. These MUST be complete before any page can be assembled.

⚠️ **CRITICAL**: No page work can begin until this phase is complete.

- [x] T016 Create `src/components/ui/GlossyButton.tsx` — add `'use client'` directive at top (uses Framer Motion `whileHover`); three variants (primary: cyan-purple gradient + glow, secondary: glass surface, ghost: text + underline); scales 1.05 on hover; renders as `<a>` when `href` prop is provided; ARIA-compliant
- [x] T017 [P] Create `src/components/ui/GlassContainer.tsx` — pure CSS/Tailwind, no client directive needed; `backdrop-blur-md`, `bg-white/5`, `border border-white/10` surface; accepts `as`, `padding`, `className` props
- [x] T018 [P] Create `src/components/ui/SectionReveal.tsx` — add `'use client'` directive at top (uses Framer Motion `whileInView` and `useReducedMotion`); instant render (no animation) when reduced motion is active; accepts `direction` and `delay` props
- [x] T019 Create `src/components/layout/MobileDrawer.tsx` — add `'use client'` directive at top; full-height glassmorphism panel slides in from right edge via Framer Motion `x` transform; use `focus-trap-react` `<FocusTrap>` wrapper to trap keyboard focus inside drawer while open; overlay dismisses on click; closes on `Escape` key; instant (no animation) under reduced motion
- [x] T020 Create `src/components/layout/Navbar.tsx` — add `'use client'` directive at top (uses scroll listener and drawer state); sticky top bar; glassmorphism background appears on scroll > 50px; all six nav links visible on desktop (≥ 768px); hamburger icon on mobile triggers `MobileDrawer`; active route highlighted; includes "Start Your Transformation" CTA `GlossyButton`; nav links: Home `/`, AI Solutions `/ai-solutions`, Services `/services`, Industries `/industries`, About `/about`, Contact `/contact`
- [x] T021 [P] Create `src/components/layout/Footer.tsx` — dark footer with brand logo, nav links, social media placeholder links, copyright, and "en-GB" lang declaration
- [x] T022 Create `src/app/layout.tsx` — root layout: `<html lang="en-GB">`, `next/font` loading (Inter for headings, Roboto for body), `<Navbar />`, `<Footer />`, sitewide `Organization` JSON-LD (name: "AppCloid Technologies", url: site URL, email: contact@appcloid.com, areaServed: GB), global metadata defaults, and `<GoogleAnalytics gaId="G-0LB5NZPPR2" />` from `@next/third-parties/google`

**Checkpoint**: Navigate to `http://localhost:3000` — the Navbar and Footer render correctly. Mobile hamburger opens/closes the drawer. Focus trap works on keyboard.

---

## Phase 3: User Story 1 — Home Page (P1) 🎯 MVP

**Goal**: A first-time visitor lands on the home page, immediately understands AppCloid's value proposition, sees the industry ticker, and can reach the contact form.

**Independent Test**: VS-001 and VS-002 from `quickstart.md` pass completely.

### Implementation for User Story 1

- [x] T023 [US1] Create `src/components/home/HeroSection.tsx` — add `'use client'` directive at top; full-viewport-height section: animated abstract SVG geometry (Blue-Grey palette, CSS keyframe glow); headline ("Powering the UK's Most Ambitious Businesses With AI"); subheadline referencing UK-wide reach; two `GlossyButton` CTAs ("Start Your Transformation" → `/contact`, "Explore AI Solutions" → `/ai-solutions`); `next/image` with `priority` for any hero asset; `SectionReveal` not applied to hero (visible immediately)
- [x] T024 [P] [US1] Create `src/components/home/IndustryTicker.tsx` — infinitely scrolling marquee of nine industry names using CSS animation (`animation: scroll linear infinite`); pauses on hover; renders as static comma-separated list when `useReducedMotion()` is true; accepts `items: string[]` and `speed?: number` props
- [x] T025 [P] [US1] Create `src/components/home/ValueProposition.tsx` — three-column feature highlight grid (AI Agents, Bespoke Web/Apps, Digital Transformation) wrapped in `SectionReveal`; each column uses `GlassContainer`; `GlossyButton` secondary CTA at bottom
- [x] T026 [US1] Create `src/app/page.tsx` — assembles `HeroSection`, `IndustryTicker`, `ValueProposition`; exports `metadata` (title: "AppCloid Technologies — AI-First IT for UK Businesses", description ≤ 160 chars); `WebPage` JSON-LD

**Checkpoint**: VS-001 from `quickstart.md` passes. Value proposition visible within 5 seconds. Industry ticker scrolls (or is static under reduced motion).

---

## Phase 4: User Story 2 — AI Solutions Page (P2)

**Goal**: A technically literate visitor can read all six AI capabilities in plain business language and find a CTA to engage AppCloid.

**Independent Test**: VS-003 from `quickstart.md` passes.

### Implementation for User Story 2

- [x] T027 [US2] Create `src/components/ai-solutions/AICapabilityCard.tsx` — `GlassContainer`-based card; collapsed: shows icon + title + summary; click/tap expands (Framer Motion `AnimatePresence` height animation) to reveal `detail` text and a real-world StudyStride example; `chevron` icon rotates 180° on expand; ARIA `aria-expanded` attribute; keyboard-operable (Enter/Space toggles)
- [x] T028 [US2] Create `src/app/ai-solutions/page.tsx` — hero banner ("Our AI Capabilities"); grid of six `AICapabilityCard` components sourced from `src/data/ai-services.tsx`; `SectionReveal` per card row; closing `GlossyButton` primary CTA ("Start Your Transformation" → `/contact`); exports `metadata`; `Service` JSON-LD for each capability

**Checkpoint**: VS-003 from `quickstart.md` passes. All six cards expand and collapse. CTA is visible.

---

## Phase 5: User Story 3 — Traditional Services Page (P3)

**Goal**: A visitor looking for conventional IT services can identify all five service offerings and find a CTA on each.

**Independent Test**: Visitor can identify all five services with descriptions and CTAs without leaving the page.

### Implementation for User Story 3

- [x] T029 [US3] Create `src/components/services/ServiceBlock.tsx` — always-visible layout block (no expand/collapse); icon + title + summary + detail paragraph + `GlossyButton` secondary ("Discuss This Service" → `/contact`); alternating layout (icon-left / icon-right) on desktop; full-width stack on mobile; wrapped in `SectionReveal`
- [x] T030 [US3] Create `src/app/services/page.tsx` — hero banner ("Our Services"); five `ServiceBlock` components sourced from `src/data/services.tsx`; page-level `GlossyButton` primary CTA at bottom; exports `metadata`; `Service` JSON-LD for each service

**Checkpoint**: All five service blocks visible with descriptions and CTAs. No expand/collapse interaction.

---

## Phase 6: User Story 4 — Industries Page (P3)

**Goal**: A sector-specific visitor finds their industry card, flips it to reveal tailored use cases, and can reach the contact form.

**Independent Test**: VS-004 from `quickstart.md` passes. All nine cards flip; each reveals ≥ 2 use cases.

### Implementation for User Story 4

- [x] T031 [US4] Create `src/components/industries/IndustryCard.tsx` — CSS 3D card flip: front face (glowing icon + sector name + accent-colour border); back face (`GlassContainer` with `useCases` list + "flip back" `GlossyButton` ghost); `useState` boolean controls flip; Framer Motion `rotateY` for flip animation; instant toggle (no animation) under `useReducedMotion()`; ARIA `aria-pressed` on the card toggle; keyboard-operable (Enter/Space flips)
- [x] T032 [US4] Create `src/app/industries/page.tsx` — hero banner ("Industries We Serve"); responsive grid (1-col mobile, 2-col tablet, 3-col desktop) of nine `IndustryCard` components sourced from `src/data/industries.tsx`; `SectionReveal` on the grid; closing CTA section ("Don't see your industry? Let's talk." → `/contact`); exports `metadata`; `LocalBusiness` JSON-LD

**Checkpoint**: VS-004 from `quickstart.md` passes. VS-005 (reduced motion) passes for card flip.

---

## Phase 7: User Story 5 — About Page (P4)

**Goal**: A potential enterprise partner or media professional reads AppCloid's story, Glasgow roots, UK reach, and engineering ethos.

**Independent Test**: Visitor reads the About page and understands Glasgow HQ, UK reach, founding mission without leaving the page.

### Implementation for User Story 5

- [x] T033 [US5] Create `src/components/about/AboutContent.tsx` — narrative sections: founding story, UK-wide reach, technical ethos, team/values; email: `contact@appcloid.com`; uses `GlassContainer` for callout blocks; `SectionReveal` on each section; "Partner With Us" `GlossyButton` primary CTA
- [x] T034 [US5] Create `src/app/about/page.tsx` — assembles `AboutContent`; exports `metadata`; `ProfessionalService` + `LocalBusiness` JSON-LD with addressCountry: UK, email: contact@appcloid.com, `areaServed: "GB"`

**Checkpoint**: About page renders with all sections. JSON-LD validates in Google Rich Results Test.

---

## Phase 8: User Story 1 (continued) — Contact Page & EmailJS Integration (P1)

**Goal**: A visitor fills in the contact form, submits it successfully, and receives an on-screen confirmation. An email is delivered to AppCloid's inbox.

**Independent Test**: VS-006 from `quickstart.md` passes end-to-end.

### Implementation

- [x] T035 [US1] Create `src/components/contact/ContactForm.tsx` — controlled form with `useState` per field (`name`, `company`, `email`, `sector` dropdown of nine industries + "Other", `message`); client-side validation (required + email format + message min-length); inline per-field error messages; `submitting` / `success` / `error` state machine; submit button shows spinner during `submitting`, disabled; on success: renders success message and resets form; on error: renders error message and re-enables; uses `src/lib/emailjs.ts` helper; ARIA `aria-live="polite"` on status region
- [x] T036 [US1] Create `src/app/contact/page.tsx` — hero banner ("Let's Talk"); conversational intro copy; `ContactForm`; fallback contact block: email `contact@appcloid.com`, address Serving the United Kingdom; exports `metadata`; `ContactPage` JSON-LD

**Checkpoint**: VS-006 from `quickstart.md` passes. Inline validation fires on blur and on submit. EmailJS delivers to configured inbox.

---

## Phase 9: SEO, Accessibility, 404 & Polish

**Purpose**: Complete all sitewide SEO metadata, accessibility audits, branded 404, and performance polish.

- [x] T037 Create `src/app/not-found.tsx` — branded 404: midnight background, "404" in cyan gradient text, "Page Not Found" headline, brief copy, `GlossyButton` links back to Home and Contact; no broken layout
- [x] T038 [P] Audit all six pages and `layout.tsx` for ARIA compliance: verify `aria-label` on all icon buttons (hamburger, close drawer, card flip), `aria-expanded` on expandable cards, `aria-live` on form status, `role="navigation"` on `<nav>`, `<main>` landmark on page content; include a 320px viewport test for all pages (resize DevTools to 320px width and confirm no layout overflow)
- [x] T039 [P] Verify colour contrast across all text/background combinations against WCAG 2.1 AA minimum ratios (4.5:1 for body, 3:1 for large text) using browser DevTools or axe extension; fix any failures in `globals.css` or component styles
- [x] T040 [P] Add `<link rel="preconnect">` for EmailJS SDK in `layout.tsx`; confirm `next/font` is used for Inter and Roboto (zero layout shift); verify no `<link>` font tags exist
- [x] T041a Run intermediate Lighthouse throttle check after T026 (Home page): open Chrome DevTools → Lighthouse → Mobile → throttle to Slow 4G → verify LCP < 3s; fix any above-fold blocking resources before continuing to Phases 4–8 *(early LCP gate to prevent late rework)*
- [x] T042 Run `npm run build` and verify zero TypeScript errors, zero ESLint errors, and `/out` directory contains HTML for all six pages plus `404.html`
- [x] T043 Run Lighthouse audit (Chrome DevTools) against static export preview (`npx serve out`); verify ≥ 95 across Performance, Accessibility, Best Practices, SEO on both desktop and mobile; address any failures
- [x] T044 [P] Run VS-007 through VS-010 from `quickstart.md` and confirm all pass; document results

**Checkpoint**: Lighthouse 95+ ✅ · Zero TypeScript errors ✅ · All quickstart scenarios pass ✅

---

## Phase 10: GitHub Actions Deployment

**Purpose**: Automate the build and deployment pipeline so every push to `new-site` publishes the updated site to GitHub Pages.

- [x] T045 Finalise `.github/workflows/deploy.yml` (building on T014 stub): complete workflow with `actions/checkout@v4` → `actions/setup-node@v4` (Node 20) → `npm ci` → `npm run build` → `actions/upload-pages-artifact@v3` (`path: ./out`) → `actions/deploy-pages@v4`; set `permissions: pages: write, id-token: write, contents: read`; GitHub Actions source model (not gh-pages branch)
- [x] T046 [P] Configure GitHub repository Settings → Pages → Source: "GitHub Actions" (not "Deploy from a branch"); verify `CNAME` file or custom domain is set correctly
- [x] T047 Push `new-site` branch and confirm deployment succeeds in GitHub Actions; verify live URL loads correctly and has no broken assets

**Checkpoint**: Live GitHub Pages deployment verified ✅

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (Foundation)**: Depends on Phase 1 — BLOCKS all pages
- **Phase 3 (Home — US1)**: Depends on Phase 2 — MVP deliverable; also satisfies P1 contact story foundation
- **Phase 4 (AI Solutions — US2)**: Depends on Phase 2 — independent of Phase 3
- **Phase 5 (Services — US3)**: Depends on Phase 2 — independent of Phases 3–4
- **Phase 6 (Industries — US4)**: Depends on Phase 2 — independent of Phases 3–5
- **Phase 7 (About — US5)**: Depends on Phase 2 — independent of Phases 3–6
- **Phase 8 (Contact — US1 continued)**: Depends on Phase 2 — depends on T013 (EmailJS env); can run in parallel with Phases 4–7
- **Phase 9 (Polish & SEO)**: Depends on ALL pages being complete (Phases 3–8)
- **Phase 10 (Deployment)**: Depends on Phase 9

### User Story Dependencies

- **US1 (P1)**: Foundation complete → Phase 3 + Phase 8 (can be split across sessions)
- **US2 (P2)**: Foundation complete → Phase 4 (independent)
- **US3 (P3)**: Foundation complete → Phase 5 (independent)
- **US4 (P3)**: Foundation complete → Phase 6 (independent)
- **US5 (P4)**: Foundation complete → Phase 7 (independent)

### Parallel Opportunities Within Phases

```bash
# Phase 1 — all [P] tasks run simultaneously after T001, T002:
T003, T004, T005, T006, T007, T008, T009, T010, T011, T012, T013, T014, T015, T041

# Phase 2 — sequential build order (Navbar depends on MobileDrawer):
T016, T017, T018 (parallel) → T019 → T020 → T021, T022 (parallel)

# Phases 3–8 — all user story pages run in parallel after Phase 2:
Phase 3 (T023–T026) ‖ Phase 4 (T027–T028) ‖ Phase 5 (T029–T030)
‖ Phase 6 (T031–T032) ‖ Phase 7 (T033–T034) ‖ Phase 8 (T035–T036)

# Phase 9 — T037 sequential; T038–T041 parallel; T042, T043, T044 sequential:
T037 → T038, T039, T040, T041 (parallel) → T042 → T043 → T044
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T015)
2. Complete Phase 2: Foundation (T016–T022)
3. Complete Phase 3: Home Page (T023–T026)
4. Complete Phase 8: Contact Page (T035–T036)
5. **STOP and VALIDATE**: Run VS-001, VS-002, VS-006 from `quickstart.md`
6. Deploy MVP to GitHub Pages (Phase 10)

### Incremental Delivery

1. MVP (US1 Home + Contact) → validate → deploy
2. Add US2 (AI Solutions) → validate VS-003 → deploy
3. Add US3 (Services) → validate → deploy
4. Add US4 (Industries) → validate VS-004, VS-005 → deploy
5. Add US5 (About) → validate → deploy
6. Phase 9 Polish → Lighthouse 95+ → final deploy

### Parallel Team Strategy

With multiple developers after Phase 2 is complete:
- Developer A: Phase 3 (Home) + Phase 8 (Contact)
- Developer B: Phase 4 (AI Solutions) + Phase 5 (Services)
- Developer C: Phase 6 (Industries) + Phase 7 (About)

---

## Notes

- `[P]` tasks = different files, no dependencies — safe to run in parallel
- `[US#]` label maps task to specific user story for traceability
- No automated tests in v1 — use `quickstart.md` validation scenarios instead
- All animated components MUST pass the reduced-motion check (T008 `useReducedMotion` hook)
- All Framer Motion components MUST declare `'use client'` at the top of the file (Next.js App Router defaults to Server Components)
- All three EmailJS config values (`SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`) come from `process.env.NEXT_PUBLIC_*` — none are hardcoded in source
- URL scheme: `/` Home · `/ai-solutions` AI Solutions · `/services` Services · `/industries` Industries · `/about` About · `/contact` Contact
- Commit after each phase checkpoint to maintain a clean Git history
- Stop at any phase checkpoint to validate independently before proceeding
