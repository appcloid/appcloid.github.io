# Data Model: AppCloid Technologies Website

**Feature**: `001-appcloid-website`
**Date**: 2026-06-14

---

## Entities

### `IndustryCard`

Represents a single industry sector displayed on the Industries page.

| Field | Type | Constraints |
|-------|------|-------------|
| `id` | `string` | Unique slug, e.g. `"restaurants"` |
| `sector` | `string` | Display name, e.g. `"Restaurants, Hospitality & Takeaways"` |
| `icon` | `ReactNode` | Thin-line SVG icon component |
| `useCases` | `string[]` | Min 2 items; each a single plain-language sentence |
| `accentColor` | `string` | Hex colour for glow/border accent specific to the card |

**State transitions**: `collapsed` ↔ `expanded` (toggled by click/tap; only one card expanded at a time on mobile, multiple allowed on desktop)

**Validation**:
- `useCases.length >= 2` (FR-006)
- `id` must be URL-safe (no spaces, lowercase)

---

### `ServiceCard`

Represents a single AI capability or traditional service offering.

| Field | Type | Constraints |
|-------|------|-------------|
| `id` | `string` | Unique slug, e.g. `"rag-architecture"` |
| `title` | `string` | Short technical label |
| `summary` | `string` | ≤ 20 words; plain-language business value statement |
| `detail` | `string` | Full explanation highlighting StudyStride use cases; ≤ 150 words |
| `icon` | `ReactNode` | Thin-line SVG icon component |
| `category` | `"ai" \| "traditional"` | Determines which page renders the card |

**State transitions**: `collapsed` ↔ `expanded` (click/tap to reveal `detail`)

---

### `NavLink`

Represents a single item in the global navigation.

| Field | Type | Constraints |
|-------|------|-------------|
| `href` | `string` | Absolute path, e.g. `"/ai-solutions"` |
| `label` | `string` | Display text; ≤ 20 chars |

**Fixed set** (not dynamic): Home, AI Solutions, Services, Industries, About, Contact

---

### `ContactFormData`

Data submitted by a visitor via the Contact page form.

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | `string` | Required; 2–100 chars |
| `company` | `string` | Required; 2–100 chars |
| `email` | `string` | Required; valid email format (RFC 5322) |
| `sector` | `string` | Required; one of the nine industry slugs or `"other"` |
| `message` | `string` | Required; 10–2000 chars |

**State transitions**: `idle` → `submitting` → `success` | `error`

**Validation**: All fields client-side before EmailJS dispatch. Error messages inline per field (FR-009).

---

### `PageMeta`

SEO metadata object generated per page via Next.js Metadata API.

| Field | Type |
|-------|------|
| `title` | `string` |
| `description` | `string` (≤ 160 chars) |
| `openGraph.title` | `string` |
| `openGraph.description` | `string` |
| `openGraph.image` | `string` (URL) |
| `structuredData` | `object` (JSON-LD, Schema.org) |

---

## Static Data Collections

### Industries (9 entries — `src/data/industries.tsx`)

| id | Sector |
|----|--------|
| `restaurants` | Restaurants, Hospitality & Takeaways |
| `construction` | Construction & Trades |
| `fashion` | Fashion & Boutique |
| `education` | Educational Institutes |
| `security` | Security Firms |
| `finance` | Banks & Financial Institutes |
| `science-tech` | Science & Technology |
| `real-estate` | Real Estate & Property Management |
| `healthcare` | Healthcare & Wellness |

### AI Services (6 entries — `src/data/ai-services.tsx`)

| id | Title |
|----|-------|
| `custom-ai-agents` | Custom AI Agents in the Cloud |
| `rag-architecture` | Retrieval-Augmented Generation (RAG) |
| `agentic-workflows` | Agentic Workflows & Automation |
| `mcp-servers` | Model Context Protocol (MCP) Servers |
| `prompt-engineering` | Advanced Prompt Engineering |
| `ai-first-dev` | AI-First Web & Mobile App Development |

### Traditional Services (5 entries — `src/data/services.tsx`)

| id | Title |
|----|-------|
| `back-office` | Bespoke Back-Office Systems |
| `social-media` | Social Media Management |
| `seo-marketing` | SEO, Digital Marketing & Brand Promotions |
| `web-dev` | Web Development |
| `mobile-dev` | Mobile App Development |
