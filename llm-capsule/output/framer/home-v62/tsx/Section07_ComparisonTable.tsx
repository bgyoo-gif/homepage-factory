import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  sectionDesc?: string
  col1Header?: string
  col2Header?: string
  col3Header?: string
  col4Header?: string
  row1Col1?: string
  row1Col2?: string
  row1Col3?: string
  row1Col4?: string
  row2Col1?: string
  row2Col2?: string
  row2Col3?: string
  row2Col4?: string
  row3Col1?: string
  row3Col2?: string
  row3Col3?: string
  row3Col4?: string
  row4Col1?: string
  row4Col2?: string
  row4Col3?: string
  row4Col4?: string
}

export default function Section07_ComparisonTable({
  eyebrow = "WHERE IT SITS",
  heading = "Not masking. Not a prompt gateway. Not ",
  headingHighlight = "synthetic data",
  sectionDesc = "An AI enablement data layer for regulated workflows.",
  col1Header = "Approach",
  col2Header = "Method",
  col3Header = "Limitation",
  col4Header = "vs LLM Capsule",
  row1Col1 = "PII Guardrails & AI Security Suites",
  row1Col2 = "API-level protection and policy enforcement",
  row1Col3 = "Optimized for risk control, not workflow restoration",
  row1Col4 = "Capsule preserves operational structure, runs inside existing systems, and restores business-ready output",
  row2Col1 = "Masking & Redaction",
  row2Col2 = "Permanently removes data",
  row2Col3 = "Destroys the context AI needs to produce useful output",
  row2Col4 = "Capsule encapsulates locally and restores tokens to original values inside your environment",
  row3Col1 = "Synthetic Data Platforms",
  row3Col2 = "Artificial data generation",
  row3Col3 = "Training / testing only — not live operational workflows",
  row3Col4 = "Capsule runs on real documents in production workflows",
  row4Col1 = "Security Team Blocks AI",
  row4Col2 = "Manual approval gate",
  row4Col3 = "Blocks AI projects — pilot never reaches production",
  row4Col4 = "Capsule enables AI under existing enterprise governance",
}: Props) {
  const rows = [
    [row1Col1, row1Col2, row1Col3, row1Col4],
    [row2Col1, row2Col2, row2Col3, row2Col4],
    [row3Col1, row3Col2, row3Col3, row3Col4],
    [row4Col1, row4Col2, row4Col3, row4Col4],
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s7-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s7-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s7-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s7-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s7-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s7-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .s7-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s7-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s7-table-wrap {
          overflow-x: auto;
          scrollbar-width: none;
        }

        .s7-table-wrap::-webkit-scrollbar { display: none; }

        .s7-table {
          width: 100%;
          border-collapse: collapse;
          background-color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          overflow: hidden;
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s7-table th,
        .s7-table td {
          padding: 14px 16px;
          text-align: left;
          font-size: 13px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          vertical-align: top;
        }

        .s7-table th {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          font-weight: 600;
          font-size: 12px;
        }

        .s7-table th.s7-th-us {
          background-color: var(--c-primary-dark, #3b2fbf);
        }

        .s7-table td:first-child {
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          width: 22%;
          background-color: var(--c-bg-soft, #f7f8fb);
          font-size: 12px;
        }

        .s7-td-us {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-ink, #0f1130);
          font-weight: 500;
        }
      `}</style>

      <div className="s7-root">
        <section className="s7-section">
          <div className="s7-container">
            <header className="s7-header">
              <span className="s7-eyebrow">{eyebrow}</span>
              <h2 className="s7-h2">
                {heading}<span>{headingHighlight}</span>.
              </h2>
              <p className="s7-desc">{sectionDesc}</p>
            </header>

            <div className="s7-table-wrap">
              <table className="s7-table">
                <thead>
                  <tr>
                    <th>{col1Header}</th>
                    <th>{col2Header}</th>
                    <th>{col3Header}</th>
                    <th className="s7-th-us">{col4Header}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td className="s7-td-us">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_ComparisonTable, {
  eyebrow:          { type: ControlType.String, title: "Eyebrow",        defaultValue: "WHERE IT SITS" },
  heading:          { type: ControlType.String, title: "H2 Text",        defaultValue: "Not masking. Not a prompt gateway. Not " },
  headingHighlight: { type: ControlType.String, title: "H2 Highlight",   defaultValue: "synthetic data" },
  sectionDesc:      { type: ControlType.String, title: "Description",    defaultValue: "An AI enablement data layer for regulated workflows." },
  col1Header:       { type: ControlType.String, title: "Col 1 Header",   defaultValue: "Approach" },
  col2Header:       { type: ControlType.String, title: "Col 2 Header",   defaultValue: "Method" },
  col3Header:       { type: ControlType.String, title: "Col 3 Header",   defaultValue: "Limitation" },
  col4Header:       { type: ControlType.String, title: "Col 4 Header",   defaultValue: "vs LLM Capsule" },
  row1Col1:         { type: ControlType.String, title: "Row 1 Col 1",    defaultValue: "PII Guardrails & AI Security Suites" },
  row1Col2:         { type: ControlType.String, title: "Row 1 Col 2",    defaultValue: "API-level protection and policy enforcement" },
  row1Col3:         { type: ControlType.String, title: "Row 1 Col 3",    defaultValue: "Optimized for risk control, not workflow restoration" },
  row1Col4:         { type: ControlType.String, title: "Row 1 Col 4",    defaultValue: "Capsule preserves operational structure, runs inside existing systems, and restores business-ready output", multiLine: true },
  row2Col1:         { type: ControlType.String, title: "Row 2 Col 1",    defaultValue: "Masking & Redaction" },
  row2Col2:         { type: ControlType.String, title: "Row 2 Col 2",    defaultValue: "Permanently removes data" },
  row2Col3:         { type: ControlType.String, title: "Row 2 Col 3",    defaultValue: "Destroys the context AI needs to produce useful output" },
  row2Col4:         { type: ControlType.String, title: "Row 2 Col 4",    defaultValue: "Capsule encapsulates locally and restores tokens to original values inside your environment" },
  row3Col1:         { type: ControlType.String, title: "Row 3 Col 1",    defaultValue: "Synthetic Data Platforms" },
  row3Col2:         { type: ControlType.String, title: "Row 3 Col 2",    defaultValue: "Artificial data generation" },
  row3Col3:         { type: ControlType.String, title: "Row 3 Col 3",    defaultValue: "Training / testing only — not live operational workflows" },
  row3Col4:         { type: ControlType.String, title: "Row 3 Col 4",    defaultValue: "Capsule runs on real documents in production workflows" },
  row4Col1:         { type: ControlType.String, title: "Row 4 Col 1",    defaultValue: "Security Team Blocks AI" },
  row4Col2:         { type: ControlType.String, title: "Row 4 Col 2",    defaultValue: "Manual approval gate" },
  row4Col3:         { type: ControlType.String, title: "Row 4 Col 3",    defaultValue: "Blocks AI projects — pilot never reaches production" },
  row4Col4:         { type: ControlType.String, title: "Row 4 Col 4",    defaultValue: "Capsule enables AI under existing enterprise governance" },
})
