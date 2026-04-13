import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  neutral025:     "#f7f7f7",
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is enterprise confidentiality control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise confidentiality control is a data protection approach that goes beyond PII to cover all business-sensitive information — trade secrets, deal terms, pricing strategies, internal metrics, and competitive intelligence — during AI processing.",
      },
    },
    {
      "@type": "Question",
      "name": "Why is PII protection insufficient for enterprise AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise documents contain sensitive business data that is not PII. Protecting only names and IDs while exposing deal terms, financial models, and strategic plans still creates unacceptable data exposure risk.",
      },
    },
  ],
})

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  locale?: "en" | "ko"
}

export default function Section06_FAQ({
  sectionLabel = "FAQ",
  faq1Question = "What is enterprise confidentiality control?",
  faq1Answer   = "Enterprise confidentiality control is a data protection approach that goes beyond PII to cover all business-sensitive information — trade secrets, deal terms, pricing strategies, internal metrics, and competitive intelligence — during AI processing.",
  faq2Question = "Why is PII protection insufficient for enterprise AI?",
  faq2Answer   = "Enterprise documents contain sensitive business data that is not PII. Protecting only names and IDs while exposing deal terms, financial models, and strategic plans still creates unacceptable data exposure risk.",
  locale       = "en",
}: Props) {
  const [open1, setOpen1] = useState(true)
  const [open2, setOpen2] = useState(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
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
        @container (min-width: 768px)  { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px)  { .s6-section { padding: 60px 0; } }
        @container (min-width: 1024px) { .s6-section { padding: 60px 0; } }
        @container (min-width: 1440px) { .s6-section { padding: 60px 0; } }

        .s6-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s6-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          font-family: "DM Sans", sans-serif;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s6-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s6-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s6-section-header h2 { font-size: 28px; } }

        .s6-text--brand { color: ${PALETTE.brandSecondary}; }

        .s6-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s6-ac-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s6-ac-card:hover { background-color: ${PALETTE.neutral025}; }
        .s6-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s6-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6-ac-card__toggle {
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
        .s6-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s6-toggle-icon__h {
          position: absolute;
          width: 10px;
          height: 1.5px;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s6-toggle-icon__v {
          position: absolute;
          width: 1.5px;
          height: 10px;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s6-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
        }
        .s6-ac-card__body p + p { margin-top: 12px; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
      />

      <section className="s6-section" id="section-6" lang={locale}>
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2><span className="s6-text--brand">{sectionLabel}</span></h2>
            </div>
            <div className="s6-ac-list">

              {/* FAQ 1 */}
              <div className="s6-ac-card">
                <div
                  className="s6-ac-card__header"
                  onClick={() => setOpen1(!open1)}
                  role="button"
                  aria-expanded={open1}
                >
                  <span className="s6-ac-card__title">{faq1Question}</span>
                  <span className="s6-ac-card__toggle" aria-hidden="true">
                    <span className="s6-toggle-icon">
                      <span className="s6-toggle-icon__h"></span>
                      <span className="s6-toggle-icon__v" style={{ opacity: open1 ? 0 : 1 }}></span>
                    </span>
                  </span>
                </div>
                {open1 && (
                  <div className="s6-ac-card__body">
                    <p>{faq1Answer}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="s6-ac-card">
                <div
                  className="s6-ac-card__header"
                  onClick={() => setOpen2(!open2)}
                  role="button"
                  aria-expanded={open2}
                >
                  <span className="s6-ac-card__title">{faq2Question}</span>
                  <span className="s6-ac-card__toggle" aria-hidden="true">
                    <span className="s6-toggle-icon">
                      <span className="s6-toggle-icon__h"></span>
                      <span className="s6-toggle-icon__v" style={{ opacity: open2 ? 0 : 1 }}></span>
                    </span>
                  </span>
                </div>
                {open2 && (
                  <div className="s6-ac-card__body">
                    <p>{faq2Answer}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_FAQ, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "FAQ",
  },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is enterprise confidentiality control?",
    displayTextArea: true,
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "Enterprise confidentiality control is a data protection approach that goes beyond PII to cover all business-sensitive information — trade secrets, deal terms, pricing strategies, internal metrics, and competitive intelligence — during AI processing.",
    displayTextArea: true,
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "Why is PII protection insufficient for enterprise AI?",
    displayTextArea: true,
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Enterprise documents contain sensitive business data that is not PII. Protecting only names and IDs while exposing deal terms, financial models, and strategic plans still creates unacceptable data exposure risk.",
    displayTextArea: true,
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
