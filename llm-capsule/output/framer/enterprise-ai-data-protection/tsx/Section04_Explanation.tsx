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
  introText?: string
  productName?: string
  core1Label?: string
  core1Text?: string
  core2Label?: string
  core2Text?: string
  core3Label?: string
  core3Text?: string
  ext1Label?: string
  ext1Text?: string
  ext2Label?: string
  ext2Text?: string
  bannerText?: string
}

export default function Section04_Explanation({
  sectionLabel = "Explanation",
  introText = " enables enterprise AI adoption through a 3+2 architecture — three core capabilities and two extended capabilities:",
  productName = "LLM Capsule",
  core1Label = "Core 1: Zero Exposure.",
  core1Text = "Original sensitive data never leaves the enterprise environment. Only encapsulated representations cross the trust boundary to AI services. The AI provider processes useful data but cannot reconstruct original sensitive values.",
  core2Label = "Core 2: Restoration.",
  core2Text = "AI results are automatically restored locally with original enterprise data. The mapping between encapsulated and original values is stored locally and applied to AI outputs within the enterprise environment. This produces enterprise-ready results without manual reconstruction.",
  core3Label = "Core 3: Enterprise Context.",
  core3Text = "Sensitive elements are identified using context-aware data control and replaced with structure-preserving representations. Unlike masking, encapsulation is reversible and policy-driven — what counts as sensitive is configurable per department, document type, and workflow.",
  ext1Label = "+1: Structure-Preserving.",
  ext1Text = "Document layout, entity relationships, and semantic context are maintained during encapsulation. AI models receive structurally intact documents, producing high-quality outputs.",
  ext2Label = "+2: Cross-Model Execution.",
  ext2Text = "Because protection operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API — without model-specific integration.",
  bannerText = " is an AI enablement data layer and plugin. It enables AI adoption by protecting data at the data layer — not by blocking AI, but by making AI safe to use on real enterprise data.",
}: Props) {
  const bullets = [
    { label: core1Label, text: core1Text },
    { label: core2Label, text: core2Text },
    { label: core3Label, text: core3Text },
    { label: ext1Label,  text: ext1Text },
    { label: ext2Label,  text: ext2Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

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
        .s4-brand-text { color: ${PALETTE.brandSecondary}; }
        .s4-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s4-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
        }
        .s4-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet-icon::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .s4-banner {
          margin-top: 24px;
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
        }
        .s4-banner p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 22px; }
          .s4-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-header h2 { font-size: 28px; }
          .s4-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s4-section" id="section-5">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s4-brand-text">{sectionLabel}</span></h2>
            </div>
            <p className="s4-intro">
              <span className="s4-product-name">{productName}</span>{introText}
            </p>
            <ul className="s4-bullet-list">
              {bullets.map((b, i) => (
                <li key={i} className="s4-bullet-item">
                  <span className="s4-bullet-icon" />
                  <span><strong>{b.label}</strong> {b.text}</span>
                </li>
              ))}
            </ul>
            <div className="s4-banner">
              <p>
                <strong><span className="s4-product-name">{productName}</span></strong>
                {bannerText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Explanation, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Explanation" },
  introText: {
    type: ControlType.String, title: "Intro Text (after product name)",
    defaultValue: " enables enterprise AI adoption through a 3+2 architecture — three core capabilities and two extended capabilities:",
    displayTextArea: true,
  },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  core1Label: { type: ControlType.String, title: "Core 1 Label", defaultValue: "Core 1: Zero Exposure." },
  core1Text: {
    type: ControlType.String, title: "Core 1 Text",
    defaultValue: "Original sensitive data never leaves the enterprise environment. Only encapsulated representations cross the trust boundary to AI services. The AI provider processes useful data but cannot reconstruct original sensitive values.",
    displayTextArea: true,
  },
  core2Label: { type: ControlType.String, title: "Core 2 Label", defaultValue: "Core 2: Restoration." },
  core2Text: {
    type: ControlType.String, title: "Core 2 Text",
    defaultValue: "AI results are automatically restored locally with original enterprise data. The mapping between encapsulated and original values is stored locally and applied to AI outputs within the enterprise environment. This produces enterprise-ready results without manual reconstruction.",
    displayTextArea: true,
  },
  core3Label: { type: ControlType.String, title: "Core 3 Label", defaultValue: "Core 3: Enterprise Context." },
  core3Text: {
    type: ControlType.String, title: "Core 3 Text",
    defaultValue: "Sensitive elements are identified using context-aware data control and replaced with structure-preserving representations. Unlike masking, encapsulation is reversible and policy-driven — what counts as sensitive is configurable per department, document type, and workflow.",
    displayTextArea: true,
  },
  ext1Label: { type: ControlType.String, title: "Ext 1 Label", defaultValue: "+1: Structure-Preserving." },
  ext1Text: {
    type: ControlType.String, title: "Ext 1 Text",
    defaultValue: "Document layout, entity relationships, and semantic context are maintained during encapsulation. AI models receive structurally intact documents, producing high-quality outputs.",
    displayTextArea: true,
  },
  ext2Label: { type: ControlType.String, title: "Ext 2 Label", defaultValue: "+2: Cross-Model Execution." },
  ext2Text: {
    type: ControlType.String, title: "Ext 2 Text",
    defaultValue: "Because protection operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API — without model-specific integration.",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String, title: "Banner Text (after product name)",
    defaultValue: " is an AI enablement data layer and plugin. It enables AI adoption by protecting data at the data layer — not by blocking AI, but by making AI safe to use on real enterprise data.",
    displayTextArea: true,
  },
})
