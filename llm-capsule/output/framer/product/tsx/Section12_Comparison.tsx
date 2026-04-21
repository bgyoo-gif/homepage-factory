import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  success:        "#0e824c",
  error:          "#ff3030",
  brandTintLight: "rgba(24, 33, 232, 0.06)",
  brandTint:      "rgba(24, 33, 232, 0.04)",
  brandTintMd:    "rgba(24, 33, 232, 0.08)",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  bannerText?: string
  row1Title?: string
  row2Title?: string
  row3Title?: string
  row1Dim?: string
  row1Masking?: string
  row1Gateway?: string
  row1Capsule?: string
  row2Dim?: string
  row2Masking?: string
  row2Gateway?: string
  row2Capsule?: string
  row3Dim?: string
  row3Masking?: string
  row3Gateway?: string
  row3Capsule?: string
  row4Dim?: string
  row4Masking?: string
  row4Gateway?: string
  row4Capsule?: string
  row5Dim?: string
  row5Masking?: string
  row5Gateway?: string
  row5Capsule?: string
  row6Dim?: string
  row6Masking?: string
  row6Gateway?: string
  row6Capsule?: string
  row7Dim?: string
  row7Masking?: string
  row7Gateway?: string
  row7Capsule?: string
  row8Dim?: string
  row8Masking?: string
  row8Gateway?: string
  row8Capsule?: string
  row9Dim?: string
  row9Masking?: string
  row9Gateway?: string
  row9Capsule?: string
}

export default function Section12_Comparison({
  sectionTitle = "How LLM Capsule differs from traditional",
  sectionTitleBrand = "approaches",
  sectionDescription = "Not all protection approaches are designed for usable enterprise AI workflows. Traditional masking protects data by reducing usability. LLM Capsule protects data while preserving enterprise workflow value.",
  bannerText = "AI results are auto-restored through local restoration. This is the fundamental capability that separates LLM Capsule from every other approach — enterprise AI enablement that produces usable outputs, not abstracted placeholders.",
  row1Title = "Traditional Masking / Redaction",
  row2Title = "Prompt Security Gateways",
  row3Title = "LLM Capsule",
  row1Dim = "AI enablement layer",
  row1Masking = "Pre-processing data removal",
  row1Gateway = "API-level prompt filtering",
  row1Capsule = "Data-layer encapsulation",
  row2Dim = "Local processing",
  row2Masking = "Often does not preserve full workflow boundary",
  row2Gateway = "Cloud-based filtering, not local",
  row2Capsule = "Sensitive entities encapsulated locally before outbound",
  row3Dim = "Restoration",
  row3Masking = "One-way, no restored usability",
  row3Gateway = "No output restoration",
  row3Capsule = "Outputs auto-restored locally for usable workflows",
  row4Dim = "Business-specific entity control",
  row4Masking = "Generic PII categories only",
  row4Gateway = "Pattern-based PII detection",
  row4Capsule = "Enterprise context control beyond PII",
  row5Dim = "Structure preservation",
  row5Masking = "Optimized for flat text only",
  row5Gateway = "N/A — operates on prompts",
  row5Capsule = "Tables, diagrams, layouts preserved",
  row6Dim = "RAG pipeline support",
  row6Masking = "Partial",
  row6Gateway = "Limited — only sees final prompt",
  row6Capsule = "Full data pipeline protection",
  row7Dim = "Deployment flexibility",
  row7Masking = "Varies",
  row7Gateway = "Cloud / SaaS only",
  row7Capsule = "On-premise, air-gapped, cloud, hybrid, embedded",
  row8Dim = "Workflow usability",
  row8Masking = "Protects data while reducing output value",
  row8Gateway = "Blocks or passes, no transformation",
  row8Capsule = "Built for usable AI outputs",
  row9Dim = "Audit & governance",
  row9Masking = "Limited traceability",
  row9Gateway = "Prompt-level logging",
  row9Capsule = "Complete audit trail",
}: Props) {
  const rows = [
    {
      dim: row1Dim,
      masking: row1Masking,
      gateway: row1Gateway,
      capsule: row1Capsule,
      capsuleCheck: false,
    },
    {
      dim: row2Dim,
      masking: row2Masking,
      gateway: row2Gateway,
      capsule: row2Capsule,
      capsuleCheck: false,
    },
    {
      dim: row3Dim,
      masking: row3Masking,
      gateway: row3Gateway,
      capsule: row3Capsule,
      maskingX: true,
      gatewayX: true,
      capsuleCheck: true,
    },
    {
      dim: row4Dim,
      masking: row4Masking,
      gateway: row4Gateway,
      capsule: row4Capsule,
      capsuleCheck: true,
    },
    {
      dim: row5Dim,
      masking: row5Masking,
      gateway: row5Gateway,
      capsule: row5Capsule,
      capsuleCheck: true,
    },
    {
      dim: row6Dim,
      masking: row6Masking,
      gateway: row6Gateway,
      capsule: row6Capsule,
      capsuleCheck: true,
    },
    {
      dim: row7Dim,
      masking: row7Masking,
      gateway: row7Gateway,
      capsule: row7Capsule,
      capsuleCheck: true,
    },
    {
      dim: row8Dim,
      masking: row8Masking,
      gateway: row8Gateway,
      capsule: row8Capsule,
      capsuleCheck: true,
    },
    {
      dim: row9Dim,
      masking: row9Masking,
      gateway: row9Gateway,
      capsule: row9Capsule,
      capsuleCheck: true,
    },
  ]

  const CheckIcon = () => (
    <svg style={{width:16,height:16,stroke:PALETTE.success,fill:"none",strokeWidth:1.5,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,display:"inline-block",verticalAlign:"middle",marginRight:4}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )

  const XIcon = () => (
    <svg style={{width:16,height:16,stroke:PALETTE.error,fill:"none",strokeWidth:1.5,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,display:"inline-block",verticalAlign:"middle",marginRight:4}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s12-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s12-inner { width: 100%; container-type: inline-size; }
        .s12-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s12-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s12-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s12-container { padding: 0 120px; max-width: 1440px; } }

        .s12-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s12-header { text-align: left; } }
        .s12-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s12-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s12-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s12-header__title { font-size: 28px; } }
        .s12-header__brand { color: ${PALETTE.brandSecondary}; }
        .s12-product     { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .s12-header__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s12-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s12-header__desc { max-width: 1080px; } }

        /* Table */
        .s12-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid ${PALETTE.borderDefault};
        }
        .s12-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
        }
        .s12-table thead th {
          font-family: "Fragment Mono", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${PALETTE.textPrimary};
          font-weight: 600;
          padding: 12px 16px;
          border-bottom: 2px solid ${PALETTE.borderDefault};
          text-align: left;
          background-color: ${PALETTE.surfaceLight};
        }
        .s12-table thead .s12-col-highlight {
          background-color: ${PALETTE.brandTintMd};
          color: ${PALETTE.brandPrimary};
        }
        .s12-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          color: ${PALETTE.textPrimary};
          vertical-align: top;
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s12-table tbody tr:last-child td { border-bottom: none; }
        .s12-table tbody td:first-child { font-weight: 600; color: ${PALETTE.textPrimary}; }
        .s12-table tbody tr:hover td { background-color: ${PALETTE.surfaceLight}; }
        .s12-col-highlight {
          background-color: ${PALETTE.brandTint};
          color: ${PALETTE.brandPrimary};
          font-weight: 500;
        }

        /* Banner */
        .s12-banner {
          margin-top: 32px;
          padding: 16px 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.brandTintLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: ${PALETTE.textSecondary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s12-banner strong { font-weight: 600; color: ${PALETTE.textPrimary}; }
      `}</style>
      <section className="s12-section" id="section-11">
        <div className="s12-inner">
          <div className="s12-container">
            <div className="s12-header">
              <h2 className="s12-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitle} <span className="s12-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s12-header__desc">{sectionDescription}</p>
            </div>

            <div className="s12-table-wrap">
              <table className="s12-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>{row1Title}</th>
                    <th>{row2Title}</th>
                    <th className="s12-col-highlight">{row3Title}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td>{r.dim}</td>
                      <td>
                        {r.maskingX && <XIcon />}
                        {r.masking}
                      </td>
                      <td>
                        {r.gatewayX && <XIcon />}
                        {r.gateway}
                      </td>
                      <td className="s12-col-highlight">
                        {r.capsuleCheck && <CheckIcon />}
                        {r.capsule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="s12-banner">
              {bannerText}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section12_Comparison, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "How LLM Capsule differs from traditional" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "approaches" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "Not all protection approaches are designed for usable enterprise AI workflows. Traditional masking protects data by reducing usability. LLM Capsule protects data while preserving enterprise workflow value.", displayTextArea: true },
  bannerText:         { type: ControlType.String, title: "Banner",        defaultValue: "AI results are auto-restored through local restoration. This is the fundamental capability that separates LLM Capsule from every other approach — enterprise AI enablement that produces usable outputs, not abstracted placeholders.", displayTextArea: true },
  row1Title:          { type: ControlType.String, title: "Col 1 Header",  defaultValue: "Traditional Masking / Redaction" },
  row2Title:          { type: ControlType.String, title: "Col 2 Header",  defaultValue: "Prompt Security Gateways" },
  row3Title:          { type: ControlType.String, title: "Col 3 Header",  defaultValue: "LLM Capsule" },
  row1Dim:            { type: ControlType.String, title: "R1 Dimension",  defaultValue: "AI enablement layer" },
  row1Masking:        { type: ControlType.String, title: "R1 Masking",    defaultValue: "Pre-processing data removal" },
  row1Gateway:        { type: ControlType.String, title: "R1 Gateway",    defaultValue: "API-level prompt filtering" },
  row1Capsule:        { type: ControlType.String, title: "R1 Capsule",    defaultValue: "Data-layer encapsulation" },
  row2Dim:            { type: ControlType.String, title: "R2 Dimension",  defaultValue: "Local processing" },
  row2Masking:        { type: ControlType.String, title: "R2 Masking",    defaultValue: "Often does not preserve full workflow boundary", displayTextArea: true },
  row2Gateway:        { type: ControlType.String, title: "R2 Gateway",    defaultValue: "Cloud-based filtering, not local" },
  row2Capsule:        { type: ControlType.String, title: "R2 Capsule",    defaultValue: "Sensitive entities encapsulated locally before outbound", displayTextArea: true },
  row3Dim:            { type: ControlType.String, title: "R3 Dimension",  defaultValue: "Restoration" },
  row3Masking:        { type: ControlType.String, title: "R3 Masking",    defaultValue: "One-way, no restored usability" },
  row3Gateway:        { type: ControlType.String, title: "R3 Gateway",    defaultValue: "No output restoration" },
  row3Capsule:        { type: ControlType.String, title: "R3 Capsule",    defaultValue: "Outputs auto-restored locally for usable workflows", displayTextArea: true },
  row4Dim:            { type: ControlType.String, title: "R4 Dimension",  defaultValue: "Business-specific entity control" },
  row4Masking:        { type: ControlType.String, title: "R4 Masking",    defaultValue: "Generic PII categories only" },
  row4Gateway:        { type: ControlType.String, title: "R4 Gateway",    defaultValue: "Pattern-based PII detection" },
  row4Capsule:        { type: ControlType.String, title: "R4 Capsule",    defaultValue: "Enterprise context control beyond PII" },
  row5Dim:            { type: ControlType.String, title: "R5 Dimension",  defaultValue: "Structure preservation" },
  row5Masking:        { type: ControlType.String, title: "R5 Masking",    defaultValue: "Optimized for flat text only" },
  row5Gateway:        { type: ControlType.String, title: "R5 Gateway",    defaultValue: "N/A — operates on prompts" },
  row5Capsule:        { type: ControlType.String, title: "R5 Capsule",    defaultValue: "Tables, diagrams, layouts preserved" },
  row6Dim:            { type: ControlType.String, title: "R6 Dimension",  defaultValue: "RAG pipeline support" },
  row6Masking:        { type: ControlType.String, title: "R6 Masking",    defaultValue: "Partial" },
  row6Gateway:        { type: ControlType.String, title: "R6 Gateway",    defaultValue: "Limited — only sees final prompt" },
  row6Capsule:        { type: ControlType.String, title: "R6 Capsule",    defaultValue: "Full data pipeline protection" },
  row7Dim:            { type: ControlType.String, title: "R7 Dimension",  defaultValue: "Deployment flexibility" },
  row7Masking:        { type: ControlType.String, title: "R7 Masking",    defaultValue: "Varies" },
  row7Gateway:        { type: ControlType.String, title: "R7 Gateway",    defaultValue: "Cloud / SaaS only" },
  row7Capsule:        { type: ControlType.String, title: "R7 Capsule",    defaultValue: "On-premise, air-gapped, cloud, hybrid, embedded" },
  row8Dim:            { type: ControlType.String, title: "R8 Dimension",  defaultValue: "Workflow usability" },
  row8Masking:        { type: ControlType.String, title: "R8 Masking",    defaultValue: "Protects data while reducing output value" },
  row8Gateway:        { type: ControlType.String, title: "R8 Gateway",    defaultValue: "Blocks or passes, no transformation" },
  row8Capsule:        { type: ControlType.String, title: "R8 Capsule",    defaultValue: "Built for usable AI outputs" },
  row9Dim:            { type: ControlType.String, title: "R9 Dimension",  defaultValue: "Audit & governance" },
  row9Masking:        { type: ControlType.String, title: "R9 Masking",    defaultValue: "Limited traceability" },
  row9Gateway:        { type: ControlType.String, title: "R9 Gateway",    defaultValue: "Prompt-level logging" },
  row9Capsule:        { type: ControlType.String, title: "R9 Capsule",    defaultValue: "Complete audit trail" },
})
