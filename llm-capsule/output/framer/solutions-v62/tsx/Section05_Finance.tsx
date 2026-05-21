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
    tag: "Finance / Insurance",
    title: "AI on real claim, policy, and customer data — under bank-grade governance",
    lead: "Insurance and banking workflows are document-heavy and customer-data-heavy: claim narratives, policy details, KYC records, transaction patterns. Sector regulators (FSC, FSS, BaFin, ACPR) increasingly require demonstrable data governance for AI workflows. LLM Capsule keeps customer data inside while AI processes safe capsules.",
    blockedLabel: "Without Capsule",
    blockedH: "Claims AI never reaches production",
    blocked: "Customer name, policy ID, claim narrative cannot reach external LLM. AI drafts on synthetic data; production deployment fails risk review.",
    enabledLabel: "With Capsule",
    enabledH: "AI processes claims at production volume",
    enabled: "Capsule + restoration enables real-volume claim classification, fraud signal generation, and underwriting drafts inside the insurer's existing systems.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Claim classification & triage",
    wf1Desc: "AI-powered intake, severity scoring, fraud signaling",
    wf2Title: "Damage assessment",
    wf2Desc: "Multi-document assessment with vehicle/property data restored",
    wf3Title: "Underwriting draft",
    wf3Desc: "Risk evaluation and premium recommendation drafts",
    wf4Title: "Regulatory submission",
    wf4Desc: "Filing draft and compliance review assist",
    customerLabel: "Customer Proof",
    customerName: "Kyobo · DB Insurance · IBK",
    customerDetail: "AI-powered claim and policy workflows on real customer data. No customer data leaves the institution's environment in raw form. Aligned with sector regulator expectations and SOX where applicable.",
    screenshotAlt: "Finance Industry Visual",
    readLabel: "Read: Pilot to production for regulated AI →",
    readHref: "/learn/pilot-to-production-enterprise-ai",
  },
  ko: {
    tag: "금융 / 보험",
    title: "실제 청구·보험증권·고객 데이터에 AI를 — 은행급 거버넌스 아래",
    lead: "보험 및 은행 워크플로우는 문서와 고객 데이터가 집중됩니다. 청구 내러티브, 보험증권 상세 내용, KYC 기록, 거래 패턴이 이에 해당합니다. 금융감독원(FSC, FSS), BaFin, ACPR 등 규제기관은 AI 워크플로우에 대한 입증 가능한 데이터 거버넌스를 점점 더 요구하고 있습니다. LLM Capsule은 고객 데이터를 내부에 유지하면서 AI가 안전한 캡슐을 처리합니다.",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "청구 AI, 프로덕션에 도달하지 못합니다",
    blocked: "고객 이름, 보험증권 ID, 청구 내러티브가 외부 LLM에 도달할 수 없습니다. AI는 합성 데이터로 초안을 작성하고, 프로덕션 배포는 리스크 심사에서 실패합니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "AI가 실제 운영 볼륨으로 청구를 처리합니다",
    enabled: "캡슐화 및 복원을 통해 실제 운영 볼륨의 청구 분류, 사기 신호 생성, 언더라이팅 초안 작성이 보험사의 기존 시스템 내에서 가능합니다.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "청구 분류 및 트리아지",
    wf1Desc: "AI 기반 접수, 심각도 점수 산정, 사기 신호 탐지",
    wf2Title: "손해 사정",
    wf2Desc: "차량·재산 데이터 복원 후 다중 문서 기반 손해 사정",
    wf3Title: "언더라이팅 초안 작성",
    wf3Desc: "리스크 평가 및 보험료 권고안 초안 작성",
    wf4Title: "규제 제출",
    wf4Desc: "신고 초안 작성 및 컴플라이언스 검토 지원",
    customerLabel: "고객 도입 사례",
    customerName: "Kyobo",
    customerDetail: "실제 고객 데이터 기반의 AI 청구·보험증권 워크플로우. 고객 데이터는 원본 형태로 기관 환경을 절대 벗어나지 않습니다. 금융 규제기관 요건 및 해당하는 경우 SOX 준수.",
    screenshotAlt: "금융 산업 비주얼",
    readLabel: "읽기: 규제 산업 AI 파일럿에서 프로덕션까지 →",
    readHref: "/learn/pilot-to-production-enterprise-ai",
  },
  de: {
    tag: "Finanzwesen / Versicherung",
    title: "KI auf echten Schadenakten, Policendaten und Kundendaten — unter bankenkonformer Governance",
    lead: "Versicherungs- und Bankworkflows sind dokumenten- und kundendatenintensiv: Schadenmeldungen, Policendetails, KYC-Unterlagen, Transaktionsmuster. Aufsichtsbehörden wie BaFin, FSC, FSS und ACPR fordern zunehmend nachweisbare Datenschutzmaßnahmen beim KI-Einsatz. LLM Capsule hält Kundendaten innerhalb der eigenen Infrastruktur, während die KI geschützte Kapseln verarbeitet.",
    blockedLabel: "Ohne Capsule",
    blockedH: "Schadenbearbeitungs-KI gelangt nicht in den Produktivbetrieb",
    blocked: "Kundenname, Policen-ID und Schadenbeschreibung dürfen das externe LLM nicht erreichen. KI-Entwürfe auf synthetischen Daten scheitern anschließend an der Risikoprüfung.",
    enabledLabel: "Mit Capsule",
    enabledH: "KI verarbeitet Schadenakten im Produktivbetrieb",
    enabled: "Kapsulierung und Wiederherstellung ermöglichen Schadenklassifizierung, Betrugssignalermittlung und Zeichnungsentwürfe in den bestehenden Systemen des Versicherers — im tatsächlichen Produktionsvolumen.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Schadenklassifizierung und Triage",
    wf1Desc: "KI-gestützte Erfassung, Schweregradbewertung und Betrugserkennung",
    wf2Title: "Schadenbewertung",
    wf2Desc: "Mehrdokumentenbewertung mit wiederhergestellten Fahrzeug- und Objektdaten",
    wf3Title: "Zeichnungsentwurf",
    wf3Desc: "Risikobeurteilung und Entwurf von Prämienempfehlungen",
    wf4Title: "Aufsichtsrechtliche Einreichung",
    wf4Desc: "Entwurf von Meldungen und Unterstützung bei der Compliance-Prüfung",
    customerLabel: "Kundenreferenz",
    customerName: "Kyobo",
    customerDetail: "KI-gestützte Schaden- und Policenworkflows auf realen Kundendaten. Kundendaten verlassen die Unternehmensumgebung nicht in Rohform. Anforderungen der Finanzaufsicht sowie SOX werden berücksichtigt.",
    screenshotAlt: "Finanzwesen — Branchenvisualisierung",
    readLabel: "Lesen: Vom Pilot zum Produktivbetrieb bei regulierter KI →",
    readHref: "/learn/pilot-to-production-enterprise-ai",
  },
}


export default function Section05_Finance({
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

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s5-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s5-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-amber, #f59e0b);
          background-color: var(--c-amber-soft, #fef3c7);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s5-header { margin-bottom: 32px; }

        .s5-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s5-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s5-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s5-state--enabled { background-color: var(--c-amber-soft, #fef3c7); border-color: transparent; }

        .s5-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s5-state--blocked .s5-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s5-state--enabled .s5-state__label { color: var(--c-amber-dark, #b7790c); }

        .s5-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s5-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-workflows { margin-bottom: 28px; }

        .s5-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-amber, #f59e0b); margin-bottom: 14px;
        }

        .s5-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s5-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-workflows__list li:last-child { border-bottom: none; }

        .s5-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-amber, #f59e0b); font-size: 12px; font-weight: 700;
        }

        .s5-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s5-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s5-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s5-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s5-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s5-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s5-placeholder { text-align: center; padding: 32px; }
        .s5-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s5-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s5-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s5-footer { margin-top: 20px; }

        .s5-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-amber, #f59e0b);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s5-read-link:hover { border-bottom-color: var(--c-amber, #f59e0b); }

        @container (max-width: 599px) {
          .s5-states { grid-template-columns: 1fr; }
          .s5-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s5-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s5-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s5-root">
        <section className={`s5-section${altBg ? " s5-section--alt" : ""}`}>
          <div className="s5-container">
            <div className="s5-header">
              <span className="s5-tag">{_tag}</span>
              <h2 className="s5-h2">{_title}</h2>
              <p className="s5-lead">{_lead}</p>
            </div>

            <div className="s5-states">
              <div className="s5-state s5-state--blocked">
                <div className="s5-state__label">{_blockedLabel}</div>
                <div className="s5-state__h">{_blockedH}</div>
                <div className="s5-state__d">{_blocked}</div>
              </div>
              <div className="s5-state s5-state--enabled">
                <div className="s5-state__label">{_enabledLabel}</div>
                <div className="s5-state__h">{_enabledH}</div>
                <div className="s5-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s5-workflows">
              <div className="s5-workflows__h">{_workflowsHeading}</div>
              <ul className="s5-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s5-customer">
              <div className="s5-customer__label">{_customerLabel}</div>
              <div className="s5-customer__name">{_customerName}</div>
              <div className="s5-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s5-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s5-placeholder">
                  <div className="s5-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#fef3c7"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s5-placeholder__label">{_screenshotAlt}</div>
                  <div className="s5-placeholder__spec">Claim form · capsule → restored · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s5-footer">
              <a className="s5-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_Finance, {
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
