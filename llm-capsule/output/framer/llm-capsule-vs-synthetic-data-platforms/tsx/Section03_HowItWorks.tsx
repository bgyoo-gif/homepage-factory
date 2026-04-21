import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
}

interface Props {
  sectionLabelPrefix?: string
  sectionLabelBrand?: string
  sectionLabelSuffix?: string
  paragraph?: string
}

export default function Section03_HowItWorks({
  sectionLabelPrefix = "How Synthetic Data Platforms",
  sectionLabelBrand = "Works",
  sectionLabelSuffix = "",
  paragraph = "Synthetic data platforms analyze real datasets and generate new, artificial data that preserves statistical distributions, correlations, and patterns. The synthetic data contains no real individuals or entities. It is used for model training, development environments, and analytics workloads.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
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
          text-wrap: balance;
        }
        .s3-brand-text {
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

        @container (min-width: 768px) {
          .s3-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {sectionLabelPrefix} <span className="s3-brand-text">{sectionLabelBrand}</span>{sectionLabelSuffix}
              </h2>
            </div>
            <p className="s3-paragraph">{paragraph}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_HowItWorks, {
  sectionLabelPrefix: {
    type: ControlType.String,
    title: "Heading Prefix",
    defaultValue: "How Synthetic Data Platforms",
  },
  sectionLabelBrand: {
    type: ControlType.String,
    title: "Heading Brand",
    defaultValue: "Works",
  },
  sectionLabelSuffix: {
    type: ControlType.String,
    title: "Heading Suffix",
    defaultValue: "",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "Synthetic data platforms analyze real datasets and generate new, artificial data that preserves statistical distributions, correlations, and patterns. The synthetic data contains no real individuals or entities. It is used for model training, development environments, and analytics workloads.",
    displayTextArea: true,
  },
})
