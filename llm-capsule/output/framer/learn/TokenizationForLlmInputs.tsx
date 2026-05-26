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

const BODY_HTML = `<h2>1. What Tokenisation Actually Does in This Context</h2>
<p>The transformation step that sits between an enterprise document and an external LLM is, conceptually, simple: identify the elements that can't cross the boundary, replace them with placeholders that preserve their structural role, send the result to the model. In practice, the simplicity hides a set of architectural decisions that determine whether the approach works at production scale or breaks under load.</p>
<p>This article walks through those decisions. It is not a tutorial on a specific library or product. It is the set of choices any team adopting pre-LLM tokenisation has to make explicit, with the trade-offs each choice carries.</p>
<p>The term <em>tokenisation</em> is used here in the data-protection sense — replacing sensitive values with non-sensitive placeholders that can be mapped back — not in the NLP sense, where it means splitting text into subword units for model input. <strong>The two share a word and almost nothing else.</strong></p>
<p>A related note on terminology: in CUBIG's architecture, tokenisation is the core substitution mechanism inside a broader <strong>encapsulation layer</strong> that also includes detection, format preservation, and optional statistical protections. This article focuses on the tokenisation mechanism specifically — the design decisions are largely the same whether the implementation calls itself tokenisation, encapsulation, or any of the other names used in the field.</p>
<p>When an enterprise document is prepared for an external LLM, the goal is that the model sees a version of the document that retains everything it needs for the task and removes everything the boundary was set up to keep in. Tokenisation is the mechanism that achieves the second half: identifying sensitive elements and substituting placeholders.</p>
<p>A useful frame: the LLM doesn't need to know that the customer is named <em>Marlene Schmidt</em>. It needs to know that there is a customer, that the customer is referenced in three different places in the document, and that the references all point to the same entity. A token like <code>CUST-7F2A</code> carries the same information — a referenceable entity that appears in multiple places consistently — without carrying the identity.</p>
<p>That is the core property tokenisation provides: <strong>referential integrity without semantic disclosure</strong>. The model can reason about <em>"the customer"</em> across a document because the token threads through the document consistently. The model cannot recover the identity because the token doesn't encode it.</p>
<p>Everything else in this article is variations on how that property is implemented, and what additional properties layer on top of it.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" role="img" aria-labelledby="referential-integrity-title referential-integrity-desc">
      <title id="referential-integrity-title">Referential integrity without semantic disclosure</title>
      <desc id="referential-integrity-desc">A diagram showing a source document where the same customer is referenced three different ways, all resolved to a single consistent token in the version the LLM sees, with the mapping table held inside the enterprise.</desc>

      <defs>
        <marker id="arrow-primary-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>


      <g>
        <rect x="20" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SOURCE DOCUMENT</text>
        <line x1="40" y1="74" x2="340" y2="74" stroke="#e5e7eb" stroke-width="1"/>

        <text x="40" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Header: Customer <tspan font-weight="700" fill="#c73e3a">Marlene Schmidt</tspan></text>
        <text x="40" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">called regarding account dropouts.</text>

        <text x="40" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agent note: &ldquo;<tspan font-weight="700" fill="#c73e3a">Mr Schmidt</tspan> reports the</text>
        <text x="40" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">issue started last Tuesday.&rdquo;</text>

        <text x="40" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Resolution: &ldquo;<tspan font-weight="700" fill="#c73e3a">Marlene</tspan> confirmed</text>
        <text x="40" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">service restored after firmware roll-back.&rdquo;</text>
      </g>


      <g>
        <line x1="370" y1="140" x2="490" y2="140" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary-tk)"/>
        <rect x="380" y="98" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="118" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Entity resolution</text>
        <rect x="380" y="150" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Tokenisation</text>
      </g>


      <g>
        <rect x="500" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="520" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">WHAT THE LLM SEES</text>
        <line x1="520" y1="74" x2="820" y2="74" stroke="#eeebfe" stroke-width="1"/>

        <text x="520" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Header: Customer <tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan></text>
        <text x="520" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">called regarding account dropouts.</text>

        <text x="520" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agent note: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> reports the</text>
        <text x="520" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">issue started last Tuesday.&rdquo;</text>

        <text x="520" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Resolution: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> confirmed</text>
        <text x="520" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">service restored after firmware roll-back.&rdquo;</text>
      </g>


      <g>
        <rect x="280" y="280" width="400" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="300" y="304" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">TOKEN ↔ VALUE MAPPING · enterprise only</text>
        <line x1="300" y1="314" x2="660" y2="314" stroke="#a7e0df" stroke-width="1"/>
        <text x="300" y="334" font-family="Inter, sans-serif" font-size="12" fill="#0f1130"><tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> &nbsp;&rarr;&nbsp; Marlene Schmidt &nbsp;<tspan font-style="italic" fill="#6b7280">(also &ldquo;Mr Schmidt&rdquo;, &ldquo;Marlene&rdquo;)</tspan></text>
        <text x="300" y="352" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" font-style="italic">mapping never leaves the enterprise boundary</text>
      </g>


      <line x1="190" y1="240" x2="380" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="670" y1="240" x2="580" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 &middot; <strong>Three different mentions of the same customer all resolve to one consistent token. The LLM can reason about &ldquo;the customer&rdquo; throughout the document; the mapping back to the real identity stays inside the enterprise.</strong></figcaption>
</figure>

<h2>2. Deterministic vs Randomised Tokenisation</h2>
<p>The first architectural decision is whether a given sensitive value always produces the same token, or whether it produces a different token each time.</p>

<h3>2.1 Deterministic Tokenisation</h3>
<p><strong>Deterministic tokenisation</strong> means <em>Marlene Schmidt</em> always becomes <code>CUST-7F2A</code>, in every document, in every workflow. The token is a function of the value (and usually a secret key).</p>
<p>The benefit is consistency across documents. If two tickets reference the same customer, the LLM sees the same token in both, and analytics that depend on cross-document linkage continue to work. For workflows that aggregate or compare across documents — fraud detection patterns, customer history summaries, cohort analysis — deterministic is usually the only viable choice.</p>
<p>The cost is that determinism creates a <strong>re-identification surface</strong>. An attacker who observes enough tokenised documents and has side information about which customers appear where can correlate tokens to identities. The risk is real for high-volume workflows or for cases where the same entity appears in many tokenised outputs over time.</p>

<h3>2.2 Randomised Tokenisation</h3>
<p><strong>Randomised tokenisation</strong> generates a different token for each occurrence, even of the same value. <em>Marlene Schmidt</em> might become <code>CUST-7F2A</code> in one document and <code>CUST-3B91</code> in another.</p>
<p>The benefit is that no cross-document linkage is exposed. Each tokenised document is a closed system.</p>
<p>The cost is that cross-document analytics break. The LLM can't tell that two tokens refer to the same customer, because at the structural level they don't. For workflows that don't need cross-document linkage — summarising a single document, extracting clauses from a single contract — randomisation is fine. For workflows that do, randomisation forces the linkage to be reconstructed after the LLM responds, which adds complexity.</p>

<h3>2.3 The Hybrid Pattern Most Production Deployments Use</h3>
<p>Most production deployments end up with a hybrid: <strong>deterministic <em>within a workflow scope</em></strong> (so a multi-turn conversation about a customer stays coherent), <strong>randomised <em>across workflow scopes</em></strong> (so analytics from one workflow can't be cross-referenced with another). The boundary of the scope is itself a design decision — by session, by user, by document, by tenant — and is one of the things a team has to settle before the architecture goes live.</p>

<table>
  <thead>
    <tr>
      <th>Choice</th>
      <th>Benefit</th>
      <th>Cost</th>
      <th>Best fit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Deterministic</td>
      <td>Cross-document linkage preserved; analytics work across workflows</td>
      <td>Creates re-identification surface over high-volume workflows</td>
      <td>Fraud detection, customer history, cohort analysis</td>
    </tr>
    <tr>
      <td>Randomised</td>
      <td>Each tokenised document is a closed system; no cross-document linkage exposed</td>
      <td>Cross-document analytics break; linkage must be reconstructed post-LLM</td>
      <td>Single-document summarisation, single-contract extraction</td>
    </tr>
    <tr>
      <td>Hybrid (deterministic within scope, randomised across)</td>
      <td>Coherent within a session/user/tenant boundary; isolated across</td>
      <td>The scope boundary itself becomes a design decision</td>
      <td>Most production deployments</td>
    </tr>
  </tbody>
</table>

<h2>3. Format-Preserving Tokenisation — Why Placeholder Strings Aren't Enough</h2>
<p>A naive implementation replaces sensitive values with generic placeholders: <code>[CUSTOMER]</code>, <code>[ACCOUNT_NUMBER]</code>, <code>[DATE]</code>. The LLM sees a document littered with these markers and tries to reason about it.</p>
<p>This works poorly in practice for a specific reason: the LLM's reasoning is shaped by the surface form of the input. A document that reads <em>"Customer Marlene Schmidt called on 2026-03-15 about account 4471-9028"</em> is, to the model, a coherent operational record. The same document with placeholders — <em>"Customer [CUSTOMER] called on [DATE] about account [ACCOUNT_NUMBER]"</em> — reads as a template or a redaction notice. <strong>Models are sensitive to that signal, and their outputs degrade accordingly</strong>: summaries become more abstract, extraction becomes less precise, and the model occasionally lapses into commentary about the redaction itself.</p>
<p><strong>Format-preserving tokenisation</strong> generates tokens that look like the values they replace. A name becomes a plausible-looking name token: <code>Lyra Vesper</code>. A date becomes a real date in a plausible range. An account number becomes a number of the same length, in the same format, that isn't a real account number.</p>
<p>The document the LLM sees reads as a coherent operational document with anonymous-but-realistic stand-ins. The model's outputs come back at the quality the model can actually produce, rather than degraded by the perception that it's being asked to reason about a template.</p>
<p>Format preservation has its own design choices: how plausible to make the tokens, whether to draw from a fixed pool of fake names or generate them on the fly, how to handle dates and numerics where the <em>value</em> itself has analytical meaning (a date in 2019 vs a date in 2024 may matter to the analysis even if the exact date is sensitive). <strong>The general rule is that the token has to preserve whatever analytical property the original value carried, no more and no less.</strong></p>

<h2>4. Where the Mapping Lives</h2>
<p>Tokenisation only protects the data if the mapping — the table that connects tokens to original values — stays inside the enterprise environment. <strong>This is the part of the architecture that most consistently determines whether the approach actually delivers its protection.</strong></p>
<p>Three properties of the mapping have to hold:</p>
<ol>
  <li><strong>It stays in the enterprise's exclusive control.</strong> The mapping is, in effect, the key that re-identifies the data. If it leaves the environment, the protection collapses to whatever protection the new location provides. For workflows where data must stay in the EU region or other defined boundaries, the mapping has to live within that same boundary — colocated with the source systems, not with the AI endpoint.</li>
  <li><strong>It is integrity-protected.</strong> Tampering with the mapping changes what gets reconstructed when the LLM's response comes back. An attacker who can modify the mapping can substitute identities in the output. Standard practice is to apply integrity checks to the mapping itself — signed entries, audit logs of access — so that any tampering is detectable.</li>
  <li><strong>It is access-controlled separately from the LLM workflow.</strong> The team that operates the LLM integration doesn't need read access to the mapping. The reconstruction step pulls from the mapping programmatically; it doesn't require humans to see the original values. Separating those two access paths means the mapping can be governed under stricter controls than the LLM workflow itself.</li>
</ol>
<p>Storage technology is secondary to these properties. The mapping can live in a dedicated database, a key-value store, an encrypted file, or a hardware-backed vault — the architectural choice depends on volume, latency requirements, and existing infrastructure. <strong>What matters is that the three properties above are non-negotiable design constraints, not configurable options.</strong></p>

<h2>5. Token Consistency — Same Entity, Same Token</h2>
<p>A subtler design problem: ensuring that the same entity gets the same token, consistently, even when the entity is referenced in different ways across a document.</p>
<p>A service ticket might mention <em>"the customer,"</em> then <em>"Mr Schmidt,"</em> then <em>"Marlene,"</em> then <em>"the subscriber"</em> — all referring to the same person. A naive tokeniser sees four different mentions and produces four different tokens, breaking the LLM's ability to track that these all refer to one entity. <strong>The summary that comes back may treat them as four people.</strong></p>
<p>Resolving this requires <strong>entity resolution</strong> before tokenisation: identifying which mentions in a document refer to the same underlying entity, and ensuring they all map to the same token. This is a non-trivial problem in general — entity resolution is a research field of its own — but in practice it's tractable because enterprise documents have structural cues (a customer ID in the header tying together free-text mentions, formal naming conventions in operational logs, schema-defined relationships in structured records).</p>
<p>The other half of consistency is across documents within a workflow scope. If two tickets reference the same customer, and the workflow needs to treat them as related, the tokenisation has to produce the same token for the customer in both. This is where the deterministic-vs-randomised choice from earlier interacts: <strong>deterministic-within-scope is what enables the LLM to see <em>"the same customer appears in three tickets"</em> without learning who the customer is.</strong></p>
<p>A well-designed tokenisation layer handles both kinds of consistency — within-document and within-scope — as part of the transformation, not as an afterthought. Teams that retrofit consistency onto a per-mention tokeniser usually find the workflow degrades in ways that look like model quality problems but are actually data preparation problems.</p>

<h2>6. Additional Protection Layers — When Tokenisation Alone Isn't Enough</h2>
<p>Tokenisation handles the substitution problem. For most workflows, well-implemented tokenisation with the mapping under the enterprise's exclusive control is sufficient. For some workflows, an additional layer of protection is worth adding on top.</p>
<p>The case for additional protection arises when the residual risk is not in the tokens themselves but in <strong>the patterns the tokens form</strong>. A tokenised document may contain enough structural information — frequencies, co-occurrences, sequences, ratios — that a sophisticated correlator could re-identify entities even without the raw values. The risk is particularly relevant for high-cardinality data, long time series, and workflows where many tokenised outputs accumulate over time.</p>
<p>The standard responses are differential privacy, k-anonymity, and similar statistical protections applied to the tokenised data. Each adds noise or aggregation in a controlled way that limits how much an attacker can learn from the tokenised output, at the cost of some analytical precision. Whether the trade-off is worth it depends on the threat model and the workflow's tolerance for noise.</p>
<p>For most enterprise AI workflows this layer is optional. For workflows where the data is highly sensitive, the volume is high, or the data posture demands defence in depth, it is worth the complexity. <strong>The decision is best made workflow by workflow, not as a global setting.</strong></p>

<h2>7. What Not to Tokenise</h2>
<p>A final design question that often gets answered by accident: what <em>not</em> to tokenise.</p>
<p>Tokenising the wrong things degrades the AI's output without improving protection. A tokeniser that replaces every proper noun produces unreadable documents. A tokeniser that replaces every numeric field destroys analytical signal. The temptation is to be aggressive — <em>"tokenise everything that could conceivably be sensitive"</em> — but the cost shows up immediately in output quality.</p>
<p>The disciplined approach is to define sensitivity explicitly, in the enterprise's own terms, and tokenise only those elements. <strong>Generic PII categories are a starting point, not a complete list.</strong> Internal project codes, customer-segment identifiers, sector-specific references — whatever the enterprise's data posture treats as protected — go on the list. Everything else stays.</p>
<p>The list has to be versioned, because what counts as sensitive changes over time. It also has to be auditable, because an audit review of the workflow will want to know what was tokenised, when, under which definition. <strong>The definition layer is where most of the long-term operational cost of this architecture lives, and where most teams under-invest at the start.</strong></p>

<h2>8. The Next Step in the Workflow</h2>
<p>Tokenisation prepares the document for the external model. The model processes the tokenised document and returns a tokenised response. <strong>The response, on its own, is not yet useful to the workflow</strong> — the tokens have to be mapped back to original values inside the enterprise environment before the output reaches the user.</p>
<p>That reconstruction step is the subject of the next article in this series. For the broader pattern this article is part of, see the pillar overview on <a href="/resources/learn/external-llm-on-sensitive-enterprise-data">running external LLMs on sensitive enterprise data</a>. For why masking and redaction don't substitute for tokenisation in operational workflows, see the article on <a href="/resources/learn/why-ai-stalls-on-operational-data">why AI workflows stall on operational data</a>.</p>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Is tokenisation here the same as NLP tokenisation?","acceptedAnswer":{"@type":"Answer","text":"No — they share a word and almost nothing else. In NLP, tokenisation means splitting text into subword units that a model consumes (BPE, WordPiece, SentencePiece). In data protection, tokenisation means replacing a sensitive value with a non-sensitive placeholder that can be mapped back to the original. The two run at completely different layers of the stack. The data-protection sense is what this article is about."}}, {"@type":"Question","name":"When should deterministic tokenisation be used instead of randomised?","acceptedAnswer":{"@type":"Answer","text":"Deterministic tokenisation produces the same token for the same value every time, which is what enables cross-document analytics: fraud detection patterns, customer history summaries, cohort analysis. Randomised tokenisation produces a different token each occurrence, which avoids cross-document linkage but breaks workflows that depend on it. Most production deployments end up hybrid — deterministic within a workflow scope (so a multi-turn conversation stays coherent), randomised across scopes (so analytics from one workflow can't be cross-referenced with another)."}}, {"@type":"Question","name":"Why do placeholders like [REDACTED] degrade LLM output?","acceptedAnswer":{"@type":"Answer","text":"Because the LLM's reasoning is shaped by the surface form of the input. A document that reads as a coherent operational record produces normal-quality output. The same document littered with [CUSTOMER] and [ACCOUNT_NUMBER] markers reads as a template or a redaction notice, and the model's output degrades accordingly — summaries become more abstract, extraction loses precision, and the model occasionally drifts into commentary about the redaction itself. Format-preserving tokens (plausible-looking names, real dates in a plausible range, account numbers of the same length and format) avoid this entirely."}}, {"@type":"Question","name":"Where does the token-to-value mapping have to live?","acceptedAnswer":{"@type":"Answer","text":"Inside the enterprise environment, in storage colocated with the source systems rather than with the AI endpoint. The mapping is in effect the key that re-identifies the data — if it leaves the environment, the protection collapses. Three properties have to hold: exclusive enterprise control, integrity protection (so tampering is detectable), and access controls separate from the LLM workflow itself. Storage technology is secondary to these properties."}}, {"@type":"Question","name":"What is entity resolution and why does it matter for tokenisation?","acceptedAnswer":{"@type":"Answer","text":"A document may refer to the same person as 'the customer,' 'Mr Schmidt,' 'Marlene,' and 'the subscriber' — four mentions, one entity. A naive tokeniser produces four different tokens and breaks the LLM's ability to track them as one person. Entity resolution is the step that identifies which mentions refer to the same underlying entity, so they all map to the same token. Enterprise documents usually have structural cues (header IDs, naming conventions, schema relationships) that make this tractable."}}, {"@type":"Question","name":"When is tokenisation alone not enough?","acceptedAnswer":{"@type":"Answer","text":"When the residual risk lies not in the tokens themselves but in the patterns the tokens form — frequencies, co-occurrences, sequences, ratios that could enable re-identification even without the raw values. This is most relevant for high-cardinality data, long time series, or workflows where many tokenised outputs accumulate over time. Differential privacy, k-anonymity, and related statistical protections can be applied on top of tokenisation. The trade-off is some analytical precision in exchange for stronger guarantees. The decision is best made workflow by workflow rather than as a global setting."}} ] }`

export default function TokenizationForLlmInputs({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
  lead = "The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.",
  category = "AI Architecture",
  readTime = "~9 min read",
  dateUpdated = "Updated May 2026",
  tldrLabel = "TL;DR",
  tldrBody = "Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "en-GB",
  breadcrumbLabel = "Tokenization for LLM Inputs",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
  related1Href = "/resources/learn/reconstructing-ai-output",
  related2Title = "Running External LLMs on Data Your Company Can't Send Externally",
  related2Href = "/resources/learn/external-llm-on-sensitive-enterprise-data",
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

addPropertyControls(TokenizationForLlmInputs, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~9 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "Updated May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "Tokenization for LLM Inputs" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/reconstructing-ai-output" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Running External LLMs on Data Your Company Can't Send Externally" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/external-llm-on-sensitive-enterprise-data" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/why-ai-stalls-on-operational-data" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
