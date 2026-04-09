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
- **Total sections:** 3 (Hero + Form/Process + CTA)
- **Key message:** Enterprise prospects can test LLM Capsule on their own documents, in their own environment, against their compliance requirements through a structured 4-step PoV process

### Section Inventory

| # | A-type Section | Content Type | Key Content |
|---|----------------|-------------|-------------|
| 1 | Page Hero | Hero text | Title, subtitle description |
| 2 | What to Expect + Form | Split: process steps (left) + form (right) | 4-step PoV process, callout box, contact form with 6 fields |
| 3 | Final CTA | CTA band | "See how LLM Capsule works with your data", 2 CTAs + 2 secondary links |

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
  - Product name where "LLM Capsule" appears in body: `<span class="ds-text--product">LLM Capsule</span>`
- **Description (ds-hero__description):** "Test LLM Capsule using your own enterprise documents and workflows. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements."
  - "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`

#### Notes
- No breadcrumb in B-type
- eyebrow "Get Started" removed per rules
- No CTA buttons in hero (form is the primary action in next section)

---

### Section 2: What to Expect + Request Form
- **Section ID:** `section-2`
- **Pattern:** [U] Step Tabs -- `ds-step-tabs` for the process steps, followed by form card
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: none (removed per rules)
- title: `What to <span class="ds-text--brand">expect</span>`
- Brand keyword: "expect"
- description: "A structured 4-step process from discovery to results, designed to demonstrate real value on your actual data."

#### Content: Step Tabs (`ds-step-tabs`)

**Rationale:** The A-type has 4 numbered sequential steps (Discovery call -> Technical setup -> Document testing -> Results review). Per the mapping rule "Step 1,2,3 sequential process -> ds-step-tabs", this is a step tabs component.

**Tab 1 -- Discovery Call**
- Tab label: "Discovery Call"
- Title: "Discovery Call"
- Description: "We understand your document types, sensitivity requirements, deployment constraints, and AI use cases. We identify the highest-value workflow to test."
- Icon suggestion: Lucide `phone` or `message-square`

**Tab 2 -- Technical Setup**
- Tab label: "Technical Setup"
- Title: "Technical Setup"
- Description: "LLM Capsule is deployed in your environment (on-premise, cloud, or hybrid). We configure encapsulation policies to match your sensitivity requirements."
  - "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
- Icon suggestion: Lucide `settings`

**Tab 3 -- Document Testing**
- Tab label: "Document Testing"
- Title: "Document Testing"
- Description: "Your real enterprise documents are processed through the full encapsulation, AI, and restoration pipeline. You evaluate output quality, protection coverage, and workflow integration."
- Icon suggestion: Lucide `file-text`

**Tab 4 -- Results Review**
- Tab label: "Results Review"
- Title: "Results Review"
- Description: "We present detection accuracy, workflow accuracy, response similarity, and processing performance metrics measured on your specific workload."
- Icon suggestion: Lucide `chart-bar`

#### Callout Banner (`ds-banner ds-banner--brand`)
- Text: "Typical PoV duration: 2-4 weeks. Bring your documents, deployment constraints, and evaluation criteria."
- Position: Below step tabs, above form

#### Content: Request Form Card (`ds-card`)
- Card style: `ds-card` with standard border and padding
- Title (inside card): "Request PoV" (`ds-card__title`)
- Form fields (preserve all original fields exactly):
  1. Name -- text input, placeholder "Full name"
  2. Work Email -- email input, placeholder "name@company.com"
  3. Company -- text input, placeholder "Company name"
  4. Job Title -- text input, placeholder "Your role"
  5. Industry -- select dropdown with options: Financial Services, Public Sector, Healthcare, Legal, Telecom, Insurance, Enterprise / Other
  6. Primary Use Case -- textarea, placeholder "Describe your primary AI use case and the types of documents you need to process."
- Submit button: `ds-btn ds-btn--primary ds-btn--lg` full width -- "Submit Request"
- Footnote below button: "We respond to all PoV requests within 1 business day." (ds-caption, center-aligned, color: `var(--ds-color-text-tertiary)`)

#### Form Styling Rules
- Form inputs use DS tokens: border `var(--ds-color-border-default)`, border-radius `var(--ds-radius-sm)`, font-family `var(--ds-font-base)`, font-size `var(--ds-text-md)`, padding `var(--ds-space-sm) var(--ds-space-md)`
- Focus state: border-color `var(--ds-color-brand-primary)`, box-shadow with brand color
- Labels: `var(--ds-text-sm)`, font-weight `var(--ds-weight-semibold)`, margin-bottom `var(--ds-space-xs)`
- Form group gap: `var(--ds-space-lg)`
- The form card max-width: 560px, centered with `margin: 0 auto`

---

### Section 3: Final CTA
- **Section ID:** `section-cta`
- **Pattern:** [K] CTA Band -- `ds-cta-band`
- **Background:** Brand gradient fallback (no ds-bg--* class needed; CTA band uses `var(--ds-gradient-brand)` from capsule tokens by default)
- **Section class:** none (CTA band is full-width, placed outside ds-container)

#### Content
- **Title (ds-cta-band__title):** "See how LLM Capsule works with your data"
  - "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
- **Description (ds-cta-band__description):** "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
- **Actions (ds-cta-band__actions):**
  - Button 1: `ds-btn ds-btn--md` -- "Request PoV" -> request-pov.html
  - Button 2: `ds-btn ds-btn--md` -- "Talk to an Architect" -> architecture.html
- **Footnote links (ds-cta-band__footnote):**
  - "Download Architecture Brief" -> downloads.html
  - "Available on AWS Marketplace" -> https://aws.amazon.com/marketplace (external, target="_blank")

#### Notes
- CTA band buttons use the glass/white style defined in DS: `background: rgba(255,255,255,0.92); color: var(--ds-color-text-primary);`
- No emoji in footnote links (removed from A-type)
- "Available on AWS Marketplace" is a text link in footnote area, not a standalone button (it is within the CTA band context)

---

## Layout Flow Summary

| Section | Pattern | Background | Background Image |
|---------|---------|------------|-----------------|
| 1. Hero | [A] Hero text-only | White | None |
| 2. Process + Form | [U] Step Tabs + [Q] Banner + Form Card | White | None |
| 3. CTA | [K] CTA Band | Brand gradient | None (gradient fallback) |

**Background image check:** Only 2 white sections before CTA -- no need for intermediate background image insertion (rule triggers at 3+ consecutive).

---

## Content Integrity Checklist

- [ ] Hero title: "Request a Proof of Value" -- preserved
- [ ] Hero description: Full text preserved with LLM Capsule product styling
- [ ] 4 PoV steps: All step titles and full descriptions preserved
- [ ] Callout: "Typical PoV duration: 2-4 weeks..." -- preserved
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
- ds-step-tabs
- ds-banner--brand
- ds-card (for form container)
- ds-cta-band
- Form elements use custom styling within DS token system

---

## Notes for Frontend Dev

1. **Form styling:** Create form-specific CSS within `<style>` using DS tokens. No new CSS variables -- use existing `--ds-*` tokens.
2. **Step tabs screenshots:** Since this is a process description page without product screenshots, use Lucide icons in the screenshot panel area instead (icon + brief visual summary).
3. **Page simplicity:** This is a short 3-section page. Focus on generous whitespace and clear visual hierarchy.
4. **Navigation:** Include standard DS nav with LLM Capsule branding.
5. **Footer:** Include standard DS footer matching other llm-capsule pages.
6. **Image paths:** Use absolute URLs per CLAUDE.md: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/` for any background images.
