# Quickstart Validation Guide: AppCloid Technologies Website

**Feature**: `001-appcloid-website`
**Date**: 2026-06-14

This guide documents how to spin up, validate, and manually verify the website works end-to-end — without implementation code. Use this to confirm each user story is met before deployment.

---

## Prerequisites

- Node.js 20+ installed
- Git (on the `new-site` branch)
- A free EmailJS account with a Service ID, Template ID, and Public Key configured
- A `.env.local` file at the project root with:
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
  ```

---

## Setup Commands

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# → Site available at http://localhost:3000

# Build the static export (validates the GitHub Pages build)
npm run build
# → Output in /out directory (no errors expected)

# Preview the static export locally
npx serve out
# → Site available at http://localhost:3000
```

---

## Validation Scenarios

### VS-001 — Home Page Hero (User Story 1, SC-001)

1. Open `http://localhost:3000`
2. **Verify**: Full-viewport hero section is visible immediately
3. **Verify**: Headline communicates AppCloid's value proposition (no scrolling required)
4. **Verify**: Two CTA buttons are visible — "Start Your Transformation" and "See Our Work"
5. **Verify**: The industry ticker is scrolling below the hero (or static list if reduced motion is active)
6. **Verify**: Page loads above-the-fold content in < 3 seconds on a throttled network (Chrome DevTools → Network → "Slow 4G")

**Expected**: All items confirmed visually ✅

---

### VS-002 — Navigation (FR-012, FR-013)

1. On desktop: verify all six nav links are visible in the top bar (Home, AI Solutions, Services, Industries, About, Contact)
2. Resize browser to < 768px width
3. **Verify**: Nav links are hidden; hamburger icon is visible in top-right
4. Click the hamburger icon
5. **Verify**: Full-height drawer slides in from the right with glassmorphism effect
6. **Verify**: Clicking outside the drawer or pressing Escape closes it
7. **Verify**: Tab key cycles through drawer links without leaving the drawer (focus trap)

**Expected**: All items confirmed ✅

---

### VS-003 — AI Solutions Page (User Story 2)

1. Navigate to `http://localhost:3000/ai-solutions`
2. **Verify**: Six AI capability cards are visible
3. Click on the "RAG Architecture" card
4. **Verify**: Card expands to reveal a detailed plain-language explanation and a UK business example
5. Click the card again
6. **Verify**: Card collapses back to its summary state
7. **Verify**: A "Start Your Transformation" or similar CTA is visible on the page

**Expected**: All items confirmed ✅

---

### VS-004 — Industries Page — Card Flip (User Story 4, FR-005)

1. Navigate to `http://localhost:3000/industries`
2. **Verify**: Nine industry cards are visible in a grid, each with a distinct icon and sector name
3. Click on "Restaurants, Hospitality & Takeaways"
4. **Verify**: Card flips to reveal at least two specific use cases on the back face
5. Click the "flip back" button on the card
6. **Verify**: Card returns to its front face

**Expected**: All items confirmed ✅

---

### VS-005 — Reduced Motion (FR-011)

1. Enable "Reduce motion" in your OS accessibility settings (macOS: System Settings → Accessibility → Display → Reduce Motion)
2. Reload `http://localhost:3000`
3. **Verify**: No scroll-triggered animations play
4. Navigate to `/industries` and click a card
5. **Verify**: Card toggles instantly (no flip animation)
6. Navigate back to home
7. **Verify**: Industry ticker is rendered as a static list, not scrolling

**Expected**: All animations suppressed ✅

---

### VS-006 — Contact Form (User Story 1, SC-004, FR-008, FR-009)

1. Navigate to `http://localhost:3000/contact`
2. Click "Submit" without filling in any fields
3. **Verify**: Inline validation error messages appear on all required fields
4. Fill in all fields with valid data
5. Click "Start Your Transformation" (submit button)
6. **Verify**: Button shows loading state during submission
7. **Verify**: Success message appears on screen after submission
8. **Verify**: An email is received at the configured AppCloid email address

**Expected**: Lead captured successfully ✅

---

### VS-007 — 404 Page (FR-010)

1. Navigate to `http://localhost:3000/this-page-does-not-exist`
2. **Verify**: A branded 404 page is displayed (not a generic browser error)
3. **Verify**: Navigation links to main site sections are visible

**Expected**: Branded 404 displayed ✅

---

### VS-008 — Lighthouse Score (SC-002)

1. Build and serve the static export (`npm run build && npx serve out`)
2. Open Chrome DevTools → Lighthouse
3. Run audit for Desktop and Mobile
4. **Verify**: Scores ≥ 95 across Performance, Accessibility, Best Practices, SEO

**Expected**: 95+ across all four categories ✅

---

### VS-009 — Keyboard Navigation (SC-006, FR-012)

1. Open `http://localhost:3000`
2. Press `Tab` repeatedly without using the mouse
3. **Verify**: Focus indicator is visible on every interactive element
4. **Verify**: All nav links, buttons, cards, and form fields are reachable via Tab
5. Press `Enter` on each CTA button
6. **Verify**: Expected navigation or action occurs

**Expected**: Fully keyboard navigable ✅

---

### VS-010 — GitHub Pages Static Export (FR-017)

1. Run `npm run build`
2. **Verify**: `/out` directory is created with no build errors
3. **Verify**: All six pages have corresponding `.html` files in `/out`
4. **Verify**: No server-side-only Next.js features (e.g. `getServerSideProps`) are used anywhere in the codebase

**Expected**: Clean static build ✅

---

## References

- [Data Model](../data-model.md) — entity shapes and static data collections
- [UI Contracts](../contracts/ui-contracts.md) — component props APIs
- [Feature Spec](../spec.md) — all functional requirements and success criteria
