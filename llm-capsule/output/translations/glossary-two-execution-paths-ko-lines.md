# glossary/two-execution-paths — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Two Execution Paths
두 가지 실행 경로

External approved LLM — or on-prem local lightweight model. Policy decides per workflow.
외부 승인 LLM — 또는 온프레미스 로컬 경량 모델. 워크플로우별로 정책이 결정합니다.

GLOSSARY
GLOSSARY

## Section 02: Definition Block

Definition
정의

Two execution paths in the AI enablement data layer. Path A sends capsule data to an external approved LLM with no raw operational data exposure. Path B runs a small private lightweight model entirely inside the enterprise environment with zero external transmission. Selection is policy-driven per workflow.
데이터 레이어가 지원하는 두 가지 실행 경로입니다. Path A는 원본 운영 데이터 노출 없이 캡슐 데이터를 외부 승인 LLM으로 전송합니다. Path B는 소규모 전용 경량 모델을 기업 환경 내부에서 완전히 실행하며 외부 전송이 전혀 없습니다. 경로 선택은 워크플로우별 정책으로 결정됩니다.

## Section 03: Body HTML

<h2>정의</h2>

<p>데이터 레이어는 워크플로우 내 모델 단계에서 <strong>두 가지 실행 경로</strong>를 지원합니다:</p>

<ul>
<li><strong>Path A — 캡슐 데이터만으로 외부 승인 LLM 사용.</strong> 캡슐이 승인된 외부 엔드포인트(ChatGPT, Claude, Gemini, Perplexity 또는 임의의 LLM API)로 전송됩니다. 원본 운영 데이터는 기업 외부로 나가지 않습니다.</li>
<li><strong>Path B — 온프레미스 로컬 경량 모델.</strong> 소규모 전용 모델이 기업 환경 내부에서 완전히 실행됩니다. 외부 전송은 전혀 없습니다.</li>
</ul>

<h2>경로별 사용 기준</h2>

<table>
<thead><tr><th>항목</th><th>Path A</th><th>Path B</th></tr></thead>
<tbody>
<tr><td>외부 전송 허용</td><td>예 (캡슐만)</td><td>아니오</td></tr>
<tr><td>망분리 네트워크</td><td>—</td><td>필수</td></tr>
<tr><td>최신 모델 성능</td><td>예</td><td>로컬 모델 성능에 한정</td></tr>
<tr><td>규제 대응 수준</td><td>"원본 데이터 노출 없음"</td><td>"Zero external exposure"</td></tr>
</tbody>
</table>

<h2>경로 선택</h2>

<p>워크플로우별 정책으로 결정됩니다. 동일 기업 내 서로 다른 워크플로우가 각각 다른 경로를 사용할 수 있습니다. 거버넌스는 요청별·워크플로우별·정책별로 적용된 경로를 기록합니다.</p>

<h2>왜 하나가 아닌 두 가지인가</h2>

<p>단일 경로는 단일 규제 기준을 강제합니다. 통신사·병원·OT 운영사·방산 업체는 동일 조직 내에서 여러 규제 프로파일을 동시에 운용하는 경우가 많습니다. 두 가지 경로가 있어야 거버넌스가 워크플로우에 맞는 경로를 적용할 수 있습니다.</p>

<h2>참조 문장</h2>

<blockquote>모델은 단일 결정이 아닙니다. 단일 거버넌스 아래 놓인 두 가지 경로입니다. 규제 대상 조직이 하나의 규제 기준에 묶이지 않고 데이터 레이어를 도입할 수 있는 이유가 바로 이것입니다.</blockquote>

## Section 04: Related Terms

Pillar guide: On-prem LLM execution path
필라 가이드: 온프레미스 LLM 실행 경로

State vault for restoration
복원용 상태 저장소

AI enablement data layer
데이터 레이어
