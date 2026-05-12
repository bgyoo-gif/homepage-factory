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

const BODY_HTML = `<h2>What it does (in three lines)</h2>
<p>1. <strong>Reads</strong> operational data from existing enterprise systems via REST/gRPC/JDBC connectors.<br>
2. <strong>Encapsulates</strong> sensitive elements locally with structure-preserving + DP-based protection.<br>
3. <strong>Restores</strong> AI outputs back into the originating workflow inside the enterprise environment.</p>

<h2>What it is NOT</h2>
<ul>
<li><strong>Not a PII guardrail</strong>. PII guardrails detect individual identifiers at the API boundary. The data layer transforms structured operational data — ticket sequences, network configs, OT manifests, clinical workflows.</li>
<li><strong>Not an AI / LLM security gateway</strong>. Security gateways focus on prompt injection, runtime threats, and API-level filtering. The data layer operates one layer deeper, on the data itself.</li>
<li><strong>Not a synthetic data platform</strong>. Synthetic data generates artificial records for training and testing. The data layer runs on real production documents in live workflows.</li>
<li><strong>Not a CISO / SOC tool</strong>. The buyer is the AI team, the CDO/CAIO, or the business unit that needs AI in production. Security is necessary infrastructure, not the product purpose.</li>
</ul>

<h2>The five components</h2>
<ol>
<li><strong>Encapsulation Engine</strong> — local detection + replacement, mapping stays inside.</li>
<li><strong>Policy Control</strong> — versioned, scoped, RBAC'd policy.</li>
<li><strong>Capsule Transmission</strong> — only protected capsules cross the trust boundary.</li>
<li><strong>Restoration Engine</strong> — local token vault, output validation, context re-binding.</li>
<li><strong>Audit &amp; Compliance</strong> — every event logged for GDPR/HIPAA/SOX governance.</li>
</ol>

<h2>The four-zone architecture (diagram_v8 reference)</h2>
<p>The architecture maps to four zones: <strong>Corporate Internal Network</strong> (where existing source systems — ERP / CRM / Ticketing / DMS — live, read in place via REST / gRPC / JDBC / Graph API) → <strong>DMZ — Demilitarized Zone</strong> (where the Enhanced Encapsulation Layer applies structure-preserving, differential-privacy-based protection) → <strong>In-House Team</strong> (where governance, policy, and routing decide Path A or Path B) → <strong>Local — Auto Reconstruction</strong> (where the AI response is restored to original values inside the organization, delivering Business-Ready output back to the originating workflow). Raw operational data never crosses the trust boundary; only the protected capsule does.</p>

<h2>Six architectural pillars</h2>
<ol>
  <li><strong>Beyond simple PII guardrails</strong> — free-text fields like CS ticket Details columns can't be safely processed by simple PII guardrails alone</li>
  <li><strong>No modification of existing systems</strong> — connection is a single API-call addition (REST / gRPC), legacy systems are not refactored</li>
  <li><strong>Beyond simple encapsulation — differential privacy</strong> — DP applied on top of tokenization to reduce re-identification risk</li>
  <li><strong>No raw exposure to external AI</strong> — only the capsule crosses the trust boundary; DP processing means a leak doesn't yield reconstructable original values</li>
  <li><strong>In-environment auto-restoration</strong> — restoration happens only inside the organization; data that left the boundary cannot be reconstructed externally</li>
  <li><strong>Governance, policy &amp; domain context retained</strong> — organizational policy drives encapsulation, routing, and audit end-to-end</li>
</ol>

<h2>The two execution paths</h2>
<ul>
<li><strong>Path A</strong> — external approved LLM (ChatGPT, Claude, Gemini, in-region EU LLMs) with capsule data only. No raw operational data exposure.</li>
<li><strong>Path B</strong> — on-prem local lightweight model. Zero external transmission. For air-gapped, classified, OT, and strictly regulated workflows.</li>
</ul>

<h2>When to use it</h2>
<p>Whenever a regulated enterprise wants to use AI on real production data — not synthetic, not anonymized snippets — without exposing the raw data to external LLMs and without rebuilding the existing legacy systems. Telecom NOC, hospital clinical workflows, finance claims, defense mission, OT operations, legal matter management.</p>

<h2>Validated deployments</h2>
<p>SK Telecom (telecom NOC), Deutsche Telekom T Challenge 2026 Top 12 in Data Security &amp; Governance, Claroty (industrial cybersecurity), EUMC (hospital clinical), Kyobo / DB Insurance / IBK (finance), Shin&amp;Kim (legal), Ministry of National Defense Korea (mission workflows). Recognized as Gartner Vendor.</p>`

export default function AiEnablementDataLayer({
  backLabel = "← Glossary",
  backHref = "/resources/glossary",
  term = "AI enablement data layer",
  lead = "The architectural component that makes regulated enterprise AI workflows actually work — between operational systems and large language models.",
  category = "P0 · Category definition",
  definitionLabel = "Definition",
  definitionBody = "An AI enablement data layer is the architectural component that sits between regulated enterprise systems (NOC consoles, EHR, claim platforms, mission systems, legacy DBs) and large language models. It turns operational data into AI-ready capsules using structure-preserving, differential-privacy-based encapsulation, executes AI workflows on the protected capsule, and restores outputs back into the originating system. It supports two execution paths — external approved LLM with capsule data only, or on-prem local lightweight model — under a single governance framework.",
  bodyHtml = BODY_HTML,
  related1Label = "AI-ready operational layer",
  related1Href = "/glossary/ai-ready-operational-layer",
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

addPropertyControls(AiEnablementDataLayer, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Glossary" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/glossary" },
  term: { type: ControlType.String, title: "Term", defaultValue: "AI enablement data layer" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "The architectural component that makes regulated enterprise AI workflows actually work — between operational systems and large language models.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "P0 · Category definition" },
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody: { type: ControlType.String, title: "Definition Body", defaultValue: "An AI enablement data layer is the architectural component that sits between regulated enterprise systems (NOC consoles, EHR, claim platforms, mission systems, legacy DBs) and large language models. It turns operational data into AI-ready capsules using structure-preserving, differential-privacy-based encapsulation, executes AI workflows on the protected capsule, and restores outputs back into the originating system. It supports two execution paths — external approved LLM with capsule data only, or on-prem local lightweight model — under a single governance framework.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "AI-ready operational layer" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/glossary/ai-ready-operational-layer" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Structure-preserving encapsulation" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/glossary/structure-preserving-encapsulation" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Differential privacy" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/glossary/differential-privacy" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Two execution paths" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "/glossary/two-execution-paths" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "Operational data" },
  related5Href: { type: ControlType.String, title: "Related 5 URL", defaultValue: "/glossary/operational-data" },
})
