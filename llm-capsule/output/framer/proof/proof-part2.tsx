// Proof Page — Part 2: Operational Evidence Section
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"
import { useState } from "react"

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    sectionH2: "Operational case",
    sectionH2Accent: "records",
    sectionDesc: "Real workflows that were blocked by data exposure, then unblocked with LLM Capsule. Each record shows what changed, the protection mechanism, and how it can be reproduced for audit. Filter by capability; click any record to expand.",
    filterAll: "All Evidence",
    filterSecure: "Secure LLM Usage",
    filterData: "Data Usability",
    filterStable: "Execution Stability",
    countTemplate: "6 records · filtered: all",

    // Card 1
    c1Industry: "Insurance",
    c1Title: "LLM-assisted claims processing — sensitive data protection",
    c1Metric1Val: "Exposed",
    c1Metric1Label: "Sensitive data in prompts (before)",
    c1Metric2Val: "Substituted",
    c1Metric2Label: "Sensitive fields (after)",
    c1Metric3Val: "Preserved",
    c1Metric3Label: "Output usability",
    c1Before: "Claims documents containing policyholder names, ID numbers, and medical details were sent directly to an external LLM API. The compliance team blocked the workflow.",
    c1BeforeStrong: "policyholder names, ID numbers, and medical details",
    c1After: "LLM Capsule substituted sensitive fields with restorable stand-ins before submission. Outputs returned and were reconstructed locally for downstream system use.",
    c1Changed: "The LLM Capsule layer was inserted into the workflow. Substitution covered names, IDs, dates, and medical field patterns. Sensitive raw values stayed in the local token vault.",
    c1Reproduce: "Each substitution run is logged and bound to a fixed release state, so the workflow is reproducible with the same substitution logic for audit and regression verification.",
    c1Bullet1: "Detection — names, IDs, dates, medical field patterns",
    c1Bullet1Strong: "names, IDs, dates, medical field patterns",
    c1Bullet2: "Substitution — restorable stand-ins before submission",
    c1Bullet3: "Capsule transmission — only the protected capsule reaches the LLM",
    c1Bullet4: "Restoration — outputs reconstructed locally for downstream systems",
    c1Boundary: "↑ Trust boundary — raw policyholder & medical data never crosses",
    c1Artifacts: "State Card|Substitution Log|Token Vault Record|Re-run Record",

    // Card 2
    c2Industry: "Public Sector / Defense",
    c2Title: "Air-gapped LLM workflow — classified context protection",
    c2Metric1Val: "Blocked",
    c2Metric1Label: "External LLM (before)",
    c2Metric2Val: "Enabled",
    c2Metric2Label: "External LLM (after)",
    c2Metric3Val: "0%",
    c2Metric3Label: "Raw data egress",
    c2Metric4Val: "N2SF",
    c2Metric4Label: "Guideline aligned",
    c2Before: "In a network-separated (air-gapped) environment, external LLMs could not be used at all, and concern over classified-context exposure blocked AI adoption entirely.",
    c2BeforeStrong: "classified-context exposure",
    c2After: "LLM Capsule encapsulates the sensitive context locally — only the protected capsule, not the original, is processed by the external LLM, and the result is rehydrated locally inside the boundary. The raw classified context never crosses the boundary, aligned with N2SF guidelines.",
    c2Changed: "Sensitive context is substituted with local stand-ins before processing and reconstructed locally after — no original data leaves the enclave.",
    c2Reproduce: "Every encapsulation/restoration event is logged locally, so any processed request can be reconstructed and inspected within the boundary.",
    c2Bullet1: "Sensitive context — classified operation detail",
    c2Bullet1Strong: "classified operation detail",
    c2Bullet2: "Encapsulation — performed locally inside the enclave",
    c2Bullet3: "Execution — capsule processed, 0% raw data egress",
    c2Bullet4: "Restoration — rehydrated locally; N2SF guideline aligned",
    c2Boundary: "↑ Trust boundary — nothing crosses the air gap; raw context stays inside",
    c2Artifacts: "Local Token Vault|Audit Log|N2SF Alignment",

    // Card 3
    c3Industry: "Enterprise / Knowledge Work",
    c3Title: "Internal document Q&A — PII-safe use of external LLMs",
    c3Metric1Val: "Blocked",
    c3Metric1Label: "LLM on internal docs (before)",
    c3Metric2Val: "Enabled",
    c3Metric2Label: "Secure LLM use (after)",
    c3Metric3Val: "Local",
    c3Metric3Label: "PII detect & restore",
    c3Before: "Internal documents — contracts, HR records, customer files holding personal and confidential information — could not be sent to ChatGPT, Claude, or Gemini for summarization or search. The security team blocked it.",
    c3BeforeStrong: "personal and confidential information",
    c3After: "LLM Capsule detects and substitutes personal and confidential fields locally before the request reaches an external LLM, then restores the original values in the response — so staff can summarize and query internal documents without raw data leaving the organization.",
    c3Changed: "The LLM Capsule gateway was placed between internal tools and the external LLM. Detection covered names, contacts, IDs, and account/contract identifiers; raw values stayed in the local token vault.",
    c3Reproduce: "Each request's substitution is logged and bound to a fixed release state, so a given document-Q&A run can be reconstructed for audit.",
    c3Bullet1: "Detection — names, contacts, IDs, account/contract identifiers",
    c3Bullet1Strong: "names, contacts, IDs, account/contract identifiers",
    c3Bullet2: "Substitution — restorable stand-ins before the request leaves",
    c3Bullet3: "Gateway — only the protected request reaches ChatGPT / Claude / Gemini",
    c3Bullet4: "Restoration — original values rehydrated locally in the response",
    c3Boundary: "↑ Trust boundary — raw internal documents never reach the external LLM vendor",
    c3Artifacts: "Substitution Log|Token Vault Record|Audit Log",

    // Card 4
    c4Industry: "Healthcare",
    c4Title: "Clinical AI validation — restricted patient data replacement",
    c4Metric1Val: "Blocked",
    c4Metric1Label: "Validation status (before)",
    c4Metric2Val: "Unblocked",
    c4Metric2Label: "Validation status (after)",
    c4Metric3Val: "DP-safe",
    c4Metric3Label: "Privacy method",
    c4Before: "Real patient records required for model validation could not be accessed due to regulatory constraints. The validation pipeline stalled.",
    c4BeforeStrong: "could not be accessed",
    c4After: "Differential-privacy-safe (DP-safe) replacement records matching real distribution characteristics — without containing real identifiable information — unblocked the validation pipeline.",
    c4Changed: "Non-accessible real records were replaced with DP-safe equivalents. Data distribution preserved, compliance review passed, validation pipeline resumed without modification.",
    c4Reproduce: "The replacement dataset is versioned and bound to a fixed data state, so the validation run is reproducible with the same distribution on demand. Audit trail maintained throughout.",
    c4Bullet1: "Restricted input — real patient records (regulatory block)",
    c4Bullet1Strong: "real patient records",
    c4Bullet2: "Replacement — DP-safe, distribution-matched equivalents",
    c4Bullet3: "Privacy — no real identifiable information in the dataset",
    c4Bullet4: "Outcome — validation unblocked; compliance review passed",
    c4Boundary: "↑ Trust boundary — real patient identifiers never enter the pipeline",
    c4Artifacts: "State Card|DP Audit Log|Dataset Version",

    // Card 5
    c5Industry: "Industrial / OT Security",
    c5Title: "OT network data — AI-ready transformation for threat analysis",
    c5Metric1Val: "Restricted",
    c5Metric1Label: "Raw OT data (before)",
    c5Metric2Val: "Enabled",
    c5Metric2Label: "AI threat analysis (after)",
    c5Metric3Val: "Structure-preserving",
    c5Metric3Label: "De-identification",
    c5Before: "OT/ICS network data carried sensitive operational details, so it could not be sent to an external AI for automated threat analysis.",
    c5BeforeStrong: "sensitive operational details",
    c5After: "Structure-preserving de-identification lets an AI agent analyze the network data and answer threat questions — sensitive values replaced with stand-ins while relationships are preserved. (Integrated with a global OT security platform's detection solution.)",
    c5Changed: "Network-data sensitive fields are substituted while topology and relationships are kept intact, so the agent can reason over realistic context.",
    c5Reproduce: "The de-identified dataset and the agent's analysis are bound to a fixed data state, so the same analysis can be re-run and verified.",
    c5Bullet1: "Restricted input — OT/ICS network data with operational detail",
    c5Bullet1Strong: "OT/ICS network data with operational detail",
    c5Bullet2: "De-identification — structure-preserving (topology kept intact)",
    c5Bullet3: "Analysis — AI agent reasons over realistic, safe context",
    c5Bullet4: "Integration — works with a global OT security detection platform",
    c5Boundary: "↑ Trust boundary — sensitive operational values never leave de-identified",
    c5Artifacts: "De-identified Dataset|Agent Analysis Log|Structure Map",

    // Card 6
    c6Industry: "Public Sector / Data Center",
    c6Title: "Aggregate-data release — automated de-identification & audit trail",
    c6Metric1Val: "Manual",
    c6Metric1Label: "Release screening (before)",
    c6Metric2Val: "Automated",
    c6Metric2Label: "Screening (after)",
    c6Metric3Val: "0.94",
    c6Metric3Label: "PII detection F1",
    c6Metric4Val: "Multi-agent",
    c6Metric4Label: "Detect · trace · de-identify",
    c6Before: "Users exporting sensitive aggregate statistics required manual, per-desk de-identification and release review — inconsistent and hard to audit.",
    c6BeforeStrong: "manual, per-desk de-identification",
    c6After: "A per-desk de-identification module plus a multi-agent pipeline detects, traces, and de-identifies personal information in aggregate data, automating and standardizing the release-review process.",
    c6Changed: "Release State fingerprints the data before and after de-identification, so which records were transformed — and how — is traceable for audit.",
    c6Reproduce: "A prior release can be replayed against its bound Release State, reproducing the screening process for regulatory inspection.",
    c6Bullet1: "Before — manual, per-desk de-identification (hard to audit)",
    c6Bullet1Strong: "manual, per-desk de-identification",
    c6Bullet2: "Detection — multi-agent PII detection (F1 0.94)",
    c6Bullet3: "Pipeline — detect, trace, de-identify, standardize",
    c6Bullet4: "Audit — release state fingerprinted before & after",
    c6Boundary: "↑ Trust boundary — PII removed and traced before any release",
    c6Artifacts: "De-identification Report|Release Audit Log|Detection Trace|State Card",
  },
  ko: {
    sectionH2: "운영 사례",
    sectionH2Accent: "기록",
    sectionDesc: "데이터 노출로 차단되었다가 LLM Capsule로 재개된 실제 워크플로우입니다. 각 기록에는 변경된 내용, 보호 메커니즘, 감사 및 재현 방법이 포함되어 있습니다. 기능별로 필터링하고 카드를 클릭하면 상세 내용을 확인할 수 있습니다.",
    filterAll: "전체 증거",
    filterSecure: "안전한 LLM 사용",
    filterData: "데이터 가용성",
    filterStable: "실행 안정성",
    countTemplate: "6건 · 필터: 전체",

    // Card 1
    c1Industry: "보험",
    c1Title: "LLM 보조 보험금 청구 처리 — 민감 데이터 보호",
    c1Metric1Val: "노출됨",
    c1Metric1Label: "프롬프트 내 민감 데이터 (이전)",
    c1Metric2Val: "대체됨",
    c1Metric2Label: "민감 필드 (이후)",
    c1Metric3Val: "유지됨",
    c1Metric3Label: "출력 가용성",
    c1Before: "보험 계약자 이름, ID 번호, 의료 정보가 포함된 청구 문서가 외부 LLM API로 직접 전송되었습니다. 컴플라이언스 팀이 해당 워크플로우를 차단했습니다.",
    c1BeforeStrong: "보험 계약자 이름, ID 번호, 의료 정보",
    c1After: "LLM Capsule이 제출 전 민감 필드를 복원 가능한 대체값으로 치환했습니다. 출력값이 반환되어 로컬에서 복원된 후 하위 시스템에서 활용되었습니다.",
    c1Changed: "LLM Capsule 레이어가 워크플로우에 삽입되었습니다. 치환 대상에는 이름, ID, 날짜, 의료 필드 패턴이 포함됩니다. 민감 원본값은 로컬 토큰 볼트에 보관됩니다.",
    c1Reproduce: "각 치환 실행은 고정된 릴리스 상태에 기록 및 바인딩되므로, 동일한 치환 로직으로 감사 및 회귀 검증을 위한 재현이 가능합니다.",
    c1Bullet1: "탐지 — 이름, ID, 날짜, 의료 필드 패턴",
    c1Bullet1Strong: "이름, ID, 날짜, 의료 필드 패턴",
    c1Bullet2: "치환 — 제출 전 복원 가능한 대체값 적용",
    c1Bullet3: "캡슐 전송 — 보호된 캡슐만 LLM에 도달",
    c1Bullet4: "복원 — 출력값을 로컬에서 재구성하여 하위 시스템에 전달",
    c1Boundary: "↑ 신뢰 경계 — 보험 계약자 및 의료 원본 데이터는 경계를 넘지 않음",
    c1Artifacts: "State Card|Substitution Log|Token Vault Record|Re-run Record",

    // Card 2
    c2Industry: "공공/국방",
    c2Title: "에어갭 LLM 워크플로우 — 기밀 컨텍스트 보호",
    c2Metric1Val: "차단됨",
    c2Metric1Label: "외부 LLM (이전)",
    c2Metric2Val: "사용 가능",
    c2Metric2Label: "외부 LLM (이후)",
    c2Metric3Val: "0%",
    c2Metric3Label: "원본 데이터 유출",
    c2Metric4Val: "N2SF",
    c2Metric4Label: "가이드라인 준수",
    c2Before: "네트워크 분리(에어갭) 환경에서는 외부 LLM을 전혀 사용할 수 없었으며, 기밀 컨텍스트 노출에 대한 우려로 AI 도입 자체가 전면 차단되었습니다.",
    c2BeforeStrong: "기밀 컨텍스트 노출",
    c2After: "LLM Capsule이 민감 컨텍스트를 로컬에서 캡슐화합니다. 원본이 아닌 보호된 캡슐만 외부 LLM에서 처리되며, 결과는 경계 내부에서 로컬로 복원됩니다. 분류된 원본 컨텍스트는 경계를 넘지 않으며 N2SF 가이드라인을 준수합니다.",
    c2Changed: "민감 컨텍스트는 처리 전 로컬 대체값으로 치환되고, 처리 후 로컬에서 재구성됩니다. 원본 데이터는 엔클레이브를 벗어나지 않습니다.",
    c2Reproduce: "모든 캡슐화/복원 이벤트는 로컬에 기록되므로, 처리된 모든 요청을 경계 내에서 재구성 및 검사할 수 있습니다.",
    c2Bullet1: "민감 컨텍스트 — 기밀 작전 세부 정보",
    c2Bullet1Strong: "기밀 작전 세부 정보",
    c2Bullet2: "캡슐화 — 엔클레이브 내부에서 로컬 실행",
    c2Bullet3: "실행 — 캡슐 처리, 원본 데이터 유출 0%",
    c2Bullet4: "복원 — 로컬에서 재수화; N2SF 가이드라인 준수",
    c2Boundary: "↑ 신뢰 경계 — 에어갭을 통한 데이터 이동 없음; 원본 컨텍스트는 내부에 유지",
    c2Artifacts: "Local Token Vault|Audit Log|N2SF Alignment",

    // Card 3
    c3Industry: "엔터프라이즈 / 지식 업무",
    c3Title: "내부 문서 Q&A — PII 안전한 외부 LLM 사용",
    c3Metric1Val: "차단됨",
    c3Metric1Label: "내부 문서 LLM 사용 (이전)",
    c3Metric2Val: "사용 가능",
    c3Metric2Label: "안전한 LLM 사용 (이후)",
    c3Metric3Val: "로컬",
    c3Metric3Label: "PII 탐지 및 복원",
    c3Before: "계약서, 인사 기록, 개인정보 및 기밀 정보가 담긴 고객 파일 등 내부 문서를 요약이나 검색을 위해 ChatGPT, Claude, Gemini로 전송할 수 없었습니다. 보안 팀이 이를 차단했습니다.",
    c3BeforeStrong: "개인정보 및 기밀 정보",
    c3After: "LLM Capsule이 요청이 외부 LLM에 도달하기 전에 개인정보 및 기밀 필드를 로컬에서 탐지하고 치환한 후, 응답에서 원본값을 복원합니다. 이를 통해 직원들이 원본 데이터가 조직 외부로 나가지 않고도 내부 문서를 요약하고 검색할 수 있습니다.",
    c3Changed: "LLM Capsule 게이트웨이가 내부 도구와 외부 LLM 사이에 배치되었습니다. 탐지 범위는 이름, 연락처, ID, 계정/계약 식별자를 포함하며, 원본값은 로컬 토큰 볼트에 보관됩니다.",
    c3Reproduce: "각 요청의 치환 내역은 고정된 릴리스 상태에 기록 및 바인딩되므로, 특정 문서 Q&A 실행을 감사용으로 재구성할 수 있습니다.",
    c3Bullet1: "탐지 — 이름, 연락처, ID, 계정/계약 식별자",
    c3Bullet1Strong: "이름, 연락처, ID, 계정/계약 식별자",
    c3Bullet2: "치환 — 요청 전송 전 복원 가능한 대체값 적용",
    c3Bullet3: "게이트웨이 — 보호된 요청만 ChatGPT / Claude / Gemini에 도달",
    c3Bullet4: "복원 — 응답에서 원본값을 로컬로 재수화",
    c3Boundary: "↑ 신뢰 경계 — 내부 문서 원본은 외부 LLM 공급업체에 도달하지 않음",
    c3Artifacts: "Substitution Log|Token Vault Record|Audit Log",

    // Card 4
    c4Industry: "의료",
    c4Title: "임상 AI 검증 — 제한된 환자 데이터 대체",
    c4Metric1Val: "차단됨",
    c4Metric1Label: "검증 상태 (이전)",
    c4Metric2Val: "재개됨",
    c4Metric2Label: "검증 상태 (이후)",
    c4Metric3Val: "DP-safe",
    c4Metric3Label: "프라이버시 방법",
    c4Before: "모델 검증에 필요한 실제 환자 기록에 규제상 제약으로 접근할 수 없었습니다. 검증 파이프라인이 중단되었습니다.",
    c4BeforeStrong: "접근할 수 없었습니다",
    c4After: "실제 분포 특성과 일치하는 차등 프라이버시 안전(DP-safe) 대체 기록이 — 실제 식별 가능한 정보 없이 — 검증 파이프라인의 차단을 해제했습니다.",
    c4Changed: "접근 불가한 실제 기록이 DP-safe 동등 데이터로 대체되었습니다. 데이터 분포가 유지되고, 컴플라이언스 검토를 통과했으며, 검증 파이프라인이 수정 없이 재개되었습니다.",
    c4Reproduce: "대체 데이터셋은 버전 관리되어 고정된 데이터 상태에 바인딩되므로, 동일한 분포로 원하는 시점에 검증 실행을 재현할 수 있습니다. 감사 추적은 전체 과정에서 유지됩니다.",
    c4Bullet1: "제한된 입력 — 실제 환자 기록 (규제 차단)",
    c4Bullet1Strong: "실제 환자 기록",
    c4Bullet2: "대체 — DP-safe, 분포 일치 동등 데이터",
    c4Bullet3: "프라이버시 — 데이터셋에 실제 식별 가능한 정보 없음",
    c4Bullet4: "결과 — 검증 재개; 컴플라이언스 검토 통과",
    c4Boundary: "↑ 신뢰 경계 — 실제 환자 식별자는 파이프라인에 진입하지 않음",
    c4Artifacts: "State Card|DP Audit Log|Dataset Version",

    // Card 5
    c5Industry: "산업 / OT 보안",
    c5Title: "OT 네트워크 데이터 — 위협 분석을 위한 AI 활용 가능 변환",
    c5Metric1Val: "제한됨",
    c5Metric1Label: "원본 OT 데이터 (이전)",
    c5Metric2Val: "사용 가능",
    c5Metric2Label: "AI 위협 분석 (이후)",
    c5Metric3Val: "구조 보존",
    c5Metric3Label: "비식별화",
    c5Before: "OT/ICS 네트워크 데이터에 민감한 운영 세부 정보가 포함되어 있어, 자동화된 위협 분석을 위해 외부 AI로 전송할 수 없었습니다.",
    c5BeforeStrong: "민감한 운영 세부 정보",
    c5After: "구조 보존 비식별화를 통해 AI 에이전트가 네트워크 데이터를 분석하고 위협 질의에 응답할 수 있습니다. 관계를 유지하면서 민감한 값은 대체값으로 교체됩니다. (글로벌 OT 보안 플랫폼의 탐지 솔루션과 통합됨.)",
    c5Changed: "네트워크 데이터의 민감 필드가 치환되는 동안 토폴로지와 관계는 그대로 유지되어, 에이전트가 현실적인 컨텍스트를 기반으로 추론할 수 있습니다.",
    c5Reproduce: "비식별화된 데이터셋과 에이전트의 분석 결과가 고정된 데이터 상태에 바인딩되므로, 동일한 분석을 재실행하고 검증할 수 있습니다.",
    c5Bullet1: "제한된 입력 — 운영 세부 정보가 포함된 OT/ICS 네트워크 데이터",
    c5Bullet1Strong: "운영 세부 정보가 포함된 OT/ICS 네트워크 데이터",
    c5Bullet2: "비식별화 — 구조 보존 (토폴로지 유지)",
    c5Bullet3: "분석 — AI 에이전트가 현실적이고 안전한 컨텍스트에서 추론",
    c5Bullet4: "통합 — 글로벌 OT 보안 탐지 플랫폼과 연동",
    c5Boundary: "↑ 신뢰 경계 — 민감한 운영 값은 비식별화된 채로 외부로 나가지 않음",
    c5Artifacts: "De-identified Dataset|Agent Analysis Log|Structure Map",

    // Card 6
    c6Industry: "공공 / 데이터 센터",
    c6Title: "집계 데이터 공개 — 자동화된 비식별화 및 감사 추적",
    c6Metric1Val: "수동",
    c6Metric1Label: "공개 심사 (이전)",
    c6Metric2Val: "자동화됨",
    c6Metric2Label: "심사 (이후)",
    c6Metric3Val: "0.94",
    c6Metric3Label: "PII 탐지 F1",
    c6Metric4Val: "멀티 에이전트",
    c6Metric4Label: "탐지 · 추적 · 비식별화",
    c6Before: "민감한 집계 통계를 내보내는 사용자는 담당자별 수동 비식별화 및 공개 검토가 필요했습니다. 일관성이 없고 감사하기 어려웠습니다.",
    c6BeforeStrong: "담당자별 수동 비식별화",
    c6After: "담당자별 비식별화 모듈과 멀티 에이전트 파이프라인이 집계 데이터에서 개인정보를 탐지, 추적, 비식별화하여 공개 검토 프로세스를 자동화하고 표준화합니다.",
    c6Changed: "Release State가 비식별화 전후의 데이터에 핑거프린트를 남기므로, 어떤 기록이 어떻게 변환되었는지 감사를 위해 추적할 수 있습니다.",
    c6Reproduce: "이전 공개 이력을 바인딩된 Release State에 대해 재실행하여 규제 검사를 위한 심사 프로세스를 재현할 수 있습니다.",
    c6Bullet1: "이전 — 담당자별 수동 비식별화 (감사 어려움)",
    c6Bullet1Strong: "담당자별 수동 비식별화",
    c6Bullet2: "탐지 — 멀티 에이전트 PII 탐지 (F1 0.94)",
    c6Bullet3: "파이프라인 — 탐지, 추적, 비식별화, 표준화",
    c6Bullet4: "감사 — 공개 전후 릴리스 상태 핑거프린트",
    c6Boundary: "↑ 신뢰 경계 — PII는 모든 공개 전에 제거되고 추적됨",
    c6Artifacts: "De-identification Report|Release Audit Log|Detection Trace|State Card",
  },
  de: {
    sectionH2: "Operative Fallnachweise",
    sectionH2Accent: "aus der Praxis",
    sectionDesc: "Sechs dokumentierte Workflows aus regulierten Branchen — blockiert durch Datenschutzrisiken, wieder freigegeben durch LLM Capsule. Jeder Nachweis zeigt den Ausgangszustand, die eingesetzte Schutzmethode und wie der Prozess für Audits reproduziert werden kann. Nach Kategorie filtern, Karte anklicken für Details.",
    filterAll: "Alle Nachweise",
    filterSecure: "Sicherer LLM-Einsatz",
    filterData: "Datenverfügbarkeit",
    filterStable: "Prozessstabilität",
    countTemplate: "6 Nachweise · Gefiltert: alle",

    // Card 1
    c1Industry: "Versicherung",
    c1Title: "LLM-gestützte Schadenbearbeitung — Schutz sensibler Versicherungsdaten",
    c1Metric1Val: "Exponiert",
    c1Metric1Label: "Sensible Daten in Prompts (vorher)",
    c1Metric2Val: "Substituiert",
    c1Metric2Label: "Sensible Felder (nachher)",
    c1Metric3Val: "Erhalten",
    c1Metric3Label: "Output-Nutzbarkeit",
    c1Before: "Schadendokumente mit Versicherungsnehmerdaten, Ausweisnummern und medizinischen Angaben wurden direkt an eine externe LLM-API übermittelt. Das Compliance-Team sperrte den gesamten Workflow.",
    c1BeforeStrong: "Versicherungsnehmerdaten, Ausweisnummern und medizinischen Angaben",
    c1After: "LLM Capsule ersetzt sensible Felder vor der Übermittlung durch wiederherstellbare Platzhalter. Die Ausgaben werden zurückgegeben und lokal rekonstruiert — für die Weiterverarbeitung in nachgelagerten Systemen.",
    c1Changed: "Die LLM Capsule-Schicht wurde in den Workflow integriert. Die Substitution erfasst Namen, IDs, Datumsangaben und medizinische Feldmuster. Sensible Rohdaten verbleiben im lokalen Token Vault.",
    c1Reproduce: "Jeder Substitutionsdurchlauf wird protokolliert und an einen festen Release-Zustand gebunden — der Workflow ist mit identischer Substitutionslogik für Audit und Regressionsprüfung reproduzierbar.",
    c1Bullet1: "Erkennung — Namen, IDs, Datumsangaben, medizinische Feldmuster",
    c1Bullet1Strong: "Namen, IDs, Datumsangaben, medizinische Feldmuster",
    c1Bullet2: "Substitution — wiederherstellbare Platzhalter vor der Übermittlung",
    c1Bullet3: "Kapselübertragung — nur die geschützte Kapsel erreicht das LLM",
    c1Bullet4: "Wiederherstellung — Ausgaben lokal rekonstruiert für nachgelagerte Systeme",
    c1Boundary: "↑ Vertrauensgrenze — Rohdaten von Versicherungsnehmern und Patienten überschreiten diese nie",
    c1Artifacts: "State Card|Substitution Log|Token Vault Record|Re-run Record",

    // Card 2
    c2Industry: "Öffentlicher Sektor / Verteidigung",
    c2Title: "Air-gapped LLM-Betrieb — Schutz klassifizierter Kontextdaten",
    c2Metric1Val: "Gesperrt",
    c2Metric1Label: "Externer LLM-Zugriff (vorher)",
    c2Metric2Val: "Freigegeben",
    c2Metric2Label: "Externer LLM-Zugriff (nachher)",
    c2Metric3Val: "0%",
    c2Metric3Label: "Rohdaten-Abfluss",
    c2Metric4Val: "N2SF",
    c2Metric4Label: "Richtlinienkonform",
    c2Before: "In einer netzwerkisolierten (Air-gapped) Umgebung konnten externe LLMs nicht eingesetzt werden. Die Sorge vor dem Abfluss klassifizierter Kontextdaten verhinderte jegliche KI-Nutzung.",
    c2BeforeStrong: "Abfluss klassifizierter Kontextdaten",
    c2After: "LLM Capsule kapselt den sensitiven Kontext lokal — nur die geschützte Kapsel, nicht das Original, wird vom externen LLM verarbeitet. Das Ergebnis wird lokal innerhalb der Sicherheitsgrenze rehydriert. Klassifizierte Rohdaten verlassen die Grenze nie; das Verfahren ist N2SF-konform.",
    c2Changed: "Sensitiver Kontext wird vor der Verarbeitung durch lokale Platzhalter substituiert und danach lokal rekonstruiert — keine Originaldaten verlassen das Enclave.",
    c2Reproduce: "Jedes Kapselierungs- und Wiederherstellungsereignis wird lokal protokolliert, sodass jede verarbeitete Anfrage innerhalb der Grenze rekonstruiert und überprüft werden kann.",
    c2Bullet1: "Sensitiver Kontext — klassifizierte Einsatzdetails",
    c2Bullet1Strong: "klassifizierte Einsatzdetails",
    c2Bullet2: "Kapselung — lokal innerhalb des Enclaves ausgeführt",
    c2Bullet3: "Ausführung — Kapsel verarbeitet, 0 % Rohdaten-Abfluss",
    c2Bullet4: "Wiederherstellung — lokal rehydriert; N2SF-Richtlinie eingehalten",
    c2Boundary: "↑ Vertrauensgrenze — kein Datentransfer über den Air Gap; Rohkontext bleibt im Enclave",
    c2Artifacts: "Local Token Vault|Audit Log|N2SF Alignment",

    // Card 3
    c3Industry: "Enterprise / Wissensarbeit",
    c3Title: "Interne Dokumenten-Q&A — datenschutzkonformer Einsatz externer LLMs",
    c3Metric1Val: "Gesperrt",
    c3Metric1Label: "LLM auf internen Docs (vorher)",
    c3Metric2Val: "Freigegeben",
    c3Metric2Label: "Sicherer LLM-Einsatz (nachher)",
    c3Metric3Val: "Lokal",
    c3Metric3Label: "PII-Erkennung & Wiederherstellung",
    c3Before: "Interne Unterlagen — Verträge, Personaldaten, Kundendateien mit personenbezogenen und vertraulichen Informationen — durften nicht für Zusammenfassungen oder Suchen an ChatGPT, Claude oder Gemini übermittelt werden. Das Sicherheitsteam sperrte den Vorgang.",
    c3BeforeStrong: "personenbezogenen und vertraulichen Informationen",
    c3After: "LLM Capsule erkennt und substituiert personenbezogene und vertrauliche Felder lokal, bevor die Anfrage das externe LLM erreicht, und stellt die Originalwerte in der Antwort wieder her. Mitarbeitende können interne Dokumente zusammenfassen und abfragen, ohne dass Rohdaten das Unternehmen verlassen — DSGVO-konform.",
    c3Changed: "Das LLM Capsule-Gateway wurde zwischen interne Werkzeuge und das externe LLM geschaltet. Die Erkennung umfasst Namen, Kontakte, IDs sowie Konto- und Vertragskennnummern; Rohdaten verbleiben im lokalen Token Vault.",
    c3Reproduce: "Die Substitution jeder Anfrage wird protokolliert und an einen festen Release-Zustand gebunden, sodass ein bestimmter Dokumenten-Q&A-Lauf für ein Audit rekonstruiert werden kann.",
    c3Bullet1: "Erkennung — Namen, Kontakte, IDs, Konto-/Vertragskennungen",
    c3Bullet1Strong: "Namen, Kontakte, IDs, Konto-/Vertragskennungen",
    c3Bullet2: "Substitution — wiederherstellbare Platzhalter vor dem Versand der Anfrage",
    c3Bullet3: "Gateway — nur die geschützte Anfrage erreicht ChatGPT / Claude / Gemini",
    c3Bullet4: "Wiederherstellung — Originalwerte lokal in der Antwort rehydriert",
    c3Boundary: "↑ Vertrauensgrenze — interne Rohdokumente erreichen den externen LLM-Anbieter nie",
    c3Artifacts: "Substitution Log|Token Vault Record|Audit Log",

    // Card 4
    c4Industry: "Gesundheitswesen",
    c4Title: "Klinische KI-Validierung — Ersatz gesperrter Patientendaten",
    c4Metric1Val: "Gesperrt",
    c4Metric1Label: "Validierungsstatus (vorher)",
    c4Metric2Val: "Freigegeben",
    c4Metric2Label: "Validierungsstatus (nachher)",
    c4Metric3Val: "DP-safe",
    c4Metric3Label: "Datenschutzmethode",
    c4Before: "Für die Modellvalidierung benötigte Patientenakten waren aufgrund regulatorischer Anforderungen nicht zugänglich. Die Validierungs-Pipeline kam zum Stillstand.",
    c4BeforeStrong: "nicht zugänglich",
    c4After: "Differential-Privacy-konforme (DP-safe) Ersatzdaten, die die reale Verteilungscharakteristik widerspiegeln — ohne echte identifizierbare Informationen zu enthalten — haben die Validierungs-Pipeline wieder freigegeben.",
    c4Changed: "Nicht zugängliche Originaldaten wurden durch DP-safe-Äquivalente ersetzt. Die Datenverteilung blieb erhalten, die Compliance-Prüfung wurde bestanden, die Validierungs-Pipeline lief ohne Modifikation weiter.",
    c4Reproduce: "Der Ersatzdatensatz ist versioniert und an einen festen Datenzustand gebunden — der Validierungslauf ist mit identischer Verteilung jederzeit reproduzierbar. Der Audit-Trail bleibt durchgängig erhalten.",
    c4Bullet1: "Gesperrter Input — echte Patientenakten (regulatorische Sperre)",
    c4Bullet1Strong: "echte Patientenakten",
    c4Bullet2: "Ersatz — DP-safe, verteilungsangepasste Äquivalente",
    c4Bullet3: "Datenschutz — keine echten identifizierbaren Informationen im Datensatz",
    c4Bullet4: "Ergebnis — Validierung freigegeben; Compliance-Prüfung bestanden",
    c4Boundary: "↑ Vertrauensgrenze — echte Patientenkennungen gelangen nie in die Pipeline",
    c4Artifacts: "State Card|DP Audit Log|Dataset Version",

    // Card 5
    c5Industry: "Industrie / OT-Sicherheit",
    c5Title: "OT-Netzwerkdaten — KI-taugliche Transformation für Bedrohungsanalyse",
    c5Metric1Val: "Gesperrt",
    c5Metric1Label: "OT-Rohdaten (vorher)",
    c5Metric2Val: "Freigegeben",
    c5Metric2Label: "KI-Bedrohungsanalyse (nachher)",
    c5Metric3Val: "Strukturerhaltend",
    c5Metric3Label: "De-Identifizierung",
    c5Before: "OT/ICS-Netzwerkdaten enthielten sensible Betriebsinformationen und konnten daher nicht für eine automatisierte Bedrohungsanalyse an ein externes KI-System übermittelt werden.",
    c5BeforeStrong: "sensible Betriebsinformationen",
    c5After: "Strukturerhaltende De-Identifizierung ermöglicht es einem KI-Agenten, die Netzwerkdaten zu analysieren und Bedrohungsfragen zu beantworten — sensible Werte werden durch Platzhalter ersetzt, während Beziehungen erhalten bleiben. (Integration in die Erkennungslösung einer globalen OT-Sicherheitsplattform.)",
    c5Changed: "Sensible Felder der Netzwerkdaten werden substituiert, während Topologie und Beziehungen intakt bleiben — der Agent kann auf einem realistischen Kontext arbeiten.",
    c5Reproduce: "Der de-identifizierte Datensatz und die Agentenanalyse sind an einen festen Datenzustand gebunden, sodass dieselbe Analyse erneut ausgeführt und verifiziert werden kann.",
    c5Bullet1: "Gesperrter Input — OT/ICS-Netzwerkdaten mit Betriebsdetails",
    c5Bullet1Strong: "OT/ICS-Netzwerkdaten mit Betriebsdetails",
    c5Bullet2: "De-Identifizierung — strukturerhaltend (Topologie bleibt intakt)",
    c5Bullet3: "Analyse — KI-Agent arbeitet auf realistischem, sicherem Kontext",
    c5Bullet4: "Integration — kompatibel mit einer globalen OT-Sicherheitserkennungsplattform",
    c5Boundary: "↑ Vertrauensgrenze — sensible Betriebswerte verlassen das System nur de-identifiziert",
    c5Artifacts: "De-identified Dataset|Agent Analysis Log|Structure Map",

    // Card 6
    c6Industry: "Öffentlicher Sektor / Rechenzentrum",
    c6Title: "Aggregatdaten-Freigabe — automatisierte De-Identifizierung & Audit-Trail",
    c6Metric1Val: "Manuell",
    c6Metric1Label: "Freigabeprüfung (vorher)",
    c6Metric2Val: "Automatisiert",
    c6Metric2Label: "Prüfung (nachher)",
    c6Metric3Val: "0,94",
    c6Metric3Label: "PII-Erkennungs-F1",
    c6Metric4Val: "Multi-Agent",
    c6Metric4Label: "Erkennen · Verfolgen · De-identifizieren",
    c6Before: "Nutzer, die sensible Aggregatstatistiken exportierten, benötigten eine manuelle, arbeitsplatzbezogene De-Identifizierung und Freigabeprüfung — inkonsistent und schwer zu auditieren.",
    c6BeforeStrong: "manuelle, arbeitsplatzbezogene De-Identifizierung",
    c6After: "Ein arbeitsplatzbezogenes De-Identifizierungsmodul in Kombination mit einer Multi-Agenten-Pipeline erkennt, verfolgt und de-identifiziert personenbezogene Daten in Aggregatdaten — der Freigabeprozess wird damit automatisiert und standardisiert.",
    c6Changed: "Der Release State erstellt Fingerabdrücke der Daten vor und nach der De-Identifizierung, sodass nachvollzogen werden kann, welche Datensätze wie transformiert wurden.",
    c6Reproduce: "Eine frühere Freigabe kann gegen den gebundenen Release State abgespielt werden, um den Prüfprozess für die Regulierungskontrolle zu reproduzieren.",
    c6Bullet1: "Vorher — manuelle, arbeitsplatzbezogene De-Identifizierung (schwer auditierbar)",
    c6Bullet1Strong: "manuelle, arbeitsplatzbezogene De-Identifizierung",
    c6Bullet2: "Erkennung — Multi-Agent-PII-Erkennung (F1 0,94)",
    c6Bullet3: "Pipeline — Erkennen, Verfolgen, De-identifizieren, Standardisieren",
    c6Bullet4: "Audit — Release State fingerabgedruckt vor & nach der Freigabe",
    c6Boundary: "↑ Vertrauensgrenze — PII wird vor jeder Freigabe entfernt und rückverfolgt",
    c6Artifacts: "De-identification Report|Release Audit Log|Detection Trace|State Card",
  },
}

/* ─────────────────────────────────────────────
   FILTER LABELS
───────────────────────────────────────────── */
const FILTER_LABELS: Record<string, Record<string, string>> = {
  all: { en: "all", ko: "전체", de: "alle" },
  secure: { en: "Secure LLM Usage", ko: "안전한 LLM 사용", de: "Sicherer LLM-Einsatz" },
  data: { en: "Data Usability", ko: "데이터 가용성", de: "Datenverfügbarkeit" },
  stable: { en: "Execution Stability", ko: "실행 안정성", de: "Prozessstabilität" },
}

/* ─────────────────────────────────────────────
   INTERFACES
───────────────────────────────────────────── */
interface Props {
  sectionH2?: string
  sectionH2Accent?: string
  sectionDesc?: string
  filterAll?: string
  filterSecure?: string
  filterData?: string
  filterStable?: string

  // Card 1
  c1Industry?: string
  c1Title?: string
  c1Metric1Val?: string
  c1Metric1Label?: string
  c1Metric2Val?: string
  c1Metric2Label?: string
  c1Metric3Val?: string
  c1Metric3Label?: string
  c1Before?: string
  c1BeforeStrong?: string
  c1After?: string
  c1Changed?: string
  c1Reproduce?: string
  c1Bullet1?: string
  c1Bullet1Strong?: string
  c1Bullet2?: string
  c1Bullet3?: string
  c1Bullet4?: string
  c1Boundary?: string
  c1Artifacts?: string

  // Card 2
  c2Industry?: string
  c2Title?: string
  c2Metric1Val?: string
  c2Metric1Label?: string
  c2Metric2Val?: string
  c2Metric2Label?: string
  c2Metric3Val?: string
  c2Metric3Label?: string
  c2Metric4Val?: string
  c2Metric4Label?: string
  c2Before?: string
  c2BeforeStrong?: string
  c2After?: string
  c2Changed?: string
  c2Reproduce?: string
  c2Bullet1?: string
  c2Bullet1Strong?: string
  c2Bullet2?: string
  c2Bullet3?: string
  c2Bullet4?: string
  c2Boundary?: string
  c2Artifacts?: string

  // Card 3
  c3Industry?: string
  c3Title?: string
  c3Metric1Val?: string
  c3Metric1Label?: string
  c3Metric2Val?: string
  c3Metric2Label?: string
  c3Metric3Val?: string
  c3Metric3Label?: string
  c3Before?: string
  c3BeforeStrong?: string
  c3After?: string
  c3Changed?: string
  c3Reproduce?: string
  c3Bullet1?: string
  c3Bullet1Strong?: string
  c3Bullet2?: string
  c3Bullet3?: string
  c3Bullet4?: string
  c3Boundary?: string
  c3Artifacts?: string

  // Card 4
  c4Industry?: string
  c4Title?: string
  c4Metric1Val?: string
  c4Metric1Label?: string
  c4Metric2Val?: string
  c4Metric2Label?: string
  c4Metric3Val?: string
  c4Metric3Label?: string
  c4Before?: string
  c4BeforeStrong?: string
  c4After?: string
  c4Changed?: string
  c4Reproduce?: string
  c4Bullet1?: string
  c4Bullet1Strong?: string
  c4Bullet2?: string
  c4Bullet3?: string
  c4Bullet4?: string
  c4Boundary?: string
  c4Artifacts?: string

  // Card 5
  c5Industry?: string
  c5Title?: string
  c5Metric1Val?: string
  c5Metric1Label?: string
  c5Metric2Val?: string
  c5Metric2Label?: string
  c5Metric3Val?: string
  c5Metric3Label?: string
  c5Before?: string
  c5BeforeStrong?: string
  c5After?: string
  c5Changed?: string
  c5Reproduce?: string
  c5Bullet1?: string
  c5Bullet1Strong?: string
  c5Bullet2?: string
  c5Bullet3?: string
  c5Bullet4?: string
  c5Boundary?: string
  c5Artifacts?: string

  // Card 6
  c6Industry?: string
  c6Title?: string
  c6Metric1Val?: string
  c6Metric1Label?: string
  c6Metric2Val?: string
  c6Metric2Label?: string
  c6Metric3Val?: string
  c6Metric3Label?: string
  c6Metric4Val?: string
  c6Metric4Label?: string
  c6Before?: string
  c6BeforeStrong?: string
  c6After?: string
  c6Changed?: string
  c6Reproduce?: string
  c6Bullet1?: string
  c6Bullet1Strong?: string
  c6Bullet2?: string
  c6Bullet3?: string
  c6Bullet4?: string
  c6Boundary?: string
  c6Artifacts?: string

  locale?: "en" | "ko" | "de"
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function ProofPart2({
  sectionH2 = "Operational case",
  sectionH2Accent = "records",
  sectionDesc = "Real workflows that were blocked by data exposure, then unblocked with LLM Capsule. Each record shows what changed, the protection mechanism, and how it can be reproduced for audit. Filter by capability; click any record to expand.",
  filterAll = "All Evidence",
  filterSecure = "Secure LLM Usage",
  filterData = "Data Usability",
  filterStable = "Execution Stability",

  // Card 1
  c1Industry = "Insurance",
  c1Title = "LLM-assisted claims processing — sensitive data protection",
  c1Metric1Val = "Exposed",
  c1Metric1Label = "Sensitive data in prompts (before)",
  c1Metric2Val = "Substituted",
  c1Metric2Label = "Sensitive fields (after)",
  c1Metric3Val = "Preserved",
  c1Metric3Label = "Output usability",
  c1Before = "Claims documents containing policyholder names, ID numbers, and medical details were sent directly to an external LLM API. The compliance team blocked the workflow.",
  c1BeforeStrong = "policyholder names, ID numbers, and medical details",
  c1After = "LLM Capsule substituted sensitive fields with restorable stand-ins before submission. Outputs returned and were reconstructed locally for downstream system use.",
  c1Changed = "The LLM Capsule layer was inserted into the workflow. Substitution covered names, IDs, dates, and medical field patterns. Sensitive raw values stayed in the local token vault.",
  c1Reproduce = "Each substitution run is logged and bound to a fixed release state, so the workflow is reproducible with the same substitution logic for audit and regression verification.",
  c1Bullet1 = "Detection — names, IDs, dates, medical field patterns",
  c1Bullet1Strong = "names, IDs, dates, medical field patterns",
  c1Bullet2 = "Substitution — restorable stand-ins before submission",
  c1Bullet3 = "Capsule transmission — only the protected capsule reaches the LLM",
  c1Bullet4 = "Restoration — outputs reconstructed locally for downstream systems",
  c1Boundary = "↑ Trust boundary — raw policyholder & medical data never crosses",
  c1Artifacts = "State Card|Substitution Log|Token Vault Record|Re-run Record",

  // Card 2
  c2Industry = "Public Sector / Defense",
  c2Title = "Air-gapped LLM workflow — classified context protection",
  c2Metric1Val = "Blocked",
  c2Metric1Label = "External LLM (before)",
  c2Metric2Val = "Enabled",
  c2Metric2Label = "External LLM (after)",
  c2Metric3Val = "0%",
  c2Metric3Label = "Raw data egress",
  c2Metric4Val = "N2SF",
  c2Metric4Label = "Guideline aligned",
  c2Before = "In a network-separated (air-gapped) environment, external LLMs could not be used at all, and concern over classified-context exposure blocked AI adoption entirely.",
  c2BeforeStrong = "classified-context exposure",
  c2After = "LLM Capsule encapsulates the sensitive context locally — only the protected capsule, not the original, is processed by the external LLM, and the result is rehydrated locally inside the boundary. The raw classified context never crosses the boundary, aligned with N2SF guidelines.",
  c2Changed = "Sensitive context is substituted with local stand-ins before processing and reconstructed locally after — no original data leaves the enclave.",
  c2Reproduce = "Every encapsulation/restoration event is logged locally, so any processed request can be reconstructed and inspected within the boundary.",
  c2Bullet1 = "Sensitive context — classified operation detail",
  c2Bullet1Strong = "classified operation detail",
  c2Bullet2 = "Encapsulation — performed locally inside the enclave",
  c2Bullet3 = "Execution — capsule processed, 0% raw data egress",
  c2Bullet4 = "Restoration — rehydrated locally; N2SF guideline aligned",
  c2Boundary = "↑ Trust boundary — nothing crosses the air gap; raw context stays inside",
  c2Artifacts = "Local Token Vault|Audit Log|N2SF Alignment",

  // Card 3
  c3Industry = "Enterprise / Knowledge Work",
  c3Title = "Internal document Q&A — PII-safe use of external LLMs",
  c3Metric1Val = "Blocked",
  c3Metric1Label = "LLM on internal docs (before)",
  c3Metric2Val = "Enabled",
  c3Metric2Label = "Secure LLM use (after)",
  c3Metric3Val = "Local",
  c3Metric3Label = "PII detect & restore",
  c3Before = "Internal documents — contracts, HR records, customer files holding personal and confidential information — could not be sent to ChatGPT, Claude, or Gemini for summarization or search. The security team blocked it.",
  c3BeforeStrong = "personal and confidential information",
  c3After = "LLM Capsule detects and substitutes personal and confidential fields locally before the request reaches an external LLM, then restores the original values in the response — so staff can summarize and query internal documents without raw data leaving the organization.",
  c3Changed = "The LLM Capsule gateway was placed between internal tools and the external LLM. Detection covered names, contacts, IDs, and account/contract identifiers; raw values stayed in the local token vault.",
  c3Reproduce = "Each request's substitution is logged and bound to a fixed release state, so a given document-Q&A run can be reconstructed for audit.",
  c3Bullet1 = "Detection — names, contacts, IDs, account/contract identifiers",
  c3Bullet1Strong = "names, contacts, IDs, account/contract identifiers",
  c3Bullet2 = "Substitution — restorable stand-ins before the request leaves",
  c3Bullet3 = "Gateway — only the protected request reaches ChatGPT / Claude / Gemini",
  c3Bullet4 = "Restoration — original values rehydrated locally in the response",
  c3Boundary = "↑ Trust boundary — raw internal documents never reach the external LLM vendor",
  c3Artifacts = "Substitution Log|Token Vault Record|Audit Log",

  // Card 4
  c4Industry = "Healthcare",
  c4Title = "Clinical AI validation — restricted patient data replacement",
  c4Metric1Val = "Blocked",
  c4Metric1Label = "Validation status (before)",
  c4Metric2Val = "Unblocked",
  c4Metric2Label = "Validation status (after)",
  c4Metric3Val = "DP-safe",
  c4Metric3Label = "Privacy method",
  c4Before = "Real patient records required for model validation could not be accessed due to regulatory constraints. The validation pipeline stalled.",
  c4BeforeStrong = "could not be accessed",
  c4After = "Differential-privacy-safe (DP-safe) replacement records matching real distribution characteristics — without containing real identifiable information — unblocked the validation pipeline.",
  c4Changed = "Non-accessible real records were replaced with DP-safe equivalents. Data distribution preserved, compliance review passed, validation pipeline resumed without modification.",
  c4Reproduce = "The replacement dataset is versioned and bound to a fixed data state, so the validation run is reproducible with the same distribution on demand. Audit trail maintained throughout.",
  c4Bullet1 = "Restricted input — real patient records (regulatory block)",
  c4Bullet1Strong = "real patient records",
  c4Bullet2 = "Replacement — DP-safe, distribution-matched equivalents",
  c4Bullet3 = "Privacy — no real identifiable information in the dataset",
  c4Bullet4 = "Outcome — validation unblocked; compliance review passed",
  c4Boundary = "↑ Trust boundary — real patient identifiers never enter the pipeline",
  c4Artifacts = "State Card|DP Audit Log|Dataset Version",

  // Card 5
  c5Industry = "Industrial / OT Security",
  c5Title = "OT network data — AI-ready transformation for threat analysis",
  c5Metric1Val = "Restricted",
  c5Metric1Label = "Raw OT data (before)",
  c5Metric2Val = "Enabled",
  c5Metric2Label = "AI threat analysis (after)",
  c5Metric3Val = "Structure-preserving",
  c5Metric3Label = "De-identification",
  c5Before = "OT/ICS network data carried sensitive operational details, so it could not be sent to an external AI for automated threat analysis.",
  c5BeforeStrong = "sensitive operational details",
  c5After = "Structure-preserving de-identification lets an AI agent analyze the network data and answer threat questions — sensitive values replaced with stand-ins while relationships are preserved. (Integrated with a global OT security platform's detection solution.)",
  c5Changed = "Network-data sensitive fields are substituted while topology and relationships are kept intact, so the agent can reason over realistic context.",
  c5Reproduce = "The de-identified dataset and the agent's analysis are bound to a fixed data state, so the same analysis can be re-run and verified.",
  c5Bullet1 = "Restricted input — OT/ICS network data with operational detail",
  c5Bullet1Strong = "OT/ICS network data with operational detail",
  c5Bullet2 = "De-identification — structure-preserving (topology kept intact)",
  c5Bullet3 = "Analysis — AI agent reasons over realistic, safe context",
  c5Bullet4 = "Integration — works with a global OT security detection platform",
  c5Boundary = "↑ Trust boundary — sensitive operational values never leave de-identified",
  c5Artifacts = "De-identified Dataset|Agent Analysis Log|Structure Map",

  // Card 6
  c6Industry = "Public Sector / Data Center",
  c6Title = "Aggregate-data release — automated de-identification & audit trail",
  c6Metric1Val = "Manual",
  c6Metric1Label = "Release screening (before)",
  c6Metric2Val = "Automated",
  c6Metric2Label = "Screening (after)",
  c6Metric3Val = "0.94",
  c6Metric3Label = "PII detection F1",
  c6Metric4Val = "Multi-agent",
  c6Metric4Label = "Detect · trace · de-identify",
  c6Before = "Users exporting sensitive aggregate statistics required manual, per-desk de-identification and release review — inconsistent and hard to audit.",
  c6BeforeStrong = "manual, per-desk de-identification",
  c6After = "A per-desk de-identification module plus a multi-agent pipeline detects, traces, and de-identifies personal information in aggregate data, automating and standardizing the release-review process.",
  c6Changed = "Release State fingerprints the data before and after de-identification, so which records were transformed — and how — is traceable for audit.",
  c6Reproduce = "A prior release can be replayed against its bound Release State, reproducing the screening process for regulatory inspection.",
  c6Bullet1 = "Before — manual, per-desk de-identification (hard to audit)",
  c6Bullet1Strong = "manual, per-desk de-identification",
  c6Bullet2 = "Detection — multi-agent PII detection (F1 0.94)",
  c6Bullet3 = "Pipeline — detect, trace, de-identify, standardize",
  c6Bullet4 = "Audit — release state fingerprinted before & after",
  c6Boundary = "↑ Trust boundary — PII removed and traced before any release",
  c6Artifacts = "De-identification Report|Release Audit Log|Detection Trace|State Card",

  locale = "en",
}: Props) {
  /* ── Locale ── */
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const effectiveLocale: string = framerLocale || locale || "en"
  const isNonEn = effectiveLocale !== "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en

  const r = (prop: string, key: string): string =>
    isNonEn
      ? T[key] || prop || TRANSLATIONS.en[key]
      : prop || T[key] || TRANSLATIONS.en[key]

  /* ── State ── */
  const [activeFilter, setActiveFilter] = useState<"all" | "secure" | "data" | "stable">("all")
  const [openCards, setOpenCards] = useState<Set<number>>(new Set([1]))

  const toggleCard = (idx: number) => {
    setOpenCards(prev => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  /* Card tag map: card index → filter tag */
  const cardTags: Record<number, "secure" | "data" | "stable"> = {
    1: "secure", 2: "secure", 3: "secure",
    4: "data", 5: "data",
    6: "stable",
  }

  const visibleCount = Object.values(cardTags).filter(
    tag => activeFilter === "all" || tag === activeFilter
  ).length

  const filterLabelMap = FILTER_LABELS[activeFilter] ?? FILTER_LABELS.all
  const filterLabelText = filterLabelMap[effectiveLocale] ?? filterLabelMap.en

  /* ── Resolved text ── */
  const rSectionH2 = r(sectionH2, "sectionH2")
  const rSectionH2Accent = r(sectionH2Accent, "sectionH2Accent")
  const rSectionDesc = r(sectionDesc, "sectionDesc")
  const rFilterAll = r(filterAll, "filterAll")
  const rFilterSecure = r(filterSecure, "filterSecure")
  const rFilterData = r(filterData, "filterData")
  const rFilterStable = r(filterStable, "filterStable")

  /* ── Helper: render a bullet with optional strong prefix ── */
  const renderBullet = (full: string, strong: string) => {
    if (!strong || !full.includes(strong)) return <>{full}</>
    const idx = full.indexOf(strong)
    return (
      <>
        {full.slice(0, idx)}
        <strong>{strong}</strong>
        {full.slice(idx + strong.length)}
      </>
    )
  }

  /* ── Helper: render a "before" row text with optional strong phrase ── */
  const renderRowText = (full: string, strong: string) => {
    if (!strong || !full.includes(strong)) return <p className="pf2-ac-row__text">{full}</p>
    const idx = full.indexOf(strong)
    return (
      <p className="pf2-ac-row__text">
        {full.slice(0, idx)}
        <strong>{strong}</strong>
        {full.slice(idx + strong.length)}
      </p>
    )
  }

  /* ── Helper: render artifact pills from pipe-separated string ── */
  const renderArtifacts = (artifactStr: string) => {
    const items = artifactStr.split("|").map(s => s.trim()).filter(Boolean)
    return items.map((item, i) => (
      <span className="pf2-ac-artifact" key={i}>{item}</span>
    ))
  }

  /* ── Helper: card visibility ── */
  const isVisible = (cardIdx: number) =>
    activeFilter === "all" || cardTags[cardIdx] === activeFilter

  /* ── Helper: render a full accordion card ── */
  const renderCard = (
    cardIdx: number,
    industryLabel: string,
    industryDotClass: string,
    title: string,
    metrics: Array<{ val: string; valClass: string; label: string }>,
    rows: Array<{ labelClass: string; labelText: string; content: string; strong: string }>,
    bullets: Array<{ text: string; strong: string }>,
    boundaryText: string,
    boundaryVariant: string,
    artifactStr: string
  ) => {
    const open = openCards.has(cardIdx)
    const visible = isVisible(cardIdx)
    return (
      <article
        className={`pf2-ac-card${open ? " pf2-ac--open" : ""}${!visible ? " pf2-ac--hidden" : ""}`}
        key={cardIdx}
      >
        <div
          className="pf2-ac-card__header"
          onClick={() => toggleCard(cardIdx)}
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") toggleCard(cardIdx) }}
        >
          <div>
            <div className="pf2-ac-card__industry">
              <span className={`pf2-ac-card__industry-dot ${industryDotClass}`} />
              {industryLabel}
            </div>
            <div className="pf2-ac-card__title">{title}</div>
          </div>
          <div>
            <span className="pf2-ac-card__toggle">+</span>
          </div>
        </div>
        <div className="pf2-ac-card__body">
          <div className="pf2-ac-metrics">
            {metrics.map((m, i) => (
              <div className="pf2-ac-metric" key={i}>
                <span className={`pf2-ac-metric__val${m.valClass ? " " + m.valClass : ""}`}>
                  {m.val}
                </span>
                <span className="pf2-ac-metric__label">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="pf2-ac-rows">
            {rows.map((row, i) => (
              <div className="pf2-ac-row" key={i}>
                <div className={`pf2-ac-row__label ${row.labelClass}`}>{row.labelText}</div>
                {renderRowText(row.content, row.strong)}
              </div>
            ))}
          </div>
          <ul className="pf2-ac-bullets">
            {bullets.map((b, i) => (
              <li key={i}>{renderBullet(b.text, b.strong)}</li>
            ))}
          </ul>
          <div className={`pf2-ac-boundary${boundaryVariant ? " " + boundaryVariant : ""}`}>
            {boundaryText}
          </div>
          <div className="pf2-ac-artifacts">
            {renderArtifacts(artifactStr)}
          </div>
        </div>
      </article>
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .pf2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #fff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.55;
        }
        .pf2-root *, .pf2-root *::before, .pf2-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* SECTION */
        .pf2-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }
        .pf2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }

        /* SECTION HEADER */
        .pf2-section-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .pf2-section-head h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .pf2-section-head p {
          font-size: clamp(15px, 1.2vw, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 720px;
          margin: 0 auto;
        }
        .pf2-accent {
          color: var(--c-primary, #5b4fe9);
        }

        /* FILTER BAR */
        .pf2-filter {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .pf2-filter__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-ink-soft, #3a3d5e);
          background-color: var(--c-bg, #fff);
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          font-family: var(--f-display, 'Inter', sans-serif);
          line-height: 1;
        }
        .pf2-filter__btn:hover {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary, #5b4fe9);
        }
        .pf2-filter__btn--active {
          background-color: var(--c-primary, #5b4fe9);
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-bg, #fff);
        }
        .pf2-filter__btn--active:hover {
          background-color: var(--c-primary-dark, #3b2fbf);
          border-color: var(--c-primary-dark, #3b2fbf);
          color: var(--c-bg, #fff);
        }

        /* FILTER DOTS */
        .pf2-filter__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf2-filter__dot--all {
          background: linear-gradient(90deg, var(--c-primary, #5b4fe9), var(--c-teal, #0ea5a4), var(--c-amber, #f59e0b));
        }
        .pf2-filter__dot--primary {
          background-color: var(--c-primary, #5b4fe9);
        }
        .pf2-filter__dot--teal {
          background-color: var(--c-teal, #0ea5a4);
        }
        .pf2-filter__dot--amber {
          background-color: var(--c-amber, #f59e0b);
        }

        /* FILTER COUNT */
        .pf2-filter__count {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          margin-bottom: 24px;
        }

        /* ACCORDION CARD */
        .pf2-ac-card {
          background-color: var(--c-bg, #fff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          overflow: hidden;
          margin-bottom: 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pf2-ac-card:hover {
          border-color: color-mix(in srgb, var(--c-rule, #e5e7eb) 85%, var(--c-ink, #0f1130));
          box-shadow: 0 4px 16px rgba(15, 17, 48, 0.04);
        }
        .pf2-ac--hidden {
          display: none;
        }

        /* ACCORDION HEADER */
        .pf2-ac-card__header {
          padding: 22px 26px;
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 16px;
          align-items: start;
          user-select: none;
        }
        .pf2-ac-card__header:focus-visible {
          outline: 2px solid var(--c-primary, #5b4fe9);
          outline-offset: -2px;
        }
        .pf2-ac-card__industry {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10.5px;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 9px;
        }
        .pf2-ac-card__industry-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf2-ac-card__industry-dot--primary {
          background-color: var(--c-primary, #5b4fe9);
        }
        .pf2-ac-card__industry-dot--coral {
          background-color: var(--c-coral, #ef5350);
        }
        .pf2-ac-card__industry-dot--teal {
          background-color: var(--c-teal, #0ea5a4);
        }
        .pf2-ac-card__industry-dot--amber {
          background-color: var(--c-amber, #f59e0b);
        }
        .pf2-ac-card__title {
          font-size: 18px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.3;
        }
        .pf2-ac-card__toggle {
          font-size: 24px;
          line-height: 1;
          color: var(--c-muted, #6b7280);
          font-weight: 300;
          transition: transform 0.2s;
          display: inline-block;
        }
        .pf2-ac--open .pf2-ac-card__toggle {
          transform: rotate(45deg);
        }

        /* ACCORDION BODY */
        .pf2-ac-card__body {
          display: none;
          padding: 0 26px 28px;
        }
        .pf2-ac--open .pf2-ac-card__body {
          display: block;
        }

        /* METRICS ROW */
        .pf2-ac-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 14px;
          margin-bottom: 6px;
        }
        .pf2-ac-metric {
          padding: 14px 0;
        }
        .pf2-ac-metric__val {
          font-size: 22px;
          font-weight: 800;
          display: block;
          line-height: 1;
          color: var(--c-ink, #0f1130);
        }
        .pf2-ac-metric__val--warning {
          color: var(--c-amber, #f59e0b);
        }
        .pf2-ac-metric__val--success {
          color: var(--c-teal-dark, #0b7f7e);
        }
        .pf2-ac-metric__label {
          font-size: 11.5px;
          color: var(--c-muted, #6b7280);
          margin-top: 7px;
          line-height: 1.4;
          display: block;
        }

        /* ROWS */
        .pf2-ac-rows {
          margin-top: 8px;
        }
        .pf2-ac-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 18px;
          align-items: start;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          padding: 14px 0;
        }
        .pf2-ac-row__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10.5px;
          text-transform: uppercase;
        }
        .pf2-ac-row__label--before {
          color: var(--c-coral-dark, #c73e3a);
        }
        .pf2-ac-row__label--after {
          color: var(--c-teal-dark, #0b7f7e);
        }
        .pf2-ac-row__label--changed {
          color: var(--c-primary, #5b4fe9);
        }
        .pf2-ac-row__label--reproduce {
          color: var(--c-amber, #f59e0b);
        }
        .pf2-ac-row__text {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
        }
        .pf2-ac-row__text strong {
          color: var(--c-ink, #0f1130);
          font-weight: 600;
        }

        /* BULLETS */
        .pf2-ac-bullets {
          list-style: none;
          margin: 18px 0 0;
          padding: 0;
        }
        .pf2-ac-bullets li {
          position: relative;
          padding: 7px 0 7px 18px;
          font-size: 13.5px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }
        .pf2-ac-bullets li:first-child {
          border-top: none;
        }
        .pf2-ac-bullets li::before {
          content: '\\00B7';
          position: absolute;
          left: 2px;
          top: 6px;
          color: var(--c-muted, #6b7280);
          font-weight: 700;
          font-size: 16px;
          line-height: 1.4;
        }
        .pf2-ac-bullets li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 600;
        }

        /* TRUST BOUNDARY */
        .pf2-ac-boundary {
          margin-top: 18px;
          padding: 12px 14px;
          border: 1px dashed var(--c-coral, #ef5350);
          border-radius: var(--r-sm, 6px);
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          line-height: 1.5;
          color: var(--c-coral-dark, #c73e3a);
          background-color: color-mix(in srgb, var(--c-coral, #ef5350) 4%, var(--c-bg, #fff));
        }
        .pf2-ac-boundary--brand {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary-dark, #3b2fbf);
          background-color: color-mix(in srgb, var(--c-primary, #5b4fe9) 4%, var(--c-bg, #fff));
        }

        /* ARTIFACTS */
        .pf2-ac-artifacts {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          margin-top: 4px;
        }
        .pf2-ac-artifact {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 9.5px;
          padding: 4px 9px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 4px;
          color: var(--c-ink-soft, #3a3d5e);
        }

        /* CONTAINER QUERIES */
        @container (min-width: 768px) {
          .pf2-container {
            padding: 0 32px;
          }
          .pf2-section-head p {
            max-width: 720px;
          }
        }
        @container (min-width: 1024px) {
          .pf2-container {
            padding: 0 32px;
          }
        }
        @container (min-width: 1280px) {
          .pf2-section-head p {
            max-width: 860px;
          }
        }
        @container (min-width: 1440px) {
          .pf2-container {
            padding: 0 120px;
          }
        }

        /* Row responsive: stack on narrow containers */
        @container (max-width: 620px) {
          .pf2-ac-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>

      <div className="pf2-root">
        <section className="pf2-section" id="evidence">
          <div className="pf2-container">

            {/* Section Header */}
            <div className="pf2-section-head">
              <h2>
                {rSectionH2}{" "}
                <span className="pf2-accent">{rSectionH2Accent}</span>
              </h2>
              <p>{rSectionDesc}</p>
            </div>

            {/* Filter Bar */}
            <div className="pf2-filter">
              <button
                className={`pf2-filter__btn${activeFilter === "all" ? " pf2-filter__btn--active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                <span className="pf2-filter__dot pf2-filter__dot--all" />
                {rFilterAll}
              </button>
              <button
                className={`pf2-filter__btn${activeFilter === "secure" ? " pf2-filter__btn--active" : ""}`}
                onClick={() => setActiveFilter("secure")}
              >
                <span className="pf2-filter__dot pf2-filter__dot--primary" />
                {rFilterSecure}
              </button>
              <button
                className={`pf2-filter__btn${activeFilter === "data" ? " pf2-filter__btn--active" : ""}`}
                onClick={() => setActiveFilter("data")}
              >
                <span className="pf2-filter__dot pf2-filter__dot--teal" />
                {rFilterData}
              </button>
              <button
                className={`pf2-filter__btn${activeFilter === "stable" ? " pf2-filter__btn--active" : ""}`}
                onClick={() => setActiveFilter("stable")}
              >
                <span className="pf2-filter__dot pf2-filter__dot--amber" />
                {rFilterStable}
              </button>
            </div>

            {/* Count */}
            <div className="pf2-filter__count">
              {visibleCount} records &middot; filtered: {filterLabelText}
            </div>

            {/* Card 1 — Insurance — secure */}
            {renderCard(
              1,
              r(c1Industry, "c1Industry"),
              "pf2-ac-card__industry-dot--primary",
              r(c1Title, "c1Title"),
              [
                { val: r(c1Metric1Val, "c1Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c1Metric1Label, "c1Metric1Label") },
                { val: r(c1Metric2Val, "c1Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c1Metric2Label, "c1Metric2Label") },
                { val: r(c1Metric3Val, "c1Metric3Val"), valClass: "", label: r(c1Metric3Label, "c1Metric3Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c1Before, "c1Before"), strong: r(c1BeforeStrong, "c1BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c1After, "c1After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c1Changed, "c1Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c1Reproduce, "c1Reproduce"), strong: "" },
              ],
              [
                { text: r(c1Bullet1, "c1Bullet1"), strong: r(c1Bullet1Strong, "c1Bullet1Strong") },
                { text: r(c1Bullet2, "c1Bullet2"), strong: "" },
                { text: r(c1Bullet3, "c1Bullet3"), strong: "" },
                { text: r(c1Bullet4, "c1Bullet4"), strong: "" },
              ],
              r(c1Boundary, "c1Boundary"),
              "",
              r(c1Artifacts, "c1Artifacts")
            )}

            {/* Card 2 — Public Sector / Defense — secure */}
            {renderCard(
              2,
              r(c2Industry, "c2Industry"),
              "pf2-ac-card__industry-dot--coral",
              r(c2Title, "c2Title"),
              [
                { val: r(c2Metric1Val, "c2Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c2Metric1Label, "c2Metric1Label") },
                { val: r(c2Metric2Val, "c2Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c2Metric2Label, "c2Metric2Label") },
                { val: r(c2Metric3Val, "c2Metric3Val"), valClass: "", label: r(c2Metric3Label, "c2Metric3Label") },
                { val: r(c2Metric4Val, "c2Metric4Val"), valClass: "", label: r(c2Metric4Label, "c2Metric4Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c2Before, "c2Before"), strong: r(c2BeforeStrong, "c2BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c2After, "c2After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c2Changed, "c2Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c2Reproduce, "c2Reproduce"), strong: "" },
              ],
              [
                { text: r(c2Bullet1, "c2Bullet1"), strong: r(c2Bullet1Strong, "c2Bullet1Strong") },
                { text: r(c2Bullet2, "c2Bullet2"), strong: "" },
                { text: r(c2Bullet3, "c2Bullet3"), strong: "" },
                { text: r(c2Bullet4, "c2Bullet4"), strong: "" },
              ],
              r(c2Boundary, "c2Boundary"),
              "pf2-ac-boundary--brand",
              r(c2Artifacts, "c2Artifacts")
            )}

            {/* Card 3 — Enterprise / Knowledge Work — secure */}
            {renderCard(
              3,
              r(c3Industry, "c3Industry"),
              "pf2-ac-card__industry-dot--primary",
              r(c3Title, "c3Title"),
              [
                { val: r(c3Metric1Val, "c3Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c3Metric1Label, "c3Metric1Label") },
                { val: r(c3Metric2Val, "c3Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c3Metric2Label, "c3Metric2Label") },
                { val: r(c3Metric3Val, "c3Metric3Val"), valClass: "", label: r(c3Metric3Label, "c3Metric3Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c3Before, "c3Before"), strong: r(c3BeforeStrong, "c3BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c3After, "c3After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c3Changed, "c3Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c3Reproduce, "c3Reproduce"), strong: "" },
              ],
              [
                { text: r(c3Bullet1, "c3Bullet1"), strong: r(c3Bullet1Strong, "c3Bullet1Strong") },
                { text: r(c3Bullet2, "c3Bullet2"), strong: "" },
                { text: r(c3Bullet3, "c3Bullet3"), strong: "" },
                { text: r(c3Bullet4, "c3Bullet4"), strong: "" },
              ],
              r(c3Boundary, "c3Boundary"),
              "",
              r(c3Artifacts, "c3Artifacts")
            )}

            {/* Card 4 — Healthcare — data */}
            {renderCard(
              4,
              r(c4Industry, "c4Industry"),
              "pf2-ac-card__industry-dot--teal",
              r(c4Title, "c4Title"),
              [
                { val: r(c4Metric1Val, "c4Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c4Metric1Label, "c4Metric1Label") },
                { val: r(c4Metric2Val, "c4Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c4Metric2Label, "c4Metric2Label") },
                { val: r(c4Metric3Val, "c4Metric3Val"), valClass: "", label: r(c4Metric3Label, "c4Metric3Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c4Before, "c4Before"), strong: r(c4BeforeStrong, "c4BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c4After, "c4After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c4Changed, "c4Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c4Reproduce, "c4Reproduce"), strong: "" },
              ],
              [
                { text: r(c4Bullet1, "c4Bullet1"), strong: r(c4Bullet1Strong, "c4Bullet1Strong") },
                { text: r(c4Bullet2, "c4Bullet2"), strong: "" },
                { text: r(c4Bullet3, "c4Bullet3"), strong: "" },
                { text: r(c4Bullet4, "c4Bullet4"), strong: "" },
              ],
              r(c4Boundary, "c4Boundary"),
              "",
              r(c4Artifacts, "c4Artifacts")
            )}

            {/* Card 5 — Industrial / OT Security — data */}
            {renderCard(
              5,
              r(c5Industry, "c5Industry"),
              "pf2-ac-card__industry-dot--teal",
              r(c5Title, "c5Title"),
              [
                { val: r(c5Metric1Val, "c5Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c5Metric1Label, "c5Metric1Label") },
                { val: r(c5Metric2Val, "c5Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c5Metric2Label, "c5Metric2Label") },
                { val: r(c5Metric3Val, "c5Metric3Val"), valClass: "", label: r(c5Metric3Label, "c5Metric3Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c5Before, "c5Before"), strong: r(c5BeforeStrong, "c5BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c5After, "c5After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c5Changed, "c5Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c5Reproduce, "c5Reproduce"), strong: "" },
              ],
              [
                { text: r(c5Bullet1, "c5Bullet1"), strong: r(c5Bullet1Strong, "c5Bullet1Strong") },
                { text: r(c5Bullet2, "c5Bullet2"), strong: "" },
                { text: r(c5Bullet3, "c5Bullet3"), strong: "" },
                { text: r(c5Bullet4, "c5Bullet4"), strong: "" },
              ],
              r(c5Boundary, "c5Boundary"),
              "",
              r(c5Artifacts, "c5Artifacts")
            )}

            {/* Card 6 — Public Sector / Data Center — stable */}
            {renderCard(
              6,
              r(c6Industry, "c6Industry"),
              "pf2-ac-card__industry-dot--amber",
              r(c6Title, "c6Title"),
              [
                { val: r(c6Metric1Val, "c6Metric1Val"), valClass: "pf2-ac-metric__val--warning", label: r(c6Metric1Label, "c6Metric1Label") },
                { val: r(c6Metric2Val, "c6Metric2Val"), valClass: "pf2-ac-metric__val--success", label: r(c6Metric2Label, "c6Metric2Label") },
                { val: r(c6Metric3Val, "c6Metric3Val"), valClass: "", label: r(c6Metric3Label, "c6Metric3Label") },
                { val: r(c6Metric4Val, "c6Metric4Val"), valClass: "", label: r(c6Metric4Label, "c6Metric4Label") },
              ],
              [
                { labelClass: "pf2-ac-row__label--before", labelText: "Before", content: r(c6Before, "c6Before"), strong: r(c6BeforeStrong, "c6BeforeStrong") },
                { labelClass: "pf2-ac-row__label--after", labelText: "After", content: r(c6After, "c6After"), strong: "" },
                { labelClass: "pf2-ac-row__label--changed", labelText: "What Changed", content: r(c6Changed, "c6Changed"), strong: "" },
                { labelClass: "pf2-ac-row__label--reproduce", labelText: "Reproduce", content: r(c6Reproduce, "c6Reproduce"), strong: "" },
              ],
              [
                { text: r(c6Bullet1, "c6Bullet1"), strong: r(c6Bullet1Strong, "c6Bullet1Strong") },
                { text: r(c6Bullet2, "c6Bullet2"), strong: "" },
                { text: r(c6Bullet3, "c6Bullet3"), strong: "" },
                { text: r(c6Bullet4, "c6Bullet4"), strong: "" },
              ],
              r(c6Boundary, "c6Boundary"),
              "",
              r(c6Artifacts, "c6Artifacts")
            )}

          </div>
        </section>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────
   PROPERTY CONTROLS
───────────────────────────────────────────── */
addPropertyControls(ProofPart2, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "Korean", "German"],
    defaultValue: "en",
  },

  sectionH2: {
    type: ControlType.String,
    title: "Section H2",
    defaultValue: "Operational case",
  },
  sectionH2Accent: {
    type: ControlType.String,
    title: "Section H2 Accent",
    defaultValue: "records",
  },
  sectionDesc: {
    type: ControlType.String,
    title: "Section Description",
    displayTextArea: true,
    defaultValue: "Real workflows that were blocked by data exposure, then unblocked with LLM Capsule. Each record shows what changed, the protection mechanism, and how it can be reproduced for audit. Filter by capability; click any record to expand.",
  },
  filterAll: {
    type: ControlType.String,
    title: "Filter: All",
    defaultValue: "All Evidence",
  },
  filterSecure: {
    type: ControlType.String,
    title: "Filter: Secure",
    defaultValue: "Secure LLM Usage",
  },
  filterData: {
    type: ControlType.String,
    title: "Filter: Data",
    defaultValue: "Data Usability",
  },
  filterStable: {
    type: ControlType.String,
    title: "Filter: Stable",
    defaultValue: "Execution Stability",
  },

  // ── Card 1 ──
  c1Industry: { type: ControlType.String, title: "C1 Industry", defaultValue: "Insurance" },
  c1Title: { type: ControlType.String, title: "C1 Title", displayTextArea: true, defaultValue: "LLM-assisted claims processing — sensitive data protection" },
  c1Metric1Val: { type: ControlType.String, title: "C1 M1 Val", defaultValue: "Exposed" },
  c1Metric1Label: { type: ControlType.String, title: "C1 M1 Label", defaultValue: "Sensitive data in prompts (before)" },
  c1Metric2Val: { type: ControlType.String, title: "C1 M2 Val", defaultValue: "Substituted" },
  c1Metric2Label: { type: ControlType.String, title: "C1 M2 Label", defaultValue: "Sensitive fields (after)" },
  c1Metric3Val: { type: ControlType.String, title: "C1 M3 Val", defaultValue: "Preserved" },
  c1Metric3Label: { type: ControlType.String, title: "C1 M3 Label", defaultValue: "Output usability" },
  c1Before: { type: ControlType.String, title: "C1 Before", displayTextArea: true, defaultValue: "Claims documents containing policyholder names, ID numbers, and medical details were sent directly to an external LLM API. The compliance team blocked the workflow." },
  c1BeforeStrong: { type: ControlType.String, title: "C1 Before Bold", defaultValue: "policyholder names, ID numbers, and medical details" },
  c1After: { type: ControlType.String, title: "C1 After", displayTextArea: true, defaultValue: "LLM Capsule substituted sensitive fields with restorable stand-ins before submission. Outputs returned and were reconstructed locally for downstream system use." },
  c1Changed: { type: ControlType.String, title: "C1 What Changed", displayTextArea: true, defaultValue: "The LLM Capsule layer was inserted into the workflow. Substitution covered names, IDs, dates, and medical field patterns. Sensitive raw values stayed in the local token vault." },
  c1Reproduce: { type: ControlType.String, title: "C1 Reproduce", displayTextArea: true, defaultValue: "Each substitution run is logged and bound to a fixed release state, so the workflow is reproducible with the same substitution logic for audit and regression verification." },
  c1Bullet1: { type: ControlType.String, title: "C1 Bullet 1", defaultValue: "Detection — names, IDs, dates, medical field patterns" },
  c1Bullet1Strong: { type: ControlType.String, title: "C1 Bullet 1 Bold", defaultValue: "names, IDs, dates, medical field patterns" },
  c1Bullet2: { type: ControlType.String, title: "C1 Bullet 2", defaultValue: "Substitution — restorable stand-ins before submission" },
  c1Bullet3: { type: ControlType.String, title: "C1 Bullet 3", defaultValue: "Capsule transmission — only the protected capsule reaches the LLM" },
  c1Bullet4: { type: ControlType.String, title: "C1 Bullet 4", defaultValue: "Restoration — outputs reconstructed locally for downstream systems" },
  c1Boundary: { type: ControlType.String, title: "C1 Boundary", defaultValue: "↑ Trust boundary — raw policyholder & medical data never crosses" },
  c1Artifacts: { type: ControlType.String, title: "C1 Artifacts (pipe-separated)", defaultValue: "State Card|Substitution Log|Token Vault Record|Re-run Record" },

  // ── Card 2 ──
  c2Industry: { type: ControlType.String, title: "C2 Industry", defaultValue: "Public Sector / Defense" },
  c2Title: { type: ControlType.String, title: "C2 Title", displayTextArea: true, defaultValue: "Air-gapped LLM workflow — classified context protection" },
  c2Metric1Val: { type: ControlType.String, title: "C2 M1 Val", defaultValue: "Blocked" },
  c2Metric1Label: { type: ControlType.String, title: "C2 M1 Label", defaultValue: "External LLM (before)" },
  c2Metric2Val: { type: ControlType.String, title: "C2 M2 Val", defaultValue: "Enabled" },
  c2Metric2Label: { type: ControlType.String, title: "C2 M2 Label", defaultValue: "External LLM (after)" },
  c2Metric3Val: { type: ControlType.String, title: "C2 M3 Val", defaultValue: "0%" },
  c2Metric3Label: { type: ControlType.String, title: "C2 M3 Label", defaultValue: "Raw data egress" },
  c2Metric4Val: { type: ControlType.String, title: "C2 M4 Val", defaultValue: "N2SF" },
  c2Metric4Label: { type: ControlType.String, title: "C2 M4 Label", defaultValue: "Guideline aligned" },
  c2Before: { type: ControlType.String, title: "C2 Before", displayTextArea: true, defaultValue: "In a network-separated (air-gapped) environment, external LLMs could not be used at all, and concern over classified-context exposure blocked AI adoption entirely." },
  c2BeforeStrong: { type: ControlType.String, title: "C2 Before Bold", defaultValue: "classified-context exposure" },
  c2After: { type: ControlType.String, title: "C2 After", displayTextArea: true, defaultValue: "LLM Capsule encapsulates the sensitive context locally — only the protected capsule, not the original, is processed by the external LLM, and the result is rehydrated locally inside the boundary. The raw classified context never crosses the boundary, aligned with N2SF guidelines." },
  c2Changed: { type: ControlType.String, title: "C2 What Changed", displayTextArea: true, defaultValue: "Sensitive context is substituted with local stand-ins before processing and reconstructed locally after — no original data leaves the enclave." },
  c2Reproduce: { type: ControlType.String, title: "C2 Reproduce", displayTextArea: true, defaultValue: "Every encapsulation/restoration event is logged locally, so any processed request can be reconstructed and inspected within the boundary." },
  c2Bullet1: { type: ControlType.String, title: "C2 Bullet 1", defaultValue: "Sensitive context — classified operation detail" },
  c2Bullet1Strong: { type: ControlType.String, title: "C2 Bullet 1 Bold", defaultValue: "classified operation detail" },
  c2Bullet2: { type: ControlType.String, title: "C2 Bullet 2", defaultValue: "Encapsulation — performed locally inside the enclave" },
  c2Bullet3: { type: ControlType.String, title: "C2 Bullet 3", defaultValue: "Execution — capsule processed, 0% raw data egress" },
  c2Bullet4: { type: ControlType.String, title: "C2 Bullet 4", defaultValue: "Restoration — rehydrated locally; N2SF guideline aligned" },
  c2Boundary: { type: ControlType.String, title: "C2 Boundary", defaultValue: "↑ Trust boundary — nothing crosses the air gap; raw context stays inside" },
  c2Artifacts: { type: ControlType.String, title: "C2 Artifacts (pipe-separated)", defaultValue: "Local Token Vault|Audit Log|N2SF Alignment" },

  // ── Card 3 ──
  c3Industry: { type: ControlType.String, title: "C3 Industry", defaultValue: "Enterprise / Knowledge Work" },
  c3Title: { type: ControlType.String, title: "C3 Title", displayTextArea: true, defaultValue: "Internal document Q&A — PII-safe use of external LLMs" },
  c3Metric1Val: { type: ControlType.String, title: "C3 M1 Val", defaultValue: "Blocked" },
  c3Metric1Label: { type: ControlType.String, title: "C3 M1 Label", defaultValue: "LLM on internal docs (before)" },
  c3Metric2Val: { type: ControlType.String, title: "C3 M2 Val", defaultValue: "Enabled" },
  c3Metric2Label: { type: ControlType.String, title: "C3 M2 Label", defaultValue: "Secure LLM use (after)" },
  c3Metric3Val: { type: ControlType.String, title: "C3 M3 Val", defaultValue: "Local" },
  c3Metric3Label: { type: ControlType.String, title: "C3 M3 Label", defaultValue: "PII detect & restore" },
  c3Before: { type: ControlType.String, title: "C3 Before", displayTextArea: true, defaultValue: "Internal documents — contracts, HR records, customer files holding personal and confidential information — could not be sent to ChatGPT, Claude, or Gemini for summarization or search. The security team blocked it." },
  c3BeforeStrong: { type: ControlType.String, title: "C3 Before Bold", defaultValue: "personal and confidential information" },
  c3After: { type: ControlType.String, title: "C3 After", displayTextArea: true, defaultValue: "LLM Capsule detects and substitutes personal and confidential fields locally before the request reaches an external LLM, then restores the original values in the response — so staff can summarize and query internal documents without raw data leaving the organization." },
  c3Changed: { type: ControlType.String, title: "C3 What Changed", displayTextArea: true, defaultValue: "The LLM Capsule gateway was placed between internal tools and the external LLM. Detection covered names, contacts, IDs, and account/contract identifiers; raw values stayed in the local token vault." },
  c3Reproduce: { type: ControlType.String, title: "C3 Reproduce", displayTextArea: true, defaultValue: "Each request's substitution is logged and bound to a fixed release state, so a given document-Q&A run can be reconstructed for audit." },
  c3Bullet1: { type: ControlType.String, title: "C3 Bullet 1", defaultValue: "Detection — names, contacts, IDs, account/contract identifiers" },
  c3Bullet1Strong: { type: ControlType.String, title: "C3 Bullet 1 Bold", defaultValue: "names, contacts, IDs, account/contract identifiers" },
  c3Bullet2: { type: ControlType.String, title: "C3 Bullet 2", defaultValue: "Substitution — restorable stand-ins before the request leaves" },
  c3Bullet3: { type: ControlType.String, title: "C3 Bullet 3", defaultValue: "Gateway — only the protected request reaches ChatGPT / Claude / Gemini" },
  c3Bullet4: { type: ControlType.String, title: "C3 Bullet 4", defaultValue: "Restoration — original values rehydrated locally in the response" },
  c3Boundary: { type: ControlType.String, title: "C3 Boundary", defaultValue: "↑ Trust boundary — raw internal documents never reach the external LLM vendor" },
  c3Artifacts: { type: ControlType.String, title: "C3 Artifacts (pipe-separated)", defaultValue: "Substitution Log|Token Vault Record|Audit Log" },

  // ── Card 4 ──
  c4Industry: { type: ControlType.String, title: "C4 Industry", defaultValue: "Healthcare" },
  c4Title: { type: ControlType.String, title: "C4 Title", displayTextArea: true, defaultValue: "Clinical AI validation — restricted patient data replacement" },
  c4Metric1Val: { type: ControlType.String, title: "C4 M1 Val", defaultValue: "Blocked" },
  c4Metric1Label: { type: ControlType.String, title: "C4 M1 Label", defaultValue: "Validation status (before)" },
  c4Metric2Val: { type: ControlType.String, title: "C4 M2 Val", defaultValue: "Unblocked" },
  c4Metric2Label: { type: ControlType.String, title: "C4 M2 Label", defaultValue: "Validation status (after)" },
  c4Metric3Val: { type: ControlType.String, title: "C4 M3 Val", defaultValue: "DP-safe" },
  c4Metric3Label: { type: ControlType.String, title: "C4 M3 Label", defaultValue: "Privacy method" },
  c4Before: { type: ControlType.String, title: "C4 Before", displayTextArea: true, defaultValue: "Real patient records required for model validation could not be accessed due to regulatory constraints. The validation pipeline stalled." },
  c4BeforeStrong: { type: ControlType.String, title: "C4 Before Bold", defaultValue: "could not be accessed" },
  c4After: { type: ControlType.String, title: "C4 After", displayTextArea: true, defaultValue: "Differential-privacy-safe (DP-safe) replacement records matching real distribution characteristics — without containing real identifiable information — unblocked the validation pipeline." },
  c4Changed: { type: ControlType.String, title: "C4 What Changed", displayTextArea: true, defaultValue: "Non-accessible real records were replaced with DP-safe equivalents. Data distribution preserved, compliance review passed, validation pipeline resumed without modification." },
  c4Reproduce: { type: ControlType.String, title: "C4 Reproduce", displayTextArea: true, defaultValue: "The replacement dataset is versioned and bound to a fixed data state, so the validation run is reproducible with the same distribution on demand. Audit trail maintained throughout." },
  c4Bullet1: { type: ControlType.String, title: "C4 Bullet 1", defaultValue: "Restricted input — real patient records (regulatory block)" },
  c4Bullet1Strong: { type: ControlType.String, title: "C4 Bullet 1 Bold", defaultValue: "real patient records" },
  c4Bullet2: { type: ControlType.String, title: "C4 Bullet 2", defaultValue: "Replacement — DP-safe, distribution-matched equivalents" },
  c4Bullet3: { type: ControlType.String, title: "C4 Bullet 3", defaultValue: "Privacy — no real identifiable information in the dataset" },
  c4Bullet4: { type: ControlType.String, title: "C4 Bullet 4", defaultValue: "Outcome — validation unblocked; compliance review passed" },
  c4Boundary: { type: ControlType.String, title: "C4 Boundary", defaultValue: "↑ Trust boundary — real patient identifiers never enter the pipeline" },
  c4Artifacts: { type: ControlType.String, title: "C4 Artifacts (pipe-separated)", defaultValue: "State Card|DP Audit Log|Dataset Version" },

  // ── Card 5 ──
  c5Industry: { type: ControlType.String, title: "C5 Industry", defaultValue: "Industrial / OT Security" },
  c5Title: { type: ControlType.String, title: "C5 Title", displayTextArea: true, defaultValue: "OT network data — AI-ready transformation for threat analysis" },
  c5Metric1Val: { type: ControlType.String, title: "C5 M1 Val", defaultValue: "Restricted" },
  c5Metric1Label: { type: ControlType.String, title: "C5 M1 Label", defaultValue: "Raw OT data (before)" },
  c5Metric2Val: { type: ControlType.String, title: "C5 M2 Val", defaultValue: "Enabled" },
  c5Metric2Label: { type: ControlType.String, title: "C5 M2 Label", defaultValue: "AI threat analysis (after)" },
  c5Metric3Val: { type: ControlType.String, title: "C5 M3 Val", defaultValue: "Structure-preserving" },
  c5Metric3Label: { type: ControlType.String, title: "C5 M3 Label", defaultValue: "De-identification" },
  c5Before: { type: ControlType.String, title: "C5 Before", displayTextArea: true, defaultValue: "OT/ICS network data carried sensitive operational details, so it could not be sent to an external AI for automated threat analysis." },
  c5BeforeStrong: { type: ControlType.String, title: "C5 Before Bold", defaultValue: "sensitive operational details" },
  c5After: { type: ControlType.String, title: "C5 After", displayTextArea: true, defaultValue: "Structure-preserving de-identification lets an AI agent analyze the network data and answer threat questions — sensitive values replaced with stand-ins while relationships are preserved. (Integrated with a global OT security platform's detection solution.)" },
  c5Changed: { type: ControlType.String, title: "C5 What Changed", displayTextArea: true, defaultValue: "Network-data sensitive fields are substituted while topology and relationships are kept intact, so the agent can reason over realistic context." },
  c5Reproduce: { type: ControlType.String, title: "C5 Reproduce", displayTextArea: true, defaultValue: "The de-identified dataset and the agent's analysis are bound to a fixed data state, so the same analysis can be re-run and verified." },
  c5Bullet1: { type: ControlType.String, title: "C5 Bullet 1", defaultValue: "Restricted input — OT/ICS network data with operational detail" },
  c5Bullet1Strong: { type: ControlType.String, title: "C5 Bullet 1 Bold", defaultValue: "OT/ICS network data with operational detail" },
  c5Bullet2: { type: ControlType.String, title: "C5 Bullet 2", defaultValue: "De-identification — structure-preserving (topology kept intact)" },
  c5Bullet3: { type: ControlType.String, title: "C5 Bullet 3", defaultValue: "Analysis — AI agent reasons over realistic, safe context" },
  c5Bullet4: { type: ControlType.String, title: "C5 Bullet 4", defaultValue: "Integration — works with a global OT security detection platform" },
  c5Boundary: { type: ControlType.String, title: "C5 Boundary", defaultValue: "↑ Trust boundary — sensitive operational values never leave de-identified" },
  c5Artifacts: { type: ControlType.String, title: "C5 Artifacts (pipe-separated)", defaultValue: "De-identified Dataset|Agent Analysis Log|Structure Map" },

  // ── Card 6 ──
  c6Industry: { type: ControlType.String, title: "C6 Industry", defaultValue: "Public Sector / Data Center" },
  c6Title: { type: ControlType.String, title: "C6 Title", displayTextArea: true, defaultValue: "Aggregate-data release — automated de-identification & audit trail" },
  c6Metric1Val: { type: ControlType.String, title: "C6 M1 Val", defaultValue: "Manual" },
  c6Metric1Label: { type: ControlType.String, title: "C6 M1 Label", defaultValue: "Release screening (before)" },
  c6Metric2Val: { type: ControlType.String, title: "C6 M2 Val", defaultValue: "Automated" },
  c6Metric2Label: { type: ControlType.String, title: "C6 M2 Label", defaultValue: "Screening (after)" },
  c6Metric3Val: { type: ControlType.String, title: "C6 M3 Val", defaultValue: "0.94" },
  c6Metric3Label: { type: ControlType.String, title: "C6 M3 Label", defaultValue: "PII detection F1" },
  c6Metric4Val: { type: ControlType.String, title: "C6 M4 Val", defaultValue: "Multi-agent" },
  c6Metric4Label: { type: ControlType.String, title: "C6 M4 Label", defaultValue: "Detect · trace · de-identify" },
  c6Before: { type: ControlType.String, title: "C6 Before", displayTextArea: true, defaultValue: "Users exporting sensitive aggregate statistics required manual, per-desk de-identification and release review — inconsistent and hard to audit." },
  c6BeforeStrong: { type: ControlType.String, title: "C6 Before Bold", defaultValue: "manual, per-desk de-identification" },
  c6After: { type: ControlType.String, title: "C6 After", displayTextArea: true, defaultValue: "A per-desk de-identification module plus a multi-agent pipeline detects, traces, and de-identifies personal information in aggregate data, automating and standardizing the release-review process." },
  c6Changed: { type: ControlType.String, title: "C6 What Changed", displayTextArea: true, defaultValue: "Release State fingerprints the data before and after de-identification, so which records were transformed — and how — is traceable for audit." },
  c6Reproduce: { type: ControlType.String, title: "C6 Reproduce", displayTextArea: true, defaultValue: "A prior release can be replayed against its bound Release State, reproducing the screening process for regulatory inspection." },
  c6Bullet1: { type: ControlType.String, title: "C6 Bullet 1", defaultValue: "Before — manual, per-desk de-identification (hard to audit)" },
  c6Bullet1Strong: { type: ControlType.String, title: "C6 Bullet 1 Bold", defaultValue: "manual, per-desk de-identification" },
  c6Bullet2: { type: ControlType.String, title: "C6 Bullet 2", defaultValue: "Detection — multi-agent PII detection (F1 0.94)" },
  c6Bullet3: { type: ControlType.String, title: "C6 Bullet 3", defaultValue: "Pipeline — detect, trace, de-identify, standardize" },
  c6Bullet4: { type: ControlType.String, title: "C6 Bullet 4", defaultValue: "Audit — release state fingerprinted before & after" },
  c6Boundary: { type: ControlType.String, title: "C6 Boundary", defaultValue: "↑ Trust boundary — PII removed and traced before any release" },
  c6Artifacts: { type: ControlType.String, title: "C6 Artifacts (pipe-separated)", defaultValue: "De-identification Report|Release Audit Log|Detection Trace|State Card" },
})
