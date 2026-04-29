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

interface Props {
  heading?: string
  colHeader1?: string
  colHeader2?: string
  colHeader3Product?: string
  colHeader3?: string
  row1Cap?: string
  row1Masking?: string
  row1Capsule?: string
  row2Cap?: string
  row2Masking?: string
  row2Capsule?: string
  row3Cap?: string
  row3Masking?: string
  row3Capsule?: string
  row4Cap?: string
  row4Masking?: string
  row4Capsule?: string
  row5Cap?: string
  row5Masking?: string
  row5Capsule?: string
  row6Cap?: string
  row7Cap?: string
  row7Masking?: string
  row7Capsule?: string
  row8Cap?: string
}

export default function Section07_ComparisonTable({
  heading = "Comparison",
  colHeader1 = "Capability",
  colHeader2 = "Masking Tools",
  colHeader3Product = "LLM Capsule",
  colHeader3 = "(AI Enablement Data Layer)",
  row1Cap = "Protection method",
  row1Masking = "Permanent removal / replacement",
  row1Capsule = "Reversible encapsulation",
  row2Cap = "Document structure",
  row2Masking = "Destroyed",
  row2Capsule = "Preserved",
  row3Cap = "Entity relationships",
  row3Masking = "Collapsed",
  row3Capsule = "Maintained",
  row4Cap = "AI output quality",
  row4Masking = "Degraded",
  row4Capsule = "Full quality",
  row5Cap = "Output restoration",
  row5Masking = "Manual",
  row5Capsule = "Automatic restoration",
  row6Cap = "Enterprise context control",
  row7Cap = "Audit trail",
  row7Masking = "Limited",
  row7Capsule = "Complete",
  row8Cap = "Designed for AI workflows",
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
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s7-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s7-container { padding: 0 120px; max-width: 1440px; } }
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
          scrollbar-width: none;
        }
        .s7-table-wrap::-webkit-scrollbar { display: none; }
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
          .s7-container { padding: 0; max-width: 1080px; }
          .s7-header h2 { font-size: 28px; }
          .s7-section { padding: 60px 0; }
          .s7-table th, .s7-table td { padding: 14px 16px; }
        }
      `}</style>
      <section className="s7-section" id="section-7">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{heading}</h2>
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
                    <td>{row1Cap}</td>
                    <td>{row1Masking}</td>
                    <td className="s7-td-highlight">{row1Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row2Cap}</td>
                    <td>{row2Masking}</td>
                    <td className="s7-td-highlight">{row2Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row3Cap}</td>
                    <td>{row3Masking}</td>
                    <td className="s7-td-highlight">{row3Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row4Cap}</td>
                    <td>{row4Masking}</td>
                    <td className="s7-td-highlight">{row4Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row5Cap}</td>
                    <td><span className="s7-cross">&#x2717;</span> {row5Masking}</td>
                    <td className="s7-td-highlight"><span className="s7-check">&#x2713;</span> {row5Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row6Cap}</td>
                    <td><span className="s7-cross">&#x2717;</span></td>
                    <td className="s7-td-highlight"><span className="s7-check">&#x2713;</span></td>
                  </tr>
                  <tr>
                    <td>{row7Cap}</td>
                    <td>{row7Masking}</td>
                    <td className="s7-td-highlight">{row7Capsule}</td>
                  </tr>
                  <tr>
                    <td>{row8Cap}</td>
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
  row1Cap: {
    type: ControlType.String,
    title: "Row 1 Capability",
    defaultValue: "Protection method",
  },
  row1Masking: {
    type: ControlType.String,
    title: "Row 1 Masking",
    defaultValue: "Permanent removal / replacement",
  },
  row1Capsule: {
    type: ControlType.String,
    title: "Row 1 Capsule",
    defaultValue: "Reversible encapsulation",
  },
  row2Cap: {
    type: ControlType.String,
    title: "Row 2 Capability",
    defaultValue: "Document structure",
  },
  row2Masking: {
    type: ControlType.String,
    title: "Row 2 Masking",
    defaultValue: "Destroyed",
  },
  row2Capsule: {
    type: ControlType.String,
    title: "Row 2 Capsule",
    defaultValue: "Preserved",
  },
  row3Cap: {
    type: ControlType.String,
    title: "Row 3 Capability",
    defaultValue: "Entity relationships",
  },
  row3Masking: {
    type: ControlType.String,
    title: "Row 3 Masking",
    defaultValue: "Collapsed",
  },
  row3Capsule: {
    type: ControlType.String,
    title: "Row 3 Capsule",
    defaultValue: "Maintained",
  },
  row4Cap: {
    type: ControlType.String,
    title: "Row 4 Capability",
    defaultValue: "AI output quality",
  },
  row4Masking: {
    type: ControlType.String,
    title: "Row 4 Masking",
    defaultValue: "Degraded",
  },
  row4Capsule: {
    type: ControlType.String,
    title: "Row 4 Capsule",
    defaultValue: "Full quality",
  },
  row5Cap: {
    type: ControlType.String,
    title: "Row 5 Capability",
    defaultValue: "Output restoration",
  },
  row5Masking: {
    type: ControlType.String,
    title: "Row 5 Masking",
    defaultValue: "Manual",
  },
  row5Capsule: {
    type: ControlType.String,
    title: "Row 5 Capsule",
    defaultValue: "Automatic restoration",
  },
  row6Cap: {
    type: ControlType.String,
    title: "Row 6 Capability",
    defaultValue: "Enterprise context control",
  },
  row7Cap: {
    type: ControlType.String,
    title: "Row 7 Capability",
    defaultValue: "Audit trail",
  },
  row7Masking: {
    type: ControlType.String,
    title: "Row 7 Masking",
    defaultValue: "Limited",
  },
  row7Capsule: {
    type: ControlType.String,
    title: "Row 7 Capsule",
    defaultValue: "Complete",
  },
  row8Cap: {
    type: ControlType.String,
    title: "Row 8 Capability",
    defaultValue: "Designed for AI workflows",
  },
})
