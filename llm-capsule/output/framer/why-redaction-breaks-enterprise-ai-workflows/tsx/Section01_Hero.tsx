import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
  trackingTight:  "-0.5px",
}

// ─── JSON-LD ────────────────────────────────────────────────────────────────
const jsonLdBreadcrumb = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", position: 4, name: "Why Redaction Breaks Enterprise AI Workflows", item: "https://llmcapsule.ai/resources/learn/why-redaction-breaks-enterprise-ai-workflows" },
  ],
})

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  description?: string
  breadcrumbHome?: string
  breadcrumbResources?: string
  breadcrumbLearn?: string
  breadcrumbCurrent?: string
}

export default function Section01_Hero({
  title = "Why Redaction Breaks Enterprise AI Workflows",
  description = "Masking and redaction tools destroy the data context that AI models need. Enterprise AI requires structure-preserving processing with restorable outputs.",
  breadcrumbHome = "Home",
  breadcrumbResources = "Resources",
  breadcrumbLearn = "Learn",
  breadcrumbCurrent = "Why Redaction Breaks Enterprise AI Workflows",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s1;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${C.brandSecondary};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${C.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-size: 14px;
          color: #9c9c9c;
        }
        .s1-breadcrumb__current {
          font-size: 14px;
          color: #9c9c9c;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          margin-bottom: 16px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container s1 (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 36px; }
        }
        @container s1 (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 44px; }
        }
        @container s1 (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="s1-breadcrumb__link">{breadcrumbHome}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources" className="s1-breadcrumb__link">{breadcrumbResources}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources/learn" className="s1-breadcrumb__link">{breadcrumbLearn}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">{breadcrumbCurrent}</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>{title}</h1>
            <p className="s1-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Why Redaction Breaks Enterprise AI Workflows",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Masking and redaction tools destroy the data context that AI models need. Enterprise AI requires structure-preserving processing with restorable outputs.",
    displayTextArea: true,
  },
  breadcrumbHome: {
    type: ControlType.String,
    title: "Breadcrumb: Home",
    defaultValue: "Home",
  },
  breadcrumbResources: {
    type: ControlType.String,
    title: "Breadcrumb: Resources",
    defaultValue: "Resources",
  },
  breadcrumbLearn: {
    type: ControlType.String,
    title: "Breadcrumb: Learn",
    defaultValue: "Learn",
  },
  breadcrumbCurrent: {
    type: ControlType.String,
    title: "Breadcrumb: Current",
    defaultValue: "Why Redaction Breaks Enterprise AI Workflows",
  },
})
