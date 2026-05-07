import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_TwoExecutionPaths
// Content component for /glossary/two-execution-paths
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
<h2>Definition</h2>
<p>The AI enablement data layer supports <strong>two execution paths</strong> for the model step inside the workflow:</p>
<ul>
  <li><strong>Path A — external approved LLM with capsule data only.</strong> The capsule is transmitted to an approved external endpoint (ChatGPT, Claude, Gemini, Perplexity, or any LLM API). Raw operational data does not leave the enterprise.</li>
  <li><strong>Path B — on-prem local lightweight model.</strong> A small private model runs entirely inside the enterprise environment. Zero external transmission.</li>
</ul>

<h2>When to use each</h2>
<table>
  <thead>
    <tr><th>Factor</th><th>Path A</th><th class="tep-th-highlight">Path B</th></tr>
  </thead>
  <tbody>
    <tr><td>External transmission allowed</td><td>Yes (capsule only)</td><td class="tep-td-highlight">No</td></tr>
    <tr><td>Air-gapped network</td><td>—</td><td class="tep-td-highlight">Required</td></tr>
    <tr><td>Frontier model capability</td><td>Yes</td><td class="tep-td-highlight">Bounded by local model</td></tr>
    <tr><td>Compliance posture</td><td>"No raw data exposure"</td><td class="tep-td-highlight">"Zero external exposure"</td></tr>
  </tbody>
</table>

<h2>Path selection</h2>
<p>Policy-driven per workflow. Different workflows in the same enterprise can use different paths. Governance records the path applied per request, per workflow, per policy.</p>

<h2>Why two and not one</h2>
<p>A single path forces a single regulatory floor. Carriers, hospitals, OT operators, and defense contractors typically run multiple regulatory profiles within the same organization. Two paths let governance match the path to the workflow.</p>

<h2>Reference statement</h2>
<blockquote><p>The model is not a single decision; it is two paths under a single governance. That is what makes the AI enablement data layer fit regulated organizations without forcing them to one regulatory floor.</p></blockquote>
`

export default function GlossaryPage_TwoExecutionPaths({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Two Execution Paths",
  lead = "External approved LLM — or on-prem local lightweight model. Policy decides per workflow.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "Two execution paths in the AI enablement data layer. Path A sends capsule data to an external approved LLM with no raw operational data exposure. Path B runs a small private lightweight model entirely inside the enterprise environment with zero external transmission. Selection is policy-driven per workflow.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "Pillar guide: On-prem LLM execution path",
  related1Href = "/resources/learn/on-prem-llm-execution-path",
  related2Label = "State vault for restoration",
  related2Href = "/resources/glossary/state-vault-for-restoration",
  related3Label = "AI enablement data layer",
  related3Href = "/resources/glossary/ai-ready-operational-layer",
  related4Label = "",
  related4Href = "",
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
    "description": definitionBody,
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
    "url": "https://llmcapsule.ai/resources/glossary/two-execution-paths",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .tep-root {
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
        .tep-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .tep-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tep-hero__back {
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
        .tep-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .tep-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .tep-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .tep-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .tep-meta__chip {
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
        .tep-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tep-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .tep-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .tep-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .tep-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .tep-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tep-body {
          max-width: 760px;
        }

        .tep-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .tep-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .tep-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .tep-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .tep-body p:last-child { margin-bottom: 0; }

        .tep-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .tep-body ul,
        .tep-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .tep-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .tep-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .tep-body li:last-child { margin-bottom: 0; }

        .tep-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .tep-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .tep-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .tep-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .tep-body pre::-webkit-scrollbar { display: none; }

        .tep-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .tep-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .tep-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── Table inside body ────────────────────────────── */
        .tep-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 28px;
          font-size: 15px;
          overflow-x: auto;
          display: block;
          scrollbar-width: none;
        }
        .tep-body table::-webkit-scrollbar { display: none; }

        .tep-body thead tr {
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .tep-body th {
          padding: 12px 16px;
          font-size: 13px;
          font-weight: 700;
          text-align: left;
          color: var(--c-ink, #0f1130);
          border-bottom: 2px solid var(--c-rule, #e5e7eb);
          white-space: nowrap;
        }

        .tep-body th.tep-th-highlight {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
        }

        .tep-body td {
          padding: 12px 16px;
          font-size: 15px;
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          vertical-align: top;
        }

        .tep-body td.tep-td-highlight {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-ink, #0f1130);
          font-weight: 600;
        }

        .tep-body tbody tr:last-child td {
          border-bottom: none;
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .tep-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .tep-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .tep-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tep-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .tep-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tep-related__link {
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

        .tep-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .tep-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .tep-related__link:hover .tep-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .tep-hero { padding-top: 48px; }
          .tep-hero__title { font-size: 28px; }
          .tep-hero__lead { font-size: 16px; }
          .tep-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .tep-body p,
          .tep-body li { font-size: 16px; }
          .tep-body h2 { padding-top: 28px; }
          .tep-body th,
          .tep-body td { padding: 10px 12px; font-size: 14px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="tep-root">

        {/* ── 1. Hero ── */}
        <section className="tep-hero">
          <div className="tep-container">
            <a href={backHref} className="tep-hero__back">{backLabel}</a>
            <h1 className="tep-hero__title">{term}</h1>
            <p className="tep-hero__lead">{lead}</p>
            <div className="tep-hero__meta">
              <span className="tep-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="tep-def-wrap">
          <div className="tep-container">
            <div className="tep-def">
              <div className="tep-def__label">{definitionLabel}</div>
              <p className="tep-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="tep-body-wrap">
          <div className="tep-container">
            <article
              className="tep-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="tep-related">
            <div className="tep-container">
              <div className="tep-related__label">Related terms</div>
              <ul className="tep-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="tep-related__item">
                    <a href={item.href} className="tep-related__link">
                      <span>{item.label}</span>
                      <span className="tep-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_TwoExecutionPaths, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Two Execution Paths" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "External approved LLM — or on-prem local lightweight model. Policy decides per workflow.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Two execution paths in the AI enablement data layer. Path A sends capsule data to an external approved LLM with no raw operational data exposure. Path B runs a small private lightweight model entirely inside the enterprise environment with zero external transmission. Selection is policy-driven per workflow.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "Pillar guide: On-prem LLM execution path" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/resources/learn/on-prem-llm-execution-path" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "State vault for restoration" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/resources/glossary/state-vault-for-restoration" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "AI enablement data layer" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/resources/glossary/ai-ready-operational-layer" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "" },
})
