# Translation Guide — Homepage Factory

## 지원 언어
- `en` — English (원문, 번역 대상 아님)
- `ko` — 한국어
- `ja` — 日本語
- `de` — Deutsch

---

## 한국어(ko) 번역 기준 — llmcapsule.ai/ko/ 실제 번역본 분석 기반

### 톤 & 문체

| 항목 | 규칙 | 예시 |
|------|------|------|
| 문체 | **단정적·강한 어조**. 물음표보다 마침표. | "막혔던 AI 프로젝트, 실제로 가동됩니다" |
| 경어 | **합니다체** (정중하지만 간결) | "캡슐화합니다", "복원됩니다", "작동합니다" |
| 부정 강조 | **"~이 아닙니다" 반복**으로 경쟁사 차별화 | "마스킹 툴이 아닙니다. 프롬프트 필터도, 삭제 레이어도 아닙니다" |
| 문장 구조 | **문제-해결** 구조 명확. 짧은 문장 선호 | "민감 데이터 때문에 막혔던 AI → 실제로 가동됩니다" |
| 나열 | **가운뎃점(·)** 사용 | "금융·공공·의료·법률" |
| 직접화법 | **"우리 회사"** 표현 허용 | "우리 회사 민감정보, 5분 안에 직접 설정합니다" |
| 마침 | **마침표 통일**, 느낌표 지양 | |

### CTA 버튼 라벨

| English | ko |
|---------|-----|
| Request a Demo | 데모 요청 |
| Available on AWS Marketplace | AWS 마켓플레이스에서 보기 |
| See Product | 제품 보기 |
| See Architecture | 아키텍처 보기 |
| See how it works | 자세히 살펴보기 |
| View Solutions | 산업별 솔루션 보기 |
| Read article | 아티클 읽기 |
| Learn more | 자세히 알아보기 |

### 수치/데이터

| 패턴 | 예시 |
|------|------|
| 숫자+단위 붙여쓰기 | "0.12초", "100%", "98%" |
| 라벨 한국어화 | "페이지당 처리 시간", "복원율", "응답 유사도" |
| 문서 기준 설명 | "평균 2,200자 이상의 기업 문서 기준" |

### 섹션별 번역 패턴

**Hero**
- 영문의 "— without exposing a single line" 같은 대시 구문 → 한국어도 "— 원본 데이터는 절대 외부로 나가지 않습니다" 대시 유지
- "절대" 같은 강조 부사 적극 활용

**카드 제목**
- 짧고 단정적 (10자 이내 선호)
- "원본 데이터, 절대 밖으로 나가지 않습니다"
- "결과물에 원본이 그대로. 후처리 없이 바로 씁니다"

**비교 표**
- 영문 컬럼 헤더 직역: Approach→접근, Method→방법, Limitation→제약
- 셀 내용은 간결하게 축약

**FAQ**
- Q: "~나요?", "~입니까?" 혼용
- A: 합니다체, 첫 문장에서 핵심 답변 → 이후 부연

**Before/After**
- WITHOUT: "기업 AI, 막히거나 망가진 상태입니다"
- WITH: "실제 기업 데이터 위에서, AI가 작동합니다"
- bullet: 능동형 짧은 문장

---

## 번역 금지 용어 (모든 언어에서 영어 원문 유지)

| 용어 | 이유 |
|------|------|
| LLM Capsule | 제품명 |
| CUBIG | 회사명 |
| SynTitan, DTS, SynData, SynConnect | CUBIG 제품명 |
| Zero Exposure | 브랜드 차별화 키워드 (ko에서도 영문 유지) |
| Proof of Value (PoV) | 영업 프로세스 고유명 |
| AWS Marketplace | 서비스명 |
| ISO 27001, ISO 42001, GS Certification | 인증 명칭 |
| ChatGPT, Claude, Gemini, Perplexity | 외부 제품명 |
| KISA, TTA, Gartner | 기관명 |

## 번역하는 기술 용어 (ko 기준)

| English | ko | 비고 |
|---------|-----|------|
| Encapsulation / Encapsulate | 캡슐화 | 이전 가이드에서 금지였으나 실제 번역본에서 한국어화 |
| Restoration / Restore | 복원 / 자동 복원 | |
| AI enablement data layer | 데이터 레이어 | "AI 활성화"는 생략, 맥락에서 자연스럽게 |
| enterprise AI adoption | 기업 AI 도입 | |
| sensitive data | 민감 데이터 / 민감정보 | 문맥에 따라 선택 |
| structure-preserving | 문서 구조 보존 | |
| air-gapped | 망분리 | |
| on-premise | 온프레미스 | |
| data exposure | 데이터 노출 | |
| compliance | 규제 대응 / 컴플라이언스 | 문맥에 따라 |
| document processing | 문서 처리 | |
| prompt security gateway | 프롬프트 보안 게이트웨이 | |
| masking & redaction | 마스킹과 삭제 | "삭제"로 의역 (redaction) |
| cross-model execution | LLM-Agnostic 연결 | 의역 |
| trust boundary | 신뢰 경계 | |
| audit trail | 감사 이력 | |
| enterprise context control | 조직 정의 민감정보 | 의역 — 실제 번역본 기준 |

---

## ja/de 톤 & 스타일

| 항목 | ja | de |
|------|----|----|
| 경어 | です/ます体 | Sie 호칭 |
| 문체 | 기술적·정중 | 전문적·격식 |
| 약어 | AI, LLM, API 등 원문 유지 | AI→KI 가능, LLM/API 원문 유지 |
| de 특수 | - | GDPR→DSGVO, 소수점→쉼표(98,1%) |

---

## 품질 기준

1. **llmcapsule.ai/ko/ 실제 번역본이 최우선 참고** — 이미 번역된 패턴이 있으면 그대로 따름
2. 원문의 의미를 정확히 전달 (의역 허용, 창작 금지)
3. 간결한 문체 — 만연체 금지, 한 문장에 핵심 하나
4. "~하는 것입니다" 같은 설명조 지양 → "~합니다" 단정형
5. 각 언어의 자연스러운 어순/표현 사용
6. 한 페이지 내 흐름이 자연스럽도록 문장 운영
7. HTML 태그, CSS 클래스, 변수명 등 코드는 절대 번역하지 않음
8. 강조 패턴: "절대", "직접", "바로", "그대로" 같은 부사 적극 활용
