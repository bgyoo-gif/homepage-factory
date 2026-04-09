# Design Spec: index (LLM Capsule Homepage)
생성일: 2026-04-07
수정일: 2026-04-08
분석한 원본: llm-capsule/input/LLM_Capsule_Website_Updated_v3/index.html
출력 파일: llm-capsule/output/html/index-b-type.html
브랜드: llm-capsule
DS: design-system-core.md + design-system-capsule.md

---

## 전체 구조 요약

- 섹션 수: 12개
- 문서 성격: 설득형 (제품 홈페이지 -- AI enablement data layer)
- 브랜드 컬러: `--ds-color-brand-primary: #1821E8` (인디고), `--ds-color-brand-secondary: #5690D4` (블루), `--ds-color-brand-accent: #55B45D` (그린)
- design-system-capsule.md 사용: CSS 변수 별도 `:root` 오버라이드 불필요 -- DS 파일 토큰 그대로 사용
- 특이사항:
  - 섹션 2.5(5 Capabilities)와 섹션 4(Core Differentiation 3+2) 내용이 겹침 -> 2.5는 요약 카드 그리드, 4는 상세 아코디언으로 차별화
  - Hero 오른쪽에 SVG 목업(LLM Capsule 대시보드 UI) 있음 -> Hero Split([B]) 적용
  - 파트너 목록: Deutsche Telekom, IBK, DB 손해보험, Kyobo, Shin&Kim, Claroty, EUMC (Customers & Deployments) + Naver Cloud (Platforms & Ecosystem)
  - 인증: ISO 27001, ISO 42001, GS Certification
  - "Available on AWS Marketplace" -> 버튼형(ds-btn--secondary) 필수

---

## 페이지 레이아웃 흐름 (시각적 리듬)

| # | 섹션 | 배경 | 컴포넌트 패턴 | 리듬 |
|---|------|------|--------------|------|
| 1 | Hero | white | [B] Hero Split | 분할 레이아웃 |
| 2a | Trust -- Partners | white | [I] Partner grid 마키 | 전폭 마키 |
| 2b | Trust -- KPI | white | [F] KPI band | 배경이미지 밴드 |
| 2c | Trust -- Certs | white | [I-2] Cert grid 마키 | 전폭 마키 |
| 3 | Five Capabilities | white | [G] Card grid 3col + 2col | 카드 그리드 |
| 4 | Industry Proof | white | [J] Feature grid 6col | 아이콘 피처 그리드 |
| 5 | Core 3+2 | white | [S] Accordion list | 아코디언 |
| 6 | Use Cases | white | [U] Step tabs 4개 | 탭 인터랙션 |
| 7 | Problem | white | [O] Table + [Q] Banner | 테이블 + 배너 |
| 8 | Before / After | bg-image | [G] Card grid 2col | 비교 카드 (배경이미지로 리듬 변화) |
| 9 | Architecture | white | [W] Diagram | 다이어그램 |
| 10 | Proof / KPI | white | [F] KPI band + [Q] Banner | 배경이미지 밴드 + 배너 |
| 11 | Final CTA | -- (전폭) | [K] CTA band | 전폭 CTA |
| 12 | FAQ | white | [P] Accordion | 아코디언 |

**리듬 검증:** ds-grid--1 단독 3개 이상 연속 없음. 섹션 8에 배경이미지를 삽입하여 흰색 배경 연속 4개(5~8) 방지.

---

## 섹션별 설계

### 섹션 1: Hero

- 사용 컴포넌트: `ds-hero--split` ([B] Hero Split)
- 배경: white (Hero text-only 계열이므로 배경 이미지 금지)
- 배경 bg-image 적용 위치: 없음

**헤더 구조 (왼쪽 컨텐츠):**
- eyebrow: 없음 (A타입의 "Enterprise AI Adoption" 삭제)
- 타이틀: `Use any AI on your real documents -- without exposing a single line`
- 타이틀 강조 키워드: "without exposing" -> `<span class="ds-text--brand">without exposing</span>`
- 제품명: 텍스트 내 "LLM Capsule" 언급 시 `<span class="ds-text--product">LLM Capsule</span>` 적용
- description 단락 1: "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally -- AI processes the safe version -- then results are restored with your original data. Each organization defines what counts as sensitive."
- description 단락 2: "Companies want to use AI but can't -- sensitive data blocks adoption, masking destroys context, and security teams say no. LLM Capsule removes this barrier in under 0.12 seconds per page." -> `ds-color-text-secondary`
- 태그라인: "Encapsulate. Process. Restore." -> semibold, `ds-color-text-primary`, description 하단

**버튼 (ds-hero__actions):**
- "Request PoV" -> `ds-btn ds-btn--primary ds-btn--md` (href: request-pov.html)
- "Download Architecture Brief" -> `ds-btn ds-btn--secondary ds-btn--md` (href: downloads.html)
- "Talk to an Architect" -> `ds-btn ds-btn--secondary ds-btn--md` (href: architecture.html)
- "Available on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` (외부 링크 버튼형, href: https://aws.amazon.com/marketplace, target: _blank)

**오른쪽 비주얼:**
- `ds-hero__image` 내에 LLM Capsule 대시보드 SVG 목업 배치
- SVG는 A타입 원문 그대로 사용 (560x380 viewBox, 색상 그대로 유지)
- `border-radius: var(--ds-radius-xl)`, `border: var(--ds-border-default)`, `box-shadow: var(--ds-shadow-card)`

**반응형:**
- mobile (375px): 1col 스택 (텍스트 위, SVG 아래), 버튼 세로 스택 full-width, SVG 숨김 또는 100% width
- tablet (768px): 버튼 가로 배치
- sm-desktop (1024px): 2col Split (1:1), description max-width 720px
- desktop (1440px): 2col Split, description max-width 860px

---

### 섹션 2a: Trust -- Partner Logos

- 사용 컴포넌트: `ds-partner-grid` ([I] 마키)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Trusted by enterprises processing sensitive documents`
- 타이틀 강조 키워드: "Trusted" -> `ds-text--brand`
- description: "across finance, insurance, legal, healthcare, and telecom"
- 정렬: center

**파트너 목록** (ds-partner-grid 마키, 이미지 경로: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`):
- Deutsche Telekom -> `partner-deutsche-telekom.avif`
- IBK -> 파일 없으면 텍스트 로고로 대체
- DB 손해보험 -> 파일 없으면 텍스트 로고로 대체
- Kyobo -> `partner-kyobo.avif`
- Shin & Kim -> 파일 없으면 텍스트 로고로 대체
- Claroty -> `partner-claroty.png`
- EUMC -> `partner-eumc.avif`
- Naver Cloud -> `partner-navercloud.avif`

> 이미지가 없는 파트너는 `ds-partner-item__name` 텍스트 표시. 이미지 있는 항목은 `ds-partner-item__logo`.

**JS:** seamless loop -- 항목을 2벌 복제하여 translateX(-50%) 무한 반복

**반응형:**
- mobile: 로고 100px, gap 48px, animation-duration 20s
- desktop: 로고 120px, gap 64px, animation-duration 30s

---

### 섹션 2b: Trust -- KPI Band

- 사용 컴포넌트: `ds-kpi-band` ([F])
- 배경: white (섹션 자체)
- 배경 bg-image 적용 위치: **ds-kpi-band 컴포넌트 자체에** `ds-bg--grad-deep` 적용

**섹션 헤더:** 없음 (KPI band만 독립 배치)

**KPI 항목 (3개 -- 원문 Trust metrics 그대로):**
1. `0.12s` / "Per Page Processing"
2. `100%` / "Restoration Rate"
3. `98%` / "Output Similarity"

**오버레이:** `ds-kpi-band[class*="ds-bg--"]::before { background: rgba(0,0,0,0.35) }`
**텍스트 색상:** 숫자 `ds-color-white`, 라벨 `rgba(255,255,255,0.85)`

**반응형:**
- mobile: 1col, padding 32px 20px
- tablet (768px): 3col
- desktop (1024px+): 3col, padding 48px 40px

---

### 섹션 2c: Trust -- Certifications

- 사용 컴포넌트: `ds-cert-grid` ([I-2] 마키)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더:** 없음 (cert grid만 독립 배치)

**인증 카드 (ds-cert-card):**
- cert-left.png / cert-right.png: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/cert-left.png`, `cert-right.png`
- 인증 목록:
  1. Group: "ISO" / Text: "ISO 27001" / Org: "International Organization for Standardization"
  2. Group: "ISO" / Text: "ISO 42001" / Org: "AI Management System"
  3. Group: "GS" / Text: "GS Certification" / Org: "TTA Korea"
  4. Group: "AWS" / Text: "AWS Marketplace" / Org: "Amazon Web Services"
- 4개 x 2벌 복제로 seamless 마키

> 각 카드는 ds-cert-card 구조: group -> wreath-left / wreath-text / wreath-right -> org -> year

**반응형:**
- mobile: card 170px, animation 25s
- desktop: card 200px, animation 40s

**섹션 2a/2b/2c 통합 배치 방식:**
- 하나의 `<section id="section-2" class="ds-section">` 안에 세 블록을 순서대로 배치
- 섹션 헤더(2a)는 section 최상단에 1회
- 이후 ds-partner-grid -> ds-kpi-band -> ds-cert-grid 순서

---

### 섹션 3: Five Capabilities

- 사용 컴포넌트: `ds-card-grid ds-card-grid--3col` (상단 Core 3개) + `ds-card-grid ds-card-grid--2col` (하단 +1/+2)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Five capabilities that remove every barrier to enterprise AI`
- 타이틀 강조 키워드: "every barrier" -> `ds-text--brand`
- description: "Other tools either block AI usage or destroy document context. LLM Capsule solves both -- here's how."
- 정렬: center

**카드 구성 (ds-card):**

Core 3개 (3col 그리드):
1. Badge: `ds-card__badge--brand` "CORE" / 아이콘: `shield` (Lucide, 28px) / Title: "Your data never leaves" / Description: "Security team blocking AI adoption? With zero exposure, AI only sees safe placeholders. Even if the LLM provider logs everything, zero enterprise data is exposed."
2. Badge: `ds-card__badge--brand` "CORE" / 아이콘: `refresh-cw` / Title: "Get real results back" / Description: "AI outputs auto-restore with your original names, figures, and references -- ready for reports, legal reviews, and client deliverables. No manual reconstruction."
3. Badge: `ds-card__badge--brand` "CORE" / 아이콘: `settings` / Title: "You define what's sensitive" / Description: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, and any business-specific confidential markers -- tailored to your organization."

+1/+2 (2col 그리드, 상단과 gap: ds-space-md):
4. Badge: `ds-card__badge--gray` "+1" / 아이콘: `file-text` / Title: "Documents stay readable to AI" / Description: "Tables, cross-references, and layouts survive the process intact. AI understands full document context -- not broken fragments that produce useless outputs."
5. Badge: `ds-card__badge--gray` "+2" / 아이콘: `shuffle` / Title: "Use any AI model, anytime" / Description: "ChatGPT today, Claude tomorrow, on-premise LLM next month. Switch freely -- no re-engineering, no vendor lock-in. Protection stays consistent across every model."

**하단 배너 (섹션 하단, ds-banner--full):**
- 클래스: `ds-banner--full ds-bg--grad-sky ds-section--bg-img`
- 텍스트: "LLM Capsule is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI -- making enterprise AI adoption possible without compromise."
- "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
- 버튼 3개 (배너 하단, 중앙 정렬):
  - "See Product" -> `ds-btn ds-btn--secondary ds-btn--md` (href: product.html)
  - "View Architecture" -> `ds-btn ds-btn--secondary ds-btn--md` (href: architecture.html)
  - "Read the capsule model" -> `ds-btn ds-btn--secondary ds-btn--sm` (href: what-is-ai-data-capsule.html)
- 텍스트 색상: black (배경 이미지 위 -> 오버레이: rgba(255,255,255,0.45))

**반응형:**
- mobile: 상단 1col, 하단 1col
- tablet (768px): 상단 2col, 하단 2col
- sm-desktop (1024px): 상단 3col, 하단 2col
- desktop (1440px): 상단 3col, 하단 2col

---

### 섹션 4: Industry Proof

- 사용 컴포넌트: `ds-feature-grid` ([J] 아이콘 피처 그리드, 3col)
- 배경: white
- 배경 bg-image 적용 위치: 없음

> 원본(A타입)은 산업 태그 버튼 6개 + "See industry solutions" 링크만 제공한다.
> B타입에서는 각 산업을 아이콘 피처 카드로 표현하되, 원문에 없는 상세 설명을 창작하지 않는다.
> 산업명과 아이콘만 표시하고, 상세는 solutions.html로 유도한다.

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Enabling AI adoption across regulated industries where sensitive data was the blocker`
- 타이틀 강조 키워드: "regulated industries" -> `ds-text--brand`
- description: "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows -- turning blocked projects into production deployments."
- 정렬: center

**피처 그리드 6개 (ds-feature-grid, 3col x 2행):**
1. 아이콘: `landmark` (Lucide) / Label: "Public Sector"
2. 아이콘: `building-2` / Label: "Finance & Insurance"
3. 아이콘: `heart-pulse` / Label: "Healthcare"
4. 아이콘: `scale` / Label: "Legal"
5. 아이콘: `radio-tower` / Label: "Telecom"
6. 아이콘: `shield-check` / Label: "Network Security"

> 각 카드에 description은 넣지 않는다 (원문에 없는 내용 창작 금지). 카드 클릭 시 solutions.html로 이동.

**하단 CTA 링크:**
- "See industry solutions" -> `ds-btn ds-btn--secondary ds-btn--md` (href: solutions.html)
- 중앙 정렬

**반응형:**
- mobile: 2col
- tablet (768px): 3col
- desktop: 3col

---

### 섹션 5: Core Differentiation (3+2 Architecture)

- 사용 컴포넌트: `ds-ac-list` + `ds-ac-card` ([S] Accordion)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Enterprise AI enablement through a 3+2 architecture`
- 타이틀 강조 키워드: "3+2 architecture" -> `ds-text--brand`
- description: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility."
- 정렬: center

**아코디언 항목 5개 (ds-ac-list):**

1. `ds-ac-card ds-ac--open` (기본 열림)
   - Industry dot: `--ds-color-brand-primary` (#1821E8)
   - Industry label: "CORE 1"
   - Title: "Zero Exposure"
   - Meta badges: `ds-badge--error` "Zero Data Leak"
   - Body: "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services." + "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service -- provider logs are safe, raw data never leaves."

2. `ds-ac-card`
   - Industry dot: `--ds-color-brand-primary`
   - Industry label: "CORE 2"
   - Title: "Restoration"
   - Meta badges: `ds-badge--success` "100% Restore"
   - Body: "AI outputs are automatically restored locally -- not abstracted, not anonymized, but fully restored with real business data for immediate use." + "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows -- regulatory reports, legal documents, claim analysis, and internal communications -- without any post-processing step. This eliminates the 'manual review loop' that kills AI ROI."

3. `ds-ac-card`
   - Industry dot: `--ds-color-brand-primary`
   - Industry label: "CORE 3"
   - Title: "Enterprise Context"
   - Meta badges: `ds-badge--purple` "Custom Policy"
   - Body: "Define and control sensitive entities beyond standard PII -- project codes, internal IDs, contract terms, and strategic data specific to your organization." + "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context -- tailored protection for your specific business logic and secrets."

4. `ds-ac-card`
   - Industry dot: `#0e9f8e` (teal -- DS 기본 teal 색상)
   - Industry label: "+1"
   - Title: "Structure-Preserving"
   - Meta badges: `ds-badge--neutral` "Tables & Layouts"
   - Body: "Tables, diagrams, cross-references, and document hierarchy remain intact -- your document layout stays readable to AI throughout the process." + "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained."

5. `ds-ac-card`
   - Industry dot: `#0e9f8e`
   - Industry label: "+2"
   - Title: "Cross-Model Execution"
   - Meta badges: `ds-badge--neutral` "Any LLM"
   - Body: "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly -- no re-engineering, no vendor lock-in." + "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime -- zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform."

**JS:** `toggleAcCard()` 함수 (ds-ac-card 표준 JS)

**반응형:**
- mobile: meta badges 숨김 (`display: none` for `.ds-ac-card__meta`)
- tablet+: meta badges 표시

---

### 섹션 6: AI-Enabled Enterprise Workflows (Use Cases)

- 사용 컴포넌트: `ds-step-tabs` ([U])
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `AI-Enabled Enterprise Workflows`
- 타이틀 강조 키워드: "Enterprise Workflows" -> `ds-text--brand`
- description: "LLM Capsule plugs into the most common enterprise AI workflows -- from document intake to output delivery, one data layer enables AI adoption on real documents."
- 정렬: center

**Step Tabs (4개 탭, data-step-tabs 속성):**

Tab 1 (data-tab="1", ds-step-tabs__tab--active 기본):
- Tab label: "Document Summarization"
- Panel title: "Secure Document Summarization"
- Description: "AI generates executive summaries of sensitive documents -- contracts, reports, filings -- while all confidential elements are replaced with safe placeholders. Restored summaries contain real names, dates, and figures ready for business use."
- Checklist (ds-bullet--check): "Contracts, reports, and filings protected" / "Real names, dates, and figures restored in output"
- Screenshot: placeholder (ds-step-tabs__screenshot, surface-light 배경 + center 텍스트 "Document Summarization")

Tab 2 (data-tab="2"):
- Tab label: "Claims Processing"
- Panel title: "AI Claims Processing"
- Description: "Insurance and financial claims go through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems with real policyholder data."
- Checklist (ds-bullet--check): "Classification, damage assessment, fraud detection enabled" / "Restored outputs feed directly into claims systems"
- Screenshot: placeholder (텍스트 "Claims Processing")

Tab 3 (data-tab="3"):
- Tab label: "Contract Review"
- Panel title: "Confidential Contract Review"
- Description: "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references -- ready for direct integration into deal management systems."
- Checklist (ds-bullet--check): "Key terms, obligations, and risk clauses extracted" / "Real party names, amounts, and references restored"
- Screenshot: placeholder (텍스트 "Contract Review")

Tab 4 (data-tab="4"):
- Tab label: "Report Generation"
- Panel title: "Internal Report Generation"
- Description: "AI drafts internal reports from protected data sources -- performance reviews, audit findings, compliance summaries. Restored reports contain real employee names, department data, and metric values."
- Checklist (ds-bullet--check): "Performance reviews, audit findings, compliance summaries" / "Real employee names, department data, and metrics restored"
- Screenshot: placeholder (텍스트 "Report Generation")

**패널 레이아웃:** 5fr (content) : 7fr (screenshot)

**반응형:**
- mobile: 탭 가로 스크롤 (nowrap, overflow-x: auto), 패널 1col (content 위, screenshot 아래)
- tablet: 탭 wrap, 패널 1col
- sm-desktop (1024px): 패널 5fr:7fr 분할
- desktop: 동일

---

### 섹션 7: Problem -- Enterprise data is never AI-ready

- 사용 컴포넌트: [Q] `ds-banner` + [O] `ds-table--4col` + [Q] `ds-banner--full`
- 배경: white
- 배경 bg-image 적용 위치: ds-banner--full에만 `ds-bg--paint-lavender` 적용

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Enterprise data is never AI-ready by default`
- 타이틀 강조 키워드: "never AI-ready" -> `ds-text--brand`
- description: "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption."
- 정렬: center

**본문 구성 (순서대로):**

1. 본문 단락 (ds-body-m, ds-color-text-secondary):
   - "Organizations cannot leverage AI capabilities without first making their data AI-ready."
   - "Traditional approaches -- masking, redaction, tokenization, and prompt security gateways -- were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end. The result is either blocked AI projects or degraded outputs that require extensive manual reconstruction."
   - "These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value."

2. 비교 테이블 (ds-table-wrap -> ds-table ds-table--4col):
   - 헤더 row: Approach / Method / Limitation / AI Workflow Impact
   - Row 1: Masking & Redaction / Permanently removes data / Destroys context AI needs / Unusable [REDACTED] outputs requiring manual reconstruction
   - Row 2: Prompt Security Gateways / API-level prompt filtering / No document-level protection / No output restoration capability
   - Row 3: Synthetic Data Platforms / Artificial data generation / Training/testing only / Cannot replace real documents in live AI workflows
   - Row 4: Security Team Blocks AI / Manual approval gate / Blocks all AI projects / Projects never demonstrate value before being cancelled

3. LLM Capsule 포지셔닝 배너 (ds-banner--full ds-bg--paint-lavender ds-section--bg-img):
   - 텍스트: "LLM Capsule sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs -- not at the model layer, not at the prompt layer, but at the data layer where it matters."
   - "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
   - 배너 내 링크는 별도 줄에 버튼형으로: "See how it works" -> `ds-btn ds-btn--secondary ds-btn--sm` (href: architecture.html)
   - 텍스트 색상: 배경 이미지 위 -> black (오버레이: rgba(255,255,255,0.45))

**반응형:**
- mobile: 테이블 가로 스크롤 (`overflow-x: auto`)
- desktop: 4col 전체 표시

---

### 섹션 8: Before / After

- 사용 컴포넌트: `ds-card-grid ds-card-grid--2col` + `ds-card` ([G] 2col 카드)
- 배경: white -> **배경 이미지 삽입 (흰색 배경 연속 4개 방지):** `ds-section--bg-img ds-bg--smoke-pink`
- 배경 bg-image 적용 위치: 섹션에 직접 (`ds-section ds-section--bg-img ds-bg--smoke-pink`)
- 오버레이: `rgba(255,255,255,0.45)`
- 텍스트 색상: black (배경 이미지 위 규칙)

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `From blocked AI projects to enabled enterprise AI with usable outputs`
- 타이틀 강조 키워드: "enabled enterprise AI" -> `ds-text--brand`
- description: 없음
- 정렬: center

**카드 2개 (ds-card-grid--2col):**

Left card (ds-card):
- Badge: `ds-card__badge--red` "WITHOUT LLM CAPSULE"
- Title (ds-card__title--sm): "Enterprise AI is blocked or broken"
- Content: `ds-bullet ds-bullet--dot` 6개 항목:
  1. "AI blocked entirely -- security teams reject proposals due to data exposure risk"
  2. "Masking and redaction strip context -- AI outputs are abstracted and unusable for enterprise workflows"
  3. "Manual review workflows persist -- documents require human processing because AI cannot be trusted with real data"
  4. "Document structure destroyed -- flat masking breaks tables, entity relationships, and cross-references"
  5. "Low-quality AI output -- even when AI is permitted, outputs require extensive manual reconstruction to be usable"
  6. "Enterprise AI projects stall in pilot -- no path from proof of concept to production deployment"

Right card (ds-card):
- Badge: `ds-card__badge--brand` "WITH LLM CAPSULE"
- Title (ds-card__title--sm): "AI adoption enabled on real enterprise data"
- Content: `ds-bullet ds-bullet--check` 6개 항목:
  1. "AI enabled on sensitive documents -- the data layer handles protection so teams can focus on AI outcomes"
  2. "Real documents processed with best-in-class LLMs -- ChatGPT, Claude, Gemini, Perplexity, or any LLM API"
  3. "Compliance satisfied -- zero exposure architecture meets enterprise AI governance requirements automatically"
  4. "Restored outputs retain original business context -- real names, real figures, real references restored locally"
  5. "Tables, layouts, cross-references, and document hierarchy fully preserved through structure-preserving processing"
  6. "98% output similarity with zero data exposure -- measured on real enterprise document processing workloads"

**반응형:**
- mobile: 1col (Without 위, With 아래)
- tablet (768px): 2col
- desktop: 2col

---

### 섹션 9: Architecture Preview

- 사용 컴포넌트: `ds-diagram` ([W])
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `A data layer between your enterprise and any LLM`
- 타이틀 강조 키워드: "data layer" -> `ds-text--brand`
- description: "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment -- the trust boundary is never crossed by original data. AI only processes the protected version."
- 정렬: center

**다이어그램 구조 (ds-diagram__window):**
- Card title: "LLM Capsule Architecture"
- 헤더 그라디언트: `--ds-gradient-arch-header` (design-system-capsule.md: `linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%)`)
- 3col 레이아웃: Internal Environment | LLM Capsule (Data Flow) | External AI Services

**Col 1 -- Internal Environment:**
- 섹션 헤더: green accent dot, "INTERNAL ENVIRONMENT"
- 아이템 (ds-diagram__item-box):
  - "Customer Documents" (icon: file-text)
  - "Internal Databases" (icon: database)
  - "RAG Pipelines" (icon: workflow)
  - "Admin Console" (icon: settings)
  - "Policy Engine" (icon: shield-check)
- LLM Capsule 엔진 박스 (ds-diagram__exchange-wrap--brand): "LLM Capsule -- Encapsulation & Restoration"

**Col 2 -- Data Flow (center):**
- 헤더: "HOW DATA FLOWS THROUGH LLM CAPSULE"
- 4단계 flow (정적 표시):
  - Step 1 (Local): Detection -- "Contract with Samsung..." (빨간 강조)
  - Step 2 (Local): Encapsulation -- "Contract with [ORG_A]..." (보라 강조)
  - -> 점선 연결 -> Step 3 (External): LLM Processing -- "The deal with [ORG_A]..."
  - <- 점선 복귀 <- Step 4 (Local): Restoration -- "The deal with Samsung..." (초록 강조)
  - 최종: "Business-Ready Output" (초록 배경)
- TRUST BOUNDARY: 빨간 점선 수직선, "TRUST BOUNDARY" 레이블 (Col2-Col3 사이)

**Col 3 -- External AI Services:**
- 배경: 다크 (ds-diagram__default-inner)
- 아이템:
  - ChatGPT / OpenAI
  - Claude / Anthropic
  - Gemini / Google
  - Perplexity
  - Any LLM API (점선 테두리)

**하단 외부 링크 (버튼형):**
- "View on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` (href: https://aws.amazon.com/marketplace, target: _blank)
- (인라인 텍스트 링크 금지)

**반응형:**
- mobile: `overflow-x: auto`, min-width: 600px
- desktop: 전체 표시

> 다이어그램은 DS 컴포넌트 구조로 HTML/CSS 구현 (diagram-builder 위임 불필요 -- 표준 ds-diagram 클래스로 구현)

---

### 섹션 10: Proof -- Performance Metrics

- 사용 컴포넌트: `ds-kpi-band` ([F]) + `ds-banner--full` ([Q])
- 배경: white (섹션 자체)
- 배경 bg-image 적용 위치:
  - `ds-kpi-band` 자체에 `ds-bg--grad-navy` 적용 (섹션 2b의 `ds-bg--grad-deep`과 중복 방지)
  - `ds-banner--full`에 `ds-bg--wave-teal` 적용 (이하 중복 없음)

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Measured performance on real enterprise document processing workloads`
- 타이틀 강조 키워드: "Measured performance" -> `ds-text--brand`
- description: "These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments."
- 정렬: center

**KPI 항목 4개:**
1. `98.1%` / "Detection Accuracy"
2. `99.14%` / "Workflow Accuracy"
3. `100%` / "Structured PII"
4. `98%` / "Response Similarity"

**하단 배너 (ds-banner--full ds-bg--wave-teal ds-section--bg-img):**
- 텍스트: "Enable AI. Protect data. Restore results. Track everything."
- 추가 라인 (ds-caption): "0.12s processing per 2,200-character document. Tested across finance, healthcare, legal, and public sector workflows"
- 텍스트 색상: black (오버레이 rgba(255,255,255,0.45))

**반응형:**
- mobile: KPI 1col
- tablet: KPI 2col
- desktop: KPI 4col

---

### 섹션 11: Final CTA

- 사용 컴포넌트: `ds-cta-band` ([K])
- 배치: `ds-container` 밖 전폭 배치 (필수)
- 배경 bg-image 적용 위치: `ds-cta-band` 자체에 `ds-bg--paint-blue` 적용
- 오버레이: `rgba(0,0,0,0.15)`
- 텍스트 색상: white

**섹션 헤더:** ds-cta-band 내부 구조 사용

- 타이틀: `See how LLM Capsule enables AI on your enterprise documents`
  - "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
  - 강조 키워드: "enables AI" -> 타이틀은 CTA band이므로 `ds-text--brand` 미적용 (white on dark bg)
- description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements."

**버튼 (ds-cta-band__actions):**
- "Request PoV" -> `ds-btn ds-btn--md` (CTA band 내부 스타일)
- "Talk to an Architect" -> `ds-btn ds-btn--md`
- "Download Architecture Brief" -> `ds-btn ds-btn--md`
- "Available on AWS Marketplace" -> `ds-btn ds-btn--md` (href: https://aws.amazon.com/marketplace, target: _blank)

**CTA Band 타이포 반응형 (필수):**
- mobile (375px): `font-size: var(--ds-text-4xl)` (36px)
- default: `font-size: var(--ds-text-5xl)` (40px)
- desktop (1440px+): `font-size: var(--ds-text-6xl)` (50px)

---

### 섹션 12: FAQ

- 사용 컴포넌트: `ds-ac-list` + `ds-ac-card` ([P] FAQ 아코디언)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Frequently Asked Questions`
- 타이틀 강조 키워드: "Questions" -> `ds-text--brand`
- description: 없음
- 정렬: center

**FAQ 항목 6개 (ds-ac-list, 첫 번째 기본 열림):**

1. `ds-ac-card ds-ac--open`
   - Q: "How does LLM Capsule protect enterprise data during AI processing?"
   - A: "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services -- this is what makes it an AI enablement plugin rather than a monitoring or filtering tool."

2. `ds-ac-card`
   - Q: "How is LLM Capsule different from data masking and redaction tools?"
   - A: "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. AI results from masked documents contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically. This is the fundamental difference between static data anonymization tools and a restorable workflow designed for AI."

3. `ds-ac-card`
   - Q: "What is the difference between LLM Capsule and prompt security gateways?"
   - A: "Prompt security gateways filter at the API level -- they scan prompts for sensitive patterns and block or strip flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward. The two approaches can be complementary, but only a data-layer approach provides end-to-end AI enablement on enterprise data."

4. `ds-ac-card`
   - Q: "Where can LLM Capsule be deployed?"
   - A: "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type. This flexibility is critical for enterprise AI governance -- different data types and regulatory requirements may demand different deployment architectures within a single organization."

5. `ds-ac-card`
   - Q: "What is enterprise AI data protection?"
   - A: "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration -- ensuring zero exposure of original data while enabling full AI workflow adoption. Unlike model-level approaches that block or filter, the data layer plugin transforms data itself to make enterprise AI possible."

6. `ds-ac-card`
   - Q: "What certifications does LLM Capsule hold?"
   - A: "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements."

**최대 너비:** 아코디언 max-width: 860px, margin: 0 auto

---

## 배경 이미지 배분 (중복 방지 검증)

| 위치 | 클래스 | 적용 대상 |
|------|--------|----------|
| 섹션 2b KPI band | `ds-bg--grad-deep` | ds-kpi-band 컴포넌트 |
| 섹션 3 하단 배너 | `ds-bg--grad-sky` | ds-banner--full |
| 섹션 7 포지셔닝 배너 | `ds-bg--paint-lavender` | ds-banner--full |
| 섹션 8 섹션 배경 | `ds-bg--smoke-pink` | ds-section |
| 섹션 10 KPI band | `ds-bg--grad-navy` | ds-kpi-band 컴포넌트 |
| 섹션 10 하단 배너 | `ds-bg--wave-teal` | ds-banner--full |
| 섹션 11 CTA band | `ds-bg--paint-blue` | ds-cta-band |

모두 고유 -- 중복 없음.

---

## Navigation

```html
<nav class="ds-nav">
  <div class="ds-nav__inner">
    <a href="index.html" class="ds-nav__logo">
      <img src="https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif"
           alt="LLM Capsule" height="28">
    </a>
    <ul class="ds-nav__links">
      <li><a href="product.html" class="ds-nav__link">Product</a></li>
      <li><a href="architecture.html" class="ds-nav__link">Architecture</a></li>
      <li><a href="solutions.html" class="ds-nav__link">Solutions</a></li>
      <li><a href="trust.html" class="ds-nav__link">Trust</a></li>
      <li><a href="pricing.html" class="ds-nav__link">Pricing</a></li>
      <li><a href="resources.html" class="ds-nav__link">Resources</a></li>
      <li>
        <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener"
           class="ds-btn ds-btn--secondary ds-btn--sm">AWS Marketplace</a>
      </li>
      <li>
        <a href="request-pov.html" class="ds-btn ds-btn--primary ds-btn--sm">Request PoV</a>
      </li>
    </ul>
  </div>
</nav>
```

---

## Footer

```html
<footer class="ds-section ds-section--dark">
  <div class="ds-container">
    <!-- 5열 그리드: 브랜드 2fr + 메뉴 4열 각 1fr -->
    <div> <!-- Brand column -->
      <span class="ds-text--product">LLM Capsule</span>
      <p>Enterprise AI enablement by CUBIG. Enable AI. Protect data. Restore results.</p>
    </div>
    <!-- Product column -->
    <div>
      <h4>Product</h4>
      <ul>
        <li><a href="product.html">Product</a></li>
        <li><a href="architecture.html">Architecture</a></li>
        <li><a href="trust.html">Trust</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener">AWS Marketplace</a></li>
      </ul>
    </div>
    <!-- Solutions column -->
    <div>
      <h4>Solutions</h4>
      <ul>
        <li><a href="solutions.html">All Solutions</a></li>
      </ul>
    </div>
    <!-- Resources column -->
    <div>
      <h4>Resources</h4>
      <ul>
        <li><a href="resources.html">Resources Hub</a></li>
        <li><a href="learn.html">Learn</a></li>
        <li><a href="glossary.html">Glossary</a></li>
        <li><a href="downloads.html">Downloads</a></li>
        <li><a href="trust-center.html">Trust Center</a></li>
      </ul>
    </div>
    <!-- Company column -->
    <div>
      <h4>Company</h4>
      <ul>
        <li><a href="request-pov.html">Request PoV</a></li>
        <li><a href="https://cubig.ai" target="_blank" rel="noopener">CUBIG</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </div>
  </div>
  <div class="ds-container">
    <p>&copy; 2025 LLM Capsule by CUBIG. All rights reserved.</p>
    <span>Enterprise AI Enablement</span>
  </div>
</footer>
```

---

## JSON-LD / SEO

- A타입의 JSON-LD 3개(Organization, Product, FAQPage) `<head>` 내 그대로 유지
- meta 태그 그대로 유지
- canonical: `https://llmcapsule.ai/`
- Google Fonts: DM Sans + Oxanium (DS 폰트)
- IBM Plex Sans / IBM Plex Mono 제거 -> DM Sans + Oxanium으로 교체

---

## 전역 CSS 체크리스트 (frontend-dev 준수 사항)

- [ ] `body { word-break: keep-all; overflow-wrap: break-word; overflow-x: hidden; }`
- [ ] 섹션 id 필수: `id="section-1"` ~ `id="section-12"`
- [ ] 모든 색상 `var(--ds-)` CSS 변수 사용 (하드코딩 금지)
- [ ] `!important` 금지, 인라인 `style` 금지 (CSS 변수 전달 목적 제외)
- [ ] 주황/오렌지 계열 색상 전면 금지
- [ ] `background` shorthand 금지 -> `background-color` 또는 `background-image`만 사용
- [ ] 배경 이미지 위 텍스트: black 또는 white만
- [ ] eyebrow 전면 금지 (A타입의 eyebrow 요소 모두 삭제)
- [ ] letter-spacing 하드코딩 금지 -> `var(--ds-tracking-*)` 사용
- [ ] 모바일 배경 이미지: `@media (max-width: 767px) { background-image: none; }`
- [ ] 텍스트 최소 명도: neutral-400(#9c9c9c) 이상, `--ds-color-text-muted` 사용 금지
- [ ] description max-width: 100% -> 720px (1024px) -> 860px (1440px)
- [ ] Hero section padding-top: 100px 고정
- [ ] CTA band는 ds-container 밖 전폭 배치
- [ ] 외부 링크 ("Available on AWS Marketplace") 반드시 버튼형(ds-btn--secondary)
- [ ] 배경 이미지 오버레이: rgba(255,255,255,0.45) on light bg / rgba(0,0,0,0.35) on kpi/cta
- [ ] screenshot-frame / ds-hero__image 배경색 fallback: `var(--ds-color-surface-light)`
- [ ] ds-section--light 사용 금지 -- 섹션 배경은 항상 white
- [ ] "LLM Capsule" 제품명에 `ds-text--product` (Oxanium) 적용
- [ ] 일반 텍스트 (h1/h2/데이터 숫자 등)에 Oxanium 사용 금지 -- DM Sans 사용

---

## 누락 항목 / 사용자 요청 필요

1. **Use Cases 스크린샷 (섹션 6):** 4개 탭 각각의 제품 스크린샷 미제공
   -> placeholder (surface-light 배경) 사용
   -> 실제 스크린샷 제공 시 `ds-step-tabs__screenshot img`로 교체

2. **파트너 로고 일부 미존재 (섹션 2a):**
   - IBK, DB 손해보험, Shin & Kim -> `cubig/reference/images/`에 이미지 없음
   -> 텍스트 로고로 대체 (`ds-partner-item__name` 텍스트만 표시)

---

## 수정 이력

### v2 (2026-04-08)
1. **섹션 2b KPI 항목 수정**: 4개 -> 3개. 원본 A타입 Trust 섹션에는 3개 메트릭만 있음 (0.12s, 100%, 98%). "98.1% Detection Accuracy"는 섹션 10(Proof)에만 존재하므로 중복 추가 삭제.
2. **섹션 4 Industry Proof 컴포넌트 변경**: Case Study 3col -> Feature Grid 3col. 원본 A타입은 산업 태그 버튼 6개만 제공하며 산업별 상세 설명이 없다. 원문에 없는 내용을 Case Study 카드로 창작하는 것은 "원문 내용을 임의로 수정하거나 축약하지 않는다" 규칙 위반. Feature Grid(아이콘 + 라벨만)로 변경하여 원문 충실도 유지.
3. **섹션 2c cert 이미지 경로 수정**: `cubig/reference/images/cert-left.png` -> `cubig/reference/graphics/cert-left.png` (실제 파일 위치)
4. **Nav 로고 경로 수정**: `cubig/reference/images/` -> `llm-capsule/reference/images/` (브랜드 전용 이미지는 해당 브랜드 폴더 사용)
5. **Footer 상세 구조 추가**: 원본 A타입의 전체 footer 메뉴 구조를 DS 마크업으로 명시
6. **전역 체크리스트 추가**: ds-section--light 금지, ds-text--product 적용 규칙, Oxanium 사용 금지 규칙 명시
7. **섹션 8 배경 이미지**: `ds-bg--grad-sky` -> `ds-bg--smoke-pink` (섹션 3 배너와 중복 해소)
