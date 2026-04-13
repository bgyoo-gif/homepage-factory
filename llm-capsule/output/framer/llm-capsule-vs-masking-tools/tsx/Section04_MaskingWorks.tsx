import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite:  "#ffffff",
  borderDefault: "#e6e7e9",
}

interface Props {
  heading?: string
  paragraph?: string
}

export default function Section04_MaskingWorks({
  heading = "How Traditional Masking Works",
  paragraph = "Masking tools scan documents for sensitive patterns — names, numbers, dates — and replace them with generic tokens ([REDACTED], [NAME], ****) or remove them entirely. The replacement is permanent. There is no mechanism to restore original values after processing.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
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
        @container (min-width: 768px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }
        .s4-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s4-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
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

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0; max-width: 1080px; }
          .s4-header h2 { font-size: 28px; }
          .s4-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s4-section" id="section-4">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2>{heading}</h2>
            </div>
            <p className="s4-paragraph">{paragraph}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_MaskingWorks, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "How Traditional Masking Works",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "Masking tools scan documents for sensitive patterns — names, numbers, dates — and replace them with generic tokens ([REDACTED], [NAME], ****) or remove them entirely. The replacement is permanent. There is no mechanism to restore original values after processing.",
    displayTextArea: true,
  },
})
