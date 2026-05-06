---
name: design-system-capsule
description: >
  LLM Capsule 브랜드 전용 Design Tokens v6.1.
  tokens.json에서 자동 생성되는 부분 포함.
  design-system-core.md와 함께 로드해야 완전한 DS가 된다.
---

# LLM Capsule Brand Tokens v6.1

> **Single Source of Truth:** `llm-capsule/reference/tokens.json`
> 토큰 변경 시 `python3 scripts/build-tokens.py` 실행 → 모든 출력 자동 갱신.

---

## Token Architecture

```
tokens.json (편집 대상)
    ↓ python3 scripts/build-tokens.py
    ├── tokens.css           → B타입 HTML :root 변수
    ├── viewer-tokens.css    → Viewer 참조
    ├── TokenProvider.tsx     → Framer Layout에 1개 배치 → 전 페이지 :root 주입
    └── tsx-palette-block.txt → TSX fallback 참조용
```

**TSX에서는 CSS 변수를 직접 사용:**
```css
.s1-title { color: var(--c-ink, #0f1130); }
.s1-brand { color: var(--c-primary, #5b4fe9); }
```

**const C = {} 하드코딩 방식은 폐기.** TokenProvider가 :root 변수를 주입하므로 각 TSX에서 색상을 재정의할 필요 없음.

---

## Brand Color System (v6.1)

### 3-Color Hierarchy

| Role | CSS Variable | Value | 용도 |
|------|-------------|-------|------|
| **Primary** | `--c-primary` | `#5b4fe9` | Purple — CTA, 강조, 배지, 링크 |
| Primary Dark | `--c-primary-dark` | `#3b2fbf` | Hover 상태 |
| Primary Soft | `--c-primary-soft` | `#eeebfe` | 배지/배너 배경 tint |
| **Teal** | `--c-teal` | `#0ea5a4` | 차별화 포인트, 성공 상태 |
| Teal Dark | `--c-teal-dark` | `#0b7f7e` | Hover |
| Teal Soft | `--c-teal-soft` | `#e6f7f6` | Tint |
| **Coral** | `--c-coral` | `#ef5350` | 문제/경고, 삭제 상태 |
| Coral Dark | `--c-coral-dark` | `#c73e3a` | Hover |
| Coral Soft | `--c-coral-soft` | `#fce9e8` | Tint |
| Amber | `--c-amber` | `#f59e0b` | 주의/caution |

### Neutrals

| CSS Variable | Value | 용도 |
|-------------|-------|------|
| `--c-bg` | `#ffffff` | Background white |
| `--c-bg-soft` | `#f7f8fb` | Surface light |
| `--c-bg-dark` | `#0f1130` | Dark section (navy) |
| `--c-bg-dark-2` | `#1b1d4a` | Dark card |
| `--c-ink` | `#0f1130` | Text primary (navy tint) |
| `--c-ink-soft` | `#3a3d5e` | Text secondary |
| `--c-muted` | `#6b7280` | Text tertiary |
| `--c-rule` | `#e5e7eb` | Border / divider |

---

## Typography (v6.1)

| CSS Variable | Value | 용도 |
|-------------|-------|------|
| `--f-display` | `'Inter', -apple-system, system-ui, sans-serif` | Base font (이전: DM Sans) |
| `--f-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Code font (이전: Fragment Mono) |

**Brand 폰트(Oxanium) 폐기** — 제품명도 Inter 사용.

### Typography Scale

| Element | Size | Weight | Leading |
|---------|------|--------|---------|
| h1 | `clamp(36px, 5vw, 64px)` | 700 | 1.15 |
| h2 | `clamp(28px, 3.5vw, 44px)` | 700 | 1.15 |
| h3 | `clamp(18px, 1.6vw, 22px)` | 700 | 1.15 |
| h4 | `16px` | 700 | 1.15 |
| body | inherit | 400 | 1.55 |
| letter-spacing | `-0.02em` (headings) | | |

---

## Spacing & Layout (v6.1)

| CSS Variable | Value | 용도 |
|-------------|-------|------|
| `--s-page` | `clamp(20px, 4vw, 80px)` | Container padding |
| `--s-section` | `clamp(64px, 8vw, 128px)` | Section vertical padding |
| `--r-sm` | `6px` | Small radius |
| `--r-md` | `10px` | Medium radius (cards, buttons) |
| `--r-lg` | `16px` | Large radius (sections) |
| `--container-max` | `1280px` | Container max width (이전: 1440px) |

---

## Button Styles (v6.2)

```css
/* Primary: solid ink → hover primary. gradient 폐기. */
.btn--primary { background: var(--c-ink); color: #fff; border-radius: var(--r-md); }
.btn--primary:hover { background: var(--c-primary); }

/* Ghost: white + border */
.btn--ghost { background: var(--c-bg); color: var(--c-ink); border: 1px solid var(--c-rule); }
.btn--ghost:hover { border-color: var(--c-ink); }

/* Invert: dark section용 */
.btn--invert { background: #fff; color: var(--c-ink); }
.btn--invert-ghost { background: transparent; border: 1px solid #9d95f5; color: #fff; }
```

---

## Eyebrow (v6.2 — LLM Capsule only)

```css
.eyebrow {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--c-primary);
  margin-bottom: 16px; display: inline-block;
}
```

> cubig 브랜드에서는 여전히 eyebrow 금지.

---

## Card Style Overrides (v6.2)

```css
/* LLM Capsule 카드: flat 스타일, shadow 제거, radius 축소 */
.ds-card {
  border-radius: var(--r-md, 10px);  /* 이전: 18px */
  box-shadow: none;                   /* 이전: 0px 24px 40px rgba(0,0,0,0.04) */
}

/* 컬러 라인 꾸밈 전면 금지 — AI 클리셰 */
/* border-top colored, border-left colored 모두 금지 */
/* 카드 색상 분기는 badge color, icon color, number color로 은은하게 처리 */

/* Capability 카드 색상은 icon/badge로만 표현 */
.cap-icon--primary { background: var(--c-primary); }
.cap-icon--teal    { background: var(--c-teal); }
.cap-icon--amber   { background: var(--c-amber); }
.cap-icon--coral   { background: var(--c-coral); }
.cap-icon--dark    { background: var(--c-bg-dark); }
```

---

## Component Overrides

```css
/* 텍스트 강조 */
.ds-text--brand { color: var(--c-primary); }

/* 불릿 dot */
.ds-bullet--dot .ds-bullet__icon::before { color: var(--c-primary); }

/* 배지 */
.ds-badge--primary { background-color: var(--c-primary); color: var(--c-bg); }
.ds-badge--teal    { background-color: var(--c-teal-soft); color: var(--c-teal); }
.ds-badge--coral   { background-color: var(--c-coral-soft); color: var(--c-coral); }

/* 배너 brand tint */
.ds-banner--brand { background-color: var(--c-primary-soft); }

/* 버튼 primary */
.ds-btn--primary { background: var(--c-ink); color: var(--c-bg); }
.ds-btn--primary:hover { background: var(--c-primary); }

/* CTA band */
.ds-cta-band { background: var(--c-bg-dark); }

/* Dark section text */
.section--dark p { color: #c8c4f7; }
```

---

## 인증/수상 데이터 (Cert Grid 전용 — CUBIG 공유)

(이전과 동일 — cubig/reference/graphics/ 경로 유지)

| 그룹 | 인증/수상명 | 기관명 | 연도 |
|------|------------|--------|------|
| Certifications | Information Security Fast Track | KISA | 2024 |
| Certifications | GS Certification | TTA | 2025 |
| Certifications | ISO/IEC 27001 (ISMS) | ISO | 2026 |
| Certifications | ISO/IEC 42001 (AIMS) | ISO | 2026 |
| Awards | T Challenge 2026 — Finalist | Deutsche Telekom | 2026 |

---

## 파트너 데이터 (Partner Grid 전용)

| 파트너명 | 로고 파일 |
|----------|-----------|
| Deutsche Telekom | partner-deutsche-telekom.avif |
| Kyobo | partner-kyobo.avif |
| Claroty | partner-claroty.png |
| EUMC | partner-eumc.avif |
| Naver Cloud | partner-navercloud.avif |

---

## 톤 & 매너

- **LLM Capsule**: 제품 중심, 기술적 디테일, B2B 엔터프라이즈
- Inter 폰트로 모던하고 클린한 인상
- 3-color hierarchy: Purple(primary), Teal(differentiator), Coral(problem)
- 다크 섹션: navy(#0f1130), 이전 검정(#171719) 대비 브랜드감 강화
