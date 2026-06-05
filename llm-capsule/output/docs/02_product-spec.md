# 02_product-spec.md -- LLM Capsule Product Page (v6.2)

> Source: `llm-capsule/input/llmcapsule_260506/02_product.html`
> Brand: **llm-capsule**
> DS: design-system-core.md + design-system-capsule.md (v6.1/v6.2)
> Tokens: `llm-capsule/reference/tokens.json`
> Container max-width: **1280px** (`--container-max`)
> Font stack: **Inter** (`--f-display`) / **JetBrains Mono** (`--f-mono`)
> Button: **solid ink**, hover -> primary (gradient banned)
> Eyebrow: **ALLOWED** (LLM Capsule only)
> Oxanium: **BANNED** -- Inter for everything including product name

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
- Grid: `repeat(N, minmax(0, 1fr))` -- never `repeat(N, 1fr)`
- `ds-bullet--check .ds-bullet__icon`: leave empty (CSS `::before` auto-generates checkmark)
- Image base URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/`

---

## Section Map (8 sections)

| # | Section | Layout Pattern | Background |
|---|---------|---------------|------------|
| 1 | Hero | [A-2] Hero screenshot | white (hero text-only variant with video frame below) |
| 2 | Demo Video | Embedded in Hero section (video frame + caption) | white |
| 3 | Interactive Product Tour | [U] Step tabs (5 steps) | white |
| 4 | Performance Metrics | [F] KPI band + metric detail grid | white, KPI band has bg-image |
| 5 | Workflow Gallery | [H] Case study cards 2-col | `var(--c-bg-soft)` -- breaks white run |
| 6 | Admin Console | [C] Product split (reverse) | white |
| 7 | Capability 06 Deep Dive | [G] Card grid 3-col with intro banner | white |
| 8 | CTA | [K] CTA band | `var(--c-bg-dark)` dark navy |

**Background rhythm check:** Sections 1-2-3-4 are four consecutive white. Insert break: Section 3 (Interactive Tour) gets `var(--c-bg-soft)`. Revised:

| # | Background |
|---|-----------|
| 1 | white (hero) |
| 2 | merged into Section 1 |
| 3 | `var(--c-bg-soft)` -- breaks white run |
| 4 | white (KPI band component itself gets bg-image) |
| 5 | white |
| 6 | bg-image section (`ds-bg--paint-lavender`) -- breaks 4-5-6 white run |
| 7 | white |
| 8 | `var(--c-bg-dark)` |

**Background image assignments (no duplicates):**
- KPI band component: `ds-bg--grad-navy` (navy-teal gradient, fits metrics mood)
- Section 6 (Admin Console): `ds-bg--paint-lavender` (light bg-image section)
- CTA band: `var(--c-bg-dark)` (brand dark navy, no bg-image needed -- using gradient-brand fallback)

---

## Section 1 + 2: Hero + Demo Video (merged)

**Layout pattern:** [A-2] Hero screenshot -- text-centered hero with video frame below (screenshot-frame structure). The demo video section is merged into the hero as the "screenshot" portion.
**Background:** white. NO background image (hero has video frame, not a static screenshot -- still use `ds-hero--screenshot` structure). The screenshot-frame gets `ds-bg--grad-blue` for the frame surround.
**Padding-top:** 100px (hero fixed top)

### Section Header

Hero section -- no section header needed. Hero itself serves as page entry.

### Structure

```
section.ds-section.ds-hero-screenshot-section#section-1
  div.ds-container
    div.ds-hero.ds-hero--screenshot
      span.eyebrow                          -- "Product"
      h1.ds-hero__title                     -- "Watch <strong class="ds-text--brand">LLM Capsule</strong> run on a real enterprise workflow"
      p.ds-hero__description                -- full description
    div.ds-hero__actions-below              -- 2 buttons (centered)
    div.ds-hero__screenshot-frame.ds-bg--grad-blue
      div.ds-hero__screenshot               -- video embed area
        div.demo-video                      -- custom: video player + caption
    div.ds-banner.ds-banner--info           -- video caption as banner below frame
```

### Content (verbatim)

- **Eyebrow:** `PRODUCT`
- **Title:** `Watch LLM Capsule run on a real enterprise workflow`
- **Title brand keyword:** `LLM Capsule` -> `<strong class="ds-text--brand">LLM Capsule</strong>`
- **Description:** "Two minutes -- see a real document encapsulated, sent to an external LLM, and restored back into the originating workflow. No marketing words. The actual product."
- **CTA 1:** "Request a Live Demo" -> `ds-btn ds-btn--primary ds-btn--md` -> href `/request-a-demo`
- **CTA 2:** "View Architecture" -> `ds-btn ds-btn--secondary ds-btn--md` -> href `/architecture`

### Video Player (custom component inside screenshot-frame)

The video player area uses `ds-hero__screenshot` as the outer frame. Inside:
- Video placeholder with aspect-ratio 16:9, dark background (`var(--c-bg-dark)`)
- Play button (circle, `background: var(--c-primary)`, white triangle)
- Label: "Watch the 2-minute product demo"
- Meta: "2:14 . LLM CAPSULE LIVE WALKTHROUGH" (mono font, `var(--c-primary)` color)
- `data-replace="demo-video"` attribute for future video swap

### Video Caption (banner below frame)

Use `ds-banner ds-banner--info` below the screenshot frame:
- Text: "**What you'll see:** A telecom NOC ticket flows through LLM Capsule -- device IDs, circuit IDs, site references, alarm sequences, and SLA-impact references are encapsulated locally -- subscriber identifiers included; the protected capsule reaches an external LLM; the AI's RCA recommendation is auto-restored back into the original ticket. End-to-end, in production."
- Link: "Take the Interactive Tour" -> `ds-btn ds-btn--secondary ds-btn--sm` button (not inline link) -> href `#section-3`

### IMAGE_SPEC (preserved from original)

```
Asset: 2:14 product demo video (MP4 + WebM)
Subject: Real product screen recording -- left panel shows NOC ticket with raw operational data;
middle panel shows LLM Capsule encapsulating; right panel shows external LLM processing;
final frame shows recommendation auto-restored.
Aspect: 16:9 . Resolution: 1920x1080 . Length: 2:14
Thumbnail: og-product-demo.png (still frame at 0:32)
data-replace="demo-video"
```

### screenshot-frame rules
- `ds-bg--grad-blue` background image on frame
- `background-color: #3a3d8f` fallback (required)
- `padding: var(--ds-space-2xl) var(--ds-space-2xl) 0` (left-right padding required)
- `border-radius: var(--ds-radius-xl) var(--ds-radius-xl) 0 0`
- Mobile: `background-image: none`, fallback color shows

---

## Section 3: Interactive Product Tour

**Layout pattern:** [U] Step tabs (5 steps)
**Background:** `var(--c-bg-soft)` surface
**Section ID:** `section-3`

### Section Header

```
ds-section-header ds-section-header--underline
  eyebrow: "Interactive Product Tour"
  title: "Five steps. One real document. <span class="ds-text--brand">Real output.</span>"
  title brand keyword: "Real output." -> ds-text--brand
  description: "The same capsule mechanism runs across telecom, healthcare, finance, defense, legal, and OT. Below: a contract review workflow. The raw document never leaves your environment."
```

**NOTE:** Hero title and this section title are different ("Watch LLM Capsule run..." vs "Five steps..."), so section header is NOT skipped.

### Step Tabs Component

```
div[data-step-tabs]
  div.ds-step-tabs__nav  -- 5 tab buttons
  div.ds-step-tabs__panel[data-panel="1"] (active by default)
  div.ds-step-tabs__panel[data-panel="2"]
  div.ds-step-tabs__panel[data-panel="3"]
  div.ds-step-tabs__panel[data-panel="4"]
  div.ds-step-tabs__panel[data-panel="5"]
```

Each panel: `ds-step-tabs__panel--active` layout = `grid 5fr 7fr` on desktop.

#### Tab labels:
1. "Point at the source"
2. "Define policy"
3. "Encapsulate"
4. "Process"
5. "Restore"

#### Step 1: Point at the source

- **Panel title:** "Reads the document where it already lives"
- **Panel description:** "LLM Capsule runs inside your environment and reads documents from the systems already there -- SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, internal NOC console, or your own portal. No data migration. No external pipe. No architectural change."
- **Secondary description** (smaller, muted): "Existing systems invoke Capsule from inside the environment via REST / gRPC / JDBC / Graph API / on-prem API / embedded SDK / Slack App."
- **Tags** (ds-card__tags): `In-environment`, `No data egress`, `Existing sources`
- **Screenshot:** placeholder `<img>` with `data-replace="tour-step-01"`. Alt: "LLM Capsule source registration screen". NO SVG mock -- use empty `ds-step-tabs__screenshot` with placeholder img.
- **IMAGE_SPEC:** Real product screenshot (PNG). LLM Capsule admin UI "Source registration" panel. 16:10, ~960x600px. Light theme.

#### Step 2: Define policy

- **Panel title:** "Pick the markers your business cares about"
- **Panel description:** "Pick from the starter pack -- project codes, contract refs, network IDs, mission refs, financial terms, vulnerability labels -- or write your own. Markers can be added, removed, and time-shifted tomorrow without redeploying. Every policy version is logged."
- **Tags:** `11 starter markers`, `Custom regex`, `Policy versions`, `RBAC scope`
- **Screenshot:** placeholder with `data-replace="tour-step-02"`. Alt: "LLM Capsule policy editor". 16:10, ~960x600px.

#### Step 3: Encapsulate

- **Panel title:** "Sensitive elements replaced. Structure preserved."
- **Panel description:** "Inside the DMZ -- Demilitarized Zone (Zone 2 of the four-zone architecture), sensitive elements are replaced with structure-preserving placeholders by the Enhanced Encapsulation Layer. Differential-privacy-based protection (epsilon-DP, Laplace noise, k-anonymity, NER masking) reduces re-identification risk. Tables, cross-references, and document hierarchy survive intact."
- **Action button:** "See the four-zone architecture" -> `ds-btn ds-btn--secondary ds-btn--sm` -> href `/architecture` (external link = button, not inline link)
- **Tags:** `epsilon-DP`, `Laplace noise`, `NER masking`, `Structure preserved`
- **Screenshot:** placeholder with `data-replace="tour-step-03"`. Alt: "LLM Capsule encapsulation in progress". 16:10, ~960x600px. Dark theme.

#### Step 4: Process

- **Panel title:** "Any LLM. Path A or Path B."
- **Panel description:** "The capsule (only the capsule -- never the original) is routed through your approved external LLM (ChatGPT, Claude, Gemini, Perplexity) or to an on-prem local lightweight model for air-gapped workflows. Path is policy-driven per workflow."
- **Tags:** `Path A . External`, `Path B . On-prem`, `Policy-routed`
- **Screenshot:** placeholder with `data-replace="tour-step-04"`. Alt: "LLM Capsule routing screen". 16:10, ~960x600px.

#### Step 5: Restore

- **Panel title:** "AI output comes back business-ready"
- **Panel description:** "The AI's response is auto-restored locally -- token map lookup, original value substitution, context re-binding, output validation. Real names, real figures, real references appear in the original ticket. Token map never leaves the enterprise. End user sees a finished, production-ready output."
- **Tags:** `Local restore`, `Context re-binding`, `Output validation`, `Audit logged`
- **Screenshot:** placeholder with `data-replace="tour-step-05"`. Alt: "LLM Capsule restored output in originating workflow". 16:10, ~960x600px.

### Step Tabs JS

Include the standard `ds-step-tabs` JavaScript from design-system-core.md.

---

## Section 4: Performance Metrics

**Layout pattern:** [F] KPI band (top) + custom metric detail grid (bottom)
**Background:** white (section). KPI band component gets `ds-bg--grad-navy`.
**Section ID:** `section-4`

### Section Header

```
ds-section-header ds-section-header--underline
  eyebrow: "Performance"
  title: "The <span class="ds-text--brand">numbers</span> behind the demo"
  title brand keyword: "numbers" -> ds-text--brand
  description: "2,200-character document benchmark. Tested across finance, healthcare, legal, and public sector workflows."
```

### KPI Band

```
div.ds-kpi-band.ds-bg--grad-navy
  div.ds-kpi-band__item
    span.ds-kpi-band__number  -- "0.12s"
    span.ds-kpi-band__label   -- "Per-page processing latency"
  div.ds-kpi-band__item
    span.ds-kpi-band__number  -- "100%"
    span.ds-kpi-band__label   -- "Restoration rate"
  div.ds-kpi-band__item
    span.ds-kpi-band__number  -- "98%"
    span.ds-kpi-band__label   -- "Output similarity"
  div.ds-kpi-band__item
    span.ds-kpi-band__number  -- "99.14%"
    span.ds-kpi-band__label   -- "Workflow accuracy"
```

**KPI band bg rules:**
- `ds-bg--grad-navy` background image on component (not section)
- `::before` overlay `rgba(0,0,0,0.35)` (auto from DS)
- Numbers: white, `ds-kpi-band__number` class
- Labels: `rgba(255,255,255,0.85)`
- Mobile: `background-image: none` -> fallback to `var(--ds-gradient-brand)`

### Metric Detail Grid (below KPI band)

Layout: 2-column grid on desktop. Left = highlight card (dark). Right = 4 metric bullet items stacked.

```
div.ds-grid.ds-grid--2 (gap: var(--ds-space-xl), margin-top: var(--ds-space-2xl))
  div.ds-card.ds-card--dark (left -- big latency block)
    span.ds-data style="color: #fff"     -- "0.12s"
    p (color: #c8c4f7)                    -- "Per-page processing latency"
    hr.ds-card__divider (border-color: var(--c-bg-dark-2))
    p (color: #c8c4f7)                    -- "That's **120 milliseconds** from raw document to encapsulated capsule -- fast enough to plug into real-time NOC alerting, claims intake, and clinical workflows without breaking SLA. Most enterprise AI pilots stall on latency. We don't."
  div (right -- bullet metrics)
    [4 metric cards stacked vertically, gap var(--ds-space-sm)]
```

Each metric card (right column):
```
div.ds-card (white, border)
  grid: auto 1fr, gap var(--ds-space-md), align-items center
    span (number, font-size: var(--ds-text-3xl), font-weight: 800, color: var(--c-primary))
    div
      strong (title, block)
      span (description, color: var(--c-ink-soft))
```

| Number | Title | Description |
|--------|-------|-------------|
| 100% | Restoration rate | Every encapsulation has a reversible local mapping. No ambiguity, no manual reconstruction. |
| 98% | Output similarity | Compared to AI processing the original document. Restoration preserves business meaning. |
| 98.1% | Detection accuracy | Sensitive entity detection across structured and free-text fields, including custom markers. |
| 99.14% | Workflow accuracy | End-to-end correctness -- from raw input to restored output in production workflows. |

---

## Section 5: Workflow Gallery

**Layout pattern:** [H] Case study cards 2-col
**Background:** white
**Section ID:** `section-5`

### Section Header

```
ds-section-header ds-section-header--underline
  eyebrow: "Workflow Gallery"
  title: "Same product. Six industries. <span class="ds-text--brand">Real customers.</span>"
  title brand keyword: "Real customers." -> ds-text--brand
  description: "Each card below is a real workflow LLM Capsule runs in production. Click for the full case story."
```

### Card Grid

```
div.ds-card-grid.ds-card-grid--2col
  [4 case study cards]
```

#### Card 1: Telecom

```
div.ds-card.ds-card--case-study
  div.ds-card__left
    img.ds-card__left-image  -- src: placeholder, data-replace="gallery-telecom"
                                alt: "Telecom NOC workflow screenshot"
    span.ds-card__left-category -- "Telecom"
    span.ds-card__left-title    -- "NOC Incident Analysis"
  div.ds-card__right
    p.ds-card__description -- "NOC incident analysis on production traffic"
    ul.ds-bullet.ds-bullet--dot
      li: "RCA generation on live ticket data with device IDs, circuit IDs, site references, alarm sequences, SLA-impact references, and subscriber identifiers encapsulated locally."
      li: "No raw operational data exposure to external LLMs."
    div.ds-card__tags
      span.ds-card__tag -- "SK Telecom"
      span.ds-card__tag -- "Deutsche Telekom T Challenge 2026 -- Top 12"
```

**IMAGE_SPEC:** Screenshot mockup (PNG) of NOC workflow. ServiceNow-style NOC ticket. 16:10, ~640x400px.

Use illustration from graphics: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/graphic-telecom.png` as fallback left-image.

#### Card 2: Healthcare

```
div.ds-card.ds-card--case-study
  div.ds-card__left
    img.ds-card__left-image  -- alt: "Healthcare EHR workflow"
    span.ds-card__left-category -- "Healthcare"
    span.ds-card__left-title    -- "Radiology Report Drafting"
  div.ds-card__right
    p.ds-card__description -- "Radiology report drafting with PHI never leaving"
    ul.ds-bullet.ds-bullet--dot
      li: "AI drafts radiology summaries from real clinical workflows."
      li: "PHI encapsulated locally; restoration happens inside the hospital network."
      li: "HIPAA-aligned."
    div.ds-card__tags
      span.ds-card__tag -- "Ewha Womans University Medical Center (EUMC)"
```

Use: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/illustration-healthcare.png`

#### Card 3: Finance / Insurance

```
div.ds-card.ds-card--case-study
  div.ds-card__left
    img.ds-card__left-image  -- alt: "Finance claims workflow"
    span.ds-card__left-category -- "Finance / Insurance"
    span.ds-card__left-title    -- "AI Claims Processing"
  div.ds-card__right
    p.ds-card__description -- "AI claims processing with real customer data"
    ul.ds-bullet.ds-bullet--dot
      li: "AI-powered claim classification, damage assessment, and fraud detection on real policyholder data."
      li: "No customer data leaves the insurer's environment."
    div.ds-card__tags
      span.ds-card__tag -- "Kyobo"
      span.ds-card__tag -- "DB Insurance"
      span.ds-card__tag -- "IBK"
```

Use: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/illustration-finance.png`

#### Card 4: Public Sector / Defense

```
div.ds-card.ds-card--case-study
  div.ds-card__left
    img.ds-card__left-image  -- alt: "Defense mission brief workflow"
    span.ds-card__left-category -- "Public Sector / Defense"
    span.ds-card__left-title    -- "Mission Brief Drafting"
  div.ds-card__right
    p.ds-card__description -- "Mission brief drafting on classified workflows"
    ul.ds-bullet.ds-bullet--dot
      li: "AI drafts intelligence briefs and operational summaries on classified data."
      li: "On-prem local execution path -- zero external transmission."
      li: "Full audit trail under command control."
    div.ds-card__tags
      span.ds-card__tag -- "Ministry of National Defense (South Korea)"
```

Use: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/illustration-defense.png`

---

## Section 6: Admin Console Walkthrough

**Layout pattern:** [C] Product split (reverse -- visual left, text right)
**Background:** bg-image section. Use `ds-section--bg-img ds-bg--paint-lavender`.
**Section ID:** `section-6`

### Section Header

```
ds-section-header ds-section-header--underline
  eyebrow: "Operational Governance"
  title: "Admin console -- every event, every policy, <span class="ds-text--brand">every model</span>"
  title brand keyword: "every model" -> ds-text--brand
  description: "Enterprise AI governance is not a marketing claim. It's a console your audit team logs into."
```

### Product Split

```
div.ds-product-split.ds-product-split--reverse
  div.ds-product-split__visual
    div.ds-product-split__visual-screenshot
      img  -- placeholder, data-replace="admin-console"
             alt: "LLM Capsule admin console"
             (no SVG mock -- empty placeholder img)
  div.ds-product-split__content
    h3.ds-product-split__title -- "One pane. Five tabs. Full chain of custody."
    p.ds-product-split__lead   -- "Every encapsulation, processing, and restoration event lands here. Audit teams can replay any event end-to-end -- what was protected, which policy version was active, which model processed it, what was restored."
    ul.ds-bullet.ds-bullet--check
      li.ds-bullet__item
        span.ds-bullet__icon (empty)
        span -- "<strong>Audit</strong> -- every event with timestamps and policy version"
      li.ds-bullet__item
        span.ds-bullet__icon (empty)
        span -- "<strong>Policies</strong> -- version history, scope, and RBAC"
      li.ds-bullet__item
        span.ds-bullet__icon (empty)
        span -- "<strong>Tokens</strong> -- model usage, cost, and per-team breakdown"
      li.ds-bullet__item
        span.ds-bullet__icon (empty)
        span -- "<strong>Detection</strong> -- what was classified as sensitive, and how"
      li.ds-bullet__item
        span.ds-bullet__icon (empty)
        span -- "<strong>Models</strong> -- health, throughput, comparative output quality"
```

**IMAGE_SPEC:** Real product screenshot (PNG). LLM Capsule admin UI, Audit tab active. 8-12 event rows. 16:10, ~1100x700px. Dark theme.

### bg-image section rules
- `ds-section--bg-img` class on section
- `::before` overlay `rgba(255,255,255,0.45)` (auto from DS)
- All children: `position: relative; z-index: 1`
- Mobile: `background-image: none`

---

## Section 7: Capability 06 Deep Dive

**Layout pattern:** [G] Card grid 3-col with intro text
**Background:** white
**Section ID:** `section-7`

### Section Header

```
ds-section-header ds-section-header--underline
  eyebrow: "Capability 06 . Deep Dive"
  title: "You define what's sensitive -- and you can <span class="ds-text--brand">change it tomorrow.</span>"
  title brand keyword: "change it tomorrow." -> ds-text--brand
  description: "Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Standard PII categories don't move; your business does. LLM Capsule lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve -- with full audit trail of which marker was protected when."
```

### Card Grid

```
div.ds-card-grid.ds-card-grid--3col
  [3 cards]
```

#### Card 1: DEFINE

```
div.ds-card
  span.ds-card__badge.ds-card__badge--brand -- "DEFINE"
  h3.ds-card__title.ds-card__title--sm       -- "Beyond generic PII"
  p.ds-card__description                     -- "Project codes, deal terms, internal IDs, contract references, network identifiers, OT asset IDs, mission refs. Your team defines the markers -- not a vendor's fixed list."
```

#### Card 2: VERSION

```
div.ds-card
  span.ds-card__badge.ds-card__badge--brand -- "VERSION"
  h3.ds-card__title.ds-card__title--sm       -- "Time-shift the policy"
  p.ds-card__description                     -- "Add a new marker today, retire one next quarter. Policy versioning + immediate enforcement. Audit log records exactly which marker was active for every encapsulation event."
```

#### Card 3: SCOPE

```
div.ds-card
  span.ds-card__badge.ds-card__badge--brand -- "SCOPE"
  h3.ds-card__title.ds-card__title--sm       -- "Per workflow, team, data type"
  p.ds-card__description                     -- "NOC team, oncology unit, OT operations, M&A -- different policies, same governance. RBAC + scoped enforcement + per-policy audit. One LLM Capsule, many policies."
```

---

## Section 8: CTA

**Layout pattern:** [K] CTA band
**Background:** `var(--c-bg-dark)` (navy dark). No bg-image needed -- brand gradient fallback via `ds-cta-band:not([class*="ds-bg--"])` rule.
**Section ID:** `section-8`
**Position:** inside `</main>`, as `<section>` tag. Full-width, outside `ds-container`.

### Structure

```
section.ds-cta-band#section-8
  div.ds-cta-band__inner
    h2.ds-cta-band__title       -- "See it on your own documents."
    p.ds-cta-band__description  -- "Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes."
    div.ds-cta-band__actions
      a.ds-btn.ds-btn--md       -- "Request a Live Demo" -> href /request-a-demo
      a.ds-btn.ds-btn--md       -- "View Architecture" -> href /architecture
      a.ds-btn.ds-btn--md       -- "View Pricing" -> href /pricing
```

### Content (verbatim)

- **Title:** "See it on your own documents."
- **Title brand keyword:** none
- **Description:** "Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes."
- **CTA buttons:** 3 buttons (all use `.ds-cta-band__actions .ds-btn` style -- white/translucent on dark bg, auto from DS)
  1. "Request a Live Demo" -> `/request-a-demo`
  2. "View Architecture" -> `/architecture`
  3. "View Pricing" -> `/pricing`

### CTA band typo rules
- Title: `ds-cta-band__title` -- font-size 40px base, 36px mobile, 50px desktop
- Description: `ds-cta-band__description` -- 18px, `rgba(255,255,255,0.85)`
- Button text: white on dark bg (auto from DS)

---

## Content Integrity Checklist

All original content has been mapped:

| Original Section | Spec Section | Status |
|-----------------|-------------|--------|
| page-hero | Section 1 Hero | Mapped |
| demo-video | Section 1 (merged) | Mapped |
| Interactive Tour (5 steps) | Section 3 Step Tabs | Mapped |
| Metrics Narrative | Section 4 KPI + Detail | Mapped |
| Workflow Gallery (4 cards) | Section 5 Case Study | Mapped |
| Admin Console Walkthrough | Section 6 Product Split | Mapped |
| Capability 06 Deep Dive | Section 7 Card Grid 3-col | Mapped |
| CTA Strip | Section 8 CTA Band | Mapped |

**No content omitted. No content added.**

---

## Layout Monotony Check

| Section | Layout Type |
|---------|------------|
| 1 | Hero screenshot (centered text + frame) |
| 3 | Step tabs (tabbed 5fr/7fr panels) |
| 4 | KPI band (4-col horizontal) + 2-col grid (dark card + bullets) |
| 5 | Case study cards 2-col |
| 6 | Product split (2-col reverse, visual left) |
| 7 | Card grid 3-col |
| 8 | CTA band (centered) |

No `ds-grid--1` appears 3+ times consecutively. Layout variety is sufficient.

---

## Responsive Notes

- **Hero screenshot-frame:** full-width on mobile, `border-radius: var(--ds-radius-lg) var(--ds-radius-lg) 0 0`
- **Step tabs nav:** horizontal scroll on mobile, `overflow-x: auto` + scrollbar hidden
- **Step tabs panels:** stack to 1-col on mobile (below 1024px)
- **KPI band:** 2-col on tablet, 1-col on mobile
- **Case study cards:** 1-col on mobile (below 768px), `grid-template-columns: 1fr` (removes left/right split)
- **Product split:** 1-col on mobile (below 1024px)
- **Card grid 3-col:** 2-col on tablet, 1-col on mobile
- **CTA band buttons:** column layout on mobile, `max-width: 320px`

---

## JSON-LD (preserve from original)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "LLM Capsule 2-minute Demo",
  "description": "See LLM Capsule encapsulate a real enterprise document, route it through an LLM, and restore the output back into the originating workflow -- in two minutes.",
  "thumbnailUrl": "https://llmcapsule.ai/og-product-demo.png",
  "uploadDate": "2025-04-01",
  "publisher": { "@type": "Organization", "name": "CUBIG" }
}
```

---

## Meta Tags

```html
<title>LLM Capsule Product | Watch It Run on Real Enterprise Workflows</title>
<meta name="description" content="See LLM Capsule running on real enterprise workflows -- telecom NOC, hospital clinical, finance claims, defense mission. 2-minute demo, interactive product tour, real customer screenshots, admin console walkthrough. The context-preserving data layer for AI for regulated operations.">
<link rel="canonical" href="https://llmcapsule.ai/product">
```
