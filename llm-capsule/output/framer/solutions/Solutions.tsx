import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Brand palette ───────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  brandGradient:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  neutral900: "#0f0f0f",
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
  success:    "#0e824c",
  error:      "#ff3030",
  borderDefault: "#e6e7e9",
  surfaceDark:  "#171719",
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
}

// ─── Industry card data ──────────────────────────────────────────
interface IndustryCard {
  icon: string
  title: string
  description: string
  blockedLabel: string
  enabledLabel: string
  tags: string[]
}

// ─── Props ───────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroTitleHighlight?: string
  heroDescription?: string
  heroCta1Label?: string
  heroCta1Href?: string
  heroCta2Label?: string
  heroCta2Href?: string

  // Section 2
  s2Title?: string
  s2TitleHighlight?: string
  s2Description?: string

  // KPI
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string
  kpi4Number?: string
  kpi4Label?: string
  bannerTagline?: string
  bannerNote?: string

  // CTA
  ctaTitle?: string
  ctaTitleHighlight?: string
  ctaDescription?: string
  ctaCta1Label?: string
  ctaCta1Href?: string
  ctaCta2Label?: string
  ctaCta2Href?: string
  ctaCta3Label?: string
  ctaCta3Href?: string
  ctaFootnote1Label?: string
  ctaFootnote1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── SVG Icons ───────────────────────────────────────────────────
const IconPublic = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20"/><path d="M5 20v-8h4v8"/><path d="M15 20v-8h4v8"/><path d="M12 4l-8 8h16l-8-8z"/>
  </svg>
)
const IconFinance = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </svg>
)
const IconHealth = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
  </svg>
)
const IconLegal = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="M7 21h10"/><path d="M12 3v18"/>
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
)
const IconTelecom = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12 7 2"/><path d="m7 12 5-10"/><path d="m12 12 5-10"/><path d="m17 12 5-10"/>
    <path d="M4.5 7h15"/><path d="M12 16v6"/>
  </svg>
)
const IconSecurity = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

const ICONS = [IconPublic, IconFinance, IconHealth, IconLegal, IconTelecom, IconSecurity]

// ─── Default card data ────────────────────────────────────────────
const DEFAULT_CARDS: IndustryCard[] = [
  {
    icon: "public",
    title: "Public Sector",
    description: "Uses AI to draft operational briefings, no classified info ever reaches external servers.",
    blockedLabel: "Military personnel data, classified operation details & security-grade documents",
    enabledLabel: "AI-assisted intelligence reports & briefing summaries — with full audit trail",
    tags: ["Ministry of National Defense (South Korea)"],
  },
  {
    icon: "finance",
    title: "Finance / Insurance",
    description: "Uses AI to streamline claim reviews, policyholder data stays fully protected.",
    blockedLabel: "Policyholder names, claim records & credit information in prompts",
    enabledLabel: "AI-powered insurance claim analysis & underwriting reports — no customer data leaves",
    tags: ["Kyobo", "DB Insurance"],
  },
  {
    icon: "health",
    title: "Healthcare",
    description: "Uses AI to summarize patient records, PHI never touches an external server.",
    blockedLabel: "Patient names, diagnoses & medical record IDs",
    enabledLabel: "AI-generated clinical summaries & radiology reports — PHI stays local",
    tags: ["Ewha Womans University Medical Center"],
  },
  {
    icon: "legal",
    title: "Legal",
    description: "Drafts court documents with AI, no case info leaves the firm.",
    blockedLabel: "Client names, case details & privileged information",
    enabledLabel: "AI-drafted memos, briefs & contract reviews — fully contained",
    tags: ["Shin&Kim"],
  },
  {
    icon: "telecom",
    title: "Telecom",
    description: "Leverage AI across operations, customer and network data fully de-identified.",
    blockedLabel: "Subscriber identities, call records, IP addresses & network configs",
    enabledLabel: "AI-driven customer analysis & network operations — all data de-identified before use",
    tags: ["SK Telecom", "Deutsche Telekom", "T Challenge 2026 Top 12"],
  },
  {
    icon: "security",
    title: "Network Security",
    description: "Enables industrial clients to use public AI with all sensitive operational data protected.",
    blockedLabel: "Internal system data, vulnerability reports & infrastructure details in prompts",
    enabledLabel: "Regulated industries can safely adopt public LLMs — sensitive info de-identified at the gate",
    tags: ["Claroty"],
  },
]

// ─── Component ────────────────────────────────────────────────────
export default function Solutions({
  heroTitle = "AI, Now Safe for",
  heroTitleHighlight = "Every Industry",
  heroDescription = "Regulated and document-heavy industries can now adopt AI on real enterprise data. LLM Capsule is an AI enablement data layer and plugin that removes the data exposure barrier blocking enterprise AI adoption — enabling AI first, protecting data at the data layer.",
  heroCta1Label = "Request a Demo",
  heroCta1Href = "https://llmcapsule.ai/request-pov",
  heroCta2Label = "See Product",
  heroCta2Href = "https://llmcapsule.ai/product",

  s2Title = "How Each Industry Uses",
  s2TitleHighlight = "LLM Capsule",
  s2Description = "Regulated industries can now adopt AI on real enterprise data. See how each industry uses LLM Capsule to enable AI while protecting sensitive information.",

  kpi1Number = "98.1%",
  kpi1Label = "Detection Accuracy",
  kpi2Number = "99.14%",
  kpi2Label = "Workflow Accuracy",
  kpi3Number = "100%",
  kpi3Label = "Structured PII",
  kpi4Number = "98%",
  kpi4Label = "Response Similarity",
  bannerTagline = "Enable AI. Protect data. Restore results. Track everything.",
  bannerNote = "0.12s processing per 2,200-character document",

  ctaTitle = "See how your industry uses",
  ctaTitleHighlight = "LLM Capsule",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation questions. We will show how LLM Capsule fits your environment.",
  ctaCta1Label = "Request a Demo",
  ctaCta1Href = "https://llmcapsule.ai/request-pov",
  ctaCta2Label = "See Product",
  ctaCta2Href = "https://llmcapsule.ai/product",
  ctaCta3Label = "View Architecture",
  ctaCta3Href = "https://llmcapsule.ai/architecture",
  ctaFootnote1Label = "Download Architecture Brief",
  ctaFootnote1Href = "https://llmcapsule.ai/downloads",
  ctaFootnote2Label = "Available on AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://llmcapsule.ai/solutions" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ── */
        .sol-root *, .sol-root *::before, .sol-root *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .sol-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.neutral900};
          background-color: ${P.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        .sol-root a { text-decoration: none; color: inherit; }
        .sol-root img { max-width: 100%; display: block; }

        /* ── Wrapper (container query host) ── */
        .sol-wrap {
          width: 100%;
          container-type: inline-size;
          container-name: sol;
        }

        /* ── Container ── */
        .sol-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
        }
        @container sol (min-width: 768px)  { .sol-container { padding: 0 32px; } }
        @container sol (min-width: 1024px) { .sol-container { padding: 0 32px; } }
        @container sol (min-width: 1440px) { .sol-container { padding: 0 120px; max-width: 1440px; } }

        /* ══════════════════════════════════════════════════════════
           SECTION 1 — HERO
        ══════════════════════════════════════════════════════════ */
        .sol-hero-section {
          width: 100%;
          padding: 100px 0 60px;
          background-color: ${P.surfaceWhite};
        }
        .sol-hero {
          text-align: center;
        }
        .sol-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${P.neutral900};
          margin-bottom: 12px;
        }
        @container sol (min-width: 768px)  { .sol-hero__title { font-size: 40px; } }
        @container sol (min-width: 1024px) { .sol-hero__title { font-size: 48px; } }
        @container sol (min-width: 1440px) { .sol-hero__title { font-size: 64px; } }

        .sol-hero__title-highlight {
          color: ${P.brandSecondary};
        }
        .sol-hero__description {
          font-size: 18px;
          color: ${P.neutral500};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 16px;
        }
        @container sol (min-width: 1024px) { .sol-hero__description { max-width: 720px; } }
        @container sol (min-width: 1440px) { .sol-hero__description { max-width: 1080px; } }

        .sol-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 20px;
        }

        /* ══════════════════════════════════════════════════════════
           BUTTONS
        ══════════════════════════════════════════════════════════ */
        .sol-btn {
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
          padding: 12px 32px;
          font-size: 16px;
        }
        .sol-btn--primary {
          background: ${P.brandGradient};
          color: ${P.white};
        }
        .sol-btn--primary:hover { opacity: 0.88; }
        .sol-btn--secondary {
          background-color: transparent;
          color: ${P.neutral900};
          border: 1px solid ${P.borderDefault};
        }
        .sol-btn--secondary:hover { background-color: ${P.surfaceLight}; }
        .sol-btn--sm {
          padding: 8px 16px;
          font-size: 14px;
        }
        .sol-btn--cta {
          background-color: rgba(255,255,255,0.92);
          color: ${P.neutral900};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          padding: 12px 32px;
          font-size: 16px;
        }
        .sol-btn--cta:hover { background-color: ${P.white}; }

        /* ══════════════════════════════════════════════════════════
           SECTION 2 — INDUSTRY CARDS
        ══════════════════════════════════════════════════════════ */
        .sol-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }

        .sol-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }
        .sol-section-header__title {
          font-size: 20px;
          font-weight: 700;
          color: ${P.neutral900};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container sol (min-width: 768px)  { .sol-section-header__title { font-size: 22px; } }
        @container sol (min-width: 1024px) { .sol-section-header__title { font-size: 24px; } }
        @container sol (min-width: 1440px) { .sol-section-header__title { font-size: 28px; } }

        .sol-section-header__highlight {
          color: ${P.brandSecondary};
        }
        .sol-section-header__description {
          font-size: 18px;
          color: ${P.neutral500};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        @container sol (min-width: 1024px) { .sol-section-header__description { max-width: 720px; } }
        @container sol (min-width: 1440px) { .sol-section-header__description { max-width: 1080px; } }

        /* Card Grid */
        .sol-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container sol (min-width: 768px)  { .sol-card-grid { grid-template-columns: repeat(2, 1fr); } }
        @container sol (min-width: 1024px) { .sol-card-grid { grid-template-columns: repeat(3, 1fr); } }

        /* Card */
        .sol-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container sol (min-width: 1440px) { .sol-card { padding: 32px; } }

        .sol-card__icon-wrap {
          color: ${P.brandSecondary};
          margin-bottom: 4px;
        }
        .sol-card__title {
          font-size: 18px;
          font-weight: 600;
          color: ${P.neutral900};
          line-height: 1.2;
        }
        .sol-card__description {
          font-size: 14px;
          color: ${P.neutral500};
          line-height: 1.7;
          flex: 1;
        }
        .sol-card__divider {
          border: none;
          border-top: 1px solid ${P.borderDefault};
          margin: 4px 0;
        }

        /* Industry state blocks */
        .sol-industry-states {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sol-industry-state {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 12px;
          border-radius: 5px;
          font-size: 14px;
          line-height: 1.5;
        }
        .sol-industry-state--blocked {
          background-color: ${P.neutral050};
          color: ${P.neutral500};
        }
        .sol-industry-state--enabled {
          background-color: rgba(14, 130, 76, 0.06);
          color: ${P.neutral900};
        }

        /* Badge */
        .sol-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 6px;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .sol-badge--error {
          background-color: rgba(255,48,48,0.12);
          color: ${P.error};
        }
        .sol-badge--success {
          background-color: rgba(14,130,76,0.12);
          color: ${P.success};
        }

        /* Tags */
        .sol-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .sol-card__tag {
          font-size: 12px;
          color: ${P.neutral400};
          background-color: ${P.surfaceMid};
          padding: 2px 10px;
          border-radius: 9999px;
        }

        /* ══════════════════════════════════════════════════════════
           SECTION 3 — KPI BAND
        ══════════════════════════════════════════════════════════ */
        .sol-kpi-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }
        .sol-kpi-band {
          border-radius: 40px;
          padding: 48px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          justify-items: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.webp');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .sol-kpi-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.35);
          z-index: 0;
        }
        .sol-kpi-band > * { position: relative; z-index: 1; }
        .sol-kpi-band__item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }
        .sol-kpi-band__number {
          font-family: "DM Sans", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: ${P.white};
        }
        .sol-kpi-band__label {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }
        @container sol (max-width: 1023px) {
          .sol-kpi-band { grid-template-columns: repeat(2, 1fr); }
        }
        @container sol (max-width: 767px) {
          .sol-kpi-band {
            grid-template-columns: 1fr;
            padding: 32px 20px;
            background-image: none;
          }
        }

        /* Banner */
        .sol-banner {
          margin-top: 32px;
          padding: 16px 24px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24,33,232,0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
        }
        .sol-banner__tagline {
          font-size: 16px;
          font-weight: 600;
          color: ${P.neutral900};
          margin-bottom: 8px;
        }
        .sol-banner__note {
          font-size: 14px;
          color: ${P.neutral500};
        }

        /* ══════════════════════════════════════════════════════════
           SECTION 4 — CTA BAND (full-width, no padding override)
        ══════════════════════════════════════════════════════════ */
        .sol-cta-section {
          width: 100%;
          padding: 0;
        }
        .sol-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.webp');
          background-size: cover;
          background-position: center;
        }
        .sol-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .sol-cta-band > * { position: relative; z-index: 1; }

        @container sol (min-width: 768px)  { .sol-cta-band { padding: 100px 32px; } }
        @container sol (min-width: 1440px) { .sol-cta-band { padding: 120px 120px; } }
        @container sol (max-width: 767px)  { .sol-cta-band { background-image: none; } }

        .sol-cta-band__inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container sol (min-width: 1024px) { .sol-cta-band__inner { max-width: 720px; } }
        @container sol (min-width: 1440px) { .sol-cta-band__inner { max-width: 1080px; } }

        .sol-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container sol (max-width: 767px) { .sol-cta-band__title { font-size: 36px; } }
        @container sol (min-width: 1440px) { .sol-cta-band__title { font-size: 50px; } }

        .sol-cta-band__title-highlight {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .sol-cta-band__description {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
        }
        .sol-cta-band__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container sol (max-width: 767px) {
          .sol-cta-band__actions {
            flex-direction: column;
            align-items: center;
          }
          .sol-cta-band__actions .sol-btn--cta {
            width: 100%;
            max-width: 320px;
          }
        }
        .sol-cta-band__footnote {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        /* Product name brand font */
        .sol-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>

      <div className="sol-root">
        <div className="sol-wrap">

          {/* ══ SECTION 1: HERO ══════════════════════════════════════ */}
          <section id="section-hero">
            <div className="sol-hero-section">
              <div className="sol-container">
                <div className="sol-hero">
                  <h1 className="sol-hero__title">
                    {heroTitle}{" "}
                    <span className="sol-hero__title-highlight">{heroTitleHighlight}</span>
                  </h1>
                  <p className="sol-hero__description">{heroDescription}</p>
                  <div className="sol-hero__actions">
                    <a href={heroCta1Href} className="sol-btn sol-btn--primary">{heroCta1Label}</a>
                    <a href={heroCta2Href} className="sol-btn sol-btn--secondary">{heroCta2Label}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══ SECTION 2: INDUSTRY USE CASES ════════════════════════ */}
          <section id="section-2" className="sol-section">
            <div className="sol-container">
              <div className="sol-section-header">
                <h2 className="sol-section-header__title">
                  {s2Title}{" "}
                  <span className="sol-section-header__highlight">
                    <span className="sol-product-name">{s2TitleHighlight}</span>
                  </span>
                </h2>
                <p className="sol-section-header__description">{s2Description}</p>
              </div>

              <div className="sol-card-grid">
                {DEFAULT_CARDS.map((card, i) => {
                  const IconComp = ICONS[i]
                  return (
                    <div key={card.title} className="sol-card">
                      <div className="sol-card__icon-wrap">
                        <IconComp />
                      </div>
                      <h3 className="sol-card__title">{card.title}</h3>
                      <p className="sol-card__description">{card.description}</p>
                      <hr className="sol-card__divider" />
                      <div className="sol-industry-states">
                        <div className="sol-industry-state sol-industry-state--blocked">
                          <span className="sol-badge sol-badge--error">Blocked</span>
                          <span>{card.blockedLabel}</span>
                        </div>
                        <div className="sol-industry-state sol-industry-state--enabled">
                          <span className="sol-badge sol-badge--success">Enabled</span>
                          <span>{card.enabledLabel}</span>
                        </div>
                      </div>
                      <div className="sol-card__tags">
                        {card.tags.map((tag) => (
                          <span key={tag} className="sol-card__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ══ SECTION 3: KPI BAND ══════════════════════════════════ */}
          <section id="section-3" className="sol-kpi-section">
            <div className="sol-container">
              <div className="sol-kpi-band">
                <div className="sol-kpi-band__item">
                  <div className="sol-kpi-band__number">{kpi1Number}</div>
                  <div className="sol-kpi-band__label">{kpi1Label}</div>
                </div>
                <div className="sol-kpi-band__item">
                  <div className="sol-kpi-band__number">{kpi2Number}</div>
                  <div className="sol-kpi-band__label">{kpi2Label}</div>
                </div>
                <div className="sol-kpi-band__item">
                  <div className="sol-kpi-band__number">{kpi3Number}</div>
                  <div className="sol-kpi-band__label">{kpi3Label}</div>
                </div>
                <div className="sol-kpi-band__item">
                  <div className="sol-kpi-band__number">{kpi4Number}</div>
                  <div className="sol-kpi-band__label">{kpi4Label}</div>
                </div>
              </div>
              <div className="sol-banner">
                <div className="sol-banner__tagline">{bannerTagline}</div>
                <div className="sol-banner__note">{bannerNote}</div>
              </div>
            </div>
          </section>

          {/* ══ SECTION 4: CTA BAND (full-width) ═════════════════════ */}
          <section id="section-cta" className="sol-cta-section">
            <div className="sol-cta-band">
              <div className="sol-cta-band__inner">
                <h2 className="sol-cta-band__title">
                  {ctaTitle}{" "}
                  <span className="sol-cta-band__title-highlight">{ctaTitleHighlight}</span>
                </h2>
                <p className="sol-cta-band__description">{ctaDescription}</p>
                <div className="sol-cta-band__actions">
                  <a href={ctaCta1Href} className="sol-btn sol-btn--cta">{ctaCta1Label}</a>
                  <a href={ctaCta2Href} className="sol-btn sol-btn--cta">{ctaCta2Label}</a>
                  <a href={ctaCta3Href} className="sol-btn sol-btn--cta">{ctaCta3Label}</a>
                </div>
                <div className="sol-cta-band__footnote">
                  <a href={ctaFootnote1Href} className="sol-btn sol-btn--secondary sol-btn--sm">{ctaFootnote1Label}</a>
                  <a href={ctaFootnote2Href} target="_blank" rel="noopener noreferrer" className="sol-btn sol-btn--secondary sol-btn--sm">{ctaFootnote2Label}</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────
addPropertyControls(Solutions, {
  // Hero
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "AI, Now Safe for",
  },
  heroTitleHighlight: {
    type: ControlType.String,
    title: "Hero Title Highlight",
    defaultValue: "Every Industry",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Regulated and document-heavy industries can now adopt AI on real enterprise data. LLM Capsule is an AI enablement data layer and plugin that removes the data exposure barrier blocking enterprise AI adoption — enabling AI first, protecting data at the data layer.",
  },
  heroCta1Label: {
    type: ControlType.String,
    title: "Hero CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  heroCta1Href: {
    type: ControlType.String,
    title: "Hero CTA 1 Href",
    defaultValue: "https://llmcapsule.ai/request-pov",
  },
  heroCta2Label: {
    type: ControlType.String,
    title: "Hero CTA 2 Label",
    defaultValue: "See Product",
  },
  heroCta2Href: {
    type: ControlType.String,
    title: "Hero CTA 2 Href",
    defaultValue: "https://llmcapsule.ai/product",
  },

  // Section 2
  s2Title: {
    type: ControlType.String,
    title: "S2 Title",
    defaultValue: "How Each Industry Uses",
  },
  s2TitleHighlight: {
    type: ControlType.String,
    title: "S2 Title Highlight",
    defaultValue: "LLM Capsule",
  },
  s2Description: {
    type: ControlType.String,
    title: "S2 Description",
    defaultValue: "Regulated industries can now adopt AI on real enterprise data. See how each industry uses LLM Capsule to enable AI while protecting sensitive information.",
  },

  // KPI
  kpi1Number: { type: ControlType.String, title: "KPI 1 Number", defaultValue: "98.1%" },
  kpi1Label:  { type: ControlType.String, title: "KPI 1 Label",  defaultValue: "Detection Accuracy" },
  kpi2Number: { type: ControlType.String, title: "KPI 2 Number", defaultValue: "99.14%" },
  kpi2Label:  { type: ControlType.String, title: "KPI 2 Label",  defaultValue: "Workflow Accuracy" },
  kpi3Number: { type: ControlType.String, title: "KPI 3 Number", defaultValue: "100%" },
  kpi3Label:  { type: ControlType.String, title: "KPI 3 Label",  defaultValue: "Structured PII" },
  kpi4Number: { type: ControlType.String, title: "KPI 4 Number", defaultValue: "98%" },
  kpi4Label:  { type: ControlType.String, title: "KPI 4 Label",  defaultValue: "Response Similarity" },
  bannerTagline: {
    type: ControlType.String,
    title: "Banner Tagline",
    defaultValue: "Enable AI. Protect data. Restore results. Track everything.",
  },
  bannerNote: {
    type: ControlType.String,
    title: "Banner Note",
    defaultValue: "0.12s processing per 2,200-character document",
  },

  // CTA
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "See how your industry uses",
  },
  ctaTitleHighlight: {
    type: ControlType.String,
    title: "CTA Title Highlight",
    defaultValue: "LLM Capsule",
  },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation questions. We will show how LLM Capsule fits your environment.",
  },
  ctaCta1Label: { type: ControlType.String, title: "CTA 1 Label", defaultValue: "Request a Demo" },
  ctaCta1Href:  { type: ControlType.String, title: "CTA 1 Href",  defaultValue: "https://llmcapsule.ai/request-pov" },
  ctaCta2Label: { type: ControlType.String, title: "CTA 2 Label", defaultValue: "See Product" },
  ctaCta2Href:  { type: ControlType.String, title: "CTA 2 Href",  defaultValue: "https://llmcapsule.ai/product" },
  ctaCta3Label: { type: ControlType.String, title: "CTA 3 Label", defaultValue: "View Architecture" },
  ctaCta3Href:  { type: ControlType.String, title: "CTA 3 Href",  defaultValue: "https://llmcapsule.ai/architecture" },
  ctaFootnote1Label: { type: ControlType.String, title: "Footnote 1 Label", defaultValue: "Download Architecture Brief" },
  ctaFootnote1Href:  { type: ControlType.String, title: "Footnote 1 Href",  defaultValue: "https://llmcapsule.ai/downloads" },
  ctaFootnote2Label: { type: ControlType.String, title: "Footnote 2 Label", defaultValue: "Available on AWS Marketplace" },
  ctaFootnote2Href:  { type: ControlType.String, title: "Footnote 2 Href",  defaultValue: "https://aws.amazon.com/marketplace" },
})
