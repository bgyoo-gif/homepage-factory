# On-Prem LLM Execution Path — 한국어 번역

## Section 01: Hero

← Learn
← Learn

On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations
온프레미스 LLM 실행 경로: 규제 환경을 위한 망분리·하이브리드·지역 내 AI

Two execution paths inside a single AI enablement data layer. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.
단일 AI 데이터 레이어 안에 두 가지 실행 경로가 존재합니다. 외부 전송이 불가한 환경에서는 온프레미스 경량 모델이 경계 내부에서 워크플로를 처리합니다. 외부 노출 Zero Exposure, 완전한 복원.

ARCHITECTURE · Execution Path
ARCHITECTURE · Execution Path

11 min read
11분 읽기

Updated May 2025
2025년 5월 업데이트

---

## Section 02: TL;DR

Definition · TL;DR
Definition · TL;DR

LLM Capsule supports two execution paths. Path A sends capsule data to an external approved LLM — no raw operational data exposure. Path B runs a small private lightweight model entirely inside your enterprise environment — zero external transmission. Selection is policy-driven per workflow.
LLM Capsule은 두 가지 실행 경로를 지원합니다. Path A는 캡슐 데이터를 외부 승인 LLM으로 전송합니다. 원본 운영 데이터는 외부로 나가지 않습니다. Path B는 소형 경량 모델을 기업 환경 내부에서 완전히 실행합니다. 외부 전송이 없습니다. 경로 선택은 워크플로별 정책이 결정합니다.

---

## Section 03: Body

하나가 아닌 두 가지 경로가 필요한 이유

기업은 대부분 단일 규제 프로파일을 갖지 않습니다. 통신사는 Path A로 NOC 분석을 실행하고, Path B로 미션 크리티컬 인시던트 워크플로를 처리할 수 있습니다. 병원은 일상적인 문서화에 Path A를, 임상 의사결정 지원에 Path B를 사용할 수 있습니다. 방산 업체는 Path B만 사용할 수도 있습니다. 단일 경로를 강제하면 단일 규제 기준도 강제됩니다. 두 경로를 제공하면 거버넌스가 워크플로에 맞는 경로를 선택할 수 있습니다.

Path A — 캡슐 데이터만 사용하는 외부 승인 LLM

캡슐(문서 구조 보존, 차등 프라이버시 적용)이 승인된 외부 LLM 엔드포인트 — ChatGPT, Claude, Gemini, Perplexity, 또는 임의의 LLM API — 로 전송됩니다. **원본 운영 데이터는 기업 환경을 떠나지 않습니다.** 캡슐만 전송됩니다. LLM은 캡슐을 처리하고 토큰화된 응답을 반환합니다. 상태 볼트가 기업 내부에서 응답을 복원합니다.

**적합한 경우:** 차등 프라이버시가 적용된 캡슐의 외부 전송을 허용하는 규제 프로파일을 가진 워크플로

**강점:** 최신 프런티어 모델 기능 활용 가능

**제약:** 승인된 외부 LLM 엔드포인트와 정책 정합이 필요합니다

Path B — 온프레미스 로컬 경량 모델

소형 경량 모델이 기업 환경 내부에서 완전히 실행됩니다. 캡슐은 로컬에서 처리됩니다. **외부 전송이 없습니다.** 외부 엔드포인트가 전혀 허용되지 않는 망분리·기밀·OT·엄격한 규제 환경에서 사용됩니다.

**적합한 경우:** 망분리 네트워크, 기밀 작전, OT 환경, 엄격한 데이터 주권 요구사항

**강점:** Zero Exposure, 완전한 데이터 레지던시

**제약:** 모델 성능이 로컬 경량 모델 범위 내로 제한됩니다

**내부 명칭.** 내부 팀에서 "10G"라고 부르는 경우가 있습니다. 공개 문서에서는 *경량 온프레미스 모델*, *소형 프라이빗 모델*, *로컬 추론 경로*, 또는 *온프레미스/로컬 실행 경로*를 사용합니다. 정확한 크기는 하드웨어와 워크플로에 따른 배포 결정 사항입니다.

경로 선택: 의사결정 프레임워크

테이블 헤더: 요소 / Path A / Path B

외부 전송 허용 여부 / 예 (캡슐만) / 아니오

망분리 네트워크 / 해당 없음 / 필수

프런티어 모델 성능 필요 여부 / 예 / 로컬 모델 범위 내

지연 시간 프로파일 / 가변 (네트워크 의존) / 로컬, 예측 가능

컴플라이언스 태세 / "원본 데이터 노출 없음" / "외부 노출 Zero Exposure"

배포 토폴로지

온프레미스

Capsule Runtime과 온프레미스 로컬 경량 모델을 기업 데이터센터 내부에 배포합니다. Path B가 기본값입니다. Path A는 정책에 의해 별도의 승인된 외부 엔드포인트가 허용 목록에 등록된 경우에만 사용 가능합니다.

망분리

Capsule Runtime과 온프레미스 로컬 경량 모델을 완전히 격리된 네트워크에 배포합니다. Path A는 설계상 사용 불가입니다. Path B가 모든 워크플로를 처리합니다. 기밀 작전·방위·고규제 OT 환경에서 일반적입니다.

하이브리드

Capsule Runtime은 온프레미스에 두고, 두 경로를 모두 활성화합니다. 정책이 개별 워크플로를 라우팅합니다. 일부 워크플로는 외부 엔드포인트를 허용하고 다른 워크플로는 로컬 실행이 필요한 통신사·금융권에서 일반적입니다.

지역 내 배포 (데이터 주권)

특정 지역(예: GDPR 적용 워크플로를 위한 EU)에 Capsule Runtime과 경량 모델을 배포합니다. Path A도 지역 내 외부 엔드포인트로만 허용될 수 있습니다. 지역별 데이터 레지던시 의무가 있는 다국적 기업에서 일반적입니다.

클라우드 (AWS Marketplace)

AWS Marketplace를 통해 Capsule Runtime을 배포하며, 고객의 클라우드 계정에서 런타임과 로컬 경량 모델을 모두 호스팅합니다. Path A는 정책에 따라 선택 사항입니다.

임베디드 통합

기존 애플리케이션(NOC 콘솔, 티켓 시스템, 병원 포털, 미션 시스템)에 Capsule SDK를 임베딩합니다. 두 경로 모두 지원되며, 임베딩된 애플리케이션이 워크플로별로 선택합니다.

Slack App

Slack 워크플로용 캡슐 플러그인입니다. 범용 팀은 Path A를 주로 사용하고, 온프레미스 런타임 위에서 Slack을 UI 레이어로 사용하는 규제 대상 팀은 Path B를 사용합니다.

Path B의 기술적 처리 과정

커넥터 레인이 운영 데이터를 Capsule Runtime으로 전달합니다 (REST, 웹훅, 로그 탭, SDK).

문서 구조 보존 캡슐화가 시퀀스와 구조를 유지하면서 운영 식별자를 토큰화합니다.

차등 프라이버시 기반 보호가 캡슐의 추론 위험을 제한합니다.

캡슐이 동일 네트워크 내에서 실행 중인 로컬 경량 모델로 전달됩니다.

모델이 토큰화된 출력을 생성합니다.

상태 볼트가 출력 내 원본 운영 식별자를 복원합니다.

결과가 원래 워크플로(티켓, 런북, EHR 필드, 미션 요약)에 다시 삽입됩니다.

거버넌스가 적용된 경로, 호출된 정책, 감사 이력을 기록합니다.

**Path B의 어떤 단계도 기업 경계 밖으로 나가지 않습니다.**

Zero Exposure 주장 — 올바른 범위 정의

"Zero Exposure"는 방어 가능하려면 범위가 정의되어야 하는 주장입니다. LLM Capsule이 사용하는 범위 한정 표현은 다음과 같습니다.

**Path A:** "외부 LLM에 원본 운영 데이터 노출 없음."

**Path B:** "온프레미스/로컬 실행 경로에서 Zero Exposure."

범위가 없는 "Zero Exposure"를 최상위 슬로건으로 사용하지 마십시오. 기술적 보증은 경로별로 다르며 정책 조건에 따릅니다.

구매 담당자가 평가해야 할 항목

**경로 지원 범위.** 두 경로 모두 지원되는가, 하나만 지원되는가?

**경로 정책 세분화.** 동일 거버넌스 하에서 워크플로마다 다른 경로를 사용할 수 있는가?

**로컬 모델 사양.** 온프레미스 경량 모델에 어떤 하드웨어가 필요한가?

**망분리 지원 여부.** 외부 연결 없이 런타임이 완전히 작동하는가?

**상태 볼트 로컬 유지 여부.** Path A에서도 상태 볼트가 로컬에 유지되는가?

**경로별 감사.** 요청별·워크플로별·정책별로 적용된 경로가 기록되는가?

핵심 요약

핵심 요약

하나의 AI 데이터 레이어 안에 두 가지 실행 경로: 캡슐을 사용하는 외부 승인 LLM(Path A) 또는 온프레미스 로컬 경량 모델(Path B).

Path B는 외부 전송 없이 망분리·기밀·OT·엄격한 규제 환경을 처리합니다.

경로 선택은 워크플로별 정책이 결정하며, 거버넌스가 적용된 경로를 기록합니다.

6가지 배포 토폴로지: 온프레미스, 망분리, 하이브리드, 지역 내 배포, 클라우드, 임베디드, Slack App.

"Zero Exposure" 주장은 경로에 따라 범위가 정해집니다. "외부 LLM에 원본 데이터 노출 없음"(Path A) 또는 "Zero Exposure"(Path B).

---

## Section 04: Related Links

Continue reading
계속 읽기

Pillar
핵심 개념

Differential privacy for enterprise AI
엔터프라이즈 AI를 위한 차등 프라이버시

Use case
활용 사례

AI on network operations data
네트워크 운영 데이터에서의 AI

Comparison
비교

PII guardrails vs operational data protection
PII 가드레일 vs 운영 데이터 보호

---

## Section 05: CTA Strip

Air-gapped, hybrid, or external — your policy decides.
망분리·하이브리드·외부 전송, 어떤 경우든 정책이 결정합니다.

30-minute review of your regulatory profile and a path-by-path recommendation per workflow.
30분 리뷰로 규제 프로파일을 점검하고, 워크플로별 경로 권고안을 제시합니다.

Request a Demo
데모 요청
