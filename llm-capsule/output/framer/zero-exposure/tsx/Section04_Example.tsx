import { addPropertyControls, ControlType } from "framer"

const BRAND = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  neutral150:    "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface Props {
  heading?: string
  exampleText?: string
}

export default function Section04_Example({
  heading = "Example",
  exampleText = "A healthcare organization sends patient records to AI for diagnostic summarization. With zero exposure, the AI provider receives records where patient names are replaced with consistent tokens, medical record numbers are replaced with synthetic identifiers, and dates are shifted — but all clinical relationships remain intact for accurate summarization.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${BRAND.surfaceWhite};
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
          border-bottom: 1px solid ${BRAND.neutral150};
          text-align: center;
        }
        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${BRAND.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s4-brand-color {
          color: ${BRAND.brandSecondary};
        }
        .s4-card {
          background-color: ${BRAND.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${BRAND.neutral150};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-card__text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${BRAND.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
          .s4-card { padding: 32px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0; max-width: 1080px; }
          .s4-section-header h2 { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s4-section-header { text-align: left; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                <span className="s4-brand-color">{heading}</span>
              </h2>
            </div>
            <div className="s4-card">
              <p className="s4-card__text">{exampleText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Example, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Example",
  },
  exampleText: {
    type: ControlType.String,
    title: "Example Text",
    defaultValue:
      "A healthcare organization sends patient records to AI for diagnostic summarization. With zero exposure, the AI provider receives records where patient names are replaced with consistent tokens, medical record numbers are replaced with synthetic identifiers, and dates are shifted — but all clinical relationships remain intact for accurate summarization.",
    displayTextArea: true,
  },
})
