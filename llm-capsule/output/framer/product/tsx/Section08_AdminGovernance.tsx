import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  body?: string
  feature1Title?: string
  feature1Desc?: string
  feature2Title?: string
  feature2Desc?: string
  feature3Title?: string
  feature3Desc?: string
  feature4Title?: string
  feature4Desc?: string
  feature5Title?: string
  feature5Desc?: string
  feature6Title?: string
  feature6Desc?: string
}

export default function Section08_AdminGovernance({
  sectionTitle = "Operational control for enterprise AI",
  sectionTitleBrand = "governance",
  sectionDescription = "Enterprise deployment requires more than transformation logic. Teams need policy control, access control, activity visibility, and auditability.",
  body = "Enterprise AI governance requires evidence of data protection at every stage — what data was processed, how it was protected, which models interacted with it, and who authorized the workflow. LLM Capsule's admin capabilities provide this auditability across all AI interactions.",
  feature1Title = "RBAC",
  feature1Desc = "Role-based access control for teams and workflows. Define who can configure policies, process documents, and view audit records.",
  feature2Title = "Policy Management",
  feature2Desc = "Define and enforce encapsulation policies per team, data type, document classification, or workflow context.",
  feature3Title = "Audit Logs",
  feature3Desc = "Full traceability of every encapsulation, AI processing, and restoration event. Supports compliance reporting and regulatory review.",
  feature4Title = "Token Usage Visibility",
  feature4Desc = "Monitor token consumption and cost across all AI model interactions. Optimize usage and track spending by team or workflow.",
  feature5Title = "Detection Logs",
  feature5Desc = "Visibility into what was detected as sensitive, how it was classified, and how the protection policy was applied.",
  feature6Title = "Operational Monitoring",
  feature6Desc = "Compare and monitor processing across multiple AI models. Centralized visibility into system health and throughput.",
}: Props) {
  const features = [
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
      title: feature1Title,
      desc: feature1Desc,
    },
    {
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>,
      title: feature2Title,
      desc: feature2Desc,
    },
    {
      icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
      title: feature3Title,
      desc: feature3Desc,
    },
    {
      icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
      title: feature4Title,
      desc: feature4Desc,
    },
    {
      icon: <><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1"/></>,
      title: feature5Title,
      desc: feature5Desc,
    },
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
      title: feature6Title,
      desc: feature6Desc,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s8-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s8-inner { width: 100%; container-type: inline-size; }
        .s8-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s8-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s8-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s8-container { padding: 0 120px; max-width: 1440px; } }

        .s8-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s8-header { text-align: left; } }
        .s8-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s8-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s8-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s8-header__title { font-size: 28px; } }
        .s8-header__brand { color: ${PALETTE.brandSecondary}; }
        .s8-header__desc {
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
        @container (min-width: 1024px) { .s8-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s8-header__desc { max-width: 1080px; } }

        .s8-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 32px;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s8-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s8-body { max-width: 1080px; } }

        /* Feature Grid */
        .s8-feature-grid {
          background-color: ${PALETTE.white};
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 40px;
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 48px;
        }
        @container (max-width: 767px) {
          .s8-feature-grid { grid-template-columns: 1fr; padding: 24px; }
        }
        .s8-feature-item { display: flex; flex-direction: column; gap: 8px; }
        .s8-feature-icon { margin-bottom: 4px; color: ${PALETTE.brandSecondary}; }
        .s8-feature-icon svg {
          width: 24px; height: 24px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s8-feature-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          margin: 0;
        }
        .s8-feature-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s8-section" id="section-7">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-header">
              <h2 className="s8-header__title">
                {sectionTitle} <span className="s8-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s8-header__desc">{sectionDescription}</p>
            </div>

            <p className="s8-body">{body}</p>

            <div className="s8-feature-grid">
              {features.map((f, i) => (
                <div key={i} className="s8-feature-item">
                  <div className="s8-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <h3 className="s8-feature-title">{f.title}</h3>
                  <p className="s8-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_AdminGovernance, {
  sectionTitle:       { type: ControlType.String, title: "Title",            defaultValue: "Operational control for enterprise AI" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)",    defaultValue: "governance" },
  sectionDescription: { type: ControlType.String, title: "Description",      defaultValue: "Enterprise deployment requires more than transformation logic. Teams need policy control, access control, activity visibility, and auditability.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",             defaultValue: "Enterprise AI governance requires evidence of data protection at every stage — what data was processed, how it was protected, which models interacted with it, and who authorized the workflow. LLM Capsule's admin capabilities provide this auditability across all AI interactions.", displayTextArea: true },
  feature1Title:      { type: ControlType.String, title: "Feature 1 Title",  defaultValue: "RBAC" },
  feature1Desc:       { type: ControlType.String, title: "Feature 1 Desc",   defaultValue: "Role-based access control for teams and workflows. Define who can configure policies, process documents, and view audit records.", displayTextArea: true },
  feature2Title:      { type: ControlType.String, title: "Feature 2 Title",  defaultValue: "Policy Management" },
  feature2Desc:       { type: ControlType.String, title: "Feature 2 Desc",   defaultValue: "Define and enforce encapsulation policies per team, data type, document classification, or workflow context.", displayTextArea: true },
  feature3Title:      { type: ControlType.String, title: "Feature 3 Title",  defaultValue: "Audit Logs" },
  feature3Desc:       { type: ControlType.String, title: "Feature 3 Desc",   defaultValue: "Full traceability of every encapsulation, AI processing, and restoration event. Supports compliance reporting and regulatory review.", displayTextArea: true },
  feature4Title:      { type: ControlType.String, title: "Feature 4 Title",  defaultValue: "Token Usage Visibility" },
  feature4Desc:       { type: ControlType.String, title: "Feature 4 Desc",   defaultValue: "Monitor token consumption and cost across all AI model interactions. Optimize usage and track spending by team or workflow.", displayTextArea: true },
  feature5Title:      { type: ControlType.String, title: "Feature 5 Title",  defaultValue: "Detection Logs" },
  feature5Desc:       { type: ControlType.String, title: "Feature 5 Desc",   defaultValue: "Visibility into what was detected as sensitive, how it was classified, and how the protection policy was applied.", displayTextArea: true },
  feature6Title:      { type: ControlType.String, title: "Feature 6 Title",  defaultValue: "Operational Monitoring" },
  feature6Desc:       { type: ControlType.String, title: "Feature 6 Desc",   defaultValue: "Compare and monitor processing across multiple AI models. Centralized visibility into system health and throughput.", displayTextArea: true },
})
