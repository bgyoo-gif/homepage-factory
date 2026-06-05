# Proof -- Design Spec (B-type)

> brand: llm-capsule
> DS: design-system-core.md + design-system-capsule.md
> source: llm-capsule/input/llmcapsule_260506/proof_updated-fixed.html
> output: llm-capsule/output/html/proof-b-type.html

---

## Page Meta

- title: "Proof -- Operational evidence, certifications, patents & research | LLM Capsule"
- description: "The trust evidence behind LLM Capsule: operational case records, ISO and KISA certifications, registered patents, peer-reviewed research, awards, partnerships, and press."
- canonical: https://llmcapsule.ai/proof
- lang: en
- robots: index, follow
- og:type: website
- og:title: "Proof -- The evidence behind LLM Capsule"
- og:description: "Operational case records, certifications, patents, research, awards, partnerships, and press behind LLM Capsule."
- og:url: https://llmcapsule.ai/proof
- og:site_name: LLM Capsule
- twitter:card: summary_large_image
- JSON-LD: Preserve the entire `@graph` array from the A-type source verbatim (BreadcrumbList + WebPage + FAQPage). No modifications.

---

## Nav / Footer

- **Nav:** Use standard DS nav template (same as index-b-type.html). "Proof" link is active.
- **Footer:** Use standard DS footer template (same as index-b-type.html).
- **Internal links:** Framer relative paths (`/product`, `/architecture`, `/solutions`, `/pricing`, `/trust`, `/proof`, `/resources`, `/request-a-demo`). No `.html` extensions. No absolute URLs for internal pages.
- **External link:** AWS Marketplace `href="https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw"` with `target="_blank" rel="noopener"` -- render as `ds-btn ds-btn--secondary ds-btn--sm` (external = button rule).

---

## Section 1: Hero (Text-only)

**Pattern:** [A] ds-hero--text-only
**Background:** white (NO background image -- text-only hero rule)
**Section class:** `ds-section ds-section--hero`
**Section id:** `id="section-1"`

### Content

- **eyebrow:** NONE (eyebrow banned in B-type for cubig; however llm-capsule allows eyebrow per v6.2. But the A-type eyebrow here is "Trust Evidence" as a decorative pill tag -- NOT a standard eyebrow. Omit in B-type.)
- **title:** "Proof. <span class="ds-text--brand">The evidence behind the layer.</span>"
  - brand keyword: "The evidence behind the layer."
- **description:** "Operational case records. Security certifications. Patents. Research. Awards. Partnerships. The trust signals procurement, security, and audit teams need -- consolidated."
- **breadcrumb:** NONE (breadcrumbs are not a DS component; omit)
- **actions:** none

### Definition Box (Banner)

Below the hero description, add a `ds-banner ds-banner--brand` component for the "Secure AI usage" definition block:

- **content:** "<strong>Secure AI usage</strong> means sensitive data stays inside your environment: only a protected capsule is processed by the AI, and outputs are reconstructed locally into the originating workflow -- usable, privacy-safe, and verifiable."
- No border-left (DS rule: ds-banner left border banned). Uses `ds-banner--brand` with centered text.

### Hero Stats (KPI Band inline)

Below the banner, render the 3 hero stats as a `ds-kpi-band` component with 3 columns instead of the standard 4. The KPI band sits inside the hero section (not a standalone section).

**KPI Band class:** `ds-kpi-band` (3-column variant)
**Background:** Use brand gradient fallback (`.ds-kpi-band:not([class*="ds-bg--"])`)

| Number | Label |
|--------|-------|
| 0% | raw data egress to external AI (air-gapped case) |
| 0.94 | PII detection F1 in automated de-identification |
| Blocked -> Enabled | external LLM use on data that was previously off-limits |

**Implementation Notes:**
- 3rd KPI uses smaller text for "Blocked -> Enabled" (use `ds-kpi-band__number` with additional class `ds-kpi-band__number--sm` -- font-size: var(--ds-text-3xl) instead of var(--ds-text-6xl))
- KPI band max-width: 780px, centered within the hero container
- Grid: `grid-template-columns: repeat(3, minmax(0, 1fr))` on desktop; `1fr` on mobile
- KPI band color scheme: white text on gradient background (standard)
- Custom CSS needed for 3-col KPI: override `grid-template-columns` to `repeat(3, minmax(0, 1fr))` instead of default 4

### HTML Structure
```
section#section-1.ds-section.ds-section--hero
  div.ds-container
    div.ds-hero.ds-hero--text-only
      h1.ds-hero__title
      p.ds-hero__description
    div.ds-banner.ds-banner--brand  (definition box)
    div.ds-kpi-band (3 items, max-width: 780px, margin: var(--ds-space-2xl) auto 0)
```

---

## Section 2: Trust Strip

**Pattern:** Custom component (trust-strip) -- adaptation of partner pill groups
**Background:** white
**Section class:** `ds-section` (compact padding: `padding: var(--ds-space-xl) 0`)
**Section id:** `id="section-2"`
**Border:** `border-bottom: 1px solid var(--ds-color-border-default)` on the section

### Trust Strip Label (above the groups)
- **text:** "// Deployed across regulated industries -- finance . public sector . defense . healthcare . telecom"
- **style:** `font-family: var(--ds-font-code); font-size: var(--ds-text-xs); letter-spacing: var(--ds-tracking-wide); color: var(--ds-color-text-tertiary);`

### Trust Strip Content (4 groups in a responsive grid)

Grid: `display: grid; grid-template-columns: 1fr;` mobile -> `repeat(2, minmax(0, 1fr))` at 768px -> `repeat(4, minmax(0, 1fr))` at 1024px

| Group Title | Items |
|-------------|-------|
| CUSTOMERS | Woori Bank, KYOBO, Hana Bank, Samsung Securities, SK telecom, EUMC, Claroty |
| CERTIFICATIONS | ISO 27001, ISO 42001, GS Certified . Grade 1, KISA Fast Track |
| PARTNERS | AWS Marketplace, NVIDIA Inception, Naver Cloud |
| AWARDS & RECOGNITION | Minister of Science & ICT Prize, Emerging AI+X Top 100, T-Challenge 2026 |

**Group title style:** `font-family: var(--ds-font-code); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ds-color-brand-purple);`

**Pill style:** Use `ds-badge--neutral` variant: `font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium); color: var(--ds-color-text-secondary); padding: 5px 11px; border: 1px solid var(--ds-color-border-default); border-radius: var(--ds-radius-pill); background-color: var(--ds-color-surface-white);`

**Implementation Notes:**
- This is NOT a standard DS component. Define custom classes with `ds-` prefix: `.ds-trust-strip`, `.ds-trust-strip__label`, `.ds-trust-strip__grid`, `.ds-trust-strip__group`, `.ds-trust-strip__group-title`, `.ds-trust-strip__items`, `.ds-trust-strip__pill`
- All color values via CSS variables only
- No `--left` alignment on the strip label; left-align is appropriate here (it's not a section header)

---

## Section 3: Sticky TOC

**Pattern:** Custom component (sticky table of contents navigation)
**Background:** white with blur backdrop
**Position:** sticky, `top: 58px` (below nav), `z-index: 90`
**Border:** `border-bottom: 1px solid var(--ds-color-border-default)`

### TOC Links (8 items)

| Anchor | Label |
|--------|-------|
| #evidence | 01 . Operational Evidence |
| #certs | 02 . Certifications |
| #patents | 03 . Patents |
| #research | 04 . Research |
| #awards | 05 . Awards |
| #partners | 06 . Partnerships |
| #press | 07 . Press |
| #faq | 08 . FAQ |

**Style:**
- Container: `.ds-toc` -- `position: sticky; top: 58px; z-index: 90; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid var(--ds-color-border-default);`
- Inner: `.ds-toc__inner` -- `max-width: var(--ds-content-max-width); margin: 0 auto; padding: 0 var(--ds-container-padding-mobile); display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none;` + `::-webkit-scrollbar { display: none; }`
- Links: `.ds-toc__link` -- `flex-shrink: 0; font-family: var(--ds-font-code); font-size: 11px; letter-spacing: 0.04em; color: var(--ds-color-text-tertiary); padding: 13px 12px; border-bottom: 2px solid transparent; transition: color 0.2s; white-space: nowrap;`
- Active state: `.ds-toc__link--active` -- `color: var(--ds-color-brand-purple); border-bottom-color: var(--ds-color-brand-purple);`
- Hover: `.ds-toc__link:hover` -- `color: var(--ds-color-text-primary);`
- Responsive: container-padding updates at 768px (`var(--ds-container-padding-tablet)`) and 1440px (`var(--ds-container-padding-desktop)`)

### JavaScript (TOC active state)
```
Intersection Observer on each section[id] to highlight the corresponding TOC link.
On click: smooth scroll to anchor (html scroll-behavior: smooth handles this).
```

**Implementation Notes:**
- The TOC is placed OUTSIDE of `<main>` flow -- it's a sticky `<nav>` element between the trust-strip section and the main content sections
- `scroll-margin-top` on each target section: `calc(58px + 48px)` (nav height + TOC height)
- Mobile: horizontal scrollable with hidden scrollbar

---

## Section 4: Operational Evidence

**Pattern:** [S] ds-ac-card (Accordion list with filter)
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="evidence"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Operational case <span class="ds-text--brand">records</span>"
  - brand keyword: "records"
- **description:** "Real workflows that were blocked by data exposure, then unblocked with LLM Capsule. Each record shows what changed, the protection mechanism, and how it can be reproduced for audit. Filter by capability; click any record to expand."

### Filter Buttons

A row of filter pill buttons above the evidence cards.

| Button | data-filter | Dot Color | Default State |
|--------|-------------|-----------|---------------|
| All Evidence | all | gradient (primary -> teal -> amber) | active |
| Secure LLM Usage | secure | var(--ds-color-brand-purple) | -- |
| Data Usability | data | var(--ds-color-success) / teal | -- |
| Execution Stability | stable | var(--ds-color-warn) / amber | -- |

**Filter button style:** `.ds-filter` wrapper (flex, gap, flex-wrap). `.ds-filter__btn` -- pill button with border, dot indicator, font code style. Active state: background brand-purple, white text. Dot uses `ds-filter__dot` with inline `background-color` via CSS variable.

**Record count:** Below filter buttons, a mono-font label: "6 records . filtered: all" -- `.ds-filter__count` with `font-family: var(--ds-font-code); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary);`

### Evidence Accordion Cards (6 cards)

Each evidence card uses the `ds-ac-card` accordion component from DS Core with the following content structure inside `ds-ac-card__body`:

**Body sub-components (custom, ds-prefixed):**

1. **Metrics row** (`ds-ac-metrics`): horizontal flex of metric chips showing before/after status values
2. **Before/After/What Changed/Reproduce rows** (`ds-ac-rows`): 2-column grid (label | text) with color-coded labels
3. **Bullet list** (`ds-bullet ds-bullet--dot`): zone-style capability bullets
4. **Trust boundary callout** (`ds-ac-boundary`): dashed-border callout box
5. **Artifact tags** (`ds-ac-artifacts`): flex row of code-font tags

#### Card 1: Insurance -- Secure LLM Usage (default OPEN)

**Header:**
- industry: "Insurance" (dot color: var(--ds-color-brand-purple))
- title: "LLM-assisted claims processing -- sensitive data protection"
- data-tag: "secure"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Exposed | ds-ac-metric__val--warning | Sensitive data in prompts (before) |
| Substituted | ds-ac-metric__val--success | Sensitive fields (after) |
| Preserved | (default text-primary) | Output usability |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark / error | Claims documents containing **policyholder names, ID numbers, and medical details** were sent directly to an external LLM API. The compliance team blocked the workflow. |
| AFTER | teal-dark / success | LLM Capsule substituted sensitive fields with restorable stand-ins before submission. Outputs returned and were reconstructed locally for downstream system use. |
| WHAT CHANGED | brand-purple | The LLM Capsule layer was inserted into the workflow. Substitution covered names, IDs, dates, and medical field patterns. Sensitive raw values stayed in the local token vault. |
| REPRODUCE | amber-dark / warn | Each substitution run is logged and bound to a fixed release state, so the workflow is reproducible with the same substitution logic for audit and regression verification. |

**Bullets:**
- Detection -- **names, IDs, dates, medical field patterns**
- Substitution -- restorable stand-ins before submission
- Capsule transmission -- only the protected capsule reaches the LLM
- Restoration -- outputs reconstructed locally for downstream systems

**Trust boundary:** "Trust boundary -- raw policyholder & medical data never crosses" (coral/error border style)

**Artifacts:** State Card, Substitution Log, Token Vault Record, Re-run Record

---

#### Card 2: Public Sector / Defense -- Secure LLM Usage

**Header:**
- industry: "Public Sector / Defense" (dot color: var(--ds-color-error) / coral)
- title: "Air-gapped LLM workflow -- classified context protection"
- data-tag: "secure"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Blocked | ds-ac-metric__val--warning | External LLM (before) |
| Enabled | ds-ac-metric__val--success | External LLM (after) |
| 0% | (default text-primary) | Raw data egress |
| N2SF | (default text-primary) | Guideline aligned |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark | In a network-separated (air-gapped) environment, external LLMs could not be used at all, and concern over **classified-context exposure** blocked AI adoption entirely. |
| AFTER | teal-dark | LLM Capsule encapsulates the sensitive context locally -- only the protected capsule, not the original, is processed by the external LLM, and the result is rehydrated locally inside the boundary. The raw classified context never crosses the boundary, aligned with N2SF guidelines. |
| WHAT CHANGED | brand-purple | Sensitive context is substituted with local stand-ins before processing and reconstructed locally after -- no original data leaves the enclave. |
| REPRODUCE | amber-dark | Every encapsulation/restoration event is logged locally, so any processed request can be reconstructed and inspected within the boundary. |

**Bullets:**
- Sensitive context -- **classified operation detail**
- Encapsulation -- performed locally inside the enclave
- Execution -- capsule processed, 0% raw data egress
- Restoration -- rehydrated locally; N2SF guideline aligned

**Trust boundary:** "Trust boundary -- nothing crosses the air gap; raw context stays inside" (purple/brand border style -- `ds-ac-boundary--brand`)

**Artifacts:** Local Token Vault, Audit Log, N2SF Alignment

---

#### Card 3: Enterprise / Knowledge Work -- Secure LLM Usage

**Header:**
- industry: "Enterprise / Knowledge Work" (dot color: var(--ds-color-brand-purple))
- title: "Internal document Q&A -- PII-safe use of external LLMs"
- data-tag: "secure"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Blocked | ds-ac-metric__val--warning | LLM on internal docs (before) |
| Enabled | ds-ac-metric__val--success | Secure LLM use (after) |
| Local | (default text-primary) | PII detect & restore |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark | Internal documents -- contracts, HR records, customer files holding **personal and confidential information** -- could not be sent to ChatGPT, Claude, or Gemini for summarization or search. The security team blocked it. |
| AFTER | teal-dark | LLM Capsule detects and substitutes personal and confidential fields locally before the request reaches an external LLM, then restores the original values in the response -- so staff can summarize and query internal documents without raw data leaving the organization. |
| WHAT CHANGED | brand-purple | The LLM Capsule gateway was placed between internal tools and the external LLM. Detection covered names, contacts, IDs, and account/contract identifiers; raw values stayed in the local token vault. |
| REPRODUCE | amber-dark | Each request's substitution is logged and bound to a fixed release state, so a given document-Q&A run can be reconstructed for audit. |

**Bullets:**
- Detection -- **names, contacts, IDs, account/contract identifiers**
- Substitution -- restorable stand-ins before the request leaves
- Gateway -- only the protected request reaches ChatGPT / Claude / Gemini
- Restoration -- original values rehydrated locally in the response

**Trust boundary:** "Trust boundary -- raw internal documents never reach the external LLM vendor" (coral/error border style)

**Artifacts:** Substitution Log, Token Vault Record, Audit Log

---

#### Card 4: Healthcare -- Data Usability

**Header:**
- industry: "Healthcare" (dot color: var(--c-teal) -> use var(--ds-color-success) or define teal)
- title: "Clinical AI validation -- restricted patient data replacement"
- data-tag: "data"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Blocked | ds-ac-metric__val--warning | Validation status (before) |
| Unblocked | ds-ac-metric__val--success | Validation status (after) |
| DP-safe | (default text-primary) | Privacy method |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark | Real patient records required for model validation **could not be accessed** due to regulatory constraints. The validation pipeline stalled. |
| AFTER | teal-dark | Differential-privacy-safe (DP-safe) replacement records matching real distribution characteristics -- without containing real identifiable information -- unblocked the validation pipeline. |
| WHAT CHANGED | brand-purple | Non-accessible real records were replaced with DP-safe equivalents. Data distribution preserved, compliance review passed, validation pipeline resumed without modification. |
| REPRODUCE | amber-dark | The replacement dataset is versioned and bound to a fixed data state, so the validation run is reproducible with the same distribution on demand. Audit trail maintained throughout. |

**Bullets:**
- Restricted input -- **real patient records** (regulatory block)
- Replacement -- DP-safe, distribution-matched equivalents
- Privacy -- no real identifiable information in the dataset
- Outcome -- validation unblocked; compliance review passed

**Trust boundary:** "Trust boundary -- real patient identifiers never enter the pipeline" (coral/error border style)

**Artifacts:** State Card, DP Audit Log, Dataset Version

---

#### Card 5: Industrial / OT Security -- Data Usability

**Header:**
- industry: "Industrial / OT Security" (dot color: teal)
- title: "OT network data -- AI-ready transformation for threat analysis"
- data-tag: "data"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Restricted | ds-ac-metric__val--warning | Raw OT data (before) |
| Enabled | ds-ac-metric__val--success | AI threat analysis (after) |
| Structure-preserving | (default text-primary) | De-identification |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark | OT/ICS network data carried **sensitive operational details**, so it could not be sent to an external AI for automated threat analysis. |
| AFTER | teal-dark | Structure-preserving de-identification lets an AI agent analyze the network data and answer threat questions -- sensitive values replaced with stand-ins while relationships are preserved. (Integrated with a global OT security platform's detection solution.) |
| WHAT CHANGED | brand-purple | Network-data sensitive fields are substituted while topology and relationships are kept intact, so the agent can reason over realistic context. |
| REPRODUCE | amber-dark | The de-identified dataset and the agent's analysis are bound to a fixed data state, so the same analysis can be re-run and verified. |

**Bullets:**
- Restricted input -- **OT/ICS network data with operational detail**
- De-identification -- structure-preserving (topology kept intact)
- Analysis -- AI agent reasons over realistic, safe context
- Integration -- works with a global OT security detection platform

**Trust boundary:** "Trust boundary -- sensitive operational values never leave de-identified" (coral/error border style)

**Artifacts:** De-identified Dataset, Agent Analysis Log, Structure Map

---

#### Card 6: Public Sector / Data Center -- Execution Stability

**Header:**
- industry: "Public Sector / Data Center" (dot color: var(--ds-color-warn) / amber)
- title: "Aggregate-data release -- automated de-identification & audit trail"
- data-tag: "stable"

**Metrics:**

| Value | Color Class | Label |
|-------|-------------|-------|
| Manual | ds-ac-metric__val--warning | Release screening (before) |
| Automated | ds-ac-metric__val--success | Screening (after) |
| 0.94 | (default text-primary) | PII detection F1 |
| Multi-agent | (default text-primary) | Detect . trace . de-identify |

**Rows:**

| Label | Label Color | Text |
|-------|-------------|------|
| BEFORE | coral-dark | Users exporting sensitive aggregate statistics required **manual, per-desk de-identification** and release review -- inconsistent and hard to audit. |
| AFTER | teal-dark | A per-desk de-identification module plus a multi-agent pipeline detects, traces, and de-identifies personal information in aggregate data, automating and standardizing the release-review process. |
| WHAT CHANGED | brand-purple | Release State fingerprints the data before and after de-identification, so which records were transformed -- and how -- is traceable for audit. |
| REPRODUCE | amber-dark | A prior release can be replayed against its bound Release State, reproducing the screening process for regulatory inspection. |

**Bullets:**
- Before -- **manual, per-desk de-identification** (hard to audit)
- Detection -- multi-agent PII detection (F1 0.94)
- Pipeline -- detect, trace, de-identify, standardize
- Audit -- release state fingerprinted before & after

**Trust boundary:** "Trust boundary -- PII removed and traced before any release" (coral/error border style)

**Artifacts:** De-identification Report, Release Audit Log, Detection Trace, State Card

---

### Accordion Body Sub-Component CSS (Custom)

All custom classes use `ds-` prefix. Define in `<style>`:

```css
/* Row labels -- 2col grid */
.ds-ac-rows { margin-top: var(--ds-space-xs); }
.ds-ac-row {
  display: grid; grid-template-columns: 130px 1fr; gap: var(--ds-space-lg);
  align-items: start; border-top: 1px solid var(--ds-color-border-default);
  padding: var(--ds-space-sm) 0;
}
.ds-ac-row__label {
  font-family: var(--ds-font-code); font-size: 10.5px;
  letter-spacing: 0.1em; text-transform: uppercase;
}
.ds-ac-row__label--before { color: var(--ds-color-error); }
.ds-ac-row__label--after { color: #0b7f7e; }  /* teal-dark from capsule tokens */
.ds-ac-row__label--changed { color: var(--ds-color-brand-purple); }
.ds-ac-row__label--reproduce { color: #b7790c; } /* amber-dark from capsule tokens */
.ds-ac-row__text {
  font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed);
}
.ds-ac-row__text strong { color: var(--ds-color-text-primary); font-weight: var(--ds-weight-semibold); }

@media (max-width: 620px) { .ds-ac-row { grid-template-columns: 1fr; gap: var(--ds-space-2xs); } }
```

**IMPORTANT NOTE ON COLORS:** The row label colors above reference values from capsule brand tokens. The frontend-dev must map these to CSS variables defined in the capsule token system:
- coral-dark (#c73e3a) -> not in DS core. Use `var(--ds-color-error)` (#ff3030) as closest DS-safe substitute, OR define as `--ds-color-accent-coral-dark` in page-level `:root`. Preferred: use `var(--ds-color-error)` for "BEFORE" labels.
- teal-dark (#0b7f7e) -> use `var(--ds-color-success)` (#0e824c) as closest DS-safe substitute for "AFTER" labels.
- amber-dark (#b7790c) -> use `var(--ds-color-warn)` (#f59e0b) for "REPRODUCE" labels. Amber is allowed in llm-capsule brand for caution.
- brand-purple -> `var(--ds-color-brand-purple)` for "WHAT CHANGED" labels.

```css
/* Trust boundary callout */
.ds-ac-boundary {
  margin-top: var(--ds-space-lg); padding: var(--ds-space-sm) var(--ds-space-md);
  border: 1px dashed var(--ds-color-error); border-radius: var(--ds-radius-xs);
  font-family: var(--ds-font-code); font-size: 11px; line-height: 1.5;
  letter-spacing: 0.02em; color: var(--ds-color-error);
  background-color: rgba(255, 48, 48, 0.04);
}
.ds-ac-boundary--brand {
  border-color: var(--ds-color-brand-purple); color: var(--ds-color-brand-purple);
  background-color: rgba(91, 79, 233, 0.04);
}

/* Artifact tags */
.ds-ac-artifacts {
  display: flex; gap: 7px; flex-wrap: wrap; padding-top: var(--ds-space-md);
  border-top: 1px solid var(--ds-color-border-default); margin-top: var(--ds-space-2xs);
}
.ds-ac-artifact {
  font-family: var(--ds-font-code); font-size: 9.5px; letter-spacing: 0.06em;
  padding: var(--ds-space-2xs) var(--ds-space-xs);
  background-color: var(--ds-color-surface-mid); border: 1px solid var(--ds-color-border-default);
  border-radius: var(--ds-radius-xs); color: var(--ds-color-text-secondary);
}
```

### Filter JavaScript

```javascript
function setFilter(filter, btn) {
  document.querySelectorAll('.ds-filter__btn').forEach(function(b) {
    b.classList.remove('ds-filter__btn--active');
  });
  btn.classList.add('ds-filter__btn--active');
  var count = 0;
  document.querySelectorAll('.ds-ac-card[data-tag]').forEach(function(card) {
    var tag = card.getAttribute('data-tag');
    if (filter === 'all' || tag === filter) {
      card.style.display = '';
      count++;
    } else {
      card.style.display = 'none';
    }
  });
  var labels = { all: 'all', secure: 'Secure LLM Usage', data: 'Data Usability', stable: 'Execution Stability' };
  document.getElementById('ds-ev-count').textContent = count + ' records · filtered: ' + labels[filter];
}
```

---

## Section 5: Certifications

**Pattern:** [G] ds-card-grid--4col (custom: fits 4 cards in a row, 2 on tablet)
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="certs"`

### Section Header (skip -- see rule below)

Hero states the page-level title. But the TOC already anchors this as a distinct section, so the section header IS needed since the content is clearly distinct from Hero.

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Security and compliance <span class="ds-text--brand">standards</span>"
  - brand keyword: "standards"
- **description:** "Independently audited certifications behind LLM Capsule."

### Card Grid (4 cards, 2col tablet, 4col desktop)

Use `ds-card-grid ds-card-grid--4col` for the 4 certification items. However, since each card has substantial body text, use `ds-card-grid--2col` for better readability.

**Decision: `ds-card-grid--2col`** -- 4 cards across 2 columns gives each card enough room for the meta and body text.

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--brand: "CERTIFICATION" | ISO 27001 -- Information Security Management | International Standard . Certified by Korea Foundation for Quality (KFQ) | International standard for information security management. Demonstrates a systematic approach to protecting sensitive information. |
| ds-card__badge--brand: "CERTIFICATION" | ISO 42001 -- AI Management System | International Standard . Certified by Korea Foundation for Quality (KFQ) | International standard for AI management systems. Demonstrates responsible AI governance and risk management. |
| ds-card__badge--brand: "CERTIFICATION . GS GRADE 1" | GS Certification (Grade 1) -- LLM Capsule | Korean SW Quality Certification, Grade 1 . LLM Capsule 2024 . listed on the public Innovation Procurement Marketplace | Top-grade (Grade 1) Korean government software-quality certification, supporting public-sector procurement via the Innovation Marketplace. |
| ds-card__badge--gray: "GOVERNMENT TRACK" | KISA Fast Track (2024) | Korea Internet & Security Agency (KISA) . 2024 | Selected for the KISA information-security industry Fast Track program. |

**Card structure:** `ds-card` > `ds-card__badge` + `ds-card__title--sm` + `ds-card__subtitle` (for meta) + `ds-card__description`

---

## Section 6: Patents

**Pattern:** [G] ds-card-grid--3col
**Background:** background image (break 3-consecutive-white: sections 4, 5, 6 would all be white)
**Section class:** `ds-section ds-section--bg-img ds-bg--grad-violet`
**Section id:** `id="patents"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Patents and <span class="ds-text--brand">applications</span>"
  - brand keyword: "applications"
- **description:** "Registered patents and pending applications behind LLM Capsule -- the documented foundation for using AI without exposing private information."

### Card Grid (5 cards, 3col)

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--brand: "PATENT . KR REGISTERED . US PENDING" | AI-Based Service Providing Method Without Leaking Private Information and Client Apparatus | KR Reg. No. 10-2757651 (App. 10-2023-0133086, Registered 2025-01-16) . US App. No. 18/908,054 (Filed 2024-10-07) | Core LLM Capsule patent. Method and client apparatus for AI services without exposing private information -- registered in Korea, pending in the US. |
| ds-card__badge--gray: "PATENT . PENDING . KR + US" | Method for Providing Security for On-Device Artificial Intelligence Models | KR App. No. 10-2025-0003223 (Filed 2025-01-09) / 10-2026-0000037 (priority, Filed 2026-01-02) . US App. (Ref. PO25-025-US) | Security provisioning method for AI models running on-device -- supports the on-prem / air-gapped execution path. Korean priority applications with a corresponding US filing. |
| ds-card__badge--gray: "PATENT . PENDING . KR . EXPEDITED" | Data Management Method and System for AI Execution Control | KR App. No. 10-2026-0053050 . Filed 2026-03-24 . Expedited examination granted 2026-04-08 | Method and system for controlling and managing data state within AI execution environments. Expedited examination granted. |
| ds-card__badge--gray: "PATENT . PENDING . KR" | Method and Inference Apparatus for Building Deep Learning Models Robust to Private Information Exposure | KR App. No. 10-2023-0074745 . Filed 2023-06-12 | Deep-learning model construction robust to private-information exposure. Applicant: Ewha Womans University (co-research). |
| ds-card__badge--gray: "PATENT . PENDING . KR" | Method and Analysis Apparatus for Building AI Models that Process Heterogeneous Datasets | KR App. No. 10-2023-0013029 . Filed 2023-01-31 . Under examination | AI model construction method for heterogeneous datasets. Applicant: Ewha Womans University (co-research). |

**Implementation Notes:**
- Background image: `ds-bg--grad-violet` at section level with white translucent overlay (`ds-section--bg-img`)
- Background image absolute URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.webp`
- Mobile: `@media (max-width: 767px) { background-image: none; }`
- Cards have white background with border (opaque over bg-image)
- The 5th card in a 3col grid will create a 2-1 bottom row (intentional, looks fine)

---

## Section 7: Research

**Pattern:** [G] ds-card-grid--3col with grouped sub-sections + expandable details
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="research"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "The research behind the <span class="ds-text--brand">protection</span>"
  - brand keyword: "protection"
- **description:** "LLM Capsule draws on privacy and security research the founding team published in peer-reviewed venues -- on de-identification, membership-inference defense, and security in distributed machine learning. Each result below states what the work did, then how the same principle shows up in the data layer today."

### Sub-section A: "De-identification & sensitive-data protection"

**Sub-section title:** Use `ds-section-title-icon` [E] pattern
- icon: Lucide `eye-off` (privacy/de-identification)
- text: "De-identification & sensitive-data protection"

**Card Grid (3 cards, 3col):**

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--teal: "IEEE BIBM 2023" | Privacy-Preserving Publishing of Individual-Level Medical Data for Cloud Services | Ho Bae, Heonseok Ha, Siwon Kim . IEEE BIBM . Istanbul, Dec 2023 | Formalizes how individual-level medical records can be released to cloud services under strict privacy constraints while staying useful. It frames the exact problem LLM Capsule addresses: letting an organization use sensitive data with an external service without handing over the raw records. |
| ds-card__badge--teal: "IEEE/ACM TCBB 2022" | DNA Privacy: Analyzing Malicious DNA Sequences Using Deep Neural Networks | Ho Bae, Seonwoo Min, Hyun-Soo Choi, Sungroh Yoon . IEEE/ACM Transactions on Computational Biology and Bioinformatics . 2022 | A deep-learning approach to security and privacy on genomic sequences -- among the most tightly regulated data classes there is. It shows how far the founding team's privacy research reaches, well beyond the document and tabular data an AI data layer handles day to day. |
| ds-card__badge--teal: "PSB 2020" | AnomiGAN: Generative Adversarial Networks for Anonymizing Private Medical Data | Ho Bae, Dahuin Jung, Hyun-Soo Choi, Sungroh Yoon . Pacific Symposium on Biocomputing . 2020 | Anonymizes sensitive medical records with a GAN while preserving the statistical structure downstream models rely on. LLM Capsule works from the same structure-preserving principle: it de-identifies fields before they reach an external LLM and restores them afterward, so the data stays usable without being exposed. |

### Sub-section B: "Membership & inference-attack defense"

**Sub-section title:** Use `ds-section-title-icon` [E]
- icon: Lucide `shield-alert` (attack defense)
- text: "Membership & inference-attack defense"

**Card Grid (2 cards, 3col -- 2 cards in first row, 3rd slot empty):**

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--brand: "BMVC 2022" | MPGAN: Membership Privacy-Preserving GAN | Heonseok Ha, Uiwon Hwang, Jaehee Jang, Ho Bae, Sungroh Yoon . BMVC . London, Nov 2022 | Trains generative models that resist membership-inference attacks, so an adversary can't tell whether a given record was in the training data. The same concern drives how LLM Capsule keeps individual records from being re-identifiable in what a model returns. |
| ds-card__badge--brand: "ACM AsiaCCS 2022" | Membership Feature Disentanglement Network | Heonseok Ha, J. Jang, Y. Jeong, S. Yoon . ACM Asia Conference on Computer and Communications Security . 2022 | Disentangles membership-revealing features from model representations, lowering exposure to inference attacks. It is the kind of privacy guarantee enterprise buyers ask about before sensitive data ever touches a model. |

### Expandable: "Show more" (details/summary pattern)

Use a `<details>` element styled with DS classes:

- **summary (collapsed):** "Show 4 more publications -- distributed-learning security & foundations"
- **summary (expanded):** "Show fewer"
- Style summary as a pill button: `ds-btn ds-btn--secondary ds-btn--sm` look -- pill shape, code font, border, plus/cross icon

**Inside expanded body:**

#### Sub-section C: "Federated & distributed-learning security"

**Sub-section title:** Use `ds-section-title-icon` [E]
- icon: Lucide `network` (distributed learning)
- text: "Federated & distributed-learning security"

**Card Grid (3 cards, 3col):**

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--gray: "ESORICS 2024" | VFLIP: A Backdoor Defense for Vertical Federated Learning via Identification and Purification | Yungi Cho, Woorim Han, Miseon Yu, Younghan Lee, Ho Bae, Yunheung Paek . ESORICS . 2024 | The first backdoor defense built for vertical federated learning, where several parties train together without sharing their raw features. That constraint -- getting value from data across organizational boundaries without exposing it -- is the same one LLM Capsule resolves for external LLMs. |
| ds-card__badge--gray: "RAID 2023" | Exploring Clustered Federated Learning's Vulnerability against Property Inference Attack | Hyunjun Kim, Yungi Cho, Younghan Lee, Ho Bae, Yunheung Paek . RAID . 2023 | Shows how a model can leak collective properties of its training data through inference in clustered federated settings. It is the class of inference exposure LLM Capsule reduces at the source -- by de-identifying data on-premise before it ever reaches a model. |
| ds-card__badge--gray: "ESORICS 2023" | FLGuard: Byzantine-Robust Federated Learning via Ensemble of Contrastive Models | Younghan Lee, Yungi Cho, Woorim Han, Ho Bae, Yunheung Paek . ESORICS . 2023 | Keeps federated training reliable when some participants can't be trusted, detecting malicious clients under non-IID data. It is part of the founding team's broader work on security in distributed, multi-party machine learning -- the setting regulated enterprises actually operate in. |

#### Sub-section D: "Foundations & survey"

**Sub-section title:** Use `ds-section-title-icon` [E]
- icon: Lucide `atom` (foundations/research)
- text: "Foundations & survey"

**Card Grid (1 card, 3col -- single card):**

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--gray: "SURVEY . 2018" | Security and Privacy Issues in Deep Learning | Ho Bae, Jaehee Jang, Dahuin Jung, Hyemi Jang, Heonseok Ha, Sungroh Yoon . arXiv:1807.11655 . 2018 | A widely-cited survey mapping the attack surface of deep learning -- adversarial examples, model extraction, data poisoning, and more. It is the threat taxonomy that frames what an AI data layer has to defend against, written by the team years before the product existed. |

### Research Footer Note

Below the expandable section, add a footnote:
- **text:** "Selected publications by the CUBIG founding team and collaborators. Full publication list and citation counts available on request."
- **style:** `font-family: var(--ds-font-code); font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); margin-top: var(--ds-space-xl);`

---

## Section 8: Awards & Recognition

**Pattern:** [G] ds-card-grid--3col
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="awards"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Awards and <span class="ds-text--brand">recognition</span>"
  - brand keyword: "recognition"
- **description:** "Each entry lists the issuing body, date, and exactly what was recognized -- the verifiable basis behind the recognition, for buyers who need more than a logo."

### Card Grid (5 cards, 3col)

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--brand: "INDUSTRY AWARD" | Deutsche Telekom T-Challenge 2026 -- 2nd Place | T-Mobile / Deutsche Telekom . 2026 | Placed 2nd in the global open-innovation program with de-identification and local restoration technology. |
| ds-card__badge--brand: "GOVERNMENT AWARD" | Information Security Product Innovation Award -- Minister of Science and ICT Prize | Ministry of Science and ICT . 2024-11-26 | Grand Prize, Information & Physical Security category. |
| ds-card__badge--gray: "RECOGNITION" | 2026 Emerging AI+X Top 100 | Korea AI Industry Association . 2026 | Selected for the zero-access architecture and privacy technology. |
| ds-card__badge--gray: "STARTUP RECOGNITION" | NVIDIA Inception . SKT x Hana Bank AI Accelerator | 2024-2025 | NVIDIA Inception member and joint AI startup accelerator selection. |
| ds-card__badge--gray: "RECOGNITION" | Startup World Cup Finalist . NextRise Global Innovator | 2024 | Global startup competition finalist and innovator selection. |

---

## Section 9: Partnerships

**Pattern:** [G] ds-card-grid--3col
**Background:** background image (break potential 3-consecutive-white: sections 7, 8, 9)
**Section class:** `ds-section ds-section--bg-img ds-bg--paint-teal`
**Section id:** `id="partners"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Technology and ecosystem <span class="ds-text--brand">partners</span>"
  - brand keyword: "partners"
- **description:** "What each partnership concretely provides -- deployment channel, infrastructure, or validation -- not just a logo wall."

### Card Grid (3 cards, 3col)

| Badge | Title | Meta | Body |
|-------|-------|------|------|
| ds-card__badge--brand: "MARKETPLACE" | AWS Marketplace | LLM Capsule listed . procurement-ready | Available for direct purchase and private-offer deployment through AWS, simplifying enterprise procurement. |
| ds-card__badge--gray: "INFRASTRUCTURE" | NVIDIA Inception | Member program | Access to NVIDIA's technology and go-to-market resources supporting on-prem and accelerated deployment. |
| ds-card__badge--gray: "CLOUD" | NAVER Cloud | Deployment partner | Korean public/enterprise cloud deployment path, relevant for data-residency-constrained customers. |

**Implementation Notes:**
- Background image: `ds-bg--paint-teal` at section level with white translucent overlay (`ds-section--bg-img`)
- Background image absolute URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-white-teal.webp`
- Mobile: `@media (max-width: 767px) { background-image: none; }`
- Cards must have white background (opaque over bg-image)
- AWS Marketplace card: "AWS Marketplace" title should NOT be a link. Instead, add a button below the body text: `ds-btn ds-btn--secondary ds-btn--sm` with href to AWS listing (external link = button rule)

---

## Section 10: Press & Media

**Pattern:** [G] ds-card-grid--3col
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="press"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "In the <span class="ds-text--brand">press</span>"
  - brand keyword: "press"
- **description:** "Coverage and interviews relevant to LLM Capsule and the secure-AI approach."

### Card Grid (6 cards, 3col)

All press cards have external links. Each title is wrapped in an `<a>` with `target="_blank" rel="noopener"`. Since these are press article links (not external service links), inline title links are acceptable -- they do NOT fall under the "external service link = button" rule. However, each card should also include an "external-link" icon next to the title to signal external navigation.

| Badge | Title (linked) | Meta | Body |
|-------|---------------|------|------|
| ds-card__badge--brand: "PRESS COVERAGE" | CUBIG Validates LLM Capsule's Technical Efficacy Across Global Industrial Sites | Korea Economic Daily Business . April 22, 2026 | Coverage of LLM Capsule's Zero Exposure AI Gateway architecture being validated in production alongside global industrial cybersecurity firm Claroty, with original data never reaching external LLM vendors. |
| ds-card__badge--brand: "PRESS COVERAGE" | CUBIG Listed in Gartner Hyper-Synthetic Data Report -- Only Asian Vendor Named | Electronic Times (etnews) . July 30, 2025 | Gartner's "Emerging Tech: Trends for Hyper-Synthetic Data" (June 2025) named CUBIG as one of 26 global key vendors following a 4-month deep-dive interview process and analysis of 60+ real-world use cases. The only Asia-based company on the list. |
| ds-card__badge--brand: "PRESS COVERAGE" | LLM Capsule Emerges as Essential Tool for Safe Enterprise AI Adoption | Korea Economic Daily . April 1, 2025 | As enterprises and public institutions hesitate to deploy generative AI over data leakage concerns, LLM Capsule's real-time sensitive-data blocking for ChatGPT, Claude, and Gemini is gaining recognition as the go-to solution for compliant AI use. |
| ds-card__badge--gray: "INTERVIEW" | [VivaTech 2025] CUBIG -- "Designing the Future of AI Data Security" | NewsPim . June 4, 2025 | CEO Bae Ho interviewed at VivaTech 2025 in Paris, covering CUBIG's three core technologies -- DTS, LLM Capsule, and DataXpert -- and explaining why air-gapped deployment is driving rapid uptake in finance, healthcare, and defense. |
| ds-card__badge--brand: "PRESS COVERAGE" | LLM Capsule Selected for South Korea's Government Tech Pilot Purchase Program | TechWorld News . June 2, 2025 | The Ministry of SMEs and Startups selected LLM Capsule for its technology pilot procurement program, clearing rigorous evaluation on technical capability, market viability, and innovation -- opening a direct public-sector deployment path. |
| ds-card__badge--brand: "PRESS COVERAGE" | CUBIG to Unveil Next-Generation Synthetic Data Technology at World IT Show 2025 | AVING News . April 22, 2025 | CUBIG showcased LLM Capsule at WIS 2025 at COEX Seoul, highlighting standalone air-gapped operation, beta testing with global SaaS and healthcare companies, and planned cloud integration with AWS and Google Cloud. |

**Press card link URLs (preserve exactly):**
1. https://magazine.hankyung.com/business/article/202604228133b
2. https://www.etnews.com/20250730000110
3. https://www.hankyung.com/article/202504012381O
4. https://www.newspim.com/news/view/20250604000703
5. https://www.epnc.co.kr/news/articleView.html?idxno=317379
6. https://us.aving.net/news/articleView.html?idxno=52264

---

## Section 11: FAQ

**Pattern:** [P] ds-ac-card (FAQ accordion)
**Background:** white
**Section class:** `ds-section`
**Section id:** `id="faq"`

### Section Header

- **underline:** yes (`ds-section-header--underline`)
- **eyebrow:** NONE
- **title:** "Common <span class="ds-text--brand">questions</span>"
  - brand keyword: "questions"
- **description:** NONE (original has no description for FAQ)

### FAQ Accordion (6 items)

Use `ds-ac-list` with `ds-ac-card` items. First item is open by default (`ds-ac--open`).

| # | Question | Answer |
|---|----------|--------|
| 1 | What is operational evidence for an AI data layer? | Operational evidence is concrete, verifiable documentation that an AI system behaves as claimed in real production conditions -- what was blocked before, what changed after deployment, the deployment reference, and the certifications, patents, and peer-reviewed research that back it. It is the difference between a marketing claim and a record a procurement or audit team can verify. |
| 2 | How is LLM Capsule's protection independently validated? | Through third-party certifications (ISO/IEC 27001, ISO/IEC 42001, KISA Information Security Fast Track, GS Certification), registered patents covering privacy-preserving AI services and on-device AI security, peer-reviewed publications by the founding team, and deployment references across regulated industries. |
| 3 | Why do certifications and patents matter for AI data protection? | Certifications show an independent body has audited the security and AI-management practices; patents show the protection method is novel and documented; peer-reviewed research shows the underlying techniques withstand academic scrutiny. Together they let a buyer rely on more than the vendor's own word. |
| 4 | Does the external AI ever receive the original sensitive data? | No. Across every record on this page, only the encapsulated capsule context is shared with AI. Sensitive values stay inside the environment through structure-preserving, differential-privacy-based encapsulation, and outputs are restored locally into the originating workflow. |
| 5 | How can I independently verify the certifications, patents, and research listed here? | The certifications, patents, research papers, and press items on this page each cite a primary source you can check independently -- without taking our word for it. The certifications have issuing-body certificate numbers confirmable with the certifier; the patents list their official KIPO numbers, lookupable in the national registry or Google Patents; the papers cite venue and authors traceable through DBLP; and every press item links to its original article. |
| 6 | What counts as credible, verifiable proof that an AI tool protects sensitive data? | Credible proof is evidence a third party can verify without relying on the vendor's word -- not a testimonial or a marketing line. For an AI data layer that means several signals together: operational records of what was blocked and what changed, independent certifications, registered patents in a public registry, and peer-reviewed publications by the founding team. Any one alone is weak; together they let a buyer rely on more than a promise. |

**Implementation Notes:**
- FAQ section uses `ds-ac-list` (flex column, gap 2px)
- Each FAQ item: `ds-ac-card` with `ds-ac-card__header` (click to toggle) + `ds-ac-card__body`
- Answer text inside body: `font-size: var(--ds-text-md); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed);`
- No max-width constraint on FAQ wrap (ds-container full width per DS rule)
- Toggle JS: `toggleAcCard(header)` function from DS core

---

## Section 12: CTA Band

**Pattern:** [K] ds-cta-band
**Background:** brand gradient (capsule brand gradient fallback via `.ds-cta-band:not([class*="ds-bg--"])`)
**Placement:** full-width, outside ds-container, inside `<main>`
**Section tag:** `<section>` (NOT `<div>` -- DS rule)
**Section id:** `id="section-12"`

### Content

- **title:** "Want the evidence applied to your own workflow?"
  - brand keyword: none -- no `ds-text--brand` needed (the sentence is a question, no single keyword to emphasize)
- **description:** "Bring one workflow that's blocked today because of data exposure. We'll show what the proof looks like on your data, your systems, your constraints."
- **actions:**
  - Button 1: "Request a Demo" -> `ds-btn ds-btn--md` href="/request-a-demo" (white glass style, standard CTA band button)
  - Button 2: "See the Architecture" -> `ds-btn ds-btn--md` href="/architecture" (white glass style)

### Implementation Notes
- CTA band uses `.ds-cta-band:not([class*="ds-bg--"])` fallback gradient from capsule brand tokens
- Overlay `::before` with `rgba(0,0,0,0.15)` applied automatically
- All text: white/white-alpha
- CTA title typography: `font-size: var(--ds-text-5xl)` (40px default), `var(--ds-text-4xl)` (36px mobile), `var(--ds-text-6xl)` (50px desktop 1440+)
- Internal links: relative paths, no `.html` extensions

---

## Layout Flow Summary

| # | Section | Pattern | Background | Section id |
|---|---------|---------|------------|------------|
| 1 | Hero (text-only + banner + KPI) | [A] + [F] inline | white | section-1 |
| 2 | Trust Strip | Custom trust-strip | white | section-2 |
| -- | Sticky TOC | Custom sticky nav | white/blur | -- |
| 4 | Operational Evidence | [S] accordion + filter | white | evidence |
| 5 | Certifications | [G] card-grid 2col | white | certs |
| 6 | Patents | [G] card-grid 3col | bg-image (grad-violet) | patents |
| 7 | Research | [G] card-grid 3col + [E] icon titles + expandable | white | research |
| 8 | Awards | [G] card-grid 3col | white | awards |
| 9 | Partnerships | [G] card-grid 3col | bg-image (paint-teal) | partners |
| 10 | Press | [G] card-grid 3col | white | press |
| 11 | FAQ | [P] accordion | white | faq |
| 12 | CTA | [K] cta-band | brand gradient | section-12 |

### Background Image Inventory

| Section | Background Image | Absolute URL |
|---------|-----------------|--------------|
| 6 (Patents) | ds-bg--grad-violet | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.webp |
| 9 (Partnerships) | ds-bg--paint-teal | https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-white-teal.webp |
| 12 (CTA) | brand gradient (no bg image file) | -- |

No duplicate background images used.

### Monotony Check (3-consecutive-white rule)

- Sections 1 (white), 2 (white), TOC (white), 4 (white), 5 (white): 5 consecutive whites before section 6 breaks with bg-image. However, sections 1-2 are utility/hero sections, and the TOC provides visual separation. The first true "content section" sequence is 4 (white) -> 5 (white) -> 6 (bg-image): passes.
- Sections 7 (white), 8 (white), 9 (bg-image): passes.
- Sections 10 (white), 11 (white), 12 (gradient CTA): passes.

---

## Custom Components Required (Phase 5)

The following components are NOT in the current DS Core and need to be defined in the B-type HTML's `<style>` block:

1. **Trust Strip** (`.ds-trust-strip`, `.ds-trust-strip__*`): Grouped pill badges for customers/certs/partners/awards
2. **Sticky TOC** (`.ds-toc`, `.ds-toc__*`): Sticky horizontal nav with active state + Intersection Observer JS
3. **Accordion Evidence Sub-components** (`.ds-ac-rows`, `.ds-ac-row`, `.ds-ac-boundary`, `.ds-ac-artifacts`, `.ds-ac-artifact`, `.ds-filter`, `.ds-filter__btn`, `.ds-filter__dot`, `.ds-filter__count`): Structured content inside accordion body
4. **Research expandable** (`<details>/<summary>` styled as DS pill button)
5. **KPI band 3-col variant**: Override grid-template-columns for 3 items

All custom classes use `ds-` prefix and follow BEM naming. All colors via CSS variables only.

---

## Responsive Behavior Notes

### Mobile (375px)
- Hero title: `font-size: 24px`
- KPI band: 1 column, stacked
- Trust strip: 1 column
- TOC: horizontal scroll, hidden scrollbar
- Card grids: 1 column
- Accordion rows (BEFORE/AFTER): single column (no 2-col label layout)
- CTA title: 36px
- All background images: `background-image: none`
- Container padding: 16px

### Tablet (768px)
- Hero title: 28px
- KPI band: 3 columns
- Trust strip: 2 columns
- Card grids: 2 columns
- Container padding: 32px

### Small Desktop (1024px)
- Hero title: 32px
- Card grids: 3col grids become 3 columns
- Container padding: 32px

### Desktop (1440px)
- Hero title: 36px
- Max-width: 1280px (llm-capsule brand), centered
- Container padding: 120px
- CTA title: 50px
- Section header description max-width: 860px

---

## Interactive Behavior

### Accordion (Evidence cards + FAQ)
- Click header to toggle `ds-ac--open` class
- Body slides open/closed via `display: none/block`
- First evidence card and first FAQ item open by default
- Toggle icon: plus (+) rotates to minus (-) via CSS `::before`/`::after` opacity

### Filter (Evidence section)
- Click filter button to show/hide cards by `data-tag` attribute
- Active button gets `ds-filter__btn--active` class
- Count label updates dynamically
- "All" shows all 6 cards; others filter to matching tag

### TOC (Sticky navigation)
- Intersection Observer watches each section
- Active link gets `ds-toc__link--active` class
- Click scrolls to section anchor (smooth)
- Horizontal scroll on mobile with hidden scrollbar

### Research expandable
- `<details>` element toggles open/closed
- Summary icon: + rotates to x on open
- Text swaps between "Show 4 more..." and "Show fewer"

---

## Typography Rules Checklist

- [ ] All headings: `var(--ds-font-base)` (DM Sans / Inter for llm-capsule)
- [ ] "LLM Capsule" product name: `ds-text--product` only for standalone keyword mentions (llm-capsule uses Inter, not Oxanium -- but ds-text--product class still applies for semantic marking)
- [ ] Brand emphasis keywords: `ds-text--brand` (brand-purple color)
- [ ] No eyebrow in section headers
- [ ] Section headers: center-aligned (no --left)
- [ ] Description max-width: responsive (100% -> 720px -> 860px)
- [ ] Code/mono text: `var(--ds-font-code)` (JetBrains Mono)
- [ ] No letter-spacing hardcoding -- use `var(--ds-tracking-wide)` or `var(--ds-tracking-tight)`

## DS Compliance Checklist

- [ ] All colors via `var(--ds-*)` or `var(--c-*)` capsule tokens
- [ ] No `!important`
- [ ] No inline `style` (except CSS variable passthrough)
- [ ] `.ds-` prefix on all custom classes
- [ ] Responsive 4 breakpoints: 375 / 768 / 1024 / 1440
- [ ] Container padding: 16 / 32 / 32 / 120px
- [ ] Max-width: 1280px on desktop (llm-capsule brand)
- [ ] Hero padding-top: 100px
- [ ] No `ds-section--light` (white backgrounds only)
- [ ] Amber (#f59e0b) allowed for caution only (llm-capsule brand exception)
- [ ] No orange colors beyond amber
- [ ] No background shorthand -- background-color only
- [ ] No ds-banner left border
- [ ] CTA band inside `<section>` tag, inside `<main>`
- [ ] All image URLs: absolute GitHub Pages path (`https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/...`)
- [ ] Internal links: relative paths, no `.html` extensions
- [ ] External links: absolute URLs with `target="_blank" rel="noopener"`
- [ ] Grid: `repeat(N, minmax(0, 1fr))` not `repeat(N, 1fr)`
- [ ] overflow-x: auto elements have scrollbar hidden (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
- [ ] N2SF written as "N2SF" (no superscript)
- [ ] No colored border-top/border-left card decorations (AI cliche rule)
- [ ] JSON-LD preserved from A-type source
- [ ] Word-break: `body { word-break: keep-all; overflow-wrap: break-word; }`

---

## Content Integrity Notes

- ALL original text content is preserved verbatim. No summarization, no truncation.
- 6 evidence cards with full Before/After/What Changed/Reproduce rows
- 4 certification cards
- 5 patent cards
- 9 research papers (5 visible + 4 in expandable)
- 5 award cards
- 3 partnership cards
- 6 press cards with external links
- 6 FAQ items with full answers
- Hero stats: 3 KPI values
- Trust strip: 4 groups with all pills
- Definition box: full "Secure AI usage" text
