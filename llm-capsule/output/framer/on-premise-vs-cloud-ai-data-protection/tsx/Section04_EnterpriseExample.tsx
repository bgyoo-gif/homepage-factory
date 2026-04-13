import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral150:     "#e6e7e9",
  neutral200:     "#e0e0e0",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0,0,0,0.04)",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  sectionLabelHighlight?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2?: string
  lang?: "en" | "ko"
}

const LABELS: Record<"en" | "ko", {
  sectionLabel: string
  sectionLabelHighlight: string
  cardTitle: string
  cardParagraph1: string
  cardParagraph2: string
}> = {
  en: {
    sectionLabel: "Enterprise ",
    sectionLabelHighlight: "Example",
    cardTitle: "Government Agency — Air-Gapped Deployment",
    cardParagraph1: "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.",
    cardParagraph2: "LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.",
  },
  ko: {
    sectionLabel: "엔터프라이즈 ",
    sectionLabelHighlight: "사례",
    cardTitle: "정부 기관 — 에어갭 배포",
    cardParagraph1: "정부 기관은 분류된 브리핑 문서를 자동 요약하기 위해 AI가 필요합니다. 분류된 네트워크는 외부 연결이 없습니다.",
    cardParagraph2: "LLM Capsule은 분류된 네트워크에서 문서를 캡슐화합니다. 캡슐화된 데이터는 승인된 데이터 다이오드를 통해 AI 연결 환경으로 전송됩니다. AI가 요약을 생성합니다. 결과는 분류된 네트워크로 다시 전송되어 복원되어 분류 준비된 요약이 생성됩니다.",
  },
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section04_EnterpriseExample({
  sectionLabel,
  sectionLabelHighlight,
  cardTitle,
  cardParagraph1,
  cardParagraph2,
  lang = "en",
}: Props) {
  const L = LABELS[lang]
  const t = {
    sectionLabel: sectionLabel ?? L.sectionLabel,
    sectionLabelHighlight: sectionLabelHighlight ?? L.sectionLabelHighlight,
    cardTitle: cardTitle ?? L.cardTitle,
    cardParagraph1: cardParagraph1 ?? L.cardParagraph1,
    cardParagraph2: cardParagraph2 ?? L.cardParagraph2,
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s4 (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container s4 (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container s4 (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        .s4-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s4-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        @container s4 (min-width: 768px)  { .s4-header h2 { font-size: 22px; } }
        @container s4 (min-width: 1024px) { .s4-header h2 { font-size: 24px; } }
        @container s4 (min-width: 1440px) { .s4-header h2 { font-size: 28px; } }
        @container s4 (max-width: 767px)  { .s4-header { text-align: left; } }

        .s4-brand { color: ${C.brandSecondary}; }
        .s4-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .s4-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.neutral150};
          padding: 24px;
          box-shadow: ${C.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container s4 (min-width: 1440px) { .s4-card { padding: 32px; } }

        .s4-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
          text-wrap: balance;
        }
        .s4-card p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${C.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2>
                {t.sectionLabel}<span className="s4-brand">{t.sectionLabelHighlight}</span>
              </h2>
            </div>
            <div className="s4-card">
              <h4 className="s4-card__title">{t.cardTitle}</h4>
              <p>{t.cardParagraph1}</p>
              <p>
                <span className="s4-product">LLM Capsule</span>{" "}
                {t.cardParagraph2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_EnterpriseExample, {
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Enterprise ",
  },
  sectionLabelHighlight: {
    type: ControlType.String,
    title: "Section Label Highlight",
    defaultValue: "Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Government Agency — Air-Gapped Deployment",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.",
    displayTextArea: true,
  },
  cardParagraph2: {
    type: ControlType.String,
    title: "Card Paragraph 2",
    defaultValue: "encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.",
    displayTextArea: true,
  },
})
