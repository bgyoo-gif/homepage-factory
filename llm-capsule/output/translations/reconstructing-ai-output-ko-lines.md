# Reconstructing AI Output — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
AI 출력 복원: 모델 응답과 비즈니스 현실 사이의 마지막 구간

The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.
외부 LLM의 토큰화된 응답은 바로 사용할 수 없습니다. 복원은 그것을 업무에 사용 가능한 출력으로 변환하는 단계이며, 대부분의 팀이 충분히 투자하지 않다가 워크플로우가 프로덕션에서 멈추는 지점입니다.

AI Architecture
AI 아키텍처

~9 min read
약 9분 읽기

Updated May 2026
2026년 5월 업데이트

## Section 02: TL;DR

TL;DR
TL;DR

Reconstruction — the step that maps tokenised LLM output back to original values — is technically straightforward and architecturally critical. Most enterprise AI pilots underinvest in it and stall at production for the same reason: the model works, the integration works, but the output requires manual cleanup and the productivity gain evaporates. Real reconstruction is more than a swap-back: the LLM generates new text that references tokens in novel contexts, sometimes with formatting drift, sometimes hallucinated, sometimes streamed token-by-token. It has to run inside the enterprise environment, colocated with the mapping — running it on convenient external middleware collapses the protection the tokenisation provided. Three integration patterns (inline, streaming, event-driven) cover most workflows. Hallucinated tokens need an explicit policy (flag, drop, or re-prompt). Every operation has to be audited, in logs held separately under the mapping's own access controls. Five operational mistakes recur — manual cleanup, wrong location, static substitution, no logging, provider lock-in. When reconstruction is right, it becomes invisible infrastructure. When it's wrong, the entire architecture's promise quietly fails on the last mile.
복원은 LLM의 토큰화된 출력을 원래 값으로 다시 매핑하는 단계로, 기술적으로는 단순하지만 아키텍처 관점에서는 매우 중요합니다. 대부분의 엔터프라이즈 AI 파일럿이 같은 이유로 이 단계에 충분히 투자하지 않고 프로덕션에서 막힙니다. 모델도 작동하고 연동도 작동하지만 출력물에 수동 정리가 필요해 생산성 향상 효과가 사라집니다. 실제 복원은 단순한 역치환 이상입니다. LLM은 토큰을 새로운 문맥에서 참조하는 새 텍스트를 생성하며, 때로는 포맷이 변형되거나, 환각이 발생하거나, 토큰 단위로 스트리밍되기도 합니다. 복원은 엔터프라이즈 환경 내부에서 매핑과 함께 실행되어야 합니다. 편의를 위해 외부 미들웨어에서 실행하면 토큰화가 제공한 보호가 무너집니다. 세 가지 연동 패턴(인라인, 스트리밍, 이벤트 기반)으로 대부분의 워크플로우를 커버할 수 있습니다. 환각 토큰에 대해서는 플래그 표시, 삭제, 또는 재프롬프트 중 명시적인 정책이 필요합니다. 모든 연산은 매핑과 동일한 접근 제어 하에 별도 보관되는 로그에 감사 기록되어야 합니다. 다섯 가지 운영 실수가 반복됩니다. 수동 정리, 잘못된 위치, 정적 치환, 로그 미기록, 특정 제공업체 종속. 복원이 제대로 되면 투명한 인프라가 됩니다. 잘못되면 아키텍처 전체의 약속이 마지막 구간에서 조용히 무너집니다.

## Section 03: Article Body

<h2>1. 복원이 단순한 역치환 이상인 이유</h2>
<p>엔터프라이즈 AI 팀이 토큰화된 문서를 외부 LLM에 전송하는 워크플로우를 설계할 때, 대부분의 관심은 준비 단계에 집중됩니다. 감지, 변환, 경계를 넘는 데이터가 무엇인지. 응답 쪽에는 관심이 덜합니다. 모델이 출력을 반환하면 토큰만 되돌려 치환하면 결과가 완성된다는 가정 때문입니다.</p>
<p>그 가정은 대략적으로는 맞지만 운영적으로는 잘못된 것입니다. 복원 단계는 기술적으로 단순합니다. 매핑에서 토큰을 찾아 되돌려 치환합니다. 하지만 아키텍처 관점에서는 매우 중요합니다. <strong>데모에서 잘 작동하는 파일럿과 프로덕션에서 실제로 운영되는 워크플로우의 차이가 결정되는 지점입니다.</strong> 복원을 부차적으로 다루는 팀은 항상 같은 지점에서 AI 프로젝트가 막힙니다. 모델도 작동하고 연동도 작동하지만, 출력이 수동 정리 없이는 실제로 사용할 수 있는 형태가 아니어서 프로젝트를 정당화했던 생산성 향상 효과가 사라집니다.</p>
<p>가장 단순한 경우, 복원은 토큰화와 대칭입니다. 입력에서 <em>Marlene Schmidt</em>가 <code>CUST-7F2A</code>로 치환되었고, 출력에서 <code>CUST-7F2A</code>가 참조되면, 복원 단계에서 <code>CUST-7F2A</code>를 다시 <em>Marlene Schmidt</em>로 되돌리고 워크플로우가 계속됩니다.</p>
<p>모든 워크플로우가 이런 형태라면 복원은 사소한 문제일 것입니다. 하지만 몇 가지 이유로 워크플로우는 이런 형태가 아닙니다.</p>

<ul>
  <li><strong>모델의 응답은 생성적이며 단순히 치환적이지 않습니다.</strong> LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 출력은 새 문장, 새 조합으로 토큰을 참조하며, 때로는 의역되거나 요약되거나 여러 입력 토큰에 걸쳐 합성됩니다. 복원 레이어는 입력에 없었던 문맥에 등장하는 토큰을 처리해야 합니다.</li>
  <li><strong>응답에는 입력에 없던 토큰이 포함될 수 있습니다.</strong> 다섯 개의 티켓을 바탕으로 추론하는 요약 작업이 <em>"영향을 받은 고객 중 세 명</em>(<code>CUST-7F2A</code>, <code>CUST-3B91</code>, <code>CUST-9D2C</code>)<em>이 동일한 펌웨어 버전을 사용합니다."</em>와 같은 문장을 생성할 수 있습니다. 이 구문은 새로운 것입니다. 복원 레이어는 각 토큰을 찾아 조회하고 모델이 작성한 문장에 되돌려 치환해야 합니다.</li>
  <li><strong>응답에는 때때로 토큰에 대한 <em>형식이 잘못된</em> 참조가 포함됩니다.</strong> 모델은 특히 긴 출력에서 토큰 형식을 놓치는 경우가 있습니다. <code>CUST-7F2A</code>로 입력된 토큰이 <code>CUST 7F2A</code>, <code>CUST7F2A</code>, 또는 단순히 <em>"7F2A로 지정된 고객"</em>으로 반환될 수 있습니다. 정확한 문자열 매칭만 수행하는 복원 레이어는 이런 경우에 실패하고, 사용자에게 전달되는 출력에 해결되어야 했을 토큰 조각이 그대로 남게 됩니다.</li>
  <li><strong>응답에는 모델의 코멘트나 헤징이 포함될 수 있습니다.</strong> <em>"고객 </em><code>CUST-7F2A</code><em>에 대한 정보를 바탕으로 가장 가능성 높은 근본 원인은..."</em>과 같은 형태입니다. 복원은 모델이 스스로 추가한 절에 등장하는 토큰도 직접 추출한 토큰과 동일한 정확도로 처리해야 합니다.</li>
</ul>

<p>따라서 역치환처럼 보이는 것은 실제로는 작지만 실질적인 텍스트 처리 문제입니다. <strong>다양한 출력 형태에서 토큰을 견고하게 인식하고, 모델 응답의 문법적 일관성을 보존하는 방식으로 치환이 이루어져야 합니다.</strong></p>

<h2>2. 복원이 실행되어야 하는 위치</h2>
<p>복원의 위치는 협상의 여지가 없습니다. <strong>출력이 사용자나 다운스트림 시스템에 도달하기 전에 엔터프라이즈 환경 내부에서 실행되어야 합니다.</strong></p>
<p>그 이유는 매핑이 엔터프라이즈 환경에 있어야 하는 이유와 같습니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부에서 일어난다면, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 시스템에서 실행된다면, 매핑을 해당 위치에서 접근 가능하게 해야 하며, 이는 토큰화가 처음에 제공한 보호를 무너뜨립니다.</p>
<p>이것이 <strong>이 패턴 배포에서 가장 흔한 아키텍처 실수입니다.</strong> 팀이 환경 내부에서 토큰화를 설정하고, 외부 LLM에 전송한 다음, 편리하게 접근 가능한 클라우드 서비스나 미들웨어에서 복원을 실행합니다. 편의성은 실재합니다. 하지만 보호는 사라집니다. 엔터프라이즈의 독점적 통제 하에 있어야 했던 매핑이 원래의 약속이 더 이상 유효하지 않은 위치에 복제된 것입니다.</p>
<p>올바른 아키텍처는 복원이 소스 시스템 및 매핑과 함께 위치하는 것입니다. 온프레미스, 엔터프라이즈 자체 VPC, 또는 워크플로우가 실행되는 EU 리전 인프라 어디든. <strong>LLM의 출력은 토큰화된 상태로 반환되어 경계 내부의 복원 레이어로 이동하며, 해당 레이어에서 업무용 콘텐츠로 변환되어 나옵니다.</strong> 데이터의 외부 여정은 복원 단계에서 끝납니다.</p>
<p>아키텍처의 나머지 부분이 경계에 대해 철저한 워크플로우에서, 즉 내부 캡슐화, 내부 매핑, 내부 감사 로그를 갖추고 있는데 복원만 외부로 빠져나간 경우, 나머지 아키텍처의 약속은 복원 위치가 보장할 수 있는 수준으로 약화됩니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" role="img" aria-labelledby="reconstruction-location-title reconstruction-location-desc">
      <title id="reconstruction-location-title">복원이 실행되어야 하는 위치</title>
      <desc id="reconstruction-location-desc">두 아키텍처가 나란히 표시됩니다. 왼쪽은 복원이 외부 미들웨어에서 실행되어 매핑이 엔터프라이즈 외부에 복제되며 보호가 무너지는 경우입니다. 오른쪽은 복원이 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어 보호가 유지되는 경우입니다.</desc>

      <defs>
        <marker id="arrow-coral-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c73e3a"/>
        </marker>
        <marker id="arrow-primary-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
      </defs>

      
      <g>
        <rect x="20" y="20" width="440" height="32" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="1"/>
        <text x="240" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">✗ 엔터프라이즈 외부에서의 복원</text>

        <rect x="20" y="70" width="200" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">기업 환경</text>

        <rect x="40" y="108" width="160" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="120" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">토큰화</text>
        <text x="120" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 실행 ✓</text>

        <rect x="40" y="168" width="160" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="120" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">매핑</text>
        <text x="120" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 보관 ✓</text>

        <line x1="200" y1="190" x2="290" y2="262" stroke="#c73e3a" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-coral-rc)"/>
        <text x="200" y="248" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c73e3a">매핑 복제됨</text>

        <rect x="260" y="240" width="180" height="100" rx="10" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
        <text x="280" y="262" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#c73e3a" letter-spacing="1.2">벤더 / 미들웨어</text>
        <rect x="280" y="276" width="140" height="44" rx="6" fill="#ffffff" stroke="#c73e3a" stroke-width="1"/>
        <text x="350" y="295" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">복원</text>
        <text x="350" y="311" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#c73e3a">외부 실행 ✗</text>

        <rect x="20" y="370" width="440" height="50" rx="6" fill="#fce9e8" stroke="none"/>
        <text x="240" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">보호 수준이 외부 위치가 보장할 수 있는 수준으로 떨어집니다.</text>
        <text x="240" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#c73e3a">일반적으로 원래 약속보다 낮습니다.</text>
      </g>

      
      <g>
        <rect x="500" y="20" width="440" height="32" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="720" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">✓ 엔터프라이즈 내부에서의 복원</text>

        <rect x="500" y="70" width="320" height="280" rx="10" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="520" y="92" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#6b7280" letter-spacing="1.2">기업 환경</text>

        <rect x="520" y="108" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="660" y="127" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">토큰화</text>
        <text x="660" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 실행 ✓</text>

        <rect x="520" y="168" width="280" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1"/>
        <text x="660" y="187" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">매핑</text>
        <text x="660" y="203" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">내부 보관 ✓</text>

        <rect x="520" y="228" width="280" height="44" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="660" y="247" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#5b4fe9">복원</text>
        <text x="660" y="263" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9">매핑과 함께 위치 ✓</text>

        <rect x="520" y="288" width="280" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="660" y="307" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">감사 로그</text>
        <text x="660" y="323" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">별도 접근 제어 ✓</text>

        <rect x="848" y="168" width="100" height="84" rx="8" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="898" y="190" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#9ca3af" letter-spacing="1.2">외부 LLM</text>
        <text x="898" y="214" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">토큰만</text>
        <text x="898" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#ffffff">처리</text>

        <line x1="800" y1="195" x2="846" y2="195" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>
        <line x1="846" y1="225" x2="800" y2="240" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary-rc)"/>

        <rect x="500" y="370" width="440" height="50" rx="6" fill="#eeebfe" stroke="none"/>
        <text x="720" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">매핑은 경계를 벗어나지 않습니다. 데이터의 외부 여정은</text>
        <text x="720" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#5b4fe9">복원 단계에서 끝납니다.</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>가장 흔한 아키텍처 실수인 편의를 위해 외부 미들웨어에서 복원을 실행하는 것은 매핑을 엔터프라이즈 외부에 복제하여 토큰화가 제공한 보호를 무너뜨립니다.</strong></figcaption>
</figure>


<h2>3. 복원이 워크플로우와 통합되는 방식</h2>
<p>복원은 사용자가 호출하는 독립적인 단계가 아닙니다. AI 출력이 전달되는 모든 위치에 통합되어야 하는 인프라입니다. 세 가지 연동 패턴이 대부분의 엔터프라이즈 배포를 커버합니다.</p>

<h3>3.1 응답 경로에서의 인라인 복원</h3>
<p>AI 연동 레이어, 즉 워크플로우와 LLM 엔드포인트 사이에 위치한 미들웨어가 호출 시스템에 응답을 반환하기 전에 복원을 수행합니다. 호출 시스템은 토큰을 볼 수 없으며 업무용 출력을 받습니다. <strong>이것이 가장 깔끔한 패턴으로, 계약 검토, 요약, 분류 같은 동기식 요청-응답 워크플로우에 적합합니다.</strong></p>

<h3>3.2 스트리밍 복원</h3>
<p>토큰 단위로 스트리밍되는 LLM 응답의 경우(데이터 보호 의미가 아닌 NLP 의미의 토큰, 불행히도 용어 충돌이 있습니다), 복원은 스트림에서 작동해야 하며 데이터 보호 토큰이 나타나는 즉시 인식하고 실시간으로 치환해야 합니다. <strong>어느 시점에서든 데이터 보호 토큰이 부분적으로만 스트리밍될 수 있기 때문에 배치 복원보다 어렵습니다.</strong> 복원 레이어는 이를 인식할 만큼 충분히 버퍼링해야 합니다. 스트리밍 UI(채팅 스타일 인터페이스, 실시간 요약 피드)를 사용하는 워크플로우는 이 패턴이 필요하며, 전체 응답을 기다리는 워크플로우는 필요하지 않습니다.</p>

<h3>3.3 이벤트 기반 복원</h3>
<p>AI 출력이 다운스트림 작업을 트리거하는 워크플로우, 즉 운영 플랫폼에서 티켓 생성, 문서 관리 시스템에 보고서 작성, CRM 레코드 업데이트 등의 경우, 복원은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어져야 합니다. <strong>토큰화된 응답은 연동 레이어에서 라우팅, 분류 또는 트리아지 처리를 위해 처리될 수 있습니다. 복원은 데이터가 사용자가 볼 시스템에 기록되기 직전에 이루어집니다.</strong></p>
<p>아키텍처는 어떤 패턴이 어떤 워크플로우에 적용되는지 명확히 해야 합니다. 패턴이 맞지 않으면, 예를 들어 이벤트 기반이어야 하는 워크플로우에 스트리밍 복원을 실행하거나 스트리밍이어야 하는 워크플로우에 인라인 복원을 실행하면, AI 품질 문제처럼 보이지만 실제로는 연동 문제인 사용자 가시적 결함이 발생합니다.</p>

<h2>4. 모델이 존재하지 않는 토큰을 생성할 때</h2>
<p>신중하게 다루어야 할 특정 실패 모드가 있습니다. <strong>모델이 때때로 토큰을 환각합니다.</strong> 시스템 형식의 토큰처럼 보이지만 매핑에 존재하지 않는 문자열을 생성합니다.</p>
<p>이는 예측 가능한 이유로 발생합니다. 모델이 입력에서 <code>CUST-7F2A</code>와 <code>CUST-3B91</code>을 보고 패턴을 활용하여 출력에서 <code>CUST-5D44</code>를 생성합니다. 또는 모델이 추론한 엔티티에 대해 토큰 형태의 플레이스홀더를 만들어냅니다. 더 드물게는 모델이 학습 데이터의 토큰 형식을 반향하여 엔터프라이즈의 토큰 형식과 충돌하기도 합니다.</p>
<p>복원 레이어는 <strong>환각 토큰을 조용히 치환할 수 없습니다.</strong> 치환할 대상이 없기 때문입니다. 또한 <strong>환각 토큰을 출력에 그대로 둘 수도 없습니다.</strong> 사용자가 시스템 식별자처럼 보이는 조각을 보게 되기 때문입니다. 합리적인 대응은 세 가지입니다.</p>

<ol>
  <li><strong>출력에서 환각 토큰에 플래그를 표시하고 사용자에게 명시적 갭으로 표시합니다.</strong> 예를 들어 <em>"[모델이 생성했지만 시스템이 해석할 수 없는 엔티티에 대한 참조.]"</em>와 같이. 이는 출력의 깔끔함을 일부 희생하고 투명성을 유지합니다.</li>
  <li><strong>환각 참조를 삭제하고 주변 문장을 재작성합니다.</strong> 더 깔끔한 출력을 생성하지만 복원 레이어가 상당한 텍스트 조작을 수행해야 하며, 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨길 수 있습니다.</li>
  <li><strong>응답을 거부하고 입력에 등장한 토큰만 사용하도록 제한하는 시스템 지침과 함께 모델에 재프롬프트합니다.</strong> 가장 높은 품질의 출력을 생성하지만 지연 시간과 비용이 추가됩니다.</li>
</ol>

<p>워크플로우마다 다른 대응을 원합니다. 내부 검토용 요약은 첫 번째 옵션(플래그 표시)을 선호할 수 있습니다. 고객에게 전달되는 문서는 세 번째(재프롬프트)를 선호할 수 있습니다. <strong>이 선택은 복원 레이어에 하드코딩되지 않고 워크플로우 수준에서 구성 가능해야 합니다.</strong></p>

<h2>5. 감사 및 추적성</h2>
<p>복원은 원본 민감 값이 워크플로우에 재진입하는 순간입니다. 감사 관점에서 <strong>이것은 아키텍처에서 가장 중요한 순간 중 하나입니다.</strong> 원본 데이터에 대한 접근 제어가 행사되는 지점이기 때문입니다.</p>
<p>잘 설계된 복원 레이어는 모든 연산을 기록합니다. 어떤 토큰이 조회되었는지, 언제, 어떤 워크플로우를 위해, 어떤 연동에 의해. 로그는 원본 값을 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 <em>"어떤 토큰의 복원이 누구에 의해 트리거되었고 결과가 어디로 갔는지"</em>에 답할 수 있는 충분한 메타데이터를 포함해야 합니다.</p>
<p>이는 두 가지 이유로 운영적으로 중요합니다. 첫째, 아키텍처를 감사 가능하게 만듭니다. 워크플로우의 내부 검토를 통해 복원이 적법한 워크플로우에 대해서만 이루어지고 연동이 설계된 대로 작동하고 있음을 검증할 수 있습니다. 둘째, 인시던트 대응을 가능하게 합니다. <strong>복원 연동이 오작동하는 경우, 로그가 무슨 일이 있었고 무엇이 노출되었는지 보여줍니다.</strong></p>
<p>감사는 또한 복원이 원본 값을 받아서는 안 될 다운스트림 시스템으로 내보내는 실패 케이스에서도 중요합니다. 복원 연동이 실수로 고객 이름을 볼 수 없어야 했던 로깅 시스템에 업무용 출력을 기록했다면, 감사 추적이 팀에게 무엇이 어디에 노출되었는지 알려줍니다. 로그가 없으면 팀은 추측만 할 수 있습니다.</p>
<p>복원 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 그리고 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. <strong>사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.</strong></p>

<h2>6. 대부분의 팀이 저지르는 운영 실수</h2>
<p>이 패턴의 배포 전반에 걸쳐 소수의 실수가 반복적으로 나타납니다. 명시적으로 언급할 가치가 있습니다.</p>

<ul>
  <li><strong>복원을 수동 정리 단계로 구축하는 것.</strong> 가장 흔한 실수입니다. 팀이 토큰화를 작동시키고, AI 출력이 토큰화된 상태로 반환되는 것을 보고, 사용자의 워크플로우에 수동으로 <em>"토큰을 찾아 교체"</em>하는 단계를 추가합니다. 사용자는 이 단계를 건너뜁니다. 또는 일관성 없이 수행합니다. 또는 토큰화된 출력을 볼 수 없어야 했던 시스템에 붙여 넣어 정리가 전혀 이루어지지 않습니다. <strong>복원은 자동적이고 눈에 보이지 않는 인프라여야 합니다.</strong> 사람의 행동이 필요하면 감지하기 어려운 방식으로 간헐적으로 실패하게 됩니다.</li>
  <li><strong>잘못된 위치에서 복원을 실행하는 것.</strong> 위에서 언급했습니다. 벤더 클라우드나 미들웨어 서비스에서 복원을 실행하는 편의성은 실재합니다. 보호 비용도 실재합니다. 아키텍처는 원본 값이 엔터프라이즈 환경에 유지될 것을 약속하며, 복원은 그 약속을 지켜야 합니다.</li>
  <li><strong>복원을 정적 치환으로 취급하는 것.</strong> 실제 복원은 형식이 잘못된 토큰, 환각 토큰, 예상치 못한 문맥의 토큰, 그리고 스트리밍 응답을 처리해야 합니다. 정확한 문자열 매치 앤 리플레이스를 수행하는 단순한 구현은 데모에서는 작동하지만 모델의 실제 출력이 데모 케이스보다 지저분한 프로덕션에서는 실패합니다.</li>
  <li><strong>복원을 기록하지 않는 것.</strong> 감사 추적 없는 복원은 팀이 방어할 수 없는 복원입니다. 누군가가 <em>"AI가 이 고객의 이름을 본 적이 있나요, 그렇다면 결과는 어디로 갔나요"</em>라고 처음 물어볼 때, 복원 로그가 없는 팀은 답할 수 없습니다.</li>
  <li><strong>복원을 특정 LLM 제공업체에 긴밀하게 결합하는 것.</strong> ChatGPT의 응답 형식을 가정하는 복원 로직은 기본 토큰화가 변경되지 않았더라도 워크플로우가 Claude 또는 Gemini로 전환될 때 작동하지 않게 됩니다. <strong>복원 레이어는 제공업체와 무관하게, 모델의 응답을 알려진 구조가 아닌 처리해야 할 텍스트로 취급해야 합니다.</strong></li>
</ul>

<h2>7. 좋은 복원의 모습</h2>
<p>프로덕션에서 작동하는 복원 레이어는 소수의 속성을 갖추고 있습니다.</p>

<ul>
  <li>매핑과 함께 엔터프라이즈 환경 내부에서 실행됩니다.</li>
  <li>연동 경계에서 자동으로 호출되며, 수동 단계로 실행되지 않습니다.</li>
  <li>다른 호출 패턴을 통해 스트리밍, 배치, 이벤트 기반 워크플로우를 처리하지만 공유된 코어를 사용합니다.</li>
  <li>포맷 변형, 부분적 참조, 의역 등 실제 모델 출력이 생성하는 다양한 변형에서 토큰을 견고하게 인식합니다.</li>
  <li>적법한 토큰과 환각 토큰 형태의 문자열을 구분하고 각각을 구성 가능한 정책에 따라 처리합니다.</li>
  <li>모든 연산을 엔터프라이즈의 독점 통제 하에 별도의 감사 추적에 기록합니다.</li>
  <li>제공업체 무관하게 작동하므로 워크플로우가 복원 레이어를 재작성하지 않고도 LLM 엔드포인트를 교체할 수 있습니다.</li>
</ul>

<p>이러한 속성이 갖추어지면, <strong>복원은 투명한 인프라가 됩니다.</strong> 사용자가 문서를 제출하고, 워크플로우가 실행되고, 결과가 실제 구조에 실제 값으로 반환되며, 사용자는 토큰을 볼 수 없습니다. 민감한 데이터가 AI가 유용한 작업을 수행하는 동안 경계 내에 유지되었다는 아키텍처의 약속이 워크플로우의 두 절반 모두에서 유지됩니다.</p>
<p>이러한 속성이 갖추어지지 않으면 복원이 워크플로우가 깨지는 지점이 됩니다. 토큰화가 완벽하고, 모델이 탁월하고, 경계가 철저해도, 사용자는 여전히 사용할 수 없는 출력을 받거나 민감한 데이터가 받아서는 안 될 다운스트림 시스템에 실수로 나타나는 상황에 처하게 됩니다. <strong>마지막 구간이 바로 아키텍처가 약속을 이행하거나 조용히 실패하는 곳입니다.</strong></p>

<h2>8. 더 넓은 패턴에서의 위치</h2>
<p>복원은 더 넓은 패턴의 네 단계 중 하나입니다. 감지, 변환(토큰화), 외부 처리, 복원. 이 패턴은 외부 LLM이 원시 형태로 엔터프라이즈 환경을 벗어날 수 없는 데이터를 처리할 수 있게 해줍니다. <strong>네 단계는 합성됩니다. 아키텍처의 강도는 네 단계 중 가장 약한 것의 강도입니다.</strong></p>
<p>아키텍처 전체와 나머지 세 단계가 담고 있는 설계 결정에 대해서는 민감한 엔터프라이즈 데이터에서 외부 LLM을 실행하는 것에 관한 필러 개요를 참조하십시오. 제거 기반 접근법(마스킹, 검열, PII 가드레일)이 운영 데이터에서 실패하는 이유, 그리고 이 패턴이 애초에 필요한 이유에 대해서는 AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유에 관한 아티클을 참조하십시오. 이 아티클의 복원이 되돌리는 입력 측 토큰화 패턴에 대해서는 LLM 입력을 위한 토큰화 아티클을 참조하십시오.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>복원은 기술적으로 단순하지만 아키텍처 관점에서 매우 중요합니다. 데모에서 잘 작동하는 파일럿과 프로덕션에서 운영되는 워크플로우가 갈리는 지점입니다.</li>
    <li>단순한 역치환이 아닙니다. LLM 출력은 생성적이며 새로운 토큰 조합을 포함하고 포맷 변형을 겪으며 때로는 토큰 형태의 문자열을 환각합니다.</li>
    <li>위치는 협상의 여지가 없습니다. 복원은 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 외부 복원은 보호를 무너뜨립니다.</li>
    <li>세 가지 연동 패턴이 대부분의 워크플로우를 커버합니다. 인라인, 스트리밍, 이벤트 기반. 패턴을 잘못 선택하면 모델 문제처럼 보이는 결함이 발생합니다.</li>
    <li>환각 토큰에는 명시적이고 구성 가능한 정책이 필요합니다. 플래그 표시, 삭제 후 재작성, 또는 거부 후 재프롬프트.</li>
    <li>감사가 필수적입니다. 복원은 원본 값이 워크플로우에 재진입하는 순간이며, 로그는 팀이 그 순간을 방어하거나 조사하는 방법입니다.</li>
    <li>다섯 가지 반복 실수: 수동 정리, 잘못된 위치, 정적 치환, 로그 미기록, 제공업체 종속.</li>
    <li>좋은 복원은 투명한 인프라입니다. 나쁜 복원은 아키텍처가 마지막 구간에서 조용히 실패하는 지점입니다.</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>복원이 왜 단순한 역치환이 아닌가요?</h3>
<p>LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 토큰은 입력에 없었던 문맥, 모델이 만들어낸 조합으로 나타나며, 때로는 포맷 변형이 발생합니다(<code>CUST-7F2A</code>가 <code>CUST 7F2A</code> 또는 <em>"7F2A로 지정된 고객"</em>으로 반환되는 경우). 단순한 정확한 매치 역치환은 이런 경우에 실패하여 토큰 조각이 출력에 그대로 남게 됩니다. 실제 복원은 다양한 생성적 출력 형태에서 견고한 토큰 인식이며, 문법적 일관성을 보존하는 치환입니다.</p>

<h3>복원은 어디에서 실행되어야 하나요?</h3>
<p>매핑 및 소스 시스템과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 미들웨어에서 실행된다면 매핑을 해당 위치에 복제해야 하며, 이는 토큰화가 제공한 보호를 무너뜨립니다. 이것이 이 패턴 배포에서 가장 흔한 아키텍처 실수입니다.</p>

<h3>복원을 위한 세 가지 연동 패턴은 무엇인가요?</h3>
<p><strong>인라인 복원</strong> — AI 연동 레이어가 응답을 반환하기 전에 복원을 수행합니다. 계약 검토와 같은 동기식 요청-응답 워크플로우에 적합합니다. <strong>스트리밍 복원</strong> — 토큰 단위 스트림에서 작동하며 데이터 보호 토큰이 나타날 때 인식할 만큼 충분히 버퍼링합니다. 채팅 스타일 UI 및 실시간 요약에 필요합니다. <strong>이벤트 기반 복원</strong> — CRM, 티켓팅 플랫폼, 문서 저장소 같은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어집니다. 데이터가 사용자가 볼 시스템에 기록되기 직전에 복원이 이루어집니다.</p>

<h3>모델이 토큰을 환각할 때 어떻게 해야 하나요?</h3>
<p>세 가지 합리적인 대응이 있으며 선택은 워크플로우별로 구성 가능해야 합니다. <em>플래그 표시</em>는 환각 토큰을 명시적 갭으로 표시합니다. 깔끔함을 희생하고 투명성을 유지합니다. <em>삭제</em>는 환각 참조를 삭제하고 주변 문장을 재작성합니다. 더 깔끔한 출력이지만 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨깁니다. <em>거부</em>는 응답을 거부하고 입력 토큰만 사용하도록 제한하여 모델에 재프롬프트합니다. 가장 높은 품질이지만 지연 시간과 비용이 추가됩니다. 내부 검토용 요약은 플래그 표시를 선호할 수 있고 고객에게 전달되는 문서는 재프롬프트를 선호할 수 있습니다.</p>

<h3>복원 감사 로그에는 무엇이 포함되어야 하나요?</h3>
<p><em>"어떤 토큰의 복원이 누구에 의해 언제, 어떤 워크플로우를 위해 트리거되었고 결과가 어디로 갔는지"</em>에 답할 수 있는 충분한 메타데이터를 포함해야 합니다. 원본 값 자체는 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 연산을 추적 가능하게 해야 합니다. 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. 사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.</p>

<h3>가장 흔한 복원 실수는 무엇인가요?</h3>
<p>다섯 가지가 반복됩니다. <strong>수동 정리</strong> — 사용자가 수행해야 하는 단계로 복원을 구축하면 건너뜁니다. <strong>잘못된 위치</strong> — 편의를 위해 벤더 클라우드에서 복원을 실행하면 보호가 무너집니다. <strong>정적 치환</strong> — 복원을 정확한 문자열 매치 앤 리플레이스로 취급하면 프로덕션 모델의 지저분한 실제 출력에서 실패합니다. <strong>로그 미기록</strong> — 팀이 아키텍처를 방어하거나 인시던트 대응을 할 수 없습니다. <strong>제공업체 종속</strong> — 복원 로직을 특정 LLM의 응답 형식에 결합하면 워크플로우가 벤더를 전환할 때 작동하지 않게 됩니다.</p>

## Section 04: Related Articles

Related articles
관련 아티클

Running External LLMs on Data Your Company Can't Send Externally
외부로 전송할 수 없는 데이터에서 외부 LLM 실행하기

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
LLM 입력을 위한 토큰화: AI가 보지 않고 읽는 방법

Why AI Workflows Stall at Tables, Tickets, and Operational Documents
AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유

Breadcrumb: Reconstructing AI Output
브레드크럼: AI 출력 복원
