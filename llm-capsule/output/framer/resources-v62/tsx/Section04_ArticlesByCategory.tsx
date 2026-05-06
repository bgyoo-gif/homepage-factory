import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ArticleCard — CMS schema: LearnArticles { slug, title, description, category }
interface ArticleCard {
  category: string
  title: string
  description: string
  slug: string
}

interface Props {
  eyebrow?: string
  heading?: string
  subheading?: string
  // Individual article Props (CMS schema aligned)
  a1Category?: string
  a1Title?: string
  a1Description?: string
  a1Slug?: string
  a2Category?: string
  a2Title?: string
  a2Description?: string
  a2Slug?: string
  a3Category?: string
  a3Title?: string
  a3Description?: string
  a3Slug?: string
  a4Category?: string
  a4Title?: string
  a4Description?: string
  a4Slug?: string
  a5Category?: string
  a5Title?: string
  a5Description?: string
  a5Slug?: string
  a6Category?: string
  a6Title?: string
  a6Description?: string
  a6Slug?: string
  a7Category?: string
  a7Title?: string
  a7Description?: string
  a7Slug?: string
  a8Category?: string
  a8Title?: string
  a8Description?: string
  a8Slug?: string
  tab1Label?: string
  tab2Label?: string
  tab3Label?: string
  tab4Label?: string
  tab5Label?: string
}

export default function Section04_ArticlesByCategory({
  eyebrow = "Learn articles",
  heading = "By category",
  subheading = "Industry deployment guides, architecture deep-dives, comparison frameworks, and strategy playbooks.",
  a1Category = "INDUSTRY · TELECOM",
  a1Title = "How to deploy AI in a telecom NOC without exposing network data",
  a1Description = "Step-by-step deployment guide. Validated at SK Telecom and Deutsche Telekom T Challenge 2026 Top 12.",
  a1Slug = "/learn/telecom-noc-ai-deployment",
  a2Category = "INDUSTRY · HEALTHCARE",
  a2Title = "How to deploy AI in a hospital without exposing PHI",
  a2Description = "HIPAA-aligned playbook for hospital CIOs and clinical informatics. Deployed at EUMC.",
  a2Slug = "/learn/hospital-ai-deployment-phi-protection",
  a3Category = "ARCHITECTURE · SOVEREIGN AI",
  a3Title = "Sovereign AI for European enterprises — practical architecture",
  a3Description = "GDPR + EU AI Act + national data residency. Two execution paths under one governance framework.",
  a3Slug = "/learn/sovereign-ai-european-enterprises",
  a4Category = "STRATEGY · PILOT TO PRODUCTION",
  a4Title = "Why enterprise AI pilots stall — and how they get to production",
  a4Description = "Diagnostic for executives running an AI program. The pattern that ships to production.",
  a4Slug = "/learn/pilot-to-production-enterprise-ai",
  a5Category = "ARCHITECTURE · ON-PREM",
  a5Title = "On-premise LLM execution path",
  a5Description = "Path B architecture deep-dive: quantized model, internal GPU, vLLM, full air-gap.",
  a5Slug = "/learn/on-prem-llm-execution-path",
  a6Category = "ARCHITECTURE · DIFFERENTIAL PRIVACY",
  a6Title = "Differential privacy for enterprise LLM",
  a6Description = "Epsilon-DP, Laplace noise, k-anonymity, NER masking — what each adds and why combination matters.",
  a6Slug = "/learn/differential-privacy-for-enterprise-llm",
  a7Category = "COMPARISON · GUARDRAILS",
  a7Title = "PII guardrails vs. operational data protection",
  a7Description = "Why PII detection alone leaves operational data exposed. Where guardrails end and the data layer begins.",
  a7Slug = "/learn/pii-guardrails-vs-operational-data-protection",
  a8Category = "INDUSTRY · NETWORK / OT",
  a8Title = "AI on network operations data",
  a8Description = "Network configurations, topology, alarm sequences — how the data layer protects operational identifiers.",
  a8Slug = "/learn/ai-on-network-operations-data",
  tab1Label = "All",
  tab2Label = "Industry",
  tab3Label = "Architecture",
  tab4Label = "Strategy",
  tab5Label = "Comparison",
}: Props) {
  const [activeTab, setActiveTab] = useState(tab1Label)

  const allArticles: ArticleCard[] = [
    { category: a1Category, title: a1Title, description: a1Description, slug: a1Slug },
    { category: a2Category, title: a2Title, description: a2Description, slug: a2Slug },
    { category: a3Category, title: a3Title, description: a3Description, slug: a3Slug },
    { category: a4Category, title: a4Title, description: a4Description, slug: a4Slug },
    { category: a5Category, title: a5Title, description: a5Description, slug: a5Slug },
    { category: a6Category, title: a6Title, description: a6Description, slug: a6Slug },
    { category: a7Category, title: a7Title, description: a7Description, slug: a7Slug },
    { category: a8Category, title: a8Title, description: a8Description, slug: a8Slug },
  ]

  const tabFilters: Record<string, string> = {
    [tab1Label]: "",
    [tab2Label]: "INDUSTRY",
    [tab3Label]: "ARCHITECTURE",
    [tab4Label]: "STRATEGY",
    [tab5Label]: "COMPARISON",
  }

  const filterKey = tabFilters[activeTab] || ""
  const visibleArticles = filterKey
    ? allArticles.filter(a => a.category.toUpperCase().startsWith(filterKey))
    : allArticles

  const tabs = [tab1Label, tab2Label, tab3Label, tab4Label, tab5Label]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s4-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s4-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s4-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          word-break: keep-all;
        }

        .s4-subheading {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
          word-break: keep-all;
        }

        .s4-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          scrollbar-width: none;
        }
        .s4-tabs::-webkit-scrollbar { display: none; }

        @container (max-width: 600px) {
          .s4-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
          }
        }

        .s4-tab {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 999px;
          color: var(--c-muted, #6b7280);
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          white-space: nowrap;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s4-tab--active {
          color: var(--c-bg, #ffffff);
          background-color: var(--c-primary-dark, #3b2fbf);
          border-color: var(--c-primary-dark, #3b2fbf);
        }

        .s4-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        @container (max-width: 767px) {
          .s4-grid { grid-template-columns: 1fr; }
        }

        .s4-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.18s;
        }

        .s4-card:hover {
          border-color: var(--c-primary, #5b4fe9);
        }

        .s4-card-cat {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          color: var(--c-primary-dark, #3b2fbf);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .s4-card-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
          color: var(--c-ink, #0f1130);
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-card-desc {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-card-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          transition: color 0.18s;
        }

        .s4-card-link:hover {
          color: var(--c-primary-dark, #3b2fbf);
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section">
          <div className="s4-container" id="articles">
            <div className="s4-header">
              <span className="s4-eyebrow">{eyebrow}</span>
              <h2 className="s4-heading">{heading}</h2>
              <p className="s4-subheading">{subheading}</p>
            </div>

            <div className="s4-tabs" role="list">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`s4-tab${activeTab === tab ? " s4-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                  role="listitem"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="s4-grid">
              {visibleArticles.map((article, i) => (
                <article key={i} className="s4-card">
                  <div className="s4-card-cat">{article.category}</div>
                  <h3 className="s4-card-title">{article.title}</h3>
                  <p className="s4-card-desc">{article.description}</p>
                  <a href={article.slug} className="s4-card-link">Read →</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_ArticlesByCategory, {
  eyebrow:      { type: ControlType.String, title: "Eyebrow",   defaultValue: "Learn articles" },
  heading:      { type: ControlType.String, title: "Heading",   defaultValue: "By category" },
  subheading:   { type: ControlType.String, title: "Subheading", defaultValue: "Industry deployment guides, architecture deep-dives, comparison frameworks, and strategy playbooks.", displayTextArea: true },
  tab1Label:    { type: ControlType.String, title: "Tab 1",     defaultValue: "All" },
  tab2Label:    { type: ControlType.String, title: "Tab 2",     defaultValue: "Industry" },
  tab3Label:    { type: ControlType.String, title: "Tab 3",     defaultValue: "Architecture" },
  tab4Label:    { type: ControlType.String, title: "Tab 4",     defaultValue: "Strategy" },
  tab5Label:    { type: ControlType.String, title: "Tab 5",     defaultValue: "Comparison" },
  a1Category:   { type: ControlType.String, title: "A1 Category", defaultValue: "INDUSTRY · TELECOM" },
  a1Title:      { type: ControlType.String, title: "A1 Title",    defaultValue: "How to deploy AI in a telecom NOC without exposing network data" },
  a1Description:{ type: ControlType.String, title: "A1 Desc",    defaultValue: "Step-by-step deployment guide. Validated at SK Telecom and Deutsche Telekom T Challenge 2026 Top 12.", displayTextArea: true },
  a1Slug:       { type: ControlType.String, title: "A1 Slug",    defaultValue: "/learn/telecom-noc-ai-deployment" },
  a2Category:   { type: ControlType.String, title: "A2 Category", defaultValue: "INDUSTRY · HEALTHCARE" },
  a2Title:      { type: ControlType.String, title: "A2 Title",    defaultValue: "How to deploy AI in a hospital without exposing PHI" },
  a2Description:{ type: ControlType.String, title: "A2 Desc",    defaultValue: "HIPAA-aligned playbook for hospital CIOs and clinical informatics. Deployed at EUMC.", displayTextArea: true },
  a2Slug:       { type: ControlType.String, title: "A2 Slug",    defaultValue: "/learn/hospital-ai-deployment-phi-protection" },
  a3Category:   { type: ControlType.String, title: "A3 Category", defaultValue: "ARCHITECTURE · SOVEREIGN AI" },
  a3Title:      { type: ControlType.String, title: "A3 Title",    defaultValue: "Sovereign AI for European enterprises — practical architecture" },
  a3Description:{ type: ControlType.String, title: "A3 Desc",    defaultValue: "GDPR + EU AI Act + national data residency. Two execution paths under one governance framework.", displayTextArea: true },
  a3Slug:       { type: ControlType.String, title: "A3 Slug",    defaultValue: "/learn/sovereign-ai-european-enterprises" },
  a4Category:   { type: ControlType.String, title: "A4 Category", defaultValue: "STRATEGY · PILOT TO PRODUCTION" },
  a4Title:      { type: ControlType.String, title: "A4 Title",    defaultValue: "Why enterprise AI pilots stall — and how they get to production" },
  a4Description:{ type: ControlType.String, title: "A4 Desc",    defaultValue: "Diagnostic for executives running an AI program. The pattern that ships to production.", displayTextArea: true },
  a4Slug:       { type: ControlType.String, title: "A4 Slug",    defaultValue: "/learn/pilot-to-production-enterprise-ai" },
  a5Category:   { type: ControlType.String, title: "A5 Category", defaultValue: "ARCHITECTURE · ON-PREM" },
  a5Title:      { type: ControlType.String, title: "A5 Title",    defaultValue: "On-premise LLM execution path" },
  a5Description:{ type: ControlType.String, title: "A5 Desc",    defaultValue: "Path B architecture deep-dive: quantized model, internal GPU, vLLM, full air-gap.", displayTextArea: true },
  a5Slug:       { type: ControlType.String, title: "A5 Slug",    defaultValue: "/learn/on-prem-llm-execution-path" },
  a6Category:   { type: ControlType.String, title: "A6 Category", defaultValue: "ARCHITECTURE · DIFFERENTIAL PRIVACY" },
  a6Title:      { type: ControlType.String, title: "A6 Title",    defaultValue: "Differential privacy for enterprise LLM" },
  a6Description:{ type: ControlType.String, title: "A6 Desc",    defaultValue: "Epsilon-DP, Laplace noise, k-anonymity, NER masking — what each adds and why combination matters.", displayTextArea: true },
  a6Slug:       { type: ControlType.String, title: "A6 Slug",    defaultValue: "/learn/differential-privacy-for-enterprise-llm" },
  a7Category:   { type: ControlType.String, title: "A7 Category", defaultValue: "COMPARISON · GUARDRAILS" },
  a7Title:      { type: ControlType.String, title: "A7 Title",    defaultValue: "PII guardrails vs. operational data protection" },
  a7Description:{ type: ControlType.String, title: "A7 Desc",    defaultValue: "Why PII detection alone leaves operational data exposed. Where guardrails end and the data layer begins.", displayTextArea: true },
  a7Slug:       { type: ControlType.String, title: "A7 Slug",    defaultValue: "/learn/pii-guardrails-vs-operational-data-protection" },
  a8Category:   { type: ControlType.String, title: "A8 Category", defaultValue: "INDUSTRY · NETWORK / OT" },
  a8Title:      { type: ControlType.String, title: "A8 Title",    defaultValue: "AI on network operations data" },
  a8Description:{ type: ControlType.String, title: "A8 Desc",    defaultValue: "Network configurations, topology, alarm sequences — how the data layer protects operational identifiers.", displayTextArea: true },
  a8Slug:       { type: ControlType.String, title: "A8 Slug",    defaultValue: "/learn/ai-on-network-operations-data" },
})
