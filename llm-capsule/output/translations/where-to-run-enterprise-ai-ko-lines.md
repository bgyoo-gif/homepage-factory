# where-to-run-enterprise-ai — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

Where to Run Enterprise AI: External, On-Premise, or Both
엔터프라이즈 AI를 어디서 실행할 것인가: 외부, on-premise, 또는 둘 다

The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.
엔터프라이즈 AI의 배포 방식 결정은 이분법적이지 않습니다. 외부 LLM, on-premise 모델, hybrid 토폴로지는 각각 특정 워크플로우 유형에 맞으며, 대부분의 기업은 결국 하나 이상이 필요하게 됩니다. 의사결정 프레임워크입니다.

AI Architecture
AI Architecture

~12 min read
~12분 읽기

May 2026
2026년 5월

## Section 02: TL;DR

TL;DR
TL;DR

The deployment question isn't "external or on-premise" — it's which workflows belong where. A typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints; forcing them into a single bucket produces architecture that's wrong for some of them. External LLMs offer frontier capability with contractual (not architectural) protection; on-premise solves data location by definition but lags the frontier by 12–18 months and is dominated by ongoing team cost. Hybrid isn't a compromise — it's the architecturally honest answer. Four questions (sensitivity, capability requirement, constraint structure, capability tolerance) sort workflows into four categories with different deployment fits. Hybrid works when four components are in place: a unified integration layer, policy-driven routing, a transformation layer for the external path, and shared governance. The failure modes of all-external (shadow AI) and all-on-premise (capability gap) share the same structure — a single-path policy that doesn't account for workflow heterogeneity gets bypassed in the workflows that don't fit. The realistic deployment for most regulated enterprises has both Path A (external + transformation) and Path B (on-premise) under one policy and audit framework.
배포 방식의 질문은 "외부냐 on-premise냐"가 아닙니다. 어떤 워크플로우가 어디에 속하는가의 문제입니다. 일반적인 기업은 민감도, 역량 요구사항, 제약 조건이 각각 다른 수십 개의 워크플로우를 보유합니다. 이를 하나의 버킷으로 강제하면 일부 워크플로우에 맞지 않는 아키텍처가 만들어집니다. 외부 LLM은 아키텍처적이 아닌 계약적 보호와 함께 frontier 역량을 제공합니다. on-premise는 정의상 데이터 위치 문제를 해결하지만 frontier보다 12~18개월 뒤처지며, 지속적인 팀 운영 비용이 지배적입니다. hybrid는 타협이 아닙니다. 아키텍처적으로 정직한 답입니다. 네 가지 질문(민감도, 역량 요구사항, 제약 구조, 역량 저하 허용 범위)이 워크플로우를 배포 방식이 다른 네 가지 카테고리로 분류합니다. hybrid가 작동하려면 네 가지 구성 요소가 갖춰져야 합니다. 통합 통합 레이어, 정책 기반 라우팅, 외부 경로를 위한 변환 레이어, 그리고 공유 거버넌스입니다. 전체 외부(shadow AI)와 전체 on-premise(역량 격차)의 실패 패턴은 동일한 구조를 공유합니다. 워크플로우 이질성을 고려하지 않는 단일 경로 정책은 맞지 않는 워크플로우에서 우회됩니다. 대부분의 규제 기업에 현실적인 배포는 하나의 정책과 감사 프레임워크 하에 Path A(외부 + 변환)와 Path B(on-premise) 모두를 포함합니다.

## Section 03: Article Body

<h2>1. 결정은 이분법적이지 않습니다 — 이분법으로 만드는 관점 자체가 문제입니다</h2>
<p>초기의 열기가 가라앉은 후 엔터프라이즈 AI 프로그램이 처음 마주치는 진지한 질문은 모델을 실제로 어디서 실행할 것인가입니다. 논의는 빠르게 양극화되는 경향이 있습니다. 보안팀은 on-premise를 주장합니다. 데이터를 내부에 유지하고 국경 간 이전 문제를 없애자고 합니다. 제품팀은 외부를 주장합니다. frontier 모델은 내부 모델이 할 수 없는 것을 하며, 뒤처지는 것이 통제된 위험보다 더 위험하다고 합니다. 플랫폼팀은 가장 빨리 구축할 수 있는 것을 주장합니다. 그리고 대부분의 조직에서, 누군가가 <strong>세 가지 입장이 서로 다른 워크플로우를 설명한다</strong>는 것을 알아채기까지 몇 달 동안 이 삼각형을 맴돕니다. 올바른 답은 아마도 각각의 일부일 것입니다.</p>
<p>대부분의 엔터프라이즈 AI 배포 논의는 하나의 질문에서 시작합니다. <em>외부 LLM을 사용할 것인가, 아니면 자체 모델을 실행할 것인가?</em> 이 관점은 답이 회사 전체에 균일하게 적용된다고 가정합니다. <strong>그렇지 않습니다.</strong></p>
<p>일반적인 기업은 AI가 유용할 수십 개의 워크플로우를 보유합니다. 그 중 일부 — 마케팅 카피 작성, 공개 문서 요약, 내부 교육 콘텐츠 생성 — 는 의미 있는 민감도 제약이 없습니다. 데이터는 어디로 보내도 무방합니다. 어디에 호스팅되든 가장 역량 있는 모델이 올바른 선택입니다. 이를 처리하기 위해 내부 인프라를 운영해야 할 운영상의 이유가 없습니다.</p>
<p>동일한 기업 내 다른 워크플로우들 — 고객 서비스 티켓 처리, 운영 로그 분석, 임상 노트 작성, 대출 신청 검토 — 은 계약적 데이터 위치 약정부터 섹터별 데이터 자세, 무엇을 어디로 보낼 것인가에 대한 내부 거버넌스까지 다양한 제약 하에 있습니다. 마케팅 카피에는 괜찮은 모델이 이것들에는 적합하지 않습니다. <strong>이러한 워크플로우에 대한 선택은 진짜입니다.</strong></p>
<p>세 번째 카테고리 — 기밀 방위 작전, 합법적 감청 데이터, 특정 의료 시나리오 — 는 안전장치에 관계없이 어떠한 외부 엔드포인트도 허용하지 않는 제약 하에 있습니다. 이러한 워크플로우에 대한 선택도 실제이지만, 그것은 다른 선택입니다.</p>
<p>이 세 가지 카테고리를 하나의 결정인 것처럼 취급하면 잘못된 아키텍처가 만들어집니다. 쉬운 워크플로우를 과잉 보호하거나(비례적 가치를 제공하지 않으면서 운영 노력이 드는 내부 인프라에서 실행), 어려운 워크플로우를 충분히 보호하지 못합니다(그것이 회사의 "AI 전략"이기 때문에 외부 엔드포인트로 보냄). <strong>현실적인 답은 워크플로우 카테고리마다 다른 결정을 내리고, 그 결정들이 공존할 수 있는 인프라를 운영하는 것입니다.</strong></p>

<h2>2. 외부 LLM — 실제로 잘하는 것과 한계</h2>
<p>외부 LLM의 타당성은 명확하며 정확하게 이해할 가치가 있습니다. frontier 모델들 — GPT-5급 시스템, Claude Opus급, Gemini Ultra급 — 은 어떤 기업도 내부 인프라로는 따라잡을 수 없는 역량 수준에서 작동합니다. 전체 문서 포트폴리오를 처리하는 컨텍스트 윈도우를 가집니다. 소형 모델이 접근할 수 없는 품질로 복잡한 구조를 추론합니다. 기업이 재학습 비용을 지불하지 않아도 몇 달마다 더 나아집니다. <strong>역량이 중요한 워크플로우에서 이것은 미미한 이점이 아닙니다. 다른 카테고리의 시스템입니다.</strong></p>
<p>비용 측면도 솔직하게 살펴볼 가치가 있습니다. 외부 LLM은 벤더가 운영하는 API를 통해 접근하며, 모델은 벤더의 인프라, 벤더의 데이터 센터에서, 벤더의 운영 통제 하에 실행됩니다. 기업은 해당 엔드포인트에 데이터를 보내고 응답을 받습니다. 벤더의 계약적 약정 — 데이터 처리 계약, 지역 엔드포인트, 삭제 정책 — 은 벤더가 데이터로 할 것과 하지 않을 것을 설명합니다. <strong>벤더의 호스트 국가 법률이 다른 당사자에게 허용할 수 있는 것은 설명하지 않습니다.</strong></p>
<p>데이터가 민감하지 않은 워크플로우에서 이것은 문제가 되지 않습니다. 데이터는 민감하지만 아키텍처 선택(지역 엔드포인트, 전송 전 변환, 고객 제어 매핑)을 통해 데이터 위치 제약을 충족할 수 있는 워크플로우에서는 해결 가능합니다. 이 접근 방식에 대한 더 광범위한 설명에서 방법을 다룹니다.</p>
<p>데이터가 민감하고 <em>더불어</em> 어떻게 변환되더라도 데이터의 어떤 버전도 외부 엔드포인트로 보낼 수 없다는 제약이 있는 워크플로우에서 외부 LLM은 선택지가 아닙니다. 일부 워크플로우는 실제로 이 카테고리에 해당합니다. <strong>오류는 민감한 워크플로우 전부가 그렇다고 가정하는 것입니다.</strong></p>

<h2>3. On-Premise LLM — 강점과 취약한 부분</h2>
<p>내부 인프라에서 모델을 실행하는 타당성도 언뜻 보면 명확합니다. 데이터는 절대 외부로 나가지 않습니다. 국경 간 이전에 관한 계약적 질문은 아예 발생하지 않습니다. 절대적인 데이터 위치 제약 하의 워크플로우 — 방위, 특정 규제 의료 카테고리, 특정 금융 거래 세그먼트 — 에서 이것은 유일한 선택이며, 진지하게 고려할 가치가 있습니다.</p>
<p>강점은 실제입니다.</p>
<ul>
  <li><strong>데이터 위치는 정의상 해결됩니다.</strong> 모델은 데이터가 있는 곳에서 실행됩니다. 이전 문제는 발생하지 않습니다. 기업이 운영 데이터를 정의된 경계 내에 유지하도록 구속하는 섹터별 약정 하의 워크플로우에서 이것은 제약에 깔끔하게 매핑됩니다.</li>
  <li><strong>운영 통제는 완전합니다.</strong> 모델은 기업 자체의 변경 관리 프로세스 하에 튜닝, 파인튜닝, 평가, 모니터링, 롤백될 수 있습니다. 기업이 승인하지 않은 모델 업데이트를 하는 벤더가 없습니다.</li>
  <li><strong>레이턴시를 예측 가능하게 만들 수 있습니다.</strong> 기업 자체 네트워크에서 실행되는 모델은 외부 엔드포인트로의 왕복을 피할 수 있으며, 일부 실시간 워크플로우에서 중요합니다.</li>
</ul>
<p>비용도 실제이며, 프로덕션 AI 인프라를 운영해본 적 없는 팀에게는 과소평가되는 경향이 있습니다.</p>
<ul>
  <li><strong>모델 역량이 뒤처집니다.</strong> 기업이 실제로 호스팅할 수 있는 오픈소스 모델들 — Llama, Mistral, Qwen 및 그 후속 모델들 — 은 좋은 모델입니다. 그러나 어느 시점에서도 기업이 보통 중요하게 여기는 차원에서 frontier 외부 모델만큼 역량 있지 않습니다. 복잡한 문서에 대한 추론, 익숙하지 않은 형식 처리, 긴 컨텍스트 분석. 격차는 일반적으로 12~18개월이며 시간이 지나면서 줄어들 수 있지만 없어지지 않습니다.</li>
  <li><strong>운영 비용은 크고 지속적입니다.</strong> 프로덕션에서 진지한 모델을 실행한다는 것은 GPU 인프라, 모델 서빙 인프라(vLLM, TGI 또는 유사한 것), 평가 파이프라인, 모니터링, 그리고 이 모든 것을 계속 운영하는 방법을 아는 팀을 의미합니다. <strong>비용은 GPU가 아니라 팀에 의해 지배됩니다.</strong> 엔터프라이즈 서빙을 위한 소규모 AI 인프라 팀은 5~10명의 엔지니어입니다. 진지한 팀은 그 두 배입니다. 모델 자체는 저렴한 부분입니다.</li>
  <li><strong>취약성은 업데이트에서 나타납니다.</strong> 몇 달마다 frontier 외부 모델이 비즈니스팀의 기대를 바꾸는 방식으로 도약합니다. 내부 모델은 아무리 잘 튜닝되어도 도약하지 않습니다. 공개 논의에서 <em>"AI가 할 수 있는 것"</em>과 기업에서 <em>"우리 내부 AI가 할 수 있는 것"</em> 사이의 격차가 커지고, 그에 대해 무언가를 해야 한다는 압박도 함께 커집니다.</li>
</ul>
<p>제약이 절대적이고 — 워크플로우가 역량 있는 소형 모델로 충분할 만큼 제한적인 경우 — <strong>on-premise가 올바른 답입니다</strong>. 제약이 실제이지만 절대적이지 않고 AI 역량이 중요한 워크플로우에서 <strong>on-premise만으로는 작동하지만 성능이 저하되는 시스템이 만들어집니다</strong>.</p>

<h2>4. Hybrid — 타협이 아니라 아키텍처적으로 정직한 답</h2>
<p>세 번째 옵션 — 일부 워크플로우는 외부 엔드포인트로, 일부는 내부 인프라에서 실행하는 hybrid 토폴로지 운영 — 은 엔터프라이즈 논의에서 너무 빨리 기각됩니다. 기각은 보통 두 가지 형태 중 하나를 취합니다.</p>
<p>첫 번째는 운영 측면입니다. <em>"둘 다 실행하는 것이 하나를 실행하는 것보다 더 복잡하므로 하나를 선택해야 한다."</em> 이것은 사실이지만 요점을 놓칩니다. 각각을 필요로 하는 워크플로우가 서로 다른 워크플로우라면 둘 다 실행하는 것이 더 복잡하지 않습니다. hybrid 토폴로지의 복잡성은 어떤 모델이 어떤 워크플로우를 처리할지 결정하는 라우팅 레이어에 있습니다. <strong>그 라우팅 레이어는 선택사항이 아닙니다</strong> — 순수 외부 또는 순수 on-premise 기업도 라우팅 레이어가 있으며, 단지 사소할 뿐입니다 — 라우팅 레이어가 존재하면 두 개의 백엔드를 지원하는 것은 점진적 복잡성이지 범주적 복잡성이 아닙니다.</p>
<p>두 번째는 거버넌스입니다. <em>"AI에 대한 하나의 정책을 가져야 한다."</em> 이것도 사실이며 요점을 놓칩니다. 단일 정책은 <em>"모든 AI가 외부에서 실행된다"</em>나 <em>"모든 AI가 on-premise에서 실행된다"</em>가 아닙니다. 단일 정책은 <em>"X 클래스의 워크플로우는 이러한 안전장치와 함께 외부에서 실행됩니다. Y 클래스의 워크플로우는 on-premise에서 실행됩니다. 라우팅은 시행되고 감사됩니다."</em>입니다. 그것은 일관된 거버넌스 자세이며, 계획했든 하지 않았든 대부분의 대기업이 결국 도달하는 자세입니다.</p>
<p>hybrid를 아키텍처적으로 정직한 답으로 만드는 것은 <strong>엔터프라이즈 AI 워크로드의 실제 구조와 일치한다</strong>는 점입니다. 일부 워크플로우는 frontier 역량에서 크게 이점을 얻고 변환 기반 안전장치를 허용합니다. 일부 워크플로우는 안전장치에 관계없이 외부 엔드포인트를 배제하는 제약을 가집니다. 모든 워크플로우를 어느 한 버킷으로 강제하면 일부에 맞지 않는 시스템이 만들어집니다. hybrid는 각 워크플로우가 필요한 배포 방식을 얻을 수 있게 합니다.</p>
<p>hybrid의 어려운 부분은 두 개의 백엔드를 실행하는 것이 아닙니다. <strong>워크플로우가 가야 할 곳으로 가도록, 정책이 무시되지 않고 시행되도록, 나중에 팀이 결정을 방어할 수 있을 만큼 감사 추적이 명확하도록 라우팅 결정을 충분히 정밀하게 만드는 것입니다.</strong> 그것은 인프라 문제가 아니라 설계 문제입니다.</p>

<h2>5. 워크플로우를 위한 의사결정 프레임워크</h2>
<p>결정을 구체적으로 만드는 유용한 방법은 각 워크플로우를 네 가지 질문에 대해 평가하는 것입니다.</p>
<ol>
  <li><strong>워크플로우가 처리하는 데이터의 민감도는 무엇입니까?</strong> 기업 내 어떤 데이터의 최대 민감도가 아니라 이 워크플로우가 필요로 하는 특정 데이터의 민감도입니다. 마케팅 카피와 고객 기록은 같은 비즈니스 부서가 소유하더라도 서로 다른 워크플로우입니다.</li>
  <li><strong>AI 작업의 역량 요구사항은 무엇입니까?</strong> 일부 작업 — 수신 티켓을 열 개 카테고리로 분류, 간단한 엔터티 추출, 형식 변환 — 은 소형 모델에서 잘 작동합니다. 일부 작업 — 백 페이지 계약서에 대한 추론, 이질적인 로그에서 근본 원인 합성, 임상 내러티브 작성 — 은 frontier 역량이 필요합니다.</li>
  <li><strong>제약 구조는 무엇입니까?</strong> 제약이 절대적(데이터의 어떤 버전도 나갈 수 없음)입니까, 아니면 조건부(데이터를 적절히 변환하면 나갈 수 있음)입니까? 외부 약정(고객 계약, 섹터 약정)에 의해 이끌어지는 것입니까, 아니면 내부 거버넌스(회사 자체의 데이터 자세)에 의한 것입니까?</li>
  <li><strong>워크플로우의 역량 저하 허용 범위는 무엇입니까?</strong> 일부 워크플로우는 frontier보다 12개월 뒤처진 모델로도 가치를 제공합니다. 일부 워크플로우는 그 자체가 비즈니스가 구축하려는 차별화 역량이며, 모델 격차가 바로 그 격차입니다.</li>
</ol>
<p>답은 대략적인 카테고리로 묶입니다.</p>
<table>
  <thead>
    <tr>
      <th>워크플로우 카테고리</th>
      <th>예시</th>
      <th>배포 방식</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>낮은 민감도, 높은 역량 요구사항, 제약 없음</td>
      <td>마케팅 카피, 공개 문서 요약, 내부 교육 콘텐츠</td>
      <td>외부 LLM, 변환 없음</td>
    </tr>
    <tr>
      <td>민감하지만 변환 가능, 높은 역량 요구사항, 조건부 제약</td>
      <td>고객 서비스 티켓, 운영 로그, 계약 검토, 임상 노트</td>
      <td>외부 LLM + 변환 레이어 (Path A)</td>
    </tr>
    <tr>
      <td>민감함, 역량 허용 범위 있음, 절대적 제약</td>
      <td>방위 워크플로우, 특정 기밀 카테고리, 합법적 감청</td>
      <td>On-premise 모델 (Path B)</td>
    </tr>
    <tr>
      <td>민감함, 높은 역량 요구사항, 절대적 제약</td>
      <td>가장 어려운 카테고리 — 필요한 것과 허용되는 것 사이의 격차</td>
      <td>작업 범위 축소, on-premise 역량 대기, 또는 격차 수용</td>
    </tr>
  </tbody>
</table>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" aria-labelledby="decision-framework-title decision-framework-desc">
      <title id="decision-framework-title">워크플로우 의사결정 프레임워크</title>
      <desc id="decision-framework-desc">워크플로우 제약 구조(조건부 대 절대)와 역량 요구사항(낮음 대 frontier)을 두 축으로 하는 2x2 행렬로, 각 조합에 대한 배포 방식을 보여주는 네 개의 사분면.</desc>

      <line x1="120" y1="420" x2="120" y2="50" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="60" y="240" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2" transform="rotate(-90, 60, 240)">역량 요구사항</text>
      <text x="100" y="70" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Frontier</text>
      <text x="100" y="415" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">낮음</text>

      <line x1="120" y1="420" x2="900" y2="420" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="510" y="465" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">제약 구조</text>
      <text x="320" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">낮음 또는 조건부</text>
      <text x="700" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">절대적</text>

      <rect x="140" y="60" width="350" height="160" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="160" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">외부 LLM + 변환 (Path A)</text>
      <text x="160" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">고객 서비스 티켓 · 운영</text>
      <text x="160" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">로그 · 계약 검토 · 임상 노트</text>
      <text x="160" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">민감하지만 변환 가능; 제약은</text>
      <text x="160" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">아키텍처 선택을 통해 충족 가능.</text>

      <rect x="530" y="60" width="350" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="550" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">가장 어려운 카테고리 — 명확한 답 없음</text>
      <text x="550" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">고위험 방위 분석 · frontier 추론이</text>
      <text x="550" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">필요한 민감 의료</text>
      <text x="550" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">소형 모델에 맞게 작업 범위 축소,</text>
      <text x="550" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">또는 역량 격차 수용.</text>

      <rect x="140" y="245" width="350" height="160" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="160" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">외부 LLM, 변환 없음</text>
      <text x="160" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">마케팅 카피 · 공개 문서</text>
      <text x="160" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">요약 · 내부 교육 콘텐츠</text>
      <text x="160" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">의미 있는 민감도 제약 없음;</text>
      <text x="160" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">데이터는 어디로 보내도 무방.</text>

      <rect x="530" y="245" width="350" height="160" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
      <text x="550" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">On-premise 모델 (Path B)</text>
      <text x="550" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">방위 워크플로우 · 기밀</text>
      <text x="550" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">카테고리 · 합법적 감청 데이터</text>
      <text x="550" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">역량 있는 소형 모델로 충분히</text>
      <text x="550" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">제한된 워크플로우.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>두 축 — 역량 요구사항과 제약 구조 — 으로 워크플로우를 플롯하면 네 가지 배포 방식이 나옵니다. 대부분의 기업은 모든 사분면에 워크플로우를 가집니다.</strong></figcaption>
</figure>

<p><strong>대부분의 기업은 자사 워크플로우 목록이 네 가지 카테고리 전부에 걸쳐 있음을 발견합니다. 배포 아키텍처는 네 가지 모두를 처리해야 하며, 이는 기본적으로 hybrid를 의미합니다.</strong></p>

<h2>6. 실제에서 Hybrid가 어떻게 보이는가</h2>
<p>hybrid 배포는 <em>"여기에 모델 하나, 저기에 모델 하나"</em>가 아닙니다. <strong>라우팅 결정 — 어떤 백엔드가 어떤 요청을 처리하는가 — 이 정책 기반이고, 감사 가능하며, 일관된</strong> 통합 아키텍처입니다.</p>
<p>이를 가능하게 하는 구성 요소들입니다.</p>
<p><strong>6.1 통합 통합 레이어</strong></p>
<p>워크플로우는 외부 엔드포인트나 on-premise 모델을 직접 호출하지 않습니다. 라우팅을 처리하는 통합 레이어를 호출합니다. 이는 <strong>워크플로우가 백엔드 선택 변경으로부터 보호된다</strong>는 것을 의미합니다. 새로운 제약, 벤더 변경, 또는 정책 업데이트로 인해 워크플로우를 외부에서 on-premise로 이동해야 하는 경우, 워크플로우는 변경되지 않습니다. 라우팅 규칙이 변경됩니다.</p>
<p><strong>6.2 정책 기반 라우팅</strong></p>
<p>워크플로우가 어디서 실행되는지에 대한 결정은 워크플로우 자체 코드가 아닌 정책으로 인코딩됩니다. <em>"EU 지역에서 customer-service로 태그된 워크플로우는 캡슐화 레이어가 있는 외부 엔드포인트로 갑니다. classified로 태그된 워크플로우는 on-premise 모델로 갑니다. marketing-content로 태그된 워크플로우는 변환 없이 외부 엔드포인트로 갑니다."</em> <strong>정책은 버전 관리되고 감사 가능합니다.</strong></p>
<p><strong>6.3 외부 경로를 위한 변환 레이어</strong></p>
<p>워크플로우가 외부 엔드포인트로 라우팅될 때, 민감 요소는 전송 전에 변환되고 응답 시 복원됩니다. <strong>동일한 변환 인프라는 라우팅 대상 외부 엔드포인트에 관계없이 작동합니다</strong> — 추상화는 특정 벤더가 아닌 백엔드에 대한 것입니다.</p>
<p><strong>6.4 공유 거버넌스</strong></p>
<p>감사 로그, 정책 관리, 접근 통제는 두 경로를 균일하게 커버합니다. <strong>팀은 외부용과 on-premise용으로 두 개의 거버넌스 프레임워크를 갖지 않습니다. 각 요청의 경로가 기록되는 하나를 가집니다.</strong></p>
<p>이 네 가지 구성 요소가 갖춰지면, <em>"이 워크플로우는 어디서 실행되어야 하는가"</em>라는 질문은 아키텍처 약정이 아닌 정책 결정이 됩니다. 워크플로우는 통합을 재작성하지 않고도 필요에 따라 경로 사이를 이동할 수 있습니다.</p>

<h2>7. 하나의 경로를 전체 답으로 취급할 때 무엇이 잘못되는가</h2>
<p>단일 배포 경로를 선택한 기업에서 일관되게 나타나는 두 가지 실패 패턴이 있습니다.</p>
<ul>
  <li><strong>전체 외부 조직.</strong> 외부 LLM이 전체 AI 전략이라고 결정한 기업은 정책이 허용하지 않는 워크플로우에 부딪히며, 두 가지 중 하나가 발생합니다. 해당 워크플로우가 AI를 받지 못하거나(회사가 AI가 가장 중요한 업무에서 뒤처짐), 워크플로우가 비공식 채널을 통해 AI를 받습니다 — 직원이 소비자 챗봇에 민감한 데이터를 붙여넣거나, 비즈니스 부서가 중앙 프로세스 외부에서 AI 도구를 구매하거나, 중앙 보안 검토 없이 벤더가 통합됩니다. <strong>shadow AI는 자사에 맞지 않는 워크플로우를 고려하지 않는 AI 전략의 예측 가능한 결과입니다.</strong></li>
  <li><strong>전체 on-premise 조직.</strong> 외부 LLM이 전반적으로 허용되지 않는다고 결정한 기업은 역량 격차에 부딪힙니다. 내부 모델은 일부 워크플로우에는 충분하고 다른 것들에는 그렇지 않습니다. 충분하지 않은 워크플로우는 저성과를 내거나(회사 경쟁자가 해당 작업에서 앞서 나감), 비즈니스 부서가 동일한 shadow 채널을 통해 정책을 우회합니다. <strong>전체 on-premise 자세의 규율은 보이는 것보다 유지하기 어렵습니다. 특히 frontier 외부 모델이 계속 발전함에 따라 더욱 그렇습니다.</strong></li>
</ul>
<p>두 실패 패턴은 동일한 구조를 공유합니다. <strong>엔터프라이즈 워크플로우의 이질성을 고려하지 않는 정책은 맞지 않는 워크플로우에서 우회되며, 그 우회는 명시적 경로보다 거버넌스하기 더 어렵습니다.</strong></p>

<h2>8. 이것이 이어지는 아키텍처</h2>
<p>대부분의 규제 기업에서, 이 질문들을 통해 도출되는 배포는 몇 가지 일관된 속성을 가집니다.</p>
<p>데이터 민감도가 요구하는 경우를 처리하는 변환 레이어를 통해 접근하는 외부 LLM 백엔드가 있습니다. 외부 엔드포인트가 실행 불가능한 워크플로우를 처리하는 on-premise 모델 — 보통 잘 선택된 소형 오픈소스 모델 — 이 있습니다. 정책에 따라 어떤 워크플로우가 어디로 가는지 결정하는 라우팅 레이어가 있습니다. 두 경로를 커버하는 통합 거버넌스 및 감사 프레임워크가 있습니다. <strong>그리고 이것이 완성된 상태가 아니라는 인식이 있습니다</strong> — 제약이 변하고, 새로운 외부 모델이 가용해지고, 새로운 on-premise 역량이 성숙하고, 비즈니스 자체 자세가 진화함에 따라 워크플로우는 경로 사이를 이동합니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="hybrid-architecture-title hybrid-architecture-desc">
      <title id="hybrid-architecture-title">Hybrid 배포 아키텍처 — Path A와 Path B</title>
      <desc id="hybrid-architecture-desc">엔터프라이즈 워크플로우가 정책 기반 라우팅을 가진 통합 통합 레이어로 흘러들어가 Path A(캡슐화 레이어를 통한 외부 LLM)와 Path B(on-premise 모델)로 분기되며, 두 경로를 커버하는 공유 거버넌스를 보여주는 다이어그램.</desc>

      <g>
        <rect x="40" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="140" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">마케팅 &amp; 공개 문서</text>
        <text x="140" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">낮은 민감도</text>

        <rect x="260" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="360" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">고객 운영 &amp; 임상</text>
        <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">민감하지만 변환 가능</text>

        <rect x="480" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="580" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">방위 &amp; 기밀</text>
        <text x="580" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">절대적 제약</text>

        <rect x="700" y="30" width="220" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="810" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">기타 워크플로우</text>
        <text x="810" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">다양한 민감도</text>
      </g>

      <g>
        <rect x="180" y="130" width="560" height="68" rx="10" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="200" y="154" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#9ca3af" letter-spacing="1.2">통합 통합 레이어</text>
        <text x="460" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#ffffff">정책 기반 라우팅</text>
        <text x="460" y="194" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#9ca3af" font-style="italic">버전 관리됨 · 시행됨 · 감사 가능</text>
      </g>

      <g>
        <rect x="40" y="248" width="420" height="120" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">PATH A · 외부 LLM + 캡슐화</text>

        <rect x="60" y="288" width="180" height="64" rx="6" fill="#ffffff" stroke="#5b4fe9" stroke-width="1"/>
        <text x="150" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">캡슐화 레이어</text>
        <text x="150" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">토큰화 · 구조</text>
        <text x="150" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">보존 · 복원</text>

        <rect x="260" y="288" width="180" height="64" rx="6" fill="#0f1130" stroke="#0f1130" stroke-width="1"/>
        <text x="350" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#ffffff">외부 frontier LLM</text>
        <text x="350" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">ChatGPT · Claude</text>
        <text x="350" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">Gemini · 기타</text>

      <g>
        <rect x="500" y="248" width="420" height="120" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="520" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">PATH B · ON-PREMISE 로컬 모델</text>

        <rect x="520" y="288" width="380" height="64" rx="6" fill="#ffffff" stroke="#0ea5a4" stroke-width="1"/>
        <text x="710" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">엔터프라이즈 인프라의 로컬 모델</text>
        <text x="710" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Llama · Mistral · Qwen — 파인튜닝됨</text>
        <text x="710" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">데이터는 경계를 벗어나지 않음</text>
      </g>

      <g>
        <rect x="40" y="394" width="880" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="416" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#b45309" letter-spacing="1.2">공유 거버넌스</text>
        <text x="480" y="423" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f1130">하나의 정책 · 하나의 감사 로그 · 두 경로를 커버하는 하나의 접근 통제 프레임워크</text>
      </g>

      <line x1="250" y1="368" x2="250" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="368" x2="710" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 2 · <strong>워크플로우는 정책에 따라 라우팅하는 통합 통합 레이어를 통해 흘러갑니다 — Path A(캡슐화를 통한 외부 LLM) 또는 Path B(on-premise 로컬 모델) — 공유 거버넌스 하에 모두.</strong></figcaption>
</figure>

<p><span class="wtre-product">LLM Capsule</span>은 단일 아키텍처의 일부로 두 경로를 모두 지원합니다. <strong>Path A</strong>는 기업 환경 내에서 토큰화, 구조 보존, 복원을 처리하는 캡슐화 레이어를 통해 워크플로우를 승인된 외부 LLM으로 라우팅합니다. <strong>Path B</strong>는 외부 엔드포인트가 선택지가 아닐 때 워크플로우를 on-premise 로컬 모델로 라우팅합니다. 동일한 캡슐화 레이어, 동일한 정책 프레임워크, 동일한 감사가 두 경로를 커버합니다. <strong>배포 결정은 회사를 위한 아키텍처 약정이 아닌 워크플로우별 정책 선택이 됩니다.</strong></p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>배포 방식의 결정은 이분법적이지 않습니다 — 서로 다른 워크플로우는 민감도, 역량 요구사항, 제약 조건이 다릅니다. 단일 경로 정책은 일부에 맞지 않습니다</li>
    <li>외부 LLM은 계약적(아키텍처적이 아닌) 보호와 함께 frontier 역량을 제공합니다 — 낮은 민감도 워크플로우에는 적합하고, 조건부 제약에는 변환 레이어로 해결 가능하며, 절대적 제약에는 제한됩니다</li>
    <li>on-premise는 정의상 데이터 위치를 해결하지만 frontier보다 12~18개월 뒤처집니다. 지배적 비용은 GPU가 아닌 팀(최소 5~10명의 엔지니어)입니다</li>
    <li>hybrid는 아키텍처적으로 정직한 답입니다 — 엔터프라이즈 워크로드의 실제 구조와 일치하며, 하나의 버킷으로 강제하지 않습니다</li>
    <li>네 가지 질문이 워크플로우를 네 가지 카테고리로 분류합니다. 민감도, 역량 요구사항, 제약 구조(절대적 대 조건부), 역량 저하 허용 범위</li>
    <li>작동하는 hybrid에는 네 가지 구성 요소가 필요합니다. 통합 통합 레이어, 정책 기반 라우팅, 외부 경로를 위한 변환 레이어, 공유 거버넌스</li>
    <li>전체 외부 조직은 shadow AI를 만들어냅니다. 전체 on-premise 조직은 역량 격차 우회 방법을 만들어냅니다 — 두 실패 패턴 모두 우회된 정책입니다</li>
    <li>하나의 정책 및 감사 프레임워크 하에 Path A(외부 + 캡슐화)와 Path B(on-premise 로컬)는 계획하든 하지 않든 대부분의 규제 기업이 도달하는 배포입니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>왜 배포 결정이 단순히 외부 또는 on-premise가 아닌가요?</h3>
<p>일반적인 기업은 민감도, 역량 요구사항, 제약 조건이 각각 다른 수십 개의 워크플로우를 가지기 때문입니다. 마케팅 카피와 고객 서비스 티켓은 같은 비즈니스 부서가 소유하더라도 서로 다른 워크플로우입니다. 이것들을 하나의 결정으로 취급하면 쉬운 워크플로우를 과잉 보호하거나(비례적 가치를 제공하지 않으면서 운영 노력이 드는 내부 인프라에서 실행), 어려운 것들을 충분히 보호하지 못합니다(그것이 회사의 "AI 전략"이기 때문에 외부 엔드포인트로 보냄). 현실적인 답은 워크플로우 카테고리마다 다른 결정입니다.</p>

<h3>외부 LLM이 실제로 잘하는 것은 무엇이고, 한계는 무엇입니까?</h3>
<p>frontier 외부 모델들(GPT-5급, Claude Opus급, Gemini Ultra급)은 어떤 기업도 내부적으로 따라잡을 수 없는 역량 수준에서 작동합니다 — 긴 컨텍스트 윈도우, 복잡한 문서 추론, 재학습 사이클 없이 정기적 개선. 역량이 중요한 워크플로우에서 이것은 다른 카테고리의 시스템입니다. 한계는 모델이 아키텍처적 보장이 아닌 벤더의 계약적 약정 하에 벤더의 인프라에서 실행된다는 것입니다. 안전장치에 관계없이 데이터 민감도가 외부 엔드포인트를 배제하는 워크플로우에서 외부 LLM은 선택지가 아닙니다.</p>

<h3>on-premise가 올바른 답인 경우는 언제입니까?</h3>
<p>제약이 절대적(방위, 특정 기밀 카테고리, 어떻게 변환되더라도 데이터의 어떤 버전도 나갈 수 없는 워크플로우)이고 역량 있는 소형 모델로 충분할 만큼 워크플로우가 제한적인 경우입니다. 강점은 실제입니다 — 데이터 위치는 정의상 해결되고, 운영 통제는 완전하며, 레이턴시를 예측 가능하게 만들 수 있습니다. 비용도 실제이며 과소평가되는 경향이 있습니다. frontier 모델 대비 12~18개월의 역량 지연, 팀(최소 5~10명의 엔지니어)에 의해 지배되는 지속적 운영 비용, 그리고 frontier가 도약하고 내부 모델이 그러지 못할 때의 취약성입니다.</p>

<h3>hybrid 토폴로지를 실행하는 것이 하나의 경로를 선택하는 것보다 더 복잡하지 않습니까?</h3>
<p>표면적으로만 그렇습니다. 각각을 필요로 하는 워크플로우가 서로 다른 워크플로우라면 — 실제로 그렇습니다 — 둘 다 실행하는 것이 더 복잡하지 않습니다. hybrid의 복잡성은 어떤 모델이 어떤 워크플로우를 처리할지 결정하는 라우팅 레이어에 있습니다. 그 라우팅 레이어는 선택사항이 아닙니다. 순수 외부 또는 순수 on-premise 기업도 하나를 가지며, 단지 사소할 뿐입니다. 라우팅 레이어가 존재하면 두 개의 백엔드를 지원하는 것은 점진적 복잡성이지 범주적 복잡성이 아닙니다. 어려운 부분은 워크플로우가 가야 할 곳으로 가도록, 정책이 시행되고 감사 추적이 명확하도록 라우팅 결정을 충분히 정밀하게 만드는 것입니다.</p>

<h3>어떤 워크플로우가 어디로 가는지 어떻게 결정합니까?</h3>
<p>각 워크플로우를 네 가지 질문에 대해 평가합니다. <strong>데이터 민감도</strong>(기업 어디서나 최대가 아닌 이 워크플로우가 필요로 하는 특정 데이터의). <strong>역량 요구사항</strong>(작업에 frontier 추론이 필요한가, 아니면 소형 모델로 충분한가). <strong>제약 구조</strong>(절대적 또는 조건부, 외부 주도 또는 내부 거버넌스). <strong>역량 저하 허용 범위</strong>. 답은 대략적인 카테고리로 묶입니다. 낮은 민감도는 외부, 변환 가능하고 높은 역량은 변환과 함께 외부, 절대 제약이지만 제한적인 경우는 on-premise, 절대 제약과 높은 역량은 가장 어렵습니다 — 오늘날 완전히 해결할 수 없는 경우도 있습니다.</p>

<h3>전체 외부 또는 전체 on-premise 접근 방식에서 무엇이 잘못됩니까?</h3>
<p>전체 외부 조직은 정책이 허용하지 않는 워크플로우에 부딪히며, 해당 워크플로우가 AI를 받지 못하거나(회사가 AI가 가장 중요한 업무에서 뒤처짐) 비공식 채널을 통해 AI를 받습니다 — shadow AI는 예측 가능한 결과입니다. 전체 on-premise 조직은 역량 격차에 부딪힙니다. 내부 모델은 일부 워크플로우에는 충분하고 다른 것들에는 그렇지 않으며, 비즈니스 부서는 동일한 shadow 채널을 통해 정책을 우회합니다. 두 실패 패턴은 동일한 구조를 공유합니다. 워크플로우 이질성을 고려하지 않는 정책은 결국 우회됩니다.</p>

<h3>작동하는 hybrid 아키텍처는 실제로 어떻게 생겼습니까?</h3>
<p>네 가지 구성 요소입니다. <strong>통합 통합 레이어</strong>(워크플로우는 백엔드를 직접 호출하지 않고 이 레이어를 호출하므로 라우팅 변경으로부터 보호됩니다). <strong>정책 기반 라우팅</strong>(워크플로우가 어디서 실행되는지에 대한 결정은 워크플로우에 하드코딩되지 않고 정책으로 인코딩되며, 버전 관리되고 감사 가능합니다). <strong>외부 경로를 위한 변환 레이어</strong>(민감 요소는 전송 전에 변환되고 응답 시 복원되며, 대상 외부 벤더를 추상화합니다). <strong>공유 거버넌스</strong>(두 경로를 균일하게 커버하는 하나의 감사 로그, 하나의 정책 프레임워크, 하나의 접근 통제 모델). 네 가지 모두 갖춰지면 워크플로우가 어디서 실행되는지는 아키텍처 약정이 아닌 정책 결정이 됩니다.</p>

## Section 04: Related

Related articles
관련 아티클

Running External LLMs on Data Your Company Can't Send Externally
회사가 외부로 보낼 수 없는 데이터에서 외부 LLM 실행하기

When AI Must Run Without Network Access
AI가 네트워크 접근 없이 실행되어야 할 때

Routing AI Workflows Between Cloud and Local Models
Cloud와 로컬 모델 사이에서 AI 워크플로우 라우팅하기
