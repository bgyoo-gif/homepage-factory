import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textInverse:   "#ffffff",
  neutral850:    "#141414",
  neutral800:    "#171719",
  neutral700:    "#303135",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface Props {
  sectionLabel?: string
  link1Label?: string
  link1Href?: string
  link2Label?: string
  link2Href?: string
  link3Label?: string
  link3Href?: string
  link4Label?: string
  link4Href?: string
}

export default function Section06_RelatedPages({
  sectionLabel = "Related",
  link1Label = "Product Overview",
  link1Href = "product.html",
  link2Label = "Architecture",
  link2Href = "architecture.html",
  link3Label = "Trust & Compliance",
  link3Href = "trust.html",
  link4Label = "Request a Demo",
  link4Href = "request-pov.html",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          overflow: hidden;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .s6-section { padding: 48px 0; } }
        @container (min-width: 1024px) { .s6-section { padding: 48px 0; } }
        @container (min-width: 1440px) { .s6-section { padding: 64px 0; } }

        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0; } }

        .s6-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s6-title-icon__icon {
          color: ${P.brandSecondary};
          flex-shrink: 0;
        }
        .s6-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }

        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) { .s6-grid { grid-template-columns: repeat(2, 1fr); } }

        .s6-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          color: ${P.textInverse};
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s6-card:hover { background-color: ${P.neutral800}; }

        .s6-card__icon {
          flex-shrink: 0;
          color: ${P.brandSecondary};
          width: 24px;
          height: 24px;
        }

        .s6-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${P.textInverse};
        }

        .s6-icon {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      <section className="s6-section" id="section-7">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-title-icon">
              <span className="s6-title-icon__icon">
                <svg className="s6-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <span className="s6-title-icon__text">{sectionLabel}</span>
            </div>

            <div className="s6-grid">
              <a href={link1Href} className="s6-card">
                <span className="s6-card__icon">
                  <svg className="s6-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </span>
                <span className="s6-card__title">{link1Label}</span>
              </a>

              <a href={link2Href} className="s6-card">
                <span className="s6-card__icon">
                  <svg className="s6-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <span className="s6-card__title">{link2Label}</span>
              </a>

              <a href={link3Href} className="s6-card">
                <span className="s6-card__icon">
                  <svg className="s6-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </span>
                <span className="s6-card__title">{link3Label}</span>
              </a>

              <a href={link4Href} className="s6-card">
                <span className="s6-card__icon">
                  <svg className="s6-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
                <span className="s6-card__title">{link4Label}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_RelatedPages, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Related" },
  link1Label:   { type: ControlType.String, title: "Link 1 Label", defaultValue: "Product Overview" },
  link1Href:    { type: ControlType.String, title: "Link 1 URL",   defaultValue: "product.html" },
  link2Label:   { type: ControlType.String, title: "Link 2 Label", defaultValue: "Architecture" },
  link2Href:    { type: ControlType.String, title: "Link 2 URL",   defaultValue: "architecture.html" },
  link3Label:   { type: ControlType.String, title: "Link 3 Label", defaultValue: "Trust & Compliance" },
  link3Href:    { type: ControlType.String, title: "Link 3 URL",   defaultValue: "trust.html" },
  link4Label:   { type: ControlType.String, title: "Link 4 Label", defaultValue: "Request a Demo" },
  link4Href:    { type: ControlType.String, title: "Link 4 URL",   defaultValue: "request-pov.html" },
})
