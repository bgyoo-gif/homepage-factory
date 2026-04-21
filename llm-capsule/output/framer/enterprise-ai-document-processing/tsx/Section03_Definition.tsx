import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionLabel?: string
  bannerLabel?: string
  bannerText?: string
}

export default function Section03_Definition({
  sectionLabel = "Definition",
  bannerLabel = "Enterprise AI Document Processing",
  bannerText = "Enterprise AI document processing uses large language models to summarize, extract, classify, and translate enterprise documents while protecting sensitive data through local encapsulation and restoring usable outputs through local restoration. It applies structure-preserving processing to maintain document integrity during protection.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
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
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s3-brand { color: #5690D4; }

        .s3-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(24, 33, 232, 0.06);
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          text-align: left;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-banner__label {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9c9c9c;
          margin-bottom: 8px;
          display: block;
        }
        .s3-banner p {
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s3-section" id="section-4">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s3-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s3-banner">
              <span className="s3-banner__label">{bannerLabel}</span>
              <p>{bannerText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Definition, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Definition" },
  bannerLabel: { type: ControlType.String, title: "Banner Label", defaultValue: "Enterprise AI Document Processing" },
  bannerText: { type: ControlType.String, title: "Banner Text", defaultValue: "Enterprise AI document processing uses large language models to summarize, extract, classify, and translate enterprise documents while protecting sensitive data through local encapsulation and restoring usable outputs through local restoration. It applies structure-preserving processing to maintain document integrity during protection." },
})
