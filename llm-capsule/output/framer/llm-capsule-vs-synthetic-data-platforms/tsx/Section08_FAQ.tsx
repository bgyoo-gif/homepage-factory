import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
  neutral025: "#f7f7f7",
}

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  sectionLabel?: string
  brandName?: string
  q1?: string
  a1?: string
  q2?: string
  a2?: string
}

export default function Section08_FAQ({
  sectionLabel = "FAQ",
  brandName = "LLM Capsule",
  q1 = "When should I use synthetic data vs LLM Capsule?",
  a1 = "Use synthetic data for model training and testing where statistical properties matter. Use LLM Capsule for production AI workflows where AI must process and produce outputs about real enterprise documents.",
  q2 = "Does LLM Capsule generate synthetic data?",
  a2 = "No. LLM Capsule encapsulates real data — preserving its structure while protecting sensitive elements. It is not a synthetic data platform.",
}: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
  ]

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
        }

        .s8-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s8-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s8-brand-text { color: ${PALETTE.brandSecondary}; }
        .s8-brand-name { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .s8-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s8-ac-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s8-ac-card:hover { background-color: ${PALETTE.neutral025}; }
        .s8-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s8-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s8-ac-card__toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
        }
        .s8-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s8-toggle-icon::before,
        .s8-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
        }
        .s8-toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s8-toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s8-toggle-icon--open::after { opacity: 0; }

        .s8-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
        }
        .s8-ac-card__body p {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s8-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s8-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s8-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": q1,
            "acceptedAnswer": { "@type": "Answer", "text": a1 }
          },
          {
            "@type": "Question",
            "name": q2,
            "acceptedAnswer": { "@type": "Answer", "text": a2 }
          }
        ]
      })}} />

      <section className="s8-section">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s8-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s8-ac-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="s8-ac-card" onClick={() => toggle(idx)}>
                  <div className="s8-ac-card__header">
                    <span className="s8-ac-card__title">{faq.question}</span>
                    <span className="s8-ac-card__toggle">
                      <span className={`s8-toggle-icon${openIdx === idx ? " s8-toggle-icon--open" : ""}`}></span>
                    </span>
                  </div>
                  {openIdx === idx && (
                    <div className="s8-ac-card__body">
                      <p>{faq.answer}</p>
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

addPropertyControls(Section08_FAQ, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "FAQ",
  },
  brandName: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  q1: {
    type: ControlType.String,
    title: "Question 1",
    defaultValue: "When should I use synthetic data vs LLM Capsule?",
  },
  a1: {
    type: ControlType.String,
    title: "Answer 1",
    defaultValue: "Use synthetic data for model training and testing where statistical properties matter. Use LLM Capsule for production AI workflows where AI must process and produce outputs about real enterprise documents.",
    displayTextArea: true,
  },
  q2: {
    type: ControlType.String,
    title: "Question 2",
    defaultValue: "Does LLM Capsule generate synthetic data?",
  },
  a2: {
    type: ControlType.String,
    title: "Answer 2",
    defaultValue: "No. LLM Capsule encapsulates real data — preserving its structure while protecting sensitive elements. It is not a synthetic data platform.",
    displayTextArea: true,
  },
})
