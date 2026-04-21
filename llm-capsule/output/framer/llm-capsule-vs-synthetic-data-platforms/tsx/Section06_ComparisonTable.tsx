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
  brandName?: string
  col1Header?: string
  col2Header?: string
  col3Header?: string
}

export default function Section06_ComparisonTable({
  sectionLabel = "Comparison",
  brandName = "LLM Capsule",
  col1Header = "Capability",
  col2Header = "Synthetic Data Platforms",
  col3Header = "LLM Capsule",
}: Props) {
  const rows = [
    { capability: "Input data", synthetic: "Artificially generated", capsule: "Real enterprise documents" },
    { capability: "Document support", synthetic: "Tabular data only", capsule: "All document types" },
    { capability: "Content specificity", synthetic: "Statistical patterns only", capsule: "Actual enterprise content" },
    { capability: "Output usability", synthetic: "Synthetic context", capsule: "Real enterprise context" },
    { capability: "Output restoration", synthetic: null, capsule: "Local restoration", syntheticCross: true, capsuleCheck: true },
    { capability: "Use case", synthetic: "Model training, testing", capsule: "Production AI workflows" },
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
          text-wrap: balance;
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
              <h2 style={{ wordBreak: "keep-all" }}><span className="s6-brand-text">{sectionLabel}</span></h2>
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
                  <tr>
                    <td>Input data</td>
                    <td>Artificially generated</td>
                    <td className="s6-td--highlight">Real enterprise documents</td>
                  </tr>
                  <tr>
                    <td>Document support</td>
                    <td>Tabular data only</td>
                    <td className="s6-td--highlight">All document types</td>
                  </tr>
                  <tr>
                    <td>Content specificity</td>
                    <td>Statistical patterns only</td>
                    <td className="s6-td--highlight">Actual enterprise content</td>
                  </tr>
                  <tr>
                    <td>Output usability</td>
                    <td>Synthetic context</td>
                    <td className="s6-td--highlight">Real enterprise context</td>
                  </tr>
                  <tr>
                    <td>Output restoration</td>
                    <td><span className="s6-cross">✗</span> N/A</td>
                    <td className="s6-td--highlight"><span className="s6-check">✓</span> Local restoration</td>
                  </tr>
                  <tr>
                    <td>Use case</td>
                    <td>Model training, testing</td>
                    <td className="s6-td--highlight">Production AI workflows</td>
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

addPropertyControls(Section06_ComparisonTable, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Comparison",
  },
  brandName: {
    type: ControlType.String,
    title: "Brand Name",
    defaultValue: "LLM Capsule",
  },
  col1Header: {
    type: ControlType.String,
    title: "Col 1 Header",
    defaultValue: "Capability",
  },
  col2Header: {
    type: ControlType.String,
    title: "Col 2 Header",
    defaultValue: "Synthetic Data Platforms",
  },
  col3Header: {
    type: ControlType.String,
    title: "Col 3 Header",
    defaultValue: "LLM Capsule",
  },
})
