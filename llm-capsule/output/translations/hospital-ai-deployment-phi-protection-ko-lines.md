# hospital-ai-deployment-phi-protection — 한국어 번역

## Section 01: Hero

← Learn
← 돌아가기

How to deploy AI in a hospital without exposing PHI
PHI를 외부에 노출하지 않고 병원에 AI를 도입하는 방법

A practical guide for hospital CIOs, CMIOs, and clinical informatics teams to bring AI into radiology, clinical documentation, and care coordination — without sending PHI to external LLMs.
병원 CIO·CMIO·임상 정보팀을 위한 실무 가이드입니다. 영상의학·임상 문서화·케어 코디네이션에 AI를 도입하면서도 PHI를 외부 LLM으로 절대 전송하지 않습니다.

Industry · Healthcare
산업 · 의료

11 min read
11분 읽기

Updated April 2025
2025년 4월 업데이트

## Section 02: TL;DR

TL;DR — Definition
TL;DR — 정의

A hospital AI deployment with PHI protection uses an AI enablement data layer to encapsulate patient names, MRN, diagnoses, lab results, prescriptions, and clinical workflow context locally before any data reaches an external LLM. The LLM drafts radiology reports, clinical summaries, and care coordination outputs on the protected capsule; outputs are restored back into the EHR inside the hospital network. HIPAA-aligned. Deployed at Ewha Womans University Medical Center (EUMC).
PHI 보호가 적용된 병원 AI 배포는 데이터 레이어를 활용해 환자 이름·MRN·진단명·검사 결과·처방 정보·임상 워크플로우 컨텍스트를 로컬에서 캡슐화한 뒤 외부 LLM으로 전달합니다. LLM은 보호된 캡슐 위에서 영상 판독 보고서·임상 요약·케어 코디네이션 결과물을 작성하고, 출력은 병원 네트워크 내부에서 EHR로 복원됩니다. HIPAA 준수. 이화여자대학교의료원(EUMC) 배포 완료.

## Section 03: Body HTML

<!-- bodyHtml — HTML 태그 유지, 텍스트만 번역 -->

<h2>The clinical AI adoption barrier</h2>
<h2>임상 AI 도입의 장벽</h2>

<p>Every hospital wants AI to help with the documentation burden. Radiology backlog, clinical note-taking, discharge summaries, billing coding — all painful, all time-consuming, all driven by structured + unstructured data that includes deeply private patient information. Studies show 30-50% time reduction in clinical documentation when AI is permitted to assist.</p>
<p>모든 병원이 문서 부담을 줄이기 위해 AI를 원합니다. 영상 판독 적체, 임상 노트 작성, 퇴원 요약, 청구 코딩 — 모두 고통스럽고 시간이 많이 걸리며, 깊이 민감한 환자 정보를 포함한 정형·비정형 데이터가 뒤섞여 있습니다. AI 지원이 허용될 경우 임상 문서 작성 시간이 30-50% 단축된다는 연구 결과가 있습니다.</p>

<p>But PHI cannot leave the hospital network. HIPAA, regional privacy laws (GDPR in EU hospitals, K-PIPA in Korean hospitals), and increasingly hospital boards' own data governance policies forbid sending patient identifiers to external LLM endpoints. PII guardrails detect names but miss the operational data — clinical workflow context, lab results sequence, medication history pattern, care pathway — that real clinical AI summarization needs.</p>
<p>그러나 PHI는 병원 네트워크 밖으로 나갈 수 없습니다. HIPAA, 지역 개인정보보호법(EU 병원의 GDPR, 한국 병원의 개인정보보호법), 그리고 갈수록 엄격해지는 병원 자체 데이터 거버넌스 정책이 환자 식별 정보를 외부 LLM 엔드포인트로 전송하는 것을 금지합니다. PII 가드레일은 이름은 탐지하지만, 실제 임상 AI 요약에 필요한 운영 데이터 — 임상 워크플로우 컨텍스트, 검사 결과 시퀀스, 복약 이력 패턴, 케어 패스웨이 — 는 놓칩니다.</p>

<p>Most hospitals stall at pilot. AI vendors over-promise; security teams block; physicians use shadow AI on personal devices. The pilot never reaches the EHR.</p>
<p>대부분의 병원은 파일럿 단계에서 멈춥니다. AI 벤더는 과도한 약속을 하고, 보안팀은 차단하며, 의사들은 개인 기기에서 비공식 AI를 씁니다. 파일럿은 끝내 EHR에 닿지 못합니다.</p>

<h2>What the AI enablement data layer changes</h2>
<h2>데이터 레이어가 바꾸는 것</h2>

<p>An <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> like LLM Capsule sits between the EHR (Epic, Cerner, internal HIS) and the LLM. PHI is encapsulated locally — patient name becomes ⟨P_xxxx⟩, MRN becomes ⟨MR_yyyy⟩, structure preserved. The LLM drafts the radiology summary on the capsule. The output is restored locally, inside the hospital network, and inserted back into the EHR record. The LLM provider never sees PHI.</p>
<p>LLM Capsule과 같은 <a href="/glossary/ai-enablement-data-layer">데이터 레이어</a>는 EHR(Epic, Cerner, 내부 HIS)과 LLM 사이에 위치합니다. PHI는 로컬에서 캡슐화됩니다 — 환자 이름은 ⟨P_xxxx⟩, MRN은 ⟨MR_yyyy⟩로 치환되며, 문서 구조는 그대로 보존됩니다. LLM은 캡슐 위에서 영상 판독 요약을 작성합니다. 출력은 병원 네트워크 내부에서 로컬 복원되어 EHR 레코드에 삽입됩니다. LLM 제공업체는 PHI를 절대 볼 수 없습니다.</p>

<h2>Five clinical data categories the data layer protects</h2>
<h2>데이터 레이어가 보호하는 5가지 임상 데이터 범주</h2>

<ul>
  <li><strong>Direct identifiers</strong> — patient name, MRN, date of birth, SSN, phone, address, photo references</li>
  <li><strong>직접 식별자</strong> — 환자 이름, MRN, 생년월일, 주민등록번호, 전화번호, 주소, 사진 참조</li>
  <li><strong>Clinical identifiers</strong> — diagnoses, lab result IDs, prescription IDs, procedure codes, order numbers</li>
  <li><strong>임상 식별자</strong> — 진단명, 검사 결과 ID, 처방 ID, 시술 코드, 오더 번호</li>
  <li><strong>Workflow context</strong> — admission flow, care pathway, ward / unit, attending physician, consult chain</li>
  <li><strong>워크플로우 컨텍스트</strong> — 입원 흐름, 케어 패스웨이, 병동/유닛, 담당 의사, 컨설트 체인</li>
  <li><strong>Free-text PHI</strong> — clinical notes, discharge summaries, radiologist impressions, nurse observations</li>
  <li><strong>자유 형식 PHI</strong> — 임상 노트, 퇴원 요약, 영상의학과 소견, 간호 기록</li>
  <li><strong>Billing / claim PHI</strong> — claim review records, insurer references, prior authorization context</li>
  <li><strong>청구·청구서 PHI</strong> — 청구 검토 기록, 보험사 참조 정보, 사전 승인 컨텍스트</li>
</ul>

<h2>Five-step deployment pattern</h2>
<h2>5단계 배포 패턴</h2>

<h3>Step 1 — EHR connector + scope</h3>
<h3>Step 1 — EHR 커넥터 + 범위 설정</h3>

<p>Determine the integration point. Most hospitals start with a single workflow — radiology report drafting or discharge summary drafting — before expanding. LLM Capsule connects to Epic, Cerner, or internal HIS via FHIR API or HL7 messaging. Scope the pilot to one specialty (radiology, oncology, ED) and one workflow (report draft, summary, coding).</p>
<p>통합 지점을 결정합니다. 대부분의 병원은 확장 전에 단일 워크플로우 — 영상 보고서 초안 작성 또는 퇴원 요약 작성 — 부터 시작합니다. LLM Capsule은 FHIR API 또는 HL7 메시징을 통해 Epic, Cerner, 내부 HIS에 연결됩니다. 파일럿 범위는 하나의 진료과(영상의학과, 종양내과, 응급실)와 하나의 워크플로우(보고서 초안, 요약, 코딩)로 설정합니다.</p>

<h3>Step 2 — HIPAA-aligned policy</h3>
<h3>Step 2 — HIPAA 준수 정책 수립</h3>

<p>Define markers in alignment with HIPAA's 18 PHI identifiers + the hospital's internal privacy policy. Add hospital-specific markers (internal patient classification codes, clinical research workflow tags, study-specific identifiers). Document policy version with the privacy officer; this becomes part of the HIPAA risk assessment.</p>
<p>HIPAA의 18가지 PHI 식별자 + 병원 내부 개인정보 정책에 맞게 마커를 정의합니다. 병원 고유 마커(내부 환자 분류 코드, 임상 연구 워크플로우 태그, 연구별 식별자)를 추가합니다. 개인정보보호 담당자와 함께 정책 버전을 문서화하며, 이는 HIPAA 위험 평가의 일부가 됩니다.</p>

<h3>Step 3 — On-prem path for high-sensitivity workflows</h3>
<h3>Step 3 — 고감도 워크플로우를 위한 온프레미스 경로</h3>

<p>For workflows involving mental health, substance abuse, HIV/AIDS, reproductive health, or pediatric data — use Path B (on-prem local lightweight model). For lower-sensitivity workflows (radiology measurement summarization, billing assist), Path A (approved external LLM with capsule only) is acceptable under hospital policy. Both paths share the same Capsule instance.</p>
<p>정신건강, 약물 남용, HIV/AIDS, 생식 건강, 소아과 데이터와 관련된 워크플로우에는 Path B(온프레미스 로컬 경량 모델)를 사용합니다. 낮은 감도의 워크플로우(영상 측정값 요약, 청구 지원)에는 병원 정책 하에 Path A(캡슐만 적용한 승인된 외부 LLM)가 허용됩니다. 두 경로 모두 동일한 Capsule 인스턴스를 공유합니다.</p>

<h3>Step 4 — Clinician integration</h3>
<h3>Step 4 — 임상의 통합</h3>

<p>Restored AI output appears inside the EHR — radiologist's PACS, attending physician's note pane, billing coder's interface. No new tool to learn. The audit badge "Restored · LLM Capsule · Policy hospital-rad-v3" is visible on the AI-generated content for transparency.</p>
<p>복원된 AI 출력은 EHR 내부 — 영상의학과의 PACS, 담당 의사의 노트 창, 청구 코더의 인터페이스 — 에 직접 나타납니다. 새로 배울 도구가 없습니다. AI 생성 콘텐츠에는 투명성을 위해 감사 배지 "Restored · LLM Capsule · Policy hospital-rad-v3"가 표시됩니다.</p>

<h3>Step 5 — Audit + IRB</h3>
<h3>Step 5 — 감사 + IRB</h3>

<p>Configure audit logs to feed the hospital's compliance dashboard. For research-related deployments, the audit log supports IRB review and HIPAA risk assessment. Monthly review with the privacy office.</p>
<p>감사 로그가 병원의 컴플라이언스 대시보드에 연결되도록 설정합니다. 연구 관련 배포의 경우, 감사 로그는 IRB 검토 및 HIPAA 위험 평가를 지원합니다. 개인정보보호팀과 월간 검토를 진행합니다.</p>

<h2>Real customer outcomes</h2>
<h2>실제 고객 성과</h2>

<p>Ewha Womans University Medical Center (EUMC) deployed LLM Capsule for clinical workflow summarization. PHI never traverses the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. Full audit trail for HIPAA-aligned compliance reporting.</p>
<p>이화여자대학교의료원(EUMC)이 임상 워크플로우 요약을 위해 LLM Capsule을 배포했습니다. PHI는 원본 형태로 EUMC 경계를 절대 넘지 않습니다. 로컬 복원을 통해 권한을 부여받은 병원 시스템만 원본 환자 식별자를 봅니다. HIPAA 준수 컴플라이언스 보고를 위한 완전한 감사 이력이 제공됩니다.</p>

<h2>Common deployment pitfalls</h2>
<h2>배포 시 흔한 함정</h2>

<ul>
  <li><strong>Underestimating free-text PHI.</strong> The hardest data to protect is unstructured clinical notes. The data layer must include free-text NER masking — not just structured field detection.</li>
  <li><strong>자유 형식 PHI 과소평가.</strong> 보호하기 가장 어려운 데이터는 비정형 임상 노트입니다. 데이터 레이어는 정형 필드 탐지만이 아닌, 자유 형식 NER 마스킹도 반드시 포함해야 합니다.</li>
  <li><strong>Skipping the privacy officer.</strong> HIPAA risk assessment must be done up front. Don't deploy and ask for forgiveness.</li>
  <li><strong>개인정보보호 담당자 배제.</strong> HIPAA 위험 평가는 반드시 사전에 완료해야 합니다. 먼저 배포하고 나중에 용서를 구하는 방식은 안 됩니다.</li>
  <li><strong>One-size-fits-all policy.</strong> Mental health, substance use, and pediatric workflows need stricter policies than general medicine. Use per-workflow scope.</li>
  <li><strong>단일 정책 적용.</strong> 정신건강, 약물 남용, 소아과 워크플로우는 일반 의료보다 더 엄격한 정책이 필요합니다. 워크플로우별 범위를 사용하십시오.</li>
  <li><strong>Ignoring billing.</strong> Billing-related AI workflows often surprise privacy reviewers — claim records carry PHI too. Include billing in the initial policy.</li>
  <li><strong>청구 업무 간과.</strong> 청구 관련 AI 워크플로우는 개인정보 검토자를 종종 놀라게 합니다 — 청구 기록에도 PHI가 포함됩니다. 초기 정책에 청구를 포함하십시오.</li>
</ul>

<h2>Getting started</h2>
<h2>시작하기</h2>

<p>Bring one real radiology study, one discharge summary template, and the hospital's privacy policy. LLM Capsule deploys on a sample workflow within 30 minutes; we generate an evaluation report against your privacy policy.</p>
<p>실제 영상 검사 1건, 퇴원 요약 템플릿 1건, 병원 개인정보 정책을 가져오십시오. LLM Capsule은 샘플 워크플로우에서 30분 내에 배포되며, 병원 개인정보 정책에 대한 평가 보고서를 생성해 드립니다.</p>

<p><a href="/request-a-demo" class="la-btn la-btn--primary">Request a hospital AI demo</a></p>
<p><a href="/request-a-demo" class="la-btn la-btn--primary">병원 AI 데모 요청</a></p>

<h2>Related</h2>
<h2>관련 콘텐츠</h2>

<ul>
  <li><a href="/learn/differential-privacy-for-enterprise-llm">Differential privacy for enterprise LLM</a></li>
  <li><a href="/learn/differential-privacy-for-enterprise-llm">기업 LLM을 위한 차등 프라이버시</a></li>
  <li><a href="/learn/on-prem-llm-execution-path">On-premise LLM execution path</a></li>
  <li><a href="/learn/on-prem-llm-execution-path">온프레미스 LLM 실행 경로</a></li>
  <li><a href="/glossary/operational-data">Glossary: Operational data</a></li>
  <li><a href="/glossary/operational-data">용어집: 운영 데이터</a></li>
  <li><a href="/solutions">Solutions: Healthcare industry</a></li>
  <li><a href="/solutions">솔루션: 의료 산업</a></li>
</ul>

## Section 04: Related Links

Continue reading
계속 읽기

Differential privacy for enterprise LLM
기업 LLM을 위한 차등 프라이버시

On-premise LLM execution path
온프레미스 LLM 실행 경로

Glossary: Operational data
용어집: 운영 데이터

Solutions: Healthcare industry
솔루션: 의료 산업

## Section 05: CTA

Hospital AI without PHI leaving the network.
PHI가 네트워크 밖으로 나가지 않는 병원 AI.

30-minute review. Bring one radiology workflow or discharge summary template — we'll show how Capsule deploys on your EHR.
30분 검토. 영상의학 워크플로우 또는 퇴원 요약 템플릿 1건을 가져오시면 — Capsule이 병원 EHR에 어떻게 배포되는지 직접 보여드립니다.

Request a hospital AI demo
병원 AI 데모 요청
