import { addPropertyControls, ControlType } from "framer"

const BRAND = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",
  neutral850:    "#141414",
  neutral800:    "#171719",
  neutral700:    "#303135",
  neutral150:    "#e6e7e9",
  surfaceLight:  "#f7f7f7",
  surfaceWhite:  "#ffffff",
}

interface Props {
  headingTerms?: string
  term1Label?: string
  term1Href?: string
  term2Label?: string
  term2Href?: string
  term3Label?: string
  term3Href?: string
  headingPages?: string
  link1Label?: string
  link1Href?: string
  link2Label?: string
  link2Href?: string
  link3Label?: string
  link3Href?: string
  link4Label?: string
  link4Href?: string
}

export default function Section05_RelatedTerms({
  headingTerms = "Related Terms",
  term1Label = "Restoration",
  term1Href = "/resources/glossary/restoration",
  term2Label = "Enterprise Context Control",
  term2Href = "/resources/glossary/enterprise-context-control",
  term3Label = "Secure LLM Usage",
  term3Href = "/resources/glossary/secure-llm-usage",
  headingPages = "Related Pages",
  link1Label = "Product Overview",
  link1Href = "/product",
  link2Label = "Architecture",
  link2Href = "/architecture",
  link3Label = "Trust & Compliance",
  link3Href = "/trust",
  link4Label = "Request a Demo",
  link4Href = "/request-a-demo",
}: Props) {
  const terms = [
    { label: term1Label, href: term1Href },
    { label: term2Label, href: term2Href },
    { label: term3Label, href: term3Href },
  ]

  const links = [
    {
      label: link1Label,
      href: link1Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      label: link2Label,
      href: link2Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      label: link3Label,
      href: link3Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: link4Label,
      href: link4Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0 60px;
          background-color: ${BRAND.surfaceWhite};
          overflow: hidden;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${BRAND.neutral150};
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${BRAND.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s5-brand-color { color: ${BRAND.brandSecondary}; }

        /* Related Terms buttons */
        .s5-related-terms {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .s5-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          font-size: 14px;
          background-color: transparent;
          color: ${BRAND.textPrimary};
          border: 1px solid ${BRAND.neutral150};
        }
        .s5-btn:hover { background-color: ${BRAND.surfaceLight}; }

        /* Section title icon */
        .s5-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s5-section-title-icon__icon {
          color: ${BRAND.brandSecondary};
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }
        .s5-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${BRAND.textPrimary};
          line-height: 1.2;
        }

        /* Card grid */
        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s5-card-dark {
          background-color: ${BRAND.neutral850};
          border: 1px solid ${BRAND.neutral700};
          color: ${BRAND.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .s5-card-dark:hover { background-color: ${BRAND.neutral800}; }
        .s5-card-dark__icon {
          flex-shrink: 0;
          color: ${BRAND.brandSecondary};
          width: 24px;
          height: 24px;
        }
        .s5-card-dark__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${BRAND.textInverse};
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0; max-width: 1080px; }
          .s5-section-header h2 { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s5-section-header { text-align: left; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                Related <span className="s5-brand-color">Terms</span>
              </h2>
            </div>

            <div className="s5-related-terms">
              {terms.map((term, i) => (
                <a key={i} href={term.href} className="s5-btn">
                  {term.label}
                </a>
              ))}
            </div>

            <div className="s5-section-title-icon">
              <span className="s5-section-title-icon__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="s5-section-title-icon__text">{headingPages}</span>
            </div>

            <div className="s5-card-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s5-card-dark">
                  <span className="s5-card-dark__icon">{link.icon}</span>
                  <span className="s5-card-dark__title">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_RelatedTerms, {
  headingTerms: {
    type: ControlType.String,
    title: "Terms Heading",
    defaultValue: "Related Terms",
  },
  term1Label: { type: ControlType.String, title: "Term 1", defaultValue: "Restoration" },
  term1Href: { type: ControlType.String, title: "Term 1 URL", defaultValue: "/resources/glossary/restoration" },
  term2Label: { type: ControlType.String, title: "Term 2", defaultValue: "Enterprise Context Control" },
  term2Href: { type: ControlType.String, title: "Term 2 URL", defaultValue: "/resources/glossary/enterprise-context-control" },
  term3Label: { type: ControlType.String, title: "Term 3", defaultValue: "Secure LLM Usage" },
  term3Href: { type: ControlType.String, title: "Term 3 URL", defaultValue: "/resources/glossary/secure-llm-usage" },
  headingPages: { type: ControlType.String, title: "Pages Heading", defaultValue: "Related Pages" },
  link1Label: { type: ControlType.String, title: "Link 1", defaultValue: "Product Overview" },
  link1Href: { type: ControlType.String, title: "Link 1 URL", defaultValue: "/product" },
  link2Label: { type: ControlType.String, title: "Link 2", defaultValue: "Architecture" },
  link2Href: { type: ControlType.String, title: "Link 2 URL", defaultValue: "/architecture" },
  link3Label: { type: ControlType.String, title: "Link 3", defaultValue: "Trust & Compliance" },
  link3Href: { type: ControlType.String, title: "Link 3 URL", defaultValue: "/trust" },
  link4Label: { type: ControlType.String, title: "Link 4", defaultValue: "Request a Demo" },
  link4Href: { type: ControlType.String, title: "Link 4 URL", defaultValue: "/request-a-demo" },
})
