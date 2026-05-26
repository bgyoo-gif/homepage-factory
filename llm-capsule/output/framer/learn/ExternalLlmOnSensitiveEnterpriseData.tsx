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

export default function ExternalLlmOnSensitiveEnterpriseData({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "Running External LLMs on Data Your Company Can't Send Externally",
  lead = "Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.",
  category = "AI Architecture",
  readTime = "~10 min read",
  dateUpdated = "May 2026",
  tldrLabel = "TL;DR",
  tldrBody = "External LLMs produce measurably better output than what most enterprises can run internally — but regulated companies can't send their actual operational data to them. The three standard responses — send and accept the risk, mask and redact, or run an on-premise model — each break at a predictable point. A different approach changes what crosses the boundary rather than whether to cross it: sensitive elements are replaced with structure-preserving tokens inside the enterprise environment, the external LLM works on the tokenised version, and the response is reconstructed internally. The original data never leaves; the frontier-model capability is preserved. This isn't universal — it fits analytical workflows where sensitive elements are identifiable in advance, not personalisation or verification tasks that require the literal identifier. Four design properties define a sound implementation: transformation inside the enterprise environment, exclusive enterprise control of the mapping, a sensitivity definition that evolves with the business, and reconstruction that runs as infrastructure rather than as a manual step.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "en-GB",
  breadcrumbLabel = "Running External LLMs on Sensitive Enterprise Data",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Differential privacy for enterprise LLM",
  related1Href = "/resources/learn/differential-privacy-for-enterprise-llm",
  related2Title = "Sovereign AI for European enterprises",
  related2Href = "/resources/learn/sovereign-ai-european-enterprises",
  related3Title = "On-prem LLM execution path",
  related3Href = "/resources/learn/on-prem-llm-execution-path",
  related4Title = "AI on network operations data",
  related4Href = "/resources/learn/ai-on-network-operations-data",
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

addPropertyControls(ExternalLlmOnSensitiveEnterpriseData, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Running External LLMs on Data Your Company Can't Send Externally" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~10 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "External LLMs produce measurably better output than what most enterprises can run internally — but regulated companies can't send their actual operational data to them. The three standard responses — send and accept the risk, mask and redact, or run an on-premise model — each break at a predictable point. A different approach changes what crosses the boundary rather than whether to cross it: sensitive elements are replaced with structure-preserving tokens inside the enterprise environment, the external LLM works on the tokenised version, and the response is reconstructed internally. The original data never leaves; the frontier-model capability is preserved. This isn't universal — it fits analytical workflows where sensitive elements are identifiable in advance, not personalisation or verification tasks that require the literal identifier. Four design properties define a sound implementation: transformation inside the enterprise environment, exclusive enterprise control of the mapping, a sensitivity definition that evolves with the business, and reconstruction that runs as infrastructure rather than as a manual step.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "Running External LLMs on Sensitive Enterprise Data" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Differential privacy for enterprise LLM" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/differential-privacy-for-enterprise-llm" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Sovereign AI for European enterprises" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/sovereign-ai-european-enterprises" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "On-prem LLM execution path" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/on-prem-llm-execution-path" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "AI on network operations data" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "/resources/learn/ai-on-network-operations-data" },
})
