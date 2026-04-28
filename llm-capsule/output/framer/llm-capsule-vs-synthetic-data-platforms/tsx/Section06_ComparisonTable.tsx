import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
  neutral025: "#f7f7f7",
  success: "#0e824c",
  error:   "#ff3030",
  brandTint: "rgba(24, 33, 232, 0.04)",
  brandTintMd: "rgba(24, 33, 232, 0.08)",
}

interface Props {
  sectionLabel?: string
  col1Header?: string
  col2Header?: string
  col3Header?: string
  row1Col1?: string; row1Col2?: string; row1Col3?: string
  row2Col1?: string; row2Col2?: string; row2Col3?: string
  row3Col1?: string; row3Col2?: string; row3Col3?: string
  row4Col1?: string; row4Col2?: string; row4Col3?: string
  row5Col1?: string; row5Col2?: string; row5Col3?: string
  row6Col1?: string; row6Col2?: string; row6Col3?: string
}

export default function Section06_ComparisonTable({
  sectionLabel = "Comparison",
  col1Header = "Capability",
  col2Header = "Synthetic Data Platforms",
  col3Header = "LLM Capsule",
  row1Col1 = "Input data", row1Col2 = "Artificially generated", row1Col3 = "Real enterprise documents",
  row2Col1 = "Document support", row2Col2 = "Tabular data only", row2Col3 = "All document types",
  row3Col1 = "Content specificity", row3Col2 = "Statistical patterns only", row3Col3 = "Actual enterprise content",
  row4Col1 = "Output usability", row4Col2 = "Synthetic context", row4Col3 = "Real enterprise context",
  row5Col1 = "Output restoration", row5Col2 = "✗", row5Col3 = "✓ Local restoration",
  row6Col1 = "Use case", row6Col2 = "Model training, testing", row6Col3 = "Production AI workflows",
}: Props) {
  const rows = [
    { capability: row1Col1, synthetic: row1Col2, capsule: row1Col3 },
    { capability: row2Col1, synthetic: row2Col2, capsule: row2Col3 },
    { capability: row3Col1, synthetic: row3Col2, capsule: row3Col3 },
    { capability: row4Col1, synthetic: row4Col2, capsule: row4Col3 },
    { capability: row5Col1, synthetic: row5Col2, capsule: row5Col3 },
    { capability: row6Col1, synthetic: row6Col2, capsule: row6Col3 },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
        }

        .s6-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s6-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s6-brand-text {
          color: ${PALETTE.brandSecondary};
        }
        .s6-brand-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 24px 0;
        }
        .s6-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
        }
        .s6-table thead {
          background-color: ${PALETTE.neutral025};
        }
        .s6-table th {
          padding: 14px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 12px;
          color: ${PALETTE.textPrimary};
          border-bottom: 2px solid ${PALETTE.borderDefault};
        }
        .s6-table th.s6-th--highlight {
          background-color: ${PALETTE.brandTint};
          color: ${PALETTE.brandPrimary};
        }
        .s6-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          color: ${PALETTE.textSecondary};
          vertical-align: top;
        }
        .s6-table td.s6-td--highlight {
          background-color: ${PALETTE.brandTint};
          color: ${PALETTE.brandPrimary};
          font-weight: 500;
        }
        .s6-check { color: ${PALETTE.success}; font-weight: 600; }
        .s6-cross { color: ${PALETTE.error};   font-weight: 600; }

        @container (min-width: 768px) {
          .s6-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s6-brand-text">{sectionLabel}</span></h2>
            </div>
            <div className="s6-table-wrap">
              <table className="s6-table">
                <thead>
                  <tr>
                    <th>{col1Header}</th>
                    <th>{col2Header}</th>
                    <th className="s6-th--highlight"><span className="s6-brand-name">{col3Header}</span></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td>{r.capability}</td>
                      <td>{r.synthetic}</td>
                      <td className="s6-td--highlight">{r.capsule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_ComparisonTable, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Comparison",
  },
  col1Header: { type: ControlType.String, title: "Col 1 Header", defaultValue: "Capability" },
  col2Header: { type: ControlType.String, title: "Col 2 Header", defaultValue: "Synthetic Data Platforms" },
  col3Header: { type: ControlType.String, title: "Col 3 Header", defaultValue: "LLM Capsule" },
  row1Col1: { type: ControlType.String, title: "Row 1 Col 1", defaultValue: "Input data" },
  row1Col2: { type: ControlType.String, title: "Row 1 Col 2", defaultValue: "Artificially generated" },
  row1Col3: { type: ControlType.String, title: "Row 1 Col 3", defaultValue: "Real enterprise documents" },
  row2Col1: { type: ControlType.String, title: "Row 2 Col 1", defaultValue: "Document support" },
  row2Col2: { type: ControlType.String, title: "Row 2 Col 2", defaultValue: "Tabular data only" },
  row2Col3: { type: ControlType.String, title: "Row 2 Col 3", defaultValue: "All document types" },
  row3Col1: { type: ControlType.String, title: "Row 3 Col 1", defaultValue: "Content specificity" },
  row3Col2: { type: ControlType.String, title: "Row 3 Col 2", defaultValue: "Statistical patterns only" },
  row3Col3: { type: ControlType.String, title: "Row 3 Col 3", defaultValue: "Actual enterprise content" },
  row4Col1: { type: ControlType.String, title: "Row 4 Col 1", defaultValue: "Output usability" },
  row4Col2: { type: ControlType.String, title: "Row 4 Col 2", defaultValue: "Synthetic context" },
  row4Col3: { type: ControlType.String, title: "Row 4 Col 3", defaultValue: "Real enterprise context" },
  row5Col1: { type: ControlType.String, title: "Row 5 Col 1", defaultValue: "Output restoration" },
  row5Col2: { type: ControlType.String, title: "Row 5 Col 2", defaultValue: "✗" },
  row5Col3: { type: ControlType.String, title: "Row 5 Col 3", defaultValue: "✓ Local restoration" },
  row6Col1: { type: ControlType.String, title: "Row 6 Col 1", defaultValue: "Use case" },
  row6Col2: { type: ControlType.String, title: "Row 6 Col 2", defaultValue: "Model training, testing" },
  row6Col3: { type: ControlType.String, title: "Row 6 Col 3", defaultValue: "Production AI workflows" },
})
