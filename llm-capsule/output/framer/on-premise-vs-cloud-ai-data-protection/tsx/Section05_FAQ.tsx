import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral150:     "#e6e7e9",
  neutral025:     "#f7f7f7",
  neutral400:     "#9c9c9c",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

// ─── JSON-LD ────────────────────────────────────────────────────────────────
const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does LLM Capsule work on-premise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.",
      },
    },
    {
      "@type": "Question",
      "name": "Is LLM Capsule available on AWS Marketplace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.",
      },
    },
  ],
})

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  q1Title?: string
  q1Answer?: string
  q2Title?: string
  q2Answer?: string
}

// ─── AcCard Component ───────────────────────────────────────────────────────
function AcCard({ title, answer, defaultOpen = false }: { title: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      className={`s5-ac-card${open ? " s5-ac--open" : ""}`}
      onClick={() => setOpen(!open)}
      style={{ cursor: "pointer" }}
    >
      <div className="s5-ac-card__header">
        <span className="s5-ac-card__title">{title}</span>
        <span className="s5-ac-card__toggle">
          <span className="s5-ac-card__toggle-icon" aria-hidden="true" />
        </span>
      </div>
      {open && (
        <div className="s5-ac-card__body">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section05_FAQ({
  sectionLabel = "FAQ",
  q1Title = "Does LLM Capsule work on-premise?",
  q1Answer = "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.",
  q2Title = "Is LLM Capsule available on AWS Marketplace?",
  q2Answer = "Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s5;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s5 (min-width: 768px)  { .s5-container { padding: 0 32px; } }
        @container s5 (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container s5 (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }

        .s5-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s5-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        @container s5 (min-width: 768px)  { .s5-header h2 { font-size: 22px; } }
        @container s5 (min-width: 1024px) { .s5-header h2 { font-size: 24px; } }
        @container s5 (min-width: 1440px) { .s5-header h2 { font-size: 28px; } }
        @container s5 (max-width: 767px)  { .s5-header { text-align: left; } }

        .s5-brand { color: ${C.brandSecondary}; }

        .s5-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s5-ac-card {
          border: 1px solid ${C.neutral150};
          border-radius: 8px;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s5-ac-card:hover { background-color: ${C.neutral025}; }
        .s5-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          user-select: none;
        }
        .s5-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${C.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-ac-card__toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${C.neutral150};
          background-color: ${C.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .s5-ac-card__toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s5-ac-card__toggle-icon::before,
        .s5-ac-card__toggle-icon::after {
          content: '';
          position: absolute;
          background-color: ${C.neutral400};
          border-radius: 1px;
        }
        .s5-ac-card__toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s5-ac-card__toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .s5-ac--open .s5-ac-card__toggle-icon::after { opacity: 0; }

        .s5-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${C.neutral150};
          background-color: ${C.surfaceLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${C.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-ac-card__body p { margin: 0; }
        .s5-ac-card__body p + p { margin-top: 12px; }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s5-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s5-ac-list">
              <AcCard title={q1Title} answer={q1Answer} defaultOpen={true} />
              <AcCard title={q2Title} answer={q2Answer} defaultOpen={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_FAQ, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "FAQ",
  },
  q1Title: {
    type: ControlType.String,
    title: "Q1 Title",
    defaultValue: "Does LLM Capsule work on-premise?",
  },
  q1Answer: {
    type: ControlType.String,
    title: "Q1 Answer",
    defaultValue: "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.",
    displayTextArea: true,
  },
  q2Title: {
    type: ControlType.String,
    title: "Q2 Title",
    defaultValue: "Is LLM Capsule available on AWS Marketplace?",
  },
  q2Answer: {
    type: ControlType.String,
    title: "Q2 Answer",
    defaultValue: "Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.",
    displayTextArea: true,
  },
})
