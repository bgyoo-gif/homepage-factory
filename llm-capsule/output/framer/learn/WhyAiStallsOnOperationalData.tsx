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

export default function WhyAiStallsOnOperationalData({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "Why AI Workflows Stall at Tables, Tickets, and Operational Documents",
  lead = "PII guardrails and field-level masking solve the easy half of the problem and break the rest of the workflow. A look at where AI stalls on real operational data — and why removal-based approaches can't fix it.",
  category = "AI Architecture",
  readTime = "~8 min read",
  dateUpdated = "Updated May 2026",
  tldrLabel = "TL;DR",
  tldrBody = "Enterprise AI pilots work on clean text, then fail when run against real service tickets, operational logs, and clinical or financial documents. The cause is rarely the model — it's the data-preparation layer. PII guardrails, masking, and redaction assume sensitive content is a small set of named entities in long-form prose. Operational data isn't shaped that way. The sensitive information lives in the structure: cross-references, identifiers, sequence, topology. Removal-based approaches optimise for what's taken out and break the cross-references the AI needs to reason about — while leaving the structural information that enables re-identification untouched. Three concrete failure cases — a telecom service ticket, a network operations log, a clinical or financial document — show the same pattern: removal makes the AI's output worse and the privacy posture no better. A better detection engine doesn't fix this; the architecture has to be transformation-based, not removal-based — keeping the structure while changing the elements that can't cross the boundary.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/why-ai-stalls-on-operational-data",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "en-GB",
  breadcrumbLabel = "Why AI Workflows Stall on Operational Data",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "Related articles",
  related1Title = "Running External LLMs on Data Your Company Can't Send Externally",
  related1Href = "/resources/learn/external-llm-on-sensitive-enterprise-data",
  related2Title = "Tokenization for LLM Inputs: How AI Reads What It Doesn't See",
  related2Href = "/resources/learn/tokenization-for-llm-inputs",
  related3Title = "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality",
  related3Href = "/resources/learn/reconstructing-ai-output",
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

addPropertyControls(WhyAiStallsOnOperationalData, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "PII guardrails and field-level masking solve the easy half of the problem and break the rest of the workflow. A look at where AI stalls on real operational data — and why removal-based approaches can't fix it.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~8 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "Updated May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "Enterprise AI pilots work on clean text, then fail when run against real service tickets, operational logs, and clinical or financial documents. The cause is rarely the model — it's the data-preparation layer. PII guardrails, masking, and redaction assume sensitive content is a small set of named entities in long-form prose. Operational data isn't shaped that way. The sensitive information lives in the structure: cross-references, identifiers, sequence, topology. Removal-based approaches optimise for what's taken out and break the cross-references the AI needs to reason about — while leaving the structural information that enables re-identification untouched. Three concrete failure cases — a telecom service ticket, a network operations log, a clinical or financial document — show the same pattern: removal makes the AI's output worse and the privacy posture no better. A better detection engine doesn't fix this; the architecture has to be transformation-based, not removal-based — keeping the structure while changing the elements that can't cross the boundary.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/why-ai-stalls-on-operational-data" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "Why AI Workflows Stall on Operational Data" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Running External LLMs on Data Your Company Can't Send Externally" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/external-llm-on-sensitive-enterprise-data" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/tokenization-for-llm-inputs" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/reconstructing-ai-output" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
