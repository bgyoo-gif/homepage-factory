import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral150:     "#e6e7e9",
  neutral025:     "#f7f7f7",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  surfaceWhite:   "#ffffff",
  brandTint:      "rgba(24,33,232,0.06)",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  step1Title?: string
  step1Body?: string
  step2Title?: string
  step2Body?: string
  step3Title?: string
  step3Body?: string
  step4Title?: string
  step4Body?: string
  step5Title?: string
  step5Body?: string
  bannerText?: string
  lang?: "en" | "ko"
}

const LABELS: Record<"en" | "ko", {
  sectionLabel: string
  step1Title: string; step1Body: string
  step2Title: string; step2Body: string
  step3Title: string; step3Body: string
  step4Title: string; step4Body: string
  step5Title: string; step5Body: string
  bannerText: string
}> = {
  en: {
    sectionLabel: "Explanation",
    step1Title: "On-premise deployment.",
    step1Body: "The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.",
    step2Title: "Air-gapped deployment.",
    step2Body: "For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.",
    step3Title: "Cloud deployment.",
    step3Body: "Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.",
    step4Title: "Hybrid deployment.",
    step4Body: "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.",
    step5Title: "Embedded integration.",
    step5Body: "LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.",
    bannerText: "One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.",
  },
  ko: {
    sectionLabel: "설명",
    step1Title: "온프레미스 배포.",
    step1Body: "캡슐화 엔진은 완전히 기업 데이터 센터 내에서 실행됩니다. 민감한 데이터는 어떤 네트워크 경계도 통과하지 않습니다. AI 지원 데이터 레이어는 기존 보안 경계 내에서 작동합니다. 필요 시 캡슐화된 데이터만 외부 AI 서비스로 전송됩니다.",
    step2Title: "에어갭 배포.",
    step2Body: "가장 민감한 환경을 위해 LLM Capsule은 에어갭 네트워크 내에서 작동할 수 있습니다. 문서는 로컬에서 캡슐화되고, 제어된 채널을 통해 AI 연결 환경으로 전송되어 처리된 후, 결과가 로컬 복원을 위해 다시 전송됩니다.",
    step3Title: "클라우드 배포.",
    step3Body: "AWS Marketplace에서 사용 가능합니다. 캡슐화 레이어는 기업의 클라우드 계정 또는 VPC 내에서 실행됩니다. AI 서비스에 외부에서 접근하는 동안 데이터는 기업의 클라우드 경계 내에 유지됩니다.",
    step4Title: "하이브리드 배포.",
    step4Body: "단일 LLM Capsule 인스턴스 내에서 서로 다른 문서 유형 또는 민감도 수준이 다른 배포 모드를 통해 라우팅됩니다.",
    step5Title: "임베디드 통합.",
    step5Body: "LLM Capsule은 기존 엔터프라이즈 애플리케이션과 플랫폼에 임베드되어 기업 자체 소프트웨어 스택 내에서 AI 지원 데이터 레이어로 작동할 수 있습니다.",
    bannerText: "하나의 지원 모델, 모든 배포. 캡슐화 및 복원 논리는 LLM Capsule이 실행되는 위치에 관계없이 동일합니다. AI 결과는 모든 배포 시나리오에서 로컬에서 복원됩니다.",
  },
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section03_Explanation({
  sectionLabel,
  step1Title, step1Body,
  step2Title, step2Body,
  step3Title, step3Body,
  step4Title, step4Body,
  step5Title, step5Body,
  bannerText,
  lang = "en",
}: Props) {
  const L = LABELS[lang]
  const t = {
    sectionLabel: sectionLabel ?? L.sectionLabel,
    step1Title: step1Title ?? L.step1Title,
    step1Body: step1Body ?? L.step1Body,
    step2Title: step2Title ?? L.step2Title,
    step2Body: step2Body ?? L.step2Body,
    step3Title: step3Title ?? L.step3Title,
    step3Body: step3Body ?? L.step3Body,
    step4Title: step4Title ?? L.step4Title,
    step4Body: step4Body ?? L.step4Body,
    step5Title: step5Title ?? L.step5Title,
    step5Body: step5Body ?? L.step5Body,
    bannerText: bannerText ?? L.bannerText,
  }

  const steps = [
    { title: t.step1Title, body: t.step1Body },
    { title: t.step2Title, body: t.step2Body },
    { title: t.step3Title, body: t.step3Body },
    { title: t.step4Title, body: t.step4Body },
    { title: t.step5Title, body: t.step5Body },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s3;
        }
        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s3 (min-width: 768px)  { .s3-container { padding: 0 32px; } }
        @container s3 (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container s3 (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }
        @container s3 (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }

        .s3-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s3-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        @container s3 (min-width: 768px)  { .s3-header h2 { font-size: 22px; } }
        @container s3 (min-width: 1024px) { .s3-header h2 { font-size: 24px; } }
        @container s3 (min-width: 1440px) { .s3-header h2 { font-size: 28px; } }
        @container s3 (max-width: 767px)  { .s3-header { text-align: left; } }

        .s3-brand { color: ${C.brandSecondary}; }
        .s3-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* Number bullet list — CSS counter, no hardcoded numbers */
        .s3-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          counter-reset: s3-bullet;
        }
        .s3-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
          counter-increment: s3-bullet;
        }
        .s3-bullet__icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0;
        }
        .s3-bullet__icon::before {
          content: counter(s3-bullet);
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${C.white};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: ${C.brandPrimary};
        }
        .s3-bullet__item strong {
          font-weight: 600;
          color: ${C.textPrimary};
        }

        /* Banner */
        .s3-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.neutral150};
          border-bottom: 1px solid ${C.neutral150};
          background-color: ${C.brandTint};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 32px;
          color: ${C.textPrimary};
        }
        .s3-banner strong {
          font-weight: 600;
          color: ${C.textPrimary};
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-header">
              <h2><span className="s3-brand">{t.sectionLabel}</span></h2>
            </div>
            <ul className="s3-bullet">
              {steps.map((step, i) => (
                <li key={i} className="s3-bullet__item">
                  <span className="s3-bullet__icon" aria-hidden="true" />
                  <span>
                    <strong>{step.title}</strong>{" "}
                    {/* Split body to allow product name styling if needed */}
                    {step.body}
                  </span>
                </li>
              ))}
            </ul>
            <div className="s3-banner">
              <strong>One enablement model, any deployment.</strong>{" "}
              {lang === "en"
                ? "The encapsulation and restoration logic is identical regardless of where "
                : "캡슐화 및 복원 논리는 "
              }
              <span className="s3-product">LLM Capsule</span>
              {lang === "en"
                ? " runs. AI results are restored locally in every deployment scenario."
                : "이 실행되는 위치에 관계없이 동일합니다. AI 결과는 모든 배포 시나리오에서 로컬에서 복원됩니다."
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
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
    defaultValue: "Explanation",
  },
  step1Title: { type: ControlType.String, title: "Step 1 Title", defaultValue: "On-premise deployment." },
  step1Body: { type: ControlType.String, title: "Step 1 Body", defaultValue: "The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.", displayTextArea: true },
  step2Title: { type: ControlType.String, title: "Step 2 Title", defaultValue: "Air-gapped deployment." },
  step2Body: { type: ControlType.String, title: "Step 2 Body", defaultValue: "For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.", displayTextArea: true },
  step3Title: { type: ControlType.String, title: "Step 3 Title", defaultValue: "Cloud deployment." },
  step3Body: { type: ControlType.String, title: "Step 3 Body", defaultValue: "Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.", displayTextArea: true },
  step4Title: { type: ControlType.String, title: "Step 4 Title", defaultValue: "Hybrid deployment." },
  step4Body: { type: ControlType.String, title: "Step 4 Body", defaultValue: "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.", displayTextArea: true },
  step5Title: { type: ControlType.String, title: "Step 5 Title", defaultValue: "Embedded integration." },
  step5Body: { type: ControlType.String, title: "Step 5 Body", defaultValue: "LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.", displayTextArea: true },
})
