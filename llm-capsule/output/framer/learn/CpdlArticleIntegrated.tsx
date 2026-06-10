// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
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

const BODY_HTML = `
<h2>Why this category exists now</h2>
<p>Enterprises and public-sector organizations want to put generative AI to work on their most valuable data: operational records, contracts, source code, asset inventories, network configurations, clinical notes. But that data is exactly the data they are not allowed to send to an external model.</p>
  <p>This creates an adoption gap. The work that would benefit most from AI is the work that is hardest to expose to it. As regulation tightens and GenAI moves from pilots into production systems, this gap stops being an edge case and becomes the central blocker to enterprise AI.</p>
  <p>The instinctive answer is to strip the sensitive parts out before the data reaches the model. That is where the real problem starts.</p>

<h2>The problem isn&rsquo;t the data. It&rsquo;s the relationships.</h2>
<p>Masking, redaction, and DLP were built for one job: stopping sensitive values from leaving a network. They are good at that job. They were never designed so that a model could read what is left behind.</p>
  <p>Traditional masking systems optimize for data protection. AI systems optimize for reasoning. The moment a masked value participates in a relationship, protecting the value often destroys the relationship itself.</p>
  <p>That is the part most teams miss. The risk to AI usefulness is not that a single value is hidden&mdash;it is that hiding the value severs the connections the model needs to think. Consider what disappears the moment you mask:</p>
<ul>
  <li><strong>Asset ID &harr; Asset Name</strong>&mdash;redact the ID and the model can no longer tie a vulnerability to the machine it lives on.</li>
  <li><strong>Host &harr; IP &harr; VLAN</strong>&mdash;flatten these and the model cannot reason about which segment an alert actually came from.</li>
  <li><strong>Contract clause &harr; Counterparty</strong>&mdash;blank the party and a renewal-risk or obligation question becomes unanswerable.</li>
  <li><strong>Patient &harr; Treatment &harr; Diagnosis</strong>&mdash;strip the identifiers and the clinical chain the model is asked to summarize is gone.</li>
</ul>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 410" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig1-title fig1-desc">
      <title id="fig1-title">Masking vs Context-Preserving Data Layer</title>
      <desc id="fig1-desc">Two panels showing the same network record. Left panel (Masking / DLP): values are redacted and relationships severed. Right panel (Context-Preserving Data Layer): values are transformed to tokens but relationships remain intact.</desc>
      <defs>
        <marker id="f1-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L7,4 L0,8 Z" fill="#6b7280"/>
        </marker>
      </defs>
      <text x="410" y="26" text-anchor="middle" font-size="13.5" fill="#6b7280">Same record. Same protection of the values. Only one keeps the relationship the model needs.</text>
      <rect x="20" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="40" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#ef5350">MASKING / DLP</text>
      <line x1="40" y1="92" x2="360" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="40"  y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="80"  y="143" text-anchor="middle">web-07</text>
        <rect x="160" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="200" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="280" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="320" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="120" y1="139" x2="160" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="240" y1="139" x2="280" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="200" y1="166" x2="200" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="214" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">redact</text>
      <g>
        <rect x="40"  y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="160" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="280" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <g stroke="#b0b7c3" stroke-width="2">
          <line x1="58"  y1="233" x2="102" y2="233"/>
          <line x1="178" y1="233" x2="222" y2="233"/>
          <line x1="298" y1="233" x2="342" y2="233"/>
        </g>
      </g>
      <g stroke="#ef5350" stroke-width="1.6">
        <line x1="120" y1="233" x2="135" y2="233"/>
        <line x1="145" y1="233" x2="160" y2="233"/>
        <line x1="240" y1="233" x2="255" y2="233"/>
        <line x1="265" y1="233" x2="280" y2="233"/>
        <line x1="136" y1="227" x2="144" y2="239"/>
        <line x1="144" y1="227" x2="136" y2="239"/>
        <line x1="256" y1="227" x2="264" y2="239"/>
        <line x1="264" y1="227" x2="256" y2="239"/>
      </g>
      <text x="200" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">Values protected.</tspan> <tspan fill="#ef5350" font-weight="600">Relationships severed.</tspan></text>
      <text x="200" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="200" dy="0">The model can no longer tell</tspan><tspan x="200" dy="15">which host the alert came from.</tspan></text>
      <rect x="440" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="460" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#5b4fe9">CONTEXT-PRESERVING DATA LAYER</text>
      <line x1="460" y1="92" x2="780" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="460" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="500" y="143" text-anchor="middle">web-07</text>
        <rect x="580" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="620" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="700" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="740" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="540" y1="139" x2="580" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="660" y1="139" x2="700" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="620" y1="166" x2="620" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="634" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">transform</text>
      <g font-family="'JetBrains Mono','SF Mono',monospace" font-size="12.5" fill="#3b2fbf">
        <rect x="460" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="500" y="237" text-anchor="middle">tok_H7</text>
        <rect x="580" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="620" y="237" text-anchor="middle">tok_A4</text>
        <rect x="700" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="740" y="237" text-anchor="middle">tok_V2</text>
      </g>
      <g stroke="#5b4fe9" stroke-width="2">
        <line x1="540" y1="233" x2="580" y2="233"/>
        <line x1="660" y1="233" x2="700" y2="233"/>
      </g>
      <text x="620" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">Values protected.</tspan> <tspan fill="#5b4fe9" font-weight="600">Relationships intact.</tspan></text>
      <text x="620" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="620" dy="0">The model still reasons over host &#8594; IP &#8594; VLAN,</tspan><tspan x="620" dy="15">then values restore locally.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 1.</strong> Masking severs the host&ndash;IP&ndash;VLAN relationship; a context-preserving data layer tokenizes the values but keeps the relationship intact.</p>
</figure>

<p>The input is safe. The output is useless. Most teams accept this as the cost of doing AI safely&mdash;<em>protect the data, or use it with a model, but not both.</em> A context-preserving data layer exists specifically to break that trade-off.</p>

<h2>What a context-preserving data layer does</h2>
<p>Instead of deleting sensitive values, it <strong>transforms</strong> them&mdash;and it preserves the structure and relationships around them, so the model still receives something that behaves like real data. The model works on protected data. On the way back, the layer <strong>restores</strong> the original values locally, inside the trust boundary, so the output lands in the workflow as if the model had seen the real thing.</p>
  <p>The model never sees the real data. More precisely: the model never <em>needs</em> to.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig2-title fig2-desc">
      <title id="fig2-title">Context-Preserving Data Layer Flow</title>
      <desc id="fig2-desc">A flow diagram showing sensitive enterprise data entering the context-preserving data layer (transform), protected tokens crossing to the AI model, then the layer restoring values locally to produce usable output inside the trust boundary.</desc>
      <defs>
        <marker id="f2-a" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#6b7280"/>
        </marker>
        <marker id="f2-t" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#5b4fe9"/>
        </marker>
      </defs>
      <line x1="524" y1="62" x2="524" y2="300" stroke="#ef5350" stroke-width="1.3" stroke-dasharray="5 5"/>
      <text x="300" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#6b7280">INSIDE YOUR ENVIRONMENT</text>
      <text x="672" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#ef5350">EXTERNAL AI MODEL</text>
      <rect x="36" y="120" width="150" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="111" y="145" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">Sensitive</text><text x="111" y="162" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">enterprise data</text>
      <rect x="36" y="220" width="150" height="56" rx="10" fill="#ffffff" stroke="#c9c3fb"/><text x="111" y="245" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">Usable output</text><text x="111" y="262" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">in the workflow</text>
      <rect x="300" y="96" width="160" height="204" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.4"/>
      <text x="380" y="124" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">Context-preserving</text><text x="380" y="141" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">data layer</text>
      <line x1="320" y1="158" x2="440" y2="158" stroke="#c9c3fb"/>
      <text x="380" y="186" text-anchor="middle" font-size="12" fill="#3b2fbf"><tspan font-weight="600">transform</tspan> &#8594;</text>
      <text x="380" y="252" text-anchor="middle" font-size="12" fill="#3b2fbf">&#8592; <tspan font-weight="600">restore</tspan></text>
      <rect x="600" y="148" width="170" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="685" y="173" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">AI model</text><text x="685" y="190" text-anchor="middle" font-size="11" fill="#9ca3af">sees protected data only</text>
      <line x1="186" y1="148" x2="300" y2="148" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <line x1="460" y1="148" x2="600" y2="160" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <text x="524" y="128" text-anchor="middle" font-size="11" fill="#3b2fbf">protected tokens &#8594;</text>
      <line x1="600" y1="196" x2="460" y2="244" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <line x1="300" y1="248" x2="186" y2="248" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <text x="524" y="270" text-anchor="middle" font-size="11" fill="#3b2fbf">&#8592; protected output</text>
      <text x="410" y="340" text-anchor="middle" font-size="14" fill="#0f1130"><tspan font-weight="600">The model never sees the real data.</tspan> <tspan fill="#5b4fe9" font-weight="600">It never needs to.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 2.</strong> The layer transforms data before the AI model and restores values locally, inside the trust boundary.</p>
</figure>

<p>A few properties define the category:</p>
<ul>
  <li><strong>Custom-defined protection, not just generic PII.</strong> What must never cross the model boundary in clear form is decided by the work itself&mdash;project codes, asset and equipment IDs, contract terms, network identifiers, clinical expressions, source code, internal identifiers. Generic PII is a subset of what it protects, not the point.</li>
  <li><strong>Relationships preserved, not flattened.</strong> Asset-to-name, host-to-IP-to-VLAN, clause-to-counterparty, patient-to-diagnosis&mdash;the connections survive the transformation, because the connections are what the model reasons over.</li>
  <li><strong>Restoration inside the trust boundary.</strong> Tokens map back to original values locally after inference, so the result is usable in the workflow&mdash;and the original data never has to leave to make the output whole.</li>
</ul>

<h2>How it differs from what you already have</h2>
<p>Because it sits near the model, a context-preserving data layer gets compared to things it is not:</p>
<ul>
  <li><strong>It is not DLP or masking.</strong> Those protect the input by removing it. This protects the input by transforming it, so the context survives.</li>
  <li><strong>It is not RAG or a vector database.</strong> RAG brings <em>additional</em> context <em>into</em> a model. A context-preserving data layer governs the <em>sensitive</em> context <em>already leaving</em> the organization. One adds knowledge; the other guards what departs.</li>
  <li><strong>It is not an AI gateway or an MCP layer.</strong> Those route, broker, and orchestrate model calls. A context-preserving data layer transforms the <em>content</em> of what crosses the boundary&mdash;and is typically embedded inside a stack, not a console an end user logs into.</li>
</ul>

<h2>A new layer in the enterprise stack</h2>
<p>AI introduced a new architectural requirement that traditional security stacks were never designed to solve. Organizations need a layer that protects sensitive data without removing the context AI depends on. That layer did not previously exist in enterprise architecture. We call it a context-preserving data layer.</p>
  <p>Every platform shift names the layer that makes it work&mdash;Databricks named the lakehouse, Snowflake the data cloud, Palantir the ontology. The shift to running enterprise AI on sensitive data needs its own: the layer where data is protected and still usable, at the exact point it meets the model.</p>
  <p>It replaces the old assumption&mdash;<em>protect the data or use it, not both</em>&mdash;with a layer that does both at once.</p>

<h2>Frequently asked questions</h2>
  <h3>What is a context-preserving data layer for AI?</h3>
<p>A context-preserving data layer is a software layer that sits between an organization&rsquo;s sensitive data and an AI model. It transforms sensitive data into a protected but semantically usable form before inference, then restores the original values locally afterward&mdash;so the model can reason over real-world structure without ever receiving the original data.</p>

    <h3>How is it different from data masking or DLP?</h3>
<p>Masking and DLP protect a value by deleting or redacting it. That works for stopping data exfiltration, but it also destroys the relationships around the value&mdash;and those relationships are exactly what an AI model needs to reason. A context-preserving data layer protects the value while keeping the relationship intact, so the model&rsquo;s output stays usable.</p>

    <h3>Is a context-preserving data layer the same as RAG?</h3>
<p>No. RAG (retrieval-augmented generation) brings <em>additional</em> context <em>into</em> a model to improve its answers. A context-preserving data layer does the opposite job: it governs the <em>sensitive</em> context that is <em>already leaving</em> the organization on its way to the model. RAG adds knowledge; this guards what departs. They can be used together.</p>

    <h3>How is it different from an AI gateway or an MCP layer?</h3>
<p>AI gateways and MCP layers route, broker, and orchestrate model calls&mdash;they manage <em>which</em> model gets called and <em>how</em>. A context-preserving data layer transforms the <em>content</em> of the data crossing the boundary. It is concerned with what the model can and cannot see, not with traffic routing, and it is typically embedded inside a stack rather than run as a console.</p>

    <h3>Does the AI model ever see the real data?</h3>
<p>No. The model only ever receives the transformed, protected form. The original values are restored locally, inside the organization&rsquo;s trust boundary, after inference. The point of the category is that the model never <em>needs</em> the real data to be effective.</p>

    <h3>Is this just PII protection?</h3>
<p>No. Generic PII is a subset of what a context-preserving data layer protects, not the focus. What must stay protected is defined by the work itself&mdash;project codes, asset and equipment IDs, contract terms, network identifiers, clinical expressions, source code, and internal identifiers&mdash;much of which falls outside any standard PII list.</p>

    <h3>Where does it sit in the enterprise architecture?</h3>
<p>At the boundary where sensitive data meets the AI model, embedded inside the stack rather than exposed as an end-user product. It is the layer that makes running AI on protected enterprise data possible without forcing a choice between protection and usefulness.</p>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is a context-preserving data layer for AI?", "acceptedAnswer": { "@type": "Answer", "text": "A context-preserving data layer is a software layer that sits between an organisation's sensitive data and an AI model. It transforms sensitive data into a protected but semantically usable form before inference, then restores the original values locally afterward — so the model can reason over real-world structure without ever receiving the original data." } }, { "@type": "Question", "name": "How is it different from data masking or DLP?", "acceptedAnswer": { "@type": "Answer", "text": "Masking and DLP protect a value by deleting or redacting it. That works for stopping data exfiltration, but it also destroys the relationships around the value — and those relationships are exactly what an AI model needs to reason. A context-preserving data layer protects the value while keeping the relationship intact, so the model's output stays usable." } }, { "@type": "Question", "name": "Is a context-preserving data layer the same as RAG?", "acceptedAnswer": { "@type": "Answer", "text": "No. RAG (retrieval-augmented generation) brings additional context into a model to improve its answers. A context-preserving data layer does the opposite job: it governs the sensitive context that is already leaving the organisation on its way to the model. RAG adds knowledge; this guards what departs. They can be used together." } }, { "@type": "Question", "name": "How is it different from an AI gateway or an MCP layer?", "acceptedAnswer": { "@type": "Answer", "text": "AI gateways and MCP layers route, broker, and orchestrate model calls — they manage which model gets called and how. A context-preserving data layer transforms the content of the data crossing the boundary. It is concerned with what the model can and cannot see, not with traffic routing, and it is typically embedded inside a stack rather than run as a console." } }, { "@type": "Question", "name": "Does the AI model ever see the real data?", "acceptedAnswer": { "@type": "Answer", "text": "No. The model only ever receives the transformed, protected form. The original values are restored locally, inside the organisation's trust boundary, after inference. The point of the category is that the model never needs the real data to be effective." } }, { "@type": "Question", "name": "Is this just PII protection?", "acceptedAnswer": { "@type": "Answer", "text": "No. Generic PII is a subset of what a context-preserving data layer protects, not the focus. What must stay protected is defined by the work itself — project codes, asset and equipment IDs, contract terms, network identifiers, clinical expressions, source code, and internal identifiers — much of which falls outside any standard PII list." } }, { "@type": "Question", "name": "Where does it sit in the enterprise architecture?", "acceptedAnswer": { "@type": "Answer", "text": "At the boundary where sensitive data meets the AI model, embedded inside the stack rather than exposed as an end-user product. It is the layer that makes running AI on protected enterprise data possible without forcing a choice between protection and usefulness." } } ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "What Is a Context-Preserving Data Layer for AI?",
    lead: "A context-preserving data layer is a software layer that transforms sensitive enterprise data into a protected but semantically usable form before it reaches an AI model, then restores the original values locally after inference. Unlike masking or DLP, which protect data by removing it — and so leave the model's output unusable — a context-preserving data layer protects the data while keeping the relationships the model needs to reason.",
    category: "Glossary",
    readTime: "~8 min read",
    dateUpdated: "Updated May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "A context-preserving data layer sits at the boundary between an organization's sensitive data and an AI model. It transforms the data into a protected but still-usable form before inference, then restores the original values locally afterward. Masking and DLP protect a value by removing it — but the moment a value is part of a relationship (Asset ID ↔ Asset Name, Host ↔ IP ↔ VLAN, Contract Clause ↔ Counterparty, Patient ↔ Diagnosis), removing the value destroys the relationship the model needs to reason. The data is safe; the output is useless. A context-preserving data layer breaks that trade-off: the model never needs to see the real data to be effective. It is not DLP or masking (they delete context), not RAG or a vector DB (they add context into the model), and not an AI gateway or MCP layer (they route and broker calls). It is embedded inside the stack at the model boundary — not a console end users log into. The goal is not to hide data from the model. The goal is to make the model effective without ever requiring access to the original data.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/cpdl-article-integrated",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "What Is a Context-Preserving Data Layer for AI?",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related3Href: "/resources/learn/reconstructing-ai-output",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "AI를 위한 Context-Preserving Data Layer란 무엇인가?",
    lead: "Context-preserving data layer는 민감한 엔터프라이즈 데이터가 AI 모델에 도달하기 전에 보호되지만 의미적으로 사용 가능한 형태로 변환하고, 추론 후 로컬에서 원래 값을 복원하는 소프트웨어 레이어입니다. 데이터를 제거하는 방식으로 보호하여 모델의 출력을 사용 불가능하게 만드는 masking 또는 DLP와 달리, context-preserving data layer는 데이터를 보호하면서 모델이 추론에 필요한 관계를 유지합니다.",
    category: "Glossary",
    readTime: "~8분 읽기",
    dateUpdated: "2026년 5월 업데이트",
    tldrLabel: "TL;DR",
    tldrBody: "Context-preserving data layer는 조직의 민감한 데이터와 AI 모델 사이의 경계에 위치합니다. 추론 전에 데이터를 보호되지만 여전히 사용 가능한 형태로 변환하고, 이후 로컬에서 원래 값을 복원합니다. Masking과 DLP는 값을 제거하는 방식으로 보호합니다. 그러나 값이 관계의 일부인 순간—Asset ID ↔ Asset Name, Host ↔ IP ↔ VLAN, Contract Clause ↔ Counterparty, Patient ↔ Diagnosis—값을 제거하면 모델이 추론하는 데 필요한 관계가 파괴됩니다. 데이터는 안전합니다. 하지만 출력은 쓸모가 없습니다. Context-preserving data layer는 이 트레이드오프를 해소합니다. 모델은 효과적으로 동작하기 위해 실제 데이터를 볼 필요가 없습니다. DLP나 masking이 아니며(맥락을 삭제합니다), RAG나 vector DB도 아니며(모델에 맥락을 추가합니다), AI gateway나 MCP layer도 아닙니다(호출을 라우팅하고 중개합니다). 모델 경계의 스택 내부에 임베드됩니다—최종 사용자가 로그인하는 콘솔이 아닙니다. 목표는 모델로부터 데이터를 숨기는 것이 아닙니다. 목표는 원본 데이터에 대한 접근 없이도 모델이 효과적으로 동작하도록 만드는 것입니다.",
    bodyHtml: `<h2>이 카테고리가 지금 존재하는 이유</h2>
<p>기업과 공공 부문 조직은 가장 가치 있는 데이터에 생성형 AI를 활용하고자 합니다. 운영 기록, 계약서, 소스 코드, 자산 인벤토리, 네트워크 구성, 임상 노트가 그 대상입니다. 그러나 바로 그 데이터가 외부 모델로 전송이 허용되지 않는 데이터입니다.</p>
  <p>이로 인해 도입 격차가 생깁니다. AI로부터 가장 큰 혜택을 받을 수 있는 업무가 AI에 노출하기 가장 어려운 업무입니다. 규제가 강화되고 GenAI가 파일럿에서 프로덕션 시스템으로 이동함에 따라, 이 격차는 더 이상 예외적인 사례가 아니라 엔터프라이즈 AI의 핵심 장벽이 됩니다.</p>
  <p>직관적인 해결책은 데이터가 모델에 도달하기 전에 민감한 부분을 제거하는 것입니다. 그것이 바로 진짜 문제가 시작되는 지점입니다.</p>

<h2>문제는 데이터가 아닙니다. 관계입니다.</h2>
<p>Masking, 편집, DLP는 하나의 목적을 위해 만들어졌습니다. 민감한 값이 네트워크를 벗어나지 못하도록 막는 것입니다. 이 목적에서는 훌륭합니다. 그러나 모델이 남겨진 것을 읽을 수 있도록 설계된 적은 없습니다.</p>
  <p>전통적인 masking 시스템은 데이터 보호를 최적화합니다. AI 시스템은 추론을 최적화합니다. 마스킹된 값이 관계에 참여하는 순간, 값을 보호하는 것이 관계 자체를 파괴하는 경우가 많습니다.</p>
  <p>대부분의 팀이 놓치는 부분이 바로 이것입니다. AI 유용성에 대한 위험은 단일 값이 숨겨진다는 것이 아닙니다—값을 숨기는 것이 모델이 생각하는 데 필요한 연결을 끊는다는 것입니다. 마스킹하는 순간 사라지는 것을 생각해 보십시오.</p>
<ul>
  <li><strong>Asset ID &harr; Asset Name</strong>&mdash;ID를 편집하면 모델은 더 이상 취약점을 해당 머신과 연결할 수 없습니다.</li>
  <li><strong>Host &harr; IP &harr; VLAN</strong>&mdash;이를 평탄화하면 모델은 경보가 실제로 어떤 세그먼트에서 왔는지 추론할 수 없습니다.</li>
  <li><strong>Contract clause &harr; Counterparty</strong>&mdash;당사자를 삭제하면 갱신 위험이나 의무 관련 질문에 답할 수 없게 됩니다.</li>
  <li><strong>Patient &harr; Treatment &harr; Diagnosis</strong>&mdash;식별자를 제거하면 모델이 요약하도록 요청받은 임상 체인이 사라집니다.</li>
</ul>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 410" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig1-title fig1-desc">
      <title id="fig1-title">Masking vs Context-Preserving Data Layer</title>
      <desc id="fig1-desc">동일한 네트워크 레코드를 보여주는 두 패널. 왼쪽 패널(Masking / DLP): 값이 편집되고 관계가 끊어집니다. 오른쪽 패널(Context-Preserving Data Layer): 값이 토큰으로 변환되지만 관계는 유지됩니다.</desc>
      <defs>
        <marker id="f1-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L7,4 L0,8 Z" fill="#6b7280"/>
        </marker>
      </defs>
      <text x="410" y="26" text-anchor="middle" font-size="13.5" fill="#6b7280">동일한 레코드. 동일한 값 보호. 모델에 필요한 관계를 유지하는 것은 하나뿐입니다.</text>
      <rect x="20" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="40" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#ef5350">MASKING / DLP</text>
      <line x1="40" y1="92" x2="360" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="40"  y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="80"  y="143" text-anchor="middle">web-07</text>
        <rect x="160" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="200" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="280" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="320" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="120" y1="139" x2="160" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="240" y1="139" x2="280" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="200" y1="166" x2="200" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="214" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">편집</text>
      <g>
        <rect x="40"  y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="160" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="280" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <g stroke="#b0b7c3" stroke-width="2">
          <line x1="58"  y1="233" x2="102" y2="233"/>
          <line x1="178" y1="233" x2="222" y2="233"/>
          <line x1="298" y1="233" x2="342" y2="233"/>
        </g>
      </g>
      <g stroke="#ef5350" stroke-width="1.6">
        <line x1="120" y1="233" x2="135" y2="233"/>
        <line x1="145" y1="233" x2="160" y2="233"/>
        <line x1="240" y1="233" x2="255" y2="233"/>
        <line x1="265" y1="233" x2="280" y2="233"/>
        <line x1="136" y1="227" x2="144" y2="239"/>
        <line x1="144" y1="227" x2="136" y2="239"/>
        <line x1="256" y1="227" x2="264" y2="239"/>
        <line x1="264" y1="227" x2="256" y2="239"/>
      </g>
      <text x="200" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">값이 보호됩니다.</tspan> <tspan fill="#ef5350" font-weight="600">관계가 끊어집니다.</tspan></text>
      <text x="200" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="200" dy="0">모델은 더 이상 경보가</tspan><tspan x="200" dy="15">어떤 host에서 왔는지 알 수 없습니다.</tspan></text>
      <rect x="440" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="460" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#5b4fe9">CONTEXT-PRESERVING DATA LAYER</text>
      <line x1="460" y1="92" x2="780" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="460" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="500" y="143" text-anchor="middle">web-07</text>
        <rect x="580" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="620" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="700" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="740" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="540" y1="139" x2="580" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="660" y1="139" x2="700" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="620" y1="166" x2="620" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="634" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">변환</text>
      <g font-family="'JetBrains Mono','SF Mono',monospace" font-size="12.5" fill="#3b2fbf">
        <rect x="460" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="500" y="237" text-anchor="middle">tok_H7</text>
        <rect x="580" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="620" y="237" text-anchor="middle">tok_A4</text>
        <rect x="700" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="740" y="237" text-anchor="middle">tok_V2</text>
      </g>
      <g stroke="#5b4fe9" stroke-width="2">
        <line x1="540" y1="233" x2="580" y2="233"/>
        <line x1="660" y1="233" x2="700" y2="233"/>
      </g>
      <text x="620" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">값이 보호됩니다.</tspan> <tspan fill="#5b4fe9" font-weight="600">관계가 유지됩니다.</tspan></text>
      <text x="620" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="620" dy="0">모델은 여전히 host &#8594; IP &#8594; VLAN을 추론하고,</tspan><tspan x="620" dy="15">값은 로컬에서 복원됩니다.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 1.</strong> Masking은 host&ndash;IP&ndash;VLAN 관계를 끊습니다. Context-preserving data layer는 값을 토큰화하지만 관계를 그대로 유지합니다.</p>
</figure>

<p>입력은 안전합니다. 출력은 쓸모가 없습니다. 대부분의 팀은 이를 AI를 안전하게 사용하기 위한 비용으로 받아들입니다&mdash;<em>데이터를 보호하거나 모델과 함께 사용하거나, 둘 다는 불가능합니다.</em> Context-preserving data layer는 바로 이 트레이드오프를 해소하기 위해 존재합니다.</p>

<h2>Context-preserving data layer가 하는 일</h2>
<p>민감한 값을 삭제하는 대신 <strong>변환</strong>합니다&mdash;그리고 그 주변의 구조와 관계를 보존하여 모델이 여전히 실제 데이터처럼 동작하는 무언가를 받도록 합니다. 모델은 보호된 데이터로 작동합니다. 돌아오는 과정에서 레이어는 신뢰 경계 내부 로컬에서 원래 값을 <strong>복원</strong>하여, 모델이 실제 데이터를 본 것처럼 출력이 워크플로우에 전달됩니다.</p>
  <p>모델은 실제 데이터를 보지 않습니다. 더 정확하게는, 모델은 실제 데이터를 볼 <em>필요가</em> 없습니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig2-title fig2-desc">
      <title id="fig2-title">Context-Preserving Data Layer 흐름</title>
      <desc id="fig2-desc">민감한 엔터프라이즈 데이터가 context-preserving data layer(변환)에 진입하고, 보호된 토큰이 AI 모델로 전달된 후, 레이어가 신뢰 경계 내부에서 로컬로 값을 복원하여 사용 가능한 출력을 생성하는 흐름 다이어그램.</desc>
      <defs>
        <marker id="f2-a" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#6b7280"/>
        </marker>
        <marker id="f2-t" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#5b4fe9"/>
        </marker>
      </defs>
      <line x1="524" y1="62" x2="524" y2="300" stroke="#ef5350" stroke-width="1.3" stroke-dasharray="5 5"/>
      <text x="300" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#6b7280">귀사 환경 내부</text>
      <text x="672" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#ef5350">외부 AI 모델</text>
      <rect x="36" y="120" width="150" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="111" y="145" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">민감한</text><text x="111" y="162" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">엔터프라이즈 데이터</text>
      <rect x="36" y="220" width="150" height="56" rx="10" fill="#ffffff" stroke="#c9c3fb"/><text x="111" y="245" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">워크플로우에서</text><text x="111" y="262" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">사용 가능한 출력</text>
      <rect x="300" y="96" width="160" height="204" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.4"/>
      <text x="380" y="124" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">Context-preserving</text><text x="380" y="141" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">data layer</text>
      <line x1="320" y1="158" x2="440" y2="158" stroke="#c9c3fb"/>
      <text x="380" y="186" text-anchor="middle" font-size="12" fill="#3b2fbf"><tspan font-weight="600">변환</tspan> &#8594;</text>
      <text x="380" y="252" text-anchor="middle" font-size="12" fill="#3b2fbf">&#8592; <tspan font-weight="600">복원</tspan></text>
      <rect x="600" y="148" width="170" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="685" y="173" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">AI 모델</text><text x="685" y="190" text-anchor="middle" font-size="11" fill="#9ca3af">보호된 데이터만 봅니다</text>
      <line x1="186" y1="148" x2="300" y2="148" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <line x1="460" y1="148" x2="600" y2="160" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <text x="524" y="128" text-anchor="middle" font-size="11" fill="#3b2fbf">보호된 토큰 &#8594;</text>
      <line x1="600" y1="196" x2="460" y2="244" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <line x1="300" y1="248" x2="186" y2="248" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <text x="524" y="270" text-anchor="middle" font-size="11" fill="#3b2fbf">&#8592; 보호된 출력</text>
      <text x="410" y="340" text-anchor="middle" font-size="14" fill="#0f1130"><tspan font-weight="600">모델은 실제 데이터를 보지 않습니다.</tspan> <tspan fill="#5b4fe9" font-weight="600">볼 필요가 없습니다.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 2.</strong> 레이어는 AI 모델 이전에 데이터를 변환하고, 신뢰 경계 내부에서 로컬로 값을 복원합니다.</p>
</figure>

<p>이 카테고리를 정의하는 몇 가지 속성이 있습니다.</p>
<ul>
  <li><strong>일반적인 PII가 아닌 맞춤형 보호.</strong> 모델 경계를 명확한 형태로 절대 넘어서서는 안 되는 것은 업무 자체가 결정합니다&mdash;프로젝트 코드, 자산 및 장비 ID, 계약 조건, 네트워크 식별자, 임상 표현, 소스 코드, 내부 식별자. 일반적인 PII는 보호하는 대상의 일부일 뿐, 핵심이 아닙니다.</li>
  <li><strong>평탄화되지 않고 보존되는 관계.</strong> 자산-이름, host-IP-VLAN, 조항-Counterparty, Patient-Diagnosis&mdash;연결이 변환 후에도 살아남습니다. 모델이 추론하는 대상이 바로 그 연결이기 때문입니다.</li>
  <li><strong>신뢰 경계 내부에서의 복원.</strong> 토큰은 추론 후 로컬에서 원래 값으로 다시 매핑되므로 결과를 워크플로우에서 사용할 수 있습니다&mdash;그리고 원본 데이터는 출력을 완성하기 위해 외부로 나갈 필요가 없습니다.</li>
</ul>

<h2>기존에 보유한 것과의 차이점</h2>
<p>모델 근처에 위치하기 때문에 context-preserving data layer는 실제로 그렇지 않은 것들과 비교됩니다.</p>
<ul>
  <li><strong>DLP나 masking이 아닙니다.</strong> 그것들은 입력을 제거하여 보호합니다. 이것은 입력을 변환하여 보호하므로 맥락이 살아남습니다.</li>
  <li><strong>RAG나 vector database가 아닙니다.</strong> RAG는 <em>추가적인</em> 맥락을 모델 <em>안으로</em> 가져옵니다. Context-preserving data layer는 조직에서 <em>이미 나가고 있는</em> <em>민감한</em> 맥락을 관리합니다. 하나는 지식을 추가하고, 다른 하나는 나가는 것을 지킵니다.</li>
  <li><strong>AI gateway나 MCP layer가 아닙니다.</strong> 그것들은 모델 호출을 라우팅, 중개, 오케스트레이션합니다. Context-preserving data layer는 경계를 넘는 <em>내용</em>을 변환합니다&mdash;그리고 일반적으로 최종 사용자가 로그인하는 콘솔이 아닌 스택 내부에 임베드됩니다.</li>
</ul>

<h2>엔터프라이즈 스택의 새로운 레이어</h2>
<p>AI는 전통적인 보안 스택이 해결하도록 설계된 적 없는 새로운 아키텍처 요구사항을 도입했습니다. 조직은 AI가 의존하는 맥락을 제거하지 않고도 민감한 데이터를 보호하는 레이어가 필요합니다. 그 레이어는 이전에 엔터프라이즈 아키텍처에 존재하지 않았습니다. 우리는 이를 context-preserving data layer라고 부릅니다.</p>
  <p>모든 플랫폼 전환은 그것을 작동시키는 레이어에 이름을 붙입니다&mdash;Databricks는 레이크하우스, Snowflake는 데이터 클라우드, Palantir는 온톨로지를 명명했습니다. 민감한 데이터에서 엔터프라이즈 AI를 실행하는 전환에도 자체적인 것이 필요합니다. 데이터가 보호되고 여전히 사용 가능하며, 모델을 만나는 정확한 지점에 있는 레이어입니다.</p>
  <p>이것은 오래된 가정&mdash;<em>데이터를 보호하거나 사용하거나, 둘 다는 불가능합니다</em>&mdash;을 동시에 둘 다를 하는 레이어로 대체합니다.</p>

<h2>자주 묻는 질문</h2>
  <h3>AI를 위한 context-preserving data layer란 무엇입니까?</h3>
<p>Context-preserving data layer는 조직의 민감한 데이터와 AI 모델 사이에 위치하는 소프트웨어 레이어입니다. 추론 전에 민감한 데이터를 보호되지만 의미적으로 사용 가능한 형태로 변환하고, 이후 로컬에서 원래 값을 복원합니다&mdash;이를 통해 모델은 원본 데이터를 전혀 수신하지 않고도 실제 세계의 구조에 대해 추론할 수 있습니다.</p>

    <h3>데이터 masking이나 DLP와 어떻게 다릅니까?</h3>
<p>Masking과 DLP는 값을 삭제하거나 편집하여 보호합니다. 이것은 데이터 유출을 막는 데는 효과적이지만, 값 주변의 관계도 파괴합니다&mdash;그리고 그 관계가 바로 AI 모델이 추론하는 데 필요한 것입니다. Context-preserving data layer는 관계를 그대로 유지하면서 값을 보호하므로 모델의 출력이 사용 가능한 상태로 유지됩니다.</p>

    <h3>Context-preserving data layer는 RAG와 같습니까?</h3>
<p>아닙니다. RAG(retrieval-augmented generation)는 모델의 답변을 개선하기 위해 <em>추가적인</em> 맥락을 모델 <em>안으로</em> 가져옵니다. Context-preserving data layer는 반대 역할을 합니다. 모델로 가는 도중 조직에서 <em>이미 나가고 있는</em> <em>민감한</em> 맥락을 관리합니다. RAG는 지식을 추가하고, 이것은 나가는 것을 지킵니다. 함께 사용할 수 있습니다.</p>

    <h3>AI gateway나 MCP layer와 어떻게 다릅니까?</h3>
<p>AI gateway와 MCP layer는 모델 호출을 라우팅, 중개, 오케스트레이션합니다&mdash;<em>어떤</em> 모델이 호출되고 <em>어떻게</em> 호출되는지를 관리합니다. Context-preserving data layer는 경계를 넘는 데이터의 <em>내용</em>을 변환합니다. 트래픽 라우팅이 아니라 모델이 보고 보지 못하는 것과 관련이 있으며, 일반적으로 콘솔로 실행되지 않고 스택 내부에 임베드됩니다.</p>

    <h3>AI 모델이 실제 데이터를 보는 경우가 있습니까?</h3>
<p>아닙니다. 모델은 항상 변환된 보호 형태만 수신합니다. 원래 값은 추론 후 조직의 신뢰 경계 내부에서 로컬로 복원됩니다. 이 카테고리의 핵심은 모델이 효과적으로 동작하기 위해 실제 데이터를 <em>필요로 하지 않는다</em>는 것입니다.</p>

    <h3>이것은 단순히 PII 보호입니까?</h3>
<p>아닙니다. 일반적인 PII는 context-preserving data layer가 보호하는 대상의 일부일 뿐, 핵심이 아닙니다. 보호되어야 하는 것은 업무 자체가 정의합니다&mdash;프로젝트 코드, 자산 및 장비 ID, 계약 조건, 네트워크 식별자, 임상 표현, 소스 코드, 내부 식별자&mdash;그 중 상당 부분은 표준 PII 목록에 해당하지 않습니다.</p>

    <h3>엔터프라이즈 아키텍처에서 어디에 위치합니까?</h3>
<p>민감한 데이터가 AI 모델을 만나는 경계에, 최종 사용자 제품으로 노출되지 않고 스택 내부에 임베드됩니다. 보호와 유용성 중 하나를 선택하도록 강요하지 않고 보호된 엔터프라이즈 데이터에서 AI를 실행할 수 있게 하는 레이어입니다.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/cpdl-article-integrated",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "What Is a Context-Preserving Data Layer for AI?",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related3Href: "/resources/learn/reconstructing-ai-output",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Was ist ein Context-Preserving Data Layer für KI?",
    lead: "Ein Context-Preserving Data Layer ist eine Software-Schicht, die sensible Unternehmensdaten vor der Übergabe an ein KI-Modell in eine geschützte, aber semantisch nutzbare Form überführt — und die Originalwerte danach lokal wiederherstellt. Im Gegensatz zu Maskierung oder DLP, die Daten durch Entfernung schützen und damit die Modellausgabe unbrauchbar machen, bewahrt ein Context-Preserving Data Layer die Beziehungen, die das Modell für seine Schlussfolgerungen benötigt.",
    category: "Glossar",
    readTime: "~8 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2026",
    tldrLabel: "Kurzfassung",
    tldrBody: "Ein Context-Preserving Data Layer sitzt an der Grenze zwischen den sensiblen Daten einer Organisation und einem KI-Modell. Er transformiert die Daten vor der Inferenz in eine geschützte, aber weiterhin nutzbare Form und stellt die Originalwerte danach lokal wieder her. Maskierung und DLP schützen einen Wert, indem sie ihn entfernen — doch sobald ein Wert Teil einer Beziehung ist (Asset ID ↔ Asset Name, Host ↔ IP ↔ VLAN, Vertragsklausel ↔ Vertragspartei, Patient ↔ Diagnose), zerstört die Entfernung genau die Beziehung, die das Modell für seine Schlussfolgerungen braucht. Die Daten sind sicher; die Ausgabe ist wertlos. Ein Context-Preserving Data Layer löst diesen Zielkonflikt: Das Modell muss die echten Daten nie sehen, um wirksam zu sein. Er ist kein DLP und keine Maskierung (diese löschen Kontext), kein RAG und keine Vektordatenbank (diese fügen Kontext in das Modell ein) und kein KI-Gateway oder MCP-Layer (diese routen und vermitteln Aufrufe). Er ist tief im Stack an der Modellgrenze eingebettet — keine Konsole, in die Endnutzer sich einloggen. Das Ziel ist nicht, Daten vor dem Modell zu verbergen. Das Ziel ist, das Modell wirksam zu machen, ohne jemals Zugriff auf die Originaldaten zu benötigen.",
    bodyHtml: `<h2>Warum diese Kategorie jetzt entsteht</h2>
<p>Unternehmen und Organisationen des öffentlichen Sektors wollen generative KI auf ihren wertvollsten Daten einsetzen: Betriebsdaten, Verträge, Quellcode, Asset-Inventare, Netzwerkkonfigurationen, klinische Notizen. Genau diese Daten dürfen sie jedoch nicht an ein externes Modell übermitteln.</p>
  <p>Daraus entsteht eine Einführungslücke. Die Aufgaben, bei denen KI den größten Nutzen stiften würde, sind gleichzeitig die Aufgaben, bei denen eine Datenweitergabe am schwierigsten zu rechtfertigen ist. Mit zunehmender Regulierung durch DSGVO und EU AI Act und dem Übergang von GenAI-Pilotprojekten in Produktivsysteme entwickelt sich diese Lücke vom Randfall zum zentralen Hindernis für unternehmensweite KI.</p>
  <p>Der naheliegende Ausweg ist, die sensiblen Bestandteile herauszufiltern, bevor die Daten das Modell erreichen. Genau dort beginnt das eigentliche Problem.</p>

<h2>Das Problem sind nicht die Daten. Es sind die Beziehungen.</h2>
<p>Maskierung, Schwärzung und DLP wurden für eine einzige Aufgabe entwickelt: sensible Werte daran zu hindern, ein Netzwerk zu verlassen. Das gelingt ihnen gut. Sie wurden nie dafür entworfen, dass ein Modell das Verbleibende sinnvoll auswerten kann.</p>
  <p>Herkömmliche Maskierungssysteme optimieren für Datenschutz. KI-Systeme optimieren für Schlussfolgerungen. In dem Moment, in dem ein maskierter Wert Teil einer Beziehung ist, zerstört der Schutz des Wertes oft die Beziehung selbst.</p>
  <p>Genau das übersehen die meisten Teams. Das Risiko für die KI-Nutzbarkeit liegt nicht darin, dass ein einzelner Wert verborgen wird &mdash; sondern darin, dass das Verbergen des Wertes die Verbindungen durchtrennt, die das Modell zum Denken braucht. Was verschwindet, wenn Sie maskieren:</p>
<ul>
  <li><strong>Asset ID &harr; Asset Name</strong> &mdash; schwärzen Sie die ID, kann das Modell eine Schwachstelle nicht mehr dem betroffenen System zuordnen.</li>
  <li><strong>Host &harr; IP &harr; VLAN</strong> &mdash; maskieren Sie diese Felder, kann das Modell nicht mehr bestimmen, aus welchem Netzwerksegment eine Meldung tatsächlich stammt.</li>
  <li><strong>Vertragsklausel &harr; Vertragspartei</strong> &mdash; schwärzen Sie die Partei, wird eine Frage zu Verlängerungsrisiken oder Vertragspflichten unbeantwortbar.</li>
  <li><strong>Patient &harr; Behandlung &harr; Diagnose</strong> &mdash; entfernen Sie die Identifikatoren, ist die klinische Kette, die das Modell zusammenfassen soll, nicht mehr rekonstruierbar.</li>
</ul>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 410" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig1-title fig1-desc">
      <title id="fig1-title">Maskierung vs. Context-Preserving Data Layer</title>
      <desc id="fig1-desc">Zwei Panels mit demselben Netzwerk-Datensatz. Linkes Panel (Maskierung / DLP): Werte sind geschwärzt und Beziehungen durchtrennt. Rechtes Panel (Context-Preserving Data Layer): Werte sind in Token umgewandelt, Beziehungen bleiben erhalten.</desc>
      <defs>
        <marker id="f1-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L7,4 L0,8 Z" fill="#6b7280"/>
        </marker>
      </defs>
      <text x="410" y="26" text-anchor="middle" font-size="13.5" fill="#6b7280">Derselbe Datensatz. Derselbe Werteschutz. Nur eine Variante bewahrt die Beziehungen.</text>
      <rect x="20" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="40" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#ef5350">MASKIERUNG / DLP</text>
      <line x1="40" y1="92" x2="360" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="40"  y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="80"  y="143" text-anchor="middle">web-07</text>
        <rect x="160" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="200" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="280" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="320" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="120" y1="139" x2="160" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="240" y1="139" x2="280" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="200" y1="166" x2="200" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="214" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">schwärzen</text>
      <g>
        <rect x="40"  y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="160" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="280" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <g stroke="#b0b7c3" stroke-width="2">
          <line x1="58"  y1="233" x2="102" y2="233"/>
          <line x1="178" y1="233" x2="222" y2="233"/>
          <line x1="298" y1="233" x2="342" y2="233"/>
        </g>
      </g>
      <g stroke="#ef5350" stroke-width="1.6">
        <line x1="120" y1="233" x2="135" y2="233"/>
        <line x1="145" y1="233" x2="160" y2="233"/>
        <line x1="240" y1="233" x2="255" y2="233"/>
        <line x1="265" y1="233" x2="280" y2="233"/>
        <line x1="136" y1="227" x2="144" y2="239"/>
        <line x1="144" y1="227" x2="136" y2="239"/>
        <line x1="256" y1="227" x2="264" y2="239"/>
        <line x1="264" y1="227" x2="256" y2="239"/>
      </g>
      <text x="200" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">Werte geschützt.</tspan> <tspan fill="#ef5350" font-weight="600">Beziehungen durchtrennt.</tspan></text>
      <text x="200" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="200" dy="0">Das Modell kann nicht mehr bestimmen,</tspan><tspan x="200" dy="15">von welchem Host die Meldung stammt.</tspan></text>
      <rect x="440" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="460" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#5b4fe9">CONTEXT-PRESERVING DATA LAYER</text>
      <line x1="460" y1="92" x2="780" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="460" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="500" y="143" text-anchor="middle">web-07</text>
        <rect x="580" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="620" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="700" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="740" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="540" y1="139" x2="580" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="660" y1="139" x2="700" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="620" y1="166" x2="620" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="634" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">transformieren</text>
      <g font-family="'JetBrains Mono','SF Mono',monospace" font-size="12.5" fill="#3b2fbf">
        <rect x="460" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="500" y="237" text-anchor="middle">tok_H7</text>
        <rect x="580" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="620" y="237" text-anchor="middle">tok_A4</text>
        <rect x="700" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="740" y="237" text-anchor="middle">tok_V2</text>
      </g>
      <g stroke="#5b4fe9" stroke-width="2">
        <line x1="540" y1="233" x2="580" y2="233"/>
        <line x1="660" y1="233" x2="700" y2="233"/>
      </g>
      <text x="620" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">Werte geschützt.</tspan> <tspan fill="#5b4fe9" font-weight="600">Beziehungen erhalten.</tspan></text>
      <text x="620" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="620" dy="0">Das Modell schlussfolgert weiterhin über Host &#8594; IP &#8594; VLAN,</tspan><tspan x="620" dy="15">dann werden Werte lokal wiederhergestellt.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Abbildung 1.</strong> Maskierung durchtrennt die Host&ndash;IP&ndash;VLAN-Beziehung; ein Context-Preserving Data Layer tokenisiert die Werte, bewahrt aber die Beziehung.</p>
</figure>

<p>Die Eingabe ist sicher. Die Ausgabe ist wertlos. Die meisten Teams akzeptieren das als den Preis sicherer KI-Nutzung &mdash; <em>Daten schützen oder mit einem Modell nutzen, aber nicht beides.</em> Ein Context-Preserving Data Layer existiert genau dafür, diesen Zielkonflikt aufzulösen.</p>

<h2>Was ein Context-Preserving Data Layer leistet</h2>
<p>Statt sensible Werte zu löschen, <strong>transformiert</strong> er sie &mdash; und bewahrt dabei Struktur und Beziehungen, sodass das Modell weiterhin Eingaben erhält, die sich wie echte Daten verhalten. Das Modell arbeitet auf geschützten Daten. Auf dem Rückweg <strong>stellt</strong> die Schicht die Originalwerte lokal, innerhalb der Vertrauensgrenze, <strong>wieder her</strong> &mdash; das Ergebnis landet im Workflow, als hätte das Modell die echten Daten gesehen.</p>
  <p>Das Modell sieht die echten Daten nie. Genauer gesagt: Das Modell <em>braucht</em> sie nie.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig2-title fig2-desc">
      <title id="fig2-title">Ablauf des Context-Preserving Data Layer</title>
      <desc id="fig2-desc">Ein Flussdiagramm, das zeigt, wie sensible Unternehmensdaten in den Context-Preserving Data Layer (Transformation) eingehen, geschützte Token das KI-Modell passieren und die Schicht die Werte danach lokal innerhalb der Vertrauensgrenze wiederherstellt, um nutzbare Ausgaben zu erzeugen.</desc>
      <defs>
        <marker id="f2-a" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#6b7280"/>
        </marker>
        <marker id="f2-t" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#5b4fe9"/>
        </marker>
      </defs>
      <line x1="524" y1="62" x2="524" y2="300" stroke="#ef5350" stroke-width="1.3" stroke-dasharray="5 5"/>
      <text x="300" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#6b7280">INNERHALB IHRER UMGEBUNG</text>
      <text x="672" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#ef5350">EXTERNES KI-MODELL</text>
      <rect x="36" y="120" width="150" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="111" y="145" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">Sensible</text><text x="111" y="162" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">Unternehmensdaten</text>
      <rect x="36" y="220" width="150" height="56" rx="10" fill="#ffffff" stroke="#c9c3fb"/><text x="111" y="245" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">Nutzbare Ausgabe</text><text x="111" y="262" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">im Workflow</text>
      <rect x="300" y="96" width="160" height="204" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.4"/>
      <text x="380" y="124" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">Context-preserving</text><text x="380" y="141" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">data layer</text>
      <line x1="320" y1="158" x2="440" y2="158" stroke="#c9c3fb"/>
      <text x="380" y="186" text-anchor="middle" font-size="12" fill="#3b2fbf"><tspan font-weight="600">transformieren</tspan> &#8594;</text>
      <text x="380" y="252" text-anchor="middle" font-size="12" fill="#3b2fbf">&#8592; <tspan font-weight="600">wiederherstellen</tspan></text>
      <rect x="600" y="148" width="170" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="685" y="173" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">KI-Modell</text><text x="685" y="190" text-anchor="middle" font-size="11" fill="#9ca3af">sieht nur geschützte Daten</text>
      <line x1="186" y1="148" x2="300" y2="148" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <line x1="460" y1="148" x2="600" y2="160" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <text x="524" y="128" text-anchor="middle" font-size="11" fill="#3b2fbf">geschützte Token &#8594;</text>
      <line x1="600" y1="196" x2="460" y2="244" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <line x1="300" y1="248" x2="186" y2="248" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <text x="524" y="270" text-anchor="middle" font-size="11" fill="#3b2fbf">&#8592; geschützte Ausgabe</text>
      <text x="410" y="340" text-anchor="middle" font-size="14" fill="#0f1130"><tspan font-weight="600">Das Modell sieht die echten Daten nie.</tspan> <tspan fill="#5b4fe9" font-weight="600">Es braucht sie nie.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Abbildung 2.</strong> Die Schicht transformiert Daten vor dem KI-Modell und stellt Werte lokal, innerhalb der Vertrauensgrenze, wieder her.</p>
</figure>

<p>Einige Eigenschaften definieren die Kategorie:</p>
<ul>
  <li><strong>Individuell definierter Schutz, nicht nur generische PII.</strong> Was die Modellgrenze nicht unverschlüsselt passieren darf, bestimmt der Anwendungsfall selbst &mdash; Projektcodes, Asset- und Equipment-IDs, Vertragskonditionen, Netzwerkidentifikatoren, klinische Ausdrücke, Quellcode, interne Bezeichner. Generische PII ist ein Teilbereich des Schutzes, nicht der Fokus.</li>
  <li><strong>Beziehungen erhalten, nicht aufgelöst.</strong> Asset-zu-Name, Host-zu-IP-zu-VLAN, Klausel-zu-Vertragspartei, Patient-zu-Diagnose &mdash; die Verbindungen überstehen die Transformation, weil das Modell genau diese Verbindungen für seine Schlussfolgerungen benötigt.</li>
  <li><strong>Wiederherstellung innerhalb der Vertrauensgrenze.</strong> Token werden nach der Inferenz lokal auf die Originalwerte zurückgemappt &mdash; das Ergebnis ist im Workflow direkt verwendbar, ohne dass die Originaldaten die eigene Umgebung je verlassen mussten.</li>
</ul>

<h2>Abgrenzung zu bestehenden Lösungen</h2>
<p>Da ein Context-Preserving Data Layer nahe am Modell sitzt, wird er häufig mit Lösungen verglichen, die er nicht ist:</p>
<ul>
  <li><strong>Kein DLP und keine Maskierung.</strong> Diese schützen die Eingabe durch Entfernung. Ein Context-Preserving Data Layer schützt die Eingabe durch Transformation &mdash; der Kontext bleibt erhalten.</li>
  <li><strong>Kein RAG und keine Vektordatenbank.</strong> RAG bringt <em>zusätzlichen</em> Kontext <em>in</em> ein Modell. Ein Context-Preserving Data Layer steuert den <em>sensiblen</em> Kontext, der die Organisation bereits verlässt. RAG fügt Wissen hinzu; dieser Layer schützt, was abgeht.</li>
  <li><strong>Kein KI-Gateway und kein MCP-Layer.</strong> Diese routen, vermitteln und orchestrieren Modellaufrufe. Ein Context-Preserving Data Layer transformiert den <em>Inhalt</em> dessen, was die Grenze passiert &mdash; und ist typischerweise tief im Stack eingebettet, nicht als Konsole für Endnutzer zugänglich.</li>
</ul>

<h2>Eine neue Schicht im Unternehmens-Stack</h2>
<p>KI hat eine neue architektonische Anforderung eingeführt, für die traditionelle Sicherheits-Stacks nie ausgelegt wurden. Organisationen benötigen eine Schicht, die sensible Daten schützt, ohne den Kontext zu entfernen, auf den KI angewiesen ist. Diese Schicht hat in der Unternehmensarchitektur bislang nicht existiert. Wir nennen sie den Context-Preserving Data Layer.</p>
  <p>Jede Plattformverschiebung benennt die Schicht, die sie ermöglicht &mdash; Databricks hat das Lakehouse benannt, Snowflake die Data Cloud, Palantir die Ontologie. Der Übergang zu unternehmensweiter KI auf sensiblen Daten braucht seine eigene: die Schicht, an der Daten geschützt und gleichzeitig nutzbar sind, genau an dem Punkt, an dem sie auf das Modell treffen.</p>
  <p>Sie ersetzt die alte Annahme &mdash; <em>Daten schützen oder nutzen, nicht beides</em> &mdash; durch eine Schicht, die beides gleichzeitig leistet.</p>

<h2>Häufig gestellte Fragen</h2>
  <h3>Was ist ein Context-Preserving Data Layer für KI?</h3>
<p>Ein Context-Preserving Data Layer ist eine Software-Schicht, die zwischen den sensiblen Daten einer Organisation und einem KI-Modell sitzt. Sie transformiert sensible Daten vor der Inferenz in eine geschützte, aber semantisch nutzbare Form und stellt die Originalwerte danach lokal wieder her &mdash; sodass das Modell über reale Strukturen schlussfolgern kann, ohne jemals die Originaldaten zu erhalten.</p>

    <h3>Worin unterscheidet er sich von Datenmaskierung oder DLP?</h3>
<p>Maskierung und DLP schützen einen Wert durch Löschen oder Schwärzen. Das funktioniert zur Verhinderung von Datenabfluss, zerstört dabei aber auch die Beziehungen um den Wert herum &mdash; und genau diese Beziehungen benötigt ein KI-Modell für seine Schlussfolgerungen. Ein Context-Preserving Data Layer schützt den Wert und bewahrt gleichzeitig die Beziehung, sodass die Modellausgabe nutzbar bleibt.</p>

    <h3>Ist ein Context-Preserving Data Layer dasselbe wie RAG?</h3>
<p>Nein. RAG (Retrieval-Augmented Generation) bringt <em>zusätzlichen</em> Kontext <em>in</em> ein Modell, um dessen Antworten zu verbessern. Ein Context-Preserving Data Layer übernimmt die entgegengesetzte Aufgabe: Er steuert den <em>sensiblen</em> Kontext, der die Organisation auf dem Weg zum Modell bereits verlässt. RAG fügt Wissen hinzu; dieser Layer schützt, was abgeht. Beide können kombiniert eingesetzt werden.</p>

    <h3>Wie unterscheidet er sich von einem KI-Gateway oder einem MCP-Layer?</h3>
<p>KI-Gateways und MCP-Layer routen, vermitteln und orchestrieren Modellaufrufe &mdash; sie steuern, <em>welches</em> Modell aufgerufen wird und <em>wie</em>. Ein Context-Preserving Data Layer transformiert den <em>Inhalt</em> der Daten, die die Grenze passieren. Er befasst sich damit, was das Modell sehen kann und was nicht &mdash; nicht mit der Datenverkehrssteuerung &mdash; und ist typischerweise tief im Stack eingebettet, nicht als Konsole betrieben.</p>

    <h3>Sieht das KI-Modell jemals die echten Daten?</h3>
<p>Nein. Das Modell erhält ausschließlich die transformierte, geschützte Form. Die Originalwerte werden lokal, innerhalb der Vertrauensgrenze der Organisation, nach der Inferenz wiederhergestellt. Das Wesentliche der Kategorie ist: Das Modell <em>braucht</em> die echten Daten nie, um wirksam zu sein.</p>

    <h3>Handelt es sich dabei nur um PII-Schutz?</h3>
<p>Nein. Generische PII ist ein Teilbereich dessen, was ein Context-Preserving Data Layer schützt, nicht der Schwerpunkt. Was geschützt bleiben muss, bestimmt der Anwendungsfall selbst &mdash; Projektcodes, Asset- und Equipment-IDs, Vertragskonditionen, Netzwerkidentifikatoren, klinische Ausdrücke, Quellcode und interne Bezeichner &mdash; vieles davon fällt außerhalb jeder Standard-PII-Liste.</p>

    <h3>Wo ist er in der Unternehmensarchitektur angesiedelt?</h3>
<p>An der Grenze, an der sensible Daten auf das KI-Modell treffen, tief im Stack eingebettet &mdash; nicht als Endnutzerprodukt exponiert. Er ist die Schicht, die den KI-Einsatz auf geschützten Unternehmensdaten ermöglicht, ohne eine Entscheidung zwischen Schutz und Nutzbarkeit zu erzwingen.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/cpdl-article-integrated",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "What Is a Context-Preserving Data Layer for AI?",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related3Href: "/resources/learn/reconstructing-ai-output",
    related4Title: "",
    related4Href: "",
  },
}

export default function CpdlArticleIntegrated({
  locale = "en",
  backLabel = "",
  backHref = "",
  title = "",
  lead = "",
  category = "",
  readTime = "",
  dateUpdated = "",
  tldrLabel = "",
  tldrBody = "",
  bodyHtml = "",
  canonicalUrl = "",
  datePublished = "",
  dateModified = "",
  inLanguage = "",
  breadcrumbLabel = "",
  faqJsonLd = "",
  relatedSectionLabel = "",
  related1Title = "",
  related1Href = "",
  related2Title = "",
  related2Href = "",
  related3Title = "",
  related3Href = "",
  related4Title = "",
  related4Href = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _title = title || T["title"] || TRANSLATIONS.en["title"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _readTime = readTime || T["readTime"] || TRANSLATIONS.en["readTime"]
  const _dateUpdated = dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"]
  const _tldrLabel = tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"]
  const _tldrBody = tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _canonicalUrl = canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"]
  const _datePublished = datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"]
  const _dateModified = dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"]
  const _inLanguage = inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"]
  const _breadcrumbLabel = breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"]
  const _faqJsonLd = faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"]
  const _relatedSectionLabel = relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"]
  const _related1Title = related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Title = related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Title = related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Title = related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]

  const relatedItems = [
    { _title: _related1Title, href: _related1Href },
    { _title: _related2Title, href: _related2Href },
    { _title: _related3Title, href: _related3Href },
    { _title: _related4Title, href: _related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": _title,
    "description": _lead,
    "inLanguage": _inLanguage,
    "datePublished": _datePublished,
    "dateModified": _dateModified || _datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": _canonicalUrl },
  })

  const breadcrumbJsonLd = _breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": _breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {_faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: _faqJsonLd }} />
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

        /* Callout (amber) — for <div class="callout"> inside _bodyHtml */
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

        /* Figure (inline diagram with SVG) */
        .la-body .ds-figure {
          margin: 28px 0;
          padding: 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
        }
        .la-body .ds-figure__svg-wrap {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .la-body .ds-figure__svg-wrap::-webkit-scrollbar { display: none; }
        .la-body .ds-figure__svg {
          display: block;
          width: 100%;
          height: auto;
          min-width: 640px;
          max-width: 100%;
        }
        .la-body .ds-figure__caption {
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--c-muted, #6b7280);
          text-align: center;
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

        .la-related__card-_title {
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
              <a href={_backHref} className="la-hero__back">{_backLabel}</a>
              <h1 className="la-hero__title">{_title}</h1>
              <p className="la-hero__lead">{_lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{_category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{_readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{_dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{_tldrLabel}</div>
              <p className="la-tldr__body">{_tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{_relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-_title">{item.title}</span>
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

addPropertyControls(CpdlArticleIntegrated, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "" },
  title: { type: ControlType.String, title: "Title", defaultValue: "" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: "", displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
