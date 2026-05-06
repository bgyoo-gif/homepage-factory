import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  h1Plain?: string
  h1Highlight?: string
  description?: string
  stat1Num?: string
  stat1Label?: string
  stat2Num?: string
  stat2Label?: string
  stat3Num?: string
  stat3Label?: string
  stat4Num?: string
  stat4Label?: string
}

export default function Section01_Hero({
  eyebrow = "Solutions",
  h1Plain = "Make regulated workflows ",
  h1Highlight = "usable with AI",
  description = "Six industries. Real production workflows. Real customers. One AI enablement data layer that removes the data exposure barrier blocking enterprise AI adoption — so AI runs on real data, inside your environment, under your governance.",
  stat1Num = "6",
  stat1Label = "Regulated industries",
  stat2Num = "10+",
  stat2Label = "Production customers",
  stat3Num = "30 min",
  stat3Label = "Time to first evaluation",
  stat4Num = "0",
  stat4Label = "Raw data to external LLM",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s1-section {
          padding-top: clamp(80px, 10cqi, 140px);
          padding-bottom: clamp(48px, 6cqi, 80px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          text-align: center;
          background-color: var(--c-bg, #ffffff);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s1-h1 {
          font-size: clamp(36px, 5cqi, 64px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          max-width: 860px;
          margin: 0 auto 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-highlight {
          color: var(--c-primary, #5b4fe9);
        }

        .s1-desc {
          font-size: clamp(16px, 1.4cqi, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          line-height: 1.6;
          margin: 0 auto 40px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-stats {
          display: flex;
          justify-content: center;
          gap: clamp(24px, 4cqi, 64px);
          flex-wrap: wrap;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .s1-stat {
          text-align: center;
        }

        .s1-stat-num {
          font-size: clamp(28px, 3cqi, 40px);
          font-weight: 800;
          color: var(--c-primary, #5b4fe9);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .s1-stat-label {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        @container (max-width: 599px) {
          .s1-stats {
            gap: 24px;
          }
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-section">
          <div className="s1-container">
            <span className="s1-eyebrow">{eyebrow}</span>
            <h1 className="s1-h1">
              {h1Plain}<span className="s1-highlight">{h1Highlight}</span>
            </h1>
            <p className="s1-desc">{description}</p>
            <div className="s1-stats">
              <div className="s1-stat">
                <div className="s1-stat-num">{stat1Num}</div>
                <div className="s1-stat-label">{stat1Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{stat2Num}</div>
                <div className="s1-stat-label">{stat2Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{stat3Num}</div>
                <div className="s1-stat-label">{stat3Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{stat4Num}</div>
                <div className="s1-stat-label">{stat4Label}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow:    { type: ControlType.String, title: "Eyebrow",      defaultValue: "Solutions" },
  h1Plain:    { type: ControlType.String, title: "H1 Plain",     defaultValue: "Make regulated workflows " },
  h1Highlight:{ type: ControlType.String, title: "H1 Highlight", defaultValue: "usable with AI" },
  description:{ type: ControlType.String, title: "Description",  defaultValue: "Six industries. Real production workflows. Real customers. One AI enablement data layer that removes the data exposure barrier blocking enterprise AI adoption — so AI runs on real data, inside your environment, under your governance.", displayTextArea: true },
  stat1Num:   { type: ControlType.String, title: "Stat 1 Number", defaultValue: "6" },
  stat1Label: { type: ControlType.String, title: "Stat 1 Label",  defaultValue: "Regulated industries" },
  stat2Num:   { type: ControlType.String, title: "Stat 2 Number", defaultValue: "10+" },
  stat2Label: { type: ControlType.String, title: "Stat 2 Label",  defaultValue: "Production customers" },
  stat3Num:   { type: ControlType.String, title: "Stat 3 Number", defaultValue: "30 min" },
  stat3Label: { type: ControlType.String, title: "Stat 3 Label",  defaultValue: "Time to first evaluation" },
  stat4Num:   { type: ControlType.String, title: "Stat 4 Number", defaultValue: "0" },
  stat4Label: { type: ControlType.String, title: "Stat 4 Label",  defaultValue: "Raw data to external LLM" },
})
