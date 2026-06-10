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

const BODY_HTML = `<h2>The clinical AI adoption barrier</h2>
<p>Every hospital wants AI to help with the documentation burden. Radiology backlog, clinical note-taking, discharge summaries, billing coding — all painful, all time-consuming, all driven by structured + unstructured data that includes deeply private patient information. Studies show 30-50% time reduction in clinical documentation when AI is permitted to assist.</p>
<p>But PHI cannot leave the hospital network. HIPAA, regional privacy laws (GDPR in EU hospitals, K-PIPA in Korean hospitals), and increasingly hospital boards' own data governance policies forbid sending patient identifiers to external LLM endpoints. PII guardrails detect names but miss the operational data — clinical workflow context, lab results sequence, medication history pattern, care pathway — that real clinical AI summarization needs.</p>
<p>Most hospitals stall at pilot. AI vendors over-promise; security teams block; physicians use shadow AI on personal devices. The pilot never reaches the EHR.</p>

<h2>What the context-preserving data layer for AI changes</h2>
<p>An <a href="/glossary/context-preserving-data-layer">context-preserving data layer for AI</a> like LLM Capsule sits between the EHR (Epic, Cerner, internal HIS) and the LLM. PHI is encapsulated locally — patient name becomes ⟨P_xxxx⟩, MRN becomes ⟨MR_yyyy⟩, structure preserved. The LLM drafts the radiology summary on the capsule. The output is restored locally, inside the hospital network, and inserted back into the EHR record. The LLM provider never sees PHI.</p>

<h2>Five clinical data categories the data layer protects</h2>
<ul>
<li><strong>Direct identifiers</strong> — patient name, MRN, date of birth, SSN, phone, address, photo references</li>
<li><strong>Clinical identifiers</strong> — diagnoses, lab result IDs, prescription IDs, procedure codes, order numbers</li>
<li><strong>Workflow context</strong> — admission flow, care pathway, ward / unit, attending physician, consult chain</li>
<li><strong>Free-text PHI</strong> — clinical notes, discharge summaries, radiologist impressions, nurse observations</li>
<li><strong>Billing / claim PHI</strong> — claim review records, insurer references, prior authorization context</li>
</ul>

<h2>Five-step deployment pattern</h2>

<h3>Step 1 — EHR connector + scope</h3>
<p>Determine the integration point. Most hospitals start with a single workflow — radiology report drafting or discharge summary drafting — before expanding. LLM Capsule connects to Epic, Cerner, or internal HIS via FHIR API or HL7 messaging. Scope the pilot to one specialty (radiology, oncology, ED) and one workflow (report draft, summary, coding).</p>

<h3>Step 2 — HIPAA-aligned policy</h3>
<p>Define markers in alignment with HIPAA's 18 PHI identifiers + the hospital's internal privacy policy. Add hospital-specific markers (internal patient classification codes, clinical research workflow tags, study-specific identifiers). Document policy version with the privacy officer; this becomes part of the HIPAA risk assessment.</p>

<h3>Step 3 — On-prem path for high-sensitivity workflows</h3>
<p>For workflows involving mental health, substance abuse, HIV/AIDS, reproductive health, or pediatric data — use Path B (on-prem local lightweight model). For lower-sensitivity workflows (radiology measurement summarization, billing assist), Path A (approved external LLM with capsule only) is acceptable under hospital policy. Both paths share the same Capsule instance.</p>

<h3>Step 4 — Clinician integration</h3>
<p>Restored AI output appears inside the EHR — radiologist's PACS, attending physician's note pane, billing coder's interface. No new tool to learn. The audit badge "Restored · LLM Capsule · Policy hospital-rad-v3" is visible on the AI-generated content for transparency.</p>

<h3>Step 5 — Audit + IRB</h3>
<p>Configure audit logs to feed the hospital's compliance dashboard. For research-related deployments, the audit log supports IRB review and HIPAA risk assessment. Monthly review with the privacy office.</p>

<h2>Real customer outcomes</h2>
<p>Ewha Womans University Medical Center (EUMC) deployed LLM Capsule for clinical workflow summarization. PHI never traverses the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. Full audit trail for HIPAA-aligned compliance reporting.</p>

<h2>Common deployment pitfalls</h2>
<ul>
<li><strong>Underestimating free-text PHI.</strong> The hardest data to protect is unstructured clinical notes. The data layer must include free-text NER masking — not just structured field detection.</li>
<li><strong>Skipping the privacy officer.</strong> HIPAA risk assessment must be done up front. Don't deploy and ask for forgiveness.</li>
<li><strong>One-size-fits-all policy.</strong> Mental health, substance use, and pediatric workflows need stricter policies than general medicine. Use per-workflow scope.</li>
<li><strong>Ignoring billing.</strong> Billing-related AI workflows often surprise privacy reviewers — claim records carry PHI too. Include billing in the initial policy.</li>
</ul>

<h2>Getting started</h2>
<p>Bring one real radiology study, one discharge summary template, and the hospital's privacy policy. LLM Capsule deploys on a sample workflow within 30 minutes; we generate an evaluation report against your privacy policy.</p>
<p><a href="/request-a-demo" class="btn btn--primary">Request a hospital AI demo</a></p>`

const FAQ_JSON_LD = ``

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "How to deploy AI in a hospital without exposing PHI",
    lead: "A practical guide for hospital CIOs, CMIOs, and clinical informatics teams to bring AI into radiology, clinical documentation, and care coordination — without sending PHI to external LLMs.",
    category: "Industry · Healthcare",
    readTime: "11 min read",
    dateUpdated: "Updated April 2025",
    tldrLabel: "TL;DR — Definition",
    tldrBody: "A hospital AI deployment with PHI protection uses a context-preserving data layer for AI to encapsulate patient names, MRN, diagnoses, lab results, prescriptions, and clinical workflow context locally before any data reaches an external LLM. The LLM drafts radiology reports, clinical summaries, and care coordination outputs on the protected capsule; outputs are restored back into the EHR inside the hospital network. HIPAA-aligned. Deployed at Ewha Womans University Medical Center (EUMC).",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hospital-ai-deployment-phi-protection",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a hospital without exposing PHI",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: Operational data",
    related3Href: "/resources/glossary/operational-data",
    related4Title: "Solutions: Healthcare industry",
    related4Href: "/solutions",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "PHI를 외부에 노출하지 않고 병원에 AI를 도입하는 방법",
    lead: "병원 CIO·CMIO·임상 정보팀을 위한 실무 가이드입니다. 영상의학·임상 문서화·케어 코디네이션에 AI를 도입하면서도 PHI를 외부 LLM으로 절대 전송하지 않습니다.",
    category: "산업 · 의료",
    readTime: "11분 읽기",
    dateUpdated: "2025년 4월 업데이트",
    tldrLabel: "TL;DR — 정의",
    tldrBody: "PHI 보호가 적용된 병원 AI 배포는 데이터 레이어를 활용해 환자 이름·MRN·진단명·검사 결과·처방 정보·임상 워크플로우 컨텍스트를 로컬에서 캡슐화한 뒤 외부 LLM으로 전달합니다. LLM은 보호된 캡슐 위에서 영상 판독 보고서·임상 요약·케어 코디네이션 결과물을 작성하고, 출력은 병원 네트워크 내부에서 EHR로 복원됩니다. HIPAA 준수. 이화여자대학교의료원(EUMC) 배포 완료.",
    bodyHtml: `<!-- bodyHtml — HTML 태그 유지, 텍스트만 번역 -->

<h2>임상 AI 도입의 장벽</h2>

<p>모든 병원이 문서 부담을 줄이기 위해 AI를 원합니다. 영상 판독 적체, 임상 노트 작성, 퇴원 요약, 청구 코딩 — 모두 고통스럽고 시간이 많이 걸리며, 깊이 민감한 환자 정보를 포함한 정형·비정형 데이터가 뒤섞여 있습니다. AI 지원이 허용될 경우 임상 문서 작성 시간이 30-50% 단축된다는 연구 결과가 있습니다.</p>

<p>그러나 PHI는 병원 네트워크 밖으로 나갈 수 없습니다. HIPAA, 지역 개인정보보호법(EU 병원의 GDPR, 한국 병원의 개인정보보호법), 그리고 갈수록 엄격해지는 병원 자체 데이터 거버넌스 정책이 환자 식별 정보를 외부 LLM 엔드포인트로 전송하는 것을 금지합니다. PII 가드레일은 이름은 탐지하지만, 실제 임상 AI 요약에 필요한 운영 데이터 — 임상 워크플로우 컨텍스트, 검사 결과 시퀀스, 복약 이력 패턴, 케어 패스웨이 — 는 놓칩니다.</p>

<p>대부분의 병원은 파일럿 단계에서 멈춥니다. AI 벤더는 과도한 약속을 하고, 보안팀은 차단하며, 의사들은 개인 기기에서 비공식 AI를 씁니다. 파일럿은 끝내 EHR에 닿지 못합니다.</p>

<h2>데이터 레이어가 바꾸는 것</h2>

<p>LLM Capsule과 같은 <a href="/glossary/context-preserving-data-layer">데이터 레이어</a>는 EHR(Epic, Cerner, 내부 HIS)과 LLM 사이에 위치합니다. PHI는 로컬에서 캡슐화됩니다 — 환자 이름은 ⟨P_xxxx⟩, MRN은 ⟨MR_yyyy⟩로 치환되며, 문서 구조는 그대로 보존됩니다. LLM은 캡슐 위에서 영상 판독 요약을 작성합니다. 출력은 병원 네트워크 내부에서 로컬 복원되어 EHR 레코드에 삽입됩니다. LLM 제공업체는 PHI를 절대 볼 수 없습니다.</p>

<h2>데이터 레이어가 보호하는 5가지 임상 데이터 범주</h2>

  <li><strong>Direct identifiers</strong> — patient name, MRN, date of birth, SSN, phone, address, photo references</li>
  <li><strong>Clinical identifiers</strong> — diagnoses, lab result IDs, prescription IDs, procedure codes, order numbers</li>
  <li><strong>Workflow context</strong> — admission flow, care pathway, ward / unit, attending physician, consult chain</li>
  <li><strong>Free-text PHI</strong> — clinical notes, discharge summaries, radiologist impressions, nurse observations</li>
  <li><strong>Billing / claim PHI</strong> — claim review records, insurer references, prior authorization context</li>
</ul>

<h2>5단계 배포 패턴</h2>

<h3>Step 1 — EHR 커넥터 + 범위 설정</h3>

<p>통합 지점을 결정합니다. 대부분의 병원은 확장 전에 단일 워크플로우 — 영상 보고서 초안 작성 또는 퇴원 요약 작성 — 부터 시작합니다. LLM Capsule은 FHIR API 또는 HL7 메시징을 통해 Epic, Cerner, 내부 HIS에 연결됩니다. 파일럿 범위는 하나의 진료과(영상의학과, 종양내과, 응급실)와 하나의 워크플로우(보고서 초안, 요약, 코딩)로 설정합니다.</p>

<h3>Step 2 — HIPAA 준수 정책 수립</h3>

<p>HIPAA의 18가지 PHI 식별자 + 병원 내부 개인정보 정책에 맞게 마커를 정의합니다. 병원 고유 마커(내부 환자 분류 코드, 임상 연구 워크플로우 태그, 연구별 식별자)를 추가합니다. 개인정보보호 담당자와 함께 정책 버전을 문서화하며, 이는 HIPAA 위험 평가의 일부가 됩니다.</p>

<h3>Step 3 — 고감도 워크플로우를 위한 온프레미스 경로</h3>

<p>정신건강, 약물 남용, HIV/AIDS, 생식 건강, 소아과 데이터와 관련된 워크플로우에는 Path B(온프레미스 로컬 경량 모델)를 사용합니다. 낮은 감도의 워크플로우(영상 측정값 요약, 청구 지원)에는 병원 정책 하에 Path A(캡슐만 적용한 승인된 외부 LLM)가 허용됩니다. 두 경로 모두 동일한 Capsule 인스턴스를 공유합니다.</p>

<h3>Step 4 — 임상의 통합</h3>

<p>복원된 AI 출력은 EHR 내부 — 영상의학과의 PACS, 담당 의사의 노트 창, 청구 코더의 인터페이스 — 에 직접 나타납니다. 새로 배울 도구가 없습니다. AI 생성 콘텐츠에는 투명성을 위해 감사 배지 "Restored · LLM Capsule · Policy hospital-rad-v3"가 표시됩니다.</p>

<h3>Step 5 — 감사 + IRB</h3>

<p>감사 로그가 병원의 컴플라이언스 대시보드에 연결되도록 설정합니다. 연구 관련 배포의 경우, 감사 로그는 IRB 검토 및 HIPAA 위험 평가를 지원합니다. 개인정보보호팀과 월간 검토를 진행합니다.</p>

<h2>실제 고객 성과</h2>

<p>이화여자대학교의료원(EUMC)이 임상 워크플로우 요약을 위해 LLM Capsule을 배포했습니다. PHI는 원본 형태로 EUMC 경계를 절대 넘지 않습니다. 로컬 복원을 통해 권한을 부여받은 병원 시스템만 원본 환자 식별자를 봅니다. HIPAA 준수 컴플라이언스 보고를 위한 완전한 감사 이력이 제공됩니다.</p>

<h2>배포 시 흔한 함정</h2>

  <li><strong>자유 텍스트 PHI 과소평가.</strong> 보호가 가장 어려운 데이터는 비구조화된 임상 노트입니다. 데이터 레이어에 구조화 필드 감지뿐 아니라 자유 텍스트 NER 마스킹이 포함되어야 합니다.</li>
  <li><strong>프라이버시 담당자 건너뛰기.</strong> HIPAA 위험 평가는 사전에 수행해야 합니다. 배포 후 사후 승인을 구하지 마십시오.</li>
  <li><strong>획일적 정책.</strong> 정신건강, 약물 사용, 소아과 워크플로우는 일반 의료보다 더 엄격한 정책이 필요합니다. 워크플로우별 범위를 사용하십시오.</li>
  <li><strong>청구 무시.</strong> 청구 관련 AI 워크플로우는 프라이버시 검토자를 종종 놀라게 합니다 — 클레임 기록에도 PHI가 포함됩니다. 초기 정책에 청구를 포함시키십시오.</li>
</ul>

<h2>시작하기</h2>

<p>실제 영상 검사 1건, 퇴원 요약 템플릿 1건, 병원 개인정보 정책을 가져오십시오. LLM Capsule은 샘플 워크플로우에서 30분 내에 배포되며, 병원 개인정보 정책에 대한 평가 보고서를 생성해 드립니다.</p>

<p><a href="/request-a-demo" class="la-btn la-btn--primary">병원 AI 데모 요청</a></p>

<h2>관련 콘텐츠</h2>

  <li><a href="/learn/differential-privacy-for-enterprise-llm">Differential privacy for enterprise LLM</a></li>
  <li><a href="/learn/on-prem-llm-execution-path">On-premise LLM execution path</a></li>
  <li><a href="/glossary/operational-data">Glossary: Operational data</a></li>
  <li><a href="/solutions">Solutions: Healthcare industry</a></li>
</ul>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hospital-ai-deployment-phi-protection",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a hospital without exposing PHI",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: Operational data",
    related3Href: "/resources/glossary/operational-data",
    related4Title: "Solutions: Healthcare industry",
    related4Href: "/solutions",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "KI im Krankenhaus einsetzen — ohne Offenlegung von Patientendaten",
    lead: "Ein praxisorientierter Leitfaden für IT-Leiter, Medizininformatiker und klinische Informatik-Teams: KI in Radiologie, klinische Dokumentation und Versorgungskoordination integrieren — ohne Patientendaten an externe LLMs zu übermitteln.",
    category: "Branche · Gesundheitswesen",
    readTime: "11 Min. Lesezeit",
    dateUpdated: "Aktualisiert April 2025",
    tldrLabel: "Definition · Kurzfassung",
    tldrBody: "Ein KI-Einsatz im Krankenhaus mit PHI-Schutz nutzt eine KI-Datenschicht, um Patientennamen, MRN, Diagnosen, Laborbefunde, Verordnungen und klinischen Workflow-Kontext lokal zu kapsulieren — bevor Daten ein externes LLM erreichen. Das LLM erstellt Radiologieberichte, klinische Zusammenfassungen und Ergebnisse der Versorgungskoordination auf der geschützten Kapsel. Die Ausgaben werden innerhalb des Krankenhausnetzwerks in das EHR zurückgeführt. HIPAA-konform ausgelegt. Im Einsatz am Ewha Womans University Medical Center (EUMC).",
    bodyHtml: `<h2>Die Hürde bei der KI-Einführung im klinischen Betrieb</h2>

<p>Der Dokumentationsaufwand ist in nahezu jedem Krankenhaus ein anerkanntes Problem. Radiologierückstände, klinische Notizen, Entlassungsberichte, Abrechnungskodierung — zeitintensiv, fehleranfällig und vollständig auf Patientendaten angewiesen. Studien belegen eine Zeitersparnis von 30 bis 50 % bei der klinischen Dokumentation, wenn KI unterstützend eingesetzt wird.</p>

<p>Patientendaten (PHI) dürfen das Krankenhausnetzwerk jedoch nicht verlassen. HIPAA, regionale Datenschutzgesetze — darunter die DSGVO (GDPR) in europäischen Einrichtungen — sowie die hausinterne Daten-Governance untersagen die Übermittlung von Patientenkennungen an externe LLM-Endpunkte. PII-Schutzmaßnahmen erkennen Namen, erfassen jedoch nicht die operativen Daten, die klinische KI-Zusammenfassungen tatsächlich benötigen: Workflow-Kontext, Laborbefundsequenzen, Medikationsverläufe und Versorgungspfade.</p>

<p>Die meisten Einrichtungen kommen über die Pilotphase nicht hinaus. KI-Anbieter versprechen zu viel, Sicherheitsteams blockieren den Rollout, und Ärzte greifen auf private Geräte und nicht freigegebene KI-Dienste zurück. Das Pilotprojekt erreicht das EHR nie.</p>

<h2>Was die KI-Datenschicht verändert</h2>

<p>Eine <a href="/glossary/context-preserving-data-layer">KI-Datenschicht</a> wie LLM Capsule positioniert sich zwischen dem EHR (Epic, Cerner oder einem internen KIS) und dem LLM. PHI wird lokal kapsuliert — Patientenname wird zu ⟨P_xxxx⟩, MRN zu ⟨MR_yyyy⟩, die Dokumentstruktur bleibt erhalten. Das LLM erstellt die Radiologiezusammenfassung auf Basis der Kapsel. Die Ausgabe wird lokal, innerhalb des Krankenhausnetzwerks, wiederhergestellt und in den EHR-Datensatz zurückgeführt. Der LLM-Anbieter erhält zu keinem Zeitpunkt Zugriff auf PHI.</p>

<h2>Fünf klinische Datenkategorien unter dem Schutz der Datenschicht</h2>

<ul>
<li><strong>Direkte Identifikatoren</strong> — Patientenname, MRN, Geburtsdatum, Sozialversicherungsnummer, Telefon, Adresse, Fotoangaben</li>
<li><strong>Klinische Identifikatoren</strong> — Diagnosen, Laborbefund-IDs, Verordnungs-IDs, Prozedurkodes, Auftragsnummern</li>
<li><strong>Workflow-Kontext</strong> — Aufnahmeablauf, Versorgungspfad, Station/Einheit, behandelnder Arzt, Konsilkette</li>
<li><strong>Freitext-PHI</strong> — klinische Notizen, Entlassungsberichte, radiologische Befundeinschätzungen, Pflegebeobachtungen</li>
<li><strong>Abrechnungs-PHI</strong> — Prüfungsnachweise zu Leistungsansprüchen, Versicherungsreferenzen, Vorautorisierungskontext</li>
</ul>

<h2>Fünfstufiges Einführungsmuster</h2>

<h3>Schritt 1 — EHR-Connector und Umfangsdefinition</h3>
<p>Der Integrationspunkt wird festgelegt. Die meisten Einrichtungen beginnen mit einem einzelnen Workflow — etwa der Erstellung von Radiologieberichten oder Entlassungsberichten — bevor sie den Einsatz ausweiten. LLM Capsule bindet Epic, Cerner oder ein internes KIS über die FHIR-API oder HL7-Messaging an. Der Pilot wird auf eine Fachabteilung (Radiologie, Onkologie, Notaufnahme) und einen Workflow (Berichtsentwurf, Zusammenfassung, Kodierung) begrenzt.</p>

<h3>Schritt 2 — HIPAA-konforme Richtliniendefinition</h3>
<p>Die Marker orientieren sich an den 18 PHI-Identifikatoren nach HIPAA sowie der hausinternen Datenschutzrichtlinie. Einrichtungsspezifische Ergänzungen umfassen interne Patientenklassifikationskodes, klinische Forschungs-Workflow-Tags und studienspezifische Kennungen. Die Richtlinienversion wird gemeinsam mit dem Datenschutzbeauftragten dokumentiert und fließt in die HIPAA-Risikoabschätzung ein.</p>

<h3>Schritt 3 — On-Premise-Pfad für hochsensible Workflows</h3>
<p>Für Workflows mit Bezug zu psychischer Gesundheit, Suchterkrankungen, HIV/AIDS, reproduktiver Gesundheit oder Kinderheilkunde wird Pfad B genutzt: ein lokal ausgeführtes Leichtgewichtmodell ohne externe Übertragung. Für weniger sensible Workflows — etwa die Zusammenfassung radiologischer Messwerte oder die Abrechnungsunterstützung — ist Pfad A (zugelassenes externes LLM, ausschließlich mit Kapseldaten) gemäß Krankenhausrichtlinie zulässig. Beide Pfade nutzen dieselbe Capsule-Instanz.</p>

<h3>Schritt 4 — Integration in den klinischen Arbeitsablauf</h3>
<p>Die wiederhergestellte KI-Ausgabe erscheint direkt im EHR: im PACS des Radiologen, im Notizbereich des behandelnden Arztes oder in der Abrechnungsoberfläche. Es ist kein neues Werkzeug zu erlernen. Der Prüfvermerk „Restored · LLM Capsule · Policy hospital-rad-v3" ist auf dem KI-generierten Inhalt sichtbar und schafft Nachvollziehbarkeit.</p>

<h3>Schritt 5 — Prüfprotokoll und ethische Aufsicht</h3>
<p>Die Prüfprotokolle werden so konfiguriert, dass sie das Compliance-Dashboard der Einrichtung speisen. Bei forschungsbezogenen Deployments unterstützt das Prüfprotokoll die Überprüfung durch die Ethikkommission (IRB) und die HIPAA-Risikoabschätzung. Monatliche Überprüfung mit dem Datenschutzbeauftragten.</p>

<h2>Ergebnis aus der Praxis</h2>

<p>Das Ewha Womans University Medical Center (EUMC) setzt LLM Capsule für die Zusammenfassung klinischer Workflows ein. PHI verlässt die EUMC-Netzwerkgrenze zu keinem Zeitpunkt in Rohform. Die lokale Wiederherstellung stellt sicher, dass ausschließlich autorisierte Krankenhaussysteme auf die originalen Patientenkennungen zugreifen. Ein vollständiger Prüfpfad unterstützt die HIPAA-konforme Compliance-Berichterstattung.</p>

<h2>Häufige Fehler bei der Einführung</h2>

<ul>
<li><strong>Freitext-PHI unterschätzt.</strong> Unstrukturierte klinische Notizen sind die schwierigsten Daten zu schützen. Die Datenschicht muss Freitext-NER-Maskierung umfassen — nicht nur die Erkennung strukturierter Felder.</li>
<li><strong>Datenschutzbeauftragten übergangen.</strong> Die HIPAA-Risikoabschätzung muss vor dem Deployment erfolgen. Nachträgliche Genehmigungen sind kein akzeptabler Ansatz.</li>
<li><strong>Einheitsrichtlinie für alle Workflows.</strong> Workflows in der Psychiatrie, der Suchtmedizin und der Kinderheilkunde erfordern strengere Richtlinien als die Allgemeinmedizin. Der Umfang wird workflowspezifisch definiert.</li>
<li><strong>Abrechnung außer Acht gelassen.</strong> Abrechnungsbezogene KI-Workflows überraschen Datenschutzprüfer häufig — auch Leistungsabrechnungsdaten enthalten PHI. Die Abrechnung wird in die initiale Richtliniendefinition einbezogen.</li>
</ul>

<h2>Einstieg</h2>

<p>Bringen Sie eine reale Radiologiestudie, eine Entlassungsberichtsvorlage und die Datenschutzrichtlinie Ihrer Einrichtung mit. LLM Capsule wird innerhalb von 30 Minuten auf einem Beispiel-Workflow eingerichtet. Wir erstellen einen Evaluationsbericht auf Basis Ihrer Datenschutzrichtlinie.</p>

<p><a href="/request-a-demo" class="btn btn--primary">Demo anfordern</a></p>

<h2>Verwandte Artikel</h2>

<ul>
<li><a href="/learn/differential-privacy-for-enterprise-llm">Differential Privacy für den LLM-Einsatz im Unternehmen</a></li>
<li><a href="/learn/on-prem-llm-execution-path">On-Premise-Ausführungspfad für LLMs</a></li>
<li><a href="/glossary/operational-data">Glossar: Operative Daten</a></li>
<li><a href="/solutions">Lösungen: Gesundheitswesen</a></li>
</ul>

---`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hospital-ai-deployment-phi-protection",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    inLanguage: "en",
    breadcrumbLabel: "How to deploy AI in a hospital without exposing PHI",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "On-prem LLM execution path",
    related2Href: "/resources/learn/on-prem-llm-execution-path",
    related3Title: "Glossary: Operational data",
    related3Href: "/resources/glossary/operational-data",
    related4Title: "Solutions: Healthcare industry",
    related4Href: "/solutions",
  },
}

export default function HospitalAiDeploymentPhiProtection({
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

addPropertyControls(HospitalAiDeploymentPhiProtection, {
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
