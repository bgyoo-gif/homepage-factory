// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — LearnArticle logic inlined for Framer cross-folder compatibility.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<h2>Why two paths instead of one</h2>
<p>Enterprises rarely have one regulatory profile. A telecom carrier might run NOC analytics on Path A and mission-critical incident workflows on Path B. A hospital might use Path A for routine documentation and Path B for clinical decision support. A defense contractor might use Path B exclusively. Forcing a single path forces a single regulatory floor; offering two lets governance match the path to the workflow.</p>

<h2>Path A — external approved LLM with capsule data only</h2>
<p>The capsule (structure-preserving, differential-privacy-protected) is transmitted to an approved external LLM endpoint — ChatGPT, Claude, Gemini, Perplexity, or any LLM API. <strong>Raw operational data does not leave the enterprise environment.</strong> Only the capsule does. The LLM processes the capsule and returns a tokenized response. The state vault restores the response inside the enterprise.</p>
<ul>
  <li><strong>Best for:</strong> workflows with regulatory profiles that allow external transmission of differentially-private capsules</li>
  <li><strong>Strength:</strong> access to frontier model capability</li>
  <li><strong>Constraint:</strong> requires approved external LLM endpoint and policy alignment</li>
</ul>

<h2>Path B — on-prem local lightweight model</h2>
<p>A small private lightweight model runs entirely inside the enterprise environment. The capsule is processed locally. <strong>Zero external transmission.</strong> Used for air-gapped, classified, OT, and strictly regulated operations where any external endpoint is unacceptable.</p>
<ul>
  <li><strong>Best for:</strong> air-gapped networks, classified operations, OT environments, strict data sovereignty</li>
  <li><strong>Strength:</strong> zero external exposure, full data residency</li>
  <li><strong>Constraint:</strong> model capability is bounded by the local lightweight model footprint</li>
</ul>
<div class="callout"><strong>Internal naming.</strong> The internal team sometimes refers to "10G" — public documentation uses <em>lightweight on-prem model</em>, <em>small private model</em>, <em>local inference path</em>, or <em>on-prem/local execution path</em>. The exact size is a deployment decision based on hardware and workflow.</div>

<h2>Path selection: a decision framework</h2>
<table class="compare-table">
  <thead><tr><th>Factor</th><th>Path A</th><th class="us">Path B</th></tr></thead>
  <tbody>
    <tr><td>External transmission allowed</td><td>Yes (capsule only)</td><td class="us-cell">No</td></tr>
    <tr><td>Air-gapped network</td><td>Not applicable</td><td class="us-cell">Required</td></tr>
    <tr><td>Frontier model capability needed</td><td>Yes</td><td class="us-cell">Bounded by local model</td></tr>
    <tr><td>Latency profile</td><td>Variable (network)</td><td class="us-cell">Local, predictable</td></tr>
    <tr><td>Compliance posture</td><td>"No raw data exposure"</td><td class="us-cell">"Zero external exposure"</td></tr>
  </tbody>
</table>

<h2>Deployment topologies</h2>

<h3>On-premise</h3>
<p>Capsule Runtime + on-prem local lightweight model deployed inside the enterprise data center. Path B is the default. Path A is available only if a separate approved external endpoint is whitelisted by policy.</p>

<h3>Air-gapped</h3>
<p>Capsule Runtime + on-prem local lightweight model deployed in a fully isolated network. Path A is unavailable by design. Path B handles all workflows. Common for classified operations, defense, and high-regulation OT.</p>

<h3>Hybrid</h3>
<p>Capsule Runtime on-prem; both paths active. Policy routes individual workflows. Common for telecom and finance where some workflows tolerate external endpoints and others require local execution.</p>

<h3>In-region (data sovereignty)</h3>
<p>Capsule Runtime + lightweight model deployed in a specific region (e.g., EU for GDPR-bound workloads). Path A may also be allowed only to in-region external endpoints. Common for multinationals with regional data residency obligations.</p>

<h3>Cloud (AWS Marketplace)</h3>
<p>Capsule Runtime deployed via AWS Marketplace, with the customer's cloud account hosting both the runtime and the local lightweight model. Path A optional based on policy.</p>

<h3>Embedded integration</h3>
<p>Capsule SDK embedded into an existing application (NOC console, ticket system, hospital portal, mission system). Both paths supported; the embedded application chooses per workflow.</p>

<h3>Slack App</h3>
<p>Capsule plug-in for Slack workflows. Path A typical for general-purpose teams; Path B for regulated teams routing through Slack as a UI layer over an on-prem runtime.</p>

<h2>What happens technically inside Path B</h2>
<ol>
  <li>Connector lane delivers operational data into the Capsule Runtime (REST, webhook, log tap, SDK).</li>
  <li>Structure-preserving encapsulation tokenizes operational identifiers while preserving sequence and structure.</li>
  <li>Differential-privacy-based protection bounds inference risk on the capsule.</li>
  <li>The capsule is dispatched to the local lightweight model running inside the same network.</li>
  <li>The model produces a tokenized output.</li>
  <li>The state vault rehydrates original operational identifiers in the output.</li>
  <li>The result is inserted back into the originating workflow (ticket, runbook, EHR field, mission summary).</li>
  <li>Governance records the path applied, the policy invoked, and the audit trail.</li>
</ol>
<p><strong>No step in Path B reaches outside the enterprise boundary.</strong></p>

<h2>The Zero Exposure claim — scoped correctly</h2>
<p>"Zero Exposure" is a claim that needs a scope to be defensible. The scoped versions LLM Capsule uses:</p>
<ul>
  <li><strong>Path A:</strong> "No raw operational data exposure to external LLMs."</li>
  <li><strong>Path B:</strong> "Zero external exposure in the on-prem / local execution path."</li>
</ul>
<p>Avoid unbounded "Zero Exposure" as a top-level slogan. The technical guarantee is path-specific and policy-conditional.</p>

<h2>What buyers should evaluate</h2>
<ol>
  <li><strong>Path coverage.</strong> Are both paths supported, or only one?</li>
  <li><strong>Path policy granularity.</strong> Can different workflows use different paths under the same governance?</li>
  <li><strong>Local model footprint.</strong> What hardware does the on-prem lightweight model require?</li>
  <li><strong>Air-gap support.</strong> Is the runtime fully operable without external connectivity?</li>
  <li><strong>State vault locality.</strong> Does the state vault stay local in Path A as well?</li>
  <li><strong>Audit per path.</strong> Is the path applied recorded per request, per workflow, per policy?</li>
</ol>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>Two execution paths in one AI enablement data layer: external approved LLM with capsule (Path A) or on-prem local lightweight model (Path B).</li>
    <li>Path B handles air-gapped, classified, OT, and strictly regulated operations with zero external transmission.</li>
    <li>Selection is policy-driven per workflow; governance records the path applied.</li>
    <li>Six deployment topologies: on-premise, air-gapped, hybrid, in-region, cloud, embedded, Slack App.</li>
    <li>The "Zero Exposure" claim is scoped to the path: "no raw data exposure to external LLMs" (Path A) or "zero external exposure" (Path B).</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is the on-prem LLM execution path?", "acceptedAnswer": { "@type": "Answer", "text": "The on-prem LLM execution path (Path B) runs a small private lightweight model entirely inside the enterprise environment. No raw operational data and no capsule data leaves the boundary. It is used for air-gapped, classified, or strictly regulated operations where any external transmission is unacceptable." } }, { "@type": "Question", "name": "When should I use Path A vs Path B?", "acceptedAnswer": { "@type": "Answer", "text": "Path A (external approved LLM with capsule data only) is appropriate when the workflow's regulatory profile allows transmission of differentially-private capsule data to an approved external endpoint. Path B (on-prem local lightweight model) is required when no external transmission is allowed — air-gapped networks, classified operations, OT environments, or strict regulated industries with data sovereignty constraints." } }, { "@type": "Question", "name": "Can I switch between paths per workflow?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Path selection is policy-driven. Different workflows in the same enterprise can route to different paths based on regulatory profile, data sensitivity, and customer commitments. Governance records the path applied per workflow." } } ] }`

export default function OnPremLlmExecutionPath({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
  lead = "Two execution paths inside a single AI enablement data layer. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.",
  category = "ARCHITECTURE · Execution Path",
  readTime = "11 min read",
  dateUpdated = "Updated May 2025",
  tldrLabel = "TL;DR",
  tldrBody = "",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path",
  datePublished = "2025-05-01",
  dateModified = "2025-05-01",
  inLanguage = "en",
  breadcrumbLabel = "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Differential privacy for enterprise LLM",
  related1Href = "/resources/learn/differential-privacy-for-enterprise-llm",
  related2Title = "AI on network operations data",
  related2Href = "/resources/learn/ai-on-network-operations-data",
  related3Title = "PII guardrails vs operational data protection",
  related3Href = "/resources/learn/pii-guardrails-vs-operational-data-protection",
  related4Title = "",
  related4Href = "",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": lead,
    "inLanguage": inLanguage,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
  })

  const breadcrumbJsonLd = breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
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
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
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
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
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

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside bodyHtml */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body (e.g. CTA link) */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={backHref} className="la-hero__back">{backLabel}</a>
              <h1 className="la-hero__title">{title}</h1>
              <p className="la-hero__lead">{lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{tldrLabel}</div>
              <p className="la-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(OnPremLlmExecutionPath, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "Two execution paths inside a single AI enablement data layer. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "ARCHITECTURE · Execution Path" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "11 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "Updated May 2025" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2025-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2025-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Differential privacy for enterprise LLM" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/differential-privacy-for-enterprise-llm" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "AI on network operations data" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/ai-on-network-operations-data" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "PII guardrails vs operational data protection" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/pii-guardrails-vs-operational-data-protection" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
