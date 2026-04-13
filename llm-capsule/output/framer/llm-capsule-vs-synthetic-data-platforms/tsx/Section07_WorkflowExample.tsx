import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  shadowCard: "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionLabelPrefix?: string
  sectionLabelBrand?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2Suffix?: string
  brandName?: string
}

export default function Section07_WorkflowExample({
  sectionLabelPrefix = "Enterprise Workflow",
  sectionLabelBrand = "Example",
  brandName = "LLM Capsule",
  cardTitle = "Compliance Document Analysis",
  cardParagraph1 = "A compliance team needs AI to identify risk indicators in 1,000 real audit reports. Synthetic data cannot help — synthetic audit reports do not contain the real findings, real entity references, and real risk patterns the team needs to analyze.",
  cardParagraph2Suffix = "encapsulates the real audit reports, AI identifies risk patterns in the protected documents, and restoration produces an actionable risk assessment with real entity names and findings linked to real reports.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
        }

        .s7-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s7-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s7-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s7-brand-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s7-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s7-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s7-card p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${PALETTE.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s7-card p + p {
          margin-top: 12px;
        }

        @container (min-width: 768px) {
          .s7-section-header h2 { font-size: 22px; }
          .s7-card { padding: 32px; }
        }
        @container (min-width: 1024px) {
          .s7-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s7-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s7-section">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-section-header">
              <h2>
                {sectionLabelPrefix} <span className="s7-brand-text">{sectionLabelBrand}</span>
              </h2>
            </div>
            <div className="s7-card">
              <h4 className="s7-card__title">{cardTitle}</h4>
              <p>{cardParagraph1}</p>
              <p><span className="s7-brand-name">{brandName}</span> {cardParagraph2Suffix}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_WorkflowExample, {
  sectionLabelPrefix: {
    type: ControlType.String,
    title: "Heading Prefix",
    defaultValue: "Enterprise Workflow",
  },
  sectionLabelBrand: {
    type: ControlType.String,
    title: "Heading Brand",
    defaultValue: "Example",
  },
  brandName: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Compliance Document Analysis",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "A compliance team needs AI to identify risk indicators in 1,000 real audit reports. Synthetic data cannot help — synthetic audit reports do not contain the real findings, real entity references, and real risk patterns the team needs to analyze.",
    displayTextArea: true,
  },
  cardParagraph2Suffix: {
    type: ControlType.String,
    title: "Card Paragraph 2 (after brand)",
    defaultValue: "encapsulates the real audit reports, AI identifies risk patterns in the protected documents, and restoration produces an actionable risk assessment with real entity names and findings linked to real reports.",
    displayTextArea: true,
  },
})
