import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  description?: string
  card1Title?: string; card1Desc?: string; card1Color?: string
  card2Title?: string; card2Desc?: string; card2Color?: string
  card3Title?: string; card3Desc?: string; card3Color?: string
  card4Title?: string; card4Desc?: string; card4Color?: string
  card5Title?: string; card5Desc?: string; card5Color?: string
}

const ACCENT_COLORS: Record<string, string> = {
  primary: "var(--c-primary, #5b4fe9)",
  teal:    "var(--c-teal, #0ea5a4)",
  amber:   "var(--c-amber, #f59e0b)",
  coral:   "var(--c-coral, #ef5350)",
  dark:    "var(--c-bg-dark, #0f1130)",
}

export default function Section04_AuditFeatures({
  eyebrow = "Audit framework",
  heading = "What the audit log captures",
  description = "Every event in the LLM Capsule lifecycle is logged with structured metadata — ready for review by privacy, security, and compliance teams.",
  card1Title = "Detection events",
  card1Desc = "Every detection: which marker, which document, which version, confidence, timestamp. Reproducible across policy versions.",
  card1Color = "primary",
  card2Title = "Policy versions",
  card2Desc = "Yesterday's policy archived, today's enforced. Diff visible. Time-shifting markers — query historical decisions under historical policy.",
  card2Color = "teal",
  card3Title = "Token mappings",
  card3Desc = "Local token vault never leaves. Token issuance + retrieval logged with workflow ID and user identity. Vault encrypted at rest.",
  card3Color = "amber",
  card4Title = "Detection accuracy",
  card4Desc = "98.1% baseline detection rate measured on industry benchmarks. Per-deployment evaluation against your own document corpus.",
  card4Color = "coral",
  card5Title = "Model + path routing",
  card5Desc = "Which workflow routed to which model on which path (A external / B on-prem). Full per-event traceability for regulator review.",
  card5Color = "dark",
}: Props) {

  const cards = [
    { title: card1Title, desc: card1Desc, color: card1Color },
    { title: card2Title, desc: card2Desc, color: card2Color },
    { title: card3Title, desc: card3Desc, color: card3Color },
    { title: card4Title, desc: card4Desc, color: card4Color },
    { title: card5Title, desc: card5Desc, color: card5Color },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s4-root { width: 100%; container-type: inline-size; }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s4-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .s4-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s4-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(24px, 2.8cqi, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s4-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(15px, 1.2cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s4-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @container (min-width: 600px) {
          .s4-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 900px) {
          .s4-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
          .s4-desc { max-width: 860px; }
        }

        .s4-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .s4-card__accent {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .s4-card__title {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.3;
        }

        .s4-card__desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section">
          <div className="s4-container">
            <div className="s4-head">
              <div className="s4-eyebrow">{eyebrow}</div>
              <h2 className="s4-h2">{heading}</h2>
              <p className="s4-desc">{description}</p>
            </div>

            <div className="s4-grid">
              {cards.map((card, i) => (
                <article key={i} className="s4-card">
                  <span
                    className="s4-card__accent"
                    style={{ backgroundColor: ACCENT_COLORS[card.color] || ACCENT_COLORS.primary }}
                  />
                  <h3 className="s4-card__title">{card.title}</h3>
                  <p className="s4-card__desc">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_AuditFeatures, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Audit framework" },
  heading: { type: ControlType.String, title: "Heading", defaultValue: "What the audit log captures" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Every event in the LLM Capsule lifecycle is logged with structured metadata — ready for review by privacy, security, and compliance teams.", displayTextArea: true },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Detection events" },
  card1Desc: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Every detection: which marker, which document, which version, confidence, timestamp. Reproducible across policy versions.", displayTextArea: true },
  card1Color: { type: ControlType.Enum, title: "Card 1 Color", options: ["primary", "teal", "amber", "coral", "dark"], defaultValue: "primary" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Policy versions" },
  card2Desc: { type: ControlType.String, title: "Card 2 Description", defaultValue: "Yesterday's policy archived, today's enforced. Diff visible. Time-shifting markers — query historical decisions under historical policy.", displayTextArea: true },
  card2Color: { type: ControlType.Enum, title: "Card 2 Color", options: ["primary", "teal", "amber", "coral", "dark"], defaultValue: "teal" },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Token mappings" },
  card3Desc: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Local token vault never leaves. Token issuance + retrieval logged with workflow ID and user identity. Vault encrypted at rest.", displayTextArea: true },
  card3Color: { type: ControlType.Enum, title: "Card 3 Color", options: ["primary", "teal", "amber", "coral", "dark"], defaultValue: "amber" },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "Detection accuracy" },
  card4Desc: { type: ControlType.String, title: "Card 4 Description", defaultValue: "98.1% baseline detection rate measured on industry benchmarks. Per-deployment evaluation against your own document corpus.", displayTextArea: true },
  card4Color: { type: ControlType.Enum, title: "Card 4 Color", options: ["primary", "teal", "amber", "coral", "dark"], defaultValue: "coral" },
  card5Title: { type: ControlType.String, title: "Card 5 Title", defaultValue: "Model + path routing" },
  card5Desc: { type: ControlType.String, title: "Card 5 Description", defaultValue: "Which workflow routed to which model on which path (A external / B on-prem). Full per-event traceability for regulator review.", displayTextArea: true },
  card5Color: { type: ControlType.Enum, title: "Card 5 Color", options: ["primary", "teal", "amber", "coral", "dark"], defaultValue: "dark" },
})
