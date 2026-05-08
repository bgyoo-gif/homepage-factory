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

<h2>정의</h2>

<p><strong>복원용 상태 저장소</strong>는 원본 운영 식별자와 캡슐 토큰 간의 토큰 맵을 보관하는 로컬 전용 저장소입니다. AI 출력을 원본 식별자가 담긴 상태로 원래 워크플로우에 복원합니다 — <em>기업 내부에서</em>, 외부 LLM이 원본을 절대 보지 않은 채로.</p>

<h2>저장 내용</h2>

<ul>
<li>토큰 맵: 캡슐 토큰 ↔ 원본 운영 식별자</li>
<li>워크플로우 컨텍스트: 어떤 캡슐이 어떤 인시던트·티켓·런북에 속하는지</li>
<li>정책 참조: 이 캡슐에 적용된 마커 정책</li>
<li>프라이버시 예산 참조: 이 캡슐이 워크플로우 DP 예산에서 소비한 양</li>
</ul>

<h2>저장 위치</h2>

<p>항상 로컬입니다. 토큰 맵은 외부 경계를 절대 벗어나지 않습니다. Path A(외부 승인 LLM)에서는 LLM이 캡슐 토큰만 보고, 응답이 반환된 후 복원용 상태 저장소가 원본으로 복원합니다. Path B(온프레미스 로컬 경량 모델)에서는 전 과정이 로컬에서 완결됩니다.</p>

<h2>왜 중요한가</h2>

<p>복원 없이는 AI 출력이 토큰 덩어리로 남습니다. 운영 팀은 원래 워크플로우에서 바로 쓸 수 있는 결과물이 필요합니다 — 실제 장치 ID가 담긴 티켓 업데이트, 실제 사이트를 참조하는 런북 단계, 실제 인시던트 레퍼런스를 가리키는 RCA. 복원용 상태 저장소가 이를 가능하게 합니다 — 원본은 모델에서 절대 벗어나지 않은 채로.</p>

<h2>복원용 상태 저장소의 출력물</h2>

<ul>
<li>티켓 시스템에 삽입되는 복원된 RCA</li>
<li>런북에 삽입되는 복원된 런북 단계</li>
<li>EHR 또는 병원 포털에 삽입되는 복원된 요약</li>
<li>커맨드 시스템에 삽입되는 복원된 미션 요약 (Path B 전용)</li>
<li>검토 워크플로우에 삽입되는 복원된 컴플라이언스 검토 초안</li>
</ul>

<h2>감사 추적</h2>

<p>모든 복원은 기록됩니다. 감사 이력에는 캡슐, 적용된 정책, 사용된 경로, 토큰 맵 작업, 복원된 출력의 목적지가 남습니다. 컴플라이언스 팀은 복원된 모든 필드를 해당 캡슐과 정책까지 역추적할 수 있습니다.</p>

<h2>참조 문장</h2>

<blockquote>캡슐은 AI가 보는 것입니다. 복원용 상태 저장소는 비즈니스가 보는 것입니다. 그 경계가 바로 운영상의 보장입니다.</blockquote>

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
