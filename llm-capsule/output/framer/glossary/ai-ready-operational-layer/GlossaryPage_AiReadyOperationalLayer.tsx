import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_AiReadyOperationalLayer
// Content component for /glossary/ai-ready-operational-layer
// Alias / synonym entry: routes readers to canonical /glossary/context-preserving-data-layer
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
<div class="garol-callout">
<strong>Note on terminology.</strong> "AI-ready operational layer" and "context-preserving data layer for AI" describe the same product category. The site's locked category as of v6.1 is <strong>context-preserving data layer for AI for regulated operations</strong>. Both terms are retained because they appear in earlier collateral, partner conversations, and external references; readers arriving via the older term land here and are routed to the canonical definition.
</div>

<h2>Definition (synonym)</h2>
<p>An <strong>context-preserving data layer for AI</strong> (historically called an <strong>AI-ready operational layer</strong>) is a runtime layer between the existing regulated enterprise environment (NOC, ticket, OT consoles, EHR, mission systems) and large language models. It turns operational data — network logs, incident records, configurations, clinical workflows, mission context — into AI-ready context using structure-preserving, differential-privacy-based encapsulation; executes the AI workflow inside the enterprise environment via two execution paths (external approved LLM with capsule data, or on-prem local lightweight model); and restores results back to the originating workflow via state vault. Distinct from PII guardrails and AI security suites in scope, layer, and execution model.</p>

<h2>Why two terms exist</h2>
<p>"AI-ready operational layer" was used in earlier strategy decks, partner pitches, and Deutsche Telekom T Challenge 2026 materials, with the emphasis on <em>operational data readiness</em>. "context-preserving data layer for AI for regulated operations" was adopted in v6.1 of the customer-facing site, with the emphasis on <em>context-preserving data layer for AI</em> at the data layer for the <em>regulated operations</em> buyer. The product is the same — the marketing language shifted to be more buyer-anchored.</p>

<h2>Canonical category page</h2>
<p>For the full v6.1 definition, customer proof, the four-zone architecture (Corporate Internal Network · DMZ — Demilitarized Zone · In-House Team · Local — Auto Reconstruction), and the six architectural pillars, see <a href="/glossary/context-preserving-data-layer">context-preserving data layer for AI</a> and the <a href="/architecture">Architecture</a> page.</p>

<h2>Related</h2>
<ul>
<li><a href="/glossary/context-preserving-data-layer">context-preserving data layer for AI</a> — canonical category page</li>
<li><a href="/glossary/operational-data">Operational data</a></li>
<li><a href="/glossary/two-execution-paths">Two execution paths</a></li>
<li><a href="/glossary/structure-preserving-encapsulation">Structure-preserving encapsulation</a></li>
<li><a href="/glossary/differential-privacy">Differential privacy</a></li>
<li><a href="/glossary/state-vault-for-restoration">State vault for restoration</a></li>
</ul>
`

export default function GlossaryPage_AiReadyOperationalLayer({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "AI-Ready Operational Layer",
  lead = "An earlier name for the same category. The current locked category is context-preserving data layer for AI for regulated operations. This page is retained as a synonym definition for readers arriving via earlier collateral.",
  category = "GLOSSARY · ALIAS / SYNONYM",
  definitionLabel = "Definition",
  definitionBody = "AI-ready operational layer is a synonym for context-preserving data layer for AI. The runtime layer between the regulated enterprise environment (NOC, ticket, OT consoles, EHR, mission systems) and large language models. Turns operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation; executes the AI workflow inside the enterprise environment via two execution paths; restores results back to the originating workflow via state vault. The current locked category for the LLM Capsule site is 'context-preserving data layer for AI for regulated operations'.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "context-preserving data layer for AI",
  related1Href = "/glossary/context-preserving-data-layer",
  related2Label = "Operational data",
  related2Href = "/glossary/operational-data",
  related3Label = "Two execution paths",
  related3Href = "/glossary/two-execution-paths",
  related4Label = "Structure-preserving encapsulation",
  related4Href = "/glossary/structure-preserving-encapsulation",
  related5Label = "Differential privacy",
  related5Href = "/glossary/differential-privacy",
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
    "alternateName": "Context-Preserving Data Layer for AI",
    "description": definitionBody,
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
    "url": "https://llmcapsule.ai/resources/glossary/ai-ready-operational-layer",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .garol-root {
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
        .garol-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .garol-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .garol-hero__back {
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
        .garol-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .garol-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .garol-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .garol-hero__lead a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .garol-hero__lead a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        .garol-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .garol-meta__chip {
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
        .garol-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .garol-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .garol-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .garol-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .garol-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .garol-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .garol-body {
          max-width: 760px;
        }

        /* Callout block */
        .garol-body .garol-callout {
          border-left: 4px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          padding: 16px 20px;
          margin: 0 0 28px;
          border-radius: var(--r-sm, 6px);
          font-size: 16px;
          line-height: 1.7;
          color: var(--c-ink, #0f1130);
        }

        .garol-body .garol-callout strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Headings inside body */
        .garol-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .garol-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .garol-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .garol-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .garol-body p:last-child { margin-bottom: 0; }

        .garol-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .garol-body p em {
          font-style: italic;
        }

        /* Lists */
        .garol-body ul,
        .garol-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .garol-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .garol-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .garol-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .garol-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .garol-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .garol-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .garol-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .garol-body pre::-webkit-scrollbar { display: none; }

        .garol-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Inline links inside body */
        .garol-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .garol-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .garol-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .garol-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .garol-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .garol-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .garol-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .garol-related__link {
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

        .garol-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .garol-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .garol-related__link:hover .garol-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .garol-hero { padding-top: 48px; }
          .garol-hero__title { font-size: 28px; }
          .garol-hero__lead { font-size: 16px; }
          .garol-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .garol-body p,
          .garol-body li { font-size: 16px; }
          .garol-body h2 { padding-top: 28px; }
          .garol-body .garol-callout { font-size: 15px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="garol-root">

        {/* ── 1. Hero ── */}
        <section className="garol-hero">
          <div className="garol-container">
            <a href={backHref} className="garol-hero__back">{backLabel}</a>
            <h1 className="garol-hero__title">{term}</h1>
            <p className="garol-hero__lead">{lead}</p>
            <div className="garol-hero__meta">
              <span className="garol-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="garol-def-wrap">
          <div className="garol-container">
            <div className="garol-def">
              <div className="garol-def__label">{definitionLabel}</div>
              <p className="garol-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="garol-body-wrap">
          <div className="garol-container">
            <article
              className="garol-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="garol-related">
            <div className="garol-container">
              <div className="garol-related__label">Related terms</div>
              <ul className="garol-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="garol-related__item">
                    <a href={item.href} className="garol-related__link">
                      <span>{item.label}</span>
                      <span className="garol-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_AiReadyOperationalLayer, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "AI-Ready Operational Layer" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "An earlier name for the same category. The current locked category is context-preserving data layer for AI for regulated operations. This page is retained as a synonym definition for readers arriving via earlier collateral.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY · ALIAS / SYNONYM" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "AI-ready operational layer is a synonym for context-preserving data layer for AI. The runtime layer between the regulated enterprise environment (NOC, ticket, OT consoles, EHR, mission systems) and large language models. Turns operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation; executes the AI workflow inside the enterprise environment via two execution paths; restores results back to the originating workflow via state vault. The current locked category for the LLM Capsule site is 'context-preserving data layer for AI for regulated operations'.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "context-preserving data layer for AI" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/context-preserving-data-layer" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Operational data" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/operational-data" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Two execution paths" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/two-execution-paths" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Structure-preserving encapsulation" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/structure-preserving-encapsulation" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "Differential privacy" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "/glossary/differential-privacy" },
})
