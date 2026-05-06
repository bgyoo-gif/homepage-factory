# 02-product-spec.md — LLM Capsule Product Page

## Overview
- **Source:** `llm-capsule/input/llmcapsule_260506/02_product.html`
- **Output:** `llm-capsule/output/html/02-product-b-type.html`
- **Brand:** llm-capsule (v6.2)
- **Tokens:** `tokens.css` via absolute URL
- **Sections:** 8

---

## Global Rules
- All CSS colors: `var(--c-*, hex)` with fallback
- Font: Inter + JetBrains Mono (NOT DM Sans, NOT Oxanium)
- Container max-width: 1280px (`var(--container-max, 1280px)`)
- Section padding: `var(--s-section, clamp(64px, 8vw, 128px))`
- Buttons: solid ink, NOT gradient
- Eyebrow: allowed (12px uppercase primary)
- Radius: 6/10/16px
- NO colored border-top/border-left on cards
- NO box-shadow on cards (flat style)
- Internal links: Framer relative paths
- Responsive breakpoints: 768px, 1024px, 1280px

---

## Section 1: Hero (section-1)
**Layout:** Text-only hero (left-aligned, full-width)
**Background:** `linear-gradient(180deg, #fafbff 0%, #ffffff 100%)` + `border-bottom: 1px solid var(--c-rule)`
**Padding-top:** `clamp(80px, 10vw, 140px)`

| Element | Content | Style |
|---------|---------|-------|
| Eyebrow | "Product" | `.ds-eyebrow` 12px uppercase primary |
| h1 | Watch **LLM Capsule** run on a real enterprise workflow | h1 scale, `<strong>` in `--c-primary` |
| Description | Two minutes -- see a real document... | 19px, `--c-ink-soft`, max-width 760px |
| CTA 1 | Request a Live Demo | `.ds-btn--primary` -> `/request-a-demo` |
| CTA 2 | View Architecture | `.ds-btn--ghost` -> `/architecture` |
| Hero visual | Placeholder area below CTAs | 16:9 ratio, `--c-bg-soft` bg, `--r-lg` radius, `data-replace="hero-visual"` |

**Responsive:**
- 768px-: single column, full-width text
- 1024px+: max-width 920px for h1

---

## Section 2: Demo Video (section-2)
**Layout:** Centered video embed with caption bar
**Background:** white (`--c-bg`)

| Element | Content | Style |
|---------|---------|-------|
| Video container | `data-replace="demo-video"` | max-width 1100px, centered, `--r-lg` radius, border `--c-rule` |
| Player area | 16:9 aspect ratio | Dark gradient bg, play button (primary purple, 80px circle), label text |
| Meta line | "2:14 . LLM CAPSULE LIVE WALKTHROUGH" | mono font, 12px, `#9d95f5` |
| Caption bar | Grid: text + CTA button | border-top divider, 2-col on desktop, 1-col on mobile |
| Caption text | "What you'll see: A telecom NOC ticket..." | 14px, `--c-ink-soft`, `<strong>` in `--c-ink` |
| Caption CTA | Take the Interactive Tour | `.ds-btn--primary` -> `#tour` |

**Responsive:**
- 700px-: caption grid collapses to 1 column

---

## Section 3: Interactive Tour (section-3)
**Layout:** Section header (2-col intro) + 5 alternating tour step cards
**Background:** `--c-bg-soft`
**ID:** `tour`

### Section intro (2-col grid)
| Element | Content |
|---------|---------|
| Eyebrow | "Interactive product tour" |
| h2 | Five steps. One real document. Real output. |
| Description | The same capsule mechanism runs across telecom... |
| Right col | Visual placeholder `data-replace` |

### Tour Steps (5 cards, alternating text/visual)
Each step is a 2-col grid card (text : visual = 1 : 1.3), even steps reverse order.

| Step | Num label | Title | Chips |
|------|-----------|-------|-------|
| 01 | Step 01 -- Point at the source | Reads the document where it already lives | In-environment, No data egress, Existing sources |
| 02 | Step 02 -- Define policy | Pick the markers your business cares about | 11 starter markers, Custom regex, Policy versions, RBAC scope |
| 03 | Step 03 -- Encapsulate | Sensitive elements replaced. Structure preserved. | epsilon-DP, Laplace noise, NER masking, Structure preserved |
| 04 | Step 04 -- Process | Any LLM. Path A or Path B. | Path A . External, Path B . On-prem, Policy-routed |
| 05 | Step 05 -- Restore | AI output comes back business-ready | Local restore, Context re-binding, Output validation, Audit logged |

Each step has:
- `.tour-step__num`: mono 12px, primary-dark, uppercase
- `.tour-step__h`: 22px bold
- `.tour-step__d`: 14px ink-soft, full original text preserved
- `.tour-step__chips`: mono 11px, bg-soft bg, rule border, sm radius
- `.tour-step__visual`: bg-soft placeholder with `data-replace`
- Screenshot mock inside visual (preserving all mock content)

**Step 03 special:** Contains inline link to `/architecture` (preserved as underlined link).
**Step 03 visual:** Dark theme screenshot mock.

**Responsive:**
- 900px-: single column, text always first (order override for even steps)

---

## Section 4: Metrics Narrative (section-4)
**Layout:** 2-col grid (1fr : 1.4fr) -- big metric block + bullet metrics
**Background:** white

### Section header (centered)
| Element | Content |
|---------|---------|
| Eyebrow | "Performance -- measured on real enterprise documents" |
| h2 | The numbers behind the demo |
| Description | 2,200-character document benchmark... |

### Left column: Big metric block
- Dark bg (`--c-bg-dark`), `--r-lg` radius
- Number: "0.12s" -- 64px, weight 800, white
- Label: "Per-page processing latency" -- 14px, `#c8c4f7`
- Body text: Full paragraph preserved -- 13px, `#c8c4f7`, `<strong>` in white

### Right column: 4 metric bullets
Each bullet card: 2-col grid (number : text)

| Number | Title | Description |
|--------|-------|-------------|
| 100% | Restoration rate | Every encapsulation has a reversible local mapping... |
| 98% | Output similarity | Compared to AI processing the original document... |
| 98.1% | Detection accuracy | Sensitive entity detection across structured... |
| 99.14% | Workflow accuracy | End-to-end correctness... |

Card style: white bg, `--c-rule` border, `--r-md` radius, NO shadow
Number: 28px weight 800, `--c-primary`

**Responsive:**
- 900px-: single column, big block stacks above bullets

---

## Section 5: Workflow Gallery (section-5)
**Layout:** 2x2 card grid
**Background:** `--c-bg-soft`

### Section header
| Element | Content |
|---------|---------|
| Eyebrow | "Workflow gallery" |
| h2 | Same product. Six industries. Real customers. |
| Description | Each card below is a real workflow... |

### 4 Gallery cards

| Industry | Title | Customer | Visual theme |
|----------|-------|----------|--------------|
| Telecom | NOC incident analysis on production traffic | SK Telecom . Deutsche Telekom T Challenge 2026 -- Top 12 | Light |
| Healthcare | Radiology report drafting with PHI never leaving | Ewha Womans University Medical Center (EUMC) | Light |
| Finance / Insurance | AI claims processing with real customer data | Kyobo . DB Insurance . IBK | Light |
| Public Sector / Defense | Mission brief drafting on classified workflows | Ministry of National Defense (South Korea) | Dark |

Each card:
- Image area: 16:10, `--c-bg-soft`, screenshot mock with `data-replace`
- Body: industry label (mono 11px uppercase), title (17px bold), description (13px), customer line (12px, dashed border-top)
- NO box-shadow, border `--c-rule`, `--r-md` radius

**Responsive:**
- 800px-: single column

---

## Section 6: Admin Console (section-6)
**Layout:** 2-col grid (visual : text = 1:1)
**Background:** white

### Section header
| Element | Content |
|---------|---------|
| Eyebrow | "Operational governance" |
| h2 | Admin console -- every event, every policy, every model |
| Description | Enterprise AI governance is not a marketing claim... |

### Left: Console mock (dark theme)
- Dark bg (`--c-bg-dark`), `--r-lg` radius
- Tab bar: Audit (active), Policies, Tokens, Detection, Models
- 5 event rows with timestamps, workflow IDs, badges
- `data-replace="admin-console"`

### Right: Text content
- h3: "One pane. Five tabs. Full chain of custody."
- Description paragraph
- Checklist (5 items): Audit, Policies, Tokens, Detection, Models
- Check items use `::before` content checkmark in `--c-primary`

**Responsive:**
- 900px-: single column, visual stacks above text

---

## Section 7: Capability 06 Deep Dive (section-7)
**Layout:** Highlighted card (gradient bg, primary border)
**Background:** `--c-bg-soft` (section), card has `primary-soft` to `bg-soft` gradient

| Element | Content | Style |
|---------|---------|-------|
| Badge | "Capability 06 . Deep dive" | Pill badge, mono font, primary-dark border |
| h2 | You define what's sensitive -- **and you can change it tomorrow.** | `<strong>` in primary |
| Lead | Full paragraph preserved | 17px, ink-soft, max-width 800px |
| 3-col card grid | DEFINE / VERSION / SCOPE | White cards, rule border, `--r-md` |

Each sub-card:
- Label: mono 11px uppercase primary-dark
- Title: 16px bold
- Description: 13px ink-soft

**Responsive:**
- 900px-: single column for sub-cards

---

## Section 8: CTA Strip (section-8)
**Layout:** Dark full-width CTA band
**Background:** `--c-bg-dark` (#0f1130)

| Element | Content | Style |
|---------|---------|-------|
| h2 | See it on your own documents. | White, centered |
| Description | Bring your real workflow... | `#c8c4f7`, 17px, max-width 640px |
| CTA 1 | Request a Live Demo | `.ds-btn--invert` -> `/request-a-demo` |
| CTA 2 | View Architecture | `.ds-btn--invert-ghost` -> `/architecture` |
| CTA 3 | View Pricing | `.ds-btn--invert-ghost` -> `/pricing` |

**Responsive:**
- Buttons wrap on mobile

---

## Background Rhythm
1. Hero: gradient (#fafbff -> white)
2. Demo Video: white
3. Interactive Tour: `--c-bg-soft`
4. Metrics: white
5. Workflow Gallery: `--c-bg-soft`
6. Admin Console: white
7. Deep Dive: `--c-bg-soft`
8. CTA: `--c-bg-dark`

Alternation: gradient / white / soft / white / soft / white / soft / dark -- good rhythm, no 3 same backgrounds in a row.
