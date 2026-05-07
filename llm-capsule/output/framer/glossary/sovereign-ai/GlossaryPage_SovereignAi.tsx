import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_SovereignAi
// Content component for /glossary/sovereign-ai
// Uses GlossaryDetail layout: Hero → Definition → Article Body → Related Terms
// v6.2 rules: var(--c-*) tokens, @container queries, Inter font, no gradient buttons, no !important
// Props match GlossaryDetail CMS Collection schema

interface Props {
  // Hero
  backLabel?: string
  backHref?: string
  term?: string
  lead?: string
  category?: string

  // Definition block
  definitionLabel?: string
  definitionBody?: string

  // Body — rich HTML string rendered with dangerouslySetInnerHTML
  bodyHtml?: string

  // Related terms — simple link list (up to 5)
  related1Label?: string
  related1Href?: string
  related2Label?: string
  related2Href?: string
  related3Label?: string
  related3Href?: string
  related4Label?: string
  related4Href?: string
  related5Label?: string
  related5Href?: string
}

const DEFAULT_BODY_HTML = `
<h2>Why it matters now</h2>
<p>Regulator pressure has tightened: GDPR fines have crossed €4 billion cumulative, the EU AI Act entered into force August 2024, and national regulators (BaFin, ACPR, MAS, FSA, KISA) are increasingly explicit that financial and healthcare AI workflows must demonstrate data sovereignty. Defense and public sector workflows have always required it.</p>

<h2>What sovereign AI actually requires</h2>
<ul>
<li><strong>Data residency</strong> — sensitive data does not leave the defined geographic / regulatory boundary in raw form.</li>
<li><strong>Processing boundary</strong> — AI inference happens on infrastructure inside (or contractually equivalent to) the boundary.</li>
<li><strong>Audit chain of custody</strong> — every data event is recorded with policy, model, and outcome.</li>
<li><strong>Policy versioning</strong> — what counts as sensitive, and what's permitted to leave, must be explicitly versioned and auditable.</li>
</ul>

<h2>The two-path architecture</h2>
<p>The pragmatic implementation: an AI enablement data layer with two execution paths under one governance framework. Path A (in-region external LLM with capsule data only) for workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards. Path B (on-prem local lightweight model) for workflows where any external endpoint is unacceptable. Path is policy-driven per workflow.</p>

<h2>Common confusions</h2>
<ul>
<li><strong>Data residency ≠ sovereignty.</strong> An EU-hosted LLM endpoint is necessary but not sufficient. Raw data inside an EU-hosted LLM is still raw data.</li>
<li><strong>Sovereign AI ≠ no LLM.</strong> Avoiding LLMs entirely is not a sovereign AI strategy; it's an avoidance strategy. Sovereign AI architecture lets you use AI under sovereignty constraints.</li>
<li><strong>Sovereign AI ≠ binary.</strong> A single enterprise can support multiple paths. Some workflows external (with capsule), some on-prem.</li>
</ul>
`

export default function GlossaryPage_SovereignAi({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Sovereign AI",
  lead = "AI workflows that keep data, processing, and audit inside a defined regulatory and geographic boundary.",
  category = "Concept",
  definitionLabel = "Definition",
  definitionBody = "Sovereign AI means enterprise AI workflows where the underlying data, the AI processing path, and the audit trail all remain inside a defined regulatory and geographic boundary. For European enterprises this typically means GDPR-compliant data handling, in-region LLM endpoints, and full audit for regulator review. For defense and public sector workflows it typically means fully on-prem execution with no external transmission. The practical architecture pattern uses an AI enablement data layer with two execution paths.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "Two execution paths",
  related1Href = "/glossary/two-execution-paths",
  related2Label = "AI enablement data layer",
  related2Href = "/glossary/ai-enablement-data-layer",
  related3Label = "Differential privacy",
  related3Href = "/glossary/differential-privacy",
  related4Label = "Learn: Sovereign AI for European enterprises",
  related4Href = "/learn/sovereign-ai-european-enterprises",
  related5Label = "",
  related5Href = "",
}: Props) {
  const relatedItems = [
    { label: related1Label, href: related1Href },
    { label: related2Label, href: related2Href },
    { label: related3Label, href: related3Href },
    { label: related4Label, href: related4Href },
    { label: related5Label, href: related5Href },
  ].filter((r) => r.label && r.href)

  // JSON-LD: DefinedTerm schema
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term,
    "description": "Enterprise AI workflows where data, processing, and audit remain inside a defined regulatory and geographic boundary.",
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gsa-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .gsa-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .gsa-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gsa-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .gsa-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gsa-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gsa-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gsa-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gsa-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── 2. Definition block ──────────────────────────── */
        .gsa-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gsa-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gsa-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gsa-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gsa-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gsa-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gsa-body {
          max-width: 760px;
        }

        .gsa-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gsa-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gsa-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .gsa-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gsa-body p:last-child { margin-bottom: 0; }

        .gsa-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gsa-body ul,
        .gsa-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gsa-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gsa-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gsa-body li:last-child { margin-bottom: 0; }

        .gsa-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gsa-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .gsa-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .gsa-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gsa-body pre::-webkit-scrollbar { display: none; }

        .gsa-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .gsa-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gsa-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gsa-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gsa-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gsa-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gsa-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gsa-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gsa-related__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 4px;
          font-size: 15px;
          font-weight: 500;
          color: var(--c-ink, #0f1130);
          text-decoration: none;
          transition: color 0.15s;
        }

        .gsa-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gsa-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gsa-related__link:hover .gsa-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .gsa-hero { padding-top: 48px; }
          .gsa-hero__title { font-size: 28px; }
          .gsa-hero__lead { font-size: 16px; }
          .gsa-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gsa-body p,
          .gsa-body li { font-size: 16px; }
          .gsa-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gsa-root">

        {/* ── 1. Hero ── */}
        <section className="gsa-hero">
          <div className="gsa-container">
            <a href={backHref} className="gsa-hero__back">{backLabel}</a>
            <h1 className="gsa-hero__title">{term}</h1>
            <p className="gsa-hero__lead">{lead}</p>
            <div className="gsa-hero__meta">
              <span className="gsa-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gsa-def-wrap">
          <div className="gsa-container">
            <div className="gsa-def">
              <div className="gsa-def__label">{definitionLabel}</div>
              <p className="gsa-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gsa-body-wrap">
          <div className="gsa-container">
            <article
              className="gsa-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gsa-related">
            <div className="gsa-container">
              <div className="gsa-related__label">Related terms</div>
              <ul className="gsa-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gsa-related__item">
                    <a href={item.href} className="gsa-related__link">
                      <span>{item.label}</span>
                      <span className="gsa-related__link-arrow" aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(GlossaryPage_SovereignAi, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Sovereign AI" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "AI workflows that keep data, processing, and audit inside a defined regulatory and geographic boundary.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "Concept" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Sovereign AI means enterprise AI workflows where the underlying data, the AI processing path, and the audit trail all remain inside a defined regulatory and geographic boundary. For European enterprises this typically means GDPR-compliant data handling, in-region LLM endpoints, and full audit for regulator review. For defense and public sector workflows it typically means fully on-prem execution with no external transmission. The practical architecture pattern uses an AI enablement data layer with two execution paths.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "Two execution paths" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/two-execution-paths" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "AI enablement data layer" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/ai-enablement-data-layer" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Differential privacy" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/differential-privacy" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Learn: Sovereign AI for European enterprises" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/learn/sovereign-ai-european-enterprises" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "" },
})
