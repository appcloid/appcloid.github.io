# UI Contracts: AppCloid Technologies Website

**Feature**: `001-appcloid-website`
**Date**: 2026-06-14

These contracts define the component-level interface (props API) for all reusable components. They are the "surface area" that page files consume — equivalent to REST API contracts for a web service.

---

## `<GlossyButton />`

```typescript
interface GlossyButtonProps {
  /** Button label text */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Navigate to this href (renders as <a> if provided) */
  href?: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Full width of its container */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA label for icon-only buttons */
  'aria-label'?: string;
}
```

**Behaviour**: Primary variant uses cyan-to-purple gradient with glow on hover. Secondary uses glassmorphism surface. Ghost is text-only with underline on hover. All variants scale to 1.05 on hover (unless `prefers-reduced-motion`).

---

## `<GlassContainer />`

```typescript
interface GlassContainerProps {
  children: React.ReactNode;
  /** Additional Tailwind classes */
  className?: string;
  /** Padding preset */
  padding?: 'sm' | 'md' | 'lg';
  /** Render as a specific HTML element */
  as?: 'div' | 'section' | 'article' | 'aside';
}
```

**Behaviour**: Renders a `backdrop-blur-md` panel with `bg-white/5` fill and `border border-white/10` frosted border — the glassmorphism surface pattern.

---

## `<SectionReveal />`

```typescript
interface SectionRevealProps {
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Direction of entry */
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}
```

**Behaviour**: Wraps children in a Framer Motion `whileInView` animation. Instantly renders children (no animation) when `prefers-reduced-motion` is active.

---

## `<Navbar />`

```typescript
interface NavbarProps {
  /** Current pathname for active link highlighting */
  currentPath: string;
}
```

**Behaviour**: Sticky top bar. On scroll > 50px, applies a glassmorphism background. On mobile (< 768px), shows hamburger icon. Hamburger opens `<MobileDrawer />`.

---

## `<MobileDrawer />`

```typescript
interface MobileDrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Called when the drawer should close */
  onClose: () => void;
  /** Nav links to render */
  links: NavLink[];
}
```

**Behaviour**: Full-height panel slides in from right edge. Overlay behind it closes the drawer on click. Focus is trapped inside while open. Closes on route change. Animated with Framer Motion `x` transform. Instant (no animation) under `prefers-reduced-motion`.

---

## `<IndustryCard />`

```typescript
interface IndustryCardProps {
  industry: IndustryCard;  // See data-model.md
}
```

**Behaviour**: Front face shows icon + sector name. Click/tap triggers a 3D Y-axis flip (CSS `rotateY`) to reveal back face with `useCases` list and a "flip back" button. Only one card expanded at a time on mobile. Instant toggle (no flip animation) under `prefers-reduced-motion`.

---

## `<AICapabilityCard />`

```typescript
interface AICapabilityCardProps {
  service: ServiceCard;   // category === 'ai'
}
```

**Behaviour**: Collapsed state shows icon + title + summary. Click/tap expands (height animation) to reveal `detail`. Uses `AnimatePresence` for smooth height transition.

---

## `<ServiceBlock />`

```typescript
interface ServiceBlockProps {
  service: ServiceCard;   // category === 'traditional'
}
```

**Behaviour**: Always-visible layout block (no expand/collapse). Shows icon, title, summary, detail, and a `<GlossyButton>` CTA linking to `/contact`.

---

## `<ContactForm />`

```typescript
// No external props — self-contained with internal state
// Exposes no ref or callback; success/error communicated via inline UI
```

**Behaviour**: Controlled form with `useState` for each field. On submit: validates all fields, sets state to `submitting`, calls `emailjs.sendForm()`. On success: shows success message, resets form. On error: shows error message, re-enables fields. Submit button disabled during `submitting` state.

---

## `<HeroSection />`

```typescript
// No external props — content is static, sourced from copy constants
```

**Behaviour**: Full-viewport-height section. Contains headline, subheadline, two `<GlossyButton>` CTAs (primary: "Start Your Transformation" → `/contact`; secondary: "See Our Work" → `/ai-solutions`), and an animated abstract geometry element (CSS/SVG animation using brand colours).

---

## `<IndustryTicker />`

```typescript
interface IndustryTickerProps {
  /** Labels to scroll through */
  items: string[];
  /** Speed in pixels per second */
  speed?: number;
}
```

**Behaviour**: Infinitely scrolling marquee of industry names. Pauses on hover. Renders as a static comma-separated list under `prefers-reduced-motion`.
