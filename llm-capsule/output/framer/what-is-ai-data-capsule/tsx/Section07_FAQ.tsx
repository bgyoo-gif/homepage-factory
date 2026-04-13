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

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  sectionLabel?: string
  faqItems?: FAQItem[]
  lang?: "en" | "ko"
}

const DEFAULT_FAQ_EN: FAQItem[] = [
  {
    question: "What is an AI data capsule?",
    answer: "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
  },
  {
    question: "How does an AI data capsule differ from data masking?",
    answer: "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
  },
  {
    question: "Does the AI data capsule work with any LLM?",
    answer: "Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.",
  },
  {
    question: "Where is the mapping data stored?",
    answer: "The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.",
  },
]

const DEFAULT_FAQ_KO: FAQItem[] = [
  {
    question: "AI 데이터 캡슐이란 무엇인가요?",
    answer: "AI 데이터 캡슐은 민감한 엔터프라이즈 데이터가 외부 AI 서비스에 전송되기 전에 캡슐화하는 로컬 생성 AI 활성화 레이어입니다. AI 처리 후 캡슐은 로컬 복원을 가능하게 하여 출력물이 실제 엔터프라이즈 워크플로우에서 사용 가능하게 유지됩니다.",
  },
  {
    question: "AI 데이터 캡슐은 데이터 마스킹과 어떻게 다른가요?",
    answer: "데이터 마스킹은 민감한 정보를 영구적으로 제거하여 AI 출력물을 엔터프라이즈 워크플로우에서 사용할 수 없게 만듭니다. AI 데이터 캡슐은 데이터 구조를 보존하고 복원을 가능하게 하여 AI 결과를 로컬에서 전체 엔터프라이즈 컨텍스트로 복원할 수 있습니다.",
  },
  {
    question: "AI 데이터 캡슐은 모든 LLM과 호환되나요?",
    answer: "예. 캡슐이 전송 전 데이터 레이어에서 작동하기 때문에 모든 외부 AI 서비스 — ChatGPT, Claude, Gemini 또는 모든 LLM API — 와 호환됩니다.",
  },
  {
    question: "매핑 데이터는 어디에 저장되나요?",
    answer: "원본과 캡슐화된 값 간의 매핑은 전적으로 엔터프라이즈 환경 내에 저장됩니다. 외부 서비스에 절대 전송되지 않습니다.",
  },
]

const COPY = {
  en: {
    sectionLabel: "FAQ",
    faqItems: DEFAULT_FAQ_EN,
  },
  ko: {
    sectionLabel: "자주 묻는 질문",
    faqItems: DEFAULT_FAQ_KO,
  },
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
  sectionLabel,
  faqItems,
  lang = "en",
}: Props) {
  const copy = COPY[lang]
  const displayLabel = sectionLabel ?? copy.sectionLabel
  const displayItems = faqItems ?? copy.faqItems

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
          text-wrap: balance;
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
          "mainEntity": displayItems.map((item) => ({
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
              <h2>{displayLabel}</h2>
            </div>
            <div className="s7-ac-list">
              {displayItems.map((item, i) => (
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
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
})
