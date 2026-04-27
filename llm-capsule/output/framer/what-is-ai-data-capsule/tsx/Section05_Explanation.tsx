import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
}

interface Props {
  sectionLabel?: string
  introText?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
  bannerText?: string
}

export default function Section05_Explanation({
  sectionLabel = "Explanation",
  introText = "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
  bullet1 = "Local Encapsulation. Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.",
  bullet2 = "Protected AI Processing. The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.",
  bullet3 = "Local Restoration. AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.",
  bannerText = "Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",
}: Props) {
  const bullets = [bullet1, bullet2, bullet3]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0 48px;
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
        @container (min-width: 768px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }
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
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: pretty;
        }
        .s5-label-brand { color: ${PALETTE.brandSecondary}; }
        .s5-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-bullet-item {
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
        .s5-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s5-bullet-icon::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .s5-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          margin-top: 32px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s5-label-brand">{sectionLabel}</span></h2>
            </div>
            <p className="s5-intro">{introText}</p>
            <ul className="s5-bullet-list">
              {bullets.map((text, i) => (
                <li key={i} className="s5-bullet-item">
                  <span className="s5-bullet-icon" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="s5-banner">
              {bannerText}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_Explanation, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Explanation",
  },
  introText: {
    type: ControlType.String,
    title: "Intro Text",
    defaultValue: "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
    displayTextArea: true,
  },
  bullet1: {
    type: ControlType.String,
    title: "Bullet 1",
    defaultValue: "Local Encapsulation. Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.",
    displayTextArea: true,
  },
  bullet2: {
    type: ControlType.String,
    title: "Bullet 2",
    defaultValue: "Protected AI Processing. The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.",
    displayTextArea: true,
  },
  bullet3: {
    type: ControlType.String,
    title: "Bullet 3",
    defaultValue: "Local Restoration. AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",
    displayTextArea: true,
  },
})
