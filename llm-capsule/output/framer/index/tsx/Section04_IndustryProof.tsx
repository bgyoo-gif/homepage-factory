import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  industryHeading?: string
  industrySubheading?: string
}

export default function Section04_IndustryProof({
  industryHeading = "Enabling AI adoption across regulated industries where sensitive data was the blocker",
  industrySubheading = "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows — turning blocked projects into production deployments.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

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
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        .idx-inner { width: 100%; container-type: inline-size; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--md  { padding: 12px 32px; font-size: 16px; }
        .idx-root .idx-btn--primary { background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%); color: ${P.white}; }
        .idx-root .idx-btn--primary:hover { opacity: 0.88; }
        .idx-root .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-root .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

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

        .idx-feature-grid {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 40px; padding: 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 48px;
        }
        .idx-feature-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          text-align: center; cursor: pointer; transition: opacity 0.2s; text-decoration: none;
        }
        .idx-feature-item:hover { opacity: 0.7; }
        .idx-feature-item__icon { margin-bottom: 4px; color: ${P.brandSecondary}; }
        .idx-feature-item__title { font-size: 18px; font-weight: 600; color: ${P.textPrimary}; }
        @container (max-width: 767px) { .idx-feature-grid { grid-template-columns: repeat(2, 1fr); padding: 24px; gap: 24px; } }

        .idx-center-cta { text-align: center; margin-top: 32px; }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-4" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{industryHeading}</h2>
                <p className="idx-section-header__desc">{industrySubheading}</p>
              </div>

              <div className="idx-feature-grid">
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg></div>
                  <span className="idx-feature-item__title">Public Sector</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
                  <span className="idx-feature-item__title">Finance &amp; Insurance</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 0 1 12 6.006a5 5 0 0 1 7.5 6.572"/><path d="M12 6V2"/><path d="M8 2h8"/></svg></div>
                  <span className="idx-feature-item__title">Healthcare</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <span className="idx-feature-item__title">Legal</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg></div>
                  <span className="idx-feature-item__title">Telecom</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="idx-feature-item__title">Network Security</span>
                </a>
              </div>

              <div className="idx-center-cta">
                <a href="/solutions" className="idx-btn idx-btn--secondary idx-btn--md">See industry solutions</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section04_IndustryProof, {
  industryHeading:    { type: ControlType.String, title: "Industry Heading",    defaultValue: "Enabling AI adoption across regulated industries where sensitive data was the blocker", displayTextArea: true },
  industrySubheading: { type: ControlType.String, title: "Industry Subheading", defaultValue: "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows — turning blocked projects into production deployments.", displayTextArea: true },
})
