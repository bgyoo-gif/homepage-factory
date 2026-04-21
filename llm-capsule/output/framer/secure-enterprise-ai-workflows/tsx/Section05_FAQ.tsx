import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  neutral025:     "#f7f7f7",
  borderDefault:  "#e6e7e9",
}

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  sectionLabel?: string
  faqs?: FAQItem[]
  productName?: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is a secure enterprise AI workflow?",
    answer: "A secure enterprise AI workflow protects sensitive data at every stage of AI processing — before transmission, during processing, and after output generation — while producing usable enterprise results through local restoration.",
  },
  {
    question: "How does LLM Capsule fit into existing AI pipelines?",
    answer: "LLM Capsule operates as a pre-processing and post-processing layer. It integrates at the data level, so existing AI pipeline components — RAG systems, prompt chains, output parsers — continue to function normally.",
  },
  {
    question: "Does secure processing add significant latency?",
    answer: "LLM Capsule processes enterprise documents at 0.12 seconds per 2,200-character document. For most enterprise workloads, the encapsulation and restoration overhead is negligible compared to LLM processing time.",
  },
]

// JSON-LD for FAQ
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: defaultFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function Section05_FAQ({
  sectionLabel = "FAQ",
  faqs = defaultFAQs,
  productName = "LLM Capsule",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          background-color: ${PALETTE.surfaceWhite};
          padding: 32px 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s5-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s5-product-text {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s5-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s5-ac-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s5-ac-card:hover {
          background-color: ${PALETTE.neutral025};
        }
        .s5-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s5-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-ac-toggle {
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
          position: relative;
        }
        .s5-ac-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s5-ac-toggle-icon::before,
        .s5-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
        }
        .s5-ac-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s5-ac-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s5-ac-toggle-icon--open::after {
          opacity: 0;
        }
        .s5-ac-body {
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
        .s5-ac-body p {
          margin: 0;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
          .s5-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
          .s5-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0; max-width: 1080px; }
          .s5-section-header h2 { font-size: 28px; }
          .s5-section { padding: 60px 0; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s5-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s5-ac-list">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                // Replace placeholder "LLM Capsule" in question/answer with productName prop
                const questionText = faq.question.replace(/LLM Capsule/g, productName)
                const answerText = faq.answer.replace(/LLM Capsule/g, productName)
                return (
                  <div key={i} className="s5-ac-card">
                    <div
                      className="s5-ac-header"
                      onClick={() => toggle(i)}
                      role="button"
                      aria-expanded={isOpen}
                    >
                      <span className="s5-ac-title">{questionText}</span>
                      <span className="s5-ac-toggle" aria-hidden="true">
                        <span className={`s5-ac-toggle-icon${isOpen ? " s5-ac-toggle-icon--open" : ""}`} />
                      </span>
                    </div>
                    {isOpen && (
                      <div className="s5-ac-body">
                        <p>{answerText}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_FAQ, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "FAQ",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
