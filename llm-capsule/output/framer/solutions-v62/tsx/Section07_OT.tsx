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
    tag: "OT / Industrial Cyber",
    title: "AI in OT environments — without exposing asset identifiers or process data",
    lead: "OT (operational technology) workflows protect mission-critical industrial assets — power, manufacturing, oil & gas, water. PLCs, SCADA tags, asset IDs, and process variables can't leak. LLM Capsule encapsulates OT identifiers locally; AI assists with anomaly explanation, runbook drafting, and incident response.",
    blockedLabel: "Without Capsule",
    blockedH: "OT teams blocked from AI",
    blocked: "Asset IDs, process variables, vendor configurations cannot reach external LLM. OT operators have no AI support for incident analysis.",
    enabledLabel: "With Capsule",
    enabledH: "AI assist for OT incident response",
    enabled: "OT identifiers encapsulated. AI drafts incident analysis, anomaly explanation, and recommended runbook on protected capsule; restored locally for OT operators.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Anomaly explanation",
    wf1Desc: "AI-generated explanation of detected OT anomalies",
    wf2Title: "Asset documentation",
    wf2Desc: "Auto-drafting asset and process documentation",
    wf3Title: "Vulnerability triage",
    wf3Desc: "Vulnerability impact analysis on protected asset data",
    wf4Title: "Vendor advisory parsing",
    wf4Desc: "Vendor security advisory parsing and impact mapping",
    customerLabel: "Customer Proof",
    customerName: "Claroty",
    customerDetail: "Industrial cybersecurity workflows with OT asset identifiers and process variables encapsulated locally. AI assists analysts without exposing customer infrastructure data.",
    screenshotAlt: "OT Industry Visual",
    readLabel: "Read: AI on network & operations data →",
    readHref: "/learn/ai-on-network-operations-data",
  },
  ko: {
    tag: "OT / 산업 사이버보안",
    title: "OT 환경에서 AI를 — 자산 식별자 및 프로세스 데이터 노출 없이",
    lead: "OT(운영 기술) 워크플로우는 전력·제조·석유가스·수자원 등 핵심 산업 자산을 보호합니다. PLC, SCADA 태그, 자산 ID, 프로세스 변수는 절대 외부로 유출되어서는 안 됩니다. LLM Capsule은 OT 식별자를 로컬에서 캡슐화하고, AI가 이상 탐지 설명, 런북 초안 작성, 인시던트 대응을 지원합니다.",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "OT 팀, AI 사용 차단",
    blocked: "자산 ID, 프로세스 변수, 벤더 설정이 외부 LLM에 도달할 수 없습니다. OT 운영자는 인시던트 분석에서 AI 지원을 받지 못합니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "OT 인시던트 대응에 AI 지원",
    enabled: "OT 식별자가 캡슐화됩니다. AI가 보호된 캡슐을 기반으로 인시던트 분석, 이상 탐지 설명, 런북 권고안을 작성하고, OT 운영자에게 로컬에서 복원됩니다.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "이상 징후 설명",
    wf1Desc: "탐지된 OT 이상 징후에 대한 AI 생성 설명",
    wf2Title: "자산 문서화",
    wf2Desc: "자산 및 프로세스 문서 자동 초안 작성",
    wf3Title: "취약점 트리아지",
    wf3Desc: "보호된 자산 데이터에 대한 취약점 영향 분석",
    wf4Title: "벤더 권고문 파싱",
    wf4Desc: "벤더 보안 권고문 파싱 및 영향 매핑",
    customerLabel: "고객 도입 사례",
    customerName: "Claroty",
    customerDetail: "OT 자산 식별자 및 프로세스 변수를 로컬에서 캡슐화한 산업 사이버보안 워크플로우. AI가 고객 인프라 데이터를 노출하지 않고 분석가를 지원합니다.",
    screenshotAlt: "OT 산업 비주얼",
    readLabel: "읽기: 네트워크 및 운영 데이터에서의 AI →",
    readHref: "/learn/ai-on-network-operations-data",
  },
  de: {
    tag: "OT / Industrielle Cybersicherheit",
    title: "KI in OT-Umgebungen — ohne Offenlegung von Asset-Kennungen oder Prozessdaten",
    lead: "OT-Workflows schützen betriebskritische Industrieanlagen in den Bereichen Energie, Fertigung, Öl und Gas sowie Wasserversorgung. SPS-Kennungen, SCADA-Tags, Asset-IDs und Prozessvariablen dürfen nicht nach außen gelangen. LLM Capsule kapsuliert OT-Kennungen lokal; die KI unterstützt bei Anomalieerklärungen, Runbook-Entwürfen und der Incident-Response.",
    blockedLabel: "Ohne Capsule",
    blockedH: "OT-Teams ohne KI-Unterstützung",
    blocked: "Asset-IDs, Prozessvariablen und Herstellerkonfigurationen dürfen das externe LLM nicht erreichen. OT-Betreiber haben keine KI-Unterstützung bei der Störungsanalyse.",
    enabledLabel: "Mit Capsule",
    enabledH: "KI-Unterstützung bei OT-Störungsbearbeitung",
    enabled: "OT-Kennungen werden kapsuliert. Die KI erstellt Störungsanalysen, Anomalieerklärungen und Runbook-Empfehlungen auf Basis der geschützten Kapsel; die Wiederherstellung erfolgt lokal für die OT-Betreiber.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Anomalieerklärung",
    wf1Desc: "KI-generierte Erläuterung erkannter OT-Anomalien",
    wf2Title: "Asset-Dokumentation",
    wf2Desc: "Automatische Erstellung von Asset- und Prozessdokumentation",
    wf3Title: "Schwachstellentriage",
    wf3Desc: "Auswirkungsanalyse von Schwachstellen auf Basis geschützter Asset-Daten",
    wf4Title: "Auswertung von Herstelleradvisories",
    wf4Desc: "Analyse sicherheitsbezogener Herstelleradvisories und Auswirkungszuordnung",
    customerLabel: "Kundenreferenz",
    customerName: "Claroty",
    customerDetail: "Industrielle Cybersicherheitsworkflows mit lokal kapsulierten OT-Asset-Kennungen und Prozessvariablen. Die KI unterstützt Analysten, ohne Infrastrukturdaten der Kunden offenzulegen.",
    screenshotAlt: "OT — Branchenvisualisierung",
    readLabel: "Lesen: KI auf Netzwerk- und Betriebsdaten →",
    readHref: "/learn/ai-on-network-operations-data",
  },
}


export default function Section07_OT({
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

        .s7-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s7-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s7-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s7-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s7-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-coral, #ef5350);
          background-color: var(--c-coral-soft, #fce9e8);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s7-header { margin-bottom: 32px; }

        .s7-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s7-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s7-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s7-state--enabled { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }

        .s7-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s7-state--blocked .s7-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s7-state--enabled .s7-state__label { color: var(--c-coral, #ef5350); }

        .s7-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s7-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-workflows { margin-bottom: 28px; }

        .s7-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-coral, #ef5350); margin-bottom: 14px;
        }

        .s7-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s7-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-workflows__list li:last-child { border-bottom: none; }

        .s7-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-coral, #ef5350); font-size: 12px; font-weight: 700;
        }

        .s7-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s7-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s7-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s7-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s7-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s7-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s7-placeholder { text-align: center; padding: 32px; }
        .s7-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s7-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s7-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s7-footer { margin-top: 20px; }

        .s7-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-coral, #ef5350);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s7-read-link:hover { border-bottom-color: var(--c-coral, #ef5350); }

        @container (max-width: 599px) {
          .s7-states { grid-template-columns: 1fr; }
          .s7-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s7-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s7-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s7-root">
        <section className={`s7-section${altBg ? " s7-section--alt" : ""}`}>
          <div className="s7-container">
            <div className="s7-header">
              <span className="s7-tag">{_tag}</span>
              <h2 className="s7-h2">{_title}</h2>
              <p className="s7-lead">{_lead}</p>
            </div>

            <div className="s7-states">
              <div className="s7-state s7-state--blocked">
                <div className="s7-state__label">{_blockedLabel}</div>
                <div className="s7-state__h">{_blockedH}</div>
                <div className="s7-state__d">{_blocked}</div>
              </div>
              <div className="s7-state s7-state--enabled">
                <div className="s7-state__label">{_enabledLabel}</div>
                <div className="s7-state__h">{_enabledH}</div>
                <div className="s7-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s7-workflows">
              <div className="s7-workflows__h">{_workflowsHeading}</div>
              <ul className="s7-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s7-customer">
              <div className="s7-customer__label">{_customerLabel}</div>
              <div className="s7-customer__name">{_customerName}</div>
              <div className="s7-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s7-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s7-placeholder">
                  <div className="s7-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#fce9e8"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#ef5350" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#ef5350" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#ef5350" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s7-placeholder__label">{_screenshotAlt}</div>
                  <div className="s7-placeholder__spec">Industrial monitoring console · anomaly + AI explanation · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s7-footer">
              <a className="s7-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_OT, {
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
