import { addPropertyControls, ControlType } from "framer"

import { useEffect, useState } from "react"
interface Props {
  label?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  featuredImage?: string
}

const DEFAULT_FEATURED_IMG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png"

export default function Section03_FeaturedArticle({
  label = "FEATURED · MOST READ",
  title = "Why enterprise AI pilots stall — and how they get to production",
  description = "80% of enterprise AI pilots never ship to production. The reasons are predictable: data exposure barriers, broken document context, residual compliance risk, shadow AI emergence. Here's the diagnostic and the architectural pattern that gets pilots to production.",
  ctaLabel = "Read the article →",
  ctaHref = "/learn/pilot-to-production-enterprise-ai",
  featuredImage = "",
}: Props) {
  // Auto-detect Framer locale prefix from current URL (/de/, /ja/, /ko/, etc.)
  // SSG-safe: starts empty, populated after hydration.
  const [localePrefix, setLocalePrefix] = useState<string>("")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/|$)/)
    if (m) setLocalePrefix(`/${m[1]}`)
  }, [])

  const resolvedImg = featuredImage || DEFAULT_FEATURED_IMG
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
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

        .s3-featured {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 48px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 36px;
          align-items: center;
        }

        @container (max-width: 800px) {
          .s3-featured {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
        }

        .s3-label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          color: var(--c-primary-soft, #eeebfe);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .s3-title {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--c-bg, #ffffff);
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-desc {
          font-size: 15px;
          color: var(--c-primary-soft, #eeebfe);
          line-height: 1.65;
          margin-bottom: 24px;
          opacity: 0.85;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-btn {
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
          text-decoration: none;
          transition: background 0.18s, color 0.18s;
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }

        .s3-btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s3-visual img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--r-md, 10px);
        }

        .s3-visual {
          background-color: var(--c-bg-dark-2, #1b1d4a);
          border-radius: var(--r-md, 10px);
          padding: 32px;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 13px;
          color: var(--c-primary-soft, #eeebfe);
          line-height: 1.8;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
          opacity: 0.9;
        }

        .s3-visual-inner {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section">
          <div className="s3-container">
            <div className="s3-featured">
              <div>
                <div className="s3-label">{label}</div>
                <h2 className="s3-title">{title}</h2>
                <p className="s3-desc">{description}</p>
                <a className="s3-btn" href={`${localePrefix}${ctaHref}`}>{ctaLabel}</a>
              </div>
              <div className="s3-visual">
                <img src={resolvedImg} alt={title} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_FeaturedArticle, {
  label:       { type: ControlType.String, title: "Label",        defaultValue: "FEATURED · MOST READ" },
  title:       { type: ControlType.String, title: "Title",        defaultValue: "Why enterprise AI pilots stall — and how they get to production" },
  description: { type: ControlType.String, title: "Description",  defaultValue: "80% of enterprise AI pilots never ship to production. The reasons are predictable: data exposure barriers, broken document context, residual compliance risk, shadow AI emergence. Here's the diagnostic and the architectural pattern that gets pilots to production.", displayTextArea: true },
  ctaLabel:    { type: ControlType.String, title: "CTA Label",    defaultValue: "Read the article →" },
  ctaHref:       { type: ControlType.String, title: "CTA Href",       defaultValue: "/learn/pilot-to-production-enterprise-ai" },
  featuredImage: { type: ControlType.Image,  title: "Featured Image" },
})
