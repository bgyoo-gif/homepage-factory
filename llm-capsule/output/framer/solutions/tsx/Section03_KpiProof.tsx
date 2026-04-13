import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string
  kpi4Number?: string
  kpi4Label?: string
  bannerTagline?: string
  bannerNote?: string
}

export default function Section03_KpiProof({
  kpi1Number = "98.1%",
  kpi1Label = "Detection Accuracy",
  kpi2Number = "99.14%",
  kpi2Label = "Workflow Accuracy",
  kpi3Number = "100%",
  kpi3Label = "Structured PII",
  kpi4Number = "98%",
  kpi4Label = "Response Similarity",
  bannerTagline = "Enable AI. Protect data. Restore results. Track everything.",
  bannerNote = "0.12s processing per 2,200-character document",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s3-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s3;
        }
        .s3-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .s3-kpi-band {
          border-radius: 40px;
          padding: 48px 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          justify-items: center;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.webp');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .s3-kpi-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.35);
          z-index: 0;
        }
        .s3-kpi-band > * { position: relative; z-index: 1; }
        .s3-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }
        .s3-kpi-number {
          font-family: "DM Sans", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
        }
        .s3-kpi-label {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }
        .s3-banner {
          margin-top: 32px;
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(24,33,232,0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          border-radius: 0;
        }
        .s3-banner-tagline {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          margin-bottom: 8px;
        }
        .s3-banner-note {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
        }

        @container s3 (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container s3 (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-kpi-band { grid-template-columns: repeat(4, 1fr); }
          .s3-kpi-number { font-size: 50px; }
        }
        @container s3 (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>
      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-kpi-band">
              <div className="s3-kpi-item">
                <div className="s3-kpi-number">{kpi1Number}</div>
                <div className="s3-kpi-label">{kpi1Label}</div>
              </div>
              <div className="s3-kpi-item">
                <div className="s3-kpi-number">{kpi2Number}</div>
                <div className="s3-kpi-label">{kpi2Label}</div>
              </div>
              <div className="s3-kpi-item">
                <div className="s3-kpi-number">{kpi3Number}</div>
                <div className="s3-kpi-label">{kpi3Label}</div>
              </div>
              <div className="s3-kpi-item">
                <div className="s3-kpi-number">{kpi4Number}</div>
                <div className="s3-kpi-label">{kpi4Label}</div>
              </div>
            </div>

            <div className="s3-banner">
              <div className="s3-banner-tagline">{bannerTagline}</div>
              <div className="s3-banner-note">{bannerNote}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_KpiProof, {
  kpi1Number: { type: ControlType.String, title: "KPI 1 Number", defaultValue: "98.1%" },
  kpi1Label: { type: ControlType.String, title: "KPI 1 Label", defaultValue: "Detection Accuracy" },
  kpi2Number: { type: ControlType.String, title: "KPI 2 Number", defaultValue: "99.14%" },
  kpi2Label: { type: ControlType.String, title: "KPI 2 Label", defaultValue: "Workflow Accuracy" },
  kpi3Number: { type: ControlType.String, title: "KPI 3 Number", defaultValue: "100%" },
  kpi3Label: { type: ControlType.String, title: "KPI 3 Label", defaultValue: "Structured PII" },
  kpi4Number: { type: ControlType.String, title: "KPI 4 Number", defaultValue: "98%" },
  kpi4Label: { type: ControlType.String, title: "KPI 4 Label", defaultValue: "Response Similarity" },
  bannerTagline: {
    type: ControlType.String,
    title: "Banner Tagline",
    defaultValue: "Enable AI. Protect data. Restore results. Track everything.",
  },
  bannerNote: {
    type: ControlType.String,
    title: "Banner Note",
    defaultValue: "0.12s processing per 2,200-character document",
  },
})
