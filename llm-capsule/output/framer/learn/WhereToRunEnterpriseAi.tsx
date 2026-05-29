// Self-contained Framer Code Component — en-GB only (translations will be added later).
// Source: llm-capsule/input/llmcapsule_260506/learn/where-to-run-enterprise-ai.html
// Canonical: https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai

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
}

const BODY_HTML = `<h2>1. The Decision Isn't Binary — and the Framing That Makes It Binary Is the Problem</h2>
<p>The first serious question an enterprise AI program runs into, after the initial enthusiasm settles, is where the models should actually run. The conversation tends to polarise quickly. The security team argues for on-premise: keep the data inside, eliminate the question of cross-border transfer. The product team argues for external: the frontier models do things the internal ones can't, and falling behind is more dangerous than the controlled risk. The platform team argues for whatever they can stand up fastest. And in most organisations, the conversation goes around this triangle for months before someone notices that <strong>the three positions describe different workflows</strong>, and that the right answer is probably some of each.</p>
<p>Most enterprise AI deployment conversations start from a single question: <em>should we use external LLMs or run our own?</em> The framing assumes the answer applies uniformly to the company. <strong>It doesn't.</strong></p>
<p>A typical enterprise has dozens of workflows where AI would be useful. Some of them — drafting marketing copy, summarising public documents, generating internal training content — have no meaningful sensitivity constraint. The data is fine to send anywhere. The most capable models, regardless of where they're hosted, are the right choice. There's no operational case for running internal infrastructure to handle these.</p>
<p>Other workflows in the same enterprise — processing customer service tickets, analysing operational logs, drafting clinical notes, reviewing loan applications — sit under constraints that range from contractual data location commitments to sector-specific data posture to internal governance about what gets sent where. The same model that's fine for marketing copy is not fine for these. <strong>The choice for these workflows is real.</strong></p>
<p>A third category — classified defence operations, lawful intercept data, certain healthcare scenarios — sits under constraints that simply do not allow any external endpoint, regardless of safeguards. The choice for these workflows is also real, but it's a different choice.</p>
<p>Treating these three categories as if they're one decision produces bad architecture. You either over-protect the easy workflows (running them on internal infrastructure that costs operational effort without delivering proportionate value) or under-protect the hard ones (sending them to external endpoints because that's the company's "AI strategy"). <strong>The realistic answer is to make different decisions for different workflow categories, and to operate the infrastructure that lets those decisions coexist.</strong></p>

<h2>2. External LLMs — What They're Actually Good At, and What Limits Them</h2>
<p>The case for external LLMs is straightforward and worth being precise about. The frontier models — GPT-5-class systems, Claude Opus-class, Gemini Ultra-class — are operating at a capability level that no enterprise is going to match with internal infrastructure. They have context windows that handle entire document portfolios. They reason over complex structures with quality that smaller models can't approach. They get better every few months without the enterprise paying for retraining cycles. <strong>For workflows where capability matters, this is not a marginal advantage. It's a different category of system.</strong></p>
<p>The cost side is also worth being honest about. External LLMs are accessed through APIs operated by their vendors, with the model running on the vendor's infrastructure, in the vendor's data centres, under the vendor's operational control. The enterprise sends data to those endpoints and receives responses back. The vendor's contractual commitments — data processing agreements, regional endpoints, deletion policies — describe what the vendor will and won't do with the data. <strong>They don't describe what the vendor's host country's law might allow other parties to do.</strong></p>
<p>For workflows where the data isn't sensitive, this is a non-issue. For workflows where the data is sensitive but the data location constraint is satisfiable through architectural choices (regional endpoints, transformation before transmission, customer-controlled mapping), this is solvable — and the broader pillar on this approach covers how.</p>
<p>For workflows where the data is sensitive <em>and</em> the constraint is that no version of the data, however transformed, can be sent to an external endpoint, external LLMs are not an option. Some workflows genuinely fall into this category. <strong>The mistake is assuming all sensitive workflows do.</strong></p>

<h2>3. On-Premise LLMs — The Strengths and the Brittle Parts</h2>
<p>The case for running models on internal infrastructure is also straightforward at first glance. The data never leaves. The contractual questions about cross-border transfer simply don't arise. For workflows under absolute data location constraints — defence, certain regulated healthcare categories, certain financial transaction segments — this is the only option, and it's worth taking seriously.</p>
<p>The strengths are real:</p>
<ul>
  <li><strong>Data location is solved by definition.</strong> The model runs where the data is; the question of transfer doesn't engage. For workflows under sector-specific commitments that bind the enterprise to keep operational data in defined boundaries, this maps cleanly onto the constraint.</li>
  <li><strong>Operational control is total.</strong> The model can be tuned, fine-tuned, evaluated, monitored, and rolled back under the enterprise's own change-management processes. There's no vendor on the other side making model updates the enterprise didn't approve.</li>
  <li><strong>Latency can be made predictable.</strong> A model running on the enterprise's own network avoids the round-trip to an external endpoint, which matters for some real-time workflows.</li>
</ul>
<p>The costs are also real, and tend to be underestimated by teams that haven't run production AI infrastructure before:</p>
<ul>
  <li><strong>Model capability lags.</strong> The open-source models an enterprise can practically host — Llama, Mistral, Qwen, and their successors — are good models. They are not, at any given moment, as capable as the frontier external models on the dimensions enterprises usually care about: reasoning over complex documents, handling unfamiliar formats, long-context analysis. The gap is typically twelve to eighteen months and may narrow over time, but it doesn't close.</li>
  <li><strong>The operational cost is large and continuous.</strong> Running a serious model in production means GPU infrastructure, model serving infrastructure (vLLM, TGI, or similar), evaluation pipelines, monitoring, and the team that knows how to keep all of it running. <strong>The cost is dominated not by the GPUs but by the team.</strong> A small AI infrastructure team for enterprise serving is five to ten engineers; a serious one is double that. The model itself is the cheap part.</li>
  <li><strong>The brittleness shows up in updates.</strong> Every few months, the frontier external models leap forward in ways that change what business teams expect. The internal model, however well-tuned, doesn't leap. The gap between <em>"what AI can do"</em> in the public conversation and <em>"what our internal AI can do"</em> in the enterprise grows, and the pressure to do something about it grows with it.</li>
</ul>
<p>For workflows where the constraint is absolute — and where the workflow is bounded enough that a capable smaller model is sufficient — <strong>on-premise is the right answer</strong>. For workflows where the constraint is real but not absolute, and where the AI capability matters, <strong>on-premise alone produces a system that works but underperforms</strong>.</p>

<h2>4. Hybrid — Not a Compromise, but the Architecturally Honest Answer</h2>
<p>The third option — running a hybrid topology where some workflows go to external endpoints and some run on internal infrastructure — gets dismissed too quickly in enterprise conversations. The dismissal usually takes one of two forms.</p>
<p>The first is operational: <em>"running both is more complex than running one, so we should pick one."</em> This is true but misses the point. Running both isn't more complex if the workflows that need each are different workflows. The complexity of a hybrid topology is in the routing layer that decides which model gets which workflow. <strong>That routing layer is not optional</strong> — even a pure-external or pure-on-premise enterprise has a routing layer, it's just trivial — and once the routing layer exists, supporting two backends is incremental complexity, not categorical complexity.</p>
<p>The second is governance: <em>"we should have one policy for AI."</em> This is also true and also misses the point. The single policy isn't <em>"all AI runs externally"</em> or <em>"all AI runs on-premise."</em> The single policy is <em>"workflows of class X run externally with these safeguards; workflows of class Y run on-premise; the routing is enforced and audited."</em> That's a coherent governance posture, and it's the one most large enterprises end up with whether they planned for it or not.</p>
<p>What makes hybrid the architecturally honest answer is that <strong>it matches the actual structure of enterprise AI workloads</strong>. Some workflows benefit massively from frontier capability and tolerate transformation-based safeguards. Some workflows have constraints that rule out external endpoints regardless of safeguards. Forcing all workflows into either bucket produces a system that's wrong for some of them. Hybrid lets each workflow get the deployment it needs.</p>
<p>The hard part of hybrid isn't running two backends. <strong>It's making the routing decision precise enough that workflows go where they should, with the policy enforced rather than ignored, and the audit trail clear enough that the team can defend the decisions later.</strong> That's a design problem, not an infrastructure problem.</p>

<h2>5. A Decision Framework for Workflows</h2>
<p>A useful way to make the decision concrete is to evaluate each workflow against four questions:</p>
<ol>
  <li><strong>What is the sensitivity of the data the workflow operates on?</strong> Not the maximum sensitivity of any data anywhere in the enterprise — the sensitivity of the specific data this workflow needs. Marketing copy and customer records are different workflows even if the same business unit owns both.</li>
  <li><strong>What is the capability requirement of the AI task?</strong> Some tasks — classification of incoming tickets into ten categories, simple entity extraction, format conversion — work well on smaller models. Some tasks — reasoning over a hundred-page contract, synthesising root causes from heterogeneous logs, drafting clinical narratives — need frontier capability.</li>
  <li><strong>What is the constraint structure?</strong> Is the constraint absolute (no version of the data can leave) or conditional (the data can leave if transformed appropriately)? Is it driven by external commitments (customer agreements, sector commitments) or internal governance (the company's own data posture)?</li>
  <li><strong>What is the workflow's tolerance for capability degradation?</strong> Some workflows will deliver value with a model that's twelve months behind the frontier. Some workflows are themselves the differentiating capability the business is trying to build, and the model gap is the gap.</li>
</ol>
<p>The answers cluster into rough categories:</p>
<table>
  <thead>
    <tr>
      <th>Workflow category</th>
      <th>Examples</th>
      <th>Deployment fit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Low-sensitivity, high-capability requirement, no constraint</td>
      <td>Marketing copy, public document summaries, internal training content</td>
      <td>External LLM, no transformation</td>
    </tr>
    <tr>
      <td>Sensitive but transformable, high-capability requirement, conditional constraint</td>
      <td>Customer service tickets, operational logs, contract review, clinical notes</td>
      <td>External LLM + transformation layer (Path A)</td>
    </tr>
    <tr>
      <td>Sensitive, capability-tolerant, absolute constraint</td>
      <td>Defence workflows, certain classified categories, lawful intercept</td>
      <td>On-premise model (Path B)</td>
    </tr>
    <tr>
      <td>Sensitive, high-capability requirement, absolute constraint</td>
      <td>The hardest category — the gap between what's needed and what's allowed</td>
      <td>Narrow the task, wait for on-premise capability, or accept the gap</td>
    </tr>
  </tbody>
</table>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" aria-labelledby="decision-framework-title decision-framework-desc">
      <title id="decision-framework-title">Workflow decision framework</title>
      <desc id="decision-framework-desc">A 2x2 matrix plotting workflow constraint structure (conditional vs absolute) against capability requirement (lower vs frontier), with four quadrants showing the deployment fit for each combination.</desc>

      <defs>
        <marker id="arrow-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"/>
        </marker>
      </defs>

      <line x1="120" y1="420" x2="120" y2="50" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="60" y="240" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2" transform="rotate(-90, 60, 240)">CAPABILITY REQUIREMENT</text>
      <text x="100" y="70" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Frontier</text>
      <text x="100" y="415" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Lower</text>

      <line x1="120" y1="420" x2="900" y2="420" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="510" y="465" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">CONSTRAINT STRUCTURE</text>
      <text x="320" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Low or conditional</text>
      <text x="700" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Absolute</text>

      <line x1="510" y1="50" x2="510" y2="420" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <line x1="120" y1="235" x2="900" y2="235" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>

      <rect x="140" y="60" width="350" height="160" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="160" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">External LLM + transformation (Path A)</text>
      <text x="160" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Customer service tickets · operational</text>
      <text x="160" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">logs · contract review · clinical notes</text>
      <text x="160" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Sensitive but transformable; constraint</text>
      <text x="160" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">satisfiable through architectural choices.</text>

      <rect x="530" y="60" width="350" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="550" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Hardest category — no clean answer</text>
      <text x="550" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">High-stakes defence analysis · sensitive</text>
      <text x="550" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">healthcare needing frontier reasoning</text>
      <text x="550" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Narrow the task to fit smaller models,</text>
      <text x="550" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">or accept the capability gap.</text>

      <rect x="140" y="245" width="350" height="160" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="160" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">External LLM, no transformation</text>
      <text x="160" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Marketing copy · public document</text>
      <text x="160" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">summaries · internal training content</text>
      <text x="160" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">No meaningful sensitivity constraint;</text>
      <text x="160" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">data fine to send anywhere.</text>

      <rect x="530" y="245" width="350" height="160" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
      <text x="550" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">On-premise model (Path B)</text>
      <text x="550" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Defence workflows · classified</text>
      <text x="550" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">categories · lawful intercept data</text>
      <text x="550" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Workflow bounded enough that a</text>
      <text x="550" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">capable smaller model suffices.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 · <strong>Plotting workflows on two axes — capability requirement and constraint structure — produces four deployment fits. Most enterprises have workflows in every quadrant.</strong></figcaption>
</figure>

<p><strong>Most enterprises find that their workflow inventory spans all four categories. The deployment architecture has to handle all four, which means hybrid by default.</strong></p>

<h2>6. What Hybrid Looks Like in Practice</h2>
<p>A hybrid deployment isn't <em>"we have one model here and one model there."</em> It is an integration architecture where <strong>the routing decision — which backend handles which request — is policy-driven, auditable, and consistent.</strong></p>
<p>The components that make this work:</p>
<p><strong>6.1 A Unified Integration Layer</strong></p>
<p>Workflows don't call the external endpoint or the on-premise model directly. They call an integration layer that handles the routing. This means <strong>workflows are insulated from changes in the backend selection</strong>. If a workflow needs to move from external to on-premise (because of a new constraint, a vendor change, or a policy update), the workflow doesn't change — the routing rule does.</p>
<p><strong>6.2 Policy-Driven Routing</strong></p>
<p>The decision of where a workflow runs is encoded in policy, not in the workflow's own code. <em>"Workflows tagged as customer-service in the EU region go to the external endpoint with the encapsulation layer. Workflows tagged as classified go to the on-premise model. Workflows tagged as marketing-content go to the external endpoint without transformation."</em> <strong>The policy is versioned and auditable.</strong></p>
<p><strong>6.3 A Transformation Layer for the External Path</strong></p>
<p>When workflows are routed to the external endpoint, sensitive elements are transformed before transmission and reconstructed on response. <strong>The same transformation infrastructure works regardless of which external endpoint is the routing target</strong> — the abstraction is over the backend, not over a specific vendor.</p>
<p><strong>6.4 Shared Governance</strong></p>
<p>The audit logs, the policy management, the access controls cover both paths uniformly. <strong>The team doesn't have two governance frameworks, one for external and one for on-premise. They have one</strong>, with the path of each request recorded.</p>
<p>When these four components are in place, the question of <em>"where should this workflow run"</em> becomes a policy decision rather than an architecture commitment. The workflow can move between paths as needs change without rewriting integrations.</p>

<h2>7. What Goes Wrong When One Path Is Treated as the Entire Answer</h2>
<p>Two failure modes show up consistently in enterprises that commit to a single deployment path.</p>
<ul>
  <li><strong>The all-external organisation.</strong> A company that decides external LLMs are the entire AI strategy will run into workflows the policy won't allow, and one of two things happens. Either those workflows don't get AI (and the company falls behind on the work where AI matters most), or the workflows get AI through unofficial channels — employees pasting sensitive data into consumer chatbots, business units procuring AI tools outside the central process, vendors integrated without the central security review. <strong>Shadow AI is the predictable consequence of an AI strategy that doesn't account for workflows that can't fit it.</strong></li>
  <li><strong>The all-on-premise organisation.</strong> A company that decides external LLMs are unacceptable across the board will run into the capability gap. Internal models will be good enough for some workflows and not for others. The workflows where they're not good enough will either underperform (and the company's competitors will pull ahead on those tasks), or business units will route around the policy through the same shadow channels. <strong>The discipline of an all-on-premise posture is harder to maintain than it looks, especially as the frontier external models continue to advance.</strong></li>
</ul>
<p>Both failure modes share a structure: <strong>a policy that doesn't account for the heterogeneity of enterprise workflows ends up bypassed in the workflows that don't fit, and the bypass is harder to govern than the explicit path would have been.</strong></p>

<h2>8. The Architecture This Leads To</h2>
<p>For most regulated enterprises, the deployment that emerges from working through these questions has a few consistent properties.</p>
<p>There is a backend for external LLMs, accessed through a transformation layer that handles the cases where data sensitivity requires it. There is an on-premise model — usually a smaller, well-chosen open-source model — that handles workflows where external endpoints aren't viable. There is a routing layer that decides which workflow goes where based on policy. There is a unified governance and audit framework covering both paths. <strong>And there is the recognition that this isn't a finished state</strong> — workflows move between paths as constraints change, new external models become available, new on-premise capabilities mature, and the business's own posture evolves.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="hybrid-architecture-title hybrid-architecture-desc">
      <title id="hybrid-architecture-title">Hybrid deployment architecture — Path A and Path B</title>
      <desc id="hybrid-architecture-desc">A diagram showing enterprise workflows flowing into a unified integration layer with policy-driven routing, then splitting into Path A (external LLM via encapsulation layer) and Path B (on-premise model), with shared governance covering both paths.</desc>

      <defs>
        <marker id="arrow-primary-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
        <marker id="arrow-ink-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f1130"/>
        </marker>
      </defs>

      <g>
        <rect x="40" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="140" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Marketing &amp; public docs</text>
        <text x="140" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">low sensitivity</text>

        <rect x="260" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="360" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Customer ops &amp; clinical</text>
        <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">sensitive but transformable</text>

        <rect x="480" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="580" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Defence &amp; classified</text>
        <text x="580" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">absolute constraint</text>

        <rect x="700" y="30" width="220" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="810" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Other workflows</text>
        <text x="810" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">various sensitivity</text>
      </g>

      <line x1="140" y1="82" x2="220" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="360" y1="82" x2="370" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="580" y1="82" x2="540" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="810" y1="82" x2="700" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>

      <g>
        <rect x="180" y="130" width="560" height="68" rx="10" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="200" y="154" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#9ca3af" letter-spacing="1.2">UNIFIED INTEGRATION LAYER</text>
        <text x="460" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Policy-driven routing</text>
        <text x="460" y="194" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#9ca3af" font-style="italic">versioned · enforced · auditable</text>
      </g>

      <line x1="320" y1="200" x2="220" y2="240" stroke="#5b4fe9" stroke-width="1.8" marker-end="url(#arrow-primary-pb)"/>
      <text x="240" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#5b4fe9">Path A</text>

      <line x1="600" y1="200" x2="700" y2="240" stroke="#0ea5a4" stroke-width="1.8" marker-end="url(#arrow-teal-pb)"/>
      <text x="660" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#0b7f7e">Path B</text>

      <g>
        <rect x="40" y="248" width="420" height="120" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">PATH A · EXTERNAL LLM + ENCAPSULATION</text>

        <rect x="60" y="288" width="180" height="64" rx="6" fill="#ffffff" stroke="#5b4fe9" stroke-width="1"/>
        <text x="150" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Encapsulation layer</text>
        <text x="150" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">tokenisation · structure</text>
        <text x="150" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">preservation · reconstruction</text>

        <rect x="260" y="288" width="180" height="64" rx="6" fill="#0f1130" stroke="#0f1130" stroke-width="1"/>
        <text x="350" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#ffffff">External frontier LLM</text>
        <text x="350" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">ChatGPT · Claude</text>
        <text x="350" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">Gemini · others</text>

        <line x1="244" y1="312" x2="256" y2="312" stroke="#5b4fe9" stroke-width="1.5"/>
        <line x1="244" y1="328" x2="256" y2="328" stroke="#5b4fe9" stroke-width="1.5"/>
      </g>

      <g>
        <rect x="500" y="248" width="420" height="120" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="520" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">PATH B · ON-PREMISE LOCAL MODEL</text>

        <rect x="520" y="288" width="380" height="64" rx="6" fill="#ffffff" stroke="#0ea5a4" stroke-width="1"/>
        <text x="710" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Local model on enterprise infrastructure</text>
        <text x="710" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Llama · Mistral · Qwen — fine-tuned</text>
        <text x="710" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">data never leaves the boundary</text>
      </g>

      <g>
        <rect x="40" y="394" width="880" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="416" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#b45309" letter-spacing="1.2">SHARED GOVERNANCE</text>
        <text x="480" y="423" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f1130">One policy · one audit log · one access control framework — covering both paths</text>
      </g>

      <line x1="250" y1="368" x2="250" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="368" x2="710" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 2 · <strong>Workflows flow through a unified integration layer that routes by policy — Path A (external LLM via encapsulation) or Path B (on-premise local model) — both under shared governance.</strong></figcaption>
</figure>

<p><span class="wtre-product">LLM Capsule</span> supports both paths as part of a single architecture: <strong>Path A</strong> routes workflows to an approved external LLM through the encapsulation layer that handles tokenisation, structure preservation, and reconstruction inside the enterprise environment; <strong>Path B</strong> routes workflows to an on-premise local model when external endpoints aren't an option. The same encapsulation layer, the same policy framework, and the same audit cover both. <strong>The deployment decision becomes a policy choice per workflow, not an architecture commitment for the company.</strong></p>

<div class="takeaways">
  <div class="takeaways__label">Key Takeaways</div>
  <ul>
    <li>The deployment question isn't binary — different workflows have different sensitivity, capability requirements, and constraints; a single-path policy is wrong for some of them</li>
    <li>External LLMs deliver frontier capability through contractual (not architectural) protection — fine for low-sensitivity workflows, solvable with a transformation layer for conditional constraints, off-limits for absolute constraints</li>
    <li>On-premise solves data location by definition but lags the frontier by 12–18 months; the dominant cost is the team (5–10 engineers minimum), not the GPUs</li>
    <li>Hybrid is the architecturally honest answer — it matches the actual structure of enterprise workloads instead of forcing them into one bucket</li>
    <li>Four questions sort workflows into four categories: sensitivity, capability requirement, constraint structure (absolute vs conditional), tolerance for capability degradation</li>
    <li>Working hybrid needs four components: unified integration layer, policy-driven routing, transformation layer for the external path, shared governance</li>
    <li>All-external organisations produce shadow AI; all-on-premise organisations produce capability-gap workarounds — both failure modes are bypassed policies</li>
    <li>Path A (external + encapsulation) and Path B (on-premise local) under one policy and audit framework is the deployment most regulated enterprises end up at, planned or not</li>
  </ul>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Why isn't the deployment decision just external or on-premise?</h3>
<p>Because a typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints. Marketing copy and customer service tickets are different workflows even if the same business unit owns both. Treating these as a single decision either over-protects the easy workflows (running them on internal infrastructure that costs operational effort without delivering proportionate value) or under-protects the hard ones (sending them to external endpoints because that's the company's "AI strategy"). The realistic answer is different decisions for different workflow categories.</p>

<h3>What are external LLMs actually good at, and what are their limits?</h3>
<p>Frontier external models (GPT-5-class, Claude Opus-class, Gemini Ultra-class) operate at a capability level no enterprise will match internally — long context windows, complex document reasoning, regular improvement without retraining cycles. For workflows where capability matters, this is a different category of system. The limit is that the model runs on the vendor's infrastructure under the vendor's contractual commitments, not architectural guarantees. For workflows where data sensitivity rules out any external endpoint regardless of safeguards, external LLMs are not an option.</p>

<h3>When is on-premise the right answer?</h3>
<p>When the constraint is absolute (defence, certain classified categories, workflows where no version of the data, however transformed, can leave) and the workflow is bounded enough that a capable smaller model suffices. The strengths are real — data location is solved by definition, operational control is total, latency can be made predictable. The costs are also real and tend to be underestimated: capability lag of twelve to eighteen months versus frontier models, continuous operational cost dominated by the team (five to ten engineers minimum), and brittleness when the frontier leaps forward and the internal model doesn't.</p>

<h3>Isn't running a hybrid topology more complex than picking one path?</h3>
<p>Only superficially. Running both isn't more complex if the workflows that need each are different workflows — and they are. The complexity of hybrid lives in the routing layer that decides which model gets which workflow. That routing layer isn't optional; even pure-external or pure-on-premise enterprises have one, it's just trivial. Once the routing layer exists, supporting two backends is incremental complexity, not categorical complexity. The hard part is making the routing decision precise enough that workflows go where they should, with policy enforced and audit trail clear.</p>

<h3>How do you decide which workflow goes where?</h3>
<p>Evaluate each workflow against four questions. <strong>Data sensitivity</strong> (of the specific data this workflow needs, not the maximum anywhere in the enterprise). <strong>Capability requirement</strong> (does the task need frontier reasoning, or will a smaller model suffice). <strong>Constraint structure</strong> (absolute or conditional, externally driven or internal governance). <strong>Tolerance for capability degradation</strong>. The answers cluster into rough categories: low-sensitivity goes external, transformable-with-high-capability goes external with transformation, absolute-constraint-but-bounded goes on-premise, absolute-with-high-capability is the hardest — sometimes not fully solvable today.</p>

<h3>What goes wrong with an all-external or all-on-premise approach?</h3>
<p>All-external organisations run into workflows the policy won't allow, and either those workflows don't get AI (the company falls behind on the work where AI matters most) or they get AI through unofficial channels — shadow AI is the predictable consequence. All-on-premise organisations run into the capability gap; internal models will be good enough for some workflows and not for others, and business units route around the policy through the same shadow channels. Both failure modes share a structure: a policy that doesn't account for workflow heterogeneity ends up bypassed.</p>

<h3>What does a working hybrid architecture actually look like?</h3>
<p>Four components. <strong>A unified integration layer</strong> (workflows call this layer, not the backends directly, so they're insulated from routing changes). <strong>Policy-driven routing</strong> (the decision of where a workflow runs is encoded in policy, versioned and auditable, not hard-coded in the workflow). <strong>A transformation layer for the external path</strong> (sensitive elements transformed before transmission and reconstructed on response, abstracted over which external vendor is the target). <strong>Shared governance</strong> (one audit log, one policy framework, one access control model covering both paths uniformly). When all four are in place, where a workflow runs becomes a policy decision rather than an architecture commitment.</p>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Why isn't the deployment decision just external or on-premise?","acceptedAnswer":{"@type":"Answer","text":"Because a typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints. Marketing copy and customer service tickets are different workflows even if the same business unit owns both. Treating these as a single decision either over-protects the easy workflows (running them on internal infrastructure that costs operational effort without delivering proportionate value) or under-protects the hard ones (sending them to external endpoints because that's the company's 'AI strategy'). The realistic answer is different decisions for different workflow categories."}}, {"@type":"Question","name":"What are external LLMs actually good at, and what are their limits?","acceptedAnswer":{"@type":"Answer","text":"Frontier external models (GPT-5-class, Claude Opus-class, Gemini Ultra-class) operate at a capability level no enterprise will match internally — long context windows, complex document reasoning, regular improvement without retraining cycles. For workflows where capability matters, this is a different category of system. The limit is that the model runs on the vendor's infrastructure under the vendor's contractual commitments, not architectural guarantees. For workflows where data sensitivity rules out any external endpoint regardless of safeguards, external LLMs are not an option."}}, {"@type":"Question","name":"When is on-premise the right answer?","acceptedAnswer":{"@type":"Answer","text":"When the constraint is absolute (defence, certain classified categories, workflows where no version of the data, however transformed, can leave) and the workflow is bounded enough that a capable smaller model suffices. The strengths are real — data location is solved by definition, operational control is total, latency can be made predictable. The costs are also real and tend to be underestimated: capability lag of twelve to eighteen months versus frontier models, continuous operational cost dominated by the team (five to ten engineers minimum), and brittleness when the frontier leaps forward and the internal model doesn't."}}, {"@type":"Question","name":"Isn't running a hybrid topology more complex than picking one path?","acceptedAnswer":{"@type":"Answer","text":"Only superficially. Running both isn't more complex if the workflows that need each are different workflows — and they are. The complexity of hybrid lives in the routing layer that decides which model gets which workflow. That routing layer isn't optional; even pure-external or pure-on-premise enterprises have one, it's just trivial. Once the routing layer exists, supporting two backends is incremental complexity, not categorical complexity. The hard part is making the routing decision precise enough that workflows go where they should, with policy enforced and audit trail clear."}}, {"@type":"Question","name":"How do you decide which workflow goes where?","acceptedAnswer":{"@type":"Answer","text":"Evaluate each workflow against four questions. What is the data sensitivity (of the specific data this workflow needs, not the maximum anywhere in the enterprise)? What is the capability requirement (does the task need frontier reasoning, or will a smaller model suffice)? What is the constraint structure (absolute or conditional, externally driven or internal governance)? What is the tolerance for capability degradation? The answers cluster into rough categories: low-sensitivity goes external, transformable-with-high-capability goes external with transformation, absolute-constraint-but-bounded goes on-premise, absolute-with-high-capability is the hardest — sometimes not fully solvable today."}}, {"@type":"Question","name":"What goes wrong with an all-external or all-on-premise approach?","acceptedAnswer":{"@type":"Answer","text":"All-external organisations run into workflows the policy won't allow, and either those workflows don't get AI (the company falls behind on the work where AI matters most) or they get AI through unofficial channels — shadow AI is the predictable consequence. All-on-premise organisations run into the capability gap; internal models will be good enough for some workflows and not for others, and business units route around the policy through the same shadow channels. Both failure modes share a structure: a policy that doesn't account for workflow heterogeneity ends up bypassed."}}, {"@type":"Question","name":"What does a working hybrid architecture actually look like?","acceptedAnswer":{"@type":"Answer","text":"Four components. A unified integration layer (workflows call this layer, not the backends directly, so they're insulated from routing changes). Policy-driven routing (the decision of where a workflow runs is encoded in policy, versioned and auditable, not hard-coded in the workflow). A transformation layer for the external path (sensitive elements transformed before transmission and reconstructed on response, abstracted over which external vendor is the target). Shared governance (one audit log, one policy framework, one access control model covering both paths uniformly). When all four are in place, where a workflow runs becomes a policy decision rather than an architecture commitment."}} ] }`

export default function WhereToRunEnterpriseAi({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "Where to Run Enterprise AI: External, On-Premise, or Both",
  lead = "The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.",
  category = "AI Architecture",
  readTime = "~12 min read",
  dateUpdated = "May 2026",
  tldrLabel = "TL;DR",
  tldrBody = "The deployment question isn't \"external or on-premise\" — it's which workflows belong where. A typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints; forcing them into a single bucket produces architecture that's wrong for some of them. External LLMs offer frontier capability with contractual (not architectural) protection; on-premise solves data location by definition but lags the frontier by 12–18 months and is dominated by ongoing team cost. Hybrid isn't a compromise — it's the architecturally honest answer. Four questions (sensitivity, capability requirement, constraint structure, capability tolerance) sort workflows into four categories with different deployment fits. Hybrid works when four components are in place: a unified integration layer, policy-driven routing, a transformation layer for the external path, and shared governance. The failure modes of all-external (shadow AI) and all-on-premise (capability gap) share the same structure — a single-path policy that doesn't account for workflow heterogeneity gets bypassed in the workflows that don't fit. The realistic deployment for most regulated enterprises has both Path A (external + transformation) and Path B (on-premise) under one policy and audit framework.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai",
  datePublished = "2026-05-06",
  dateModified = "2026-05-06",
  inLanguage = "en-GB",
  breadcrumbLabel = "Where to Run Enterprise AI",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Running External LLMs on Data Your Company Can't Send Externally",
  related1Href = "/resources/learn/external-llm-on-sensitive-enterprise-data",
  related2Title = "When AI Must Run Without Network Access",
  related2Href = "/resources/learn/when-ai-must-run-without-network-access",
  related3Title = "Routing AI Workflows Between Cloud and Local Models",
  related3Href = "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
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

        .la-body p em { font-style: italic; }

        /* Product name span inside body */
        .la-body .wtre-product {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
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
            grid-template-columns: repeat(3, minmax(0, 1fr));
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

addPropertyControls(WhereToRunEnterpriseAi, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Where to Run Enterprise AI: External, On-Premise, or Both" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~12 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "The deployment question isn't \"external or on-premise\" — it's which workflows belong where. A typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints; forcing them into a single bucket produces architecture that's wrong for some of them. External LLMs offer frontier capability with contractual (not architectural) protection; on-premise solves data location by definition but lags the frontier by 12–18 months and is dominated by ongoing team cost. Hybrid isn't a compromise — it's the architecturally honest answer. Four questions (sensitivity, capability requirement, constraint structure, capability tolerance) sort workflows into four categories with different deployment fits. Hybrid works when four components are in place: a unified integration layer, policy-driven routing, a transformation layer for the external path, and shared governance. The failure modes of all-external (shadow AI) and all-on-premise (capability gap) share the same structure — a single-path policy that doesn't account for workflow heterogeneity gets bypassed in the workflows that don't fit. The realistic deployment for most regulated enterprises has both Path A (external + transformation) and Path B (on-premise) under one policy and audit framework.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-06" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-06" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "Where to Run Enterprise AI" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: "", displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Running External LLMs on Data Your Company Can't Send Externally" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/external-llm-on-sensitive-enterprise-data" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "When AI Must Run Without Network Access" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/when-ai-must-run-without-network-access" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Routing AI Workflows Between Cloud and Local Models" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models" },
})
