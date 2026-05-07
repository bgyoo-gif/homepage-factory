import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_StructurePreservingEncapsulation
// Content component for /glossary/structure-preserving-encapsulation
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
<h2>Why structure preservation matters</h2>
<p>An LLM asked to draft an RCA from an alarm sequence cannot reason if the sequence is destroyed. An LLM asked to compare two configuration trees cannot compare if the tree relationships are flattened. Structure preservation is what makes the capsule <em>useful</em> to the model, not just <em>safe</em>.</p>

<h2>What gets tokenized</h2>
<ul>
<li>Operational identifiers: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF</li>
<li>Customer references and segments</li>
<li>Free-text fields with mixed identifiers (NER masking)</li>
<li>Sensitive attribute values (under DP budget)</li>
</ul>

<h2>What gets preserved</h2>
<ul>
<li>Time order of events</li>
<li>Cause-effect relationships in incident sequences</li>
<li>Document structure (sections, lists, tables)</li>
<li>Configuration tree (parent-child, dependencies)</li>
<li>Topology graph (nodes, edges, paths)</li>
</ul>

<h2>Used together with</h2>
<ul>
<li><a href="/resources/glossary/differential-privacy">Differential privacy</a> — bounds inference risk on the capsule</li>
<li><a href="/resources/glossary/state-vault-for-restoration">State vault for restoration</a> — restores tokens to original values inside the enterprise</li>
<li><a href="/resources/glossary/two-execution-paths">Two execution paths</a> — Path A or Path B per workflow policy</li>
</ul>

<h2>Reference statement</h2>
<blockquote>Structure-preserving encapsulation makes the capsule useful. Differential-privacy-based protection makes it defensible. State vault makes it restorable. Together, they constitute the AI enablement data layer.</blockquote>
`

export default function GlossaryPage_StructurePreservingEncapsulation({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Structure-Preserving Encapsulation",
  lead = "Tokenize the identifiers. Preserve the structure. So the AI can still reason — and the result can still be restored.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "Structure-preserving encapsulation is the transformation step in an AI enablement data layer that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "Differential privacy",
  related1Href = "/glossary/differential-privacy",
  related2Label = "State vault for restoration",
  related2Href = "/glossary/state-vault-for-restoration",
  related3Label = "Two execution paths",
  related3Href = "/glossary/two-execution-paths",
  related4Label = "AI enablement data layer",
  related4Href = "/glossary/ai-enablement-data-layer",
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
    "url": "https://llmcapsule.ai/resources/glossary/structure-preserving-encapsulation",
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gspe-root {
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
        .gspe-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .gspe-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gspe-hero__back {
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
        .gspe-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gspe-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gspe-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gspe-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gspe-meta__chip {
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
        .gspe-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gspe-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gspe-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gspe-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gspe-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gspe-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gspe-body {
          max-width: 760px;
        }

        .gspe-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gspe-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gspe-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .gspe-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gspe-body p:last-child { margin-bottom: 0; }

        .gspe-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gspe-body ul,
        .gspe-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gspe-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gspe-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gspe-body li:last-child { margin-bottom: 0; }

        .gspe-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gspe-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .gspe-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .gspe-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gspe-body pre::-webkit-scrollbar { display: none; }

        .gspe-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .gspe-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gspe-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gspe-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gspe-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gspe-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gspe-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gspe-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gspe-related__link {
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

        .gspe-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gspe-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gspe-related__link:hover .gspe-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .gspe-hero { padding-top: 48px; }
          .gspe-hero__title { font-size: 28px; }
          .gspe-hero__lead { font-size: 16px; }
          .gspe-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gspe-body p,
          .gspe-body li { font-size: 16px; }
          .gspe-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gspe-root">

        {/* ── 1. Hero ── */}
        <section className="gspe-hero">
          <div className="gspe-container">
            <a href={backHref} className="gspe-hero__back">{backLabel}</a>
            <h1 className="gspe-hero__title">{term}</h1>
            <p className="gspe-hero__lead">{lead}</p>
            <div className="gspe-hero__meta">
              <span className="gspe-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gspe-def-wrap">
          <div className="gspe-container">
            <div className="gspe-def">
              <div className="gspe-def__label">{definitionLabel}</div>
              <p className="gspe-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gspe-body-wrap">
          <div className="gspe-container">
            <article
              className="gspe-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gspe-related">
            <div className="gspe-container">
              <div className="gspe-related__label">Related terms</div>
              <ul className="gspe-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gspe-related__item">
                    <a href={item.href} className="gspe-related__link">
                      <span>{item.label}</span>
                      <span className="gspe-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_StructurePreservingEncapsulation, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Structure-Preserving Encapsulation" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "Tokenize the identifiers. Preserve the structure. So the AI can still reason — and the result can still be restored.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Structure-preserving encapsulation is the transformation step in an AI enablement data layer that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "Differential privacy" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/differential-privacy" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "State vault for restoration" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/state-vault-for-restoration" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Two execution paths" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/two-execution-paths" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "AI enablement data layer" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/ai-enablement-data-layer" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "" },
})
