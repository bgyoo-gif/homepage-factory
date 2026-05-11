# public-sector-genai-three-approaches-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/learn_post_01_public-sector-genai-three-approches-in-korea.html`
> Output: `llm-capsule/output/html/public-sector-genai-three-approaches-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) -- 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 12 (Hero + TL;DR + Lead + 5 body sections + Comparison table + FAQ + References + CTA) |
| Tone | 정책 분석, 객관 비교, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 18분 |
| Category chip | 정책 분석 |

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

원본 A타입에는 3개의 인라인 SVG 도식이 포함되어 있다. B타입에서는 `diagram-builder` 에이전트를 호출하여 DS diagram 토큰 기반으로 재구성한다.

| # | 원본 제목 | 위치 | 변환 방식 |
|---|----------|------|----------|
| 1 | N2SF 패러다임 전환 -- 물리적 망분리에서 다중계층보안으로 | Section 3 (N2SF) 하단 | `ds-diagram` -- 좌우 비교형 (기존 vs N2SF) |
| 2 | 게이트웨이 방식 정보 흐름도 | Section 6 (게이트웨이) 하단 | `ds-diagram` -- 수직 흐름도 (6단계) |
| 3 | 세 가지 접근법 비교 시각화 | Section 7 (비교) 하단 | 비교표(ds-table)로 대체 -- 원본 테이블과 동일 정보이므로 SVG 삭제, 테이블만 유지 |

**도식 변환 규칙:**
- DS diagram 토큰만 사용 (임의 색상 창작 금지)
- SVG 내 `var(--f-sans)` -> `var(--f-display)`
- 컬러: `--c-primary`, `--c-teal`, `--c-coral`, `--c-ink`, `--c-muted`, `--c-rule`, `--c-bg-soft`
- C등급(기밀): `--c-coral` + `--c-coral-soft`
- S등급(민감): `--c-amber` + amber soft
- O등급(공개): `--c-teal` + `--c-teal-soft`
- 게이트웨이 강조: `--c-primary` + `--c-primary-soft`

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
| Breadcrumb | 홈 / 리소스 / Learn / 공공기관 생성형 AI 도입의 세 가지 길 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 18분" |
| Date | "2026년 5월" |
| Title | `공공기관 생성형 AI 도입의 세 가지 길` |
| Title brand keyword | `<span class="ds-text--brand">세 가지 길</span>` |
| Description (lead) | AI DLP.차단, sLLM 자체구축, 게이트웨이 방식 -- N2SF 시대 공공기관의 선택지를 비용.성능.보안.정합성 관점에서 객관적으로 비교합니다. |

#### Structure

```html
<section id="section-hero" class="ds-section ds-section--hero">
  <div class="ds-article-container">
    <nav class="ds-breadcrumb" aria-label="Breadcrumb">홈 / 리소스 / Learn / 공공기관 생성형 AI 도입의 세 가지 길</nav>
    <div class="ds-article-hero__meta">
      <span class="ds-badge ds-badge--primary">정책 분석</span>
      <span class="ds-article-hero__reading-time">예상 읽기 시간 18분</span>
      <span class="ds-article-hero__date">2026년 5월</span>
    </div>
    <h1 class="ds-article-hero__title">
      공공기관 생성형 AI 도입의 <span class="ds-text--brand">세 가지 길</span>
    </h1>
    <p class="ds-article-hero__description">
      AI DLP.차단, sLLM 자체구축, 게이트웨이 방식 -- N2SF 시대 공공기관의 선택지를 비용.성능.보안.정합성 관점에서 객관적으로 비교합니다.
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
| Strong tags | "AI DLP.차단", "sLLM 자체구축", "게이트웨이 방식", "내부 보호 기법의 수준", "차등정보보호(Differential Privacy) 기반의 게이트웨이" |

#### Structure

```html
<section id="section-tldr" class="ds-section--article-body">
  <div class="ds-article-container">
    <div class="ds-banner ds-banner--brand">
      <span class="ds-banner__label">TL;DR</span>
      <p>공공기관의 생성형 AI 도입은 <strong>AI DLP.차단</strong>, <strong>sLLM 자체구축</strong>, <strong>게이트웨이 방식</strong>의 세 갈래로 나뉩니다. ...</p>
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
1. "공공기관의 생성형 AI 도입은 더 이상 "할 것인가 말 것인가"의 문제가 아닙니다..."
2. "현재 공공기관 앞에 놓인 선택지는 크게 세 갈래입니다..."
3. "이 글에서는 세 가지 접근법을 객관적으로 분석하고..."

**주의: 연속 본문 3단락이므로 ds-bullet--dot 분리 적용 여부 검토.**
-> 이 경우 3개 단락이 각각 독립적 주장이 아닌 서사적 흐름이므로 불릿 분리 대신 그대로 유지한다. 단, 3단락이 한계이므로 정확히 3개만 배치.

---

### Section 4: 1. N2SF가 만든 새로운 게임의 규칙 -- `id="section-1"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [W] Diagram |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `1. N2SF가 만든 새로운 게임의 규칙` |
| Title brand keyword | `<span class="ds-text--brand">N2SF</span>` |

#### Body Content

**단락 1:** "본격적인 비교에 앞서, 왜 지금 이 선택이 중요해졌는지부터 짚고 가겠습니다."

**단락 2:** "기존 공공부문의 보안 패러다임은 **물리적 망분리**였습니다..." (strong: "물리적 망분리")

**단락 3:** "2024~2025년 발표된 N2SF... **다중계층보안(MLS, Multi-Layered Security)**으로 전환했습니다..." (strong: "다중계층보안(MLS, Multi-Layered Security)")

**도식 1: N2SF 패러다임 전환** -- `ds-diagram` 컴포넌트
- diagram-builder 에이전트 호출하여 DS 토큰 기반으로 재구성
- 좌우 비교형: 기존(물리적 망분리) vs N2SF(C/S/O 다중계층)
- figcaption: "도식 1. N2SF 패러다임 전환"

**단락 4:** "이 전환의 직접적 결과 중 하나가 부록 2-2..." (원문 전체)

**단락 5:** "다시 말해, 공공기관은 이제..." (원문 전체)

---

### Section 5: 2. 선택지 A -- AI DLP.차단 방식 -- `id="section-2"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (callout) + [L] Checklist |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `2. 선택지 A -- AI DLP.차단 방식` |
| Title brand keyword | `<span class="ds-text--brand">AI DLP.차단</span>` |

#### Sub-sections (h3)

**2.1 정의와 작동 방식**
- `ds-section-title-icon` (Shield 아이콘)
- 단락 2개 (원문 그대로)

**2.2 장점**
- `ds-section-title-icon` (Check 아이콘)
- 단락 2개: "N2SF 보안원칙 위배 가능성의 원천 차단" (strong), "도입 비용도 상대적으로 낮습니다"

**2.3 단점과 한계**
- `ds-section-title-icon` (AlertTriangle 아이콘)
- 단락 1: "AI 활용 자체를 포기하는 대가" (strong)
- **Callout -> ds-banner--brand:**
  - "더 큰 문제는 섀도우 AI(Shadow AI)입니다." (strong) + 전문
  - 배너 텍스트 가운데 정렬
- 단락 2: "차단 솔루션은 통제의 범위 안에서만..."
- 단락 3: "장기적으로 지속 가능하지 않습니다." (strong)

**2.4 적합한 경우**
- `ds-section-title-icon` (Target 아이콘)
- 도입 단락: "차단 방식이 합리적 선택이 되는 경우가 분명히 존재합니다."
- **ds-bullet--check** (3항목):
  - 국가안보.기밀 처리 비중이 절대적으로 높은 기관 (strong) + 설명
  - 단기 임시 조치가 필요한 기관 (strong) + 설명
  - 사용자 교육이 충분히 이뤄지지 않은 상태에서의 과도기 조치 (strong) + 설명
- 마무리 단락: "다만 위 어느 경우에도..."

---

### Section 6: 3. 선택지 B -- sLLM 자체구축 방식 -- `id="section-3"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [L] Checklist + [N] Number steps (비용 항목) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `3. 선택지 B -- sLLM 자체구축 방식` |
| Title brand keyword | `<span class="ds-text--brand">sLLM 자체구축</span>` |

#### Sub-sections (h3)

**3.1 정의와 작동 방식**
- `ds-section-title-icon` (Server 아이콘)
- 단락 2개 (원문 그대로)

**3.2 장점**
- `ds-section-title-icon` (Check 아이콘)
- 단락 3개: "완전한 데이터 통제" (strong), "기관 도메인 특화", "데이터 주권"

**3.3 단점과 한계**
- `ds-section-title-icon` (AlertTriangle 아이콘)
- 도입: "비용과 성능의 비대칭" (strong)
- **비용 항목 -> ds-bullet--dot** (4항목):
  - GPU 서버: H100 8장 1대... 약 5억~6억 원
  - 부속 인프라: 네트워크, 스토리지... 약 1억 원
  - 운영 인력: AI/MLOps 엔지니어 최소 2명... 연 2~3억 원
  - 모델 라이선스.관리 도구: 연 수천만 원
- 단락: "초기 구축 비용만 약 8억 원..."
- 단락: "성능 측면은 더 본질적인 문제입니다..." (strong: "GPT-5, Claude Sonnet 4, Gemini 3 등 최신 상용 모델과 비교할 때 성능 격차가 명확합니다.")
- 단락: "시간이 갈수록 좁혀지지 않고 오히려 벌어지는 추세" (strong)
- 단락: "신규 모델 출시마다 재구축 부담" (strong)

**3.4 적합한 경우**
- `ds-section-title-icon` (Target 아이콘)
- 도입: "sLLM 자체구축이 합리적 선택이 되는 경우는 다음과 같습니다."
- **ds-bullet--check** (4항목): 연 IT 예산 100억+, 정책적 금지 분야, 도메인 특화 핵심 가치, 전략적 의지
- "반대로 다음의 경우는 sLLM 자체구축이 과잉투자일 수 있습니다."
- **ds-bullet--dot** (3항목): 일반 행정업무, 문서 검색.요약 수준, 예산 5억 이하

---

### Section 7: 4. 선택지 C -- 게이트웨이 방식 -- `id="section-4"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + [N] Number steps (6단계) + [W] Diagram + Article body + [L] Checklist |
| Class | `ds-section--article-body` |
| Background | White |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `4. 선택지 C -- 게이트웨이 방식` |
| Title brand keyword | `<span class="ds-text--brand">게이트웨이</span>` |

#### Sub-sections (h3)

**4.1 정의와 작동 방식**
- `ds-section-title-icon` (Shield 아이콘)
- 도입 단락: "보안 게이트웨이" (strong) + RAG 설명
- **6단계 프로세스 -> ds-bullet--number** (6항목):
  1. 사용자가 내부망 UI를 통해 질의를 입력
  2. 내부망의 RAG 시스템이 기관 문서를 검색하여 관련 자료 추출
  3. 게이트웨이가 추출된 자료에서 민감정보를 식별.보호 처리(캡슐화)
  4. 보호 처리된 내용만 외부 LLM에 전송, 추론 요청
  5. 외부 LLM의 응답을 내부망으로 수신
  6. 게이트웨이가 응답을 복원.정리하여 사용자에게 제공
- 단락: N2SF 모델 2 해당 설명

**도식 2: 게이트웨이 방식 정보 흐름도** -- `ds-diagram` 컴포넌트
- diagram-builder 에이전트 호출
- 수직 흐름도: 사용자단말 -> RAG -> 게이트웨이 -> 보안경계 -> 외부LLM
- 영역 구분: S등급(기관 전산망), O등급(인터넷)
- figcaption: "도식 2. 게이트웨이 방식 정보 흐름도"

**4.2 장점**
- `ds-section-title-icon` (Check 아이콘)
- 단락 4개: "외부 LLM의 최신 성능을 활용" (strong), 비용 비교, 운영 인력, N2SF 정합성

**4.3 단점과 한계**
- `ds-section-title-icon` (AlertTriangle 아이콘)
- 도입: "내부에서 어떻게 보호하느냐" (strong)
- 단순 마스킹 설명
- **마스킹 한계 -> ds-bullet--dot** (4항목):
  - 패턴에 없는 민감정보는 놓칩니다 (strong)
  - 재식별 공격에 취약합니다 (strong)
  - 통계적 추론 공격에 무방비입니다 (strong)
  - AI 학습.추론 품질 저하 (strong)
- 마무리 단락: N2SF 정합성 논증 약점

**4.4 게이트웨이의 보호 방식 -- 단순 비식별화를 넘어**
- `ds-section-title-icon` (Lock 아이콘)
- 차등정보보호(Differential Privacy) 설명 단락들 (원문 그대로)
- **차등정보보호 보장 사항 -> ds-bullet--check** (3항목):
  - 수학적 보안 보증 (strong) + epsilon 설명
  - 데이터 유용성 유지 (strong) + utility 설명
  - 공격 모델에 대한 견고함 (strong) + 이론적 보호
- 마무리 단락 2개

**4.5 적합한 경우**
- `ds-section-title-icon` (Target 아이콘)
- **ds-bullet--check** (4항목): 최신 성능 직결, 비용 통제, 핵심 역량 불필요, 점진적 확대
- 마무리: 적용 가능 범위

---

### Section 8: 5. 어떤 기관에 어떤 방식이 맞는가 (비교표) -- `id="section-5"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + [O] Table (4열 7행) + [L] Checklist (권장 선택) |
| Class | `ds-section--article-body` |
| Background | White |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `5. 어떤 기관에 어떤 방식이 맞는가` |
| Title brand keyword | `<span class="ds-text--brand">어떤 방식</span>` |

#### Comparison Table -- `ds-table--responsive`

4열(항목, A. AI DLP.차단, B. sLLM 자체구축, C. 게이트웨이) x 7행.

**테이블 스타일:**
- `ds-table` + responsive wrapper (`overflow-x: auto` + scrollbar 숨김)
- C열(게이트웨이) 강조: `--c-primary-soft` 배경색 tint
- th: `var(--c-ink)` 배경, white 텍스트
- C열 th: `--c-primary` 배경

| 항목 | A. AI DLP.차단 | B. sLLM 자체구축 | C. 게이트웨이 |
|------|--------------|-----------------|-------------|
| 초기 도입 비용 | 낮음 (1~3억) | 높음 (약 8억) | 낮음 (1~3억) |
| AI 성능 | 활용 불가 | 32B급 수준 | 최신 상용 LLM 수준 |
| 데이터 보안 | 완전 차단 | 완전 내부 처리 | 보호 방식이 결정 |
| 모델 최신화 | 해당 없음 | 재구축 필요 | 설정 변경만으로 즉시 |
| N2SF 정합성 | 위배 없음 | 위배 없음 | 모델 2 준수 (보호 방식 검증 필요) |
| 운영 인력 부담 | 낮음 | 매우 높음 | 중간 |
| 적합 규모 | 모든 규모 | 대형 기관 (예산 100억+) | 모든 규모 |

**도식 3 (SVG) 처리:** 원본의 도식 3은 비교표와 동일한 정보를 시각화한 것이므로 B타입에서는 삭제한다. 테이블이 해당 정보를 충분히 전달한다.

#### 기관 상황별 권장 선택 -- `ds-banner--brand`

원본의 `takeaways` div를 banner로 변환:
- banner label: `기관 상황별 권장 선택`
- **ds-bullet--dot** (4항목):
  - 국가안보.기밀 비중이 절대적인 경우 -- **A. AI DLP.차단** (장기적으로도 유효)
  - 대형 기관, 도메인 특화 모델이 핵심 자산인 경우 -- **B. sLLM 자체구축**
  - 일반 행정업무 효율화 목표, 모든 규모 -- **C. 게이트웨이** (단, 보호 방식 검증 필수)
  - AI 도입 정책 미정 상태 -- A로 단기 대응 후 C로 전환

---

### Section 9: 6. 결론 -- 보호 방식이 결정합니다 -- `id="section-6"`

| Property | Value |
|----------|-------|
| Pattern | [D] Section header + Article body + [Q] Banner (callout) |
| Class | `ds-section--article-body` |
| Container | `ds-article-container` (1080px) |

#### Section Header

| Element | Value |
|---------|-------|
| Component | `ds-article-section-header` |
| Title | `6. 결론 -- 보호 방식이 결정합니다` |
| Title brand keyword | `<span class="ds-text--brand">결정</span>` |

#### Body

- 단락 1: "세 가지 선택지 중 어느 길을 가든..." (strong: "성공 여부는 결국 정보 보호 방식의 수준")
- 단락 2: "차단 방식은 가장 강한 보호를 제공하지만..."

#### Callout (게이트웨이 평가 질문 5가지) -- `ds-banner--brand`

- banner label: "게이트웨이 솔루션 평가 시 반드시 던져야 할 질문 5가지" (strong)
- **ds-bullet--number** (5항목):
  1. 어떤 정보 보호 기법을 사용하는가? (마스킹 / K-익명성 / 차등정보보호 / 기타)
  2. 그 보호 기법의 수학적.학술적 근거는 무엇인가?
  3. 재식별 공격.추론 공격에 대한 검증 결과가 있는가?
  4. N2SF 모델 2의 보안통제 항목 중 어느 항목들을 어떻게 충족하는가?
  5. 보호 처리 후 데이터의 AI 활용 품질(utility)은 어떻게 검증되었는가?

#### 마무리 단락

- "이 질문에 명확히 답할 수 있는 솔루션만이..."
- "공공기관의 생성형 AI 도입은 이제..."

---

### Section 10: FAQ -- `id="section-faq"`

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
| 1 | AI DLP만으로도 N2SF 충족이 가능한가요? | 가능합니다. 외부 AI 사용을 차단하면... |
| 2 | sLLM 자체구축 비용은 정확히 얼마나 드나요? | 기관 규모와 활용 범위에 따라 다르지만... |
| 3 | 게이트웨이 방식의 단점은 무엇인가요? | 가장 큰 약점은 보호 방식의 수준이... |
| 4 | 우리 기관은 어떤 방식으로 시작해야 하나요? | 다음 세 가지를 먼저 정리하시면... |
| 5 | 세 방식을 병행할 수도 있나요? | 가능합니다. 실제로 많은 기관이... |

---

### Section 11: 참고 자료 + 저자 정보 -- `id="section-references"`

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
1. 국가정보원, 국가보안기술연구소(NSR), ...2025.9
2. 국가정보원, ...2024
3. Cynthia Dwork & Aaron Roth, ...2014
4. 디지털플랫폼정부위원회, ...

#### Author Info

- 구분선 (`border-top: 1px solid var(--c-rule)`)
- 저자: 큐빅 정책 분석팀
- 최초 발행: 2026년 5월
- 최종 수정: 2026년 5월
- font-size: `var(--ds-text-sm)`, color: `var(--c-muted)`

---

### Section 12: Related Articles -- `id="section-related"`

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
| 1 | 정책 분석 | N2SF 가이드라인 핵심 정리 -- C/S/O 등급이 만든 새로운 보안 패러다임 | # (placeholder) |
| 2 | 정책 분석 | N2SF 모델 2 완벽 해설 -- 공공기관에서 ChatGPT를 쓸 수 있을까 | # (placeholder) |
| 3 | 기술 해설 | 단순 비식별화의 한계와 차등정보보호(Differential Privacy)란 무엇인가 | # (placeholder) |

#### Card Structure

```html
<a href="#" class="ds-card ds-card--link">
  <div class="ds-card__body">
    <span class="ds-badge ds-badge--primary">[tag]</span>
    <h3 class="ds-card__title">[title]</h3>
    <span class="ds-card__link-text">읽기</span>
  </div>
</a>
```

---

### Section 13: CTA Band -- `id="section-cta"`

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
| Description | 큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 게이트웨이 솔루션으로, 조달청 혁신제품 지정 및 다수 인증(GS 1등급, ISO 27001, ISO 42001)을 보유하고 있습니다. 기관 환경에 맞는 도입 방안을 함께 검토해드립니다. |
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
      큐빅 <span class="ds-text--product">LLM Capsule</span>은 차등정보보호 기반의 게이트웨이 솔루션으로...
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

**Rationale:** 아티클형 페이지에서 본문 섹션은 모두 white 배경. 연속 white 섹션이 10개 이상이지만, 아티클 본문의 특성상 중간 배경 삽입은 가독성을 해치므로 CTA에서만 배경 이미지 사용. 비교표 섹션에 미색 배경 없이 테이블 자체의 스타일링으로 시각 변화 제공.

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
| 4 | N2SF | Section header + body + diagram | Text + visual |
| 5 | AI DLP | Section header + sub-h3 + banner + checklist | Mixed |
| 6 | sLLM | Section header + sub-h3 + bullets + dots | Mixed |
| 7 | Gateway | Section header + sub-h3 + numbered steps + diagram + bullets | Mixed + visual |
| 8 | Comparison | Section header + table + banner | Table + banner |
| 9 | Conclusion | Section header + body + numbered banner | Text + banner |
| 10 | FAQ | Section header + accordion | Interactive |
| 11 | References | Section header + dots + author | Text |
| 12 | Related | Card grid 3col | Cards |
| 13 | CTA | CTA band (dark bg image) | Full-width dark |

**ds-grid--1 연속 검사:** 아티클 본문이므로 모든 섹션이 1열(article-container) 기반이지만, 각 섹션 내부에 다양한 컴포넌트(배너, 체크리스트, 번호 스텝, 테이블, 다이어그램, 아코디언, 카드 그리드)가 사용되어 시각적 단조로움을 방지한다.

---

## Content Integrity Checklist

- [ ] TL;DR 전문 그대로 (축약 금지)
- [ ] 본문 모든 단락 원문 유지 (수정.축약 금지)
- [ ] strong 태그 원문 위치 그대로 유지
- [ ] 인라인 code 태그 (`chat.openai.com`, `claude.ai`) 유지
- [ ] 비교표 7행 4열 전체 데이터 보존
- [ ] FAQ 5개 Q&A 전문 보존
- [ ] 참고문헌 4개 전문 보존
- [ ] 저자 정보 보존
- [ ] Related articles 3개 제목.태그 보존
- [ ] CTA 텍스트.링크 보존
- [ ] SVG 도식 2개는 DS diagram 토큰으로 재구성 (내용 동일)
- [ ] SVG 도식 3은 삭제 (비교표와 중복)

---

## Deviations from A-type (intentional)

| A-type Element | B-type Change | Reason |
|---------------|---------------|--------|
| 인라인 SVG 도식 3개 | DS diagram 토큰 기반 재구성 (2개), 삭제 (1개 - 테이블과 중복) | DS diagram 토큰 규칙 준수 |
| `.callout` div | `ds-banner--brand` | DS 컴포넌트 매핑 |
| `.takeaways` div | `ds-banner--brand` + `ds-bullet--dot` | DS 컴포넌트 매핑 |
| `.compare-table` | `ds-table` (responsive) | DS 테이블 컴포넌트 |
| `.tldr` section | `ds-banner--brand` with label | DS 배너 컴포넌트 |
| `.article-hero` | `ds-section--hero` + `ds-article-container` | DS 히어로 컴포넌트 |
| `.related__grid` | `ds-card-grid--3col` | DS 카드 그리드 |
| `.cta-strip` | `ds-cta-band` with bg image | DS CTA 밴드 |
| `<ul>` 순서 없는 리스트 | `ds-bullet--check` 또는 `ds-bullet--dot` (컨텍스트에 따라) | DS 불릿 컴포넌트 |
| `<ol>` 순서 리스트 (6단계) | `ds-bullet--number` | DS 번호 스텝 컴포넌트 |
| 인라인 style 속성 | 전부 제거 | DS 규칙: inline style 금지 |

---

## Diagram Builder Instructions

B타입 HTML 생성 후, 다음 2개 다이어그램을 `diagram-builder` 에이전트에 위임:

### Diagram 1: N2SF 패러다임 전환

- **Type:** 좌우 비교형 (Before/After)
- **Left panel:** "기존 -- 물리적 망분리"
  - Box: 내부망 (모든 업무 데이터)
  - Divider: "차단"
  - Box: 외부망 / 인터넷 (접근 불가)
  - Caption: "정보의 등급 무관, 일률 차단"
- **Arrow:** 화살표 (좌 -> 우)
- **Right panel:** "N2SF -- 다중계층보안 (MLS)"
  - Box (coral-soft): C (Classified) -- 기밀, 최고 등급 통제
  - Box (amber-soft): S (Sensitive) -- 민감, 조건부 외부 연계 가능
  - Box (teal-soft): O (Open) -- 공개, 외부 활용 가능
  - Caption: "정보 등급별 차등 보호"
- **Footer:** 기존: 모든 외부 AI 사용 = 망분리 위반 / N2SF: 정보 등급과 보안 통제에 따라 외부 AI 활용 가능

### Diagram 2: 게이트웨이 방식 정보 흐름도

- **Type:** 수직 흐름도 + 영역 구분
- **Top zone (teal-soft):** 인터넷 영역 (O등급)
  - Box: 외부 LLM (GPT.Claude.Gemini)
- **Bottom zone (amber-soft):** 기관 전산망 (S등급)
  - Box: 사용자 단말 (내부망 UI)
  - Arrow -> Box: RAG 엔진 (기관 문서 검색)
  - Arrow -> Box (primary highlight): 보안 게이트웨이 (민감정보 캡슐화)
  - Arrow -> Box: 보안 경계 (방화벽.Proxy)
  - Dashed arrow up to 외부 LLM (전송)
  - Dashed arrow down from 외부 LLM (응답)
- **Summary box:** 6단계 정보 흐름 (1~6)
- **Footer:** 게이트웨이의 핵심 역할 설명

---

## Implementation Notes for frontend-dev

1. **`<html lang="ko">`** -- 한국어 원문이므로 lang 속성 반드시 ko
2. **Inter 폰트** -- Google Fonts에서 Inter 로드 (DM Sans 아님, capsule v6.2)
3. **JetBrains Mono** -- 코드/라벨 폰트 (Fragment Mono 대신)
4. **Container max-width: 1280px** (capsule v6.2), article-container max-width: 1080px
5. **Oxanium 폐기** -- 제품명도 Inter 사용. `ds-text--product` 클래스는 유지하되 font-family를 Inter로 변경
6. **capsule brand tokens** -- `:root`에 `--c-primary`, `--c-teal`, `--c-coral`, `--c-ink` 등 capsule 전용 변수 선언
7. **Button style** -- `btn--primary`는 solid ink bg, hover primary. gradient 버튼 폐기
8. **비교표 반응형** -- mobile에서 `overflow-x: auto` + scrollbar 숨김 (`scrollbar-width: none` + `::-webkit-scrollbar { display: none; }`)
9. **SVG 도식 placeholder** -- diagram-builder 완료 전까지 `<!-- DIAGRAM PLACEHOLDER -->` 주석으로 위치만 표시. diagram-builder 완료 후 삽입
10. **Related articles URL** -- 현재 `#` placeholder. 해당 아티클 B-type 생성 시 실제 URL로 교체 예정
11. **Meta tags** -- `<meta property="og:type" content="article">`, `<meta property="og:locale" content="ko_KR">`
12. **JSON-LD** -- BreadcrumbList + FAQPage schema 포함
13. **word-break: keep-all** -- 한국어 텍스트 줄바꿈을 위해 필수
14. **컬러 라인 꾸밈 금지** -- 카드.배너에 `border-top/left colored` 장식 금지
15. **eyebrow 허용** -- capsule v6.2에서 eyebrow 허용이나, 이 페이지에서는 Hero에 category chip(badge)을 사용하므로 별도 eyebrow 불필요
