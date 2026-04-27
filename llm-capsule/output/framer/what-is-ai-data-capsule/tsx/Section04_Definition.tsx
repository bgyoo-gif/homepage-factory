import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
  // banner brand tint: rgba(24, 33, 232, 0.06)
}

interface Props {
  sectionLabel?: string
  bannerLabel?: string
  bannerText?: string
}

export default function Section04_Definition({
  sectionLabel = "Definition",
  bannerLabel = "AI Data Capsule",
  bannerText = "An AI data capsule is a locally generated AI enablement layer that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 32px 0 48px;
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
        @container (min-width: 768px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }
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
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: pretty;
        }
        .s4-label-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s4-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          margin-top: 32px;
        }
        .s4-banner-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${PALETTE.textTertiary};
          margin-bottom: 8px;
          display: block;
        }
        .s4-banner-text {
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
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s4-label-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s4-banner">
              <span className="s4-banner-label">{bannerLabel}</span>
              <p className="s4-banner-text">{bannerText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Definition, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Definition",
  },
  bannerLabel: {
    type: ControlType.String,
    title: "Banner Label",
    defaultValue: "AI Data Capsule",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "An AI data capsule is a locally generated AI enablement layer that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.",
    displayTextArea: true,
  },
})
