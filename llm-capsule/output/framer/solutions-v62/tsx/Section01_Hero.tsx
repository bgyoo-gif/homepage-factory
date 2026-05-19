import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  eyebrow?: string
  h1Plain?: string
  h1Highlight?: string
  description?: string
  stat1Num?: string
  stat1Label?: string
  stat2Num?: string
  stat2Label?: string
  stat3Num?: string
  stat3Label?: string
  stat4Num?: string
  stat4Label?: string
}

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    eyebrow: "Solutions",
    h1Plain: "Make regulated workflows",
    h1Highlight: "usable with AI",
    description: "Six industries. Real production workflows. Real customers. One AI enablement data layer that removes the data exposure barrier blocking enterprise AI adoption — so AI runs on real data, inside your environment, under your governance.",
    stat1Num: "6",
    stat1Label: "Regulated industries",
    stat2Num: "10+",
    stat2Label: "Production customers",
    stat3Num: "30 min",
    stat3Label: "Time to first evaluation",
    stat4Num: "0",
    stat4Label: "Raw data to external LLM",
  },
  ko: {
    eyebrow: "솔루션",
    h1Plain: "규제 환경의 워크플로우를",
    h1Highlight: "AI로 가동합니다",
    description: "6개 산업. 실제 프로덕션 워크플로우. 실제 고객사. 기업 AI 도입을 막는 데이터 노출 장벽을 제거하는 데이터 레이어 — AI가 실제 데이터 위에서, 여러분의 환경 안에서, 여러분의 거버넌스 하에 작동합니다.",
    stat1Num: "6",
    stat1Label: "규제 산업",
    stat2Num: "10+",
    stat2Label: "실제 운영 고객사",
    stat3Num: "30분",
    stat3Label: "최초 평가 소요 시간",
    stat4Num: "0",
    stat4Label: "외부 LLM에 전달되는 원본 데이터",
  },
  de: {
    eyebrow: "Lösungen",
    h1Plain: "KI-gestützte Workflows in regulierten Branchen —",
    h1Highlight: "ohne Offenlegung vertraulicher Daten",
    description: "Sechs regulierte Branchen. Reale Produktivworkflows. Nachgewiesene Kundeneinsätze. Eine Datenschicht, die verhindert, dass vertrauliche Daten bei der KI-Verarbeitung nach außen gelangen — KI läuft auf echten Daten, in Ihrer Umgebung, unter Ihrer Kontrolle.",
    stat1Num: "6",
    stat1Label: "Regulierte Branchen",
    stat2Num: "10+",
    stat2Label: "Produktivkunden",
    stat3Num: "30 Min.",
    stat3Label: "Zeit bis zur ersten Evaluierung",
    stat4Num: "0",
    stat4Label: "Rohdaten an externe LLMs",
  },
}


export default function Section01_Hero({
  locale = "en",
  eyebrow = "",
  h1Plain = "",
  h1Highlight = "",
  description = "",
  stat1Num = "",
  stat1Label = "",
  stat2Num = "",
  stat2Label = "",
  stat3Num = "",
  stat3Label = "",
  stat4Num = "",
  stat4Label = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _eyebrow = T["eyebrow"] || TRANSLATIONS.en["eyebrow"] || eyebrow
  const _h1Plain = T["h1Plain"] || TRANSLATIONS.en["h1Plain"] || h1Plain
  const _h1Highlight = T["h1Highlight"] || TRANSLATIONS.en["h1Highlight"] || h1Highlight
  const _description = T["description"] || TRANSLATIONS.en["description"] || description
  const _stat1Num = T["stat1Num"] || TRANSLATIONS.en["stat1Num"] || stat1Num
  const _stat1Label = T["stat1Label"] || TRANSLATIONS.en["stat1Label"] || stat1Label
  const _stat2Num = T["stat2Num"] || TRANSLATIONS.en["stat2Num"] || stat2Num
  const _stat2Label = T["stat2Label"] || TRANSLATIONS.en["stat2Label"] || stat2Label
  const _stat3Num = T["stat3Num"] || TRANSLATIONS.en["stat3Num"] || stat3Num
  const _stat3Label = T["stat3Label"] || TRANSLATIONS.en["stat3Label"] || stat3Label
  const _stat4Num = T["stat4Num"] || TRANSLATIONS.en["stat4Num"] || stat4Num
  const _stat4Label = T["stat4Label"] || TRANSLATIONS.en["stat4Label"] || stat4Label

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s1-section {
          padding-top: clamp(80px, 10cqi, 140px);
          padding-bottom: clamp(48px, 6cqi, 80px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          text-align: center;
          background-color: var(--c-bg, #ffffff);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s1-h1 {
          font-size: clamp(36px, 5cqi, 64px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          max-width: 860px;
          margin: 0 auto 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-highlight {
          color: var(--c-primary, #5b4fe9);
        }

        .s1-desc {
          font-size: clamp(16px, 1.4cqi, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          line-height: 1.6;
          margin: 0 auto 40px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-stats {
          display: flex;
          justify-content: center;
          gap: clamp(24px, 4cqi, 64px);
          flex-wrap: wrap;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .s1-stat {
          text-align: center;
        }

        .s1-stat-num {
          font-size: clamp(28px, 3cqi, 40px);
          font-weight: 800;
          color: var(--c-primary, #5b4fe9);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .s1-stat-label {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        @container (max-width: 599px) {
          .s1-stats {
            gap: 24px;
          }
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-section">
          <div className="s1-container">
            <span className="s1-eyebrow">{_eyebrow}</span>
            <h1 className="s1-h1">
              {_h1Plain}<span className="s1-highlight">{_h1Highlight}</span>
            </h1>
            <p className="s1-desc">{_description}</p>
            <div className="s1-stats">
              <div className="s1-stat">
                <div className="s1-stat-num">{_stat1Num}</div>
                <div className="s1-stat-label">{_stat1Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{_stat2Num}</div>
                <div className="s1-stat-label">{_stat2Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{_stat3Num}</div>
                <div className="s1-stat-label">{_stat3Label}</div>
              </div>
              <div className="s1-stat">
                <div className="s1-stat-num">{_stat4Num}</div>
                <div className="s1-stat-label">{_stat4Label}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  eyebrow:    { type: ControlType.String, title: "Eyebrow", defaultValue: "" },
  h1Plain:    { type: ControlType.String, title: "H1 Plain", defaultValue: "" },
  h1Highlight:{ type: ControlType.String, title: "H1 Highlight", defaultValue: "" },
  description:{ type: ControlType.String, title: "Description", defaultValue: "", displayTextArea: true },
  stat1Num:   { type: ControlType.String, title: "Stat 1 Number", defaultValue: "" },
  stat1Label: { type: ControlType.String, title: "Stat 1 Label", defaultValue: "" },
  stat2Num:   { type: ControlType.String, title: "Stat 2 Number", defaultValue: "" },
  stat2Label: { type: ControlType.String, title: "Stat 2 Label", defaultValue: "" },
  stat3Num:   { type: ControlType.String, title: "Stat 3 Number", defaultValue: "" },
  stat3Label: { type: ControlType.String, title: "Stat 3 Label", defaultValue: "" },
  stat4Num:   { type: ControlType.String, title: "Stat 4 Number", defaultValue: "" },
  stat4Label: { type: ControlType.String, title: "Stat 4 Label", defaultValue: "" },
})
