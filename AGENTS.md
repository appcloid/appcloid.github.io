<!-- SPECKIT START -->
<!-- Active Plan: specs/001-appcloid-website/plan.md -->
# AppCloid Technologies — Agent Context

## Project Overview
- **Company**: AppCloid Technologies Pvt Ltd (serving the entire UK)
- **Mission**: Democratize elite, AI-first technology for SMBs across the UK.
- **Website goal**: The site is the ultimate proof of our engineering competence — zero bugs, instantly responsive, visually mesmerizing.
- **Constitution**: Read `.specify/memory/constitution.md` for the full, authoritative rulebook.

## Tech Stack (MANDATORY)
- **Framework**: Next.js (React, SSR/SSG for SEO)
- **Language**: TypeScript — strict mode, no `any`
- **Styling**: Tailwind CSS (utility-first)
- **Animation**: Framer Motion or GSAP (60fps+, physics-based)
- **State**: React Context or Zustand (lightweight only)

## Design System (NON-NEGOTIABLE)
- **Background**: Deep Midnight Blue `#0B0C10` → Rich Obsidian `#121212`
- **Accents**: Electric Cyan `#66FCF1` · Neon Purple `#BB86FC`
- **Surfaces**: Glassmorphism (translucent + blur + 1px frosted white border)
- **Headings**: Inter / Plus Jakarta Sans / Space Grotesk — bold, tight tracking
- **Body**: Roboto or SF Pro — clean, highly legible
- **Images**: NO stock photos. Use 3D renders, abstract geometry, thin-line glowing icons.
- **Motion**: Scroll-linked reveals, hover glow/scale, magnetic cursor — never abrupt.

## Component Architecture
Build strictly modular, reusable components: `<GlossyButton/>`, `<IndustryCard/>`, `<GlassContainer/>`.
Follow DRY principles. Every component MUST be independently testable.

## Tone of Voice
- Authoritative, innovative, approachable, clear, and to the point.
- Speak to the business owner's bottom line — clarity over jargon.
- Engaging microcopy (e.g. "Start Your Transformation", not "Submit").

## Quality Gates (ALL MANDATORY)
- Lighthouse score: 95–100 across Performance, Accessibility, Best Practices, SEO.
- Mobile-first — glossy feel MUST NOT degrade on small screens.
- WCAG 2.1 AA — high contrast, keyboard-navigable, ARIA labels on all interactive elements.
- Zero console errors, zero broken links, robust error boundaries.
<!-- SPECKIT END -->
