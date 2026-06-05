import { addPropertyControls, ControlType } from "framer"

// LearnArticle — How to Deploy AI in a Telecom NOC Without Exposing Network Data
// Article page: /learn/telecom-noc-ai-deployment
// Uses the LearnArticle shared template structure (Hero → TL;DR → Body → Related)
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
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string

  // CTA strip
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_BODY_HTML = `
<h2>The NOC AI adoption barrier</h2>
<p>Every Tier-1 telecom operator wants AI in the NOC. The use cases are obvious: faster RCA, automated ticket triage, customer-impact analysis, network anomaly detection, runbook drafting. The economics are obvious too — 30-50% reduction in MTTR, 4-8x throughput on incident review, deflected escalations.</p>
<p>But the data is the problem. NOC tickets carry subscriber identities, device IDs, circuit IDs, IP ranges, call records, and network configurations. Field-level PII guardrails detect names and emails, but they don't see the operational data — the alarm sequences, the topology graphs, the SLA risk scores, the BSS records — that real NOC analysis depends on. And the regulatory profile (national telecom regulator + GDPR + sovereign data requirements) means raw operational data cannot be transmitted to an external LLM endpoint.</p>
<p>Most operators stall here. Pilot stays pilot. AI projects never demonstrate value. Shadow AI emerges — engineers paste anonymized snippets into ChatGPT, getting half-useful answers without governance.</p>

<h2>What the context-preserving data layer for AI changes</h2>
<p>An <a href="/glossary/context-preserving-data-layer">context-preserving data layer for AI</a> like LLM Capsule sits between the NOC's existing systems (ticket platform, NOC console, log viewer, runbook DB) and the LLM endpoint. It does four things:</p>
<ol>
  <li>Reads NOC tickets and operational data from existing systems via REST/gRPC/JDBC connectors — no migration.</li>
  <li>Encapsulates sensitive elements locally using <a href="/glossary/structure-preserving-encapsulation">structure-preserving encapsulation</a> with <a href="/glossary/differential-privacy">differential-privacy-based protection</a>. Subscriber IDs, device IDs, circuit IDs, IP ranges become tokens; the document structure (table relationships, alarm sequence, hierarchy) survives intact.</li>
  <li>Routes the capsule (only the capsule) to the approved LLM endpoint or, for stricter workflows, an on-prem local model.</li>
  <li>Restores the LLM output back into the originating ticket using a local token vault. The end-user sees a ticket with real subscriber IDs and device IDs and an AI-generated RCA recommendation — never knowing the LLM saw only the capsule.</li>
</ol>

<h2>Five operational data categories the data layer protects</h2>
<p>Telecom NOC operations carry data that PII guardrails can't see. The data layer must handle all five:</p>
<ul>
  <li><strong>Subscriber data</strong> — MSISDN, IMSI, IMEI, customer name, account number, billing address, plan tier</li>
  <li><strong>Network identifiers</strong> — DEVICE_ID, SITE_ID, CIRCUIT_ID, RAN cell ID, IP ranges, VLAN tags, MAC addresses</li>
  <li><strong>Operational sequences</strong> — alarm chains, outage history, RCA pattern, escalation paths, ticket dependencies</li>
  <li><strong>SLA / business context</strong> — enterprise customer name, contract terms, SLA tier, business impact estimates</li>
  <li><strong>Configuration data</strong> — device configs, routing tables, BGP peering, firewall rules, network topology</li>
</ul>

<h2>Five-step deployment pattern</h2>

<h3>Step 1 — Connector inventory</h3>
<p>Identify the systems the data layer needs to read from and write to. Typical telecom inventory: ServiceNow (ITSM), Remedy / Jira (ticket), Splunk / Grafana / proprietary (logs &amp; alarms), internal NOC console, OSS configuration DB, BSS subscriber DB, runbook wiki. LLM Capsule provides REST, gRPC, JDBC, and Graph API connectors. Most deployments need 4-6 connectors active.</p>

<h3>Step 2 — Marker policy definition</h3>
<p>Define the markers that must be encapsulated. Start with the 11-marker starter pack (subscriber IDs, network identifiers, internal codenames, etc.). Add custom markers for operator-specific identifiers — internal site naming conventions, service tier codes, regulatory reference numbers. Define the policy version, scope (NOC team / customer ops / network engineering), and RBAC. Time-shift markers: yesterday it was network logs, tomorrow it might be M&amp;A-related codes during a merger.</p>

<h3>Step 3 — Path selection</h3>
<p>Most NOC workflows can use Path A — external approved LLM with capsule data only. Strict workflows (lawful intercept, regulator-restricted networks, classified subscriber segments) use Path B — on-prem local lightweight model. Path is policy-driven per workflow, not per deployment, so a single Capsule instance can route different ticket types to different paths.</p>

<h3>Step 4 — Workflow integration</h3>
<p>Wire LLM Capsule into the NOC ticket lifecycle. Three integration points work well: (1) on ticket creation — auto-generate initial classification + recommendation; (2) on ticket investigation — analyst-triggered RCA generation; (3) on ticket closure — auto-draft post-mortem. The restored output appears in the originating ticket UI; analysts work in their familiar tool.</p>

<h3>Step 5 — Audit + governance</h3>
<p>Configure the audit dashboard. Every encapsulation, processing, and restoration event lands in the audit log with policy version, model used, latency, and detection summary. Set up monthly governance review with the operator's compliance team. Aligned with GDPR, telecom regulator requirements, and SOX where the operator is publicly listed.</p>

<h2>Real customer outcomes</h2>
<p>SK Telecom adopted LLM Capsule for NOC RCA generation and customer-impact analysis. Subscriber data, call records, IP addresses, and network configs are de-identified before any LLM call.</p>
<p>Deutsche Telekom recognized LLM Capsule in <strong>T Challenge 2026 — Top 12 in Data Security &amp; Governance</strong>. The challenge specifically evaluates context-preserving data layer for AI under sovereign data and EU regulatory constraints. LLM Capsule's structure-preserving capsule + DP protection + on-prem execution path matched the operator-grade requirements.</p>

<h2>Common deployment pitfalls</h2>
<ul>
  <li><strong>Treating it as a security tool.</strong> LLM Capsule is a context-preserving data layer for AI, not a security gateway. Position the project as "AI for the NOC" — not "AI risk reduction."</li>
  <li><strong>Skipping marker definition.</strong> Operators that lean on the starter pack alone leave operator-specific identifiers exposed. Define your custom markers in week 1.</li>
  <li><strong>Single execution path.</strong> Deploying only Path A leaves stricter workflows blocked. Both paths should be live before pilot exit.</li>
  <li><strong>Audit treated as afterthought.</strong> Telecom regulators expect chain-of-custody for AI interactions. The audit dashboard must be live from day 1, not bolted on at production.</li>
</ul>

<h2>Getting started</h2>
<p>The fastest path: bring one real NOC ticket, one operational data sample, and one regulatory constraint (national telecom regulator, GDPR, sovereign region). LLM Capsule deploys on a sample workflow within 30 minutes and generates an evaluation report on detection accuracy, restoration rate, and policy fit.</p>
<p><a href="/request-a-demo" class="tnoc-btn tnoc-btn--primary">Request a NOC AI demo</a></p>

<h2>Related</h2>
<ul>
  <li><a href="/learn/ai-on-network-operations-data">AI on network operations data</a></li>
  <li><a href="/learn/on-prem-llm-execution-path">On-premise LLM execution path</a></li>
  <li><a href="/glossary/context-preserving-data-layer">Glossary: context-preserving data layer for AI</a></li>
  <li><a href="/solutions">Solutions: Telecom industry deep dive</a></li>
</ul>
`

export default function LearnArticle_TelecomNocAiDeployment({
  backLabel = "← Learn",
  backHref = "/learn",
  title = "How to deploy AI in a telecom NOC without exposing network data",
  lead = "A practical guide for telecom operators bringing AI into the NOC, OSS/BSS, and customer operations — without exposing subscriber identities, call records, IP addresses, or network configurations.",
  category = "Industry · Telecom",
  readTime = "12 min read",
  dateUpdated = "Updated April 2025",
  tldrLabel = "TL;DR — Definition",
  tldrBody = "A telecom NOC AI deployment uses a context-preserving data layer for AI to encapsulate subscriber identities, network identifiers (DEVICE_ID, SITE_ID, CIRCUIT_ID), call records, IP addresses, and network configurations locally before any data reaches an external LLM. The LLM generates RCA, customer-impact analysis, and ticket recommendations on the protected capsule; outputs are restored back into the originating ticket inside the operator's environment. Validated at SK Telecom and recognized at Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance.",
  bodyHtml = DEFAULT_BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/learn/telecom-noc-ai-deployment",
  datePublished = "2025-04-15",
  relatedSectionLabel = "Continue reading",
  related1Title = "AI on network operations data",
  related1Href = "/learn/ai-on-network-operations-data",
  related2Title = "On-premise LLM execution path",
  related2Href = "/learn/on-prem-llm-execution-path",
  related3Title = "Glossary: context-preserving data layer for AI",
  related3Href = "/glossary/context-preserving-data-layer",
  related4Title = "",
  related4Href = "",
  ctaTitle = "NOC AI without sending the network outside.",
  ctaDescription = "30-minute review. Bring one NOC ticket and one regulatory constraint — we'll show how Capsule deploys on a sample workflow.",
  ctaLabel = "Request a NOC AI demo",
  ctaHref = "/request-a-demo",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": "Step-by-step deployment guide for telecom operators using LLM Capsule. Covers NOC ticket flow, RCA generation, subscriber data protection, and on-premise execution.",
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG" },
    "datePublished": datePublished,
    "dateModified": "2025-04-15",
    "mainEntityOfPage": canonicalUrl,
    "keywords": "telecom AI, NOC AI, AI for regulated industries, sovereign AI",
  })

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why can't telecom operators send NOC data directly to an external LLM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NOC tickets carry subscriber identities, device IDs, circuit IDs, IP ranges, call records, and network configurations. Field-level PII guardrails detect names and emails but miss operational data — alarm sequences, topology graphs, SLA risk scores — that real NOC analysis depends on. National telecom regulators, GDPR, and sovereign data requirements prohibit transmitting raw operational data to an external LLM endpoint.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the five-step deployment pattern for telecom NOC AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Step 1: Connector inventory — identify all systems the data layer reads from and writes to. Step 2: Marker policy definition — define which identifiers must be encapsulated. Step 3: Path selection — choose Path A (external approved LLM) or Path B (on-prem local model) per workflow. Step 4: Workflow integration — wire LLM Capsule into ticket creation, investigation, and closure. Step 5: Audit + governance — configure the audit dashboard from day 1.",
        },
      },
      {
        "@type": "Question",
        "name": "Has LLM Capsule been validated in a telecom environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SK Telecom adopted LLM Capsule for NOC RCA generation and customer-impact analysis. Deutsche Telekom recognized LLM Capsule at T Challenge 2026, finishing Top 12 in the Data Security & Governance category. The challenge evaluated context-preserving data layer for AI under sovereign data and EU regulatory constraints.",
        },
      },
      {
        "@type": "Question",
        "name": "What are the most common deployment pitfalls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Four common pitfalls: treating LLM Capsule as a security tool rather than a context-preserving data layer for AI; skipping custom marker definition beyond the starter pack; deploying only one execution path; and treating the audit dashboard as an afterthought. Telecom regulators expect chain-of-custody for AI interactions from day 1.",
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
        .tnoc-root {
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
        .tnoc-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .tnoc-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tnoc-hero__back {
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
        .tnoc-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .tnoc-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .tnoc-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .tnoc-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
          max-width: 760px;
        }

        .tnoc-meta__chip {
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

        .tnoc-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .tnoc-meta__time,
        .tnoc-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .tnoc-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tnoc-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .tnoc-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .tnoc-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .tnoc-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .tnoc-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .tnoc-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .tnoc-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .tnoc-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .tnoc-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .tnoc-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .tnoc-body p:last-child { margin-bottom: 0; }

        .tnoc-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .tnoc-body ul,
        .tnoc-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .tnoc-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .tnoc-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .tnoc-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .tnoc-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .tnoc-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .tnoc-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .tnoc-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .tnoc-body pre::-webkit-scrollbar { display: none; }

        .tnoc-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .tnoc-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .tnoc-body th,
        .tnoc-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .tnoc-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .tnoc-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) */
        .tnoc-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .tnoc-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .tnoc-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .tnoc-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .tnoc-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .tnoc-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .tnoc-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .tnoc-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body */
        .tnoc-btn {
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
        .tnoc-btn:hover { border-bottom: none; }

        .tnoc-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .tnoc-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── 4. Related Links ─────────────────────────────── */
        .tnoc-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .tnoc-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .tnoc-related__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .tnoc-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 768px) and (max-width: 1023px) {
          .tnoc-related__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .tnoc-related__card {
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
        .tnoc-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .tnoc-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .tnoc-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── 5. CTA Strip ─────────────────────────────────── */
        .tnoc-cta {
          padding: clamp(56px, 7vw, 96px) 0;
          background-color: var(--c-bg-dark, #0f1130);
        }

        .tnoc-cta__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .tnoc-cta__title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          max-width: 640px;
        }

        .tnoc-cta__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 8px;
          max-width: 560px;
        }

        .tnoc-cta__btn {
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
        .tnoc-cta__btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .tnoc-hero { padding-top: 48px; }
          .tnoc-hero__title { font-size: 28px; }
          .tnoc-hero__lead { font-size: 16px; }
          .tnoc-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .tnoc-body p,
          .tnoc-body li { font-size: 16px; }
          .tnoc-body h2 { padding-top: 28px; }
          .tnoc-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .tnoc-body table::-webkit-scrollbar { display: none; }
          .tnoc-cta__inner { gap: 10px; }
          .tnoc-cta__title { font-size: 24px; }
          .tnoc-cta__desc { font-size: 15px; }
        }
      `}</style>

      <div className="tnoc-root">

        {/* ── 1. Article Hero ── */}
        <section className="tnoc-hero">
          <div className="tnoc-container">
            <a href={backHref} className="tnoc-hero__back">{backLabel}</a>
            <h1 className="tnoc-hero__title">{title}</h1>
            <p className="tnoc-hero__lead">{lead}</p>
            <div className="tnoc-hero__meta">
              <span className="tnoc-meta__chip">{category}</span>
              <span className="tnoc-meta__sep" aria-hidden="true" />
              <span className="tnoc-meta__time">{readTime}</span>
              <span className="tnoc-meta__sep" aria-hidden="true" />
              <span className="tnoc-meta__date">{dateUpdated}</span>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="tnoc-tldr-wrap">
          <div className="tnoc-container">
            <div className="tnoc-tldr">
              <div className="tnoc-tldr__label">{tldrLabel}</div>
              <p className="tnoc-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="tnoc-body-wrap">
          <div className="tnoc-container">
            <article
              className="tnoc-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="tnoc-related">
            <div className="tnoc-container">
              <div className="tnoc-related__label">{relatedSectionLabel}</div>
              <div className="tnoc-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="tnoc-related__card">
                    <span className="tnoc-related__card-title">{item.title}</span>
                    <span className="tnoc-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. CTA Strip ── */}
        <div className="tnoc-cta">
          <div className="tnoc-container">
            <div className="tnoc-cta__inner">
              <h2 className="tnoc-cta__title">{ctaTitle}</h2>
              {ctaDescription && (
                <p className="tnoc-cta__desc">{ctaDescription}</p>
              )}
              <a href={ctaHref} className="tnoc-cta__btn">{ctaLabel}</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticle_TelecomNocAiDeployment, {
  // Hero
  backLabel:   { type: ControlType.String, title: "Back Label",    defaultValue: "← Learn" },
  backHref:    { type: ControlType.String, title: "Back URL",      defaultValue: "/learn" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "How to deploy AI in a telecom NOC without exposing network data" },
  lead:        { type: ControlType.String, title: "Lead",          defaultValue: "A practical guide for telecom operators bringing AI into the NOC, OSS/BSS, and customer operations — without exposing subscriber identities, call records, IP addresses, or network configurations.", displayTextArea: true },
  category:    { type: ControlType.String, title: "Category",      defaultValue: "Industry · Telecom" },
  readTime:    { type: ControlType.String, title: "Read Time",     defaultValue: "12 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated",  defaultValue: "Updated April 2025" },

  // TL;DR
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR — Definition" },
  tldrBody:  { type: ControlType.String, title: "TL;DR Body",  defaultValue: "A telecom NOC AI deployment uses a context-preserving data layer for AI to encapsulate subscriber identities, network identifiers (DEVICE_ID, SITE_ID, CIRCUIT_ID), call records, IP addresses, and network configurations locally before any data reaches an external LLM. The LLM generates RCA, customer-impact analysis, and ticket recommendations on the protected capsule; outputs are restored back into the originating ticket inside the operator's environment. Validated at SK Telecom and recognized at Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance.", displayTextArea: true },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // SEO
  canonicalUrl:  { type: ControlType.String, title: "Canonical URL",   defaultValue: "https://llmcapsule.ai/learn/telecom-noc-ai-deployment" },
  datePublished: { type: ControlType.String, title: "Date Published",  defaultValue: "2025-04-15" },

  // Related links
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Continue reading" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "AI on network operations data" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/learn/ai-on-network-operations-data" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "On-premise LLM execution path" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/learn/on-prem-llm-execution-path" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Glossary: context-preserving data layer for AI" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/context-preserving-data-layer" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "" },

  // CTA strip
  ctaTitle:       { type: ControlType.String, title: "CTA Title",        defaultValue: "NOC AI without sending the network outside." },
  ctaDescription: { type: ControlType.String, title: "CTA Description",  defaultValue: "30-minute review. Bring one NOC ticket and one regulatory constraint — we'll show how Capsule deploys on a sample workflow.", displayTextArea: true },
  ctaLabel:       { type: ControlType.String, title: "CTA Button Label", defaultValue: "Request a NOC AI demo" },
  ctaHref:        { type: ControlType.String, title: "CTA Button URL",   defaultValue: "/request-a-demo" },
})
