# Translation Guide — Homepage Factory

## 지원 언어
- `en` — English (원문, 번역 대상 아님)
- `ko` — 한국어
- `ja` — 日本語
- `de` — Deutsch

## 톤 & 스타일

| 항목 | 규칙 |
|------|------|
| 문체 | 전문적이고 간결. 마케팅 과장 금지. |
| 경어 | ko: 합니다체, ja: です/ます체, de: Sie 호칭 |
| 문장 길이 | 원문과 유사하게 유지. 불필요한 부연 금지. |
| 수치/단위 | 원문 그대로 유지 (0.12 seconds, 500 documents 등) |
| 약어 | AI, LLM, API, VPC, SLA 등 기술 약어는 번역하지 않음 |

## 번역 금지 용어 (모든 언어에서 영어 원문 유지)

| 용어 | 이유 |
|------|------|
| LLM Capsule | 제품명 |
| CUBIG | 회사명 |
| SynTitan, DTS, SynData, SynConnect | CUBIG 제품명 |
| Encapsulation / Encapsulate | LLM Capsule 핵심 기술 용어 |
| Restoration / Restore | LLM Capsule 핵심 기술 용어 |
| Proof of Value (PoV) | 영업 프로세스 고유명 |
| AWS Marketplace | 서비스명 |
| ISO 27001, ISO 42001, GS Certification | 인증 명칭 |
| Request PoV, Talk to an Architect | CTA 버튼 라벨 (원문 유지) |
| ChatGPT, Claude, Gemini | 외부 제품명 |

## 번역 주의 용어

| English | ko | ja | de |
|---------|----|----|-----|
| AI enablement data layer | AI 활성화 데이터 레이어 | AIイネーブルメント・データレイヤー | AI-Enablement-Datenschicht |
| enterprise AI adoption | 기업 AI 도입 | 企業AIの導入 | KI-Einführung im Unternehmen |
| sensitive data | 민감 데이터 | 機密データ | sensible Daten |
| structure-preserving | 구조 보존 | 構造保持 | strukturerhaltend |
| air-gapped | 망분리 | エアギャップ | Air-Gap |
| on-premise | 온프레미스 | オンプレミス | On-Premise |
| data exposure | 데이터 노출 | データ漏洩 | Datenexposition |
| compliance | 컴플라이언스 | コンプライアンス | Compliance |
| document processing | 문서 처리 | ドキュメント処理 | Dokumentenverarbeitung |

## TSX COPY 객체 구조

```typescript
const COPY = {
  en: {
    title: "English title",
    description: "English description",
  },
  ko: {
    title: "한국어 제목",
    description: "한국어 설명",
  },
  ja: {
    title: "日本語タイトル",
    description: "日本語の説明",
  },
  de: {
    title: "Deutscher Titel",
    description: "Deutsche Beschreibung",
  },
}
```

## 품질 기준
- 원문의 의미를 정확히 전달 (의역 허용, 창작 금지)
- 기술 용어의 경우 각 언어별로 존재하는 전문 용어를 사용할 것.
- 브랜드 용어 일관성 유지
- 각 언어의 자연스러운 어순/표현을 사용. 만연체가 아니라 되도록 간결한 문체를 사용.
- 원어민에게 자연스럽게 느껴지도록 번역.
- 한 페이지 내에서의 흐름이 자연스럽도록 문장을 운영함.
- HTML 태그, CSS 클래스, 변수명 등 코드는 절대 번역하지 않음