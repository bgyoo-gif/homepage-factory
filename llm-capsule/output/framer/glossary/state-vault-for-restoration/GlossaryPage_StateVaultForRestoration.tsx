import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_StateVaultForRestoration
// Content component for /glossary/state-vault-for-restoration
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
<h2>What it stores</h2>
<ul>
<li>Token map: capsule tokens ↔ original operational identifiers</li>
<li>Workflow context: which capsule belongs to which incident, ticket, or runbook</li>
<li>Policy reference: which marker policy applied to this capsule</li>
<li>Privacy budget reference: how much of the workflow's DP budget this capsule consumed</li>
</ul>

<h2>Where it lives</h2>
<p>Always local. The token map never traverses the external boundary. In Path A (external approved LLM), the LLM sees only capsule tokens; the state vault rehydrates after the response returns. In Path B (on-prem local lightweight model), everything is local end to end.</p>

<h2>Why it matters</h2>
<p>Without restoration, AI outputs are stuck as token salad. The operations team needs the result as a usable artifact in the originating workflow — a ticket update with real device IDs, a runbook step referencing the actual site, an RCA pointing to the actual incident reference. The state vault is what makes that possible while keeping the originals out of the model.</p>

<h2>Outputs the state vault produces</h2>
<ul>
<li>Restored RCA inserted into the ticket system</li>
<li>Restored runbook step inserted into the runbook</li>
<li>Restored summary inserted into the EHR or hospital portal</li>
<li>Restored mission summary inserted into the command system (Path B only)</li>
<li>Restored compliance review draft inserted into the review workflow</li>
</ul>

<h2>Auditability</h2>
<p>Every restoration is logged. The audit trail records the capsule, the policy applied, the path used, the token map operations, and the destination of the restored output. Compliance teams can trace any restored field back to its capsule and policy.</p>

<h2>Reference statement</h2>
<blockquote><p>The capsule is what the AI sees. The state vault is what the business sees. The boundary between them is the operational guarantee.</p></blockquote>
`

export default function GlossaryPage_StateVaultForRestoration({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "State Vault for Restoration",
  lead = "The local-only store that turns AI output back into business-ready output.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "The state vault is the local-only store that holds the token map between original operational identifiers and capsule tokens. It enables AI outputs to be restored back into the originating workflow with original identifiers — inside the enterprise — without the external LLM ever seeing the originals.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "AI enablement data layer",
  related1Href = "/glossary/ai-enablement-data-layer",
  related2Label = "Structure-preserving encapsulation",
  related2Href = "/glossary/structure-preserving-encapsulation",
  related3Label = "Capsule token",
  related3Href = "/glossary/capsule-token",
  related4Label = "Two execution paths",
  related4Href = "/glossary/two-execution-paths",
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
    "description": definitionBody,
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
    "url": "https://llmcapsule.ai/resources/glossary/state-vault-for-restoration",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .svfr-root {
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
        .svfr-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .svfr-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .svfr-hero__back {
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
        .svfr-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .svfr-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .svfr-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .svfr-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .svfr-meta__chip {
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
        .svfr-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .svfr-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .svfr-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .svfr-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .svfr-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .svfr-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .svfr-body {
          max-width: 760px;
        }

        .svfr-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .svfr-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .svfr-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .svfr-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .svfr-body p:last-child { margin-bottom: 0; }

        .svfr-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .svfr-body ul,
        .svfr-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .svfr-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .svfr-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .svfr-body li:last-child { margin-bottom: 0; }

        .svfr-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .svfr-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .svfr-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .svfr-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .svfr-body pre::-webkit-scrollbar { display: none; }

        .svfr-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .svfr-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .svfr-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .svfr-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .svfr-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .svfr-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .svfr-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .svfr-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .svfr-related__link {
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

        .svfr-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .svfr-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .svfr-related__link:hover .svfr-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .svfr-hero { padding-top: 48px; }
          .svfr-hero__title { font-size: 28px; }
          .svfr-hero__lead { font-size: 16px; }
          .svfr-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .svfr-body p,
          .svfr-body li { font-size: 16px; }
          .svfr-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="svfr-root">

        {/* ── 1. Hero ── */}
        <section className="svfr-hero">
          <div className="svfr-container">
            <a href={backHref} className="svfr-hero__back">{backLabel}</a>
            <h1 className="svfr-hero__title">{term}</h1>
            <p className="svfr-hero__lead">{lead}</p>
            <div className="svfr-hero__meta">
              <span className="svfr-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="svfr-def-wrap">
          <div className="svfr-container">
            <div className="svfr-def">
              <div className="svfr-def__label">{definitionLabel}</div>
              <p className="svfr-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="svfr-body-wrap">
          <div className="svfr-container">
            <article
              className="svfr-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="svfr-related">
            <div className="svfr-container">
              <div className="svfr-related__label">Related terms</div>
              <ul className="svfr-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="svfr-related__item">
                    <a href={item.href} className="svfr-related__link">
                      <span>{item.label}</span>
                      <span className="svfr-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_StateVaultForRestoration, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "State Vault for Restoration" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "The local-only store that turns AI output back into business-ready output.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "The state vault is the local-only store that holds the token map between original operational identifiers and capsule tokens. It enables AI outputs to be restored back into the originating workflow with original identifiers — inside the enterprise — without the external LLM ever seeing the originals.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "AI enablement data layer" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/ai-enablement-data-layer" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Structure-preserving encapsulation" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/structure-preserving-encapsulation" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Capsule token" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/capsule-token" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Two execution paths" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/two-execution-paths" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "Differential privacy" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "/glossary/differential-privacy" },
})
