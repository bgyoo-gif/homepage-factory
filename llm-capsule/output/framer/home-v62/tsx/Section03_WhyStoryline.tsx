import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  description?: string
  step1Num?: string
  step1Title?: string
  step1Body?: string
  bridge1?: string
  step2Num?: string
  step2Title?: string
  step2Body?: string
  bridge2?: string
  step3Num?: string
  step3Title?: string
  step3Body?: string
  bridge3?: string
  step4Num?: string
  step4Title?: string
  step4Body?: string
  resultBadge?: string
  resultTitle?: string
  resultDetail?: string
}

export default function Section03_WhyStoryline({
  eyebrow = "WHY AN AI ENABLEMENT DATA LAYER",
  heading = "The data AI needs is the data your business can't ",
  headingHighlight = "expose",
  description = "Not four separate problems. One storyline — read it through.",
  step1Num = "01",
  step1Title = "External LLMs raise enterprise ROI.",
  step1Body = "Approved external LLMs measurably improve productivity, processing speed, and automation ROI — when they can actually reach the work. Every regulated enterprise wants in.",
  bridge1 = "BUT —",
  step2Num = "02",
  step2Title = "PII guardrails alone aren't enough.",
  step2Body = "They detect names, IDs, financial fields. They were built for individual identifiers — not for the structured ticket data, network configs, OT manifests, clinical workflows, and mission context that real regulated workflows actually run on. Operational data slips right through.",
  bridge2 = "AND —",
  step3Num = "03",
  step3Title = "DMZ and legacy operational data is complex and unstructured.",
  step3Body = "Mixed free text, network identifiers, system logs, user context, incident records, configurations. Sensitivity leaks through structure, sequence, and aggregate pattern — not just through field names. Field-level filtering doesn't see it.",
  bridge3 = "AND THE RESIDUAL RISK —",
  step4Num = "04",
  step4Title = "Filtering alone leaves regulated risk standing.",
  step4Body = "GDPR, HIPAA, SOX, sector regulators, audit obligations, sovereignty constraints — the risk of differential analysis, re-identification, and inference exposure that simple filtering cannot close. Pilots stall. Shadow AI emerges. Production never ships.",
  resultBadge = "→ Result",
  resultTitle = "LLM Capsule turns blocked workflows into running AI workflows.",
  resultDetail = "Structure-preserving capsule + differential-privacy-based protection + in-environment execution alongside existing legacy systems + restoration into the originating workflow + two execution paths (external approved LLM or on-prem local) + customer-defined markers that change with your business. The AI enablement data layer for regulated operations.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s3-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s3-header {
          text-align: center;
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

        .s3-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .s3-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s3-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s3-flow {
          max-width: 980px;
          margin: 0 auto;
        }

        .s3-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: clamp(28px, 4cqi, 48px);
          margin-bottom: 24px;
          box-shadow: 0 4px 16px rgba(15,17,48,0.04);
        }

        .s3-row {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 20px;
          align-items: start;
        }

        .s3-step {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          background-color: var(--c-coral-dark, #c73e3a);
          border-radius: 999px;
          height: 32px;
          width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .s3-text {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink, #0f1130);
          line-height: 1.7;
          padding-top: 4px;
        }

        .s3-text strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
          font-size: 1.05em;
        }

        .s3-bridge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--c-coral-dark, #c73e3a);
          margin: 14px 0 14px 16px;
          padding-left: 24px;
          border-left: 2px dashed var(--c-coral, #ef5350);
          letter-spacing: 0.1em;
          font-weight: 700;
          height: 28px;
          display: flex;
          align-items: center;
        }

        .s3-result {
          background-color: var(--c-primary-dark, #3b2fbf);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          padding: 32px 36px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 28px;
          align-items: center;
        }

        @container (max-width: 600px) {
          .s3-result {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .s3-result__badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #c8c4f7;
          padding: 6px 14px;
          border: 1px solid #6358e8;
          border-radius: 999px;
          text-transform: uppercase;
          align-self: start;
          white-space: nowrap;
        }

        .s3-result__title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--c-bg, #ffffff);
          line-height: 1.3;
        }

        .s3-result__detail {
          font-size: 14px;
          color: #d8d3f5;
          line-height: 1.6;
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section">
          <div className="s3-container">
            <header className="s3-header">
              <span className="s3-eyebrow">{eyebrow}</span>
              <h2 className="s3-h2">
                {heading}<span>{headingHighlight}</span>.
              </h2>
              <p className="s3-desc">{description}</p>
            </header>

            <div className="s3-flow">
              <div className="s3-card">
                <div className="s3-row">
                  <span className="s3-step">{step1Num}</span>
                  <p className="s3-text">
                    <strong>{step1Title}</strong>
                    {step1Body}
                  </p>
                </div>

                <div className="s3-bridge">{bridge1}</div>

                <div className="s3-row">
                  <span className="s3-step">{step2Num}</span>
                  <p className="s3-text">
                    <strong>{step2Title}</strong>
                    {step2Body}
                  </p>
                </div>

                <div className="s3-bridge">{bridge2}</div>

                <div className="s3-row">
                  <span className="s3-step">{step3Num}</span>
                  <p className="s3-text">
                    <strong>{step3Title}</strong>
                    {step3Body}
                  </p>
                </div>

                <div className="s3-bridge">{bridge3}</div>

                <div className="s3-row">
                  <span className="s3-step">{step4Num}</span>
                  <p className="s3-text">
                    <strong>{step4Title}</strong>
                    {step4Body}
                  </p>
                </div>
              </div>

              <div className="s3-result">
                <div className="s3-result__badge">{resultBadge}</div>
                <div>
                  <h3 className="s3-result__title">{resultTitle}</h3>
                  <p className="s3-result__detail">{resultDetail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_WhyStoryline, {
  eyebrow:         { type: ControlType.String, title: "Eyebrow",          defaultValue: "WHY AN AI ENABLEMENT DATA LAYER" },
  heading:         { type: ControlType.String, title: "H2 Text",          defaultValue: "The data AI needs is the data your business can't " },
  headingHighlight:{ type: ControlType.String, title: "H2 Highlight",     defaultValue: "expose" },
  description:     { type: ControlType.String, title: "Description",      defaultValue: "Not four separate problems. One storyline — read it through." },
  step1Num:        { type: ControlType.String, title: "Step 1 Num",       defaultValue: "01" },
  step1Title:      { type: ControlType.String, title: "Step 1 Title",     defaultValue: "External LLMs raise enterprise ROI." },
  step1Body:       { type: ControlType.String, title: "Step 1 Body",      defaultValue: "Approved external LLMs measurably improve productivity, processing speed, and automation ROI — when they can actually reach the work. Every regulated enterprise wants in.", multiLine: true },
  bridge1:         { type: ControlType.String, title: "Bridge 1",         defaultValue: "BUT —" },
  step2Num:        { type: ControlType.String, title: "Step 2 Num",       defaultValue: "02" },
  step2Title:      { type: ControlType.String, title: "Step 2 Title",     defaultValue: "PII guardrails alone aren't enough." },
  step2Body:       { type: ControlType.String, title: "Step 2 Body",      defaultValue: "They detect names, IDs, financial fields. They were built for individual identifiers — not for the structured ticket data, network configs, OT manifests, clinical workflows, and mission context that real regulated workflows actually run on. Operational data slips right through.", multiLine: true },
  bridge2:         { type: ControlType.String, title: "Bridge 2",         defaultValue: "AND —" },
  step3Num:        { type: ControlType.String, title: "Step 3 Num",       defaultValue: "03" },
  step3Title:      { type: ControlType.String, title: "Step 3 Title",     defaultValue: "DMZ and legacy operational data is complex and unstructured." },
  step3Body:       { type: ControlType.String, title: "Step 3 Body",      defaultValue: "Mixed free text, network identifiers, system logs, user context, incident records, configurations. Sensitivity leaks through structure, sequence, and aggregate pattern — not just through field names. Field-level filtering doesn't see it.", multiLine: true },
  bridge3:         { type: ControlType.String, title: "Bridge 3",         defaultValue: "AND THE RESIDUAL RISK —" },
  step4Num:        { type: ControlType.String, title: "Step 4 Num",       defaultValue: "04" },
  step4Title:      { type: ControlType.String, title: "Step 4 Title",     defaultValue: "Filtering alone leaves regulated risk standing." },
  step4Body:       { type: ControlType.String, title: "Step 4 Body",      defaultValue: "GDPR, HIPAA, SOX, sector regulators, audit obligations, sovereignty constraints — the risk of differential analysis, re-identification, and inference exposure that simple filtering cannot close. Pilots stall. Shadow AI emerges. Production never ships.", multiLine: true },
  resultBadge:     { type: ControlType.String, title: "Result Badge",     defaultValue: "→ Result" },
  resultTitle:     { type: ControlType.String, title: "Result Title",     defaultValue: "LLM Capsule turns blocked workflows into running AI workflows." },
  resultDetail:    { type: ControlType.String, title: "Result Detail",    defaultValue: "Structure-preserving capsule + differential-privacy-based protection + in-environment execution alongside existing legacy systems + restoration into the originating workflow + two execution paths (external approved LLM or on-prem local) + customer-defined markers that change with your business. The AI enablement data layer for regulated operations.", multiLine: true },
})
