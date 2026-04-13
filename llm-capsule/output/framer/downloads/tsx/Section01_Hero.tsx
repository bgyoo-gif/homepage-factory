import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
}

interface Props {
  title?: string
  titleHighlight?: string
  description?: string
}

export default function Section01_Hero({
  title = "Documentation &",
  titleHighlight = "Downloads",
  description = "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation.",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${title} ${titleHighlight}`,
    "description": description,
    "url": "https://llmcapsule.ai/resources/downloads",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
          box-sizing: border-box;
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
        .s1-hero {
          text-align: center;
          max-width: 1080px;
          margin: 0 auto;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: balance;
        }
        .s1-title-highlight {
          color: ${PALETTE.brandSecondary};
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 48px; }
          .s1-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 64px; }
          .s1-description { max-width: 1080px; }
        }
      `}</style>
      <section className="s1-section" id="section-1">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title">
                {title} <span className="s1-title-highlight">{titleHighlight}</span>
              </h1>
              <p className="s1-description">{description}</p>
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
    title: "Title",
    defaultValue: "Documentation &",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Downloads",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Architecture briefs, technical documentation, and deployment guides for enterprise AI enablement evaluation.",
    displayTextArea: true,
  },
})
