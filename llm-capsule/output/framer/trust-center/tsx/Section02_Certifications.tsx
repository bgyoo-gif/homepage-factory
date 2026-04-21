import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
}

const CERT_ITEMS = [
  { group: "KISA", text: "Information Security Fast Track", org: "KISA", logo: "cert-kisa.png", logoAlt: "KISA" },
  { group: "GS", text: "GS Certification", org: "TTA", logo: "cert-gs.png", logoAlt: "TTA" },
  { group: "ISO", text: "ISO/IEC 27001", org: "ISO", logo: "cert-iso.png", logoAlt: "ISO" },
  { group: "ISO", text: "ISO/IEC 42001", org: "ISO", logo: "cert-iso.png", logoAlt: "ISO" },
  { group: "Award", text: "Security Innovation Award", org: "Ministry of Science & ICT", logo: null, logoAlt: "Ministry of Science and ICT", logoSrc: `${IMAGE_BASE}/graphics/awards-ministry-of-science-and-ict.jpg` },
  { group: "Award", text: "Startup World Cup", org: "Startup World Cup", logo: "cert-startupworldcup.png", logoAlt: "Startup World Cup" },
  { group: "Award", text: "Next Rise Global Innovator", org: "Next Rise", logo: null, logoAlt: "Next Rise", logoSrc: `${IMAGE_BASE}/graphics/awards-NextRise.png` },
  { group: "Award", text: "T Challenge 2026", org: "Deutsche Telekom", logo: null, logoAlt: "Deutsche Telekom", logoSrc: `${IMAGE_BASE}/images/partner-deutsche-telekom.avif` },
  { group: "Award", text: "AI Medical Innovation", org: "AI EXPO KOREA", logo: null, logoAlt: "AI EXPO KOREA", logoSrc: `${IMAGE_BASE}/graphics/awards-koreaia.png` },
  { group: "Recognition", text: "Emerging AI+X Top 100", org: "Emerging AI+X", logo: null, logoAlt: "" },
  { group: "Recognition", text: "Gartner Vendor", org: "Gartner", logo: "cert-gartner.svg.png", logoAlt: "Gartner" },
]

function CertCard({ group, text, org, logo, logoAlt, logoSrc }: {
  group: string
  text: string
  org: string
  logo: string | null
  logoAlt: string
  logoSrc?: string
}) {
  const resolvedLogoSrc = logoSrc || (logo ? `${IMAGE_BASE}/graphics/${logo}` : null)
  return (
    <div className="s2-cert-card">
      <span className="s2-cert-card-group">{group}</span>
      <div className="s2-cert-card-wreath">
        <img className="s2-cert-wreath-left" src={`${IMAGE_BASE}/graphics/cert-left.png`} alt="" />
        <span className="s2-cert-wreath-text">{text}</span>
        <img className="s2-cert-wreath-right" src={`${IMAGE_BASE}/graphics/cert-right.png`} alt="" />
      </div>
      <span className="s2-cert-card-org">{org}</span>
      {resolvedLogoSrc && (
        <img className="s2-cert-card-logo" src={resolvedLogoSrc} alt={logoAlt} loading="lazy" />
      )}
    </div>
  )
}

export default function Section02_Certifications({
  sectionTitle = "Certifications &",
  sectionTitleHighlight = "Compliance",
  sectionDescription = "Information security management, AI governance, and government software quality certifications.",
}: Props) {
  const doubled = [...CERT_ITEMS, ...CERT_ITEMS]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          background-color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        .s2-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s2-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px) { .s2-section-title { font-size: 22px; } }
        @container (min-width: 1024px) { .s2-section-title { font-size: 24px; } }
        @container (min-width: 1440px) { .s2-section-title { font-size: 28px; } }
        .s2-title-highlight { color: #5690D4; }
        .s2-section-desc {
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
        @container (min-width: 1024px) { .s2-section-desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s2-section-desc { max-width: 1080px; } }

        /* Marquee */
        .s2-cert-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }
        .s2-cert-track {
          display: flex;
          gap: 24px;
          align-items: stretch;
          width: max-content;
          animation: s2-marquee 40s linear infinite;
        }
        .s2-cert-track:hover { animation-play-state: paused; }
        @keyframes s2-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Cert Card */
        .s2-cert-card {
          background-color: #ffffff;
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
        }
        .s2-cert-card-group {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #5690D4;
          margin-bottom: 4px;
        }
        .s2-cert-card-wreath {
          position: relative;
          width: 160px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s2-cert-wreath-left,
        .s2-cert-wreath-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 34%;
          object-fit: contain;
        }
        .s2-cert-wreath-left { left: -6px; object-position: right; }
        .s2-cert-wreath-right { right: -6px; object-position: left; }
        .s2-cert-wreath-text {
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
        .s2-cert-card-org {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #636363;
        }
        .s2-cert-card-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-top: auto;
          margin-bottom: -10px;
        }
      `}</style>
      <section className="s2-section" aria-labelledby="s2-cert-title">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 className="s2-section-title" id="s2-cert-title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle} <span className="s2-title-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s2-section-desc">{sectionDescription}</p>
            </div>
          </div>
        </div>

        <div className="s2-cert-grid" aria-label="Certifications and compliance">
          <div className="s2-cert-track">
            {doubled.map((item, i) => (
              <CertCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Certifications, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Certifications &",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Compliance",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Information security management, AI governance, and government software quality certifications.",
  },
})
