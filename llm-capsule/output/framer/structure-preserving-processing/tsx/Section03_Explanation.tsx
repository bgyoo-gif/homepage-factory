import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionHeading?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section03_Explanation({
  sectionHeading = "Explanation",
  paragraph1 = "Flat masking treats every sensitive value as an independent token, replacing each with a generic placeholder. This collapses entity relationships, breaks table schemas, and removes the structural information AI models use for comprehension.",
  paragraph2 = "Structure-preserving processing maintains these relationships. When the same entity appears in multiple locations, all occurrences map to the same replacement. Table column headers and row identifiers remain semantically consistent. Cross-references between document sections maintain their logical connections.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s3-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s3;
        }

        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container s3 (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }

        @container s3 (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }

        @container s3 (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }

        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }

        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }

        @container s3 (min-width: 768px) {
          .s3-section-header h2 { font-size: 22px; }
        }

        @container s3 (min-width: 1024px) {
          .s3-section-header h2 { font-size: 24px; }
        }

        @container s3 (min-width: 1440px) {
          .s3-section-header h2 { font-size: 28px; }
        }

        .s3-text--brand {
          color: #5690D4;
        }

        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #636363;
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
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s3-text--brand">{sectionHeading}</span></h2>
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
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Explanation",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue:
      "Flat masking treats every sensitive value as an independent token, replacing each with a generic placeholder. This collapses entity relationships, breaks table schemas, and removes the structural information AI models use for comprehension.",
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue:
      "Structure-preserving processing maintains these relationships. When the same entity appears in multiple locations, all occurrences map to the same replacement. Table column headers and row identifiers remain semantically consistent. Cross-references between document sections maintain their logical connections.",
  },
})
