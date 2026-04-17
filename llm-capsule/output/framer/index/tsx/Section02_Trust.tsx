import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  neutral200:     "#e0e0e0",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

const IMG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"
const GFX = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics"

const CERTS = [
  { group: "KISA",        text: "Information Security Fast Track", org: "KISA",                    logo: `${GFX}/cert-kisa.png` },
  { group: "GS",          text: "GS Certification",               org: "TTA",                     logo: `${GFX}/cert-gs.png` },
  { group: "ISO",         text: "ISO/IEC 27001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "ISO",         text: "ISO/IEC 42001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "Award",       text: "Security Innovation Award",       org: "Ministry of Science & ICT", logo: `${GFX}/awards-ministry-of-science-and-ict.jpg` },
  { group: "Award",       text: "Startup World Cup",               org: "Startup World Cup",       logo: `${GFX}/cert-startupworldcup.png` },
  { group: "Award",       text: "Next Rise Global Innovator",      org: "Next Rise",               logo: `${GFX}/awards-NextRise.png` },
  { group: "Award",       text: "T Challenge 2026",                org: "Deutsche Telekom",        logo: `${IMG}/partner-deutsche-telekom.avif` },
  { group: "Award",       text: "AI Medical Innovation",           org: "AI EXPO KOREA",           logo: `${GFX}/awards-koreaia.png` },
  { group: "Recognition", text: "Emerging AI+X Top 100",           org: "Emerging AI+X",           logo: "" },
  { group: "Recognition", text: "Gartner Vendor",                  org: "Gartner",                 logo: `${GFX}/cert-gartner.svg.png` },
]

const PARTNERS = [
  { src: `${IMG}/partner-deutsche-telekom.avif`, alt: "Deutsche Telekom" },
  { src: `${IMG}/partner-kyobo.avif`,            alt: "Kyobo" },
  { src: `${IMG}/partner-claroty.png`,           alt: "Claroty" },
  { src: `${IMG}/partner-eumc.avif`,             alt: "EUMC" },
  { src: `${IMG}/partner-navercloud.avif`,       alt: "Naver Cloud" },
]

interface Props {
  trustHeading?: string
  trustSubheading?: string
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string
  kpiBgImage?: string
}

export default function Section02_Trust({
  trustHeading = "Trusted by enterprises processing sensitive documents",
  trustSubheading = "across finance, insurance, legal, healthcare, and telecom",
  kpi1Number = "0.12s",
  kpi1Label = "Per Page Processing",
  kpi2Number = "100%",
  kpi2Label = "Restoration Rate",
  kpi3Number = "98%",
  kpi3Label = "Output Similarity",
  kpiBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root img { max-width: 100%; display: block; }

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }

        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }
        .idx-section-header__desc {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .idx-section-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-header__desc { max-width: 1080px; } }

        .idx-partner-grid { overflow: hidden; width: 100%; position: relative; }
        .idx-partner-grid:hover .idx-partner-track { animation-play-state: paused; }
        .idx-partner-track {
          display: flex; align-items: center; gap: 64px;
          animation: idx-marquee 40s linear infinite;
          width: max-content;
        }
        .idx-partner-item { flex-shrink: 0; height: 100px; display: flex; align-items: center; justify-content: center; }
        .idx-partner-item img {
          height: 100%; width: auto; max-width: 160px; object-fit: contain;
          filter: grayscale(1); opacity: 0.65; transition: filter 0.2s, opacity 0.2s;
        }
        .idx-partner-item img:hover { filter: grayscale(0); opacity: 1; }
        @keyframes idx-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @container (max-width: 767px) {
          .idx-partner-item { height: 75px; }
          .idx-partner-item img { max-width: 120px; }
          .idx-partner-track { gap: 48px; animation-duration: 25s; }
        }

        .idx-kpi-band {
          border-radius: 40px; padding: 48px 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
          justify-items: center; margin: 32px 0;
          background: ${P.gradientBrand};
          background-image: url('${kpiBgImage}');
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-kpi-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.35); z-index: 0;
        }
        .idx-kpi-band > * { position: relative; z-index: 1; }
        .idx-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
        .idx-kpi-band__number {
          font-family: "DM Sans", sans-serif; font-size: 50px;
          font-weight: 700; line-height: 1; color: ${P.white};
        }
        .idx-kpi-band__label { font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.5; }
        @container (max-width: 767px) {
          .idx-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; background-image: none; }
        }

        .idx-cert-grid { width: 100%; overflow: hidden; padding: 32px 0; }
        .idx-cert-track {
          display: flex; gap: 24px; align-items: stretch;
          width: max-content; animation: idx-marquee 40s linear infinite;
        }
        .idx-cert-track:hover { animation-play-state: paused; }
        .idx-cert-card {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 24px; padding: 24px 32px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 8px; flex-shrink: 0; width: 200px;
        }
        .idx-cert-card__group {
          font-family: "Fragment Mono", monospace; font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.08em; color: ${P.brandSecondary};
          margin-bottom: 4px;
        }
        .idx-cert-card__wreath {
          position: relative; width: 160px; height: 120px;
          display: flex; align-items: center; justify-content: center;
        }
        .idx-cert-card__wl, .idx-cert-card__wr {
          position: absolute; top: 0; height: 100%; width: 34%; object-fit: contain;
        }
        .idx-cert-card__wl { left: -6px; object-position: right; }
        .idx-cert-card__wr { right: -6px; object-position: left; }
        .idx-cert-card__text {
          position: relative; z-index: 1; font-size: 14px; font-weight: 700;
          color: ${P.textPrimary}; text-align: center; line-height: 1.2; max-width: 90px;
        }
        .idx-cert-card__org { font-size: 12px; color: ${P.textSecondary}; }
        .idx-cert-card__logo { width: 60px; height: 60px; object-fit: contain; margin-top: auto; margin-bottom: -10px; }
        @container (max-width: 767px) {
          .idx-cert-card { width: 170px; padding: 16px; }
          .idx-cert-card__wreath { width: 130px; height: 96px; }
          .idx-cert-card__text { font-size: 12px; max-width: 72px; }
          .idx-cert-card__logo { width: 48px; height: 48px; }
          .idx-cert-track { gap: 16px; animation-duration: 25s; }
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-2" className="idx-section">
            <div className="idx-container">

              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{trustHeading}</h2>
                <p className="idx-section-header__desc">{trustSubheading}</p>
              </div>

              {/* Partner Marquee */}
              <div className="idx-partner-grid" aria-label="Partners and customers">
                <div className="idx-partner-track">
                  {[...PARTNERS, ...PARTNERS].map((p, i) => (
                    <div key={i} className="idx-partner-item">
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Band 3col */}
              <div className="idx-kpi-band" aria-label="Trust metrics">
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi1Number}</span>
                  <span className="idx-kpi-band__label">{kpi1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi2Number}</span>
                  <span className="idx-kpi-band__label">{kpi2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi3Number}</span>
                  <span className="idx-kpi-band__label">{kpi3Label}</span>
                </div>
              </div>

              {/* Cert Grid Marquee */}
              <div className="idx-cert-grid" aria-label="Certifications and awards">
                <div className="idx-cert-track">
                  {[...CERTS, ...CERTS].map((c, i) => (
                    <div key={i} className="idx-cert-card">
                      <span className="idx-cert-card__group">{c.group}</span>
                      <div className="idx-cert-card__wreath">
                        <img className="idx-cert-card__wl" src={`${GFX}/cert-left.png`} alt="" />
                        <span className="idx-cert-card__text">{c.text}</span>
                        <img className="idx-cert-card__wr" src={`${GFX}/cert-right.png`} alt="" />
                      </div>
                      <span className="idx-cert-card__org">{c.org}</span>
                      {c.logo && <img className="idx-cert-card__logo" src={c.logo} alt={c.org} loading="lazy" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section02_Trust, {
  trustHeading:    { type: ControlType.String, title: "Trust Heading",    defaultValue: "Trusted by enterprises processing sensitive documents" },
  trustSubheading: { type: ControlType.String, title: "Trust Subheading", defaultValue: "across finance, insurance, legal, healthcare, and telecom" },
  kpi1Number:      { type: ControlType.String, title: "KPI 1 Number",     defaultValue: "0.12s" },
  kpi1Label:       { type: ControlType.String, title: "KPI 1 Label",      defaultValue: "Per Page Processing" },
  kpi2Number:      { type: ControlType.String, title: "KPI 2 Number",     defaultValue: "100%" },
  kpi2Label:       { type: ControlType.String, title: "KPI 2 Label",      defaultValue: "Restoration Rate" },
  kpi3Number:      { type: ControlType.String, title: "KPI 3 Number",     defaultValue: "98%" },
  kpi3Label:       { type: ControlType.String, title: "KPI 3 Label",      defaultValue: "Output Similarity" },
  kpiBgImage:      { type: ControlType.Image,  title: "KPI Band BG Image" },
})
