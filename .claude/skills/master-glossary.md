# Master Glossary — 4개국어 통합 용어집

> 이 파일이 모든 번역/로컬라이제이션의 **단일 용어 소스(Single Source of Truth)**입니다.
> translator, localizer, native-reviewer는 이 파일을 참조해야 합니다.
> 용어 변경 시 이 파일만 수정하면 전체에 반영됩니다.

---

## 1. 번역 금지 용어 (모든 언어에서 EN 원문 유지)

| 용어 | 이유 |
|------|------|
| LLM Capsule | 제품명 |
| CUBIG | 회사명 |
| SynTitan | CUBIG 제품명 |
| DTS | CUBIG 제품명 |
| SynData | CUBIG 제품명 |
| SynConnect | CUBIG 제품명 |
| Zero Exposure | 브랜드 차별화 키워드 |
| Proof of Value (PoV) | 영업 프로세스 고유명 |
| AWS Marketplace | 서비스명 |
| ISO 27001 | 인증 명칭 |
| ISO 42001 | 인증 명칭 |
| GS Certification | 인증 명칭 |
| ChatGPT | 외부 제품명 |
| Claude | 외부 제품명 (Anthropic) |
| Gemini | 외부 제품명 (Google) |
| Perplexity | 외부 제품명 |
| KISA | 기관명 |
| TTA | 기관명 |
| Gartner | 기관명 |
| Deutsche Telekom | 고객사 |
| Claroty | 고객사 |
| BSI C5 | 독일 보안 기준 (DE에서만 추가) |
| EU AI Act | 규제명 |
| RBAC | 기술 약어 |
| RAG | 기술 약어 |
| VPC | 기술 약어 |
| SDK | 기술 약어 |
| API | 기술 약어 |

---

## 2. 핵심 기술 용어 — 4개국어 대응표

### 2-A. 제품 핵심 기능

| EN | KO | JA | DE (기본) | DE (기술 설명) | DE (마케팅/Hero) |
|----|----|----|-----------|---------------|-----------------|
| encapsulation | 캡슐화 | カプセル化 | Kapsulierung | geschützte Datenrepräsentation | lokaler Schutz vor der Verarbeitung |
| encapsulate | 캡슐화하다 | カプセル化する | kapsulieren | lokal identifizieren und ersetzen | schützen und verarbeiten |
| restoration | 복원 / 자동 복원 | 復元 | Wiederherstellung | Anreicherung mit Originaldaten | automatische Zusammenführung |
| restore | 복원하다 | 復元する | wiederherstellen | mit Originaldaten anreichern | zusammenführen |
| local restoration | 로컬 복원 | ローカル復元 | lokale Wiederherstellung | lokale Anreicherung mit Originaldaten | - |
| restorable workflow | 복원 가능한 워크플로우 | 復元可能なワークフロー | wiederherstellbarer Workflow | - | - |
| structure-preserving processing | 문서 구조 보존 처리 | 構造保持処理 | strukturerhaltende Verarbeitung | Erhalt der Dokumentstruktur | kontextgerechte Verarbeitung |
| enterprise environment execution | 기업 환경 실행 | エンタープライズ環境実行 | Ausführung in der Unternehmensumgebung | Ausführung in der Unternehmensumgebung | Ausführung in der bestehenden Infrastruktur |
| enterprise context control | 조직 정의 민감정보 | エンタープライズコンテキスト制御 | Unternehmenskontextkontrolle | unternehmensspezifische Entitätskontrolle | - |
| zero exposure | Zero Exposure | Zero Exposure | Zero Exposure | keine Offenlegung | kein Datenaustritt |
| AI enablement data layer | AI 활성화 데이터 레이어 | AI活用データレイヤー | AI Enablement Data Layer (EN 유지) | KI-Enablement-Datenschicht | - |

### 2-B. 인프라/배포

| EN | KO | JA | DE |
|----|----|----|-----|
| on-premise | 온프레미스 | オンプレミス | On-Premise |
| air-gapped | 망분리 | エアギャップ | Air-Gapped |
| hybrid | 하이브리드 | ハイブリッド | Hybrid |
| embedded | 임베디드 | 組み込み | eingebettet |
| trust boundary | 신뢰 경계 | 信頼境界 | Vertrauensgrenze |
| data layer | 데이터 레이어 | データレイヤー | Datenschicht / Datenebene |

### 2-C. 보안/규제

| EN | KO | JA | DE |
|----|----|----|-----|
| sensitive data | 민감 데이터 / 민감정보 | 機密データ | sensible Daten / vertrauliche Informationen |
| PII (personally identifiable information) | PII (개인 식별 정보) | PII（個人識別情報） | PII (personenbezogene Daten) |
| compliance | 규제 대응 / 컴플라이언스 | コンプライアンス | Konformität / regulatorische Konformität |
| GDPR | GDPR | GDPR | DSGVO (GDPR) |
| audit trail | 감사 이력 | 監査証跡 | Prüfpfad / Audit-Protokoll |
| data exposure | 데이터 노출 | データ露出 | Offenlegung von Daten |
| masking | 마스킹 | マスキング | Maskierung |
| redaction | 삭제 (Redaction) | リダクション（墨消し） | Schwärzung |
| prompt security gateway | 프롬프트 보안 게이트웨이 | プロンプトセキュリティゲートウェイ | Prompt Security Gateway |

### 2-D. 비즈니스/마케팅

| EN | KO | JA | DE |
|----|----|----|-----|
| enterprise AI | 기업 AI | エンタープライズAI | KI im Unternehmen |
| enterprise AI adoption | 기업 AI 도입 | エンタープライズAI導入 | KI-Einsatz in Organisationen |
| usable output | 바로 쓸 수 있는 결과물 | 実用的な出力 | verwertbare Ergebnisse / fachlich nutzbare Ergebnisse |
| enterprise-ready | 기업에서 바로 사용 가능 | エンタープライズ対応 | direkt einsetzbar |
| document processing | 문서 처리 | ドキュメント処理 | Dokumentenverarbeitung |
| cross-model execution | 크로스 모델 실행 | クロスモデル実行 | modellübergreifende Ausführung |

### 2-E. 보험 업종 용어 (DE Fugen-s 없음 통일)

| EN | KO | JA | DE |
|----|----|----|-----|
| claims processing | 보험 청구 처리 | 保険金請求処理 | Schadenbearbeitung |
| claims document | 보험 청구 문서 | 保険金請求書類 | Schadendokument |
| claim | 보험 청구 / 클레임 | 保険金請求 | Schadenmeldung |

---

## 3. CTA 라벨 대응표

| EN | KO | JA | DE |
|----|----|----|-----|
| Request a Demo | 데모 요청 | デモをリクエスト | Demo anfordern |
| Available on AWS Marketplace | AWS 마켓플레이스에서 보기 | AWS Marketplaceで利用可能 | Verfügbar auf AWS Marketplace |
| See Product | 제품 보기 | 製品を見る | Produkt ansehen |
| See Architecture | 아키텍처 보기 | アーキテクチャを見る | Architektur ansehen |
| See how it works | 자세히 살펴보기 | 仕組みを見る | Funktionsweise ansehen |
| View Solutions | 산업별 솔루션 보기 | ソリューションを見る | Lösungen ansehen |
| Learn more | 자세히 알아보기 | 詳しく見る | Mehr erfahren |
| Read article | 아티클 읽기 | 記事を読む | Artikel lesen |
| Explore DTS | DTS 살펴보기 | DTSを見る | DTS ansehen |
| Explore SynTitan | SynTitan 살펴보기 | SynTitanを見る | SynTitan ansehen |
| See all production cases | 전체 도입 사례 보기 | すべての導入事例を見る | Alle Referenzen ansehen |
| See how X works with your data | 직접 확인하세요 — X이 귀사의 데이터와 어떻게 작동하는지 | Xがお客様のデータでどのように機能するかご確認ください | Wir analysieren Ihre Anforderungen und demonstrieren X anhand Ihrer eigenen Daten. |
| Why Redaction Breaks AI | 삭제(Redaction)가 기업 AI를 망치는 이유 | リダクションがAIを破壊する理由 | Warum Schwärzung KI-Workflows unbrauchbar macht |

---

## 4. 숫자/기호 표기

| 항목 | EN | KO | JA | DE |
|------|----|----|----|----|
| 소수점 | 98.1% | 98.1% | 98.1% | 98,1 % |
| 천 단위 | $247,000 | $247,000 | $247,000 | 247.000 USD |
| 시간 | 0.12s | 0.12초 | 0.12秒 | 0,12 s |
| 토큰 라벨 | [PERSON_01] | [PERSON_01] (EN 유지) | [PERSON_01] (EN 유지) | [PERSON_01] (EN 유지) |

---

## 5. 언어별 문체 규칙 요약

| 항목 | KO | JA | DE |
|------|----|----|-----|
| 경어 | 합니다체 | です/ます体 | Sie 호칭 |
| 톤 | 단정적, 강한 어조 | 기술적, 정중 | 사실적, 전문적 (Sachlich) |
| AI 표기 | AI | AI | KI (제품명 내 AI 제외) |
| 강조 | 절대/직접/바로/그대로 | 必ず/直接/即座に | sachlich — 과장 금지 |
| 나열 | 가운뎃점(·) | 読点(、) | Komma oder Aufzählung |
| CTA | 명사형 (데모 요청) | 動詞＋ください | 가치 제안형 (Wir analysieren...) |
| 느낌표 | 지양 | 지양 | 금지 |
| 수동태 | 능동태 선호 | 능동태 선호, ～されます 연속 금지 | 허용, 3문장 연속 금지 |

---

## 사용 방법

1. **translator (literal mode)**: §2 용어 대응표 + §3 CTA 라벨 참조
2. **translator (localize mode)**: §2 + §3 + §5 문체 규칙 + localization-brief-{lang}.md 참조
3. **native-reviewer**: §2 용어 일관성 검증 + §5 문체 위반 탐지
4. **feedback-sync**: 새 용어 피드백 → 이 파일 §2에 추가 → 전 번역 파일에 전파
