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

const BODY_HTML = `<h2>1. Why Masking and Redaction Are the First Thing Teams Try</h2>
<p>A pattern repeats across enterprise AI pilots: the proof-of-concept works on clean text, the demo lands well with leadership, and then someone tries to run the same workflow on a real service ticket or a real operational document, and the output comes back unusable. The model is fine. The integration is fine. What broke is something more specific — and it almost always traces back to how the input data was prepared.</p>
<p>The standard preparation step is some form of PII handling: a masking library, a guardrail API, a redaction pass. The team installs one of these, configures it for names and IDs, and assumes the privacy problem is solved. For a small class of documents — long-form text where the sensitive part is a name in a sentence — this works. For the documents that operational teams actually live in, it fails in ways that take a while to diagnose.</p>
<p>The instinct is reasonable. The problem looks like <em>"sensitive data is in the document; AI shouldn't see it; remove the sensitive parts."</em> And the tools available — open-source PII detection libraries, commercial guardrail APIs, redaction engines built into document management platforms — all assume that frame. They take a document, identify named entities, and either replace them with placeholders or strip them out.</p>
<p>This assumption holds reasonably well when the document is unstructured long-form prose with the sensitive content concentrated in a few named-entity mentions. A CV. A contract summary. A press release draft. In these, the customer or party name is a small fraction of the document, and removing it doesn't break the document's meaning.</p>
<p><strong>The assumption stops holding the moment the document is operational. And operational documents are what enterprise AI is actually trying to process.</strong></p>

<h2>2. Case 1 — The Service Ticket</h2>
<p>Take a single customer service ticket from a telecom operations centre. The ticket has structure: a header with the customer account number, the device serial, the affected service, the date and time. A free-text description from the agent: <em>"Customer reports intermittent dropouts on Mobile-X line, escalated from level-1 after second call. Device shows reset event at 14:22 UTC. Subscriber confirms no physical damage but mentions slow speeds since the firmware push last Tuesday."</em> A linked attachment with a network log fragment. References to two other ticket IDs from the same customer over the past month. An asset reference to the cell site serving the affected line.</p>
<p>A PII guardrail looks at this and finds: a customer name (if the name is in the description), maybe a phone number, possibly an email if the agent quoted the customer. Everything else is, from the guardrail's perspective, not sensitive.</p>
<p>But for an EU telecom under sector-specific data location requirements, almost everything else <em>is</em> sensitive in some way. The cell site identifier reveals geographic location data. The asset reference, joined with the firmware push date, can identify the customer's hardware configuration. The cross-referenced ticket IDs reveal a behavioural pattern. The serial number is a unique identifier. <strong>Removing just the obvious PII leaves a document where most of what made it sensitive — and most of what made it useful to the AI — is untouched.</strong> The customer's name is gone; the customer is still identifiable to anyone with access to the operator's CRM.</p>
<p>And here is the worse half: removing what the guardrail does flag also breaks the AI's ability to do its job. The agent's free-text description references <em>"the customer"</em> throughout. Replace the customer's name with <code>[REDACTED]</code> in the header and the free text now has dangling references. The AI summary that comes back will say things like <em>"the user mentioned slow speeds, but [REDACTED] also reported,"</em> which is useless to the next agent reading it.</p>
<p>The ticket is a structure of identifiers, references, and contextual fragments that are mutually dependent. <strong>You cannot pull out the sensitive parts without breaking the dependencies, and the dependencies are what made the AI worth running in the first place.</strong></p>

<h2>3. Case 2 — The Operational Log</h2>
<p>A second example: a window of operational logs from a network operations centre, twenty minutes of alarm events leading up to a service outage. The format is structured: timestamp, severity, device ID, event code, free-text description, correlation ID.</p>
<p>A PII guardrail looks at this and finds essentially nothing. There are no customer names. There are no email addresses or phone numbers. The fields are technical identifiers and event codes. <strong>The guardrail returns the log unchanged and the team feels safe sending it to an external LLM for root-cause analysis.</strong></p>
<p>But sector-specific commitments for network operators in most EU countries cover the network topology itself. The device IDs reveal infrastructure layout. The alarm sequence, joined with the correlation ID, can reveal traffic routing decisions. The event codes are sometimes vendor-specific in ways that disclose what equipment runs which segments. For a network operator with customer commitments around where operational data is processed, sending the raw log to a third-country endpoint is the violation, even though the guardrail saw no PII.</p>
<p>The structural information — what's connected to what, what failed in what order, which subsystem propagated the fault — is what the AI needs to do useful root-cause analysis. It's also what makes the log sensitive. Strip the structure and the AI has nothing to work with. Leave the structure and the data hasn't actually been protected.</p>
<p>This is the part most teams discover the hard way: in operational data, <strong><em>the structure is the sensitivity</em></strong>. Field-level removal doesn't see it, can't model it, and can't preserve it.</p>

<h2>4. Case 3 — The Clinical or Financial Document</h2>
<p>A third case, less obvious but more common: a clinical workflow document or a financial review document. A patient record with cross-references to past visits, lab results, prescriptions, and a free-text clinician note. A loan file with applicant data, asset details, transaction history, and an underwriter's narrative.</p>
<p>These documents have something the first two don't: explicit personal identifiers that a PII guardrail will catch — patient name, date of birth, account number, social security number. The team configures the guardrail, runs it, and the obvious identifiers are masked. The document looks clean.</p>
<p>But the cross-references stay. The clinician's note refers to the patient as <em>"the patient"</em> — fine — but also references <em>"the result from the previous admission"</em> and <em>"the medication change on the third visit."</em> The lab results table has structured rows with dates, codes, and values. The financial document has a transaction history with merchant names, amounts, and timestamps.</p>
<p>Two things break.</p>

<ol>
  <li><strong>Cross-references no longer resolve.</strong> The AI sees <em>"the result from the previous admission"</em> but the previous admission has been masked into a token that doesn't tell the AI anything about what it was. The summary the AI produces is correspondingly vague.</li>
  <li><strong>The document remains identifiable even after the obvious masking.</strong> A patient's lab results trajectory, joined with rough timing, can identify the patient even without the name. A loan applicant's transaction pattern, joined with rough geography and an asset reference, can identify the applicant. These re-identification paths aren't theoretical; they're what privacy researchers demonstrate routinely. A guardrail that catches direct identifiers but leaves the structure intact doesn't actually achieve the privacy outcome the team thinks it has.</li>
</ol>

<p>The result is the worst of both worlds: <strong>the AI's output is degraded because cross-references broke, and the privacy posture hasn't actually been improved because the structural information that enables re-identification is still there.</strong></p>

<h2>5. Why a Better Guardrail Doesn't Fix This</h2>
<p>The natural response, after seeing these cases, is to ask for a better PII detection engine. Wider entity coverage. Custom rule definitions. Context-aware detection. The market has answered this — there are now PII guardrails with hundreds of entity types, configurable custom markers, and ML-based detection that goes beyond regex.</p>
<p>These are improvements, but they don't change the underlying architecture. The architecture is still: detect sensitive elements, remove or replace them, send the result. <strong>The detection layer gets better; the removal layer is still removal.</strong> And removal breaks the same things it always breaks: cross-references, structural relationships, document coherence.</p>
<p>A more honest framing of the problem is this: the AI workflow needs the structure of the document — the relationships, the references, the format, the sequence — to do useful work. The privacy constraint says certain elements of the document cannot be sent to the external model. These two facts only conflict if the only available move is to <em>remove</em>. If there's a way to send the structure without sending the identifying content, the conflict resolves.</p>
<p>This is the architectural shift that distinguishes removal-based approaches (PII guardrails, masking, redaction) from transformation-based approaches. <strong>Removal-based tools optimise for <em>what's taken out</em>. Transformation-based tools optimise for <em>what remains usable</em></strong> — which is a different design constraint, and produces different architectures.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="removal-vs-transformation-title removal-vs-transformation-desc">
      <title id="removal-vs-transformation-title">Removal-based vs Transformation-based approaches</title>
      <desc id="removal-vs-transformation-desc">A side-by-side comparison showing the same service ticket processed by a removal-based approach (left) and a transformation-based approach (right). Removal leaves dangling references and broken structure; transformation preserves the structural roles so the AI can still reason about the document.</desc>

      <rect x="320" y="20" width="320" height="116" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="340" y="44" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SOURCE: SERVICE TICKET</text>
      <line x1="340" y1="54" x2="620" y2="54" stroke="#e5e7eb" stroke-width="1"/>
      <text x="340" y="74" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-77821</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">Jane Doe</tspan></text>
      <text x="340" y="92" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Device: <tspan font-weight="600" fill="#5b4fe9">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">CS-Berlin-NE-12</tspan></text>
      <text x="340" y="110" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Note: Customer reports dropouts; references prior</text>
      <text x="340" y="126" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">tickets <tspan font-weight="600" fill="#5b4fe9">TKT-9921</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-9988</tspan></text>

      <line x1="400" y1="140" x2="220" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>
      <line x1="560" y1="140" x2="740" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>

      <defs>
        <marker id="arrow-dark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f1130"/>
        </marker>
        <marker id="arrow-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-teal-fig" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>

      <rect x="40" y="180" width="360" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
      <text x="220" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">Removal-based · masking / redaction</text>

      <rect x="40" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#ef5350" stroke-width="1.5"/>
      <text x="60" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">WHAT THE LLM SEES</text>
      <line x1="60" y1="258" x2="380" y2="258" stroke="#fce9e8" stroke-width="1"/>
      <text x="60" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan> · Customer: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan></text>
      <text x="60" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#9ca3af">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#9ca3af">CS-Berlin-NE-12</tspan></text>
      <text x="60" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: Customer reports dropouts; references prior</text>
      <text x="60" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">tickets <tspan font-weight="600" fill="#9ca3af">TKT-9921</tspan>, <tspan font-weight="600" fill="#9ca3af">TKT-9988</tspan></text>

      <rect x="40" y="370" width="360" height="74" rx="8" fill="#fce9e8" stroke="none"/>
      <text x="60" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Dangling references — &ldquo;the user, but [REDACTED]&rdquo;</text>
      <text x="60" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Structural identifiers still expose topology</text>
      <text x="60" y="428" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Re-identification path unchanged</text>

      <rect x="560" y="180" width="360" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
      <text x="740" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Transformation-based · structure-preserving tokens</text>

      <rect x="560" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="580" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">WHAT THE LLM SEES</text>
      <line x1="580" y1="258" x2="900" y2="258" stroke="#eeebfe" stroke-width="1"/>
      <text x="580" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-T0001</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan></text>
      <text x="580" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#5b4fe9">SN-T0014</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">SITE-T0007</tspan></text>
      <text x="580" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan> reports dropouts; references</text>
      <text x="580" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">prior tickets <tspan font-weight="600" fill="#5b4fe9">TKT-T0042</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-T0043</tspan></text>

      <rect x="560" y="370" width="360" height="74" rx="8" fill="#e6f7f6" stroke="none"/>
      <text x="580" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Cross-references still resolve consistently</text>
      <text x="580" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Structural roles preserved; tokens have no</text>
      <text x="580" y="425" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">  meaning outside the enterprise</text>
      <text x="580" y="442" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Mapping back to originals stays inside</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 · <strong>The same service ticket, processed two ways. Removal breaks the references the AI needs; transformation preserves the structure while changing what the external model sees.</strong></figcaption>
</figure>

<h2>6. The Cases Where Masking Actually Does Work</h2>
<p>It's worth being precise about where the traditional approach is fine. Three conditions, all of which have to hold:</p>

<ul>
  <li><strong>The document is long-form prose, not a structured operational artifact.</strong> The sensitive elements are a small fraction of the content and the document still reads coherently without them.</li>
  <li><strong>The AI's task doesn't require resolving cross-references, preserving structure, or understanding sequence.</strong> Summarising a single-source narrative document is fine. Extracting key clauses from a contract may be fine if the parties are the only sensitive elements.</li>
  <li><strong>The privacy constraint is about named entities, not structural information.</strong> If the concern is <em>"the customer's name shouldn't be visible to the external model,"</em> masking solves that. If the concern is <em>"this document, in aggregate, identifies a customer even without the name,"</em> masking doesn't.</li>
</ul>

<p>For these cases — and they exist — a well-configured PII guardrail is a reasonable tool. <strong>The mistake is assuming the rest of the enterprise's documents look the same as these.</strong></p>

<h2>7. What This Means for the Workflow Architecture</h2>
<p>The conclusion most teams reach, after running into these cases a few times, is that the data preparation layer needs to do something different than removal. <strong>It needs to preserve the document's structure and references while changing the elements that can't cross the boundary. Same shape, different content.</strong></p>
<p>That preservation property — keeping the structure while replacing the sensitive elements with placeholders that behave the same way in context — is what distinguishes transformation-based approaches from masking and redaction. The AI still gets a document that looks like a service ticket, with a header and a free-text description and cross-references. The external model can still reason about the relationships. The output comes back referencing the same structural roles. Inside the enterprise environment, the placeholders are mapped back to the original values, and the result is a business-ready document with real names, real IDs, real references.</p>
<p>This isn't a different configuration of masking. It's a different category of data preparation, one designed around the constraint that <em>enterprise documents are structured artifacts whose value to AI lives in their structure as much as their content</em>.</p>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Why isn't a better PII detection engine enough?","acceptedAnswer":{"@type":"Answer","text":"Better detection improves the first step — finding sensitive elements — but the underlying architecture is still detect, remove, send. The removal step is what breaks cross-references, structural relationships, and document coherence. Even with hundreds of entity types and ML-based detection, removal-based approaches optimise for what's taken out rather than what remains usable. The architectural problem is the removal, not the detection."}}, {"@type":"Question","name":"What is the difference between removal-based and transformation-based approaches?","acceptedAnswer":{"@type":"Answer","text":"Removal-based tools (PII guardrails, masking, redaction) detect sensitive elements and either strip them or replace them with redaction markers like [REDACTED]. They optimise for what's taken out. Transformation-based tools replace sensitive values with structured placeholders that preserve format, type, and the structural role the original played, so cross-references still resolve and the AI can still reason about relationships. They optimise for what remains usable. The mapping from placeholder back to original value stays inside the enterprise."}}, {"@type":"Question","name":"Are there cases where traditional PII masking is actually fine?","acceptedAnswer":{"@type":"Answer","text":"Yes — when three conditions all hold. First, the document is long-form prose rather than a structured operational artifact. Second, the AI's task doesn't require resolving cross-references, preserving structure, or understanding sequence. Third, the privacy constraint is about named entities rather than structural information. CV screening, contract summarisation, and press release drafting often meet all three. The mistake is assuming the rest of the enterprise's documents look the same."}}, {"@type":"Question","name":"What does 'the structure is the sensitivity' actually mean?","acceptedAnswer":{"@type":"Answer","text":"In operational data — service tickets, network logs, clinical records, financial files — the sensitive information often lives in the relationships between elements rather than in any single field. Device IDs joined with timestamps can reveal infrastructure topology. Lab results trajectories joined with rough timing can identify patients. Transaction patterns joined with rough geography can identify loan applicants. Removing only the obvious named entities leaves the structural information that enables re-identification untouched."}}, {"@type":"Question","name":"How does this relate to data location requirements?","acceptedAnswer":{"@type":"Answer","text":"Data location requirements often cover more than named-entity PII — network topology, infrastructure references, sector-specific identifiers, and structural information that can identify customers or operations. A PII guardrail that sees no obvious identifiers in a network log will pass it through to a third-country endpoint, even though the log's structural content is exactly what the data location commitment was designed to keep in. The constraint and the detection layer are looking at different things."}}, {"@type":"Question","name":"What does the data preparation layer have to do instead?","acceptedAnswer":{"@type":"Answer","text":"Preserve the document's structure and references while changing the elements that can't cross the boundary. Same shape, different content. The AI receives a document that still reads like a service ticket — with header, free-text description, cross-references — but the sensitive elements are placeholders that behave the same way in context. The external model reasons about the structure as usual. Inside the enterprise environment, the placeholders are mapped back to real values, producing a business-ready document."}} ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
    lead: "PII guardrails and field-level masking solve the easy half of the problem and break the rest of the workflow. A look at where AI stalls on real operational data — and why removal-based approaches can't fix it.",
    category: "AI Architecture",
    readTime: "~8 min read",
    dateUpdated: "Updated May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "Enterprise AI pilots work on clean text, then fail when run against real service tickets, operational logs, and clinical or financial documents. The cause is rarely the model — it's the data-preparation layer. PII guardrails, masking, and redaction assume sensitive content is a small set of named entities in long-form prose. Operational data isn't shaped that way. The sensitive information lives in the structure: cross-references, identifiers, sequence, topology. Removal-based approaches optimise for what's taken out and break the cross-references the AI needs to reason about — while leaving the structural information that enables re-identification untouched. Three concrete failure cases — a telecom service ticket, a network operations log, a clinical or financial document — show the same pattern: removal makes the AI's output worse and the privacy posture no better. A better detection engine doesn't fix this; the architecture has to be transformation-based, not removal-based — keeping the structure while changing the elements that can't cross the boundary.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/why-ai-stalls-on-operational-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Why AI Workflows Stall on Operational Data",
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
    title: "AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유",
    lead: "PII 가드레일과 필드 레벨 마스킹은 문제의 쉬운 절반만 해결하고 나머지 워크플로우를 망가뜨립니다. AI가 실제 운영 데이터에서 막히는 지점과 삭제 기반 접근법이 이를 해결하지 못하는 이유를 살펴봅니다.",
    category: "AI Architecture",
    readTime: "~8분 읽기",
    dateUpdated: "2026년 5월 업데이트",
    tldrLabel: "TL;DR",
    tldrBody: "기업 AI 파일럿은 깨끗한 텍스트에서는 작동하지만, 실제 서비스 티켓·운영 로그·임상 또는 금융 문서를 대상으로 하면 실패합니다. 원인은 대부분 모델이 아닌 데이터 준비 레이어에 있습니다. PII 가드레일, 마스킹, 삭제(redaction)는 민감 콘텐츠가 긴 산문 안의 소수 명명 개체라고 가정합니다. 운영 데이터는 그런 형태가 아닙니다. 민감한 정보는 구조 안에 있습니다. 교차 참조, 식별자, 시퀀스, 토폴로지가 그것입니다. 삭제 기반 접근법은 제거되는 것을 최적화하며 AI가 추론에 필요로 하는 교차 참조를 끊어냅니다 — 동시에 재식별을 가능하게 하는 구조적 정보는 그대로 남겨둡니다. 세 가지 구체적인 실패 사례 — 통신사 서비스 티켓, 네트워크 운영 로그, 임상 또는 금융 문서 — 는 같은 패턴을 보입니다. 삭제는 AI 출력을 악화시키고 프라이버시 상태는 나아지지 않습니다. 더 나은 탐지 엔진으로는 이를 해결할 수 없습니다. 아키텍처 자체가 삭제 기반이 아닌 변환 기반이어야 합니다 — 경계를 넘을 수 없는 요소를 교체하면서 구조를 보존하는 방식으로.",
    bodyHtml: `(아래는 bodyHtml Props의 HTML 태그를 유지하며 텍스트만 번역한 전체 본문입니다.)

<h2>1. 마스킹과 삭제가 팀이 가장 먼저 시도하는 이유</h2>
<p>기업 AI 파일럿에서 반복되는 패턴이 있습니다. 개념 증명은 깨끗한 텍스트에서 작동하고, 데모는 경영진에게 잘 통하지만, 누군가 실제 서비스 티켓이나 실제 운영 문서에 동일한 워크플로우를 실행하면 결과물이 사용 불가한 상태로 돌아옵니다. 모델은 정상입니다. 통합도 정상입니다. 문제가 생긴 것은 더 구체적인 부분으로 — 거의 항상 입력 데이터가 어떻게 준비되었는지로 추적됩니다.</p>
<p>표준 준비 단계는 어떤 형태든 PII 처리입니다. 마스킹 라이브러리, 가드레일 API, 삭제 처리 과정이 그것입니다. 팀은 이것들 중 하나를 설치하고, 이름과 ID에 맞게 구성하고, 프라이버시 문제가 해결되었다고 가정합니다. 문서의 소수 카테고리 — 민감한 부분이 한 문장 속 이름인 긴 형식 텍스트 — 에서는 이것이 효과가 있습니다. 운영 팀이 실제로 다루는 문서에서는, 진단하는 데 시간이 걸리는 방식으로 실패합니다.</p>
<p>이 직관은 합리적입니다. 문제는 <em>"민감한 데이터가 문서 안에 있고, AI는 그것을 봐서는 안 되므로, 민감한 부분을 제거한다"</em>처럼 보입니다. 그리고 사용 가능한 도구들 — 오픈소스 PII 탐지 라이브러리, 상업용 가드레일 API, 문서 관리 플랫폼에 내장된 삭제 엔진 — 은 모두 그 프레임을 가정합니다. 문서를 가져와 명명 개체를 식별하고, 자리 표시자로 교체하거나 제거합니다.</p>
<p>이 가정은 문서가 비구조화된 긴 산문이고 민감한 콘텐츠가 소수의 명명 개체 언급에 집중되어 있을 때 상당히 잘 성립합니다. 이력서. 계약 요약본. 보도자료 초안. 이러한 것들에서 고객 또는 당사자 이름은 문서의 극히 일부이며, 그것을 제거해도 문서의 의미가 깨지지 않습니다.</p>
<p><strong>문서가 운영 문서인 순간 이 가정은 더 이상 성립하지 않습니다. 그리고 운영 문서가 바로 기업 AI가 실제로 처리하려는 것입니다.</strong></p>

<h2>2. 사례 1 — 서비스 티켓</h2>
<p>통신 운영 센터의 단일 고객 서비스 티켓을 살펴보겠습니다. 티켓에는 구조가 있습니다. 고객 계정 번호, 장치 시리얼, 영향받은 서비스, 날짜와 시간이 담긴 헤더. 상담원의 자유형 설명: <em>"고객이 Mobile-X 회선의 간헐적 단절을 신고하며, 두 번째 통화 후 1차 지원에서 에스컬레이션됨. 장치가 14:22 UTC에 재설정 이벤트를 표시. 가입자는 물리적 손상은 없다고 확인하지만 지난 화요일 펌웨어 푸시 이후 속도가 느리다고 언급."</em> 네트워크 로그 조각이 담긴 첨부 파일. 지난 달 동일 고객의 다른 티켓 ID 두 건에 대한 참조. 영향받은 회선을 서비스하는 셀 사이트에 대한 자산 참조.</p>
<p>PII 가드레일은 이것을 보고 찾아냅니다. 고객 이름(설명에 이름이 있다면), 아마도 전화번호, 상담원이 고객을 인용했다면 이메일도 가능합니다. 가드레일의 관점에서 그 외의 모든 것은 민감하지 않습니다.</p>
<p>하지만 업종별 데이터 위치 요구사항을 따르는 EU 통신사에게는, 그 외의 거의 모든 것이 어떤 면에서 민감합니다. 셀 사이트 식별자는 지리적 위치 데이터를 드러냅니다. 자산 참조는 펌웨어 푸시 날짜와 결합되면 고객의 하드웨어 구성을 식별할 수 있습니다. 교차 참조된 티켓 ID는 행동 패턴을 드러냅니다. 시리얼 번호는 고유 식별자입니다. <strong>명백한 PII만 제거하면 민감했던 것의 대부분 — 그리고 AI에 유용했던 것의 대부분 — 이 그대로 남은 문서가 됩니다.</strong> 고객의 이름은 사라졌지만, 운영자의 CRM에 접근 권한이 있는 누구에게나 고객은 여전히 식별 가능합니다.</p>
<p>그리고 여기에 더 나쁜 절반이 있습니다. 가드레일이 실제로 플래그 지정한 것을 제거하면 AI가 자신의 역할을 수행하는 능력도 깨집니다. 상담원의 자유형 설명은 내내 <em>"고객"</em>을 참조합니다. 헤더에서 고객 이름을 <code>[REDACTED]</code>로 교체하면 자유형 텍스트에는 끊어진 참조가 생깁니다. 돌아오는 AI 요약은 <em>"사용자가 속도 저하를 언급했지만 [REDACTED]도 보고했습니다"</em>와 같은 내용을 말할 것이며, 이는 다음 상담원에게 읽혀도 쓸모가 없습니다.</p>
<p>티켓은 서로 의존하는 식별자, 참조, 맥락적 조각들의 구조입니다. <strong>의존성을 깨뜨리지 않고는 민감한 부분을 끄집어낼 수 없으며, 바로 그 의존성이 AI를 실행할 가치가 있게 만드는 것입니다.</strong></p>

<h2>3. 사례 2 — 운영 로그</h2>
<p>두 번째 예시: 서비스 중단으로 이어지는 20분간의 알람 이벤트가 담긴 네트워크 운영 센터의 운영 로그 창. 형식은 구조화되어 있습니다. 타임스탬프, 심각도, 장치 ID, 이벤트 코드, 자유형 설명, 상관 ID입니다.</p>
<p>PII 가드레일은 이것을 보고 사실상 아무것도 찾지 못합니다. 고객 이름이 없습니다. 이메일 주소나 전화번호도 없습니다. 필드는 기술 식별자와 이벤트 코드입니다. <strong>가드레일은 로그를 변경하지 않고 반환하며, 팀은 근본 원인 분석을 위해 외부 LLM에 안전하게 전송할 수 있다고 느낍니다.</strong></p>
<p>하지만 대부분의 EU 국가에서 네트워크 운영자에 대한 업종별 약정은 네트워크 토폴로지 자체를 포함합니다. 장치 ID는 인프라 레이아웃을 드러냅니다. 상관 ID와 결합된 알람 시퀀스는 트래픽 라우팅 결정을 드러낼 수 있습니다. 이벤트 코드는 때때로 어떤 장비가 어떤 구간을 운영하는지 공개하는 방식으로 벤더에 특화되어 있습니다. 운영 데이터 처리 위치에 대해 고객 약정을 가진 네트워크 운영자에게, 원시 로그를 제3국 엔드포인트로 전송하는 것이 위반이며, 가드레일은 PII를 발견하지 못했더라도 마찬가지입니다.</p>
<p>구조적 정보 — 무엇이 무엇에 연결되어 있는지, 어떤 순서로 무엇이 실패했는지, 어떤 하위 시스템이 오류를 전파했는지 — 는 AI가 유용한 근본 원인 분석을 수행하는 데 필요한 것입니다. 그것이 또한 로그를 민감하게 만드는 것입니다. 구조를 제거하면 AI는 작업할 것이 없어집니다. 구조를 남겨두면 데이터는 실제로 보호되지 않습니다.</p>
<p>이것이 대부분의 팀이 힘들게 발견하는 부분입니다. 운영 데이터에서 <strong><em>구조가 곧 민감성입니다</em></strong>. 필드 레벨 삭제는 그것을 보지 못하고, 모델링할 수 없으며, 보존할 수 없습니다.</p>

<h2>4. 사례 3 — 임상 또는 금융 문서</h2>
<p>세 번째 사례는 덜 명백하지만 더 일반적입니다. 임상 워크플로우 문서나 금융 검토 문서입니다. 과거 방문, 검사 결과, 처방, 자유형 임상의 메모에 대한 교차 참조가 있는 환자 레코드. 신청자 데이터, 자산 세부 사항, 거래 이력, 심사역의 서사가 담긴 대출 파일.</p>
<p>이러한 문서들에는 첫 두 사례에 없던 것이 있습니다. PII 가드레일이 포착할 명시적 개인 식별자 — 환자 이름, 생년월일, 계좌 번호, 주민등록번호 — 가 있습니다. 팀은 가드레일을 구성하고 실행하며, 명백한 식별자는 마스킹됩니다. 문서는 깨끗해 보입니다.</p>
<p>하지만 교차 참조는 남아 있습니다. 임상의의 메모는 환자를 <em>"환자"</em>라고 칭합니다 — 괜찮습니다 — 하지만 <em>"이전 입원에서의 결과"</em>와 <em>"세 번째 방문의 약 변경"</em>도 참조합니다. 검사 결과 테이블에는 날짜, 코드, 값이 포함된 구조화된 행이 있습니다. 금융 문서에는 가맹점 이름, 금액, 타임스탬프가 있는 거래 이력이 있습니다.</p>
<p>두 가지가 깨집니다.</p>

<ol>
  <li><strong>교차 참조가 더 이상 해결되지 않습니다.</strong> AI는 <em>"이전 입원에서의 결과"</em>를 보지만 이전 입원은 AI에게 그것이 무엇인지 알려주지 않는 토큰으로 마스킹되어 있습니다. AI가 생성하는 요약은 그에 따라 모호합니다.</li>
  <li><strong>문서는 명백한 마스킹 후에도 식별 가능한 상태로 남아 있습니다.</strong> 환자의 검사 결과 추이는 대략적인 타이밍과 결합되면 이름 없이도 환자를 식별할 수 있습니다. 대출 신청자의 거래 패턴은 대략적인 지역과 자산 참조와 결합되면 신청자를 식별할 수 있습니다. 이러한 재식별 경로는 이론적이지 않습니다. 프라이버시 연구자들이 일상적으로 시연하는 것입니다. 직접 식별자를 포착하지만 구조를 그대로 남겨두는 가드레일은 팀이 생각하는 프라이버시 결과를 실제로 달성하지 못합니다.</li>
</ol>

<p>결과는 최악의 상황입니다. <strong>교차 참조가 끊겼기 때문에 AI 출력이 저하되고, 재식별을 가능하게 하는 구조적 정보가 여전히 남아 있기 때문에 프라이버시 상태는 실제로 개선되지 않았습니다.</strong></p>

<h2>5. 더 나은 가드레일이 이것을 해결하지 못하는 이유</h2>
<p>이러한 사례들을 본 후 자연스러운 반응은 더 나은 PII 탐지 엔진을 요청하는 것입니다. 더 넓은 개체 커버리지. 커스텀 규칙 정의. 컨텍스트 인식 탐지. 시장은 이에 응답했습니다 — 이제 수백 가지 개체 유형, 구성 가능한 커스텀 마커, 정규식을 넘어서는 ML 기반 탐지를 갖춘 PII 가드레일이 있습니다.</p>
<p>이것들은 개선이지만 근본 아키텍처를 바꾸지는 않습니다. 아키텍처는 여전히 이렇습니다. 민감 요소를 탐지하고, 제거 또는 교체하고, 결과를 전송합니다. <strong>탐지 레이어가 나아지더라도 삭제 레이어는 여전히 삭제입니다.</strong> 그리고 삭제는 항상 같은 것들을 깨뜨립니다. 교차 참조, 구조적 관계, 문서 일관성입니다.</p>
<p>문제를 더 정직하게 프레이밍하면 이렇습니다. AI 워크플로우는 유용한 작업을 수행하기 위해 문서의 구조 — 관계, 참조, 형식, 시퀀스 — 를 필요로 합니다. 프라이버시 제약은 문서의 특정 요소가 외부 모델에 전송될 수 없다고 말합니다. 이 두 가지 사실은 유일하게 가능한 움직임이 <em>제거</em>일 때만 충돌합니다. 식별 콘텐츠를 전송하지 않고 구조를 전송하는 방법이 있다면 충돌은 해소됩니다.</p>
<p>이것이 삭제 기반 접근법(PII 가드레일, 마스킹, 삭제)과 변환 기반 접근법을 구별하는 아키텍처적 전환입니다. <strong>삭제 기반 도구는 <em>꺼내는 것</em>을 최적화합니다. 변환 기반 도구는 <em>사용 가능하게 남는 것</em>을 최적화합니다</strong> — 이는 다른 설계 제약이며, 다른 아키텍처를 만들어냅니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="removal-vs-transformation-title removal-vs-transformation-desc">
      <title id="removal-vs-transformation-title">삭제 기반 접근법과 변환 기반 접근법 비교</title>
      <desc id="removal-vs-transformation-desc">동일한 서비스 티켓을 삭제 기반 접근법(왼쪽)과 변환 기반 접근법(오른쪽)으로 처리한 결과를 나란히 비교합니다. 삭제는 끊어진 참조와 깨진 구조를 남기고, 변환은 구조적 역할을 보존하여 AI가 문서를 여전히 추론할 수 있도록 합니다.</desc>

      <rect x="320" y="20" width="320" height="116" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="340" y="44" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">출처: 서비스 티켓</text>
      <line x1="340" y1="54" x2="620" y2="54" stroke="#e5e7eb" stroke-width="1"/>
      <text x="340" y="74" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-77821</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">Jane Doe</tspan></text>
      <text x="340" y="92" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Device: <tspan font-weight="600" fill="#5b4fe9">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">CS-Berlin-NE-12</tspan></text>
      <text x="340" y="110" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Note: 고객이 단절 신고, 이전 티켓 참조</text>
      <text x="340" y="126" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">tickets <tspan font-weight="600" fill="#5b4fe9">TKT-9921</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-9988</tspan></text>

      <line x1="400" y1="140" x2="220" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>
      <line x1="560" y1="140" x2="740" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>

      <defs>
        <marker id="arrow-dark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f1130"/>
        </marker>
        <marker id="arrow-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-teal-fig" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>

      <rect x="40" y="180" width="360" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
      <text x="220" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">삭제 기반 · 마스킹 / 삭제(redaction)</text>

      <rect x="40" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#ef5350" stroke-width="1.5"/>
      <text x="60" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">LLM이 보는 것</text>
      <line x1="60" y1="258" x2="380" y2="258" stroke="#fce9e8" stroke-width="1"/>
      <text x="60" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan> · Customer: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan></text>
      <text x="60" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#9ca3af">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#9ca3af">CS-Berlin-NE-12</tspan></text>
      <text x="60" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: 고객이 단절 신고, 이전 티켓 참조</text>
      <text x="60" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">tickets <tspan font-weight="600" fill="#9ca3af">TKT-9921</tspan>, <tspan font-weight="600" fill="#9ca3af">TKT-9988</tspan></text>

      <rect x="40" y="370" width="360" height="74" rx="8" fill="#fce9e8" stroke="none"/>
      <text x="60" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ 끊어진 참조 — "사용자가, 하지만 [REDACTED]도"</text>
      <text x="60" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ 구조 식별자가 여전히 토폴로지를 노출</text>
      <text x="60" y="428" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ 재식별 경로 변화 없음</text>

      <rect x="560" y="180" width="360" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
      <text x="740" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">변환 기반 · 문서 구조 보존 토큰</text>

      <rect x="560" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="580" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">LLM이 보는 것</text>
      <line x1="580" y1="258" x2="900" y2="258" stroke="#eeebfe" stroke-width="1"/>
      <text x="580" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-T0001</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan></text>
      <text x="580" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#5b4fe9">SN-T0014</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">SITE-T0007</tspan></text>
      <text x="580" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan>이 단절 신고, 참조</text>
      <text x="580" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">prior tickets <tspan font-weight="600" fill="#5b4fe9">TKT-T0042</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-T0043</tspan></text>

      <rect x="560" y="370" width="360" height="74" rx="8" fill="#e6f7f6" stroke="none"/>
      <text x="580" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ 교차 참조가 일관되게 해결됨</text>
      <text x="580" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ 구조적 역할 보존; 토큰은 기업 외부에서</text>
      <text x="580" y="425" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">  의미 없음</text>
      <text x="580" y="442" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ 원본으로의 매핑은 기업 내부에 유지됨</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>동일한 서비스 티켓을 두 가지 방식으로 처리. 삭제는 AI에 필요한 참조를 끊지만, 변환은 외부 모델이 보는 것을 바꾸면서 구조를 보존합니다.</strong></figcaption>
</figure>

<h2>6. 마스킹이 실제로 효과가 있는 경우</h2>
<p>전통적인 접근법이 괜찮은 경우를 정확히 짚고 넘어갈 필요가 있습니다. 세 가지 조건이 모두 충족되어야 합니다.</p>

<ul>
  <li><strong>문서가 구조화된 운영 아티팩트가 아닌 긴 형식의 산문인 경우.</strong> 민감한 요소가 콘텐츠의 극히 일부이며 문서는 그것들 없이도 일관되게 읽힙니다.</li>
  <li><strong>AI의 작업이 교차 참조 해결, 구조 보존, 시퀀스 이해를 필요로 하지 않는 경우.</strong> 단일 소스 서사 문서를 요약하는 것은 괜찮습니다. 당사자가 유일한 민감 요소라면 계약에서 핵심 조항을 추출하는 것도 괜찮을 수 있습니다.</li>
  <li><strong>프라이버시 제약이 구조적 정보가 아닌 명명 개체에 관한 것인 경우.</strong> 우려가 <em>"고객 이름이 외부 모델에 보여서는 안 된다"</em>는 것이라면 마스킹이 해결합니다. 우려가 <em>"이 문서는 집합적으로 이름 없이도 고객을 식별한다"</em>는 것이라면 마스킹은 해결하지 못합니다.</li>
</ul>

<p>이러한 경우 — 실제로 존재합니다 — 잘 구성된 PII 가드레일은 합리적인 도구입니다. <strong>실수는 기업의 나머지 문서들이 이것들과 같다고 가정하는 것입니다.</strong></p>

<h2>7. 워크플로우 아키텍처에 대한 의미</h2>
<p>이러한 사례들에 몇 번 부딪힌 후 대부분의 팀이 내리는 결론은, 데이터 준비 레이어가 삭제와 다른 무언가를 해야 한다는 것입니다. <strong>문서의 구조와 참조를 보존하면서 경계를 넘을 수 없는 요소들을 바꿔야 합니다. 같은 형태, 다른 내용입니다.</strong></p>
<p>그 보존 속성 — 민감한 요소를 컨텍스트 안에서 동일하게 작동하는 자리 표시자로 교체하면서 구조를 유지하는 것 — 이 변환 기반 접근법을 마스킹 및 삭제와 구별합니다. AI는 여전히 서비스 티켓처럼 보이는 문서를 받습니다. 헤더와 자유형 설명과 교차 참조가 있습니다. 외부 모델은 여전히 관계를 추론할 수 있습니다. 출력은 동일한 구조적 역할을 참조하며 돌아옵니다. 기업 환경 내부에서 자리 표시자는 원본 값으로 매핑되어 복원되고, 결과는 실제 이름, 실제 ID, 실제 참조가 담긴 업무 준비 문서가 됩니다.</p>
<p>이것은 마스킹의 다른 구성이 아닙니다. 이는 데이터 준비의 다른 카테고리이며, <em>기업 문서는 AI에게 있어 콘텐츠만큼이나 구조 안에 가치가 있는 구조화된 아티팩트</em>라는 제약을 중심으로 설계됩니다.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/why-ai-stalls-on-operational-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Why AI Workflows Stall on Operational Data",
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
    title: "Warum KI-Workflows an Tabellen, Tickets und operativen Dokumenten scheitern",
    lead: "PII-Guardrails und feldbasierte Maskierung lösen den einfachen Teil des Problems — und zerstören dabei den Rest des Workflows. Eine Analyse der Stellen, an denen KI an realen operativen Daten scheitert, und warum entfernungsbasierte Ansätze das nicht beheben können.",
    category: "KI-Architektur",
    readTime: "~8 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2026",
    tldrLabel: "TL;DR",
    tldrBody: "KI-Pilotprojekte funktionieren auf bereinigten Texten, scheitern jedoch regelmäßig an realen Service-Tickets, Betriebsprotokollen sowie klinischen oder finanziellen Dokumenten. Die Ursache liegt selten im Modell — sondern in der Datenvorbereitung. PII-Guardrails, Maskierung und Schwärzung (Redaction) setzen voraus, dass sensible Inhalte eine überschaubare Menge benannter Entitäten in Fließtext sind. Operative Daten haben diese Struktur nicht. Die sensiblen Informationen stecken in der Dokumentstruktur: Querverweise, Identifikatoren, Sequenz, Topologie. Entfernungsbasierte Ansätze optimieren für das, was herausgenommen wird — und unterbrechen dabei die Querverweise, auf die die KI für ihre Schlussfolgerungen angewiesen ist. Gleichzeitig bleiben die strukturellen Informationen, die eine Re-Identifizierung ermöglichen, unberührt. Drei konkrete Fehlerszenarien — ein Telekommunikations-Service-Ticket, ein Netzwerkbetriebsprotokoll und ein klinisches oder finanzielles Dokument — zeigen dasselbe Muster: Entfernung verschlechtert die KI-Ergebnisse, ohne den Datenschutz zu verbessern. Ein besseres Erkennungsmodell löst das nicht. Die Architektur muss transformationsbasiert sein, nicht entfernungsbasiert — die Struktur erhalten und nur die Elemente ersetzen, die die Vertrauensgrenze nicht überschreiten dürfen.",
    bodyHtml: `<h2>1. Warum Maskierung und Schwärzung der erste Versuch sind</h2>
<p>In KI-Pilotprojekten von Unternehmen wiederholt sich ein bekanntes Muster: Der Proof of Concept funktioniert auf bereinigten Texten, die Demo überzeugt die Führungsebene — doch sobald derselbe Workflow auf ein echtes Service-Ticket oder ein operatives Dokument angewendet wird, kommt ein unbrauchbares Ergebnis zurück. Das Modell ist in Ordnung. Die Integration ist in Ordnung. Was versagt, ist etwas Spezifischeres — und es lässt sich fast immer auf die Datenvorbereitung zurückführen.</p>
<p>Der Standardansatz zur Vorbereitung ist eine Form der PII-Behandlung: eine Maskierungsbibliothek, eine Guardrail-API oder eine Schwärzungsverarbeitung. Das Team installiert eine dieser Lösungen, konfiguriert sie für Namen und IDs und geht davon aus, dass das Datenschutzproblem gelöst ist. Bei einer kleinen Klasse von Dokumenten — Fließtext, bei dem der sensible Teil ein Name in einem Satz ist — funktioniert das. Bei den Dokumenten, mit denen operative Teams tatsächlich arbeiten, schlägt dieser Ansatz auf eine Weise fehl, die schwer zu diagnostizieren ist.</p>
<p>Die Intuition ist nachvollziehbar. Das Problem sieht so aus: <em>„Sensible Daten befinden sich im Dokument; die KI soll sie nicht sehen; also werden die sensiblen Teile entfernt."</em> Die verfügbaren Werkzeuge — Open-Source-PII-Erkennungsbibliotheken, kommerzielle Guardrail-APIs, in Dokumentenmanagementsysteme integrierte Schwärzungsmodule — gehen alle von diesem Rahmen aus. Sie nehmen ein Dokument, identifizieren benannte Entitäten und ersetzen diese durch Platzhalter oder entfernen sie.</p>
<p>Diese Annahme gilt ausreichend gut, wenn das Dokument unstrukturierter Fließtext ist und der sensible Inhalt in wenigen namentlichen Erwähnungen konzentriert ist. Ein Lebenslauf. Eine Vertragszusammenfassung. Ein Pressemitteilungsentwurf. In diesen Dokumenten macht der Name des Kunden oder der Partei einen kleinen Anteil des Textes aus — und seine Entfernung beeinträchtigt die Bedeutung nicht.</p>
<p><strong>Diese Annahme hält nicht mehr, sobald das Dokument operativer Natur ist. Und operative Dokumente sind genau das, was Unternehmens-KI tatsächlich verarbeiten soll.</strong></p>

<h2>2. Szenario 1 — Das Service-Ticket</h2>
<p>Betrachten Sie ein einzelnes Kunden-Service-Ticket aus einem Telekommunikationsbetriebszentrum. Das Ticket hat eine Struktur: eine Kopfzeile mit Kundenkontonummer, Geräteseriennummer, betroffenem Dienst sowie Datum und Uhrzeit. Eine Freitextbeschreibung des Agenten: <em>„Kunde meldet intermittierende Verbindungsabbrüche auf Mobile-X-Leitung, nach zweitem Anruf von Stufe 1 eskaliert. Gerät zeigt Rücksetz-Ereignis um 14:22 UTC. Teilnehmer bestätigt keinen physischen Schaden, erwähnt aber niedrige Geschwindigkeiten seit dem Firmware-Update letzten Dienstag."</em> Ein verknüpfter Anhang mit einem Netzwerkprotokoll-Fragment. Verweise auf zwei weitere Ticket-IDs desselben Kunden aus dem vergangenen Monat. Eine Asset-Referenz auf den Mobilfunkmast, der die betroffene Leitung versorgt.</p>
<p>Ein PII-Guardrail analysiert dieses Ticket und findet: einen Kundennamen (sofern er in der Beschreibung steht), möglicherweise eine Telefonnummer und eine E-Mail-Adresse, falls der Agent den Kunden zitiert hat. Alles andere ist aus Sicht des Guardrails nicht sensibel.</p>
<p>Für einen EU-Telekommunikationsanbieter unter branchenspezifischen Datenlokalisierungsanforderungen ist jedoch nahezu alles andere in irgendeiner Form sensibel. Die Mobilfunkmast-Kennung offenbart geografische Standortdaten. Die Asset-Referenz kann zusammen mit dem Firmware-Update-Datum die Hardware-Konfiguration des Kunden identifizieren. Die Querverweise auf Ticket-IDs legen ein Verhaltensmuster offen. Die Seriennummer ist ein eindeutiger Identifikator. <strong>Nur die offensichtliche PII zu entfernen hinterlässt ein Dokument, in dem das meiste von dem, was es sensibel machte — und das meiste von dem, was es für die KI nützlich machte — unberührt bleibt.</strong> Der Name des Kunden ist weg; der Kunde selbst ist für jeden mit Zugang zum CRM des Betreibers weiterhin identifizierbar.</p>
<p>Dazu kommt ein zweites Problem: Das Entfernen der vom Guardrail markierten Daten beschädigt auch die Funktionsfähigkeit der KI. Die Freitextbeschreibung des Agenten referenziert durchgehend „den Kunden". Wird der Kundenname in der Kopfzeile durch <code>[REDACTED]</code> ersetzt, entstehen im Freitext hängende Verweise. Die zurückgegebene KI-Zusammenfassung wird Formulierungen enthalten wie <em>„der Nutzer erwähnte niedrige Geschwindigkeiten, aber [REDACTED] berichtete auch"</em> — für den nächsten Agenten, der dieses Ticket liest, ist das wertlos.</p>
<p>Das Ticket ist ein Geflecht aus Identifikatoren, Verweisen und Kontextfragmenten, die voneinander abhängen. <strong>Die sensiblen Teile lassen sich nicht herausnehmen, ohne die Abhängigkeiten zu zerstören — und genau diese Abhängigkeiten sind es, die die KI-Verarbeitung überhaupt erst sinnvoll machen.</strong></p>

<h2>3. Szenario 2 — Das Betriebsprotokoll</h2>
<p>Ein weiteres Beispiel: ein Zeitfenster aus den Betriebsprotokollen eines Network Operations Centers — zwanzig Minuten Alarmereignisse vor einem Dienstausfall. Das Format ist strukturiert: Zeitstempel, Schweregrad, Geräte-ID, Ereigniscode, Freitextbeschreibung, Korrelations-ID.</p>
<p>Ein PII-Guardrail findet hier praktisch nichts. Es gibt keine Kundennamen, keine E-Mail-Adressen oder Telefonnummern. Die Felder sind technische Identifikatoren und Ereigniscodes. <strong>Der Guardrail gibt das Protokoll unverändert zurück, und das Team fühlt sich sicher, es zur Root-Cause-Analyse an ein externes LLM zu senden.</strong></p>
<p>Für Netzwerkbetreiber in den meisten EU-Ländern umfassen branchenspezifische Verpflichtungen jedoch die Netzwerktopologie selbst. Geräte-IDs legen die Infrastrukturarchitektur offen. Die Alarmsequenz zusammen mit der Korrelations-ID kann Traffic-Routing-Entscheidungen preisgeben. Ereigniscodes sind teils herstellerspezifisch und verraten, welche Geräte welche Segmente betreiben. Für einen Netzbetreiber mit Kundenverpflichtungen zur Datenlokalisierung stellt die Übertragung des Rohprotokolls an einen Endpunkt außerhalb der EU einen Verstoß dar — auch wenn der Guardrail keine PII erkannt hat.</p>
<p>Die strukturellen Informationen — was mit was verbunden ist, was in welcher Reihenfolge ausgefallen ist, welches Teilsystem den Fehler weitergegeben hat — sind genau das, was die KI für eine sinnvolle Root-Cause-Analyse benötigt. Sie sind zugleich das, was das Protokoll sensibel macht. Entfernt man die Struktur, hat die KI keine Grundlage mehr. Lässt man sie stehen, sind die Daten faktisch nicht geschützt.</p>
<p>Das ist die Erkenntnis, die die meisten Teams auf die harte Tour machen: Bei operativen Daten <strong><em>ist die Struktur die Sensibilität</em></strong>. Feldbasierte Entfernung erkennt sie nicht, kann sie nicht modellieren und nicht erhalten.</p>

<h2>4. Szenario 3 — Das klinische oder finanzielle Dokument</h2>
<p>Ein drittes Szenario, weniger offensichtlich, aber häufiger anzutreffen: ein klinisches Workflow-Dokument oder ein finanzielles Prüfdokument. Eine Patientenakte mit Querverweisen auf frühere Besuche, Laborbefunde, Rezepte und einen Freitext-Kliniker-Vermerk. Eine Kreditakte mit Antragstellerdaten, Vermögensdetails, Transaktionshistorie und der Einschätzung des Underwriters.</p>
<p>Diese Dokumente enthalten etwas, das den ersten beiden fehlt: explizite persönliche Identifikatoren, die ein PII-Guardrail erkennt — Patientenname, Geburtsdatum, Kontonummer, Sozialversicherungsnummer. Das Team konfiguriert den Guardrail, führt ihn aus, und die offensichtlichen Identifikatoren werden maskiert. Das Dokument sieht bereinigt aus.</p>
<p>Die Querverweise bleiben jedoch bestehen. Der Kliniker-Vermerk nennt den Patienten „den Patienten" — soweit in Ordnung — verweist aber auch auf „das Ergebnis vom vorherigen Aufenthalt" und „die Medikamentenanpassung beim dritten Besuch". Die Laborbefundtabelle enthält strukturierte Zeilen mit Datumsangaben, Codes und Werten. Das Finanzdokument enthält eine Transaktionshistorie mit Händlernamen, Beträgen und Zeitstempeln.</p>
<p>Zwei Probleme entstehen.</p>

<ol>
  <li><strong>Querverweise können nicht mehr aufgelöst werden.</strong> Die KI sieht „das Ergebnis vom vorherigen Aufenthalt", aber der vorherige Aufenthalt wurde durch ein Token maskiert, das keine inhaltliche Information trägt. Die KI-Zusammenfassung bleibt entsprechend vage.</li>
  <li><strong>Das Dokument bleibt auch nach der Maskierung identifizierbar.</strong> Die Laborbefund-Verlaufskurve eines Patienten kann zusammen mit ungefähren Zeitangaben eine Identifizierung auch ohne Namen ermöglichen. Das Transaktionsmuster eines Kreditantragstellers kann zusammen mit grober geografischer Einordnung und einer Asset-Referenz zur Identifizierung führen. Diese Re-Identifizierungspfade sind keine theoretischen Konstrukte — sie werden von Datenschutzforschern regelmäßig demonstriert. Ein Guardrail, der direkte Identifikatoren abfängt, aber die Struktur unangetastet lässt, erreicht nicht das Datenschutzniveau, das das Team erwartet.</li>
</ol>

<p>Das Ergebnis ist das schlechteste aus beiden Welten: <strong>Die KI-Ausgabe ist degradiert, weil Querverweise unterbrochen wurden — und der Datenschutz wurde nicht verbessert, weil die strukturellen Informationen, die eine Re-Identifizierung ermöglichen, weiterhin vorhanden sind.</strong></p>

<h2>5. Warum ein besserer Guardrail das nicht löst</h2>
<p>Die naheliegende Reaktion auf diese Szenarien ist die Forderung nach einer leistungsfähigeren PII-Erkennungsmaschine. Breitere Entitätsabdeckung. Benutzerdefinierte Regeldefinitionen. Kontextbewusste Erkennung. Der Markt hat geliefert — heute gibt es PII-Guardrails mit Hunderten von Entitätstypen, konfigurierbaren benutzerdefinierten Markierungen und ML-basierter Erkennung, die über reguläre Ausdrücke hinausgeht.</p>
<p>Das sind Verbesserungen, aber sie ändern die grundlegende Architektur nicht. Die Architektur lautet nach wie vor: sensible Elemente erkennen, entfernen oder ersetzen, Ergebnis übermitteln. <strong>Die Erkennungsschicht verbessert sich; die Entfernungsschicht bleibt Entfernung.</strong> Und Entfernung zerstört dieselben Dinge wie eh und je: Querverweise, strukturelle Beziehungen, Dokumentenkohärenz.</p>
<p>Eine präzisere Formulierung des Problems lautet: Der KI-Workflow benötigt die Dokumentstruktur — Beziehungen, Verweise, Format, Sequenz — um sinnvolle Arbeit zu leisten. Die datenschutzrechtliche Anforderung besagt, dass bestimmte Elemente des Dokuments nicht an das externe Modell übermittelt werden dürfen. Diese beiden Tatsachen stehen nur dann im Konflikt, wenn die einzig verfügbare Maßnahme das <em>Entfernen</em> ist. Gibt es einen Weg, die Struktur zu übermitteln, ohne den identifizierenden Inhalt zu senden, löst sich der Konflikt auf.</p>
<p>Das ist der architektonische Wechsel, der entfernungsbasierte Ansätze (PII-Guardrails, Maskierung, Schwärzung) von transformationsbasierten Ansätzen unterscheidet. <strong>Entfernungsbasierte Werkzeuge optimieren dafür, <em>was herausgenommen wird</em>. Transformationsbasierte Werkzeuge optimieren dafür, <em>was nutzbar bleibt</em></strong> — das ist eine andere Entwurfsbedingung und erzeugt andere Architekturen.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="removal-vs-transformation-title removal-vs-transformation-desc">
      <title id="removal-vs-transformation-title">Entfernungsbasierter vs. transformationsbasierter Ansatz im Vergleich</title>
      <desc id="removal-vs-transformation-desc">Ein nebeneinander gestellter Vergleich desselben Service-Tickets, verarbeitet durch einen entfernungsbasierten Ansatz (links) und einen transformationsbasierten Ansatz (rechts). Entfernung hinterlässt hängende Verweise und eine zerstörte Struktur; Transformation erhält die strukturellen Rollen, sodass die KI das Dokument weiterhin auswerten kann.</desc>

      <rect x="320" y="20" width="320" height="116" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="340" y="44" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">QUELLE: SERVICE-TICKET</text>
      <line x1="340" y1="54" x2="620" y2="54" stroke="#e5e7eb" stroke-width="1"/>
      <text x="340" y="74" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-77821</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">Jane Doe</tspan></text>
      <text x="340" y="92" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Device: <tspan font-weight="600" fill="#5b4fe9">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">CS-Berlin-NE-12</tspan></text>
      <text x="340" y="110" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Note: Kunde meldet Abbrüche; Verweis auf</text>
      <text x="340" y="126" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">tickets <tspan font-weight="600" fill="#5b4fe9">TKT-9921</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-9988</tspan></text>

      <line x1="400" y1="140" x2="220" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>
      <line x1="560" y1="140" x2="740" y2="180" stroke="#0f1130" stroke-width="1.5" marker-end="url(#arrow-dark)"/>

      <defs>
        <marker id="arrow-dark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f1130"/>
        </marker>
        <marker id="arrow-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-teal-fig" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>

      <rect x="40" y="180" width="360" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
      <text x="220" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">Entfernungsbasiert · Maskierung / Schwärzung</text>

      <rect x="40" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#ef5350" stroke-width="1.5"/>
      <text x="60" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">WAS DAS LLM SIEHT</text>
      <line x1="60" y1="258" x2="380" y2="258" stroke="#fce9e8" stroke-width="1"/>
      <text x="60" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan> · Customer: <tspan font-weight="600" fill="#c73e3a">[REDACTED]</tspan></text>
      <text x="60" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#9ca3af">SN-A04F2</tspan> · Cell site: <tspan font-weight="600" fill="#9ca3af">CS-Berlin-NE-12</tspan></text>
      <text x="60" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: Kunde meldet Abbrüche; Verweis auf</text>
      <text x="60" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">tickets <tspan font-weight="600" fill="#9ca3af">TKT-9921</tspan>, <tspan font-weight="600" fill="#9ca3af">TKT-9988</tspan></text>

      <rect x="40" y="370" width="360" height="74" rx="8" fill="#fce9e8" stroke="none"/>
      <text x="60" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Hängende Verweise — „der Nutzer, aber [REDACTED]"</text>
      <text x="60" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Strukturidentifikatoren geben Topologie preis</text>
      <text x="60" y="428" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">✗ Re-Identifizierungspfad unverändert</text>

      <rect x="560" y="180" width="360" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
      <text x="740" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Transformationsbasiert · strukturerhaltende Token</text>

      <rect x="560" y="226" width="360" height="124" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="580" y="248" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">WAS DAS LLM SIEHT</text>
      <line x1="580" y1="258" x2="900" y2="258" stroke="#eeebfe" stroke-width="1"/>
      <text x="580" y="278" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Account: <tspan font-weight="600" fill="#5b4fe9">ACC-T0001</tspan> · Customer: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan></text>
      <text x="580" y="296" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Device: <tspan font-weight="600" fill="#5b4fe9">SN-T0014</tspan> · Cell site: <tspan font-weight="600" fill="#5b4fe9">SITE-T0007</tspan></text>
      <text x="580" y="314" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Note: <tspan font-weight="600" fill="#5b4fe9">CUST-T0001</tspan> meldet Abbrüche; Verweis auf</text>
      <text x="580" y="332" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">prior tickets <tspan font-weight="600" fill="#5b4fe9">TKT-T0042</tspan>, <tspan font-weight="600" fill="#5b4fe9">TKT-T0043</tspan></text>

      <rect x="560" y="370" width="360" height="74" rx="8" fill="#e6f7f6" stroke="none"/>
      <text x="580" y="392" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Querverweise werden konsistent aufgelöst</text>
      <text x="580" y="410" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Strukturrollen erhalten; Token haben außerhalb</text>
      <text x="580" y="425" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">  des Unternehmens keine Bedeutung</text>
      <text x="580" y="442" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0b7f7e">✓ Mapping zu Originalwerten verbleibt intern</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Dasselbe Service-Ticket, auf zwei Arten verarbeitet. Entfernung unterbricht die Verweise, die die KI benötigt; Transformation erhält die Struktur und ändert dabei, was das externe Modell sieht.</strong></figcaption>
</figure>

<h2>6. Fälle, in denen Maskierung tatsächlich ausreicht</h2>
<p>Es ist sinnvoll, präzise zu benennen, wann der traditionelle Ansatz geeignet ist. Drei Bedingungen müssen gleichzeitig erfüllt sein:</p>

<ul>
  <li><strong>Das Dokument ist Fließtext und kein strukturiertes operatives Artefakt.</strong> Die sensiblen Elemente machen einen kleinen Teil des Inhalts aus, und das Dokument bleibt auch ohne sie kohärent lesbar.</li>
  <li><strong>Die KI-Aufgabe erfordert weder das Auflösen von Querverweisen noch das Erhalten von Struktur oder das Verstehen von Sequenzen.</strong> Die Zusammenfassung eines narrativen Einzelquelldokuments ist unproblematisch. Das Extrahieren wesentlicher Klauseln aus einem Vertrag kann ausreichen, wenn die Vertragsparteien die einzigen sensiblen Elemente sind.</li>
  <li><strong>Die datenschutzrechtliche Anforderung betrifft benannte Entitäten, nicht strukturelle Informationen.</strong> Wenn die Anforderung lautet: „Der Kundenname darf dem externen Modell nicht sichtbar sein", löst Maskierung das. Wenn sie lautet: „Dieses Dokument identifiziert einen Kunden auch ohne den Namen", löst Maskierung das nicht.</li>
</ul>

<p>Für diese Fälle — sie existieren — ist ein gut konfigurierter PII-Guardrail ein geeignetes Werkzeug. <strong>Der Fehler liegt darin anzunehmen, dass die übrigen Dokumente im Unternehmen dieselbe Struktur haben.</strong></p>

<h2>7. Konsequenzen für die Workflow-Architektur</h2>
<p>Die Schlussfolgerung, zu der die meisten Teams nach mehrfachem Auftreten dieser Probleme gelangen, ist diese: Die Datenvorbereitung muss etwas anderes leisten als Entfernung. <strong>Sie muss Struktur und Querverweise des Dokuments erhalten und gleichzeitig die Elemente ersetzen, die die Vertrauensgrenze nicht überschreiten dürfen. Gleiche Form, anderer Inhalt.</strong></p>
<p>Diese Erhaltungseigenschaft — die Struktur beizubehalten und sensible Elemente durch Platzhalter zu ersetzen, die im Kontext dieselbe Rolle übernehmen — ist das, was transformationsbasierte Ansätze von Maskierung und Schwärzung unterscheidet. Die KI erhält weiterhin ein Dokument, das wie ein Service-Ticket aussieht: mit Kopfzeile, Freitextbeschreibung und Querverweisen. Das externe Modell kann weiterhin über die Beziehungen schlussfolgern. Die zurückgegebenen Ergebnisse referenzieren dieselben strukturellen Rollen. Innerhalb der Unternehmensumgebung werden die Platzhalter auf die Originalwerte zurückgemappt — das Ergebnis ist ein unmittelbar einsatzbereites Dokument mit echten Namen, echten IDs und echten Referenzen.</p>
<p>Das ist keine andere Konfiguration von Maskierung. Es ist eine andere Kategorie der Datenvorbereitung — konzipiert für die Anforderung, dass <em>Unternehmensdokumente strukturierte Artefakte sind, deren Wert für die KI ebenso in ihrer Struktur wie in ihrem Inhalt liegt</em>. Diese Anforderung ist im deutschen Unternehmensumfeld besonders relevant: DSGVO (GDPR) und BSI C5 decken operative Strukturinformationen ab, nicht nur namentliche Personendaten.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/why-ai-stalls-on-operational-data",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    inLanguage: "en-GB",
    breadcrumbLabel: "Why AI Workflows Stall on Operational Data",
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

export default function WhyAiStallsOnOperationalData({
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

addPropertyControls(WhyAiStallsOnOperationalData, {
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
