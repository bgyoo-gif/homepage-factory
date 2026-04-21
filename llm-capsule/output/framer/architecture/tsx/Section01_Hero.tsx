import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
}

interface Props {
  title?: string
  titleHighlight?: string
  titleSuffix?: string
  description?: string
  productName?: string
}

export default function Section01_Hero({
  title = "AI Enablement",
  titleHighlight = "Architecture",
  titleSuffix = "for Enterprise AI",
  description = "LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 100px 0 0;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
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
          max-width: 1080px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
          margin-bottom: 12px;
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

        .s1-title-highlight {
          color: ${PALETTE.brandSecondary};
        }
        .s1-title-suffix {
          color: ${PALETTE.textPrimary};
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin-bottom: 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (min-width: 1024px) {
          .s1-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-description { max-width: 1080px; }
        }
        .s1-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
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
              { "@type": "ListItem", position: 2, name: "Architecture", item: "https://llmcapsule.ai/architecture" },
            ],
          }),
        }}
      />

      <section className="s1-section" id="section-1">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {title}{" "}
                <span className="s1-title-highlight">{titleHighlight}</span>
                {" "}{titleSuffix}
              </h1>
              <p className="s1-description">
                <span className="s1-product-name">{productName}</span>{" "}
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
    title: "Title",
    defaultValue: "AI Enablement",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Architecture",
  },
  titleSuffix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "for Enterprise AI",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
