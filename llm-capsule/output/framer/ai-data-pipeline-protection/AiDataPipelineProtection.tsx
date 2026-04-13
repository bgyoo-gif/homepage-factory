import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  brandLight:     "#B8D4EE",

  neutral900: "#0f0f0f",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral350: "#adadad",
  neutral300: "#bababa",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",

  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",

  success: "#0e824c",
  error:   "#ff3030",

  borderDefault: "#e6e7e9",
  borderStrong:  "#171719",

  surfaceDark:  "#171719",
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",

  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientDark:  "linear-gradient(180deg, #0f0f0f 0%, #171719 100%)",
} as const

// ─── Image base ─────────────────────────────────────────────────────────────
const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Types ───────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section: Problem
  problemHeading?: string
  problemPara1?: string
  problemPara2?: string

  // Section: Explanation
  explanationHeading?: string
  stage1Label?: string
  stage1Text?: string
  stage2Label?: string
  stage2Text?: string
  stage3Label?: string
  stage3Text?: string
  stage4Label?: string
  stage4Text?: string
  stage5Label?: string
  stage5Text?: string
  keyMessageText?: string

  // Section: Enterprise Example
  exampleHeading?: string
  exampleCardTitle?: string
  exampleCardPara1?: string
  exampleCardPara2?: string

  // Section: FAQ
  faqHeading?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string

  // Section: Related
  relatedHeading?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string

  // Section: CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaFootnote1Label?: string
  ctaFootnote1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconLink = () => (
  <svg className="adpp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)
const IconProduct = () => (
  <svg className="adpp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
)
const IconArch = () => (
  <svg className="adpp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)
const IconShield = () => (
  <svg className="adpp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)
const IconArrow = () => (
  <svg className="adpp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const IconPlus = ({ open }: { open: boolean }) => (
  <span className="adpp-toggle-icon" data-open={open ? "true" : "false"} />
)

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const jsonLdBreadcrumb = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "AI Data Pipeline Protection", "item": "https://llmcapsule.ai/resources/learn/ai-data-pipeline-protection" }
  ]
})

const jsonLdFaq = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI data pipeline protection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI data pipeline protection secures sensitive enterprise data at every stage of the AI processing pipeline — from document ingestion through model interaction to output delivery."
      }
    },
    {
      "@type": "Question",
      "name": "How does this differ from API-level security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "API-level security filters prompts and scans outputs at the model interface. AI data pipeline protection operates at the data layer across the entire pipeline, ensuring data is protected before it reaches any external system."
      }
    }
  ]
})

// ─── Component ───────────────────────────────────────────────────────────────
export default function AiDataPipelineProtection({
  // Hero
  heroTitle = "AI Data Pipeline Protection",
  heroDescription = "Enabling enterprise AI at every stage of the processing pipeline — ingestion, encapsulation, processing, restoration, and delivery.",

  // Problem
  problemHeading = "Problem",
  problemPara1 = "Enterprise AI pipelines move data through multiple stages and systems. Documents are ingested from internal sources, pre-processed for AI consumption, sent to language models, processed, and outputs are routed back to business systems. Each stage represents a potential exposure point.",
  problemPara2 = "Point solutions — API gateways that filter prompts, output scanners that check responses — address individual stages but leave gaps between them. AI data pipeline protection requires a continuous data-layer approach.",

  // Explanation
  explanationHeading = "Explanation",
  stage1Label = "Stage 1: Ingestion",
  stage1Text = "Documents enter the pipeline from enterprise systems — document management, email, databases, RAG pipelines. LLM Capsule intercepts data at this stage and applies context-aware data control to classify sensitivity.",
  stage2Label = "Stage 2: Encapsulation",
  stage2Text = "Sensitive elements are replaced with structure-preserving representations. The encapsulation occurs entirely within the enterprise environment. Mapping data is stored locally and never transmitted.",
  stage3Label = "Stage 3: AI Processing",
  stage3Text = "Encapsulated data is sent to the AI model. The model processes structurally intact documents and generates useful outputs. No original sensitive data reaches the AI provider.",
  stage4Label = "Stage 4: Restoration",
  stage4Text = "AI results are restored through local restoration. The locally stored mapping is applied to reconstruct outputs with real enterprise data.",
  stage5Label = "Stage 5: Delivery",
  stage5Text = "Restored outputs are routed to downstream business systems — compliance platforms, case management, analytics dashboards — ready for immediate use.",
  keyMessageText = "is not a single checkpoint, but a continuous AI enablement data layer that protects data from ingestion to delivery, enabling enterprise AI adoption at every stage.",

  // Enterprise Example
  exampleHeading = "Enterprise Example",
  exampleCardTitle = "Telecom Customer Service Automation",
  exampleCardPara1 = "A telecom company routes 50,000 customer support tickets per month through AI for automated categorization, priority scoring, and response drafting. Tickets contain customer account numbers, addresses, service plan details, and payment history.",
  exampleCardPara2 = "LLM Capsule enables the entire pipeline: tickets are encapsulated at ingestion, AI processes protected tickets, responses are restored with real customer data, and formatted outputs route directly to the support platform.",

  // FAQ
  faqHeading = "FAQ",
  faq1Question = "What is AI data pipeline protection?",
  faq1Answer = "AI data pipeline protection secures sensitive enterprise data at every stage of the AI processing pipeline — from document ingestion through model interaction to output delivery.",
  faq2Question = "How does this differ from API-level security?",
  faq2Answer = "API-level security filters prompts and scans outputs at the model interface. AI data pipeline protection operates at the data layer across the entire pipeline, ensuring data is protected before it reaches any external system.",

  // Related
  relatedHeading = "Related",
  related1Title = "Product Overview",
  related1Href = "product.html",
  related2Title = "Architecture",
  related2Href = "architecture.html",
  related3Title = "Trust & Compliance",
  related3Href = "trust.html",
  related4Title = "Request a Demo",
  related4Href = "request-pov.html",

  // CTA
  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaBtn2Label = "Talk to an Architect",
  ctaBtn2Href = "architecture.html",
  ctaFootnote1Label = "Download Architecture Brief",
  ctaFootnote1Href = "downloads.html",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx))
  }

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
  ]

  const relatedCards = [
    { title: related1Title, href: related1Href, Icon: IconProduct },
    { title: related2Title, href: related2Href, Icon: IconArch },
    { title: related3Title, href: related3Href, Icon: IconShield },
    { title: related4Title, href: related4Href, Icon: IconArrow },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ── */
        .adpp-root *, .adpp-root *::before, .adpp-root *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .adpp-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .adpp-root img { max-width: 100%; display: block; }
        .adpp-root a { text-decoration: none; color: inherit; }

        /* ── Icons ── */
        .adpp-icon {
          width: 24px; height: 24px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
          flex-shrink: 0;
        }

        /* ── Inner wrapper — Container Query host ── */
        .adpp-inner {
          width: 100%;
          container-type: inline-size;
        }

        /* ── Article container ── */
        .adpp-article-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .adpp-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .adpp-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .adpp-article-container { padding: 0 120px; } }

        /* ── Full-width container (CTA) ── */
        .adpp-full-container {
          width: 100%;
        }

        /* ── Sections ── */
        .adpp-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }
        .adpp-section--hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .adpp-section--body {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }

        /* ── Hero ── */
        .adpp-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .adpp-hero-title { font-size: 40px; } }
        @container (min-width: 1024px) { .adpp-hero-title { font-size: 48px; } }
        @container (min-width: 1440px) { .adpp-hero-title { font-size: 64px; } }

        .adpp-hero-desc {
          font-size: 18px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
        }
        @container (min-width: 1024px) { .adpp-hero-desc { max-width: 720px; } }
        @container (min-width: 1440px) { .adpp-hero-desc { max-width: 1080px; } }

        /* ── Section header ── */
        .adpp-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .adpp-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .adpp-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .adpp-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .adpp-section-header h2 { font-size: 28px; } }
        @container (max-width: 767px)  { .adpp-section-header { text-align: left; } }

        /* ── Body text ── */
        .adpp-body-para {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .adpp-body-para:last-child { margin-bottom: 0; }

        /* ── Text brand color ── */
        .adpp-text-brand { color: ${P.brandSecondary}; }

        /* ── Text product (Oxanium) ── */
        .adpp-text-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* ── Pipeline stages ── */
        .adpp-pipeline-stages {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .adpp-pipeline-stage {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          border: 1px solid ${P.borderDefault};
          border-radius: 18px;
          background-color: ${P.surfaceWhite};
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
        }
        .adpp-stage-number {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background-color: ${P.brandPrimary};
          color: ${P.white};
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .adpp-stage-content { flex: 1; }
        .adpp-stage-label {
          font-size: 14px;
          font-weight: 600;
          color: ${P.brandSecondary};
          margin-bottom: 8px;
        }
        .adpp-stage-text {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* ── Key message ── */
        .adpp-key-message {
          padding: 24px 32px;
          border-radius: 18px;
          background-color: ${P.surfaceDark};
          color: ${P.textInverse};
          font-size: 16px;
          font-weight: 500;
          line-height: 1.7;
          margin: 32px 0;
        }
        .adpp-key-message strong { color: ${P.brandLight}; }

        /* ── Card ── */
        .adpp-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container (min-width: 1440px) { .adpp-card { padding: 32px; } }
        .adpp-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }
        .adpp-card p {
          font-size: 16px;
          line-height: 1.7;
          color: ${P.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* ── Accordion ── */
        .adpp-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .adpp-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .adpp-ac-card:hover { background-color: ${P.neutral025}; }
        .adpp-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .adpp-ac-card__title {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${P.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .adpp-ac-card__toggle {
          width: 28px; height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
        }
        .adpp-toggle-icon {
          width: 12px; height: 12px;
          position: relative;
          flex-shrink: 0;
          display: block;
        }
        .adpp-toggle-icon::before,
        .adpp-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${P.textTertiary};
          border-radius: 1px;
        }
        .adpp-toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .adpp-toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          transition: opacity 0.2s;
        }
        .adpp-toggle-icon[data-open="true"]::after { opacity: 0; }
        .adpp-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .adpp-ac-card__body p + p { margin-top: 12px; }

        /* ── Section title icon ── */
        .adpp-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .adpp-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .adpp-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }

        /* ── Card grid ── */
        .adpp-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) { .adpp-card-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark card ── */
        .adpp-card-dark {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .adpp-card-dark:hover { background-color: ${P.neutral800}; }
        .adpp-card-dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .adpp-card-dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${P.textInverse};
        }

        /* ── CTA Band ── */
        .adpp-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.png');
          background-size: cover;
          background-position: center;
        }
        @container (min-width: 768px)  { .adpp-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .adpp-cta-band { padding: 120px 120px; } }
        @container (max-width: 767px)  { .adpp-cta-band { background-image: none; } }

        .adpp-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .adpp-cta-band > * { position: relative; z-index: 1; }

        .adpp-cta-band__inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .adpp-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .adpp-cta-band__inner { max-width: 1080px; } }

        .adpp-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${P.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .adpp-cta-title { font-size: 40px; } }
        @container (min-width: 1440px) { .adpp-cta-title { font-size: 50px; } }

        .adpp-cta-desc {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .adpp-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .adpp-cta-actions { flex-direction: column; align-items: center; }
          .adpp-cta-actions .adpp-btn { width: 100%; max-width: 320px; }
        }

        .adpp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .adpp-btn:hover { background-color: ${P.white}; }

        .adpp-cta-footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          margin-top: 8px;
        }
        .adpp-cta-footnote a {
          color: rgba(255,255,255,0.70);
          transition: color 0.15s;
          text-decoration: none;
        }
        .adpp-cta-footnote a:hover { color: ${P.white}; }
      `}</style>

      <div className="adpp-root">
        <div className="adpp-inner">

          {/* ── Section 1: Hero ── */}
          <section id="section-hero" className="adpp-section--hero">
            <div className="adpp-article-container">
              <h1 className="adpp-hero-title">{heroTitle}</h1>
              <p className="adpp-hero-desc">{heroDescription}</p>
            </div>
          </section>

          {/* ── Section 2: Problem ── */}
          <section id="section-3" className="adpp-section--body">
            <div className="adpp-article-container">
              <div className="adpp-section-header">
                <h2><span className="adpp-text-brand">{problemHeading}</span></h2>
              </div>
              <p className="adpp-body-para">{problemPara1}</p>
              <p className="adpp-body-para">{problemPara2}</p>
            </div>
          </section>

          {/* ── Section 4: Explanation — Pipeline Stages ── */}
          <section id="section-4" className="adpp-section--body">
            <div className="adpp-article-container">
              <div className="adpp-section-header">
                <h2><span className="adpp-text-brand">{explanationHeading}</span></h2>
              </div>

              <div className="adpp-pipeline-stages">
                <div className="adpp-pipeline-stage">
                  <span className="adpp-stage-number">1</span>
                  <div className="adpp-stage-content">
                    <div className="adpp-stage-label">{stage1Label}</div>
                    <p className="adpp-stage-text">
                      {(() => {
                        const parts = stage1Text.split("LLM Capsule")
                        if (parts.length > 1) {
                          return (
                            <>
                              {parts[0]}
                              <span className="adpp-text-product">LLM Capsule</span>
                              {parts.slice(1).join("LLM Capsule")}
                            </>
                          )
                        }
                        return stage1Text
                      })()}
                    </p>
                  </div>
                </div>

                <div className="adpp-pipeline-stage">
                  <span className="adpp-stage-number">2</span>
                  <div className="adpp-stage-content">
                    <div className="adpp-stage-label">{stage2Label}</div>
                    <p className="adpp-stage-text">{stage2Text}</p>
                  </div>
                </div>

                <div className="adpp-pipeline-stage">
                  <span className="adpp-stage-number">3</span>
                  <div className="adpp-stage-content">
                    <div className="adpp-stage-label">{stage3Label}</div>
                    <p className="adpp-stage-text">{stage3Text}</p>
                  </div>
                </div>

                <div className="adpp-pipeline-stage">
                  <span className="adpp-stage-number">4</span>
                  <div className="adpp-stage-content">
                    <div className="adpp-stage-label">{stage4Label}</div>
                    <p className="adpp-stage-text">{stage4Text}</p>
                  </div>
                </div>

                <div className="adpp-pipeline-stage">
                  <span className="adpp-stage-number">5</span>
                  <div className="adpp-stage-content">
                    <div className="adpp-stage-label">{stage5Label}</div>
                    <p className="adpp-stage-text">{stage5Text}</p>
                  </div>
                </div>
              </div>

              <div className="adpp-key-message">
                <strong>AI data pipeline protection</strong> {keyMessageText}
              </div>
            </div>
          </section>

          {/* ── Section 5: Enterprise Example ── */}
          <section id="section-5" className="adpp-section--body">
            <div className="adpp-article-container">
              <div className="adpp-section-header">
                <h2>Enterprise <span className="adpp-text-brand">Example</span></h2>
              </div>

              <div className="adpp-card">
                <h4>{exampleCardTitle}</h4>
                <p>{exampleCardPara1}</p>
                <p>
                  {(() => {
                    const parts = exampleCardPara2.split("LLM Capsule")
                    if (parts.length > 1) {
                      return (
                        <>
                          {parts[0]}
                          <span className="adpp-text-product">LLM Capsule</span>
                          {parts.slice(1).join("LLM Capsule")}
                        </>
                      )
                    }
                    return exampleCardPara2
                  })()}
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: FAQ ── */}
          <section id="section-6" className="adpp-section--body">
            <div className="adpp-article-container">
              <div className="adpp-section-header">
                <h2><span className="adpp-text-brand">{faqHeading}</span></h2>
              </div>

              <div className="adpp-ac-list">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="adpp-ac-card" onClick={() => toggleFaq(idx)}>
                    <div className="adpp-ac-card__header">
                      <span className="adpp-ac-card__title">{faq.question}</span>
                      <span className="adpp-ac-card__toggle">
                        <IconPlus open={openFaq === idx} />
                      </span>
                    </div>
                    {openFaq === idx && (
                      <div className="adpp-ac-card__body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 7: Related ── */}
          <section id="section-7" className="adpp-section--body">
            <div className="adpp-article-container">
              <div className="adpp-section-title-icon">
                <span className="adpp-section-title-icon__icon">
                  <IconLink />
                </span>
                <span className="adpp-section-title-icon__text">{relatedHeading}</span>
              </div>

              <div className="adpp-card-grid">
                {relatedCards.map(({ title, href, Icon }, idx) => (
                  <a key={idx} href={href} className="adpp-card-dark">
                    <span className="adpp-card-dark__icon"><Icon /></span>
                    <span className="adpp-card-dark__title">{title}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 8: CTA Band ── */}
          <section id="section-cta" className="adpp-cta-band">
            <div className="adpp-cta-band__inner">
              <h2 className="adpp-cta-title">
                {(() => {
                  const parts = ctaTitle.split("LLM Capsule")
                  if (parts.length > 1) {
                    return (
                      <>
                        {parts[0]}
                        <span className="adpp-text-product">LLM Capsule</span>
                        {parts[1]}
                      </>
                    )
                  }
                  return ctaTitle
                })()}
              </h2>
              <p className="adpp-cta-desc">{ctaDescription}</p>
              <div className="adpp-cta-actions">
                <a href={ctaBtn1Href} className="adpp-btn">{ctaBtn1Label}</a>
                <a href={ctaBtn2Href} className="adpp-btn">{ctaBtn2Label}</a>
              </div>
              <p className="adpp-cta-footnote">
                <a href={ctaFootnote1Href}>{ctaFootnote1Label}</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href={ctaFootnote2Href} target="_blank" rel="noopener">{ctaFootnote2Label}</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── addPropertyControls ─────────────────────────────────────────────────────
addPropertyControls(AiDataPipelineProtection, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "AI Data Pipeline Protection",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Enabling enterprise AI at every stage of the processing pipeline — ingestion, encapsulation, processing, restoration, and delivery.",
  },
  problemHeading: {
    type: ControlType.String,
    title: "Problem Heading",
    defaultValue: "Problem",
  },
  problemPara1: {
    type: ControlType.String,
    title: "Problem Para 1",
    defaultValue: "Enterprise AI pipelines move data through multiple stages and systems. Documents are ingested from internal sources, pre-processed for AI consumption, sent to language models, processed, and outputs are routed back to business systems. Each stage represents a potential exposure point.",
  },
  problemPara2: {
    type: ControlType.String,
    title: "Problem Para 2",
    defaultValue: "Point solutions — API gateways that filter prompts, output scanners that check responses — address individual stages but leave gaps between them. AI data pipeline protection requires a continuous data-layer approach.",
  },
  explanationHeading: {
    type: ControlType.String,
    title: "Explanation Heading",
    defaultValue: "Explanation",
  },
  stage1Label: { type: ControlType.String, title: "Stage 1 Label", defaultValue: "Stage 1: Ingestion" },
  stage1Text: {
    type: ControlType.String,
    title: "Stage 1 Text",
    defaultValue: "Documents enter the pipeline from enterprise systems — document management, email, databases, RAG pipelines. LLM Capsule intercepts data at this stage and applies context-aware data control to classify sensitivity.",
  },
  stage2Label: { type: ControlType.String, title: "Stage 2 Label", defaultValue: "Stage 2: Encapsulation" },
  stage2Text: {
    type: ControlType.String,
    title: "Stage 2 Text",
    defaultValue: "Sensitive elements are replaced with structure-preserving representations. The encapsulation occurs entirely within the enterprise environment. Mapping data is stored locally and never transmitted.",
  },
  stage3Label: { type: ControlType.String, title: "Stage 3 Label", defaultValue: "Stage 3: AI Processing" },
  stage3Text: {
    type: ControlType.String,
    title: "Stage 3 Text",
    defaultValue: "Encapsulated data is sent to the AI model. The model processes structurally intact documents and generates useful outputs. No original sensitive data reaches the AI provider.",
  },
  stage4Label: { type: ControlType.String, title: "Stage 4 Label", defaultValue: "Stage 4: Restoration" },
  stage4Text: {
    type: ControlType.String,
    title: "Stage 4 Text",
    defaultValue: "AI results are restored through local restoration. The locally stored mapping is applied to reconstruct outputs with real enterprise data.",
  },
  stage5Label: { type: ControlType.String, title: "Stage 5 Label", defaultValue: "Stage 5: Delivery" },
  stage5Text: {
    type: ControlType.String,
    title: "Stage 5 Text",
    defaultValue: "Restored outputs are routed to downstream business systems — compliance platforms, case management, analytics dashboards — ready for immediate use.",
  },
  keyMessageText: {
    type: ControlType.String,
    title: "Key Message (after 'AI data pipeline protection')",
    defaultValue: "is not a single checkpoint, but a continuous AI enablement data layer that protects data from ingestion to delivery, enabling enterprise AI adoption at every stage.",
  },
  exampleHeading: {
    type: ControlType.String,
    title: "Example Heading",
    defaultValue: "Enterprise Example",
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "Telecom Customer Service Automation",
  },
  exampleCardPara1: {
    type: ControlType.String,
    title: "Example Card Para 1",
    defaultValue: "A telecom company routes 50,000 customer support tickets per month through AI for automated categorization, priority scoring, and response drafting. Tickets contain customer account numbers, addresses, service plan details, and payment history.",
  },
  exampleCardPara2: {
    type: ControlType.String,
    title: "Example Card Para 2",
    defaultValue: "LLM Capsule enables the entire pipeline: tickets are encapsulated at ingestion, AI processes protected tickets, responses are restored with real customer data, and formatted outputs route directly to the support platform.",
  },
  faqHeading: { type: ControlType.String, title: "FAQ Heading", defaultValue: "FAQ" },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is AI data pipeline protection?",
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "AI data pipeline protection secures sensitive enterprise data at every stage of the AI processing pipeline — from document ingestion through model interaction to output delivery.",
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "How does this differ from API-level security?",
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "API-level security filters prompts and scans outputs at the model interface. AI data pipeline protection operates at the data layer across the entire pipeline, ensuring data is protected before it reaches any external system.",
  },
  relatedHeading: { type: ControlType.String, title: "Related Heading", defaultValue: "Related" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Product Overview" },
  related1Href: { type: ControlType.String, title: "Related 1 Href", defaultValue: "product.html" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Architecture" },
  related2Href: { type: ControlType.String, title: "Related 2 Href", defaultValue: "architecture.html" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Trust & Compliance" },
  related3Href: { type: ControlType.String, title: "Related 3 Href", defaultValue: "trust.html" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "Request a Demo" },
  related4Href: { type: ControlType.String, title: "Related 4 Href", defaultValue: "request-pov.html" },
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "See how LLM Capsule works with your data",
  },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  },
  ctaBtn1Label: { type: ControlType.String, title: "CTA Btn 1 Label", defaultValue: "Request a Demo" },
  ctaBtn1Href: { type: ControlType.String, title: "CTA Btn 1 Href", defaultValue: "request-pov.html" },
  ctaBtn2Label: { type: ControlType.String, title: "CTA Btn 2 Label", defaultValue: "Talk to an Architect" },
  ctaBtn2Href: { type: ControlType.String, title: "CTA Btn 2 Href", defaultValue: "architecture.html" },
  ctaFootnote1Label: { type: ControlType.String, title: "Footnote 1 Label", defaultValue: "Download Architecture Brief" },
  ctaFootnote1Href: { type: ControlType.String, title: "Footnote 1 Href", defaultValue: "downloads.html" },
  ctaFootnote2Label: { type: ControlType.String, title: "Footnote 2 Label", defaultValue: "AWS Marketplace" },
  ctaFootnote2Href: { type: ControlType.String, title: "Footnote 2 Href", defaultValue: "https://aws.amazon.com/marketplace" },
})
