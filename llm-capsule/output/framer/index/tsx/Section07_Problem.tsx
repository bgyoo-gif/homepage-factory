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
  bullet1?: string
  bullet2?: string
  bullet3?: string
  tableHead1?: string
  tableHead2?: string
  tableHead3?: string
  tableHead4?: string
  tableRow1Col1?: string
  tableRow1Col2?: string
  tableRow1Col3?: string
  tableRow1Col4?: string
  tableRow2Col1?: string
  tableRow2Col2?: string
  tableRow2Col3?: string
  tableRow2Col4?: string
  tableRow3Col1?: string
  tableRow3Col2?: string
  tableRow3Col3?: string
  tableRow3Col4?: string
  tableRow4Col1?: string
  tableRow4Col2?: string
  tableRow4Col3?: string
  tableRow4Col4?: string
  bannerText?: string
  bannerBtnLabel?: string
  perfBannerBgImage?: string
}

export default function Section07_Problem({
  probHeading = "Enterprise data is never AI-ready by default",
  probSubheading = "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.",
  bullet1 = "Organizations cannot leverage AI capabilities without first making their data AI-ready.",
  bullet2 = "Traditional approaches — masking, redaction, tokenization, and prompt security gateways — were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end.",
  bullet3 = "These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value.",
  tableHead1 = "Approach",
  tableHead2 = "Method",
  tableHead3 = "Limitation",
  tableHead4 = "AI Workflow Impact",
  tableRow1Col1 = "Masking & Redaction",
  tableRow1Col2 = "Permanently removes data",
  tableRow1Col3 = "Destroys context AI needs",
  tableRow1Col4 = "Unusable [REDACTED] outputs requiring manual reconstruction",
  tableRow2Col1 = "Prompt Security Gateways",
  tableRow2Col2 = "API-level prompt filtering",
  tableRow2Col3 = "No document-level protection",
  tableRow2Col4 = "No output restoration capability",
  tableRow3Col1 = "Synthetic Data Platforms",
  tableRow3Col2 = "Artificial data generation",
  tableRow3Col3 = "Training/testing only",
  tableRow3Col4 = "Cannot replace real documents in live AI workflows",
  tableRow4Col1 = "Security Team Blocks AI",
  tableRow4Col2 = "Manual approval gate",
  tableRow4Col3 = "Blocks all AI projects",
  tableRow4Col4 = "Projects never demonstrate value before being cancelled",
  bannerText = "LLM Capsule sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs — not at the model layer, not at the prompt layer, but at the data layer where it matters.",
  bannerBtnLabel = "See how it works",
  perfBannerBgImage = "",
}: Props) {
  const DEFAULT_BANNER_BG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-lavender.png"
  const resolvedBannerBg = perfBannerBgImage || DEFAULT_BANNER_BG

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

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

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
        @container (min-width: 1024px) { .idx-section-body { max-width: 860px; } }
        @container (min-width: 1440px) { .idx-section-body { max-width: 1080px; } }

        .idx-bullet-list {
          list-style: none; padding: 0; margin: 0 0 32px;
          display: flex; flex-direction: column; gap: 16px;
          max-width: 100%;
        }
        @container (min-width: 1024px) { .idx-bullet-list { max-width: 860px; } }
        @container (min-width: 1440px) { .idx-bullet-list { max-width: 1080px; } }
        .idx-bullet-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 16px; color: ${P.textSecondary}; line-height: 1.7;
        }
        .idx-bullet-dot {
          flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%;
          background-color: ${P.brandSecondary}; margin-top: 10px;
        }

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
        @container (max-width: 767px) {
          .idx-banner-full { background-image: none !important; padding: 32px 16px; border-radius: 16px; }
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-7" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title" style={{ wordBreak: "keep-all" }}>{probHeading}</h2>
                <p className="idx-section-header__desc">{probSubheading}</p>
              </div>

              <ul className="idx-bullet-list">
                <li className="idx-bullet-item">
                  <span className="idx-bullet-dot"></span>
                  <span>{bullet1}</span>
                </li>
                <li className="idx-bullet-item">
                  <span className="idx-bullet-dot"></span>
                  <span>{bullet2}</span>
                </li>
                <li className="idx-bullet-item">
                  <span className="idx-bullet-dot"></span>
                  <span>{bullet3}</span>
                </li>
              </ul>

              <div className="idx-table-wrap">
                <table className="idx-table">
                  <thead>
                    <tr>
                      <th>{tableHead1}</th>
                      <th>{tableHead2}</th>
                      <th>{tableHead3}</th>
                      <th>{tableHead4}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{tableRow1Col1}</td>
                      <td>{tableRow1Col2}</td>
                      <td>{tableRow1Col3}</td>
                      <td>{tableRow1Col4}</td>
                    </tr>
                    <tr>
                      <td>{tableRow2Col1}</td>
                      <td>{tableRow2Col2}</td>
                      <td>{tableRow2Col3}</td>
                      <td>{tableRow2Col4}</td>
                    </tr>
                    <tr>
                      <td>{tableRow3Col1}</td>
                      <td>{tableRow3Col2}</td>
                      <td>{tableRow3Col3}</td>
                      <td>{tableRow3Col4}</td>
                    </tr>
                    <tr>
                      <td>{tableRow4Col1}</td>
                      <td>{tableRow4Col2}</td>
                      <td>{tableRow4Col3}</td>
                      <td>{tableRow4Col4}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: `url('${resolvedBannerBg}')` }}>
                <p>{bannerText}</p>
                <div className="idx-banner-full__actions">
                  <a href="/architecture" className="idx-btn idx-btn--secondary idx-btn--sm">{bannerBtnLabel}</a>
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
  bullet1:           { type: ControlType.String, title: "Bullet 1",          defaultValue: "Organizations cannot leverage AI capabilities without first making their data AI-ready.", displayTextArea: true },
  bullet2:           { type: ControlType.String, title: "Bullet 2",          defaultValue: "Traditional approaches — masking, redaction, tokenization, and prompt security gateways — were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end.", displayTextArea: true },
  bullet3:           { type: ControlType.String, title: "Bullet 3",          defaultValue: "These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value.", displayTextArea: true },
  tableHead1:        { type: ControlType.String, title: "Table Head 1",      defaultValue: "Approach" },
  tableHead2:        { type: ControlType.String, title: "Table Head 2",      defaultValue: "Method" },
  tableHead3:        { type: ControlType.String, title: "Table Head 3",      defaultValue: "Limitation" },
  tableHead4:        { type: ControlType.String, title: "Table Head 4",      defaultValue: "AI Workflow Impact" },
  tableRow1Col1:     { type: ControlType.String, title: "Row 1 Col 1",       defaultValue: "Masking & Redaction" },
  tableRow1Col2:     { type: ControlType.String, title: "Row 1 Col 2",       defaultValue: "Permanently removes data" },
  tableRow1Col3:     { type: ControlType.String, title: "Row 1 Col 3",       defaultValue: "Destroys context AI needs" },
  tableRow1Col4:     { type: ControlType.String, title: "Row 1 Col 4",       defaultValue: "Unusable [REDACTED] outputs requiring manual reconstruction", displayTextArea: true },
  tableRow2Col1:     { type: ControlType.String, title: "Row 2 Col 1",       defaultValue: "Prompt Security Gateways" },
  tableRow2Col2:     { type: ControlType.String, title: "Row 2 Col 2",       defaultValue: "API-level prompt filtering" },
  tableRow2Col3:     { type: ControlType.String, title: "Row 2 Col 3",       defaultValue: "No document-level protection" },
  tableRow2Col4:     { type: ControlType.String, title: "Row 2 Col 4",       defaultValue: "No output restoration capability" },
  tableRow3Col1:     { type: ControlType.String, title: "Row 3 Col 1",       defaultValue: "Synthetic Data Platforms" },
  tableRow3Col2:     { type: ControlType.String, title: "Row 3 Col 2",       defaultValue: "Artificial data generation" },
  tableRow3Col3:     { type: ControlType.String, title: "Row 3 Col 3",       defaultValue: "Training/testing only" },
  tableRow3Col4:     { type: ControlType.String, title: "Row 3 Col 4",       defaultValue: "Cannot replace real documents in live AI workflows" },
  tableRow4Col1:     { type: ControlType.String, title: "Row 4 Col 1",       defaultValue: "Security Team Blocks AI" },
  tableRow4Col2:     { type: ControlType.String, title: "Row 4 Col 2",       defaultValue: "Manual approval gate" },
  tableRow4Col3:     { type: ControlType.String, title: "Row 4 Col 3",       defaultValue: "Blocks all AI projects" },
  tableRow4Col4:     { type: ControlType.String, title: "Row 4 Col 4",       defaultValue: "Projects never demonstrate value before being cancelled", displayTextArea: true },
  bannerText:        { type: ControlType.String, title: "Banner Text",        defaultValue: "LLM Capsule sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs — not at the model layer, not at the prompt layer, but at the data layer where it matters.", displayTextArea: true },
  bannerBtnLabel:    { type: ControlType.String, title: "Banner Button",      defaultValue: "See how it works" },
  perfBannerBgImage: { type: ControlType.Image,  title: "Banner BG Image" },
})
