# LLM Capsule vs Prompt Security Gateways — 한국어 번역

## Section 01: Hero

LLM Capsule vs Prompt Security Gateways
LLM Capsule vs 프롬프트 보안 게이트웨이

Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule enables AI adoption at the data layer with structure-preserving encapsulation.
LLM Capsule과 프롬프트 보안 게이트웨이를 비교합니다. 게이트웨이는 API 레이어에서 필터링하고, LLM Capsule은 문서 구조 보존 캡슐화로 데이터 레이어에서 AI 도입을 가능하게 합니다.

## Section 02: Overview

Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. LLM Capsule operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.
프롬프트 보안 게이트웨이는 사용자와 AI 모델 사이에 위치하여 프롬프트에서 민감한 콘텐츠를 스캔하고 플래그된 패턴이 포함된 요청을 필터링하거나 차단합니다. API 상호작용 레이어에서 작동합니다. LLM Capsule은 AI 지원 데이터 레이어로서 — 데이터가 AI 워크플로우에 진입하기 전에 데이터 자체를 변환하여 차단이 아닌 AI 도입을 가능하게 합니다.

## Section 03: How Gateways Work

How Prompt Security Gateways Work
프롬프트 보안 게이트웨이의 작동 방식

Prompt gateways intercept API calls to LLM providers. They scan the prompt text for PII patterns, blocked topics, or compliance violations. If sensitive content is detected, the gateway either blocks the request, strips the flagged content, or alerts an administrator. Some gateways also scan AI responses for data leakage.
프롬프트 게이트웨이는 LLM 제공업체로의 API 호출을 가로챕니다. 프롬프트 텍스트에서 PII 패턴, 차단된 주제, 규제 위반을 스캔합니다. 민감한 콘텐츠가 감지되면 게이트웨이가 요청을 차단하거나 플래그된 콘텐츠를 제거하거나 관리자에게 알립니다. 일부 게이트웨이는 데이터 유출을 위해 AI 응답도 스캔합니다.

## Section 04: Limitations

Prompt-only scope. Gateways only see the final prompt, not the underlying data pipeline. Documents processed through RAG systems or batch pipelines may bypass the gateway entirely.
프롬프트 한정 범위. 게이트웨이는 최종 프롬프트만 확인하며 기반 데이터 파이프라인은 보지 못합니다. RAG 시스템이나 배치 파이프라인을 통해 처리된 문서는 게이트웨이를 완전히 우회할 수 있습니다.

Block or pass binary. Most gateways make a binary decision — block the request or pass it through. There is no mechanism to transform data while preserving usability.
차단 또는 통과 이진 결정. 대부분의 게이트웨이는 이진 결정을 합니다 — 요청을 차단하거나 통과시킵니다. 사용성을 유지하면서 데이터를 변환하는 메커니즘이 없습니다.

No output restoration. If a gateway strips sensitive content from a prompt, the AI output will lack that context. There is no restoration mechanism.
결과물 복원 없음. 게이트웨이가 프롬프트에서 민감한 콘텐츠를 제거하면 AI 결과물에 해당 맥락이 누락됩니다. 복원 메커니즘이 없습니다.

Pattern-based detection. Gateways rely on pattern matching which misses context-dependent sensitivity and generates false positives on non-sensitive content that matches PII patterns.
패턴 기반 탐지. 게이트웨이는 패턴 매칭에 의존하여 맥락 의존적 민감성을 놓치고 PII 패턴과 일치하는 비민감 콘텐츠에서 오탐을 생성합니다.

## Section 05: How LLM Capsule Differs

How LLM Capsule Differs
LLM Capsule의 차별점

LLM Capsule operates upstream of the prompt. It encapsulates sensitive data at the document level before any AI processing occurs. The encapsulation is structure-preserving — AI receives complete, processable documents. After AI generates outputs, local restoration (restoration) restores enterprise context automatically.
LLM Capsule은 프롬프트 상위에서 작동합니다. AI 처리가 발생하기 전에 문서 수준에서 민감 데이터를 캡슐화합니다. 캡슐화는 구조를 보존하여 — AI가 완전하고 처리 가능한 문서를 수신합니다. AI가 결과물을 생성한 후, 로컬 복원이 엔터프라이즈 맥락을 자동으로 복원합니다.

AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
AI 결과물은 로컬에서 복원됩니다. LLM Capsule은 민감 데이터를 보호하고 사용 가능한 결과물을 유지하면서 엔터프라이즈 AI 도입을 가능하게 합니다.

## Section 06: Comparison

Comparison
비교

## Section 07: Enterprise Workflow Example

Enterprise Workflow Example
엔터프라이즈 워크플로우 예시

RAG-Based Knowledge System
RAG 기반 지식 시스템

An enterprise deploys a RAG system that retrieves internal documents to augment AI responses. A prompt gateway can only scan the final composed prompt — it cannot protect the 50 retrieved document chunks that feed into it.
기업이 AI 응답을 강화하기 위해 내부 문서를 검색하는 RAG 시스템을 배포합니다. 프롬프트 게이트웨이는 최종 구성된 프롬프트만 스캔할 수 있으며 — 이에 입력되는 50개의 검색된 문서 청크를 보호할 수 없습니다.

LLM Capsule encapsulates all documents at the data layer before they enter the RAG index. Every retrieval, every prompt composition, and every AI output operates on protected data. Restoration restores enterprise context in the final response.
LLM Capsule은 문서가 RAG 인덱스에 진입하기 전에 데이터 레이어에서 모든 문서를 캡슐화합니다. 모든 검색, 모든 프롬프트 구성, 모든 AI 결과물이 보호된 데이터에서 작동합니다. 복원이 최종 응답에서 엔터프라이즈 맥락을 복원합니다.

## Section 08: FAQ

How does LLM Capsule differ from prompt gateways?
LLM Capsule은 프롬프트 게이트웨이와 어떻게 다릅니까?

Prompt gateways filter at the API level and can only block or pass requests. LLM Capsule transforms data at the source, preserving structure for AI processing and enabling output restoration.
프롬프트 게이트웨이는 API 레벨에서 필터링하며 요청을 차단하거나 통과시킬 수만 있습니다. LLM Capsule은 소스에서 데이터를 변환하여 AI 처리를 위한 구조를 보존하고 결과물 복원을 가능하게 합니다.

Can I use both a gateway and LLM Capsule?
게이트웨이와 LLM Capsule을 함께 사용할 수 있습니까?

Yes. LLM Capsule provides data-layer protection while gateways provide an additional API-level monitoring layer. The two approaches are complementary.
예. LLM Capsule은 데이터 레이어 보호를 제공하고 게이트웨이는 추가적인 API 레벨 모니터링 레이어를 제공합니다. 두 접근 방식은 상호 보완적입니다.

## Section 09: Related Pages

Product Overview
제품 개요

Architecture
아키텍처

Trust & Compliance
신뢰 및 컴플라이언스

Request a Demo
데모 요청

Learn Hub
학습 허브

## Section 10: CTA Band

See how LLM Capsule works with your data
LLM Capsule이 귀하의 데이터와 어떻게 작동하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연해 드립니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
