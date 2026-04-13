import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  feature1Title?: string
  feature1Description?: string
  feature2Title?: string
  feature2Description?: string
  feature3Title?: string
  feature3Description?: string
  feature4Title?: string
  feature4Description?: string
}

export default function Section04_AuditCompliance({
  sectionTitle = "Audit &",
  sectionTitleHighlight = "Compliance",
  sectionDescription = "Every encapsulation and restoration event generates a complete audit record.",
  feature1Title = "Data Protection Records",
  feature1Description = "What data was protected and which elements were encapsulated in each transaction.",
  feature2Title = "AI Service Tracking",
  feature2Description = "Which AI service processed the request and what outputs were restored.",
  feature3Title = "Governance Support",
  feature3Description = "Audit logs support enterprise AI governance, regulatory compliance reporting, and internal security reviews.",
  feature4Title = "Regulatory Alignment",
  feature4Description = "Supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .s4-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.45);
          z-index: 0;
        }
        .s4-section > * { position: relative; z-index: 1; }

        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
          position: relative;
          z-index: 1;
        }
        .s4-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s4 (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }
        @container s4 (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }
        @container s4 (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s4-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container s4 (min-width: 768px) {
          .s4-section-header__title { font-size: 22px; }
        }
        @container s4 (min-width: 1024px) {
          .s4-section-header__title { font-size: 24px; }
        }
        @container s4 (min-width: 1440px) {
          .s4-section-header__title { font-size: 28px; }
        }
        .s4-section-header__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container s4 (min-width: 1024px) {
          .s4-section-header__description { max-width: 720px; }
        }
        @container s4 (min-width: 1440px) {
          .s4-section-header__description { max-width: 1080px; }
        }
        .s4-title-highlight { color: #5690D4; }

        /* Feature Grid */
        .s4-feature-grid {
          border: 1px solid #e6e7e9;
          border-radius: 40px;
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 48px;
          background-color: rgba(255, 255, 255, 0.85);
          box-sizing: border-box;
        }
        @container s4 (max-width: 767px) {
          .s4-feature-grid {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }
        }

        .s4-feature-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s4-feature-item__icon {
          color: #5690D4;
          margin-bottom: 4px;
        }
        .s4-feature-item__icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s4-feature-item__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
        }
        .s4-feature-item__description {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 className="s4-section-header__title">
                {sectionTitle} <span className="s4-title-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s4-section-header__description">{sectionDescription}</p>
            </div>

            <div className="s4-feature-grid">

              <div className="s4-feature-item">
                <div className="s4-feature-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className="s4-feature-item__title">{feature1Title}</h3>
                <p className="s4-feature-item__description">{feature1Description}</p>
              </div>

              <div className="s4-feature-item">
                <div className="s4-feature-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                    <circle cx="12" cy="5" r="2"/>
                    <path d="M12 7v4"/>
                    <line x1="8" y1="16" x2="8" y2="16"/>
                    <line x1="16" y1="16" x2="16" y2="16"/>
                  </svg>
                </div>
                <h3 className="s4-feature-item__title">{feature2Title}</h3>
                <p className="s4-feature-item__description">{feature2Description}</p>
              </div>

              <div className="s4-feature-item">
                <div className="s4-feature-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    <path d="m9 14 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="s4-feature-item__title">{feature3Title}</h3>
                <p className="s4-feature-item__description">{feature3Description}</p>
              </div>

              <div className="s4-feature-item">
                <div className="s4-feature-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z"/>
                    <path d="M16 12H8"/>
                    <path d="M12 8v8"/>
                  </svg>
                </div>
                <h3 className="s4-feature-item__title">{feature4Title}</h3>
                <p className="s4-feature-item__description">{feature4Description}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_AuditCompliance, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Audit &" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Compliance" },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "Every encapsulation and restoration event generates a complete audit record." },
  feature1Title: { type: ControlType.String, title: "Feature 1 Title", defaultValue: "Data Protection Records" },
  feature1Description: { type: ControlType.String, title: "Feature 1 Description", defaultValue: "What data was protected and which elements were encapsulated in each transaction." },
  feature2Title: { type: ControlType.String, title: "Feature 2 Title", defaultValue: "AI Service Tracking" },
  feature2Description: { type: ControlType.String, title: "Feature 2 Description", defaultValue: "Which AI service processed the request and what outputs were restored." },
  feature3Title: { type: ControlType.String, title: "Feature 3 Title", defaultValue: "Governance Support" },
  feature3Description: { type: ControlType.String, title: "Feature 3 Description", defaultValue: "Audit logs support enterprise AI governance, regulatory compliance reporting, and internal security reviews." },
  feature4Title: { type: ControlType.String, title: "Feature 4 Title", defaultValue: "Regulatory Alignment" },
  feature4Description: { type: ControlType.String, title: "Feature 4 Description", defaultValue: "Supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations." },
})
