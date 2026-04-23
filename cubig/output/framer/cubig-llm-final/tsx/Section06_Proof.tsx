import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

const P = {
  brandPurple:    "#725bea",
  brandPurpleLt:  "#c6c5fa",
  white: "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  success: "#0e824c",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  case1Category?: string
  case1Name?: string
  case1Bullet?: string
  case1Tag?: string
  case2Category?: string
  case2Name?: string
  case2Bullet?: string
  case2Tag?: string
  case3Category?: string
  case3Name?: string
  case3Bullet?: string
  case1Image?: string
  case2Image?: string
  case3Image?: string
  case3Tag?: string
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string
  kpiBgImage?: string
  kpi4Number?: string
  kpi4Label?: string
  actionLink1Label?: string
  actionLink1Href?: string
  actionLink2Label?: string
  actionLink2Href?: string
}

export default function Section06_Proof({
  sectionTitle = "Deployed across",
  sectionTitleHighlight = "regulated industries.",
  case1Category = "GLOBAL TELCO",
  case1Name = "Deutsche Telekom",
  case1Bullet = "Top 12 finalist in T Challenge 2026. Evaluated for enterprise AI data protection across customer care, network ops, and billing workflows at telco scale.",
  case1Tag = "T Challenge 2026 — Top 12",
  case2Category = "GLOBAL OT SECURITY",
  case2Name = "Claroty",
  case2Bullet = "OT infrastructure AI with sensitive operational data encapsulated at the data layer. AI processes tasks without exposure of raw OT identifiers.",
  case2Tag = "OT Infrastructure AI",
  case3Category = "FINANCE · HEALTH · LEGAL",
  case3Name = "DB Insurance · EUMC · Shin&Kim",
  case3Bullet = "Claim, clinical, and contract data encapsulated and restored during AI-assisted document workflows across Korean financial services, medical research, and legal practice.",
  case1Image = "",
  case2Image = "",
  case3Image = "",
  case3Tag = "Finance · Health · Legal",
  kpi1Number = "98.1%",
  kpi1Label = "Detection Accuracy",
  kpi2Number = "99.14%",
  kpi2Label = "Restoration Accuracy",
  kpi3Number = "<0.12s",
  kpi3Label = "Per Page",
  kpiBgImage = "",
  kpi4Number = "Any",
  kpi4Label = "LLM / Model",
  actionLink1Label = "See all production cases",
  actionLink1Href = "/proof",
  actionLink2Label = "Solutions by industry at llmcapsule.ai",
  actionLink2Href = "https://llmcapsule.ai/solutions",
}: Props) {
  const DEFAULT_KPI_BG = `${IMAGE_BASE}/bg-gradient-navy-teal.png`
  const resolvedKpiBg = kpiBgImage || DEFAULT_KPI_BG
  const CERTS = [
    { text: "GS Certification", org: "TTA", year: "2025", logo: `${IMAGE_BASE}/graphics/cert-gs.png`, logoAlt: "GS Certification logo" },
    { text: "ISO/IEC 27001", org: "ISO", year: "2026", logo: `${IMAGE_BASE}/graphics/cert-iso.png`, logoAlt: "ISO 27001 logo" },
    { text: "ISO/IEC 42001", org: "ISO", year: "2026", logo: `${IMAGE_BASE}/graphics/cert-iso.png`, logoAlt: "ISO 42001 logo" },
    { text: "Info Security Fast Track", org: "KISA", year: "2024", logo: `${IMAGE_BASE}/graphics/cert-kisa.png`, logoAlt: "KISA logo" },
    { text: "GS Certification", org: "TTA", year: "2025", logo: `${IMAGE_BASE}/graphics/cert-gs.png`, logoAlt: "GS Certification logo" },
    { text: "ISO/IEC 27001", org: "ISO", year: "2026", logo: `${IMAGE_BASE}/graphics/cert-iso.png`, logoAlt: "ISO 27001 logo" },
    { text: "ISO/IEC 42001", org: "ISO", year: "2026", logo: `${IMAGE_BASE}/graphics/cert-iso.png`, logoAlt: "ISO 42001 logo" },
    { text: "Info Security Fast Track", org: "KISA", year: "2024", logo: `${IMAGE_BASE}/graphics/cert-kisa.png`, logoAlt: "KISA logo" },
  ]

  const DEFAULT_CASE1_IMG = `${IMAGE_BASE}/graphics/illustration-security.png`
  const DEFAULT_CASE2_IMG = `${IMAGE_BASE}/graphics/illustration-security.png`
  const DEFAULT_CASE3_IMG = `${IMAGE_BASE}/graphics/illustration-insurance.png`
  const resolvedCase1Img = case1Image || DEFAULT_CASE1_IMG
  const resolvedCase2Img = case2Image || DEFAULT_CASE2_IMG
  const resolvedCase3Img = case3Image || DEFAULT_CASE3_IMG

  const cases = [
    {
      img: resolvedCase1Img,
      imgAlt: "Deutsche Telekom — Global Telco",
      category: case1Category,
      name: case1Name,
      bullet: case1Bullet,
      tag: case1Tag,
      tagType: "success",
    },
    {
      img: resolvedCase2Img,
      imgAlt: "Claroty — Global OT Security",
      category: case2Category,
      name: case2Name,
      bullet: case2Bullet,
      tag: case2Tag,
      tagType: "purple",
    },
    {
      img: resolvedCase3Img,
      imgAlt: "DB Insurance, EUMC, Shin&Kim — Finance, Health, Legal",
      category: case3Category,
      name: case3Name,
      bullet: case3Bullet,
      tag: case3Tag,
      tagType: "success",
    },
  ]

  const kpis = [
    { number: kpi1Number, label: kpi1Label },
    { number: kpi2Number, label: kpi2Label },
    { number: kpi3Number, label: kpi3Label },
    { number: kpi4Number, label: kpi4Label },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s6-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s6-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
        }

        .s6-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        @container (max-width: 767px) {
          .s6-section-header { text-align: left; }
        }

        .s6-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s6-section-title { font-size: 20px; }
        }

        .s6-brand { color: ${P.brandPurple}; }

        /* Case Study List (1-col) */
        .s6-case-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .s6-case-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: row;
          padding: 0;
          overflow: hidden;
        }

        @container (max-width: 767px) {
          .s6-case-card { flex-direction: column; }
        }

        .s6-case-left {
          padding: 32px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-right: 1px solid ${P.borderDefault};
          flex-shrink: 0;
          min-width: 280px;
        }

        @container (max-width: 767px) {
          .s6-case-left {
            border-right: none;
            border-bottom: 1px solid ${P.borderDefault};
            min-width: 0;
            padding: 24px;
          }
        }

        .s6-case-left-image {
          width: 72px;
          height: 72px;
          object-fit: contain;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .s6-case-left-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .s6-case-category {
          font-size: 11px;
          color: ${P.textSecondary};
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .s6-case-name {
          font-size: 18px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.3;
        }

        .s6-case-right {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
          justify-content: center;
        }

        @container (max-width: 767px) {
          .s6-case-right { padding: 24px; }
        }

        .s6-bullet {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .s6-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-bullet-icon::before {
          content: "•";
          color: ${P.brandPurple};
          font-size: 20px;
          line-height: 1;
        }

        .s6-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .s6-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }

        .s6-tag-success { background-color: rgba(14,130,76,0.12); color: #0e824c; }
        .s6-tag-purple  { background-color: ${P.brandPurpleLt}; color: ${P.brandPurple}; }

        /* KPI Band */
        .s6-kpi-wrap { margin-top: 48px; }

        .s6-kpi-band {
          border-radius: 40px;
          padding: 48px 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          justify-items: center;
          position: relative;
          overflow: hidden;
          background-color: #1a6fe8;
          background-image: url('${resolvedKpiBg}');
          background-size: cover; background-position: center;
        }

        @container (max-width: 1023px) {
          .s6-kpi-band { grid-template-columns: repeat(2, 1fr); }
        }

        @container (max-width: 767px) {
          .s6-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; }
        }

        .s6-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }

        .s6-kpi-number {
          font-family: "DM Sans", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: ${P.white};
        }

        .s6-kpi-label {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }

        /* KPI actions */
        .s6-kpi-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        @container (max-width: 767px) {
          .s6-kpi-actions { flex-direction: column; align-items: center; }
        }

        .s6-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: 1px solid ${P.borderDefault};
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background-color: transparent;
          color: ${P.textPrimary};
        }

        .s6-btn-secondary-sm {
          font-size: 14px;
          padding: 8px 16px;
        }

        .s6-btn-secondary:hover { background-color: ${P.surfaceLight}; }

        /* Cert Grid Marquee */
        .s6-cert-wrap { margin-top: 48px; }

        .s6-cert-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }

        .s6-cert-track {
          display: flex;
          gap: 24px;
          align-items: stretch;
          width: max-content;
          animation: s6-marquee 40s linear infinite;
        }

        .s6-cert-track:hover { animation-play-state: paused; }

        @keyframes s6-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .s6-cert-card {
          background-color: ${P.surfaceWhite};
          border: 1px solid ${P.borderDefault};
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

        .s6-cert-group {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${P.brandPurple};
          margin-bottom: 4px;
        }

        .s6-cert-wreath {
          position: relative;
          width: 160px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s6-cert-wreath-left,
        .s6-cert-wreath-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 34%;
          object-fit: contain;
        }

        .s6-cert-wreath-left  { left: -6px; object-position: right; }
        .s6-cert-wreath-right { right: -6px; object-position: left; }

        .s6-cert-wreath-text {
          position: relative;
          z-index: 1;
          font-size: 14px;
          font-weight: 700;
          color: ${P.textPrimary};
          text-align: center;
          line-height: 1.2;
          max-width: 90px;
        }

        .s6-cert-org  { font-size: 12px; color: ${P.textSecondary}; }
        .s6-cert-year { font-size: 12px; color: ${P.textTertiary}; font-family: "Fragment Mono", monospace; }

        .s6-cert-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-top: auto;
          margin-bottom: -10px;
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section" id="section-proof">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 className="s6-section-title">
                {sectionTitle} <span className="s6-brand">{sectionTitleHighlight}</span>
              </h2>
            </div>

            <div className="s6-case-grid">
              {cases.map((c, i) => (
                <article key={i} className="s6-case-card">
                  <div className="s6-case-left">
                    <img src={c.img} alt={c.imgAlt} className="s6-case-left-image" width={72} height={72} />
                    <div className="s6-case-left-text">
                      <span className="s6-case-category">{c.category}</span>
                      <strong className="s6-case-name">{c.name}</strong>
                    </div>
                  </div>
                  <div className="s6-case-right">
                    <ul className="s6-bullet">
                      <li className="s6-bullet-item">
                        <span className="s6-bullet-icon" aria-hidden="true"></span>
                        <span>{c.bullet}</span>
                      </li>
                    </ul>
                    <div className="s6-tags">
                      <span className={`s6-tag s6-tag-${c.tagType}`}>{c.tag}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="s6-kpi-wrap">
              <div className="s6-kpi-band">
                {kpis.map((k, i) => (
                  <div key={i} className="s6-kpi-item">
                    <div className="s6-kpi-number">{k.number}</div>
                    <div className="s6-kpi-label">{k.label}</div>
                  </div>
                ))}
              </div>

              <div className="s6-kpi-actions">
                <a href={actionLink1Href} className="s6-btn-secondary">{actionLink1Label}</a>
                <a href={actionLink2Href} className="s6-btn-secondary s6-btn-secondary-sm" target="_blank" rel="noopener noreferrer">{actionLink2Label}</a>
              </div>
            </div>

            <div className="s6-cert-wrap">
              <div className="s6-cert-grid" aria-label="Certifications">
                <div className="s6-cert-track">
                  {CERTS.map((cert, i) => (
                    <div key={i} className="s6-cert-card">
                      <span className="s6-cert-group">Certifications</span>
                      <div className="s6-cert-wreath">
                        <img src={`${IMAGE_BASE}/graphics/cert-left.png`} alt="" className="s6-cert-wreath-left" aria-hidden={true} width={54} height={120} />
                        <span className="s6-cert-wreath-text">{cert.text}</span>
                        <img src={`${IMAGE_BASE}/graphics/cert-right.png`} alt="" className="s6-cert-wreath-right" aria-hidden={true} width={54} height={120} />
                      </div>
                      <span className="s6-cert-org">{cert.org}</span>
                      <span className="s6-cert-year">{cert.year}</span>
                      <img src={cert.logo} alt={cert.logoAlt} className="s6-cert-logo" width={60} height={60} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_Proof, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Deployed across" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "regulated industries." },
  case1Category: { type: ControlType.String, title: "Case 1 Category", defaultValue: "GLOBAL TELCO" },
  case1Name: { type: ControlType.String, title: "Case 1 Name", defaultValue: "Deutsche Telekom" },
  case1Bullet: { type: ControlType.String, title: "Case 1 Bullet", defaultValue: "Top 12 finalist in T Challenge 2026. Evaluated for enterprise AI data protection across customer care, network ops, and billing workflows at telco scale." },
  case1Image: { type: ControlType.Image, title: "Case 1 Image" },
  case1Tag: { type: ControlType.String, title: "Case 1 Tag", defaultValue: "T Challenge 2026 — Top 12" },
  case2Category: { type: ControlType.String, title: "Case 2 Category", defaultValue: "GLOBAL OT SECURITY" },
  case2Name: { type: ControlType.String, title: "Case 2 Name", defaultValue: "Claroty" },
  case2Bullet: { type: ControlType.String, title: "Case 2 Bullet", defaultValue: "OT infrastructure AI with sensitive operational data encapsulated at the data layer. AI processes tasks without exposure of raw OT identifiers." },
  case2Image: { type: ControlType.Image, title: "Case 2 Image" },
  case2Tag: { type: ControlType.String, title: "Case 2 Tag", defaultValue: "OT Infrastructure AI" },
  case3Category: { type: ControlType.String, title: "Case 3 Category", defaultValue: "FINANCE · HEALTH · LEGAL" },
  case3Name: { type: ControlType.String, title: "Case 3 Name", defaultValue: "DB Insurance · EUMC · Shin&Kim" },
  case3Bullet: { type: ControlType.String, title: "Case 3 Bullet", defaultValue: "Claim, clinical, and contract data encapsulated and restored during AI-assisted document workflows across Korean financial services, medical research, and legal practice." },
  case3Image: { type: ControlType.Image, title: "Case 3 Image" },
  case3Tag: { type: ControlType.String, title: "Case 3 Tag", defaultValue: "Finance · Health · Legal" },
  kpi1Number: { type: ControlType.String, title: "KPI 1 Number", defaultValue: "98.1%" },
  kpi1Label: { type: ControlType.String, title: "KPI 1 Label", defaultValue: "Detection Accuracy" },
  kpi2Number: { type: ControlType.String, title: "KPI 2 Number", defaultValue: "99.14%" },
  kpi2Label: { type: ControlType.String, title: "KPI 2 Label", defaultValue: "Restoration Accuracy" },
  kpi3Number: { type: ControlType.String, title: "KPI 3 Number", defaultValue: "<0.12s" },
  kpi3Label: { type: ControlType.String, title: "KPI 3 Label", defaultValue: "Per Page" },
  kpi4Number: { type: ControlType.String, title: "KPI 4 Number", defaultValue: "Any" },
  kpi4Label: { type: ControlType.String, title: "KPI 4 Label", defaultValue: "LLM / Model" },
  actionLink1Label: { type: ControlType.String, title: "Action 1 Label", defaultValue: "See all production cases" },
  actionLink1Href: { type: ControlType.String, title: "Action 1 Href", defaultValue: "/proof" },
  actionLink2Label: { type: ControlType.String, title: "Action 2 Label", defaultValue: "Solutions by industry at llmcapsule.ai" },
  actionLink2Href: { type: ControlType.String, title: "Action 2 Href", defaultValue: "https://llmcapsule.ai/solutions" },
  kpiBgImage: { type: ControlType.Image, title: "KPI Band BG Image" },
})
