import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  neutral025:     "#f7f7f7",
  borderDefault:  "#e6e7e9",
  success:        "#0e824c",
  error:          "#ff3030",
}

interface TableRow {
  capability: string
  masking: string
  capsule: string
  capsuleCheck?: "check" | "cross" | "none"
  maskingCheck?: "check" | "cross" | "none"
}

interface Props {
  heading?: string
  colHeader1?: string
  colHeader2?: string
  colHeader3?: string
  colHeader3Product?: string
  rows?: TableRow[]
}

const DEFAULT_ROWS: TableRow[] = [
  { capability: "Protection method", masking: "Permanent removal / replacement", capsule: "Reversible encapsulation", capsuleCheck: "none", maskingCheck: "none" },
  { capability: "Document structure", masking: "Destroyed", capsule: "Preserved", capsuleCheck: "none", maskingCheck: "none" },
  { capability: "Entity relationships", masking: "Collapsed", capsule: "Maintained", capsuleCheck: "none", maskingCheck: "none" },
  { capability: "AI output quality", masking: "Degraded", capsule: "Full quality", capsuleCheck: "none", maskingCheck: "none" },
  { capability: "Output restoration", masking: "Manual", capsule: "Automatic restoration", capsuleCheck: "check", maskingCheck: "cross" },
  { capability: "Enterprise context control", masking: "", capsule: "", capsuleCheck: "check", maskingCheck: "cross" },
  { capability: "Audit trail", masking: "Limited", capsule: "Complete", capsuleCheck: "none", maskingCheck: "none" },
  { capability: "Designed for AI workflows", masking: "", capsule: "", capsuleCheck: "check", maskingCheck: "cross" },
]

export default function Section07_ComparisonTable({
  heading = "Comparison",
  colHeader1 = "Capability",
  colHeader2 = "Masking Tools",
  colHeader3 = "(AI Enablement Data Layer)",
  colHeader3Product = "LLM Capsule",
  rows = DEFAULT_ROWS,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s7-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s7-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s7-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s7-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 24px 0;
        }
        .s7-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
        }
        .s7-table thead {
          background-color: ${PALETTE.neutral025};
        }
        .s7-table th {
          padding: 14px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 12px;
          color: ${PALETTE.textPrimary};
          border-bottom: 2px solid ${PALETTE.borderDefault};
        }
        .s7-th-highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${PALETTE.brandPrimary};
        }
        .s7-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          color: ${PALETTE.textSecondary};
          vertical-align: top;
        }
        .s7-td-highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${PALETTE.brandPrimary};
          font-weight: 500;
        }
        .s7-check {
          color: ${PALETTE.success};
          font-weight: 600;
        }
        .s7-cross {
          color: ${PALETTE.error};
          font-weight: 600;
        }
        .s7-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0; max-width: 860px; }
          .s7-header h2 { font-size: 28px; }
          .s7-section { padding: 64px 0; }
          .s7-table th, .s7-table td { padding: 14px 16px; }
        }
      `}</style>
      <section className="s7-section" id="section-7">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-header">
              <h2>{heading}</h2>
            </div>
            <div className="s7-table-wrap">
              <table className="s7-table">
                <thead>
                  <tr>
                    <th>{colHeader1}</th>
                    <th>{colHeader2}</th>
                    <th className="s7-th-highlight">
                      <span className="s7-product">{colHeader3Product}</span> {colHeader3}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protection method</td>
                    <td>Permanent removal / replacement</td>
                    <td className="s7-td-highlight">Reversible encapsulation</td>
                  </tr>
                  <tr>
                    <td>Document structure</td>
                    <td>Destroyed</td>
                    <td className="s7-td-highlight">Preserved</td>
                  </tr>
                  <tr>
                    <td>Entity relationships</td>
                    <td>Collapsed</td>
                    <td className="s7-td-highlight">Maintained</td>
                  </tr>
                  <tr>
                    <td>AI output quality</td>
                    <td>Degraded</td>
                    <td className="s7-td-highlight">Full quality</td>
                  </tr>
                  <tr>
                    <td>Output restoration</td>
                    <td><span className="s7-cross">&#x2717;</span> Manual</td>
                    <td className="s7-td-highlight"><span className="s7-check">&#x2713;</span> Automatic restoration</td>
                  </tr>
                  <tr>
                    <td>Enterprise context control</td>
                    <td><span className="s7-cross">&#x2717;</span></td>
                    <td className="s7-td-highlight"><span className="s7-check">&#x2713;</span></td>
                  </tr>
                  <tr>
                    <td>Audit trail</td>
                    <td>Limited</td>
                    <td className="s7-td-highlight">Complete</td>
                  </tr>
                  <tr>
                    <td>Designed for AI workflows</td>
                    <td><span className="s7-cross">&#x2717;</span></td>
                    <td className="s7-td-highlight"><span className="s7-check">&#x2713;</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_ComparisonTable, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Comparison",
  },
  colHeader1: {
    type: ControlType.String,
    title: "Col 1 Header",
    defaultValue: "Capability",
  },
  colHeader2: {
    type: ControlType.String,
    title: "Col 2 Header",
    defaultValue: "Masking Tools",
  },
  colHeader3Product: {
    type: ControlType.String,
    title: "Col 3 Product",
    defaultValue: "LLM Capsule",
  },
  colHeader3: {
    type: ControlType.String,
    title: "Col 3 Subtitle",
    defaultValue: "(AI Enablement Data Layer)",
  },
})
