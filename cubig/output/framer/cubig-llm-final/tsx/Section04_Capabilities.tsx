import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

const P = {
  brandPurple:    "#725bea",
  white: "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
  bgImgGradCream: `url('${IMAGE_BASE}/images/bg-gradient-cream-jade.png')`,
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  card1Badge?: string
  card1Title?: string
  card1Description?: string
  card2Badge?: string
  card2Title?: string
  card2Description?: string
  card3Badge?: string
  card3Title?: string
  card3Description?: string
  card4Badge?: string
  card4Title?: string
  card4Description?: string
  card5Badge?: string
  card5Title?: string
  card5Description?: string
  sectionBgImage?: string
}

export default function Section04_Capabilities({
  sectionTitle = "Five capabilities for",
  sectionTitleHighlight = "enterprise AI enablement.",
  sectionDescription = "Three core enablement capabilities, plus structure-preserving processing and enterprise environment execution.",
  card1Badge = "CORE 1",
  card1Title = "Zero Exposure",
  card1Description = "Sensitive data encapsulated locally before leaving the environment. Raw data never reaches external AI services. Mapping stored entirely within the enterprise boundary.",
  card2Badge = "CORE 2",
  card2Title = "Restoration",
  card2Description = "AI outputs restored locally with original data. Reports, claims, legal reviews, clinical summaries work directly — no [REDACTED] placeholders, no manual reconstruction.",
  card3Badge = "CORE 3",
  card3Title = "Enterprise Context Control",
  card3Description = "Organizations define what counts as sensitive — beyond standard PII. Project names, internal identifiers, customer-specific markers, contract references. Your rules, your control.",
  card4Badge = "+1",
  card4Title = "Structure-Preserving Processing",
  card4Description = "Tables, cross-references, document layouts stay intact through encapsulation. AI receives structurally complete input across PDFs, Word documents, spreadsheets, and mixed formats.",
  card5Badge = "+2",
  card5Title = "Enterprise Environment Execution",
  card5Description = "Runs inside your existing infrastructure. Air-gapped networks, on-premise servers, custom data systems — no architectural changes required.",
  sectionBgImage = "",
}: Props) {
  const DEFAULT_BG = `${IMAGE_BASE}/bg-gradient-cream-jade.png`
  const resolvedBg = sectionBgImage || DEFAULT_BG
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          width: 100%;
          padding: 80px 0;
          position: relative;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          box-sizing: border-box;
          background-image: url('${resolvedBg}');
        }

        .s4-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255,255,255,0.45);
          z-index: 0;
        }

        .s4-section > * { position: relative; z-index: 1; }

        @container (max-width: 767px) {
          .s4-section {
            background-image: none;
          }
          .s4-section::before { display: none; }
        }

        .s4-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }

        .s4-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        @container (max-width: 767px) {
          .s4-section-header { text-align: left; }
        }

        .s4-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s4-section-title { font-size: 20px; }
        }

        .s4-brand { color: ${P.brandPurple}; }

        .s4-section-description {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s4-section-description { font-size: 18px; }
        }

        @container (min-width: 1024px) {
          .s4-section-description { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s4-section-description { max-width: 860px; }
        }

        .s4-card-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s4-card-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s4-card-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        .s4-card-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 24px;
        }

        @container (min-width: 768px) {
          .s4-card-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .s4-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .s4-card-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }

        .s4-badge-brand { color: ${P.brandPurple}; border-color: ${P.brandPurple}; }
        .s4-badge-gray  { color: ${P.textTertiary}; border-color: ${P.borderDefault}; }

        .s4-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: ${P.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P.brandPurple};
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .s4-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }

        .s4-card-description {
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section" id="section-capabilities">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 className="s4-section-title">
                {sectionTitle} <span className="s4-brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s4-section-description">{sectionDescription}</p>
            </div>

            <div className="s4-card-grid-3">
              <article className="s4-card">
                <span className="s4-card-badge s4-badge-brand">{card1Badge}</span>
                <div className="s4-icon-wrap" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <h3 className="s4-card-title">{card1Title}</h3>
                <p className="s4-card-description">{card1Description}</p>
              </article>

              <article className="s4-card">
                <span className="s4-card-badge s4-badge-brand">{card2Badge}</span>
                <div className="s4-icon-wrap" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"/>
                    <polyline points="1 20 1 14 7 14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                  </svg>
                </div>
                <h3 className="s4-card-title">{card2Title}</h3>
                <p className="s4-card-description">{card2Description}</p>
              </article>

              <article className="s4-card">
                <span className="s4-card-badge s4-badge-brand">{card3Badge}</span>
                <div className="s4-icon-wrap" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
                  </svg>
                </div>
                <h3 className="s4-card-title">{card3Title}</h3>
                <p className="s4-card-description">{card3Description}</p>
              </article>
            </div>

            <div className="s4-card-grid-2">
              <article className="s4-card">
                <span className="s4-card-badge s4-badge-gray">{card4Badge}</span>
                <div className="s4-icon-wrap" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="2 3 22 3 22 8 2 8 2 3"/>
                    <polygon points="2 9 22 9 22 14 2 14 2 9"/>
                    <polygon points="2 15 22 15 22 20 2 20 2 15"/>
                  </svg>
                </div>
                <h3 className="s4-card-title">{card4Title}</h3>
                <p className="s4-card-description">{card4Description}</p>
              </article>

              <article className="s4-card">
                <span className="s4-card-badge s4-badge-gray">{card5Badge}</span>
                <div className="s4-icon-wrap" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </div>
                <h3 className="s4-card-title">{card5Title}</h3>
                <p className="s4-card-description">{card5Description}</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_Capabilities, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Five capabilities for" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "enterprise AI enablement." },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "Three core enablement capabilities, plus structure-preserving processing and enterprise environment execution." },
  card1Badge: { type: ControlType.String, title: "Card 1 Badge", defaultValue: "CORE 1" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Zero Exposure" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Sensitive data encapsulated locally before leaving the environment. Raw data never reaches external AI services. Mapping stored entirely within the enterprise boundary." },
  card2Badge: { type: ControlType.String, title: "Card 2 Badge", defaultValue: "CORE 2" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Restoration" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "AI outputs restored locally with original data. Reports, claims, legal reviews, clinical summaries work directly — no [REDACTED] placeholders, no manual reconstruction." },
  card3Badge: { type: ControlType.String, title: "Card 3 Badge", defaultValue: "CORE 3" },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Enterprise Context Control" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Organizations define what counts as sensitive — beyond standard PII. Project names, internal identifiers, customer-specific markers, contract references. Your rules, your control." },
  card4Badge: { type: ControlType.String, title: "Card 4 Badge", defaultValue: "+1" },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "Structure-Preserving Processing" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "Tables, cross-references, document layouts stay intact through encapsulation. AI receives structurally complete input across PDFs, Word documents, spreadsheets, and mixed formats." },
  card5Badge: { type: ControlType.String, title: "Card 5 Badge", defaultValue: "+2" },
  card5Title: { type: ControlType.String, title: "Card 5 Title", defaultValue: "Enterprise Environment Execution" },
  card5Description: { type: ControlType.String, title: "Card 5 Description", defaultValue: "Runs inside your existing infrastructure. Air-gapped networks, on-premise servers, custom data systems — no architectural changes required." },
  sectionBgImage: { type: ControlType.Image, title: "Section BG Image" },
})
