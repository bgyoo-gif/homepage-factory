import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  neutral025:     "#f7f7f7",
  success:        "#0e824c",
  error:          "#ff3030",
  brandTint:      "rgba(24,33,232,0.04)",
  trackingTight:  "-0.5px",
}

interface Props {
  headingProduct?: string
  headingVs?: string
  headingTools?: string
  thCapability?: string
  thCol2?: string
  thCol3?: string
  row1Cap?: string; row1Col2?: string; row1Col3?: string
  row2Cap?: string; row2Col2?: string; row2Col3?: string
  row3Cap?: string; row3Col2?: string; row3Col3?: string
  row4Cap?: string; row4Col2?: string; row4Col3?: string
  row5Cap?: string; row5Col2?: string; row5Col3?: string
  row6Cap?: string; row6Col2?: string; row6Col3?: string
  row7Cap?: string; row7Col2?: string; row7Col3?: string
  row8Cap?: string; row8Col2?: string; row8Col3?: string
}

export default function Section05_ComparisonTable({
  headingProduct = "LLM Capsule",
  headingVs = "vs",
  headingTools = "Redaction Tools",
  thCapability = "Capability",
  thCol2 = "Redaction / Masking Tools",
  thCol3 = "LLM Capsule (AI Enablement Data Layer)",
  row1Cap = "Data protection", row1Col2 = "Permanent removal", row1Col3 = "Reversible encapsulation",
  row2Cap = "Document structure", row2Col2 = "Destroyed", row2Col3 = "Preserved",
  row3Cap = "Entity relationships", row3Col2 = "Collapsed", row3Col3 = "Maintained",
  row4Cap = "AI output usability", row4Col2 = "Abstracted, generic", row4Col3 = "Restored, enterprise-ready",
  row5Cap = "Output restoration", row5Col2 = "None", row5Col3 = "Local restoration",
  row6Cap = "Workflow automation", row6Col2 = "Requires manual post-processing", row6Col3 = "End-to-end automated",
  row7Cap = "Context-aware data control", row7Col2 = "No", row7Col3 = "Yes",
  row8Cap = "Enterprise confidentiality control", row8Col2 = "Partial", row8Col3 = "Complete",
}: Props) {
  const rows = [
    { cap: row1Cap, col2: row1Col2, col3: row1Col3, col2Cross: false, col3Check: false },
    { cap: row2Cap, col2: row2Col2, col3: row2Col3, col2Cross: false, col3Check: false },
    { cap: row3Cap, col2: row3Col2, col3: row3Col3, col2Cross: false, col3Check: false },
    { cap: row4Cap, col2: row4Col2, col3: row4Col3, col2Cross: false, col3Check: false },
    { cap: row5Cap, col2: row5Col2, col3: row5Col3, col2Cross: true, col3Check: true },
    { cap: row6Cap, col2: row6Col2, col3: row6Col3, col2Cross: false, col3Check: false },
    { cap: row7Cap, col2: row7Col2, col3: row7Col3, col2Cross: true, col3Check: true },
    { cap: row8Cap, col2: row8Col2, col3: row8Col3, col2Cross: false, col3Check: false },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s5;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: pretty;
        }
        .s5-product {
          font-family: "${C.brandFont}", sans-serif;
          font-weight: 700;
        }
        .s5-brand { color: ${C.brandSecondary}; }
        .s5-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin: 24px 0;
        }
        .s5-table-wrap::-webkit-scrollbar { display: none; }
        .s5-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
        }
        .s5-table thead { background-color: ${C.neutral025}; }
        .s5-table th {
          padding: 14px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 12px;
          color: ${C.textPrimary};
          border-bottom: 2px solid ${C.borderDefault};
        }
        .s5-table th.highlight {
          background-color: ${C.brandTint};
          color: ${C.brandPrimary};
        }
        .s5-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${C.borderDefault};
          color: ${C.textSecondary};
          vertical-align: top;
        }
        .s5-table td.highlight {
          background-color: ${C.brandTint};
          color: ${C.brandPrimary};
          font-weight: 500;
        }
        .s5-check { color: ${C.success}; font-weight: 600; }
        .s5-cross { color: ${C.error};   font-weight: 600; }

        @container s5 (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
          .s5-section { padding: 40px 0; }
        }
        @container s5 (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
          .s5-section { padding: 60px 0; }
        }
        @container s5 (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
          .s5-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                <span className="s5-product">{headingProduct}</span>{" "}
                {headingVs}{" "}
                <span className="s5-brand">{headingTools}</span>
              </h2>
            </div>
            <div className="s5-table-wrap">
              <table className="s5-table">
                <thead>
                  <tr>
                    <th>{thCapability}</th>
                    <th>{thCol2}</th>
                    <th className="highlight">{thCol3}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.cap}</td>
                      <td>
                        {row.col2Cross && <span className="s5-cross">{"✗ "}</span>}
                        {row.col2}
                      </td>
                      <td className="highlight">
                        {row.col3Check && <span className="s5-check">{"✓ "}</span>}
                        {row.col3}
                      </td>
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

addPropertyControls(Section05_ComparisonTable, {
  headingProduct: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  headingVs: { type: ControlType.String, title: "vs Text", defaultValue: "vs" },
  headingTools: { type: ControlType.String, title: "Competitor Label", defaultValue: "Redaction Tools" },
  thCapability: { type: ControlType.String, title: "TH: Capability", defaultValue: "Capability" },
  thCol2: { type: ControlType.String, title: "TH: Col 2", defaultValue: "Redaction / Masking Tools" },
  thCol3: { type: ControlType.String, title: "TH: Col 3", defaultValue: "LLM Capsule (AI Enablement Data Layer)" },
  row1Cap: { type: ControlType.String, title: "Row 1 Capability", defaultValue: "Data protection" },
  row1Col2: { type: ControlType.String, title: "Row 1 Col 2", defaultValue: "Permanent removal" },
  row1Col3: { type: ControlType.String, title: "Row 1 Col 3", defaultValue: "Reversible encapsulation" },
  row2Cap: { type: ControlType.String, title: "Row 2 Capability", defaultValue: "Document structure" },
  row2Col2: { type: ControlType.String, title: "Row 2 Col 2", defaultValue: "Destroyed" },
  row2Col3: { type: ControlType.String, title: "Row 2 Col 3", defaultValue: "Preserved" },
  row3Cap: { type: ControlType.String, title: "Row 3 Capability", defaultValue: "Entity relationships" },
  row3Col2: { type: ControlType.String, title: "Row 3 Col 2", defaultValue: "Collapsed" },
  row3Col3: { type: ControlType.String, title: "Row 3 Col 3", defaultValue: "Maintained" },
  row4Cap: { type: ControlType.String, title: "Row 4 Capability", defaultValue: "AI output usability" },
  row4Col2: { type: ControlType.String, title: "Row 4 Col 2", defaultValue: "Abstracted, generic" },
  row4Col3: { type: ControlType.String, title: "Row 4 Col 3", defaultValue: "Restored, enterprise-ready" },
  row5Cap: { type: ControlType.String, title: "Row 5 Capability", defaultValue: "Output restoration" },
  row5Col2: { type: ControlType.String, title: "Row 5 Col 2", defaultValue: "None" },
  row5Col3: { type: ControlType.String, title: "Row 5 Col 3", defaultValue: "Local restoration" },
  row6Cap: { type: ControlType.String, title: "Row 6 Capability", defaultValue: "Workflow automation" },
  row6Col2: { type: ControlType.String, title: "Row 6 Col 2", defaultValue: "Requires manual post-processing" },
  row6Col3: { type: ControlType.String, title: "Row 6 Col 3", defaultValue: "End-to-end automated" },
  row7Cap: { type: ControlType.String, title: "Row 7 Capability", defaultValue: "Context-aware data control" },
  row7Col2: { type: ControlType.String, title: "Row 7 Col 2", defaultValue: "No" },
  row7Col3: { type: ControlType.String, title: "Row 7 Col 3", defaultValue: "Yes" },
  row8Cap: { type: ControlType.String, title: "Row 8 Capability", defaultValue: "Enterprise confidentiality control" },
  row8Col2: { type: ControlType.String, title: "Row 8 Col 2", defaultValue: "Partial" },
  row8Col3: { type: ControlType.String, title: "Row 8 Col 3", defaultValue: "Complete" },
})
