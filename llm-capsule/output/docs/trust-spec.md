# Trust Page - B-Type Design Spec

> Brand: llm-capsule
> Source: llm-capsule/input/LLM_Capsule_Website_Updated_v3/trust.html
> Output: llm-capsule/output/html/trust-b-type.html
> DS: design-system-core.md + design-system-capsule.md
> CSS Reference: llm-capsule/output/html/index-b-type.html (copy :root tokens, nav, footer, shared component styles)

---

## Page Meta

- title: "Trust & Compliance -- LLM Capsule Enterprise Security"
- description: "ISO 27001, ISO 42001, GS Certification. LLM Capsule's enterprise-grade security enables AI adoption with full audit trails and data sovereignty enforcement."
- canonical: https://llmcapsule.ai/trust
- JSON-LD: BreadcrumbList (Home > Trust)
- Fonts: DM Sans (300-700), Oxanium (700)
- OG tags: copy from A-type source verbatim

---

## Section Map (7 sections)

| # | Section ID | Layout Pattern | Background |
|---|-----------|---------------|------------|
| 1 | section-hero | [A] Hero text-only | white (no bg image) |
| 2 | section-certifications | [I-2] Cert Grid marquee + [G] Card Grid 4col | white |
| 3 | section-data-sovereignty | [V-2] Gradient Card Grid 2col | white |
| 4 | section-audit-compliance | [J] Feature Grid 2x2 | ds-bg--paint-blue (bg image -- breaks 3 consecutive white sections) |
| 5 | section-regulatory | [Q] Banner + [L] Checklist | white |
| 6 | section-aws | [Q] Banner--full | white (banner itself has ds-bg--wave-teal) |
| 7 | (no section wrapper) | [K] CTA Band | ds-gradient-brand fallback |

---

## Section 1: Hero -- `section-hero`

**Pattern**: [A] Hero text-only (`ds-hero--text-only`)
**Background**: white (Hero text-only = no bg image per rule)

### Structure
```
ds-section ds-section--hero
  ds-container
    ds-hero ds-hero--text-only
      h1.ds-hero__title
        "Enterprise-Grade <span class="ds-text--brand">Security</span> and Compliance"
      p.ds-hero__description
        "LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This security foundation is what enables enterprises to adopt AI confidently on their most sensitive data."
      div.ds-hero__actions
        a.ds-btn.ds-btn--primary.ds-btn--md -> "Request PoV" -> href="request-pov.html"
        a.ds-btn.ds-btn--secondary.ds-btn--md -> "View Architecture" -> href="architecture.html"
```

### Notes
- eyebrow: DELETED (original "Trust & Compliance" eyebrow removed per rule)
- breadcrumb: DELETED (B-type does not use breadcrumbs)
- title brand keyword: "Security" -> `ds-text--brand`
- "LLM Capsule" in description: wrap with `<span class="ds-text--product">LLM Capsule</span>`
- Hero padding-top: 100px fixed per DS rule

---

## Section 2: Certifications -- `section-certifications`

**Pattern**: [I-2] Cert Grid marquee + [G] Card Grid 4col
**Background**: white

### Section Header
```
ds-section-header ds-section-header--underline
  h2.ds-section-header__title
    "Certified <span class="ds-text--brand">Trust</span>"
  p.ds-section-header__description
    (none -- original has no section-level description text for certifications)
```

- eyebrow: DELETED
- title brand keyword: "Trust" -> `ds-text--brand`
- description: NONE. The original has no intro paragraph for the certification section. Do NOT fabricate. Leave ds-section-header__description element empty or omit it.

### Cert Grid Content (marquee, duplicate for infinite scroll)

| Card | Group Label | Wreath Text | Org | Year | Wreath Images |
|------|------------|-------------|-----|------|---------------|
| ISO 27001 | INFORMATION SECURITY | ISO 27001 | Information Security Management | 2024 | cert-left.png, cert-right.png |
| ISO 42001 | AI GOVERNANCE | ISO 42001 | AI Management System | 2024 | cert-left.png, cert-right.png |
| GS Certification | SOFTWARE QUALITY | GS Cert Grade 1 | Korean Government | 2024 | cert-left.png, cert-right.png |
| AWS Marketplace | CLOUD PLATFORM | AWS Marketplace | Enterprise Procurement | 2024 | cert-left.png, cert-right.png |

- Cert wreath images: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-left.png` and `cert-right.png`
- Duplicate all 4 cards for seamless infinite marquee

### Below Cert Grid: detail cards in 4-col card grid

```
ds-card-grid ds-card-grid--4col
  [4 x ds-card]
    ds-card__icon (Lucide SVG inline, stroke-width="1.5")
    ds-card__title
    ds-card__description
```

| Card | Icon (Lucide) | Title | Description (verbatim from original) |
|------|--------------|-------|-------------|
| 1 | shield-check | ISO 27001 | Information security management system certification. Demonstrates systematic approach to managing sensitive company information. |
| 2 | brain-circuit | ISO 42001 | AI management system certification. Demonstrates responsible AI governance and risk management practices. |
| 3 | badge-check | GS Certification | Korean government software quality certification (Grade 1). Listed on 조달청 혁신장터 for public sector procurement. |
| 4 | cloud | AWS Marketplace | Available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments. |

---

## Section 3: Data Sovereignty -- `section-data-sovereignty`

**Pattern**: [V-2] Gradient Card Grid 2col
**Background**: white

### Section Header
```
ds-section-header ds-section-header--underline
  h2.ds-section-header__title
    "Data <span class="ds-text--brand">Sovereignty</span>"
  p.ds-section-header__description
    "LLM Capsule enforces data sovereignty by design, and this enforcement is what enables AI adoption in regulated environments."
```

- eyebrow: DELETED
- title brand keyword: "Sovereignty" -> `ds-text--brand`
- description: first sentence from original paragraph (verbatim)
- "LLM Capsule" in description: `<span class="ds-text--product">LLM Capsule</span>`

### Content: 2-col Gradient Card Grid

```
ds-card-grid ds-card-grid--2col
  ds-card--gradient ds-card--gradient-indigo
    ds-card--gradient__inner
      ds-card__icon (Lucide: lock, stroke-width="1.5")
      ds-card__title "Local Encapsulation"
      ds-card__description "The encapsulation engine runs entirely within the enterprise environment. Original sensitive data never leaves the controlled boundary. Only encapsulated representations -- with sensitive values replaced by structure-preserving tokens -- cross to external AI services."

  ds-card--gradient ds-card--gradient-blue
    ds-card--gradient__inner
      ds-card__icon (Lucide: shield, stroke-width="1.5")
      ds-card__title "Zero Exposure Guarantee"
      ds-card__description "The mapping between original and encapsulated values is stored locally and never transmitted. Even in the event of a breach at the AI provider, no original enterprise data would be exposed because it was never transmitted."
```

### Content Source Mapping
- Card 1 ("Local Encapsulation"): sentences 2-4 of original Data Sovereignty paragraph 1
- Card 2 ("Zero Exposure Guarantee"): original Data Sovereignty paragraph 2 verbatim
- Card titles "Local Encapsulation" and "Zero Exposure Guarantee" are derived labels for the card layout (original has no sub-headings). The description text is verbatim from source.
- indigo = core mechanism card, blue = guarantee/result card

---

## Section 4: Audit & Compliance -- `section-audit-compliance`

**Pattern**: [J] Feature Grid 2x2 with background image
**Background**: `ds-section--bg-img ds-bg--paint-blue`
  - This section breaks 3 consecutive white sections (1, 2, 3)
  - Background image: `bg-paint-blue-iridescent.png`
  - CSS variable: `--ds-bg-img-paint-blue`
  - Text color on bg image: use black (the paint-blue bg is light enough)

### Section Header
```
ds-section-header ds-section-header--underline
  h2.ds-section-header__title
    "Audit & <span class="ds-text--brand">Compliance</span>"
  p.ds-section-header__description
    "Every encapsulation and restoration event generates a complete audit record."
```

- eyebrow: DELETED
- title brand keyword: "Compliance" -> `ds-text--brand`
- description: first sentence from original Audit & Compliance paragraph (verbatim)

### Feature Grid (2x2)

```
ds-feature-grid
  [4 items, each with icon + title + description]
```

| # | Icon (Lucide) | Title | Description |
|---|--------------|-------|-------------|
| 1 | file-text | Data Protection Records | What data was protected and which elements were encapsulated in each transaction. |
| 2 | bot | AI Service Tracking | Which AI service processed the request and what outputs were restored. |
| 3 | clipboard-list | Governance Support | Audit logs support enterprise AI governance, regulatory compliance reporting, and internal security reviews. |
| 4 | scale | Regulatory Alignment | Supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations. |

### Content Source Mapping
- The original is a single paragraph: "Every encapsulation and restoration event generates a complete audit record: what data was protected, which elements were encapsulated, which AI service processed the request, and what outputs were restored. Audit logs support enterprise AI governance, regulatory compliance reporting, and internal security reviews."
- Items 1-2: split from the colon-separated list in the audit paragraph
- Item 3: last sentence of audit paragraph verbatim
- Item 4: merged from original Regulatory Support section's first clause ("Supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations")
- Titles are derived labels for the feature grid layout. All description content is traceable to original text.

---

## Section 5: Regulatory Support -- `section-regulatory`

**Pattern**: [Q] Banner + [L] Checklist
**Background**: white

### Banner
```
ds-banner ds-banner--info
  p: "LLM Capsule supports enterprise compliance by ensuring sensitive data never leaves the enterprise environment during AI processing. Organizations should evaluate specific compliance requirements with their legal counsel."
```

- "LLM Capsule" in banner: `<span class="ds-text--product">LLM Capsule</span>`
- Content: full original Regulatory Support paragraph verbatim (the two sentences combined)
- Banner text: center-aligned per DS rule, link separated on new line if present (no link here)

### Checklist below banner

```
ds-bullet ds-bullet--check
  "GDPR"
  "HIPAA"
  "SOX"
  "Sector-specific data regulations"
```

- eyebrow: DELETED
- No section header for checklist -- the banner serves as the contextual intro
- Items extracted from original text: "GDPR, HIPAA, SOX, and sector-specific data regulations"
- Use single-column `ds-bullet--check` (only 4 items, below the 6-item threshold for 2-col)
- Do NOT expand acronyms (original does not expand them in-text, keep as-is)

---

## Section 6: AWS Marketplace Banner -- `section-aws`

**Pattern**: [Q] Banner--full with background image
**Background**: white section, banner itself has `ds-bg--wave-teal`
  - Cannot reuse `ds-bg--paint-blue` (already used in Section 4)
  - Use `ds-bg--wave-teal` instead (available, not used elsewhere on this page)
  - CSS variable: `--ds-bg-img-wave-teal`

```
ds-section
  ds-container
    ds-banner ds-banner--full ds-bg--wave-teal
      p: "LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments."
      a.ds-btn.ds-btn--secondary.ds-btn--sm -> "View on AWS Marketplace" -> href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener"
```

- "LLM Capsule" in text: `<span class="ds-text--product">LLM Capsule</span>`
- External link = button (not inline text link, per rule)
- Button on separate line below text (per banner link separation rule)
- Content: verbatim from original AWS Marketplace card description

---

## Section 7: CTA Band (no section wrapper)

**Pattern**: [K] CTA Band (`ds-cta-band`)
**Background**: `ds-gradient-brand` fallback (Capsule brand gradient: indigo -> blue -> green)

```
ds-cta-band
  ds-cta-band__inner
    h2.ds-cta-band__title
      "See how <span class="ds-text--product">LLM Capsule</span> works with your data"
    p.ds-cta-band__description
      "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
    div.ds-cta-band__actions
      a.ds-btn.ds-btn--md -> "Request PoV" -> href="request-pov.html"
      a.ds-btn.ds-btn--md -> "Talk to an Architect" -> href="architecture.html"
    div.ds-cta-band__footnote
      a -> "Download Architecture Brief" -> href="downloads.html"
      span -> " | "
      a -> "Available on AWS Marketplace" -> href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener"
```

- "LLM Capsule" in title: `ds-text--product` (Oxanium)
- CTA band buttons use the white translucent style from DS
- CTA band is outside ds-container (full width)
- CTA title typography: 36px mobile, 40px tablet/sm-desktop, 50px desktop (per DS CTA band rule)
- Footnote preserves BOTH secondary links from original: "Download Architecture Brief" AND "Available on AWS Marketplace"

---

## Layout Flow Validation

| # | Background | Pattern | Notes |
|---|-----------|---------|-------|
| 1 | white | Hero text-only | |
| 2 | white | Cert Grid + 4-col cards | |
| 3 | white | Gradient Card 2col | 3rd consecutive white |
| 4 | bg-image (paint-blue) | Feature Grid 2x2 | Breaks white sequence |
| 5 | white | Banner + Checklist | |
| 6 | white (banner has wave-teal bg) | Banner--full | |
| 7 | brand gradient | CTA Band | |

Validation checklist:
- [x] No `ds-grid--1` used 3+ times consecutively
- [x] No `ds-section--light` used anywhere
- [x] Background image in Section 4 breaks 3 consecutive white sections (1,2,3)
- [x] No duplicate background images (paint-blue in S4, wave-teal in S6 banner)
- [x] eyebrow: DELETED everywhere
- [x] All section headers center-aligned (no --left)
- [x] Section 5-6 are only 2 consecutive white before CTA gradient -- acceptable

---

## Navigation

Standard ds-nav with LLM Capsule links (copy from index-b-type.html):
- Product, Architecture, Solutions, Trust (active -- add `ds-nav__link--active`), Pricing, Resources
- AWS Marketplace (ds-btn--secondary ds-btn--sm, external link, target="_blank")
- Request PoV (ds-btn--primary ds-btn--sm)

---

## Footer

Standard footer matching other LLM Capsule B-type pages.
Copy structure and content from index-b-type.html footer verbatim.

---

## Background Image Assets

Only declare the bg images actually used on this page:

| CSS Variable | Class | File |
|-------------|-------|------|
| --ds-bg-img-paint-blue | ds-bg--paint-blue | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png |
| --ds-bg-img-wave-teal | ds-bg--wave-teal | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-wave-teal.png |

| Static Asset | Path |
|-------------|------|
| cert-left.png | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-left.png |
| cert-right.png | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-right.png |

Mobile rule: `@media (max-width: 767px) { [class*="ds-bg--"] { background-image: none; } }`

---

## Content Integrity Checklist

- [x] Hero title: "Enterprise-Grade Security and Compliance" (verbatim)
- [x] Hero description: full paragraph preserved verbatim
- [x] ISO 27001 description: preserved verbatim
- [x] ISO 42001 description: preserved verbatim
- [x] GS Certification description: preserved verbatim including Korean text (조달청 혁신장터)
- [x] AWS Marketplace description: preserved verbatim
- [x] Data Sovereignty paragraph 1: all sentences preserved in gradient card 1 description
- [x] Data Sovereignty paragraph 2: preserved verbatim in gradient card 2 description
- [x] Audit & Compliance paragraph: all clauses preserved across 4 feature items
- [x] Regulatory Support paragraph: full text preserved in banner (both sentences)
- [x] Regulatory items: GDPR, HIPAA, SOX, sector-specific -- all 4 preserved in checklist
- [x] CTA title: "See how LLM Capsule works with your data" (verbatim)
- [x] CTA description: preserved verbatim
- [x] CTA primary buttons: "Request PoV" + "Talk to an Architect" (verbatim)
- [x] CTA secondary link 1: "Download Architecture Brief" -> downloads.html (preserved)
- [x] CTA secondary link 2: "Available on AWS Marketplace" -> external (preserved)

---

## DS Compliance Notes

- All colors via CSS variables (no hardcoding)
- All spacing via DS tokens
- No `!important`
- No inline `style` attributes (except CSS variable passthrough if needed)
- No eyebrow anywhere
- No `ds-section--light`
- No orange/amber colors
- No `background` shorthand (use `background-color` / `background-image` separately)
- No `letter-spacing` hardcoding (use `var(--ds-tracking-*)`)
- Responsive: 4 breakpoints (375, 768, 1024, 1440)
- Container padding: 16 / 32 / 32 / 120px
- Container max-width: 1440px
- Image paths: absolute GitHub Pages URLs only (no relative paths)
- CTA band: outside ds-container, full width
- `ds-text--product` only on "LLM Capsule" product name instances
- `ds-text--brand` for keyword emphasis in section titles (1 per title)
- Mobile: bg images hidden via `@media (max-width: 767px) { background-image: none }`
- Description max-width responsive: 100% mobile -> 720px at 1024px -> 860px at 1440px
- All Lucide icons: inline SVG with `stroke-width="1.5"` (not img tags)
- `word-break: keep-all; overflow-wrap: break-word;` on body

---

## Implementation Notes for Frontend Dev

1. **CSS structure**: Copy the full `:root` variables, nav, footer, and shared component styles from `index-b-type.html`. Only add the bg image variables actually needed (paint-blue, wave-teal).

2. **Cert Grid**: Refer to `index-b-type.html` Section 2 for the `ds-cert-grid` marquee implementation pattern (infinite scroll CSS animation, duplicated card set).

3. **Gradient Cards**: Refer to `index-b-type.html` for `ds-card--gradient` implementation (border via background gradient, inner via gradient background, 2px padding gap).

4. **Feature Grid on bg image**: When feature grid is on a background image section (`ds-section--bg-img`), feature cards should have `background-color: rgba(255,255,255,0.92)` or similar white translucent to maintain readability while showing the bg texture.

5. **Banner--full with bg image**: The `ds-banner--full` component gets the bg class directly (not the section). Include `::before` overlay for text readability. Refer to index-b-type.html for the exact implementation.

6. **Section 2 has NO section header description**: Do not add placeholder text. The cert grid + card grid speak for themselves.

7. **Checklist in Section 5**: Single-column `ds-bullet--check`, not 2-col (only 4 items).
