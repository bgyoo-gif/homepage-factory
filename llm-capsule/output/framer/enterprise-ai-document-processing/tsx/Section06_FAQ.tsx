"use client"
import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  sectionLabel?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  productName?: string
}

export default function Section06_FAQ({
  sectionLabel = "FAQ",
  faq1Question = "What is enterprise AI document processing?",
  faq1Answer = "Enterprise AI document processing uses large language models to summarize, extract, classify, and translate enterprise documents while protecting sensitive data through local encapsulation and restoring usable outputs through local restoration.",
  faq2Question = "What document formats does LLM Capsule support?",
  faq2Answer = "LLM Capsule processes common enterprise document formats including PDF, DOCX, XLSX, HTML, plain text, and structured data formats. Format-specific processing preserves layout and structure during encapsulation.",
  productName = "LLM Capsule",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items: FaqItem[] = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
  ]

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
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
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s6-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s6-brand { color: #5690D4; }
        .s6-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s6-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s6-ac-card:hover { background-color: #f7f7f7; }
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
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6-ac-card__toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid #e6e7e9;
          background-color: #f7f7f7;
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
        .s6-toggle-icon::before,
        .s6-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: #9c9c9c;
          border-radius: 1px;
        }
        .s6-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s6-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s6-toggle-icon--open::after { opacity: 0; }

        .s6-ac-card__body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s6-section" id="section-7">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2><span className="s6-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s6-ac-list">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="s6-ac-card"
                  onClick={() => toggle(i)}
                >
                  <div className="s6-ac-card__header">
                    <span className="s6-ac-card__title">{item.question}</span>
                    <span className="s6-ac-card__toggle">
                      <span className={`s6-toggle-icon${openIndex === i ? " s6-toggle-icon--open" : ""}`} aria-hidden="true"></span>
                    </span>
                  </div>
                  {openIndex === i && (
                    <div className="s6-ac-card__body">
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

addPropertyControls(Section06_FAQ, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "FAQ" },
  faq1Question: { type: ControlType.String, title: "FAQ 1 Question", defaultValue: "What is enterprise AI document processing?" },
  faq1Answer: { type: ControlType.String, title: "FAQ 1 Answer", defaultValue: "Enterprise AI document processing uses large language models to summarize, extract, classify, and translate enterprise documents while protecting sensitive data through local encapsulation and restoring usable outputs through local restoration." },
  faq2Question: { type: ControlType.String, title: "FAQ 2 Question", defaultValue: "What document formats does LLM Capsule support?" },
  faq2Answer: { type: ControlType.String, title: "FAQ 2 Answer", defaultValue: "LLM Capsule processes common enterprise document formats including PDF, DOCX, XLSX, HTML, plain text, and structured data formats. Format-specific processing preserves layout and structure during encapsulation." },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
})
