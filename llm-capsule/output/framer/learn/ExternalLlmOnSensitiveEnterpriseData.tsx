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

const BODY_HTML = `<h2>1. The Quiet Contradiction at the Centre of Enterprise AI</h2>
<p>There is a quiet contradiction at the centre of most enterprise AI strategies in 2026.</p>
<p>The external large language models — ChatGPT, Claude, Gemini, and the others — produce measurably better output than anything most enterprises can run internally. They handle context windows that internal models struggle with. They get better every few months without the enterprise paying for retraining. They are, on most dimensions that matter to a business, the obvious choice.</p>
<p>And yet, in a striking number of regulated enterprises, those models cannot legally or contractually touch the data the business actually runs on. Customer records cannot be sent to a US-hosted endpoint. Operational logs are bound by sector-specific data location requirements. Documents contain identifiers that some contract somewhere says will never leave a defined boundary. <strong>The data the AI would be most useful on is the data the AI cannot be allowed to see.</strong></p>
<p>The result is a pattern that any CIO at a European bank, insurer, telecom, or hospital recognises. The pilots run on synthetic or anonymised samples. The benchmarks look good. The board is told AI is coming. Then production hits the data the pilot didn't touch, and the workflow stalls. Some teams give up. Some build internal LLMs that disappoint. Some quietly route data through approved channels they're not supposed to use — what people now call <em>shadow AI</em>.</p>
<p>This article walks through the three standard approaches that enterprise AI teams reach for first, where each one breaks, and a different approach — one that has appeared in production deployments across telecom, healthcare, finance, and defence — that changes the question entirely.</p>

<h2>2. Why This Problem Is Harder Than It Looks</h2>
<p>The instinct, when first encountering the problem, is to reach for one of the existing tools: a data masking library, a PII detection API, a private deployment of an open-source model. Each tool solves part of the problem, and each one fails at a different point in the workflow.</p>
<p>The reason is that enterprise data isn't structured the way the tools assume. A consumer privacy tool assumes the sensitive part of a record is a name, an email, a phone number — fields that can be detected and replaced. But an enterprise document is a service ticket with twelve cross-referenced fields, a free-text description containing customer phrases, an attached log fragment, and references to internal asset IDs. <strong>The sensitive information lives in the structure as much as in the fields.</strong> Drop the structure and the AI has nothing useful to work on.</p>
<p>The other reason is that enterprise data location requirements are often less about <em>what kind of data</em> and more about <em>where it goes</em>. A document may be perfectly legal to process internally and impossible to send to a third country — because of customer commitments, sector-specific data location rules, or the company's own data posture. The constraint is geographic and contractual, not just categorical.</p>
<p>This is the actual situation enterprise AI teams are trying to solve for: structured operational data that is useful to AI <em>precisely because of its detail</em>, bound by constraints that prevent it from leaving a defined environment, where the most capable models live on the other side of that boundary.</p>

<h2>3. The Three Standard Approaches — and Where Each One Breaks</h2>
<p>Most enterprise AI conversations end up at one of three patterns. Each is reasonable in isolation. None of them, on its own, gets to production on the workflows that matter.</p>

<h3>3.1 Pattern 1 — Send the Data, Accept the Risk</h3>
<p>The simplest pattern is to send the data to the external LLM and rely on the vendor's contractual commitments — Data Processing Agreements, standard transfer clauses, regional endpoints. This is what most public LLM use looks like in practice.</p>
<p>The pattern works for workflows where the data isn't sensitive in the first place — marketing copy, public documents, internal generic queries. It stops working the moment the workflow touches customer records, operational systems, or anything bound by contractual data location commitments. <strong>The vendor's promise is contractual, not architectural.</strong> For the workflows where it matters most, contractual is the level where enterprise legal review tends to draw a line.</p>

<h3>3.2 Pattern 2 — Mask and Redact Before Sending</h3>
<p>The next instinct is to keep the data internal-only at the point of sensitivity. Names, IDs, and identifying fields get masked or redacted before the document goes to the LLM. The model sees a sanitised version.</p>
<p>This works for documents where the sensitive part is cleanly separable — a contract where you mask the parties, a CV where you mask the name. It breaks on operational data for two reasons. The first is that masking destroys the structure the AI needs: a table where customer names have been replaced with <code>[REDACTED]</code> is no longer a table the AI can reason about. The second is that operational data is full of identifiers that simple masking doesn't see — ticket numbers, asset IDs, internal codes, network identifiers, free-text references — and any one of those can be sensitive depending on context.</p>
<p>The fundamental issue is that masking optimises for <em>what's removed</em> rather than <em>what remains usable</em>. For workflows where the AI needs to understand the relationships in the data, removal-based approaches break the workflow even when they succeed at hiding the sensitive parts.</p>

<h3>3.3 Pattern 3 — Run a Model Entirely On-Premise</h3>
<p>The third pattern is to give up on external LLMs and run an open-source model on internal infrastructure. The data never leaves. The contractual and data-location questions resolve themselves.</p>
<p>This works, but it carries costs that aren't always visible at the start. Internal models, even good ones, tend to lag the frontier external models by twelve to eighteen months on the dimensions enterprises actually care about — reasoning over complex documents, handling unfamiliar formats, working with long context. Operational cost is real: GPU infrastructure, model serving stack, evaluation pipeline, a team that knows how to maintain all of it. And there's the brittleness: every six months the external models leap forward, and the gap between what the internal model can do and what the business now expects gets uncomfortable.</p>
<p>For some workflows — especially those where data location requirements are absolute and the workflow is bounded enough that a smaller model suffices — this pattern is the right answer. For most others, it solves the data problem at the cost of the AI gains.</p>

<h3>3.4 What These Three Patterns Have in Common</h3>
<p>All three patterns share an assumption: the question is <em>whether</em> to send the data to the external LLM, and if not, <em>what to send instead</em>. They take the boundary as fixed and ask what fits through it.</p>
<p>A different approach asks a different question.</p>

<table>
  <thead>
    <tr>
      <th>Pattern</th>
      <th>Works when</th>
      <th>Breaks when</th>
      <th>Core trade-off</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Send the data, accept the risk</td>
      <td>Data isn't sensitive — marketing copy, public docs, generic queries</td>
      <td>Workflow touches customer records, operational systems, or contracted data</td>
      <td>Contractual protection, not architectural</td>
    </tr>
    <tr>
      <td>Mask and redact before sending</td>
      <td>Sensitive part is cleanly separable — contract parties, CV name</td>
      <td>Operational data where structure carries meaning; non-obvious identifiers</td>
      <td>Optimises for removal, not for what remains usable</td>
    </tr>
    <tr>
      <td>Run a model entirely on-premise</td>
      <td>Workflow bounded enough for a smaller model; data location is absolute</td>
      <td>Workflow needs frontier reasoning, long context, unfamiliar formats</td>
      <td>Solves data problem at the cost of AI gains</td>
    </tr>
  </tbody>
</table>

<h2>4. A Different Approach — Change What Crosses the Boundary</h2>
<p>This approach starts from a different premise. Instead of asking <em>what can we send to the external LLM</em>, it asks <em>what would the external LLM need to be useful, and can we send that instead of the original data</em>.</p>
<p>The answer, for a large class of enterprise workflows, turns out to be: the LLM needs the structure, the relationships, the question being asked, and the form of the answer expected. It does not need the literal customer name, the actual account number, the real asset identifier. <strong>It needs a placeholder that behaves the same way the real value would in the context of the task.</strong></p>
<p>If the original sensitive elements are replaced with structured tokens — placeholders that preserve format, type, and relationships, but that have no meaning outside the originating environment — then what crosses the boundary is no longer the original data. It's a transformation of the data that retains everything the AI needs and removes everything the boundary was meant to keep in.</p>
<p>The mapping between tokens and original values stays inside the environment. The AI processes the tokenised version and returns a tokenised response. Inside the environment, the tokens are mapped back to the original values, and the response becomes a business-ready output containing real customer names, real figures, real references.</p>
<p>This isn't masking, because the tokens preserve structure and format. It isn't synthetic data, because the workflow runs on real production data. It isn't on-premise deployment, because the heavy lifting still happens on the frontier external models. <strong>It's a transformation layer that sits between the enterprise environment and the external AI, and it changes what the external AI sees without changing what the enterprise environment knows.</strong></p>
<p>Different communities use different names for parts of this approach. In data-protection practice the substitution step is usually called <strong>tokenisation</strong> — replacing sensitive values with placeholders that can be mapped back. When tokenisation is combined with structure preservation, format-preserving stand-ins, and optional statistical protections, the resulting data-preparation layer is sometimes referred to as an <strong>encapsulation layer</strong> — a broader architecture that contains tokenisation as its core mechanism. The terminology varies; the architectural idea is consistent: the boundary doesn't move, and the AI capability doesn't shrink. What changes is the form of the data that crosses.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="boundary-diagram-title boundary-diagram-desc">
      <title id="boundary-diagram-title">What crosses the enterprise boundary</title>
      <desc id="boundary-diagram-desc">A diagram showing original data and the token-to-value mapping staying inside the enterprise environment, while only tokenised data and tokenised responses cross the boundary to the external LLM.</desc>

      <defs>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5a4"/>
        </marker>
      </defs>

      
      <rect x="20" y="40" width="540" height="340" rx="12" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="40" y="68" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

      
      <rect x="50" y="100" width="180" height="76" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f1130">Original Data</text>
      <text x="140" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">customer records,</text>
      <text x="140" y="166" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">tickets, logs, documents</text>

      
      <rect x="280" y="80" width="240" height="116" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="2"/>
      <text x="400" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#5b4fe9">Transformation Layer</text>
      <line x1="304" y1="124" x2="496" y2="124" stroke="#e5e7eb" stroke-width="1"/>
      <text x="400" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">1. Detect sensitive elements</text>
      <text x="400" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">2. Replace with structured tokens</text>
      <text x="400" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">3. Reconstruct from tokenised response</text>

      
      <rect x="280" y="230" width="240" height="76" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="400" y="258" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0b7f7e">Token ↔ Value Mapping</text>
      <text x="400" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">held exclusively by the enterprise</text>
      <text x="400" y="294" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">never leaves the boundary</text>

      
      <rect x="50" y="320" width="180" height="48" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="342" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f1130">Business-Ready Output</text>
      <text x="140" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">real names, real figures</text>

      
      
      <line x1="230" y1="125" x2="278" y2="125" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>
      
      <line x1="400" y1="198" x2="400" y2="228" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="395" y1="208" x2="395" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      <line x1="405" y1="208" x2="405" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      
      <path d="M 280 175 Q 240 250 230 343" fill="none" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>

      
      <line x1="580" y1="40" x2="580" y2="380" stroke="#ef5350" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="580" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">BOUNDARY</text>

      
      <rect x="640" y="140" width="280" height="140" rx="12" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
      <text x="660" y="168" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
      <text x="780" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#ffffff">ChatGPT · Claude · Gemini</text>
      <text x="780" y="234" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">sees only tokenised data</text>
      <text x="780" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">returns tokenised response</text>

      
      
      <line x1="520" y1="160" x2="638" y2="180" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="155" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised data</text>

      
      <line x1="638" y1="244" x2="520" y2="190" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised response</text>

      
      <g transform="translate(640, 320)">
        <rect x="0" y="0" width="280" height="56" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="12" y1="18" x2="32" y2="18" stroke="#ef5350" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="40" y="22" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">boundary the data cannot cross</text>
        <line x1="12" y1="38" x2="32" y2="38" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="40" y="42" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">mapping stays inside the enterprise</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 · <strong>The original data and the mapping never leave the enterprise. Only tokenised data and tokenised responses cross the boundary.</strong></figcaption>
</figure>


<div class="callout">
  <span class="callout__icon">●</span>
  <p class="callout__body"><strong>The architecture in one sentence.</strong> Original data and the token-to-value mapping stay inside the enterprise environment; only tokenised data and tokenised responses cross the boundary to the external LLM.</p>
</div>

<h2>5. How the Approach Works in Practice</h2>
<p>The architecture decomposes into four stages, each with independent design decisions.</p>

<h3>5.1 Detection</h3>
<p>Before anything is transformed, the system has to identify what counts as sensitive in this context. The honest version of detection is harder than it sounds: the sensitive elements in operational data aren't just names and IDs but the specific markers that <em>this</em> enterprise has decided matter — project codes, deal terms, internal asset references, sector-specific identifiers. <strong>Generic PII detection finds maybe forty percent of what matters.</strong> The other sixty percent has to be defined by the enterprise itself, in a way that can adapt as the business changes. Detection at production quality has to handle both structured fields and unstructured free text, with semantic awareness rather than pattern matching.</p>

<h3>5.2 Transformation</h3>
<p>Once sensitive elements are identified, they need to be replaced with placeholders that preserve the structural role the original played. A customer name in a free-text field becomes a token that the AI can recognise as a name and reference consistently. An account number stays an account number, just one without semantic meaning outside the system. The transformation has to handle tables, cross-references, hierarchies, and document structure without breaking any of them. <strong>Done well, the result reads like a coherent document with anonymous-but-realistic stand-ins. Done poorly, the result is full of <code>[REDACTED]</code> markers that no longer make sense.</strong></p>
<p>A subset of implementations layer additional protection on top of tokenisation — adding statistical noise, enforcing k-anonymity across batches, applying differential-privacy techniques to specific attributes. This reduces the residual risk that a sophisticated correlator could re-identify entities from the tokenised data alone. Whether you need this layer depends on the threat model: for most enterprise workflows, structure-preserving tokenisation alone is sufficient if the mapping is well-controlled. For workflows where data must remain in the EU region or other defined boundaries even at the architectural level, the additional protection is worth the complexity.</p>

<h3>5.3 External Processing</h3>
<p>The tokenised document goes to the external LLM through whatever API or integration the enterprise uses. From the LLM's perspective, this is just a request — it has no way to know the document has been transformed, and no need to. The LLM does its work — summarisation, extraction, classification, reasoning — and returns a tokenised response containing the same tokens that went in.</p>

<h3>5.4 Reconstruction</h3>
<p>Inside the enterprise environment, the tokenised response is mapped back to original values. The placeholders for customer names get the real customer names back. Placeholder account numbers become real account numbers. The structure and reasoning the AI produced is preserved; only the placeholders are replaced. The result is a business-ready output ready to flow into the originating workflow.</p>
<p>The reconstruction step is the part most teams underestimate. It is the part that determines whether the AI output is actually usable in production or whether someone has to manually rebuild it. <strong>A good reconstruction layer is invisible: the user submits a document, the AI returns an analysis, and the analysis comes back with real values.</strong> The transformation and reconstruction happen as infrastructure, not as user-facing steps.</p>

<h2>6. Which Workflows This Approach Actually Solves</h2>
<p>This approach isn't universal. It works for a specific class of workflows, and being honest about which class matters when deciding whether to adopt it.</p>
<p>The workflows that fit are ones where the AI's task is structural or analytical, and where the sensitive elements are identifiable in advance. Examples include:</p>
<ul>
  <li>Summarising contracts</li>
  <li>Drafting incident reports from operational logs</li>
  <li>Extracting risk clauses from due-diligence documents</li>
  <li>Generating clinical notes from structured patient records</li>
  <li>Analysing root causes from network alarm sequences</li>
  <li>Classifying claims from insurance filings</li>
</ul>
<p>In each, the AI is reasoning over structure and content, and the customer-identifying parts are means to an end, not the end itself.</p>
<p>The workflows that don't fit are ones where the AI must operate on the literal sensitive content as part of its task. Personalised content generation that addresses the customer directly. Verification workflows that must check against the actual identifier. Investigative searches that require the original strings.</p>
<p>A useful rule of thumb: if the AI's output could be expressed as <em>"do this analytical thing to this kind of data and tell me what you find,"</em> the approach usually works. If the AI's output requires <em>"act on this specific customer/case/identifier,"</em> it usually doesn't.</p>

<h2>7. What You Have to Decide Before Deploying</h2>
<p>Adopting this approach isn't a checkbox decision. It carries architectural choices that are easier to make at the start than to revisit later.</p>

<h3>7.1 Where the Transformation Runs</h3>
<p>The transformation layer has to run inside the enterprise environment — on-premise, in the company's own cloud VPC, on dedicated infrastructure. The constraint is that the transformation happens <em>before</em> the data reaches the external network, which means the layer is colocated with the source systems, not with the AI endpoint.</p>

<h3>7.2 Who Controls the Mapping</h3>
<p>The mapping between tokens and original values is the most sensitive component of the architecture. It is, in effect, the key that re-identifies the data. <strong>Standard practice — and good practice — is that the mapping is held exclusively by the enterprise, in storage the external LLM provider has no access to.</strong> This is a non-negotiable design property, not a configuration option. If your vendor's architecture allows the mapping to leave the enterprise environment, the approach's protection collapses.</p>

<h3>7.3 How Sensitivity Is Defined</h3>
<p>Generic PII categories — names, emails, phone numbers — are the start, not the end. The enterprise has to define what counts as sensitive in its own context: internal project codes, customer-segment identifiers, sector-specific references. The definition has to be versioned, because what counts as sensitive changes — yesterday it was financial customer data; today it's the new M&amp;A code name; tomorrow it's the asset references for the regulated unit. A static definition becomes stale fast.</p>

<h3>7.4 How the Workflow Handles Output</h3>
<p>Reconstruction has to happen inside the enterprise environment, integrated into whatever delivery channel the workflow uses — the ticketing system, the document management platform, the analyst's review interface. <strong>If reconstruction is a separate manual step, users will skip it, and the architecture's value evaporates.</strong></p>

<h3>7.5 What Happens When the External Endpoint Changes</h3>
<p>External LLMs are not stable infrastructure. Models get deprecated, vendors change pricing, new options appear. The approach works best when the transformation layer is provider-agnostic — when swapping ChatGPT for Claude or for a new vendor is a configuration change, not an architectural rewrite.</p>

<h2>8. The Limits of This Approach, Honestly</h2>
<p>The approach resolves a real problem but it doesn't resolve every problem. The limitations are worth stating clearly.</p>
<ul>
  <li><strong>It doesn't help when the AI's actual job requires the original sensitive data</strong> — verification, search, personalisation tasks where the literal identifier is the point.</li>
  <li><strong>It adds latency.</strong> Detection, transformation, and reconstruction each take time. For most enterprise workflows this is invisible — the overhead is fractions of a second in a workflow that takes seconds anyway. For latency-critical applications, the overhead may matter.</li>
  <li><strong>It requires sustained investment in the detection and definition layer.</strong> Sensitivity isn't static; markers evolve with the business; the definition has to evolve too. A team has to own that, and the team has to be wired into how the business actually changes. Buying the technology without owning the definition leaves the architecture in slow decay.</li>
  <li><strong>It doesn't substitute for organisational decisions about what data should be processed in the first place.</strong> Some workflows shouldn't be sent to external models at all, regardless of transformation — the data is too sensitive, the workflow is too critical, the failure mode is too costly. The approach is for workflows where the answer is <em>"this would be useful with the right architecture,"</em> not for workflows where the answer is <em>"no, never."</em></li>
  <li><strong>It requires that the enterprise actually deploy the layer inside its own environment.</strong> Vendors that offer this approach as an external SaaS — where the transformation happens on the vendor's infrastructure — have collapsed the architecture into a different problem. The whole point is that the transformation runs where the data already lives.</li>
</ul>

<h2>9. Where This Leaves the AI Strategy</h2>
<p>For most regulated EU enterprises in 2026, the path to production AI runs through some version of this approach. The economics of external LLMs are too good to ignore; the constraints on data location are too real to override; the existing tools — masking, on-premise deployment — solve parts of the problem but not all of it.</p>
<p>This approach is not a finished category. It has multiple implementations from multiple vendors, with different design choices around detection, transformation strength, reconstruction handling, and deployment topology. Choosing among them comes down to questions specific to the enterprise's environment: what existing systems the layer has to integrate with, what the sensitivity definition looks like, what deployment posture the security team has already committed to, what the workflow mix between external and on-premise models is going to be.</p>
<p>What's consistent across the implementations is the architectural commitment that defines the approach:</p>
<ol>
  <li>The original data stays inside the enterprise boundary</li>
  <li>The AI capability is preserved</li>
  <li>The transformation runs at a layer the enterprise controls</li>
  <li>The mapping that enables reconstruction stays under the enterprise's exclusive control</li>
</ol>
<p>When those four properties hold, the workflows that have been stalled in pilot start moving toward production.</p>
<p>The contradiction that opens this article doesn't fully resolve — there will always be workflows where the constraint and the capability cannot be reconciled. But for the broad middle of enterprise AI work, this approach is the architectural answer that lets the AI strategy and the data strategy stop being in conflict.</p>

<div class="takeaways">
  <div class="takeaways__label">Key takeaways</div>
  <ul>
    <li>Regulated enterprises face a contradiction: the most capable AI models are external; the most useful data can't leave the boundary</li>
    <li>The three standard responses — accept the risk, mask and redact, or run on-premise — each break at a predictable point</li>
    <li>A different approach changes <em>what crosses the boundary</em> rather than <em>whether</em> to cross it — using structure-preserving tokenisation</li>
    <li>Four stages: detection → transformation → external processing → reconstruction</li>
    <li>Fits analytical workflows where sensitive elements are identifiable in advance; does not fit personalisation or verification tasks</li>
    <li>Four non-negotiable design properties: transformation inside the enterprise, exclusive control of the mapping, evolving sensitivity definition, reconstruction as infrastructure</li>
    <li>Limits: added latency, ongoing investment in detection, no substitute for organisational decisions about what should be processed at all</li>
    <li>Provider-agnostic by design — swapping ChatGPT, Claude, or Gemini is a configuration change, not an architectural rewrite</li>
  </ul>
</div>

<h2>Frequently Asked Questions</h2>

<h3>How is this approach different from data masking?</h3>
<p>Masking optimises for <em>what's removed</em> — names, IDs, and identifying fields are replaced with redaction markers. That works for documents where the sensitive part is cleanly separable, but it breaks on operational data because the structure the AI needs to reason about gets destroyed in the process. The approach described here uses structure-preserving tokenisation: sensitive elements are replaced with placeholders that retain format, type, and relationships, so the AI sees a coherent document rather than a fragmented one. The mapping back to original values stays inside the enterprise.</p>

<h3>Does this work for any external LLM, or only specific ones?</h3>
<p>The approach is provider-agnostic by design. From the external LLM's perspective, it receives a normal request — it has no way to know the document has been transformed, and no need to. This means swapping ChatGPT for Claude, Gemini, or a new vendor is a configuration change rather than an architectural rewrite. The transformation layer is the constant; the external model is the variable.</p>

<h3>What happens to the mapping between tokens and original values?</h3>
<p>The mapping is the most sensitive component of the architecture — in effect, the key that re-identifies the data. Standard and good practice is that the mapping is held exclusively by the enterprise, in storage the external LLM provider has no access to. This is a non-negotiable design property. If a vendor's architecture allows the mapping to leave the enterprise environment, the approach's protection collapses.</p>

<h3>Where does the transformation layer have to run?</h3>
<p>Inside the enterprise environment — on-premise, in the company's own cloud VPC, or on dedicated infrastructure that the enterprise controls. The constraint is that the transformation happens <em>before</em> the data reaches the external network. Vendors that offer this approach as an external SaaS — where transformation happens on the vendor's infrastructure — have collapsed the architecture into a different problem. The whole point is that the transformation runs where the data already lives.</p>

<h3>What workflows does this approach not solve?</h3>
<p>Workflows where the AI must operate on the literal sensitive content as part of its task. Personalised content generation that addresses the customer directly. Verification workflows that must check against the actual identifier. Investigative searches that require the original strings. A useful rule of thumb: if the AI's output could be expressed as <em>"do this analytical thing to this kind of data and tell me what you find,"</em> the approach usually works. If the output requires <em>"act on this specific customer/case/identifier,"</em> it usually doesn't.</p>

<h3>How does this differ from running an on-premise open-source model?</h3>
<p>On-premise deployment solves the data problem by replacing the AI capability with something internal — the data never leaves, but the model is whatever the enterprise can host. That works when the workflow is bounded enough for a smaller model to suffice. The transformation-layer approach keeps the frontier external models in the loop and changes <em>what</em> crosses the boundary instead. The heavy lifting still happens on the most capable models; only the form of the data is different.</p>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"How is this approach different from data masking?","acceptedAnswer":{"@type":"Answer","text":"Masking optimises for what's removed — names, IDs, and identifying fields are replaced with redaction markers. That works for documents where the sensitive part is cleanly separable, but it breaks on operational data because the structure the AI needs to reason about gets destroyed in the process. The approach described here uses structure-preserving tokenisation: sensitive elements are replaced with placeholders that retain format, type, and relationships, so the AI sees a coherent document rather than a fragmented one. The mapping back to original values stays inside the enterprise."}}, {"@type":"Question","name":"Does this work for any external LLM, or only specific ones?","acceptedAnswer":{"@type":"Answer","text":"The approach is provider-agnostic by design. From the external LLM's perspective, it receives a normal request — it has no way to know the document has been transformed, and no need to. This means swapping ChatGPT for Claude, Gemini, or a new vendor is a configuration change rather than an architectural rewrite. The transformation layer is the constant; the external model is the variable."}}, {"@type":"Question","name":"What happens to the mapping between tokens and original values?","acceptedAnswer":{"@type":"Answer","text":"The mapping is the most sensitive component of the architecture — in effect, the key that re-identifies the data. Standard and good practice is that the mapping is held exclusively by the enterprise, in storage the external LLM provider has no access to. This is a non-negotiable design property. If a vendor's architecture allows the mapping to leave the enterprise environment, the approach's protection collapses."}}, {"@type":"Question","name":"Where does the transformation layer have to run?","acceptedAnswer":{"@type":"Answer","text":"Inside the enterprise environment — on-premise, in the company's own cloud VPC, or on dedicated infrastructure that the enterprise controls. The constraint is that the transformation happens before the data reaches the external network. Vendors that offer this approach as an external SaaS — where transformation happens on the vendor's infrastructure — have collapsed the architecture into a different problem. The whole point is that the transformation runs where the data already lives."}}, {"@type":"Question","name":"What workflows does this approach not solve?","acceptedAnswer":{"@type":"Answer","text":"Workflows where the AI must operate on the literal sensitive content as part of its task. Personalised content generation that addresses the customer directly. Verification workflows that must check against the actual identifier. Investigative searches that require the original strings. A useful rule of thumb: if the AI's output could be expressed as 'do this analytical thing to this kind of data and tell me what you find,' the approach usually works. If the output requires 'act on this specific customer/case/identifier,' it usually doesn't."}}, {"@type":"Question","name":"How does this differ from running an on-premise open-source model?","acceptedAnswer":{"@type":"Answer","text":"On-premise deployment solves the data problem by replacing the AI capability with something internal — the data never leaves, but the model is whatever the enterprise can host. That works when the workflow is bounded enough for a smaller model to suffice. The transformation-layer approach keeps the frontier external models in the loop and changes what crosses the boundary instead. The heavy lifting still happens on the most capable models; only the form of the data is different."}} ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Running External LLMs on Data Your Company Can't Send Externally",
    lead: "Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.",
    category: "AI Architecture",
    readTime: "~10 min read",
    dateUpdated: "May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "External LLMs produce measurably better output than what most enterprises can run internally — but regulated companies can't send their actual operational data to them. The three standard responses — send and accept the risk, mask and redact, or run an on-premise model — each break at a predictable point. A different approach changes what crosses the boundary rather than whether to cross it: sensitive elements are replaced with structure-preserving tokens inside the enterprise environment, the external LLM works on the tokenised version, and the response is reconstructed internally. The original data never leaves; the frontier-model capability is preserved. This isn't universal — it fits analytical workflows where sensitive elements are identifiable in advance, not personalisation or verification tasks that require the literal identifier. Four design properties define a sound implementation: transformation inside the enterprise environment, exclusive enterprise control of the mapping, a sensitivity definition that evolves with the business, and reconstruction that runs as infrastructure rather than as a manual step.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Running External LLMs on Sensitive Enterprise Data",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "AI on network operations data",
    related4Href: "/resources/learn/ai-on-network-operations-data",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "회사가 외부로 보낼 수 없는 데이터에서 외부 LLM 실행하기",
    lead: "대부분의 엔터프라이즈 AI 워크플로우는 외부 LLM이 회사가 노출할 수 없는 데이터를 요구할 때 멈춥니다. 이 정체를 극복하는 아키텍처 패턴과 각각의 트레이드오프를 살펴봅니다.",
    category: "AI Architecture",
    readTime: "~10분 읽기",
    dateUpdated: "2026년 5월",
    tldrLabel: "TL;DR",
    tldrBody: "외부 LLM은 대부분의 기업이 내부적으로 실행할 수 있는 것보다 측정 가능하게 더 나은 결과물을 생성합니다. 그러나 규제 산업의 기업들은 실제 운영 데이터를 외부 LLM에 보낼 수 없습니다. 세 가지 표준 대응책 — 위험을 감수하고 전송, 마스킹 및 삭제, 또는 온프레미스 모델 실행 — 은 각각 예측 가능한 시점에서 실패합니다. 다른 접근 방식은 경계를 넘을지 여부가 아니라 무엇이 경계를 넘는지를 바꿉니다. 민감 요소를 기업 환경 내에서 문서 구조 보존 토큰으로 교체하고, 외부 LLM은 토큰화된 버전을 처리하며, 응답은 내부적으로 복원됩니다. 원본 데이터는 절대 외부로 나가지 않습니다. 최전선 모델 역량은 그대로 유지됩니다. 이 방식은 범용적이지 않습니다. 민감 요소를 사전에 식별할 수 있는 분석 워크플로우에 적합하며, 리터럴 식별자가 필요한 개인화나 검증 작업에는 맞지 않습니다. 올바른 구현을 위한 네 가지 설계 속성이 있습니다. 기업 환경 내에서의 변환, 매핑에 대한 기업의 독점 제어, 비즈니스와 함께 진화하는 민감도 정의, 그리고 수동 단계가 아닌 인프라로 실행되는 복원입니다.",
    bodyHtml: `<h2>1. 엔터프라이즈 AI의 중심에 있는 조용한 모순</h2>
<p>2026년 대부분의 엔터프라이즈 AI 전략의 중심에는 조용한 모순이 있습니다.</p>
<p>외부 대형 언어 모델 — ChatGPT, Claude, Gemini, 그리고 다른 모델들 — 은 대부분의 기업이 내부적으로 실행할 수 있는 어떤 것보다도 측정 가능하게 더 나은 결과물을 생성합니다. 내부 모델이 처리하기 힘든 컨텍스트 윈도우를 다룹니다. 기업이 재훈련 비용을 지불하지 않아도 몇 달마다 더 나아집니다. 비즈니스에 중요한 대부분의 차원에서 명백한 선택입니다.</p>
<p>그런데도 상당수의 규제 산업 기업에서 그 모델들은 비즈니스가 실제로 운영되는 데이터를 법적으로 또는 계약상 처리할 수 없습니다. 고객 기록은 미국에 호스팅된 엔드포인트로 보낼 수 없습니다. 운영 로그는 섹터별 데이터 위치 요건에 묶여 있습니다. 문서에는 어딘가의 계약이 정의된 경계를 절대 벗어나지 않을 것이라고 명시한 식별자들이 포함되어 있습니다. <strong>AI가 가장 유용하게 활용될 데이터가 바로 AI가 볼 수 없는 데이터입니다.</strong></p>
<p>그 결과는 유럽 은행, 보험사, 통신사, 병원의 CIO라면 누구나 알아볼 수 있는 패턴입니다. 파일럿은 합성 또는 익명화된 샘플로 실행됩니다. 벤치마크는 좋아 보입니다. 이사회에는 AI가 오고 있다고 합니다. 그런 다음 실제 운영에서 파일럿이 건드리지 않았던 데이터를 만나면 워크플로우가 멈춥니다. 일부 팀은 포기합니다. 일부는 실망스러운 내부 LLM을 구축합니다. 일부는 사용해서는 안 되는 승인된 채널을 통해 데이터를 조용히 라우팅합니다 — 현재 사람들이 <em>shadow AI</em>라고 부르는 것입니다.</p>
<p>이 아티클은 엔터프라이즈 AI 팀이 가장 먼저 선택하는 세 가지 표준 접근 방식, 각각이 실패하는 지점, 그리고 통신, 의료, 금융, 방위 분야의 실제 배포에서 등장한 다른 접근 방식 — 질문 자체를 완전히 바꾸는 방식 — 을 설명합니다.</p>

<h2>2. 이 문제가 보기보다 어려운 이유</h2>
<p>문제를 처음 접하면 기존 도구 중 하나를 선택하려는 본능이 생깁니다. 데이터 마스킹 라이브러리, PII 감지 API, 오픈소스 모델의 프라이빗 배포. 각 도구는 문제의 일부를 해결하고, 각각은 워크플로우의 다른 지점에서 실패합니다.</p>
<p>그 이유는 엔터프라이즈 데이터가 도구들이 가정하는 방식으로 구조화되어 있지 않기 때문입니다. 소비자 개인정보 보호 도구는 레코드의 민감한 부분이 이름, 이메일, 전화번호 — 감지하고 교체할 수 있는 필드 — 라고 가정합니다. 그러나 엔터프라이즈 문서는 12개의 교차 참조 필드가 있는 서비스 티켓, 고객 문구가 포함된 자유 형식 설명, 첨부된 로그 조각, 내부 자산 ID 참조입니다. <strong>민감한 정보는 필드만큼이나 구조 안에도 존재합니다.</strong> 구조를 제거하면 AI가 작업할 유용한 것이 없습니다.</p>
<p>또 다른 이유는 엔터프라이즈 데이터 위치 요건이 종종 <em>어떤 종류의 데이터</em>보다는 <em>어디로 가는가</em>에 관한 것이기 때문입니다. 문서는 내부적으로 처리하기는 완전히 합법적이지만 제3국으로 보내는 것은 불가능할 수 있습니다 — 고객 약속, 섹터별 데이터 위치 규칙, 또는 회사 자체의 데이터 정책 때문에. 제약은 범주적인 것만이 아니라 지리적이고 계약적입니다.</p>
<p>이것이 엔터프라이즈 AI 팀이 해결하려는 실제 상황입니다. 정의된 환경을 벗어날 수 없게 묶여 있으면서 <em>바로 그 세부 사항 때문에</em> AI에게 유용한 구조화된 운영 데이터입니다. 가장 유능한 모델들은 그 경계의 반대편에 있습니다.</p>

<h2>3. 세 가지 표준 접근 방식 — 각각의 실패 지점</h2>
<p>대부분의 엔터프라이즈 AI 논의는 세 가지 패턴 중 하나로 귀결됩니다. 각각은 단독으로는 합리적입니다. 그 중 어느 것도 중요한 워크플로우에서 단독으로 실제 운영에 도달하지 못합니다.</p>

<h3>3.1 패턴 1 — 데이터를 전송하고 위험을 감수</h3>
<p>가장 단순한 패턴은 데이터를 외부 LLM으로 보내고 벤더의 계약상 약속 — 데이터 처리 계약, 표준 이전 조항, 지역 엔드포인트 — 에 의존하는 것입니다. 이것이 대부분의 공개 LLM 사용이 실제로 어떻게 이루어지는가입니다.</p>
<p>이 패턴은 데이터가 애초에 민감하지 않은 워크플로우에서 작동합니다 — 마케팅 카피, 공개 문서, 내부 일반 쿼리. 워크플로우가 고객 기록, 운영 시스템, 또는 계약적 데이터 위치 약속에 묶인 것을 건드리는 순간 작동하지 않습니다. <strong>벤더의 약속은 계약적인 것이지 아키텍처적인 것이 아닙니다.</strong> 가장 중요한 워크플로우의 경우, 계약적 수준은 엔터프라이즈 법무 검토가 선을 긋는 경향이 있는 지점입니다.</p>

<h3>3.2 패턴 2 — 전송 전 마스킹 및 삭제</h3>
<p>다음 본능은 민감도 지점에서 데이터를 내부 전용으로 유지하는 것입니다. 이름, ID, 식별 필드는 문서가 LLM으로 가기 전에 마스킹되거나 삭제됩니다. 모델은 정화된 버전을 봅니다.</p>
<p>이 방식은 민감한 부분이 명확하게 분리 가능한 문서에서는 작동합니다 — 당사자를 마스킹한 계약서, 이름을 마스킹한 이력서. 운영 데이터에서는 두 가지 이유로 실패합니다. 첫 번째는 마스킹이 AI에 필요한 구조를 파괴한다는 것입니다. 고객 이름이 <code>[REDACTED]</code>로 교체된 테이블은 더 이상 AI가 추론할 수 있는 테이블이 아닙니다. 두 번째는 운영 데이터가 단순한 마스킹으로는 인식하지 못하는 식별자들로 가득 차 있다는 것입니다 — 티켓 번호, 자산 ID, 내부 코드, 네트워크 식별자, 자유 형식 참조 — 그리고 그것들 중 어느 것이든 문맥에 따라 민감할 수 있습니다.</p>
<p>근본적인 문제는 마스킹이 <em>무엇이 남아 있어 사용 가능한가</em>가 아니라 <em>무엇이 제거되는가</em>를 최적화한다는 것입니다. AI가 데이터의 관계를 이해해야 하는 워크플로우에서 제거 기반 접근 방식은 민감한 부분을 숨기는 데 성공하더라도 워크플로우를 망가뜨립니다.</p>

<h3>3.3 패턴 3 — 완전 온프레미스 모델 실행</h3>
<p>세 번째 패턴은 외부 LLM을 포기하고 내부 인프라에서 오픈소스 모델을 실행하는 것입니다. 데이터는 절대 외부로 나가지 않습니다. 계약적 및 데이터 위치 질문은 스스로 해결됩니다.</p>
<p>이 방식은 작동하지만, 처음에는 항상 명확하지 않은 비용을 수반합니다. 내부 모델은 좋은 것이라도 기업이 실제로 중요하게 여기는 차원 — 복잡한 문서에 대한 추론, 낯선 형식 처리, 긴 컨텍스트 작업 — 에서 최전선 외부 모델보다 12~18개월 뒤처지는 경향이 있습니다. 운영 비용도 현실적입니다. GPU 인프라, 모델 서빙 스택, 평가 파이프라인, 이 모든 것을 유지 관리할 줄 아는 팀. 그리고 취약성도 있습니다. 6개월마다 외부 모델이 도약하고, 내부 모델이 할 수 있는 것과 비즈니스가 이제 기대하는 것 사이의 격차가 불편해집니다.</p>
<p>일부 워크플로우 — 특히 데이터 위치 요건이 절대적이고 워크플로우가 소형 모델로 충분할 만큼 충분히 제한된 경우 — 에서는 이 패턴이 올바른 답입니다. 대부분의 다른 경우에는 AI 이점을 희생하는 대가로 데이터 문제를 해결합니다.</p>

<h3>3.4 세 가지 패턴의 공통점</h3>
<p>세 가지 패턴 모두 하나의 가정을 공유합니다. 질문은 데이터를 외부 LLM으로 보낼 <em>것인가 여부</em>이고, 그렇지 않다면 <em>무엇을 대신 보낼 것인가</em>입니다. 경계를 고정된 것으로 보고 무엇이 그 경계를 통과할 수 있는지를 묻습니다.</p>
<p>다른 접근 방식은 다른 질문을 합니다.</p>

<table>
  <thead>
    <tr>
      <th>패턴</th>
      <th>작동하는 경우</th>
      <th>실패하는 경우</th>
      <th>핵심 트레이드오프</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>데이터를 전송하고 위험을 감수</td>
      <td>데이터가 민감하지 않은 경우 — 마케팅 카피, 공개 문서, 일반 쿼리</td>
      <td>워크플로우가 고객 기록, 운영 시스템, 또는 계약된 데이터에 닿는 경우</td>
      <td>아키텍처적이 아닌 계약적 보호</td>
    </tr>
    <tr>
      <td>전송 전 마스킹 및 삭제</td>
      <td>민감한 부분이 명확하게 분리 가능한 경우 — 계약 당사자, 이력서 이름</td>
      <td>구조에 의미가 있는 운영 데이터; 비명확한 식별자</td>
      <td>사용 가능한 것이 아닌 제거에 최적화</td>
    </tr>
    <tr>
      <td>완전 온프레미스 모델 실행</td>
      <td>소형 모델로 충분히 제한된 워크플로우; 데이터 위치가 절대적인 경우</td>
      <td>워크플로우에 최전선 추론, 긴 컨텍스트, 낯선 형식이 필요한 경우</td>
      <td>AI 이점을 희생하는 대가로 데이터 문제 해결</td>
    </tr>
  </tbody>
</table>

<h2>4. 다른 접근 방식 — 경계를 넘는 것을 바꾼다</h2>
<p>이 접근 방식은 다른 전제에서 시작합니다. <em>외부 LLM에 무엇을 보낼 수 있는가</em>를 묻는 대신, <em>외부 LLM이 유용하려면 무엇이 필요한가, 그리고 원본 데이터 대신 그것을 보낼 수 있는가</em>를 묻습니다.</p>
<p>엔터프라이즈 워크플로우의 큰 범주에서 답은 다음과 같이 밝혀집니다. LLM은 구조, 관계, 제기된 질문, 그리고 기대되는 답변의 형식이 필요합니다. 리터럴 고객 이름, 실제 계좌 번호, 실제 자산 식별자는 필요하지 않습니다. <strong>작업의 맥락에서 실제 값이 동작하는 것과 같은 방식으로 동작하는 플레이스홀더가 필요합니다.</strong></p>
<p>원본 민감 요소가 구조화된 토큰 — 형식, 유형, 관계를 보존하지만 원래 환경 밖에서는 의미가 없는 플레이스홀더 — 으로 교체된다면, 경계를 넘는 것은 더 이상 원본 데이터가 아닙니다. AI에 필요한 모든 것을 유지하고 경계가 내부에 유지되어야 했던 모든 것을 제거한 데이터의 변환입니다.</p>
<p>토큰과 원본 값 사이의 매핑은 환경 내부에 유지됩니다. AI는 토큰화된 버전을 처리하고 토큰화된 응답을 반환합니다. 환경 내부에서 토큰은 원본 값으로 다시 매핑되고, 응답은 실제 고객 이름, 실제 수치, 실제 참조가 포함된 비즈니스 준비 출력물이 됩니다.</p>
<p>이것은 마스킹이 아닙니다. 토큰이 구조와 형식을 보존하기 때문입니다. 합성 데이터도 아닙니다. 워크플로우가 실제 운영 데이터로 실행되기 때문입니다. 온프레미스 배포도 아닙니다. 무거운 작업은 여전히 최전선 외부 모델에서 이루어지기 때문입니다. <strong>이것은 기업 환경과 외부 AI 사이에 위치하는 변환 레이어로, 기업 환경이 아는 것을 바꾸지 않고 외부 AI가 보는 것을 바꿉니다.</strong></p>
<p>다른 커뮤니티는 이 접근 방식의 부분들에 다른 이름을 사용합니다. 데이터 보호 실무에서 대체 단계는 보통 <strong>토큰화(tokenisation)</strong>라고 불립니다 — 민감한 값을 다시 매핑할 수 있는 플레이스홀더로 교체하는 것. 토큰화가 구조 보존, 형식 보존 대역 및 선택적 통계적 보호와 결합될 때, 결과적인 데이터 준비 레이어는 때로 <strong>캡슐화 레이어(encapsulation layer)</strong>라고 불립니다 — 핵심 메커니즘으로 토큰화를 포함하는 더 넓은 아키텍처. 용어는 다양하지만 아키텍처 아이디어는 일관적입니다. 경계는 이동하지 않고 AI 역량은 줄어들지 않습니다. 바뀌는 것은 경계를 넘는 데이터의 형식입니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="boundary-diagram-title boundary-diagram-desc">
      <title id="boundary-diagram-title">엔터프라이즈 경계를 넘는 것</title>
      <desc id="boundary-diagram-desc">원본 데이터와 토큰-값 매핑이 기업 환경 내부에 유지되고, 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달되는 다이어그램.</desc>

      <defs>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5a4"/>
        </marker>
      </defs>

      
      <rect x="20" y="40" width="540" height="340" rx="12" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="40" y="68" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

      
      <rect x="50" y="100" width="180" height="76" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f1130">Original Data</text>
      <text x="140" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">customer records,</text>
      <text x="140" y="166" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">tickets, logs, documents</text>

      
      <rect x="280" y="80" width="240" height="116" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="2"/>
      <text x="400" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#5b4fe9">Transformation Layer</text>
      <line x1="304" y1="124" x2="496" y2="124" stroke="#e5e7eb" stroke-width="1"/>
      <text x="400" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">1. Detect sensitive elements</text>
      <text x="400" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">2. Replace with structured tokens</text>
      <text x="400" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">3. Reconstruct from tokenised response</text>

      
      <rect x="280" y="230" width="240" height="76" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="400" y="258" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0b7f7e">Token ↔ Value Mapping</text>
      <text x="400" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">held exclusively by the enterprise</text>
      <text x="400" y="294" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">never leaves the boundary</text>

      
      <rect x="50" y="320" width="180" height="48" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="342" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f1130">Business-Ready Output</text>
      <text x="140" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">real names, real figures</text>

      
      
      <line x1="230" y1="125" x2="278" y2="125" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>
      
      <line x1="400" y1="198" x2="400" y2="228" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="395" y1="208" x2="395" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      <line x1="405" y1="208" x2="405" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      
      <path d="M 280 175 Q 240 250 230 343" fill="none" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>

      
      <line x1="580" y1="40" x2="580" y2="380" stroke="#ef5350" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="580" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">BOUNDARY</text>

      
      <rect x="640" y="140" width="280" height="140" rx="12" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
      <text x="660" y="168" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
      <text x="780" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#ffffff">ChatGPT · Claude · Gemini</text>
      <text x="780" y="234" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">sees only tokenised data</text>
      <text x="780" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">returns tokenised response</text>

      
      
      <line x1="520" y1="160" x2="638" y2="180" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="155" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised data</text>

      
      <line x1="638" y1="244" x2="520" y2="190" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised response</text>

      
      <g transform="translate(640, 320)">
        <rect x="0" y="0" width="280" height="56" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="12" y1="18" x2="32" y2="18" stroke="#ef5350" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="40" y="22" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">boundary the data cannot cross</text>
        <line x1="12" y1="38" x2="32" y2="38" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="40" y="42" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">mapping stays inside the enterprise</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>원본 데이터와 매핑은 절대 기업을 벗어나지 않습니다. 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달됩니다.</strong></figcaption>
</figure>


<div class="callout">
  <span class="callout__icon">●</span>
  <p class="callout__body"><strong>한 문장으로 요약한 아키텍처.</strong> 원본 데이터와 토큰-값 매핑은 기업 환경 내부에 유지됩니다. 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달됩니다.</p>
</div>

<h2>5. 이 접근 방식이 실제로 작동하는 방법</h2>
<p>아키텍처는 네 단계로 분해됩니다. 각 단계에는 독립적인 설계 결정이 있습니다.</p>

<h3>5.1 감지</h3>
<p>어떤 것도 변환되기 전에 시스템은 이 맥락에서 무엇이 민감한지를 식별해야 합니다. 감지의 솔직한 버전은 들리는 것보다 어렵습니다. 운영 데이터의 민감 요소는 단순히 이름과 ID가 아니라 <em>이</em> 기업이 중요하다고 결정한 특정 마커들입니다 — 프로젝트 코드, 거래 조건, 내부 자산 참조, 섹터별 식별자. <strong>일반적인 PII 감지는 중요한 것의 약 40%만 찾아냅니다.</strong> 나머지 60%는 비즈니스가 변화함에 따라 적응할 수 있는 방식으로 기업 자체가 정의해야 합니다. 운영 품질의 감지는 패턴 매칭이 아닌 의미론적 인식으로 구조화된 필드와 비구조화된 자유 형식 텍스트 모두를 처리해야 합니다.</p>

<h3>5.2 변환</h3>
<p>민감 요소가 식별되면, 원본이 담당했던 구조적 역할을 보존하는 플레이스홀더로 교체해야 합니다. 자유 형식 필드의 고객 이름은 AI가 이름으로 인식하고 일관되게 참조할 수 있는 토큰이 됩니다. 계좌 번호는 계좌 번호로 유지되지만, 시스템 외부에서는 의미가 없는 것입니다. 변환은 테이블, 교차 참조, 계층 구조, 문서 구조를 아무것도 손상시키지 않고 처리해야 합니다. <strong>잘 되면 결과는 익명이지만 현실적인 대역이 있는 일관된 문서처럼 읽힙니다. 잘못되면 결과는 더 이상 의미가 없는 <code>[REDACTED]</code> 마커들로 가득합니다.</strong></p>
<p>일부 구현은 토큰화 위에 추가 보호 레이어를 쌓습니다 — 통계적 노이즈 추가, 배치에 걸쳐 k-익명성 적용, 특정 속성에 차등 프라이버시 기법 적용. 이것은 정교한 상관 분석가가 토큰화된 데이터만으로 엔터티를 재식별할 수 있는 잔류 위험을 줄입니다. 이 레이어가 필요한지 여부는 위협 모델에 따라 다릅니다. 대부분의 엔터프라이즈 워크플로우의 경우, 매핑이 잘 제어된다면 구조 보존 토큰화 단독으로 충분합니다. 데이터가 아키텍처 수준에서도 EU 지역이나 다른 정의된 경계 내에 유지되어야 하는 워크플로우의 경우, 추가 보호는 복잡성의 가치가 있습니다.</p>

<h3>5.3 외부 처리</h3>
<p>토큰화된 문서는 기업이 사용하는 API나 통합을 통해 외부 LLM으로 전송됩니다. LLM의 관점에서 이것은 단순히 요청입니다 — 문서가 변환되었다는 것을 알 방법도 없고 알 필요도 없습니다. LLM은 작업을 수행합니다 — 요약, 추출, 분류, 추론 — 그리고 들어간 것과 동일한 토큰을 포함하는 토큰화된 응답을 반환합니다.</p>

<h3>5.4 복원</h3>
<p>기업 환경 내부에서 토큰화된 응답은 원본 값으로 다시 매핑됩니다. 고객 이름에 대한 플레이스홀더는 실제 고객 이름을 돌려받습니다. 플레이스홀더 계좌 번호는 실제 계좌 번호가 됩니다. AI가 생성한 구조와 추론은 보존됩니다. 플레이스홀더만 교체됩니다. 결과는 원래 워크플로우로 흘러갈 준비가 된 비즈니스 준비 출력물입니다.</p>
<p>복원 단계는 대부분의 팀이 과소평가하는 부분입니다. AI 출력이 실제 운영에서 실제로 사용 가능한지 아니면 누군가가 수동으로 재구축해야 하는지를 결정하는 부분입니다. <strong>좋은 복원 레이어는 보이지 않습니다. 사용자가 문서를 제출하고, AI가 분석을 반환하고, 분석이 실제 값과 함께 돌아옵니다.</strong> 변환과 복원은 사용자 직면 단계가 아니라 인프라로 이루어집니다.</p>

<h2>6. 이 접근 방식이 실제로 해결하는 워크플로우</h2>
<p>이 접근 방식은 범용적이지 않습니다. 특정 워크플로우 범주에서 작동하며, 어떤 범주인지에 대해 솔직한 것이 채택 여부를 결정할 때 중요합니다.</p>
<p>맞는 워크플로우는 AI의 작업이 구조적이거나 분석적이고, 민감 요소가 사전에 식별 가능한 것들입니다. 예를 들면:</p>
<ul>
  <li>계약서 요약</li>
  <li>운영 로그에서 사고 보고서 작성</li>
  <li>실사 문서에서 위험 조항 추출</li>
  <li>구조화된 환자 기록에서 임상 노트 생성</li>
  <li>네트워크 알람 시퀀스에서 근본 원인 분석</li>
  <li>보험 청구 파일에서 클레임 분류</li>
</ul>
<p>각 경우에서 AI는 구조와 내용을 추론하고, 고객 식별 부분은 목적 자체가 아니라 목적을 위한 수단입니다.</p>
<p>맞지 않는 워크플로우는 AI가 작업의 일부로 리터럴 민감 내용을 처리해야 하는 것들입니다. 고객에게 직접 말을 거는 개인화된 콘텐츠 생성. 실제 식별자를 확인해야 하는 검증 워크플로우. 원본 문자열이 필요한 조사 검색.</p>
<p>유용한 경험 법칙: AI의 출력이 <em>"이런 종류의 데이터에 이 분석 작업을 수행하고 발견한 것을 알려달라"</em>로 표현될 수 있다면, 이 접근 방식은 일반적으로 작동합니다. AI의 출력이 <em>"이 특정 고객/케이스/식별자를 처리해달라"</em>를 요구한다면, 일반적으로 작동하지 않습니다.</p>

<h2>7. 배포 전에 결정해야 할 것들</h2>
<p>이 접근 방식을 채택하는 것은 체크박스 결정이 아닙니다. 나중에 재검토하기보다 처음부터 결정하기 더 쉬운 아키텍처 선택들을 수반합니다.</p>

<h3>7.1 변환이 실행되는 위치</h3>
<p>변환 레이어는 기업 환경 내부에서 실행되어야 합니다 — 온프레미스, 회사 자체 클라우드 VPC, 전용 인프라. 제약은 변환이 데이터가 외부 네트워크에 도달하기 <em>전에</em> 이루어진다는 것으로, 레이어가 AI 엔드포인트가 아니라 소스 시스템과 함께 배치됨을 의미합니다.</p>

<h3>7.2 매핑을 누가 제어하는가</h3>
<p>토큰과 원본 값 사이의 매핑은 아키텍처의 가장 민감한 구성 요소입니다. 사실상 데이터를 재식별하는 키입니다. <strong>표준 관행 — 그리고 좋은 관행 — 은 매핑이 기업에 의해 독점적으로 유지되는 것입니다. 외부 LLM 공급자가 접근할 수 없는 스토리지에.</strong> 이것은 설정 옵션이 아닌 협상 불가능한 설계 속성입니다. 벤더의 아키텍처가 매핑이 기업 환경을 벗어나는 것을 허용한다면, 이 접근 방식의 보호는 붕괴됩니다.</p>

<h3>7.3 민감도가 정의되는 방법</h3>
<p>일반적인 PII 범주 — 이름, 이메일, 전화번호 — 는 시작이지 끝이 아닙니다. 기업은 자체 맥락에서 무엇이 민감한지를 정의해야 합니다. 내부 프로젝트 코드, 고객 세그먼트 식별자, 섹터별 참조. 정의는 버전 관리되어야 합니다. 무엇이 민감한지는 변화하기 때문입니다 — 어제는 금융 고객 데이터, 오늘은 새로운 M&amp;A 코드명, 내일은 규제 부문의 자산 참조. 정적 정의는 빠르게 구식이 됩니다.</p>

<h3>7.4 워크플로우가 출력을 처리하는 방법</h3>
<p>복원은 기업 환경 내부에서 이루어져야 합니다. 워크플로우가 사용하는 전달 채널 — 티켓팅 시스템, 문서 관리 플랫폼, 분석가의 검토 인터페이스 — 에 통합되어야 합니다. <strong>복원이 별도의 수동 단계라면, 사용자는 그것을 건너뛸 것이고 아키텍처의 가치는 사라집니다.</strong></p>

<h3>7.5 외부 엔드포인트가 변경될 때 어떻게 되는가</h3>
<p>외부 LLM은 안정적인 인프라가 아닙니다. 모델은 더 이상 사용되지 않고, 벤더는 가격을 바꾸고, 새로운 옵션이 등장합니다. 이 접근 방식은 변환 레이어가 공급자에 구애받지 않을 때 가장 잘 작동합니다 — ChatGPT를 Claude나 새 벤더로 교체하는 것이 아키텍처 재작성이 아닌 설정 변경일 때.</p>

<h2>8. 이 접근 방식의 한계, 솔직하게</h2>
<p>이 접근 방식은 실제 문제를 해결하지만 모든 문제를 해결하지는 않습니다. 한계는 명확하게 언급할 가치가 있습니다.</p>
<ul>
  <li><strong>AI의 실제 작업이 원본 민감 데이터를 요구할 때는 도움이 되지 않습니다</strong> — 리터럴 식별자가 핵심인 검증, 검색, 개인화 작업.</li>
  <li><strong>레이턴시가 추가됩니다.</strong> 감지, 변환, 복원은 각각 시간이 걸립니다. 대부분의 엔터프라이즈 워크플로우에서 이것은 보이지 않습니다 — 오버헤드는 어차피 몇 초가 걸리는 워크플로우에서 일부 초의 분수입니다. 레이턴시에 민감한 애플리케이션의 경우 오버헤드가 중요할 수 있습니다.</li>
  <li><strong>감지 및 정의 레이어에 지속적인 투자가 필요합니다.</strong> 민감도는 정적이지 않습니다. 마커는 비즈니스와 함께 진화합니다. 정의도 진화해야 합니다. 팀이 그것을 소유해야 하고, 팀은 비즈니스가 실제로 어떻게 변화하는지와 연결되어야 합니다. 정의를 소유하지 않고 기술을 구매하면 아키텍처가 천천히 쇠퇴합니다.</li>
  <li><strong>애초에 어떤 데이터를 처리해야 하는가에 대한 조직적 결정을 대신하지 않습니다.</strong> 일부 워크플로우는 변환에 관계없이 외부 모델로 전송해서는 안 됩니다 — 데이터가 너무 민감하고, 워크플로우가 너무 중요하고, 실패 모드가 너무 비쌉니다. 이 접근 방식은 답이 <em>"적절한 아키텍처로 이것이 유용할 것이다"</em>인 워크플로우를 위한 것이지, 답이 <em>"절대 안 된다"</em>인 워크플로우를 위한 것이 아닙니다.</li>
  <li><strong>기업이 실제로 자체 환경 내에서 레이어를 배포해야 합니다.</strong> 이 접근 방식을 외부 SaaS로 제공하는 벤더들 — 변환이 벤더의 인프라에서 이루어지는 — 은 아키텍처를 다른 문제로 붕괴시켰습니다. 핵심은 변환이 데이터가 이미 존재하는 곳에서 실행된다는 것입니다.</li>
</ul>

<h2>9. AI 전략의 다음 단계</h2>
<p>2026년 대부분의 규제 EU 기업에서 실제 운영 AI로의 경로는 이 접근 방식의 어떤 버전을 통해 실행됩니다. 외부 LLM의 경제성은 무시하기에는 너무 좋습니다. 데이터 위치에 대한 제약은 무시하기에는 너무 현실적입니다. 기존 도구들 — 마스킹, 온프레미스 배포 — 은 문제의 일부를 해결하지만 전부는 아닙니다.</p>
<p>이 접근 방식은 완성된 범주가 아닙니다. 감지, 변환 강도, 복원 처리, 배포 토폴로지에 관한 서로 다른 설계 선택을 가진 여러 벤더의 여러 구현이 있습니다. 그 중에서 선택하는 것은 기업 환경에 특정한 질문들로 귀결됩니다. 레이어가 통합해야 하는 기존 시스템이 무엇인지, 민감도 정의가 어떻게 생겼는지, 보안 팀이 이미 어떤 배포 자세에 헌신했는지, 외부 모델과 온프레미스 모델 사이의 워크플로우 혼합이 어떻게 될 것인지.</p>
<p>구현 전반에 걸쳐 일관된 것은 이 접근 방식을 정의하는 아키텍처 약속입니다.</p>
<ol>
  <li>원본 데이터는 기업 경계 내부에 유지됩니다</li>
  <li>AI 역량은 보존됩니다</li>
  <li>변환은 기업이 제어하는 레이어에서 실행됩니다</li>
  <li>복원을 가능하게 하는 매핑은 기업의 독점 제어 하에 유지됩니다</li>
</ol>
<p>그 네 가지 속성이 유지될 때, 파일럿에서 정체되었던 워크플로우가 실제 운영으로 이동하기 시작합니다.</p>
<p>이 아티클을 시작하는 모순은 완전히 해결되지 않습니다 — 제약과 역량을 조화시킬 수 없는 워크플로우는 항상 있을 것입니다. 그러나 엔터프라이즈 AI 작업의 넓은 중간 영역에서, 이 접근 방식은 AI 전략과 데이터 전략이 더 이상 충돌하지 않도록 하는 아키텍처 답입니다.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 내용</div>
  <ul>
    <li>규제 산업 기업들은 모순에 직면합니다. 가장 유능한 AI 모델은 외부에 있고, 가장 유용한 데이터는 경계를 벗어날 수 없습니다</li>
    <li>세 가지 표준 대응책 — 위험 감수, 마스킹 및 삭제, 온프레미스 실행 — 은 각각 예측 가능한 지점에서 실패합니다</li>
    <li>다른 접근 방식은 경계를 넘을 <em>것인가 여부</em>가 아니라 <em>무엇이</em> 경계를 넘는가를 바꿉니다 — 문서 구조 보존 토큰화 사용</li>
    <li>네 단계: 감지 → 변환 → 외부 처리 → 복원</li>
    <li>민감 요소를 사전에 식별할 수 있는 분석 워크플로우에 적합합니다. 리터럴 식별자가 필요한 개인화나 검증 작업에는 맞지 않습니다</li>
    <li>네 가지 협상 불가능한 설계 속성: 기업 내부에서의 변환, 매핑의 독점 제어, 진화하는 민감도 정의, 인프라로서의 복원</li>
    <li>한계: 추가 레이턴시, 감지에 대한 지속적 투자, 애초에 무엇을 처리해야 하는가에 대한 조직적 결정의 대체 불가</li>
    <li>설계상 공급자에 구애받지 않습니다 — ChatGPT, Claude, Gemini를 교체하는 것은 아키텍처 재작성이 아닌 설정 변경입니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>이 접근 방식은 데이터 마스킹과 어떻게 다릅니까?</h3>
<p>마스킹은 <em>무엇이 제거되는가</em>를 최적화합니다 — 이름, ID, 식별 필드는 삭제 마커로 교체됩니다. 민감한 부분이 명확하게 분리 가능한 문서에서는 작동하지만, AI가 추론해야 하는 구조가 과정에서 파괴되기 때문에 운영 데이터에서는 실패합니다. 여기서 설명하는 접근 방식은 문서 구조 보존 토큰화를 사용합니다. 민감 요소는 형식, 유형, 관계를 유지하는 플레이스홀더로 교체됩니다. 따라서 AI는 단편화된 문서가 아닌 일관된 문서를 봅니다. 원본 값으로의 매핑은 기업 내부에 유지됩니다.</p>

<h3>이 접근 방식은 모든 외부 LLM에서 작동합니까, 아니면 특정 것만?</h3>
<p>이 접근 방식은 설계상 공급자에 구애받지 않습니다. 외부 LLM의 관점에서 일반적인 요청을 받습니다 — 문서가 변환되었다는 것을 알 방법도 없고 알 필요도 없습니다. 이것은 ChatGPT를 Claude, Gemini, 또는 새 벤더로 교체하는 것이 아키텍처 재작성보다는 설정 변경임을 의미합니다. 변환 레이어는 상수이고, 외부 모델은 변수입니다.</p>

<h3>토큰과 원본 값 사이의 매핑은 어떻게 됩니까?</h3>
<p>매핑은 아키텍처의 가장 민감한 구성 요소입니다 — 사실상 데이터를 재식별하는 키입니다. 표준 및 좋은 관행은 매핑이 기업에 의해 독점적으로 유지되는 것입니다. 외부 LLM 공급자가 접근할 수 없는 스토리지에. 이것은 협상 불가능한 설계 속성입니다. 벤더의 아키텍처가 매핑이 기업 환경을 벗어나는 것을 허용한다면, 이 접근 방식의 보호는 붕괴됩니다.</p>

<h3>변환 레이어는 어디서 실행되어야 합니까?</h3>
<p>기업 환경 내부에서 — 온프레미스, 회사 자체 클라우드 VPC, 또는 기업이 제어하는 전용 인프라에서. 제약은 변환이 데이터가 외부 네트워크에 도달하기 <em>전에</em> 이루어진다는 것입니다. 이 접근 방식을 외부 SaaS로 제공하는 벤더들 — 변환이 벤더의 인프라에서 이루어지는 — 은 아키텍처를 다른 문제로 붕괴시켰습니다. 핵심은 변환이 데이터가 이미 존재하는 곳에서 실행된다는 것입니다.</p>

<h3>이 접근 방식이 해결하지 못하는 워크플로우는 무엇입니까?</h3>
<p>AI가 작업의 일부로 리터럴 민감 내용을 처리해야 하는 워크플로우입니다. 고객에게 직접 말을 거는 개인화된 콘텐츠 생성. 실제 식별자를 확인해야 하는 검증 워크플로우. 원본 문자열이 필요한 조사 검색. 유용한 경험 법칙: AI의 출력이 <em>"이런 종류의 데이터에 이 분석 작업을 수행하고 발견한 것을 알려달라"</em>로 표현될 수 있다면, 이 접근 방식은 일반적으로 작동합니다. 출력이 <em>"이 특정 고객/케이스/식별자를 처리해달라"</em>를 요구한다면, 일반적으로 작동하지 않습니다.</p>

<h3>온프레미스 오픈소스 모델 실행과 어떻게 다릅니까?</h3>
<p>온프레미스 배포는 AI 역량을 내부적인 것으로 교체하여 데이터 문제를 해결합니다 — 데이터는 절대 외부로 나가지 않지만, 모델은 기업이 호스팅할 수 있는 것입니다. 워크플로우가 소형 모델로 충분할 만큼 충분히 제한된 경우에 작동합니다. 변환 레이어 접근 방식은 최전선 외부 모델을 계속 활용하고 대신 경계를 넘는 <em>것</em>을 바꿉니다. 무거운 작업은 여전히 가장 유능한 모델에서 이루어집니다. 다른 것은 데이터의 형식입니다.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Running External LLMs on Sensitive Enterprise Data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "AI on network operations data",
    related4Href: "/resources/learn/ai-on-network-operations-data",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Externe LLMs auf Daten einsetzen, die das Unternehmen nicht weitergeben darf",
    lead: "Viele KI-Projekte in Unternehmen scheitern nicht an fehlender Technologie, sondern an Datenschutzvorgaben. Dieser Artikel beschreibt die gängigen Architekturansätze — und zeigt, wo jeder einzelne an seine Grenzen stößt.",
    category: "KI-Architektur",
    readTime: "~10 Min. Lesezeit",
    dateUpdated: "Mai 2026",
    tldrLabel: "Kurzfassung",
    tldrBody: "Externe LLMs liefern messbar bessere Ergebnisse als intern betriebene Modelle — doch regulierte Unternehmen können ihre operativen Daten nicht an externe Dienste weitergeben. Die drei gängigen Reaktionen — Daten senden und Risiko akzeptieren, Maskierung und Schwärzung, oder vollständige On-Premise-Bereitstellung — scheitern jeweils an vorhersehbaren Punkten. Ein anderer Ansatz verändert nicht, ob die Grenze überschritten wird, sondern was sie überschreitet: Sensible Inhalte werden innerhalb der Unternehmensumgebung durch strukturerhaltende Token ersetzt. Das externe LLM verarbeitet die tokenisierte Variante; die Antwort wird intern wiederhergestellt. Die Originaldaten verlassen das Unternehmen nicht. Die Leistungsfähigkeit der führenden Modelle bleibt erhalten. Dieser Ansatz ist nicht universell einsetzbar — er eignet sich für analytische Workflows, bei denen sensible Elemente vorab identifizierbar sind, nicht jedoch für Personalisierungs- oder Verifikationsaufgaben, die den tatsächlichen Identifikator erfordern. Vier Designeigenschaften kennzeichnen eine solide Implementierung: Transformation innerhalb der Unternehmensumgebung, ausschließliche Kontrolle des Mappings durch das Unternehmen, eine mit dem Geschäft weiterentwickelte Sensitivitätsdefinition und Wiederherstellung als Infrastrukturkomponente — nicht als manueller Schritt.",
    bodyHtml: `<h2>1. Der stille Widerspruch im Kern der Unternehmens-KI</h2>
<p>Im Jahr 2026 stehen viele Unternehmen vor einem strukturellen Problem, das selten offen benannt wird.</p>
<p>Externe Large Language Models — ChatGPT, Claude, Gemini und andere — erzielen messbar bessere Ergebnisse als intern betriebene Modelle. Sie bewältigen Kontextfenster, an denen interne Systeme scheitern. Sie verbessern sich alle paar Monate, ohne dass das Unternehmen Kosten für Nachtraining trägt. Nach den meisten Kriterien, die für Unternehmen relevant sind, sind sie die naheliegende Wahl.</p>
<p>Und dennoch: In einer Vielzahl regulierter Unternehmen dürfen diese Modelle rechtlich oder vertraglich keinen Zugriff auf die Daten erhalten, auf denen der Betrieb tatsächlich basiert. Kundendaten können nicht an US-gehostete Endpunkte übermittelt werden. Betriebsprotokolle unterliegen sektorspezifischen Datenhaltungsanforderungen. Dokumente enthalten Bezeichner, bei denen vertragliche Vereinbarungen eine Weitergabe außerhalb definierter Grenzen ausschließen. <strong>Die Daten, bei denen KI den größten Nutzen entfalten würde, sind genau die, die sie nicht einsehen darf.</strong></p>
<p>Das Ergebnis ist ein Muster, das CIOs in europäischen Banken, Versicherungen, Telekommunikationsunternehmen und Krankenhäusern kennen. Pilotprojekte laufen auf synthetischen oder anonymisierten Stichproben. Die Benchmarks sehen vielversprechend aus. Der Vorstand wird informiert, dass KI kommt. Dann trifft der Produktivbetrieb auf Daten, die im Piloten nicht berücksichtigt wurden — und der Workflow kommt zum Stillstand. Einige Teams geben auf. Andere entwickeln interne LLMs, die die Erwartungen nicht erfüllen. Wieder andere leiten Daten still über Kanäle um, die dafür nicht vorgesehen sind — ein Phänomen, das heute als <em>Shadow-KI</em> bezeichnet wird.</p>
<p>Dieser Artikel beschreibt die drei gängigen Ansätze, die KI-Teams als erstes ausprobieren, zeigt auf, wo jeder einzelne versagt, und stellt einen anderen Ansatz vor — einen, der in produktiven Deployments in Telekommunikation, Gesundheitswesen, Finanzwesen und Verteidigung eingesetzt wird und die eigentliche Frage neu formuliert.</p>

<h2>2. Warum dieses Problem schwieriger ist als es aussieht</h2>
<p>Die erste Reaktion beim Auftreten dieses Problems ist meist der Griff zu einem verfügbaren Werkzeug: einer Datenmaskierungsbibliothek, einer PII-Erkennungs-API oder einer privaten Bereitstellung eines Open-Source-Modells. Jedes dieser Werkzeuge löst einen Teil des Problems — und scheitert an einem anderen Punkt im Workflow.</p>
<p>Der Grund liegt darin, dass Unternehmensdaten nicht so strukturiert sind, wie die Werkzeuge es voraussetzen. Ein Datenschutz-Tool für Verbraucher geht davon aus, dass der sensible Teil eines Datensatzes ein Name, eine E-Mail-Adresse oder eine Telefonnummer ist — Felder, die erkannt und ersetzt werden können. Ein Unternehmensdokument hingegen ist ein Service-Ticket mit zwölf Querverweisfeldern, einer Freitextbeschreibung mit Kundenformulierungen, einem angehängten Protokollauszug und Verweisen auf interne Asset-IDs. <strong>Sensible Informationen liegen ebenso in der Struktur wie in den Einzelfeldern.</strong> Wird die Struktur entfernt, verliert die KI die Grundlage ihrer Arbeit.</p>
<p>Hinzu kommt: Datenhaltungsanforderungen in Unternehmen betreffen oft weniger die Art der Daten als ihren Übertragungsweg. Ein Dokument kann intern legal verarbeitbar, aber nicht in ein Drittland übermittelbar sein — aufgrund von Kundenverpflichtungen, sektorspezifischen Datenhaltungsregeln oder der eigenen Datenschutzstrategie. Die Einschränkung ist geografischer und vertraglicher Natur, nicht nur kategorialer.</p>
<p>Das ist die tatsächliche Situation, vor der KI-Teams in Unternehmen stehen: strukturierte operative Daten, die für KI <em>gerade wegen ihrer Detailtiefe</em> wertvoll sind, gebunden durch Anforderungen, die ihre Weitergabe verhindern — während die leistungsfähigsten Modelle jenseits dieser Grenze verfügbar sind.</p>

<h2>3. Die drei gängigen Ansätze — und wo jeder versagt</h2>
<p>Die meisten Diskussionen über Unternehmens-KI münden in einen von drei Ansätzen. Jeder ist für sich genommen nachvollziehbar. Keiner davon führt allein zu produktionsreifen Workflows, wenn es auf sie ankommt.</p>

<h3>3.1 Ansatz 1 — Daten übermitteln und Risiko akzeptieren</h3>
<p>Der einfachste Ansatz ist die Übermittlung der Daten an das externe LLM unter Berufung auf die vertraglichen Zusicherungen des Anbieters — Datenverarbeitungsverträge, Standardvertragsklauseln, regionale Endpunkte. So funktioniert der Großteil der öffentlichen LLM-Nutzung in der Praxis.</p>
<p>Dieser Ansatz funktioniert für Workflows, bei denen die Daten von vornherein nicht sensibel sind — Marketingtexte, öffentliche Dokumente, allgemeine interne Anfragen. Er versagt in dem Moment, in dem der Workflow Kundendaten, operative Systeme oder vertraglich gebundene Informationen berührt. <strong>Die Zusicherung des Anbieters ist vertraglicher, nicht architektonischer Natur.</strong> Für die Workflows, bei denen es wirklich darauf ankommt, ist die vertragliche Ebene häufig die Grenze, an der eine rechtliche Prüfung im Unternehmen ansetzt.</p>

<h3>3.2 Ansatz 2 — Maskierung und Schwärzung vor der Übermittlung</h3>
<p>Der nächste Reflex ist, sensible Inhalte intern zu halten. Namen, IDs und identifizierende Felder werden vor der Übermittlung an das LLM maskiert oder geschwärzt. Das Modell sieht eine bereinigt Version.</p>
<p>Für Dokumente, bei denen der sensible Teil klar abgrenzbar ist — etwa ein Vertrag, bei dem die Parteien geschwärzt werden, oder ein Lebenslauf, bei dem der Name entfernt wird — funktioniert dieser Ansatz. Bei operativen Daten scheitert er aus zwei Gründen. Erstens zerstört die Maskierung die Struktur, die die KI benötigt: Eine Tabelle, in der Kundennamen durch <code>[REDACTED]</code> ersetzt wurden, ist keine Tabelle mehr, über die die KI sinnvoll schlussfolgern kann. Zweitens enthält operative Daten zahlreiche Bezeichner, die einfache Maskierungslösungen nicht erkennen — Ticket-Nummern, Asset-IDs, interne Codes, Netzwerkkennungen, Freitextverweise — und jeder dieser Bezeichner kann je nach Kontext sensibel sein.</p>
<p>Das grundlegende Problem: Maskierung optimiert für das <em>Entfernte</em>, nicht für das <em>Nutzbare</em>. Für Workflows, bei denen die KI Zusammenhänge in den Daten verstehen muss, zerstören entfernungsbasierte Ansätze den Workflow, auch wenn sie die sensiblen Inhalte erfolgreich verbergen.</p>

<h3>3.3 Ansatz 3 — Vollständige On-Premise-Bereitstellung</h3>
<p>Der dritte Ansatz ist der Verzicht auf externe LLMs zugunsten eines Open-Source-Modells auf eigener Infrastruktur. Die Daten verlassen das Unternehmen nicht. Vertragliche Fragen und Datenhaltungsanforderungen lösen sich damit auf.</p>
<p>Dieser Ansatz funktioniert — aber er hat Kosten, die zu Beginn nicht immer sichtbar sind. Interne Modelle, auch gute, liegen bei den Dimensionen, die Unternehmen tatsächlich interessieren — Schlussfolgerungen über komplexe Dokumente, Umgang mit unbekannten Formaten, Verarbeitung langer Kontexte — typischerweise zwölf bis achtzehn Monate hinter den führenden externen Modellen zurück. Der Betriebsaufwand ist erheblich: GPU-Infrastruktur, Modell-Serving-Stack, Evaluierungspipeline, ein Team mit dem nötigen Know-how. Und es gibt die Schere: Alle sechs Monate springen externe Modelle vor, und die Lücke zwischen dem, was das interne Modell kann, und dem, was das Unternehmen inzwischen erwartet, wird größer.</p>
<p>Für bestimmte Workflows — insbesondere dort, wo Datenhaltungsanforderungen absolut sind und der Workflow so überschaubar ist, dass ein kleineres Modell ausreicht — ist dieser Ansatz die richtige Wahl. Für die meisten anderen Anwendungsfälle löst er das Datenproblem auf Kosten der KI-Vorteile.</p>

<h3>3.4 Was diese drei Ansätze gemeinsam haben</h3>
<p>Allen drei Ansätzen liegt dieselbe Annahme zugrunde: Die Frage lautet, <em>ob</em> die Daten an das externe LLM gesendet werden sollen — und wenn nicht, <em>was stattdessen gesendet werden soll</em>. Sie behandeln die Grenze als gegeben und fragen, was sie passieren kann.</p>
<p>Ein anderer Ansatz stellt eine andere Frage.</p>

<table>
  <thead>
    <tr>
      <th>Ansatz</th>
      <th>Funktioniert bei</th>
      <th>Versagt bei</th>
      <th>Kernkompromiss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Daten senden, Risiko akzeptieren</td>
      <td>Nicht sensible Daten — Marketingtexte, öffentliche Dokumente, allgemeine Anfragen</td>
      <td>Workflows mit Kundendaten, operativen Systemen oder vertraglichen Datenbindungen</td>
      <td>Vertraglicher, kein architektonischer Schutz</td>
    </tr>
    <tr>
      <td>Maskierung und Schwärzung</td>
      <td>Klar abgrenzbare sensible Inhalte — Vertragsparteien, Lebenslaufname</td>
      <td>Operative Daten, bei denen Struktur Bedeutung trägt; nicht offensichtliche Identifikatoren</td>
      <td>Optimiert für das Entfernte, nicht für das Nutzbare</td>
    </tr>
    <tr>
      <td>Vollständige On-Premise-Bereitstellung</td>
      <td>Überschaubare Workflows; absolute Datenhaltungsanforderungen</td>
      <td>Workflows, die fortgeschrittenes Schlussfolgern, langen Kontext oder unbekannte Formate erfordern</td>
      <td>Datenproblem gelöst auf Kosten der KI-Leistungsfähigkeit</td>
    </tr>
  </tbody>
</table>

<h2>4. Ein anderer Ansatz — das Grenzüberschreitende verändern</h2>
<p>Dieser Ansatz beginnt mit einer anderen Prämisse. Statt zu fragen <em>was kann an das externe LLM gesendet werden</em>, lautet die Frage: <em>Was benötigt das externe LLM, um nützlich zu sein — und kann das anstelle der Originaldaten übermittelt werden?</em></p>
<p>Für eine große Klasse von Unternehmens-Workflows lautet die Antwort: Das LLM benötigt die Struktur, die Zusammenhänge, die gestellte Frage und die Form der erwarteten Antwort. Es benötigt nicht den tatsächlichen Kundennamen, die eigentliche Kontonummer, den realen Asset-Identifikator. <strong>Es benötigt einen Platzhalter, der sich im Kontext der Aufgabe genauso verhält wie der echte Wert.</strong></p>
<p>Wenn sensible Elemente durch strukturierte Token ersetzt werden — Platzhalter, die Format, Typ und Beziehungen erhalten, außerhalb der Ursprungsumgebung aber keine Bedeutung haben — überquert nicht mehr das Original die Grenze. Es ist eine Transformation der Daten, die alles behält, was die KI benötigt, und alles entfernt, was innerhalb der Grenze verbleiben soll.</p>
<p>Das Mapping zwischen Token und Originalwerten verbleibt innerhalb der Unternehmensumgebung. Die KI verarbeitet die tokenisierte Version und gibt eine tokenisierte Antwort zurück. Intern werden die Token auf die Originalwerte zurückgemappt; das Ergebnis ist eine betriebsfertige Ausgabe mit echten Kundennamen, echten Zahlen und echten Referenzen.</p>
<p>Dies ist keine Maskierung — die Token erhalten Struktur und Format. Es sind keine synthetischen Daten — der Workflow operiert auf echten Produktivdaten. Es ist keine On-Premise-Bereitstellung — die eigentliche Verarbeitungsleistung erbringen weiterhin die führenden externen Modelle. <strong>Es ist eine Transformationsschicht zwischen der Unternehmensumgebung und der externen KI, die verändert, was die externe KI sieht — ohne zu verändern, was die Unternehmensumgebung weiß.</strong></p>
<p>Verschiedene Communities verwenden unterschiedliche Begriffe für Teile dieses Ansatzes. In der Datenschutzpraxis wird der Ersetzungsschritt üblicherweise als <strong>Tokenisierung</strong> bezeichnet — sensible Werte werden durch rückmappbare Platzhalter ersetzt. Wenn Tokenisierung mit Strukturerhalt, formatkongruenten Platzhaltern und optionalen statistischen Schutzmaßnahmen kombiniert wird, spricht man von einer <strong>Kapselungsschicht (Encapsulation Layer)</strong> — einer übergeordneten Architektur, bei der die Tokenisierung den Kernmechanismus bildet. Die Terminologie variiert; der architektonische Gedanke ist konsistent: Die Grenze bleibt unverändert, die KI-Leistungsfähigkeit bleibt erhalten. Was sich verändert, ist die Form der Daten, die die Grenze überquert.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="boundary-diagram-title boundary-diagram-desc">
      <title id="boundary-diagram-title">Was die Unternehmensgrenze überquert</title>
      <desc id="boundary-diagram-desc">Ein Diagramm, das zeigt, wie Originaldaten und das Token-Wert-Mapping innerhalb der Unternehmensumgebung verbleiben, während nur tokenisierte Daten und tokenisierte Antworten die Grenze zum externen LLM überqueren.</desc>

      <defs>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5a4"/>
        </marker>
      </defs>

      
      <rect x="20" y="40" width="540" height="340" rx="12" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="40" y="68" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

      
      <rect x="50" y="100" width="180" height="76" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f1130">Original Data</text>
      <text x="140" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">customer records,</text>
      <text x="140" y="166" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">tickets, logs, documents</text>

      
      <rect x="280" y="80" width="240" height="116" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="2"/>
      <text x="400" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#5b4fe9">Transformation Layer</text>
      <line x1="304" y1="124" x2="496" y2="124" stroke="#e5e7eb" stroke-width="1"/>
      <text x="400" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">1. Detect sensitive elements</text>
      <text x="400" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">2. Replace with structured tokens</text>
      <text x="400" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">3. Reconstruct from tokenised response</text>

      
      <rect x="280" y="230" width="240" height="76" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="400" y="258" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0b7f7e">Token ↔ Value Mapping</text>
      <text x="400" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">held exclusively by the enterprise</text>
      <text x="400" y="294" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">never leaves the boundary</text>

      
      <rect x="50" y="320" width="180" height="48" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="342" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f1130">Business-Ready Output</text>
      <text x="140" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">real names, real figures</text>

      
      
      <line x1="230" y1="125" x2="278" y2="125" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>
      
      <line x1="400" y1="198" x2="400" y2="228" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="395" y1="208" x2="395" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      <line x1="405" y1="208" x2="405" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      
      <path d="M 280 175 Q 240 250 230 343" fill="none" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>

      
      <line x1="580" y1="40" x2="580" y2="380" stroke="#ef5350" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="580" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">BOUNDARY</text>

      
      <rect x="640" y="140" width="280" height="140" rx="12" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
      <text x="660" y="168" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
      <text x="780" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#ffffff">ChatGPT · Claude · Gemini</text>
      <text x="780" y="234" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">sees only tokenised data</text>
      <text x="780" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">returns tokenised response</text>

      
      
      <line x1="520" y1="160" x2="638" y2="180" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="155" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised data</text>

      
      <line x1="638" y1="244" x2="520" y2="190" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised response</text>

      
      <g transform="translate(640, 320)">
        <rect x="0" y="0" width="280" height="56" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="12" y1="18" x2="32" y2="18" stroke="#ef5350" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="40" y="22" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">boundary the data cannot cross</text>
        <line x1="12" y1="38" x2="32" y2="38" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="40" y="42" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">mapping stays inside the enterprise</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Originaldaten und Mapping verlassen das Unternehmen nicht. Nur tokenisierte Daten und tokenisierte Antworten überqueren die Grenze zum externen LLM.</strong></figcaption>
</figure>


<div class="callout">
  <span class="callout__icon">●</span>
  <p class="callout__body"><strong>Die Architektur in einem Satz.</strong> Originaldaten und Token-Wert-Mapping verbleiben in der Unternehmensumgebung. Nur tokenisierte Daten und tokenisierte Antworten überqueren die Grenze zum externen LLM.</p>
</div>

<h2>5. Wie dieser Ansatz in der Praxis funktioniert</h2>
<p>Die Architektur gliedert sich in vier Phasen mit jeweils eigenständigen Designentscheidungen.</p>

<h3>5.1 Erkennung</h3>
<p>Bevor Daten transformiert werden, muss das System identifizieren, was in diesem Kontext als sensibel gilt. Erkennung ist in der Praxis schwieriger als zunächst erwartet: Sensible Elemente in operativen Daten sind nicht nur Namen und IDs, sondern die spezifischen Merkmale, die <em>dieses</em> Unternehmen als schutzwürdig definiert hat — Projektkennzeichen, Vertragsbedingungen, interne Asset-Verweise, sektorspezifische Identifikatoren. <strong>Generische PII-Erkennung erfasst etwa vierzig Prozent dessen, was tatsächlich relevant ist.</strong> Die restlichen sechzig Prozent muss das Unternehmen selbst definieren — in einer Form, die sich mit dem Geschäft weiterentwickeln kann. Produktionsreife Erkennung muss strukturierte Felder und unstrukturierten Freitext bewältigen — mit semantischem Verständnis statt reinem Musterabgleich.</p>

<h3>5.2 Transformation</h3>
<p>Sind sensible Elemente identifiziert, müssen sie durch Platzhalter ersetzt werden, die die strukturelle Rolle des Originals erhalten. Ein Kundenname in einem Freitextfeld wird zu einem Token, das die KI als Namen erkennt und konsistent referenziert. Eine Kontonummer bleibt eine Kontonummer — lediglich ohne semantische Bedeutung außerhalb des Systems. Die Transformation muss Tabellen, Querverweise, Hierarchien und Dokumentstrukturen intakt lassen. <strong>Gut umgesetzt liest sich das Ergebnis wie ein kohärentes Dokument mit anonymen, aber realistischen Platzhaltern. Schlecht umgesetzt ist es mit <code>[REDACTED]</code>-Markierungen durchsetzt, die den Zusammenhang zerstören.</strong></p>
<p>Einige Implementierungen ergänzen die Tokenisierung um zusätzliche Schutzmaßnahmen — statistische Rauschüberlagerung, Durchsetzung von k-Anonymität über Batches oder Anwendung von Differential-Privacy-Techniken auf bestimmte Attribute. Dies reduziert das Restrisiko, dass ein versierter Angreifer Entitäten anhand der tokenisierten Daten re-identifizieren könnte. Ob diese Schicht erforderlich ist, hängt vom jeweiligen Bedrohungsmodell ab. Für die meisten Unternehmens-Workflows ist strukturerhaltende Tokenisierung allein ausreichend, sofern das Mapping gut kontrolliert wird. Für Workflows, bei denen Daten auch auf Architekturebene innerhalb der EU oder anderer definierter Grenzen verbleiben müssen — etwa unter DSGVO (GDPR) oder BSI C5 — ist der zusätzliche Schutz den Mehraufwand wert.</p>

<h3>5.3 Externe Verarbeitung</h3>
<p>Das tokenisierte Dokument wird über die vom Unternehmen genutzten APIs oder Integrationen an das externe LLM übermittelt. Aus Sicht des LLM ist dies eine normale Anfrage — es kann nicht wissen, dass das Dokument transformiert wurde, und muss es auch nicht wissen. Das LLM führt seine Aufgaben aus — Zusammenfassung, Extraktion, Klassifikation, Schlussfolgerung — und gibt eine tokenisierte Antwort zurück, die dieselben Token enthält wie die Eingabe.</p>

<h3>5.4 Wiederherstellung</h3>
<p>Innerhalb der Unternehmensumgebung wird die tokenisierte Antwort auf die Originalwerte zurückgemappt. Platzhalter für Kundennamen erhalten die echten Namen zurück. Platzhalter-Kontonummern werden zu echten Kontonummern. Die Struktur und die Schlussfolgerungen der KI bleiben erhalten; lediglich die Platzhalter werden ersetzt. Das Ergebnis ist eine betriebsfertige Ausgabe, die direkt in den ursprünglichen Workflow eingespeist werden kann.</p>
<p>Die Wiederherstellungsphase wird von den meisten Teams unterschätzt. Sie bestimmt, ob die KI-Ausgabe im Produktivbetrieb tatsächlich nutzbar ist oder ob jemand sie manuell nacharbeiten muss. <strong>Eine gute Wiederherstellungsschicht ist unsichtbar: Der Nutzer übergibt ein Dokument, die KI liefert eine Analyse, und die Analyse kommt mit echten Werten zurück.</strong> Transformation und Wiederherstellung laufen als Infrastruktur, nicht als nutzerseitige Schritte.</p>

<h2>6. Für welche Workflows dieser Ansatz tatsächlich geeignet ist</h2>
<p>Dieser Ansatz ist nicht universell. Er funktioniert für eine bestimmte Klasse von Workflows — und Klarheit darüber, welche das sind, ist entscheidend für die Entscheidung, ihn einzusetzen.</p>
<p>Geeignet sind Workflows, bei denen die KI-Aufgabe struktureller oder analytischer Natur ist und sensible Elemente vorab identifizierbar sind. Beispiele:</p>
<ul>
  <li>Vertragszusammenfassungen</li>
  <li>Erstellung von Störungsberichten aus Betriebsprotokollen</li>
  <li>Extraktion von Risikoklauseln aus Due-Diligence-Dokumenten</li>
  <li>Erstellung klinischer Notizen aus strukturierten Patientendaten</li>
  <li>Ursachenanalyse aus Netzwerk-Alarmsequenzen</li>
  <li>Klassifikation von Schadenmeldungen aus Versicherungsunterlagen</li>
</ul>
<p>In jedem dieser Fälle analysiert die KI Struktur und Inhalt. Die personenidentifizierenden Teile sind Mittel zum Zweck, nicht der Zweck selbst.</p>
<p>Nicht geeignet sind Workflows, bei denen die KI den tatsächlichen sensiblen Inhalt als Teil ihrer Aufgabe verarbeiten muss. Personalisierte Inhalte, die sich direkt an einen Kunden richten. Prüfworkflows, die gegen den tatsächlichen Identifikator abgleichen müssen. Recherchen, die die Originalzeichenketten erfordern.</p>
<p>Als Faustregel gilt: Lässt sich die KI-Ausgabe als <em>"Führe diese analytische Aufgabe durch und berichte das Ergebnis"</em> beschreiben, ist der Ansatz geeignet. Erfordert die Ausgabe <em>"Handele bezüglich dieses konkreten Kunden, Falls oder Identifikators"</em>, ist er es nicht.</p>

<h2>7. Was vor der Bereitstellung zu entscheiden ist</h2>
<p>Die Einführung dieses Ansatzes ist keine Standardentscheidung. Sie bringt Architekturentscheidungen mit sich, die zu Beginn einfacher zu treffen sind als im Nachhinein.</p>

<h3>7.1 Wo die Transformation ausgeführt wird</h3>
<p>Die Transformationsschicht muss innerhalb der Unternehmensumgebung betrieben werden — On-Premise, in der unternehmenseigenen Cloud-VPC oder auf dedizierter Infrastruktur. Die Anforderung besteht darin, dass die Transformation erfolgt, <em>bevor</em> die Daten das externe Netzwerk erreichen. Die Schicht ist damit kolokal mit den Quellsystemen, nicht mit dem KI-Endpunkt.</p>

<h3>7.2 Wer das Mapping kontrolliert</h3>
<p>Das Mapping zwischen Token und Originalwerten ist die sensibelste Komponente der Architektur. Es ist der Schlüssel zur Re-Identifikation der Daten. <strong>Bewährte Praxis ist, dass das Mapping ausschließlich vom Unternehmen gehalten wird — in einem Speicher, auf den der externe LLM-Anbieter keinen Zugriff hat.</strong> Dies ist eine nicht verhandelbare Designeigenschaft, keine Konfigurationsoption. Erlaubt die Architektur eines Anbieters, dass das Mapping die Unternehmensumgebung verlässt, kollabiert der Schutz des Ansatzes.</p>

<h3>7.3 Wie Sensitivität definiert wird</h3>
<p>Generische personenbezogene Datenkategorien nach DSGVO (GDPR) — Namen, E-Mail-Adressen, Telefonnummern — sind der Ausgangspunkt, nicht das Ziel. Das Unternehmen muss definieren, was in seinem Kontext als sensibel gilt: interne Projektkennzeichen, Kundensegmentierungsmerkmale, sektorspezifische Referenzen. Die Definition muss versioniert werden, denn Sensitivität ist nicht statisch — heute sind es Finanzdaten, morgen ein M&amp;A-Codename, übermorgen Asset-Referenzen einer regulierten Einheit. Eine statische Definition veraltet schnell.</p>

<h3>7.4 Wie der Workflow mit der Ausgabe umgeht</h3>
<p>Die Wiederherstellung muss innerhalb der Unternehmensumgebung erfolgen und in den jeweiligen Auslieferungskanal des Workflows integriert sein — das Ticketing-System, die Dokumentenverwaltungsplattform, die Prüfoberfläche des Analysten. <strong>Ist die Wiederherstellung ein separater manueller Schritt, wird sie von den Nutzern übergangen — und der Wert der Architektur löst sich auf.</strong></p>

<h3>7.5 Was geschieht, wenn sich der externe Endpunkt ändert</h3>
<p>Externe LLMs sind keine stabile Infrastruktur. Modelle werden abgekündigt, Anbieter ändern ihre Preisgestaltung, neue Optionen entstehen. Der Ansatz funktioniert am besten, wenn die Transformationsschicht anbieterneutral ausgelegt ist — wenn der Wechsel von ChatGPT zu Claude oder zu einem neuen Anbieter eine Konfigurationsänderung ist, keine Architekturüberarbeitung.</p>

<h2>8. Die Grenzen dieses Ansatzes — offen benannt</h2>
<p>Der Ansatz löst ein reales Problem — aber nicht jedes Problem. Die Grenzen sind es wert, klar benannt zu werden.</p>
<ul>
  <li><strong>Ungeeignet ist der Ansatz, wenn die eigentliche KI-Aufgabe die Originaldaten erfordert</strong> — Prüfaufgaben, Recherchen, Personalisierungsaufgaben, bei denen der tatsächliche Identifikator den Gegenstand bildet.</li>
  <li><strong>Er erhöht die Latenz.</strong> Erkennung, Transformation und Wiederherstellung erfordern jeweils Zeit. Für die meisten Unternehmens-Workflows ist dies nicht spürbar — der Mehraufwand sind Sekundenbruchteile in einem Workflow, der ohnehin mehrere Sekunden dauert. Für latenzkritische Anwendungen kann der Mehraufwand relevant sein.</li>
  <li><strong>Er erfordert kontinuierliche Investitionen in die Erkennungs- und Definitionsschicht.</strong> Sensitivität ist nicht statisch; Merkmale entwickeln sich mit dem Geschäft; die Definition muss mitentwickelt werden. Ein Team muss diese Verantwortung übernehmen und in enger Abstimmung mit der Geschäftsentwicklung stehen. Technologie einzukaufen, ohne die Definition zu pflegen, führt zur schleichenden Entwertung der Architektur.</li>
  <li><strong>Er ersetzt keine organisatorischen Entscheidungen darüber, welche Daten überhaupt verarbeitet werden sollten.</strong> Einige Workflows sollten unabhängig von jeder Transformation nicht an externe Modelle gesendet werden — die Daten sind zu sensibel, der Workflow zu kritisch, das Fehlerszenario zu kostspielig. Dieser Ansatz ist für Workflows gedacht, bei denen die Antwort <em>"mit der richtigen Architektur sinnvoll einsetzbar"</em> lautet — nicht für Workflows, bei denen die Antwort <em>"grundsätzlich nicht"</em> ist.</li>
  <li><strong>Er setzt voraus, dass das Unternehmen die Schicht in der eigenen Umgebung betreibt.</strong> Anbieter, die diesen Ansatz als externes SaaS anbieten — bei dem die Transformation auf der Anbieterinfrastruktur erfolgt — haben die Architektur in ein anderes Problem überführt. Der Kern des Ansatzes ist, dass die Transformation dort ausgeführt wird, wo die Daten bereits liegen.</li>
</ul>

<h2>9. Konsequenzen für die KI-Strategie</h2>
<p>Für die meisten regulierten Unternehmen in der EU führt der Weg zu produktionsreifen KI-Lösungen im Jahr 2026 über eine Variante dieses Ansatzes. Die wirtschaftlichen Vorteile externer LLMs sind zu erheblich, um sie zu ignorieren. Die Anforderungen an Datenhaltung sind zu real, um sie zu umgehen. Die bestehenden Werkzeuge — Maskierung, On-Premise-Bereitstellung — lösen Teile des Problems, nicht das Ganze.</p>
<p>Dieser Ansatz ist keine abgeschlossene Kategorie. Es gibt Implementierungen von verschiedenen Anbietern mit unterschiedlichen Designentscheidungen zu Erkennung, Transformationsstärke, Wiederherstellungslogik und Bereitstellungstopologie. Die Auswahl hängt von unternehmenssspezifischen Fragen ab: Welche bestehenden Systeme muss die Schicht integrieren? Wie ist die Sensitivitätsdefinition beschaffen? Auf welche Bereitstellungsstrategie hat sich das Sicherheitsteam festgelegt? Wie wird der Workflow-Mix zwischen externen und On-Premise-Modellen aussehen?</p>
<p>Was alle Implementierungen verbindet, sind vier architektonische Kerneigenschaften:</p>
<ol>
  <li>Originaldaten verbleiben innerhalb der Unternehmensgrenze</li>
  <li>Die KI-Leistungsfähigkeit bleibt erhalten</li>
  <li>Die Transformation läuft auf einer Schicht unter Unternehmenskontrolle</li>
  <li>Das Mapping, das die Wiederherstellung ermöglicht, verbleibt unter ausschließlicher Kontrolle des Unternehmens</li>
</ol>
<p>Wenn diese vier Eigenschaften gegeben sind, beginnen Workflows, die im Pilotbetrieb feststeckten, in den Produktivbetrieb überzugehen.</p>
<p>Der eingangs beschriebene Widerspruch löst sich nicht vollständig auf — es wird immer Workflows geben, bei denen Anforderung und Leistungsfähigkeit nicht in Einklang zu bringen sind. Für den breiten Bereich der Unternehmens-KI-Aufgaben ist dieser Ansatz jedoch die architektonische Antwort, die es erlaubt, KI-Strategie und Datenstrategie aus dem Konflikt zu führen.</p>

<div class="takeaways">
  <div class="takeaways__label">Wesentliche Erkenntnisse</div>
  <ul>
    <li>Regulierte Unternehmen stehen vor einem strukturellen Widerspruch: Die leistungsfähigsten KI-Modelle sind extern; die nützlichsten Daten dürfen die Grenze nicht verlassen</li>
    <li>Die drei gängigen Reaktionen — Risiko akzeptieren, Maskierung und Schwärzung, On-Premise-Betrieb — scheitern jeweils an vorhersehbaren Punkten</li>
    <li>Ein anderer Ansatz verändert nicht ob, sondern <em>was</em> die Grenze überquert — durch strukturerhaltende Tokenisierung</li>
    <li>Vier Phasen: Erkennung → Transformation → Externe Verarbeitung → Wiederherstellung</li>
    <li>Geeignet für analytische Workflows mit vorab identifizierbaren sensiblen Elementen; ungeeignet für Personalisierungs- oder Verifikationsaufgaben</li>
    <li>Vier nicht verhandelbare Designeigenschaften: Transformation im Unternehmen, ausschließliche Kontrolle des Mappings, fortlaufend gepflegte Sensitivitätsdefinition, Wiederherstellung als Infrastrukturkomponente</li>
    <li>Grenzen: erhöhte Latenz, laufende Investitionen in die Erkennungsschicht, kein Ersatz für organisatorische Grundsatzentscheidungen</li>
    <li>Anbieterneutral ausgelegt — ein Wechsel zwischen ChatGPT, Claude oder Gemini ist eine Konfigurationsänderung, keine Architekturüberarbeitung</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Wie unterscheidet sich dieser Ansatz von Datenmaskierung?</h3>
<p>Maskierung optimiert für das Entfernte — Namen, IDs und Identifikatoren werden durch Schwärzungsmarkierungen ersetzt. Das funktioniert bei Dokumenten, bei denen der sensible Teil klar abgrenzbar ist, scheitert aber bei operativen Daten, weil die für die KI notwendige Struktur dabei zerstört wird. Der hier beschriebene Ansatz nutzt strukturerhaltende Tokenisierung: Sensible Elemente werden durch Platzhalter ersetzt, die Format, Typ und Beziehungen erhalten — sodass die KI ein kohärentes Dokument verarbeitet. Das Mapping auf die Originalwerte verbleibt im Unternehmen.</p>

<h3>Funktioniert dieser Ansatz mit jedem externen LLM?</h3>
<p>Der Ansatz ist anbieterneutral ausgelegt. Aus Sicht des externen LLM empfängt es eine normale Anfrage — es kann nicht erkennen, dass das Dokument transformiert wurde, und muss es nicht. Ein Wechsel von ChatGPT zu Claude, Gemini oder einem neuen Anbieter ist eine Konfigurationsänderung, keine Architekturüberarbeitung. Die Transformationsschicht ist die Konstante; das externe Modell ist die Variable.</p>

<h3>Was geschieht mit dem Mapping zwischen Token und Originalwerten?</h3>
<p>Das Mapping ist die sensibelste Komponente der Architektur — es ist der Schlüssel zur Re-Identifikation der Daten. Bewährte und gebotene Praxis ist, dass das Mapping ausschließlich vom Unternehmen in einem Speicher gehalten wird, auf den der externe LLM-Anbieter keinen Zugriff hat. Dies ist eine nicht verhandelbare Designeigenschaft. Erlaubt die Architektur eines Anbieters, dass das Mapping das Unternehmen verlässt, kollabiert der Schutz des Ansatzes.</p>

<h3>Wo muss die Transformationsschicht betrieben werden?</h3>
<p>Innerhalb der Unternehmensumgebung — On-Premise, in der unternehmenseigenen Cloud-VPC oder auf dedizierter Infrastruktur unter Unternehmenskontrolle. Die Anforderung ist, dass die Transformation erfolgt, <em>bevor</em> die Daten das externe Netzwerk erreichen. Anbieter, die diesen Ansatz als externes SaaS anbieten, haben die Architektur in ein anderes Problem überführt. Der Kerngedanke ist, dass die Transformation dort ausgeführt wird, wo die Daten bereits liegen.</p>

<h3>Für welche Workflows ist dieser Ansatz nicht geeignet?</h3>
<p>Ungeeignet ist der Ansatz für Workflows, bei denen die KI den tatsächlichen sensiblen Inhalt als Teil ihrer Aufgabe verarbeiten muss: personalisierte Inhalte, die sich direkt an Kunden richten; Prüfworkflows, die gegen den tatsächlichen Identifikator abgleichen müssen; Recherchen, die die Originalzeichenketten erfordern. Als Faustregel gilt: Lässt sich die KI-Ausgabe als <em>"Führe diese analytische Aufgabe durch und berichte das Ergebnis"</em> beschreiben, funktioniert der Ansatz. Erfordert die Ausgabe <em>"Handele bezüglich dieses konkreten Kunden, Falls oder Identifikators"</em>, ist er ungeeignet.</p>

<h3>Wie unterscheidet sich das von einem On-Premise-Open-Source-Modell?</h3>
<p>On-Premise-Bereitstellung löst das Datenproblem, indem die KI-Leistungsfähigkeit durch etwas Internes ersetzt wird — die Daten verlassen das Unternehmen nicht, aber das Modell ist auf die Möglichkeiten des intern betriebenen Systems begrenzt. Das funktioniert, wenn der Workflow so überschaubar ist, dass ein kleineres Modell ausreicht. Der Transformationsschicht-Ansatz behält die führenden externen Modelle und verändert stattdessen, <em>was</em> die Grenze überquert. Die eigentliche Verarbeitungsleistung erbringen weiterhin die leistungsfähigsten Modelle; nur die Form der Daten ist anders.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Running External LLMs on Sensitive Enterprise Data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "AI on network operations data",
    related4Href: "/resources/learn/ai-on-network-operations-data",
  },
}

export default function ExternalLlmOnSensitiveEnterpriseData({
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

addPropertyControls(ExternalLlmOnSensitiveEnterpriseData, {
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
