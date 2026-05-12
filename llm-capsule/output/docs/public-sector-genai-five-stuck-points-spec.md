# public-sector-genai-five-stuck-points-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_06_five_stuck_points.html`
> Output: `llm-capsule/output/html/public-sector-genai-five-stuck-points-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) -- 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 13 (Hero + TL;DR + Lead + Diagram + 5 Stuck Points + 결론 + FAQ + References + Related + CTA) |
| Tone | 정책 분석, 현장 진단, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 16분 |
| Category chip | 현장 분석 |

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
- Capsule brand tokens: `--c-primary`, `--c-teal`, `--c-coral`, `--c-ink`, `--c-bg-dark` etc.
- Capsule button: solid ink bg + hover primary (gradient 버튼 폐기)
- Internal links: Framer 상대경로 (`/request-a-demo` 등), `.html` 확장자 금지

---

## SVG Diagrams -- DS Diagram Token Conversion

원본 A타입에는 1개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | 5가지 막힘 지점의 단계별 분포 | Lead 단락 직후 | `ds-diagram` -- 상단 5단계 프로세스 + 하단 5개 막힘 카드 매핑 |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` -> `var(--f-display)`
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- 도입 절차 5단계(상단): `--c-primary-soft` + `--c-primary` 텍스트
- 막힘 지점 5개(하단): `--c-coral-soft` + `--c-coral` 강조
- 연결선: `--c-coral` dashed
- 5개 막힘 지점 번호(1~5): `--c-coral` 원형 배지 + white 텍스트

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
| Breadcrumb | 홈 / 리소스 / Learn / 공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 |
| Category chip | `ds-badge--primary` "현장 분석" |
| Reading time | "예상 읽기 시간 16분" |
| Date | "2026년 5월" |
| Title | `공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 — 현장 분석` |
| Title brand keyword | `<span class="ds-text--brand">5가지</span>` |
| Description (lead) | N²SF·모델 2가 정리되고 시장 솔루션도 다양해졌지만, 실제 공공기관의 AI 도입은 여전히 자주 막힙니다. 정책 문서가 다루지 않는 현장의 막힘 지점 5가지와 풀어내는 방향을 정리합니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / 공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">현장 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 16분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      공공기관 생성형 AI 도입 시 가장 많이 막히는 <span class="ds-text--brand">5가지</span> — 현장 분석
    </h1>
    <p class="ds-article-hero__description">
      N²SF·모델 2가 정리되고 시장 솔루션도 다양해졌지만, 실제 공공기관의 AI 도입은 여전히 자주 막힙니다. 정책 문서가 다루지 않는 현장의 막힘 지점 5가지와 풀어내는 방향을 정리합니다.
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
| Strong tags | "매우 구체적인 현장 패턴", "물리적·구조적 한계" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>공공기관 생성형 AI 도입의 막힘은 추상적인 "보안 vs 활용성 갈등" 같은 일반론이 아니라, <strong>매우 구체적인 현장 패턴</strong>으로 나타납니다. (1) 수백만 건 문서의 등급 분류 부담, (2) 활용 시나리오와 모델 2 O 등급 한정의 충돌, (3) 비교 가능한 보호 레이어 솔루션 부족, (4) 예산 산정 시점과 시장 변화의 불일치, (5) DLP 과차단·O 등급 한계로 인한 도입 후 활용 실패. 각 막힘은 정책 절차 자체가 아니라 그 정책을 실제 환경에 적용할 때의 <strong>물리적·구조적 한계</strong>에서 발생합니다. 풀이 방향은 시스템 연동·단계적 도입·보호 레이어 등 우회 경로에 있으며, 한 가지 정답은 없지만 막힘의 실제 모습을 정확히 진단하면 풀 수 있는 영역입니다.</p>
    </div>
  </div>
</section>
```

---

### Section 3: Lead (본문 도입) -- `id="section-lead"`

| Property | Value |
|----------|-------|
| Pattern | Article body paragraphs + blockquote |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

**단락 1:** "공공기관의 생성형 AI 도입은 2024년 N²SF 가이드라인 발표, 2025년 모델 2 해설서 발간을 거치며 정책적 틀이 갖춰졌습니다. 시장에는 다양한 솔루션이 나왔고, 조달청 혁신제품 지정 사례도 늘었습니다. 그런데 현장에서 정보화담당관과 이야기를 나누다 보면 같은 말이 자주 들립니다."

**Blockquote:** "정책은 알겠는데, 막상 우리 기관에 적용하려니 어디서부터 꼬여서 진행이 안 됩니다."
- 컴포넌트: `ds-quote` 또는 `ds-banner--quote` (좌측 컬러 라인 금지 -- DS 토큰 기반 인용 스타일)
- 인용 정렬: center alignment + 큰 따옴표 장식 허용

**단락 2:** "이 글은 그 "꼬여서 진행이 안 되는" 지점들을 정리한 현장 분석입니다. 추상적인 "보안 vs 활용성의 균형" 같은 일반론이 아니라, 실제 도입 현장에서 반복적으로 관찰되는 <strong>구체적 막힘 패턴 5가지</strong>를 다룹니다. 각 막힘에 대해 (1) 실제 어떻게 막히는지, (2) 왜 그렇게 막히는지, (3) 풀어내는 방향을 정리합니다."

**단락 3:** "이 글이 정보화담당관·보안담당관에게 도움이 되는 지점은 두 가지입니다. 첫째, "우리 기관만 이런 게 아니다"라는 확인. 둘째, 같은 막힘을 다른 기관은 어떻게 우회했는지에 대한 참고입니다."

**참고:** 3개 단락이 모두 짧고 서사적 흐름이므로 ds-bullet--dot 분리 적용하지 않음. blockquote가 시각적 단조로움을 깬다.

---

### Section 4: Diagram 1 -- 5가지 막힘 지점의 단계별 분포 -- `id="section-diagram"`

| Property | Value |
|----------|-------|
| Pattern | [W] Diagram -- `ds-diagram` |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Content

도식 1 (원본의 SVG)를 DS diagram 토큰으로 재구성한 영역. **diagram-builder placeholder만 표시**, 실제 다이어그램은 별도 위임.

- figcaption: "도식 1. 5가지 막힘 지점의 단계별 분포"

---

### Section 5: 지점 1 -- 수백만 건 문서의 등급 분류 부담 -- `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (callout) + [L] Checklist + sub-section structure |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `지점 1 — 수백만 건 문서의 등급 분류 부담` |
| Title brand keyword | `<span class="ds-text--brand">등급 분류 부담</span>` |

#### Sub-sections (h3)

**5.1 실제 어떻게 막히는가**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락 1: "N²SF 절차의 두 번째 단계가 정보 등급 분류(C/S/O)입니다. 정책 문서에는 한 줄로 적혀 있습니다. <strong>"기관이 보유한 정보자산을 등급별로 분류한다."</strong> 그런데 막상 시작하면 첫 번째 질문이 떠오릅니다."
- 단락 2 (질문문 강조): "우리 기관이 가진 문서가 몇 개죠?"
  - 컴포넌트: 작은 인용/강조 형태 (가운데 정렬, `ds-text--lg` 또는 `ds-banner--quote` 미니)
- 단락 3: "광역지자체급이면 수백만 건, 중앙부처 본부급이면 수천만 건이 일반적입니다. 전자결재 결재 문서, 민원 처리 내역, 정책 보고서, 회의록, 공지사항, 외부 발송 문서 — 이 모든 것이 분류 대상입니다."
- 단락 4: "이걸 하나씩 분류하면 어떻게 될까요? 한 사람이 하루에 500건씩 분류한다고 가정해도(현실적으로 어렵습니다), 100만 건을 분류하려면 한 사람이 8년 동안 분류만 해야 합니다. 분류 기준을 통일하고 검토 단계를 거치면 시간은 더 늘어납니다."

**Callout -- `ds-banner--brand`** (원문 .callout div):
- 본문: "N²SF는 C/S/O 세 등급을 정의하지만, 실무에서 <strong>C 등급(기밀)은 일반적으로 시스템에 올라가 있지 않고 별도 USB·격리된 보관소 등에 보관</strong>됩니다. 즉 전자결재·문서관리 시스템상에서 분류 대상이 되는 정보는 C 등급을 제외한 S/O 이분입니다. 이 점을 인식하면 분류 작업의 실제 부담이 시각적으로 줄어듭니다."
- banner label: "현장 노트"

**5.2 왜 그렇게 막히는가**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락 1: "이 막힘의 본질은 정책 절차가 아니라 <strong>물리적 규모</strong>입니다. N²SF 가이드라인은 등급 분류의 원칙은 명확히 제시하지만, "수백만 건을 어떻게 효율적으로 분류할 것인가"의 실행 방법은 다루지 않습니다."
- 단락 2: "여기에 부서 간 책임 분담 문제가 더해집니다. 기관 전체 문서를 누가 분류할 것인가? 정보화담당관실이 다 할 수는 없습니다. 그렇다고 각 부서에 맡기면 분류 기준이 부서마다 달라집니다. 이 합의 자체가 또 막힘 요소가 됩니다."

**5.3 풀어내는 방향**
- `ds-section-title-icon` (Lightbulb 아이콘)
- 단락 1 (도입): "개별 분류 작업을 처음부터 끝까지 사람이 하지 않는 것이 핵심입니다. 가장 효과적인 풀이 두 가지를 정리합니다."

**방향 1 — 전자결재 시스템 메타데이터 연동 (가장 일반적)**
- 강조 라벨: `<strong>방향 1 — 전자결재 시스템 메타데이터 연동 (가장 일반적)</strong>`
- 단락: "전자결재 시스템에는 결재 시점에 이미 다음과 같은 메타데이터(flag)가 등록되어 있습니다."
- **메타데이터 항목 -> ds-bullet--dot** (5항목):
  - <strong>작성 주체</strong>: 작성 부서·작성자
  - <strong>문서 제목</strong>
  - <strong>외부·타부서 공개 여부</strong>
  - 결재 라인·접근 권한
  - 문서 종류·분류 코드
- 단락: "이 중 특히 <strong>"외부·타부서 공개 여부" flag</strong>가 S/O 분류에 거의 직접 매핑됩니다. 외부 공개 가능으로 표시된 문서는 O 등급, 내부 한정으로 표시된 문서는 S 등급으로 자동 분류 가능합니다. 작성 부서·문서 종류 같은 다른 flag와 조합하면 정확도가 더 높아집니다."
- 단락: "AI 솔루션이 전자결재 시스템의 표준 API를 호출해서 이 메타데이터를 조회하도록 설계하면, 별도의 대규모 분류 작업 없이 등급을 자동으로 도출할 수 있습니다. 새 분류 체계를 처음부터 만드는 것이 아니라, 이미 운영되고 있는 분류 체계를 활용하는 접근입니다."

**방향 2 — 자체 분류기 sLLM 구축 (섬세한 분류가 필요한 기관)**
- 강조 라벨: `<strong>방향 2 — 자체 분류기 sLLM 구축 (섬세한 분류가 필요한 기관)</strong>`
- 단락: "기관 자체의 분류 정책이 복잡하거나 메타데이터만으로 식별이 어려운 비정형 문서가 많은 경우, 별도의 <strong>분류 전용 sLLM</strong>을 구축하는 것이 효율적 선택지가 됩니다. 본문이 분류 기준을 학습하면, 메타데이터가 없거나 모호한 문서도 자동 분류할 수 있습니다."
- 단락: "이때 분류기용 sLLM은 <strong>업무용 sLLM과 본질적으로 다른 카테고리</strong>로 봐야 합니다."
- **비교 항목 -> ds-bullet--dot** (2항목):
  - <strong>업무용 sLLM</strong>: GPT·Claude 등 상용 LLM과 성능 경쟁을 해야 함. 모델 발전 속도를 따라잡기 위한 지속적 고도화 필요 → 비용·인력 부담 누적
  - <strong>분류기용 sLLM</strong>: 기관 문서의 등급 분류라는 좁은 작업만 잘하면 됨. 한 번 학습된 모델을 장기간 안정적으로 운영 가능 → 지속적 고도화 부담 거의 없음
- 단락: "이런 차이 때문에, 일반적으로 sLLM 자체구축의 약점으로 지적되는 부분(상용 모델과의 격차, 모델 교체 부담)이 분류기 용도에서는 거의 작동하지 않습니다. 분류기용 sLLM은 한 번 잘 구축하면 장기간 안정적으로 운영 가능하고, 그 안정성이 오히려 강점이 됩니다."
- 단락: "두 방향은 상호 배타적이지 않습니다. 1차로 전자결재 메타데이터 연동으로 대부분의 문서를 자동 분류하고, 메타데이터로 식별이 어려운 비정형 문서나 특수 케이스만 분류기 sLLM이 처리하는 <strong>하이브리드 구조</strong>가 가장 실용적인 접근입니다."

**보조 접근:**
- 단락: "위 두 방향에 더해, 다음 보조 접근도 함께 고려할 수 있습니다."
- **ds-bullet--check** (2항목):
  - <strong>대표 샘플 기반 분류</strong>: 모든 문서를 분류하지 않고, 부서·업무·문서종류별 대표 샘플을 분류한 뒤 그 규칙을 자동 적용
  - <strong>단계적 분류</strong>: 우선 활용 시나리오에 직접 사용되는 정보만 분류, 나머지는 운영하면서 점진 확장

---

### Section 6: 지점 2 -- 활용 시나리오와 모델 2 O 등급 한정의 충돌 -- `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `지점 2 — 활용 시나리오와 모델 2 O 등급 한정의 충돌` |
| Title brand keyword | `<span class="ds-text--brand">O 등급 한정</span>` |

#### Sub-sections (h3)

**6.1 실제 어떻게 막히는가**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락 1: "모델 2는 외부 상용 LLM 활용 시 정보를 O 등급으로 한정합니다. 정책적으로 명확한 선이지만, 막상 활용 시나리오 정의 단계에서 현장 부서와 워크숍을 해보면 다른 그림이 나옵니다."
- 단락 2: "직원들이 정작 활용하고 싶은 업무는 다음과 같은 것들입니다."
- **활용 희망 업무 -> ds-bullet--dot** (4항목):
  - 정책 검토 보고서 작성 보조 — 내부 검토 의견 참조 필요
  - 법령 해석 자문 — 기관 자체 해석·내부 자문 자료 활용 필요
  - 회의록 요약 — 내부 회의 내용 입력 필요
  - 민원 응답 초안 작성 — 과거 민원 처리 사례 참조 필요
- 단락 3: "이 업무들에서 활용하고 싶은 정보의 핵심은 모두 <strong>S 등급</strong>입니다. 즉 모델 2 O 등급 한정 도입을 진행하면, 직원들 입장에서는 "정작 쓰고 싶은 데서는 못 쓰는" 상태가 됩니다."

**6.2 왜 그렇게 막히는가**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락 1: "이 막힘은 정책의 결함이 아니라, <strong>정책의 보수적 선과 현장 활용 욕구 사이의 간극</strong>입니다. 모델 2는 안전을 위한 최소 기준선을 제시하는 것이고, 현장 활용 욕구는 그 선 너머에 있는 것이 자연스럽습니다."
- 단락 2: "문제는 의사결정자들이 이 간극을 사전에 인식하지 못한 채 도입을 시작하는 경우입니다. 정책 부합성에 집중해서 시나리오 A(O 등급만)로 도입했는데, 운영 단계에서 직원 만족도가 낮고 활용도가 안 올라서 도입 효과를 입증하기 어려워집니다."

**6.3 풀어내는 방향**
- `ds-section-title-icon` (Lightbulb 아이콘)
- 단락 1: "이 간극을 인정하고 시작하는 것이 첫 단계입니다. 활용 시나리오 정의 단계에서 다음을 명확히 합니다."
- **사전 확인 항목 -> ds-bullet--check** (3항목):
  - O 등급으로만 가능한 시나리오는 무엇인가
  - S 등급 활용이 필요한 시나리오는 무엇인가
  - 두 영역이 직원 활용 욕구에서 차지하는 비중은 각각 얼마인가
- 단락 2: "이 분석 결과에 따라 도입 방식이 갈립니다."
- **도입 분기 -> ds-bullet--dot** (3항목):
  - <strong>O 등급 비중이 충분하면</strong>: 모델 2 표준 절차(시나리오 A)로 진행. 다만 활용 가능 시나리오를 사전에 명시해서 직원 기대 관리
  - <strong>S 등급 활용이 필수면</strong>: 차등정보보호 기반 보호 레이어 도입(시나리오 B). 자체 위험평가 절차가 추가되지만 활용 폭이 본질적으로 달라짐
  - <strong>단계적 접근</strong>: O 등급으로 시작 → 운영 6~12개월 후 사용 패턴 분석 → S 등급 확장 결정

---

### Section 7: 지점 3 -- 비교 가능한 후보 솔루션이 너무 적음 -- `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `지점 3 — 비교 가능한 후보 솔루션이 너무 적음` |
| Title brand keyword | `<span class="ds-text--brand">후보 솔루션</span>` |

#### Sub-sections (h3)

**7.1 실제 어떻게 막히는가**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락 1: "RFP를 띄우는 단계에서 자주 발생하는 막힘입니다. 평가 기준은 만들었는데 평가 대상이 부족합니다."
- 단락 2: "특히 시나리오 B(S 등급 활용)로 가려는 경우, 검증된 보호 레이어 솔루션의 시장이 매우 좁습니다. <strong>차등정보보호(Differential Privacy) 기반의 보호 기법을 보유하고, 국내 인증·검증을 받은 솔루션</strong>은 손에 꼽을 정도입니다."
- 단락 3: "반면 단순 마스킹·키워드 차단 기반의 AI DLP 솔루션은 상대적으로 많습니다. 그래서 RFP를 띄우면 마스킹 솔루션이 다수 제안되고, 보호 레이어 솔루션은 1~2개만 들어오는 상황이 됩니다. 평가위원회 입장에서는 "비교가 안 된다"는 문제에 부딪힙니다."

**7.2 왜 그렇게 막히는가**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락 1: "이 막힘의 본질은 시장 성숙도입니다. 차등정보보호는 학술적으로는 2006년 제안된 개념이지만, 국내 공공시장 적용 가능 수준의 솔루션이 본격 등장한 것은 최근입니다. 기술 자체의 진입 장벽이 높고(수학적 보안 보증·재식별 공격 방어 검증 등), 공공시장 진입을 위한 인증 트랙도 길어서 솔루션 공급이 한정되어 있습니다."

**7.3 풀어내는 방향**
- `ds-section-title-icon` (Lightbulb 아이콘)
- 단락 1: "후보가 적다고 마스킹 솔루션으로 타협하는 것은 위험합니다. 단순 마스킹 기반 솔루션은 운영 단계에서 보안 우려가 재발생하거나, 감사 단계에서 N²SF 정합성 논증이 도전받을 수 있습니다."
- 단락 2: "대안은 다음과 같습니다."
- **대안 -> ds-bullet--check** (3항목):
  - <strong>평가 기준의 명시적 강화</strong>: RFP에서 "보호 기법의 종류(마스킹/차등정보보호 등)·학술적 근거·재식별 공격 검증 자료"를 명시적 평가 항목으로 요구. 이렇게 하면 마스킹 솔루션은 자연스럽게 평가 단계에서 차별화됩니다
  - <strong>후보가 적어도 PoC 수행</strong>: 1~2개 후보만 있더라도 PoC를 통해 실제 보호 강도·운영 적합성을 검증. 비교 평가는 어려워도 단독 적합성 평가는 가능
  - <strong>단계적 도입으로 시간 확보</strong>: 시나리오 A로 먼저 도입 후 시나리오 B 솔루션 시장 성숙을 기다리는 접근. 1~2년 후 시장이 더 성숙해 있을 가능성

---

### Section 8: 지점 4 -- 예산 산정과 도입 시점의 불일치 -- `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `지점 4 — 예산 산정과 도입 시점의 불일치` |
| Title brand keyword | `<span class="ds-text--brand">시점의 불일치</span>` |

#### Sub-sections (h3)

**8.1 실제 어떻게 막히는가**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락 1: "공공기관 예산은 통상 1년 전에 편성됩니다. 즉 2026년 사업 예산은 2025년 7~8월에 잡힙니다. 그런데 AI 시장의 변화 주기는 6개월 미만입니다. 새 모델이 나오고, 새 보안 가이드라인이 추가되고, 시장 가격이 변동됩니다."
- 단락 2: "그 결과 사업 시작 시점에 다음 중 하나가 발생합니다."
- **발생 상황 -> ds-bullet--dot** (3항목):
  - <strong>예산 부족</strong>: 1년 전 견적 기반 예산이 현재 시장 가격에 못 미침
  - <strong>시나리오 변경 불가</strong>: 1년 전에 시나리오 A로 예산 잡았는데 시나리오 B가 필요한 상황 발견. 그러나 예산 항목 변경 불가
  - <strong>적절한 솔루션 부재</strong>: 1년 전 시장에 없던 새 솔루션이 등장했지만 평가 대상에 못 넣음

**8.2 왜 그렇게 막히는가**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락 1: "공공 예산 체계의 본질적 특성입니다. 안정적 예산 운용을 위해 1년 전 편성은 필수이고, 그 사이 시장 변화는 막을 수 없습니다. 이 간극은 AI뿐 아니라 모든 빠르게 변하는 IT 영역에 공통입니다."

**8.3 풀어내는 방향**
- `ds-section-title-icon` (Lightbulb 아이콘)
- 단락 1: "AI 도입을 한 번에 큰 사업으로 하지 않고, 사전 검토와 본 도입을 분리하는 접근이 효과적입니다."
- **풀이 -> ds-bullet--check** (4항목):
  - <strong>사전 검토 사업 + 본 사업 분리</strong>: 1차 연도에 소액 사전 검토 사업(시나리오 정의, 등급 분류, 모델링)을 수행. 결과를 기반으로 2차 연도에 본 도입 사업 정확하게 산정
  - <strong>단계별 분할 발주</strong>: 사업 자체를 1차(기반 구축)·2차(확장 운영)로 나누어 시장 변화 반영 여지 확보
  - <strong>예산 편성 시점 사전 검토</strong>: 7~8월 예산 편성 이전에 시나리오 정의와 시장 조사를 완료. 정확한 예산 산정 가능
  - <strong>유연한 예산 항목 설계</strong>: 솔루션비·인프라비·인건비를 별도 항목으로 잡아 시장 변화에 대응 가능한 구조

---

### Section 9: 지점 5 -- 도입 후 "쓸 만한 업무가 없음" -- `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + 두 형태 강조 |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `지점 5 — 도입 후 "쓸 만한 업무가 없음"` |
| Title brand keyword | `<span class="ds-text--brand">활용 실패</span>` (제목에 없는 단어 사용 금지 -> 변경: `<span class="ds-text--brand">쓸 만한 업무</span>`) |

#### Sub-sections (h3)

**9.1 실제 어떻게 막히는가**
- `ds-section-title-icon` (FileQuestion 아이콘)
- 단락 1 (도입): "가장 무거운 막힘은 마지막입니다. 솔루션 도입까지는 성공했는데, 운영 단계에서 활용도가 기대 대비 현저히 낮은 경우입니다. 이 패턴은 보통 두 가지 형태로 나타납니다."

**형태 1 — DLP·차단 솔루션의 과차단**
- 강조 라벨: `<strong>형태 1 — DLP·차단 솔루션의 과차단</strong>`
- 단락: "안전을 위한 차단 솔루션을 도입했는데, 정상 업무 요청도 차단되는 경우가 대다수입니다. 직원이 보고서 작성에 관련 자료를 요청해도 키워드 매칭으로 차단되고, 민원 응답 초안을 요청해도 차단됩니다. 차단 정책을 완화하면 보안 우려가 커지고, 강화하면 사용성이 무너지는 딜레마에 빠집니다."
- 단락: "결과: 직원들 사이에 "그거 켜놓으면 일이 안 됨"이 정설이 되어 우회하거나 그냥 사용하지 않습니다. 결국 도입 의미가 사라지고, 다음 연도 예산 평가에서 "AI 도입 효과 불분명"으로 평가받습니다."

**형태 2 — O 등급 한정의 빈약함**
- 강조 라벨: `<strong>형태 2 — O 등급 한정의 빈약함</strong>`
- 단락: "시나리오 A(O 등급만 활용)로 안전하게 도입했는데, 정작 활용 가능 정보가 너무 좁아서 직원들이 쓸 일이 없는 경우입니다."
- 단락: "예를 들어 법무 부서가 가장 활용하고 싶어 하는 정보는 판례입니다. 공개 판례는 O 등급이지만, 기관 자체의 해석·내부 검토 의견은 S 등급입니다. AI에게 판례만 보여주고 "이 사안에 대한 의견을 달라"고 하면, 일반적인 응답만 돌아옵니다. 정작 필요한 건 "우리 기관의 과거 비슷한 사안 처리 사례를 참조한 응답"인데, 그건 S 등급 정보가 들어가야 가능합니다."
- 단락: "비슷한 패턴이 거의 모든 부서에서 발생합니다. 정책 부서는 내부 정책 검토 의견을 참조해야 하고, 민원 부서는 과거 민원 처리 사례를 참조해야 하고, 인사 부서는 내부 인사 자료를 참조해야 합니다. 외부 보도자료나 일반 공지사항만으로 처리할 수 있는 업무는 정작 AI 도움이 없어도 가능한 영역인 경우가 많습니다."

**9.2 왜 그렇게 막히는가**
- `ds-section-title-icon` (AlertCircle 아이콘)
- 단락 1: "두 형태 모두 공통점은 <strong>"안전성을 위해 활용성을 희생"</strong>한 구조입니다. 보안 측면에서는 흠잡을 데 없지만, 도입의 본래 목적인 업무 효율화는 달성되지 않습니다. 그리고 이 한계는 도입 단계에서 보이지 않고, 운영 단계에서야 본격적으로 드러납니다."

**9.3 풀어내는 방향**
- `ds-section-title-icon` (Lightbulb 아이콘)
- 단락 1: "이 막힘을 피하려면 도입 단계에서 다음을 점검해야 합니다."
- **점검 항목 -> ds-bullet--check** (4항목):
  - <strong>활용 가능 시나리오 사전 검증</strong>: 도입 전에 "정말 직원들이 쓸 시나리오가 있는가"를 실제 부서별 워크숍으로 확인. 추상적 "업무 효율화"가 아니라 구체적 활용 사례를 5~10개 식별
  - <strong>DLP 정책의 정밀화</strong>: 단순 키워드 차단이 아니라 등급·맥락 기반의 정밀한 통제. 정상 업무는 통과시키고 실제 위험만 차단하는 설계
  - <strong>보호 레이어 도입 검토</strong>: 활용 가능 시나리오 중 S 등급 활용이 필수인 영역이 많으면, 차등정보보호 기반 보호 레이어로 시나리오 B 도입. 활용 폭이 본질적으로 달라짐
  - <strong>단계적 운영 점검</strong>: 도입 후 3개월·6개월 시점에 활용도 정량 점검. 활용도가 낮으면 즉시 진단 → 추가 조치

---

### Section 10: 다섯 가지 막힘을 관통하는 한 가지 진단 -- `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (takeaways) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `다섯 가지 막힘을 관통하는 한 가지 진단` |
| Title brand keyword | `<span class="ds-text--brand">한 가지 진단</span>` |

#### Body

- 단락 1: "위 다섯 가지 막힘 지점은 표면적으로는 서로 다른 영역에서 발생하지만, 한 가지 공통점이 있습니다. <strong>정책 문서가 제시한 절차를 그대로 따랐을 뿐인데도 막힌다</strong>는 점입니다."
- 단락 2: "이게 의미하는 바는 분명합니다. N²SF와 모델 2가 제시한 정책 절차는 안전한 도입의 <strong>최소 기준선</strong>이지, 도입 성공을 보장하는 종합 가이드가 아닙니다. 정책 절차를 따르되, 그 절차가 우리 기관의 물리적 규모·활용 현실·시장 상황과 만났을 때 어떻게 변형되어야 하는지를 각 기관이 스스로 설계해야 합니다."
- 단락 3: "그 설계의 출발점은 막힘의 실제 모습을 정확히 진단하는 것입니다. "보안과 활용성의 균형" 같은 추상적 진단이 아니라, "수백만 건 문서 분류는 사람이 다 못 한다", "직원이 쓰고 싶은 건 대부분 S 등급이다", "검증된 솔루션 후보가 1~2개뿐이다" 같은 구체적 진단입니다. 진단이 정확하면 풀이는 보입니다."

#### Takeaways Banner -- `ds-banner--brand`

원문의 `takeaways` div를 banner로 변환:
- banner label: `5가지 막힘과 풀이 방향 요약`
- **ds-bullet--dot** (5항목):
  - <strong>지점 1 (등급 분류 부담)</strong> — 전자결재 메타데이터 연동, 분류기 sLLM, 또는 두 방식의 하이브리드
  - <strong>지점 2 (시나리오 충돌)</strong> — O/S 활용 비중 사전 분석, 보호 레이어 도입 또는 단계적 접근
  - <strong>지점 3 (솔루션 부족)</strong> — 평가 기준 강화로 차별화, 단독 적합성 평가, 단계적 도입
  - <strong>지점 4 (예산 불일치)</strong> — 사전 검토 사업 분리, 단계별 분할 발주, 유연한 예산 항목 설계
  - <strong>지점 5 (활용 안 됨)</strong> — 시나리오 사전 검증, DLP 정밀화, 보호 레이어로 활용 폭 확장

---

### Section 11: FAQ -- `id="section-faq"`

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
| 1 | 이 5가지 외에 다른 막힘은 없나요? | 있습니다. 다만 위 5가지가 가장 자주, 그리고 가장 크게 막히는 지점입니다. 다른 막힘으로는 사용자 교육 미흡, 거버넌스 부재, 외부 자문 일정 확보 어려움 등이 있으며, 모두 위 5가지의 변형이거나 결과로 볼 수 있습니다. |
| 2 | 5가지 모두를 한 사업에서 풀어야 하나요? | 모두 동시에 풀려고 하면 사업이 한없이 길어집니다. 도입 단계별로 우선 풀어야 할 지점이 다르므로, 단계별로 가장 큰 막힘을 식별해서 그 지점을 우선 풀어내는 접근이 효율적입니다. 예를 들어 N²SF 1~2단계에서는 지점 1·2가, 솔루션 평가 단계에서는 지점 3이 우선입니다. |
| 3 | 전자결재 API 연동은 어떻게 진행하나요? | 대부분의 공공기관 전자결재 시스템은 표준 API를 제공합니다. 문서 메타데이터(보안등급, 문서종류, 부서, 결재 라인)를 조회하는 API를 사용해서 AI 솔루션이 등급을 자동 식별하도록 연동합니다. 구체적 연동 방식은 기관의 전자결재 시스템(온나라·자체 시스템 등)에 따라 달라지며, 솔루션 벤더와 함께 설계하는 것이 일반적입니다. |
| 4 | 단계적 도입(시나리오 A → B)이 정말 가능한가요? | 가능합니다. 시나리오 A로 시작해서 6~12개월 운영하면서 활용 패턴을 분석하고, 그 결과를 바탕으로 시나리오 B 확장 여부를 결정합니다. 다만 시나리오 B로 확장할 때 보호 레이어 솔루션 도입이 추가되므로 별도 예산 확보가 필요합니다. 처음부터 두 단계 모두를 염두에 두고 사업을 설계하면 부드럽게 확장 가능합니다. |
| 5 | 도입 후 활용도가 낮으면 어떻게 진단하나요? | 도입 후 3개월·6개월 시점에 다음을 측정합니다. (1) 부서별·업무별 사용 빈도, (2) 차단된 요청 비율과 차단 사유, (3) 사용자 만족도 조사. 차단 비율이 비정상적으로 높으면 정책 정밀화가 필요한 신호이고, 특정 부서 사용 빈도가 낮으면 활용 시나리오 재정의가 필요한 신호입니다. 정량 데이터에 기반한 진단이 추측보다 훨씬 효과적입니다. |

---

### Section 12: 참고 자료 + 저자 정보 -- `id="section-references"`

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
1. 국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024
2. 국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9
3. 본 글의 막힘 패턴은 큐빅의 공공기관 도입 자문 사례에서 관찰된 패턴을 익명화·일반화하여 정리한 것입니다.

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 13: Related Articles -- `id="section-related"`

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
| 1 | 정책 분석 | N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까 | `/resources/learn/n2sf-model-2-explained` |
| 2 | 정책 분석 | 공공기관 생성형 AI 도입의 세 가지 길 — AI DLP, sLLM, 레이어 방식 비교 | `/resources/learn/public-sector-genai-three-approaches` |
| 3 | 정책 분석 | sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프 | `/resources/learn/sllm-self-hosted-reality-check` |

#### Card Structure

```html
<a href="/resources/learn/..." class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--primary">정책 분석</span>
    <h3 class="ds-card__title">[title]</h3>
    <span class="ds-card__link-text">읽기</span>
  </div>
</a>
```

---

### Section 14: CTA Band -- `id="section-cta"`

| Property | Value |
|----------|-------|
| Pattern | [K] CTA band -- `ds-cta-band` |
| Background | `var(--c-bg-dark)` (#0f1130, navy) -- capsule CTA band style |
| Background image | `ds-bg--grad-deep` (배경 이미지 1개) |
| Placement | Full-width, container 밖 |

#### Content

| Element | Value |
|---------|-------|
| Title | `도입 막힘 진단·풀이를 함께 검토하시나요?` |
| Title brand keyword | `<span class="ds-text--brand">진단·풀이</span>` |
| Description | 큐빅은 N²SF 환경에서 공공기관 AI 도입을 자문해온 경험을 바탕으로, 막힘 지점 진단과 풀이 방향 컨설팅을 제공합니다. 차등정보보호 기반 <span class="ds-text--product">LLM Capsule</span>은 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있습니다. |
| Primary CTA | "데모 신청하기" -> `/request-a-demo` |
| CTA style | `btn--invert` (dark bg -> white button) |

#### Structure

```html
<section id="section-cta" class="ds-cta-band ds-bg--grad-deep">
  <div class="ds-cta-band__inner">
    <h2 class="ds-cta-band__title">
      도입 막힘 <span class="ds-text--brand">진단·풀이</span>를 함께 검토하시나요?
    </h2>
    <p class="ds-cta-band__description">
      큐빅은 N²SF 환경에서 공공기관 AI 도입을 자문해온 경험을 바탕으로, 막힘 지점 진단과 풀이 방향 컨설팅을 제공합니다. 차등정보보호 기반 <span class="ds-text--product">LLM Capsule</span>은 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있습니다.
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 5개 막힘 지점 섹션 내부에 banner, checklist, dot bullet이 골고루 분포되어 시각적 단조로움을 방지한다.

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
| 3 | Lead | Paragraphs + blockquote | Text + quote |
| 4 | Diagram | ds-diagram | Visual |
| 5 | 지점 1 | Section header + sub-h3 + banner + dots + check | Mixed |
| 6 | 지점 2 | Section header + sub-h3 + dots + check | Mixed |
| 7 | 지점 3 | Section header + sub-h3 + check | Mixed |
| 8 | 지점 4 | Section header + sub-h3 + dots + check | Mixed |
| 9 | 지점 5 | Section header + sub-h3 + check | Mixed |
| 10 | 결론 | Section header + body + banner with dots | Text + banner |
| 11 | FAQ | Section header + accordion | Interactive |
| 12 | References | Section header + dots + author | Text |
| 13 | Related | Card grid 3col | Cards |
| 14 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 지점 섹션 내부에 sub-section icon title + 다양한 컴포넌트(배너, 체크리스트, 닷 리스트)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정·축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] blockquote (정보화담당관 인용) 유지
- [ ] 5개 막힘 지점 각 3개 sub-section(어떻게/왜/풀이) 모두 보존
- [ ] 지점 1 메타데이터 5항목 보존
- [ ] 지점 1 업무용/분류기용 sLLM 비교 보존
- [ ] 지점 1 보조 접근 2항목 보존
- [ ] 지점 2 활용 희망 업무 4항목 보존
- [ ] 지점 2 사전 확인 3항목 + 도입 분기 3항목 보존
- [ ] 지점 3 대안 3항목 보존
- [ ] 지점 4 발생 상황 3항목 + 풀이 4항목 보존
- [ ] 지점 5 형태 1·2 모두 보존
- [ ] 지점 5 점검 4항목 보존
- [ ] 결론 takeaways 5항목 보존
- [ ] FAQ 5개 Q&A 전문 보존
- [ ] 참고문헌 3개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목·태그 보존 (URL Framer 상대경로)
- [ ] CTA 텍스트·링크 보존
- [ ] SVG 도식 1개는 DS diagram 토큰으로 재구성 (내용 동일)

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 1개 | DS diagram 토큰 기반 재구성 | DS diagram 토큰 규칙 준수 |
| `.callout` div | `ds-banner--brand` | DS 컴포넌트 매핑 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `<blockquote>` | `ds-banner--quote` 또는 인용 스타일 컴포넌트 | DS 인용 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |
| h3 sub-sections | `ds-section-title-icon` (Lucide 아이콘) | DS 아이콘 타이틀 컴포넌트 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 1개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: 5가지 막힘 지점의 단계별 분포

- **Type:** 상단 5단계 가로 프로세스 + 하단 5개 막힘 카드 매핑
- **Top row (5 boxes, primary-soft):** N²SF 1~2단계 (시나리오 정의) → N²SF 2단계 (정보 등급 분류) → N²SF 3단계 (솔루션 평가) → 예산·조달 (사업 추진) → N²SF 5단계 (운영)
  - 각 박스 fill: `--c-primary-soft`, stroke: `--c-primary`, text: `--c-primary`
  - 화살표: `--c-primary` 단순 화살표
- **Divider line:** 1px `--c-rule`
- **Bottom 5 cards (coral-soft):** 각 단계와 dashed 연결선으로 매핑된 막힘 지점
  1. (시나리오 정의 단계 영역) "수백만 건 문서의 등급 분류 부담" — 분류 작업 자체가 별도 사업 규모
  2. (시나리오 정의 단계 영역) "활용 시나리오와 모델 2의 충돌" — 진짜 쓰고 싶은 업무는 대부분 S 등급
  3. (솔루션 평가 영역) "비교 가능한 후보 솔루션이 너무 적음" — 검증된 보호 레이어 솔루션 시장이 좁음
  4. (예산·조달 영역) "예산 산정과 도입 시점 불일치" — 1년 전 예산으로는 시장 변화 못 따라감
  5. (운영 영역) "도입 후 '쓸 만한 업무가 없음'" — 과차단·O 등급 한계로 활용 안 됨
- 각 카드: 좌측 number badge (1~5) `--c-coral` 배경 white 텍스트, 우측 텍스트 영역 `--c-coral-soft` 배경
- 단계 박스와 카드 연결: dashed line `--c-coral`
- 카드 텍스트 색상: 제목 `--c-coral` 강조, 부제 `--c-muted`

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** -- 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** -- Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** -- 코드/라벨 폰트
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** -- 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** -- `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** -- `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **Blockquote** -- center alignment, font-style italic 또는 큰 따옴표 장식. 좌측 컬러 라인 꾸밈 금지(컬러 라인 꾸밈 금지 규칙)
9. **N²SF 표기** -- 모든 본문에서 `N²SF`(superscript 2) 유지. HTML에서 `N<sup>2</sup>SF`
10. **SVG 도식 placeholder** -- diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
11. **Related articles URL** -- Framer 상대경로 사용 (`/resources/learn/...`), `.html` 확장자 금지
12. **Meta tags** -- `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
13. **JSON-LD** -- BreadcrumbList + FAQPage schema 포함
14. **word-break: keep-all** -- 한국어 텍스트 줄바꿈을 위해 필수
15. **컬러 라인 꾸밈 금지** -- 카드·배너에 `border-top/left colored` 장식 금지
16. **eyebrow 허용** -- capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
17. **각 지점 sub-section 아이콘**: 어떻게 막히는가 → FileQuestion, 왜 그렇게 막히는가 → AlertCircle, 풀어내는 방향 → Lightbulb (Lucide icon 사용)
18. **3개 단락 이상 연속 시 ds-bullet--dot 분리 검토** -- 본 spec에서는 각 sub-section마다 단락 수가 3개 미만이거나 강조 라벨(<strong>방향 N — ...)로 분리되어 있으므로 추가 분리 불필요
