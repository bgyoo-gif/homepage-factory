import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800: "#171719",
  neutral500: "#636363",
  neutral150: "#e6e7e9",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  white:      "#ffffff",
  surfaceWhite: "#ffffff",
}

interface Props {
  title?: string
  titleBrand?: string
  description?: string
}

export default function Section01_Hero({
  title = "vs Synthetic Data Platforms",
  titleBrand = "LLM Capsule",
  description = "Compare LLM Capsule with synthetic data platforms for enterprise AI. Synthetic data replaces real data entirely; LLM Capsule preserves and restores real enterprise data.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 60px;
          background-color: ${PALETTE.surfaceWhite};
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

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-brand {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-title { font-size: 52px; }
        }

        .s1-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
          font-size: 13px; color: #9c9c9c;
        }
        .s1-breadcrumb__link { color: #9c9c9c; text-decoration: none; }
        .s1-breadcrumb__link:hover { color: #636363; }
        .s1-breadcrumb__sep { color: #bababa; }
        .s1-breadcrumb__current { color: #636363; }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Comparison", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": "LLM Capsule vs Synthetic Data Platforms", "item": "https://llmcapsule.ai/resources/learn/llm-capsule-vs-synthetic-data-platforms" }
        ]
      })}} />

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="s1-breadcrumb__link">Home</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources/learn" className="s1-breadcrumb__link">Learn</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">LLM Capsule vs Synthetic Data Platforms</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>
              <span className="s1-brand">{titleBrand}</span> {title}
            </h1>
            <p className="s1-description">
              Compare <span className="s1-brand">{titleBrand}</span> with synthetic data platforms for enterprise AI. {description.replace(/^Compare.*?enterprise AI\. /, "")}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "vs Synthetic Data Platforms",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Compare LLM Capsule with synthetic data platforms for enterprise AI. Synthetic data replaces real data entirely; LLM Capsule preserves and restores real enterprise data.",
    displayTextArea: true,
  },
})
