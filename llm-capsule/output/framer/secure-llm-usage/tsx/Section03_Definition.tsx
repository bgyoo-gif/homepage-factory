import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral100: "#ececec",
  neutral150: "#e6e7e9",
  neutral025: "#f7f7f7",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  surfaceWhite: "#ffffff",
  overlayBrandTintLight: "rgba(24,33,232,0.06)",
}

interface Props {
  bannerLabel?: string
  definitionText?: string
  productName?: string
}

export default function Section03_Definition({
  bannerLabel = "DEFINITION",
  definitionText = "Secure LLM usage is the practice of using large language models for enterprise tasks — summarization, extraction, classification, translation — without exposing original sensitive data to the AI provider.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s3-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.neutral150};
          border-bottom: 1px solid ${PALETTE.neutral150};
          background-color: ${PALETTE.overlayBrandTintLight};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-banner-label {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${PALETTE.textTertiary};
          margin-bottom: 8px;
          display: block;
        }
        .s3-banner-text {
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s3-enables-text {
          color: ${PALETTE.textPrimary};
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0; }
        }
      `}</style>
      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-banner">
              <span className="s3-banner-label">{bannerLabel}</span>
              <p className="s3-banner-text">
                {definitionText} <span className="s3-product-name">{productName}</span> enables secure LLM usage through its AI enablement data layer: pre-processing encapsulation and post-processing restoration that work across any LLM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Definition, {
  bannerLabel: {
    type: ControlType.String,
    title: "Banner Label",
    defaultValue: "DEFINITION",
  },
  definitionText: {
    type: ControlType.String,
    title: "Definition Text",
    defaultValue: "Secure LLM usage is the practice of using large language models for enterprise tasks — summarization, extraction, classification, translation — without exposing original sensitive data to the AI provider.",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
