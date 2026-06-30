import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"

const CMP_HEAD: Record<string, string[]> = {
  en: ["Approach", "What it does", "The limit", "With LLM Capsule"],
  ko: ["접근 방식", "동작", "한계", "LLM Capsule 사용 시"],
  de: ["Ansatz", "Was es tut", "Die Grenze", "Mit LLM Capsule"],
}
const CMP_ROWS: Record<string, string[][]> = {
  en: [
    ["Masking & redaction", "Removes the values", "Destroys the context AI needs; the workflow can't finish", "Keeps raw values inside and reconstructs usable results to the workflow"],
    ["PII detectors", "Detect names and numbers", "Can't see non-PII operational markers you actually need protected", "You define the markers; structure stays usable"],
    ["Synthetic data", "Generates artificial data", "For training and testing, not live operational workflows", "Runs on the real records in production"],
    ["Block AI entirely", "Manual approval gate", "Pilots never reach production", "The workflow runs under your existing governance"],
  ],
  ko: [
    ["마스킹 & 삭제", "값을 제거", "AI에 필요한 컨텍스트를 파괴; 워크플로우 완료 불가", "원본 값을 내부에 유지하고 워크플로우에 사용 가능한 결과를 복원"],
    ["PII 탐지기", "이름과 번호를 탐지", "실제로 보호가 필요한 비PII 운영 마커를 감지 불가", "보호 대상 마커를 직접 정의; 구조 유지"],
    ["합성 데이터", "인공 데이터를 생성", "훈련과 테스트용이며 실시간 운영 워크플로우에는 부적합", "운영 환경의 실제 레코드에서 실행"],
    ["AI 전면 차단", "수동 승인 게이트", "파일럿이 운영 환경에 도달하지 못함", "기존 거버넌스 체계 하에 워크플로우가 실행됨"],
  ],
  de: [
    ["Maskierung & Schwärzung", "Entfernt die Werte", "Zerstört den Kontext, den die KI braucht; der Workflow kann nicht abgeschlossen werden", "Behält Rohwerte intern und rekonstruiert nutzbare Ergebnisse im Workflow"],
    ["PII-Detektoren", "Erkennen Namen und Nummern", "Sehen keine nicht-PII-betrieblichen Marker, die geschützt werden müssen", "Sie definieren die Marker; Struktur bleibt nutzbar"],
    ["Synthetische Daten", "Generiert künstliche Daten", "Für Training und Tests, nicht für operative Live-Workflows", "Läuft auf den echten Datensätzen in der Produktion"],
    ["KI komplett blockieren", "Manuelle Freigabe", "Piloten erreichen nie die Produktion", "Der Workflow läuft unter Ihrer bestehenden Governance"],
  ],
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    eye1: "Where it sits",
    title1: "One layer between your operational data and the model.",
    desc1: "Operational data goes in. Only a protected working version reaches approved models, agents and MCP tools. The reconstructed result lands back in your workflow — the raw values and the internal mapping never move.",
    eye2: "Fits your AI stack",
    title2: "It plugs into the systems you already run.",
    desc2: "Agents, MCP servers and RAG pipelines call Capsule; it returns a protected working version, the approved model runs, and the real result is reconstructed into ServiceNow, Jira, OSS/NOC, EHR or your OT historian.",
    cmpEye: "How it compares",
    cmpTitle: "Not masking. Not a cloud vault.",
    cmpDesc: "Where other approaches stop the workflow or move your data out, Capsule keeps the values inside and still returns a usable result.",
  },
  ko: {
    eye1: "위치",
    title1: "운영 데이터와 모델 사이의 단일 레이어입니다.",
    desc1: "운영 데이터가 들어가면 보호된 작업용 버전만 승인된 모델, 에이전트, MCP 도구에 도달합니다. 복원된 결과는 워크플로우로 돌아오며, 원본 값과 내부 매핑은 이동하지 않습니다.",
    eye2: "AI 스택 통합",
    title2: "이미 운영 중인 시스템에 연결됩니다.",
    desc2: "에이전트, MCP 서버, RAG 파이프라인이 Capsule을 호출하면 보호된 작업용 버전을 반환하고, 승인된 모델이 실행한 뒤 실제 결과가 ServiceNow, Jira, OSS/NOC, EHR 또는 OT 히스토리안으로 복원됩니다.",
    cmpEye: "비교",
    cmpTitle: "마스킹이 아닙니다. 클라우드 볼트도 아닙니다.",
    cmpDesc: "다른 접근 방식이 워크플로우를 중단하거나 데이터를 외부로 이동시키는 반면, Capsule은 값을 내부에 유지하면서 사용 가능한 결과를 반환합니다.",
  },
  de: {
    eye1: "Wo es sitzt",
    title1: "Eine Schicht zwischen Ihren Betriebsdaten und dem Modell.",
    desc1: "Betriebsdaten gehen rein. Nur eine geschützte Arbeitsversion erreicht genehmigte Modelle, Agenten und MCP-Tools. Das rekonstruierte Ergebnis landet in Ihrem Workflow — Rohwerte und internes Mapping bewegen sich nicht.",
    eye2: "Passt in Ihren KI-Stack",
    title2: "Es verbindet sich mit den Systemen, die Sie bereits betreiben.",
    desc2: "Agenten, MCP-Server und RAG-Pipelines rufen Capsule auf; es gibt eine geschützte Arbeitsversion zurück, das genehmigte Modell läuft, und das echte Ergebnis wird in ServiceNow, Jira, OSS/NOC, EHR oder Ihren OT-Historian rekonstruiert.",
    cmpEye: "Im Vergleich",
    cmpTitle: "Keine Maskierung. Kein Cloud-Vault.",
    cmpDesc: "Wo andere Ansätze den Workflow stoppen oder Ihre Daten nach außen verschieben, hält Capsule die Werte intern und liefert trotzdem ein nutzbares Ergebnis.",
  },
}

interface Props {
  eye1?: string; title1?: string; desc1?: string
  eye2?: string; title2?: string; desc2?: string
  cmpEye?: string; cmpTitle?: string; cmpDesc?: string
  locale?: string
}

export default function HomeV3Part3_ArchDetail({
  eye1 = TRANSLATIONS.en.eye1, title1 = TRANSLATIONS.en.title1, desc1 = TRANSLATIONS.en.desc1,
  eye2 = TRANSLATIONS.en.eye2, title2 = TRANSLATIONS.en.title2, desc2 = TRANSLATIONS.en.desc2,
  cmpEye = TRANSLATIONS.en.cmpEye, cmpTitle = TRANSLATIONS.en.cmpTitle, cmpDesc = TRANSLATIONS.en.cmpDesc,
  locale = "en",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const eff = (activeLocale as any)?.slug || locale || "en"
  const isNonEn = eff !== "en"
  const T = TRANSLATIONS[eff] || TRANSLATIONS.en
  const r = (p: string | undefined, k: string) => isNonEn ? (T[k] || p || TRANSLATIONS.en[k]) : (p || T[k] || TRANSLATIONS.en[k])
  const heads = CMP_HEAD[eff] || CMP_HEAD.en
  const rows = CMP_ROWS[eff] || CMP_ROWS.en

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .p3-root{container-type:inline-size;container-name:p3;width:100%;word-break:keep-all;overflow-wrap:break-word}
        .p3-root *{box-sizing:border-box;margin:0;padding:0}
        .p3-section{padding:92px 0;border-top:1px solid #e5e7eb;background:#fff}
        .p3-wrap{max-width:1280px;margin:0 auto;padding:0 28px}
        .p3-eye{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;background:#0f1130;color:#fff;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:'Inter',sans-serif}
        .p3-eye::before{content:"";width:6px;height:6px;border-radius:50%;background:#0ea5a4;flex:0 0 auto}
        .p3-h3{font-size:21px;font-weight:700;letter-spacing:-.02em;margin-top:14px;font-family:'Inter',sans-serif;color:#0f1130}
        .p3-sub{margin-top:10px;font-size:17px;color:#3a3d5e;max-width:720px;font-family:'Inter',sans-serif;line-height:1.62}
        .p3-arch{margin-top:28px;border:1px solid #e5e7eb;border-radius:16px;padding:8px;background:#f7f8fb;max-width:1100px}
        .p3-arch svg{width:100%;height:auto;display:block}
        .p3-cmp{width:100%;border-collapse:separate;border-spacing:0;margin-top:24px;font-size:14px;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;max-width:1100px;font-family:'Inter',sans-serif}
        .p3-cmp th{background:#f7f8fb;text-align:left;padding:12px 16px;font-size:12px;letter-spacing:.05em;text-transform:uppercase;color:#6b7280;font-weight:700;border-bottom:1px solid #e5e7eb}
        .p3-cmp td{padding:13px 16px;border-bottom:1px solid #e5e7eb;color:#3a3d5e;vertical-align:top}
        .p3-cmp tr:last-child td{border-bottom:0}
        .p3-cmp td:first-child{font-weight:700;color:#0f1130}
        .p3-cmp td:last-child{color:#3b2fbf;background:#eeebfe}
        @container p3 (max-width:820px){.p3-cmp{display:block;overflow-x:auto;white-space:nowrap;scrollbar-width:none}.p3-cmp::-webkit-scrollbar{display:none}}
        .p3-block{margin-top:64px}
        :focus-visible{outline:2px solid #5b4fe9;outline-offset:2px}
      `}</style>
      <div className="p3-root">
        <section className="p3-section">
          <div className="p3-wrap">
            <div><span className="p3-eye">{r(eye1, "eye1")}</span></div>
            <h3 className="p3-h3">{r(title1, "title1")}</h3>
            <p className="p3-sub">{r(desc1, "desc1")}</p>
            <div className="p3-arch">
              <svg viewBox="0 0 1120 430" role="img" aria-label="LLM Capsule architecture: operational data flows into Capsule; only a protected working version reaches the AI execution layer; reconstructed output returns to the workflow.">
                <g fontFamily="Inter,sans-serif">
                  <rect x="80" y="22" width="820" height="66" rx="13" fill="#0f1130"/>
                  <text x="490" y="50" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">AI execution</text>
                  <text x="490" y="71" fill="#5ee0b0" fontSize="12" textAnchor="middle" fontFamily="ui-monospace,monospace">approved models {"·"} agents {"·"} MCP tools</text>
                  <path d="M320 150 L320 92" stroke="#5b4fe9" strokeWidth="1.8" fill="none" markerEnd="url(#p3ar)"/>
                  <path d="M660 92 L660 150" stroke="#0ea5a4" strokeWidth="1.8" fill="none" markerEnd="url(#p3arg)"/>
                  <text x="309" y="124" fill="#5b4fe9" fontSize="10.5" textAnchor="end" fontWeight="600">protected working version</text>
                  <text x="671" y="124" fill="#0ea5a4" fontSize="10.5" fontWeight="600">model output</text>
                  <rect x="80" y="150" width="820" height="156" rx="16" fill="#eeebfe" stroke="#5b4fe9" strokeWidth="1.5"/>
                  <text x="104" y="182" fill="#5b4fe9" fontSize="17" fontWeight="800">LLM Capsule</text>
                  <text x="104" y="202" fill="#3a3d5e" fontSize="12.5">context-preserving data layer for AI</text>
                  <g fontSize="10.5" fill="#5b4fe9">
                    <rect x="104" y="218" width="118" height="32" rx="8" fill="#ffffff" stroke="#d4d0f5"/><text x="163" y="238" textAnchor="middle">Detect markers</text>
                    <rect x="236" y="218" width="150" height="32" rx="8" fill="#ffffff" stroke="#d4d0f5"/><text x="311" y="238" textAnchor="middle">Substitute in context</text>
                    <rect x="400" y="218" width="142" height="32" rx="8" fill="#ffffff" stroke="#d4d0f5"/><text x="471" y="238" textAnchor="middle">Preserve structure</text>
                    <rect x="556" y="218" width="120" height="32" rx="8" fill="#ffffff" stroke="#d4d0f5"/><text x="616" y="238" textAnchor="middle">Reconstruct locally</text>
                    <rect x="690" y="218" width="120" height="32" rx="8" fill="#ffffff" stroke="#d4d0f5"/><text x="750" y="238" textAnchor="middle">Policy + audit</text>
                  </g>
                  <text x="104" y="286" fill="#6b7280" fontSize="11">Original values and the internal mapping never leave {"·"} runs on-prem, in your VPC, or air-gapped</text>
                  <path d="M900 228 L946 228" stroke="#0ea5a4" strokeWidth="1.8" fill="none" markerEnd="url(#p3arg)"/>
                  <rect x="950" y="206" width="150" height="44" rx="10" fill="#e6f7f6" stroke="#c4e6da"/>
                  <text x="1025" y="226" fill="#0ea5a4" fontSize="12" fontWeight="700" textAnchor="middle">Reconstructed output</text>
                  <text x="1025" y="242" fill="#0ea5a4" fontSize="11" textAnchor="middle">in your workflow</text>
                  <path d="M320 346 L320 308" stroke="#5b4fe9" strokeWidth="1.8" fill="none" markerEnd="url(#p3ar)"/>
                  <text x="332" y="330" fill="#6b7280" fontSize="10.5">operational data in</text>
                  <rect x="80" y="346" width="820" height="64" rx="13" fill="#ffffff" stroke="#e5e7eb"/>
                  <text x="104" y="372" fill="#0f1130" fontSize="12.5" fontWeight="700">Operational data</text>
                  <text x="104" y="392" fill="#3a3d5e" fontSize="11" fontFamily="ui-monospace,monospace">logs {"·"} tickets {"·"} configs {"·"} topology {"·"} runbooks {"·"} PDFs</text>
                  <text x="884" y="382" fill="#6b7280" fontSize="11" textAnchor="end">raw values never leave</text>
                </g>
                <defs>
                  <marker id="p3ar" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5b4fe9"/></marker>
                  <marker id="p3arg" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#0ea5a4"/></marker>
                </defs>
              </svg>
            </div>

            <div className="p3-block">
              <span className="p3-eye">{r(eye2, "eye2")}</span>
              <h3 className="p3-h3">{r(title2, "title2")}</h3>
              <p className="p3-sub">{r(desc2, "desc2")}</p>
            </div>
            <div className="p3-arch">
              <svg viewBox="0 0 1120 250" role="img" aria-label="Operational systems connect through LLM Capsule to AI execution; reconstructed output flows back.">
                <g fontFamily="Inter,sans-serif">
                  <rect x="40" y="44" width="300" height="150" rx="13" fill="#ffffff" stroke="#e5e7eb"/>
                  <text x="60" y="72" fill="#0f1130" fontSize="13" fontWeight="700">Operational systems</text>
                  <g fontSize="11" fill="#3a3d5e" fontFamily="ui-monospace,monospace">
                    <rect x="60" y="84" width="120" height="26" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="120" y="101" textAnchor="middle">ServiceNow</text>
                    <rect x="190" y="84" width="86" height="26" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="233" y="101" textAnchor="middle">Jira</text>
                    <rect x="60" y="118" width="116" height="26" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="118" y="135" textAnchor="middle">OSS / NOC</text>
                    <rect x="186" y="118" width="120" height="26" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="246" y="135" textAnchor="middle">OT historian</text>
                    <rect x="60" y="152" width="86" height="26" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="103" y="169" textAnchor="middle">EHR</text>
                  </g>
                  <rect x="430" y="64" width="260" height="110" rx="14" fill="#eeebfe" stroke="#5b4fe9" strokeWidth="1.5"/>
                  <text x="560" y="98" fill="#5b4fe9" fontSize="16" fontWeight="800" textAnchor="middle">LLM Capsule</text>
                  <text x="560" y="120" fill="#3a3d5e" fontSize="11.5" textAnchor="middle">creates a protected</text>
                  <text x="560" y="136" fill="#3a3d5e" fontSize="11.5" textAnchor="middle">working version</text>
                  <text x="560" y="158" fill="#6b7280" fontSize="10.5" textAnchor="middle">internal mapping stays local</text>
                  <rect x="780" y="44" width="300" height="150" rx="13" fill="#0f1130"/>
                  <text x="800" y="72" fill="#ffffff" fontSize="13" fontWeight="700">AI execution</text>
                  <g fontSize="11" fontFamily="ui-monospace,monospace">
                    <rect x="800" y="84" width="110" height="26" rx="6" fill="#1b1d4a"/><text x="855" y="101" textAnchor="middle" fill="#c8c0f5">Agent</text>
                    <rect x="800" y="118" width="150" height="26" rx="6" fill="#1b1d4a"/><text x="875" y="135" textAnchor="middle" fill="#c8c0f5">MCP server</text>
                    <rect x="800" y="152" width="160" height="26" rx="6" fill="#1b1d4a"/><text x="880" y="169" textAnchor="middle" fill="#5ee0b0">RAG pipeline</text>
                  </g>
                  <path d="M340 104 L426 104" stroke="#5b4fe9" strokeWidth="1.8" fill="none" markerEnd="url(#p3mar)"/>
                  <text x="383" y="93" fill="#5b4fe9" fontSize="10" textAnchor="middle">data in</text>
                  <path d="M690 104 L776 104" stroke="#5b4fe9" strokeWidth="1.8" fill="none" markerEnd="url(#p3mar)"/>
                  <text x="733" y="93" fill="#5b4fe9" fontSize="10" textAnchor="middle">protected ver.</text>
                  <path d="M776 150 L694 150" stroke="#0ea5a4" strokeWidth="1.6" fill="none" markerEnd="url(#p3marg)"/>
                  <text x="735" y="170" fill="#0ea5a4" fontSize="10" textAnchor="middle">model output</text>
                  <path d="M426 150 L344 150" stroke="#0ea5a4" strokeWidth="1.6" fill="none" markerEnd="url(#p3marg)"/>
                  <text x="385" y="170" fill="#0ea5a4" fontSize="9.5" textAnchor="middle">reconstructed output</text>
                  <text x="560" y="226" fill="#3a3d5e" fontSize="12.5" textAnchor="middle">Agents, MCP tools and RAG pipelines receive only a protected working version — never the raw operational values.</text>
                </g>
                <defs>
                  <marker id="p3mar" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5b4fe9"/></marker>
                  <marker id="p3marg" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#0ea5a4"/></marker>
                </defs>
              </svg>
            </div>

            <div className="p3-block"><span className="p3-eye">{r(cmpEye, "cmpEye")}</span></div>
            <h3 className="p3-h3">{r(cmpTitle, "cmpTitle")}</h3>
            <p className="p3-sub">{r(cmpDesc, "cmpDesc")}</p>
            <table className="p3-cmp">
              <thead><tr>{heads.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(HomeV3Part3_ArchDetail, {
  eye1:    { type: ControlType.String, title: "Eye 1",     defaultValue: "Where it sits" },
  title1:  { type: ControlType.String, title: "Title 1",   defaultValue: "One layer between your operational data and the model." },
  desc1:   { type: ControlType.String, title: "Desc 1",    defaultValue: "Operational data goes in. Only a protected working version reaches approved models, agents and MCP tools. The reconstructed result lands back in your workflow — the raw values and the internal mapping never move.", displayTextArea: true },
  eye2:    { type: ControlType.String, title: "Eye 2",     defaultValue: "Fits your AI stack" },
  title2:  { type: ControlType.String, title: "Title 2",   defaultValue: "It plugs into the systems you already run." },
  desc2:   { type: ControlType.String, title: "Desc 2",    defaultValue: "Agents, MCP servers and RAG pipelines call Capsule; it returns a protected working version, the approved model runs, and the real result is reconstructed into ServiceNow, Jira, OSS/NOC, EHR or your OT historian.", displayTextArea: true },
  cmpEye:  { type: ControlType.String, title: "Compare Eye",   defaultValue: "How it compares" },
  cmpTitle:{ type: ControlType.String, title: "Compare Title", defaultValue: "Not masking. Not a cloud vault." },
  cmpDesc: { type: ControlType.String, title: "Compare Desc",  defaultValue: "Where other approaches stop the workflow or move your data out, Capsule keeps the values inside and still returns a usable result.", displayTextArea: true },
  locale:  { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
})
