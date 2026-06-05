// Proof Page — Part 4: Awards + Partnerships + Press + FAQ + CTA
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"
import { useState } from "react"

/* ─── TRANSLATIONS ─────────────────────────────────────────── */
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    /* Awards */
    awardsH2: "Awards and",
    awardsH2Accent: "recognition",
    awardsDesc: "Each entry lists the issuing body, date, and exactly what was recognized — the verifiable basis behind the recognition, for buyers who need more than a logo.",
    /* Partnerships */
    partnersH2: "Technology and ecosystem",
    partnersH2Accent: "partners",
    partnersDesc: "What each partnership concretely provides — deployment channel, infrastructure, or validation — not just a logo wall.",
    /* Press */
    pressH2: "In the",
    pressH2Accent: "press",
    pressDesc: "Coverage and interviews relevant to LLM Capsule and the secure-AI approach.",
    /* FAQ */
    faqH2: "Common",
    faqH2Accent: "questions",
    /* CTA */
    ctaTitle: "Want the evidence applied to your own workflow?",
    ctaDesc: "Bring one workflow that's blocked today because of data exposure. We'll show what the proof looks like on your data, your systems, your constraints.",
    ctaBtn1: "Request a Demo",
    ctaBtn2: "See the Architecture",
  },
  ko: {},
  de: {},
}

/* ─── CARD DATA TYPES ──────────────────────────────────────── */
interface AwardCard {
  badge: string
  badgeVariant: string
  title: string
  meta: string
  body: string
}

interface PartnerCard {
  badge: string
  badgeVariant: string
  title: string
  meta: string
  body: string
}

interface PressCard {
  badge: string
  badgeVariant: string
  title: string
  href: string
  meta: string
  body: string
}

interface FaqItem {
  question: string
  answer: string
}

/* ─── DEFAULT DATA ─────────────────────────────────────────── */
const DEFAULT_AWARDS: AwardCard[] = [
  {
    badge: "Industry Award",
    badgeVariant: "primary",
    title: "Deutsche Telekom T-Challenge 2026 — 2nd Place",
    meta: "T-Mobile / Deutsche Telekom · 2026",
    body: "Placed 2nd in the global open-innovation program with de-identification and local restoration technology.",
  },
  {
    badge: "Government Award",
    badgeVariant: "primary",
    title: "Information Security Product Innovation Award — Minister of Science and ICT Prize",
    meta: "Ministry of Science and ICT · 2024-11-26",
    body: "Grand Prize, Information & Physical Security category.",
  },
  {
    badge: "Recognition",
    badgeVariant: "gray",
    title: "2026 Emerging AI+X Top 100",
    meta: "Korea AI Industry Association · 2026",
    body: "Selected for the zero-access architecture and privacy technology.",
  },
  {
    badge: "Startup Recognition",
    badgeVariant: "gray",
    title: "NVIDIA Inception · SKT × Hana Bank AI Accelerator",
    meta: "2024–2025",
    body: "NVIDIA Inception member and joint AI startup accelerator selection.",
  },
  {
    badge: "Recognition",
    badgeVariant: "gray",
    title: "Startup World Cup Finalist · NextRise Global Innovator",
    meta: "2024",
    body: "Global startup competition finalist and innovator selection.",
  },
]

const DEFAULT_PARTNERS: PartnerCard[] = [
  {
    badge: "Marketplace",
    badgeVariant: "primary",
    title: "AWS Marketplace",
    meta: "LLM Capsule listed · procurement-ready",
    body: "Available for direct purchase and private-offer deployment through AWS, simplifying enterprise procurement.",
  },
  {
    badge: "Infrastructure",
    badgeVariant: "gray",
    title: "NVIDIA Inception",
    meta: "Member program",
    body: "Access to NVIDIA's technology and go-to-market resources supporting on-prem and accelerated deployment.",
  },
  {
    badge: "Cloud",
    badgeVariant: "gray",
    title: "NAVER Cloud",
    meta: "Deployment partner",
    body: "Korean public/enterprise cloud deployment path, relevant for data-residency-constrained customers.",
  },
]

const DEFAULT_PRESS: PressCard[] = [
  {
    badge: "Press Coverage",
    badgeVariant: "primary",
    title: "CUBIG Validates LLM Capsule's Technical Efficacy Across Global Industrial Sites ↗",
    href: "https://magazine.hankyung.com/business/article/202604228133b",
    meta: "Korea Economic Daily Business · April 22, 2026",
    body: "Coverage of LLM Capsule's Zero Exposure AI Gateway architecture being validated in production alongside global industrial cybersecurity firm Claroty, with original data never reaching external LLM vendors.",
  },
  {
    badge: "Press Coverage",
    badgeVariant: "primary",
    title: "CUBIG Listed in Gartner Hyper-Synthetic Data Report — Only Asian Vendor Named ↗",
    href: "https://www.etnews.com/20250730000110",
    meta: "Electronic Times (etnews) · July 30, 2025",
    body: "Gartner's \"Emerging Tech: Trends for Hyper-Synthetic Data\" (June 2025) named CUBIG as one of 26 global key vendors following a 4-month deep-dive interview process and analysis of 60+ real-world use cases. The only Asia-based company on the list.",
  },
  {
    badge: "Press Coverage",
    badgeVariant: "primary",
    title: "LLM Capsule Emerges as Essential Tool for Safe Enterprise AI Adoption ↗",
    href: "https://www.hankyung.com/article/202504012381O",
    meta: "Korea Economic Daily · April 1, 2025",
    body: "As enterprises and public institutions hesitate to deploy generative AI over data leakage concerns, LLM Capsule's real-time sensitive-data blocking for ChatGPT, Claude, and Gemini is gaining recognition as the go-to solution for compliant AI use.",
  },
  {
    badge: "Interview",
    badgeVariant: "gray",
    title: "[VivaTech 2025] CUBIG — \"Designing the Future of AI Data Security\" ↗",
    href: "https://www.newspim.com/news/view/20250604000703",
    meta: "NewsPim · June 4, 2025",
    body: "CEO Bae Ho interviewed at VivaTech 2025 in Paris, covering CUBIG's three core technologies — DTS, LLM Capsule, and DataXpert — and explaining why air-gapped deployment is driving rapid uptake in finance, healthcare, and defense.",
  },
  {
    badge: "Press Coverage",
    badgeVariant: "primary",
    title: "LLM Capsule Selected for South Korea's Government Tech Pilot Purchase Program ↗",
    href: "https://www.epnc.co.kr/news/articleView.html?idxno=317379",
    meta: "TechWorld News · June 2, 2025",
    body: "The Ministry of SMEs and Startups selected LLM Capsule for its technology pilot procurement program, clearing rigorous evaluation on technical capability, market viability, and innovation — opening a direct public-sector deployment path.",
  },
  {
    badge: "Press Coverage",
    badgeVariant: "primary",
    title: "CUBIG to Unveil Next-Generation Synthetic Data Technology at World IT Show 2025 ↗",
    href: "https://us.aving.net/news/articleView.html?idxno=52264",
    meta: "AVING News · April 22, 2025",
    body: "CUBIG showcased LLM Capsule at WIS 2025 at COEX Seoul, highlighting standalone air-gapped operation, beta testing with global SaaS and healthcare companies, and planned cloud integration with AWS and Google Cloud.",
  },
]

const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "What is operational evidence for an AI data layer?",
    answer: "Operational evidence is concrete, verifiable documentation that an AI system behaves as claimed in real production conditions — what was blocked before, what changed after deployment, the deployment reference, and the certifications, patents, and peer-reviewed research that back it. It is the difference between a marketing claim and a record a procurement or audit team can verify.",
  },
  {
    question: "How is LLM Capsule's protection independently validated?",
    answer: "Through third-party certifications (ISO/IEC 27001, ISO/IEC 42001, KISA Information Security Fast Track, GS Certification), registered patents covering privacy-preserving AI services and on-device AI security, peer-reviewed publications by the founding team, and deployment references across regulated industries.",
  },
  {
    question: "Why do certifications and patents matter for AI data protection?",
    answer: "Certifications show an independent body has audited the security and AI-management practices; patents show the protection method is novel and documented; peer-reviewed research shows the underlying techniques withstand academic scrutiny. Together they let a buyer rely on more than the vendor's own word.",
  },
  {
    question: "Does the external AI ever receive the original sensitive data?",
    answer: "No. Across every record on this page, only the encapsulated capsule context is shared with AI. Sensitive values stay inside the environment through structure-preserving, differential-privacy-based encapsulation, and outputs are restored locally into the originating workflow.",
  },
  {
    question: "How can I independently verify the certifications, patents, and research listed here?",
    answer: "The certifications, patents, research papers, and press items on this page each cite a primary source you can check independently — without taking our word for it. The certifications have issuing-body certificate numbers confirmable with the certifier; the patents list their official KIPO numbers, lookupable in the national registry or Google Patents; the papers cite venue and authors traceable through DBLP; and every press item links to its original article.",
  },
  {
    question: "What counts as credible, verifiable proof that an AI tool protects sensitive data?",
    answer: "Credible proof is evidence a third party can verify without relying on the vendor's word — not a testimonial or a marketing line. For an AI data layer that means several signals together: operational records of what was blocked and what changed, independent certifications, registered patents in a public registry, and peer-reviewed publications by the founding team. Any one alone is weak; together they let a buyer rely on more than a promise.",
  },
]

const PARTNERS_BG =
  "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-white-teal.webp"

/* ─── FALLBACK HELPER ──────────────────────────────────────── */
const fallbackArr = <T,>(arr: T[] | undefined, def: T[]): T[] =>
  arr && arr.length > 0 ? arr : def

/* ─── PROPS ────────────────────────────────────────────────── */
interface Props {
  /* Awards section */
  awardsH2?: string
  awardsH2Accent?: string
  awardsDesc?: string
  awardCards?: AwardCard[]
  /* Partnerships section */
  partnersH2?: string
  partnersH2Accent?: string
  partnersDesc?: string
  partnerCards?: PartnerCard[]
  /* Press section */
  pressH2?: string
  pressH2Accent?: string
  pressDesc?: string
  pressCards?: PressCard[]
  /* FAQ section */
  faqH2?: string
  faqH2Accent?: string
  faqItems?: FaqItem[]
  /* CTA section */
  ctaTitle?: string
  ctaDesc?: string
  ctaBtn1?: string
  ctaBtn1Href?: string
  ctaBtn2?: string
  ctaBtn2Href?: string
  /* Locale */
  locale?: "en" | "ko" | "de"
}

/* ─── COMPONENT ────────────────────────────────────────────── */
export default function ProofPart4({
  awardsH2 = "Awards and",
  awardsH2Accent = "recognition",
  awardsDesc = "Each entry lists the issuing body, date, and exactly what was recognized — the verifiable basis behind the recognition, for buyers who need more than a logo.",
  awardCards = DEFAULT_AWARDS,
  partnersH2 = "Technology and ecosystem",
  partnersH2Accent = "partners",
  partnersDesc = "What each partnership concretely provides — deployment channel, infrastructure, or validation — not just a logo wall.",
  partnerCards = DEFAULT_PARTNERS,
  pressH2 = "In the",
  pressH2Accent = "press",
  pressDesc = "Coverage and interviews relevant to LLM Capsule and the secure-AI approach.",
  pressCards = DEFAULT_PRESS,
  faqH2 = "Common",
  faqH2Accent = "questions",
  faqItems = DEFAULT_FAQ,
  ctaTitle = "Want the evidence applied to your own workflow?",
  ctaDesc = "Bring one workflow that's blocked today because of data exposure. We'll show what the proof looks like on your data, your systems, your constraints.",
  ctaBtn1 = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaBtn2 = "See the Architecture",
  ctaBtn2Href = "/architecture",
  locale = "en",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const effectiveLocale: string = framerLocale || locale || "en"
  const isNonEn = effectiveLocale !== "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en

  const r = (prop: string, key: string): string =>
    isNonEn
      ? T[key] || prop || TRANSLATIONS.en[key]
      : prop || T[key] || TRANSLATIONS.en[key]

  /* resolved arrays */
  const _awardCards = fallbackArr(awardCards, DEFAULT_AWARDS)
  const _partnerCards = fallbackArr(partnerCards, DEFAULT_PARTNERS)
  const _pressCards = fallbackArr(pressCards, DEFAULT_PRESS)
  const _faqItems = fallbackArr(faqItems, DEFAULT_FAQ)

  /* resolved text */
  const rAwardsH2 = r(awardsH2, "awardsH2")
  const rAwardsH2Accent = r(awardsH2Accent, "awardsH2Accent")
  const rAwardsDesc = r(awardsDesc, "awardsDesc")
  const rPartnersH2 = r(partnersH2, "partnersH2")
  const rPartnersH2Accent = r(partnersH2Accent, "partnersH2Accent")
  const rPartnersDesc = r(partnersDesc, "partnersDesc")
  const rPressH2 = r(pressH2, "pressH2")
  const rPressH2Accent = r(pressH2Accent, "pressH2Accent")
  const rPressDesc = r(pressDesc, "pressDesc")
  const rFaqH2 = r(faqH2, "faqH2")
  const rFaqH2Accent = r(faqH2Accent, "faqH2Accent")
  const rCtaTitle = r(ctaTitle, "ctaTitle")
  const rCtaDesc = r(ctaDesc, "ctaDesc")
  const rCtaBtn1 = r(ctaBtn1, "ctaBtn1")
  const rCtaBtn2 = r(ctaBtn2, "ctaBtn2")

  /* FAQ accordion state — first item open by default */
  const [openFaq, setOpenFaq] = useState<number>(0)
  const toggleFaq = (idx: number) =>
    setOpenFaq((prev) => (prev === idx ? -1 : idx))

  /* JSON-LD FAQPage */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: _faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── ROOT ── */
        .pf4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #fff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.55;
        }
        .pf4-root *, .pf4-root *::before, .pf4-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ── CONTAINER ── */
        .pf4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px) {
          .pf4-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .pf4-container { padding: 0 120px; }
        }

        /* ── SECTION ── */
        .pf4-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }

        /* ── SECTION HEADER ── */
        .pf4-section-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .pf4-section-head h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .pf4-section-head p {
          font-size: clamp(15px, 1.2vw, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 720px;
          margin: 0 auto;
        }
        @container (min-width: 1440px) {
          .pf4-section-head p { max-width: 860px; }
        }
        .pf4-accent {
          color: var(--c-primary, #5b4fe9);
        }

        /* ── CARD GRID ── */
        .pf4-card-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        @container (min-width: 600px) {
          .pf4-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @container (min-width: 980px) {
          .pf4-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        /* ── CARD ── */
        .pf4-card {
          background-color: var(--c-bg, #fff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          transition: border-color 0.2s;
        }
        .pf4-card:hover {
          border-color: color-mix(in srgb, var(--c-rule, #e5e7eb) 85%, var(--c-ink, #0f1130));
        }
        .pf4-badge {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
        }
        .pf4-badge--gray {
          color: var(--c-muted, #6b7280);
        }
        .pf4-card-title {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.35;
        }
        .pf4-card-title a {
          color: var(--c-ink, #0f1130);
          text-decoration: none;
          transition: color 0.2s;
        }
        .pf4-card-title a:hover {
          color: var(--c-primary, #5b4fe9);
        }
        .pf4-card-meta {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10.5px;
          color: var(--c-muted, #6b7280);
          line-height: 1.5;
        }
        .pf4-card-body {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        /* ── PARTNERS SECTION (bg-image) ── */
        .pf4-partners-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url('${PARTNERS_BG}');
        }
        .pf4-partners-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.88);
          pointer-events: none;
        }
        .pf4-partners-inner {
          position: relative;
          z-index: 1;
        }
        @container (max-width: 767px) {
          .pf4-partners-section {
            background-image: none;
            background-color: var(--c-bg-soft, #f7f8fb);
          }
        }

        /* ── FAQ ── */
        .pf4-faq {
          max-width: var(--container-max, 1280px);
        }
        .pf4-faq-item {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }
        .pf4-faq-item:first-child {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }
        .pf4-faq-q {
          width: 100%;
          background-color: transparent;
          border: none;
          padding: 20px 0;
          text-align: left;
          font-size: 17px;
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          line-height: 1.4;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          transition: color 0.2s;
        }
        .pf4-faq-q:hover {
          color: var(--c-primary, #5b4fe9);
        }
        .pf4-faq-ic {
          flex-shrink: 0;
          font-size: 24px;
          color: var(--c-muted, #6b7280);
          line-height: 1;
          font-weight: 300;
          transition: transform 0.2s;
        }
        .pf4-faq-ic--open {
          transform: rotate(45deg);
        }
        .pf4-faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }
        .pf4-faq-body--open {
          max-height: 600px;
        }
        .pf4-faq-body-in {
          padding-bottom: 20px;
          color: var(--c-ink-soft, #3a3d5e);
          font-size: 15px;
          line-height: 1.7;
        }

        /* ── CTA ── */
        .pf4-cta {
          background-color: var(--c-bg-dark, #0f1130);
          position: relative;
          overflow: hidden;
        }
        .pf4-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 60% 80% at 70% 0%,
            color-mix(in srgb, var(--c-primary, #5b4fe9) 50%, transparent),
            transparent 60%
          );
          pointer-events: none;
        }
        .pf4-cta-in {
          position: relative;
          z-index: 1;
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 16px;
          text-align: center;
        }
        @container (min-width: 768px) {
          .pf4-cta-in { padding-left: 32px; padding-right: 32px; }
        }
        @container (min-width: 1440px) {
          .pf4-cta-in { padding-left: 120px; padding-right: 120px; }
        }
        .pf4-cta-h {
          font-size: 36px;
          font-weight: 700;
          color: var(--c-bg, #fff);
          line-height: 1.2;
          margin-bottom: 22px;
        }
        @container (min-width: 768px) {
          .pf4-cta-h { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .pf4-cta-h { font-size: 50px; }
        }
        .pf4-cta-d {
          color: color-mix(in srgb, var(--c-primary-soft, #eeebfe) 85%, var(--c-bg, #fff));
          max-width: 620px;
          margin: 0 auto 30px;
          font-size: 17px;
          line-height: 1.6;
        }
        .pf4-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── BUTTONS ── */
        .pf4-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: background-color 0.18s, color 0.18s, border-color 0.18s;
        }
        .pf4-btn--invert {
          background-color: var(--c-bg, #fff);
          color: var(--c-ink, #0f1130);
        }
        .pf4-btn--invert:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }
        .pf4-btn--invert-ghost {
          background-color: transparent;
          color: var(--c-bg, #fff);
          border: 1.5px solid color-mix(in srgb, var(--c-primary, #5b4fe9) 60%, transparent);
        }
        .pf4-btn--invert-ghost:hover {
          border-color: color-mix(in srgb, var(--c-bg, #fff) 80%, transparent);
        }
      `}</style>

      <div className="pf4-root">

        {/* ── SECTION 05: AWARDS ── */}
        <section className="pf4-section" id="awards">
          <div className="pf4-container">
            <div className="pf4-section-head">
              <h2>{rAwardsH2} <span className="pf4-accent">{rAwardsH2Accent}</span></h2>
              <p>{rAwardsDesc}</p>
            </div>
            <div className="pf4-card-grid">
              {_awardCards.map((card, i) => (
                <div className="pf4-card" key={i}>
                  <div className={card.badgeVariant === "gray" ? "pf4-badge pf4-badge--gray" : "pf4-badge"}>
                    {card.badge}
                  </div>
                  <div className="pf4-card-title">{card.title}</div>
                  <div className="pf4-card-meta">{card.meta}</div>
                  <p className="pf4-card-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 06: PARTNERSHIPS ── */}
        <section className="pf4-partners-section" id="partners">
          <div className="pf4-partners-inner">
            <div className="pf4-container">
              <div className="pf4-section-head">
                <h2>{rPartnersH2} <span className="pf4-accent">{rPartnersH2Accent}</span></h2>
                <p>{rPartnersDesc}</p>
              </div>
              <div className="pf4-card-grid">
                {_partnerCards.map((card, i) => (
                  <div className="pf4-card" key={i}>
                    <div className={card.badgeVariant === "gray" ? "pf4-badge pf4-badge--gray" : "pf4-badge"}>
                      {card.badge}
                    </div>
                    <div className="pf4-card-title">{card.title}</div>
                    <div className="pf4-card-meta">{card.meta}</div>
                    <p className="pf4-card-body">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 07: PRESS ── */}
        <section className="pf4-section" id="press">
          <div className="pf4-container">
            <div className="pf4-section-head">
              <h2>{rPressH2} <span className="pf4-accent">{rPressH2Accent}</span></h2>
              <p>{rPressDesc}</p>
            </div>
            <div className="pf4-card-grid">
              {_pressCards.map((card, i) => (
                <div className="pf4-card" key={i}>
                  <div className={card.badgeVariant === "gray" ? "pf4-badge pf4-badge--gray" : "pf4-badge"}>
                    {card.badge}
                  </div>
                  <div className="pf4-card-title">
                    <a href={card.href} target="_blank" rel="noopener">
                      {card.title}
                    </a>
                  </div>
                  <div className="pf4-card-meta">{card.meta}</div>
                  <p className="pf4-card-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 08: FAQ ── */}
        <section className="pf4-section" id="faq">
          <div className="pf4-container">
            <div className="pf4-section-head">
              <h2>{rFaqH2} <span className="pf4-accent">{rFaqH2Accent}</span></h2>
            </div>
            <div className="pf4-faq">
              {_faqItems.map((item, i) => (
                <div
                  className="pf4-faq-item"
                  key={i}
                >
                  <button
                    className="pf4-faq-q"
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{item.question}</span>
                    <span className={openFaq === i ? "pf4-faq-ic pf4-faq-ic--open" : "pf4-faq-ic"}>+</span>
                  </button>
                  <div className={openFaq === i ? "pf4-faq-body pf4-faq-body--open" : "pf4-faq-body"}>
                    <div className="pf4-faq-body-in">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pf4-cta">
          <div className="pf4-cta-in">
            <h2 className="pf4-cta-h">{rCtaTitle}</h2>
            <p className="pf4-cta-d">{rCtaDesc}</p>
            <div className="pf4-cta-btns">
              <a className="pf4-btn pf4-btn--invert" href={ctaBtn1Href}>
                {rCtaBtn1}
              </a>
              <a className="pf4-btn pf4-btn--invert-ghost" href={ctaBtn2Href}>
                {rCtaBtn2}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

/* ─── PROPERTY CONTROLS ────────────────────────────────────── */
addPropertyControls(ProofPart4, {
  /* ── Awards ── */
  awardsH2: {
    type: ControlType.String,
    title: "Awards H2",
    defaultValue: "Awards and",
  },
  awardsH2Accent: {
    type: ControlType.String,
    title: "Awards H2 Accent",
    defaultValue: "recognition",
  },
  awardsDesc: {
    type: ControlType.String,
    title: "Awards Description",
    defaultValue: "Each entry lists the issuing body, date, and exactly what was recognized — the verifiable basis behind the recognition, for buyers who need more than a logo.",
  },
  awardCards: {
    type: ControlType.Array,
    title: "Award Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray"],
          optionTitles: ["Primary", "Gray"],
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body" },
      },
    },
  },
  /* ── Partnerships ── */
  partnersH2: {
    type: ControlType.String,
    title: "Partners H2",
    defaultValue: "Technology and ecosystem",
  },
  partnersH2Accent: {
    type: ControlType.String,
    title: "Partners H2 Accent",
    defaultValue: "partners",
  },
  partnersDesc: {
    type: ControlType.String,
    title: "Partners Description",
    defaultValue: "What each partnership concretely provides — deployment channel, infrastructure, or validation — not just a logo wall.",
  },
  partnerCards: {
    type: ControlType.Array,
    title: "Partner Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray"],
          optionTitles: ["Primary", "Gray"],
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body" },
      },
    },
  },
  /* ── Press ── */
  pressH2: {
    type: ControlType.String,
    title: "Press H2",
    defaultValue: "In the",
  },
  pressH2Accent: {
    type: ControlType.String,
    title: "Press H2 Accent",
    defaultValue: "press",
  },
  pressDesc: {
    type: ControlType.String,
    title: "Press Description",
    defaultValue: "Coverage and interviews relevant to LLM Capsule and the secure-AI approach.",
  },
  pressCards: {
    type: ControlType.Array,
    title: "Press Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray"],
          optionTitles: ["Primary", "Gray"],
        },
        title: { type: ControlType.String, title: "Title" },
        href: { type: ControlType.String, title: "Link URL" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body" },
      },
    },
  },
  /* ── FAQ ── */
  faqH2: {
    type: ControlType.String,
    title: "FAQ H2",
    defaultValue: "Common",
  },
  faqH2Accent: {
    type: ControlType.String,
    title: "FAQ H2 Accent",
    defaultValue: "questions",
  },
  faqItems: {
    type: ControlType.Array,
    title: "FAQ Items",
    control: {
      type: ControlType.Object,
      controls: {
        question: { type: ControlType.String, title: "Question" },
        answer: { type: ControlType.String, title: "Answer" },
      },
    },
  },
  /* ── CTA ── */
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "Want the evidence applied to your own workflow?",
  },
  ctaDesc: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Bring one workflow that's blocked today because of data exposure. We'll show what the proof looks like on your data, your systems, your constraints.",
  },
  ctaBtn1: {
    type: ControlType.String,
    title: "CTA Button 1 Label",
    defaultValue: "Request a Demo",
  },
  ctaBtn1Href: {
    type: ControlType.String,
    title: "CTA Button 1 Href",
    defaultValue: "/request-a-demo",
  },
  ctaBtn2: {
    type: ControlType.String,
    title: "CTA Button 2 Label",
    defaultValue: "See the Architecture",
  },
  ctaBtn2Href: {
    type: ControlType.String,
    title: "CTA Button 2 Href",
    defaultValue: "/architecture",
  },
  /* ── Locale ── */
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "Korean", "German"],
    defaultValue: "en",
  },
})
