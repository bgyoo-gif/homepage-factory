import { addPropertyControls, ControlType } from "framer"

// ─── Background image fallback ────────────────────────────────────
const DEFAULT_BG = ""

interface Props {
  bgImage?: string

  heading?: string
  description?: string

  // Button 1 — invert (solid white)
  btn1Label?: string
  btn1Href?: string

  // Button 2 — invert-ghost
  btn2Label?: string
  btn2Href?: string

  // Button 3 — invert-ghost
  btn3Label?: string
  btn3Href?: string
}

export default function Section08_CTAStrip({
  bgImage = DEFAULT_BG,

  heading = "See it on your own documents.",
  description =
    "Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes.",

  btn1Label = "Request a Live Demo",
  btn1Href = "/request-a-demo",

  btn2Label = "View Architecture",
  btn2Href = "/architecture",

  btn3Label = "View Pricing",
  btn3Href = "/pricing",
}: Props) {
  const resolvedBg = bgImage || DEFAULT_BG

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s8-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          /* Brand accent tone for dark CTA surface */
          --c-cta-desc: #c8c4f7;
          --c-cta-border: #9d95f5;
        }

        /* ── CTA Section — full width, dark bg ── */
        .s8-cta {
          width: 100%;
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          padding: clamp(64px, 8vw, 128px) var(--s-page, clamp(20px, 4vw, 80px));
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Optional background image overlay */
        .s8-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.12;
          pointer-events: none;
        }

        .s8-cta--has-bg::before {
          background-image: var(--s8-bg-img);
        }

        /* ── Inner container — max-width only here ── */
        .s8-inner {
          position: relative;
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
        }

        /* ── Heading ── */
        .s8-cta h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        /* ── Description ── */
        .s8-cta p {
          color: var(--c-cta-desc, #c8c4f7);
          max-width: 640px;
          margin: 0 auto 32px;
          font-size: clamp(16px, 1.4vw, 17px);
          line-height: 1.6;
        }

        /* ── Button row ── */
        .s8-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Base button ── */
        .s8-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          border: none;
        }

        /* Invert: solid white bg on dark section */
        .s8-btn--invert {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }
        .s8-btn--invert:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        /* Invert-ghost: transparent, white border */
        .s8-btn--invert-ghost {
          background-color: transparent;
          color: var(--c-bg, #ffffff);
          border: 1.5px solid var(--c-cta-border, #9d95f5);
          opacity: 0.85;
        }
        .s8-btn--invert-ghost:hover {
          border-color: var(--c-bg, #ffffff);
          opacity: 1;
        }

        /* Mobile: stack buttons */
        @container (max-width: 480px) {
          .s8-btns {
            flex-direction: column;
            align-items: center;
          }
          .s8-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="s8-root">
        <section
          className={`s8-cta${resolvedBg ? " s8-cta--has-bg" : ""}`}
          style={
            resolvedBg
              ? ({ "--s8-bg-img": `url('${resolvedBg}')` } as React.CSSProperties)
              : undefined
          }
        >
          <div className="s8-inner">
            <h2>{heading}</h2>
            <p>{description}</p>
            <div className="s8-btns">
              <a className="s8-btn s8-btn--invert" href={btn1Href}>
                {btn1Label}
              </a>
              <a className="s8-btn s8-btn--invert-ghost" href={btn2Href}>
                {btn2Label}
              </a>
              <a className="s8-btn s8-btn--invert-ghost" href={btn3Href}>
                {btn3Label}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_CTAStrip, {
  bgImage: {
    type: ControlType.Image,
    title: "Background Image",
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "See it on your own documents.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes.",
  },
  btn1Label: {
    type: ControlType.String,
    title: "Button 1 — Label",
    defaultValue: "Request a Live Demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 — URL",
    defaultValue: "/request-a-demo",
  },
  btn2Label: {
    type: ControlType.String,
    title: "Button 2 — Label",
    defaultValue: "View Architecture",
  },
  btn2Href: {
    type: ControlType.String,
    title: "Button 2 — URL",
    defaultValue: "/architecture",
  },
  btn3Label: {
    type: ControlType.String,
    title: "Button 3 — Label",
    defaultValue: "View Pricing",
  },
  btn3Href: {
    type: ControlType.String,
    title: "Button 3 — URL",
    defaultValue: "/pricing",
  },
})
