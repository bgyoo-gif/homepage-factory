import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface Props {
  sectionLabel?: string
  card1Title?: string
  card1Description?: string
  card2Title?: string
  card2Description?: string
}

export default function Section05_EnterpriseExamples({
  sectionLabel = "Examples",
  card1Title = "Public Sector: Citizen Services AI",
  card1Description = "A government agency uses AI to process citizen benefit applications. Each application contains PII, income data, and residency information. Enterprise AI data protection ensures no citizen data leaves the government environment while AI automates eligibility assessment and case routing.",
  card2Title = "Telecom: Network Security Intelligence",
  card2Description = "A telecom operator uses AI to analyze network incident reports that contain customer data, infrastructure details, and vulnerability information. Encapsulation protects all sensitive elements while AI performs pattern analysis and threat classification.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0;
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
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s5-brand-text { color: ${PALETTE.brandSecondary}; }
        .s5-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .s5-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          text-wrap: balance;
        }
        .s5-card-description {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
          .s5-section { padding: 60px 0; }
          .s5-cards { flex-direction: row; }
          .s5-card { flex: 1; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
          .s5-card { padding: 32px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
          .s5-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s5-section" id="section-6">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2>Enterprise <span className="s5-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s5-cards">
              <div className="s5-card">
                <h4 className="s5-card-title">{card1Title}</h4>
                <p className="s5-card-description">{card1Description}</p>
              </div>
              <div className="s5-card">
                <h4 className="s5-card-title">{card2Title}</h4>
                <p className="s5-card-description">{card2Description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_EnterpriseExamples, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Examples" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Public Sector: Citizen Services AI" },
  card1Description: {
    type: ControlType.String, title: "Card 1 Description",
    defaultValue: "A government agency uses AI to process citizen benefit applications. Each application contains PII, income data, and residency information. Enterprise AI data protection ensures no citizen data leaves the government environment while AI automates eligibility assessment and case routing.",
    displayTextArea: true,
  },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Telecom: Network Security Intelligence" },
  card2Description: {
    type: ControlType.String, title: "Card 2 Description",
    defaultValue: "A telecom operator uses AI to analyze network incident reports that contain customer data, infrastructure details, and vulnerability information. Encapsulation protects all sensitive elements while AI performs pattern analysis and threat classification.",
    displayTextArea: true,
  },
})
