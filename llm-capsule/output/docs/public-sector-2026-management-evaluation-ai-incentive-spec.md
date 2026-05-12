# public-sector-2026-management-evaluation-ai-incentive-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_07_management_evaluation.html`
> Output: `llm-capsule/output/html/public-sector-2026-management-evaluation-ai-incentive-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) -- 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 13 (Hero + TL;DR + Lead + Diagram + 7 body sections + FAQ + References + Related + CTA) |
| Tone | 정책 분석, 평가 편람 해설, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 18분 |
| Category chip | 정책 분석 |
| slug | `public-sector-2026-management-evaluation-ai-incentive` |

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
- Internal links: Framer 상대경로 (`/request-a-demo` 등), `.html` 확장자 금지

---

## SVG Diagram -- DS Diagram Token Conversion

원본 A타입에는 1개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | 2026 경영평가 편람의 AI 활용 평가 항목 -- 두 편람 비교 | Section 4 (Lead 다음) | `ds-diagram` -- 좌우 비교형 (공공기관 vs 지방공기업) + 하단 공통 메시지 + 핵심 시그널 |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` -> `var(--f-display)`
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- 공공기관(기재부): `--c-primary` + `--c-primary-soft`
- 지방공기업(행안부): `--c-amber` + `--c-amber-soft`
- 핵심 시그널(경고): `--c-coral` + `--c-coral-soft`
- 공통 메시지 (회색 박스): `--c-bg-soft`

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
| Breadcrumb | 홈 / 리소스 / Learn / 2026 경영평가 'AI 활용 등 혁신' 가점 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 18분" |
| Date | "2026년 5월" |
| Title | `2026 경영평가 'AI 활용 등 혁신' 가점 -- 공공기관 핵심 경쟁력 분석` |
| Title brand keyword | `<span class="ds-text--brand">'AI 활용 등 혁신' 가점</span>` |
| Description (lead) | 기획재정부와 행정안전부가 2026년 경영평가 편람에 AI 활용 평가 항목을 명시했습니다. 공공기관 혁신 가점 5점 중 AI 활용 1.5점 신설, 지방공기업 경영혁신 항목 1.0점 상향. 단순한 점수 조정을 넘어, 공공기관의 AI 도입이 권장에서 사실상의 의무로 전환되는 정책 신호입니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / 2026 경영평가 'AI 활용 등 혁신' 가점</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">정책 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 18분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      2026 경영평가 <span class="ds-text--brand">'AI 활용 등 혁신' 가점</span> -- 공공기관 핵심 경쟁력 분석
    </h1>
    <p class="ds-article-hero__description">
      기획재정부와 행정안전부가 2026년 경영평가 편람에 AI 활용 평가 항목을 명시했습니다. 공공기관 혁신 가점 5점 중 AI 활용 1.5점 신설, 지방공기업 경영혁신 항목 1.0점 상향. 단순한 점수 조정을 넘어, 공공기관의 AI 도입이 권장에서 사실상의 의무로 전환되는 정책 신호입니다.
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
| Strong tags 보존 | "공공기관 경영평가편람(기재부)", "AI 활용 혁신 1.5점", "지방공기업 경영평가편람(행안부)", "2.0점에서 3.0점으로 상향", "AI 활용 등 디지털 기반 경영 세부평가 방법을 개편", "개인정보보호 준수, AI 윤리·정보보안 가이드라인 반영, 데이터 거버넌스" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>2026년 경영평가 편람에서 AI 활용 관련 평가 항목이 두 편람 모두에 명시되었습니다. <strong>공공기관 경영평가편람(기재부)</strong>은 "공공기관 혁신 노력과 성과 가점 5점" 중 <strong>"AI 활용 혁신" 1.5점</strong>을 신설했고, <strong>지방공기업 경영평가편람(행안부)</strong>은 "경영혁신 추진 활동" 배점을 <strong>2.0점에서 3.0점으로 상향</strong>하면서 그 안에 포함된 <strong>"AI 활용 등 디지털 기반 경영" 세부평가 방법을 개편</strong>했습니다. 두 편람 모두 단순한 AI 도입을 평가하지 않으며, <strong>개인정보보호 준수, AI 윤리·정보보안 가이드라인 반영, 데이터 거버넌스</strong>를 명시적 평가 기준으로 제시합니다. 가점을 받으려면 AI를 도입하는 것이 아니라, N²SF 정합성을 갖춘 안전한 활용 체계를 구축해야 합니다.</p>
    </div>
  </div>
</section>
```

---

### Section 3: Lead (본문 도입) -- `id="section-lead"`

| Property | Value |
|----------|-------|
| Pattern | Article body paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

3개 단락 (원문 그대로):
1. "2026년 1월, 기획재정부와 행정안전부가 각각 발표한 「2026년도 공공기관 경영평가편람」과 「2026년도 지방공기업 경영평가편람」에는 한 가지 공통된 변화가 있습니다. **AI 활용에 대한 평가가 명시적 항목으로 자리 잡았다는 점**입니다."
2. "이 변화는 단순한 점수 조정이 아닙니다. 공공기관 경영평가는 매년 다수의 공공기관과 지방공기업의 운영 성과를 평가하는 가장 권위 있는 정부 평가 체계이며... AI 도입이 권장 사항에서 **사실상의 의무**로 전환되었음을 의미합니다."
3. "이 글은 두 편람의 정확한 항목·배점·평가 기준을 정리하고, 이 변화가 공공기관 정보화 전략에 어떤 의미를 갖는지 분석합니다."

**주의: 연속 본문 3단락이므로 ds-bullet--dot 분리 적용 여부 검토.**
-> 이 경우 3개 단락이 각각 독립적 주장이 아닌 서사적 흐름이므로 불릿 분리 대신 그대로 유지한다. 단, 3단락이 한계이므로 정확히 3개만 배치.

---

### Section 4: 도식 -- 두 편람 비교 -- `id="section-diagram-1"`

| Property | Value |
|----------|-------|
| Pattern | [W] Diagram -- `ds-diagram` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |
| Placement | Lead 직후, Section 5 진입 전 |

#### Content

원본 figure 도식(720x580) 변환:
- 상단 타이틀: "2026 경영평가 편람의 AI 활용 평가 항목"
- 좌측 패널(`--c-primary-soft`): 공공기관 경영평가편람 (기획재정부)
  - 공공기관 혁신 노력과 성과 가점 (5점)
  - ① 안전한 일터 조성 (1.5점)
  - ② **AI 활용 혁신 (1.5점) ← 신설** (강조 박스)
  - ③ 국정과제 등 핵심정책 이행 (2점)
  - ※ 상장공기업은 혁신 프로젝트(비계량 8점)에 AI 도입 평가 통합
- 우측 패널(`--c-amber-soft`): 지방공기업 경영평가편람 (행정안전부)
  - 전략 및 혁신 -- 경영혁신 추진 활동
  - 기존 2.0점 → 2026년 3.0점 (1.0점 상향)
  - **AI 활용 등 디지털 기반 경영 (세부 항목)** (강조 박스)
  - + 적극행정 · 경영혁신 우수사례
  - ※ AI 업무 활용 + AI 교육 + 클라우드 + 데이터 보안 관리체계 신뢰성 확보
- 구분선
- 하단 공통 메시지 섹션 타이틀: "두 편람의 공통 메시지"
- 좌측 박스(`--c-bg-soft`): 평가 대상
  - 단순 도입 여부가 아니라
  - "노력과 성과", "안전한 활용 체계"
  - → 결과 + 과정의 적정성 평가
- 우측 박스(`--c-bg-soft`): 평가 기준
  - ▸ 개인정보보호 법·제도 준수
  - ▸ AI 윤리·정보보안 가이드라인
  - ▸ 데이터 거버넌스·보안 관리체계
- 최하단 박스(`--c-coral-soft`): 핵심 시그널 -- 권장에서 사실상의 의무로
  - "2026년 편람에서 AI 활용이 별도 평가 항목으로 명시됨에 따라, AI 미도입 기관은 비교평가 환경에서 상대적 격차를 받게 됨. 단순 도입이 아닌 보안·윤리·데이터 거버넌스를 갖춘 안전한 도입이 핵심."

#### figcaption

"도식 1. 두 경영평가편람의 AI 활용 평가 항목 비교"

#### Notes
- diagram-builder 에이전트가 별도로 처리. 초기 HTML에는 `<!-- DIAGRAM 1 PLACEHOLDER -->` 주석으로 위치만 표시
- DS diagram 토큰만 사용. 원본 SVG의 색상(#ede9ff, #5b4ee5, #fdf2d8, #d4a850, #fdeaea, #d97070 등)은 모두 DS 토큰으로 치환

---

### Section 5: 1. 공공기관 경영평가편람 -- 공공기관 혁신 노력과 성과 가점 구조 -- `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [O] Table + Sub-h3 + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. 공공기관 경영평가편람 -- "공공기관 혁신 노력과 성과 가점" 구조` |
| Title brand keyword | `<span class="ds-text--brand">공공기관 혁신 노력과 성과 가점</span>` |

#### Body Content

**단락 1 (도입):** "기획재정부가 발표한 「2026년도 공공기관 경영평가편람」은 공기업과 준정부기관을 대상으로 합니다. 이번 편람에서 주목할 영역 중 하나가 **"공공기관 혁신 노력과 성과 가점" 5점**이라는 별도 가점 항목입니다. 이 가점은 다음 세 항목으로 구성됩니다."

#### Compare Table -- `ds-table--responsive`

3열(항목, 배점, 평가 내용) x 3행

| 항목 | 배점 | 평가 내용 |
|------|------|----------|
| ① 안전한 일터 조성 | 1.5점 | 사내외 협력업체 안전역량 강화, 안전문화 확산 |
| ② **AI 활용 혁신** | **1.5점** | **기관 생산성·대국민 공공서비스·근로자 안전 혁신을 위한 AI 활용** |
| ③ 국정과제 등 핵심정책 이행 | 2.0점 | 국정과제 수행, 신규채용, 공공서비스 국민체감도 향상 |

**테이블 스타일:**
- `ds-table` + responsive wrapper (`overflow-x: auto` + scrollbar 숨김)
- ② 행(AI 활용 혁신) 강조: `--c-primary-soft` 배경색 tint
- th: `var(--c-ink)` 배경, white 텍스트

#### 단락 (테이블 이후)

**단락 2:** "편람 원문에 명시된 두 번째 항목의 정확한 명칭은 **"AI 활용을 통한 '기관 생산성'·'대국민 공공서비스'·'근로자 안전' 혁신 등을 위한 노력과 성과"**입니다. 평가 내용은 "AI 활용을 통한 생산성·업무효율 향상, 국민 생활편의 증진, 근로자 안전 제고 등"으로 정의됩니다."

**단락 3:** "이 항목은 **공기업(SOC, 에너지, 산업진흥·서비스)과 준정부기관**에 적용됩니다. 다만 상장공기업은 별도의 평가 구조를 따르는데, 그 구조에서 AI 도입이 평가의 핵심 기준으로 명시되어 있습니다."

#### Sub-section (h3): 상장공기업의 경우 -- "혁신 프로젝트 범주 8점"

- `ds-section-title-icon` (Building 아이콘)
- **단락 1:** "상장공기업은 일반 공기업·준정부기관과 달리 별도의 평가 범주를 가집니다. 기존의 "주요사업 평가"에 더해 **"혁신 프로젝트 범주"가 비계량 8점으로 별도 편성**되어 있으며, 이 범주의 평가 기준에 AI 도입이 명시적으로 포함되어 있습니다."
- **단락 2:** "편람 원문에서 상장공기업 혁신 프로젝트 범주의 평가 기준은 다음과 같이 명시됩니다."
- **ds-bullet--check** (3항목, strong 보존):
  1. **추진계획 평가**: "AI 도입 관련 목표의 타당성, 개인정보보호 등 관련 법·제도 준수요건의 반영 여부, AI 윤리 및 정보보안 가이드라인을 고려한 기획 수준, 데이터 거버넌스·품질·활용계획 등 데이터 전략의 적정성을 종합적으로 고려"
  2. **집행 평가**: "AI 구축·도입·운영 과정에서 개발·운영 절차의 투명성, 보안·윤리·법적 기준에 대한 준수 및 관리 노력, 데이터 품질 관리 및 안전성 확보 수준 등을 종합적으로 고려"
  3. **성과 평가**: "AI 도입을 통한 운영효율성 제고, 서비스 품질 개선, 안전 향상 등 실질적인 혁신 성과가 창출되었는지를 중심으로 성과의 효과성을 종합적으로 평가"
- **마무리 단락:** "세 가지 평가 단계(계획·집행·성과) 모두에 AI 평가 기준이 명시되어 있다는 점이 핵심입니다. 즉 상장공기업의 경우 혁신 프로젝트 범주 비계량 8점의 평가 기준에 AI 도입이 명시적으로 포함되어 있으며, 도입 수준이 평가의 핵심 영향 요소로 작동합니다."

---

### Section 6: 2. 지방공기업 경영평가편람 -- 경영혁신 배점 상향과 AI 평가 강화 -- `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (blockquote) + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. 지방공기업 경영평가편람 -- 경영혁신 배점 상향과 AI 평가 강화` |
| Title brand keyword | `<span class="ds-text--brand">경영혁신 배점 상향</span>` |

#### Body Content

**단락 1:** "행정안전부가 발표한 「2026년도 지방공기업 경영평가편람」은 지방공사·공단을 대상으로 합니다. 공공기관 편람과 별도 체계로 운영되지만, AI 활용 평가 항목이 강화되었다는 점은 동일합니다."

**단락 2:** "편람 제1편(경영평가 일반사항)에서 2026년 개편 사항으로 다음을 명시하고 있습니다."

#### Blockquote -- `ds-banner--quote`

| Element | Value |
|---------|-------|
| Banner label | "편람 원문 인용" |
| Body | "(AI 활성화) AI 활용을 통한 핵심 서비스의 생산성 제고 -- 경영혁신 추진 활동의 노력과 성과 항목에서 AI 활용 등 디지털 기반 경영 구현 노력 및 성과 세부평가 방법 개편" |

#### 단락 (Blockquote 이후)

**단락 3:** "구체적인 변화는 "전략 및 혁신" 지표 내 **"경영혁신 추진 활동의 노력과 성과" 배점이 기존 2.0점에서 2026년 3.0점으로 1.0점 상향**되었다는 점입니다. 이 3.0점 안에 다음 세부 평가 항목들이 함께 포함됩니다."

#### Bullet 1 -- `ds-bullet--dot` (5항목, strong 보존)

1. 경영혁신 추진계획의 적정성
2. 경영혁신 집행·성과·환류의 적정성
3. **AI 활용 등 디지털 기반 경영 구현 노력 및 성과** (세부평가 방법 개편)
4. 적극행정 추진 노력 및 성과
5. 경영혁신 우수사례 실적의 노력과 성과

#### 단락 (Bullet 1 이후)

**단락 4:** "즉 AI 활용 자체가 단독으로 3.0점을 받는 것은 아니며, 경영혁신 활동 전체 3.0점 안에서 AI 활용이 핵심 세부 평가 항목으로 비중을 차지하는 구조입니다. 그리고 그 평가 방법이 2026년부터 명시적으로 개편되었습니다."

**단락 5:** "편람 원문에서 정의하는 "AI 활용 등 디지털 기반 경영 구현 노력 및 성과"의 범위는 다음과 같습니다."

#### Bullet 2 -- `ds-bullet--check` (6항목, strong 보존)

1. AI 업무 활용 제고를 통한 경영 개선 및 의사결정 고도화
2. AI 교육 활성화
3. 클라우드 활용을 통한 업무의 안정성·신속성·비용 효율성 제고
4. 구비서류 감축·선제적 알림서비스·대민 서비스 개선 등을 통한 국민 편의성 향상
5. 데이터 개방 및 민관협력을 통한 서비스 개선과 개방형 생태계 조성
6. **데이터 보안 관리체계의 구축 및 안정적 운영을 통한 신뢰성 확보**

#### 마무리 단락

**단락 6:** "마지막 항목 "데이터 보안 관리체계의 구축 및 안정적 운영을 통한 신뢰성 확보"가 특히 주목할 만합니다. 단순한 AI 도입을 넘어서, 그 도입이 보안 관리체계 위에서 안정적으로 운영되어야 한다는 점이 평가 기준에 명시적으로 반영되어 있습니다."

---

### Section 7: 3. 1.5점이 갖는 실질적 의미 -- 등급 산정에 미치는 영향 -- `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + Sub-h3 x 3 + [L] Checklist x 2 |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. 1.5점이 갖는 실질적 의미 -- 등급 산정에 미치는 영향` |
| Title brand keyword | `<span class="ds-text--brand">1.5점</span>` |

#### Body Content

**단락 1 (도입):** ""1.5점"이라는 수치만 보면 작아 보일 수 있습니다. 그러나 경영평가의 등급 산정 구조를 고려하면, 이 점수가 갖는 실질적 의미는 결코 작지 않습니다."

#### Sub-section (h3): 경영평가 등급 산정의 구조

- `ds-section-title-icon` (Layers 아이콘)
- **단락:** "공공기관 경영평가는 평가 점수를 기준으로 **S(탁월)·A(우수)·B(양호)·C(보통)·D(미흡)·E(아주미흡)**의 6개 등급으로 산정됩니다. 등급 산정 방식은 기관 유형에 따라 세 가지로 나뉩니다."
- **ds-bullet--dot** (3항목, strong 보존):
  1. **공기업(상장) -- 개별평가**: 90/80/70/60/50점 단위의 절대 점수 구간으로 등급 산정
  2. **공기업(SOC·에너지·산업진흥·서비스) -- 유형별 비교평가**: 유형별 특성을 반영해 각 등급별 기관 수를 공운위 심의로 확정
  3. **준정부기관 -- 비교평가**: 당해연도 경영실적 평가점수 및 분포 등 활용

#### Sub-section (h3): 유형별로 다른 1.5점의 무게

- `ds-section-title-icon` (Scale 아이콘)
- **단락 1:** "이 구조 차이 때문에 1.5점이 갖는 의미도 유형마다 다릅니다."
- **단락 2:** "**공기업(상장)**의 경우 한 등급 구간이 10점입니다. 1.5점 가점은 등급 경계선 부근에 위치한 기관에게는 결정적 영향을 미칠 수 있지만, 등급 중간에 안정적으로 위치한 기관에게는 즉각적 등급 변동을 일으키지 않을 수 있습니다. 다만 상장공기업의 경우 혁신가점이 아닌 "혁신 프로젝트 범주 비계량 8점"의 평가에 AI 도입이 직접 반영되는 구조입니다(다음 장에서 상세)."
- **단락 3:** "**공기업(SOC·에너지·산업진흥·서비스)과 준정부기관**의 경우는 절대 점수 구간이 아닌 비교평가입니다. 비슷한 점수대의 기관들이 다수 있는 환경에서 1.5점은 상대적 순위를 바꾸는 결정적 변수가 될 수 있습니다. 같은 유형 안에서 비슷한 점수의 기관이 많을수록 1.5점의 영향력은 커집니다."

#### Sub-section (h3): 등급이 만들어내는 실질적 차이

- `ds-section-title-icon` (TrendingUp 아이콘)
- **단락:** "경영평가 등급은 단순한 평판이 아닙니다. 다음과 같이 매우 구체적인 결과를 동반합니다."
- **ds-bullet--check** (4항목, strong 보존):
  1. **임직원 성과급**: 등급별로 차등 지급되며, 한 등급 차이가 임직원 1인당 적지 않은 성과급 차이로 직결
  2. **기관장 평가**: 경영평가 결과는 기관장 평가의 핵심 요소
  3. **차년도 예산·정원**: 평가 등급이 다음 연도 예산 편성과 정원 운영에 직간접적으로 영향
  4. **기관의 평판**: 평가 결과는 공개되며, 우수 기관과 미흡 기관의 사회적 평판이 크게 갈림
- **마무리 단락:** "따라서 1.5점 가점은 기관 입장에서 결코 가볍게 볼 수 없는 점수입니다. 특히 유형별 비교평가나 비교평가가 적용되는 기관에서 그 영향이 두드러집니다."

---

### Section 8: 4. 두 편람의 공통 메시지 -- 평가는 도입이 아닌 안전한 활용 -- `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Sub-h3 x 2 + [L] Checklist + Body paragraphs |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 두 편람의 공통 메시지 -- 평가는 도입이 아닌 안전한 활용` |
| Title brand keyword | `<span class="ds-text--brand">안전한 활용</span>` |

#### Body Content

**단락 1:** "두 편람의 가장 중요한 공통점은 **평가 대상이 "AI 도입 여부"가 아니라 "AI 활용의 노력과 성과"**라는 점입니다. 그리고 이 노력과 성과는 단순한 활용도가 아니라, 다음 요소를 함께 평가합니다."

#### Sub-section (h3): 4.1 평가 기준에 명시된 보안·윤리 요건

- `ds-section-title-icon` (Shield 아이콘)
- **단락 1:** "공공기관 편람의 상장공기업 평가 기준에는 다음이 명시되어 있습니다."
- **ds-bullet--check** (5항목):
  1. "개인정보보호 등 관련 법·제도 준수요건의 반영 여부"
  2. "AI 윤리 및 정보보안 가이드라인을 고려한 기획 수준"
  3. "데이터 거버넌스·품질·활용계획 등 데이터 전략의 적정성"
  4. "개발·운영 절차의 투명성, 보안·윤리·법적 기준에 대한 준수"
  5. "데이터 품질 관리 및 안전성 확보 수준"
- **단락 2:** "지방공기업 편람의 평가 범위에도 마찬가지로 다음이 포함됩니다."
- **ds-bullet--check** (1항목):
  1. "데이터 보안 관리체계의 구축 및 안정적 운영을 통한 신뢰성 확보"
- **마무리 단락:** "두 편람 모두 단순한 도입 여부가 아니라, **그 도입이 보안·윤리·법·데이터 거버넌스 기준을 충족하는지**를 평가합니다. AI를 도입했지만 보안 통제가 부재하거나, 개인정보 처리에 문제가 있거나, 데이터 거버넌스가 부실하다면 도입 자체가 가점 요소로 작동하지 않을 수 있습니다."

#### Sub-section (h3): 4.2 N²SF 정합성과의 연결

- `ds-section-title-icon` (Link 아이콘)
- **단락 1:** "이 평가 기준은 2024년 발표된 **N²SF(국가 망 보안체계)** 및 2025년 9월 발간된 모델 2 해설서가 제시하는 보안 통제 요건과 정확히 연결됩니다."
- **ds-bullet--dot** (4항목):
  1. 편람의 "정보보안 가이드라인" → N²SF의 보안원칙과 모델 2 보안 통제 항목
  2. 편람의 "개인정보보호 법·제도 준수" → 모델 2의 보안위협 식별 및 통제
  3. 편람의 "데이터 거버넌스" → N²SF의 「위치-주체-객체」 모델링과 정보 등급 분류
  4. 편람의 "데이터 보안 관리체계" → 모델 2의 AI 연계체계 보안 요건
- **마무리 단락:** "즉 경영평가에서 가점을 확보하기 위해 필요한 것이 곧 N²SF 모델 2 정합성을 갖춘 AI 도입입니다. 두 정책이 분리된 별개의 요구가 아니라, 동일한 방향을 가리키는 두 축인 셈입니다."

---

### Section 9: 5. 권장에서 사실상의 의무로 -- 미도입의 상대적 감점 -- `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Sub-h3 x 3 + Article body + Blockquote banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 권장에서 사실상의 의무로 -- 미도입의 상대적 감점` |
| Title brand keyword | `<span class="ds-text--brand">권장에서 사실상의 의무로</span>` |

#### Body Content

**단락 1:** "2026년 편람의 가장 중요한 변화는 **AI 활용이 별도의 평가 항목으로 명시되었다는 사실** 그 자체입니다. 이전까지 AI 도입은 디지털 전환의 한 부분으로 막연하게 평가되었지만, 2026년부터는 별도 항목으로 분리되었습니다."

**단락 2:** "이 변화가 갖는 의미는 두 가지입니다."

#### Sub-section (h3): 5.1 AI 도입 기관은 가점 확보 가능

- `ds-section-title-icon` (PlusCircle 아이콘)
- **단락:** "이 변화의 표면적 의미입니다. 2026년 평가에서 AI 활용 항목에 부합하는 도입 사례를 갖추면 가점을 받을 수 있습니다. 공공기관은 혁신가점 1.5점, 지방공기업은 경영혁신 추진 활동 3.0점 안에서 AI 활용이 핵심 평가 항목으로 작동합니다."

#### Sub-section (h3): 5.2 AI 미도입 기관은 상대적 격차

- `ds-section-title-icon` (MinusCircle 아이콘)
- **단락 1:** "더 중요한 것은 이 변화의 이면입니다. 경영평가의 다수 유형이 비교평가 또는 유형별 비교평가 방식으로 등급을 산정합니다. 어떤 기관이 가점을 받으면, 그만큼 같은 유형 안의 다른 기관과의 상대적 격차가 발생합니다."
- **단락 2:** "AI를 도입한 기관이 가점을 추가로 확보하는 동안, AI를 도입하지 않은 기관은 그 점수를 확보할 수 없습니다. 이는 표면상 "감점"이 아니지만, 비교평가 환경에서는 사실상 감점과 동일한 효과를 만듭니다."
- **단락 3:** "특히 비슷한 점수대의 기관들이 몰려 있는 중위권에서는 이 효과가 크게 작용합니다. AI 도입 여부 하나가 B 등급과 C 등급을 가르는 결정적 변수가 될 수 있습니다."

#### Sub-section (h3): 5.3 결과 -- 도입 검토가 아닌 도입 계획의 단계로

- `ds-section-title-icon` (ArrowRight 아이콘)
- **단락 1:** "위 두 가지 효과를 종합하면, 2026년 편람의 메시지는 다음과 같이 해석할 수 있습니다."
- **Blockquote -- `ds-banner--quote`:**
  - banner label: "핵심 메시지"
  - body: ""AI 도입을 검토할지 말지가 아니라, **어떻게 안전하게 도입할지**를 결정해야 하는 단계.""
- **마무리 단락:** "미도입의 상대적 감점 효과를 고려하면, 도입 시기를 늦추는 것이 가점 확보의 기회를 놓치는 것과 동일한 결과를 만듭니다. 그렇다고 안전성 검증 없이 서둘러 도입하면 가점이 아닌 감점 위험을 안게 됩니다(다음 장에서 다룹니다). 균형 잡힌 신속한 도입이 핵심 과제입니다."

---

### Section 10: 6. 잘못된 도입의 감점·평판 리스크 -- `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + Sub-h3 x 4 + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 잘못된 도입의 감점·평판 리스크` |
| Title brand keyword | `<span class="ds-text--brand">감점·평판 리스크</span>` |

#### Body Content

**단락 1:** "가점 확보를 위해 무리한 AI 도입을 추진하다 오히려 더 큰 손실을 보는 경우가 있습니다. 다음 시나리오들을 주의해야 합니다."

#### Sub-section (h3): 6.1 보안 통제 부재 도입 -- "도입했으나 평가 기준 미달"

- `ds-section-title-icon` (AlertTriangle 아이콘)
- **단락:** "AI 솔루션을 도입했지만 편람에서 명시한 평가 기준(개인정보보호, AI 윤리, 정보보안 가이드라인, 데이터 거버넌스)을 충족하지 못하는 경우입니다. 도입 자체로는 점수가 인정되지 않을 가능성이 높습니다. 더 나아가 보안 사고가 발생하면 도입한 사실이 오히려 감점 사유가 될 수 있습니다."

#### Sub-section (h3): 6.2 개인정보 사고 -- 경영평가 외 추가 손실

- `ds-section-title-icon` (AlertCircle 아이콘)
- **단락:** "AI 도입 과정에서 개인정보 유출 사고가 발생하면 경영평가 가점 상실에 더해 다음과 같은 추가 손실이 발생합니다."
- **ds-bullet--dot** (4항목):
  1. 「개인정보 보호법」에 따른 과징금·과태료
  2. 피해자 손해배상 책임
  3. 기관장 행정처분
  4. 사회적 평판 타격 (다른 평가 항목에도 영향)

#### Sub-section (h3): 6.3 섀도우 AI 묵인 -- 사후 발견 시 더 큰 문제

- `ds-section-title-icon` (EyeOff 아이콘)
- **단락:** "공식 도입을 미루는 사이 직원들이 개인 단말이나 비공식 경로로 외부 AI를 사용하고, 이 과정에서 업무 정보가 노출되는 경우입니다. 사후 적발 시 책임 소재가 기관에 귀속되며, 경영평가에서 "보안 관리체계 부재"로 평가될 위험이 있습니다."

#### Sub-section (h3): 6.4 형식적 도입 -- 평가 시 노출되는 한계

- `ds-section-title-icon` (XCircle 아이콘)
- **단락:** "가점 확보를 위해 형식적으로 AI 솔루션을 도입했지만 실제 활용도가 낮은 경우입니다. 편람은 "노력과 성과"를 함께 평가하므로, 활용 실적이 부실하면 도입 사실만으로는 충분한 점수를 받지 못합니다. 사용자 활용도, 업무 효율 향상의 정량 지표, 도입 후 변화 사례 등을 함께 갖추어야 합니다."

---

### Section 11: 7. 가점 확보를 위한 우선순위 -- `id="section-7"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + Sub-h3 x 4 (각 우선순위) + [N] Number steps + [L] Checklist + Takeaways banner |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `7. 가점 확보를 위한 우선순위` |
| Title brand keyword | `<span class="ds-text--brand">우선순위</span>` |

#### Body Content

**단락 1 (도입):** "2026년 평가는 2026년 한 해 동안의 실적을 평가하는 것입니다. 따라서 평가 대상 기간 안에 의미 있는 결과를 만들려면 다음 우선순위로 도입을 진행하시는 것이 효율적입니다."

#### Sub-section (h3): 우선순위 1 -- 안전한 활용 체계 설계 (가점 인정의 전제)

- `ds-section-title-icon` (Number "1" 아이콘 또는 Shield)
- **단락:** "편람에서 명시한 평가 기준(보안·윤리·법·데이터 거버넌스)을 갖춘 도입 체계를 먼저 설계합니다. 단순히 AI 솔루션을 도입하는 것이 아니라, N²SF 모델 2 정합성을 갖춘 활용 체계를 마련합니다. 이 단계가 부실하면 이후 모든 가점 활동이 인정되지 않을 위험이 있습니다."

#### Sub-section (h3): 우선순위 2 -- 실제 활용도 확보 (성과의 실체)

- `ds-section-title-icon` (Number "2" 아이콘 또는 Users)
- **단락:** ""노력과 성과"의 성과 측면을 만들어야 합니다. 직원들이 실제로 사용하고, 업무 효율이 측정 가능한 방식으로 향상되어야 합니다. 도입 후 활용도가 낮으면 가점 인정이 어렵습니다. 사용자 교육, 챔피언 발굴, 활용 사례 공유 등 정착 활동이 필요합니다."

#### Sub-section (h3): 우선순위 3 -- 평가 대응 자료 축적 (가점 인정의 근거)

- `ds-section-title-icon` (Number "3" 아이콘 또는 FileText)
- **단락:** "편람의 평가는 자료 기반 심사입니다. 평가 대응 자료를 도입 초기부터 체계적으로 축적해야 합니다."
- **ds-bullet--check** (5항목, strong 보존):
  1. **도입 추진계획서**: 보안·윤리·법 검토 포함
  2. **자체 위험평가서**: N²SF 정합성 논거
  3. **운영 모니터링 기록**: 활용도, 보안 이벤트, 사고 대응
  4. **성과 측정 자료**: 도입 전후 업무 효율 비교, 정량 KPI
  5. **외부 검증 자료**: 솔루션 인증·자격, 외부 자문 결과

#### Sub-section (h3): 우선순위 4 -- 혁신 사례화 (가점 확대의 추가 요소)

- `ds-section-title-icon` (Number "4" 아이콘 또는 Award)
- **단락:** "평가 우수 사례, 표창, 외부 인정 등을 통해 도입 성과를 가시화합니다. 지방공기업 편람의 경우 "경영혁신 우수사례의 구체적 실적"이 별도 평가 요소로 명시되어 있어, 외부 인정 사례 확보가 추가 가점으로 작동할 수 있습니다."

#### Takeaways Banner -- `ds-banner--brand`

원본의 `takeaways` div를 banner로 변환:
- banner label: "2026 경영평가 AI 가점 확보 핵심 정리"
- **ds-bullet--dot** (6항목):
  1. 공공기관(기재부): 혁신 가점 5점 중 AI 활용 혁신 1.5점 신설
  2. 지방공기업(행안부): "경영혁신 추진 활동" 2.0점 → 3.0점 상향, AI 활용이 핵심 세부 항목
  3. 평가 대상은 도입 여부가 아닌 "노력과 성과" -- 보안·윤리·데이터 거버넌스 포함
  4. N²SF 모델 2 정합성이 가점 인정의 전제 조건으로 작동
  5. 미도입 기관은 상대평가에서 사실상의 감점 효과
  6. 형식적 도입은 가점이 아닌 감점 위험을 동반

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
| 1 | 우리 기관은 공기업인데 혁신 가점이 5점 중 1.5점입니까, 아니면 별도입니까? | 유형에 따라 다릅니다. **공기업(SOC, 에너지, 산업진흥·서비스)과 준정부기관**은 "공공기관 혁신 노력과 성과 가점 5점" 안에서 AI 활용 혁신 1.5점을 받을 수 있습니다. 반면 **공기업(상장)**은 별도로 "혁신 프로젝트 범주 비계량 8점"이 있고, 그 범주의 추진계획·집행·성과 모든 단계에 AI 평가가 명시되어 있습니다. 상장공기업의 경우 AI 도입이 8점 평가의 핵심 영향 요소로 작동합니다. |
| 2 | 지방공기업 편람의 3.0점이 모두 AI 활용 평가인가요? | 아닙니다. 3.0점은 "전략 및 혁신" 지표의 ❸ "경영혁신 추진 활동의 노력과 성과" 전체 배점이며, 그 안에 ▴경영혁신 추진계획의 적정성 ▴경영혁신 집행·성과·환류 ▴**AI 활용 등 디지털 기반 경영 구현 노력 및 성과** ▴적극행정 추진 노력 및 성과 ▴경영혁신 우수사례 실적의 노력과 성과가 함께 포함됩니다. 2026년 편람에서 이 항목 전체 배점이 2.0점에서 3.0점으로 1.0점 상향되었고, 그 안의 AI 활용 평가 방법이 명시적으로 개편되었습니다. AI 활용은 일반 배점 평가에 포함된 핵심 세부 항목으로 작동합니다. |
| 3 | 2026년 평가 기간 안에 도입까지 마쳐야 가점을 받을 수 있나요? | 편람은 "노력과 성과"를 평가합니다. 즉 도입 완료뿐 아니라 도입 추진 과정의 노력도 평가 대상입니다. 다만 평가 자료 제출 시점에 일정 수준의 실적이 있어야 가점 인정이 가능합니다. 2026년 한 해 동안 도입 추진계획 수립·솔루션 도입·초기 운영까지 이루어지면 평가 기준을 충족할 수 있습니다. |
| 4 | AI 활용 가점과 N²SF는 어떤 관계가 있나요? | 편람의 평가 기준에 명시된 "정보보안 가이드라인", "개인정보보호 법·제도 준수", "데이터 거버넌스", "데이터 보안 관리체계"가 모두 N²SF 가이드라인과 모델 2 해설서가 제시하는 보안 요건과 직접 연결됩니다. 즉 N²SF 모델 2 정합성을 갖춘 AI 도입이 곧 경영평가 가점 인정의 핵심 조건이 됩니다. 두 정책은 별개가 아니라 같은 방향을 가리키는 두 축입니다. |
| 5 | 형식적 도입으로도 가점을 받을 수 있나요? | 어렵습니다. 편람은 "노력과 성과"를 함께 평가하며, 평가위원은 도입 사실뿐 아니라 활용도·성과·사용자 만족도 등을 함께 봅니다. 형식적 도입 시 활용 실적이 부실하면 가점 인정이 어려울 뿐 아니라, 평가위원의 신뢰도 측면에서 다른 항목 평가에도 부정적 영향을 줄 수 있습니다. |
| 6 | AI 도입 추진 단계의 우선순위는 무엇인가요? | 안전한 활용 체계 설계가 가장 먼저입니다. 편람의 평가 기준이 보안·윤리·데이터 거버넌스를 명시하고 있으므로, 이 기준을 충족하지 못하면 가점 인정이 어렵습니다. 그 다음으로 실제 활용도 확보, 평가 대응 자료 축적, 우수 사례 가시화의 순서로 진행하시는 것이 효율적입니다. |

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

4개 참고문헌 (원문 그대로):
1. 기획재정부, 「2026년도 공공기관 경영평가편람」, 2026.1
2. 행정안전부, 「2026년도 지방공기업 경영평가편람」, 2026.1
3. 국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024
4. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 -- 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9

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

| # | Tag (badge) | Title | URL |
|---|-------------|-------|-----|
| 1 | 정책 분석 | N²SF란 무엇인가 -- 공공기관 보안의 새 패러다임 완벽 정리 | `/resources/learn/what-is-n2sf` |
| 2 | 정책 분석 | N²SF 모델 2 완벽 해설 -- 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 3 | 현장 분석 | 공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 | `/resources/learn/public-sector-genai-five-stuck-points` |

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
| Title | `2026 평가 대응 AI 도입을 준비하고 계신가요?` |
| Title brand keyword | `<span class="ds-text--brand">2026 평가 대응</span>` |
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 N²SF 모델 2 정합성을 갖춘 차등정보보호 기반 보호 레이어로, 경영평가 편람의 보안·윤리·데이터 거버넌스 요건을 충족합니다. 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있으며, 평가 대응 도입 컨설팅을 함께 제공합니다. |
| Primary CTA | "데모 신청하기" -> `/request-a-demo` |
| CTA style | `btn--invert` (dark bg -> white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      <span class="ds-text--brand">2026 평가 대응</span> AI 도입을 준비하고 계신가요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 N²SF 모델 2 정합성을 갖춘 차등정보보호 기반 보호 레이어로, 경영평가 편람의 보안·윤리·데이터 거버넌스 요건을 충족합니다. 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있으며, 평가 대응 도입 컨설팅을 함께 제공합니다.
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
- 원본 "데모 신청하기 ->" 화살표 유지

---

## Background Image Assignment

| Section | Background |
|---------|-----------|
| Section hero | White only |
| Sections tldr ~ references | White (article body) |
| Section related | White |
| Section CTA | `ds-bg--grad-deep` (배경 이미지) |

**Background image count: 1** (CTA only)

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 13개 이상이지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 비교표/도식 섹션은 컴포넌트 자체의 컬러 토큰(primary-soft, amber-soft, coral-soft, bg-soft)으로 시각 변화 제공.

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
| 3 | Lead | Paragraphs | Text flow |
| 4 | Diagram 1 | DS diagram | Visual diagram |
| 5 | 공공기관 편람 | Section header + body + table + sub-h3 + checklist | Mixed + table |
| 6 | 지방공기업 편람 | Section header + body + quote banner + bullets | Mixed + quote |
| 7 | 1.5점 의미 | Section header + sub-h3 x 3 + bullets + checklist | Mixed |
| 8 | 공통 메시지 | Section header + sub-h3 x 2 + checklists | Mixed |
| 9 | 권장→의무 | Section header + sub-h3 x 3 + quote banner | Mixed + quote |
| 10 | 잘못된 도입 | Section header + sub-h3 x 4 + bullets | Mixed |
| 11 | 우선순위 | Section header + sub-h3 x 4 + checklist + takeaways banner | Mixed + banner |
| 12 | FAQ | Section header + accordion | Interactive |
| 13 | References | Section header + dots + author | Text |
| 14 | Related | Card grid 3col | Cards |
| 15 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너, 테이블, 인용 배너, 체크리스트, 번호 스텝, 다이어그램, 아코디언, 카드 그리드)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] blockquote 원문 인용 보존 (Section 6 편람 원문, Section 9 핵심 메시지)
- [ ] 비교표 3행 3열 전체 데이터 보존 (Section 5)
- [ ] 모든 bullet list 항목 원문 그대로
- [ ] FAQ 6개 Q&A 전문 보존
- [ ] 참고문헌 4개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그·URL 보존
- [ ] CTA 텍스트·링크 보존 (`/request-a-demo`)
- [ ] SVG 도식 1개는 DS diagram 토큰으로 재구성 (내용 동일)
- [ ] takeaways 6항목 전문 보존 (Section 11 마지막)

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 1개 | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.compare-table` (3행) | `ds-table` (responsive, AI 행 강조) | DS 테이블 컴포넌트 |
| `<blockquote>` (2개) | `ds-banner--quote` with label | DS 인용 배너 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| `var(--f-sans)` SVG | `var(--f-display)` (Inter) | capsule v6.2 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 1개 다이어그램을 `diagram-builder` 에이전트에 위임.

### Diagram 1: 2026 경영평가 편람의 AI 활용 평가 항목 비교

- **Type:** 좌우 비교형 + 하단 공통 메시지 + 핵심 시그널 (3단 레이아웃)
- **Top zone:** 상단 타이틀 "2026 경영평가 편람의 AI 활용 평가 항목"
- **Left panel (`--c-primary-soft`):** 공공기관 경영평가편람 (기획재정부, 공기업·준정부기관)
  - 헤더: 공공기관 혁신 노력과 성과 가점 (5점)
  - 항목 1: ① 안전한 일터 조성 (1.5점)
  - 항목 2 (강조 박스, white bg + primary border): **② AI 활용 혁신 (1.5점) ← 신설** + 부연 "기관 생산성·대국민 서비스·근로자 안전"
  - 항목 3: ③ 국정과제 등 핵심정책 이행 (2점)
  - 푸터 주: ※ 상장공기업은 혁신 프로젝트(비계량 8점)에 AI 도입 평가가 통합 반영
- **Right panel (`--c-amber-soft`):** 지방공기업 경영평가편람 (행정안전부, 지방공사·공단)
  - 헤더: 전략 및 혁신 -- 경영혁신 추진 활동
  - 부연: 기존 2.0점 → 2026년 3.0점 (1.0점 상향)
  - 강조 박스 (white bg + amber border): **AI 활용 등 디지털 기반 경영 (세부 항목)** + 부연 "3.0점 안에 포함, 세부평가 방법 개편"
  - 항목: + 적극행정 · 경영혁신 우수사례
  - 푸터 주: ※ AI 업무 활용 + AI 교육 + 클라우드 + 데이터 보안 관리체계 신뢰성 확보
- **Divider:** 수평 구분선
- **Middle zone title:** "두 편람의 공통 메시지"
- **Bottom-left box (`--c-bg-soft`):** 평가 대상
  - 단순 도입 여부가 아니라
  - "노력과 성과", "안전한 활용 체계"
  - → 결과 + 과정의 적정성 평가
- **Bottom-right box (`--c-bg-soft`):** 평가 기준
  - ▸ 개인정보보호 법·제도 준수
  - ▸ AI 윤리·정보보안 가이드라인
  - ▸ 데이터 거버넌스·보안 관리체계
- **Final alert box (`--c-coral-soft` + `--c-coral` border):** 핵심 시그널 -- 권장에서 사실상의 의무로
  - 본문: "2026년 편람에서 AI 활용이 별도 평가 항목으로 명시됨에 따라, AI 미도입 기관은 비교평가 환경에서 상대적 격차를 받게 됨. 단순 도입이 아닌 보안·윤리·데이터 거버넌스를 갖춘 안전한 도입이 핵심."
- **figcaption:** "도식 1. 두 경영평가편람의 AI 활용 평가 항목 비교"

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** -- 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** -- Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** -- 코드/라벨 폰트
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** -- 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** -- `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-amber`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** -- `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **테이블 반응형** -- mobile에서 `overflow-x: auto` + scrollbar 숨김 (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
9. **SVG 도식 placeholder** -- diagram-builder 완료 전까지 `<!-- DIAGRAM 1 PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
10. **Related articles URL** -- 실제 URL 사용 (위 표 참조). `/resources/learn/{slug}` 형식
11. **Meta tags** -- `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
12. **JSON-LD** -- BreadcrumbList + FAQPage schema 포함
13. **word-break: keep-all** -- 한국어 텍스트 줄바꿈을 위해 필수
14. **컬러 라인 꾸밈 금지** -- 카드·배너에 `border-top/left colored` 장식 금지
15. **eyebrow 허용** -- capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
16. **N²SF 표기** -- 모든 본문에서 "N²SF" 표기 유지 (위첨자 2). HTML 엔티티 `N&sup2;SF` 또는 `<sup>2</sup>` 사용
17. **「」 일본식 묘제괄호** -- 편람명에 사용되는 「2026년도 공공기관 경영평가편람」 등 그대로 유지
18. **❶❷❸ ▴▸** 특수문자 -- 원문 보존 (UTF-8 인코딩 확인)
19. **strong 태그 보존** -- 모든 strong 태그 원문 위치 그대로 유지
20. **6.4 AlertTriangle 등 아이콘** -- design-system의 icon set에서 매핑 (Lucide 또는 동등한 아이콘 세트)
