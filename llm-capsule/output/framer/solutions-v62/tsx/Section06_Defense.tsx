import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

interface Props {
  locale?: "en" | "ko" | "de"
  tag?: string
  title?: string
  lead?: string
  blockedLabel?: string
  blockedH?: string
  blocked?: string
  enabledLabel?: string
  enabledH?: string
  enabled?: string
  workflowsHeading?: string
  wf1Title?: string
  wf1Desc?: string
  wf2Title?: string
  wf2Desc?: string
  wf3Title?: string
  wf3Desc?: string
  wf4Title?: string
  wf4Desc?: string
  customerLabel?: string
  customerName?: string
  customerDetail?: string
  screenshotImg?: string
  screenshotAlt?: string
  readLabel?: string
  readHref?: string
  altBg?: boolean
}

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    tag: "Public Sector / Defense",
    title: "AI on classified mission workflows — fully on-prem, zero external transmission",
    lead: "Defense, intelligence, and public-sector workflows demand zero external transmission. No external LLM endpoint is acceptable. LLM Capsule's Path B (on-prem local lightweight model) runs entirely inside the command's network — same Capsule instance, same audit framework, no external reach.",
    blockedLabel: "Without Capsule",
    blockedH: "AI categorically excluded",
    blocked: "External LLM use is not permitted. Mission workflows continue without AI support; productivity gap persists.",
    enabledLabel: "With Capsule",
    enabledH: "AI inside command boundary",
    enabled: "Quantized on-prem model + Capsule encapsulation + local audit. AI drafts mission briefs, intelligence summaries, and operational reports — entirely within the command.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Mission brief drafting",
    wf1Desc: "AI-drafted operational briefs from multi-source intelligence",
    wf2Title: "Operational report summarization",
    wf2Desc: "Multi-format report consolidation and impact synthesis",
    wf3Title: "Doctrine reference assist",
    wf3Desc: "Doctrine and procedure lookup with classification protection",
    wf4Title: "After-action review draft",
    wf4Desc: "Post-operation review with mission identifiers protected",
    customerLabel: "Customer Proof",
    customerName: "Ministry of National Defense (Korea)",
    customerDetail: "Mission-grade workflows on Path B (on-prem local) with full audit feed to command-level governance. Mission references, geographic identifiers, and unit data encapsulated; restoration tightly scoped under RBAC.",
    screenshotAlt: "Defense Industry Visual",
    readLabel: "Read: Sovereign AI architecture →",
    readHref: "/learn/sovereign-ai-european-enterprises",
  },
  ko: {
    tag: "공공 부문 / 국방",
    title: "기밀 임무 워크플로우에 AI를 — 완전 온프레미스, 외부 전송 제로",
    lead: "국방·정보·공공 부문 워크플로우는 외부 전송 제로를 요구합니다. 외부 LLM 엔드포인트는 허용되지 않습니다. LLM Capsule의 Path B(온프레미스 로컬 경량 모델)는 사령부 네트워크 내부에서만 동작합니다 — 동일한 Capsule 인스턴스, 동일한 감사 프레임워크, 외부 연결 없음.",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "AI, 전면 배제",
    blocked: "외부 LLM 사용이 허용되지 않습니다. 임무 워크플로우는 AI 지원 없이 계속되고, 생산성 격차가 지속됩니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "사령부 경계 내에서 AI 작동",
    enabled: "양자화 온프레미스 모델 + Capsule 캡슐화 + 로컬 감사. AI가 임무 브리핑, 정보 요약, 작전 보고서를 작성합니다 — 전적으로 사령부 내부에서.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "임무 브리핑 초안 작성",
    wf1Desc: "다중 출처 정보를 기반으로 AI가 작전 브리핑 초안 작성",
    wf2Title: "작전 보고서 요약",
    wf2Desc: "다양한 형식의 보고서 통합 및 영향 종합",
    wf3Title: "교리 참조 지원",
    wf3Desc: "보안 등급 보호 하에 교리 및 절차 조회",
    wf4Title: "사후 검토 보고서 초안 작성",
    wf4Desc: "임무 식별자 보호 상태에서 작전 후 검토",
    customerLabel: "고객 도입 사례",
    customerName: "대한민국 국방부",
    customerDetail: "Path B(온프레미스 로컬) 기반의 임무급 워크플로우, 사령부 수준 거버넌스에 전체 감사 이력 제공. 임무 참조 정보, 지리적 식별자, 부대 데이터 캡슐화. RBAC 기반으로 엄격하게 통제된 복원.",
    screenshotAlt: "국방 산업 비주얼",
    readLabel: "읽기: 소버린 AI 아키텍처 →",
    readHref: "/learn/sovereign-ai-european-enterprises",
  },
  de: {
    tag: "Öffentlicher Sektor / Verteidigung",
    title: "KI für klassifizierte Einsatzworkflows — vollständig On-Premise, keine externe Datenübertragung",
    lead: "Verteidigungs-, Nachrichten- und Behördenworkflows erfordern den vollständigen Verzicht auf externe Datenübertragung. Der Einsatz externer LLM-Endpunkte ist nicht zulässig. Pfad B von LLM Capsule (lokales On-Premise-Modell) läuft vollständig im internen Netz — dieselbe Capsule-Instanz, dasselbe Audit-Framework, keine externe Verbindung.",
    blockedLabel: "Ohne Capsule",
    blockedH: "KI grundsätzlich ausgeschlossen",
    blocked: "Externe LLM-Dienste sind nicht erlaubt. Einsatzworkflows werden ohne KI-Unterstützung durchgeführt; Produktivitätsnachteile bleiben bestehen.",
    enabledLabel: "Mit Capsule",
    enabledH: "KI innerhalb des Kommandonetzes",
    enabled: "Quantisiertes On-Premise-Modell, Capsule-Kapsulierung und lokale Auditierung. Die KI erstellt Lageberichte, Erkenntniszusammenfassungen und Einsatzberichte — vollständig innerhalb des Kommandos.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Erstellung von Lageberichten",
    wf1Desc: "KI-gestützte Lageberichte aus mehreren Quellen",
    wf2Title: "Zusammenfassung von Einsatzberichten",
    wf2Desc: "Konsolidierung mehrstufiger Berichte und Auswirkungsanalyse",
    wf3Title: "Unterstützung bei Doktrinreferenzen",
    wf3Desc: "Abfrage von Doktrin- und Verfahrensdokumenten mit Klassifizierungsschutz",
    wf4Title: "Entwurf der Nachbetrachtung",
    wf4Desc: "Einsatznachbereitung mit geschützten Einsatzkennungen",
    customerLabel: "Kundenreferenz",
    customerName: "Verteidigungsministerium (Korea)",
    customerDetail: "Einsatzworkflows der höchsten Schutzklasse auf Pfad B (lokal, On-Premise) mit vollständigem Audit-Feed für die Governance auf Kommandobene. Einsatzbezüge, geografische Kennungen und Einheitsdaten werden kapsuliert; die Wiederherstellung ist strikt per RBAC eingeschränkt.",
    screenshotAlt: "Verteidigung — Branchenvisualisierung",
    readLabel: "Lesen: Souveräne KI-Architektur →",
    readHref: "/learn/sovereign-ai-european-enterprises",
  },
}


export default function Section06_Defense({
  locale = "en",
  tag = "",
  title = "",
  lead = "",
  blockedLabel = "",
  blockedH = "",
  blocked = "",
  enabledLabel = "",
  enabledH = "",
  enabled = "",
  workflowsHeading = "",
  wf1Title = "",
  wf1Desc = "",
  wf2Title = "",
  wf2Desc = "",
  wf3Title = "",
  wf3Desc = "",
  wf4Title = "",
  wf4Desc = "",
  customerLabel = "",
  customerName = "",
  customerDetail = "",
  screenshotImg = "",
  screenshotAlt = "",
  readLabel = "",
  readHref = "",
  altBg = true,
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
  const _tag = T["tag"] || TRANSLATIONS.en["tag"] || tag
  const _title = T["title"] || TRANSLATIONS.en["title"] || title
  const _lead = T["lead"] || TRANSLATIONS.en["lead"] || lead
  const _blockedLabel = T["blockedLabel"] || TRANSLATIONS.en["blockedLabel"] || blockedLabel
  const _blockedH = T["blockedH"] || TRANSLATIONS.en["blockedH"] || blockedH
  const _blocked = T["blocked"] || TRANSLATIONS.en["blocked"] || blocked
  const _enabledLabel = T["enabledLabel"] || TRANSLATIONS.en["enabledLabel"] || enabledLabel
  const _enabledH = T["enabledH"] || TRANSLATIONS.en["enabledH"] || enabledH
  const _enabled = T["enabled"] || TRANSLATIONS.en["enabled"] || enabled
  const _workflowsHeading = T["workflowsHeading"] || TRANSLATIONS.en["workflowsHeading"] || workflowsHeading
  const _wf1Title = T["wf1Title"] || TRANSLATIONS.en["wf1Title"] || wf1Title
  const _wf1Desc = T["wf1Desc"] || TRANSLATIONS.en["wf1Desc"] || wf1Desc
  const _wf2Title = T["wf2Title"] || TRANSLATIONS.en["wf2Title"] || wf2Title
  const _wf2Desc = T["wf2Desc"] || TRANSLATIONS.en["wf2Desc"] || wf2Desc
  const _wf3Title = T["wf3Title"] || TRANSLATIONS.en["wf3Title"] || wf3Title
  const _wf3Desc = T["wf3Desc"] || TRANSLATIONS.en["wf3Desc"] || wf3Desc
  const _wf4Title = T["wf4Title"] || TRANSLATIONS.en["wf4Title"] || wf4Title
  const _wf4Desc = T["wf4Desc"] || TRANSLATIONS.en["wf4Desc"] || wf4Desc
  const _customerLabel = T["customerLabel"] || TRANSLATIONS.en["customerLabel"] || customerLabel
  const _customerName = T["customerName"] || TRANSLATIONS.en["customerName"] || customerName
  const _customerDetail = T["customerDetail"] || TRANSLATIONS.en["customerDetail"] || customerDetail
  const _screenshotAlt = T["screenshotAlt"] || TRANSLATIONS.en["screenshotAlt"] || screenshotAlt
  const _readLabel = T["readLabel"] || TRANSLATIONS.en["readLabel"] || readLabel
  const _readHref = T["readHref"] || TRANSLATIONS.en["readHref"] || readHref

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s6-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s6-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Defense: ink tag */
        .s6-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s6-header { margin-bottom: 32px; }

        .s6-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s6-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s6-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s6-state--enabled { background-color: var(--c-bg-soft, #f7f8fb); border-color: var(--c-rule, #e5e7eb); }

        .s6-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s6-state--blocked .s6-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s6-state--enabled .s6-state__label { color: var(--c-ink-soft, #3a3d5e); }

        .s6-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s6-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-workflows { margin-bottom: 28px; }

        .s6-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-ink, #0f1130); margin-bottom: 14px;
        }

        .s6-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s6-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-workflows__list li:last-child { border-bottom: none; }

        .s6-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-ink, #0f1130); font-size: 12px; font-weight: 700;
        }

        .s6-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s6-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s6-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s6-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s6-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        /* Defense screenshot: dark */
        .s6-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-dark, #0f1130);
          border: 1px solid var(--c-bg-dark-2, #1b1d4a);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s6-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s6-placeholder { text-align: center; padding: 32px; }
        .s6-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s6-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 4px; opacity: 0.6;
        }
        .s6-placeholder__spec { font-size: 12px; color: #c8c4f7; opacity: 0.4; }

        .s6-footer { margin-top: 20px; }

        .s6-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-ink, #0f1130);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s6-read-link:hover { border-bottom-color: var(--c-ink, #0f1130); }

        @container (max-width: 599px) {
          .s6-states { grid-template-columns: 1fr; }
          .s6-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s6-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s6-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s6-root">
        <section className={`s6-section${altBg ? " s6-section--alt" : ""}`}>
          <div className="s6-container">
            <div className="s6-header">
              <span className="s6-tag">{_tag}</span>
              <h2 className="s6-h2">{_title}</h2>
              <p className="s6-lead">{_lead}</p>
            </div>

            <div className="s6-states">
              <div className="s6-state s6-state--blocked">
                <div className="s6-state__label">{_blockedLabel}</div>
                <div className="s6-state__h">{_blockedH}</div>
                <div className="s6-state__d">{_blocked}</div>
              </div>
              <div className="s6-state s6-state--enabled">
                <div className="s6-state__label">{_enabledLabel}</div>
                <div className="s6-state__h">{_enabledH}</div>
                <div className="s6-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s6-workflows">
              <div className="s6-workflows__h">{_workflowsHeading}</div>
              <ul className="s6-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s6-customer">
              <div className="s6-customer__label">{_customerLabel}</div>
              <div className="s6-customer__name">{_customerName}</div>
              <div className="s6-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s6-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s6-placeholder">
                  <div className="s6-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#1b1d4a"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#c8c4f7" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#c8c4f7" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#c8c4f7" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s6-placeholder__label">{_screenshotAlt}</div>
                  <div className="s6-placeholder__spec">Mission brief · dark theme · Path B + audit badges · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s6-footer">
              <a className="s6-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_Defense, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  tag:              { type: ControlType.String,  title: "Tag", defaultValue: "" },
  title:            { type: ControlType.String,  title: "Title", defaultValue: "", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead", defaultValue: "", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label", defaultValue: "" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading", defaultValue: "" },
  blocked:          { type: ControlType.String,  title: "Blocked Text", defaultValue: "", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label", defaultValue: "" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading", defaultValue: "" },
  enabled:          { type: ControlType.String,  title: "Enabled Text", defaultValue: "", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title", defaultValue: "" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc", defaultValue: "" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title", defaultValue: "" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc", defaultValue: "" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title", defaultValue: "" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc", defaultValue: "" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title", defaultValue: "" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc", defaultValue: "" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label", defaultValue: "" },
  customerName:     { type: ControlType.String,  title: "Customer Name", defaultValue: "" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail", defaultValue: "", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt", defaultValue: "" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label", defaultValue: "" },
  readHref:         { type: ControlType.String,  title: "Read Link URL", defaultValue: "" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: true },
})
