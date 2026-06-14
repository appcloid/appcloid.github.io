# Feature Specification: AppCloid Technologies Website

**Feature Branch**: `001-appcloid-website`

**Created**: 2026-06-14

**Status**: Draft

**Input**: Full website rebuild for AppCloid Technologies Pvt Ltd — a premium AI-first IT firm providing AI solutions and services.

---

## Clarifications

### Session 2026-06-14

- Q: How should the contact form submit leads? → A: EmailJS — sends directly from the browser to an email address; no backend server required.
- Q: What is the hosting and deployment target? → A: GitHub Pages with a fully static export; no server-side rendering at runtime.
- Q: How do industry cards reveal their detailed use cases? → A: Expand in-place — the card flips, expands, or reveals detail below itself on click, keeping the visitor on the same page.
- Q: What is the mobile navigation pattern? → A: Hamburger icon that opens a full-height slide-out drawer from the right edge, animated with a glassmorphism overlay.
- Q: What language and locale does the site use? → A: UK English only (en-GB), single locale — no internationalisation infrastructure required.
- Q: What are AppCloid's real business contact details? → A: Email: `contact@appcloid.com`.
- Q: Who writes the website copy? → A: The agent writes all copy — every headline, description, industry use case, AI capability explanation, and About page narrative — using the AppCloid brand voice (authoritative, innovative, approachable, clear, and to the point).
- Q: What social media links should be in the footer? → A: Use realistic placeholders for now (e.g., `https://linkedin.com/company/appcloid`); the URLs will be updated later.
- Q: Should analytics be integrated? → A: Yes, Google Analytics (GA4) using the provided measurement ID `G-0LB5NZPPR2`.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Prospective SMB Client Discovers AppCloid (Priority: P1)

A small-business owner (e.g. a restaurant owner or a plumber) lands on the AppCloid home page via Google. They are immediately impressed by the premium visual quality and within 30 seconds understand exactly what AppCloid does, which industries it serves, and how to get started.

**Why this priority**: This is the primary acquisition flow. Without capturing this visitor's interest the site has failed its core commercial purpose.

**Independent Test**: A non-technical user can navigate from the home page hero to the contact form and submit a lead — without any assistance — and receive a confirmation response.

**Acceptance Scenarios**:

1. **Given** a first-time visitor arrives on the home page, **When** they scroll past the hero section, **Then** they can clearly identify at least three services AppCloid offers and find the call-to-action within 5 seconds.
2. **Given** a visitor is in the restaurant industry, **When** they navigate to the "Industries We Serve" section, **Then** they see a tailored card for Restaurants & Hospitality with relevant use cases specific to their sector.
3. **Given** a visitor decides to make an enquiry, **When** they fill in the contact form and submit it, **Then** they receive an on-screen confirmation and the enquiry is captured successfully.

---

### User Story 2 — Corporate Decision-Maker Evaluates AI Capabilities (Priority: P2)

A CTO or IT Director at a mid-sized UK bank or educational institute visits the AI Solutions page to assess whether AppCloid has the technical depth to deliver enterprise-grade solutions such as RAG pipelines, agentic workflows, and MCP servers.

**Why this priority**: Winning enterprise contracts requires building technical credibility with informed buyers. This audience needs detailed, structured content to justify a business case internally.

**Independent Test**: A technically literate visitor can navigate directly to the AI Solutions page, read about all six core AI capabilities, and understand the business value of each — without needing to leave the page or contact AppCloid for clarification.

**Acceptance Scenarios**:

1. **Given** a technical decision-maker lands on the AI Solutions page, **When** they view the capability cards, **Then** each card clearly explains what the technology does in plain business language alongside the technical label.
2. **Given** a visitor wants to learn about a specific AI capability (e.g. RAG), **When** they interact with its card, **Then** they see an expanded explanation with a real-world use case relevant to a UK business.
3. **Given** a visitor finishes reviewing AI capabilities, **When** they are ready to proceed, **Then** a prominent call-to-action is visible to initiate a conversation with AppCloid.

---

### User Story 3 — Visitor Explores Traditional Services (Priority: P3)

A business owner looking for conventional IT services (website development, digital marketing, SEO) lands on the Traditional Services page to confirm AppCloid covers those needs too.

**Why this priority**: Not every prospective client needs AI. Traditional services remain an important commercial offering and must be presented clearly alongside the AI-first positioning.

**Independent Test**: A visitor can navigate to the Traditional Services page and identify all traditional service offerings with their descriptions — without visiting any other page.

**Acceptance Scenarios**:

1. **Given** a visitor arrives on the Traditional Services page, **When** they scroll through the page, **Then** they can identify all services including web development, mobile app development, SEO, digital marketing, and social media management.
2. **Given** a visitor identifies a relevant service, **When** they look for next steps, **Then** a clear call-to-action is available on or near each service block.

---

### User Story 4 — Industry-Specific Visitor Finds Relevant Content (Priority: P3)

A visitor from a specific sector (e.g. the construction trades or the healthcare industry) wants to quickly identify whether AppCloid has experience and specific offerings for their industry.

**Why this priority**: Sector-specific messaging dramatically increases conversion for non-technical buyers who need to feel understood before they trust a vendor.

**Independent Test**: A visitor from the security sector can navigate to the Industries page, find the Security Firms entry, read at least two specific use cases tailored to their industry, and reach a contact option — all within one page.

**Acceptance Scenarios**:

1. **Given** a visitor arrives on the Industries page, **When** they view the sector grid, **Then** they can identify all nine supported industries with distinct visual identities.
2. **Given** a visitor clicks or taps an industry card, **When** the card is activated, **Then** it expands or flips in-place to reveal at least two industry-specific use cases — without navigating away from the page.
3. **Given** a visitor has expanded an industry card, **When** they click or tap it again, **Then** it returns to its collapsed state.

---

### User Story 5 — Visitor Learns About AppCloid's Background (Priority: P4)

A potential enterprise partner or media professional wants to understand AppCloid's story and its commitment to technical excellence before recommending or partnering with them.

**Why this priority**: Trust signals and brand narrative are critical at the later stages of a buying decision, particularly for larger contracts.

**Independent Test**: A visitor can read the About page and come away with a clear understanding of AppCloid's founding mission, reach, and ethos — without needing to visit any other page.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the About page, **When** they read through it, **Then** they learn that AppCloid serves the entire UK and is committed to top-tier engineering standards.

---

### Edge Cases

- What happens when the contact form is submitted with missing required fields? → Inline validation messages must appear immediately with clear guidance.
- What happens if a visitor arrives on a broken/invalid URL? → A polished branded 404 page is displayed with navigation back to key sections.
- What happens on a very slow mobile connection? → Critical above-the-fold content must be visible within 3 seconds on a 3G connection; animations may be reduced or deferred.
- How does the site behave for users who prefer reduced motion? → All scroll and hover animations must respect the OS-level `prefers-reduced-motion` setting.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST include six primary pages: Home, AI Solutions, Traditional Services, Industries, About, and Contact.
- **FR-002**: The Home page MUST feature a hero section that immediately communicates AppCloid's value proposition, an animated ticker or carousel of served industries, and a primary call-to-action.
- **FR-003**: The AI Solutions page MUST present all six core AI capabilities (Custom AI Agents, RAG Architecture, Agentic Workflows & Automation, MCP Servers, Advanced Prompt Engineering, AI-First Web & Mobile App Development) as individually interactive, expandable cards.
- **FR-004**: The Traditional Services page MUST present Bespoke Back-Office Systems, Social Media Management, SEO & Digital Marketing, Web Development, and Mobile App Development as clearly separated service sections.
- **FR-005**: The Industries page MUST include dedicated interactive cards for all nine target industries: Restaurants/Hospitality/Takeaways, Construction & Trades, Fashion & Boutique, Educational Institutes, Security Firms, Banks & Financial Institutes, Science & Technology, Real Estate & Property Management, and Healthcare & Wellness. Each card MUST expand or flip in-place on click/tap to reveal its use cases, without routing to a separate page.
- **FR-006**: Each industry entry on the Industries page MUST include at least two specific use cases showing how AppCloid's services benefit that sector.
- **FR-007**: The About page MUST include AppCloid's UK-wide reach, founding mission, and commitment to technical excellence.
- **FR-008**: The Contact page MUST include a lead-capture form collecting at minimum the visitor's name, company name, email address, industry sector, and a message/enquiry field.
- **FR-009**: The contact form MUST validate all required fields before submission and display clear, inline error messages for missing or invalid inputs.
- **FR-010**: The site MUST display a branded 404 error page with navigation links back to the main sections.
- **FR-011**: All animations MUST respect the OS-level `prefers-reduced-motion` accessibility setting.
- **FR-012**: The site MUST be fully navigable via keyboard and must include ARIA labels on all interactive elements.
- **FR-013**: The navigation MUST be consistent across all pages and MUST collapse on mobile into a hamburger icon that opens a full-height slide-out drawer from the right edge; the drawer MUST be dismissible by tapping outside it or pressing the close control.
- **FR-014**: Structured data (Schema.org) MUST be implemented on all pages for SEO purposes.
- **FR-015**: The site MUST load above-the-fold content on mobile within 3 seconds on a standard 4G connection.
- **FR-016**: The contact form MUST submit enquiries via EmailJS, sending results directly to a configured AppCloid email address with no server-side backend.
- **FR-017**: The site MUST be exportable as a fully static build compatible with GitHub Pages hosting (no runtime server-side rendering).
- **FR-018**: The site MUST use UK English (en-GB) as the sole language and locale; no internationalisation (i18n) or multi-language infrastructure is required.
- **FR-019**: The Contact page and About page MUST display AppCloid's real business contact details: email `contact@appcloid.com`. These details MUST also be encoded in the `LocalBusiness` Schema.org JSON-LD structured data.
- **FR-020**: The site MUST integrate Google Analytics (GA4) using measurement ID `G-0LB5NZPPR2` across all pages.
- **FR-021**: The AI Solutions section MUST showcase "StudyStride" as the primary real-world application case study across its capabilities (e.g., Autonomous AI agents recommending topics, Computer Vision marking solutions from pictures, NLP creating coursework, Predictive Analytics ranking students and preparing reports, Intelligent Automation delivering lectures and sending notifications, Generative AI creating text/images/presentations). Exact percentages and references to "Scottish client" MUST NOT be used.

### Key Entities

- **Page**: A top-level navigable section of the website (Home, AI Solutions, Traditional Services, Industries, About, Contact).
- **Service Card**: A reusable UI component displaying a single AI or traditional service offering with title, summary, and an expandable detail area.
- **Industry Card**: A reusable UI component for a specific industry sector displaying a glowing icon, sector name, and a set of tailored use cases.
- **Lead Enquiry**: A visitor-submitted record containing contact details, sector, and message, captured via the Contact form.
- **Navigation**: The persistent site-wide menu linking all six primary pages plus a prominent CTA button.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify AppCloid's core value proposition within 10 seconds of arriving on the home page.
- **SC-002**: The site achieves a score of 95 or above across all four Google Lighthouse categories (Performance, Accessibility, Best Practices, SEO) on both desktop and mobile.
- **SC-003**: All six pages are navigable without any console errors or broken links in any major modern browser.
- **SC-004**: The contact form successfully captures a lead submission in under 2 minutes for a first-time user with no guidance.
- **SC-005**: The site renders correctly and maintains its premium aesthetic on screens ranging from 320px wide (small mobile) to 2560px wide (large desktop).
- **SC-006**: All interactive elements (buttons, cards, navigation links, form fields) are operable via keyboard alone.
- **SC-007**: Color contrast across all text elements meets WCAG 2.1 AA minimum ratios.
- **SC-008**: Above-the-fold content on mobile is visible within 3 seconds on a standard 4G connection.

---

## Assumptions

- The site will be statically exported and hosted on GitHub Pages; no runtime server-side rendering is required or available.
- No user authentication or login system is required for the initial launch; the contact form uses EmailJS to deliver enquiries directly to the AppCloid team's email address from the browser.
- All copy and imagery assets will be written by the agent using the AppCloid brand voice (authoritative, innovative, approachable, clear) and generated as part of the build process; no external CMS or content editing interface is required for v1. The user will review copy before launch.
- Social media links in the footer will be placeholder links until live accounts are confirmed.
- The nine target industries represent the complete list for v1; additional sectors may be added in future iterations.
- Google Analytics (GA4) is integrated natively via Next.js third-parties library.
- The site is UK English (en-GB) only; no internationalisation or multi-language support is planned for v1.
