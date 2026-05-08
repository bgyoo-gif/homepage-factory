# glossary/differential-privacy — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Differential Privacy
차등 프라이버시

A mathematical framework that bounds the contribution of any single record to a derived output.
단일 레코드가 파생 출력에 기여하는 범위를 수학적으로 제한하는 프레임워크입니다.

GLOSSARY
GLOSSARY

---

## Section 02: Definition

Definition
정의

Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The "almost" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.
차등 프라이버시(DP)는 데이터셋을 연산할 때 개별 레코드를 보호하는 수학적 프레임워크입니다. 2006년 Cynthia Dwork과 동료들이 제안한 이 개념은, 특정 레코드의 포함 여부와 관계없이 분석 결과가 거의 동일하다면 해당 분석은 프라이버시를 보장한다는 직관을 수식으로 정의합니다. "거의"의 정도는 엡실론(epsilon)으로 수치화되며 — 엡실론이 작을수록 프라이버시는 강해지고 유용성은 낮아집니다.

---

## Section 03: Article Body

<h2>Mechanism</h2>
<h2>메커니즘</h2>

<p>Implemented by adding calibrated noise (commonly Laplace or Gaussian) to outputs, queries, or transformations. Noise scale is determined by the sensitivity of the function and the privacy budget. The result is a quantitative bound on what an attacker could learn about any individual record from the output.</p>
<p>출력값, 쿼리, 또는 변환 결과에 보정된 노이즈(주로 라플라스 또는 가우시안)를 추가하는 방식으로 구현됩니다. 노이즈의 크기는 함수의 민감도와 프라이버시 예산에 따라 결정됩니다. 그 결과, 공격자가 출력으로부터 개별 레코드에 대해 알아낼 수 있는 범위를 수치로 제한합니다.</p>

<h2>Application in the AI enablement data layer</h2>
<h2>데이터 레이어 내 적용</h2>

<p>In LLM Capsule, differential-privacy-based protection is applied during the structure-preserving encapsulation step. The capsule (AI-ready context) carries the differential-privacy guarantee on top of field-level tokenization. This addresses inference risks that field-level masking alone cannot bound — particularly for operational data where structure, sequence, and aggregate patterns themselves carry sensitive information.</p>
<p>LLM Capsule에서 차등 프라이버시 기반 보호는 문서 구조 보존 캡슐화 단계에서 적용됩니다. 캡슐(AI 활용 컨텍스트)은 필드 수준 토큰화 위에 차등 프라이버시 보장을 추가로 탑재합니다. 이를 통해 필드 수준 마스킹만으로는 제한할 수 없는 추론 위험을 차단합니다 — 특히 구조, 순서, 집계 패턴 자체가 민감 정보를 담고 있는 운영 데이터에서 중요합니다.</p>

<h2>What it is not</h2>
<h2>이것이 아닌 것</h2>

<li>Not a legal or compliance guarantee. It is a technical framework with a tunable parameter.</li>
<li>법적·규제적 보장이 아닙니다. 조정 가능한 파라미터를 가진 기술적 프레임워크입니다.</li>

<li>Not a yes/no guarantee. Privacy and utility trade off via the privacy budget.</li>
<li>이분법적 보장이 아닙니다. 프라이버시와 유용성은 프라이버시 예산을 통해 상충됩니다.</li>

<li>Not a substitute for governance, audit, or policy.</li>
<li>거버넌스, 감사, 정책의 대체재가 아닙니다.</li>

<h2>Why it matters here</h2>
<h2>이것이 중요한 이유</h2>

<p>Operational data — network logs, configurations, OT manifests, clinical workflows — leaks through patterns, not just identifiers. Differential privacy is the framework that lets enterprise governance reason quantitatively about that leakage risk and enforce a budget per workflow.</p>
<p>운영 데이터 — 네트워크 로그, 설정 파일, OT 매니페스트, 임상 워크플로우 — 는 식별자만이 아니라 패턴을 통해 유출됩니다. 차등 프라이버시는 기업 거버넌스가 해당 유출 위험을 수치적으로 판단하고, 워크플로우별 예산을 집행할 수 있게 하는 프레임워크입니다.</p>

<h2>Acceptable claims</h2>
<h2>사용 가능한 표현</h2>

<li>"Privacy-preserving with a defined risk-reduction scope"</li>
<li>"정의된 위험 감소 범위 내에서 프라이버시를 보존합니다"</li>

<li>"Bounded inference risk under the policy's privacy budget"</li>
<li>"정책의 프라이버시 예산 내에서 추론 위험이 제한됩니다"</li>

<li>"Differential-privacy-based encapsulation"</li>
<li>"차등 프라이버시 기반 캡슐화"</li>

<h2>Claims to avoid</h2>
<h2>사용을 피해야 할 표현</h2>

<li>"Mathematically impossible to reconstruct"</li>
<li>"수학적으로 복원이 불가능합니다"</li>

<li>"100% safe"</li>
<li>"100% 안전합니다"</li>

<li>"GDPR guaranteed"</li>
<li>"GDPR이 보장됩니다"</li>

<li>"Zero risk"</li>
<li>"위험이 전혀 없습니다"</li>

---

## Section 04: Related Terms

Related terms
관련 용어

Pillar guide: Differential privacy for enterprise AI
핵심 가이드: 기업 AI를 위한 차등 프라이버시

Structure-preserving encapsulation
문서 구조 보존 캡슐화

AI enablement data layer
데이터 레이어
