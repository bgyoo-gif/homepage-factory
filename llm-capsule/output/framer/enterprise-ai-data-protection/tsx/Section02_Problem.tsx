import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
}

interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section02_Problem({
  sectionLabel = "Problem",
  paragraph1 = "Every enterprise that sends data to an external AI service creates a data exposure event. Even when AI providers offer data processing agreements and claim not to use customer data for training, the data still transits external infrastructure, is processed by external compute, and generates logs and metadata in external systems.",
  paragraph2 = "For regulated enterprises, this exposure is often non-negotiable — not because of trust issues with AI providers, but because of regulatory mandates, contractual obligations, and internal governance requirements that prohibit sensitive data from leaving controlled environments.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s2-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s2-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s2-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s2-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 22px; }
          .s2-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-section-header h2 { font-size: 28px; }
          .s2-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s2-section" id="section-3">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s2-brand-text">{sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">{paragraph1}</p>
            <p className="s2-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Problem",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Every enterprise that sends data to an external AI service creates a data exposure event. Even when AI providers offer data processing agreements and claim not to use customer data for training, the data still transits external infrastructure, is processed by external compute, and generates logs and metadata in external systems.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "For regulated enterprises, this exposure is often non-negotiable — not because of trust issues with AI providers, but because of regulatory mandates, contractual obligations, and internal governance requirements that prohibit sensitive data from leaving controlled environments.",
    displayTextArea: true,
  },
})
