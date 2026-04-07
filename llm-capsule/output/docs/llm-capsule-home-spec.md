# Design Spec: llm-capsule-home
생성일: 2026-04-07
분석한 원본: llm-capsule/input/llm-capsule-home.html

## 전체 구조 요약
- 섹션 수: 12개 (Hero, Trust, 5 Capabilities, Industry Proof, Core Differentiation 3+2, Use Cases, Problem, Before/After, Architecture, Proof/KPI, Final CTA, FAQ)
- 문서 성격: 설득형 (제품 홈페이지 - AI enablement data layer)
- 브랜드: LLM Capsule (CUBIG이 아닌 LLM Capsule 독립 브랜드)
- 브랜드 컬러: #1821E8 (인디고), #5690D4 (블루), #55B45D (그린) -- DS capsule 토큰 사용
- 특이사항:
  - design-system-core.md + design-system-capsule.md가 아직 미생성 → 기존 design-system.md 기반으로 설계하되, capsule 브랜드 컬러를 CSS 변수 오버라이드로 적용
  - A타입에 섹션 2.5(5 Capabilities)와 섹션 4(Core Differentiation 3+2)가 내용이 상당히 겹침 → B타입에서는 2.5를 간결 요약(카드 그리드)으로, 4를 상세 전개(아코디언)로 차별화
  - 이미지/스크린샷 없음 → placeholder 이미지 경로 명시, 사용자에게 실제 이미지 요청 필요
  - LLM Capsule 로고: reference/images/logo-llmcapsule.avif 사용

## 페이지 레이아웃 흐름 (시각적 리듬)

| # | 섹션 | 배경 | 컴포넌트 | 레이아웃 변화 |
|---|------|------|----------|--------------|
| 1 | Hero | white | [A] Hero text-only | 텍스트 중심 |
| 2 | Trust - Partners | white | [I] Partner grid (마키) | 전폭 마키 |
| 2b | Trust - KPI | white | [F] KPI band (배경 이미지 on 컴포넌트) | 배경 이미지 밴드 |
| 2c | Trust - Certs | white | [I-2] Cert grid (마키) | 전폭 마키 |
| 3 | 5 Capabilities | white | [G] Card grid 3col + 2col | 카드 그리드 |
| 4 | Industry Proof | white | [H-3] Case study 3col x2행 | 3열 카드 |
| 5 | Core 3+2 | white | [S] Accordion list | 아코디언 |
| 6 | Use Cases | white | [U] Step tabs (4 탭) | 탭 인터랙션 |
| 7 | Problem | white | [O] Table + [Q] Banner | 비교표 + 배너 |
| 8 | Before/After | white | [G] Card grid 2col | 2열 비교 카드 |
| 9 | Architecture | white | [W] Diagram | 다이어그램 |
| 10 | Proof/KPI | white | [F] KPI band (배경 이미지) | 배경 이미지 밴드 |
| 11 | Final CTA | bg-image | [K] CTA band | 전폭 배경 CTA |
| 12 | FAQ | white | [P] Accordion | 아코디언 |

**리듬 검증:** ds-grid--1 3개 이상 연속 없음. 마키 → 카드 그리드 → 아코디언 → 탭 → 테이블 → 카드 → 다이어그램 → KPI → CTA → 아코디언으로 충분한 변화.

---

## 섹션별 설계

### 섹션 1: Hero
- 헤더 eyebrow: 없음 (전면 금지)
- 헤더 타이틀: "Use any AI on your real documents -- without exposing a single line"
- 타이틀 강조 키워드: "without exposing" → `ds-text--brand`
- 헤더 description: "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally -- AI processes the safe version -- then results are restored with your original data."
- 헤더 정렬: center (Hero text-only이므로 center)
- 서브 타이틀: 없음
- 배경: white (Hero text-only이므로 배경 이미지 금지)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-hero--text-only
- 그리드: 없음 (단일 컬럼)
- 태그라인: "Encapsulate. Process. Restore." → hero 설명 하단에 semibold 텍스트로 배치
- 버튼:
  - Primary: "Request PoV" → ds-btn--primary ds-btn--md (href: request-pov.html)
  - Secondary: "Download Architecture Brief" → ds-btn--secondary ds-btn--md (href: downloads.html)
  - Secondary: "Talk to an Architect" → ds-btn--secondary ds-btn--md (href: architecture.html)
- 추가 요소: "Available on AWS Marketplace" → ds-btn--secondary ds-btn--sm (외부 링크는 버튼형 규칙)
- 제품명 "LLM Capsule" 언급 시: `<span class="ds-text--product">LLM Capsule</span>` 적용
- 반응형 설계:
  - mobile (375px): title 24px, description 16px, 버튼 세로 스택 full-width
  - tablet (768px): title 28px, 버튼 가로 배치
  - sm-desktop (1024px): title 32px, description max-width 720px
  - desktop (1440px): title 36px, description max-width 860px
- 비고: 두 번째 단락("Companies want to use AI but can't...")은 description의 추가 paragraph로 배치. 색상 text-secondary.

---

### 섹션 2a: Trust - Partner Logos
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Trusted by enterprises processing sensitive documents"
- 타이틀 강조 키워드: "Trusted" → `ds-text--brand`
- 헤더 description: "across finance, insurance, legal, healthcare, and telecom"
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-partner-grid (마키 애니메이션)
- 그리드: 없음 (전폭 마키)
- 파트너 목록: DS 공식 목록 사용 (A타입 목록 무시)
  - partner-gartner.png, partner-navercloud.avif, partner-sktelecom.avif, partner-kyobo.avif, partner-korea army.avif, partner-korea-airforce.avif, partner-eumc.avif, partner-deutsche-telekom.avif, partner-claroty.png, partner-korea-heritage-service.jpg, partner-ministry-of-data-and-statistics.png
- 반응형 설계:
  - mobile: 로고 100px, gap 48px, animation-duration 20s
  - desktop: 로고 120px, gap 64px, animation-duration 30s
- 비고: JS로 seamless loop 복제. "Platforms: AWS Marketplace, Naver Cloud"는 별도 표시하지 않음 (파트너 그리드에 통합).

---

### 섹션 2b: Trust - KPI Band
- 헤더 eyebrow: 없음
- 헤더 타이틀: 없음 (섹션 헤더 생략 -- KPI band만 독립 배치)
- 타이틀 강조 키워드: 없음
- 배경: white (섹션 자체)
- 배경 bg-image 적용 위치: ds-kpi-band 컴포넌트 자체에 적용 (ds-bg--grad-deep)
- 사용 컴포넌트: ds-kpi-band
- 그리드: 4col (KPI band 내장 그리드)
- KPI 항목:
  1. "0.12s" / "Processing per page"
  2. "100%" / "Restoration rate"
  3. "98%" / "Output similarity"
  4. "98.1%" / "Detection accuracy"
- 반응형 설계:
  - mobile: 1col, padding 32px 20px
  - tablet: 2col
  - desktop: 4col, padding 48px 40px
- 비고: 어두운 오버레이 + 흰색 텍스트. 섹션 헤더 없이 KPI band만 배치.

---

### 섹션 2c: Trust - Certifications
- 헤더 eyebrow: 없음
- 헤더 타이틀: 없음 (cert grid만 독립 배치, 이전 KPI band와 같은 section 안에 포함)
- 타이틀 강조 키워드: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-cert-grid (마키 애니메이션)
- A타입에 언급된 인증: ISO 27001, ISO 42001, GS Certification → DS 공식 인증 목록 전체 사용
- 반응형 설계:
  - mobile: card 170px, gap md, animation 25s
  - desktop: card 200px, gap lg, animation 40s
- 비고: 섹션 2a/2b/2c를 하나의 `<section>` 안에 배치하여 Trust 블록으로 통합. 섹션 헤더는 2a에서만 한 번.

---

### 섹션 3: Five Capabilities
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Five capabilities that remove every barrier to enterprise AI"
- 타이틀 강조 키워드: "every barrier" → `ds-text--brand`
- 헤더 description: "Other tools either block AI usage or destroy document context. LLM Capsule solves both."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--3col (상단 3개 Core) + ds-card-grid--2col (하단 2개 +1/+2)
- 그리드: 상단 3col → 하단 2col
- 카드 구성 (ds-card):
  1. Badge: "CORE" (ds-card__badge--brand) / Title: "Your data never leaves" / Icon: shield (Lucide) / Description: 원문 그대로
  2. Badge: "CORE" / Title: "Get real results back" / Icon: refresh-cw / Description: 원문
  3. Badge: "CORE" / Title: "You define what's sensitive" / Icon: settings / Description: 원문
  4. Badge: "+1" (ds-card__badge--teal) / Title: "Documents stay readable to AI" / Icon: file-text / Description: 원문
  5. Badge: "+2" (ds-card__badge--teal) / Title: "Use any AI model, anytime" / Icon: shuffle / Description: 원문
- 하단 배너: ds-banner--full ds-bg--grad-sky
  - 텍스트: "LLM Capsule is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI -- making enterprise AI adoption possible without compromise."
- 반응형 설계:
  - mobile: 상단 1col, 하단 1col
  - tablet: 상단 2col, 하단 2col
  - sm-desktop: 상단 3col, 하단 2col
  - desktop: 상단 3col, 하단 2col
- 비고: Core 3개는 같은 badge 색상(brand), +1/+2는 teal badge로 시각 구분. 카드는 ds-card (기본 white 배경 + border).

---

### 섹션 4: Industry Proof
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Enabling AI adoption across regulated industries"
- 타이틀 강조 키워드: "regulated industries" → `ds-text--brand`
- 헤더 description: "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows -- turning blocked projects into production deployments."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--3col + ds-card--case-study
- 그리드: 3col x 2행 (6개 산업)
- 케이스 스터디 카드 (6개):
  1. Public Sector / illustration-public-sector.png / Badge: "BLOCKED" (red) + "LLM CAPSULE" (brand) / 간단 설명
  2. Finance & Insurance / illustration-finance.png / Badge: "BLOCKED" (red) + "LLM CAPSULE" (brand)
  3. Healthcare / illustration-healthcare.png / Badge: "BLOCKED" (red) + "LLM CAPSULE" (brand)
  4. Legal / illustration-persona.png / Badge: "BLOCKED" (red) + "LLM CAPSULE" (brand)
  5. Telecom / graphic-telecom.png → 주의: illustration 세트 통일 필요 → illustration-security.png 대신 사용 불가. illustration 세트만 사용.
     → Telecom은 illustration 세트에 없으므로 graphic-telecom.png 단독으로 graphic 세트를 사용하면 혼합 금지 위반.
     → 해결: 6개 모두 illustration 세트 사용. Telecom → illustration-security.png (보안/네트워크 유사), Network Security → illustration-defense.png
  5 (수정). Telecom / illustration-security.png / Badge 동일
  6. Network Security / illustration-defense.png / Badge 동일
- 각 카드 내용:
  - BLOCKED badge: 산업별 AI 도입 차단 사유 1줄
  - LLM CAPSULE badge: 해결 방식 1줄
  - Tags: #LLMCapsule
- 반응형 설계:
  - mobile: 1col
  - tablet: 2col
  - sm-desktop: 3col
  - desktop: 3col
- 비고: A타입은 산업명만 나열. B타입에서는 각 산업의 구체적 blocker와 solution을 1줄씩 추가 (원문 섹션 3의 맥락에서 추론). 카드 좌측 이미지는 반드시 illustration 세트로 통일.

---

### 섹션 5: Core Differentiation (3+2 Architecture)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Enterprise AI enablement through a 3+2 architecture"
- 타이틀 강조 키워드: "3+2 architecture" → `ds-text--brand`
- 헤더 description: "Three core enablement pillars plus two additional value capabilities."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-ac-list (아코디언)
- 그리드: 없음 (아코디언 스택)
- 아코디언 항목 (5개):
  1. Industry dot: brand-purple / Industry: "CORE 1" / Title: "Zero Exposure" / Meta badges: ds-badge--error "Zero Data Leak" / Body: 원문 전체 (긴 설명 포함)
  2. Industry dot: brand-purple / Industry: "CORE 2" / Title: "Restoration" / Meta badges: ds-badge--success "100% Restore" / Body: 원문 전체
  3. Industry dot: brand-purple / Industry: "CORE 3" / Title: "Enterprise Context" / Meta badges: ds-badge--purple "Custom Policy" / Body: 원문 전체
  4. Industry dot: teal (#0e9f8e) / Industry: "+1" / Title: "Structure-Preserving" / Meta badges: ds-badge--neutral "Tables & Layouts" / Body: 원문 전체
  5. Industry dot: teal / Industry: "+2" / Title: "Cross-Model Execution" / Meta badges: ds-badge--neutral "Any LLM" / Body: 원문 전체
- 첫 번째 아코디언은 기본 열림 (ds-ac--open)
- 반응형 설계:
  - mobile: meta badges 숨김, title wrap
  - tablet: meta badges 표시
  - desktop: 전체 표시
- 비고: 섹션 3(5 Capabilities)은 요약 카드, 여기는 상세 아코디언으로 차별화. 원문 내용 전부 보존.

---

### 섹션 6: Use Cases (AI-Enabled Enterprise Workflows)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "AI-Enabled Enterprise Workflows"
- 타이틀 강조 키워드: "Enterprise Workflows" → `ds-text--brand`
- 헤더 description: "LLM Capsule plugs into the most common enterprise AI workflows -- from document intake to output delivery."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-step-tabs (4개 탭)
- 그리드: 없음 (탭 구조: 5fr:7fr split per panel)
- 탭 항목:
  1. Tab: "Document Summarization" / Panel title: "Secure Document Summarization" / Description: 원문 / Checklist (ds-bullet--check): "Contracts, reports, filings protected", "Real names, dates, figures restored" / Screenshot: placeholder (screenshot-usecase-summarization.png -- 사용자 요청 필요)
  2. Tab: "Claims Processing" / Panel title: "AI Claims Processing" / Description: 원문 / Checklist: "Classification, damage assessment, fraud detection", "Restored outputs feed claims systems" / Screenshot: placeholder
  3. Tab: "Contract Review" / Panel title: "Confidential Contract Review" / Description: 원문 / Checklist: "Key terms, obligations, risk clauses extracted", "Real party names, amounts restored" / Screenshot: placeholder
  4. Tab: "Report Generation" / Panel title: "Internal Report Generation" / Description: 원문 / Checklist: "Performance reviews, audit findings, compliance", "Real employee names, department data restored" / Screenshot: placeholder
- JS: data-step-tabs / data-tab / data-panel 속성으로 탭 전환
- 반응형 설계:
  - mobile: 탭 가로 스크롤, 패널 1col (텍스트 위 → 스크린샷 아래)
  - tablet: 탭 wrap, 패널 1col
  - sm-desktop: 패널 5fr:7fr split
  - desktop: 동일
- 비고: 스크린샷 이미지가 없으므로 placeholder 경로 명시. 프론트엔드에서 ds-step-tabs__screenshot에 placeholder 배경색(surface-light) 적용.

---

### 섹션 7: Problem (Enterprise data is never AI-ready)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Enterprise data is never AI-ready by default"
- 타이틀 강조 키워드: "never AI-ready" → `ds-text--brand`
- 헤더 description: "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트:
  1. ds-banner (상단 정의 배너): "Traditional approaches -- masking, redaction, tokenization, and prompt security gateways -- were not designed for AI workflows."
  2. ds-banner--full ds-bg--paint-lavender (LLM Capsule 포지셔닝): "LLM Capsule sits between your documents and any AI model..."
  3. ds-table--4col (기존 접근법 비교 테이블)
- 테이블 구성:
  - 컬럼: Approach / Method / Limitation / AI Workflow Impact
  - Row 1: Masking & Redaction / Permanently removes data / Destroys context / AI produces unusable outputs with [REDACTED]
  - Row 2: Prompt Security Gateways / API-level filtering / No document-level protection / No output restoration
  - Row 3: Synthetic Data Platforms / Artificial data generation / Training only / Cannot replace real documents in live workflows
  - Row 4: Security Team Blocks / Manual approval / Blocks all AI / Projects never demonstrate value
- 반응형 설계:
  - mobile: 테이블 가로 스크롤
  - tablet: 테이블 가로 스크롤
  - desktop: 4col 테이블 전체 표시
- 비고: A타입의 기호(X, !, 등)를 테이블 구조로 정리. 배너 텍스트는 center 정렬.

---

### 섹션 8: Before / After
- 헤더 eyebrow: 없음
- 헤더 타이틀: "From blocked AI projects to enabled enterprise AI"
- 타이틀 강조 키워드: "enabled enterprise AI" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--2col + ds-card
- 그리드: 2col
- 카드 구성:
  1. Left card (ds-card):
    - Badge: "WITHOUT LLM CAPSULE" (ds-card__badge--red)
    - 내용: ds-bullet--dot 리스트 (6개 항목 원문 그대로)
    - 아이콘 없음
  2. Right card (ds-card):
    - Badge: "WITH LLM CAPSULE" (ds-card__badge--brand)
    - 내용: ds-bullet--check 리스트 (6개 항목 원문 그대로)
- 반응형 설계:
  - mobile: 1col (Without 위, With 아래)
  - tablet: 2col
  - desktop: 2col
- 비고: 좌측은 부정(red badge + dot bullets), 우측은 긍정(brand badge + check bullets)으로 시각 대비.

---

### 섹션 9: Architecture
- 헤더 eyebrow: 없음
- 헤더 타이틀: "A data layer between your enterprise and any LLM"
- 타이틀 강조 키워드: "data layer" → `ds-text--brand`
- 헤더 description: "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment -- the trust boundary is never crossed by original data."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-diagram (OS Window 프레임 다이어그램)
- 다이어그램 구조:
  - Card title: "LLM Capsule Architecture"
  - Headers (3col): "Internal Environment" | "LLM Capsule" | "External AI Services"
  - Column 1 (Internal): transform container with stacked items
    - Customer Documents
    - Internal Databases
    - RAG Pipelines
    - Admin Console / Policy Engine
  - Column 2 (LLM Capsule): activation section
    - 1. Detection
    - 2. Encapsulation
    - [TRUST BOUNDARY marker]
    - 3. Restoration
  - Column 3 (External AI): default section
    - ChatGPT / OpenAI
    - Claude / Anthropic
    - Gemini / Google
    - Perplexity
    - Any LLM API
  - SVG 화살표: Col1 → Col2 → Col3 (좌→우 흐름), Col3 → Col2 (복원 역방향)
- Data Flow Steps (하단 ds-bullet--number):
  1. Detection → 2. Encapsulation → 3. LLM Processing → 4. Restoration → Business-Ready Output
- 반응형 설계:
  - mobile: 다이어그램 가로 스크롤 (min-width: 600px)
  - tablet: 축소 표시
  - desktop: 전체 표시
- 비고: diagram-builder 에이전트에 위임 필요. 이 spec에서는 구조만 정의. TRUST BOUNDARY는 빨간 점선으로 Col2-Col3 사이에 표시.

---

### 섹션 10: Proof / Performance KPI
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Measured performance on real enterprise workloads"
- 타이틀 강조 키워드: "Measured performance" → `ds-text--brand`
- 헤더 description: "Metrics measured on enterprise documents with 2,200+ character average length across regulated industry workflows."
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white (섹션)
- 배경 bg-image 적용 위치: ds-kpi-band 컴포넌트에 ds-bg--grad-navy 적용 (섹션 2b의 ds-bg--grad-deep과 중복 방지)
- 사용 컴포넌트: ds-kpi-band
- 그리드: 4col (KPI band 내장)
- KPI 항목:
  1. "98.1%" / "Detection Accuracy"
  2. "99.14%" / "Workflow Accuracy"
  3. "100%" / "Structured PII"
  4. "98%" / "Response Similarity"
- 하단 배너: ds-banner--full ds-bg--wave-teal
  - "Enable AI. Protect data. Restore results. Track everything."
  - 추가 라인: "0.12s processing per 2,200-character document"
- 반응형 설계:
  - mobile: KPI 1col
  - tablet: KPI 2col
  - desktop: KPI 4col
- 비고: 섹션 2b KPI와 수치 일부 중복이 있지만, 2b는 Trust 맥락(간략), 10은 Evidence 맥락(상세)으로 구분.

---

### 섹션 11: Final CTA
- 헤더 eyebrow: 없음
- 헤더 타이틀: "See how LLM Capsule enables AI on your enterprise documents"
  - 타이틀 내 "LLM Capsule"은 ds-text--product 적용
- 타이틀 강조 키워드: "enables AI" → `ds-text--brand`
- 헤더 description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements."
- 배경: bg-image (CTA이므로 배경 이미지 사용)
- 배경 bg-image 적용 위치: ds-cta-band 자체 (ds-bg--paint-blue-iridescent)
- 사용 컴포넌트: ds-cta-band
- 버튼:
  - "Request PoV" → ds-btn ds-btn--md (CTA band 내부 스타일)
  - "Talk to an Architect" → ds-btn ds-btn--md
  - "Download Architecture Brief" → ds-btn ds-btn--md
  - "Available on AWS Marketplace" → ds-btn ds-btn--md (외부 링크 버튼)
- Footnote: 없음
- 반응형 설계:
  - mobile: title 36px, 버튼 세로 스택
  - tablet: title 40px, 버튼 가로
  - desktop: title 50px
- 비고: container 밖 전폭 배치. 텍스트 흰색. 오버레이 rgba(0,0,0,0.15).

---

### 섹션 12: FAQ
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Frequently Asked Questions"
- 타이틀 강조 키워드: "Questions" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-ac-list (아코디언 FAQ)
- 그리드: 없음 (아코디언 스택)
- FAQ 항목 (6개) -- 반드시 아코디언 형태:
  1. Q: "How does LLM Capsule protect enterprise data during AI processing?" / A: 원문
  2. Q: "How is LLM Capsule different from data masking and redaction tools?" / A: 원문
  3. Q: "What is the difference between LLM Capsule and prompt security gateways?" / A: 원문
  4. Q: "Where can LLM Capsule be deployed?" / A: 원문
  5. Q: "What is enterprise AI data protection?" / A: 원문
  6. Q: "What certifications does LLM Capsule hold?" / A: 원문
- 첫 번째 FAQ 기본 열림
- 반응형 설계:
  - mobile: 전폭, padding 축소
  - desktop: 전폭
- 비고: FAQ는 ds-ac-card 아코디언으로 구현 (카드 나열 금지). JSON-LD는 head에 이미 포함.

---

## 배경 이미지 배분 (중복 방지)

| 위치 | 배경 이미지 클래스 | 적용 대상 |
|------|-------------------|-----------|
| 섹션 2b KPI band | ds-bg--grad-deep | ds-kpi-band 컴포넌트 |
| 섹션 3 하단 배너 | ds-bg--grad-sky | ds-banner--full |
| 섹션 7 중간 배너 | ds-bg--paint-lavender | ds-banner--full |
| 섹션 10 KPI band | ds-bg--grad-navy | ds-kpi-band 컴포넌트 |
| 섹션 10 하단 배너 | ds-bg--wave-teal (별도 추가 필요하면 ds-bg--green-wave) | ds-banner--full |
| 섹션 11 CTA | ds-bg--paint-blue-iridescent | ds-cta-band |

모두 고유 -- 중복 없음.

---

## Capsule 브랜드 컬러 오버라이드 (CSS 변수)

design-system-capsule.md가 아직 없으므로, B타입 HTML 내 `:root`에서 아래 변수를 오버라이드한다:

```css
:root {
  /* LLM Capsule Brand Colors */
  --ds-color-brand-primary: #1821E8;   /* 인디고 (기존 #3061f2 대체) */
  --ds-color-brand-secondary: #5690D4; /* 블루 */
  --ds-color-brand-accent: #55B45D;    /* 그린 */

  /* Brand gradient override */
  --ds-gradient-brand: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);

  /* ds-text--brand 색상은 brand-primary 사용 */
  /* 기존 brand-purple 대신 capsule indigo 사용 */
}
```

주의: ds-text--brand의 color를 #1821E8로 오버라이드. 기존 #725bea(purple)가 아닌 capsule 인디고 사용.

---

## 누락 컴포넌트 / 사용자 요청 필요 항목

1. **스크린샷 이미지**: 섹션 6(Use Cases) Step Tabs에 4개 스크린샷 필요
   - screenshot-usecase-summarization.png
   - screenshot-usecase-claims.png
   - screenshot-usecase-contract.png
   - screenshot-usecase-report.png
   → 없으면 placeholder(surface-light 배경 + "Screenshot" 텍스트)로 대체

2. **Architecture 다이어그램**: 섹션 9는 diagram-builder 에이전트 위임 필요
   → 이 spec의 다이어그램 구조를 기반으로 생성 요청

3. **Hero 스크린샷**: 현재 Hero text-only로 설계. 제품 스크린샷이 있으면 Hero Screenshot([A-2])으로 업그레이드 가능.

---

## Footer

- 텍스트: "LLM Capsule -- Enterprise AI enablement by CUBIG. Enable AI. Protect data. Restore results."
- 카피라이트: "2025 LLM Capsule by CUBIG. All rights reserved."
- 컴포넌트: 별도 footer 컴포넌트 (ds-section--dark 배경)

---

## JSON-LD / SEO

- A타입의 JSON-LD 3개(Organization, Product, FAQPage) 그대로 유지
- meta 태그 그대로 유지
- canonical: https://llmcapsule.ai/
