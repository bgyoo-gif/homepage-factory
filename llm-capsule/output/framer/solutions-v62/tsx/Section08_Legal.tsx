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
    tag: "Legal",
    title: "AI for matter management — privilege preserved, deal terms protected",
    lead: "Legal workflows process privileged material — contracts, deal terms, M&A code names, litigation strategy, regulatory filings. Privilege preservation is non-negotiable. LLM Capsule encapsulates parties, deal terms, and privileged content locally; AI summarizes and analyzes the protected capsule; restoration happens inside the firm's matter management system.",
    blockedLabel: "Without Capsule",
    blockedH: "Outside-counsel AI blocked",
    blocked: "Deal terms, party names, code names cannot reach external LLM. Associates fall back to manual review; AI value never materializes.",
    enabledLabel: "With Capsule",
    enabledH: "AI assist inside privileged workflow",
    enabled: "Parties + terms encapsulated; AI drafts summaries, risk analyses, and clause comparisons; outputs restored in matter management with privilege preserved.",
    workflowsHeading: "Production Workflows",
    wf1Title: "Confidential contract review",
    wf1Desc: "AI-drafted risk summary across long-form contracts",
    wf2Title: "Due diligence summarization",
    wf2Desc: "Multi-document M&A diligence with deal data protected",
    wf3Title: "Regulatory filing draft",
    wf3Desc: "Filing draft and compliance check with sensitive content masked",
    wf4Title: "Matter triage",
    wf4Desc: "Initial matter intake and routing with privileged data inside",
    customerLabel: "Customer Proof",
    customerName: "Shin&Kim",
    customerDetail: "One of Korea's largest law firms. AI assist on privileged matter workflows with parties, deal terms, and code names encapsulated. Privilege preservation under firm governance.",
    screenshotAlt: "Legal Industry Visual",
    readLabel: "Read: context-preserving data layer for AI (definition) →",
    readHref: "/glossary/context-preserving-data-layer",
  },
  ko: {
    tag: "법률",
    title: "사건 관리에 AI를 — 변호사 비밀 유지, 거래 조건 보호",
    lead: "법률 워크플로우는 특권 자료를 처리합니다 — 계약서, 거래 조건, M&A 코드명, 소송 전략, 규제 신고서. 변호사-의뢰인 비밀 유지는 절대적입니다. LLM Capsule은 당사자, 거래 조건, 특권 콘텐츠를 로컬에서 캡슐화하고, AI가 보호된 캡슐을 요약·분석하며, 복원은 로펌의 사건 관리 시스템 내부에서 이루어집니다.",
    blockedLabel: "Capsule 미사용 시",
    blockedH: "외부 자문 AI 차단",
    blocked: "거래 조건, 당사자 이름, 코드명이 외부 LLM에 도달할 수 없습니다. 어소시에이트는 수동 검토로 돌아가고, AI 가치는 실현되지 않습니다.",
    enabledLabel: "Capsule 사용 시",
    enabledH: "특권 워크플로우 내에서 AI 지원",
    enabled: "당사자 및 거래 조건이 캡슐화되고, AI가 요약본, 리스크 분석, 조항 비교를 작성합니다. 결과물은 변호사 비밀 유지 상태로 사건 관리 시스템에 복원됩니다.",
    workflowsHeading: "프로덕션 워크플로우",
    wf1Title: "기밀 계약서 검토",
    wf1Desc: "장문 계약서 전반에 걸친 AI 작성 리스크 요약",
    wf2Title: "실사 요약",
    wf2Desc: "거래 데이터 보호 상태에서 다중 문서 M&A 실사",
    wf3Title: "규제 신고서 초안 작성",
    wf3Desc: "민감 콘텐츠 마스킹 상태에서 신고서 초안 작성 및 컴플라이언스 확인",
    wf4Title: "사건 트리아지",
    wf4Desc: "특권 데이터 보호 상태에서 초기 사건 접수 및 배당",
    customerLabel: "고객 도입 사례",
    customerName: "Shin&Kim",
    customerDetail: "국내 최대 규모 법률사무소 중 하나. 당사자, 거래 조건, 코드명을 캡슐화한 특권 사건 워크플로우에 AI 지원. 로펌 거버넌스 하에 변호사 비밀 유지.",
    screenshotAlt: "법률 산업 비주얼",
    readLabel: "읽기: AI를 위한 컨텍스트 보존 데이터 레이어 (정의) →",
    readHref: "/glossary/context-preserving-data-layer",
  },
  de: {
    tag: "Rechtsbranche",
    title: "KI für das Matter Management — Mandatsgeheimnis gewahrt, Vertragsdaten geschützt",
    lead: "Rechtliche Workflows verarbeiten vertrauliches Material: Verträge, Transaktionsbedingungen, M&A-Projektnamen, Prozessstrategie und behördliche Einreichungen. Die Wahrung des Mandatsgeheimnisses ist nicht verhandelbar. LLM Capsule kapsuliert Parteien, Vertragsbedingungen und privilegierte Inhalte lokal; die KI analysiert und fasst die geschützte Kapsel zusammen; die Wiederherstellung erfolgt im Matter-Management-System der Kanzlei.",
    blockedLabel: "Ohne Capsule",
    blockedH: "KI-Einsatz in der Kanzlei blockiert",
    blocked: "Transaktionsbedingungen, Parteinamen und Projektkennungen dürfen das externe LLM nicht erreichen. Associates kehren zur manuellen Prüfung zurück; der Mehrwert von KI bleibt unrealisiert.",
    enabledLabel: "Mit Capsule",
    enabledH: "KI-Unterstützung im mandatsgeschützten Workflow",
    enabled: "Parteien und Bedingungen werden kapsuliert. Die KI erstellt Zusammenfassungen, Risikoanalysen und Klauselvergleiche. Die Ergebnisse werden im Matter Management unter Wahrung des Mandatsgeheimnisses wiederhergestellt.",
    workflowsHeading: "Produktivworkflows",
    wf1Title: "Vertrauliche Vertragsprüfung",
    wf1Desc: "KI-gestützte Risikozusammenfassung langer Vertragswerke",
    wf2Title: "Due-Diligence-Zusammenfassung",
    wf2Desc: "Mehrdokumentenbezogene M&A-Due-Diligence mit geschützten Transaktionsdaten",
    wf3Title: "Entwurf behördlicher Einreichungen",
    wf3Desc: "Einreichungsentwurf und Compliance-Prüfung mit kapsulierten sensiblen Inhalten",
    wf4Title: "Matter-Triage",
    wf4Desc: "Ersterfassung und Weiterleitung von Mandaten mit geschützten Informationen",
    customerLabel: "Kundenreferenz",
    customerName: "Shin&Kim",
    customerDetail: "Eine der größten Anwaltskanzleien Koreas. KI-Unterstützung bei privilegierten Matter-Workflows mit kapsulierten Parteien, Transaktionsbedingungen und Projektkennungen. Wahrung des Mandatsgeheimnisses unter der Governance der Kanzlei.",
    screenshotAlt: "Rechtsbranche — Branchenvisualisierung",
    readLabel: "Lesen: Kontexterhaltende Datenschicht für KI (Definition) →",
    readHref: "/glossary/context-preserving-data-layer",
  },
}


export default function Section08_Legal({
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

        .s8-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s8-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s8-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s8-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Legal: primary-dark tag */
        .s8-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-primary-dark, #3b2fbf);
          background-color: var(--c-primary-soft, #eeebfe);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s8-header { margin-bottom: 32px; }

        .s8-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s8-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s8-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s8-state--enabled { background-color: var(--c-primary-soft, #eeebfe); border-color: transparent; }

        .s8-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s8-state--blocked .s8-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s8-state--enabled .s8-state__label { color: var(--c-primary-dark, #3b2fbf); }

        .s8-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s8-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-workflows { margin-bottom: 28px; }

        .s8-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-primary-dark, #3b2fbf); margin-bottom: 14px;
        }

        .s8-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s8-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-workflows__list li:last-child { border-bottom: none; }

        .s8-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-primary-dark, #3b2fbf); font-size: 12px; font-weight: 700;
        }

        .s8-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s8-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s8-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s8-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s8-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s8-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s8-placeholder { text-align: center; padding: 32px; }
        .s8-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s8-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s8-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s8-footer { margin-top: 20px; }

        .s8-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-primary-dark, #3b2fbf);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s8-read-link:hover { border-bottom-color: var(--c-primary-dark, #3b2fbf); }

        @container (max-width: 599px) {
          .s8-states { grid-template-columns: 1fr; }
          .s8-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s8-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s8-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s8-root">
        <section className={`s8-section${altBg ? " s8-section--alt" : ""}`}>
          <div className="s8-container">
            <div className="s8-header">
              <span className="s8-tag">{_tag}</span>
              <h2 className="s8-h2">{_title}</h2>
              <p className="s8-lead">{_lead}</p>
            </div>

            <div className="s8-states">
              <div className="s8-state s8-state--blocked">
                <div className="s8-state__label">{_blockedLabel}</div>
                <div className="s8-state__h">{_blockedH}</div>
                <div className="s8-state__d">{_blocked}</div>
              </div>
              <div className="s8-state s8-state--enabled">
                <div className="s8-state__label">{_enabledLabel}</div>
                <div className="s8-state__h">{_enabledH}</div>
                <div className="s8-state__d">{_enabled}</div>
              </div>
            </div>

            <div className="s8-workflows">
              <div className="s8-workflows__h">{_workflowsHeading}</div>
              <ul className="s8-workflows__list">
                <li><strong>{_wf1Title}</strong>{_wf1Desc}</li>
                <li><strong>{_wf2Title}</strong>{_wf2Desc}</li>
                <li><strong>{_wf3Title}</strong>{_wf3Desc}</li>
                <li><strong>{_wf4Title}</strong>{_wf4Desc}</li>
              </ul>
            </div>

            <div className="s8-customer">
              <div className="s8-customer__label">{_customerLabel}</div>
              <div className="s8-customer__name">{_customerName}</div>
              <div className="s8-customer__detail">{_customerDetail}</div>
            </div>

            <div className="s8-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={_screenshotAlt} />
              ) : (
                <div className="s8-placeholder">
                  <div className="s8-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#eeebfe"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#3b2fbf" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#3b2fbf" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#3b2fbf" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s8-placeholder__label">{_screenshotAlt}</div>
                  <div className="s8-placeholder__spec">Contract review · privilege preserved badge · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s8-footer">
              <a className="s8-read-link" href={_readHref}>{_readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_Legal, {
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
