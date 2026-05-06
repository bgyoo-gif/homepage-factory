import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  p1Num?: string; p1Title?: string; p1Desc?: string
  p2Num?: string; p2Title?: string; p2Desc?: string
  p3Num?: string; p3Title?: string; p3Desc?: string
  p4Num?: string; p4Title?: string; p4Desc?: string
  p5Num?: string; p5Title?: string; p5Desc?: string
  p6Num?: string; p6Title?: string; p6Desc?: string
  footnote?: string
}

export default function Section04_Pillars({
  eyebrow = "Six architectural pillars",
  title = "What this architecture protects against — and how",
  description = "The pillars below are the technical commitments encoded into the four-zone architecture above. Each maps to a specific failure mode of conventional approaches.",
  p1Num = "Pillar 01",
  p1Title = "Beyond simple PII guardrails",
  p1Desc = "Even inside the same enterprise, free-text fields like a CS ticket Details column mix customer names, contact information, and claim narrative in unstructured form. Simple PII guardrails cannot safely process this. Detection in Capsule operates on free-text and structured fields together — semantic and context-aware, not pattern-matching alone.",
  p2Num = "Pillar 02",
  p2Title = "No modification of existing systems",
  p2Desc = "Existing enterprise systems are not refactored. Connection is a single API-call addition (REST / gRPC) — the operations team continues using their existing tools, the Capsule layer handles encapsulation and restoration alongside.",
  p3Num = "Pillar 03",
  p3Title = "Beyond simple encapsulation — differential privacy",
  p3Desc = "The Enhanced Encapsulation Layer goes beyond simple tokenization. Differential privacy (epsilon-DP, Laplace noise, k-anonymity, NER masking) is applied to minimize re-identification risk on the capsule itself, providing stronger protection than tokenization alone.",
  p4Num = "Pillar 04",
  p4Title = "No raw exposure to external AI",
  p4Desc = "External AI services see only the capsule. Original operational data does not cross the trust boundary. Tokenization combined with DP processing means a leak from the external AI side does not yield reconstructable original values.",
  p5Num = "Pillar 05",
  p5Title = "In-environment auto-restoration",
  p5Desc = "AI response tokens are automatically restored to their original values inside the organization only. Data that left the trust boundary cannot be reconstructed externally — only the in-house token vault can perform restoration.",
  p6Num = "Pillar 06",
  p6Title = "Governance, policy & domain context retained",
  p6Desc = "Organizational policy, permissions, and domain context drive the entire AI processing path — what gets encapsulated, where it is routed (Path A external or Path B on-prem), and how restoration is audited. Governance stays inside the organization end-to-end.",
  footnote = "These pillars are derived from the diagram_v8 architecture reference. Each pillar maps to a specific failure mode of conventional approaches — masking and redaction, prompt security gateways, and synthetic data platforms — that the four-zone architecture is designed to address.",
}: Props) {
  const pillars = [
    { num: p1Num, title: p1Title, desc: p1Desc },
    { num: p2Num, title: p2Title, desc: p2Desc },
    { num: p3Num, title: p3Title, desc: p3Desc },
    { num: p4Num, title: p4Title, desc: p4Desc },
    { num: p5Num, title: p5Title, desc: p5Desc },
    { num: p6Num, title: p6Title, desc: p6Desc },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s4-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s4-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg, #ffffff); }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s4-header { text-align: center; margin-bottom: 48px; }

        .s4-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s4-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s4-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s4-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .s4-pillar {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px 24px;
        }

        .s4-pillar__num {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 8px;
          text-transform: uppercase;
          display: block;
        }

        .s4-pillar__h {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .s4-pillar__d {
          font-size: 14px;
          line-height: 1.6;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .s4-note {
          margin-top: 32px;
          font-size: 14px;
          color: var(--c-muted, #6b7280);
          text-align: center;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        @container (min-width: 768px) {
          .s4-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s4-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section">
          <div className="s4-container">
            <header className="s4-header">
              <div className="s4-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s4-grid">
              {pillars.map((p, i) => (
                <article key={i} className="s4-pillar">
                  <span className="s4-pillar__num">{p.num}</span>
                  <h3 className="s4-pillar__h">{p.title}</h3>
                  <p className="s4-pillar__d">{p.desc}</p>
                </article>
              ))}
            </div>

            <p className="s4-note">{footnote}</p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_Pillars, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Six architectural pillars" },
  title: { type: ControlType.String, title: "Title", defaultValue: "What this architecture protects against — and how" },
  description: { type: ControlType.String, title: "Description", defaultValue: "The pillars below are the technical commitments encoded into the four-zone architecture above. Each maps to a specific failure mode of conventional approaches." },
  p1Num: { type: ControlType.String, title: "P1 Number", defaultValue: "Pillar 01" },
  p1Title: { type: ControlType.String, title: "P1 Title", defaultValue: "Beyond simple PII guardrails" },
  p1Desc: { type: ControlType.String, title: "P1 Desc", defaultValue: "Even inside the same enterprise, free-text fields like a CS ticket Details column mix customer names, contact information, and claim narrative in unstructured form. Simple PII guardrails cannot safely process this. Detection in Capsule operates on free-text and structured fields together — semantic and context-aware, not pattern-matching alone." },
  p2Num: { type: ControlType.String, title: "P2 Number", defaultValue: "Pillar 02" },
  p2Title: { type: ControlType.String, title: "P2 Title", defaultValue: "No modification of existing systems" },
  p2Desc: { type: ControlType.String, title: "P2 Desc", defaultValue: "Existing enterprise systems are not refactored. Connection is a single API-call addition (REST / gRPC) — the operations team continues using their existing tools, the Capsule layer handles encapsulation and restoration alongside." },
  p3Num: { type: ControlType.String, title: "P3 Number", defaultValue: "Pillar 03" },
  p3Title: { type: ControlType.String, title: "P3 Title", defaultValue: "Beyond simple encapsulation — differential privacy" },
  p3Desc: { type: ControlType.String, title: "P3 Desc", defaultValue: "The Enhanced Encapsulation Layer goes beyond simple tokenization. Differential privacy (epsilon-DP, Laplace noise, k-anonymity, NER masking) is applied to minimize re-identification risk on the capsule itself, providing stronger protection than tokenization alone." },
  p4Num: { type: ControlType.String, title: "P4 Number", defaultValue: "Pillar 04" },
  p4Title: { type: ControlType.String, title: "P4 Title", defaultValue: "No raw exposure to external AI" },
  p4Desc: { type: ControlType.String, title: "P4 Desc", defaultValue: "External AI services see only the capsule. Original operational data does not cross the trust boundary. Tokenization combined with DP processing means a leak from the external AI side does not yield reconstructable original values." },
  p5Num: { type: ControlType.String, title: "P5 Number", defaultValue: "Pillar 05" },
  p5Title: { type: ControlType.String, title: "P5 Title", defaultValue: "In-environment auto-restoration" },
  p5Desc: { type: ControlType.String, title: "P5 Desc", defaultValue: "AI response tokens are automatically restored to their original values inside the organization only. Data that left the trust boundary cannot be reconstructed externally — only the in-house token vault can perform restoration." },
  p6Num: { type: ControlType.String, title: "P6 Number", defaultValue: "Pillar 06" },
  p6Title: { type: ControlType.String, title: "P6 Title", defaultValue: "Governance, policy & domain context retained" },
  p6Desc: { type: ControlType.String, title: "P6 Desc", defaultValue: "Organizational policy, permissions, and domain context drive the entire AI processing path — what gets encapsulated, where it is routed (Path A external or Path B on-prem), and how restoration is audited. Governance stays inside the organization end-to-end." },
  footnote: { type: ControlType.String, title: "Footnote", defaultValue: "These pillars are derived from the diagram_v8 architecture reference. Each pillar maps to a specific failure mode of conventional approaches — masking and redaction, prompt security gateways, and synthetic data platforms — that the four-zone architecture is designed to address." },
})
