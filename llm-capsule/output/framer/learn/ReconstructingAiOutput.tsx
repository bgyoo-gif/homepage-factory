// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — LearnArticle logic inlined for Framer cross-folder compatibility.

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

export default function ReconstructingAiOutput({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
  lead = "The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.",
  category = "AI Architecture",
  readTime = "~9 min read",
  dateUpdated = "Updated May 2026",
  tldrLabel = "TL;DR",
  tldrBody = "Reconstruction — the step that maps tokenised LLM output back to original values — is technically straightforward and architecturally critical. Most enterprise AI pilots underinvest in it and stall at production for the same reason: the model works, the integration works, but the output requires manual cleanup and the productivity gain evaporates. Real reconstruction is more than a swap-back: the LLM generates new text that references tokens in novel contexts, sometimes with formatting drift, sometimes hallucinated, sometimes streamed token-by-token. It has to run inside the enterprise environment, colocated with the mapping — running it on convenient external middleware collapses the protection the tokenisation provided. Three integration patterns (inline, streaming, event-driven) cover most workflows. Hallucinated tokens need an explicit policy (flag, drop, or re-prompt). Every operation has to be audited, in logs held separately under the mapping's own access controls. Five operational mistakes recur — manual cleanup, wrong location, static substitution, no logging, provider lock-in. When reconstruction is right, it becomes invisible infrastructure. When it's wrong, the entire architecture's promise quietly fails on the last mile.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/reconstructing-ai-output",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "en-GB",
  breadcrumbLabel = "Reconstructing AI Output",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Running External LLMs on Data Your Company Can't Send Externally",
  related1Href = "/resources/learn/external-llm-on-sensitive-enterprise-data",
  related2Title = "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
  related2Href = "/resources/learn/tokenization-for-llm-inputs",
  related3Title = "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
  related3Href = "/resources/learn/why-ai-stalls-on-operational-data",
  related4Title = "",
  related4Href = "",
}: Props) {
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
}

addPropertyControls(ReconstructingAiOutput, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~9 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "Updated May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "Reconstruction — the step that maps tokenised LLM output back to original values — is technically straightforward and architecturally critical. Most enterprise AI pilots underinvest in it and stall at production for the same reason: the model works, the integration works, but the output requires manual cleanup and the productivity gain evaporates. Real reconstruction is more than a swap-back: the LLM generates new text that references tokens in novel contexts, sometimes with formatting drift, sometimes hallucinated, sometimes streamed token-by-token. It has to run inside the enterprise environment, colocated with the mapping — running it on convenient external middleware collapses the protection the tokenisation provided. Three integration patterns (inline, streaming, event-driven) cover most workflows. Hallucinated tokens need an explicit policy (flag, drop, or re-prompt). Every operation has to be audited, in logs held separately under the mapping's own access controls. Five operational mistakes recur — manual cleanup, wrong location, static substitution, no logging, provider lock-in. When reconstruction is right, it becomes invisible infrastructure. When it's wrong, the entire architecture's promise quietly fails on the last mile.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/reconstructing-ai-output" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "Reconstructing AI Output" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Running External LLMs on Data Your Company Can't Send Externally" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/external-llm-on-sensitive-enterprise-data" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/tokenization-for-llm-inputs" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/why-ai-stalls-on-operational-data" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
