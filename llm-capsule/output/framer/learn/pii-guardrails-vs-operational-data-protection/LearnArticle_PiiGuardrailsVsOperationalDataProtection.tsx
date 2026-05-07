import { addPropertyControls, ControlType } from "framer"

// LearnArticle — PII Guardrails vs Operational Data Protection
// Article page: /learn/pii-guardrails-vs-operational-data-protection
// Uses the LearnArticle shared template structure (Hero → TL;DR → Body → Related → CTA)
// All text is Props-controlled for Framer CMS compatibility.

interface Props {
  // Hero
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string

  // TL;DR
  tldrLabel?: string
  tldrBody?: string

  // Body — rich HTML string rendered with dangerouslySetInnerHTML
  bodyHtml?: string

  // SEO / JSON-LD
  canonicalUrl?: string
  datePublished?: string

  // Related links
  relatedSectionLabel?: string
  related1Tag?: string
  related1Title?: string
  related1Href?: string
  related2Tag?: string
  related2Title?: string
  related2Href?: string
  related3Tag?: string
  related3Title?: string
  related3Href?: string

  // CTA strip
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_BODY_HTML = `
<h2>Why this comparison matters</h2>
<p>Buyers evaluating enterprise AI routinely encounter four kinds of products in the same shortlist: PII guardrails, prompt security gateways, AI security suites, and the AI enablement data layer. They are not equivalent. Treating them as interchangeable leads to deployments that pass the PII filter but still expose the sensitive part of the workflow.</p>
<p>This article puts them on the same page. It defines what each category does, where it fits in the pipeline, what it covers, and what it leaves uncovered.</p>

<h2>The four categories</h2>

<h3>1. PII guardrails (API-level field detection)</h3>
<p>Developer-facing toolkits that wrap LLM API calls with detection and replacement of personal identifiers, content moderation, and safety filters. They are fast, easy to integrate, and well-suited to consumer or low-regulation enterprise workflows.</p>
<p><strong>Layer:</strong> API call wrapper. <strong>Scope:</strong> field-level. <strong>Strength:</strong> speed of integration. <strong>Limitation:</strong> blind to structural and aggregate patterns in operational data.</p>

<h3>2. AI security and prompt-level products (PII guardrails, prompt security gateways, AI security suites)</h3>
<p>Focused on prompt injection, jailbreak resistance, output policy enforcement, and runtime threat detection. Often include PII detection as a secondary feature. Sit at the prompt or API gateway.</p>
<p><strong>Layer:</strong> prompt / API gateway. <strong>Scope:</strong> prompt-level threats + PII. <strong>Strength:</strong> prompt injection defense. <strong>Limitation:</strong> not designed for transforming structured operational data before it reaches the model.</p>

<h3>3. Synthetic data platforms</h3>
<p>Generate synthetic versions of training or evaluation datasets that approximate the statistical properties of the original. Used for AI training pipelines and analytics, not for runtime protection of live operational data.</p>
<p><strong>Layer:</strong> data pipeline (offline). <strong>Scope:</strong> dataset generation. <strong>Strength:</strong> training data for ML. <strong>Limitation:</strong> does not run in the live workflow.</p>

<h3>4. AI Enablement Data Layer (LLM Capsule)</h3>
<p>Sits between the existing enterprise environment (NOC, ticket, OT, EHR, mission systems) and the LLM. Transforms regulated operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation. Routes through one of two execution paths (external approved LLM or on-prem local model). Restores results back to the workflow via state vault.</p>
<p><strong>Layer:</strong> AI enablement data layer. <strong>Scope:</strong> operational data + governance. <strong>Strength:</strong> structured operational data, two execution paths, plug-in to legacy systems. <strong>Limitation:</strong> is not a prompt injection defense or a synthetic data generator.</p>

<h2>Direct comparison table</h2>
<table>
  <thead>
    <tr>
      <th></th>
      <th>PII guardrails</th>
      <th>AI security / prompt</th>
      <th>LLM Capsule</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Layer</td><td>API wrapper</td><td>Prompt / gateway</td><td>AI enablement data layer</td></tr>
    <tr><td>Scope</td><td>Names, IDs, fields</td><td>Prompt threats + PII</td><td>Operational data + governance</td></tr>
    <tr><td>Method</td><td>Detect &amp; mask</td><td>Filter / sanitize prompts</td><td>Structure-preserving + DP-based encapsulation</td></tr>
    <tr><td>Plug into legacy systems</td><td>No</td><td>No</td><td>Yes (NOC, Ticket, OT, EHR, Mission)</td></tr>
    <tr><td>On-prem local execution</td><td>No</td><td>Limited</td><td>Yes (Path B)</td></tr>
    <tr><td>Restoration</td><td>One-way</td><td>One-way</td><td>Two-way via state vault</td></tr>
    <tr><td>Governance</td><td>Detection logs</td><td>Threat logs</td><td>Policy · audit · access · compliance</td></tr>
  </tbody>
</table>

<h2>What each is best at</h2>
<p><strong>PII guardrails</strong> are the right starting point for developers building AI features on top of an LLM API where the sensitive content is mostly individual identifiers.</p>
<p><strong>AI security / prompt-level products</strong> are the right addition when the threat model includes prompt injection, jailbreak attempts, or behavioral abuse.</p>
<p><strong>Synthetic data platforms</strong> are the right tool when the goal is to train models or enable analytics on representative-but-non-original datasets. They do not run live workflows.</p>
<p><strong>LLM Capsule</strong> is the right layer when the data going to the LLM is regulated operational data — and the workflow runs inside a legacy enterprise environment that the AI must plug into rather than replace.</p>

<h2>Two failure cases that illustrate the gap</h2>

<h3>Case 1 · Telecom incident analysis</h3>
<p>A carrier wants to use an external LLM to draft RCAs from NOC logs. A PII guardrail removes customer names from incident descriptions. The remaining log still contains device IDs, site references, alarm sequences, and topology paths that uniquely identify the impacted segment of the network. PII guardrail passes. Operational confidentiality is breached.</p>
<p><strong>What LLM Capsule does differently:</strong> structure-preserving encapsulation tokenizes device IDs, site references, and topology paths while preserving sequence relationships so the LLM can still reason. Differential-privacy-based protection bounds inference risk on the aggregate. The capsule is routed to Path A (external approved LLM) with no raw operational data exposure, or to Path B (on-prem local model) for stricter regulatory profiles.</p>

<h3>Case 2 · OT vulnerability review</h3>
<p>An industrial operator wants AI-assisted vulnerability triage across PLC alerts. A PII guardrail has nothing to remove — there are no customer names. The data passes untouched to the external LLM. Plant zones, asset references, and patch constraints are visible to a third-party model.</p>
<p><strong>What LLM Capsule does differently:</strong> the OT/asset reference markers (PLC tag, plant zone, asset inventory ref) are detected and encapsulated. The execution path is policy-driven — for OT, Path B (on-prem local) is typical, providing zero external transmission.</p>

<h2>How they compose in practice</h2>
<p>PII guardrails, prompt security, synthetic data platforms, and the AI enablement data layer are not mutually exclusive. A mature enterprise stack often runs all four in different parts of the AI pipeline:</p>
<ul>
  <li>PII guardrails — at the API call layer for low-regulation features</li>
  <li>AI security / prompt protection — at the gateway for prompt threat defense</li>
  <li>Synthetic data — in the offline training pipeline</li>
  <li>LLM Capsule — at the AI enablement data layer for regulated operational data</li>
</ul>
<p>The mistake is treating the first as if it were the fourth. Field-level masking is not a substitute for distributional protection on operational data.</p>

<div class="callout"><strong>Buyer test.</strong> When the AI pipeline involves NOC logs, incident records, OT manifests, configuration trees, clinical workflows, or mission context — the AI enablement data layer is the right place to evaluate. PII guardrails are necessary but not sufficient.</div>

<h2>Where to verify</h2>
<p>LLM Capsule is validated in regulated operational settings:</p>
<ul>
  <li><strong>Telecom</strong> — Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance</li>
  <li><strong>Industrial cybersecurity / OT</strong> — partnership with Claroty</li>
  <li><strong>Healthcare</strong> — deployed at EUMC (Ewha Womans University Medical Center)</li>
  <li><strong>Finance &amp; insurance</strong> — deployed at IBK, Kyobo, DB Insurance</li>
  <li><strong>Certifications</strong> — ISO/IEC 27001, ISO/IEC 42001</li>
</ul>

<div class="takeaways">
  <div class="takeaways__label">Key takeaways</div>
  <ul>
    <li>PII guardrails and the AI enablement data layer address different layers of the enterprise AI pipeline.</li>
    <li>PII guardrails, AI security suites, and prompt security gateways — each is strong in its own scope (risk control, policy enforcement, prompt-level protection). None of them transforms structured operational data with differential-privacy-based encapsulation.</li>
    <li>The buyer test: if the sensitive content is structural (logs, configs, OT, clinical, mission), you need an AI enablement data layer, not just a guardrail.</li>
    <li>The categories compose. The mistake is treating PII guardrails as if they covered operational data.</li>
    <li>LLM Capsule provides plug-in to legacy systems, two execution paths, two-way restoration, and full governance — alongside, not instead of, PII guardrails where they are needed.</li>
  </ul>
</div>
`

export default function LearnArticle_PiiGuardrailsVsOperationalDataProtection({
  backLabel = "← Learn",
  backHref = "/learn",
  title = "Why PII Guardrails Don't Make Enterprise AI Work",
  lead = "PII guardrails, AI security suites, prompt security gateways — they all do something important. They do not all do the same thing. Here is a direct comparison and a clear answer to where each fits in enterprise AI adoption.",
  category = "COMPARISON · Categories",
  readTime = "11 min read",
  dateUpdated = "Updated May 2025",
  tldrLabel = "Definition · TL;DR",
  tldrBody = "PII guardrails protect identifiable fields at the API or prompt layer. The AI enablement data layer protects structured enterprise data — network logs, configurations, incident records, OT and mission context — using structure-preserving, differential-privacy-based encapsulation. They address adjacent but different layers of the enterprise AI pipeline.",
  bodyHtml = DEFAULT_BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection",
  datePublished = "2025-05-01",
  relatedSectionLabel = "Continue reading",
  related1Tag = "Pillar",
  related1Title = "Differential privacy for enterprise AI",
  related1Href = "/resources/learn/differential-privacy-for-enterprise-llm",
  related2Tag = "Use case",
  related2Title = "AI on network operations data",
  related2Href = "/resources/learn/ai-on-network-operations-data",
  related3Tag = "Architecture",
  related3Title = "On-prem LLM execution path",
  related3Href = "/resources/learn/on-prem-llm-execution-path",
  ctaTitle = "Map your stack against the categories.",
  ctaDescription = "30-minute review of where PII guardrails, prompt security, and the AI enablement data layer fit in your AI pipeline.",
  ctaLabel = "Request a Demo",
  ctaHref = "/request-a-demo",
}: Props) {
  const relatedItems = [
    { tag: related1Tag, title: related1Title, href: related1Href },
    { tag: related2Tag, title: related2Title, href: related2Href },
    { tag: related3Tag, title: related3Title, href: related3Href },
  ].filter((r) => r.title && r.href)

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "PII Guardrails vs Operational Data Protection",
    "description": "A direct comparison: where PII guardrails fit, what they miss, and how the AI enablement data layer differs.",
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG" },
    "datePublished": datePublished,
    "dateModified": "2025-05-05",
    "mainEntityOfPage": canonicalUrl,
    "wordCount": 2600,
  })

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are PII guardrails the same as the AI enablement data layer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. PII guardrails detect and mask personal identifiers — names, IDs, financial fields. The AI enablement data layer covers complex enterprise data such as network logs, incident records, configurations, OT manifests, and clinical or mission context. Operational data leaks information through structure, sequence, and aggregate pattern, not just through identifiable fields. Field-level masking alone does not protect it.",
        },
      },
      {
        "@type": "Question",
        "name": "How does LLM Capsule compare with PII guardrail and AI security suite products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PII guardrail and AI security suite products are optimized for risk control and policy enforcement at the API or prompt level — prompt injection defense, jailbreak resistance, and PII detection. LLM Capsule operates at a different layer: it transforms operational data into AI-ready capsules with differential-privacy-based protection, plugs into existing enterprise systems beyond the API gateway, preserves operational structure for AI to consume, and restores outputs back into the originating workflow. The two categories are adjacent and often complementary — they address different stages of the enterprise AI pipeline.",
        },
      },
      {
        "@type": "Question",
        "name": "When is a PII guardrail enough?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When the workflow's sensitive content is mostly identifiable individual fields — customer names, phone numbers, financial identifiers — and the surrounding context is not itself sensitive. Customer chat, contract review, and document summarization are common cases. When the context (network topology, incident sequence, OT alarms, mission rhythm) is the sensitive part, PII guardrails alone are not sufficient.",
        },
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .pii-root {
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
        .pii-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .pii-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .pii-hero__back {
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
        .pii-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .pii-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .pii-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .pii-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
          max-width: 760px;
        }

        .pii-meta__chip {
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

        .pii-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .pii-meta__time,
        .pii-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .pii-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .pii-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .pii-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .pii-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .pii-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .pii-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .pii-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .pii-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .pii-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .pii-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .pii-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .pii-body p:last-child { margin-bottom: 0; }

        .pii-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .pii-body ul,
        .pii-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .pii-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .pii-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .pii-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .pii-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .pii-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .pii-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .pii-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .pii-body pre::-webkit-scrollbar { display: none; }

        .pii-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .pii-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .pii-body th,
        .pii-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .pii-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .pii-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside bodyHtml */
        .pii-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .pii-body .callout strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Takeaways box */
        .pii-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .pii-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .pii-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .pii-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .pii-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .pii-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body */
        .pii-body .la-btn {
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
        .pii-body .la-btn:hover { border-bottom: none; }

        .pii-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .pii-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── 4. Related Links ─────────────────────────────── */
        .pii-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .pii-related__eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 8px;
          display: block;
        }

        .pii-related__heading {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 28px;
        }

        .pii-related__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .pii-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 768px) and (max-width: 1023px) {
          .pii-related__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .pii-related__card {
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
        .pii-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .pii-related__card-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
        }

        .pii-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
          flex: 1;
        }

        .pii-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── 5. CTA Strip ─────────────────────────────────── */
        .pii-cta {
          padding: clamp(56px, 7vw, 96px) 0;
          background-color: var(--c-bg-dark, #0f1130);
        }

        .pii-cta__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .pii-cta__title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          max-width: 640px;
        }

        .pii-cta__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 8px;
          max-width: 560px;
        }

        .pii-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border: none;
          transition: background-color 0.2s, color 0.2s;
        }
        .pii-cta__btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .pii-hero { padding-top: 48px; }
          .pii-hero__title { font-size: 28px; }
          .pii-hero__lead { font-size: 16px; }
          .pii-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .pii-body p,
          .pii-body li { font-size: 16px; }
          .pii-body h2 { padding-top: 28px; }
          .pii-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .pii-body table::-webkit-scrollbar { display: none; }
          .pii-cta__inner { gap: 10px; }
          .pii-cta__title { font-size: 24px; }
          .pii-cta__desc { font-size: 15px; }
        }
      `}</style>

      <div className="pii-root">

        {/* ── 1. Article Hero ── */}
        <section className="pii-hero">
          <div className="pii-container">
            <a href={backHref} className="pii-hero__back">{backLabel}</a>
            <h1 className="pii-hero__title">{title}</h1>
            <p className="pii-hero__lead">{lead}</p>
            <div className="pii-hero__meta">
              <span className="pii-meta__chip">{category}</span>
              <span className="pii-meta__sep" aria-hidden="true" />
              <span className="pii-meta__time">{readTime}</span>
              <span className="pii-meta__sep" aria-hidden="true" />
              <span className="pii-meta__date">{dateUpdated}</span>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="pii-tldr-wrap">
          <div className="pii-container">
            <div className="pii-tldr">
              <div className="pii-tldr__label">{tldrLabel}</div>
              <p className="pii-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="pii-body-wrap">
          <div className="pii-container">
            <article
              className="pii-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="pii-related">
            <div className="pii-container">
              <span className="pii-related__eyebrow">{relatedSectionLabel}</span>
              <h2 className="pii-related__heading">Related guides</h2>
              <div className="pii-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="pii-related__card">
                    {item.tag && (
                      <span className="pii-related__card-tag">{item.tag}</span>
                    )}
                    <span className="pii-related__card-title">{item.title}</span>
                    <span className="pii-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. CTA Strip ── */}
        <div className="pii-cta">
          <div className="pii-container">
            <div className="pii-cta__inner">
              <h2 className="pii-cta__title">{ctaTitle}</h2>
              {ctaDescription && (
                <p className="pii-cta__desc">{ctaDescription}</p>
              )}
              <a href={ctaHref} className="pii-cta__btn">{ctaLabel}</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticle_PiiGuardrailsVsOperationalDataProtection, {
  // Hero
  backLabel:   { type: ControlType.String, title: "Back Label",    defaultValue: "← Learn" },
  backHref:    { type: ControlType.String, title: "Back URL",      defaultValue: "/learn" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "Why PII Guardrails Don't Make Enterprise AI Work" },
  lead:        { type: ControlType.String, title: "Lead",          defaultValue: "PII guardrails, AI security suites, prompt security gateways — they all do something important. They do not all do the same thing. Here is a direct comparison and a clear answer to where each fits in enterprise AI adoption.", displayTextArea: true },
  category:    { type: ControlType.String, title: "Category",      defaultValue: "COMPARISON · Categories" },
  readTime:    { type: ControlType.String, title: "Read Time",     defaultValue: "11 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated",  defaultValue: "Updated May 2025" },

  // TL;DR
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "Definition · TL;DR" },
  tldrBody:  { type: ControlType.String, title: "TL;DR Body",  defaultValue: "PII guardrails protect identifiable fields at the API or prompt layer. The AI enablement data layer protects structured enterprise data — network logs, configurations, incident records, OT and mission context — using structure-preserving, differential-privacy-based encapsulation. They address adjacent but different layers of the enterprise AI pipeline.", displayTextArea: true },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // SEO
  canonicalUrl:  { type: ControlType.String, title: "Canonical URL",   defaultValue: "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection" },
  datePublished: { type: ControlType.String, title: "Date Published",  defaultValue: "2025-05-01" },

  // Related links
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Continue reading" },
  related1Tag:   { type: ControlType.String, title: "Related 1 Tag",   defaultValue: "Pillar" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Differential privacy for enterprise AI" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/resources/learn/differential-privacy-for-enterprise-llm" },
  related2Tag:   { type: ControlType.String, title: "Related 2 Tag",   defaultValue: "Use case" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "AI on network operations data" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/resources/learn/ai-on-network-operations-data" },
  related3Tag:   { type: ControlType.String, title: "Related 3 Tag",   defaultValue: "Architecture" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "On-prem LLM execution path" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/resources/learn/on-prem-llm-execution-path" },

  // CTA strip
  ctaTitle:       { type: ControlType.String, title: "CTA Title",        defaultValue: "Map your stack against the categories." },
  ctaDescription: { type: ControlType.String, title: "CTA Description",  defaultValue: "30-minute review of where PII guardrails, prompt security, and the AI enablement data layer fit in your AI pipeline.", displayTextArea: true },
  ctaLabel:       { type: ControlType.String, title: "CTA Button Label", defaultValue: "Request a Demo" },
  ctaHref:        { type: ControlType.String, title: "CTA Button URL",   defaultValue: "/request-a-demo" },
})
