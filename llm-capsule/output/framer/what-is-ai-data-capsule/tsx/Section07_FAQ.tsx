import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const PALETTE = {
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  neutral025:     "#f7f7f7",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
}

interface Props {
  sectionLabel?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string
}

function AccordionCard({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      style={{
        border: `1px solid ${PALETTE.borderDefault}`,
        borderRadius: "8px",
        backgroundColor: PALETTE.surfaceWhite,
        overflow: "hidden",
        transition: "background-color 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "24px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => setOpen(!open)}
      >
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: 1.2,
            color: PALETTE.textPrimary,
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          }}
        >
          {question}
        </span>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            border: `0.5px solid ${PALETTE.borderDefault}`,
            backgroundColor: PALETTE.surfaceLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
            fontSize: "18px",
            color: PALETTE.textTertiary,
            lineHeight: 1,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <div
          style={{
            padding: "24px",
            borderTop: `1px solid ${PALETTE.borderDefault}`,
            backgroundColor: PALETTE.surfaceLight,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "14px",
            color: PALETTE.textSecondary,
            lineHeight: 1.7,
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          }}
        >
          <p style={{ margin: 0 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Section07_FAQ({
  sectionLabel = "FAQ",
  faq1Q = "What is an AI data capsule?",
  faq1A = "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
  faq2Q = "How does an AI data capsule differ from data masking?",
  faq2A = "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
  faq3Q = "Does the AI data capsule work with any LLM?",
  faq3A = "Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.",
  faq4Q = "Where is the mapping data stored?",
  faq4A = "The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.",
}: Props) {
  const faqs = [
    { question: faq1Q, answer: faq1A },
    { question: faq2Q, answer: faq2A },
    { question: faq3Q, answer: faq3A },
    { question: faq4Q, answer: faq4A },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 32px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s7-container { padding: 0 120px; max-width: 1440px; } }
        .s7-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s7-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: pretty;
        }
        .s7-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}}
      />
      <section className="s7-section">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{sectionLabel}</h2>
            </div>
            <div className="s7-ac-list">
              {faqs.map((item, i) => (
                <AccordionCard
                  key={i}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_FAQ, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "FAQ",
  },
  faq1Q: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is an AI data capsule?",
    displayTextArea: true,
  },
  faq1A: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
    displayTextArea: true,
  },
  faq2Q: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "How does an AI data capsule differ from data masking?",
    displayTextArea: true,
  },
  faq2A: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
    displayTextArea: true,
  },
  faq3Q: {
    type: ControlType.String,
    title: "FAQ 3 Question",
    defaultValue: "Does the AI data capsule work with any LLM?",
    displayTextArea: true,
  },
  faq3A: {
    type: ControlType.String,
    title: "FAQ 3 Answer",
    defaultValue: "Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.",
    displayTextArea: true,
  },
  faq4Q: {
    type: ControlType.String,
    title: "FAQ 4 Question",
    defaultValue: "Where is the mapping data stored?",
    displayTextArea: true,
  },
  faq4A: {
    type: ControlType.String,
    title: "FAQ 4 Answer",
    defaultValue: "The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.",
    displayTextArea: true,
  },
})
