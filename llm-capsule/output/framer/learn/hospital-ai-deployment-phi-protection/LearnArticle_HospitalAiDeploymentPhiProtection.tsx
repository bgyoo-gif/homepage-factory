import { addPropertyControls, ControlType } from "framer"

// LearnArticle — How to Deploy AI in a Hospital Without Exposing PHI
// Article page: /learn/hospital-ai-deployment-phi-protection
// Uses the LearnArticle shared template structure (Hero → TL;DR → Body → Related)
// All text is Props-controlled for Framer CMS compatibility.

interface Props {
  // Hero
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string

  // TL;DR
  tldrLabel?: string
  tldrBody?: string

  // Body — rich HTML string rendered with dangerouslySetInnerHTML
  bodyHtml?: string

  // SEO / JSON-LD
  canonicalUrl?: string
  datePublished?: string

  // Related links
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string

  // CTA strip
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_BODY_HTML = `
<h2>The clinical AI adoption barrier</h2>
<p>Every hospital wants AI to help with the documentation burden. Radiology backlog, clinical note-taking, discharge summaries, billing coding — all painful, all time-consuming, all driven by structured + unstructured data that includes deeply private patient information. Studies show 30-50% time reduction in clinical documentation when AI is permitted to assist.</p>
<p>But PHI cannot leave the hospital network. HIPAA, regional privacy laws (GDPR in EU hospitals, K-PIPA in Korean hospitals), and increasingly hospital boards' own data governance policies forbid sending patient identifiers to external LLM endpoints. PII guardrails detect names but miss the operational data — clinical workflow context, lab results sequence, medication history pattern, care pathway — that real clinical AI summarization needs.</p>
<p>Most hospitals stall at pilot. AI vendors over-promise; security teams block; physicians use shadow AI on personal devices. The pilot never reaches the EHR.</p>

<h2>What the AI enablement data layer changes</h2>
<p>An <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> like LLM Capsule sits between the EHR (Epic, Cerner, internal HIS) and the LLM. PHI is encapsulated locally — patient name becomes ⟨P_xxxx⟩, MRN becomes ⟨MR_yyyy⟩, structure preserved. The LLM drafts the radiology summary on the capsule. The output is restored locally, inside the hospital network, and inserted back into the EHR record. The LLM provider never sees PHI.</p>

<h2>Five clinical data categories the data layer protects</h2>
<ul>
  <li><strong>Direct identifiers</strong> — patient name, MRN, date of birth, SSN, phone, address, photo references</li>
  <li><strong>Clinical identifiers</strong> — diagnoses, lab result IDs, prescription IDs, procedure codes, order numbers</li>
  <li><strong>Workflow context</strong> — admission flow, care pathway, ward / unit, attending physician, consult chain</li>
  <li><strong>Free-text PHI</strong> — clinical notes, discharge summaries, radiologist impressions, nurse observations</li>
  <li><strong>Billing / claim PHI</strong> — claim review records, insurer references, prior authorization context</li>
</ul>

<h2>Five-step deployment pattern</h2>

<h3>Step 1 — EHR connector + scope</h3>
<p>Determine the integration point. Most hospitals start with a single workflow — radiology report drafting or discharge summary drafting — before expanding. LLM Capsule connects to Epic, Cerner, or internal HIS via FHIR API or HL7 messaging. Scope the pilot to one specialty (radiology, oncology, ED) and one workflow (report draft, summary, coding).</p>

<h3>Step 2 — HIPAA-aligned policy</h3>
<p>Define markers in alignment with HIPAA's 18 PHI identifiers + the hospital's internal privacy policy. Add hospital-specific markers (internal patient classification codes, clinical research workflow tags, study-specific identifiers). Document policy version with the privacy officer; this becomes part of the HIPAA risk assessment.</p>

<h3>Step 3 — On-prem path for high-sensitivity workflows</h3>
<p>For workflows involving mental health, substance abuse, HIV/AIDS, reproductive health, or pediatric data — use Path B (on-prem local lightweight model). For lower-sensitivity workflows (radiology measurement summarization, billing assist), Path A (approved external LLM with capsule only) is acceptable under hospital policy. Both paths share the same Capsule instance.</p>

<h3>Step 4 — Clinician integration</h3>
<p>Restored AI output appears inside the EHR — radiologist's PACS, attending physician's note pane, billing coder's interface. No new tool to learn. The audit badge "Restored · LLM Capsule · Policy hospital-rad-v3" is visible on the AI-generated content for transparency.</p>

<h3>Step 5 — Audit + IRB</h3>
<p>Configure audit logs to feed the hospital's compliance dashboard. For research-related deployments, the audit log supports IRB review and HIPAA risk assessment. Monthly review with the privacy office.</p>

<h2>Real customer outcomes</h2>
<p>Ewha Womans University Medical Center (EUMC) deployed LLM Capsule for clinical workflow summarization. PHI never traverses the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. Full audit trail for HIPAA-aligned compliance reporting.</p>

<h2>Common deployment pitfalls</h2>
<ul>
  <li><strong>Underestimating free-text PHI.</strong> The hardest data to protect is unstructured clinical notes. The data layer must include free-text NER masking — not just structured field detection.</li>
  <li><strong>Skipping the privacy officer.</strong> HIPAA risk assessment must be done up front. Don't deploy and ask for forgiveness.</li>
  <li><strong>One-size-fits-all policy.</strong> Mental health, substance use, and pediatric workflows need stricter policies than general medicine. Use per-workflow scope.</li>
  <li><strong>Ignoring billing.</strong> Billing-related AI workflows often surprise privacy reviewers — claim records carry PHI too. Include billing in the initial policy.</li>
</ul>

<h2>Getting started</h2>
<p>Bring one real radiology study, one discharge summary template, and the hospital's privacy policy. LLM Capsule deploys on a sample workflow within 30 minutes; we generate an evaluation report against your privacy policy.</p>
<p><a href="/request-a-demo" class="la-btn la-btn--primary">Request a hospital AI demo</a></p>

<h2>Related</h2>
<ul>
  <li><a href="/learn/differential-privacy-for-enterprise-llm">Differential privacy for enterprise LLM</a></li>
  <li><a href="/learn/on-prem-llm-execution-path">On-premise LLM execution path</a></li>
  <li><a href="/glossary/operational-data">Glossary: Operational data</a></li>
  <li><a href="/solutions">Solutions: Healthcare industry</a></li>
</ul>
`

export default function LearnArticle_HospitalAiDeploymentPhiProtection({
  backLabel = "← Learn",
  backHref = "/learn",
  title = "How to deploy AI in a hospital without exposing PHI",
  lead = "A practical guide for hospital CIOs, CMIOs, and clinical informatics teams to bring AI into radiology, clinical documentation, and care coordination — without sending PHI to external LLMs.",
  category = "Industry · Healthcare",
  readTime = "11 min read",
  dateUpdated = "Updated April 2025",
  tldrLabel = "TL;DR — Definition",
  tldrBody = "A hospital AI deployment with PHI protection uses an AI enablement data layer to encapsulate patient names, MRN, diagnoses, lab results, prescriptions, and clinical workflow context locally before any data reaches an external LLM. The LLM drafts radiology reports, clinical summaries, and care coordination outputs on the protected capsule; outputs are restored back into the EHR inside the hospital network. HIPAA-aligned. Deployed at Ewha Womans University Medical Center (EUMC).",
  bodyHtml = DEFAULT_BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/learn/hospital-ai-deployment-phi-protection",
  datePublished = "2025-04-15",
  relatedSectionLabel = "Continue reading",
  related1Title = "Differential privacy for enterprise LLM",
  related1Href = "/learn/differential-privacy-for-enterprise-llm",
  related2Title = "On-premise LLM execution path",
  related2Href = "/learn/on-prem-llm-execution-path",
  related3Title = "Glossary: Operational data",
  related3Href = "/glossary/operational-data",
  related4Title = "Solutions: Healthcare industry",
  related4Href = "/solutions",
  ctaTitle = "Hospital AI without PHI leaving the network.",
  ctaDescription = "30-minute review. Bring one radiology workflow or discharge summary template — we'll show how Capsule deploys on your EHR.",
  ctaLabel = "Request a hospital AI demo",
  ctaHref = "/request-a-demo",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": lead,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG" },
    "datePublished": datePublished,
    "dateModified": "2025-04-15",
    "mainEntityOfPage": canonicalUrl,
    "wordCount": 1800,
  })

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why can't hospitals just use anonymization before sending data to an LLM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard anonymization strips names and obvious identifiers but removes the clinical context the LLM needs to produce useful output. Output quality drops 30–50%. The AI enablement data layer uses structure-preserving encapsulation — PHI is tokenized, not removed — so the LLM receives enough context to draft accurate clinical summaries while PHI never leaves the hospital network in raw form.",
        },
      },
      {
        "@type": "Question",
        "name": "Which EHR systems does LLM Capsule integrate with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLM Capsule connects to Epic, Cerner, and internal HIS systems via FHIR API or HL7 messaging. Integration is scoped per workflow — radiology report drafting, discharge summary drafting, billing coding — before expanding to additional workflows.",
        },
      },
      {
        "@type": "Question",
        "name": "Is this HIPAA-compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The deployment is designed to be HIPAA-aligned. Marker definitions cover all 18 HIPAA PHI identifier categories. The privacy officer defines and versions the policy; the audit log supports HIPAA risk assessment and IRB review. Deployed at Ewha Womans University Medical Center (EUMC).",
        },
      },
      {
        "@type": "Question",
        "name": "What about high-sensitivity workflows like mental health or pediatric data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For mental health, substance abuse, HIV/AIDS, reproductive health, or pediatric data — LLM Capsule routes to Path B (on-prem local lightweight model) with zero external exposure. Lower-sensitivity workflows can use Path A (approved external LLM with capsule). Both paths share the same Capsule instance and policy framework.",
        },
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .hphi-root {
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
        .hphi-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .hphi-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .hphi-hero__back {
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
        .hphi-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .hphi-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .hphi-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .hphi-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
          max-width: 760px;
        }

        .hphi-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-teal-soft, #e6f7f6);
          color: var(--c-teal, #0ea5a4);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hphi-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .hphi-meta__time,
        .hphi-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .hphi-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .hphi-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .hphi-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .hphi-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .hphi-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .hphi-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .hphi-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .hphi-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .hphi-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .hphi-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .hphi-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .hphi-body p:last-child { margin-bottom: 0; }

        .hphi-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .hphi-body ul,
        .hphi-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .hphi-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .hphi-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .hphi-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .hphi-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .hphi-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .hphi-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .hphi-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .hphi-body pre::-webkit-scrollbar { display: none; }

        .hphi-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .hphi-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .hphi-body th,
        .hphi-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .hphi-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .hphi-body tr:last-child td { border-bottom: none; }

        /* Callout */
        .hphi-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-teal-soft, #e6f7f6);
          border-left: 3px solid var(--c-teal, #0ea5a4);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .hphi-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Inline links inside body */
        .hphi-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .hphi-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body */
        .hphi-body .la-btn {
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
        .hphi-body .la-btn:hover { border-bottom: none; }

        .hphi-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .hphi-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── 4. Related Links ─────────────────────────────── */
        .hphi-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .hphi-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .hphi-related__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .hphi-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 768px) and (max-width: 1023px) {
          .hphi-related__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .hphi-related__card {
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
        .hphi-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .hphi-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .hphi-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── 5. CTA Strip ─────────────────────────────────── */
        .hphi-cta {
          padding: clamp(56px, 7vw, 96px) 0;
          background-color: var(--c-bg-dark, #0f1130);
        }

        .hphi-cta__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .hphi-cta__title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          max-width: 640px;
        }

        .hphi-cta__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 8px;
          max-width: 560px;
        }

        .hphi-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border: none;
          transition: background-color 0.2s, color 0.2s;
        }
        .hphi-cta__btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .hphi-hero { padding-top: 48px; }
          .hphi-hero__title { font-size: 28px; }
          .hphi-hero__lead { font-size: 16px; }
          .hphi-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .hphi-body p,
          .hphi-body li { font-size: 16px; }
          .hphi-body h2 { padding-top: 28px; }
          .hphi-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .hphi-body table::-webkit-scrollbar { display: none; }
          .hphi-cta__inner { gap: 10px; }
          .hphi-cta__title { font-size: 24px; }
          .hphi-cta__desc { font-size: 15px; }
        }
      `}</style>

      <div className="hphi-root">

        {/* ── 1. Article Hero ── */}
        <section className="hphi-hero">
          <div className="hphi-container">
            <a href={backHref} className="hphi-hero__back">{backLabel}</a>
            <h1 className="hphi-hero__title">{title}</h1>
            <p className="hphi-hero__lead">{lead}</p>
            <div className="hphi-hero__meta">
              <span className="hphi-meta__chip">{category}</span>
              <span className="hphi-meta__sep" aria-hidden="true" />
              <span className="hphi-meta__time">{readTime}</span>
              <span className="hphi-meta__sep" aria-hidden="true" />
              <span className="hphi-meta__date">{dateUpdated}</span>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="hphi-tldr-wrap">
          <div className="hphi-container">
            <div className="hphi-tldr">
              <div className="hphi-tldr__label">{tldrLabel}</div>
              <p className="hphi-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="hphi-body-wrap">
          <div className="hphi-container">
            <article
              className="hphi-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="hphi-related">
            <div className="hphi-container">
              <div className="hphi-related__label">{relatedSectionLabel}</div>
              <div className="hphi-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="hphi-related__card">
                    <span className="hphi-related__card-title">{item.title}</span>
                    <span className="hphi-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. CTA Strip ── */}
        <div className="hphi-cta">
          <div className="hphi-container">
            <div className="hphi-cta__inner">
              <h2 className="hphi-cta__title">{ctaTitle}</h2>
              {ctaDescription && (
                <p className="hphi-cta__desc">{ctaDescription}</p>
              )}
              <a href={ctaHref} className="hphi-cta__btn">{ctaLabel}</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticle_HospitalAiDeploymentPhiProtection, {
  // Hero
  backLabel:   { type: ControlType.String, title: "Back Label",    defaultValue: "← Learn" },
  backHref:    { type: ControlType.String, title: "Back URL",      defaultValue: "/learn" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "How to deploy AI in a hospital without exposing PHI" },
  lead:        { type: ControlType.String, title: "Lead",          defaultValue: "A practical guide for hospital CIOs, CMIOs, and clinical informatics teams to bring AI into radiology, clinical documentation, and care coordination — without sending PHI to external LLMs.", displayTextArea: true },
  category:    { type: ControlType.String, title: "Category",      defaultValue: "Industry · Healthcare" },
  readTime:    { type: ControlType.String, title: "Read Time",     defaultValue: "11 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated",  defaultValue: "Updated April 2025" },

  // TL;DR
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR — Definition" },
  tldrBody:  { type: ControlType.String, title: "TL;DR Body",  defaultValue: "A hospital AI deployment with PHI protection uses an AI enablement data layer to encapsulate patient names, MRN, diagnoses, lab results, prescriptions, and clinical workflow context locally before any data reaches an external LLM. The LLM drafts radiology reports, clinical summaries, and care coordination outputs on the protected capsule; outputs are restored back into the EHR inside the hospital network. HIPAA-aligned. Deployed at Ewha Womans University Medical Center (EUMC).", displayTextArea: true },

  // Body HTML
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: DEFAULT_BODY_HTML, displayTextArea: true },

  // SEO
  canonicalUrl:  { type: ControlType.String, title: "Canonical URL",   defaultValue: "https://llmcapsule.ai/learn/hospital-ai-deployment-phi-protection" },
  datePublished: { type: ControlType.String, title: "Date Published",  defaultValue: "2025-04-15" },

  // Related links
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Continue reading" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Differential privacy for enterprise LLM" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/learn/differential-privacy-for-enterprise-llm" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "On-premise LLM execution path" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/learn/on-prem-llm-execution-path" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Glossary: Operational data" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/operational-data" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "Solutions: Healthcare industry" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/solutions" },

  // CTA strip
  ctaTitle:       { type: ControlType.String, title: "CTA Title",        defaultValue: "Hospital AI without PHI leaving the network." },
  ctaDescription: { type: ControlType.String, title: "CTA Description",  defaultValue: "30-minute review. Bring one radiology workflow or discharge summary template — we'll show how Capsule deploys on your EHR.", displayTextArea: true },
  ctaLabel:       { type: ControlType.String, title: "CTA Button Label", defaultValue: "Request a hospital AI demo" },
  ctaHref:        { type: ControlType.String, title: "CTA Button URL",   defaultValue: "/request-a-demo" },
})
