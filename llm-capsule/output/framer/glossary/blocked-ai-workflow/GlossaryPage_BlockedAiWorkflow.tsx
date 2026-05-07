import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_BlockedAiWorkflow
// Content component for /glossary/blocked-ai-workflow
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
<h2>Why it matters as a buying frame</h2>
<p>Most enterprise AI conversations start with capability ("can the model do X?"). For regulated operations, the binding constraint is rarely capability — it is the inability to bring the relevant operational data into the model. That is the blocked AI workflow. Naming it cleanly turns the buying conversation toward the layer that actually unblocks it.</p>

<h2>Common patterns</h2>
<ul>
<li>NOC RCA workflows blocked because network logs cannot leave the regulated jurisdiction</li>
<li>OT vulnerability triage blocked because asset references and plant zones cannot reach an external endpoint</li>
<li>Clinical workflow assistance blocked because PHI plus operational pattern is not safely handled by PII filtering</li>
<li>Mission summary drafting blocked because air-gapped environments forbid any external transmission</li>
<li>Regulated finance review blocked because compliance posture forbids transmission of audit-trail content</li>
</ul>

<h2>From blocked workflow to operational AI</h2>
<p>The unblock pattern is consistent across industries:</p>
<ol>
<li>Identify the operational data category that is blocking the workflow.</li>
<li>Apply <a href="/resources/glossary/structure-preserving-encapsulation">structure-preserving encapsulation</a> with <a href="/resources/glossary/differential-privacy">differential-privacy-based protection</a>.</li>
<li>Route through one of <a href="/resources/glossary/two-execution-paths">two execution paths</a> per policy.</li>
<li>Restore via state vault back into the originating workflow.</li>
</ol>

<h2>Reference statement</h2>
<blockquote><p>Most enterprise AI projects do not fail at the model. They fail at the data the model cannot reach. Naming that as a blocked AI workflow — and unblocking it through an AI enablement data layer — is the entry point for regulated operations.</p></blockquote>
`

export default function GlossaryPage_BlockedAiWorkflow({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Blocked AI Workflow",
  lead = "The workflow exists. The data exists. The model exists. The integration is blocked because the data cannot leave.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "A blocked AI workflow is a business process that would benefit from AI but cannot be deployed because the operational data involved cannot be sent to an LLM under the regulatory or sovereignty profile of the workflow. The blocking is operational and regulatory, not capability.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "AI enablement data layer",
  related1Href = "/glossary/ai-enablement-data-layer",
  related2Label = "Structure-preserving encapsulation",
  related2Href = "/glossary/structure-preserving-encapsulation",
  related3Label = "Differential privacy",
  related3Href = "/glossary/differential-privacy",
  related4Label = "Two execution paths",
  related4Href = "/glossary/two-execution-paths",
  related5Label = "Operational data",
  related5Href = "/glossary/operational-data",
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
    "url": "https://llmcapsule.ai/resources/glossary/blocked-ai-workflow",
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gbaw-root {
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
        .gbaw-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .gbaw-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-hero__back {
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
        .gbaw-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gbaw-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gbaw-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gbaw-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gbaw-meta__chip {
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
        .gbaw-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gbaw-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gbaw-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gbaw-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gbaw-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-body {
          max-width: 760px;
        }

        .gbaw-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gbaw-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .gbaw-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gbaw-body p:last-child { margin-bottom: 0; }

        .gbaw-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gbaw-body ul,
        .gbaw-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gbaw-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gbaw-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gbaw-body li:last-child { margin-bottom: 0; }

        .gbaw-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gbaw-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .gbaw-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .gbaw-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gbaw-body pre::-webkit-scrollbar { display: none; }

        .gbaw-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .gbaw-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gbaw-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gbaw-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gbaw-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gbaw-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gbaw-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gbaw-related__link {
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

        .gbaw-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gbaw-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gbaw-related__link:hover .gbaw-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .gbaw-hero { padding-top: 48px; }
          .gbaw-hero__title { font-size: 28px; }
          .gbaw-hero__lead { font-size: 16px; }
          .gbaw-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gbaw-body p,
          .gbaw-body li { font-size: 16px; }
          .gbaw-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gbaw-root">

        {/* ── 1. Hero ── */}
        <section className="gbaw-hero">
          <div className="gbaw-container">
            <a href={backHref} className="gbaw-hero__back">{backLabel}</a>
            <h1 className="gbaw-hero__title">{term}</h1>
            <p className="gbaw-hero__lead">{lead}</p>
            <div className="gbaw-hero__meta">
              <span className="gbaw-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gbaw-def-wrap">
          <div className="gbaw-container">
            <div className="gbaw-def">
              <div className="gbaw-def__label">{definitionLabel}</div>
              <p className="gbaw-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gbaw-body-wrap">
          <div className="gbaw-container">
            <article
              className="gbaw-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gbaw-related">
            <div className="gbaw-container">
              <div className="gbaw-related__label">Related terms</div>
              <ul className="gbaw-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gbaw-related__item">
                    <a href={item.href} className="gbaw-related__link">
                      <span>{item.label}</span>
                      <span className="gbaw-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_BlockedAiWorkflow, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Blocked AI Workflow" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "The workflow exists. The data exists. The model exists. The integration is blocked because the data cannot leave.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "A blocked AI workflow is a business process that would benefit from AI but cannot be deployed because the operational data involved cannot be sent to an LLM under the regulatory or sovereignty profile of the workflow. The blocking is operational and regulatory, not capability.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "AI enablement data layer" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/ai-enablement-data-layer" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Structure-preserving encapsulation" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/structure-preserving-encapsulation" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Differential privacy" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/differential-privacy" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Two execution paths" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/two-execution-paths" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "Operational data" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "/glossary/operational-data" },
})
