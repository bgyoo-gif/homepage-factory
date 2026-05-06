# 01-home-spec.md -- LLM Capsule Homepage (v6.2)

> Source: `llm-capsule/input/llmcapsule_260506/01_home.html`
> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md (v6.1/v6.2)
> Tokens: `llm-capsule/reference/tokens.json`
> Container max-width: **1280px** (`--container-max`)
> Font stack: **Inter** (`--f-display`) / **JetBrains Mono** (`--f-mono`)
> Button: **solid ink**, hover -> primary (gradient banned)
> Eyebrow: **ALLOWED** (LLM Capsule only)

---

## Global Rules

- All CSS variables use `var(--c-*)` / `var(--r-*)` / `var(--s-*)` / `var(--f-*)` from tokens.json
- No `!important`, no inline `style` (except CSS variable pass-through)
- Container: `max-width: var(--container-max, 1280px); margin: 0 auto; padding: 0 var(--s-page);`
- Section vertical padding: `var(--s-section)` = `clamp(64px, 8vw, 128px)`
- Responsive: mobile (375) / tablet (768) / sm-desktop (1024) / desktop (1280+)
- `word-break: keep-all; overflow-wrap: break-word;` on body
- Background: white by default. No `--c-bg-soft` section backgrounds unless explicitly noted
- No duplicate `ds-bg--*` classes in one page
- Mobile (`max-width: 767px`): `background-image: none` on bg-image sections
- Scrollbar hidden on `overflow-x: auto`: `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`

---

## Section Map (10 sections)

| # | Section | Layout Pattern | Background |
|---|---------|---------------|------------|
| 1 | Hero | [A] Hero text-only (split variant) | `linear-gradient(180deg, #fafbff 0%, #fff 100%)` -- light tint, NO bg image |
| 2 | Proof Strip | [I] Partner grid (marquee) | `var(--c-bg-soft)` surface |
| 3 | Why Storyline | Custom: `why-storyline` (numbered narrative) | white |
| 4 | 6 Capabilities | [G] Card grid 6-col | white |
| 5 | AI-Enabled Workflows | [G] Card grid 4-col | white |
| 6 | Without / With | Custom: 2-col comparison | white |
| 7 | 4-way Comparison | [O] Table 4-col | `var(--c-bg-soft)` surface |
| 8 | Industry Use Cases | [H] Case study cards 2-col | white |
| 9 | FAQ | [P] Accordion | `var(--c-bg-soft)` surface |
| 10 | CTA Strip | [K] CTA band | `var(--c-bg-dark)` dark navy |

**Background rhythm check:** Sections 3-4-5-6 are four consecutive white sections. Insert a bg-soft break or consider merging. Resolution: Section 5 (Workflows) gets `var(--c-bg-soft)` to break the run. Section 7 also gets `var(--c-bg-soft)`. This gives the pattern: tint / soft / white / white / soft / white / white / soft / soft / dark -- acceptable with alternation.

Revised background plan:
| # | Background |
|---|-----------|
| 1 | gradient tint (hero) |
| 2 | `var(--c-bg-soft)` |
| 3 | white |
| 4 | white |
| 5 | `var(--c-bg-soft)` -- breaks 3-white run |
| 6 | white |
| 7 | `var(--c-bg-soft)` |
| 8 | white |
| 9 | `var(--c-bg-soft)` |
| 10 | `var(--c-bg-dark)` |

---

## Section 1: Hero

**Layout pattern:** [A] Hero text-only with split grid (text left, visual right)
**Background:** `linear-gradient(180deg, #fafbff 0%, #ffffff 100%)` + `border-bottom: 1px solid var(--c-rule)`. NO background image (text-only hero rule).
**Padding-top:** `clamp(80px, 10vw, 140px)` (hero top), bottom `clamp(64px, 8vw, 96px)`

### Structure

```
section.hero
  div.container.hero__grid (grid: 1.05fr 1fr, gap 64px, align-items center)
    div (text column)
      span.eyebrow             -- "AI Enablement Data Layer"
      h1.hero__h1              -- "Make <strong>sensitive workflows</strong> run with AI."
      p.hero__sub              -- full paragraph (see content below)
      div.hero__tag            -- pill badge: "The AI enablement data layer for regulated operations."
      div.hero__cta            -- 2 buttons
      div.hero__metrics        -- 4 metric items (grid 4-col)
    div.hero__visual           -- product mock / illustration placeholder
```

### Content (verbatim)

- **Eyebrow:** `AI ENABLEMENT DATA LAYER`
- **Title:** `Make sensitive workflows run with AI.`
- **Title brand keyword:** `sensitive workflows` -> wrap in `<strong>` with `color: var(--c-primary)`
- **Description:** "From blocked workflows to operational AI -- without breaking documents, systems, or context. LLM Capsule is the AI enablement data layer for regulated enterprise operations. It plugs into the systems you already run -- on-premise, air-gapped, or hybrid -- and AI receives the operational structure it needs. Sensitive data stays inside your environment. Outputs return business-ready, in the originating workflow."
- **Tag pill:** "The AI enablement data layer for regulated operations." -- `background: var(--c-primary-soft); color: var(--c-primary-dark); border-radius: 999px; font-size: 13px; font-weight: 600;`
- **CTA 1:** "Request a Demo" -> `btn btn--primary` -> href `/request-a-demo`
- **CTA 2:** "See the Architecture" -> `btn btn--ghost` -> href `/architecture`
- **Metrics (4):**

| Value | Label |
|-------|-------|
| 0.12s | Per Page Processing |
| 100% | Restoration Rate |
| 98% | Output Similarity |
| 99.14% | Workflow Accuracy |

Metric number: `font-size: clamp(22px, 2.4vw, 30px); font-weight: 800; color: var(--c-primary);`
Metric label: `font-size: 11px; color: var(--c-muted); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;`
Metrics grid separated from CTAs by `border-top: 1px solid var(--c-rule); margin-top: 40px; padding-top: 32px;`

### Visual mock (right column)

- White card with border + shadow. Contains a 3-column mini-grid simulating NOC Console, Ticket System, Log Viewer, Runbook, and a dark LLM Capsule panel
- This is a **placeholder** for a real illustration (see `[IMAGE_SPEC]` in source)
- `data-replace="hero-visual"` marker preserved for designer handoff
- Dark panel (`--c-bg-dark`) with steps: Encapsulate, DP transform, Send to AI, Restore, Insert here

### Responsive

- **mobile (< 900px):** `hero__grid` -> single column, gap 40px
- **mobile (< 700px):** `hero__metrics` -> 2-col grid
- Typography: h1 uses `clamp(36px, 5vw, 64px)`

### Reusable TSX component

- `_shared/Hero.tsx` -- Props: eyebrow, title, titleBrand, description, tagText, cta1Label, cta1Href, cta2Label, cta2Href, metrics (array of {value, label})

### CMS Props

| Prop | Type | Default |
|------|------|---------|
| eyebrow | string | "AI ENABLEMENT DATA LAYER" |
| title | string | "Make sensitive workflows run with AI." |
| titleBrandKeyword | string | "sensitive workflows" |
| description | string | (full paragraph above) |
| tagText | string | "The AI enablement data layer for regulated operations." |
| cta1Label | string | "Request a Demo" |
| cta1Href | string | "/request-a-demo" |
| cta2Label | string | "See the Architecture" |
| cta2Href | string | "/architecture" |
| metric1Value | string | "0.12s" |
| metric1Label | string | "Per Page Processing" |
| metric2Value | string | "100%" |
| metric2Label | string | "Restoration Rate" |
| metric3Value | string | "98%" |
| metric3Label | string | "Output Similarity" |
| metric4Value | string | "99.14%" |
| metric4Label | string | "Workflow Accuracy" |

---

## Section 2: Proof Strip

**Layout pattern:** [I] Partner/logo grid -- grayscale marquee
**Background:** `var(--c-bg-soft)` + `border-bottom: 1px solid var(--c-rule)`
**Padding:** `40px 0` (compact, not full section padding)

### Structure

```
section.proof
  div.container
    p.proof__lead    -- centered lead text
    div.proof__logos -- horizontal marquee, 15 logos
```

### Content

- **Lead text:** "**Trusted by enterprises moving regulated AI from pilot to production** . Telecom . Industrial cybersecurity . Healthcare . Finance . Public sector . Legal"
- **15 logos** (text placeholders until real SVGs delivered):

| # | Name | Variant |
|---|------|---------|
| 1 | Gartner Vendor | `proof__logo--star` (purple border highlight) |
| 2 | Deutsche Telekom T Challenge 2026 -- Top 12 | default |
| 3 | SK Telecom | default |
| 4 | Claroty | default |
| 5 | EUMC | default |
| 6 | Kyobo | default |
| 7 | DB Insurance | default |
| 8 | IBK | default |
| 9 | NAVER Cloud | default |
| 10 | Shin&Kim | default |
| 11 | Ministry of National Defense (KR) | default |
| 12 | ISO/IEC 27001 | default |
| 13 | ISO/IEC 42001 | default |
| 14 | KISA Fast Track | default |
| 15 | AWS Marketplace | default |

### Styling

- `filter: grayscale(1); opacity: 0.75;` default
- Hover: full color + `opacity: 1`
- Gartner Vendor: `border: 1px solid var(--c-primary); color: var(--c-primary-dark);`
- Logo item: `font-family: var(--f-mono); font-size: 11px; padding: 6px 12px; border: 1px dashed var(--c-rule); border-radius: 4px;`
- Marquee animation: `@keyframes ds-marquee` infinite scroll, `hover: animation-play-state: paused`
- Full viewport width (`100vw`) overflow marquee

### Responsive

- Flex wrap on mobile. Marquee pauses on touch devices.

### Reusable TSX

- `_shared/ProofStrip.tsx` -- Props: leadText, logos (array of {name, isHighlighted})

---

## Section 3: Why Storyline

**Layout pattern:** Custom component `why-storyline` (numbered narrative flow, NOT step-tabs -- this is a reading narrative, not an interactive tab selector)
**Background:** white
**Section header:** Yes

### Section Header

- **Eyebrow:** `WHY AN AI ENABLEMENT DATA LAYER`
- **Title:** `The data AI needs is the data your business can't <span class="ds-text--brand">expose</span>.`
- **Title brand keyword:** `expose`
- **Description:** "Not four separate problems. One storyline -- read it through."
- **Alignment:** center

### Structure

```
section#section-3
  div.container
    div.section-head (eyebrow + h2 + p)
    div.why-flow (max-width: 980px, centered)
      div.why-storyline (white card, border, rounded)
        [Step 01] row: number badge + text block
        [Bridge] "BUT --"
        [Step 02] row: number badge + text block
        [Bridge] "AND --"
        [Step 03] row: number badge + text block
        [Bridge] "AND THE RESIDUAL RISK --"
        [Step 04] row: number badge + text block
      div.why-result (purple-dark card, 2-col: badge + content)
```

### Steps Content (verbatim)

**Step 01:**
- **Bold lead:** "External LLMs raise enterprise ROI."
- **Body:** "Approved external LLMs measurably improve productivity, processing speed, and automation ROI -- when they can actually reach the work. Every regulated enterprise wants in."

**Bridge:** `BUT --`

**Step 02:**
- **Bold lead:** "PII guardrails alone aren't enough."
- **Body:** "They detect names, IDs, financial fields. They were built for individual identifiers -- not for the structured ticket data, network configs, OT manifests, clinical workflows, and mission context that real regulated workflows actually run on. Operational data slips right through."

**Bridge:** `AND --`

**Step 03:**
- **Bold lead:** "DMZ and legacy operational data is complex and unstructured."
- **Body:** "Mixed free text, network identifiers, system logs, user context, incident records, configurations. Sensitivity leaks through structure, sequence, and aggregate pattern -- not just through field names. Field-level filtering doesn't see it."

**Bridge:** `AND THE RESIDUAL RISK --`

**Step 04:**
- **Bold lead:** "Filtering alone leaves regulated risk standing."
- **Body:** "GDPR, HIPAA, SOX, sector regulators, audit obligations, sovereignty constraints -- the risk of differential analysis, re-identification, and inference exposure that simple filtering cannot close. Pilots stall. Shadow AI emerges. Production never ships."

### Result Block

- **Badge:** `-> Result` (mono, uppercase, pill border `#6358e8`)
- **Title:** "LLM Capsule turns blocked workflows into running AI workflows."
- **Detail:** "Structure-preserving capsule + differential-privacy-based protection + in-environment execution alongside existing legacy systems + restoration into the originating workflow + two execution paths (external approved LLM or on-prem local) + customer-defined markers that change with your business. The AI enablement data layer for regulated operations."
- **Background:** `var(--c-primary-dark)` (#3b2fbf), text white
- **Layout:** grid `auto 1fr`, gap 28px. Mobile: single column.

### Step styling

- Number badge: `32x32px circle, background: var(--c-coral-dark), color: white, font-family: var(--f-mono), font-size: 11px, font-weight: 700`
- Bridge label: `font-family: var(--f-mono); font-size: 11px; color: var(--c-coral-dark); letter-spacing: 0.1em; font-weight: 700; border-left: 2px dashed var(--c-coral); padding-left: 24px; margin-left: 16px;`
- Text block: `font-size: clamp(15px, 1.3vw, 17px); color: var(--c-ink); line-height: 1.7;`
- Bold lead within text: `font-weight: 700; display: block; margin-bottom: 4px; font-size: 1.05em;`

### Responsive

- `why-flow`: max-width 980px centered
- Mobile (< 700px): result block single column

### Reusable TSX

- `_shared/WhyStoryline.tsx` -- custom component (no DS catalog match)
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, steps (array of {number, boldLead, body}), bridges (array of string), resultBadge, resultTitle, resultDetail

---

## Section 4: 6 Capabilities

**Layout pattern:** [G] Card grid -- 6-col desktop, 3-col tablet, 2-col small, 1-col mobile
**Background:** white

### Section Header

- **Eyebrow:** `CORE CAPABILITIES`
- **Title:** `Six reasons Capsule works inside real enterprise <span class="ds-text--brand">workflows</span>`
- **Title brand keyword:** `workflows`
- **Description:** "Other tools either block AI usage or destroy document context. LLM Capsule solves both -- and adapts to whatever your business protects next."
- **Alignment:** center

### Grid: `cap5` (6 columns)

```css
.cap5 { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 14px; }
@media (max-width: 1300px) { repeat(3, minmax(0, 1fr)); }
@media (max-width: 700px)  { repeat(2, minmax(0, 1fr)); }
@media (max-width: 480px)  { 1fr; }
```

### Cards (6)

Each card: white bg, `border: 1px solid var(--c-rule)`, `border-radius: var(--r-md)`, `border-top: 3px solid var(--cap-color)`, padding `22px 18px`, flex column.

| # | Color | Icon | Title | Description | Ref tag |
|---|-------|------|-------|-------------|---------|
| 1 | `--c-primary` (#5b4fe9) | 01 | Plug into legacy systems without changing the workflow | Air-gapped networks, on-premise servers, telecom-grade platforms, custom data pipelines, ServiceNow / SharePoint / Jira / OT historians -- LLM Capsule deploys inside your enterprise as-is. Single API-call addition. No system migration. Your existing workflows, security policies, and configurations stay intact. | Enterprise Env Execution |
| 2 | `--c-teal` (#0ea5a4) | 02 | Tables, tickets, logs, and runbooks stay readable to AI | Tables, cross-references, configurations, topology graphs, ticket fields, runbook steps, and document hierarchies survive the process intact. AI receives the full operational structure -- not broken fragments that produce useless outputs. | Structure-Preserving |
| 3 | `--c-amber` (#f59e0b) | 03 | Get real results back | AI outputs auto-restore with your original names, figures, and references -- ready for reports, legal reviews, claims documents, and client deliverables. No manual reconstruction. Token maps live only locally. | Restoration |
| 4 | `--c-coral` (#ef5350) | 04 | You define what's sensitive | Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, network identifiers, asset references, mission references -- any business-specific marker. Context-aware data control adapts to document type, department, and workflow. | Enterprise Context |
| 5 | `--c-bg-dark` (#0f1130) | 05 | Your workflow runs where your data already lives | Sensitive data stays inside your environment. External AI sees only safe placeholders; tokenization plus differential-privacy-based protection make original values practically non-recoverable from outside your boundary. Restoration happens only inside the organization. | Zero Exposure |
| 6 | `--c-primary-dark` (#3b2fbf) | 06 | You can change the policy tomorrow | Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Define, version, and time-shift confidentiality markers as your business and regulatory landscape evolve -- with full audit trail of which marker was protected when. | Time-Shifting Policy |

**Card 6 special:** `background: var(--c-primary-soft); border-color: var(--c-primary);`

### Card sub-elements

- **Icon:** `32x32 rounded-8 square, background: var(--cap-color), color: white, mono font, "01"--"06"`
- **Title:** `font-size: 15px; font-weight: 700; line-height: 1.3;`
- **Description:** `font-size: 12px; color: var(--c-ink-soft); line-height: 1.55;`
- **Ref tag:** `font-family: var(--f-mono); font-size: 10px; color: var(--c-muted); border-top: 1px dashed var(--c-rule); padding-top: 10px; margin-top: auto; letter-spacing: 0.05em;` prefixed with "Internal: "

### Reusable TSX

- `_shared/CapabilityGrid.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, cards (array of {number, color, title, description, refTag})

---

## Section 5: AI-Enabled Workflows

**Layout pattern:** [G] Card grid 4-col
**Background:** `var(--c-bg-soft)` (breaks 3-white run after sections 3-4)

### Section Header

- **Eyebrow:** `AI-ENABLED ENTERPRISE WORKFLOWS`
- **Title:** `The workflows that move from pilot to <span class="ds-text--brand">production</span>`
- **Title brand keyword:** `production`
- **Description:** "LLM Capsule plugs into the most common enterprise AI workflows -- protected before AI processing, restored to be directly usable in business."
- **Alignment:** center

### Grid: `wf-grid` (4 columns)

```css
.wf-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
@media (max-width: 1000px) { repeat(2, minmax(0, 1fr)); }
@media (max-width: 600px) { 1fr; }
```

### Cards (4)

Each card: white bg, `border: 1px solid var(--c-rule)`, `border-radius: var(--r-md)`, padding `24px`.

| # | Icon | Title | Description | Footer |
|---|------|-------|-------------|--------|
| 1 | file-text (Lucide) | Secure Document Summarization | Contracts, reports, regulatory filings -- protected before AI processing. AI generates summaries with real names, dates, and figures ready for business use. | Real names, dates, figures restored in output |
| 2 | clipboard-list (Lucide) | AI Claims Processing | Insurance and financial claims through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems. | Direct integration with claims systems |
| 3 | shield-check (Lucide) | Confidential Contract Review | AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references -- ready for deal management systems. | Real party names, amounts, references restored |
| 4 | chart-bar (Lucide) | Internal Report Generation | AI drafts internal reports from protected data sources -- performance reviews, audit findings, compliance summaries. Restored reports flow directly into governance workflows. | Restored reports flow into governance |

**Note:** Replace emoji icons from A-type with Lucide SVG icons (inline, stroke-width 1.5).

- **Footer:** `font-size: 12px; color: var(--c-primary-dark); font-weight: 600; border-top: 1px dashed var(--c-rule); padding-top: 12px;`

### Reusable TSX

- `_shared/WorkflowGrid.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, cards (array of {icon, title, description, footer})

---

## Section 6: Without / With

**Layout pattern:** Custom 2-col comparison (no direct DS catalog match -- closest is a modified [G] with 2 columns, but semantically a comparison component)
**Background:** white

### Section Header

- **Eyebrow:** `PILOT TO PRODUCTION`
- **Title:** `Without LLM Capsule. With <span class="ds-text--brand">LLM Capsule</span>.`
- **Title brand keyword:** `LLM Capsule` (second instance)
- **Description:** "What changes when the data layer can finally handle the work."
- **Alignment:** center

### Structure

```
div.ww (grid: 1fr 1fr, gap 20px)
  div.ww__col.ww__col--without
    div.ww__label   -- "WITHOUT LLM CAPSULE"
    h3.ww__h        -- "Enterprise AI projects stall at pilot"
    ul.ww__list     -- 6 items with X icon
  div.ww__col.ww__col--with
    div.ww__label   -- "WITH LLM CAPSULE"
    h3.ww__h        -- "Enterprise AI ships on real data"
    ul.ww__list     -- 6 items with check icon
```

### Without column

- **Background:** `var(--c-bg-soft)` (NOT coral-soft -- keeping it neutral per original)
  - Actually, per the user instruction: "without=coral tint". Override to: `background: var(--c-coral-soft); border: 1px solid var(--c-coral);` -- but original A-type uses `var(--c-bg-soft)`. **Decision:** Use `var(--c-coral-soft)` for B-type to strengthen visual contrast per user spec.
- **Label:** `var(--c-coral-dark)`, mono, uppercase, 11px, letter-spacing 0.15em
- **Heading:** "Enterprise AI projects stall at pilot"
- **Items (6, X prefix):**
  1. Manual review workflows persist -- humans process documents AI can't be trusted with
  2. Document structure destroyed -- flat masking breaks tables and cross-references
  3. Low-quality AI output -- even when AI is permitted, results need extensive manual reconstruction
  4. Security teams block AI adoption -- projects never demonstrate value before being cancelled
  5. Shadow AI emerges -- employees route around the controls because the controls block real work
  6. Regulated workflows excluded -- telecom, healthcare, defense, finance left out of the AI gains

### With column

- **Background:** `var(--c-primary-soft); border: 1px solid var(--c-primary);`
- **Label:** `var(--c-primary-dark)`, mono, uppercase
- **Heading:** "Enterprise AI ships on real data"
- **Items (6, check prefix):**
  1. AI runs on sensitive documents -- the data layer handles protection, teams focus on outcomes
  2. Real documents processed with any LLM -- ChatGPT, Claude, Gemini, Perplexity, or on-prem local
  3. Compliance satisfied -- zero raw exposure architecture meets GDPR, HIPAA, SOX governance
  4. Restored outputs retain business context -- real names, real figures, real references
  5. Tables, layouts, cross-references preserved through structure-preserving encapsulation
  6. Regulated industries adopt AI on production data -- pilots become production

### Responsive

- Mobile (< 800px): single column, `without` stacks above `with`

### Reusable TSX

- `_shared/ComparisonBlock.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, withoutLabel, withoutHeading, withoutItems (string[]), withLabel, withHeading, withItems (string[])

---

## Section 7: 4-way Comparison Table

**Layout pattern:** [O] Table (4 columns: Approach, Method, Limitation, vs LLM Capsule)
**Background:** `var(--c-bg-soft)`

### Section Header

- **Eyebrow:** `WHERE IT SITS`
- **Title:** `Not masking. Not a prompt gateway. Not <span class="ds-text--brand">synthetic data</span>.`
- **Title brand keyword:** `synthetic data`
- **Description:** "An AI enablement data layer for regulated workflows."
- **Alignment:** center

### Table

```html
<table class="compare__table">
  <thead>
    <tr>
      <th>Approach</th>
      <th>Method</th>
      <th>Limitation</th>
      <th class="us">vs LLM Capsule</th>
    </tr>
  </thead>
  <tbody>...</tbody>
</table>
```

Header row: `background: var(--c-bg-dark); color: white;`
"vs LLM Capsule" column header: `background: var(--c-primary-dark);` (highlighted)
First column cells: `background: var(--c-bg-soft); font-weight: 600; width: 22%;`
LLM Capsule cells: `background: var(--c-primary-soft); color: var(--c-ink);` (`.us-cell`)

### Rows (4)

| Approach | Method | Limitation | vs LLM Capsule |
|----------|--------|-----------|----------------|
| PII Guardrails & AI Security Suites | API-level protection and policy enforcement | Optimized for risk control, not workflow restoration | Capsule preserves operational structure, runs inside existing systems, and restores business-ready output |
| Masking & Redaction | Permanently removes data | Destroys the context AI needs to produce useful output | Capsule encapsulates locally and restores tokens to original values inside your environment |
| Synthetic Data Platforms | Artificial data generation | Training / testing only -- not live operational workflows | Capsule runs on real documents in production workflows |
| Security Team Blocks AI | Manual approval gate | Blocks AI projects -- pilot never reaches production | Capsule enables AI under existing enterprise governance |

### Responsive

- Mobile: horizontal scroll with `overflow-x: auto; scrollbar-width: none;`
- Minimum cell width enforced to prevent text collapse

### Reusable TSX

- `_shared/ComparisonTable.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, columns (string[]), highlightCol (number), rows (2d array)

---

## Section 8: Industry Use Cases

**Layout pattern:** [H] Case study cards, 2-col grid
**Background:** white

### Section Header

- **Eyebrow:** `BUILT FOR REGULATED OPERATIONS`
- **Title:** `From telecom NOC to <span class="ds-text--brand">mission operations</span>`
- **Title brand keyword:** `mission operations`
- **Description:** "Each industry below shows the operational data LLM Capsule transforms -- not just PII -- and where it's already deployed."
- **Alignment:** center

### Grid: `uc-grid` (2 columns)

```css
.uc-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
@media (max-width: 800px) { 1fr; }
```

### Cards (4)

Each card: white bg, `border: 1px solid var(--c-rule)`, `border-radius: var(--r-md)`, `border-left: 4px solid var(--uc-color)`, padding `28px`.

| # | Color | Number | Title | Input | Flow | Proof |
|---|-------|--------|-------|-------|------|-------|
| 1 | `--c-primary` | 01 | Network Operations & Incident Analysis | NOC logs . alarm sequences . device / site / circuit IDs . SLA risk . NOC response history . subscriber identities . network configs | Capsule -> AI generates RCA + customer-impact analysis -> restored into ticket / runbook | SK Telecom . Deutsche Telekom T Challenge 2026 -- Top 12, Data Security & Governance. |
| 2 | `--c-teal` | 02 | OT / Industrial Asset & Vulnerability Operations | asset ID . PLC / ICS alerts . vulnerability records . plant operation . patch constraint . vendor / device info . infrastructure details | Capsule -> AI reviews + recommends remediation -> security ops workflow | Partner: Claroty (industrial cybersecurity). |
| 3 | `--c-amber` | 03 | Healthcare Clinical & Hospital Operational Workflow | clinical workflow . lab results . prescription flow . patient names . diagnoses . medical record IDs . hospital operation . claim review context | Capsule -> AI summarizes + drafts clinical notes / radiology reports -> restored into EHR workflow | Deployed at Ewha Womans University Medical Center (EUMC). |
| 4 | `--c-coral` | 04 | Public Sector / Defense -- Mission & Classified Workflow | military personnel data . classified operation details . security-grade documents . mission log . operation brief . access-controlled context . command workflow | Capsule (local execution) -> AI drafts intelligence reports + briefing summaries -> restored under command control with full audit trail | Deployed at Ministry of National Defense (South Korea). On-prem / local execution path required. |

### Card sub-elements

- **Number:** `font-size: 14px; font-weight: 700; color: var(--uc-color);`
- **Title (h3):** `font-size: 19px; margin-bottom: 14px;`
- **Input/Flow rows:** grid `60px 1fr`, gap 12px, font-size 13px. Label: `font-weight: 700; color: var(--c-muted);`. Value: `color: var(--c-ink);`
- **Proof footer:** `border-top: 1px solid var(--c-rule); padding-top: 14px; margin-top: 14px; font-size: 12px; font-style: italic; color: var(--uc-color); font-weight: 600;`

### CTA below grid

- `text-align: center; margin-top: 32px;`
- Button: `btn btn--ghost` -> "See all six industries ->" -> href `/solutions`

### Reusable TSX

- `_shared/UseCaseGrid.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, sectionDesc, cards (array of {color, number, title, inputData, flow, proof}), ctaLabel, ctaHref

---

## Section 9: FAQ

**Layout pattern:** [P] Accordion (`ds-ac-card` / `<details>`)
**Background:** `var(--c-bg-soft)`

### Section Header

- **Eyebrow:** `FAQ`
- **Title:** `Frequently Asked <span class="ds-text--brand">Questions</span>`
- **Title brand keyword:** `Questions`
- **Description:** none
- **Alignment:** center

### Accordion container

- Max-width: `880px`, centered
- Each item: `<details>` with `border-bottom: 1px solid var(--c-rule); padding: 20px 0;`
- Summary: `font-size: 17px; font-weight: 600;` + `::after` plus/rotate icon
- Answer div: `color: var(--c-ink-soft); font-size: 15px; line-height: 1.7; margin-top: 12px;`

### Items (6)

| # | Question | Answer |
|---|----------|--------|
| 1 | What is an AI enablement data layer? | An AI enablement data layer sits between the existing regulated enterprise environment (NOC, ticket, OSS/BSS, OT consoles, EHR, mission systems, document portals) and large language models. It turns operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation, executes the AI workflow inside the enterprise environment, and restores results back into the originating workflow. It moves AI projects from pilot to production on real enterprise data. |
| 2 | How is LLM Capsule different from PII guardrails or AI security tools? | PII guardrails detect and mask personal identifiers at the API or prompt level. AI security tools focus on prompt injection and runtime threats. LLM Capsule operates one layer deeper -- at the AI enablement data layer. It transforms structured operational data using structure-preserving, differential-privacy-based encapsulation, supports both external LLM and on-prem local execution paths, and provides two-way restoration via state vault. It plugs into legacy enterprise systems with no architectural change required. |
| 3 | Can our team define what counts as sensitive? | Yes. Context-aware data control lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve. Standard PII categories are not enough -- define project codes, deal terms, internal IDs, network identifiers, asset references, mission references, and any business-specific marker. Yesterday's sensitive data isn't tomorrow's; the policy adapts. |
| 4 | Can LLM Capsule run on-premise or air-gapped? | Yes. Six deployment modes: on-premise, air-gapped, hybrid, cloud (AWS Marketplace), embedded SDK, and Slack App. Two execution paths: external approved LLM with capsule data only (no raw operational data exposure) or on-prem local lightweight model (zero external transmission). Path selection is policy-driven per workflow. Capsule runs inside the customer environment in every mode -- integration interfaces (REST / gRPC / JDBC / Graph API / on-prem API / SDK / Slack App) let existing enterprise systems invoke it from inside the environment. |
| 5 | Which industries and customers use LLM Capsule? | Telecom (Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance, SK Telecom), industrial cybersecurity and OT (partner: Claroty), healthcare (EUMC), finance and insurance (Kyobo, DB Insurance, IBK), legal (Shin&Kim), public sector / defense (Ministry of National Defense, South Korea), and cloud sovereignty (NAVER Cloud). Recognized as a Gartner Vendor and listed on AWS Marketplace. |
| 6 | What compliance frameworks does LLM Capsule support? | LLM Capsule supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific regulations by ensuring sensitive data never leaves the enterprise environment during AI processing. Certifications include ISO/IEC 27001 (information security management) and ISO/IEC 42001 (AI management system). Korean certifications include KISA Information Security Fast Track, GS Certification, and TTA. |

### Reusable TSX

- `_shared/FAQ.tsx`
- Props: sectionEyebrow, sectionTitle, sectionTitleBrand, items (array of {question, answer})

---

## Section 10: CTA Strip

**Layout pattern:** [K] CTA band
**Background:** `var(--c-bg-dark)` (#0f1130) -- dark navy
**Padding:** `64px var(--s-page)` (compact CTA, not full section padding)
**Text alignment:** center

### Content

- **Title (h2):** "From blocked AI workflows to operational AI." -- `color: #fff;`
- **Description (p):** "See how LLM Capsule plugs into your existing enterprise environment in 30 minutes. Bring your documents, deployment constraints, and evaluation questions." -- `color: #c8c4f7; max-width: 640px; margin: 0 auto 32px; font-size: 17px;`
- **Title brand keyword:** none (no `ds-text--brand` needed on dark bg)

### Buttons (3, centered flex row)

| # | Label | Style | Href |
|---|-------|-------|------|
| 1 | Request a Demo | `btn--invert` (white bg, ink text) | /request-a-demo |
| 2 | See the Architecture | `btn--invert-ghost` (transparent, purple border, white text) | /architecture |
| 3 | View Pricing | `btn--invert-ghost` | /pricing |

### Responsive

- Buttons flex-wrap on mobile

### Reusable TSX

- `_shared/CTAStrip.tsx`
- Props: title, description, buttons (array of {label, href, variant})

---

## Reusable Component Summary (TSX `_shared/`)

| Component | Used in section | New or existing |
|-----------|----------------|-----------------|
| Hero.tsx | 1 | New |
| ProofStrip.tsx | 2 | New |
| WhyStoryline.tsx | 3 | New (custom) |
| CapabilityGrid.tsx | 4 | New |
| WorkflowGrid.tsx | 5 | New |
| ComparisonBlock.tsx | 6 | New |
| ComparisonTable.tsx | 7 | New |
| UseCaseGrid.tsx | 8 | New |
| FAQ.tsx | 9 | New |
| CTAStrip.tsx | 10 | New |

---

## Custom Components Needed (not in DS catalog)

1. **why-storyline** -- Numbered narrative flow with bridge labels and result block. Unique to homepage "Why" section. No DS catalog match.
2. **compare-table** -- 4-column comparison table with highlighted "us" column. Closest to [O] but with column-level color coding.
3. **without-with** -- 2-column comparison with color-coded tint backgrounds and icon-prefixed lists. No direct DS match.

These should be implemented as page-specific styles within the B-type HTML (not added to DS core), unless reuse across multiple pages is confirmed.

---

## Implementation Notes for frontend-dev

1. **Font loading:** Include Inter (400, 600, 700, 800) and JetBrains Mono (400, 700) from Google Fonts
2. **tokens.css:** Link `llm-capsule/reference/tokens.css` or embed `:root` block from tokens.json
3. **Container:** `max-width: 1280px` (not 1440px)
4. **Buttons:** Solid ink background, NOT gradient. Hover transitions to primary purple.
5. **Eyebrow:** Allowed on all section headers. 12px, 700, uppercase, 0.12em tracking, primary color.
6. **No Oxanium font** -- all text in Inter. `.ds-text--product` class NOT used.
7. **Grid columns:** Always use `minmax(0, 1fr)` not bare `1fr`
8. **Lucide icons:** Replace all emoji icons with inline SVG from Lucide (stroke-width 1.5)
9. **Hero visual:** Keep `data-replace="hero-visual"` attribute for designer handoff. Implement the mock grid as-is.
10. **Proof strip:** Keep as text placeholders with `data-replace="logo"` markers. Real SVGs delivered later.
11. **Section IDs:** `section-1` through `section-10`
12. **Semantic HTML:** `<section>`, `<article>`, `<details>`, `<summary>`, `<table>`, `<thead>`, `<tbody>`
13. **JSON-LD:** Preserve the structured data block from A-type `<head>`
14. **Meta tags:** Preserve all OG/SEO meta from A-type
