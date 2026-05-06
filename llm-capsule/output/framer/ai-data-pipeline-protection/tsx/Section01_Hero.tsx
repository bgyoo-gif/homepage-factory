import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
  brandLight:     "#eeebfe",
  neutral900: "#0f1130",
  neutral800: "#0f1130",
  neutral700: "#1b1d4a",
  neutral500: "#3a3d5e",
  neutral400: "#6b7280",
  neutral200: "#e5e7eb",
  neutral150: "#e5e7eb",
  neutral100: "#f7f8fb",
  neutral050: "#f7f8fb",
  neutral025: "#f7f8fb",
  white: "#ffffff",
  textPrimary:   "#0f1130",
  textSecondary: "#3a3d5e",
  textTertiary:  "#6b7280",
  borderDefault: "#e5e7eb",
  surfaceWhite:  "#ffffff",
}

interface Props {
  title?: string
  description?: string
  breadcrumbHome?: string
  breadcrumbResources?: string
  breadcrumbLearn?: string
  breadcrumbCurrent?: string
}

export default function Section01_Hero({
  title = "AI Data Pipeline Protection",
  description = "Enabling enterprise AI at every stage of the processing pipeline — ingestion, encapsulation, processing, restoration, and delivery.",
  breadcrumbHome = "Home",
  breadcrumbResources = "Resources",
  breadcrumbLearn = "Learn",
  breadcrumbCurrent = "AI Data Pipeline Protection",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          overflow: hidden;
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }
        

        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 14px;
          color: ${P.brandSecondary};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 14px;
          color: ${P.textTertiary};
        }
        .s1-breadcrumb__current {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 14px;
          color: ${P.textTertiary};
        }

        .s1-title {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s1-title { font-size: 36px; } }
        @container (min-width: 1024px) { .s1-title { font-size: 44px; } }
        @container (min-width: 1440px) { .s1-title { font-size: 52px; } }

        .s1-description {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 18px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
              { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
              { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
              { "@type": "ListItem", position: 4, name: "AI Data Pipeline Protection", item: "https://llmcapsule.ai/resources/learn/ai-data-pipeline-protection" },
            ],
          }),
        }}
      />

      <section className="s1-section" id="section-hero">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="https://llmcapsule.ai/" className="s1-breadcrumb__link">{breadcrumbHome}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources" className="s1-breadcrumb__link">{breadcrumbResources}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources/learn" className="s1-breadcrumb__link">{breadcrumbLearn}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">{breadcrumbCurrent}</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h1>
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
    defaultValue: "AI Data Pipeline Protection",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Enabling enterprise AI at every stage of the processing pipeline — ingestion, encapsulation, processing, restoration, and delivery.",
  },
  breadcrumbHome: {
    type: ControlType.String,
    title: "BC: Home",
    defaultValue: "Home",
  },
  breadcrumbResources: {
    type: ControlType.String,
    title: "BC: Resources",
    defaultValue: "Resources",
  },
  breadcrumbLearn: {
    type: ControlType.String,
    title: "BC: Learn",
    defaultValue: "Learn",
  },
  breadcrumbCurrent: {
    type: ControlType.String,
    title: "BC: Current",
    defaultValue: "AI Data Pipeline Protection",
  },
})
