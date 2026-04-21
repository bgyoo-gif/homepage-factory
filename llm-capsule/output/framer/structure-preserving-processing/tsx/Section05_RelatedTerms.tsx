import { addPropertyControls, ControlType } from "framer"

interface RelatedTerm {
  label: string
  href: string
}

interface RelatedPage {
  title: string
  href: string
  iconType: "product" | "architecture" | "trust" | "arrow"
}

interface Props {
  sectionHeading?: string
  relatedTerms?: RelatedTerm[]
  relatedPagesHeading?: string
  relatedPages?: RelatedPage[]
}

const defaultRelatedTerms: RelatedTerm[] = [
  { label: "Restoration", href: "/resources/glossary/restoration" },
  { label: "Enterprise Context Control", href: "/resources/glossary/enterprise-context-control" },
  { label: "Zero Exposure", href: "/resources/glossary/zero-exposure" },
]

const defaultRelatedPages: RelatedPage[] = [
  { title: "Product Overview", href: "/product", iconType: "product" },
  { title: "Architecture", href: "/architecture", iconType: "architecture" },
  { title: "Trust & Compliance", href: "/trust", iconType: "trust" },
  { title: "Request a Demo", href: "/request-a-demo", iconType: "arrow" },
]

function IconProduct() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}

function IconArchitecture() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function IconTrust() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconLink() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function renderIcon(iconType: RelatedPage["iconType"]) {
  switch (iconType) {
    case "product":
      return <IconProduct />
    case "architecture":
      return <IconArchitecture />
    case "trust":
      return <IconTrust />
    case "arrow":
      return <IconArrow />
    default:
      return <IconArrow />
  }
}

export default function Section05_RelatedTerms({
  sectionHeading = "Related Terms",
  relatedTerms = defaultRelatedTerms,
  relatedPagesHeading = "Related Pages",
  relatedPages = defaultRelatedPages,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s5-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s5;
        }

        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container s5 (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }

        @container s5 (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
        }

        @container s5 (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }

        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }

        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }

        @container s5 (min-width: 768px) {
          .s5-section-header h2 { font-size: 22px; }
        }

        @container s5 (min-width: 1024px) {
          .s5-section-header h2 { font-size: 24px; }
        }

        @container s5 (min-width: 1440px) {
          .s5-section-header h2 { font-size: 28px; }
        }

        .s5-text--brand {
          color: #5690D4;
        }

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
          border: 1px solid #e6e7e9;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          font-size: 14px;
          background-color: transparent;
          color: #0f0f0f;
        }

        .s5-btn:hover {
          background-color: #f7f7f7;
        }

        .s5-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .s5-section-title-icon__icon {
          color: #5690D4;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }

        .s5-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }

        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container s5 (min-width: 768px) {
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s5-card--dark {
          background-color: #141414;
          border: 1px solid #303135;
          color: #ffffff;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }

        .s5-card--dark:hover {
          background-color: #171719;
        }

        .s5-card--dark__icon {
          flex-shrink: 0;
          color: #5690D4;
          width: 24px;
          height: 24px;
        }

        .s5-card--dark__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>Related <span className="s5-text--brand">Terms</span></h2>
            </div>

            <div className="s5-related-terms">
              {relatedTerms.map((term, i) => (
                <a key={i} href={term.href} className="s5-btn">
                  {term.label}
                </a>
              ))}
            </div>

            <div className="s5-section-title-icon">
              <span className="s5-section-title-icon__icon">
                <IconLink />
              </span>
              <span className="s5-section-title-icon__text">{relatedPagesHeading}</span>
            </div>

            <div className="s5-card-grid">
              {relatedPages.map((page, i) => (
                <a key={i} href={page.href} className="s5-card--dark">
                  <span className="s5-card--dark__icon">
                    {renderIcon(page.iconType)}
                  </span>
                  <span className="s5-card--dark__title">{page.title}</span>
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
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Related Terms",
  },
  relatedPagesHeading: {
    type: ControlType.String,
    title: "Related Pages Heading",
    defaultValue: "Related Pages",
  },
})
