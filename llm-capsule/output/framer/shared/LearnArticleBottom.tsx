import { addPropertyControls, ControlType } from "framer"

// LearnArticleBottom — Related articles + CTA strip for /learn/* article pages
// Place this component at the BOTTOM of the article canvas.
// Above it: Framer CMS Rich Text block for the article body.
// Above that: LearnArticleTop (Hero + TL;DR).

interface Props {
  // Related links
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string

  // CTA strip
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function LearnArticleBottom({
  relatedSectionLabel = "Related articles",
  related1Title = "PII guardrails vs. operational data protection",
  related1Href = "/learn/pii-guardrails-vs-operational-data-protection",
  related2Title = "Sovereign AI for European enterprises",
  related2Href = "/learn/sovereign-ai-european-enterprises",
  related3Title = "Glossary: Blocked AI workflow",
  related3Href = "/glossary/blocked-ai-workflow",
  related4Title = "Glossary: context-preserving data layer for AI",
  related4Href = "/glossary/context-preserving-data-layer",
  ctaTitle = "Ready to unblock your AI pilot?",
  ctaDescription = "Bring one stalled use case and one regulatory constraint. We deploy LLM Capsule on a sample workflow within 30 minutes.",
  ctaLabel = "Request an evaluation",
  ctaHref = "/request-a-demo",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .lab-root {
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
        .lab-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── Related Links ────────────────────────────────── */
        .lab-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .lab-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .lab-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .lab-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .lab-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .lab-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .lab-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .lab-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .lab-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── CTA Strip ────────────────────────────────────── */
        .lab-cta {
          padding: clamp(56px, 7vw, 96px) 0;
          background-color: var(--c-bg-dark, #0f1130);
        }

        .lab-cta__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .lab-cta__title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          max-width: 640px;
        }

        .lab-cta__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 8px;
          max-width: 560px;
        }

        .lab-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
          border: none;
          transition: background-color 0.2s;
        }
        .lab-cta__btn:hover {
          background-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .lab-cta__inner { gap: 10px; }
          .lab-cta__title { font-size: 24px; }
          .lab-cta__desc { font-size: 15px; }
        }
      `}</style>

      <div className="lab-root">

        {/* ── Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="lab-related">
            <div className="lab-container">
              <div className="lab-related__label">{relatedSectionLabel}</div>
              <div className="lab-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="lab-related__card">
                    <span className="lab-related__card-title">{item.title}</span>
                    <span className="lab-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CTA Strip ── */}
        <div className="lab-cta">
          <div className="lab-container">
            <div className="lab-cta__inner">
              <h2 className="lab-cta__title">{ctaTitle}</h2>
              {ctaDescription && (
                <p className="lab-cta__desc">{ctaDescription}</p>
              )}
              <a href={ctaHref} className="lab-cta__btn">{ctaLabel}</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

addPropertyControls(LearnArticleBottom, {
  // Related links
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Related articles" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "PII guardrails vs. operational data protection" },
  related1Href:  { type: ControlType.String, title: "Related 1 URL",   defaultValue: "/learn/pii-guardrails-vs-operational-data-protection" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Sovereign AI for European enterprises" },
  related2Href:  { type: ControlType.String, title: "Related 2 URL",   defaultValue: "/learn/sovereign-ai-european-enterprises" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Glossary: Blocked AI workflow" },
  related3Href:  { type: ControlType.String, title: "Related 3 URL",   defaultValue: "/glossary/blocked-ai-workflow" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "Glossary: context-preserving data layer for AI" },
  related4Href:  { type: ControlType.String, title: "Related 4 URL",   defaultValue: "/glossary/context-preserving-data-layer" },

  // CTA strip
  ctaTitle:       { type: ControlType.String, title: "CTA Title",       defaultValue: "Ready to unblock your AI pilot?" },
  ctaDescription: { type: ControlType.String, title: "CTA Description", defaultValue: "Bring one stalled use case and one regulatory constraint. We deploy LLM Capsule on a sample workflow within 30 minutes.", displayTextArea: true },
  ctaLabel:       { type: ControlType.String, title: "CTA Button Label",defaultValue: "Request an evaluation" },
  ctaHref:        { type: ControlType.String, title: "CTA Button URL",  defaultValue: "/request-a-demo" },
})
