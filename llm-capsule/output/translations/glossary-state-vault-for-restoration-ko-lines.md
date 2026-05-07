# glossary/state-vault-for-restoration — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

State Vault for Restoration
복원용 상태 저장소

The local-only store that turns AI output back into business-ready output.
AI 출력을 업무에 바로 쓸 수 있는 결과물로 되돌리는 로컬 전용 저장소입니다.

GLOSSARY
GLOSSARY

## Section 02: Definition Block

Definition
정의

The state vault is the local-only store that holds the token map between original operational identifiers and capsule tokens. It enables AI outputs to be restored back into the originating workflow with original identifiers — inside the enterprise — without the external LLM ever seeing the originals.
복원용 상태 저장소는 원본 운영 식별자와 캡슐 토큰 간의 토큰 맵을 보관하는 로컬 전용 저장소입니다. AI 출력을 원본 식별자가 담긴 상태로 원래 워크플로우에 복원합니다 — 기업 내부에서, 외부 LLM이 원본을 절대 보지 않은 채로.

## Section 03: Article Body

What it stores
저장 내용

Token map: capsule tokens ↔ original operational identifiers
토큰 맵: 캡슐 토큰 ↔ 원본 운영 식별자

Workflow context: which capsule belongs to which incident, ticket, or runbook
워크플로우 컨텍스트: 어떤 캡슐이 어떤 인시던트·티켓·런북에 속하는지

Policy reference: which marker policy applied to this capsule
정책 참조: 이 캡슐에 적용된 마커 정책

Privacy budget reference: how much of the workflow's DP budget this capsule consumed
프라이버시 예산 참조: 이 캡슐이 워크플로우 DP 예산에서 소비한 양

Where it lives
저장 위치

Always local. The token map never traverses the external boundary. In Path A (external approved LLM), the LLM sees only capsule tokens; the state vault rehydrates after the response returns. In Path B (on-prem local lightweight model), everything is local end to end.
항상 로컬입니다. 토큰 맵은 외부 경계를 절대 벗어나지 않습니다. Path A(외부 승인 LLM)에서는 LLM이 캡슐 토큰만 보고, 응답이 반환된 후 복원용 상태 저장소가 원본으로 복원합니다. Path B(온프레미스 로컬 경량 모델)에서는 전 과정이 로컬에서 완결됩니다.

Why it matters
왜 중요한가

Without restoration, AI outputs are stuck as token salad. The operations team needs the result as a usable artifact in the originating workflow — a ticket update with real device IDs, a runbook step referencing the actual site, an RCA pointing to the actual incident reference. The state vault is what makes that possible while keeping the originals out of the model.
복원 없이는 AI 출력이 토큰 덩어리로 남습니다. 운영 팀은 원래 워크플로우에서 바로 쓸 수 있는 결과물이 필요합니다 — 실제 장치 ID가 담긴 티켓 업데이트, 실제 사이트를 참조하는 런북 단계, 실제 인시던트 레퍼런스를 가리키는 RCA. 복원용 상태 저장소가 이를 가능하게 합니다 — 원본은 모델에서 절대 벗어나지 않은 채로.

Outputs the state vault produces
복원용 상태 저장소의 출력물

Restored RCA inserted into the ticket system
티켓 시스템에 삽입되는 복원된 RCA

Restored runbook step inserted into the runbook
런북에 삽입되는 복원된 런북 단계

Restored summary inserted into the EHR or hospital portal
EHR 또는 병원 포털에 삽입되는 복원된 요약

Restored mission summary inserted into the command system (Path B only)
커맨드 시스템에 삽입되는 복원된 미션 요약 (Path B 전용)

Restored compliance review draft inserted into the review workflow
검토 워크플로우에 삽입되는 복원된 컴플라이언스 검토 초안

Auditability
감사 추적

Every restoration is logged. The audit trail records the capsule, the policy applied, the path used, the token map operations, and the destination of the restored output. Compliance teams can trace any restored field back to its capsule and policy.
모든 복원은 기록됩니다. 감사 이력에는 캡슐, 적용된 정책, 사용된 경로, 토큰 맵 작업, 복원된 출력의 목적지가 남습니다. 컴플라이언스 팀은 복원된 모든 필드를 해당 캡슐과 정책까지 역추적할 수 있습니다.

Reference statement
참조 문장

The capsule is what the AI sees. The state vault is what the business sees. The boundary between them is the operational guarantee.
캡슐은 AI가 보는 것입니다. 복원용 상태 저장소는 비즈니스가 보는 것입니다. 그 경계가 바로 운영상의 보장입니다.

## Section 04: Related Terms

Related terms
관련 용어

AI enablement data layer
데이터 레이어

Structure-preserving encapsulation
문서 구조 보존 캡슐화

Capsule token
캡슐 토큰

Two execution paths
두 가지 실행 경로

Differential privacy
차등 프라이버시
