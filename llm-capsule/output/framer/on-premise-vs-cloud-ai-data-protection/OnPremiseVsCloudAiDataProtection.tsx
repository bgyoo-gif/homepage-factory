import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Brand Colors (LLM Capsule) ───────────────────────────────────────────────
const C = {
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
  neutral250: "#c4c4c4",
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
  bgGradBlue:    "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-blue-violet.png')",
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 2 – Problem
  problemHeading?: string
  problemPara1?: string
  problemPara2?: string

  // Section 3 – Explanation
  explanationHeading?: string
  step1Title?: string
  step1Body?: string
  step2Title?: string
  step2Body?: string
  step3Title?: string
  step3Body?: string
  step4Title?: string
  step4Body?: string
  step5Title?: string
  step5Body?: string
  bannerText?: string

  // Section 4 – Enterprise Example
  exampleHeading?: string
  exampleCardTitle?: string
  exampleCardPara1?: string
  exampleCardPara2?: string

  // Section 5 – FAQ
  faqHeading?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string

  // Section 6 – Related
  relatedHeading?: string
  related1Label?: string
  related2Label?: string
  related3Label?: string
  related4Label?: string

  // Section 7 – CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn2Label?: string
  ctaFootnote1?: string
  ctaFootnote2?: string
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", position: 4, name: "On-Premise vs Cloud AI Data Protection", item: "https://llmcapsule.ai/resources/learn/on-premise-vs-cloud-ai-data-protection" },
  ],
})

const JSON_LD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does LLM Capsule work on-premise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.",
      },
    },
  ],
})

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)
const IconBox = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)
const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const IconArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────
export default function OnPremiseVsCloudAiDataProtection({
  heroTitle = "On-Premise vs Cloud AI Data Protection",
  heroDescription = "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",

  problemHeading = "Problem",
  problemPara1 = "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
  problemPara2 = "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",

  explanationHeading = "Explanation",
  step1Title = "On-premise deployment.",
  step1Body = "The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.",
  step2Title = "Air-gapped deployment.",
  step2Body = "For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.",
  step3Title = "Cloud deployment.",
  step3Body = "Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.",
  step4Title = "Hybrid deployment.",
  step4Body = "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.",
  step5Title = "Embedded integration.",
  step5Body = "LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.",
  bannerText = "One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.",

  exampleHeading = "Enterprise Example",
  exampleCardTitle = "Government Agency — Air-Gapped Deployment",
  exampleCardPara1 = "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.",
  exampleCardPara2 = "LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.",

  faqHeading = "FAQ",
  faq1Question = "Does LLM Capsule work on-premise?",
  faq1Answer = "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.",
  faq2Question = "Is LLM Capsule available on AWS Marketplace?",
  faq2Answer = "Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.",

  relatedHeading = "Related",
  related1Label = "Product Overview",
  related2Label = "Architecture",
  related3Label = "Trust & Compliance",
  related4Label = "Request a Demo",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn2Label = "Talk to an Architect",
  ctaFootnote1 = "Download Architecture Brief",
  ctaFootnote2 = "AWS Marketplace",
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx))
  }

  const faqs = [
    { q: faq1Question, a: faq1Answer },
    { q: faq2Question, a: faq2Answer },
  ]

  const relatedCards = [
    { label: related1Label, icon: <IconBox /> },
    { label: related2Label, icon: <IconLayers /> },
    { label: related3Label, icon: <IconShield /> },
    { label: related4Label, icon: <IconArrow /> },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .opvc-root {
          font-family: "DM Sans", sans-serif;
          color: ${C.textPrimary};
          background-color: ${C.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
          width: 100%;
        }

        /* ── Inner wrapper provides container-type ── */
        .opvc-inner {
          width: 100%;
          container-type: inline-size;
        }

        /* ── Article container (max 1080px) ── */
        .opvc-article-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .opvc-article-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .opvc-article-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .opvc-article-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Article inner limiter */
        .opvc-article-inner {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Section ── */
        .opvc-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${C.surfaceWhite};
        }
        .opvc-section--hero {
          width: 100%;
          padding: 100px 0 60px;
          background-color: ${C.surfaceWhite};
        }

        /* ── Article section header ── */
        .opvc-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .opvc-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px) {
          .opvc-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .opvc-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .opvc-section-header h2 { font-size: 28px; }
        }

        /* ── Hero title ── */
        .opvc-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px) {
          .opvc-hero-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .opvc-hero-title { font-size: 48px; }
        }
        @container (min-width: 1440px) {
          .opvc-hero-title { font-size: 64px; }
        }

        .opvc-hero-description {
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
        }

        /* ── Body paragraph ── */
        .opvc-paragraph {
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .opvc-paragraph:last-child { margin-bottom: 0; }
        .opvc-paragraph strong {
          font-weight: 600;
          color: ${C.textPrimary};
        }

        /* ── Brand text ── */
        .opvc-brand { color: ${C.brandSecondary}; }
        .opvc-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* ── Numbered bullet list ── */
        .opvc-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          counter-reset: opvc-bullet;
        }
        .opvc-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
        }
        .opvc-bullet-num {
          counter-increment: opvc-bullet;
          content: counter(opvc-bullet);
          width: 20px;
          height: 20px;
          min-width: 20px;
          border-radius: 50%;
          background-color: ${C.brandPrimary};
          color: ${C.white};
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* ── Banner ── */
        .opvc-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 48px;
          color: ${C.textPrimary};
        }

        /* ── Card ── */
        .opvc-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .opvc-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }
        .opvc-card p {
          font-size: 16px;
          line-height: 1.7;
          color: ${C.textSecondary};
          margin: 0;
        }
        @container (min-width: 1440px) {
          .opvc-card { padding: 32px; }
        }

        /* ── Section title icon ── */
        .opvc-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .opvc-section-title-icon__icon {
          color: ${C.brandSecondary};
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .opvc-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }

        /* ── Card grid ── */
        .opvc-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @container (min-width: 768px) {
          .opvc-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Dark card ── */
        .opvc-card-dark {
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
          cursor: pointer;
          text-decoration: none;
        }
        .opvc-card-dark:hover { background-color: ${C.neutral800}; }
        .opvc-card-dark__icon { flex-shrink: 0; color: ${C.brandSecondary}; display: flex; }
        .opvc-card-dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }

        /* ── FAQ Accordion ── */
        .opvc-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .opvc-ac-card {
          border: 1px solid ${C.borderDefault};
          border-radius: 8px;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .opvc-ac-card:hover { background-color: ${C.neutral025}; }
        .opvc-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .opvc-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${C.textPrimary};
        }
        .opvc-ac-toggle {
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
        .opvc-ac-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .opvc-ac-toggle-icon::before,
        .opvc-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${C.textTertiary};
          border-radius: 1px;
        }
        .opvc-ac-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .opvc-ac-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .opvc-ac-toggle-icon--open::after { opacity: 0; }
        .opvc-ac-body {
          padding: 24px;
          border-top: 1px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          font-size: 14px;
          color: ${C.textSecondary};
          line-height: 1.7;
        }

        /* ── CTA Band ── */
        .opvc-cta {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
        }
        .opvc-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .opvc-cta > * { position: relative; z-index: 1; }
        @container (min-width: 768px) {
          .opvc-cta { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .opvc-cta { padding: 120px 120px; background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-blue-violet.png'); }
        }

        .opvc-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) {
          .opvc-cta-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .opvc-cta-inner { max-width: 1080px; }
        }

        .opvc-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container (min-width: 768px) {
          .opvc-cta-title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .opvc-cta-title { font-size: 50px; }
        }

        .opvc-cta-description {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
        }

        .opvc-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .opvc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.6);
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${C.textPrimary};
          backdrop-filter: blur(8px);
        }
        .opvc-btn:hover { background-color: ${C.white}; }

        .opvc-cta-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .opvc-cta-footnote a {
          font-size: 14px;
          color: rgba(255,255,255,0.70);
          text-decoration: none;
          transition: color 0.2s;
        }
        .opvc-cta-footnote a:hover { color: ${C.white}; }

        /* CTA title starts at 36px on mobile (set above), scales up at 768px+ via @container rules above */
      `}</style>

      <div className="opvc-root">
        <div className="opvc-inner">

          {/* ── Section 1: Hero ── */}
          <section id="section-hero" className="opvc-section--hero">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <h1 className="opvc-hero-title">{heroTitle}</h1>
                <p className="opvc-hero-description">{heroDescription}</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Problem ── */}
          <section id="section-2" className="opvc-section">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <div className="opvc-section-header">
                  <h2><span className="opvc-brand">{problemHeading}</span></h2>
                </div>
                <p className="opvc-paragraph">{problemPara1}</p>
                <p className="opvc-paragraph">{problemPara2}</p>
              </div>
            </div>
          </section>

          {/* ── Section 3: Explanation ── */}
          <section id="section-3" className="opvc-section">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <div className="opvc-section-header">
                  <h2><span className="opvc-brand">{explanationHeading}</span></h2>
                </div>
                <ol className="opvc-bullet-list">
                  {[
                    { title: step1Title, body: step1Body },
                    { title: step2Title, body: step2Body },
                    { title: step3Title, body: step3Body },
                    { title: step4Title, body: step4Body },
                    { title: step5Title, body: step5Body },
                  ].map((step, i) => (
                    <li key={i} className="opvc-bullet-item">
                      <span className="opvc-bullet-num">{i + 1}</span>
                      <span>
                        <strong>{step.title}</strong>{" "}
                        {step.body}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="opvc-banner">
                  {bannerText}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Enterprise Example ── */}
          <section id="section-4" className="opvc-section">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <div className="opvc-section-header">
                  <h2>Enterprise <span className="opvc-brand">Example</span></h2>
                </div>
                <div className="opvc-card">
                  <h4>{exampleCardTitle}</h4>
                  <p>{exampleCardPara1}</p>
                  <p>{exampleCardPara2}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: FAQ ── */}
          <section id="section-5" className="opvc-section">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <div className="opvc-section-header">
                  <h2><span className="opvc-brand">{faqHeading}</span></h2>
                </div>
                <div className="opvc-ac-list">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="opvc-ac-card">
                      <div
                        className="opvc-ac-header"
                        onClick={() => toggleFaq(idx)}
                        role="button"
                        aria-expanded={openFaq === idx}
                      >
                        <span className="opvc-ac-title">{faq.q}</span>
                        <span className="opvc-ac-toggle">
                          <span className={`opvc-ac-toggle-icon${openFaq === idx ? " opvc-ac-toggle-icon--open" : ""}`} />
                        </span>
                      </div>
                      {openFaq === idx && (
                        <div className="opvc-ac-body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Related Pages ── */}
          <section id="section-6" className="opvc-section">
            <div className="opvc-article-container">
              <div className="opvc-article-inner">
                <div className="opvc-section-title-icon">
                  <span className="opvc-section-title-icon__icon">
                    <IconLink />
                  </span>
                  <span className="opvc-section-title-icon__text">{relatedHeading}</span>
                </div>
                <div className="opvc-card-grid">
                  {relatedCards.map((card, idx) => (
                    <a key={idx} href="#" className="opvc-card-dark">
                      <span className="opvc-card-dark__icon">{card.icon}</span>
                      <span className="opvc-card-dark__title">{card.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: CTA Band ── */}
          <section id="section-cta" className="opvc-cta">
            <div className="opvc-cta-inner">
              <h2 className="opvc-cta-title">
                {ctaTitle}
              </h2>
              <p className="opvc-cta-description">{ctaDescription}</p>
              <div className="opvc-cta-actions">
                <a href="#" className="opvc-btn">{ctaBtn1Label}</a>
                <a href="#" className="opvc-btn">{ctaBtn2Label}</a>
              </div>
              <div className="opvc-cta-footnote">
                <a href="#">{ctaFootnote1}</a>
                <a href="#" target="_blank" rel="noopener">{ctaFootnote2}</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(OnPremiseVsCloudAiDataProtection, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "On-Premise vs Cloud AI Data Protection",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",
  },

  problemHeading: {
    type: ControlType.String,
    title: "Problem Heading",
    defaultValue: "Problem",
  },
  problemPara1: {
    type: ControlType.String,
    title: "Problem Para 1",
    defaultValue: "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
  },
  problemPara2: {
    type: ControlType.String,
    title: "Problem Para 2",
    defaultValue: "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",
  },

  explanationHeading: {
    type: ControlType.String,
    title: "Explanation Heading",
    defaultValue: "Explanation",
  },
  step1Title: { type: ControlType.String, title: "Step 1 Title", defaultValue: "On-premise deployment." },
  step1Body:  { type: ControlType.String, title: "Step 1 Body",  defaultValue: "The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed." },
  step2Title: { type: ControlType.String, title: "Step 2 Title", defaultValue: "Air-gapped deployment." },
  step2Body:  { type: ControlType.String, title: "Step 2 Body",  defaultValue: "For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration." },
  step3Title: { type: ControlType.String, title: "Step 3 Title", defaultValue: "Cloud deployment." },
  step3Body:  { type: ControlType.String, title: "Step 3 Body",  defaultValue: "Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally." },
  step4Title: { type: ControlType.String, title: "Step 4 Title", defaultValue: "Hybrid deployment." },
  step4Body:  { type: ControlType.String, title: "Step 4 Body",  defaultValue: "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance." },
  step5Title: { type: ControlType.String, title: "Step 5 Title", defaultValue: "Embedded integration." },
  step5Body:  { type: ControlType.String, title: "Step 5 Body",  defaultValue: "LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack." },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.",
  },

  exampleHeading: { type: ControlType.String, title: "Example Heading", defaultValue: "Enterprise Example" },
  exampleCardTitle: { type: ControlType.String, title: "Example Card Title", defaultValue: "Government Agency — Air-Gapped Deployment" },
  exampleCardPara1: { type: ControlType.String, title: "Example Card Para 1", defaultValue: "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity." },
  exampleCardPara2: { type: ControlType.String, title: "Example Card Para 2", defaultValue: "LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries." },

  faqHeading: { type: ControlType.String, title: "FAQ Heading", defaultValue: "FAQ" },
  faq1Question: { type: ControlType.String, title: "FAQ 1 Question", defaultValue: "Does LLM Capsule work on-premise?" },
  faq1Answer:   { type: ControlType.String, title: "FAQ 1 Answer",   defaultValue: "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type." },
  faq2Question: { type: ControlType.String, title: "FAQ 2 Question", defaultValue: "Is LLM Capsule available on AWS Marketplace?" },
  faq2Answer:   { type: ControlType.String, title: "FAQ 2 Answer",   defaultValue: "Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account." },

  relatedHeading: { type: ControlType.String, title: "Related Heading", defaultValue: "Related" },
  related1Label:  { type: ControlType.String, title: "Related 1 Label", defaultValue: "Product Overview" },
  related2Label:  { type: ControlType.String, title: "Related 2 Label", defaultValue: "Architecture" },
  related3Label:  { type: ControlType.String, title: "Related 3 Label", defaultValue: "Trust & Compliance" },
  related4Label:  { type: ControlType.String, title: "Related 4 Label", defaultValue: "Request a Demo" },

  ctaTitle:        { type: ControlType.String, title: "CTA Title",       defaultValue: "See how LLM Capsule works with your data" },
  ctaDescription:  { type: ControlType.String, title: "CTA Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  ctaBtn1Label:    { type: ControlType.String, title: "CTA Button 1",    defaultValue: "Request a Demo" },
  ctaBtn2Label:    { type: ControlType.String, title: "CTA Button 2",    defaultValue: "Talk to an Architect" },
  ctaFootnote1:    { type: ControlType.String, title: "CTA Footnote 1",  defaultValue: "Download Architecture Brief" },
  ctaFootnote2:    { type: ControlType.String, title: "CTA Footnote 2",  defaultValue: "AWS Marketplace" },
})
