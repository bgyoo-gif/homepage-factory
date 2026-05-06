import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  titleEmphasis?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function Section01_Hero({
  eyebrow = "Trust & Compliance",
  title = "Enterprise-grade",
  titleEmphasis = "architecture",
  description = "LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This page is for security, compliance, and procurement teams evaluating how the architecture maps to your review framework.",
  primaryCtaText = "Request a Demo",
  primaryCtaHref = "/request-a-demo",
  secondaryCtaText = "View Architecture",
  secondaryCtaHref = "/architecture",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s1-root { width: 100%; container-type: inline-size; }

        .s1-hero {
          background-image: linear-gradient(180deg, #fafbff 0%, var(--c-bg, #ffffff) 100%);
          padding-top: clamp(80px, 10cqi, 140px);
          padding-bottom: clamp(48px, 6cqi, 80px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s1-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s1-h1 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(36px, 5cqi, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          max-width: 920px;
          margin-bottom: 20px;
        }

        .s1-h1 strong {
          color: var(--c-primary, #5b4fe9);
          font-weight: 700;
        }

        .s1-sub {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(16px, 1.4cqi, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          line-height: 1.6;
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
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
        }

        .s1-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
        }
        .s1-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
        }

        .s1-btn--ghost {
          background-color: transparent;
          color: var(--c-ink, #0f1130);
          border: 1.5px solid var(--c-rule, #e5e7eb);
        }
        .s1-btn--ghost:hover {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary, #5b4fe9);
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-hero">
          <div className="s1-container">
            <div className="s1-eyebrow">{eyebrow}</div>
            <h1 className="s1-h1">
              {title} <strong>{titleEmphasis}</strong> for security and compliance review
            </h1>
            <p className="s1-sub">{description}</p>
            <div className="s1-cta">
              <a className="s1-btn s1-btn--primary" href={primaryCtaHref}>{primaryCtaText}</a>
              <a className="s1-btn s1-btn--ghost" href={secondaryCtaHref}>{secondaryCtaText}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Trust & Compliance" },
  title: { type: ControlType.String, title: "Title (before emphasis)", defaultValue: "Enterprise-grade" },
  titleEmphasis: { type: ControlType.String, title: "Title Emphasis Word", defaultValue: "architecture" },
  description: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This page is for security, compliance, and procurement teams evaluating how the architecture maps to your review framework.", displayTextArea: true },
  primaryCtaText: { type: ControlType.String, title: "Primary CTA Text", defaultValue: "Request a Demo" },
  primaryCtaHref: { type: ControlType.String, title: "Primary CTA Link", defaultValue: "/request-a-demo" },
  secondaryCtaText: { type: ControlType.String, title: "Secondary CTA Text", defaultValue: "View Architecture" },
  secondaryCtaHref: { type: ControlType.String, title: "Secondary CTA Link", defaultValue: "/architecture" },
})
