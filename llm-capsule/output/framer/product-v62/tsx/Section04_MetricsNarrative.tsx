import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  sectionTitle?: string
  sectionDesc?: string

  bigValue?: string
  bigLabel?: string
  bigNarrativePrefix?: string
  bigNarrativeBold?: string
  bigNarrativeSuffix?: string

  metric1Value?: string
  metric1Label?: string
  metric1Desc?: string

  metric2Value?: string
  metric2Label?: string
  metric2Desc?: string

  metric3Value?: string
  metric3Label?: string
  metric3Desc?: string

  metric4Value?: string
  metric4Label?: string
  metric4Desc?: string
}

export default function Section04_MetricsNarrative({
  eyebrow = "Performance — measured on real enterprise documents",
  sectionTitle = "The numbers behind the demo",
  sectionDesc = "2,200-character document benchmark. Tested across finance, healthcare, legal, and public sector workflows.",

  bigValue = "0.12s",
  bigLabel = "Per-page processing latency",
  bigNarrativePrefix = "That's ",
  bigNarrativeBold = "120 milliseconds",
  bigNarrativeSuffix = " from raw document to encapsulated capsule — fast enough to plug into real-time NOC alerting, claims intake, and clinical workflows without breaking SLA. Most enterprise AI pilots stall on latency. We don't.",

  metric1Value = "100%",
  metric1Label = "Restoration rate",
  metric1Desc = "Every encapsulation has a reversible local mapping. No ambiguity, no manual reconstruction.",

  metric2Value = "98%",
  metric2Label = "Output similarity",
  metric2Desc = "Compared to AI processing the original document. Restoration preserves business meaning.",

  metric3Value = "98.1%",
  metric3Label = "Detection accuracy",
  metric3Desc = "Sensitive entity detection across structured and free-text fields, including custom markers.",

  metric4Value = "99.14%",
  metric4Label = "Workflow accuracy",
  metric4Desc = "End-to-end correctness — from raw input to restored output in production workflows.",
}: Props) {
  const bullets = [
    { value: metric1Value, label: metric1Label, desc: metric1Desc },
    { value: metric2Value, label: metric2Label, desc: metric2Desc },
    { value: metric3Value, label: metric3Label, desc: metric3Desc },
    { value: metric4Value, label: metric4Label, desc: metric4Desc },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* Section Header */
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

        .s4-header-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 16px;
        }

        .s4-header-desc {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Content grid */
        .s4-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
          align-items: start;
        }

        /* Big metric block */
        .s4-bigblock {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-lg, 16px);
          padding: 36px;
        }

        .s4-bigblock__num {
          font-size: 64px;
          font-weight: 800;
          color: var(--c-bg, #ffffff);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .s4-bigblock__label {
          font-size: 14px;
          color: #c8c4f7;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--c-bg-dark-2, #1b1d4a);
        }

        .s4-bigblock__narrative {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.6;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-bigblock__narrative strong {
          color: var(--c-bg, #ffffff);
        }

        /* Metric bullets */
        .s4-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .s4-bullet {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 18px 22px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 16px;
          align-items: center;
        }

        .s4-bullet__value {
          font-size: 28px;
          font-weight: 800;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          min-width: 80px;
        }

        .s4-bullet__body {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-bullet__label {
          color: var(--c-ink, #0f1130);
          display: block;
          margin-bottom: 2px;
          font-size: 14px;
          font-weight: 700;
        }

        @container (max-width: 750px) {
          .s4-grid {
            grid-template-columns: 1fr;
          }
          .s4-bigblock__num {
            font-size: 48px;
          }
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section">
          <div className="s4-container">

            <div className="s4-header">
              <span className="s4-eyebrow">{eyebrow}</span>
              <h2 className="s4-header-title">{sectionTitle}</h2>
              <p className="s4-header-desc">{sectionDesc}</p>
            </div>

            <div className="s4-grid">
              <div className="s4-bigblock">
                <div className="s4-bigblock__num">{bigValue}</div>
                <div className="s4-bigblock__label">{bigLabel}</div>
                <p className="s4-bigblock__narrative">
                  {bigNarrativePrefix}
                  <strong>{bigNarrativeBold}</strong>
                  {bigNarrativeSuffix}
                </p>
              </div>

              <div className="s4-bullets">
                {bullets.map((b, i) => (
                  <div key={i} className="s4-bullet">
                    <div className="s4-bullet__value">{b.value}</div>
                    <div className="s4-bullet__body">
                      <strong className="s4-bullet__label">{b.label}</strong>
                      {b.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_MetricsNarrative, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Performance — measured on real enterprise documents",
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "The numbers behind the demo",
  },
  sectionDesc: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "2,200-character document benchmark. Tested across finance, healthcare, legal, and public sector workflows.",
    displayTextArea: true,
  },

  bigValue: {
    type: ControlType.String,
    title: "Big Metric Value",
    defaultValue: "0.12s",
  },
  bigLabel: {
    type: ControlType.String,
    title: "Big Metric Label",
    defaultValue: "Per-page processing latency",
  },
  bigNarrativePrefix: {
    type: ControlType.String,
    title: "Narrative (before bold)",
    defaultValue: "That's ",
  },
  bigNarrativeBold: {
    type: ControlType.String,
    title: "Narrative Bold",
    defaultValue: "120 milliseconds",
  },
  bigNarrativeSuffix: {
    type: ControlType.String,
    title: "Narrative (after bold)",
    defaultValue: " from raw document to encapsulated capsule — fast enough to plug into real-time NOC alerting, claims intake, and clinical workflows without breaking SLA. Most enterprise AI pilots stall on latency. We don't.",
    displayTextArea: true,
  },

  metric1Value: {
    type: ControlType.String,
    title: "Metric 1 — Value",
    defaultValue: "100%",
  },
  metric1Label: {
    type: ControlType.String,
    title: "Metric 1 — Label",
    defaultValue: "Restoration rate",
  },
  metric1Desc: {
    type: ControlType.String,
    title: "Metric 1 — Description",
    defaultValue: "Every encapsulation has a reversible local mapping. No ambiguity, no manual reconstruction.",
    displayTextArea: true,
  },

  metric2Value: {
    type: ControlType.String,
    title: "Metric 2 — Value",
    defaultValue: "98%",
  },
  metric2Label: {
    type: ControlType.String,
    title: "Metric 2 — Label",
    defaultValue: "Output similarity",
  },
  metric2Desc: {
    type: ControlType.String,
    title: "Metric 2 — Description",
    defaultValue: "Compared to AI processing the original document. Restoration preserves business meaning.",
    displayTextArea: true,
  },

  metric3Value: {
    type: ControlType.String,
    title: "Metric 3 — Value",
    defaultValue: "98.1%",
  },
  metric3Label: {
    type: ControlType.String,
    title: "Metric 3 — Label",
    defaultValue: "Detection accuracy",
  },
  metric3Desc: {
    type: ControlType.String,
    title: "Metric 3 — Description",
    defaultValue: "Sensitive entity detection across structured and free-text fields, including custom markers.",
    displayTextArea: true,
  },

  metric4Value: {
    type: ControlType.String,
    title: "Metric 4 — Value",
    defaultValue: "99.14%",
  },
  metric4Label: {
    type: ControlType.String,
    title: "Metric 4 — Label",
    defaultValue: "Workflow accuracy",
  },
  metric4Desc: {
    type: ControlType.String,
    title: "Metric 4 — Description",
    defaultValue: "End-to-end correctness — from raw input to restored output in production workflows.",
    displayTextArea: true,
  },
})
