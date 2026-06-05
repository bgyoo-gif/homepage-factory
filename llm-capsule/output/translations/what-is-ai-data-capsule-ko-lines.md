# What Is an AI Data Capsule — 한국어 번역

## PageMeta: SEO

What Is an AI Data Capsule? — Enterprise Data Encapsulation for Secure LLM Usage | LLM Capsule
AI 데이터 캡슐이란? — 안전한 LLM 사용을 위한 엔터프라이즈 데이터 캡슐화 | LLM Capsule

An AI data capsule encapsulates sensitive data before AI processing and restores it after. Learn how encapsulation differs from masking.
AI 데이터 캡슐은 AI 처리 전에 민감 데이터를 캡슐화하고, 처리 후 복원합니다. 캡슐화가 마스킹과 어떻게 다른지 알아보세요.

## Section 01: Hero

What Is an AI Data Capsule?
AI 데이터 캡슐이란?

Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.
안전한 LLM 사용을 위한 엔터프라이즈 데이터 캡슐화 — AI 처리 전 민감 데이터를 보호하고, 처리 후 사용 가능한 출력물로 복원하는 방법입니다.

## Section 02: Screenshot

Data Capsule Concept — Original document vs. encapsulated version with structure preserved
데이터 캡슐 개념 — 원본 문서 vs. 구조가 보존된 캡슐화 버전

## Section 03: Problem

Problem
문제

Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.
기업은 요약·추출·번역·분석을 위해 민감 문서를 대규모 언어 모델로 처리해야 합니다. 원시 데이터를 외부 AI 서비스에 전송하면 허용할 수 없는 데이터 노출이 발생합니다. 기존 방식 — 마스킹, 삭제, 토큰화 — 은 AI 모델이 유용한 출력물을 생성하는 데 필요한 컨텍스트를 파괴합니다.

The result is a binary choice: expose data to use AI, or protect data and get unusable results.
결과는 이분법적 선택입니다. AI를 쓰려면 데이터를 노출하거나, 데이터를 보호하고 사용 불가능한 결과를 감수하거나.

## Section 04: Definition

Definition
정의

AI Data Capsule
AI 데이터 캡슐

An AI data capsule is a locally generated context-preserving data layer for AI that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.
AI 데이터 캡슐은 외부 AI 서비스에 전송되기 전에 민감한 엔터프라이즈 데이터를 감싸는 로컬 생성 데이터 레이어입니다. 캡슐은 민감 요소를 가역적 표현으로 대체하면서 문서 구조와 컨텍스트를 보존합니다. AI 처리 후 캡슐은 로컬 복원을 가능하게 하여 — 원본 데이터를 외부에 절대 노출하지 않고 AI 출력물을 전체 엔터프라이즈 컨텍스트로 복원합니다.

## Section 05: Explanation

Explanation
설명

An AI data capsule operates as a context-preserving data layer for AI through three stages within a restorable workflow:
AI 데이터 캡슐은 복원 가능한 워크플로우 내에서 세 단계를 거쳐 데이터 레이어로 작동합니다.

Local Encapsulation. Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.
로컬 캡슐화. 엔터프라이즈 문서의 민감 요소 — 이름, 계좌번호, 날짜, 의료 코드, 계약 조건 — 가 감지되어 문서 구조 보존 표현으로 대체됩니다. 원본과 대체 값 간의 매핑은 로컬에 저장되며 절대 전송되지 않습니다.

Protected AI Processing. The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.
보호된 AI 처리. 캡슐화된 문서는 모든 외부 LLM에 전송됩니다. 문서 구조가 보존되기 때문에 AI 모델은 요약·추출·분류·번역을 효과적으로 수행합니다. 원본 민감 데이터는 엔터프라이즈 환경을 절대 벗어나지 않습니다.

Local Restoration. AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.
로컬 복원. AI 결과는 원본 엔터프라이즈 데이터와 함께 로컬에서 자동으로 복원됩니다. 로컬에 저장된 매핑이 적용되어 실제 이름·금액·참조로 출력물을 재구성하며, 비즈니스 워크플로우에서 바로 사용 가능한 결과를 생성합니다.

Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.
핵심 개념: AI 결과는 원본 엔터프라이즈 데이터와 함께 로컬에서 자동으로 복원됩니다. AI 데이터 캡슐은 원본 데이터가 엔터프라이즈 환경을 절대 벗어나지 않도록 보장하여 기업 AI 도입을 가능하게 합니다.

## Section 06: Enterprise Example

Enterprise Example
엔터프라이즈 활용 사례

Financial Compliance Review
금융 컴플라이언스 심사

A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.
한 은행이 컴플라이언스 심사를 위해 AI로 500건의 대출 신청서를 요약해야 합니다. 각 문서에는 고객 이름, 주민등록번호, 계좌 잔액, 소득 데이터가 포함되어 있습니다.

the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.
은행은 모든 문서를 로컬에서 캡슐화합니다. AI는 보호된 버전을 처리하고 구조화된 요약을 생성합니다. 로컬 복원이 실제 고객 이름과 계좌 세부 정보를 요약에 그대로 복원하여, AI 제공업체에 원시 고객 데이터를 절대 노출하지 않고 컴플라이언스 준비 출력물을 생성합니다.

LLM Capsule
LLM Capsule

## Section 07: FAQ

FAQ
자주 묻는 질문

What is an AI data capsule?
AI 데이터 캡슐이란 무엇인가요?

An AI data capsule is a locally generated context-preserving data layer for AI that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.
AI 데이터 캡슐은 민감한 엔터프라이즈 데이터가 외부 AI 서비스에 전송되기 전에 캡슐화하는 로컬 생성 데이터 레이어입니다. AI 처리 후 캡슐은 로컬 복원을 가능하게 하여 출력물이 실제 엔터프라이즈 워크플로우에서 그대로 사용됩니다.

How does an AI data capsule differ from data masking?
AI 데이터 캡슐은 데이터 마스킹과 어떻게 다른가요?

Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.
데이터 마스킹은 민감 정보를 영구적으로 제거하여 AI 출력물을 엔터프라이즈 워크플로우에서 사용할 수 없게 만듭니다. AI 데이터 캡슐은 데이터 구조를 보존하고 복원을 가능하게 하여 AI 결과를 로컬에서 전체 엔터프라이즈 컨텍스트로 그대로 복원합니다.

Does the AI data capsule work with any LLM?
AI 데이터 캡슐은 모든 LLM과 호환되나요?

Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.
네. 캡슐이 전송 전 데이터 레이어에서 작동하기 때문에 ChatGPT, Claude, Gemini 또는 모든 LLM API를 포함한 외부 AI 서비스와 호환됩니다.

Where is the mapping data stored?
매핑 데이터는 어디에 저장되나요?

The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.
원본과 캡슐화된 값 간의 매핑은 전적으로 엔터프라이즈 환경 내에 저장됩니다. 외부 서비스에 절대 전송되지 않습니다.

## Section 08: Related

Related
관련 콘텐츠

Product Overview
제품 개요

Architecture
아키텍처

Trust & Compliance
신뢰 및 컴플라이언스

Request a Demo
데모 요청

Why Redaction Breaks AI
왜 삭제가 AI를 망치는가

## Section 09: CTA Band

See how LLM Capsule works with your data
LLM Capsule이 귀사 데이터와 어떻게 작동하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약, 평가 기준을 가져오세요. 실제 워크플로우에서 직접 시연합니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
