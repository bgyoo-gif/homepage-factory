import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  success:        "#0e824c",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  white:          "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  heading_en?: string
  heading_ko?: string
  heading_highlight_en?: string
  heading_highlight_ko?: string
  intro_en?: string
  intro_ko?: string
  item1_strong_en?: string
  item1_strong_ko?: string
  item1_text_en?: string
  item1_text_ko?: string
  item2_strong_en?: string
  item2_strong_ko?: string
  item2_text_en?: string
  item2_text_ko?: string
  item3_strong_en?: string
  item3_strong_ko?: string
  item3_text_en?: string
  item3_text_ko?: string
}

export default function Section04_Requirements({
  locale = "en",
  heading_en = "The Requirements for",
  heading_ko = "다음을 위한 요구사항",
  heading_highlight_en = "Secure Enterprise AI",
  heading_highlight_ko = "보안 엔터프라이즈 AI",
  intro_en = "Secure LLM usage on sensitive enterprise data requires three capabilities working together:",
  intro_ko = "민감한 기업 데이터에서 안전한 LLM 사용은 세 가지 기능이 함께 작동해야 합니다:",
  item1_strong_en = "1. Pre-processing protection.",
  item1_strong_ko = "1. 사전 처리 보호.",
  item1_text_en = " Sensitive data must be identified and replaced before it leaves the enterprise. This is not simple keyword matching — enterprise documents contain context-dependent sensitivity. A name in a contract carries different risk than the same name in a public directory. Structure-preserving processing ensures the document's semantic relationships remain intact for AI comprehension.",
  item1_text_ko = " 민감한 데이터는 기업을 떠나기 전에 식별되고 교체되어야 합니다. 이는 단순한 키워드 매칭이 아닙니다 — 기업 문서는 맥락에 따라 다른 민감도를 가집니다. 계약서의 이름은 공개 디렉토리의 동일한 이름과 다른 위험을 가집니다. 구조 보존 처리는 AI 이해를 위해 문서의 의미적 관계가 온전히 유지되도록 합니다.",
  item2_strong_en = "2. Model-agnostic processing.",
  item2_strong_ko = "2. 모델 무관 처리.",
  item2_text_en = " The AI enablement layer must work with any LLM — not just one provider's API. Enterprises use multiple AI models for different tasks. The AI enablement data layer must operate independently of the model layer.",
  item2_text_ko = " AI 활성화 레이어는 하나의 제공업체 API만이 아닌 모든 LLM과 함께 작동해야 합니다. 기업들은 다양한 작업에 여러 AI 모델을 사용합니다. AI 활성화 데이터 레이어는 모델 레이어와 독립적으로 운영되어야 합니다.",
  item3_strong_en = "3. Output Restoration (Restoration).",
  item3_strong_ko = "3. 출력 복원.",
  item3_text_en = " AI results are restored locally. Without this, AI outputs are abstracted and unusable. Enterprise AI enablement requires that outputs contain real names, real account numbers, and real references — restored locally after AI processing completes.",
  item3_text_ko = " AI 결과는 로컬에서 복원됩니다. 이 없이는 AI 출력이 추상적이고 사용 불가능합니다. 엔터프라이즈 AI 활성화는 출력에 실제 이름, 실제 계좌 번호, 실제 참조가 포함되도록 요구합니다 — AI 처리 완료 후 로컬에서 복원됩니다.",
}: Props) {
  const t = locale === "ko"
    ? {
        heading: heading_ko,
        headingHighlight: heading_highlight_ko,
        intro: intro_ko,
        items: [
          { strong: item1_strong_ko, text: item1_text_ko },
          { strong: item2_strong_ko, text: item2_text_ko },
          { strong: item3_strong_ko, text: item3_text_ko },
        ],
      }
    : {
        heading: heading_en,
        headingHighlight: heading_highlight_en,
        intro: intro_en,
        items: [
          { strong: item1_strong_en, text: item1_text_en },
          { strong: item2_strong_en, text: item2_text_en },
          { strong: item3_strong_en, text: item3_text_en },
        ],
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
          overflow: hidden;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section { padding: 60px 0; }
        }

        .s4-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s4-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s4-highlight { color: ${P.brandSecondary}; }

        .s4-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet__icon::before {
          content: "•";
          color: ${P.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container (max-width: 767px) {
          .s4-header { text-align: left; }
        }
        @container (min-width: 768px) {
          .s4-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {t.heading} <span className="s4-highlight">{t.headingHighlight}</span>
              </h2>
            </div>
            <p className="s4-intro">{t.intro}</p>
            <ul className="s4-bullet">
              {t.items.map((item, i) => (
                <li key={i} className="s4-bullet__item">
                  <span className="s4-bullet__icon" aria-hidden="true" />
                  <span>
                    <strong>{item.strong}</strong>{item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Requirements, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  heading_en: {
    type: ControlType.String,
    title: "Heading (EN)",
    defaultValue: "The Requirements for",
  },
  heading_ko: {
    type: ControlType.String,
    title: "Heading (KO)",
    defaultValue: "다음을 위한 요구사항",
  },
  heading_highlight_en: {
    type: ControlType.String,
    title: "Heading Highlight (EN)",
    defaultValue: "Secure Enterprise AI",
  },
  heading_highlight_ko: {
    type: ControlType.String,
    title: "Heading Highlight (KO)",
    defaultValue: "보안 엔터프라이즈 AI",
  },
  intro_en: {
    type: ControlType.String,
    title: "Intro (EN)",
    defaultValue: "Secure LLM usage on sensitive enterprise data requires three capabilities working together:",
    displayTextArea: true,
  },
  intro_ko: {
    type: ControlType.String,
    title: "Intro (KO)",
    defaultValue: "민감한 기업 데이터에서 안전한 LLM 사용은 세 가지 기능이 함께 작동해야 합니다:",
    displayTextArea: true,
  },
  item1_strong_en: { type: ControlType.String, title: "Item 1 Bold (EN)", defaultValue: "1. Pre-processing protection." },
  item1_strong_ko: { type: ControlType.String, title: "Item 1 Bold (KO)", defaultValue: "1. 사전 처리 보호." },
  item1_text_en: { type: ControlType.String, title: "Item 1 Text (EN)", defaultValue: " Sensitive data must be identified and replaced before it leaves the enterprise...", displayTextArea: true },
  item1_text_ko: { type: ControlType.String, title: "Item 1 Text (KO)", defaultValue: " 민감한 데이터는 기업을 떠나기 전에 식별되고 교체되어야 합니다...", displayTextArea: true },
  item2_strong_en: { type: ControlType.String, title: "Item 2 Bold (EN)", defaultValue: "2. Model-agnostic processing." },
  item2_strong_ko: { type: ControlType.String, title: "Item 2 Bold (KO)", defaultValue: "2. 모델 무관 처리." },
  item2_text_en: { type: ControlType.String, title: "Item 2 Text (EN)", defaultValue: " The AI enablement layer must work with any LLM...", displayTextArea: true },
  item2_text_ko: { type: ControlType.String, title: "Item 2 Text (KO)", defaultValue: " AI 활성화 레이어는 하나의 제공업체 API만이 아닌 모든 LLM과 함께 작동해야 합니다...", displayTextArea: true },
  item3_strong_en: { type: ControlType.String, title: "Item 3 Bold (EN)", defaultValue: "3. Output Restoration (Restoration)." },
  item3_strong_ko: { type: ControlType.String, title: "Item 3 Bold (KO)", defaultValue: "3. 출력 복원." },
  item3_text_en: { type: ControlType.String, title: "Item 3 Text (EN)", defaultValue: " AI results are restored locally...", displayTextArea: true },
  item3_text_ko: { type: ControlType.String, title: "Item 3 Text (KO)", defaultValue: " AI 결과는 로컬에서 복원됩니다...", displayTextArea: true },
})
