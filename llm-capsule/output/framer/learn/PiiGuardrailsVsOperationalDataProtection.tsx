// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component.
// No external imports — all LearnArticle logic inlined for Framer cross-folder compatibility.

const BODY_HTML = `<h2>Why this comparison matters</h2>
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
<table class="compare-table">
  <thead><tr><th></th><th>PII guardrails</th><th>AI security / prompt</th><th class="us">LLM Capsule</th></tr></thead>
  <tbody>
    <tr><td>Layer</td><td>API wrapper</td><td>Prompt / gateway</td><td class="us-cell">AI enablement data layer</td></tr>
    <tr><td>Scope</td><td>Names, IDs, fields</td><td>Prompt threats + PII</td><td class="us-cell">Operational data + governance</td></tr>
    <tr><td>Method</td><td>Detect &amp; mask</td><td>Filter / sanitize prompts</td><td class="us-cell">Structure-preserving + DP-based encapsulation</td></tr>
    <tr><td>Plug into legacy systems</td><td>No</td><td>No</td><td class="us-cell">Yes (NOC, Ticket, OT, EHR, Mission)</td></tr>
    <tr><td>On-prem local execution</td><td>No</td><td>Limited</td><td class="us-cell">Yes (Path B)</td></tr>
    <tr><td>Restoration</td><td>One-way</td><td>One-way</td><td class="us-cell">Two-way via state vault</td></tr>
    <tr><td>Governance</td><td>Detection logs</td><td>Threat logs</td><td class="us-cell">Policy · audit · access · compliance</td></tr>
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
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>PII guardrails and the AI enablement data layer address different layers of the enterprise AI pipeline.</li>
    <li>PII guardrails, AI security suites, and prompt security gateways — each is strong in its own scope (risk control, policy enforcement, prompt-level protection). None of them transforms structured operational data with differential-privacy-based encapsulation.</li>
    <li>The buyer test: if the sensitive content is structural (logs, configs, OT, clinical, mission), you need an AI enablement data layer, not just a guardrail.</li>
    <li>The categories compose. The mistake is treating PII guardrails as if they covered operational data.</li>
    <li>LLM Capsule provides plug-in to legacy systems, two execution paths, two-way restoration, and full governance — alongside, not instead of, PII guardrails where they are needed.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Are PII guardrails the same as the AI enablement data layer?", "acceptedAnswer": { "@type": "Answer", "text": "No. PII guardrails detect and mask personal identifiers — names, IDs, financial fields. The AI enablement data layer covers complex enterprise data such as network logs, incident records, configurations, OT manifests, and clinical or mission context. Operational data leaks information through structure, sequence, and aggregate pattern, not just through identifiable fields. Field-level masking alone does not protect it." } }, { "@type": "Question", "name": "How does LLM Capsule compare with PII guardrail and AI security suite products?", "acceptedAnswer": { "@type": "Answer", "text": "PII guardrail and AI security suite products are optimized for risk control and policy enforcement at the API or prompt level — prompt injection defense, jailbreak resistance, and PII detection. LLM Capsule operates at a different layer: it transforms operational data into AI-ready capsules with differential-privacy-based protection, plugs into existing enterprise systems beyond the API gateway, preserves operational structure for AI to consume, and restores outputs back into the originating workflow. The two categories are adjacent and often complementary — they address different stages of the enterprise AI pipeline." } }, { "@type": "Question", "name": "When is a PII guardrail enough?", "acceptedAnswer": { "@type": "Answer", "text": "When the workflow's sensitive content is mostly identifiable individual fields — customer names, phone numbers, financial identifiers — and the surrounding context is not itself sensitive. Customer chat, contract review, and document summarization are common cases. When the context (network topology, incident sequence, OT alarms, mission rhythm) is the sensitive part, PII guardrails alone are not sufficient." } } ] }`

export default function PiiGuardrailsVsOperationalDataProtection() {
  // ── Page-specific values (replaces LearnArticle Props) ──
  const backLabel = "← Learn"
  const backHref = "/resources/learn"
  const title = "Why PII Guardrails Don't Make Enterprise AI Work"
  const lead = "PII guardrails, AI security suites, prompt security gateways — they all do something important. They do not all do the same thing. Here is a direct comparison and a clear answer to where each fits in enterprise AI adoption."
  const category = "COMPARISON · Categories"
  const readTime = "11 min read"
  const dateUpdated = "Updated May 2025"
  const tldrLabel = "TL;DR"
  const tldrBody = ""
  const bodyHtml = BODY_HTML
  const canonicalUrl = "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection"
  const datePublished = "2025-05-01"
  const dateModified = "2025-05-01"
  const inLanguage = "en"
  const breadcrumbLabel = "Why PII Guardrails Don't Make Enterprise AI Work"
  const faqJsonLd = FAQ_JSON_LD
  const relatedSectionLabel = "Related articles"
  const related1Title = "Differential privacy for enterprise LLM"
  const related1Href = "/resources/learn/differential-privacy-for-enterprise-llm"
  const related2Title = "AI on network operations data"
  const related2Href = "/resources/learn/ai-on-network-operations-data"
  const related3Title = "On-prem LLM execution path"
  const related3Href = "/resources/learn/on-prem-llm-execution-path"
  const related4Title = ""
  const related4Href = ""

  // ── BEGIN inlined LearnArticle body ──
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
  // ── END inlined LearnArticle body ──
}
