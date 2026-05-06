import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  sectionTitle?: string
  sectionDesc?: string
  introVisual?: string

  step1Number?: string
  step1Title?: string
  step1Desc?: string
  step1Sub?: string
  step1Chips?: string
  step1Image?: string

  step2Number?: string
  step2Title?: string
  step2Desc?: string
  step2Chips?: string
  step2Image?: string

  step3Number?: string
  step3Title?: string
  step3Desc?: string
  step3Chips?: string
  step3Image?: string

  step4Number?: string
  step4Title?: string
  step4Desc?: string
  step4Chips?: string
  step4Image?: string

  step5Number?: string
  step5Title?: string
  step5Desc?: string
  step5Chips?: string
  step5Image?: string
}

const DEFAULT_VISUAL = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png"

function parseChips(raw: string): string[] {
  return raw.split("|").map((s) => s.trim()).filter(Boolean)
}

export default function Section03_InteractiveTour({
  eyebrow = "Interactive product tour",
  sectionTitle = "Five steps. One real document. Real output.",
  sectionDesc = "The same capsule mechanism runs across telecom, healthcare, finance, defense, legal, and OT. Below: a contract review workflow. The raw document never leaves your environment.",
  introVisual = "",

  step1Number = "Step 01 — Point at the source",
  step1Title = "Reads the document where it already lives",
  step1Desc = "LLM Capsule runs inside your environment and reads documents from the systems already there — SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, internal NOC console, or your own portal. No data migration. No external pipe. No architectural change.",
  step1Sub = "Existing systems invoke Capsule from inside the environment via REST / gRPC / JDBC / Graph API / on-prem API / embedded SDK / Slack App.",
  step1Chips = "In-environment | No data egress | Existing sources",
  step1Image = "",

  step2Number = "Step 02 — Define policy",
  step2Title = "Pick the markers your business cares about",
  step2Desc = "Pick from the starter pack — project codes, contract refs, network IDs, mission refs, financial terms, vulnerability labels — or write your own. Markers can be added, removed, and time-shifted tomorrow without redeploying. Every policy version is logged.",
  step2Chips = "11 starter markers | Custom regex | Policy versions | RBAC scope",
  step2Image = "",

  step3Number = "Step 03 — Encapsulate",
  step3Title = "Sensitive elements replaced. Structure preserved.",
  step3Desc = "Inside the DMZ — Demilitarized Zone (Zone 2 of the four-zone architecture), sensitive elements are replaced with structure-preserving placeholders by the Enhanced Encapsulation Layer. Differential-privacy-based protection (epsilon-DP, Laplace noise, k-anonymity, NER masking) reduces re-identification risk. Tables, cross-references, and document hierarchy survive intact. See the four-zone architecture →",
  step3Chips = "epsilon-DP | Laplace noise | NER masking | Structure preserved",
  step3Image = "",

  step4Number = "Step 04 — Process",
  step4Title = "Any LLM. Path A or Path B.",
  step4Desc = "The capsule (only the capsule — never the original) is routed through your approved external LLM (ChatGPT, Claude, Gemini, Perplexity) or to an on-prem local lightweight model for air-gapped workflows. Path is policy-driven per workflow.",
  step4Chips = "Path A · External | Path B · On-prem | Policy-routed",
  step4Image = "",

  step5Number = "Step 05 — Restore",
  step5Title = "AI output comes back business-ready",
  step5Desc = "The AI's response is auto-restored locally — token map lookup, original value substitution, context re-binding, output validation. Real names, real figures, real references appear in the original ticket. Token map never leaves the enterprise. End user sees a finished, production-ready output.",
  step5Chips = "Local restore | Context re-binding | Output validation | Audit logged",
  step5Image = "",
}: Props) {
  const resolvedIntroVisual = introVisual || DEFAULT_VISUAL

  const steps = [
    {
      number: step1Number,
      title: step1Title,
      desc: step1Desc,
      sub: step1Sub,
      chips: parseChips(step1Chips),
      image: step1Image || DEFAULT_VISUAL,
    },
    {
      number: step2Number,
      title: step2Title,
      desc: step2Desc,
      sub: undefined,
      chips: parseChips(step2Chips),
      image: step2Image || DEFAULT_VISUAL,
    },
    {
      number: step3Number,
      title: step3Title,
      desc: step3Desc,
      sub: undefined,
      chips: parseChips(step3Chips),
      image: step3Image || DEFAULT_VISUAL,
    },
    {
      number: step4Number,
      title: step4Title,
      desc: step4Desc,
      sub: undefined,
      chips: parseChips(step4Chips),
      image: step4Image || DEFAULT_VISUAL,
    },
    {
      number: step5Number,
      title: step5Title,
      desc: step5Desc,
      sub: undefined,
      chips: parseChips(step5Chips),
      image: step5Image || DEFAULT_VISUAL,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s3-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* Intro */
        .s3-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          margin-bottom: 48px;
        }

        .s3-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s3-intro-title {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 12px;
        }

        .s3-intro-desc {
          font-size: 15px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-intro-visual {
          border-radius: var(--r-md, 10px);
          border: 1px solid var(--c-rule, #e5e7eb);
          aspect-ratio: 4 / 3;
          overflow: hidden;
          width: 100%;
          object-fit: cover;
          display: block;
          background-color: var(--c-bg, #ffffff);
        }

        /* Steps */
        .s3-steps {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .s3-step {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
        }

        /* 모든 step: text 좌측, screenshot 우측 (교차 레이아웃 제거) */

        .s3-step__text {
          padding: 36px;
        }

        .s3-step__num {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .s3-step__h {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 12px;
        }

        .s3-step__d {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          margin: 0 0 14px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-step__sub {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          line-height: 1.55;
          margin-top: 8px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }

        .s3-chip {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          padding: 4px 10px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border-radius: 4px;
          color: var(--c-ink-soft, #3a3d5e);
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s3-step__visual {
          background-color: var(--c-bg-soft, #f7f8fb);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          min-height: 280px;
          overflow: hidden;
        }

        .s3-step__screenshot {
          width: 100%;
          max-width: 480px;
          border-radius: 8px;
          border: 1px solid var(--c-rule, #e5e7eb);
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
          background-color: var(--c-bg, #ffffff);
        }

        @container (max-width: 800px) {
          .s3-intro {
            grid-template-columns: 1fr;
          }
        }

        @container (max-width: 700px) {
          .s3-step {
            grid-template-columns: 1fr;
          }
          .s3-step__text {
            padding: 24px;
          }
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section">
          <div className="s3-container">

            <div className="s3-intro">
              <div>
                <span className="s3-eyebrow">{eyebrow}</span>
                <h2 className="s3-intro-title">{sectionTitle}</h2>
                <p className="s3-intro-desc">{sectionDesc}</p>
              </div>
              <img
                className="s3-intro-visual"
                src={resolvedIntroVisual}
                alt=""
                role="presentation"
              />
            </div>

            <div className="s3-steps">
              {steps.map((step, i) => {
                const isEven = (i + 1) % 2 === 0
                return (
                  <article
                    key={i}
                    className="s3-step"
                  >
                    <div className="s3-step__text">
                      <div className="s3-step__num">{step.number}</div>
                      <h3 className="s3-step__h">{step.title}</h3>
                      <p className="s3-step__d">{step.desc}</p>
                      {step.sub && (
                        <p className="s3-step__sub">{step.sub}</p>
                      )}
                      {step.chips.length > 0 && (
                        <div className="s3-chips">
                          {step.chips.map((chip, ci) => (
                            <span key={ci} className="s3-chip">{chip}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="s3-step__visual">
                      <img
                        className="s3-step__screenshot"
                        src={step.image}
                        alt={step.title}
                      />
                    </div>
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

addPropertyControls(Section03_InteractiveTour, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Interactive product tour",
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Five steps. One real document. Real output.",
  },
  sectionDesc: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "The same capsule mechanism runs across telecom, healthcare, finance, defense, legal, and OT. Below: a contract review workflow. The raw document never leaves your environment.",
    displayTextArea: true,
  },
  introVisual: {
    type: ControlType.Image,
    title: "Intro Visual",
  },

  step1Number: {
    type: ControlType.String,
    title: "Step 1 — Number",
    defaultValue: "Step 01 — Point at the source",
  },
  step1Title: {
    type: ControlType.String,
    title: "Step 1 — Title",
    defaultValue: "Reads the document where it already lives",
  },
  step1Desc: {
    type: ControlType.String,
    title: "Step 1 — Description",
    defaultValue: "LLM Capsule runs inside your environment and reads documents from the systems already there — SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, internal NOC console, or your own portal. No data migration. No external pipe. No architectural change.",
    displayTextArea: true,
  },
  step1Sub: {
    type: ControlType.String,
    title: "Step 1 — Sub note",
    defaultValue: "Existing systems invoke Capsule from inside the environment via REST / gRPC / JDBC / Graph API / on-prem API / embedded SDK / Slack App.",
    displayTextArea: true,
  },
  step1Chips: {
    type: ControlType.String,
    title: "Step 1 — Chips (| separated)",
    defaultValue: "In-environment | No data egress | Existing sources",
  },
  step1Image: {
    type: ControlType.Image,
    title: "Step 1 — Screenshot",
  },

  step2Number: {
    type: ControlType.String,
    title: "Step 2 — Number",
    defaultValue: "Step 02 — Define policy",
  },
  step2Title: {
    type: ControlType.String,
    title: "Step 2 — Title",
    defaultValue: "Pick the markers your business cares about",
  },
  step2Desc: {
    type: ControlType.String,
    title: "Step 2 — Description",
    defaultValue: "Pick from the starter pack — project codes, contract refs, network IDs, mission refs, financial terms, vulnerability labels — or write your own. Markers can be added, removed, and time-shifted tomorrow without redeploying. Every policy version is logged.",
    displayTextArea: true,
  },
  step2Chips: {
    type: ControlType.String,
    title: "Step 2 — Chips (| separated)",
    defaultValue: "11 starter markers | Custom regex | Policy versions | RBAC scope",
  },
  step2Image: {
    type: ControlType.Image,
    title: "Step 2 — Screenshot",
  },

  step3Number: {
    type: ControlType.String,
    title: "Step 3 — Number",
    defaultValue: "Step 03 — Encapsulate",
  },
  step3Title: {
    type: ControlType.String,
    title: "Step 3 — Title",
    defaultValue: "Sensitive elements replaced. Structure preserved.",
  },
  step3Desc: {
    type: ControlType.String,
    title: "Step 3 — Description",
    defaultValue: "Inside the DMZ — Demilitarized Zone (Zone 2 of the four-zone architecture), sensitive elements are replaced with structure-preserving placeholders by the Enhanced Encapsulation Layer. Differential-privacy-based protection (epsilon-DP, Laplace noise, k-anonymity, NER masking) reduces re-identification risk. Tables, cross-references, and document hierarchy survive intact. See the four-zone architecture →",
    displayTextArea: true,
  },
  step3Chips: {
    type: ControlType.String,
    title: "Step 3 — Chips (| separated)",
    defaultValue: "epsilon-DP | Laplace noise | NER masking | Structure preserved",
  },
  step3Image: {
    type: ControlType.Image,
    title: "Step 3 — Screenshot",
  },

  step4Number: {
    type: ControlType.String,
    title: "Step 4 — Number",
    defaultValue: "Step 04 — Process",
  },
  step4Title: {
    type: ControlType.String,
    title: "Step 4 — Title",
    defaultValue: "Any LLM. Path A or Path B.",
  },
  step4Desc: {
    type: ControlType.String,
    title: "Step 4 — Description",
    defaultValue: "The capsule (only the capsule — never the original) is routed through your approved external LLM (ChatGPT, Claude, Gemini, Perplexity) or to an on-prem local lightweight model for air-gapped workflows. Path is policy-driven per workflow.",
    displayTextArea: true,
  },
  step4Chips: {
    type: ControlType.String,
    title: "Step 4 — Chips (| separated)",
    defaultValue: "Path A · External | Path B · On-prem | Policy-routed",
  },
  step4Image: {
    type: ControlType.Image,
    title: "Step 4 — Screenshot",
  },

  step5Number: {
    type: ControlType.String,
    title: "Step 5 — Number",
    defaultValue: "Step 05 — Restore",
  },
  step5Title: {
    type: ControlType.String,
    title: "Step 5 — Title",
    defaultValue: "AI output comes back business-ready",
  },
  step5Desc: {
    type: ControlType.String,
    title: "Step 5 — Description",
    defaultValue: "The AI's response is auto-restored locally — token map lookup, original value substitution, context re-binding, output validation. Real names, real figures, real references appear in the original ticket. Token map never leaves the enterprise. End user sees a finished, production-ready output.",
    displayTextArea: true,
  },
  step5Chips: {
    type: ControlType.String,
    title: "Step 5 — Chips (| separated)",
    defaultValue: "Local restore | Context re-binding | Output validation | Audit logged",
  },
  step5Image: {
    type: ControlType.Image,
    title: "Step 5 — Screenshot",
  },
})
