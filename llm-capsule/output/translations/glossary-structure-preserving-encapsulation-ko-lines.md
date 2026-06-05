# glossary/structure-preserving-encapsulation — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Structure-Preserving Encapsulation
문서 구조 보존 캡슐화

Tokenize the identifiers. Preserve the structure. So the AI can still reason — and the result can still be restored.
식별자를 토큰화합니다. 구조는 그대로 보존합니다. AI가 여전히 추론할 수 있도록 — 그리고 결과물은 반드시 복원됩니다.

GLOSSARY
GLOSSARY

## Section 02: Definition Block

Definition
정의

Structure-preserving encapsulation is the transformation step in a context-preserving data layer for AI that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.
문서 구조 보존 캡슐화는 데이터 레이어에서 운영 데이터를 AI가 바로 사용할 수 있는 컨텍스트로 변환하는 단계입니다. 운영 식별자(장치 ID, 사이트 ID, 자산 참조, 고객 세그먼트)를 토큰화하면서, LLM이 추론에 필요한 관계형 구조 — 테이블 레이아웃, 로그 순서, 문서 계층, 구성 트리, 토폴로지 그래프 — 를 그대로 보존합니다.

## Section 03: Article Body

<h2>정의</h2>

<p><strong>문서 구조 보존 캡슐화</strong>는 데이터 레이어에서 운영 데이터를 AI가 바로 사용할 수 있는 컨텍스트로 변환하는 단계입니다. 운영 식별자(장치 ID, 사이트 ID, 자산 참조, 고객 세그먼트)를 토큰화하면서, LLM이 추론에 필요한 관계형 구조 — 테이블 레이아웃, 로그 순서, 문서 계층, 구성 트리, 토폴로지 그래프 — 를 그대로 보존합니다.</p>

<h2>구조 보존이 중요한 이유</h2>

<p>알람 시퀀스를 토대로 RCA를 작성하도록 요청받은 LLM은 시퀀스가 파괴되면 추론할 수 없습니다. 두 구성 트리를 비교하도록 요청받은 LLM은 트리 관계가 평탄화되면 비교할 수 없습니다. 구조 보존이야말로 캡슐을 모델에게 단순히 <em>안전한</em> 것이 아니라 <em>유용한</em> 것으로 만드는 핵심입니다.</p>

<h2>토큰화 대상</h2>

<ul>
<li>운영 식별자: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF</li>
<li>고객 참조 및 세그먼트</li>
<li>복합 식별자가 포함된 자유 텍스트 필드 (NER 마스킹)</li>
<li>민감 속성 값 (DP 예산 범위 내)</li>
</ul>

<h2>보존 대상</h2>

<ul>
<li>이벤트의 시간 순서</li>
<li>인시던트 시퀀스 내 인과 관계</li>
<li>문서 구조 (섹션·목록·테이블)</li>
<li>구성 트리 (부모-자식 관계, 의존성)</li>
<li>토폴로지 그래프 (노드·엣지·경로)</li>
</ul>

<h2>함께 사용되는 기능</h2>

<ul>
<li><a href="/resources/glossary/differential-privacy">차등 프라이버시</a> — 캡슐의 추론 위험을 수치로 제한합니다</li>
<li><a href="/resources/glossary/state-vault-for-restoration">복원용 상태 저장소</a> — 기업 내부에서 토큰을 원본 값으로 복원합니다</li>
<li><a href="/resources/glossary/two-execution-paths">두 가지 실행 경로</a> — 워크플로우 정책에 따라 Path A 또는 Path B를 선택합니다</li>
</ul>

<h2>참조 문장</h2>

<blockquote>문서 구조 보존 캡슐화는 캡슐을 유용하게 만듭니다. 차등 프라이버시 기반 보호는 캡슐을 방어 가능하게 만듭니다. 복원용 상태 저장소는 캡슐을 복원 가능하게 만듭니다. 세 가지가 함께 데이터 레이어를 구성합니다.</blockquote>

## Section 04: Related Terms

Related terms
관련 용어

Differential privacy
차등 프라이버시

State vault for restoration
복원용 상태 저장소

Two execution paths
두 가지 실행 경로

context-preserving data layer for AI
데이터 레이어
