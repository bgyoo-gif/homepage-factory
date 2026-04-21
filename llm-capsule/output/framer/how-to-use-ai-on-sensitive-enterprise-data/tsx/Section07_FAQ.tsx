import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  surfaceWhite:   "#ffffff",
  white:          "#ffffff",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can enterprises use AI on sensitive data safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data.",
      },
    },
    {
      "@type": "Question",
      name: "What types of enterprise data can LLM Capsule handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications.",
      },
    },
  ],
}

// ─── Types ──────────────────────────────────────────────────────────────────
interface FaqItem {
  q: string
  a: string
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  heading_en?: string
  heading_ko?: string
  faq1_q_en?: string
  faq1_q_ko?: string
  faq1_a_en?: string
  faq1_a_ko?: string
  faq2_q_en?: string
  faq2_q_ko?: string
  faq2_a_en?: string
  faq2_a_ko?: string
  faq3_q_en?: string
  faq3_q_ko?: string
  faq3_a_en?: string
  faq3_a_ko?: string
  faq4_q_en?: string
  faq4_q_ko?: string
  faq4_a_en?: string
  faq4_a_ko?: string
}

export default function Section07_FAQ({
  locale = "en",
  heading_en = "FAQ",
  heading_ko = "자주 묻는 질문",
  faq1_q_en = "Can enterprises use AI on sensitive data safely?",
  faq1_q_ko = "기업들이 민감한 데이터에서 AI를 안전하게 사용할 수 있나요?",
  faq1_a_en = "Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data.",
  faq1_a_ko = "네. AI 처리 전에 민감한 데이터를 로컬에서 캡슐화하고 이후 출력을 복원함으로써, 기업들은 원본 데이터를 노출하지 않고 실제 문서에 LLM을 사용할 수 있습니다.",
  faq2_q_en = "What types of enterprise data can LLM Capsule handle?",
  faq2_q_ko = "LLM Capsule이 처리할 수 있는 기업 데이터 유형은?",
  faq2_a_en = "LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications.",
  faq2_a_ko = "LLM Capsule은 계약서, 재무 문서, 의료 기록, 법적 서류, HR 파일, 고객 커뮤니케이션을 포함한 구조화 및 비구조화 기업 데이터를 처리합니다.",
  faq3_q_en = "Does LLM Capsule work with any AI model?",
  faq3_q_ko = "LLM Capsule이 모든 AI 모델과 작동하나요?",
  faq3_a_en = "Yes. LLM Capsule is model-agnostic. It works with ChatGPT, Claude, Gemini, Perplexity, or any LLM API because it operates at the data layer before transmission.",
  faq3_a_ko = "네. LLM Capsule은 모델에 구애받지 않습니다. 전송 전 데이터 레이어에서 작동하기 때문에 ChatGPT, Claude, Gemini, Perplexity 또는 모든 LLM API와 함께 작동합니다.",
  faq4_q_en = "What happens to AI outputs after processing?",
  faq4_q_ko = "처리 후 AI 출력은 어떻게 되나요?",
  faq4_a_en = "AI outputs are automatically restored locally. Original names, figures, dates, and references are mapped back into the AI results, producing business-ready documents without manual post-processing.",
  faq4_a_ko = "AI 출력은 자동으로 로컬에서 복원됩니다. 원본 이름, 수치, 날짜, 참조가 AI 결과에 다시 매핑되어 수동 사후 처리 없이 비즈니스 준비 문서를 생성합니다.",
}: Props) {
  const faqs_en: FaqItem[] = [
    { q: faq1_q_en, a: faq1_a_en },
    { q: faq2_q_en, a: faq2_a_en },
    { q: faq3_q_en, a: faq3_a_en },
    { q: faq4_q_en, a: faq4_a_en },
  ]
  const faqs_ko: FaqItem[] = [
    { q: faq1_q_ko, a: faq1_a_ko },
    { q: faq2_q_ko, a: faq2_a_ko },
    { q: faq3_q_ko, a: faq3_a_ko },
    { q: faq4_q_ko, a: faq4_a_ko },
  ]

  const faqs = locale === "ko" ? faqs_ko : faqs_en
  const heading = locale === "ko" ? heading_ko : heading_en

  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleItem = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s7-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
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

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s7-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-section { padding: 60px 0; }
        }

        .s7-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s7-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }

        .s7-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s7-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s7-ac-card:hover { background-color: #f7f7f7; }
        .s7-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s7-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s7-brand {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s7-ac-toggle {
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
        .s7-ac-toggle::before,
        .s7-ac-toggle::after {
          content: '';
          position: absolute;
          background-color: ${P.textTertiary};
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s7-ac-toggle::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s7-ac-toggle::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s7-ac-toggle--open::after { opacity: 0; }

        .s7-ac-body {
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

        @container (max-width: 767px) {
          .s7-header { text-align: left; }
        }
        @container (min-width: 768px) {
          .s7-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s7-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s7-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s7-section">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-header">
              <h2 style={{ wordBreak: "keep-all" }}>{heading}</h2>
            </div>
            <div className="s7-ac-list">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    className="s7-ac-card"
                    onClick={() => toggleItem(i)}
                  >
                    <div className="s7-ac-header">
                      <span className="s7-ac-title">{faq.q}</span>
                      <span
                        className={`s7-ac-toggle${isOpen ? " s7-ac-toggle--open" : ""}`}
                        aria-label={isOpen ? "Collapse" : "Expand"}
                      />
                    </div>
                    {isOpen && (
                      <div className="s7-ac-body">
                        <p>{faq.a}</p>
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

addPropertyControls(Section07_FAQ, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  heading_en: { type: ControlType.String, title: "Heading (EN)", defaultValue: "FAQ" },
  heading_ko: { type: ControlType.String, title: "Heading (KO)", defaultValue: "자주 묻는 질문" },
  faq1_q_en: { type: ControlType.String, title: "Q1 (EN)", defaultValue: "Can enterprises use AI on sensitive data safely?", displayTextArea: false },
  faq1_q_ko: { type: ControlType.String, title: "Q1 (KO)", defaultValue: "기업들이 민감한 데이터에서 AI를 안전하게 사용할 수 있나요?", displayTextArea: false },
  faq1_a_en: { type: ControlType.String, title: "A1 (EN)", defaultValue: "Yes. By encapsulating sensitive data locally before AI processing...", displayTextArea: true },
  faq1_a_ko: { type: ControlType.String, title: "A1 (KO)", defaultValue: "네. AI 처리 전에 민감한 데이터를 로컬에서 캡슐화하고...", displayTextArea: true },
  faq2_q_en: { type: ControlType.String, title: "Q2 (EN)", defaultValue: "What types of enterprise data can LLM Capsule handle?", displayTextArea: false },
  faq2_q_ko: { type: ControlType.String, title: "Q2 (KO)", defaultValue: "LLM Capsule이 처리할 수 있는 기업 데이터 유형은?", displayTextArea: false },
  faq2_a_en: { type: ControlType.String, title: "A2 (EN)", defaultValue: "LLM Capsule handles structured and unstructured enterprise data...", displayTextArea: true },
  faq2_a_ko: { type: ControlType.String, title: "A2 (KO)", defaultValue: "LLM Capsule은 계약서, 재무 문서...", displayTextArea: true },
  faq3_q_en: { type: ControlType.String, title: "Q3 (EN)", defaultValue: "Does LLM Capsule work with any AI model?", displayTextArea: false },
  faq3_q_ko: { type: ControlType.String, title: "Q3 (KO)", defaultValue: "LLM Capsule이 모든 AI 모델과 작동하나요?", displayTextArea: false },
  faq3_a_en: { type: ControlType.String, title: "A3 (EN)", defaultValue: "Yes. LLM Capsule is model-agnostic...", displayTextArea: true },
  faq3_a_ko: { type: ControlType.String, title: "A3 (KO)", defaultValue: "네. LLM Capsule은 모델에 구애받지 않습니다...", displayTextArea: true },
  faq4_q_en: { type: ControlType.String, title: "Q4 (EN)", defaultValue: "What happens to AI outputs after processing?", displayTextArea: false },
  faq4_q_ko: { type: ControlType.String, title: "Q4 (KO)", defaultValue: "처리 후 AI 출력은 어떻게 되나요?", displayTextArea: false },
  faq4_a_en: { type: ControlType.String, title: "A4 (EN)", defaultValue: "AI outputs are automatically restored locally...", displayTextArea: true },
  faq4_a_ko: { type: ControlType.String, title: "A4 (KO)", defaultValue: "AI 출력은 자동으로 로컬에서 복원됩니다...", displayTextArea: true },
})
