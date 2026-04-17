import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  probHeading?: string
  probSubheading?: string
  perfBannerBgImage?: string
}

export default function Section07_Problem({
  probHeading = "Enterprise data is never AI-ready by default",
  probSubheading = "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.",
  perfBannerBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-lavender.png",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

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
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        .idx-inner { width: 100%; container-type: inline-size; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
        .idx-root .idx-btn--primary { background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%); color: ${P.white}; }
        .idx-root .idx-btn--primary:hover { opacity: 0.88; }
        .idx-root .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-root .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

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

        .idx-section-body {
          color: ${P.textSecondary}; font-size: 16px; font-weight: 500;
          line-height: 1.7; max-width: 100%; margin-bottom: 24px;
        }
        @container (min-width: 1024px) { .idx-section-body { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-body { max-width: 1080px; } }
        .idx-section-body--center { margin-left: auto; margin-right: auto; text-align: center; }

        .idx-table-wrap { overflow-x: auto; border-radius: 24px; border: 1px solid ${P.borderDefault}; }
        .idx-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .idx-table thead th {
          font-family: "Fragment Mono", monospace; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${P.textPrimary}; font-weight: 600;
          padding: 12px 16px; border-bottom: 2px solid ${P.borderDefault};
          text-align: left; background-color: ${P.surfaceLight};
        }
        .idx-table tbody td {
          padding: 14px 16px; border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textPrimary}; vertical-align: top; line-height: 1.5;
        }
        .idx-table tbody tr:last-child td { border-bottom: none; }
        .idx-table tbody td:first-child { font-weight: 600; }

        .idx-spaced-top { margin-top: 24px; }

        .idx-banner-full {
          padding: 48px 24px; text-align: center; border-radius: 40px;
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-banner-full::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-banner-full > * { position: relative; z-index: 1; }
        .idx-banner-full p {
          font-size: 16px; color: ${P.textPrimary}; line-height: 1.7;
          max-width: 1080px; margin: 0 auto;
        }
        .idx-banner-full__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px;
        }
        @container (max-width: 767px) { .idx-banner-full { background-image: none !important; } }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-7" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Enterprise data is <span className="idx-brand">never AI-ready</span> by default
                </h2>
                <p className="idx-section-header__desc">Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.</p>
              </div>

              <div className="idx-section-body idx-section-body--center">
                <p>Organizations cannot leverage AI capabilities without first making their data AI-ready.</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>Traditional approaches — masking, redaction, tokenization, and prompt security gateways — were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end. The result is either blocked AI projects or degraded outputs that require extensive manual reconstruction.</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value.</p>
              </div>

              <div className="idx-table-wrap">
                <table className="idx-table">
                  <thead>
                    <tr>
                      <th>Approach</th>
                      <th>Method</th>
                      <th>Limitation</th>
                      <th>AI Workflow Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Masking &amp; Redaction</td>
                      <td>Permanently removes data</td>
                      <td>Destroys context AI needs</td>
                      <td>Unusable [REDACTED] outputs requiring manual reconstruction</td>
                    </tr>
                    <tr>
                      <td>Prompt Security Gateways</td>
                      <td>API-level prompt filtering</td>
                      <td>No document-level protection</td>
                      <td>No output restoration capability</td>
                    </tr>
                    <tr>
                      <td>Synthetic Data Platforms</td>
                      <td>Artificial data generation</td>
                      <td>Training/testing only</td>
                      <td>Cannot replace real documents in live AI workflows</td>
                    </tr>
                    <tr>
                      <td>Security Team Blocks AI</td>
                      <td>Manual approval gate</td>
                      <td>Blocks all AI projects</td>
                      <td>Projects never demonstrate value before being cancelled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: `url('${perfBannerBgImage}')` }}>
                <p><span className="idx-product">LLM Capsule</span> sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs — not at the model layer, not at the prompt layer, but at the data layer where it matters.</p>
                <div className="idx-banner-full__actions">
                  <a href="/architecture" className="idx-btn idx-btn--secondary idx-btn--sm">See how it works</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section07_Problem, {
  probHeading:       { type: ControlType.String, title: "Problem Heading",    defaultValue: "Enterprise data is never AI-ready by default", displayTextArea: true },
  probSubheading:    { type: ControlType.String, title: "Problem Subheading", defaultValue: "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.", displayTextArea: true },
  perfBannerBgImage: { type: ControlType.Image,  title: "Banner BG Image" },
})
