import { addPropertyControls, ControlType } from "framer"

interface Props {
  badge?: string

  heading?: string
  headingEmphasis?: string

  lead?: string

  // Three capability cards
  cap1Num?: string
  cap1Title?: string
  cap1Description?: string

  cap2Num?: string
  cap2Title?: string
  cap2Description?: string

  cap3Num?: string
  cap3Title?: string
  cap3Description?: string
}

export default function Section07_Capability06({
  badge = "Capability 06 · Deep dive",

  heading = "You define what's sensitive —",
  headingEmphasis = "and you can change it tomorrow.",

  lead = "Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Standard PII categories don't move; your business does. LLM Capsule lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve — with full audit trail of which marker was protected when.",

  cap1Num = "DEFINE",
  cap1Title = "Beyond generic PII",
  cap1Description =
    "Project codes, deal terms, internal IDs, contract references, network identifiers, OT asset IDs, mission refs. Your team defines the markers — not a vendor's fixed list.",

  cap2Num = "VERSION",
  cap2Title = "Time-shift the policy",
  cap2Description =
    "Add a new marker today, retire one next quarter. Policy versioning + immediate enforcement. Audit log records exactly which marker was active for every encapsulation event.",

  cap3Num = "SCOPE",
  cap3Title = "Per workflow, team, data type",
  cap3Description =
    "NOC team, oncology unit, OT operations, M&A — different policies, same governance. RBAC + scoped enforcement + per-policy audit. One LLM Capsule, many policies.",
}: Props) {
  const caps = [
    { num: cap1Num, title: cap1Title, desc: cap1Description },
    { num: cap2Num, title: cap2Title, desc: cap2Description },
    { num: cap3Num, title: cap3Title, desc: cap3Description },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s7-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s7-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }

        .s7-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── Feature card ── */
        .s7-card {
          background: linear-gradient(
            135deg,
            var(--c-primary-soft, #eeebfe) 0%,
            var(--c-bg-soft, #f7f8fb) 100%
          );
          border-radius: var(--r-lg, 16px);
          padding: clamp(28px, 4vw, 48px);
          border: 1px solid var(--c-primary, #5b4fe9);
        }

        /* ── Badge ── */
        .s7-badge {
          display: inline-block;
          font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 14px;
          border: 1px solid var(--c-primary-dark, #3b2fbf);
          color: var(--c-primary-dark, #3b2fbf);
          border-radius: 999px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        /* ── Heading ── */
        .s7-heading {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s7-heading em {
          font-style: normal;
          color: var(--c-primary, #5b4fe9);
        }

        /* ── Lead ── */
        .s7-lead {
          font-size: 17px;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 32px;
          max-width: 800px;
          line-height: 1.6;
        }

        /* ── Capability grid ── */
        .s7-caps {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @container (min-width: 640px) {
          .s7-caps {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* ── Capability card ── */
        .s7-cap {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px;
        }

        .s7-cap__num {
          font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: 0.1em;
        }

        .s7-cap__h {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .s7-cap__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }
      `}</style>

      <div className="s7-root">
        <section className="s7-section">
          <div className="s7-container">
            <div className="s7-card">
              <span className="s7-badge">{badge}</span>

              <h2 className="s7-heading">
                {heading} <em>{headingEmphasis}</em>
              </h2>

              <p className="s7-lead">{lead}</p>

              <div className="s7-caps">
                {caps.map((cap, i) => (
                  <div className="s7-cap" key={i}>
                    <div className="s7-cap__num">{cap.num}</div>
                    <h3 className="s7-cap__h">{cap.title}</h3>
                    <p className="s7-cap__d">{cap.desc}</p>
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

addPropertyControls(Section07_Capability06, {
  badge: {
    type: ControlType.String,
    title: "Badge",
    defaultValue: "Capability 06 · Deep dive",
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "You define what's sensitive —",
  },
  headingEmphasis: {
    type: ControlType.String,
    title: "Heading Emphasis",
    defaultValue: "and you can change it tomorrow.",
  },
  lead: {
    type: ControlType.String,
    title: "Lead paragraph",
    defaultValue:
      "Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Standard PII categories don't move; your business does. LLM Capsule lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve — with full audit trail of which marker was protected when.",
  },

  cap1Num: { type: ControlType.String, title: "Cap 1 — Label", defaultValue: "DEFINE" },
  cap1Title: { type: ControlType.String, title: "Cap 1 — Title", defaultValue: "Beyond generic PII" },
  cap1Description: {
    type: ControlType.String,
    title: "Cap 1 — Description",
    defaultValue:
      "Project codes, deal terms, internal IDs, contract references, network identifiers, OT asset IDs, mission refs. Your team defines the markers — not a vendor's fixed list.",
  },

  cap2Num: { type: ControlType.String, title: "Cap 2 — Label", defaultValue: "VERSION" },
  cap2Title: { type: ControlType.String, title: "Cap 2 — Title", defaultValue: "Time-shift the policy" },
  cap2Description: {
    type: ControlType.String,
    title: "Cap 2 — Description",
    defaultValue:
      "Add a new marker today, retire one next quarter. Policy versioning + immediate enforcement. Audit log records exactly which marker was active for every encapsulation event.",
  },

  cap3Num: { type: ControlType.String, title: "Cap 3 — Label", defaultValue: "SCOPE" },
  cap3Title: { type: ControlType.String, title: "Cap 3 — Title", defaultValue: "Per workflow, team, data type" },
  cap3Description: {
    type: ControlType.String,
    title: "Cap 3 — Description",
    defaultValue:
      "NOC team, oncology unit, OT operations, M&A — different policies, same governance. RBAC + scoped enforcement + per-policy audit. One LLM Capsule, many policies.",
  },
})
