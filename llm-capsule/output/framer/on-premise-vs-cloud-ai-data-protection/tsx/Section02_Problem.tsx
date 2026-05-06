import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  neutral150:     "#e5e7eb",
  textPrimary:    "#0f1130",
  textSecondary:  "#3a3d5e",
  surfaceWhite:   "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section02_Problem({
  sectionLabel = "Problem",
  paragraph1 = "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
  paragraph2 = "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s2 (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container s2 (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container s2 (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        .s2-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s2-header h2 {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        @container s2 (min-width: 768px)  { .s2-header h2 { font-size: 22px; } }
        @container s2 (min-width: 1024px) { .s2-header h2 { font-size: 24px; } }
        @container s2 (min-width: 1440px) { .s2-header h2 { font-size: 28px; } }
        @container s2 (max-width: 767px)  { .s2-header { text-align: left; } }

        .s2-brand { color: ${C.brandSecondary}; }

        .s2-paragraph {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s2-brand">{sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">{paragraph1}</p>
            <p className="s2-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Problem",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",
    displayTextArea: true,
  },
})
