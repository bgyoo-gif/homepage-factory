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
}

export default function Section12_Comparison({
  sectionTitle = "How LLM Capsule differs from traditional",
  sectionTitleBrand = "approaches",
  sectionDescription = "Not all protection approaches are designed for usable enterprise AI workflows. Traditional masking protects data by reducing usability. LLM Capsule protects data while preserving enterprise workflow value.",
  bannerText = "AI results are auto-restored through local restoration. This is the fundamental capability that separates LLM Capsule from every other approach — enterprise AI enablement that produces usable outputs, not abstracted placeholders.",
  row1Title = "Traditional Masking / Redaction",
  row2Title = "Prompt Security Gateways",
  row3Title = "LLM Capsule",
}: Props) {
  const rows = [
    {
      dim: "AI enablement layer",
      masking: "Pre-processing data removal",
      gateway: "API-level prompt filtering",
      capsule: "Data-layer encapsulation",
      capsuleCheck: false,
    },
    {
      dim: "Local processing",
      masking: "Often does not preserve full workflow boundary",
      gateway: "Cloud-based filtering, not local",
      capsule: "Sensitive entities encapsulated locally before outbound",
      capsuleCheck: false,
    },
    {
      dim: "Restoration",
      masking: "One-way, no restored usability",
      gateway: "No output restoration",
      capsule: "Outputs auto-restored locally for usable workflows",
      maskingX: true,
      gatewayX: true,
      capsuleCheck: true,
    },
    {
      dim: "Business-specific entity control",
      masking: "Generic PII categories only",
      gateway: "Pattern-based PII detection",
      capsule: "Enterprise context control beyond PII",
      capsuleCheck: true,
    },
    {
      dim: "Structure preservation",
      masking: "Optimized for flat text only",
      gateway: "N/A — operates on prompts",
      capsule: "Tables, diagrams, layouts preserved",
      capsuleCheck: true,
    },
    {
      dim: "RAG pipeline support",
      masking: "Partial",
      gateway: "Limited — only sees final prompt",
      capsule: "Full data pipeline protection",
      capsuleCheck: true,
    },
    {
      dim: "Deployment flexibility",
      masking: "Varies",
      gateway: "Cloud / SaaS only",
      capsule: "On-premise, air-gapped, cloud, hybrid, embedded",
      capsuleCheck: true,
    },
    {
      dim: "Workflow usability",
      masking: "Protects data while reducing output value",
      gateway: "Blocks or passes, no transformation",
      capsule: "Built for usable AI outputs",
      capsuleCheck: true,
    },
    {
      dim: "Audit & governance",
      masking: "Limited traceability",
      gateway: "Prompt-level logging",
      capsule: "Complete audit trail",
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
          text-wrap: balance;
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
              <h2 className="s12-header__title">
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
})
