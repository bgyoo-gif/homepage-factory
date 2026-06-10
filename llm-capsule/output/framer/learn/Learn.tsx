// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py (build_learn_index_tsx)
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Learn index page (v6.2 design) — multi-locale (en/ko/de) + skipInIndex filter.
// LEARN_CARDS auto-synced with ARTICLES list. Per-locale title/desc extracted
// from translation md files.

import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

type Locale = "en" | "ko" | "de"

interface Props {
  locale?: Locale
  // Hero
  eyebrow?: string
  heroTitle?: string
  heroLead?: string

  // Tab labels
  labelAll?: string
  labelPolicy?: string
  labelIndustry?: string
  labelArchitecture?: string
  labelStrategy?: string
  labelComparison?: string
  labelDefinition?: string

  readLabel?: string
}

type CardData = {
  slug: string
  category: string
  href: string
  locales: string[]
  skipInIndex: boolean
  title: Record<string, string>
  desc: Record<string, string>
}

const LEARN_CARDS: CardData[] = [
  { slug: "public-sector-genai-three-approaches-in-korea", category: "policy", href: "/resources/learn/public-sector-genai-three-approaches-in-korea", locales: ["ko"], skipInIndex: false, title: { ko: "공공기관 생성형 AI 도입의 세 가지 길" }, desc: { ko: "AI DLP·차단, sLLM 자체구축, 게이트웨이 방식 — N2SF 시대 공공기관의 선택지를 비용·성능·보안·정합성 관점에서 객관적으로 비교합니다." } },
  { slug: "what-is-n2sf", category: "policy", href: "/resources/learn/what-is-n2sf", locales: ["ko"], skipInIndex: false, title: { ko: "N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리" }, desc: { ko: "국가 망 보안체계(N2SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다." } },
  { slug: "n2sf-model-2-explained", category: "policy", href: "/resources/learn/n2sf-model-2-explained", locales: ["ko"], skipInIndex: false, title: { ko: "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" }, desc: { ko: "국가정보원·NSR이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, AI 연계체계까지 처음부터 끝까지." } },
  { slug: "sllm-self-hosted-reality-check", category: "policy", href: "/resources/learn/sllm-self-hosted-reality-check", locales: ["ko", "de"], skipInIndex: false, title: { ko: "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프", de: "Eigenbetrieb eines sLLM — Lohnt sich das wirklich? Kosten, Leistung und die echten Trade-offs" }, desc: { ko: "공공기관 sLLM 자체구축의 진짜 비용(5년 28~38억), 상용 LLM 대비 성능 격차 추세, 잘못된 선택 패턴을 분석합니다.", de: "Eine nüchterne Analyse der tatsächlichen TCO-Kosten (5 Jahre, 1–2 Mio. EUR), der wachsenden Leistungslücke gegenüber kommerziellen LLMs sowie typischer Entscheidungsfehler in regulierten DACH-Unternehmen." } },
  { slug: "public-sector-external-llm-adoption-roadmap", category: "policy", href: "/resources/learn/public-sector-external-llm-adoption-roadmap", locales: ["ko"], skipInIndex: false, title: { ko: "공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 분기 로드맵" }, desc: { ko: "정보화담당관 관점에서 외부 LLM 도입을 분기별 5단계로 정리합니다. 시나리오 A(공개 활용) 4개월 vs 시나리오 B(민감 업무) 6~8개월 로드맵 비교." } },
  { slug: "public-sector-genai-five-stuck-points", category: "policy-field", href: "/resources/learn/public-sector-genai-five-stuck-points", locales: ["ko"], skipInIndex: false, title: { ko: "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 — 현장 분석" }, desc: { ko: "정책은 알겠는데 실무에서 막힌다는 정보화담당관 분들의 목소리를 5개 막힘 지점으로 정리합니다. 등급 분류 부담, 시나리오 충돌, 솔루션 후보 부족, 예산 시점, 활용 실패." } },
  { slug: "public-sector-2026-management-evaluation-ai-incentive", category: "policy", href: "/resources/learn/public-sector-2026-management-evaluation-ai-incentive", locales: ["ko"], skipInIndex: false, title: { ko: "2026 경영평가 'AI 활용 등 혁신' 가점 — 공공기관 핵심 경쟁력 분석" }, desc: { ko: "2026 경영평가편람에 신설된 'AI 활용 등 혁신' 가점 1.5점이 공공기관 경쟁력에 어떤 영향을 주는지, 어떻게 확보할 수 있는지 정보화담당관 관점에서 정리합니다." } },
  { slug: "chatgpt-teams-korea-public-sector", category: "policy", href: "/resources/learn/chatgpt-teams-korea-public-sector", locales: ["ko"], skipInIndex: false, title: { ko: "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까" }, desc: { ko: "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N2SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다." } },
  { slug: "chatgpt-teams-ciso-control-gap", category: "policy", href: "/resources/learn/chatgpt-teams-ciso-control-gap", locales: ["ko"], skipInIndex: false, title: { ko: "ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것" }, desc: { ko: "ChatGPT Teams의 관리자 콘솔은 사후 가시성을 제공하지만 사전 통제는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 보안팀이 마주하는 통제 공백을 분석합니다." } },
  { slug: "differential-privacy-explained", category: "definition", href: "/resources/learn/differential-privacy-explained", locales: ["ko"], skipInIndex: false, title: { ko: "차등정보보호란 무엇인가 — 1분 요약부터 수학적 원리까지" }, desc: { ko: "차등정보보호(Differential Privacy)는 개인정보를 통계적으로 보호하는 수학적 프레임워크입니다. 단순 마스킹과 무엇이 다른지, 왜 미국 인구조사국·Apple·Google이 사용하는지, 공공기관 LLM 활용에 어떻게 연결되는지 정리했습니다." } },
  { slug: "public-sector-chatgpt-input-guide", category: "policy", href: "/resources/learn/public-sector-chatgpt-input-guide", locales: ["ko"], skipInIndex: false, title: { ko: "ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까" }, desc: { ko: "외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다." } },
  { slug: "external-llm-on-sensitive-enterprise-data", category: "architecture-onprem", href: "/resources/learn/external-llm-on-sensitive-enterprise-data", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Running External LLMs on Data Your Company Can't Send Externally", ko: "회사가 외부로 보낼 수 없는 데이터에서 외부 LLM 실행하기", de: "Externe LLMs auf Daten einsetzen, die das Unternehmen nicht weitergeben darf" }, desc: { en: "Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.", ko: "대부분의 엔터프라이즈 AI 워크플로우는 외부 LLM이 회사가 노출할 수 없는 데이터를 요구할 때 멈춥니다. 이 정체를 극복하는 아키텍처 패턴과 각각의 트레이드오프를 살펴봅니다.", de: "Viele KI-Projekte in Unternehmen scheitern nicht an fehlender Technologie, sondern an Datenschutzvorgaben. Dieser Artikel beschreibt die gängigen Architekturansätze — und zeigt, wo jeder einzelne an seine Grenzen stößt." } },
  { slug: "tokenization-for-llm-inputs", category: "architecture-onprem", href: "/resources/learn/tokenization-for-llm-inputs", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Tokenization for LLM Inputs: How AI Reads What It Doesn't See", ko: "LLM 입력을 위한 토큰화: AI가 보지 않고 읽는 방법", de: "Tokenisierung für LLM-Eingaben: Wie KI liest, was sie nicht sehen darf" }, desc: { en: "The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.", ko: "프로덕션에서 LLM 이전 토큰화가 작동하게 만드는 아키텍처 결정들 — 결정적 vs 무작위, 형식 보존, 매핑 저장, 그리고 팀이 배포 전에 해결해야 할 질문들.", de: "Welche Architekturentscheidungen KI-Tokenisierung im Produktivbetrieb tragen — und was Teams klären müssen, bevor sie deployen." } },
  { slug: "reconstructing-ai-output", category: "architecture-onprem", href: "/resources/learn/reconstructing-ai-output", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Reconstructing AI Output: The Last Mile Between Model Response and Business Reality", ko: "AI 출력 복원: 모델 응답과 비즈니스 현실 사이의 마지막 구간", de: "KI-Output wiederherstellen: Die letzte Meile zwischen Modellantwort und Geschäftspraxis" }, desc: { en: "The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.", ko: "외부 LLM의 토큰화된 응답은 바로 사용할 수 없습니다. 복원은 그것을 업무에 사용 가능한 출력으로 변환하는 단계이며, 대부분의 팀이 충분히 투자하지 않다가 워크플로우가 프로덕션에서 멈추는 지점입니다.", de: "Die tokenisierte Antwort eines externen LLM ist noch nicht einsatzbereit. Erst die Rekonstruktion macht daraus verwertbaren Output — und genau hier investieren die meisten Teams zu wenig, bis der Prozess im Produktivbetrieb ins Stocken gerät." } },
  { slug: "why-ai-stalls-on-operational-data", category: "comparison", href: "/resources/learn/why-ai-stalls-on-operational-data", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Why AI Workflows Stall at Tables, Tickets, and Operational Documents", ko: "AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유", de: "Warum KI-Workflows an Tabellen, Tickets und operativen Dokumenten scheitern" }, desc: { en: "PII guardrails and field-level masking solve the easy half of the problem and break the rest of the workflow. A look at where AI stalls on real operational data — and why removal-based approaches can't fix it.", ko: "PII 가드레일과 필드 레벨 마스킹은 문제의 쉬운 절반만 해결하고 나머지 워크플로우를 망가뜨립니다. AI가 실제 운영 데이터에서 막히는 지점과 삭제 기반 접근법이 이를 해결하지 못하는 이유를 살펴봅니다.", de: "PII-Guardrails und feldbasierte Maskierung lösen den einfachen Teil des Problems — und zerstören dabei den Rest des Workflows. Eine Analyse der Stellen, an denen KI an realen operativen Daten scheitert, und warum entfernungsbasierte Ansätze das nicht beheben können." } },
  { slug: "what-is-context-preserving-data-layer-for-ai", category: "definition", href: "/resources/learn/what-is-context-preserving-data-layer-for-ai", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "What Is a Context-Preserving Data Layer for AI?", ko: "AI를 위한 Context-Preserving Data Layer란 무엇인가?", de: "Was ist ein Context-Preserving Data Layer für KI?" }, desc: { en: "A context-preserving data layer is a software layer that transforms sensitive enterprise data into a protected but semantically usable form before it reaches an AI model, then restores the original values locally after inference. Unlike masking or DLP, which protect data by removing it — and so leave the model's output unusable — a context-preserving data layer protects the data while keeping the relationships the model needs to reason.", ko: "Context-preserving data layer는 민감한 엔터프라이즈 데이터가 AI 모델에 도달하기 전에 보호되지만 의미적으로 사용 가능한 형태로 변환하고, 추론 후 로컬에서 원래 값을 복원하는 소프트웨어 레이어입니다. 데이터를 제거하는 방식으로 보호하여 모델의 출력을 사용 불가능하게 만드는 masking 또는 DLP와 달리, context-preserving data layer는 데이터를 보호하면서 모델이 추론에 필요한 관계를 유지합니다.", de: "Ein Context-Preserving Data Layer ist eine Software-Schicht, die sensible Unternehmensdaten vor der Übergabe an ein KI-Modell in eine geschützte, aber semantisch nutzbare Form überführt — und die Originalwerte danach lokal wiederherstellt. Im Gegensatz zu Maskierung oder DLP, die Daten durch Entfernung schützen und damit die Modellausgabe unbrauchbar machen, bewahrt ein Context-Preserving Data Layer die Beziehungen, die das Modell für seine Schlussfolgerungen benötigt." } },
  { slug: "where-to-run-enterprise-ai", category: "architecture-onprem", href: "/resources/learn/where-to-run-enterprise-ai", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Where to Run Enterprise AI: External, On-Premise, or Both", ko: "엔터프라이즈 AI를 어디서 실행할 것인가: 외부, on-premise, 또는 둘 다", de: "KI im Unternehmen: extern, On-Premise oder beides" }, desc: { en: "The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.", ko: "엔터프라이즈 AI의 배포 방식 결정은 이분법적이지 않습니다. 외부 LLM, on-premise 모델, hybrid 토폴로지는 각각 특정 워크플로우 유형에 맞으며, 대부분의 기업은 결국 하나 이상이 필요하게 됩니다. 의사결정 프레임워크입니다.", de: "Welches Betriebsmodell für KI passt zu welchem Workflow? Externe LLMs, On-Premise-Modelle und hybride Topologien erfüllen jeweils unterschiedliche Anforderungen. Die meisten Unternehmen brauchen am Ende mehr als eine Option. Ein Entscheidungsrahmen." } },
  { slug: "pilot-to-production-enterprise-ai", category: "strategy", href: "/resources/learn/pilot-to-production-enterprise-ai", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Why enterprise AI pilots stall — and how they get to production", ko: "기업 AI 파일럿이 멈추는 이유 — 그리고 프로덕션까지 가는 방법", de: "Warum KI-Pilotprojekte im Unternehmen ins Stocken geraten — und wie sie dennoch den Produktionsbetrieb erreichen" }, desc: { en: "A diagnostic for executives, CDOs, CAIOs, and CIOs whose AI pilot has run for months without reaching production.", ko: "몇 달이 지나도 프로덕션에 도달하지 못한 AI 파일럿을 진단합니다. CDO·CAIO·CIO를 위한 진단 가이드입니다.", de: "Eine Analyse für Führungskräfte, CDOs, CAIOs und CIOs, deren KI-Pilotprojekt seit Monaten läuft, aber den Produktionsbetrieb nicht erreicht." } },
  { slug: "telecom-noc-ai-deployment", category: "industry-telecom", href: "/resources/learn/telecom-noc-ai-deployment", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "How to deploy AI in a telecom NOC without exposing network data", ko: "네트워크 데이터를 노출하지 않고 통신사 NOC에 AI를 배포하는 방법", de: "KI im Telekommunikations-NOC einsetzen — ohne Offenlegung von Netzwerkdaten" }, desc: { en: "A practical guide for telecom operators bringing AI into the NOC, OSS/BSS, and customer operations — without exposing subscriber identities, call records, IP addresses, or network configurations.", ko: "NOC, OSS/BSS, 고객 운영에 AI를 도입하려는 통신사를 위한 실무 가이드 — 가입자 정보, 통화 기록, IP 주소, 네트워크 구성은 절대 외부로 나가지 않습니다.", de: "Ein praxisorientierter Leitfaden für Telekommunikationsanbieter, die KI in den NOC, OSS/BSS und den Kundenbetrieb integrieren möchten — ohne Teilnehmeridentitäten, Anrufaufzeichnungen, IP-Adressen oder Netzwerkkonfigurationen offenzulegen." } },
  { slug: "hospital-ai-deployment-phi-protection", category: "industry-healthcare", href: "/resources/learn/hospital-ai-deployment-phi-protection", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "How to deploy AI in a hospital without exposing PHI", ko: "PHI를 외부에 노출하지 않고 병원에 AI를 도입하는 방법", de: "KI im Krankenhaus einsetzen — ohne Offenlegung von Patientendaten" }, desc: { en: "A practical guide for hospital CIOs, CMIOs, and clinical informatics teams to bring AI into radiology, clinical documentation, and care coordination — without sending PHI to external LLMs.", ko: "병원 CIO·CMIO·임상 정보팀을 위한 실무 가이드입니다. 영상의학·임상 문서화·케어 코디네이션에 AI를 도입하면서도 PHI를 외부 LLM으로 절대 전송하지 않습니다.", de: "Ein praxisorientierter Leitfaden für IT-Leiter, Medizininformatiker und klinische Informatik-Teams: KI in Radiologie, klinische Dokumentation und Versorgungskoordination integrieren — ohne Patientendaten an externe LLMs zu übermitteln." } },
  { slug: "ai-on-network-operations-data", category: "industry-telecom", href: "/resources/learn/ai-on-network-operations-data", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution", ko: "네트워크 운영 데이터와 AI: NOC, 인시던트 RCA, 통신사 워크플로우 실행", de: "KI für Netzwerkbetriebsdaten: NOC, Incident-RCA und Telekommunikations-Workflows" }, desc: { en: "The data NOC engineers need AI to read is the same data they cannot send to an external LLM. Here is how to close that gap with structure-preserving, differential-privacy-based encapsulation — validated at Deutsche Telekom T Challenge 2026.", ko: "NOC 엔지니어가 AI에게 분석시키고 싶은 데이터는 외부 LLM에 보낼 수 없는 바로 그 데이터입니다. 문서 구조 보존과 차등 프라이버시 기반 캡슐화로 이 간격을 좁히는 방법 — Deutsche Telekom T Challenge 2026에서 검증되었습니다.", de: "Die Daten, die NOC-Ingenieure für den KI-Einsatz benötigen, dürfen nicht an externe Sprachmodelle übertragen werden. Dieser Artikel beschreibt, wie strukturerhaltende Kapsulierung auf Basis von Differential Privacy diese Lücke schließt — validiert beim Deutsche Telekom T Challenge 2026." } },
  { slug: "pii-guardrails-vs-operational-data-protection", category: "comparison", href: "/resources/learn/pii-guardrails-vs-operational-data-protection", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Why PII Guardrails Don't Make Enterprise AI Work", ko: "PII 가드레일만으로 기업 AI가 작동하지 않는 이유", de: "Warum PII-Guardrails allein den KI-Einsatz im Unternehmen nicht ermöglichen" }, desc: { en: "PII guardrails, AI security suites, prompt security gateways — they all do something important. They do not all do the same thing. Here is a direct comparison and a clear answer to where each fits in enterprise AI adoption.", ko: "PII 가드레일, AI 보안 스위트, 프롬프트 보안 게이트웨이 — 각각 중요한 역할을 합니다. 그러나 모두 같은 일을 하지는 않습니다. 각 카테고리가 기업 AI 도입에서 어디에 맞는지, 직접 비교와 명확한 답변을 제공합니다.", de: "PII-Guardrails, KI-Sicherheitssuiten, Prompt-Security-Gateways — sie alle erfüllen spezifische Aufgaben. Keine davon ist mit den anderen austauschbar. Dieser Artikel vergleicht die Kategorien direkt und zeigt, wo jede im KI-Einsatz des Unternehmens ihren Platz hat." } },
  { slug: "sovereign-ai-european-enterprises", category: "architecture-sovereign", href: "/resources/learn/sovereign-ai-european-enterprises", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Sovereign AI for European enterprises — a practical architecture", ko: "유럽 기업을 위한 Sovereign AI — 실용적인 아키텍처", de: "Datensouveräne KI für europäische Unternehmen — eine praxisnahe Architektur" }, desc: { en: "Bring AI into regulated European workflows under GDPR, EU AI Act, and national data residency — without choosing between productivity and compliance.", ko: "GDPR, EU AI Act, 국가별 데이터 레지던시 요건을 준수하면서 규제 환경의 유럽 워크플로에 AI를 도입합니다. 생산성과 컴플라이언스 중 하나를 포기하지 않아도 됩니다.", de: "KI in regulierten europäischen Workflows einsetzen — unter Einhaltung von DSGVO (GDPR), EU AI Act und nationalen Datenhaltungspflichten. Ohne Kompromisse zwischen Produktivität und Compliance." } },
  { slug: "differential-privacy-for-enterprise-llm", category: "architecture-dp", href: "/resources/learn/differential-privacy-for-enterprise-llm", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data", ko: "엔터프라이즈 AI를 위한 차등 프라이버시: 개념, 중요성, 운영 데이터 적용 방식", de: "Differential Privacy für den KI-Einsatz im Unternehmen: Grundlagen, Relevanz und Anwendung auf operative Daten" }, desc: { en: "PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI.", ko: "PII 필터링은 이름을 찾아냅니다. 차등 프라이버시는 패턴까지 막습니다. 차등 프라이버시 기반 캡슐화가 AI 데이터 레이어의 기술적 토대인 이유입니다.", de: "PII-Filterung erfasst personenbezogene Felder. Differential Privacy schützt vor Rückschlüssen auf Musterebene. Warum strukturerhaltende Kapsulierung auf Basis von Differential Privacy die technische Grundlage der KI-Datenschicht bildet." } },
  { slug: "on-prem-llm-execution-path", category: "architecture-onprem", href: "/resources/learn/on-prem-llm-execution-path", locales: ["en", "ko", "de"], skipInIndex: false, title: { en: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations", ko: "온프레미스 LLM 실행 경로: 규제 환경을 위한 망분리·하이브리드·지역 내 AI", de: "On-Premise-Ausführungspfad für LLMs: Air-Gapped-, Hybrid- und regionsspezifische KI für regulierte Betriebsumgebungen" }, desc: { en: "Two execution paths inside a single context-preserving data layer for AI. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.", ko: "단일 AI 데이터 레이어 안에 두 가지 실행 경로가 존재합니다. 외부 전송이 불가한 환경에서는 온프레미스 경량 모델이 경계 내부에서 워크플로를 처리합니다. 외부 노출 Zero Exposure, 완전한 복원.", de: "LLM Capsule bietet zwei Ausführungspfade innerhalb einer einzigen KI-Datenschicht. Wenn externe Übertragung regulatorisch ausgeschlossen ist, übernimmt das lokale On-Premise-Modell den gesamten Workflow innerhalb Ihrer Infrastruktur — ohne externe Datenübertragung, mit vollständiger Wiederherstellung." } },
]

const CATEGORY_LABELS: Record<string, Record<Locale, string>> = {
  "architecture-dp": { en: "ARCHITECTURE · DIFFERENTIAL PRIVACY", ko: "아키텍처 · 차등 프라이버시", de: "ARCHITEKTUR · DIFFERENTIELLE PRIVATSPHÄRE" },
  "architecture-onprem": { en: "ARCHITECTURE · ON-PREM", ko: "아키텍처 · 온프레미스", de: "ARCHITEKTUR · ON-PREM" },
  "architecture-sovereign": { en: "ARCHITECTURE · SOVEREIGN AI", ko: "아키텍처 · 주권 AI", de: "ARCHITEKTUR · SOUVERÄNE KI" },
  "comparison": { en: "COMPARISON", ko: "비교", de: "VERGLEICH" },
  "definition": { en: "DEFINITION", ko: "정의", de: "DEFINITION" },
  "industry-healthcare": { en: "INDUSTRY · HEALTHCARE", ko: "산업 · 헬스케어", de: "BRANCHE · GESUNDHEIT" },
  "industry-telecom": { en: "INDUSTRY · TELECOM", ko: "산업 · 통신", de: "BRANCHE · TELEKOM" },
  "policy": { en: "POLICY", ko: "정책 분석", de: "POLITIK" },
  "policy-field": { en: "POLICY · FIELD", ko: "정책 · 현장 분석", de: "POLITIK · FELD" },
  "strategy": { en: "STRATEGY", ko: "전략", de: "STRATEGIE" },
}

const CATEGORY_TO_TAB: Record<string, string> = {
  "architecture-dp": "architecture",
  "architecture-onprem": "architecture",
  "architecture-sovereign": "architecture",
  "comparison": "comparison",
  "definition": "definition",
  "industry-healthcare": "industry",
  "industry-telecom": "industry",
  "policy": "policy",
  "policy-field": "policy",
  "strategy": "strategy",
}

// Hero text per locale (fallback to props if user overrides)
const HERO_TRANSLATIONS: Record<Locale, { eyebrow: string; heroTitle: string; heroLead: string; readLabel: string }> = {
  en: {
    eyebrow: "Resources · Learn",
    heroTitle: "Learn articles for regulated enterprise AI",
    heroLead: "Industry deployment guides, architecture deep-dives, comparison frameworks, and Korean public-sector policy analysis.",
    readLabel: "Read →",
  },
  ko: {
    eyebrow: "리소스 · Learn",
    heroTitle: "규제 환경 엔터프라이즈 AI를 위한 Learn 아티클",
    heroLead: "산업 도입 가이드, 아키텍처 심층 분석, 비교 프레임워크, 한국 공공 정책 분석을 다룹니다.",
    readLabel: "읽기 →",
  },
  de: {
    eyebrow: "Ressourcen · Learn",
    heroTitle: "Learn-Artikel für regulierte Enterprise-KI",
    heroLead: "Brancheneinsatz-Guides, Architektur-Analysen, Vergleichs-Frameworks und Politikanalysen aus dem koreanischen Public Sector.",
    readLabel: "Lesen →",
  },
}

const TAB_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  all: { en: "All", ko: "전체", de: "Alle" },
  policy: { en: "Policy", ko: "정책", de: "Politik" },
  industry: { en: "Industry", ko: "산업", de: "Branche" },
  architecture: { en: "Architecture", ko: "아키텍처", de: "Architektur" },
  strategy: { en: "Strategy", ko: "전략", de: "Strategie" },
  comparison: { en: "Comparison", ko: "비교", de: "Vergleich" },
  definition: { en: "Definition", ko: "정의", de: "Definition" },
}

export default function Learn({
  locale = "en",
  eyebrow = "",
  heroTitle = "",
  heroLead = "",
  labelAll = "",
  labelPolicy = "",
  labelIndustry = "",
  labelArchitecture = "",
  labelStrategy = "",
  labelComparison = "",
  labelDefinition = "",
  readLabel = "",
}: Props) {
  // Auto-detect locale from URL path (Framer Localization sync).
  // /ko/... → ko, /de/... → de, else en. Overridden by `locale` prop if set to non-"en".
  const [autoLocale, setAutoLocale] = useState<Locale>("en")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/(ko|de)(?:\/|$)/)
    if (m) setAutoLocale(m[1] as Locale)
  }, [])
  // Effective locale: explicit prop (non-en) > auto-detected from URL > "en"
  const effectiveLocale: Locale = locale && locale !== "en" ? locale : autoLocale

  const hero = HERO_TRANSLATIONS[effectiveLocale] || HERO_TRANSLATIONS.en
  // Dict-first resolver: locale dict overrides any stored prop value from Framer.
  const _eyebrow = effectiveLocale === "en" ? (eyebrow || hero.eyebrow) : (hero.eyebrow || eyebrow)
  const _heroTitle = effectiveLocale === "en" ? (heroTitle || hero.heroTitle) : (hero.heroTitle || heroTitle)
  const _heroLead = effectiveLocale === "en" ? (heroLead || hero.heroLead) : (hero.heroLead || heroLead)
  const _readLabel = effectiveLocale === "en" ? (readLabel || hero.readLabel) : (hero.readLabel || readLabel)

  const t = (key: string) => TAB_TRANSLATIONS[key]?.[effectiveLocale] || TAB_TRANSLATIONS[key]?.en || key
  const filters = [
    { key: "all", label: labelAll || t("all") },
    { key: "policy", label: labelPolicy || t("policy") },
    { key: "industry", label: labelIndustry || t("industry") },
    { key: "architecture", label: labelArchitecture || t("architecture") },
    { key: "strategy", label: labelStrategy || t("strategy") },
    { key: "comparison", label: labelComparison || t("comparison") },
    { key: "definition", label: labelDefinition || t("definition") },
  ]

  const [activeTab, setActiveTab] = useState("all")

  // Filter: locale availability + skipInIndex + active tab
  const visibleCards = LEARN_CARDS.filter((c) => {
    if (c.skipInIndex) return false
    if (!c.locales.includes(effectiveLocale)) return false
    if (activeTab !== "all" && CATEGORY_TO_TAB[c.category] !== activeTab) return false
    return true
  })

  const localePrefix = effectiveLocale === "en" ? "" : `/${effectiveLocale}`

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .lrn-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .lrn-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 80px);
        }

        .lrn-hero {
          padding: clamp(80px, 9vw, 140px) 0 clamp(48px, 6vw, 72px);
          text-align: center;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }
        .lrn-hero__inner { max-width: 860px; margin: 0 auto; }
        .lrn-hero__eyebrow {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 20px;
        }
        .lrn-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700; line-height: 1.15; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin: 0 0 20px;
        }
        .lrn-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65; color: var(--c-ink-soft, #3a3d5e);
          margin: 0 auto; max-width: 720px;
        }

        .lrn-tabs-wrap { padding: clamp(32px, 4vw, 56px) 0 0; }
        .lrn-tabs {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
        }
        .lrn-tab {
          appearance: none;
          background: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px; padding: 8px 18px;
          font-family: inherit; font-size: 13px; font-weight: 600;
          letter-spacing: -0.01em; color: var(--c-ink-soft, #3a3d5e);
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s, color 0.15s;
        }
        .lrn-tab:hover {
          border-color: var(--c-ink, #0f1130); color: var(--c-ink, #0f1130);
        }
        .lrn-tab--active {
          background-color: var(--c-ink, #0f1130);
          border-color: var(--c-ink, #0f1130); color: #ffffff;
        }

        .lrn-grid-wrap { padding: clamp(40px, 5vw, 72px) 0 clamp(80px, 9vw, 140px); }
        .lrn-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: clamp(16px, 2vw, 24px);
        }
        .lrn-card {
          display: flex; flex-direction: column;
          gap: 12px; padding: 24px;
          background: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 12px;
          text-decoration: none; color: inherit;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
          min-height: 200px;
        }
        .lrn-card:hover {
          border-color: var(--c-ink, #0f1130);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 17, 48, 0.08);
        }
        .lrn-card__cat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
        }
        .lrn-card__title {
          font-size: 17px; font-weight: 700; line-height: 1.4;
          letter-spacing: -0.01em; color: var(--c-ink, #0f1130);
          margin: 0;
        }
        .lrn-card__desc {
          font-size: 14px; line-height: 1.6;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0; flex: 1;
        }
        .lrn-card__link {
          align-self: flex-start; margin-top: 4px;
          font-size: 13px; font-weight: 600;
          color: var(--c-primary, #5b4fe9);
        }
        .lrn-card:hover .lrn-card__link {
          color: var(--c-primary-dark, #3b2fbf);
        }

        .lrn-empty {
          text-align: center; padding: clamp(40px, 5vw, 72px) 0;
          color: var(--c-muted, #6b7280); font-size: 15px;
        }

        @container (max-width: 639px) {
          .lrn-hero { padding-top: 60px; }
          .lrn-hero__title { font-size: 28px; }
          .lrn-hero__lead { font-size: 15px; }
          .lrn-card { padding: 20px 18px; }
          .lrn-card__title { font-size: 16px; }
        }
      `}</style>

      <div className="lrn-root">
        <section className="lrn-hero">
          <div className="lrn-container">
            <div className="lrn-hero__inner">
              <div className="lrn-hero__eyebrow">{_eyebrow}</div>
              <h1 className="lrn-hero__title">{_heroTitle}</h1>
              <p className="lrn-hero__lead">{_heroLead}</p>
            </div>
          </div>
        </section>

        <div className="lrn-tabs-wrap">
          <div className="lrn-container">
            <div className="lrn-tabs" role="tablist">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === f.key}
                  onClick={() => setActiveTab(f.key)}
                  className={`lrn-tab${activeTab === f.key ? " lrn-tab--active" : ""}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lrn-grid-wrap">
          <div className="lrn-container">
            {visibleCards.length === 0 ? (
              <div className="lrn-empty">No articles available for this locale yet.</div>
            ) : (
              <div className="lrn-grid">
                {visibleCards.map((c) => {
                  const title = c.title[effectiveLocale] || c.title.en || c.slug
                  const desc = c.desc[effectiveLocale] || c.desc.en || ""
                  const catLabel = CATEGORY_LABELS[c.category]?.[effectiveLocale] || c.category
                  return (
                    <a key={c.slug} href={`${localePrefix}${c.href}`} className="lrn-card">
                      <div className="lrn-card__cat">{catLabel}</div>
                      <h3 className="lrn-card__title">{title}</h3>
                      <p className="lrn-card__desc">{desc}</p>
                      <span className="lrn-card__link">{_readLabel}</span>
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Learn, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "" },
  heroTitle: { type: ControlType.String, title: "Hero Title", defaultValue: "" },
  heroLead: { type: ControlType.String, title: "Hero Lead", defaultValue: "", displayTextArea: true },
  labelAll: { type: ControlType.String, title: "Tab: All", defaultValue: "" },
  labelPolicy: { type: ControlType.String, title: "Tab: Policy", defaultValue: "" },
  labelIndustry: { type: ControlType.String, title: "Tab: Industry", defaultValue: "" },
  labelArchitecture: { type: ControlType.String, title: "Tab: Architecture", defaultValue: "" },
  labelStrategy: { type: ControlType.String, title: "Tab: Strategy", defaultValue: "" },
  labelComparison: { type: ControlType.String, title: "Tab: Comparison", defaultValue: "" },
  labelDefinition: { type: ControlType.String, title: "Tab: Definition", defaultValue: "" },
  readLabel: { type: ControlType.String, title: "Read Label", defaultValue: "" },
})
