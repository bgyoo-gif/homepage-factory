import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  trackingTight:  "-0.5px",
}

// ─── JSON-LD ────────────────────────────────────────────────────────────────
const jsonLdFaq = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does redaction break enterprise AI workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redaction permanently removes sensitive data from documents. When AI processes redacted documents, it cannot reference the removed information. This produces incomplete, abstracted outputs that cannot be used in real enterprise workflows without manual reconstruction.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between redaction and encapsulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redaction permanently destroys data. Encapsulation replaces sensitive elements with reversible, structure-preserving representations. After AI processing, encapsulated data is restored through local restoration, producing usable enterprise outputs.",
      },
    },
    {
      "@type": "Question",
      name: "Can masking tools be used for enterprise AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional masking tools were designed for static data protection, not AI workflows. They remove the context AI models need and do not support output restoration. Restorable workflows like LLM Capsule are designed specifically for enterprise AI data pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "How does LLM Capsule restore AI outputs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI results are automatically restored locally with original enterprise data. The locally stored mapping between original and encapsulated values is applied to AI outputs, restoring real names, accounts, and references in the enterprise environment.",
      },
    },
    {
      "@type": "Question",
      name: "Is encapsulation the same as encryption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Encryption scrambles data so it cannot be read at all. Encapsulation replaces sensitive elements with structure-preserving representations that AI can still process meaningfully. The AI model works with protected but structurally intact documents.",
      },
    },
  ],
})

// ─── Static FAQ data ─────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: "Why does redaction break enterprise AI workflows?",
    answer: "Redaction permanently removes sensitive data from documents. When AI processes redacted documents, it cannot reference the removed information. This produces incomplete, abstracted outputs that cannot be used in real enterprise workflows without manual reconstruction.",
    hasProduct: false,
  },
  {
    question: "What is the difference between redaction and encapsulation?",
    answer: "Redaction permanently destroys data. Encapsulation replaces sensitive elements with reversible, structure-preserving representations. After AI processing, encapsulated data is restored through local restoration, producing usable enterprise outputs.",
    hasProduct: false,
  },
  {
    question: "Can masking tools be used for enterprise AI?",
    answer: null,
    answerParts: [
      { text: "Traditional masking tools were designed for static data protection, not AI workflows. They remove the context AI models need and do not support output restoration. Restorable workflows like " },
      { product: "LLM Capsule" },
      { text: " are designed specifically for enterprise AI data pipelines." },
    ],
    hasProduct: true,
  },
  {
    question: null,
    questionParts: [
      { text: "How does " },
      { product: "LLM Capsule" },
      { text: " restore AI outputs?" },
    ],
    answer: "AI results are automatically restored locally with original enterprise data. The locally stored mapping between original and encapsulated values is applied to AI outputs, restoring real names, accounts, and references in the enterprise environment.",
    hasProduct: false,
    questionHasProduct: true,
  },
  {
    question: "Is encapsulation the same as encryption?",
    answer: "No. Encryption scrambles data so it cannot be read at all. Encapsulation replaces sensitive elements with structure-preserving representations that AI can still process meaningfully. The AI model works with protected but structurally intact documents.",
    hasProduct: false,
  },
]

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  item,
  isOpen,
  onToggle,
  productName,
}: {
  item: typeof FAQ_ITEMS[number]
  isOpen: boolean
  onToggle: () => void
  productName: string
}) {
  return (
    <div
      style={{
        border: `1px solid ${C.borderDefault}`,
        borderRadius: 8,
        backgroundColor: C.surfaceWhite,
        overflow: "hidden",
        transition: "background-color 0.2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: 24,
          cursor: "pointer",
          userSelect: "none",
          width: "100%",
          background: "none",
          border: "none",
          textAlign: "left",
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.2,
            color: C.textPrimary,
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          }}
        >
          {"question" in item && item.question ? (
            item.question
          ) : "questionParts" in item && item.questionParts ? (
            <>
              {item.questionParts.map((p, i) =>
                "product" in p ? (
                  <span
                    key={i}
                    style={{
                      fontFamily: `"${C.brandFont}", sans-serif`,
                      fontWeight: 700,
                    }}
                  >
                    {productName}
                  </span>
                ) : (
                  <span key={i}>{p.text}</span>
                )
              )}
            </>
          ) : null}
        </span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            border: `0.5px solid ${C.borderDefault}`,
            backgroundColor: C.surfaceLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 18,
            color: C.textTertiary,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: 24,
            borderTop: `1px solid ${C.borderDefault}`,
            backgroundColor: C.surfaceLight,
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 14,
              color: C.textSecondary,
              lineHeight: 1.7,
              margin: 0,
              wordBreak: "keep-all",
              overflowWrap: "break-word",
              textWrap: "pretty" as any,
            }}
          >
            {"answer" in item && item.answer ? (
              item.answer
            ) : "answerParts" in item && item.answerParts ? (
              <>
                {item.answerParts.map((p, i) =>
                  "product" in p ? (
                    <span
                      key={i}
                      style={{
                        fontFamily: `"${C.brandFont}", sans-serif`,
                        fontWeight: 700,
                      }}
                    >
                      {productName}
                    </span>
                  ) : (
                    <span key={i}>{p.text}</span>
                  )
                )}
              </>
            ) : null}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  productName?: string
}

export default function Section07_FAQ({
  sectionLabel = "FAQ",
  productName = "LLM Capsule",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s7-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s7;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s7-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s7-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: pretty;
        }
        .s7-brand { color: ${C.brandSecondary}; }
        .s7-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        @container s7 (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-section-header h2 { font-size: 22px; }
          .s7-section { padding: 40px 0; }
        }
        @container s7 (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-section-header h2 { font-size: 24px; }
          .s7-section { padding: 60px 0; }
        }
        @container s7 (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-section-header h2 { font-size: 28px; }
          .s7-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s7-section">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s7-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s7-ac-list">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                  productName={productName}
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
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
