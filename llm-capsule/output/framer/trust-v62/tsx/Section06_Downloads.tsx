import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  description?: string
  card1Icon?: string
  card1Chip?: string
  card1Title?: string
  card1Desc?: string
  card1CtaText?: string
  card1CtaHref?: string
  card2Icon?: string
  card2Chip?: string
  card2Title?: string
  card2Desc?: string
  card2CtaText?: string
  card2CtaHref?: string
}

// File-text icon — DPA template
function IconFileText() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

// Clipboard-check icon — Vendor Security Questionnaire
function IconClipboardCheck() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" ry="1" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const CARD_ICONS = [IconFileText, IconClipboardCheck]

export default function Section06_Downloads({
  eyebrow = "Compliance downloads",
  heading = "Documentation for procurement and compliance",
  description = "The documents your legal, security, and procurement teams need to move forward. Form-gated to coordinate with Sales / Customer Success on questions.",
  card1Icon = "📄",
  card1Chip = "FORM-GATED · 1 BUSINESS DAY",
  card1Title = "Data Processing Agreement (DPA) Template",
  card1Desc = "CUBIG's standard DPA template aligned with GDPR Article 28 obligations. Includes Standard Contractual Clauses (SCCs) for international transfers. Customizable for sector-specific requirements.",
  card1CtaText = "Request DPA →",
  card1CtaHref = "/request-dpa",
  card2Icon = "📋",
  card2Chip = "FORM-GATED · 1 BUSINESS DAY",
  card2Title = "Vendor Security Questionnaire",
  card2Desc = "Pre-filled CUBIG responses to standard SIG, CAIQ, and SOC2 vendor security questionnaires. For procurement and security review teams. Includes architectural diagrams and audit framework details.",
  card2CtaText = "Request Questionnaire →",
  card2CtaHref = "/request-vendor-questionnaire",
}: Props) {

  const cards = [
    { icon: card1Icon, chip: card1Chip, title: card1Title, desc: card1Desc, ctaText: card1CtaText, ctaHref: card1CtaHref },
    { icon: card2Icon, chip: card2Chip, title: card2Title, desc: card2Desc, ctaText: card2CtaText, ctaHref: card2CtaHref },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s6-root { width: 100%; container-type: inline-size; }

        .s6-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s6-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .s6-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s6-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(24px, 2.8cqi, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s6-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(15px, 1.2cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @container (min-width: 600px) {
          .s6-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .s6-desc { max-width: 860px; }
        }

        .s6-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .s6-card__icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--r-sm, 6px);
          background: var(--c-bg-soft, #f7f8fb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 4px;
          flex-shrink: 0;
        }

        .s6-card__chip {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          padding: 4px 10px;
          background-color: var(--c-amber-soft, #fef3c7);
          color: var(--c-amber-dark, #b7790c);
          border-radius: 999px;
          align-self: flex-start;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .s6-card__title {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 17px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.3;
        }

        .s6-card__desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          flex: 1;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          text-decoration: none;
          background-color: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
          transition: background 0.18s;
          align-self: flex-start;
        }

        .s6-btn:hover {
          background-color: var(--c-primary, #5b4fe9);
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section">
          <div className="s6-container">
            <div className="s6-head">
              <div className="s6-eyebrow">{eyebrow}</div>
              <h2 className="s6-h2">{heading}</h2>
              <p className="s6-desc">{description}</p>
            </div>

            <div className="s6-grid">
              {cards.map((card, i) => {
                const Icon = CARD_ICONS[i] || IconFileText
                return (
                  <article key={i} className="s6-card">
                    <div className="s6-card__icon-wrap">
                      <Icon />
                    </div>
                    <span className="s6-card__chip">{card.chip}</span>
                    <h3 className="s6-card__title">{card.title}</h3>
                    <p className="s6-card__desc">{card.desc}</p>
                    <a className="s6-btn" href={card.ctaHref}>{card.ctaText}</a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_Downloads, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Compliance downloads" },
  heading: { type: ControlType.String, title: "Heading", defaultValue: "Documentation for procurement and compliance" },
  description: { type: ControlType.String, title: "Description", defaultValue: "The documents your legal, security, and procurement teams need to move forward. Form-gated to coordinate with Sales / Customer Success on questions.", displayTextArea: true },
  card1Icon: { type: ControlType.String, title: "Card 1 Icon", defaultValue: "📄" },
  card1Chip: { type: ControlType.String, title: "Card 1 Chip", defaultValue: "FORM-GATED · 1 BUSINESS DAY" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Data Processing Agreement (DPA) Template" },
  card1Desc: { type: ControlType.String, title: "Card 1 Description", defaultValue: "CUBIG's standard DPA template aligned with GDPR Article 28 obligations. Includes Standard Contractual Clauses (SCCs) for international transfers. Customizable for sector-specific requirements.", displayTextArea: true },
  card1CtaText: { type: ControlType.String, title: "Card 1 CTA Text", defaultValue: "Request DPA →" },
  card1CtaHref: { type: ControlType.String, title: "Card 1 CTA Link", defaultValue: "/request-dpa" },
  card2Icon: { type: ControlType.String, title: "Card 2 Icon", defaultValue: "📋" },
  card2Chip: { type: ControlType.String, title: "Card 2 Chip", defaultValue: "FORM-GATED · 1 BUSINESS DAY" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Vendor Security Questionnaire" },
  card2Desc: { type: ControlType.String, title: "Card 2 Description", defaultValue: "Pre-filled CUBIG responses to standard SIG, CAIQ, and SOC2 vendor security questionnaires. For procurement and security review teams. Includes architectural diagrams and audit framework details.", displayTextArea: true },
  card2CtaText: { type: ControlType.String, title: "Card 2 CTA Text", defaultValue: "Request Questionnaire →" },
  card2CtaHref: { type: ControlType.String, title: "Card 2 CTA Link", defaultValue: "/request-vendor-questionnaire" },
})
