import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  description?: string
  // Row 1
  r1cap?: string; r1gdpr?: string; r1gdprNote?: string; r1hipaa?: string; r1hipaaNote?: string; r1sox?: string; r1soxNote?: string; r1eu?: string; r1euNote?: string
  // Row 2
  r2cap?: string; r2gdpr?: string; r2gdprNote?: string; r2hipaa?: string; r2hipaaNote?: string; r2sox?: string; r2soxNote?: string; r2eu?: string; r2euNote?: string
  // Row 3
  r3cap?: string; r3gdpr?: string; r3gdprNote?: string; r3hipaa?: string; r3hipaaNote?: string; r3sox?: string; r3soxNote?: string; r3eu?: string; r3euNote?: string
  // Row 4
  r4cap?: string; r4gdpr?: string; r4gdprNote?: string; r4hipaa?: string; r4hipaaNote?: string; r4sox?: string; r4soxNote?: string; r4eu?: string; r4euNote?: string
  // Row 5
  r5cap?: string; r5gdpr?: string; r5gdprNote?: string; r5hipaa?: string; r5hipaaNote?: string; r5sox?: string; r5soxNote?: string; r5eu?: string; r5euNote?: string
  // Row 6
  r6cap?: string; r6gdpr?: string; r6gdprNote?: string; r6hipaa?: string; r6hipaaNote?: string; r6sox?: string; r6soxNote?: string; r6eu?: string; r6euNote?: string
  // Row 7
  r7cap?: string; r7gdpr?: string; r7gdprNote?: string; r7hipaa?: string; r7hipaaNote?: string; r7sox?: string; r7soxNote?: string; r7eu?: string; r7euNote?: string
  // Header labels
  thCap?: string; thGdpr?: string; thHipaa?: string; thSox?: string; thEu?: string
}

export default function Section03_ComplianceMatrix({
  eyebrow = "Compliance frameworks",
  heading = "How LLM Capsule capabilities map to GDPR / HIPAA / SOX / EU AI Act review workflows",
  description = "LLM Capsule provides architectural controls that support GDPR, HIPAA, SOX, and EU AI Act review workflows. The matrix below maps each capability to the relevant article or section so compliance, security, and procurement teams have a starting reference. This is not a compliance certification — final compliance determination is the customer's, in their own deployment context.",
  thCap = "LLM Capsule capability", thGdpr = "GDPR", thHipaa = "HIPAA", thSox = "SOX", thEu = "EU AI Act",
  r1cap = "Local encapsulation (data never leaves)",
  r1gdpr = "Art. 5 (lawfulness), Art. 32 (security of processing)", r1gdprNote = "Pseudonymization before transmission",
  r1hipaa = "164.502(d), 164.514(b)", r1hipaaNote = "De-identification methodology",
  r1sox = "Section 404", r1soxNote = "Internal control over data flow",
  r1eu = "Art. 10 (data governance), Art. 15 (cybersecurity)", r1euNote = "Data quality and protection requirements",
  r2cap = "Local restoration (token vault)",
  r2gdpr = "Art. 32", r2gdprNote = "Pseudonymization is reversible only inside controlled environment",
  r2hipaa = "164.514(c)", r2hipaaNote = "Re-identification key separation",
  r2sox = "Section 404", r2soxNote = "Authorized re-identification only",
  r2eu = "Art. 10", r2euNote = "Reversibility for legitimate use only",
  r3cap = "Audit logs (every event)",
  r3gdpr = "Art. 30", r3gdprNote = "Records of processing activities",
  r3hipaa = "164.312(b)", r3hipaaNote = "Audit controls",
  r3sox = "Section 404, 802", r3soxNote = "Internal control + record retention",
  r3eu = "Art. 12, 13, 19", r3euNote = "Logging, transparency, conformity",
  r4cap = "Policy versioning + time-shifting",
  r4gdpr = "Art. 5(2), 24", r4gdprNote = "Accountability principle",
  r4hipaa = "164.316", r4hipaaNote = "Policies and procedures",
  r4sox = "Section 302, 404", r4soxNote = "Internal control over policy changes",
  r4eu = "Art. 17, 18", r4euNote = "Quality and risk management system",
  r5cap = "RBAC + scope",
  r5gdpr = "Art. 32", r5gdprNote = "Access control",
  r5hipaa = "164.308(a)(4), 164.312(a)", r5hipaaNote = "Workforce security + access control",
  r5sox = "Section 404", r5soxNote = "Segregation of duties",
  r5eu = "Art. 14", r5euNote = "Human oversight",
  r6cap = "On-prem / Path B execution",
  r6gdpr = "Art. 44, Chapter V", r6gdprNote = "International transfer restriction (avoidance)",
  r6hipaa = "164.308(a)(8)", r6hipaaNote = "Contingency plan, environment control",
  r6sox = "Section 404", r6soxNote = "Environment control",
  r6eu = "Art. 25", r6euNote = "Conformity assessment when high-risk",
  r7cap = "DPA, SCCs, Vendor Security",
  r7gdpr = "Art. 28", r7gdprNote = "Processor obligations",
  r7hipaa = "BAA equivalent", r7hipaaNote = "Business associate framework",
  r7sox = "Auditor reliance", r7soxNote = "Vendor management",
  r7eu = "Art. 28", r7euNote = "Provider obligations",
}: Props) {

  const rows = [
    { cap: r1cap, gdpr: r1gdpr, gdprNote: r1gdprNote, hipaa: r1hipaa, hipaaNote: r1hipaaNote, sox: r1sox, soxNote: r1soxNote, eu: r1eu, euNote: r1euNote },
    { cap: r2cap, gdpr: r2gdpr, gdprNote: r2gdprNote, hipaa: r2hipaa, hipaaNote: r2hipaaNote, sox: r2sox, soxNote: r2soxNote, eu: r2eu, euNote: r2euNote },
    { cap: r3cap, gdpr: r3gdpr, gdprNote: r3gdprNote, hipaa: r3hipaa, hipaaNote: r3hipaaNote, sox: r3sox, soxNote: r3soxNote, eu: r3eu, euNote: r3euNote },
    { cap: r4cap, gdpr: r4gdpr, gdprNote: r4gdprNote, hipaa: r4hipaa, hipaaNote: r4hipaaNote, sox: r4sox, soxNote: r4soxNote, eu: r4eu, euNote: r4euNote },
    { cap: r5cap, gdpr: r5gdpr, gdprNote: r5gdprNote, hipaa: r5hipaa, hipaaNote: r5hipaaNote, sox: r5sox, soxNote: r5soxNote, eu: r5eu, euNote: r5euNote },
    { cap: r6cap, gdpr: r6gdpr, gdprNote: r6gdprNote, hipaa: r6hipaa, hipaaNote: r6hipaaNote, sox: r6sox, soxNote: r6soxNote, eu: r6eu, euNote: r6euNote },
    { cap: r7cap, gdpr: r7gdpr, gdprNote: r7gdprNote, hipaa: r7hipaa, hipaaNote: r7hipaaNote, sox: r7sox, soxNote: r7soxNote, eu: r7eu, euNote: r7euNote },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s3-root { width: 100%; container-type: inline-size; }

        .s3-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s3-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .s3-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s3-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(24px, 2.8cqi, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s3-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(15px, 1.2cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s3-wrap {
          overflow-x: auto;
          scrollbar-width: none;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
        }

        .s3-wrap::-webkit-scrollbar { display: none; }

        .s3-table {
          width: 100%;
          border-collapse: collapse;
          background-color: var(--c-bg, #ffffff);
          table-layout: fixed;
          min-width: 700px;
        }

        .s3-table th,
        .s3-table td {
          padding: 14px 16px;
          text-align: left;
          font-size: 13px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          vertical-align: top;
        }

        .s3-table tr:last-child td { border-bottom: none; }

        .s3-table th {
          background-color: var(--c-bg-soft, #f7f8fb);
          font-size: 11px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          color: var(--c-muted, #6b7280);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .s3-table td:first-child {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          width: 22%;
          background-color: #fafbff;
        }

        .s3-td-main {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 13px;
          color: var(--c-ink, #0f1130);
          line-height: 1.5;
        }

        .s3-td-note {
          display: block;
          color: var(--c-muted, #6b7280);
          font-weight: 400;
          margin-top: 4px;
          font-size: 11px;
          font-style: normal;
        }

        @container (min-width: 900px) {
          .s3-desc { max-width: 860px; }
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section">
          <div className="s3-container">
            <div className="s3-head">
              <div className="s3-eyebrow">{eyebrow}</div>
              <h2 className="s3-h2">{heading}</h2>
              <p className="s3-desc">{description}</p>
            </div>

            <div className="s3-wrap">
              <table className="s3-table">
                <thead>
                  <tr>
                    <th>{thCap}</th>
                    <th>{thGdpr}</th>
                    <th>{thHipaa}</th>
                    <th>{thSox}</th>
                    <th>{thEu}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.cap}</td>
                      <td><span className="s3-td-main">{row.gdpr}</span><small className="s3-td-note">{row.gdprNote}</small></td>
                      <td><span className="s3-td-main">{row.hipaa}</span><small className="s3-td-note">{row.hipaaNote}</small></td>
                      <td><span className="s3-td-main">{row.sox}</span><small className="s3-td-note">{row.soxNote}</small></td>
                      <td><span className="s3-td-main">{row.eu}</span><small className="s3-td-note">{row.euNote}</small></td>
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

addPropertyControls(Section03_ComplianceMatrix, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Compliance frameworks" },
  heading: { type: ControlType.String, title: "Heading", defaultValue: "How LLM Capsule capabilities map to GDPR / HIPAA / SOX / EU AI Act review workflows", displayTextArea: true },
  description: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule provides architectural controls that support GDPR, HIPAA, SOX, and EU AI Act review workflows. The matrix below maps each capability to the relevant article or section so compliance, security, and procurement teams have a starting reference. This is not a compliance certification — final compliance determination is the customer's, in their own deployment context.", displayTextArea: true },
  thCap: { type: ControlType.String, title: "TH: Capability", defaultValue: "LLM Capsule capability" },
  thGdpr: { type: ControlType.String, title: "TH: GDPR", defaultValue: "GDPR" },
  thHipaa: { type: ControlType.String, title: "TH: HIPAA", defaultValue: "HIPAA" },
  thSox: { type: ControlType.String, title: "TH: SOX", defaultValue: "SOX" },
  thEu: { type: ControlType.String, title: "TH: EU AI Act", defaultValue: "EU AI Act" },
  r1cap: { type: ControlType.String, title: "R1 Capability", defaultValue: "Local encapsulation (data never leaves)" },
  r1gdpr: { type: ControlType.String, title: "R1 GDPR", defaultValue: "Art. 5 (lawfulness), Art. 32 (security of processing)" },
  r1gdprNote: { type: ControlType.String, title: "R1 GDPR Note", defaultValue: "Pseudonymization before transmission" },
  r1hipaa: { type: ControlType.String, title: "R1 HIPAA", defaultValue: "164.502(d), 164.514(b)" },
  r1hipaaNote: { type: ControlType.String, title: "R1 HIPAA Note", defaultValue: "De-identification methodology" },
  r1sox: { type: ControlType.String, title: "R1 SOX", defaultValue: "Section 404" },
  r1soxNote: { type: ControlType.String, title: "R1 SOX Note", defaultValue: "Internal control over data flow" },
  r1eu: { type: ControlType.String, title: "R1 EU AI Act", defaultValue: "Art. 10 (data governance), Art. 15 (cybersecurity)" },
  r1euNote: { type: ControlType.String, title: "R1 EU AI Act Note", defaultValue: "Data quality and protection requirements" },
  r2cap: { type: ControlType.String, title: "R2 Capability", defaultValue: "Local restoration (token vault)" },
  r2gdpr: { type: ControlType.String, title: "R2 GDPR", defaultValue: "Art. 32" },
  r2gdprNote: { type: ControlType.String, title: "R2 GDPR Note", defaultValue: "Pseudonymization is reversible only inside controlled environment" },
  r2hipaa: { type: ControlType.String, title: "R2 HIPAA", defaultValue: "164.514(c)" },
  r2hipaaNote: { type: ControlType.String, title: "R2 HIPAA Note", defaultValue: "Re-identification key separation" },
  r2sox: { type: ControlType.String, title: "R2 SOX", defaultValue: "Section 404" },
  r2soxNote: { type: ControlType.String, title: "R2 SOX Note", defaultValue: "Authorized re-identification only" },
  r2eu: { type: ControlType.String, title: "R2 EU AI Act", defaultValue: "Art. 10" },
  r2euNote: { type: ControlType.String, title: "R2 EU AI Act Note", defaultValue: "Reversibility for legitimate use only" },
  r3cap: { type: ControlType.String, title: "R3 Capability", defaultValue: "Audit logs (every event)" },
  r3gdpr: { type: ControlType.String, title: "R3 GDPR", defaultValue: "Art. 30" },
  r3gdprNote: { type: ControlType.String, title: "R3 GDPR Note", defaultValue: "Records of processing activities" },
  r3hipaa: { type: ControlType.String, title: "R3 HIPAA", defaultValue: "164.312(b)" },
  r3hipaaNote: { type: ControlType.String, title: "R3 HIPAA Note", defaultValue: "Audit controls" },
  r3sox: { type: ControlType.String, title: "R3 SOX", defaultValue: "Section 404, 802" },
  r3soxNote: { type: ControlType.String, title: "R3 SOX Note", defaultValue: "Internal control + record retention" },
  r3eu: { type: ControlType.String, title: "R3 EU AI Act", defaultValue: "Art. 12, 13, 19" },
  r3euNote: { type: ControlType.String, title: "R3 EU AI Act Note", defaultValue: "Logging, transparency, conformity" },
  r4cap: { type: ControlType.String, title: "R4 Capability", defaultValue: "Policy versioning + time-shifting" },
  r4gdpr: { type: ControlType.String, title: "R4 GDPR", defaultValue: "Art. 5(2), 24" },
  r4gdprNote: { type: ControlType.String, title: "R4 GDPR Note", defaultValue: "Accountability principle" },
  r4hipaa: { type: ControlType.String, title: "R4 HIPAA", defaultValue: "164.316" },
  r4hipaaNote: { type: ControlType.String, title: "R4 HIPAA Note", defaultValue: "Policies and procedures" },
  r4sox: { type: ControlType.String, title: "R4 SOX", defaultValue: "Section 302, 404" },
  r4soxNote: { type: ControlType.String, title: "R4 SOX Note", defaultValue: "Internal control over policy changes" },
  r4eu: { type: ControlType.String, title: "R4 EU AI Act", defaultValue: "Art. 17, 18" },
  r4euNote: { type: ControlType.String, title: "R4 EU AI Act Note", defaultValue: "Quality and risk management system" },
  r5cap: { type: ControlType.String, title: "R5 Capability", defaultValue: "RBAC + scope" },
  r5gdpr: { type: ControlType.String, title: "R5 GDPR", defaultValue: "Art. 32" },
  r5gdprNote: { type: ControlType.String, title: "R5 GDPR Note", defaultValue: "Access control" },
  r5hipaa: { type: ControlType.String, title: "R5 HIPAA", defaultValue: "164.308(a)(4), 164.312(a)" },
  r5hipaaNote: { type: ControlType.String, title: "R5 HIPAA Note", defaultValue: "Workforce security + access control" },
  r5sox: { type: ControlType.String, title: "R5 SOX", defaultValue: "Section 404" },
  r5soxNote: { type: ControlType.String, title: "R5 SOX Note", defaultValue: "Segregation of duties" },
  r5eu: { type: ControlType.String, title: "R5 EU AI Act", defaultValue: "Art. 14" },
  r5euNote: { type: ControlType.String, title: "R5 EU AI Act Note", defaultValue: "Human oversight" },
  r6cap: { type: ControlType.String, title: "R6 Capability", defaultValue: "On-prem / Path B execution" },
  r6gdpr: { type: ControlType.String, title: "R6 GDPR", defaultValue: "Art. 44, Chapter V" },
  r6gdprNote: { type: ControlType.String, title: "R6 GDPR Note", defaultValue: "International transfer restriction (avoidance)" },
  r6hipaa: { type: ControlType.String, title: "R6 HIPAA", defaultValue: "164.308(a)(8)" },
  r6hipaaNote: { type: ControlType.String, title: "R6 HIPAA Note", defaultValue: "Contingency plan, environment control" },
  r6sox: { type: ControlType.String, title: "R6 SOX", defaultValue: "Section 404" },
  r6soxNote: { type: ControlType.String, title: "R6 SOX Note", defaultValue: "Environment control" },
  r6eu: { type: ControlType.String, title: "R6 EU AI Act", defaultValue: "Art. 25" },
  r6euNote: { type: ControlType.String, title: "R6 EU AI Act Note", defaultValue: "Conformity assessment when high-risk" },
  r7cap: { type: ControlType.String, title: "R7 Capability", defaultValue: "DPA, SCCs, Vendor Security" },
  r7gdpr: { type: ControlType.String, title: "R7 GDPR", defaultValue: "Art. 28" },
  r7gdprNote: { type: ControlType.String, title: "R7 GDPR Note", defaultValue: "Processor obligations" },
  r7hipaa: { type: ControlType.String, title: "R7 HIPAA", defaultValue: "BAA equivalent" },
  r7hipaaNote: { type: ControlType.String, title: "R7 HIPAA Note", defaultValue: "Business associate framework" },
  r7sox: { type: ControlType.String, title: "R7 SOX", defaultValue: "Auditor reliance" },
  r7soxNote: { type: ControlType.String, title: "R7 SOX Note", defaultValue: "Vendor management" },
  r7eu: { type: ControlType.String, title: "R7 EU AI Act", defaultValue: "Art. 28" },
  r7euNote: { type: ControlType.String, title: "R7 EU AI Act Note", defaultValue: "Provider obligations" },
})
