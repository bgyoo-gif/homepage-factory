import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  white:        "#ffffff",
  surfaceWhite: "#ffffff",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayDarkMedium: "rgba(0,0,0,0.35)",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string
  kpi4Number?: string
  kpi4Label?: string
}

export default function Section07_KPIBand({
  kpi1Number = "3+2",
  kpi1Label  = "Core Architecture",
  kpi2Number = "Zero",
  kpi2Label  = "Raw Data Exposure",
  kpi3Number = "100%",
  kpi3Label  = "Local Restoration",
  kpi4Number = "Any",
  kpi4Label  = "LLM Model Support",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s7-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s7-inner { width: 100%; container-type: inline-size; }
        .s7-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s7-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s7-container { padding: 0 120px; max-width: 1440px; } }

        .s7-kpi-band {
          border-radius: 40px;
          padding: 48px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          justify-items: center;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/images/bg-gradient-navy-teal.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .s7-kpi-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkMedium};
          z-index: 0;
        }
        .s7-kpi-band > * { position: relative; z-index: 1; }
        @container (max-width: 1023px) {
          .s7-kpi-band { grid-template-columns: repeat(2, 1fr); }
        }
        @container (max-width: 767px) {
          .s7-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; background-image: none; }
        }

        .s7-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }
        .s7-kpi-number {
          font-family: "DM Sans", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: ${PALETTE.white};
        }
        .s7-kpi-label {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.5;
        }
      `}</style>
      <section className="s7-section" id="section-kpi">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-kpi-band">
              <div className="s7-kpi-item">
                <span className="s7-kpi-number">{kpi1Number}</span>
                <span className="s7-kpi-label">{kpi1Label}</span>
              </div>
              <div className="s7-kpi-item">
                <span className="s7-kpi-number">{kpi2Number}</span>
                <span className="s7-kpi-label">{kpi2Label}</span>
              </div>
              <div className="s7-kpi-item">
                <span className="s7-kpi-number">{kpi3Number}</span>
                <span className="s7-kpi-label">{kpi3Label}</span>
              </div>
              <div className="s7-kpi-item">
                <span className="s7-kpi-number">{kpi4Number}</span>
                <span className="s7-kpi-label">{kpi4Label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_KPIBand, {
  kpi1Number: { type: ControlType.String, title: "KPI 1 Number", defaultValue: "3+2" },
  kpi1Label:  { type: ControlType.String, title: "KPI 1 Label",  defaultValue: "Core Architecture" },
  kpi2Number: { type: ControlType.String, title: "KPI 2 Number", defaultValue: "Zero" },
  kpi2Label:  { type: ControlType.String, title: "KPI 2 Label",  defaultValue: "Raw Data Exposure" },
  kpi3Number: { type: ControlType.String, title: "KPI 3 Number", defaultValue: "100%" },
  kpi3Label:  { type: ControlType.String, title: "KPI 3 Label",  defaultValue: "Local Restoration" },
  kpi4Number: { type: ControlType.String, title: "KPI 4 Number", defaultValue: "Any" },
  kpi4Label:  { type: ControlType.String, title: "KPI 4 Label",  defaultValue: "LLM Model Support" },
})
