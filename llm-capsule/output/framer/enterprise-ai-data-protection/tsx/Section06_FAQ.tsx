import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
  neutral025:    "#f7f7f7",
}

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  sectionLabel?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  faq3Question?: string
  faq3Answer?: string
  productName?: string
}

export default function Section06_FAQ({
  sectionLabel = "FAQ",
  faq1Question = "What is enterprise AI data protection?",
  faq1Answer = "Enterprise AI data protection is a data security discipline that prevents sensitive enterprise information from being exposed to external AI services while still enabling AI-powered workflows. It operates at the data layer through encapsulation, structure preservation, and local restoration.",
  faq2Question = "How does LLM data protection work?",
  faq2Answer = "LLM data protection encapsulates sensitive data locally before it reaches any language model. The AI processes structurally intact but protected documents. After processing, outputs are restored locally with original enterprise data.",
  faq3Question = "Is LLM Capsule compliant with GDPR?",
  faq3Answer = " is designed to support GDPR compliance by ensuring personal data never leaves the enterprise environment during AI processing. Organizations should evaluate their specific compliance requirements with legal counsel.",
  productName = "LLM Capsule",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
  ]

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s6-section-header {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s6-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s6-brand-text { color: ${PALETTE.brandSecondary}; }
        .s6-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s6-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 16px;
        }
        .s6-ac-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s6-ac-card:hover { background-color: ${PALETTE.neutral025}; }
        .s6-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s6-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
        }
        .s6-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .s6-ac-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s6-ac-toggle-icon::before,
        .s6-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
        }
        .s6-ac-toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s6-ac-toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s6-ac-toggle-icon.s6-open::after { opacity: 0; }
        .s6-ac-body {
          padding: 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 22px; }
          .s6-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section-header h2 { font-size: 28px; }
          .s6-section { padding: 60px 0; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      })}} />

      <section className="s6-section" id="section-7">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s6-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s6-ac-list">
              {faqs.map((faq, i) => (
                <div key={i} className="s6-ac-card">
                  <div className="s6-ac-header" onClick={() => toggle(i)}>
                    <span className="s6-ac-title">{faq.question}</span>
                    <span className="s6-ac-toggle">
                      <span className={`s6-ac-toggle-icon${openIndex === i ? " s6-open" : ""}`} />
                    </span>
                  </div>
                  {openIndex === i && (
                    <div className="s6-ac-body">
                      {i === 2 ? (
                        <p><span className="s6-product-name">{productName}</span>{faq3Answer}</p>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_FAQ, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "FAQ" },
  faq1Question: {
    type: ControlType.String, title: "FAQ 1 Question",
    defaultValue: "What is enterprise AI data protection?",
  },
  faq1Answer: {
    type: ControlType.String, title: "FAQ 1 Answer",
    defaultValue: "Enterprise AI data protection is a data security discipline that prevents sensitive enterprise information from being exposed to external AI services while still enabling AI-powered workflows. It operates at the data layer through encapsulation, structure preservation, and local restoration.",
    displayTextArea: true,
  },
  faq2Question: {
    type: ControlType.String, title: "FAQ 2 Question",
    defaultValue: "How does LLM data protection work?",
  },
  faq2Answer: {
    type: ControlType.String, title: "FAQ 2 Answer",
    defaultValue: "LLM data protection encapsulates sensitive data locally before it reaches any language model. The AI processes structurally intact but protected documents. After processing, outputs are restored locally with original enterprise data.",
    displayTextArea: true,
  },
  faq3Question: {
    type: ControlType.String, title: "FAQ 3 Question",
    defaultValue: "Is LLM Capsule compliant with GDPR?",
  },
  faq3Answer: {
    type: ControlType.String, title: "FAQ 3 Answer (after product name)",
    defaultValue: " is designed to support GDPR compliance by ensuring personal data never leaves the enterprise environment during AI processing. Organizations should evaluate their specific compliance requirements with legal counsel.",
    displayTextArea: true,
  },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
})
