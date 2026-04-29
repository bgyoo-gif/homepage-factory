import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Asset Base ────────────────────────────────────────────────────────────────
const IMAGE_BASE =
  "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Palette ───────────────────────────────────────────────────────────────────
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
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",       "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources",  "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Comparison", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "LLM Capsule vs Prompt Security Gateways", "item": "https://llmcapsule.ai/resources/learn/llm-capsule-vs-prompt-security-gateways" },
  ],
})

const JSONLD_ARTICLE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "LLM Capsule vs Prompt Security Gateways",
  "description": "Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule protects at the data layer with structure-preserving encapsulation.",
  "url": "https://llmcapsule.ai/resources/learn/llm-capsule-vs-prompt-security-gateways",
  "publisher": {
    "@type": "Organization",
    "name": "LLM Capsule",
    "url": "https://llmcapsule.ai",
  },
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Section 1: Hero
  heroTitle?: string
  heroDescription?: string

  // Section 3: Overview
  overviewText?: string

  // Section 4: How Gateways Work
  gatewaysWorkTitle?: string
  gatewaysWorkText?: string

  // Section 5: Limitations
  limitationsTitle?: string
  limitationBullet1?: string
  limitationBullet2?: string
  limitationBullet3?: string
  limitationBullet4?: string

  // Section 6: How LLM Capsule Differs
  differsTitle?: string
  differsText?: string
  differsBannerText?: string

  // Section 7: Comparison Table
  comparisonTitle?: string
  thCapability?: string
  thGateways?: string
  thCapsule?: string
  row1Cap?: string
  row1Col2?: string
  row1Col3?: string
  row2Cap?: string
  row2Col2?: string
  row2Col3?: string
  row3Cap?: string
  row3Col2?: string
  row3Col3?: string
  row4Cap?: string
  row4Col2?: string
  row4Col3?: string
  row5Cap?: string
  row5Col2?: string
  row5Col3?: string
  row6Cap?: string
  row6Col2?: string
  row6Col3?: string
  row7Cap?: string
  row7Col2?: string
  row7Col3?: string

  // Section 8: Enterprise Workflow Example
  exampleTitle?: string
  exampleCardTitle?: string
  exampleCardText1?: string
  exampleCardText2?: string

  // Section 9: FAQ
  faqTitle?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string

  // Section 10: Related
  relatedLink1Label?: string
  relatedLink1Href?: string
  relatedLink2Label?: string
  relatedLink2Href?: string
  relatedLink3Label?: string
  relatedLink3Href?: string
  relatedLink4Label?: string
  relatedLink4Href?: string
  relatedLink5Label?: string
  relatedLink5Href?: string

  // Section 11: CTA Band
  ctaBgImage?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function LlmCapsuleVsPromptSecurityGateways({
  // Hero
  heroTitle = "LLM Capsule vs Prompt Security Gateways",
  heroDescription = "Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule enables AI adoption at the data layer with structure-preserving encapsulation.",

  // Overview
  overviewText = "Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. LLM Capsule operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.",

  // Gateways Work
  gatewaysWorkTitle = "How Prompt Security Gateways Work",
  gatewaysWorkText = "Prompt gateways intercept API calls to LLM providers. They scan the prompt text for PII patterns, blocked topics, or compliance violations. If sensitive content is detected, the gateway either blocks the request, strips the flagged content, or alerts an administrator. Some gateways also scan AI responses for data leakage.",

  // Limitations
  limitationsTitle = "Limitations",
  limitationBullet1 = "Prompt-only scope. Gateways only see the final prompt, not the underlying data pipeline. Documents processed through RAG systems or batch pipelines may bypass the gateway entirely.",
  limitationBullet2 = "Block or pass binary. Most gateways make a binary decision — block the request or pass it through. There is no mechanism to transform data while preserving usability.",
  limitationBullet3 = "No output restoration. If a gateway strips sensitive content from a prompt, the AI output will lack that context. There is no restoration mechanism.",
  limitationBullet4 = "Pattern-based detection. Gateways rely on pattern matching which misses context-dependent sensitivity and generates false positives on non-sensitive content that matches PII patterns.",

  // Differs
  differsTitle = "How LLM Capsule Differs",
  differsText = "LLM Capsule operates upstream of the prompt. It encapsulates sensitive data at the document level before any AI processing occurs. The encapsulation is structure-preserving — AI receives complete, processable documents. After AI generates outputs, local restoration (restoration) restores enterprise context automatically.",
  differsBannerText = "AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.",

  // Comparison
  comparisonTitle = "Comparison",
  thCapability = "Capability",
  thGateways = "Prompt Security Gateways",
  thCapsule = "LLM Capsule",
  row1Cap = "Operating layer",
  row1Col2 = "API / prompt level",
  row1Col3 = "AI enablement data layer",
  row2Cap = "Scope",
  row2Col2 = "Prompt text only",
  row2Col3 = "Full data pipeline",
  row3Cap = "Protection method",
  row3Col2 = "Block or strip",
  row3Col3 = "Structure-preserving encapsulation",
  row4Cap = "Output restoration",
  row4Col2 = "✗",
  row4Col3 = "✓ Local restoration",
  row5Cap = "Context-aware data control",
  row5Col2 = "Limited pattern matching",
  row5Col3 = "Policy-based classification",
  row6Cap = "RAG pipeline support",
  row6Col2 = "Partial",
  row6Col3 = "Full integration",
  row7Cap = "Model independence",
  row7Col2 = "Provider-specific",
  row7Col3 = "Works with any LLM",

  // Example
  exampleTitle = "Enterprise Workflow Example",
  exampleCardTitle = "RAG-Based Knowledge System",
  exampleCardText1 = "An enterprise deploys a RAG system that retrieves internal documents to augment AI responses. A prompt gateway can only scan the final composed prompt — it cannot protect the 50 retrieved document chunks that feed into it.",
  exampleCardText2 = "LLM Capsule encapsulates all documents at the data layer before they enter the RAG index. Every retrieval, every prompt composition, and every AI output operates on protected data. Restoration restores enterprise context in the final response.",

  // FAQ
  faqTitle = "FAQ",
  faq1Question = "How does LLM Capsule differ from prompt gateways?",
  faq1Answer = "Prompt gateways filter at the API level and can only block or pass requests. LLM Capsule transforms data at the source, preserving structure for AI processing and enabling output restoration.",
  faq2Question = "Can I use both a gateway and LLM Capsule?",
  faq2Answer = "Yes. LLM Capsule provides data-layer protection while gateways provide an additional API-level monitoring layer. The two approaches are complementary.",

  // Related
  relatedLink1Label = "Product Overview",
  relatedLink1Href = "/product",
  relatedLink2Label = "Architecture",
  relatedLink2Href = "/architecture",
  relatedLink3Label = "Trust & Compliance",
  relatedLink3Href = "/trust",
  relatedLink4Label = "Request a Demo",
  relatedLink4Href = "/request-a-demo",
  relatedLink5Label = "Learn Hub",
  relatedLink5Href = "/resources/learn",

  // CTA
  ctaBgImage = "",
  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {

  // ── CTA background image fallback ─────────────────────────────────────────
  const DEFAULT_CTA_BG = `${IMAGE_BASE}/bg-gradient-deep-teal.png`
  const resolvedCtaBg = ctaBgImage || DEFAULT_CTA_BG

  // ── FAQ accordion state ────────────────────────────────────────────────────
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: true, 1: false })
  const toggleFaq = (idx: number) =>
    setFaqOpen(prev => ({ ...prev, [idx]: !prev[idx] }))

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_ARTICLE }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ─────────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .vs-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .vs-root a { text-decoration: none; color: inherit; }
        .vs-root img { max-width: 100%; display: block; }
        .vs-root p, .vs-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .vs-root h1, .vs-root h2, .vs-root h3, .vs-root h4 { text-wrap: pretty; }

        /* ── Container Query wrapper ──────────────────────────────── */
        .vs-inner { width: 100%; container-type: inline-size; }

        /* ── Article Container (1080px) ────────────────────────────── */
        .vs-article-container {
          width: 100%; max-width: 1080px; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .vs-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .vs-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .vs-article-container { padding: 0 120px; max-width: 1440px; } }
        

        /* ── Full-width container (CTA) ───────────────────────────── */
        .vs-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .vs-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .vs-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .vs-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Buttons ──────────────────────────────────────────────── */
        .vs-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .vs-btn--sm { padding: 8px 16px; font-size: 14px; }
        .vs-btn--lg { padding: 16px 48px; font-size: 18px; }
        .vs-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .vs-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Text utilities ───────────────────────────────────────── */
        .vs-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .vs-text--brand   { color: ${P.brandSecondary}; }

        /* ── Hero Section ─────────────────────────────────────────── */
        .vs-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .vs-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .vs-article-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .vs-article-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .vs-article-hero__title { font-size: 64px; } }
        .vs-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }

        .vs-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
          font-size: 13px; color: #9c9c9c;
        }
        .vs-breadcrumb__link { color: #9c9c9c; text-decoration: none; }
        .vs-breadcrumb__link:hover { color: #636363; }
        .vs-breadcrumb__sep { color: #bababa; }
        .vs-breadcrumb__current { color: #636363; }

        /* ── Article Body Section ─────────────────────────────────── */
        .vs-section--article-body {
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .vs-section--article-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .vs-section--article-body { padding: 60px 0; } }

        /* ── Article Section Header ───────────────────────────────── */
        .vs-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .vs-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .vs-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .vs-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .vs-article-section-header h2 { font-size: 28px; } }
        @container (max-width: 767px) { .vs-article-section-header { text-align: left; } }

        /* ── Body paragraph ───────────────────────────────────────── */
        .vs-article-body__paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .vs-article-body__paragraph:last-child { margin-bottom: 0; }
        .vs-article-body__paragraph--strong { font-weight: 500; }

        /* ── Bullet List ──────────────────────────────────────────── */
        .vs-bullet {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .vs-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .vs-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px; display: flex; align-items: center; justify-content: center;
        }
        .vs-bullet--dot .vs-bullet__icon::before {
          content: "•"; color: ${P.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Banner ───────────────────────────────────────────────── */
        .vs-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          font-size: 16px; line-height: 1.7;
          word-break: keep-all; overflow-wrap: break-word;
        }
        .vs-banner--brand {
          background-color: rgba(24, 33, 232, 0.06);
        }
        .vs-banner--brand p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }

        /* ── Card ─────────────────────────────────────────────────── */
        .vs-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column; gap: 12px;
        }
        @container (min-width: 1440px) { .vs-card { padding: 32px; } }
        .vs-card__title {
          font-size: 16px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.4;
          margin-bottom: 4px;
        }
        .vs-card p {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin: 0;
        }

        /* ── Table ────────────────────────────────────────────────── */
        .vs-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          margin: 16px 0;
          scrollbar-width: none;
        }
        .vs-table-wrap::-webkit-scrollbar { display: none; }
        .vs-table {
          width: 100%; border-collapse: collapse;
          font-size: 14px;
        }
        .vs-table thead { background-color: ${P.neutral025}; }
        .vs-table th {
          padding: 14px 16px; text-align: left;
          font-weight: 600; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: ${P.textPrimary};
          border-bottom: 2px solid ${P.borderDefault};
        }
        .vs-table th.vs-table__th--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
        }
        .vs-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textSecondary}; vertical-align: top;
        }
        .vs-table td.vs-table__td--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
          font-weight: 500;
        }
        .vs-table__check { color: ${P.success}; font-weight: 600; }
        .vs-table__cross { color: ${P.error}; font-weight: 600; }
        @container (max-width: 767px) {
          .vs-table th, .vs-table td { padding: 10px 12px; font-size: 12px; }
        }

        /* ── Accordion ────────────────────────────────────────────── */
        .vs-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .vs-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden;
          transition: background-color 0.2s;
        }
        .vs-ac-card:hover { background-color: ${P.neutral025}; }
        .vs-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .vs-ac-card__title {
          font-family: "DM Sans", sans-serif; font-size: 18px;
          font-weight: 500; line-height: 1.2;
          color: ${P.textPrimary};
        }
        .vs-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; cursor: pointer;
        }
        .vs-ac-card__toggle-icon {
          width: 12px; height: 12px; position: relative; flex-shrink: 0;
        }
        .vs-ac-card__toggle-icon::before, .vs-ac-card__toggle-icon::after {
          content: ''; position: absolute;
          background-color: ${P.textTertiary}; border-radius: 1px;
        }
        .vs-ac-card__toggle-icon::before {
          width: 10px; height: 1.5px; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .vs-ac-card__toggle-icon--open::after {
          display: none;
        }
        .vs-ac-card__toggle-icon--closed::after {
          width: 1.5px; height: 10px; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .vs-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7;
        }
        .vs-ac-card__body p + p { margin-top: 12px; }

        /* ── Section Title Icon ───────────────────────────────────── */
        .vs-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .vs-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .vs-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Card Grid ────────────────────────────────────────────── */
        .vs-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .vs-card-grid--2col { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

        /* ── Dark Card ────────────────────────────────────────────── */
        .vs-card--dark {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; align-items: center; gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .vs-card--dark:hover { background-color: ${P.neutral800}; }
        .vs-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .vs-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }
        .vs-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── CTA Band ─────────────────────────────────────────────── */
        .vs-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-color: ${P.neutral800};
          background-size: cover; background-position: center;
        }
        .vs-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .vs-cta-band > * { position: relative; z-index: 1; }
        .vs-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .vs-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .vs-cta-band__inner { max-width: 1080px; } }
        @container (min-width: 768px)  { .vs-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .vs-cta-band { padding: 120px 120px; } }
        @container (max-width: 767px)  { .vs-cta-band { background-image: none; } }
        .vs-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px)  { .vs-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .vs-cta-band__title { font-size: 50px; } }
        .vs-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .vs-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        @container (max-width: 767px) {
          .vs-cta-band__actions { flex-direction: column; align-items: center; }
          .vs-cta-band__actions .vs-btn { width: 100%; max-width: 320px; }
        }
        .vs-cta-band__actions .vs-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .vs-cta-band__actions .vs-btn:hover { background-color: ${P.white}; }
        .vs-cta-band__footnote {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;
          margin-top: 8px;
        }
        .vs-cta-band__footnote a {
          font-size: 14px; color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        .vs-cta-band__footnote a:hover { color: ${P.white}; }
      `}</style>

      <div className="vs-root">
        <div className="vs-inner">
          <main>

            {/* ── Section 1: Hero ──────────────────────────────────────── */}
            <section id="section-hero" className="vs-section--hero">
              <div className="vs-article-container">
                <nav className="vs-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="vs-breadcrumb__link">Home</a>
                  <span className="vs-breadcrumb__sep">/</span>
                  <a href="/resources/learn" className="vs-breadcrumb__link">Learn</a>
                  <span className="vs-breadcrumb__sep">/</span>
                  <span className="vs-breadcrumb__current">LLM Capsule vs Prompt Security Gateways</span>
                </nav>
                <h1 className="vs-article-hero__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                  <span className="vs-text--product">LLM Capsule</span> vs Prompt Security Gateways
                </h1>
                <p className="vs-article-hero__description">
                  Compare <span className="vs-text--product">LLM Capsule</span> with prompt security gateways. Gateways filter at the API layer; <span className="vs-text--product">LLM Capsule</span> enables AI adoption at the data layer with structure-preserving encapsulation.
                </p>
              </div>
            </section>

            {/* ── Section 3: Overview ──────────────────────────────────── */}
            <section id="section-3" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>Overview</h2>
                </div>
                <p className="vs-article-body__paragraph">
                  Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. <span className="vs-text--product">LLM Capsule</span> operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.
                </p>
              </div>
            </section>

            {/* ── Section 4: How Prompt Security Gateways Work ────────── */}
            <section id="section-4" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{gatewaysWorkTitle}</h2>
                </div>
                <p className="vs-article-body__paragraph">{gatewaysWorkText}</p>
              </div>
            </section>

            {/* ── Section 5: Limitations ───────────────────────────────── */}
            <section id="section-5" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{limitationsTitle}</h2>
                </div>
                <ul className="vs-bullet vs-bullet--dot">
                  <li className="vs-bullet__item">
                    <span className="vs-bullet__icon" />
                    <span>{limitationBullet1}</span>
                  </li>
                  <li className="vs-bullet__item">
                    <span className="vs-bullet__icon" />
                    <span>{limitationBullet2}</span>
                  </li>
                  <li className="vs-bullet__item">
                    <span className="vs-bullet__icon" />
                    <span>{limitationBullet3}</span>
                  </li>
                  <li className="vs-bullet__item">
                    <span className="vs-bullet__icon" />
                    <span>{limitationBullet4}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ── Section 6: How LLM Capsule Differs ──────────────────── */}
            <section id="section-6" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{differsTitle}</h2>
                </div>
                <p className="vs-article-body__paragraph">{differsText}</p>
                <div className="vs-banner vs-banner--brand">
                  <p>{differsBannerText}</p>
                </div>
              </div>
            </section>

            {/* ── Section 7: Comparison Table ─────────────────────────── */}
            <section id="section-7" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{comparisonTitle}</h2>
                </div>
                <div className="vs-table-wrap">
                  <table className="vs-table">
                    <thead>
                      <tr>
                        <th>{thCapability}</th>
                        <th>{thGateways}</th>
                        <th className="vs-table__th--highlight">{thCapsule}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{row1Cap}</td>
                        <td>{row1Col2}</td>
                        <td className="vs-table__td--highlight">{row1Col3}</td>
                      </tr>
                      <tr>
                        <td>{row2Cap}</td>
                        <td>{row2Col2}</td>
                        <td className="vs-table__td--highlight">{row2Col3}</td>
                      </tr>
                      <tr>
                        <td>{row3Cap}</td>
                        <td>{row3Col2}</td>
                        <td className="vs-table__td--highlight">{row3Col3}</td>
                      </tr>
                      <tr>
                        <td>{row4Cap}</td>
                        <td>{row4Col2}</td>
                        <td className="vs-table__td--highlight">{row4Col3}</td>
                      </tr>
                      <tr>
                        <td>{row5Cap}</td>
                        <td>{row5Col2}</td>
                        <td className="vs-table__td--highlight">{row5Col3}</td>
                      </tr>
                      <tr>
                        <td>{row6Cap}</td>
                        <td>{row6Col2}</td>
                        <td className="vs-table__td--highlight">{row6Col3}</td>
                      </tr>
                      <tr>
                        <td>{row7Cap}</td>
                        <td>{row7Col2}</td>
                        <td className="vs-table__td--highlight">{row7Col3}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Section 8: Enterprise Workflow Example ───────────────── */}
            <section id="section-8" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{exampleTitle}</h2>
                </div>
                <div className="vs-card">
                  <h4 className="vs-card__title">{exampleCardTitle}</h4>
                  <p>{exampleCardText1}</p>
                  <p>{exampleCardText2}</p>
                </div>
              </div>
            </section>

            {/* ── Section 9: FAQ ───────────────────────────────────────── */}
            <section id="section-9" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-article-section-header">
                  <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{faqTitle}</h2>
                </div>
                <div className="vs-ac-list">

                  {/* FAQ 1 */}
                  <div className="vs-ac-card" onClick={() => toggleFaq(0)}>
                    <div className="vs-ac-card__header">
                      <span className="vs-ac-card__title">{faq1Question}</span>
                      <span className="vs-ac-card__toggle">
                        <span className={`vs-ac-card__toggle-icon vs-ac-card__toggle-icon--${faqOpen[0] ? "open" : "closed"}`} />
                      </span>
                    </div>
                    {faqOpen[0] && (
                      <div className="vs-ac-card__body">
                        <p>{faq1Answer}</p>
                      </div>
                    )}
                  </div>

                  {/* FAQ 2 */}
                  <div className="vs-ac-card" onClick={() => toggleFaq(1)}>
                    <div className="vs-ac-card__header">
                      <span className="vs-ac-card__title">{faq2Question}</span>
                      <span className="vs-ac-card__toggle">
                        <span className={`vs-ac-card__toggle-icon vs-ac-card__toggle-icon--${faqOpen[1] ? "open" : "closed"}`} />
                      </span>
                    </div>
                    {faqOpen[1] && (
                      <div className="vs-ac-card__body">
                        <p>{faq2Answer}</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </section>

            {/* ── Section 10: Related Pages ────────────────────────────── */}
            <section id="section-10" className="vs-section--article-body">
              <div className="vs-article-container">
                <div className="vs-section-title-icon">
                  <span className="vs-section-title-icon__icon">
                    <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="vs-section-title-icon__text">Related</span>
                </div>
                <div className="vs-card-grid vs-card-grid--2col">
                  <a href={relatedLink1Href} className="vs-card--dark">
                    <span className="vs-card--dark__icon">
                      <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="vs-card--dark__title">{relatedLink1Label}</span>
                  </a>
                  <a href={relatedLink2Href} className="vs-card--dark">
                    <span className="vs-card--dark__icon">
                      <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="vs-card--dark__title">{relatedLink2Label}</span>
                  </a>
                  <a href={relatedLink3Href} className="vs-card--dark">
                    <span className="vs-card--dark__icon">
                      <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="vs-card--dark__title">{relatedLink3Label}</span>
                  </a>
                  <a href={relatedLink4Href} className="vs-card--dark">
                    <span className="vs-card--dark__icon">
                      <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="vs-card--dark__title">{relatedLink4Label}</span>
                  </a>
                  <a href={relatedLink5Href} className="vs-card--dark">
                    <span className="vs-card--dark__icon">
                      <svg className="vs-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </span>
                    <span className="vs-card--dark__title">{relatedLink5Label}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 11: CTA Band ─────────────────────────────────── */}
            <section id="section-cta" className="vs-cta-band" style={{ backgroundImage: `url('${resolvedCtaBg}')` }}>
              <div className="vs-cta-band__inner">
                <h2 className="vs-cta-band__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                  {ctaTitle}
                </h2>
                <p className="vs-cta-band__description">{ctaDescription}</p>
                <div className="vs-cta-band__actions">
                  <a href={ctaBtn1Href} className="vs-btn vs-btn--lg">{ctaBtn1Label}</a>
                </div>
                <div className="vs-cta-band__footnote">
                  <a href={ctaFootnote2Href} target="_blank" rel="noopener">{ctaFootnote2Label}</a>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(LlmCapsuleVsPromptSecurityGateways, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "LLM Capsule vs Prompt Security Gateways",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule enables AI adoption at the data layer with structure-preserving encapsulation.",
    displayTextArea: true,
  },
  overviewText: {
    type: ControlType.String,
    title: "Overview Text",
    defaultValue: "Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. LLM Capsule operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.",
    displayTextArea: true,
  },
  gatewaysWorkTitle: {
    type: ControlType.String,
    title: "Gateways Work Title",
    defaultValue: "How Prompt Security Gateways Work",
  },
  gatewaysWorkText: {
    type: ControlType.String,
    title: "Gateways Work Text",
    defaultValue: "Prompt gateways intercept API calls to LLM providers. They scan the prompt text for PII patterns, blocked topics, or compliance violations. If sensitive content is detected, the gateway either blocks the request, strips the flagged content, or alerts an administrator. Some gateways also scan AI responses for data leakage.",
    displayTextArea: true,
  },
  limitationsTitle: {
    type: ControlType.String,
    title: "Limitations Title",
    defaultValue: "Limitations",
  },
  limitationBullet1: {
    type: ControlType.String,
    title: "Limitation Bullet 1",
    defaultValue: "Prompt-only scope. Gateways only see the final prompt, not the underlying data pipeline. Documents processed through RAG systems or batch pipelines may bypass the gateway entirely.",
    displayTextArea: true,
  },
  limitationBullet2: {
    type: ControlType.String,
    title: "Limitation Bullet 2",
    defaultValue: "Block or pass binary. Most gateways make a binary decision — block the request or pass it through. There is no mechanism to transform data while preserving usability.",
    displayTextArea: true,
  },
  limitationBullet3: {
    type: ControlType.String,
    title: "Limitation Bullet 3",
    defaultValue: "No output restoration. If a gateway strips sensitive content from a prompt, the AI output will lack that context. There is no restoration mechanism.",
    displayTextArea: true,
  },
  limitationBullet4: {
    type: ControlType.String,
    title: "Limitation Bullet 4",
    defaultValue: "Pattern-based detection. Gateways rely on pattern matching which misses context-dependent sensitivity and generates false positives on non-sensitive content that matches PII patterns.",
    displayTextArea: true,
  },
  differsTitle: {
    type: ControlType.String,
    title: "Differs Title",
    defaultValue: "How LLM Capsule Differs",
  },
  differsText: {
    type: ControlType.String,
    title: "Differs Text",
    defaultValue: "LLM Capsule operates upstream of the prompt. It encapsulates sensitive data at the document level before any AI processing occurs. The encapsulation is structure-preserving — AI receives complete, processable documents. After AI generates outputs, local restoration (restoration) restores enterprise context automatically.",
    displayTextArea: true,
  },
  differsBannerText: {
    type: ControlType.String,
    title: "Differs Banner Text",
    defaultValue: "AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.",
    displayTextArea: true,
  },
  comparisonTitle: {
    type: ControlType.String,
    title: "Comparison Title",
    defaultValue: "Comparison",
  },
  thCapability: {
    type: ControlType.String,
    title: "Table Header: Capability",
    defaultValue: "Capability",
  },
  thGateways: {
    type: ControlType.String,
    title: "Table Header: Gateways",
    defaultValue: "Prompt Security Gateways",
  },
  thCapsule: {
    type: ControlType.String,
    title: "Table Header: Capsule",
    defaultValue: "LLM Capsule",
  },
  row1Cap: {
    type: ControlType.String,
    title: "Row 1: Capability",
    defaultValue: "Operating layer",
  },
  row1Col2: {
    type: ControlType.String,
    title: "Row 1: Gateways",
    defaultValue: "API / prompt level",
  },
  row1Col3: {
    type: ControlType.String,
    title: "Row 1: Capsule",
    defaultValue: "AI enablement data layer",
  },
  row2Cap: {
    type: ControlType.String,
    title: "Row 2: Capability",
    defaultValue: "Scope",
  },
  row2Col2: {
    type: ControlType.String,
    title: "Row 2: Gateways",
    defaultValue: "Prompt text only",
  },
  row2Col3: {
    type: ControlType.String,
    title: "Row 2: Capsule",
    defaultValue: "Full data pipeline",
  },
  row3Cap: {
    type: ControlType.String,
    title: "Row 3: Capability",
    defaultValue: "Protection method",
  },
  row3Col2: {
    type: ControlType.String,
    title: "Row 3: Gateways",
    defaultValue: "Block or strip",
  },
  row3Col3: {
    type: ControlType.String,
    title: "Row 3: Capsule",
    defaultValue: "Structure-preserving encapsulation",
  },
  row4Cap: {
    type: ControlType.String,
    title: "Row 4: Capability",
    defaultValue: "Output restoration",
  },
  row4Col2: {
    type: ControlType.String,
    title: "Row 4: Gateways",
    defaultValue: "✗",
  },
  row4Col3: {
    type: ControlType.String,
    title: "Row 4: Capsule",
    defaultValue: "✓ Local restoration",
  },
  row5Cap: {
    type: ControlType.String,
    title: "Row 5: Capability",
    defaultValue: "Context-aware data control",
  },
  row5Col2: {
    type: ControlType.String,
    title: "Row 5: Gateways",
    defaultValue: "Limited pattern matching",
  },
  row5Col3: {
    type: ControlType.String,
    title: "Row 5: Capsule",
    defaultValue: "Policy-based classification",
  },
  row6Cap: {
    type: ControlType.String,
    title: "Row 6: Capability",
    defaultValue: "RAG pipeline support",
  },
  row6Col2: {
    type: ControlType.String,
    title: "Row 6: Gateways",
    defaultValue: "Partial",
  },
  row6Col3: {
    type: ControlType.String,
    title: "Row 6: Capsule",
    defaultValue: "Full integration",
  },
  row7Cap: {
    type: ControlType.String,
    title: "Row 7: Capability",
    defaultValue: "Model independence",
  },
  row7Col2: {
    type: ControlType.String,
    title: "Row 7: Gateways",
    defaultValue: "Provider-specific",
  },
  row7Col3: {
    type: ControlType.String,
    title: "Row 7: Capsule",
    defaultValue: "Works with any LLM",
  },
  exampleTitle: {
    type: ControlType.String,
    title: "Example Title",
    defaultValue: "Enterprise Workflow Example",
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "RAG-Based Knowledge System",
  },
  exampleCardText1: {
    type: ControlType.String,
    title: "Example Card Text 1",
    defaultValue: "An enterprise deploys a RAG system that retrieves internal documents to augment AI responses. A prompt gateway can only scan the final composed prompt — it cannot protect the 50 retrieved document chunks that feed into it.",
    displayTextArea: true,
  },
  exampleCardText2: {
    type: ControlType.String,
    title: "Example Card Text 2",
    defaultValue: "LLM Capsule encapsulates all documents at the data layer before they enter the RAG index. Every retrieval, every prompt composition, and every AI output operates on protected data. Restoration restores enterprise context in the final response.",
    displayTextArea: true,
  },
  faqTitle: {
    type: ControlType.String,
    title: "FAQ Title",
    defaultValue: "FAQ",
  },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "How does LLM Capsule differ from prompt gateways?",
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "Prompt gateways filter at the API level and can only block or pass requests. LLM Capsule transforms data at the source, preserving structure for AI processing and enabling output restoration.",
    displayTextArea: true,
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "Can I use both a gateway and LLM Capsule?",
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Yes. LLM Capsule provides data-layer protection while gateways provide an additional API-level monitoring layer. The two approaches are complementary.",
    displayTextArea: true,
  },
  relatedLink1Label: {
    type: ControlType.String,
    title: "Related Link 1 Label",
    defaultValue: "Product Overview",
  },
  relatedLink1Href: {
    type: ControlType.String,
    title: "Related Link 1 URL",
    defaultValue: "/product",
  },
  relatedLink2Label: {
    type: ControlType.String,
    title: "Related Link 2 Label",
    defaultValue: "Architecture",
  },
  relatedLink2Href: {
    type: ControlType.String,
    title: "Related Link 2 URL",
    defaultValue: "/architecture",
  },
  relatedLink3Label: {
    type: ControlType.String,
    title: "Related Link 3 Label",
    defaultValue: "Trust & Compliance",
  },
  relatedLink3Href: {
    type: ControlType.String,
    title: "Related Link 3 URL",
    defaultValue: "/trust",
  },
  relatedLink4Label: {
    type: ControlType.String,
    title: "Related Link 4 Label",
    defaultValue: "Request a Demo",
  },
  relatedLink4Href: {
    type: ControlType.String,
    title: "Related Link 4 URL",
    defaultValue: "/request-a-demo",
  },
  relatedLink5Label: {
    type: ControlType.String,
    title: "Related Link 5 Label",
    defaultValue: "Learn Hub",
  },
  relatedLink5Href: {
    type: ControlType.String,
    title: "Related Link 5 URL",
    defaultValue: "/resources/learn",
  },
  ctaBgImage: {
    type: ControlType.Image,
    title: "CTA Background Image",
  },
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "See how LLM Capsule works with your data",
  },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  ctaBtn1Label: {
    type: ControlType.String,
    title: "CTA Button 1 Label",
    defaultValue: "Request a Demo",
  },
  ctaBtn1Href: {
    type: ControlType.String,
    title: "CTA Button 1 URL",
    defaultValue: "/request-a-demo",
  },
  ctaFootnote2Label: {
    type: ControlType.String,
    title: "CTA Footnote 2 Label",
    defaultValue: "AWS Marketplace",
  },
  ctaFootnote2Href: {
    type: ControlType.String,
    title: "CTA Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
