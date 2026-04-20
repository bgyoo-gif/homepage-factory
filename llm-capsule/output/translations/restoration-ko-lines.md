# Restoration — 한국어 번역

## Section 01: Hero

Restoration
복원

Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of LLM Capsule.
AI 처리 후 로컬에 저장된 매핑을 사용하여 AI 결과물을 원본 엔터프라이즈 맥락으로 복원합니다. LLM Capsule의 핵심 기능입니다.

## Section 02: Definition

Restoration (also known as local restoration) is the process of restoring AI-generated outputs to their original enterprise context. After AI processes encapsulated data, the locally stored mapping between original and protected values is applied to the AI output, replacing encapsulated representations with real enterprise data. AI results are restored locally through this automated process.
복원(로컬 복원이라고도 함)은 AI가 생성한 결과물을 원본 엔터프라이즈 맥락으로 복원하는 프로세스입니다. AI가 캡슐화된 데이터를 처리한 후, 원본과 보호된 값 간의 로컬 저장 매핑이 AI 결과물에 적용되어 캡슐화된 표현이 실제 기업 데이터로 대체됩니다. AI 결과물은 이 자동화된 프로세스를 통해 로컬에서 복원됩니다.

## Section 03: Explanation

When LLM Capsule encapsulates a document, it creates a local mapping table. The table records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment.
LLM Capsule이 문서를 캡슐화할 때 로컬 매핑 테이블을 생성합니다. 테이블은 각 원본 민감 값과 대체 값 간의 관계를 기록합니다. 이 매핑은 절대 기업 환경을 벗어나지 않습니다.

After AI processing completes, the restoration engine applies this mapping in reverse. Encapsulated tokens are replaced with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use.
AI 처리가 완료된 후, 복원 엔진이 이 매핑을 역으로 적용합니다. 캡슐화된 토큰이 원본 값으로 대체됩니다. 결과물은 실제 이름, 실제 수치, 실제 참조가 포함된 기업용 AI 결과물입니다.

Restoration is deterministic. Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required.
복원은 결정론적입니다. 모든 캡슐화된 값은 정확히 하나의 원본 값에 매핑됩니다. 모호함, 근사치, 수동 개입이 필요 없습니다.

## Section 04: Example

The agreement between ENTITY_A and ENTITY_B provides for a payment of AMOUNT_1 due on DATE_1.
ENTITY_A와 ENTITY_B 간의 계약은 DATE_1에 만기인 AMOUNT_1의 지급을 규정합니다.

The agreement between Acme Corp and GlobalTech provides for a payment of $2.4M due on March 15, 2026.
Acme Corp과 GlobalTech 간의 계약은 2026년 3월 15일에 만기인 240만 달러의 지급을 규정합니다.

## Section 05: CTA

See LLM Capsule Restoration in Action
LLM Capsule 복원 실제 적용 확인하기

Experience how enterprise AI outputs are restored to their original context with real data.
기업 AI 결과물이 실제 데이터로 원본 맥락에 복원되는 과정을 직접 확인하세요.

Request a Demo
데모 요청

View Product
제품 보기

Enterprise AI Enablement by CUBIG
Enterprise AI Enablement by CUBIG
