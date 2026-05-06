import { addPropertyControls, ControlType } from "framer"

// Section 03 — Feature Comparison Matrix
// CMS: PricingFeature collection
// Props: sectionEyebrow, sectionTitle, sectionDesc + 12 rows × 4 columns

interface Props {
  sectionEyebrow?: string
  sectionTitle?:   string
  sectionDesc?:    string

  // Column headers
  colFeature?:  string
  colPov?:      string
  colEnt?:      string
  colAws?:      string

  // Row 1: Document volume
  r1Feature?:  string
  r1Pov?:      string
  r1Ent?:      string
  r1Aws?:      string

  // Row 2: Execution paths
  r2Feature?:  string
  r2Pov?:      string
  r2Ent?:      string
  r2Aws?:      string

  // Row 3: 6 capability set
  r3Feature?:  string
  r3Pov?:      string
  r3Ent?:      string
  r3Aws?:      string

  // Row 4: Custom marker definition
  r4Feature?:  string
  r4Pov?:      string
  r4Ent?:      string
  r4Aws?:      string

  // Row 5: Policy versioning + audit
  r5Feature?:  string
  r5Pov?:      string
  r5Ent?:      string
  r5Aws?:      string

  // Row 6: RBAC + per-team scope
  r6Feature?:  string
  r6Pov?:      string
  r6Ent?:      string
  r6Aws?:      string

  // Row 7: Deployment modes
  r7Feature?:  string
  r7Pov?:      string
  r7Ent?:      string
  r7Aws?:      string

  // Row 8: Connector library
  r8Feature?:  string
  r8Pov?:      string
  r8Ent?:      string
  r8Aws?:      string

  // Row 9: Compliance frameworks
  r9Feature?:  string
  r9Pov?:      string
  r9Ent?:      string
  r9Aws?:      string

  // Row 10: SLA
  r10Feature?: string
  r10Pov?:     string
  r10Ent?:     string
  r10Aws?:     string

  // Row 11: Support
  r11Feature?: string
  r11Pov?:     string
  r11Ent?:     string
  r11Aws?:     string

  // Row 12: DPA + Vendor Security Questionnaire
  r12Feature?: string
  r12Pov?:     string
  r12Ent?:     string
  r12Aws?:     string
}

export default function Section03_FeatureMatrix({
  sectionEyebrow = "Feature comparison",
  sectionTitle   = "What's included in each tier",
  sectionDesc    = "All three tiers include the full capability set. Differences are in scope, support, and procurement path.",

  colFeature = "Feature",
  colPov     = "Proof of Value",
  colEnt     = "Enterprise",
  colAws     = "AWS Marketplace",

  r1Feature  = "Document volume",
  r1Pov      = "Evaluation scope",
  r1Ent      = "Unlimited",
  r1Aws      = "Per AWS contract",

  r2Feature  = "Execution paths (A external + B on-prem)",
  r2Pov      = "Both",
  r2Ent      = "Both",
  r2Aws      = "Both",

  r3Feature  = "6 capability set including time-shifting policy",
  r3Pov      = "Full",
  r3Ent      = "Full",
  r3Aws      = "Full",

  r4Feature  = "Custom marker definition",
  r4Pov      = "Up to 25",
  r4Ent      = "Unlimited",
  r4Aws      = "Unlimited",

  r5Feature  = "Policy versioning + audit",
  r5Pov      = "90-day retention",
  r5Ent      = "7-year retention",
  r5Aws      = "7-year retention",

  r6Feature  = "RBAC + per-team scope",
  r6Pov      = "Standard",
  r6Ent      = "Advanced (LDAP / SAML / SCIM)",
  r6Aws      = "Advanced",

  r7Feature  = "Deployment modes",
  r7Pov      = "On-prem / VPC",
  r7Ent      = "All 6 modes",
  r7Aws      = "VPC (AWS)",

  r8Feature  = "Connector library",
  r8Pov      = "Standard 12",
  r8Ent      = "Standard + custom",
  r8Aws      = "Standard 12",

  r9Feature  = "Compliance frameworks",
  r9Pov      = "GDPR / HIPAA",
  r9Ent      = "GDPR / HIPAA / SOX / EU AI Act",
  r9Aws      = "GDPR / HIPAA / SOX",

  r10Feature = "SLA",
  r10Pov     = "Best-effort",
  r10Ent     = "99.9% uptime, defined response time",
  r10Aws     = "Per AWS contract",

  r11Feature = "Support",
  r11Pov     = "Email / Slack",
  r11Ent     = "Dedicated CSM, 24/7 P1 channel",
  r11Aws     = "Email / Slack + AWS",

  r12Feature = "DPA + Vendor Security Questionnaire",
  r12Pov     = "Provided",
  r12Ent     = "Provided + executed",
  r12Aws     = "AWS standard",
}: Props) {

  const rows = [
    { feature: r1Feature,  pov: r1Pov,  ent: r1Ent,  aws: r1Aws,  entYes: true, povYes: false, awsYes: false },
    { feature: r2Feature,  pov: r2Pov,  ent: r2Ent,  aws: r2Aws,  entYes: true, povYes: true,  awsYes: true },
    { feature: r3Feature,  pov: r3Pov,  ent: r3Ent,  aws: r3Aws,  entYes: true, povYes: true,  awsYes: true },
    { feature: r4Feature,  pov: r4Pov,  ent: r4Ent,  aws: r4Aws,  entYes: true, povYes: true,  awsYes: true },
    { feature: r5Feature,  pov: r5Pov,  ent: r5Ent,  aws: r5Aws,  entYes: true, povYes: true,  awsYes: true },
    { feature: r6Feature,  pov: r6Pov,  ent: r6Ent,  aws: r6Aws,  entYes: true, povYes: true,  awsYes: true },
    { feature: r7Feature,  pov: r7Pov,  ent: r7Ent,  aws: r7Aws,  entYes: true, povYes: false, awsYes: false },
    { feature: r8Feature,  pov: r8Pov,  ent: r8Ent,  aws: r8Aws,  entYes: true, povYes: false, awsYes: false },
    { feature: r9Feature,  pov: r9Pov,  ent: r9Ent,  aws: r9Aws,  entYes: true, povYes: false, awsYes: false },
    { feature: r10Feature, pov: r10Pov, ent: r10Ent, aws: r10Aws, entYes: true, povYes: false, awsYes: false },
    { feature: r11Feature, pov: r11Pov, ent: r11Ent, aws: r11Aws, entYes: true, povYes: false, awsYes: false },
    { feature: r12Feature, pov: r12Pov, ent: r12Ent, aws: r12Aws, entYes: true, povYes: true,  awsYes: true },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s3-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s3-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s3-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s3-h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .s3-desc {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s3-table-wrap {
          overflow-x: auto;
          scrollbar-width: none;
          border-radius: var(--r-md, 10px);
          border: 1px solid var(--c-rule, #e5e7eb);
        }
        .s3-table-wrap::-webkit-scrollbar { display: none; }

        .s3-table {
          width: 100%;
          border-collapse: collapse;
          background-color: var(--c-bg, #ffffff);
          min-width: 640px;
          table-layout: fixed;
        }

        .s3-table th,
        .s3-table td {
          padding: 14px 16px;
          text-align: left;
          font-size: 13px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-table th {
          background-color: var(--c-bg-soft, #f7f8fb);
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .s3-th-featured {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
        }

        .s3-td-feature {
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          width: 25%;
          background-color: var(--c-bg-soft, #f7f8fb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-td-yes {
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
        }

        .s3-td-featured {
          background-color: var(--c-primary-soft, #eeebfe);
        }

        .s3-td-featured.s3-td-yes {
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
        }

        .s3-table tbody tr:last-child td {
          border-bottom: none;
        }

        @container (min-width: 1024px) {
          .s3-table th,
          .s3-table td {
            padding: 16px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section" id="section-3">
          <div className="s3-container">
            <div className="s3-header">
              <span className="s3-eyebrow">{sectionEyebrow}</span>
              <h2 className="s3-h2">{sectionTitle}</h2>
              <p className="s3-desc">{sectionDesc}</p>
            </div>

            <div className="s3-table-wrap">
              <table className="s3-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">{colFeature}</th>
                    <th scope="col">{colPov}</th>
                    <th scope="col" className="s3-th-featured">{colEnt}</th>
                    <th scope="col">{colAws}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td className="s3-td-feature">{row.feature}</td>
                      <td className={row.povYes ? "s3-td-yes" : ""}>{row.pov}</td>
                      <td className={`s3-td-featured${row.entYes ? " s3-td-yes" : ""}`}>{row.ent}</td>
                      <td className={row.awsYes ? "s3-td-yes" : ""}>{row.aws}</td>
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

addPropertyControls(Section03_FeatureMatrix, {
  sectionEyebrow: { type: ControlType.String, title: "Eyebrow",      defaultValue: "Feature comparison" },
  sectionTitle:   { type: ControlType.String, title: "Title",        defaultValue: "What's included in each tier" },
  sectionDesc:    { type: ControlType.String, title: "Description",  defaultValue: "All three tiers include the full capability set. Differences are in scope, support, and procurement path.", displayTextArea: true },

  colFeature: { type: ControlType.String, title: "Col: Feature",         defaultValue: "Feature" },
  colPov:     { type: ControlType.String, title: "Col: Proof of Value",  defaultValue: "Proof of Value" },
  colEnt:     { type: ControlType.String, title: "Col: Enterprise",      defaultValue: "Enterprise" },
  colAws:     { type: ControlType.String, title: "Col: AWS Marketplace", defaultValue: "AWS Marketplace" },

  r1Feature:  { type: ControlType.String, title: "R1 Feature",  defaultValue: "Document volume" },
  r1Pov:      { type: ControlType.String, title: "R1 PoV",      defaultValue: "Evaluation scope" },
  r1Ent:      { type: ControlType.String, title: "R1 Ent",      defaultValue: "Unlimited" },
  r1Aws:      { type: ControlType.String, title: "R1 AWS",      defaultValue: "Per AWS contract" },

  r2Feature:  { type: ControlType.String, title: "R2 Feature",  defaultValue: "Execution paths (A external + B on-prem)" },
  r2Pov:      { type: ControlType.String, title: "R2 PoV",      defaultValue: "Both" },
  r2Ent:      { type: ControlType.String, title: "R2 Ent",      defaultValue: "Both" },
  r2Aws:      { type: ControlType.String, title: "R2 AWS",      defaultValue: "Both" },

  r3Feature:  { type: ControlType.String, title: "R3 Feature",  defaultValue: "6 capability set including time-shifting policy" },
  r3Pov:      { type: ControlType.String, title: "R3 PoV",      defaultValue: "Full" },
  r3Ent:      { type: ControlType.String, title: "R3 Ent",      defaultValue: "Full" },
  r3Aws:      { type: ControlType.String, title: "R3 AWS",      defaultValue: "Full" },

  r4Feature:  { type: ControlType.String, title: "R4 Feature",  defaultValue: "Custom marker definition" },
  r4Pov:      { type: ControlType.String, title: "R4 PoV",      defaultValue: "Up to 25" },
  r4Ent:      { type: ControlType.String, title: "R4 Ent",      defaultValue: "Unlimited" },
  r4Aws:      { type: ControlType.String, title: "R4 AWS",      defaultValue: "Unlimited" },

  r5Feature:  { type: ControlType.String, title: "R5 Feature",  defaultValue: "Policy versioning + audit" },
  r5Pov:      { type: ControlType.String, title: "R5 PoV",      defaultValue: "90-day retention" },
  r5Ent:      { type: ControlType.String, title: "R5 Ent",      defaultValue: "7-year retention" },
  r5Aws:      { type: ControlType.String, title: "R5 AWS",      defaultValue: "7-year retention" },

  r6Feature:  { type: ControlType.String, title: "R6 Feature",  defaultValue: "RBAC + per-team scope" },
  r6Pov:      { type: ControlType.String, title: "R6 PoV",      defaultValue: "Standard" },
  r6Ent:      { type: ControlType.String, title: "R6 Ent",      defaultValue: "Advanced (LDAP / SAML / SCIM)" },
  r6Aws:      { type: ControlType.String, title: "R6 AWS",      defaultValue: "Advanced" },

  r7Feature:  { type: ControlType.String, title: "R7 Feature",  defaultValue: "Deployment modes" },
  r7Pov:      { type: ControlType.String, title: "R7 PoV",      defaultValue: "On-prem / VPC" },
  r7Ent:      { type: ControlType.String, title: "R7 Ent",      defaultValue: "All 6 modes" },
  r7Aws:      { type: ControlType.String, title: "R7 AWS",      defaultValue: "VPC (AWS)" },

  r8Feature:  { type: ControlType.String, title: "R8 Feature",  defaultValue: "Connector library" },
  r8Pov:      { type: ControlType.String, title: "R8 PoV",      defaultValue: "Standard 12" },
  r8Ent:      { type: ControlType.String, title: "R8 Ent",      defaultValue: "Standard + custom" },
  r8Aws:      { type: ControlType.String, title: "R8 AWS",      defaultValue: "Standard 12" },

  r9Feature:  { type: ControlType.String, title: "R9 Feature",  defaultValue: "Compliance frameworks" },
  r9Pov:      { type: ControlType.String, title: "R9 PoV",      defaultValue: "GDPR / HIPAA" },
  r9Ent:      { type: ControlType.String, title: "R9 Ent",      defaultValue: "GDPR / HIPAA / SOX / EU AI Act" },
  r9Aws:      { type: ControlType.String, title: "R9 AWS",      defaultValue: "GDPR / HIPAA / SOX" },

  r10Feature: { type: ControlType.String, title: "R10 Feature", defaultValue: "SLA" },
  r10Pov:     { type: ControlType.String, title: "R10 PoV",     defaultValue: "Best-effort" },
  r10Ent:     { type: ControlType.String, title: "R10 Ent",     defaultValue: "99.9% uptime, defined response time" },
  r10Aws:     { type: ControlType.String, title: "R10 AWS",     defaultValue: "Per AWS contract" },

  r11Feature: { type: ControlType.String, title: "R11 Feature", defaultValue: "Support" },
  r11Pov:     { type: ControlType.String, title: "R11 PoV",     defaultValue: "Email / Slack" },
  r11Ent:     { type: ControlType.String, title: "R11 Ent",     defaultValue: "Dedicated CSM, 24/7 P1 channel" },
  r11Aws:     { type: ControlType.String, title: "R11 AWS",     defaultValue: "Email / Slack + AWS" },

  r12Feature: { type: ControlType.String, title: "R12 Feature", defaultValue: "DPA + Vendor Security Questionnaire" },
  r12Pov:     { type: ControlType.String, title: "R12 PoV",     defaultValue: "Provided" },
  r12Ent:     { type: ControlType.String, title: "R12 Ent",     defaultValue: "Provided + executed" },
  r12Aws:     { type: ControlType.String, title: "R12 AWS",     defaultValue: "AWS standard" },
})
