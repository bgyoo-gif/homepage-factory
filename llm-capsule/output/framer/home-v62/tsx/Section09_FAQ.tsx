import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// CMS: FAQs — question, answer, page
interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string
  faq5Q?: string
  faq5A?: string
  faq6Q?: string
  faq6A?: string
}

export default function Section09_FAQ({
  eyebrow = "FAQ",
  heading = "Frequently Asked ",
  headingHighlight = "Questions",
  faq1Q = "What is a context-preserving data layer for AI?",
  faq1A = "A context-preserving data layer for AI sits between the existing regulated enterprise environment (NOC, ticket, OSS/BSS, OT consoles, EHR, mission systems, document portals) and large language models. It turns operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation, executes the AI workflow inside the enterprise environment, and restores results back into the originating workflow. It moves AI projects from pilot to production on real enterprise data.",
  faq2Q = "How is LLM Capsule different from PII guardrails or AI security tools?",
  faq2A = "PII guardrails detect and mask personal identifiers at the API or prompt level. AI security tools focus on prompt injection and runtime threats. LLM Capsule operates one layer deeper — at the context-preserving data layer for AI. It transforms structured operational data using structure-preserving, differential-privacy-based encapsulation, supports both external LLM and on-prem local execution paths, and provides two-way restoration via state vault. It plugs into legacy enterprise systems with no architectural change required.",
  faq3Q = "Can our team define what counts as sensitive?",
  faq3A = "Yes. Context-aware data control lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve. Standard PII categories are not enough — define project codes, deal terms, internal IDs, network identifiers, asset references, mission references, and any business-specific marker. Yesterday's sensitive data isn't tomorrow's; the policy adapts.",
  faq4Q = "Can LLM Capsule run on-premise or air-gapped?",
  faq4A = "Yes. Six deployment modes: on-premise, air-gapped, hybrid, cloud (AWS Marketplace), embedded SDK, and Slack App. Two execution paths: external approved LLM with capsule data only (no raw operational data exposure) or on-prem local lightweight model (zero external transmission). Path selection is policy-driven per workflow. Capsule runs inside the customer environment in every mode — integration interfaces (REST / gRPC / JDBC / Graph API / on-prem API / SDK / Slack App) let existing enterprise systems invoke it from inside the environment.",
  faq5Q = "Which industries and customers use LLM Capsule?",
  faq5A = "Telecom (Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance, SK Telecom), industrial cybersecurity and OT (partner: Claroty), healthcare (EUMC), finance and insurance (Kyobo, DB Insurance, IBK), legal (Shin&Kim), public sector / defense (Ministry of National Defense, South Korea), and cloud sovereignty (NAVER Cloud). Recognized as a Gartner Vendor and listed on AWS Marketplace.",
  faq6Q = "What compliance frameworks does LLM Capsule support?",
  faq6A = "LLM Capsule supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific regulations by ensuring sensitive data never leaves the enterprise environment during AI processing. Certifications include ISO/IEC 27001 (information security management) and ISO/IEC 42001 (AI management system). Korean certifications include KISA Information Security Fast Track, GS Certification, and TTA.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
    { q: faq4Q, a: faq4A },
    { q: faq5Q, a: faq5A },
    { q: faq6Q, a: faq6A },
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  }

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s9-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s9-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s9-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s9-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s9-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s9-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 0;
        }

        .s9-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s9-faq {
          max-width: 880px;
          margin: 0 auto;
        }

        .s9-item {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s9-item:first-child {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .s9-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 0;
          text-align: left;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          line-height: 1.4;
        }

        .s9-question:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .s9-icon {
          flex-shrink: 0;
          font-size: 24px;
          color: var(--c-muted, #6b7280);
          transition: transform 0.2s;
          line-height: 1;
        }

        .s9-icon--open {
          transform: rotate(45deg);
        }

        .s9-answer {
          padding-bottom: 20px;
          color: var(--c-ink-soft, #3a3d5e);
          font-size: 15px;
          line-height: 1.7;
        }
      `}</style>

      <div className="s9-root">
        <section className="s9-section">
          <div className="s9-container">
            <header className="s9-header">
              <span className="s9-eyebrow">{eyebrow}</span>
              <h2 className="s9-h2">
                {heading}<span>{headingHighlight}</span>
              </h2>
            </header>

            <div className="s9-faq" role="list">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="s9-item" role="listitem">
                  <button
                    className="s9-question"
                    aria-expanded={openIndex === i}
                    onClick={() => toggle(i)}
                  >
                    <span>{q}</span>
                    <span className={`s9-icon${openIndex === i ? " s9-icon--open" : ""}`} aria-hidden="true">+</span>
                  </button>
                  {openIndex === i && (
                    <div className="s9-answer">{a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section09_FAQ, {
  eyebrow:  { type: ControlType.String, title: "Eyebrow",  defaultValue: "FAQ" },
  heading:  { type: ControlType.String, title: "H2 Text",  defaultValue: "Frequently Asked " },
  headingHighlight: { type: ControlType.String, title: "H2 Highlight", defaultValue: "Questions" },
  faq1Q:    { type: ControlType.String, title: "FAQ 1 Q",  defaultValue: "What is a context-preserving data layer for AI?" },
  faq1A:    { type: ControlType.String, title: "FAQ 1 A",  defaultValue: "A context-preserving data layer for AI sits between the existing regulated enterprise environment (NOC, ticket, OSS/BSS, OT consoles, EHR, mission systems, document portals) and large language models. It turns operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation, executes the AI workflow inside the enterprise environment, and restores results back into the originating workflow. It moves AI projects from pilot to production on real enterprise data.", multiLine: true },
  faq2Q:    { type: ControlType.String, title: "FAQ 2 Q",  defaultValue: "How is LLM Capsule different from PII guardrails or AI security tools?" },
  faq2A:    { type: ControlType.String, title: "FAQ 2 A",  defaultValue: "PII guardrails detect and mask personal identifiers at the API or prompt level. AI security tools focus on prompt injection and runtime threats. LLM Capsule operates one layer deeper — at the context-preserving data layer for AI. It transforms structured operational data using structure-preserving, differential-privacy-based encapsulation, supports both external LLM and on-prem local execution paths, and provides two-way restoration via state vault. It plugs into legacy enterprise systems with no architectural change required.", multiLine: true },
  faq3Q:    { type: ControlType.String, title: "FAQ 3 Q",  defaultValue: "Can our team define what counts as sensitive?" },
  faq3A:    { type: ControlType.String, title: "FAQ 3 A",  defaultValue: "Yes. Context-aware data control lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve. Standard PII categories are not enough — define project codes, deal terms, internal IDs, network identifiers, asset references, mission references, and any business-specific marker. Yesterday's sensitive data isn't tomorrow's; the policy adapts.", multiLine: true },
  faq4Q:    { type: ControlType.String, title: "FAQ 4 Q",  defaultValue: "Can LLM Capsule run on-premise or air-gapped?" },
  faq4A:    { type: ControlType.String, title: "FAQ 4 A",  defaultValue: "Yes. Six deployment modes: on-premise, air-gapped, hybrid, cloud (AWS Marketplace), embedded SDK, and Slack App. Two execution paths: external approved LLM with capsule data only (no raw operational data exposure) or on-prem local lightweight model (zero external transmission). Path selection is policy-driven per workflow. Capsule runs inside the customer environment in every mode — integration interfaces (REST / gRPC / JDBC / Graph API / on-prem API / SDK / Slack App) let existing enterprise systems invoke it from inside the environment.", multiLine: true },
  faq5Q:    { type: ControlType.String, title: "FAQ 5 Q",  defaultValue: "Which industries and customers use LLM Capsule?" },
  faq5A:    { type: ControlType.String, title: "FAQ 5 A",  defaultValue: "Telecom (Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance, SK Telecom), industrial cybersecurity and OT (partner: Claroty), healthcare (EUMC), finance and insurance (Kyobo, DB Insurance, IBK), legal (Shin&Kim), public sector / defense (Ministry of National Defense, South Korea), and cloud sovereignty (NAVER Cloud). Recognized as a Gartner Vendor and listed on AWS Marketplace.", multiLine: true },
  faq6Q:    { type: ControlType.String, title: "FAQ 6 Q",  defaultValue: "What compliance frameworks does LLM Capsule support?" },
  faq6A:    { type: ControlType.String, title: "FAQ 6 A",  defaultValue: "LLM Capsule supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific regulations by ensuring sensitive data never leaves the enterprise environment during AI processing. Certifications include ISO/IEC 27001 (information security management) and ISO/IEC 42001 (AI management system). Korean certifications include KISA Information Security Fast Track, GS Certification, and TTA.", multiLine: true },
})
