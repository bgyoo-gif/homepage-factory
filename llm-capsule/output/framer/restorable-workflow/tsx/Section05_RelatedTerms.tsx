import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral900: "#0f0f0f",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textInverse:   "#ffffff",
  surfaceWhite: "#ffffff",
  shadowCard: "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionHeading?: string
  term1Label?: string
  term1Href?: string
  term2Label?: string
  term2Href?: string
  term3Label?: string
  term3Href?: string
  relatedPagesLabel?: string
  link1Title?: string
  link1Href?: string
  link2Title?: string
  link2Href?: string
  link3Title?: string
  link3Href?: string
  link4Title?: string
  link4Href?: string
}

export default function Section05_RelatedTerms({
  sectionHeading = "Related Terms",
  term1Label = "Restoration",
  term1Href = "/resources/glossary/restoration",
  term2Label = "Structure-Preserving Processing",
  term2Href = "/resources/glossary/structure-preserving-processing",
  term3Label = "Secure LLM Usage",
  term3Href = "/resources/glossary/secure-llm-usage",
  relatedPagesLabel = "Related Pages",
  link1Title = "Product Overview",
  link1Href = "/product",
  link2Title = "Architecture",
  link2Href = "/architecture",
  link3Title = "Trust & Compliance",
  link3Href = "/trust",
  link4Title = "Request a Demo",
  link4Href = "/request-a-demo",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0 60px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }

        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }

        .s5-brand {
          color: ${PALETTE.brandSecondary};
        }

        .s5-related-terms {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .s5-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid ${PALETTE.neutral150};
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          font-size: 14px;
          background-color: transparent;
          color: ${PALETTE.textPrimary};
        }

        .s5-btn:hover {
          background-color: ${PALETTE.neutral025};
        }

        .s5-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .s5-section-title-icon__icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .s5-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }

        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .s5-card-dark {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }

        .s5-card-dark:hover {
          background-color: ${PALETTE.neutral800};
        }

        .s5-card-dark__icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .s5-card-dark__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s5-section-header h2 { font-size: 22px; }
        }

        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
        }

        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s5-section" id="section-6">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>Related <span className="s5-brand">Terms</span></h2>
            </div>

            <div className="s5-related-terms">
              <a href={term1Href} className="s5-btn">{term1Label}</a>
              <a href={term2Href} className="s5-btn">{term2Label}</a>
              <a href={term3Href} className="s5-btn">{term3Label}</a>
            </div>

            <div className="s5-section-title-icon">
              <svg className="s5-section-title-icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="s5-section-title-icon__text">{relatedPagesLabel}</span>
            </div>

            <div className="s5-card-grid">
              <a href={link1Href} className="s5-card-dark">
                <svg className="s5-card-dark__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <span className="s5-card-dark__title">{link1Title}</span>
              </a>
              <a href={link2Href} className="s5-card-dark">
                <svg className="s5-card-dark__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span className="s5-card-dark__title">{link2Title}</span>
              </a>
              <a href={link3Href} className="s5-card-dark">
                <svg className="s5-card-dark__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="s5-card-dark__title">{link3Title}</span>
              </a>
              <a href={link4Href} className="s5-card-dark">
                <svg className="s5-card-dark__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span className="s5-card-dark__title">{link4Title}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_RelatedTerms, {
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Related Terms",
  },
  term1Label: { type: ControlType.String, title: "Term 1 Label", defaultValue: "Restoration" },
  term1Href:  { type: ControlType.String, title: "Term 1 Href",  defaultValue: "/resources/glossary/restoration" },
  term2Label: { type: ControlType.String, title: "Term 2 Label", defaultValue: "Structure-Preserving Processing" },
  term2Href:  { type: ControlType.String, title: "Term 2 Href",  defaultValue: "/resources/glossary/structure-preserving-processing" },
  term3Label: { type: ControlType.String, title: "Term 3 Label", defaultValue: "Secure LLM Usage" },
  term3Href:  { type: ControlType.String, title: "Term 3 Href",  defaultValue: "/resources/glossary/secure-llm-usage" },
  relatedPagesLabel: { type: ControlType.String, title: "Related Pages Label", defaultValue: "Related Pages" },
  link1Title: { type: ControlType.String, title: "Link 1 Title", defaultValue: "Product Overview" },
  link1Href:  { type: ControlType.String, title: "Link 1 Href",  defaultValue: "/product" },
  link2Title: { type: ControlType.String, title: "Link 2 Title", defaultValue: "Architecture" },
  link2Href:  { type: ControlType.String, title: "Link 2 Href",  defaultValue: "/architecture" },
  link3Title: { type: ControlType.String, title: "Link 3 Title", defaultValue: "Trust & Compliance" },
  link3Href:  { type: ControlType.String, title: "Link 3 Href",  defaultValue: "/trust" },
  link4Title: { type: ControlType.String, title: "Link 4 Title", defaultValue: "Request a Demo" },
  link4Href:  { type: ControlType.String, title: "Link 4 Href",  defaultValue: "/request-a-demo" },
})
