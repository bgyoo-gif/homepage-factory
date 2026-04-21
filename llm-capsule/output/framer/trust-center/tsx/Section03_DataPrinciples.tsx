import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  card1Title?: string
  card1Description?: string
  card2Title?: string
  card2Description?: string
  card3Title?: string
  card3Description?: string
  card4Title?: string
  card4Description?: string
}

export default function Section03_DataPrinciples({
  sectionTitle = "Data Handling",
  sectionTitleHighlight = "Principles",
  sectionDescription = "Zero exposure by design. Original sensitive enterprise data never leaves the enterprise environment.",
  card1Title = "Zero Exposure by Design",
  card1Description = "Original sensitive enterprise data never leaves the enterprise environment. Only encapsulated representations cross the trust boundary to external AI services.",
  card2Title = "Local-only Mapping Storage",
  card2Description = "The mapping between original and encapsulated values is stored entirely within the enterprise environment and never transmitted externally.",
  card3Title = "Complete Audit Trails",
  card3Description = "Every encapsulation and restoration event is logged with full audit data supporting enterprise AI governance and regulatory compliance.",
  card4Title = "Model-agnostic Protection",
  card4Description = "Protection operates at the data layer, independent of any specific AI provider, ensuring consistent security regardless of which LLM is used.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
          background-image: url('${IMAGE_BASE}/images/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .s3-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255,255,255,0.82);
          z-index: 0;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
          position: relative;
          z-index: 1;
        }
        .s3-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }

        .s3-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s3-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px) { .s3-section-title { font-size: 22px; } }
        @container (min-width: 1024px) { .s3-section-title { font-size: 24px; } }
        @container (min-width: 1440px) { .s3-section-title { font-size: 28px; } }
        .s3-title-highlight { color: #5690D4; }
        .s3-section-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s3-section-desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s3-section-desc { max-width: 1080px; } }

        .s3-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) {
          .s3-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s3-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
        }
        @container (min-width: 1440px) { .s3-card { padding: 32px; } }
        .s3-card-icon {
          display: block;
          margin-bottom: 12px;
          color: #5690D4;
        }
        .s3-card-icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s3-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }
        .s3-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s3-section" aria-labelledby="s3-data-principles-title">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 className="s3-section-title" id="s3-data-principles-title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle} <span className="s3-title-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s3-section-desc">{sectionDescription}</p>
            </div>

            <div className="s3-card-grid">

              <article className="s3-card">
                <span className="s3-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </span>
                <h3 className="s3-card-title">{card1Title}</h3>
                <p className="s3-card-desc">{card1Description}</p>
              </article>

              <article className="s3-card">
                <span className="s3-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  </svg>
                </span>
                <h3 className="s3-card-title">{card2Title}</h3>
                <p className="s3-card-desc">{card2Description}</p>
              </article>

              <article className="s3-card">
                <span className="s3-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <path d="M12 11h4"/>
                    <path d="M12 16h4"/>
                    <path d="M8 11h.01"/>
                    <path d="M8 16h.01"/>
                  </svg>
                </span>
                <h3 className="s3-card-title">{card3Title}</h3>
                <p className="s3-card-desc">{card3Description}</p>
              </article>

              <article className="s3-card">
                <span className="s3-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </span>
                <h3 className="s3-card-title">{card4Title}</h3>
                <p className="s3-card-desc">{card4Description}</p>
              </article>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_DataPrinciples, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Data Handling",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Principles",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Zero exposure by design. Original sensitive enterprise data never leaves the enterprise environment.",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Zero Exposure by Design",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    defaultValue: "Original sensitive enterprise data never leaves the enterprise environment. Only encapsulated representations cross the trust boundary to external AI services.",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Local-only Mapping Storage",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description",
    defaultValue: "The mapping between original and encapsulated values is stored entirely within the enterprise environment and never transmitted externally.",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Complete Audit Trails",
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 Description",
    defaultValue: "Every encapsulation and restoration event is logged with full audit data supporting enterprise AI governance and regulatory compliance.",
  },
  card4Title: {
    type: ControlType.String,
    title: "Card 4 Title",
    defaultValue: "Model-agnostic Protection",
  },
  card4Description: {
    type: ControlType.String,
    title: "Card 4 Description",
    defaultValue: "Protection operates at the data layer, independent of any specific AI provider, ensuring consistent security regardless of which LLM is used.",
  },
})
