# architecture_4zone_technical-develop — 한국어 번역 (literal)

각 항목 = Framer Properties 패널의 Props 1개에 해당.
순서대로 입력하면 그대로 적용됨.

## Section header

eyebrow
Technical view · zone-based architecture
기술적 관점 · 존 기반 아키텍처

sectionTitle
The same architecture, in technical view
같은 아키텍처, 기술적 관점에서

sectionDescription
For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.
아키텍트와 보안 검토자를 위한 자료 — 운영 데이터, 캡슐화, 그리고 어떤 LLM이든 어떻게 상호작용하는지에 대한 존 기반 전체 뷰.

---

## Card 1 — Zone 1

card1Num
Zone 1 · Corporate Internal Network
Zone 1 · 기업 내부 네트워크

card1Title
Where the operational systems already live
운영 시스템이 이미 있는 곳

card1Description
Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
기존 엔터프라이즈 시스템 — ERP, CRM, 티켓팅, DMS / ECM, 레거시 DB, RAG 파이프라인 — 그대로 유지됩니다. 마이그레이션은 없습니다. Capsule은 소스에 따라 REST, gRPC, JDBC, 또는 Graph API를 통해 이들로부터 읽어옵니다.

---

## Card 2 — Zone 2

card2Num
Zone 2 · DMZ — Demilitarized Zone
Zone 2 · DMZ — 비무장지대

card2Title
Where encapsulation happens
캡슐화가 일어나는 곳

card2Description
The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
Enhanced Encapsulation Layer가 민감한 요소를 탐지하고, 문서 구조 보존·차등 프라이버시 기반 보호로 안전한 토큰으로 대체한 뒤, 캡슐을 라우팅 결정에 전달합니다. 원본 값은 로컬 토큰 맵에 보관된 채 남습니다.

---

## Card 3 — Zone 3

card3Num
Zone 3 · In-House Team
Zone 3 · 사내 팀

card3Title
Where governance and routing happen
거버넌스와 라우팅이 일어나는 곳

card3Description
Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
조직 정책, 권한, 도메인 컨텍스트가 캡슐을 어디에서 처리할지 결정합니다 — 승인된 외부 LLM(Path A) 또는 온프레미스 로컬 모델(Path B). 결정은 워크플로우별 정책 기반이며, 완전한 감사 이력은 조직 내부에 보관됩니다.

---

## Card 4 — Zone 4

card4Num
Zone 4 · Local — Auto Reconstruction
Zone 4 · 로컬 — 자동 복원

card4Title
Where the AI response becomes Business-Ready output
AI 응답이 비즈니스에 바로 쓰일 수 있는 출력이 되는 곳

card4Description
The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
AI 응답은 조직 내부에서만 토큰에서 원본 값으로 자동 복원됩니다. 신뢰 경계를 벗어난 데이터는 외부에서 복원될 수 없습니다. 복원된 출력은 원래의 워크플로우로 다시 전달됩니다.
