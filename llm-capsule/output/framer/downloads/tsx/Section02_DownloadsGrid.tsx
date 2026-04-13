import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
  borderDefault: "#e6e7e9",

  gradientCardIndigo: "linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%)",
  gradientCardBlue:   "linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%)",
  gradientCardGreen:  "linear-gradient(109deg, #55B45D 0%, #F0FFF2 17%, #9AE6AD 43%, #C9FFE1 65%, #55B45D 84%, #55B45D 100%)",
  gradientInnerIndigo: "linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%)",
  gradientInnerBlue:   "linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%)",
  gradientInnerGreen:  "linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%)",
  shadowGradientCard: "rgba(113,141,176,0.25) 0px 1px 20px 0px",
}

interface CardItem {
  title: string
  description: string
  buttonLabel: string
  variant: "indigo" | "blue" | "green"
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  card1Title?: string
  card1Description?: string
  card1ButtonLabel?: string
  card2Title?: string
  card2Description?: string
  card2ButtonLabel?: string
  card3Title?: string
  card3Description?: string
  card3ButtonLabel?: string
}

function FileTextIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

function ClipboardListIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <line x1="12" y1="11" x2="16" y2="11"/>
      <line x1="12" y1="16" x2="16" y2="16"/>
      <line x1="8" y1="11" x2="8.01" y2="11"/>
      <line x1="8" y1="16" x2="8.01" y2="16"/>
    </svg>
  )
}

function CogIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )
}

export default function Section02_DownloadsGrid({
  sectionTitle = "Available",
  sectionTitleHighlight = "Resources",
  sectionDescription = "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation.",
  card1Title = "Architecture Brief",
  card1Description = "Technical overview of the LLM Capsule architecture -- encapsulation, trust boundary, restoration, and deployment models.",
  card1ButtonLabel = "Download PDF (coming soon)",
  card2Title = "Product Overview",
  card2Description = "Executive summary of LLM Capsule capabilities, competitive positioning, and enterprise use cases.",
  card2ButtonLabel = "Download PDF (coming soon)",
  card3Title = "Integration Guide",
  card3Description = "Technical integration documentation for enterprise deployment -- API reference, configuration, and deployment instructions.",
  card3ButtonLabel = "Download PDF (coming soon)",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${sectionTitle} ${sectionTitleHighlight}`,
    "description": sectionDescription,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": card1Title },
      { "@type": "ListItem", "position": 2, "name": card2Title },
      { "@type": "ListItem", "position": 3, "name": card3Title },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          box-sizing: border-box;
          overflow: hidden;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s2-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          margin-bottom: 32px;
        }
        .s2-header-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
          word-break: keep-all;
        }
        .s2-header-highlight {
          color: ${PALETTE.brandSecondary};
        }
        .s2-header-description {
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

        /* Card Grid */
        .s2-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        /* Gradient Card */
        .s2-card {
          padding: 2px;
          border-radius: 18px;
          box-shadow: ${PALETTE.shadowGradientCard};
          display: flex;
        }
        .s2-card--indigo { background: ${PALETTE.gradientCardIndigo}; }
        .s2-card--blue   { background: ${PALETTE.gradientCardBlue}; }
        .s2-card--green  { background: ${PALETTE.gradientCardGreen}; }

        .s2-card-inner {
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s2-card--indigo .s2-card-inner { background: ${PALETTE.gradientInnerIndigo}; }
        .s2-card--blue   .s2-card-inner { background: ${PALETTE.gradientInnerBlue}; }
        .s2-card--green  .s2-card-inner { background: ${PALETTE.gradientInnerGreen}; }

        .s2-card-icon {
          margin-bottom: 8px;
        }
        .s2-card-icon--indigo { color: ${PALETTE.brandPrimary}; }
        .s2-card-icon--blue   { color: ${PALETTE.brandSecondary}; }
        .s2-card-icon--green  { color: ${PALETTE.brandAccent}; }

        .s2-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0;
          text-wrap: balance;
          word-break: keep-all;
        }
        .s2-card-description {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-card-button {
          margin-top: auto;
          padding-top: 16px;
        }
        .s2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: default;
          border: 1px solid ${PALETTE.borderDefault};
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          padding: 8px 16px;
          font-size: 14px;
          white-space: nowrap;
          text-decoration: none;
          opacity: 0.5;
          pointer-events: none;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s2-header-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-card-grid { grid-template-columns: repeat(3, 1fr); }
          .s2-header-title { font-size: 24px; }
          .s2-header-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-header-title { font-size: 28px; }
          .s2-header-description { max-width: 1080px; }
        }
      `}</style>
      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <header className="s2-header">
              <h2 className="s2-header-title">
                {sectionTitle} <span className="s2-header-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s2-header-description">{sectionDescription}</p>
            </header>

            <ul className="s2-card-grid" role="list">
              {/* Card 1: Architecture Brief */}
              <li role="listitem">
                <article className="s2-card s2-card--indigo">
                  <div className="s2-card-inner">
                    <div className="s2-card-icon s2-card-icon--indigo">
                      <FileTextIcon />
                    </div>
                    <h3 className="s2-card-title">{card1Title}</h3>
                    <p className="s2-card-description">{card1Description}</p>
                    <div className="s2-card-button">
                      <span className="s2-btn" aria-disabled="true">{card1ButtonLabel}</span>
                    </div>
                  </div>
                </article>
              </li>

              {/* Card 2: Product Overview */}
              <li role="listitem">
                <article className="s2-card s2-card--blue">
                  <div className="s2-card-inner">
                    <div className="s2-card-icon s2-card-icon--blue">
                      <ClipboardListIcon />
                    </div>
                    <h3 className="s2-card-title">{card2Title}</h3>
                    <p className="s2-card-description">{card2Description}</p>
                    <div className="s2-card-button">
                      <span className="s2-btn" aria-disabled="true">{card2ButtonLabel}</span>
                    </div>
                  </div>
                </article>
              </li>

              {/* Card 3: Integration Guide */}
              <li role="listitem">
                <article className="s2-card s2-card--green">
                  <div className="s2-card-inner">
                    <div className="s2-card-icon s2-card-icon--green">
                      <CogIcon />
                    </div>
                    <h3 className="s2-card-title">{card3Title}</h3>
                    <p className="s2-card-description">{card3Description}</p>
                    <div className="s2-card-button">
                      <span className="s2-btn" aria-disabled="true">{card3ButtonLabel}</span>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_DownloadsGrid, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Available",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Resources",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation.",
    displayTextArea: true,
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Architecture Brief",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    defaultValue: "Technical overview of the LLM Capsule architecture -- encapsulation, trust boundary, restoration, and deployment models.",
    displayTextArea: true,
  },
  card1ButtonLabel: {
    type: ControlType.String,
    title: "Card 1 Button",
    defaultValue: "Download PDF (coming soon)",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Product Overview",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description",
    defaultValue: "Executive summary of LLM Capsule capabilities, competitive positioning, and enterprise use cases.",
    displayTextArea: true,
  },
  card2ButtonLabel: {
    type: ControlType.String,
    title: "Card 2 Button",
    defaultValue: "Download PDF (coming soon)",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Integration Guide",
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 Description",
    defaultValue: "Technical integration documentation for enterprise deployment -- API reference, configuration, and deployment instructions.",
    displayTextArea: true,
  },
  card3ButtonLabel: {
    type: ControlType.String,
    title: "Card 3 Button",
    defaultValue: "Download PDF (coming soon)",
  },
})
