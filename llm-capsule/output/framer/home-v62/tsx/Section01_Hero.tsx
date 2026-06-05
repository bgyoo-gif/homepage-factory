import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/"

interface Props {
  eyebrow?: string
  h1Line1?: string
  h1Highlight?: string
  h1Suffix?: string
  description?: string
  tag?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  metric1Num?: string
  metric1Label?: string
  metric2Num?: string
  metric2Label?: string
  metric3Num?: string
  metric3Label?: string
  metric4Num?: string
  metric4Label?: string
  heroImage?: string
  tool1Name?: string
  tool1Line1?: string
  tool1Line2?: string
  tool1Line3?: string
  tool2Name?: string
  tool2Line1?: string
  tool2Line2?: string
  tool2Line3?: string
  tool3Name?: string
  tool3Line1?: string
  tool3Line2?: string
  tool3Line3?: string
  tool4Name?: string
  tool4Line1?: string
  tool4Line2?: string
  tool4Line3?: string
  capsuleTitle?: string
  capsuleSub?: string
  capsuleStep1?: string
  capsuleStep2?: string
  capsuleStep3?: string
  capsuleStep4?: string
  capsuleStep5?: string
}

export default function Section01_Hero({
  eyebrow = "CONTEXT-PRESERVING DATA LAYER FOR AI",
  h1Line1 = "Make ",
  h1Highlight = "sensitive workflows",
  h1Suffix = " run with AI.",
  description = "From blocked workflows to operational AI — without breaking documents, systems, or context. LLM Capsule is the context-preserving data layer for AI for regulated enterprise operations. It plugs into the systems you already run — on-premise, air-gapped, or hybrid — and AI receives the operational structure it needs. Sensitive data stays inside your environment. Outputs return business-ready, in the originating workflow.",
  tag = "The context-preserving data layer for AI for regulated operations.",
  cta1Label = "Request a Demo",
  cta1Href = "/request-a-demo",
  cta2Label = "See the Architecture",
  cta2Href = "/architecture",
  metric1Num = "0.12s",
  metric1Label = "Per Page Processing",
  metric2Num = "100%",
  metric2Label = "Restoration Rate",
  metric3Num = "98%",
  metric3Label = "Output Similarity",
  metric4Num = "99.14%",
  metric4Label = "Workflow Accuracy",
  heroImage = "",
  tool1Name = "NOC Console",
  tool1Line1 = "[ALARM] R-472 latency",
  tool1Line2 = "[INCIDENT] INC-24091",
  tool1Line3 = "SLA risk: enterprise",
  tool2Name = "Ticket System",
  tool2Line1 = "INC-24091  packet loss",
  tool2Line2 = "Site: SEO-18",
  tool2Line3 = "Status: escalated",
  tool3Name = "Log Viewer",
  tool3Line1 = "03:21 R-472 spike",
  tool3Line2 = "03:24 SEO-18 loss",
  tool3Line3 = "03:26 escalated",
  tool4Name = "Runbook",
  tool4Line1 = "1. Check device R-472",
  tool4Line2 = "2. Validate config",
  tool4Line3 = "3. Rollback if drift",
  capsuleTitle = "LLM Capsule",
  capsuleSub = "in-environment data layer",
  capsuleStep1 = "▶ Encapsulate",
  capsuleStep2 = "▶ DP transform",
  capsuleStep3 = "▶ Send to AI",
  capsuleStep4 = "▶ Restore",
  capsuleStep5 = "▶ Insert here",
}: Props) {
  const resolvedHeroImage = heroImage || ""

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s1-section {
          background-color: var(--c-bg, #ffffff);
          padding-top: clamp(80px, 10cqi, 140px);
          padding-bottom: clamp(64px, 8cqi, 96px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s1-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @container (min-width: 900px) {
          .s1-grid {
            grid-template-columns: 1.05fr 1fr;
            gap: 64px;
          }
        }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s1-h1 {
          font-size: clamp(36px, 5cqi, 64px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--c-ink, #0f1130);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .s1-h1 strong {
          color: var(--c-primary, #5b4fe9);
          font-weight: 800;
        }

        .s1-sub {
          font-size: clamp(16px, 1.4cqi, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .s1-tag {
          display: inline-block;
          padding: 6px 14px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .s1-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .s1-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
        }

        .s1-btn--primary {
          background: var(--c-ink, #0f1130);
          color: #fff;
        }

        .s1-btn--primary:hover {
          background: var(--c-primary, #5b4fe9);
        }

        .s1-btn--ghost {
          background: transparent;
          color: var(--c-ink, #0f1130);
          border: 1.5px solid var(--c-rule, #e5e7eb);
        }

        .s1-btn--ghost:hover {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary, #5b4fe9);
        }

        .s1-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        @container (min-width: 600px) {
          .s1-metrics {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .s1-metric-num {
          font-size: clamp(22px, 2.4cqi, 30px);
          font-weight: 800;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          margin-bottom: 6px;
        }

        .s1-metric-label {
          font-size: 11px;
          color: var(--c-muted, #6b7280);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .s1-visual {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          padding: 24px;
          box-shadow: 0 12px 48px rgba(15,17,48,0.06);
          overflow: hidden;
        }

        .s1-visual-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--r-md, 10px);
        }

        .s1-hv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 0.85fr;
          gap: 12px;
        }

        .s1-hv-tool {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 12px;
          min-height: 88px;
        }

        .s1-hv-tool__name {
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          color: var(--c-ink, #0f1130);
        }

        .s1-hv-tool__line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 4px;
        }

        .s1-hv-capsule {
          grid-column: 3;
          grid-row: 1 / 3;
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-sm, 6px);
          padding: 14px;
        }

        .s1-hv-capsule__h {
          font-size: 12px;
          font-weight: 700;
          color: #9d95f5;
          margin-bottom: 4px;
        }

        .s1-hv-capsule__sub {
          font-size: 10px;
          color: #c8c4f7;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid #3b2fbf;
        }

        .s1-hv-capsule__step {
          font-size: 11px;
          color: #e8e6fb;
          margin-bottom: 6px;
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-section">
          <div className="s1-container">
            <div className="s1-grid">

              {/* Text column */}
              <div>
                <span className="s1-eyebrow">{eyebrow}</span>
                <h1 className="s1-h1">
                  {h1Line1}<strong>{h1Highlight}</strong>{h1Suffix}
                </h1>
                <p className="s1-sub">{description}</p>
                <div className="s1-tag">{tag}</div>
                <div className="s1-cta">
                  <a className="s1-btn s1-btn--primary" href={cta1Href}>{cta1Label}</a>
                  <a className="s1-btn s1-btn--ghost" href={cta2Href}>{cta2Label}</a>
                </div>

                <div className="s1-metrics">
                  <div>
                    <div className="s1-metric-num">{metric1Num}</div>
                    <div className="s1-metric-label">{metric1Label}</div>
                  </div>
                  <div>
                    <div className="s1-metric-num">{metric2Num}</div>
                    <div className="s1-metric-label">{metric2Label}</div>
                  </div>
                  <div>
                    <div className="s1-metric-num">{metric3Num}</div>
                    <div className="s1-metric-label">{metric3Label}</div>
                  </div>
                  <div>
                    <div className="s1-metric-num">{metric4Num}</div>
                    <div className="s1-metric-label">{metric4Label}</div>
                  </div>
                </div>
              </div>

              {/* Visual column */}
              <div className="s1-visual">
                {resolvedHeroImage ? (
                  <img className="s1-visual-img" src={resolvedHeroImage} alt="LLM Capsule product UI" />
                ) : (
                  <div className="s1-hv-grid">
                    <div className="s1-hv-tool">
                      <div className="s1-hv-tool__name">{tool1Name}</div>
                      <div className="s1-hv-tool__line">{tool1Line1}</div>
                      <div className="s1-hv-tool__line">{tool1Line2}</div>
                      <div className="s1-hv-tool__line">{tool1Line3}</div>
                    </div>
                    <div className="s1-hv-tool">
                      <div className="s1-hv-tool__name">{tool2Name}</div>
                      <div className="s1-hv-tool__line">{tool2Line1}</div>
                      <div className="s1-hv-tool__line">{tool2Line2}</div>
                      <div className="s1-hv-tool__line">{tool2Line3}</div>
                    </div>
                    <div className="s1-hv-capsule">
                      <div className="s1-hv-capsule__h">{capsuleTitle}</div>
                      <div className="s1-hv-capsule__sub">{capsuleSub}</div>
                      <div className="s1-hv-capsule__step">{capsuleStep1}</div>
                      <div className="s1-hv-capsule__step">{capsuleStep2}</div>
                      <div className="s1-hv-capsule__step">{capsuleStep3}</div>
                      <div className="s1-hv-capsule__step">{capsuleStep4}</div>
                      <div className="s1-hv-capsule__step">{capsuleStep5}</div>
                    </div>
                    <div className="s1-hv-tool">
                      <div className="s1-hv-tool__name">{tool3Name}</div>
                      <div className="s1-hv-tool__line">{tool3Line1}</div>
                      <div className="s1-hv-tool__line">{tool3Line2}</div>
                      <div className="s1-hv-tool__line">{tool3Line3}</div>
                    </div>
                    <div className="s1-hv-tool">
                      <div className="s1-hv-tool__name">{tool4Name}</div>
                      <div className="s1-hv-tool__line">{tool4Line1}</div>
                      <div className="s1-hv-tool__line">{tool4Line2}</div>
                      <div className="s1-hv-tool__line">{tool4Line3}</div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" }
              ]
            })
          }}
        />
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow:      { type: ControlType.String, title: "Eyebrow",       defaultValue: "CONTEXT-PRESERVING DATA LAYER FOR AI" },
  h1Line1:      { type: ControlType.String, title: "H1 Prefix",     defaultValue: "Make " },
  h1Highlight:  { type: ControlType.String, title: "H1 Highlight",  defaultValue: "sensitive workflows" },
  h1Suffix:     { type: ControlType.String, title: "H1 Suffix",     defaultValue: " run with AI." },
  description:  { type: ControlType.String, title: "Description",   defaultValue: "From blocked workflows to operational AI — without breaking documents, systems, or context. LLM Capsule is the context-preserving data layer for AI for regulated enterprise operations. It plugs into the systems you already run — on-premise, air-gapped, or hybrid — and AI receives the operational structure it needs. Sensitive data stays inside your environment. Outputs return business-ready, in the originating workflow.", multiLine: true },
  tag:          { type: ControlType.String, title: "Tag",           defaultValue: "The context-preserving data layer for AI for regulated operations." },
  cta1Label:    { type: ControlType.String, title: "CTA 1 Label",   defaultValue: "Request a Demo" },
  cta1Href:     { type: ControlType.String, title: "CTA 1 URL",     defaultValue: "/request-a-demo" },
  cta2Label:    { type: ControlType.String, title: "CTA 2 Label",   defaultValue: "See the Architecture" },
  cta2Href:     { type: ControlType.String, title: "CTA 2 URL",     defaultValue: "/architecture" },
  metric1Num:   { type: ControlType.String, title: "Metric 1 Num",  defaultValue: "0.12s" },
  metric1Label: { type: ControlType.String, title: "Metric 1 Label",defaultValue: "Per Page Processing" },
  metric2Num:   { type: ControlType.String, title: "Metric 2 Num",  defaultValue: "100%" },
  metric2Label: { type: ControlType.String, title: "Metric 2 Label",defaultValue: "Restoration Rate" },
  metric3Num:   { type: ControlType.String, title: "Metric 3 Num",  defaultValue: "98%" },
  metric3Label: { type: ControlType.String, title: "Metric 3 Label",defaultValue: "Output Similarity" },
  metric4Num:   { type: ControlType.String, title: "Metric 4 Num",  defaultValue: "99.14%" },
  metric4Label: { type: ControlType.String, title: "Metric 4 Label",defaultValue: "Workflow Accuracy" },
  heroImage:    { type: ControlType.Image,  title: "Hero Image (optional)" },
  tool1Name:    { type: ControlType.String, title: "Tool 1 Name",   defaultValue: "NOC Console" },
  tool1Line1:   { type: ControlType.String, title: "Tool 1 Line 1", defaultValue: "[ALARM] R-472 latency" },
  tool1Line2:   { type: ControlType.String, title: "Tool 1 Line 2", defaultValue: "[INCIDENT] INC-24091" },
  tool1Line3:   { type: ControlType.String, title: "Tool 1 Line 3", defaultValue: "SLA risk: enterprise" },
  tool2Name:    { type: ControlType.String, title: "Tool 2 Name",   defaultValue: "Ticket System" },
  tool2Line1:   { type: ControlType.String, title: "Tool 2 Line 1", defaultValue: "INC-24091  packet loss" },
  tool2Line2:   { type: ControlType.String, title: "Tool 2 Line 2", defaultValue: "Site: SEO-18" },
  tool2Line3:   { type: ControlType.String, title: "Tool 2 Line 3", defaultValue: "Status: escalated" },
  tool3Name:    { type: ControlType.String, title: "Tool 3 Name",   defaultValue: "Log Viewer" },
  tool3Line1:   { type: ControlType.String, title: "Tool 3 Line 1", defaultValue: "03:21 R-472 spike" },
  tool3Line2:   { type: ControlType.String, title: "Tool 3 Line 2", defaultValue: "03:24 SEO-18 loss" },
  tool3Line3:   { type: ControlType.String, title: "Tool 3 Line 3", defaultValue: "03:26 escalated" },
  tool4Name:    { type: ControlType.String, title: "Tool 4 Name",   defaultValue: "Runbook" },
  tool4Line1:   { type: ControlType.String, title: "Tool 4 Line 1", defaultValue: "1. Check device R-472" },
  tool4Line2:   { type: ControlType.String, title: "Tool 4 Line 2", defaultValue: "2. Validate config" },
  tool4Line3:   { type: ControlType.String, title: "Tool 4 Line 3", defaultValue: "3. Rollback if drift" },
  capsuleTitle: { type: ControlType.String, title: "Capsule Title", defaultValue: "LLM Capsule" },
  capsuleSub:   { type: ControlType.String, title: "Capsule Sub",   defaultValue: "in-environment data layer" },
  capsuleStep1: { type: ControlType.String, title: "Step 1",        defaultValue: "▶ Encapsulate" },
  capsuleStep2: { type: ControlType.String, title: "Step 2",        defaultValue: "▶ DP transform" },
  capsuleStep3: { type: ControlType.String, title: "Step 3",        defaultValue: "▶ Send to AI" },
  capsuleStep4: { type: ControlType.String, title: "Step 4",        defaultValue: "▶ Restore" },
  capsuleStep5: { type: ControlType.String, title: "Step 5",        defaultValue: "▶ Insert here" },
})
