import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral150: "#e6e7e9",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textInverse:   "#ffffff",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
  shadowCard: "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionTitleMain?: string
  sectionTitleBrand?: string
  relatedTerms?: string[]
  relatedTermHrefs?: string[]
  relatedLinksLabel?: string
  link1Title?: string
  link1Href?: string
  link2Title?: string
  link2Href?: string
  link3Title?: string
  link3Href?: string
  link4Title?: string
  link4Href?: string
}

export default function Section06_RelatedTerms({
  sectionTitleMain = "Related ",
  sectionTitleBrand = "Terms",
  relatedTerms = ["Zero Exposure", "Restoration", "Restorable Workflow"],
  relatedTermHrefs = ["/resources/glossary/zero-exposure", "/resources/glossary/restoration", "/resources/glossary/restorable-workflow"],
  relatedLinksLabel = "Related Pages",
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

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }
        .s6-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }
        .s6-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s6-title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s6-related-terms {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .s6-term-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${PALETTE.textPrimary};
          background-color: transparent;
          border: 1px solid ${PALETTE.neutral150};
          border-radius: 9999px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .s6-term-btn:hover {
          background-color: ${PALETTE.surfaceLight};
        }
        .s6-subtitle-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s6-subtitle-icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
        }
        .s6-subtitle-icon svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s6-subtitle-text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s6-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s6-link-card {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s6-link-card:hover {
          background-color: ${PALETTE.neutral800};
        }
        .s6-link-card-icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
        }
        .s6-link-card-icon svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s6-link-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-section-title { font-size: 22px; }
          .s6-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section-title { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section-title { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s6-section-header { text-align: left; }
        }
      `}</style>
      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 className="s6-section-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitleMain}
                <span className="s6-title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>

            <div className="s6-related-terms">
              {relatedTerms.map((term, i) => (
                <a key={i} href={relatedTermHrefs[i] || "#"} className="s6-term-btn">
                  {term}
                </a>
              ))}
            </div>

            <div className="s6-subtitle-row">
              <span className="s6-subtitle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="s6-subtitle-text">{relatedLinksLabel}</span>
            </div>

            <div className="s6-card-grid">
              <a href={link1Href} className="s6-link-card">
                <span className="s6-link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </span>
                <span className="s6-link-card-title">{link1Title}</span>
              </a>
              <a href={link2Href} className="s6-link-card">
                <span className="s6-link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </span>
                <span className="s6-link-card-title">{link2Title}</span>
              </a>
              <a href={link3Href} className="s6-link-card">
                <span className="s6-link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <span className="s6-link-card-title">{link3Title}</span>
              </a>
              <a href={link4Href} className="s6-link-card">
                <span className="s6-link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span className="s6-link-card-title">{link4Title}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_RelatedTerms, {
  sectionTitleMain: {
    type: ControlType.String,
    title: "Title Main",
    defaultValue: "Related ",
  },
  sectionTitleBrand: {
    type: ControlType.String,
    title: "Title Brand",
    defaultValue: "Terms",
  },
  relatedLinksLabel: {
    type: ControlType.String,
    title: "Related Links Label",
    defaultValue: "Related Pages",
  },
  link1Title: {
    type: ControlType.String,
    title: "Link 1 Title",
    defaultValue: "Product Overview",
  },
  link1Href: {
    type: ControlType.String,
    title: "Link 1 URL",
    defaultValue: "/product",
  },
  link2Title: {
    type: ControlType.String,
    title: "Link 2 Title",
    defaultValue: "Architecture",
  },
  link2Href: {
    type: ControlType.String,
    title: "Link 2 URL",
    defaultValue: "/architecture",
  },
  link3Title: {
    type: ControlType.String,
    title: "Link 3 Title",
    defaultValue: "Trust & Compliance",
  },
  link3Href: {
    type: ControlType.String,
    title: "Link 3 URL",
    defaultValue: "/trust",
  },
  link4Title: {
    type: ControlType.String,
    title: "Link 4 Title",
    defaultValue: "Request a Demo",
  },
  link4Href: {
    type: ControlType.String,
    title: "Link 4 URL",
    defaultValue: "/request-a-demo",
  },
})
