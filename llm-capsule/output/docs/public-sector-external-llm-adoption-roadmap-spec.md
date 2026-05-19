# public-sector-external-llm-adoption-roadmap-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_05_roadmap.html`
> Output: `llm-capsule/output/html/public-sector-external-llm-adoption-roadmap-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) -- 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 14 (Hero + TL;DR + Lead + 9 body sections + FAQ + References + Related + CTA) |
| Tone | 실무 가이드, 단계별 절차 안내, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 18분 |
| Category chip | 실무 가이드 |

---

## Global Rules

- All CSS via `var(--ds-*)` tokens only (no hardcoded colors)
- No `!important`, no inline `style` (except CSS variable pass-through)
- eyebrow 허용 (llm-capsule brand v6.2 -- 12px uppercase primary color)
- No `ds-section--light` (all section backgrounds white)
- Responsive 4-step: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
- Container max-width: **1280px** (llm-capsule v6.2)
- Article body max-width: **1080px** (아티클형 페이지 본문 통일)
- `body { word-break: keep-all; overflow-wrap: break-word; }`
- "LLM Capsule" always wrapped in `<span class="ds-text--product">LLM Capsule</span>`
- Font: Inter (`var(--f-display)`) for all headings/body -- Oxanium 폐기 (capsule v6.2)
- Background images: absolute URL from `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
- Mobile (`@media max-width: 767px`): `background-image: none` for all bg image sections
- Section IDs: `id="section-N"` (sequential from hero)
- `<html lang="ko">` -- 한국어 원문
- Capsule brand tokens: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-bg-dark` etc.
- Capsule button: solid ink bg + hover primary (gradient 버튼 폐기)
- Internal links: Framer 상대경로 (`/request-a-demo`, `/resources/learn/...`), `.html` 확장자 금지

---

## SVG Diagrams -- DS Diagram Token Conversion

원본 A타입에는 2개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | N2SF 5단계 절차 + 시나리오 분기 구조 | Section 6 (N2SF 5단계 절차) 하단 | `ds-diagram` -- 분기 트리(공통 단계 -> 분기점 -> 시나리오 A/B 트랙) |
| 2 | 시나리오별 작업 시간 비교 간트차트 | Section 12 (작업 시간 비교) 하단 | `ds-diagram` -- 간트차트형 (M1~M8 타임라인) |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` -> `var(--f-display)`
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- 공통 단계 (보라 계열) -> `--c-primary` + `--c-primary-soft`
- 시나리오 A (녹색 계열, O 등급) -> `--c-teal` + `--c-teal-soft`
- 시나리오 B (앰버 계열, S 등급) -> `--c-amber` + amber soft
- 분기점 (앰버 알림) -> `--c-amber` + amber soft + dashed border

---

## Section-by-Section Specification

---

### Section 1: Hero -- `id="section-hero"`

| Property | Value |
|----------|-------|
| Pattern | Article Hero (ds-article-hero) -- 기존 learn article B-type 패턴 동일 |
| Class | `ds-section ds-section--hero` |
| Background | White only (아티클 히어로 -- 배경 이미지 금지) |
| Container | `ds-article-container` (max-width: 1080px) |

#### Content

| Element | Value |
|---------|-------|
| Breadcrumb | 홈 / 리소스 / Learn / 공공기관 외부 LLM 활용 도입 가이드 |
| Category chip | `ds-badge--primary` "실무 가이드" |
| Reading time | "예상 읽기 시간 18분" |
| Date | "2026년 5월" |
| Title | `공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 분기 로드맵` |
| Title brand keyword | `<span class="ds-text--brand">분기 로드맵</span>` |
| Description (lead) | 외부 상용 LLM을 안전하게 활용하려는 공공기관을 위한 단계별 도입 가이드입니다. N2SF 가이드라인의 5단계 절차에 맞춰 작업 흐름을 정리하고, 활용 범위(O 등급 / S 등급 포함)에 따른 두 트랙의 차이를 다룹니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / 공공기관 외부 LLM 활용 도입 가이드</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">실무 가이드</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 18분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 <span class="ds-text--brand">분기 로드맵</span>
    </h1>
    <p class="ds-article-hero__description">
      외부 상용 LLM을 안전하게 활용하려는 공공기관을 위한 단계별 도입 가이드입니다. N2SF 가이드라인의 5단계 절차에 맞춰 작업 흐름을 정리하고, 활용 범위(O 등급 / S 등급 포함)에 따른 두 트랙의 차이를 다룹니다.
    </p>
  </div>
</section>
```

#### Notes
- padding-top: 100px fixed
- Hero title responsive: 32px / 40px / 48px / 64px (article hero scale)
- No background image

---

### Section 2: TL;DR Banner -- `id="section-tldr"`

| Property | Value |
|----------|-------|
| Pattern | [Q] Banner -- `ds-banner--brand` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

| Element | Value |
|---------|-------|
| Banner label | `TL;DR` (ds-banner__label, font-code uppercase) |
| Banner body | 원문 TL;DR 전문 그대로 사용 (축약 금지) |
| Strong tags | "5단계 절차", "보안대책 수립", "시나리오 A", "시나리오 B" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>공공기관의 외부 LLM 활용 도입은 N2SF 가이드라인이 제시하는 <strong>5단계 절차</strong>(준비 → 위협 식별 → 보안대책 수립 → 구현 → 운영)를 따릅니다. 이 절차 중 <strong>보안대책 수립</strong> 단계에서 활용 범위에 따라 두 갈래로 분기됩니다. <strong>시나리오 A</strong>는 O 등급 정보만 활용하는 모델 2 표준 절차, <strong>시나리오 B</strong>는 S 등급 정보까지 활용하기 위해 보호 레이어를 도입하고 자체 위험평가를 수행하는 경로입니다. 작업 시간만 보면 각각 약 4개월과 6~8개월의 추정이 가능하지만, 실제 도입 일정은 보안성 검토·조달·결재 절차에 따라 크게 달라지므로 본문의 일정 수치는 참고치로만 활용하시기 바랍니다.</p>
    </div>
  </div>
</section>
```

---

### Section 3: 이 글이 다루는 범위 -- `id="section-scope"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + [Q] Banner (callout) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `이 글이 다루는 범위` |
| Title brand keyword | `<span class="ds-text--brand">범위</span>` |

#### Body Content

**단락 1:** "이 글은 공공기관이 **외부 상용 LLM(ChatGPT, Claude, Gemini 등)을 업무에 안전하게 활용**하기 위한 도입 절차를 안내하는 실무 가이드입니다..." (strong: "외부 상용 LLM(ChatGPT, Claude, Gemini 등)을 업무에 안전하게 활용")

**단락 2:** "다음 경우는 이 글의 범위 밖이며, 별도 글을 참고하시기 바랍니다."

**범위 밖 항목 -> ds-bullet--dot** (2항목):
- **sLLM 자체구축 검토 중**: 「sLLM 자체구축, 정말 답일까」 글에서 의사결정 기준을 먼저 정리하시기 바랍니다.
- **외부 AI 전면 차단 검토 중**: 「공공기관 생성형 AI 도입의 세 가지 길」 글에서 차단 방식의 장단점을 다룹니다.

#### Callout -- `ds-banner--brand` (사전 안내)

- banner label: `사전 안내`
- 본문: "**일정 수치에 관한 사전 안내**: 본문에 등장하는 단계별 일정(예: "X주 추정")은 일반적 IT 사업 추진 일정에 기반한 **대략적 참고치**이며, 실제 도입 기간은 기관의 의사결정 속도, 보안성 검토 절차, 조달 방식, 결재 라인, 예산 사이클에 따라 크게 달라집니다. 자세한 지연 요인은 본문 9장에서 별도로 다룹니다."

---

### Section 4: 1. 시작하기 전에 — 흔한 오해 3가지 -- `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + h3 sub-sections |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. 시작하기 전에 — 흔한 오해 3가지` |
| Title brand keyword | `<span class="ds-text--brand">흔한 오해</span>` |

#### Intro

**단락:** "본격적인 단계로 들어가기 전, 외부 LLM 도입 사업에서 자주 발생하는 오해 세 가지를 짚고 가겠습니다."

#### Sub-sections (h3)

**오해 1 — "솔루션부터 보면 된다"**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락: "가장 흔한 실수가 시나리오 정의·정보 분류 없이 솔루션 비교부터 시작하는 것입니다..." (strong: "무엇을 누가 어떻게 활용할 것인가")

**오해 2 — "모델 2만 따르면 자동으로 안전하다"**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락: "모델 2는 보안 통제 항목을 제시하지만, 실제 적용은 기관 환경에 맞춰 조정해야 합니다..."

**오해 3 — "한 번 도입하면 끝이다"**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락: "AI 도입은 1회성 사업이 아닙니다. 사용자 교육, 활용 모니터링, 정책 업데이트, 솔루션 갱신이 지속적으로 필요합니다..."

---

### Section 5: 2. N2SF 가이드라인의 5단계 절차 -- `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [N] Number steps (5단계) + [W] Diagram |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. N2SF 가이드라인의 5단계 절차` |
| Title brand keyword | `<span class="ds-text--brand">5단계 절차</span>` |

#### Body

**단락:** "외부 LLM 활용 도입은 N2SF 가이드라인이 제시하는 5단계 절차를 그대로 따릅니다..."

#### 5단계 절차 -- `ds-bullet--number` (5항목)

1. **준비(Prepare)**: 활용 시나리오 정의, 정보서비스 구성요소 식별
2. **위협 식별(Identify)**: 정보 등급 분류, 「위치-주체-객체」 모델링, 보안위협 도출
3. **보안대책 수립(Select)**: 보안 요구사항 정의, 도입 방식 결정, 솔루션 평가
4. **구현(Implement)**: PoC, 솔루션 도입, 보안 통제 적용
5. **운영(Operate)**: 사용자 교육, 모니터링, 감사, 정기 재평가

**단락 (분기 설명):** "이 5단계 중 첫 두 단계(준비, 위협 식별)는 **모든 도입 시나리오에서 공통**으로 수행됩니다. 세 번째 단계(보안대책 수립)에서 활용 범위에 따라 **시나리오 A(O 등급만 활용)와 시나리오 B(S 등급 포함 활용)로 분기**됩니다." (strong: "모든 도입 시나리오에서 공통", "시나리오 A(O 등급만 활용)와 시나리오 B(S 등급 포함 활용)로 분기")

**도식 1: N2SF 5단계 절차 + 시나리오 분기 구조** -- `ds-diagram` 컴포넌트
- diagram-builder 에이전트 호출하여 DS 토큰 기반으로 재구성
- 분기 트리: 공통 단계(1~2) → 분기점 → 시나리오 A 트랙(3~5, 약 4개월) + 시나리오 B 트랙(3~5, 약 6~8개월)
- figcaption: "도식 1. N2SF 5단계 절차에 매핑된 외부 LLM 활용 도입 로드맵"

---

### Section 6: 3. N2SF 1단계 — 준비: 활용 시나리오 정의 -- `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + [Q] Banner (callout) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. N2SF 1단계 — 준비: 활용 시나리오 정의` |
| Title brand keyword | `<span class="ds-text--brand">활용 시나리오 정의</span>` |

#### Body

**단락 1:** "가장 먼저 해야 할 일은 **"우리 기관이 외부 LLM을 어떤 업무에 어떻게 활용할 것인가"**를 구체적으로 정의하는 것입니다..." (strong: "우리 기관이 외부 LLM을 어떤 업무에 어떻게 활용할 것인가")

**단락 2:** "활용 시나리오 정의서에 포함될 내용입니다."

#### 시나리오 정의서 항목 -- `ds-bullet--check` (6항목)

- **대상 부서·업무**: 어느 부서가 어느 업무에 활용할 것인가
- **활용 유형**: 문서 작성 보조, 요약, 번역, 분석, 검색 등
- **입력 정보 예시**: 어떤 정보를 LLM에 입력하는가 (3~5개 구체적 사례)
- **출력 활용 방식**: LLM 응답을 어떻게 사용하는가
- **기대 효과**: 정성·정량적 목표 (예: 보고서 초안 작성 시간 30% 단축)
- **예상 사용자 규모**: 도입 1차 시 사용자 수, 확대 계획

#### Callout -- `ds-banner--brand` (워크숍 권장)

- banner label: `현장 노트`
- 본문: "시나리오 정의는 정보화담당관실 혼자 하기 어렵습니다. 활용 부서의 실무자 1~2명을 워크숍에 초대해서 함께 작성하시기 바랍니다. 실무자가 참여하지 않은 시나리오는 도입 후 실제 활용으로 이어지지 않습니다."

**마무리 단락:** "이 단계의 작업 시간은 워크숍을 집중적으로 진행할 경우 약 2~3주 정도가 일반적이지만, 부서 간 합의나 결재 절차가 추가되면 더 길어질 수 있습니다."

---

### Section 7: 4. N2SF 2단계 — 위협 식별: 등급 분류와 모델링 -- `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + h3 sub-sections + [L] Checklist + [Q] Banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. N2SF 2단계 — 위협 식별: 등급 분류와 모델링` |
| Title brand keyword | `<span class="ds-text--brand">위협 식별</span>` |

#### Intro

**단락:** "N2SF의 두 번째 단계는 정보 등급 분류와 「위치-주체-객체」 모델링을 통해 보안위협을 식별하는 것입니다. 모델 2 문서는 이 단계의 분석 절차를 구체적으로 제시하고 있으므로, 그대로 따라가시면 됩니다."

#### Sub-sections (h3)

**4.1 정보 등급 분류**
- `ds-section-title-icon` (Layers 아이콘)
- 단락 1: "1단계에서 정의한 입력 정보 예시들을 하나씩 **C/S/O 등급**으로 평가합니다..." (strong: "C/S/O 등급")
- 단락 2: "산출물은 다음과 같습니다."
- **산출물 -> ds-bullet--check** (3항목):
  - **정보자산 등급 분류표**: 각 정보 항목별 C/S/O 분류
  - **분류 근거**: 왜 그 등급으로 분류했는가의 논거
  - **경계 사례 정리**: 등급이 모호한 정보들에 대한 판단 기록
- **Callout -> ds-banner--brand:**
  - banner label: `보수적 시작 원칙`
  - 본문: "등급 분류는 보수적으로 시작해서 점진적으로 조정하는 것이 안전합니다. 처음에는 의심스러운 정보를 모두 S로 분류하고, 운영하면서 명확히 O로 재분류 가능한 정보를 식별하는 방식이 일반적입니다."

**4.2 「위치-주체-객체」 모델링**
- `ds-section-title-icon` (GitBranch 아이콘)
- 단락 1: "등급 분류 결과를 바탕으로 활용 시나리오를 N2SF의 「위치-주체-객체」 모델로 분석합니다. 이 작업은 모델 2 문서의 분석 절차를 그대로 따라가시면 됩니다."
- **모델 항목 -> ds-bullet--check** (3항목):
  - **위치(Domain)**: 정보가 처리·저장되는 영역의 등급 (대부분 기관 전산망 S)
  - **주체(Subject)**: 사용자 단말의 등급 (대부분 업무 단말 S)
  - **객체(Object)**: 외부 LLM 서비스의 등급 (O)
- 단락 2: "이 모델링과 등급 분류 결과를 종합한 **보안 분석 보고서**가 이 단계의 핵심 산출물이며, 「정보 생산·저장」 및 「정보 이동」 보안원칙에 비추어 어떤 보안 통제가 필요한지를 도출합니다." (strong: "보안 분석 보고서")

**마무리 단락:** "두 작업(등급 분류 + 모델링)의 작업 시간은 합쳐서 약 5~7주 정도가 일반적입니다. 다만 정보 자산의 양이 많거나 부서 간 합의가 필요한 경우 더 길어질 수 있습니다."

---

### Section 8: 5. 분기점 — 시나리오 A vs B 결정 -- `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [O] Table (3열 7행) + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 분기점 — 시나리오 A vs B 결정` |
| Title brand keyword | `<span class="ds-text--brand">시나리오 A vs B</span>` |

#### Intro

**단락:** "위협 식별 단계가 끝나면 결정의 순간이 옵니다. **"어느 등급의 정보까지 외부 LLM 활용에 포함할 것인가"**에 따라 두 갈래로 갈라집니다." (strong: "어느 등급의 정보까지 외부 LLM 활용에 포함할 것인가")

#### Comparison Table -- `ds-table--responsive`

3열(구분, 시나리오 A — O 등급만, 시나리오 B — S 등급도 포함) x 7행.

**테이블 스타일:**
- `ds-table` + responsive wrapper (`overflow-x: auto` + scrollbar 숨김)
- th 시나리오 A 컬럼: `--c-teal-soft` 배경
- th 시나리오 B 컬럼: amber soft 배경
- 첫 컬럼(구분): `var(--c-ink)` 배경, white 텍스트

| 구분 | 시나리오 A — O 등급만 | 시나리오 B — S 등급도 포함 |
|------|---------------------|------------------------|
| 활용 가능 정보 | 공개·일반 정보 한정 | 보호 처리 후 민감 정보도 가능 |
| 활용 시나리오 폭 | 좁음 (보도자료, 일반 자료 검색 등) | 넓음 (내부 문서 분석, 정책 검토 등) |
| 보안 솔루션 | 모델 2 준수 AI 연계체계 | 모델 2 + 차등정보보호 보호 레이어 |
| 자체 위험평가 | 표준 절차 | 추가 위험평가 필수 |
| 작업 시간 추정 | 약 4개월 | 약 6~8개월 |
| 적합 기관 | 외부 활용 우선 시작, 빠른 도입 | 업무 효율 극대화, 시간 여유 |

#### 판단 질문 -- `ds-bullet--check` (4항목)

**도입 단락:** "어느 시나리오가 우리 기관에 맞는지는 다음 질문으로 판단할 수 있습니다."

- 활용하고 싶은 업무 중 O 등급 정보로만 가능한 비중이 어느 정도인가?
- S 등급 활용이 가능해질 때 추가 가치가 도입 비용·기간을 정당화하는가?
- 자체 위험평가를 수행할 조직 역량(또는 외부 자문 예산)이 있는가?
- 도입까지 가용 시간이 얼마나 되는가?

**마무리 단락:** "두 시나리오를 **단계적으로 채택**하는 것도 가능합니다. 먼저 시나리오 A로 빠르게 시작해서 운영 노하우를 쌓고, 6~12개월 후 시나리오 B로 확장하는 경로입니다. 보수적이지만 안전한 접근법입니다." (strong: "단계적으로 채택")

---

### Section 9: 6. 시나리오 A 트랙 — O 등급만 활용 -- `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + h3 sub-sections + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 시나리오 A 트랙 — O 등급만 활용` |
| Title brand keyword | `<span class="ds-text--brand">시나리오 A</span>` |

#### Sub-sections (h3)

**6.1 N2SF 3단계 — 보안대책 수립: 모델 2 준수 솔루션 평가**
- `ds-section-title-icon` (Shield 아이콘)
- 도입 단락: "시나리오 A에서 필요한 솔루션은 **모델 2의 AI 연계체계 요건을 충족하는 솔루션**입니다. 평가 기준은 다음과 같습니다." (strong: "모델 2의 AI 연계체계 요건을 충족하는 솔루션")
- **평가 기준 -> ds-bullet--check** (6항목):
  - **인증 및 자격**: 조달청 혁신제품 지정, GS 인증, KISA 신속확인 등
  - **모델 2 통제 항목 충족도**: 21개 보안위협 대응, 50여 개 보안통제 항목 매핑
  - **이용자·단말 인증**: SSO 연동, 다단계 인증, 비인가 접근 차단
  - **콘텐츠 통제**: 보안등급 식별, 비인가 자료유형 차단
  - **운영 관리**: 감사 로그, 사용 모니터링, 이상 행동 탐지
  - **외부 LLM 지원**: 어떤 LLM과 연동 가능한지, 모델 교체 용이성
- 마무리: "RFP에는 위 기준이 모두 명시되어야 하며, 후보 솔루션은 2~3개로 좁혀 비교하는 것이 효율적입니다. 작업 시간은 약 3~4주 정도가 일반적입니다."

**6.2 N2SF 4단계 — 구현: PoC 및 도입**
- `ds-section-title-icon` (CheckCircle 아이콘)
- 도입: "서면 평가만으로는 솔루션의 실제 적합성을 판단하기 어렵습니다. 2~3개 후보 솔루션에 대해 **제한적 환경에서의 PoC(Proof of Concept)**를 수행합니다." (strong: "제한적 환경에서의 PoC(Proof of Concept)")
- 단락: "PoC 검증 항목:"
- **PoC 검증 항목 -> ds-bullet--check** (4항목):
  - **기능 검증**: 정의한 활용 시나리오에서 실제 작동 여부
  - **보안 검증**: 보안 통제 항목들이 실제로 적용되는지 테스트
  - **성능 검증**: 응답 속도, 동시 사용자 처리 등
  - **운영 편의성**: 관리자 UI, 사용자 UI의 직관성
- 마무리: "PoC 작업 시간은 약 3~4주 정도지만, 솔루션 환경 설정과 데이터 준비에 추가 시간이 필요할 수 있습니다."

**6.3 N2SF 5단계 — 운영 체계 구축**
- `ds-section-title-icon` (Settings 아이콘)
- 도입: "솔루션 도입과 함께 운영 체계를 마련합니다."
- **운영 체계 항목 -> ds-bullet--check** (5항목):
  - **사용자 교육**: 활용 가능 범위, 금지 사항, 사고 시 대응 절차
  - **모니터링 체계**: 사용량 추이, 이상 행동 탐지 기준
  - **감사 절차**: 정기 감사 일정, 감사 항목 정의
  - **거버넌스**: 의사결정 체계, 사고 대응 위원회 구성
  - **피드백 채널**: 사용자 피드백 수집, 개선 반영 절차
- 마무리: "작업 시간은 약 3~4주 정도가 일반적이지만, 사용자 교육 범위와 거버넌스 합의 정도에 따라 달라집니다."

---

### Section 10: 7. 시나리오 B 트랙 — S 등급도 활용 -- `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + h3 sub-sections + [L] Checklist + [Q] Banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. 시나리오 B 트랙 — S 등급도 활용` |
| Title brand keyword | `<span class="ds-text--brand">시나리오 B</span>` |

#### Sub-sections (h3)

**7.1 N2SF 3단계 — 보안대책 수립: 보호 레이어 평가 + 자체 위험평가**
- `ds-section-title-icon` (ShieldPlus 아이콘)
- 도입: "시나리오 B의 3단계는 시나리오 A보다 복잡합니다. 두 가지 작업이 함께 진행됩니다."

- **(1) 보호 레이어 솔루션 평가**: "시나리오 A의 모델 2 준수 요건에 더해 **S 등급 정보를 보호 처리할 수 있는 기술**을 평가합니다." (strong: "S 등급 정보를 보호 처리할 수 있는 기술")
- **평가 항목 -> ds-bullet--check** (5항목):
  - **보호 기법의 종류**: 단순 마스킹인가, K-익명성인가, 차등정보보호(DP)인가
  - **보호 기법의 학술적 근거**: 수학적·실험적 검증 자료
  - **재식별 공격 검증**: 보호 처리된 데이터의 재식별 공격 방어 검증
  - **데이터 유용성 유지**: 보호 처리 후 AI 활용 품질(utility) 측정 결과
  - **품질 인증**: 개인정보보호위원회 품질 기준 등 외부 검증
- 단락: "이 기준이 충족되지 않는 솔루션은 시나리오 B에 부적합합니다. 단순 마스킹 기반 솔루션은 N2SF 정합성 논증이 약하므로, S 등급 활용에 권장되지 않습니다."

- **(2) 자체 위험평가 수행**: "모델 2가 다루지 않는 S 등급 활용 시나리오에 대해 기관이 자체적으로 다음을 정리합니다."
- **자체 위험평가 항목 -> ds-bullet--check** (4항목):
  - **위험 식별**: S 정보 보호 처리·외부 전송 과정의 위험 요인
  - **보호 기법의 적정성 논거**: 왜 이 보호 기법이 충분한가
  - **잔여 위험**: 보호 후에도 남는 위험과 그 수용 근거
  - **거버넌스**: 위험 모니터링·재평가 체계

- **Callout -> ds-banner--brand:**
  - banner label: `법무·보안 자문 권장`
  - 본문: "**법무·보안 자문 권장**: 자체 위험평가는 감사 대응에 직접 사용되는 문서이므로, 외부 법무 자문 또는 정보보호 전문가의 감수를 받는 것을 강하게 권장합니다. 감수자 명단이 명시된 평가서는 신뢰도가 결정적으로 달라집니다." (strong: "법무·보안 자문 권장")

- 마무리: "두 작업을 합친 작업 시간은 약 7~10주 정도가 일반적이지만, 외부 자문 일정 확보가 큰 변수입니다."

**7.2 N2SF 4단계 — 구현: PoC + 보호 강도 검증**
- `ds-section-title-icon` (TestTube 아이콘)
- 도입: "시나리오 B의 PoC는 시나리오 A의 기능·보안·성능 검증에 더해 **보호 강도 검증**이 추가됩니다." (strong: "보호 강도 검증")
- **보호 강도 검증 항목 -> ds-bullet--check** (4항목):
  - **보호 처리 정확도**: 민감정보 식별·보호의 정확도
  - **재식별 공격 시뮬레이션**: 보호된 데이터로부터 원본 추론 가능성 시험
  - **AI 활용 품질**: 보호 처리 후 LLM 응답 품질 측정
  - **예외 상황 처리**: 보호 실패 시 차단·알림 정상 작동 확인
- 마무리: "작업 시간은 약 4~6주 정도가 일반적이지만, 보호 강도 검증의 깊이에 따라 더 길어질 수 있습니다."

**7.3 N2SF 5단계 — 운영 + 위험 재평가 체계**
- `ds-section-title-icon` (RefreshCw 아이콘)
- 도입: "시나리오 A의 운영 체계 구축 항목에 더해 다음을 추가합니다."
- **추가 운영 항목 -> ds-bullet--check** (3항목):
  - **보호 정책 정기 검토**: 보호 기법·키워드·임계값의 주기적 갱신
  - **위험 모니터링**: 보호 우회 시도, 비정상 사용 패턴 탐지
  - **위험 재평가 절차**: 6~12개월 주기 자체 위험평가 갱신
- 마무리: "작업 시간은 약 3~4주 정도지만, 위험 재평가 체계 설계에 추가 시간이 필요할 수 있습니다."

---

### Section 11: 8. 시나리오별 작업 시간 비교 -- `id="section-8"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [W] Diagram (간트차트) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `8. 시나리오별 작업 시간 비교` |
| Title brand keyword | `<span class="ds-text--brand">작업 시간 비교</span>` |

#### Body

**단락:** "두 시나리오의 단계별 작업 시간을 간트차트로 비교하면 다음과 같습니다. 다시 강조하지만, 이는 **작업 시간만의 추정치**이며 행정 절차는 포함되어 있지 않습니다." (strong: "작업 시간만의 추정치")

**도식 2: 시나리오별 작업 시간 비교 간트차트** -- `ds-diagram` 컴포넌트
- diagram-builder 에이전트 호출
- 간트차트형: M1~M8 타임라인, 공통 단계(1~2단계) + 시나리오 A(3~5단계, 4개월) + 시나리오 B(3~5단계, 6개월)
- 하단 주석: "위 차트는 작업 시간만 표시한 참고치입니다. 실제 도입 일정은 보안성 검토·조달·결재 등 행정 절차를 포함하면 1.5~2배 가까이 늘어날 수 있습니다. 다음 9장을 참고하시기 바랍니다."
- figcaption: "도식 2. 시나리오 A vs B 작업 시간 비교 (행정 절차 제외)"

---

### Section 12: 9. 실제 도입 기간을 늘리는 행정 절차 -- `id="section-9"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + h3 sub-sections + [Q] Banner + Takeaways list |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `9. 실제 도입 기간을 늘리는 행정 절차` |
| Title brand keyword | `<span class="ds-text--brand">행정 절차</span>` |

#### Intro

**단락:** "앞서 제시한 4개월·6~8개월 추정은 **순수 작업 시간만**을 가정한 수치입니다. 실제 공공기관 도입에서는 다음 행정 절차가 추가되며, 이 절차들이 전체 일정의 절반 이상을 차지하는 경우도 흔합니다." (strong: "순수 작업 시간만")

#### Sub-sections (h3)

**9.1 예산 사이클**
- `ds-section-title-icon` (Calendar 아이콘)
- 단락: "공공기관 예산은 통상 7~8월에 다음 연도 예산이 편성됩니다. 만약 다음 연도부터 본격 도입을 원한다면, 6월 이전에 N2SF 1~2단계(준비, 위협 식별)를 완료해두는 것이 권장됩니다. 이렇게 하면 정확한 예산 산정이 가능하고, 예산 통과 즉시 3단계부터 진행할 수 있습니다. 예산 편성 시점과 도입 시점의 간극으로 인해 사업이 1년 미뤄지는 경우가 흔합니다."

**9.2 보안성 검토**
- `ds-section-title-icon` (Shield 아이콘)
- 단락: "기관 내부 정보보안 책임관의 보안성 검토는 단계별로 여러 번 발생할 수 있습니다. 특히 시나리오 B의 자체 위험평가 결과에 대한 검토는 신중히 이루어지며, 검토에만 4~12주가 소요되는 경우가 있습니다."

**9.3 조달 절차**
- `ds-section-title-icon` (FileText 아이콘)
- 단락: "솔루션 도입은 공공조달 절차를 거쳐야 합니다. 조달청 혁신제품 지정 솔루션을 활용하면 절차가 간소화되지만, 일반 조달의 경우 RFP 공고·평가·계약 체결까지 8~16주가 일반적입니다."

**9.4 결재 라인**
- `ds-section-title-icon` (Users 아이콘)
- 단락: "주요 단계마다 기관장 또는 부기관장 결재가 필요합니다. 단순 절차로 보이지만, 결재 라인의 일정과 추가 보완 요청이 발생하면 각 단계마다 1~3주가 추가될 수 있습니다."

**9.5 외부 자문 일정**
- `ds-section-title-icon` (Briefcase 아이콘)
- 단락: "시나리오 B에서 권장하는 법무·정보보호 외부 자문은 자문기관의 일정에 따라 조정해야 하며, 자문 결과 받기까지 4~8주가 필요한 경우가 있습니다."

#### Callout -- `ds-banner--brand` (현실적 도입 일정 추정)

- banner label: `현실적 도입 일정 추정`
- 본문: "**현실적 도입 일정 추정**: 작업 시간(시나리오 A 4개월 / 시나리오 B 6~8개월)에 행정 절차를 합산하면, 실제 도입 완료까지는 **시나리오 A는 6~10개월, 시나리오 B는 10~14개월** 정도가 보다 현실적인 추정입니다. 사업 계획 수립 시 이 점을 반드시 고려하시기 바랍니다." (strong: "현실적 도입 일정 추정", "시나리오 A는 6~10개월, 시나리오 B는 10~14개월")

#### Takeaways -- `ds-banner--brand` + `ds-bullet--check`

원본의 `takeaways` div를 banner로 변환:
- banner label: `도입 일정을 단축하는 방법`
- **ds-bullet--check** (5항목):
  - N2SF 1~2단계(준비, 위협 식별)를 예산 편성 전에 미리 완료해둡니다
  - 조달청 혁신제품 지정 솔루션을 우선 검토합니다 (조달 절차 간소화)
  - 외부 자문 일정은 사업 시작 시점에 미리 확보해둡니다
  - 1단계 워크숍에 결재 라인의 의사결정자를 함께 참여시킵니다
  - 시나리오 A로 빠르게 도입 후 시나리오 B로 확장하는 단계적 접근을 검토합니다

---

### Section 13: FAQ -- `id="section-faq"`

| Property | Value |
|----------|-------|
| Pattern | [P] FAQ -- `ds-ac-card` (아코디언) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `자주 묻는 질문` |
| Title brand keyword | `<span class="ds-text--brand">질문</span>` |

#### FAQ Items -- `ds-ac-list`

5개 아코디언 카드. 첫 번째만 `ds-ac--open`.

| # | Question | Answer (원문 전문) |
|---|----------|-------------------|
| 1 | 꼭 시나리오 A부터 시작해야 하나요? | 반드시 그렇지는 않습니다. 시나리오 B에서 처음부터 시작하는 것도 가능합니다. 다만 시나리오 B는 자체 위험평가와 보호 강도 검증이 추가되어 도입 기간이 길고, 운영 거버넌스의 부담도 큽니다. 조직 역량이 검증되지 않은 첫 도입 사업에서는 시나리오 A로 시작해 운영 노하우를 쌓은 후 확장하는 것이 안전합니다. |
| 2 | 자체 위험평가는 누가 작성해야 하나요? | 기관 정보보안 책임관이 주관하고, 솔루션 벤더·외부 법무·정보보호 전문가가 자문하는 형태가 일반적입니다. 감사 대응에 직접 사용되는 문서이므로, 외부 감수자 명단을 명시하면 신뢰도가 크게 향상됩니다. |
| 3 | 예산 편성 시점과 도입 일정을 어떻게 맞춰야 하나요? | 공공기관 예산은 통상 7~8월에 다음 연도 예산이 편성됩니다. 만약 다음 연도부터 본격 도입을 원한다면, 6월 이전에 N2SF 1~2단계(준비, 위협 식별)를 완료해두는 것이 권장됩니다. 이렇게 하면 정확한 예산 산정이 가능하고, 예산 통과 즉시 3단계부터 진행할 수 있습니다. |
| 4 | 활용 시나리오를 어떻게 구체화해야 하나요? | "AI로 업무 효율화"라는 추상적 표현이 아니라, 다음과 같이 구체적으로 작성합니다. 예: "기획팀에서 정책 보도자료 초안 작성 시 기존 보도자료 데이터베이스를 참고해 초안 1차 안을 생성하는 데 활용. 월 30건 처리 예상. 활용 정보는 모두 외부 공개된 보도자료(O 등급)." 이 정도의 구체성이 있어야 등급 분류와 솔루션 평가 기준이 명확해집니다. |
| 5 | PoC는 몇 개 솔루션을 대상으로 해야 하나요? | 서면 평가로 2~3개로 좁힌 뒤 모두 PoC를 진행하는 것이 가장 효과적입니다. 1개만 PoC하면 비교가 불가능하고, 4개 이상은 시간·자원 부담이 큽니다. 단, 시나리오 B의 경우 보호 레이어 솔루션 시장이 좁아서 후보가 2개에 그칠 수 있습니다. |

---

### Section 14: 참고 자료 + 저자 정보 -- `id="section-references"`

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

#### References -- `ds-bullet--dot`

3개 참고문헌 (원문 그대로):
1. 국가정보원, 「국가 망 보안체계(N2SF) 보안 가이드라인」, 2024
2. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9
3. 「전자정부법」, 「국가정보보안기본지침」

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 15: Related Articles -- `id="section-related"`

| Property | Value |
|----------|-------|
| Pattern | [G] Card grid -- `ds-card-grid ds-card-grid--3col` |
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
| 1 | 정책 분석 | N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 2 | 정책 분석 | 공공기관 생성형 AI 도입의 세 가지 길 — AI DLP, sLLM, 레이어 방식 비교 | `/resources/learn/public-sector-genai-three-approaches` |
| 3 | 정책 분석 | sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프 | `/resources/learn/sllm-self-hosted-reality-check` |

#### Card Structure

```html
<a href="/resources/learn/[slug]" class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--primary">정책 분석</span>
    <h3 class="ds-card__title">[title]</h3>
    <span class="ds-card__link-text">읽기</span>
  </div>
</a>
```

---

### Section 16: CTA Band -- `id="section-cta"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band -- `ds-cta-band` |
| Background | `var(--c-bg-dark)` (#0f1130, navy) -- capsule CTA band style |
| Background image | `ds-bg--grad-deep` (배경 이미지 1개) |
| Placement | Full-width, container 밖 |

#### Content

| Element | Value |
|---------|-------|
| Title | `도입 검토를 시작하시나요?` |
| Title brand keyword | `<span class="ds-text--brand">시작</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 보호 레이어로, 시나리오 A와 시나리오 B 모두에 대응 가능합니다. 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있으며, 도입 단계별 컨설팅을 함께 제공합니다. |
| Primary CTA | "데모 신청하기" -> `/request-a-demo` |
| CTA style | `btn--invert` (dark bg -> white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      도입 검토를 <span class="ds-text--brand">시작</span>하시나요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 보호 레이어로, 시나리오 A와 시나리오 B 모두에 대응 가능합니다. 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있으며, 도입 단계별 컨설팅을 함께 제공합니다.
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 13개 이상이지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 비교표 섹션과 다이어그램 섹션의 시각 변화로 단조로움 완화.

**배경 이미지 중복 확인:** `ds-bg--grad-deep` 1회만 사용 -- OK.

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
| Table text | Inter | 14px | 400 |
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
| 3 | Scope | Section header + body + dots + callout | Text + banner |
| 4 | Misconceptions (1) | Section header + h3 sub-sections | Text + sub headers |
| 5 | N2SF 5-step (2) | Section header + numbered + diagram | Text + visual |
| 6 | Preparation (3) | Section header + checks + callout | Mixed |
| 7 | Threat ID (4) | Section header + sub-h3 + checks + callout | Mixed |
| 8 | Branch point (5) | Section header + table + checks | Table + checks |
| 9 | Scenario A (6) | Section header + sub-h3 + checks | Sub-h3 + lists |
| 10 | Scenario B (7) | Section header + sub-h3 + checks + callout | Mixed |
| 11 | Time comparison (8) | Section header + body + diagram (gantt) | Text + visual |
| 12 | Admin procedures (9) | Section header + sub-h3 + callout + takeaways | Mixed + banner |
| 13 | FAQ | Section header + accordion | Interactive |
| 14 | References | Section header + dots + author | Text |
| 15 | Related | Card grid 3col | Cards |
| 16 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너, 체크리스트, 번호 스텝, 테이블, 다이어그램, 아코디언, 카드 그리드)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] N2SF 5단계 절차 전문 보존
- [ ] 비교표 3열 7행 전체 데이터 보존
- [ ] 시나리오 A 6.1/6.2/6.3 항목 전문 보존
- [ ] 시나리오 B 7.1/7.2/7.3 항목 전문 보존
- [ ] 행정 절차 9.1~9.5 단락 전문 보존
- [ ] Callout 5개 (사전 안내, 워크숍, 보수적 시작, 법무 자문, 현실적 일정) 전문 보존
- [ ] Takeaways 5항목 전문 보존
- [ ] FAQ 5개 Q&A 전문 보존
- [ ] 참고문헌 3개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존
- [ ] CTA 텍스트·링크 보존
- [ ] SVG 도식 2개는 DS diagram 토큰으로 재구성 (내용 동일)

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 2개 | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.callout` div | `ds-banner--brand` | DS 컴포넌트 매핑 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--check` | DS 컴포넌트 매핑 |
| `.compare-table` | `ds-table` (responsive) | DS 테이블 컴포넌트 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| `<ol>` 순서 리스트 (5단계) | `ds-bullet--number` | DS 번호 스텝 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| Related article URLs (`/learn/...`) | `/resources/learn/...` (Framer 상대경로) | 사이트 라우팅 규칙 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 2개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: N2SF 5단계 절차 + 시나리오 분기 구조

- **Type:** 분기 트리 (Top-down)
- **Top zone (primary-soft, dashed border):** "공통 단계 — N2SF 5단계 중 1~2단계"
  - Box: "N2SF 1단계 — 준비" / "활용 시나리오 정의" / "부서·업무·정보·기대효과" / "참고치: 2~3주"
  - Arrow →
  - Box: "N2SF 2단계 — 위협 식별" / "정보 등급 분류 + 모델링" / "C/S/O 평가, 「위치-주체-객체」" / "참고치: 5~7주"
- **Center pill (amber, dashed border):** "분기점 — 활용 범위 결정 / 어느 등급의 정보를 외부 LLM에 활용할 것인가?"
- **Left branch (teal-soft, dashed border):** "시나리오 A — O 등급만 활용" / "모델 2 표준 절차"
  - Box: "N2SF 3단계 — 보안대책 수립 / 모델 2 준수 솔루션 평가·선정 / 참고치: 3~4주"
  - Box: "N2SF 4단계 — 구현 / PoC 및 도입 / 참고치: 3~4주"
  - Box: "N2SF 5단계 — 운영 / 운영 체계 구축 / 참고치: 3~4주"
  - Footer (filled teal): "작업 시간 추정: 약 4개월 / 행정 절차 별도"
- **Right branch (amber-soft, dashed border):** "시나리오 B — S 등급도 활용" / "보호 레이어 + 자체 위험평가"
  - Box: "N2SF 3단계 — 보안대책 수립 / 보호 레이어 평가 + 자체 위험평가 / 참고치: 7~10주"
  - Box: "N2SF 4단계 — 구현 / PoC + 보호 강도 검증 / 참고치: 4~6주"
  - Box: "N2SF 5단계 — 운영 / 운영 체계 + 위험 재평가 체계 / 참고치: 3~4주"
  - Footer (filled amber): "작업 시간 추정: 약 6~8개월 / 행정 절차 별도"
- **Bottom note (muted):** "※ 본 일정 수치는 일반적 IT 사업 추진 일정 기반의 참고치. 실제 일정은 기관 환경에 따라 크게 변동 가능."

### Diagram 2: 시나리오별 작업 시간 비교 (간트차트)

- **Type:** 가로 간트차트
- **Legend (top):** 공통(primary-soft) / 시나리오 A(teal-soft) / 시나리오 B(amber-soft)
- **X-axis:** M1, M2, M3, M4, M5, M6, M7, M8 (월 단위 눈금)
- **공통 단계 row:**
  - "1단계 — 준비" (M1 첫 절반)
  - "2단계 — 위협 식별" (M1 중반 ~ M2)
- **시나리오 A 그룹:**
  - "3단계 — 솔루션 평가" (M2 후반 ~ M3 초반)
  - "4단계 — PoC" (M3)
  - "5단계 — 운영 구축" (M3 후반 ~ M4)
  - Marker: "작업 시간 4개월 추정"
- **시나리오 B 그룹:**
  - "3단계 — 평가+위험평가" (M2 후반 ~ M4 초반)
  - "4단계 — PoC+보호 검증" (M4 ~ M5)
  - "5단계 — 운영 구축" (M5 후반 ~ M6)
  - Marker: "작업 시간 6개월 추정"
- **Bottom note (muted):** "※ 위 차트는 작업 시간만 표시한 참고치입니다. 실제 도입 일정은 보안성 검토·조달·결재 등 행정 절차를 포함하면 1.5~2배 가까이 늘어날 수 있습니다. 다음 9장을 참고하시기 바랍니다."

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** -- 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** -- Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** -- 코드/라벨 폰트 (Fragment Mono 대신)
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** -- 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** -- `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** -- `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **비교표 반응형** -- mobile에서 `overflow-x: auto` + scrollbar 숨김 (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
9. **SVG 도식 placeholder** -- diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
10. **Related articles URL** -- Framer 상대경로 (`/resources/learn/n2sf-model-2-explained` 등). `.html` 확장자 금지
11. **Meta tags** -- `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
12. **JSON-LD** -- BreadcrumbList + FAQPage schema 포함
13. **word-break: keep-all** -- 한국어 텍스트 줄바꿈을 위해 필수
14. **컬러 라인 꾸밈 금지** -- 카드·배너에 `border-top/left colored` 장식 금지
15. **eyebrow 허용** -- capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
16. **N² 표기** -- N2SF의 위첨자(²)는 HTML 엔티티 `&sup2;` 대신 직접 유니코드 `²` 사용 (U+00B2)
17. **`ds-bullet--check` 아이콘** -- `<span class="ds-bullet__icon"></span>` 비워둘 것 (CSS `::before` 자동 생성, 중복 체크 방지)
18. **균등 그리드** -- `repeat(N, minmax(0, 1fr))` 사용 (1fr 불균등 방지)
19. **9개 본문 섹션 + 다이어그램 2개**가 모두 1080px article-container 안에 들어가므로, 섹션 간 vertical rhythm을 위해 `padding-block`을 일관되게 적용 (예: `var(--ds-space-3xl)` 상하)
20. **FAQ 5번째 항목 마지막 strong 처리** -- 원문 그대로 (보호 레이어 솔루션 시장이 좁아서)
