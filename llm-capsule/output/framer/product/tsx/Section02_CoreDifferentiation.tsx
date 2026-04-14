import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary:      "#1821E8",
  brandSecondary:    "#5690D4",
  textPrimary:       "#0f0f0f",
  textSecondary:     "#636363",
  white:             "#ffffff",
  borderDefault:     "#e6e7e9",
  surfaceLight:      "#f7f7f7",
  surfaceMid:        "#f2f2f2",
  gradCardIndigo:    "linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%)",
  gradCardBlue:      "linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%)",
  gradInnerIndigo:   "linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%)",
  gradInnerBlue:     "linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%)",
  shadowGradCard:    "rgba(113,141,176,0.25) 0px 1px 20px 0px",
  brandTintLight:    "rgba(24, 33, 232, 0.06)",
  neutral150:        "#e6e7e9",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  screenshotDesc?: string
  bannerText?: string
}

export default function Section02_CoreDifferentiation({
  sectionTitle = "Enterprise AI enablement through five core",
  sectionTitleBrand = "capabilities",
  sectionDescription = "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 architecture — three core enablement capabilities plus structure-preserving processing and cross-model execution.",
  screenshotDesc = "LLM Capsule Dashboard — Real-time encapsulation pipeline with document processing status",
  bannerText = "These capabilities let enterprises adopt AI without sacrificing data protection or workflow usability. This is what separates enterprise AI enablement from traditional masking tools.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s2-inner { width: 100%; container-type: inline-size; }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        /* Section Header */
        .s2-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s2-header { text-align: left; } }
        .s2-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s2-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s2-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s2-header__title { font-size: 28px; } }
        .s2-header__brand { color: ${PALETTE.brandSecondary}; }
        .s2-header__desc {
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
        @container (min-width: 1024px) { .s2-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s2-header__desc { max-width: 1080px; } }

        /* Screenshot Frame */
        .s2-screenshot-frame {
          margin-top: 48px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${PALETTE.surfaceLight};
          background-image: url('${IMAGE_BASE}/images/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .s2-screenshot-frame {
            border-radius: 24px 24px 0 0;
            background-image: none;
            padding: 24px 24px 0;
          }
        }
        .s2-screenshot-placeholder {
          background-color: ${PALETTE.surfaceMid};
          border: 2px dashed ${PALETTE.borderDefault};
          border-radius: 18px 18px 0 0;
          padding: 80px 24px;
          text-align: center;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .s2-placeholder-icon {
          width: 32px;
          height: 32px;
          stroke: #9c9c9c;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s2-placeholder-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          color: #9c9c9c;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .s2-placeholder-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #9c9c9c;
        }

        /* Gradient Cards Wrap */
        .s2-cards-wrap { margin-top: 48px; }
        .s2-grid--3col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        @container (min-width: 768px) {
          .s2-grid--3col { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s2-grid--3col { grid-template-columns: repeat(3, 1fr); }
        }
        .s2-grid--2col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) {
          .s2-grid--2col { grid-template-columns: repeat(2, 1fr); }
        }

        /* Gradient Card */
        .s2-grad-card {
          padding: 2px;
          border-radius: 18px;
          box-shadow: ${PALETTE.shadowGradCard};
        }
        .s2-grad-card--indigo { background: ${PALETTE.gradCardIndigo}; }
        .s2-grad-card--blue   { background: ${PALETTE.gradCardBlue}; }
        .s2-grad-card__inner {
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: ${PALETTE.white};
          box-sizing: border-box;
        }
        .s2-grad-card--indigo .s2-grad-card__inner { background: ${PALETTE.gradInnerIndigo}; }
        .s2-grad-card--blue   .s2-grad-card__inner { background: ${PALETTE.gradInnerBlue}; }

        .s2-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          width: fit-content;
        }
        .s2-badge--primary { background-color: ${PALETTE.brandPrimary}; color: ${PALETTE.white}; }
        .s2-badge--neutral { background-color: ${PALETTE.neutral150}; color: ${PALETTE.textSecondary}; }

        .s2-card-icon {
          margin-bottom: 4px;
          color: ${PALETTE.textPrimary};
        }
        .s2-card-icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s2-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0;
          text-wrap: balance;
        }
        .s2-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          flex: 1;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Banner */
        .s2-banner {
          margin-top: 48px;
          padding: 16px 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.brandTintLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: ${PALETTE.textSecondary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2 className="s2-header__title">
                {sectionTitle} <span className="s2-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s2-header__desc">{sectionDescription}</p>
            </div>

            {/* Screenshot Placeholder */}
            <div className="s2-screenshot-frame">
              <div className="s2-screenshot-placeholder">
                <svg className="s2-placeholder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="s2-placeholder-label">Product Screenshot</span>
                <span className="s2-placeholder-desc">{screenshotDesc}</span>
              </div>
            </div>

            {/* Gradient Card Grid */}
            <div className="s2-cards-wrap">
              {/* Row 1: 3 CORE cards */}
              <div className="s2-grid--3col">
                <article className="s2-grad-card s2-grad-card--indigo">
                  <div className="s2-grad-card__inner">
                    <span className="s2-badge s2-badge--primary">CORE</span>
                    <div className="s2-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h3 className="s2-card-title">Zero Exposure</h3>
                    <p className="s2-card-desc">Sensitive data is encapsulated locally before leaving the environment. Raw data never reaches external AI services. Even if the provider logged or stored the data, no enterprise information would be exposed.</p>
                  </div>
                </article>

                <article className="s2-grad-card s2-grad-card--indigo">
                  <div className="s2-grad-card__inner">
                    <span className="s2-badge s2-badge--primary">CORE</span>
                    <div className="s2-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                      </svg>
                    </div>
                    <h3 className="s2-card-title">Restoration</h3>
                    <p className="s2-card-desc">AI outputs are auto-restored locally with real data into usable enterprise documents after processing. Restored outputs work directly in reports, claims documents, legal reviews, and internal analysis — no manual reconstruction required.</p>
                  </div>
                </article>

                <article className="s2-grad-card s2-grad-card--indigo">
                  <div className="s2-grad-card__inner">
                    <span className="s2-badge s2-badge--primary">CORE</span>
                    <div className="s2-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                        <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
                      </svg>
                    </div>
                    <h3 className="s2-card-title">Enterprise Context</h3>
                    <p className="s2-card-desc">Organizations can define sensitive entities beyond standard PII — project names, internal identifiers, customer-specific confidential markers, and contract references. Context-aware data control adapts to your business.</p>
                  </div>
                </article>
              </div>

              {/* Row 2: 2 cards */}
              <div className="s2-grid--2col">
                <article className="s2-grad-card s2-grad-card--blue">
                  <div className="s2-grad-card__inner">
                    <span className="s2-badge s2-badge--neutral">+1</span>
                    <div className="s2-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                        <polyline points="2 17 12 22 22 17"/>
                        <polyline points="2 12 12 17 22 12"/>
                      </svg>
                    </div>
                    <h3 className="s2-card-title">Structure-Preserving</h3>
                    <p className="s2-card-desc">Tables, diagrams, cross-references, and document layouts remain intact during encapsulation. AI receives structurally complete documents that enable accurate extraction and analysis.</p>
                  </div>
                </article>

                <article className="s2-grad-card s2-grad-card--blue">
                  <div className="s2-grad-card__inner">
                    <span className="s2-badge s2-badge--neutral">+2</span>
                    <div className="s2-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
                        <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
                      </svg>
                    </div>
                    <h3 className="s2-card-title">Cross-Model Execution</h3>
                    <p className="s2-card-desc">Model-agnostic by design. Use any LLM — ChatGPT, Claude, Gemini, Perplexity, or any API — without vendor lock-in. Protection stays consistent regardless of which model you choose.</p>
                  </div>
                </article>
              </div>
            </div>

            {/* Banner */}
            <div className="s2-banner">{bannerText}</div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_CoreDifferentiation, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Enterprise AI enablement through five core" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "capabilities" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 architecture — three core enablement capabilities plus structure-preserving processing and cross-model execution.", displayTextArea: true },
  screenshotDesc:     { type: ControlType.String, title: "Screenshot desc", defaultValue: "LLM Capsule Dashboard — Real-time encapsulation pipeline with document processing status", displayTextArea: true },
  bannerText:         { type: ControlType.String, title: "Banner",        defaultValue: "These capabilities let enterprises adopt AI without sacrificing data protection or workflow usability. This is what separates enterprise AI enablement from traditional masking tools.", displayTextArea: true },
})
