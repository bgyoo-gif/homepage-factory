import { addPropertyControls, ControlType } from "framer"

// LearnArticleTop — Hero + TL;DR block for /learn/* article pages
// Place this component at the TOP of the article canvas.
// Below it: Framer CMS Rich Text block for the article body.
// Below that: LearnArticleBottom (Related articles + CTA strip).

interface Props {
  // Hero
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string

  // TL;DR
  tldrLabel?: string
  tldrBody?: string
}

export default function LearnArticleTop({
  backLabel = "← Learn",
  backHref = "/learn",
  title = "Why enterprise AI pilots stall — and how they get to production",
  lead = "A diagnostic for executives, CDOs, CAIOs, and CIOs whose AI pilot has run for months without reaching production.",
  category = "Strategy · Pilot to production",
  readTime = "10 min read",
  dateUpdated = "Updated April 2025",
  tldrLabel = "TL;DR — Diagnosis",
  tldrBody = "Most enterprise AI pilots do not fail because the AI is bad. They fail because the data layer between the AI and the operational systems is missing. Without an AI enablement data layer, regulated enterprises cannot send the data AI needs to the data the business can expose. Pilots prove out on synthetic or anonymized data, then stall when the security, privacy, and compliance review opens. The pattern that ships to production: structure-preserving capsule + differential-privacy-based protection + plug-in execution + restoration + two execution paths.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .lat-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .lat-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .lat-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .lat-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .lat-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .lat-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .lat-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 auto 28px;
          max-width: 760px;
        }

        .lat-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
          max-width: 760px;
          margin: 0 auto;
        }

        .lat-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .lat-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .lat-meta__time,
        .lat-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .lat-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .lat-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .lat-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .lat-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .lat-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .lat-hero { padding-top: 48px; }
          .lat-hero__title { font-size: 28px; }
          .lat-hero__lead { font-size: 16px; }
          .lat-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
        }
      `}</style>

      <div className="lat-root">

        {/* ── 1. Article Hero ── */}
        <section className="lat-hero">
          <div className="lat-container">
            <a href={backHref} className="lat-hero__back">{backLabel}</a>
            <h1 className="lat-hero__title">{title}</h1>
            <p className="lat-hero__lead">{lead}</p>
            <div className="lat-hero__meta">
              <span className="lat-meta__chip">{category}</span>
              <span className="lat-meta__sep" aria-hidden="true" />
              <span className="lat-meta__time">{readTime}</span>
              <span className="lat-meta__sep" aria-hidden="true" />
              <span className="lat-meta__date">{dateUpdated}</span>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="lat-tldr-wrap">
          <div className="lat-container">
            <div className="lat-tldr">
              <div className="lat-tldr__label">{tldrLabel}</div>
              <p className="lat-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticleTop, {
  // Hero
  backLabel:   { type: ControlType.String, title: "Back Label",    defaultValue: "← Learn" },
  backHref:    { type: ControlType.String, title: "Back URL",      defaultValue: "/learn" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "Why enterprise AI pilots stall — and how they get to production" },
  lead:        { type: ControlType.String, title: "Lead",          defaultValue: "A diagnostic for executives, CDOs, CAIOs, and CIOs whose AI pilot has run for months without reaching production.", displayTextArea: true },
  category:    { type: ControlType.String, title: "Category",      defaultValue: "Strategy · Pilot to production" },
  readTime:    { type: ControlType.String, title: "Read Time",     defaultValue: "10 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated",  defaultValue: "Updated April 2025" },

  // TL;DR
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR — Diagnosis" },
  tldrBody:  { type: ControlType.String, title: "TL;DR Body",  defaultValue: "Most enterprise AI pilots do not fail because the AI is bad. They fail because the data layer between the AI and the operational systems is missing. Without an AI enablement data layer, regulated enterprises cannot send the data AI needs to the data the business can expose. Pilots prove out on synthetic or anonymized data, then stall when the security, privacy, and compliance review opens. The pattern that ships to production: structure-preserving capsule + differential-privacy-based protection + plug-in execution + restoration + two execution paths.", displayTextArea: true },
})
