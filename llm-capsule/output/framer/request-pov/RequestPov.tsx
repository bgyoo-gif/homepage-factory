import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

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
  borderBrand:   "#5690D4",
  surfaceDark:  "#171719",
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientDark:  "linear-gradient(180deg, #0f0f0f 0%, #171719 100%)",
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",           "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Request a Demo", "item": "https://llmcapsule.ai/request-a-demo" },
  ],
})

const JSONLD_WEBPAGE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Request a Demo — LLM Capsule Enterprise AI Enablement",
  "description": "Test LLM Capsule with your own enterprise documents. Demonstrate AI enablement on real data, in your environment, against your compliance requirements.",
  "url": "https://llmcapsule.ai/request-a-demo",
  "isPartOf": {
    "@type": "WebSite",
    "name": "LLM Capsule",
    "url": "https://llmcapsule.ai",
  },
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroTitleHighlight?: string
  heroDescription?: string

  // Process Column
  processTitle?: string
  processTitleHighlight?: string
  processDescription?: string

  // Step Tab Labels
  tab1Label?: string
  tab2Label?: string
  tab3Label?: string
  tab4Label?: string

  // Step Tab Content
  tab1Title?: string
  tab1Description?: string
  tab2Title?: string
  tab2Description?: string
  tab3Title?: string
  tab3Description?: string
  tab4Title?: string
  tab4Description?: string

  // Banner
  bannerText?: string

  // Form Card
  formCardTitle?: string
  formNameLabel?: string
  formNamePlaceholder?: string
  formEmailLabel?: string
  formEmailPlaceholder?: string
  formCompanyLabel?: string
  formCompanyPlaceholder?: string
  formTitleLabel?: string
  formTitlePlaceholder?: string
  formIndustryLabel?: string
  formIndustryDefault?: string
  formUseCaseLabel?: string
  formUseCasePlaceholder?: string
  formSubmitLabel?: string
  formFootnote?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function RequestPov({
  // Hero
  heroTitle = "Request a",
  heroTitleHighlight = "Demo",
  heroDescription = "Test LLM Capsule using your own enterprise documents and workflows. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements.",

  // Process Column
  processTitle = "What to",
  processTitleHighlight = "expect",
  processDescription = "A structured 4-step process from discovery to results, designed to demonstrate real value on your actual data.",

  // Step Tab Labels
  tab1Label = "Discovery Call",
  tab2Label = "Technical Setup",
  tab3Label = "Document Testing",
  tab4Label = "Results Review",

  // Step Tab Content
  tab1Title = "Discovery Call",
  tab1Description = "We understand your document types, sensitivity requirements, deployment constraints, and AI use cases. We identify the highest-value workflow to test.",
  tab2Title = "Technical Setup",
  tab2Description = "LLM Capsule is deployed in your environment (on-premise, cloud, or hybrid). We configure encapsulation policies to match your sensitivity requirements.",
  tab3Title = "Document Testing",
  tab3Description = "Your real enterprise documents are processed through the full encapsulation, AI, and restoration pipeline. You evaluate output quality, protection coverage, and workflow integration.",
  tab4Title = "Results Review",
  tab4Description = "We present detection accuracy, workflow accuracy, response similarity, and processing performance metrics measured on your specific workload.",

  // Banner
  bannerText = "Schedule a live demo with your documents, deployment constraints, and evaluation criteria.",

  // Form Card
  formCardTitle = "Request a Demo",
  formNameLabel = "Name",
  formNamePlaceholder = "Full name",
  formEmailLabel = "Work Email",
  formEmailPlaceholder = "name@company.com",
  formCompanyLabel = "Company",
  formCompanyPlaceholder = "Company name",
  formTitleLabel = "Job Title",
  formTitlePlaceholder = "Your role",
  formIndustryLabel = "Industry",
  formIndustryDefault = "Select industry",
  formUseCaseLabel = "Primary Use Case",
  formUseCasePlaceholder = "Describe your primary AI use case and the types of documents you need to process.",
  formSubmitLabel = "Submit Request",
  formFootnote = "We respond to all demo requests within 1 business day.",
}: Props) {
  const [activeTab, setActiveTab] = useState(1)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const tabs = [
    { id: 1, label: tab1Label, title: tab1Title, description: tab1Description,
      icon: (
        <svg className="rpov-icon rpov-icon--xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.51 5.51l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.5v1.42z"/>
        </svg>
      ),
    },
    { id: 2, label: tab2Label, title: tab2Title, description: tab2Description,
      icon: (
        <svg className="rpov-icon rpov-icon--xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
          <path d="M14.66 9.34a4 4 0 0 1 0 5.32M9.34 9.34a4 4 0 0 0 0 5.32"/>
        </svg>
      ),
    },
    { id: 3, label: tab3Label, title: tab3Title, description: tab3Description,
      icon: (
        <svg className="rpov-icon rpov-icon--xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <line x1="10" y1="9" x2="8" y2="9"/>
        </svg>
      ),
    },
    { id: 4, label: tab4Label, title: tab4Title, description: tab4Description,
      icon: (
        <svg className="rpov-icon rpov-icon--xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_WEBPAGE }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ───────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .rpov-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .rpov-root a { text-decoration: none; color: inherit; }
        .rpov-root img { max-width: 100%; display: block; }
        .rpov-root p, .rpov-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .rpov-root h1, .rpov-root h2, .rpov-root h3 { text-wrap: pretty; }

        /* ── Container Query wrapper ──────────────────────────────── */
        .rpov-inner { width: 100%; container-type: inline-size; }

        /* ── Container ───────────────────────────────────────────── */
        .rpov-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .rpov-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .rpov-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .rpov-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Icons ───────────────────────────────────────────────── */
        .rpov-icon {
          width: 24px; height: 24px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
          flex-shrink: 0;
        }
        .rpov-icon--sm { width: 16px; height: 16px; }
        .rpov-icon--xl { width: 48px; height: 48px; }

        /* ── Buttons ─────────────────────────────────────────────── */
        .rpov-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .rpov-btn--md { padding: 12px 32px; font-size: 16px; }
        .rpov-btn--lg { padding: 16px 48px; font-size: 18px; width: 100%; justify-content: center; }
        .rpov-btn--primary {
          background: ${P.gradientBrand};
          color: ${P.white};
        }
        .rpov-btn--primary:hover { opacity: 0.88; }
        .rpov-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .rpov-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Text utility ────────────────────────────────────────── */
        .rpov-text--brand { color: ${P.brandSecondary}; }
        .rpov-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ─────────────────────────────────────────────────────────
           Section 1: Hero
        ───────────────────────────────────────────────────────── */
        .rpov-section--hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .rpov-section--hero .rpov-hero-text-only {
          max-width: 1080px;
        }
        .rpov-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .rpov-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .rpov-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .rpov-hero__title { font-size: 64px; } }
        .rpov-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin-bottom: 32px;
        }
        @container (min-width: 1024px) { .rpov-hero__description { max-width: 720px; } }
        @container (min-width: 1440px) { .rpov-hero__description { max-width: 1080px; } }

        /* ─────────────────────────────────────────────────────────
           Section 2: Layout (Process + Form)
        ───────────────────────────────────────────────────────── */
        .rpov-section--main {
          width: 100%;
          padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }
        .rpov-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        @container (min-width: 1024px) {
          .rpov-layout { grid-template-columns: 1fr 1fr; gap: 64px; }
        }

        /* ── Process Column ───────────────────────────────────────── */
        .rpov-process { display: flex; flex-direction: column; gap: 32px; }

        .rpov-process__header { margin-bottom: 16px; }
        .rpov-process__header h2 {
          font-size: 30px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px; margin-bottom: 12px;
        }
        @container (min-width: 768px)  { .rpov-process__header h2 { font-size: 36px; } }
        @container (min-width: 1440px) { .rpov-process__header h2 { font-size: 40px; } }
        .rpov-process__header p {
          font-size: 16px; color: ${P.textSecondary}; line-height: 1.7;
        }

        /* ── Step Tabs ────────────────────────────────────────────── */
        .rpov-step-tabs__nav {
          display: flex; gap: 0;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px; overflow-x: auto;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .rpov-step-tabs__nav::-webkit-scrollbar { display: none; }
        .rpov-step-tabs__tab {
          padding: 12px 24px;
          font-size: 14px; font-weight: 500;
          color: ${P.textSecondary}; cursor: pointer;
          border: none; border-bottom: 2px solid transparent;
          white-space: nowrap; background: none;
          font-family: "DM Sans", sans-serif;
          transition: color 0.2s, border-color 0.2s;
        }
        .rpov-step-tabs__tab:hover { color: ${P.textPrimary}; }
        .rpov-step-tabs__tab--active {
          color: ${P.brandPrimary};
          border-bottom-color: ${P.brandPrimary};
          font-weight: 600;
        }
        .rpov-step-tabs__panel { display: none; }
        .rpov-step-tabs__panel--active {
          display: flex; flex-direction: column; gap: 24px;
        }
        .rpov-step-tabs__icon { color: ${P.brandSecondary}; }
        .rpov-step-tabs__title {
          font-family: "DM Sans", sans-serif;
          font-size: 30px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
        }
        @container (min-width: 768px) { .rpov-step-tabs__title { font-size: 36px; } }
        .rpov-step-tabs__description {
          font-size: 16px; color: ${P.textSecondary}; line-height: 1.7;
        }

        /* ── Banner ──────────────────────────────────────────────── */
        .rpov-banner {
          padding: 16px 24px;
          border-radius: 8px;
          background-color: rgba(24, 33, 232, 0.06);
          border: 1px solid ${P.borderBrand};
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
        }

        /* ── Form Card ───────────────────────────────────────────── */
        .rpov-form-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 32px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
        }
        @container (min-width: 768px)  { .rpov-form-card { padding: 32px; } }
        @container (min-width: 1440px) { .rpov-form-card { padding: 48px; } }

        .rpov-form-card__title {
          font-size: 24px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          margin-bottom: 32px;
        }

        /* ── Form Groups ─────────────────────────────────────────── */
        .rpov-form-fields { display: flex; flex-direction: column; }
        .rpov-form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .rpov-form-group:last-of-type { margin-bottom: 24px; }
        .rpov-form-group label {
          font-size: 14px; font-weight: 600;
          color: ${P.textPrimary};
        }
        .rpov-form-group input,
        .rpov-form-group select,
        .rpov-form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .rpov-form-group select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c9c9c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
          cursor: pointer;
        }
        .rpov-form-group textarea { min-height: 120px; resize: vertical; }
        .rpov-form-group input:focus,
        .rpov-form-group select:focus,
        .rpov-form-group textarea:focus {
          border-color: ${P.brandPrimary};
          box-shadow: 0 0 0 3px rgba(24, 33, 232, 0.08);
        }
        .rpov-form-group input::placeholder,
        .rpov-form-group textarea::placeholder { color: ${P.textTertiary}; }
        .rpov-form-group select option[value=""] { color: ${P.textTertiary}; }
        .rpov-form__submit { width: 100%; margin-bottom: 16px; }
        .rpov-form__footnote {
          text-align: center;
          color: ${P.textTertiary};
          font-size: 12px; font-weight: 500;
          line-height: 1.5;
        }

      `}</style>

      <div className="rpov-root">
        <div className="rpov-inner">
          <main>

            {/* ─── Section 1: Hero ─────────────────────────────────────── */}
            <section id="section-hero" className="rpov-section--hero">
              <div className="rpov-container">
                <div className="rpov-hero-text-only">
                  <h1 className="rpov-hero__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                    {heroTitle} <span className="rpov-text--brand">{heroTitleHighlight}</span>
                  </h1>
                  <p className="rpov-hero__description">{heroDescription}</p>
                </div>
              </div>
            </section>

            {/* ─── Section 2: Process + Form ──────────────────────────── */}
            <section id="section-2" className="rpov-section--main">
              <div className="rpov-container">
                <div className="rpov-layout">

                  {/* Left: Process Steps */}
                  <div className="rpov-process">
                    <div className="rpov-process__header">
                      <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                        {processTitle} <span className="rpov-text--brand">{processTitleHighlight}</span>
                      </h2>
                      <p>{processDescription}</p>
                    </div>

                    {/* Step Tabs */}
                    <div>
                      <div className="rpov-step-tabs__nav" role="tablist" aria-label="Demo Process Steps">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            className={`rpov-step-tabs__tab${activeTab === tab.id ? " rpov-step-tabs__tab--active" : ""}`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`rpov-panel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {tabs.map((tab) => (
                        <div
                          key={tab.id}
                          id={`rpov-panel-${tab.id}`}
                          className={`rpov-step-tabs__panel${activeTab === tab.id ? " rpov-step-tabs__panel--active" : ""}`}
                          role="tabpanel"
                        >
                          <div className="rpov-step-tabs__icon">{tab.icon}</div>
                          <h3 className="rpov-step-tabs__title">{tab.title}</h3>
                          <p className="rpov-step-tabs__description">
                            {tab.id === 2 ? (
                              <><span className="rpov-text--product">LLM Capsule</span>{" "}{tab.description.replace("LLM Capsule", "").replace(/^[\s]+/, "")}</>
                            ) : tab.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Callout Banner */}
                    <div className="rpov-banner" role="note">
                      {bannerText}
                    </div>
                  </div>

                  {/* Right: Request Form */}
                  <div className="rpov-form-card">
                    <h2 className="rpov-form-card__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{formCardTitle}</h2>
                    <form
                      className="rpov-form-fields"
                      noValidate
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setFormStatus("submitting")
                        const form = e.currentTarget
                        const data = new FormData(form)
                        const fields = [
                          { name: "firstname", value: String(data.get("name") ?? "") },
                          { name: "email", value: String(data.get("email") ?? "") },
                          { name: "company", value: String(data.get("company") ?? "") },
                          { name: "jobtitle", value: String(data.get("job_title") ?? "") },
                          { name: "industry", value: String(data.get("industry") ?? "") },
                          { name: "message", value: String(data.get("use_case") ?? "") },
                        ]
                        const payload = {
                          submittedAt: Date.now(),
                          fields,
                          context: {
                            hutk: typeof document !== "undefined"
                              ? document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/, "$1")
                              : "",
                            pageUri: typeof window !== "undefined" ? window.location.href : "",
                            pageName: "Request a Demo",
                          },
                        }
                        try {
                          const res = await fetch(
                            "https://api.hsforms.com/submissions/v3/integration/submit/244718287/5156eb97-45fd-468e-91c2-16971c3d0252",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(payload),
                            }
                          )
                          if (res.ok) {
                            form.reset()
                            if (typeof window !== "undefined") {
                              window.location.href = "/request-received"
                            }
                          } else {
                            setFormStatus("error")
                          }
                        } catch {
                          setFormStatus("error")
                        }
                      }}
                    >

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-name">{formNameLabel}</label>
                        <input
                          type="text"
                          id="rpov-name"
                          name="name"
                          placeholder={formNamePlaceholder}
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-email">{formEmailLabel}</label>
                        <input
                          type="email"
                          id="rpov-email"
                          name="email"
                          placeholder={formEmailPlaceholder}
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-company">{formCompanyLabel}</label>
                        <input
                          type="text"
                          id="rpov-company"
                          name="company"
                          placeholder={formCompanyPlaceholder}
                          autoComplete="organization"
                        />
                      </div>

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-title">{formTitleLabel}</label>
                        <input
                          type="text"
                          id="rpov-title"
                          name="job_title"
                          placeholder={formTitlePlaceholder}
                          autoComplete="organization-title"
                        />
                      </div>

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-industry">{formIndustryLabel}</label>
                        <select id="rpov-industry" name="industry" defaultValue="">
                          <option value="" disabled>{formIndustryDefault}</option>
                          <option value="financial-services">Financial Services</option>
                          <option value="public-sector">Public Sector</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="legal">Legal</option>
                          <option value="telecom">Telecom</option>
                          <option value="insurance">Insurance</option>
                          <option value="enterprise-other">Enterprise / Other</option>
                        </select>
                      </div>

                      <div className="rpov-form-group">
                        <label htmlFor="rpov-usecase">{formUseCaseLabel}</label>
                        <textarea
                          id="rpov-usecase"
                          name="use_case"
                          placeholder={formUseCasePlaceholder}
                        />
                      </div>

                      <button
                        type="submit"
                        className="rpov-btn rpov-btn--primary rpov-btn--lg rpov-form__submit"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Submitting..." : formSubmitLabel}
                      </button>

                      {formStatus === "success" && (
                        <p className="rpov-form__footnote" style={{ color: "#0e824c" }}>
                          Thank you! We will be in touch within 1 business day.
                        </p>
                      )}
                      {formStatus === "error" && (
                        <p className="rpov-form__footnote" style={{ color: "#ff3030" }}>
                          Something went wrong. Please try again or email contact@cubig.ai.
                        </p>
                      )}
                      {formStatus === "idle" && (
                        <p className="rpov-form__footnote">{formFootnote}</p>
                      )}
                    </form>
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
addPropertyControls(RequestPov, {
  // Hero
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Request a",
  },
  heroTitleHighlight: {
    type: ControlType.String,
    title: "Hero Title Highlight",
    defaultValue: "Demo",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Test LLM Capsule using your own enterprise documents and workflows. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements.",
    displayTextArea: true,
  },

  // Process Column
  processTitle: {
    type: ControlType.String,
    title: "Process Title",
    defaultValue: "What to",
  },
  processTitleHighlight: {
    type: ControlType.String,
    title: "Process Title Highlight",
    defaultValue: "expect",
  },
  processDescription: {
    type: ControlType.String,
    title: "Process Description",
    defaultValue: "A structured 4-step process from discovery to results, designed to demonstrate real value on your actual data.",
    displayTextArea: true,
  },

  // Tab Labels
  tab1Label: { type: ControlType.String, title: "Tab 1 Label", defaultValue: "Discovery Call" },
  tab2Label: { type: ControlType.String, title: "Tab 2 Label", defaultValue: "Technical Setup" },
  tab3Label: { type: ControlType.String, title: "Tab 3 Label", defaultValue: "Document Testing" },
  tab4Label: { type: ControlType.String, title: "Tab 4 Label", defaultValue: "Results Review" },

  // Tab Content
  tab1Title: { type: ControlType.String, title: "Tab 1 Title", defaultValue: "Discovery Call" },
  tab1Description: {
    type: ControlType.String,
    title: "Tab 1 Description",
    defaultValue: "We understand your document types, sensitivity requirements, deployment constraints, and AI use cases. We identify the highest-value workflow to test.",
    displayTextArea: true,
  },
  tab2Title: { type: ControlType.String, title: "Tab 2 Title", defaultValue: "Technical Setup" },
  tab2Description: {
    type: ControlType.String,
    title: "Tab 2 Description",
    defaultValue: "LLM Capsule is deployed in your environment (on-premise, cloud, or hybrid). We configure encapsulation policies to match your sensitivity requirements.",
    displayTextArea: true,
  },
  tab3Title: { type: ControlType.String, title: "Tab 3 Title", defaultValue: "Document Testing" },
  tab3Description: {
    type: ControlType.String,
    title: "Tab 3 Description",
    defaultValue: "Your real enterprise documents are processed through the full encapsulation, AI, and restoration pipeline. You evaluate output quality, protection coverage, and workflow integration.",
    displayTextArea: true,
  },
  tab4Title: { type: ControlType.String, title: "Tab 4 Title", defaultValue: "Results Review" },
  tab4Description: {
    type: ControlType.String,
    title: "Tab 4 Description",
    defaultValue: "We present detection accuracy, workflow accuracy, response similarity, and processing performance metrics measured on your specific workload.",
    displayTextArea: true,
  },

  // Banner
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Schedule a live demo with your documents, deployment constraints, and evaluation criteria.",
    displayTextArea: true,
  },

  // Form Card
  formCardTitle: { type: ControlType.String, title: "Form Card Title", defaultValue: "Request a Demo" },
  formNameLabel: { type: ControlType.String, title: "Name Label", defaultValue: "Name" },
  formNamePlaceholder: { type: ControlType.String, title: "Name Placeholder", defaultValue: "Full name" },
  formEmailLabel: { type: ControlType.String, title: "Email Label", defaultValue: "Work Email" },
  formEmailPlaceholder: { type: ControlType.String, title: "Email Placeholder", defaultValue: "name@company.com" },
  formCompanyLabel: { type: ControlType.String, title: "Company Label", defaultValue: "Company" },
  formCompanyPlaceholder: { type: ControlType.String, title: "Company Placeholder", defaultValue: "Company name" },
  formTitleLabel: { type: ControlType.String, title: "Title Label", defaultValue: "Job Title" },
  formTitlePlaceholder: { type: ControlType.String, title: "Title Placeholder", defaultValue: "Your role" },
  formIndustryLabel: { type: ControlType.String, title: "Industry Label", defaultValue: "Industry" },
  formIndustryDefault: { type: ControlType.String, title: "Industry Default", defaultValue: "Select industry" },
  formUseCaseLabel: { type: ControlType.String, title: "Use Case Label", defaultValue: "Primary Use Case" },
  formUseCasePlaceholder: {
    type: ControlType.String,
    title: "Use Case Placeholder",
    defaultValue: "Describe your primary AI use case and the types of documents you need to process.",
    displayTextArea: true,
  },
  formSubmitLabel: { type: ControlType.String, title: "Submit Button", defaultValue: "Submit Request" },
  formFootnote: {
    type: ControlType.String,
    title: "Form Footnote",
    defaultValue: "We respond to all demo requests within 1 business day.",
  },
})
