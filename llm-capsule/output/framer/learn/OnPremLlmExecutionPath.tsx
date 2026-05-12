// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py

import LearnArticle from "../LearnArticle"

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

export default function OnPremLlmExecutionPath() {
  return (
    <LearnArticle
      backLabel="← Learn"
      backHref="/resources/learn"
      title={"On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations"}
      lead={"Two execution paths inside a single AI enablement data layer. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration."}
      category={"ARCHITECTURE · Execution Path"}
      readTime={"11 min read"}
      dateUpdated={"Updated May 2025"}
      tldrLabel={"TL;DR"}
      tldrBody={""}
      bodyHtml={BODY_HTML}
      canonicalUrl={"https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path"}
      datePublished={"2025-05-01"}
      dateModified={"2025-05-01"}
      inLanguage={"en"}
      breadcrumbLabel={"On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations"}
      faqJsonLd={FAQ_JSON_LD}
      relatedSectionLabel="Related articles"
      related1Title={"Differential privacy for enterprise LLM"}
      related1Href={"/resources/learn/differential-privacy-for-enterprise-llm"}
      related2Title={"AI on network operations data"}
      related2Href={"/resources/learn/ai-on-network-operations-data"}
      related3Title={"PII guardrails vs operational data protection"}
      related3Href={"/resources/learn/pii-guardrails-vs-operational-data-protection"}
      related4Title={""}
      related4Href={""}
    />
  )
}
