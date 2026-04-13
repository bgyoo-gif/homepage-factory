import { addPropertyControls, ControlType } from "framer"

const GRAPHICS_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics"
const IMAGES_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface CertItem {
  group: string
  wreathText: string
  org: string
  logoSrc?: string
  logoAlt?: string
}

const CERT_ITEMS: CertItem[] = [
  { group: "KISA", wreathText: "Information Security Fast Track", org: "KISA", logoSrc: `${GRAPHICS_BASE}/cert-kisa.png`, logoAlt: "KISA" },
  { group: "GS", wreathText: "GS Certification", org: "TTA", logoSrc: `${GRAPHICS_BASE}/cert-gs.png`, logoAlt: "TTA" },
  { group: "ISO", wreathText: "ISO/IEC 27001", org: "ISO", logoSrc: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO" },
  { group: "ISO", wreathText: "ISO/IEC 42001", org: "ISO", logoSrc: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO" },
  { group: "Award", wreathText: "Security Innovation Award", org: "Ministry of Science & ICT", logoSrc: `${GRAPHICS_BASE}/awards-ministry-of-science-and-ict.jpg`, logoAlt: "Ministry of Science and ICT" },
  { group: "Award", wreathText: "Startup World Cup", org: "Startup World Cup", logoSrc: `${GRAPHICS_BASE}/cert-startupworldcup.png`, logoAlt: "Startup World Cup" },
  { group: "Award", wreathText: "Next Rise Global Innovator", org: "Next Rise", logoSrc: `${GRAPHICS_BASE}/awards-NextRise.png`, logoAlt: "Next Rise" },
  { group: "Award", wreathText: "T Challenge 2026", org: "Deutsche Telekom", logoSrc: `${IMAGES_BASE}/partner-deutsche-telekom.avif`, logoAlt: "Deutsche Telekom" },
  { group: "Award", wreathText: "AI Medical Innovation", org: "AI EXPO KOREA", logoSrc: `${GRAPHICS_BASE}/awards-koreaia.png`, logoAlt: "AI EXPO KOREA" },
  { group: "Recognition", wreathText: "Emerging AI+X Top 100", org: "Emerging AI+X" },
  { group: "Recognition", wreathText: "Gartner Vendor", org: "Gartner", logoSrc: `${GRAPHICS_BASE}/cert-gartner.svg.png`, logoAlt: "Gartner" },
]

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  card1Title?: string
  card1Description?: string
  card2Title?: string
  card2Description?: string
  card3Title?: string
  card3Description?: string
  card4Title?: string
  card4Description?: string
}

export default function Section02_Certifications({
  sectionTitle = "Certified",
  sectionTitleHighlight = "Trust",
  card1Title = "ISO 27001",
  card1Description = "Information security management system certification. Demonstrates systematic approach to managing sensitive company information.",
  card2Title = "ISO 42001",
  card2Description = "AI management system certification. Demonstrates responsible AI governance and risk management practices.",
  card3Title = "GS Certification",
  card3Description = "Korean government software quality certification (Grade 1). Listed on 조달청 혁신장터 for public sector procurement.",
  card4Title = "AWS Marketplace",
  card4Description = "Available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments.",
}: Props) {
  const allItems = [...CERT_ITEMS, ...CERT_ITEMS]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s2 (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container s2 (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container s2 (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s2-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s2-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container s2 (min-width: 768px) {
          .s2-section-header__title { font-size: 22px; }
        }
        @container s2 (min-width: 1024px) {
          .s2-section-header__title { font-size: 24px; }
        }
        @container s2 (min-width: 1440px) {
          .s2-section-header__title { font-size: 28px; }
        }
        .s2-title-highlight { color: #5690D4; }

        /* Cert Marquee */
        .s2-cert-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }
        .s2-cert-grid__track {
          display: flex;
          gap: 24px;
          align-items: stretch;
          width: max-content;
          animation: s2-marquee 40s linear infinite;
        }
        .s2-cert-grid__track:hover {
          animation-play-state: paused;
        }
        @keyframes s2-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .s2-cert-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 24px;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          flex-shrink: 0;
          width: 200px;
          box-sizing: border-box;
        }
        .s2-cert-card__group {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #5690D4;
          margin-bottom: 4px;
        }
        .s2-cert-card__wreath {
          position: relative;
          width: 160px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s2-cert-card__wreath-left,
        .s2-cert-card__wreath-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 34%;
          object-fit: contain;
        }
        .s2-cert-card__wreath-left { left: -6px; object-position: right; }
        .s2-cert-card__wreath-right { right: -6px; object-position: left; }
        .s2-cert-card__wreath-text {
          position: relative;
          z-index: 1;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0f0f0f;
          text-align: center;
          line-height: 1.2;
          max-width: 90px;
        }
        .s2-cert-card__org {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #636363;
        }
        .s2-cert-card__logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-top: auto;
          margin-bottom: -10px;
          display: block;
        }

        /* Detail Cards */
        .s2-spaced-top { margin-top: 24px; }
        .s2-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container s2 (min-width: 768px) {
          .s2-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container s2 (min-width: 1024px) {
          .s2-card-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .s2-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }
        @container s2 (min-width: 1440px) {
          .s2-card { padding: 32px; }
        }
        .s2-card__icon-wrap { color: #5690D4; }
        .s2-card__icon {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s2-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .s2-card__description {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>
      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 className="s2-section-header__title">
                {sectionTitle} <span className="s2-title-highlight">{sectionTitleHighlight}</span>
              </h2>
            </div>
          </div>

          {/* Cert Marquee — full-bleed */}
          <div className="s2-cert-grid" aria-label="Certifications and accreditations">
            <div className="s2-cert-grid__track">
              {allItems.map((item, idx) => (
                <div className="s2-cert-card" key={idx}>
                  <span className="s2-cert-card__group">{item.group}</span>
                  <div className="s2-cert-card__wreath">
                    <img className="s2-cert-card__wreath-left" src={`${GRAPHICS_BASE}/cert-left.png`} alt="" />
                    <span className="s2-cert-card__wreath-text">{item.wreathText}</span>
                    <img className="s2-cert-card__wreath-right" src={`${GRAPHICS_BASE}/cert-right.png`} alt="" />
                  </div>
                  <span className="s2-cert-card__org">{item.org}</span>
                  {item.logoSrc && (
                    <img className="s2-cert-card__logo" src={item.logoSrc} alt={item.logoAlt || ""} loading="lazy" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detail Cards */}
          <div className="s2-container s2-spaced-top">
            <div className="s2-card-grid">

              <div className="s2-card">
                <div className="s2-card__icon-wrap">
                  <svg className="s2-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="s2-card__title">{card1Title}</h3>
                <p className="s2-card__description">{card1Description}</p>
              </div>

              <div className="s2-card">
                <div className="s2-card__icon-wrap">
                  <svg className="s2-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
                    <path d="M12 8v4l2 2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                  </svg>
                </div>
                <h3 className="s2-card__title">{card2Title}</h3>
                <p className="s2-card__description">{card2Description}</p>
              </div>

              <div className="s2-card">
                <div className="s2-card__icon-wrap">
                  <svg className="s2-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="s2-card__title">{card3Title}</h3>
                <p className="s2-card__description">{card3Description}</p>
              </div>

              <div className="s2-card">
                <div className="s2-card__icon-wrap">
                  <svg className="s2-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  </svg>
                </div>
                <h3 className="s2-card__title">{card4Title}</h3>
                <p className="s2-card__description">{card4Description}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Certifications, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Certified" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Trust" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "ISO 27001" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Information security management system certification. Demonstrates systematic approach to managing sensitive company information." },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "ISO 42001" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "AI management system certification. Demonstrates responsible AI governance and risk management practices." },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "GS Certification" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Korean government software quality certification (Grade 1). Listed on 조달청 혁신장터 for public sector procurement." },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "AWS Marketplace" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "Available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments." },
})
