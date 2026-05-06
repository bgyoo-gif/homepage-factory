import { addPropertyControls, ControlType } from "framer"

interface Props {
  videoUrl?: string
  videoDuration?: string
  videoLabel?: string
  watchLabel?: string
  posterImage?: string
  captionStrong?: string
  captionText?: string
  ctaLabel?: string
  ctaHref?: string
}

const DEFAULT_POSTER = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png"

function toEmbedUrl(url: string): string {
  if (!url) return ""
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
  return m ? `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1` : url
}

export default function Section02_DemoVideo({
  videoUrl = "",
  videoDuration = "2:14 · LLM CAPSULE LIVE WALKTHROUGH",
  videoLabel = "Watch the 2-minute product demo",
  watchLabel = "Play demo",
  posterImage = "",
  captionStrong = "What you'll see:",
  captionText = "A telecom NOC ticket flows through LLM Capsule — device IDs, circuit IDs, site references, alarm sequences, and SLA-impact references are encapsulated locally — subscriber identifiers included; the protected capsule reaches an external LLM; the AI's RCA recommendation is auto-restored back into the original ticket. End-to-end, in production.",
  ctaLabel = "Take the Interactive Tour",
  ctaHref = "#tour",
}: Props) {
  const resolvedPoster = posterImage || DEFAULT_POSTER

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s2-video {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto;
        }

        .s2-player {
          aspect-ratio: 16 / 9;
          background-color: var(--c-bg-dark, #0f1130);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
        }

        .s2-iframe {
          width: 100%;
          height: 100%;
          border: none;
          position: absolute;
          inset: 0;
        }

        .s2-player-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }

        .s2-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 16px;
          z-index: 1;
        }

        .s2-meta {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: #9d95f5;
          letter-spacing: 0.1em;
        }

        .s2-play {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--c-primary, #5b4fe9);
          color: var(--c-bg, #ffffff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          cursor: pointer;
          transition: transform 0.2s;
          border: none;
        }

        .s2-play:hover {
          transform: scale(1.08);
        }

        .s2-watch-label {
          color: var(--c-bg, #ffffff);
          font-size: 16px;
          font-weight: 600;
        }

        .s2-caption {
          padding: 24px 32px;
          background-color: var(--c-bg, #ffffff);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .s2-caption-text {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s2-caption-text strong {
          color: var(--c-ink, #0f1130);
        }

        .s2-btn {
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
          transition: background 0.18s, color 0.18s;
          text-decoration: none;
          white-space: nowrap;
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }

        .s2-btn:hover {
          background-color: var(--c-primary, #5b4fe9);
        }

        @container (max-width: 600px) {
          .s2-caption {
            grid-template-columns: 1fr;
          }
          .s2-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <div className="s2-video">
              <div className="s2-player">
                {videoUrl ? (
                  <iframe
                    className="s2-iframe"
                    src={toEmbedUrl(videoUrl)}
                    title={videoLabel}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      className="s2-player-bg"
                      src={resolvedPoster}
                      alt=""
                      role="presentation"
                    />
                    <div className="s2-overlay">
                      <span className="s2-meta">{videoDuration}</span>
                      <button className="s2-play" aria-label={watchLabel}>
                        &#9654;
                      </button>
                      <span className="s2-watch-label">{videoLabel}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="s2-caption">
                <p className="s2-caption-text">
                  <strong>{captionStrong}</strong> {captionText}
                </p>
                <a className="s2-btn" href={ctaHref}>
                  {ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_DemoVideo, {
  videoUrl: {
    type: ControlType.String,
    title: "YouTube URL",
    defaultValue: "",
    placeholder: "https://youtube.com/watch?v=...",
  },
  videoDuration: {
    type: ControlType.String,
    title: "Video Duration Label",
    defaultValue: "2:14 · LLM CAPSULE LIVE WALKTHROUGH",
  },
  videoLabel: {
    type: ControlType.String,
    title: "Watch Label (below play)",
    defaultValue: "Watch the 2-minute product demo",
  },
  watchLabel: {
    type: ControlType.String,
    title: "Play Button Aria Label",
    defaultValue: "Play demo",
  },
  posterImage: {
    type: ControlType.Image,
    title: "Video Poster Image",
  },
  captionStrong: {
    type: ControlType.String,
    title: "Caption Bold Text",
    defaultValue: "What you'll see:",
  },
  captionText: {
    type: ControlType.String,
    title: "Caption Body",
    defaultValue: "A telecom NOC ticket flows through LLM Capsule — device IDs, circuit IDs, site references, alarm sequences, and SLA-impact references are encapsulated locally — subscriber identifiers included; the protected capsule reaches an external LLM; the AI's RCA recommendation is auto-restored back into the original ticket. End-to-end, in production.",
    displayTextArea: true,
  },
  ctaLabel: {
    type: ControlType.String,
    title: "CTA Label",
    defaultValue: "Take the Interactive Tour",
  },
  ctaHref: {
    type: ControlType.String,
    title: "CTA URL",
    defaultValue: "#tour",
  },
})
