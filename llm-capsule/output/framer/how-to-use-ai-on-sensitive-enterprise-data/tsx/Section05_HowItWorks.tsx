import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  white:          "#ffffff",
}

const BANNER_BG = "rgba(24, 33, 232, 0.06)"

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  heading_pre_en?: string
  heading_pre_ko?: string
  heading_brand_en?: string
  heading_brand_ko?: string
  heading_post_en?: string
  heading_post_ko?: string
  intro_en?: string
  intro_ko?: string
  step1_en?: string
  step1_ko?: string
  step2_en?: string
  step2_ko?: string
  step3_en?: string
  step3_ko?: string
  step4_en?: string
  step4_ko?: string
  banner_en?: string
  banner_ko?: string
}

export default function Section05_HowItWorks({
  locale = "en",
  heading_pre_en = "How",
  heading_pre_ko = "",
  heading_brand_en = "LLM Capsule",
  heading_brand_ko = "LLM Capsule",
  heading_post_en = "Enables This",
  heading_post_ko = "이 기능을 활성화하는 방법",
  intro_en = "LLM Capsule operates as an AI enablement data layer between enterprise data systems and external AI services. The process follows four steps:",
  intro_ko = "LLM Capsule은 기업 데이터 시스템과 외부 AI 서비스 사이에서 AI 활성화 데이터 레이어로 운영됩니다. 프로세스는 네 단계를 따릅니다:",
  step1_en = "Step 1: Sensitive Detection. LLM Capsule automatically identifies sensitive elements within enterprise documents — names, account numbers, dates, financial figures, project codes, and organization-defined entities beyond standard PII.",
  step1_ko = "1단계: 민감도 감지. LLM Capsule은 기업 문서 내의 민감한 요소를 자동으로 식별합니다 — 이름, 계좌 번호, 날짜, 재무 수치, 프로젝트 코드, 표준 PII를 넘어선 조직 정의 엔터티.",
  step2_en = "Step 2: Local Encapsulation. Detected sensitive elements are replaced with structure-preserving tokens locally. The document retains its full semantic structure — tables, references, hierarchies — so AI models can process it accurately. The mapping between original values and tokens is stored locally and never transmitted.",
  step2_ko = "2단계: 로컬 캡슐화. 감지된 민감한 요소는 구조 보존 토큰으로 로컬에서 교체됩니다. 문서는 전체 의미 구조 — 테이블, 참조, 계층 구조 — 를 유지하여 AI 모델이 정확하게 처리할 수 있습니다. 원본 값과 토큰 간의 매핑은 로컬에 저장되며 절대 전송되지 않습니다.",
  step3_en = "Step 3: AI Processing. Only the encapsulated document crosses the trust boundary. The AI provider receives a structurally complete document with protected values. It can summarize, extract, classify, and analyze — but never sees the original sensitive data.",
  step3_ko = "3단계: AI 처리. 캡슐화된 문서만 신뢰 경계를 넘습니다. AI 제공업체는 보호된 값이 있는 구조적으로 완전한 문서를 받습니다. 요약, 추출, 분류, 분석할 수 있지만 원본 민감 데이터를 볼 수 없습니다.",
  step4_en = "Step 4: Local Restoration. AI outputs are restored locally using the stored mapping. Real names, figures, dates, and references return automatically. The result is a business-ready document that can be used directly in enterprise workflows without manual post-processing.",
  step4_ko = "4단계: 로컬 복원. AI 출력은 저장된 매핑을 사용하여 로컬에서 복원됩니다. 실제 이름, 수치, 날짜, 참조가 자동으로 반환됩니다. 결과는 수동 사후 처리 없이 기업 워크플로우에서 직접 사용할 수 있는 비즈니스 준비 문서입니다.",
  banner_en = "Key principle: Your data stays on-premise. Only capsules travel. Outputs come back complete.",
  banner_ko = "핵심 원칙: 귀하의 데이터는 온프레미스에 유지됩니다. 캡슐만 이동합니다. 출력은 완전하게 돌아옵니다.",
}: Props) {
  const t = locale === "ko"
    ? {
        headingPre: heading_pre_ko,
        headingBrand: heading_brand_ko,
        headingPost: heading_post_ko,
        intro: intro_ko,
        steps: [step1_ko, step2_ko, step3_ko, step4_ko],
        banner: banner_ko,
        stepBolds: ["1단계:", "2단계:", "3단계:", "4단계:"],
      }
    : {
        headingPre: heading_pre_en,
        headingBrand: heading_brand_en,
        headingPost: heading_post_en,
        intro: intro_en,
        steps: [step1_en, step2_en, step3_en, step4_en],
        banner: banner_en,
        stepBolds: ["Step 1:", "Step 2:", "Step 3:", "Step 4:"],
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
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

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section { padding: 60px 0; }
        }

        .s5-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s5-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s5-brand {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s5-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-paragraph:last-child { margin-bottom: 0; }

        .s5-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: ${BANNER_BG};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 24px;
        }

        @container (max-width: 767px) {
          .s5-header { text-align: left; }
        }
        @container (min-width: 768px) {
          .s5-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {t.headingPre} <span className="s5-brand">{t.headingBrand}</span> {t.headingPost}
              </h2>
            </div>
            <p className="s5-paragraph">
              <span className="s5-brand">{t.headingBrand}</span> {t.intro.replace(/^LLM Capsule\s/, "").replace(/^LLM Capsule\s/, "")}
            </p>
            {t.steps.map((step, i) => {
              const bold = t.stepBolds[i]
              const rest = step.startsWith(bold.replace(":", "")) ? step.substring(bold.length + (bold.endsWith(":") ? 0 : 1)) : step
              // Split at first colon + space for bold
              const colonIdx = step.indexOf(". ")
              const boldPart = colonIdx !== -1 ? step.substring(0, colonIdx + 1) : ""
              const textPart = colonIdx !== -1 ? step.substring(colonIdx + 2) : step
              return (
                <p key={i} className="s5-paragraph">
                  <strong>{boldPart}</strong>{boldPart ? " " + textPart : textPart}
                </p>
              )
            })}
            <div className="s5-banner">
              <strong>Key principle:</strong> {t.banner.replace(/^Key principle:\s?/, "").replace(/^핵심 원칙:\s?/, "")}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_HowItWorks, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  heading_pre_en: { type: ControlType.String, title: "Heading Pre (EN)", defaultValue: "How" },
  heading_pre_ko: { type: ControlType.String, title: "Heading Pre (KO)", defaultValue: "" },
  heading_brand_en: { type: ControlType.String, title: "Brand Name (EN)", defaultValue: "LLM Capsule" },
  heading_brand_ko: { type: ControlType.String, title: "Brand Name (KO)", defaultValue: "LLM Capsule" },
  heading_post_en: { type: ControlType.String, title: "Heading Post (EN)", defaultValue: "Enables This" },
  heading_post_ko: { type: ControlType.String, title: "Heading Post (KO)", defaultValue: "이 기능을 활성화하는 방법" },
  intro_en: { type: ControlType.String, title: "Intro (EN)", defaultValue: "LLM Capsule operates as an AI enablement data layer...", displayTextArea: true },
  intro_ko: { type: ControlType.String, title: "Intro (KO)", defaultValue: "LLM Capsule은 기업 데이터 시스템과 외부 AI 서비스 사이에서...", displayTextArea: true },
  step1_en: { type: ControlType.String, title: "Step 1 (EN)", defaultValue: "Step 1: Sensitive Detection. LLM Capsule automatically identifies...", displayTextArea: true },
  step1_ko: { type: ControlType.String, title: "Step 1 (KO)", defaultValue: "1단계: 민감도 감지. LLM Capsule은 기업 문서 내의 민감한 요소를 자동으로 식별합니다...", displayTextArea: true },
  step2_en: { type: ControlType.String, title: "Step 2 (EN)", defaultValue: "Step 2: Local Encapsulation. Detected sensitive elements are replaced...", displayTextArea: true },
  step2_ko: { type: ControlType.String, title: "Step 2 (KO)", defaultValue: "2단계: 로컬 캡슐화. 감지된 민감한 요소는...", displayTextArea: true },
  step3_en: { type: ControlType.String, title: "Step 3 (EN)", defaultValue: "Step 3: AI Processing. Only the encapsulated document crosses...", displayTextArea: true },
  step3_ko: { type: ControlType.String, title: "Step 3 (KO)", defaultValue: "3단계: AI 처리. 캡슐화된 문서만...", displayTextArea: true },
  step4_en: { type: ControlType.String, title: "Step 4 (EN)", defaultValue: "Step 4: Local Restoration. AI outputs are restored locally...", displayTextArea: true },
  step4_ko: { type: ControlType.String, title: "Step 4 (KO)", defaultValue: "4단계: 로컬 복원. AI 출력은 저장된 매핑을 사용하여...", displayTextArea: true },
  banner_en: { type: ControlType.String, title: "Banner (EN)", defaultValue: "Key principle: Your data stays on-premise. Only capsules travel. Outputs come back complete.", displayTextArea: true },
  banner_ko: { type: ControlType.String, title: "Banner (KO)", defaultValue: "핵심 원칙: 귀하의 데이터는 온프레미스에 유지됩니다. 캡슐만 이동합니다.", displayTextArea: true },
})
