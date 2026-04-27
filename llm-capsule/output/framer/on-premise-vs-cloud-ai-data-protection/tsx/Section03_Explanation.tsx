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
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section03_Explanation({
  sectionLabel = "Explanation",
  step1Title = "On-premise deployment.",
  step1Body = "The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.",
  step2Title = "Air-gapped deployment.",
  step2Body = "For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.",
  step3Title = "Cloud deployment.",
  step3Body = "Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.",
  step4Title = "Hybrid deployment.",
  step4Body = "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.",
  step5Title = "Embedded integration.",
  step5Body = "LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.",
  bannerText = "One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.",
}: Props) {
  const steps = [
    { title: step1Title, body: step1Body },
    { title: step2Title, body: step2Body },
    { title: step3Title, body: step3Body },
    { title: step4Title, body: step4Body },
    { title: step5Title, body: step5Body },
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
          text-wrap: pretty;
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
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s3-brand">{sectionLabel}</span></h2>
            </div>
            <ul className="s3-bullet">
              {steps.map((step, i) => (
                <li key={i} className="s3-bullet__item">
                  <span className="s3-bullet__icon" aria-hidden="true" />
                  <span>
                    <strong>{step.title}</strong>{" "}
                    {step.body}
                  </span>
                </li>
              ))}
            </ul>
            <div className="s3-banner">
              {bannerText}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
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
  bannerText: { type: ControlType.String, title: "Banner Text", defaultValue: "One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.", displayTextArea: true },
})
