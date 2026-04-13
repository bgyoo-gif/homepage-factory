import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite:  "#ffffff",
  borderDefault: "#e6e7e9",
}

interface Props {
  heading?: string
  cardTitle?: string
  withMaskingLabel?: string
  withMaskingText?: string
  withCapsuleLabel?: string
  withCapsuleProduct?: string
  withCapsuleText?: string
}

export default function Section08_WorkflowExample({
  heading = "Enterprise Workflow Example",
  cardTitle = "Contract Analysis Pipeline",
  withMaskingLabel = "With masking:",
  withMaskingText = "200 contracts masked → AI produces generic summaries with \"[REDACTED]\" throughout → Legal team manually restores ~40 hours of context rebuilding.",
  withCapsuleLabel = "With",
  withCapsuleProduct = "LLM Capsule",
  withCapsuleText = ": 200 contracts encapsulated → AI produces structured summaries → Local restoration restores all parties, amounts, and dates → Output feeds directly into contract management system.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s8-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s8-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s8-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s8-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s8-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          margin: 0 0 8px 0;
        }
        .s8-card p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s8-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0; max-width: 1080px; }
          .s8-header h2 { font-size: 28px; }
          .s8-card { padding: 32px; }
          .s8-section { padding: 64px 0; }
        }
      `}</style>
      <section className="s8-section" id="section-8">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-header">
              <h2>{heading}</h2>
            </div>
            <div className="s8-card">
              <h4 className="s8-card-title">{cardTitle}</h4>
              <p>
                <strong>{withMaskingLabel}</strong> {withMaskingText}
              </p>
              <p>
                <strong>{withCapsuleLabel} <span className="s8-product">{withCapsuleProduct}</span>:</strong>{withCapsuleText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_WorkflowExample, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Enterprise Workflow Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Contract Analysis Pipeline",
  },
  withMaskingLabel: {
    type: ControlType.String,
    title: "Masking Label",
    defaultValue: "With masking:",
  },
  withMaskingText: {
    type: ControlType.String,
    title: "Masking Text",
    defaultValue: "200 contracts masked → AI produces generic summaries with \"[REDACTED]\" throughout → Legal team manually restores ~40 hours of context rebuilding.",
    displayTextArea: true,
  },
  withCapsuleLabel: {
    type: ControlType.String,
    title: "Capsule Label",
    defaultValue: "With",
  },
  withCapsuleProduct: {
    type: ControlType.String,
    title: "Capsule Product",
    defaultValue: "LLM Capsule",
  },
  withCapsuleText: {
    type: ControlType.String,
    title: "Capsule Text",
    defaultValue: ": 200 contracts encapsulated → AI produces structured summaries → Local restoration restores all parties, amounts, and dates → Output feeds directly into contract management system.",
    displayTextArea: true,
  },
})
