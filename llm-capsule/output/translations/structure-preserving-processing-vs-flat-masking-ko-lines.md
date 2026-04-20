# Structure-Preserving Processing vs Flat Masking — 한국어 번역

## Section 01: Hero

Structure-Preserving Processing vs Flat Masking
문서 구조 보존 처리 vs 평면 마스킹

Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.
엔터프라이즈 AI를 위한 문서 구조 보존 처리와 평면 마스킹을 비교합니다. 평면 마스킹은 문서 구조를 붕괴시키고, 구조 보존은 정확한 AI 결과물을 위해 무결성을 유지합니다.

## Section 02: Overview

Flat masking and structure-preserving processing both aim to protect sensitive data before AI processing. They differ fundamentally in how they handle document structure, entity relationships, and semantic context — and this difference determines whether AI outputs are usable.
평면 마스킹과 문서 구조 보존 처리 모두 AI 처리 전 민감 데이터 보호를 목표로 합니다. 문서 구조, 엔티티 관계, 의미적 맥락을 처리하는 방식에서 근본적으로 다르며 — 이 차이가 AI 결과물의 사용 가능 여부를 결정합니다.

## Section 03: How Flat Masking Works

Flat masking scans documents for sensitive patterns and replaces each match with a generic token. The replacement is uniform — every name becomes [NAME], every number becomes [NUMBER], every date becomes [DATE]. The masking engine treats each sensitive value independently, without considering its role in the document's structure.
평면 마스킹은 문서에서 민감한 패턴을 스캔하고 각 일치 항목을 일반 토큰으로 대체합니다. 대체는 균일합니다 — 모든 이름은 [NAME], 모든 숫자는 [NUMBER], 모든 날짜는 [DATE]가 됩니다. 마스킹 엔진은 문서 구조에서의 역할을 고려하지 않고 각 민감 값을 독립적으로 처리합니다.

## Section 04: Limitations

Entity collapse. In a multi-party contract, all party names become [NAME]. AI cannot distinguish acquirer from target, lender from borrower, plaintiff from defendant.
엔티티 붕괴. 다자간 계약에서 모든 당사자명이 [NAME]이 됩니다. AI는 인수자와 대상, 대출자와 차입자, 원고와 피고를 구별할 수 없습니다.

Table destruction. Column headers masked as [FIELD] and cell values masked as [VALUE] eliminate the schema information AI needs for accurate extraction.
테이블 파괴. [FIELD]로 마스킹된 열 헤더와 [VALUE]로 마스킹된 셀 값은 AI가 정확한 추출에 필요한 스키마 정보를 제거합니다.

Cross-reference breakage. When a document references entities across sections, flat masking breaks these connections by assigning different tokens to the same entity.
상호 참조 파괴. 문서가 섹션 간에 엔티티를 참조할 때, 평면 마스킹은 같은 엔티티에 다른 토큰을 할당하여 이러한 연결을 파괴합니다.

Inconsistent replacement. The same entity may receive different tokens in different document locations, breaking AI's ability to track entities across sections.
비일관적 대체. 같은 엔티티가 문서의 다른 위치에서 다른 토큰을 받을 수 있어, 섹션 간 엔티티를 추적하는 AI의 능력이 파괴됩니다.

## Section 05: How LLM Capsule Differs

Structure-preserving processing maintains document integrity during data protection. Entity consistency is enforced across the entire document. Table structures, cross-references, and semantic relationships are preserved. AI receives a structurally complete document that supports accurate processing.
문서 구조 보존 처리는 데이터 보호 중 문서 무결성을 유지합니다. 전체 문서에 걸쳐 엔티티 일관성이 적용됩니다. 테이블 구조, 상호 참조, 의미적 관계가 보존됩니다. AI는 정확한 처리를 지원하는 구조적으로 완전한 문서를 수신합니다.

AI results are automatically restored locally with original enterprise data. LLM Capsule's AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.
AI 결과물은 원본 기업 데이터로 로컬에서 자동 복원됩니다. LLM Capsule의 AI 지원 데이터 레이어는 정확한 결과물을 위해 AI가 필요로 하는 문서 구조를 보존하면서 민감 데이터를 보호합니다.

## Section 06: Enterprise Workflow Example

Multi-Party Financial Analysis
다자간 금융 분석

An investment bank analyzes term sheets involving three parties — lead investor, co-investor, and target company. Each term sheet contains overlapping entity names in different roles.
투자 은행이 세 당사자 — 주 투자자, 공동 투자자, 대상 기업 — 가 관련된 텀시트를 분석합니다. 각 텀시트에는 서로 다른 역할의 겹치는 엔티티명이 포함되어 있습니다.

Flat masking turns all three parties into [NAME], making it impossible for AI to attribute terms to the correct party. Structure-preserving processing assigns consistent, distinct representations to each party, enabling accurate extraction of party-specific terms. Restoration restores real party names in the analysis output.
평면 마스킹은 세 당사자 모두를 [NAME]으로 바꿔 AI가 올바른 당사자에게 조건을 귀속시킬 수 없게 합니다. 문서 구조 보존 처리는 각 당사자에게 일관되고 고유한 표현을 할당하여 당사자별 조건의 정확한 추출을 가능하게 합니다. 복원이 분석 결과물에서 실제 당사자명을 복원합니다.

## Section 07: FAQ

What is the main difference between flat masking and structure-preserving processing?
평면 마스킹과 문서 구조 보존 처리의 주요 차이점은 무엇입니까?

Flat masking treats every sensitive value independently, collapsing entity relationships and document structure. Structure-preserving processing maintains entity consistency, table schemas, and semantic relationships throughout the document.
평면 마스킹은 모든 민감 값을 독립적으로 처리하여 엔티티 관계와 문서 구조를 붕괴시킵니다. 문서 구조 보존 처리는 문서 전체에 걸쳐 엔티티 일관성, 테이블 스키마, 의미적 관계를 유지합니다.

## Section 08: CTA

See how LLM Capsule works with your data
LLM Capsule이 귀하의 데이터와 어떻게 작동하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연해 드립니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
