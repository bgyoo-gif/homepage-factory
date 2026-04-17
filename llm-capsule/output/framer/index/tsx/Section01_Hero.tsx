import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  neutral100:     "#ececec",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSONLD_ORG = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LLM Capsule",
  "url": "https://llmcapsule.ai",
  "description": "Enterprise AI enablement data layer and plugin by CUBIG. Enable any organization to adopt AI on sensitive enterprise data without exposing original information.",
  "parentOrganization": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
})

const JSONLD_PRODUCT = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LLM Capsule",
  "description": "Enterprise AI enablement data layer and plugin. Enable AI. Protect data. Restore results.",
  "brand": { "@type": "Brand", "name": "CUBIG" },
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does LLM Capsule protect enterprise data during AI processing?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services." },
    },
    {
      "@type": "Question",
      "name": "How is LLM Capsule different from data masking and redaction tools?",
      "acceptedAnswer": { "@type": "Answer", "text": "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically." },
    },
    {
      "@type": "Question",
      "name": "What is the difference between LLM Capsule and prompt security gateways?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prompt security gateways filter at the API level. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward." },
    },
    {
      "@type": "Question",
      "name": "Where can LLM Capsule be deployed?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models." },
    },
    {
      "@type": "Question",
      "name": "What is enterprise AI data protection?",
      "acceptedAnswer": { "@type": "Answer", "text": "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration." },
    },
    {
      "@type": "Question",
      "name": "What certifications does LLM Capsule hold?",
      "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements." },
    },
  ],
})

interface Props {
  heroTitle?: string
  heroDescription?: string
  heroBtn1Label?: string
  heroBtn1Href?: string
  heroBtn4Label?: string
  heroBtn4Href?: string
  heroBgImage?: string
  heroScreenshot?: string
}

export default function Section01_Hero({
  heroTitle = "Use any AI on your real documents — without exposing a single line",
  heroDescription = "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally — AI processes the safe version — then results are restored with your original data. Each organization defines what counts as sensitive.",
  heroBtn1Label = "Request a Demo",
  heroBtn1Href = "/request-a-demo",
  heroBtn4Label = "Available on AWS Marketplace",
  heroBtn4Href = "https://aws.amazon.com/marketplace",
  heroBgImage = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/bg-index-hero.webp",
  heroScreenshot = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/screenshot-index-hero.webp",
}: Props) {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_ORG }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_PRODUCT }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root img { max-width: 100%; display: block; }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
        .idx-btn--md  { padding: 12px 32px; font-size: 16px; }
        .idx-root .idx-btn--primary { background: ${P.gradientBrand}; color: ${P.white}; }
        .idx-root .idx-btn--primary:hover { opacity: 0.88; }
        .idx-root .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-root .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .idx-hero-section { padding: 100px 0 0; background-color: ${P.surfaceWhite}; width: 100%; }
        .idx-hero { text-align: center; margin: 0 auto; }
        .idx-hero__title {
          font-family: "DM Sans", sans-serif; font-size: 32px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 12px;
        }
        @container (min-width: 768px)  { .idx-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .idx-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .idx-hero__title { font-size: 64px; } }
        .idx-hero__desc {
          font-size: 18px; color: ${P.textSecondary}; line-height: 1.7;
          max-width: 100%; margin: 0 auto 16px;
        }
        @container (min-width: 1024px) { .idx-hero__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-hero__desc { max-width: 1080px; } }
        .idx-hero__frame {
          margin-top: 32px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${P.neutral100};
          background-image: url('${heroBgImage}');
          background-size: cover; background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .idx-hero__frame {
            border-radius: 16px 16px 0 0;
            padding: 16px 16px 0;
            background-image: none;
            background-color: transparent;
          }
        }
        .idx-hero__screenshot { overflow: hidden; background: ${P.surfaceWhite}; }
        .idx-hero__screenshot img { width: 100%; display: block; }
        .idx-hero__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
          margin-top: 20px; padding-bottom: 64px;
        }
        @container (max-width: 767px) {
          .idx-hero__actions { flex-direction: column; align-items: center; }
          .idx-hero__actions .idx-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-1" className="idx-hero-section">
            <div className="idx-container">
              <div className="idx-hero">
                <h1 className="idx-hero__title">{heroTitle}</h1>
                <p className="idx-hero__desc">{heroDescription}</p>
              </div>
              <div className="idx-hero__frame">
                <div className="idx-hero__screenshot">
                  <img
                    src={heroScreenshot}
                    alt="LLM Capsule Dashboard"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="idx-hero__actions">
                <a href={heroBtn1Href} className="idx-btn idx-btn--primary idx-btn--md">{heroBtn1Label}</a>
                <a href={heroBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">{heroBtn4Label}</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  heroTitle:       { type: ControlType.String, title: "Hero Title",       defaultValue: "Use any AI on your real documents — without exposing a single line", displayTextArea: true },
  heroDescription: { type: ControlType.String, title: "Hero Description", defaultValue: "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally — AI processes the safe version — then results are restored with your original data. Each organization defines what counts as sensitive.", displayTextArea: true },
  heroBtn1Label:   { type: ControlType.String, title: "Hero Btn 1",       defaultValue: "Request a Demo" },
  heroBtn1Href:    { type: ControlType.String, title: "Hero Btn 1 URL",   defaultValue: "/request-a-demo" },
  heroBtn4Label:   { type: ControlType.String, title: "Hero Btn 4",       defaultValue: "Available on AWS Marketplace" },
  heroBtn4Href:    { type: ControlType.String, title: "Hero Btn 4 URL",   defaultValue: "https://aws.amazon.com/marketplace" },
  heroBgImage:     { type: ControlType.Image,  title: "Hero Background Image" },
  heroScreenshot:  { type: ControlType.Image,  title: "Hero Screenshot Image" },
})
