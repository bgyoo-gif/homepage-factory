import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  neutral025:     "#f7f7f7",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  faqHeading?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  faq3Question?: string
  faq3Answer?: string
  faq4Question?: string
  faq4Answer?: string
  faq5Question?: string
  faq5Answer?: string
  faq6Question?: string
  faq6Answer?: string
}

export default function Section12_FAQ({
  faqHeading = "Frequently Asked Questions",
  faq1Question = "How does LLM Capsule protect enterprise data during AI processing?",
  faq1Answer = "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services — this is what makes it an AI enablement plugin rather than a monitoring or filtering tool.",
  faq2Question = "How is LLM Capsule different from data masking and redaction tools?",
  faq2Answer = "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. AI results from masked documents contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically. This is the fundamental difference between static data anonymization tools and a restorable workflow designed for AI.",
  faq3Question = "What is the difference between LLM Capsule and prompt security gateways?",
  faq3Answer = "Prompt security gateways filter at the API level — they scan prompts for sensitive patterns and block or strip flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward. The two approaches can be complementary, but only a data-layer approach provides end-to-end AI enablement on enterprise data.",
  faq4Question = "Where can LLM Capsule be deployed?",
  faq4Answer = "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type. This flexibility is critical for enterprise AI governance — different data types and regulatory requirements may demand different deployment architectures within a single organization.",
  faq5Question = "What is enterprise AI data protection?",
  faq5Answer = "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration — ensuring zero exposure of original data while enabling full AI workflow adoption. Unlike model-level approaches that block or filter, the data layer plugin transforms data itself to make enterprise AI possible.",
  faq6Question = "What certifications does LLM Capsule hold?",
  faq6Answer = "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements.",
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    { q: faq1Question, a: faq1Answer },
    { q: faq2Question, a: faq2Answer },
    { q: faq3Question, a: faq3Answer },
    { q: faq4Question, a: faq4Answer },
    { q: faq5Question, a: faq5Answer },
    { q: faq6Question, a: faq6Answer },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root p { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h2 { text-wrap: pretty; }

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }

        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }

        .idx-faq-wrap { margin: 0 auto; }
        .idx-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .idx-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden; transition: background-color 0.2s;
        }
        .idx-ac-card:hover { background-color: ${P.neutral025}; }
        .idx-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .idx-ac-card__title { font-size: 18px; font-weight: 500; line-height: 1.2; color: ${P.textPrimary}; }
        .idx-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px; flex-shrink: 0;
          border: 0.5px solid ${P.borderDefault}; background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .idx-ac-card__body {
          padding: 24px; border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary}; line-height: 1.7;
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-12" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title" style={{ wordBreak: "keep-all" }}>{faqHeading}</h2>
              </div>

              <div className="idx-faq-wrap">
                <div className="idx-ac-list">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="idx-ac-card"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <div className="idx-ac-card__header">
                        <span className="idx-ac-card__title">{faq.q}</span>
                        <span className="idx-ac-card__toggle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <line x1="1" y1="6" x2="11" y2="6" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>
                            {openFaq !== i && <line x1="6" y1="1" x2="6" y2="11" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>}
                          </svg>
                        </span>
                      </div>
                      {openFaq === i && (
                        <div className="idx-ac-card__body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section12_FAQ, {
  faqHeading:   { type: ControlType.String, title: "FAQ Heading",    defaultValue: "Frequently Asked Questions" },
  faq1Question: { type: ControlType.String, title: "FAQ 1 Question", defaultValue: "How does LLM Capsule protect enterprise data during AI processing?" },
  faq1Answer:   { type: ControlType.String, title: "FAQ 1 Answer",   defaultValue: "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services — this is what makes it an AI enablement plugin rather than a monitoring or filtering tool.", displayTextArea: true },
  faq2Question: { type: ControlType.String, title: "FAQ 2 Question", defaultValue: "How is LLM Capsule different from data masking and redaction tools?" },
  faq2Answer:   { type: ControlType.String, title: "FAQ 2 Answer",   defaultValue: "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. AI results from masked documents contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically. This is the fundamental difference between static data anonymization tools and a restorable workflow designed for AI.", displayTextArea: true },
  faq3Question: { type: ControlType.String, title: "FAQ 3 Question", defaultValue: "What is the difference between LLM Capsule and prompt security gateways?" },
  faq3Answer:   { type: ControlType.String, title: "FAQ 3 Answer",   defaultValue: "Prompt security gateways filter at the API level — they scan prompts for sensitive patterns and block or strip flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward. The two approaches can be complementary, but only a data-layer approach provides end-to-end AI enablement on enterprise data.", displayTextArea: true },
  faq4Question: { type: ControlType.String, title: "FAQ 4 Question", defaultValue: "Where can LLM Capsule be deployed?" },
  faq4Answer:   { type: ControlType.String, title: "FAQ 4 Answer",   defaultValue: "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type. This flexibility is critical for enterprise AI governance — different data types and regulatory requirements may demand different deployment architectures within a single organization.", displayTextArea: true },
  faq5Question: { type: ControlType.String, title: "FAQ 5 Question", defaultValue: "What is enterprise AI data protection?" },
  faq5Answer:   { type: ControlType.String, title: "FAQ 5 Answer",   defaultValue: "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration — ensuring zero exposure of original data while enabling full AI workflow adoption. Unlike model-level approaches that block or filter, the data layer plugin transforms data itself to make enterprise AI possible.", displayTextArea: true },
  faq6Question: { type: ControlType.String, title: "FAQ 6 Question", defaultValue: "What certifications does LLM Capsule hold?" },
  faq6Answer:   { type: ControlType.String, title: "FAQ 6 Answer",   defaultValue: "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements.", displayTextArea: true },
})
