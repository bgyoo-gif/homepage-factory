# product-spec.md

> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/product.html`
> Output: `llm-capsule/output/html/product-b-type.html`

---

## A-type Analysis

### Document Profile
- **Page type:** Product landing page
- **Tone:** Technical, persuasive, enterprise B2B
- **Total sections:** 13 (Hero + 11 body + CTA)
- **Key message:** LLM Capsule is an AI enablement data layer with zero exposure, restoration, enterprise context control, structure-preserving processing, and cross-model execution

### Section Inventory

| # | A-type Section | Content Type | Key Content |
|---|----------------|-------------|-------------|
| 1 | Product Hero | Hero text | Title, subtitle, detail paragraph, tagline, 3 CTAs |
| 2 | Core Differentiation | Card grid (5 cards) + definition callout | 3+2 architecture: 5 capability cards |
| 3 | Zero Exposure | Split (text + info box) | Encapsulation explanation, 4 info points |
| 4 | Restoration | Split (code demo + text) | Before/after code demo, workflow explanation |
| 5 | Enterprise Context Control | Text + feature grid (7 items) | Custom entity types beyond PII |
| 6 | Structure-Preserving Processing | Text + feature grid (3 items) | Document format support |
| 7 | Admin & Governance | Text + feature grid (6 items) | RBAC, policies, audit, monitoring |
| 8 | Cross-Model Execution | Text only | Model-agnostic, no vendor lock-in |
| 9 | API / SDK Integration | Text + feature grid (5 items) | Integration patterns |
| 10 | Deployment Readiness | Text + card grid (4 items) | On-prem, air-gapped, cloud, hybrid |
| 11 | Comparison | Table (4-col) + definition callout | vs masking vs gateways |
| 12 | FAQ | Accordion (8 items) + internal links | Product questions |
| 13 | Final CTA | CTA band | PoV request, secondary links |

---

## Section-by-Section Design Specification

---

### Section 1: Hero (Product Hero)
- **Section ID:** `section-hero`
- **Pattern:** [A] Hero text-only -- `ds-hero--text-only`
- **Background:** White (no background image -- text-only hero rule)
- **Section class:** `ds-section ds-section--hero`

#### Section Header
- Not applicable (hero has its own structure)

#### Content
- **h1:** `The AI enablement data layer and plugin for enterprise`
  - Brand emphasis: `<span class="ds-text--brand">data layer and plugin</span>`
  - Product name: `<span class="ds-text--product">LLM Capsule</span>` where applicable
- **Description (ds-hero__description):** "LLM Capsule enables enterprise AI adoption by keeping raw data inside your environment, preserving document structure and business context during AI processing, and restoring usable outputs through local restoration -- so enterprise teams can safely use any LLM on real documents in production workflows."
- **Second paragraph (ds-body-m):** Full detail paragraph from A-type (starting "Most enterprise AI security tools...")
- **Tagline:** Omit (eyebrow/tagline suppressed in B-type per rules)
- **Actions (ds-hero__actions):**
  - `ds-btn ds-btn--primary ds-btn--lg` -- "Request PoV" -> request-pov.html
  - `ds-btn ds-btn--secondary ds-btn--md` -- "View Architecture" -> architecture.html
  - `ds-btn ds-btn--ghost ds-btn--md` -- "See comparison" -> #section-11

#### Notes
- No breadcrumb in B-type
- eyebrow "Product" removed per rules

---

### Section 2: Core Differentiation
- **Section ID:** `section-2`
- **Pattern:** [D] Section Header + [V-2] Gradient Card Grid (5 cards in custom layout)
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none -- removed per rules)
- title: `Enterprise AI enablement through five core <span class="ds-text--brand">capabilities</span>`
- Brand keyword: "capabilities"
- description: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 architecture -- three core enablement capabilities plus structure-preserving processing and cross-model execution."

#### Screenshot Placeholder
- Placeholder for product screenshot: "LLM Capsule Dashboard -- Real-time encapsulation pipeline with document processing status"
- Use `ds-hero__screenshot-frame ds-bg--grad-blue` with placeholder image area

#### Content: Gradient Card Grid
- Layout: `ds-card-grid ds-card-grid--3col` for first 3, then `ds-card-grid ds-card-grid--2col` for last 2
- Alternative: Single `ds-card-grid--5col` custom or use 3+2 stacked grids

**Card 1 -- Zero Exposure (Core)**
- Variant: `ds-card--gradient ds-card--gradient-indigo`
- Badge: `ds-badge--primary` "CORE"
- Icon: Lucide `shield` (Security)
- Title: "Zero Exposure"
- Description: Full text from A-type

**Card 2 -- Restoration (Core)**
- Variant: `ds-card--gradient ds-card--gradient-indigo`
- Badge: `ds-badge--primary` "CORE"
- Icon: Lucide `refresh-cw` (Processing/Workflow)
- Title: "Restoration"
- Description: Full text from A-type

**Card 3 -- Enterprise Context (Core)**
- Variant: `ds-card--gradient ds-card--gradient-indigo`
- Badge: `ds-badge--primary` "CORE"
- Icon: Lucide `settings` (Processing/Workflow)
- Title: "Enterprise Context"
- Description: Full text from A-type

**Card 4 -- Structure-Preserving (+1)**
- Variant: `ds-card--gradient ds-card--gradient-blue`
- Badge: `ds-badge--neutral` "+1"
- Icon: Lucide `layers` (Processing/Workflow)
- Title: "Structure-Preserving"
- Description: Full text from A-type

**Card 5 -- Cross-Model Execution (+2)**
- Variant: `ds-card--gradient ds-card--gradient-blue`
- Badge: `ds-badge--neutral` "+2"
- Icon: Lucide `shuffle` (Processing/Workflow)
- Title: "Cross-Model Execution"
- Description: Full text from A-type

#### Banner/Callout
- `ds-banner ds-banner--brand`
- Text: "These capabilities let enterprises adopt AI without sacrificing data protection or workflow usability. This is what separates enterprise AI enablement from traditional masking tools."

---

### Section 3: Zero Exposure
- **Section ID:** `section-3`
- **Pattern:** [C] Product Split -- `ds-product-split`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Encapsulate before outbound -- raw data never <span class="ds-text--brand">leaves</span>`
- Brand keyword: "leaves"
- description: "LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment."

#### Content: Product Split
- **Left (4fr visual):** Screenshot placeholder -- "Document Encapsulation -- Before and after view of a contract with sensitive data replaced by tokens"
  - Background: `ds-bg--grad-deep`
- **Right (6fr content):**
  - Lead paragraph (ds-product-split__lead): First paragraph from A-type (starting "LLM Capsule encapsulates sensitive entities locally...")
  - Body paragraph (ds-product-split__body): Second paragraph ("Most enterprise AI risk starts when...")
  - Body paragraph: Third paragraph ("The mapping between original and encapsulated values...")

#### Sub-section: Info Box as Checklist
- Pattern: [L] Checklist -- `ds-bullet--check`
- 4 items from the info-box:
  1. "Local real-time encapsulation -- Raw data stays inside the enterprise environment. Sensitive elements are detected and replaced before any outbound transmission."
  2. "Protected outbound flow -- Only encapsulated representations cross the trust boundary. The AI provider processes useful but opaque data."
  3. "Environment-bound processing -- Supports controlled enterprise and regulated environments including on-premise, air-gapped, and VPC deployments."
  4. "Audit trail -- Every encapsulation event is logged with full traceability for enterprise AI governance and compliance reporting."

---

### Section 4: Restoration
- **Section ID:** `section-4`
- **Pattern:** [C] Product Split (reverse) -- `ds-product-split ds-product-split--reverse`
- **Background:** White
- **Note:** 3 consecutive white sections (2, 3, 4) -- insert bg image on this section's screenshot frame

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Enable AI without breaking enterprise <span class="ds-text--brand">workflows</span>`
- Brand keyword: "workflows"
- description: "LLM Capsule does more than hide data. It auto-restores usable output inside the environment after AI processing."

#### Content: Product Split (Reversed)
- **Left (6fr content):**
  - Lead: First paragraph from A-type
  - Body: Second paragraph (traditional masking comparison, with bold items preserved as `<strong>`)
  - Body: Third paragraph (operational viability)
- **Right (4fr visual):** Code demo panel
  - Background: `ds-bg--paint-blue`
  - Inside: Restoration demo using `ds-code-block` style
    - Panel 1 (dark/muted): Encapsulated text `[PERSON_01] submitted claim #[ID_04]...`
    - Panel 2 (success highlight): Restored text `James Mitchell submitted claim #INS-2024-0847...`

---

### Section 5: Enterprise Context Control
- **Section ID:** `section-5`
- **Pattern:** [D] Section Header + [J] Feature Grid -- `ds-feature-grid`
- **Background:** White
- **Note:** 4th consecutive white section -- insert background image here to break monotony
- **Background image:** Apply `ds-bg--grad-navy` to section, with white overlay

Wait -- per rules, general sections must be white. Instead, use a `ds-banner--full` with bg image between sections, or restructure.

**Revised approach:** Keep white background. The visual variety comes from different component patterns (product-split in 3-4, feature-grid here, card grid later).

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Control what matters to your business -- beyond generic <span class="ds-text--brand">PII</span>`
- Brand keyword: "PII"
- description: "LLM Capsule lets teams define sensitive entities beyond standard PII categories, including internal identifiers, project names, customer-specific markers, and organization-specific confidential terms."

#### Body Text
- Second paragraph from A-type (starting "Enterprise data protection is not limited to...") as `ds-body-m` under section header, before feature grid

#### Content: Feature Grid (`ds-feature-grid`)
- 2-column grid (7 items)
- Each item: icon + title + description

| # | Icon (Lucide) | Title | Description |
|---|---------------|-------|-------------|
| 1 | folder | Internal code names | Project names and operational identifiers |
| 2 | user | Customer identifiers | Customer-specific account codes and references |
| 3 | file-text | Contract references | Deal terms, agreement numbers, clause identifiers |
| 4 | chart-bar | Financial terms | Pricing models, valuation ranges, internal metrics |
| 5 | shield-alert | Vulnerability labels | Security findings, CVE references, risk assessments |
| 6 | brain | Strategic data | M&A targets, competitive intelligence, board-level data |
| 7 | wand-sparkles | Custom markers | Business-specific confidential markers defined by your team |

---

### Section 6: Structure-Preserving Processing
- **Section ID:** `section-6`
- **Pattern:** [D] Section Header + [G] Card Grid 3-col -- `ds-card-grid ds-card-grid--3col`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Beyond text -- keep document structure <span class="ds-text--brand">intact</span> for AI`
- Brand keyword: "intact"
- description: "Enterprise workflows do not run on plain text alone. They rely on reports, PDFs, spreadsheets, diagrams, presentations, tables, and mixed-format documents."

#### Body Text
- Second paragraph ("Flat masking treats every sensitive value identically...") as `ds-body-m`

#### Content: 3-col Card Grid
- Standard `ds-card` cards

| # | Icon (Lucide) | Title | Description |
|---|---------------|-------|-------------|
| 1 | file-text | PDF & Word Documents | Protected processing with layout, formatting, and section structure preserved. AI receives structurally complete documents. |
| 2 | table | Spreadsheets & Tables | Tabular data structure maintained through encapsulation and restoration. Column headers, row relationships, and cell references preserved. |
| 3 | chart-pie | Presentations & Reports | Visual and mixed-format documents handled as structured content. Cross-references and entity relationships remain trackable. |

---

### Section 7: Admin & Governance
- **Section ID:** `section-7`
- **Pattern:** [D] Section Header + [J] Feature Grid -- `ds-feature-grid`
- **Background:** White
- **Note:** Multiple white sections in a row -- insert a **KPI band** between section 6 and 7 to break monotony (see Section 6.5 below)

#### Insert: Section 6.5 -- KPI Band
- **Pattern:** [F] KPI Band -- `ds-kpi-band`
- **Background:** `ds-bg--grad-blue` on the component itself (not the section)
- **Placement:** Between sections 6 and 7
- **Data:** Extract implied KPIs from overall product messaging:

| Number | Label |
|--------|-------|
| 3+2 | Core Architecture |
| Zero | Raw Data Exposure |
| 100% | Local Restoration |
| Any | LLM Model Support |

---

Back to Section 7:

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Operational control for enterprise AI <span class="ds-text--brand">governance</span>`
- Brand keyword: "governance"
- description: "Enterprise deployment requires more than transformation logic. Teams need policy control, access control, activity visibility, and auditability."

#### Body Text
- Second paragraph ("Enterprise AI governance requires evidence...") as `ds-body-m`

#### Content: Feature Grid (`ds-feature-grid`)
- 2-column grid, 6 items

| # | Icon (Lucide) | Title | Description |
|---|---------------|-------|-------------|
| 1 | users | RBAC | Role-based access control for teams and workflows. Define who can configure policies, process documents, and view audit records. |
| 2 | shield-check | Policy Management | Define and enforce encapsulation policies per team, data type, document classification, or workflow context. |
| 3 | clipboard-list | Audit Logs | Full traceability of every encapsulation, AI processing, and restoration event. Supports compliance reporting and regulatory review. |
| 4 | chart-bar | Token Usage Visibility | Monitor token consumption and cost across all AI model interactions. Optimize usage and track spending by team or workflow. |
| 5 | scan | Detection Logs | Visibility into what was detected as sensitive, how it was classified, and how the protection policy was applied. |
| 6 | monitor | Operational Monitoring | Compare and monitor processing across multiple AI models. Centralized visibility into system health and throughput. |

---

### Section 8: Cross-Model Execution
- **Section ID:** `section-8`
- **Pattern:** [D] Section Header + [Q] Banner callout
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Model-agnostic -- use any LLM with no vendor <span class="ds-text--brand">lock-in</span>`
- Brand keyword: "lock-in"
- description: "Enterprise teams do not always standardize on a single AI model."

#### Body Text
- First paragraph (ds-body-m): "Enterprise teams do not always standardize on a single AI model. Evaluation, governance, and operational workflows may span multiple providers and multiple model choices over time. LLM Capsule fits this reality as an AI enablement data layer for cross-model enterprise AI deployment."
- Second paragraph (ds-body-m): "Because LLM Capsule operates at the data layer -- not the model layer -- protection and enablement remain stable even when model vendors change. ChatGPT, Claude, Gemini, Perplexity, or any LLM API can be used interchangeably without reconfiguring the pipeline. This is cross-model execution -- enterprise AI enablement independent of any specific AI provider, eliminating vendor lock-in."

#### Banner Callout
- `ds-banner ds-banner--info`
- Text: Emphasize the model-agnostic nature: "ChatGPT, Claude, Gemini, Perplexity, or any LLM API -- protection stays consistent regardless of which model you choose."

---

### Section 9: API / SDK Integration
- **Section ID:** `section-9`
- **Pattern:** [D] Section Header + [G] Card Grid -- `ds-card-grid ds-card-grid--3col` (5 items wraps to 3+2)
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Built to fit existing enterprise <span class="ds-text--brand">systems</span>`
- Brand keyword: "systems"
- description: "LLM Capsule works as a deployable component through API and SDK integration patterns, making it practical to embed into existing products, portals, and internal workflows."

#### Body Text
- "The API provides LLM API enablement at the data layer -- wrap any existing AI integration with encapsulation and restoration without rebuilding the application." as `ds-body-m`

#### Content: Card Grid 3-col (5 cards)

| # | Icon (Lucide) | Title | Description |
|---|---------------|-------|-------------|
| 1 | laptop | Internal enterprise portals | Embed protection into existing employee-facing AI tools and knowledge systems. |
| 2 | link | Partner backends | Integrate into partner platforms and B2B workflows with API-based encapsulation. |
| 3 | workflow | Secure document workflows | Add protection to existing document processing, review, and approval pipelines. |
| 4 | brain-circuit | AI-assisted analysis tools | Wrap analysis and extraction tools with data protection at the API layer. |
| 5 | globe | Customer-facing AI features | Enable customer-facing AI capabilities without exposing internal data to external models. |

---

### Section 10: Deployment Readiness
- **Section ID:** `section-10`
- **Pattern:** [D] Section Header + [G] Card Grid -- `ds-card-grid ds-card-grid--4col`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Enterprise AI deployment -- ready for any controlled <span class="ds-text--brand">environment</span>`
- Brand keyword: "environment"
- description: "Enterprise teams need deployment flexibility without giving up control."

#### Body Text
- Full paragraph from A-type as `ds-body-m`

#### Screenshot Placeholder
- "LLM Capsule API Console -- SDK integration with enterprise document management systems"
- Use screenshot placeholder area

#### Content: 4-col Card Grid

| # | Icon (Lucide) | Title | Description |
|---|---------------|-------|-------------|
| 1 | pc-case | On-premise | Fully inside customer-controlled infrastructure. The encapsulation engine runs within the enterprise data center. |
| 2 | lock | Air-gapped environments | Restricted and isolated environments. Encapsulation on the isolated network, controlled transfer for AI processing. |
| 3 | cloud | Cloud & AWS Marketplace | AWS Marketplace deployment for streamlined procurement. Runs within the enterprise's cloud account or VPC. |
| 4 | link | Hybrid & Embedded | Different sensitivity levels route through different deployment modes. Embeddable into existing applications and partner products. |

#### External Link Button
- "View on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--md` (external link as button, not inline text link)

---

### Section 11: Comparison
- **Section ID:** `section-11`
- **Pattern:** [D] Section Header + [O] Table -- `ds-table ds-table--4col`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `How <span class="ds-text--product">LLM Capsule</span> differs from traditional <span class="ds-text--brand">approaches</span>`
- Brand keyword: "approaches"
- Product name: "LLM Capsule" with `ds-text--product`
- description: "Not all protection approaches are designed for usable enterprise AI workflows. Traditional masking protects data by reducing usability. LLM Capsule protects data while preserving enterprise workflow value."

#### Content: Table (4 columns)
- Wrap in `ds-table-wrap`
- Table class: `ds-table ds-table--4col`
- Columns: Dimension | Traditional Masking / Redaction | Prompt Security Gateways | LLM Capsule (highlight column)
- The LLM Capsule column should use brand color emphasis for check marks
- Preserve all 9 data rows exactly as in A-type
- Check marks: use Lucide `check` icon with `color: var(--ds-color-success)`
- Cross marks: use Lucide `x` icon with `color: var(--ds-color-error)`

#### Banner Callout
- `ds-banner ds-banner--brand`
- Bold lead: "AI results are auto-restored through local restoration."
- Body: "This is the fundamental capability that separates LLM Capsule from every other approach -- enterprise AI enablement that produces usable outputs, not abstracted placeholders."

---

### Section 12: FAQ
- **Section ID:** `section-12`
- **Pattern:** [D] Section Header + [P] FAQ Accordion -- `ds-ac-card`
- **Background:** White
- **Section class:** `ds-section`

#### Section Header (`ds-section-header ds-section-header--underline`)
- eyebrow: (none)
- title: `Common questions about <span class="ds-text--product">LLM Capsule</span>`
- Brand keyword: none (product name already highlighted)
- description: (none)

#### Content: Accordion List (`ds-ac-list`)
- 8 FAQ items, each as `ds-ac-card`
- All questions and answers preserved exactly from A-type:

1. "Does raw data ever leave the environment?" -- Full answer
2. "Where does restoration happen?" -- Full answer
3. "Can we define our own sensitive entities?" -- Full answer
4. "Does it support document-heavy workflows?" -- Full answer
5. "Can it fit existing enterprise systems?" -- Full answer
6. "Is AWS Marketplace deployment available?" -- Full answer
7. "Can it run in air-gapped or on-premise environments?" -- Full answer
8. "What AI models does LLM Capsule support?" -- Full answer

#### Internal Links
- Pattern: [R] Dark Link Cards -- `ds-card--dark` in `ds-card-grid ds-card-grid--3col`
- Title: "Explore further"
- All 11 links preserved from A-type:
  - Architecture, Trust & Compliance, Pricing, Request PoV, Learn Hub, Glossary, Why Redaction Breaks AI, vs Masking Tools, vs Prompt Gateways, vs Synthetic Data, Restoration

---

### Section 13: Final CTA
- **Section ID:** `section-cta`
- **Pattern:** [K] CTA Band -- `ds-cta-band`
- **Background image:** `ds-bg--grad-violet` on CTA band (container outside, full-width)
- **Section class:** No wrapping section -- CTA band is placed directly

#### Content
- **Title (ds-cta-band__title):** "See how LLM Capsule fits your environment, documents, and controls"
- **Description (ds-cta-band__description):** "Bring your documents, deployment constraints, and evaluation questions. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements."
- **Actions (ds-cta-band__actions):**
  - "Request PoV" -> request-pov.html
  - "Talk to an Architect" -> architecture.html
- **Footnote links (ds-cta-band__footnote area):**
  - "Download Architecture Brief" -> downloads.html -- `ds-btn ds-btn--secondary ds-btn--sm` (button, not inline link)
  - "View on AWS Marketplace" -> external link -- `ds-btn ds-btn--secondary ds-btn--sm` (button, not inline link)

---

## Layout Flow Summary

| # | Section | Pattern | Background | Visual Break |
|---|---------|---------|-----------|-------------|
| 1 | Hero | [A] Hero text-only | White | -- |
| 2 | Core Differentiation | [V-2] Gradient Cards (3+2) | White | Gradient cards provide color |
| 3 | Zero Exposure | [C] Product Split | White | Screenshot frame bg |
| 4 | Restoration | [C] Product Split (reverse) | White | Code demo panel |
| 5 | Enterprise Context | [J] Feature Grid | White | Feature grid border |
| 6 | Structure-Preserving | [G] Card Grid 3-col | White | Card borders |
| 6.5 | KPI Band | [F] KPI Band | ds-bg--grad-blue (component) | Background image on KPI band |
| 7 | Governance | [J] Feature Grid | White | Feature grid border |
| 8 | Cross-Model | [Q] Banner callout | White | Banner callout |
| 9 | Integration | [G] Card Grid 3-col | White | Card borders |
| 10 | Deployment | [G] Card Grid 4-col | White | Card borders |
| 11 | Comparison | [O] Table 4-col | White | Table structure |
| 12 | FAQ | [P] Accordion | White | Accordion borders |
| 13 | CTA | [K] CTA Band | ds-bg--grad-violet | Full bg image |

### Layout Variety Check
- No 3+ consecutive `ds-grid--1` sections
- Pattern variety: Hero -> Gradient Cards -> Product Split -> Product Split (reverse) -> Feature Grid -> Card Grid -> KPI Band -> Feature Grid -> Banner -> Card Grid -> Card Grid -> Table -> Accordion -> CTA
- Background image used on: KPI Band (component), CTA Band (component) -- 2 different images, no duplicates

---

## Background Image Assignments

| Location | Class | Image |
|----------|-------|-------|
| Section 2 screenshot frame | `ds-bg--grad-blue` | bg-gradient-blue-violet |
| Section 3 product split visual | `ds-bg--grad-deep` | bg-gradient-deep-teal |
| Section 4 product split visual | `ds-bg--paint-blue` | bg-paint-blue-iridescent |
| Section 6.5 KPI band (component) | `ds-bg--grad-navy` | bg-gradient-navy-teal |
| Section 13 CTA band (component) | `ds-bg--grad-violet` | bg-gradient-violet-teal |

All 5 are different -- no duplicates.

---

## Global Notes

1. **Fonts:** DM Sans for all text. Oxanium only for "LLM Capsule" product name via `ds-text--product`.
2. **Colors:** All via CSS variables from design-system-core.md + design-system-capsule.md. No hardcoded hex/rgba.
3. **eyebrow:** Removed from all sections per rules.
4. **Section backgrounds:** All white (`ds-section`). No `ds-section--light`. Background images only on components (KPI band, CTA band) and product-split visual frames.
5. **Responsive:** 4 breakpoints (375/768/1024/1440). Container padding 16/32/32/120px. Max-width 1440px.
6. **External links as buttons:** "View on AWS Marketplace" in sections 10 and 13 rendered as `ds-btn ds-btn--secondary`.
7. **Text minimum brightness:** No color lighter than neutral-400 (#9c9c9c) for text.
8. **Images:** All image URLs use absolute path `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/` for shared bg images.
9. **LLM Capsule logo:** `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif`
10. **Mobile bg images:** `@media (max-width: 767px) { background-image: none; }` on all bg-image elements.
11. **No !important, no inline style** (except CSS variable passthrough).
12. **Section header alignment:** Always center (no `ds-section-header--left`).
13. **Description max-width responsive:** 100% mobile, 720px at 1024px, 860px at 1440px.
