# public-sector-chatgpt-input-guide-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_10_chatgpt_input_guide.html`
> Output: `llm-capsule/output/html/public-sector-chatgpt-input-guide-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) -- 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 14 (Hero + TL;DR + Lead + 8 body sections + Takeaways + FAQ + References + Related + CTA) |
| Tone | 실무 가이드, 정책 분석, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 15분 |
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
- "ChatGPT", "Claude", "Gemini" 등 제품명은 인라인 텍스트 유지 (별도 처리 없음)
- Font: Inter (`var(--f-display)`) for all headings/body -- Oxanium 폐기 (capsule v6.2)
- Background images: absolute URL from `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
- Mobile (`@media max-width: 767px`): `background-image: none` for all bg image sections
- Section IDs: `id="section-N"` (sequential from hero)
- `<html lang="ko">` -- 한국어 원문
- Capsule brand tokens: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-bg-dark` etc.
- Capsule button: solid ink bg + hover primary (gradient 버튼 폐기)
- Internal links: Framer 상대경로 (`/request-a-demo` 등), `.html` 확장자 금지
- N2SF 표기: `N<sup>2</sup>SF` (superscript 2) -- 본문 전체 적용

---

## SVG Diagrams -- DS Diagram Token Conversion

원본 A타입에는 인라인 SVG 도식이 **없다**. 다만 시각적 단조로움 방지를 위해 2개의 표(compare-table)와 5가지 사례 카드 영역에서 시각 요소를 확보한다.

| # | 위치 | 변환 방식 |
|---|------|----------|
| Table 1 | Section 2 (N2SF 정보 등급 1분 복습) | `ds-table--responsive` 3열 3행 -- 등급/설명/외부 LLM 활용 |
| Table 2 | Section 6 (수기 마스킹 vs 자동 가명화 비교) | `ds-table--responsive` 3열 5행 -- 구분/수기/자동 |

**테이블 스타일 (capsule v6.2):**
- `ds-table` + responsive wrapper (`overflow-x: auto` + scrollbar 숨김)
- th: `var(--c-ink)` 배경, white 텍스트
- 등급 셀 컬러 토큰 적용:
  - O 등급(Open): `--c-teal` + `--c-teal-soft`
  - S 등급(Sensitive): `--c-amber` + amber soft
  - C 등급(Critical): `--c-coral` + `--c-coral-soft`

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
| Breadcrumb | 홈 / 리소스 / Learn / ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까 |
| Category chip | `ds-badge--primary` "실무 가이드" |
| Reading time | "예상 읽기 시간 15분" |
| Date | "2026년 5월" |
| Title | `ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까` |
| Title brand keyword | `<span class="ds-text--brand">어떤 정보까지</span>` |
| Description (lead) | 외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">실무 가이드</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 15분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      ChatGPT 구독하는 공공기관, 정작 <span class="ds-text--brand">어떤 정보까지</span> 입력해도 될까
    </h1>
    <p class="ds-article-hero__description">
      외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다.
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
| Strong tags | "O 등급(공개)" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>ChatGPT·Claude·Gemini 같은 외부 상용 LLM을 구독한 공공기관이 가장 자주 마주치는 질문은 "정작 어떤 업무 정보까지 입력해도 되는가"입니다. N<sup>2</sup>SF 모델 2는 외부 상용 LLM에 입력 가능한 정보를 <strong>O 등급(공개)</strong>으로 한정하거나, 자체 위험평가 절차를 거치도록 규정합니다. 그러나 실제 직원이 쓰고 싶은 업무 정보 — 회의록, 정책 분석, 인사 자료 — 대부분은 O 등급이 아닙니다. 결과적으로 "구독은 했는데 정작 쓸 수 있는 범위가 좁다"는 상황이 생깁니다. 이 글은 5가지 실무 사례로 등급 판단의 실제 모습을 보여주고, 기관이 선택할 수 있는 세 가지 접근 방식(가이드라인 운영 / 외부 LLM 제한 / 보호 레이어 도입)을 정리합니다. 본문에서 단정적 등급 판단은 하지 않습니다. 최종 판단은 기관의 정보보안 담당자 영역입니다.</p>
    </div>
  </div>
</section>
```

---

### Section 3: 1. 상황 -- "ChatGPT 구독은 했는데 직원들이 잘 안 쓴다" -- `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist (반복 상황) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. 상황 — "ChatGPT 구독은 했는데 직원들이 잘 안 쓴다"` |
| Title brand keyword | `<span class="ds-text--brand">상황</span>` |

#### Body Content

**단락 1:** "2025년 이후 공공기관에서 외부 상용 LLM(ChatGPT·Claude·Gemini 등)을 정식 구독하는 사례가 빠르게 늘었습니다. 나라장터 입찰공고 211건 분석에서도 "외부 LLM 구독·임차" 패턴이 16건(약 8%) 확인됐고, 2025년 1~4월 대비 2026년 1~4월에 +300% 증가했습니다."

**단락 2 (도입):** "그런데 도입 6개월~1년 시점의 기관 담당자가 반복해서 마주치는 상황이 있습니다."

**현장에서 듣는 4가지 반응 -- `ds-bullet--dot` (4항목):**
- "ChatGPT는 깔아뒀는데 정작 직원들이 잘 안 쓰는 것 같다"
- "회의록 요약·정책 분석 같은 정작 쓰고 싶은 업무에는 못 쓴다고 한다"
- "정보보안 부서에서 'O 등급뿐'이라고 안내했더니, 그러면 ChatGPT로 할 수 있는 게 거의 없다는 반응"
- "보도자료 초안만 만들 거면 그냥 검색해서 쓰지 굳이 ChatGPT 구독 비용을 왜 내냐는 말까지 나옴"

**단락 3 (마무리):** "도입은 했지만 활용 폭이 좁아 ROI가 안 보이는 상태입니다. 이 글에서 다루는 질문은 이 상황의 핵심에 있는 것입니다 — <strong>"정작 어떤 정보까지는 입력해도 되는가"</strong>."

---

### Section 4: 2. N2SF 정보 등급 -- 1분 복습 -- `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [O] Table (3열 3행) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. N<sup>2</sup>SF 정보 등급 — 1분 복습` |
| Title brand keyword | `<span class="ds-text--brand">정보 등급</span>` |

#### Body Content

**단락 1:** "국정원 N2SF(국가 네트워크 보안 프레임워크) 가이드라인은 정보를 등급에 따라 분류하고, 등급별로 활용 가능한 환경을 다르게 규정합니다."

#### Comparison Table -- `ds-table--responsive`

3열(등급, 설명, 외부 상용 LLM 활용) × 3행.

**테이블 스타일:**
- 등급 컬럼: 컬러 강조 적용 (O=teal, S=amber, C=coral)
- th: `var(--c-ink)` 배경, white 텍스트

| 등급 | 설명 | 외부 상용 LLM 활용 |
|------|------|--------------------|
| **O (Open)** | 외부 공개 가능 정보. 보도자료·법령·공시 자료 등 | 입력 가능 |
| **S (Sensitive)** | 외부 공개 시 업무·이해관계에 영향 있는 정보. 내부 검토·정책 초안·인사 자료 등 | 원칙적 불가, 자체 위험평가 시 가능 |
| **C (Critical)** | 외부 유출 시 중대한 영향. 개인정보·국가 기밀 등 | 불가 |

**단락 2:** "모델 2(외부 LLM 활용 모델)에서 외부 상용 LLM에 입력 가능한 정보는 원칙적으로 <strong>O 등급</strong>으로 한정됩니다. S 등급 정보를 입력하려면 기관 자체의 위험평가 절차를 거쳐야 합니다."

**단락 3 (관련 글 안내):** "자세한 설명은 별도 글로 정리되어 있습니다."
- **관련 글 -> `ds-bullet--dot`** (2항목, 인라인 링크 형태):
  - <a href="/resources/learn/what-is-n2sf">N2SF란 무엇인가 — 공공기관 보안의 새 패러다임</a>
  - <a href="/resources/learn/n2sf-model-2-explained">N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까</a>

---

### Section 5: 3. 5가지 실무 사례 -- 등급 판단의 실제 모습 -- `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + 5개 사례 카드 + [L] Checklist (판단 포인트) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. 5가지 실무 사례 — 등급 판단의 실제 모습` |
| Title brand keyword | `<span class="ds-text--brand">5가지 실무 사례</span>` |

#### Body Content (도입)

**단락 1:** "정의는 위와 같지만, 실제 업무 현장에서 "이 자료가 O인지 S인지" 판단하는 일은 단순하지 않습니다. 5가지 흔한 사례로 살펴봅니다."

**단락 2 (미리 말해둘 점):** "한 가지 미리 말해둘 것: 아래 사례에서 "이건 O다"·"이건 S다"라는 단정적 판단은 하지 않습니다. 같은 종류의 문서라도 내용·맥락·기관에 따라 등급이 달라지기 때문입니다. 사례의 목적은 <strong>판단 자체가 얼마나 어려운 일인지</strong>를 보여주는 데 있습니다."

#### Sub-sections (h3) -- 5개 사례

각 사례는 다음 구조 동일:
- `ds-section-title-icon` (각 사례별 다른 Lucide 아이콘)
- 시나리오 단락
- "판단 포인트:" 도입 단락
- `ds-bullet--check` (판단 포인트 항목들)
- 마무리 분석 단락

**사례 1 — 부서 회의록 요약 요청**
- 아이콘: `FileText`
- 시나리오 단락: "직원이 어제 진행한 부서 회의록을 ChatGPT에 입력하면서 "이 내용을 3줄로 요약해줘"라고 요청합니다. 가장 흔한 활용 시나리오입니다."
- 판단 포인트 4항목 (`ds-bullet--check`):
  - 회의록에 외부 비공개 사업 계획이 포함되어 있는가
  - 특정 외부 기관·인물에 대한 평가가 포함되어 있는가
  - 아직 결재 전인 의사결정 사항이 포함되어 있는가
  - 회의 참석자의 이름·직위가 식별 가능한 형태로 포함되어 있는가
- 마무리 단락: "일반적으로 부서 내부 회의록은 외부 공개를 전제로 만들어지지 않습니다. 즉 O 등급보다는 S 등급에 가깝게 분류되는 경향이 있습니다. 다만 회의 주제가 외부 공개된 정책 설명회 같은 것이면 다를 수 있습니다."

**사례 2 — 보도자료 초안 작성 요청**
- 아이콘: `Megaphone`
- 시나리오 단락: "홍보 담당자가 다음 주 발표할 신규 정책의 보도자료 초안을 작성해달라고 ChatGPT에 요청합니다. 정책 내용을 입력합니다."
- 판단 포인트 3항목 (`ds-bullet--check`):
  - 발표 전까지 정책 내용 자체가 외부 비공개인가
  - 정책 결정 배경·내부 검토 결과가 포함되어 있는가
  - 보도자료에 포함될 최종 문구만 있는가, 그 외 내부 자료도 함께 있는가
- 마무리 단락: "발표 후의 보도자료는 O 등급으로 볼 여지가 있지만, 발표 전 단계의 초안에는 아직 외부에 공개되지 않은 정책 내용이 포함되어 있을 가능성이 있습니다. 같은 "보도자료"라는 이름이 붙어도 시점에 따라 등급이 다를 수 있다는 점이 이 사례의 핵심입니다."

**사례 3 — 정책 분석 자료 작성 지원**
- 아이콘: `Search`
- 시나리오 단락: "기획 담당자가 특정 사회 이슈에 대한 정책 대안을 검토하면서, 내부에서 정리한 분석 자료를 ChatGPT에 입력하고 "다른 시각의 분석도 추가해줘"라고 요청합니다."
- 판단 포인트 3항목 (`ds-bullet--check`):
  - 분석 자료 안에 다른 기관·이해관계자에 대한 평가가 포함되어 있는가
  - 아직 결정되지 않은 정책 대안이 포함되어 있는가
  - 외부 공개된 통계·자료만 인용한 것인가, 내부 분석이 포함된 것인가
- 마무리 단락: "내부에서 작성한 정책 분석은 일반적으로 O 등급으로 보기 어려운 경우가 많습니다. 외부에 공개된 통계만 인용해 작성한 경우에도, 그 통계의 조합·해석·결론 도출이 내부 분석이라면 등급 판단이 모호해집니다."

**사례 4 — 인사 평가 자료 검토**
- 아이콘: `Users`
- 시나리오 단락: "인사 담당자가 직원 평가 결과를 ChatGPT에 입력하고 "평가 코멘트의 일관성을 점검해줘"라고 요청합니다."
- 판단 포인트 3항목 (`ds-bullet--check`):
  - 직원 이름·소속이 식별 가능한 형태로 포함되어 있는가
  - 평가 결과 자체가 개인정보에 해당하는가
  - 이름·소속을 제거하면 식별 불가능해지는가, 다른 정보로 결합 식별이 가능한가
- 마무리 단락: "개인정보가 포함된 인사 자료는 C 등급에 해당할 가능성이 큽니다. 이름·소속을 제거해도, 평가 코멘트의 구체적 내용으로 인해 결합 식별이 가능한 경우가 있습니다. 즉 단순 마스킹만으로는 충분하지 않은 영역입니다."

**사례 5 — 외부 공개 통계 분석**
- 아이콘: `BarChart3`
- 시나리오 단락: "연구 담당자가 통계청·국토부 등에서 공개한 데이터를 다운로드하여 ChatGPT에 입력하고 "이 데이터에서 의미 있는 트렌드를 찾아줘"라고 요청합니다."
- 판단 포인트 3항목 (`ds-bullet--check`):
  - 데이터 자체가 외부 공개 상태인가
  - 입력하면서 추가한 가공·조합·맥락이 내부 분석에 해당하는가
  - 요청 자체(어떤 트렌드를 찾으려고 하는지)가 내부 의도를 드러내는가
- 마무리 단락: "원본 데이터는 O 등급에 해당할 가능성이 큽니다. 다만 입력하는 과정에서 추가하는 맥락이나 요청 자체가 내부 의도를 드러내는 경우, 등급 판단이 다시 모호해질 수 있습니다."

---

### Section 6: 4. 사례에서 드러나는 세 가지 어려움 -- `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + sub-section structure + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 사례에서 드러나는 세 가지 어려움` |
| Title brand keyword | `<span class="ds-text--brand">세 가지 어려움</span>` |

#### Body Content (도입)

**단락 1:** "위 5가지 사례를 보면 등급 판단이 어려운 이유 세 가지가 드러납니다."

#### Sub-sections (h3)

**4.1 같은 종류의 문서라도 내용에 따라 등급이 다름**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락: ""회의록"이라는 이름이 붙어도 회의 주제와 내용에 따라 O와 S를 오갈 수 있습니다. "보도자료"도 발표 전인지 후인지에 따라 다릅니다. 결국 <strong>문서 이름이 아니라 내용 단위로 매번 판단해야 한다</strong>는 의미입니다."

**4.2 결합 식별 가능성을 일일이 따지기 어려움**
- `ds-section-title-icon` (Link2 아이콘)
- 단락: "이름·소속을 제거해도, 다른 정보와 결합하면 식별 가능한 경우가 있습니다. 인사 평가의 평가 코멘트, 회의 발언자의 직위·말투 등이 그 예입니다. <strong>단순 키워드 마스킹만으로는 충분하지 않은 경우가 많습니다.</strong>"

**4.3 매번 판단할 시간이 없음**
- `ds-section-title-icon` (Clock 아이콘)
- 단락 1: "가장 현실적인 문제입니다. 직원 한 명이 하루에 ChatGPT에 몇 번이나 정보를 입력하는지를 생각하면, 매번 정보보안 담당자에게 등급 확인을 받는 것은 불가능합니다. 결과적으로 다음 둘 중 하나가 됩니다."
- **결과 분기 -> `ds-bullet--dot`** (2항목):
  - 직원이 자체 판단으로 입력 → 부정확한 판단으로 보안 사고 위험
  - 직원이 안전하게 가려고 거의 입력 안 함 → 활용도 저하, ChatGPT 구독이 사실상 사장됨

---

### Section 7: 5. 수기 마스킹 -- 현재 다수 기관의 대응 방식 -- `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [N] Number steps (작동 방식) + [L] Checklist (한계) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 수기 마스킹 — 현재 다수 기관의 대응 방식` |
| Title brand keyword | `<span class="ds-text--brand">수기 마스킹</span>` |

#### Body Content

**단락 1:** "위 어려움을 우회하기 위해 다수 기관에서 사용하는 방식이 <strong>수기 마스킹</strong>입니다. 직원이 ChatGPT에 입력하기 전에 민감 정보(이름·기관명·금액·수치 등)를 직접 가명 처리하는 방식입니다. 수도권 한 자치구의 사례가 이 접근의 대표적 예로 알려져 있습니다."

**단락 2 (도입):** "수기 마스킹의 작동 방식:"

**작동 방식 -> `ds-bullet--number`** (3항목):
1. 직원이 입력 전 문서를 살펴보고 민감 부분을 [A], [B] 같은 익명 표기로 바꿈
2. 예: "김민수 과장의 6월 평가 결과" → "[A]의 [B] 평가 결과"
3. ChatGPT 응답을 받은 후, 익명 표기를 원본으로 복원해서 활용

**단락 3 (도입):** "이 방식의 한계도 분명합니다."

**한계 -> `ds-bullet--dot`** (4항목, 각 strong + 설명):
- <strong>직원 부담</strong>: 입력할 때마다 직접 마스킹하는 데 시간이 듦. 활용 빈도가 낮아짐
- <strong>일관성 부족</strong>: 직원마다 마스킹 기준이 달라 누락·오류 발생
- <strong>결합 식별 위험</strong>: 이름만 가렸을 뿐 다른 정보로 식별 가능한 경우가 남음
- <strong>관리 어려움</strong>: 어떤 직원이 어떤 정보를 어떻게 마스킹해서 입력했는지 추적 불가

**단락 4 (마무리):** "수기 마스킹은 "지금 당장 어떻게든 외부 LLM을 쓰기 위한" 단기 대응책에 가깝습니다. 장기 운영을 전제하면 다른 접근이 필요합니다."

---

### Section 8: 6. 또 다른 접근 -- 분류 부담을 줄이는 방향 -- `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [O] Table (3열 5행, 비교표) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 또 다른 접근 — 분류 부담을 줄이는 방향` |
| Title brand keyword | `<span class="ds-text--brand">분류 부담</span>` |

#### Body Content

**단락 1:** "앞서 살펴본 어려움의 공통점은 <strong>"입력하기 전에 매번 등급을 판단해야 한다"</strong>는 전제에 있습니다. 이 전제를 다르게 두는 접근도 있습니다."

**단락 2:** "즉 등급 분류 자체를 직원에게 맡기지 않고, <strong>입력되는 정보를 자동으로 가명 처리한 뒤 외부 LLM에 보내는 보호 레이어</strong>를 두는 방식입니다. 응답은 내부망에서 원본으로 복원됩니다. 이 접근의 특징은 다음과 같습니다."

#### Comparison Table -- `ds-table--responsive`

3열(구분, 수기 마스킹, 자동 가명화 보호 레이어) × 5행.

**테이블 스타일:**
- C열(자동 가명화) 강조: `--c-primary-soft` 배경색 tint
- th: `var(--c-ink)` 배경, white 텍스트
- C열 th: `--c-primary` 배경

| 구분 | 수기 마스킹 | 자동 가명화 보호 레이어 |
|------|------------|-----------------------|
| 가명 처리 주체 | 직원이 매번 직접 | 시스템이 자동 처리 |
| 일관성 | 직원마다 다름 | 일관된 규칙 적용 |
| 결합 식별 대응 | 키워드 마스킹 수준 | 차등정보보호(DP) 등 수학적 기법 적용 가능 |
| 외부로 나가는 데이터 | 일부 익명 처리된 원문 | 가명 처리된 형태로만 전송, 원문 미전송 |
| 응답 복원 | 직원이 수기로 | 내부망에서 자동 복원 |

**단락 3:** "이 접근이 N2SF 모델 2 관점에서 의미 있는 이유는 "외부로 나가는 정보가 원문이 아니다"라는 점에 있습니다. N2SF 가이드라인이 다루는 핵심 우려가 "원문·민감 정보의 외부 전송"이라면, 가명화된 형태로만 외부에 나가는 구조는 이 우려를 직접적으로 줄입니다."

**단락 4:** "다만 이 접근에도 전제는 있습니다. 자동 가명화의 정확도, 결합 식별 가능성에 대한 대응 수준, 내부망 복원의 안전성 등이 기관 자체 위험평가 과정에서 검증되어야 합니다. "자동이니까 안전하다"는 단정이 아니라, "어떤 방식으로 처리되는지" 자체가 평가 대상입니다."

---

### Section 9: 7. 기관이 선택할 수 있는 세 가지 옵션 -- `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + 3개 옵션 sub-section (장점/한계 paired) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. 기관이 선택할 수 있는 세 가지 옵션` |
| Title brand keyword | `<span class="ds-text--brand">세 가지 옵션</span>` |

#### Body Content (도입)

**단락 1:** "외부 LLM 구독 후 활용 폭 문제에 대한 현실적인 선택지는 세 가지로 정리됩니다."

#### Sub-sections (h3) -- 3개 옵션

각 옵션 동일 구조:
- `ds-section-title-icon` (옵션별 아이콘)
- 정의 단락
- 장점 단락 (strong 라벨 + 본문)
- 한계 단락 (strong 라벨 + 본문)

**옵션 A — 가이드라인·교육 운영**
- 아이콘: `BookOpen`
- 정의 단락: "등급별 입력 가능 정보 가이드라인을 만들고 직원 교육을 통해 자체 판단력을 높이는 방식입니다. 현재 다수 기관이 채택하는 접근입니다."
- 장점·한계 -> `ds-bullet--dot` (2항목):
  - <strong>장점</strong>: 별도 솔루션 도입 비용 없음. 정보보안 부서의 통제 영역 안에 있음.
  - <strong>한계</strong>: 매번 직원 판단에 의존하므로 사고 위험 잔존. 교육·갱신 부담 지속. 활용도가 직원 개인의 적극성에 따라 크게 갈림.

**옵션 B — 외부 LLM 제한적 사용**
- 아이콘: `ShieldOff`
- 정의 단락: "외부 LLM은 보도자료 작성·간단한 검색 보조 같은 명백히 O 등급인 업무로만 한정하고, 그 외 업무는 외부 LLM을 사용하지 않는 방식입니다."
- 장점·한계 -> `ds-bullet--dot` (2항목):
  - <strong>장점</strong>: 보안 위험 최소화. 명확한 정책으로 직원 혼란 적음.
  - <strong>한계</strong>: 구독 ROI가 낮음. 정작 활용 폭이 좁다는 도입 후 평가가 나올 가능성. 직원의 비공식 우회 사용(개인 ChatGPT 사용 등) 위험.

**옵션 C — 자동 가명화 보호 레이어 도입**
- 아이콘: `ShieldCheck`
- 정의 단락: "구독 중인 외부 LLM 앞단에 자동 가명화 보호 레이어를 두어, 직원이 입력하는 정보를 자동으로 처리해 외부에 보내는 방식입니다."
- 장점·한계 -> `ds-bullet--dot` (2항목):
  - <strong>장점</strong>: 직원 판단 부담 감소. 활용 폭 확장 가능. 외부로 나가는 데이터의 위험 수준 통제.
  - <strong>한계</strong>: 추가 도입 비용 발생. 보호 레이어 자체의 정확도·안전성에 대한 자체 위험평가 필요. 기관의 보안 정책과 통합 운영을 위한 설계·검토 시간 필요.

**마무리 단락:** "어느 옵션을 선택할지는 기관의 활용 우선순위·보안 정책·예산에 따라 달라집니다. 한 가지만 단정적으로 권장할 수는 없지만, 다음 질문은 도움이 됩니다."

---

### Section 10: 8. 기관 점검을 위한 질문 -- `id="section-8"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist (6 질문) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `8. 기관 점검을 위한 질문` |
| Title brand keyword | `<span class="ds-text--brand">점검을 위한 질문</span>` |

#### Body Content

**단락 1:** "외부 LLM 구독 후 활용 상황을 점검하는 데 도움이 되는 질문들입니다."

**점검 질문 -> `ds-bullet--check`** (6항목):
- 도입 후 6개월~1년 동안 직원의 실제 활용 빈도는 어떻게 변했는가
- 활용 빈도가 낮다면, 그 이유가 "기능이 부족해서"인지 "입력 가능한 정보가 좁아서"인지 어느 쪽인가
- 직원이 외부 LLM을 우회 사용(개인 계정 사용 등)하는 사례가 있는가
- 정보보안 부서가 직원의 입력 행위를 추적·관리할 수 있는 체계가 있는가
- 2026 경영평가에서 "AI 윤리·정보보안 가이드라인을 고려한 기획 수준" 평가에 우리 도입 사례를 어떻게 설명할 것인가
- 지금 도입 방식이 1~2년 뒤 운영 단계에서 보안 사고나 평가 미달 위험이 있는가

**마무리 단락:** "이 질문들의 답이 명확하지 않다면 현재 도입 방식의 재검토가 필요할 수 있습니다."

---

### Section 11: Takeaways Banner -- `id="section-takeaways"`

| Property | Value |
|----------|-------|
| Pattern | [Q] Banner -- `ds-banner--brand` + `ds-bullet--dot` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

원문의 `takeaways` div를 banner로 변환:

- banner label: `핵심 정리`
- **ds-bullet--dot** (7항목):
  - 외부 LLM 구독 후 가장 자주 마주치는 질문은 "어떤 정보까지 입력해도 되는가"
  - N2SF 모델 2는 원칙적으로 O 등급으로 한정하고, S 등급은 자체 위험평가 후 가능
  - 실제 업무 정보는 회의록·정책 분석·인사 자료 등 S 등급에 가까운 경우가 많음
  - "문서 종류"가 아닌 "내용 단위"로 매번 판단해야 하므로 직원 자체 판단에 한계
  - 수기 마스킹은 단기 대응책으로 가능하나 일관성·결합 식별·관리 측면에서 한계
  - 자동 가명화 보호 레이어는 또 다른 접근이며, 기관 자체 위험평가 필요
  - 현실적 선택지는 가이드라인 운영 / 제한적 사용 / 보호 레이어 도입의 세 가지

---

### Section 12: FAQ -- `id="section-faq"`

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

6개 아코디언 카드. 첫 번째만 `ds-ac--open`.

| # | Question | Answer (원문 전문) |
|---|----------|-------------------|
| 1 | O 등급·S 등급·C 등급은 누가 분류하나요? | 기관의 정보보안 담당 부서가 정합니다. N2SF 가이드라인은 기본 원칙을 제시하지만, 구체적인 분류 기준은 각 기관의 정보보안 정책으로 정해집니다. 같은 종류의 문서라도 기관에 따라 등급이 다를 수 있습니다. |
| 2 | "자체 위험평가"라는 건 구체적으로 어떻게 하는 건가요? | N2SF 가이드라인은 S 등급 정보를 외부 상용 LLM에 입력할 경우 기관 자체의 위험평가 절차를 거치도록 규정합니다. 일반적으로 다음 항목을 평가합니다: 외부 전송되는 정보의 실제 형태, 결합 식별 가능성, 외부 LLM 제공자의 데이터 처리 정책, 사고 발생 시 대응 체계. 평가 결과를 문서화하여 정보보안 책임자가 승인하는 형태로 운영됩니다. |
| 3 | ChatGPT의 "데이터 학습 거부 설정"을 켜면 안전한가요? | ChatGPT의 학습 거부 설정은 OpenAI가 입력 데이터를 자사 모델 학습에 사용하지 않도록 하는 기능입니다. 데이터가 OpenAI 서버를 통과한다는 사실 자체는 동일합니다. 학습 거부 설정은 활용 범위를 일부 줄이는 효과는 있지만, 원문이 외부 서버를 거친다는 사실을 해소하지는 못합니다. 기관 정보보안 담당자가 검토할 때 이 점을 함께 고려해야 합니다. |
| 4 | 수기 마스킹과 자동 가명화의 가장 큰 차이가 무엇인가요? | 처리 주체와 결합 식별 대응 수준이 다릅니다. 수기 마스킹은 직원이 자기 판단으로 이름·기관명 등을 가립니다. 자동 가명화는 시스템이 일관된 규칙으로 처리하며, 차등정보보호 같은 수학적 기법을 적용하면 단순 키워드 마스킹으로 잡히지 않는 결합 식별 가능성에도 대응 가능합니다. 다만 자동 가명화 솔루션도 그 처리 방식·정확도가 기관 자체 위험평가 대상이 됩니다. |
| 5 | 차등정보보호(Differential Privacy)는 어떤 기법인가요? | 개인 정보를 통계적으로 보호하는 수학적 프레임워크입니다. 데이터에 일정한 노이즈를 더해, 결과만 보고는 원본을 역추적할 수 없게 만드는 방식입니다. 단순 키워드 마스킹이 "이름을 가린다" 수준이라면, 차등정보보호는 "결합 식별 가능성 자체를 수학적으로 차단한다" 수준입니다. 공공 통계·의료 데이터 분야에서 국제적으로 사용되는 기법입니다. |
| 6 | 2026 경영평가 가점과 이 문제는 어떻게 연결되나요? | 2026년 경영평가 편람은 "AI 윤리 및 정보보안 가이드라인을 고려한 기획 수준", "개인정보보호 등 관련 법·제도 준수요건의 반영 여부"를 평가 기준으로 명시합니다. 외부 LLM을 도입했더라도, 그 도입 방식이 N2SF 가이드라인·개인정보보호법 요건을 어떻게 충족하는지 설명할 수 없다면 가점 인정이 어렵습니다. 자세한 내용은 별도 글로 정리되어 있습니다: <a href="/resources/learn/public-sector-2026-management-evaluation-ai-incentive">2026 경영평가 'AI 활용 등 혁신' 가점</a>. |

---

### Section 13: 참고 자료 + 저자 정보 -- `id="section-references"`

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
1. 국가정보원, 「N2SF 보안 가이드라인 1.0 부록2: 모델 2 업무환경에서 생성형 AI 활용」, 2025.9
2. 기획재정부, 「2026년도 공공기관 경영평가편람」, 2026.1
3. 나라장터(국가종합전자조달시스템), 입찰공고 검색 결과 (2025.01~2026.05)

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 14: Related Articles -- `id="section-related"`

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

| # | Tag (badge) | Title | URL (Framer 상대경로) |
|---|-------------|-------|-----|
| 1 | 정책 분석 | N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 2 | 현장 분석 | 공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 | `/resources/learn/public-sector-genai-five-stuck-points` |
| 3 | 정책 분석 | 2026 경영평가 'AI 활용 등 혁신' 가점 — 공공기관 핵심 경쟁력 분석 | `/resources/learn/public-sector-2026-management-evaluation-ai-incentive` |

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

### Section 15: CTA Band -- `id="section-cta"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band -- `ds-cta-band` |
| Background | `var(--c-bg-dark)` (#0f1130, navy) -- capsule CTA band style |
| Background image | `ds-bg--grad-deep` (배경 이미지 1개) |
| Placement | Full-width, container 밖 |

#### Content

| Element | Value |
|---------|-------|
| Title | `외부 LLM 구독 후 활용 폭 확장을 검토 중이시라면` |
| Title brand keyword | `<span class="ds-text--brand">활용 폭 확장</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 자동 가명화 보호 레이어로, 기존 구독 중인 외부 LLM(ChatGPT·Claude·Gemini 등) 앞단에 통합해 직원의 입력 부담 없이 활용 폭을 확장할 수 있도록 설계되어 있습니다. 조달청 혁신제품 지정 솔루션이며, GS 1등급·ISO 27001·ISO 42001 인증을 보유하고 있습니다. 도입 사례 및 PoC 진행 가능 여부를 데모에서 확인하실 수 있습니다. |
| Primary CTA | "데모 신청하기" -> `/request-a-demo` |
| CTA style | `btn--invert` (dark bg -> white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      외부 LLM 구독 후 <span class="ds-text--brand">활용 폭 확장</span>을 검토 중이시라면
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 자동 가명화 보호 레이어로, 기존 구독 중인 외부 LLM(ChatGPT·Claude·Gemini 등) 앞단에 통합해 직원의 입력 부담 없이 활용 폭을 확장할 수 있도록 설계되어 있습니다. 조달청 혁신제품 지정 솔루션이며, GS 1등급·ISO 27001·ISO 42001 인증을 보유하고 있습니다. 도입 사례 및 PoC 진행 가능 여부를 데모에서 확인하실 수 있습니다.
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 5개 사례 sub-section, 3개 옵션 sub-section, 비교표 2개, 배너(TL;DR + 핵심 정리) 2개, 아코디언, 카드 그리드가 골고루 분포되어 시각적 단조로움을 방지한다.

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
| 3 | 상황 | Section header + body + dot bullets | Mixed text |
| 4 | N2SF 정보 등급 | Section header + body + 3-col table | Text + table |
| 5 | 5가지 실무 사례 | Section header + 5 sub-sections (icon + check bullets) | Multi-sub-section |
| 6 | 세 가지 어려움 | Section header + 3 sub-sections (icon + body + dots) | Sub-sections |
| 7 | 수기 마스킹 | Section header + body + number steps + dot bullets | Mixed |
| 8 | 또 다른 접근 | Section header + body + 3-col table | Text + table |
| 9 | 세 가지 옵션 | Section header + 3 sub-sections (icon + 장점/한계 dots) | Sub-sections |
| 10 | 점검 질문 | Section header + body + check bullets | Mixed |
| 11 | 핵심 정리 | Banner (brand tint) + dot bullets | Colored banner |
| 12 | FAQ | Section header + accordion | Interactive |
| 13 | References | Section header + dots + author | Text |
| 14 | Related | Card grid 3col | Cards |
| 15 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(테이블 2개, 배너 2개, 5개 사례 카드, 3개 옵션 카드, 아코디언, 카드 그리드, number steps)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] N2SF 표기 일관 (HTML `N<sup>2</sup>SF`)
- [ ] 5개 사례 각 시나리오·판단 포인트·마무리 단락 모두 보존
- [ ] 사례 1: 판단 포인트 4항목 보존
- [ ] 사례 2~5: 각 판단 포인트 3항목 보존
- [ ] 세 가지 어려움 sub-section 3개 모두 보존
- [ ] 매번 판단할 시간 없음의 결과 분기 2항목 보존
- [ ] 수기 마스킹 작동 방식 3단계 보존
- [ ] 수기 마스킹 한계 4항목 보존
- [ ] 수기 vs 자동 가명화 비교표 5행 보존
- [ ] 3개 옵션 (A/B/C) 각 정의·장점·한계 보존
- [ ] 점검 질문 6항목 보존
- [ ] 핵심 정리 7항목 보존
- [ ] FAQ 6개 Q&A 전문 보존 (옵션 C는 FAQ 4번째에 차등정보보호 관련)
- [ ] 참고문헌 3개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존 (URL Framer 상대경로)
- [ ] CTA 텍스트·링크 보존
- [ ] FAQ 6번째 내부 링크: `/resources/learn/public-sector-2026-management-evaluation-ai-incentive`

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.compare-table` (2개) | `ds-table` (responsive) | DS 테이블 컴포넌트 |
| `.callout` div | (해당 없음 -- 본 글에는 callout 없음) | -- |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| `<ol>` 순서 리스트 (수기 마스킹 작동 방식) | `ds-bullet--number` | DS 번호 스텝 컴포넌트 |
| 본문 인라인 링크 (N2SF 별도 글 안내) | `ds-bullet--dot` 형태 + 인라인 링크 | 가독성 향상 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| h3 sub-sections | `ds-section-title-icon` (Lucide 아이콘) | DS 아이콘 타이틀 컴포넌트 |
| 외부 URL `/learn/...` | Framer 상대경로 `/resources/learn/...` | Framer 라우팅 규칙 |

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** -- 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** -- Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** -- 코드/라벨 폰트
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** -- 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** -- `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** -- `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **비교표 반응형** -- mobile에서 `overflow-x: auto` + scrollbar 숨김 (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
9. **N2SF 표기** -- 모든 본문에서 `N2SF`(superscript 2) 유지. HTML에서 `N<sup>2</sup>SF`
10. **Related articles URL** -- Framer 상대경로 사용 (`/resources/learn/...`), `.html` 확장자 금지
11. **Meta tags** -- `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
12. **JSON-LD** -- BreadcrumbList + FAQPage schema 포함 (FAQ 6개 항목)
13. **word-break: keep-all** -- 한국어 텍스트 줄바꿈을 위해 필수
14. **컬러 라인 꾸밈 금지** -- 카드·배너에 `border-top/left colored` 장식 금지
15. **eyebrow 허용** -- capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
16. **각 사례 sub-section 아이콘 (Lucide)**:
    - 사례 1 회의록: `FileText`
    - 사례 2 보도자료: `Megaphone`
    - 사례 3 정책 분석: `Search`
    - 사례 4 인사 평가: `Users`
    - 사례 5 통계: `BarChart3`
17. **세 가지 어려움 sub-section 아이콘 (Lucide)**:
    - 4.1 문서 종류 vs 내용: `FileQuestion`
    - 4.2 결합 식별: `Link2`
    - 4.3 시간 부족: `Clock`
18. **세 가지 옵션 sub-section 아이콘 (Lucide)**:
    - 옵션 A 가이드라인: `BookOpen`
    - 옵션 B 제한적 사용: `ShieldOff`
    - 옵션 C 보호 레이어: `ShieldCheck`
19. **3개 단락 이상 연속 시 ds-bullet--dot 분리 검토** -- 본 spec에서는 각 sub-section마다 단락 수가 3개 미만이거나 lists/tables로 분리되어 있으므로 추가 분리 불필요
20. **테이블 컬러 강조 토큰**:
    - O 등급 셀: `--c-teal` text + `--c-teal-soft` (선택) bg tint
    - S 등급 셀: `--c-amber` text + amber soft (선택) bg tint
    - C 등급 셀: `--c-coral` text + `--c-coral-soft` (선택) bg tint
    - 비교표 2(자동 가명화 컬럼): `--c-primary-soft` bg tint
21. **FAQ 내부 링크** -- FAQ 6번째 답변 내 링크는 `/resources/learn/public-sector-2026-management-evaluation-ai-incentive` (Framer 상대경로)
22. **본문 인라인 링크** -- Section 4 (N2SF 1분 복습) 마지막 단락의 별도 글 안내 링크 2개도 모두 Framer 상대경로 사용:
    - `/resources/learn/what-is-n2sf`
    - `/resources/learn/n2sf-model-2-explained`
