---
name: design-system-cubig
description: >
  CUBIG 브랜드 전용 Color/Gradient 토큰 + 파트너/인증 데이터.
  design-system-core.md와 함께 로드해야 완전한 DS가 된다.
---

# CUBIG Brand Tokens

> core + 이 파일을 함께 적용

---

## Brand Color System

```css
:root {
  /* Primary / Brand */
  --ds-color-brand-primary:   #3061f2;
  --ds-color-brand-secondary: #725bea;
  --ds-color-brand-accent:    #ab2eff;
  --ds-color-brand-light:     #c6c5fa;

  /* Border — brand accent */
  --ds-color-border-brand: #725bea;

  /* Gradient — brand CTA */
  --ds-gradient-brand: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%);

  /* Gradient Card Border — 109deg shimmer */
  --ds-gradient-card-purple: linear-gradient(109deg, #FCD6FF 0%, #fff 17%, #FFEDFA 38%, #D48AFF 51%, #fff 73%, #FCD6FF 100%);
  --ds-gradient-card-blue:   linear-gradient(109deg, #BFE1FB 0%, #fff 17%, #FFEDFA 38%, #81B8FB 51%, #E2E3F0 73%, #BFE1FB 100%);
  --ds-gradient-card-green:  linear-gradient(109deg, #01CA51 0%, #FFEFF5 17%, #9AE6AD 43%, #C9FFE1 65%, #01CA51 84%, #01CA51 100%);
  --ds-gradient-card-silver: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);

  /* Gradient Card Inner Background — 99deg tint-to-white */
  --ds-gradient-inner-purple: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-blue:   linear-gradient(99deg, #E9EEFB 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-green:  linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);

  /* Diagram Architecture header */
  --ds-gradient-arch-header: linear-gradient(115deg, #94A6FF 0%, #60CFC7 50%, #B2E0C5 100%);
}
```

---

## Brand Component Overrides

브랜드 컬러를 참조하는 컴포넌트 토큰:

```css
/* 텍스트 강조 */
.ds-text--brand       { color: var(--ds-color-brand-secondary); }
.ds-text--brand-light { color: var(--ds-color-brand-light); }

/* 불릿 dot: 보라색 */
.ds-bullet--dot .ds-bullet__icon::before { color: var(--ds-color-brand-secondary); }

/* 불릿 number: 파란색 배경 */
.ds-bullet--number .ds-bullet__icon::before { color: var(--ds-color-brand-primary); }

/* 카드 배지 brand */
.ds-card__badge--brand { color: var(--ds-color-brand-secondary); border-color: var(--ds-color-brand-secondary); }

/* 배너 brand tint */
.ds-banner--brand { --ds-banner-bg: rgba(166, 23, 255, 0.06); }

/* 배지 brand */
.ds-badge--primary { background-color: var(--ds-color-brand-primary); }
.ds-badge--purple  { background-color: var(--ds-color-brand-light); color: var(--ds-color-brand-secondary); }

/* 버튼 primary gradient */
.ds-btn--primary { background: var(--ds-gradient-brand); }

/* Section header eyebrow */
.ds-section-header__eyebrow { color: var(--ds-color-brand-secondary); }

/* Cert card group label */
.ds-cert-card__group { color: var(--ds-color-brand-secondary); }

/* Gradient Card variants */
.ds-card--gradient-purple { background: var(--ds-gradient-card-purple); }
.ds-card--gradient-blue   { background: var(--ds-gradient-card-blue); }
.ds-card--gradient-green  { background: var(--ds-gradient-card-green); }
.ds-card--gradient-silver { background: var(--ds-gradient-card-silver); }
.ds-card--gradient-brand  { background: var(--ds-gradient-brand); }

.ds-card--gradient-purple .ds-card--gradient__inner { background: var(--ds-gradient-inner-purple); }
.ds-card--gradient-blue .ds-card--gradient__inner   { background: var(--ds-gradient-inner-blue); }
.ds-card--gradient-green .ds-card--gradient__inner   { background: var(--ds-gradient-inner-green); }

/* Gradient Card 사용 시점 (CUBIG) */
/* purple: LLM Capsule 제품, blue: SynTitan 제품, green: DTS 제품 */
/* brand: 최종 결과/CTA 강조 카드, silver: 일반 정보 카드 */

/* CTA band fallback gradient */
.ds-cta-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #b2f0e8 0%, #7ecfea 40%, #4a9fd4 100%);
}

/* KPI band fallback gradient */
.ds-kpi-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #1a6fe8, #0ea5a0);
}
```

---

## 제품명 (Oxanium 폰트 대상)

`.ds-text--product` 적용 대상 제품명:
- **SynTitan** — 합성 데이터 생성 엔진
- **DTS** — Data Trust System
- **LLM Capsule** — LLM 보안/운영 플랫폼
- **SynData** — 합성 데이터 서비스
- **SynConnect** — 데이터 연결 서비스

---

## 파트너 로고 (reference/images/partner-*)

| 파일명 | 표시명 |
|--------|--------|
| partner-gartner.png | Gartner |
| partner-navercloud.avif | Naver Cloud |
| partner-sktelecom.avif | SK Telecom |
| partner-kyobo.avif | Kyobo |
| partner-korea army.avif | ROK Army |
| partner-korea-airforce.avif | ROK Air Force |
| partner-eumc.avif | EUMC |
| partner-deutsche-telekom.avif | Deutsche Telekom |
| partner-claroty.png | Claroty |
| partner-korea-heritage-service.jpg | Korea Heritage Service |
| partner-ministry-of-data-and-statistics.png | Ministry of Data and Statistics |

---

## 인증/수상 (reference/graphics/cert-*, awards-*)

| 그룹 | 인증/수상명 | 기관명 | 연도 | 로고 파일 |
|------|------------|--------|------|-----------|
| Certifications | Information Security Fast Track | KISA | 2024 | cert-kisa.png |
| Certifications | GS Certification | TTA | 2025 | cert-gs.png |
| Certifications | ISO/IEC 27001 (ISMS) | ISO | 2026 | cert-iso.png |
| Certifications | ISO/IEC 42001 (AIMS) | ISO | 2026 | cert-iso.png |
| Awards | Information Security Innovation Award | Ministry of Science & ICT | 2024 | awards-ministry-of-science-and-ict.jpg |
| Awards | Startup World Cup — Finalist | Startup World Cup | 2025 | cert-startupworldcup.png |
| Awards | Next Rise — Global Innovator | Next Rise | 2025 | awards-NextRise.png |
| Awards | T Challenge 2026 — Finalist | Deutsche Telekom | 2026 | partner-deutsche-telekom.avif |
| Awards | AI EXPO KOREA — AI Medical Innovation Award | AI EXPO KOREA | 2025 | awards-koreaia.png |
| Recognition | Emerging AI+X Top 100 | — | 2026 | — |
| Recognition | Representative Vendor, Hyper-Synthetic Data | Gartner | 2025 | cert-gartner.svg.png |

로고 경로: `cubig/reference/graphics/`
월계수: `cubig/reference/graphics/cert-left.png`, `cubig/reference/graphics/cert-right.png`

---

## 제품 로고 (reference/images/logo-*)

| 파일명 | 제품 |
|--------|------|
| logo-dts.avif | DTS |
| logo-llmcapsule.avif | LLM Capsule |
| logo-syntitan.png | SynTitan |

경로: `cubig/reference/images/`

---

## Case Study 이미지 세트

| 접두사 | 이미지 목록 |
|--------|------------|
| graphic | graphic-ai-intelligence.png, graphic-fashion.png, graphic-shopping.png, graphic-telecom.png |
| illustration | illustration-ecommerce.png, illustration-gaming.png, illustration-insurance.png, illustration-persona.png, illustration-public-sector.png, illustration-security.png |

**세트별 사용 규칙:** 한 섹션 안에서는 같은 접두사 세트만 사용.
경로: `cubig/reference/graphics/`
