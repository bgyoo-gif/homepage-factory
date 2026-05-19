// Learn index page (v6.2 design).
// Self-contained Framer Code Component.
// Hero + Category filter tabs + Card grid (30 articles).
// No external imports — Framer cross-folder compatible.

import { addPropertyControls, ControlType } from "framer"
import { useEffect, useState } from "react"

interface Props {
  // Hero
  eyebrow?: string
  heroTitle?: string
  heroLead?: string

  // Category tab labels (translation-friendly)
  labelAll?: string
  labelPolicy?: string
  labelIndustry?: string
  labelArchitecture?: string
  labelStrategy?: string
  labelComparison?: string
  labelDefinition?: string

  // Read CTA label
  readLabel?: string
}

type CategoryKey = "policy" | "industry" | "architecture" | "strategy" | "comparison" | "definition"

type Card = {
  category: CategoryKey
  categoryLabel: string
  title: string
  desc: string
  href: string
}

const CARDS: Card[] = [
  // ── POLICY (7) ─────────────────────────────────────────────────
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "공공기관 생성형 AI 도입의 세 가지 길",
    desc: "AI DLP·차단, sLLM 자체구축, 게이트웨이 방식 — N2SF 시대 공공기관의 선택지를 비용·성능·보안·정합성 관점에서 객관적으로 비교합니다.",
    href: "/resources/learn/public-sector-genai-three-approaches",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "N2SF란 무엇인가 — 공공기관 보안의 새 패러다임",
    desc: "국가 망 보안체계(N2SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계와 「위치-주체-객체」 모델링을 정리합니다.",
    href: "/resources/learn/what-is-n2sf",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
    desc: "국가정보원·NSR이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 정리합니다.",
    href: "/resources/learn/n2sf-model-2-explained",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프",
    desc: "공공기관 sLLM 자체구축의 진짜 비용(5년 28~38억), 상용 LLM 대비 성능 격차 추세, 잘못된 선택 패턴을 분석합니다.",
    href: "/resources/learn/sllm-self-hosted-reality-check",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵",
    desc: "정보화담당관 관점에서 외부 LLM 도입을 분기별 5단계로 정리합니다. 시나리오 A 4개월 vs 시나리오 B 6~8개월 로드맵 비교.",
    href: "/resources/learn/public-sector-external-llm-adoption-roadmap",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 현장 분석",
    title: "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지",
    desc: "등급 분류 부담, 시나리오와 O 등급 충돌, 솔루션 후보 부족, 예산 시점 불일치, 활용 실패 — 다섯 막힘 지점.",
    href: "/resources/learn/public-sector-genai-five-stuck-points",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "2026 경영평가 'AI 활용 등 혁신' 가점 — 공공기관 핵심 경쟁력",
    desc: "2026 경영평가편람에 신설된 'AI 활용 등 혁신' 가점 1.5점이 공공기관 경쟁력에 어떤 영향을 주는지 정리합니다.",
    href: "/resources/learn/public-sector-2026-management-evaluation-ai-incentive",
  },
  {
    category: "policy",
    categoryLabel: "POLICY · 정책 분석",
    title: "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까",
    desc: "외부 상용 LLM 구독 후 가장 자주 마주치는 질문 — 5가지 실무 사례로 판단의 어려움을 짚고, 세 가지 접근 방식(가이드라인 / LLM 제한 / 보호 레이어)을 정리.",
    href: "/resources/learn/public-sector-chatgpt-input-guide",
  },

  // ── INDUSTRY (3) ───────────────────────────────────────────────
  {
    category: "industry",
    categoryLabel: "INDUSTRY · TELECOM",
    title: "How to deploy AI in a telecom NOC without exposing network data",
    desc: "Step-by-step deployment guide. Validated at SK Telecom and Deutsche Telekom T Challenge 2026 Top 12.",
    href: "/resources/learn/telecom-noc-ai-deployment",
  },
  {
    category: "industry",
    categoryLabel: "INDUSTRY · HEALTHCARE",
    title: "How to deploy AI in a hospital without exposing PHI",
    desc: "HIPAA-aligned playbook for hospital CIOs and clinical informatics. Deployed at EUMC.",
    href: "/resources/learn/hospital-ai-deployment-phi-protection",
  },
  {
    category: "industry",
    categoryLabel: "INDUSTRY · TELECOM",
    title: "AI on network operations data — NOC, RCA, and workflow execution",
    desc: "How to bring AI to NOC logs, alarm sequences, incident tickets — without exposing operational identifiers.",
    href: "/resources/learn/ai-on-network-operations-data",
  },

  // ── ARCHITECTURE (3) ───────────────────────────────────────────
  {
    category: "architecture",
    categoryLabel: "ARCHITECTURE · ON-PREM",
    title: "On-premise LLM execution path",
    desc: "Path B architecture deep-dive: quantized model, internal GPU, vLLM, full air-gap.",
    href: "/resources/learn/on-prem-llm-execution-path",
  },
  {
    category: "architecture",
    categoryLabel: "ARCHITECTURE · SOVEREIGN AI",
    title: "Sovereign AI for European enterprises — practical architecture",
    desc: "GDPR + EU AI Act + national data residency. Two execution paths under one governance framework.",
    href: "/resources/learn/sovereign-ai-european-enterprises",
  },
  {
    category: "architecture",
    categoryLabel: "ARCHITECTURE · DIFFERENTIAL PRIVACY",
    title: "Differential privacy for enterprise LLM",
    desc: "Beyond field masking — DP noise, k-anonymity, and semantic tokenization for operational data.",
    href: "/resources/learn/differential-privacy-for-enterprise-llm",
  },

  // ── STRATEGY (1) ───────────────────────────────────────────────
  {
    category: "strategy",
    categoryLabel: "STRATEGY · PILOT TO PRODUCTION",
    title: "Why enterprise AI pilots stall — and how they get to production",
    desc: "Diagnostic for executives running an AI program. The pattern that ships to production.",
    href: "/resources/learn/pilot-to-production-enterprise-ai",
  },

  // ── COMPARISON (7) ─────────────────────────────────────────────
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "PII guardrails vs operational data protection",
    desc: "Field-level filters vs structure-preserving + DP-based encapsulation — what regulated workflows actually need.",
    href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "LLM Capsule vs Masking Tools",
    desc: "Field-level masking vs structure-preserving capsule — what each does, what each leaves on the table.",
    href: "/resources/learn/llm-capsule-vs-masking-tools",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "LLM Capsule vs Prompt Security Gateways",
    desc: "Prompt-level threat defense vs data-layer enablement — where each layer fits.",
    href: "/resources/learn/llm-capsule-vs-prompt-security-gateways",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "LLM Capsule vs Synthetic Data Platforms",
    desc: "Synthetic generation for training vs live capsule for production — different problems, different solutions.",
    href: "/resources/learn/llm-capsule-vs-synthetic-data-platforms",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "On-Premise vs Cloud AI Data Protection",
    desc: "Deployment-mode trade-offs for regulated enterprise AI workflows.",
    href: "/resources/learn/on-premise-vs-cloud-ai-data-protection",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "PII Protection vs Enterprise Confidentiality Control",
    desc: "Standard PII detection vs context-aware enterprise confidentiality markers.",
    href: "/resources/learn/pii-protection-vs-enterprise-confidentiality-control",
  },
  {
    category: "comparison",
    categoryLabel: "COMPARISON",
    title: "Structure-Preserving Processing vs Flat Masking",
    desc: "Why tables, sequences, and cross-references matter for AI workflow quality.",
    href: "/resources/learn/structure-preserving-processing-vs-flat-masking",
  },

  // ── DEFINITION (9) ─────────────────────────────────────────────
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "Secure Enterprise AI Data Workflows",
    desc: "What 'secure' means in enterprise AI workflows beyond field-level masking.",
    href: "/resources/learn/secure-enterprise-ai-data-workflows",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "Enterprise AI Document Processing",
    desc: "How regulated enterprises process documents through AI while keeping sensitive elements local.",
    href: "/resources/learn/enterprise-ai-document-processing",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "What Is an AI Data Capsule",
    desc: "The capsule pattern: structure-preserving encapsulation + restoration inside the trust boundary.",
    href: "/resources/learn/what-is-ai-data-capsule",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "How to Use AI on Sensitive Enterprise Data",
    desc: "Practical patterns for AI workflows over regulated operational data.",
    href: "/resources/learn/how-to-use-ai-on-sensitive-enterprise-data",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "Why Redaction Breaks Enterprise AI Workflows",
    desc: "Why permanent removal destroys the context AI needs to produce useful output.",
    href: "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "Structure-Preserving Document Processing",
    desc: "Tables, layouts, and cross-references survive the process intact.",
    href: "/resources/learn/structure-preserving-document-processing",
  },
  {
    category: "definition",
    categoryLabel: "DEFINITION",
    title: "AI Data Pipeline Protection",
    desc: "End-to-end protection across the enterprise AI data pipeline.",
    href: "/resources/learn/ai-data-pipeline-protection",
  },
  {
    category: "definition",
    categoryLabel: "GLOSSARY",
    title: "Restorable Workflow",
    desc: "Workflows where the original values can be restored locally after AI processing.",
    href: "/resources/glossary/restorable-workflow",
  },
  {
    category: "definition",
    categoryLabel: "GLOSSARY",
    title: "Enterprise Context Control",
    desc: "Organization-defined markers + policy versioning + time-shifting.",
    href: "/resources/glossary/enterprise-context-control",
  },
]

export default function Learn({
  eyebrow = "Resources · Learn",
  heroTitle = "Learn articles for regulated enterprise AI",
  heroLead = "Industry deployment guides, architecture deep-dives, comparison frameworks, and Korean public-sector policy analysis.",
  labelAll = "All",
  labelPolicy = "Policy",
  labelIndustry = "Industry",
  labelArchitecture = "Architecture",
  labelStrategy = "Strategy",
  labelComparison = "Comparison",
  labelDefinition = "Definition",
  readLabel = "Read →",
}: Props) {
  const [activeCategory, setActiveCategory] = useState<"all" | CategoryKey>("all")

  // Auto-detect Framer locale prefix from current URL (/de/, /ja/, /ko/, etc.)
  // SSG-safe: starts empty, populated after hydration.
  const [localePrefix, setLocalePrefix] = useState<string>("")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/|$)/)
    if (m) setLocalePrefix(`/${m[1]}`)
  }, [])

  const filters: Array<{ key: "all" | CategoryKey; label: string }> = [
    { key: "all",          label: labelAll },
    { key: "policy",       label: labelPolicy },
    { key: "industry",     label: labelIndustry },
    { key: "architecture", label: labelArchitecture },
    { key: "strategy",     label: labelStrategy },
    { key: "comparison",   label: labelComparison },
    { key: "definition",   label: labelDefinition },
  ]

  const visibleCards =
    activeCategory === "all" ? CARDS : CARDS.filter((c) => c.category === activeCategory)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .lrn-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .lrn-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 80px);
        }

        /* ── Hero ──────────────────────────────────────── */
        .lrn-hero {
          padding: clamp(80px, 9vw, 140px) 0 clamp(48px, 6vw, 72px);
          text-align: center;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }
        .lrn-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .lrn-hero__eyebrow {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 20px;
        }
        .lrn-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }
        .lrn-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 auto;
          max-width: 720px;
        }

        /* ── Filter tabs ───────────────────────────────── */
        .lrn-tabs-wrap {
          padding: clamp(32px, 4vw, 56px) 0 0;
        }
        .lrn-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
        .lrn-tab {
          appearance: none;
          background: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px;
          padding: 8px 18px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--c-ink-soft, #3a3d5e);
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s, color 0.15s;
        }
        .lrn-tab:hover {
          border-color: var(--c-ink, #0f1130);
          color: var(--c-ink, #0f1130);
        }
        .lrn-tab--active {
          background-color: var(--c-ink, #0f1130);
          border-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .lrn-tab--active:hover {
          background-color: var(--c-primary, #5b4fe9);
          border-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── Card grid ─────────────────────────────────── */
        .lrn-grid-wrap {
          padding: clamp(32px, 4vw, 56px) 0 clamp(80px, 10vw, 140px);
        }
        .lrn-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        @container (max-width: 1023px) {
          .lrn-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @container (max-width: 639px) {
          .lrn-grid { grid-template-columns: minmax(0, 1fr); }
        }

        .lrn-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 12px;
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }
        .lrn-card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
          transform: translateY(-2px);
        }

        .lrn-card__cat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-primary, #5b4fe9);
        }
        .lrn-card__title {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }
        .lrn-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0;
          flex: 1;
        }
        .lrn-card__link {
          align-self: flex-start;
          margin-top: 4px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
        }
        .lrn-card:hover .lrn-card__link {
          color: var(--c-primary-dark, #3b2fbf);
        }

        @container (max-width: 639px) {
          .lrn-hero { padding-top: 60px; }
          .lrn-hero__title { font-size: 28px; }
          .lrn-hero__lead { font-size: 15px; }
          .lrn-card { padding: 20px 18px; }
          .lrn-card__title { font-size: 16px; }
        }
      `}</style>

      <div className="lrn-root">

        {/* ── Hero ── */}
        <section className="lrn-hero">
          <div className="lrn-container">
            <div className="lrn-hero__inner">
              <div className="lrn-hero__eyebrow">{eyebrow}</div>
              <h1 className="lrn-hero__title">{heroTitle}</h1>
              <p className="lrn-hero__lead">{heroLead}</p>
            </div>
          </div>
        </section>

        {/* ── Filter tabs ── */}
        <div className="lrn-tabs-wrap">
          <div className="lrn-container">
            <div className="lrn-tabs" role="tablist">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === f.key}
                  onClick={() => setActiveCategory(f.key)}
                  className={`lrn-tab${activeCategory === f.key ? " lrn-tab--active" : ""}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Card grid ── */}
        <div className="lrn-grid-wrap">
          <div className="lrn-container">
            <div className="lrn-grid">
              {visibleCards.map((c, i) => (
                <a key={i} href={`${localePrefix}${c.href}`} className="lrn-card">
                  <div className="lrn-card__cat">{c.categoryLabel}</div>
                  <h3 className="lrn-card__title">{c.title}</h3>
                  <p className="lrn-card__desc">{c.desc}</p>
                  <span className="lrn-card__link">{readLabel}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(Learn, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Resources · Learn" },
  heroTitle: { type: ControlType.String, title: "Hero Title", defaultValue: "Learn articles for regulated enterprise AI" },
  heroLead: { type: ControlType.String, title: "Hero Lead", defaultValue: "Industry deployment guides, architecture deep-dives, comparison frameworks, and Korean public-sector policy analysis.", displayTextArea: true },
  labelAll: { type: ControlType.String, title: "Tab: All", defaultValue: "All" },
  labelPolicy: { type: ControlType.String, title: "Tab: Policy", defaultValue: "Policy" },
  labelIndustry: { type: ControlType.String, title: "Tab: Industry", defaultValue: "Industry" },
  labelArchitecture: { type: ControlType.String, title: "Tab: Architecture", defaultValue: "Architecture" },
  labelStrategy: { type: ControlType.String, title: "Tab: Strategy", defaultValue: "Strategy" },
  labelComparison: { type: ControlType.String, title: "Tab: Comparison", defaultValue: "Comparison" },
  labelDefinition: { type: ControlType.String, title: "Tab: Definition", defaultValue: "Definition" },
  readLabel: { type: ControlType.String, title: "Read Label", defaultValue: "Read →" },
})
