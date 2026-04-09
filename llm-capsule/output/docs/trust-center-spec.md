# Trust Center -- Design Spec (B-type)

> brand: llm-capsule
> DS: design-system-core.md + design-system-capsule.md
> source: llm-capsule/input/LLM_Capsule_Website_Updated_v3/trust-center.html
> output: llm-capsule/output/html/trust-center-b-type.html

---

## Page Meta

- title: "Trust Center -- LLM Capsule Security & Compliance"
- description: "Security certifications, compliance documentation, and data handling principles for LLM Capsule enterprise AI enablement."
- canonical: https://llmcapsule.ai/resources/trust-center
- lang: en

---

## Section 1: Hero (Text-only)

**Pattern:** [A] ds-hero--text-only
**Background:** white (NO background image -- text-only hero rule)
**Section class:** `ds-section ds-section--hero`

### Content
- **title:** "Security & Compliance Trust Center"
  - brand keyword: `<span class="ds-text--brand">Trust Center</span>`
- **description:** "Certifications, compliance documentation, and security information for <span class="ds-text--product">LLM Capsule</span> enterprise AI enablement."
- **eyebrow:** NONE (eyebrow banned in B-type)
- **breadcrumb:** NONE (breadcrumbs are not a DS component; omit)
- **actions:** none

### HTML Structure
```
section.ds-section.ds-section--hero
  div.ds-container
    div.ds-hero.ds-hero--text-only
      h1.ds-hero__title
      p.ds-hero__description
```

---

## Section 2: Certifications & Awards

**Pattern:** [I-2] ds-cert-grid (marquee)
**Background:** white
**Section class:** `ds-section`

### Section Header
- **title:** "Certifications & <span class="ds-text--brand">Compliance</span>"
- **description:** "Information security management, AI governance, and government software quality certifications."
- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE

### Cert Grid Marquee Content (4 cards, duplicated for infinite scroll)

| Group Label | Wreath Text | Org | Year |
|---|---|---|---|
| SECURITY | ISO 27001 | Information Security Management | -- |
| AI GOVERNANCE | ISO 42001 | AI Management System | -- |
| QUALITY | GS Certification Grade 1 | Korean Government Software Quality | -- |
| MARKETPLACE | AWS Marketplace | Enterprise Procurement | -- |

- Wreath images: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-left.png` and `cert-right.png`
- For AWS Marketplace card, no wreath -- use icon-style display or adapt wreath to text only

### Implementation Notes
- 4 cert cards are duplicated (8 total in track) for seamless marquee
- Animation: `ds-marquee 40s linear infinite`

---

## Section 3: Data Handling Principles

**Pattern:** [G] ds-card-grid--2col with ds-card (icon cards)
**Background:** white (this is the 3rd white section in a row, but we apply bg-image to break monotony -- see below)
**Section class:** `ds-section ds-section--bg-img ds-bg--paint-blue`

### Section Header
- **title:** "Data Handling <span class="ds-text--brand">Principles</span>"
- **description:** "Zero exposure by design. Original sensitive enterprise data never leaves the enterprise environment."
- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE

### Card Grid (2col, 4 cards)

| Icon (Lucide) | Title | Description |
|---|---|---|
| shield-check | Zero Exposure by Design | Original sensitive enterprise data never leaves the enterprise environment. Only encapsulated representations cross the trust boundary to external AI services. |
| database | Local-only Mapping Storage | The mapping between original and encapsulated values is stored entirely within the enterprise environment and never transmitted externally. |
| clipboard-list | Complete Audit Trails | Every encapsulation and restoration event is logged with full audit data supporting enterprise AI governance and regulatory compliance. |
| layers | Model-agnostic Protection | Protection operates at the data layer, independent of any specific AI provider, ensuring consistent security regardless of which LLM is used. |

### Implementation Notes
- Each card: `ds-card` with `ds-card__icon` (Lucide inline SVG) + `ds-card__title--sm` + `ds-card__description`
- Background image: `ds-bg--paint-blue` applied at section level with white translucent overlay (`ds-section--bg-img`)
- Background image absolute URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png`
- Mobile: `@media (max-width: 767px) { background-image: none; }` for section

---

## Section 4: For Security Review -- Evidence Hub

**Pattern:** [J] ds-feature-grid (2x2 grid inside bordered container)
**Background:** white
**Section class:** `ds-section`

### Section Header
- **title:** "Documents & Review Items for Enterprise <span class="ds-text--brand">Evaluation</span>"
- **description:** "Use this page as the operational trust hub for procurement, security review, architecture review, and compliance validation."
- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE

### Feature Grid (2x2)

| Icon (Lucide) | Title | Description |
|---|---|---|
| file-text | Architecture Brief | High-level architecture, trust boundary, local mapping model, and restoration flow. |
| shield | Security Review Package | Data handling principles, audit model, deployment assumptions, and security questionnaire support. |
| server | Deployment Options | On-premise, air-gapped, VPC, cloud, hybrid, and embedded deployment patterns for evaluation. |
| phone | Talk to an Architect | Review your environment, data flow, policy requirements, and evaluation criteria with the technical team. |

### Actions (centered below grid)
- Primary button: "Request PoV" -> `ds-btn ds-btn--primary ds-btn--md` href="request-pov.html"
- Secondary button: "Download Brief" -> `ds-btn ds-btn--secondary ds-btn--md` href="downloads.html"
- Action wrapper: flex centered with gap

---

## Section 5: CTA Band

**Pattern:** [K] ds-cta-band
**Background:** brand gradient fallback (no ds-bg--* class needed; CTA band uses brand gradient by default)
**Placement:** full-width, outside ds-container

### Content
- **title:** "See how <span class="ds-text--product">LLM Capsule</span> works with your data"
- **description:** "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
- **actions:**
  - Button 1: "Request PoV" -> `ds-btn ds-btn--md` (white glass style, standard CTA band button)
  - Button 2: "Talk to an Architect" -> `ds-btn ds-btn--md`
- **footnote links (below actions):**
  - "Download Architecture Brief" -> `ds-btn ds-btn--secondary ds-btn--sm` href="downloads.html" (external link = button rule)
  - "Available on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" (external link = button rule)
  - These are rendered as `ds-cta-band__footnote` area buttons with white glass styling

### Implementation Notes
- CTA band uses `.ds-cta-band:not([class*="ds-bg--"])` fallback gradient from capsule brand tokens
- Overlay `::before` with `rgba(0,0,0,0.15)` applied automatically
- All text: white/white-alpha
- Footnote buttons: small secondary style adapted for dark bg (white border, white text)

---

## Layout Flow Summary

| # | Section | Pattern | Background |
|---|---------|---------|------------|
| 1 | Hero | [A] text-only | white |
| 2 | Certifications | [I-2] cert-grid marquee | white |
| 3 | Data Handling | [G] card-grid 2col | bg-image (paint-blue) |
| 4 | Evidence Hub | [J] feature-grid | white |
| 5 | CTA | [K] cta-band | brand gradient |

### Background Image Inventory
- Section 3: `ds-bg--paint-blue` (paint-blue-iridescent.png)
- Section 5: brand gradient (no bg image file)
- No duplicate bg images used

### Monotony Check
- Sections 1, 2 are white -> Section 3 has bg-image -> breaks the 3-consecutive-white rule
- Section 4 is white -> Section 5 is gradient CTA -> OK

---

## Typography Rules Checklist

- [ ] All headings: `var(--ds-font-base)` (DM Sans)
- [ ] "LLM Capsule" product name: `ds-text--product` (Oxanium)
- [ ] Brand emphasis keywords: `ds-text--brand` (brand-secondary color)
- [ ] No eyebrow anywhere
- [ ] Section headers: center-aligned (no --left)
- [ ] Description max-width: responsive (100% -> 720px -> 860px)

## DS Compliance Checklist

- [ ] All colors via `var(--ds-*)` tokens
- [ ] No `!important`
- [ ] No inline `style` (except CSS variable passthrough)
- [ ] `.ds-` prefix on all classes
- [ ] Responsive 4 breakpoints: 375 / 768 / 1024 / 1440
- [ ] Container padding: 16 / 32 / 32 / 120px
- [ ] Max-width 1440px on desktop
- [ ] Hero padding-top: 100px
- [ ] No ds-section--light (white only)
- [ ] No orange colors
- [ ] No background shorthand
- [ ] Mobile bg-image: none
- [ ] Icons: inline SVG from Lucide, stroke-width 1.5
- [ ] External links as buttons (AWS Marketplace, etc.)
- [ ] word-break: keep-all on body

---

## JavaScript Required

1. **Accordion toggle** (if any accordion used -- not needed here)
2. **Marquee** -- cert-grid marquee is CSS-only (animation)
3. **Scroll reveal** -- optional, not required

---

## Image Assets (absolute URLs)

| Asset | URL |
|---|---|
| cert-left.png | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-left.png |
| cert-right.png | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-right.png |
| bg-paint-blue-iridescent.png | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png |
