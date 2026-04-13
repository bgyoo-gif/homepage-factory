import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  success:        "#0e824c",
}

interface BulletItem {
  label: string
  body: string
}

interface Props {
  sectionLabel?: string
  intro?: string
  bullets?: BulletItem[]
  bannerText?: string
  bannerProductName?: string
}

const defaultBullets: BulletItem[] = [
  {
    label: "Pre-transmission protection.",
    body: "All sensitive data is encapsulated within the enterprise environment before reaching any AI service. This is not a filter applied at the API gateway — it is a transformation applied to the data itself through context-aware data control.",
  },
  {
    label: "Structure preservation.",
    body: "Protected data must retain its document structure, entity relationships, and semantic context. AI models process structure-preserving representations that enable accurate summarization, extraction, and analysis.",
  },
  {
    label: "Model independence.",
    body: "The AI enablement layer must work with any LLM provider. Enterprises should not be locked into a single AI vendor to maintain AI data pipeline protection.",
  },
  {
    label: "Output Restoration.",
    body: "AI results are restored locally. Enterprise AI workflows produce enterprise-ready outputs — with real names, real figures, real references — without requiring manual post-processing.",
  },
]

export default function Section03_Explanation({
  sectionLabel = "Explanation",
  intro = "A secure enterprise AI workflow has four properties:",
  bullets = defaultBullets,
  bannerText = "Enterprise AI enablement requires an AI-ready data layer, not model-layer security.",
  bannerProductName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          background-color: ${PALETTE.surfaceWhite};
          padding: 32px 0;
          box-sizing: border-box;
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
          margin: 0;
          text-wrap: balance;
        }
        .s3-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s3-product-text {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s3-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s3-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .s3-bullet-icon::before {
          content: "•";
        }
        .s3-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
          .s3-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
          .s3-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0; max-width: 1080px; }
          .s3-section-header h2 { font-size: 28px; }
          .s3-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2><span className="s3-brand-text">{sectionLabel}</span></h2>
            </div>
            <p className="s3-intro">{intro}</p>
            <ul className="s3-bullet-list">
              {bullets.map((item, i) => (
                <li key={i} className="s3-bullet-item">
                  <span className="s3-bullet-icon" aria-hidden="true" />
                  <span><strong>{item.label}</strong> {item.body}</span>
                </li>
              ))}
            </ul>
            <div className="s3-banner">
              <strong>Enterprise AI enablement</strong> requires an AI-ready data layer, not model-layer security. <span className="s3-product-text">{bannerProductName}</span> operates before data leaves and after results return — enabling AI adoption while protecting data.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Explanation",
  },
  intro: {
    type: ControlType.String,
    title: "Intro",
    defaultValue: "A secure enterprise AI workflow has four properties:",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Enterprise AI enablement requires an AI-ready data layer, not model-layer security.",
    displayTextArea: true,
  },
  bannerProductName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
