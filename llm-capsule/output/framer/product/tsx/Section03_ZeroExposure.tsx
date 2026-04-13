import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  success:        "#0e824c",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  screenshotDesc?: string
  lead?: string
  body1?: string
  body2?: string
  check1Title?: string
  check1Body?: string
  check2Title?: string
  check2Body?: string
  check3Title?: string
  check3Body?: string
  check4Title?: string
  check4Body?: string
}

export default function Section03_ZeroExposure({
  sectionTitle = "Encapsulate before outbound — raw data never",
  sectionTitleBrand = "leaves",
  sectionDescription = "LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment.",
  screenshotDesc = "Document Encapsulation — Before and after view of a contract with sensitive data replaced by tokens",
  lead = "LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment. Only the protected capsule is sent for AI processing. This is local encapsulation at the data layer — fundamentally different from API-level filtering or prompt scanning.",
  body1 = "Most enterprise AI risk starts when raw business data is exposed outside the controlled environment. With LLM Capsule, sensitive content is transformed locally through protected outbound flow so external models never receive the raw original data. This enables secure enterprise AI workflows where the enterprise maintains complete data sovereignty.",
  body2 = "The mapping between original and encapsulated values is stored entirely within the enterprise environment and never transmitted. Even in the event of a breach at the AI provider, no original enterprise data would be exposed because it was never transmitted.",
  check1Title = "Local real-time encapsulation",
  check1Body = "Raw data stays inside the enterprise environment. Sensitive elements are detected and replaced before any outbound transmission.",
  check2Title = "Protected outbound flow",
  check2Body = "Only encapsulated representations cross the trust boundary. The AI provider processes useful but opaque data.",
  check3Title = "Environment-bound processing",
  check3Body = "Supports controlled enterprise and regulated environments including on-premise, air-gapped, and VPC deployments.",
  check4Title = "Audit trail",
  check4Body = "Every encapsulation event is logged with full traceability for enterprise AI governance and compliance reporting.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s3-inner { width: 100%; container-type: inline-size; }
        .s3-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }

        .s3-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s3-header { text-align: left; } }
        .s3-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s3-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s3-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s3-header__title { font-size: 28px; } }
        .s3-header__brand { color: ${PALETTE.brandSecondary}; }
        .s3-header__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s3-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s3-header__desc { max-width: 1080px; } }

        /* Product Split */
        .s3-split {
          display: grid;
          grid-template-columns: 4fr 6fr;
          gap: 64px;
          align-items: stretch;
        }
        @container (max-width: 1023px) {
          .s3-split { grid-template-columns: 1fr; gap: 32px; }
        }

        .s3-visual {
          border-radius: 40px;
          overflow: hidden;
          background-color: ${PALETTE.surfaceLight};
          background-image: url('${IMAGE_BASE}/images/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
          padding: 24px 24px 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          min-height: 320px;
        }
        @container (max-width: 767px) { .s3-visual { background-image: none; } }

        .s3-visual-placeholder {
          flex: 1;
          min-height: 200px;
          background-color: rgba(255,255,255,0.15);
          border: 2px dashed rgba(255,255,255,0.4);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
          text-align: center;
        }
        .s3-visual-placeholder svg {
          width: 32px;
          height: 32px;
          stroke: rgba(255,255,255,0.6);
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s3-visual-placeholder-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .s3-visual-placeholder-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.55);
        }

        .s3-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .s3-lead {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-body {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Checklist */
        .s3-checklist {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s3-check-item {
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
        .s3-check-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s3-check-icon::before {
          content: "✓";
          color: ${PALETTE.success};
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
        .s3-check-content strong {
          font-weight: 600;
          color: ${PALETTE.textPrimary};
        }
      `}</style>
      <section className="s3-section" id="section-3">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-header">
              <h2 className="s3-header__title">
                {sectionTitle} <span className="s3-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s3-header__desc">{sectionDescription}</p>
            </div>

            <div className="s3-split">
              {/* Visual */}
              <div className="s3-visual">
                <div className="s3-visual-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="s3-visual-placeholder-label">Product Screenshot</span>
                  <span className="s3-visual-placeholder-desc">{screenshotDesc}</span>
                </div>
              </div>

              {/* Content */}
              <div className="s3-content">
                <p className="s3-lead">{lead}</p>
                <p className="s3-body">{body1}</p>
                <p className="s3-body">{body2}</p>
                <ul className="s3-checklist">
                  <li className="s3-check-item">
                    <span className="s3-check-icon"></span>
                    <span className="s3-check-content"><strong>{check1Title}</strong> — {check1Body}</span>
                  </li>
                  <li className="s3-check-item">
                    <span className="s3-check-icon"></span>
                    <span className="s3-check-content"><strong>{check2Title}</strong> — {check2Body}</span>
                  </li>
                  <li className="s3-check-item">
                    <span className="s3-check-icon"></span>
                    <span className="s3-check-content"><strong>{check3Title}</strong> — {check3Body}</span>
                  </li>
                  <li className="s3-check-item">
                    <span className="s3-check-icon"></span>
                    <span className="s3-check-content"><strong>{check4Title}</strong> — {check4Body}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_ZeroExposure, {
  sectionTitle:       { type: ControlType.String, title: "Title",            defaultValue: "Encapsulate before outbound — raw data never" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)",    defaultValue: "leaves" },
  sectionDescription: { type: ControlType.String, title: "Description",      defaultValue: "LLM Capsule encapsulates sensitive entities locally…" },
  screenshotDesc:     { type: ControlType.String, title: "Screenshot desc",  defaultValue: "Document Encapsulation — Before and after view…" },
  lead:               { type: ControlType.String, title: "Lead",             defaultValue: "LLM Capsule encapsulates sensitive entities locally…" },
  body1:              { type: ControlType.String, title: "Body 1",           defaultValue: "Most enterprise AI risk starts…" },
  body2:              { type: ControlType.String, title: "Body 2",           defaultValue: "The mapping between original and encapsulated…" },
  check1Title:        { type: ControlType.String, title: "Check 1 Title",    defaultValue: "Local real-time encapsulation" },
  check1Body:         { type: ControlType.String, title: "Check 1 Body",     defaultValue: "Raw data stays inside the enterprise environment…" },
  check2Title:        { type: ControlType.String, title: "Check 2 Title",    defaultValue: "Protected outbound flow" },
  check2Body:         { type: ControlType.String, title: "Check 2 Body",     defaultValue: "Only encapsulated representations cross the trust boundary…" },
  check3Title:        { type: ControlType.String, title: "Check 3 Title",    defaultValue: "Environment-bound processing" },
  check3Body:         { type: ControlType.String, title: "Check 3 Body",     defaultValue: "Supports controlled enterprise and regulated environments…" },
  check4Title:        { type: ControlType.String, title: "Check 4 Title",    defaultValue: "Audit trail" },
  check4Body:         { type: ControlType.String, title: "Check 4 Body",     defaultValue: "Every encapsulation event is logged…" },
})
