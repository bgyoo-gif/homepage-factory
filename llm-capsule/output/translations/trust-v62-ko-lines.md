# trust-v62 — 한국어 번역 (v6.2)

---

## Section 01: Hero

Trust & Compliance
신뢰 & 컴플라이언스

Enterprise-grade
엔터프라이즈급

architecture
아키텍처

LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This page is for security, compliance, and procurement teams evaluating how the architecture maps to your review framework.
LLM Capsule은 규제 환경의 엔터프라이즈를 위해 설계되었습니다. 인증 완료, 감사 가능, 데이터 주권 보장. 보안·컴플라이언스·구매 담당 팀이 아키텍처를 검토 프레임워크에 매핑하는 데 필요한 모든 정보를 제공합니다.

Request a Demo
데모 요청

/request-a-demo
/request-a-demo

View Architecture
아키텍처 보기

/architecture
/architecture

---

## Section 02: Credential Grid

Certifications & recognition
인증 및 수상

12 certifications, awards, and global recognitions
12개의 인증·수상·글로벌 인정

From international standards (ISO/IEC) to national certifications (KISA, GS) and category recognition (Gartner, Deutsche Telekom, AWS).
국제 표준(ISO/IEC)부터 국내 인증(KISA, GS), 카테고리 인정(Gartner, Deutsche Telekom, AWS)까지.

ISO
ISO

ISO/IEC 27001
ISO/IEC 27001

Information Security Management
정보보안 경영시스템

ISO
ISO

ISO/IEC 42001
ISO/IEC 42001

AI Management System
AI 경영시스템

KISA
KISA

KISA Fast Track
KISA Fast Track

Korea Information Security
한국 정보보안

GS
GS

GS Certification
GS Certification

Good Software (Korea)
우수 소프트웨어 (한국)

AWARD
AWARD

Security Innovation Award
보안 혁신상

MSIT (Korea)
과학기술정보통신부

RECOGNITION
RECOGNITION

T Challenge 2026 — Top 12
T Challenge 2026 — Top 12

Deutsche Telekom · Data Security & Governance
Deutsche Telekom · 데이터 보안 & 거버넌스

AWARD
AWARD

AI Medical Innovation
AI 의료 혁신상

Healthcare AI category
의료 AI 부문

RECOGNITION
RECOGNITION

Startup World Cup
Startup World Cup

Global recognition
글로벌 인정

RECOGNITION
RECOGNITION

Next Rise Global Innovator
Next Rise Global Innovator

Korea-Global innovation showcase
한국-글로벌 혁신 쇼케이스

VENDOR
VENDOR

Gartner Vendor
Gartner Vendor

AI / data category recognition
AI / 데이터 카테고리 인정

RECOGNITION
RECOGNITION

Emerging AI+X Top 100
Emerging AI+X Top 100

Korea AI excellence
한국 AI 우수 기업

MARKETPLACE
MARKETPLACE

AWS Marketplace
AWS Marketplace

Listed and procurable
등록 완료·구매 가능

---

## Section 03: Compliance Matrix

Compliance frameworks
컴플라이언스 프레임워크

How LLM Capsule capabilities map to GDPR / HIPAA / SOX / EU AI Act review workflows
LLM Capsule 기능이 GDPR / HIPAA / SOX / EU AI Act 검토 워크플로우에 어떻게 매핑되는지

LLM Capsule provides architectural controls that support GDPR, HIPAA, SOX, and EU AI Act review workflows. The matrix below maps each capability to the relevant article or section so compliance, security, and procurement teams have a starting reference. This is not a compliance certification — final compliance determination is the customer's, in their own deployment context.
LLM Capsule은 GDPR, HIPAA, SOX, EU AI Act 검토 워크플로우를 지원하는 아키텍처 통제 수단을 제공합니다. 아래 매트릭스는 각 기능을 관련 조항에 매핑하여 컴플라이언스·보안·구매 팀의 검토 참고 자료로 활용할 수 있습니다. 이는 컴플라이언스 인증이 아닙니다. 최종 컴플라이언스 판단은 고객사의 배포 환경에서 고객사가 결정합니다.

<table class="comp-matrix">
  <thead>
    <tr>
      <th>LLM Capsule 기능</th>
      <th>GDPR</th>
      <th>HIPAA</th>
      <th>SOX</th>
      <th>EU AI Act</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>로컬 캡슐화 (데이터 절대 외부로 나가지 않음)</td>
      <td>Art. 5 (적법성), Art. 32 (처리 보안) <small>전송 전 가명처리</small></td>
      <td>164.502(d), 164.514(b) <small>비식별화 방법론</small></td>
      <td>Section 404 <small>데이터 흐름에 대한 내부 통제</small></td>
      <td>Art. 10 (데이터 거버넌스), Art. 15 (사이버보안) <small>데이터 품질 및 보호 요건</small></td>
    </tr>
    <tr>
      <td>로컬 복원 (토큰 볼트)</td>
      <td>Art. 32 <small>가명처리는 통제된 환경 내에서만 역변환 가능</small></td>
      <td>164.514(c) <small>재식별 키 분리</small></td>
      <td>Section 404 <small>인가된 재식별만 허용</small></td>
      <td>Art. 10 <small>정당한 사용에 한해 역변환 허용</small></td>
    </tr>
    <tr>
      <td>감사 로그 (모든 이벤트)</td>
      <td>Art. 30 <small>처리 활동 기록</small></td>
      <td>164.312(b) <small>감사 통제</small></td>
      <td>Section 404, 802 <small>내부 통제 + 기록 보관</small></td>
      <td>Art. 12, 13, 19 <small>로깅, 투명성, 적합성</small></td>
    </tr>
    <tr>
      <td>정책 버전 관리 + 시점 이동</td>
      <td>Art. 5(2), 24 <small>책임 원칙</small></td>
      <td>164.316 <small>정책 및 절차</small></td>
      <td>Section 302, 404 <small>정책 변경에 대한 내부 통제</small></td>
      <td>Art. 17, 18 <small>품질 및 리스크 관리 시스템</small></td>
    </tr>
    <tr>
      <td>RBAC + 범위 설정</td>
      <td>Art. 32 <small>접근 통제</small></td>
      <td>164.308(a)(4), 164.312(a) <small>인력 보안 + 접근 통제</small></td>
      <td>Section 404 <small>직무 분리</small></td>
      <td>Art. 14 <small>인간 감독</small></td>
    </tr>
    <tr>
      <td>온프레미스 / Path B 실행</td>
      <td>Art. 44, Chapter V <small>국제 이전 제한 (회피)</small></td>
      <td>164.308(a)(8) <small>비상 계획, 환경 통제</small></td>
      <td>Section 404 <small>환경 통제</small></td>
      <td>Art. 25 <small>고위험 시 적합성 평가</small></td>
    </tr>
    <tr>
      <td>DPA, SCCs, 벤더 보안</td>
      <td>Art. 28 <small>처리자 의무</small></td>
      <td>BAA 동등 <small>비즈니스 파트너 프레임워크</small></td>
      <td>감사인 의존 <small>벤더 관리</small></td>
      <td>Art. 28 <small>제공자 의무</small></td>
    </tr>
  </tbody>
</table>

---

## Section 04: Audit Features

Audit framework
감사 프레임워크

What the audit log captures
감사 로그가 기록하는 항목

Every event in the LLM Capsule lifecycle is logged with structured metadata — ready for review by privacy, security, and compliance teams.
LLM Capsule 라이프사이클의 모든 이벤트는 구조화된 메타데이터와 함께 기록됩니다. 개인정보보호·보안·컴플라이언스 팀이 즉시 검토할 수 있습니다.

Detection events
탐지 이벤트

Every detection: which marker, which document, which version, confidence, timestamp. Reproducible across policy versions.
모든 탐지 기록: 어떤 마커, 어떤 문서, 어떤 버전, 신뢰도, 타임스탬프. 정책 버전에 걸쳐 재현 가능합니다.

primary
primary

Policy versions
정책 버전

Yesterday's policy archived, today's enforced. Diff visible. Time-shifting markers — query historical decisions under historical policy.
전일 정책은 보관, 현재 정책은 적용 중. 변경 내역을 확인할 수 있습니다. 시점 이동 마커를 통해 과거 정책 기준으로 과거 결정을 조회할 수 있습니다.

teal
teal

Token mappings
토큰 매핑

Local token vault never leaves. Token issuance + retrieval logged with workflow ID and user identity. Vault encrypted at rest.
로컬 토큰 볼트는 절대 외부로 나가지 않습니다. 토큰 발급·회수는 워크플로우 ID 및 사용자 정보와 함께 기록됩니다. 볼트는 저장 시 암호화됩니다.

amber
amber

Detection accuracy
탐지 정확도

98.1% baseline detection rate measured on industry benchmarks. Per-deployment evaluation against your own document corpus.
업계 벤치마크 기준 기본 탐지율 98.1%. 고객사 문서 코퍼스 기반 배포별 개별 평가를 제공합니다.

coral
coral

Model + path routing
모델 + 경로 라우팅

Which workflow routed to which model on which path (A external / B on-prem). Full per-event traceability for regulator review.
어떤 워크플로우가 어떤 모델에 어떤 경로(A 외부 / B 온프레미스)로 라우팅되었는지. 규제 기관 검토를 위한 이벤트별 완전한 추적성을 제공합니다.

dark
dark

---

## Section 05: Admin Console

Admin console
관리자 콘솔

The control surface for security and compliance teams
보안·컴플라이언스 팀을 위한 통합 제어 화면

One console for policies, audit, detection accuracy, and deployment health.
정책·감사·탐지 정확도·배포 상태를 하나의 콘솔에서 관리합니다.

Admin Console screenshot · same asset as 02_product page
관리자 콘솔 스크린샷 · 02_product 페이지와 동일 에셋

Tabs: Audit · Policies · Tokens · Detection · Models
탭: 감사 · 정책 · 토큰 · 탐지 · 모델

Live event stream + policy version diff + detection accuracy chart
라이브 이벤트 스트림 + 정책 버전 차이 + 탐지 정확도 차트

---

## Section 06: Downloads

Compliance downloads
컴플라이언스 문서 다운로드

Documentation for procurement and compliance
구매·컴플라이언스 팀을 위한 문서

The documents your legal, security, and procurement teams need to move forward. Form-gated to coordinate with Sales / Customer Success on questions.
법무·보안·구매 팀이 검토를 진행하는 데 필요한 문서입니다. 담당자와 협의를 위해 양식 작성 후 제공됩니다.

📄
📄

FORM-GATED · 1 BUSINESS DAY
양식 작성 필요 · 영업일 1일 이내

Data Processing Agreement (DPA) Template
데이터 처리 계약서 (DPA) 템플릿

CUBIG's standard DPA template aligned with GDPR Article 28 obligations. Includes Standard Contractual Clauses (SCCs) for international transfers. Customizable for sector-specific requirements.
GDPR Article 28 의무에 부합하는 CUBIG 표준 DPA 템플릿입니다. 국제 이전을 위한 표준 계약 조항(SCCs)이 포함되어 있습니다. 산업별 요건에 맞게 커스터마이징 가능합니다.

Request DPA →
DPA 요청 →

/request-dpa
/request-dpa

📋
📋

FORM-GATED · 1 BUSINESS DAY
양식 작성 필요 · 영업일 1일 이내

Vendor Security Questionnaire
벤더 보안 질문지

Pre-filled CUBIG responses to standard SIG, CAIQ, and SOC2 vendor security questionnaires. For procurement and security review teams. Includes architectural diagrams and audit framework details.
표준 SIG, CAIQ, SOC2 벤더 보안 질문지에 대한 CUBIG 사전 작성 답변입니다. 구매·보안 검토 팀을 위해 아키텍처 다이어그램과 감사 프레임워크 상세 내용이 포함되어 있습니다.

Request Questionnaire →
질문지 요청 →

/request-vendor-questionnaire
/request-vendor-questionnaire

---

## Section 07: CTA Strip

Compliance, security, and procurement teams welcome.
컴플라이언스·보안·구매 팀, 환영합니다.

Bring your regulatory profile, your standard vendor security questionnaire, and your DPA template. We respond inside one business day.
규제 프로필, 표준 벤더 보안 질문지, DPA 템플릿을 지참하십시오. 영업일 1일 이내에 답변 드립니다.

Request a Live Demo
라이브 데모 요청

/request-a-demo
/request-a-demo

View Architecture
아키텍처 보기

/architecture
/architecture

Browse Resources
리소스 둘러보기

/resources
/resources
