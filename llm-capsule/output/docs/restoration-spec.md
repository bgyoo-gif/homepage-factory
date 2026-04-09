# restoration-spec.md

> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/restoration.html`
> Output: `llm-capsule/output/html/restoration-b-type.html`

---

## A-type Analysis

### Document Profile
- **Page type:** Glossary article (single-concept explainer)
- **Tone:** Educational, technical, precise -- glossary definition with examples
- **Total sections:** 7 (Hero + 4 body + Related Links + CTA)
- **Key message:** Restoration is the deterministic process of restoring AI outputs to original enterprise context using locally stored mappings, a core capability of LLM Capsule
- **Page layout:** Article-type -- body max-width 860px

### Section Inventory

| # | A-type Section | Content Type | Key Content |
|---|----------------|-------------|-------------|
| 1 | Article Hero | Hero text + breadcrumb | Title "Restoration", breadcrumb navigation |
| 2 | Screenshot placeholder | Visual | Product screenshot: restoration in action |
| 3 | Definition | Callout/banner | Formal definition of Restoration |
| 4 | Explanation | Text (3 paragraphs) | How mapping works, reverse application, determinism |
| 5 | Example | Callout box | Before/after AI output restoration example |
| 6 | Related Terms + Related Links | Link list + card grid | 4 glossary links + 4 internal nav links |
| 7 | CTA | CTA band | Request PoV + secondary links |

---

## Section-by-Section Design Specification

---

### Section 1: Hero
- **Section ID:** `section-hero`
- **Pattern:** [A] Hero text-only -- `ds-hero--text-only`
- **Background:** White (no background image -- text-only hero rule)
- **Section class:** `ds-section ds-section--hero`

#### Content
- **Breadcrumb:** `Home / Resources / Glossary / Restoration` -- styled as `ds-body-s` with links in `ds-text--brand` color, separator in `var(--ds-color-text-tertiary)`
- **h1:** `Restoration`
  - No brand keyword emphasis needed (single word title)
  - Brand keyword: "없음"
- **Description (ds-hero__description):** "Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of <span class="ds-text--product">LLM Capsule</span>."
  - Source: meta description content
- **Actions:** None (glossary article -- no hero CTA)

#### Notes
- eyebrow "Glossary" removed per rules
- Breadcrumb preserves navigation context for glossary pages
- Article-type page: all subsequent sections use `max-width: 860px` centered container

---

### Section 2: Screenshot Placeholder
- **Section ID:** `section-2`
- **Pattern:** Screenshot placeholder within article body (860px container)
- **Background:** White
- **Section class:** `ds-section` (reduced padding: `var(--ds-space-xl) 0` since it immediately follows hero)

#### Content
- **Screenshot placeholder** styled as `ds-hero__screenshot-frame ds-bg--paint-blue` with inner `ds-hero__screenshot`
  - Placeholder text: "Restoration in Action -- AI output with [ORG_A] tokens mapped back to original Samsung Electronics values"
  - Background fallback: `var(--ds-color-neutral-050)` on screenshot-frame
  - Rounded top corners only: `border-radius: var(--ds-radius-xl) var(--ds-radius-xl) 0 0`

#### Notes
- This is the only section with a background image element (ds-bg--paint-blue on the frame, not on the section)
- Mobile: `background-image: none` on frame per responsive rules

---

### Section 3: Definition
- **Section ID:** `section-3`
- **Pattern:** [Q] Banner -- `ds-banner ds-banner--brand`
- **Background:** White (section), banner has brand tint background
- **Section class:** `ds-section` (within 860px article container)

#### Section Header
- Not applicable (no section header for inline definition banner)

#### Content
- **Banner label:** `ds-banner__label` -- "DEFINITION"
- **Banner text:** "Restoration (also known as local restoration) is the process of restoring AI-generated outputs to their original enterprise context. After AI processes encapsulated data, the locally stored mapping between original and protected values is applied to the AI output, replacing encapsulated representations with real enterprise data. AI results are restored locally through this automated process."
- Banner variant: `ds-banner--brand` (uses `--ds-banner-bg: rgba(24, 33, 232, 0.06)`)
- Text alignment: center

#### Notes
- Full original text preserved without truncation
- No links inside the banner

---

### Section 4: Explanation
- **Section ID:** `section-4`
- **Pattern:** [D] Section Header + article body text (ds-body-m paragraphs)
- **Background:** White
- **Section class:** `ds-section` (within 860px article container)

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none -- removed per rules)
- title: `<span class="ds-text--brand">Explanation</span>`
- Brand keyword: "Explanation"
- description: (none -- body text follows directly)

#### Content
- **Paragraph 1 (ds-body-m):** "When <span class="ds-text--product">LLM Capsule</span> encapsulates a document, it creates a local mapping table that records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment."
- **Paragraph 2 (ds-body-m):** "After AI processing completes, the restoration engine applies this mapping to the AI output in reverse -- replacing encapsulated tokens with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use."
- **Paragraph 3 (ds-body-m):** "Restoration is deterministic. Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required."

#### Notes
- Third paragraph is a strong assertion -- could be visually distinguished with `font-weight: var(--ds-weight-medium)` or kept as regular body text
- All "LLM Capsule" instances get `ds-text--product`

---

### Section 5: Example
- **Section ID:** `section-5`
- **Pattern:** [D] Section Header + ds-card (example box)
- **Background:** White
- **Section class:** `ds-section` (within 860px article container)

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none -- removed per rules)
- title: `<span class="ds-text--brand">Example</span>`
- Brand keyword: "Example"
- description: (none)

#### Content
- **Card:** `ds-card` with standard border and padding
  - **Before text (ds-body-m):** 'AI processes an encapsulated contract and generates a summary: "The agreement between ENTITY_A and ENTITY_B provides for a payment of AMOUNT_1 due on DATE_1."'
    - Encapsulated tokens (`ENTITY_A`, `ENTITY_B`, `AMOUNT_1`, `DATE_1`) styled with `ds-code-inline` (inline code style)
  - **Divider:** `ds-card__divider`
  - **After text (ds-body-m):** 'Local restoration applies the mapping and produces: "The agreement between Acme Corp and GlobalTech provides for a payment of $2.4M due on March 15, 2026."'
    - Restored values (`Acme Corp`, `GlobalTech`, `$2.4M`, `March 15, 2026`) styled with `font-weight: var(--ds-weight-semibold)` and `color: var(--ds-color-success)`

#### Notes
- The before/after pattern visually demonstrates the restoration concept
- Divider separates AI output from restored output

---

### Section 6: Related Terms + Related Links
- **Section ID:** `section-6`
- **Pattern:** [D] Section Header + [R] Dark Link Cards (ds-card--dark) in 2-col grid
- **Background:** White
- **Section class:** `ds-section` (within 860px article container)

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none -- removed per rules)
- title: `Related <span class="ds-text--brand">Terms</span>`
- Brand keyword: "Terms"
- description: (none)

#### Content -- Related Terms
- **Layout:** Inline tag-style links using `ds-btn ds-btn--secondary ds-btn--sm` in a flex-wrap row
  - "Zero Exposure" -> zero-exposure.html
  - "Restorable Workflow" -> restorable-workflow.html
  - "Structure-Preserving Processing" -> structure-preserving-processing.html
  - "Enterprise Context Control" -> enterprise-context-control.html

#### Sub-header: Related Pages
- **Icon title:** `ds-section-title-icon` -- Lucide `link` icon + "Related Pages"

#### Content -- Related Links
- **Layout:** `ds-card-grid ds-card-grid--2col`
- **Card 1:** `ds-card--dark` -- Lucide `box` icon + "Product Overview" -> product.html
- **Card 2:** `ds-card--dark` -- Lucide `layers` icon + "Architecture" -> architecture.html
- **Card 3:** `ds-card--dark` -- Lucide `shield-check` icon + "Trust & Compliance" -> trust.html
- **Card 4:** `ds-card--dark` -- Lucide `arrow-right` icon + "Request PoV" -> request-pov.html

#### Notes
- Dark link cards provide clear navigation to key pages
- 2-col grid fits within 860px article width

---

### Section 7: CTA Band
- **Section ID:** `section-cta`
- **Pattern:** [K] CTA Band -- `ds-cta-band`
- **Background:** `var(--ds-gradient-brand)` gradient fallback (no ds-bg--* image -- using brand gradient since section 2 already uses ds-bg--paint-blue on the screenshot frame)
- **Section class:** Full-width, outside article container

#### Content
- **Title:** "See <span class="ds-text--product">LLM Capsule</span> Restoration in Action"
- **Description:** "Experience how enterprise AI outputs are restored to their original context with real data."
- **Actions:**
  - `ds-btn ds-btn--lg` (white/glass style per CTA band rules) -- "Request PoV" -> request-pov.html
  - `ds-btn ds-btn--lg` (white/glass style) -- "View Product" -> product.html
- **Footnote:** `ds-cta-band__footnote` -- "Enterprise AI Enablement by CUBIG"

#### Notes
- CTA band breaks out of 860px article container to full width
- Gradient fallback: `var(--ds-gradient-brand)` = `linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)`
- CTA band uses `::before` overlay with `rgba(0,0,0,0.15)` automatically
- All text white/white-alpha per dark background rules

---

## Layout Flow Summary

| # | Section | Pattern | Background | Width |
|---|---------|---------|------------|-------|
| 1 | Hero | [A] Hero text-only | White | 860px |
| 2 | Screenshot | Screenshot frame | White (frame: ds-bg--paint-blue) | 860px |
| 3 | Definition | [Q] Banner (brand) | White + brand tint banner | 860px |
| 4 | Explanation | [D] Header + body text | White | 860px |
| 5 | Example | [D] Header + ds-card | White | 860px |
| 6 | Related | [D] Header + buttons + [R] Dark cards 2-col | White | 860px |
| 7 | CTA | [K] CTA Band | Brand gradient | Full-width |

### Background Image Usage
- **ds-bg--paint-blue:** Section 2 screenshot frame only (component-level, not section-level)
- **No section-level background images** (article-type page with mostly text content)
- **CTA band:** Brand gradient (no image)
- **No duplicate bg images**

### Layout Variation Check
- Section 1: Hero text-only
- Section 2: Screenshot frame (visual break)
- Section 3: Banner (tinted callout)
- Section 4: Text paragraphs
- Section 5: Card with divider (before/after)
- Section 6: Button row + dark card grid
- Section 7: Full-width CTA gradient

No 3 consecutive identical layouts. Layout diversity is sufficient for a glossary article page.

---

## Global Rules Checklist

- [x] All section IDs specified
- [x] eyebrow removed from all sections
- [x] ds-section--light not used
- [x] Section headers center-aligned (default)
- [x] "LLM Capsule" marked with `ds-text--product` throughout
- [x] Brand keywords marked with `ds-text--brand`
- [x] No background image duplicates
- [x] Article body 860px max-width
- [x] External links: none on this page (AWS Marketplace only in nav/footer)
- [x] All original content preserved without modification
- [x] CTA band gradient fallback: `var(--ds-gradient-brand)`
- [x] Font minimum brightness: no neutral-150/050/025 for text color
- [x] No ds-section-header--left usage
- [x] No inline styles (except CSS variable pass-through if needed)
- [x] No !important
- [x] CSS variables only from DS (no custom variables)

---

## Navigation & Footer
- Standard `ds-nav` with LLM Capsule logo, links (Product, Architecture, Solutions, Trust, Pricing, Resources), AWS Marketplace button (`ds-btn ds-btn--secondary ds-btn--sm`), Request PoV CTA (`ds-btn ds-btn--primary ds-btn--sm`)
- Standard footer matching index-b-type.html structure
