import { addPropertyControls, ControlType } from "framer"

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
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn",     "item": "https://llmcapsule.ai/resources/learn" },
  ],
})

const JSONLD_COLLECTION = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Learn — Enterprise AI Enablement Resources",
  "description": "In-depth technical articles on enterprise AI enablement, secure AI workflows, structure-preserving processing, and restorable workflows.",
  "url": "https://llmcapsule.ai/resources/learn",
  "publisher": {
    "@type": "Organization",
    "name": "LLM Capsule",
    "url": "https://llmcapsule.ai",
  },
})

// ─── Article Card Data ─────────────────────────────────────────────────────────
interface ArticleCard {
  href: string
  badgeType: "brand" | "neutral"
  badgeLabel: string
  title: string
  iconPath: string
}

const DEFAULT_CARDS: ArticleCard[] = [
  {
    href: "secure-enterprise-ai-data-workflows.html",
    badgeType: "brand",
    badgeLabel: "Pillar",
    title: "Secure Enterprise AI Data Workflows",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    href: "enterprise-ai-data-protection.html",
    badgeType: "brand",
    badgeLabel: "Pillar",
    title: "Enterprise AI Enablement",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    href: "enterprise-ai-document-processing.html",
    badgeType: "brand",
    badgeLabel: "Pillar",
    title: "Enterprise AI Document Processing",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
  },
  {
    href: "what-is-ai-data-capsule.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "What Is an AI Data Capsule",
    iconPath: "M12 22c1-1 8-4 8-10V5l-8-3-8 3v7c0 6 7 9 8 10z",
  },
  {
    href: "how-to-use-ai-on-sensitive-enterprise-data.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "How to Use AI on Sensitive Enterprise Data",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    href: "why-redaction-breaks-enterprise-ai-workflows.html",
    badgeType: "brand",
    badgeLabel: "Featured",
    title: "Why Redaction Breaks Enterprise AI Workflows",
    iconPath: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
  },
  {
    href: "secure-enterprise-ai-workflows.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "Secure Enterprise AI Workflows",
    iconPath: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10",
  },
  {
    href: "structure-preserving-document-processing.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "Structure-Preserving Document Processing",
    iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    href: "pii-protection-vs-enterprise-confidentiality-control.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "PII Protection vs Enterprise Confidentiality Control",
    iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
  },
  {
    href: "on-premise-vs-cloud-ai-data-protection.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "On-Premise vs Cloud AI Data Protection",
    iconPath: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  },
  {
    href: "local-restorationvs-anonymization.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "Local Restoration vs Anonymization",
    iconPath: "M1 4v6h6",
  },
  {
    href: "ai-data-pipeline-protection.html",
    badgeType: "neutral",
    badgeLabel: "Article",
    title: "AI Data Pipeline Protection",
    iconPath: "M16 4l-8 16",
  },
]

// ─── SVG Icons per card ────────────────────────────────────────────────────────
function CardIcon({ index }: { index: number }) {
  const iconSize = 20
  switch (index) {
    case 0:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 1:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    case 2:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case 3:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
    case 4:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    case 5:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
    case 6:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    case 7:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    case 8:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 9:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    case 10:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 .49-3.63" />
        </svg>
      )
    case 11:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16" y1="4" x2="8" y2="20" />
          <circle cx="16" cy="4" r="1" fill="currentColor" />
          <circle cx="8" cy="20" r="1" fill="currentColor" />
          <path d="M3 9h3m12 0h3M3 15h3m12 0h3" />
        </svg>
      )
    default:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

// ─── Arrow SVG ─────────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Card titles (12 cards)
  card01Title?: string
  card01Badge?: string
  card01Href?: string
  card02Title?: string
  card02Badge?: string
  card02Href?: string
  card03Title?: string
  card03Badge?: string
  card03Href?: string
  card04Title?: string
  card04Badge?: string
  card04Href?: string
  card05Title?: string
  card05Badge?: string
  card05Href?: string
  card06Title?: string
  card06Badge?: string
  card06Href?: string
  card07Title?: string
  card07Badge?: string
  card07Href?: string
  card08Title?: string
  card08Badge?: string
  card08Href?: string
  card09Title?: string
  card09Badge?: string
  card09Href?: string
  card10Title?: string
  card10Badge?: string
  card10Href?: string
  card11Title?: string
  card11Badge?: string
  card11Href?: string
  card12Title?: string
  card12Badge?: string
  card12Href?: string

  // Card link label (shared)
  cardLinkLabel?: string

  // CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaSecondaryLink1Label?: string
  ctaSecondaryLink1Href?: string
  ctaSecondaryLink2Label?: string
  ctaSecondaryLink2Href?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Learn({
  heroTitle = "Enterprise AI Enablement — Learn",
  heroDescription = "In-depth technical articles on enterprise AI enablement, secure AI workflows, structure-preserving processing, and restorable workflows.",

  card01Title = "Secure Enterprise AI Data Workflows",
  card01Badge = "Pillar",
  card01Href = "secure-enterprise-ai-data-workflows.html",
  card02Title = "Enterprise AI Enablement",
  card02Badge = "Pillar",
  card02Href = "enterprise-ai-data-protection.html",
  card03Title = "Enterprise AI Document Processing",
  card03Badge = "Pillar",
  card03Href = "enterprise-ai-document-processing.html",
  card04Title = "What Is an AI Data Capsule",
  card04Badge = "Article",
  card04Href = "what-is-ai-data-capsule.html",
  card05Title = "How to Use AI on Sensitive Enterprise Data",
  card05Badge = "Article",
  card05Href = "how-to-use-ai-on-sensitive-enterprise-data.html",
  card06Title = "Why Redaction Breaks Enterprise AI Workflows",
  card06Badge = "Featured",
  card06Href = "why-redaction-breaks-enterprise-ai-workflows.html",
  card07Title = "Secure Enterprise AI Workflows",
  card07Badge = "Article",
  card07Href = "secure-enterprise-ai-workflows.html",
  card08Title = "Structure-Preserving Document Processing",
  card08Badge = "Article",
  card08Href = "structure-preserving-document-processing.html",
  card09Title = "PII Protection vs Enterprise Confidentiality Control",
  card09Badge = "Article",
  card09Href = "pii-protection-vs-enterprise-confidentiality-control.html",
  card10Title = "On-Premise vs Cloud AI Data Protection",
  card10Badge = "Article",
  card10Href = "on-premise-vs-cloud-ai-data-protection.html",
  card11Title = "Local Restoration vs Anonymization",
  card11Badge = "Article",
  card11Href = "local-restorationvs-anonymization.html",
  card12Title = "AI Data Pipeline Protection",
  card12Badge = "Article",
  card12Href = "ai-data-pipeline-protection.html",

  cardLinkLabel = "Read article",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaBtn2Label = "Talk to an Architect",
  ctaBtn2Href = "architecture.html",
  ctaSecondaryLink1Label = "Download Architecture Brief",
  ctaSecondaryLink1Href = "downloads.html",
  ctaSecondaryLink2Label = "Available on AWS Marketplace",
  ctaSecondaryLink2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  // Resolved card data from props
  const cards = [
    { title: card01Title, badge: card01Badge, href: card01Href },
    { title: card02Title, badge: card02Badge, href: card02Href },
    { title: card03Title, badge: card03Badge, href: card03Href },
    { title: card04Title, badge: card04Badge, href: card04Href },
    { title: card05Title, badge: card05Badge, href: card05Href },
    { title: card06Title, badge: card06Badge, href: card06Href },
    { title: card07Title, badge: card07Badge, href: card07Href },
    { title: card08Title, badge: card08Badge, href: card08Href },
    { title: card09Title, badge: card09Badge, href: card09Href },
    { title: card10Title, badge: card10Badge, href: card10Href },
    { title: card11Title, badge: card11Badge, href: card11Href },
    { title: card12Title, badge: card12Badge, href: card12Href },
  ]

  // Badge style resolver
  const badgeStyle = (badge: string) => {
    const isBrand = badge === "Pillar" || badge === "Featured"
    return {
      backgroundColor: isBrand ? P.brandLight : P.neutral150,
      color: isBrand ? P.brandSecondary : P.textSecondary,
    }
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_COLLECTION }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        /* ── Reset ───────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .lrn-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .lrn-root a { text-decoration: none; color: inherit; }
        .lrn-root img { max-width: 100%; display: block; }
        .lrn-root p, .lrn-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .lrn-root h1, .lrn-root h2 { text-wrap: balance; }

        /* ── Container Query wrapper ─────────────────────────────── */
        .lrn-inner { width: 100%; container-type: inline-size; }

        /* ── Container ───────────────────────────────────────────── */
        .lrn-container {
          width: 100%; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .lrn-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .lrn-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .lrn-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Section ─────────────────────────────────────────────── */
        .lrn-section {
          width: 100%; padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }
        .lrn-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }

        /* ── Hero ────────────────────────────────────────────────── */
        .lrn-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .lrn-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .lrn-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .lrn-hero__title { font-size: 64px; } }

        .lrn-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }
        @container (min-width: 1024px) { .lrn-hero__description { max-width: 720px; } }
        @container (min-width: 1440px) { .lrn-hero__description { max-width: 860px; } }

        /* ── Card Grid ───────────────────────────────────────────── */
        .lrn-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .lrn-card-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .lrn-card-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── Article Card ────────────────────────────────────────── */
        .lrn-article-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          text-decoration: none; color: inherit;
          cursor: pointer;
        }
        .lrn-article-card:hover {
          border-color: ${P.brandSecondary};
          box-shadow: 0px 12px 32px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        @container (min-width: 1440px) { .lrn-article-card { padding: 32px; } }

        .lrn-article-card__header {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 12px;
        }
        .lrn-article-card__icon {
          flex-shrink: 0; width: 36px; height: 36px;
          border-radius: 5px;
          background-color: rgba(24,33,232,0.04);
          display: flex; align-items: center; justify-content: center;
          color: ${P.brandSecondary};
          margin-top: 2px;
        }

        /* ── Badge ───────────────────────────────────────────────── */
        .lrn-badges { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 12px; }
        .lrn-badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-radius: 9999px;
          font-size: 12px; font-weight: 500; line-height: 1; white-space: nowrap;
        }

        /* ── Card Title + Link ───────────────────────────────────── */
        .lrn-article-card__title {
          font-size: 18px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          margin-bottom: 8px; flex: 1;
        }
        .lrn-article-card__link {
          font-size: 14px; font-weight: 500;
          color: ${P.brandSecondary};
          display: flex; align-items: center; gap: 4px;
          margin-top: auto; padding-top: 16px;
          transition: gap 0.2s;
        }
        .lrn-article-card:hover .lrn-article-card__link { gap: 8px; }

        /* ── CTA Band ────────────────────────────────────────────── */
        .lrn-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background: ${P.gradientBrand};
        }
        .lrn-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .lrn-cta-band > * { position: relative; z-index: 1; }

        .lrn-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .lrn-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .lrn-cta-band__inner { max-width: 860px; } }

        .lrn-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        .lrn-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        @container (max-width: 767px) { .lrn-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) {
          .lrn-cta-band { padding: 120px 120px; }
          .lrn-cta-band__title { font-size: 50px; }
        }
        @container (min-width: 768px) { .lrn-cta-band { padding: 100px 32px; } }

        .lrn-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .lrn-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }

        .lrn-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
          padding: 12px 32px; font-size: 16px;
        }
        .lrn-cta-band__actions .lrn-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .lrn-cta-band__actions .lrn-btn:hover { background-color: ${P.white}; }

        .lrn-cta-band__secondary {
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: center; gap: 32px;
          font-size: 14px; color: rgba(255,255,255,0.85);
        }
        .lrn-cta-band__secondary a {
          color: rgba(255,255,255,0.85);
          transition: color 0.2s;
        }
        .lrn-cta-band__secondary a:hover { color: ${P.white}; }
      `}</style>

      <div className="lrn-root">
        <div className="lrn-inner">
          <main>

            {/* ── Section 1: Hero ───────────────────────────────────────── */}
            <section id="section-1" className="lrn-section lrn-section--hero">
              <div className="lrn-container">
                <h1 className="lrn-hero__title">{heroTitle}</h1>
                <p className="lrn-hero__description">{heroDescription}</p>
              </div>
            </section>

            {/* ── Section 2: Article Card Grid ──────────────────────────── */}
            <section id="section-2" className="lrn-section">
              <div className="lrn-container">
                <div className="lrn-card-grid">
                  {cards.map((card, i) => (
                    <a
                      key={i}
                      href={card.href}
                      className="lrn-article-card"
                      aria-label={`Read article: ${card.title}`}
                    >
                      <div className="lrn-article-card__header">
                        <div className="lrn-article-card__icon" aria-hidden="true">
                          <CardIcon index={i} />
                        </div>
                      </div>
                      <div className="lrn-badges">
                        <span
                          className="lrn-badge"
                          style={badgeStyle(card.badge)}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <p className="lrn-article-card__title">{card.title}</p>
                      <span className="lrn-article-card__link">
                        {cardLinkLabel}
                        <ArrowIcon />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 3: CTA Band ───────────────────────────────────── */}
            <section id="section-3" aria-label="Call to action">
              <div className="lrn-cta-band">
                <div className="lrn-cta-band__inner">
                  <h2 className="lrn-cta-band__title">
                    See how <span className="lrn-text--product">LLM Capsule</span> works with your data
                  </h2>
                  <p className="lrn-cta-band__description">{ctaDescription}</p>
                  <div className="lrn-cta-band__actions">
                    <a href={ctaBtn1Href} className="lrn-btn">{ctaBtn1Label}</a>
                    <a href={ctaBtn2Href} className="lrn-btn">{ctaBtn2Label}</a>
                  </div>
                  <div className="lrn-cta-band__secondary">
                    <a href={ctaSecondaryLink1Href}>{ctaSecondaryLink1Label}</a>
                    <a href={ctaSecondaryLink2Href} target="_blank" rel="noopener">{ctaSecondaryLink2Label}</a>
                  </div>
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
addPropertyControls(Learn, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Enterprise AI Enablement — Learn",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "In-depth technical articles on enterprise AI enablement, secure AI workflows, structure-preserving processing, and restorable workflows.",
    displayTextArea: true,
  },

  // Card 1
  card01Title: { type: ControlType.String, title: "Card 01 Title", defaultValue: "Secure Enterprise AI Data Workflows" },
  card01Badge: { type: ControlType.String, title: "Card 01 Badge", defaultValue: "Pillar" },
  card01Href:  { type: ControlType.String, title: "Card 01 URL",   defaultValue: "secure-enterprise-ai-data-workflows.html" },

  // Card 2
  card02Title: { type: ControlType.String, title: "Card 02 Title", defaultValue: "Enterprise AI Enablement" },
  card02Badge: { type: ControlType.String, title: "Card 02 Badge", defaultValue: "Pillar" },
  card02Href:  { type: ControlType.String, title: "Card 02 URL",   defaultValue: "enterprise-ai-data-protection.html" },

  // Card 3
  card03Title: { type: ControlType.String, title: "Card 03 Title", defaultValue: "Enterprise AI Document Processing" },
  card03Badge: { type: ControlType.String, title: "Card 03 Badge", defaultValue: "Pillar" },
  card03Href:  { type: ControlType.String, title: "Card 03 URL",   defaultValue: "enterprise-ai-document-processing.html" },

  // Card 4
  card04Title: { type: ControlType.String, title: "Card 04 Title", defaultValue: "What Is an AI Data Capsule" },
  card04Badge: { type: ControlType.String, title: "Card 04 Badge", defaultValue: "Article" },
  card04Href:  { type: ControlType.String, title: "Card 04 URL",   defaultValue: "what-is-ai-data-capsule.html" },

  // Card 5
  card05Title: { type: ControlType.String, title: "Card 05 Title", defaultValue: "How to Use AI on Sensitive Enterprise Data" },
  card05Badge: { type: ControlType.String, title: "Card 05 Badge", defaultValue: "Article" },
  card05Href:  { type: ControlType.String, title: "Card 05 URL",   defaultValue: "how-to-use-ai-on-sensitive-enterprise-data.html" },

  // Card 6
  card06Title: { type: ControlType.String, title: "Card 06 Title", defaultValue: "Why Redaction Breaks Enterprise AI Workflows" },
  card06Badge: { type: ControlType.String, title: "Card 06 Badge", defaultValue: "Featured" },
  card06Href:  { type: ControlType.String, title: "Card 06 URL",   defaultValue: "why-redaction-breaks-enterprise-ai-workflows.html" },

  // Card 7
  card07Title: { type: ControlType.String, title: "Card 07 Title", defaultValue: "Secure Enterprise AI Workflows" },
  card07Badge: { type: ControlType.String, title: "Card 07 Badge", defaultValue: "Article" },
  card07Href:  { type: ControlType.String, title: "Card 07 URL",   defaultValue: "secure-enterprise-ai-workflows.html" },

  // Card 8
  card08Title: { type: ControlType.String, title: "Card 08 Title", defaultValue: "Structure-Preserving Document Processing" },
  card08Badge: { type: ControlType.String, title: "Card 08 Badge", defaultValue: "Article" },
  card08Href:  { type: ControlType.String, title: "Card 08 URL",   defaultValue: "structure-preserving-document-processing.html" },

  // Card 9
  card09Title: { type: ControlType.String, title: "Card 09 Title", defaultValue: "PII Protection vs Enterprise Confidentiality Control" },
  card09Badge: { type: ControlType.String, title: "Card 09 Badge", defaultValue: "Article" },
  card09Href:  { type: ControlType.String, title: "Card 09 URL",   defaultValue: "pii-protection-vs-enterprise-confidentiality-control.html" },

  // Card 10
  card10Title: { type: ControlType.String, title: "Card 10 Title", defaultValue: "On-Premise vs Cloud AI Data Protection" },
  card10Badge: { type: ControlType.String, title: "Card 10 Badge", defaultValue: "Article" },
  card10Href:  { type: ControlType.String, title: "Card 10 URL",   defaultValue: "on-premise-vs-cloud-ai-data-protection.html" },

  // Card 11
  card11Title: { type: ControlType.String, title: "Card 11 Title", defaultValue: "Local Restoration vs Anonymization" },
  card11Badge: { type: ControlType.String, title: "Card 11 Badge", defaultValue: "Article" },
  card11Href:  { type: ControlType.String, title: "Card 11 URL",   defaultValue: "local-restorationvs-anonymization.html" },

  // Card 12
  card12Title: { type: ControlType.String, title: "Card 12 Title", defaultValue: "AI Data Pipeline Protection" },
  card12Badge: { type: ControlType.String, title: "Card 12 Badge", defaultValue: "Article" },
  card12Href:  { type: ControlType.String, title: "Card 12 URL",   defaultValue: "ai-data-pipeline-protection.html" },

  cardLinkLabel: {
    type: ControlType.String,
    title: "Card Link Label",
    defaultValue: "Read article",
  },

  // CTA
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
  ctaBtn1Label: { type: ControlType.String, title: "CTA Button 1 Label", defaultValue: "Request a Demo" },
  ctaBtn1Href:  { type: ControlType.String, title: "CTA Button 1 URL",   defaultValue: "request-pov.html" },
  ctaBtn2Label: { type: ControlType.String, title: "CTA Button 2 Label", defaultValue: "Talk to an Architect" },
  ctaBtn2Href:  { type: ControlType.String, title: "CTA Button 2 URL",   defaultValue: "architecture.html" },
  ctaSecondaryLink1Label: { type: ControlType.String, title: "CTA Secondary Link 1 Label", defaultValue: "Download Architecture Brief" },
  ctaSecondaryLink1Href:  { type: ControlType.String, title: "CTA Secondary Link 1 URL",   defaultValue: "downloads.html" },
  ctaSecondaryLink2Label: { type: ControlType.String, title: "CTA Secondary Link 2 Label", defaultValue: "Available on AWS Marketplace" },
  ctaSecondaryLink2Href:  { type: ControlType.String, title: "CTA Secondary Link 2 URL",   defaultValue: "https://aws.amazon.com/marketplace" },
})
