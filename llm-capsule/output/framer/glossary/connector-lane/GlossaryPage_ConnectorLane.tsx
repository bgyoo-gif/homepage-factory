import { addPropertyControls, ControlType } from "framer"

// GlossaryPage_ConnectorLane
// Content component for /glossary/connector-lane
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
<h2>What it is — and what it isn't</h2>
<p>The connector lane is the in-environment reading surface. Capsule sits next to existing systems on the customer's network, reads the document or record where it already is, encapsulates it locally, and returns the restored output to the originating workflow. Raw operational data does not traverse a public network or an external SaaS endpoint to reach Capsule.</p>
<p>This is the opposite of how a typical "integration platform" works. Capsule is not an external service that pulls data out of customer systems — it is a layer running inside the environment those systems already trust.</p>

<h2>What it reads</h2>
<ul>
<li><strong>Document and record systems</strong> — SharePoint, internal DMS, S3 / blob storage in the customer's VPC, file repositories</li>
<li><strong>Ticket and ITSM systems</strong> — ServiceNow, Jira, Remedy, in-house ticketing</li>
<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, in-house systems</li>
<li><strong>Healthcare records</strong> — hospital information systems, clinical record stores, imaging metadata, all read inside the hospital network</li>
<li><strong>Operational systems</strong> — NOC consoles, OSS / BSS, OT historians, log platforms read in DMZ and processed in environment</li>
<li><strong>Custom and legacy systems</strong> — internal databases, file drops, queues, in-house tooling — Capsule adapts to what the customer already runs</li>
</ul>

<h2>Why this distinction matters</h2>
<p>For regulated buyers — defense, healthcare, finance, telecom — "integration" usually means "data leaves my environment to reach a vendor." That is exactly the failure mode that blocks AI adoption on operational data. The connector lane is the opposite contract: Capsule comes to the data, the data does not go to Capsule.</p>

<h2>Integration interfaces — how existing systems invoke Capsule</h2>
<p>Once Capsule is deployed inside the environment, existing systems invoke it through whichever interface fits their stack:</p>
<ul>
<li><strong>REST / gRPC</strong> — for modern operations tools, RAG pipelines, and custom orchestrators inside the environment</li>
<li><strong>JDBC / ODBC</strong> — for legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step</li>
<li><strong>Graph API</strong> — for DMS / ECM systems (SharePoint, etc.) where document events trigger Capsule processing</li>
<li><strong>Webhook / log tap</strong> — for incident- and event-driven workflows from NOC, ticket, OT, and SIEM-adjacent systems</li>
<li><strong>On-prem API</strong> — Capsule's own on-prem callable surface; same contract whether you're air-gapped, hybrid, or VPC</li>
<li><strong>Embedded SDK</strong> — library-level integration for ISVs and platform vendors who ship Capsule inside their own product</li>
<li><strong>Slack App</strong> — for teams using Slack as the operations UI; the runtime stays in the customer environment, the Slack App is the invocation surface</li>
</ul>
<p>All of these interfaces stay inside the customer network. None of them route raw operational data through an external SaaS endpoint to reach Capsule.</p>

<h2>Reference statement</h2>
<blockquote><p>The connector lane is what makes regulated AI deployment an integration instead of a data egress decision. Capsule reads existing systems where they already are. Raw operational data does not leave the environment.</p></blockquote>
`

export default function GlossaryPage_ConnectorLane({
  backLabel = "← Glossary",
  backHref = "/glossary",
  term = "Connector Lane",
  lead = "How LLM Capsule reads the document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.",
  category = "GLOSSARY",
  definitionLabel = "Definition",
  definitionBody = "The connector lane describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is not a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.",
  bodyHtml = DEFAULT_BODY_HTML,
  related1Label = "context-preserving data layer for AI",
  related1Href = "/glossary/context-preserving-data-layer",
  related2Label = "Structure-preserving encapsulation",
  related2Href = "/glossary/structure-preserving-encapsulation",
  related3Label = "Two execution paths",
  related3Href = "/glossary/two-execution-paths",
  related4Label = "Operational data",
  related4Href = "/glossary/operational-data",
  related5Label = "In-environment deployment",
  related5Href = "/glossary/in-environment-deployment",
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
    "url": "https://llmcapsule.ai/resources/glossary/connector-lane",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gcl-root {
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
        .gcl-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Hero ──────────────────────────────────────── */
        .gcl-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gcl-hero__back {
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
        .gcl-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gcl-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gcl-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gcl-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gcl-meta__chip {
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
        .gcl-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gcl-def {
          max-width: 880px;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gcl-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gcl-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gcl-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gcl-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gcl-body {
          max-width: 760px;
        }

        .gcl-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gcl-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gcl-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        .gcl-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gcl-body p:last-child { margin-bottom: 0; }

        .gcl-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gcl-body ul,
        .gcl-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gcl-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gcl-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gcl-body li:last-child { margin-bottom: 0; }

        .gcl-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gcl-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        .gcl-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        .gcl-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gcl-body pre::-webkit-scrollbar { display: none; }

        .gcl-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        .gcl-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gcl-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gcl-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gcl-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gcl-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gcl-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gcl-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gcl-related__link {
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

        .gcl-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gcl-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gcl-related__link:hover .gcl-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container queries ────────────────────────────── */
        @container (max-width: 767px) {
          .gcl-hero { padding-top: 48px; }
          .gcl-hero__title { font-size: 28px; }
          .gcl-hero__lead { font-size: 16px; }
          .gcl-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gcl-body p,
          .gcl-body li { font-size: 16px; }
          .gcl-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gcl-root">

        {/* ── 1. Hero ── */}
        <section className="gcl-hero">
          <div className="gcl-container">
            <a href={backHref} className="gcl-hero__back">{backLabel}</a>
            <h1 className="gcl-hero__title">{term}</h1>
            <p className="gcl-hero__lead">{lead}</p>
            <div className="gcl-hero__meta">
              <span className="gcl-meta__chip">{category}</span>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gcl-def-wrap">
          <div className="gcl-container">
            <div className="gcl-def">
              <div className="gcl-def__label">{definitionLabel}</div>
              <p className="gcl-def__body">{definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gcl-body-wrap">
          <div className="gcl-container">
            <article
              className="gcl-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gcl-related">
            <div className="gcl-container">
              <div className="gcl-related__label">Related terms</div>
              <ul className="gcl-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gcl-related__item">
                    <a href={item.href} className="gcl-related__link">
                      <span>{item.label}</span>
                      <span className="gcl-related__link-arrow" aria-hidden="true">→</span>
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

addPropertyControls(GlossaryPage_ConnectorLane, {
  // Hero
  backLabel: { type: ControlType.String, title: "Back Label",   defaultValue: "← Glossary" },
  backHref:  { type: ControlType.String, title: "Back URL",     defaultValue: "/glossary" },
  term:      { type: ControlType.String, title: "Term",         defaultValue: "Connector Lane" },
  lead:      { type: ControlType.String, title: "Lead",         defaultValue: "How LLM Capsule reads the document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.", displayTextArea: true },
  category:  { type: ControlType.String, title: "Category",     defaultValue: "GLOSSARY" },

  // Definition block
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "Definition" },
  definitionBody:  {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "The connector lane describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is not a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.",
    displayTextArea: true,
  },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // Related terms
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "context-preserving data layer for AI" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/glossary/context-preserving-data-layer" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "Structure-preserving encapsulation" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/glossary/structure-preserving-encapsulation" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "Two execution paths" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/two-execution-paths" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "Operational data" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/operational-data" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "In-environment deployment" },
  related5Href:  { type: ControlType.String, title: "Related 5 URL",   defaultValue: "/glossary/in-environment-deployment" },
})
