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

const BODY_HTML = `<h2>The shape of network operations data</h2>
<p>A typical NOC environment generates and consumes several classes of operational data, each with its own confidentiality profile:</p>
<ul>
  <li><strong>Network topology</strong> — routers, switches, optical paths, cell sites, BSC/MSC layout, peering points.</li>
  <li><strong>Device and site identifiers</strong> — device IDs, cell site IDs, circuit IDs, port references.</li>
  <li><strong>Alarms and events</strong> — fault types, severity, sequence, root indicators.</li>
  <li><strong>Incident records</strong> — INC-IDs, ticket trails, escalation paths, customer-impact data, SLA risk.</li>
  <li><strong>Configuration trees</strong> — running config, candidate config, diff between revisions.</li>
  <li><strong>Performance counters</strong> — throughput, packet loss, latency baselines, anomaly thresholds.</li>
  <li><strong>Outage history</strong> — patterns and recurrence.</li>
</ul>
<p>None of this is generic PII. All of it is operationally sensitive. PII guardrails do not protect it adequately because the patterns themselves — sequence, structure, aggregation — leak.</p>

<h2>What AI can do here, when it can reach the data</h2>

<h3>Incident RCA drafting</h3>
<p>Given an incident with linked alarms, configuration history, and topology context, an LLM can draft a structured RCA: timeline, suspected root cause, contributing factors, recommended remediation. The NOC engineer reviews and finalizes. End-to-end RCA time drops from hours to minutes for routine incidents.</p>

<h3>Alarm correlation</h3>
<p>Correlate noisy alarm streams against known fault patterns. The LLM proposes a likely root fault and the chain of dependent alarms it explains, reducing alarm fatigue and accelerating triage.</p>

<h3>Configuration drift detection and explanation</h3>
<p>Compare configuration revisions across devices or sites. Surface drift that violates policy. Generate human-readable explanations of what changed and what the operational implication is.</p>

<h3>Runbook generation and update</h3>
<p>Draft new runbooks from incident response trails. Update existing runbooks when the resolution pattern shifts.</p>

<h3>Customer-impact summarization</h3>
<p>Summarize customer-impact data per incident with appropriate aggregation and audit trail — ready for SLA reporting and incident review.</p>

<h2>Why this is blocked today</h2>
<p>Most carriers face the same blockers when their network engineering teams ask for AI assistance:</p>
<ol>
  <li><strong>Data sovereignty.</strong> Network operational data cannot leave the regulated jurisdiction.</li>
  <li><strong>Customer-impact sensitivity.</strong> Even with names removed, customer-impact data identifies segments.</li>
  <li><strong>Topology disclosure.</strong> Network topology is itself a competitive and security asset.</li>
  <li><strong>Audit and compliance.</strong> Regulators want a defensible trail of what data was transformed, by what policy, and where it went.</li>
  <li><strong>PII guardrails fall short.</strong> Standard guardrails address customer names, not device or site or topology references.</li>
</ol>

<h2>The AI enablement data layer pattern</h2>
<p>LLM Capsule sits between the existing NOC environment and the LLM. The pattern, end to end:</p>
<ol>
  <li>The NOC console, ticket system, or log viewer raises an event (incident opened, alarm correlated, runbook update requested).</li>
  <li>The connector lane forwards the relevant data to the Capsule Runtime — REST API, webhook, log tap, or SDK call.</li>
  <li>The Capsule Runtime applies <strong>structure-preserving encapsulation</strong>: device IDs, site IDs, circuit IDs, customer references, alarm sequences are tokenized while preserving the relational structure the LLM needs to reason.</li>
  <li><strong>Differential-privacy-based protection</strong> is applied to bound inference risk on the capsule.</li>
  <li>The capsule is routed to <strong>Path A</strong> (external approved LLM, no raw operational data exposure) or <strong>Path B</strong> (on-prem local lightweight model, zero external exposure) per policy.</li>
  <li>The LLM produces a draft RCA, correlation, or summary.</li>
  <li>The state vault <strong>restores</strong> the original operational identifiers in the output.</li>
  <li>The result is inserted back into the ticket, runbook, or NOC view.</li>
  <li>Governance records the policy applied, the privacy budget consumed, and the audit trail.</li>
</ol>

<h2>What gets capsulized — and what stays raw</h2>
<table class="compare-table">
  <thead><tr><th>Field type</th><th>Treatment in capsule</th><th class="us">Restored on output?</th></tr></thead>
  <tbody>
    <tr><td>Device ID (e.g. R-472)</td><td>Tokenized with structure preserved</td><td class="us-cell">Yes — original ID returned</td></tr>
    <tr><td>Cell site ID (e.g. SEO-18)</td><td>Tokenized; geographic hint generalized</td><td class="us-cell">Yes</td></tr>
    <tr><td>Circuit ID</td><td>Tokenized</td><td class="us-cell">Yes</td></tr>
    <tr><td>Customer name</td><td>Field-level redaction</td><td class="us-cell">Yes (if policy allows)</td></tr>
    <tr><td>Alarm sequence</td><td>Sequence preserved; absolute timestamps fuzzed by DP</td><td class="us-cell">Yes — original sequence returned</td></tr>
    <tr><td>SLA impact value</td><td>Bucketed under DP for aggregate reasoning</td><td class="us-cell">Original value preserved separately</td></tr>
    <tr><td>Topology graph</td><td>Structurally preserved, identifiers tokenized</td><td class="us-cell">Yes</td></tr>
  </tbody>
</table>

<h2>Telecom-specific patterns to expect</h2>

<h3>Incident-driven workflow</h3>
<p>Most NOC AI workflows are incident-driven. The trigger is an alarm or ticket. The end state is an updated ticket or runbook. LLM Capsule's connector lane is designed to fit this loop without adding a separate UI.</p>

<h3>Multi-tenancy and segment confidentiality</h3>
<p>Carriers with multiple business units or wholesale customers need segment-level confidentiality even within their own AI workflows. Policy-driven marker control in the Capsule Runtime supports this: different policies per segment, audit per segment.</p>

<h3>On-prem-first deployments</h3>
<p>Telecom regulators and customer contracts often require on-prem or in-region execution. Path B (on-prem local lightweight model) with zero external exposure is the standard deployment for carriers in regulated markets.</p>

<h2>Validation: Deutsche Telekom T Challenge 2026</h2>
<p>LLM Capsule was validated at the <strong>Deutsche Telekom T Challenge 2026</strong>, finishing <strong>Top 12 in the Data Security &amp; Governance category</strong>. The challenge evaluated technologies for protecting and operationalizing sensitive enterprise data in AI workflows. The validation covered the operational data classes described above and the workflow integration pattern.</p>
<div class="callout"><strong>What the validation tested.</strong> Whether the technology preserved enough operational structure for the LLM to produce useful output, while reducing inference and re-identification risk to a level acceptable for a regulated carrier's data security and governance posture.</div>

<h2>What buying teams should evaluate</h2>
<ol>
  <li><strong>Connector lane coverage.</strong> Does it plug into your specific NOC, ticket, OSS/BSS, and log infrastructure?</li>
  <li><strong>Marker categories beyond PII.</strong> Are network identifiers, system operational logs, and OT references handled as first-class markers?</li>
  <li><strong>Two execution paths.</strong> Can the same workflow be re-routed from Path A to Path B without redesigning the integration?</li>
  <li><strong>Privacy budget governance.</strong> Is the DP budget per workflow auditable?</li>
  <li><strong>State vault restoration.</strong> Are restored outputs traceable to the originating capsule and policy?</li>
  <li><strong>On-prem deployment depth.</strong> Air-gapped, hybrid, regional — which apply to your environment?</li>
</ol>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>Network operations data is structurally sensitive. PII filtering alone does not protect it.</li>
    <li>The AI enablement data layer pattern: existing NOC → connector lane → capsule with structure-preserving DP-based protection → execution path → state vault restore → back to ticket / runbook.</li>
    <li>Carriers typically deploy on Path B (on-prem local lightweight model) for regulatory and sovereignty reasons.</li>
    <li>Validated at Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance.</li>
    <li>Buying-team checklist: connector coverage, marker breadth, two execution paths, privacy budget governance, state vault, on-prem depth.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Why can't I just send NOC logs to an external LLM?", "acceptedAnswer": { "@type": "Answer", "text": "NOC logs contain device IDs, site references, circuit IDs, alarm sequences, customer-impact data, and SLA risk indicators. Sending them to an external LLM exposes network topology and operational sensitivity. Even with PII removed, the structural patterns identify the segment. Carriers in regulated jurisdictions face data sovereignty, GDPR, and audit risk. The AI enablement data layer with structure-preserving differential-privacy-based encapsulation addresses this." } }, { "@type": "Question", "name": "What kinds of NOC workflows can AI assist?", "acceptedAnswer": { "@type": "Answer", "text": "Incident RCA drafting, alarm correlation, configuration drift detection, runbook generation, customer-impact summarization, and outage history pattern recognition. The AI generates the analysis or draft from capsuled data; results are restored with original device and site references and inserted back into the ticket or runbook system." } }, { "@type": "Question", "name": "Has this been validated in production?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule was validated at Deutsche Telekom T Challenge 2026, finishing in the Top 12 in the Data Security and Governance category. The validation covered network operational data and incident workflows." } }, { "@type": "Question", "name": "Does it work with existing NOC tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule plugs into existing NOC consoles, ticket systems, OSS/BSS platforms, log viewers, and runbooks via the connector lane (REST API, webhook, file watch, log tap, SDK, or Slack App). The NOC team continues using their existing tools; the Capsule layer handles the AI workflow inside that environment." } } ] }`

export default function AiOnNetworkOperationsData({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
  lead = "The data NOC engineers need AI to read is the same data they cannot send to an external LLM. Here is how to close that gap with structure-preserving, differential-privacy-based encapsulation — validated at Deutsche Telekom T Challenge 2026.",
  category = "USE CASE · Telecom",
  readTime = "12 min read",
  dateUpdated = "Updated May 2025",
  tldrLabel = "TL;DR",
  tldrBody = "",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/ai-on-network-operations-data",
  datePublished = "2025-05-01",
  dateModified = "2025-05-01",
  inLanguage = "en",
  breadcrumbLabel = "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "On-prem LLM execution path",
  related1Href = "/resources/learn/on-prem-llm-execution-path",
  related2Title = "Differential privacy for enterprise LLM",
  related2Href = "/resources/learn/differential-privacy-for-enterprise-llm",
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

addPropertyControls(AiOnNetworkOperationsData, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "The data NOC engineers need AI to read is the same data they cannot send to an external LLM. Here is how to close that gap with structure-preserving, differential-privacy-based encapsulation — validated at Deutsche Telekom T Challenge 2026.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "USE CASE · Telecom" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "12 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "Updated May 2025" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/ai-on-network-operations-data" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2025-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2025-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "On-prem LLM execution path" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/on-prem-llm-execution-path" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Differential privacy for enterprise LLM" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/differential-privacy-for-enterprise-llm" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "PII guardrails vs operational data protection" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/pii-guardrails-vs-operational-data-protection" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
