# n2sf-model-2-explained-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_03_model2.html`
> Output: `llm-capsule/output/html/n2sf-model-2-explained-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) — 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 14 (Hero + TL;DR + Lead + 8 body sections + FAQ + References + Related + CTA) |
| Tone | 정책 분석, 정보화담당관 실무 가이드 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 22분 |
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
| 1 | 모델 2 시나리오 구성과 등급 평가 | Section 4 (모델 2 시나리오) 본문 | `ds-diagram` — 「위치-주체-객체」 등급 매핑 도식 (S 전산망 zone + O 인터넷 zone + AI 연계체계 highlight) |
| 2 | 21개 보안위협 — 영역별 분류 | Section 6 (21개 보안위협) 도입부 | `ds-diagram` — 3영역 그룹핑 카드 (이용자 단말 8개 / AI 연계체계 11개 / 생성형 AI 서비스 2개) |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` → `var(--f-display)` (Inter)
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- C등급(기밀): `--c-coral` + `--c-coral-soft`
- S등급(민감): `--c-amber` + amber soft (원본 황색 계열 매핑)
- O등급(공개): `--c-teal` + `--c-teal-soft` (원본 녹색 계열 매핑)
- AI 연계체계 강조: `--c-primary` + `--c-primary-soft` (원본 보라 계열 매핑)

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
| Breadcrumb | 홈 / 리소스 / Learn / N2SF 모델 2 완벽 해설 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 22분" |
| Date | "2026년 5월" |
| Title | `N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까` |
| Title brand keyword | `<span class="ds-text--brand">모델 2</span>` |
| Description (lead) | 국가정보원이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 쉽게 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, 그리고 무엇이 가능하고 무엇이 제한되는지. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / N2SF 모델 2 완벽 해설</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">정책 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 22분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      N2SF <span class="ds-text--brand">모델 2</span> 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까
    </h1>
    <p class="ds-article-hero__description">
      국가정보원이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 쉽게 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, 그리고 무엇이 가능하고 무엇이 제한되는지.
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
| Strong tags | "「N2SF 보안 가이드라인 정보서비스 모델 해설서 — 모델 2. 업무환경에서 생성형 AI 활용」", "「위치(S) - 주체(S) - 객체(O)」", "O 등급으로 한정", "AI 연계체계" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>국가정보원·NSR이 발간한 <strong>「N2SF 보안 가이드라인 정보서비스 모델 해설서 — 모델 2. 업무환경에서 생성형 AI 활용」</strong>은 공공기관이 외부 상용 AI(ChatGPT, Claude 등)를 활용할 때 따라야 할 보안 요구사항을 정리한 공식 문서입니다. 시나리오는 <strong>「위치(S) - 주체(S) - 객체(O)」</strong> 구조로 모델링되며, 활용 가능 정보는 <strong>O 등급으로 한정</strong>됩니다. S 등급 정보의 외부 AI 직접 전송은 보안원칙에 위배됩니다. 21개의 보안위협이 식별되고 50여 개의 보안통제 항목이 적용되어야 하며, 그 핵심은 <strong>AI 연계체계</strong>라는 중간 보호 장치입니다. 모델 2는 "외부 AI 활용의 공식 길"을 처음 열어준 문서지만, 동시에 그 길의 좁은 폭도 정의합니다.</p>
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

2개 단락 (원문 그대로):
1. "우리 기관도 ChatGPT 쓸 수 있나요? — 2024년부터 정보화담당관실에 가장 많이 들어오는 질문 중 하나입니다. 이 질문에 대한 공식적인 답이 2025년 9월에 나왔습니다. 국가정보원과 국가보안기술연구소(NSR)가 발간한 **「N2SF 보안 가이드라인 정보서비스 모델 해설서 — 모델 2. 업무환경에서 생성형 AI 활용」**(이하 모델 2)이 그것입니다."
2. "이 문서는 30페이지 분량이지만, 정책 문서 특유의 정제된 표현과 다이어그램 중심 구성 때문에 처음 읽는 사람에게는 친절하지 않습니다. 이 글은 정보화담당관·보안담당관의 관점에서 모델 2가 무엇을 말하고 있는지, 무엇이 가능하고 무엇이 제한되는지, 그리고 우리 기관이 무엇을 해야 하는지를 처음부터 끝까지 정리합니다."

**주의:** 2단락이므로 연속 3단락+ 규칙은 트리거되지 않음. 그대로 유지.

---

### Section 4: 1. 모델 2가 왜 중요한가 — `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (인용구) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. 모델 2가 왜 중요한가` |
| Title brand keyword | `<span class="ds-text--brand">모델 2</span>` |

#### Body Content

**도입 단락:** "모델 2의 의미를 한 줄로 정리하면 다음과 같습니다."

**Blockquote → ds-banner--quote (또는 ds-banner--brand with quote style):**
> 공공기관이 외부 상용 생성형 AI를 업무에 활용할 수 있는 **최초의 공식 길잡이**.

**단락 1 (원문 그대로):** "이 문장이 갖는 무게를 이해하려면 그 이전 상태를 떠올려야 합니다. 모델 2 발간 이전에는..." (망분리 원칙, N2SF 2024 발표, 직원들 사용 욕구, 답을 줄 근거 부재)

**단락 2 (원문 그대로, strong 포함):** "모델 2는 이 공백을 메웠습니다... **"이렇게 하면 도입할 수 있다"는 길**을 처음으로 보여준 문서입니다."

**단락 3 (원문 그대로, strong 포함):** "그리고 동시에, 모델 2는 그 길의 **한계와 폭**도 함께 정의합니다. 모든 정보를 외부 AI에 보낼 수 있는 것이 아니며..."

**주의:** 3단락 연속이지만 서사적 흐름이므로 그대로 유지 (불릿 분리 금지).

---

### Section 5: 2. 모델 2가 다루는 시나리오 — 정확히 무엇인가 — `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + [Q] Quote banner + [W] Diagram + [Q] Callout banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. 모델 2가 다루는 시나리오 — 정확히 무엇인가` |
| Title brand keyword | `<span class="ds-text--brand">시나리오</span>` |

#### Body Content

**도입 단락:** "모델 2 문서의 부제는 "업무환경에서 생성형 AI 활용"입니다. 이 짧은 부제가 다루는 범위를 정확히 풀어보면 다음과 같습니다."

**범위 정의 → ds-bullet--check (3항목):**
- **업무환경**: 공무원·기관 직원이 일상 업무를 수행하는 기관 내부 환경 (사무실 PC, 온북 등)
- **생성형 AI**: ChatGPT, Claude, Gemini 등 인터넷에 위치한 상용 AI 서비스
- **활용**: 문서 작성 보조, 요약, 번역, 정보 검색 등 일반 업무 효율화

**연결 단락:** "더 명확히 말하면, 모델 2가 다루는 시나리오는 다음 한 문장입니다."

**Blockquote → ds-banner--quote (또는 ds-banner--brand with strong):**
> **"기관 전산망(S 등급) 내부에 있는 공무원이, 자신의 업무 단말(S 등급)을 통해, 인터넷에 있는 상용 생성형 AI 서비스(O 등급)를 활용하는 시나리오."**

**연결 단락:** "이 시나리오는 모델 2 문서의 [그림 2-1]에서 도식화되어 있으며, N2SF 체계의 「위치-주체-객체」 모델로 정확히 매핑됩니다."

#### 도식 1: 모델 2 시나리오 — `ds-diagram` 컴포넌트

- diagram-builder 에이전트 호출하여 DS 토큰 기반으로 재구성
- 상단 zone (O등급, teal-soft): 인터넷 영역 → 상용 생성형 AI (ChatGPT / Claude)
- 하단 zone (S등급, amber-soft): 기관 전산망 영역 → 업무 시스템 / 이용자 단말 / AI 연계체계 (primary highlight)
- 화살표: 단말 → AI 연계체계 → 외부 AI (O 정보만 전송 허용 라벨)
- 하단 평가 행: "「위치-주체-객체」 평가 — 위치: 기관 전산망 (S) · 주체: 이용자 단말 (S) · 객체: 상용 AI (O)"
- Footer: "핵심 제약: S→O 정보 이동이 발생하므로 활용 가능 정보는 O 등급으로 한정"
- figcaption: "도식 1. 모델 2 시나리오 구성과 등급 평가"

**연결 단락:** "도식에서 보이는 것처럼, 시나리오는 세 개의 핵심 구성요소를 가집니다."

**구성요소 → ds-bullet--check (3항목):**
- **업무 시스템**: 기관이 운영하는 내부 업무 시스템 (S 등급)
- **이용자 단말**: 공무원이 사용하는 업무 단말 또는 온북 (S 등급)
- **상용 생성형 AI**: 인터넷에 위치한 외부 AI 서비스 (O 등급)

**마무리 단락:** "그리고 이 셋을 연결하는 보호 장치가 **AI 연계체계**입니다. 이 부분이 모델 2의 핵심이며, 별도 섹션에서 자세히 다루겠습니다."

#### Callout (모델 2가 다루지 않는 시나리오) — `ds-banner--neutral` (또는 callout 스타일)

- banner label: `모델 2가 다루지 않는 시나리오` (strong)
- Body: "기관 내부에 자체 구축한 sLLM(S 등급 객체) 시나리오, 폐쇄망 내 C 등급 AI 활용 시나리오, 외부 시스템에서 내부 시스템으로의 역방향 데이터 흐름 시나리오 등은 모델 2의 범위 밖입니다. 다른 모델 해설서 또는 별도 검토가 필요합니다."

---

### Section 6: 3. 두 보안원칙의 적용 — 무엇이 위배되고 무엇이 허용되는가 — `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + h3 sub-sections + [L] Checklist + [Q] Conclusion banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. 두 보안원칙의 적용 — 무엇이 위배되고 무엇이 허용되는가` |
| Title brand keyword | `<span class="ds-text--brand">보안원칙</span>` |

#### 도입 단락

"모델 2의 분석은 N2SF의 두 가지 보안원칙을 시나리오에 적용하는 작업에서 시작됩니다. 두 원칙은 모델 2 문서의 p.13에 명시되어 있으며, 각각 무엇을 의미하는지 정확히 짚어보겠습니다."

#### Sub-sections (h3)

**3.1 「정보 생산·저장」 보안원칙 적용**
- `ds-section-title-icon` (FileLock / Database 아이콘)
- 도입 단락: "이 원칙은 "어느 등급의 시스템에서 어느 등급의 정보를 만들거나 저장할 수 있는가"를 다룹니다. 모델 2 시나리오에 적용한 결과는 다음과 같습니다."
- **원칙 적용 결과 → ds-bullet--check (2항목, 첫 항목은 OK / 두 번째는 위배 표시):**
  - **이용자 단말(S 등급)에서 S·O 등급 정보 생산·저장**: 원칙 위배 없음. 같거나 더 낮은 등급의 정보는 상위 등급 시스템에서 자유롭게 다룰 수 있습니다.
  - **O 등급 상용 AI에서 S 등급 이상 정보 생산**: **원칙 위배**. 낮은 등급(O) 시스템이 더 높은 등급(S)의 정보를 만들어내는 것은 허용되지 않습니다.
- 단락 1: "두 번째 항목의 실무적 의미가 중요합니다... **O 등급 시스템(ChatGPT)이 S 등급 정보를 생산**한 셈이 되며, 이는 보안원칙에 위배됩니다."
- 단락 2: "따라서 모델 2는 "상용 AI는 O 등급 정보만 다루도록 통제한다"는 결론에 도달합니다..."

**3.2 「정보 이동」 보안원칙 적용**
- `ds-section-title-icon` (ArrowRightLeft / DataFlow 아이콘)
- 도입 단락: "두 번째 원칙은 "정보가 등급이 다른 시스템 간에 이동할 때 어떤 조건이 필요한가"를 다룹니다. 모델 2 시나리오에서 발생하는 이동은 다음과 같습니다."
- **이동 분석 결과 → ds-bullet--check (3항목):**
  - **이용자 단말(S) → 상용 AI(O) 방향의 O 등급 정보 전송**: 원칙 위배 없음. O 등급 정보를 O 등급 시스템으로 보내는 것은 자유롭게 가능합니다.
  - **이용자 단말(S) → 상용 AI(O) 방향의 S 등급 정보 전송**: **원칙 위배**. 높은 등급(S) 정보를 낮은 등급(O) 시스템으로 그대로 보내는 것은 정보 노출 위험을 의미합니다.
  - **상용 AI(O) → 이용자 단말(S) 방향의 O 등급 정보 수신**: 원칙 위배 없음. 낮은 등급 정보를 높은 등급 시스템으로 가져오는 것은 일반적으로 허용됩니다.
- 마무리 단락: "두 번째 항목, 즉 S 등급 정보의 외부 AI 전송이 모델 2 시나리오의 가장 큰 제약입니다. 이 제약을 어떻게 통제할 것인가가 모델 2 전체의 핵심 과제이며, 21개 보안위협의 상당수가 이 한 줄에서 파생됩니다."

#### Conclusion Banner (두 원칙이 만들어내는 결론) — `ds-banner--brand`

- banner label: `두 원칙이 만들어내는 결론`
- Body (원문 그대로): "모델 2는 외부 상용 AI를 활용할 수 있는 정보를 **O 등급으로 명시적으로 한정**합니다. 이것이 모델 2의 가장 중요한 제약이며, 동시에 모델 2가 다루는 영역의 경계선입니다."

---

### Section 7: 4. 21개 보안위협 — 무엇을 막아야 하는가 — `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [W] Diagram + h3 sub-sections + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 21개 보안위협 — 무엇을 막아야 하는가` |
| Title brand keyword | `<span class="ds-text--brand">21개 보안위협</span>` |

#### 도입 단락

"모델 2는 시나리오에서 발생할 수 있는 보안위협을 21개로 식별합니다. TH-M2-1부터 TH-M2-21까지 번호가 매겨져 있으며, 세 개의 영역으로 묶입니다."

#### 도식 2: 21개 보안위협 영역별 분류 — `ds-diagram` 컴포넌트

- diagram-builder 에이전트 호출
- 3개 zone (수직 배치):
  - **이용자 단말** (amber-soft) — 8개 위협 badge — TH-M2-1~8 리스트
  - **AI 연계체계** (primary-soft, 강조) — 11개 위협 badge — TH-M2-9~19 리스트
  - **생성형 AI 서비스** (teal-soft) — 2개 위협 badge — TH-M2-20~21 리스트
- 각 위협 항목은 mini-card 형태 (코드 + 짧은 설명)
- figcaption: "도식 2. 21개 보안위협 — 영역별 분류"

#### Sub-sections (h3)

**4.1 이용자 단말 영역 (8개 위협)**
- `ds-section-title-icon` (Monitor / Laptop 아이콘 — amber tone)
- 단락 1: "공무원의 업무 단말에서 발생할 수 있는 위협들입니다. 단말 자체의 보안성 유지(OS·SW 취약점, 악성코드), 단말 사용 통제(비인가 사용, 비인가 SW 설치), 정보 유출 방지(업무정보 비인가 유출, AI 계정 정보 노출), 네트워크 통제(비인가 네트워크 연결, 비인가 단말의 AI 접근) 등이 포함됩니다."
- 단락 2: "이 영역의 위협은 대부분 일반적인 단말 보안 관리 영역에 속합니다. 다만 TH-M2-6(AI 계정 정보 노출)과 TH-M2-7(비인가 단말의 AI 접근)은 AI 활용 시나리오 특유의 위협으로, 단말 인증과 AI 계정 분리 관리가 필요합니다."

**4.2 AI 연계체계 영역 (11개 위협)**
- `ds-section-title-icon` (Shield / Network 아이콘 — primary tone)
- 도입 단락: "21개 중 절반 이상이 이 영역에 집중되어 있습니다. 이는 AI 연계체계가 모델 2 시나리오의 **핵심 통제 지점**임을 보여줍니다. 다음과 같이 세부 분류됩니다."
- **세부 분류 → ds-bullet--dot (5항목, 첫 어구만 strong):**
  - **인증·접근 통제**: TH-M2-9 (비인가 접근), TH-M2-10 (우회 시도), TH-M2-11 (미승인 AI 접근)
  - **데이터 보호**: TH-M2-12 (O 등급 외 정보 AI 활용), TH-M2-13 (송수신 데이터 유출)
  - **외부 위협 차단**: TH-M2-14 (외부 비인가 접근), TH-M2-15 (외부 악성 콘텐츠 유입)
  - **연계체계 자체 보안**: TH-M2-16 (관리자 계정 비인가 접근), TH-M2-17 (취약점 노출)
  - **가용성·운용**: TH-M2-18 (AI 서비스 접속 실패), TH-M2-19 (연계체계 운용 장애)
- 마무리 단락 (strong 포함): "특히 **TH-M2-12 "공개(O) 등급 외 업무정보의 생성형 AI 서비스 활용"**이 가장 중요한 위협입니다. 앞서 다룬 보안원칙 위배의 직접적 표현이며, 이를 막기 위한 통제가 모델 2의 핵심 설계 요건이 됩니다."

**4.3 생성형 AI 서비스 영역 (2개 위협)**
- `ds-section-title-icon` (Cloud / Globe 아이콘 — teal tone)
- 단락 (원문 그대로): "외부 상용 AI 서비스 자체와 관련된 위협으로, 계정 도용(TH-M2-20)과 AI 서비스를 통한 정보 유출(TH-M2-21)이 식별되어 있습니다. 이 영역은 외부 서비스이므로 기관이 직접 통제하기 어렵고, 계정 관리·데이터 사용 정책 수립으로 대응합니다."

---

### Section 8: 5. AI 연계체계 — 모델 2의 핵심 구조 — `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + Article paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. AI 연계체계 — 모델 2의 핵심 구조` |
| Title brand keyword | `<span class="ds-text--brand">AI 연계체계</span>` |

#### Body Content

**도입 단락:** "21개 위협 중 11개가 집중된 영역이자, 모델 2 전체 설계의 중심이 **AI 연계체계**입니다. 모델 2 문서 [그림 2-8]에 도식화되어 있는 이 구조는 다음 네 가지 컴포넌트로 구성됩니다."

**4가지 컴포넌트 → ds-bullet--check (4항목, 첫 어구 strong):**
- **인증 서버**: 이용자·단말 인증, 비인가 접근 차단
- **콘텐츠 통제**: 비인가 자료유형 통제, 프롬프트·콘텐츠 필터링, 보안등급 식별
- **악성코드 검사**: 외부로부터의 악성 콘텐츠 유입 차단
- **보안 경계**: 방화벽, Proxy 강제화, 일방향 정보흐름 통제

**단락 1:** "이 네 컴포넌트가 함께 작동하여, 이용자 단말과 외부 AI 사이의 정보 흐름을 통제합니다. 단말이 직접 외부 AI에 접근하는 것이 아니라, 반드시 AI 연계체계를 경유하도록 강제하는 것이 핵심 설계입니다."

**단락 2 (strong 포함):** "이 구조에서 가장 까다로운 통제가 **"O 등급 외 정보의 외부 AI 전송 차단"**(TH-M2-12 대응)입니다. 이는 단순한 도메인 차단으로는 해결되지 않습니다. 단말에서 외부 AI로 전송되는 텍스트 안에 S 등급 정보가 포함되어 있는지를 실시간으로 식별하고 차단해야 하기 때문입니다."

**단락 3:** "이 통제를 어떻게 구현하느냐가 모델 2 시나리오의 실제 보안 수준을 결정합니다. 단순 정규식·키워드 기반 마스킹은 패턴에 없는 정보를 놓치고, 재식별 공격에 취약합니다. 더 정교한 보호 기법이 필요하다는 점이 이 지점에서 명확해지며, 이 주제는 별도의 글에서 깊게 다룹니다."

**주의:** 3단락 연속이지만 서사적 흐름이므로 그대로 유지.

---

### Section 9: 6. 50+ 보안통제 항목 — 무엇을 갖춰야 하는가 — `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [O] Table (3열 13행, 강조 행 포함) + 마무리 단락 |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 50+ 보안통제 항목 — 무엇을 갖춰야 하는가` |
| Title brand keyword | `<span class="ds-text--brand">보안통제 항목</span>` |

#### 도입 단락

"21개 위협에 대응하기 위해 모델 2는 50여 개의 구체적 보안통제 항목을 제시합니다. 각 통제는 N2SF-XX-N 형식의 코드로 식별되며, 카테고리별로 정리됩니다. 일일이 나열하는 것은 의미가 적으므로, 카테고리 중심으로 정리해드리겠습니다."

#### Control Categories Table — `ds-table--responsive`

3열(카테고리, 주요 통제 내용, 대응 위협) × 13행. **9번째 행("생성형 AI 서비스 활용 시 데이터 보호")은 강조 행 (`ds-table__row--highlight` — `--c-primary-soft` 배경)**.

**테이블 스타일:**
- `ds-table` + responsive wrapper (`overflow-x: auto` + scrollbar 숨김: `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
- th: `var(--c-ink)` 배경, white 텍스트
- 강조 행: `--c-primary-soft` 배경 + 텍스트 weight 600

| 카테고리 | 주요 통제 내용 | 대응 위협 |
|---------|-------------|---------|
| 이용자 단말 보안성 유지 | OS·SW 취약점 관리, 비인가 SW 차단, 악성코드 차단, 형상 관리 | TH-M2-1, 2, 8 |
| 이용자 단말 사용 보안 | 단말 인증, 자동 잠금, 저장장치 통제 | TH-M2-3 |
| 이용자 단말 네트워크 보안 | IP 체계 분리, 비인가 무선망 차단, 블루투스 통제, 세션 관리 | TH-M2-4 |
| 이용자 단말 데이터 보호 | 데이터 암호화 저장, 정보 유출 방지 | TH-M2-5 |
| 이용자 계정 정보 보호 | AI 계정과 업무 계정 분리, 공개 식별자 사용 금지 | TH-M2-6 |
| AI 활용 이용자·단말 관리 | 사전 승인 절차, 데이터 사용 정책 수립 | TH-M2-7 |
| AI 서비스 이용자·단말 인증 | 계정 관리 자동화, 다단계 인증, 의심 활동 모니터링 | TH-M2-9 |
| 비인가 네트워크 연결 차단 | 네트워크 격리, 화이트리스트 통신, Proxy 강제화, 우회 통신 차단 | TH-M2-10, 11 |
| **생성형 AI 서비스 활용 시 데이터 보호** | **프롬프트·콘텐츠 필터링, 보안등급 식별, 인가되지 않은 정보 전송 차단** | **TH-M2-12, 13** |
| 외부 비인가 접근·악성 콘텐츠 차단 | 일방향 정보흐름, 임베디드 데이터 삽입 차단 | TH-M2-14, 15 |
| 연계체계 보안성 유지 | 관리자 권한 분리, 원격 접속 제한, 취약점 관리 | TH-M2-16, 17 |
| 연계체계 운용 관리 | 감사 로그, 모니터링, 장애 대응 체계 | TH-M2-18, 19 |
| AI 서비스 계정·데이터 관리 | 외부 인증 수단 관리, 데이터 사용 정책 | TH-M2-20, 21 |

#### 마무리 단락

"이 표에서 강조된 행 "생성형 AI 서비스 활용 시 데이터 보호"가 모델 2 통제의 **가장 까다로운 영역**입니다. 다른 통제는 일반적 IT 보안 영역의 확장이지만, 이 영역은 AI 활용 시나리오 특유의 새로운 통제이며, 솔루션마다 구현 수준의 차이가 가장 크게 드러나는 부분입니다."

---

### Section 10: 7. 모델 2의 범위와 한계 — `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + h3 sub-sections + [L] Checklist (각각) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. 모델 2의 범위와 한계` |
| Title brand keyword | `<span class="ds-text--brand">범위와 한계</span>` |

#### 도입 단락

"모델 2는 공공기관 AI 활용의 첫 공식 길잡이지만, 모든 시나리오를 다루지는 않습니다. 모델 2 적용을 검토할 때는 그 경계를 정확히 인식해야 합니다."

#### Sub-sections (h3)

**7.1 모델 2가 다루지 않는 것**
- `ds-section-title-icon` (XCircle / MinusCircle 아이콘)
- **범위 밖 시나리오 → ds-bullet--check (4항목, 첫 어구 strong):**
  - **S 등급 정보의 외부 AI 활용**: 모델 2는 활용 가능 정보를 O 등급으로 한정합니다. S 등급 정보를 외부 AI로 안전하게 활용하려는 시나리오는 모델 2의 범위 밖이며, 별도의 보호 기법(예: 차등정보보호 기반 비식별화)이 적용된 보호 레이어 아키텍처가 필요합니다.
  - **기관 내부 자체 구축 AI(sLLM) 시나리오**: 객체가 외부 상용 AI(O 등급)가 아니라 기관 내부 sLLM(S 등급)인 경우는 다른 모델에서 다룹니다. 향후 별도의 모델 해설서가 발간될 가능성이 있습니다.
  - **C 등급 환경에서의 AI 활용**: 폐쇄망·기밀 처리 환경에서의 AI 활용은 별도 검토가 필요합니다.
  - **AI Agent 시나리오**: 단순 질의응답을 넘어 AI가 자율적으로 도구를 호출하고 행동하는 Agent 시나리오는 모델 2에서 다루지 않습니다.

**7.2 모델 2 적용 시 흔히 부딪히는 문제들**
- `ds-section-title-icon` (AlertTriangle 아이콘)
- 도입 단락: "모델 2를 실제 기관에 적용할 때 정보화담당관이 자주 마주치는 문제들이 있습니다."
- **실무 문제 → ds-bullet--check (3항목, 첫 어구 strong):**
  - **O 등급 한정의 실무적 비효율**: 직원들이 활용하고 싶어하는 업무 시나리오의 상당수가 S 등급 정보를 포함합니다. 예를 들어 부서 내부 회의록 정리, 정책 검토 보고서 작성 보조, 민원 응답 초안 작성 등은 모두 S 등급 정보를 다룹니다. 이런 시나리오를 모델 2 범위 내에서 어떻게 다룰지가 큰 과제입니다.
  - **AI 연계체계 구현의 복잡성**: 50여 개의 통제 항목을 모두 충족하는 AI 연계체계를 자체 구축하는 것은 사실상 불가능에 가깝습니다. 외부 솔루션 도입이 현실적이며, 솔루션 평가 기준이 명확해야 합니다.
  - **섀도우 AI 문제**: 모델 2를 준수하기 위해 통제를 강화할수록 직원들이 우회 사용을 시도할 가능성이 커집니다. 통제와 활용성의 균형 설계가 필요합니다.

---

### Section 11: 8. 우리 기관이 해야 할 일 — `id="section-8"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [N] Number steps (7단계) + [Q] Takeaways banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `8. 우리 기관이 해야 할 일` |
| Title brand keyword | `<span class="ds-text--brand">우리 기관</span>` |

#### 도입 단락

"모델 2를 실제 적용하기 위해 정보화담당관이 단계적으로 수행해야 할 작업은 다음과 같습니다."

#### 7단계 실행 → `ds-bullet--number` (7항목, 각 항목 첫 어구 strong)

1. **활용 시나리오 정의**: 직원들이 외부 AI를 어떤 업무에 어떻게 활용할 것인지 구체적으로 정의합니다. 단순히 "ChatGPT를 도입하겠다"가 아니라, "어떤 부서가 어떤 업무에 어떤 정보로 어떻게 활용하는가"를 명확히 합니다.
2. **정보 등급 분류**: 활용 시나리오에서 다루어질 정보들의 C/S/O 등급을 평가합니다. O 등급으로 한정되는 활용 범위가 어디까지인지가 이 단계에서 명확해집니다.
3. **「위치-주체-객체」 모델링**: 시나리오를 모델 2와 같은 방식으로 모델링하고 보안원칙을 적용합니다. 모델 2 문서의 분석 구조를 그대로 따르면 됩니다.
4. **보안위협 식별 및 추가 위협 검토**: 모델 2의 21개 위협을 기본으로, 우리 기관 특성에 따른 추가 위협이 있는지 검토합니다.
5. **보안통제 항목 선택**: 50여 개 통제 항목 중 우리 기관 환경에 적용해야 할 항목을 선택합니다. 모든 항목을 일률 적용할 필요는 없으며, 기관 특성에 맞춰 조정합니다.
6. **AI 연계체계 솔루션 평가·도입**: 통제 항목을 충족할 수 있는 AI 연계체계 솔루션을 선정합니다. 자체 구축은 현실적으로 어려우며, 외부 솔루션 평가가 일반적입니다.
7. **운영 체계 구축**: 사용자 교육, 모니터링, 감사 로그, 사고 대응 절차를 마련합니다.

#### Takeaways Banner (이 글의 핵심 요약) — `ds-banner--brand`

원본의 `takeaways` div를 banner로 변환:
- banner label: `이 글의 핵심 요약`
- **ds-bullet--dot (5항목):**
  - 모델 2는 공공기관의 외부 상용 AI 활용을 위한 첫 공식 가이드입니다
  - 「위치(S)-주체(S)-객체(O)」 시나리오로 모델링되며, 활용 정보는 O 등급으로 한정됩니다
  - 21개의 보안위협이 식별되며, 그 중 11개가 AI 연계체계 영역에 집중되어 있습니다
  - 50여 개의 보안통제 항목 중 "데이터 보호 영역"이 가장 까다롭고 솔루션별 차이가 큽니다
  - 모델 2는 S 등급 정보 활용·자체 구축 AI·AI Agent 시나리오는 다루지 않습니다

---

### Section 12: 자주 묻는 질문 (FAQ) — `id="section-faq"`

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

4개 아코디언 카드. 첫 번째만 `ds-ac--open`.

| # | Question | Answer (원문 전문) |
|---|----------|-------------------|
| 1 | 모델 2를 따르면 우리 기관 직원들이 ChatGPT를 자유롭게 쓸 수 있나요? | "자유롭게"라는 표현은 적절하지 않습니다. 모델 2 준수 환경에서도 활용 가능 정보는 O 등급으로 한정되며, AI 연계체계를 경유한 통제된 접근만 가능합니다. 직원이 ChatGPT 사이트에 직접 접속해서 자유롭게 쓰는 형태가 아니라, 기관이 운영하는 AI 연계체계 인터페이스를 통해 사전 승인된 범위에서 사용하게 됩니다. |
| 2 | S 등급 정보로 외부 AI를 활용하려면 어떻게 해야 하나요? | 모델 2 범위 내에서는 불가능합니다. S 등급 정보의 외부 AI 활용을 검토하려면, 보호 처리(예: 비식별화·차등정보보호) 후 전송하는 별도의 아키텍처가 필요하며, 그 아키텍처의 N2SF 정합성에 대한 자체 위험 평가가 요구됩니다. 이 영역은 「공공기관 생성형 AI 도입의 세 가지 길」에서 자세히 다룹니다. |
| 3 | 모델 2의 21개 위협과 50개 통제를 모두 충족해야 하나요? | 문서의 "활용 방안" 절(p.9)에 명시되어 있듯이, 보안통제 항목은 절대적 기준이 아닌 검토 사항입니다. 기관 특성에 맞게 유연하게 적용할 수 있으며, 제시되지 않은 항목을 추가하거나 제시된 항목을 조정·삭제하는 것도 가능합니다. 다만 정당화 논리를 문서화해두는 것이 감사 대응에 필수입니다. |
| 4 | AI 연계체계는 자체 구축이 가능한가요? | 이론상 가능하지만 현실적으로 매우 어렵습니다. 50여 개의 보안통제 항목을 충족하는 시스템을 자체 개발·운영하려면 상당한 인력·예산이 필요하며, 보안 검증의 부담도 큽니다. 대부분의 기관은 외부 솔루션 도입을 선택하며, 조달청 혁신제품 지정·각종 인증을 받은 솔루션이 선택지가 됩니다. |

---

### Section 13: 참고 자료 + 저자 정보 — `id="section-references"`

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

3개 참고문헌 (원문 그대로):
1. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9
2. 국가정보원, 「국가 망 보안체계(N2SF) 보안 가이드라인」, 2024
3. 「전자정부법」, 「국가정보보안기본지침」, 「개인정보 보호법」

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 14: Related Articles — `id="section-related"`

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
| 1 | 정책 분석 | N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리 | `/resources/learn/what-is-n2sf` |
| 2 | 정책 분석 | 공공기관 생성형 AI 도입의 세 가지 길 — AI DLP, sLLM, 레이어 방식 비교 | `/resources/learn/public-sector-genai-three-approaches-in-korea` |
| 3 | 기술 해설 | 단순 비식별화의 한계와 차등정보보호(Differential Privacy)란 무엇인가 | `#` (placeholder — 추후 교체) |

#### Card Structure

```html
<a href="/resources/learn/what-is-n2sf" class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--primary">정책 분석</span>
    <h3 class="ds-card__title">N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리</h3>
    <span class="ds-card__link-text">읽기</span>
  </div>
</a>
```

---

### Section 15: CTA Band — `id="section-cta"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band — `ds-cta-band` |
| Background | `var(--c-bg-dark)` (#0f1130, navy) — capsule CTA band style |
| Background image | `ds-bg--grad-deep` (배경 이미지 1개) |
| Placement | Full-width, container 밖 |

#### Content

| Element | Value |
|---------|-------|
| Title | `모델 2 준수 솔루션을 찾고 계신가요?` |
| Title brand keyword | `<span class="ds-text--brand">모델 2 준수 솔루션</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 모델 2의 AI 연계체계 요건을 충족하는 보호 레이어이며, 차등정보보호 기반으로 S 등급 정보 활용 시나리오까지 확장 검토가 가능합니다. 조달청 혁신제품 지정 및 다수 인증을 보유하고 있습니다. |
| Primary CTA | "데모 신청하기" → `/request-a-demo` |
| CTA style | `btn--invert` (dark bg → white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      <span class="ds-text--brand">모델 2 준수 솔루션</span>을 찾고 계신가요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 모델 2의 AI 연계체계 요건을 충족하는 보호 레이어이며, 차등정보보호 기반으로 S 등급 정보 활용 시나리오까지 확장 검토가 가능합니다. 조달청 혁신제품 지정 및 다수 인증을 보유하고 있습니다.
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 많지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. Section 9 비교 카테고리 테이블의 강조 행(`--c-primary-soft`)과 두 개의 다이어그램 zone 색상(amber/teal/primary-soft)이 본문 내 시각 변화를 제공.

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
| 3 | Lead | Paragraphs | Text flow |
| 4 | 모델 2 중요성 | Section header + body + quote banner | Text + quote |
| 5 | 시나리오 | Section header + checklist + quote + diagram + checklist + callout | Mixed + visual |
| 6 | 보안원칙 | Section header + sub-h3 + checklist + conclusion banner | Mixed |
| 7 | 21개 위협 | Section header + diagram + sub-h3 + bullets | Mixed + visual |
| 8 | AI 연계체계 | Section header + checklist + body | Mixed |
| 9 | 50+ 통제 | Section header + table (highlight row) | Table |
| 10 | 범위와 한계 | Section header + sub-h3 + checklist | Mixed |
| 11 | 해야 할 일 | Section header + numbered steps + takeaways banner | Numbered + banner |
| 12 | FAQ | Section header + accordion | Interactive |
| 13 | References | Section header + dots + author | Text |
| 14 | Related | Card grid 3col | Cards |
| 15 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너, 체크리스트, 번호 스텝, 테이블, 다이어그램, 아코디언, 카드 그리드, quote banner)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] 두 개의 blockquote 전문 보존 (Section 4, 5)
- [ ] N2SF의 ² superscript 모든 위치 보존
- [ ] 보안위협 코드 TH-M2-1~21 모두 보존
- [ ] 보안통제 표 13행 × 3열 전체 데이터 보존
- [ ] 강조 행("생성형 AI 서비스 활용 시 데이터 보호") 시각 강조 적용
- [ ] FAQ 4개 Q&A 전문 보존
- [ ] 참고문헌 3개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존
- [ ] CTA 텍스트·링크 보존
- [ ] SVG 도식 2개는 DS diagram 토큰으로 재구성 (내용 동일)
- [ ] 7단계 실행 항목 원문 보존

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 2개 | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.callout` div (3회) | `ds-banner--brand` (3회) | DS 컴포넌트 매핑 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `.compare-table` | `ds-table` (responsive) with highlight row | DS 테이블 컴포넌트 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `<blockquote>` (2회) | `ds-banner--quote` 또는 quote-style banner | DS 인용구 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| `<ol>` 순서 리스트 (7단계) | `ds-bullet--number` | DS 번호 스텝 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| `.us-cell` 강조 cell | `ds-table__row--highlight` 클래스로 행 전체 강조 | 행 단위 강조가 시각적으로 명확 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 2개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: 모델 2 시나리오 구성과 등급 평가

- **Type:** 영역 zone + 컴포넌트 박스 + 화살표 흐름
- **Top zone (teal-soft, O 등급):** 인터넷 영역
  - Box: 상용 생성형 AI (ChatGPT / Claude 등)
- **Bottom zone (amber-soft, S 등급):** 기관 전산망 영역
  - Box: 업무 시스템 (S 등급)
  - Box: 이용자 단말 (업무 단말 · 온북, S 등급)
  - Box (primary highlight): AI 연계체계 (인증 · 콘텐츠 통제)
- **Arrows:**
  - 업무 시스템 → 이용자 단말 (amber stroke)
  - 이용자 단말 → AI 연계체계 (primary stroke)
  - AI 연계체계 → 상용 AI (primary dashed, "O 정보만 전송 허용" 라벨)
- **Evaluation strip (bottom):** "「위치-주체-객체」 평가 — 위치: 기관 전산망 (S) · 주체: 이용자 단말 (S) · 객체: 상용 AI (O)"
- **Footer:** "핵심 제약: S→O 정보 이동이 발생하므로 활용 가능 정보는 O 등급으로 한정"
- **figcaption:** "도식 1. 모델 2 시나리오 구성과 등급 평가"

### Diagram 2: 21개 보안위협 — 영역별 분류

- **Type:** 3개 영역 zone (수직 배치) + 각 zone 내 위협 항목 mini-card
- **Zone 1 (amber-soft):** 이용자 단말 (업무 단말 · 온북) — 8개 위협 badge (`8개 위협`, amber bg)
  - Mini-cards (2열 그리드, 8개): TH-M2-1 단말 OS·SW 취약점 노출 / TH-M2-2 비인가 SW 설치·실행 / TH-M2-3 단말 비인가 사용 / TH-M2-4 비인가 네트워크 연결 / TH-M2-5 업무정보 비인가 유출 / TH-M2-6 AI 계정 정보 노출 / TH-M2-7 비인가 단말의 AI 접근 / TH-M2-8 악성코드 유입·감염
- **Zone 2 (primary-soft, 강조):** AI 연계체계 — 11개 위협 badge (`11개 위협`, primary bg)
  - Mini-cards (2열 그리드, 11개): TH-M2-9 AI 연계체계 비인가 접근 / TH-M2-10 연계체계 우회 시도 / TH-M2-11 미승인 AI 서비스 접근 / TH-M2-12 O 등급 외 정보 AI 활용 / TH-M2-13 송수신 데이터 유출 / TH-M2-14 외부 비인가 접근 / TH-M2-15 외부 악성 콘텐츠 유입 / TH-M2-16 관리자 계정 비인가 접근 / TH-M2-17 연계체계 취약점 노출 / TH-M2-18 AI 서비스 접속 실패 / TH-M2-19 연계체계 운용 장애
- **Zone 3 (teal-soft):** 생성형 AI 서비스 — 2개 위협 badge (`2개 위협`, teal bg)
  - Mini-cards (2열 그리드, 2개): TH-M2-20 AI 서비스 계정 도용 / TH-M2-21 AI 서비스 통한 정보 유출
- **figcaption:** "도식 2. 21개 보안위협 — 영역별 분류"

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** — 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** — Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** — 코드/라벨 폰트 (Fragment Mono 대신)
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** — 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** — `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** — `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **비교 카테고리 테이블 반응형** — mobile에서 `overflow-x: auto` + scrollbar 숨김 (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
9. **Highlight row 처리** — 9번째 행에 `ds-table__row--highlight` 클래스 적용 → `background-color: var(--c-primary-soft)` + `font-weight: 600`
10. **SVG 도식 placeholder** — diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
11. **Related articles URL** — 1번/2번은 실제 경로 사용 (`/resources/learn/what-is-n2sf`, `/resources/learn/public-sector-genai-three-approaches-in-korea`), 3번은 `#` placeholder
12. **N2SF 표기** — 본문/제목/메타 모두 `N&sup2;SF` 또는 unicode `N2SF` 사용 (HTML breadcrumb 포함)
13. **Blockquote 처리** — 두 개의 blockquote는 `ds-banner--quote` 또는 quote 스타일 배너 사용 (인용 부호 자동 렌더링). 두 번째 blockquote는 strong 처리된 핵심 문장이므로 시각적 강조 유지
14. **Meta tags** — `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
15. **JSON-LD** — BreadcrumbList + FAQPage schema 포함 (FAQ 4개 항목 모두)
16. **word-break: keep-all** — 한국어 텍스트 줄바꿈을 위해 필수
17. **컬러 라인 꾸밈 금지** — 카드·배너에 `border-top/left colored` 장식 금지
18. **eyebrow 허용** — capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
19. **TH-M2 코드 표기** — 도식과 본문 모두 `TH-M2-N` 형식 일관 유지. font-code(JetBrains Mono) 적용 가능
20. **「」 인용부호** — 한국어 인용부호 「」는 유니코드 그대로 사용 (모델 2 문서명, 보안원칙명 등)
21. **N2SF-XX-N 코드** — 본문 Section 9 도입 단락의 통제 항목 코드 표기는 그대로 유지
