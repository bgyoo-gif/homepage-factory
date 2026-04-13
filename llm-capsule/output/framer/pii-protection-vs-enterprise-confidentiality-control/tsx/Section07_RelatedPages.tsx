import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textInverse:    "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  card1Title?: string
  card1Href?: string
  card2Title?: string
  card2Href?: string
  card3Title?: string
  card3Href?: string
  card4Title?: string
  card4Href?: string
  locale?: "en" | "ko"
}

export default function Section07_RelatedPages({
  sectionLabel = "Related",
  card1Title   = "Product Overview",
  card1Href    = "product.html",
  card2Title   = "Architecture",
  card2Href    = "architecture.html",
  card3Title   = "Trust & Compliance",
  card3Href    = "trust.html",
  card4Title   = "Request a Demo",
  card4Href    = "request-pov.html",
  locale       = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 32px 0 64px;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s7-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s7-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px)  { .s7-section { padding: 60px 0 80px; } }
        @container (min-width: 1440px) { .s7-section { padding: 60px 0 100px; } }

        .s7-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s7-section-title-icon__icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
        }
        .s7-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }

        .s7-icon {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) {
          .s7-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s7-card--dark {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .s7-card--dark:hover { background-color: ${PALETTE.neutral800}; }

        .s7-card--dark__icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
        }
        .s7-card--dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }
      `}</style>

      <section className="s7-section" id="section-7" lang={locale}>
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-section-title-icon">
              <span className="s7-section-title-icon__icon">
                <svg className="s7-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <span className="s7-section-title-icon__text">{sectionLabel}</span>
            </div>

            <div className="s7-card-grid">
              <a href={card1Href} className="s7-card--dark">
                <span className="s7-card--dark__icon">
                  <svg className="s7-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </span>
                <span className="s7-card--dark__title">{card1Title}</span>
              </a>
              <a href={card2Href} className="s7-card--dark">
                <span className="s7-card--dark__icon">
                  <svg className="s7-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <span className="s7-card--dark__title">{card2Title}</span>
              </a>
              <a href={card3Href} className="s7-card--dark">
                <span className="s7-card--dark__icon">
                  <svg className="s7-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </span>
                <span className="s7-card--dark__title">{card3Title}</span>
              </a>
              <a href={card4Href} className="s7-card--dark">
                <span className="s7-card--dark__icon">
                  <svg className="s7-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
                <span className="s7-card--dark__title">{card4Title}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_RelatedPages, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Product Overview",
  },
  card1Href: {
    type: ControlType.String,
    title: "Card 1 URL",
    defaultValue: "product.html",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Architecture",
  },
  card2Href: {
    type: ControlType.String,
    title: "Card 2 URL",
    defaultValue: "architecture.html",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Trust & Compliance",
  },
  card3Href: {
    type: ControlType.String,
    title: "Card 3 URL",
    defaultValue: "trust.html",
  },
  card4Title: {
    type: ControlType.String,
    title: "Card 4 Title",
    defaultValue: "Request a Demo",
  },
  card4Href: {
    type: ControlType.String,
    title: "Card 4 URL",
    defaultValue: "request-pov.html",
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
