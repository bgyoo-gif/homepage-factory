// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<h2>The NOC AI adoption barrier</h2>
<p>Every Tier-1 telecom operator wants AI in the NOC. The use cases are obvious: faster RCA, automated ticket triage, customer-impact analysis, network anomaly detection, runbook drafting. The economics are obvious too — 30-50% reduction in MTTR, 4-8x throughput on incident review, deflected escalations.</p>
<p>But the data is the problem. NOC tickets carry subscriber identities, device IDs, circuit IDs, IP ranges, call records, and network configurations. Field-level PII guardrails detect names and emails, but they don't see the operational data — the alarm sequences, the topology graphs, the SLA risk scores, the BSS records — that real NOC analysis depends on. And the regulatory profile (national telecom regulator + GDPR + sovereign data requirements) means raw operational data cannot be transmitted to an external LLM endpoint.</p>
<p>Most operators stall here. Pilot stays pilot. AI projects never demonstrate value. Shadow AI emerges — engineers paste anonymized snippets into ChatGPT, getting half-useful answers without governance.</p>

<h2>What the AI enablement data layer changes</h2>
<p>An <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> like LLM Capsule sits between the NOC's existing systems (ticket platform, NOC console, log viewer, runbook DB) and the LLM endpoint. It does four things:</p>
<ol>
<li>Reads NOC tickets and operational data from existing systems via REST/gRPC/JDBC connectors — no migration.</li>
<li>Encapsulates sensitive elements locally using <a href="/glossary/structure-preserving-encapsulation">structure-preserving encapsulation</a> with <a href="/glossary/differential-privacy">differential-privacy-based protection</a>. Subscriber IDs, device IDs, circuit IDs, IP ranges become tokens; the document structure (table relationships, alarm sequence, hierarchy) survives intact.</li>
<li>Routes the capsule (only the capsule) to the approved LLM endpoint or, for stricter workflows, an on-prem local model.</li>
<li>Restores the LLM output back into the originating ticket using a local token vault. The end-user sees a ticket with real subscriber IDs and device IDs and an AI-generated RCA recommendation — never knowing the LLM saw only the capsule.</li>
</ol>

<h2>Five operational data categories the data layer protects</h2>
<p>Telecom NOC operations carry data that PII guardrails can't see. The data layer must handle all five:</p>
<ul>
<li><strong>Subscriber data</strong> — MSISDN, IMSI, IMEI, customer name, account number, billing address, plan tier</li>
<li><strong>Network identifiers</strong> — DEVICE_ID, SITE_ID, CIRCUIT_ID, RAN cell ID, IP ranges, VLAN tags, MAC addresses</li>
<li><strong>Operational sequences</strong> — alarm chains, outage history, RCA pattern, escalation paths, ticket dependencies</li>
<li><strong>SLA / business context</strong> — enterprise customer name, contract terms, SLA tier, business impact estimates</li>
<li><strong>Configuration data</strong> — device configs, routing tables, BGP peering, firewall rules, network topology</li>
</ul>

<h2>Five-step deployment pattern</h2>

<h3>Step 1 — Connector inventory</h3>
<p>Identify the systems the data layer needs to read from and write to. Typical telecom inventory: ServiceNow (ITSM), Remedy / Jira (ticket), Splunk / Grafana / proprietary (logs &amp; alarms), internal NOC console, OSS configuration DB, BSS subscriber DB, runbook wiki. LLM Capsule provides REST, gRPC, JDBC, and Graph API connectors. Most deployments need 4-6 connectors active.</p>

<h3>Step 2 — Marker policy definition</h3>
<p>Define the markers that must be encapsulated. Start with the 11-marker starter pack (subscriber IDs, network identifiers, internal codenames, etc.). Add custom markers for operator-specific identifiers — internal site naming conventions, service tier codes, regulatory reference numbers. Define the policy version, scope (NOC team / customer ops / network engineering), and RBAC. Time-shift markers: yesterday it was network logs, tomorrow it might be M&amp;A-related codes during a merger.</p>

<h3>Step 3 — Path selection</h3>
<p>Most NOC workflows can use Path A — external approved LLM with capsule data only. Strict workflows (lawful intercept, regulator-restricted networks, classified subscriber segments) use Path B — on-prem local lightweight model. Path is policy-driven per workflow, not per deployment, so a single Capsule instance can route different ticket types to different paths.</p>

<h3>Step 4 — Workflow integration</h3>
<p>Wire LLM Capsule into the NOC ticket lifecycle. Three integration points work well: (1) on ticket creation — auto-generate initial classification + recommendation; (2) on ticket investigation — analyst-triggered RCA generation; (3) on ticket closure — auto-draft post-mortem. The restored output appears in the originating ticket UI; analysts work in their familiar tool.</p>

<h3>Step 5 — Audit + governance</h3>
<p>Configure the audit dashboard. Every encapsulation, processing, and restoration event lands in the audit log with policy version, model used, latency, and detection summary. Set up monthly governance review with the operator's compliance team. Aligned with GDPR, telecom regulator requirements, and SOX where the operator is publicly listed.</p>

<h2>Real customer outcomes</h2>
<p>SK Telecom adopted LLM Capsule for NOC RCA generation and customer-impact analysis. Subscriber data, call records, IP addresses, and network configs are de-identified before any LLM call.</p>
<p>Deutsche Telekom recognized LLM Capsule in <strong>T Challenge 2026 — Top 12 in Data Security &amp; Governance</strong>. The challenge specifically evaluates AI enablement under sovereign data and EU regulatory constraints. LLM Capsule's structure-preserving capsule + DP protection + on-prem execution path matched the operator-grade requirements.</p>

<h2>Common deployment pitfalls</h2>
<ul>
<li><strong>Treating it as a security tool.</strong> LLM Capsule is an AI enablement data layer, not a security gateway. Position the project as "AI for the NOC" — not "AI risk reduction."</li>
<li><strong>Skipping marker definition.</strong> Operators that lean on the starter pack alone leave operator-specific identifiers exposed. Define your custom markers in week 1.</li>
<li><strong>Single execution path.</strong> Deploying only Path A leaves stricter workflows blocked. Both paths should be live before pilot exit.</li>
<li><strong>Audit treated as afterthought.</strong> Telecom regulators expect chain-of-custody for AI interactions. The audit dashboard must be live from day 1, not bolted on at production.</li>
</ul>

<h2>Getting started</h2>
<p>The fastest path: bring one real NOC ticket, one operational data sample, and one regulatory constraint (national telecom regulator, GDPR, sovereign region). LLM Capsule deploys on a sample workflow within 30 minutes and generates an evaluation report on detection accuracy, restoration rate, and policy fit.</p>
<p><a href="/request-a-demo" class="btn btn--primary">Request a NOC AI demo</a></p>`

const FAQ_JSON_LD = ``

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "How to deploy AI in a telecom NOC without exposing network data",
    lead: "A practical guide for telecom operators bringing AI into the NOC, OSS/BSS, and customer operations — without exposing subscriber identities, call records, IP addresses, or network configurations.",
    category: "Industry · Telecom",
    readTime: "12 min read",
    dateUpdated: "Updated April 2025",
    tldrLabel: "TL;DR — Definition",
    tldrBody: "A telecom NOC AI deployment uses an AI enablement data layer to encapsulate subscriber identities, network identifiers (DEVICE_ID, SITE_ID, CIRCUIT_ID), call records, IP addresses, and network configurations locally before any data reaches an external LLM. The LLM generates RCA, customer-impact analysis, and ticket recommendations on the protected capsule; outputs are restored back into the originating ticket inside the operator's environment. Validated at SK Telecom and recognized at Deutsche Telekom T Challenge 2026 Top 12 in Data Security & Governance.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/telecom-noc-ai-deployment",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a telecom NOC without exposing network data",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "AI on network operations data",
    related1Href: "/resources/learn/ai-on-network-operations-data",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: AI enablement data layer",
    related3Href: "/resources/glossary/ai-enablement-data-layer",
    related4Title: "Solutions: Telecom industry deep dive",
    related4Href: "/solutions",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "네트워크 데이터를 노출하지 않고 통신사 NOC에 AI를 배포하는 방법",
    lead: "NOC, OSS/BSS, 고객 운영에 AI를 도입하려는 통신사를 위한 실무 가이드 — 가입자 정보, 통화 기록, IP 주소, 네트워크 구성은 절대 외부로 나가지 않습니다.",
    category: "산업 · 통신",
    readTime: "12분 읽기",
    dateUpdated: "2025년 4월 업데이트",
    tldrLabel: "TL;DR — 정의",
    tldrBody: "통신사 NOC AI 배포는 데이터 레이어를 활용해 가입자 정보, 네트워크 식별자(DEVICE_ID, SITE_ID, CIRCUIT_ID), 통화 기록, IP 주소, 네트워크 구성을 외부 LLM에 전달되기 전에 로컬에서 캡슐화합니다. LLM은 보호된 캡슐을 기반으로 RCA, 고객 영향 분석, 티켓 권고안을 생성하며, 결과물은 운영사 환경 내 원본 티켓으로 자동 복원됩니다. SK Telecom에서 실증 검증되었으며, Deutsche Telekom T Challenge 2026 Data Security & Governance 부문 Top 12에 선정되었습니다.",
    bodyHtml: `<h2>NOC AI 도입의 장벽</h2>

<p>모든 1등급 통신 사업자는 NOC에 AI를 도입하고자 합니다. 활용 사례는 명확합니다. 빠른 RCA, 자동화된 티켓 분류, 고객 영향 분석, 네트워크 이상 탐지, 런북 초안 작성. 경제적 효과도 분명합니다 — MTTR 30~50% 단축, 장애 검토 처리량 4~8배 향상, 에스컬레이션 감소.</p>

<p>문제는 데이터입니다. NOC 티켓에는 가입자 정보, 기기 ID, 회선 ID, IP 범위, 통화 기록, 네트워크 구성이 담겨 있습니다. 필드 수준 PII 가드레일은 이름과 이메일은 감지하지만, 실제 NOC 분석에 필요한 운영 데이터 — 알람 시퀀스, 토폴로지 그래프, SLA 위험 점수, BSS 기록 — 는 탐지하지 못합니다. 여기에 통신 규제 당국·GDPR·데이터 주권 요건이 더해지면, 원시 운영 데이터를 외부 LLM 엔드포인트로 전송하는 것 자체가 불가능합니다.</p>

<p>대부분의 운영사는 여기서 막힙니다. 파일럿은 파일럿으로 끝납니다. AI 프로젝트는 가치를 입증하지 못합니다. 그 사이 섀도 AI가 등장합니다 — 엔지니어들이 익명화된 스니펫을 ChatGPT에 붙여넣어 거버넌스 없이 절반짜리 답변을 얻는 상황입니다.</p>

<h2>데이터 레이어가 바꾸는 것</h2>

<p>LLM Capsule 같은 <a href="/glossary/ai-enablement-data-layer">데이터 레이어</a>는 NOC의 기존 시스템(티켓 플랫폼, NOC 콘솔, 로그 뷰어, 런북 DB)과 LLM 엔드포인트 사이에 위치합니다. 이 레이어는 네 가지 역할을 수행합니다.</p>

  <li>기존 시스템에서 REST/gRPC/JDBC 커넥터를 통해 NOC 티켓 및 운영 데이터를 읽어옵니다 — 데이터 마이그레이션 없이.</li>

  <li><a href="/glossary/structure-preserving-encapsulation">문서 구조 보존 캡슐화</a>와 <a href="/glossary/differential-privacy">차등 프라이버시 기반 보호</a>를 적용해 민감 요소를 로컬에서 캡슐화합니다. 가입자 ID, 기기 ID, 회선 ID, IP 범위는 토큰으로 변환되고, 문서 구조(테이블 관계, 알람 시퀀스, 계층 구조)는 그대로 유지됩니다.</li>

  <li>캡슐(캡슐만)을 승인된 LLM 엔드포인트 또는, 더 엄격한 워크플로우의 경우 온프레미스 로컬 모델로 라우팅합니다.</li>

  <li>로컬 토큰 보관소를 사용해 LLM 출력을 원본 티켓으로 자동 복원합니다. 최종 사용자는 실제 가입자 ID와 기기 ID가 포함된 티켓과 AI가 생성한 RCA 권고안을 확인합니다 — LLM이 캡슐만 처리했다는 사실을 알 필요 없이.</li>
</ol>

<h2>데이터 레이어가 보호하는 5가지 운영 데이터 범주</h2>

<p>통신사 NOC 운영에는 PII 가드레일이 감지하지 못하는 데이터가 포함됩니다. 데이터 레이어는 다음 다섯 가지를 모두 처리해야 합니다.</p>

  <li><strong>Subscriber data</strong> — MSISDN, IMSI, IMEI, customer name, account number, billing address, plan tier</li>
  <li><strong>가입자 데이터</strong> — MSISDN, IMSI, IMEI, 고객 이름, 계정 번호, 청구 주소, 요금제 등급</li>

  <li><strong>네트워크 식별자</strong> — DEVICE_ID, SITE_ID, CIRCUIT_ID, RAN 셀 ID, IP 범위, VLAN 태그, MAC 주소</li>

  <li><strong>운영 시퀀스</strong> — 알람 체인, 장애 이력, RCA 패턴, 에스컬레이션 경로, 티켓 의존성</li>

  <li><strong>SLA / 비즈니스 컨텍스트</strong> — 기업 고객명, 계약 조건, SLA 등급, 비즈니스 영향 추정치</li>

  <li><strong>구성 데이터</strong> — 기기 설정, 라우팅 테이블, BGP 피어링, 방화벽 규칙, 네트워크 토폴로지</li>
</ul>

<h2>5단계 배포 패턴</h2>

<h3>Step 1 — 커넥터 인벤토리</h3>

<p>데이터 레이어가 읽고 쓸 시스템을 파악합니다. 통신사의 일반적인 인벤토리: ServiceNow(ITSM), Remedy / Jira(티켓), Splunk / Grafana / 자체 시스템(로그 및 알람), 내부 NOC 콘솔, OSS 구성 DB, BSS 가입자 DB, 런북 위키. LLM Capsule은 REST, gRPC, JDBC, Graph API 커넥터를 제공합니다. 대부분의 배포에서 4~6개 커넥터가 활성화됩니다.</p>

<h3>Step 2 — 마커 정책 정의</h3>

<p>캡슐화해야 할 마커를 정의합니다. 11가지 마커 스타터 팩(가입자 ID, 네트워크 식별자, 내부 코드명 등)에서 시작합니다. 운영사 고유 식별자 — 내부 사이트 명명 규칙, 서비스 등급 코드, 규제 참조 번호 — 에 대한 커스텀 마커를 추가합니다. 정책 버전, 적용 범위(NOC 팀 / 고객 운영 / 네트워크 엔지니어링), RBAC를 정의합니다. 마커는 시간에 따라 달라집니다. 어제는 네트워크 로그였다면, 인수합병 중에는 M&amp;A 관련 코드가 될 수 있습니다.</p>

<h3>Step 3 — 경로 선택</h3>

<p>대부분의 NOC 워크플로우는 Path A — 캡슐 데이터만 사용하는 외부 승인 LLM — 를 사용할 수 있습니다. 엄격한 워크플로우(합법적 도청, 규제 제한 네트워크, 기밀 가입자 세그먼트)는 Path B — 온프레미스 경량 로컬 모델 — 를 사용합니다. 경로는 배포 단위가 아닌 워크플로우 단위로 정책에 따라 결정됩니다. 단일 Capsule 인스턴스가 티켓 유형별로 서로 다른 경로로 라우팅할 수 있습니다.</p>

<h3>Step 4 — 워크플로우 통합</h3>

<p>LLM Capsule을 NOC 티켓 라이프사이클에 연결합니다. 세 가지 통합 지점이 효과적입니다. (1) 티켓 생성 시 — 초기 분류 및 권고안 자동 생성, (2) 티켓 조사 시 — 분석가 트리거 RCA 생성, (3) 티켓 종결 시 — 사후 분석 자동 초안 작성. 복원된 결과물은 원본 티켓 UI에 표시되며, 분석가는 익숙한 도구 안에서 그대로 작업합니다.</p>

<h3>Step 5 — 감사 + 거버넌스</h3>

<p>감사 대시보드를 구성합니다. 모든 캡슐화·처리·복원 이벤트가 정책 버전, 사용 모델, 지연 시간, 탐지 요약과 함께 감사 이력에 기록됩니다. 운영사 컴플라이언스 팀과 월별 거버넌스 검토를 설정합니다. GDPR, 통신 규제 당국 요건, 상장사의 경우 SOX에 부합합니다.</p>

<h2>실제 고객 성과</h2>

<p>SK Telecom은 NOC RCA 생성 및 고객 영향 분석에 LLM Capsule을 도입했습니다. 가입자 데이터, 통화 기록, IP 주소, 네트워크 구성은 LLM 호출 전에 직접 비식별화됩니다.</p>

<p>Deutsche Telekom은 <strong>T Challenge 2026 — Data Security &amp; Governance 부문 Top 12</strong>에 LLM Capsule을 선정했습니다. 이 챌린지는 데이터 주권 및 EU 규제 환경 하에서의 AI 활성화 역량을 평가합니다. LLM Capsule의 문서 구조 보존 캡슐 + 차등 프라이버시 보호 + 온프레미스 실행 경로가 통신사 수준 요건에 부합했습니다.</p>

<h2>배포 시 흔한 실수</h2>

  <li><strong>Treating it as a security tool.</strong> LLM Capsule is an AI enablement data layer, not a security gateway. Position the project as "AI for the NOC" — not "AI risk reduction."</li>
  <li><strong>보안 툴로 접근하는 것.</strong> LLM Capsule은 AI 활성화를 위한 데이터 레이어이지, 보안 게이트웨이가 아닙니다. 프로젝트를 "AI 위험 감소"가 아닌 "NOC를 위한 AI"로 포지셔닝합니다.</li>

  <li><strong>마커 정의를 건너뛰는 것.</strong> 스타터 팩만 사용하는 운영사는 운영사 고유 식별자를 그대로 노출합니다. 1주차에 커스텀 마커를 직접 정의합니다.</li>

  <li><strong>단일 실행 경로만 사용하는 것.</strong> Path A만 배포하면 더 엄격한 워크플로우가 차단됩니다. 파일럿 종료 전에 두 경로 모두 가동합니다.</li>

  <li><strong>감사를 나중 문제로 미루는 것.</strong> 통신 규제 당국은 AI 상호작용에 대한 연속성 있는 감사 이력을 요구합니다. 감사 대시보드는 운영 단계에 추가하는 것이 아니라, 첫날부터 가동해야 합니다.</li>
</ul>

<h2>시작하기</h2>

<p>가장 빠른 시작 방법: 실제 NOC 티켓 1건, 운영 데이터 샘플 1건, 규제 요건 1개(통신 규제 당국, GDPR, 데이터 주권 지역)를 준비합니다. LLM Capsule은 30분 내에 샘플 워크플로우에 배포되고, 탐지 정확도·복원율·정책 적합성에 대한 평가 리포트를 바로 생성합니다.</p>

<p><a href="/request-a-demo" class="tnoc-btn tnoc-btn--primary">NOC AI 데모 요청</a></p>

<h2>관련 자료</h2>

  <li><a href="/learn/ai-on-network-operations-data">AI on network operations data</a></li>
  <li><a href="/learn/ai-on-network-operations-data">네트워크 운영 데이터 위의 AI</a></li>

  <li><a href="/learn/on-prem-llm-execution-path">온프레미스 LLM 실행 경로</a></li>

  <li><a href="/glossary/ai-enablement-data-layer">용어집: AI enablement data layer</a></li>

  <li><a href="/solutions">솔루션: 통신 산업 심층 분석</a></li>
</ul>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/telecom-noc-ai-deployment",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a telecom NOC without exposing network data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "AI on network operations data",
    related1Href: "/resources/learn/ai-on-network-operations-data",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: AI enablement data layer",
    related3Href: "/resources/glossary/ai-enablement-data-layer",
    related4Title: "Solutions: Telecom industry deep dive",
    related4Href: "/solutions",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "KI im Telekommunikations-NOC einsetzen — ohne Offenlegung von Netzwerkdaten",
    lead: "Ein praxisorientierter Leitfaden für Telekommunikationsanbieter, die KI in den NOC, OSS/BSS und den Kundenbetrieb integrieren möchten — ohne Teilnehmeridentitäten, Anrufaufzeichnungen, IP-Adressen oder Netzwerkkonfigurationen offenzulegen.",
    category: "Branche · Telekommunikation",
    readTime: "12 Min. Lesezeit",
    dateUpdated: "Aktualisiert April 2025",
    tldrLabel: "Definition · Kurzfassung",
    tldrBody: "Ein NOC-KI-Deployment im Telekommunikationsbereich nutzt eine KI-Datenschicht, um Teilnehmeridentitäten, Netzwerkkennungen (DEVICE_ID, SITE_ID, CIRCUIT_ID), Anrufaufzeichnungen, IP-Adressen und Netzwerkkonfigurationen lokal zu kapsulieren — bevor Daten ein externes LLM erreichen. Das LLM erstellt RCA-Analysen, Kundenwirkungsanalysen und Ticket-Empfehlungen auf der geschützten Kapsel. Die Ausgaben werden innerhalb der Betreiberumgebung in das ursprüngliche Ticket zurückgeführt. Produktiv bei SK Telecom validiert und beim Deutsche Telekom T Challenge 2026 als Top 12 in Data Security &amp; Governance ausgezeichnet.",
    bodyHtml: `<h2>Die Hürde bei der KI-Einführung im NOC</h2>

<p>Nahezu jeder Tier-1-Telekommunikationsanbieter plant den KI-Einsatz im NOC. Die Anwendungsfälle sind eindeutig: schnellere RCA, automatisierte Ticket-Triage, Kundenwirkungsanalyse, Netzwerkanomalieerkennung und Runbook-Erstellung. Die wirtschaftlichen Vorteile sind ebenso klar — Reduktion der MTTR um 30 bis 50 %, 4- bis 8-facher Durchsatz bei der Incident-Auswertung und weniger Eskalationen.</p>

<p>Das Problem liegt in den Daten. NOC-Tickets enthalten Teilnehmeridentitäten, Geräte-IDs, Leitungs-IDs, IP-Bereiche, Anrufaufzeichnungen und Netzwerkkonfigurationen. PII-Schutzmaßnahmen auf Feldebene erkennen Namen und E-Mail-Adressen, erfassen jedoch nicht die operativen Daten — Alarmsequenzen, Topologiegraphen, SLA-Risikobewertungen und BSS-Datensätze — die eine fundierte NOC-Analyse erfordert. Die regulatorische Ausgangslage (nationaler Telekommunikationsregulator, DSGVO (GDPR) und Anforderungen an datensouveräne Verarbeitung) untersagt zudem die Übermittlung roher Betriebsdaten an externe LLM-Endpunkte.</p>

<p>Die meisten Anbieter kommen an dieser Stelle nicht weiter. Das Pilotprojekt bleibt Pilotprojekt. KI-Initiativen entfalten keinen messbaren Nutzen. Gleichzeitig entsteht Schatten-KI: Ingenieure kopieren anonymisierte Auszüge in ChatGPT und erhalten bedingt verwertbare Antworten ohne jede Governance.</p>

<h2>Was die KI-Datenschicht verändert</h2>

<p>Eine <a href="/glossary/ai-enablement-data-layer">KI-Datenschicht</a> wie LLM Capsule positioniert sich zwischen den bestehenden NOC-Systemen (Ticket-Plattform, NOC-Konsole, Log-Viewer, Runbook-Datenbank) und dem LLM-Endpunkt. Sie übernimmt vier Aufgaben:</p>

<ol>
<li>Operative Daten und NOC-Tickets werden über REST/gRPC/JDBC-Konnektoren aus den bestehenden Systemen ausgelesen — ohne Datenmigration.</li>
<li>Sensible Elemente werden lokal kapsuliert — mit <a href="/glossary/structure-preserving-encapsulation">strukturerhaltender Kapsulierung</a> und <a href="/glossary/differential-privacy">Differential-Privacy-Schutz</a>. Teilnehmer-IDs, Geräte-IDs, Leitungs-IDs und IP-Bereiche werden durch Token ersetzt; die Dokumentstruktur (Tabellenbeziehungen, Alarmsequenz, Hierarchie) bleibt vollständig erhalten.</li>
<li>Die Kapsel — und nur die Kapsel — wird an den zugelassenen LLM-Endpunkt übermittelt. Für Workflows mit strengeren Anforderungen steht ein lokales On-Premise-Modell zur Verfügung.</li>
<li>Die LLM-Ausgabe wird über einen lokalen Token-Vault in das ursprüngliche Ticket zurückgeführt. Der Endnutzer sieht ein Ticket mit echten Teilnehmer-IDs und Geräte-IDs sowie einer KI-generierten RCA-Empfehlung — ohne dass das LLM jemals Zugriff auf die Originaldaten hatte.</li>
</ol>

<h2>Fünf operative Datenkategorien unter dem Schutz der Datenschicht</h2>

<p>Der NOC-Betrieb im Telekommunikationsbereich erzeugt Daten, die PII-Schutzmaßnahmen nicht erfassen. Die Datenschicht muss alle fünf Kategorien abdecken:</p>

<ul>
<li><strong>Teilnehmerdaten</strong> — MSISDN, IMSI, IMEI, Kundenname, Kontonummer, Rechnungsadresse, Tarifklasse</li>
<li><strong>Netzwerkkennungen</strong> — DEVICE_ID, SITE_ID, CIRCUIT_ID, RAN-Zellen-ID, IP-Bereiche, VLAN-Tags, MAC-Adressen</li>
<li><strong>Operative Sequenzen</strong> — Alarmketten, Ausfallhistorie, RCA-Muster, Eskalationspfade, Ticket-Abhängigkeiten</li>
<li><strong>SLA- und Geschäftskontext</strong> — Unternehmenskundenname, Vertragsbedingungen, SLA-Klasse, Schätzungen zur Geschäftsauswirkung</li>
<li><strong>Konfigurationsdaten</strong> — Gerätekonfigurationen, Routing-Tabellen, BGP-Peering, Firewall-Regeln, Netzwerktopologie</li>
</ul>

<h2>Fünfstufiges Einführungsmuster</h2>

<h3>Schritt 1 — Connector-Bestandsaufnahme</h3>
<p>Die Systeme, aus denen die Datenschicht liest und in die sie schreibt, werden vollständig erfasst. Eine typische Telekommunikationsumgebung umfasst: ServiceNow (ITSM), Remedy oder Jira (Ticketing), Splunk, Grafana oder proprietäre Systeme (Logs und Alarme), interne NOC-Konsole, OSS-Konfigurationsdatenbank, BSS-Teilnehmerdatenbank und Runbook-Wiki. LLM Capsule stellt REST-, gRPC-, JDBC- und Graph-API-Konnektoren bereit. Die meisten Deployments benötigen 4 bis 6 aktive Konnektoren.</p>

<h3>Schritt 2 — Markierungsrichtlinien definieren</h3>
<p>Die zu kapsulierenden Marker werden festgelegt. Als Ausgangspunkt dient das 11-Marker-Starter-Paket (Teilnehmer-IDs, Netzwerkkennungen, interne Codenamen u. a.). Anbieter-spezifische Ergänzungen umfassen interne Standortbenennungskonventionen, Serviceklassen-Codes und regulatorische Referenznummern. Richtlinienversion, Geltungsbereich (NOC-Team, Kundenbetrieb, Netzwerktechnik) und RBAC werden dokumentiert. Marker sind zeitlich anpassbar: heute Netzwerkprotokolle, morgen M&amp;A-bezogene Codes während einer Fusion.</p>

<h3>Schritt 3 — Ausführungspfad auswählen</h3>
<p>Die meisten NOC-Workflows können Pfad A nutzen — ein zugelassenes externes LLM, das ausschließlich Kapseldaten erhält. Für Workflows mit besonderer Schutzpflicht (Lawful Intercept, regulatorisch eingeschränkte Netze, klassifizierte Teilnehmersegmente) wird Pfad B eingesetzt: ein lokales Leichtgewichtmodell ohne externe Übertragung. Der Pfad wird richtliniengesteuert pro Workflow vergeben, nicht pro Deployment. Eine einzige Capsule-Instanz kann verschiedene Ticket-Typen auf unterschiedliche Pfade verteilen.</p>

<h3>Schritt 4 — Workflow-Integration</h3>
<p>LLM Capsule wird in den Lebenszyklus des NOC-Tickets eingebunden. Drei Integrationspunkte haben sich bewährt: (1) bei Ticket-Erstellung — automatische Erstkategorisierung und Empfehlung; (2) bei der Ticket-Untersuchung — analystenangestoßene RCA-Generierung; (3) bei Ticket-Abschluss — automatischer Post-Mortem-Entwurf. Die wiederhergestellte Ausgabe erscheint in der bekannten Ticket-Oberfläche; Analysten arbeiten in ihrer gewohnten Umgebung.</p>

<h3>Schritt 5 — Prüfprotokoll und Governance</h3>
<p>Das Prüf-Dashboard wird konfiguriert. Jeder Kapsulierungs-, Verarbeitungs- und Wiederherstellungsvorgang wird im Prüfprotokoll erfasst — mit Richtlinienversion, verwendetem Modell, Latenz und Erkennungszusammenfassung. Eine monatliche Governance-Überprüfung mit dem Compliance-Team des Betreibers wird eingerichtet. Die Lösung ist auf DSGVO (GDPR), Telekommunikationsregulatorik und SOX (bei börsennotierten Betreibern) ausgerichtet.</p>

<h2>Ergebnis aus der Praxis</h2>

<p>SK Telecom setzt LLM Capsule für die NOC-RCA-Generierung und Kundenwirkungsanalyse ein. Teilnehmerdaten, Anrufaufzeichnungen, IP-Adressen und Netzwerkkonfigurationen werden vor jedem LLM-Aufruf lokal de-identifiziert.</p>

<p>Deutsche Telekom hat LLM Capsule beim <strong>T Challenge 2026</strong> als <strong>Top 12 in der Kategorie Data Security &amp; Governance</strong> ausgezeichnet. Die Herausforderung bewertet den KI-Einsatz unter souveränen Datenanforderungen und EU-regulatorischen Rahmenbedingungen. Die Kombination aus strukturerhaltender Kapsulierung, Differential-Privacy-Schutz und On-Premise-Ausführungspfad erfüllte die betreiberspezifischen Anforderungen.</p>

<h2>Häufige Fehler bei der Einführung</h2>

<ul>
<li><strong>Als Sicherheitswerkzeug positioniert.</strong> LLM Capsule ist eine KI-Datenschicht, kein Security-Gateway. Das Projekt wird intern als „KI für den NOC" kommuniziert — nicht als Maßnahme zur KI-Risikoreduzierung.</li>
<li><strong>Markierungsdefinition übersprungen.</strong> Betreiber, die sich ausschließlich auf das Starter-Paket stützen, lassen anbieter-spezifische Kennungen ungeschützt. Benutzerdefinierte Marker werden in der ersten Woche festgelegt.</li>
<li><strong>Nur ein Ausführungspfad aktiv.</strong> Wer ausschließlich Pfad A aktiviert, blockiert Workflows mit strengeren Anforderungen. Beide Pfade sollten vor dem Abschluss der Pilotphase produktiv sein.</li>
<li><strong>Prüfprotokoll als Nachgedanke behandelt.</strong> Telekommunikationsregulatoren erwarten eine lückenlose Nachvollziehbarkeit von KI-Interaktionen. Das Prüf-Dashboard muss ab Tag 1 produktiv sein — nicht erst nachträglich zum Produktionsstart ergänzt werden.</li>
</ul>

<h2>Einstieg</h2>

<p>Der schnellste Einstieg: Bringen Sie ein reales NOC-Ticket, ein operatives Datenbeispiel und eine regulatorische Anforderung mit (nationaler Telekommunikationsregulator, DSGVO (GDPR), souveräne Region). LLM Capsule wird innerhalb von 30 Minuten auf einem Beispiel-Workflow eingerichtet und erstellt einen Evaluationsbericht zu Erkennungsgenauigkeit, Wiederherstellungsrate und Richtlinienkonformität.</p>

<p><a href="/request-a-demo" class="btn btn--primary">Demo anfordern</a></p>

<h2>Verwandte Artikel</h2>

<ul>
<li><a href="/learn/ai-on-network-operations-data">KI auf Netzwerkbetriebsdaten</a></li>
<li><a href="/learn/on-prem-llm-execution-path">On-Premise-Ausführungspfad für LLMs</a></li>
<li><a href="/glossary/ai-enablement-data-layer">Glossar: KI-Datenschicht</a></li>
<li><a href="/solutions">Lösungen: Telekommunikationsbranche</a></li>
</ul>

---`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/telecom-noc-ai-deployment",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a telecom NOC without exposing network data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "AI on network operations data",
    related1Href: "/resources/learn/ai-on-network-operations-data",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: AI enablement data layer",
    related3Href: "/resources/glossary/ai-enablement-data-layer",
    related4Title: "Solutions: Telecom industry deep dive",
    related4Href: "/solutions",
  },
}

export default function TelecomNocAiDeployment({
  locale = "en",
  backLabel = "",
  backHref = "",
  title = "",
  lead = "",
  category = "",
  readTime = "",
  dateUpdated = "",
  tldrLabel = "",
  tldrBody = "",
  bodyHtml = "",
  canonicalUrl = "",
  datePublished = "",
  dateModified = "",
  inLanguage = "",
  breadcrumbLabel = "",
  faqJsonLd = "",
  relatedSectionLabel = "",
  related1Title = "",
  related1Href = "",
  related2Title = "",
  related2Href = "",
  related3Title = "",
  related3Href = "",
  related4Title = "",
  related4Href = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _title = title || T["title"] || TRANSLATIONS.en["title"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _readTime = readTime || T["readTime"] || TRANSLATIONS.en["readTime"]
  const _dateUpdated = dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"]
  const _tldrLabel = tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"]
  const _tldrBody = tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _canonicalUrl = canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"]
  const _datePublished = datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"]
  const _dateModified = dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"]
  const _inLanguage = inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"]
  const _breadcrumbLabel = breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"]
  const _faqJsonLd = faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"]
  const _relatedSectionLabel = relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"]
  const _related1Title = related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Title = related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Title = related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Title = related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]

  const relatedItems = [
    { _title: _related1Title, href: _related1Href },
    { _title: _related2Title, href: _related2Href },
    { _title: _related3Title, href: _related3Href },
    { _title: _related4Title, href: _related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": _title,
    "description": _lead,
    "inLanguage": _inLanguage,
    "datePublished": _datePublished,
    "dateModified": _dateModified || _datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": _canonicalUrl },
  })

  const breadcrumbJsonLd = _breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": _breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {_faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: _faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside _bodyHtml */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body (e.g. CTA link) */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-_title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={_backHref} className="la-hero__back">{_backLabel}</a>
              <h1 className="la-hero__title">{_title}</h1>
              <p className="la-hero__lead">{_lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{_category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{_readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{_dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{_tldrLabel}</div>
              <p className="la-tldr__body">{_tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{_relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-_title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(TelecomNocAiDeployment, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "" },
  title: { type: ControlType.String, title: "Title", defaultValue: "" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: "", displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
