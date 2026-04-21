import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  headingBrand?: string
  headingPlain?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section03_Explanation({
  headingBrand = "Explanation",
  headingPlain = "",
  paragraph1 = "Not all data carries the same sensitivity in every context. A company name in a press release is public. The same company name in an M&A target list is highly sensitive. Enterprise context control enables organizations to define protection policies that reflect these contextual differences.",
  paragraph2 = "This goes beyond PII detection. Enterprise context control covers trade secrets, financial terms, strategic data, internal metrics, and any organization-specific sensitivity category — providing true enterprise confidentiality control.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        @container (min-width: 768px) {
          .s3-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s3-section { padding: 60px 0; }
        }

        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }

        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }

        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s3-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-section-header h2 { font-size: 28px; }
        }

        @container (max-width: 767px) {
          .s3-section-header { text-align: left; }
        }

        .s3-text--brand {
          color: ${PALETTE.brandSecondary};
        }

        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-paragraph:last-child { margin-bottom: 0; }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                <span className="s3-text--brand">{headingBrand}</span>
                {headingPlain && ` ${headingPlain}`}
              </h2>
            </div>
            <p className="s3-paragraph">{paragraph1}</p>
            <p className="s3-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
  headingBrand: {
    type: ControlType.String,
    title: "Heading (Brand)",
    defaultValue: "Explanation",
  },
  headingPlain: {
    type: ControlType.String,
    title: "Heading (Plain)",
    defaultValue: "",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue:
      "Not all data carries the same sensitivity in every context. A company name in a press release is public. The same company name in an M&A target list is highly sensitive. Enterprise context control enables organizations to define protection policies that reflect these contextual differences.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue:
      "This goes beyond PII detection. Enterprise context control covers trade secrets, financial terms, strategic data, internal metrics, and any organization-specific sensitivity category — providing true enterprise confidentiality control.",
    displayTextArea: true,
  },
})
