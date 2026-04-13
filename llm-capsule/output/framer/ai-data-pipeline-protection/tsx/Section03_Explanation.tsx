import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandLight:     "#B8D4EE",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textInverse:   "#ffffff",
  borderDefault: "#e6e7e9",
  surfaceDark:   "#171719",
  surfaceWhite:  "#ffffff",
  white: "#ffffff",
}

interface StageItem {
  number: string
  label: string
  text: string
}

interface Props {
  sectionLabel?: string
  stage1Label?: string
  stage1Text?: string
  stage2Label?: string
  stage2Text?: string
  stage3Label?: string
  stage3Text?: string
  stage4Label?: string
  stage4Text?: string
  stage5Label?: string
  stage5Text?: string
  keyMessage?: string
  keyMessageHighlight?: string
  productName?: string
}

export default function Section03_Explanation({
  sectionLabel = "Explanation",
  stage1Label = "Stage 1: Ingestion",
  stage1Text = "Documents enter the pipeline from enterprise systems — document management, email, databases, RAG pipelines. LLM Capsule intercepts data at this stage and applies context-aware data control to classify sensitivity.",
  stage2Label = "Stage 2: Encapsulation",
  stage2Text = "Sensitive elements are replaced with structure-preserving representations. The encapsulation occurs entirely within the enterprise environment. Mapping data is stored locally and never transmitted.",
  stage3Label = "Stage 3: AI Processing",
  stage3Text = "Encapsulated data is sent to the AI model. The model processes structurally intact documents and generates useful outputs. No original sensitive data reaches the AI provider.",
  stage4Label = "Stage 4: Restoration",
  stage4Text = "AI results are restored through local restoration. The locally stored mapping is applied to reconstruct outputs with real enterprise data.",
  stage5Label = "Stage 5: Delivery",
  stage5Text = "Restored outputs are routed to downstream business systems — compliance platforms, case management, analytics dashboards — ready for immediate use.",
  keyMessage = " is not a single checkpoint, but a continuous AI enablement data layer that protects data from ingestion to delivery, enabling enterprise AI adoption at every stage.",
  keyMessageHighlight = "AI data pipeline protection",
  productName = "LLM Capsule",
}: Props) {

  const stages = [
    { number: "1", label: stage1Label, text: stage1Text },
    { number: "2", label: stage2Label, text: stage2Text },
    { number: "3", label: stage3Label, text: stage3Text },
    { number: "4", label: stage4Label, text: stage4Text },
    { number: "5", label: stage5Label, text: stage5Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          overflow: hidden;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .s3-section { padding: 60px 0; } }
        @container (min-width: 1024px) { .s3-section { padding: 60px 0; } }
        @container (min-width: 1440px) { .s3-section { padding: 60px 0; } }

        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }
        

        .s3-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s3-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .s3-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s3-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s3-header h2 { font-size: 28px; } }

        .s3-brand { color: ${P.brandSecondary}; }

        .s3-stages {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .s3-stage {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          border: 1px solid ${P.borderDefault};
          border-radius: 18px;
          background-color: ${P.surfaceWhite};
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
        }

        .s3-stage__number {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background-color: ${P.brandPrimary};
          color: ${P.white};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s3-stage__content { flex: 1; }

        .s3-stage__label {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: ${P.brandSecondary};
          margin-bottom: 8px;
        }

        .s3-stage__text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s3-key-message {
          padding: 24px 32px;
          border-radius: 18px;
          background-color: ${P.surfaceDark};
          color: ${P.textInverse};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.7;
          margin: 32px 0 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-key-message strong {
          color: ${P.brandLight};
        }
      `}</style>

      <section className="s3-section" id="section-4">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-header">
              <h2><span className="s3-brand">{sectionLabel}</span></h2>
            </div>

            <div className="s3-stages">
              {stages.map((stage) => (
                <div key={stage.number} className="s3-stage">
                  <span className="s3-stage__number">{stage.number}</span>
                  <div className="s3-stage__content">
                    <div className="s3-stage__label">{stage.label}</div>
                    <p className="s3-stage__text">
                      {stage.text.replace(productName, "").split(productName).map((part, i, arr) =>
                        i < arr.length - 1 ? (
                          <span key={i}>{part}<span className="s3-product">{productName}</span></span>
                        ) : part
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="s3-key-message">
              <strong>{keyMessageHighlight}</strong>{keyMessage}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Explanation" },
  stage1Label:  { type: ControlType.String, title: "Stage 1 Label", defaultValue: "Stage 1: Ingestion" },
  stage1Text:   { type: ControlType.String, title: "Stage 1 Text",  defaultValue: "Documents enter the pipeline from enterprise systems — document management, email, databases, RAG pipelines. LLM Capsule intercepts data at this stage and applies context-aware data control to classify sensitivity." },
  stage2Label:  { type: ControlType.String, title: "Stage 2 Label", defaultValue: "Stage 2: Encapsulation" },
  stage2Text:   { type: ControlType.String, title: "Stage 2 Text",  defaultValue: "Sensitive elements are replaced with structure-preserving representations. The encapsulation occurs entirely within the enterprise environment. Mapping data is stored locally and never transmitted." },
  stage3Label:  { type: ControlType.String, title: "Stage 3 Label", defaultValue: "Stage 3: AI Processing" },
  stage3Text:   { type: ControlType.String, title: "Stage 3 Text",  defaultValue: "Encapsulated data is sent to the AI model. The model processes structurally intact documents and generates useful outputs. No original sensitive data reaches the AI provider." },
  stage4Label:  { type: ControlType.String, title: "Stage 4 Label", defaultValue: "Stage 4: Restoration" },
  stage4Text:   { type: ControlType.String, title: "Stage 4 Text",  defaultValue: "AI results are restored through local restoration. The locally stored mapping is applied to reconstruct outputs with real enterprise data." },
  stage5Label:  { type: ControlType.String, title: "Stage 5 Label", defaultValue: "Stage 5: Delivery" },
  stage5Text:   { type: ControlType.String, title: "Stage 5 Text",  defaultValue: "Restored outputs are routed to downstream business systems — compliance platforms, case management, analytics dashboards — ready for immediate use." },
  keyMessageHighlight: { type: ControlType.String, title: "Key Msg Highlight", defaultValue: "AI data pipeline protection" },
  keyMessage:   { type: ControlType.String, title: "Key Message Suffix", defaultValue: " is not a single checkpoint, but a continuous AI enablement data layer that protects data from ingestion to delivery, enabling enterprise AI adoption at every stage." },
  productName:  { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
})
