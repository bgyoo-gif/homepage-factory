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

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
    lead: "The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.",
    category: "AI Architecture",
    readTime: "~9 min read",
    dateUpdated: "Updated May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Tokenization for LLM Inputs",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related1Href: "/resources/learn/reconstructing-ai-output",
    related2Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related2Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "LLM 입력을 위한 토큰화: AI가 보지 않고 읽는 방법",
    lead: "프로덕션에서 LLM 이전 토큰화가 작동하게 만드는 아키텍처 결정들 — 결정적 vs 무작위, 형식 보존, 매핑 저장, 그리고 팀이 배포 전에 해결해야 할 질문들.",
    category: "AI 아키텍처",
    readTime: "약 9분 읽기",
    dateUpdated: "2026년 5월 업데이트",
    tldrLabel: "TL;DR",
    tldrBody: "LLM 이전 토큰화는 엔터프라이즈 문서가 민감한 내용을 노출하지 않고 외부 모델로 경계를 넘을 수 있게 해주는 치환 단계입니다. 의미론적 공개 없이 LLM에 참조적 무결성을 제공하는 방식으로 작동합니다. 모델이 기저 신원을 복원하지 않고도 문서 전체에서 일관되게 추론할 수 있는 플레이스홀더를 제공합니다. 프로덕션 수준의 구현은 아키텍처 질문들을 명시적으로 해결해야 합니다. 결정적 vs 무작위(문서 간 연결 vs 재식별 표면), 형식 보존 vs 마커 방식(출력 품질 vs 단순성), 매핑의 위치(독점적 엔터프라이즈 통제는 협상 불가), 언급 간 엔티티 해소, 그리고 토큰화하지 않아야 할 것. 대부분의 워크플로우에는 토큰화만으로 충분합니다. 고카디날리티 데이터, 긴 시계열, 또는 심층 방어 태세의 경우 통계적 보호(차분 프라이버시, k-익명성)가 위에 추가됩니다. 민감한 것의 정의는 대부분의 팀이 초기에 충분히 투자하지 않는 레이어이며, 장기 운영 비용의 대부분이 이곳에 있습니다.",
    bodyHtml: `<h2>1. 이 맥락에서 토큰화가 실제로 하는 일</h2>
<p>엔터프라이즈 문서와 외부 LLM 사이에 위치한 변환 단계는 개념적으로 단순합니다. 경계를 넘을 수 없는 요소를 식별하고, 구조적 역할을 보존하는 플레이스홀더로 교체하고, 결과를 모델에 전송합니다. 실제로는 이 단순함 뒤에 접근 방식이 프로덕션 규모에서 작동할지 부하 하에서 깨질지를 결정하는 아키텍처 결정들이 숨어 있습니다.</p>
<p>이 아티클은 그 결정들을 하나씩 살펴봅니다. 특정 라이브러리나 제품에 대한 튜토리얼이 아닙니다. LLM 이전 토큰화를 도입하는 모든 팀이 명시적으로 해야 하는 선택들과 각 선택이 수반하는 트레이드오프입니다.</p>
<p>여기서 <em>토큰화</em>라는 용어는 데이터 보호 의미로 사용됩니다. 민감한 값을 다시 매핑할 수 있는 비민감 플레이스홀더로 교체하는 것을 의미하며, 모델 입력을 위해 텍스트를 서브워드 단위로 분할하는 NLP 의미가 아닙니다. <strong>두 용어는 단어를 공유하지만 거의 아무것도 공유하지 않습니다.</strong></p>
<p>용어에 관한 관련 메모: CUBIG의 아키텍처에서 토큰화는 감지, 형식 보존, 선택적 통계적 보호도 포함하는 더 넓은 <strong>캡슐화 레이어</strong> 내의 핵심 치환 메커니즘입니다. 이 아티클은 토큰화 메커니즘에 특별히 집중합니다. 구현이 스스로를 토큰화, 캡슐화, 또는 해당 분야에서 사용되는 다른 이름으로 부르든 설계 결정은 대체로 동일합니다.</p>
<p>엔터프라이즈 문서가 외부 LLM을 위해 준비될 때, 목표는 모델이 작업에 필요한 모든 것을 유지하고 경계가 내부에 두도록 설정된 모든 것을 제거한 문서 버전을 보는 것입니다. 토큰화는 두 번째 절반을 달성하는 메커니즘입니다. 민감한 요소를 식별하고 플레이스홀더로 치환합니다.</p>
<p>유용한 프레임: LLM은 고객의 이름이 <em>Marlene Schmidt</em>라는 것을 알 필요가 없습니다. 고객이 있다는 것, 고객이 문서의 세 곳에서 참조된다는 것, 모든 참조가 동일한 엔티티를 가리킨다는 것을 알아야 합니다. <code>CUST-7F2A</code> 같은 토큰은 신원을 담지 않고 동일한 정보를 전달합니다. 여러 곳에 일관되게 나타나는 참조 가능한 엔티티입니다.</p>
<p>이것이 토큰화가 제공하는 핵심 속성입니다. <strong>의미론적 공개 없는 참조적 무결성</strong>. 토큰이 문서 전체에 일관되게 이어지기 때문에 모델은 문서 전반에 걸쳐 <em>"고객"</em>에 대해 추론할 수 있습니다. 토큰이 신원을 인코딩하지 않기 때문에 모델은 신원을 복원할 수 없습니다.</p>
<p>이 아티클의 나머지 모든 내용은 그 속성이 구현되는 방식의 변형과, 그 위에 어떤 추가 속성이 쌓이는지에 관한 것입니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" role="img" aria-labelledby="referential-integrity-title referential-integrity-desc">
      <title id="referential-integrity-title">의미론적 공개 없는 참조적 무결성</title>
      <desc id="referential-integrity-desc">동일한 고객이 세 가지 다른 방식으로 참조된 소스 문서를 보여주는 다이어그램. LLM이 보는 버전에서는 모두 하나의 일관된 토큰으로 해소되며, 매핑 테이블은 엔터프라이즈 내부에 보관됩니다.</desc>

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
        <text x="40" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">소스 문서</text>
        <line x1="40" y1="74" x2="340" y2="74" stroke="#e5e7eb" stroke-width="1"/>

        <text x="40" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">헤더: 고객 <tspan font-weight="700" fill="#c73e3a">Marlene Schmidt</tspan></text>
        <text x="40" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">가 계정 이탈에 관해 연락했습니다.</text>

        <text x="40" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">상담원 메모: &ldquo;<tspan font-weight="700" fill="#c73e3a">Schmidt 씨</tspan>가 지난</text>
        <text x="40" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">화요일부터 문제가 시작되었다고 보고했습니다.&rdquo;</text>

        <text x="40" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">해결: &ldquo;<tspan font-weight="700" fill="#c73e3a">Marlene</tspan>이 펌웨어</text>
        <text x="40" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">롤백 후 서비스 복원을 확인했습니다.&rdquo;</text>
      </g>


      <g>
        <line x1="370" y1="140" x2="490" y2="140" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary-tk)"/>
        <rect x="380" y="98" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="118" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">엔티티 해소</text>
        <rect x="380" y="150" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">토큰화</text>
      </g>


      <g>
        <rect x="500" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="520" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">LLM이 보는 것</text>
        <line x1="520" y1="74" x2="820" y2="74" stroke="#eeebfe" stroke-width="1"/>

        <text x="520" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">헤더: 고객 <tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan></text>
        <text x="520" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">가 계정 이탈에 관해 연락했습니다.</text>

        <text x="520" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">상담원 메모: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan>가 지난</text>
        <text x="520" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">화요일부터 문제가 시작되었다고 보고했습니다.&rdquo;</text>

        <text x="520" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">해결: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan>가 펌웨어</text>
        <text x="520" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">롤백 후 서비스 복원을 확인했습니다.&rdquo;</text>
      </g>


      <g>
        <rect x="280" y="280" width="400" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="300" y="304" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">토큰 ↔ 값 매핑 · 엔터프라이즈 전용</text>
        <line x1="300" y1="314" x2="660" y2="314" stroke="#a7e0df" stroke-width="1"/>
        <text x="300" y="334" font-family="Inter, sans-serif" font-size="12" fill="#0f1130"><tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> &nbsp;&rarr;&nbsp; Marlene Schmidt &nbsp;<tspan font-style="italic" fill="#6b7280">(또한 &ldquo;Schmidt 씨&rdquo;, &ldquo;Marlene&rdquo;)</tspan></text>
        <text x="300" y="352" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" font-style="italic">매핑은 절대 엔터프라이즈 경계를 벗어나지 않습니다</text>
      </g>


      <line x1="190" y1="240" x2="380" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="670" y1="240" x2="580" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 &middot; <strong>동일한 고객의 세 가지 다른 언급이 모두 하나의 일관된 토큰으로 해소됩니다. LLM은 문서 전체에서 &ldquo;고객&rdquo;에 대해 추론할 수 있습니다. 실제 신원으로의 매핑은 엔터프라이즈 내부에 유지됩니다.</strong></figcaption>
</figure>

<h2>2. 결정적 토큰화 vs 무작위 토큰화</h2>
<p>첫 번째 아키텍처 결정은 주어진 민감한 값이 항상 동일한 토큰을 생성하는지, 아니면 매번 다른 토큰을 생성하는지입니다.</p>

<h3>2.1 결정적 토큰화</h3>
<p><strong>결정적 토큰화</strong>는 <em>Marlene Schmidt</em>가 모든 문서에서, 모든 워크플로우에서 항상 <code>CUST-7F2A</code>가 된다는 것을 의미합니다. 토큰은 값(그리고 보통 비밀 키)의 함수입니다.</p>
<p>이점은 문서 간 일관성입니다. 두 티켓이 동일한 고객을 참조하면 LLM은 두 곳에서 동일한 토큰을 보고, 문서 간 연결에 의존하는 분석이 계속 작동합니다. 문서 전체를 집계하거나 비교하는 워크플로우, 즉 사기 감지 패턴, 고객 이력 요약, 코호트 분석에서는 결정적 방식이 보통 유일하게 실행 가능한 선택입니다.</p>
<p>비용은 결정론이 <strong>재식별 표면</strong>을 만든다는 것입니다. 충분한 토큰화된 문서를 관찰하고 어떤 고객이 어디에 나타나는지에 대한 부가 정보를 가진 공격자는 토큰을 신원과 연관지을 수 있습니다. 위험은 대용량 워크플로우 또는 동일한 엔티티가 시간이 지남에 따라 많은 토큰화된 출력에 나타나는 경우에 실재합니다.</p>

<h3>2.2 무작위 토큰화</h3>
<p><strong>무작위 토큰화</strong>는 동일한 값이라도 발생할 때마다 다른 토큰을 생성합니다. <em>Marlene Schmidt</em>는 한 문서에서 <code>CUST-7F2A</code>가 되고 다른 문서에서 <code>CUST-3B91</code>이 될 수 있습니다.</p>
<p>이점은 문서 간 연결이 노출되지 않는다는 것입니다. 토큰화된 각 문서는 독립된 시스템입니다.</p>
<p>비용은 문서 간 분석이 깨진다는 것입니다. LLM은 두 토큰이 동일한 고객을 참조한다고 알 수 없습니다. 구조적 수준에서 그렇지 않기 때문입니다. 문서 간 연결이 필요하지 않은 워크플로우, 즉 단일 문서 요약, 단일 계약에서 조항 추출의 경우 무작위화가 적합합니다. 필요한 워크플로우에서는 무작위화로 인해 LLM이 응답한 후 연결을 복원해야 하며, 이는 복잡성을 추가합니다.</p>

<h3>2.3 대부분의 프로덕션 배포가 사용하는 하이브리드 패턴</h3>
<p>대부분의 프로덕션 배포는 하이브리드로 귀결됩니다. <strong>워크플로우 범위 내에서는 결정적</strong>(고객에 대한 멀티턴 대화가 일관성을 유지하도록), <strong>워크플로우 범위 간에는 무작위</strong>(한 워크플로우의 분석이 다른 워크플로우와 상호 참조될 수 없도록). 범위의 경계 자체가 설계 결정입니다. 세션별, 사용자별, 문서별, 테넌트별로 정의되며, 아키텍처가 라이브되기 전에 팀이 해결해야 하는 사항 중 하나입니다.</p>

<table>
  <thead>
    <tr>
      <th>선택</th>
      <th>이점</th>
      <th>비용</th>
      <th>최적 용도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>결정적</td>
      <td>문서 간 연결 보존; 워크플로우 전반에서 분석 가능</td>
      <td>대용량 워크플로우에서 재식별 표면 생성</td>
      <td>사기 감지, 고객 이력, 코호트 분석</td>
    </tr>
    <tr>
      <td>무작위</td>
      <td>토큰화된 각 문서가 독립 시스템; 문서 간 연결 미노출</td>
      <td>문서 간 분석 불가; LLM 이후 연결 복원 필요</td>
      <td>단일 문서 요약, 단일 계약 추출</td>
    </tr>
    <tr>
      <td>하이브리드 (범위 내 결정적, 범위 간 무작위)</td>
      <td>세션/사용자/테넌트 경계 내에서 일관성 유지; 범위 간 격리</td>
      <td>범위 경계 자체가 설계 결정이 됨</td>
      <td>대부분의 프로덕션 배포</td>
    </tr>
  </tbody>
</table>

<h2>3. 형식 보존 토큰화 — 플레이스홀더 문자열이 충분하지 않은 이유</h2>
<p>단순한 구현은 민감한 값을 일반 플레이스홀더로 교체합니다. <code>[CUSTOMER]</code>, <code>[ACCOUNT_NUMBER]</code>, <code>[DATE]</code>. LLM은 이런 마커들로 가득 찬 문서를 보고 추론을 시도합니다.</p>
<p>이것은 실제로 특정 이유로 잘 작동하지 않습니다. LLM의 추론은 입력의 표면 형태에 의해 형성됩니다. <em>"고객 Marlene Schmidt가 2026-03-15에 계정 4471-9028에 관해 연락했습니다"</em>라고 읽히는 문서는 모델에게 일관된 운영 기록입니다. 플레이스홀더가 있는 동일한 문서, 즉 <em>"고객 [CUSTOMER]가 [DATE]에 계정 [ACCOUNT_NUMBER]에 관해 연락했습니다"</em>는 템플릿이나 검열 통지처럼 읽힙니다. <strong>모델은 그 신호에 민감하고, 그에 따라 출력이 저하됩니다.</strong> 요약이 더 추상적이 되고, 추출이 덜 정확해지며, 모델이 가끔 검열 자체에 대한 코멘트로 빠집니다.</p>
<p><strong>형식 보존 토큰화</strong>는 교체하는 값처럼 보이는 토큰을 생성합니다. 이름은 그럴듯하게 보이는 이름 토큰이 됩니다. <code>Lyra Vesper</code>. 날짜는 그럴듯한 범위의 실제 날짜가 됩니다. 계정 번호는 실제 계정 번호가 아닌 동일한 길이, 동일한 형식의 숫자가 됩니다.</p>
<p>LLM이 보는 문서는 익명이지만 현실적인 대역이 있는 일관된 운영 문서로 읽힙니다. 모델의 출력은 템플릿에 대해 추론하도록 요청받는다는 인식으로 저하되지 않고 모델이 실제로 생성할 수 있는 품질로 반환됩니다.</p>
<p>형식 보존에는 자체적인 설계 선택이 있습니다. 토큰을 얼마나 그럴듯하게 만들지, 고정된 가짜 이름 풀에서 가져올지 즉석에서 생성할지, <em>값</em> 자체가 분석적 의미를 가지는 날짜와 숫자를 어떻게 처리할지(정확한 날짜가 민감하더라도 2019년 날짜 vs 2024년 날짜는 분석에 중요할 수 있습니다). <strong>일반 규칙은 토큰이 원래 값이 가진 분석적 속성을 그 이상도 이하도 아닌 정확히 보존해야 한다는 것입니다.</strong></p>

<h2>4. 매핑의 위치</h2>
<p>토큰화는 매핑, 즉 토큰을 원래 값에 연결하는 테이블이 엔터프라이즈 환경 내부에 유지될 때만 데이터를 보호합니다. <strong>이것은 접근 방식이 실제로 보호를 제공하는지 가장 일관되게 결정하는 아키텍처 부분입니다.</strong></p>
<p>매핑의 세 가지 속성이 유지되어야 합니다.</p>
<ol>
  <li><strong>엔터프라이즈의 독점적 통제 하에 유지됩니다.</strong> 매핑은 사실상 데이터를 재식별하는 키입니다. 환경을 벗어나면 보호는 새 위치가 제공하는 보호 수준으로 무너집니다. 데이터가 EU 리전이나 다른 정의된 경계에 있어야 하는 워크플로우에서 매핑은 동일한 경계 내, AI 엔드포인트가 아닌 소스 시스템과 함께 위치해야 합니다.</li>
  <li><strong>무결성이 보호됩니다.</strong> 매핑을 변조하면 LLM의 응답이 돌아왔을 때 복원되는 내용이 변경됩니다. 매핑을 수정할 수 있는 공격자는 출력에서 신원을 교체할 수 있습니다. 표준 관행은 매핑 자체에 무결성 검사를 적용하는 것입니다. 서명된 항목, 접근 감사 로그. 이를 통해 변조를 감지할 수 있습니다.</li>
  <li><strong>LLM 워크플로우와 별도로 접근이 제어됩니다.</strong> LLM 연동을 운영하는 팀은 매핑에 대한 읽기 접근 권한이 필요하지 않습니다. 복원 단계는 프로그래밍 방식으로 매핑에서 가져옵니다. 사람이 원래 값을 볼 필요가 없습니다. 두 접근 경로를 분리하면 매핑을 LLM 워크플로우 자체보다 더 엄격한 통제 하에 관리할 수 있습니다.</li>
</ol>
<p>저장 기술은 이러한 속성에 부차적입니다. 매핑은 전용 데이터베이스, 키-값 저장소, 암호화된 파일, 또는 하드웨어 기반 볼트에 있을 수 있습니다. 아키텍처 선택은 볼륨, 지연 요구 사항, 기존 인프라에 따라 달라집니다. <strong>중요한 것은 위의 세 가지 속성이 구성 가능한 옵션이 아닌 협상 불가의 설계 제약이라는 것입니다.</strong></p>

<h2>5. 토큰 일관성 — 동일 엔티티, 동일 토큰</h2>
<p>더 미묘한 설계 문제: 엔티티가 문서 전체에서 다른 방식으로 참조되더라도 동일한 엔티티가 일관되게 동일한 토큰을 받도록 보장하는 것입니다.</p>
<p>서비스 티켓은 <em>"고객"</em>, 그다음 <em>"Schmidt 씨"</em>, 그다음 <em>"Marlene"</em>, 그다음 <em>"가입자"</em>를 언급할 수 있습니다. 모두 동일한 사람을 참조합니다. 단순한 토크나이저는 네 가지 다른 언급을 보고 네 가지 다른 토큰을 생성하여, LLM이 이 모두가 하나의 엔티티를 참조한다는 것을 추적하는 능력을 방해합니다. <strong>돌아오는 요약이 그들을 네 사람으로 처리할 수 있습니다.</strong></p>
<p>이를 해결하려면 토큰화 이전에 <strong>엔티티 해소</strong>가 필요합니다. 문서에서 어떤 언급이 동일한 기저 엔티티를 참조하는지 식별하고, 모두 동일한 토큰으로 매핑되도록 보장합니다. 이것은 일반적으로 비사소한 문제입니다. 엔티티 해소는 그 자체로 연구 분야입니다. 하지만 실제로는 처리 가능합니다. 엔터프라이즈 문서에는 구조적 단서가 있기 때문입니다(자유 텍스트 언급을 연결하는 헤더의 고객 ID, 운영 로그의 공식 명명 규칙, 구조화된 레코드의 스키마 정의 관계).</p>
<p>일관성의 다른 절반은 워크플로우 범위 내의 문서 간에 있습니다. 두 티켓이 동일한 고객을 참조하고 워크플로우가 그들을 관련된 것으로 처리해야 한다면, 토큰화는 두 곳에서 고객에 대해 동일한 토큰을 생성해야 합니다. 이것이 앞서의 결정적-vs-무작위 선택이 상호작용하는 지점입니다. <strong>범위 내 결정적 방식이 LLM이 고객이 누구인지 알지 못하면서도 <em>"동일한 고객이 세 티켓에 나타난다"</em>를 볼 수 있게 하는 것입니다.</strong></p>
<p>잘 설계된 토큰화 레이어는 두 가지 일관성, 즉 문서 내와 범위 내를 변환의 일부로 처리합니다. 부차적인 것이 아닙니다. 언급별 토크나이저에 일관성을 소급 적용하는 팀은 일반적으로 모델 품질 문제처럼 보이지만 실제로는 데이터 준비 문제인 방식으로 워크플로우가 저하되는 것을 발견합니다.</p>

<h2>6. 추가 보호 레이어 — 토큰화만으로 충분하지 않을 때</h2>
<p>토큰화는 치환 문제를 처리합니다. 대부분의 워크플로우에서 엔터프라이즈의 독점적 통제 하에 매핑을 두고 잘 구현된 토큰화로 충분합니다. 일부 워크플로우에서는 위에 추가 보호 레이어를 추가할 가치가 있습니다.</p>
<p>추가 보호의 필요성은 잔여 위험이 토큰 자체가 아닌 <strong>토큰이 형성하는 패턴</strong>에 있을 때 발생합니다. 토큰화된 문서에는 충분한 구조적 정보, 즉 빈도, 공동 발생, 시퀀스, 비율이 포함되어 있어 정교한 상관 관계 분석기가 원시 값 없이도 엔티티를 재식별할 수 있습니다. 위험은 고카디날리티 데이터, 긴 시계열, 많은 토큰화된 출력이 시간이 지남에 따라 누적되는 워크플로우에 특히 관련이 있습니다.</p>
<p>표준 대응은 토큰화된 데이터에 적용되는 차분 프라이버시, k-익명성, 그리고 유사한 통계적 보호입니다. 각각은 일부 분석 정밀도를 희생하고 공격자가 토큰화된 출력에서 학습할 수 있는 양을 제한하는 제어된 방식으로 노이즈나 집계를 추가합니다. 트레이드오프가 가치 있는지는 위협 모델과 워크플로우의 노이즈 허용 범위에 따라 달라집니다.</p>
<p>대부분의 엔터프라이즈 AI 워크플로우에서 이 레이어는 선택 사항입니다. 데이터가 매우 민감하거나 볼륨이 높거나 데이터 태세가 심층 방어를 요구하는 워크플로우의 경우 복잡성을 감수할 가치가 있습니다. <strong>결정은 글로벌 설정이 아닌 워크플로우별로 내리는 것이 가장 좋습니다.</strong></p>

<h2>7. 토큰화하지 않아야 할 것</h2>
<p>종종 우연히 답해지는 최종 설계 질문: 무엇을 <em>토큰화하지 않아야</em> 하는가.</p>
<p>잘못된 것을 토큰화하면 보호를 개선하지 않고 AI 출력이 저하됩니다. 모든 고유 명사를 교체하는 토크나이저는 읽을 수 없는 문서를 생성합니다. 모든 숫자 필드를 교체하는 토크나이저는 분석 신호를 파괴합니다. 유혹은 공격적으로 접근하는 것입니다. <em>"개념적으로 민감할 수 있는 모든 것을 토큰화하라"</em>. 하지만 비용은 즉시 출력 품질에 나타납니다.</p>
<p>규율 잡힌 접근 방식은 엔터프라이즈 자체 용어로 민감도를 명시적으로 정의하고 해당 요소만 토큰화하는 것입니다. <strong>일반 PII 카테고리는 시작점이지 완전한 목록이 아닙니다.</strong> 내부 프로젝트 코드, 고객 세그먼트 식별자, 섹터별 참조, 즉 엔터프라이즈의 데이터 태세가 보호 대상으로 다루는 모든 것이 목록에 포함됩니다. 나머지는 그대로 유지됩니다.</p>
<p>목록은 버전 관리되어야 합니다. 민감한 것으로 간주되는 것이 시간이 지남에 따라 변하기 때문입니다. 또한 감사 가능해야 합니다. 워크플로우의 감사 검토는 무엇이 언제 어떤 정의 하에 토큰화되었는지 알고 싶어하기 때문입니다. <strong>정의 레이어는 이 아키텍처의 장기 운영 비용의 대부분이 있는 곳이며, 대부분의 팀이 초기에 충분히 투자하지 않는 곳입니다.</strong></p>

<h2>8. 워크플로우의 다음 단계</h2>
<p>토큰화는 외부 모델을 위해 문서를 준비합니다. 모델은 토큰화된 문서를 처리하고 토큰화된 응답을 반환합니다. <strong>응답 자체는 아직 워크플로우에 유용하지 않습니다.</strong> 출력이 사용자에게 도달하기 전에 토큰이 엔터프라이즈 환경 내부에서 원래 값으로 다시 매핑되어야 합니다.</p>
<p>그 복원 단계는 이 시리즈의 다음 아티클의 주제입니다. 이 아티클이 속한 더 넓은 패턴에 대해서는 <a href="/resources/learn/external-llm-on-sensitive-enterprise-data">민감한 엔터프라이즈 데이터에서 외부 LLM 실행하기</a>에 관한 필러 개요를 참조하십시오. 운영 워크플로우에서 마스킹과 삭제가 토큰화를 대체하지 못하는 이유는 <a href="/resources/learn/why-ai-stalls-on-operational-data">AI 워크플로우가 운영 데이터에서 막히는 이유</a>에 관한 아티클을 참조하십시오.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Tokenization for LLM Inputs",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related1Href: "/resources/learn/reconstructing-ai-output",
    related2Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related2Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Tokenisierung für LLM-Eingaben: Wie KI liest, was sie nicht sehen darf",
    lead: "Welche Architekturentscheidungen KI-Tokenisierung im Produktivbetrieb tragen — und was Teams klären müssen, bevor sie deployen.",
    category: "KI-Architektur",
    readTime: "~9 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2026",
    tldrLabel: "Zusammenfassung",
    tldrBody: "Vorgelagerte Tokenisierung ist der Substitutionsschritt, der es ermöglicht, Unternehmensdokumente an ein externes LLM zu übergeben, ohne sensible Inhalte preiszugeben. Das Prinzip: Das LLM erhält referentielle Integrität ohne semantische Offenlegung — Platzhalter, über die das Modell dokumentenweit konsistent schlussfolgern kann, ohne die zugrundeliegenden Identitäten rekonstruieren zu können. Produktionsreife Implementierungen müssen eine Reihe von Architekturentscheidungen explizit treffen: deterministisch vs. randomisiert (dokumentenübergreifende Verknüpfung vs. Re-Identifikationsrisiko), formaterhaltendes vs. markierungsbasiertes Vorgehen (Ausgabequalität vs. Einfachheit), wo das Mapping gespeichert wird (ausschließliche Unternehmenskontrolle ist nicht verhandelbar), Entitätsauflösung über verschiedene Erwähnungen hinweg sowie die Frage, was nicht tokenisiert werden sollte. Für die meisten Workflows ist Tokenisierung allein ausreichend. Bei hochkardinalen Daten, langen Zeitreihen oder einer Defense-in-Depth-Strategie lassen sich statistische Schutzmaßnahmen (Differential Privacy, k-Anonymität) ergänzend einsetzen. Die Definition dessen, was als sensibel gilt, ist die Ebene, in die die meisten Teams zu Beginn zu wenig investieren — und in der der größte Teil der langfristigen Betriebskosten liegt.",
    bodyHtml: `<h2>1. Was Tokenisierung in diesem Kontext tatsächlich leistet</h2>
<p>Der Transformationsschritt zwischen einem Unternehmensdokument und einem externen LLM ist konzeptionell einfach: Elemente identifizieren, die die Systemgrenze nicht passieren dürfen, durch Platzhalter ersetzen, die ihre strukturelle Rolle erhalten, und das Ergebnis an das Modell übermitteln. In der Praxis verbirgt diese Einfachheit eine Reihe von Architekturentscheidungen, die bestimmen, ob der Ansatz im Produktivbetrieb skaliert oder unter Last versagt.</p>
<p>Dieser Artikel behandelt diese Entscheidungen. Es handelt sich nicht um ein Tutorial zu einer bestimmten Bibliothek oder einem Produkt, sondern um die Entscheidungen, die jedes Team beim Einsatz vorgelagerter Tokenisierung explizit treffen muss — einschließlich der jeweiligen Abwägungen.</p>
<p>Der Begriff <em>Tokenisierung</em> wird hier im datenschutzrechtlichen Sinne verwendet: sensible Werte durch nicht-sensible Platzhalter ersetzen, die sich zurückmappen lassen. Nicht im NLP-Sinne, wo er das Aufteilen von Text in Teilwörter für die Modelleingabe bezeichnet. <strong>Beide Begriffe teilen ein Wort — und nahezu nichts sonst.</strong></p>
<p>Ein Hinweis zur Terminologie: In der CUBIG-Architektur ist Tokenisierung der zentrale Substitutionsmechanismus innerhalb einer umfassenderen <strong>Verkapselungsschicht</strong>, die auch Erkennung, Formaterhalt und optionale statistische Schutzmaßnahmen umfasst. Dieser Artikel konzentriert sich auf den Tokenisierungsmechanismus. Die Entwurfsentscheidungen sind weitgehend dieselben, unabhängig davon, ob eine Implementierung sich selbst als Tokenisierung, Verkapselung oder unter einem anderen in der Branche gebräuchlichen Namen bezeichnet.</p>
<p>Wenn ein Unternehmensdokument für ein externes LLM vorbereitet wird, ist das Ziel, dass das Modell eine Dokumentversion erhält, die alles für die Aufgabe Notwendige behält und alles entfernt, was innerhalb der Unternehmensgrenze bleiben soll. Tokenisierung ist der Mechanismus, der die zweite Hälfte bewirkt: sensible Elemente identifizieren und durch Platzhalter ersetzen.</p>
<p>Ein hilfreicher Rahmen: Das LLM muss nicht wissen, dass der Kunde <em>Marlene Schmidt</em> heißt. Es muss wissen, dass es einen Kunden gibt, dass dieser an drei verschiedenen Stellen im Dokument erwähnt wird und dass alle Verweise auf dieselbe Entität zeigen. Ein Token wie <code>CUST-7F2A</code> trägt dieselbe Information — eine referenzierbare Entität, die konsistent an mehreren Stellen erscheint — ohne die Identität preiszugeben.</p>
<p>Das ist die Kerneigenschaft der Tokenisierung: <strong>referentielle Integrität ohne semantische Offenlegung</strong>. Das Modell kann über <em>„den Kunden"</em> im gesamten Dokument schlussfolgern, weil der Token konsistent durch das Dokument führt. Die Identität lässt sich nicht rekonstruieren, weil der Token sie nicht kodiert.</p>
<p>Alles Weitere in diesem Artikel sind Variationen der Frage, wie diese Eigenschaft implementiert wird und welche zusätzlichen Eigenschaften sich darüber schichten lassen.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" role="img" aria-labelledby="referential-integrity-title referential-integrity-desc">
      <title id="referential-integrity-title">Referentielle Integrität ohne semantische Offenlegung</title>
      <desc id="referential-integrity-desc">Ein Diagramm, das ein Quelldokument zeigt, in dem derselbe Kunde auf drei verschiedene Arten referenziert wird. In der Version, die das LLM sieht, werden alle Varianten zu einem einzigen konsistenten Token aufgelöst. Die Mapping-Tabelle verbleibt im Unternehmen.</desc>

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
        <text x="40" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">QUELLDOKUMENT</text>
        <line x1="40" y1="74" x2="340" y2="74" stroke="#e5e7eb" stroke-width="1"/>

        <text x="40" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Kopfzeile: Kunde <tspan font-weight="700" fill="#c73e3a">Marlene Schmidt</tspan></text>
        <text x="40" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">rief wegen Kontoausfällen an.</text>

        <text x="40" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agentnotiz: &ldquo;<tspan font-weight="700" fill="#c73e3a">Herr Schmidt</tspan> berichtet,</text>
        <text x="40" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">das Problem habe letzten Dienstag begonnen.&rdquo;</text>

        <text x="40" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Lösung: &ldquo;<tspan font-weight="700" fill="#c73e3a">Marlene</tspan> bestätigte die</text>
        <text x="40" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Wiederherstellung nach dem Firmware-Rollback.&rdquo;</text>
      </g>


      <g>
        <line x1="370" y1="140" x2="490" y2="140" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary-tk)"/>
        <rect x="380" y="98" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="118" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Entitätsauflösung</text>
        <rect x="380" y="150" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Tokenisierung</text>
      </g>


      <g>
        <rect x="500" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="520" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">WAS DAS LLM SIEHT</text>
        <line x1="520" y1="74" x2="820" y2="74" stroke="#eeebfe" stroke-width="1"/>

        <text x="520" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Kopfzeile: Kunde <tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan></text>
        <text x="520" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">rief wegen Kontoausfällen an.</text>

        <text x="520" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agentnotiz: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> berichtet,</text>
        <text x="520" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">das Problem habe letzten Dienstag begonnen.&rdquo;</text>

        <text x="520" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Lösung: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> bestätigte die</text>
        <text x="520" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Wiederherstellung nach dem Firmware-Rollback.&rdquo;</text>
      </g>


      <g>
        <rect x="280" y="280" width="400" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="300" y="304" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">TOKEN ↔ WERT-MAPPING · nur intern</text>
        <line x1="300" y1="314" x2="660" y2="314" stroke="#a7e0df" stroke-width="1"/>
        <text x="300" y="334" font-family="Inter, sans-serif" font-size="12" fill="#0f1130"><tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> &nbsp;&rarr;&nbsp; Marlene Schmidt &nbsp;<tspan font-style="italic" fill="#6b7280">(auch &ldquo;Herr Schmidt&rdquo;, &ldquo;Marlene&rdquo;)</tspan></text>
        <text x="300" y="352" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" font-style="italic">Das Mapping verlässt nie die Unternehmensgrenze.</text>
      </g>


      <line x1="190" y1="240" x2="380" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="670" y1="240" x2="580" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 &middot; <strong>Drei verschiedene Erwähnungen desselben Kunden werden zu einem einzigen konsistenten Token aufgelöst. Das LLM kann dokumentenweit über &ldquo;den Kunden&rdquo; schlussfolgern — die Rückabbildung auf die reale Identität verbleibt im Unternehmen.</strong></figcaption>
</figure>

<h2>2. Deterministische vs. randomisierte Tokenisierung</h2>
<p>Die erste Architekturentscheidung betrifft die Frage, ob ein bestimmter sensibler Wert stets denselben Token erzeugt oder bei jedem Auftreten einen anderen.</p>

<h3>2.1 Deterministische Tokenisierung</h3>
<p><strong>Deterministische Tokenisierung</strong> bedeutet: <em>Marlene Schmidt</em> wird in jedem Dokument und jedem Workflow zu <code>CUST-7F2A</code>. Der Token ist eine Funktion des Werts — in der Regel unter Einbeziehung eines geheimen Schlüssels.</p>
<p>Der Vorteil liegt in der dokumentenübergreifenden Konsistenz. Referenzieren zwei Tickets denselben Kunden, sieht das LLM in beiden denselben Token — Analysen, die auf dokumentenübergreifenden Verknüpfungen beruhen, bleiben funktionsfähig. Für Workflows, die Dokumente aggregieren oder vergleichen — Betrugserkennung, Kundenhistorie, Kohortenanalyse — ist die deterministische Variante in der Regel die einzige praktikable Wahl.</p>
<p>Der Nachteil: Determinismus schafft eine <strong>Re-Identifikationsfläche</strong>. Ein Angreifer, der ausreichend tokenisierte Dokumente beobachtet und über Hintergrundwissen verfügt, wo welche Kunden auftreten, kann Token mit Identitäten korrelieren. Dieses Risiko ist bei hochvolumigen Workflows oder bei Entitäten, die über längere Zeit in vielen tokenisierten Ausgaben erscheinen, real.</p>

<h3>2.2 Randomisierte Tokenisierung</h3>
<p><strong>Randomisierte Tokenisierung</strong> erzeugt bei jedem Auftreten einen anderen Token — auch für denselben Wert. <em>Marlene Schmidt</em> kann in einem Dokument <code>CUST-7F2A</code> werden, in einem anderen <code>CUST-3B91</code>.</p>
<p>Der Vorteil: Es wird keine dokumentenübergreifende Verknüpfung offengelegt. Jedes tokenisierte Dokument ist ein geschlossenes System.</p>
<p>Der Nachteil: Dokumentenübergreifende Analysen sind nicht möglich. Das LLM kann nicht erkennen, dass zwei Token denselben Kunden referenzieren — strukturell tun sie es nicht. Für Workflows ohne dokumentenübergreifende Verknüpfungsanforderungen — etwa die Zusammenfassung eines einzelnen Dokuments oder die Extraktion von Klauseln aus einem Vertrag — ist Randomisierung geeignet. Wo diese Verknüpfung benötigt wird, muss sie nach der LLM-Antwort rekonstruiert werden, was die Komplexität erhöht.</p>

<h3>2.3 Das Hybridmuster der meisten Produktivdeployments</h3>
<p>Die meisten Produktivdeployments münden in ein Hybridmodell: <strong>deterministisch <em>innerhalb eines Workflow-Bereichs</em></strong> (damit mehrstufige Konversationen über einen Kunden kohärent bleiben), <strong>randomisiert <em>über Workflow-Bereiche hinweg</em></strong> (damit Analysen aus einem Workflow nicht mit einem anderen verknüpft werden können). Die Abgrenzung des Bereichs — nach Session, Nutzer, Dokument oder Mandant — ist selbst eine Entwurfsentscheidung, die ein Team vor dem Go-Live festlegen muss.</p>

<table>
  <thead>
    <tr>
      <th>Variante</th>
      <th>Vorteil</th>
      <th>Nachteil</th>
      <th>Geeignet für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Deterministisch</td>
      <td>Dokumentenübergreifende Verknüpfung erhalten; workflowübergreifende Analysen möglich</td>
      <td>Re-Identifikationsrisiko bei hochvolumigen Workflows</td>
      <td>Betrugserkennung, Kundenhistorie, Kohortenanalyse</td>
    </tr>
    <tr>
      <td>Randomisiert</td>
      <td>Jedes tokenisierte Dokument ist ein geschlossenes System; keine dokumentenübergreifende Verknüpfung</td>
      <td>Dokumentenübergreifende Analysen nicht möglich; Verknüpfung muss nach LLM-Antwort rekonstruiert werden</td>
      <td>Einzeldokument-Zusammenfassung, Einzelvertrags-Extraktion</td>
    </tr>
    <tr>
      <td>Hybrid (deterministisch im Bereich, randomisiert bereichsübergreifend)</td>
      <td>Kohärenz innerhalb von Session/Nutzer/Mandant-Grenzen; Isolation nach außen</td>
      <td>Die Bereichsabgrenzung selbst wird zur Entwurfsentscheidung</td>
      <td>Die meisten Produktivdeployments</td>
    </tr>
  </tbody>
</table>

<h2>3. Formaterhaltende Tokenisierung — warum generische Platzhalter nicht ausreichen</h2>
<p>Eine naive Implementierung ersetzt sensible Werte durch generische Platzhalter: <code>[CUSTOMER]</code>, <code>[ACCOUNT_NUMBER]</code>, <code>[DATE]</code>. Das LLM sieht ein mit solchen Markierungen durchsetztes Dokument und versucht, darüber zu schlussfolgern.</p>
<p>In der Praxis funktioniert das schlecht — aus einem spezifischen Grund: Die Schlussfolgerungen eines LLM werden durch die Oberflächenform des Inputs geprägt. Ein Dokument mit dem Text <em>„Kunde Marlene Schmidt rief am 2026-03-15 wegen Konto 4471-9028 an"</em> ist für das Modell ein kohärenter Betriebsvorgang. Dasselbe Dokument mit Platzhaltern — <em>„Kunde [CUSTOMER] rief am [DATE] wegen Konto [ACCOUNT_NUMBER] an"</em> — liest sich wie eine Vorlage oder eine Schwärzungsnotiz. <strong>Modelle reagieren empfindlich auf dieses Signal. Die Ausgabequalität sinkt entsprechend</strong>: Zusammenfassungen werden abstrakter, Extraktionen ungenauer, und das Modell kommentiert gelegentlich die Schwärzung selbst.</p>
<p><strong>Formaterhaltende Tokenisierung</strong> erzeugt Token, die den ersetzten Werten ähneln. Ein Name wird zu einem plausibel wirkenden Namens-Token: <code>Lyra Vesper</code>. Ein Datum wird zu einem echten Datum in einem plausiblen Bereich. Eine Kontonummer wird zu einer Zahl gleicher Länge im gleichen Format, die keine echte Kontonummer ist.</p>
<p>Das Dokument, das das LLM sieht, liest sich als kohärentes Betriebsdokument mit anonymen, aber realistisch wirkenden Stellvertretern. Die Modellausgaben erreichen die Qualität, zu der das Modell tatsächlich in der Lage ist — ohne Qualitätsverlust durch die Wahrnehmung, eine Vorlage verarbeiten zu sollen.</p>
<p>Formaterhalt bringt eigene Entwurfsentscheidungen mit sich: Wie plausibel sollen die Token sein? Werden sie aus einem festen Pool fiktiver Namen gezogen oder dynamisch generiert? Wie werden Datumsangaben und Zahlenwerte behandelt, deren <em>Wert</em> selbst analytische Bedeutung trägt — ein Datum aus 2019 gegenüber 2024 kann für eine Analyse relevant sein, auch wenn das genaue Datum sensibel ist. <strong>Die allgemeine Regel: Der Token muss genau die analytische Eigenschaft des Originalwerts erhalten — nicht mehr und nicht weniger.</strong></p>

<h2>4. Wo das Mapping gespeichert werden muss</h2>
<p>Tokenisierung schützt die Daten nur dann, wenn das Mapping — die Tabelle, die Token mit Originalwerten verknüpft — innerhalb der Unternehmensinfrastruktur verbleibt. <strong>Dieser Teil der Architektur entscheidet am zuverlässigsten darüber, ob der Ansatz seinen Schutz tatsächlich liefert.</strong></p>
<p>Drei Eigenschaften des Mappings müssen gewährleistet sein:</p>
<ol>
  <li><strong>Es verbleibt unter ausschließlicher Unternehmenskontrolle.</strong> Das Mapping ist faktisch der Schlüssel zur Re-Identifikation der Daten. Verlässt es die Unternehmensinfrastruktur, sinkt der Schutz auf das Niveau des neuen Speicherorts. Für Workflows, bei denen Daten innerhalb der EU oder anderer definierter Grenzen verbleiben müssen — eine Anforderung, die sich aus der DSGVO ergibt —, muss das Mapping innerhalb derselben Grenze gespeichert sein: gemeinsam mit den Quellsystemen, nicht beim KI-Endpunkt.</li>
  <li><strong>Es ist integritätsgeschützt.</strong> Eine Manipulation des Mappings verändert, was bei der Rekonstruktion der LLM-Antwort zurückgegeben wird. Ein Angreifer, der das Mapping modifizieren kann, kann Identitäten im Output austauschen. Standardpraxis ist die Anwendung von Integritätsprüfungen auf das Mapping selbst — signierte Einträge, Zugriffs-Audit-Logs — sodass Manipulationen erkennbar sind.</li>
  <li><strong>Es ist separat vom LLM-Workflow zugangskontrolliert.</strong> Das Team, das die LLM-Integration betreibt, benötigt keinen Lesezugriff auf das Mapping. Der Rekonstruktionsschritt greift programmatisch auf das Mapping zu — Menschen müssen die Originalwerte nicht einsehen. Die Trennung der Zugriffspfade ermöglicht es, das Mapping unter strengeren Kontrollen zu verwalten als den LLM-Workflow selbst.</li>
</ol>
<p>Die Speichertechnologie ist gegenüber diesen Eigenschaften nachrangig. Das Mapping kann in einer dedizierten Datenbank, einem Key-Value-Store, einer verschlüsselten Datei oder einem Hardware-gesicherten Tresor liegen — die Wahl hängt von Volumen, Latenzanforderungen und bestehender Infrastruktur ab. <strong>Entscheidend ist: Die drei genannten Eigenschaften sind nicht verhandelbare Entwurfseinschränkungen, keine konfigurierbaren Optionen.</strong></p>

<h2>5. Token-Konsistenz — gleiche Entität, gleicher Token</h2>
<p>Ein subtileres Entwurfsproblem: sicherzustellen, dass dieselbe Entität konsistent denselben Token erhält — auch wenn sie an verschiedenen Stellen eines Dokuments unterschiedlich bezeichnet wird.</p>
<p>Ein Service-Ticket könnte <em>„den Kunden"</em>, dann <em>„Herrn Schmidt"</em>, dann <em>„Marlene"</em>, dann <em>„den Teilnehmer"</em> erwähnen — alle verweisen auf dieselbe Person. Ein naiver Tokenisierer sieht vier verschiedene Erwähnungen und erzeugt vier verschiedene Token. Das LLM kann dann nicht mehr erkennen, dass alle auf dieselbe Entität verweisen. <strong>Die zurückgegebene Zusammenfassung behandelt sie möglicherweise als vier verschiedene Personen.</strong></p>
<p>Dies erfordert <strong>Entitätsauflösung</strong> vor der Tokenisierung: Identifizierung, welche Erwähnungen in einem Dokument auf dieselbe zugrundeliegende Entität verweisen, und Sicherstellung, dass alle auf denselben Token abgebildet werden. Im Allgemeinen ist dies kein triviales Problem — Entitätsauflösung ist ein eigenes Forschungsgebiet. In der Praxis ist es jedoch handhabbar, da Unternehmensdokumente strukturelle Hinweise bieten: eine Kundennummer im Kopfbereich, die Freitexterwähnungen zusammenführt, formale Namenskonventionen in Betriebsprotokollen, schemadefinierte Beziehungen in strukturierten Datensätzen.</p>
<p>Die zweite Hälfte der Konsistenz betrifft Dokumente innerhalb eines Workflow-Bereichs. Referenzieren zwei Tickets denselben Kunden und muss der Workflow sie als zusammengehörig behandeln, muss die Tokenisierung in beiden denselben Token für den Kunden erzeugen. Hier wirkt die frühere Entscheidung zwischen deterministisch und randomisiert: <strong>Determinismus innerhalb des Bereichs ermöglicht es dem LLM zu erkennen, dass <em>„derselbe Kunde in drei Tickets erscheint"</em> — ohne zu erfahren, wer dieser Kunde ist.</strong></p>
<p>Eine sorgfältig konzipierte Tokenisierungsschicht behandelt beide Konsistenzformen — innerhalb eines Dokuments und innerhalb eines Bereichs — als Teil der Transformation, nicht als nachträgliche Ergänzung. Teams, die Konsistenz nachträglich auf einen mentionsbasierten Tokenisierer aufsetzen, stellen in der Regel fest, dass der Workflow auf eine Weise degradiert, die wie ein Modellqualitätsproblem aussieht, aber tatsächlich ein Datenvorbereitungsproblem ist.</p>

<h2>6. Ergänzende Schutzschichten — wenn Tokenisierung allein nicht ausreicht</h2>
<p>Tokenisierung löst das Substitutionsproblem. Für die meisten Workflows ist eine sorgfältig implementierte Tokenisierung mit Mapping unter ausschließlicher Unternehmenskontrolle ausreichend. Für bestimmte Workflows lohnt es sich, eine zusätzliche Schutzschicht zu ergänzen.</p>
<p>Zusätzlicher Schutz ist angezeigt, wenn das Restrisiko nicht in den Token selbst liegt, sondern in <strong>den Mustern, die sie bilden</strong>. Ein tokenisiertes Dokument kann ausreichend strukturelle Informationen enthalten — Häufigkeiten, Co-Vorkommen, Sequenzen, Verhältnisse —, damit eine ausgefeilte Korrelationsanalyse Entitäten auch ohne Rohwerte re-identifizieren könnte. Dieses Risiko ist besonders relevant bei hochkardinalen Daten, langen Zeitreihen und Workflows, bei denen sich über die Zeit viele tokenisierte Ausgaben ansammeln.</p>
<p>Die Standardantworten sind Differential Privacy, k-Anonymität und ähnliche statistische Schutzmaßnahmen, die auf tokenisierte Daten angewendet werden. Jede Methode fügt auf kontrollierte Weise Rauschen oder Aggregation hinzu, die begrenzt, wie viel ein Angreifer aus dem tokenisierten Output lernen kann — auf Kosten etwas analytischer Präzision. Ob dieser Kompromiss gerechtfertigt ist, hängt vom Bedrohungsmodell und der Rauschtoleranz des Workflows ab.</p>
<p>Für die meisten Unternehmens-KI-Workflows ist diese Schicht optional. Bei Workflows mit hochsensiblen Daten, hohem Volumen oder einer Defense-in-Depth-Anforderung — etwa im Kontext von BSI C5 oder branchenspezifischen Compliance-Vorgaben — ist die zusätzliche Komplexität gerechtfertigt. <strong>Die Entscheidung sollte workflow-spezifisch getroffen werden, nicht als globale Einstellung.</strong></p>

<h2>7. Was nicht tokenisiert werden sollte</h2>
<p>Eine abschließende Entwurfsfrage, die häufig unbeabsichtigt beantwortet wird: Was sollte <em>nicht</em> tokenisiert werden?</p>
<p>Das Tokenisieren falscher Elemente verschlechtert die KI-Ausgabe, ohne den Schutz zu verbessern. Ein Tokenisierer, der jeden Eigennamen ersetzt, erzeugt unleserliche Dokumente. Ein Tokenisierer, der jedes numerische Feld ersetzt, vernichtet analytische Signale. Die Versuchung besteht darin, aggressiv vorzugehen — <em>„alles tokenisieren, was möglicherweise sensibel sein könnte"</em> —, doch die Konsequenzen zeigen sich unmittelbar in der Ausgabequalität.</p>
<p>Der disziplinierte Ansatz: Sensibilität explizit in den eigenen Unternehmensbegriffen definieren und nur diese Elemente tokenisieren. <strong>Allgemeine personenbezogene Datenkategorien im Sinne der DSGVO sind ein Ausgangspunkt, keine vollständige Liste.</strong> Interne Projektkennzeichen, Kundensegment-IDs, branchenspezifische Referenzen — was immer die unternehmenseigene Datenstrategie als schützenswert einstuft — gehört auf die Liste. Alles andere bleibt unverändert.</p>
<p>Die Liste muss versioniert sein, weil sich die Definition von Sensibilität verändert. Sie muss auch auditierbar sein — eine Prüfung des Workflows wird wissen wollen, was wann unter welcher Definition tokenisiert wurde. <strong>Die Definitionsebene ist der Bereich, in dem der größte Teil der langfristigen Betriebskosten dieser Architektur liegt und in den die meisten Teams zu Beginn zu wenig investieren.</strong></p>

<h2>8. Der nächste Schritt im Workflow</h2>
<p>Tokenisierung bereitet das Dokument für das externe Modell vor. Das Modell verarbeitet das tokenisierte Dokument und gibt eine tokenisierte Antwort zurück. <strong>Diese Antwort ist für sich genommen noch nicht nutzbar</strong> — die Token müssen innerhalb der Unternehmensinfrastruktur auf Originalwerte zurückgemappt werden, bevor der Output den Nutzer erreicht.</p>
<p>Dieser Rekonstruktionsschritt ist Gegenstand des nächsten Artikels in dieser Reihe. Eine Übersicht über das übergeordnete Muster, zu dem dieser Artikel gehört, bietet der Pillar-Beitrag zum <a href="/resources/learn/external-llm-on-sensitive-enterprise-data">Betrieb externer LLMs mit sensiblen Unternehmensdaten</a>. Warum Maskierung und Schwärzung keine gleichwertigen Alternativen zur Tokenisierung in operativen Workflows sind, erläutert der Artikel zu <a href="/resources/learn/why-ai-stalls-on-operational-data">KI-Workflows, die an operativen Daten scheitern</a>.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Tokenization for LLM Inputs",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
    related1Href: "/resources/learn/reconstructing-ai-output",
    related2Title: "Running External LLMs on Data Your Company Can't Send Externally",
    related2Href: "/resources/learn/external-llm-on-sensitive-enterprise-data",
    related3Title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    related3Href: "/resources/learn/why-ai-stalls-on-operational-data",
    related4Title: "",
    related4Href: "",
  },
}

export default function TokenizationForLlmInputs({
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

addPropertyControls(TokenizationForLlmInputs, {
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
