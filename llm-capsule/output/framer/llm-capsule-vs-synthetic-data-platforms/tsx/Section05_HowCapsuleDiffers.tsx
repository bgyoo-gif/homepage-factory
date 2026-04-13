import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
  bannerBrandTint: "rgba(24, 33, 232, 0.06)",
}

interface Props {
  sectionLabelPrefix?: string
  sectionLabelBrand?: string
  sectionLabelSuffix?: string
  brandName?: string
  paragraph?: string
  bannerBold?: string
  bannerText?: string
}

export default function Section05_HowCapsuleDiffers({
  sectionLabelPrefix = "How",
  sectionLabelBrand = "LLM Capsule",
  sectionLabelSuffix = "Differs",
  brandName = "LLM Capsule",
  paragraph = "LLM Capsule does not replace real data with synthetic data. It encapsulates real documents — preserving their specific content, structure, and relationships — while replacing only sensitive elements with reversible representations. AI processes real enterprise content and produces real enterprise outputs, restored through local restoration (restoration).",
  bannerBold = "AI results are restored locally.",
  bannerText = " LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }

        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s5-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s5-brand-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s5-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.bannerBrandTint};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          color: ${PALETTE.textPrimary};
        }

        @container (min-width: 768px) {
          .s5-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2>
                {sectionLabelPrefix} <span className="s5-brand-name">{sectionLabelBrand}</span> <span className="s5-brand-text">{sectionLabelSuffix}</span>
              </h2>
            </div>
            <p className="s5-paragraph">
              <span className="s5-brand-name">{brandName}</span> does not replace real data with synthetic data. It encapsulates real documents — preserving their specific content, structure, and relationships — while replacing only sensitive elements with reversible representations. AI processes real enterprise content and produces real enterprise outputs, restored through local restoration (restoration).
            </p>
            <div className="s5-banner">
              <strong>{bannerBold}</strong> <span className="s5-brand-name">{brandName}</span>{bannerText}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_HowCapsuleDiffers, {
  sectionLabelPrefix: {
    type: ControlType.String,
    title: "Heading Prefix",
    defaultValue: "How",
  },
  sectionLabelBrand: {
    type: ControlType.String,
    title: "Heading Brand",
    defaultValue: "LLM Capsule",
  },
  sectionLabelSuffix: {
    type: ControlType.String,
    title: "Heading Suffix",
    defaultValue: "Differs",
  },
  brandName: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "LLM Capsule does not replace real data with synthetic data. It encapsulates real documents — preserving their specific content, structure, and relationships — while replacing only sensitive elements with reversible representations. AI processes real enterprise content and produces real enterprise outputs, restored through local restoration (restoration).",
    displayTextArea: true,
  },
  bannerBold: {
    type: ControlType.String,
    title: "Banner Bold",
    defaultValue: "AI results are restored locally.",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: " LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.",
    displayTextArea: true,
  },
})
