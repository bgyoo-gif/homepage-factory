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
[TODO:KO]

### Connector · 2→3 Label
conn2Label
Protected Data Out
[TODO:KO]

### Connector · 3→4 Label
conn3Label
AI Response (tokenized)
[TODO:KO]

---

## Z1

### Z1 · Step Title
step1Title
Source Data
[TODO:KO]

### Z1 · Zone Label
z1Label
Corporate Internal Network
[TODO:KO]

### Z1 · Zone Sub
z1Sub
On-prem DB · Enterprise Systems
[TODO:KO]

### Z1 · DB Group Tag
z1GroupTag
Unstructured
[TODO:KO]

### Z1 · DB1 Sub (use <br/>)
z1Db1Sub
Customer Data<br/>Personally Identifiable Info
[TODO:KO]

### Z1 · DB2 Sub (use <br/>)
z1Db2Sub
Ticket Data<br/>CS Tickets / Status
[TODO:KO]

### Z1 · DB3 Sub (use <br/>)
z1Db3Sub
Detail Data<br/>Unstructured Claims
[TODO:KO]

### Z1 · Raw Input Block Label
z1FieldsLabel
Raw Input Fields
[TODO:KO]

### Z1 · Field 1 Name
z1F1Name
Customer
[TODO:KO]

### Z1 · Field 3 Name
z1F2Name
Free Text
[TODO:KO]

### Z1 · Field 2 Name
z1F2NameMid
Ticket
[TODO:KO]

### Z1 · Guardrail Title
z1GuardStrong
PII guardrails protect fields. Enterprises run on structures.
[TODO:KO]

### Z1 · Guardrail Body (HTML)
z1GuardBody
We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.
[TODO:KO]

### Z1 · Plug-in Tag
z1PluginTag
Plug-in for AI Teams
[TODO:KO]

### Z1 · Sys 1 Sub
z1Sys1Sub
SAP·Oracle
[TODO:KO]

### Z1 · Sys 2 Sub
z1Sys2Sub
Salesforce
[TODO:KO]

### Z1 · Sys 3 Sub
z1Sys3Sub
Vector DB
[TODO:KO]

### Z1 · Sys 4 Sub
z1Sys4Sub
Oracle
[TODO:KO]

### Z1 · Sys 5 Sub
z1Sys5Sub
Jira·SN
[TODO:KO]

### Z1 · Sys 6 Sub
z1Sys6Sub
SharePoint
[TODO:KO]

### Z1 · Sys 1 Name (ERP)
z1Sys1Name
ERP
[TODO:KO]

### Z1 · Sys 2 Name (CRM)
z1Sys2Name
CRM
[TODO:KO]

### Z1 · Sys 3 Name (RAG)
z1Sys3Name
RAG
[TODO:KO]

### Z1 · Sys 4 Name (Legacy)
z1Sys4Name
Legacy
[TODO:KO]

### Z1 · Sys 5 Name (Ticket)
z1Sys5Name
Ticket
[TODO:KO]

### Z1 · Sys 6 Name (DMS)
z1Sys6Name
DMS
[TODO:KO]

### Z1 · API List
z1SysApi
REST · gRPC · JDBC · Graph API
[TODO:KO]

### Z1 · Zero-Mod Title
z1ZeroModStrong
Zero System Modification
[TODO:KO]

### Z1 · Zero-Mod Body
z1ZeroModBody
Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems
[TODO:KO]

---

## Z2

### Z2 · Step Title
step2Title
DP Encapsulation
[TODO:KO]

### Z2 · Zone Label
z2Label
DMZ — Differential Privacy
[TODO:KO]

### Z2 · Zone Sub
z2Sub
Same Org · EU Region · GDPR Ready
[TODO:KO]

### Z2 · DB Group Tag
z2GroupTag
Encapsulation Flow
[TODO:KO]

### Z2 · IN Sub
z2InSub
Raw Input<br/>Unstructured Data
[TODO:KO]

### Z2 · PROCESS Sub
z2ProcessSub
DP Engine<br/>Differential Privacy
[TODO:KO]

### Z2 · OUT Sub
z2OutSub
Encapsulated<br/>Token Capsule
[TODO:KO]

### Z2 · Block Label
z2BlockLabel
Encapsulation
[TODO:KO]

### Z2 · Protected Badge
z2ProtectedBadge
✓ Protected
[TODO:KO]

### Z2 · Field 1 Name
z2F1Name
Name
[TODO:KO]

### Z2 · Field 2 Name
z2F2Name
Champ Id
[TODO:KO]

### Z2 · Field 3 Name
z2F3Name
Free Text
[TODO:KO]

### Z2 · DP Engine Name
z2DpEngineName
DP Engine
[TODO:KO]

### Z2 · DP Engine Badge
z2DpEngineBadge
epsilon-DP Active
[TODO:KO]

### Z2 · DP Tech 1
z2DpTech1
Noise Injection (Laplace)
[TODO:KO]

### Z2 · DP Tech 2
z2DpTech2
k-Anonymity Enforcement
[TODO:KO]

### Z2 · DP Tech 3
z2DpTech3
Semantic Tokenization
[TODO:KO]

### Z2 · DP Tech 4
z2DpTech4
Free-Text NER Masking
[TODO:KO]

### Z2 · DMZ Title
z2DmzStrong
DMZ Guarantee
[TODO:KO]

### Z2 · DMZ Body
z2DmzBody
Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>
[TODO:KO]

---

## Z3

### Z3 · Step Title
step3Title
AI Processing
[TODO:KO]

### Z3 · Zone Label
z3Label
In-House Team
[TODO:KO]

### Z3 · Zone Sub
z3Sub
Same Org · Anonymized LLM Proxy
[TODO:KO]

### Z3 · Pipeline Block Label
z3PipelineLabel
LLM Pipeline
[TODO:KO]

### Z3 · Proxy Badge
z3ProxyBadge
LLM-a-Proxy
[TODO:KO]

### Z3 · Proxy Sub
z3ProxySub
Anonymized Routing
[TODO:KO]

### Z3 · Path A Label
z3PathA
Path A · External
[TODO:KO]

### Z3 · Path B Label
z3PathB
Path B · On-prem
[TODO:KO]

### Z3 · Deploy A1 (External 1)
z3DeployA1
Public cloud
[TODO:KO]

### Z3 · Deploy A2 (External 2)
z3DeployA2
Region-hosted
[TODO:KO]

### Z3 · Deploy B1 (On-prem 1)
z3DeployB1
Private
[TODO:KO]

### Z3 · Deploy B2 (On-prem 2)
z3DeployB2
On-prem
[TODO:KO]

### Z3 · Swap Note
z3SwapNote
swap any model — capsule contract stays the same
[TODO:KO]

### Z3 · Guardrail Title
z3GuardStrong
No Direct Access to Source DB
[TODO:KO]

### Z3 · Guardrail Body
z3GuardBody
AI teams never touch the source database. They only receive structure-preserved, differentially-private data
[TODO:KO]

### Z3 · Isolation Block Label
z3IsoLabel
Privacy Isolation Module
[TODO:KO]

### Z3 · PDESC Head
z3PdescHead
PDESC / ISOLA
[TODO:KO]

### Z3 · PDESC Item 1
z3PdescItem1
Privacy Descriptor
[TODO:KO]

### Z3 · PDESC Item 2
z3PdescItem2
Isolated Computation Zone
[TODO:KO]

### Z3 · PDESC Item 3
z3PdescItem3
Output De-identification
[TODO:KO]

### Z3 · PDESC Foot
z3PdescFoot
Re-identification attempts contained · Output validated
[TODO:KO]

### Z3 · Compliance Label
z3ComplianceLabel
Compliance
[TODO:KO]

### Z3 · Compliance Badge 1
z3Compliance1
EU GDPR
[TODO:KO]

### Z3 · Compliance Badge 2
z3Compliance2
EU Region
[TODO:KO]

---

## Z4

### Z4 · Step Title
step4Title
Local Auto Reconstruction
[TODO:KO]

### Z4 · Zone Label
z4Label
Local — Auto Reconstruction
[TODO:KO]

### Z4 · Zone Sub
z4Sub
Internal Only · No External Egress
[TODO:KO]

### Z4 · DB Group Tag
z4GroupTag
Reconstruction Flow
[TODO:KO]

### Z4 · IN Sub
z4InSub
AI Token<br/>Tokenized Response
[TODO:KO]

### Z4 · PROCESS Sub
z4ProcessSub
Reconstruction<br/>Local Restoration
[TODO:KO]

### Z4 · OUT Sub
z4OutSub
Original Value<br/>Business-Ready
[TODO:KO]

### Z4 · Token Block Label
z4BlockLabel
Token → Original
[TODO:KO]

### Z4 · Field 1 Name
z4F1Name
Customer
[TODO:KO]

### Z4 · Field 2 Name
z4F2Name
Ticket
[TODO:KO]

### Z4 · Field 3 Name
z4F3Name
Details
[TODO:KO]

### Z4 · Recon Engine Name
z4ReconName
Reconstruction
[TODO:KO]

### Z4 · Recon Engine Badge
z4ReconBadge
Local Only
[TODO:KO]

### Z4 · Recon Tech 1
z4ReconTech1
Token Map Lookup
[TODO:KO]

### Z4 · Recon Tech 2
z4ReconTech2
Original Value Restore
[TODO:KO]

### Z4 · Recon Tech 3
z4ReconTech3
Context Re-binding
[TODO:KO]

### Z4 · Recon Tech 4
z4ReconTech4
Output Validation
[TODO:KO]

### Z4 · Local Guarantee Title
z4LocalStrong
Local Reconstruction Guarantee
[TODO:KO]

### Z4 · Local Guarantee Body
z4LocalBody
Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>
[TODO:KO]

### Z4 · Output Properties Label
z4OutputLabel
Output Properties
[TODO:KO]

### Z4 · Output Check 1
z4OutCheck1
Original Values Restored
[TODO:KO]

### Z4 · Output Check 2
z4OutCheck2
Zero External Exposure
[TODO:KO]

### Z4 · Output Check 3
z4OutCheck3
Context Fully Preserved
[TODO:KO]

### Z4 · Output Check 4
z4OutCheck4
Business-Ready Output
[TODO:KO]

### Z4 · Chip 1
z4Chip1
Auto Restore
[TODO:KO]

### Z4 · Chip 2
z4Chip2
Local Only
[TODO:KO]

### Z4 · Chip 3
z4Chip3
Data Residency
[TODO:KO]

---

## Core

### Core · Section Title
coreTitle
6 Core Capabilities
[TODO:KO]

### Core · Workflow Group Label
coreWorkflowGroup
What Makes The Workflow Run
[TODO:KO]

### Core · Approval Group Label
coreApprovalGroup
What Gets The Approval
[TODO:KO]

### Core · Bottom Strip
coreStrip
01 and 02 lead the conversation. 05 and 06 anchor the approval.
[TODO:KO]

---

## Core 01

### Core 01 · Name
core1Name
Structure-Preserving
[TODO:KO]

### Core 01 · Description
core1Desc
Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.
[TODO:KO]

---

## Core 02

### Core 02 · Name
core2Name
Enterprise Environment Execution
[TODO:KO]

### Core 02 · Description
core2Desc
Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.
[TODO:KO]

---

## Core 03

### Core 03 · Name
core3Name
Business-Ready Reconstruction
[TODO:KO]

### Core 03 · Description
core3Desc
AI output is restored with real values. The result goes straight back to the originating ticket or workflow.
[TODO:KO]

---

## Core 04

### Core 04 · Name
core4Name
Enterprise Context Control
[TODO:KO]

### Core 04 · Description
core4Desc
Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.
[TODO:KO]

---

## Core 05

### Core 05 · Name
core5Name
Zero Exposure &amp; Audit
[TODO:KO]

### Core 05 · Description
core5Desc
Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.
[TODO:KO]

---

## Core 06

### Core 06 · Name
core6Name
Time-Shifting Policy
[TODO:KO]

### Core 06 · Description
core6Desc
Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.
[TODO:KO]
