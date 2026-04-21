import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
}

interface Props {
  sectionLabel?: string
  paragraph?: string
  brandName?: string
}

export default function Section02_Overview({
  sectionLabel = "Overview",
  brandName = "LLM Capsule",
  paragraph = "Synthetic data platforms generate artificial datasets that mimic the statistical properties of real data. They are used for model training, testing, and analytics where real data cannot be used. LLM Capsule addresses a different problem: it is an AI enablement data layer that enables AI processing on real enterprise documents while protecting sensitive elements and restoring usable outputs.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 60px 0;
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

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
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
        .s2-brand-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
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
          .s2-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s2-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s2-section-header h2 { font-size: 28px; }
          .s2-section-header { text-align: center; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s2-brand-text">{sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">
              Synthetic data platforms generate artificial datasets that mimic the statistical properties of real data. They are used for model training, testing, and analytics where real data cannot be used. <span className="s2-brand-name">{brandName}</span> addresses a different problem: it is an AI enablement data layer that enables AI processing on real enterprise documents while protecting sensitive elements and restoring usable outputs.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Overview, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Overview",
  },
  brandName: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "Synthetic data platforms generate artificial datasets that mimic the statistical properties of real data. They are used for model training, testing, and analytics where real data cannot be used. LLM Capsule addresses a different problem: it is an AI enablement data layer that enables AI processing on real enterprise documents while protecting sensitive elements and restoring usable outputs.",
    displayTextArea: true,
  },
})
