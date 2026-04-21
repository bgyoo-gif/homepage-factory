import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  headingBrand?: string
  headingPlain?: string
  cardText?: string
}

export default function Section04_Example({
  headingBrand = "Example",
  headingPlain = "",
  cardText = "A bank defines different encapsulation policies for three document types: customer correspondence (protect PII only), internal risk assessments (protect PII plus risk scores and limit recommendations), and board presentations (protect all financial projections plus strategic commentary). Enterprise context control applies the right policy to each document automatically.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        @container (min-width: 768px) {
          .s4-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s4-section { padding: 60px 0; }
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

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
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
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s4-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-section-header h2 { font-size: 28px; }
        }

        @container (max-width: 767px) {
          .s4-section-header { text-align: left; }
        }

        .s4-text--brand {
          color: ${PALETTE.brandSecondary};
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

        @container (min-width: 1440px) {
          .s4-card { padding: 32px; }
        }

        .s4-card-text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                <span className="s4-text--brand">{headingBrand}</span>
                {headingPlain && ` ${headingPlain}`}
              </h2>
            </div>
            <div className="s4-card">
              <p className="s4-card-text">{cardText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Example, {
  headingBrand: {
    type: ControlType.String,
    title: "Heading (Brand)",
    defaultValue: "Example",
  },
  headingPlain: {
    type: ControlType.String,
    title: "Heading (Plain)",
    defaultValue: "",
  },
  cardText: {
    type: ControlType.String,
    title: "Card Text",
    defaultValue:
      "A bank defines different encapsulation policies for three document types: customer correspondence (protect PII only), internal risk assessments (protect PII plus risk scores and limit recommendations), and board presentations (protect all financial projections plus strategic commentary). Enterprise context control applies the right policy to each document automatically.",
    displayTextArea: true,
  },
})
