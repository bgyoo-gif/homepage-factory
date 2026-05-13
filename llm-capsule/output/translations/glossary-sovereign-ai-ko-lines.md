# glossary/sovereign-ai — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Sovereign AI
Sovereign AI

AI workflows that keep data, processing, and audit inside a defined regulatory and geographic boundary.
데이터, 처리, 감사 이력 모두를 규정된 규제·지리적 경계 안에 유지하는 AI 워크플로우입니다.

Concept
개념

## Section 02: Definition

Definition
정의

Sovereign AI means enterprise AI workflows where the underlying data, the AI processing path, and the audit trail all remain inside a defined regulatory and geographic boundary. For European enterprises this typically means GDPR-compliant data handling, in-region LLM endpoints, and full audit for regulator review. For defense and public sector workflows it typically means fully on-prem execution with no external transmission. The practical architecture pattern uses an AI enablement data layer with two execution paths.
Sovereign AI란 기반 데이터, AI 처리 경로, 감사 이력이 모두 규정된 규제·지리적 경계 안에 유지되는 기업 AI 워크플로우를 의미합니다. 유럽 기업의 경우 일반적으로 GDPR 준수 데이터 처리, 역내 LLM 엔드포인트, 규제 기관 검토를 위한 완전한 감사 이력을 갖춰야 합니다. 국방·공공 부문 워크플로우의 경우 외부 전송 없이 완전한 온프레미스 실행이 기본입니다. 실용적인 아키텍처 패턴은 두 가지 실행 경로를 갖춘 데이터 레이어를 사용합니다.

## Section 03: Body HTML

<!-- bodyHtml — HTML 태그 유지, 텍스트만 번역 -->

<h2>지금 중요한 이유</h2>

<p>규제 압박이 강화되고 있습니다. GDPR 누적 과징금은 €40억을 넘어섰고, EU AI Act는 2024년 8월 발효됐습니다. BaFin, ACPR, MAS, FSA, KISA 등 각국 규제 당국은 금융·의료 AI 워크플로우에서 데이터 주권 준수를 명시적으로 요구하고 있습니다. 국방·공공 부문 워크플로우는 처음부터 이를 요구해왔습니다.</p>

<h2>Sovereign AI가 실제로 요구하는 것</h2>

<ul>
<li><strong>데이터 레지던시</strong> — 민감 데이터는 원시 형태로 정의된 지리적·규제적 경계를 벗어나지 않습니다.</li>
<li><strong>처리 경계</strong> — AI 추론은 경계 내부(또는 계약상 동등한) 인프라에서 실행됩니다.</li>
<li><strong>감사 이력 연속성</strong> — 모든 데이터 이벤트는 정책, 모델, 결과와 함께 기록됩니다.</li>
<li><strong>정책 버전 관리</strong> — 무엇이 민감 데이터이며 외부 전송이 허용되는지를 명시적으로 버전화하고 감사 가능하게 관리해야 합니다.</li>
</ul>

<h2>두 가지 실행 경로 아키텍처</h2>

<p>실용적인 구현 방식은 하나의 거버넌스 프레임워크 아래 두 가지 실행 경로를 갖춘 데이터 레이어입니다. Path A(역내 외부 LLM + 캡슐 데이터 전용)는 차등 프라이버시 캡슐 전송이 적절한 계약적 보호 장치와 함께 규제 프로필상 허용되는 워크플로우에 사용합니다. Path B(온프레미스 경량 로컬 모델)는 외부 엔드포인트가 일절 허용되지 않는 워크플로우에 사용합니다. 경로는 워크플로우별로 정책에 따라 결정됩니다.</p>

<h2>흔한 오해</h2>

<ul>
<li><strong>데이터 레지던시 ≠ 데이터 주권.</strong> EU 내 LLM 엔드포인트는 필요 조건이지만 충분 조건이 아닙니다. EU 내 LLM에 들어간 원시 데이터는 여전히 원시 데이터입니다.</li>
<li><strong>Sovereign AI ≠ LLM 사용 금지.</strong> LLM 자체를 회피하는 것은 Sovereign AI 전략이 아니라 회피 전략입니다. Sovereign AI 아키텍처는 주권 제약 안에서 AI를 사용할 수 있도록 합니다.</li>
<li><strong>Sovereign AI ≠ 이분법.</strong> 하나의 기업이 여러 경로를 지원할 수 있습니다. 일부 워크플로우는 외부 경로(캡슐 사용), 일부는 온프레미스로 운영합니다.</li>
</ul>

## Section 04: Related Terms

Two execution paths
두 가지 실행 경로

AI enablement data layer
데이터 레이어

Differential privacy
차등 프라이버시

Learn: Sovereign AI for European enterprises
Learn: 유럽 기업을 위한 Sovereign AI
