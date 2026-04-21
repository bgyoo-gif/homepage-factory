import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleHighlight?: string
  description?: string
  breadcrumbHome?: string
  breadcrumbResources?: string
  breadcrumbCurrent?: string
}

export default function Section01_Hero({
  title = "Enterprise AI ",
  titleHighlight = "Enablement",
  description = "Key terms and definitions for enterprise AI enablement, LLM data privacy, and secure enterprise AI workflows.",
  breadcrumbHome = "Home",
  breadcrumbResources = "Resources",
  breadcrumbCurrent = "Glossary",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 60px;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-hero {
          text-align: center;
        }

        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #9c9c9c;
          margin-bottom: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .s1-breadcrumb__link {
          color: #5690D4;
          text-decoration: none;
          transition: color 0.15s;
        }

        .s1-breadcrumb__link:hover {
          color: #1821E8;
        }

        .s1-breadcrumb__sep {
          color: #e0e0e0;
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        @container (min-width: 768px) {
          .s1-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s1-title { font-size: 48px; }
        }
        @container (min-width: 1440px) {
          .s1-title { font-size: 64px; }
        }

        .s1-title__highlight {
          color: #5690D4;
        }

        .s1-description {
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

        @container (min-width: 1024px) {
          .s1-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-description { max-width: 1080px; }
        }
      `}</style>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
            { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary" }
          ]
        }
      `}</script>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <nav className="s1-breadcrumb" aria-label="Breadcrumb">
                <a href="/" className="s1-breadcrumb__link">{breadcrumbHome}</a>
                <span className="s1-breadcrumb__sep" aria-hidden="true">/</span>
                <a href="/resources" className="s1-breadcrumb__link">{breadcrumbResources}</a>
                <span className="s1-breadcrumb__sep" aria-hidden="true">/</span>
                <span>{breadcrumbCurrent}</span>
              </nav>
              <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>
                {title}<span className="s1-title__highlight">{titleHighlight}</span> Glossary
              </h1>
              <p className="s1-description">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title (before highlight)",
    defaultValue: "Enterprise AI ",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Enablement",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Key terms and definitions for enterprise AI enablement, LLM data privacy, and secure enterprise AI workflows.",
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
  breadcrumbCurrent: {
    type: ControlType.String,
    title: "Breadcrumb: Current",
    defaultValue: "Glossary",
  },
})
