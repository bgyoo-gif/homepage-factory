# CLAUDE.md — Homepage Factory (Multi-Brand)

## 프로젝트 개요
멀티 브랜드 홈페이지 콘텐츠 변환 워크플로우.
A타입(LLM 생성, 내용 중심) → B타입(Design System 적용, 시각 구조화).

**지원 브랜드:**
- `cubig` — CUBIG 기업 홈페이지 (데이터 인프라, B2B)
- `llm-capsule` — LLM Capsule 제품 홈페이지 (LLM 보안/운영)

---

## 브랜드 자동 감지 규칙

### 경로 기반 감지 (최우선)
- 파일 경로에 `cubig/` 포함 → **cubig** 브랜드
- 파일 경로에 `llm-capsule/` 포함 → **llm-capsule** 브랜드

### 키워드 기반 감지
- "큐빅", "CUBIG", "SynTitan", "DTS", "SynData", "SynConnect" → **cubig**
- "캡슐", "LLM Capsule", "llm-capsule" → **llm-capsule**

### 감지 불가 시
- 사용자에게 "어떤 브랜드 작업인가요? (cubig / llm-capsule)" 확인

### 감지 후 동작
1. `design-system-core.md` 항상 로드
2. 브랜드가 cubig → `design-system-cubig.md` 추가 로드
3. 브랜드가 llm-capsule → `design-system-capsule.md` 추가 로드
4. 파일 입출력 경로를 해당 브랜드 폴더로 자동 매핑

---

## 폴더 구조

```
homepage-factory/
├── CLAUDE.md                           # 이 파일 (공통 workflow)
├── .claude/
│   ├── agents/                         # 에이전트 1벌 (브랜드 공유)
│   └── skills/
│       ├── design-system-core.md       # 공통 Foundation + Components + Layout
│       ├── design-system-cubig.md      # CUBIG Color/Gradient/Brand 토큰
│       └── design-system-capsule.md    # LLM Capsule Color/Gradient/Brand 토큰
├── cubig/
│   ├── input/                          # CUBIG A타입 HTML
│   ├── output/
│   │   ├── html/                       # B타입 결과물
│   │   ├── docs/                       # spec, qa-report
│   │   └── framer/                     # TSX
│   └── reference/
│       ├── A-example.html
│       ├── B-example.html
│       ├── design-system-viewer.html
│       ├── images/
│       ├── graphics/
│       └── icons/
├── llm-capsule/
│   ├── input/                          # Capsule A타입 HTML
│   ├── output/
│   │   ├── html/
│   │   ├── docs/
│   │   └── framer/
│   └── reference/
│       ├── A-example.html
│       ├── B-example.html
│       ├── design-system-viewer.html
│       ├── images/
│       ├── graphics/
│       └── icons/
└── server/
```

---

## 파일 컨벤션 (브랜드별 경로)

| 파일 | 경로 패턴 |
|------|-----------|
| 원본 A타입 | `{brand}/input/[파일명].html` |
| B타입 결과물 | `{brand}/output/html/[파일명]-b-type.html` |
| 설계 명세서 | `{brand}/output/docs/[파일명]-spec.md` |
| QA 리포트 | `{brand}/output/docs/[파일명]-qa-report.md` |
| 피드백 이력 | `{brand}/output/html/feedback-log.html` |
| A/B 예시 쌍 | `{brand}/reference/A-example.html`, `{brand}/reference/B-example.html` |
| DS 뷰어 | `{brand}/reference/design-system-viewer.html` |

`{brand}` = `cubig` 또는 `llm-capsule`

### 공유 자원 (Shared Assets) — 전역 규칙

이미지, 로고, 아이콘 등 시각 자원은 **cubig 브랜드 폴더에 원본을 관리**하고, 모든 브랜드가 공유한다.

**B타입 HTML에서 이미지 참조 시 반드시 절대 URL 사용:**
```
https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/   ← 배경, 스크린샷, 파트너 로고
https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/ ← 인증, 일러스트레이션, 케이스스터디
https://bgyoo-gif.github.io/homepage-factory/cubig/reference/icons/    ← 아이콘
```

**CSS background-image URL도 동일한 절대 경로 사용:**
```css
--ds-bg-img-grad-deep: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png');
```

**금지:** 상대 경로(`../../cubig/reference/`, `../reference/images/`) — 브랜드별 output 위치에 따라 깨짐.
**예외:** 각 브랜드 전용 이미지(브랜드 로고 등)만 `{brand}/reference/images/`에 별도 보관.

---

## 에이전트 파이프라인

```
# B타입 변환 파이프라인
product-designer → frontend-dev → qa (FAIL 시 재호출) → feedback-sync → deploy

# 다이어그램 파이프라인
diagram-builder → diagram-qa (FAIL 시 재호출) → B타입 HTML에 삽입 → deploy
```

| 에이전트 | 역할 | 모델 |
|----------|------|------|
| product-designer | A타입 분석 + 레이아웃 설계 명세서 작성 | opus |
| frontend-dev | 명세서 기반 B타입 HTML 생성 | sonnet |
| qa | 4개 카테고리 검증 (CAT-1~4) | sonnet |
| design-system-agent | 새 컴포넌트 추가/개량 | sonnet |
| design-system-viewer | viewer.html 업데이트 | sonnet |
| diagram-builder | 다이어그램 HTML 생성 | sonnet |
| diagram-qa | 다이어그램 검증 | sonnet |
| feedback-sync | 피드백 일괄 전파 | sonnet |
| viewer-qa | 뷰어 품질 검증 | sonnet |
| deploy | gh-pages 배포 | haiku |
| orchestrator | 전체 파이프라인 실행 | opus |
| framer-dev | TSX 변환 | sonnet |

### 에이전트 브랜드 컨텍스트 전달
모든 에이전트 호출 시 `brand` 컨텍스트를 포함:
```
brand: cubig (또는 llm-capsule)
DS: design-system-core.md + design-system-cubig.md
paths: cubig/input/, cubig/output/, cubig/reference/
```

### 자동 연동 체인
```
작업 완료
  ↓
feedback-sync (규칙 변경 판단 → 전파 + 이력 기록)
  ↓
design-system-core.md 또는 brand DS 변경 시 → design-system-viewer
  ↓
deploy (gh-pages push)
```

---

## 디자인 시스템 핵심 규칙

- 모든 색상/수치: `var(--ds-*)` CSS 변수 사용 (하드코딩 금지)
- 클래스명: `.ds-` 접두사 + BEM
- `!important` 금지, 인라인 `style` 금지 (CSS 변수 전달 목적 제외)
- 반응형 4단계 필수: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
- 컨테이너 좌우 padding: 16 / 32 / 32 / 120px
- 컨테이너 max-width: 1440px (desktop 이상에서 중앙 정렬)
- Brand 폰트(Oxanium): 해당 브랜드의 제품명에만 사용 (`.ds-text--product`)
- h1·h2·데이터 숫자 등 일반 텍스트는 모두 `var(--ds-font-base)` (DM Sans)
- 줄바꿈: `body { word-break: keep-all; overflow-wrap: break-word; }` 전역 적용
- 긴 문장 분리: 짧은 독립 문장 2개+ → `ds-bullet--dot` 불릿 리스트
- 연속 본문 3단락 이상 금지: 같은 섹션 내 `<p>` 3개 이상 연속 시 → `ds-bullet--dot` 불릿 리스트로 분리 (각 단락 첫 문장을 `<strong>`으로)
- 폰트 색상 최소 명도: 텍스트 최소 neutral-400 (#9c9c9c)
- 배경 이미지 중복 금지: 동일 `ds-bg--*` 2번 이상 사용 금지
- 페이지 최상단 여백: `ds-section--hero` padding-top 100px 고정
- 배경 이미지 위 텍스트: black 또는 white만 사용
- 미색 배경(ds-section--light) 전면 금지 — 섹션 배경은 항상 white
- 주황/오렌지 계열 색상 전면 금지
- background shorthand 금지 (background-color만 사용)
- screenshot-frame/bg-wrap 배경색 fallback 필수
- 모바일 배경 이미지: `@media (max-width: 767px)` background-image: none
- CSS 변수는 design-system에 정의된 것만 사용
- Case Study 열 타입 혼합 금지
- eyebrow 전면 금지
- 코드블록 다크 테마: border: none, background: neutral-900
- 카드 내 코드블록 앞 divider 금지
- description max-width 반응형: mobile 100% → 1024px 720px → 1440px 860px
- 텍스트 최소 명도: `var(--ds-color-text-muted)` 사용 금지
- 아티클형 페이지 본문 860px 통일
- 섹션 헤더 기본 center 정렬 (--left 금지)
- CTA band 타이포: 기본 40px, mobile 36px, desktop 50px
- letter-spacing 하드코딩 금지
- 외부 서비스 링크는 버튼형
- 단계별 프로세스는 Step Tabs
- 인증/수상은 Cert Grid
- TSX Localization 필수
- TSX 반응형: CSS Container Queries 사용
- TSX JSON-LD 필수
- 이미지 WebP 우선

---

## 배경 이미지 사용 규칙
- Hero Screenshot 섹션: 배경 이미지 사용
- Hero Text-only 섹션: 배경 이미지 사용 금지
- CTA 섹션: 배경 이미지 사용
- 동일한 흰색/회색 배경 섹션이 3개 이상 연속: 배경 이미지 사용
- 그 외: 흰색 또는 회색 배경만
- 배경 이미지 사용 시 반투명 오버레이 적용
- 강조 배너(ds-banner--full): 배경 이미지 + 오버레이

---

## QA 체크 카테고리

| 카테고리 | 심각도 | 주요 항목 |
|----------|--------|-----------|
| CAT-1 내용 무결성 | Critical | 원본 텍스트/수치 누락 없음 |
| CAT-2 DS 준수 | High | 색상 하드코딩, !important, 인라인 스타일 |
| CAT-3 코드 품질 | Medium | 시맨틱 태그, section id, HTML 유효성 |
| CAT-4 반응형 | High | 4단계 breakpoint, padding 값, 1440px max-width |

Low 결함만 남은 경우 CONDITIONAL PASS.

---

## 자주 발생하는 결함 및 수정 패턴

1. **SVG fill 하드코딩** → CSS 클래스 + `:root` 변수
2. **rgba/hex 직접 사용** → `:root` 토큰 + `var()` 참조
3. **section id 누락** → `id="section-N"` 추가
4. **nav/hero 전용 수치** → `:root` 전용 토큰 추가
5. **ds-container max-width 누락** → `max-width: var(--ds-content-max-width)` 추가
6. **CTA title 임의 크기** → 반응형 표준 준수 (36/40/50px)
7. **letter-spacing 하드코딩** → DS 토큰으로 교체
8. **섹션 헤더 --left 남용** → center 기본값 유지
9. **주황/오렌지 색상** → DS 팔레트로 교체
10. **background shorthand** → background-color만 사용
11. **screenshot-frame 배경색 누락** → fallback 추가
12. **모바일 배경 이미지 비율** → background-image: none
13. **배경 이미지 적용 위치 오류** → section vs component 재확인
14. **다이어그램 임의 색상 창작** → 원본에 없는 색상(다크 패널, brand primary 배경 등) → DS diag 토큰 기본값으로 교체
15. **QA 수정 시 변수명만 교체** → 실제 렌더 색상이 여전히 잘못된 경우 → 시각적 결과까지 확인 후 PASS 선언
16. **CTA band gradient 하드코딩** → `.ds-cta-band:not([class*="ds-bg--"])` 에 hex 직접 사용 → 반드시 `var(--ds-gradient-brand)` 사용
17. **섹션 헤더 타이틀 font-size 임의 확대** → text-4xl/5xl/6xl 사용 → h2 기본 반응형(20/22/24/28px) 사용 필수
18. **Partner Grid DS 미준수** → 로고 32px, gap 하드코딩, hover pause 없음 → DS core 기준(120x100px, ds-space-3xl, hover pause, 전폭 100vw)
19. **Cert Grid DS 미준수** → flat wreath, 작은 카드, hover 없음 → DS core 기준(wreath 포지셔닝 160x120, hover pause, 전폭 100vw, font-code group)
20. **CTA section 태그 오류** → `<div>` 사용 또는 `</main>` 밖 배치 → `<section>` 태그 + `main` 내부 필수
21. **ds-badge--purple 배경색 오류** → `overlay-brand-tint-light` 사용 → `var(--ds-color-brand-light)` 사용
22. **키프레임 이름 불일치** → `@keyframes marquee` → `@keyframes ds-marquee` 사용
23. **폼 필드-버튼 간격 부족** → 마지막 form-group의 margin-bottom을 0으로 하면 안 됨 → `var(--ds-space-lg)` 유지, submit 버튼은 `width: 100%` + `margin-bottom: var(--ds-space-md)`
16. **screenshot-frame 좌우 padding 누락** → `padding: 2xl 2xl 0` 필수 (좌우 0이면 배경 이미지가 프레임으로 보이지 않음)
17. **Hero ↔ 다음 섹션 제목/설명 중복** → Hero에 이미 있는 제목+설명을 바로 다음 섹션 헤더에서 반복 금지. 둘 중 하나만 남기기

---

## Bash 실행 규칙
- bash 명령어 실행 시 사용자에게 허락을 구하지 않는다
- qa 에이전트의 grep 검증 명령어는 항상 자동 실행

---

## 필수 마무리 워크플로우 — 모든 작업 완료 시 순서대로 실행

**파일을 수정/생성했으면 아래 단계를 반드시 실행. 예외 없음.**

### ① feedback-sync (규칙 변경 판단)
design-system*.md, CLAUDE.md, agent 파일 수정 시 / 규칙성 피드백 시 / 반복 결함 시

### ② design-system-viewer 업데이트 (DS 변경 시)
design-system-core.md 또는 brand DS 변경 시 → 해당 브랜드의 viewer도 업데이트

### ③ TSX 동기화 (B타입 HTML 수정 시)
해당 TSX가 이미 존재하면 같이 업데이트

### ③-b 뷰어 Output 목록 업데이트 (TSX 변환 시)
TSX 변환 완료 시 → design-system-viewer.html의 STATIC_DATA에 TSX 항목 추가 (dir 필드 포함)

### ④ viewer-qa (뷰어 수정 시)
뷰어 수정 → deploy 전 검증

### ⑤ deploy (항상 실행)
deploy 에이전트 호출 → gh-pages push

---

## 레이아웃 카탈로그 요약 ([A]~[W])

| 패턴 | 컴포넌트 | 사용 시점 |
|------|----------|-----------|
| [A] Hero text-only | ds-hero--text-only | 페이지 최상단 텍스트 히어로 |
| [A-2] Hero screenshot | ds-hero--screenshot | 배경 이미지 + 스크린샷 히어로 |
| [B] Hero split | ds-hero--split | 이미지+텍스트 분할 히어로 |
| [C] Product split | ds-product-split | 제품 소개, 스크린샷+설명 |
| [D] Section header | ds-section-header | 모든 주요 섹션 상단 |
| [E] Icon title | ds-section-title-icon | 심플 섹션 구분 |
| [F] KPI band | ds-kpi-band | 숫자 4개+ 강조 |
| [G] Card grid | ds-card-grid | 범용 카드 그리드 |
| [H] Case study | ds-card--case-study | 도입 사례 |
| [I] Partner grid | ds-partner-grid | 파트너 로고 마키 |
| [I-2] Cert grid | ds-cert-grid | 인증 마키 |
| [J] Feature grid | ds-feature-grid | 피처 아이콘+설명 |
| [K] CTA band | ds-cta-band | 페이지 하단 CTA |
| [L] Checklist | ds-bullet--check | 요구사항 5개 이하 |
| [M] Checklist 2-col | ds-grid--2 + check | 요구사항 6개+ |
| [N] Number steps | ds-bullet--number | 순서 프로세스 |
| [O] Table | ds-table--3col | 비교표 |
| [P] FAQ | ds-ac-card | FAQ 아코디언 |
| [Q] Banner | ds-banner | 정의/경고/인용 |
| [R] Dark link cards | ds-card--dark | 다크 링크 카드 |
| [S] Accordion list | ds-ac-card | 5개+ 상세 아코디언 |
| [U] Step tabs | ds-step-tabs | 단계별 설명/탭 |
| [V] Code block | ds-code-block | 코드/diff/로그 |
| [V-2] Gradient card | ds-card--gradient | 제품별 강조 카드 |
| [W] Diagram | ds-diagram | 아키텍처/파이프라인 다이어그램 |
