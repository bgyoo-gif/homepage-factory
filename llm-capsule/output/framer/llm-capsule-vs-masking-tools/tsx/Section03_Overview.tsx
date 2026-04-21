import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  heading?: string
  product?: string
  paragraph?: string
}

export default function Section03_Overview({
  heading = "Overview",
  product = "LLM Capsule",
  paragraph = "Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. {product} takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs.",
}: Props) {
  const paragraphText = paragraph.replace("{product}", product)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
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
        @container (min-width: 768px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }
        .s3-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s3-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0; max-width: 1080px; }
          .s3-header h2 { font-size: 28px; }
          .s3-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s3-section" id="section-3">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{heading}</h2>
            </div>
            <p className="s3-paragraph">
              Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. <span className="s3-product">{product}</span> takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Overview, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Overview",
  },
  product: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. {product} takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs.",
    displayTextArea: true,
  },
})
