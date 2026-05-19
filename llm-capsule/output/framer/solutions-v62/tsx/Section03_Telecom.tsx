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
    tag: "Telecom",
    title: "AI in the NOC, OSS/BSS, and customer ops — without exposing subscribers",
    lead: "Network operations carry subscriber identities, device IDs, circuit IDs, IP ranges, and configurations. PII guardrails miss this; sovereign data rules block raw transmission. LLM Capsule encapsulates locally and routes capsules to approved external LLMs (Path A) or on-prem models (Path B for stricter workflows).",
    blockedLabel: "Without Capsule",
    blockedH: "NOC AI pilot stalls",
    blocked: "Subscriber IDs, device configs, alarm sequences cannot reach external LLM. Pilot demos on synthetic data, then dies in security review.",
    enabledLabel: "With Capsule",
    enabledH: "RCA + recommendation auto-inserted",
    enabled: "Capsule travels; AI generates RCA on protected data; output restored into the original ticket with real subscriber/device/circuit IDs.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Incident RCA generation",
    wf1Desc: "Real-time root cause analysis on production NOC tickets",
    wf2Title: "Customer impact analysis",
    wf2Desc: "SLA risk and enterprise customer impact summarization",
    wf3Title: "Configuration change drafting",
    wf3Desc: "Network config diff explanation and approval drafts",
    wf4Title: "Runbook generation",
    wf4Desc: "Auto-drafting incident-specific runbooks from history",
    customerLabel: "Customer Proof",
    customerName: "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12",
    customerDetail: "Recognized in Data Security & Governance category. NOC RCA generation and customer-impact analysis on real subscriber, network, and configuration data — all encapsulated locally before any LLM call.",
    screenshotAlt: "Telecom Industry Visual",
    readLabel: "Read: How to deploy AI in a telecom NOC →",
    readHref: "/learn/telecom-noc-ai-deployment",
  },
  ko: {
    tag: "SK Telecom",
    title: "NOC·OSS/BSS·고객 운영에 AI를 — 가입자 정보 노출 없이",
    lead: "네트워크 운영에는 가입자 식별자, 디바이스 ID, 회선 ID, IP 대역, 설정 정보가 포함됩니다. PII 가드레일은 이 데이터를 놓치고, 데이터 주권 규정은 원본 전송을 차단합니다. LLM Capsule은 로컬에서 캡슐화한 후, 승인된 외부 LLM(Path A) 또는 온프레미스 모델(보다 엄격한 워크플로우용 Path B)로 캡슐을 전달합니다.",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "NOC AI 파일럿, 보안 심사에서 중단",
    blocked: "가입자 ID, 디바이스 설정, 알람 시퀀스가 외부 LLM에 도달할 수 없습니다. 파일럿은 합성 데이터로 시연하다가 보안 심사에서 중단됩니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "RCA + 권고안 자동 삽입",
    enabled: "캡슐이 전달되고, AI가 보호된 데이터를 기반으로 RCA를 생성합니다. 결과물은 실제 가입자·디바이스·회선 ID와 함께 원본 티켓에 자동 복원됩니다.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "장애 RCA 생성",
    wf1Desc: "실제 NOC 티켓에 대한 실시간 근본 원인 분석",
    wf2Title: "고객 영향 분석",
    wf2Desc: "SLA 위험 및 기업 고객 영향도 요약",
    wf3Title: "설정 변경 초안 작성",
    wf3Desc: "네트워크 설정 변경 내역 설명 및 승인 초안 작성",
    wf4Title: "런북 생성",
    wf4Desc: "이력 기반 장애 특화 런북 자동 초안 작성",
    customerLabel: "고객 도입 사례",
    customerName: "6",
    customerDetail: "데이터 보안 및 거버넌스 부문에서 수상. 실제 가입자·네트워크·설정 데이터를 기반으로 NOC RCA 생성 및 고객 영향 분석 수행 — LLM 호출 전 모두 로컬에서 캡슐화.",
    screenshotAlt: "통신",
    readLabel: "읽기: 통신 NOC에 AI를 배포하는 방법 →",
    readHref: "/learn/telecom-noc-ai-deployment",
  },
  de: {
    tag: "SK Telecom",
    title: "KI im NOC, OSS/BSS und Kundenbetrieb — ohne Offenlegung von Teilnehmerdaten",
    lead: "Netzwerkbetrieb umfasst Teilnehmeridentitäten, Geräte-IDs, Circuit-IDs, IP-Bereiche und Konfigurationsdaten. Klassische PII-Schutzmaßnahmen greifen hier nicht; datenschutzrechtliche Anforderungen blockieren die ungeschützte Übertragung. LLM Capsule kapsuliert die Daten lokal und leitet Kapsel-Darstellungen an zugelassene externe LLMs (Pfad A) oder On-Premise-Modelle (Pfad B für strengere Workflows) weiter.",
    blockedLabel: "Ohne Capsule",
    blockedH: "KI-Pilot im NOC stagniert",
    blocked: "Teilnehmer-IDs, Gerätekonfigurationen und Alarmsequenzen dürfen das externe LLM nicht erreichen. Der Pilot läuft auf synthetischen Daten und scheitert anschließend an der Sicherheitsprüfung.",
    enabledLabel: "Mit Capsule",
    enabledH: "RCA und Handlungsempfehlung automatisch eingefügt",
    enabled: "Die Kapsel wird übertragen. Die KI erstellt eine Ursachenanalyse auf Basis der geschützten Daten. Das Ergebnis wird mit den tatsächlichen Teilnehmer-, Geräte- und Circuit-IDs im Originalticket wiederhergestellt.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Automatische Ursachenanalyse bei Incidents",
    wf1Desc: "Echtzeit-Ursachenanalyse auf produktiven NOC-Tickets",
    wf2Title: "Analyse der Kundenauswirkung",
    wf2Desc: "Zusammenfassung von SLA-Risiken und Auswirkungen auf Geschäftskunden",
    wf3Title: "Entwurf von Konfigurationsänderungen",
    wf3Desc: "Erläuterung von Konfigurationsunterschieden und Entwurf von Freigabedokumenten",
    wf4Title: "Runbook-Erstellung",
    wf4Desc: "Automatische Erstellung einsatzspezifischer Runbooks auf Basis historischer Daten",
    customerLabel: "Kundenreferenz",
    customerName: "6",
    customerDetail: "Ausgezeichnet in der Kategorie Data Security & Governance. NOC-Ursachenanalyse und Auswirkungsanalyse auf Geschäftskunden auf Basis realer Teilnehmer-, Netzwerk- und Konfigurationsdaten — vollständig lokal kapsuliert, bevor ein LLM-Aufruf erfolgt.",
    screenshotAlt: "Telekommunikation",
    readLabel: "Lesen: KI-Einsatz im Telekommunikations-NOC →",
    readHref: "/learn/telecom-noc-ai-deployment",
  },
}


export default function Section03_Telecom({
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
  altBg = false,
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _tag = tag || T["tag"] || TRANSLATIONS.en["tag"]
  const _title = title || T["title"] || TRANSLATIONS.en["title"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _blockedLabel = blockedLabel || T["blockedLabel"] || TRANSLATIONS.en["blockedLabel"]
  const _blockedH = blockedH || T["blockedH"] || TRANSLATIONS.en["blockedH"]
  const _blocked = blocked || T["blocked"] || TRANSLATIONS.en["blocked"]
  const _enabledLabel = enabledLabel || T["enabledLabel"] || TRANSLATIONS.en["enabledLabel"]
  const _enabledH = enabledH || T["enabledH"] || TRANSLATIONS.en["enabledH"]
  const _enabled = enabled || T["enabled"] || TRANSLATIONS.en["enabled"]
  const _workflowsHeading = workflowsHeading || T["workflowsHeading"] || TRANSLATIONS.en["workflowsHeading"]
  const _wf1Title = wf1Title || T["wf1Title"] || TRANSLATIONS.en["wf1Title"]
  const _wf1Desc = wf1Desc || T["wf1Desc"] || TRANSLATIONS.en["wf1Desc"]
  const _wf2Title = wf2Title || T["wf2Title"] || TRANSLATIONS.en["wf2Title"]
  const _wf2Desc = wf2Desc || T["wf2Desc"] || TRANSLATIONS.en["wf2Desc"]
  const _wf3Title = wf3Title || T["wf3Title"] || TRANSLATIONS.en["wf3Title"]
  const _wf3Desc = wf3Desc || T["wf3Desc"] || TRANSLATIONS.en["wf3Desc"]
  const _wf4Title = wf4Title || T["wf4Title"] || TRANSLATIONS.en["wf4Title"]
  const _wf4Desc = wf4Desc || T["wf4Desc"] || TRANSLATIONS.en["wf4Desc"]
  const _customerLabel = customerLabel || T["customerLabel"] || TRANSLATIONS.en["customerLabel"]
  const _customerName = customerName || T["customerName"] || TRANSLATIONS.en["customerName"]
  const _customerDetail = customerDetail || T["customerDetail"] || TRANSLATIONS.en["customerDetail"]
  const _screenshotAlt = screenshotAlt || T["screenshotAlt"] || TRANSLATIONS.en["screenshotAlt"]
  const _readLabel = readLabel || T["readLabel"] || TRANSLATIONS.en["readLabel"]
  const _readHref = readHref || T["readHref"] || TRANSLATIONS.en["readHref"]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s3-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s3-section--alt {
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Tag */
        .s3-_tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        /* Header */
        .s3-header { margin-bottom: 32px; }

        .s3-h2 {
          font-size: clamp(22px, 2.8cqi, 36px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 14px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-_lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 800px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Without / With cards */
        .s3-states {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 28px;
        }

        .s3-state {
          padding: 18px 20px;
          border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s3-state--_blocked {
          background-color: var(--c-coral-soft, #fce9e8);
          border-color: transparent;
        }

        .s3-state--_enabled {
          background-color: var(--c-primary-soft, #eeebfe);
          border-color: transparent;
        }

        .s3-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .s3-state--_blocked .s3-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s3-state--_enabled .s3-state__label { color: var(--c-primary-dark, #3b2fbf); }

        .s3-state__h {
          font-size: 14px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s3-state__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Workflows */
        .s3-workflows { margin-bottom: 28px; }

        .s3-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .s3-workflows__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .s3-workflows__list li {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          padding: 10px 0 10px 24px;
          position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-workflows__list li:last-child { border-bottom: none; }

        .s3-workflows__list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 10px;
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
        }

        .s3-workflows__list li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
        }

        /* Customer proof */
        .s3-customer {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          padding: 20px 24px;
          margin-bottom: 20px;
        }

        .s3-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c8c4f7;
          margin-bottom: 6px;
        }

        .s3-customer__name {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s3-customer__detail {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Screenshot */
        .s3-screenshot {
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

        .s3-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .s3-placeholder {
          text-align: center;
          padding: 32px;
        }

        .s3-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }

        .s3-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 4px;
        }

        .s3-placeholder__spec {
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          opacity: 0.8;
        }

        /* Footer / read link */
        .s3-footer { margin-top: 20px; }

        .s3-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s;
        }

        .s3-read-link:hover {
          border-bottom-color: var(--c-primary, #5b4fe9);
        }

        @container (max-width: 599px) {
          .s3-states {
            grid-template-columns: 1fr;
          }
          .s3-screenshot {
            min-height: 200px;
          }
        }

        @container (min-width: 768px) {
          .s3-screenshot {
            min-height: 300px;
          }
        }

        @container (min-width: 1024px) {
          .s3-screenshot {
            min-height: 360px;
          }
        }
      `}</style>

      <div className="s3-root">
        <section className={`s3-section${altBg ? " s3-section--alt" : ""}`}>
          <div className="s3-container">
            <div className="s3-header">
              <span className="s3-_tag">{_tag}</span>
              <h2 className="s3-h2">{_title}</h2>
              <p className="s3-_lead">{_lead}</p>
            </div>

            <div className="s3-states">
              <div className="s3-state s3-state--_blocked">
                <div className="s3-state__label">{_blockedLabel}</div>
                <div className="s3-state__h">{_blockedH}</div>
                <div className="s3-state__d">{_blocked}</div>
              </div>
              <div className="s3-state s3-state--_enabled">
                <div className="s3-state__label">{_enabledLabel}</div>
                <div className="s3-state__h">{_enabledH}</div>
                <div className="s3-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s3-workflows">
              <div className="s3-workflows__h">{_workflowsHeading}</div>
              <ul className="s3-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s3-customer">
              <div className="s3-customer__label">{_customerLabel}</div>
              <div className="s3-customer__name">{_customerName}</div>
              <div className="s3-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s3-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s3-placeholder">
                  <div className="s3-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#e5e7eb"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s3-placeholder__label">{_screenshotAlt}</div>
                  <div className="s3-placeholder__spec">NOC ticket · capsule → restored states · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s3-footer">
              <a className="s3-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_Telecom, {
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
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: false },
})
