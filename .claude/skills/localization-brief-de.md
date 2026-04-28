# Localization Brief — Deutsch (de-DE)

## 시장 특성
- 타깃: IT-Leiter, CISO, Datenschutzbeauftragter, CTO
- 기대 톤: 사실 기반, 과장 없음, 기능 중심, 전문적 정중함
- 규제 프레임: DSGVO (GDPR), EU AI Act, BSI C5, ISO 27001, ISO 42001
- "AI" → "KI" 전환 필수 (제품명 내부 AI는 유지: "AI Enablement Data Layer")

## 문체 원칙

### 톤
- **Sachlich** (사실적) — 마케팅 과장 제거. "revolutionize", "game-changing", "unlock" 같은 표현 금지
- **Sie 호칭** — 격식체 유지
- **기능 설명 중심** — "what it does" > "why it's amazing"
- 느낌표 금지. 물음표는 FAQ에서만
- 한 문장에 핵심 하나. 복문 최소화

### 문장 구조
- EN의 대시(—) 나열 → DE에서 독립 문장으로 분리
- EN의 "X — Y — Z" 패턴 → DE에서 문장별 서술
- EN의 감성적 반복 ("usable", "enterprise-ready", "directly into workflows") → DE에서 1회만 사용
- 수동태 허용 (학술/기술 문서 관습), 하지만 3문장 연속 수동태 금지

### 금지 패턴
- 영어식 마케팅 표현 직역: "Get usable results back" → X
- 느낌표, 감탄형
- "Jetzt testen!", "Kostenlos starten" 같은 B2C 톤
- カタカナ/영어 남용 (독일어 대응어가 있으면 독일어 사용)

## 용어 전략 (문맥별)

### 핵심 용어 — 문맥에 따라 다르게 번역

| EN | DE 기본 | DE 기술 설명 | DE 마케팅/Hero |
|----|---------|-------------|---------------|
| encapsulation | Kapsulierung | geschützte Datenrepräsentation | lokaler Schutz vor der Verarbeitung |
| encapsulate | kapsulieren | lokal identifizieren und ersetzen | schützen und verarbeiten |
| restoration | Wiederherstellung | Anreicherung mit Originaldaten | automatische Zusammenführung |
| restore | wiederherstellen | mit Originaldaten anreichern | zusammenführen |
| sensitive data | sensible Daten | sensible Inhalte / vertrauliche Informationen | geschützte Daten |
| enterprise AI | KI im Unternehmen | KI-Einsatz in Organisationen | unternehmensweite KI-Nutzung |
| usable output | verwertbare Ergebnisse | fachlich nutzbare Ergebnisse | direkt einsetzbare Ergebnisse |
| data layer | Datenschicht | Datenschicht / Datenebene | - |
| air-gapped | Air-Gapped | Air-Gapped-Netzwerke | isolierte Netzwerke |
| on-premise | On-Premise | On-Premise-Systeme | bestehende IT-Umgebung |
| compliance | Konformität | regulatorische Konformität | Compliance-Anforderungen |
| trust boundary | Vertrauensgrenze | Vertrauensgrenze | - |
| structure-preserving | strukturerhaltend | Erhalt der Dokumentstruktur | kontextgerechte Verarbeitung |
| zero exposure | Zero Exposure | keine Offenlegung | kein Datenaustritt |
| enterprise environment execution | Ausführung in der Unternehmensumgebung | Ausführung in der Unternehmensumgebung | Ausführung in der bestehenden Infrastruktur |
| Schaden* (보험 합성어) | Schaden- (Fugen-s 없음) | Schadenbearbeitung, Schadenmeldung, Schadendokument | - |
| workflow boundary | Workflow-Schutz | den gesamten Workflow schützen | - |
| LLM API enablement | abgesicherter LLM-Zugriff | abgesicherter LLM-Zugriff auf der Datenebene | - |
| Why Redaction Breaks AI | Warum Schwärzung KI-Workflows unbrauchbar macht | - | - |

### 번역 금지 (EN 유지)
- LLM Capsule, CUBIG, DTS, SynTitan, Zero Exposure
- AWS Marketplace, ISO 27001, ISO 42001, GS Certification
- ChatGPT, Claude, Gemini, Perplexity
- Deutsche Telekom, Claroty, KISA, TTA

### DE 시장 전용 추가
- DSGVO (GDPR의 독일어 약칭) — "GDPR" 대신 "DSGVO (GDPR)" 표기
- BSI C5 — 독일 연방정보보안청 클라우드 보안 기준
- EU AI Act — 그대로 사용

## CTA 패턴

| EN | DE |
|----|-----|
| Request a Demo | Demo anfordern |
| See Product | Produkt ansehen |
| See Architecture | Architektur ansehen |
| Learn more | Mehr erfahren |
| Available on AWS Marketplace | Verfügbar auf AWS Marketplace |
| See all production cases | Alle Referenzen ansehen |
| View Solutions | Lösungen ansehen |
| See how LLM Capsule works with your data | Wir analysieren Ihre Anforderungen und demonstrieren LLM Capsule anhand Ihrer eigenen Daten. |

**CTA 원칙:** 명령형("Testen Sie!") 대신 가치 제안형("Wir analysieren Ihre Anforderungen...")

## 섹션별 리라이트 가이드

### Hero
- EN: 감성+기능 혼합 → DE: 기능 설명만. 1문장 Headline + 2~3문장 Subcopy
- "Get usable results back" 같은 감성 문구 → "ohne Offenlegung vertraulicher Daten" (기능 설명)
- EN 대시 나열 → DE 독립 문장

### Capabilities / Features
- EN: "카드 제목 + 설명" → DE: 카드 제목은 기능 명사, 설명은 1~2문장 서술
- 같은 개념 반복 제거: EN에서 5번 나오는 "enterprise-ready" → DE에서 1~2회만

### FAQ
- Q: "Wie..." / "Was..." / "Welche..." 형식
- A: 첫 문장에서 핵심 답변, 이후 부연. EN 원문보다 짧게 가능

### CTA Band
- EN: "See how X works with your data" → DE: "Wir analysieren Ihre Anforderungen und demonstrieren X anhand Ihrer eigenen Daten."
- 판매 압박 없이 전문적 제안

### Case Study / Proof
- DE 시장에 배포된 고객사만 강조 (Deutsche Telekom)
- 비독일권 사례는 간략히 유지

## 리라이트 체크리스트 (localizer가 매 Props 작성 시 확인)

1. [ ] 영어 어순이 그대로 남아있지 않은가?
2. [ ] 한 문장에 정보가 2개 이상 들어있으면 분리했는가?
3. [ ] 동일 개념의 불필요한 반복을 제거했는가?
4. [ ] 마케팅 과장 표현을 사실적 표현으로 바꿨는가?
5. [ ] 전문 용어가 문맥에 맞게 변형되었는가? (모든 곳에서 같은 단어 X)
6. [ ] CTA가 가치 제안형인가?
7. [ ] DSGVO/BSI C5 등 DE 시장 규제를 적절히 언급했는가?
