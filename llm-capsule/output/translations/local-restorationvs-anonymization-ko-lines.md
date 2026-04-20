# Local Restoration vs Anonymization — 한국어 번역

## Section 01: Hero

Local Restoration vs Anonymization
로컬 복원 vs 익명화

Compare local restoration (restoration) with anonymization for enterprise AI. Anonymization is permanent; local restoration restores real enterprise data in AI outputs automatically.
엔터프라이즈 AI를 위한 로컬 복원과 익명화를 비교합니다. 익명화는 영구적이고, 로컬 복원은 AI 결과물에서 실제 기업 데이터를 자동으로 복원합니다.

## Section 02: Overview

Anonymization and local restoration represent opposite approaches to data protection in AI workflows. Anonymization permanently removes identifying information. Local restoration temporarily protects data and restores it after AI processing — producing enterprise-ready outputs with real data.
익명화와 로컬 복원은 AI 워크플로우에서 데이터 보호에 대한 정반대의 접근 방식입니다. 익명화는 식별 정보를 영구적으로 제거합니다. 로컬 복원은 데이터를 일시적으로 보호하고 AI 처리 후 복원하여 — 실제 데이터가 포함된 기업용 결과물을 생성합니다.

## Section 03: How Anonymization Works

Anonymization techniques — k-anonymity, differential privacy, generalization, suppression — transform data so that individual records cannot be re-identified. The transformation is designed to be irreversible. Anonymized data is considered non-personal under most regulatory frameworks.
익명화 기법 — k-익명성, 차분 프라이버시, 일반화, 억제 — 은 개별 레코드를 재식별할 수 없도록 데이터를 변환합니다. 변환은 비가역적으로 설계됩니다. 대부분의 규제 체계에서 익명화된 데이터는 비개인 정보로 간주됩니다.

## Section 04: Limitations

Irreversibility. Anonymization is permanent by design. Once data is anonymized, there is no automated path to recover original values. AI outputs based on anonymized data remain anonymous — they cannot reference real individuals, real accounts, or real events.
비가역성. 익명화는 설계상 영구적입니다. 데이터가 익명화되면 원래 값을 복구하는 자동화된 경로가 없습니다. 익명화된 데이터 기반 AI 결과물은 익명 상태로 유지되며 — 실제 개인, 실제 계정, 실제 이벤트를 참조할 수 없습니다.

Information loss. Generalization replaces specific values with ranges, suppression removes values entirely. Both reduce the information content AI models can work with.
정보 손실. 일반화는 특정 값을 범위로 대체하고, 억제는 값을 완전히 제거합니다. 둘 다 AI 모델이 활용할 수 있는 정보 내용을 감소시킵니다.

Not designed for document intelligence. Anonymization techniques were developed for structured databases, not unstructured enterprise documents. Applying anonymization to contracts, reports, and correspondence produces severely degraded content.
문서 인텔리전스용으로 설계되지 않음. 익명화 기법은 비정형 기업 문서가 아닌 정형 데이터베이스용으로 개발되었습니다. 계약서, 보고서, 서신에 익명화를 적용하면 심각하게 저하된 콘텐츠가 생성됩니다.

## Section 05: How Local Restoration Differs

Local restoration (restoration) is the process of restoring AI outputs to their full enterprise context using locally stored mappings. Data is encapsulated (not anonymized) before AI processing — sensitive values are replaced with reversible, structure-preserving representations. After AI processing, the original values are restored automatically.
로컬 복원은 로컬에 저장된 매핑을 사용하여 AI 결과물을 완전한 엔터프라이즈 맥락으로 복원하는 프로세스입니다. AI 처리 전에 데이터는 (익명화가 아닌) 캡슐화됩니다 — 민감한 값이 가역적이고 구조를 보존하는 표현으로 대체됩니다. AI 처리 후 원래 값이 자동으로 복원됩니다.

AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
AI 결과물은 로컬에서 복원됩니다. LLM Capsule은 민감 데이터를 보호하고 사용 가능한 결과물을 유지하면서 엔터프라이즈 AI 도입을 가능하게 합니다.

## Section 06: Comparison Table

Reversibility
가역성

Irreversible
비가역적

Fully reversible
완전히 가역적

Output usability
결과물 사용성

Anonymous, non-actionable
익명, 실행 불가

Enterprise-ready, actionable
기업용, 실행 가능

Information loss
정보 손실

Significant
심각함

None (structure preserved)
없음 (구조 보존)

Document support
문서 지원

Structured data only
정형 데이터만

All document types
모든 문서 유형

Post-processing required
후처리 필요

Extensive manual work
대규모 수동 작업

Automatic restoration
자동 복원

Enterprise workflow fit
엔터프라이즈 워크플로우 적합성

Analytics / research only
분석/연구만

Full production workflows
전체 프로덕션 워크플로우

## Section 07: Enterprise Workflow Example

Patient Discharge Summaries
환자 퇴원 요약

A hospital needs AI to generate discharge summaries from patient records. Anonymized records remove patient identifiers — but discharge summaries must reference real patient names, medications, and attending physicians to be clinically useful.
병원이 환자 기록에서 퇴원 요약을 생성하기 위해 AI가 필요합니다. 익명화된 기록은 환자 식별자를 제거하지만 — 퇴원 요약은 임상적으로 유용하려면 실제 환자명, 약물, 담당 의사를 참조해야 합니다.

LLM Capsule encapsulates patient records, AI generates structured summaries, and local restoration restores all patient identifiers into the discharge documents. The summaries are clinically ready without any manual re-identification.
LLM Capsule이 환자 기록을 캡슐화하고, AI가 구조화된 요약을 생성하며, 로컬 복원이 모든 환자 식별자를 퇴원 문서에 복원합니다. 요약은 수동 재식별 없이 임상적으로 바로 사용 가능합니다.

## Section 08: FAQ

What is the difference between anonymization and restoration?
익명화와 복원의 차이점은 무엇입니까?

Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.
익명화는 식별 데이터를 영구적으로 제거합니다. 로컬 복원은 가역적 캡슐화를 통해 데이터를 일시적으로 보호하고 AI 결과물에서 원래 값을 자동으로 복원합니다.

When should I use anonymization vs local restoration?
익명화와 로컬 복원 중 언제 어떤 것을 사용해야 합니까?

Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.
개인 신원이 필요 없는 연구 데이터셋과 분석에는 익명화를 사용합니다. 결과물이 실제 기업 데이터를 참조해야 하는 프로덕션 AI 워크플로우에는 로컬 복원(LLM Capsule)을 사용합니다.

## Section 09: CTA

See how LLM Capsule works with your data
LLM Capsule이 귀하의 데이터와 어떻게 작동하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연해 드립니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
