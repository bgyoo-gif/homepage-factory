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

const BODY_HTML = `<h2>The standard pilot trajectory</h2>
<p>Months 0-2: leadership selects a use case (NOC RCA, clinical summarization, claim review, contract review). A vendor demos on a sanitized dataset. Excitement.</p>
<p>Months 2-4: the team integrates with the LLM provider, runs the workflow on synthetic data, gets impressive metrics. The pilot is "ready to go to production."</p>
<p>Months 4-6: security review opens. The CISO's team asks the obvious question: are we actually sending raw operational data — subscriber IDs, patient records, claim details — to the LLM? Sometimes the answer is "no, we'll use anonymization." The anonymization breaks the data; output quality drops 30-50%. Sometimes the answer is "yes, with a contract." That contract triggers DPO, regulator, and board-level review.</p>
<p>Months 6-12: the pilot is renamed, rescoped, paused, or quietly killed. Shadow AI emerges — engineers paste anonymized snippets into ChatGPT on personal devices to keep the productivity gains they tasted in the pilot.</p>

<h2>The four-part diagnosis</h2>
<p>Why does this happen, repeatedly, across every regulated industry?</p>

<h3>Reason 1 — External LLMs raise enterprise ROI</h3>
<p>Approved external LLMs measurably improve productivity, processing speed, and automation ROI. Every regulated enterprise wants in. The pilot exists because the executive team genuinely sees the upside.</p>

<h3>Reason 2 — PII guardrails alone are not enough</h3>
<p>The standard answer (PII detection at the API boundary) was built for individual identifiers — names, emails, phone numbers. Real regulated workflows run on structured operational data: ticket sequences, network configs, OT manifests, clinical workflows, claim records, mission context. PII guardrails don't see this. The data slips right through.</p>

<h3>Reason 3 — DMZ and legacy operational data is complex and unstructured</h3>
<p>Mixed free text, network identifiers, system logs, user context, incident records, configurations. Sensitivity leaks through structure, sequence, and aggregate pattern — not just through field names. Field-level filtering misses entire categories of risk.</p>

<h3>Reason 4 — Filtering alone leaves regulated risk standing</h3>
<p>GDPR, HIPAA, SOX, sector regulators, audit obligations, sovereignty constraints. Even if every field is masked, the residual risk of differential analysis, re-identification through context, and inference exposure is what regulators evaluate. Simple filtering cannot close that.</p>

<p><strong>Result:</strong> the pilot demonstrated value on synthetic data; the production deployment requires real data; the gap between them is the AI enablement data layer that wasn't there.</p>

<h2>The pattern that gets pilots to production</h2>
<p>Pilots that ship to production typically have these architectural features in place:</p>
<ol>
<li><strong>An AI enablement data layer between systems and AI.</strong> Not a guardrail. Not a gateway. A layer that transforms operational data into AI-ready capsules locally, executes the AI workflow, and restores results into the originating system.</li>
<li><strong>Structure-preserving capsule.</strong> Tables, cross-references, configurations, document hierarchies survive intact. AI receives full context — not broken fragments.</li>
<li><strong>Differential-privacy-based protection.</strong> Beyond field masking — DP noise, k-anonymity, semantic tokenization — to address inference and aggregate-pattern risk that simple filtering can't close.</li>
<li><strong>Plug-in execution into existing legacy systems.</strong> No migration. The data layer reads where the document already lives.</li>
<li><strong>Restoration into the originating workflow.</strong> The end-user works in their familiar tool with real values restored. AI doesn't create a new workflow; it lives inside the existing one.</li>
<li><strong>Two execution paths under one governance framework.</strong> External approved LLM with capsule data only, or on-prem local lightweight model. Path is policy-driven per workflow.</li>
<li><strong>Customer-defined markers + time-shifting policy.</strong> What's sensitive today isn't what's sensitive tomorrow. Define, version, time-shift.</li>
</ol>

<h2>What changes for the executive</h2>
<p>For the CDO / CAIO / CIO running an AI program:</p>
<ul>
<li>The conversation shifts from "AI vs. security" to "AI through the data layer."</li>
<li>The pilot exit criteria change from "demo on sanitized data" to "demo on real data with audit trail."</li>
<li>Shadow AI risk falls — the productivity people tasted in the pilot becomes available in the official tooling.</li>
<li>Procurement simplifies — one data layer covers multiple AI use cases across multiple LLM providers.</li>
<li>Regulator conversations have evidence — chain of custody, policy versioning, restoration audit.</li>
</ul>

<h2>How long does it take to get to production?</h2>
<p>With the data layer in place, regulated workflows typically reach production in 8-12 weeks (vs. 6-12 months stalled in the standard pattern). The gating items are usually internal — DPO sign-off, regulator notification (where required), security review of the policy. The technical integration is days, not months.</p>

<h2>Getting started</h2>
<p>If you have an AI pilot that has stalled in security or compliance review, the diagnosis is usually a missing data layer. Bring one stalled use case and one regulatory constraint. We deploy LLM Capsule on a sample workflow within 30 minutes and produce an evaluation report on what changes when the data layer is in place.</p>
<p><a href="/request-a-demo" class="btn btn--primary">Request an evaluation</a></p>`

const FAQ_JSON_LD = ``

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Why enterprise AI pilots stall — and how they get to production",
    lead: "A diagnostic for executives, CDOs, CAIOs, and CIOs whose AI pilot has run for months without reaching production.",
    category: "Strategy · Pilot to production",
    readTime: "10 min read",
    dateUpdated: "Updated April 2025",
    tldrLabel: "TL;DR — Diagnosis",
    tldrBody: "Most enterprise AI pilots do not fail because the AI is bad. They fail because the data layer between the AI and the operational systems is missing. Without an AI enablement data layer, regulated enterprises cannot send the data AI needs to the data the business can expose. Pilots prove out on synthetic or anonymized data, then stall when the security, privacy, and compliance review opens. The pattern that ships to production: structure-preserving capsule + differential-privacy-based protection + plug-in execution + restoration + two execution paths.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pilot-to-production-enterprise-ai",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Why enterprise AI pilots stall — and how they get to production",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "Glossary: Blocked AI workflow",
    related3Href: "/resources/glossary/blocked-ai-workflow",
    related4Title: "Glossary: AI enablement data layer",
    related4Href: "/resources/glossary/ai-enablement-data-layer",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "기업 AI 파일럿이 멈추는 이유 — 그리고 프로덕션까지 가는 방법",
    lead: "몇 달이 지나도 프로덕션에 도달하지 못한 AI 파일럿을 진단합니다. CDO·CAIO·CIO를 위한 진단 가이드입니다.",
    category: "Strategy · Pilot to production",
    readTime: "10분 읽기",
    dateUpdated: "2025년 4월 업데이트",
    tldrLabel: "TL;DR — 진단",
    tldrBody: "기업 AI 파일럿이 실패하는 이유는 AI가 나빠서가 아닙니다. AI와 운영 시스템 사이의 데이터 레이어가 없기 때문입니다. 데이터 레이어 없이는, 규제 산업 기업은 AI가 필요로 하는 데이터를 비즈니스가 노출할 수 있는 형태로 전달하지 못합니다. 파일럿은 합성 데이터나 익명화 데이터로는 작동하지만, 보안·프라이버시·컴플라이언스 검토가 시작되면 멈춥니다. 프로덕션까지 가는 패턴: 문서 구조 보존 캡슐 + 차등 프라이버시 기반 보호 + 플러그인 실행 + 복원 + 두 가지 실행 경로.",
    bodyHtml: `<!-- 아래는 bodyHtml Props 번역입니다. HTML 태그 구조를 그대로 유지합니다. -->

<h2>파일럿의 전형적인 경로</h2>

<p>0-2개월: 리더십이 유스케이스를 선정합니다(NOC RCA, 임상 요약, 청구 검토, 계약 검토). 벤더가 정제된 데이터셋으로 데모를 시연합니다. 기대감이 높아집니다.</p>

<p>2-4개월: 팀이 LLM 공급업체와 연동하고, 합성 데이터로 워크플로를 실행해 인상적인 지표를 얻습니다. 파일럿이 "프로덕션 투입 준비 완료" 상태가 됩니다.</p>

<p>4-6개월: 보안 검토가 시작됩니다. CISO 팀이 당연한 질문을 던집니다. 가입자 ID·환자 기록·청구 상세 정보 같은 실제 운영 데이터를 LLM에 직접 전송하고 있는 것인가요? "아니요, 익명화를 사용합니다"라는 답변이 나오면 데이터 품질이 훼손되고 출력 품질이 30-50% 떨어집니다. "네, 계약서가 있습니다"라는 답변이 나오면 DPO·규제 당국·이사회 검토가 시작됩니다.</p>

<p>6-12개월: 파일럿이 이름을 바꾸거나 범위를 축소하거나 중단되거나 조용히 종료됩니다. 섀도우 AI가 등장합니다. 엔지니어들이 파일럿에서 경험한 생산성 향상을 유지하기 위해 개인 기기의 ChatGPT에 익명화된 스니펫을 붙여 넣습니다.</p>

<h2>4가지 진단</h2>

<p>왜 이 일이 모든 규제 산업에서 반복적으로 발생하는 걸까요?</p>

<h3>이유 1 — 외부 LLM은 기업 ROI를 높입니다</h3>

<p>승인된 외부 LLM은 생산성·처리 속도·자동화 ROI를 측정 가능하게 개선합니다. 모든 규제 기업이 도입을 원합니다. 파일럿이 시작되는 이유는 경영진이 실질적인 가치를 보기 때문입니다.</p>

<h3>이유 2 — PII 가드레일만으로는 충분하지 않습니다</h3>

<p>표준 답변(API 경계의 PII 탐지)은 개인 식별자, 즉 이름·이메일·전화번호를 위해 만들어졌습니다. 실제 규제 워크플로는 구조화된 운영 데이터 위에서 작동합니다. 티켓 시퀀스·네트워크 구성·OT 매니페스트·임상 워크플로·청구 기록·미션 컨텍스트가 그것입니다. PII 가드레일은 이를 감지하지 못합니다. 데이터가 그냥 빠져나갑니다.</p>

<h3>이유 3 — DMZ 및 레거시 운영 데이터는 복잡하고 비정형입니다</h3>

<p>자유 텍스트·네트워크 식별자·시스템 로그·사용자 컨텍스트·인시던트 기록·구성이 혼재합니다. 민감도는 필드명뿐 아니라 구조·시퀀스·집계 패턴을 통해 노출됩니다. 필드 수준 필터링은 위험의 전체 범주를 놓칩니다.</p>

<h3>이유 4 — 필터링만으로는 규제 리스크가 남습니다</h3>

<p>GDPR·HIPAA·SOX·섹터 규제·감사 의무·데이터 주권 제약. 모든 필드를 마스킹하더라도, 차등 분석·컨텍스트를 통한 재식별·추론 노출의 잔류 위험은 규제 당국이 평가하는 대상입니다. 단순 필터링으로는 이를 닫을 수 없습니다.</p>

<p><strong>결과:</strong> 파일럿은 합성 데이터로 가치를 증명했습니다. 프로덕션 배포에는 실제 데이터가 필요합니다. 그 사이의 격차가 바로 존재하지 않았던 데이터 레이어입니다.</p>

<h2>파일럿을 프로덕션까지 이끄는 패턴</h2>

<p>프로덕션에 배포된 파일럿은 일반적으로 다음 아키텍처 요소를 갖추고 있습니다.</p>

<li><strong>An AI enablement data layer between systems and AI.</strong> Not a guardrail. Not a gateway. A layer that transforms operational data into AI-ready capsules locally, executes the AI workflow, and restores results into the originating system.</li>
<li><strong>문서 구조 보존 캡슐화.</strong> 테이블, 상호 참조, 설정, 문서 계층 구조가 그대로 유지됩니다. AI는 깨진 단편이 아닌 전체 컨텍스트를 받습니다.</li>
<li><strong>차등 프라이버시 기반 보호.</strong> 단순 필드 마스킹을 넘어 — DP 노이즈, k-익명성, 시맨틱 토큰화 — 단순 필터링으로 막을 수 없는 추론 및 집계 패턴 위험까지 대응합니다.</li>
<li><strong>기존 레거시 시스템에 플러그인 방식 실행.</strong> 마이그레이션 없이. 데이터 레이어가 문서가 이미 있는 곳에서 직접 읽어옵니다.</li>
<li><strong>원래 워크플로우로 복원.</strong> 최종 사용자는 실제 값이 복원된 익숙한 도구에서 작업합니다. AI는 새 워크플로우를 만들지 않고, 기존 워크플로우 안에 들어갑니다.</li>
<li><strong>하나의 거버넌스 프레임워크 아래 두 가지 실행 경로.</strong> 캡슐 데이터만 사용하는 외부 승인 LLM, 또는 온프레미스 로컬 경량 모델. 경로는 워크플로우별 정책으로 결정됩니다.</li>
<li><strong>고객 정의 마커 + 시간 이동 정책.</strong> 오늘 민감한 것이 내일도 민감한 것은 아닙니다. 정의하고, 버전 관리하고, 시간 이동하십시오.</li>
</ol>

<h2>경영진에게 무엇이 달라지는가</h2>

<p>AI 프로그램을 운영하는 CDO·CAIO·CIO에게:</p>

<li>대화의 프레임이 "AI vs. 보안"에서 "데이터 레이어를 통한 AI"로 전환됩니다.</li>
<li>파일럿 종료 기준이 "정제된 데이터로 데모"에서 "실제 데이터 + 감사 이력으로 데모"로 바뀝니다.</li>
<li>섀도우 AI 위험이 감소합니다 — 파일럿에서 경험한 생산성이 공식 도구에서 제공됩니다.</li>
<li>조달이 단순해집니다 — 하나의 데이터 레이어가 여러 LLM 제공업체에 걸쳐 다수의 AI 유스케이스를 커버합니다.</li>
<li>규제 당국 대응에 증거가 생깁니다 — 관리 체인, 정책 버전 관리, 복원 감사.</li>
</ul>

<h2>프로덕션까지 얼마나 걸립니까?</h2>

<p>데이터 레이어가 갖춰지면, 규제 대상 워크플로는 일반적으로 8-12주 안에 프로덕션에 도달합니다(전형적인 패턴에서 6-12개월 지체되는 것과 비교됩니다). 주요 게이팅 항목은 보통 내부적입니다. DPO 승인·규제 당국 통보(필요한 경우)·정책 보안 검토가 그것입니다. 기술 통합은 수개월이 아닌 수일이면 됩니다.</p>

<h2>시작하는 방법</h2>

<p>보안 또는 컴플라이언스 검토에서 멈춘 AI 파일럿이 있다면, 진단은 대개 데이터 레이어의 부재입니다. 멈춘 유스케이스 하나와 규제 제약 하나를 가져오세요. 30분 안에 샘플 워크플로에 LLM Capsule을 배포하고, 데이터 레이어가 있을 때 무엇이 달라지는지 평가 보고서를 제출합니다.</p>

<p><a href="/request-a-demo" class="ptpa-btn ptpa-btn--primary">평가 신청하기</a></p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pilot-to-production-enterprise-ai",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Why enterprise AI pilots stall — and how they get to production",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "Glossary: Blocked AI workflow",
    related3Href: "/resources/glossary/blocked-ai-workflow",
    related4Title: "Glossary: AI enablement data layer",
    related4Href: "/resources/glossary/ai-enablement-data-layer",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Warum KI-Pilotprojekte im Unternehmen ins Stocken geraten — und wie sie dennoch den Produktionsbetrieb erreichen",
    lead: "Eine Analyse für Führungskräfte, CDOs, CAIOs und CIOs, deren KI-Pilotprojekt seit Monaten läuft, aber den Produktionsbetrieb nicht erreicht.",
    category: "Strategie · Vom Pilotprojekt in die Produktion",
    readTime: "10 Min. Lesezeit",
    dateUpdated: "Aktualisiert April 2025",
    tldrLabel: "TL;DR — Diagnose",
    tldrBody: "Die meisten KI-Pilotprojekte in Unternehmen scheitern nicht an der Qualität der KI. Sie scheitern, weil die Datenschicht zwischen der KI und den operativen Systemen fehlt. Ohne eine KI-Datenschicht können regulierte Unternehmen die Daten, die die KI benötigt, nicht bereitstellen, ohne dabei Daten offenzulegen, die das Unternehmen nicht freigeben darf. Pilotprojekte bestehen ihre Tests auf Basis synthetischer oder anonymisierter Daten — und geraten ins Stocken, sobald die Sicherheits-, Datenschutz- und Compliance-Prüfung beginnt. Das Muster, das den Produktionsbetrieb erreicht: strukturerhaltende Kapsulierung + Differential-Privacy-basierter Schutz + Plug-in-Ausführung + Wiederherstellung + zwei Ausführungspfade.",
    bodyHtml: `<h2>Der typische Verlauf eines Pilotprojekts</h2>

<p>Monate 0–2: Die Geschäftsführung wählt einen Anwendungsfall aus — NOC-Root-Cause-Analyse, klinische Zusammenfassung, Schadenbearbeitung, Vertragsanalyse. Ein Anbieter demonstriert das System anhand bereinigter Datensätze. Die Erwartungen sind hoch.</p>

<p>Monate 2–4: Das Team integriert den LLM-Anbieter, führt den Workflow auf synthetischen Daten aus und erzielt beeindruckende Kennzahlen. Das Pilotprojekt gilt als produktionsreif.</p>

<p>Monate 4–6: Die Sicherheitsprüfung beginnt. Das CISO-Team stellt die naheliegende Frage: Übermitteln wir tatsächlich rohe operative Daten — Teilnehmer-IDs, Patientenakten, Schadendetails — an das LLM? Lautet die Antwort „Nein, wir anonymisieren", verschlechtert sich die Ausgabequalität um 30–50 %. Lautet die Antwort „Ja, vertraglich geregelt", zieht das eine Prüfung durch den Datenschutzbeauftragten, die Aufsichtsbehörde und den Vorstand nach sich.</p>

<p>Monate 6–12: Das Pilotprojekt wird umbenannt, neu ausgerichtet, pausiert oder stillschweigend eingestellt. Shadow-KI entsteht — Entwickler übertragen anonymisierte Ausschnitte in ChatGPT auf privaten Geräten, um die Produktivitätsgewinne aus dem Pilotprojekt zu erhalten.</p>

<h2>Viergliedrige Diagnose</h2>

<p>Warum wiederholt sich dieses Muster branchenübergreifend in allen regulierten Branchen?</p>

<h3>Grund 1 — Externe LLMs steigern den ROI im Unternehmen</h3>
<p>Zugelassene externe LLMs verbessern Produktivität, Verarbeitungsgeschwindigkeit und Automatisierungsrendite nachweislich. Regulierte Unternehmen wollen dieses Potenzial nutzen. Das Pilotprojekt entsteht, weil die Unternehmensführung den Mehrwert klar erkennt.</p>

<h3>Grund 2 — PII-Guardrails allein reichen nicht aus</h3>
<p>Die gängige Antwort — PII-Erkennung an der API-Grenze — wurde für individuelle Identifikatoren konzipiert: Namen, E-Mail-Adressen, Telefonnummern. Reale regulierte Workflows basieren auf strukturierten operativen Daten: Ticket-Sequenzen, Netzwerkkonfigurationen, OT-Manifeste, klinische Workflows, Schadenakten, Missionskontext. PII-Guardrails erfassen diese Datentypen nicht. Sie passieren die Prüfung ungehindert.</p>

<h3>Grund 3 — DMZ- und Legacy-Betriebsdaten sind komplex und unstrukturiert</h3>
<p>Freier Text, Netzwerkidentifikatoren, Systemprotokolle, Nutzerkontext, Incident-Records, Konfigurationen — alles vermischt. Vertraulichkeit geht durch Struktur, Sequenz und aggregierte Muster verloren, nicht nur durch einzelne Feldnamen. Filterung auf Feldebene übersieht ganze Risikokategorien.</p>

<h3>Grund 4 — Filtern allein schließt das regulatorische Restrisiko nicht</h3>
<p>DSGVO (GDPR), HIPAA, SOX, sektorale Aufsichtsbehörden, Prüfpflichten, Datensouveränität. Selbst wenn alle Felder maskiert sind, bewertet die Aufsicht das Restrisiko aus differentieller Analyse, kontextbasierter Re-Identifikation und Inferenz-Exposition. Einfaches Filtern schließt diese Lücke nicht.</p>

<p><strong>Ergebnis:</strong> Das Pilotprojekt bewies seinen Wert auf synthetischen Daten. Der Produktionsbetrieb erfordert echte Daten. Die Lücke zwischen beiden ist die fehlende KI-Datenschicht.</p>

<h2>Das Muster, das Pilotprojekte in die Produktion bringt</h2>

<p>Pilotprojekte, die den Produktionsbetrieb erreichen, verfügen typischerweise über folgende architektonische Merkmale:</p>

<ol>
<li><strong>Eine KI-Datenschicht zwischen operativen Systemen und der KI.</strong> Kein Guardrail. Kein Gateway. Eine Schicht, die operative Daten lokal in KI-verarbeitbare Kapseln transformiert, den KI-Workflow ausführt und Ergebnisse in das Ausgangssystem zurückführt.</li>
<li><strong>Strukturerhaltende Kapsel.</strong> Tabellen, Querverweise, Konfigurationen und Dokumenthierarchien bleiben vollständig erhalten. Die KI erhält vollständigen Kontext — keine fragmentierten Ausschnitte.</li>
<li><strong>Differential-Privacy-basierter Schutz.</strong> Über Feldmaskierung hinaus — DP-Rauschen, k-Anonymität, semantische Tokenisierung — um Inferenz- und Aggregatmusterrisiken zu begegnen, die einfaches Filtern nicht schließen kann.</li>
<li><strong>Plug-in-Ausführung in bestehenden Legacy-Systemen.</strong> Keine Migration erforderlich. Die Datenschicht liest die Daten dort, wo sie bereits gespeichert sind.</li>
<li><strong>Wiederherstellung in den ursprünglichen Workflow.</strong> Der Endnutzer arbeitet im gewohnten Werkzeug mit wiederhergestellten Originalwerten. Die KI schafft keinen neuen Workflow — sie integriert sich in den bestehenden.</li>
<li><strong>Zwei Ausführungspfade unter einem einheitlichen Governance-Rahmen.</strong> Externer zugelassener LLM mit ausschließlich Kapseldaten oder lokales On-Premise-Modell. Die Pfadwahl erfolgt richtliniengesteuert je Workflow.</li>
<li><strong>Kundendefinierte Marker und zeitgesteuerte Richtlinien.</strong> Was heute als sensibel gilt, muss es morgen nicht mehr sein. Definieren, versionieren, zeitlich steuern.</li>
</ol>

<h2>Was sich für Führungskräfte ändert</h2>

<p>Für CDOs, CAIOs und CIOs, die ein KI-Programm verantworten:</p>

<ul>
<li>Die Diskussion wechselt von „KI versus Sicherheit" zu „KI durch die Datenschicht".</li>
<li>Die Abnahmekriterien verschieben sich von „Demo mit bereinigten Daten" zu „Demo mit Echtdaten und Prüfprotokoll".</li>
<li>Das Shadow-KI-Risiko sinkt — die im Pilotprojekt erlebten Produktivitätsgewinne werden in den offiziellen Werkzeugen verfügbar.</li>
<li>Die Beschaffung vereinfacht sich — eine Datenschicht deckt mehrere KI-Anwendungsfälle bei mehreren LLM-Anbietern ab.</li>
<li>Gespräche mit Aufsichtsbehörden werden durch Belege gestützt — Datenkette, Richtlinienversionierung, Wiederherstellungsprotokoll.</li>
</ul>

<h2>Wie lange dauert der Weg in die Produktion?</h2>

<p>Mit vorhandener Datenschicht erreichen regulierte Workflows den Produktionsbetrieb typischerweise in 8–12 Wochen — gegenüber 6–12 Monaten im Standardmuster. Die hemmenden Faktoren sind meist intern: Freigabe durch den Datenschutzbeauftragten, behördliche Meldung (soweit erforderlich), Sicherheitsüberprüfung der Richtlinien. Die technische Integration dauert Tage, nicht Monate.</p>

<h2>Nächste Schritte</h2>

<p>Wenn Ihr KI-Pilotprojekt in der Sicherheits- oder Compliance-Prüfung feststeckt, liegt die Ursache in der Regel in einer fehlenden Datenschicht. Bringen Sie einen blockierten Anwendungsfall und eine regulatorische Anforderung mit. Wir setzen LLM Capsule innerhalb von 30 Minuten auf einem Beispiel-Workflow auf und erstellen einen Evaluierungsbericht, der zeigt, was sich mit der Datenschicht ändert.</p>

<p><a href="/request-a-demo" class="btn btn--primary">Evaluierung anfordern</a></p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pilot-to-production-enterprise-ai",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "Why enterprise AI pilots stall — and how they get to production",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "Sovereign AI for European enterprises",
    related2Href: "/resources/learn/sovereign-ai-european-enterprises",
    related3Title: "Glossary: Blocked AI workflow",
    related3Href: "/resources/glossary/blocked-ai-workflow",
    related4Title: "Glossary: AI enablement data layer",
    related4Href: "/resources/glossary/ai-enablement-data-layer",
  },
}

export default function PilotToProductionEnterpriseAi({
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

addPropertyControls(PilotToProductionEnterpriseAi, {
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
