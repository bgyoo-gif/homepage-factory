import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  // Source systems
  ss1Name?: string; ss1Conn?: string
  ss2Name?: string; ss2Conn?: string
  ss3Name?: string; ss3Conn?: string
  ss4Name?: string; ss4Conn?: string
  ss5Name?: string; ss5Conn?: string
  ss6Name?: string; ss6Conn?: string
  sourceNote?: string
  // Integration interfaces
  ifaceEyebrow?: string
  ifaceTitle?: string
  ifaceDesc?: string
  if1Name?: string; if1Desc?: string
  if2Name?: string; if2Desc?: string
  if3Name?: string; if3Desc?: string
  if4Name?: string; if4Desc?: string
  if5Name?: string; if5Desc?: string
  if6Name?: string; if6Desc?: string
}

export default function Section07_Integration({
  eyebrow = "In-environment integration",
  title = "Reads the systems you already run — without modifying them",
  description = "LLM Capsule is not a SaaS API you call from outside. It runs inside your environment and reads from the operational systems already in place. Existing systems are not modified — a single API-call addition is what connects them to the encapsulation layer.",
  ss1Name = "ERP System", ss1Conn = "SAP / Oracle — REST API",
  ss2Name = "CRM", ss2Conn = "Salesforce — REST API",
  ss3Name = "Ticketing", ss3Conn = "Jira / ServiceNow — REST API",
  ss4Name = "DMS / ECM", ss4Conn = "SharePoint — Graph API",
  ss5Name = "Legacy DB", ss5Conn = "Oracle / MSSQL — JDBC → API",
  ss6Name = "RAG Pipeline", ss6Conn = "Vector DB — gRPC / REST",
  sourceNote = "These six are the source-system identities mapped in the diagram_v8 reference. Existing enterprise systems are not modified — connection is a single API-call addition. Raw operational data does not leave the environment to reach Capsule; the Capsule sits next to these systems, on-prem or in your VPC.",
  ifaceEyebrow = "Integration interfaces",
  ifaceTitle = "How existing systems invoke Capsule from inside the environment",
  ifaceDesc = "Once Capsule is deployed inside the environment, existing enterprise systems invoke it through whichever interface fits their stack. All interfaces stay inside the customer network — none of them route raw operational data through an external SaaS endpoint.",
  if1Name = "REST / gRPC", if1Desc = "For modern operations tools, RAG pipelines, and custom orchestrators inside the environment.",
  if2Name = "JDBC / ODBC", if2Desc = "For legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step.",
  if3Name = "Graph API", if3Desc = "For DMS / ECM systems (e.g. SharePoint) where document events trigger Capsule processing.",
  if4Name = "On-prem API", if4Desc = "Capsule's own on-prem callable surface. Same contract whether you're air-gapped, hybrid, or VPC.",
  if5Name = "Embedded SDK", if5Desc = "Library-level integration for ISVs and platform vendors who ship Capsule inside their own product.",
  if6Name = "Slack App", if6Desc = "For teams using Slack as the operations UI. The runtime still lives in the customer environment; the Slack App is the invocation surface.",
}: Props) {
  const sourceSystems = [
    { name: ss1Name, conn: ss1Conn },
    { name: ss2Name, conn: ss2Conn },
    { name: ss3Name, conn: ss3Conn },
    { name: ss4Name, conn: ss4Conn },
    { name: ss5Name, conn: ss5Conn },
    { name: ss6Name, conn: ss6Conn },
  ]

  const interfaces = [
    { name: if1Name, desc: if1Desc },
    { name: if2Name, desc: if2Desc },
    { name: if3Name, desc: if3Desc },
    { name: if4Name, desc: if4Desc },
    { name: if5Name, desc: if5Desc },
    { name: if6Name, desc: if6Desc },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s7-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s7-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg, #ffffff); }

        .s7-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s7-header { text-align: center; margin-bottom: 48px; }

        .s7-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s7-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s7-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s7-sources {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .s7-source {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 14px 16px;
        }

        .s7-source__name {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .s7-source__conn {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          color: var(--c-muted, #6b7280);
          line-height: 1.5;
        }

        .s7-note {
          margin-top: 24px;
          font-size: 14px;
          color: var(--c-muted, #6b7280);
          text-align: center;
          line-height: 1.6;
        }

        .s7-iface-section { margin-top: 56px; }

        .s7-iface-header { margin-bottom: 24px; }

        .s7-iface-header h3 {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .s7-iface-header p {
          font-size: 15px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          max-width: 720px;
        }

        .s7-ifaces {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .s7-iface {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 14px 16px;
        }

        .s7-iface__name {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .s7-iface__desc {
          font-size: 12px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        @container (min-width: 768px) {
          .s7-sources { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .s7-ifaces { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s7-sources { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .s7-ifaces { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s7-root">
        <section className="s7-section">
          <div className="s7-container">
            <header className="s7-header">
              <div className="s7-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s7-sources">
              {sourceSystems.map((s, i) => (
                <div key={i} className="s7-source">
                  <div className="s7-source__name">{s.name}</div>
                  <div className="s7-source__conn">{s.conn}</div>
                </div>
              ))}
            </div>

            <p className="s7-note">{sourceNote}</p>

            <div className="s7-iface-section">
              <div className="s7-iface-header">
                <div className="s7-eyebrow">{ifaceEyebrow}</div>
                <h3>{ifaceTitle}</h3>
                <p>{ifaceDesc}</p>
              </div>
              <div className="s7-ifaces">
                {interfaces.map((iface, i) => (
                  <div key={i} className="s7-iface">
                    <div className="s7-iface__name">{iface.name}</div>
                    <div className="s7-iface__desc">{iface.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_Integration, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "In-environment integration" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Reads the systems you already run — without modifying them" },
  description: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule is not a SaaS API you call from outside. It runs inside your environment and reads from the operational systems already in place. Existing systems are not modified — a single API-call addition is what connects them to the encapsulation layer." },
  ss1Name: { type: ControlType.String, title: "Source 1 Name", defaultValue: "ERP System" },
  ss1Conn: { type: ControlType.String, title: "Source 1 Conn", defaultValue: "SAP / Oracle — REST API" },
  ss2Name: { type: ControlType.String, title: "Source 2 Name", defaultValue: "CRM" },
  ss2Conn: { type: ControlType.String, title: "Source 2 Conn", defaultValue: "Salesforce — REST API" },
  ss3Name: { type: ControlType.String, title: "Source 3 Name", defaultValue: "Ticketing" },
  ss3Conn: { type: ControlType.String, title: "Source 3 Conn", defaultValue: "Jira / ServiceNow — REST API" },
  ss4Name: { type: ControlType.String, title: "Source 4 Name", defaultValue: "DMS / ECM" },
  ss4Conn: { type: ControlType.String, title: "Source 4 Conn", defaultValue: "SharePoint — Graph API" },
  ss5Name: { type: ControlType.String, title: "Source 5 Name", defaultValue: "Legacy DB" },
  ss5Conn: { type: ControlType.String, title: "Source 5 Conn", defaultValue: "Oracle / MSSQL — JDBC → API" },
  ss6Name: { type: ControlType.String, title: "Source 6 Name", defaultValue: "RAG Pipeline" },
  ss6Conn: { type: ControlType.String, title: "Source 6 Conn", defaultValue: "Vector DB — gRPC / REST" },
  sourceNote: { type: ControlType.String, title: "Source Note", defaultValue: "These six are the source-system identities mapped in the diagram_v8 reference. Existing enterprise systems are not modified — connection is a single API-call addition. Raw operational data does not leave the environment to reach Capsule; the Capsule sits next to these systems, on-prem or in your VPC." },
  ifaceEyebrow: { type: ControlType.String, title: "Iface Eyebrow", defaultValue: "Integration interfaces" },
  ifaceTitle: { type: ControlType.String, title: "Iface Title", defaultValue: "How existing systems invoke Capsule from inside the environment" },
  ifaceDesc: { type: ControlType.String, title: "Iface Desc", defaultValue: "Once Capsule is deployed inside the environment, existing enterprise systems invoke it through whichever interface fits their stack. All interfaces stay inside the customer network — none of them route raw operational data through an external SaaS endpoint." },
  if1Name: { type: ControlType.String, title: "Iface 1 Name", defaultValue: "REST / gRPC" },
  if1Desc: { type: ControlType.String, title: "Iface 1 Desc", defaultValue: "For modern operations tools, RAG pipelines, and custom orchestrators inside the environment." },
  if2Name: { type: ControlType.String, title: "Iface 2 Name", defaultValue: "JDBC / ODBC" },
  if2Desc: { type: ControlType.String, title: "Iface 2 Desc", defaultValue: "For legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step." },
  if3Name: { type: ControlType.String, title: "Iface 3 Name", defaultValue: "Graph API" },
  if3Desc: { type: ControlType.String, title: "Iface 3 Desc", defaultValue: "For DMS / ECM systems (e.g. SharePoint) where document events trigger Capsule processing." },
  if4Name: { type: ControlType.String, title: "Iface 4 Name", defaultValue: "On-prem API" },
  if4Desc: { type: ControlType.String, title: "Iface 4 Desc", defaultValue: "Capsule's own on-prem callable surface. Same contract whether you're air-gapped, hybrid, or VPC." },
  if5Name: { type: ControlType.String, title: "Iface 5 Name", defaultValue: "Embedded SDK" },
  if5Desc: { type: ControlType.String, title: "Iface 5 Desc", defaultValue: "Library-level integration for ISVs and platform vendors who ship Capsule inside their own product." },
  if6Name: { type: ControlType.String, title: "Iface 6 Name", defaultValue: "Slack App" },
  if6Desc: { type: ControlType.String, title: "Iface 6 Desc", defaultValue: "For teams using Slack as the operations UI. The runtime still lives in the customer environment; the Slack App is the invocation surface." },
})
