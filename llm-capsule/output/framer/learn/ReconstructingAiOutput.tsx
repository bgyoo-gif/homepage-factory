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

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그(h2, h3, p, ul, ol, table, strong, em, code) + .callout + .takeaways만 사용 -->

<h2>1. Why Reconstruction Is More Than a Swap-Back</h2>
<p>When enterprise AI teams design a workflow that sends tokenised documents to an external LLM, most of the attention goes to the preparation step: detection, transformation, what crosses the boundary. The response side gets less thought. The assumption is that once the model returns its output, the workflow just needs to swap the tokens back and the result is ready.</p>
<p>That assumption is approximately right and operationally wrong. The reconstruction step is technically straightforward — look up tokens in a mapping, substitute back — and architecturally critical. <strong>It is where the difference between a pilot that demos well and a workflow that runs in production gets decided.</strong> Teams that treat reconstruction as an afterthought consistently find their AI projects stalling at the same point: the model works, the integration works, but the output is not in a form anyone can actually use without manual cleanup, and the productivity gain that justified the project evaporates.</p>
<p>In the simplest case, reconstruction is symmetric with tokenisation. The input had <em>Marlene Schmidt</em> replaced with <code>CUST-7F2A</code>; the output references <code>CUST-7F2A</code>; the reconstruction step swaps <code>CUST-7F2A</code> back to <em>Marlene Schmidt</em> and the workflow continues.</p>
<p>If every workflow looked like this, reconstruction would be a trivial concern. Workflows don't look like this for a few reasons.</p>

<ul>
  <li><strong>The model's response is generative, not just substitutive.</strong> The LLM doesn't just copy tokens from input to output; it produces new text that reasons over the tokens. The output references tokens in new sentences, in new combinations, sometimes paraphrased, sometimes summarised, sometimes synthesised across multiple input tokens. A reconstruction layer has to handle tokens appearing in contexts the input never had.</li>
  <li><strong>The response can contain tokens the input didn't.</strong> A summarisation task that reasons over five tickets might produce a sentence like <em>"Three of the affected customers</em> (<code>CUST-7F2A</code>, <code>CUST-3B91</code>, <code>CUST-9D2C</code>) <em>share the same firmware version."</em> That construction is new. The reconstruction layer has to find each token, look it up, and substitute back into a sentence the model wrote.</li>
  <li><strong>The response sometimes contains <em>malformed</em> references to tokens.</strong> Models occasionally lose track of token formatting, especially across long outputs. A token that went in as <code>CUST-7F2A</code> might come back as <code>CUST 7F2A</code>, <code>CUST7F2A</code>, or simply <em>"the customer designated 7F2A."</em> A reconstruction layer that only does exact string matching fails in these cases, and the output to the user contains visible token fragments that should have been resolved.</li>
  <li><strong>The response may include the model's commentary or hedging.</strong> <em>"Based on the information about customer</em> <code>CUST-7F2A</code><em>, the most likely root cause is..."</em> The reconstruction has to handle the token appearing in a clause the model added on its own, with the same correctness as a token that appears in a direct extraction.</li>
</ul>

<p>What looks like swap-back, then, is actually a small but real text-processing problem: <strong>robust token recognition across diverse output forms, with the substitution happening in a way that preserves the grammatical coherence of the model's response.</strong></p>

<h2>2. Where Reconstruction Has to Happen</h2>
<p>The location of reconstruction is non-negotiable: <strong>it has to happen inside the enterprise environment, before the output reaches the user or any downstream system.</strong></p>
<p>The reason is the same reason the mapping has to stay in the enterprise environment. Reconstruction requires reading the mapping. If reconstruction happens outside the enterprise — on a vendor's infrastructure, in a third-country region, on any system the enterprise doesn't fully control — then the mapping has to be made available to that location, which collapses the protection the tokenisation provided in the first place.</p>
<p>This is <strong>the most common architectural mistake in deployments of this pattern</strong>: teams set up tokenisation inside the environment, send to the external LLM, and then run reconstruction in a cloud service or middleware that happens to be convenient. The convenience is real. The protection is gone. The mapping that was supposed to stay under the enterprise's exclusive control has been replicated to a location where the original promises no longer hold.</p>
<p>The correct architecture is that reconstruction is colocated with the source systems and the mapping — on-premise, in the enterprise's own VPC, in whatever EU-region infrastructure the workflow runs in. <strong>The output of the LLM comes back tokenised, traverses to the reconstruction layer inside the boundary, and emerges from that layer as business-ready content.</strong> The external journey of the data ends at the reconstruction step.</p>
<p>For workflows where the rest of the architecture is meticulous about boundaries — encapsulation inside, mapping inside, audit logs inside — and reconstruction is the one piece that wandered outside, the rest of the architecture's promises are weakened to whatever the reconstruction location can guarantee.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" role="img" aria-labelledby="reconstruction-location-title reconstruction-location-desc">
      <title id="reconstruction-location-title">Where reconstruction has to happen</title>
      <desc id="reconstruction-location-desc">Two architectures side by side. On the left, reconstruction runs on external middleware, forcing the mapping to be replicated outside the enterprise — the protection collapses. On the right, reconstruction runs inside the enterprise environment colocated with the mapping, and the protection holds.</desc>

      <defs>
        <marker id="arrow-coral-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-primary-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
      </defs>

      
      <g>
        <rect x="20" y="20" width="440" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
        <text x="240" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">✗ Reconstruction outside the enterprise</text>

        <rect x="20" y="70" width="200" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE</text>

        <rect x="40" y="108" width="160" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="120" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Tokenisation</text>
        <text x="120" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">runs inside ✓</text>

        <rect x="40" y="168" width="160" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="120" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Mapping</text>
        <text x="120" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">held inside ✓</text>

        <line x1="200" y1="190" x2="290" y2="262" stroke="#c73e3a" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-coral-rc)"/>
        <text x="200" y="248" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c73e3a">mapping replicated</text>

        <rect x="260" y="240" width="180" height="100" rx="10" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
        <text x="280" y="262" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#c73e3a" letter-spacing="1.2">VENDOR / MIDDLEWARE</text>
        <rect x="280" y="276" width="140" height="44" rx="6" fill="#ffffff" stroke="#c73e3a" stroke-width="1"/>
        <text x="350" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Reconstruction</text>
        <text x="350" y="311" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#c73e3a">runs OUTSIDE ✗</text>

        <rect x="20" y="370" width="440" height="50" rx="6" fill="#fce9e8" stroke="none"/>
        <text x="240" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">Protection collapses to whatever the external</text>
        <text x="240" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">location can guarantee — usually less than the original promise.</text>
      </g>

      
      <g>
        <rect x="500" y="20" width="440" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="720" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">✓ Reconstruction inside the enterprise</text>

        <rect x="500" y="70" width="320" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="520" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

        <rect x="520" y="108" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="660" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Tokenisation</text>
        <text x="660" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">runs inside ✓</text>

        <rect x="520" y="168" width="280" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="660" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Mapping</text>
        <text x="660" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">held inside ✓</text>

        <rect x="520" y="228" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="660" y="247" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#5b4fe9">Reconstruction</text>
        <text x="660" y="263" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9">colocated with mapping ✓</text>

        <rect x="520" y="288" width="280" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="660" y="307" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Audit log</text>
        <text x="660" y="323" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">separate access controls ✓</text>

        <rect x="848" y="168" width="100" height="84" rx="8" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="898" y="190" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
        <text x="898" y="214" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">sees only</text>
        <text x="898" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">tokens</text>

        <line x1="800" y1="195" x2="846" y2="195" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>
        <line x1="846" y1="225" x2="800" y2="240" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>

        <rect x="500" y="370" width="440" height="50" rx="6" fill="#eeebfe" stroke="none"/>
        <text x="720" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">Mapping never leaves the boundary. The external</text>
        <text x="720" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">journey of the data ends at the reconstruction step.</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 · <strong>The most common architectural mistake — running reconstruction on external middleware because it's convenient — replicates the mapping outside the enterprise and collapses the protection the tokenisation provided.</strong></figcaption>
</figure>


<h2>3. How Reconstruction Integrates With the Workflow</h2>
<p>Reconstruction is not a standalone step the user invokes. It is infrastructure that has to integrate into wherever the AI's output is delivered. Three integration patterns cover most enterprise deployments.</p>

<h3>3.1 Inline Reconstruction in the Response Path</h3>
<p>The AI integration layer — whatever middleware sits between the workflow and the LLM endpoint — performs reconstruction before returning the response to the calling system. The calling system never sees tokens; it receives the business-ready output. <strong>This is the cleanest pattern and works for synchronous request-response workflows</strong>: contract review, summarisation, classification.</p>

<h3>3.2 Streaming Reconstruction</h3>
<p>For LLM responses that stream token-by-token (in the NLP sense, not the data-protection sense — note the unfortunate vocabulary collision), reconstruction has to work on the stream, recognising data-protection tokens as they appear and substituting in real time. <strong>This is harder than batch reconstruction because the data-protection token may be partially streamed at any given moment</strong>, and the reconstruction layer has to buffer enough to recognise it. Workflows that use streaming UIs (chat-style interfaces, live summarisation feeds) need this pattern; workflows that wait for the full response don't.</p>

<h3>3.3 Event-Driven Reconstruction</h3>
<p>For workflows where the AI's output triggers downstream actions — creating a ticket in the operations platform, writing a report into the document management system, updating a record in the CRM — reconstruction has to happen at the boundary between the AI integration and the downstream system. <strong>The tokenised response can be processed for routing, classification, or triage in the integration layer; reconstruction happens just before the data is written into the system the user will see.</strong></p>
<p>The architecture has to make explicit which of these patterns applies to which workflow. A misalignment — running streaming reconstruction on a workflow that should be event-driven, or inline reconstruction on a workflow that should stream — produces user-visible defects that look like AI quality problems but are actually integration problems.</p>

<h2>4. When the Model Produces Tokens That Don't Exist</h2>
<p>A specific failure mode worth treating carefully: <strong>the model occasionally hallucinates tokens</strong>. It produces a string that looks like a token in the system's format but doesn't correspond to anything in the mapping.</p>
<p>This happens for predictable reasons. The model has seen <code>CUST-7F2A</code> and <code>CUST-3B91</code> in the input and produces <code>CUST-5D44</code> in the output, drawing on the pattern. Or the model summarises and invents a token-shaped placeholder for an entity it inferred. Or, more rarely, the model echoes a token format from its training data that happens to collide with the enterprise's token format.</p>
<p>The reconstruction layer <strong>cannot silently substitute a hallucinated token</strong>, because there is nothing to substitute it with. It also <strong>cannot leave the hallucinated token in the output</strong>, because the user will see a fragment that looks like a system identifier. There are three reasonable responses.</p>

<ol>
  <li><strong>Flag the hallucinated token in the output and surface it to the user as an explicit gap</strong> — for example, <em>"[Reference to an entity the model produced but the system cannot resolve.]"</em> This preserves transparency at the cost of some output cleanliness.</li>
  <li><strong>Drop the hallucinated reference and rewrite the surrounding sentence.</strong> This produces cleaner output but requires the reconstruction layer to do non-trivial text manipulation, and may obscure that the model produced something not grounded in the input.</li>
  <li><strong>Reject the response and re-prompt the model</strong>, with a system instruction that constrains it to use only the tokens that appeared in the input. This produces the highest-quality output but adds latency and cost.</li>
</ol>

<p>Different workflows want different responses. A summarisation for internal review may prefer the first option (flag and surface). A document going to a customer may prefer the third (re-prompt). <strong>The choice should be configurable at the workflow level, not hard-coded into the reconstruction layer.</strong></p>

<h2>5. Audit and Traceability</h2>
<p>Reconstruction is the moment where the original sensitive values re-enter the workflow. From an audit perspective, <strong>it is one of the most important moments in the architecture</strong>, because it is where the access controls on the original data are exercised.</p>
<p>A well-designed reconstruction layer logs every operation: which token was looked up, when, in service of which workflow, by which integration. The log doesn't need to contain the original values — that would defeat the point of access controls — but it has to contain enough metadata to answer the question <em>"who triggered the reconstruction of which token, and where did the result go."</em></p>
<p>This matters operationally for two reasons. First, it makes the architecture auditable: an internal review of the workflow can verify that reconstruction is happening only for legitimate workflows and that the integration is behaving as designed. Second, it makes incident response possible: <strong>if a reconstruction integration is misbehaving, the log shows what happened and what was exposed.</strong></p>
<p>The audit also matters for the failure case where reconstruction emits to a downstream system that shouldn't have received the original values. If a reconstruction integration accidentally writes business-ready output to a logging system that wasn't supposed to see customer names, the audit trail is what tells the team what was exposed and to whom. Without the log, the team is guessing.</p>
<p>Reconstruction logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. <strong>They are, in effect, an audit trail of the most sensitive operation in the architecture.</strong></p>

<h2>6. The Operational Mistakes Most Teams Make</h2>
<p>Across deployments of this pattern, a small set of mistakes show up repeatedly. They are worth naming explicitly.</p>

<ul>
  <li><strong>Building reconstruction as a manual cleanup step.</strong> The most common mistake. The team gets tokenisation working, sees the AI output coming back tokenised, and adds a manual <em>"now find and replace the tokens"</em> step to the user's workflow. Users skip the step. Or they do it inconsistently. Or they paste tokenised output into a system that wasn't supposed to see it, and the cleanup never happens. <strong>Reconstruction has to be infrastructure, automatic and invisible.</strong> If it requires a human action, it will fail intermittently in ways that are hard to detect.</li>
  <li><strong>Running reconstruction in the wrong location.</strong> Discussed above. The convenience of running reconstruction in a vendor cloud or middleware service is real; the protection cost is also real. The architecture promises the original values stay in the enterprise environment, and reconstruction has to honour that promise.</li>
  <li><strong>Treating reconstruction as a static substitution.</strong> Real reconstruction has to handle malformed tokens, hallucinated tokens, tokens in unexpected contexts, and streaming responses. A naive implementation that does exact string match-and-replace will work in the demo and fail in production where the model's actual output is messier than the demo cases.</li>
  <li><strong>Not logging reconstruction.</strong> Reconstruction without an audit trail is reconstruction the team cannot defend. The first time someone asks <em>"did the AI ever see this customer's name, and if so, where did the result go,"</em> the team without reconstruction logs cannot answer.</li>
  <li><strong>Coupling reconstruction tightly to a specific LLM provider.</strong> Reconstruction logic that assumes ChatGPT's response format will break when the workflow switches to Claude or Gemini, even though the underlying tokenisation didn't change. <strong>The reconstruction layer should be provider-agnostic, treating the model's response as text-to-process rather than a known structure.</strong></li>
</ul>

<h2>7. What Good Reconstruction Looks Like</h2>
<p>A reconstruction layer that works in production has a small set of properties.</p>

<ul>
  <li>Runs inside the enterprise environment, colocated with the mapping</li>
  <li>Invoked automatically at the integration boundary, never as a manual step</li>
  <li>Handles streaming, batch, and event-driven workflows through different invocation patterns but a shared core</li>
  <li>Recognises tokens robustly across the variations real model output produces — formatting drift, partial references, paraphrases</li>
  <li>Distinguishes between legitimate tokens and hallucinated token-shaped strings, and handles each according to a configurable policy</li>
  <li>Logs every operation in a separate audit trail under the enterprise's exclusive control</li>
  <li>Provider-agnostic, so the workflow can swap LLM endpoints without rewriting the reconstruction layer</li>
</ul>

<p>When these properties hold, <strong>reconstruction becomes invisible infrastructure</strong>. The user submits a document, the workflow runs, the result comes back with real values in real structure, and the user never sees a token. The architecture's promise — that sensitive data stayed inside the boundary while the AI did useful work — holds across both halves of the workflow.</p>
<p>When these properties don't hold, reconstruction is the place the workflow breaks. The tokenisation can be perfect, the model can be excellent, the boundaries can be meticulous — and the user still ends up with output they can't use, or with sensitive data accidentally appearing in a downstream system that wasn't supposed to receive it. <strong>The last mile is where the architecture either delivers on its promise or quietly fails to.</strong></p>

<h2>8. Where This Fits in the Broader Pattern</h2>
<p>Reconstruction is one of the four stages of the broader pattern — detection, transformation (tokenisation), external processing, reconstruction — that lets external LLMs operate on data that cannot leave the enterprise environment in raw form. <strong>The four stages compose. The strength of the architecture is the weakest of the four.</strong></p>
<p>For the architecture as a whole, and the design decisions that the other three stages carry, see the pillar overview on running external LLMs on sensitive enterprise data. For why removal-based approaches (masking, redaction, PII guardrails) break on operational data — and why this pattern was needed in the first place — see the article on why AI workflows stall at tables, tickets, and operational documents. For the tokenisation patterns on the input side that this article's reconstruction reverses, see the article on tokenisation for LLM inputs.</p>

<div class="takeaways">
  <div class="takeaways__label">Key Takeaways</div>
  <ul>
    <li>Reconstruction is technically straightforward and architecturally critical — it's where pilots that demo well diverge from workflows that run in production</li>
    <li>It's not a simple swap-back: LLM output is generative, contains new token combinations, suffers formatting drift, and sometimes hallucinates token-shaped strings</li>
    <li>Location is non-negotiable — reconstruction has to run inside the enterprise environment, colocated with the mapping; external reconstruction collapses the protection</li>
    <li>Three integration patterns cover most workflows: inline, streaming, and event-driven — and misaligning the pattern produces defects that look like model problems</li>
    <li>Hallucinated tokens need an explicit, configurable policy: flag and surface, drop and rewrite, or reject and re-prompt</li>
    <li>Audit is essential — reconstruction is the moment original values re-enter the workflow, and logs are how the team defends or investigates that moment</li>
    <li>Five recurring mistakes: manual cleanup, wrong location, static substitution, no logging, provider lock-in</li>
    <li>Good reconstruction is invisible infrastructure; bad reconstruction is where the architecture quietly fails on the last mile</li>
  </ul>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Why isn't reconstruction just a simple swap-back?</h3>
<p>The LLM doesn't just copy tokens from input to output — it generates new text that reasons over them. Tokens appear in contexts the input never had, in combinations the model invented, sometimes with formatting drift (<code>CUST-7F2A</code> coming back as <code>CUST 7F2A</code> or <em>"the customer designated 7F2A"</em>). A naive exact-match swap fails on these cases, leaving token fragments visible in the output. Real reconstruction is robust token recognition across diverse generative output forms, with substitution that preserves grammatical coherence.</p>

<h3>Where does reconstruction have to run?</h3>
<p>Inside the enterprise environment, colocated with the mapping and the source systems. Reconstruction requires reading the mapping; if reconstruction runs outside the enterprise — on a vendor's infrastructure, in a third-country region, or on middleware the enterprise doesn't fully control — the mapping has to be replicated to that location, which collapses the protection the tokenisation provided. This is the most common architectural mistake in deployments of this pattern.</p>

<h3>What are the three integration patterns for reconstruction?</h3>
<p><strong>Inline reconstruction</strong> — the AI integration layer performs reconstruction before returning the response. Works for synchronous request-response workflows like contract review. <strong>Streaming reconstruction</strong> — works on token-by-token streams, buffering enough to recognise data-protection tokens as they appear. Needed for chat-style UIs and live summarisation. <strong>Event-driven reconstruction</strong> — happens at the boundary between AI integration and a downstream system like a CRM, ticketing platform, or document store; reconstruction occurs just before the data is written into the system the user will see.</p>

<h3>What should happen when the model hallucinates a token?</h3>
<p>Three reasonable responses, and the choice should be configurable per workflow. <em>Flag</em> the hallucinated token and surface it as an explicit gap — preserves transparency at the cost of cleanliness. <em>Drop</em> the hallucinated reference and rewrite the surrounding sentence — cleaner output but obscures that the model produced something not grounded in the input. <em>Reject</em> the response and re-prompt the model with a constraint to use only input tokens — highest quality, adds latency and cost. A summarisation for internal review may prefer flagging; a document going to a customer may prefer re-prompting.</p>

<h3>What does a reconstruction audit log need to contain?</h3>
<p>Enough metadata to answer <em>"who triggered the reconstruction of which token, when, in service of which workflow, and where did the result go."</em> It does not need to contain the original values themselves — that would defeat the access controls — but it has to make the operation traceable. Logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture.</p>

<h3>What are the most common reconstruction mistakes?</h3>
<p>Five recur. <strong>Manual cleanup</strong> — building reconstruction as a step users have to perform; they will skip it. <strong>Wrong location</strong> — running reconstruction in a vendor cloud because it's convenient; it collapses the protection. <strong>Static substitution</strong> — treating reconstruction as exact string match-and-replace; it fails on the messy real output from production models. <strong>No logging</strong> — the team cannot defend the architecture or do incident response. <strong>Provider lock-in</strong> — coupling reconstruction logic to a specific LLM's response format; it breaks when the workflow switches vendor.</p>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Why isn't reconstruction just a simple swap-back?","acceptedAnswer":{"@type":"Answer","text":"The LLM doesn't just copy tokens from input to output — it generates new text that reasons over them. Tokens appear in contexts the input never had, in combinations the model invented, sometimes with formatting drift (CUST-7F2A coming back as CUST 7F2A or the customer designated 7F2A). A naive exact-match swap fails on these cases, leaving token fragments visible in the output. Real reconstruction is robust token recognition across diverse generative output forms, with substitution that preserves grammatical coherence."}}, {"@type":"Question","name":"Where does reconstruction have to run?","acceptedAnswer":{"@type":"Answer","text":"Inside the enterprise environment, colocated with the mapping and the source systems. Reconstruction requires reading the mapping; if reconstruction runs outside the enterprise — on a vendor's infrastructure, in a third-country region, or on middleware the enterprise doesn't fully control — the mapping has to be replicated to that location, which collapses the protection the tokenisation provided. This is the most common architectural mistake in deployments of this pattern."}}, {"@type":"Question","name":"What are the three integration patterns for reconstruction?","acceptedAnswer":{"@type":"Answer","text":"Inline reconstruction (the AI integration layer performs reconstruction before returning the response — works for synchronous request-response workflows like contract review). Streaming reconstruction (works on token-by-token streams, buffering enough to recognise data-protection tokens as they appear — needed for chat-style UIs and live summarisation). Event-driven reconstruction (happens at the boundary between AI integration and a downstream system like a CRM, ticketing platform, or document store — reconstruction occurs just before the data is written into the system the user will see)."}}, {"@type":"Question","name":"What should happen when the model hallucinates a token?","acceptedAnswer":{"@type":"Answer","text":"Three reasonable responses, and the choice should be configurable per workflow. Flag the hallucinated token and surface it as an explicit gap (preserves transparency at the cost of cleanliness). Drop the hallucinated reference and rewrite the surrounding sentence (cleaner output but obscures that the model produced something not grounded in the input). Reject the response and re-prompt the model with a constraint to use only input tokens (highest quality, adds latency and cost). A summarisation for internal review may prefer flagging; a document going to a customer may prefer re-prompting."}}, {"@type":"Question","name":"What does a reconstruction audit log need to contain?","acceptedAnswer":{"@type":"Answer","text":"Enough metadata to answer 'who triggered the reconstruction of which token, when, in service of which workflow, and where did the result go.' It does not need to contain the original values themselves — that would defeat the access controls — but it has to make the operation traceable. Logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture."}}, {"@type":"Question","name":"What are the most common reconstruction mistakes?","acceptedAnswer":{"@type":"Answer","text":"Five recur. Building reconstruction as a manual cleanup step users have to perform (they will skip it). Running reconstruction in a vendor cloud or middleware service because it's convenient (it collapses the protection). Treating reconstruction as static string substitution (it fails on the messy real output from production models). Not logging reconstruction (the team cannot defend the architecture or do incident response). Coupling reconstruction tightly to a specific LLM provider (it breaks when the workflow switches vendor, even if the underlying tokenisation didn't change)."}} ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    lead: "The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.",
    category: "AI Architecture",
    readTime: "~9 min read",
    dateUpdated: "Updated May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "Reconstruction — the step that maps tokenised LLM output back to original values — is technically straightforward and architecturally critical. Most enterprise AI pilots underinvest in it and stall at production for the same reason: the model works, the integration works, but the output requires manual cleanup and the productivity gain evaporates. Real reconstruction is more than a swap-back: the LLM generates new text that references tokens in novel contexts, sometimes with formatting drift, sometimes hallucinated, sometimes streamed token-by-token. It has to run inside the enterprise environment, colocated with the mapping — running it on convenient external middleware collapses the protection the tokenisation provided. Three integration patterns (inline, streaming, event-driven) cover most workflows. Hallucinated tokens need an explicit policy (flag, drop, or re-prompt). Every operation has to be audited, in logs held separately under the mapping's own access controls. Five operational mistakes recur — manual cleanup, wrong location, static substitution, no logging, provider lock-in. When reconstruction is right, it becomes invisible infrastructure. When it's wrong, the entire architecture's promise quietly fails on the last mile.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/reconstructing-ai-output",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Reconstructing AI Output",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "AI 출력 복원: 모델 응답과 비즈니스 현실 사이의 마지막 구간",
    lead: "외부 LLM의 토큰화된 응답은 바로 사용할 수 없습니다. 복원은 그것을 업무에 사용 가능한 출력으로 변환하는 단계이며, 대부분의 팀이 충분히 투자하지 않다가 워크플로우가 프로덕션에서 멈추는 지점입니다.",
    category: "AI 아키텍처",
    readTime: "약 9분 읽기",
    dateUpdated: "2026년 5월 업데이트",
    tldrLabel: "TL;DR",
    tldrBody: "복원은 LLM의 토큰화된 출력을 원래 값으로 다시 매핑하는 단계로, 기술적으로는 단순하지만 아키텍처 관점에서는 매우 중요합니다. 대부분의 엔터프라이즈 AI 파일럿이 같은 이유로 이 단계에 충분히 투자하지 않고 프로덕션에서 막힙니다. 모델도 작동하고 연동도 작동하지만 출력물에 수동 정리가 필요해 생산성 향상 효과가 사라집니다. 실제 복원은 단순한 역치환 이상입니다. LLM은 토큰을 새로운 문맥에서 참조하는 새 텍스트를 생성하며, 때로는 포맷이 변형되거나, 환각이 발생하거나, 토큰 단위로 스트리밍되기도 합니다. 복원은 엔터프라이즈 환경 내부에서 매핑과 함께 실행되어야 합니다. 편의를 위해 외부 미들웨어에서 실행하면 토큰화가 제공한 보호가 무너집니다. 세 가지 연동 패턴(인라인, 스트리밍, 이벤트 기반)으로 대부분의 워크플로우를 커버할 수 있습니다. 환각 토큰에 대해서는 플래그 표시, 삭제, 또는 재프롬프트 중 명시적인 정책이 필요합니다. 모든 연산은 매핑과 동일한 접근 제어 하에 별도 보관되는 로그에 감사 기록되어야 합니다. 다섯 가지 운영 실수가 반복됩니다. 수동 정리, 잘못된 위치, 정적 치환, 로그 미기록, 특정 제공업체 종속. 복원이 제대로 되면 투명한 인프라가 됩니다. 잘못되면 아키텍처 전체의 약속이 마지막 구간에서 조용히 무너집니다.",
    bodyHtml: `<h2>1. 복원이 단순한 역치환 이상인 이유</h2>
<p>엔터프라이즈 AI 팀이 토큰화된 문서를 외부 LLM에 전송하는 워크플로우를 설계할 때, 대부분의 관심은 준비 단계에 집중됩니다. 감지, 변환, 경계를 넘는 데이터가 무엇인지. 응답 쪽에는 관심이 덜합니다. 모델이 출력을 반환하면 토큰만 되돌려 치환하면 결과가 완성된다는 가정 때문입니다.</p>
<p>그 가정은 대략적으로는 맞지만 운영적으로는 잘못된 것입니다. 복원 단계는 기술적으로 단순합니다. 매핑에서 토큰을 찾아 되돌려 치환합니다. 하지만 아키텍처 관점에서는 매우 중요합니다. <strong>데모에서 잘 작동하는 파일럿과 프로덕션에서 실제로 운영되는 워크플로우의 차이가 결정되는 지점입니다.</strong> 복원을 부차적으로 다루는 팀은 항상 같은 지점에서 AI 프로젝트가 막힙니다. 모델도 작동하고 연동도 작동하지만, 출력이 수동 정리 없이는 실제로 사용할 수 있는 형태가 아니어서 프로젝트를 정당화했던 생산성 향상 효과가 사라집니다.</p>
<p>가장 단순한 경우, 복원은 토큰화와 대칭입니다. 입력에서 <em>Marlene Schmidt</em>가 <code>CUST-7F2A</code>로 치환되었고, 출력에서 <code>CUST-7F2A</code>가 참조되면, 복원 단계에서 <code>CUST-7F2A</code>를 다시 <em>Marlene Schmidt</em>로 되돌리고 워크플로우가 계속됩니다.</p>
<p>모든 워크플로우가 이런 형태라면 복원은 사소한 문제일 것입니다. 하지만 몇 가지 이유로 워크플로우는 이런 형태가 아닙니다.</p>

<ul>
  <li><strong>모델의 응답은 생성적이며 단순히 치환적이지 않습니다.</strong> LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 출력은 새 문장, 새 조합으로 토큰을 참조하며, 때로는 의역되거나 요약되거나 여러 입력 토큰에 걸쳐 합성됩니다. 복원 레이어는 입력에 없었던 문맥에 등장하는 토큰을 처리해야 합니다.</li>
  <li><strong>응답에는 입력에 없던 토큰이 포함될 수 있습니다.</strong> 다섯 개의 티켓을 바탕으로 추론하는 요약 작업이 <em>"영향을 받은 고객 중 세 명</em>(<code>CUST-7F2A</code>, <code>CUST-3B91</code>, <code>CUST-9D2C</code>)<em>이 동일한 펌웨어 버전을 사용합니다."</em>와 같은 문장을 생성할 수 있습니다. 이 구문은 새로운 것입니다. 복원 레이어는 각 토큰을 찾아 조회하고 모델이 작성한 문장에 되돌려 치환해야 합니다.</li>
  <li><strong>응답에는 때때로 토큰에 대한 <em>형식이 잘못된</em> 참조가 포함됩니다.</strong> 모델은 특히 긴 출력에서 토큰 형식을 놓치는 경우가 있습니다. <code>CUST-7F2A</code>로 입력된 토큰이 <code>CUST 7F2A</code>, <code>CUST7F2A</code>, 또는 단순히 <em>"7F2A로 지정된 고객"</em>으로 반환될 수 있습니다. 정확한 문자열 매칭만 수행하는 복원 레이어는 이런 경우에 실패하고, 사용자에게 전달되는 출력에 해결되어야 했을 토큰 조각이 그대로 남게 됩니다.</li>
  <li><strong>응답에는 모델의 코멘트나 헤징이 포함될 수 있습니다.</strong> <em>"고객 </em><code>CUST-7F2A</code><em>에 대한 정보를 바탕으로 가장 가능성 높은 근본 원인은..."</em>과 같은 형태입니다. 복원은 모델이 스스로 추가한 절에 등장하는 토큰도 직접 추출한 토큰과 동일한 정확도로 처리해야 합니다.</li>
</ul>

<p>따라서 역치환처럼 보이는 것은 실제로는 작지만 실질적인 텍스트 처리 문제입니다. <strong>다양한 출력 형태에서 토큰을 견고하게 인식하고, 모델 응답의 문법적 일관성을 보존하는 방식으로 치환이 이루어져야 합니다.</strong></p>

<h2>2. 복원이 실행되어야 하는 위치</h2>
<p>복원의 위치는 협상의 여지가 없습니다. <strong>출력이 사용자나 다운스트림 시스템에 도달하기 전에 엔터프라이즈 환경 내부에서 실행되어야 합니다.</strong></p>
<p>그 이유는 매핑이 엔터프라이즈 환경에 있어야 하는 이유와 같습니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부에서 일어난다면, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 시스템에서 실행된다면, 매핑을 해당 위치에서 접근 가능하게 해야 하며, 이는 토큰화가 처음에 제공한 보호를 무너뜨립니다.</p>
<p>이것이 <strong>이 패턴 배포에서 가장 흔한 아키텍처 실수입니다.</strong> 팀이 환경 내부에서 토큰화를 설정하고, 외부 LLM에 전송한 다음, 편리하게 접근 가능한 클라우드 서비스나 미들웨어에서 복원을 실행합니다. 편의성은 실재합니다. 하지만 보호는 사라집니다. 엔터프라이즈의 독점적 통제 하에 있어야 했던 매핑이 원래의 약속이 더 이상 유효하지 않은 위치에 복제된 것입니다.</p>
<p>올바른 아키텍처는 복원이 소스 시스템 및 매핑과 함께 위치하는 것입니다. 온프레미스, 엔터프라이즈 자체 VPC, 또는 워크플로우가 실행되는 EU 리전 인프라 어디든. <strong>LLM의 출력은 토큰화된 상태로 반환되어 경계 내부의 복원 레이어로 이동하며, 해당 레이어에서 업무용 콘텐츠로 변환되어 나옵니다.</strong> 데이터의 외부 여정은 복원 단계에서 끝납니다.</p>
<p>아키텍처의 나머지 부분이 경계에 대해 철저한 워크플로우에서, 즉 내부 캡슐화, 내부 매핑, 내부 감사 로그를 갖추고 있는데 복원만 외부로 빠져나간 경우, 나머지 아키텍처의 약속은 복원 위치가 보장할 수 있는 수준으로 약화됩니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" role="img" aria-labelledby="reconstruction-location-title reconstruction-location-desc">
      <title id="reconstruction-location-title">복원이 실행되어야 하는 위치</title>
      <desc id="reconstruction-location-desc">두 아키텍처가 나란히 표시됩니다. 왼쪽은 복원이 외부 미들웨어에서 실행되어 매핑이 엔터프라이즈 외부에 복제되며 보호가 무너지는 경우입니다. 오른쪽은 복원이 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어 보호가 유지되는 경우입니다.</desc>

      <defs>
        <marker id="arrow-coral-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-primary-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
      </defs>

      
      <g>
        <rect x="20" y="20" width="440" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
        <text x="240" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">✗ 엔터프라이즈 외부에서의 복원</text>

        <rect x="20" y="70" width="200" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">기업 환경</text>

        <rect x="40" y="108" width="160" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="120" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">토큰화</text>
        <text x="120" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 실행 ✓</text>

        <rect x="40" y="168" width="160" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="120" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">매핑</text>
        <text x="120" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 보관 ✓</text>

        <line x1="200" y1="190" x2="290" y2="262" stroke="#c73e3a" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-coral-rc)"/>
        <text x="200" y="248" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c73e3a">매핑 복제됨</text>

        <rect x="260" y="240" width="180" height="100" rx="10" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
        <text x="280" y="262" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#c73e3a" letter-spacing="1.2">벤더 / 미들웨어</text>
        <rect x="280" y="276" width="140" height="44" rx="6" fill="#ffffff" stroke="#c73e3a" stroke-width="1"/>
        <text x="350" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">복원</text>
        <text x="350" y="311" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#c73e3a">외부 실행 ✗</text>

        <rect x="20" y="370" width="440" height="50" rx="6" fill="#fce9e8" stroke="none"/>
        <text x="240" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">보호 수준이 외부 위치가 보장할 수 있는 수준으로 떨어집니다.</text>
        <text x="240" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">일반적으로 원래 약속보다 낮습니다.</text>
      </g>

      
      <g>
        <rect x="500" y="20" width="440" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="720" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">✓ 엔터프라이즈 내부에서의 복원</text>

        <rect x="500" y="70" width="320" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="520" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">기업 환경</text>

        <rect x="520" y="108" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="660" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">토큰화</text>
        <text x="660" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 실행 ✓</text>

        <rect x="520" y="168" width="280" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="660" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">매핑</text>
        <text x="660" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 보관 ✓</text>

        <rect x="520" y="228" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="660" y="247" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#5b4fe9">복원</text>
        <text x="660" y="263" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9">매핑과 함께 위치 ✓</text>

        <rect x="520" y="288" width="280" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="660" y="307" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">감사 로그</text>
        <text x="660" y="323" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">별도 접근 제어 ✓</text>

        <rect x="848" y="168" width="100" height="84" rx="8" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="898" y="190" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#9ca3af" letter-spacing="1.2">외부 LLM</text>
        <text x="898" y="214" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">토큰만</text>
        <text x="898" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">처리</text>

        <line x1="800" y1="195" x2="846" y2="195" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>
        <line x1="846" y1="225" x2="800" y2="240" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>

        <rect x="500" y="370" width="440" height="50" rx="6" fill="#eeebfe" stroke="none"/>
        <text x="720" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">매핑은 경계를 벗어나지 않습니다. 데이터의 외부 여정은</text>
        <text x="720" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">복원 단계에서 끝납니다.</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>가장 흔한 아키텍처 실수인 편의를 위해 외부 미들웨어에서 복원을 실행하는 것은 매핑을 엔터프라이즈 외부에 복제하여 토큰화가 제공한 보호를 무너뜨립니다.</strong></figcaption>
</figure>


<h2>3. 복원이 워크플로우와 통합되는 방식</h2>
<p>복원은 사용자가 호출하는 독립적인 단계가 아닙니다. AI 출력이 전달되는 모든 위치에 통합되어야 하는 인프라입니다. 세 가지 연동 패턴이 대부분의 엔터프라이즈 배포를 커버합니다.</p>

<h3>3.1 응답 경로에서의 인라인 복원</h3>
<p>AI 연동 레이어, 즉 워크플로우와 LLM 엔드포인트 사이에 위치한 미들웨어가 호출 시스템에 응답을 반환하기 전에 복원을 수행합니다. 호출 시스템은 토큰을 볼 수 없으며 업무용 출력을 받습니다. <strong>이것이 가장 깔끔한 패턴으로, 계약 검토, 요약, 분류 같은 동기식 요청-응답 워크플로우에 적합합니다.</strong></p>

<h3>3.2 스트리밍 복원</h3>
<p>토큰 단위로 스트리밍되는 LLM 응답의 경우(데이터 보호 의미가 아닌 NLP 의미의 토큰, 불행히도 용어 충돌이 있습니다), 복원은 스트림에서 작동해야 하며 데이터 보호 토큰이 나타나는 즉시 인식하고 실시간으로 치환해야 합니다. <strong>어느 시점에서든 데이터 보호 토큰이 부분적으로만 스트리밍될 수 있기 때문에 배치 복원보다 어렵습니다.</strong> 복원 레이어는 이를 인식할 만큼 충분히 버퍼링해야 합니다. 스트리밍 UI(채팅 스타일 인터페이스, 실시간 요약 피드)를 사용하는 워크플로우는 이 패턴이 필요하며, 전체 응답을 기다리는 워크플로우는 필요하지 않습니다.</p>

<h3>3.3 이벤트 기반 복원</h3>
<p>AI 출력이 다운스트림 작업을 트리거하는 워크플로우, 즉 운영 플랫폼에서 티켓 생성, 문서 관리 시스템에 보고서 작성, CRM 레코드 업데이트 등의 경우, 복원은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어져야 합니다. <strong>토큰화된 응답은 연동 레이어에서 라우팅, 분류 또는 트리아지 처리를 위해 처리될 수 있습니다. 복원은 데이터가 사용자가 볼 시스템에 기록되기 직전에 이루어집니다.</strong></p>
<p>아키텍처는 어떤 패턴이 어떤 워크플로우에 적용되는지 명확히 해야 합니다. 패턴이 맞지 않으면, 예를 들어 이벤트 기반이어야 하는 워크플로우에 스트리밍 복원을 실행하거나 스트리밍이어야 하는 워크플로우에 인라인 복원을 실행하면, AI 품질 문제처럼 보이지만 실제로는 연동 문제인 사용자 가시적 결함이 발생합니다.</p>

<h2>4. 모델이 존재하지 않는 토큰을 생성할 때</h2>
<p>신중하게 다루어야 할 특정 실패 모드가 있습니다. <strong>모델이 때때로 토큰을 환각합니다.</strong> 시스템 형식의 토큰처럼 보이지만 매핑에 존재하지 않는 문자열을 생성합니다.</p>
<p>이는 예측 가능한 이유로 발생합니다. 모델이 입력에서 <code>CUST-7F2A</code>와 <code>CUST-3B91</code>을 보고 패턴을 활용하여 출력에서 <code>CUST-5D44</code>를 생성합니다. 또는 모델이 추론한 엔티티에 대해 토큰 형태의 플레이스홀더를 만들어냅니다. 더 드물게는 모델이 학습 데이터의 토큰 형식을 반향하여 엔터프라이즈의 토큰 형식과 충돌하기도 합니다.</p>
<p>복원 레이어는 <strong>환각 토큰을 조용히 치환할 수 없습니다.</strong> 치환할 대상이 없기 때문입니다. 또한 <strong>환각 토큰을 출력에 그대로 둘 수도 없습니다.</strong> 사용자가 시스템 식별자처럼 보이는 조각을 보게 되기 때문입니다. 합리적인 대응은 세 가지입니다.</p>

<ol>
  <li><strong>출력에서 환각 토큰에 플래그를 표시하고 사용자에게 명시적 갭으로 표시합니다.</strong> 예를 들어 <em>"[모델이 생성했지만 시스템이 해석할 수 없는 엔티티에 대한 참조.]"</em>와 같이. 이는 출력의 깔끔함을 일부 희생하고 투명성을 유지합니다.</li>
  <li><strong>환각 참조를 삭제하고 주변 문장을 재작성합니다.</strong> 더 깔끔한 출력을 생성하지만 복원 레이어가 상당한 텍스트 조작을 수행해야 하며, 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨길 수 있습니다.</li>
  <li><strong>응답을 거부하고 입력에 등장한 토큰만 사용하도록 제한하는 시스템 지침과 함께 모델에 재프롬프트합니다.</strong> 가장 높은 품질의 출력을 생성하지만 지연 시간과 비용이 추가됩니다.</li>
</ol>

<p>워크플로우마다 다른 대응을 원합니다. 내부 검토용 요약은 첫 번째 옵션(플래그 표시)을 선호할 수 있습니다. 고객에게 전달되는 문서는 세 번째(재프롬프트)를 선호할 수 있습니다. <strong>이 선택은 복원 레이어에 하드코딩되지 않고 워크플로우 수준에서 구성 가능해야 합니다.</strong></p>

<h2>5. 감사 및 추적성</h2>
<p>복원은 원본 민감 값이 워크플로우에 재진입하는 순간입니다. 감사 관점에서 <strong>이것은 아키텍처에서 가장 중요한 순간 중 하나입니다.</strong> 원본 데이터에 대한 접근 제어가 행사되는 지점이기 때문입니다.</p>
<p>잘 설계된 복원 레이어는 모든 연산을 기록합니다. 어떤 토큰이 조회되었는지, 언제, 어떤 워크플로우를 위해, 어떤 연동에 의해. 로그는 원본 값을 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 <em>"어떤 토큰의 복원이 누구에 의해 트리거되었고 결과가 어디로 갔는지"</em>에 답할 수 있는 충분한 메타데이터를 포함해야 합니다.</p>
<p>이는 두 가지 이유로 운영적으로 중요합니다. 첫째, 아키텍처를 감사 가능하게 만듭니다. 워크플로우의 내부 검토를 통해 복원이 적법한 워크플로우에 대해서만 이루어지고 연동이 설계된 대로 작동하고 있음을 검증할 수 있습니다. 둘째, 인시던트 대응을 가능하게 합니다. <strong>복원 연동이 오작동하는 경우, 로그가 무슨 일이 있었고 무엇이 노출되었는지 보여줍니다.</strong></p>
<p>감사는 또한 복원이 원본 값을 받아서는 안 될 다운스트림 시스템으로 내보내는 실패 케이스에서도 중요합니다. 복원 연동이 실수로 고객 이름을 볼 수 없어야 했던 로깅 시스템에 업무용 출력을 기록했다면, 감사 추적이 팀에게 무엇이 어디에 노출되었는지 알려줍니다. 로그가 없으면 팀은 추측만 할 수 있습니다.</p>
<p>복원 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 그리고 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. <strong>사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.</strong></p>

<h2>6. 대부분의 팀이 저지르는 운영 실수</h2>
<p>이 패턴의 배포 전반에 걸쳐 소수의 실수가 반복적으로 나타납니다. 명시적으로 언급할 가치가 있습니다.</p>

<ul>
  <li><strong>복원을 수동 정리 단계로 구축하는 것.</strong> 가장 흔한 실수입니다. 팀이 토큰화를 작동시키고, AI 출력이 토큰화된 상태로 반환되는 것을 보고, 사용자의 워크플로우에 수동으로 <em>"토큰을 찾아 교체"</em>하는 단계를 추가합니다. 사용자는 이 단계를 건너뜁니다. 또는 일관성 없이 수행합니다. 또는 토큰화된 출력을 볼 수 없어야 했던 시스템에 붙여 넣어 정리가 전혀 이루어지지 않습니다. <strong>복원은 자동적이고 눈에 보이지 않는 인프라여야 합니다.</strong> 사람의 행동이 필요하면 감지하기 어려운 방식으로 간헐적으로 실패하게 됩니다.</li>
  <li><strong>잘못된 위치에서 복원을 실행하는 것.</strong> 위에서 언급했습니다. 벤더 클라우드나 미들웨어 서비스에서 복원을 실행하는 편의성은 실재합니다. 보호 비용도 실재합니다. 아키텍처는 원본 값이 엔터프라이즈 환경에 유지될 것을 약속하며, 복원은 그 약속을 지켜야 합니다.</li>
  <li><strong>복원을 정적 치환으로 취급하는 것.</strong> 실제 복원은 형식이 잘못된 토큰, 환각 토큰, 예상치 못한 문맥의 토큰, 그리고 스트리밍 응답을 처리해야 합니다. 정확한 문자열 매치 앤 리플레이스를 수행하는 단순한 구현은 데모에서는 작동하지만 모델의 실제 출력이 데모 케이스보다 지저분한 프로덕션에서는 실패합니다.</li>
  <li><strong>복원을 기록하지 않는 것.</strong> 감사 추적 없는 복원은 팀이 방어할 수 없는 복원입니다. 누군가가 <em>"AI가 이 고객의 이름을 본 적이 있나요, 그렇다면 결과는 어디로 갔나요"</em>라고 처음 물어볼 때, 복원 로그가 없는 팀은 답할 수 없습니다.</li>
  <li><strong>복원을 특정 LLM 제공업체에 긴밀하게 결합하는 것.</strong> ChatGPT의 응답 형식을 가정하는 복원 로직은 기본 토큰화가 변경되지 않았더라도 워크플로우가 Claude 또는 Gemini로 전환될 때 작동하지 않게 됩니다. <strong>복원 레이어는 제공업체와 무관하게, 모델의 응답을 알려진 구조가 아닌 처리해야 할 텍스트로 취급해야 합니다.</strong></li>
</ul>

<h2>7. 좋은 복원의 모습</h2>
<p>프로덕션에서 작동하는 복원 레이어는 소수의 속성을 갖추고 있습니다.</p>

<ul>
  <li>매핑과 함께 엔터프라이즈 환경 내부에서 실행됩니다.</li>
  <li>연동 경계에서 자동으로 호출되며, 수동 단계로 실행되지 않습니다.</li>
  <li>다른 호출 패턴을 통해 스트리밍, 배치, 이벤트 기반 워크플로우를 처리하지만 공유된 코어를 사용합니다.</li>
  <li>포맷 변형, 부분적 참조, 의역 등 실제 모델 출력이 생성하는 다양한 변형에서 토큰을 견고하게 인식합니다.</li>
  <li>적법한 토큰과 환각 토큰 형태의 문자열을 구분하고 각각을 구성 가능한 정책에 따라 처리합니다.</li>
  <li>모든 연산을 엔터프라이즈의 독점 통제 하에 별도의 감사 추적에 기록합니다.</li>
  <li>제공업체 무관하게 작동하므로 워크플로우가 복원 레이어를 재작성하지 않고도 LLM 엔드포인트를 교체할 수 있습니다.</li>
</ul>

<p>이러한 속성이 갖추어지면, <strong>복원은 투명한 인프라가 됩니다.</strong> 사용자가 문서를 제출하고, 워크플로우가 실행되고, 결과가 실제 구조에 실제 값으로 반환되며, 사용자는 토큰을 볼 수 없습니다. 민감한 데이터가 AI가 유용한 작업을 수행하는 동안 경계 내에 유지되었다는 아키텍처의 약속이 워크플로우의 두 절반 모두에서 유지됩니다.</p>
<p>이러한 속성이 갖추어지지 않으면 복원이 워크플로우가 깨지는 지점이 됩니다. 토큰화가 완벽하고, 모델이 탁월하고, 경계가 철저해도, 사용자는 여전히 사용할 수 없는 출력을 받거나 민감한 데이터가 받아서는 안 될 다운스트림 시스템에 실수로 나타나는 상황에 처하게 됩니다. <strong>마지막 구간이 바로 아키텍처가 약속을 이행하거나 조용히 실패하는 곳입니다.</strong></p>

<h2>8. 더 넓은 패턴에서의 위치</h2>
<p>복원은 더 넓은 패턴의 네 단계 중 하나입니다. 감지, 변환(토큰화), 외부 처리, 복원. 이 패턴은 외부 LLM이 원시 형태로 엔터프라이즈 환경을 벗어날 수 없는 데이터를 처리할 수 있게 해줍니다. <strong>네 단계는 합성됩니다. 아키텍처의 강도는 네 단계 중 가장 약한 것의 강도입니다.</strong></p>
<p>아키텍처 전체와 나머지 세 단계가 담고 있는 설계 결정에 대해서는 민감한 엔터프라이즈 데이터에서 외부 LLM을 실행하는 것에 관한 필러 개요를 참조하십시오. 제거 기반 접근법(마스킹, 검열, PII 가드레일)이 운영 데이터에서 실패하는 이유, 그리고 이 패턴이 애초에 필요한 이유에 대해서는 AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유에 관한 아티클을 참조하십시오. 이 아티클의 복원이 되돌리는 입력 측 토큰화 패턴에 대해서는 LLM 입력을 위한 토큰화 아티클을 참조하십시오.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>복원은 기술적으로 단순하지만 아키텍처 관점에서 매우 중요합니다. 데모에서 잘 작동하는 파일럿과 프로덕션에서 운영되는 워크플로우가 갈리는 지점입니다.</li>
    <li>단순한 역치환이 아닙니다. LLM 출력은 생성적이며 새로운 토큰 조합을 포함하고 포맷 변형을 겪으며 때로는 토큰 형태의 문자열을 환각합니다.</li>
    <li>위치는 협상의 여지가 없습니다. 복원은 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 외부 복원은 보호를 무너뜨립니다.</li>
    <li>세 가지 연동 패턴이 대부분의 워크플로우를 커버합니다. 인라인, 스트리밍, 이벤트 기반. 패턴을 잘못 선택하면 모델 문제처럼 보이는 결함이 발생합니다.</li>
    <li>환각 토큰에는 명시적이고 구성 가능한 정책이 필요합니다. 플래그 표시, 삭제 후 재작성, 또는 거부 후 재프롬프트.</li>
    <li>감사가 필수적입니다. 복원은 원본 값이 워크플로우에 재진입하는 순간이며, 로그는 팀이 그 순간을 방어하거나 조사하는 방법입니다.</li>
    <li>다섯 가지 반복 실수: 수동 정리, 잘못된 위치, 정적 치환, 로그 미기록, 제공업체 종속.</li>
    <li>좋은 복원은 투명한 인프라입니다. 나쁜 복원은 아키텍처가 마지막 구간에서 조용히 실패하는 지점입니다.</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>복원이 왜 단순한 역치환이 아닌가요?</h3>
<p>LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 토큰은 입력에 없었던 문맥, 모델이 만들어낸 조합으로 나타나며, 때로는 포맷 변형이 발생합니다(<code>CUST-7F2A</code>가 <code>CUST 7F2A</code> 또는 <em>"7F2A로 지정된 고객"</em>으로 반환되는 경우). 단순한 정확한 매치 역치환은 이런 경우에 실패하여 토큰 조각이 출력에 그대로 남게 됩니다. 실제 복원은 다양한 생성적 출력 형태에서 견고한 토큰 인식이며, 문법적 일관성을 보존하는 치환입니다.</p>

<h3>복원은 어디에서 실행되어야 하나요?</h3>
<p>매핑 및 소스 시스템과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 미들웨어에서 실행된다면 매핑을 해당 위치에 복제해야 하며, 이는 토큰화가 제공한 보호를 무너뜨립니다. 이것이 이 패턴 배포에서 가장 흔한 아키텍처 실수입니다.</p>

<h3>복원을 위한 세 가지 연동 패턴은 무엇인가요?</h3>
<p><strong>인라인 복원</strong> — AI 연동 레이어가 응답을 반환하기 전에 복원을 수행합니다. 계약 검토와 같은 동기식 요청-응답 워크플로우에 적합합니다. <strong>스트리밍 복원</strong> — 토큰 단위 스트림에서 작동하며 데이터 보호 토큰이 나타날 때 인식할 만큼 충분히 버퍼링합니다. 채팅 스타일 UI 및 실시간 요약에 필요합니다. <strong>이벤트 기반 복원</strong> — CRM, 티켓팅 플랫폼, 문서 저장소 같은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어집니다. 데이터가 사용자가 볼 시스템에 기록되기 직전에 복원이 이루어집니다.</p>

<h3>모델이 토큰을 환각할 때 어떻게 해야 하나요?</h3>
<p>세 가지 합리적인 대응이 있으며 선택은 워크플로우별로 구성 가능해야 합니다. <em>플래그 표시</em>는 환각 토큰을 명시적 갭으로 표시합니다. 깔끔함을 희생하고 투명성을 유지합니다. <em>삭제</em>는 환각 참조를 삭제하고 주변 문장을 재작성합니다. 더 깔끔한 출력이지만 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨깁니다. <em>거부</em>는 응답을 거부하고 입력 토큰만 사용하도록 제한하여 모델에 재프롬프트합니다. 가장 높은 품질이지만 지연 시간과 비용이 추가됩니다. 내부 검토용 요약은 플래그 표시를 선호할 수 있고 고객에게 전달되는 문서는 재프롬프트를 선호할 수 있습니다.</p>

<h3>복원 감사 로그에는 무엇이 포함되어야 하나요?</h3>
<p><em>"어떤 토큰의 복원이 누구에 의해 언제, 어떤 워크플로우를 위해 트리거되었고 결과가 어디로 갔는지"</em>에 답할 수 있는 충분한 메타데이터를 포함해야 합니다. 원본 값 자체는 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 연산을 추적 가능하게 해야 합니다. 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. 사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.</p>

<h3>가장 흔한 복원 실수는 무엇인가요?</h3>
<p>다섯 가지가 반복됩니다. <strong>수동 정리</strong> — 사용자가 수행해야 하는 단계로 복원을 구축하면 건너뜁니다. <strong>잘못된 위치</strong> — 편의를 위해 벤더 클라우드에서 복원을 실행하면 보호가 무너집니다. <strong>정적 치환</strong> — 복원을 정확한 문자열 매치 앤 리플레이스로 취급하면 프로덕션 모델의 지저분한 실제 출력에서 실패합니다. <strong>로그 미기록</strong> — 팀이 아키텍처를 방어하거나 인시던트 대응을 할 수 없습니다. <strong>제공업체 종속</strong> — 복원 로직을 특정 LLM의 응답 형식에 결합하면 워크플로우가 벤더를 전환할 때 작동하지 않게 됩니다.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/reconstructing-ai-output",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Reconstructing AI Output",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "KI-Output wiederherstellen: Die letzte Meile zwischen Modellantwort und Geschäftspraxis",
    lead: "Die tokenisierte Antwort eines externen LLM ist noch nicht einsatzbereit. Erst die Rekonstruktion macht daraus verwertbaren Output — und genau hier investieren die meisten Teams zu wenig, bis der Prozess im Produktivbetrieb ins Stocken gerät.",
    category: "KI-Architektur",
    readTime: "~9 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2026",
    tldrLabel: "Zusammenfassung",
    tldrBody: "Rekonstruktion — der Schritt, der tokenisierten LLM-Output wieder auf Originalwerte abbildet — ist technisch überschaubar, aber architektonisch entscheidend. Die meisten Enterprise-KI-Piloten investieren zu wenig darin und scheitern im Produktivbetrieb am selben Punkt: Das Modell funktioniert, die Integration funktioniert — doch der Output verlangt manuelle Nacharbeit, und der erhoffte Produktivitätsgewinn verpufft. Echte Rekonstruktion ist mehr als ein einfaches Zurücksetzen: Ein LLM erzeugt neuen Text, der Token in unbekannten Kontexten referenziert, manchmal mit Formatierungsabweichungen, manchmal halluziniert, manchmal token-weise gestreamt. Die Rekonstruktion muss innerhalb der Unternehmensinfrastruktur ausgeführt werden, gemeinsam mit dem Mapping — sobald sie auf externer Middleware läuft, bricht der durch die Tokenisierung erzielte Schutz zusammen. Drei Integrationsmuster (Inline, Streaming, Event-Driven) decken die meisten Workflows ab. Halluzinierte Token erfordern eine explizite, konfigurierbare Strategie: markieren, verwerfen oder neu anfordern. Jede Operation muss auditiert und in separaten Logs unter denselben Zugriffskontrollen wie das Mapping gespeichert werden. Fünf Betriebsfehler wiederholen sich: manuelle Bereinigung, falscher Ausführungsort, statische Ersetzung, fehlende Protokollierung, Anbieterabhängigkeit. Wenn die Rekonstruktion stimmt, wird sie zur unsichtbaren Infrastruktur. Wenn nicht, scheitert das gesamte Architekturversprechen still auf der letzten Meile.",
    bodyHtml: `<h2>1. Warum Rekonstruktion mehr ist als ein simples Zurücksetzen</h2>
<p>Wenn Enterprise-KI-Teams einen Workflow entwerfen, der tokenisierte Dokumente an ein externes LLM übergibt, liegt der Fokus fast immer auf der Vorbereitungsphase: Erkennung, Transformation, was die Grenze überquert. Die Antwortseite erhält deutlich weniger Aufmerksamkeit. Die implizite Annahme: Sobald das Modell seinen Output liefert, genügt es, die Token zurückzutauschen — und das Ergebnis ist fertig.</p>
<p>Diese Annahme ist grob korrekt — und operativ falsch. Die Rekonstruktion ist technisch einfach: Token im Mapping nachschlagen, zurücksetzen. Architektonisch ist sie jedoch entscheidend. <strong>Hier entscheidet sich, ob ein Pilot in der Demo überzeugt oder ob ein Workflow produktiv betrieben werden kann.</strong> Teams, die die Rekonstruktion als Nebensache behandeln, stoßen regelmäßig am selben Punkt an eine Wand: Das Modell läuft, die Integration läuft — aber der Output ist ohne manuelle Nacharbeit nicht nutzbar, und der Produktivitätsgewinn, der das Vorhaben rechtfertigte, löst sich in Luft auf.</p>
<p>Im einfachsten Fall ist die Rekonstruktion symmetrisch zur Tokenisierung: Im Input wurde <em>Marlene Schmidt</em> durch <code>CUST-7F2A</code> ersetzt; der Output referenziert <code>CUST-7F2A</code>; die Rekonstruktion tauscht <code>CUST-7F2A</code> zurück in <em>Marlene Schmidt</em>, der Workflow läuft weiter.</p>
<p>Wären alle Workflows so gestaltet, wäre Rekonstruktion eine Nebensache. In der Praxis ist das aus mehreren Gründen nicht der Fall.</p>

<ul>
  <li><strong>Die Modellantwort ist generativ, nicht nur substitutiv.</strong> Ein LLM kopiert keine Token vom Input in den Output — es erzeugt neuen Text, der über die Token schlussfolgert. Der Output referenziert Token in neuen Sätzen, neuen Kombinationen, manchmal paraphrasiert, manchmal zusammengefasst, manchmal über mehrere Eingabe-Token hinweg synthetisiert. Die Rekonstruktionsschicht muss Token in Kontexten verarbeiten, die der Input nie enthielt.</li>
  <li><strong>Der Output kann Token enthalten, die im Input nicht vorkamen.</strong> Eine Zusammenfassung über fünf Tickets kann einen Satz erzeugen wie: <em>„Drei der betroffenen Kunden</em> (<code>CUST-7F2A</code>, <code>CUST-3B91</code>, <code>CUST-9D2C</code>) <em>verwenden dieselbe Firmware-Version."</em> Diese Konstruktion ist neu. Die Rekonstruktionsschicht muss jeden Token finden, nachschlagen und in einen vom Modell formulierten Satz einsetzen.</li>
  <li><strong>Der Output enthält manchmal <em>fehlerhafte</em> Token-Referenzen.</strong> Modelle verlieren insbesondere bei langen Ausgaben gelegentlich das Formatierungsmuster. Ein Token, der als <code>CUST-7F2A</code> eingegeben wurde, kann als <code>CUST 7F2A</code>, <code>CUST7F2A</code> oder schlicht als <em>„der Kunde mit der Kennung 7F2A"</em> zurückkommen. Eine Rekonstruktionsschicht, die nur exaktes String-Matching betreibt, versagt in diesen Fällen — der Nutzer erhält Output mit sichtbaren Token-Fragmenten, die hätten aufgelöst werden sollen.</li>
  <li><strong>Der Output kann Kommentare oder Einschränkungen des Modells enthalten.</strong> <em>„Basierend auf den Informationen zu Kunde </em><code>CUST-7F2A</code><em> ist die wahrscheinlichste Ursache ..."</em> Die Rekonstruktion muss Token auch in Nebensätzen, die das Modell eigenständig formuliert hat, mit derselben Genauigkeit verarbeiten wie Token aus direkten Extraktionen.</li>
</ul>

<p>Was wie ein simples Zurücksetzen wirkt, ist in Wirklichkeit ein kleines, aber reales Textverarbeitungsproblem: <strong>robuste Token-Erkennung über diverse Ausgabeformen hinweg — mit einer Ersetzung, die die grammatikalische Kohärenz der Modellantwort wahrt.</strong></p>

<h2>2. Wo die Rekonstruktion ausgeführt werden muss</h2>
<p>Der Ausführungsort der Rekonstruktion ist nicht verhandelbar: <strong>Sie muss innerhalb der Unternehmensinfrastruktur stattfinden — bevor der Output den Nutzer oder ein nachgelagertes System erreicht.</strong></p>
<p>Der Grund ist derselbe, aus dem das Mapping in der Unternehmensinfrastruktur verbleiben muss: Rekonstruktion erfordert das Lesen des Mappings. Findet die Rekonstruktion außerhalb des Unternehmens statt — auf der Infrastruktur eines Anbieters, in einer Drittlandregion, auf einem System, das das Unternehmen nicht vollständig kontrolliert — muss das Mapping an diesem Ort verfügbar gemacht werden. Damit bricht der Schutz zusammen, den die Tokenisierung ursprünglich gewährleistet hat.</p>
<p>Dies ist <strong>der häufigste Architekturfehler beim Einsatz dieses Musters</strong>: Teams konfigurieren die Tokenisierung innerhalb der Unternehmensgrenze, senden die Daten an das externe LLM — und führen die Rekonstruktion dann in einem Cloud-Dienst oder einer Middleware aus, die zufällig zur Hand ist. Der Komfort ist real. Der Schutz ist dahin. Das Mapping, das ausschließlich unter Unternehmenskontrolle bleiben sollte, wurde an einen Ort repliziert, an dem die ursprünglichen Zusagen nicht mehr gelten.</p>
<p>Die korrekte Architektur sieht vor, dass die Rekonstruktion gemeinsam mit den Quellsystemen und dem Mapping platziert ist — On-Premise, in der eigenen VPC des Unternehmens oder in der EU-regionalen Infrastruktur, in der der Workflow läuft. <strong>Der tokenisierte LLM-Output kehrt zurück, durchläuft die Rekonstruktionsschicht innerhalb der Unternehmensgrenze und verlässt diese als verwertbarer Geschäftsinhalt.</strong> Die externe Datenreise endet mit der Rekonstruktion.</p>
<p>Bei Workflows, deren restliche Architektur die Grenzen penibel einhält — Kapselung intern, Mapping intern, Audit-Logs intern — und die Rekonstruktion das einzige Element ist, das nach außen gewandert ist, werden alle übrigen Architekturversprechen auf das Schutzniveau reduziert, das der externe Rekonstruktionsort bieten kann.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" role="img" aria-labelledby="reconstruction-location-title reconstruction-location-desc">
      <title id="reconstruction-location-title">Wo die Rekonstruktion ausgeführt werden muss</title>
      <desc id="reconstruction-location-desc">Zwei Architekturen im Vergleich. Links läuft die Rekonstruktion auf externer Middleware, was eine Replikation des Mappings außerhalb des Unternehmens erzwingt — der Schutz bricht zusammen. Rechts läuft die Rekonstruktion innerhalb der Unternehmensinfrastruktur, zusammen mit dem Mapping — der Schutz bleibt erhalten.</desc>

      <defs>
        <marker id="arrow-coral-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-primary-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
      </defs>

      
      <g>
        <rect x="20" y="20" width="440" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
        <text x="240" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">✗ Rekonstruktion außerhalb des Unternehmens</text>

        <rect x="20" y="70" width="200" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">UNTERNEHMEN</text>

        <rect x="40" y="108" width="160" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="120" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Tokenisierung</text>
        <text x="120" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">intern ✓</text>

        <rect x="40" y="168" width="160" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="120" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Mapping</text>
        <text x="120" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">intern gespeichert ✓</text>

        <line x1="200" y1="190" x2="290" y2="262" stroke="#c73e3a" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-coral-rc)"/>
        <text x="200" y="248" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c73e3a">Mapping repliziert</text>

        <rect x="260" y="240" width="180" height="100" rx="10" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
        <text x="280" y="262" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#c73e3a" letter-spacing="1.2">ANBIETER / MIDDLEWARE</text>
        <rect x="280" y="276" width="140" height="44" rx="6" fill="#ffffff" stroke="#c73e3a" stroke-width="1"/>
        <text x="350" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Rekonstruktion</text>
        <text x="350" y="311" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#c73e3a">extern ✗</text>

        <rect x="20" y="370" width="440" height="50" rx="6" fill="#fce9e8" stroke="none"/>
        <text x="240" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">Der Schutz sinkt auf das Niveau, das der externe Standort</text>
        <text x="240" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">garantieren kann — in der Regel weniger als das ursprüngliche Versprechen.</text>
      </g>

      
      <g>
        <rect x="500" y="20" width="440" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="720" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">✓ Rekonstruktion innerhalb des Unternehmens</text>

        <rect x="500" y="70" width="320" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="520" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">UNTERNEHMENSINFRASTRUKTUR</text>

        <rect x="520" y="108" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="660" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Tokenisierung</text>
        <text x="660" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">intern ✓</text>

        <rect x="520" y="168" width="280" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="660" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Mapping</text>
        <text x="660" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">intern gespeichert ✓</text>

        <rect x="520" y="228" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="660" y="247" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#5b4fe9">Rekonstruktion</text>
        <text x="660" y="263" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9">gemeinsam mit Mapping ✓</text>

        <rect x="520" y="288" width="280" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="660" y="307" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Audit-Log</text>
        <text x="660" y="323" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">separate Zugriffskontrollen ✓</text>

        <rect x="848" y="168" width="100" height="84" rx="8" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="898" y="190" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNES LLM</text>
        <text x="898" y="214" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">sieht nur</text>
        <text x="898" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Token</text>

        <line x1="800" y1="195" x2="846" y2="195" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>
        <line x1="846" y1="225" x2="800" y2="240" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>

        <rect x="500" y="370" width="440" height="50" rx="6" fill="#eeebfe" stroke="none"/>
        <text x="720" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">Das Mapping verlässt nie die Unternehmensgrenze. Die externe</text>
        <text x="720" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">Datenreise endet mit der Rekonstruktion.</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Der häufigste Architekturfehler — die Rekonstruktion aus Bequemlichkeit auf externer Middleware auszuführen — repliziert das Mapping außerhalb des Unternehmens und hebt den Schutz der Tokenisierung auf.</strong></figcaption>
</figure>


<h2>3. Integration der Rekonstruktion in den Workflow</h2>
<p>Rekonstruktion ist kein eigenständiger Schritt, den Nutzer manuell auslösen. Sie ist Infrastruktur, die an jedem Punkt integriert sein muss, an dem KI-Output ausgeliefert wird. Drei Integrationsmuster decken die meisten Enterprise-Deployments ab.</p>

<h3>3.1 Inline-Rekonstruktion im Antwortpfad</h3>
<p>Die KI-Integrationsschicht — die Middleware zwischen Workflow und LLM-Endpunkt — führt die Rekonstruktion durch, bevor sie die Antwort an das aufrufende System zurückgibt. Das aufrufende System sieht niemals Token; es erhält den fertigen, verwertbaren Output. <strong>Dies ist das sauberste Muster und eignet sich für synchrone Anfrage-Antwort-Workflows wie Vertragsüberprüfungen, Zusammenfassungen und Klassifizierungen.</strong></p>

<h3>3.2 Streaming-Rekonstruktion</h3>
<p>Für LLM-Antworten, die token-weise gestreamt werden (im NLP-Sinne, nicht im datenschutzrechtlichen Sinne — die Begriffsüberschneidung ist unglücklich), muss die Rekonstruktion auf dem Stream arbeiten: Datenschutz-Token werden erkannt, sobald sie erscheinen, und in Echtzeit ersetzt. <strong>Dies ist anspruchsvoller als Batch-Rekonstruktion, da ein Datenschutz-Token zu jedem Zeitpunkt nur teilweise gestreamt sein kann</strong> und die Rekonstruktionsschicht ausreichend puffern muss, um ihn zu erkennen. Workflows mit Streaming-UIs — Chat-Interfaces, Live-Zusammenfassungen — benötigen dieses Muster; Workflows, die auf die vollständige Antwort warten, nicht.</p>

<h3>3.3 Event-Driven-Rekonstruktion</h3>
<p>Bei Workflows, in denen der KI-Output nachgelagerte Aktionen auslöst — ein Ticket im Betriebssystem anlegen, einen Bericht ins DMS schreiben, einen Datensatz im CRM aktualisieren — muss die Rekonstruktion an der Grenze zwischen KI-Integration und dem nachgelagerten System stattfinden. <strong>Der tokenisierte Output kann in der Integrationsschicht für Routing, Klassifizierung oder Triage verarbeitet werden; die Rekonstruktion erfolgt unmittelbar bevor die Daten in das System geschrieben werden, das der Nutzer sieht.</strong></p>
<p>Die Architektur muss klar definieren, welches Muster auf welchen Workflow anzuwenden ist. Eine Fehlzuordnung — etwa Streaming-Rekonstruktion für einen Event-Driven-Workflow oder Inline-Rekonstruktion für einen Streaming-Workflow — erzeugt nutzerseitige Defekte, die wie KI-Qualitätsprobleme wirken, in Wirklichkeit aber Integrationsfehler sind.</p>

<h2>4. Wenn das Modell nicht existierende Token erzeugt</h2>
<p>Ein Fehlerfall, dem besondere Aufmerksamkeit gebührt: <strong>Das Modell halluziniert gelegentlich Token.</strong> Es erzeugt eine Zeichenkette, die dem Token-Format des Systems ähnelt, aber zu keinem Eintrag im Mapping passt.</p>
<p>Dies geschieht aus vorhersehbaren Gründen. Das Modell hat im Input <code>CUST-7F2A</code> und <code>CUST-3B91</code> gesehen und erzeugt im Output <code>CUST-5D44</code>, indem es das Muster extrapoliert. Oder das Modell fasst zusammen und erfindet einen token-förmigen Platzhalter für eine erschlossene Entität. Seltener übernimmt das Modell ein Token-Format aus seinen Trainingsdaten, das zufällig mit dem Unternehmensformat kollidiert.</p>
<p>Die Rekonstruktionsschicht <strong>kann einen halluzinierten Token nicht stillschweigend ersetzen</strong> — es gibt nichts, womit er ersetzt werden könnte. Sie <strong>kann ihn auch nicht im Output belassen</strong>, da der Nutzer ein Fragment sieht, das wie ein Systembezeichner wirkt. Es gibt drei sinnvolle Reaktionen.</p>

<ol>
  <li><strong>Den halluzinierten Token im Output markieren und dem Nutzer als explizite Lücke anzeigen</strong> — etwa: <em>„[Verweis auf eine Entität, die das Modell erzeugt hat, die das System jedoch nicht auflösen kann.]"</em> Dies bewahrt die Transparenz auf Kosten der Output-Sauberkeit.</li>
  <li><strong>Den halluzinierten Verweis verwerfen und den umgebenden Satz neu formulieren.</strong> Dies erzeugt saubereren Output, erfordert jedoch nicht-triviale Textmanipulation durch die Rekonstruktionsschicht und kann verschleiern, dass das Modell etwas produziert hat, das nicht im Input verankert ist.</li>
  <li><strong>Die Antwort ablehnen und das Modell mit einer Systemanweisung neu anfragen, die es auf die im Input enthaltenen Token beschränkt.</strong> Dies liefert die höchste Ausgabequalität, erhöht jedoch Latenz und Kosten.</li>
</ol>

<p>Verschiedene Workflows erfordern verschiedene Reaktionen. Eine interne Zusammenfassung kann die erste Option bevorzugen (markieren und anzeigen). Ein Dokument für einen Kunden bevorzugt möglicherweise die dritte (neu anfragen). <strong>Diese Entscheidung sollte auf Workflow-Ebene konfigurierbar sein — nicht fest in die Rekonstruktionsschicht einprogrammiert.</strong></p>

<h2>5. Auditierbarkeit und Rückverfolgbarkeit</h2>
<p>Die Rekonstruktion ist der Moment, in dem die ursprünglichen sensiblen Werte wieder in den Workflow eintreten. Aus Audit-Perspektive ist dies <strong>einer der kritischsten Punkte der Architektur</strong> — hier werden die Zugriffskontrollen auf die Originaldaten wirksam.</p>
<p>Eine sorgfältig konzipierte Rekonstruktionsschicht protokolliert jeden Vorgang: Welcher Token wurde nachgeschlagen, wann, für welchen Workflow, durch welche Integration. Das Log muss die Originalwerte nicht enthalten — das würde den Zweck der Zugriffskontrollen untergraben — aber es muss ausreichend Metadaten liefern, um die Frage zu beantworten: <em>„Wer hat die Rekonstruktion welches Tokens ausgelöst, und wohin ist das Ergebnis geflossen?"</em></p>
<p>Dies ist aus zwei operativen Gründen relevant. Erstens macht es die Architektur auditierbar: Eine interne Überprüfung des Workflows kann sicherstellen, dass die Rekonstruktion nur für berechtigte Workflows erfolgt und die Integration wie vorgesehen funktioniert. Zweitens ermöglicht es Incident Response: <strong>Verhält sich eine Rekonstruktionsintegration fehlerhaft, zeigt das Log, was geschehen ist und was offengelegt wurde.</strong></p>
<p>Das Audit ist auch im Fehlerfall wichtig, wenn die Rekonstruktion Output an ein nachgelagertes System liefert, das keine Originalwerte erhalten sollte. Schreibt eine Rekonstruktionsintegration versehentlich verwertbaren Output in ein Logging-System, das keine Kundennamen sehen darf, zeigt der Audit-Trail dem Team, was offengelegt wurde und wem. Ohne das Log tappt das Team im Dunkeln.</p>
<p>Rekonstruktions-Logs sollten getrennt von Workflow-Logs aufbewahrt werden, mit eigenen Zugriffskontrollen und unter denselben Grenzbedingungen wie das Mapping selbst. <strong>Sie sind faktisch der Audit-Trail des sensibelsten Vorgangs in der Architektur.</strong></p>

<h2>6. Die häufigsten Betriebsfehler</h2>
<p>In der Praxis zeigt sich bei Deployments dieses Musters ein überschaubares Fehlermuster, das sich wiederholt. Es lohnt sich, diese Fehler beim Namen zu nennen.</p>

<ul>
  <li><strong>Rekonstruktion als manuellen Bereinigungsschritt einbauen.</strong> Der häufigste Fehler. Das Team bringt die Tokenisierung zum Laufen, sieht den tokenisierten KI-Output — und fügt dem Nutzer-Workflow einen manuellen Schritt hinzu: <em>„Jetzt Token suchen und ersetzen."</em> Nutzer überspringen diesen Schritt. Oder führen ihn inkonsistent aus. Oder kopieren tokenisierten Output in ein System, das ihn nicht sehen sollte, und die Bereinigung findet nie statt. <strong>Rekonstruktion muss Infrastruktur sein: automatisch und unsichtbar.</strong> Ist ein menschlicher Eingriff erforderlich, wird sie auf schwer erkennbare Weise sporadisch versagen.</li>
  <li><strong>Rekonstruktion am falschen Ort ausführen.</strong> Wie beschrieben ist der Komfort externer Ausführung real — ebenso der Schutzverlust. Die Architektur verspricht, dass Originalwerte in der Unternehmensinfrastruktur verbleiben; die Rekonstruktion muss dieses Versprechen einlösen.</li>
  <li><strong>Rekonstruktion als statische Ersetzung behandeln.</strong> Echte Rekonstruktion muss fehlerhafte Token, halluzinierte Token, Token in unerwarteten Kontexten und Streaming-Antworten verarbeiten. Eine naive Implementierung mit exaktem String-Matching funktioniert in der Demo — und versagt im Produktivbetrieb, wo der tatsächliche Modell-Output unordentlicher ist als Demo-Fälle.</li>
  <li><strong>Rekonstruktion nicht protokollieren.</strong> Rekonstruktion ohne Audit-Trail ist nicht verteidigbar. Beim ersten Mal, dass jemand fragt <em>„Hat die KI jemals diesen Kundennamen gesehen, und wohin ist das Ergebnis geflossen?"</em>, kann das Team ohne Rekonstruktions-Logs nicht antworten.</li>
  <li><strong>Rekonstruktion eng an einen bestimmten LLM-Anbieter koppeln.</strong> Rekonstruktionslogik, die das Antwortformat von ChatGPT voraussetzt, bricht, wenn der Workflow auf Claude oder Gemini wechselt — obwohl die zugrundeliegende Tokenisierung unverändert bleibt. <strong>Die Rekonstruktionsschicht sollte anbieterunabhängig sein und die Modellantwort als zu verarbeitenden Text behandeln, nicht als bekannte Struktur.</strong></li>
</ul>

<h2>7. Merkmale einer guten Rekonstruktion</h2>
<p>Eine Rekonstruktionsschicht, die im Produktivbetrieb funktioniert, weist ein überschaubares Set an Eigenschaften auf.</p>

<ul>
  <li>Läuft innerhalb der Unternehmensinfrastruktur, gemeinsam mit dem Mapping.</li>
  <li>Wird automatisch an der Integrationsgrenze aufgerufen — nie als manueller Schritt.</li>
  <li>Verarbeitet Streaming-, Batch- und Event-Driven-Workflows über unterschiedliche Aufrufmuster, aber einen gemeinsamen Kern.</li>
  <li>Erkennt Token robust über die Variationen, die echter Modell-Output erzeugt — Formatierungsabweichungen, Teilreferenzen, Paraphrasen.</li>
  <li>Unterscheidet zwischen legitimen Token und halluzinierten token-förmigen Zeichenketten und behandelt beide nach einer konfigurierbaren Strategie.</li>
  <li>Protokolliert jeden Vorgang in einem separaten Audit-Trail unter ausschließlicher Unternehmenskontrolle.</li>
  <li>Anbieterunabhängig — der Workflow kann LLM-Endpunkte wechseln, ohne die Rekonstruktionsschicht neu schreiben zu müssen.</li>
</ul>

<p>Sind diese Eigenschaften erfüllt, <strong>wird die Rekonstruktion zur unsichtbaren Infrastruktur.</strong> Der Nutzer reicht ein Dokument ein, der Workflow läuft, das Ergebnis kommt mit echten Werten in echter Struktur zurück — und der Nutzer sieht nie einen Token. Das Architekturversprechen — dass sensible Daten innerhalb der Unternehmensgrenze verblieben, während die KI nützliche Arbeit leistete — gilt für beide Hälften des Workflows.</p>
<p>Sind diese Eigenschaften nicht erfüllt, ist die Rekonstruktion der Punkt, an dem der Workflow bricht. Die Tokenisierung kann perfekt sein, das Modell hervorragend, die Grenzen penibel eingehalten — und der Nutzer erhält trotzdem Output, den er nicht verwenden kann, oder sensible Daten erscheinen versehentlich in einem nachgelagerten System, das sie nicht erhalten sollte. <strong>Die letzte Meile ist der Punkt, an dem die Architektur ihr Versprechen einlöst — oder still versagt.</strong></p>

<h2>8. Einordnung in das Gesamtmuster</h2>
<p>Rekonstruktion ist eine der vier Phasen des übergeordneten Musters — Erkennung, Transformation (Tokenisierung), externe Verarbeitung, Rekonstruktion —, das es externen LLMs ermöglicht, mit Daten zu arbeiten, die das Unternehmen nicht im Rohformat verlassen dürfen. <strong>Die vier Phasen bilden ein Ganzes: Die Stärke der Architektur entspricht der schwächsten der vier Phasen.</strong></p>
<p>Eine Übersicht über die Gesamtarchitektur und die Designentscheidungen der anderen drei Phasen bietet der Pillar-Beitrag zum Betrieb externer LLMs mit sensiblen Unternehmensdaten. Warum entfernungsbasierte Ansätze — Maskierung, Schwärzung, DSGVO-Guardrails — bei operativen Daten versagen und warum dieses Muster überhaupt benötigt wird, erläutert der Artikel zu KI-Workflows, die an Tabellen, Tickets und operativen Dokumenten scheitern. Die Tokenisierungsmuster auf der Eingabeseite, die die in diesem Artikel beschriebene Rekonstruktion umkehrt, behandelt der Artikel zur Tokenisierung für LLM-Eingaben.</p>

<div class="takeaways">
  <div class="takeaways__label">Wesentliche Erkenntnisse</div>
  <ul>
    <li>Rekonstruktion ist technisch überschaubar, aber architektonisch entscheidend — hier trennen sich Piloten, die in der Demo überzeugen, von Workflows, die produktiv betrieben werden.</li>
    <li>Kein simples Zurücksetzen: LLM-Output ist generativ, enthält neue Token-Kombinationen, leidet unter Formatierungsabweichungen und halluziniert gelegentlich token-förmige Zeichenketten.</li>
    <li>Der Ausführungsort ist nicht verhandelbar: Rekonstruktion muss innerhalb der Unternehmensinfrastruktur, gemeinsam mit dem Mapping, stattfinden. Externe Rekonstruktion hebt den Schutz auf.</li>
    <li>Drei Integrationsmuster decken die meisten Workflows ab: Inline, Streaming und Event-Driven. Falsche Zuordnung erzeugt Defekte, die wie Modellprobleme wirken.</li>
    <li>Halluzinierte Token erfordern eine explizite, konfigurierbare Strategie: markieren und anzeigen, verwerfen und neu formulieren oder ablehnen und neu anfragen.</li>
    <li>Auditierung ist unverzichtbar: Die Rekonstruktion ist der Moment, in dem Originalwerte wieder in den Workflow eintreten — Logs sind das Mittel, mit dem das Team diesen Moment dokumentiert und im Ernstfall untersucht.</li>
    <li>Fünf wiederkehrende Fehler: manuelle Bereinigung, falscher Ausführungsort, statische Ersetzung, fehlende Protokollierung, Anbieterabhängigkeit.</li>
    <li>Gute Rekonstruktion ist unsichtbare Infrastruktur. Schlechte Rekonstruktion ist der Punkt, an dem die Architektur auf der letzten Meile still versagt.</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Warum ist Rekonstruktion mehr als ein simples Zurücksetzen?</h3>
<p>Ein LLM kopiert keine Token vom Input in den Output — es erzeugt neuen Text, der über sie schlussfolgert. Token erscheinen in Kontexten, die der Input nie enthielt, in Kombinationen, die das Modell erfunden hat, manchmal mit Formatierungsabweichungen (<code>CUST-7F2A</code> kehrt als <code>CUST 7F2A</code> oder <em>„der Kunde mit der Kennung 7F2A"</em> zurück). Ein naives Matching versagt in diesen Fällen und hinterlässt sichtbare Token-Fragmente im Output. Echte Rekonstruktion ist robuste Token-Erkennung über diverse generative Ausgabeformen — mit einer Ersetzung, die die grammatikalische Kohärenz wahrt.</p>

<h3>Wo muss die Rekonstruktion ausgeführt werden?</h3>
<p>Innerhalb der Unternehmensinfrastruktur, gemeinsam mit Mapping und Quellsystemen. Rekonstruktion erfordert das Lesen des Mappings; findet sie außerhalb des Unternehmens statt — auf Anbieterinfrastruktur, in einer Drittlandregion oder auf Middleware, die das Unternehmen nicht vollständig kontrolliert — muss das Mapping dort repliziert werden, was den durch die Tokenisierung erzielten Schutz aufhebt. Dies ist der häufigste Architekturfehler bei Deployments dieses Musters.</p>

<h3>Welche drei Integrationsmuster gibt es für die Rekonstruktion?</h3>
<p><strong>Inline-Rekonstruktion</strong> — die KI-Integrationsschicht führt die Rekonstruktion durch, bevor sie die Antwort zurückgibt. Geeignet für synchrone Anfrage-Antwort-Workflows wie Vertragsüberprüfungen. <strong>Streaming-Rekonstruktion</strong> — arbeitet auf token-weisen Streams, puffert ausreichend, um Datenschutz-Token beim Erscheinen zu erkennen. Erforderlich für Chat-Interfaces und Live-Zusammenfassungen. <strong>Event-Driven-Rekonstruktion</strong> — findet an der Grenze zwischen KI-Integration und einem nachgelagerten System — CRM, Ticketing-Plattform, Dokumentenablage — statt; die Rekonstruktion erfolgt unmittelbar vor dem Schreiben in das System, das der Nutzer sieht.</p>

<h3>Was sollte geschehen, wenn das Modell einen Token halluziniert?</h3>
<p>Drei sinnvolle Reaktionen — die Wahl sollte pro Workflow konfigurierbar sein. <em>Markieren</em>: den halluzinierten Token als explizite Lücke anzeigen — Transparenz auf Kosten der Sauberkeit. <em>Verwerfen</em>: den halluzinierten Verweis entfernen und den Satz neu formulieren — saubererer Output, verschleiert jedoch, dass das Modell etwas Unverankertes produziert hat. <em>Ablehnen</em>: die Antwort ablehnen und das Modell mit Token-Beschränkung neu anfragen — höchste Qualität, erhöht Latenz und Kosten. Eine interne Zusammenfassung bevorzugt möglicherweise die Markierung; ein Kundendokument die Neuanfrage.</p>

<h3>Was muss ein Rekonstruktions-Audit-Log enthalten?</h3>
<p>Ausreichend Metadaten, um die Frage zu beantworten: <em>„Wer hat die Rekonstruktion welches Tokens ausgelöst, wann, für welchen Workflow, und wohin ist das Ergebnis geflossen?"</em> Die Originalwerte selbst müssen nicht enthalten sein — das würde die Zugriffskontrollen untergraben — aber der Vorgang muss rückverfolgbar sein. Logs sollten getrennt von Workflow-Logs aufbewahrt werden, mit eigenen Zugriffskontrollen und denselben Grenzbedingungen wie das Mapping selbst. Sie sind faktisch der Audit-Trail des sensibelsten Vorgangs in der Architektur.</p>

<h3>Was sind die häufigsten Fehler bei der Rekonstruktion?</h3>
<p>Fünf wiederholen sich. <strong>Manuelle Bereinigung</strong> — Rekonstruktion als Schritt, den Nutzer ausführen müssen — sie werden ihn überspringen. <strong>Falscher Ort</strong> — Rekonstruktion in einer Vendor-Cloud, weil es bequem ist — der Schutz bricht zusammen. <strong>Statische Ersetzung</strong> — Rekonstruktion als exaktes String-Matching — versagt bei unordentlichem Produktiv-Output. <strong>Fehlende Protokollierung</strong> — das Team kann die Architektur nicht verteidigen und keinen Incident Response durchführen. <strong>Anbieterabhängigkeit</strong> — Rekonstruktionslogik an ein bestimmtes LLM-Format koppeln — bricht beim Anbieterwechsel, auch wenn die Tokenisierung unverändert bleibt.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/reconstructing-ai-output",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Reconstructing AI Output",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related1Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related2Title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    related2Href: "/resources/learn/tokenization-for-llm-inputs",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
}

export default function ReconstructingAiOutput({
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
  const _isNonEn = locale !== "en"
  const _backLabel = _isNonEn ? (T["backLabel"] || TRANSLATIONS.en["backLabel"] || backLabel) : (backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"])
  const _backHref = _isNonEn ? (T["backHref"] || TRANSLATIONS.en["backHref"] || backHref) : (backHref || T["backHref"] || TRANSLATIONS.en["backHref"])
  const _title = _isNonEn ? (T["title"] || TRANSLATIONS.en["title"] || title) : (title || T["title"] || TRANSLATIONS.en["title"])
  const _lead = _isNonEn ? (T["lead"] || TRANSLATIONS.en["lead"] || lead) : (lead || T["lead"] || TRANSLATIONS.en["lead"])
  const _category = _isNonEn ? (T["category"] || TRANSLATIONS.en["category"] || category) : (category || T["category"] || TRANSLATIONS.en["category"])
  const _readTime = _isNonEn ? (T["readTime"] || TRANSLATIONS.en["readTime"] || readTime) : (readTime || T["readTime"] || TRANSLATIONS.en["readTime"])
  const _dateUpdated = _isNonEn ? (T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"] || dateUpdated) : (dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"])
  const _tldrLabel = _isNonEn ? (T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"] || tldrLabel) : (tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"])
  const _tldrBody = _isNonEn ? (T["tldrBody"] || TRANSLATIONS.en["tldrBody"] || tldrBody) : (tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"])
  const _bodyHtml = _isNonEn ? (T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"] || bodyHtml) : (bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"])
  const _canonicalUrl = _isNonEn ? (T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"] || canonicalUrl) : (canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"])
  const _datePublished = _isNonEn ? (T["datePublished"] || TRANSLATIONS.en["datePublished"] || datePublished) : (datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"])
  const _dateModified = _isNonEn ? (T["dateModified"] || TRANSLATIONS.en["dateModified"] || dateModified) : (dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"])
  const _inLanguage = _isNonEn ? (T["inLanguage"] || TRANSLATIONS.en["inLanguage"] || inLanguage) : (inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"])
  const _breadcrumbLabel = _isNonEn ? (T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"] || breadcrumbLabel) : (breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"])
  const _faqJsonLd = _isNonEn ? (T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"] || faqJsonLd) : (faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"])
  const _relatedSectionLabel = _isNonEn ? (T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"] || relatedSectionLabel) : (relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"])
  const _related1Title = _isNonEn ? (T["related1Title"] || TRANSLATIONS.en["related1Title"] || related1Title) : (related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"])
  const _related1Href = _isNonEn ? (T["related1Href"] || TRANSLATIONS.en["related1Href"] || related1Href) : (related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"])
  const _related2Title = _isNonEn ? (T["related2Title"] || TRANSLATIONS.en["related2Title"] || related2Title) : (related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"])
  const _related2Href = _isNonEn ? (T["related2Href"] || TRANSLATIONS.en["related2Href"] || related2Href) : (related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"])
  const _related3Title = _isNonEn ? (T["related3Title"] || TRANSLATIONS.en["related3Title"] || related3Title) : (related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"])
  const _related3Href = _isNonEn ? (T["related3Href"] || TRANSLATIONS.en["related3Href"] || related3Href) : (related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"])
  const _related4Title = _isNonEn ? (T["related4Title"] || TRANSLATIONS.en["related4Title"] || related4Title) : (related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"])
  const _related4Href = _isNonEn ? (T["related4Href"] || TRANSLATIONS.en["related4Href"] || related4Href) : (related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"])

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

addPropertyControls(ReconstructingAiOutput, {
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
