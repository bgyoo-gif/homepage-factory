// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"

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

const BODY_HTML = `<h2>Why sovereign AI matters now</h2>
<p>The European regulatory landscape has tightened. GDPR enforcement actions have crossed €4 billion in cumulative fines. The EU AI Act (entered into force August 2024) requires high-risk AI systems — including those used in regulated sectors — to maintain demonstrable transparency, audit trails, and data governance. National regulators (BaFin in Germany, ACPR in France) increasingly expect financial institutions to demonstrate AI data sovereignty. Public sector and defense workflows have always required it.</p>
<p>For European enterprises, this means: AI productivity gains are real, but the architecture has to support sovereignty by design. Sending raw enterprise data to a US-hosted LLM endpoint is no longer acceptable in most regulated workflows. At the same time, completely avoiding LLMs is not acceptable either — the productivity gap is too large.</p>

<h2>The two-path architecture</h2>
<p>The pragmatic architecture supports two execution paths under one governance framework:</p>

<h3>Path A — In-region approved LLM with capsule data only</h3>
<p>The capsule (structure-preserving, differential-privacy-protected) is transmitted to an approved external LLM endpoint hosted in-region (EU-hosted Anthropic, OpenAI EU, Mistral EU, or equivalent). Raw enterprise data does not leave the enterprise environment. Best for workflows where the regulatory profile allows external transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs, etc.).</p>

<h3>Path B — On-prem local lightweight model</h3>
<p>A small private lightweight model runs entirely inside the enterprise environment — Hugging Face quantized model on internal GPU, vLLM-served, or vendor-provided lightweight model. Zero external transmission. Used for workflows where any external endpoint is unacceptable: classified defense workflows, certain financial sector workflows under national regulator requirement, mental health / substance abuse healthcare data.</p>

<p>Path selection is policy-driven per workflow, not per deployment. A single AI enablement data layer instance can route different ticket types, document classes, or business units through different paths.</p>

<h2>GDPR alignment in practice</h2>
<p>The data layer supports GDPR compliance through:</p>
<ul>
<li><strong>Data residency</strong> — encapsulation happens inside the enterprise EU environment; the capsule routes to in-region LLM endpoints; restoration happens locally.</li>
<li><strong>Right to erasure</strong> — local token vault deletion ensures personal data references can be removed in alignment with Article 17.</li>
<li><strong>Data minimization (Article 5)</strong> — only the protected capsule reaches the LLM, not the raw personal data.</li>
<li><strong>Audit trail</strong> — every encapsulation, processing, and restoration event is logged with policy version, model used, latency, and detection summary.</li>
</ul>
<p>Note: this is a technical architecture pattern, not legal guidance. Each enterprise must validate its specific GDPR posture with its own DPO and legal counsel.</p>

<h2>EU AI Act alignment</h2>
<p>The EU AI Act categorizes AI systems by risk. Many enterprise workflows in regulated sectors (banking, insurance, healthcare, public services, employment) fall in the high-risk category, requiring conformity assessment, transparency, human oversight, and data governance. The data layer architecture supports these obligations:</p>
<ul>
<li><strong>Transparency</strong> — restored outputs carry an audit badge identifying the policy and model used.</li>
<li><strong>Human oversight</strong> — the data layer does not act autonomously; it supports human-in-the-loop AI workflows.</li>
<li><strong>Data governance</strong> — markers, policies, and audit trail provide demonstrable governance for the input data.</li>
</ul>

<h2>Validation: Deutsche Telekom T Challenge 2026</h2>
<p>LLM Capsule was recognized in <strong>Deutsche Telekom T Challenge 2026 — Top 12 in Data Security &amp; Governance</strong>. The T Challenge specifically evaluates AI enablement under sovereign data and EU regulatory constraints. The evaluation criteria include data sovereignty architecture, audit governance, integration with operator-grade infrastructure, and on-premise deployability — all areas where the AI enablement data layer pattern matches the regulatory expectation.</p>

<h2>Three deployment archetypes for European enterprises</h2>

<h3>Archetype 1 — Tier-1 Telecom (Path A primary, Path B for sensitive workflows)</h3>
<p>NOC, customer ops, and BSS workflows use Path A with EU-hosted LLM. Lawful intercept, regulator-restricted segments, and certain enterprise customer workflows use Path B.</p>

<h3>Archetype 2 — Federal / national bank (Path B primary, Path A for low-sensitivity)</h3>
<p>Risk review, transaction monitoring, and regulatory reporting use Path B (on-prem). Internal communications drafting and general document summarization may use Path A under DPA.</p>

<h3>Archetype 3 — Defense / classified (Path B only)</h3>
<p>All workflows on Path B. The data layer routes nothing to external endpoints. Audit feeds the command-level governance system.</p>

<h2>Common pitfalls</h2>
<ul>
<li><strong>Treating sovereign AI as binary.</strong> The two-path architecture lets a single enterprise be pragmatic per workflow. Don't lock the whole enterprise into one path.</li>
<li><strong>Confusing data residency with sovereignty.</strong> EU-hosted LLM endpoint helps, but doesn't substitute for capsule encapsulation. Raw data inside an EU LLM is still raw data.</li>
<li><strong>Skipping the DPO conversation.</strong> Sovereign AI architecture decisions should be reviewed with the DPO + privacy / legal team early, not at the end.</li>
<li><strong>Ignoring audit.</strong> Regulators will ask for chain of custody. The audit log must be live from day 1.</li>
</ul>

<h2>Getting started</h2>
<p>Bring one regulated workflow (NOC ticket, claim record, clinical note, regulatory submission) and your enterprise's data residency / sovereignty constraints. LLM Capsule deploys on a sample workflow within 30 minutes and demonstrates Path A and Path B in your environment.</p>
<p><a href="/request-a-demo" class="btn btn--primary">Request a sovereign AI demo</a></p>`

const FAQ_JSON_LD = ``

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Sovereign AI for European enterprises — a practical architecture",
    lead: "Bring AI into regulated European workflows under GDPR, EU AI Act, and national data residency — without choosing between productivity and compliance.",
    category: "Architecture · Sovereign AI",
    readTime: "14 min read",
    dateUpdated: "Updated April 2025",
    tldrLabel: "TL;DR — Definition",
    tldrBody: "Sovereign AI means enterprise AI workflows where data, processing, and audit remain inside a defined regulatory and geographic boundary. For European enterprises, this typically means GDPR-compliant data handling, in-region LLM endpoints (EU-hosted LLM providers, or on-prem local models), and a full audit trail for regulator review. An AI enablement data layer like LLM Capsule provides two execution paths — in-region external LLM with capsule data only, or on-prem local lightweight model — so a single enterprise can adopt sovereign AI without giving up the productivity of best-in-class LLMs.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/sovereign-ai-european-enterprises",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Sovereign AI for European enterprises — a practical architecture",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "How to deploy AI in a telecom NOC without exposing network data",
    related3Href: "/resources/learn/telecom-noc-ai-deployment",
    related4Title: "Glossary: Two execution paths",
    related4Href: "/resources/glossary/two-execution-paths",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "유럽 기업을 위한 Sovereign AI — 실용적인 아키텍처",
    lead: "GDPR, EU AI Act, 국가별 데이터 레지던시 요건을 준수하면서 규제 환경의 유럽 워크플로에 AI를 도입합니다. 생산성과 컴플라이언스 중 하나를 포기하지 않아도 됩니다.",
    category: "ARCHITECTURE · Sovereign AI",
    readTime: "14분 읽기",
    dateUpdated: "2025년 4월 업데이트",
    tldrLabel: "TL;DR — Definition",
    tldrBody: "Sovereign AI란 데이터·처리·감사가 정의된 규제 및 지리적 경계 내에 머무는 기업 AI 워크플로를 의미합니다. 유럽 기업의 경우, GDPR 준수 데이터 처리, 지역 내 LLM 엔드포인트(EU 호스팅 LLM 공급자 또는 온프레미스 로컬 모델), 규제 기관 검토를 위한 완전한 감사 이력이 일반적으로 요구됩니다. LLM Capsule과 같은 AI 데이터 레이어는 두 가지 실행 경로를 제공합니다. 캡슐 데이터만 사용하는 지역 내 외부 LLM(Path A), 또는 온프레미스 로컬 경량 모델(Path B). 기업은 최고 수준 LLM의 생산성을 포기하지 않고도 Sovereign AI를 도입할 수 있습니다.",
    bodyHtml: `<h2>지금 Sovereign AI가 중요한 이유</h2>

<p>유럽의 규제 환경이 강화되고 있습니다. GDPR 집행 과징금은 누적 40억 유로를 넘어섰습니다. 2024년 8월 발효된 EU AI Act는 규제 산업에서 사용되는 고위험 AI 시스템에 투명성·감사 이력·데이터 거버넌스를 입증하도록 요구합니다. 독일 BaFin, 프랑스 ACPR 등 국가 규제 기관은 금융기관의 AI 데이터 주권 입증을 점점 더 강하게 요구하고 있습니다. 공공부문과 방산 워크플로는 이미 항상 이를 요구해 왔습니다.</p>

<p>유럽 기업 입장에서 이는 명확합니다. AI 생산성 향상은 실재하지만, 아키텍처가 설계 단계부터 데이터 주권을 지원해야 합니다. 원본 기업 데이터를 미국에 호스팅된 LLM 엔드포인트로 전송하는 방식은 대부분의 규제 워크플로에서 더 이상 허용되지 않습니다. 그렇다고 LLM을 완전히 배제하는 것도 답이 아닙니다. 생산성 격차가 너무 크기 때문입니다.</p>

<h2>2개 경로 아키텍처</h2>

<p>실용적인 아키텍처는 하나의 거버넌스 프레임워크 아래 두 가지 실행 경로를 지원합니다.</p>

<h3>Path A — 캡슐 데이터만 사용하는 지역 내 승인 LLM</h3>

<p>캡슐(문서 구조 보존, 차등 프라이버시 적용)이 지역 내에 호스팅된 승인 외부 LLM 엔드포인트(EU 호스팅 Anthropic, OpenAI EU, Mistral EU 또는 동등한 서비스)로 전송됩니다. 원본 기업 데이터는 기업 환경을 떠나지 않습니다. 규제 프로파일이 적절한 계약적 보호 장치(DPA, SCCs 등) 하에 차등 프라이버시가 적용된 캡슐의 외부 전송을 허용하는 워크플로에 적합합니다.</p>

<h3>Path B — 온프레미스 로컬 경량 모델</h3>

<p>소형 경량 모델이 기업 환경 내부에서 완전히 실행됩니다. 내부 GPU의 Hugging Face 양자화 모델, vLLM 기반 서빙, 또는 공급업체 제공 경량 모델을 사용합니다. 외부 전송이 없습니다. 외부 엔드포인트가 전혀 허용되지 않는 워크플로에 사용됩니다. 기밀 방산 워크플로, 국가 규제 요건 하의 일부 금융 워크플로, 정신건강·약물남용 관련 의료 데이터가 해당됩니다.</p>

<p>경로 선택은 배포 단위가 아니라 워크플로별 정책이 결정합니다. 단일 AI 데이터 레이어 인스턴스가 티켓 유형·문서 유형·사업 부문에 따라 서로 다른 경로로 라우팅할 수 있습니다.</p>

<h2>GDPR 대응 실무</h2>

<p>데이터 레이어는 다음 방식으로 GDPR 컴플라이언스를 지원합니다.</p>

<ul>
<li><strong>데이터 레지던시</strong> — 캡슐화는 기업의 EU 환경 내부에서 이루어지며, 캡슐은 지역 내 LLM 엔드포인트로 라우팅되고, 복원은 로컬에서 처리됩니다.</li>
<li><strong>삭제권(잊힐 권리)</strong> — 로컬 토큰 볼트 삭제를 통해 제17조에 따라 개인 데이터 참조를 제거할 수 있습니다.</li>
<li><strong>데이터 최소화(제5조)</strong> — LLM에 도달하는 것은 보호된 캡슐뿐입니다. 원본 개인 데이터는 전송되지 않습니다.</li>
<li><strong>감사 이력</strong> — 모든 캡슐화·처리·복원 이벤트가 정책 버전·사용 모델·지연 시간·탐지 요약과 함께 기록됩니다.</li>
</ul>

<p>참고: 이 내용은 기술 아키텍처 패턴으로, 법률 자문이 아닙니다. 각 기업은 자사의 DPO 및 법무팀과 함께 구체적인 GDPR 준수 태세를 검증해야 합니다.</p>

<h2>EU AI Act 대응</h2>

<p>EU AI Act는 AI 시스템을 위험 수준으로 분류합니다. 규제 산업(금융·보험·의료·공공서비스·고용)의 많은 기업 워크플로가 고위험 범주에 해당하며, 적합성 평가·투명성·인간 감독·데이터 거버넌스가 요구됩니다. 데이터 레이어 아키텍처는 이러한 의무를 다음과 같이 지원합니다.</p>

<ul>
<li><strong>투명성</strong> — 복원된 출력에 사용된 정책과 모델을 식별하는 감사 배지가 포함됩니다.</li>
<li><strong>인간 감독</strong> — 데이터 레이어는 자율적으로 작동하지 않습니다. 인간이 개입하는 AI 워크플로를 지원합니다.</li>
<li><strong>데이터 거버넌스</strong> — 마커·정책·감사 이력이 입력 데이터에 대한 입증 가능한 거버넌스를 제공합니다.</li>
</ul>

<h2>검증: Deutsche Telekom T Challenge 2026</h2>

<p>LLM Capsule은 <strong>Deutsche Telekom T Challenge 2026 — 데이터 보안 &amp; 거버넌스 부문 Top 12</strong>에 선정되었습니다. T Challenge는 데이터 주권 및 EU 규제 제약 하에서의 AI 활성화를 전문적으로 평가합니다. 평가 기준에는 데이터 주권 아키텍처·감사 거버넌스·통신사급 인프라 통합·온프레미스 배포 가능성이 포함됩니다. 모두 AI 데이터 레이어 패턴이 규제 요건과 부합하는 영역입니다.</p>

<h2>유럽 기업을 위한 세 가지 배포 아키타입</h2>

<h3>아키타입 1 — Tier-1 통신사 (Path A 기본, 민감 워크플로는 Path B)</h3>

<p>NOC·고객 운영·BSS 워크플로는 EU 호스팅 LLM과 함께 Path A를 사용합니다. 합법적 감청·규제 기관 제한 구간·일부 기업 고객 워크플로는 Path B를 사용합니다.</p>

<h3>아키타입 2 — 연방·국가 은행 (Path B 기본, 저민감도는 Path A)</h3>

<p>리스크 심사·거래 모니터링·규제 보고는 Path B(온프레미스)를 사용합니다. 내부 커뮤니케이션 초안 작성과 일반 문서 요약은 DPA 하에 Path A를 사용할 수 있습니다.</p>

<h3>아키타입 3 — 방산·기밀 (Path B 전용)</h3>

<p>모든 워크플로가 Path B에서 실행됩니다. 데이터 레이어는 외부 엔드포인트로 어떠한 데이터도 전송하지 않습니다. 감사 이력은 지휘 체계 거버넌스 시스템으로 전달됩니다.</p>

<h2>자주 발생하는 실수</h2>

<ul>
<li><strong>Sovereign AI를 이분법으로 접근하는 것.</strong> 2개 경로 아키텍처는 기업이 워크플로별로 실용적인 선택을 할 수 있게 합니다. 기업 전체를 하나의 경로로 고정하지 마십시오.</li>
<li><strong>데이터 레지던시와 데이터 주권을 혼동하는 것.</strong> EU 호스팅 LLM 엔드포인트는 도움이 되지만, 캡슐화를 대체하지 않습니다. EU LLM 내부의 원본 데이터는 여전히 원본 데이터입니다.</li>
<li><strong>DPO 협의를 건너뛰는 것.</strong> Sovereign AI 아키텍처 결정은 마지막이 아닌 초기 단계에서 DPO 및 개인정보·법무팀과 함께 검토해야 합니다.</li>
<li><strong>감사 이력을 무시하는 것.</strong> 규제 기관은 데이터 처리 이력을 요구합니다. 감사 로그는 첫날부터 작동해야 합니다.</li>
</ul>

<h2>시작하기</h2>

<p>규제 대상 워크플로 하나(NOC 티켓·청구 기록·임상 노트·규제 제출 서류)와 기업의 데이터 레지던시·주권 요건을 준비하십시오. LLM Capsule은 30분 안에 샘플 워크플로를 배포하고, 기업 환경에서 Path A와 Path B를 직접 시연합니다.</p>

<p><a href="/request-a-demo" class="btn btn--primary">Sovereign AI 데모 요청</a></p>

<h2>관련 자료</h2>

<ul>
<li><a href="/learn/on-prem-llm-execution-path">온프레미스 LLM 실행 경로</a></li>
<li><a href="/learn/differential-privacy-for-enterprise-llm">엔터프라이즈 LLM을 위한 차등 프라이버시</a></li>
<li><a href="/learn/telecom-noc-ai-deployment">통신사 NOC AI 배포</a></li>
<li><a href="/glossary/two-execution-paths">용어 사전: 두 가지 실행 경로</a></li>
<li><a href="/trust">신뢰: GDPR / HIPAA / SOX 컴플라이언스</a></li>
</ul>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/sovereign-ai-european-enterprises",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Sovereign AI for European enterprises — a practical architecture",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "How to deploy AI in a telecom NOC without exposing network data",
    related3Href: "/resources/learn/telecom-noc-ai-deployment",
    related4Title: "Glossary: Two execution paths",
    related4Href: "/resources/glossary/two-execution-paths",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Datensouveräne KI für europäische Unternehmen — eine praxisnahe Architektur",
    lead: "KI in regulierten europäischen Workflows einsetzen — unter Einhaltung von DSGVO (GDPR), EU AI Act und nationalen Datenhaltungspflichten. Ohne Kompromisse zwischen Produktivität und Compliance.",
    category: "ARCHITEKTUR · Datensouveräne KI",
    readTime: "14 Min. Lesezeit",
    dateUpdated: "Aktualisiert April 2025",
    tldrLabel: "Kurzfassung — Definition",
    tldrBody: "Datensouveräne KI bezeichnet KI-Workflows im Unternehmen, bei denen Daten, Verarbeitung und Prüfpfad innerhalb eines definierten regulatorischen und geografischen Rahmens verbleiben. Für europäische Unternehmen bedeutet dies in der Regel DSGVO (GDPR)-konforme Datenverarbeitung, LLM-Endpunkte in der EU-Region sowie einen vollständigen Audit-Trail für Regulierungsbehörden. LLM Capsule als KI-Datenschicht bietet zwei Ausführungspfade: ein in der EU betriebenes externes LLM, ausschließlich mit Kapseldaten, oder ein lokales On-Premise-Leichtgewichtmodell. So können Unternehmen datensouveräne KI einführen, ohne auf leistungsstarke Sprachmodelle verzichten zu müssen.",
    bodyHtml: `<h2>Warum datensouveräne KI jetzt relevant ist</h2>

<p>Der europäische Regulierungsrahmen hat sich verschärft. Die kumulierten DSGVO-Bußgelder haben die Marke von 4 Milliarden Euro überschritten. Der EU AI Act (in Kraft seit August 2024) verpflichtet Betreiber von KI-Systemen mit hohem Risiko — einschließlich jener in regulierten Sektoren — zu nachweisbarer Transparenz, Audit-Trails und Daten-Governance. Nationale Aufsichtsbehörden wie BaFin (Deutschland) oder ACPR (Frankreich) erwarten von Finanzinstituten zunehmend den Nachweis von KI-Datensouveränität. Für öffentlichen Sektor und Verteidigung gilt diese Anforderung seit jeher.</p>

<p>Für europäische Unternehmen ergibt sich daraus: KI-Produktivitätsgewinne sind real, jedoch muss die zugrunde liegende Architektur Datensouveränität von Grund auf unterstützen. Die Übertragung ungeschützter Unternehmensdaten an US-gehostete LLM-Endpunkte ist in den meisten regulierten Workflows nicht mehr zulässig. Gleichzeitig ist ein vollständiger Verzicht auf LLMs keine praktikable Option — der Produktivitätsunterschied ist zu erheblich.</p>

<h2>Die Zwei-Pfad-Architektur</h2>

<p>Die praxisnahe Architektur unterstützt zwei Ausführungspfade unter einem einheitlichen Governance-Rahmen:</p>

<h3>Pfad A — In der EU betriebenes zugelassenes LLM — ausschließlich mit Kapseldaten</h3>

<p>Die Kapsel (strukturerhaltend, durch Differential Privacy geschützt) wird an einen zugelassenen externen LLM-Endpunkt in der EU-Region übertragen — etwa EU-gehostete Dienste von Anthropic, OpenAI EU, Mistral EU oder vergleichbaren Anbietern. Ungeschützte Unternehmensdaten verlassen die eigene Infrastruktur nicht. Geeignet für Workflows, deren regulatorisches Profil die externe Übertragung von Differential-Privacy-geschützten Kapseln mit geeigneten vertraglichen Schutzmaßnahmen (AVV, Standardvertragsklauseln (SCC) etc.) erlaubt.</p>

<h3>Pfad B — Lokales On-Premise-Leichtgewichtmodell</h3>

<p>Ein kleines, privates Leichtgewichtmodell wird vollständig innerhalb der Unternehmensumgebung betrieben — als quantisiertes Hugging-Face-Modell auf internem GPU, vLLM-gehostet oder als anbieterseitiges Leichtgewichtmodell. Keine externe Datenübertragung. Einsatz in Workflows, bei denen jeder externe Endpunkt ausgeschlossen ist: klassifizierte Verteidigungsworkflows, bestimmte Finanzsektor-Workflows auf Anforderung nationaler Regulierungsbehörden sowie Gesundheitsdaten aus den Bereichen psychische Gesundheit und Suchtmedizin.</p>

<p>Die Pfadauswahl erfolgt richtliniengesteuert je Workflow, nicht je Deployment. Eine einzelne Instanz der KI-Datenschicht kann unterschiedliche Ticket-Typen, Dokumentenklassen oder Geschäftsbereiche über verschiedene Pfade leiten.</p>

<h2>DSGVO-Konformität in der Praxis</h2>

<p>Die Datenschicht unterstützt die Einhaltung der DSGVO (GDPR) durch folgende Mechanismen:</p>

<ul>
<li><strong>Datenhaltung</strong> — die Kapsulierung erfolgt innerhalb der unternehmenseigenen EU-Infrastruktur; die Kapsel wird an LLM-Endpunkte in der EU-Region weitergeleitet; die Wiederherstellung erfolgt lokal.</li>
<li><strong>Recht auf Löschung</strong> — die Löschung im lokalen Token Vault stellt sicher, dass personenbezogene Datenverweise im Einklang mit Artikel 17 DSGVO entfernt werden können.</li>
<li><strong>Datensparsamkeit (Artikel 5 DSGVO)</strong> — nur die geschützte Kapsel erreicht das LLM, nicht die ungeschützten personenbezogenen Daten.</li>
<li><strong>Audit-Trail</strong> — jedes Kapsulierungs-, Verarbeitungs- und Wiederherstellungsereignis wird mit Richtlinienversion, verwendetem Modell, Latenz und Erkennungszusammenfassung protokolliert.</li>
</ul>

<p>Hinweis: Dies beschreibt ein technisches Architekturmuster, keine Rechtsberatung. Jedes Unternehmen muss seine spezifische DSGVO-Konformität mit dem eigenen Datenschutzbeauftragten und der Rechtsabteilung abstimmen.</p>

<h2>Konformität mit dem EU AI Act</h2>

<p>Der EU AI Act klassifiziert KI-Systeme nach Risikoklassen. Viele Unternehmens-Workflows in regulierten Sektoren — Bankwesen, Versicherungen, Gesundheitswesen, öffentliche Dienste, Personalwesen — fallen in die Hochrisiko-Kategorie. Diese erfordert Konformitätsbewertung, Transparenz, menschliche Aufsicht und Daten-Governance. Die Datenschicht-Architektur unterstützt diese Anforderungen:</p>

<ul>
<li><strong>Transparenz</strong> — wiederhergestellte Ausgaben enthalten einen Audit-Badge, der die angewandte Richtlinie und das verwendete Modell ausweist.</li>
<li><strong>Menschliche Aufsicht</strong> — die Datenschicht handelt nicht autonom; sie unterstützt KI-Workflows mit menschlicher Kontrolle im Prozess.</li>
<li><strong>Daten-Governance</strong> — Marker, Richtlinien und Audit-Trail liefern nachweisbare Governance für die Eingabedaten.</li>
</ul>

<h2>Auszeichnung: Deutsche Telekom T Challenge 2026</h2>

<p>LLM Capsule wurde im Rahmen der <strong>Deutsche Telekom T Challenge 2026 — Top 12 in Data Security &amp; Governance</strong> ausgezeichnet. Die T Challenge bewertet gezielt KI-Enablement unter den Anforderungen der Datensouveränität und des EU-Regulierungsrahmens. Die Bewertungskriterien umfassen Datensouveränitätsarchitektur, Audit-Governance, Integration in Carrier-Grade-Infrastrukturen und On-Premise-Deployierbarkeit — allesamt Bereiche, in denen das KI-Datenschicht-Architekturmuster den regulatorischen Erwartungen entspricht.</p>

<h2>Drei Deployment-Archetypen für europäische Unternehmen</h2>

<h3>Archetyp 1 — Tier-1-Telekommunikation (Pfad A primär, Pfad B für sensible Workflows)</h3>
<p>NOC-, Customer-Operations- und BSS-Workflows nutzen Pfad A mit EU-gehostetem LLM. Gesetzlich vorgeschriebene Überwachung, behördlich eingeschränkte Segmente und bestimmte Unternehmenskundenworkflows werden über Pfad B abgewickelt.</p>

<h3>Archetyp 2 — Bundes-/Nationalbank (Pfad B primär, Pfad A für gering sensitive Daten)</h3>
<p>Risikoprüfung, Transaktionsüberwachung und regulatorisches Reporting nutzen Pfad B (On-Premise). Die Erstellung interner Kommunikation und allgemeine Dokumentenzusammenfassungen können unter einem Auftragsverarbeitungsvertrag (AVV) über Pfad A abgewickelt werden.</p>

<h3>Archetyp 3 — Verteidigung / Klassifiziert (ausschließlich Pfad B)</h3>
<p>Alle Workflows werden über Pfad B abgewickelt. Die Datenschicht überträgt keine Daten an externe Endpunkte. Der Audit-Trail speist das Governance-System auf Kommandoebene.</p>

<h2>Häufige Fehler</h2>

<ul>
<li><strong>Datensouveräne KI als Entweder-oder-Entscheidung betrachten.</strong> Die Zwei-Pfad-Architektur ermöglicht es einem Unternehmen, je Workflow pragmatisch zu entscheiden. Das gesamte Unternehmen auf einen einzigen Pfad festzulegen ist nicht empfehlenswert.</li>
<li><strong>Datenhaltung mit Datensouveränität verwechseln.</strong> Ein EU-gehosteter LLM-Endpunkt ist hilfreich, ersetzt aber nicht die Kapsulierung. Ungeschützte Daten in einem EU-LLM bleiben ungeschützte Daten.</li>
<li><strong>Das Gespräch mit dem Datenschutzbeauftragten auslassen.</strong> Architekturentscheidungen zur datensouveränen KI sollten frühzeitig mit dem Datenschutzbeauftragten und der Rechts-/Datenschutzabteilung abgestimmt werden — nicht erst am Ende des Projekts.</li>
<li><strong>Audit vernachlässigen.</strong> Regulierungsbehörden werden nach einer lückenlosen Nachweiskette fragen. Das Audit-Log muss ab dem ersten Betriebstag aktiv sein.</li>
</ul>

<h2>Einstieg</h2>

<p>Wählen Sie einen regulierten Workflow aus — NOC-Ticket, Schadenmeldung, klinische Notiz oder behördliche Einreichung — und definieren Sie Ihre Datenhaltungs- und Souveränitätsanforderungen. LLM Capsule wird innerhalb von 30 Minuten auf einem Beispiel-Workflow deployed und demonstriert Pfad A sowie Pfad B in Ihrer Umgebung.</p>

<p><a href="/request-a-demo" class="btn btn--primary">Demo für datensouveräne KI anfordern</a></p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/sovereign-ai-european-enterprises",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Sovereign AI for European enterprises — a practical architecture",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "How to deploy AI in a telecom NOC without exposing network data",
    related3Href: "/resources/learn/telecom-noc-ai-deployment",
    related4Title: "Glossary: Two execution paths",
    related4Href: "/resources/glossary/two-execution-paths",
  },
}

export default function SovereignAiEuropeanEnterprises({
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
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug as string | undefined
  const effectiveLocale: "en" | "ko" | "de" =
    (framerLocale === "ko" || framerLocale === "de") ? framerLocale :
    (locale && locale !== "en") ? locale : "en"

  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const isNonEn = effectiveLocale !== "en"
  const r = (prop: string, key: string) =>
    isNonEn ? (T[key] || prop || TRANSLATIONS.en[key]) : (prop || T[key] || TRANSLATIONS.en[key])
  const _backLabel = r(backLabel, "backLabel")
  const _backHref = r(backHref, "backHref")
  const _title = r(title, "title")
  const _lead = r(lead, "lead")
  const _category = r(category, "category")
  const _readTime = r(readTime, "readTime")
  const _dateUpdated = r(dateUpdated, "dateUpdated")
  const _tldrLabel = r(tldrLabel, "tldrLabel")
  const _tldrBody = r(tldrBody, "tldrBody")
  const _bodyHtml = r(bodyHtml, "bodyHtml")
  const _canonicalUrl = r(canonicalUrl, "canonicalUrl")
  const _datePublished = r(datePublished, "datePublished")
  const _dateModified = r(dateModified, "dateModified")
  const _inLanguage = r(inLanguage, "inLanguage")
  const _breadcrumbLabel = r(breadcrumbLabel, "breadcrumbLabel")
  const _faqJsonLd = r(faqJsonLd, "faqJsonLd")
  const _relatedSectionLabel = r(relatedSectionLabel, "relatedSectionLabel")
  const _related1Title = r(related1Title, "related1Title")
  const _related1Href = r(related1Href, "related1Href")
  const _related2Title = r(related2Title, "related2Title")
  const _related2Href = r(related2Href, "related2Href")
  const _related3Title = r(related3Title, "related3Title")
  const _related3Href = r(related3Href, "related3Href")
  const _related4Title = r(related4Title, "related4Title")
  const _related4Href = r(related4Href, "related4Href")

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

        /* Figure (inline diagram with SVG) */
        .la-body .ds-figure {
          margin: 28px 0;
          padding: 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
        }
        .la-body .ds-figure__svg-wrap {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .la-body .ds-figure__svg-wrap::-webkit-scrollbar { display: none; }
        .la-body .ds-figure__svg {
          display: block;
          width: 100%;
          height: auto;
          min-width: 640px;
          max-width: 100%;
        }
        .la-body .ds-figure__caption {
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--c-muted, #6b7280);
          text-align: center;
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

addPropertyControls(SovereignAiEuropeanEnterprises, {
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
