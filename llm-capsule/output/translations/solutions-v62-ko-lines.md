# solutions-v62 — 한국어 번역 (v6.2)

---

## Section 01: Hero

Solutions
솔루션

Make regulated workflows
규제 환경의 워크플로우를

usable with AI
AI로 가동합니다

Six industries. Real production workflows. Real customers. One context-preserving data layer for AI that removes the data exposure barrier blocking enterprise AI adoption — so AI runs on real data, inside your environment, under your governance.
6개 산업. 실제 프로덕션 워크플로우. 실제 고객사. 기업 AI 도입을 막는 데이터 노출 장벽을 제거하는 데이터 레이어 — AI가 실제 데이터 위에서, 여러분의 환경 안에서, 여러분의 거버넌스 하에 작동합니다.

6
6

Regulated industries
규제 산업

10+
10+

Production customers
실제 운영 고객사

30 min
30분

Time to first evaluation
최초 평가 소요 시간

0
0

Raw data to external LLM
외부 LLM에 전달되는 원본 데이터

---

## Section 02: ProofBand

Real production deployments — across telecom, healthcare, finance, defense, OT, and legal
실제 프로덕션 배포 사례 — 통신·의료·금융·국방·OT·법률 전 산업

SK Telecom
SK Telecom

Deutsche Telekom
Deutsche Telekom

Claroty
Claroty

EUMC
EUMC

Kyobo
Kyobo

DB Insurance
DB Insurance

IBK
IBK

Shin&Kim
Shin&Kim

Ministry of National Defense (KR)
대한민국 국방부

NAVER Cloud
NAVER Cloud

---

## Section 03: Telecom

Telecom
통신

AI in the NOC, OSS/BSS, and customer ops — without exposing subscribers
NOC·OSS/BSS·고객 운영에 AI를 — 가입자 정보 노출 없이

Network operations carry subscriber identities, device IDs, circuit IDs, IP ranges, and configurations. PII guardrails miss this; sovereign data rules block raw transmission. LLM Capsule encapsulates locally and routes capsules to approved external LLMs (Path A) or on-prem models (Path B for stricter workflows).
네트워크 운영에는 가입자 식별자, 디바이스 ID, 회선 ID, IP 대역, 설정 정보가 포함됩니다. PII 가드레일은 이 데이터를 놓치고, 데이터 주권 규정은 원본 전송을 차단합니다. LLM Capsule은 로컬에서 캡슐화한 후, 승인된 외부 LLM(Path A) 또는 온프레미스 모델(보다 엄격한 워크플로우용 Path B)로 캡슐을 전달합니다.

Without Capsule
Capsule 미사용 시

NOC AI pilot stalls
NOC AI 파일럿, 보안 심사에서 중단

Subscriber IDs, device configs, alarm sequences cannot reach external LLM. Pilot demos on synthetic data, then dies in security review.
가입자 ID, 디바이스 설정, 알람 시퀀스가 외부 LLM에 도달할 수 없습니다. 파일럿은 합성 데이터로 시연하다가 보안 심사에서 중단됩니다.

With Capsule
Capsule 사용 시

RCA + recommendation auto-inserted
RCA + 권고안 자동 삽입

Capsule travels; AI generates RCA on protected data; output restored into the original ticket with real subscriber/device/circuit IDs.
캡슐이 전달되고, AI가 보호된 데이터를 기반으로 RCA를 생성합니다. 결과물은 실제 가입자·디바이스·회선 ID와 함께 원본 티켓에 자동 복원됩니다.

Production Workflows
프로덕션 워크플로우

Incident RCA generation
장애 RCA 생성

Real-time root cause analysis on production NOC tickets
실제 NOC 티켓에 대한 실시간 근본 원인 분석

Customer impact analysis
고객 영향 분석

SLA risk and enterprise customer impact summarization
SLA 위험 및 기업 고객 영향도 요약

Configuration change drafting
설정 변경 초안 작성

Network config diff explanation and approval drafts
네트워크 설정 변경 내역 설명 및 승인 초안 작성

Runbook generation
런북 생성

Auto-drafting incident-specific runbooks from history
이력 기반 장애 특화 런북 자동 초안 작성

Customer Proof
고객 도입 사례

SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12
SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12

Recognized in Data Security & Governance category. NOC RCA generation and customer-impact analysis on real subscriber, network, and configuration data — all encapsulated locally before any LLM call.
데이터 보안 및 거버넌스 부문에서 수상. 실제 가입자·네트워크·설정 데이터를 기반으로 NOC RCA 생성 및 고객 영향 분석 수행 — LLM 호출 전 모두 로컬에서 캡슐화.

Telecom Industry Visual
통신 산업 비주얼

Read: How to deploy AI in a telecom NOC →
읽기: 통신 NOC에 AI를 배포하는 방법 →

---

## Section 04: Healthcare

Healthcare
의료

AI for clinical workflows — PHI never leaves the hospital network
임상 워크플로우에 AI를 — PHI는 절대 병원 네트워크 밖으로 나가지 않습니다

Clinical AI promises 30-50% reduction in documentation burden. But PHI cannot leave the hospital under HIPAA, GDPR, or K-PIPA. PII guardrails miss workflow context, lab sequences, and free-text clinical notes. LLM Capsule encapsulates patient identifiers, MRN, diagnoses, and clinical context locally; restoration happens inside the EHR.
임상 AI는 문서 작업 부담을 30~50% 줄여줍니다. 그러나 HIPAA, GDPR, 개인정보보호법상 PHI는 병원 외부로 나갈 수 없습니다. PII 가드레일은 워크플로우 맥락, 검사 시퀀스, 자유 기술 임상 노트를 놓칩니다. LLM Capsule은 환자 식별자, MRN, 진단 정보, 임상 컨텍스트를 로컬에서 캡슐화하며, 복원은 EHR 내부에서 이루어집니다.

Without Capsule
Capsule 미사용 시

Documentation pilot blocked
문서화 파일럿 차단

Privacy officer blocks deployment. Physicians use shadow AI on personal devices; productivity tasted in pilot disappears.
개인정보보호 담당자가 배포를 차단합니다. 의사들은 개인 기기에서 비인가 AI를 사용하고, 파일럿에서 경험한 생산성 향상은 사라집니다.

With Capsule
Capsule 사용 시

AI drafts inside Epic / Cerner / HIS
Epic / Cerner / HIS 내부에서 AI가 초안 작성

PHI encapsulated; AI drafts radiology summaries and discharge notes; outputs auto-restore in the EHR. Audit feeds the privacy office.
PHI가 캡슐화되고, AI가 영상 판독 요약과 퇴원 요약을 작성합니다. 결과물은 EHR에 자동 복원되고, 감사 이력은 개인정보보호 부서로 전달됩니다.

Production Workflows
프로덕션 워크플로우

Radiology report drafting
영상 판독 보고서 초안 작성

AI-drafted impressions from imaging studies + clinical history
영상 검사 및 임상 이력을 기반으로 AI가 소견 초안 작성

Discharge summary drafting
퇴원 요약 초안 작성

Multi-source summarization across admission, treatment, and follow-up
입원·치료·추적 관찰 전 과정에 걸친 다중 출처 요약

Clinical coding assist
임상 코딩 보조

ICD-10 / CPT code suggestion with audit trail
감사 이력과 함께 ICD-10 / CPT 코드 제안

Care coordination notes
케어 코디네이션 노트

Multi-disciplinary handoff drafts with PHI protected
PHI 보호 상태에서 다학제 인수인계 초안 작성

Customer Proof
고객 도입 사례

Ewha Womans University Medical Center (EUMC)
이화여자대학교 의료원 (EUMC)

Clinical workflow summarization with PHI never traversing the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. HIPAA-aligned compliance reporting.
PHI가 원본 형태로 EUMC 경계를 절대 벗어나지 않는 임상 워크플로우 요약. 로컬 복원을 통해 원본 환자 식별자는 승인된 병원 시스템만 확인할 수 있습니다. HIPAA 준수 보고 지원.

Healthcare Industry Visual
의료 산업 비주얼

Read: How to deploy AI in a hospital →
읽기: 병원에 AI를 배포하는 방법 →

---

## Section 05: Finance

Finance / Insurance
금융 / 보험

AI on real claim, policy, and customer data — under bank-grade governance
실제 청구·보험증권·고객 데이터에 AI를 — 은행급 거버넌스 아래

Insurance and banking workflows are document-heavy and customer-data-heavy: claim narratives, policy details, KYC records, transaction patterns. Sector regulators (FSC, FSS, BaFin, ACPR) increasingly require demonstrable data governance for AI workflows. LLM Capsule keeps customer data inside while AI processes safe capsules.
보험 및 은행 워크플로우는 문서와 고객 데이터가 집중됩니다. 청구 내러티브, 보험증권 상세 내용, KYC 기록, 거래 패턴이 이에 해당합니다. 금융감독원(FSC, FSS), BaFin, ACPR 등 규제기관은 AI 워크플로우에 대한 입증 가능한 데이터 거버넌스를 점점 더 요구하고 있습니다. LLM Capsule은 고객 데이터를 내부에 유지하면서 AI가 안전한 캡슐을 처리합니다.

Without Capsule
Capsule 미사용 시

Claims AI never reaches production
청구 AI, 프로덕션에 도달하지 못합니다

Customer name, policy ID, claim narrative cannot reach external LLM. AI drafts on synthetic data; production deployment fails risk review.
고객 이름, 보험증권 ID, 청구 내러티브가 외부 LLM에 도달할 수 없습니다. AI는 합성 데이터로 초안을 작성하고, 프로덕션 배포는 리스크 심사에서 실패합니다.

With Capsule
Capsule 사용 시

AI processes claims at production volume
AI가 실제 운영 볼륨으로 청구를 처리합니다

Capsule + restoration enables real-volume claim classification, fraud signal generation, and underwriting drafts inside the insurer's existing systems.
캡슐화 및 복원을 통해 실제 운영 볼륨의 청구 분류, 사기 신호 생성, 언더라이팅 초안 작성이 보험사의 기존 시스템 내에서 가능합니다.

Production Workflows
프로덕션 워크플로우

Claim classification & triage
청구 분류 및 트리아지

AI-powered intake, severity scoring, fraud signaling
AI 기반 접수, 심각도 점수 산정, 사기 신호 탐지

Damage assessment
손해 사정

Multi-document assessment with vehicle/property data restored
차량·재산 데이터 복원 후 다중 문서 기반 손해 사정

Underwriting draft
언더라이팅 초안 작성

Risk evaluation and premium recommendation drafts
리스크 평가 및 보험료 권고안 초안 작성

Regulatory submission
규제 제출

Filing draft and compliance review assist
신고 초안 작성 및 컴플라이언스 검토 지원

Customer Proof
고객 도입 사례

Kyobo · DB Insurance · IBK
교보생명 · DB손해보험 · IBK기업은행

AI-powered claim and policy workflows on real customer data. No customer data leaves the institution's environment in raw form. Aligned with sector regulator expectations and SOX where applicable.
실제 고객 데이터 기반의 AI 청구·보험증권 워크플로우. 고객 데이터는 원본 형태로 기관 환경을 절대 벗어나지 않습니다. 금융 규제기관 요건 및 해당하는 경우 SOX 준수.

Finance Industry Visual
금융 산업 비주얼

Read: Pilot to production for regulated AI →
읽기: 규제 산업 AI 파일럿에서 프로덕션까지 →

---

## Section 06: Defense

Public Sector / Defense
공공 부문 / 국방

AI on classified mission workflows — fully on-prem, zero external transmission
기밀 임무 워크플로우에 AI를 — 완전 온프레미스, 외부 전송 제로

Defense, intelligence, and public-sector workflows demand zero external transmission. No external LLM endpoint is acceptable. LLM Capsule's Path B (on-prem local lightweight model) runs entirely inside the command's network — same Capsule instance, same audit framework, no external reach.
국방·정보·공공 부문 워크플로우는 외부 전송 제로를 요구합니다. 외부 LLM 엔드포인트는 허용되지 않습니다. LLM Capsule의 Path B(온프레미스 로컬 경량 모델)는 사령부 네트워크 내부에서만 동작합니다 — 동일한 Capsule 인스턴스, 동일한 감사 프레임워크, 외부 연결 없음.

Without Capsule
Capsule 미사용 시

AI categorically excluded
AI, 전면 배제

External LLM use is not permitted. Mission workflows continue without AI support; productivity gap persists.
외부 LLM 사용이 허용되지 않습니다. 임무 워크플로우는 AI 지원 없이 계속되고, 생산성 격차가 지속됩니다.

With Capsule
Capsule 사용 시

AI inside command boundary
사령부 경계 내에서 AI 작동

Quantized on-prem model + Capsule encapsulation + local audit. AI drafts mission briefs, intelligence summaries, and operational reports — entirely within the command.
양자화 온프레미스 모델 + Capsule 캡슐화 + 로컬 감사. AI가 임무 브리핑, 정보 요약, 작전 보고서를 작성합니다 — 전적으로 사령부 내부에서.

Production Workflows
프로덕션 워크플로우

Mission brief drafting
임무 브리핑 초안 작성

AI-drafted operational briefs from multi-source intelligence
다중 출처 정보를 기반으로 AI가 작전 브리핑 초안 작성

Operational report summarization
작전 보고서 요약

Multi-format report consolidation and impact synthesis
다양한 형식의 보고서 통합 및 영향 종합

Doctrine reference assist
교리 참조 지원

Doctrine and procedure lookup with classification protection
보안 등급 보호 하에 교리 및 절차 조회

After-action review draft
사후 검토 보고서 초안 작성

Post-operation review with mission identifiers protected
임무 식별자 보호 상태에서 작전 후 검토

Customer Proof
고객 도입 사례

Ministry of National Defense (Korea)
대한민국 국방부

Mission-grade workflows on Path B (on-prem local) with full audit feed to command-level governance. Mission references, geographic identifiers, and unit data encapsulated; restoration tightly scoped under RBAC.
Path B(온프레미스 로컬) 기반의 임무급 워크플로우, 사령부 수준 거버넌스에 전체 감사 이력 제공. 임무 참조 정보, 지리적 식별자, 부대 데이터 캡슐화. RBAC 기반으로 엄격하게 통제된 복원.

Defense Industry Visual
국방 산업 비주얼

Read: Sovereign AI architecture →
읽기: 소버린 AI 아키텍처 →

---

## Section 07: OT

OT / Industrial Cyber
OT / 산업 사이버보안

AI in OT environments — without exposing asset identifiers or process data
OT 환경에서 AI를 — 자산 식별자 및 프로세스 데이터 노출 없이

OT (operational technology) workflows protect mission-critical industrial assets — power, manufacturing, oil & gas, water. PLCs, SCADA tags, asset IDs, and process variables can't leak. LLM Capsule encapsulates OT identifiers locally; AI assists with anomaly explanation, runbook drafting, and incident response.
OT(운영 기술) 워크플로우는 전력·제조·석유가스·수자원 등 핵심 산업 자산을 보호합니다. PLC, SCADA 태그, 자산 ID, 프로세스 변수는 절대 외부로 유출되어서는 안 됩니다. LLM Capsule은 OT 식별자를 로컬에서 캡슐화하고, AI가 이상 탐지 설명, 런북 초안 작성, 인시던트 대응을 지원합니다.

Without Capsule
Capsule 미사용 시

OT teams blocked from AI
OT 팀, AI 사용 차단

Asset IDs, process variables, vendor configurations cannot reach external LLM. OT operators have no AI support for incident analysis.
자산 ID, 프로세스 변수, 벤더 설정이 외부 LLM에 도달할 수 없습니다. OT 운영자는 인시던트 분석에서 AI 지원을 받지 못합니다.

With Capsule
Capsule 사용 시

AI assist for OT incident response
OT 인시던트 대응에 AI 지원

OT identifiers encapsulated. AI drafts incident analysis, anomaly explanation, and recommended runbook on protected capsule; restored locally for OT operators.
OT 식별자가 캡슐화됩니다. AI가 보호된 캡슐을 기반으로 인시던트 분석, 이상 탐지 설명, 런북 권고안을 작성하고, OT 운영자에게 로컬에서 복원됩니다.

Production Workflows
프로덕션 워크플로우

Anomaly explanation
이상 징후 설명

AI-generated explanation of detected OT anomalies
탐지된 OT 이상 징후에 대한 AI 생성 설명

Asset documentation
자산 문서화

Auto-drafting asset and process documentation
자산 및 프로세스 문서 자동 초안 작성

Vulnerability triage
취약점 트리아지

Vulnerability impact analysis on protected asset data
보호된 자산 데이터에 대한 취약점 영향 분석

Vendor advisory parsing
벤더 권고문 파싱

Vendor security advisory parsing and impact mapping
벤더 보안 권고문 파싱 및 영향 매핑

Customer Proof
고객 도입 사례

Claroty
Claroty

Industrial cybersecurity workflows with OT asset identifiers and process variables encapsulated locally. AI assists analysts without exposing customer infrastructure data.
OT 자산 식별자 및 프로세스 변수를 로컬에서 캡슐화한 산업 사이버보안 워크플로우. AI가 고객 인프라 데이터를 노출하지 않고 분석가를 지원합니다.

OT Industry Visual
OT 산업 비주얼

Read: AI on network & operations data →
읽기: 네트워크 및 운영 데이터에서의 AI →

---

## Section 08: Legal

Legal
법률

AI for matter management — privilege preserved, deal terms protected
사건 관리에 AI를 — 변호사 비밀 유지, 거래 조건 보호

Legal workflows process privileged material — contracts, deal terms, M&A code names, litigation strategy, regulatory filings. Privilege preservation is non-negotiable. LLM Capsule encapsulates parties, deal terms, and privileged content locally; AI summarizes and analyzes the protected capsule; restoration happens inside the firm's matter management system.
법률 워크플로우는 특권 자료를 처리합니다 — 계약서, 거래 조건, M&A 코드명, 소송 전략, 규제 신고서. 변호사-의뢰인 비밀 유지는 절대적입니다. LLM Capsule은 당사자, 거래 조건, 특권 콘텐츠를 로컬에서 캡슐화하고, AI가 보호된 캡슐을 요약·분석하며, 복원은 로펌의 사건 관리 시스템 내부에서 이루어집니다.

Without Capsule
Capsule 미사용 시

Outside-counsel AI blocked
외부 자문 AI 차단

Deal terms, party names, code names cannot reach external LLM. Associates fall back to manual review; AI value never materializes.
거래 조건, 당사자 이름, 코드명이 외부 LLM에 도달할 수 없습니다. 어소시에이트는 수동 검토로 돌아가고, AI 가치는 실현되지 않습니다.

With Capsule
Capsule 사용 시

AI assist inside privileged workflow
특권 워크플로우 내에서 AI 지원

Parties + terms encapsulated; AI drafts summaries, risk analyses, and clause comparisons; outputs restored in matter management with privilege preserved.
당사자 및 거래 조건이 캡슐화되고, AI가 요약본, 리스크 분석, 조항 비교를 작성합니다. 결과물은 변호사 비밀 유지 상태로 사건 관리 시스템에 복원됩니다.

Production Workflows
프로덕션 워크플로우

Confidential contract review
기밀 계약서 검토

AI-drafted risk summary across long-form contracts
장문 계약서 전반에 걸친 AI 작성 리스크 요약

Due diligence summarization
실사 요약

Multi-document M&A diligence with deal data protected
거래 데이터 보호 상태에서 다중 문서 M&A 실사

Regulatory filing draft
규제 신고서 초안 작성

Filing draft and compliance check with sensitive content masked
민감 콘텐츠 마스킹 상태에서 신고서 초안 작성 및 컴플라이언스 확인

Matter triage
사건 트리아지

Initial matter intake and routing with privileged data inside
특권 데이터 보호 상태에서 초기 사건 접수 및 배당

Customer Proof
고객 도입 사례

Shin&Kim
김·장 법률사무소 (Shin&Kim)

One of Korea's largest law firms. AI assist on privileged matter workflows with parties, deal terms, and code names encapsulated. Privilege preservation under firm governance.
국내 최대 규모 법률사무소 중 하나. 당사자, 거래 조건, 코드명을 캡슐화한 특권 사건 워크플로우에 AI 지원. 로펌 거버넌스 하에 변호사 비밀 유지.

Legal Industry Visual
법률 산업 비주얼

Read: context-preserving data layer for AI (definition) →
읽기: AI를 위한 컨텍스트 보존 데이터 레이어 (정의) →

---

## Section 09: CTA

Bring your industry, your workflow, your data.
귀사의 산업, 귀사의 워크플로우, 귀사의 데이터를 가져오세요.

We deploy LLM Capsule on a sample workflow in your environment within 30 minutes — and produce an evaluation report on detection accuracy, restoration rate, and policy fit for your industry's regulatory profile.
30분 이내에 귀사 환경의 샘플 워크플로우에 LLM Capsule을 배포합니다 — 탐지 정확도, 복원율, 귀사 산업의 규제 프로파일에 대한 정책 적합성 평가 보고서를 제공합니다.

Request an Industry Demo
산업별 데모 요청

View Architecture
아키텍처 보기

View Trust & Compliance
신뢰 및 컴플라이언스 보기
