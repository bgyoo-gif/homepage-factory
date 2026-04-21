import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  surfaceMid:     "#f2f2f2",
  neutral150:     "#e6e7e9",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Product", "item": "https://llmcapsule.ai/product" }
  ]
})

const JSON_LD_PRODUCT = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LLM Capsule",
  "description": "AI enablement data layer and plugin. Zero exposure, local restoration, enterprise context control, structure-preserving processing, and cross-model execution for secure enterprise LLM usage.",
  "brand": { "@type": "Brand", "name": "CUBIG" }
})

interface Props {
  title?: string
  titleBrand?: string
  description?: string
  body?: string
  ctaPrimary?: string
  ctaPrimaryHref?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  ctaGhost?: string
  ctaGhostHref?: string
  screenshotDesc?: string
  screenshotFrameBg?: string
  screenshotImage?: string
}

export default function Section01_Hero({
  title = "The AI enablement",
  titleBrand = "data layer and plugin for enterprise",
  description = "LLM Capsule enables enterprise AI adoption by keeping raw data inside your environment, preserving document structure and business context during AI processing, and restoring usable outputs through local restoration — so enterprise teams can safely use any LLM on real documents in production workflows.",
  body = "Most enterprise AI security tools either block AI usage entirely or strip critical context through masking and redaction, producing outputs that cannot be used in real business processes. LLM Capsule takes a different approach: local encapsulation protects sensitive elements before AI processing, structure-preserving processing maintains document integrity for AI comprehension, local restoration auto-restores AI outputs with original enterprise data, and cross-model execution means no vendor lock-in. This enables enterprise AI enablement on document-heavy workflows including contracts, claims, regulatory filings, medical records, and internal reports.",
  ctaPrimary = "Request a Demo",
  ctaPrimaryHref = "/request-a-demo",
  ctaSecondary = "View Architecture",
  ctaSecondaryHref = "/architecture",
  ctaGhost = "See comparison",
  ctaGhostHref = "#section-11",
  screenshotDesc = "LLM Capsule Dashboard — Real-time encapsulation pipeline with document processing status",
  screenshotFrameBg = `${IMAGE_BASE}/images/bg-gradient-navy-teal.png`,
  screenshotImage = "",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_PRODUCT }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          padding: 0 16px;
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
        }
        .s1-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-family: "DM Sans", sans-serif;
          font-size: 14px; color: ${PALETTE.brandSecondary};
          font-weight: 500; text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${PALETTE.brandPrimary}; }
        .s1-breadcrumb__sep { font-size: 14px; color: #9c9c9c; }
        .s1-breadcrumb__current { font-size: 14px; color: #9c9c9c; }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
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
        .s1-title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 0 16px;
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
        .s1-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 0 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) {
          .s1-body { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-body { max-width: 1080px; }
        }
        .s1-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        @container (max-width: 767px) {
          .s1-actions { flex-direction: column; }
        }
        .s1-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.2s, background-color 0.2s;
          box-sizing: border-box;
        }
        .s1-btn--primary {
          padding: 16px 48px;
          font-size: 18px;
          background: ${PALETTE.gradientBrand};
          color: ${PALETTE.white};
        }
        .s1-btn--primary:hover { opacity: 0.88; }
        .s1-btn--secondary {
          padding: 12px 32px;
          font-size: 16px;
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.borderDefault};
        }
        .s1-btn--secondary:hover { background-color: ${PALETTE.surfaceLight}; }
        .s1-btn--ghost {
          padding: 12px 0;
          font-size: 16px;
          background-color: transparent;
          color: ${PALETTE.brandPrimary};
          border: none;
        }
        .s1-screenshot-frame {
          margin-top: 48px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${PALETTE.surfaceLight};
          background-image: url('${screenshotFrameBg}');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .s1-screenshot-frame {
            border-radius: 24px 24px 0 0;
            background-image: none;
            padding: 24px 24px 0;
          }
        }
        .s1-screenshot-placeholder {
          background-color: ${PALETTE.surfaceMid};
          border: 2px dashed ${PALETTE.borderDefault};
          border-radius: 18px 18px 0 0;
          padding: 80px 24px;
          text-align: center;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .s1-placeholder-icon {
          width: 32px; height: 32px;
          stroke: #9c9c9c; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s1-placeholder-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px; color: #9c9c9c;
          text-transform: uppercase; letter-spacing: 0.08em;
        }
        .s1-placeholder-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px; color: #9c9c9c;
        }
      `}</style>
      <section className="s1-section" id="section-hero">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <nav className="s1-breadcrumb" aria-label="Breadcrumb">
                <a href="/" className="s1-breadcrumb__link">Home</a>
                <span className="s1-breadcrumb__sep">/</span>
                <span className="s1-breadcrumb__current">Product</span>
              </nav>
              <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {title} <span className="s1-title-brand">{titleBrand}</span>
              </h1>
              <p className="s1-description">{description}</p>
              <p className="s1-body">{body}</p>
              <div className="s1-actions">
                <a href={ctaPrimaryHref} className="s1-btn s1-btn--primary">{ctaPrimary}</a>
                <a href={ctaSecondaryHref} className="s1-btn s1-btn--secondary">{ctaSecondary}</a>
                <a href={ctaGhostHref} className="s1-btn s1-btn--ghost">{ctaGhost}</a>
              </div>
              <div className="s1-screenshot-frame">
                {screenshotImage && (
                  <img src={screenshotImage} alt={screenshotDesc} style={{ width: "100%", display: "block" }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title:           { type: ControlType.String, title: "Title",           defaultValue: "The AI enablement" },
  titleBrand:      { type: ControlType.String, title: "Title (brand)",   defaultValue: "data layer and plugin for enterprise" },
  description:     { type: ControlType.String, title: "Description",     defaultValue: "LLM Capsule enables enterprise AI adoption by keeping raw data inside your environment, preserving document structure and business context during AI processing, and restoring usable outputs through local restoration — so enterprise teams can safely use any LLM on real documents in production workflows.", displayTextArea: true },
  body:            { type: ControlType.String, title: "Body",            defaultValue: "Most enterprise AI security tools either block AI usage entirely or strip critical context through masking and redaction, producing outputs that cannot be used in real business processes. LLM Capsule takes a different approach: local encapsulation protects sensitive elements before AI processing, structure-preserving processing maintains document integrity for AI comprehension, local restoration auto-restores AI outputs with original enterprise data, and cross-model execution means no vendor lock-in. This enables enterprise AI enablement on document-heavy workflows including contracts, claims, regulatory filings, medical records, and internal reports.", displayTextArea: true },
  ctaPrimary:      { type: ControlType.String, title: "CTA Primary",     defaultValue: "Request a Demo" },
  ctaPrimaryHref:  { type: ControlType.String, title: "CTA Primary URL", defaultValue: "/request-a-demo" },
  ctaSecondary:    { type: ControlType.String, title: "CTA Secondary",   defaultValue: "View Architecture" },
  ctaSecondaryHref:{ type: ControlType.String, title: "CTA Secondary URL", defaultValue: "/architecture" },
  ctaGhost:        { type: ControlType.String, title: "CTA Ghost",       defaultValue: "See comparison" },
  ctaGhostHref:    { type: ControlType.String, title: "CTA Ghost URL",   defaultValue: "#section-11" },
  screenshotDesc:  { type: ControlType.String, title: "Screenshot desc", defaultValue: "LLM Capsule Dashboard — Real-time encapsulation pipeline with document processing status", displayTextArea: true },
  screenshotFrameBg: { type: ControlType.Image, title: "Screenshot Frame BG" },
  screenshotImage:   { type: ControlType.Image, title: "Screenshot Image" },
})
