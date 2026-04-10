# learn-spec.md — LLM Capsule Learn Page Design Specification

> Brand: **llm-capsule**
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/learn.html`
> Output: `llm-capsule/output/html/learn-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Resource Hub / Article Index |
| Total sections | 3 (Hero + Article Grid + CTA) |
| Tone | Informational, technical, developer/ML engineer target |
| Primary action | Browse learn articles |
| Secondary action | Request PoV |

---

## Global Rules

- All CSS via `var(--ds-*)` tokens only (no hardcoded colors)
- No `!important`, no inline `style` (except CSS variable pass-through)
- No eyebrow labels
- No `ds-section--light` (all section backgrounds white)
- Responsive 4-step: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
- Container padding: 16 / 32 / 32 / 120px
- Container max-width: 1440px
- `body { word-break: keep-all; overflow-wrap: break-word; }`
- "LLM Capsule" always wrapped in `<span class="ds-text--product">LLM Capsule</span>`
- Font: DM Sans (`var(--ds-font-base)`) for all headings/body; Oxanium only for product name
- Background images: absolute URL from `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
- Mobile (`@media max-width: 767px`): `background-image: none` for all bg image sections
- Section IDs: `id="section-N"` (sequential)
- JSON-LD: preserve original BreadcrumbList schema

---

## Section-by-Section Specification

---

### Section 1: Hero — `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [A] Hero text-only — `ds-hero--text-only` |
| Class | `ds-section ds-section--hero` |
| Background | White only (no background image — text-only hero rule) |
| Alignment | Left on mobile, left on desktop (hero exception) |

#### Content

| Element | Value |
|---------|-------|
| Breadcrumb | Home / Resources / Learn |
| Title | `Enterprise AI Enablement — Learn` |
| Title brand keyword | `<span class="ds-text--brand">Learn</span>` |
| Product name | None in title |
| Description | "In-depth technical articles on enterprise AI enablement, secure AI workflows, structure-preserving processing, and restorable workflows." |
| CTA buttons | None |

#### Structure

```
<section id="section-1" class="ds-section ds-section--hero">
  <div class="ds-container">
    <nav class="ds-breadcrumb">Home / Resources / Learn</nav>
    <h1 class="ds-hero__title">
      Enterprise AI Enablement — <span class="ds-text--brand">Learn</span>
    </h1>
    <p class="ds-hero__description">...</p>
  </div>
</section>
```

#### Notes
- No eyebrow (A-type has "Learn" eyebrow — remove per DS rule)
- No background gradient (A-type has green-50 gradient — remove per hero text-only rule)
- padding-top: 100px fixed

---

### Section 2: Article Grid — `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + [G] Card grid — `ds-card-grid ds-card-grid--3col` |
| Class | `ds-section` |
| Background | White |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-section-header--underline` |
| Title | None (this section has no explicit title in the original — use implied title below) |
| Decision | The A-type has no section title for the article grid; it flows directly from the hero. Add a minimal section header for B-type structural consistency. |
| Title text | "Technical Articles" |
| Title brand keyword | `<span class="ds-text--brand">Articles</span>` |
| Description | None |
| Alignment | Center |
| Border-bottom | Yes (underline) |

#### Card Grid

| Property | Value |
|----------|-------|
| Grid | `ds-card-grid ds-card-grid--3col` |
| Card type | `ds-card` (standard bordered card) |
| Columns | 1col mobile / 2col tablet / 3col desktop |
| Total cards | 12 |

#### Card Content (all 12 articles)

Each card follows this structure:

```html
<a href="[url]" class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--purple">[badge if applicable]</span>
    <h3 class="ds-card__title">[article title]</h3>
    <span class="ds-card__link-text">Read article</span>
  </div>
</a>
```

| # | Title | Badge | URL |
|---|-------|-------|-----|
| 1 | Secure Enterprise AI Data Workflows | `ds-badge--purple` "Pillar" | secure-enterprise-ai-data-workflows.html |
| 2 | Enterprise AI Enablement | `ds-badge--purple` "Pillar" | enterprise-ai-data-protection.html |
| 3 | Enterprise AI Document Processing | `ds-badge--purple` "Pillar" | enterprise-ai-document-processing.html |
| 4 | What Is an AI Data Capsule | None | what-is-ai-data-capsule.html |
| 5 | How to Use AI on Sensitive Enterprise Data | None | how-to-use-ai-on-sensitive-enterprise-data.html |
| 6 | Why Redaction Breaks Enterprise AI Workflows | `ds-badge--purple` "Featured" | why-redaction-breaks-enterprise-ai-workflows.html |
| 7 | Secure Enterprise AI Workflows | None | secure-enterprise-ai-workflows.html |
| 8 | Structure-Preserving Document Processing | None | structure-preserving-document-processing.html |
| 9 | PII Protection vs Enterprise Confidentiality Control | None | pii-protection-vs-enterprise-confidentiality-control.html |
| 10 | On-Premise vs Cloud AI Data Protection | None | on-premise-vs-cloud-ai-data-protection.html |
| 11 | Local Restoration vs Anonymization | None | local-restorationvs-anonymization.html |
| 12 | AI Data Pipeline Protection | None | ai-data-pipeline-protection.html |

#### Badge Styling

- Pillar articles: `<span class="ds-badge ds-badge--purple">Pillar</span>`
- Featured article: `<span class="ds-badge ds-badge--purple">Featured</span>`
- `ds-badge--purple` uses `background-color: var(--ds-color-brand-light); color: var(--ds-color-brand-secondary);`

#### Card Interaction
- Entire card is clickable (`<a>` wrapper)
- Hover: border color change to `var(--ds-color-border-brand)`, subtle shadow `var(--ds-shadow-card)`, translateY(-2px)
- Link text "Read article" with arrow icon (lucide `arrow-right`, ds-icon--sm)

#### Notes
- A-type uses emoji icons in hub-cards — remove all emoji, use clean text-only cards
- URL `local-restorationvs-anonymization.html` preserved as-is (original typo in A-type)
- No descriptions on cards (A-type has none)

---

### Section 3: CTA Band — `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band — `ds-cta-band` |
| Background | `var(--ds-gradient-brand)` fallback (no bg image class — avoid duplication with index page) |
| Placement | Full-width, outside `ds-container` |

#### Content

| Element | Value |
|---------|-------|
| Title | "See how <span class='ds-text--product'>LLM Capsule</span> works with your data" |
| Title brand keyword | `<span class="ds-text--brand">works</span>` (within title) |
| Product name | `<span class="ds-text--product">LLM Capsule</span>` |
| Description | "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." |
| Primary CTA | "Request PoV" → `request-pov.html` |
| Secondary CTA | "Talk to an Architect" → `architecture.html` |
| Tertiary links (below buttons) | "Download Architecture Brief" → `downloads.html` (button: `ds-btn ds-btn--secondary`) |
| | "Available on AWS Marketplace" → external link (button: `ds-btn ds-btn--secondary`) |

#### Structure

```html
<div id="section-3" class="ds-cta-band">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      See how <span class="ds-text--product">LLM Capsule</span>
      <span class="ds-text--brand">works</span> with your data
    </h2>
    <p class="ds-cta-band__description">...</p>
    <div class="ds-cta-band__actions">
      <a href="request-pov.html" class="ds-btn">Request PoV</a>
      <a href="architecture.html" class="ds-btn">Talk to an Architect</a>
    </div>
    <div class="ds-cta-band__secondary">
      <a href="downloads.html" class="ds-btn ds-btn--secondary">Download Architecture Brief</a>
      <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" class="ds-btn ds-btn--secondary">Available on AWS Marketplace</a>
    </div>
  </div>
</div>
```

#### Notes
- eyebrow "Get Started" from A-type is removed (eyebrow ban)
- A-type has emoji in secondary links (paper, cloud emoji) — remove all emoji
- AWS Marketplace link is external — must be button (`ds-btn ds-btn--secondary`), not inline text link
- CTA band title responsive: 36px mobile / 40px tablet-desktop / 50px 1440px+
- Text color on gradient: white (`var(--ds-color-text-inverse)`)
- Description color: `var(--ds-overlay-white-70)` or similar light overlay
- CTA buttons: glass-morphism style (white semi-transparent bg, blur backdrop)
- Secondary buttons: smaller, below main actions, separated by margin-top

---

## Background Image Assignment

| Section | Background |
|---------|-----------|
| Section 1 (Hero text-only) | White only — no bg image |
| Section 2 (Article Grid) | White |
| Section 3 (CTA Band) | `var(--ds-gradient-brand)` (gradient fallback, no bg image class) |

**Background image count: 0** (this is a simple 3-section page; gradient-only CTA is sufficient)

**Rationale:** With only 3 sections (Hero + Grid + CTA), there are not 3+ consecutive white sections before the CTA, so no mid-page bg image insertion is needed. The CTA band uses the brand gradient as its background.

---

## Typography Summary

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero h1 | DM Sans | 24/28/32/36px (responsive) | 700 |
| Section header h2 | DM Sans | 20/22/24/28px (responsive) | 700 |
| Card title h3 | DM Sans | var(--ds-text-lg) 18px | 600 |
| Card link text | DM Sans | var(--ds-text-sm) 14px | 500 |
| Badge text | DM Sans | var(--ds-text-xs) 12px | 600 |
| CTA title | DM Sans | 36/40/40/50px (responsive) | 700 |
| CTA description | DM Sans | var(--ds-text-md) 16px | 400 |
| Breadcrumb | DM Sans | var(--ds-text-sm) 14px | 500 |
| "LLM Capsule" | Oxanium | inherit | 700 |

---

## Responsive Breakpoints

| Breakpoint | Container Padding | Card Grid Cols | Notes |
|------------|-------------------|----------------|-------|
| 375px (mobile) | 16px | 1 | Section header left-aligned |
| 768px (tablet) | 32px | 2 | Section header center |
| 1024px (sm-desktop) | 32px | 3 | |
| 1440px (desktop) | 120px | 3 | max-width: 1440px |

---

## Navigation & Footer

- Nav: Copy from `index-b-type.html` (`ds-nav` component)
- Footer: Copy from `index-b-type.html` (`ds-footer` component)
- Both are shared components — maintain identical markup across all pages

---

## Icon Usage

| Location | Icon | Lucide Name | Size |
|----------|------|-------------|------|
| Card link arrow | Arrow right | `arrow-right` | ds-icon--sm (16px) |

---

## Accessibility

- All cards: `<a>` with meaningful text (article title serves as accessible name)
- CTA buttons: descriptive link text
- External links: `target="_blank" rel="noopener"`
- Breadcrumb: `<nav aria-label="Breadcrumb">`
- Section landmarks: semantic `<section>` with `id`

---

## Content Integrity Checklist

- [x] All 12 article titles preserved exactly
- [x] All 12 article URLs preserved exactly (including typo in "local-restorationvs-anonymization")
- [x] All badge labels preserved (Pillar x3, Featured x1)
- [x] CTA title text preserved
- [x] CTA description text preserved
- [x] All CTA links preserved (4 total: Request PoV, Talk to Architect, Download Brief, AWS Marketplace)
- [x] Breadcrumb path preserved
- [x] Page title/meta preserved

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| eyebrow "Learn" | Removed | DS rule: eyebrow ban |
| eyebrow "Get Started" on CTA | Removed | DS rule: eyebrow ban |
| Green gradient hero background | White background | DS rule: Hero text-only = no bg image/gradient |
| Emoji icons in CTA secondary links | Removed | DS rule: no emoji |
| hub-card descriptions | Not present in original | N/A — none to remove |
| Inline text link for AWS | Button (`ds-btn--secondary`) | DS rule: external links = button |
| No section header for article grid | Added "Technical Articles" header | DS rule: all sections require `ds-section-header--underline` |

---

## Implementation Notes for frontend-dev

1. **CSS structure**: Copy `:root` variables and component styles from `index-b-type.html` — this page uses the same DS token set
2. **Simple page**: Only 3 sections; keep the HTML lean
3. **Card hover**: Use CSS transition on border-color and box-shadow (no JS needed)
4. **CTA band**: Place outside `<section>` as a standalone `<div>` at full width, matching index page pattern
5. **No reveal animations**: The A-type has IntersectionObserver reveal — B-type can include similar fade-in if desired, but it is not required
6. **Badge component**: If `ds-badge--purple` is not yet defined in the page CSS, add it per capsule brand tokens: `background-color: var(--ds-color-brand-light); color: var(--ds-color-brand-secondary);`
