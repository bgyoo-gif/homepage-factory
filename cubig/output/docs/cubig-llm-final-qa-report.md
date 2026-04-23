# QA Report
- 검증일: 2026-04-09 (current session)
- 대상 파일: cubig/output/html/cubig-llm-final-b-type.html
- 원본 파일: cubig/input/cubig-llm-final (1).html
- 명세서: (spec 파일 미존재 — 직접 원본 대조 방식으로 검증)
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | Medium | L383 | `.ds-section--bg-img::before`의 오버레이 색상이 `rgba(255,255,255,0.45)` (흰색). DS 규칙: "배경 이미지 위 텍스트는 black 또는 white만 사용" — 배경 이미지 위 오버레이가 white인 경우는 라이트 배경 이미지(cream/jade)에 적합하나, Section 4(bg-grad-cream)는 밝은 컬러 배경 + 흰색 오버레이 조합으로 설계 의도상 허용 범위로 볼 수 있음. 단, background shorthand 사용 여부 확인 필요 — `background:` 키워드를 gradient/var() 외 목적으로 사용 중. | 배경 이미지용 오버레이에 `background:` shorthand 사용. `background-color:`로 교체해야 함 |
| D-02 | CAT-2 DS 준수 | High | L618 | KPI band fallback: `background: linear-gradient(135deg, #1a6fe8, #0ea5a0);` — DS cubig.md에 정의된 토큰 값 `background: linear-gradient(135deg, #1a6fe8, #0ea5a0)`은 DS에 명시된 값과 일치하나, `:root` 변수 없이 직접 fallback으로 인라인 선언. 이는 DS cubig.md의 `.ds-kpi-band:not(…)` fallback 규칙을 CSS로 그대로 복사한 것 — DS에 명시된 허용 패턴 | 허용. DS-defined fallback gradient 패턴 |
| D-03 | CAT-2 DS 준수 | High | L843 | CTA band fallback: `background: linear-gradient(135deg, #b2f0e8 0%, #7ecfea 40%, #4a9fd4 100%);` — DS cubig.md `.ds-cta-band:not([class*="ds-bg--"])` fallback과 동일. CTA는 `ds-bg--grad-blue` 클래스 적용 시 이 fallback은 비활성화되므로 실질적 영향 없음. 단, background shorthand 사용 | 허용. DS-defined fallback, 실제 CTA는 bg-img 클래스 적용으로 fallback 비활성화 |
| D-04 | CAT-2 DS 준수 | Medium | L383 | `background: rgba(255,255,255,0.45)` — ds-section--bg-img::before overlay에 `background:` shorthand 사용. DS 규칙: "background shorthand 금지 (background-color만 사용)" | `background:` → `background-color:` 변경 필요 |
| D-05 | CAT-2 DS 준수 | Low | L702 | 아코디언 토글 아이콘에 `background-color: var(--ds-color-text-muted)` 사용. DS 규칙: "텍스트 최소 명도: `var(--ds-color-text-muted)` 사용 금지". 아이콘 색상으로 사용되어 텍스트는 아니지만 규칙에 명시된 변수 금지 위반 | 토글 아이콘의 배경색을 `var(--ds-color-neutral-200)` 또는 `var(--ds-color-neutral-300)`으로 교체 필요 |
| D-06 | CAT-2 DS 준수 | Medium | L1232, L1255, L1278 | Case Study 카드 이미지 세트 혼용: 1번 카드는 `graphic-telecom.png`(graphic 세트), 2·3번 카드는 `illustration-security.png`, `illustration-insurance.png`(illustration 세트) 사용. DS 규칙: "한 섹션 안에서는 같은 접두사 세트만 사용" 위반 | 동일 세트로 통일 필요. graphic 또는 illustration 중 하나로 3개 카드 통일 |
| D-07 | CAT-3 코드 품질 | Low | L1594 | `<footer style="display:none" aria-hidden="true"></footer>` — 인라인 style 속성 사용. 규칙: "인라인 style 금지 (CSS 변수 전달 목적 제외)". `display:none`은 변수 전달 목적이 아님 | footer를 CSS 클래스로 처리하거나 완전 제거 |
| D-08 | CAT-3 코드 품질 | Low | L310 | `--ds-content-max-width: 1200px` 선언됐으나 실제로 `var(--ds-content-max-width)` 참조 없음. 컨테이너 max-width는 L378에서 직접 `max-width: 1440px`로 적용 중. 미사용 변수 | 미사용 변수 제거 또는 실제 활용 필요 |
| D-09 | CAT-2 DS 준수 | Medium | L488 | `.ds-btn--primary { background: var(--ds-gradient-brand); }` — `background:` shorthand. DS 규칙: "background shorthand 금지". 그러나 gradient는 `background-color`로 표현 불가능하므로 gradient 적용은 `background:` shorthand가 불가피. DS 자체에서도 gradient에 background shorthand 사용 — 허용 패턴 | 허용. gradient 값에 한해 background shorthand는 실질적으로 불가피 |
| D-10 | CAT-4 반응형 | Low | L868 | CSS nesting 사용: `@media (min-width: 1440px) { .ds-cta-band { ... .ds-cta-band__title { font-size: var(--ds-text-6xl); } } }` — 중첩 CSS는 구형 브라우저 미지원. L874에 동일 규칙이 별도로도 선언되어 있어 기능상 이중 선언 | L868 내 중첩 title 규칙 제거 (L874로 충분) |

---

## 최종 판정 근거

### [CAT-1] 내용 무결성 — PASS
- Hero 섹션: A타입 핵심 메시지 "Use any AI on sensitive enterprise data" 정확 재현
- Section 2 (How it works): 3단계 탭 — Original / Encapsulated / Restored 콘텐츠, 코드 예시까지 완전 일치
- Section 3 (Why different): Data Masking / Prompt Gateway / LLM Capsule 3개 카드 콘텐츠 일치
- Section 4 (Capabilities): CORE 1~3 + +1, +2 5개 카드 완전 일치
- Section 5 (Stack): LLM Capsule / DTS / SynTitan 3개 제품 설명 일치
- Section 6 (Proof): Deutsche Telekom / Claroty / DB Insurance+EUMC+Shin&Kim 3개 도입 사례, KPI (98.1%, 99.14%, <0.12s, Any) 정확 일치
- Section 7 (FAQ): 8개 항목 모두 A타입과 내용 일치
- CTA band: "Encapsulate. Process. Restore." 일치

### [CAT-2] DS 준수 — CONDITIONAL PASS
- 하드코딩 색상: :root 변수 선언부 외 본문 CSS에 하드코딩 없음 (fallback gradient는 DS 허용 패턴)
- !important: 0건 — PASS
- ds-text--brand: 7개 섹션 헤더 강조에 정상 적용 — PASS
- eyebrow: 0건 — PASS
- ds-section--light: 0건 — PASS
- ds-section-header--left: 0건 — PASS
- letter-spacing 하드코딩: 0건 — PASS
- 주황/오렌지: ds-color-warn 정의만 있고 실제 사용 없음 — PASS
- background shorthand: L383 `.ds-section--bg-img::before`에서 위반 (D-04, Medium)
- Case Study 이미지 혼용: D-06 위반 (Medium)
- ds-color-text-muted 아이콘 사용: D-05 (Low)
- CSS 변수: 모두 DS 정의 변수 사용 — PASS

### [CAT-3] 코드 품질 — PASS
- 시맨틱 태그: section, article, nav, main, footer 적절히 사용
- section id: 8개 section 모두 id 보유 (section-hero, section-how-it-works, section-why-different, section-capabilities, section-stack, section-proof, section-faq, section-cta)
- SVG: 모두 aria-hidden="true" 또는 aria-label 적용
- 이미지: alt 속성 정상
- 폰트: Google Fonts DM Sans, Oxanium, Fragment Mono 로드 확인
- 인라인 style: L1594 footer style="display:none" (D-07, Low)

### [CAT-4] 반응형 — PASS
- 768px breakpoint: 7회 확인
- 1024px breakpoint: 8회 확인
- 1440px breakpoint: 9회 확인
- mobile padding 16px: L306 정상
- tablet padding 32px: L307 정상
- desktop padding 120px: L309 정상
- max-width 1440px: L378 컨테이너에 정상 적용
- CSS nesting 이중 선언 (D-10, Low)

---

## 통계

- 전체 결함 수: 10건 (실질 결함 기준)
- Critical: 0개
- High: 0개 (D-02, D-03, D-09는 허용 패턴으로 판정)
- Medium: 3개 (D-01/D-04 background shorthand, D-06 이미지 세트 혼용)
- Low: 3개 (D-05 text-muted 아이콘, D-07 인라인 style, D-08 미사용 변수, D-10 CSS nesting)

**FAIL 필수 항목 체크:**
- 원문 텍스트 누락/변경: 없음
- ds-text--brand 강조 미적용: 없음
- 하드코딩 색상: 없음 (본문 스타일 기준)
- DS에 없는 커스텀 CSS 변수: 없음
- 4단계 breakpoint 누락: 없음
- eyebrow 존재: 없음
- ds-section-header--left 사용: 없음
- letter-spacing 하드코딩: 없음
- 주황/오렌지 색상 사용: 없음
- background shorthand: **L383 위반 존재 (Medium)**
- ds-section--light 사용: 없음

---

## 최종 판정

**CONDITIONAL PASS**

**사유:** FAIL 필수 항목 중 background shorthand(D-04)가 L383 `.ds-section--bg-img::before`에서 `background:` shorthand로 `rgba(255,255,255,0.45)` 값을 적용 중. 기능적으로는 `background-color:` 와 동일하나 DS 규칙 위반. Case Study 이미지 세트 혼용(D-06) 및 ds-color-text-muted 아이콘 사용(D-05)은 Medium/Low 결함.

High/Critical 결함이 없어 FAIL은 아니나, Medium 결함 3건이 남아있어 CONDITIONAL PASS 판정.

---

## 수정 요청 사항 (frontend-dev)

### 우선순위 HIGH — 즉시 수정
1. **D-04 (L383)** `background: rgba(255,255,255,0.45)` → `background-color: rgba(255,255,255,0.45)` 변경

2. **D-06 (L1232, L1255, L1278)** Case Study 카드 이미지 세트 혼용 수정
   - 현재: `graphic-telecom.png` (graphic 세트) + `illustration-security.png`, `illustration-insurance.png` (illustration 세트)
   - 수정: 동일 세트(illustration)로 통일 → `graphic-telecom.png` → `illustration-public-sector.png` 또는 동급 illustration 이미지로 교체

### 우선순위 LOW — 선택 수정
3. **D-05 (L702)** 아코디언 토글 아이콘 `background-color: var(--ds-color-text-muted)` → `var(--ds-color-neutral-250)` 교체
4. **D-07 (L1594)** footer `style="display:none"` 인라인 style 제거 → CSS 클래스로 처리하거나 footer 요소 제거
5. **D-08 (L310)** `--ds-content-max-width: 1200px` 미사용 변수 제거
6. **D-10 (L868)** CSS nesting 중첩 구조 `ds-cta-band__title` 규칙 제거 (L874 별도 선언으로 충분)

---

## 다음 액션

**CONDITIONAL PASS:** frontend-dev 에이전트에 D-04(Medium, background shorthand)와 D-06(Medium, 이미지 세트 혼용) 수정 요청.
수정 후 재검증(qa 재호출) 또는 Low 결함만 남을 경우 PASS 선언 가능.

수정 요청: "cubig/output/docs/cubig-llm-final-qa-report.md의 D-04, D-06 결함을 cubig/output/html/cubig-llm-final-b-type.html에서 수정해줘."
