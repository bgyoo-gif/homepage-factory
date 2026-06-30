import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"
import { useEffect } from "react"

/* ── Data type items ── */
const DT: Record<string, Array<{t: string, ex: string}>> = {
  en: [
    { t: "System logs", ex: "BGP logs, alarm streams, NOC notes" },
    { t: "PDF reports", ex: "incident reports, filings, contracts" },
    { t: "Topology graphs", ex: "network graphs, asset relationships" },
    { t: "Tickets", ex: "INC-24091, ticket fields, history" },
    { t: "Runbooks", ex: "response steps, escalation paths" },
    { t: "Code & config", ex: "snippets, device configs, paths" },
    { t: "Tables", ex: "structured fields, cross-references" },
    { t: "Images & diagrams", ex: "schematics, scans, annotations" },
    { t: "Unstructured notes", ex: "clinical notes, mission briefs" },
  ],
  ko: [
    { t: "시스템 로그", ex: "BGP 로그, 알람 스트림, NOC 노트" },
    { t: "PDF 보고서", ex: "사건 보고서, 신고 서류, 계약서" },
    { t: "토폴로지 그래프", ex: "네트워크 그래프, 자산 관계도" },
    { t: "티켓", ex: "INC-24091, 티켓 필드, 이력" },
    { t: "런북", ex: "대응 단계, 에스컬레이션 경로" },
    { t: "코드 및 설정", ex: "스니펫, 장비 설정, 경로" },
    { t: "테이블", ex: "구조화된 필드, 상호 참조" },
    { t: "이미지 및 다이어그램", ex: "회로도, 스캔, 주석" },
    { t: "비정형 노트", ex: "임상 노트, 작전 브리프" },
  ],
  de: [
    { t: "Systemprotokolle", ex: "BGP-Logs, Alarmströme, NOC-Notizen" },
    { t: "PDF-Berichte", ex: "Vorfallberichte, Einreichungen, Verträge" },
    { t: "Topologiegraphen", ex: "Netzwerkgraphen, Asset-Beziehungen" },
    { t: "Tickets", ex: "INC-24091, Ticket-Felder, Verlauf" },
    { t: "Runbooks", ex: "Reaktionsschritte, Eskalationspfade" },
    { t: "Code & Konfiguration", ex: "Snippets, Gerätekonfig, Pfade" },
    { t: "Tabellen", ex: "strukturierte Felder, Querverweise" },
    { t: "Bilder & Diagramme", ex: "Schaltpläne, Scans, Annotationen" },
    { t: "Unstrukturierte Notizen", ex: "klinische Notizen, Einsatzbriefings" },
  ],
}

const DT_IC = [
  <svg key="i0" viewBox="0 0 24 24"><path d="M4 17l5-5-5-5"/><path d="M12 19h8"/></svg>,
  <svg key="i1" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>,
  <svg key="i2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M7.7 7.7l3 8.3M16.3 7.7l-3 8.3M8.2 6h7.6"/></svg>,
  <svg key="i3" viewBox="0 0 24 24"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.6 1.6 0 0 0 0 3.6V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a1.6 1.6 0 0 0 0-3.6z"/><path d="M13 7v10"/></svg>,
  <svg key="i4" viewBox="0 0 24 24"><path d="M8 6h9M8 12h9M8 18h9"/><circle cx="4" cy="6" r="1.1"/><circle cx="4" cy="12" r="1.1"/><circle cx="4" cy="18" r="1.1"/></svg>,
  <svg key="i5" viewBox="0 0 24 24"><path d="M9 6l-5 6 5 6"/><path d="M15 6l5 6-5 6"/></svg>,
  <svg key="i6" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>,
  <svg key="i7" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5-5L5 20"/></svg>,
  <svg key="i8" viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6M9 17h4"/></svg>,
]

/* ── Proof metrics ── */
const PROOF: Record<string, Array<{label: string}>> = {
  en: [{ label: "Processing (2,200 chars)" }, { label: "Reconstruction" }, { label: "Output similarity" }, { label: "Workflow accuracy" }],
  ko: [{ label: "처리 속도 (2,200자)" }, { label: "복원" }, { label: "출력 유사도" }, { label: "워크플로우 정확도" }],
  de: [{ label: "Verarbeitung (2.200 Zeichen)" }, { label: "Rekonstruktion" }, { label: "Ausgabeähnlichkeit" }, { label: "Workflow-Genauigkeit" }],
}

/* ── Use cases ── */
const UC: Record<string, Array<{title: string, lab: string, data: string, dep: string}>> = {
  en: [
    { title: "Network Operations & Incident Analysis", lab: "Operational data", data: "circuit ID · topology node · BGP log · device ID · alarm stream · NOC note · incident ticket", dep: "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12, Data Security & Governance" },
    { title: "Industrial Asset & Vulnerability Operations (OT)", lab: "Operational data", data: "OT asset ID · PLC / ICS alert · vulnerability record · patch constraint · vendor / device info", dep: "Partner: Claroty (industrial cybersecurity)" },
    { title: "Healthcare Clinical & Hospital Operations", lab: "Operational data", data: "clinical note · lab result · prescription flow · medical record ID · diagnosis · claim review context", dep: "Deployed at Ewha Womans University Medical Center (EUMC)" },
    { title: "Public Sector / Defense — Mission Workflow", lab: "Operational data", data: "mission log · classified operation detail · security-grade document · operation brief · command workflow", dep: "Deployed at Ministry of National Defense (South Korea) — on-prem / local execution" },
  ],
  ko: [
    { title: "네트워크 운영 및 장애 분석", lab: "운영 데이터", data: "회선 ID · 토폴로지 노드 · BGP 로그 · 장비 ID · 알람 스트림 · NOC 노트 · 사건 티켓", dep: "SK 텔레콤 · 도이체텔레콤 T Challenge 2026 — Top 12, Data Security & Governance" },
    { title: "산업 자산 및 취약점 운영 (OT)", lab: "운영 데이터", data: "OT 자산 ID · PLC / ICS 알림 · 취약점 레코드 · 패치 제약 · 벤더 / 장비 정보", dep: "파트너: Claroty (산업 사이버 보안)" },
    { title: "의료 임상 및 병원 운영", lab: "운영 데이터", data: "임상 노트 · 검사 결과 · 처방 흐름 · 의무기록 ID · 진단 · 청구 심사 맥락", dep: "배포: 이화여자대학교 의료원 (EUMC)" },
    { title: "공공 부문 / 국방 — 작전 워크플로우", lab: "운영 데이터", data: "작전 로그 · 기밀 작전 상세 · 보안 등급 문서 · 작전 브리프 · 지휘 워크플로우", dep: "배포: 대한민국 국방부 — 온프레미스 / 로컬 실행" },
  ],
  de: [
    { title: "Netzbetrieb & Störungsanalyse", lab: "Betriebsdaten", data: "Circuit-ID · Topologie-Knoten · BGP-Log · Geräte-ID · Alarmstrom · NOC-Notiz · Vorfall-Ticket", dep: "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12, Data Security & Governance" },
    { title: "Industrielle Asset- & Schwachstellenoperationen (OT)", lab: "Betriebsdaten", data: "OT-Asset-ID · PLC / ICS-Alarm · Schwachstellendatensatz · Patch-Einschränkung · Anbieter / Geräteinfo", dep: "Partner: Claroty (industrielle Cybersicherheit)" },
    { title: "Klinische & Krankenhausoperationen", lab: "Betriebsdaten", data: "klinische Notiz · Laborbefund · Verschreibungsablauf · Krankenakten-ID · Diagnose · Abrechnungsprüfung", dep: "Bereitgestellt am Ewha Womans University Medical Center (EUMC)" },
    { title: "Öffentlicher Sektor / Verteidigung — Einsatz-Workflow", lab: "Betriebsdaten", data: "Einsatzprotokoll · klassifiziertes Operationsdetail · Sicherheitsdokument · Einsatzbriefing · Kommando-Workflow", dep: "Bereitgestellt beim Ministerium für Nationale Verteidigung (Südkorea) — On-Prem / lokale Ausführung" },
  ],
}

const UC_FLOW = (idx: number) => {
  const flows = [
    { src: "NOC log · circuit ID", mid: "AI · RCA", out: "reconstructed ticket" },
    { src: "asset ID · ICS alert", mid: "AI · fix", out: "security ops workflow" },
    { src: "MRN · clinical note", mid: "AI · note", out: "reconstructed into EHR" },
    { src: "mission log · local", mid: "AI · brief", out: "command · audit trail" },
  ]
  const f = flows[idx]
  return (
    <svg viewBox="0 0 520 56" style={{ marginTop: 12, width: "100%" }} role="img">
      <rect x="4" y="12" width="132" height="32" rx="7" fill="#eeebfe" stroke="#d4d0f5"/><text x="70" y="32" fontFamily="ui-monospace,monospace" fontSize="10" fill="#5b4fe9" textAnchor="middle">{f.src}</text>
      <text x="142" y="33" fill="#6b7280">{"→"}</text>
      <rect x="158" y="12" width="74" height="32" rx="7" fill="#5b4fe9"/><text x="195" y="32" fontFamily="Inter,sans-serif" fontSize="10.5" fill="#fff" textAnchor="middle">Capsule</text>
      <text x="238" y="33" fill="#6b7280">{"→"}</text>
      <rect x="254" y="12" width="92" height="32" rx="7" fill="#0f1130"/><text x="300" y="32" fontFamily="Inter,sans-serif" fontSize="10" fill="#5ee0b0" textAnchor="middle">{f.mid}</text>
      <text x="352" y="33" fill="#0ea5a4">{"→"}</text>
      <rect x="368" y="12" width="148" height="32" rx="7" fill="#e6f7f6" stroke="#c4e6da"/><text x="442" y="32" fontFamily="Inter,sans-serif" fontSize="10" fill="#0ea5a4" textAnchor="middle">{f.out}</text>
    </svg>
  )
}

/* ── Handoff ── */
const HO: Record<string, {cap: {tag: string, h: string, p: string}, syn: {tag: string, h: string, p: string}}> = {
  en: { cap: { tag: "CAPSULE · ON-PREM", h: "Opens the blocked path", p: "Operational data that can't go raw into SaaS reaches the AI workflow inside your environment." }, syn: { tag: "SYNTITAN · CLOUD", h: "Takes it to production", p: "Validates and operates the workflow so it's production-ready and reproducible at scale." } },
  ko: { cap: { tag: "CAPSULE · ON-PREM", h: "차단된 경로를 열다", p: "SaaS에 원본 그대로 보낼 수 없는 운영 데이터가 고객 환경 내부의 AI 워크플로우에 도달합니다." }, syn: { tag: "SYNTITAN · CLOUD", h: "프로덕션으로 전환", p: "워크플로우를 검증하고 운영하여 대규모 프로덕션에 즉시 투입 가능한 상태로 만듭니다." } },
  de: { cap: { tag: "CAPSULE · ON-PREM", h: "Öffnet den blockierten Pfad", p: "Betriebsdaten, die nicht roh in SaaS geschickt werden können, erreichen den KI-Workflow in Ihrer Umgebung." }, syn: { tag: "SYNTITAN · CLOUD", h: "Bringt es in Produktion", p: "Validiert und betreibt den Workflow, damit er produktionsreif und im großen Maßstab reproduzierbar ist." } },
}

/* ── Straight answers ── */
const ANS: Record<string, Array<{q: string, a: string}>> = {
  en: [
    { q: "Can you run AI on operational data that can't leave your environment?", a: "Yes. LLM Capsule turns sensitive operational values into a protected working version inside your environment, lets an approved model work on that version, and reconstructs the usable result in your workflow. The original values and the mapping that reconstructs them never leave. It runs on-prem, in your VPC, or fully air-gapped." },
    { q: "What is a context-preserving data layer for AI?", a: "It is a layer that sits between your operational data and the model. Instead of redacting values to ████ and destroying the record, it substitutes them with context-preserving stand-ins so the structure the AI needs stays intact, then reconstructs the real values after the model runs." },
    { q: "How is this different from a cloud privacy vault or a PII masking tool?", a: "A masking tool hides values and stops, which breaks the workflow. A cloud privacy vault stores your values and the mapping in someone else's cloud. Capsule keeps the original values and the reconstruction mapping inside your own environment, protects non-PII operational markers you define, and reconstructs a usable result. Nothing is sent to an external vault." },
    { q: "Can it run in an air-gapped or regulated environment?", a: "Yes. Capsule deploys inside on-prem, VPC and air-gapped environments and embeds into the systems you already run, such as ServiceNow, Jira, OSS/NOC and RAG. It is already deployed on operational data in telecom, industrial / OT and the public sector." },
  ],
  ko: [
    { q: "환경 밖으로 나갈 수 없는 운영 데이터에 AI를 사용할 수 있나요?", a: "네. LLM Capsule은 민감한 운영 값을 고객 환경 내부에서 보호된 작업용 버전으로 변환하고, 승인된 모델이 해당 버전으로 작업한 뒤, 워크플로우 내에서 사용 가능한 결과를 복원합니다. 원본 값과 복원 매핑은 절대 외부로 나가지 않습니다. 온프레미스, VPC, 또는 완전 에어갭 환경에서 실행됩니다." },
    { q: "AI를 위한 컨텍스트 보존 데이터 레이어란 무엇인가요?", a: "운영 데이터와 모델 사이에 위치하는 레이어입니다. 값을 ████으로 삭제하여 레코드를 파괴하는 대신, 컨텍스트를 보존하는 대체 값으로 치환하여 AI에 필요한 구조를 유지한 뒤, 모델 실행 후 실제 값을 복원합니다." },
    { q: "클라우드 프라이버시 볼트나 PII 마스킹 도구와 어떻게 다른가요?", a: "마스킹 도구는 값을 숨기고 멈추기 때문에 워크플로우가 중단됩니다. 클라우드 프라이버시 볼트는 다른 사람의 클라우드에 값과 매핑을 저장합니다. Capsule은 원본 값과 복원 매핑을 고객 자체 환경 내부에 유지하고, 사용자가 정의한 비PII 운영 마커를 보호하며, 사용 가능한 결과를 복원합니다. 외부 볼트로 전송되는 것은 없습니다." },
    { q: "에어갭 또는 규제 환경에서 실행할 수 있나요?", a: "네. Capsule은 온프레미스, VPC, 에어갭 환경 내부에 배포되며 ServiceNow, Jira, OSS/NOC, RAG 등 이미 운영 중인 시스템에 통합됩니다. 통신, 산업/OT, 공공 부문의 운영 데이터에서 이미 배포되어 있습니다." },
  ],
  de: [
    { q: "Kann man KI auf Betriebsdaten anwenden, die die Umgebung nicht verlassen dürfen?", a: "Ja. LLM Capsule wandelt sensible Betriebswerte in eine geschützte Arbeitsversion innerhalb Ihrer Umgebung um, lässt ein genehmigtes Modell damit arbeiten und rekonstruiert das nutzbare Ergebnis in Ihrem Workflow. Die Originalwerte und die Zuordnung verlassen nie die Umgebung. Es läuft On-Prem, in Ihrer VPC oder vollständig air-gapped." },
    { q: "Was ist eine kontexterhaltende Datenschicht für KI?", a: "Eine Schicht zwischen Ihren Betriebsdaten und dem Modell. Statt Werte zu ████ zu schwärzen und den Datensatz zu zerstören, substituiert sie diese mit kontexterhaltenden Platzhaltern, sodass die von der KI benötigte Struktur intakt bleibt, und rekonstruiert nach dem Modelllauf die echten Werte." },
    { q: "Wie unterscheidet sich das von einem Cloud-Privacy-Vault oder einem PII-Maskierungstool?", a: "Ein Maskierungstool verbirgt Werte und stoppt — das bricht den Workflow. Ein Cloud-Privacy-Vault speichert Ihre Werte und die Zuordnung in der Cloud eines Dritten. Capsule hält Originalwerte und Rekonstruktionszuordnung in Ihrer eigenen Umgebung, schützt von Ihnen definierte Nicht-PII-Betriebsmarker und rekonstruiert ein nutzbares Ergebnis. Nichts wird an einen externen Vault gesendet." },
    { q: "Kann es in einer Air-Gapped- oder regulierten Umgebung laufen?", a: "Ja. Capsule wird innerhalb von On-Prem-, VPC- und Air-Gapped-Umgebungen bereitgestellt und integriert sich in bestehende Systeme wie ServiceNow, Jira, OSS/NOC und RAG. Es ist bereits auf Betriebsdaten in Telekommunikation, Industrie/OT und im öffentlichen Sektor im Einsatz." },
  ],
}

/* ── FAQ ── */
const FAQD: Record<string, Array<{q: string, a: string}>> = {
  en: [
    { q: "Is LLM Capsule a PII masking tool?", a: "No. Masking hides values and stops, which breaks the workflow. Capsule keeps raw values inside your environment, creates a protected working version AI can use, preserves the structure of the record, and reconstructs usable results. It also protects the non-PII operational markers you define, which PII tools don't catch." },
    { q: "Does Capsule replace my approved LLM?", a: "No. Capsule sits in front of the model path you already approved — external or on-prem. You keep the LLM you chose. Capsule lets the data that was blocked reach it as a protected working version." },
    { q: "Can I still use external LLMs like ChatGPT, Claude or Gemini?", a: "Yes. The model can be external. Capsule sends only a protected working version through the approved model path, so the external model never sees the raw values. External, in-house, VPC-hosted and on-prem models all work — you choose under your own governance." },
    { q: "Can it work on logs, PDFs, graphs, tickets, code and images?", a: "Yes. Structure is preserved across formats, so the model receives a usable record instead of broken fragments. Logs stay logs, tables stay tables, topology graphs stay relationships." },
    { q: "Where do the raw values stay?", a: "Inside your environment. Only the protected working version crosses to the model path, and the map that reconstructs the real values never leaves the organization." },
    { q: "How does reconstruction work?", a: "After the model returns its answer on the protected version, Capsule rebuilds the real business values inside your environment so the output is usable in the originating workflow — the real circuit ID, ticket ID, figures and references come back." },
    { q: "Do humans have to manually reconstruct the values?", a: "No. Reconstruction happens automatically inside the workflow. No one masks the input or reassembles the output by hand, so production AI doesn't wait for a person." },
    { q: "Can the policy change over time?", a: "Yes. Define and version what's protected, and update the markers as your business or regulators change — without rebuilding the pipeline. Yesterday's policy stays archived and auditable." },
    { q: "How does this connect to Syntitan?", a: "Capsule opens the blocked data path so the workflow can run on-prem. Syntitan (cloud) then validates and operates that workflow in production. They're separate products for separate audiences." },
  ],
  ko: [
    { q: "LLM Capsule은 PII 마스킹 도구인가요?", a: "아닙니다. 마스킹은 값을 숨기고 멈추기 때문에 워크플로우가 중단됩니다. Capsule은 원본 값을 고객 환경 내부에 유지하고, AI가 사용할 수 있는 보호된 작업용 버전을 생성하며, 레코드의 구조를 보존하고, 사용 가능한 결과를 복원합니다. PII 도구가 잡지 못하는 비PII 운영 마커도 보호합니다." },
    { q: "Capsule이 승인된 LLM을 대체하나요?", a: "아닙니다. Capsule은 이미 승인된 모델 경로 — 외부 또는 온프레미스 — 앞에 위치합니다. 선택한 LLM을 유지하면서, 차단된 데이터가 보호된 작업용 버전으로 해당 모델에 도달할 수 있게 합니다." },
    { q: "ChatGPT, Claude, Gemini 같은 외부 LLM도 사용할 수 있나요?", a: "네. 모델은 외부일 수 있습니다. Capsule은 승인된 모델 경로를 통해 보호된 작업용 버전만 전송하므로 외부 모델이 원본 값을 볼 수 없습니다. 외부, 사내, VPC 호스팅, 온프레미스 모델 모두 동작합니다." },
    { q: "로그, PDF, 그래프, 티켓, 코드, 이미지에서 작동하나요?", a: "네. 형식 전반에 걸쳐 구조가 보존되어 모델이 깨진 조각 대신 사용 가능한 레코드를 받습니다. 로그는 로그로, 테이블은 테이블로, 토폴로지 그래프는 관계로 유지됩니다." },
    { q: "원본 값은 어디에 유지되나요?", a: "고객 환경 내부입니다. 보호된 작업용 버전만 모델 경로로 전달되며, 실제 값을 복원하는 매핑은 조직 외부로 나가지 않습니다." },
    { q: "복원은 어떻게 작동하나요?", a: "모델이 보호된 버전에 대한 답변을 반환한 후, Capsule이 고객 환경 내부에서 실제 비즈니스 값을 복원하여 원래 워크플로우에서 사용할 수 있는 출력을 만듭니다. 실제 회선 ID, 티켓 ID, 수치, 참조가 돌아옵니다." },
    { q: "사람이 수동으로 값을 복원해야 하나요?", a: "아닙니다. 복원은 워크플로우 내부에서 자동으로 이루어집니다. 아무도 입력을 마스킹하거나 출력을 수동으로 재조립하지 않으므로, 프로덕션 AI가 사람을 기다리지 않습니다." },
    { q: "정책을 시간에 따라 변경할 수 있나요?", a: "네. 보호 대상을 정의하고 버전 관리하며, 비즈니스나 규제가 변할 때 마커를 업데이트하세요. 파이프라인을 재구축할 필요 없습니다. 이전 정책은 아카이브되고 감사 가능합니다." },
    { q: "Syntitan과 어떻게 연결되나요?", a: "Capsule이 차단된 데이터 경로를 열어 온프레미스에서 워크플로우가 실행되도록 합니다. Syntitan(클라우드)이 해당 워크플로우를 프로덕션에서 검증하고 운영합니다. 별도의 제품으로 별도의 대상을 위해 설계되었습니다." },
  ],
  de: [
    { q: "Ist LLM Capsule ein PII-Maskierungstool?", a: "Nein. Maskierung verbirgt Werte und stoppt — das bricht den Workflow. Capsule hält Rohwerte in Ihrer Umgebung, erstellt eine geschützte Arbeitsversion für die KI, bewahrt die Struktur des Datensatzes und rekonstruiert nutzbare Ergebnisse. Es schützt auch die von Ihnen definierten Nicht-PII-Betriebsmarker, die PII-Tools nicht erkennen." },
    { q: "Ersetzt Capsule mein genehmigtes LLM?", a: "Nein. Capsule sitzt vor dem bereits genehmigten Modellpfad — extern oder On-Prem. Sie behalten Ihr gewähltes LLM. Capsule ermöglicht es den blockierten Daten, als geschützte Arbeitsversion das Modell zu erreichen." },
    { q: "Kann ich weiterhin externe LLMs wie ChatGPT, Claude oder Gemini verwenden?", a: "Ja. Das Modell kann extern sein. Capsule sendet nur eine geschützte Arbeitsversion über den genehmigten Modellpfad, sodass das externe Modell die Rohwerte nie sieht. Externe, hauseigene, VPC-gehostete und On-Prem-Modelle funktionieren alle." },
    { q: "Funktioniert es mit Logs, PDFs, Graphen, Tickets, Code und Bildern?", a: "Ja. Die Struktur bleibt über alle Formate erhalten, sodass das Modell einen nutzbaren Datensatz statt zerbrochener Fragmente erhält. Logs bleiben Logs, Tabellen bleiben Tabellen, Topologiegraphen behalten ihre Beziehungen." },
    { q: "Wo bleiben die Rohwerte?", a: "In Ihrer Umgebung. Nur die geschützte Arbeitsversion geht zum Modellpfad, und die Zuordnung, die echte Werte rekonstruiert, verlässt die Organisation nie." },
    { q: "Wie funktioniert die Rekonstruktion?", a: "Nachdem das Modell seine Antwort auf die geschützte Version zurückgegeben hat, baut Capsule die echten Geschäftswerte in Ihrer Umgebung wieder auf, sodass die Ausgabe im ursprünglichen Workflow nutzbar ist — echte Circuit-IDs, Ticket-IDs, Zahlen und Referenzen kommen zurück." },
    { q: "Müssen Menschen die Werte manuell rekonstruieren?", a: "Nein. Die Rekonstruktion erfolgt automatisch innerhalb des Workflows. Niemand maskiert die Eingabe oder setzt die Ausgabe von Hand zusammen, sodass die produktive KI nicht auf eine Person wartet." },
    { q: "Kann sich die Richtlinie im Laufe der Zeit ändern?", a: "Ja. Definieren und versionieren Sie, was geschützt wird, und aktualisieren Sie die Marker, wenn sich Ihr Geschäft oder die Regulierung ändert — ohne die Pipeline neu aufzubauen. Gestrige Richtlinien bleiben archiviert und überprüfbar." },
    { q: "Wie verbindet sich das mit Syntitan?", a: "Capsule öffnet den blockierten Datenpfad, damit der Workflow On-Prem laufen kann. Syntitan (Cloud) validiert und betreibt diesen Workflow dann in der Produktion. Es sind separate Produkte für verschiedene Zielgruppen." },
  ],
}

/* ── Section-level translations ── */
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    dtEyebrow: "What it's built for", dtTitle: "Not just PII. The operational records your work actually runs on.", dtDesc: "A generic PII detector looks for names and numbers. The data that stops your AI is logs, configs, topology and contracts. Capsule keeps each of these usable for AI while the real values stay inside.",
    proofEyebrow: "Proof", proofTitle: "Measured on real operational documents", proofNote: "Reconstruction is deterministic: substituted markers are rebuilt inside your environment through the internal mapping, not by inverting any differential-privacy step. Similarity measured on structured operational documents; figures vary by data type and workflow. We validate on your own payload during evaluation.",
    ucEyebrow: "Where it runs", ucTitle: "Built for operations putting AI on data that can't leave", ucDesc: "The same round trip across regulated operations: the real record stays inside, AI works on a protected version, and the answer comes back in the ticket or workflow.", ucNote: "Deutsche Telekom and Claroty validate Capsule in critical-infrastructure and telecom-grade operational context — the hardest places for operational data to move at all.",
    hoEyebrow: "Once the data path is open", hoTitle: "Capsule opens the blocked path. Syntitan takes it to production.", hoDesc: "Capsule gets blocked operational data into the AI workflow on-prem. Syntitan, the cloud operating layer, then evaluates, validates and operates that workflow in production. Capsule and Syntitan stay separate products for separate audiences; this is how they connect.",
    ansEyebrow: "Straight answers", ansTitle: "The questions people ask before they trust this",
    faqEyebrow: "FAQ", faqTitle: "Frequently asked questions",
    ctaTitle: "Bring one workflow that can't send its data raw.", ctaDesc: "A log, PDF, topology graph, ticket, runbook or config that can't go raw into an LLM. We'll show what stays inside, what the model works on, and how the result comes back usable.", ctaPrimaryLabel: "Request a Demo", ctaGhost1Label: "See how it works", ctaGhost2Label: "View Pricing",
  },
  ko: {
    dtEyebrow: "구축 대상", dtTitle: "PII만이 아닙니다. 실제 업무가 의존하는 운영 레코드입니다.", dtDesc: "일반적인 PII 탐지기는 이름과 번호만 찾습니다. AI를 막는 데이터는 로그, 설정, 토폴로지, 계약서입니다. Capsule은 실제 값을 내부에 유지하면서 이 모든 것을 AI가 사용할 수 있게 합니다.",
    proofEyebrow: "검증", proofTitle: "실제 운영 문서에서 측정", proofNote: "복원은 결정적입니다: 대체된 마커는 차등 프라이버시 단계를 역전하는 것이 아니라, 내부 매핑을 통해 고객 환경 내부에서 재구축됩니다. 유사도는 구조화된 운영 문서에서 측정되며, 수치는 데이터 유형과 워크플로우에 따라 다릅니다. 평가 시 고객의 실제 페이로드로 검증합니다.",
    ucEyebrow: "실행 환경", ucTitle: "나갈 수 없는 데이터에 AI를 적용하는 운영 환경을 위해 구축", ucDesc: "규제 운영 전반에 걸쳐 동일한 라운드 트립: 실제 레코드는 내부에 유지되고, AI는 보호된 버전으로 작업하며, 답변은 티켓이나 워크플로우로 돌아옵니다.", ucNote: "도이체텔레콤과 Claroty가 핵심 인프라 및 통신 등급 운영 환경에서 Capsule을 검증하고 있습니다 — 운영 데이터가 전혀 이동할 수 없는 가장 어려운 곳입니다.",
    hoEyebrow: "데이터 경로가 열리면", hoTitle: "Capsule이 차단된 경로를 엽니다. Syntitan이 프로덕션으로 전환합니다.", hoDesc: "Capsule이 차단된 운영 데이터를 온프레미스 AI 워크플로우에 투입합니다. 클라우드 운영 레이어인 Syntitan이 해당 워크플로우를 프로덕션에서 평가, 검증, 운영합니다. Capsule과 Syntitan은 별도 제품으로, 이것이 연결 방식입니다.",
    ansEyebrow: "명확한 답변", ansTitle: "신뢰하기 전에 사람들이 묻는 질문",
    faqEyebrow: "FAQ", faqTitle: "자주 묻는 질문",
    ctaTitle: "원본 데이터를 그대로 보낼 수 없는 워크플로우 하나를 가져오세요.", ctaDesc: "LLM에 원본 그대로 넣을 수 없는 로그, PDF, 토폴로지 그래프, 티켓, 런북 또는 설정. 무엇이 내부에 유지되는지, 모델이 무엇으로 작업하는지, 결과가 어떻게 사용 가능하게 돌아오는지 보여드립니다.", ctaPrimaryLabel: "데모 요청", ctaGhost1Label: "작동 방식 보기", ctaGhost2Label: "가격 보기",
  },
  de: {
    dtEyebrow: "Wofür es gebaut ist", dtTitle: "Nicht nur PII. Die Betriebsdatensätze, auf denen Ihre Arbeit tatsächlich läuft.", dtDesc: "Ein generischer PII-Detektor sucht nach Namen und Nummern. Die Daten, die Ihre KI blockieren, sind Logs, Konfigurationen, Topologie und Verträge. Capsule hält all diese für die KI nutzbar, während die echten Werte drinnen bleiben.",
    proofEyebrow: "Nachweis", proofTitle: "Gemessen an echten Betriebsdokumenten", proofNote: "Rekonstruktion ist deterministisch: substituierte Marker werden durch die interne Zuordnung in Ihrer Umgebung wiederhergestellt, nicht durch Umkehrung eines Differential-Privacy-Schritts. Ähnlichkeit gemessen an strukturierten Betriebsdokumenten; Werte variieren je nach Datentyp und Workflow. Wir validieren mit Ihrem eigenen Payload während der Evaluierung.",
    ucEyebrow: "Wo es läuft", ucTitle: "Gebaut für Betriebe, die KI auf Daten anwenden, die nicht rausdürfen", ucDesc: "Derselbe Roundtrip über regulierte Betriebe hinweg: der echte Datensatz bleibt drinnen, KI arbeitet auf einer geschützten Version, und die Antwort kommt im Ticket oder Workflow zurück.", ucNote: "Deutsche Telekom und Claroty validieren Capsule im Kontext kritischer Infrastruktur und Telekom-grade Betrieb — den schwierigsten Orten für Betriebsdaten überhaupt.",
    hoEyebrow: "Wenn der Datenpfad offen ist", hoTitle: "Capsule öffnet den blockierten Pfad. Syntitan bringt es in Produktion.", hoDesc: "Capsule bringt blockierte Betriebsdaten in den KI-Workflow On-Prem. Syntitan, die Cloud-Betriebsschicht, evaluiert, validiert und betreibt diesen Workflow dann in Produktion. Capsule und Syntitan bleiben separate Produkte für separate Zielgruppen; so verbinden sie sich.",
    ansEyebrow: "Klare Antworten", ansTitle: "Die Fragen, die Menschen stellen, bevor sie vertrauen",
    faqEyebrow: "FAQ", faqTitle: "Häufig gestellte Fragen",
    ctaTitle: "Bringen Sie einen Workflow, dessen Daten nicht roh gesendet werden können.", ctaDesc: "Ein Log, PDF, Topologiegraph, Ticket, Runbook oder eine Konfiguration, die nicht roh in ein LLM eingehen kann. Wir zeigen, was drinnen bleibt, womit das Modell arbeitet, und wie das Ergebnis nutzbar zurückkommt.", ctaPrimaryLabel: "Demo anfragen", ctaGhost1Label: "So funktioniert es", ctaGhost2Label: "Preise ansehen",
  },
}

interface Props {
  dtEyebrow?: string; dtTitle?: string; dtDesc?: string
  proofEyebrow?: string; proofTitle?: string; proofNote?: string
  ucEyebrow?: string; ucTitle?: string; ucDesc?: string; ucNote?: string
  hoEyebrow?: string; hoTitle?: string; hoDesc?: string
  ansEyebrow?: string; ansTitle?: string
  faqEyebrow?: string; faqTitle?: string
  ctaTitle?: string; ctaDesc?: string
  ctaPrimaryLabel?: string; ctaPrimaryHref?: string
  ctaGhost1Label?: string; ctaGhost1Href?: string
  ctaGhost2Label?: string; ctaGhost2Href?: string
  ctaImage?: string
  locale?: string
}

export default function HomeV3Part5_DataProofCTA(props: Props) {
  const { locale = "en", ctaPrimaryHref = "/request-a-demo", ctaGhost1Href = "#architecture", ctaGhost2Href = "/pricing", ctaImage = "" } = props
  const { activeLocale } = useLocaleInfo()
  const eff = (activeLocale as any)?.slug || locale || "en"
  const isNonEn = eff !== "en"
  const T = TRANSLATIONS[eff] || TRANSLATIONS.en
  const r = (p: string | undefined, k: string) => isNonEn ? (T[k] || p || TRANSLATIONS.en[k]) : (p || T[k] || TRANSLATIONS.en[k])

  const dt = DT[eff] || DT.en
  const proof = PROOF[eff] || PROOF.en
  const uc = UC[eff] || UC.en
  const ho = HO[eff] || HO.en
  const ans = ANS[eff] || ANS.en
  const faq = FAQD[eff] || FAQD.en

  useEffect(() => {
    const s1 = document.createElement("script")
    s1.type = "application/ld+json"
    s1.textContent = JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"LLM Capsule","applicationCategory":"BusinessApplication","description":"LLM Capsule keeps raw operational values inside your environment, creates a protected working version AI can use, preserves the structure of the record, and reconstructs usable results inside the workflow. Context-preserving data layer for AI workflows on data that can't leave. On-prem, air-gapped, or hybrid.","operatingSystem":"On-premise, air-gapped, hybrid, cloud","publisher":{"@type":"Organization","name":"CUBIG LTD","email":"contact@cubig.ai","address":{"@type":"PostalAddress","streetAddress":"21 Arthur Street","addressLocality":"Belfast","addressRegion":"Antrim","postalCode":"BT1 4GA","addressCountry":"GB"}}})
    document.head.appendChild(s1)
    const faqItems = (FAQD[eff] || FAQD.en)
    const s2 = document.createElement("script")
    s2.type = "application/ld+json"
    s2.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqItems.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))})
    document.head.appendChild(s2)
    return () => { s1.remove(); s2.remove() }
  }, [eff])

  const renderAns = (text: string) => {
    if (!text.includes("████")) return text
    const [before, after] = text.split("████")
    return <>{before}<code className="p5-code">{"████"}</code>{after}</>
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .p5-root{container-type:inline-size;container-name:p5;width:100%;word-break:keep-all;overflow-wrap:break-word}
        .p5-root *{box-sizing:border-box;margin:0;padding:0}
        .p5-section{padding:92px 0;border-top:1px solid #e5e7eb}
        .p5-wrap{max-width:1280px;margin:0 auto;padding:0 28px}
        .p5-eye{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;background:#0f1130;color:#fff;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:'Inter',sans-serif}
        .p5-eye::before{content:"";width:6px;height:6px;border-radius:50%;background:#0ea5a4;flex:0 0 auto}
        .p5-h2{font-size:clamp(28px,3.9vw,46px);line-height:1.12;font-weight:700;letter-spacing:-.03em;margin-top:10px;max-width:800px;font-family:'Inter',sans-serif;color:#0f1130}
        .p5-sub{margin-top:14px;font-size:17px;color:#3a3d5e;max-width:720px;font-family:'Inter',sans-serif;line-height:1.62}
        .p5-code{font-family:ui-monospace,monospace;background:#f7f8fb;padding:1px 5px;border-radius:4px;font-size:inherit}
        .p5-sec-head{max-width:720px}

        /* Data types dark */
        .p5-dark{border-top:0;color:#fff;background:radial-gradient(900px 440px at 26% -4%,rgba(14,165,164,.10),transparent 60%),radial-gradient(1000px 560px at 82% 16%,rgba(91,79,233,.24),transparent 60%),linear-gradient(180deg,#0f1130,#0f1130)}
        .p5-dark .p5-eye{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16)}
        .p5-dark .p5-h2{color:#fff}
        .p5-dark .p5-sub{color:rgba(255,255,255,.70)}
        .p5-dt-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:30px;max-width:1100px}
        .p5-dt{border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:18px;background:rgba(255,255,255,.04);transition:.15s}
        .p5-dt:hover{border-color:rgba(91,79,233,.7);box-shadow:0 10px 30px -18px rgba(0,0,0,.7)}
        .p5-dt-ic{width:34px;height:34px;border-radius:9px;background:rgba(91,79,233,.28);display:flex;align-items:center;justify-content:center;color:#c8c0f5;margin-bottom:11px}
        .p5-dt-ic svg{width:19px;height:19px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
        .p5-dt h4{font-size:14.5px;font-weight:700;font-family:'Inter',sans-serif;color:#fff}
        .p5-dt-ex{font-family:'JetBrains Mono',monospace;font-size:11.5px;color:rgba(255,255,255,.6);margin-top:6px}

        /* Proof */
        .p5-ring-row{display:flex;gap:24px;justify-content:space-between;max-width:1040px;margin:34px auto 0;align-items:flex-start;flex-wrap:wrap}
        .p5-ring{text-align:center;width:124px}
        .p5-ring-lbl{margin-top:6px;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#6b7280;font-family:'Inter',sans-serif}
        .p5-foot{margin-top:26px;font-size:13.5px;color:#3a3d5e;max-width:760px;font-family:'Inter',sans-serif;line-height:1.7}

        /* Use cases */
        .p5-ind-grid{display:grid;grid-template-columns:repeat(2,minmax(280px,1fr));gap:16px;margin-top:24px;max-width:1100px}
        .p5-ind{padding:20px;border:1px solid #e5e7eb;border-radius:14px;background:#fff}
        .p5-ind-t{display:flex;align-items:baseline;gap:9px}
        .p5-ind-n{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:#5b4fe9}
        .p5-ind h4{font-size:15.5px;font-weight:700;font-family:'Inter',sans-serif;color:#0f1130}
        .p5-ind-lab{margin-top:12px;font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;font-weight:700}
        .p5-ind-data{margin-top:4px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:#3a3d5e;line-height:1.7}
        .p5-ind-dep{margin-top:10px;font-size:12.5px;color:#0ea5a4;font-weight:600;font-family:'Inter',sans-serif}

        /* Handoff dark */
        .p5-handoff{background:linear-gradient(120deg,rgba(255,255,255,.06),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:30px}
        .p5-ho-row{display:flex;gap:14px;margin-top:18px;align-items:center;flex-wrap:wrap}
        .p5-ho{flex:1;min-width:210px;padding:18px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.05)}
        .p5-ho.p5-exit .p5-ho-tag{color:#0ea5a4}
        .p5-ho-tag{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#9d95f5;font-weight:700}
        .p5-ho h4{margin-top:6px;font-size:16px;font-family:'Inter',sans-serif;color:#fff}
        .p5-ho p{margin-top:6px;font-size:13px;color:rgba(255,255,255,.70);font-family:'Inter',sans-serif;line-height:1.5}
        .p5-arrow{font-size:22px;display:flex;align-items:center;color:#9d95f5;font-weight:700}

        /* Answers */
        .p5-ans-bg{background-image:linear-gradient(180deg,#f7f8fb,#fff)}
        .p5-ans-grid{display:grid;grid-template-columns:repeat(2,minmax(280px,1fr));gap:26px 44px;margin-top:8px}
        .p5-ans-grid h3{font-size:18px;margin:0 0 6px;font-family:'Inter',sans-serif;color:#0f1130;font-weight:700}
        .p5-ans-grid .p5-sub{margin:0}

        /* FAQ */
        .p5-faq{margin-top:20px}
        .p5-faq details{border:1px solid #e5e7eb;border-radius:12px;margin-top:12px;background:#fff;overflow:hidden}
        .p5-faq summary{padding:18px 20px;font-weight:600;font-size:16px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:'Inter',sans-serif;color:#0f1130}
        .p5-faq summary::-webkit-details-marker{display:none}
        .p5-faq summary::after{content:'+';color:#5b4fe9;font-size:22px;font-weight:400;flex-shrink:0}
        .p5-faq details[open] summary::after{content:'−'}
        .p5-faq-ans{padding:0 20px 20px;font-size:14.5px;color:#3a3d5e;line-height:1.6;font-family:'Inter',sans-serif}

        /* CTA */
        .p5-final{background:#0f1130;color:#fff;border-radius:18px;padding:48px 40px;text-align:center}
        .p5-final h2{font-size:clamp(28px,3.9vw,46px);font-weight:700;letter-spacing:-.03em;font-family:'Inter',sans-serif;color:#fff;max-width:760px;margin-left:auto;margin-right:auto}
        .p5-final>p{margin:16px auto 0;max-width:640px;color:#9d95f5;font-size:16px;font-family:'Inter',sans-serif;line-height:1.62}
        .p5-cta-row{display:flex;gap:12px;margin-top:28px;justify-content:center;flex-wrap:wrap}
        .p5-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none;font-family:'Inter',sans-serif;cursor:pointer;transition:transform .2s,background .2s,border-color .2s,color .2s}
        .p5-btn-primary{background-color:#5b4fe9;color:#fff;box-shadow:0 4px 6px rgba(15,17,48,.04),0 12px 32px rgba(15,17,48,.10)}
        .p5-btn-primary:hover{background-color:#3b2fbf;transform:translateY(-2px)}
        .p5-btn-primary::after{content:"\\2192";font-weight:400}
        .p5-btn-ghost{background-color:transparent;border:1px solid #1b1d4a;color:#fff}
        .p5-btn-ghost:hover{border-color:#fff;color:#fff}

        /* CTA image */
        .p5-cta-img{margin-top:32px;border-radius:14px;overflow:hidden;max-width:680px;margin-left:auto;margin-right:auto;border:1px solid rgba(255,255,255,.12)}
        .p5-cta-img img{width:100%;height:auto;display:block;border-radius:14px}

        @container p5 (max-width:820px){
          .p5-dt-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .p5-ring-row{justify-content:center;gap:28px}
          .p5-ind-grid{grid-template-columns:1fr}
          .p5-ho-row{flex-direction:column;align-items:center}
          .p5-arrow{transform:rotate(90deg)}
          .p5-ans-grid{grid-template-columns:1fr}
        }
        @container p5 (max-width:520px){
          .p5-dt-grid{grid-template-columns:1fr}
        }
      `}</style>
      <div className="p5-root">

        {/* DATA TYPES — dark */}
        <section className="p5-section p5-dark" id="data">
          <div className="p5-wrap">
            <div className="p5-sec-head">
              <span className="p5-eye">{r(props.dtEyebrow, "dtEyebrow")}</span>
              <h2 className="p5-h2">{r(props.dtTitle, "dtTitle")}</h2>
              <p className="p5-sub">{r(props.dtDesc, "dtDesc")}</p>
            </div>
            <div className="p5-dt-grid">
              {dt.map((d, i) => (
                <div key={i} className="p5-dt">
                  <div className="p5-dt-ic">{DT_IC[i]}</div>
                  <h4>{d.t}</h4>
                  <div className="p5-dt-ex">{d.ex}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="p5-section" id="proof">
          <div className="p5-wrap">
            <div className="p5-sec-head">
              <span className="p5-eye">{r(props.proofEyebrow, "proofEyebrow")}</span>
              <h2 className="p5-h2">{r(props.proofTitle, "proofTitle")}</h2>
            </div>
            <div className="p5-ring-row">
              <div className="p5-ring">
                <svg viewBox="0 0 108 108" width="108" height="108"><circle cx="54" cy="54" r="45" fill="none" stroke="#eeebfe" strokeWidth="9"/><text x="54" y="51" fontFamily="Inter,sans-serif" fontSize="20" fontWeight="800" fill="#0f1130" textAnchor="middle">0.12s</text><text x="54" y="68" fontFamily="Inter,sans-serif" fontSize="9" fill="#6b7280" textAnchor="middle">per page</text></svg>
                <div className="p5-ring-lbl">{proof[0].label}</div>
              </div>
              <div className="p5-ring">
                <svg viewBox="0 0 108 108" width="108" height="108"><circle cx="54" cy="54" r="45" fill="none" stroke="#eeebfe" strokeWidth="9"/><circle cx="54" cy="54" r="45" fill="none" stroke="#5b4fe9" strokeWidth="9" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="0" transform="rotate(-90 54 54)"/><text x="54" y="60" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="800" fill="#5b4fe9" textAnchor="middle">Exact</text></svg>
                <div className="p5-ring-lbl">{proof[1].label}</div>
              </div>
              <div className="p5-ring">
                <svg viewBox="0 0 108 108" width="108" height="108"><circle cx="54" cy="54" r="45" fill="none" stroke="#eeebfe" strokeWidth="9"/><circle cx="54" cy="54" r="45" fill="none" stroke="#5b4fe9" strokeWidth="9" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="6" transform="rotate(-90 54 54)"/><text x="54" y="60" fontFamily="Inter,sans-serif" fontSize="21" fontWeight="800" fill="#5b4fe9" textAnchor="middle">98%</text></svg>
                <div className="p5-ring-lbl">{proof[2].label}</div>
              </div>
              <div className="p5-ring">
                <svg viewBox="0 0 108 108" width="108" height="108"><circle cx="54" cy="54" r="45" fill="none" stroke="#eeebfe" strokeWidth="9"/><circle cx="54" cy="54" r="45" fill="none" stroke="#0ea5a4" strokeWidth="9" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="2.4" transform="rotate(-90 54 54)"/><text x="54" y="60" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="800" fill="#0ea5a4" textAnchor="middle">99.14%</text></svg>
                <div className="p5-ring-lbl">{proof[3].label}</div>
              </div>
            </div>
            <p className="p5-foot">{r(props.proofNote, "proofNote")}</p>
          </div>
        </section>

        {/* USE CASES */}
        <section className="p5-section" id="usecase">
          <div className="p5-wrap">
            <div className="p5-sec-head">
              <span className="p5-eye">{r(props.ucEyebrow, "ucEyebrow")}</span>
              <h2 className="p5-h2">{r(props.ucTitle, "ucTitle")}</h2>
              <p className="p5-sub">{r(props.ucDesc, "ucDesc")}</p>
            </div>
            <div className="p5-ind-grid">
              {uc.map((u, i) => (
                <div key={i} className="p5-ind">
                  <div className="p5-ind-t"><span className="p5-ind-n">{String(i + 1).padStart(2, "0")}</span><h4>{u.title}</h4></div>
                  <div className="p5-ind-lab">{u.lab}</div>
                  <div className="p5-ind-data">{u.data}</div>
                  {UC_FLOW(i)}
                  <div className="p5-ind-dep">{u.dep}</div>
                </div>
              ))}
            </div>
            <p className="p5-foot">{r(props.ucNote, "ucNote")}</p>
          </div>
        </section>

        {/* HANDOFF — dark */}
        <section className="p5-section p5-dark">
          <div className="p5-wrap">
            <div className="p5-handoff">
              <span className="p5-eye">{r(props.hoEyebrow, "hoEyebrow")}</span>
              <h2 className="p5-h2" style={{ fontSize: 26, marginTop: 10 }}>{r(props.hoTitle, "hoTitle")}</h2>
              <p className="p5-sub">{r(props.hoDesc, "hoDesc")}</p>
              <div className="p5-ho-row">
                <div className="p5-ho">
                  <div className="p5-ho-tag">{ho.cap.tag}</div>
                  <h4>{ho.cap.h}</h4>
                  <p>{ho.cap.p}</p>
                </div>
                <div className="p5-arrow" aria-hidden="true">{"→"}</div>
                <div className="p5-ho p5-exit">
                  <div className="p5-ho-tag">{ho.syn.tag}</div>
                  <h4>{ho.syn.h}</h4>
                  <p>{ho.syn.p}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWERS */}
        <section className="p5-section p5-ans-bg" id="answers">
          <div className="p5-wrap">
            <div className="p5-sec-head">
              <span className="p5-eye">{r(props.ansEyebrow, "ansEyebrow")}</span>
              <h2 className="p5-h2">{r(props.ansTitle, "ansTitle")}</h2>
            </div>
            <div className="p5-ans-grid">
              {ans.map((a, i) => (
                <div key={i}>
                  <h3>{a.q}</h3>
                  <p className="p5-sub">{renderAns(a.a)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="p5-section" id="faq">
          <div className="p5-wrap">
            <div className="p5-sec-head">
              <span className="p5-eye">{r(props.faqEyebrow, "faqEyebrow")}</span>
              <h2 className="p5-h2">{r(props.faqTitle, "faqTitle")}</h2>
            </div>
            <div className="p5-faq">
              {faq.map((f, i) => (
                <details key={i}>
                  <summary>{f.q}</summary>
                  <div className="p5-faq-ans">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p5-section" id="demo">
          <div className="p5-wrap">
            <div className="p5-final">
              <h2>{r(props.ctaTitle, "ctaTitle")}</h2>
              <p>{r(props.ctaDesc, "ctaDesc")}</p>
              <div className="p5-cta-row">
                <a className="p5-btn p5-btn-primary" href={ctaPrimaryHref}>{r(props.ctaPrimaryLabel, "ctaPrimaryLabel")}</a>
                <a className="p5-btn p5-btn-ghost" href={ctaGhost1Href}>{r(props.ctaGhost1Label, "ctaGhost1Label")}</a>
                <a className="p5-btn p5-btn-ghost" href={ctaGhost2Href}>{r(props.ctaGhost2Label, "ctaGhost2Label")}</a>
              </div>
              {ctaImage && (
                <div className="p5-cta-img">
                  <img src={ctaImage} alt="" loading="lazy"/>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(HomeV3Part5_DataProofCTA, {
  dtEyebrow:   { type: ControlType.String, title: "DT Eyebrow",     defaultValue: "What it's built for" },
  dtTitle:     { type: ControlType.String, title: "DT Title",       defaultValue: "Not just PII. The operational records your work actually runs on." },
  dtDesc:      { type: ControlType.String, title: "DT Description", defaultValue: "A generic PII detector looks for names and numbers. The data that stops your AI is logs, configs, topology and contracts. Capsule keeps each of these usable for AI while the real values stay inside.", displayTextArea: true },
  proofEyebrow:{ type: ControlType.String, title: "Proof Eyebrow",  defaultValue: "Proof" },
  proofTitle:  { type: ControlType.String, title: "Proof Title",    defaultValue: "Measured on real operational documents" },
  proofNote:   { type: ControlType.String, title: "Proof Note",     defaultValue: "Reconstruction is deterministic: substituted markers are rebuilt inside your environment through the internal mapping, not by inverting any differential-privacy step. Similarity measured on structured operational documents; figures vary by data type and workflow. We validate on your own payload during evaluation.", displayTextArea: true },
  ucEyebrow:   { type: ControlType.String, title: "UC Eyebrow",     defaultValue: "Where it runs" },
  ucTitle:     { type: ControlType.String, title: "UC Title",       defaultValue: "Built for operations putting AI on data that can't leave" },
  ucDesc:      { type: ControlType.String, title: "UC Description", defaultValue: "The same round trip across regulated operations: the real record stays inside, AI works on a protected version, and the answer comes back in the ticket or workflow.", displayTextArea: true },
  ucNote:      { type: ControlType.String, title: "UC Note",        defaultValue: "Deutsche Telekom and Claroty validate Capsule in critical-infrastructure and telecom-grade operational context — the hardest places for operational data to move at all.", displayTextArea: true },
  hoEyebrow:   { type: ControlType.String, title: "HO Eyebrow",     defaultValue: "Once the data path is open" },
  hoTitle:     { type: ControlType.String, title: "HO Title",       defaultValue: "Capsule opens the blocked path. Syntitan takes it to production." },
  hoDesc:      { type: ControlType.String, title: "HO Description", defaultValue: "Capsule gets blocked operational data into the AI workflow on-prem. Syntitan, the cloud operating layer, then evaluates, validates and operates that workflow in production. Capsule and Syntitan stay separate products for separate audiences; this is how they connect.", displayTextArea: true },
  ansEyebrow:  { type: ControlType.String, title: "ANS Eyebrow",    defaultValue: "Straight answers" },
  ansTitle:    { type: ControlType.String, title: "ANS Title",      defaultValue: "The questions people ask before they trust this" },
  faqEyebrow:  { type: ControlType.String, title: "FAQ Eyebrow",    defaultValue: "FAQ" },
  faqTitle:    { type: ControlType.String, title: "FAQ Title",      defaultValue: "Frequently asked questions" },
  ctaTitle:    { type: ControlType.String, title: "CTA Title",      defaultValue: "Bring one workflow that can't send its data raw." },
  ctaDesc:     { type: ControlType.String, title: "CTA Desc",       defaultValue: "A log, PDF, topology graph, ticket, runbook or config that can't go raw into an LLM. We'll show what stays inside, what the model works on, and how the result comes back usable.", displayTextArea: true },
  ctaPrimaryLabel: { type: ControlType.String, title: "CTA Primary", defaultValue: "Request a Demo" },
  ctaPrimaryHref:  { type: ControlType.String, title: "CTA Href",    defaultValue: "/request-a-demo" },
  ctaGhost1Label:  { type: ControlType.String, title: "CTA Ghost 1", defaultValue: "See how it works" },
  ctaGhost1Href:   { type: ControlType.String, title: "CTA Href 1",  defaultValue: "#architecture" },
  ctaGhost2Label:  { type: ControlType.String, title: "CTA Ghost 2", defaultValue: "View Pricing" },
  ctaGhost2Href:   { type: ControlType.String, title: "CTA Href 2",  defaultValue: "/pricing" },
  ctaImage:        { type: ControlType.Image, title: "CTA Image" },
  locale:      { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
})
