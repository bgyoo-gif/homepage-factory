# what-is-n2sf-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_02_n2sf.html`
> Output: `llm-capsule/output/html/what-is-n2sf-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) — 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 13 (Hero + TL;DR + Lead + 7 body sections + FAQ + References + Related + CTA) |
| Tone | 정책 분석, 개념 정리, 실무 가이드 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 20분 |
| Category chip | 정책 분석 |

---

## Global Rules

- All CSS via `var(--ds-*)` / `var(--c-*)` tokens only (no hardcoded colors)
- No `!important`, no inline `style` (except CSS variable pass-through)
- eyebrow 허용 (llm-capsule brand v6.2 — 12px uppercase primary color), 본 페이지에서는 Hero category chip(badge)만 사용
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
- N2SF의 "²" superscript는 원문 그대로 유지 (HTML entity 또는 unicode)

---

## SVG Diagrams — DS Diagram Token Conversion

원본 A타입에는 2개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | C/S/O 정보 등급 분류 체계 | Section 6 (C/S/O 등급) 도입부 | `ds-diagram` — 3열 카드형 (C / S / O 등급별 정보·외부연계·AI활용 비교) |
| 2 | 「위치-주체-객체」 모델링과 평가 예시 | Section 7 (위치-주체-객체 모델링) 본문 | `ds-diagram` — 3개 축 + 평가 예시 흐름도 (S→S→O 데이터 이동) |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` → `var(--f-display)` (Inter)
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- C등급(기밀): `--c-coral` + `--c-coral-soft` (원본 빨강 계열 매핑)
- S등급(민감): `--c-amber` + amber soft (원본 황색 계열 매핑)
- O등급(공개): `--c-teal` + `--c-teal-soft` (원본 녹색 계열 매핑)
- 위치-주체-객체 3축: `--c-primary` + `--c-primary-soft` (원본 보라 계열 매핑)

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
| Breadcrumb | 홈 / 리소스 / Learn / N2SF란 무엇인가 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 20분" |
| Date | "2026년 5월" |
| Title | `N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리` |
| Title brand keyword | `<span class="ds-text--brand">N2SF</span>` |
| Description (lead) | 국가 망 보안체계(N2SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / N2SF란 무엇인가</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">정책 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 20분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      <span class="ds-text--brand">N2SF</span>란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리
    </h1>
    <p class="ds-article-hero__description">
      국가 망 보안체계(N2SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다.
    </p>
  </div>
</section>
```

#### Notes
- padding-top: 100px fixed
- Hero title responsive: 32px / 40px / 48px / 64px (article hero scale)
- No background image
- N2SF 표기는 `N<sup>2</sup>SF` 또는 `N2SF` 중 후자(unicode) 사용 (HTML 단순화)

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
| Strong tags | "N2SF(National Network Security Framework)", "물리적 망분리", "다중계층보안(MLS)", "C(기밀)·S(민감)·O(공개)" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>
        <strong>N2SF(National Network Security Framework)</strong>는 국가정보원이 2024년부터 본격 도입한 공공부문 보안 체계로, 기존의 <strong>물리적 망분리</strong>를 <strong>다중계층보안(MLS)</strong>으로 전환한 정책 프레임워크입니다. 핵심은 정보를 <strong>C(기밀)·S(민감)·O(공개)</strong> 세 등급으로 분류하고, 「위치(Domain)-주체(Subject)-객체(Object)」 모델로 정보서비스를 분석하여, 등급별로 다른 보안 통제를 적용하는 방식입니다. 모든 정보를 무차별 차단하던 시대가 끝나고, 등급에 맞는 차등 보호가 시작되었습니다. 이 전환은 공공기관이 AI·클라우드를 안전하게 활용하는 길을 처음으로 열어주었습니다.
      </p>
    </div>
  </div>
</section>
```

#### Notes
- 배너 텍스트 가운데 정렬 — `text-align: center` (banner default)
- Strong 태그 원문 위치 그대로 유지
- 단일 단락이므로 줄바꿈 없음

---

### Section 3: Lead (본문 도입) — `id="section-lead"`

| Property | Value |
|----------|-------|
| Pattern | Article body paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

2개 단락 (원문 그대로, 축약 금지):

1. "2024년부터 한국 공공부문 보안 정책은 큰 전환점을 맞이했습니다. 국가정보원이 발표한 **국가 망 보안체계(N2SF, National Network Security Framework)**가 그 변화의 중심입니다..." (전문)
2. "이 변화는 단순한 정책 업데이트가 아닙니다. 공공기관이 ChatGPT를 쓸 수 있는지..." (전문)

**연속 본문 단락 검사:** 2단락이므로 3단락 제한 규칙 위반 없음. 그대로 유지.

---

### Section 4: 1. 왜 지금 N2SF인가 — 망분리의 한계 — `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (필요 시) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. 왜 지금 N2SF인가 — 망분리의 한계` |
| Title brand keyword | `<span class="ds-text--brand">망분리의 한계</span>` |

#### Body Content

원문 단락 7개 (그대로 유지):

1. "N2SF를 이해하려면 먼저 기존 체계가 왜 한계에 부딪혔는지부터 살펴봐야 합니다." (짧은 도입)
2. "한국 공공부문의 보안 체계는 오랫동안 **물리적 망분리**를..." (전문)
3. "이 체계는 단순하지만 강력했습니다..." (전문)
4. "그러나 시대가 변했습니다. **두 가지 흐름**이 망분리의 효용을 약화시켰습니다." (전문)

**연속 본문 3단락 이상 검사:** 5~7번 단락이 각각 첫째/둘째/결론 흐름이므로 `ds-bullet--dot` 분리 적용.

**ds-bullet--dot (2항목):** "두 가지 흐름" 본문을 불릿으로 분리
- **첫째 — 업무 환경의 클라우드·SaaS 전환:** 행정 업무는 점점 더 외부 서비스에 의존하고 있습니다. 클라우드 협업 도구, SaaS 행정 시스템, 외부 데이터 연계 — 이 모든 것이 망분리 원칙과 충돌합니다. 망분리를 엄격히 유지하면 클라우드를 쓸 수 없고, 클라우드를 쓰려면 망분리를 우회해야 합니다.
- **둘째 — 생성형 AI의 등장:** ChatGPT, Claude, Gemini 같은 외부 AI 서비스가 업무 효율성에 결정적 영향을 미치기 시작했고, 직원들은 이를 활용하고 싶어합니다. 그러나 망분리 체계에서는 이 모든 AI 서비스가 "사용 불가" 영역이었습니다. 결과적으로 직원들이 개인 단말에서 비공식적으로 AI를 사용하는 **섀도우 AI** 현상이 광범위하게 발생했습니다. 기관은 보안을 지켰다고 믿지만, 실제로는 통제 바깥에서 AI 사용이 이루어지고 있는 상황입니다.

5. (불릿 뒤 마무리) "국가정보원과 국가보안기술연구소(NSR)는 이런 시대적 변화를 인식하고, 망분리를 대체할 새로운 보안 체계를 설계했습니다. 그 결과물이 N2SF입니다."

---

### Section 5: 2. N2SF의 정의와 핵심 개념 — `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (blockquote) + [N] Number steps (3대 구성요소) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. N2SF의 정의와 핵심 개념` |
| Title brand keyword | `<span class="ds-text--brand">정의와 핵심 개념</span>` |

#### Body Content

**단락 1:** "N2SF는 **National Network Security Framework**의 약자로, 한국어로는 **국가 망 보안체계**로 번역됩니다. 한 줄로 정의하면 다음과 같습니다."

**Blockquote → `ds-banner--quote`:**
- "정보의 중요도와 시스템의 역할에 따라 보안 통제를 차등 적용하여, 신기술 활용과 보안을 동시에 달성하는 공공부문 보안 프레임워크."
- 변환: `<blockquote>` → `<div class="ds-banner ds-banner--quote">`. label 없음, 본문만 큰 인용 스타일

**단락 2:** "이 정의에서 핵심은 **\"차등 적용\"**입니다..." (전문)

**단락 3:** "이런 사고 방식을 보안 업계에서는 **다중계층보안(MLS, Multi-Layered Security)**이라고 부릅니다..." (전문)

#### Sub-section: N2SF의 3대 구성 요소 (h3)

- `ds-section-title-icon` (Layers 아이콘)
- Sub title: `N2SF의 3대 구성 요소`

**도입 단락:** "N2SF를 실무에 적용할 때는 다음 세 가지를 차례로 다루게 됩니다."

**3대 구성 요소 → `ds-bullet--number` (3항목):**
1. **정보 등급 분류 (C/S/O):** 우리 기관이 다루는 정보가 어느 등급에 해당하는지 식별
2. **「위치-주체-객체」 모델링:** 정보서비스가 어떻게 구성되는지 분석
3. **보안원칙과 통제 적용:** 모델링 결과에 따라 적합한 보안 통제를 선택·적용

**마무리 단락:** "세 요소를 하나씩 자세히 살펴보겠습니다."

---

### Section 6: 3. C/S/O 등급 — N2SF의 기본 분류 체계 — `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + [W] Diagram + Article body (3개 h3) + [Q] Banner (callout 실무 팁) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. C/S/O 등급 — N2SF의 기본 분류 체계` |
| Title brand keyword | `<span class="ds-text--brand">C/S/O 등급</span>` |

#### Body Content

**도입 단락:** "N2SF의 출발점은 정보 등급 분류입니다. 모든 업무 정보는 다음 세 등급 중 하나에 해당합니다."

**도식 1: C/S/O 정보 등급 분류 체계** — `ds-diagram` 컴포넌트
- diagram-builder 에이전트 호출
- 3열 카드형 비교: C(기밀, coral) / S(민감, amber) / O(공개, teal)
- 각 카드: 정의 / 예시(3항목) / 외부 연계 / 외부 AI 활용
- figcaption: "도식 1. C/S/O 정보 등급 분류 체계"
- placeholder: `<!-- DIAGRAM 1 PLACEHOLDER: C/S/O 등급 분류 -->`

#### Sub-section: 3.1 C 등급 — 기밀 정보 (Classified)

- `ds-section-title-icon` (ShieldAlert / coral color 아이콘 — C 등급 매칭)
- Sub title: `3.1 C 등급 — 기밀 정보 (Classified)`
- 단락 2개 (원문 그대로):
  1. "유출 시 국가 안전·외교 관계·국방에 중대한 영향을 미칠 수 있는 정보입니다..."
  2. "구체적 예시는 국가 기밀, 외교 협상 진행 자료..."

#### Sub-section: 3.2 S 등급 — 민감 정보 (Sensitive)

- `ds-section-title-icon` (Shield / amber color 아이콘 — S 등급 매칭)
- Sub title: `3.2 S 등급 — 민감 정보 (Sensitive)`
- 단락 3개 (원문 그대로):
  1. "유출 시 업무 수행이나 공공 이익에 영향을 미칠 수 있지만..." (strong: "공공기관 업무 정보의 대부분이 이 등급에 해당합니다.")
  2. "구체적 예시는 개인정보, 내부 행정문서..." (strong: "조건부 외부 연계")
  3. "외부 AI 활용도 마찬가지로 조건부 가능합니다..."

#### Sub-section: 3.3 O 등급 — 공개 정보 (Open)

- `ds-section-title-icon` (Globe / teal color 아이콘 — O 등급 매칭)
- Sub title: `3.3 O 등급 — 공개 정보 (Open)`
- 단락 2개 (원문 그대로):
  1. "일반에 공개되어 있거나 공개 가능한 정보입니다..."
  2. "외부 생성형 AI 활용도 별도 제약 없이 가능합니다. 다만 실무에서는..."

#### Callout (실무 팁) → `ds-banner--info`

- banner label: `실무 팁 — 등급 분류는 절대적이지 않습니다`
- body: "같은 종류의 정보라도 맥락에 따라 등급이 달라질 수 있습니다. 예를 들어 인사 정보 중 부서장 명단은 O 등급일 수 있지만, 인사 평가 결과는 S 등급입니다. 각 기관은 자체 정보자산 목록을 작성하고 등급을 분류하는 작업을 거쳐야 합니다."

---

### Section 7: 4. 「위치-주체-객체」 모델링 — N2SF의 사고 방식 — `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Bullet list + [W] Diagram + [L] Bullet (평가 결과) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 「위치-주체-객체」 모델링 — N2SF의 사고 방식` |
| Title brand keyword | `<span class="ds-text--brand">「위치-주체-객체」 모델링</span>` |

#### Body Content

**단락 1:** "정보를 등급으로 분류했다면, 다음 단계는 **\"이 정보를 어떻게 사용할 것인가\"**를 분석하는 것입니다. N2SF는 이를 위해 「위치-주체-객체」라는 분석 모델을 제시합니다."

**단락 2:** "모든 정보서비스는 세 가지 축으로 분해할 수 있습니다."

**세 가지 축 → `ds-bullet--dot` (3항목):**
- **위치(Domain):** 정보가 처리·저장되는 물리적·논리적 영역. "어디서?"
- **주체(Subject):** 정보에 접근하거나 활용하는 사용자·장치. "누가?"
- **객체(Object):** 처리되거나 조회되는 정보 자원·서비스. "무엇을?"

**단락 3:** "이 세 축 각각에 C/S/O 등급을 부여하면, 해당 정보서비스의 보안 요구사항이 도출됩니다."

#### 도식 2: 「위치-주체-객체」 모델링과 평가 예시 — `ds-diagram` 컴포넌트

- diagram-builder 에이전트 호출
- 상단 3열 카드: 위치 / 주체 / 객체 (primary tint)
- 구분선
- 하단 평가 예시: "공무원이 ChatGPT로 보도자료 초안을 작성하는 경우"
  - 기관 전산망(S 등급, amber) → 업무 단말(S 등급, amber) → 외부 상용 AI(O 등급, teal)
  - 화살표로 흐름 연결
- 결론 텍스트: "S→O 정보 이동이 발생하므로, 보안원칙에 따라 S등급 정보의 외부 AI 전송을 차단하는 보안 통제가 필요합니다."
- figcaption: "도식 2. 「위치-주체-객체」 모델링과 평가 예시"
- placeholder: `<!-- DIAGRAM 2 PLACEHOLDER: 위치-주체-객체 모델링 -->`

#### 도식 뒤 본문 (원문 평가 결과)

**단락 4:** "위 도식에서 볼 수 있듯이, 공무원이 자신의 업무 단말에서 ChatGPT로 보도자료 초안을 작성하려는 시나리오를 분석하면 다음과 같이 평가됩니다."

**평가 결과 → `ds-bullet--check` (3항목):**
- **위치:** 기관 전산망 → S 등급 영역
- **주체:** 업무 단말 → S 등급
- **객체:** 외부 상용 AI(ChatGPT) → O 등급

**단락 5:** "이 모델링이 보여주는 것은 단순히 \"외부 AI를 쓸 수 있느냐 없느냐\"가 아니라, **\"어떤 등급의 정보가 어떤 등급의 시스템으로 이동하는가\"**입니다. S 등급 영역의 정보가 O 등급 시스템으로 이동하는 시나리오이므로, 이 이동에 대한 보안 통제가 필요하다는 결론이 자연스럽게 도출됩니다."

**단락 6:** "바로 이 분석 프레임워크가 N2SF의 가장 중요한 사고 도구입니다. 새로운 시스템이나 서비스를 도입할 때, 「위치-주체-객체」를 그려보고 등급을 부여하면, 어떤 보안 통제가 필요한지 체계적으로 도출할 수 있습니다."

---

### Section 8: 5. 보안원칙 — 정보 생산·저장과 정보 이동 — `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (blockquote x2) + [Q] Banner (callout 두 원칙) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 보안원칙 — 정보 생산·저장과 정보 이동` |
| Title brand keyword | `<span class="ds-text--brand">보안원칙</span>` |

#### Body Content

**도입 단락:** "「위치-주체-객체」 모델링이 분석 도구라면, 보안원칙은 그 분석 결과에 적용되는 판단 기준입니다. N2SF는 두 가지 핵심 보안원칙을 제시합니다."

#### Sub-section: 5.1 「정보 생산·저장」 보안원칙 (h3)

- `ds-section-title-icon` (Database 아이콘)
- Sub title: `5.1 「정보 생산·저장」 보안원칙`

**단락 1:** "이 원칙은 **\"특정 등급의 정보는 어느 등급의 시스템에서 생산·저장될 수 있는가\"**를 다룹니다. 핵심 규칙은 단순합니다."

**Blockquote → `ds-banner--quote`:**
- body: "특정 등급의 정보는 **같거나 더 높은 등급**의 시스템에서만 생산·저장될 수 있다."

**단락 2:** "예를 들어 S 등급 정보는 S 등급 시스템 또는 C 등급 시스템에서 생산·저장할 수 있지만, O 등급 시스템에서는 생산·저장할 수 없습니다. O 등급 시스템에서 S 등급 정보를 만든다면 이는 원칙 위반입니다."

**단락 3:** "이 원칙의 실무적 의미는 명확합니다. 외부 클라우드(O 등급)에서 내부 행정문서(S 등급)를 새로 작성하거나 저장해서는 안 됩니다. 또 외부 생성형 AI 서비스(O 등급)가 S 등급 업무문서를 출력하는 것도 원칙 위반이 됩니다."

#### Sub-section: 5.2 「정보 이동」 보안원칙 (h3)

- `ds-section-title-icon` (ArrowLeftRight 아이콘)
- Sub title: `5.2 「정보 이동」 보안원칙`

**단락 1:** "두 번째 원칙은 **\"정보가 등급이 다른 시스템 간에 이동할 때 어떤 통제가 필요한가\"**를 다룹니다."

**Blockquote → `ds-banner--quote`:**
- body: "높은 등급에서 낮은 등급으로의 정보 이동은 **적절한 보안 통제를 거쳐야** 한다. 반대 방향(낮은 등급에서 높은 등급)은 일반적으로 허용된다."

**단락 2:** "예를 들어 S 등급 정보를 O 등급 시스템으로 이동하려면, 그 과정에서 정보 보호 조치(예: 민감정보 식별·차단, 비식별화, 콘텐츠 필터링 등)가 적용되어야 합니다. 단순히 정보를 그대로 보내는 것은 원칙 위반입니다."

**단락 3:** "반대로 O 등급 정보를 S 등급 시스템으로 가져오는 것은 자유롭게 허용됩니다. 외부의 공개 정보를 내부에서 활용하는 것은 보안상 위험이 적기 때문입니다(악성코드 검사 등 일반적 통제는 별도로 필요)."

#### Callout (두 원칙이 함께 작동하는 방식) → `ds-banner--info`

- banner label: `두 원칙이 함께 작동하는 방식`
- body: "「위치-주체-객체」로 시나리오를 모델링한 뒤, 두 보안원칙에 비추어 어떤 부분이 원칙에 부합하고 어떤 부분에 추가 통제가 필요한지 판단합니다. 이것이 N2SF 보안 설계의 기본 흐름입니다."

---

### Section 9: 6. 적용 단계 — 우리 기관은 무엇부터 해야 하나 — `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + [N] Number steps (5단계) + Article body + [L] Checklist (3항목) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 적용 단계 — 우리 기관은 무엇부터 해야 하나` |
| Title brand keyword | `<span class="ds-text--brand">적용 단계</span>` |

#### Body Content

**도입 단락:** "N2SF는 추상적 정책 프레임워크지만, 실무 적용 시에는 구체적인 단계가 있습니다. 「N2SF 보안 가이드라인」은 정보서비스 도입·운영 과정을 다음 5단계로 정리합니다."

**5단계 프로세스 → `ds-bullet--number` (5항목):**
1. **준비(Prepare):** 정보서비스 구성요소 분석, 사용 시나리오 정의
2. **위협 식별(Identify):** 「위치-주체-객체」 모델링, C/S/O 평가, 보안원칙 적용, 보안위협 식별
3. **보안대책 수립(Select):** 보안 요구사항 도출, 보안통제 항목 선택
4. **구현(Implement):** 선택된 보안통제 적용 및 시스템 구축
5. **운영(Operate):** 지속적 모니터링, 감사, 통제 유효성 검증

**마무리 단락:** "각 단계에서 산출물이 만들어지며, 이 산출물들이 모여 기관의 보안 설계 근거가 됩니다. 특히 1~3단계는 **도입 전 사전 검토** 성격이 강하므로, 새로운 시스템을 도입하기 전에 반드시 거쳐야 할 절차입니다."

#### Sub-section: 실무자가 가장 먼저 해야 할 일 (h3)

- `ds-section-title-icon` (CheckSquare 아이콘)
- Sub title: `실무자가 가장 먼저 해야 할 일`

**도입 단락:** "이 모든 단계를 한꺼번에 적용하기는 어렵습니다. 실무적으로는 다음 세 가지부터 시작하는 것을 권장합니다."

**3가지 시작점 → `ds-bullet--check` (3항목):**
- **정보자산 등급 분류 작업:** 우리 기관이 다루는 주요 정보들을 식별하고 C/S/O 등급을 부여합니다. 모든 정보를 분류할 필요는 없으며, 주요 정보자산부터 시작하면 됩니다.
- **주요 정보서비스 모델링:** 새로 도입하거나 변경하려는 시스템에 대해 「위치-주체-객체」 모델링을 적용해봅니다. 이 작업만으로도 보안 요구사항이 상당 부분 드러납니다.
- **모델 해설서 활용:** 국가정보원·NSR이 발간한 「정보서비스 모델 해설서」 시리즈는 대표적 시나리오에 대한 분석 예시를 제공합니다. 우리 기관 상황과 유사한 모델을 찾아 참고하는 것이 효율적입니다.

---

### Section 10: 7. N2SF가 열어준 가능성과 새로운 질문들 — `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist (열어준 가능성) + [L] Dot list (새로운 질문) + [Q] Banner (takeaways 핵심 요약) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. N2SF가 열어준 가능성과 새로운 질문들` |
| Title brand keyword | `<span class="ds-text--brand">열어준 가능성</span>` |

#### Body Content

**도입 단락:** "N2SF의 도입은 공공기관에게 **새로운 가능성**을 열어주었습니다. 그동안 망분리 원칙 때문에 불가능했던 시도들이 이제 가능해졌습니다."

**열어준 가능성 → `ds-bullet--check` (3항목):**
- **외부 생성형 AI의 합법적 활용:** O 등급 정보에 대해 외부 AI를 자유롭게 활용할 수 있으며, S 등급 정보도 적절한 보안 통제를 적용하면 외부 AI와 연계할 수 있습니다.
- **클라우드 서비스 도입 확대:** 등급별로 적합한 클라우드 환경을 선택할 수 있게 되었습니다.
- **외부 API·데이터 연계:** 행정 효율화를 위한 외부 시스템 연동이 등급 분석을 거쳐 가능해졌습니다.

**전환 단락:** "그러나 이런 가능성은 **새로운 질문들**을 함께 가져옵니다."

**새로운 질문들 → `ds-bullet--dot` (5항목):**
- 우리 기관의 정보를 어떻게 C/S/O로 분류할 것인가?
- S 등급 정보를 외부 AI와 연계하려면 어떤 보안 통제가 필요한가?
- 그 통제의 충족 여부는 누가, 어떻게 검증하는가?
- 특정 정보서비스에 어떤 모델 해설서를 적용해야 하는가?
- 「위치-주체-객체」 모델링은 우리 기관이 직접 해야 하는가, 외부 컨설팅을 받아야 하는가?

**마무리 단락 1:** "이런 질문들은 N2SF가 완성된 답안이 아니라 **새로운 사고 프레임워크**이기 때문에 발생합니다. 프레임워크는 길을 보여주지만, 그 길을 어떻게 걸을지는 각 기관이 결정해야 합니다. 그리고 이 결정은 단순히 보안 부서만의 일이 아니라, 정보화 정책, 업무 프로세스, 외부 솔루션 선정까지 연결되는 통합적 의사결정입니다."

**마무리 단락 2:** "특히 생성형 AI 도입은 N2SF 적용에서 가장 활발히 논의되는 영역입니다. 국가정보원과 NSR은 이 영역을 위해 별도의 「업무환경에서 생성형 AI 활용 모델 해설서(모델 2)」를 발간했으며, 21개의 보안위협과 50여 개의 보안통제 항목을 구체적으로 제시하고 있습니다. 다음 글에서는 이 모델 2를 심층 해설하겠습니다."

#### Takeaways (이 글의 핵심 요약) → `ds-banner--brand`

- banner label: `이 글의 핵심 요약`
- **ds-bullet--dot (5항목):**
  - N2SF는 망분리에서 다중계층보안(MLS)으로의 패러다임 전환입니다
  - 정보를 C(기밀)·S(민감)·O(공개)의 세 등급으로 분류하여 차등 보호합니다
  - 「위치-주체-객체」 모델로 정보서비스를 분석합니다
  - 「정보 생산·저장」과 「정보 이동」 두 보안원칙이 판단 기준이 됩니다
  - 실무 시작점은 정보자산 등급 분류 + 주요 정보서비스 모델링입니다

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
| Title brand keyword | `<span class="ds-text--brand">질문</span>` |

#### FAQ Items — `ds-ac-list`

5개 아코디언 카드. 첫 번째만 `ds-ac--open`.

| # | Question | Answer (원문 전문) |
|---|----------|-------------------|
| 1 | N2SF는 의무 적용인가요? | 국가정보원이 발간한 「국가 망 보안체계 보안 가이드라인」은 공공기관의 정보서비스 구축·운영 시 적용 기준을 제시합니다. 모든 기관이 즉시 전면 적용해야 하는 강행 규정의 형식은 아니지만, 신규 정보화 사업의 보안성 검토에서 사실상의 표준으로 작동하고 있습니다. 기관별 적용 시기와 범위는 정보보안 책임관과 협의해서 결정하게 됩니다. |
| 2 | 망분리는 완전히 폐지되나요? | 아닙니다. C 등급 정보를 다루는 시스템에는 망분리 수준의 강한 통제가 여전히 적용됩니다. N2SF가 폐지한 것은 "모든 정보에 일률적으로 망분리를 적용"하는 방식이며, 정보 등급에 따라 적절한 수준의 통제를 차등 적용하는 방식으로 진화한 것입니다. 즉, 강한 보안이 필요한 곳에는 여전히 강한 보안이, 그렇지 않은 곳에는 적정 수준의 보안이 적용됩니다. |
| 3 | C/S/O 분류는 누가 정하나요? | 각 기관이 자체적으로 정보자산을 식별하고 등급을 분류합니다. 다만 일부 영역은 외부 기준이 적용됩니다. 예를 들어 C 등급에 해당하는 비밀 정보는 「보안업무규정」에 따라 분류되며, 개인정보는 「개인정보 보호법」 기준이 영향을 미칩니다. 일반적인 행정 정보의 등급 분류는 기관의 정보보안 책임관이 주관하여 결정합니다. |
| 4 | 모델 해설서는 무엇인가요? | 국가정보원과 국가보안기술연구소(NSR)가 발간하는 「정보서비스 모델 해설서」 시리즈는 대표적인 정보서비스 시나리오에 N2SF를 적용한 분석 예시입니다. 모델 1은 일반 정보서비스, 모델 2는 업무환경에서 생성형 AI 활용을 다루고 있으며, 향후 더 많은 모델이 추가될 예정입니다. 각 기관은 자신의 시나리오와 유사한 모델을 참고하여 적용 절차를 설계할 수 있습니다. |
| 5 | N2SF 적용에 비용이 많이 드나요? | 적용 자체에는 직접 비용이 들지 않지만, 정보자산 분류, 시스템 모델링, 보안 통제 도입 등의 작업에는 시간과 자원이 필요합니다. 기존 망분리 시스템을 유지하는 것보다 N2SF 기반으로 재설계하는 것이 단기적으로는 더 큰 작업이 될 수 있습니다. 다만 장기적으로는 클라우드·AI 활용을 통한 효율성 향상이 가능해지므로, 적용 비용을 상쇄하고 남는 가치가 있습니다. |

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

#### References — `ds-bullet--dot` (5항목, 원문 그대로)

1. 국가정보원, 「국가 망 보안체계(N2SF) 보안 가이드라인」, 2024
2. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9
3. 「전자정부법」, 「국가정보보안기본지침」
4. 「보안업무규정」, 「개인정보 보호법」
5. 디지털플랫폼정부위원회, 「디지털플랫폼정부 추진계획」

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)` (단, neutral-400 이상 명도 보장)

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
| 1 | 정책 분석 | N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 2 | 정책 분석 | 공공기관 생성형 AI 도입의 세 가지 길 — AI DLP, sLLM, 레이어 방식 비교 | `/resources/learn/public-sector-genai-three-approaches-in-korea` |
| 3 | 기술 해설 | 단순 비식별화의 한계와 차등정보보호(Differential Privacy)란 무엇인가 | `#` (placeholder) |

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

#### Notes
- `grid-template-columns: repeat(3, minmax(0, 1fr))` 필수 (1fr 단독 사용 금지)
- mobile: 1열, tablet 이상: 3열
- 카드 컬러 라인 꾸밈 금지 (border-top colored 등 금지)

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
| Title | `N2SF 환경의 AI 도입을 검토하시나요?` |
| Title brand keyword | `<span class="ds-text--brand">검토</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 보호 레이어로, 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있습니다. N2SF 모델 2에 부합하는 도입 방안을 함께 검토해드립니다. |
| Primary CTA | "데모 신청하기 →" → `/request-a-demo` |
| CTA style | `btn--invert` (dark bg → white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      N2SF 환경의 AI 도입을 <span class="ds-text--brand">검토</span>하시나요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 보호 레이어로, 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있습니다. N2SF 모델 2에 부합하는 도입 방안을 함께 검토해드립니다.
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 12개 이상이지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 시각 변화는 다이어그램, 배너(brand/quote/info), 체크리스트, 번호 스텝, 카드 그리드 등 컴포넌트 다양성으로 제공.

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
| Banner quote body | Inter | 18px | 500 (italic 옵션) |
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
| 4 | 1. 왜 N2SF인가 | Section header + body + dot list | Text + list |
| 5 | 2. 정의와 핵심 개념 | Section header + quote banner + numbered steps | Text + steps |
| 6 | 3. C/S/O 등급 | Section header + diagram + 3 sub-h3 + info callout | Visual + sub-sections |
| 7 | 4. 위치-주체-객체 | Section header + dot list + diagram + check list | Text + visual |
| 8 | 5. 보안원칙 | Section header + 2 sub-h3 + 2 quote banners + info callout | Sub-sections + banners |
| 9 | 6. 적용 단계 | Section header + numbered steps + sub-h3 + check list | Steps + list |
| 10 | 7. 가능성과 질문 | Section header + check list + dot list + brand banner | List + banner |
| 11 | FAQ | Section header + accordion | Interactive |
| 12 | References | Section header + dots + author | Text |
| 13 | Related | Card grid 3col | Cards |
| 14 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너 3종: brand/quote/info, 체크리스트, 번호 스텝, 점 불릿, 다이어그램, 아코디언, 카드 그리드)를 사용하여 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] N2SF 표기 정확 ("²" superscript)
- [ ] C/S/O 등급 색상 매핑 정확 (C=coral / S=amber / O=teal)
- [ ] 「위치-주체-객체」 한자 인용부호 유지
- [ ] 보안원칙 blockquote 2개 전문 보존
- [ ] 5단계 적용 절차 전문 보존
- [ ] FAQ 5개 Q&A 전문 보존
- [ ] 참고문헌 5개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존
- [ ] CTA 텍스트·링크 보존
- [ ] SVG 도식 2개는 DS diagram 토큰으로 재구성 (내용 동일)

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 2개 | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.callout` div (2개) | `ds-banner--info` (label + body) | DS 컴포넌트 매핑 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `<blockquote>` (3개) | `ds-banner--quote` | DS 인용 컴포넌트 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| `<ol>` 순서 리스트 (3대요소, 5단계) | `ds-bullet--number` | DS 번호 스텝 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| 두 가지 흐름 (4번 섹션) 연속 단락 | `ds-bullet--dot`로 분리 (첫째/둘째 strong) | 연속 본문 단락 3+ 분리 규칙 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 2개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: C/S/O 정보 등급 분류 체계

- **Type:** 3열 카드 비교형 (heading + 4-row property)
- **3 columns:**
  - **C — Classified** (coral, --c-coral / --c-coral-soft)
    - 정의: 기밀 정보. 유출 시 국가 안전에 중대한 영향
    - 예시: 국가 기밀 / 외교 협상 자료 / 군사 작전 정보
    - 외부 연계: 원칙적 차단, 최고 등급 통제
    - 외부 AI 활용: 불가
  - **S — Sensitive** (amber, --c-amber / amber-soft)
    - 정의: 민감 정보. 유출 시 업무 수행에 영향, 제한적 공개
    - 예시: 개인정보 / 내부 행정문서 / 정책 검토 자료
    - 외부 연계: 조건부 허용, 보안 통제 적용 시
    - 외부 AI 활용: 보호 조치 후 가능
  - **O — Open** (teal, --c-teal / --c-teal-soft)
    - 정의: 공개 정보. 일반에 공개 가능, 유출 영향 미미
    - 예시: 보도 자료 / 공개 통계 / 일반 공지사항
    - 외부 연계: 자유롭게 허용, 최소 통제만 적용
    - 외부 AI 활용: 자유롭게 가능
- **Title:** "C/S/O 정보 등급 분류 체계"
- **Layout:** 모바일에서는 세로 스택, tablet 이상 3열
- **Color hierarchy:** 카드 header bar 진한 색, body soft tint
- **Font:** `var(--f-display)` (Inter) 통일

### Diagram 2: 「위치-주체-객체」 모델링과 평가 예시

- **Type:** 상단 3축 + 구분선 + 하단 흐름도
- **Top — 3 columns (primary tint):**
  - 위치 (Domain): "정보가 처리·저장되는 물리적·논리적 영역" / "어디서?"
  - 주체 (Subject): "정보에 접근하거나 활용하는 사용자·장치" / "누가?"
  - 객체 (Object): "처리·조회되는 정보 자원·서비스" / "무엇을?"
- **Divider line**
- **Section title:** "평가 예시 — 공무원이 ChatGPT로 보도자료 초안을 작성하는 경우"
- **Bottom — 3 boxes + arrows (flow):**
  - Box 1 (amber-soft): 기관 전산망 / 내부 업무 환경 / **S 등급** badge
  - Arrow →
  - Box 2 (amber-soft): 업무 단말 / 공무원 PC / **S 등급** badge
  - Arrow →
  - Box 3 (teal-soft): 외부 상용 AI / ChatGPT 등 / **O 등급** badge
- **Footer (muted text):**
  - "결론: S→O 정보 이동이 발생하므로, 보안원칙에 따라 S등급 정보의 외부 AI 전송을 차단하는 보안 통제가 필요합니다."
- **Title:** "「위치-주체-객체」 모델링"
- **Font:** `var(--f-display)` (Inter) 통일
- **Color tokens:** `--c-primary` (3축), `--c-amber` (S 등급), `--c-teal` (O 등급), `--c-muted` (footer)

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** — 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** — Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** — 코드/라벨 폰트 (Fragment Mono 대신)
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** — 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** — `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** — `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **N2SF 표기** — `N2SF` (unicode superscript ²) 사용. `<sup>` 태그 사용 시 모든 표기 일관성 유지
9. **SVG 도식 placeholder** — diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
10. **Related articles URL** — Section 13 참조: 1번/2번은 실제 경로, 3번은 placeholder
11. **Meta tags** — `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
12. **JSON-LD** — BreadcrumbList + FAQPage + Article schema 포함
13. **word-break: keep-all** — 한국어 텍스트 줄바꿈을 위해 필수
14. **컬러 라인 꾸밈 금지** — 카드·배너에 `border-top/left colored` 장식 금지
15. **eyebrow 사용** — Hero에는 category chip(badge)만 사용. 별도 eyebrow 없음
16. **`ds-bullet--check` 아이콘 HTML 삽입 금지** — `ds-bullet__icon`은 비워둘 것 (CSS `::before` 자동 생성)
17. **그리드 minmax** — `grid-template-columns: repeat(N, minmax(0, 1fr))` 사용 (1fr 단독 사용 금지)
18. **`overflow-x: auto` scrollbar 숨김** — 필요 시 `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }` 동반
19. **마무리 워크플로우** — HTML 생성 후 diagram-builder → diagram-qa → qa → deploy 순서
20. **「위치-주체-객체」 한자 인용부호 「」** — 원문 그대로 유지 (변환 금지)
