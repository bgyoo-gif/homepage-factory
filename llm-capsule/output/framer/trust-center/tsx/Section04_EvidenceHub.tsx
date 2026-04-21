import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  item1Title?: string
  item1Description?: string
  item2Title?: string
  item2Description?: string
  item3Title?: string
  item3Description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
}

export default function Section04_EvidenceHub({
  sectionTitle = "Documents & Review Items for Enterprise",
  sectionTitleHighlight = "Evaluation",
  sectionDescription = "Use this page as the operational trust hub for procurement, security review, architecture review, and compliance validation.",
  item1Title = "Architecture Brief",
  item1Description = "High-level architecture, trust boundary, local mapping model, and restoration flow.",
  item2Title = "Security Review Package",
  item2Description = "Data handling principles, audit model, deployment assumptions, and security questionnaire support.",
  item3Title = "Deployment Options",
  item3Description = "On-premise, air-gapped, VPC, cloud, hybrid, and embedded deployment patterns for evaluation.",
  ctaPrimaryLabel = "Request a Demo",
  ctaPrimaryHref = "/request-a-demo",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          background-color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        .s4-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px) { .s4-section-title { font-size: 22px; } }
        @container (min-width: 1024px) { .s4-section-title { font-size: 24px; } }
        @container (min-width: 1440px) { .s4-section-title { font-size: 28px; } }
        .s4-title-highlight { color: #5690D4; }
        .s4-section-desc {
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
        @container (min-width: 1024px) { .s4-section-desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s4-section-desc { max-width: 1080px; } }

        .s4-feature-grid {
          background-color: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 40px;
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 48px;
        }
        @container (max-width: 767px) {
          .s4-feature-grid { grid-template-columns: 1fr; padding: 24px; }
        }

        .s4-feature-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s4-feature-icon {
          color: #5690D4;
          margin-bottom: 4px;
        }
        .s4-feature-icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s4-feature-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
        }
        .s4-feature-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
        @container (max-width: 767px) {
          .s4-actions { flex-direction: column; align-items: center; }
          .s4-actions .s4-btn { width: 100%; max-width: 320px; }
        }
        .s4-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          font-size: 16px;
        }
        .s4-btn-primary {
          background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
          color: #ffffff;
        }
        .s4-btn-primary:hover { opacity: 0.88; }
        .s4-btn-secondary {
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s4-btn-secondary:hover { background-color: #f7f7f7; }
      `}</style>
      <section className="s4-section" aria-labelledby="s4-evidence-title">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 className="s4-section-title" id="s4-evidence-title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle} <span className="s4-title-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s4-section-desc">{sectionDescription}</p>
            </div>

            <div className="s4-feature-grid">

              <div className="s4-feature-item">
                <span className="s4-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" x2="8" y1="13" y2="13"/>
                    <line x1="16" x2="8" y1="17" y2="17"/>
                    <line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                </span>
                <h3 className="s4-feature-title">{item1Title}</h3>
                <p className="s4-feature-desc">{item1Description}</p>
              </div>

              <div className="s4-feature-item">
                <span className="s4-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <h3 className="s4-feature-title">{item2Title}</h3>
                <p className="s4-feature-desc">{item2Description}</p>
              </div>

              <div className="s4-feature-item">
                <span className="s4-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
                    <line x1="6" x2="6.01" y1="6" y2="6"/>
                    <line x1="6" x2="6.01" y1="18" y2="18"/>
                  </svg>
                </span>
                <h3 className="s4-feature-title">{item3Title}</h3>
                <p className="s4-feature-desc">{item3Description}</p>
              </div>

            </div>

            <div className="s4-actions">
              <a href={ctaPrimaryHref} className="s4-btn s4-btn-primary">{ctaPrimaryLabel}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_EvidenceHub, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Documents & Review Items for Enterprise",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Evaluation",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Use this page as the operational trust hub for procurement, security review, architecture review, and compliance validation.",
  },
  item1Title: {
    type: ControlType.String,
    title: "Item 1 Title",
    defaultValue: "Architecture Brief",
  },
  item1Description: {
    type: ControlType.String,
    title: "Item 1 Description",
    defaultValue: "High-level architecture, trust boundary, local mapping model, and restoration flow.",
  },
  item2Title: {
    type: ControlType.String,
    title: "Item 2 Title",
    defaultValue: "Security Review Package",
  },
  item2Description: {
    type: ControlType.String,
    title: "Item 2 Description",
    defaultValue: "Data handling principles, audit model, deployment assumptions, and security questionnaire support.",
  },
  item3Title: {
    type: ControlType.String,
    title: "Item 3 Title",
    defaultValue: "Deployment Options",
  },
  item3Description: {
    type: ControlType.String,
    title: "Item 3 Description",
    defaultValue: "On-premise, air-gapped, VPC, cloud, hybrid, and embedded deployment patterns for evaluation.",
  },
  ctaPrimaryLabel: {
    type: ControlType.String,
    title: "CTA Primary Label",
    defaultValue: "Request a Demo",
  },
  ctaPrimaryHref: {
    type: ControlType.String,
    title: "CTA Primary Href",
    defaultValue: "/request-a-demo",
  },
})
