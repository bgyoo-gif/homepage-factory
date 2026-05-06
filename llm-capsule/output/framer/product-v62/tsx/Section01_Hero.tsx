import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  titleSuffix?: string
  description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  heroImage?: string
}

const DEFAULT_HERO_IMAGE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png"

export default function Section01_Hero({
  eyebrow = "Product",
  title = "Watch ",
  titleBrand = "LLM Capsule",
  titleSuffix = " run on a real enterprise workflow",
  description = "Two minutes — see a real document encapsulated, sent to an external LLM, and restored back into the originating workflow. No marketing words. The actual product.",
  ctaPrimaryLabel = "Request a Live Demo",
  ctaPrimaryHref = "/request-a-demo",
  ctaSecondaryLabel = "View Architecture",
  ctaSecondaryHref = "/architecture",
  heroImage = "",
}: Props) {
  const resolvedHeroImage = heroImage || DEFAULT_HERO_IMAGE

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s1-hero {
          width: 100%;
          background-color: var(--c-bg, #ffffff);
          padding-top: clamp(80px, 10vw, 140px);
          padding-bottom: clamp(48px, 6vw, 80px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
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

        .s1-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          max-width: 920px;
          margin-bottom: 20px;
          margin-top: 0;
        }

        .s1-title-brand {
          color: var(--c-primary, #5b4fe9);
          font-weight: 700;
        }

        .s1-desc {
          font-size: clamp(16px, 1.4vw, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          line-height: 1.6;
          margin-bottom: 32px;
          margin-top: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
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
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
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
          color: #ffffff;
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

        .s1-hero-visual {
          margin-top: 48px;
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          border: 1px solid var(--c-rule, #e5e7eb);
          width: 100%;
          aspect-ratio: 16 / 7;
          background-color: var(--c-bg-soft, #f7f8fb);
          object-fit: cover;
          display: block;
        }

        @container (max-width: 500px) {
          .s1-cta { flex-direction: column; }
          .s1-btn { width: 100%; justify-content: center; }
          .s1-hero-visual { aspect-ratio: 4 / 3; }
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-hero">
          <div className="s1-container">
            <span className="s1-eyebrow">{eyebrow}</span>
            <h1 className="s1-title">
              {title}
              <strong className="s1-title-brand">{titleBrand}</strong>
              {titleSuffix}
            </h1>
            <p className="s1-desc">{description}</p>
            <div className="s1-cta">
              <a className="s1-btn s1-btn--primary" href={ctaPrimaryHref}>
                {ctaPrimaryLabel}
              </a>
              <a className="s1-btn s1-btn--ghost" href={ctaSecondaryHref}>
                {ctaSecondaryLabel}
              </a>
            </div>
            <img
              className="s1-hero-visual"
              src={resolvedHeroImage}
              alt=""
              role="presentation"
            />
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Product",
  },
  title: {
    type: ControlType.String,
    title: "Title (before brand)",
    defaultValue: "Watch ",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title Brand Name",
    defaultValue: "LLM Capsule",
  },
  titleSuffix: {
    type: ControlType.String,
    title: "Title (after brand)",
    defaultValue: " run on a real enterprise workflow",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Two minutes — see a real document encapsulated, sent to an external LLM, and restored back into the originating workflow. No marketing words. The actual product.",
    displayTextArea: true,
  },
  ctaPrimaryLabel: {
    type: ControlType.String,
    title: "CTA Primary Label",
    defaultValue: "Request a Live Demo",
  },
  ctaPrimaryHref: {
    type: ControlType.String,
    title: "CTA Primary URL",
    defaultValue: "/request-a-demo",
  },
  ctaSecondaryLabel: {
    type: ControlType.String,
    title: "CTA Secondary Label",
    defaultValue: "View Architecture",
  },
  ctaSecondaryHref: {
    type: ControlType.String,
    title: "CTA Secondary URL",
    defaultValue: "/architecture",
  },
  heroImage: {
    type: ControlType.Image,
    title: "Hero Visual",
  },
})
