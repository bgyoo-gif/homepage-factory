import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"

interface CapData { idx: string; title: string; desc: string; quote: string; ilab: string }

const CAPS: Record<string, CapData[]> = {
  en: [
    { idx: "01 · The difference", title: "Get the real answer back", desc: "When the model returns its answer, Capsule rebuilds the real business values inside your environment, automatically. No one masks the input and reassembles the output by hand. The workflow finishes with real circuit IDs, ticket IDs and figures.", quote: "If a person has to rebuild the answer, it was never automation.", ilab: "Internal: Reconstruction" },
    { idx: "02", title: "Protect what PII tools can't even see", desc: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, network identifiers, asset references, mission references — any business-specific marker. Context-aware control adapts to document type, department and workflow.", quote: "Your secrets aren't names and card numbers. They're AS4766, edge-ring-a, Project Halo — and no PII tool is even looking for them.", ilab: "Internal: Enterprise Context" },
    { idx: "03", title: "Keep the record usable", desc: "Tables, cross-references, configurations, topology graphs, ticket fields, runbook steps and document hierarchies survive intact. AI receives the full operational structure, not broken fragments that produce useless output.", quote: "Redaction protects the field. Capsule protects the workflow.", ilab: "Internal: Structure-Preserving" },
    { idx: "04", title: "You keep control of your own data", desc: "Sensitive data stays inside your environment. The model only ever works on the protected version, and the map that reconstructs real values never leaves the organization. Differential-privacy-based protection makes original values practically non-recoverable from outside your boundary. The model can be external; the raw values don't have to be.", quote: "You don't have to choose between AI and control.", ilab: "Internal: Zero Exposure" },
    { idx: "05", title: "Fit into the workflow they already run", desc: "Air-gapped networks, on-premise servers, telecom-grade platforms, ServiceNow / SharePoint / Jira / OT historians and RAG pipelines — Capsule deploys inside your enterprise as-is, as a single API-call addition. No migration. Your existing workflows and policies stay intact.", quote: "No copy-paste masking. No manual cleanup. It runs inside the flow.", ilab: "Internal: Enterprise Env Execution" },
    { idx: "06", title: "Change what's protected tomorrow", desc: "Yesterday it was circuit IDs and topology nodes. Today add M&A codenames and deal terms. Next quarter add a new regulator's markers. Define, version and time-shift what's protected as your business and regulations evolve, with a full audit trail of which marker was protected when.", quote: "What you protect will change. Your pipeline shouldn't break.", ilab: "Internal: Time-Shifting Policy" },
  ],
  ko: [
    { idx: "01 · 핵심 차이점", title: "실제 답을 돌려받으세요", desc: "모델이 답변을 반환하면 Capsule이 고객 환경 내부에서 실제 비즈니스 값을 자동으로 복원합니다. 아무도 입력을 마스킹하고 출력을 수동으로 재조립하지 않습니다. 워크플로우는 실제 회선 ID, 티켓 ID, 수치로 완료됩니다.", quote: "사람이 답을 직접 재구성해야 한다면, 그것은 자동화가 아닙니다.", ilab: "내부: 복원" },
    { idx: "02", title: "PII 도구가 보지 못하는 것까지 보호", desc: "표준 PII 범주로는 충분하지 않습니다. 프로젝트 코드, 거래 조건, 내부 ID, 네트워크 식별자, 자산 참조, 임무 참조 등 비즈니스별 마커를 직접 정의하세요. 컨텍스트 인식 제어가 문서 유형, 부서, 워크플로우에 맞게 적응합니다.", quote: "당신의 비밀은 이름이나 카드 번호가 아닙니다. AS4766, edge-ring-a, Project Halo이며 어떤 PII 도구도 이것을 찾지 않습니다.", ilab: "내부: 엔터프라이즈 컨텍스트" },
    { idx: "03", title: "레코드를 사용 가능하게 유지", desc: "테이블, 상호 참조, 설정, 토폴로지 그래프, 티켓 필드, 런북 단계, 문서 계층 구조가 그대로 유지됩니다. AI는 완전한 운영 구조를 받으며, 쓸모없는 출력을 생성하는 깨진 조각을 받지 않습니다.", quote: "삭제는 필드를 보호합니다. Capsule은 워크플로우를 보호합니다.", ilab: "내부: 구조 보존" },
    { idx: "04", title: "자체 데이터에 대한 통제권 유지", desc: "민감한 데이터는 고객 환경 내부에 유지됩니다. 모델은 보호된 버전에서만 작업하며, 실제 값을 복원하는 매핑은 조직 외부로 나가지 않습니다. 차등 프라이버시 기반 보호로 원본 값은 외부에서 실질적으로 복구 불가능합니다.", quote: "AI와 통제 사이에서 선택할 필요가 없습니다.", ilab: "내부: 제로 노출" },
    { idx: "05", title: "이미 운영 중인 워크플로우에 통합", desc: "에어갭 네트워크, 온프레미스 서버, 통신사급 플랫폼, ServiceNow / SharePoint / Jira / OT 히스토리안, RAG 파이프라인 — Capsule은 단일 API 호출 추가로 기존 엔터프라이즈에 그대로 배포됩니다. 마이그레이션이 필요 없으며 기존 워크플로우와 정책이 유지됩니다.", quote: "복사-붙여넣기 마스킹도 수동 정리도 없습니다. 워크플로우 안에서 실행됩니다.", ilab: "내부: 엔터프라이즈 환경 실행" },
    { idx: "06", title: "내일 보호 대상을 변경할 수 있습니다", desc: "어제는 회선 ID와 토폴로지 노드였습니다. 오늘은 M&A 코드네임과 거래 조건을 추가하세요. 다음 분기에는 새 규제 기관의 마커를 추가하세요. 비즈니스와 규제가 변화함에 따라 보호 대상을 정의하고 버전 관리하며, 어떤 마커가 언제 보호되었는지 전체 감사 추적이 가능합니다.", quote: "보호 대상은 변합니다. 파이프라인이 깨지면 안 됩니다.", ilab: "내부: 시간 이동 정책" },
  ],
  de: [
    { idx: "01 · Der Unterschied", title: "Bekommen Sie die echte Antwort zurück", desc: "Wenn das Modell seine Antwort zurückgibt, baut Capsule die echten Geschäftswerte automatisch in Ihrer Umgebung wieder auf. Niemand maskiert die Eingabe und setzt die Ausgabe von Hand zusammen. Der Workflow endet mit echten Circuit-IDs, Ticket-IDs und Kennzahlen.", quote: "Wenn ein Mensch die Antwort nachbauen muss, war es nie Automatisierung.", ilab: "Intern: Rekonstruktion" },
    { idx: "02", title: "Schützen Sie, was PII-Tools nicht sehen können", desc: "Standard-PII-Kategorien reichen nicht aus. Definieren Sie Projektcodes, Vertragsbedingungen, interne IDs, Netzwerk-Identifier, Asset-Referenzen, Missionsreferenzen — jeden geschäftsspezifischen Marker. Kontextbewusste Steuerung passt sich an Dokumenttyp, Abteilung und Workflow an.", quote: "Ihre Geheimnisse sind keine Namen und Kartennummern. Es sind AS4766, edge-ring-a, Project Halo — und kein PII-Tool sucht danach.", ilab: "Intern: Enterprise Context" },
    { idx: "03", title: "Halten Sie den Datensatz nutzbar", desc: "Tabellen, Querverweise, Konfigurationen, Topologiegraphen, Ticket-Felder, Runbook-Schritte und Dokumenthierarchien bleiben intakt. Die KI erhält die vollständige operative Struktur, nicht zerbrochene Fragmente, die nutzlose Ausgaben erzeugen.", quote: "Schwärzung schützt das Feld. Capsule schützt den Workflow.", ilab: "Intern: Strukturerhaltend" },
    { idx: "04", title: "Sie behalten die Kontrolle über Ihre eigenen Daten", desc: "Sensible Daten bleiben in Ihrer Umgebung. Das Modell arbeitet nur mit der geschützten Version, und die Zuordnung, die echte Werte rekonstruiert, verlässt die Organisation nie. Differential-Privacy-basierter Schutz macht Originalwerte von außerhalb praktisch nicht wiederherstellbar.", quote: "Sie müssen sich nicht zwischen KI und Kontrolle entscheiden.", ilab: "Intern: Null-Exposition" },
    { idx: "05", title: "Passt in den Workflow, den sie bereits betreiben", desc: "Air-gapped Netzwerke, On-Premises-Server, Telekom-Plattformen, ServiceNow / SharePoint / Jira / OT-Historiker und RAG-Pipelines — Capsule wird als einzelner API-Aufruf in Ihr bestehendes Enterprise-Umfeld bereitgestellt. Keine Migration. Ihre bestehenden Workflows und Richtlinien bleiben intakt.", quote: "Kein Copy-Paste-Maskieren. Keine manuelle Bereinigung. Es läuft innerhalb des Flows.", ilab: "Intern: Enterprise-Umgebungsausführung" },
    { idx: "06", title: "Ändern Sie morgen, was geschützt wird", desc: "Gestern waren es Circuit-IDs und Topologie-Knoten. Heute fügen Sie M&A-Codenamen und Vertragsbedingungen hinzu. Nächstes Quartal fügen Sie die Marker eines neuen Regulierers hinzu. Definieren, versionieren und verschieben Sie zeitlich, was geschützt wird, während sich Ihr Geschäft und Ihre Vorschriften weiterentwickeln.", quote: "Was Sie schützen, wird sich ändern. Ihre Pipeline sollte nicht kaputt gehen.", ilab: "Intern: Zeitverschiebungsrichtlinie" },
  ],
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: { capEyebrow: "Six capabilities", capTitle: "What makes the workflow keep running, and keep running for years", capDesc: "Can't send it raw. Can't just mask it. Capsule creates a protected working version, lets AI do the work, and reconstructs a usable result inside your workflow. These three capabilities are why the workflow finishes — plus three more that keep it running inside real systems over time." },
  ko: { capEyebrow: "6가지 핵심 기능", capTitle: "워크플로우가 계속 작동하고, 수년간 유지되는 이유", capDesc: "원본을 그대로 보낼 수 없습니다. 단순 마스킹으로도 안 됩니다. Capsule은 보호된 작업용 버전을 생성하고, AI가 작업하게 한 뒤, 워크플로우 내부에서 사용 가능한 결과를 복원합니다. 이 세 가지 기능이 워크플로우를 완료하는 이유이며, 나머지 세 가지가 실제 시스템에서 장기간 유지하는 이유입니다." },
  de: { capEyebrow: "Sechs Fähigkeiten", capTitle: "Was den Workflow am Laufen hält — und über Jahre am Laufen hält", capDesc: "Man kann es nicht roh senden. Man kann es nicht einfach maskieren. Capsule erstellt eine geschützte Arbeitsversion, lässt die KI arbeiten und rekonstruiert ein nutzbares Ergebnis in Ihrem Workflow. Diese drei Fähigkeiten sorgen dafür, dass der Workflow abgeschlossen wird — plus drei weitere, die ihn langfristig in echten Systemen am Laufen halten." },
}

interface Props {
  capEyebrow?: string; capTitle?: string; capDesc?: string
  cap1Title?: string; cap1Desc?: string; cap1Quote?: string
  cap2Title?: string; cap2Desc?: string; cap2Quote?: string
  cap3Title?: string; cap3Desc?: string; cap3Quote?: string
  cap4Title?: string; cap4Desc?: string; cap4Quote?: string
  cap5Title?: string; cap5Desc?: string; cap5Quote?: string
  cap6Title?: string; cap6Desc?: string; cap6Quote?: string
  locale?: string
}

export default function HomeV3Part4_Capabilities(props: Props) {
  const {
    capEyebrow = TRANSLATIONS.en.capEyebrow,
    capTitle = TRANSLATIONS.en.capTitle,
    capDesc = TRANSLATIONS.en.capDesc,
    locale = "en",
  } = props

  const { activeLocale } = useLocaleInfo()
  const eff = (activeLocale as any)?.slug || locale || "en"
  const isNonEn = eff !== "en"
  const T = TRANSLATIONS[eff] || TRANSLATIONS.en
  const caps = CAPS[eff] || CAPS.en
  const enCaps = CAPS.en
  const r = (p: string | undefined, k: string) => isNonEn ? (T[k] || p || TRANSLATIONS.en[k]) : (p || T[k] || TRANSLATIONS.en[k])

  const cap = (i: number) => {
    const n = i + 1
    const tKey = `cap${n}Title` as keyof Props
    const dKey = `cap${n}Desc` as keyof Props
    const qKey = `cap${n}Quote` as keyof Props
    const pT = props[tKey] as string | undefined
    const pD = props[dKey] as string | undefined
    const pQ = props[qKey] as string | undefined
    return {
      idx: caps[i].idx,
      title: isNonEn ? (caps[i].title || pT || enCaps[i].title) : (pT || caps[i].title),
      desc: isNonEn ? (caps[i].desc || pD || enCaps[i].desc) : (pD || caps[i].desc),
      quote: isNonEn ? (caps[i].quote || pQ || enCaps[i].quote) : (pQ || caps[i].quote),
      ilab: caps[i].ilab,
    }
  }

  const DIAGRAMS = [
    <svg key="d0" className="p4-dgm" viewBox="0 0 360 200" role="img" aria-label="Masking ends in unusable output; Capsule reconstructs the real value.">
      <text x="16" y="24" fontFamily="Inter,sans-serif" fontSize="11" fill="#6b7280">Masking</text>
      <g fontFamily="ui-monospace,monospace" fontSize="10.5">
        <rect x="16" y="32" width="50" height="26" rx="6" fill="#fff" stroke="#e5e7eb"/><text x="41" y="49" fill="#0f1130" textAnchor="middle">CKT-77</text>
        <text x="70" y="49" fill="#6b7280">{"→"}</text>
        <rect x="82" y="32" width="44" height="26" rx="6" fill="#fce9e8" stroke="#f3d8cb"/><text x="104" y="49" fill="#ef5350" textAnchor="middle">{"███"}</text>
        <text x="130" y="49" fill="#6b7280">{"→"}</text>
        <rect x="142" y="32" width="124" height="26" rx="6" fill="#fff" stroke="#f3d8cb"/><text x="204" y="49" fill="#ef5350" textAnchor="middle">can{"'"}t act on it {"✗"}</text>
      </g>
      <line x1="16" y1="82" x2="344" y2="82" stroke="#e5e7eb" strokeDasharray="3 3"/>
      <text x="16" y="106" fontFamily="Inter,sans-serif" fontSize="11" fill="#5b4fe9" fontWeight="700">Capsule</text>
      <g fontFamily="ui-monospace,monospace" fontSize="10">
        <rect x="16" y="114" width="50" height="28" rx="6" fill="#fff" stroke="#e5e7eb"/><text x="41" y="132" fill="#0f1130" textAnchor="middle">CKT-77</text>
        <text x="70" y="132" fill="#5b4fe9">{"→"}</text>
        <rect x="80" y="114" width="128" height="28" rx="6" fill="#eeebfe" stroke="#d4d0f5"/><text x="144" y="132" fill="#5b4fe9" textAnchor="middle">{"⟨capsule:circuit_1⟩"}</text>
        <text x="213" y="132" fill="#5b4fe9">{"→"}</text>
        <rect x="224" y="114" width="120" height="28" rx="6" fill="#0f1130"/><text x="284" y="132" fill="#5ee0b0" textAnchor="middle">RCA result</text>
      </g>
      <path d="M284 144 L284 160" fill="none" stroke="#0ea5a4" strokeWidth="1.6" markerEnd="url(#p4r1)"/>
      <defs><marker id="p4r1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0ea5a4"/></marker></defs>
      <rect x="164" y="168" width="180" height="26" rx="6" fill="#e6f7f6" stroke="#c4e6da"/><text x="254" y="185" fontFamily="ui-monospace,monospace" fontSize="11" fill="#0ea5a4" textAnchor="middle">RCA for CKT-77 {"✓"}</text>
      <text x="16" y="185" fontFamily="Inter,sans-serif" fontSize="10" fill="#0ea5a4">reconstructed output {"→"}</text>
    </svg>,
    <svg key="d1" className="p4-dgm" viewBox="0 0 360 168" role="img" aria-label="PII detector catches name/email/phone/card; Capsule also protects circuit ID, AS number, topology node, OT asset, codenames.">
      <text x="16" y="22" fontFamily="Inter,sans-serif" fontSize="11" fill="#6b7280">A PII detector catches</text>
      <g fontFamily="ui-monospace,monospace" fontSize="11" fill="#9a93a8">
        <rect x="16" y="30" width="62" height="24" rx="12" fill="#f7f8fb" stroke="#e5e7eb"/><text x="47" y="46" textAnchor="middle">name</text>
        <rect x="86" y="30" width="64" height="24" rx="12" fill="#f7f8fb" stroke="#e5e7eb"/><text x="118" y="46" textAnchor="middle">email</text>
        <rect x="158" y="30" width="62" height="24" rx="12" fill="#f7f8fb" stroke="#e5e7eb"/><text x="189" y="46" textAnchor="middle">phone</text>
        <rect x="228" y="30" width="78" height="24" rx="12" fill="#f7f8fb" stroke="#e5e7eb"/><text x="267" y="46" textAnchor="middle">card no.</text>
      </g>
      <text x="16" y="90" fontFamily="Inter,sans-serif" fontSize="11" fill="#5b4fe9" fontWeight="700">You define what Capsule protects</text>
      <g fontFamily="ui-monospace,monospace" fontSize="11" fill="#5b4fe9">
        <rect x="16" y="98" width="74" height="24" rx="12" fill="#eeebfe" stroke="#d4d0f5"/><text x="53" y="114" textAnchor="middle">circuit ID</text>
        <rect x="98" y="98" width="72" height="24" rx="12" fill="#eeebfe" stroke="#d4d0f5"/><text x="134" y="114" textAnchor="middle">AS4766</text>
        <rect x="178" y="98" width="92" height="24" rx="12" fill="#eeebfe" stroke="#d4d0f5"/><text x="224" y="114" textAnchor="middle">topology node</text>
        <rect x="16" y="128" width="92" height="24" rx="12" fill="#eeebfe" stroke="#d4d0f5"/><text x="62" y="144" textAnchor="middle">OT asset ID</text>
        <rect x="116" y="128" width="110" height="24" rx="12" fill="#eeebfe" stroke="#d4d0f5"/><text x="171" y="144" textAnchor="middle">M&amp;A codename</text>
      </g>
    </svg>,
    <svg key="d2" className="p4-dgm" viewBox="0 0 360 168" role="img" aria-label="Redaction breaks the log; Capsule keeps fields and values so AI can reason.">
      <text x="16" y="22" fontFamily="Inter,sans-serif" fontSize="11" fill="#ef5350" fontWeight="700">Redaction — AI can{"'"}t parse</text>
      <rect x="16" y="30" width="320" height="46" rx="8" fill="#FBEEE8" stroke="#f3d8cb"/>
      <g fontFamily="ui-monospace,monospace" fontSize="12" fill="#c73e3a"><text x="28" y="50">circuit_id=█████  node=██████</text><text x="28" y="68">loss=████</text></g>
      <text x="16" y="104" fontFamily="Inter,sans-serif" fontSize="11" fill="#0ea5a4" fontWeight="700">Capsule — AI can still reason</text>
      <rect x="16" y="112" width="320" height="46" rx="8" fill="#e6f7f6" stroke="#c4e6da"/>
      <g fontFamily="ui-monospace,monospace" fontSize="11.5" fill="#0ea5a4"><text x="28" y="132">circuit_id={"⟨capsule:circuit_1⟩"}</text><text x="28" y="150">node={"⟨capsule:node_1⟩"}  loss=4.7%</text></g>
    </svg>,
    <svg key="d3" className="p4-dgm" viewBox="0 0 360 168" role="img" aria-label="Raw values and reconstruction map stay inside customer environment; only protected version crosses.">
      <rect x="14" y="18" width="208" height="132" rx="10" fill="#eeebfe" stroke="#5b4fe9" strokeDasharray="5 4"/>
      <text x="26" y="38" fontFamily="Inter,sans-serif" fontSize="11" fill="#5b4fe9" fontWeight="700">Customer environment</text>
      <g fontFamily="ui-monospace,monospace" fontSize="10" fill="#0f1130">
        <rect x="26" y="48" width="184" height="22" rx="5" fill="#fff" stroke="#d4d0f5"/><text x="36" y="63">raw values {"·"} CKT-77-AB12</text>
        <rect x="26" y="76" width="184" height="22" rx="5" fill="#fff" stroke="#d4d0f5"/><text x="36" y="91">reconstruction map (stays here)</text>
        <rect x="26" y="104" width="184" height="22" rx="5" fill="#fff" stroke="#d4d0f5"/><text x="36" y="119">results rebuilt locally</text>
      </g>
      <g fontFamily="ui-monospace,monospace" fontSize="11">
        <rect x="250" y="64" width="96" height="40" rx="8" fill="#0f1130"/><text x="298" y="82" fill="#fff" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10.5">approved</text><text x="298" y="96" fill="#5ee0b0" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10.5">model path</text>
        <text x="286" y="54" fill="#5b4fe9" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9.5" fontWeight="600">protected version</text>
        <path d="M223 84 L249 84" stroke="#5b4fe9" strokeWidth="1.4" markerEnd="url(#p4z1)"/>
      </g>
      <defs><marker id="p4z1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b4fe9"/></marker></defs>
      <text x="286" y="128" fontFamily="Inter,sans-serif" fontSize="10" fill="#6b7280" textAnchor="middle">raw values do not cross</text>
    </svg>,
    <svg key="d4" className="p4-dgm" viewBox="0 0 360 168" role="img" aria-label="NOC, ServiceNow and OT connect to Capsule, then model, then reconstructed output.">
      <g fontFamily="Inter,sans-serif" fontSize="11" fill="#0f1130">
        <rect x="14" y="28" width="116" height="26" rx="7" fill="#fff" stroke="#e5e7eb"/><text x="72" y="45" textAnchor="middle">NOC / OSS</text>
        <rect x="14" y="62" width="116" height="26" rx="7" fill="#fff" stroke="#e5e7eb"/><text x="72" y="79" textAnchor="middle">ServiceNow / Jira</text>
        <rect x="14" y="96" width="116" height="26" rx="7" fill="#fff" stroke="#e5e7eb"/><text x="72" y="113" textAnchor="middle">OT historian / RAG</text>
      </g>
      <g stroke="#6b7280" strokeWidth="1.1" fill="none" markerEnd="url(#p4e1)">
        <path d="M130 41 C160 41 162 71 188 71"/><path d="M130 75 L188 75"/><path d="M130 109 C160 109 162 79 188 79"/>
      </g>
      <defs><marker id="p4e1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/></marker></defs>
      <rect x="190" y="58" width="60" height="34" rx="8" fill="#5b4fe9"/><text x="220" y="79" fontFamily="Inter,sans-serif" fontSize="11" fill="#fff" textAnchor="middle">Capsule</text>
      <text x="254" y="79" fill="#5b4fe9" fontFamily="Inter,sans-serif">{"→"}</text>
      <rect x="268" y="56" width="78" height="38" rx="8" fill="#0f1130"/><text x="307" y="73" fontFamily="Inter,sans-serif" fontSize="9.5" fill="#fff" textAnchor="middle">approved</text><text x="307" y="86" fontFamily="Inter,sans-serif" fontSize="9.5" fill="#5ee0b0" textAnchor="middle">model path</text>
      <path d="M307 94 C307 130 150 120 150 132" stroke="#0ea5a4" strokeWidth="1.2" fill="none" markerEnd="url(#p4e2)"/>
      <defs><marker id="p4e2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0ea5a4"/></marker></defs>
      <rect x="34" y="134" width="292" height="24" rx="7" fill="#e6f7f6" stroke="#c4e6da"/><text x="180" y="150" fontFamily="Inter,sans-serif" fontSize="11" fill="#0ea5a4" textAnchor="middle">reconstructed output back in the ticket / workflow</text>
    </svg>,
    <svg key="d5" className="p4-dgm" viewBox="0 0 360 150" role="img" aria-label="Timeline: yesterday circuit IDs, today add M&A codenames, tomorrow add new markers. Pipeline unchanged.">
      <line x1="26" y1="74" x2="334" y2="74" stroke="#e5e7eb" strokeWidth="2"/>
      <g fontFamily="Inter,sans-serif" fontSize="11">
        <circle cx="70" cy="74" r="6" fill="#6b7280"/><text x="70" y="52" fill="#6b7280" textAnchor="middle">Yesterday</text><text x="70" y="96" fill="#6b7280" textAnchor="middle" fontSize="10">circuit IDs,</text><text x="70" y="109" fill="#6b7280" textAnchor="middle" fontSize="10">topology</text>
        <circle cx="180" cy="74" r="7" fill="#5b4fe9"/><text x="180" y="52" fill="#5b4fe9" textAnchor="middle" fontWeight="700">Today</text><text x="180" y="96" fill="#5b4fe9" textAnchor="middle" fontSize="10">+ M&amp;A codename,</text><text x="180" y="109" fill="#5b4fe9" textAnchor="middle" fontSize="10">deal terms</text>
        <circle cx="300" cy="74" r="6" fill="#0ea5a4"/><text x="300" y="52" fill="#0ea5a4" textAnchor="middle">Tomorrow</text><text x="300" y="96" fill="#0ea5a4" textAnchor="middle" fontSize="10">+ new regulated</text><text x="300" y="109" fill="#0ea5a4" textAnchor="middle" fontSize="10">markers</text>
      </g>
      <text x="180" y="136" fontFamily="Inter,sans-serif" fontSize="10.5" fill="#6b7280" textAnchor="middle">pipeline unchanged {"·"} old policy archived &amp; auditable</text>
    </svg>,
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .p4-root{container-type:inline-size;container-name:p4;width:100%;word-break:keep-all;overflow-wrap:break-word}
        .p4-root *{box-sizing:border-box;margin:0;padding:0}
        .p4-section{padding:92px 0;border-top:1px solid #e5e7eb;background:#fff}
        .p4-wrap{max-width:1280px;margin:0 auto;padding:0 28px}
        .p4-eye{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;background:#0f1130;color:#fff;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:'Inter',sans-serif}
        .p4-eye::before{content:"";width:6px;height:6px;border-radius:50%;background:#0ea5a4;flex:0 0 auto}
        .p4-sec-head{max-width:720px}
        .p4-h2{font-size:clamp(28px,3.9vw,46px);line-height:1.12;font-weight:700;letter-spacing:-.03em;margin-top:10px;max-width:800px;font-family:'Inter',sans-serif;color:#0f1130}
        .p4-sub{margin-top:14px;font-size:17px;color:#3a3d5e;max-width:680px;font-family:'Inter',sans-serif;line-height:1.62}
        .p4-cap{display:flex;gap:38px;align-items:center;padding:40px 0;border-bottom:1px solid #e5e7eb;min-height:252px;flex-direction:row-reverse}
        .p4-cap:last-child{border-bottom:0}
        .p4-body{flex:1;min-width:0}
        .p4-viz{flex:0 0 360px;max-width:360px}
        .p4-idx{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:#5b4fe9}
        .p4-cap.p4-lead .p4-idx{color:#ef5350}
        .p4-cap h3{margin-top:6px;font-size:21px;font-weight:700;letter-spacing:-.02em;font-family:'Inter',sans-serif;color:#0f1130}
        .p4-cap p{margin-top:10px;font-size:15px;color:#3a3d5e;max-width:520px;font-family:'Inter',sans-serif;line-height:1.62}
        .p4-say{margin-top:12px;font-size:14px;font-weight:600;color:#0f1130;font-family:'Inter',sans-serif}
        .p4-ilab{margin-top:10px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:#6b7280}
        .p4-cap.p4-lead{background:#eeebfe;border-radius:16px;padding:34px 36px;border-bottom:0;margin-top:30px;margin-bottom:10px}
        .p4-dgm{width:100%;height:auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;display:block}
        @container p4 (max-width:820px){.p4-cap{flex-direction:column;align-items:flex-start}.p4-viz{flex-basis:auto;max-width:100%;width:100%}}
      `}</style>
      <div className="p4-root">
        <section className="p4-section" id="capabilities">
          <div className="p4-wrap">
            <div className="p4-sec-head">
              <span className="p4-eye">{r(capEyebrow, "capEyebrow")}</span>
              <h2 className="p4-h2">{r(capTitle, "capTitle")}</h2>
              <p className="p4-sub">{r(capDesc, "capDesc")}</p>
            </div>
            {[0,1,2,3,4,5].map(i => {
              const c = cap(i)
              return (
                <div key={i} className={`p4-cap ${i === 0 ? "p4-lead" : ""}`}>
                  <div className="p4-body">
                    <div className="p4-idx">{c.idx}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="p4-say">{c.quote}</div>
                    <div className="p4-ilab">{c.ilab}</div>
                  </div>
                  <div className="p4-viz">{DIAGRAMS[i]}</div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(HomeV3Part4_Capabilities, {
  capEyebrow: { type: ControlType.String, title: "Eyebrow",    defaultValue: "Six capabilities" },
  capTitle:   { type: ControlType.String, title: "Title",       defaultValue: "What makes the workflow keep running, and keep running for years" },
  capDesc:    { type: ControlType.String, title: "Description", defaultValue: "Can't send it raw. Can't just mask it. Capsule creates a protected working version, lets AI do the work, and reconstructs a usable result inside your workflow. These three capabilities are why the workflow finishes — plus three more that keep it running inside real systems over time.", displayTextArea: true },
  cap1Title: { type: ControlType.String, title: "Cap 1 Title",  defaultValue: "Get the real answer back" },
  cap1Desc:  { type: ControlType.String, title: "Cap 1 Desc",   defaultValue: "When the model returns its answer, Capsule rebuilds the real business values inside your environment, automatically. No one masks the input and reassembles the output by hand. The workflow finishes with real circuit IDs, ticket IDs and figures.", displayTextArea: true },
  cap1Quote: { type: ControlType.String, title: "Cap 1 Quote",  defaultValue: "If a person has to rebuild the answer, it was never automation." },
  cap2Title: { type: ControlType.String, title: "Cap 2 Title",  defaultValue: "Protect what PII tools can't even see" },
  cap2Desc:  { type: ControlType.String, title: "Cap 2 Desc",   defaultValue: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, network identifiers, asset references, mission references — any business-specific marker. Context-aware control adapts to document type, department and workflow.", displayTextArea: true },
  cap2Quote: { type: ControlType.String, title: "Cap 2 Quote",  defaultValue: "Your secrets aren't names and card numbers. They're AS4766, edge-ring-a, Project Halo — and no PII tool is even looking for them." },
  cap3Title: { type: ControlType.String, title: "Cap 3 Title",  defaultValue: "Keep the record usable" },
  cap3Desc:  { type: ControlType.String, title: "Cap 3 Desc",   defaultValue: "Tables, cross-references, configurations, topology graphs, ticket fields, runbook steps and document hierarchies survive intact. AI receives the full operational structure, not broken fragments that produce useless output.", displayTextArea: true },
  cap3Quote: { type: ControlType.String, title: "Cap 3 Quote",  defaultValue: "Redaction protects the field. Capsule protects the workflow." },
  cap4Title: { type: ControlType.String, title: "Cap 4 Title",  defaultValue: "You keep control of your own data" },
  cap4Desc:  { type: ControlType.String, title: "Cap 4 Desc",   defaultValue: "Sensitive data stays inside your environment. The model only ever works on the protected version, and the map that reconstructs real values never leaves the organization. Differential-privacy-based protection makes original values practically non-recoverable from outside your boundary. The model can be external; the raw values don't have to be.", displayTextArea: true },
  cap4Quote: { type: ControlType.String, title: "Cap 4 Quote",  defaultValue: "You don't have to choose between AI and control." },
  cap5Title: { type: ControlType.String, title: "Cap 5 Title",  defaultValue: "Fit into the workflow they already run" },
  cap5Desc:  { type: ControlType.String, title: "Cap 5 Desc",   defaultValue: "Air-gapped networks, on-premise servers, telecom-grade platforms, ServiceNow / SharePoint / Jira / OT historians and RAG pipelines — Capsule deploys inside your enterprise as-is, as a single API-call addition. No migration. Your existing workflows and policies stay intact.", displayTextArea: true },
  cap5Quote: { type: ControlType.String, title: "Cap 5 Quote",  defaultValue: "No copy-paste masking. No manual cleanup. It runs inside the flow." },
  cap6Title: { type: ControlType.String, title: "Cap 6 Title",  defaultValue: "Change what's protected tomorrow" },
  cap6Desc:  { type: ControlType.String, title: "Cap 6 Desc",   defaultValue: "Yesterday it was circuit IDs and topology nodes. Today add M&A codenames and deal terms. Next quarter add a new regulator's markers. Define, version and time-shift what's protected as your business and regulations evolve, with a full audit trail of which marker was protected when.", displayTextArea: true },
  cap6Quote: { type: ControlType.String, title: "Cap 6 Quote",  defaultValue: "What you protect will change. Your pipeline shouldn't break." },
  locale:    { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
})
