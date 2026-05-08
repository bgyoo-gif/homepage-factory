# glossary/connector-lane — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Connector Lane
커넥터 레인

How LLM Capsule reads the document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.
LLM Capsule이 고객 환경 내에 이미 존재하는 문서, 티켓, 운영 소스를 읽는 방식 — 원본 데이터는 절대 해당 환경 밖으로 나가지 않습니다.

GLOSSARY
GLOSSARY

---

## Section 02: Definition

Definition
정의

The connector lane describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is not a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.
커넥터 레인은 고객 환경(온프레미스, 망분리, 또는 VPC) 내부에서 실행되는 LLM Capsule이 해당 환경에 이미 존재하는 문서, 티켓, 운영 시스템을 읽는 방식을 설명합니다. 외부에서 고객 시스템을 호출하는 SaaS 통합 플랫폼이 아닙니다. API 마켓플레이스도 아닙니다.

---

## Section 03: Article Body

<h2>What it is — and what it isn't</h2>
<h2>커넥터 레인이란 — 그리고 아닌 것</h2>

<p>The connector lane is the in-environment reading surface. Capsule sits next to existing systems on the customer's network, reads the document or record where it already is, encapsulates it locally, and returns the restored output to the originating workflow. Raw operational data does not traverse a public network or an external SaaS endpoint to reach Capsule.</p>
<p>커넥터 레인은 환경 내부의 읽기 접점입니다. Capsule은 고객 네트워크 위에서 기존 시스템 옆에 위치하여, 문서나 레코드가 있는 그 자리에서 직접 읽고, 로컬에서 캡슐화한 뒤, 복원된 결과물을 원래 워크플로우로 반환합니다. 원본 운영 데이터는 Capsule에 도달하기 위해 공용 네트워크나 외부 SaaS 엔드포인트를 통과하지 않습니다.</p>

<p>This is the opposite of how a typical "integration platform" works. Capsule is not an external service that pulls data out of customer systems — it is a layer running inside the environment those systems already trust.</p>
<p>이는 일반적인 "통합 플랫폼"과 정반대입니다. Capsule은 고객 시스템에서 데이터를 꺼내는 외부 서비스가 아닙니다 — 해당 시스템들이 이미 신뢰하는 환경 내부에서 실행되는 레이어입니다.</p>

<h2>What it reads</h2>
<h2>읽는 대상</h2>

<li><strong>Document and record systems</strong> — SharePoint, internal DMS, S3 / blob storage in the customer's VPC, file repositories</li>
<li><strong>문서 및 레코드 시스템</strong> — SharePoint, 내부 DMS, 고객 VPC의 S3 / blob 스토리지, 파일 저장소</li>

<li><strong>Ticket and ITSM systems</strong> — ServiceNow, Jira, Remedy, in-house ticketing</li>
<li><strong>티켓 및 ITSM 시스템</strong> — ServiceNow, Jira, Remedy, 사내 티켓 시스템</li>

<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, in-house systems</li>
<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, 사내 시스템</li>

<li><strong>Healthcare records</strong> — hospital information systems, clinical record stores, imaging metadata, all read inside the hospital network</li>
<li><strong>의료 기록</strong> — 병원 정보 시스템, 임상 기록 저장소, 영상 메타데이터 — 모두 병원 네트워크 내부에서 읽습니다</li>

<li><strong>Operational systems</strong> — NOC consoles, OSS / BSS, OT historians, log platforms read in DMZ and processed in environment</li>
<li><strong>운영 시스템</strong> — NOC 콘솔, OSS / BSS, OT 히스토리안, DMZ에서 읽고 환경 내에서 처리하는 로그 플랫폼</li>

<li><strong>Custom and legacy systems</strong> — internal databases, file drops, queues, in-house tooling — Capsule adapts to what the customer already runs</li>
<li><strong>커스텀 및 레거시 시스템</strong> — 내부 데이터베이스, 파일 드롭, 큐, 사내 도구 — Capsule은 고객이 이미 운영 중인 환경에 맞게 적응합니다</li>

<h2>Why this distinction matters</h2>
<h2>이 구분이 중요한 이유</h2>

<p>For regulated buyers — defense, healthcare, finance, telecom — "integration" usually means "data leaves my environment to reach a vendor." That is exactly the failure mode that blocks AI adoption on operational data. The connector lane is the opposite contract: Capsule comes to the data, the data does not go to Capsule.</p>
<p>규제 산업의 구매자 — 국방, 의료, 금융, 통신 — 에게 "통합"은 보통 "데이터가 벤더에 도달하기 위해 내 환경을 벗어난다"는 의미입니다. 그것이 바로 운영 데이터에 대한 AI 도입을 막는 실패 패턴입니다. 커넥터 레인은 정반대의 계약입니다. Capsule이 데이터가 있는 곳으로 갑니다. 데이터는 Capsule을 향해 이동하지 않습니다.</p>

<h2>Integration interfaces — how existing systems invoke Capsule</h2>
<h2>통합 인터페이스 — 기존 시스템이 Capsule을 호출하는 방법</h2>

<p>Once Capsule is deployed inside the environment, existing systems invoke it through whichever interface fits their stack:</p>
<p>Capsule이 환경 내부에 배포되면, 기존 시스템은 각자의 스택에 맞는 인터페이스를 통해 호출합니다.</p>

<li><strong>REST / gRPC</strong> — for modern operations tools, RAG pipelines, and custom orchestrators inside the environment</li>
<li><strong>REST / gRPC</strong> — 환경 내부의 최신 운영 도구, RAG 파이프라인, 커스텀 오케스트레이터용</li>

<li><strong>JDBC / ODBC</strong> — for legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step</li>
<li><strong>JDBC / ODBC</strong> — Capsule 호출을 저장 프로시저나 작업 단계로 필요로 하는 레거시 데이터베이스(Oracle, MSSQL, DB2)용</li>

<li><strong>Graph API</strong> — for DMS / ECM systems (SharePoint, etc.) where document events trigger Capsule processing</li>
<li><strong>Graph API</strong> — 문서 이벤트가 Capsule 처리를 트리거하는 DMS / ECM 시스템(SharePoint 등)용</li>

<li><strong>Webhook / log tap</strong> — for incident- and event-driven workflows from NOC, ticket, OT, and SIEM-adjacent systems</li>
<li><strong>Webhook / log tap</strong> — NOC, 티켓, OT, SIEM 인접 시스템의 인시던트 및 이벤트 기반 워크플로우용</li>

<li><strong>On-prem API</strong> — Capsule's own on-prem callable surface; same contract whether you're air-gapped, hybrid, or VPC</li>
<li><strong>On-prem API</strong> — Capsule의 자체 온프레미스 호출 접점 — 망분리, 하이브리드, VPC 구성 모두 동일한 계약</li>

<li><strong>Embedded SDK</strong> — library-level integration for ISVs and platform vendors who ship Capsule inside their own product</li>
<li><strong>Embedded SDK</strong> — 자사 제품 내에 Capsule을 내장하는 ISV 및 플랫폼 벤더를 위한 라이브러리 수준 통합</li>

<li><strong>Slack App</strong> — for teams using Slack as the operations UI; the runtime stays in the customer environment, the Slack App is the invocation surface</li>
<li><strong>Slack App</strong> — Slack을 운영 UI로 사용하는 팀용 — 런타임은 고객 환경에 그대로 유지되며, Slack App이 호출 접점이 됩니다</li>

<p>All of these interfaces stay inside the customer network. None of them route raw operational data through an external SaaS endpoint to reach Capsule.</p>
<p>이 모든 인터페이스는 고객 네트워크 내부에 머무릅니다. 원본 운영 데이터를 외부 SaaS 엔드포인트를 통해 Capsule로 라우팅하는 인터페이스는 하나도 없습니다.</p>

<h2>Reference statement</h2>
<h2>참조 문장</h2>

<blockquote><p>The connector lane is what makes regulated AI deployment an integration instead of a data egress decision. Capsule reads existing systems where they already are. Raw operational data does not leave the environment.</p></blockquote>
<blockquote><p>커넥터 레인은 규제 환경의 AI 배포를 데이터 유출 결정이 아닌 통합 결정으로 만드는 요소입니다. Capsule은 기존 시스템이 있는 그 자리에서 읽습니다. 원본 운영 데이터는 절대 환경 밖으로 나가지 않습니다.</p></blockquote>

---

## Section 04: Related Terms

Related terms
관련 용어

AI enablement data layer
데이터 레이어

Structure-preserving encapsulation
문서 구조 보존 캡슐화

Two execution paths
두 가지 실행 경로

Operational data
운영 데이터

In-environment deployment
환경 내 배포
