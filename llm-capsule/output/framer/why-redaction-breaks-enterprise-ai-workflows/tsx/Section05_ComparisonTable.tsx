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
  col3Label?: string
}

const TABLE_ROWS = [
  { capability: "Data protection",              col2: "Permanent removal",           col3: "Reversible encapsulation" },
  { capability: "Document structure",           col2: "Destroyed",                   col3: "Preserved" },
  { capability: "Entity relationships",         col2: "Collapsed",                   col3: "Maintained" },
  { capability: "AI output usability",          col2: "Abstracted, generic",         col3: "Restored, enterprise-ready" },
  { capability: "Output restoration",           col2: "✗ None",                      col3: "✓ Local restoration", col2Cross: true, col3Check: true },
  { capability: "Workflow automation",          col2: "Requires manual post-processing", col3: "End-to-end automated" },
  { capability: "Context-aware data control",   col2: "✗",                           col3: "✓", col2Cross: true, col3Check: true },
  { capability: "Enterprise confidentiality control", col2: "Partial",              col3: "Complete" },
]

export default function Section05_ComparisonTable({
  headingProduct = "LLM Capsule",
  headingVs = "vs",
  headingTools = "Redaction Tools",
  col3Label = "LLM Capsule (AI Enablement Data Layer)",
}: Props) {
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
          text-wrap: balance;
        }
        .s5-product {
          font-family: "${C.brandFont}", sans-serif;
          font-weight: 700;
        }
        .s5-brand { color: ${C.brandSecondary}; }
        .s5-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 24px 0;
        }
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
              <h2 style={{ wordBreak: "keep-all" }}>
                <span className="s5-product">{headingProduct}</span>{" "}
                {headingVs}{" "}
                <span className="s5-brand">{headingTools}</span>
              </h2>
            </div>
            <div className="s5-table-wrap">
              <table className="s5-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Redaction / Masking Tools</th>
                    <th className="highlight">
                      <span className="s5-product">{headingProduct}</span> (AI Enablement Data Layer)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td>{row.capability}</td>
                      <td>
                        {row.col2Cross ? (
                          <>
                            <span className="s5-cross">
                              {row.col2.startsWith("✗") ? "✗" : ""}
                            </span>
                            {row.col2.replace("✗", "").trim()
                              ? " " + row.col2.replace("✗", "").trim()
                              : ""}
                          </>
                        ) : (
                          row.col2
                        )}
                      </td>
                      <td className="highlight">
                        {row.col3Check ? (
                          <>
                            <span className="s5-check">
                              {row.col3.startsWith("✓") ? "✓" : ""}
                            </span>
                            {row.col3.replace("✓", "").trim()
                              ? " " + row.col3.replace("✓", "").trim()
                              : ""}
                          </>
                        ) : (
                          row.col3
                        )}
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
  headingProduct: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  headingVs: {
    type: ControlType.String,
    title: "vs Text",
    defaultValue: "vs",
  },
  headingTools: {
    type: ControlType.String,
    title: "Competitor Label",
    defaultValue: "Redaction Tools",
  },
  col3Label: {
    type: ControlType.String,
    title: "Col 3 Header Label",
    defaultValue: "LLM Capsule (AI Enablement Data Layer)",
  },
})
