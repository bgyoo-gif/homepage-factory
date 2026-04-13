import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
  breadcrumb1?: string
  breadcrumb2?: string
  breadcrumb3?: string
  breadcrumb4?: string
  breadcrumb1Href?: string
  breadcrumb2Href?: string
  breadcrumb3Href?: string
}

export default function Section01_Hero({
  title = "Enterprise AI Document Processing",
  description = "How to process sensitive enterprise documents through AI with structure-preserving protection and restorable outputs for AI document security.",
  breadcrumb1 = "Home",
  breadcrumb2 = "Resources",
  breadcrumb3 = "Learn",
  breadcrumb4 = "Enterprise AI Document Processing",
  breadcrumb1Href = "https://llmcapsule.ai/",
  breadcrumb2Href = "https://llmcapsule.ai/resources",
  breadcrumb3Href = "https://llmcapsule.ai/resources/learn",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: breadcrumb1, item: breadcrumb1Href },
              { "@type": "ListItem", position: 2, name: breadcrumb2, item: breadcrumb2Href },
              { "@type": "ListItem", position: 3, name: breadcrumb3, item: breadcrumb3Href },
              { "@type": "ListItem", position: 4, name: breadcrumb4, item: "https://llmcapsule.ai/resources/learn/enterprise-ai-document-processing" },
            ],
          }),
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
          overflow: hidden;
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
          color: #5690D4;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: #1821E8; }
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
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>
      <section className="s1-section" id="section-hero">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href={breadcrumb1Href} className="s1-breadcrumb__link">{breadcrumb1}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href={breadcrumb2Href} className="s1-breadcrumb__link">{breadcrumb2}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href={breadcrumb3Href} className="s1-breadcrumb__link">{breadcrumb3}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">{breadcrumb4}</span>
            </nav>
            <h1 className="s1-title">{title}</h1>
            <p className="s1-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Enterprise AI Document Processing" },
  description: { type: ControlType.String, title: "Description", defaultValue: "How to process sensitive enterprise documents through AI with structure-preserving protection and restorable outputs for AI document security." },
  breadcrumb1: { type: ControlType.String, title: "Breadcrumb 1", defaultValue: "Home" },
  breadcrumb2: { type: ControlType.String, title: "Breadcrumb 2", defaultValue: "Resources" },
  breadcrumb3: { type: ControlType.String, title: "Breadcrumb 3", defaultValue: "Learn" },
  breadcrumb4: { type: ControlType.String, title: "Breadcrumb 4", defaultValue: "Enterprise AI Document Processing" },
  breadcrumb1Href: { type: ControlType.String, title: "Breadcrumb 1 URL", defaultValue: "https://llmcapsule.ai/" },
  breadcrumb2Href: { type: ControlType.String, title: "Breadcrumb 2 URL", defaultValue: "https://llmcapsule.ai/resources" },
  breadcrumb3Href: { type: ControlType.String, title: "Breadcrumb 3 URL", defaultValue: "https://llmcapsule.ai/resources/learn" },
})
