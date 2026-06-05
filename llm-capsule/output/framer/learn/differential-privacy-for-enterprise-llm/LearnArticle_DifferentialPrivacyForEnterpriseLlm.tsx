import { addPropertyControls, ControlType } from "framer"

// LearnArticle — Differential Privacy for Enterprise AI
// Article page: /learn/differential-privacy-for-enterprise-llm
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
  related1Title?: string
  related1Href?: string
  related1Tag?: string
  related2Title?: string
  related2Href?: string
  related2Tag?: string
  related3Title?: string
  related3Href?: string
  related3Tag?: string

  // CTA strip
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_BODY_HTML = `
<h2>The problem PII filtering doesn't solve</h2>
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

<h2>Why DP belongs in the context-preserving data layer for AI</h2>
<p>The context-preserving data layer for AI is where regulated operational data crosses from "private" to "usable by an LLM." In a typical PII-only pipeline, the layer detects identifiable fields, replaces them with tokens, forwards the result to the LLM, and restores the tokens after. This works for a customer service chat or a contract review workflow where the sensitive content is mostly individual identifiers.</p>
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
<table>
  <thead>
    <tr>
      <th></th>
      <th>PII filtering / guardrails</th>
      <th>Differential-privacy-based encapsulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Defense level</td>
      <td>Field-level (find / replace identifiable fields)</td>
      <td>Field-level + distributional (bound any single record's influence)</td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>Names, IDs, financial fields, addresses</td>
      <td>+ network logs, configs, OT alerts, clinical &amp; mission context</td>
    </tr>
    <tr>
      <td>Failure mode</td>
      <td>Pattern slips through (structure, sequence, aggregate)</td>
      <td>Risk is bounded and visible via privacy budget</td>
    </tr>
    <tr>
      <td>Typical claim</td>
      <td>"PII removed"</td>
      <td>"Privacy-preserving with defined risk-reduction scope"</td>
    </tr>
    <tr>
      <td>Audit posture</td>
      <td>Detection logs</td>
      <td>Privacy budget, audit trail, governance evidence</td>
    </tr>
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

<h2>Where this fits in the broader context-preserving data layer for AI</h2>
<p>Differential-privacy-based encapsulation is one capability inside the LLM Capsule runtime. The runtime also includes structure-preserving transformation, policy-based marker control, state vault for restoration, and an audit trail. The differential-privacy component makes the capsule defensible against pattern-level inference attacks; the structure-preserving component makes it useful to the LLM; the state vault makes the result restorable to the workflow.</p>
<p>All three together — and the connector lane that plugs them into existing NOC, ticket, OT, EHR, and mission systems — are why LLM Capsule is positioned as an <strong>context-preserving data layer for AI</strong> rather than as a privacy product or PII tool.</p>

<div class="takeaways">
  <div class="takeaways__label">Key takeaways</div>
  <ul>
    <li>PII filtering is field-level. Differential privacy is distributional. Operational data needs both.</li>
    <li>Differential-privacy-based encapsulation is the technical foundation of LLM Capsule, applied during structure-preserving transformation.</li>
    <li>It reduces re-identification, inference, and sensitive context exposure risk — with a defined, auditable scope. It is not an absolute guarantee.</li>
    <li>Privacy budget is workflow-specific and consumed per query. Governance must track it.</li>
    <li>External LLM (Path A) and on-prem local model (Path B) are both supported. Policy decides which workflow uses which.</li>
    <li>Avoid claims like "100% safe", "GDPR guaranteed", "zero risk", "mathematically impossible." Use bounded technical language.</li>
  </ul>
</div>
`

export default function LearnArticle_DifferentialPrivacyForEnterpriseLlm({
  backLabel = "← Learn",
  backHref = "/learn",
  title = "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data",
  lead = "PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI.",
  category = "PILLAR · Differential Privacy",
  readTime = "12 min read",
  dateUpdated = "Updated May 2025",
  tldrLabel = "Definition · TL;DR",
  tldrBody = "Differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI. It transforms regulated operational data into AI-ready context while preserving structure (table layout, log sequence, document hierarchy) and applying differential-privacy-based protection to reduce re-identification, inference, and sensitive context exposure risks. It is a technical protection layer with a defined risk-reduction scope — not a legal guarantee.",
  bodyHtml = DEFAULT_BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm",
  datePublished = "2025-05-01",
  relatedSectionLabel = "Continue reading",
  related1Title = "PII guardrails vs operational data protection",
  related1Href = "/resources/learn/pii-guardrails-vs-operational-data-protection",
  related1Tag = "Comparison",
  related2Title = "AI on network operations data",
  related2Href = "/resources/learn/ai-on-network-operations-data",
  related2Tag = "Use case",
  related3Title = "On-prem LLM execution path",
  related3Href = "/resources/learn/on-prem-llm-execution-path",
  related3Tag = "Architecture",
  ctaTitle = "Ready to apply DP to your AI workflow?",
  ctaDescription = "30-minute review. We map your operational dataset, privacy budget, and execution path policy.",
  ctaLabel = "Request a Demo",
  ctaHref = "/request-a-demo",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href, tag: related1Tag },
    { title: related2Title, href: related2Href, tag: related2Tag },
    { title: related3Title, href: related3Href, tag: related3Tag },
  ].filter((r) => r.title && r.href)

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": lead,
    "author": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "logo": { "@type": "ImageObject", "url": "https://llmcapsule.ai/logo.png" } },
    "datePublished": datePublished,
    "dateModified": "2025-05-05",
    "mainEntityOfPage": canonicalUrl,
    "wordCount": 2700,
  })

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is differential privacy in enterprise AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Differential privacy is a mathematical framework that bounds the influence any single record can have on a derived output. In enterprise AI, it is applied during the encapsulation step of a context-preserving data layer for AI to reduce re-identification, inference, and sensitive context exposure risks when operational data — network logs, configurations, OT manifests, clinical workflows — is transformed into AI-ready context.",
        },
      },
      {
        "@type": "Question",
        "name": "How is differential-privacy-based encapsulation different from PII masking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PII masking detects and replaces personal identifiers — names, IDs, financial fields. Differential-privacy-based encapsulation additionally protects against inference and re-identification across complex operational data such as network logs, incident records, and OT configurations, where structure and aggregate patterns themselves can leak sensitive information. It is a technical protection layer with a defined risk-reduction scope, not a substitute for compliance frameworks.",
        },
      },
      {
        "@type": "Question",
        "name": "Does differential privacy guarantee zero risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Differential privacy is not a legal guarantee or absolute claim. It is a mathematical framework for bounding the contribution of any single record to a derived output, with a tunable parameter that trades utility against privacy. LLM Capsule presents differential-privacy-based encapsulation as a technical protection layer with a defined risk-reduction scope, not as 100 percent safety, GDPR guarantee, or zero risk.",
        },
      },
      {
        "@type": "Question",
        "name": "When should an enterprise use differential-privacy-based protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When the data going into an LLM is operational, structured, and re-identifiable through context — such as network topology with device IDs, incident sequences with site references, OT manifests with asset and zone references, clinical workflows with patient journeys, or mission logs with unit and location references. PII filtering alone cannot adequately protect these classes of data.",
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
        .dp-root {
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
        .dp-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .dp-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .dp-hero__back {
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
        .dp-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .dp-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .dp-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .dp-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
          max-width: 760px;
        }

        .dp-meta__chip {
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

        .dp-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .dp-meta__time,
        .dp-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .dp-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .dp-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .dp-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .dp-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .dp-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .dp-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .dp-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .dp-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .dp-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .dp-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .dp-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .dp-body p:last-child { margin-bottom: 0; }

        .dp-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .dp-body ul,
        .dp-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .dp-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .dp-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .dp-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .dp-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .dp-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: normal;
        }

        .dp-body blockquote strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Inline code */
        .dp-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .dp-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .dp-body pre::-webkit-scrollbar { display: none; }

        .dp-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .dp-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .dp-body th,
        .dp-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .dp-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .dp-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) */
        .dp-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
        }

        .dp-body .callout strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Takeaways box */
        .dp-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .dp-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .dp-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .dp-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .dp-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .dp-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body */
        .dp-body .la-btn {
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
        .dp-body .la-btn:hover { border-bottom: none; }

        .dp-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .dp-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── 4. Related Links ─────────────────────────────── */
        .dp-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .dp-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .dp-related__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .dp-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 768px) and (max-width: 1023px) {
          .dp-related__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .dp-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .dp-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .dp-related__card-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
        }

        .dp-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
          flex: 1;
        }

        .dp-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── 5. CTA Strip ─────────────────────────────────── */
        .dp-cta {
          padding: clamp(56px, 7vw, 96px) 0;
          background-color: var(--c-bg-dark, #0f1130);
        }

        .dp-cta__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .dp-cta__title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          max-width: 640px;
        }

        .dp-cta__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 8px;
          max-width: 560px;
        }

        .dp-cta__btn {
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
        .dp-cta__btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .dp-hero { padding-top: 48px; }
          .dp-hero__title { font-size: 28px; }
          .dp-hero__lead { font-size: 16px; }
          .dp-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .dp-body p,
          .dp-body li { font-size: 16px; }
          .dp-body h2 { padding-top: 28px; }
          .dp-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .dp-body table::-webkit-scrollbar { display: none; }
          .dp-cta__inner { gap: 10px; }
          .dp-cta__title { font-size: 24px; }
          .dp-cta__desc { font-size: 15px; }
        }
      `}</style>

      <div className="dp-root">

        {/* ── 1. Article Hero ── */}
        <section className="dp-hero">
          <div className="dp-container">
            <a href={backHref} className="dp-hero__back">{backLabel}</a>
            <h1 className="dp-hero__title">{title}</h1>
            <p className="dp-hero__lead">{lead}</p>
            <div className="dp-hero__meta">
              <span className="dp-meta__chip">{category}</span>
              <span className="dp-meta__sep" aria-hidden="true" />
              <span className="dp-meta__time">{readTime}</span>
              <span className="dp-meta__sep" aria-hidden="true" />
              <span className="dp-meta__date">{dateUpdated}</span>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="dp-tldr-wrap">
          <div className="dp-container">
            <div className="dp-tldr">
              <div className="dp-tldr__label">{tldrLabel}</div>
              <p className="dp-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="dp-body-wrap">
          <div className="dp-container">
            <article
              className="dp-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="dp-related">
            <div className="dp-container">
              <div className="dp-related__label">{relatedSectionLabel}</div>
              <div className="dp-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="dp-related__card">
                    {item.tag && <span className="dp-related__card-tag">{item.tag}</span>}
                    <span className="dp-related__card-title">{item.title}</span>
                    <span className="dp-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. CTA Strip ── */}
        <div className="dp-cta">
          <div className="dp-container">
            <div className="dp-cta__inner">
              <h2 className="dp-cta__title">{ctaTitle}</h2>
              {ctaDescription && (
                <p className="dp-cta__desc">{ctaDescription}</p>
              )}
              <a href={ctaHref} className="dp-cta__btn">{ctaLabel}</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticle_DifferentialPrivacyForEnterpriseLlm, {
  // Hero
  backLabel:   { type: ControlType.String, title: "Back Label",    defaultValue: "← Learn" },
  backHref:    { type: ControlType.String, title: "Back URL",      defaultValue: "/learn" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data" },
  lead:        { type: ControlType.String, title: "Lead",          defaultValue: "PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI.", displayTextArea: true },
  category:    { type: ControlType.String, title: "Category",      defaultValue: "PILLAR · Differential Privacy" },
  readTime:    { type: ControlType.String, title: "Read Time",     defaultValue: "12 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated",  defaultValue: "Updated May 2025" },

  // TL;DR
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "Definition · TL;DR" },
  tldrBody:  { type: ControlType.String, title: "TL;DR Body",  defaultValue: "Differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI. It transforms regulated operational data into AI-ready context while preserving structure (table layout, log sequence, document hierarchy) and applying differential-privacy-based protection to reduce re-identification, inference, and sensitive context exposure risks. It is a technical protection layer with a defined risk-reduction scope — not a legal guarantee.", displayTextArea: true },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // SEO
  canonicalUrl:  { type: ControlType.String, title: "Canonical URL",   defaultValue: "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm" },
  datePublished: { type: ControlType.String, title: "Date Published",  defaultValue: "2025-05-01" },

  // Related links
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Continue reading" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "PII guardrails vs operational data protection" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/resources/learn/pii-guardrails-vs-operational-data-protection" },
  related1Tag:   { type: ControlType.String, title: "Related 1 Tag",   defaultValue: "Comparison" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "AI on network operations data" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/resources/learn/ai-on-network-operations-data" },
  related2Tag:   { type: ControlType.String, title: "Related 2 Tag",   defaultValue: "Use case" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "On-prem LLM execution path" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/resources/learn/on-prem-llm-execution-path" },
  related3Tag:   { type: ControlType.String, title: "Related 3 Tag",   defaultValue: "Architecture" },

  // CTA strip
  ctaTitle:       { type: ControlType.String, title: "CTA Title",        defaultValue: "Ready to apply DP to your AI workflow?" },
  ctaDescription: { type: ControlType.String, title: "CTA Description",  defaultValue: "30-minute review. We map your operational dataset, privacy budget, and execution path policy.", displayTextArea: true },
  ctaLabel:       { type: ControlType.String, title: "CTA Button Label", defaultValue: "Request a Demo" },
  ctaHref:        { type: ControlType.String, title: "CTA Button URL",   defaultValue: "/request-a-demo" },
})
