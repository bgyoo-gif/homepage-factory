import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_ShadowAi
// Content component for /glossary/shadow-ai
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
<h2>Why it emerges</h2>
<p>Shadow AI is a symptom, not a cause. The underlying pattern:</p>
<ol>
<li>An enterprise pilots AI on synthetic data. Employees see significant productivity gains.</li>
<li>The pilot stalls in security review because real production data cannot be sent to external LLMs.</li>
<li>The pilot is rescoped to an unusable subset. Productivity gains evaporate.</li>
<li>Employees who tasted the productivity find workarounds — copy/paste anonymized snippets into ChatGPT on personal devices, screenshot redacted documents, use unapproved AI plugins.</li>
<li>The enterprise now has the worst of both worlds: AI productivity outside governance, and no production AI inside governance.</li>
</ol>

<h2>The structural fix</h2>
<p>Shadow AI does not get solved by policy enforcement alone — that is treating the symptom. The structural fix is an <strong>context-preserving data layer for AI</strong> that lets official tooling handle real production data: encapsulate locally, process via approved external LLM (Path A) or on-prem local model (Path B), restore in-place. Once official tooling gives employees what they were tasting in pilots, shadow usage falls.</p>

<h2>Where it shows up</h2>
<ul>
<li><strong>Telecom NOC analysts</strong> pasting anonymized ticket excerpts into ChatGPT for RCA help.</li>
<li><strong>Hospital clinicians</strong> using AI tools on personal devices for documentation drafts.</li>
<li><strong>Insurance underwriters</strong> testing AI outputs on de-identified claim summaries.</li>
<li><strong>Legal associates</strong> summarizing redacted contracts with consumer AI tools.</li>
<li><strong>Engineers</strong> using consumer AI tools on internal docs that contain sensitive identifiers.</li>
</ul>

<h2>Related terms</h2>
<ul>
<li><a href="/glossary/blocked-ai-workflow">Blocked AI workflow</a></li>
<li><a href="/glossary/context-preserving-data-layer">context-preserving data layer for AI</a></li>
<li><a href="/learn/pilot-to-production-enterprise-ai">Learn: Why enterprise AI pilots stall</a></li>
</ul>
`

export default function GlossaryPage_ShadowAi({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Shadow AI",
  lead = "Employees using ChatGPT (or any external LLM) on personal devices or unapproved channels — because the official tooling can't handle the data the work depends on.",
  category = "Risk concept",
  definitionLabel = "Definition",
  definitionBody = "Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing context-preserving data layer for AI. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "Blocked AI workflow",
  related1Href = "/glossary/blocked-ai-workflow",
  related2Label = "context-preserving data layer for AI",
  related2Href = "/glossary/context-preserving-data-layer",
  related3Label = "Learn: Why enterprise AI pilots stall",
  related3Href = "/learn/pilot-to-production-enterprise-ai",
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

addPropertyControls(GlossaryPage_ShadowAi, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Shadow AI" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "Employees using ChatGPT (or any external LLM) on personal devices or unapproved channels — because the official tooling can't handle the data the work depends on.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "Risk concept" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing context-preserving data layer for AI. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "Blocked AI workflow" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/blocked-ai-workflow" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "context-preserving data layer for AI" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/context-preserving-data-layer" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Learn: Why enterprise AI pilots stall" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/learn/pilot-to-production-enterprise-ai" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "" },
})
