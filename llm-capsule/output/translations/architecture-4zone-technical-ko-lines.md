# architecture_4zone_technical-develop — 한국어 번역 (literal)

각 항목 = Framer Properties 패널의 Props 1개에 해당.
순서대로 입력하면 그대로 적용됨.

---

## Section

### Section · Eyebrow
eyebrow
Technical view · zone-based architecture
기술적 관점 · 존 기반 아키텍처

### Section · Title
sectionTitle
The same architecture, in technical view
같은 아키텍처, 기술적 관점에서

### Section · Description
sectionDescription
For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.
아키텍트와 보안 검토자를 위한 자료 — 운영 데이터, 캡슐화, 그리고 어떤 LLM이든 어떻게 상호작용하는지에 대한 존 기반 전체 뷰.

---

## Card 1

### Card 1 · Num
card1Num
Zone 1 · Corporate Internal Network
Zone 1 · 기업 내부 네트워크

### Card 1 · Title
card1Title
Where the operational systems already live
운영 시스템이 이미 있는 곳

### Card 1 · Description
card1Description
Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
기존 엔터프라이즈 시스템 — ERP, CRM, 티켓팅, DMS / ECM, 레거시 DB, RAG 파이프라인 — 그대로 유지됩니다. 마이그레이션은 없습니다. Capsule은 소스에 따라 REST, gRPC, JDBC, 또는 Graph API를 통해 이들로부터 읽어옵니다.

---

## Card 2

### Card 2 · Num
card2Num
Zone 2 · DMZ — Demilitarized Zone
Zone 2 · DMZ — 비무장지대

### Card 2 · Title
card2Title
Where encapsulation happens
캡슐화가 일어나는 곳

### Card 2 · Description
card2Description
The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
Enhanced Encapsulation Layer가 민감한 요소를 탐지하고, 문서 구조 보존·차등 프라이버시 기반 보호로 안전한 토큰으로 대체한 뒤, 캡슐을 라우팅 결정에 전달합니다. 원본 값은 로컬 토큰 맵에 보관된 채 남습니다.

---

## Card 3

### Card 3 · Num
card3Num
Zone 3 · In-House Team
Zone 3 · 사내 팀

### Card 3 · Title
card3Title
Where governance and routing happen
거버넌스와 라우팅이 일어나는 곳

### Card 3 · Description
card3Description
Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
조직 정책, 권한, 도메인 컨텍스트가 캡슐을 어디에서 처리할지 결정합니다 — 승인된 외부 LLM(Path A) 또는 온프레미스 로컬 모델(Path B). 결정은 워크플로우별 정책 기반이며, 완전한 감사 이력은 조직 내부에 보관됩니다.

---

## Card 4

### Card 4 · Num
card4Num
Zone 4 · Local — Auto Reconstruction
Zone 4 · 로컬 — 자동 복원

### Card 4 · Title
card4Title
Where the AI response becomes Business-Ready output
AI 응답이 비즈니스에 바로 쓰일 수 있는 출력이 되는 곳

### Card 4 · Description
card4Description
The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
AI 응답은 조직 내부에서만 토큰에서 원본 값으로 자동 복원됩니다. 신뢰 경계를 벗어난 데이터는 외부에서 복원될 수 없습니다. 복원된 출력은 원래의 워크플로우로 다시 전달됩니다.

---

## Connector

### Connector · 1→2 Label
conn1Label
Unstructured Data In
비정형 데이터 입력

### Connector · 2→3 Label
conn2Label
Protected Data Out
보호된 데이터 출력

### Connector · 3→4 Label
conn3Label
AI Response (tokenized)
AI 응답 (토큰화)

---

## Z1

### Z1 · Step Title
step1Title
Source Data
소스 데이터

### Z1 · Zone Label
z1Label
Corporate Internal Network
기업 내부 네트워크

### Z1 · Zone Sub
z1Sub
On-prem DB · Enterprise Systems
온프레미스 DB · 엔터프라이즈 시스템

### Z1 · DB Group Tag
z1GroupTag
Unstructured
비정형

### Z1 · DB1 Sub (use <br/>)
z1Db1Sub
Customer Data<br/>Personally Identifiable Info
고객 데이터<br/>개인 식별 정보(PII)

### Z1 · DB2 Sub (use <br/>)
z1Db2Sub
Ticket Data<br/>CS Tickets / Status
티켓 데이터<br/>CS 티켓 / 상태

### Z1 · DB3 Sub (use <br/>)
z1Db3Sub
Detail Data<br/>Unstructured Claims
상세 데이터<br/>비정형 클레임

### Z1 · Raw Input Block Label
z1FieldsLabel
Raw Input Fields
원본 입력 필드

### Z1 · Field 1 Name
z1F1Name
Customer
고객

### Z1 · Field 3 Name
z1F2Name
Free Text
자유 입력

### Z1 · Field 2 Name
z1F2NameMid
Ticket
티켓

### Z1 · Guardrail Title
z1GuardStrong
PII guardrails protect fields. Enterprises run on structures.
PII 가드레일은 필드를 보호합니다. 기업은 구조 위에서 운영됩니다.

### Z1 · Guardrail Body (HTML)
z1GuardBody
We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.
PII 필터를 비판하는 것이 아닙니다. 우리는 <b>다른 범주의 데이터</b>를 다룹니다 — 단순 필드 수준 마스킹으로는 보존할 수 없는 테이블 스키마, 상호 참조, 알람 시퀀스, 티켓 스레드입니다.

### Z1 · Plug-in Tag
z1PluginTag
Plug-in for AI Teams
AI 팀을 위한 플러그인

### Z1 · Sys 1 Sub
z1Sys1Sub
SAP·Oracle
SAP·Oracle

### Z1 · Sys 2 Sub
z1Sys2Sub
Salesforce
Salesforce

### Z1 · Sys 3 Sub
z1Sys3Sub
Vector DB
Vector DB

### Z1 · Sys 4 Sub
z1Sys4Sub
Oracle
Oracle

### Z1 · Sys 5 Sub
z1Sys5Sub
Jira·SN
Jira·SN

### Z1 · Sys 6 Sub
z1Sys6Sub
SharePoint
SharePoint

### Z1 · Sys 1 Name (ERP)
z1Sys1Name
ERP
ERP

### Z1 · Sys 2 Name (CRM)
z1Sys2Name
CRM
CRM

### Z1 · Sys 3 Name (RAG)
z1Sys3Name
RAG
RAG

### Z1 · Sys 4 Name (Legacy)
z1Sys4Name
Legacy
레거시

### Z1 · Sys 5 Name (Ticket)
z1Sys5Name
Ticket
티켓

### Z1 · Sys 6 Name (DMS)
z1Sys6Name
DMS
DMS

### Z1 · API List
z1SysApi
REST · gRPC · JDBC · Graph API
REST · gRPC · JDBC · Graph API

### Z1 · Zero-Mod Title
z1ZeroModStrong
Zero System Modification
시스템 수정 없음

### Z1 · Zero-Mod Body
z1ZeroModBody
Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems
기존 ERP, CRM, 레거시 시스템에 어떠한 수정도 없이 단일 API 호출로 연동됩니다.

---

## Z2

### Z2 · Step Title
step2Title
DP Encapsulation
DP 캡슐화

### Z2 · Zone Label
z2Label
DMZ — Differential Privacy
DMZ — 차등 프라이버시

### Z2 · Zone Sub
z2Sub
Same Org · EU Region · GDPR Ready
동일 조직 · EU 리전 · GDPR 대응

### Z2 · DB Group Tag
z2GroupTag
Encapsulation Flow
캡슐화 플로우

### Z2 · IN Sub
z2InSub
Raw Input<br/>Unstructured Data
원본 입력<br/>비정형 데이터

### Z2 · PROCESS Sub
z2ProcessSub
DP Engine<br/>Differential Privacy
DP 엔진<br/>차등 프라이버시

### Z2 · OUT Sub
z2OutSub
Encapsulated<br/>Token Capsule
캡슐화됨<br/>토큰 캡슐

### Z2 · Block Label
z2BlockLabel
Encapsulation
캡슐화

### Z2 · Protected Badge
z2ProtectedBadge
✓ Protected
✓ 보호됨

### Z2 · Field 1 Name
z2F1Name
Name
이름

### Z2 · Field 2 Name
z2F2Name
Champ Id
Champ Id

### Z2 · Field 3 Name
z2F3Name
Free Text
자유 입력

### Z2 · DP Engine Name
z2DpEngineName
DP Engine
DP 엔진

### Z2 · DP Engine Badge
z2DpEngineBadge
epsilon-DP Active
epsilon-DP 활성

### Z2 · DP Tech 1
z2DpTech1
Noise Injection (Laplace)
노이즈 주입 (Laplace)

### Z2 · DP Tech 2
z2DpTech2
k-Anonymity Enforcement
k-Anonymity 적용

### Z2 · DP Tech 3
z2DpTech3
Semantic Tokenization
의미 기반 토큰화

### Z2 · DP Tech 4
z2DpTech4
Free-Text NER Masking
자유 텍스트 NER 마스킹

### Z2 · DMZ Title
z2DmzStrong
DMZ Guarantee
DMZ 보장

### Z2 · DMZ Body
z2DmzBody
Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>
단순 캡슐화를 넘어섭니다. 차등 프라이버시 기법으로 원본 민감 데이터를 <b>수학적으로 복원 불가능하게</b> 만듭니다.

---

## Z3

### Z3 · Step Title
step3Title
AI Processing
AI 처리

### Z3 · Zone Label
z3Label
In-House Team
사내 팀

### Z3 · Zone Sub
z3Sub
Same Org · Anonymized LLM Proxy
동일 조직 · 익명화 LLM 프록시

### Z3 · Pipeline Block Label
z3PipelineLabel
LLM Pipeline
LLM 파이프라인

### Z3 · Proxy Badge
z3ProxyBadge
LLM-a-Proxy
LLM-a-Proxy

### Z3 · Proxy Sub
z3ProxySub
Anonymized Routing
익명화 라우팅

### Z3 · Path A Label
z3PathA
Path A · External
Path A · 외부

### Z3 · Path B Label
z3PathB
Path B · On-prem
Path B · 온프레미스

### Z3 · Deploy A1 (External 1)
z3DeployA1
Public cloud
퍼블릭 클라우드

### Z3 · Deploy A2 (External 2)
z3DeployA2
Region-hosted
리전 호스팅

### Z3 · Deploy B1 (On-prem 1)
z3DeployB1
Private
프라이빗

### Z3 · Deploy B2 (On-prem 2)
z3DeployB2
On-prem
온프레미스

### Z3 · Swap Note
z3SwapNote
swap any model — capsule contract stays the same
어떤 모델로 교체해도 — 캡슐 계약은 그대로입니다.

### Z3 · Guardrail Title
z3GuardStrong
No Direct Access to Source DB
소스 DB 직접 접근 없음

### Z3 · Guardrail Body
z3GuardBody
AI teams never touch the source database. They only receive structure-preserved, differentially-private data
AI 팀은 소스 데이터베이스에 절대 접근하지 않습니다. 구조 보존·차등 프라이버시 적용 데이터만 전달받습니다.

### Z3 · Isolation Block Label
z3IsoLabel
Privacy Isolation Module
프라이버시 격리 모듈

### Z3 · PDESC Head
z3PdescHead
PDESC / ISOLA
PDESC / ISOLA

### Z3 · PDESC Item 1
z3PdescItem1
Privacy Descriptor
프라이버시 디스크립터

### Z3 · PDESC Item 2
z3PdescItem2
Isolated Computation Zone
격리 연산 존

### Z3 · PDESC Item 3
z3PdescItem3
Output De-identification
출력 비식별화

### Z3 · PDESC Foot
z3PdescFoot
Re-identification attempts contained · Output validated
재식별 시도 차단 · 출력 검증 완료

### Z3 · Compliance Label
z3ComplianceLabel
Compliance
컴플라이언스

### Z3 · Compliance Badge 1
z3Compliance1
EU GDPR
EU GDPR

### Z3 · Compliance Badge 2
z3Compliance2
EU Region
EU 리전

---

## Z4

### Z4 · Step Title
step4Title
Local Auto Reconstruction
로컬 자동 복원

### Z4 · Zone Label
z4Label
Local — Auto Reconstruction
로컬 — 자동 복원

### Z4 · Zone Sub
z4Sub
Internal Only · No External Egress
내부 전용 · 외부 반출 없음

### Z4 · DB Group Tag
z4GroupTag
Reconstruction Flow
복원 플로우

### Z4 · IN Sub
z4InSub
AI Token<br/>Tokenized Response
AI 토큰<br/>토큰화된 응답

### Z4 · PROCESS Sub
z4ProcessSub
Reconstruction<br/>Local Restoration
복원<br/>로컬 복구

### Z4 · OUT Sub
z4OutSub
Original Value<br/>Business-Ready
원본 값<br/>비즈니스 즉시 활용

### Z4 · Token Block Label
z4BlockLabel
Token → Original
토큰 → 원본

### Z4 · Field 1 Name
z4F1Name
Customer
고객

### Z4 · Field 2 Name
z4F2Name
Ticket
티켓

### Z4 · Field 3 Name
z4F3Name
Details
상세

### Z4 · Recon Engine Name
z4ReconName
Reconstruction
복원

### Z4 · Recon Engine Badge
z4ReconBadge
Local Only
로컬 전용

### Z4 · Recon Tech 1
z4ReconTech1
Token Map Lookup
토큰 맵 조회

### Z4 · Recon Tech 2
z4ReconTech2
Original Value Restore
원본 값 복원

### Z4 · Recon Tech 3
z4ReconTech3
Context Re-binding
컨텍스트 재결합

### Z4 · Recon Tech 4
z4ReconTech4
Output Validation
출력 검증

### Z4 · Local Guarantee Title
z4LocalStrong
Local Reconstruction Guarantee
로컬 복원 보장

### Z4 · Local Guarantee Body
z4LocalBody
Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>
토큰 맵은 로컬 스토리지에만 존재합니다 · <b>즉시 비즈니스 활용 가능한 출력을 제공합니다</b>

### Z4 · Output Properties Label
z4OutputLabel
Output Properties
출력 속성

### Z4 · Output Check 1
z4OutCheck1
Original Values Restored
원본 값 복원 완료

### Z4 · Output Check 2
z4OutCheck2
Zero External Exposure
외부 노출 없음

### Z4 · Output Check 3
z4OutCheck3
Context Fully Preserved
컨텍스트 완전 보존

### Z4 · Output Check 4
z4OutCheck4
Business-Ready Output
비즈니스 즉시 활용 출력

### Z4 · Chip 1
z4Chip1
Auto Restore
자동 복원

### Z4 · Chip 2
z4Chip2
Local Only
로컬 전용

### Z4 · Chip 3
z4Chip3
Data Residency
데이터 레지던시

---

## Core

### Core · Section Title
coreTitle
6 Core Capabilities
6가지 핵심 기능

### Core · Workflow Group Label
coreWorkflowGroup
What Makes The Workflow Run
워크플로우를 작동시키는 것

### Core · Approval Group Label
coreApprovalGroup
What Gets The Approval
승인을 이끌어내는 것

### Core · Bottom Strip
coreStrip
01 and 02 lead the conversation. 05 and 06 anchor the approval.
01·02가 대화를 이끌고, 05·06이 승인을 뒷받침합니다.

---

## Core 01

### Core 01 · Name
core1Name
Structure-Preserving
구조 보존

### Core 01 · Description
core1Desc
Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.
테이블, 로그, 상호 참조, 알람 시퀀스가 그대로 유지됩니다. AI는 텍스트뿐만 아니라 구조를 읽습니다.

---

## Core 02

### Core 02 · Name
core2Name
Enterprise Environment Execution
엔터프라이즈 환경 내 실행

### Core 02 · Description
core2Desc
Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.
고객사 환경 내부에 배포됩니다. API, SDK, 커넥터, 또는 리버스 프록시로 연결합니다. 트래픽 재라우팅이 없습니다.

---

## Core 03

### Core 03 · Name
core3Name
Business-Ready Reconstruction
비즈니스 즉시 활용 복원

### Core 03 · Description
core3Desc
AI output is restored with real values. The result goes straight back to the originating ticket or workflow.
AI 출력이 실제 값으로 복원됩니다. 결과물은 원래의 티켓이나 워크플로우로 바로 반환됩니다.

---

## Core 04

### Core 04 · Name
core4Name
Enterprise Context Control
조직 정의 민감정보

### Core 04 · Description
core4Desc
Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.
IT 관리자가 직접 민감 기준을 정의합니다. 커스텀 마커, 정규식 규칙, 등급 정책을 5분 안에 설정합니다.

---

## Core 05

### Core 05 · Name
core5Name
Zero Exposure &amp; Audit
Zero Exposure &amp; 감사

### Core 05 · Description
core5Desc
Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.
원본 운영 데이터는 내부에 머뭅니다. 모든 행위가 기록·타임스탬프 처리되며 SIEM으로 내보낼 수 있습니다.

---

## Core 06

### Core 06 · Name
core6Name
Time-Shifting Policy
시간 변동 정책

### Core 06 · Description
core6Desc
Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.
민감도 기준은 시간이 지남에 따라 변합니다. Capsule은 지속적인 규제 대응을 위해 모든 마커와 정책을 버전 관리합니다.
