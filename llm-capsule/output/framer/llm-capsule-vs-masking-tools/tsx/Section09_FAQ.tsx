import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const PALETTE = {
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
  neutral025:    "#f7f7f7",
  borderDefault: "#e6e7e9",
}

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  heading?: string
  items?: FAQItem[]
}

const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "How does LLM Capsule differ from masking tools?",
    answer: "Masking tools permanently remove sensitive data, destroying context AI models need. LLM Capsule encapsulates data with structure-preserving processing and enables local restoration of AI outputs, producing enterprise-ready results automatically.",
  },
  {
    question: "Can masking tools be used for AI workflows?",
    answer: "Traditional masking tools were not designed for AI workflows. They produce unusable AI outputs that require manual reconstruction. LLM Capsule's restorable workflow produces enterprise-ready outputs automatically.",
  },
  {
    question: "Does LLM Capsule replace existing masking tools?",
    answer: "LLM Capsule can complement existing masking infrastructure for non-AI use cases. For AI workflows specifically, it replaces masking with encapsulation-based protection designed for restorable workflows.",
  },
]

export default function Section09_FAQ({
  heading = "FAQ",
  items = DEFAULT_ITEMS,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s9-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s9-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s9-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s9-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s9-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s9-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s9-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s9-card:hover {
          background-color: ${PALETTE.neutral025};
        }
        .s9-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s9-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s9-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }
        .s9-toggle-bar {
          position: absolute;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
        }
        .s9-toggle-h {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s9-toggle-v {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s9-toggle-v--hidden {
          opacity: 0;
        }
        .s9-body {
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
        .s9-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s9-container { padding: 0 32px; }
          .s9-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
          .s9-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s9-container { padding: 0; max-width: 860px; }
          .s9-header h2 { font-size: 28px; }
          .s9-section { padding: 64px 0; }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}}
      />
      <section className="s9-section" id="section-9">
        <div className="s9-inner">
          <div className="s9-container">
            <div className="s9-header">
              <h2>{heading}</h2>
            </div>
            <div className="s9-list">
              {items.map((item, i) => (
                <div key={i} className="s9-card">
                  <div
                    className="s9-card-header"
                    onClick={() => toggle(i)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    <span className="s9-card-title">{item.question}</span>
                    <span className="s9-toggle" aria-hidden="true">
                      <span className="s9-toggle-bar s9-toggle-h"></span>
                      <span
                        className={`s9-toggle-bar s9-toggle-v${openIndex === i ? " s9-toggle-v--hidden" : ""}`}
                      ></span>
                    </span>
                  </div>
                  {openIndex === i && (
                    <div className="s9-body">
                      <p>{item.answer}</p>
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

addPropertyControls(Section09_FAQ, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "FAQ",
  },
})
