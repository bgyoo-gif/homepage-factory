// Glossary index page (v6.2 design).
// Self-contained Framer Code Component.
// Hero + Category filter tabs + Card grid (11 glossary terms).
// No external imports — Framer cross-folder compatible.

import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

interface Props {
  // Hero
  eyebrow?: string
  heroTitle?: string
  heroLead?: string

  // Category tab labels
  labelAll?: string
  labelConcept?: string
  labelProtection?: string
  labelWorkflow?: string
  labelGovernance?: string

  // Read CTA label
  readLabel?: string
}

type CategoryKey = "concept" | "protection" | "workflow" | "governance"

type Card = {
  category: CategoryKey
  categoryLabel: string
  title: string
  desc: string
  href: string
}

const CARDS: Card[] = [
  // ── CONCEPT (3) ───────────────────────────────────────────────
  {
    category: "concept",
    categoryLabel: "CONCEPT · CORE CATEGORY",
    title: "AI enablement data layer",
    desc: "The architectural component that turns regulated operational data into AI-ready capsules locally, executes AI workflows on the protected capsule, and restores outputs back into the originating system.",
    href: "/resources/glossary/ai-enablement-data-layer",
  },
  {
    category: "concept",
    categoryLabel: "CONCEPT · SYNONYM",
    title: "AI-ready operational layer",
    desc: "Earlier name for the same category. The current canonical term is 'AI enablement data layer for regulated operations'. Retained as a synonym definition for readers arriving via earlier collateral.",
    href: "/resources/glossary/ai-ready-operational-layer",
  },
  {
    category: "concept",
    categoryLabel: "CONCEPT · DATA",
    title: "Operational data",
    desc: "Structured enterprise data — NOC logs, network configs, OT manifests, clinical workflows, claim records, mission context — that PII guardrails can't see but regulated AI workflows depend on.",
    href: "/resources/glossary/operational-data",
  },

  // ── PROTECTION (3) ────────────────────────────────────────────
  {
    category: "protection",
    categoryLabel: "PROTECTION · ENCAPSULATION",
    title: "Structure-preserving encapsulation",
    desc: "Tables, cross-references, configurations, and document hierarchies survive the process intact. AI receives full operational structure — not broken fragments.",
    href: "/resources/glossary/structure-preserving-encapsulation",
  },
  {
    category: "protection",
    categoryLabel: "PROTECTION · DP",
    title: "Differential privacy",
    desc: "Mathematically defined noise injection that addresses inference and aggregate-pattern risk simple filtering can't close. The 2006 Dwork-Roth standard for privacy-preserving computation.",
    href: "/resources/glossary/differential-privacy",
  },
  {
    category: "protection",
    categoryLabel: "PROTECTION · RESTORATION",
    title: "State vault for restoration",
    desc: "Local token map that restores AI outputs back to original values inside the trust boundary. The mechanism that delivers business-ready output without external re-identification risk.",
    href: "/resources/glossary/state-vault-for-restoration",
  },

  // ── WORKFLOW (3) ──────────────────────────────────────────────
  {
    category: "workflow",
    categoryLabel: "WORKFLOW · ENTRY POINT",
    title: "Blocked AI workflow",
    desc: "Business process that would benefit from AI but cannot be deployed because the operational data involved cannot be sent to an LLM under regulatory or commercial constraints.",
    href: "/resources/glossary/blocked-ai-workflow",
  },
  {
    category: "workflow",
    categoryLabel: "WORKFLOW · EXECUTION",
    title: "Two execution paths",
    desc: "Path A (external approved LLM with capsule data only) and Path B (on-prem local lightweight model). Policy-driven per workflow, under a single governance framework.",
    href: "/resources/glossary/two-execution-paths",
  },
  {
    category: "workflow",
    categoryLabel: "WORKFLOW · INTEGRATION",
    title: "Connector lane",
    desc: "The in-environment reading surface. Capsule reads from existing systems inside the customer's network — REST, gRPC, JDBC, Graph API — without raw data crossing the trust boundary.",
    href: "/resources/glossary/connector-lane",
  },

  // ── GOVERNANCE & RISK (2) ─────────────────────────────────────
  {
    category: "governance",
    categoryLabel: "GOVERNANCE · SOVEREIGNTY",
    title: "Sovereign AI",
    desc: "AI workflows that satisfy national data residency, EU AI Act compliance, and sector-specific sovereignty requirements — typically via on-prem or region-locked execution.",
    href: "/resources/glossary/sovereign-ai",
  },
  {
    category: "governance",
    categoryLabel: "GOVERNANCE · RISK",
    title: "Shadow AI",
    desc: "Unsanctioned AI usage that emerges when official tooling cannot serve the workflows employees need. The result of blocked workflows + productivity pressure.",
    href: "/resources/glossary/shadow-ai",
  },
]

export default function Glossary({
  eyebrow = "Resources · Glossary",
  heroTitle = "Glossary for regulated enterprise AI",
  heroLead = "Definitions for the core concepts, protection techniques, workflow patterns, and governance terms behind the AI enablement data layer.",
  labelAll = "All",
  labelConcept = "Concept",
  labelProtection = "Protection",
  labelWorkflow = "Workflow",
  labelGovernance = "Governance",
  readLabel = "Read →",
}: Props) {
  const [activeCategory, setActiveCategory] = useState<"all" | CategoryKey>("all")

  const filters: Array<{ key: "all" | CategoryKey; label: string }> = [
    { key: "all",        label: labelAll },
    { key: "concept",    label: labelConcept },
    { key: "protection", label: labelProtection },
    { key: "workflow",   label: labelWorkflow },
    { key: "governance", label: labelGovernance },
  ]

  const visibleCards =
    activeCategory === "all" ? CARDS : CARDS.filter((c) => c.category === activeCategory)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .gls-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .gls-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 80px);
        }

        /* ── Hero ──────────────────────────────────────── */
        .gls-hero {
          padding: clamp(80px, 9vw, 140px) 0 clamp(48px, 6vw, 72px);
          text-align: center;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }
        .gls-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .gls-hero__eyebrow {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 20px;
        }
        .gls-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }
        .gls-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 auto;
          max-width: 720px;
        }

        /* ── Filter tabs ───────────────────────────────── */
        .gls-tabs-wrap {
          padding: clamp(32px, 4vw, 56px) 0 0;
        }
        .gls-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
        .gls-tab {
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
        .gls-tab:hover {
          border-color: var(--c-ink, #0f1130);
          color: var(--c-ink, #0f1130);
        }
        .gls-tab--active {
          background-color: var(--c-ink, #0f1130);
          border-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .gls-tab--active:hover {
          background-color: var(--c-primary, #5b4fe9);
          border-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        /* ── Card grid ─────────────────────────────────── */
        .gls-grid-wrap {
          padding: clamp(32px, 4vw, 56px) 0 clamp(80px, 10vw, 140px);
        }
        .gls-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        @container (max-width: 1023px) {
          .gls-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @container (max-width: 639px) {
          .gls-grid { grid-template-columns: minmax(0, 1fr); }
        }

        .gls-card {
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
        .gls-card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
          transform: translateY(-2px);
        }

        .gls-card__cat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-primary, #5b4fe9);
        }
        .gls-card__title {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }
        .gls-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0;
          flex: 1;
        }
        .gls-card__link {
          align-self: flex-start;
          margin-top: 4px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
        }
        .gls-card:hover .gls-card__link {
          color: var(--c-primary-dark, #3b2fbf);
        }

        @container (max-width: 639px) {
          .gls-hero { padding-top: 60px; }
          .gls-hero__title { font-size: 28px; }
          .gls-hero__lead { font-size: 15px; }
          .gls-card { padding: 20px 18px; }
          .gls-card__title { font-size: 16px; }
        }
      `}</style>

      <div className="gls-root">

        {/* ── Hero ── */}
        <section className="gls-hero">
          <div className="gls-container">
            <div className="gls-hero__inner">
              <div className="gls-hero__eyebrow">{eyebrow}</div>
              <h1 className="gls-hero__title">{heroTitle}</h1>
              <p className="gls-hero__lead">{heroLead}</p>
            </div>
          </div>
        </section>

        {/* ── Filter tabs ── */}
        <div className="gls-tabs-wrap">
          <div className="gls-container">
            <div className="gls-tabs" role="tablist">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === f.key}
                  onClick={() => setActiveCategory(f.key)}
                  className={`gls-tab${activeCategory === f.key ? " gls-tab--active" : ""}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Card grid ── */}
        <div className="gls-grid-wrap">
          <div className="gls-container">
            <div className="gls-grid">
              {visibleCards.map((c, i) => (
                <a key={i} href={c.href} className="gls-card">
                  <div className="gls-card__cat">{c.categoryLabel}</div>
                  <h3 className="gls-card__title">{c.title}</h3>
                  <p className="gls-card__desc">{c.desc}</p>
                  <span className="gls-card__link">{readLabel}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(Glossary, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Resources · Glossary" },
  heroTitle: { type: ControlType.String, title: "Hero Title", defaultValue: "Glossary for regulated enterprise AI" },
  heroLead: { type: ControlType.String, title: "Hero Lead", defaultValue: "Definitions for the core concepts, protection techniques, workflow patterns, and governance terms behind the AI enablement data layer.", displayTextArea: true },
  labelAll: { type: ControlType.String, title: "Tab: All", defaultValue: "All" },
  labelConcept: { type: ControlType.String, title: "Tab: Concept", defaultValue: "Concept" },
  labelProtection: { type: ControlType.String, title: "Tab: Protection", defaultValue: "Protection" },
  labelWorkflow: { type: ControlType.String, title: "Tab: Workflow", defaultValue: "Workflow" },
  labelGovernance: { type: ControlType.String, title: "Tab: Governance", defaultValue: "Governance" },
  readLabel: { type: ControlType.String, title: "Read Label", defaultValue: "Read →" },
})
