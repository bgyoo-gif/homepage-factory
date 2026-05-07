# product-v62 — 한국어 번역 (v6.2)

## Section 01: Hero

Product
제품

Watch 
직접 확인하세요 —

LLM Capsule
LLM Capsule

 run on a real enterprise workflow
실제 기업 워크플로우에서 실행되는

Two minutes — see a real document encapsulated, sent to an external LLM, and restored back into the originating workflow. No marketing words. The actual product.
2분으로 충분합니다. 실제 문서를 캡슐화하고, 외부 LLM에 전송한 뒤, 원본 워크플로우로 자동 복원하는 전 과정을 직접 확인하세요. 마케팅 문구 없이, 실제 제품 그대로입니다.

Request a Live Demo
라이브 데모 요청

View Architecture
아키텍처 보기

---

## Section 02: Demo Video

2:14 · LLM CAPSULE LIVE WALKTHROUGH
2:14 · LLM CAPSULE 라이브 워크스루

Watch the 2-minute product demo
2분 제품 데모 보기

Play demo
데모 재생

What you'll see:
확인하실 내용:

A telecom NOC ticket flows through LLM Capsule — device IDs, circuit IDs, site references, alarm sequences, and SLA-impact references are encapsulated locally — subscriber identifiers included; the protected capsule reaches an external LLM; the AI's RCA recommendation is auto-restored back into the original ticket. End-to-end, in production.
통신사 NOC 티켓이 LLM Capsule을 통과하는 전 과정입니다. 기기 ID, 회선 ID, 사이트 참조, 알람 시퀀스, SLA 영향 참조값, 가입자 식별자가 로컬에서 캡슐화됩니다. 보호된 캡슐이 외부 LLM에 전달되고, AI의 RCA 추천 결과가 원본 티켓으로 자동 복원됩니다. 처음부터 끝까지, 실 운영 환경에서.

Take the Interactive Tour
인터랙티브 투어 체험하기

---

## Section 03: Interactive Tour

Interactive product tour
제품 인터랙티브 투어

Five steps. One real document. Real output.
5단계. 실제 문서 하나. 실제 결과물.

The same capsule mechanism runs across telecom, healthcare, finance, defense, legal, and OT. Below: a contract review workflow. The raw document never leaves your environment.
동일한 캡슐화 메커니즘이 통신·의료·금융·국방·법률·OT 전 영역에서 작동합니다. 아래는 계약서 검토 워크플로우입니다. 원본 문서는 절대 조직 외부로 나가지 않습니다.

Step 01 — Point at the source
Step 01 — 소스 지정

Reads the document where it already lives
문서가 있는 곳에서 바로 읽습니다

LLM Capsule runs inside your environment and reads documents from the systems already there — SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, internal NOC console, or your own portal. No data migration. No external pipe. No architectural change.
LLM Capsule은 조직 내부 환경에서 실행되며, 이미 사용 중인 시스템에서 직접 문서를 읽습니다. SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, 사내 NOC 콘솔, 자체 포털 모두 지원합니다. 데이터 이전 없음. 외부 연결 없음. 아키텍처 변경 없음.

Existing systems invoke Capsule from inside the environment via REST / gRPC / JDBC / Graph API / on-prem API / embedded SDK / Slack App.
기존 시스템은 REST / gRPC / JDBC / Graph API / 온프레미스 API / 임베디드 SDK / Slack App을 통해 조직 내부에서 Capsule을 호출합니다.

In-environment | No data egress | Existing sources
내부 환경 실행 | 데이터 외부 전송 없음 | 기존 소스 연동

Step 02 — Define policy
Step 02 — 정책 정의

Pick the markers your business cares about
우리 회사에 맞는 마커를 직접 지정합니다

Pick from the starter pack — project codes, contract refs, network IDs, mission refs, financial terms, vulnerability labels — or write your own. Markers can be added, removed, and time-shifted tomorrow without redeploying. Every policy version is logged.
기본 제공 마커 세트에서 선택하거나 직접 작성합니다. 프로젝트 코드, 계약 참조, 네트워크 ID, 임무 참조, 금융 용어, 취약점 레이블 등을 활용할 수 있습니다. 재배포 없이 마커를 추가·삭제·시점 변경할 수 있으며, 모든 정책 버전은 이력으로 기록됩니다.

11 starter markers | Custom regex | Policy versions | RBAC scope
기본 마커 11개 | 커스텀 정규식 | 정책 버전 관리 | RBAC 범위 지정

Step 03 — Encapsulate
Step 03 — 캡슐화

Sensitive elements replaced. Structure preserved.
민감 요소 교체. 문서 구조 보존.

Inside the DMZ — Demilitarized Zone (Zone 2 of the four-zone architecture), sensitive elements are replaced with structure-preserving placeholders by the Enhanced Encapsulation Layer. Differential-privacy-based protection (epsilon-DP, Laplace noise, k-anonymity, NER masking) reduces re-identification risk. Tables, cross-references, and document hierarchy survive intact. See the four-zone architecture →
DMZ(비무장지대, 4존 아키텍처의 Zone 2) 내에서 Enhanced Encapsulation Layer가 민감 요소를 문서 구조 보존 플레이스홀더로 교체합니다. 차등 프라이버시 기반 보호(epsilon-DP, Laplace noise, k-익명성, NER 마스킹)로 재식별 위험을 낮춥니다. 표, 교차 참조, 문서 계층 구조는 그대로 유지됩니다. 4존 아키텍처 보기 →

epsilon-DP | Laplace noise | NER masking | Structure preserved
epsilon-DP | Laplace noise | NER 마스킹 | 문서 구조 보존

Step 04 — Process
Step 04 — 처리

Any LLM. Path A or Path B.
모든 LLM. Path A 또는 Path B.

The capsule (only the capsule — never the original) is routed through your approved external LLM (ChatGPT, Claude, Gemini, Perplexity) or to an on-prem local lightweight model for air-gapped workflows. Path is policy-driven per workflow.
캡슐만 전송됩니다. 원본은 절대 전달되지 않습니다. 승인된 외부 LLM(ChatGPT, Claude, Gemini, Perplexity) 또는 망분리 워크플로우용 온프레미스 경량 모델로 라우팅되며, 경로는 워크플로우별 정책에 따라 결정됩니다.

Path A · External | Path B · On-prem | Policy-routed
Path A · 외부 LLM | Path B · 온프레미스 | 정책 기반 라우팅

Step 05 — Restore
Step 05 — 복원

AI output comes back business-ready
AI 결과물이 즉시 사용 가능한 형태로 돌아옵니다

The AI's response is auto-restored locally — token map lookup, original value substitution, context re-binding, output validation. Real names, real figures, real references appear in the original ticket. Token map never leaves the enterprise. End user sees a finished, production-ready output.
AI 응답이 로컬에서 자동 복원됩니다. 토큰 맵 조회, 원본 값 치환, 컨텍스트 재결합, 출력 검증이 이루어집니다. 실제 이름, 실제 수치, 실제 참조값이 원본 티켓에 그대로 나타납니다. 토큰 맵은 절대 기업 외부로 나가지 않습니다. 최종 사용자는 완성된 운영 가능 결과물을 바로 받습니다.

Local restore | Context re-binding | Output validation | Audit logged
로컬 복원 | 컨텍스트 재결합 | 출력 검증 | 감사 이력 기록

---

## Section 04: Metrics Narrative

Performance — measured on real enterprise documents
성능 — 실제 기업 문서 기준 측정값

The numbers behind the demo
데모 뒤에 있는 실제 수치

2,200-character document benchmark. Tested across finance, healthcare, legal, and public sector workflows.
평균 2,200자 문서 기준 벤치마크. 금융·의료·법률·공공 분야 워크플로우에서 테스트 완료.

0.12s
0.12s

Per-page processing latency
페이지당 처리 시간

That's 
바로

120 milliseconds
120밀리초

 from raw document to encapsulated capsule — fast enough to plug into real-time NOC alerting, claims intake, and clinical workflows without breaking SLA. Most enterprise AI pilots stall on latency. We don't.
— 원본 문서에서 캡슐화 완료까지 걸리는 시간입니다. SLA를 깨지 않고 실시간 NOC 알림, 보험 청구 접수, 임상 워크플로우에 바로 연결할 수 있을 만큼 빠릅니다. 대부분의 기업 AI 파일럿은 지연 시간에 막힙니다. 저희는 다릅니다.

100%
100%

Restoration rate
복원율

Every encapsulation has a reversible local mapping. No ambiguity, no manual reconstruction.
모든 캡슐화에는 가역적 로컬 매핑이 존재합니다. 모호함 없음. 수동 복구 없음.

98%
98%

Output similarity
응답 유사도

Compared to AI processing the original document. Restoration preserves business meaning.
원본 문서를 AI가 직접 처리했을 때와 비교한 수치입니다. 복원을 거쳐도 비즈니스 의미가 그대로 유지됩니다.

98.1%
98.1%

Detection accuracy
탐지 정확도

Sensitive entity detection across structured and free-text fields, including custom markers.
구조화 필드와 자유 텍스트 필드 모두에서 민감 엔티티를 탐지합니다. 커스텀 마커 포함.

99.14%
99.14%

Workflow accuracy
워크플로우 정확도

End-to-end correctness — from raw input to restored output in production workflows.
원본 입력에서 복원된 출력까지, 실 운영 워크플로우 전 구간의 정확도입니다.

---

## Section 05: Workflow Gallery

Workflow gallery
워크플로우 갤러리

Same product. Six industries. Real customers.
동일한 제품. 6개 산업. 실제 고객사.

Each card below is a real workflow LLM Capsule runs in production. Click for the full case story.
아래 카드는 LLM Capsule이 실 운영 중인 실제 워크플로우입니다. 카드를 클릭하면 전체 사례를 확인할 수 있습니다.

Telecom
통신

NOC incident analysis on production traffic
실 운영 트래픽 대상 NOC 장애 분석

RCA generation on live ticket data with device IDs, circuit IDs, site references, alarm sequences, SLA-impact references, and subscriber identifiers encapsulated locally. No raw operational data exposure to external LLMs.
기기 ID, 회선 ID, 사이트 참조, 알람 시퀀스, SLA 영향 참조값, 가입자 식별자를 로컬에서 캡슐화한 상태로 라이브 티켓 데이터의 RCA를 생성합니다. 원본 운영 데이터는 외부 LLM에 절대 노출되지 않습니다.

SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12
SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12

Healthcare
의료

Radiology report drafting with PHI never leaving
PHI가 절대 외부로 나가지 않는 영상의학과 보고서 초안 작성

AI drafts radiology summaries from real clinical workflows. PHI encapsulated locally; restoration happens inside the hospital network. HIPAA-aligned.
실제 임상 워크플로우에서 AI가 영상의학 요약 보고서 초안을 작성합니다. PHI는 로컬에서 캡슐화되고, 복원은 병원 네트워크 내부에서 이루어집니다. HIPAA 기준에 부합합니다.

Ewha Womans University Medical Center (EUMC)
Ewha Womans University Medical Center (EUMC)

Finance / Insurance
금융 / 보험

AI claims processing with real customer data
실 고객 데이터 기반 AI 보험 청구 처리

AI-powered claim classification, damage assessment, and fraud detection on real policyholder data. No customer data leaves the insurer's environment.
실제 계약자 데이터를 대상으로 AI가 청구 분류, 손해 평가, 사기 탐지를 수행합니다. 고객 데이터는 보험사 환경 밖으로 절대 나가지 않습니다.

Kyobo · DB Insurance · IBK
교보 · DB손보 · IBK

Public Sector / Defense
공공 / 국방

Mission brief drafting on classified workflows
기밀 워크플로우 기반 임무 브리핑 초안 작성

AI drafts intelligence briefs and operational summaries on classified data. On-prem local execution path — zero external transmission. Full audit trail under command control.
AI가 기밀 데이터를 바탕으로 정보 브리핑과 작전 요약을 작성합니다. 온프레미스 로컬 실행 경로를 사용하며, 외부 전송이 전혀 없습니다. 지휘 통제 하에 완전한 감사 이력이 유지됩니다.

Ministry of National Defense (South Korea)
대한민국 국방부

---

## Section 06: Admin Console

Operational governance
운영 거버넌스

Admin console — every event, every policy, every model
관리자 콘솔 — 모든 이벤트, 모든 정책, 모든 모델

Enterprise AI governance is not a marketing claim. It's a console your audit team logs into.
기업 AI 거버넌스는 마케팅 문구가 아닙니다. 감사팀이 직접 로그인하는 콘솔입니다.

Audit
감사

Policies
정책

Tokens
토큰

Detection
탐지

Models
모델

10:24:18
10:24:18

INC-24091 · NOC-team-v2 · Path A
INC-24091 · NOC-team-v2 · Path A

restored
복원 완료

10:24:11
10:24:11

CLM-77241 · finance-v3 · Path A
CLM-77241 · finance-v3 · Path A

restored
복원 완료

10:23:58
10:23:58

MR-440-Z · defense-v1 · Path B
MR-440-Z · defense-v1 · Path B

restored
복원 완료

10:23:42
10:23:42

Policy NOC-team updated to v2
정책 NOC-team v2로 업데이트

policy
정책

10:23:30
10:23:30

Detection · custom marker added
탐지 · 커스텀 마커 추가됨

policy
정책

One pane. Five tabs. Full chain of custody.
하나의 화면. 5개 탭. 완전한 처리 이력.

Every encapsulation, processing, and restoration event lands here. Audit teams can replay any event end-to-end — what was protected, which policy version was active, which model processed it, what was restored.
모든 캡슐화·처리·복원 이벤트가 여기에 기록됩니다. 감사팀은 어떤 이벤트든 처음부터 끝까지 재현할 수 있습니다. 무엇이 보호되었는지, 어떤 정책 버전이 활성 상태였는지, 어떤 모델이 처리했는지, 무엇이 복원되었는지 모두 확인 가능합니다.

Audit
감사

every event with timestamps and policy version
타임스탬프와 정책 버전이 포함된 모든 이벤트 기록

Policies
정책

version history, scope, and RBAC
버전 이력, 적용 범위, RBAC 설정

Tokens
토큰

model usage, cost, and per-team breakdown
모델 사용량, 비용, 팀별 세부 내역

Detection
탐지

what was classified as sensitive, and how
민감 정보로 분류된 항목과 분류 근거

Models
모델

health, throughput, comparative output quality
상태, 처리량, 비교 출력 품질

---

## Section 07: Capability 06

Capability 06 · Deep dive
Capability 06 · 심층 분석

You define what's sensitive —
민감정보는 직접 정의합니다 —

and you can change it tomorrow.
그리고 내일 바로 바꿀 수 있습니다.

Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Standard PII categories don't move; your business does. LLM Capsule lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve — with full audit trail of which marker was protected when.
어제는 네트워크 로그였고, 오늘은 M&A 코드명이며, 다음 분기엔 새 규제 당국의 요건이 추가될 수 있습니다. 표준 PII 카테고리는 고정되어 있지만, 비즈니스 현실은 계속 바뀝니다. LLM Capsule은 운영 환경과 규제 변화에 맞춰 팀이 기밀 마커를 직접 정의·추가·삭제·버전 관리할 수 있게 합니다. 어떤 마커가 언제 보호되었는지 완전한 감사 이력과 함께.

DEFINE
정의

Beyond generic PII
범용 PII를 넘어서

Project codes, deal terms, internal IDs, contract references, network identifiers, OT asset IDs, mission refs. Your team defines the markers — not a vendor's fixed list.
프로젝트 코드, 거래 조건, 내부 ID, 계약 참조, 네트워크 식별자, OT 자산 ID, 임무 참조. 마커는 벤더의 고정 목록이 아니라 우리 팀이 직접 정의합니다.

VERSION
버전 관리

Time-shift the policy
정책을 시점에 맞춰 전환합니다

Add a new marker today, retire one next quarter. Policy versioning + immediate enforcement. Audit log records exactly which marker was active for every encapsulation event.
오늘 마커를 추가하고, 다음 분기에 하나를 폐기합니다. 정책 버전 관리와 즉각적인 적용이 함께 이루어집니다. 모든 캡슐화 이벤트에 대해 어떤 마커가 활성 상태였는지 감사 로그에 정확히 기록됩니다.

SCOPE
범위 지정

Per workflow, team, data type
워크플로우·팀·데이터 유형별 정책 적용

NOC team, oncology unit, OT operations, M&A — different policies, same governance. RBAC + scoped enforcement + per-policy audit. One LLM Capsule, many policies.
NOC팀, 종양학팀, OT 운영팀, M&A — 각기 다른 정책, 동일한 거버넌스 체계. RBAC + 범위별 적용 + 정책별 감사. LLM Capsule 하나로 여러 정책을 운용합니다.

---

## Section 08: CTA Strip

See it on your own documents.
우리 회사 문서로 직접 확인하세요.

Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes.
실제 워크플로우를 가져오시면 됩니다. 30분 안에 고객사 환경의 샘플 문서에 Capsule을 직접 설정해 드립니다.

Request a Live Demo
라이브 데모 요청

View Architecture
아키텍처 보기

View Pricing
요금제 보기
