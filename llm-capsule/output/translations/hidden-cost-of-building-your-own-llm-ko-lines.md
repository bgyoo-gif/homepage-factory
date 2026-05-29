# hidden-cost-of-building-your-own-llm — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

The Hidden Cost of Building Your Own Enterprise LLM
자체 엔터프라이즈 LLM 구축의 숨겨진 비용

Running your own LLM in production is a defensible choice — but the cost structure is asymmetric. The model is the cheap part. A realistic look at what self-hosted AI actually costs, where teams under-budget, and when it's the right answer.
프로덕션에서 자체 LLM을 운영하는 것은 합리적인 선택일 수 있습니다. 그러나 비용 구조는 비대칭적입니다. 모델은 가장 저렴한 부분입니다. 자체 호스팅 AI의 실제 비용이 얼마인지, 팀들이 어디서 예산을 과소 책정하는지, 그리고 언제 올바른 답인지를 현실적으로 살펴봅니다.

AI Architecture
AI Architecture

~10 min read
~10분 읽기

May 2026
2026년 5월

## Section 02: TL;DR

TL;DR
TL;DR

Self-hosting an LLM is a defensible choice — but the cost structure is asymmetric and most projections miss it. The model itself is free. Infrastructure is real and usually budgeted. People are the layer that most consistently breaks the projection — six to ten engineers minimum, fifteen to twenty for larger deployments, in a market where ML talent earns well above general engineering rates. Over a three-year horizon the people cost typically exceeds infrastructure by two or three times. Time compounds as opportunity cost: nine to eighteen months from decision to running production AI, during which the workflows the project was meant to serve either go without AI or use the external endpoints the project was meant to replace. Maintenance doesn't end — model updates, quality monitoring, infrastructure patches, workflow evolution accumulate as sustained team burn. Self-hosting is right when constraints are absolute, volume justifies the fixed cost, or the strategic case is explicit and funded. It's wrong when transformation could address the constraint, when workflows need frontier capability, or when the projection didn't include the full team. The pattern most enterprises end up with is hybrid: self-hosted for workflows that need it, external endpoints with transformation for the rest, under one routing layer and one governance framework.
LLM 자체 호스팅은 합리적인 선택일 수 있습니다. 그러나 비용 구조는 비대칭적이며 대부분의 예측이 이를 놓칩니다. 모델 자체는 무료입니다. 인프라 비용은 실재하며 보통 예산에 반영됩니다. 인력이 예측을 가장 일관되게 무너뜨리는 레이어입니다. 최소 6~10명의 엔지니어, 대규모 배포에서는 15~20명이 필요하며, ML 인재가 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받는 현재 시장에서 그 비용은 상당합니다. 3년 기간으로 보면 인력 비용은 보통 인프라 비용의 2~3배를 초과합니다. 시간은 기회 비용으로 복리로 쌓입니다. 의사결정에서 프로덕션 AI 가동까지 9~18개월이 걸리며, 그 사이 프로젝트가 담당하기로 한 워크플로우는 AI 없이 운영되거나, 대체하려 했던 외부 엔드포인트를 계속 사용합니다. 유지보수는 끝나지 않습니다. 모델 업데이트, 품질 모니터링, 인프라 패치, 워크플로우 진화가 지속적인 팀 비용으로 누적됩니다. 자체 호스팅이 옳은 경우는 제약이 절대적이거나, 요청량이 고정 비용을 정당화하거나, 전략적 근거가 명확하고 자금이 확보된 경우입니다. 틀린 경우는 변환으로 제약을 해결할 수 있거나, 워크플로우가 frontier 역량을 필요로 하거나, 예측에 전체 팀 비용이 포함되지 않은 경우입니다. 대부분의 기업이 결국 도달하는 패턴은 hybrid입니다. 필요한 워크플로우에는 자체 호스팅, 나머지에는 변환을 갖춘 외부 엔드포인트를 하나의 라우팅 레이어와 하나의 거버넌스 프레임워크 하에 운영하는 방식입니다.

## Section 03: Article Body

<h2>1. 팀들이 처음부터 자체 호스팅을 선택하는 이유</h2>
<p>기업 자체 인프라에서 LLM을 운영하겠다는 결정은 합리적입니다. 그것이 올바른 답인 워크플로우가 있고, 유일한 답인 환경이 있으며, 외부 옵션이 존재하더라도 내부 AI 역량에 투자할 전략적 이유가 있습니다. <strong>이것 자체가 문제는 아닙니다.</strong></p>
<p>문제는 결정을 내리는 팀이 자신들이 실제로 무엇을 약속하는지 이해하고 있는가입니다. 놀랍도록 많은 엔터프라이즈 AI 프로그램에서, 내부 운영을 선택한 결정이 예측 가능한 방식으로 틀린 것으로 밝혀지는 비용 모델에 근거해 이루어집니다. 모델 자체 — 실제 가중치, 팀이 배포하려는 오픈소스 릴리스 — 는 <strong>배포에서 가장 저렴한 부분</strong>입니다. 나머지 비용 구조에 놀라움이 도사리고 있으며, 대부분의 놀라움은 약속이 돌이키기 어려울 만큼 진행된 몇 달 후에 찾아옵니다.</p>
<p>이 아티클은 내부에서 진지한 LLM을 운영할 때의 비용 레이어, 각각이 실제로 무엇을 수반하는지, 그리고 팀들이 일관되게 예산을 과소 책정하는 부분을 짚어봅니다. <em>자체 호스팅에 반대하는 주장이 아닙니다. 결정을 충분한 정보를 갖고 내릴 수 있도록 돕기 위한 시도입니다.</em></p>
<p>비용으로 들어가기 전에, 기업들이 자체 호스팅으로 이끌리는 이유를 정확히 짚어볼 필요가 있습니다. 이유는 실재하며 아키텍처는 그에 부합해야 합니다.</p>
<ul>
  <li><strong>데이터 위치 제약이 절대적입니다.</strong> 일부 워크플로우는 변환이나 안전장치에 관계없이 어떤 외부 엔드포인트로도 데이터를 보낼 수 없습니다. 방위 작전, 특정 규제 의료 카테고리, 합법적 감청 처리, 기밀 금융 워크플로우가 여기에 해당합니다. 이러한 경우 자체 호스팅은 선택이 아닙니다 — 작동하는 유일한 아키텍처입니다. 비용 분석은 내부 배포를 할지 말지가 아니라 <em>어떤</em> 내부 배포를 할지의 문제가 됩니다.</li>
  <li><strong>섹터별 약정이 배포 토폴로지를 제한합니다.</strong> 섹터별 데이터 위치 요건 하의 통신 사업자는 변환 기반 접근법이 이론적으로 제약을 해결할 수 있더라도 운영 AI의 일부를 자체 네트워크 내에서 실행해야 할 수 있습니다. 계약 또는 데이터 자세는 아키텍처에 관계없이 구속력이 있습니다.</li>
  <li><strong>전략적 역량 투자.</strong> 일부 기업은 AI를 임대가 아닌 소유해야 할 장기적 역량으로 봅니다. AI가 비즈니스의 핵심이 될 것이고, 벤더 지형이 불확실하며, 회사가 내부 전문성을 구축하는 것을 선호한다는 논리입니다. 이는 데이터 위치 제약에 전혀 의존하지 않는 합리적인 입장입니다.</li>
  <li><strong>규모에서의 비용 예측.</strong> 요청량이 매우 높은 워크플로우에서 외부 API 호출의 토큰당 비용은 결국 인프라 운영의 고정 비용을 초과합니다. 대부분의 기업에게 이 시점은 그들이 생각하는 것보다 더 멀리 있지만, 자체 호스팅의 명시적 이유가 되는 경우도 있습니다.</li>
  <li><strong>운영 예측 가능성.</strong> 외부 LLM 벤더는 기업의 승인 없이 모델, 가격, 조건, 가용성을 변경합니다. 이러한 변동성이 허용되지 않는 워크플로우에서 모델 라이프사이클을 내부에서 통제하는 것은 실질적인 가치를 가집니다.</li>
</ul>
<p>이 각각은 자체 호스팅의 정당한 근거입니다. <strong>실수는 논리에 있지 않습니다 — 결정이 내려진 후 가정한 예산에 있습니다.</strong></p>

<h2>2. 모델 — 저렴한 부분</h2>
<p>이 분야를 처음 접하는 팀들이 첫 번째로 놀라는 것은 <strong>모델 자체는 비용이 거의 들지 않는다</strong>는 점입니다.</p>
<p>주요 오픈소스 모델들 — Llama, Mistral, Qwen, 그리고 그 후속 모델들 — 은 토큰당 수수료 없이 엔터프라이즈 사용을 허용하는 라이선스 하에 출시됩니다. 가중치를 다운로드하는 것은 무료입니다. 가용 하드웨어에서 실행하기 위해 양자화하는 것도 무료입니다. 라이선스 협상도, 사용량 기반 청구도, 모델 자체에 대한 사용자당 비용도 없습니다.</p>
<p>이것이 비용 분석에서 눈에 보이는 부분이며, 낙관적 예측이 나오는 지점입니다. <em>"모델은 무료입니다. 우리가 직접 운영하는 것이 API보다 저렴할 것입니다."</em> 비용 계산에 모델 비용만 들어있을 때 결론은 결정적으로 보입니다.</p>
<p><strong>계산에서 빠진 것은 나머지 모든 것입니다.</strong></p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-labelledby="cost-layers-title cost-layers-desc">
      <title id="cost-layers-title">The asymmetric cost layers of self-hosted LLMs</title>
      <desc id="cost-layers-desc">A diagram showing five cost layers of self-hosted LLM deployment, stacked from smallest (model) to largest (people), with time and maintenance shown as bands that compound over the multi-year horizon.</desc>

      <defs>
        <marker id="arrow-time" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309"/>
        </marker>
      </defs>

      <text x="40" y="34" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SELF-HOSTED LLM · COST LAYERS</text>
      <text x="920" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">3-YEAR HORIZON</text>

      <text x="160" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Layer</text>
      <text x="540" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Relative cost weight</text>
      <text x="860" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Budgeted?</text>

      <g>
        <rect x="40" y="86" width="240" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="60" y="106" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Model</text>
        <text x="60" y="122" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">weights · licence · quantisation</text>
        <rect x="300" y="92" width="60" height="32" rx="4" fill="#0ea5a4"/>
        <text x="370" y="113" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Free</text>
        <text x="860" y="113" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Yes ✓</text>
      </g>

      <g>
        <rect x="40" y="140" width="240" height="60" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Infrastructure</text>
        <text x="60" y="176" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">GPU · serving stack · monitoring</text>
        <text x="60" y="190" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">storage · network · scaling</text>
        <rect x="300" y="152" width="200" height="36" rx="4" fill="#5b4fe9"/>
        <text x="510" y="175" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Medium</text>
        <text x="860" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Usually ✓</text>
      </g>

      <g>
        <rect x="40" y="210" width="240" height="100" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="2"/>
        <text x="60" y="232" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">People</text>
        <text x="60" y="248" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML platform engineers (2–4)</text>
        <text x="60" y="262" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML ops engineers (2–3)</text>
        <text x="60" y="276" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Evaluation engineers (1–2)</text>
        <text x="60" y="290" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Workflow integration (2–3 per domain)</text>
        <text x="60" y="304" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Technical leadership</text>
        <rect x="300" y="232" width="520" height="56" rx="4" fill="#ef5350"/>
        <text x="560" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#ffffff">2–3× infrastructure cost over 3 years</text>
        <text x="860" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Under-budgeted ✗</text>
      </g>

      <line x1="40" y1="332" x2="920" y2="332" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="40" y="354" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">COMPOUNDS OVER TIME</text>

      <g>
        <rect x="40" y="368" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="388" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Time</text>
        <text x="60" y="406" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">9–18 months from decision to production AI</text>
        <text x="60" y="418" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">opportunity cost on workflows that wait · external models advance during the build</text>
        <line x1="680" y1="396" x2="900" y2="396" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="388" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">opportunity cost</text>
      </g>

      <g>
        <rect x="40" y="432" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="452" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Maintenance</text>
        <text x="60" y="470" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Model updates · quality monitoring · infrastructure patches · workflow evolution</text>
        <text x="60" y="482" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">sustained team burn against a growing portfolio of workflows — doesn't appear in initial budget</text>
        <line x1="680" y1="460" x2="900" y2="460" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="452" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">never ends</text>
      </g>

      <text x="480" y="510" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">The model is the visible part. The cost lives in the layers below.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>모델은 가장 저렴한 레이어입니다. 인력이 3년 기간의 비용을 일관되게 지배합니다. 시간과 유지보수는 복리로 쌓이며 — 초기 예산에 나타나지 않습니다.</strong></figcaption>
</figure>

<h2>3. 인프라 — 대부분의 팀이 예산을 책정하는 레이어</h2>
<p>다음 비용 레이어는 인프라이며, <strong>이것은 대부분의 팀이 실제로 예산을 책정하는 레이어입니다. 보통 현실적으로 책정합니다.</strong></p>
<p>프로덕션에서 진지한 오픈소스 모델을 운영한다는 것은 GPU를 의미합니다. 정확한 사양은 모델 크기, 양자화 수준, 필요한 처리량, 레이턴시 목표에 따라 달라집니다. 저처리량 내부 워크플로우를 위해 양자화된 중간 크기 모델을 운영하는 소규모 배포는 적당한 비용으로 몇 개의 엔터프라이즈 GPU에서 실행될 수 있습니다. 고처리량 프로덕션 워크플로우를 위해 더 큰 모델을 운영하는 진지한 배포는 냉각, 전원, 네트워킹이 수반되는 전용 GPU 클러스터가 필요합니다.</p>
<p>GPU 비용은 계산 가능합니다. 준비를 마친 팀은 무엇이 필요하고 비용이 얼마인지 알고 있습니다. 하드웨어 자본지출이든, 클라우드 예약 인스턴스든, 그 조합이든 마찬가지입니다. <strong>자본지출 측면은 합리적인 예산 관심을 받습니다.</strong></p>
<p>이 레이어에서 종종 덜 잘 예산이 책정되는 것은 GPU를 유용하게 만드는 지원 인프라입니다. 모델 서빙 스택(<code>vLLM</code>, <code>TGI</code> 또는 동등한 것), 서빙 레이어 앞의 요청 라우팅과 로드 밸런싱, 모델 가중치와 캐시를 위한 스토리지, 요청량을 처리할 네트워크 용량, 이 모든 것을 모니터링하는 모니터링 인프라입니다. 개별적으로는 비싸지 않지만 합산되며, 신중한 계획이 필요합니다. 서빙 스택은 특히 최근 몇 년간 크게 성숙했습니다. <em>더 이상 연구 산물이 아니지만, 팀이 배포하고 운영해야 하는 인프라임에는 변함이 없습니다.</em></p>
<p>초기 배포 이후, 인프라는 사용량에 따라 확장되어야 합니다. 하루 백 건의 요청에서 만 건으로 증가하는 워크플로우는 비례적으로 더 많은 용량이 필요합니다. 이것은 프로덕션 시스템 운영의 일상적인 비용이지만, 초기 예산이 장기를 커버한다고 가정하기보다 3년 예측에 반영할 가치가 있습니다.</p>

<h2>4. 인력 — 대부분의 팀이 과소 평가하는 레이어</h2>
<p>예측이 가장 일관되게 무너지는 레이어는 인력입니다. <strong>프로덕션 LLM 운영은 기존 인프라 팀이 부업으로 하는 일이 아닙니다.</strong> 특정 기술을 갖춘 전담 팀이 필요하며, 현재 시장에서 그 기술은 비쌉니다.</p>
<p>진지한 내부 LLM 배포를 위한 최소 팀 구성은 다음을 포함합니다.</p>
<ul>
  <li><strong>ML 플랫폼 엔지니어</strong> — 모델 서빙, 양자화, 처리량 최적화, 추론 스택의 운영 특성을 이해하는 엔지니어. 규모에 따라 <em>2~4명</em>.</li>
  <li><strong>ML 운영 엔지니어</strong> — 추론 인프라의 모니터링, 알림, 용량 계획, 온콜 로테이션을 담당하는 엔지니어. <em>2~3명</em>, 소규모 팀에서는 플랫폼 엔지니어와 역할이 겹치는 경우가 많습니다.</li>
  <li><strong>평가 엔지니어</strong> — 골든 데이터셋, 평가 파이프라인, 품질 모니터링, 모델 업데이트에 대한 회귀 테스트를 유지하는 엔지니어. <em>1~2명</em>, 모델을 사용하는 워크플로우 팀으로부터 상당한 인풋을 받습니다.</li>
  <li><strong>워크플로우 통합 엔지니어</strong> — 모델 API와 비즈니스의 실제 워크플로우 사이의 레이어를 구축하고 유지하는 엔지니어. 워크플로우 수에 따라 규모가 달라집니다. <em>보통 주요 워크플로우 도메인당 2~3명.</em></li>
  <li><strong>기술 리더십</strong> — 아키텍처 결정을 내리고 작업을 검토할 충분한 ML 및 인프라 경험을 갖춘 인력. <em>최소 시니어 엔지니어 1명</em>, 대규모 배포에서는 소규모 리더십 그룹인 경우가 많습니다.</li>
</ul>
<p>몇 개의 사업부를 위해 내부 LLM을 운영하는 기업의 경우 <strong>6~10명</strong>입니다. 복잡한 엔터프라이즈 전반에 걸쳐 여러 사업부를 서비스하는 더 큰 배포의 경우 <strong>15~20명</strong>입니다.</p>
<p>주요 시장 어디에서든 이 팀들의 비용은 상당합니다. 적합한 기술을 갖춘 ML 엔지니어는 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받습니다. <strong>팀은 인원수로는 소규모이지만 소진 비율은 높습니다.</strong> 3년 기간으로 보면, 인력 비용은 인프라 비용을 의미 있는 차이로 초과하는 경우가 많습니다 — 많은 배포에서 <em>2~3배 정도입니다.</em></p>
<p>이것이 프로젝트를 제안한 팀이 처음에 인력 비용을 직접 부담하지 않을 때 가장 자주 바뀌는 계산입니다. 인프라 예산은 승인되고, 팀은 채용되어야 하며, 팀이 채용되면 나머지 프로그램이 그것을 지원해야 합니다.</p>

<h2>5. 시간 — 복리로 쌓이는 비용</h2>
<p>수치로 나타내기는 더 어렵지만 과소 평가하기 쉬운 카테고리가 있습니다. 시간입니다. 구체적으로, <strong>자체 호스팅을 결정하는 것과 유용한 워크플로우를 프로덕션에서 가동하는 것 사이의 간격</strong>입니다.</p>
<p>결정은 빠릅니다. 하드웨어 조달 또는 클라우드 약정은 몇 주가 걸립니다. 서빙 스택과 첫 모델의 초기 배포는 더 많은 주가 걸립니다. 첫 번째 워크플로우를 통합하고 유용하게 만드는 데는 몇 달이 걸립니다. 여러 워크플로우를 안정적으로 운영할 수 있는 운영 성숙도를 달성하는 데는 더 오래 걸립니다.</p>
<p>대부분의 기업에게 <em>"자체 구축하겠습니다"</em>에서 <em>"우리가 그것으로 프로덕션 AI를 운영하고 있습니다"</em>까지의 현실적인 일정은 <strong>9~18개월</strong> 어딘가입니다. 더 빨리 움직이는 팀도 있고 더 느린 팀도 많습니다. 이 기간 동안, 기업은 프로젝트가 서비스하기로 한 워크플로우에서 AI가 없거나, 프로젝트가 대체하려 했던 외부 엔드포인트를 통해 AI를 사용합니다.</p>
<p>이것이 두 가지 이유로 중요합니다. 첫 번째는 <strong>기회 비용</strong>입니다. AI로 개선될 수 있었던 워크플로우가 구축 기간 동안 개선되지 않으며, 그 지연의 비즈니스 가치는 실재합니다. 두 번째는 <strong>전략적 위험</strong>입니다. 같은 기간 동안 외부 LLM 지형은 계속 발전하며, 마침내 프로덕션에 투입되는 내부 모델은 이미 외부 대안이 제공하는 것보다 두 세대 뒤처져 있을 수 있습니다.</p>
<p>흔한 패턴이 있습니다. <em>내부 모델이 프로덕션 품질에 도달한 바로 그 시점에, 그것이 지원하기로 한 워크플로우가 그 사이 외부 엔드포인트를 중심으로 재설계되었음을 팀이 발견합니다.</em> <strong>프로젝트는 기술적으로 성공하고 전략적으로 실패합니다.</strong></p>

<h2>6. 유지보수 — 끝나지 않는 비용</h2>
<p>시스템이 가동되면 비용은 멈추지 않습니다. <strong>다른 카테고리로 이동할 뿐입니다.</strong></p>
<ul>
  <li><strong>모델 업데이트.</strong> 몇 달마다 의미 있게 더 나은 역량을 가진 새로운 오픈소스 모델이 출시됩니다. 팀은 각 릴리스를 평가하고, 업그레이드 여부를 결정하고, 마이그레이션을 계획하고, 병렬 평가를 실행하고, 전환을 실행해야 합니다. 단일 모델의 경우 이것은 반복적인 엔지니어링 프로젝트입니다 — 엄청나지는 않지만 <em>지속적입니다.</em> 서로 다른 워크플로우를 지원하는 여러 모델의 경우 팀 시간의 상당 부분을 차지합니다.</li>
  <li><strong>평가 및 품질 모니터링.</strong> 지난 분기에 잘 작동했던 모델이 이번 분기의 입력 분포에서는 잘 작동하지 않을 수 있습니다. 워크플로우가 진화하고, 문서가 변하고, 비즈니스 컨텍스트가 바뀝니다. 평가 인프라는 사용자가 불평하기 <em>전에</em> 품질 저하를 감지해야 합니다. 이것은 지속적인 엔지니어링 작업이며, 한 번 설정하고 잊어버릴 수 있는 것이 아닙니다.</li>
  <li><strong>인프라 업데이트.</strong> 서빙 스택이 업데이트되고, 기반 GPU 드라이버가 변경되고, 보안 패치가 도착하고, 클라우드 플랫폼이 기능을 폐기합니다. 극적인 것은 없지만 팀이 최신 상태를 유지하고 프로덕션 워크플로우를 망가뜨리지 않으면서 변경을 적용해야 합니다.</li>
  <li><strong>워크플로우 진화.</strong> 비즈니스가 변화함에 따라 모델이 지원하는 워크플로우도 변합니다. 새로운 프롬프트를 개발하고, 평가하고, 배포해야 합니다. 기존 프롬프트를 폐기해야 합니다. 워크플로우 통합을 업데이트해야 합니다. <em>시스템을 구축한 팀이 그것이 서비스하는 워크플로우를 유지하는 팀입니다.</em> 초기 구축이 암시한 것보다 더 많은 작업입니다.</li>
</ul>
<p>유지보수 비용은 예측하기 가장 어려운 비용입니다. <strong>초기 예산에 나타나지 않기 때문입니다.</strong> 증가하는 워크플로우 포트폴리오에 대한 팀의 지속적인 소진으로 3년 기간에 걸쳐 나타납니다. <em>자체 호스팅 AI에서 성공하는 기업은 처음부터 유지보수 투자를 계획한 곳인 경향이 있고, 어려움을 겪는 기업은 초기 배포를 비용으로 취급한 곳인 경향이 있습니다.</em></p>

<h2>7. 자체 호스팅이 올바른 답인 경우</h2>
<p>이 모든 것을 감안할 때, 자체 호스팅이 명확히 올바른 답인 경우는 구체적입니다.</p>
<ul>
  <li><strong>데이터 위치 제약이 절대적인 경우.</strong> 어떤 외부 엔드포인트로도 데이터를 보낼 수 없는 워크플로우는 내부에서 실행되어야 합니다. 비용은 제약을 충족하는 비용이며, 대안은 워크플로우에서 AI를 전혀 갖지 않는 것입니다.</li>
  <li><strong>워크플로우 요청량이 고정 비용을 정당화하는 경우.</strong> 매우 높은 요청량 — <em>지속적인 규모에서 하루 수백만 건의 요청</em> — 은 인프라와 인력 비용을 충분한 작업량에 걸쳐 분산시켜 토큰당 청구보다 유리하게 만듭니다. 손익분기점은 대부분의 기업이 생각하는 것보다 더 멀리 있지만, 일부 워크플로우에서는 계획 기간 내에 명확히 들어옵니다.</li>
  <li><strong>전략적 근거가 명확하고 자금이 확보된 경우.</strong> 내부 AI 역량을 장기 투자로 구축하는 것은 합리적입니다. <em>결정은 3년 비용에 대한 완전한 가시성을 가지고 내려져야 합니다.</em> <em>"API 비용을 절약하겠습니다"</em>의 부산물이 아니라.</li>
</ul>

<h2>8. 자체 호스팅이 잘못된 답인 경우</h2>
<p>자체 호스팅이 잘못된 답인 경우도 구체적입니다.</p>
<ul>
  <li><strong>데이터 위치 제약을 변환으로 해결할 수 있는 경우.</strong> 아키텍처 수단 — 캡슐화, 토큰화, 고객 제어 매핑 — 을 통해 데이터가 EU 지역에 머물 수 있는 워크플로우에서 <em>적절한 안전장치를 갖춘 외부 엔드포인트가 더 빠르고, 저렴하고, 더 역량 있는 솔루션입니다.</em> 비용 분석은 보통 이러한 워크플로우에서 자체 호스팅에 유리하지 않습니다.</li>
  <li><strong>워크플로우가 frontier 역량을 필요로 하는 경우.</strong> 내부 모델은 복잡한 추론, 긴 컨텍스트 처리, 익숙하지 않은 문서 유형에서 가장 중요한 차원에서 외부 frontier 모델에 뒤처집니다. 일부 워크플로우는 격차와 함께 살 수 있지만 일부는 그렇지 않습니다. <em>격차를 허용할 수 없는 워크플로우에 자체 호스팅하면 작동하지만 성능이 저하된 시스템이 만들어집니다.</em></li>
  <li><strong>비용 예측에 전체 팀이 포함되지 않은 경우.</strong> 인프라에 대해서만 자금이 지원된 자체 호스팅 프로그램은 인력 부족으로 힘들게 진행되거나, 다른 작업을 위한 예산을 조용히 흡수하게 됩니다. <em>어느 쪽이든 실제 비용은 낙관적 예측을 따라잡습니다.</em></li>
</ul>

<h2>9. 대부분의 기업이 결국 도달하는 패턴</h2>
<p>이 과정을 겪어온 기업들에서, 나타나는 배포는 보통 순수한 자체 호스팅이 아닙니다. <strong>hybrid입니다.</strong> 자체 호스팅 인프라가 진정으로 필요한 워크플로우 — 절대 제약 사례, 전략 투자 사례, 수학이 맞는 요청량 사례 — 를 처리하고, 변환을 갖춘 외부 엔드포인트가 나머지를 처리합니다.</p>
<p>hybrid 패턴은 타협이 아닙니다. <strong>각 워크플로우 카테고리의 비용 프로파일을 실제 제약에 맞추는 아키텍처입니다.</strong> 자체 호스팅이 필요한 워크플로우는 자체 호스팅을 받습니다. 그렇지 않은 워크플로우는 안전장치를 갖춘 외부 엔드포인트를 받습니다. 팀은 하나의 라우팅 레이어, 하나의 거버넌스 프레임워크, 두 개의 백엔드를 운영합니다 — <em>모든 것을 처리해야 하는 하나의 백엔드를 운영하는 것보다 실질적으로 낮은 총 비용으로.</em></p>
<p>hybrid가 정치적 타협이 아닌 아키텍처적으로 정직한 답인 이유에 대한 더 넓은 논의는 엔터프라이즈 AI를 어디서 실행할 것인가에 관한 글을 참조하십시오. hybrid를 실제로 작동하게 만드는 라우팅 레이어에 대해서는 클라우드와 로컬 모델 사이에서 AI 워크플로우를 라우팅하는 아티클을 참조하십시오. 자체 호스팅 사례의 가장 엄격한 끝단 — 외부 엔드포인트가 허용되지 않는 — 에 있는 워크플로우에 대해서는 AI가 네트워크 접근 없이 실행되어야 할 때에 관한 아티클을 참조하십시오.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>모델 자체는 무료입니다 — 놀라움은 비용 구조의 다른 모든 레이어에 있습니다</li>
    <li>인프라(GPU + 서빙 스택 + 모니터링)는 실재하지만 보통 합리적으로 예산이 책정됩니다</li>
    <li>인력이 예측을 가장 일관되게 무너뜨리는 레이어입니다 — 최소 6~10명의 엔지니어, 대규모 배포에서는 15~20명, 3년 기간에 걸쳐 인프라 비용의 2~3배를 초과합니다</li>
    <li>시간은 기회 비용으로 복리로 쌓입니다 — 의사결정에서 프로덕션 AI 가동까지 9~18개월, 그 사이 워크플로우는 기다리고 외부 frontier는 전진합니다</li>
    <li>유지보수는 끝나지 않습니다 — 모델 업데이트, 품질 저하, 인프라 패치, 워크플로우 진화가 지속적인 팀 소진으로 누적됩니다</li>
    <li>올바른 경우: 제약이 절대적 · 요청량이 고정 비용을 정당화 · 전략적 근거가 명확하고 자금이 확보된 경우</li>
    <li>잘못된 경우: 변환으로 제약을 해결할 수 있는 경우 · 워크플로우가 frontier 역량을 필요로 하는 경우 · 예측에 전체 팀이 포함되지 않은 경우</li>
    <li>대부분의 기업이 결국 도달하는 패턴은 hybrid입니다 — 필요한 워크플로우에는 자체 호스팅, 나머지에는 변환을 갖춘 외부 엔드포인트, 하나의 라우팅 레이어와 하나의 거버넌스 프레임워크 하에</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>자체 호스팅 AI가 외부 API의 토큰당 비용을 지불하는 것보다 저렴하지 않습니까?</h3>
<p>모델뿐만 아니라 모든 것을 포함한 계산일 때만 그렇습니다. 모델 자체는 무료입니다 — Llama, Mistral, Qwen, 그리고 그 후속 모델들은 토큰당 수수료 없이 엔터프라이즈 친화적 라이선스 하에 출시됩니다. 계산이 보통 무너지는 곳은 나머지 모든 것입니다. GPU 인프라(합리적으로 예산 책정됨), 그것을 운영할 팀(예산 부족), 결정에서 프로덕션까지의 시간(기회 비용으로 복리), 그리고 지속적인 유지보수(끝나지 않음). 3년 기간으로 보면 인력 비용은 보통 인프라 비용의 2~3배를 초과합니다. <strong>API 청구 대비 손익분기점은 대부분의 기업이 생각하는 것보다 더 멀리 있습니다.</strong></p>

<h3>진지한 내부 LLM을 운영하려면 팀이 얼마나 커야 합니까?</h3>
<p>몇 개의 사업부의 경우 <strong>6~10명</strong>. 복잡한 엔터프라이즈 전반에 걸쳐 여러 사업부를 서비스하는 더 큰 배포의 경우 <strong>15~20명</strong>. 구성은 ML 플랫폼 엔지니어(2~4명), ML 운영 엔지니어(2~3명), 평가 엔지니어(1~2명), 워크플로우 통합 엔지니어(주요 워크플로우 도메인당 2~3명), 기술 리더십(최소 시니어 엔지니어 1명)입니다. 인원수로는 소규모이지만 소진 비율은 높습니다 — 적합한 기술을 갖춘 ML 엔지니어는 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받습니다. <em>팀 비용이 대부분의 예측이 과소 책정하는 부분입니다.</em></p>

<h3>자체 호스팅이 실제로 올바른 답인 경우는 언제입니까?</h3>
<p>세 가지 구체적인 경우입니다. 첫째, <strong>데이터 위치 제약이 절대적인 경우</strong> — 안전장치에 관계없이 어떤 외부 엔드포인트로도 데이터를 보낼 수 없는 워크플로우는 내부에서 실행되어야 합니다. 비용은 제약을 충족하는 비용입니다. 둘째, <strong>워크플로우 요청량이 고정 비용을 정당화하는 경우</strong> — 지속적인 하루 수백만 건의 요청은 인프라와 팀 비용을 충분한 작업량에 걸쳐 분산시켜 토큰당 청구보다 유리하게 만듭니다. 셋째, <strong>전략적 근거가 명확하고 자금이 확보된 경우</strong> — 내부 AI 역량을 장기 투자로 구축하는 것으로, <em>"API 비용을 절약하겠습니다"</em>의 부산물이 아닌 3년 비용에 대한 완전한 가시성을 가지고 내려져야 합니다.</p>

<h3>자체 호스팅이 잘못된 답인 경우는 언제입니까?</h3>
<p>세 가지 구체적인 경우입니다. <strong>데이터 위치 제약을 변환으로 해결할 수 있는 경우</strong> — 캡슐화, 토큰화, 고객 제어 매핑을 통해 데이터가 EU 지역에 머물 수 있는 워크플로우에서 적절한 안전장치를 갖춘 외부 엔드포인트가 더 빠르고, 저렴하고, 더 역량 있습니다. <strong>워크플로우가 frontier 역량을 필요로 하는 경우</strong> — 내부 모델은 복잡한 추론, 긴 컨텍스트, 익숙하지 않은 문서 유형에서 frontier에 뒤처집니다. 이 격차를 허용할 수 없는 워크플로우에 자체 호스팅하면 작동하지만 성능이 저하된 시스템이 만들어집니다. <strong>비용 예측에 전체 팀이 포함되지 않은 경우</strong> — 인프라에 대해서만 자금이 지원된 프로그램은 인력 부족으로 힘들게 진행되거나, 다른 작업을 위한 예산을 조용히 흡수합니다.</p>

<h3>자체 호스팅을 결정하는 것에서 프로덕션 AI를 가동하는 것까지 현실적인 일정은 얼마나 됩니까?</h3>
<p>대부분의 기업에서 <strong>9~18개월</strong>. 조달에 몇 주, 초기 서빙 스택 배포에 더 많은 주, 첫 번째 워크플로우를 통합하고 유용하게 만드는 데 몇 달, 여러 워크플로우를 안정적으로 운영하기 위한 운영 성숙도 달성에는 더 오래 걸립니다. 이 기간 동안 기업은 프로젝트가 서비스하기로 한 워크플로우에서 AI가 없거나, 프로젝트가 대체하려 했던 외부 엔드포인트를 통해 AI를 사용합니다. <em>기회 비용은 실재합니다.</em> 그리고 같은 기간 동안 외부 LLM 지형은 계속 발전합니다 — 마침내 프로덕션에 투입되는 내부 모델은 이미 뒤처져 있을 수 있습니다.</p>

<h3>시스템이 가동되면 비용이 멈춥니까?</h3>
<p>아닙니다 — 카테고리가 이동할 뿐입니다. <strong>모델 업데이트</strong>(몇 달마다 새로운 오픈소스 릴리스가 나와 평가, 마이그레이션, 병렬 평가, 전환이 필요합니다). <strong>품질 모니터링</strong>(워크플로우가 진화하고, 입력 분포가 변하고, 평가 인프라가 저하를 감지해야 합니다). <strong>인프라 업데이트</strong>(서빙 스택 업데이트, GPU 드라이버 변경, 보안 패치, 클라우드 폐기). <strong>워크플로우 진화</strong>(새로운 프롬프트 개발, 기존 프롬프트 폐기, 통합 업데이트). 이것이 예측하기 가장 어려운 비용입니다. 초기 예산에 나타나지 않기 때문입니다 — <em>증가하는 워크플로우 포트폴리오에 대한 팀의 지속적인 소진으로 3년 기간에 걸쳐 나타납니다.</em></p>

<h3>대부분의 기업이 결국 도달하는 패턴은 무엇입니까?</h3>
<p>Hybrid입니다 — 정치적 타협이 아니라 각 워크플로우 카테고리의 비용 프로파일을 실제 제약에 맞추는 아키텍처로서. 자체 호스팅 인프라는 진정으로 필요한 워크플로우(절대 제약 사례, 전략 투자 사례, 수학이 맞는 요청량 사례)를 처리합니다. 변환을 갖춘 외부 엔드포인트가 나머지를 처리합니다. <strong>팀은 하나의 라우팅 레이어, 하나의 거버넌스 프레임워크, 두 개의 백엔드를 운영합니다</strong> — 모든 것을 처리해야 하는 하나의 백엔드를 운영하는 것보다 실질적으로 낮은 총 비용으로.</p>

## Section 04: Related Articles

Where to Read Next
다음으로 읽어볼 글

Where to Run Enterprise AI: External, On-Premise, or Both
엔터프라이즈 AI를 어디서 실행할 것인가: 외부, on-premise, 또는 둘 다

Routing AI Workflows Between Cloud and Local Models
Cloud와 로컬 모델 사이에서 AI 워크플로우 라우팅하기

When AI Must Run Without Network Access
AI가 네트워크 접근 없이 실행되어야 할 때
