import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionLabel?: string
  cardTitle?: string
  cardBody1?: string
  cardBody2?: string
  productName?: string
}

export default function Section04_EnterpriseExample({
  sectionLabel = "Enterprise Example",
  cardTitle = "Insurance Claims Processing",
  cardBody1 = "An insurance company processes 5,000 claims per month through AI for classification, damage assessment summarization, and fraud pattern detection. Each claim contains policyholder PII, medical records, and financial data.",
  cardBody2 = "encapsulates all sensitive data locally. AI classifies and summarizes protected claims. Local restoration restores policyholder details into the outputs, which feed directly into the claims management system. No manual re-linking required.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          background-color: ${PALETTE.surfaceWhite};
          padding: 32px 0;
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
        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s4-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s4-product-text {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s4-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0;
        }
        .s4-card-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${PALETTE.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-card-body + .s4-card-body {
          margin-top: 0;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 22px; }
          .s4-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
          .s4-section { padding: 60px 0; }
          .s4-card { padding: 32px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0; max-width: 1080px; }
          .s4-section-header h2 { font-size: 28px; }
          .s4-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>Enterprise <span className="s4-brand-text">{sectionLabel.replace("Enterprise ", "")}</span></h2>
            </div>
            <div className="s4-card">
              <h4 className="s4-card-title">{cardTitle}</h4>
              <p className="s4-card-body">{cardBody1}</p>
              <p className="s4-card-body"><span className="s4-product-text">{productName}</span> {cardBody2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_EnterpriseExample, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Enterprise Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Insurance Claims Processing",
  },
  cardBody1: {
    type: ControlType.String,
    title: "Card Body 1",
    defaultValue: "An insurance company processes 5,000 claims per month through AI for classification, damage assessment summarization, and fraud pattern detection. Each claim contains policyholder PII, medical records, and financial data.",
    displayTextArea: true,
  },
  cardBody2: {
    type: ControlType.String,
    title: "Card Body 2 (after product name)",
    defaultValue: "encapsulates all sensitive data locally. AI classifies and summarizes protected claims. Local restoration restores policyholder details into the outputs, which feed directly into the claims management system. No manual re-linking required.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
