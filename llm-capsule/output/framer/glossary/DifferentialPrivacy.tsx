// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-glossary-tsx.py
// To regenerate: python3 scripts/build-glossary-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — GlossaryDetail logic inlined for Framer cross-folder compatibility.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  backLabel?: string
  backHref?: string
  term?: string
  lead?: string
  category?: string
  definitionLabel?: string
  definitionBody?: string
  bodyHtml?: string
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

const BODY_HTML = `<h2>Definition</h2>
<p><strong>Differential privacy (DP)</strong> is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The "almost" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.</p>

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

<h2>Related</h2>
<ul>
  <li><a href="/resources/learn/differential-privacy-for-enterprise-llm">Pillar guide: Differential privacy for enterprise AI</a></li>
  <li><a href="/resources/glossary/structure-preserving-encapsulation">Structure-preserving encapsulation</a></li>
  <li><a href="/resources/glossary/ai-ready-operational-layer">AI enablement data layer</a></li>
</ul>`

export default function DifferentialPrivacy({
  backLabel = "← Glossary",
  backHref = "/resources/glossary",
  term = "Differential Privacy",
  lead = "A mathematical framework that bounds the contribution of any single record to a derived output.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The \"almost\" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.",
  bodyHtml = BODY_HTML,
  related1Label = "",
  related1Href = "",
  related2Label = "",
  related2Href = "",
  related3Label = "",
  related3Href = "",
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

  // JSON-LD: DefinedTerm schema built from Props
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
        .gd-root {
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
        .gd-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .gd-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-hero__back {
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
        .gd-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gd-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gd-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gd-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gd-meta__chip {
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
        .gd-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gd-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gd-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gd-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gd-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-body {
          max-width: 760px;
        }

        /* Headings inside body */
        .gd-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gd-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gd-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .gd-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gd-body p:last-child { margin-bottom: 0; }

        .gd-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .gd-body ul,
        .gd-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gd-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gd-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gd-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .gd-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gd-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .gd-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .gd-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gd-body pre::-webkit-scrollbar { display: none; }

        .gd-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Inline links inside body */
        .gd-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gd-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gd-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gd-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gd-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gd-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__link {
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

        .gd-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gd-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gd-related__link:hover .gd-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .gd-hero { padding-top: 48px; }
          .gd-hero__title { font-size: 28px; }
          .gd-hero__lead { font-size: 16px; }
          .gd-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gd-body p,
          .gd-body li { font-size: 16px; }
          .gd-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gd-root">

        {/* ── 1. Hero ── */}
        <section className="gd-hero">
          <div className="gd-container">
            <a href={backHref} className="gd-hero__back">{backLabel}</a>
            <h1 className="gd-hero__title">{term}</h1>
            <p className="gd-hero__lead">{lead}</p>
            <div className="gd-hero__meta">
              <span className="gd-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gd-def-wrap">
          <div className="gd-container">
            <div className="gd-def">
              <div className="gd-def__label">{definitionLabel}</div>
              <p className="gd-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gd-body-wrap">
          <div className="gd-container">
            <article
              className="gd-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gd-related">
            <div className="gd-container">
              <div className="gd-related__label">Related terms</div>
              <ul className="gd-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gd-related__item">
                    <a href={item.href} className="gd-related__link">
                      <span>{item.label}</span>
                      <span className="gd-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(DifferentialPrivacy, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Glossary" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/glossary" },
  term: { type: ControlType.String, title: "Term", defaultValue: "Differential Privacy" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "A mathematical framework that bounds the contribution of any single record to a derived output.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "GLOSSARY" },
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody: { type: ControlType.String, title: "Definition Body", defaultValue: "Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The \"almost\" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href: { type: ControlType.String, title: "Related 5 URL", defaultValue: "" },
})
