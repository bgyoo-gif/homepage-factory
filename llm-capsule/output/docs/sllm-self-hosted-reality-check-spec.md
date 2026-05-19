# sllm-self-hosted-reality-check-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_04_sllm.html`
> Output: `llm-capsule/output/html/sllm-self-hosted-reality-check-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) — 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 13 (Hero + TL;DR + Lead + 7 body sections + FAQ + References + Related + CTA) |
| Tone | 정책 분석, 객관 비교, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 18분 |
| Category chip | 정책 분석 |
| URL slug | /resources/learn/sllm-self-hosted-reality-check |

---

## Global Rules

- All CSS via `var(--ds-*)` / capsule tokens only (no hardcoded colors)
- No `!important`, no inline `style` (except CSS variable pass-through)
- eyebrow 허용 (llm-capsule brand v6.2)
- No `ds-section--light` (all section backgrounds white)
- Responsive 4-step: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
- Container max-width: **1280px** (llm-capsule v6.2)
- Article body max-width: **1080px** (아티클형 페이지 본문 통일)
- `body { word-break: keep-all; overflow-wrap: break-word; }`
- "LLM Capsule" always wrapped in `<span class="ds-text--product">LLM Capsule</span>`
- Font: Inter (`var(--f-display)`) for all headings/body — Oxanium 폐기 (capsule v6.2)
- Background images: absolute URL from `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
- Mobile (`@media max-width: 767px`): `background-image: none` for all bg image sections
- Section IDs: `id="section-N"` (sequential from hero)
- `<html lang="ko">` — 한국어 원문
- Capsule brand tokens: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-bg-dark` etc.
- Capsule button: solid ink bg + hover primary (gradient 버튼 폐기)
- Internal links: Framer 상대경로 (`/request-a-demo` 등), `.html` 확장자 금지
- 연속 본문 3단락 이상 금지 — strong 시작 단락은 `ds-bullet--dot`으로 분리 검토

---

## SVG Diagrams — DS Diagram Token Conversion

원본 A타입에는 2개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | sLLM 자체구축 5년 총 비용 구조 (TCO 분해) | Section 5 (진짜 비용) 도입부 | `ds-diagram` — 비용 구조 분해형 (초기 구축비 + 연간 운영비 + 추가 비용 + 5년 누적 TCO) |
| 2 | MMLU-Pro 벤치마크 격차 — 시간에 따라 명확히 확대되는 추세 | Section 6 (성능 격차) 도입부 | `ds-diagram` — 시계열 라인 차트형 (2024 H1 ~ 2028 추이, 점선 영역 = 예측) |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` → `var(--f-display)`
- 컬러 매핑:
  - 비용 / 위험 / 격차 강조 (원본 coral `#d97070` 계열) → `--c-coral` + `--c-coral-soft`
  - 운영비 / 주의 (원본 amber `#d4a850` 계열) → `--c-amber` + `--c-amber-soft`
  - 추가 비용 / 상용 LLM 라인 (원본 purple `#5b4ee5` 계열) → `--c-primary` + `--c-primary-soft`
  - 텍스트: `--c-ink`, `--c-ink-soft`, `--c-muted`
  - 그리드 라인 / divider: `--c-rule`
  - 예측 영역 배경: `--c-bg-soft`

---

## Section-by-Section Specification

---

### Section 1: Hero — `id="section-hero"`

| Property | Value |
|----------|-------|
| Pattern | Article Hero (ds-article-hero) — 기존 learn article B-type 패턴 동일 |
| Class | `ds-section ds-section--hero` |
| Background | White only (아티클 히어로 — 배경 이미지 금지) |
| Container | `ds-article-container` (max-width: 1080px) |

#### Content

| Element | Value |
|---------|-------|
| Breadcrumb | 홈 / 리소스 / Learn / sLLM 자체구축, 정말 답일까 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 18분" |
| Date | "2026년 5월" |
| Title | `sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프` |
| Title brand keyword | `<span class="ds-text--brand">진짜 트레이드오프</span>` |
| Description (lead) | 많은 공공기관이 sLLM 자체구축을 검토하고 있습니다. 그러나 카탈로그가 보여주지 않는 진짜 비용과 성능 격차, 그리고 잘못된 이유로 선택하는 패턴들이 있습니다. 분석가의 관점에서 정리합니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / sLLM 자체구축, 정말 답일까</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">정책 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 18분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 <span class="ds-text--brand">진짜 트레이드오프</span>
    </h1>
    <p class="ds-article-hero__description">
      많은 공공기관이 sLLM 자체구축을 검토하고 있습니다. 그러나 카탈로그가 보여주지 않는 진짜 비용과 성능 격차, 그리고 잘못된 이유로 선택하는 패턴들이 있습니다. 분석가의 관점에서 정리합니다.
    </p>
  </div>
</section>
```

#### Notes
- padding-top: 100px fixed
- Hero title responsive: 32px / 40px / 48px / 64px (article hero scale)
- No background image

---

### Section 2: TL;DR Banner — `id="section-tldr"`

| Property | Value |
|----------|-------|
| Pattern | [Q] Banner — `ds-banner--brand` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

| Element | Value |
|---------|-------|
| Banner label | `TL;DR` (ds-banner__label, font-code uppercase) |
| Banner body | 원문 TL;DR 전문 그대로 사용 (축약 금지) |
| Strong tags 위치 (원문 유지) | "sLLM(small Language Model) 자체구축", "상용 LLM과의 성능 격차가 좁혀지지 않고 오히려 벌어진다" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>
        <strong>sLLM(small Language Model) 자체구축</strong>은 보안 측면에서 가장 강력한 선택이지만, 그 강력함은 큰 대가를 동반합니다. 초기 약 8억 원의 구축비, 연 4억 원 수준의 운영비, 그리고 5년 누적 약 28~38억 원의 총 비용. 더 본질적인 문제는 <strong>상용 LLM과의 성능 격차가 좁혀지지 않고 오히려 벌어진다</strong>는 점입니다. sLLM 자체구축이 정답이 되는 경우는 분명히 존재합니다. 그러나 그 경우는 생각보다 좁고, 많은 기관이 "보안" 또는 "데이터 주권"이라는 일반적 명분으로 잘못된 이유에서 선택하고 있습니다. 이 글은 sLLM 자체구축을 검토하는 기관이 던져야 할 질문들을 정리합니다.
      </p>
    </div>
  </div>
</section>
```

---

### Section 3: Lead (본문 도입) — `id="section-lead"`

| Property | Value |
|----------|-------|
| Pattern | Article body paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

3개 단락 (원문 그대로):
1. "2024년부터 공공기관 정보화 사업에 'sLLM 자체구축' 키워드가 빠르게 늘고 있습니다..."
2. "그러나 이 선택을 진지하게 검토해본 사람이라면 누구나 비슷한 질문에 부딪힙니다. **\"정말 이게 우리에게 맞는 답일까?\"**..."
3. "이 글은 sLLM 자체구축을 \"하지 마라\"고 말하는 글이 아닙니다..."

**주의: 연속 3단락이지만 서사적 흐름이고 strong이 분산되어 있으므로 ds-bullet--dot 분리하지 않고 그대로 유지. 정확히 3개 단락만 배치.**

---

### Section 4: 1. sLLM 자체구축이 매력적으로 보이는 이유 — `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + sub-h3 with `ds-section-title-icon` + body paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. sLLM 자체구축이 매력적으로 보이는 이유` |
| Title brand keyword | `<span class="ds-text--brand">매력적으로 보이는 이유</span>` |
| Description (lead 단락) | "먼저 왜 많은 기관이 sLLM 자체구축에 끌리는지부터 짚어야 합니다. 그 매력에는 정당한 부분이 분명히 있습니다." |

#### Sub-sections (h3)

**1.1 데이터가 외부로 나가지 않는다는 안심감**
- `ds-section-title-icon` (Shield 아이콘)
- 단락 1: "가장 큰 매력은 **완전한 데이터 통제**입니다..." (strong: "완전한 데이터 통제")
- 단락 2: "N2SF 정합성 측면에서도 명확합니다..."

**1.2 데이터 주권과 자산화**
- `ds-section-title-icon` (Database 아이콘)
- 단락 1: "두 번째 매력은 **데이터 주권**입니다..." (strong: "데이터 주권")
- 단락 2: "특정 기관의 미션이 도메인 특화 AI 모델 자체를 구축하는 것이라면..."

**1.3 도메인 특화 가능성**
- `ds-section-title-icon` (Target 아이콘)
- 단락 1: "세 번째 매력은 **파인튜닝 자유도**입니다..." (strong: "파인튜닝 자유도")
- 마무리 단락: "이 세 가지 매력은 모두 정당합니다..."

---

### Section 5: 2. 진짜 비용 — 카탈로그가 보여주지 않는 것 — `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + [W] Diagram + sub-h3 + [L] Checklist + [Q] Banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. 진짜 비용 — 카탈로그가 보여주지 않는 것` |
| Title brand keyword | `<span class="ds-text--brand">진짜 비용</span>` |
| Description | "sLLM 자체구축의 비용 논의는 종종 \"GPU 서버 가격\"으로 시작해서 거기서 끝납니다. 그러나 실제 총소유비용(TCO, Total Cost of Ownership)은 GPU 가격의 몇 배에 달합니다. 5년 운영 기준으로 정리해보면 다음과 같습니다." |

#### Diagram 1: TCO 구조 — `ds-diagram` 컴포넌트

- diagram-builder 에이전트 호출하여 DS 토큰 기반으로 재구성
- 구조: 4개 카테고리 분해형
  - 초기 구축비 — 약 8억 원 (coral): GPU 서버 5~6억 / 부속 인프라 1억 / 초기 인건비 1억
  - 연간 운영비 — 약 4억 원/년 (amber): 전문 인력 2~3억 / 전력·유지보수 5천~1억 / SW 라이선스 수천만
  - 추가 비용 — 비주기적 발생 (primary): 베이스 모델 교체 1~2년마다 2~3억 / GPU 업그레이드 3~5년 주기
  - 5년 누적 총 비용(TCO) 추산 (coral 강조 박스): 최소 약 28억 ~ 최대 약 38억 원
- footer: "비교: 게이트웨이 방식 5년 TCO는 일반적으로 8~12억 원 수준"
- 주석: "※ 위 수치는 일반적 시장 견적 기반 추정이며, 실제 비용은 기관 환경·계약 조건에 따라 변동"
- figcaption: "도식 1. sLLM 자체구축 5년 총 비용 구조"

#### Sub-sections (h3)

**2.1 초기 구축비의 함정**
- `ds-section-title-icon` (Layers 아이콘)
- 도입 단락: "\"GPU 서버 5~6억\"이 전체 초기 비용이라고 생각하는 것은 흔한 오해입니다. 실제로는 GPU 외에도 다음이 필요합니다."
- **추가 비용 항목 → `ds-bullet--dot`** (4항목, 원문 strong 위치 유지):
  - **네트워크·스토리지 인프라**: 고대역폭 네트워크 스위치, NVMe 스토리지, 백업 시스템
  - **전력·냉각 설비**: H100 8장은 약 5kW 이상의 전력을 소비. 전산실 환경 점검과 보강이 필요한 경우 다수
  - **보안 인프라**: 모델 보호·접근 통제·감사 로그 시스템
  - **초기 셋업 인건비**: 모델 선정, 파인튜닝, 인프라 구축에 들어가는 첫 3~6개월의 전담 인력 비용

**2.2 연간 운영비의 본질 — 사람**
- `ds-section-title-icon` (Users 아이콘)
- 도입 단락: "sLLM 자체구축의 진짜 비용은 GPU가 아니라 **사람**입니다..." (strong: "사람")
- **역할 항목 → `ds-bullet--dot`** (3항목, 원문 그대로):
  - MLOps 엔지니어: 모델 배포·운영·모니터링
  - AI 엔지니어: 파인튜닝·성능 개선·새 모델 평가
  - 인프라 엔지니어: GPU 서버 관리, 장애 대응
- 마무리 단락: "최소 2명, 일반적으로 3~4명의 전문 인력이 필요합니다..."

**2.3 보이지 않는 비용 — 베이스 모델 교체**
- `ds-section-title-icon` (RefreshCw 아이콘)
- 도입 단락: "가장 간과되는 비용이 **베이스 모델 교체 부담**입니다..." (strong: "베이스 모델 교체 부담")
- **교체 시 반복 작업 → `ds-bullet--dot`** (4항목, 원문 그대로):
  - 새 베이스 모델에 대한 파인튜닝 재수행 (수주~수개월)
  - 인프라 최적화 재작업
  - 성능 비교·검증
  - 운영 중단 또는 병행 운영 부담
- 마무리 단락: "이 사이클이 1~2년마다 반복되며..."

#### Callout (총 비용 비교) — `ds-banner--brand`

- banner label: `총 비용 비교`
- 본문: "sLLM 자체구축의 5년 TCO는 보수적으로 잡아도 28억 원 이상입니다. 반면 외부 상용 LLM을 게이트웨이 방식으로 활용하는 경우 5년 TCO는 일반적으로 8~12억 원 수준입니다. **약 3배의 비용 차이**가 발생합니다."
- strong: "약 3배의 비용 차이"

---

### Section 6: 3. 성능 격차의 본질 — 따라잡히지 않는 이유 — `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + [W] Diagram + sub-h3 + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. 성능 격차의 본질 — 따라잡히지 않는 이유` |
| Title brand keyword | `<span class="ds-text--brand">따라잡히지 않는 이유</span>` |
| Description | "비용을 감당할 수 있다고 가정해봅시다. 다음 질문은 \"그래서 성능은 어떤가\"입니다. 여기서 sLLM 자체구축의 두 번째 본질적 문제가 드러납니다." |

#### Diagram 2: MMLU-Pro 격차 추세 — `ds-diagram` 컴포넌트

- diagram-builder 에이전트 호출하여 DS 토큰 기반으로 재구성
- 구조: 시계열 라인 차트형 (2024 H1 ~ 2028)
  - Y축: MMLU-Pro 점수 (30~100)
  - X축: 시점 (2024 H1, 2024 H2, 2025 H1, 2025 H2, 2026, 2027, 2028)
  - 상단 라인 (primary, 실선 → 점선): 상용 LLM 최상위 — 68 / 76 / ~85 / ~88 / ~92 / ~94 / ~95
  - 하단 라인 (amber, 실선 → 점선): 자체구축 sLLM 최저등급 7~8B — 32 / 39 / ~45 / ~47 / ~48 / ~48 / ~49
  - 격차 표시 (coral 마커): 36점차 (2024 H1) → 41점차 (2025 H2) → 46점차+ (2028)
  - 예측 영역 배경: bg-soft, "추세 기반 예측" 라벨
- legend:
  - 상용 LLM 최상위 (GPT-4o → GPT-5, Claude 3.5/4 Sonnet 등)
  - 자체구축 sLLM 최저등급 7~8B (Llama 3/3.1/3.3 8B, Qwen 2.5 7B)
  - 점선 영역 = 향후 3년 추세 기반 예측
- 주석 (footer 2줄):
  - "※ 격차는 36점 → 41점 → 46점+로 명확한 확대 추세. 7~8B는 모델 크기 한계로 점진적 정체 예상."
  - "※ 추론 시간 스케일링(o1/extended thinking 등) 본격화로 상용 LLM의 상승 곡선 가속. 2026 이후는 추정."
- figcaption: "도식 2. MMLU-Pro 벤치마크 격차 — 시간에 따라 명확히 확대되는 추세"

#### Sub-sections (h3)

**3.1 왜 격차는 좁혀지지 않고 오히려 벌어지는가**
- `ds-section-title-icon` (TrendingUp 아이콘)
- 단락 1: "많은 sLLM 도입 검토 자료가 \"오픈소스 모델 성능이 빠르게 좋아지고 있다\"는 점을 강조합니다..." (원문 전문)
- 단락 2: "그러나 같은 기간 상용 LLM의 발전 속도는 훨씬 빨랐습니다..." (strong: "격차는 2024년 상반기 36점에서 2025년 하반기 41점으로 오히려 확대")
- 단락 3: "더 본질적인 문제는 향후 3년의 추세입니다..." (strong: "추론 시간 스케일링(inference-time scaling)")
- 단락 4: "그 결과 2028년경 격차는 46점 이상으로 더 벌어질 가능성이 큽니다..."
- 마무리 단락: "격차가 좁혀지지 않는 이유는 단순합니다."
- **이유 항목 → `ds-bullet--dot`** (4항목, 원문 strong 위치 유지):
  - **투자 규모의 차이**: OpenAI, Anthropic, Google은 각각 연 수조 원 단위...
  - **스케일링 법칙(Scaling Law)**: 현재 AI 성능은 모델 크기·데이터·연산량에 비례...
  - **인프라 격차**: 상용 모델은 수만 장의 GPU 클러스터에서 학습...
  - **추론 시간 스케일링 진입 장벽**: 2024년 말부터 본격화된...

**3.2 도메인 특화로 격차를 메울 수 있는가**
- `ds-section-title-icon` (HelpCircle 아이콘)
- 단락 1: "\"우리는 특정 도메인에 특화된 모델이 필요하니까...\"는 주장이 자주 제기됩니다..."
- 단락 2: "현실은 다음과 같습니다."
- **현실 항목 → `ds-bullet--dot`** (3항목, 원문 strong 위치 유지):
  - **일반 능력의 기반**: 도메인 특화 작업도 결국 일반적 언어 이해·추론 능력에 기반...
  - **상용 모델의 컨텍스트 학습**: 최신 상용 LLM은 RAG와 결합하면 도메인 특화 데이터에 즉시 적응...
  - **파인튜닝의 한계**: sLLM을 도메인 파인튜닝하면 분명히 향상되지만, 그 향상 폭이...
- 마무리 단락: "도메인 특화 자체가 매력적인 가치라는 점을 부정하는 것이 아닙니다..."

---

### Section 7: 4. 운영의 무게 — 인력과 책임 — `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + sub-h3 with `ds-section-title-icon` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 운영의 무게 — 인력과 책임` |
| Title brand keyword | `<span class="ds-text--brand">운영의 무게</span>` |
| Description | "비용과 성능에 더해, 세 번째로 자주 간과되는 것이 **운영의 무게**입니다. sLLM은 \"구축하고 끝\"이 아닙니다. 5년 이상 살아있는 시스템으로 유지해야 합니다." (description에는 strong 미사용, 본문에서 표현) |

#### Sub-sections (h3)

**4.1 전담 인력 확보의 어려움**
- `ds-section-title-icon` (UserPlus 아이콘)
- 단락 1: "AI 엔지니어·MLOps 전문가는 현재 가장 수요가 높은 인력군입니다..." (원문 전문)

**4.2 장애와 책임의 무게**
- `ds-section-title-icon` (AlertTriangle 아이콘)
- 단락 1: "자체 시스템 운영에는 책임이 따릅니다..." (원문 전문)

**4.3 모델 evolution 부담**
- `ds-section-title-icon` (RefreshCw 아이콘)
- 단락 1: "앞서 비용 측면에서 다룬 베이스 모델 교체는 운영 측면에서도 큰 부담입니다..." (원문 전문)

---

### Section 8: 5. 그럼에도 sLLM이 정답인 경우 — `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + [L] Checklist (5항목) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 그럼에도 sLLM이 정답인 경우` |
| Title brand keyword | `<span class="ds-text--brand">정답인 경우</span>` |
| Description | "이제 균형을 잡을 차례입니다. sLLM 자체구축이 분명히 정답이 되는 경우가 있습니다. 다음 조건들이 충족된다면 sLLM은 합리적 선택입니다." |

#### Body — `ds-bullet--check` (5항목, 원문 strong 위치 유지)

- **연 IT 예산 100억 원 이상의 대형 기관**: 28~38억 원의 5년 TCO를 부담할 여력이 있고, 전담 AI팀 구성이 가능한 규모
- **외부 LLM 활용이 정책적·법적으로 완전히 금지된 분야**: 일부 안보·국방 관련 기관에서는 외부 AI 활용 자체가 선택지가 아닙니다
- **특정 도메인 모델 보유가 기관 미션인 경우**: 예를 들어 법령 검색 특화 AI를 국가 자산으로 보유하는 것이 기관의 핵심 가치인 경우
- **대규모·고빈도 사용 시나리오**: 일일 수십만 건 이상의 AI 호출이 발생하는 환경에서는 API 종량제 대비 자체 운영이 단가 측면에서 유리해질 수 있습니다
- **장기 자산화 전략이 명확한 경우**: 단순 도구가 아니라 기관의 지속적 자산으로 AI 모델을 보유하려는 전략적 의지가 있는 경우

#### 마무리 단락

"이 다섯 가지 조건 중 다수가 충족된다면, sLLM 자체구축은 충분히 검토할 만한 선택입니다. 그러나 위 조건 중 어느 것에도 해당하지 않는데 sLLM을 선택한다면, 그 선택의 근거를 다시 점검할 필요가 있습니다."

**주의: `ds-bullet--check`의 `ds-bullet__icon`은 비워둘 것 (CSS `::before`가 자동 체크 생성, HTML 텍스트 삽입 금지).**

---

### Section 9: 6. 잘못된 이유로 sLLM을 선택하는 패턴들 — `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + sub-h3 (5개 패턴) with `ds-section-title-icon` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 잘못된 이유로 sLLM을 선택하는 패턴들` |
| Title brand keyword | `<span class="ds-text--brand">잘못된 이유</span>` |
| Description | "현장에서 자주 관찰되는 \"잘못된 선택 이유\"들이 있습니다. 이 중 하나에 해당한다면, sLLM 자체구축 결정을 한 번 더 점검해보시기 바랍니다." |

#### Sub-sections (h3) — 5개 패턴

각 패턴은 `ds-section-title-icon` (AlertCircle 아이콘) + 단락 1개 구성. icon color는 coral 계열로 통일 (경고 의미).

**패턴 1 — "외부 AI는 위험하니까"**
- icon: AlertCircle (coral)
- 단락: "가장 흔한 패턴입니다. \"외부 AI는 위험하다\"는 추상적 우려에서 출발해서..." (원문 전문)

**패턴 2 — "데이터 주권이니까"**
- icon: AlertCircle (coral)
- 단락: "\"우리 데이터를 외부에 보낼 수 없다\"는 명분으로 출발하는 경우입니다..." (원문 전문)

**패턴 3 — "다른 기관이 하니까"**
- icon: AlertCircle (coral)
- 단락: "비슷한 규모·유형의 기관이 sLLM 자체구축을 발표하면 따라가는 경우입니다..." (원문 전문)

**패턴 4 — "예산이 잡혔으니까"**
- icon: AlertCircle (coral)
- 단락: "\"AI 구축 사업\" 예산이 책정되었고, 그 예산을 사용해야 한다는 압박에서..." (원문 전문)

**패턴 5 — "벤더가 추천하니까"**
- icon: AlertCircle (coral)
- 단락: "GPU·인프라·SI 벤더는 자연스럽게 자체구축을 권장합니다..." (원문 전문)

**주의:** 동일 아이콘이 5회 반복되어 단조로움 우려 시 frontend-dev가 sub-아이콘(Eye, Database, Users, DollarSign, Briefcase 등) 변형 적용 가능. 단, 모든 아이콘 색은 coral 계열로 통일하여 경고 톤 유지.

---

### Section 10: 7. sLLM 자체구축 의사결정 체크리스트 — `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + body + [Q] Banner (체크리스트) + 마무리 |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. sLLM 자체구축 의사결정 체크리스트` |
| Title brand keyword | `<span class="ds-text--brand">체크리스트</span>` |
| Description | "sLLM 자체구축을 검토 중이라면, 다음 질문에 답해보시기 바랍니다. 대부분의 답이 \"예\"라면 sLLM은 합리적 선택입니다. 답이 명확하지 않거나 대부분 \"아니오\"라면, 다른 옵션을 함께 검토할 필요가 있습니다." |

#### Body — `ds-banner--brand` (takeaways 변환)

- banner label: `sLLM 자체구축 적합성 체크리스트`
- **체크리스트 → `ds-bullet--check`** (7항목, 원문 그대로):
  - 5년간 28억 원 이상의 TCO를 부담할 예산이 확보되어 있는가
  - 2명 이상의 AI/MLOps 전담 인력을 채용·유지할 계획이 있는가
  - POC를 통해 우리 도메인에서 sLLM 성능이 충분함을 검증했는가
  - 1~2년마다 베이스 모델 교체 비용·작업을 감당할 수 있는가
  - 외부 AI 활용이 우리 기관에 정책적·법적으로 금지되어 있는가
  - AI 모델 자체가 기관의 장기 자산이 되어야 할 미션이 있는가
  - 다른 선택지(게이트웨이, DLP 등)와 객관적으로 비교 분석했는가

**주의: `ds-bullet--check`의 `ds-bullet__icon`은 비워둘 것.**

#### 마무리 단락

"sLLM 자체구축은 매력적이지만 결코 가벼운 선택이 아닙니다. 5년 후 우리 기관이 어떤 상태에 있을지를 가늠하고, 그 길이 정말 우리가 가야 할 길인지를 진지하게 검토하시기 바랍니다."

---

### Section 11: FAQ — `id="section-faq"`

| Property | Value |
|----------|-------|
| Pattern | [P] FAQ — `ds-ac-card` (아코디언) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `자주 묻는 질문` |
| Title brand keyword | `<span class="ds-text--brand">자주 묻는 질문</span>` |

#### FAQ Items — `ds-ac-list`

4개 아코디언 카드. 첫 번째만 `ds-ac--open`.

| # | Question | Answer (원문 전문) |
|---|----------|-------------------|
| 1 | 7B 정도의 더 작은 모델로 시작하면 비용이 크게 줄지 않나요? | GPU 인프라 측면에서는 줄어들 수 있습니다. H100 8장 대신 1~2장으로도 7B 모델 운영이 가능하므로, 초기 구축비를 절반 이하로 낮출 수 있습니다. 다만 운영 인력·전력·교체 부담 같은 비-GPU 비용은 거의 동일하게 발생합니다. 그리고 7B 모델의 성능은 32B 대비 더 큰 격차를 보이므로, 활용 가치 측면에서 재검토가 필요합니다. |
| 2 | sLLM과 게이트웨이 방식을 병행할 수도 있나요? | 가능합니다. 일부 부서는 sLLM 자체구축으로, 다른 부서는 게이트웨이 방식으로 운영하는 하이브리드 구조를 검토하는 기관이 있습니다. 다만 두 시스템의 운영 거버넌스를 동시에 가져가는 부담이 있으므로, 정말 두 방식이 모두 필요한지 검토가 필요합니다. 대부분의 경우 한 방식으로 시작해서 필요시 확장하는 것이 효율적입니다. |
| 3 | 오픈소스 모델 성능이 곧 상용 모델을 따라잡지 않을까요? | 특정 벤치마크에서 일부 오픈소스 모델이 상용 모델과 유사한 점수를 받는 경우가 있습니다. 그러나 실제 업무 활용에서의 종합 성능, 특히 복잡한 추론과 긴 문맥 처리 능력에서는 격차가 여전히 큽니다. 그리고 상용 모델도 멈춰 있지 않습니다. 일시적으로 격차가 좁혀지더라도, 다음 세대 모델이 나오면 격차가 다시 벌어지는 패턴이 반복되고 있습니다. |
| 4 | 자체구축 시 어떤 베이스 모델을 선택해야 하나요? | 현재 시점에서는 Llama 계열, Qwen 계열, 그리고 한국어 특화 모델(Polyglot-Ko 등)이 주요 선택지입니다. 선택은 라이선스 조건, 한국어 성능, 커뮤니티 지원, 기관의 활용 시나리오에 따라 달라집니다. 다만 어느 모델을 선택하든 1~2년 후 더 좋은 모델이 나올 가능성이 매우 높으며, 교체 부담을 처음부터 고려해야 합니다. |

---

### Section 12: 참고 자료 + 저자 정보 — `id="section-references"`

| Property | Value |
|----------|-------|
| Pattern | Article body + `ds-bullet--dot` list |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `참고 자료` |
| Title brand keyword | 없음 |

#### References — `ds-bullet--dot`

6개 참고문헌 (원문 그대로):
1. 국가정보원, 「국가 망 보안체계(N2SF) 보안 가이드라인」, 2024
2. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9
3. Wang et al., "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark", 2024
4. Hugging Face Open LLM Leaderboard, MMLU-Pro 벤치마크 (huggingface.co/spaces/open-llm-leaderboard)
5. Kaplan et al., "Scaling Laws for Neural Language Models", 2020
6. Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), 2022

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 13: Related Articles — `id="section-related"`

| Property | Value |
|----------|-------|
| Pattern | [G] Card grid — `ds-card-grid ds-card-grid--3col` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `함께 읽으면 좋은 글` |
| Title brand keyword | 없음 |

#### Cards (3개)

| # | Tag (badge) | Title | URL |
|---|-------------|-------|-----|
| 1 | 정책 분석 | 공공기관 생성형 AI 도입의 세 가지 길 — AI DLP, sLLM, 레이어 방식 비교 | `/resources/learn/public-sector-genai-three-approaches` |
| 2 | 정책 분석 | N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 3 | 기술 해설 | 단순 비식별화의 한계와 차등정보보호(Differential Privacy)란 무엇인가 | `#` (placeholder, 해당 아티클 미생성 시) |

#### Card Structure

```html
<a href="/resources/learn/..." class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--primary">[tag]</span>
    <h3 class="ds-card__title">[title]</h3>
    <span class="ds-card__link-text">읽기</span>
  </div>
</a>
```

---

### Section 14: CTA Band — `id="section-cta"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band — `ds-cta-band` |
| Background | `var(--c-bg-dark)` (#0f1130, navy) — capsule CTA band style |
| Background image | `ds-bg--grad-deep` (배경 이미지 1개) |
| Placement | Full-width, container 밖 |

#### Content

| Element | Value |
|---------|-------|
| Title | `sLLM 자체구축의 대안을 찾고 계신가요?` |
| Title brand keyword | `<span class="ds-text--brand">대안</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 최신 상용 LLM의 성능과 차등정보보호 기반 보호 레이어를 결합한 솔루션입니다. sLLM 자체구축 대비 5년 TCO를 약 1/3 수준으로 낮추면서도, N2SF 모델 2의 보안 요건을 충족합니다. |
| Primary CTA | "데모 신청하기 →" → `/request-a-demo` |
| CTA style | `btn--invert` (dark bg → white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      sLLM 자체구축의 <span class="ds-text--brand">대안</span>을 찾고 계신가요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 최신 상용 LLM의 성능과 차등정보보호 기반 보호 레이어를 결합한 솔루션입니다. sLLM 자체구축 대비 5년 TCO를 약 1/3 수준으로 낮추면서도, N2SF 모델 2의 보안 요건을 충족합니다.
    </p>
    <div class="ds-cta-band__actions">
      <a href="/request-a-demo" class="ds-btn ds-btn--md btn--invert">데모 신청하기 &rarr;</a>
    </div>
  </div>
</section>
```

#### Notes
- CTA band title responsive: 36px mobile / 40px default / 50px 1440px+
- Text on bg image: white only
- Description color: `var(--ds-overlay-white-70)` or white
- Mobile: background-image: none, fallback to `var(--c-bg-dark)`
- 원본 "데모 신청하기 →" 화살표 유지

---

## Background Image Assignment

| Section | Background |
|---------|-----------|
| Section hero | White only |
| Sections tldr ~ references | White (article body) |
| Section related | White |
| Section CTA | `ds-bg--grad-deep` (배경 이미지) |

**Background image count: 1** (CTA only)

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 12개 이상이지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 도식 2개(TCO 구조, MMLU-Pro 격차)가 본문 중간에서 시각적 변화를 충분히 제공.

**배경 이미지 중복 확인:** `ds-bg--grad-deep` 1회만 사용 — OK.

---

## Typography Summary (Capsule v6.2)

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Article hero h1 | Inter | 32/40/48/64px (responsive) | 700 |
| Article section h2 | Inter | 20/22/24/28px (responsive) | 700 |
| Sub-section h3 (icon title) | Inter | 20px | 600 |
| Body paragraph | Inter | 16px | 400 |
| Banner label | JetBrains Mono | 12px | 500 |
| Badge | Inter | 12px | 600 |
| CTA title | Inter | 36/40/40/50px | 700 |
| CTA description | Inter | 16px | 400 |

---

## Responsive Breakpoints

| Breakpoint | Container Padding | Article Container | Notes |
|------------|-------------------|-------------------|-------|
| 375px (mobile) | 16px | max-width: 100% | |
| 768px (tablet) | 32px | max-width: 720px | |
| 1024px (sm-desktop) | 32px | max-width: 860px | |
| 1280px+ (desktop) | `--s-page` | max-width: 1080px | container-max: 1280px |

---

## Layout Rhythm Check

| # | Section | Pattern | Visual Type |
|---|---------|---------|-------------|
| 1 | Hero | Article hero | Full-width title |
| 2 | TL;DR | Banner (brand tint) | Colored banner |
| 3 | Lead | Paragraphs | Text flow |
| 4 | 매력 (3개) | Section header + 3 sub-h3 | Text + icon titles |
| 5 | 진짜 비용 | Section header + diagram + 3 sub-h3 + callout banner | Diagram + mixed |
| 6 | 성능 격차 | Section header + diagram + 2 sub-h3 + bullets | Diagram + mixed |
| 7 | 운영 무게 | Section header + 3 sub-h3 | Text + icon titles |
| 8 | 정답 경우 | Section header + checklist (5) | Checklist |
| 9 | 잘못된 이유 | Section header + 5 sub-h3 (warning icons) | Repeated icon titles |
| 10 | 체크리스트 | Section header + banner with check bullets (7) | Highlighted banner |
| 11 | FAQ | Section header + accordion | Interactive |
| 12 | References | Section header + dots + author | Text |
| 13 | Related | Card grid 3col | Cards |
| 14 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너, 체크리스트, 다이어그램 2개, 아코디언, 카드 그리드)가 사용되어 시각적 단조로움을 방지한다. 특히 다이어그램 2개가 본문 중반부에 배치되어 reading rhythm을 잘 끊어준다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] 인용부호 `"..."` 표기 유지 (큰따옴표 그대로)
- [ ] 비용 도식: 8억 / 4억 / 28~38억 / 8~12억 수치 정확
- [ ] 성능 도식: MMLU-Pro 7개 시점 수치 정확 (상용/sLLM 각각)
- [ ] 격차 마커: 36점차 → 41점차 → 46점차+ 정확
- [ ] FAQ 4개 Q&A 전문 보존
- [ ] 참고문헌 6개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존
- [ ] CTA 텍스트·링크 보존
- [ ] SVG 도식 2개는 DS diagram 토큰으로 재구성 (내용 동일)
- [ ] 체크리스트 7항목 전문 보존

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 2개 (TCO 구조 + MMLU-Pro 추세) | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.callout` div (총 비용 비교) | `ds-banner--brand` | DS 컴포넌트 매핑 |
| `.takeaways` div (체크리스트) | `ds-banner--brand` + `ds-bullet--check` | DS 컴포넌트 매핑 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 (인프라/역할/교체 작업 등) | `ds-bullet--dot` | DS 불릿 컴포넌트 |
| `<ul>` 조건 리스트 (정답 경우, 체크리스트) | `ds-bullet--check` | DS 체크 불릿 |
| h3 sub-section (각 매력/단점/패턴) | `ds-section-title-icon` (Lucide 아이콘 매핑) | 시각적 단조로움 방지 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 2개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: sLLM 자체구축 5년 총 비용 구조 (TCO 분해)

- **Type:** 4단 비용 구조 분해형 (수직 스택)
- **Section 1 — 초기 구축비 (coral / coral-soft)**
  - Label: "초기 구축비 — 약 8억 원"
  - Stacked bar 또는 3-column 카드:
    - GPU 서버 (H100 8장): 약 5억~6억 원 (가장 큰 비중)
    - 부속 인프라: 1억
    - 초기 인건비: 1억
- **Section 2 — 연간 운영비 (amber / amber-soft)**
  - Label: "연간 운영비 — 약 4억 원 / 년"
  - Stacked bar 또는 3-column:
    - 전문 인력 (MLOps 2명+): 2억~3억
    - 전력·유지보수: 5천만~1억
    - SW 라이선스: 수천만
- **Section 3 — 추가 비용 (primary / primary-soft)**
  - Label: "추가 비용 — 비주기적 발생"
  - 2개 카드:
    - 베이스 모델 교체: 파인튜닝·인프라 재최적화, 1~2년마다 약 2억~3억 원
    - GPU 업그레이드: 3~5년 주기 하드웨어 교체, 감가상각 + 신규 도입비
- **Divider (rule)**
- **Section 4 — TCO 강조 박스 (coral 강조)**
  - Label: "5년 누적 총 비용 (TCO) 추산"
  - 본문: "최소 약 28억 ~ 최대 약 38억 원"
  - 보조: "초기 8억 + (연 운영비 4억 × 5년) + 베이스 모델 교체 2~6억 + GPU 업그레이드 변동분"
- **Footer:**
  - "비교: 게이트웨이 방식 5년 TCO는 일반적으로 8~12억 원 수준"
  - "※ 위 수치는 일반적 시장 견적 기반 추정이며, 실제 비용은 기관 환경·계약 조건에 따라 변동" (muted)

### Diagram 2: MMLU-Pro 격차 추세 (시계열 라인 차트)

- **Type:** 시계열 라인 차트 + 예측 영역
- **Axes:**
  - Y축: MMLU-Pro 점수 (눈금: 30, 40, 50, 60, 70, 80, 90, 100)
  - X축: 7개 시점 (2024 H1, 2024 H2, 2025 H1, 2025 H2, 2026, 2027, 2028)
- **Background:** 2026~2028 영역은 `--c-bg-soft` 배경 + "추세 기반 예측" 라벨 (muted)
- **Line 1 — 상용 LLM 최상위 (primary)**
  - 실선 (2024 H1 ~ 2025 H2): 68 → 76 → ~85 → ~88
  - 점선 (2026 ~ 2028): ~92 → ~94 → ~95
  - 점선 영역 마커는 fill-opacity 0.4 + stroke로 표현
- **Line 2 — 자체구축 sLLM 최저등급 7~8B (amber)**
  - 실선 (2024 H1 ~ 2025 H2): 32 → 39 → ~45 → ~47
  - 점선 (2026 ~ 2028): ~48 → ~48 → ~49 (정체 추세)
- **격차 마커 (coral, dashed vertical lines + pill labels):**
  - 2024 H1: "36점차" (coral-soft pill)
  - 2025 H2: "41점차" (coral-soft pill)
  - 2028: "46점차+" (coral solid pill, 강조)
- **Legend:**
  - 사각형 (primary): 상용 LLM 최상위 (GPT-4o → GPT-5, Claude 3.5/4 Sonnet 등)
  - 사각형 (amber): 자체구축 sLLM 최저등급 7~8B (Llama 3/3.1/3.3 8B, Qwen 2.5 7B)
  - 점선 (primary): 점선 영역 = 향후 3년 추세 기반 예측 (muted)
- **Footer (muted, 2줄):**
  - "※ 격차는 36점 → 41점 → 46점+로 명확한 확대 추세. 7~8B는 모델 크기 한계로 점진적 정체 예상."
  - "※ 추론 시간 스케일링(o1/extended thinking 등) 본격화로 상용 LLM의 상승 곡선 가속. 2026 이후는 추정."

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** — 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** — Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** — 코드/라벨 폰트
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** — 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** — `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** — `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **SVG 도식 placeholder** — diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
9. **Related articles URL** — `/resources/learn/public-sector-genai-three-approaches` 및 `/resources/learn/n2sf-model-2-explained`는 실제 경로. 3번 카드는 `#` placeholder.
10. **Meta tags** — `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
11. **JSON-LD** — Article + BreadcrumbList + FAQPage schema 포함
12. **word-break: keep-all** — 한국어 텍스트 줄바꿈을 위해 필수
13. **컬러 라인 꾸밈 금지** — 카드·배너에 `border-top/left colored` 장식 금지
14. **icon 통일 규칙** — Section 9 (잘못된 이유) sub-h3 아이콘은 모두 coral 계열로 통일 (경고 톤). Section 4 (매력 이유)는 primary 계열 (긍정 톤). Section 6 (성능 격차) sub-h3는 ink 또는 amber.
15. **`ds-bullet--check` 아이콘** — `ds-bullet__icon`은 비워둘 것 (CSS `::before` 자동 생성). HTML 텍스트 삽입 시 체크 중복.
16. **scrollbar 숨김** — `overflow-x: auto` 사용 영역이 있다면 반드시 `scrollbar-width: none` + `::-webkit-scrollbar { display: none;}` 동반.
17. **eyebrow 사용 안 함** — 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
