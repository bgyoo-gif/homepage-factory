// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"

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

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Where to Run Enterprise AI: External, On-Premise, or Both",
    lead: "The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.",
    category: "AI Architecture",
    readTime: "~12 min read",
    dateUpdated: "May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "The deployment question isn't \"external or on-premise\" — it's which workflows belong where. A typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints; forcing them into a single bucket produces architecture that's wrong for some of them. External LLMs offer frontier capability with contractual (not architectural) protection; on-premise solves data location by definition but lags the frontier by 12–18 months and is dominated by ongoing team cost. Hybrid isn't a compromise — it's the architecturally honest answer. Four questions (sensitivity, capability requirement, constraint structure, capability tolerance) sort workflows into four categories with different deployment fits. Hybrid works when four components are in place: a unified integration layer, policy-driven routing, a transformation layer for the external path, and shared governance. The failure modes of all-external (shadow AI) and all-on-premise (capability gap) share the same structure — a single-path policy that doesn't account for workflow heterogeneity gets bypassed in the workflows that don't fit. The realistic deployment for most regulated enterprises has both Path A (external + transformation) and Path B (on-premise) under one policy and audit framework.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "Where to Run Enterprise AI",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "When AI Must Run Without Network Access",
    related2Href: "/resources/learn/when-ai-must-run-without-network-access",
    related3Title: "Routing AI Workflows Between Cloud and Local Models",
    related3Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "엔터프라이즈 AI를 어디서 실행할 것인가: 외부, on-premise, 또는 둘 다",
    lead: "엔터프라이즈 AI의 배포 방식 결정은 이분법적이지 않습니다. 외부 LLM, on-premise 모델, hybrid 토폴로지는 각각 특정 워크플로우 유형에 맞으며, 대부분의 기업은 결국 하나 이상이 필요하게 됩니다. 의사결정 프레임워크입니다.",
    category: "AI Architecture",
    readTime: "~12분 읽기",
    dateUpdated: "2026년 5월",
    tldrLabel: "TL;DR",
    tldrBody: "배포 방식의 질문은 \"외부냐 on-premise냐\"가 아닙니다. 어떤 워크플로우가 어디에 속하는가의 문제입니다. 일반적인 기업은 민감도, 역량 요구사항, 제약 조건이 각각 다른 수십 개의 워크플로우를 보유합니다. 이를 하나의 버킷으로 강제하면 일부 워크플로우에 맞지 않는 아키텍처가 만들어집니다. 외부 LLM은 아키텍처적이 아닌 계약적 보호와 함께 frontier 역량을 제공합니다. on-premise는 정의상 데이터 위치 문제를 해결하지만 frontier보다 12~18개월 뒤처지며, 지속적인 팀 운영 비용이 지배적입니다. hybrid는 타협이 아닙니다. 아키텍처적으로 정직한 답입니다. 네 가지 질문(민감도, 역량 요구사항, 제약 구조, 역량 저하 허용 범위)이 워크플로우를 배포 방식이 다른 네 가지 카테고리로 분류합니다. hybrid가 작동하려면 네 가지 구성 요소가 갖춰져야 합니다. 통합 통합 레이어, 정책 기반 라우팅, 외부 경로를 위한 변환 레이어, 그리고 공유 거버넌스입니다. 전체 외부(shadow AI)와 전체 on-premise(역량 격차)의 실패 패턴은 동일한 구조를 공유합니다. 워크플로우 이질성을 고려하지 않는 단일 경로 정책은 맞지 않는 워크플로우에서 우회됩니다. 대부분의 규제 기업에 현실적인 배포는 하나의 정책과 감사 프레임워크 하에 Path A(외부 + 변환)와 Path B(on-premise) 모두를 포함합니다.",
    bodyHtml: `<h2>1. 결정은 이분법적이지 않습니다 — 이분법으로 만드는 관점 자체가 문제입니다</h2>
<p>초기의 열기가 가라앉은 후 엔터프라이즈 AI 프로그램이 처음 마주치는 진지한 질문은 모델을 실제로 어디서 실행할 것인가입니다. 논의는 빠르게 양극화되는 경향이 있습니다. 보안팀은 on-premise를 주장합니다. 데이터를 내부에 유지하고 국경 간 이전 문제를 없애자고 합니다. 제품팀은 외부를 주장합니다. frontier 모델은 내부 모델이 할 수 없는 것을 하며, 뒤처지는 것이 통제된 위험보다 더 위험하다고 합니다. 플랫폼팀은 가장 빨리 구축할 수 있는 것을 주장합니다. 그리고 대부분의 조직에서, 누군가가 <strong>세 가지 입장이 서로 다른 워크플로우를 설명한다</strong>는 것을 알아채기까지 몇 달 동안 이 삼각형을 맴돕니다. 올바른 답은 아마도 각각의 일부일 것입니다.</p>
<p>대부분의 엔터프라이즈 AI 배포 논의는 하나의 질문에서 시작합니다. <em>외부 LLM을 사용할 것인가, 아니면 자체 모델을 실행할 것인가?</em> 이 관점은 답이 회사 전체에 균일하게 적용된다고 가정합니다. <strong>그렇지 않습니다.</strong></p>
<p>일반적인 기업은 AI가 유용할 수십 개의 워크플로우를 보유합니다. 그 중 일부 — 마케팅 카피 작성, 공개 문서 요약, 내부 교육 콘텐츠 생성 — 는 의미 있는 민감도 제약이 없습니다. 데이터는 어디로 보내도 무방합니다. 어디에 호스팅되든 가장 역량 있는 모델이 올바른 선택입니다. 이를 처리하기 위해 내부 인프라를 운영해야 할 운영상의 이유가 없습니다.</p>
<p>동일한 기업 내 다른 워크플로우들 — 고객 서비스 티켓 처리, 운영 로그 분석, 임상 노트 작성, 대출 신청 검토 — 은 계약적 데이터 위치 약정부터 섹터별 데이터 자세, 무엇을 어디로 보낼 것인가에 대한 내부 거버넌스까지 다양한 제약 하에 있습니다. 마케팅 카피에는 괜찮은 모델이 이것들에는 적합하지 않습니다. <strong>이러한 워크플로우에 대한 선택은 진짜입니다.</strong></p>
<p>세 번째 카테고리 — 기밀 방위 작전, 합법적 감청 데이터, 특정 의료 시나리오 — 는 안전장치에 관계없이 어떠한 외부 엔드포인트도 허용하지 않는 제약 하에 있습니다. 이러한 워크플로우에 대한 선택도 실제이지만, 그것은 다른 선택입니다.</p>
<p>이 세 가지 카테고리를 하나의 결정인 것처럼 취급하면 잘못된 아키텍처가 만들어집니다. 쉬운 워크플로우를 과잉 보호하거나(비례적 가치를 제공하지 않으면서 운영 노력이 드는 내부 인프라에서 실행), 어려운 워크플로우를 충분히 보호하지 못합니다(그것이 회사의 "AI 전략"이기 때문에 외부 엔드포인트로 보냄). <strong>현실적인 답은 워크플로우 카테고리마다 다른 결정을 내리고, 그 결정들이 공존할 수 있는 인프라를 운영하는 것입니다.</strong></p>

<h2>2. 외부 LLM — 실제로 잘하는 것과 한계</h2>
<p>외부 LLM의 타당성은 명확하며 정확하게 이해할 가치가 있습니다. frontier 모델들 — GPT-5급 시스템, Claude Opus급, Gemini Ultra급 — 은 어떤 기업도 내부 인프라로는 따라잡을 수 없는 역량 수준에서 작동합니다. 전체 문서 포트폴리오를 처리하는 컨텍스트 윈도우를 가집니다. 소형 모델이 접근할 수 없는 품질로 복잡한 구조를 추론합니다. 기업이 재학습 비용을 지불하지 않아도 몇 달마다 더 나아집니다. <strong>역량이 중요한 워크플로우에서 이것은 미미한 이점이 아닙니다. 다른 카테고리의 시스템입니다.</strong></p>
<p>비용 측면도 솔직하게 살펴볼 가치가 있습니다. 외부 LLM은 벤더가 운영하는 API를 통해 접근하며, 모델은 벤더의 인프라, 벤더의 데이터 센터에서, 벤더의 운영 통제 하에 실행됩니다. 기업은 해당 엔드포인트에 데이터를 보내고 응답을 받습니다. 벤더의 계약적 약정 — 데이터 처리 계약, 지역 엔드포인트, 삭제 정책 — 은 벤더가 데이터로 할 것과 하지 않을 것을 설명합니다. <strong>벤더의 호스트 국가 법률이 다른 당사자에게 허용할 수 있는 것은 설명하지 않습니다.</strong></p>
<p>데이터가 민감하지 않은 워크플로우에서 이것은 문제가 되지 않습니다. 데이터는 민감하지만 아키텍처 선택(지역 엔드포인트, 전송 전 변환, 고객 제어 매핑)을 통해 데이터 위치 제약을 충족할 수 있는 워크플로우에서는 해결 가능합니다. 이 접근 방식에 대한 더 광범위한 설명에서 방법을 다룹니다.</p>
<p>데이터가 민감하고 <em>더불어</em> 어떻게 변환되더라도 데이터의 어떤 버전도 외부 엔드포인트로 보낼 수 없다는 제약이 있는 워크플로우에서 외부 LLM은 선택지가 아닙니다. 일부 워크플로우는 실제로 이 카테고리에 해당합니다. <strong>오류는 민감한 워크플로우 전부가 그렇다고 가정하는 것입니다.</strong></p>

<h2>3. On-Premise LLM — 강점과 취약한 부분</h2>
<p>내부 인프라에서 모델을 실행하는 타당성도 언뜻 보면 명확합니다. 데이터는 절대 외부로 나가지 않습니다. 국경 간 이전에 관한 계약적 질문은 아예 발생하지 않습니다. 절대적인 데이터 위치 제약 하의 워크플로우 — 방위, 특정 규제 의료 카테고리, 특정 금융 거래 세그먼트 — 에서 이것은 유일한 선택이며, 진지하게 고려할 가치가 있습니다.</p>
<p>강점은 실제입니다.</p>
<ul>
  <li><strong>데이터 위치는 정의상 해결됩니다.</strong> 모델은 데이터가 있는 곳에서 실행됩니다. 이전 문제는 발생하지 않습니다. 기업이 운영 데이터를 정의된 경계 내에 유지하도록 구속하는 섹터별 약정 하의 워크플로우에서 이것은 제약에 깔끔하게 매핑됩니다.</li>
  <li><strong>운영 통제는 완전합니다.</strong> 모델은 기업 자체의 변경 관리 프로세스 하에 튜닝, 파인튜닝, 평가, 모니터링, 롤백될 수 있습니다. 기업이 승인하지 않은 모델 업데이트를 하는 벤더가 없습니다.</li>
  <li><strong>레이턴시를 예측 가능하게 만들 수 있습니다.</strong> 기업 자체 네트워크에서 실행되는 모델은 외부 엔드포인트로의 왕복을 피할 수 있으며, 일부 실시간 워크플로우에서 중요합니다.</li>
</ul>
<p>비용도 실제이며, 프로덕션 AI 인프라를 운영해본 적 없는 팀에게는 과소평가되는 경향이 있습니다.</p>
<ul>
  <li><strong>모델 역량이 뒤처집니다.</strong> 기업이 실제로 호스팅할 수 있는 오픈소스 모델들 — Llama, Mistral, Qwen 및 그 후속 모델들 — 은 좋은 모델입니다. 그러나 어느 시점에서도 기업이 보통 중요하게 여기는 차원에서 frontier 외부 모델만큼 역량 있지 않습니다. 복잡한 문서에 대한 추론, 익숙하지 않은 형식 처리, 긴 컨텍스트 분석. 격차는 일반적으로 12~18개월이며 시간이 지나면서 줄어들 수 있지만 없어지지 않습니다.</li>
  <li><strong>운영 비용은 크고 지속적입니다.</strong> 프로덕션에서 진지한 모델을 실행한다는 것은 GPU 인프라, 모델 서빙 인프라(vLLM, TGI 또는 유사한 것), 평가 파이프라인, 모니터링, 그리고 이 모든 것을 계속 운영하는 방법을 아는 팀을 의미합니다. <strong>비용은 GPU가 아니라 팀에 의해 지배됩니다.</strong> 엔터프라이즈 서빙을 위한 소규모 AI 인프라 팀은 5~10명의 엔지니어입니다. 진지한 팀은 그 두 배입니다. 모델 자체는 저렴한 부분입니다.</li>
  <li><strong>취약성은 업데이트에서 나타납니다.</strong> 몇 달마다 frontier 외부 모델이 비즈니스팀의 기대를 바꾸는 방식으로 도약합니다. 내부 모델은 아무리 잘 튜닝되어도 도약하지 않습니다. 공개 논의에서 <em>"AI가 할 수 있는 것"</em>과 기업에서 <em>"우리 내부 AI가 할 수 있는 것"</em> 사이의 격차가 커지고, 그에 대해 무언가를 해야 한다는 압박도 함께 커집니다.</li>
</ul>
<p>제약이 절대적이고 — 워크플로우가 역량 있는 소형 모델로 충분할 만큼 제한적인 경우 — <strong>on-premise가 올바른 답입니다</strong>. 제약이 실제이지만 절대적이지 않고 AI 역량이 중요한 워크플로우에서 <strong>on-premise만으로는 작동하지만 성능이 저하되는 시스템이 만들어집니다</strong>.</p>

<h2>4. Hybrid — 타협이 아니라 아키텍처적으로 정직한 답</h2>
<p>세 번째 옵션 — 일부 워크플로우는 외부 엔드포인트로, 일부는 내부 인프라에서 실행하는 hybrid 토폴로지 운영 — 은 엔터프라이즈 논의에서 너무 빨리 기각됩니다. 기각은 보통 두 가지 형태 중 하나를 취합니다.</p>
<p>첫 번째는 운영 측면입니다. <em>"둘 다 실행하는 것이 하나를 실행하는 것보다 더 복잡하므로 하나를 선택해야 한다."</em> 이것은 사실이지만 요점을 놓칩니다. 각각을 필요로 하는 워크플로우가 서로 다른 워크플로우라면 둘 다 실행하는 것이 더 복잡하지 않습니다. hybrid 토폴로지의 복잡성은 어떤 모델이 어떤 워크플로우를 처리할지 결정하는 라우팅 레이어에 있습니다. <strong>그 라우팅 레이어는 선택사항이 아닙니다</strong> — 순수 외부 또는 순수 on-premise 기업도 라우팅 레이어가 있으며, 단지 사소할 뿐입니다 — 라우팅 레이어가 존재하면 두 개의 백엔드를 지원하는 것은 점진적 복잡성이지 범주적 복잡성이 아닙니다.</p>
<p>두 번째는 거버넌스입니다. <em>"AI에 대한 하나의 정책을 가져야 한다."</em> 이것도 사실이며 요점을 놓칩니다. 단일 정책은 <em>"모든 AI가 외부에서 실행된다"</em>나 <em>"모든 AI가 on-premise에서 실행된다"</em>가 아닙니다. 단일 정책은 <em>"X 클래스의 워크플로우는 이러한 안전장치와 함께 외부에서 실행됩니다. Y 클래스의 워크플로우는 on-premise에서 실행됩니다. 라우팅은 시행되고 감사됩니다."</em>입니다. 그것은 일관된 거버넌스 자세이며, 계획했든 하지 않았든 대부분의 대기업이 결국 도달하는 자세입니다.</p>
<p>hybrid를 아키텍처적으로 정직한 답으로 만드는 것은 <strong>엔터프라이즈 AI 워크로드의 실제 구조와 일치한다</strong>는 점입니다. 일부 워크플로우는 frontier 역량에서 크게 이점을 얻고 변환 기반 안전장치를 허용합니다. 일부 워크플로우는 안전장치에 관계없이 외부 엔드포인트를 배제하는 제약을 가집니다. 모든 워크플로우를 어느 한 버킷으로 강제하면 일부에 맞지 않는 시스템이 만들어집니다. hybrid는 각 워크플로우가 필요한 배포 방식을 얻을 수 있게 합니다.</p>
<p>hybrid의 어려운 부분은 두 개의 백엔드를 실행하는 것이 아닙니다. <strong>워크플로우가 가야 할 곳으로 가도록, 정책이 무시되지 않고 시행되도록, 나중에 팀이 결정을 방어할 수 있을 만큼 감사 추적이 명확하도록 라우팅 결정을 충분히 정밀하게 만드는 것입니다.</strong> 그것은 인프라 문제가 아니라 설계 문제입니다.</p>

<h2>5. 워크플로우를 위한 의사결정 프레임워크</h2>
<p>결정을 구체적으로 만드는 유용한 방법은 각 워크플로우를 네 가지 질문에 대해 평가하는 것입니다.</p>
<ol>
  <li><strong>워크플로우가 처리하는 데이터의 민감도는 무엇입니까?</strong> 기업 내 어떤 데이터의 최대 민감도가 아니라 이 워크플로우가 필요로 하는 특정 데이터의 민감도입니다. 마케팅 카피와 고객 기록은 같은 비즈니스 부서가 소유하더라도 서로 다른 워크플로우입니다.</li>
  <li><strong>AI 작업의 역량 요구사항은 무엇입니까?</strong> 일부 작업 — 수신 티켓을 열 개 카테고리로 분류, 간단한 엔터티 추출, 형식 변환 — 은 소형 모델에서 잘 작동합니다. 일부 작업 — 백 페이지 계약서에 대한 추론, 이질적인 로그에서 근본 원인 합성, 임상 내러티브 작성 — 은 frontier 역량이 필요합니다.</li>
  <li><strong>제약 구조는 무엇입니까?</strong> 제약이 절대적(데이터의 어떤 버전도 나갈 수 없음)입니까, 아니면 조건부(데이터를 적절히 변환하면 나갈 수 있음)입니까? 외부 약정(고객 계약, 섹터 약정)에 의해 이끌어지는 것입니까, 아니면 내부 거버넌스(회사 자체의 데이터 자세)에 의한 것입니까?</li>
  <li><strong>워크플로우의 역량 저하 허용 범위는 무엇입니까?</strong> 일부 워크플로우는 frontier보다 12개월 뒤처진 모델로도 가치를 제공합니다. 일부 워크플로우는 그 자체가 비즈니스가 구축하려는 차별화 역량이며, 모델 격차가 바로 그 격차입니다.</li>
</ol>
<p>답은 대략적인 카테고리로 묶입니다.</p>
<table>
  <thead>
    <tr>
      <th>워크플로우 카테고리</th>
      <th>예시</th>
      <th>배포 방식</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>낮은 민감도, 높은 역량 요구사항, 제약 없음</td>
      <td>마케팅 카피, 공개 문서 요약, 내부 교육 콘텐츠</td>
      <td>외부 LLM, 변환 없음</td>
    </tr>
    <tr>
      <td>민감하지만 변환 가능, 높은 역량 요구사항, 조건부 제약</td>
      <td>고객 서비스 티켓, 운영 로그, 계약 검토, 임상 노트</td>
      <td>외부 LLM + 변환 레이어 (Path A)</td>
    </tr>
    <tr>
      <td>민감함, 역량 허용 범위 있음, 절대적 제약</td>
      <td>방위 워크플로우, 특정 기밀 카테고리, 합법적 감청</td>
      <td>On-premise 모델 (Path B)</td>
    </tr>
    <tr>
      <td>민감함, 높은 역량 요구사항, 절대적 제약</td>
      <td>가장 어려운 카테고리 — 필요한 것과 허용되는 것 사이의 격차</td>
      <td>작업 범위 축소, on-premise 역량 대기, 또는 격차 수용</td>
    </tr>
  </tbody>
</table>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" aria-labelledby="decision-framework-title decision-framework-desc">
      <title id="decision-framework-title">워크플로우 의사결정 프레임워크</title>
      <desc id="decision-framework-desc">워크플로우 제약 구조(조건부 대 절대)와 역량 요구사항(낮음 대 frontier)을 두 축으로 하는 2x2 행렬로, 각 조합에 대한 배포 방식을 보여주는 네 개의 사분면.</desc>

      <line x1="120" y1="420" x2="120" y2="50" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="60" y="240" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2" transform="rotate(-90, 60, 240)">역량 요구사항</text>
      <text x="100" y="70" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Frontier</text>
      <text x="100" y="415" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">낮음</text>

      <line x1="120" y1="420" x2="900" y2="420" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="510" y="465" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">제약 구조</text>
      <text x="320" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">낮음 또는 조건부</text>
      <text x="700" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">절대적</text>

      <rect x="140" y="60" width="350" height="160" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="160" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">외부 LLM + 변환 (Path A)</text>
      <text x="160" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">고객 서비스 티켓 · 운영</text>
      <text x="160" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">로그 · 계약 검토 · 임상 노트</text>
      <text x="160" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">민감하지만 변환 가능; 제약은</text>
      <text x="160" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">아키텍처 선택을 통해 충족 가능.</text>

      <rect x="530" y="60" width="350" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="550" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">가장 어려운 카테고리 — 명확한 답 없음</text>
      <text x="550" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">고위험 방위 분석 · frontier 추론이</text>
      <text x="550" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">필요한 민감 의료</text>
      <text x="550" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">소형 모델에 맞게 작업 범위 축소,</text>
      <text x="550" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">또는 역량 격차 수용.</text>

      <rect x="140" y="245" width="350" height="160" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="160" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">외부 LLM, 변환 없음</text>
      <text x="160" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">마케팅 카피 · 공개 문서</text>
      <text x="160" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">요약 · 내부 교육 콘텐츠</text>
      <text x="160" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">의미 있는 민감도 제약 없음;</text>
      <text x="160" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">데이터는 어디로 보내도 무방.</text>

      <rect x="530" y="245" width="350" height="160" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
      <text x="550" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">On-premise 모델 (Path B)</text>
      <text x="550" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">방위 워크플로우 · 기밀</text>
      <text x="550" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">카테고리 · 합법적 감청 데이터</text>
      <text x="550" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">역량 있는 소형 모델로 충분히</text>
      <text x="550" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">제한된 워크플로우.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>두 축 — 역량 요구사항과 제약 구조 — 으로 워크플로우를 플롯하면 네 가지 배포 방식이 나옵니다. 대부분의 기업은 모든 사분면에 워크플로우를 가집니다.</strong></figcaption>
</figure>

<p><strong>대부분의 기업은 자사 워크플로우 목록이 네 가지 카테고리 전부에 걸쳐 있음을 발견합니다. 배포 아키텍처는 네 가지 모두를 처리해야 하며, 이는 기본적으로 hybrid를 의미합니다.</strong></p>

<h2>6. 실제에서 Hybrid가 어떻게 보이는가</h2>
<p>hybrid 배포는 <em>"여기에 모델 하나, 저기에 모델 하나"</em>가 아닙니다. <strong>라우팅 결정 — 어떤 백엔드가 어떤 요청을 처리하는가 — 이 정책 기반이고, 감사 가능하며, 일관된</strong> 통합 아키텍처입니다.</p>
<p>이를 가능하게 하는 구성 요소들입니다.</p>
<p><strong>6.1 통합 통합 레이어</strong></p>
<p>워크플로우는 외부 엔드포인트나 on-premise 모델을 직접 호출하지 않습니다. 라우팅을 처리하는 통합 레이어를 호출합니다. 이는 <strong>워크플로우가 백엔드 선택 변경으로부터 보호된다</strong>는 것을 의미합니다. 새로운 제약, 벤더 변경, 또는 정책 업데이트로 인해 워크플로우를 외부에서 on-premise로 이동해야 하는 경우, 워크플로우는 변경되지 않습니다. 라우팅 규칙이 변경됩니다.</p>
<p><strong>6.2 정책 기반 라우팅</strong></p>
<p>워크플로우가 어디서 실행되는지에 대한 결정은 워크플로우 자체 코드가 아닌 정책으로 인코딩됩니다. <em>"EU 지역에서 customer-service로 태그된 워크플로우는 캡슐화 레이어가 있는 외부 엔드포인트로 갑니다. classified로 태그된 워크플로우는 on-premise 모델로 갑니다. marketing-content로 태그된 워크플로우는 변환 없이 외부 엔드포인트로 갑니다."</em> <strong>정책은 버전 관리되고 감사 가능합니다.</strong></p>
<p><strong>6.3 외부 경로를 위한 변환 레이어</strong></p>
<p>워크플로우가 외부 엔드포인트로 라우팅될 때, 민감 요소는 전송 전에 변환되고 응답 시 복원됩니다. <strong>동일한 변환 인프라는 라우팅 대상 외부 엔드포인트에 관계없이 작동합니다</strong> — 추상화는 특정 벤더가 아닌 백엔드에 대한 것입니다.</p>
<p><strong>6.4 공유 거버넌스</strong></p>
<p>감사 로그, 정책 관리, 접근 통제는 두 경로를 균일하게 커버합니다. <strong>팀은 외부용과 on-premise용으로 두 개의 거버넌스 프레임워크를 갖지 않습니다. 각 요청의 경로가 기록되는 하나를 가집니다.</strong></p>
<p>이 네 가지 구성 요소가 갖춰지면, <em>"이 워크플로우는 어디서 실행되어야 하는가"</em>라는 질문은 아키텍처 약정이 아닌 정책 결정이 됩니다. 워크플로우는 통합을 재작성하지 않고도 필요에 따라 경로 사이를 이동할 수 있습니다.</p>

<h2>7. 하나의 경로를 전체 답으로 취급할 때 무엇이 잘못되는가</h2>
<p>단일 배포 경로를 선택한 기업에서 일관되게 나타나는 두 가지 실패 패턴이 있습니다.</p>
<ul>
  <li><strong>전체 외부 조직.</strong> 외부 LLM이 전체 AI 전략이라고 결정한 기업은 정책이 허용하지 않는 워크플로우에 부딪히며, 두 가지 중 하나가 발생합니다. 해당 워크플로우가 AI를 받지 못하거나(회사가 AI가 가장 중요한 업무에서 뒤처짐), 워크플로우가 비공식 채널을 통해 AI를 받습니다 — 직원이 소비자 챗봇에 민감한 데이터를 붙여넣거나, 비즈니스 부서가 중앙 프로세스 외부에서 AI 도구를 구매하거나, 중앙 보안 검토 없이 벤더가 통합됩니다. <strong>shadow AI는 자사에 맞지 않는 워크플로우를 고려하지 않는 AI 전략의 예측 가능한 결과입니다.</strong></li>
  <li><strong>전체 on-premise 조직.</strong> 외부 LLM이 전반적으로 허용되지 않는다고 결정한 기업은 역량 격차에 부딪힙니다. 내부 모델은 일부 워크플로우에는 충분하고 다른 것들에는 그렇지 않습니다. 충분하지 않은 워크플로우는 저성과를 내거나(회사 경쟁자가 해당 작업에서 앞서 나감), 비즈니스 부서가 동일한 shadow 채널을 통해 정책을 우회합니다. <strong>전체 on-premise 자세의 규율은 보이는 것보다 유지하기 어렵습니다. 특히 frontier 외부 모델이 계속 발전함에 따라 더욱 그렇습니다.</strong></li>
</ul>
<p>두 실패 패턴은 동일한 구조를 공유합니다. <strong>엔터프라이즈 워크플로우의 이질성을 고려하지 않는 정책은 맞지 않는 워크플로우에서 우회되며, 그 우회는 명시적 경로보다 거버넌스하기 더 어렵습니다.</strong></p>

<h2>8. 이것이 이어지는 아키텍처</h2>
<p>대부분의 규제 기업에서, 이 질문들을 통해 도출되는 배포는 몇 가지 일관된 속성을 가집니다.</p>
<p>데이터 민감도가 요구하는 경우를 처리하는 변환 레이어를 통해 접근하는 외부 LLM 백엔드가 있습니다. 외부 엔드포인트가 실행 불가능한 워크플로우를 처리하는 on-premise 모델 — 보통 잘 선택된 소형 오픈소스 모델 — 이 있습니다. 정책에 따라 어떤 워크플로우가 어디로 가는지 결정하는 라우팅 레이어가 있습니다. 두 경로를 커버하는 통합 거버넌스 및 감사 프레임워크가 있습니다. <strong>그리고 이것이 완성된 상태가 아니라는 인식이 있습니다</strong> — 제약이 변하고, 새로운 외부 모델이 가용해지고, 새로운 on-premise 역량이 성숙하고, 비즈니스 자체 자세가 진화함에 따라 워크플로우는 경로 사이를 이동합니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="hybrid-architecture-title hybrid-architecture-desc">
      <title id="hybrid-architecture-title">Hybrid 배포 아키텍처 — Path A와 Path B</title>
      <desc id="hybrid-architecture-desc">엔터프라이즈 워크플로우가 정책 기반 라우팅을 가진 통합 통합 레이어로 흘러들어가 Path A(캡슐화 레이어를 통한 외부 LLM)와 Path B(on-premise 모델)로 분기되며, 두 경로를 커버하는 공유 거버넌스를 보여주는 다이어그램.</desc>

      <g>
        <rect x="40" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="140" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">마케팅 &amp; 공개 문서</text>
        <text x="140" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">낮은 민감도</text>

        <rect x="260" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="360" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">고객 운영 &amp; 임상</text>
        <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">민감하지만 변환 가능</text>

        <rect x="480" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="580" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">방위 &amp; 기밀</text>
        <text x="580" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">절대적 제약</text>

        <rect x="700" y="30" width="220" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="810" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">기타 워크플로우</text>
        <text x="810" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">다양한 민감도</text>
      </g>

      <g>
        <rect x="180" y="130" width="560" height="68" rx="10" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="200" y="154" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#9ca3af" letter-spacing="1.2">통합 통합 레이어</text>
        <text x="460" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#ffffff">정책 기반 라우팅</text>
        <text x="460" y="194" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#9ca3af" font-style="italic">버전 관리됨 · 시행됨 · 감사 가능</text>
      </g>

      <g>
        <rect x="40" y="248" width="420" height="120" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">PATH A · 외부 LLM + 캡슐화</text>

        <rect x="60" y="288" width="180" height="64" rx="6" fill="#ffffff" stroke="#5b4fe9" stroke-width="1"/>
        <text x="150" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">캡슐화 레이어</text>
        <text x="150" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">토큰화 · 구조</text>
        <text x="150" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">보존 · 복원</text>

        <rect x="260" y="288" width="180" height="64" rx="6" fill="#0f1130" stroke="#0f1130" stroke-width="1"/>
        <text x="350" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#ffffff">외부 frontier LLM</text>
        <text x="350" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">ChatGPT · Claude</text>
        <text x="350" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">Gemini · 기타</text>

      <g>
        <rect x="500" y="248" width="420" height="120" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="520" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">PATH B · ON-PREMISE 로컬 모델</text>

        <rect x="520" y="288" width="380" height="64" rx="6" fill="#ffffff" stroke="#0ea5a4" stroke-width="1"/>
        <text x="710" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">엔터프라이즈 인프라의 로컬 모델</text>
        <text x="710" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Llama · Mistral · Qwen — 파인튜닝됨</text>
        <text x="710" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">데이터는 경계를 벗어나지 않음</text>
      </g>

      <g>
        <rect x="40" y="394" width="880" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="416" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#b45309" letter-spacing="1.2">공유 거버넌스</text>
        <text x="480" y="423" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f1130">하나의 정책 · 하나의 감사 로그 · 두 경로를 커버하는 하나의 접근 통제 프레임워크</text>
      </g>

      <line x1="250" y1="368" x2="250" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="368" x2="710" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 2 · <strong>워크플로우는 정책에 따라 라우팅하는 통합 통합 레이어를 통해 흘러갑니다 — Path A(캡슐화를 통한 외부 LLM) 또는 Path B(on-premise 로컬 모델) — 공유 거버넌스 하에 모두.</strong></figcaption>
</figure>

<p><span class="wtre-product">LLM Capsule</span>은 단일 아키텍처의 일부로 두 경로를 모두 지원합니다. <strong>Path A</strong>는 기업 환경 내에서 토큰화, 구조 보존, 복원을 처리하는 캡슐화 레이어를 통해 워크플로우를 승인된 외부 LLM으로 라우팅합니다. <strong>Path B</strong>는 외부 엔드포인트가 선택지가 아닐 때 워크플로우를 on-premise 로컬 모델로 라우팅합니다. 동일한 캡슐화 레이어, 동일한 정책 프레임워크, 동일한 감사가 두 경로를 커버합니다. <strong>배포 결정은 회사를 위한 아키텍처 약정이 아닌 워크플로우별 정책 선택이 됩니다.</strong></p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>배포 방식의 결정은 이분법적이지 않습니다 — 서로 다른 워크플로우는 민감도, 역량 요구사항, 제약 조건이 다릅니다. 단일 경로 정책은 일부에 맞지 않습니다</li>
    <li>외부 LLM은 계약적(아키텍처적이 아닌) 보호와 함께 frontier 역량을 제공합니다 — 낮은 민감도 워크플로우에는 적합하고, 조건부 제약에는 변환 레이어로 해결 가능하며, 절대적 제약에는 제한됩니다</li>
    <li>on-premise는 정의상 데이터 위치를 해결하지만 frontier보다 12~18개월 뒤처집니다. 지배적 비용은 GPU가 아닌 팀(최소 5~10명의 엔지니어)입니다</li>
    <li>hybrid는 아키텍처적으로 정직한 답입니다 — 엔터프라이즈 워크로드의 실제 구조와 일치하며, 하나의 버킷으로 강제하지 않습니다</li>
    <li>네 가지 질문이 워크플로우를 네 가지 카테고리로 분류합니다. 민감도, 역량 요구사항, 제약 구조(절대적 대 조건부), 역량 저하 허용 범위</li>
    <li>작동하는 hybrid에는 네 가지 구성 요소가 필요합니다. 통합 통합 레이어, 정책 기반 라우팅, 외부 경로를 위한 변환 레이어, 공유 거버넌스</li>
    <li>전체 외부 조직은 shadow AI를 만들어냅니다. 전체 on-premise 조직은 역량 격차 우회 방법을 만들어냅니다 — 두 실패 패턴 모두 우회된 정책입니다</li>
    <li>하나의 정책 및 감사 프레임워크 하에 Path A(외부 + 캡슐화)와 Path B(on-premise 로컬)는 계획하든 하지 않든 대부분의 규제 기업이 도달하는 배포입니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>왜 배포 결정이 단순히 외부 또는 on-premise가 아닌가요?</h3>
<p>일반적인 기업은 민감도, 역량 요구사항, 제약 조건이 각각 다른 수십 개의 워크플로우를 가지기 때문입니다. 마케팅 카피와 고객 서비스 티켓은 같은 비즈니스 부서가 소유하더라도 서로 다른 워크플로우입니다. 이것들을 하나의 결정으로 취급하면 쉬운 워크플로우를 과잉 보호하거나(비례적 가치를 제공하지 않으면서 운영 노력이 드는 내부 인프라에서 실행), 어려운 것들을 충분히 보호하지 못합니다(그것이 회사의 "AI 전략"이기 때문에 외부 엔드포인트로 보냄). 현실적인 답은 워크플로우 카테고리마다 다른 결정입니다.</p>

<h3>외부 LLM이 실제로 잘하는 것은 무엇이고, 한계는 무엇입니까?</h3>
<p>frontier 외부 모델들(GPT-5급, Claude Opus급, Gemini Ultra급)은 어떤 기업도 내부적으로 따라잡을 수 없는 역량 수준에서 작동합니다 — 긴 컨텍스트 윈도우, 복잡한 문서 추론, 재학습 사이클 없이 정기적 개선. 역량이 중요한 워크플로우에서 이것은 다른 카테고리의 시스템입니다. 한계는 모델이 아키텍처적 보장이 아닌 벤더의 계약적 약정 하에 벤더의 인프라에서 실행된다는 것입니다. 안전장치에 관계없이 데이터 민감도가 외부 엔드포인트를 배제하는 워크플로우에서 외부 LLM은 선택지가 아닙니다.</p>

<h3>on-premise가 올바른 답인 경우는 언제입니까?</h3>
<p>제약이 절대적(방위, 특정 기밀 카테고리, 어떻게 변환되더라도 데이터의 어떤 버전도 나갈 수 없는 워크플로우)이고 역량 있는 소형 모델로 충분할 만큼 워크플로우가 제한적인 경우입니다. 강점은 실제입니다 — 데이터 위치는 정의상 해결되고, 운영 통제는 완전하며, 레이턴시를 예측 가능하게 만들 수 있습니다. 비용도 실제이며 과소평가되는 경향이 있습니다. frontier 모델 대비 12~18개월의 역량 지연, 팀(최소 5~10명의 엔지니어)에 의해 지배되는 지속적 운영 비용, 그리고 frontier가 도약하고 내부 모델이 그러지 못할 때의 취약성입니다.</p>

<h3>hybrid 토폴로지를 실행하는 것이 하나의 경로를 선택하는 것보다 더 복잡하지 않습니까?</h3>
<p>표면적으로만 그렇습니다. 각각을 필요로 하는 워크플로우가 서로 다른 워크플로우라면 — 실제로 그렇습니다 — 둘 다 실행하는 것이 더 복잡하지 않습니다. hybrid의 복잡성은 어떤 모델이 어떤 워크플로우를 처리할지 결정하는 라우팅 레이어에 있습니다. 그 라우팅 레이어는 선택사항이 아닙니다. 순수 외부 또는 순수 on-premise 기업도 하나를 가지며, 단지 사소할 뿐입니다. 라우팅 레이어가 존재하면 두 개의 백엔드를 지원하는 것은 점진적 복잡성이지 범주적 복잡성이 아닙니다. 어려운 부분은 워크플로우가 가야 할 곳으로 가도록, 정책이 시행되고 감사 추적이 명확하도록 라우팅 결정을 충분히 정밀하게 만드는 것입니다.</p>

<h3>어떤 워크플로우가 어디로 가는지 어떻게 결정합니까?</h3>
<p>각 워크플로우를 네 가지 질문에 대해 평가합니다. <strong>데이터 민감도</strong>(기업 어디서나 최대가 아닌 이 워크플로우가 필요로 하는 특정 데이터의). <strong>역량 요구사항</strong>(작업에 frontier 추론이 필요한가, 아니면 소형 모델로 충분한가). <strong>제약 구조</strong>(절대적 또는 조건부, 외부 주도 또는 내부 거버넌스). <strong>역량 저하 허용 범위</strong>. 답은 대략적인 카테고리로 묶입니다. 낮은 민감도는 외부, 변환 가능하고 높은 역량은 변환과 함께 외부, 절대 제약이지만 제한적인 경우는 on-premise, 절대 제약과 높은 역량은 가장 어렵습니다 — 오늘날 완전히 해결할 수 없는 경우도 있습니다.</p>

<h3>전체 외부 또는 전체 on-premise 접근 방식에서 무엇이 잘못됩니까?</h3>
<p>전체 외부 조직은 정책이 허용하지 않는 워크플로우에 부딪히며, 해당 워크플로우가 AI를 받지 못하거나(회사가 AI가 가장 중요한 업무에서 뒤처짐) 비공식 채널을 통해 AI를 받습니다 — shadow AI는 예측 가능한 결과입니다. 전체 on-premise 조직은 역량 격차에 부딪힙니다. 내부 모델은 일부 워크플로우에는 충분하고 다른 것들에는 그렇지 않으며, 비즈니스 부서는 동일한 shadow 채널을 통해 정책을 우회합니다. 두 실패 패턴은 동일한 구조를 공유합니다. 워크플로우 이질성을 고려하지 않는 정책은 결국 우회됩니다.</p>

<h3>작동하는 hybrid 아키텍처는 실제로 어떻게 생겼습니까?</h3>
<p>네 가지 구성 요소입니다. <strong>통합 통합 레이어</strong>(워크플로우는 백엔드를 직접 호출하지 않고 이 레이어를 호출하므로 라우팅 변경으로부터 보호됩니다). <strong>정책 기반 라우팅</strong>(워크플로우가 어디서 실행되는지에 대한 결정은 워크플로우에 하드코딩되지 않고 정책으로 인코딩되며, 버전 관리되고 감사 가능합니다). <strong>외부 경로를 위한 변환 레이어</strong>(민감 요소는 전송 전에 변환되고 응답 시 복원되며, 대상 외부 벤더를 추상화합니다). <strong>공유 거버넌스</strong>(두 경로를 균일하게 커버하는 하나의 감사 로그, 하나의 정책 프레임워크, 하나의 접근 통제 모델). 네 가지 모두 갖춰지면 워크플로우가 어디서 실행되는지는 아키텍처 약정이 아닌 정책 결정이 됩니다.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "Where to Run Enterprise AI",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "When AI Must Run Without Network Access",
    related2Href: "/resources/learn/when-ai-must-run-without-network-access",
    related3Title: "Routing AI Workflows Between Cloud and Local Models",
    related3Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "KI im Unternehmen: extern, On-Premise oder beides",
    lead: "Welches Betriebsmodell für KI passt zu welchem Workflow? Externe LLMs, On-Premise-Modelle und hybride Topologien erfüllen jeweils unterschiedliche Anforderungen. Die meisten Unternehmen brauchen am Ende mehr als eine Option. Ein Entscheidungsrahmen.",
    category: "KI-Architektur",
    readTime: "~12 Min. Lesezeit",
    dateUpdated: "Mai 2026",
    tldrLabel: "Kurzfassung",
    tldrBody: "Die eigentliche Frage lautet nicht „extern oder On-Premise\", sondern: Welcher Workflow gehört wohin? Ein typisches Unternehmen hat Dutzende von Workflows mit unterschiedlicher Datensensibilität, unterschiedlichen Leistungsanforderungen und unterschiedlichen Restriktionen. Eine einheitliche Architektur für alle Workflows passt zwangsläufig für einen Teil davon nicht. Externe LLMs liefern Frontier-Leistung mit vertraglichem — nicht architektonischem — Schutz. On-Premise-Modelle lösen die Datenlokalisierung von vornherein, liegen aber typischerweise 12 bis 18 Monate hinter den führenden externen Modellen zurück, und die laufenden Teamkosten dominieren die Gesamtkosten. Hybrid ist kein Kompromiss, sondern die architektonisch ehrliche Antwort: Sie folgt dem tatsächlichen Aufbau unternehmerischer Workloads. Vier Fragen — Sensibilität, Leistungsanforderung, Restriktionsstruktur und Toleranz für Leistungseinbußen — sortieren Workflows in vier Kategorien mit unterschiedlichen Betriebsmodellen. Hybridbetrieb funktioniert, wenn vier Komponenten vorhanden sind: eine einheitliche Integrationsschicht, richtliniengesteuertes Routing, eine Transformationsschicht für den externen Pfad und ein gemeinsames Governance-Framework. Rein externe Architekturen erzeugen Shadow-KI; rein On-Premise-Architekturen erzeugen Leistungslücken — beide Fehlerbilder teilen dieselbe Struktur: Eine einheitliche Richtlinie, die Workflow-Heterogenität ignoriert, wird in den nicht passenden Workflows umgangen. Das realistische Betriebsmodell regulierter Unternehmen kombiniert Path A (extern mit Transformationsschicht) und Path B (On-Premise) unter einem gemeinsamen Richtlinien- und Audit-Framework.",
    bodyHtml: `<h2>1. Die Entscheidung ist nicht binär — und die Rahmung, die sie binär macht, ist das Problem</h2>
<p>Die erste ernsthafte Frage, auf die ein Unternehmens-KI-Programm nach der anfänglichen Begeisterung stößt, lautet: Wo sollen die Modelle eigentlich laufen? Die Diskussion polarisiert sich schnell. Das Sicherheitsteam plädiert für On-Premise: Daten intern halten, die Frage grenzüberschreitender Übertragung eliminieren. Das Produktteam plädiert für externe Modelle: Die Frontier-Modelle leisten, was interne nicht können, und der technologische Rückstand ist gefährlicher als das kontrollierte Risiko. Das Plattformteam plädiert für das, was am schnellsten betriebsbereit ist. In den meisten Unternehmen dreht sich die Diskussion monatelang um dieses Dreieck, bis jemand bemerkt, dass <strong>die drei Positionen verschiedene Workflows beschreiben</strong> — und die richtige Antwort wahrscheinlich eine Kombination aus allen dreien ist.</p>
<p>Die meisten Gespräche über KI-Deployment beginnen mit einer einzigen Frage: <em>Sollen wir externe LLMs nutzen oder eigene betreiben?</em> Die Rahmung setzt voraus, dass die Antwort einheitlich für das gesamte Unternehmen gilt. <strong>Das tut sie nicht.</strong></p>
<p>Ein typisches Unternehmen hat Dutzende von Workflows, bei denen KI nützlich wäre. Einige davon — Marketingtexte verfassen, öffentliche Dokumente zusammenfassen, interne Schulungsinhalte erstellen — unterliegen keiner nennenswerten Datensensibilitätsbeschränkung. Die Daten dürfen überallhin gesendet werden. Die leistungsfähigsten Modelle, unabhängig vom Hosting-Ort, sind die richtige Wahl. Es gibt keinen betrieblichen Grund, interne Infrastruktur dafür zu betreiben.</p>
<p>Andere Workflows desselben Unternehmens — Verarbeitung von Kundenservice-Tickets, Analyse von Betriebsprotokollen, Erstellung klinischer Notizen, Prüfung von Kreditanträgen — unterliegen Restriktionen, die von vertraglichen Datenlokalisierungsverpflichtungen über sektorspezifische Datenhaltungsanforderungen bis hin zu internen Governance-Regeln reichen. Dasselbe Modell, das für Marketingtexte geeignet ist, ist für diese Workflows nicht geeignet. <strong>Die Wahl für diese Workflows ist real.</strong></p>
<p>Eine dritte Kategorie — klassifizierte Verteidigungsoperationen, rechtmäßige Abhördaten, bestimmte Szenarien im Gesundheitswesen — unterliegt Restriktionen, die schlicht keinen externen Endpunkt zulassen, unabhängig von Sicherheitsvorkehrungen. Die Wahl für diese Workflows ist ebenfalls real, aber eine andere.</p>
<p>Alle drei Kategorien als eine einzige Entscheidung zu behandeln führt zu schlechter Architektur. Entweder werden einfache Workflows übermäßig geschützt (betrieben auf interner Infrastruktur, die Betriebsaufwand kostet, ohne proportionalen Wert zu liefern), oder die schwierigen werden unzureichend geschützt (an externe Endpunkte gesendet, weil das die „KI-Strategie" des Unternehmens ist). <strong>Die realistische Antwort ist, für unterschiedliche Workflow-Kategorien unterschiedliche Entscheidungen zu treffen — und die Infrastruktur zu betreiben, die diese Entscheidungen nebeneinander ermöglicht.</strong></p>

<h2>2. Externe LLMs — Stärken und Grenzen</h2>
<p>Das Argument für externe LLMs ist einfach und sollte präzise formuliert werden. Die Frontier-Modelle — GPT-5-Klasse, Claude Opus-Klasse, Gemini Ultra-Klasse — operieren auf einem Leistungsniveau, das kein Unternehmen mit eigener Infrastruktur erreichen wird. Sie verfügen über Kontextfenster, die vollständige Dokumentenportfolios verarbeiten. Sie schlussfolgern über komplexe Strukturen mit einer Qualität, die kleinere Modelle nicht annähernd erreichen. Sie verbessern sich alle paar Monate, ohne dass das Unternehmen Kosten für Nachtraining trägt. <strong>Für Workflows, bei denen Leistungsfähigkeit zählt, ist das kein marginaler Vorteil. Es ist eine andere Kategorie von System.</strong></p>
<p>Die Kostenstruktur verdient ebenfalls Ehrlichkeit. Externe LLMs werden über APIs der Anbieter zugänglich gemacht, wobei das Modell auf der Infrastruktur des Anbieters, in dessen Rechenzentren, unter dessen Betriebskontrolle läuft. Das Unternehmen sendet Daten an diese Endpunkte und empfängt Antworten. Die vertraglichen Zusicherungen des Anbieters — Datenverarbeitungsverträge, regionale Endpunkte, Löschrichtlinien — beschreiben, was der Anbieter mit den Daten tun und nicht tun wird. <strong>Sie beschreiben nicht, was das Recht des Gastgeberlandes anderen Parteien gegebenenfalls erlaubt.</strong></p>
<p>Für Workflows, bei denen die Daten nicht sensibel sind, ist das kein Problem. Für Workflows, bei denen die Daten sensibel sind, der Datenlokalisierungskontext aber durch architektonische Maßnahmen erfüllbar ist (regionale Endpunkte, Transformation vor der Übertragung, unternehmenskontrolliertes Mapping), ist das lösbar.</p>
<p>Für Workflows, bei denen die Daten sensibel sind <em>und</em> die Restriktion darin besteht, dass keine Version der Daten — wie auch immer transformiert — an einen externen Endpunkt gesendet werden darf, sind externe LLMs keine Option. Einige Workflows fallen tatsächlich in diese Kategorie. <strong>Der Fehler liegt darin anzunehmen, dass alle sensiblen Workflows das tun.</strong></p>

<h2>3. On-Premise-LLMs — Stärken und Schwachstellen</h2>
<p>Das Argument für den Betrieb von Modellen auf interner Infrastruktur ist auf den ersten Blick ebenfalls einfach. Die Daten verlassen das Unternehmen nicht. Die vertraglichen Fragen zur grenzüberschreitenden Übertragung stellen sich schlicht nicht. Für Workflows unter absoluten Datenlokalisierungsrestriktionen — Verteidigung, bestimmte regulierte Bereiche im Gesundheitswesen, bestimmte Finanztransaktionssegmente — ist dies die einzige Option, und sie verdient ernsthafte Betrachtung.</p>
<p>Die Stärken sind real:</p>
<ul>
  <li><strong>Datenlokalisierung ist per Definition gelöst.</strong> Das Modell läuft dort, wo die Daten sind; die Frage der Übertragung stellt sich nicht. Für Workflows unter sektorspezifischen Verpflichtungen, die das Unternehmen an definierte Grenzen binden, passt dies sauber auf die Restriktion.</li>
  <li><strong>Betriebskontrolle ist vollständig.</strong> Das Modell kann unter den eigenen Change-Management-Prozessen des Unternehmens feinabgestimmt, evaluiert, überwacht und zurückgerollt werden. Es gibt keinen Anbieter auf der anderen Seite, der Modell-Updates durchführt, die das Unternehmen nicht genehmigt hat.</li>
  <li><strong>Latenz kann vorhersagbar gestaltet werden.</strong> Ein Modell, das im unternehmenseigenen Netzwerk läuft, vermeidet den Roundtrip zu einem externen Endpunkt — relevant für bestimmte Echtzeit-Workflows.</li>
</ul>
<p>Die Kosten sind ebenfalls real und werden von Teams, die noch keine KI-Infrastruktur in Produktion betrieben haben, häufig unterschätzt:</p>
<ul>
  <li><strong>Modellleistung bleibt zurück.</strong> Die Open-Source-Modelle, die ein Unternehmen praktikabel hosten kann — Llama, Mistral, Qwen und deren Nachfolger — sind gute Modelle. Sie sind zu keinem Zeitpunkt so leistungsfähig wie die externen Frontier-Modelle in den Dimensionen, die Unternehmen tatsächlich interessieren: Schlussfolgern über komplexe Dokumente, Umgang mit unbekannten Formaten, Langkontext-Analyse. Der Rückstand beträgt typischerweise zwölf bis achtzehn Monate und mag sich im Laufe der Zeit verringern, schließt sich aber nicht.</li>
  <li><strong>Die Betriebskosten sind hoch und kontinuierlich.</strong> Ein ernsthaftes Modell in Produktion zu betreiben bedeutet GPU-Infrastruktur, Model-Serving-Infrastruktur (vLLM, TGI oder Ähnliches), Evaluierungspipelines, Monitoring und das Team, das das alles am Laufen hält. <strong>Die Kosten werden nicht durch die GPUs dominiert, sondern durch das Team.</strong> Ein kleines KI-Infrastrukturteam für Enterprise-Serving umfasst fünf bis zehn Engineers; ein ernsthaftes Team ist doppelt so groß. Das Modell selbst ist der günstige Teil.</li>
  <li><strong>Die Schwachstelle zeigt sich bei Updates.</strong> Alle paar Monate machen die externen Frontier-Modelle Sprünge, die verändern, was Geschäftsbereiche erwarten. Das interne Modell, wie gut auch immer abgestimmt, macht diese Sprünge nicht. Die Lücke zwischen dem, was KI im öffentlichen Diskurs leisten kann, und dem, was die interne KI des Unternehmens leisten kann, wächst — und der Druck, etwas daran zu ändern, wächst mit ihr.</li>
</ul>
<p>Für Workflows, bei denen die Restriktion absolut ist — und bei denen der Workflow überschaubar genug ist, dass ein leistungsfähiges kleineres Modell ausreicht — <strong>ist On-Premise die richtige Antwort</strong>. Für Workflows, bei denen die Restriktion real, aber nicht absolut ist und die KI-Leistungsfähigkeit zählt, <strong>erzeugt allein On-Premise ein System, das funktioniert, aber zu wenig leistet</strong>.</p>

<h2>4. Hybrid — Kein Kompromiss, sondern die architektonisch ehrliche Antwort</h2>
<p>Die dritte Option — eine hybride Topologie zu betreiben, bei der einige Workflows zu externen Endpunkten gehen und andere auf interner Infrastruktur laufen — wird in Unternehmensgesprächen zu schnell abgetan. Die Ablehnung nimmt meist eine von zwei Formen an.</p>
<p>Die erste ist operativ: <em>„Beides zu betreiben ist komplexer als eines zu wählen, also sollten wir eines wählen."</em> Das stimmt, verfehlt aber den Punkt. Beides zu betreiben ist nicht komplexer, wenn die Workflows, die jeweils eines benötigen, verschiedene Workflows sind. Die Komplexität einer hybriden Topologie liegt in der Routing-Schicht, die entscheidet, welches Modell welchen Workflow erhält. <strong>Diese Routing-Schicht ist nicht optional</strong> — selbst ein rein externes oder rein On-Premise-Unternehmen hat eine, sie ist nur trivial — und sobald die Routing-Schicht existiert, ist die Unterstützung zweier Backends inkrementelle Komplexität, keine kategorische.</p>
<p>Die zweite ist Governance: <em>„Wir sollten eine einheitliche KI-Richtlinie haben."</em> Das stimmt ebenfalls und verfehlt ebenfalls den Punkt. Die einheitliche Richtlinie lautet nicht <em>„Alle KI läuft extern"</em> oder <em>„Alle KI läuft On-Premise."</em> Die einheitliche Richtlinie lautet: <em>„Workflows der Klasse X laufen extern mit diesen Sicherheitsvorkehrungen; Workflows der Klasse Y laufen On-Premise; das Routing wird erzwungen und auditiert."</em> Das ist eine kohärente Governance-Haltung — und die, zu der die meisten großen Unternehmen gelangen, ob sie dafür geplant haben oder nicht.</p>
<p>Was Hybrid zur architektonisch ehrlichen Antwort macht, ist, dass <strong>es der tatsächlichen Struktur unternehmerischer KI-Workloads entspricht</strong>. Einige Workflows profitieren massiv von Frontier-Leistungsfähigkeit und vertragen transformationsbasierte Sicherheitsvorkehrungen. Einige Workflows haben Restriktionen, die externe Endpunkte ausschließen — unabhängig von etwaigen Sicherheitsvorkehrungen. Alle Workflows in einen der Eimer zu zwingen erzeugt ein System, das für einige davon falsch ist. Hybrid gibt jedem Workflow das Deployment, das er benötigt.</p>
<p>Das Schwierige an Hybrid ist nicht, zwei Backends zu betreiben. <strong>Es ist, die Routing-Entscheidung präzise genug zu gestalten, dass Workflows dorthin gelangen, wo sie hingehören — mit durchgesetzter Richtlinie und einem klaren Audit-Trail, der es dem Team ermöglicht, die Entscheidungen später zu verteidigen.</strong> Das ist ein Designproblem, kein Infrastrukturproblem.</p>

<h2>5. Ein Entscheidungsrahmen für Workflows</h2>
<p>Ein hilfreicher Weg, die Entscheidung konkret zu machen, ist die Bewertung jedes Workflows anhand von vier Fragen:</p>
<ol>
  <li><strong>Wie sensibel sind die Daten, mit denen der Workflow operiert?</strong> Nicht die maximale Sensibilität irgendeiner Daten irgendwo im Unternehmen — die Sensibilität der spezifischen Daten, die dieser Workflow benötigt. Marketingtexte und Kundendatensätze sind verschiedene Workflows, auch wenn dieselbe Geschäftseinheit beide verantwortet.</li>
  <li><strong>Wie hoch ist der Leistungsanspruch der KI-Aufgabe?</strong> Einige Aufgaben — Klassifikation eingehender Tickets in zehn Kategorien, einfache Entitätsextraktion, Formatkonvertierung — funktionieren gut auf kleineren Modellen. Andere Aufgaben — Schlussfolgern über einen hundert Seiten langen Vertrag, Synthese von Ursachen aus heterogenen Protokollen, Erstellung klinischer Narrative — erfordern Frontier-Leistungsfähigkeit.</li>
  <li><strong>Wie ist die Restriktionsstruktur?</strong> Ist die Restriktion absolut (keine Version der Daten darf das Unternehmen verlassen) oder konditional (die Daten dürfen das Unternehmen verlassen, wenn sie entsprechend transformiert wurden)? Wird sie durch externe Verpflichtungen (Kundenvereinbarungen, DSGVO-konforme Sektorverpflichtungen) oder interne Governance (die eigene Datenhaltungsstrategie des Unternehmens) angetrieben?</li>
  <li><strong>Wie tolerant ist der Workflow gegenüber Leistungseinbußen?</strong> Einige Workflows liefern Wert mit einem Modell, das zwölf Monate hinter dem Frontier zurückliegt. Andere Workflows sind selbst die differenzierende Leistungsfähigkeit, die das Unternehmen aufzubauen versucht — und die Modelllücke ist die Lücke.</li>
</ol>
<p>Die Antworten gruppieren sich in grobe Kategorien:</p>
<table>
  <thead>
    <tr>
      <th>Workflow-Kategorie</th>
      <th>Beispiele</th>
      <th>Geeignetes Betriebsmodell</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Geringe Sensibilität, hoher Leistungsanspruch, keine Restriktion</td>
      <td>Marketingtexte, Zusammenfassungen öffentlicher Dokumente, interne Schulungsinhalte</td>
      <td>Externes LLM, ohne Transformation</td>
    </tr>
    <tr>
      <td>Sensibel, aber transformierbar; hoher Leistungsanspruch; konditionale Restriktion</td>
      <td>Kundenservice-Tickets, Betriebsprotokolle, Vertragsüberprüfung, klinische Notizen</td>
      <td>Externes LLM + Transformationsschicht (Path A)</td>
    </tr>
    <tr>
      <td>Sensibel, leistungstoleranter Workflow, absolute Restriktion</td>
      <td>Verteidigungsworkflows, bestimmte klassifizierte Kategorien, rechtmäßige Abhördaten</td>
      <td>On-Premise-Modell (Path B)</td>
    </tr>
    <tr>
      <td>Sensibel, hoher Leistungsanspruch, absolute Restriktion</td>
      <td>Die schwierigste Kategorie — die Lücke zwischen dem, was benötigt wird, und dem, was erlaubt ist</td>
      <td>Aufgabe eingrenzen, On-Premise-Leistungsfähigkeit abwarten oder die Lücke akzeptieren</td>
    </tr>
  </tbody>
</table>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" aria-labelledby="decision-framework-title decision-framework-desc">
      <title id="decision-framework-title">Workflow-Entscheidungsrahmen</title>
      <desc id="decision-framework-desc">Eine 2x2-Matrix, die Workflow-Restriktionsstruktur (konditional vs. absolut) gegen Leistungsanforderung (niedrig vs. Frontier) aufträgt, mit vier Quadranten, die das geeignete Betriebsmodell für jede Kombination zeigen.</desc>

      <defs>
        <marker id="arrow-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"/>
        </marker>
      </defs>

      <line x1="120" y1="420" x2="120" y2="50" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="60" y="240" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2" transform="rotate(-90, 60, 240)">LEISTUNGSANFORDERUNG</text>
      <text x="100" y="70" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Frontier</text>
      <text x="100" y="415" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Niedrig</text>

      <line x1="120" y1="420" x2="900" y2="420" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="510" y="465" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">RESTRIKTIONSSTRUKTUR</text>
      <text x="320" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Gering oder konditional</text>
      <text x="700" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Absolut</text>

      <line x1="510" y1="50" x2="510" y2="420" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <line x1="120" y1="235" x2="900" y2="235" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>

      <rect x="140" y="60" width="350" height="160" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="160" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Extern + Transformationsschicht (Path A)</text>
      <text x="160" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Kundenservice-Tickets · Betriebsprotokolle</text>
      <text x="160" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Vertragsüberprüfung · klinische Notizen</text>
      <text x="160" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Sensibel, aber transformierbar; Restriktion</text>
      <text x="160" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">durch architektonische Maßnahmen erfüllbar.</text>

      <rect x="530" y="60" width="350" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="550" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Schwierigste Kategorie — keine saubere Lösung</text>
      <text x="550" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Hochkritische Verteidigungsanalyse · sensibles</text>
      <text x="550" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Gesundheitswesen mit Frontier-Anforderungen</text>
      <text x="550" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Aufgabe auf kleinere Modelle zuschneiden</text>
      <text x="550" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">oder Leistungslücke akzeptieren.</text>

      <rect x="140" y="245" width="350" height="160" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="160" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Externes LLM, ohne Transformation</text>
      <text x="160" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Marketingtexte · öffentliche Dokumente</text>
      <text x="160" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Zusammenfassungen · Schulungsinhalte</text>
      <text x="160" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Keine nennenswerte Datensensibilität;</text>
      <text x="160" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Daten können überallhin gesendet werden.</text>

      <rect x="530" y="245" width="350" height="160" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
      <text x="550" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">On-Premise-Modell (Path B)</text>
      <text x="550" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Verteidigungsworkflows · klassifizierte</text>
      <text x="550" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Kategorien · rechtmäßige Abhördaten</text>
      <text x="550" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Workflow überschaubar genug, dass ein</text>
      <text x="550" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">leistungsfähiges kleineres Modell ausreicht.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Workflows auf zwei Achsen aufzutragen — Leistungsanforderung und Restriktionsstruktur — ergibt vier Betriebsmodelle. Die meisten Unternehmen haben Workflows in allen vier Quadranten.</strong></figcaption>
</figure>

<p><strong>Die meisten Unternehmen stellen fest, dass ihr Workflow-Bestand alle vier Kategorien umfasst. Die Deployment-Architektur muss alle vier abdecken — was standardmäßig Hybrid bedeutet.</strong></p>

<h2>6. Wie Hybrid in der Praxis aussieht</h2>
<p>Ein Hybrid-Deployment ist nicht <em>„Wir haben ein Modell hier und ein Modell dort."</em> Es ist eine Integrationsarchitektur, bei der <strong>die Routing-Entscheidung — welches Backend welche Anfrage bearbeitet — richtliniengesteuert, auditierbar und konsistent ist.</strong></p>
<p>Die Komponenten, die das ermöglichen:</p>
<p><strong>6.1 Eine einheitliche Integrationsschicht</strong></p>
<p>Workflows rufen nicht direkt den externen Endpunkt oder das On-Premise-Modell auf. Sie rufen eine Integrationsschicht auf, die das Routing übernimmt. Das bedeutet, dass <strong>Workflows gegenüber Änderungen in der Backend-Auswahl abgeschirmt sind</strong>. Wenn ein Workflow von extern auf On-Premise wechseln muss (aufgrund einer neuen Restriktion, eines Anbieterwechsels oder einer Richtlinienaktualisierung), ändert sich der Workflow nicht — die Routing-Regel tut es.</p>
<p><strong>6.2 Richtliniengesteuertes Routing</strong></p>
<p>Die Entscheidung, wo ein Workflow läuft, ist in einer Richtlinie kodiert, nicht im Code des Workflows selbst. <em>„Workflows, die als Kundenservice in der EU-Region gekennzeichnet sind, gehen zum externen Endpunkt mit der Transformationsschicht. Workflows, die als klassifiziert gekennzeichnet sind, gehen zum On-Premise-Modell. Workflows, die als Marketinginhalt gekennzeichnet sind, gehen ohne Transformation zum externen Endpunkt."</em> <strong>Die Richtlinie ist versioniert und auditierbar.</strong></p>
<p><strong>6.3 Eine Transformationsschicht für den externen Pfad</strong></p>
<p>Wenn Workflows zum externen Endpunkt geroutet werden, werden sensible Elemente vor der Übertragung transformiert und bei der Antwort wiederhergestellt. <strong>Dieselbe Transformationsinfrastruktur funktioniert unabhängig davon, welcher externe Endpunkt das Routing-Ziel ist</strong> — die Abstraktion liegt über dem Backend, nicht über einem spezifischen Anbieter.</p>
<p><strong>6.4 Gemeinsame Governance</strong></p>
<p>Die Audit-Protokolle, das Richtlinienmanagement, die Zugriffskontrollen decken beide Pfade einheitlich ab. <strong>Das Team hat nicht zwei Governance-Frameworks — eines für extern und eines für On-Premise. Es hat eines</strong>, mit dem Pfad jeder Anfrage aufgezeichnet.</p>
<p>Wenn diese vier Komponenten vorhanden sind, wird die Frage <em>„Wo soll dieser Workflow laufen?"</em> zu einer Richtlinienentscheidung statt zu einer Architekturverpflichtung. Der Workflow kann zwischen Pfaden wechseln, wenn sich Anforderungen ändern, ohne Integrationen neu schreiben zu müssen.</p>

<h2>7. Was schiefläuft, wenn ein Pfad als die gesamte Antwort behandelt wird</h2>
<p>Zwei Fehlermodi treten konsistent in Unternehmen auf, die sich auf einen einzigen Deployment-Pfad festlegen.</p>
<ul>
  <li><strong>Das rein externe Unternehmen.</strong> Ein Unternehmen, das entscheidet, externe LLMs seien die gesamte KI-Strategie, wird auf Workflows stoßen, die die Richtlinie nicht erlaubt — und eines von zwei Dingen passiert. Entweder erhalten diese Workflows keine KI (und das Unternehmen fällt bei den Aufgaben zurück, bei denen KI am meisten zählt), oder die Workflows erhalten KI über inoffizielle Kanäle — Mitarbeiter kopieren sensible Daten in Consumer-Chatbots, Geschäftsbereiche beschaffen KI-Tools außerhalb des zentralen Prozesses, Anbieter werden ohne das zentrale Sicherheitsreview integriert. <strong>Shadow-KI ist die vorhersehbare Konsequenz einer KI-Strategie, die Workflows nicht berücksichtigt, für die sie nicht passt.</strong></li>
  <li><strong>Das rein On-Premise-Unternehmen.</strong> Ein Unternehmen, das entscheidet, externe LLMs seien generell inakzeptabel, wird auf die Leistungslücke stoßen. Interne Modelle sind für einige Workflows gut genug und für andere nicht. Die Workflows, für die sie nicht gut genug sind, werden entweder zu wenig leisten (und die Wettbewerber des Unternehmens werden bei diesen Aufgaben vorausziehen), oder Geschäftsbereiche werden die Richtlinie über dieselben Shadow-Kanäle umgehen. <strong>Die Disziplin einer reinen On-Premise-Haltung ist schwerer aufrechtzuerhalten als sie aussieht — insbesondere wenn die externen Frontier-Modelle weiter voranschreiten.</strong></li>
</ul>
<p>Beide Fehlermodi teilen eine Struktur: <strong>Eine Richtlinie, die die Heterogenität unternehmerischer Workflows nicht berücksichtigt, wird in den Workflows umgangen, für die sie nicht passt — und der Umweg ist schwerer zu steuern, als der explizite Pfad gewesen wäre.</strong></p>

<h2>8. Die Architektur, zu der das führt</h2>
<p>Für die meisten regulierten Unternehmen hat das Deployment, das sich aus der Durcharbeitung dieser Fragen ergibt, einige konsistente Eigenschaften.</p>
<p>Es gibt ein Backend für externe LLMs, zugänglich über eine Transformationsschicht, die die Fälle behandelt, bei denen Datensensibilität es erfordert. Es gibt ein On-Premise-Modell — üblicherweise ein kleineres, gut gewähltes Open-Source-Modell — das Workflows behandelt, bei denen externe Endpunkte nicht infrage kommen. Es gibt eine Routing-Schicht, die richtlinienbasiert entscheidet, welcher Workflow wohin geht. Es gibt ein einheitliches Governance- und Audit-Framework, das beide Pfade abdeckt. <strong>Und es gibt die Erkenntnis, dass dies kein abgeschlossener Zustand ist</strong> — Workflows wechseln zwischen Pfaden, wenn sich Restriktionen ändern, neue externe Modelle verfügbar werden, neue On-Premise-Leistungsfähigkeiten reifen und sich die eigene Datenstrategie des Unternehmens weiterentwickelt.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="hybrid-architecture-title hybrid-architecture-desc">
      <title id="hybrid-architecture-title">Hybride Deployment-Architektur — Path A und Path B</title>
      <desc id="hybrid-architecture-desc">Ein Diagramm, das zeigt, wie Unternehmens-Workflows in eine einheitliche Integrationsschicht mit richtliniengesteuertem Routing fließen und sich dann in Path A (externes LLM über Transformationsschicht) und Path B (On-Premise-Modell) aufteilen, beide unter gemeinsamer Governance.</desc>

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
        <text x="140" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Marketing &amp; öffentliche Dokumente</text>
        <text x="140" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">geringe Sensibilität</text>

        <rect x="260" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="360" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Kundenbetrieb &amp; Klinik</text>
        <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">sensibel, aber transformierbar</text>

        <rect x="480" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="580" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Verteidigung &amp; klassifiziert</text>
        <text x="580" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">absolute Restriktion</text>

        <rect x="700" y="30" width="220" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="810" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Weitere Workflows</text>
        <text x="810" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">unterschiedliche Sensibilität</text>
      </g>

      <line x1="140" y1="82" x2="220" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="360" y1="82" x2="370" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="580" y1="82" x2="540" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="810" y1="82" x2="700" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>

      <g>
        <rect x="180" y="130" width="560" height="68" rx="10" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="200" y="154" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EINHEITLICHE INTEGRATIONSSCHICHT</text>
        <text x="460" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Richtliniengesteuertes Routing</text>
        <text x="460" y="194" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#9ca3af" font-style="italic">versioniert · erzwungen · auditierbar</text>
      </g>

      <line x1="320" y1="200" x2="220" y2="240" stroke="#5b4fe9" stroke-width="1.8" marker-end="url(#arrow-primary-pb)"/>
      <text x="240" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#5b4fe9">Path A</text>

      <line x1="600" y1="200" x2="700" y2="240" stroke="#0ea5a4" stroke-width="1.8" marker-end="url(#arrow-teal-pb)"/>
      <text x="660" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#0b7f7e">Path B</text>

      <g>
        <rect x="40" y="248" width="420" height="120" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">PATH A · EXTERN + TRANSFORMATIONSSCHICHT</text>

        <rect x="60" y="288" width="180" height="64" rx="6" fill="#ffffff" stroke="#5b4fe9" stroke-width="1"/>
        <text x="150" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Transformationsschicht</text>
        <text x="150" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Tokenisierung · Strukturerhalt</text>
        <text x="150" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Wiederherstellung</text>

        <rect x="260" y="288" width="180" height="64" rx="6" fill="#0f1130" stroke="#0f1130" stroke-width="1"/>
        <text x="350" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#ffffff">Externes Frontier-LLM</text>
        <text x="350" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">ChatGPT · Claude</text>
        <text x="350" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">Gemini · weitere</text>

        <line x1="244" y1="312" x2="256" y2="312" stroke="#5b4fe9" stroke-width="1.5"/>
        <line x1="244" y1="328" x2="256" y2="328" stroke="#5b4fe9" stroke-width="1.5"/>
      </g>

      <g>
        <rect x="500" y="248" width="420" height="120" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="520" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">PATH B · ON-PREMISE LOKALES MODELL</text>

        <rect x="520" y="288" width="380" height="64" rx="6" fill="#ffffff" stroke="#0ea5a4" stroke-width="1"/>
        <text x="710" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Lokales Modell auf Unternehmensinfrastruktur</text>
        <text x="710" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Llama · Mistral · Qwen — feinabgestimmt</text>
        <text x="710" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Daten verlassen die Grenze nicht</text>
      </g>

      <g>
        <rect x="40" y="394" width="880" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="416" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#b45309" letter-spacing="1.2">GEMEINSAME GOVERNANCE</text>
        <text x="480" y="423" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f1130">Eine Richtlinie · ein Audit-Protokoll · ein Zugriffskontroll-Framework — für beide Pfade</text>
      </g>

      <line x1="250" y1="368" x2="250" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="368" x2="710" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 2 · <strong>Workflows fließen durch eine einheitliche Integrationsschicht, die richtlinienbasiert routet — Path A (externes LLM über Transformationsschicht) oder Path B (lokales On-Premise-Modell) — beide unter gemeinsamer Governance.</strong></figcaption>
</figure>

<p><span class="wtre-product">LLM Capsule</span> unterstützt beide Pfade als Teil einer einzigen Architektur: <strong>Path A</strong> routet Workflows über die Transformationsschicht zu einem zugelassenen externen LLM, die Tokenisierung, Strukturerhalt und Wiederherstellung innerhalb der Unternehmensumgebung übernimmt; <strong>Path B</strong> routet Workflows zu einem lokalen On-Premise-Modell, wenn externe Endpunkte nicht infrage kommen. Dieselbe Transformationsschicht, dasselbe Richtlinien-Framework und dieselbe Governance decken beide Pfade ab. <strong>Die Deployment-Entscheidung wird zur Richtlinienwahl pro Workflow — nicht zur Architekturverpflichtung für das gesamte Unternehmen.</strong></p>

<div class="takeaways">
  <div class="takeaways__label">Wichtigste Erkenntnisse</div>
  <ul>
    <li>Die Deployment-Frage ist nicht binär — verschiedene Workflows haben unterschiedliche Datensensibilität, Leistungsanforderungen und Restriktionen; eine einheitliche Richtlinie ist für einen Teil davon falsch</li>
    <li>Externe LLMs liefern Frontier-Leistungsfähigkeit mit vertraglichem — nicht architektonischem — Schutz: geeignet für wenig sensible Workflows, lösbar mit einer Transformationsschicht bei konditionalen Restriktionen, ausgeschlossen bei absoluten Restriktionen</li>
    <li>On-Premise löst die Datenlokalisierung per Definition, liegt aber 12–18 Monate hinter dem Frontier zurück; die dominierenden Kosten sind das Team (mindestens 5–10 Engineers), nicht die GPUs</li>
    <li>Hybrid ist die architektonisch ehrliche Antwort — sie entspricht der tatsächlichen Struktur unternehmerischer Workloads, statt sie in einen Eimer zu zwingen</li>
    <li>Vier Fragen sortieren Workflows in vier Kategorien: Sensibilität, Leistungsanforderung, Restriktionsstruktur (absolut vs. konditional), Toleranz für Leistungseinbußen</li>
    <li>Funktionierende Hybridarchitektur erfordert vier Komponenten: einheitliche Integrationsschicht, richtliniengesteuertes Routing, Transformationsschicht für den externen Pfad, gemeinsame Governance</li>
    <li>Rein externe Unternehmen erzeugen Shadow-KI; rein On-Premise-Unternehmen erzeugen Leistungslücken — beide Fehlermodi sind umgangene Richtlinien</li>
    <li>Path A (extern + Transformationsschicht) und Path B (On-Premise) unter einem gemeinsamen Richtlinien- und Audit-Framework ist das Deployment, bei dem die meisten regulierten Unternehmen landen — geplant oder nicht</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Warum ist die Deployment-Entscheidung nicht einfach extern oder On-Premise?</h3>
<p>Weil ein typisches Unternehmen Dutzende von Workflows mit unterschiedlicher Datensensibilität, unterschiedlichen Leistungsanforderungen und unterschiedlichen Restriktionen hat. Marketingtexte und Kundenservice-Tickets sind verschiedene Workflows, auch wenn dieselbe Geschäftseinheit beide verantwortet. Alle als eine Entscheidung zu behandeln führt entweder zur Überabsicherung einfacher Workflows (Betrieb auf interner Infrastruktur, die Aufwand kostet, ohne proportionalen Wert zu liefern) oder zur Unterabsicherung schwieriger Workflows (Senden an externe Endpunkte, weil das die „KI-Strategie" des Unternehmens ist). Die realistische Antwort sind unterschiedliche Entscheidungen für unterschiedliche Workflow-Kategorien.</p>

<h3>Worin liegen Stärken und Grenzen externer LLMs?</h3>
<p>Externe Frontier-Modelle (GPT-5-Klasse, Claude Opus-Klasse, Gemini Ultra-Klasse) operieren auf einem Leistungsniveau, das kein Unternehmen intern erreichen wird — lange Kontextfenster, komplexes Dokumenten-Schlussfolgern, kontinuierliche Verbesserung ohne Nachtraining. Für Workflows, bei denen Leistungsfähigkeit zählt, ist das eine andere Systemkategorie. Die Grenze liegt darin, dass das Modell auf der Infrastruktur des Anbieters unter dessen vertraglichen Zusicherungen — nicht architektonischen Garantien — läuft. Für Workflows, bei denen Datensensibilität jeden externen Endpunkt unabhängig von Sicherheitsvorkehrungen ausschließt, sind externe LLMs keine Option.</p>

<h3>Wann ist On-Premise die richtige Antwort?</h3>
<p>Wenn die Restriktion absolut ist — Verteidigung, bestimmte klassifizierte Kategorien, Workflows, bei denen keine Version der Daten das Unternehmen verlassen darf — und der Workflow überschaubar genug ist, dass ein leistungsfähiges kleineres Modell ausreicht. Die Stärken sind real: Datenlokalisierung per Definition gelöst, vollständige Betriebskontrolle, vorhersagbare Latenz. Die Kosten sind ebenfalls real und werden häufig unterschätzt: Leistungsrückstand von zwölf bis achtzehn Monaten gegenüber Frontier-Modellen, kontinuierliche Betriebskosten dominiert durch das Team (mindestens fünf bis zehn Engineers) und Anfälligkeit, wenn externe Frontier-Modelle vorausspringen.</p>

<h3>Ist eine hybride Topologie nicht komplexer als die Wahl eines einzigen Pfades?</h3>
<p>Nur oberflächlich. Beides zu betreiben ist nicht komplexer, wenn die Workflows, die jeweils eines benötigen, verschiedene Workflows sind — und das sind sie. Die Komplexität des Hybrid-Betriebs liegt in der Routing-Schicht, die entscheidet, welches Modell welchen Workflow erhält. Diese Routing-Schicht ist nicht optional; selbst rein externe oder rein On-Premise-Unternehmen haben eine, sie ist nur trivial. Sobald die Routing-Schicht existiert, ist die Unterstützung zweier Backends inkrementelle Komplexität, keine kategorische. Das Schwierige ist, die Routing-Entscheidung präzise genug zu gestalten, dass Workflows dorthin gelangen, wo sie hingehören — mit durchgesetzter Richtlinie und klarem Audit-Trail.</p>

<h3>Wie entscheidet man, welcher Workflow wohin geht?</h3>
<p>Jeden Workflow gegen vier Fragen evaluieren. <strong>Datensensibilität</strong> (der spezifischen Daten, die dieser Workflow benötigt — nicht des Maximums irgendwo im Unternehmen). <strong>Leistungsanforderung</strong> (erfordert die Aufgabe Frontier-Schlussfolgern, oder reicht ein kleineres Modell aus). <strong>Restriktionsstruktur</strong> (absolut oder konditional; durch externe Verpflichtungen oder interne Governance getrieben). <strong>Toleranz für Leistungseinbußen</strong>. Die Antworten gruppieren sich: geringe Sensibilität geht extern, transformierbar mit hohem Leistungsanspruch geht extern mit Transformation, absolute Restriktion mit überschaubarem Workflow geht On-Premise, absolute Restriktion mit hohem Leistungsanspruch ist die schwierigste — heute manchmal nicht vollständig lösbar.</p>

<h3>Was läuft bei einem rein externen oder rein On-Premise-Ansatz schief?</h3>
<p>Rein externe Unternehmen stoßen auf Workflows, die die Richtlinie nicht erlaubt — entweder erhalten diese Workflows keine KI (und das Unternehmen fällt bei den Aufgaben zurück, bei denen KI am meisten zählt) oder sie erhalten KI über inoffizielle Kanäle. Shadow-KI ist die vorhersehbare Konsequenz. Rein On-Premise-Unternehmen stoßen auf die Leistungslücke; interne Modelle sind für einige Workflows gut genug und für andere nicht — und Geschäftsbereiche umgehen die Richtlinie über dieselben Shadow-Kanäle. Beide Fehlermodi teilen eine Struktur: Eine Richtlinie, die Workflow-Heterogenität nicht berücksichtigt, wird in den nicht passenden Workflows umgangen.</p>

<h3>Wie sieht eine funktionierende Hybridarchitektur tatsächlich aus?</h3>
<p>Vier Komponenten. <strong>Eine einheitliche Integrationsschicht</strong> (Workflows rufen diese Schicht auf, nicht die Backends direkt, sodass sie gegenüber Routing-Änderungen abgeschirmt sind). <strong>Richtliniengesteuertes Routing</strong> (die Entscheidung, wo ein Workflow läuft, ist in einer Richtlinie kodiert — versioniert und auditierbar, nicht im Workflow hart kodiert). <strong>Eine Transformationsschicht für den externen Pfad</strong> (sensible Elemente werden vor der Übertragung transformiert und bei der Antwort wiederhergestellt, abstrahiert über dem jeweiligen externen Anbieter). <strong>Gemeinsame Governance</strong> (ein Audit-Protokoll, ein Richtlinien-Framework, ein Zugriffskontrollmodell für beide Pfade einheitlich). Wenn alle vier vorhanden sind, wird der Betriebsort eines Workflows zur Richtlinienentscheidung statt zur Architekturverpflichtung.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/where-to-run-enterprise-ai",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "Where to Run Enterprise AI",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "When AI Must Run Without Network Access",
    related2Href: "/resources/learn/when-ai-must-run-without-network-access",
    related3Title: "Routing AI Workflows Between Cloud and Local Models",
    related3Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related4Title: "",
    related4Href: "",
  },
}

export default function WhereToRunEnterpriseAi({
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
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug as string | undefined
  const effectiveLocale: "en" | "ko" | "de" =
    (framerLocale === "ko" || framerLocale === "de") ? framerLocale :
    (locale && locale !== "en") ? locale : "en"

  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const isNonEn = effectiveLocale !== "en"
  const r = (prop: string, key: string) =>
    isNonEn ? (T[key] || prop || TRANSLATIONS.en[key]) : (prop || T[key] || TRANSLATIONS.en[key])
  const _backLabel = r(backLabel, "backLabel")
  const _backHref = r(backHref, "backHref")
  const _title = r(title, "title")
  const _lead = r(lead, "lead")
  const _category = r(category, "category")
  const _readTime = r(readTime, "readTime")
  const _dateUpdated = r(dateUpdated, "dateUpdated")
  const _tldrLabel = r(tldrLabel, "tldrLabel")
  const _tldrBody = r(tldrBody, "tldrBody")
  const _bodyHtml = r(bodyHtml, "bodyHtml")
  const _canonicalUrl = r(canonicalUrl, "canonicalUrl")
  const _datePublished = r(datePublished, "datePublished")
  const _dateModified = r(dateModified, "dateModified")
  const _inLanguage = r(inLanguage, "inLanguage")
  const _breadcrumbLabel = r(breadcrumbLabel, "breadcrumbLabel")
  const _faqJsonLd = r(faqJsonLd, "faqJsonLd")
  const _relatedSectionLabel = r(relatedSectionLabel, "relatedSectionLabel")
  const _related1Title = r(related1Title, "related1Title")
  const _related1Href = r(related1Href, "related1Href")
  const _related2Title = r(related2Title, "related2Title")
  const _related2Href = r(related2Href, "related2Href")
  const _related3Title = r(related3Title, "related3Title")
  const _related3Href = r(related3Href, "related3Href")
  const _related4Title = r(related4Title, "related4Title")
  const _related4Href = r(related4Href, "related4Href")

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

addPropertyControls(WhereToRunEnterpriseAi, {
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
