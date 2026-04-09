# Architecture Page - B-Type Design Spec

> Brand: **llm-capsule**
> Input: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/architecture.html`
> Output: `llm-capsule/output/html/architecture-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`

---

## A-Type Analysis Summary

### Page Purpose
Enterprise AI enablement architecture page for LLM Capsule. Explains how the product encapsulates sensitive data, sends only protected representations to external AI services, and restores outputs locally.

### Tone
Technical/educational with persuasive undertone. Developer/architect audience.

### Section Inventory (A-Type)

| # | Section | Content Type | Key Content |
|---|---------|-------------|-------------|
| 1 | Hero | Text hero | Title + subtitle describing LLM Capsule as AI enablement data layer |
| 2 | Architecture Overview | Diagram + description | SVG architecture diagram (Internal -> Trust Boundary -> Data Flow -> Trust Boundary -> External AI) |
| 3 | Architecture Components | Text descriptive (5 sub-sections) | Local Encapsulation Engine, Policy Control Layer, Outbound Capsule Transmission, Local Restoration Engine, Audit & Compliance Layer |
| 4 | Deployment Options | Card grid (5 items) | On-Premise, Air-Gapped, Cloud (AWS), Hybrid, Embedded Integration |
| 5 | CTA | CTA band | "See how LLM Capsule works with your data" + Request PoV + Talk to Architect + Download links |

---

## B-Type Section Design

### Section 1: Hero (id="section-1")
**Pattern:** [A] Hero text-only (`ds-hero--text-only`)
**Background:** White (text-only hero = no background image)

#### Section Header
- eyebrow: **none** (삭제 -- A타입의 "Architecture" eyebrow 제거)
- title: `AI Enablement <span class="ds-text--brand">Architecture</span> for Enterprise AI`
- title 강조 키워드: "Architecture" -> `ds-text--brand`
- description: `<span class="ds-text--product">LLM Capsule</span> is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.`

#### Structure
```
<section class="ds-section ds-section--hero" id="section-1">
  <div class="ds-container">
    <div class="ds-hero ds-hero--text-only">
      <h1 class="ds-hero__title">...</h1>
      <p class="ds-hero__description">...</p>
    </div>
  </div>
</section>
```

#### Notes
- "LLM Capsule" in description: `ds-text--product` (Oxanium)
- padding-top: 100px (ds-section--hero)
- No breadcrumb in B-type
- No CTA buttons in hero (A-type has none either)

---

### Section 2: Architecture Overview (id="section-2")
**Pattern:** [D] Section Header + [W] Diagram (`ds-diagram`)
**Background:** White

#### Section Header (`ds-section-header--underline`)
- eyebrow: **none**
- title: `Architecture <span class="ds-text--brand">Overview</span>`
- title 강조 키워드: "Overview" -> `ds-text--brand`
- description: `<span class="ds-text--product">LLM Capsule</span> operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.`
- 정렬: center

#### Diagram Component
The A-type contains a complex SVG architecture diagram showing:
- Left column: "Internal Environment" (Customer Documents, Internal Databases, RAG Pipelines, Admin Console, Policy Engine, LLM Capsule box)
- Center: "How Data Flows Through LLM Capsule" with 4 steps (Detection -> Encapsulation -> LLM Processing -> Restoration -> Business-Ready Output)
- Right column: "External AI Services" (ChatGPT/OpenAI, Claude/Anthropic, Gemini/Google, Perplexity, Any LLM API)
- Two "Trust Boundary" dashed lines

**Implementation:** Use `ds-diagram` component to rebuild this diagram. The diagram must preserve the 3-zone architecture (Internal / Data Flow / External) and 4-step process. Use DS diagram tokens for all colors and styling. The SVG from A-type should be rebuilt as a DS-compliant diagram using `ds-diagram__window`, `ds-diagram__card`, etc.

**Diagram rebuild spec:**
- Window: `ds-diagram__window` with titlebar dots
- Content: Use `ds-diagram__content` as outer wrapper
- 3-column layout: Internal Env | LLM Capsule Process | External AI
- Internal column header: brand gradient (`--ds-gradient-arch-header`)
- Step badges: Step 1-4 with appropriate colors (brand-primary for local steps, info for external)
- Trust boundary: dashed border between zones
- External AI list: dark cards for each AI service
- Key/legend at bottom

**Important:** "LLM Capsule" text within diagram uses `ds-text--product` where it appears as standalone product name.

---

### Section 3: Architecture Components (id="section-3")
**Pattern:** [D] Section Header + [U] Step Tabs (`ds-step-tabs`)
**Background:** White

**Rationale:** The A-type has 5 sub-sections under "Architecture Components" that describe a sequential pipeline (Encapsulation -> Policy -> Transmission -> Restoration -> Audit). This is a sequential process, making Step Tabs the ideal component. This also breaks the monotony of having multiple full-width text sections.

#### Section Header (`ds-section-header--underline`)
- eyebrow: **none**
- title: `Architecture <span class="ds-text--brand">Components</span>`
- title 강조 키워드: "Components" -> `ds-text--brand`
- description: 없음 (A타입에 섹션 설명 없음 -- title만 있음)
- 정렬: center

#### Step Tabs Content

**Tab 1: Local Encapsulation Engine**
- Tab label: "Encapsulation Engine"
- Tab number: 1
- Title: "Local Encapsulation Engine"
- Description: "The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary."
- Screenshot: placeholder (ds-step-tabs__screenshot with text "Encapsulation Engine Interface")
- Icon suggestion: `lock` (Security)

**Tab 2: Policy Control Layer**
- Tab label: "Policy Control"
- Tab number: 2
- Title: "Policy Control Layer"
- Description: "Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console."
- Screenshot: placeholder
- Icon suggestion: `shield-check` (Security)

**Tab 3: Outbound Capsule Transmission**
- Tab label: "Capsule Transmission"
- Tab number: 3
- Title: "Outbound Capsule Transmission"
- Description: "Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data."
- Screenshot: placeholder
- Icon suggestion: `arrow-right-left` (Processing)

**Tab 4: Local Restoration Engine**
- Tab label: "Restoration Engine"
- Tab number: 4
- Title: "Local Restoration Engine"
- Description: "After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows."
- Screenshot: placeholder
- Icon suggestion: `refresh-cw` (Processing)

**Tab 5: Audit & Compliance Layer**
- Tab label: "Audit & Compliance"
- Tab number: 5
- Title: "Audit & Compliance Layer"
- Description: "Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements."
- Screenshot: placeholder
- Icon suggestion: `clipboard-list` (Report)

---

### Section 4: Deployment Options (id="section-4")
**Pattern:** [D] Section Header + [G] Card Grid 3col (`ds-card-grid--3col`) + [V-2] Gradient Cards
**Background:** White

**Background image insertion:** Sections 1-3 are all white. After section 3 we need visual variation. Section 4 uses gradient cards for visual interest. If still too monotone, the KPI or banner can break it up. But with the diagram in S2 and step tabs in S3, we have sufficient visual variety.

#### Section Header (`ds-section-header--underline`)
- eyebrow: **none**
- title: `Deployment <span class="ds-text--brand">Options</span>`
- title 강조 키워드: "Options" -> `ds-text--brand`
- description: `<span class="ds-text--product">LLM Capsule</span> enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.`
- 정렬: center

#### Card Grid (5 cards in 3col grid -- 3 top + 2 bottom)

**Card 1: On-Premise** (ds-card--gradient-indigo)
- Icon: `pc-case`
- Title: "On-Premise"
- Description: "Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters."

**Card 2: Air-Gapped** (ds-card--gradient-blue)
- Icon: `shield`
- Title: "Air-Gapped"
- Description: "For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration."

**Card 3: Cloud (AWS Marketplace)** (ds-card--gradient-blue)
- Icon: `cloud`
- Title: "Cloud (AWS Marketplace)"
- Description: "Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement."
- Button: `ds-btn ds-btn--secondary ds-btn--sm` linking to AWS Marketplace (external link -> button rule)

**Card 4: Hybrid** (ds-card--gradient-green)
- Icon: `layers`
- Title: "Hybrid"
- Description: "Different document types or sensitivity levels route through different deployment modes within a single <span class='ds-text--product'>LLM Capsule</span> instance. Maximum flexibility."

**Card 5: Embedded Integration** (ds-card--gradient-silver)
- Icon: `blocks`
- Title: "Embedded Integration"
- Description: "<span class='ds-text--product'>LLM Capsule</span> embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack."

#### Gradient Card Colors (Capsule brand)
- indigo: On-Premise (핵심 기능)
- blue: Air-Gapped, Cloud (보조)
- green: Hybrid (성과/유연성)
- silver: Embedded (일반 정보)

---

### Section 5: CTA Band (id="section-5")
**Pattern:** [K] CTA Band (`ds-cta-band`)
**Background:** Background image -- `ds-bg--gradient-deep-teal` (CTA must have background image)

#### Content
- title: `See how <span class="ds-text--product">LLM Capsule</span> works with your data`
- description: `Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.`
- Actions:
  - Primary button: "Request PoV" -> `request-pov.html` (`ds-btn ds-btn--md`)
  - Secondary button: "Talk to an Architect" -> `architecture.html` (`ds-btn ds-btn--md`)
- Footnote links (below actions, as `ds-cta-band__footnote`):
  - "Download Architecture Brief" -> `downloads.html`
  - "Available on AWS Marketplace" -> `https://aws.amazon.com/marketplace` (external, target="_blank")

#### Notes
- CTA band is placed OUTSIDE ds-container (full-width)
- "LLM Capsule" in title: `ds-text--product` (Oxanium)
- CTA buttons inside `.ds-cta-band__actions` get white/translucent styling automatically
- background-image URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png`
- Mobile: background-image: none

---

## Background Image Plan

| Section | Background |
|---------|-----------|
| 1. Hero | White (text-only hero rule) |
| 2. Architecture Overview | White |
| 3. Architecture Components | White |
| 4. Deployment Options | White (gradient cards provide visual variety) |
| 5. CTA Band | `ds-bg--gradient-deep-teal` (CTA rule) |

Check: Sections 1-4 are white. This is 4 consecutive white sections, which exceeds the 3-section rule. However, Section 2 contains a large diagram and Section 3 has step tabs, providing significant visual variety. Adding a background image to section 3 or 4 would be appropriate.

**Revised plan:** Insert background image on Section 4 (Deployment Options) to break the white streak.

| Section | Background |
|---------|-----------|
| 1. Hero | White (text-only hero rule) |
| 2. Architecture Overview | White |
| 3. Architecture Components | White |
| 4. Deployment Options | `ds-bg--gradient-blue-violet` as section background with white translucent overlay |
| 5. CTA Band | `ds-bg--gradient-deep-teal` |

Wait -- normal sections should always be white background per rules. The rule states: "일반 섹션: 항상 white". Only Hero Screenshot, CTA, and the "3+ white consecutive" exception allow background images. Since we have 4 consecutive whites, we can add a background image to one middle section.

**Final plan:** Add background image to Section 2 (Architecture Overview) since it contains the diagram which will look good over a subtle background.

| Section | Background |
|---------|-----------|
| 1. Hero | White |
| 2. Architecture Overview | `ds-bg--gradient-blue-violet` (breaks 3+ white streak) |
| 3. Architecture Components | White |
| 4. Deployment Options | White |
| 5. CTA Band | `ds-bg--gradient-deep-teal` |

Background image dedup check: `gradient-blue-violet` and `gradient-deep-teal` are different. OK.

---

## Layout Monotony Check

- Section 1: Hero text-only (text block)
- Section 2: Diagram (large visual element) -- with bg image
- Section 3: Step Tabs (interactive tabbed component)
- Section 4: 3-col gradient card grid
- Section 5: CTA band

No ds-grid--1 repetition. Sufficient layout variety. PASS.

---

## Content Integrity Checklist

- [x] Hero title: preserved verbatim
- [x] Hero description: preserved verbatim
- [x] Architecture Overview description: preserved verbatim
- [x] All 5 architecture components (names + descriptions): preserved verbatim
- [x] All 5 deployment options (names + descriptions): preserved verbatim
- [x] CTA title + description: preserved verbatim
- [x] CTA links (Request PoV, Talk to Architect, Download, AWS Marketplace): all preserved
- [x] Architecture diagram content: all data flow steps, internal components, external AI services preserved

---

## External Link -> Button Rule Check

- "AWS Marketplace" link in Cloud card: converted to `ds-btn ds-btn--secondary ds-btn--sm`
- "Available on AWS Marketplace" in CTA footnote: kept as footnote text link (standard CTA footnote pattern)
- "Download Architecture Brief" in CTA: kept as footnote text link

---

## Nav & Footer

- Nav: Standard `ds-nav` component with LLM Capsule branding
- Nav links: Product, Architecture, Solutions, Trust, Pricing, Resources, AWS Marketplace (button), Request PoV (primary CTA)
- Footer: Standard `ds-footer` matching A-type footer content (Product, Solutions, Resources, Company columns)
- Footer copyright: "2025 LLM Capsule by CUBIG. All rights reserved."

---

## Technical Notes

1. All CSS variables from `design-system-core.md` and `design-system-capsule.md` only
2. No `!important`, no inline styles (except CSS variable passing)
3. No eyebrow on any section
4. No `ds-section--light` anywhere
5. Brand font (Oxanium) only on "LLM Capsule" product name via `ds-text--product`
6. All image URLs use absolute path: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
7. LLM Capsule logo: `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif`
8. Responsive: 4 breakpoints (375/768/1024/1440)
9. Container max-width: 1440px with appropriate padding per breakpoint
10. Mobile bg images: `background-image: none` at `@media (max-width: 767px)`
11. Section 2 background image on section level (not component level)
12. Icons: inline SVG from Lucide, `stroke-width="1.5"`
13. Step tabs require JavaScript (included in DS core)
14. Accordion JS also needed if used
15. Diagram: use `ds-diagram` component tokens, rebuild from DS spec (not copy A-type SVG)
