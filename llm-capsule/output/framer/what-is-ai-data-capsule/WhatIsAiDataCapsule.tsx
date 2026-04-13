import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

// ── JSON-LD ──────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", position: 4, name: "What Is an AI Data Capsule?", item: "https://llmcapsule.ai/resources/learn/what-is-ai-data-capsule" },
  ],
}

const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI data capsule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI data capsule differ from data masking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
      },
    },
  ],
}

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  brandPrimary:    "#1821E8",
  brandSecondary:  "#5690D4",
  brandAccent:     "#55B45D",
  neutral900:      "#0f0f0f",
  neutral850:      "#141414",
  neutral800:      "#171719",
  neutral700:      "#303135",
  neutral500:      "#636363",
  neutral400:      "#9c9c9c",
  neutral350:      "#adadad",
  neutral300:      "#bababa",
  neutral250:      "#c4c4c4",
  neutral200:      "#e0e0e0",
  neutral150:      "#e6e7e9",
  neutral100:      "#ececec",
  neutral050:      "#f2f2f2",
  neutral025:      "#f7f7f7",
  white:           "#ffffff",
  black:           "#000000",
  textPrimary:     "#0f0f0f",
  textSecondary:   "#636363",
  textTertiary:    "#9c9c9c",
  textInverse:     "#ffffff",
  success:         "#0e824c",
  error:           "#ff3030",
  borderDefault:   "#e6e7e9",
  borderStrong:    "#171719",
  surfaceDark:     "#171719",
  surfaceMid:      "#f2f2f2",
  surfaceLight:    "#f7f7f7",
  surfaceWhite:    "#ffffff",
  gradientBrand:   "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientDark:    "linear-gradient(180deg, #0f0f0f 0%, #171719 100%)",
  overlayBrandTint:   "rgba(24,33,232,0.04)",
  overlayBrandTintMd: "rgba(24,33,232,0.08)",
  overlayBrandTintLt: "rgba(24,33,232,0.06)",
  overlayWhite85:     "rgba(255,255,255,0.85)",
  overlayWhite70:     "rgba(255,255,255,0.70)",
  overlayNavBg:       "rgba(255,255,255,0.92)",
  overlayCtaBdr:      "rgba(255,255,255,0.6)",
  overlayDarkLight:   "rgba(0,0,0,0.15)",
  bgImgGradDeep:      `url('${IMAGE_BASE}/images/bg-gradient-deep-teal.png')`,
  bgImgPaintBlue:     `url('${IMAGE_BASE}/images/bg-paint-blue-iridescent.png')`,
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 3 – Problem
  problemHeading?: string
  problemP1?: string
  problemP2?: string

  // Section 4 – Definition
  definitionHeading?: string
  definitionLabel?: string
  definitionBody?: string

  // Section 5 – Explanation
  explanationHeading?: string
  explanationIntro?: string
  explanationBullet1Title?: string
  explanationBullet1Body?: string
  explanationBullet2Title?: string
  explanationBullet2Body?: string
  explanationBullet3Title?: string
  explanationBullet3Body?: string
  explanationBannerBody?: string

  // Section 6 – Enterprise Example
  exampleHeading?: string
  exampleCardTitle?: string
  exampleCardP1?: string
  exampleCardP2?: string

  // Section 7 – FAQ
  faqHeading?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string

  // Section 8 – Related
  relatedCard1?: string
  relatedCard2?: string
  relatedCard3?: string
  relatedCard4?: string
  relatedCard5?: string

  // CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1?: string
  ctaBtn2?: string
  ctaFootnote1?: string
  ctaFootnote2?: string

  // Screenshot placeholder
  screenshotLabel?: string
}

export default function WhatIsAiDataCapsule({
  heroTitle = "What Is an AI Data Capsule?",
  heroDescription = "Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.",

  problemHeading = "Problem",
  problemP1 = "Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.",
  problemP2 = "The result is a binary choice: expose data to use AI, or protect data and get unusable results.",

  definitionHeading = "Definition",
  definitionLabel = "AI Data Capsule",
  definitionBody = "An AI data capsule is a locally generated AI enablement layer that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.",

  explanationHeading = "Explanation",
  explanationIntro = "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
  explanationBullet1Title = "Local Encapsulation.",
  explanationBullet1Body = "Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.",
  explanationBullet2Title = "Protected AI Processing.",
  explanationBullet2Body = "The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.",
  explanationBullet3Title = "Local Restoration.",
  explanationBullet3Body = "AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.",
  explanationBannerBody = "AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",

  exampleHeading = "Enterprise Example",
  exampleCardTitle = "Financial Compliance Review",
  exampleCardP1 = "A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.",
  exampleCardP2 = "With LLM Capsule, the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.",

  faqHeading = "FAQ",
  faq1Q = "What is an AI data capsule?",
  faq1A = "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
  faq2Q = "How does an AI data capsule differ from data masking?",
  faq2A = "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
  faq3Q = "Does the AI data capsule work with any LLM?",
  faq3A = "Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.",
  faq4Q = "Where is the mapping data stored?",
  faq4A = "The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.",

  relatedCard1 = "Product Overview",
  relatedCard2 = "Architecture",
  relatedCard3 = "Trust & Compliance",
  relatedCard4 = "Request a Demo",
  relatedCard5 = "Why Redaction Breaks AI",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1 = "Request a Demo",
  ctaBtn2 = "Talk to an Architect",
  ctaFootnote1 = "Download Architecture Brief",
  ctaFootnote2 = "AWS Marketplace",

  screenshotLabel = "Data Capsule Concept — Original document vs. encapsulated version with structure preserved",
}: Props) {

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number>(0)
  const toggleFaq = (idx: number) => setOpenFaq(prev => prev === idx ? -1 : idx)

  const faqs = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
    { q: faq4Q, a: faq4A },
  ]

  const relatedLinks = [
    {
      label: relatedCard1, href: "product.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
    },
    {
      label: relatedCard2, href: "architecture.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      label: relatedCard3, href: "trust.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: relatedCard4, href: "request-pov.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      ),
    },
    {
      label: relatedCard5, href: "why-redaction-breaks-enterprise-ai-workflows.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_BREADCRUMB) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_FAQ) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root wrapper ── */
        .wiac-root {
          font-family: "DM Sans", sans-serif;
          color: ${C.textPrimary};
          background-color: ${C.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          width: 100%;
        }
        .wiac-root img, .wiac-root video { max-width: 100%; display: block; }
        .wiac-root a { text-decoration: none; color: inherit; }

        /* ── Container / Inner (container queries) ── */
        .wiac-outer {
          width: 100%;
        }
        .wiac-inner {
          width: 100%;
          container-type: inline-size;
        }
        .wiac-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .wiac-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .wiac-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .wiac-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Article container (1080px max, centered) ── */
        .wiac-article-inner {
          width: 100%;
          container-type: inline-size;
        }
        .wiac-article-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .wiac-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .wiac-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .wiac-article-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Section ── */
        .wiac-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${C.surfaceWhite};
        }
        .wiac-section--hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
        }
        .wiac-section--body {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
        }
        @container (min-width: 768px)  { .wiac-section--body { padding: 60px 0; } }
        @container (min-width: 1440px) { .wiac-section--body { padding: 60px 0; } }

        /* ── Typography ── */
        .wiac-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .wiac-hero-title { font-size: 40px; } }
        @container (min-width: 1024px) { .wiac-hero-title { font-size: 48px; } }
        @container (min-width: 1440px) { .wiac-hero-title { font-size: 64px; } }

        .wiac-hero-desc {
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
        }

        .wiac-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .wiac-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .wiac-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .wiac-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .wiac-section-header h2 { font-size: 28px; } }

        .wiac-text--brand { color: ${C.brandSecondary}; }
        .wiac-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ── Article body paragraphs ── */
        .wiac-body-p {
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .wiac-body-p:last-child { margin-bottom: 0; }

        /* ── Bullet list ── */
        .wiac-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wiac-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
        }
        .wiac-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wiac-bullet__icon::before {
          content: "•";
          color: ${C.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Banner ── */
        .wiac-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: rgba(24,33,232,0.06);
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 48px;
        }
        .wiac-banner__label {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${C.textTertiary};
          margin-bottom: 8px;
          display: block;
        }
        .wiac-banner p {
          font-size: 16px;
          color: ${C.textPrimary};
          line-height: 1.7;
          margin: 0;
        }
        .wiac-banner--spaced { margin-top: 24px; }

        /* ── Card ── */
        .wiac-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container (min-width: 1440px) { .wiac-card { padding: 32px; } }
        .wiac-card__title {
          font-size: 18px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }
        .wiac-card p {
          font-size: 16px;
          line-height: 1.7;
          color: ${C.textSecondary};
          margin: 0;
        }
        .wiac-card p + p { margin-top: 12px; }

        /* ── Screenshot frame ── */
        .wiac-screenshot-frame {
          margin-top: 48px;
          border-radius: 40px 40px 0 0;
          padding: 32px 32px 0;
          background-color: ${C.neutral050};
          background-image: url('${IMAGE_BASE}/images/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .wiac-screenshot-inner {
          background-color: ${C.surfaceWhite};
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }
        .wiac-screenshot-label {
          font-size: 14px;
          color: ${C.textTertiary};
          text-align: center;
          line-height: 1.7;
        }

        /* ── FAQ accordion ── */
        .wiac-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wiac-ac-card {
          border: 1px solid ${C.borderDefault};
          border-radius: 8px;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .wiac-ac-card:hover { background-color: ${C.neutral025}; }
        .wiac-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .wiac-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${C.textPrimary};
        }
        .wiac-ac-card__toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wiac-ac-card__toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .wiac-ac-card__toggle-icon::before,
        .wiac-ac-card__toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${C.textTertiary};
          border-radius: 1px;
        }
        .wiac-ac-card__toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .wiac-ac-card__toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .wiac-ac-card__toggle-icon--open::after { opacity: 0; }
        .wiac-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          font-size: 14px;
          color: ${C.textSecondary};
          line-height: 1.7;
        }
        .wiac-ac-card__body p + p { margin-top: 12px; }

        /* ── Related card-grid ── */
        .wiac-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) { .wiac-card-grid { grid-template-columns: repeat(2, 1fr); } }

        .wiac-card--dark {
          background-color: ${C.neutral850};
          border: 1px solid ${C.neutral700};
          color: ${C.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .wiac-card--dark:hover { background-color: ${C.neutral800}; }
        .wiac-card--dark__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .wiac-card--dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }

        /* ── Section title with icon ── */
        .wiac-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .wiac-section-title-icon__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .wiac-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }

        /* ── CTA Band ── */
        .wiac-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: url('${IMAGE_BASE}/images/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
        }
        .wiac-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .wiac-cta-band > * { position: relative; z-index: 1; }
        .wiac-cta-band__inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .wiac-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .wiac-cta-band__inner { max-width: 1080px; } }
        .wiac-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container (min-width: 768px)  { .wiac-cta-band__title { font-size: 40px; } }
        @container (min-width: 1440px) { .wiac-cta-band__title { font-size: 50px; } }
        .wiac-cta-band__desc {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
        }
        .wiac-cta-band__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .wiac-cta-band__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 18px;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.6);
          background-color: rgba(255,255,255,0.92);
          color: ${C.textPrimary};
          padding: 16px 48px;
          text-decoration: none;
          transition: background-color 0.2s;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .wiac-cta-band__btn:hover { background-color: ${C.white}; }
        .wiac-cta-band__footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          margin-top: 8px;
        }
        .wiac-cta-band__footnote a {
          color: rgba(255,255,255,0.70);
          text-decoration: none;
        }
        .wiac-cta-band__footnote a:hover { color: ${C.white}; }

        /* ── Spacing utility ── */
        .wiac-mt-lg { margin-top: 24px; }
        .wiac-mt-xl { margin-top: 32px; }
      `}</style>

      <div className="wiac-root">

        {/* ── Section 1: Hero ── */}
        <section id="section-hero" className="wiac-section--hero">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <h1 className="wiac-hero-title">{heroTitle}</h1>
              <p className="wiac-hero-desc">{heroDescription}</p>
            </div>
          </div>
        </section>

        {/* ── Section 2: Screenshot ── */}
        <section id="section-2" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-screenshot-frame">
                <div className="wiac-screenshot-inner">
                  <p className="wiac-screenshot-label">{screenshotLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Problem ── */}
        <section id="section-3" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-header">
                <h2><span className="wiac-text--brand">{problemHeading}</span></h2>
              </div>
              <p className="wiac-body-p">{problemP1}</p>
              <p className="wiac-body-p">{problemP2}</p>
            </div>
          </div>
        </section>

        {/* ── Section 4: Definition ── */}
        <section id="section-4" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-header">
                <h2><span className="wiac-text--brand">{definitionHeading}</span></h2>
              </div>
              <div className="wiac-banner">
                <span className="wiac-banner__label">{definitionLabel}</span>
                <p>{definitionBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Explanation ── */}
        <section id="section-5" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-header">
                <h2><span className="wiac-text--brand">{explanationHeading}</span></h2>
              </div>
              <p className="wiac-body-p">{explanationIntro}</p>
              <ul className="wiac-bullet">
                <li className="wiac-bullet__item">
                  <span className="wiac-bullet__icon" />
                  <span><strong>{explanationBullet1Title}</strong> {explanationBullet1Body}</span>
                </li>
                <li className="wiac-bullet__item">
                  <span className="wiac-bullet__icon" />
                  <span><strong>{explanationBullet2Title}</strong> {explanationBullet2Body}</span>
                </li>
                <li className="wiac-bullet__item">
                  <span className="wiac-bullet__icon" />
                  <span><strong>{explanationBullet3Title}</strong> {explanationBullet3Body}</span>
                </li>
              </ul>
              <div className="wiac-banner wiac-banner--spaced">
                <p><strong>Key concept:</strong> {explanationBannerBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Enterprise Example ── */}
        <section id="section-6" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-header">
                <h2><span className="wiac-text--brand">{exampleHeading}</span></h2>
              </div>
              <div className="wiac-card">
                <h4 className="wiac-card__title">{exampleCardTitle}</h4>
                <p>{exampleCardP1}</p>
                <p>{exampleCardP2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: FAQ ── */}
        <section id="section-7" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-header">
                <h2>{faqHeading}</h2>
              </div>
              <div className="wiac-ac-list">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className="wiac-ac-card"
                      onClick={() => toggleFaq(idx)}
                    >
                      <div className="wiac-ac-card__header">
                        <span className="wiac-ac-card__title">{faq.q}</span>
                        <span className="wiac-ac-card__toggle">
                          <span className={`wiac-ac-card__toggle-icon${isOpen ? " wiac-ac-card__toggle-icon--open" : ""}`} />
                        </span>
                      </div>
                      {isOpen && (
                        <div className="wiac-ac-card__body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 8: Related ── */}
        <section id="section-8" className="wiac-section--body">
          <div className="wiac-article-inner">
            <div className="wiac-article-container">
              <div className="wiac-section-title-icon wiac-mt-lg">
                <span className="wiac-section-title-icon__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </span>
                <span className="wiac-section-title-icon__text">Related</span>
              </div>
              <div className="wiac-card-grid">
                {relatedLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="wiac-card--dark">
                    <span className="wiac-card--dark__icon">{link.icon}</span>
                    <span className="wiac-card--dark__title">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section CTA ── */}
        <section id="section-cta">
          <div className="wiac-outer">
            <div className="wiac-inner">
              <div className="wiac-cta-band">
                <div className="wiac-cta-band__inner">
                  <h2 className="wiac-cta-band__title">
                    See how <span className="wiac-text--product">LLM Capsule</span> works with your data
                  </h2>
                  <p className="wiac-cta-band__desc">{ctaDescription}</p>
                  <div className="wiac-cta-band__actions">
                    <a href="request-pov.html" className="wiac-cta-band__btn">{ctaBtn1}</a>
                    <a href="architecture.html" className="wiac-cta-band__btn">{ctaBtn2}</a>
                  </div>
                  <p className="wiac-cta-band__footnote">
                    <a href="downloads.html">{ctaFootnote1}</a>
                    &nbsp;&nbsp;·&nbsp;&nbsp;
                    <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener noreferrer">{ctaFootnote2}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

addPropertyControls(WhatIsAiDataCapsule, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "What Is an AI Data Capsule?",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.",
  },
  screenshotLabel: {
    type: ControlType.String,
    title: "Screenshot Label",
    defaultValue: "Data Capsule Concept — Original document vs. encapsulated version with structure preserved",
  },
  problemHeading: {
    type: ControlType.String,
    title: "Problem Heading",
    defaultValue: "Problem",
  },
  problemP1: {
    type: ControlType.String,
    title: "Problem P1",
    defaultValue: "Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.",
  },
  problemP2: {
    type: ControlType.String,
    title: "Problem P2",
    defaultValue: "The result is a binary choice: expose data to use AI, or protect data and get unusable results.",
  },
  definitionHeading: {
    type: ControlType.String,
    title: "Definition Heading",
    defaultValue: "Definition",
  },
  definitionLabel: {
    type: ControlType.String,
    title: "Definition Label",
    defaultValue: "AI Data Capsule",
  },
  definitionBody: {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "An AI data capsule is a locally generated AI enablement layer that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.",
  },
  explanationHeading: {
    type: ControlType.String,
    title: "Explanation Heading",
    defaultValue: "Explanation",
  },
  explanationIntro: {
    type: ControlType.String,
    title: "Explanation Intro",
    defaultValue: "An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:",
  },
  explanationBullet1Title: {
    type: ControlType.String,
    title: "Bullet 1 Title",
    defaultValue: "Local Encapsulation.",
  },
  explanationBullet1Body: {
    type: ControlType.String,
    title: "Bullet 1 Body",
    defaultValue: "Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.",
  },
  explanationBullet2Title: {
    type: ControlType.String,
    title: "Bullet 2 Title",
    defaultValue: "Protected AI Processing.",
  },
  explanationBullet2Body: {
    type: ControlType.String,
    title: "Bullet 2 Body",
    defaultValue: "The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.",
  },
  explanationBullet3Title: {
    type: ControlType.String,
    title: "Bullet 3 Title",
    defaultValue: "Local Restoration.",
  },
  explanationBullet3Body: {
    type: ControlType.String,
    title: "Bullet 3 Body",
    defaultValue: "AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.",
  },
  explanationBannerBody: {
    type: ControlType.String,
    title: "Key Concept Banner",
    defaultValue: "AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.",
  },
  exampleHeading: {
    type: ControlType.String,
    title: "Example Heading",
    defaultValue: "Enterprise Example",
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "Financial Compliance Review",
  },
  exampleCardP1: {
    type: ControlType.String,
    title: "Example Card P1",
    defaultValue: "A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.",
  },
  exampleCardP2: {
    type: ControlType.String,
    title: "Example Card P2",
    defaultValue: "With LLM Capsule, the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.",
  },
  faqHeading: {
    type: ControlType.String,
    title: "FAQ Heading",
    defaultValue: "FAQ",
  },
  faq1Q: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is an AI data capsule?",
  },
  faq1A: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
  },
  faq2Q: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "How does an AI data capsule differ from data masking?",
  },
  faq2A: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
  },
  faq3Q: {
    type: ControlType.String,
    title: "FAQ 3 Question",
    defaultValue: "Does the AI data capsule work with any LLM?",
  },
  faq3A: {
    type: ControlType.String,
    title: "FAQ 3 Answer",
    defaultValue: "Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.",
  },
  faq4Q: {
    type: ControlType.String,
    title: "FAQ 4 Question",
    defaultValue: "Where is the mapping data stored?",
  },
  faq4A: {
    type: ControlType.String,
    title: "FAQ 4 Answer",
    defaultValue: "The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.",
  },
  relatedCard1: {
    type: ControlType.String,
    title: "Related 1",
    defaultValue: "Product Overview",
  },
  relatedCard2: {
    type: ControlType.String,
    title: "Related 2",
    defaultValue: "Architecture",
  },
  relatedCard3: {
    type: ControlType.String,
    title: "Related 3",
    defaultValue: "Trust & Compliance",
  },
  relatedCard4: {
    type: ControlType.String,
    title: "Related 4",
    defaultValue: "Request a Demo",
  },
  relatedCard5: {
    type: ControlType.String,
    title: "Related 5",
    defaultValue: "Why Redaction Breaks AI",
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
  },
  ctaBtn1: {
    type: ControlType.String,
    title: "CTA Button 1",
    defaultValue: "Request a Demo",
  },
  ctaBtn2: {
    type: ControlType.String,
    title: "CTA Button 2",
    defaultValue: "Talk to an Architect",
  },
  ctaFootnote1: {
    type: ControlType.String,
    title: "CTA Footnote 1",
    defaultValue: "Download Architecture Brief",
  },
  ctaFootnote2: {
    type: ControlType.String,
    title: "CTA Footnote 2",
    defaultValue: "AWS Marketplace",
  },
})
