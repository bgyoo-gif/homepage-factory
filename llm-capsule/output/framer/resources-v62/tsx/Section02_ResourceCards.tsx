import { addPropertyControls, ControlType } from "framer"

import { useEffect, useState } from "react"
interface Props {
  // Card 1 — Learn
  card1Icon?: string
  card1Count?: string
  card1Title?: string
  card1Desc?: string
  card1LinkLabel?: string
  card1LinkHref?: string
  // Card 2 — Glossary
  card2Icon?: string
  card2Count?: string
  card2Title?: string
  card2Desc?: string
  card2LinkLabel?: string
  card2LinkHref?: string
  // Card 3 — Trust Center
  card3Icon?: string
  card3Count?: string
  card3Title?: string
  card3Desc?: string
  card3LinkLabel?: string
  card3LinkHref?: string
}

const CARD_SVGS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
]

export default function Section02_ResourceCards({
  card1Count = "8 articles · GEO-optimized",
  card1Title = "Learn",
  card1Desc = "In-depth articles on enterprise context-preserving data layer for AI — architecture patterns, industry deployment guides (telecom, healthcare, finance, defense), pilot-to-production playbooks, sovereign AI under GDPR / EU AI Act.",
  card1LinkLabel = "Browse Learn articles →",
  card1LinkHref = "#articles",
  card2Icon = "📚",
  card2Count = "11 terms · Schema.org",
  card2Title = "Glossary",
  card2Desc = "Definitions of category and architectural concepts — context-preserving data layer for AI, structure-preserving encapsulation, two execution paths, sovereign AI, shadow AI, differential privacy. Each term with definition and cross-links.",
  card2LinkLabel = "Browse Glossary terms →",
  card2LinkHref = "#glossary",
  card3Icon = "🛡️",
  card3Count = "12 certifications · Compliance",
  card3Title = "Trust Center",
  card3Desc = "Security certifications, compliance frameworks (GDPR / HIPAA / SOX / EU AI Act), audit documentation, DPA template, vendor security questionnaire. Everything compliance and security teams need for evaluation.",
  card3LinkLabel = "Visit Trust Center →",
  card3LinkHref = "/trust",
}: Props) {
  // Auto-detect Framer locale prefix from current URL (/de/, /ja/, /ko/, etc.)
  // SSG-safe: starts empty, populated after hydration.
  const [localePrefix, setLocalePrefix] = useState<string>("")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/|$)/)
    if (m) setLocalePrefix(`/${m[1]}`)
  }, [])

  const cards = [
    {
      icon: CARD_SVGS[0],
      count: card1Count,
      title: card1Title,
      desc: card1Desc,
      linkLabel: card1LinkLabel,
      linkHref: card1LinkHref,
      iconVariant: "primary",
    },
    {
      icon: CARD_SVGS[1],
      count: card2Count,
      title: card2Title,
      desc: card2Desc,
      linkLabel: card2LinkLabel,
      linkHref: card2LinkHref,
      iconVariant: "teal",
    },
    {
      icon: CARD_SVGS[2],
      count: card3Count,
      title: card3Title,
      desc: card3Desc,
      linkLabel: card3LinkLabel,
      linkHref: card3LinkHref,
      iconVariant: "muted",
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s2-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        @container (max-width: 767px) {
          .s2-grid { grid-template-columns: 1fr; }
        }

        .s2-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @container (max-width: 767px) {
          .s2-card { padding: 28px 24px; }
        }

        .s2-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--r-sm, 6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .s2-icon-wrap--primary { background-color: var(--c-primary-soft, #eeebfe); color: var(--c-primary, #5b4fe9); }
        .s2-icon-wrap--teal    { background-color: var(--c-teal-soft, #e6f7f6); color: var(--c-teal, #0ea5a4); }
        .s2-icon-wrap--muted   { background-color: var(--c-bg-soft, #f7f8fb); color: var(--c-muted, #6b7280); }

        .s2-count {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 600;
          color: var(--c-muted, #6b7280);
          letter-spacing: 0.08em;
          padding: 5px 10px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border-radius: 999px;
          align-self: flex-start;
        }

        .s2-card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          margin: 0;
        }

        .s2-card-desc {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s2-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          padding-top: 12px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          text-decoration: none;
          transition: color 0.18s;
        }

        .s2-card-link:hover {
          color: var(--c-primary-dark, #3b2fbf);
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <div className="s2-grid">
              {cards.map((card, i) => (
                <article key={i} className="s2-card">
                  <div className={`s2-icon-wrap s2-icon-wrap--${card.iconVariant}`}>{card.icon}</div>
                  <span className="s2-count">{card.count}</span>
                  <h2 className="s2-card-title">{card.title}</h2>
                  <p className="s2-card-desc">{card.desc}</p>
                  <a href={`${localePrefix}${card.linkHref}`} className="s2-card-link">{card.linkLabel}</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_ResourceCards, {
  card1Icon:       { type: ControlType.String, title: "Card 1 Icon",      defaultValue: "📖" },
  card1Count:      { type: ControlType.String, title: "Card 1 Count",     defaultValue: "8 articles · GEO-optimized" },
  card1Title:      { type: ControlType.String, title: "Card 1 Title",     defaultValue: "Learn" },
  card1Desc:       { type: ControlType.String, title: "Card 1 Desc",      defaultValue: "In-depth articles on enterprise context-preserving data layer for AI — architecture patterns, industry deployment guides (telecom, healthcare, finance, defense), pilot-to-production playbooks, sovereign AI under GDPR / EU AI Act.", displayTextArea: true },
  card1LinkLabel:  { type: ControlType.String, title: "Card 1 Link",      defaultValue: "Browse Learn articles →" },
  card1LinkHref:   { type: ControlType.String, title: "Card 1 Href",      defaultValue: "#articles" },
  card2Icon:       { type: ControlType.String, title: "Card 2 Icon",      defaultValue: "📚" },
  card2Count:      { type: ControlType.String, title: "Card 2 Count",     defaultValue: "11 terms · Schema.org" },
  card2Title:      { type: ControlType.String, title: "Card 2 Title",     defaultValue: "Glossary" },
  card2Desc:       { type: ControlType.String, title: "Card 2 Desc",      defaultValue: "Definitions of category and architectural concepts — context-preserving data layer for AI, structure-preserving encapsulation, two execution paths, sovereign AI, shadow AI, differential privacy. Each term with definition and cross-links.", displayTextArea: true },
  card2LinkLabel:  { type: ControlType.String, title: "Card 2 Link",      defaultValue: "Browse Glossary terms →" },
  card2LinkHref:   { type: ControlType.String, title: "Card 2 Href",      defaultValue: "#glossary" },
  card3Icon:       { type: ControlType.String, title: "Card 3 Icon",      defaultValue: "🛡️" },
  card3Count:      { type: ControlType.String, title: "Card 3 Count",     defaultValue: "12 certifications · Compliance" },
  card3Title:      { type: ControlType.String, title: "Card 3 Title",     defaultValue: "Trust Center" },
  card3Desc:       { type: ControlType.String, title: "Card 3 Desc",      defaultValue: "Security certifications, compliance frameworks (GDPR / HIPAA / SOX / EU AI Act), audit documentation, DPA template, vendor security questionnaire. Everything compliance and security teams need for evaluation.", displayTextArea: true },
  card3LinkLabel:  { type: ControlType.String, title: "Card 3 Link",      defaultValue: "Visit Trust Center →" },
  card3LinkHref:   { type: ControlType.String, title: "Card 3 Href",      defaultValue: "/trust" },
})
