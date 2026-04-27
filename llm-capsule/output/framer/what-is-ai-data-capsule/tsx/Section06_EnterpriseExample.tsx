import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionLabel?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2?: string
  productName?: string
}

export default function Section06_EnterpriseExample({
  sectionLabel = "Enterprise Example",
  cardTitle = "Financial Compliance Review",
  cardParagraph1 = "A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.",
  cardParagraph2 = " the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 32px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }
        .s6-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s6-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: pretty;
        }
        .s6-label-brand { color: ${PALETTE.brandSecondary}; }
        .s6-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s6-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          text-wrap: pretty;
        }
        .s6-card-p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 24px; }
          .s6-card { padding: 32px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s6-label-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s6-card">
              <h4 className="s6-card-title">{cardTitle}</h4>
              <p className="s6-card-p">{cardParagraph1}</p>
              <p className="s6-card-p">
                With <span className="s6-product-name">{productName}</span>,{cardParagraph2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_EnterpriseExample, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Enterprise Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Financial Compliance Review",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.",
    displayTextArea: true,
  },
  cardParagraph2: {
    type: ControlType.String,
    title: "Card Paragraph 2 (after product name)",
    defaultValue: " the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
