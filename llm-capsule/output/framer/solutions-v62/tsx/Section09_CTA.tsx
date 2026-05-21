import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

interface Props {
  locale?: "en" | "ko" | "de"
  title?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string
}

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    title: "Bring your industry, your workflow, your data.",
    description: "We deploy LLM Capsule on a sample workflow in your environment within 30 minutes — and produce an evaluation report on detection accuracy, restoration rate, and policy fit for your industry's regulatory profile.",
    cta1Label: "Request an Industry Demo",
    cta1Href: "/request-a-demo",
    cta2Label: "View Architecture",
    cta2Href: "/architecture",
    cta3Label: "View Trust & Compliance",
    cta3Href: "/trust",
  },
  ko: {
    title: "귀사의 산업, 귀사의 워크플로우, 귀사의 데이터를 가져오세요.",
    description: "30분",
    cta1Label: "산업별 데모 요청",
    cta1Href: "/request-a-demo",
    cta2Label: "아키텍처 보기",
    cta2Href: "/architecture",
    cta3Label: "신뢰 및 컴플라이언스 보기",
    cta3Href: "/trust",
  },
  de: {
    title: "Bringen Sie Ihre Branche, Ihre Workflows und Ihre Daten mit.",
    description: "30 Min.",
    cta1Label: "Demo für Ihre Branche anfordern",
    cta1Href: "/request-a-demo",
    cta2Label: "Architektur ansehen",
    cta2Href: "/architecture",
    cta3Label: "Trust & Compliance ansehen",
    cta3Href: "/trust",
  },
}


export default function Section09_CTA({
  locale = "en",
  title = "",
  description = "",
  cta1Label = "",
  cta1Href = "",
  cta2Label = "",
  cta2Href = "",
  cta3Label = "",
  cta3Href = "",
}: Props) {
  // Auto-detect locale from URL (Framer Localization sync).
  const [autoLocale, setAutoLocale] = useState<"en" | "ko" | "de">("en")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/(ko|de)(?:\/|$)/)
    if (m) setAutoLocale(m[1] as "en" | "ko" | "de")
  }, [])
  const effectiveLocale: "en" | "ko" | "de" = locale && locale !== "en" ? locale : autoLocale

  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const _title = T["title"] || TRANSLATIONS.en["title"] || title
  const _description = T["description"] || TRANSLATIONS.en["description"] || description
  const _cta1Label = T["cta1Label"] || TRANSLATIONS.en["cta1Label"] || cta1Label
  const _cta1Href = T["cta1Href"] || TRANSLATIONS.en["cta1Href"] || cta1Href
  const _cta2Label = T["cta2Label"] || TRANSLATIONS.en["cta2Label"] || cta2Label
  const _cta2Href = T["cta2Href"] || TRANSLATIONS.en["cta2Href"] || cta2Href
  const _cta3Label = T["cta3Label"] || TRANSLATIONS.en["cta3Label"] || cta3Label
  const _cta3Href = T["cta3Href"] || TRANSLATIONS.en["cta3Href"] || cta3Href

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s9-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s9-section {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          padding: clamp(64px, 8cqi, 100px) var(--s-page, clamp(20px, 4cqi, 80px));
          text-align: center;
        }

        .s9-inner {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
        }

        .s9-title {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-bg, #ffffff);
          margin-bottom: 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s9-desc {
          font-size: clamp(16px, 1.4cqi, 17px);
          color: #c8c4f7;
          max-width: 640px;
          margin: 0 auto 36px;
          line-height: 1.6;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s9-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .s9-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: var(--r-md, 10px);
          font-family: inherit;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          border: 1.5px solid transparent;
        }

        /* Primary: white bg, solid */
        .s9-btn--invert {
          background: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: transparent;
        }

        .s9-btn--invert:hover {
          background: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        /* Ghost: transparent, white border */
        .s9-btn--ghost {
          background: transparent;
          color: var(--c-bg, #ffffff);
          border-color: rgba(255,255,255,0.4);
        }

        .s9-btn--ghost:hover {
          border-color: rgba(255,255,255,0.8);
        }

        @container (max-width: 599px) {
          .s9-actions {
            flex-direction: column;
            align-items: center;
          }
          .s9-btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <div className="s9-root">
        <section className="s9-section">
          <div className="s9-inner">
            <h2 className="s9-title">{_title}</h2>
            <p className="s9-desc">{_description}</p>
            <div className="s9-actions">
              <a className="s9-btn s9-btn--invert" href={_cta1Href}>{_cta1Label}</a>
              <a className="s9-btn s9-btn--ghost" href={_cta2Href}>{_cta2Label}</a>
              <a className="s9-btn s9-btn--ghost" href={_cta3Href}>{_cta3Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section09_CTA, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  title:       { type: ControlType.String, title: "Title", defaultValue: "" },
  description: { type: ControlType.String, title: "Description", defaultValue: "", displayTextArea: true },
  cta1Label:   { type: ControlType.String, title: "CTA 1 Label", defaultValue: "" },
  cta1Href:    { type: ControlType.String, title: "CTA 1 URL", defaultValue: "" },
  cta2Label:   { type: ControlType.String, title: "CTA 2 Label", defaultValue: "" },
  cta2Href:    { type: ControlType.String, title: "CTA 2 URL", defaultValue: "" },
  cta3Label:   { type: ControlType.String, title: "CTA 3 Label", defaultValue: "" },
  cta3Href:    { type: ControlType.String, title: "CTA 3 URL", defaultValue: "" },
})
