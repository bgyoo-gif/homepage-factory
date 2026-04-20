# Architecture Page — 한국어 번역

## Section 01: Hero

AI Enablement
AI 활성화

Architecture
아키텍처

LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.
LLM Capsule은 기업이 어떤 AI 모델이든 안전하게 도입할 수 있도록 지원하는 데이터 레이어이자 플러그인입니다. 기업 데이터 시스템과 외부 AI 서비스 사이에 위치하여 — 전송 중인 데이터를 보호하면서 모든 워크플로우에서 AI의 잠재력을 완전히 활용합니다.

## Section 02: Architecture Overview

Architecture
아키텍처

Overview
개요

LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.
LLM Capsule은 민감한 기업 데이터를 로컬에서 캡슐화하고, 보호된 표현만 외부 AI 서비스로 전송한 뒤, 기업 환경 내에서 AI 결과물을 복원하는 데이터 레이어입니다 — 대규모 AI 도입을 안전하게 실현합니다.

## Section 03: Architecture Components

Architecture
아키텍처

Components
구성 요소

Encapsulation Engine
캡슐화 엔진

Local Encapsulation Engine
로컬 캡슐화 엔진

The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.
캡슐화 엔진은 기업 환경 내에서 전적으로 작동합니다. 컨텍스트 기반 데이터 제어로 민감 요소를 탐지하고, 문서 구조를 보존하는 표현으로 대체한 뒤, 매핑을 로컬에 저장합니다. 매핑은 절대 기업 경계 밖으로 나가지 않습니다.

Policy Control
정책 제어

Policy Control Layer
정책 제어 레이어

Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.
조직 정의 민감정보 제어를 통해 표준 PII 탐지를 넘어서는 민감도 정책을 직접 설정합니다. 민감도 분류는 문서 유형, 부서, 워크플로우 맥락, 규제 요건에 맞춰 자동으로 적용됩니다. 관리자는 관리 콘솔에서 정책을 설정합니다.

Capsule Transmission
캡슐 전송

Outbound Capsule Transmission
아웃바운드 캡슐 전송

Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.
캡슐화된 문서만 신뢰 경계를 넘습니다. AI 제공업체는 구조적으로 완전하지만 보호된 값이 포함된 문서를 수신합니다 — AI 처리에는 유용하지만 수신 서비스에는 불투명합니다. 원본 민감 데이터는 Zero Exposure입니다.

Restoration Engine
복원 엔진

Local Restoration Engine
로컬 복원 엔진

After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.
AI 처리가 완료되면 복원 엔진이 로컬에 저장된 매핑을 AI 결과물에 적용합니다. 원래의 이름, 수치, 날짜, 참조 정보가 자동으로 복원됩니다. 복원된 결과물은 기업 워크플로우에서 바로 사용할 수 있습니다.

Audit & Compliance
감사 및 컴플라이언스

Audit & Compliance Layer
감사 및 컴플라이언스 레이어

Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.
모든 캡슐화 및 복원 이벤트가 완전한 감사 이력과 함께 기록됩니다. 어떤 데이터가 보호되었는지, 언제, 누가, 어떤 AI 서비스가 처리했는지 추적할 수 있습니다. 감사 데이터는 기업 AI 거버넌스와 규제 대응 요건을 지원합니다.

## Section 04: Deployment Options

Deployment
배포

Options
옵션

LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.
LLM Capsule은 인프라가 운영되는 곳이라면 어디서든 AI를 활성화합니다. 캡슐화와 복원 로직은 배포 모델에 관계없이 동일합니다 — 모든 환경에서 AI를 도입할 수 있습니다.

On-Premise
온프레미스

Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.
기업 데이터센터 내 전체 배포. 민감 데이터는 절대 네트워크 경계를 넘지 않습니다. 기존 보안 경계 내에서 운영됩니다.

Air-Gapped
망분리

For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.
가장 민감한 환경을 위한 배포 방식입니다. 격리된 네트워크에서 캡슐화하고, AI 연결 환경으로 통제된 전송을 수행한 뒤, 결과를 로컬로 돌려보내 복원합니다.

Cloud (AWS Marketplace)
클라우드 (AWS Marketplace)

Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.
기업의 AWS 계정 또는 VPC 내에서 실행됩니다. 데이터는 기업의 클라우드 경계 안에 그대로 유지됩니다. AWS Marketplace에서 간편하게 조달할 수 있습니다.

View on AWS Marketplace
AWS 마켓플레이스에서 보기

Hybrid
하이브리드

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.
문서 유형이나 민감도 수준에 따라 단일 LLM Capsule 인스턴스 내에서 서로 다른 배포 모드로 라우팅됩니다. 최대한의 유연성을 제공합니다.

Embedded Integration
임베디드 통합

LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.
LLM Capsule을 기존 기업 애플리케이션과 플랫폼에 내장하여, 소프트웨어 스택 내 데이터 레이어로 작동합니다.

Slack App
Slack 앱

Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.
Slack 내에서 직접 LLM Capsule을 사용합니다. AI 어시스턴트로 전송하기 전에 민감한 메시지와 문서를 캡슐화하고, 결과는 채널 안에서 바로 복원됩니다.

## Section 05: CTA

See how
직접 확인하십시오

works with your data
가 실제 데이터에서 어떻게 작동하는지

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 조건, 평가 기준을 가져오십시오. 실제 워크플로우 위에서 직접 시연합니다.

Request a Demo
데모 요청

Available on AWS Marketplace
AWS 마켓플레이스에서 보기
