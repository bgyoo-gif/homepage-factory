// Proof Page — Part 1: Hero + Trust Strip
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    heroTag: "Trust Evidence",
    heroHeadline: "Proof.",
    heroHeadlineAccent: "The evidence behind the layer.",
    heroSub: "Operational case records. Security certifications. Patents. Research. Awards. Partnerships. The trust signals procurement, security, and audit teams need—consolidated.",
    bannerStrong: "Secure AI usage",
    bannerBody: " means sensitive data stays inside your environment: only a protected capsule is processed by the AI, and outputs are reconstructed locally into the originating workflow—usable, privacy-safe, and verifiable.",
    trustLabel: "// Deployed across regulated industries — finance · public sector · defense · healthcare · telecom",
    trustGroup1Title: "Customers",
    trustGroup2Title: "Certifications",
    trustGroup3Title: "Partners",
    trustGroup4Title: "Awards & Recognition",
  },
  ko: {},
  de: {},
}

const DEFAULT_KPI_ITEMS = [
  { value: "0%", label: "raw data egress to external AI (air-gapped case)" },
  { value: "0.94", label: "PII detection F1 in automated de-identification" },
  { value: "Blocked → Enabled", label: "external LLM use on data that was previously off-limits" },
]

const DEFAULT_CUSTOMERS = [
  "Woori Bank",
  "KYOBO",
  "Hana Bank",
  "Samsung Securities",
  "SK telecom",
  "EUMC",
  "Claroty",
]

const DEFAULT_CERTIFICATIONS = [
  "ISO 27001",
  "ISO 42001",
  "GS Certified · Grade 1",
  "KISA Fast Track",
]

const DEFAULT_PARTNERS = [
  "AWS Marketplace",
  "NVIDIA Inception",
  "Naver Cloud",
]

const DEFAULT_AWARDS = [
  "Minister of Science & ICT Prize",
  "Emerging AI+X Top 100",
  "T-Challenge 2026",
]

const fallbackArr = <T,>(arr: T[] | undefined, def: T[]): T[] =>
  arr && arr.length > 0 ? arr : def

interface KpiItem {
  value: string
  label: string
}

interface Props {
  heroTag?: string
  heroHeadline?: string
  heroHeadlineAccent?: string
  heroSub?: string
  bannerStrong?: string
  bannerBody?: string
  kpiItems?: KpiItem[]
  trustLabel?: string
  trustGroup1Title?: string
  trustGroup1Pills?: string[]
  trustGroup2Title?: string
  trustGroup2Pills?: string[]
  trustGroup3Title?: string
  trustGroup3Pills?: string[]
  trustGroup4Title?: string
  trustGroup4Pills?: string[]
  locale?: "en" | "ko" | "de"
}

export default function ProofPart1({
  heroTag = "Trust Evidence",
  heroHeadline = "Proof.",
  heroHeadlineAccent = "The evidence behind the layer.",
  heroSub = "Operational case records. Security certifications. Patents. Research. Awards. Partnerships. The trust signals procurement, security, and audit teams need—consolidated.",
  bannerStrong = "Secure AI usage",
  bannerBody = " means sensitive data stays inside your environment: only a protected capsule is processed by the AI, and outputs are reconstructed locally into the originating workflow—usable, privacy-safe, and verifiable.",
  kpiItems = DEFAULT_KPI_ITEMS,
  trustLabel = "// Deployed across regulated industries — finance · public sector · defense · healthcare · telecom",
  trustGroup1Title = "Customers",
  trustGroup1Pills = DEFAULT_CUSTOMERS,
  trustGroup2Title = "Certifications",
  trustGroup2Pills = DEFAULT_CERTIFICATIONS,
  trustGroup3Title = "Partners",
  trustGroup3Pills = DEFAULT_PARTNERS,
  trustGroup4Title = "Awards & Recognition",
  trustGroup4Pills = DEFAULT_AWARDS,
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

  const _kpiItems = fallbackArr(kpiItems, DEFAULT_KPI_ITEMS)
  const _trustGroup1Pills = fallbackArr(trustGroup1Pills, DEFAULT_CUSTOMERS)
  const _trustGroup2Pills = fallbackArr(trustGroup2Pills, DEFAULT_CERTIFICATIONS)
  const _trustGroup3Pills = fallbackArr(trustGroup3Pills, DEFAULT_PARTNERS)
  const _trustGroup4Pills = fallbackArr(trustGroup4Pills, DEFAULT_AWARDS)

  const rHeroTag = r(heroTag, "heroTag")
  const rHeroHeadline = r(heroHeadline, "heroHeadline")
  const rHeroHeadlineAccent = r(heroHeadlineAccent, "heroHeadlineAccent")
  const rHeroSub = r(heroSub, "heroSub")
  const rBannerStrong = r(bannerStrong, "bannerStrong")
  const rBannerBody = r(bannerBody, "bannerBody")
  const rTrustLabel = r(trustLabel, "trustLabel")
  const rTrustGroup1Title = r(trustGroup1Title, "trustGroup1Title")
  const rTrustGroup2Title = r(trustGroup2Title, "trustGroup2Title")
  const rTrustGroup3Title = r(trustGroup3Title, "trustGroup3Title")
  const rTrustGroup4Title = r(trustGroup4Title, "trustGroup4Title")

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
          { "@type": "ListItem", position: 2, name: "Proof", item: "https://llmcapsule.ai/proof" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://llmcapsule.ai/proof#webpage",
        url: "https://llmcapsule.ai/proof",
        name: "Proof — The evidence behind LLM Capsule",
        description: "Operational case records, certifications, patents, research, awards, partnerships, and press behind LLM Capsule.",
        publisher: { "@type": "Organization", name: "LLM Capsule" },
      },
    ],
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .pf1-root {
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
        .pf1-root *, .pf1-root *::before, .pf1-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .pf1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }

        /* HERO */
        .pf1-hero {
          padding-top: 158px;
          padding-bottom: var(--s-section, clamp(64px, 8vw, 128px));
        }
        .pf1-hero-inner {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }
        .pf1-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 22px;
        }
        .pf1-hero-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--c-teal, #0ea5a4);
          animation: pf1-pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pf1-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .pf1-h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.08;
          max-width: 17ch;
          color: var(--c-ink, #0f1130);
        }
        .pf1-h1-accent {
          color: var(--c-primary, #5b4fe9);
        }
        .pf1-hero-sub {
          font-size: clamp(16px, 1.4vw, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          max-width: 680px;
          margin-top: 22px;
        }

        /* BANNER */
        .pf1-banner {
          margin-top: 28px;
          padding: 20px 22px;
          background-color: var(--c-primary-soft, #eeebfe);
          border: 1px solid color-mix(in srgb, var(--c-primary, #5b4fe9) 20%, transparent);
          border-radius: var(--r-md, 10px);
          max-width: 760px;
          font-size: 15.5px;
          color: var(--c-ink, #0f1130);
          line-height: 1.65;
        }
        .pf1-banner strong {
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
        }

        /* KPI BAND */
        .pf1-kpi-band {
          margin-top: 38px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: var(--c-rule, #e5e7eb);
          max-width: 780px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          overflow: hidden;
        }
        .pf1-kpi-item {
          background-color: var(--c-bg, #fff);
          padding: 20px 22px;
        }
        .pf1-kpi-num {
          font-size: clamp(24px, 2.6vw, 30px);
          font-weight: 800;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          margin-bottom: 8px;
        }
        .pf1-kpi-num--sm {
          font-size: clamp(18px, 2vw, 22px);
        }
        .pf1-kpi-label {
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          line-height: 1.45;
        }

        /* TRUST STRIP */
        .pf1-trust-strip {
          padding: 30px 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg-soft, #f7f8fb);
        }
        .pf1-trust-strip-inner {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }
        .pf1-trust-label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }
        .pf1-trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .pf1-trust-group-title {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }
        .pf1-trust-items {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .pf1-trust-pill {
          font-size: 12px;
          font-weight: 500;
          color: var(--c-ink-soft, #3a3d5e);
          padding: 5px 11px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px;
          background-color: var(--c-bg, #fff);
          white-space: nowrap;
        }

        /* CONTAINER QUERIES — responsive */
        @container (min-width: 680px) {
          .pf1-kpi-band {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @container (min-width: 768px) {
          .pf1-hero-inner {
            padding: 0 32px;
          }
          .pf1-trust-strip-inner {
            padding: 0 32px;
          }
          .pf1-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @container (min-width: 1024px) {
          .pf1-trust-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @container (min-width: 1440px) {
          .pf1-hero-inner {
            padding: 0 120px;
          }
          .pf1-trust-strip-inner {
            padding: 0 120px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pf1-root">

        {/* HERO */}
        <section className="pf1-hero">
          <div className="pf1-hero-inner">
            <div className="pf1-hero-tag">
              <span className="pf1-hero-tag-dot" />
              {rHeroTag}
            </div>
            <h1 className="pf1-h1">
              {rHeroHeadline}{" "}
              <span className="pf1-h1-accent">{rHeroHeadlineAccent}</span>
            </h1>
            <p className="pf1-hero-sub">{rHeroSub}</p>
            <div className="pf1-banner">
              <strong>{rBannerStrong}</strong>
              {rBannerBody}
            </div>
            <div className="pf1-kpi-band">
              {_kpiItems.map((item, i) => (
                <div className="pf1-kpi-item" key={i}>
                  <div className={`pf1-kpi-num${i === 2 ? " pf1-kpi-num--sm" : ""}`}>
                    {item.value}
                  </div>
                  <div className="pf1-kpi-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="pf1-trust-strip">
          <div className="pf1-trust-strip-inner">
            <div className="pf1-trust-label">{rTrustLabel}</div>
            <div className="pf1-trust-grid">
              <div>
                <div className="pf1-trust-group-title">{rTrustGroup1Title}</div>
                <div className="pf1-trust-items">
                  {_trustGroup1Pills.map((pill, i) => (
                    <span className="pf1-trust-pill" key={i}>{pill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="pf1-trust-group-title">{rTrustGroup2Title}</div>
                <div className="pf1-trust-items">
                  {_trustGroup2Pills.map((pill, i) => (
                    <span className="pf1-trust-pill" key={i}>{pill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="pf1-trust-group-title">{rTrustGroup3Title}</div>
                <div className="pf1-trust-items">
                  {_trustGroup3Pills.map((pill, i) => (
                    <span className="pf1-trust-pill" key={i}>{pill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="pf1-trust-group-title">{rTrustGroup4Title}</div>
                <div className="pf1-trust-items">
                  {_trustGroup4Pills.map((pill, i) => (
                    <span className="pf1-trust-pill" key={i}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(ProofPart1, {
  heroTag: {
    type: ControlType.String,
    title: "Hero Tag",
    defaultValue: "Trust Evidence",
  },
  heroHeadline: {
    type: ControlType.String,
    title: "Hero Headline",
    defaultValue: "Proof.",
  },
  heroHeadlineAccent: {
    type: ControlType.String,
    title: "Hero Headline Accent",
    defaultValue: "The evidence behind the layer.",
  },
  heroSub: {
    type: ControlType.String,
    title: "Hero Sub",
    displayTextArea: true,
    defaultValue: "Operational case records. Security certifications. Patents. Research. Awards. Partnerships. The trust signals procurement, security, and audit teams need—consolidated.",
  },
  bannerStrong: {
    type: ControlType.String,
    title: "Banner Bold",
    defaultValue: "Secure AI usage",
  },
  bannerBody: {
    type: ControlType.String,
    title: "Banner Body",
    displayTextArea: true,
    defaultValue: " means sensitive data stays inside your environment: only a protected capsule is processed by the AI, and outputs are reconstructed locally into the originating workflow—usable, privacy-safe, and verifiable.",
  },
  kpiItems: {
    type: ControlType.Array,
    title: "KPI Items",
    control: {
      type: ControlType.Object,
      controls: {
        value: { type: ControlType.String, title: "Value" },
        label: { type: ControlType.String, title: "Label" },
      },
    },
  },
  trustLabel: {
    type: ControlType.String,
    title: "Trust Label",
    displayTextArea: true,
    defaultValue: "// Deployed across regulated industries — finance · public sector · defense · healthcare · telecom",
  },
  trustGroup1Title: {
    type: ControlType.String,
    title: "Group 1 Title",
    defaultValue: "Customers",
  },
  trustGroup1Pills: {
    type: ControlType.Array,
    title: "Group 1 Pills",
    control: { type: ControlType.String },
  },
  trustGroup2Title: {
    type: ControlType.String,
    title: "Group 2 Title",
    defaultValue: "Certifications",
  },
  trustGroup2Pills: {
    type: ControlType.Array,
    title: "Group 2 Pills",
    control: { type: ControlType.String },
  },
  trustGroup3Title: {
    type: ControlType.String,
    title: "Group 3 Title",
    defaultValue: "Partners",
  },
  trustGroup3Pills: {
    type: ControlType.Array,
    title: "Group 3 Pills",
    control: { type: ControlType.String },
  },
  trustGroup4Title: {
    type: ControlType.String,
    title: "Group 4 Title",
    defaultValue: "Awards & Recognition",
  },
  trustGroup4Pills: {
    type: ControlType.Array,
    title: "Group 4 Pills",
    control: { type: ControlType.String },
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "Korean", "Deutsch"],
    defaultValue: "en",
  },
})
