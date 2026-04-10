---
name: design-system-capsule
description: >
  LLM Capsule 브랜드 전용 Color/Gradient 토큰.
  design-system-core.md와 함께 로드해야 완전한 DS가 된다.
---

# LLM Capsule Brand Tokens

> core + 이 파일을 함께 적용

---

## Brand Color System

```css
:root {
  /* Primary / Brand — LLM Capsule 고유 색상 */
  --ds-color-brand-primary:   #1821E8;   /* 딥 인디고 — 메인 CTA, 번호 불릿 배경 */
  --ds-color-brand-secondary: #5690D4;   /* 미디엄 블루 — 텍스트 강조, 배지 */
  --ds-color-brand-accent:    #55B45D;   /* 그린 — 보조 강조, accent 카드 */
  --ds-color-brand-light:     #B8D4EE;   /* secondary의 밝은 버전 — 배지 배경 */

  /* Border — brand accent */
  --ds-color-border-brand: #5690D4;

  /* Gradient — brand CTA */
  --ds-gradient-brand: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);

  /* Gradient Card Border — 109deg shimmer */
  --ds-gradient-card-indigo: linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%);
  --ds-gradient-card-blue:   linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%);
  --ds-gradient-card-green:  linear-gradient(109deg, #55B45D 0%, #F0FFF2 17%, #9AE6AD 43%, #C9FFE1 65%, #55B45D 84%, #55B45D 100%);
  --ds-gradient-card-silver: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);

  /* Gradient Card Inner Background — 99deg tint-to-white */
  --ds-gradient-inner-indigo: linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-blue:   linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-green:  linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);

  /* Diagram Architecture header */
  --ds-gradient-arch-header: linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%);
}
```

---

## Brand Component Overrides

브랜드 컬러를 참조하는 컴포넌트 토큰:

```css
/* 텍스트 강조 */
.ds-text--brand       { color: var(--ds-color-brand-secondary); }
.ds-text--brand-light { color: var(--ds-color-brand-light); }

/* 불릿 dot: 블루 */
.ds-bullet--dot .ds-bullet__icon::before { color: var(--ds-color-brand-secondary); }

/* 불릿 number: 인디고 배경 */
.ds-bullet--number .ds-bullet__icon::before { color: var(--ds-color-brand-primary); }

/* 카드 배지 brand */
.ds-card__badge--brand { color: var(--ds-color-brand-secondary); border-color: var(--ds-color-brand-secondary); }

/* 배너 brand tint */
.ds-banner--brand { --ds-banner-bg: rgba(24, 33, 232, 0.06); }

/* 배지 brand */
.ds-badge--primary { background-color: var(--ds-color-brand-primary); }
.ds-badge--purple  { background-color: var(--ds-color-brand-light); color: var(--ds-color-brand-secondary); }

/* 버튼 primary gradient */
.ds-btn--primary { background: var(--ds-gradient-brand); }

/* Section header eyebrow */
.ds-section-header__eyebrow { color: var(--ds-color-brand-secondary); }

/* Cert card group label */
.ds-cert-card__group { color: var(--ds-color-brand-secondary); }

/* Gradient Card variants — Capsule는 purple 대신 indigo 사용 */
.ds-card--gradient-indigo { background: var(--ds-gradient-card-indigo); }
.ds-card--gradient-blue   { background: var(--ds-gradient-card-blue); }
.ds-card--gradient-green  { background: var(--ds-gradient-card-green); }
.ds-card--gradient-silver { background: var(--ds-gradient-card-silver); }
.ds-card--gradient-brand  { background: var(--ds-gradient-brand); }

.ds-card--gradient-indigo .ds-card--gradient__inner { background: var(--ds-gradient-inner-indigo); }
.ds-card--gradient-blue .ds-card--gradient__inner   { background: var(--ds-gradient-inner-blue); }
.ds-card--gradient-green .ds-card--gradient__inner   { background: var(--ds-gradient-inner-green); }

/* Gradient Card 사용 시점 (LLM Capsule) */
/* indigo: 핵심 기능 강조, blue: 보조 기능, green: 결과/성과 */
/* brand: 최종 CTA 강조 카드, silver: 일반 정보 카드 */

/* CTA band fallback gradient */
.ds-cta-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
}

/* KPI band fallback gradient */
.ds-kpi-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #1821E8, #55B45D);
}
```

---

## 제품명 (Oxanium 폰트 대상)

`.ds-text--product` 적용 대상 제품명:
- **LLM Capsule** — LLM 보안/운영 플랫폼 (메인 제품)

> LLM Capsule 홈페이지는 단일 제품 사이트이므로 "LLM Capsule"만 Oxanium 적용.
> CUBIG, SynTitan 등 타사/타제품명은 일반 폰트(DM Sans) 사용.

---

## 인증/수상 데이터 (Cert Grid 전용 — CUBIG 회사 레벨 공유)

CUBIG 회사 인증/수상을 LLM Capsule에서도 동일하게 사용한다.

| 그룹 | 인증/수상명 | 기관명 | 연도 | 로고 파일 |
|------|------------|--------|------|-----------|
| Certifications | Information Security Fast Track | KISA | 2024 | cert-kisa.png |
| Certifications | GS Certification | TTA | 2025 | cert-gs.png |
| Certifications | ISO/IEC 27001 (ISMS) | ISO | 2026 | cert-iso.png |
| Certifications | ISO/IEC 42001 (AIMS) | ISO | 2026 | cert-iso.png |
| Awards | Information Security Innovation Award | Ministry of Science & ICT | 2024 | awards-ministry-of-science-and-ict.jpg |
| Awards | Startup World Cup — Finalist | Startup World Cup | 2025 | cert-startupworldcup.png |
| Awards | Next Rise — Global Innovator | Next Rise | 2025 | — (이모지 🏆 대체) |
| Awards | T Challenge 2026 — Finalist | Deutsche Telekom | 2026 | partner-deutsche-telekom.avif |
| Awards | AI Medical Innovation Award | AI EXPO KOREA | 2025 | awards-koreaia.png |
| Recognition | Emerging AI+X Top 100 | — | 2026 | — (이모지 🌟 대체) |
| Recognition | Representative Vendor, Hyper-Synthetic Data | Gartner | 2025 | cert-gartner.svg.png |

> **AWS Marketplace는 인증이 아니므로 cert grid에 넣지 않는다.**

로고 경로: `cubig/reference/graphics/`
월계수: `cubig/reference/graphics/cert-left.png`, `cubig/reference/graphics/cert-right.png`

## 파트너 데이터 (Partner Grid 전용 — 로고 이미지 있는 것만 사용)

| 파트너명 | 로고 파일 |
|----------|-----------|
| Deutsche Telekom | partner-deutsche-telekom.avif |
| Kyobo | partner-kyobo.avif |
| Claroty | partner-claroty.png |
| EUMC | partner-eumc.avif |
| Naver Cloud | partner-navercloud.avif |

> **로고 이미지가 없는 파트너(IBK, DB손해보험, Shin&Kim)는 partner grid에 넣지 않는다.** 텍스트 대체 금지.

로고 경로: `cubig/reference/images/`

---

## 제품 로고

| 파일명 | 용도 |
|--------|------|
| logo-llmcapsule.avif | LLM Capsule 로고 (Nav, Hero 등) |

경로: `llm-capsule/reference/images/`

---

## 톤 & 매너

- **CUBIG**: 기업 신뢰, B2B, 데이터 인프라 전문성
- **LLM Capsule**: 제품 중심, 기술적 디테일, 개발자/ML 엔지니어 타겟
  - 더 기술적이고 직관적인 카피
  - 데모/코드 예시 강조
  - "보안", "모니터링", "거버넌스" 키워드 중심
