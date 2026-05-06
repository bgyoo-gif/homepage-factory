import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  subheading?: string

  // Console tab labels
  tab1?: string
  tab2?: string
  tab3?: string
  tab4?: string
  tab5?: string

  // Console audit rows
  row1Time?: string
  row1Event?: string
  row1Badge?: string
  row1BadgeVariant?: "ok" | "warn"

  row2Time?: string
  row2Event?: string
  row2Badge?: string
  row2BadgeVariant?: "ok" | "warn"

  row3Time?: string
  row3Event?: string
  row3Badge?: string
  row3BadgeVariant?: "ok" | "warn"

  row4Time?: string
  row4Event?: string
  row4Badge?: string
  row4BadgeVariant?: "ok" | "warn"

  row5Time?: string
  row5Event?: string
  row5Badge?: string
  row5BadgeVariant?: "ok" | "warn"

  // Text panel
  textHeading?: string
  textPara1?: string

  feature1Label?: string
  feature1Desc?: string
  feature2Label?: string
  feature2Desc?: string
  feature3Label?: string
  feature3Desc?: string
  feature4Label?: string
  feature4Desc?: string
  feature5Label?: string
  feature5Desc?: string
}

export default function Section06_AdminConsole({
  eyebrow = "Operational governance",
  heading = "Admin console — every event, every policy, every model",
  subheading = "Enterprise AI governance is not a marketing claim. It's a console your audit team logs into.",

  tab1 = "Audit",
  tab2 = "Policies",
  tab3 = "Tokens",
  tab4 = "Detection",
  tab5 = "Models",

  row1Time = "10:24:18",
  row1Event = "INC-24091 · NOC-team-v2 · Path A",
  row1Badge = "restored",
  row1BadgeVariant = "ok",

  row2Time = "10:24:11",
  row2Event = "CLM-77241 · finance-v3 · Path A",
  row2Badge = "restored",
  row2BadgeVariant = "ok",

  row3Time = "10:23:58",
  row3Event = "MR-440-Z · defense-v1 · Path B",
  row3Badge = "restored",
  row3BadgeVariant = "ok",

  row4Time = "10:23:42",
  row4Event = "Policy NOC-team updated to v2",
  row4Badge = "policy",
  row4BadgeVariant = "warn",

  row5Time = "10:23:30",
  row5Event = "Detection · custom marker added",
  row5Badge = "policy",
  row5BadgeVariant = "ok",

  textHeading = "One pane. Five tabs. Full chain of custody.",
  textPara1 = "Every encapsulation, processing, and restoration event lands here. Audit teams can replay any event end-to-end — what was protected, which policy version was active, which model processed it, what was restored.",

  feature1Label = "Audit",
  feature1Desc = "every event with timestamps and policy version",
  feature2Label = "Policies",
  feature2Desc = "version history, scope, and RBAC",
  feature3Label = "Tokens",
  feature3Desc = "model usage, cost, and per-team breakdown",
  feature4Label = "Detection",
  feature4Desc = "what was classified as sensitive, and how",
  feature5Label = "Models",
  feature5Desc = "health, throughput, comparative output quality",
}: Props) {
  const rows = [
    { time: row1Time, event: row1Event, badge: row1Badge, variant: row1BadgeVariant },
    { time: row2Time, event: row2Event, badge: row2Badge, variant: row2BadgeVariant },
    { time: row3Time, event: row3Event, badge: row3Badge, variant: row3BadgeVariant },
    { time: row4Time, event: row4Event, badge: row4Badge, variant: row4BadgeVariant },
    { time: row5Time, event: row5Event, badge: row5Badge, variant: row5BadgeVariant },
  ]

  const features = [
    { label: feature1Label, desc: feature1Desc },
    { label: feature2Label, desc: feature2Desc },
    { label: feature3Label, desc: feature3Desc },
    { label: feature4Label, desc: feature4Desc },
    { label: feature5Label, desc: feature5Desc },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          background-color: var(--c-bg, #ffffff);
          /* Brand accent tones for dark console surface */
          --c-console-accent: #9d95f5;
          --c-console-muted: #c8c4f7;
        }

        .s6-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── Section Header ── */
        .s6-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s6-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s6-header h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s6-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Grid ── */
        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }

        @container (min-width: 720px) {
          .s6-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* ── Console mock ── */
        .s6-console {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 24px;
        }

        .s6-tabs {
          display: flex;
          gap: 4px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--c-bg-dark-2, #1b1d4a);
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .s6-tab {
          font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          padding: 6px 12px;
          border-radius: 4px;
          color: var(--c-console-accent, #9d95f5);
          cursor: pointer;
        }

        .s6-tab--active {
          background-color: var(--c-primary, #5b4fe9);
          color: var(--c-bg, #ffffff);
        }

        .s6-row {
          display: grid;
          grid-template-columns: 72px 1fr auto;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--c-bg-dark-2, #1b1d4a);
          font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          color: var(--c-console-muted, #c8c4f7);
          align-items: center;
        }

        .s6-row:last-child {
          border-bottom: 0;
        }

        .s6-row__event {
          color: var(--c-bg, #ffffff);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .s6-badge {
          padding: 2px 8px;
          background-color: var(--c-teal-dark, #0b7f7e);
          color: var(--c-bg, #ffffff);
          border-radius: 3px;
          font-size: 9px;
          white-space: nowrap;
        }

        .s6-badge--warn {
          background-color: var(--c-amber-dark, #b7790c);
        }

        /* ── Text panel ── */
        .s6-text h3 {
          font-size: clamp(18px, 1.6vw, 22px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .s6-text p {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .s6-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .s6-list li {
          font-size: 13px;
          padding-left: 24px;
          position: relative;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
        }

        .s6-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--c-primary, #5b4fe9);
          font-weight: 700;
        }

        .s6-list strong {
          color: var(--c-ink, #0f1130);
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section">
          <div className="s6-container">
            <div className="s6-header">
              <span className="s6-eyebrow">{eyebrow}</span>
              <h2>{heading}</h2>
              <p>{subheading}</p>
            </div>

            <div className="s6-grid">
              {/* Console mock */}
              <div className="s6-console">
                <div className="s6-tabs">
                  <span className="s6-tab s6-tab--active">{tab1}</span>
                  <span className="s6-tab">{tab2}</span>
                  <span className="s6-tab">{tab3}</span>
                  <span className="s6-tab">{tab4}</span>
                  <span className="s6-tab">{tab5}</span>
                </div>
                {rows.map((row, i) => (
                  <div className="s6-row" key={i}>
                    <span>{row.time}</span>
                    <span className="s6-row__event">{row.event}</span>
                    <span
                      className={
                        row.variant === "warn"
                          ? "s6-badge s6-badge--warn"
                          : "s6-badge"
                      }
                    >
                      {row.badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Text panel */}
              <div className="s6-text">
                <h3>{textHeading}</h3>
                <p>{textPara1}</p>
                <ul className="s6-list">
                  {features.map((f, i) => (
                    <li key={i}>
                      <strong>{f.label}</strong> — {f.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_AdminConsole, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Operational governance",
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Admin console — every event, every policy, every model",
  },
  subheading: {
    type: ControlType.String,
    title: "Subheading",
    defaultValue:
      "Enterprise AI governance is not a marketing claim. It's a console your audit team logs into.",
  },

  tab1: { type: ControlType.String, title: "Tab 1", defaultValue: "Audit" },
  tab2: { type: ControlType.String, title: "Tab 2", defaultValue: "Policies" },
  tab3: { type: ControlType.String, title: "Tab 3", defaultValue: "Tokens" },
  tab4: { type: ControlType.String, title: "Tab 4", defaultValue: "Detection" },
  tab5: { type: ControlType.String, title: "Tab 5", defaultValue: "Models" },

  row1Time: { type: ControlType.String, title: "Row 1 — Time", defaultValue: "10:24:18" },
  row1Event: { type: ControlType.String, title: "Row 1 — Event", defaultValue: "INC-24091 · NOC-team-v2 · Path A" },
  row1Badge: { type: ControlType.String, title: "Row 1 — Badge", defaultValue: "restored" },
  row1BadgeVariant: {
    type: ControlType.Enum,
    title: "Row 1 — Badge Variant",
    options: ["ok", "warn"],
    defaultValue: "ok",
  },

  row2Time: { type: ControlType.String, title: "Row 2 — Time", defaultValue: "10:24:11" },
  row2Event: { type: ControlType.String, title: "Row 2 — Event", defaultValue: "CLM-77241 · finance-v3 · Path A" },
  row2Badge: { type: ControlType.String, title: "Row 2 — Badge", defaultValue: "restored" },
  row2BadgeVariant: {
    type: ControlType.Enum,
    title: "Row 2 — Badge Variant",
    options: ["ok", "warn"],
    defaultValue: "ok",
  },

  row3Time: { type: ControlType.String, title: "Row 3 — Time", defaultValue: "10:23:58" },
  row3Event: { type: ControlType.String, title: "Row 3 — Event", defaultValue: "MR-440-Z · defense-v1 · Path B" },
  row3Badge: { type: ControlType.String, title: "Row 3 — Badge", defaultValue: "restored" },
  row3BadgeVariant: {
    type: ControlType.Enum,
    title: "Row 3 — Badge Variant",
    options: ["ok", "warn"],
    defaultValue: "ok",
  },

  row4Time: { type: ControlType.String, title: "Row 4 — Time", defaultValue: "10:23:42" },
  row4Event: { type: ControlType.String, title: "Row 4 — Event", defaultValue: "Policy NOC-team updated to v2" },
  row4Badge: { type: ControlType.String, title: "Row 4 — Badge", defaultValue: "policy" },
  row4BadgeVariant: {
    type: ControlType.Enum,
    title: "Row 4 — Badge Variant",
    options: ["ok", "warn"],
    defaultValue: "warn",
  },

  row5Time: { type: ControlType.String, title: "Row 5 — Time", defaultValue: "10:23:30" },
  row5Event: { type: ControlType.String, title: "Row 5 — Event", defaultValue: "Detection · custom marker added" },
  row5Badge: { type: ControlType.String, title: "Row 5 — Badge", defaultValue: "policy" },
  row5BadgeVariant: {
    type: ControlType.Enum,
    title: "Row 5 — Badge Variant",
    options: ["ok", "warn"],
    defaultValue: "ok",
  },

  textHeading: {
    type: ControlType.String,
    title: "Panel Heading",
    defaultValue: "One pane. Five tabs. Full chain of custody.",
  },
  textPara1: {
    type: ControlType.String,
    title: "Panel Description",
    defaultValue:
      "Every encapsulation, processing, and restoration event lands here. Audit teams can replay any event end-to-end — what was protected, which policy version was active, which model processed it, what was restored.",
  },

  feature1Label: { type: ControlType.String, title: "Feature 1 — Label", defaultValue: "Audit" },
  feature1Desc: {
    type: ControlType.String,
    title: "Feature 1 — Desc",
    defaultValue: "every event with timestamps and policy version",
  },
  feature2Label: { type: ControlType.String, title: "Feature 2 — Label", defaultValue: "Policies" },
  feature2Desc: {
    type: ControlType.String,
    title: "Feature 2 — Desc",
    defaultValue: "version history, scope, and RBAC",
  },
  feature3Label: { type: ControlType.String, title: "Feature 3 — Label", defaultValue: "Tokens" },
  feature3Desc: {
    type: ControlType.String,
    title: "Feature 3 — Desc",
    defaultValue: "model usage, cost, and per-team breakdown",
  },
  feature4Label: { type: ControlType.String, title: "Feature 4 — Label", defaultValue: "Detection" },
  feature4Desc: {
    type: ControlType.String,
    title: "Feature 4 — Desc",
    defaultValue: "what was classified as sensitive, and how",
  },
  feature5Label: { type: ControlType.String, title: "Feature 5 — Label", defaultValue: "Models" },
  feature5Desc: {
    type: ControlType.String,
    title: "Feature 5 — Desc",
    defaultValue: "health, throughput, comparative output quality",
  },
})
