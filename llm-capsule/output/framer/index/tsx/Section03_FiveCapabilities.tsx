import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  success:        "#0e824c",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  neutral025:     "#f7f7f7",
  neutral200:     "#e0e0e0",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  capHeading?: string
  capSubheading?: string
  card1Badge?: string
  card1Title?: string
  card1Description?: string
  card2Badge?: string
  card2Title?: string
  card2Description?: string
  card3Badge?: string
  card3Title?: string
  card3Description?: string
  card4Badge?: string
  card4Title?: string
  card4Description?: string
  card5Badge?: string
  card5Title?: string
  card5Description?: string
  bannerText?: string
  bannerBtn1Label?: string
  bannerBtn2Label?: string
  bannerBtn3Label?: string
  probBannerBgImage?: string
}

export default function Section03_FiveCapabilities({
  capHeading = "Five capabilities that remove every barrier to enterprise AI",
  capSubheading = "Other tools either block AI usage or destroy document context. LLM Capsule solves both — here's how.",
  card1Badge = "CORE",
  card1Title = "Your data never leaves",
  card1Description = "Security team blocking AI adoption? With zero exposure, AI only sees safe placeholders. Even if the LLM provider logs everything, zero enterprise data is exposed.",
  card2Badge = "CORE",
  card2Title = "Get real results back",
  card2Description = "AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, and client deliverables. No manual reconstruction.",
  card3Badge = "CORE",
  card3Title = "You define what's sensitive",
  card3Description = "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, and any business-specific confidential markers — tailored to your organization.",
  card4Badge = "+1",
  card4Title = "Documents stay readable to AI",
  card4Description = "Tables, cross-references, and layouts survive the process intact. AI understands full document context — not broken fragments that produce useless outputs.",
  card5Badge = "+2",
  card5Title = "Use any AI model, anytime",
  card5Description = "ChatGPT today, Claude tomorrow, on-premise LLM next month. Switch freely — no re-engineering, no vendor lock-in. Protection stays consistent across every model.",
  bannerText = "LLM Capsule is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI — making enterprise AI adoption possible without compromise.",
  bannerBtn1Label = "See Product",
  bannerBtn2Label = "View Architecture",
  bannerBtn3Label = "Read the capsule model",
  probBannerBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-sky-lavender.png",
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
        .idx-root img { max-width: 100%; display: block; }
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
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
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

        .idx-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px)  { .idx-card-grid--2col { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @container (min-width: 768px)  { .idx-card-grid--3col { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @container (min-width: 1024px) { .idx-card-grid--3col { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .idx-spaced-top { margin-top: 24px; }

        .idx-card {
          background-color: ${P.surfaceWhite}; border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .idx-card { padding: 32px; } }
        .idx-card__icon { margin-bottom: 12px; color: ${P.brandSecondary}; }
        .idx-card__badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-radius: 9999px;
          font-size: 12px; font-weight: 600; line-height: 1;
          margin-bottom: 12px; width: fit-content;
        }
        .idx-card__badge--brand { color: ${P.brandSecondary}; border: 1px solid ${P.brandSecondary}; }
        .idx-card__badge--gray  { color: ${P.textSecondary}; border: 1px solid ${P.neutral200}; background-color: ${P.neutral025}; }
        .idx-card__title {
          font-size: 24px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; margin-bottom: 12px;
        }
        .idx-card__desc { font-size: 14px; color: ${P.textSecondary}; line-height: 1.7; flex: 1; }

        .idx-banner-full {
          padding: 48px 24px; text-align: center; border-radius: 40px;
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-banner-full::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-banner-full > * { position: relative; z-index: 1; }
        .idx-banner-full p {
          font-size: 16px; color: ${P.textPrimary}; line-height: 1.7;
          max-width: 1080px; margin: 0 auto;
        }
        .idx-banner-full__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px;
        }
        @container (max-width: 767px) { .idx-banner-full { background-image: none !important; } }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-3" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{capHeading}</h2>
                <p className="idx-section-header__desc">{capSubheading}</p>
              </div>

              <div className="idx-card-grid idx-card-grid--3col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">{card1Badge}</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="idx-card__title">{card1Title}</h3>
                  <p className="idx-card__desc">{card1Description}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">{card2Badge}</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                  </div>
                  <h3 className="idx-card__title">{card2Title}</h3>
                  <p className="idx-card__desc">{card2Description}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">{card3Badge}</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  </div>
                  <h3 className="idx-card__title">{card3Title}</h3>
                  <p className="idx-card__desc">{card3Description}</p>
                </div>
              </div>

              <div className="idx-card-grid idx-card-grid--2col idx-spaced-top">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">{card4Badge}</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h3 className="idx-card__title">{card4Title}</h3>
                  <p className="idx-card__desc">{card4Description}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">{card5Badge}</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                  </div>
                  <h3 className="idx-card__title">{card5Title}</h3>
                  <p className="idx-card__desc">{card5Description}</p>
                </div>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: `url('${probBannerBgImage}')` }}>
                <p>{bannerText}</p>
                <div className="idx-banner-full__actions">
                  <a href="/product" className="idx-btn idx-btn--secondary idx-btn--md">{bannerBtn1Label}</a>
                  <a href="/architecture" className="idx-btn idx-btn--secondary idx-btn--md">{bannerBtn2Label}</a>
                  <a href="/resources/learn/what-is-ai-data-capsule" className="idx-btn idx-btn--secondary idx-btn--sm">{bannerBtn3Label}</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section03_FiveCapabilities, {
  capHeading:       { type: ControlType.String, title: "Capabilities Heading",    defaultValue: "Five capabilities that remove every barrier to enterprise AI", displayTextArea: true },
  capSubheading:    { type: ControlType.String, title: "Capabilities Subheading", defaultValue: "Other tools either block AI usage or destroy document context. LLM Capsule solves both — here's how.", displayTextArea: true },
  card1Badge:       { type: ControlType.String, title: "Card 1 Badge",       defaultValue: "CORE" },
  card1Title:       { type: ControlType.String, title: "Card 1 Title",       defaultValue: "Your data never leaves" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Security team blocking AI adoption? With zero exposure, AI only sees safe placeholders. Even if the LLM provider logs everything, zero enterprise data is exposed.", displayTextArea: true },
  card2Badge:       { type: ControlType.String, title: "Card 2 Badge",       defaultValue: "CORE" },
  card2Title:       { type: ControlType.String, title: "Card 2 Title",       defaultValue: "Get real results back" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, and client deliverables. No manual reconstruction.", displayTextArea: true },
  card3Badge:       { type: ControlType.String, title: "Card 3 Badge",       defaultValue: "CORE" },
  card3Title:       { type: ControlType.String, title: "Card 3 Title",       defaultValue: "You define what's sensitive" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, and any business-specific confidential markers — tailored to your organization.", displayTextArea: true },
  card4Badge:       { type: ControlType.String, title: "Card 4 Badge",       defaultValue: "+1" },
  card4Title:       { type: ControlType.String, title: "Card 4 Title",       defaultValue: "Documents stay readable to AI" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "Tables, cross-references, and layouts survive the process intact. AI understands full document context — not broken fragments that produce useless outputs.", displayTextArea: true },
  card5Badge:       { type: ControlType.String, title: "Card 5 Badge",       defaultValue: "+2" },
  card5Title:       { type: ControlType.String, title: "Card 5 Title",       defaultValue: "Use any AI model, anytime" },
  card5Description: { type: ControlType.String, title: "Card 5 Description", defaultValue: "ChatGPT today, Claude tomorrow, on-premise LLM next month. Switch freely — no re-engineering, no vendor lock-in. Protection stays consistent across every model.", displayTextArea: true },
  bannerText:       { type: ControlType.String, title: "Banner Text",        defaultValue: "LLM Capsule is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI — making enterprise AI adoption possible without compromise.", displayTextArea: true },
  bannerBtn1Label:  { type: ControlType.String, title: "Banner Btn 1",       defaultValue: "See Product" },
  bannerBtn2Label:  { type: ControlType.String, title: "Banner Btn 2",       defaultValue: "View Architecture" },
  bannerBtn3Label:  { type: ControlType.String, title: "Banner Btn 3",       defaultValue: "Read the capsule model" },
  probBannerBgImage: { type: ControlType.Image, title: "Banner BG Image" },
})
