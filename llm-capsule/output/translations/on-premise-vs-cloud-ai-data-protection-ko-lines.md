# On-Premise vs Cloud AI Data Protection — 한국어 번역

## Section 01: Hero

On-Premise vs Cloud AI Data Protection
온프레미스 vs 클라우드 AI 데이터 보호

Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.
온프레미스, 에어갭, 클라우드, 하이브리드, 임베디드 등 엔터프라이즈 AI 데이터 보호 배포 모델 비교.

Learn
학습

## Section 02: Problem

Problem
문제

Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.
기업은 다양한 인프라 환경에서 운영됩니다. 국방 및 정보기관은 에어갭 배포를 요구합니다. 금융 기관은 온프레미스 데이터 처리를 의무화할 수 있습니다. 클라우드 네이티브 조직은 SaaS 기반 솔루션을 원합니다. 많은 기업이 서로 다른 데이터 유형에 다른 배포 모델이 필요한 하이브리드 환경에서 운영합니다.

AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.
AI 데이터 보호는 인프라 변경을 강요하지 않고 기업의 인프라 요구사항에 적응해야 합니다.

## Section 03: Explanation

Explanation
설명

On-premise deployment.
온프레미스 배포.

The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.
캡슐화 엔진은 완전히 기업 데이터 센터 내에서 실행됩니다. 민감한 데이터는 어떤 네트워크 경계도 통과하지 않습니다. AI 지원 데이터 레이어는 기존 보안 경계 내에서 작동합니다. 필요 시 캡슐화된 데이터만 외부 AI 서비스로 전송됩니다.

Air-gapped deployment.
에어갭 배포.

For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.
가장 민감한 환경을 위해 LLM Capsule은 에어갭 네트워크 내에서 작동할 수 있습니다. 문서는 로컬에서 캡슐화되고, 제어된 채널을 통해 AI 연결 환경으로 전송되어 처리된 후, 결과가 로컬 복원을 위해 다시 전송됩니다.

Cloud deployment.
클라우드 배포.

Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.
AWS Marketplace에서 사용 가능합니다. 캡슐화 레이어는 기업의 클라우드 계정 또는 VPC 내에서 실행됩니다. AI 서비스에 외부에서 접근하는 동안 데이터는 기업의 클라우드 경계 내에 유지됩니다.

Hybrid deployment.
하이브리드 배포.

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.
단일 LLM Capsule 인스턴스 내에서 서로 다른 문서 유형 또는 민감도 수준이 다른 배포 모드를 통해 라우팅됩니다.

Embedded integration.
임베디드 통합.

LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.
LLM Capsule은 기존 엔터프라이즈 애플리케이션과 플랫폼에 임베드되어 기업 자체 소프트웨어 스택 내에서 AI 지원 데이터 레이어로 작동할 수 있습니다.

One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.
하나의 지원 모델, 모든 배포. 캡슐화 및 복원 논리는 LLM Capsule이 실행되는 위치에 관계없이 동일합니다. AI 결과는 모든 배포 시나리오에서 로컬에서 복원됩니다.

## Section 04: Enterprise Example

Enterprise Example
엔터프라이즈 적용 사례

Government Agency — Air-Gapped Deployment
정부 기관 — 에어갭 배포

A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.
정부 기관은 분류된 브리핑 문서를 자동 요약하기 위해 AI가 필요합니다. 분류된 네트워크는 외부 연결이 없습니다.

LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.
LLM Capsule은 분류된 네트워크에서 문서를 캡슐화합니다. 캡슐화된 데이터는 승인된 데이터 다이오드를 통해 AI 연결 환경으로 전송됩니다. AI가 요약을 생성합니다. 결과는 분류된 네트워크로 다시 전송되어 복원되어 분류 준비된 요약이 생성됩니다.

## Section 05: FAQ

Does LLM Capsule work on-premise?
LLM Capsule은 온프레미스에서 작동합니까?

Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.
예. LLM Capsule은 온프레미스, 에어갭, 클라우드, 하이브리드, 임베디드 배포 모델을 지원합니다. 캡슐화 엔진은 배포 유형에 관계없이 완전히 귀하의 환경 내에서 실행됩니다.

Is LLM Capsule available on AWS Marketplace?
LLM Capsule은 AWS Marketplace에서 사용 가능합니까?

Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.
예. LLM Capsule은 귀하의 AWS 계정 내 클라우드 배포를 위해 AWS Marketplace에서 사용 가능합니다.

## Section 06: Related Pages

Related
관련 페이지

Product Overview
제품 개요

Architecture
아키텍처

Trust & Compliance
신뢰 및 컴플라이언스

Request a Demo
데모 요청

## Section 07: CTA Band

See how LLM Capsule works with your data
LLM Capsule이 귀하의 데이터와 어떻게 작동하는지 확인하세요

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연해 드립니다.

Request a Demo
데모 요청

AWS Marketplace
AWS Marketplace
