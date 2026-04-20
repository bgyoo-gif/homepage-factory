# Structure-Preserving Document Processing — 한국어 번역

## Section 01: Hero

Structure-Preserving Document Processing
문서 구조 보존 처리

Why maintaining document structure during data protection is critical for accurate AI outputs in enterprise workflows.
데이터 보호 중 문서 구조를 유지하는 것이 기업 워크플로우에서 정확한 AI 출력물을 위해 왜 중요한지 설명합니다.

## Section 02: Problem

Enterprise documents are not flat text. They contain tables, nested sections, cross-references, entity relationships, and formatting that carries semantic meaning. When flat masking tools process these documents, they treat every sensitive value identically — replacing it with a generic token regardless of its structural role.
기업 문서는 단순 텍스트가 아닙니다. 테이블, 중첩 섹션, 상호 참조, 엔터티 관계, 의미를 전달하는 서식을 포함합니다. 플랫 마스킹 도구가 이 문서를 처리할 때 모든 민감 값을 동일하게 취급하여 구조적 역할에 관계없이 일반 토큰으로 대체합니다.

A customer name in a table header serves a different function than the same name in a paragraph. A date in a contract preamble has different significance than a date in a payment schedule. Flat masking collapses these distinctions, degrading AI output quality.
테이블 헤더의 고객 이름은 단락의 같은 이름과 다른 기능을 합니다. 계약서 전문의 날짜는 결제 일정의 날짜와 다른 의미를 가집니다. 플랫 마스킹은 이러한 구분을 무너뜨려 AI 출력 품질을 저하시킵니다.

## Section 03: Definition

DEFINITION — Structure-Preserving Processing
정의 — 문서 구조 보존 처리

Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining the document's layout, entity relationships, table structures, and semantic context. It ensures AI models receive structurally intact documents that support accurate summarization, extraction, and analysis.
문서 구조 보존 처리는 문서의 레이아웃, 엔터티 관계, 테이블 구조, 의미적 컨텍스트를 유지하면서 민감 요소를 대체하는 데이터 보호 방법입니다. AI 모델이 정확한 요약, 추출, 분석을 지원하는 구조적으로 온전한 문서를 받도록 보장합니다.

## Section 04: Explanation

Structure-preserving processing operates at multiple document layers:
문서 구조 보존 처리는 여러 문서 레이어에서 작동합니다.

Layout preservation. Table structures, column headers, row relationships, and nested sections are maintained. AI models can accurately extract tabular data because the schema remains intact.
레이아웃 보존. 테이블 구조, 열 헤더, 행 관계, 중첩 섹션이 유지됩니다. 스키마가 온전하게 유지되기 때문에 AI 모델이 테이블 데이터를 정확하게 추출할 수 있습니다.

Entity consistency. When the same entity appears multiple times in a document, all instances are mapped to the same replacement. AI models can track entity references across sections — "the Borrower" in clause 1 refers to the same encapsulated entity in clause 7.
엔터티 일관성. 동일한 엔터티가 문서에서 여러 번 나타날 때 모든 인스턴스가 동일한 대체값에 매핑됩니다. AI 모델이 섹션 간 엔터티 참조를 추적할 수 있습니다 — 1조의 "차입인"은 7조의 동일한 캡슐화 엔터티를 참조합니다.

Semantic context. Context-aware data control distinguishes between sensitive data that must be protected and contextual information that AI needs for comprehension. Job titles, section headers, and document type indicators remain readable.
의미적 컨텍스트. 컨텍스트 인식 데이터 제어가 보호해야 할 민감 데이터와 AI가 이해에 필요한 맥락 정보를 구분합니다. 직함, 섹션 헤더, 문서 유형 표시자는 읽을 수 있게 유지됩니다.

Cross-document consistency. When processing document sets — such as a contract and its amendments — entity mappings remain consistent across files, enabling AI to perform accurate cross-document analysis.
문서 간 일관성. 계약서와 그 수정본 같은 문서 세트를 처리할 때 엔터티 매핑이 파일 간에 일관되게 유지되어 AI가 정확한 문서 간 분석을 수행할 수 있습니다.

## Section 05: Enterprise Example

Financial Statement Analysis
재무제표 분석

An audit firm needs AI to compare quarterly financial statements across 15 portfolio companies. Each statement contains tabular data with company names, executive names, account numbers, and financial figures.
감사법인이 15개 포트폴리오 기업의 분기별 재무제표를 AI로 비교해야 합니다. 각 재무제표에는 회사명, 임원 이름, 계좌번호, 재무 수치가 포함된 테이블 데이터가 있습니다.

Structure-preserving processing maintains all table structures and entity relationships. AI performs comparative analysis across the protected statements. Local restoration restores the real company data, producing analyst-ready comparison reports.
문서 구조 보존 처리가 모든 테이블 구조와 엔터티 관계를 유지합니다. AI가 보호된 재무제표에 대해 비교 분석을 수행합니다. 로컬 복원이 실제 회사 데이터를 복원하여 분석가가 바로 사용할 수 있는 비교 보고서를 생성합니다.

## Section 06: FAQ

What is structure-preserving processing?
문서 구조 보존 처리란 무엇입니까?

Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining document layout, entity relationships, table structures, and semantic context so AI models can process the document accurately.
문서 구조 보존 처리는 AI 모델이 문서를 정확하게 처리할 수 있도록 문서 레이아웃, 엔터티 관계, 테이블 구조, 의미적 컨텍스트를 유지하면서 민감 요소를 대체하는 데이터 보호 방법입니다.

How does it differ from flat masking?
플랫 마스킹과 어떻게 다릅니까?

Flat masking treats every sensitive value identically, replacing it with a generic token regardless of context. Structure-preserving processing maintains semantic relationships, entity consistency, and document layout during protection.
플랫 마스킹은 컨텍스트에 관계없이 모든 민감 값을 동일하게 취급하여 일반 토큰으로 대체합니다. 문서 구조 보존 처리는 보호 과정에서 의미적 관계, 엔터티 일관성, 문서 레이아웃을 유지합니다.

## Section 07: Related

Product Overview
제품 개요

Architecture
아키텍처

Trust & Compliance
신뢰 및 컴플라이언스

Request a Demo
데모 요청

Structure-Preserving vs Flat Masking
문서 구조 보존 vs 플랫 마스킹

## Section 08: CTA Band

See how LLM Capsule works with your data
LLM Capsule이 귀사의 데이터와 어떻게 동작하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연합니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
