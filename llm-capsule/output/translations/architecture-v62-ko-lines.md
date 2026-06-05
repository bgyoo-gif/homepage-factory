# architecture-v62 — 한국어 번역 (v6.2)

---

## Section 01: Hero

Architecture
아키텍처

How LLM Capsule plugs AI into the systems you already run
지금 운영 중인 시스템에 AI를 연결하는 방법, LLM Capsule

Three zones. Four steps. Five components. Two execution paths. One governance framework. The context-preserving data layer for AI for regulated operations — at the architectural level.
3개 존. 4단계 처리. 5개 컴포넌트. 2가지 실행 경로. 하나의 거버넌스 프레임워크. 규제 환경의 기업 운영을 위한 데이터 레이어 — 아키텍처 수준에서.

---

## Section 02: Zone Overview

Zone overview
존 개요

One layer between your existing systems and AI
기존 시스템과 AI 사이, 단 하나의 레이어

LLM Capsule sits inside your environment, reads from existing systems, preserves operational structure, and restores AI output back into the originating workflow. The architecture maps to four zones — Corporate Internal Network, DMZ, In-House Team, and Local Auto Reconstruction — and the trust boundary holds: raw operational data stays inside the corporate environment; only the protected capsule traverses zones; restored output is reconstructed locally inside the in-house team's environment.
LLM Capsule은 고객 환경 내부에서 동작하며, 기존 시스템에서 데이터를 읽고, 운영 구조를 보존하며, AI 처리 결과를 원래 워크플로우로 복원합니다. 아키텍처는 4개의 존으로 구성됩니다 — 기업 내부 네트워크, DMZ, 내부 팀, 로컬 자동 복원 — 신뢰 경계는 항상 유지됩니다. 원시 운영 데이터는 기업 환경 안에만 머물고, 캡슐만이 존을 이동하며, 복원된 결과는 내부 팀 환경에서 로컬로 재구성됩니다.

Zone 1
존 1

Corporate Internal Network
기업 내부 네트워크

Where the operational systems and the data they hold already live. LLM Capsule reads from these systems where they already are — without modification, with a single API-call addition.
운영 시스템과 그 데이터가 이미 존재하는 공간입니다. LLM Capsule은 시스템을 수정하지 않고, API 호출 하나만 추가해 이곳에서 직접 읽습니다.

ERP System (SAP / Oracle) — REST API
ERP 시스템 (SAP / Oracle) — REST API

CRM (Salesforce) — REST API
CRM (Salesforce) — REST API

Ticketing (Jira / ServiceNow) — REST API
티켓팅 (Jira / ServiceNow) — REST API

DMS / ECM (SharePoint) — Graph API
DMS / ECM (SharePoint) — Graph API

Legacy DB (Oracle / MSSQL) — JDBC → API
레거시 DB (Oracle / MSSQL) — JDBC → API

RAG Pipeline (Vector DB) — gRPC / REST
RAG 파이프라인 (Vector DB) — gRPC / REST

Zone 2
존 2

DMZ — Demilitarized Zone
DMZ — 비무장 지대

Where the Enhanced Encapsulation Layer operates. Detection identifies sensitive elements, encapsulation replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and only the capsule leaves this zone toward an external AI.
강화된 캡슐화 레이어가 동작하는 공간입니다. 탐지 엔진이 민감 요소를 식별하고, 캡슐화 엔진이 문서 구조 보존 방식의 차등 프라이버시 기반 보호로 안전한 토큰으로 대체합니다. 외부 AI로 나가는 것은 캡슐뿐입니다.

Detection — PII + customer-defined markers
탐지 — PII + 고객 정의 마커

Enhanced Encapsulation Layer — DP-based, structure-preserving
강화된 캡슐화 레이어 — 차등 프라이버시 기반, 문서 구조 보존

Capsule transmission — capsule only, never raw data
캡슐 전송 — 캡슐만 전송, 원시 데이터는 절대 전송하지 않음

Token map stays local
토큰 맵은 내부에만 보관

Audit trail of every encapsulation event
모든 캡슐화 이벤트의 감사 이력

↑ Trust boundary — original operational data never crosses
↑ 신뢰 경계 — 원본 운영 데이터는 절대 경계를 넘지 않습니다

Zone 3
존 3

In-House Team
내부 팀

Where governance, policy, and the AI workflow itself are operated. Organizational policy, permissions, and domain context drive how the encapsulated request is routed — to an approved external LLM or to an on-prem local model — with full audit retained inside the organization.
거버넌스, 정책, AI 워크플로우가 운영되는 공간입니다. 조직 정책, 권한, 도메인 컨텍스트에 따라 캡슐화된 요청이 라우팅됩니다 — 승인된 외부 LLM(경로 A) 또는 온프레미스 로컬 모델(경로 B) — 모든 감사 이력은 조직 내부에 보관됩니다.

Organizational policy & permissions
조직 정책 및 권한

Domain context applied to AI processing
AI 처리에 적용되는 도메인 컨텍스트

Routing — external approved LLM (Path A) or on-prem local (Path B)
라우팅 — 외부 승인 LLM (경로 A) 또는 온프레미스 로컬 (경로 B)

Approved external LLMs: ChatGPT · Claude · Gemini · Perplexity · any LLM API
승인된 외부 LLM: ChatGPT · Claude · Gemini · Perplexity · 모든 LLM API

Governance fully retained
거버넌스 완전 유지

Zone 4
존 4

Local — Auto Reconstruction
로컬 — 자동 복원

Where the AI response is automatically reconstructed back into Business-Ready output. Tokens are restored to original values inside the organization only — data that left the boundary cannot be reconstructed externally.
AI 응답이 업무 즉시 활용 가능한 결과물로 자동 복원되는 공간입니다. 토큰은 조직 내부에서만 원본 값으로 복원됩니다 — 경계 밖으로 나간 데이터는 외부에서 복원할 수 없습니다.

Token-by-token restoration from local token vault
로컬 토큰 보관소에서 토큰 단위 복원

Restoration happens only inside the organization
복원은 조직 내부에서만 수행됩니다

Externally-leaked data is not restorable outside
외부로 유출된 데이터는 외부에서 복원 불가

Business-Ready output delivered to the originating workflow
업무 즉시 활용 가능한 결과물이 원래 워크플로우로 전달됩니다

Restoration audit alongside encapsulation audit
캡슐화 감사와 함께 복원 감사 수행

---

## Section 03: Technical Diagram

Technical view · zone-based architecture
기술 상세 · 존 기반 아키텍처

The same architecture, in technical detail
동일한 아키텍처, 기술 상세 설명

For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and external AI interact.
아키텍트 및 보안 검토자를 위한 — 운영 데이터, 캡슐화, 외부 AI가 어떻게 상호작용하는지의 전체 존 기반 뷰입니다.

TECHNICAL VIEW · ZONE-BASED ARCHITECTURE
기술 상세 · 존 기반 아키텍처

Zone 1 · Corporate Internal Network
존 1 · 기업 내부 네트워크

Where the operational systems already live
운영 시스템이 이미 존재하는 공간

Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
기존 엔터프라이즈 시스템 — ERP, CRM, 티켓팅, DMS / ECM, 레거시 DB, RAG 파이프라인 — 은 그대로 유지됩니다. 마이그레이션은 없습니다. Capsule은 소스에 따라 REST, gRPC, JDBC, Graph API를 통해 데이터를 읽습니다.

Zone 2 · DMZ — Demilitarized Zone
존 2 · DMZ — 비무장 지대

Where encapsulation happens
캡슐화가 이루어지는 공간

The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
강화된 캡슐화 레이어가 민감 요소를 탐지하고, 문서 구조 보존 방식의 차등 프라이버시 기반 보호로 안전한 토큰으로 대체한 뒤 라우팅 결정에 캡슐을 전달합니다. 원본 값은 내부에 남아 로컬 토큰 맵에 보관됩니다.

Zone 3 · In-House Team
존 3 · 내부 팀

Where governance and routing happen
거버넌스와 라우팅이 이루어지는 공간

Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
조직 정책, 권한, 도메인 컨텍스트에 따라 캡슐 처리 위치가 결정됩니다 — 승인된 외부 LLM(경로 A) 또는 온프레미스 로컬 모델(경로 B). 결정은 워크플로우별 정책에 따르며, 전체 감사 이력은 조직 내부에 보관됩니다.

Zone 4 · Local — Auto Reconstruction
존 4 · 로컬 — 자동 복원

Where the AI response becomes Business-Ready output
AI 응답이 업무 즉시 활용 가능한 결과물이 되는 공간

The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
AI 응답은 조직 내부에서만 토큰을 원본 값으로 자동 복원합니다. 신뢰 경계를 벗어난 데이터는 외부에서 복원할 수 없습니다. 복원된 결과물은 원래 워크플로우로 다시 전달됩니다.

---

## Section 04: Pillars

Six architectural pillars
6가지 아키텍처 핵심 원칙

What this architecture protects against — and how
이 아키텍처가 막는 것 — 그리고 그 방법

The pillars below are the technical commitments encoded into the four-zone architecture above. Each maps to a specific failure mode of conventional approaches.
아래의 핵심 원칙들은 4존 아키텍처에 내재된 기술적 약속입니다. 각 원칙은 기존 접근 방식의 특정 실패 유형에 대응합니다.

Pillar 01
핵심 원칙 01

Beyond simple PII guardrails
단순 PII 가드레일을 넘어서

Even inside the same enterprise, free-text fields like a CS ticket Details column mix customer names, contact information, and claim narrative in unstructured form. Simple PII guardrails cannot safely process this. Detection in Capsule operates on free-text and structured fields together — semantic and context-aware, not pattern-matching alone.
같은 기업 내에서도 CS 티켓의 상세 내용 필드에는 고객명, 연락처, 클레임 내용이 비정형 형태로 혼재합니다. 단순 PII 가드레일은 이를 안전하게 처리할 수 없습니다. Capsule의 탐지 엔진은 자유 텍스트와 구조화 필드를 함께 처리합니다 — 패턴 매칭만이 아닌, 의미론적·컨텍스트 인식 방식으로.

Pillar 02
핵심 원칙 02

No modification of existing systems
기존 시스템 수정 없음

Existing enterprise systems are not refactored. Connection is a single API-call addition (REST / gRPC) — the operations team continues using their existing tools, the Capsule layer handles encapsulation and restoration alongside.
기존 엔터프라이즈 시스템을 리팩토링하지 않습니다. API 호출 하나만 추가하면 연결됩니다(REST / gRPC) — 운영팀은 기존 도구를 그대로 사용하고, Capsule 레이어가 옆에서 캡슐화와 복원을 처리합니다.

Pillar 03
핵심 원칙 03

Beyond simple encapsulation — differential privacy
단순 캡슐화를 넘어서 — 차등 프라이버시

The Enhanced Encapsulation Layer goes beyond simple tokenization. Differential privacy (epsilon-DP, Laplace noise, k-anonymity, NER masking) is applied to minimize re-identification risk on the capsule itself, providing stronger protection than tokenization alone.
강화된 캡슐화 레이어는 단순 토큰화를 넘어섭니다. 차등 프라이버시(epsilon-DP, Laplace noise, k-anonymity, NER 마스킹)를 적용해 캡슐 자체의 재식별 위험을 최소화하며, 토큰화만으로는 불가능한 강력한 보호를 제공합니다.

Pillar 04
핵심 원칙 04

No raw exposure to external AI
외부 AI에 원시 데이터 노출 없음

External AI services see only the capsule. Original operational data does not cross the trust boundary. Tokenization combined with DP processing means a leak from the external AI side does not yield reconstructable original values.
외부 AI 서비스는 캡슐만 볼 수 있습니다. 원본 운영 데이터는 신뢰 경계를 넘지 않습니다. 토큰화와 차등 프라이버시 처리가 결합되어, 외부 AI 측에서 유출이 발생해도 원본 값으로 복원할 수 없습니다.

Pillar 05
핵심 원칙 05

In-environment auto-restoration
환경 내 자동 복원

AI response tokens are automatically restored to their original values inside the organization only. Data that left the trust boundary cannot be reconstructed externally — only the in-house token vault can perform restoration.
AI 응답 토큰은 조직 내부에서만 원본 값으로 자동 복원됩니다. 신뢰 경계를 벗어난 데이터는 외부에서 복원할 수 없습니다 — 내부 토큰 보관소만이 복원을 수행할 수 있습니다.

Pillar 06
핵심 원칙 06

Governance, policy & domain context retained
거버넌스·정책·도메인 컨텍스트 완전 유지

Organizational policy, permissions, and domain context drive the entire AI processing path — what gets encapsulated, where it is routed (Path A external or Path B on-prem), and how restoration is audited. Governance stays inside the organization end-to-end.
조직 정책, 권한, 도메인 컨텍스트가 전체 AI 처리 경로를 결정합니다 — 무엇을 캡슐화할지, 어디로 라우팅할지(경로 A 외부 또는 경로 B 온프레미스), 복원을 어떻게 감사할지. 거버넌스는 처음부터 끝까지 조직 내부에 머뭅니다.

These pillars are derived from the diagram_v8 architecture reference. Each pillar maps to a specific failure mode of conventional approaches — masking and redaction, prompt security gateways, and synthetic data platforms — that the four-zone architecture is designed to address.
이 핵심 원칙들은 diagram_v8 아키텍처 참조 자료를 기반으로 합니다. 각 원칙은 4존 아키텍처가 해결하도록 설계된 기존 접근 방식의 특정 실패 유형 — 마스킹과 삭제, 프롬프트 보안 게이트웨이, 합성 데이터 플랫폼 — 에 대응합니다.

---

## Section 05: Components

Five components
5가지 컴포넌트

What's inside the LLM Capsule
LLM Capsule 내부 구성

The five architectural components that implement the data layer. Each is independently configurable and audit-loggable.
데이터 레이어를 구현하는 5가지 아키텍처 컴포넌트입니다. 각 컴포넌트는 독립적으로 설정 가능하며 감사 로그를 남깁니다.

Component 01
컴포넌트 01

Detection Engine
탐지 엔진

Detects PII + customer-defined markers across structured fields and free text. Beyond regex — semantic + context-aware. 98.1% detection accuracy.
구조화 필드와 자유 텍스트 전반에서 PII와 고객 정의 마커를 탐지합니다. 정규식을 넘어 — 의미론적·컨텍스트 인식 방식. 탐지 정확도 98.1%.

Component 02
컴포넌트 02

Encapsulation Engine
캡슐화 엔진

Differential-privacy-based replacement (epsilon-DP, Laplace noise, k-anonymity, NER masking). Structure-preserving — tables, hierarchies, references survive.
차등 프라이버시 기반 대체 처리(epsilon-DP, Laplace noise, k-anonymity, NER 마스킹). 문서 구조 보존 — 테이블, 계층 구조, 참조 관계가 그대로 유지됩니다.

Component 03
컴포넌트 03

Policy Control
정책 관리

Versioned, scoped, RBAC'd policies. Time-shifting markers — yesterday's policy archived, today's enforced. Per-team, per-workflow scope.
버전 관리, 범위 지정, RBAC 기반 정책. 시간 기반 마커 — 어제의 정책은 보관되고, 오늘의 정책이 적용됩니다. 팀별·워크플로우별 범위 설정.

Component 04
컴포넌트 04

Restoration Engine
복원 엔진

Local token vault lookup + context re-binding + output validation. 100% restoration rate. AI output comes back business-ready, in the originating tool.
로컬 토큰 보관소 조회 + 컨텍스트 재결합 + 출력 검증. 복원율 100%. AI 결과물이 원래 도구에서 바로 업무에 활용 가능한 상태로 돌아옵니다.

Component 05
컴포넌트 05

Audit & Compliance
감사 및 규제 대응

Every detection, encapsulation, processing, and restoration logged with policy version, model, latency, and outcome. GDPR / HIPAA / SOX-aligned.
모든 탐지, 캡슐화, 처리, 복원이 정책 버전·모델·지연 시간·결과와 함께 기록됩니다. GDPR / HIPAA / SOX 준수.

---

## Section 06: Execution Paths

Two execution paths
2가지 실행 경로

One architecture. Two paths. Policy-driven per workflow.
하나의 아키텍처. 두 가지 경로. 워크플로우별 정책 기반.

The same LLM Capsule instance can route different workflows through different paths — under one governance framework.
동일한 LLM Capsule 인스턴스가 서로 다른 워크플로우를 서로 다른 경로로 라우팅할 수 있습니다 — 하나의 거버넌스 프레임워크 아래.

PATH A · External
경로 A · 외부

Approved external LLM, capsule data only
승인된 외부 LLM, 캡슐 데이터만 전송

For workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs).
적절한 계약적 보호 장치(DPA, SCC)가 갖춰진 환경에서 차등 프라이버시 캡슐 전송이 규제 프로파일상 허용되는 워크플로우에 적합합니다.

Routes to ChatGPT, Claude, Gemini, Perplexity, or any LLM API
ChatGPT, Claude, Gemini, Perplexity 또는 모든 LLM API로 라우팅

Capsule travels — original data never does
캡슐만 이동 — 원본 데이터는 절대 이동하지 않습니다

In-region endpoints supported (EU-hosted for sovereign AI)
리전 내 엔드포인트 지원 (소버린 AI를 위한 EU 호스팅 포함)

Best for: NOC RCA, claims classification, summarization
최적 사용처: NOC 원인 분석, 클레임 분류, 요약

PATH B · On-prem
경로 B · 온프레미스

On-prem local lightweight model
온프레미스 로컬 경량 모델

For workflows where any external endpoint is unacceptable — classified data, lawful intercept segments, OT operations, regulated mental health / pediatric data.
외부 엔드포인트 사용이 전혀 허용되지 않는 워크플로우에 적합합니다 — 기밀 데이터, 합법적 감청 구간, OT 운영, 규제 대상 정신건강·소아과 데이터.

Quantized model on internal GPU (vLLM-served)
내부 GPU에서 구동되는 양자화 모델 (vLLM 서빙)

Zero external transmission — fully air-gapped option
외부 전송 완전 차단 — 완전 망분리 옵션

Same Capsule instance, same audit, same policy framework
동일한 Capsule 인스턴스, 동일한 감사, 동일한 정책 프레임워크

Best for: defense, classified workflows, strict sovereign AI
최적 사용처: 국방, 기밀 워크플로우, 엄격한 소버린 AI

---

## Section 07: Integration

In-environment integration
환경 내 통합

Reads the systems you already run — without modifying them
지금 운영 중인 시스템에서 직접 읽습니다 — 수정 없이

LLM Capsule is not a SaaS API you call from outside. It runs inside your environment and reads from the operational systems already in place. Existing systems are not modified — a single API-call addition is what connects them to the encapsulation layer.
LLM Capsule은 외부에서 호출하는 SaaS API가 아닙니다. 고객 환경 내부에서 실행되며, 이미 존재하는 운영 시스템에서 데이터를 읽습니다. 기존 시스템은 수정하지 않습니다 — API 호출 하나만 추가하면 캡슐화 레이어와 연결됩니다.

ERP System
ERP 시스템

SAP / Oracle — REST API
SAP / Oracle — REST API

CRM
CRM

Salesforce — REST API
Salesforce — REST API

Ticketing
티켓팅

Jira / ServiceNow — REST API
Jira / ServiceNow — REST API

DMS / ECM
DMS / ECM

SharePoint — Graph API
SharePoint — Graph API

Legacy DB
레거시 DB

Oracle / MSSQL — JDBC → API
Oracle / MSSQL — JDBC → API

RAG Pipeline
RAG 파이프라인

Vector DB — gRPC / REST
Vector DB — gRPC / REST

These six are the source-system identities mapped in the diagram_v8 reference. Existing enterprise systems are not modified — connection is a single API-call addition. Raw operational data does not leave the environment to reach Capsule; the Capsule sits next to these systems, on-prem or in your VPC.
이 6개는 diagram_v8 참조 자료에 매핑된 소스 시스템 목록입니다. 기존 엔터프라이즈 시스템은 수정하지 않습니다 — 연결은 API 호출 하나만 추가하면 됩니다. 원시 운영 데이터는 Capsule에 도달하기 위해 환경을 벗어나지 않습니다. Capsule은 이 시스템들 옆에, 온프레미스 또는 고객의 VPC 안에 위치합니다.

Integration interfaces
통합 인터페이스

How existing systems invoke Capsule from inside the environment
기존 시스템이 환경 내부에서 Capsule을 호출하는 방법

Once Capsule is deployed inside the environment, existing enterprise systems invoke it through whichever interface fits their stack. All interfaces stay inside the customer network — none of them route raw operational data through an external SaaS endpoint.
Capsule이 환경 내부에 배포되면, 기존 엔터프라이즈 시스템은 자신의 스택에 맞는 인터페이스를 통해 Capsule을 호출합니다. 모든 인터페이스는 고객 네트워크 내부에 머뭅니다 — 원시 운영 데이터를 외부 SaaS 엔드포인트로 라우팅하는 인터페이스는 없습니다.

REST / gRPC
REST / gRPC

For modern operations tools, RAG pipelines, and custom orchestrators inside the environment.
환경 내부의 최신 운영 도구, RAG 파이프라인, 커스텀 오케스트레이터에 적합합니다.

JDBC / ODBC
JDBC / ODBC

For legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step.
저장 프로시저 또는 잡 스텝으로 Capsule을 호출해야 하는 레거시 데이터베이스 시스템(Oracle, MSSQL, DB2)에 적합합니다.

Graph API
Graph API

For DMS / ECM systems (e.g. SharePoint) where document events trigger Capsule processing.
문서 이벤트가 Capsule 처리를 트리거하는 DMS / ECM 시스템(예: SharePoint)에 적합합니다.

On-prem API
온프레미스 API

Capsule's own on-prem callable surface. Same contract whether you're air-gapped, hybrid, or VPC.
Capsule 자체의 온프레미스 호출 인터페이스입니다. 망분리, 하이브리드, VPC 환경에 관계없이 동일한 계약을 제공합니다.

Embedded SDK
임베디드 SDK

Library-level integration for ISVs and platform vendors who ship Capsule inside their own product.
자체 제품 내에 Capsule을 내장해 배포하는 ISV 및 플랫폼 벤더를 위한 라이브러리 수준의 통합입니다.

Slack App
Slack App

For teams using Slack as the operations UI. The runtime still lives in the customer environment; the Slack App is the invocation surface.
Slack을 운영 UI로 사용하는 팀에 적합합니다. 런타임은 여전히 고객 환경에 존재하며, Slack App은 호출 인터페이스입니다.

---

## Section 08: Deployment Modes

Deployment modes
배포 모드

Six deployment modes — match your environment exactly
6가지 배포 모드 — 고객 환경에 정확히 맞춥니다

Capsule runs inside the customer environment in every mode. Path A and Path B execution choices apply across all six.
모든 모드에서 Capsule은 고객 환경 내부에서 실행됩니다. 경로 A와 경로 B 실행 선택은 6가지 모드 전체에 적용됩니다.

Air-gapped on-prem
완전 망분리 온프레미스

Fully internal. No external network. Path B only. Defense, classified, OT.
완전 내부 운영. 외부 네트워크 없음. 경로 B 전용. 국방·기밀·OT 환경.

On-prem hybrid
온프레미스 하이브리드

Internal Capsule + approved external LLM. Path A for most workflows, Path B for sensitive subset.
내부 Capsule + 승인된 외부 LLM. 대부분의 워크플로우에는 경로 A, 민감 워크플로우 일부에는 경로 B.

VPC / private cloud
VPC / 프라이빗 클라우드

Customer's cloud VPC. Capsule + token vault stay in tenant; LLM call to in-region endpoint.
고객의 클라우드 VPC. Capsule과 토큰 보관소는 테넌트 안에 유지, LLM 호출은 리전 내 엔드포인트로.

AWS Marketplace
AWS Marketplace

Listed and procurable through AWS Marketplace. VPC deployment, AWS billing integration.
AWS Marketplace를 통해 등록·구매 가능합니다. VPC 배포, AWS 빌링 통합.

Embedded SDK
임베디드 SDK

For ISVs and platform vendors building Capsule into their own product. Library-level integration that ships inside the host application.
자체 제품에 Capsule을 내장하는 ISV 및 플랫폼 벤더를 위한 배포 모드입니다. 호스트 애플리케이션 내부에 포함되어 배포되는 라이브러리 수준의 통합.

Slack App
Slack App

For teams using Slack as the operations UI. Capsule runtime stays in the customer environment; the Slack App is the surface that invokes it.
Slack을 운영 UI로 사용하는 팀을 위한 모드입니다. Capsule 런타임은 고객 환경에 유지되며, Slack App이 이를 호출하는 인터페이스입니다.

Note: a separate "Telecom-grade" topology (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure — validated at SK Telecom, recognized at Deutsche Telekom T Challenge 2026. It composes with the modes above rather than replacing them.
참고: 별도의 "통신 등급" 토폴로지(NFV / 컨테이너 / 멀티 리전)가 통신 사업자 인프라용 배포 변형으로 제공됩니다 — SK텔레콤에서 검증, Deutsche Telekom T Challenge 2026에서 수상. 위의 배포 모드를 대체하는 것이 아니라 함께 구성됩니다.

---

## Section 09: CTA Strip

See the architecture run on your environment.
고객 환경에서 직접 아키텍처가 작동하는 모습을 확인하세요.

Bring your deployment constraints, regulatory profile, and one real workflow. We demonstrate the data layer in your environment within 30 minutes.
배포 제약 조건, 규제 프로파일, 실제 워크플로우 하나만 가져오세요. 30분 내에 고객 환경에서 데이터 레이어를 직접 시연해 드립니다.

Request a Live Demo
라이브 데모 요청

View Product
제품 보기

View Trust & Compliance
보안 및 규제 대응 보기
