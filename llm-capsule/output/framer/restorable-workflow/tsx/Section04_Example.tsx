import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral900: "#0f0f0f",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  success: "#0e824c",
  surfaceWhite: "#ffffff",
  shadowCard: "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionHeading?: string
  paragraph1?: string
  paragraph2Pre?: string
  paragraph2Highlight?: string
  paragraph2Post?: string
}

export default function Section04_Example({
  sectionHeading = "Example",
  paragraph1 = "An HR department uses AI to generate performance review summaries. Employee names, performance ratings, and salary information are encapsulated. AI produces structured summaries from protected data.",
  paragraph2Pre = "Restoration restores all employee details, producing",
  paragraph2Highlight = "manager-ready review documents",
  paragraph2Post = "without any manual editing.",
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
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }

        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }

        .s4-brand {
          color: ${PALETTE.brandSecondary};
        }

        .s4-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.neutral150};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .s4-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-paragraph--strong {
          font-weight: 500;
        }

        .s4-divider {
          border: none;
          border-top: 1px solid ${PALETTE.neutral150};
          margin: 16px 0;
        }

        .s4-restored {
          font-weight: 600;
          color: ${PALETTE.success};
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-card { padding: 32px; }
          .s4-section-header h2 { font-size: 22px; }
        }

        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
        }

        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s4-section" id="section-5">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2><span className="s4-brand">{sectionHeading}</span></h2>
            </div>
            <div className="s4-card">
              <p className="s4-paragraph">{paragraph1}</p>
              <hr className="s4-divider" />
              <p className="s4-paragraph s4-paragraph--strong">
                {paragraph2Pre}{" "}
                <span className="s4-restored">{paragraph2Highlight}</span>{" "}
                {paragraph2Post}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Example, {
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Example",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "An HR department uses AI to generate performance review summaries. Employee names, performance ratings, and salary information are encapsulated. AI produces structured summaries from protected data.",
    displayTextArea: true,
  },
  paragraph2Pre: {
    type: ControlType.String,
    title: "Paragraph 2 (Pre-highlight)",
    defaultValue: "Restoration restores all employee details, producing",
    displayTextArea: true,
  },
  paragraph2Highlight: {
    type: ControlType.String,
    title: "Paragraph 2 Highlight",
    defaultValue: "manager-ready review documents",
  },
  paragraph2Post: {
    type: ControlType.String,
    title: "Paragraph 2 (Post-highlight)",
    defaultValue: "without any manual editing.",
  },
})
