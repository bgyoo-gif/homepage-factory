---
name: design-system-core
description: >
  브랜드 무관 공통 디자인 시스템 Foundation.
  HTML 변환, 컴포넌트 생성, QA 검증 등 모든 작업에서 이 규칙을 따른다.
  반드시 brand 파일(design-system-cubig.md 또는 design-system-capsule.md)과 함께 로드해야 한다.
---

# Design System Core v5.0
> 이 파일은 브랜드 무관 공통 Foundation. 반드시 brand 파일(design-system-cubig.md 또는 design-system-capsule.md)과 함께 로드해야 한다.
> Brand 파일이 제공하는 값: brand colors, gradient tokens, gradient-arch-header, border-brand color, partner logo data, cert/award data, product name list, case study image set, product logo file list, component color overrides (btn--primary bg, text--brand color 등), CTA/KPI fallback gradient.

> reference/B-example.html에서 실측 추출
> 최종 업데이트: 2026-03-16

---

## Color System

```css
:root {
  /* Primary / Brand — 값은 brand 파일에서 제공 */
  --ds-color-brand-primary:   /* brand file */;
  --ds-color-brand-purple:    /* brand file */;
  --ds-color-brand-purple-lt: /* brand file */;
  --ds-color-brand-purple-md: /* brand file */;

  /* Neutral */
  --ds-color-neutral-900: #0f0f0f;
  --ds-color-neutral-850: #141414;
  --ds-color-neutral-800: #171719;
  --ds-color-neutral-700: #303135;
  --ds-color-neutral-500: #636363;
  --ds-color-neutral-400: #9c9c9c;
  --ds-color-neutral-350: #adadad;
  --ds-color-neutral-300: #bababa;
  --ds-color-neutral-250: #c4c4c4;
  --ds-color-neutral-200: #e0e0e0;
  --ds-color-neutral-150: #e6e7e9;
  --ds-color-neutral-100: #ececec;
  --ds-color-neutral-050: #f2f2f2;
  --ds-color-neutral-025: #f7f7f7;
  --ds-color-white:       #ffffff;
  --ds-color-black:       #000000;

  /* Text */
  --ds-color-text-primary:   #0f0f0f;
  --ds-color-text-secondary: #636363;
  --ds-color-text-tertiary:  #9c9c9c;
  --ds-color-text-inverse:   #ffffff;
  --ds-color-text-muted:     #cacccf;

  /* Functional */
  --ds-color-success: #0e824c;
  --ds-color-error:   #ff3030;
  --ds-color-info:    #155ea0;
  --ds-color-warn:    #f59e0b;

  /* Functional — Dark bg variants (코드 블록 등 다크 배경 위 가독성용) */
  --ds-color-success-light: #34d399;
  --ds-color-error-light:   #ff6b6b;
  --ds-color-info-light:    #60a5fa;
  --ds-color-warn-light:    #fbbf24;

  /* Border */
  --ds-color-border-default: #e6e7e9;
  --ds-color-border-strong:  #171719;
  --ds-color-border-brand:   var(--ds-color-brand-purple); /* 값은 brand 파일에서 결정 */

  /* Surface */
  --ds-color-surface-dark:  #171719;
  --ds-color-surface-mid:   #f2f2f2;
  --ds-color-surface-light: #f7f7f7;
  --ds-color-surface-white: #ffffff;

  /* Gradient — 값은 brand 파일에서 제공 */
  --ds-gradient-brand: /* brand file */;
  --ds-gradient-dark:  linear-gradient(180deg, #0f0f0f 0%, #171719 100%);

  /* Gradient Card Border — 값은 brand 파일에서 제공 */
  --ds-gradient-card-purple: /* brand file */;
  --ds-gradient-card-blue:   /* brand file */;
  --ds-gradient-card-green:  /* brand file */;
  --ds-gradient-card-silver: /* brand file */;

  /* Gradient Card Inner Background — 값은 brand 파일에서 제공 */
  --ds-gradient-inner-purple: /* brand file */;
  --ds-gradient-inner-blue:   /* brand file */;
  --ds-gradient-inner-green:  /* brand file */;
}
```

---

## Typography

```css
:root {
  --ds-font-base:    "DM Sans", "DM Sans Placeholder", sans-serif;
  --ds-font-kr:      "Pretendard Regular", sans-serif;
  --ds-font-kr-md:   "Pretendard Medium", sans-serif;
  --ds-font-kr-semi: "Pretendard SemiBold", sans-serif;
  --ds-font-brand:   "Oxanium", sans-serif;
  --ds-font-system:  "Geist", system-ui, Arial, sans-serif;
  --ds-font-code:    "Fragment Mono", "Geist Mono", monospace;
  --ds-font-inter:   "Inter", "Inter Placeholder", sans-serif;

  --ds-text-xs:   12px;
  --ds-text-sm:   14px;
  --ds-text-md:   16px;
  --ds-text-lg:   18px;
  --ds-text-xl:   20px;
  --ds-text-2xl:  24px;
  --ds-text-3xl:  30px;
  --ds-text-4xl:  36px;
  --ds-text-5xl:  40px;
  --ds-text-6xl:  50px;
  --ds-text-7xl:  64px;
  --ds-text-8xl:  90px;
  --ds-text-9xl: 120px;

  --ds-weight-light:    300;
  --ds-weight-regular:  400;
  --ds-weight-medium:   500;
  --ds-weight-semibold: 600;
  --ds-weight-bold:     700;

  --ds-leading-tight:   1.2;
  --ds-leading-normal:  1.5;
  --ds-leading-relaxed: 1.7;

  --ds-tracking-tight:  -0.5px;
  --ds-tracking-normal: 0px;
  --ds-tracking-wide:   0.08em;
}

h1, .ds-h1 { font-family: var(--ds-font-base);  font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); letter-spacing: var(--ds-tracking-tight); text-wrap: balance; }
h2, .ds-h2 { font-family: var(--ds-font-base);  font-size: var(--ds-text-5xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); letter-spacing: var(--ds-tracking-tight); text-wrap: balance; }
h3, .ds-h3 { font-family: var(--ds-font-base);  font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-semibold); line-height: var(--ds-leading-tight); text-wrap: balance; }
h4, .ds-h4 { font-family: var(--ds-font-base);  font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-tight); }
.ds-body-l  { font-family: var(--ds-font-base);  font-size: var(--ds-text-xl);  font-weight: var(--ds-weight-regular);  line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-body-m  { font-family: var(--ds-font-base);  font-size: var(--ds-text-md);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-body-s  { font-family: var(--ds-font-base);  font-size: var(--ds-text-sm);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-caption { font-family: var(--ds-font-base);  font-size: var(--ds-text-xs);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); }
.ds-data    { font-family: var(--ds-font-base);  font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); color: var(--ds-color-text-primary); }
.ds-code    { font-family: var(--ds-font-code);  font-size: var(--ds-text-sm);  font-weight: var(--ds-weight-regular);  line-height: var(--ds-leading-normal); }

/* 인라인 텍스트 강조 */
.ds-text--brand       { color: var(--ds-color-brand-purple); }
.ds-text--brand-light { color: var(--ds-color-brand-purple-lt); }
.ds-text--linethrough { text-decoration: line-through; color: var(--ds-color-text-tertiary); }

/* 제품명 전용 — Oxanium(brand) 폰트 적용
   사용 대상: 단독 키워드로 표기되는 제품명에 한정 (제품명 목록은 brand 파일 참조)
   일반 h1·h2·데이터 숫자 등에는 사용 금지 → var(--ds-font-base) 사용 */
.ds-text--product { font-family: var(--ds-font-brand); font-weight: var(--ds-weight-bold); }

/* 인라인 코드 */
code, .ds-code-inline {
  font-family: var(--ds-font-code);
  font-size: 0.875em;
  font-weight: var(--ds-weight-regular);
  background-color: var(--ds-color-neutral-100);
  border-radius: 3px;
  padding: 0 4px;
  color: inherit;
}
```

### Typography 반응형

```css
h1, .ds-h1 { font-size: 24px; }
h2, .ds-h2 { font-size: 20px; }
h3, .ds-h3 { font-size: 18px; }
.ds-data    { font-size: 20px; }

@media (min-width: 768px)  { h1, .ds-h1 { font-size: 28px; } h2, .ds-h2 { font-size: 22px; } .ds-data { font-size: 22px; } }
@media (min-width: 1024px) { h1, .ds-h1 { font-size: 32px; } h2, .ds-h2 { font-size: 24px; } h3, .ds-h3 { font-size: 20px; } .ds-data { font-size: 24px; } }
@media (min-width: 1440px) { h1, .ds-h1 { font-size: 36px; } h2, .ds-h2 { font-size: 28px; } h3, .ds-h3 { font-size: 22px; } .ds-data { font-size: 28px; } }
```

---

## Spacing & Shape

```css
:root {
  --ds-space-2xs:  4px;
  --ds-space-xs:   8px;
  --ds-space-sm:   12px;
  --ds-space-md:   16px;
  --ds-space-lg:   24px;
  --ds-space-xl:   32px;
  --ds-space-2xl:  48px;
  --ds-space-3xl:  64px;
  --ds-space-4xl:  80px;
  --ds-space-5xl: 100px;
  --ds-space-6xl: 150px;

  --ds-radius-none: 0px;
  --ds-radius-xs:   5px;
  --ds-radius-sm:   8px;
  --ds-radius-md:   18px;
  --ds-radius-lg:   24px;
  --ds-radius-xl:   40px;
  --ds-radius-2xl:  56px;
  --ds-radius-pill: 9999px;

  --ds-border-width:      1px;
  --ds-border-width-bold: 2px;
  --ds-border-default:    1px solid var(--ds-color-border-default);
  --ds-border-brand:      1px solid var(--ds-color-brand-purple);

  --ds-shadow-card:  0px 24px 40px rgba(0, 0, 0, 0.04);
  --ds-shadow-modal: 0px 24px 40px rgba(0, 0, 0, 0.10);
}
```

---

## Iconography

아이콘 라이브러리: **[Lucide Icons](https://lucide.dev)** (MIT, 1500+ icons)
CDN: `https://unpkg.com/lucide-static@latest/icons/[icon-name].svg`

### 사용 규칙

```css
.ds-icon {
  width: 24px; height: 24px;
  stroke: currentColor; fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ds-icon--sm { width: 16px; height: 16px; }
.ds-icon--md { width: 24px; height: 24px; }
.ds-icon--lg { width: 32px; height: 32px; }
.ds-icon--xl { width: 48px; height: 48px; }
```

### 인라인 SVG 사용법

아이콘은 반드시 **인라인 SVG**로 삽입한다 (img 태그 금지 — stroke color 제어 불가).
Lucide SVG의 기본 `stroke-width="2"`를 `stroke-width="1.5"`로 변경한다.

```html
<!-- 올바른 예 -->
<svg class="ds-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="..." />
</svg>
```

### 카테고리별 아이콘 목록

**Network / Connectivity**
| 아이콘명 | 용도 |
|----------|------|
| globe | 글로벌, 웹, 인터넷 |
| network | 네트워크 토폴로지, 연결 |
| wifi | 무선 연결, 통신 |
| cloud | 클라우드 서비스 |
| cloud-upload | 클라우드 업로드 |
| cloud-download | 클라우드 다운로드 |
| router | 라우터, 네트워크 장비 |
| antenna | 통신, 신호, 전파 |
| cable | 유선 연결, 케이블 |
| link | 연결, 링크 |
| unplug | 연결 해제 |

**Infrastructure / System**
| 아이콘명 | 용도 |
|----------|------|
| server | 서버, 호스팅 |
| database | 데이터베이스, 저장소 |
| cpu | 프로세서, 연산, 컴퓨팅 |
| hard-drive | 스토리지, 디스크 |
| monitor | 모니터, 대시보드 |
| laptop | 노트북, 클라이언트 |
| container | 컨테이너, Docker |
| blocks | 모듈, 블록 구조 |
| circuit-board | 회로, 하드웨어 |
| pc-case | 온프레미스, 물리 서버 |

**AI / Machine Learning**
| 아이콘명 | 용도 |
|----------|------|
| brain | AI, 인공지능, 지능 |
| brain-circuit | AI 회로, 딥러닝 |
| brain-cog | AI 설정, 머신러닝 튜닝 |
| bot | 챗봇, 자동화 에이전트 |
| sparkles | AI 생성, 매직, 스마트 기능 |
| zap | 자동화, 빠른 처리, 트리거 |
| wand-sparkles | AI 마법, 자동 변환 |
| atom | 과학, 연구, 핵심 기술 |
| scan-eye | 컴퓨터 비전, 인식 |
| message-square-code | LLM, 프롬프트, 코드 생성 |

**Report / Analytics**
| 아이콘명 | 용도 |
|----------|------|
| chart-bar | 막대 차트, 통계 |
| chart-line | 라인 차트, 추세 |
| chart-pie | 파이 차트, 비율 |
| chart-area | 영역 차트 |
| trending-up | 상승, 성장, 개선 |
| trending-down | 하락, 감소 |
| file-text | 문서, 리포트 |
| file-chart-line | 분석 리포트 |
| clipboard-list | 체크리스트, 감사 |
| table | 테이블, 데이터 뷰 |

**Processing / Workflow**
| 아이콘명 | 용도 |
|----------|------|
| workflow | 워크플로우, 파이프라인 |
| cog | 설정, 엔진, 처리 |
| settings | 환경 설정 |
| refresh-cw | 새로고침, 동기화 |
| repeat | 반복, 루프 |
| layers | 레이어, 스택, 계층 |
| git-branch | 분기, 버전 |
| merge | 병합, 통합 |
| loader | 로딩, 프로세싱 중 |
| arrow-right-left | 데이터 변환, 교환 |
| shuffle | 셔플, 매핑, 변환 |

**Security / Privacy**
| 아이콘명 | 용도 |
|----------|------|
| shield | 보안, 보호 |
| shield-check | 보안 인증, 검증 완료 |
| shield-alert | 보안 경고 |
| lock | 잠금, 암호화 |
| lock-open | 잠금 해제 |
| key | 키, 인증, API 키 |
| fingerprint | 생체인증, 고유 식별 |
| eye-off | 비식별화, 마스킹 |
| scan | 스캔, 탐지 |
| badge-check | 인증 완료, 신뢰 |

**Data / Storage**
| 아이콘명 | 용도 |
|----------|------|
| database | DB, 데이터 저장 |
| folder | 폴더, 파일 관리 |
| file | 파일 |
| archive | 아카이브, 보관 |
| package | 패키지, 배포 단위 |
| box | 박스, 컨테이너 |
| download | 다운로드 |
| upload | 업로드 |
| share-2 | 공유, 배포 |

**General UI**
| 아이콘명 | 용도 |
|----------|------|
| check | 확인, 완료 |
| x | 닫기, 취소 |
| plus | 추가 |
| minus | 제거 |
| search | 검색 |
| arrow-right | 다음, 이동 |
| arrow-left | 이전, 뒤로 |
| external-link | 외부 링크 |
| menu | 메뉴, 햄버거 |
| user | 사용자 |
| users | 팀, 그룹 |
| mail | 이메일, 연락 |
| phone | 전화 |
| calendar | 일정, 날짜 |
| clock | 시간, 타이머 |
| info | 정보 |
| alert-triangle | 경고 |
| circle-help | 도움말 |

---

## Responsive System

```css
:root {
  --ds-container-padding-mobile:     16px;
  --ds-container-padding-tablet:     32px;
  --ds-container-padding-sm-desktop: 32px;
  --ds-container-padding-desktop:    120px;
  --ds-content-max-width:            1200px;
}

.ds-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--ds-container-padding-mobile);
  box-sizing: border-box;
}
@media (min-width: 768px)  { .ds-container { padding: 0 var(--ds-container-padding-tablet); } }
@media (min-width: 1024px) { .ds-container { padding: 0 var(--ds-container-padding-sm-desktop); } }
@media (min-width: 1440px) { .ds-container { padding: 0 var(--ds-container-padding-desktop); max-width: 1440px; } }

/* Grid */
.ds-grid { display: grid; gap: var(--ds-space-lg); width: 100%; }
.ds-grid--1, .ds-grid--2, .ds-grid--3, .ds-grid--4, .ds-grid--auto { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .ds-grid--2    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--3    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--4    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .ds-grid--3    { grid-template-columns: repeat(3, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1440px) {
  .ds-grid--4    { grid-template-columns: repeat(4, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Base Styles

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--ds-font-base);
  color: var(--ds-color-text-primary);
  background-color: var(--ds-color-surface-white);
  padding-top: 58px;
  word-break: keep-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
img, video { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }

p, li, dt, dd, blockquote,
.ds-section-header__description,
.ds-hero__description,
.ds-cta-band__description,
.ds-body-l, .ds-body-m, .ds-body-s,
.ds-ac-card__title,
.ds-card__description {
  word-break: keep-all;
  overflow-wrap: break-word;
  text-wrap: pretty;
}
```

---

## Components

### Section

```css
.ds-section { width: 100%; padding: var(--ds-space-4xl) 0; }
.ds-section--hero { padding: 100px 0 var(--ds-space-5xl); }
.ds-section--dark {
  background-color: var(--ds-color-surface-dark);
  color: var(--ds-color-text-inverse);
}
.ds-section--light { background-color: var(--ds-color-surface-light); }
```

### Navigation

```css
.ds-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: 58px;
  display: flex; align-items: center;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--ds-color-border-default);
  padding: 0 var(--ds-container-padding-mobile);
}
@media (min-width: 1440px) { .ds-nav { padding: 0 var(--ds-container-padding-desktop); } }
.ds-nav__inner { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.ds-nav__logo { font-family: var(--ds-font-base); font-weight: var(--ds-weight-bold); font-size: var(--ds-text-lg); color: var(--ds-color-text-primary); }
.ds-nav__links { display: flex; align-items: center; gap: 32px; list-style: none; padding: 0; margin: 0; }
@media (max-width: 767px) { .ds-nav__links { display: none; } }
.ds-nav__link { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); transition: color 0.15s; }
.ds-nav__link:hover { color: var(--ds-color-text-primary); }
```

### Card

```css
.ds-card {
  background-color: var(--ds-color-surface-white);
  border-radius: var(--ds-radius-md);
  border: var(--ds-border-default);
  padding: var(--ds-space-lg);
  box-shadow: var(--ds-shadow-card);
  box-sizing: border-box;
}
.ds-card--dark {
  background-color: var(--ds-color-neutral-850);
  border-color: var(--ds-color-neutral-700);
  color: var(--ds-color-text-inverse);
}
.ds-card--highlight {
  background-color: var(--ds-color-surface-white);
  border: var(--ds-border-default);
  border-radius: var(--ds-radius-lg);
  padding: var(--ds-space-xl);
}
.ds-card--highlight .ds-card__value {
  font-family: var(--ds-font-base);
  font-size: var(--ds-text-6xl);
  font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary);
}
.ds-card--flat { background: transparent; border: none; padding: 0; box-shadow: none; }

@media (min-width: 768px)  { .ds-card { padding: var(--ds-space-lg); } }
@media (min-width: 1440px) { .ds-card { padding: var(--ds-space-xl); } }
```

### Card Sub-components

```css
.ds-card__badge {
  display: inline-flex; align-items: center; width: fit-content;
  padding: 4px 12px; border-radius: var(--ds-radius-pill);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  font-family: var(--ds-font-code); text-transform: uppercase;
  letter-spacing: var(--ds-tracking-wide);
  border: 1px solid currentColor; margin-bottom: var(--ds-space-md);
}
.ds-card__badge--brand { color: var(--ds-color-brand-purple);  border-color: var(--ds-color-brand-purple); }
.ds-card__badge--teal  { color: #0e9f8e;                        border-color: #0e9f8e; }
.ds-card__badge--red   { color: var(--ds-color-error);          border-color: var(--ds-color-error); }
.ds-card__badge--gray  { color: var(--ds-color-text-tertiary);     border-color: var(--ds-color-border-default); }

.ds-card__title { font-family: var(--ds-font-base); font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); margin-bottom: var(--ds-space-sm); }
.ds-card__title--lg { font-size: var(--ds-text-4xl); }
.ds-card__title--sm { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-semibold); }
.ds-card__subtitle { font-size: var(--ds-text-sm); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-md); }

.ds-card__image { width: 100%; border-radius: var(--ds-radius-md); overflow: hidden; margin-bottom: var(--ds-space-md); }
.ds-card__image img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ds-card__image--square { aspect-ratio: 1/1; }
.ds-card__image--wide   { aspect-ratio: 16/9; }
.ds-card__image--thumb  { width: 200px; flex-shrink: 0; }

.ds-card__divider { border: none; border-top: 1px solid var(--ds-color-border-default); margin: var(--ds-space-md) 0; }
.ds-card__description { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); flex: 1; word-break: keep-all; overflow-wrap: break-word; }
.ds-card__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: var(--ds-space-md); }
.ds-card__tag { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); background: var(--ds-color-surface-mid); padding: 2px 10px; border-radius: var(--ds-radius-pill); }
.ds-card__icon { font-size: 24px; margin-bottom: var(--ds-space-sm); display: block; }
.ds-card__button { margin-top: auto; padding-top: var(--ds-space-lg); }
```

### Banner

```css
.ds-banner {
  padding: var(--ds-space-md) var(--ds-space-lg);
  border-radius: 0; border: none;
  border-top: 1px solid var(--ds-color-border-default);
  border-bottom: 1px solid var(--ds-color-border-default);
  background-color: var(--ds-banner-bg, var(--ds-color-surface-light));
  font-size: var(--ds-text-sm); line-height: var(--ds-leading-relaxed);
  text-align: center; word-break: keep-all; overflow-wrap: break-word;
}
.ds-banner a, .ds-banner--full a { display: block; margin-top: var(--ds-space-sm); }
.ds-banner__label {
  font-family: var(--ds-font-code); font-size: var(--ds-text-xs);
  text-transform: uppercase; letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-xs); display: block;
}
.ds-banner--info    { --ds-banner-bg: rgba(21, 94, 160, 0.06); }
.ds-banner--success { --ds-banner-bg: rgba(14, 130, 76, 0.06); }
.ds-banner--error   { --ds-banner-bg: rgba(255, 48, 48, 0.06); }
.ds-banner--brand   { --ds-banner-bg: rgba(166, 23, 255, 0.06); }

.ds-banner--full {
  width: 100%; text-align: center;
  padding: var(--ds-space-xl) var(--ds-space-2xl);
  border-radius: var(--ds-radius-xl);
  background-size: cover; background-position: center;
  position: relative; overflow: hidden;
  color: var(--ds-color-text-primary);
  font-size: var(--ds-text-lg); font-weight: var(--ds-weight-medium);
  line-height: var(--ds-leading-relaxed); border: none;
  word-break: keep-all; overflow-wrap: break-word;
}
.ds-banner--full::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.45); z-index: 0;
}
.ds-banner--full > * { position: relative; z-index: 1; }
.ds-banner--full { isolation: isolate; }
```

### Button

```css
.ds-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--ds-space-xs);
  border-radius: var(--ds-radius-pill);
  font-family: var(--ds-font-base); font-weight: var(--ds-weight-medium); font-size: var(--ds-text-md);
  cursor: pointer; border: none; transition: opacity 0.2s, background-color 0.2s;
  white-space: nowrap; text-decoration: none;
}
.ds-btn:disabled { opacity: 0.4; pointer-events: none; }
.ds-btn--sm { padding: var(--ds-space-xs) var(--ds-space-md);  font-size: var(--ds-text-sm); }
.ds-btn--md { padding: var(--ds-space-sm) var(--ds-space-xl);  font-size: var(--ds-text-md); }
.ds-btn--lg { padding: var(--ds-space-md) var(--ds-space-2xl); font-size: var(--ds-text-lg); }
.ds-btn--primary   { background: var(--ds-gradient-brand); color: var(--ds-color-white); }
.ds-btn--primary:hover { opacity: 0.88; }
.ds-btn--secondary { background-color: transparent; color: var(--ds-color-text-primary); border: var(--ds-border-default); }
.ds-btn--secondary:hover { background-color: var(--ds-color-surface-light); }
.ds-btn--ghost     { background-color: transparent; color: var(--ds-color-brand-primary); border: none; padding-left: 0; padding-right: 0; }
.ds-btn--dark      { background-color: var(--ds-color-neutral-800); color: var(--ds-color-text-inverse); border: 1px solid var(--ds-color-neutral-700); }
```

### Bullet List

```css
.ds-bullet { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--ds-space-sm); }
.ds-bullet__item { display: flex; align-items: flex-start; gap: var(--ds-space-xs); font-size: var(--ds-text-md); line-height: var(--ds-leading-normal); }
.ds-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; }
.ds-bullet--check .ds-bullet__icon::before { content: "✓"; color: var(--ds-color-success); font-weight: var(--ds-weight-bold); }
.ds-bullet--number { counter-reset: bullet-counter; }
.ds-bullet--number .ds-bullet__item { counter-increment: bullet-counter; }
.ds-bullet--number .ds-bullet__icon::before {
  content: counter(bullet-counter);
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  background-color: var(--ds-color-brand-primary); color: var(--ds-color-white);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-bold);
}
.ds-bullet--dot .ds-bullet__icon::before { content: "•"; color: var(--ds-color-brand-purple); font-size: var(--ds-text-xl); line-height: 1; }
```

### Badge

```css
.ds-badge {
  display: inline-flex; align-items: center; gap: var(--ds-space-2xs);
  padding: var(--ds-space-2xs) var(--ds-space-xs);
  border-radius: var(--ds-radius-pill);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  line-height: 1; white-space: nowrap;
}
.ds-badge--primary { background-color: var(--ds-color-brand-primary);  color: var(--ds-color-white); }
.ds-badge--purple  { background-color: var(--ds-color-brand-purple-lt); color: var(--ds-color-brand-purple); }
.ds-badge--neutral { background-color: var(--ds-color-neutral-150);     color: var(--ds-color-text-secondary); }
.ds-badge--success { background-color: rgba(14, 130, 76, 0.12);         color: var(--ds-color-success); }
.ds-badge--error   { background-color: rgba(255, 48, 48, 0.12);         color: var(--ds-color-error); }
.ds-badge--dark    { background-color: var(--ds-color-neutral-700);     color: var(--ds-color-text-inverse); }
.ds-badge--sm { font-size: 10px; padding: 2px 6px; }
.ds-badge--lg { font-size: var(--ds-text-sm); padding: var(--ds-space-xs) var(--ds-space-md); }
```

---

## Layout Patterns

### 1. Section Header (.ds-section-header)

```css
.ds-section-header { margin-bottom: var(--ds-space-2xl); text-align: center; }
.ds-section-header__eyebrow {
  font-family: var(--ds-font-code); font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  text-transform: uppercase; letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-brand-purple); margin-bottom: var(--ds-space-sm); display: block;
}
.ds-section-header__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-5xl); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight);
  letter-spacing: var(--ds-tracking-tight); margin-bottom: var(--ds-space-md);
}
.ds-section-header__description {
  font-size: var(--ds-text-lg); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed); max-width: 100%; margin: 0 auto;
  word-break: keep-all; overflow-wrap: break-word;
}
@media (min-width: 1024px) { .ds-section-header__description { max-width: 720px; } }
@media (min-width: 1440px) { .ds-section-header__description { max-width: 860px; } }
.ds-section-header--underline {
  padding-bottom: var(--ds-space-lg);
  border-bottom: 1px solid var(--ds-color-border-default);
  margin-bottom: var(--ds-space-xl);
}
.ds-section-header--left { text-align: left; }
.ds-section-header--left .ds-section-header__description { margin: 0; }
@media (max-width: 767px) { .ds-section-header { text-align: left; } }
```

HTML:
```html
<div class="ds-section-header ds-section-header--underline">
  <span class="ds-section-header__eyebrow">Section Label</span>
  <h2 class="ds-section-header__title">
    Title with <span class="ds-text--brand">emphasis</span>
  </h2>
  <p class="ds-section-header__description">Description</p>
</div>
```

### 2. Icon Section Title (.ds-section-title-icon)

```css
.ds-section-title-icon { display: flex; align-items: center; gap: 12px; margin-bottom: var(--ds-space-xl); }
.ds-section-title-icon__icon { font-size: 28px; line-height: 1; flex-shrink: 0; }
.ds-section-title-icon__text { font-family: var(--ds-font-base); font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
```

### 3. Hero (.ds-hero)

```css
.ds-hero { padding: 0; display: grid; grid-template-columns: 1fr; gap: var(--ds-space-lg); align-items: center; }
.ds-hero--text-only { max-width: 860px; }
.ds-hero--screenshot { text-align: center; margin: 0 auto; }
.ds-hero--split { grid-template-columns: 1fr 1fr; gap: 64px; }
@media (max-width: 1023px) { .ds-hero--split { grid-template-columns: 1fr; } }
.ds-hero__title { font-family: var(--ds-font-base); font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); letter-spacing: -2px; margin-bottom: var(--ds-space-sm); }
.ds-hero__description { font-size: var(--ds-text-lg); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); max-width: 100%; margin-bottom: var(--ds-space-xl); word-break: keep-all; overflow-wrap: break-word; }
@media (min-width: 1024px) { .ds-hero__description { max-width: 720px; } }
@media (min-width: 1440px) { .ds-hero__description { max-width: 860px; } }
.ds-hero__actions { display: flex; flex-wrap: wrap; gap: 12px; }
.ds-hero__image { border-radius: var(--ds-radius-xl); overflow: hidden; }
.ds-hero__image img { width: 100%; display: block; }
@media (max-width: 767px) {
  .ds-hero { padding: 0; }
  .ds-hero__title { font-size: var(--ds-text-5xl); letter-spacing: -1px; }
  .ds-hero__actions { flex-direction: column; }
}

.ds-hero-screenshot-section { padding: 100px 0 0; overflow: visible; }
.ds-hero-screenshot-section .ds-hero--screenshot .ds-hero__description { margin-left: auto; margin-right: auto; }
.ds-hero__actions-below { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 20px; padding-bottom: var(--ds-space-3xl); }

.ds-hero__screenshot-frame {
  margin-top: var(--ds-space-2xl);
  border-radius: var(--ds-radius-xl) var(--ds-radius-xl) 0 0;
  padding: var(--ds-space-2xl) var(--ds-space-2xl) 0;
  background-size: cover; background-position: center;
  overflow: hidden;
}
.ds-hero__screenshot { overflow: hidden; background: var(--ds-color-surface-white); }
.ds-hero__screenshot img { width: 100%; display: block; }

@media (max-width: 767px) {
  .ds-hero-screenshot-section { padding: 100px 0 0; }
  .ds-hero__screenshot-frame { border-radius: var(--ds-radius-lg) var(--ds-radius-lg) 0 0; }
}
```

HTML (Hero Screenshot):
```html
<section class="ds-section ds-hero-screenshot-section">
  <div class="ds-container">
    <div class="ds-hero ds-hero--screenshot">
      <h1 class="ds-hero__title">Main Title</h1>
      <p class="ds-hero__description">Description text</p>
    </div>
    <div class="ds-hero__screenshot-frame ds-bg--paint-blue">
      <div class="ds-hero__screenshot">
        <img src="screenshot.png" alt="Product Screenshot">
      </div>
    </div>
    <div class="ds-hero__actions-below">
      <a href="/contact" class="ds-btn ds-btn--primary ds-btn--md">CTA Button</a>
    </div>
  </div>
</section>
```

### 4. Card Grid

```css
.ds-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
.ds-card-grid .ds-card { display: flex; flex-direction: column; }
.ds-card-grid--2col { }
@media (min-width: 768px) { .ds-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }
.ds-card-grid--3col { }
@media (min-width: 768px)  { .ds-card-grid--3col { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ds-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }
.ds-card-grid--4col { }
@media (min-width: 768px)  { .ds-card-grid--4col { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ds-card-grid--4col { grid-template-columns: repeat(4, 1fr); } }
```

### 5. Case Study Card (.ds-card--case-study)

이미지 파일 목록은 brand 파일 참조.

```css
.ds-card--case-study { display: grid; grid-template-columns: 240px 1fr; gap: 0; padding: 0; overflow: hidden; }
.ds-card--case-study .ds-card__left { background: transparent; border-right: 1px solid var(--ds-color-border-default); padding: var(--ds-space-lg) var(--ds-space-md); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--ds-space-sm); }
.ds-card--case-study .ds-card__left-image { width: 160px; height: 140px; object-fit: contain; border-radius: var(--ds-radius-md); }
.ds-card--case-study .ds-card__left-category { font-size: var(--ds-text-xs); color: var(--ds-color-text-secondary); letter-spacing: var(--ds-tracking-wide); text-transform: uppercase; }
.ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
.ds-card--case-study .ds-card__right { padding: var(--ds-space-lg); display: flex; flex-direction: column; gap: var(--ds-space-xs); }
.ds-card--case-study .ds-card__right .ds-bullet { gap: var(--ds-space-2xs); }
.ds-card--case-study .ds-card__right .ds-bullet__item { font-size: var(--ds-text-sm); }
.ds-card--case-study .ds-card__tags { display: flex; flex-wrap: wrap; gap: var(--ds-space-xs); margin-top: auto; justify-content: flex-end; }

.ds-card-grid--2col .ds-card--case-study { grid-template-columns: 100px 1fr; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left { padding: var(--ds-space-sm); }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-image { width: 72px; height: 60px; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-category { font-size: 10px; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-xs); }
.ds-card-grid--2col .ds-card--case-study .ds-card__right { padding: var(--ds-space-md); }

.ds-card-grid--3col .ds-card--case-study { grid-template-columns: 100px 1fr; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left { padding: var(--ds-space-sm); }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-image { width: 72px; height: 60px; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-category { font-size: 10px; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-xs); }

@media (max-width: 767px) { .ds-card--case-study { grid-template-columns: 1fr; } }
```

### 6. KPI Band (.ds-kpi-band)

```css
.ds-kpi-band {
  border-radius: var(--ds-radius-xl); padding: 48px 40px;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
  justify-items: center;
  background-size: cover; background-position: center;
  position: relative; overflow: hidden;
}
.ds-kpi-band:not([class*="ds-bg--"]) {
  background: var(--ds-gradient-brand); /* fallback — brand 파일에서 제공 */
}
.ds-kpi-band[class*="ds-bg--"]::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(0,0,0,0.35); z-index: 0;
}
.ds-kpi-band > * { position: relative; z-index: 1; }
.ds-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
.ds-kpi-band__number {
  font-family: var(--ds-font-base); font-size: var(--ds-text-6xl);
  font-weight: var(--ds-weight-bold); line-height: 1;
  color: var(--ds-color-white);
}
.ds-kpi-band__label { font-size: var(--ds-text-sm); color: rgba(255,255,255,0.85); line-height: var(--ds-leading-normal); }
@media (max-width: 1023px) { .ds-kpi-band { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px)  { .ds-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; } }
```

### 7. Partner Logo Grid (.ds-partner-grid)

파트너 목록은 brand 파일 참조.

```css
.ds-partner-grid { width: 100vw; margin-left: calc(-50vw + 50%); overflow: hidden; padding: var(--ds-space-xl) 0; }
.ds-partner-grid__track { display: flex; gap: var(--ds-space-3xl); align-items: center; width: max-content; animation: ds-marquee 30s linear infinite; }
.ds-partner-grid__track:hover { animation-play-state: paused; }
.ds-partner-item { display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-xs); flex-shrink: 0; }
.ds-partner-item__logo { width: 120px; height: 100px; object-fit: contain; }
.ds-partner-item__name { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); text-align: center; white-space: nowrap; }
@keyframes ds-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@media (max-width: 767px) {
  .ds-partner-item__logo { width: 100px; height: 75px; }
  .ds-partner-grid__track { gap: var(--ds-space-2xl); animation-duration: 20s; }
}
```

### 8. Cert Grid (.ds-cert-grid)

인증/수상 목록은 brand 파일 참조.

```css
.ds-cert-grid { width: 100vw; margin-left: calc(-50vw + 50%); overflow: hidden; padding: var(--ds-space-xl) 0; }
.ds-cert-grid__track { display: flex; gap: var(--ds-space-lg); align-items: stretch; width: max-content; animation: ds-marquee 40s linear infinite; }
.ds-cert-grid__track:hover { animation-play-state: paused; }

.ds-cert-card {
  background: var(--ds-color-surface-white); border: 1px solid var(--ds-color-border-default);
  border-radius: var(--ds-radius-lg); padding: var(--ds-space-lg) var(--ds-space-xl);
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: var(--ds-space-xs); flex-shrink: 0; width: 200px;
}
.ds-cert-card__group {
  font-family: var(--ds-font-code); font-size: 10px; font-weight: var(--ds-weight-medium);
  text-transform: uppercase; letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-brand-purple); margin-bottom: var(--ds-space-2xs);
}
.ds-cert-card__wreath { position: relative; width: 160px; height: 120px; display: flex; align-items: center; justify-content: center; }
.ds-cert-card__wreath-left,
.ds-cert-card__wreath-right { position: absolute; top: 0; height: 100%; width: 34%; object-fit: contain; }
.ds-cert-card__wreath-left { left: -6px; object-position: right; }
.ds-cert-card__wreath-right { right: -6px; object-position: left; }
.ds-cert-card__wreath-text {
  position: relative; z-index: 1; font-size: var(--ds-text-sm); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); text-align: center; line-height: var(--ds-leading-tight); max-width: 90px;
}
.ds-cert-card__org { font-size: var(--ds-text-xs); color: var(--ds-color-text-secondary); }
.ds-cert-card__year { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); font-family: var(--ds-font-code); }
.ds-cert-card__logo { width: 60px; height: 60px; object-fit: contain; margin-top: auto; margin-bottom: -10px; }

@media (max-width: 767px) {
  .ds-cert-card { width: 170px; padding: var(--ds-space-md) var(--ds-space-md); }
  .ds-cert-card__wreath { width: 130px; height: 96px; }
  .ds-cert-card__wreath-text { font-size: var(--ds-text-xs); max-width: 72px; }
  .ds-cert-card__logo { width: 48px; height: 48px; }
  .ds-cert-grid__track { gap: var(--ds-space-md); animation-duration: 25s; }
}
```

### 9. Feature Grid

```css
.ds-feature-grid { background: var(--ds-color-surface-white); border: 1px solid var(--ds-color-border-default); border-radius: var(--ds-radius-xl); padding: 40px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px 48px; }
.ds-feature-item { display: flex; flex-direction: column; gap: 8px; }
.ds-feature-item__icon { font-size: 28px; margin-bottom: 4px; }
.ds-feature-item__title { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); }
.ds-feature-item__description { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); word-break: keep-all; overflow-wrap: break-word; }
@media (max-width: 767px) { .ds-feature-grid { grid-template-columns: 1fr; padding: 24px; } }
```

### 10. CTA Band (.ds-cta-band)

```css
.ds-cta-band {
  width: 100%; position: relative; overflow: hidden;
  padding: 80px var(--ds-container-padding-mobile);
  text-align: center;
  background-size: cover; background-position: center;
}
.ds-cta-band:not([class*="ds-bg--"]) {
  background: var(--ds-gradient-brand); /* fallback — brand 파일에서 제공 */
}
.ds-cta-band::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(0,0,0,0.15); z-index: 0;
}
.ds-cta-band > * { position: relative; z-index: 1; }
.ds-cta-band__inner { max-width: 100%; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-lg); }
@media (min-width: 1024px) { .ds-cta-band__inner { max-width: 720px; } }
@media (min-width: 1440px) { .ds-cta-band__inner { max-width: 860px; } }
.ds-cta-band__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-5xl);
  font-weight: var(--ds-weight-bold); color: #ffffff;
  line-height: var(--ds-leading-tight); letter-spacing: var(--ds-tracking-tight); margin: 0;
}
.ds-cta-band__description {
  font-size: var(--ds-text-lg); color: rgba(255,255,255,0.85);
  line-height: var(--ds-leading-relaxed); margin: 0;
  word-break: keep-all; overflow-wrap: break-word;
}
.ds-cta-band__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.ds-cta-band__actions .ds-btn { background: rgba(255,255,255,0.92); color: var(--ds-color-text-primary); border: 1px solid rgba(255,255,255,0.6); backdrop-filter: blur(8px); }
.ds-cta-band__actions .ds-btn:hover { background: #fff; }
.ds-cta-band__footnote { font-size: var(--ds-text-xs); color: rgba(255,255,255,0.6); font-family: var(--ds-font-code); letter-spacing: var(--ds-tracking-wide); }
@media (min-width: 768px)  { .ds-cta-band { padding: 100px var(--ds-container-padding-tablet); } }
@media (min-width: 1440px) { .ds-cta-band { padding: 120px var(--ds-container-padding-desktop); max-width: 1440px; margin: 0 auto; } }
@media (max-width: 767px) {
  .ds-cta-band__title { font-size: var(--ds-text-4xl); }
  .ds-cta-band__actions { flex-direction: column; align-items: center; }
  .ds-cta-band__actions .ds-btn { width: 100%; max-width: 320px; }
}
@media (min-width: 1440px) {
  .ds-cta-band__title { font-size: var(--ds-text-6xl); }
}
```

### 11. Product Split

로고 파일 목록은 brand 파일 참조.

```css
.ds-product-split { display: grid; grid-template-columns: 4fr 6fr; gap: 64px; align-items: stretch; }
.ds-product-split--reverse { direction: rtl; }
.ds-product-split--reverse > * { direction: ltr; }
.ds-product-split__visual { border-radius: var(--ds-radius-xl); overflow: hidden; background-size: cover; background-position: center; padding: var(--ds-space-lg) var(--ds-space-lg) 0; display: flex; flex-direction: column; justify-content: flex-end; gap: var(--ds-space-sm); }
.ds-product-split__visual-logo { height: 24px; object-fit: contain; align-self: center; flex-shrink: 0; }
.ds-product-split__visual-screenshot { border-radius: var(--ds-radius-md) var(--ds-radius-md) 0 0; overflow: hidden; box-shadow: 0 -4px 24px rgba(0,0,0,0.08); flex: 1; min-height: 0; margin-bottom: -1px; }
.ds-product-split__visual-screenshot img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.ds-product-split__content { display: flex; flex-direction: column; gap: 16px; }
.ds-product-split__title { font-family: var(--ds-font-base); font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
.ds-product-split__lead  { font-size: var(--ds-text-md); color: var(--ds-color-text-primary); line-height: var(--ds-leading-relaxed); font-weight: var(--ds-weight-medium); word-break: keep-all; overflow-wrap: break-word; }
.ds-product-split__body  { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); word-break: keep-all; overflow-wrap: break-word; }
.ds-product-split__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: var(--ds-space-sm); }
@media (max-width: 1023px) { .ds-product-split { grid-template-columns: 1fr; gap: 32px; } .ds-product-split--reverse { direction: ltr; } }
```

### 12. Table

```css
.ds-table-wrap { overflow-x: auto; border-radius: var(--ds-radius-lg); border: 1px solid var(--ds-color-border-default); }
.ds-table { width: 100%; border-collapse: collapse; font-size: var(--ds-text-sm); }
.ds-table thead th { font-family: var(--ds-font-code); font-size: 11px; text-transform: uppercase; letter-spacing: var(--ds-tracking-wide); color: var(--ds-color-text-primary); font-weight: var(--ds-weight-semibold); padding: 12px 16px; border-bottom: 2px solid var(--ds-color-border-default); text-align: left; background: var(--ds-color-surface-light); }
.ds-table tbody td { padding: 14px 16px; border-bottom: 1px solid var(--ds-color-border-default); color: var(--ds-color-text-primary); vertical-align: top; line-height: var(--ds-leading-normal); }
.ds-table tbody tr:last-child td { border-bottom: none; }
.ds-table tbody td:first-child { font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); }
.ds-table tbody tr:hover td { background: var(--ds-color-surface-light); }
.ds-table--2col colgroup col { width: 50%; }
.ds-table--3col colgroup col { width: 33.33%; }
.ds-table--4col colgroup col { width: 25%; }
```

### 13. Accordion List Card (.ds-ac-card)

```css
.ds-ac-list { display: flex; flex-direction: column; gap: 2px; }
.ds-ac-card { border: var(--ds-border-default); border-radius: var(--ds-radius-sm); background-color: var(--ds-color-surface-white); overflow: hidden; transition: background-color 0.2s; }
.ds-ac-card:hover { background-color: var(--ds-color-neutral-025); }

.ds-ac-card__header { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: var(--ds-space-md); padding: var(--ds-space-lg); cursor: pointer; user-select: none; }
.ds-ac-card__title-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.ds-ac-card__industry { font-family: var(--ds-font-code); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ds-color-text-tertiary); display: flex; align-items: center; gap: var(--ds-space-2xs); }
.ds-ac-card__industry-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.ds-ac-card__title { font-family: var(--ds-font-base); font-size: var(--ds-text-lg); font-weight: var(--ds-weight-medium); line-height: var(--ds-leading-tight); color: var(--ds-color-text-primary); word-break: keep-all; overflow-wrap: break-word; }
.ds-ac-card__meta { display: flex; align-items: center; gap: var(--ds-space-xs); flex-wrap: wrap; flex-shrink: 0; }

.ds-ac-card__toggle { width: 28px; height: 28px; border-radius: 6px; border: 0.5px solid var(--ds-color-border-default); background: var(--ds-color-surface-light); display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
.ds-ac-card__toggle:hover { border-color: var(--ds-color-border-strong); background: var(--ds-color-surface-mid); }
.ds-ac-card__toggle-icon { width: 12px; height: 12px; position: relative; flex-shrink: 0; }
.ds-ac-card__toggle-icon::before, .ds-ac-card__toggle-icon::after { content: ''; position: absolute; background: var(--ds-color-text-muted); border-radius: 1px; transition: opacity 0.2s; }
.ds-ac-card__toggle-icon::before { width: 10px; height: 1.5px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.ds-ac-card__toggle-icon::after  { width: 1.5px; height: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 1; }
.ds-ac-card.ds-ac--open .ds-ac-card__toggle-icon::after { opacity: 0; }
.ds-ac-card.ds-ac--open .ds-ac-card__toggle-icon::before { background: var(--ds-color-text-secondary); }

.ds-ac-card__body { display: none; padding: var(--ds-space-lg); border-top: var(--ds-border-default); background: var(--ds-color-surface-light); }
.ds-ac-card.ds-ac--open .ds-ac-card__body { display: block; }

.ds-ac-metrics { display: flex; gap: var(--ds-space-xs); flex-wrap: wrap; margin-bottom: var(--ds-space-lg); }
.ds-ac-metric { display: flex; flex-direction: column; padding: var(--ds-space-sm) var(--ds-space-md); border: var(--ds-border-default); border-radius: var(--ds-radius-sm); background-color: var(--ds-color-surface-white); min-width: 100px; flex: 1; }
.ds-ac-metric__val { font-family: var(--ds-font-base); font-size: var(--ds-text-xl); font-weight: var(--ds-weight-bold); line-height: 1; color: var(--ds-color-text-primary); }
.ds-ac-metric__val--success { color: var(--ds-color-success); }
.ds-ac-metric__val--warning { color: #f59e0b; }
.ds-ac-metric__label { font-family: var(--ds-font-code); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ds-color-text-tertiary); margin-top: var(--ds-space-2xs); }

@media (max-width: 767px) { .ds-ac-card__header { grid-template-columns: 1fr auto; align-items: start; } .ds-ac-card__meta { display: none; } }
@media (min-width: 1024px) { .ds-ac-card__header { grid-template-columns: 1fr auto auto; } }
```

JavaScript:
```javascript
function toggleAcCard(header) {
  const card = header.closest('.ds-ac-card');
  card.classList.toggle('ds-ac--open');
}
```

### 14. Step Tabs (.ds-step-tabs)

```css
.ds-step-tabs__nav {
  display: flex; justify-content: center; gap: var(--ds-space-sm);
  flex-wrap: wrap; margin-bottom: var(--ds-space-3xl);
}
.ds-step-tabs__tab {
  display: inline-flex; align-items: center; gap: var(--ds-space-xs);
  padding: var(--ds-space-xs) var(--ds-space-lg);
  border-radius: var(--ds-radius-pill); border: var(--ds-border-default);
  background-color: var(--ds-color-surface-white);
  font-family: var(--ds-font-base); font-size: var(--ds-text-sm); font-weight: var(--ds-weight-medium);
  color: var(--ds-color-text-secondary); cursor: pointer; transition: all 0.2s; white-space: nowrap;
}
.ds-step-tabs__tab-number {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background-color: var(--ds-color-neutral-100); border: 1px solid var(--ds-color-border-default);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-secondary); flex-shrink: 0; transition: all 0.2s;
}
.ds-step-tabs__tab:hover {
  background-color: var(--ds-color-neutral-900); border-color: var(--ds-color-neutral-900);
  color: var(--ds-color-white);
}
.ds-step-tabs__tab:hover .ds-step-tabs__tab-number {
  background-color: var(--ds-color-white); border-color: var(--ds-color-white);
  color: var(--ds-color-neutral-900);
}
.ds-step-tabs__tab--active {
  background-color: var(--ds-color-neutral-900); border-color: var(--ds-color-neutral-900);
  color: var(--ds-color-white); font-weight: var(--ds-weight-semibold);
}
.ds-step-tabs__tab--active .ds-step-tabs__tab-number {
  background-color: var(--ds-color-white); border-color: var(--ds-color-white);
  color: var(--ds-color-neutral-900);
}

.ds-step-tabs__panel { display: none; }
.ds-step-tabs__panel--active {
  display: grid; grid-template-columns: 1fr; gap: var(--ds-space-2xl); align-items: center;
}
@media (min-width: 1024px) { .ds-step-tabs__panel--active { grid-template-columns: 5fr 7fr; gap: var(--ds-space-3xl); } }
@media (min-width: 1440px) { .ds-step-tabs__panel--active { gap: var(--ds-space-4xl); } }

.ds-step-tabs__content { display: flex; flex-direction: column; gap: var(--ds-space-lg); }
.ds-step-tabs__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight);
}
.ds-step-tabs__description {
  font-size: var(--ds-text-md); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed);
}
.ds-step-tabs__actions { display: flex; flex-wrap: wrap; gap: var(--ds-space-sm); margin-top: var(--ds-space-xs); }

.ds-step-tabs__screenshot {
  border-radius: var(--ds-radius-lg); overflow: hidden;
  border: var(--ds-border-default); box-shadow: var(--ds-shadow-card);
  background-color: var(--ds-color-surface-light);
  max-height: 420px;
}
.ds-step-tabs__screenshot img { width: 100%; display: block; object-fit: cover; object-position: top left; }
@media (max-width: 767px) { .ds-step-tabs__screenshot { max-height: 280px; } }

@media (min-width: 768px) { .ds-step-tabs__title { font-size: var(--ds-text-4xl); } }
@media (max-width: 767px) {
  .ds-step-tabs__nav {
    justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto;
    -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: var(--ds-space-xs);
  }
  .ds-step-tabs__nav::-webkit-scrollbar { display: none; }
  .ds-step-tabs__actions { flex-direction: column; }
}
```

JavaScript (필수):
```javascript
document.querySelectorAll('[data-step-tabs]').forEach(function(root) {
  root.querySelectorAll('.ds-step-tabs__tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var idx = this.getAttribute('data-tab');
      root.querySelectorAll('.ds-step-tabs__tab').forEach(function(t) {
        t.classList.remove('ds-step-tabs__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      root.querySelectorAll('.ds-step-tabs__panel').forEach(function(p) {
        p.classList.remove('ds-step-tabs__panel--active');
      });
      this.classList.add('ds-step-tabs__tab--active');
      this.setAttribute('aria-selected', 'true');
      root.querySelector('[data-panel="' + idx + '"]').classList.add('ds-step-tabs__panel--active');
    });
  });
});
```

### 15. Bullet List (.ds-bullet)

```css
.ds-bullet { list-style: none; display: flex; flex-direction: column; gap: var(--ds-space-sm); }
.ds-bullet__item { display: flex; align-items: flex-start; gap: var(--ds-space-xs); font-size: var(--ds-text-md); line-height: var(--ds-leading-normal); color: var(--ds-color-text-primary); }
.ds-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
.ds-bullet--dot .ds-bullet__icon::before { content: "•"; color: var(--ds-color-brand-purple); font-size: var(--ds-text-xl); line-height: 1; }
.ds-bullet--check .ds-bullet__icon::before { content: "✓"; color: var(--ds-color-success); font-weight: var(--ds-weight-bold); font-size: var(--ds-text-md); line-height: 1; }
.ds-bullet--number { counter-reset: bullet; }
.ds-bullet--number .ds-bullet__icon::before { counter-increment: bullet; content: counter(bullet); font-size: var(--ds-text-sm); font-weight: var(--ds-weight-bold); color: var(--ds-color-brand-primary); }
```

### 16. Code Block (.ds-code-block)

```css
.ds-code-block {
  background-color: var(--ds-color-neutral-900);
  border: none; border-radius: var(--ds-radius-sm);
  padding: var(--ds-space-md);
  font-family: var(--ds-font-code); font-size: var(--ds-text-sm);
  line-height: 1.9; color: var(--ds-color-neutral-300);
  overflow-x: auto;
  margin-top: var(--ds-space-lg);
  margin-bottom: var(--ds-space-md);
}

.ds-code--remove { color: var(--ds-color-error-light); }
.ds-code--add    { color: var(--ds-color-success-light); }
.ds-code--warn   { color: var(--ds-color-warn-light); }
.ds-code--muted  { color: var(--ds-color-neutral-500); }
```

### 17. Gradient Card (.ds-card--gradient)

```css
.ds-card--gradient {
  padding: 2px; border-radius: var(--ds-radius-md);
  box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
}
.ds-card--gradient-purple { background: var(--ds-gradient-card-purple); }
.ds-card--gradient-blue   { background: var(--ds-gradient-card-blue); }
.ds-card--gradient-green  { background: var(--ds-gradient-card-green); }
.ds-card--gradient-silver { background: var(--ds-gradient-card-silver); }

.ds-card--gradient__inner {
  background: var(--ds-color-surface-white);
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: var(--ds-space-xl);
}
.ds-card--gradient-purple .ds-card--gradient__inner { background: var(--ds-gradient-inner-purple); }
.ds-card--gradient-blue .ds-card--gradient__inner   { background: var(--ds-gradient-inner-blue); }
.ds-card--gradient-green .ds-card--gradient__inner   { background: var(--ds-gradient-inner-green); }

.ds-card--gradient-brand {
  background: var(--ds-gradient-brand);
  box-shadow: rgba(94, 167, 255, 0.25) 0px 1px 40px 0px, rgba(215, 94, 255, 0.15) 0px 2px 24px 0px;
}
```

---

## [W] Diagram (.ds-diagram)

### Diagram 토큰

```css
:root {
  --ds-diag-surface:       #f8f8f8;
  --ds-diag-surface-inner: #f2f2f2;
  --ds-diag-border:        #d0d0d0;
  --ds-diag-border-light:  #e0e0e0;
  --ds-diag-text:          #2a2a2a;
  --ds-diag-text-sub:      #666666;
  --ds-diag-arrow-dark:    #444444;
  --ds-diag-arrow-accent:  #4a9de0;

  --ds-diag-os-content: linear-gradient(135deg, #dff0ea 0%, #eef3ff 40%, #f3eeff 70%, #fdeef8 100%);
  /* Architecture header gradient — 값은 brand 파일에서 제공 */
  --ds-diag-arch-header: /* brand file */;
}
```

### CSS

```css
.ds-diagram__window {
  background: var(--ds-diag-surface); border-radius: var(--ds-radius-md);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
  overflow: hidden; font-family: var(--ds-font-base);
}
.ds-diagram__titlebar {
  background: linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%);
  height: 36px; display: flex; align-items: center; padding: 0 14px; gap: 8px;
  border-bottom: 1px solid #c0c0c0;
}
.ds-diagram__titlebar-dot { width: 12px; height: 12px; border-radius: 50%; }
.ds-diagram__titlebar-dot--close { background: #ff5f57; }
.ds-diagram__titlebar-dot--min   { background: #ffbd2e; }
.ds-diagram__titlebar-dot--max   { background: #28ca41; }
.ds-diagram__content { background: var(--ds-diag-os-content); padding: var(--ds-space-xl); }

.ds-diagram__card {
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 40%, #e8e8e8 70%, #f5f5f5 100%);
  border: 1px solid var(--ds-diag-border); border-radius: var(--ds-radius-md); overflow: hidden;
}
.ds-diagram__card-title {
  text-align: center; padding: var(--ds-space-md) var(--ds-space-lg);
  font-size: var(--ds-text-sm); font-weight: 500; color: var(--ds-diag-text);
  letter-spacing: 0.04em; border-bottom: 1px solid var(--ds-diag-border-light);
  font-family: var(--ds-font-code);
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
}

.ds-diagram__headers { display: grid; border-bottom: 1px dashed var(--ds-diag-border); }
.ds-diagram__header {
  padding: 11px 12px; font-size: var(--ds-text-sm); color: var(--ds-diag-text-sub);
  text-align: center; font-weight: 400; border-right: 1px dashed var(--ds-diag-border); background: #fafafa;
}
.ds-diagram__header:last-child { border-right: none; }

.ds-diagram__body { display: grid; position: relative; }
.ds-diagram__col {
  padding: var(--ds-space-lg) var(--ds-space-md);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.ds-diagram__col:not(:last-child) { border-right: 1px dashed var(--ds-diag-border); }

.ds-diagram__transform {
  border: 1.5px dashed #c0c0c0; border-radius: var(--ds-radius-md);
  padding: var(--ds-space-md) var(--ds-space-sm); background: var(--ds-diag-surface);
  width: 100%; display: flex; flex-direction: column; align-items: center;
}
.ds-diagram__item-box {
  background: var(--ds-diag-surface-inner); border: 1px solid var(--ds-diag-border-light);
  border-radius: var(--ds-radius-sm); padding: 10px 14px;
  font-size: var(--ds-text-sm); color: var(--ds-diag-text); text-align: center; width: 100%;
}
.ds-diagram__arrow-down {
  width: 1.5px; height: 14px; background: var(--ds-diag-arrow-dark);
  margin: 6px auto; position: relative;
}
.ds-diagram__arrow-down::after {
  content: ''; position: absolute; left: 50%; bottom: -6px; transform: translateX(-50%);
  border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-top: 6px solid var(--ds-diag-arrow-dark);
}
.ds-diagram__dashed-connector { display: flex; flex-direction: column; align-items: center; gap: 3px; margin: 5px 0; }
.ds-diagram__dashed-seg { width: 1.5px; height: 4px; background: #bbb; border-radius: 1px; }

.ds-diagram__act-card {
  background: var(--ds-diag-surface); border: 1px solid var(--ds-diag-border);
  border-radius: var(--ds-radius-md); padding: 15px 10px 13px;
  width: 100%; display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-xs);
}
.ds-diagram__act-card + .ds-diagram__act-card { margin-top: 10px; }
.ds-diagram__act-icon {
  width: 52px; height: 52px; background: var(--ds-diag-surface-inner);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
}

.ds-diagram__exchange-wrap {
  padding: 2px; border-radius: var(--ds-radius-md);
  background: var(--ds-gradient-card-purple);
  box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px; width: 100%;
}
.ds-diagram__exchange-wrap--green { background: var(--ds-gradient-card-green); }
.ds-diagram__exchange-wrap--blue { background: var(--ds-gradient-card-blue); }
.ds-diagram__exchange-wrap--brand {
  background: var(--ds-gradient-brand);
  box-shadow: rgba(94, 167, 255, 0.25) 0px 1px 40px 0px, rgba(215, 94, 255, 0.15) 0px 2px 24px 0px;
}
.ds-diagram__exchange-inner {
  background: var(--ds-gradient-inner-purple);
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: 14px 11px; display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-xs);
}
.ds-diagram__safe-badge {
  background: #ffffff; border: 1.5px solid #5badee; border-radius: var(--ds-radius-pill);
  padding: 3px 11px; font-size: 10.5px; font-weight: 700; color: #2b8dd6; letter-spacing: 0.12em;
}

.ds-diagram__default-wrap {
  padding: 2px; border-radius: var(--ds-radius-md);
  background: var(--ds-gradient-card-silver);
  box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px; width: 100%;
}
.ds-diagram__default-inner {
  background: var(--ds-color-surface-white);
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: 14px 12px; text-align: center; font-size: var(--ds-text-sm); color: var(--ds-diag-text);
}

.ds-diagram__arrow-layer {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%; pointer-events: none; overflow: visible;
}
```

---

## Background Image Assets

경로: `reference/images/`

```css
:root {
  --ds-bg-img-green-wave:    url('../reference/images/bg-green-wave.png');
  --ds-bg-img-lavender:      url('../reference/images/bg-lavender.png');
  --ds-bg-img-pink:          url('../reference/images/bg-pink.png');
  --ds-bg-img-peach:         url('../reference/images/bg-peach.png');
  --ds-bg-img-lime:          url('../reference/images/bg-lime.png');
  --ds-bg-img-wave-teal:     url('../reference/images/bg-wave-teal-blue.png');

  --ds-bg-img-paint-blue:    url('../reference/images/bg-paint-blue-iridescent.png');
  --ds-bg-img-paint-lavender:url('../reference/images/bg-paint-lavender-gold.png');
  --ds-bg-img-paint-peach:   url('../reference/images/bg-paint-peach-coral.png');
  --ds-bg-img-paint-sand:    url('../reference/images/bg-paint-sand-sky.png');
  --ds-bg-img-paint-teal:    url('../reference/images/bg-paint-white-teal.png');

  --ds-bg-img-grad-blue:     url('../reference/images/bg-gradient-blue-violet.png');
  --ds-bg-img-grad-cream:    url('../reference/images/bg-gradient-cream-jade.png');
  --ds-bg-img-grad-deep:     url('../reference/images/bg-gradient-deep-teal.png');
  --ds-bg-img-grad-navy:     url('../reference/images/bg-gradient-navy-teal.png');
  --ds-bg-img-grad-sage:     url('../reference/images/bg-gradient-sage-rose.png');
  --ds-bg-img-grad-sky:      url('../reference/images/bg-gradient-sky-blush.png');
  --ds-bg-img-grad-violet:   url('../reference/images/bg-gradient-violet-teal.png');

  --ds-bg-img-smoke-pink:    url('../reference/images/bg-smoke-pink-teal.png');
  --ds-bg-img-glow-yellow:   url('../reference/images/bg-glow-yellow-teal.png');

  --ds-bg-img-wc-ecosystem:  url('../reference/images/bg-wc-ecosystem.webp');
  --ds-bg-img-wc-blue-right: url('../reference/images/bg-wc-blue-right.webp');
  --ds-bg-img-wc-blue-left:  url('../reference/images/bg-wc-blue-left.webp');
  --ds-bg-img-wc-soft:       url('../reference/images/bg-wc-soft.webp');
}

.ds-section--bg-img { position: relative; background-size: cover; background-position: center; overflow: hidden; }
.ds-section--bg-img::before { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.45); z-index: 0; }
.ds-section--bg-img > * { position: relative; z-index: 1; }
.ds-section--bg-img-dark::before { background: rgba(0,0,0,0.35); }

.ds-bg--green-wave    { background-image: var(--ds-bg-img-green-wave); }
.ds-bg--lavender      { background-image: var(--ds-bg-img-lavender); }
.ds-bg--pink          { background-image: var(--ds-bg-img-pink); }
.ds-bg--peach         { background-image: var(--ds-bg-img-peach); }
.ds-bg--lime          { background-image: var(--ds-bg-img-lime); }
.ds-bg--wave-teal     { background-image: var(--ds-bg-img-wave-teal); }
.ds-bg--paint-blue    { background-image: var(--ds-bg-img-paint-blue); }
.ds-bg--paint-lavender{ background-image: var(--ds-bg-img-paint-lavender); }
.ds-bg--paint-peach   { background-image: var(--ds-bg-img-paint-peach); }
.ds-bg--paint-sand    { background-image: var(--ds-bg-img-paint-sand); }
.ds-bg--paint-teal    { background-image: var(--ds-bg-img-paint-teal); }
.ds-bg--grad-blue     { background-image: var(--ds-bg-img-grad-blue); }
.ds-bg--grad-cream    { background-image: var(--ds-bg-img-grad-cream); }
.ds-bg--grad-deep     { background-image: var(--ds-bg-img-grad-deep); }
.ds-bg--grad-navy     { background-image: var(--ds-bg-img-grad-navy); }
.ds-bg--grad-sage     { background-image: var(--ds-bg-img-grad-sage); }
.ds-bg--grad-sky      { background-image: var(--ds-bg-img-grad-sky); }
.ds-bg--grad-violet   { background-image: var(--ds-bg-img-grad-violet); }
.ds-bg--smoke-pink    { background-image: var(--ds-bg-img-smoke-pink); }
.ds-bg--glow-yellow   { background-image: var(--ds-bg-img-glow-yellow); }
.ds-bg--wc-ecosystem  { background-image: var(--ds-bg-img-wc-ecosystem); }
.ds-bg--wc-blue-right { background-image: var(--ds-bg-img-wc-blue-right); }
.ds-bg--wc-blue-left  { background-image: var(--ds-bg-img-wc-blue-left); }
.ds-bg--wc-soft       { background-image: var(--ds-bg-img-wc-soft); }
```

---

## 전역 CSS 규칙
1. 모든 클래스는 `.ds-` 접두사 필수
2. CSS 변수는 `:root`에만 선언
3. `!important` 절대 사용 금지
4. 인라인 `style` 사용 금지 (CSS 변수 전달 목적 제외)
5. 색상/수치 하드코딩 금지 → CSS 변수 사용
6. 클래스 네이밍: BEM 방식 (.ds-card__title--highlighted)
7. eyebrow 전면 금지: B타입 변환 시 모든 섹션에서 eyebrow 삭제
8. ds-card 기본 배경은 반드시 surface-white
9. KPI/지표 수치 색상은 text-primary
10. ds-banner 좌측 굵은 border 금지
11. CTA 밴드는 ds-container 밖에 전폭으로 배치
12. 줄바꿈 전역 규칙: `body { word-break: keep-all; overflow-wrap: break-word; overflow-x: hidden; }`
13. 긴 문장 분리: 짧은 독립 문장이 마침표로 2개 이상 나열되면 `ds-bullet ds-bullet--dot` 불릿 리스트로 분리
14. 폰트 색상 최소 명도: neutral-150/050/025 텍스트 사용 금지, `var(--ds-color-text-muted)` 텍스트 사용 금지
15. 배너 텍스트 가운데 정렬
16. 배너 내 링크 줄바꿈
17. 배경 이미지 중복 금지
18. 페이지 최상단 여백 100px 고정
19. 배경 이미지 위 텍스트는 black 또는 white만
20. 미색 배경(ds-section--light) 전면 금지
21. CSS 변수는 design-system에 정의된 것만 사용
22. Case Study 열 타입 혼합 금지
23. FAQ는 반드시 아코디언 형태
24. 아티클형 페이지 본문 폭 860px 통일
25. 섹션 헤더 기본 center 정렬
26. 외부 서비스 링크는 버튼형
27. 단계별 프로세스는 Step Tabs 사용
28. 인증/수상 섹션은 Cert Grid 사용
29. 도입 사례는 Case Study 카드 필수
30. CTA band 타이포 표준
31. letter-spacing 하드코딩 금지
32. 이미지 경로는 GitHub Pages 전체 URL 사용
33. 이미지 포맷은 WebP 우선
34. 주황/오렌지 계열 색상 전면 금지
35. background shorthand 금지
36. screenshot-frame background-color fallback 필수
37. 모바일 배경 이미지 처리
38. 배경 이미지 적용 위치 명확화
