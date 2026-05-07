import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_DifferentialPrivacy
// Content component for /glossary/differential-privacy
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
<h2>Mechanism</h2>
<p>Implemented by adding calibrated noise (commonly Laplace or Gaussian) to outputs, queries, or transformations. Noise scale is determined by the sensitivity of the function and the privacy budget. The result is a quantitative bound on what an attacker could learn about any individual record from the output.</p>

<h2>Application in the AI enablement data layer</h2>
<p>In LLM Capsule, differential-privacy-based protection is applied during the structure-preserving encapsulation step. The capsule (AI-ready context) carries the differential-privacy guarantee on top of field-level tokenization. This addresses inference risks that field-level masking alone cannot bound — particularly for operational data where structure, sequence, and aggregate patterns themselves carry sensitive information.</p>

<h2>What it is not</h2>
<ul>
  <li>Not a legal or compliance guarantee. It is a technical framework with a tunable parameter.</li>
  <li>Not a yes/no guarantee. Privacy and utility trade off via the privacy budget.</li>
  <li>Not a substitute for governance, audit, or policy.</li>
</ul>

<h2>Why it matters here</h2>
<p>Operational data — network logs, configurations, OT manifests, clinical workflows — leaks through patterns, not just identifiers. Differential privacy is the framework that lets enterprise governance reason quantitatively about that leakage risk and enforce a budget per workflow.</p>

<h2>Acceptable claims</h2>
<ul>
  <li>"Privacy-preserving with a defined risk-reduction scope"</li>
  <li>"Bounded inference risk under the policy's privacy budget"</li>
  <li>"Differential-privacy-based encapsulation"</li>
</ul>

<h2>Claims to avoid</h2>
<ul>
  <li>"Mathematically impossible to reconstruct"</li>
  <li>"100% safe"</li>
  <li>"GDPR guaranteed"</li>
  <li>"Zero risk"</li>
</ul>
`

export default function GlossaryPage_DifferentialPrivacy({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Differential Privacy",
  lead = "A mathematical framework that bounds the contribution of any single record to a derived output.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The \"almost\" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "Pillar guide: Differential privacy for enterprise AI",
  related1Href = "/resources/learn/differential-privacy-for-enterprise-llm",
  related2Label = "Structure-preserving encapsulation",
  related2Href = "/glossary/structure-preserving-encapsulation",
  related3Label = "AI enablement data layer",
  related3Href = "/glossary/ai-ready-operational-layer",
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
    "description": "Differential privacy is a mathematical framework that bounds how much any single record can influence a derived output. In the AI enablement data layer, it is applied during encapsulation to reduce re-identification, inference, and sensitive context exposure risks. Calibrated against a privacy budget (epsilon). It is a technical protection layer with a defined risk-reduction scope, not a legal guarantee.",
    "url": "https://llmcapsule.ai/resources/glossary/differential-privacy",
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gdp-root {
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
        .gdp-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .gdp-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gdp-hero__back {
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
        .gdp-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gdp-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gdp-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gdp-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gdp-meta__chip {
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
        .gdp-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gdp-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gdp-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gdp-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gdp-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gdp-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gdp-body {
          max-width: 760px;
        }

        .gdp-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gdp-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gdp-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .gdp-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gdp-body p:last-child { margin-bottom: 0; }

        .gdp-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gdp-body ul,
        .gdp-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gdp-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gdp-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gdp-body li:last-child { margin-bottom: 0; }

        .gdp-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gdp-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .gdp-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .gdp-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gdp-body pre::-webkit-scrollbar { display: none; }

        .gdp-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .gdp-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gdp-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gdp-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gdp-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gdp-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gdp-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gdp-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gdp-related__link {
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

        .gdp-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gdp-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gdp-related__link:hover .gdp-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .gdp-hero { padding-top: 48px; }
          .gdp-hero__title { font-size: 28px; }
          .gdp-hero__lead { font-size: 16px; }
          .gdp-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gdp-body p,
          .gdp-body li { font-size: 16px; }
          .gdp-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gdp-root">

        {/* ── 1. Hero ── */}
        <section className="gdp-hero">
          <div className="gdp-container">
            <a href={backHref} className="gdp-hero__back">{backLabel}</a>
            <h1 className="gdp-hero__title">{term}</h1>
            <p className="gdp-hero__lead">{lead}</p>
            <div className="gdp-hero__meta">
              <span className="gdp-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gdp-def-wrap">
          <div className="gdp-container">
            <div className="gdp-def">
              <div className="gdp-def__label">{definitionLabel}</div>
              <p className="gdp-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gdp-body-wrap">
          <div className="gdp-container">
            <article
              className="gdp-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gdp-related">
            <div className="gdp-container">
              <div className="gdp-related__label">Related terms</div>
              <ul className="gdp-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gdp-related__item">
                    <a href={item.href} className="gdp-related__link">
                      <span>{item.label}</span>
                      <span className="gdp-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_DifferentialPrivacy, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Differential Privacy" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "A mathematical framework that bounds the contribution of any single record to a derived output.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The \"almost\" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "Pillar guide: Differential privacy for enterprise AI" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/resources/learn/differential-privacy-for-enterprise-llm" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Structure-preserving encapsulation" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/structure-preserving-encapsulation" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "AI enablement data layer" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/ai-ready-operational-layer" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "" },
})
