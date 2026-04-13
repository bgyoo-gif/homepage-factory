import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
  neutral025:    "#f7f7f7",
}

interface Props {
  sectionLabel?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
}

export default function Section05_FAQ({
  sectionLabel = "FAQ",
  faq1Question = "What is AI data pipeline protection?",
  faq1Answer = "AI data pipeline protection secures sensitive enterprise data at every stage of the AI processing pipeline — from document ingestion through model interaction to output delivery.",
  faq2Question = "How does this differ from API-level security?",
  faq2Answer = "API-level security filters prompts and scans outputs at the model interface. AI data pipeline protection operates at the data layer across the entire pipeline, ensuring data is protected before it reaches any external system.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          overflow: hidden;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .s5-section { padding: 60px 0; } }
        @container (min-width: 1024px) { .s5-section { padding: 60px 0; } }
        @container (min-width: 1440px) { .s5-section { padding: 60px 0; } }

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
        @container (min-width: 768px)  { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        

        .s5-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s5-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .s5-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s5-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s5-header h2 { font-size: 28px; } }

        .s5-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .s5-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s5-ac-card:hover { background-color: ${P.neutral025}; }

        .s5-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }

        .s5-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s5-ac-card__toggle {
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
          position: relative;
        }

        .s5-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }

        .s5-toggle-icon::before,
        .s5-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${P.textTertiary};
          border-radius: 1px;
        }
        .s5-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s5-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s5-toggle-icon--open::after { opacity: 0; }

        .s5-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="s5-section" id="section-6">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2>{sectionLabel}</h2>
            </div>

            <div className="s5-ac-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={index}
                    className="s5-ac-card"
                    onClick={() => toggle(index)}
                  >
                    <div className="s5-ac-card__header">
                      <span className="s5-ac-card__title">{faq.question}</span>
                      <span className="s5-ac-card__toggle">
                        <span className={`s5-toggle-icon${isOpen ? " s5-toggle-icon--open" : ""}`} />
                      </span>
                    </div>
                    {isOpen && (
                      <div className="s5-ac-card__body">
                        <p>{faq.answer}</p>
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
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is AI data pipeline protection?",
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "AI data pipeline protection secures sensitive enterprise data at every stage of the AI processing pipeline — from document ingestion through model interaction to output delivery.",
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "How does this differ from API-level security?",
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "API-level security filters prompts and scans outputs at the model interface. AI data pipeline protection operates at the data layer across the entire pipeline, ensuring data is protected before it reaches any external system.",
  },
})
