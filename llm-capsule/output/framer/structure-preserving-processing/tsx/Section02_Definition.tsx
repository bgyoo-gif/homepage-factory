import { addPropertyControls, ControlType } from "framer"

interface Props {
  bannerLabel?: string
  bannerText?: string
}

export default function Section02_Definition({
  bannerLabel = "DEFINITION",
  bannerText = "Structure-preserving processing is a data protection method that replaces sensitive elements in enterprise documents while maintaining document layout, entity relationships, table structures, cross-references, and semantic context. It ensures AI models receive structurally intact documents for accurate processing.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }

        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container s2 (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }

        @container s2 (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }

        @container s2 (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        .s2-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s2-banner__label {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9c9c9c;
          margin-bottom: 8px;
          display: block;
        }

        .s2-banner__text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-banner">
              <span className="s2-banner__label">{bannerLabel}</span>
              <p className="s2-banner__text">{bannerText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Definition, {
  bannerLabel: {
    type: ControlType.String,
    title: "Banner Label",
    defaultValue: "DEFINITION",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue:
      "Structure-preserving processing is a data protection method that replaces sensitive elements in enterprise documents while maintaining document layout, entity relationships, table structures, cross-references, and semantic context. It ensures AI models receive structurally intact documents for accurate processing.",
  },
})
