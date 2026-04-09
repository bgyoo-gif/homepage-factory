# solutions-spec.md

> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/solutions.html`
> Output: `llm-capsule/output/html/solutions-b-type.html`

---

## A-type Analysis

### Document Profile
- **Page type:** Solutions / Industry use cases landing page
- **Tone:** Persuasive, enterprise-facing, industry-specific enablement
- **Total sections:** 4 (Hero + Industry Use Cases + KPI Proof + CTA)
- **Key message:** Regulated and document-heavy industries can now safely adopt AI on real enterprise data using LLM Capsule as an AI enablement data layer

### Section Inventory

| # | A-type Section | Content Type | Key Content |
|---|----------------|-------------|-------------|
| 1 | Hero + Screenshot | Hero text + screenshot placeholder | Title, long description, screenshot placeholder |
| 2 | Industry Use Cases | Card grid (6 industry cards) | Blocked/Enabled states per industry, proof clients |
| 3 | KPI / Proof Strip | KPI data (4 numbers) + tagline | Detection/Workflow accuracy, PII, similarity |
| 4 | Final CTA | CTA band | PoV request, 3 buttons, 2 secondary links |

---

## Section-by-Section Design Specification

---

### Section 1: Hero
- **Section ID:** `section-hero`
- **Pattern:** [A-2] Hero Screenshot -- `ds-hero--screenshot`
- **Background:** White (screenshot frame gets bg image)
- **Section class:** `ds-section ds-hero-screenshot-section`

#### Content
- **h1 (ds-hero__title):** `AI, Now Safe for Every Industry`
  - Brand emphasis: `<span class="ds-text--brand">Every Industry</span>`
- **Description (ds-hero__description):** "Regulated and document-heavy industries can now adopt AI on real enterprise data. <span class="ds-text--product">LLM Capsule</span> is an AI enablement data layer and plugin that removes the data exposure barrier blocking enterprise AI adoption -- enabling AI first, protecting data at the data layer."
- **Screenshot frame:**
  - Class: `ds-hero__screenshot-frame ds-bg--paint-blue`
  - Fallback bg: `var(--ds-color-neutral-100)`
  - Background image: `url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.webp')`
  - Inner: `ds-hero__screenshot` with placeholder image (screenshot-placeholder div showing "LLM Capsule in Action -- Document processing across regulated industry workflows")
- **Actions below (ds-hero__actions-below):**
  - `ds-btn ds-btn--primary ds-btn--md` -- "Request PoV" -> request-pov.html
  - `ds-btn ds-btn--secondary ds-btn--md` -- "See Product" -> product.html

#### Notes
- eyebrow "Solutions" removed per rules
- Mobile: background-image: none on screenshot-frame

---

### Section 2: Industry Use Cases
- **Section ID:** `section-2`
- **Pattern:** [D] Section Header + [G] Card Grid 3col
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none -- removed per rules)
- title: `How Each Industry Uses <span class="ds-text--brand"><span class="ds-text--product">LLM Capsule</span></span>`
- Brand keyword: "LLM Capsule" (product name, uses ds-text--product inside ds-text--brand)
- description: "Regulated industries can now adopt AI on real enterprise data. See how each industry uses LLM Capsule to enable AI while protecting sensitive information."

#### Card Grid
- Class: `ds-card-grid ds-card-grid--3col`
- 6 cards total, each using `ds-card` with the following structure:

**Card structure (each):**
```html
<div class="ds-card">
  <span class="ds-card__icon">[ICON]</span>
  <h3 class="ds-card__title ds-card__title--sm">[Industry Name]</h3>
  <p class="ds-card__description">[Industry description]</p>
  <hr class="ds-card__divider">
  <div style="display: flex; flex-direction: column; gap: var(--ds-space-xs);">
    <div class="ds-industry-state ds-industry-state--blocked">
      <span class="ds-badge ds-badge--error ds-badge--sm">Blocked</span>
      <span>[blocked text]</span>
    </div>
    <div class="ds-industry-state ds-industry-state--enabled">
      <span class="ds-badge ds-badge--success ds-badge--sm">Enabled</span>
      <span>[enabled text]</span>
    </div>
  </div>
  <div class="ds-card__tags">
    <span class="ds-card__tag">[proof client(s)]</span>
  </div>
</div>
```

**Custom component needed: `ds-industry-state`**
- This is a custom inline component (styled within the page) for the blocked/enabled state pairs
- `.ds-industry-state` -- flex, gap 8px, align-items flex-start, padding 10px 12px, border-radius var(--ds-radius-xs), font-size var(--ds-text-sm), line-height var(--ds-leading-normal)
- `.ds-industry-state--blocked` -- background: var(--ds-color-neutral-050), color: var(--ds-color-text-secondary)
- `.ds-industry-state--enabled` -- background: rgba(14, 130, 76, 0.06), color: var(--ds-color-text-primary)

**Card 1: Public Sector**
- Icon: Lucide `landmark` (28px)
- Title: "Public Sector"
- Description: "Uses AI to draft operational briefings, no classified info ever reaches external servers."
- Blocked: "Military personnel data, classified operation details & security-grade documents"
- Enabled: "AI-assisted intelligence reports & briefing summaries -- with full audit trail"
- Proof tag: "Ministry of National Defense (South Korea)"

**Card 2: Finance / Insurance**
- Icon: Lucide `building-2` (28px)
- Title: "Finance / Insurance"
- Description: "Uses AI to streamline claim reviews, policyholder data stays fully protected."
- Blocked: "Policyholder names, claim records & credit information in prompts"
- Enabled: "AI-powered insurance claim analysis & underwriting reports -- no customer data leaves"
- Proof tags: "Kyobo", "DB Insurance"

**Card 3: Healthcare**
- Icon: Lucide `heart-pulse` (28px)
- Title: "Healthcare"
- Description: "Uses AI to summarize patient records, PHI never touches an external server."
- Blocked: "Patient names, diagnoses & medical record IDs"
- Enabled: "AI-generated clinical summaries & radiology reports -- PHI stays local"
- Proof tag: "Ewha Womans University Medical Center"

**Card 4: Legal**
- Icon: Lucide `scale` (28px)
- Title: "Legal"
- Description: "Drafts court documents with AI, no case info leaves the firm."
- Blocked: "Client names, case details & privileged information"
- Enabled: "AI-drafted memos, briefs & contract reviews -- fully contained"
- Proof tag: "Shin&Kim"

**Card 5: Telecom**
- Icon: Lucide `antenna` (28px)
- Title: "Telecom"
- Description: "Leverage AI across operations, customer and network data fully de-identified."
- Blocked: "Subscriber identities, call records, IP addresses & network configs"
- Enabled: "AI-driven customer analysis & network operations -- all data de-identified before use"
- Proof tags: "SK Telecom", "Deutsche Telekom", "T Challenge 2026 Top 12"

**Card 6: Network Security**
- Icon: Lucide `shield-check` (28px)
- Title: "Network Security"
- Description: "Enables industrial clients to use public AI with all sensitive operational data protected."
- Blocked: "Internal system data, vulnerability reports & infrastructure details in prompts"
- Enabled: "Regulated industries can safely adopt public LLMs -- sensitive info de-identified at the gate"
- Proof tag: "Claroty"

---

### Section 3: KPI / Proof Strip
- **Section ID:** `section-3`
- **Pattern:** [F] KPI Band
- **Background:** KPI band component uses background image (NOT section-level bg)
- **Section class:** `ds-section`

#### KPI Band
- Class: `ds-kpi-band ds-bg--gradient-deep-teal`
- Background image: `url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.webp')`
- Fallback: brand gradient (from capsule DS)

**4 KPI Items:**

| # | Number | Label |
|---|--------|-------|
| 1 | 98.1% | Detection Accuracy |
| 2 | 99.14% | Workflow Accuracy |
| 3 | 100% | Structured PII |
| 4 | 98% | Response Similarity |

#### Below KPI Band (within same section, after the kpi-band)
- **Tagline (banner):** Use `ds-banner ds-banner--brand` component
  - Text: "Enable AI. Protect data. Restore results. Track everything."
  - Sub-note (below, separated): "0.12s processing per 2,200-character document"

---

### Section 4: Final CTA
- **Section ID:** `section-cta`
- **Pattern:** [K] CTA Band
- **Background:** Background image on CTA band (full-width, outside ds-container)
- **Section class:** None -- CTA band is standalone, no wrapping section

#### CTA Band
- Class: `ds-cta-band ds-bg--wave-teal-blue`
- Background image: `url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-wave-teal-blue.webp')`
- Fallback: brand gradient

#### Content
- eyebrow: (none -- removed per rules)
- **Title (ds-cta-band__title):** "See how your industry uses LLM Capsule"
  - Note: "LLM Capsule" as `<span class="ds-text--product">LLM Capsule</span>`
- **Description (ds-cta-band__description):** "Bring your documents, deployment constraints, and evaluation questions. We will show how LLM Capsule fits your environment."
- **Actions (ds-cta-band__actions):**
  - `ds-btn ds-btn--md` -- "Request PoV" -> request-pov.html
  - `ds-btn ds-btn--md` -- "See Product" -> product.html
  - `ds-btn ds-btn--md` -- "View Architecture" -> architecture.html
- **Footnote row (ds-cta-band__footnote):**
  - Link 1: "Download Architecture Brief" -> downloads.html (button not inline link)
  - Link 2: "Available on AWS Marketplace" -> https://aws.amazon.com/marketplace (external, button)
  - Both rendered as `ds-btn ds-btn--secondary ds-btn--sm` below the main actions

---

## Background Image Allocation

| Section | Background |
|---------|------------|
| 1 - Hero Screenshot | screenshot-frame: `ds-bg--paint-blue` (bg-paint-blue-iridescent.webp) |
| 2 - Industry Use Cases | White |
| 3 - KPI Band | Component-level: `ds-bg--gradient-deep-teal` (bg-gradient-deep-teal.webp) |
| 4 - CTA Band | Component-level: `ds-bg--wave-teal-blue` (bg-wave-teal-blue.webp) |

No duplicate bg images. All within rules.

---

## Layout Flow Summary

```
[A-2] Hero Screenshot (white + screenshot frame bg image)
  |
[D] Section Header (underline, center) + [G] Card Grid 3col (6 industry cards)
  |
[F] KPI Band (4 metrics, bg image on component) + [Q] Banner (tagline)
  |
[K] CTA Band (full-width, bg image)
```

**Layout variety check:** 4 sections, 4 different patterns. No ds-grid--1 repetition. PASS.

---

## Nav & Footer

### Navigation
- Use `ds-nav` component matching product-b-type.html pattern
- Links: Product, Architecture, Solutions (active), Trust, Pricing, Resources
- AWS Marketplace link as `ds-btn ds-btn--secondary ds-btn--sm`
- "Request PoV" as `ds-btn ds-btn--primary ds-btn--sm`

### Footer
- Reuse footer from product-b-type.html (same brand, same structure)
- Copyright: "2025 LLM Capsule by CUBIG. All rights reserved."

---

## Custom Component: ds-industry-state

**Note to frontend-dev:** This component does not exist in the DS and should be defined as page-local CSS. It is a simple flex container for the Blocked/Enabled state pairs within industry cards.

```css
.ds-industry-state {
  display: flex;
  align-items: flex-start;
  gap: var(--ds-space-xs);
  padding: var(--ds-space-sm) var(--ds-space-sm);
  border-radius: var(--ds-radius-xs);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}
.ds-industry-state--blocked {
  background-color: var(--ds-color-neutral-050);
  color: var(--ds-color-text-secondary);
}
.ds-industry-state--enabled {
  background-color: rgba(14, 130, 76, 0.06);
  color: var(--ds-color-text-primary);
}
.ds-industry-state .ds-badge {
  flex-shrink: 0;
  margin-top: 2px;
}
```

---

## Content Integrity Checklist

- [x] All 6 industry cards with exact Blocked/Enabled text preserved
- [x] All 4 KPI values preserved: 98.1%, 99.14%, 100%, 98%
- [x] All KPI labels preserved exactly
- [x] Tagline preserved: "Enable AI. Protect data. Restore results. Track everything."
- [x] Processing speed preserved: "0.12s processing per 2,200-character document"
- [x] All proof/client names preserved: Ministry of National Defense, Kyobo, DB Insurance, Ewha Womans University Medical Center, Shin&Kim, SK Telecom, Deutsche Telekom, T Challenge 2026 Top 12, Claroty
- [x] CTA title and description preserved verbatim
- [x] All CTA links preserved: Request PoV, See Product, View Architecture, Download Architecture Brief, AWS Marketplace
- [x] Hero description preserved in full

---

## Meta & SEO

- **title:** `Solutions -- AI, Now Safe for Every Industry | LLM Capsule`
- **meta description:** "LLM Capsule enables AI across public sector, finance, healthcare, legal, and telecom. Turn blocked data into enabled AI."
- **canonical:** `https://llmcapsule.ai/solutions`
- **JSON-LD BreadcrumbList:** Home > Solutions
- **OG tags:** Preserve from A-type
