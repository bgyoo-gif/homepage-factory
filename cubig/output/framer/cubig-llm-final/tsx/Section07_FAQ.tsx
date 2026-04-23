import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const P = {
  brandPurple:    "#725bea",
  neutral025: "#f7f7f7",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textMuted:     "#cacccf",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
  surfaceMid:   "#f2f2f2",
}

interface FAQItem {
  q: string
  a: string
  linkLabel?: string
  linkHref?: string
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq3LinkLabel?: string
  faq3LinkHref?: string
  faq4Q?: string
  faq4A?: string
  faq5Q?: string
  faq5A?: string
  faq6Q?: string
  faq6A?: string
  faq7Q?: string
  faq7A?: string
  faq7LinkLabel?: string
  faq7LinkHref?: string
  faq8Q?: string
  faq8A?: string
}

export default function Section07_FAQ({
  sectionTitle = "Common",
  sectionTitleHighlight = "questions",
  faq1Q = "What is CUBIG LLM Capsule?",
  faq1A = "LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive enterprise data locally before any AI processing, enables any LLM to work on real documents without exposure, and restores AI outputs with original data automatically. It addresses the restricted data blocker — one of three blockers in CUBIG's AI-Ready Data Infrastructure framework.",
  faq2Q = "How is LLM Capsule different from data masking and redaction?",
  faq2A = "Masking and redaction permanently remove sensitive data, destroying the context AI models need. AI outputs from masked input contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule creates a restorable workflow: data is encapsulated with structure-preserving processing, AI produces complete outputs, and restoration maps original values back automatically. The result is usable enterprise documents, not broken fragments.",
  faq3Q = "How is LLM Capsule different from prompt security gateways?",
  faq3A = "Prompt security gateways filter at the API level — scanning prompts and blocking or stripping flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates at the data layer, encapsulating sensitive elements before any AI processing and restoring outputs afterward. It is an enablement layer, not a filter.",
  faq3LinkLabel = "See full comparison",
  faq3LinkHref = "https://llmcapsule.ai/product",
  faq4Q = "Why does restoration matter for enterprise AI?",
  faq4A = 'Without restoration, AI outputs are unusable for real enterprise work. A summary that says "[PERSON_01] filed [ID_04] on [DATE_02]" cannot go into a report. Restoration automatically maps original names, figures, dates, and references back into AI outputs — making them directly usable in claims processing, legal review, clinical reports, and business operations without manual intervention.',
  faq5Q = "How does LLM Capsule fit into CUBIG's AI-Ready Data Infrastructure?",
  faq5A = "CUBIG's AI-Ready Data Infrastructure solves three blockers to enterprise AI. LLM Capsule solves restricted data — sensitive information that cannot be exposed to external AI. DTS solves unusable data — insufficient or privacy-locked training datasets. SynTitan solves unstable execution — production AI pipelines that break when data changes. LLM Capsule works standalone or within SynTitan workflows.",
  faq6Q = "How is LLM Capsule different from DTS?",
  faq6A = "They operate at different layers. LLM Capsule protects data during AI usage at the interaction layer — encapsulating and restoring in real time. DTS generates privacy-safe synthetic datasets for AI training and validation at the dataset layer. Both are part of CUBIG's AI-Ready Data Infrastructure. Both are necessary for complete enterprise AI data protection.",
  faq7Q = "What deployment modes does LLM Capsule support?",
  faq7A = "On-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment. The encapsulation engine runs entirely within the enterprise environment regardless of deployment type.",
  faq7LinkLabel = "See architecture details",
  faq7LinkHref = "https://llmcapsule.ai/architecture",
  faq8Q = "Why should an enterprise choose CUBIG?",
  faq8A = "CUBIG is the only vendor offering a complete AI-Ready Data Infrastructure — from data-layer protection (LLM Capsule) to synthetic data generation (DTS) to production execution orchestration (SynTitan). LLM Capsule is GS Certified, ISO 27001/42001 certified, deployed at Deutsche Telekom, Claroty, DB Insurance, EUMC, and Shin&Kim, and available on AWS Marketplace.",
}: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A, linkLabel: faq3LinkLabel, linkHref: faq3LinkHref },
    { q: faq4Q, a: faq4A },
    { q: faq5Q, a: faq5A },
    { q: faq6Q, a: faq6A },
    { q: faq7Q, a: faq7A, linkLabel: faq7LinkLabel, linkHref: faq7LinkHref },
    { q: faq8Q, a: faq8A },
  ]

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s7-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s7-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s7-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
        }

        .s7-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        @container (max-width: 767px) {
          .s7-section-header { text-align: left; }
        }

        .s7-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s7-section-title { font-size: 20px; }
        }

        .s7-brand { color: ${P.brandPurple}; }

        .s7-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .s7-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }

        .s7-ac-card:hover { background-color: ${P.neutral025}; }

        .s7-ac-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }

        .s7-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (max-width: 767px) {
          .s7-ac-title { font-size: 15px; }
        }

        .s7-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s;
          position: relative;
        }

        .s7-ac-toggle:hover {
          border-color: ${P.textPrimary};
          background-color: ${P.surfaceMid};
        }

        .s7-ac-toggle::before,
        .s7-ac-toggle::after {
          content: '';
          position: absolute;
          background-color: ${P.textMuted};
          border-radius: 1px;
          transition: opacity 0.2s;
        }

        .s7-ac-toggle::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .s7-ac-toggle::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }

        .s7-ac-toggle-open::after { opacity: 0; }
        .s7-ac-toggle-open::before { background-color: ${P.textSecondary}; }

        .s7-ac-body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
        }

        .s7-ac-body p {
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s7-ac-body p + p { margin-top: 12px; }

        .s7-ac-link { margin-top: 12px; }

        .s7-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid ${P.borderDefault};
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: ${P.textPrimary};
        }

        .s7-btn-secondary:hover { background-color: ${P.surfaceLight}; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="s7-root">
        <section className="s7-section" id="section-faq">
          <div className="s7-container">
            <div className="s7-section-header">
              <h2 className="s7-section-title">
                {sectionTitle} <span className="s7-brand">{sectionTitleHighlight}</span>
              </h2>
            </div>

            <div className="s7-ac-list">
              {faqs.map((faq, i) => (
                <div key={i} className="s7-ac-card">
                  <div
                    className="s7-ac-header"
                    onClick={() => toggle(i)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openIdx === i}
                    onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); } }}
                  >
                    <div>
                      <span className="s7-ac-title">{faq.q}</span>
                    </div>
                    <div className={`s7-ac-toggle${openIdx === i ? " s7-ac-toggle-open" : ""}`} aria-hidden="true" />
                  </div>
                  {openIdx === i && (
                    <div className="s7-ac-body">
                      <p>{faq.a}</p>
                      {faq.linkLabel && faq.linkHref && (
                        <p className="s7-ac-link">
                          <a href={faq.linkHref} className="s7-btn-secondary" target="_blank" rel="noopener noreferrer">
                            {faq.linkLabel}
                          </a>
                        </p>
                      )}
                    </div>
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

addPropertyControls(Section07_FAQ, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Common" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "questions" },
  faq1Q: { type: ControlType.String, title: "FAQ 1 Question", defaultValue: "What is CUBIG LLM Capsule?" },
  faq1A: { type: ControlType.String, title: "FAQ 1 Answer", defaultValue: "LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive enterprise data locally before any AI processing, enables any LLM to work on real documents without exposure, and restores AI outputs with original data automatically. It addresses the restricted data blocker — one of three blockers in CUBIG's AI-Ready Data Infrastructure framework." },
  faq2Q: { type: ControlType.String, title: "FAQ 2 Question", defaultValue: "How is LLM Capsule different from data masking and redaction?" },
  faq2A: { type: ControlType.String, title: "FAQ 2 Answer", defaultValue: "Masking and redaction permanently remove sensitive data, destroying the context AI models need. AI outputs from masked input contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule creates a restorable workflow: data is encapsulated with structure-preserving processing, AI produces complete outputs, and restoration maps original values back automatically. The result is usable enterprise documents, not broken fragments." },
  faq3Q: { type: ControlType.String, title: "FAQ 3 Question", defaultValue: "How is LLM Capsule different from prompt security gateways?" },
  faq3A: { type: ControlType.String, title: "FAQ 3 Answer", defaultValue: "Prompt security gateways filter at the API level — scanning prompts and blocking or stripping flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates at the data layer, encapsulating sensitive elements before any AI processing and restoring outputs afterward. It is an enablement layer, not a filter." },
  faq3LinkLabel: { type: ControlType.String, title: "FAQ 3 Link Label", defaultValue: "See full comparison" },
  faq3LinkHref: { type: ControlType.String, title: "FAQ 3 Link Href", defaultValue: "https://llmcapsule.ai/product" },
  faq4Q: { type: ControlType.String, title: "FAQ 4 Question", defaultValue: "Why does restoration matter for enterprise AI?" },
  faq4A: { type: ControlType.String, title: "FAQ 4 Answer", defaultValue: "Without restoration, AI outputs are unusable for real enterprise work. A summary that says \"[PERSON_01] filed [ID_04] on [DATE_02]\" cannot go into a report. Restoration automatically maps original names, figures, dates, and references back into AI outputs — making them directly usable in claims processing, legal review, clinical reports, and business operations without manual intervention." },
  faq5Q: { type: ControlType.String, title: "FAQ 5 Question", defaultValue: "How does LLM Capsule fit into CUBIG's AI-Ready Data Infrastructure?" },
  faq5A: { type: ControlType.String, title: "FAQ 5 Answer", defaultValue: "CUBIG's AI-Ready Data Infrastructure solves three blockers to enterprise AI. LLM Capsule solves restricted data — sensitive information that cannot be exposed to external AI. DTS solves unusable data — insufficient or privacy-locked training datasets. SynTitan solves unstable execution — production AI pipelines that break when data changes. LLM Capsule works standalone or within SynTitan workflows." },
  faq6Q: { type: ControlType.String, title: "FAQ 6 Question", defaultValue: "How is LLM Capsule different from DTS?" },
  faq6A: { type: ControlType.String, title: "FAQ 6 Answer", defaultValue: "They operate at different layers. LLM Capsule protects data during AI usage at the interaction layer — encapsulating and restoring in real time. DTS generates privacy-safe synthetic datasets for AI training and validation at the dataset layer. Both are part of CUBIG's AI-Ready Data Infrastructure. Both are necessary for complete enterprise AI data protection." },
  faq7Q: { type: ControlType.String, title: "FAQ 7 Question", defaultValue: "What deployment modes does LLM Capsule support?" },
  faq7A: { type: ControlType.String, title: "FAQ 7 Answer", defaultValue: "On-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment. The encapsulation engine runs entirely within the enterprise environment regardless of deployment type." },
  faq7LinkLabel: { type: ControlType.String, title: "FAQ 7 Link Label", defaultValue: "See architecture details" },
  faq7LinkHref: { type: ControlType.String, title: "FAQ 7 Link Href", defaultValue: "https://llmcapsule.ai/architecture" },
  faq8Q: { type: ControlType.String, title: "FAQ 8 Question", defaultValue: "Why should an enterprise choose CUBIG?" },
  faq8A: { type: ControlType.String, title: "FAQ 8 Answer", defaultValue: "CUBIG is the only vendor offering a complete AI-Ready Data Infrastructure — from data-layer protection (LLM Capsule) to synthetic data generation (DTS) to production execution orchestration (SynTitan). LLM Capsule is GS Certified, ISO 27001/42001 certified, deployed at Deutsche Telekom, Claroty, DB Insurance, EUMC, and Shin&Kim, and available on AWS Marketplace." },
})
