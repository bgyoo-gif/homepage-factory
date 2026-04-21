import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
}

interface Props {
  sectionLabel?: string
  bannerLabel?: string
  bannerText?: string
  productName?: string
}

export default function Section03_Definition({
  sectionLabel = "Definition",
  bannerLabel = "Enterprise AI Enablement",
  bannerText = " operates as an AI enablement data layer and plugin — protecting sensitive information through local encapsulation, structure-preserving processing, and local restoration while enabling full AI-powered workflows across any LLM.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
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
        .s3-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s3-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
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
        .s3-banner p {
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

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
          .s3-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-section-header h2 { font-size: 28px; }
          .s3-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s3-section" id="section-4">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s3-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s3-banner">
              <span className="s3-banner-label">{bannerLabel}</span>
              <p>
                Enterprise AI enablement is a data-layer approach that enables enterprises to adopt AI on sensitive data without exposure risk.{" "}
                <span className="s3-product-name">{productName}</span>
                {bannerText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Definition, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Definition",
  },
  bannerLabel: {
    type: ControlType.String,
    title: "Banner Label",
    defaultValue: "Enterprise AI Enablement",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text (after product name)",
    defaultValue: " operates as an AI enablement data layer and plugin — protecting sensitive information through local encapsulation, structure-preserving processing, and local restoration while enabling full AI-powered workflows across any LLM.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
