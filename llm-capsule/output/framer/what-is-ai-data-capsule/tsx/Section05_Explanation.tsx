import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
}

interface BulletItem {
  strong: string
  text: string
}

interface Props {
  sectionLabel?: string
  introText?: string
  bullets?: BulletItem[]
  bannerText?: string
  lang?: "en" | "ko"
}

const DEFAULT_BULLETS_EN: BulletItem[] = [
  {
    strong: "Local Encapsulation.",
    text: " Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.",
  },
  {
    strong: "Protected AI Processing.",
    text: " The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.",
  },
  {
    strong: "Local Restoration.",
    text: " AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.",
  },
]

const DEFAULT_BULLETS_KO: BulletItem[] = [
  {
    strong: "로컬 캡슐화.",
    text: " 엔터프라이즈 문서의 민감한 요소 — 이름, 계좌번호, 날짜, 의료 코드, 계약 조건 — 가 감지되어 구조 보존 표현으로 대체됩니다. 원본과 대체 값 간의 매핑은 로컬에 저장되며 절대 전송되지 않습니다.",
  },
  {
    strong: "보호된 AI 처리.",
    text: " 캡슐화된 문서는 모든 외부 LLM에 전송됩니다. 문서 구조가 보존되기 때문에 AI 모델은 요약, 추출, 분류 및 번역을 효과적으로 수행할 수 있습니다. 어떤 원본 민감 데이터도 엔터프라이즈 환경을 벗어나지 않습니다.",
  },
  {
    strong: "로컬 복원.",
    text: " AI 결과는 원본 엔터프라이즈 데이터와 함께 로컬에서 자동으로 복원됩니다. 로컬에 저장된 매핑이 적용되어 실제 이름, 금액 및 참조로 출력물을 재구성하며, 비즈니스 워크플로우에서 직접 사용 가능한 결과를 생성합니다.",
  },
]

const COPY = {
  en: {
    sectionLabel: "Explanation",
    introText: "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
    bannerText: "Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",
    bullets: DEFAULT_BULLETS_EN,
  },
  ko: {
    sectionLabel: "설명",
    introText: "AI 데이터 캡슐은 복원 가능한 워크플로우 내에서 세 단계를 통해 AI 활성화 데이터 레이어로 작동합니다:",
    bannerText: "핵심 개념: AI 결과는 원본 엔터프라이즈 데이터와 함께 로컬에서 자동으로 복원됩니다. AI 데이터 캡슐은 원본 데이터가 절대 엔터프라이즈 환경을 벗어나지 않도록 보장하여 AI 도입을 가능하게 합니다.",
    bullets: DEFAULT_BULLETS_KO,
  },
}

export default function Section05_Explanation({
  sectionLabel,
  introText,
  bullets,
  bannerText,
  lang = "en",
}: Props) {
  const copy = COPY[lang]
  const displayLabel = sectionLabel ?? copy.sectionLabel
  const displayIntro = introText ?? copy.introText
  const displayBullets = bullets ?? copy.bullets
  const displayBanner = bannerText ?? copy.bannerText

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
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
        @container (min-width: 768px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }
        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: pretty;
        }
        .s5-label-brand { color: ${PALETTE.brandSecondary}; }
        .s5-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s5-bullet-icon::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .s5-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          margin-top: 32px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s5-label-brand">{displayLabel}</span></h2>
            </div>
            <p className="s5-intro">{displayIntro}</p>
            <ul className="s5-bullet-list">
              {displayBullets.map((item, i) => (
                <li key={i} className="s5-bullet-item">
                  <span className="s5-bullet-icon" />
                  <span><strong>{item.strong}</strong>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="s5-banner">
              {displayBanner}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_Explanation, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Explanation",
  },
  introText: {
    type: ControlType.String,
    title: "Intro Text",
    defaultValue: "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",
    displayTextArea: true,
  },
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
})
