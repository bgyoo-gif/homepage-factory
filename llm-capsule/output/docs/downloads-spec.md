# Downloads Page - B-Type Design Specification

> Brand: **llm-capsule**
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/downloads.html`
> Output: `llm-capsule/output/html/downloads-b-type.html`
> DS Files: `design-system-core.md` + `design-system-capsule.md`
> Nav/Footer reference: `llm-capsule/output/html/index-b-type.html`

---

## Page Overview

| Item | Value |
|------|-------|
| Page title | Downloads -- LLM Capsule Documentation |
| Tone | Information hub / resource catalog |
| Total sections | 3 (Hero + Downloads Grid + CTA) |
| Complexity | Low -- lean download hub page |

---

## Section Map

| # | Section | Layout Pattern | Background |
|---|---------|---------------|------------|
| 1 | Hero | [A] Hero text-only `ds-hero--text-only` | White (no bg image -- Hero text-only rule) |
| 2 | Downloads Grid | [V-2] Gradient Card grid `ds-card-grid--3col` | White |
| 3 | CTA | [K] CTA band `ds-cta-band` | Background image: `ds-bg--grad-deep` |

---

## Section 1: Hero

**Pattern:** [A] Hero text-only -- `ds-hero--text-only`
**Background:** White (Hero text-only -- bg image forbidden)

### Structure

```
ds-section ds-section--hero
  ds-container
    ds-hero ds-hero--text-only
      h1.ds-hero__title
        "Documentation & " + span.ds-text--brand "Downloads"
      p.ds-hero__description
        "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation."
```

### Content Mapping

| Element | Source | DS Class |
|---------|--------|----------|
| Title | "Documentation & Downloads" | `ds-hero__title` |
| Title emphasis keyword | "Downloads" | `ds-text--brand` |
| Description | "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation." | `ds-hero__description` |
| Breadcrumb | Home / Resources / Downloads | Omit -- B-type does not include breadcrumb in hero |
| Eyebrow "Downloads" | A-type has eyebrow | **Delete** (eyebrow forbidden) |

### Notes
- No CTA buttons in hero (downloads page is informational)
- No screenshot frame
- padding-top: 100px fixed (ds-section--hero)

---

## Section 2: Downloads Grid

**Pattern:** [V-2] Gradient Card grid -- `ds-card-grid--3col` with `ds-card--gradient` cards
**Background:** White

### Section Header

```
ds-section-header ds-section-header--underline
  h2.ds-section-header__title
    "Available " + span.ds-text--brand "Resources"
  p.ds-section-header__description
    "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation."
```

| Element | Value |
|---------|-------|
| Title | "Available Resources" |
| Title emphasis keyword | "Resources" |
| Description | "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation." (derived from hero/page description -- A-type has no explicit section header for this grid) |
| Alignment | center |

### Cards (3 gradient cards in 3-col grid)

Each card uses `ds-card--gradient` with `ds-card--gradient__inner`.

**Card 1: Architecture Brief**

```
ds-card--gradient ds-card--gradient-indigo
  ds-card--gradient__inner
    [Lucide icon: file-text, ds-icon--lg, color: var(--ds-color-brand-primary)]
    h3.ds-card__title--sm "Architecture Brief"
    p.ds-card__description "Technical overview of the LLM Capsule architecture -- encapsulation, trust boundary, restoration, and deployment models."
    ds-card__button
      span.ds-btn.ds-btn--secondary.ds-btn--sm [disabled] "Download PDF (coming soon)"
```

| Field | Value |
|-------|-------|
| Gradient variant | `ds-card--gradient-indigo` |
| Icon | `file-text` (Lucide) |
| Title | "Architecture Brief" |
| Description | "Technical overview of the LLM Capsule architecture -- encapsulation, trust boundary, restoration, and deployment models." |
| Button text | "Download PDF (coming soon)" |
| Button state | **Disabled**: use `<span>` instead of `<a>`, add `pointer-events: none; opacity: 0.5;` and `aria-disabled="true"` |

**Card 2: Product Overview**

```
ds-card--gradient ds-card--gradient-blue
  ds-card--gradient__inner
    [Lucide icon: clipboard-list, ds-icon--lg, color: var(--ds-color-brand-secondary)]
    h3.ds-card__title--sm "Product Overview"
    p.ds-card__description "Executive summary of LLM Capsule capabilities, competitive positioning, and enterprise use cases."
    ds-card__button
      span.ds-btn.ds-btn--secondary.ds-btn--sm [disabled] "Download PDF (coming soon)"
```

| Field | Value |
|-------|-------|
| Gradient variant | `ds-card--gradient-blue` |
| Icon | `clipboard-list` (Lucide) |
| Title | "Product Overview" |
| Description | "Executive summary of LLM Capsule capabilities, competitive positioning, and enterprise use cases." |
| Button text | "Download PDF (coming soon)" |
| Button state | **Disabled**: same as Card 1 |

**Card 3: Integration Guide**

```
ds-card--gradient ds-card--gradient-green
  ds-card--gradient__inner
    [Lucide icon: cog, ds-icon--lg, color: var(--ds-color-brand-accent)]
    h3.ds-card__title--sm "Integration Guide"
    p.ds-card__description "Technical integration documentation for enterprise deployment -- API reference, configuration, and deployment instructions."
    ds-card__button
      span.ds-btn.ds-btn--secondary.ds-btn--sm [disabled] "Download PDF (coming soon)"
```

| Field | Value |
|-------|-------|
| Gradient variant | `ds-card--gradient-green` |
| Icon | `cog` (Lucide) |
| Title | "Integration Guide" |
| Description | "Technical integration documentation for enterprise deployment -- API reference, configuration, and deployment instructions." |
| Button text | "Download PDF (coming soon)" |
| Button state | **Disabled**: same as Card 1 |

### Disabled Button CSS

```css
.ds-btn[aria-disabled="true"],
.ds-btn--disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: default;
}
```

### Layout Notes
- 3-col grid on desktop, 2-col on tablet, 1-col on mobile
- All cards should have equal height via flex column + `ds-card__button { margin-top: auto; }`
- Gradient cards provide visual variety despite the simple page structure
- Using 3 different gradient variants (indigo/blue/green) to distinguish document types
- Green gradient card variables are defined in `design-system-capsule.md`

---

## Section 3: CTA Band

**Pattern:** [K] CTA band -- `ds-cta-band`
**Background:** Background image `ds-bg--grad-deep` with overlay
**Position:** Outside `ds-container`, full-width

### Structure

```
ds-cta-band ds-bg--grad-deep
  ds-cta-band__overlay (semi-transparent overlay on bg image)
  ds-cta-band__inner
    h2.ds-cta-band__title
      "See how " + span.ds-text--product "LLM Capsule" + " works with your data"
    p.ds-cta-band__description
      "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
    div.ds-cta-band__actions
      a.ds-btn.ds-btn--md "Request PoV" -> href="request-pov.html"
      a.ds-btn.ds-btn--md.ds-btn--outline-light "Talk to an Architect" -> href="architecture.html"
      a.ds-btn.ds-btn--sm.ds-btn--secondary "Available on AWS Marketplace" -> href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener"
```

### Content Mapping

| Element | Source text | Notes |
|---------|-----------|-------|
| Title | "See how LLM Capsule works with your data" | "LLM Capsule" wrapped in `span.ds-text--product` (Oxanium font) |
| Description | "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." | Full original text |
| Primary CTA | "Request PoV" | `ds-btn ds-btn--md`, white bg on dark bg (CTA band convention) |
| Secondary CTA | "Talk to an Architect" | `ds-btn ds-btn--md ds-btn--outline-light`, outline on dark bg |
| AWS Marketplace | "Available on AWS Marketplace" | `ds-btn ds-btn--sm ds-btn--secondary` -- external service link must be button (DS rule) |

### Removed from A-type
- Eyebrow "Get Started" -- deleted per DS rules (eyebrow forbidden)
- Secondary link row with emoji icons -- consolidated: AWS Marketplace becomes button in actions row
- "Download Architecture Brief" self-link removed (redundant on downloads page)

### Background Image Notes
- Uses `ds-bg--grad-deep` (var: `--ds-bg-img-grad-deep`)
- Semi-transparent overlay required per DS rules for bg image sections
- Text color on bg image: white only
- Mobile: `@media (max-width: 767px) { background-image: none; }` -- fallback to brand gradient

---

## Background Image Usage Summary

| Section | Background | Rationale |
|---------|-----------|-----------|
| 1. Hero | White | Hero text-only: bg image forbidden |
| 2. Downloads Grid | White | Normal content section |
| 3. CTA Band | `ds-bg--grad-deep` + overlay | CTA sections require bg image per DS rules |

Background images used: `ds-bg--grad-deep` (1 occurrence -- no duplication).

---

## Responsive Behavior

| Breakpoint | Hero h1 | Card Grid | CTA h2 |
|-----------|---------|-----------|--------|
| Mobile (375px) | 24px | 1-col | 36px |
| Tablet (768px) | 28px | 2-col | 40px |
| SM Desktop (1024px) | 32px | 3-col | 40px |
| Desktop (1440px) | 36px | 3-col | 50px |

Container padding: 16 / 32 / 32 / 120px per breakpoint.
Container max-width: 1440px at desktop.

---

## Font Rules

| Context | Font |
|---------|------|
| All headings (h1, h2, h3) | `var(--ds-font-base)` (DM Sans) |
| "LLM Capsule" in CTA title | `ds-text--product` (Oxanium) |
| Body text | `var(--ds-font-base)` (DM Sans) |
| Card footnotes / disabled label | `var(--ds-font-code)` (Fragment Mono) -- optional for "(coming soon)" |

---

## Checklist

- [x] All 3 sections mapped
- [x] No eyebrow in any section
- [x] Section headers have --underline + center alignment
- [x] Title emphasis keywords specified per section
- [x] CTA band outside ds-container (full-width)
- [x] CTA band has background image (ds-bg--grad-deep)
- [x] No ds-section--light used
- [x] No background image duplication
- [x] All original content preserved
- [x] External links as buttons (AWS Marketplace as ds-btn--secondary)
- [x] Oxanium only for "LLM Capsule" product name in CTA
- [x] No inline styles
- [x] No !important
- [x] All colors via CSS variables
- [x] Disabled button state specified for "coming soon" downloads
- [x] Mobile bg-image: none fallback for CTA band
- [x] Text on bg image: white only

---

## Nav and Footer

Copy nav and footer HTML structure from `llm-capsule/output/html/index-b-type.html`.
Ensure active page state on "Resources" nav link (if applicable).

---

## JSON-LD

Preserve the original BreadcrumbList schema from the A-type source:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/"},
    {"@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources"},
    {"@type": "ListItem", "position": 3, "name": "Downloads", "item": "https://llmcapsule.ai/resources/downloads"}
  ]
}
```
