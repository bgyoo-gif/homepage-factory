import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
}

interface Props {
  perfHeading?: string
  perfSubheading?: string
  perfKpiBgImage?: string
  perfBannerBgImage?: string
  perf1Number?: string
  perf1Label?: string
  perf2Number?: string
  perf2Label?: string
  perf3Number?: string
  perf3Label?: string
  perf4Number?: string
  perf4Label?: string
}

export default function Section10_Performance({
  perfHeading = "Measured performance on real enterprise document processing workloads",
  perfSubheading = "These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments.",
  perfKpiBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png",
  perfBannerBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-wave-teal.png",
  perf1Number = "98.1%",
  perf1Label = "Detection Accuracy",
  perf2Number = "99.14%",
  perf2Label = "Workflow Accuracy",
  perf3Number = "100%",
  perf3Label = "Structured PII",
  perf4Number = "98%",
  perf4Label = "Response Similarity",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root p { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h2 { text-wrap: balance; }

        .idx-inner { width: 100%; container-type: inline-size; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }

        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }
        .idx-section-header__desc {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .idx-section-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-header__desc { max-width: 1080px; } }

        .idx-kpi-band {
          border-radius: 40px; padding: 48px 40px;
          display: grid; gap: 32px;
          justify-items: center; margin: 32px 0;
          background: ${P.gradientBrand};
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-kpi-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.35); z-index: 0;
        }
        .idx-kpi-band > * { position: relative; z-index: 1; }
        .idx-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
        .idx-kpi-band__number {
          font-family: "DM Sans", sans-serif; font-size: 50px;
          font-weight: 700; line-height: 1; color: ${P.white};
        }
        .idx-kpi-band__label { font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.5; }
        .idx-kpi-band--4col { grid-template-columns: repeat(4, 1fr); }
        @container (max-width: 1023px) { .idx-kpi-band--4col { grid-template-columns: repeat(2, 1fr); } }
        @container (max-width: 767px)  { .idx-kpi-band--4col { grid-template-columns: 1fr; padding: 32px 20px; background-image: none; } }

        .idx-perf-banner {
          margin-top: 32px; padding: 32px 24px; text-align: center;
          border-radius: 40px;
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-perf-banner::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-perf-banner > * { position: relative; z-index: 1; }
        .idx-perf-banner p { font-size: 16px; color: ${P.textPrimary}; line-height: 1.7; max-width: 1080px; margin: 0 auto; }
        .idx-perf-banner .idx-caption { font-size: 12px; color: ${P.textSecondary}; margin-top: 8px; display: block; }
        @container (max-width: 767px) { .idx-perf-banner { background-image: none; } }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-10" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  <span className="idx-brand">Measured performance</span> on real enterprise document processing workloads
                </h2>
                <p className="idx-section-header__desc">These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments.</p>
              </div>

              <div
                className="idx-kpi-band idx-kpi-band--4col"
                style={{
                  backgroundImage: `url('${perfKpiBgImage}')`,
                }}
                aria-label="Performance metrics"
              >
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf1Number}</span>
                  <span className="idx-kpi-band__label">{perf1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf2Number}</span>
                  <span className="idx-kpi-band__label">{perf2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf3Number}</span>
                  <span className="idx-kpi-band__label">{perf3Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf4Number}</span>
                  <span className="idx-kpi-band__label">{perf4Label}</span>
                </div>
              </div>

              <div className="idx-perf-banner" style={{ backgroundImage: `url('${perfBannerBgImage}')` }}>
                <p>Enable AI. Protect data. Restore results. Track everything.</p>
                <span className="idx-caption">0.12s processing per 2,200-character document. Tested across finance, healthcare, legal, and public sector workflows</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section10_Performance, {
  perf1Number:      { type: ControlType.String, title: "Perf 1 Number",    defaultValue: "98.1%" },
  perf1Label:       { type: ControlType.String, title: "Perf 1 Label",     defaultValue: "Detection Accuracy" },
  perf2Number:      { type: ControlType.String, title: "Perf 2 Number",    defaultValue: "99.14%" },
  perf2Label:       { type: ControlType.String, title: "Perf 2 Label",     defaultValue: "Workflow Accuracy" },
  perf3Number:      { type: ControlType.String, title: "Perf 3 Number",    defaultValue: "100%" },
  perf3Label:       { type: ControlType.String, title: "Perf 3 Label",     defaultValue: "Structured PII" },
  perf4Number:      { type: ControlType.String, title: "Perf 4 Number",    defaultValue: "98%" },
  perf4Label:       { type: ControlType.String, title: "Perf 4 Label",     defaultValue: "Response Similarity" },
  perfKpiBgImage:   { type: ControlType.Image,  title: "Performance KPI BG Image" },
  perfBannerBgImage: { type: ControlType.Image, title: "Performance Banner BG Image" },
})
