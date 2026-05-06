import { addPropertyControls, ControlType } from "framer"

// Section 02 — Pricing Tiers (3 cards)
// CMS Collection: PricingTier
// Props: label, tierName, price, period, features[], ctaText, ctaLink, featured

interface Props {
  // Card 1 — Proof of Value
  card1Label?:     string
  card1TierName?:  string
  card1Price?:     string
  card1Period?:    string
  card1Feature1?:  string
  card1Feature2?:  string
  card1Feature3?:  string
  card1Feature4?:  string
  card1Feature5?:  string
  card1Feature6?:  string
  card1CtaText?:   string
  card1CtaLink?:   string

  // Card 2 — Enterprise (featured)
  card2Label?:     string
  card2TierName?:  string
  card2Price?:     string
  card2Period?:    string
  card2Feature1?:  string
  card2Feature2?:  string
  card2Feature3?:  string
  card2Feature4?:  string
  card2Feature5?:  string
  card2Feature6?:  string
  card2Feature7?:  string
  card2Feature8?:  string
  card2CtaText?:   string
  card2CtaLink?:   string
  card2FeaturedBadge?: string

  // Card 3 — AWS Marketplace
  card3Label?:     string
  card3TierName?:  string
  card3Price?:     string
  card3Period?:    string
  card3Feature1?:  string
  card3Feature2?:  string
  card3Feature3?:  string
  card3Feature4?:  string
  card3Feature5?:  string
  card3CtaText?:   string
  card3CtaLink?:   string
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        top: "8px",
        color: "var(--c-primary, #5b4fe9)",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: 1,
      }}
    >
      ✓
    </span>
  )
}

export default function Section02_PricingTiers({
  card1Label     = "Workflow Proof of Value",
  card1TierName  = "Proof of Value",
  card1Price     = "Custom",
  card1Period    = "Evaluation period · 4-8 weeks",
  card1Feature1  = "Test with your own documents",
  card1Feature2  = "Full encapsulation + restoration",
  card1Feature3  = "Path A or Path B execution",
  card1Feature4  = "11 starter markers + custom",
  card1Feature5  = "Audit dashboard",
  card1Feature6  = "Evaluation report on detection / restoration / workflow",
  card1CtaText   = "Start a Workflow Proof of Value →",
  card1CtaLink   = "/request-a-demo",

  card2Label     = "Enterprise",
  card2TierName  = "Custom",
  card2Price     = "Custom",
  card2Period    = "Annual license · production-grade",
  card2Feature1  = "Unlimited document processing",
  card2Feature2  = "Full 6 capability set including time-shifting policy",
  card2Feature3  = "Both execution paths (A + B) under one governance",
  card2Feature4  = "Custom marker definition + policy versioning",
  card2Feature5  = "RBAC + per-team scope",
  card2Feature6  = "SLA-backed support, dedicated CSM",
  card2Feature7  = "GDPR / HIPAA / SOX-aligned audit",
  card2Feature8  = "On-prem, hybrid, VPC, embedded SDK, Slack App",
  card2CtaText   = "Talk to Sales →",
  card2CtaLink   = "/request-a-demo",
  card2FeaturedBadge = "MOST COMMON",

  card3Label     = "AWS Marketplace",
  card3TierName  = "Listed",
  card3Price     = "Pay through AWS",
  card3Period    = "Streamlined procurement",
  card3Feature1  = "Streamlined AWS procurement",
  card3Feature2  = "AWS billing integration",
  card3Feature3  = "VPC deployment",
  card3Feature4  = "Same capability set as Enterprise",
  card3Feature5  = "EDP / private offer eligible",
  card3CtaText   = "View on AWS →",
  card3CtaLink   = "https://aws.amazon.com/marketplace",
}: Props) {

  const card1Features = [card1Feature1, card1Feature2, card1Feature3, card1Feature4, card1Feature5, card1Feature6].filter(Boolean)
  const card2Features = [card2Feature1, card2Feature2, card2Feature3, card2Feature4, card2Feature5, card2Feature6, card2Feature7, card2Feature8].filter(Boolean)
  const card3Features = [card3Feature1, card3Feature2, card3Feature3, card3Feature4, card3Feature5].filter(Boolean)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s2-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: stretch;
        }

        @container (min-width: 768px) {
          .s2-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @container (min-width: 1024px) {
          .s2-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .s2-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .s2-card--featured {
          border-color: var(--c-primary, #5b4fe9);
        }

        .s2-featured-badge {
          position: absolute;
          top: -14px;
          left: 32px;
          background: var(--c-primary, #5b4fe9);
          color: var(--c-bg, #ffffff);
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .s2-label {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          background-color: var(--c-bg-soft, #f7f8fb);
          color: var(--c-muted, #6b7280);
          border-radius: 999px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .s2-card--featured .s2-label {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s2-tier-name {
          font-size: 28px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .s2-price {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: var(--c-ink, #0f1130);
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
          white-space: nowrap;
        }

        .s2-period {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          margin-bottom: 0;
          line-height: 1.4;
        }

        .s2-features {
          list-style: none;
          padding: 16px 0;
          margin: 14px 0 0 0;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          flex: 1;
        }

        .s2-feature-item {
          font-size: 14px;
          padding: 8px 0 8px 26px;
          position: relative;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s2-cta-wrap {
          margin-top: auto;
          padding-top: 8px;
        }

        .s2-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
          width: 100%;
          text-align: center;
          border: none;
        }

        .s2-btn--primary {
          background: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
        }
        .s2-btn--primary:hover {
          background: var(--c-primary, #5b4fe9);
        }

        .s2-btn--ghost {
          background: transparent;
          color: var(--c-ink, #0f1130);
          border: 1.5px solid var(--c-rule, #e5e7eb);
        }
        .s2-btn--ghost:hover {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary, #5b4fe9);
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section" id="section-2">
          <div className="s2-container">
            <div className="s2-grid">

              {/* Card 1: Proof of Value */}
              <article className="s2-card">
                <span className="s2-label">{card1Label}</span>
                <h3 className="s2-tier-name">{card1TierName}</h3>
                <div className="s2-price">{card1Price}</div>
                <p className="s2-period">{card1Period}</p>
                <ul className="s2-features" role="list">
                  {card1Features.map((f, i) => (
                    <li key={i} className="s2-feature-item">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="s2-cta-wrap">
                  <a className="s2-btn s2-btn--ghost" href={card1CtaLink}>{card1CtaText}</a>
                </div>
              </article>

              {/* Card 2: Enterprise (featured) */}
              <article className="s2-card s2-card--featured">
                <span className="s2-featured-badge">{card2FeaturedBadge}</span>
                <span className="s2-label">{card2Label}</span>
                <h3 className="s2-tier-name">{card2TierName}</h3>
                <div className="s2-price">{card2Price}</div>
                <p className="s2-period">{card2Period}</p>
                <ul className="s2-features" role="list">
                  {card2Features.map((f, i) => (
                    <li key={i} className="s2-feature-item">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="s2-cta-wrap">
                  <a className="s2-btn s2-btn--primary" href={card2CtaLink}>{card2CtaText}</a>
                </div>
              </article>

              {/* Card 3: AWS Marketplace */}
              <article className="s2-card">
                <span className="s2-label">{card3Label}</span>
                <h3 className="s2-tier-name">{card3TierName}</h3>
                <div className="s2-price">{card3Price}</div>
                <p className="s2-period">{card3Period}</p>
                <ul className="s2-features" role="list">
                  {card3Features.map((f, i) => (
                    <li key={i} className="s2-feature-item">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="s2-cta-wrap">
                  <a
                    className="s2-btn s2-btn--ghost"
                    href={card3CtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card3CtaText}
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_PricingTiers, {
  card1Label:     { type: ControlType.String, title: "C1 Label",     defaultValue: "Workflow Proof of Value" },
  card1TierName:  { type: ControlType.String, title: "C1 Tier Name", defaultValue: "Proof of Value" },
  card1Price:     { type: ControlType.String, title: "C1 Price",     defaultValue: "Custom" },
  card1Period:    { type: ControlType.String, title: "C1 Period",    defaultValue: "Evaluation period · 4-8 weeks" },
  card1Feature1:  { type: ControlType.String, title: "C1 Feature 1", defaultValue: "Test with your own documents" },
  card1Feature2:  { type: ControlType.String, title: "C1 Feature 2", defaultValue: "Full encapsulation + restoration" },
  card1Feature3:  { type: ControlType.String, title: "C1 Feature 3", defaultValue: "Path A or Path B execution" },
  card1Feature4:  { type: ControlType.String, title: "C1 Feature 4", defaultValue: "11 starter markers + custom" },
  card1Feature5:  { type: ControlType.String, title: "C1 Feature 5", defaultValue: "Audit dashboard" },
  card1Feature6:  { type: ControlType.String, title: "C1 Feature 6", defaultValue: "Evaluation report on detection / restoration / workflow" },
  card1CtaText:   { type: ControlType.String, title: "C1 CTA Text",  defaultValue: "Start a Workflow Proof of Value →" },
  card1CtaLink:   { type: ControlType.String, title: "C1 CTA URL",   defaultValue: "/request-a-demo" },

  card2Label:          { type: ControlType.String, title: "C2 Label",          defaultValue: "Enterprise" },
  card2TierName:       { type: ControlType.String, title: "C2 Tier Name",      defaultValue: "Custom" },
  card2Price:          { type: ControlType.String, title: "C2 Price",          defaultValue: "Custom" },
  card2Period:         { type: ControlType.String, title: "C2 Period",         defaultValue: "Annual license · production-grade" },
  card2Feature1:       { type: ControlType.String, title: "C2 Feature 1",      defaultValue: "Unlimited document processing" },
  card2Feature2:       { type: ControlType.String, title: "C2 Feature 2",      defaultValue: "Full 6 capability set including time-shifting policy" },
  card2Feature3:       { type: ControlType.String, title: "C2 Feature 3",      defaultValue: "Both execution paths (A + B) under one governance" },
  card2Feature4:       { type: ControlType.String, title: "C2 Feature 4",      defaultValue: "Custom marker definition + policy versioning" },
  card2Feature5:       { type: ControlType.String, title: "C2 Feature 5",      defaultValue: "RBAC + per-team scope" },
  card2Feature6:       { type: ControlType.String, title: "C2 Feature 6",      defaultValue: "SLA-backed support, dedicated CSM" },
  card2Feature7:       { type: ControlType.String, title: "C2 Feature 7",      defaultValue: "GDPR / HIPAA / SOX-aligned audit" },
  card2Feature8:       { type: ControlType.String, title: "C2 Feature 8",      defaultValue: "On-prem, hybrid, VPC, embedded SDK, Slack App" },
  card2CtaText:        { type: ControlType.String, title: "C2 CTA Text",       defaultValue: "Talk to Sales →" },
  card2CtaLink:        { type: ControlType.String, title: "C2 CTA URL",        defaultValue: "/request-a-demo" },
  card2FeaturedBadge:  { type: ControlType.String, title: "C2 Featured Badge", defaultValue: "MOST COMMON" },

  card3Label:    { type: ControlType.String, title: "C3 Label",     defaultValue: "AWS Marketplace" },
  card3TierName: { type: ControlType.String, title: "C3 Tier Name", defaultValue: "Listed" },
  card3Price:    { type: ControlType.String, title: "C3 Price",     defaultValue: "Pay through AWS" },
  card3Period:   { type: ControlType.String, title: "C3 Period",    defaultValue: "Streamlined procurement" },
  card3Feature1: { type: ControlType.String, title: "C3 Feature 1", defaultValue: "Streamlined AWS procurement" },
  card3Feature2: { type: ControlType.String, title: "C3 Feature 2", defaultValue: "AWS billing integration" },
  card3Feature3: { type: ControlType.String, title: "C3 Feature 3", defaultValue: "VPC deployment" },
  card3Feature4: { type: ControlType.String, title: "C3 Feature 4", defaultValue: "Same capability set as Enterprise" },
  card3Feature5: { type: ControlType.String, title: "C3 Feature 5", defaultValue: "EDP / private offer eligible" },
  card3CtaText:  { type: ControlType.String, title: "C3 CTA Text",  defaultValue: "View on AWS →" },
  card3CtaLink:  { type: ControlType.String, title: "C3 CTA URL",   defaultValue: "https://aws.amazon.com/marketplace" },
})
