// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component.
// No external imports — all LearnArticle logic inlined for Framer cross-folder compatibility.

const BODY_HTML = `<h2>The problem PII filtering doesn't solve</h2>
<p>Most enterprise teams hit the same wall when they try to use external LLMs on real internal data: the data passes the PII filter, but the workflow still breaks. The names are gone. The phone numbers are gone. But the network configuration is still recognizable. The sequence of incidents still identifies the customer segment. The OT alert pattern still betrays the plant.</p>
<p>This is the gap differential privacy was designed to address. PII filtering is a <em>field-level</em> defense — find the pattern that looks like a name, replace it. Differential privacy is a <em>distributional</em> defense — bound how much any single record can influence what comes out. When the data is operational, structured, and re-identifiable through context, you need both.</p>
<div class="callout"><strong>Operational data is not a list of PII fields.</strong> Network logs, incident records, configuration trees, OT manifests, clinical workflows, and mission logs leak information through structure, sequence, and aggregate pattern — not just through identifiable fields.</div>

<h2>What differential privacy actually is</h2>
<p>Differential privacy (DP) is a mathematical framework introduced by Cynthia Dwork and colleagues in 2006. The intuition is simple: a computation is differentially private if the outcome would be almost the same whether or not any single record had been included. The "almost" is parameterized by epsilon (ε) — smaller epsilon, stronger privacy, lower utility.</p>
<p>In practice, DP is implemented by adding calibrated noise to outputs, queries, or transformations, with the noise scale determined by the sensitivity of the function and the chosen privacy budget. Done correctly, it gives you a quantitative bound on what an attacker could learn about any individual record from the output, even with arbitrary background knowledge.</p>
<h3>What DP is not</h3>
<ul>
  <li>It is not a yes/no guarantee. It is a tunable parameter that trades utility for privacy risk.</li>
  <li>It does not, on its own, guarantee compliance with GDPR, HIPAA, or any specific regulation.</li>
  <li>It does not eliminate risk. It bounds and characterizes risk so engineers and compliance teams can reason about it.</li>
</ul>

<h2>Why DP belongs in the AI enablement data layer</h2>
<p>The AI enablement data layer is where regulated operational data crosses from "private" to "usable by an LLM." In a typical PII-only pipeline, the layer detects identifiable fields, replaces them with tokens, forwards the result to the LLM, and restores the tokens after. This works for a customer service chat or a contract review workflow where the sensitive content is mostly individual identifiers.</p>
<p>It does not work when the sensitive information is the network topology of a national carrier, the alarm sequence preceding an outage, the configuration drift between two PLCs, or the operational rhythm of a hospital ward. In those cases, the field-level masks pass, but the underlying patterns are still legible to anyone who reconstructs context.</p>
<p>Differential-privacy-based encapsulation adds a distributional protection layer to the field-level mask. It is applied during the encapsulation step — before the data reaches the LLM — and is calibrated against the operational data's sensitivity profile.</p>

<h2>How LLM Capsule applies differential privacy</h2>
<p>LLM Capsule applies differential-privacy-based protection within a broader transformation called <strong>structure-preserving encapsulation</strong>. The full pipeline:</p>
<ol>
  <li><strong>Ingest</strong> — operational data enters the Capsule Runtime via the connector lane (NOC plug-in, ticket webhook, OT log tap, or file watch).</li>
  <li><strong>Identify confidentiality markers</strong> — beyond generic PII: network identifiers, system operational logs, OT/asset references, mission and clinical context.</li>
  <li><strong>Apply structure-preserving transformation</strong> — table layout, log sequence, document hierarchy, and configuration tree are preserved so the LLM can still reason over them.</li>
  <li><strong>Apply differential-privacy-based protection</strong> — calibrated against the policy's privacy budget for that workflow. epsilon-DP active, Laplace noise injection, k-anonymity enforcement, semantic tokenization, free-text NER masking.</li>
  <li><strong>Route to execution path</strong> — Path A (external approved LLM, capsule data only) or Path B (on-prem local lightweight model, zero external transmission).</li>
  <li><strong>Restore via state vault</strong> — the LLM output is rehydrated with the original operational identifiers and inserted back into the workflow (RCA, ticket update, runbook, response draft).</li>
</ol>
<p>The key claim is bounded: <em>differential-privacy-based encapsulation reduces re-identification, inference, and sensitive context exposure risk for the operational dataset</em>. It is not a promise of zero risk. It is a defined technical protection layer with a privacy budget visible to governance.</p>

<h2>DP vs PII filtering: side by side</h2>
<table class="compare-table">
  <thead><tr><th></th><th>PII filtering / guardrails</th><th class="us">Differential-privacy-based encapsulation</th></tr></thead>
  <tbody>
    <tr><td>Defense level</td><td>Field-level (find / replace identifiable fields)</td><td class="us-cell">Field-level + distributional (bound any single record's influence)</td></tr>
    <tr><td>Scope</td><td>Names, IDs, financial fields, addresses</td><td class="us-cell">+ network logs, configs, OT alerts, clinical &amp; mission context</td></tr>
    <tr><td>Failure mode</td><td>Pattern slips through (structure, sequence, aggregate)</td><td class="us-cell">Risk is bounded and visible via privacy budget</td></tr>
    <tr><td>Typical claim</td><td>"PII removed"</td><td class="us-cell">"Privacy-preserving with defined risk-reduction scope"</td></tr>
    <tr><td>Audit posture</td><td>Detection logs</td><td class="us-cell">Privacy budget, audit trail, governance evidence</td></tr>
  </tbody>
</table>

<h2>What enterprises should ask before deploying DP at the AI layer</h2>
<ol>
  <li><strong>What is the privacy budget per workflow?</strong> Different workflows can carry different epsilon values. NOC analytics may tolerate higher utility. Mission summaries may demand stronger protection.</li>
  <li><strong>Where is the budget consumed?</strong> Each query against the same dataset consumes part of the budget. The execution layer should track this and surface it to governance.</li>
  <li><strong>What is the structure-preservation requirement?</strong> If the LLM needs to reason over the topology, you cannot destroy it with naive noise injection. Structure-preserving encapsulation addresses this.</li>
  <li><strong>How is the protection auditable?</strong> Differential privacy is meaningful only if the parameters and budgets are documented, traceable, and tied to policy.</li>
</ol>

<h2>External LLM use vs on-prem execution</h2>
<p>Differential-privacy-based encapsulation underwrites both execution paths in LLM Capsule, but the operational meaning differs:</p>
<blockquote><strong>Path A · External approved LLM</strong> — Capsule data is transmitted to an approved external LLM endpoint. Raw operational data does not leave the enterprise environment. The DP layer reduces inference risk on the capsule itself.</blockquote>
<blockquote><strong>Path B · On-prem local lightweight model</strong> — Capsule execution happens entirely inside the enterprise environment. No external transmission. Used for air-gapped, classified, or strictly regulated operations.</blockquote>
<p>The choice is a policy decision driven by the workflow's regulatory profile, data sovereignty constraints, and customer commitments. The execution layer enables both; governance enforces which one applies where.</p>

<h2>What about absolute claims like "100% safe" or "GDPR guaranteed"?</h2>
<p>Avoid them. Differential privacy is a strong, well-studied framework, but it is not magic. A vendor claim of "mathematically impossible to reconstruct" oversimplifies the framework and invites verification attack. The honest framing is:</p>
<ul>
  <li>"Privacy-preserving with a defined risk-reduction scope"</li>
  <li>"Bounded inference risk under the policy's privacy budget"</li>
  <li>"No raw operational data exposure to external LLMs (Path A)"</li>
  <li>"Zero external exposure in local execution path (Path B)"</li>
</ul>
<p>These are claims the security and legal teams of regulated buyers can engage with. Absolute claims are claims that get challenged.</p>

<h2>Where this fits in the broader AI enablement data layer</h2>
<p>Differential-privacy-based encapsulation is one capability inside the LLM Capsule runtime. The runtime also includes structure-preserving transformation, policy-based marker control, state vault for restoration, and an audit trail. The differential-privacy component makes the capsule defensible against pattern-level inference attacks; the structure-preserving component makes it useful to the LLM; the state vault makes the result restorable to the workflow.</p>
<p>All three together — and the connector lane that plugs them into existing NOC, ticket, OT, EHR, and mission systems — are why LLM Capsule is positioned as an <strong>AI enablement data layer</strong> rather than as a privacy product or PII tool.</p>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>PII filtering is field-level. Differential privacy is distributional. Operational data needs both.</li>
    <li>Differential-privacy-based encapsulation is the technical foundation of LLM Capsule, applied during structure-preserving transformation.</li>
    <li>It reduces re-identification, inference, and sensitive context exposure risk — with a defined, auditable scope. It is not an absolute guarantee.</li>
    <li>Privacy budget is workflow-specific and consumed per query. Governance must track it.</li>
    <li>External LLM (Path A) and on-prem local model (Path B) are both supported. Policy decides which workflow uses which.</li>
    <li>Avoid claims like "100% safe", "GDPR guaranteed", "zero risk", "mathematically impossible." Use bounded technical language.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is differential privacy in enterprise AI?", "acceptedAnswer": { "@type": "Answer", "text": "Differential privacy is a mathematical framework that bounds the influence any single record can have on a derived output. In enterprise AI, it is applied during the encapsulation step of an AI enablement data layer to reduce re-identification, inference, and sensitive context exposure risks when operational data — network logs, configurations, OT manifests, clinical workflows — is transformed into AI-ready context." } }, { "@type": "Question", "name": "How is differential-privacy-based encapsulation different from PII masking?", "acceptedAnswer": { "@type": "Answer", "text": "PII masking detects and replaces personal identifiers — names, IDs, financial fields. Differential-privacy-based encapsulation additionally protects against inference and re-identification across complex operational data such as network logs, incident records, and OT configurations, where structure and aggregate patterns themselves can leak sensitive information. It is a technical protection layer with a defined risk-reduction scope, not a substitute for compliance frameworks." } }, { "@type": "Question", "name": "Does differential privacy guarantee zero risk?", "acceptedAnswer": { "@type": "Answer", "text": "No. Differential privacy is not a legal guarantee or absolute claim. It is a mathematical framework for bounding the contribution of any single record to a derived output, with a tunable parameter that trades utility against privacy. LLM Capsule presents differential-privacy-based encapsulation as a technical protection layer with a defined risk-reduction scope, not as 100 percent safety, GDPR guarantee, or zero risk." } }, { "@type": "Question", "name": "When should an enterprise use differential-privacy-based protection?", "acceptedAnswer": { "@type": "Answer", "text": "When the data going into an LLM is operational, structured, and re-identifiable through context — such as network topology with device IDs, incident sequences with site references, OT manifests with asset and zone references, clinical workflows with patient journeys, or mission logs with unit and location references. PII filtering alone cannot adequately protect these classes of data." } } ] }`

export default function DifferentialPrivacyForEnterpriseLlm() {
  // ── Page-specific values (replaces LearnArticle Props) ──
  const backLabel = "← Learn"
  const backHref = "/resources/learn"
  const title = "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data"
  const lead = "PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the AI enablement data layer."
  const category = "PILLAR · Differential Privacy"
  const readTime = "12 min read"
  const dateUpdated = "Updated May 2025"
  const tldrLabel = "TL;DR"
  const tldrBody = ""
  const bodyHtml = BODY_HTML
  const canonicalUrl = "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm"
  const datePublished = "2025-05-01"
  const dateModified = "2025-05-01"
  const inLanguage = "en"
  const breadcrumbLabel = "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data"
  const faqJsonLd = FAQ_JSON_LD
  const relatedSectionLabel = "Related articles"
  const related1Title = "PII guardrails vs operational data protection"
  const related1Href = "/resources/learn/pii-guardrails-vs-operational-data-protection"
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
