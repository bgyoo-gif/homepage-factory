import { addPropertyControls, ControlType } from "framer"

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
    tag: "Healthcare",
    title: "AI for clinical workflows — PHI never leaves the hospital network",
    lead: "Clinical AI promises 30-50% reduction in documentation burden. But PHI cannot leave the hospital under HIPAA, GDPR, or K-PIPA. PII guardrails miss workflow context, lab sequences, and free-text clinical notes. LLM Capsule encapsulates patient identifiers, MRN, diagnoses, and clinical context locally; restoration happens inside the EHR.",
    blockedLabel: "Without Capsule",
    blockedH: "Documentation pilot blocked",
    blocked: "Privacy officer blocks deployment. Physicians use shadow AI on personal devices; productivity tasted in pilot disappears.",
    enabledLabel: "With Capsule",
    enabledH: "AI drafts inside Epic / Cerner / HIS",
    enabled: "PHI encapsulated; AI drafts radiology summaries and discharge notes; outputs auto-restore in the EHR. Audit feeds the privacy office.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Radiology report drafting",
    wf1Desc: "AI-drafted impressions from imaging studies + clinical history",
    wf2Title: "Discharge summary drafting",
    wf2Desc: "Multi-source summarization across admission, treatment, and follow-up",
    wf3Title: "Clinical coding assist",
    wf3Desc: "ICD-10 / CPT code suggestion with audit trail",
    wf4Title: "Care coordination notes",
    wf4Desc: "Multi-disciplinary handoff drafts with PHI protected",
    customerLabel: "Customer Proof",
    customerName: "Ewha Womans University Medical Center (EUMC)",
    customerDetail: "Clinical workflow summarization with PHI never traversing the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. HIPAA-aligned compliance reporting.",
    screenshotAlt: "Healthcare Industry Visual",
    readLabel: "Read: How to deploy AI in a hospital →",
    readHref: "/learn/hospital-ai-deployment-phi-protection",
  },
  ko: {
    tag: "의료",
    title: "임상 워크플로우에 AI를 — PHI는 절대 병원 네트워크 밖으로 나가지 않습니다",
    lead: "0",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "문서화 파일럿 차단",
    blocked: "개인정보보호 담당자가 배포를 차단합니다. 의사들은 개인 기기에서 비인가 AI를 사용하고, 파일럿에서 경험한 생산성 향상은 사라집니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "Epic / Cerner / HIS 내부에서 AI가 초안 작성",
    enabled: "PHI가 캡슐화되고, AI가 영상 판독 요약과 퇴원 요약을 작성합니다. 결과물은 EHR에 자동 복원되고, 감사 이력은 개인정보보호 부서로 전달됩니다.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "영상 판독 보고서 초안 작성",
    wf1Desc: "영상 검사 및 임상 이력을 기반으로 AI가 소견 초안 작성",
    wf2Title: "퇴원 요약 초안 작성",
    wf2Desc: "입원·치료·추적 관찰 전 과정에 걸친 다중 출처 요약",
    wf3Title: "임상 코딩 보조",
    wf3Desc: "감사 이력과 함께 ICD-10 / CPT 코드 제안",
    wf4Title: "케어 코디네이션 노트",
    wf4Desc: "PHI 보호 상태에서 다학제 인수인계 초안 작성",
    customerLabel: "고객 도입 사례",
    customerName: "EUMC",
    customerDetail: "PHI가 원본 형태로 EUMC 경계를 절대 벗어나지 않는 임상 워크플로우 요약. 로컬 복원을 통해 원본 환자 식별자는 승인된 병원 시스템만 확인할 수 있습니다. HIPAA 준수 보고 지원.",
    screenshotAlt: "의료 산업 비주얼",
    readLabel: "읽기: 병원에 AI를 배포하는 방법 →",
    readHref: "/learn/hospital-ai-deployment-phi-protection",
  },
  de: {
    tag: "Gesundheitswesen",
    title: "KI für klinische Workflows — Patientendaten verlassen das Krankenhausnetz nicht",
    lead: "0",
    blockedLabel: "Ohne Capsule",
    blockedH: "Dokumentationspilot blockiert",
    blocked: "Der Datenschutzbeauftragte blockiert die Einführung. Kliniker weichen auf private Geräte und nicht freigegebene KI-Tools aus; die im Pilot gewonnene Produktivität ist verloren.",
    enabledLabel: "Mit Capsule",
    enabledH: "KI erstellt Entwürfe direkt in Epic / Cerner / HIS",
    enabled: "Patientendaten werden kapsuliert. Die KI erstellt Radiologiezusammenfassungen und Entlassungsbriefe. Die Ergebnisse werden automatisch im Krankenhausinformationssystem wiederhergestellt. Prüfprotokolle werden dem Datenschutzbeauftragten bereitgestellt.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Erstellung von Radiologieberichten",
    wf1Desc: "KI-gestützte Befundformulierung auf Basis von Bildgebung und klinischer Vorgeschichte",
    wf2Title: "Erstellung von Entlassungsbriefen",
    wf2Desc: "Mehrstufige Zusammenfassung aus Aufnahme, Behandlung und Nachsorge",
    wf3Title: "Unterstützung bei der klinischen Kodierung",
    wf3Desc: "Vorschläge für ICD-10- und CPT-Codes mit nachvollziehbarem Prüfpfad",
    wf4Title: "Koordinationsnotizen im Behandlungsteam",
    wf4Desc: "Interdisziplinäre Übergabeentwürfe mit geschützten Patientendaten",
    customerLabel: "Kundenreferenz",
    customerName: "EUMC",
    customerDetail: "Klinische Workflow-Zusammenfassung, ohne dass Patientendaten die EUMC-Infrastruktur in Rohform verlassen. Die lokale Wiederherstellung stellt sicher, dass nur autorisierte Systeme die ursprünglichen Patientenkennungen einsehen. Compliance-Reporting ist auf HIPAA-Anforderungen ausgerichtet.",
    screenshotAlt: "Gesundheitswesen — Branchenvisualisierung",
    readLabel: "Lesen: KI-Einsatz im Krankenhaus →",
    readHref: "/learn/hospital-ai-deployment-phi-protection",
  },
}


export default function Section04_Healthcare({
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
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _tag = locale === "en" ? (tag || T["tag"]) : (T["tag"] || TRANSLATIONS.en["tag"] || tag)
  const _title = locale === "en" ? (title || T["title"]) : (T["title"] || TRANSLATIONS.en["title"] || title)
  const _lead = locale === "en" ? (lead || T["lead"]) : (T["lead"] || TRANSLATIONS.en["lead"] || lead)
  const _blockedLabel = locale === "en" ? (blockedLabel || T["blockedLabel"]) : (T["blockedLabel"] || TRANSLATIONS.en["blockedLabel"] || blockedLabel)
  const _blockedH = locale === "en" ? (blockedH || T["blockedH"]) : (T["blockedH"] || TRANSLATIONS.en["blockedH"] || blockedH)
  const _blocked = locale === "en" ? (blocked || T["blocked"]) : (T["blocked"] || TRANSLATIONS.en["blocked"] || blocked)
  const _enabledLabel = locale === "en" ? (enabledLabel || T["enabledLabel"]) : (T["enabledLabel"] || TRANSLATIONS.en["enabledLabel"] || enabledLabel)
  const _enabledH = locale === "en" ? (enabledH || T["enabledH"]) : (T["enabledH"] || TRANSLATIONS.en["enabledH"] || enabledH)
  const _enabled = locale === "en" ? (enabled || T["enabled"]) : (T["enabled"] || TRANSLATIONS.en["enabled"] || enabled)
  const _workflowsHeading = locale === "en" ? (workflowsHeading || T["workflowsHeading"]) : (T["workflowsHeading"] || TRANSLATIONS.en["workflowsHeading"] || workflowsHeading)
  const _wf1Title = locale === "en" ? (wf1Title || T["wf1Title"]) : (T["wf1Title"] || TRANSLATIONS.en["wf1Title"] || wf1Title)
  const _wf1Desc = locale === "en" ? (wf1Desc || T["wf1Desc"]) : (T["wf1Desc"] || TRANSLATIONS.en["wf1Desc"] || wf1Desc)
  const _wf2Title = locale === "en" ? (wf2Title || T["wf2Title"]) : (T["wf2Title"] || TRANSLATIONS.en["wf2Title"] || wf2Title)
  const _wf2Desc = locale === "en" ? (wf2Desc || T["wf2Desc"]) : (T["wf2Desc"] || TRANSLATIONS.en["wf2Desc"] || wf2Desc)
  const _wf3Title = locale === "en" ? (wf3Title || T["wf3Title"]) : (T["wf3Title"] || TRANSLATIONS.en["wf3Title"] || wf3Title)
  const _wf3Desc = locale === "en" ? (wf3Desc || T["wf3Desc"]) : (T["wf3Desc"] || TRANSLATIONS.en["wf3Desc"] || wf3Desc)
  const _wf4Title = locale === "en" ? (wf4Title || T["wf4Title"]) : (T["wf4Title"] || TRANSLATIONS.en["wf4Title"] || wf4Title)
  const _wf4Desc = locale === "en" ? (wf4Desc || T["wf4Desc"]) : (T["wf4Desc"] || TRANSLATIONS.en["wf4Desc"] || wf4Desc)
  const _customerLabel = locale === "en" ? (customerLabel || T["customerLabel"]) : (T["customerLabel"] || TRANSLATIONS.en["customerLabel"] || customerLabel)
  const _customerName = locale === "en" ? (customerName || T["customerName"]) : (T["customerName"] || TRANSLATIONS.en["customerName"] || customerName)
  const _customerDetail = locale === "en" ? (customerDetail || T["customerDetail"]) : (T["customerDetail"] || TRANSLATIONS.en["customerDetail"] || customerDetail)
  const _screenshotAlt = locale === "en" ? (screenshotAlt || T["screenshotAlt"]) : (T["screenshotAlt"] || TRANSLATIONS.en["screenshotAlt"] || screenshotAlt)
  const _readLabel = locale === "en" ? (readLabel || T["readLabel"]) : (T["readLabel"] || TRANSLATIONS.en["readLabel"] || readLabel)
  const _readHref = locale === "en" ? (readHref || T["readHref"]) : (T["readHref"] || TRANSLATIONS.en["readHref"] || readHref)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s4-section--alt {
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s4-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c-teal, #0ea5a4);
          background-color: var(--c-teal-soft, #e6f7f6);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .s4-header { margin-bottom: 32px; }

        .s4-h2 {
          font-size: clamp(22px, 2.8cqi, 36px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 14px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 800px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-states {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 28px;
        }

        .s4-state {
          padding: 18px 20px;
          border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s4-state--blocked {
          background-color: var(--c-coral-soft, #fce9e8);
          border-color: transparent;
        }

        .s4-state--enabled {
          background-color: var(--c-teal-soft, #e6f7f6);
          border-color: transparent;
        }

        .s4-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .s4-state--blocked .s4-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s4-state--enabled .s4-state__label { color: var(--c-teal-dark, #0b7f7e); }

        .s4-state__h {
          font-size: 14px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s4-state__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-workflows { margin-bottom: 28px; }

        .s4-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-teal, #0ea5a4);
          margin-bottom: 14px;
        }

        .s4-workflows__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .s4-workflows__list li {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          padding: 10px 0 10px 24px;
          position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-workflows__list li:last-child { border-bottom: none; }

        .s4-workflows__list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 10px;
          color: var(--c-teal, #0ea5a4);
          font-size: 12px;
          font-weight: 700;
        }

        .s4-workflows__list li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
        }

        .s4-customer {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          padding: 20px 24px;
          margin-bottom: 20px;
        }

        .s4-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c8c4f7;
          margin-bottom: 6px;
        }

        .s4-customer__name {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s4-customer__detail {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-screenshot {
          margin-top: 28px;
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s4-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .s4-placeholder { text-align: center; padding: 32px; }
        .s4-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s4-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s4-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s4-footer { margin-top: 20px; }

        .s4-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-teal, #0ea5a4);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s;
        }

        .s4-read-link:hover { border-bottom-color: var(--c-teal, #0ea5a4); }

        @container (max-width: 599px) {
          .s4-states { grid-template-columns: 1fr; }
          .s4-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s4-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s4-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s4-root">
        <section className={`s4-section${altBg ? " s4-section--alt" : ""}`}>
          <div className="s4-container">
            <div className="s4-header">
              <span className="s4-tag">{_tag}</span>
              <h2 className="s4-h2">{_title}</h2>
              <p className="s4-lead">{_lead}</p>
            </div>

            <div className="s4-states">
              <div className="s4-state s4-state--blocked">
                <div className="s4-state__label">{_blockedLabel}</div>
                <div className="s4-state__h">{_blockedH}</div>
                <div className="s4-state__d">{_blocked}</div>
              </div>
              <div className="s4-state s4-state--enabled">
                <div className="s4-state__label">{_enabledLabel}</div>
                <div className="s4-state__h">{_enabledH}</div>
                <div className="s4-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s4-workflows">
              <div className="s4-workflows__h">{_workflowsHeading}</div>
              <ul className="s4-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s4-customer">
              <div className="s4-customer__label">{_customerLabel}</div>
              <div className="s4-customer__name">{_customerName}</div>
              <div className="s4-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s4-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s4-placeholder">
                  <div className="s4-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#e6f7f6"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#0ea5a4" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s4-placeholder__label">{_screenshotAlt}</div>
                  <div className="s4-placeholder__spec">EHR radiology report drafting · light theme · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s4-footer">
              <a className="s4-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_Healthcare, {
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
