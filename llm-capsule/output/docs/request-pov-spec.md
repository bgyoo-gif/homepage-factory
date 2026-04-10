# request-pov-spec.md

> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/request-pov.html`
> Output: `llm-capsule/output/html/request-pov-b-type.html`

---

## A-type Analysis

### Document Profile
- **Page type:** Lead generation / PoV request form page
- **Tone:** Persuasive, enterprise B2B, action-oriented
- **Total sections:** 3 (Hero + Process & Form + CTA)
- **Key message:** Enterprise prospects can test LLM Capsule on their own documents, in their own environment, against their compliance requirements through a structured 4-step PoV process

### Section Inventory

| # | A-type Section | Content Type | Key Content |
|---|----------------|-------------|-------------|
| 1 | Page Hero | Hero text | Title, subtitle description |
| 2 | What to Expect + Form | 2-col split: numbered process steps (left) + contact form (right) | 4 numbered steps, callout box, contact form with 6 fields |
| 3 | Final CTA | CTA band | Title, description, 2 buttons + 2 secondary links |

---

## Section-by-Section Design Specification

---

### Section 1: Hero
- **Section ID:** `section-hero`
- **Pattern:** [A] Hero text-only -- `ds-hero--text-only`
- **Background:** White (no background image -- text-only hero rule)
- **Section class:** `ds-section ds-section--hero`

#### Content
- **h1 (ds-hero__title):** `Request a Proof of <span class="ds-text--brand">Value</span>`
  - Brand keyword: "Value"
- **Description (ds-hero__description):** "Test <span class="ds-text--product">LLM Capsule</span> using your own enterprise documents and workflows. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements."
- **No CTA buttons in hero** (the form in next section is the primary action)

#### Notes
- No breadcrumb in B-type
- eyebrow "Get Started" removed per rules

---

### Section 2: What to Expect + Request Form
- **Section ID:** `section-2`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: none (removed per rules)
- title: `What to <span class="ds-text--brand">Expect</span>`
- Brand keyword: "Expect"
- description: "A structured 4-step process from discovery to results, designed to demonstrate real value on your actual data."
- center-aligned (default)

#### Layout: 2-Column Grid (`ds-grid--2`)

This section uses a 2-column grid layout, matching the A-type's split structure. Left column has the numbered steps + callout banner. Right column has the form card.

**Left Column: Numbered Steps (`ds-bullet--number`)**

Rationale: The A-type has 4 numbered paragraphs in a linear list, not tabbed/interactive panels. `ds-bullet--number` [N] is the correct pattern for sequential text steps. Step Tabs [U] would be overkill since there are no screenshots/visuals per tab and the content is short descriptive text.

```html
<ul class="ds-bullet ds-bullet--number">
  <li class="ds-bullet__item">
    <span class="ds-bullet__icon"></span>
    <div>
      <strong>Discovery Call</strong><br>
      We understand your document types, sensitivity requirements, deployment constraints, and AI use cases. We identify the highest-value workflow to test.
    </div>
  </li>
  <!-- ... repeat for steps 2-4 -->
</ul>
```

Step 1 -- Discovery Call:
- Text: "We understand your document types, sensitivity requirements, deployment constraints, and AI use cases. We identify the highest-value workflow to test."

Step 2 -- Technical Setup:
- Text: "<span class="ds-text--product">LLM Capsule</span> is deployed in your environment (on-premise, cloud, or hybrid). We configure encapsulation policies to match your sensitivity requirements."

Step 3 -- Document Testing:
- Text: "Your real enterprise documents are processed through the full encapsulation, AI, and restoration pipeline. You evaluate output quality, protection coverage, and workflow integration."

Step 4 -- Results Review:
- Text: "We present detection accuracy, workflow accuracy, response similarity, and processing performance metrics measured on your specific workload."

Each step title (Discovery Call, Technical Setup, Document Testing, Results Review) should be `<strong>` within the bullet item, followed by description text.

**Left Column (below steps): Callout Banner (`ds-banner ds-banner--brand`)**
- Text: "Typical PoV duration: 2\u20134 weeks. Bring your documents, deployment constraints, and evaluation criteria."
- Position: Below the numbered steps, within the left column

**Right Column: Request Form Card (`ds-card`)**
- Card style: `ds-card` with standard border, padding, and border-radius
- Title (inside card): "Request PoV" -- use `ds-card__title` (h3)
- Form fields (preserve all original fields exactly):
  1. Name -- text input, placeholder "Full name"
  2. Work Email -- email input, placeholder "name@company.com"
  3. Company -- text input, placeholder "Company name"
  4. Job Title -- text input, placeholder "Your role"
  5. Industry -- select dropdown with options:
     - (default disabled) "Select industry"
     - Financial Services
     - Public Sector
     - Healthcare
     - Legal
     - Telecom
     - Insurance
     - Enterprise / Other
  6. Primary Use Case -- textarea, placeholder "Describe your primary AI use case and the types of documents you need to process."
- Submit button: `ds-btn ds-btn--primary ds-btn--lg` full width -- "Submit Request"
- Footnote below button: "We respond to all PoV requests within 1 business day." -- `ds-caption`, center-aligned, `color: var(--ds-color-text-tertiary)`

#### Form Styling Rules
- All form inputs use DS tokens only:
  - `border: var(--ds-border-default)`
  - `border-radius: var(--ds-radius-sm)`
  - `font-family: var(--ds-font-base)`
  - `font-size: var(--ds-text-md)`
  - `padding: var(--ds-space-sm) var(--ds-space-md)`
  - `background-color: var(--ds-color-surface-white)`
- Focus state: `border-color: var(--ds-color-brand-primary)`, `box-shadow: 0 0 0 3px rgba(24,33,232,0.1)` (matching Capsule brand primary)
- Labels: `font-size: var(--ds-text-sm)`, `font-weight: var(--ds-weight-semibold)`, `margin-bottom: var(--ds-space-xs)`, `color: var(--ds-color-text-primary)`
- Form group gap: `var(--ds-space-lg)`
- The form card does NOT have a max-width constraint -- the grid column determines its width
- On mobile (below 768px), the `ds-grid--2` collapses to single column: process steps first, then form card below

---

### Section 3: Final CTA
- **Section ID:** `section-cta`
- **Pattern:** [K] CTA Band -- `ds-cta-band`
- **Background:** No `ds-bg--*` class needed. The CTA band applies `var(--ds-gradient-brand)` automatically as fallback per DS spec.
- **Section class:** none (CTA band is a standalone full-width element, placed outside ds-container)

#### Content
- **Title (ds-cta-band__title):** `See how <span class="ds-text--product">LLM Capsule</span> works with your data`
- **Description (ds-cta-band__description):** "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
- **Actions (ds-cta-band__actions):**
  - Button 1: `ds-btn ds-btn--md` -- "Request PoV" -> request-pov.html
  - Button 2: `ds-btn ds-btn--md` -- "Talk to an Architect" -> architecture.html
  - (CTA band buttons use DS glass style automatically: `background: rgba(255,255,255,0.92)`)
- **Footnote (ds-cta-band__footnote):**
  - "Download Architecture Brief" -> downloads.html
  - "Available on AWS Marketplace" -> https://aws.amazon.com/marketplace (external, target="_blank", rel="noopener")
  - No emoji (removed from A-type)

---

## Layout Flow Summary

| Section | Pattern | Background | Background Image |
|---------|---------|------------|-----------------|
| 1. Hero | [A] Hero text-only | White | None |
| 2. Process + Form | [D] Section Header + [N] Number Steps + [Q] Banner + Form Card in ds-grid--2 | White | None |
| 3. CTA | [K] CTA Band | Brand gradient (auto) | None |

**Background image check:** Only 2 white sections before CTA -- no intermediate background image insertion needed (rule triggers at 3+ consecutive).

**Layout monotony check:** ds-grid--1 does not appear 3+ times consecutively. Section 1 is hero (text-only), Section 2 is a 2-col grid, Section 3 is CTA band. Sufficient layout variation.

---

## Content Integrity Checklist

- [ ] Hero title: "Request a Proof of Value" -- preserved verbatim
- [ ] Hero description: Full text preserved with "LLM Capsule" product styling
- [ ] 4 PoV steps: All step titles and full descriptions preserved verbatim
- [ ] Step 2 text: "LLM Capsule" with ds-text--product
- [ ] Callout: "Typical PoV duration: 2-4 weeks. Bring your documents, deployment constraints, and evaluation criteria." -- preserved
- [ ] Form: All 6 fields with exact labels, placeholders, and dropdown options preserved
- [ ] Form submit button text: "Submit Request" -- preserved
- [ ] Form footnote: "We respond to all PoV requests within 1 business day." -- preserved
- [ ] CTA title: "See how LLM Capsule works with your data" -- preserved
- [ ] CTA description: Full text preserved
- [ ] CTA buttons: "Request PoV" + "Talk to an Architect" -- preserved
- [ ] CTA secondary links: "Download Architecture Brief" + "Available on AWS Marketplace" -- preserved
- [ ] eyebrow "Get Started" removed from both Hero and CTA per rules

---

## Missing Components

None. All required components exist in the current DS:
- ds-hero--text-only
- ds-section-header--underline
- ds-bullet--number
- ds-banner--brand
- ds-card (for form container)
- ds-grid--2 (for 2-column layout)
- ds-cta-band
- Form elements use custom styling within DS token system (no new CSS variables needed)

---

## Notes for Frontend Dev

1. **Form styling:** Create form-specific CSS within `<style>` using DS tokens only. No new CSS variables. Focus state uses Capsule brand primary `rgba(24,33,232,0.1)` for box-shadow.
2. **2-column grid:** Use `ds-grid--2` for the process + form layout. On mobile (< 768px) it auto-collapses to 1 column. The numbered steps column appears first (above), form card second (below).
3. **Numbered steps styling:** Each step has a bold title followed by description. Use `<strong>` for step titles within `ds-bullet__item`. The number circle automatically uses `var(--ds-color-brand-primary)` (#1821E8) per Capsule brand override.
4. **Page simplicity:** This is a short 3-section page. Generous whitespace and clear visual hierarchy are critical.
5. **Navigation:** Include standard DS nav with LLM Capsule branding (match index-b-type.html nav).
6. **Footer:** Include standard DS footer matching other llm-capsule pages (match index-b-type.html footer).
7. **Image paths:** Use absolute URLs per CLAUDE.md: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/` for any background images (none needed for this page).
8. **CSS reference:** Use `llm-capsule/output/html/index-b-type.html` as the primary CSS reference for token values, nav/footer markup, and component patterns.
9. **Select dropdown default:** The "Select industry" option must have `value=""` and `disabled selected` attributes.
10. **No inline styles on form card.** The A-type uses inline `style` attributes on the form container -- replace all with DS classes.
