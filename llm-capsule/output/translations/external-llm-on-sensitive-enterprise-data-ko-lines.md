# external-llm-on-sensitive-enterprise-data — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

Running External LLMs on Data Your Company Can't Send Externally
회사가 외부로 보낼 수 없는 데이터에서 외부 LLM 실행하기

Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.
대부분의 엔터프라이즈 AI 워크플로우는 외부 LLM이 회사가 노출할 수 없는 데이터를 요구할 때 멈춥니다. 이 정체를 극복하는 아키텍처 패턴과 각각의 트레이드오프를 살펴봅니다.

AI Architecture
AI Architecture

~10 min read
~10분 읽기

May 2026
2026년 5월

## Section 02: TL;DR

TL;DR
TL;DR

External LLMs produce measurably better output than what most enterprises can run internally — but regulated companies can't send their actual operational data to them. The three standard responses — send and accept the risk, mask and redact, or run an on-premise model — each break at a predictable point. A different approach changes what crosses the boundary rather than whether to cross it: sensitive elements are replaced with structure-preserving tokens inside the enterprise environment, the external LLM works on the tokenised version, and the response is reconstructed internally. The original data never leaves; the frontier-model capability is preserved. This isn't universal — it fits analytical workflows where sensitive elements are identifiable in advance, not personalisation or verification tasks that require the literal identifier. Four design properties define a sound implementation: transformation inside the enterprise environment, exclusive enterprise control of the mapping, a sensitivity definition that evolves with the business, and reconstruction that runs as infrastructure rather than as a manual step.
외부 LLM은 대부분의 기업이 내부적으로 실행할 수 있는 것보다 측정 가능하게 더 나은 결과물을 생성합니다. 그러나 규제 산업의 기업들은 실제 운영 데이터를 외부 LLM에 보낼 수 없습니다. 세 가지 표준 대응책 — 위험을 감수하고 전송, 마스킹 및 삭제, 또는 온프레미스 모델 실행 — 은 각각 예측 가능한 시점에서 실패합니다. 다른 접근 방식은 경계를 넘을지 여부가 아니라 무엇이 경계를 넘는지를 바꿉니다. 민감 요소를 기업 환경 내에서 문서 구조 보존 토큰으로 교체하고, 외부 LLM은 토큰화된 버전을 처리하며, 응답은 내부적으로 복원됩니다. 원본 데이터는 절대 외부로 나가지 않습니다. 최전선 모델 역량은 그대로 유지됩니다. 이 방식은 범용적이지 않습니다. 민감 요소를 사전에 식별할 수 있는 분석 워크플로우에 적합하며, 리터럴 식별자가 필요한 개인화나 검증 작업에는 맞지 않습니다. 올바른 구현을 위한 네 가지 설계 속성이 있습니다. 기업 환경 내에서의 변환, 매핑에 대한 기업의 독점 제어, 비즈니스와 함께 진화하는 민감도 정의, 그리고 수동 단계가 아닌 인프라로 실행되는 복원입니다.

## Section 03: Article Body

<h2>1. 엔터프라이즈 AI의 중심에 있는 조용한 모순</h2>
<p>2026년 대부분의 엔터프라이즈 AI 전략의 중심에는 조용한 모순이 있습니다.</p>
<p>외부 대형 언어 모델 — ChatGPT, Claude, Gemini, 그리고 다른 모델들 — 은 대부분의 기업이 내부적으로 실행할 수 있는 어떤 것보다도 측정 가능하게 더 나은 결과물을 생성합니다. 내부 모델이 처리하기 힘든 컨텍스트 윈도우를 다룹니다. 기업이 재훈련 비용을 지불하지 않아도 몇 달마다 더 나아집니다. 비즈니스에 중요한 대부분의 차원에서 명백한 선택입니다.</p>
<p>그런데도 상당수의 규제 산업 기업에서 그 모델들은 비즈니스가 실제로 운영되는 데이터를 법적으로 또는 계약상 처리할 수 없습니다. 고객 기록은 미국에 호스팅된 엔드포인트로 보낼 수 없습니다. 운영 로그는 섹터별 데이터 위치 요건에 묶여 있습니다. 문서에는 어딘가의 계약이 정의된 경계를 절대 벗어나지 않을 것이라고 명시한 식별자들이 포함되어 있습니다. <strong>AI가 가장 유용하게 활용될 데이터가 바로 AI가 볼 수 없는 데이터입니다.</strong></p>
<p>그 결과는 유럽 은행, 보험사, 통신사, 병원의 CIO라면 누구나 알아볼 수 있는 패턴입니다. 파일럿은 합성 또는 익명화된 샘플로 실행됩니다. 벤치마크는 좋아 보입니다. 이사회에는 AI가 오고 있다고 합니다. 그런 다음 실제 운영에서 파일럿이 건드리지 않았던 데이터를 만나면 워크플로우가 멈춥니다. 일부 팀은 포기합니다. 일부는 실망스러운 내부 LLM을 구축합니다. 일부는 사용해서는 안 되는 승인된 채널을 통해 데이터를 조용히 라우팅합니다 — 현재 사람들이 <em>shadow AI</em>라고 부르는 것입니다.</p>
<p>이 아티클은 엔터프라이즈 AI 팀이 가장 먼저 선택하는 세 가지 표준 접근 방식, 각각이 실패하는 지점, 그리고 통신, 의료, 금융, 방위 분야의 실제 배포에서 등장한 다른 접근 방식 — 질문 자체를 완전히 바꾸는 방식 — 을 설명합니다.</p>

<h2>2. 이 문제가 보기보다 어려운 이유</h2>
<p>문제를 처음 접하면 기존 도구 중 하나를 선택하려는 본능이 생깁니다. 데이터 마스킹 라이브러리, PII 감지 API, 오픈소스 모델의 프라이빗 배포. 각 도구는 문제의 일부를 해결하고, 각각은 워크플로우의 다른 지점에서 실패합니다.</p>
<p>그 이유는 엔터프라이즈 데이터가 도구들이 가정하는 방식으로 구조화되어 있지 않기 때문입니다. 소비자 개인정보 보호 도구는 레코드의 민감한 부분이 이름, 이메일, 전화번호 — 감지하고 교체할 수 있는 필드 — 라고 가정합니다. 그러나 엔터프라이즈 문서는 12개의 교차 참조 필드가 있는 서비스 티켓, 고객 문구가 포함된 자유 형식 설명, 첨부된 로그 조각, 내부 자산 ID 참조입니다. <strong>민감한 정보는 필드만큼이나 구조 안에도 존재합니다.</strong> 구조를 제거하면 AI가 작업할 유용한 것이 없습니다.</p>
<p>또 다른 이유는 엔터프라이즈 데이터 위치 요건이 종종 <em>어떤 종류의 데이터</em>보다는 <em>어디로 가는가</em>에 관한 것이기 때문입니다. 문서는 내부적으로 처리하기는 완전히 합법적이지만 제3국으로 보내는 것은 불가능할 수 있습니다 — 고객 약속, 섹터별 데이터 위치 규칙, 또는 회사 자체의 데이터 정책 때문에. 제약은 범주적인 것만이 아니라 지리적이고 계약적입니다.</p>
<p>이것이 엔터프라이즈 AI 팀이 해결하려는 실제 상황입니다. 정의된 환경을 벗어날 수 없게 묶여 있으면서 <em>바로 그 세부 사항 때문에</em> AI에게 유용한 구조화된 운영 데이터입니다. 가장 유능한 모델들은 그 경계의 반대편에 있습니다.</p>

<h2>3. 세 가지 표준 접근 방식 — 각각의 실패 지점</h2>
<p>대부분의 엔터프라이즈 AI 논의는 세 가지 패턴 중 하나로 귀결됩니다. 각각은 단독으로는 합리적입니다. 그 중 어느 것도 중요한 워크플로우에서 단독으로 실제 운영에 도달하지 못합니다.</p>

<h3>3.1 패턴 1 — 데이터를 전송하고 위험을 감수</h3>
<p>가장 단순한 패턴은 데이터를 외부 LLM으로 보내고 벤더의 계약상 약속 — 데이터 처리 계약, 표준 이전 조항, 지역 엔드포인트 — 에 의존하는 것입니다. 이것이 대부분의 공개 LLM 사용이 실제로 어떻게 이루어지는가입니다.</p>
<p>이 패턴은 데이터가 애초에 민감하지 않은 워크플로우에서 작동합니다 — 마케팅 카피, 공개 문서, 내부 일반 쿼리. 워크플로우가 고객 기록, 운영 시스템, 또는 계약적 데이터 위치 약속에 묶인 것을 건드리는 순간 작동하지 않습니다. <strong>벤더의 약속은 계약적인 것이지 아키텍처적인 것이 아닙니다.</strong> 가장 중요한 워크플로우의 경우, 계약적 수준은 엔터프라이즈 법무 검토가 선을 긋는 경향이 있는 지점입니다.</p>

<h3>3.2 패턴 2 — 전송 전 마스킹 및 삭제</h3>
<p>다음 본능은 민감도 지점에서 데이터를 내부 전용으로 유지하는 것입니다. 이름, ID, 식별 필드는 문서가 LLM으로 가기 전에 마스킹되거나 삭제됩니다. 모델은 정화된 버전을 봅니다.</p>
<p>이 방식은 민감한 부분이 명확하게 분리 가능한 문서에서는 작동합니다 — 당사자를 마스킹한 계약서, 이름을 마스킹한 이력서. 운영 데이터에서는 두 가지 이유로 실패합니다. 첫 번째는 마스킹이 AI에 필요한 구조를 파괴한다는 것입니다. 고객 이름이 <code>[REDACTED]</code>로 교체된 테이블은 더 이상 AI가 추론할 수 있는 테이블이 아닙니다. 두 번째는 운영 데이터가 단순한 마스킹으로는 인식하지 못하는 식별자들로 가득 차 있다는 것입니다 — 티켓 번호, 자산 ID, 내부 코드, 네트워크 식별자, 자유 형식 참조 — 그리고 그것들 중 어느 것이든 문맥에 따라 민감할 수 있습니다.</p>
<p>근본적인 문제는 마스킹이 <em>무엇이 남아 있어 사용 가능한가</em>가 아니라 <em>무엇이 제거되는가</em>를 최적화한다는 것입니다. AI가 데이터의 관계를 이해해야 하는 워크플로우에서 제거 기반 접근 방식은 민감한 부분을 숨기는 데 성공하더라도 워크플로우를 망가뜨립니다.</p>

<h3>3.3 패턴 3 — 완전 온프레미스 모델 실행</h3>
<p>세 번째 패턴은 외부 LLM을 포기하고 내부 인프라에서 오픈소스 모델을 실행하는 것입니다. 데이터는 절대 외부로 나가지 않습니다. 계약적 및 데이터 위치 질문은 스스로 해결됩니다.</p>
<p>이 방식은 작동하지만, 처음에는 항상 명확하지 않은 비용을 수반합니다. 내부 모델은 좋은 것이라도 기업이 실제로 중요하게 여기는 차원 — 복잡한 문서에 대한 추론, 낯선 형식 처리, 긴 컨텍스트 작업 — 에서 최전선 외부 모델보다 12~18개월 뒤처지는 경향이 있습니다. 운영 비용도 현실적입니다. GPU 인프라, 모델 서빙 스택, 평가 파이프라인, 이 모든 것을 유지 관리할 줄 아는 팀. 그리고 취약성도 있습니다. 6개월마다 외부 모델이 도약하고, 내부 모델이 할 수 있는 것과 비즈니스가 이제 기대하는 것 사이의 격차가 불편해집니다.</p>
<p>일부 워크플로우 — 특히 데이터 위치 요건이 절대적이고 워크플로우가 소형 모델로 충분할 만큼 충분히 제한된 경우 — 에서는 이 패턴이 올바른 답입니다. 대부분의 다른 경우에는 AI 이점을 희생하는 대가로 데이터 문제를 해결합니다.</p>

<h3>3.4 세 가지 패턴의 공통점</h3>
<p>세 가지 패턴 모두 하나의 가정을 공유합니다. 질문은 데이터를 외부 LLM으로 보낼 <em>것인가 여부</em>이고, 그렇지 않다면 <em>무엇을 대신 보낼 것인가</em>입니다. 경계를 고정된 것으로 보고 무엇이 그 경계를 통과할 수 있는지를 묻습니다.</p>
<p>다른 접근 방식은 다른 질문을 합니다.</p>

<table>
  <thead>
    <tr>
      <th>패턴</th>
      <th>작동하는 경우</th>
      <th>실패하는 경우</th>
      <th>핵심 트레이드오프</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>데이터를 전송하고 위험을 감수</td>
      <td>데이터가 민감하지 않은 경우 — 마케팅 카피, 공개 문서, 일반 쿼리</td>
      <td>워크플로우가 고객 기록, 운영 시스템, 또는 계약된 데이터에 닿는 경우</td>
      <td>아키텍처적이 아닌 계약적 보호</td>
    </tr>
    <tr>
      <td>전송 전 마스킹 및 삭제</td>
      <td>민감한 부분이 명확하게 분리 가능한 경우 — 계약 당사자, 이력서 이름</td>
      <td>구조에 의미가 있는 운영 데이터; 비명확한 식별자</td>
      <td>사용 가능한 것이 아닌 제거에 최적화</td>
    </tr>
    <tr>
      <td>완전 온프레미스 모델 실행</td>
      <td>소형 모델로 충분히 제한된 워크플로우; 데이터 위치가 절대적인 경우</td>
      <td>워크플로우에 최전선 추론, 긴 컨텍스트, 낯선 형식이 필요한 경우</td>
      <td>AI 이점을 희생하는 대가로 데이터 문제 해결</td>
    </tr>
  </tbody>
</table>

<h2>4. 다른 접근 방식 — 경계를 넘는 것을 바꾼다</h2>
<p>이 접근 방식은 다른 전제에서 시작합니다. <em>외부 LLM에 무엇을 보낼 수 있는가</em>를 묻는 대신, <em>외부 LLM이 유용하려면 무엇이 필요한가, 그리고 원본 데이터 대신 그것을 보낼 수 있는가</em>를 묻습니다.</p>
<p>엔터프라이즈 워크플로우의 큰 범주에서 답은 다음과 같이 밝혀집니다. LLM은 구조, 관계, 제기된 질문, 그리고 기대되는 답변의 형식이 필요합니다. 리터럴 고객 이름, 실제 계좌 번호, 실제 자산 식별자는 필요하지 않습니다. <strong>작업의 맥락에서 실제 값이 동작하는 것과 같은 방식으로 동작하는 플레이스홀더가 필요합니다.</strong></p>
<p>원본 민감 요소가 구조화된 토큰 — 형식, 유형, 관계를 보존하지만 원래 환경 밖에서는 의미가 없는 플레이스홀더 — 으로 교체된다면, 경계를 넘는 것은 더 이상 원본 데이터가 아닙니다. AI에 필요한 모든 것을 유지하고 경계가 내부에 유지되어야 했던 모든 것을 제거한 데이터의 변환입니다.</p>
<p>토큰과 원본 값 사이의 매핑은 환경 내부에 유지됩니다. AI는 토큰화된 버전을 처리하고 토큰화된 응답을 반환합니다. 환경 내부에서 토큰은 원본 값으로 다시 매핑되고, 응답은 실제 고객 이름, 실제 수치, 실제 참조가 포함된 비즈니스 준비 출력물이 됩니다.</p>
<p>이것은 마스킹이 아닙니다. 토큰이 구조와 형식을 보존하기 때문입니다. 합성 데이터도 아닙니다. 워크플로우가 실제 운영 데이터로 실행되기 때문입니다. 온프레미스 배포도 아닙니다. 무거운 작업은 여전히 최전선 외부 모델에서 이루어지기 때문입니다. <strong>이것은 기업 환경과 외부 AI 사이에 위치하는 변환 레이어로, 기업 환경이 아는 것을 바꾸지 않고 외부 AI가 보는 것을 바꿉니다.</strong></p>
<p>다른 커뮤니티는 이 접근 방식의 부분들에 다른 이름을 사용합니다. 데이터 보호 실무에서 대체 단계는 보통 <strong>토큰화(tokenisation)</strong>라고 불립니다 — 민감한 값을 다시 매핑할 수 있는 플레이스홀더로 교체하는 것. 토큰화가 구조 보존, 형식 보존 대역 및 선택적 통계적 보호와 결합될 때, 결과적인 데이터 준비 레이어는 때로 <strong>캡슐화 레이어(encapsulation layer)</strong>라고 불립니다 — 핵심 메커니즘으로 토큰화를 포함하는 더 넓은 아키텍처. 용어는 다양하지만 아키텍처 아이디어는 일관적입니다. 경계는 이동하지 않고 AI 역량은 줄어들지 않습니다. 바뀌는 것은 경계를 넘는 데이터의 형식입니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="boundary-diagram-title boundary-diagram-desc">
      <title id="boundary-diagram-title">엔터프라이즈 경계를 넘는 것</title>
      <desc id="boundary-diagram-desc">원본 데이터와 토큰-값 매핑이 기업 환경 내부에 유지되고, 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달되는 다이어그램.</desc>

      <defs>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5a4"/>
        </marker>
      </defs>

      
      <rect x="20" y="40" width="540" height="340" rx="12" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="40" y="68" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

      
      <rect x="50" y="100" width="180" height="76" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f1130">Original Data</text>
      <text x="140" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">customer records,</text>
      <text x="140" y="166" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">tickets, logs, documents</text>

      
      <rect x="280" y="80" width="240" height="116" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="2"/>
      <text x="400" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#5b4fe9">Transformation Layer</text>
      <line x1="304" y1="124" x2="496" y2="124" stroke="#e5e7eb" stroke-width="1"/>
      <text x="400" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">1. Detect sensitive elements</text>
      <text x="400" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">2. Replace with structured tokens</text>
      <text x="400" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">3. Reconstruct from tokenised response</text>

      
      <rect x="280" y="230" width="240" height="76" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="400" y="258" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0b7f7e">Token ↔ Value Mapping</text>
      <text x="400" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">held exclusively by the enterprise</text>
      <text x="400" y="294" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">never leaves the boundary</text>

      
      <rect x="50" y="320" width="180" height="48" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="342" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f1130">Business-Ready Output</text>
      <text x="140" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">real names, real figures</text>

      
      
      <line x1="230" y1="125" x2="278" y2="125" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>
      
      <line x1="400" y1="198" x2="400" y2="228" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="395" y1="208" x2="395" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      <line x1="405" y1="208" x2="405" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      
      <path d="M 280 175 Q 240 250 230 343" fill="none" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>

      
      <line x1="580" y1="40" x2="580" y2="380" stroke="#ef5350" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="580" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">BOUNDARY</text>

      
      <rect x="640" y="140" width="280" height="140" rx="12" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
      <text x="660" y="168" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
      <text x="780" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#ffffff">ChatGPT · Claude · Gemini</text>
      <text x="780" y="234" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">sees only tokenised data</text>
      <text x="780" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">returns tokenised response</text>

      
      
      <line x1="520" y1="160" x2="638" y2="180" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="155" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised data</text>

      
      <line x1="638" y1="244" x2="520" y2="190" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised response</text>

      
      <g transform="translate(640, 320)">
        <rect x="0" y="0" width="280" height="56" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="12" y1="18" x2="32" y2="18" stroke="#ef5350" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="40" y="22" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">boundary the data cannot cross</text>
        <line x1="12" y1="38" x2="32" y2="38" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="40" y="42" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">mapping stays inside the enterprise</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>원본 데이터와 매핑은 절대 기업을 벗어나지 않습니다. 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달됩니다.</strong></figcaption>
</figure>


<div class="callout">
  <span class="callout__icon">●</span>
  <p class="callout__body"><strong>한 문장으로 요약한 아키텍처.</strong> 원본 데이터와 토큰-값 매핑은 기업 환경 내부에 유지됩니다. 토큰화된 데이터와 토큰화된 응답만 경계를 넘어 외부 LLM으로 전달됩니다.</p>
</div>

<h2>5. 이 접근 방식이 실제로 작동하는 방법</h2>
<p>아키텍처는 네 단계로 분해됩니다. 각 단계에는 독립적인 설계 결정이 있습니다.</p>

<h3>5.1 감지</h3>
<p>어떤 것도 변환되기 전에 시스템은 이 맥락에서 무엇이 민감한지를 식별해야 합니다. 감지의 솔직한 버전은 들리는 것보다 어렵습니다. 운영 데이터의 민감 요소는 단순히 이름과 ID가 아니라 <em>이</em> 기업이 중요하다고 결정한 특정 마커들입니다 — 프로젝트 코드, 거래 조건, 내부 자산 참조, 섹터별 식별자. <strong>일반적인 PII 감지는 중요한 것의 약 40%만 찾아냅니다.</strong> 나머지 60%는 비즈니스가 변화함에 따라 적응할 수 있는 방식으로 기업 자체가 정의해야 합니다. 운영 품질의 감지는 패턴 매칭이 아닌 의미론적 인식으로 구조화된 필드와 비구조화된 자유 형식 텍스트 모두를 처리해야 합니다.</p>

<h3>5.2 변환</h3>
<p>민감 요소가 식별되면, 원본이 담당했던 구조적 역할을 보존하는 플레이스홀더로 교체해야 합니다. 자유 형식 필드의 고객 이름은 AI가 이름으로 인식하고 일관되게 참조할 수 있는 토큰이 됩니다. 계좌 번호는 계좌 번호로 유지되지만, 시스템 외부에서는 의미가 없는 것입니다. 변환은 테이블, 교차 참조, 계층 구조, 문서 구조를 아무것도 손상시키지 않고 처리해야 합니다. <strong>잘 되면 결과는 익명이지만 현실적인 대역이 있는 일관된 문서처럼 읽힙니다. 잘못되면 결과는 더 이상 의미가 없는 <code>[REDACTED]</code> 마커들로 가득합니다.</strong></p>
<p>일부 구현은 토큰화 위에 추가 보호 레이어를 쌓습니다 — 통계적 노이즈 추가, 배치에 걸쳐 k-익명성 적용, 특정 속성에 차등 프라이버시 기법 적용. 이것은 정교한 상관 분석가가 토큰화된 데이터만으로 엔터티를 재식별할 수 있는 잔류 위험을 줄입니다. 이 레이어가 필요한지 여부는 위협 모델에 따라 다릅니다. 대부분의 엔터프라이즈 워크플로우의 경우, 매핑이 잘 제어된다면 구조 보존 토큰화 단독으로 충분합니다. 데이터가 아키텍처 수준에서도 EU 지역이나 다른 정의된 경계 내에 유지되어야 하는 워크플로우의 경우, 추가 보호는 복잡성의 가치가 있습니다.</p>

<h3>5.3 외부 처리</h3>
<p>토큰화된 문서는 기업이 사용하는 API나 통합을 통해 외부 LLM으로 전송됩니다. LLM의 관점에서 이것은 단순히 요청입니다 — 문서가 변환되었다는 것을 알 방법도 없고 알 필요도 없습니다. LLM은 작업을 수행합니다 — 요약, 추출, 분류, 추론 — 그리고 들어간 것과 동일한 토큰을 포함하는 토큰화된 응답을 반환합니다.</p>

<h3>5.4 복원</h3>
<p>기업 환경 내부에서 토큰화된 응답은 원본 값으로 다시 매핑됩니다. 고객 이름에 대한 플레이스홀더는 실제 고객 이름을 돌려받습니다. 플레이스홀더 계좌 번호는 실제 계좌 번호가 됩니다. AI가 생성한 구조와 추론은 보존됩니다. 플레이스홀더만 교체됩니다. 결과는 원래 워크플로우로 흘러갈 준비가 된 비즈니스 준비 출력물입니다.</p>
<p>복원 단계는 대부분의 팀이 과소평가하는 부분입니다. AI 출력이 실제 운영에서 실제로 사용 가능한지 아니면 누군가가 수동으로 재구축해야 하는지를 결정하는 부분입니다. <strong>좋은 복원 레이어는 보이지 않습니다. 사용자가 문서를 제출하고, AI가 분석을 반환하고, 분석이 실제 값과 함께 돌아옵니다.</strong> 변환과 복원은 사용자 직면 단계가 아니라 인프라로 이루어집니다.</p>

<h2>6. 이 접근 방식이 실제로 해결하는 워크플로우</h2>
<p>이 접근 방식은 범용적이지 않습니다. 특정 워크플로우 범주에서 작동하며, 어떤 범주인지에 대해 솔직한 것이 채택 여부를 결정할 때 중요합니다.</p>
<p>맞는 워크플로우는 AI의 작업이 구조적이거나 분석적이고, 민감 요소가 사전에 식별 가능한 것들입니다. 예를 들면:</p>
<ul>
  <li>계약서 요약</li>
  <li>운영 로그에서 사고 보고서 작성</li>
  <li>실사 문서에서 위험 조항 추출</li>
  <li>구조화된 환자 기록에서 임상 노트 생성</li>
  <li>네트워크 알람 시퀀스에서 근본 원인 분석</li>
  <li>보험 청구 파일에서 클레임 분류</li>
</ul>
<p>각 경우에서 AI는 구조와 내용을 추론하고, 고객 식별 부분은 목적 자체가 아니라 목적을 위한 수단입니다.</p>
<p>맞지 않는 워크플로우는 AI가 작업의 일부로 리터럴 민감 내용을 처리해야 하는 것들입니다. 고객에게 직접 말을 거는 개인화된 콘텐츠 생성. 실제 식별자를 확인해야 하는 검증 워크플로우. 원본 문자열이 필요한 조사 검색.</p>
<p>유용한 경험 법칙: AI의 출력이 <em>"이런 종류의 데이터에 이 분석 작업을 수행하고 발견한 것을 알려달라"</em>로 표현될 수 있다면, 이 접근 방식은 일반적으로 작동합니다. AI의 출력이 <em>"이 특정 고객/케이스/식별자를 처리해달라"</em>를 요구한다면, 일반적으로 작동하지 않습니다.</p>

<h2>7. 배포 전에 결정해야 할 것들</h2>
<p>이 접근 방식을 채택하는 것은 체크박스 결정이 아닙니다. 나중에 재검토하기보다 처음부터 결정하기 더 쉬운 아키텍처 선택들을 수반합니다.</p>

<h3>7.1 변환이 실행되는 위치</h3>
<p>변환 레이어는 기업 환경 내부에서 실행되어야 합니다 — 온프레미스, 회사 자체 클라우드 VPC, 전용 인프라. 제약은 변환이 데이터가 외부 네트워크에 도달하기 <em>전에</em> 이루어진다는 것으로, 레이어가 AI 엔드포인트가 아니라 소스 시스템과 함께 배치됨을 의미합니다.</p>

<h3>7.2 매핑을 누가 제어하는가</h3>
<p>토큰과 원본 값 사이의 매핑은 아키텍처의 가장 민감한 구성 요소입니다. 사실상 데이터를 재식별하는 키입니다. <strong>표준 관행 — 그리고 좋은 관행 — 은 매핑이 기업에 의해 독점적으로 유지되는 것입니다. 외부 LLM 공급자가 접근할 수 없는 스토리지에.</strong> 이것은 설정 옵션이 아닌 협상 불가능한 설계 속성입니다. 벤더의 아키텍처가 매핑이 기업 환경을 벗어나는 것을 허용한다면, 이 접근 방식의 보호는 붕괴됩니다.</p>

<h3>7.3 민감도가 정의되는 방법</h3>
<p>일반적인 PII 범주 — 이름, 이메일, 전화번호 — 는 시작이지 끝이 아닙니다. 기업은 자체 맥락에서 무엇이 민감한지를 정의해야 합니다. 내부 프로젝트 코드, 고객 세그먼트 식별자, 섹터별 참조. 정의는 버전 관리되어야 합니다. 무엇이 민감한지는 변화하기 때문입니다 — 어제는 금융 고객 데이터, 오늘은 새로운 M&amp;A 코드명, 내일은 규제 부문의 자산 참조. 정적 정의는 빠르게 구식이 됩니다.</p>

<h3>7.4 워크플로우가 출력을 처리하는 방법</h3>
<p>복원은 기업 환경 내부에서 이루어져야 합니다. 워크플로우가 사용하는 전달 채널 — 티켓팅 시스템, 문서 관리 플랫폼, 분석가의 검토 인터페이스 — 에 통합되어야 합니다. <strong>복원이 별도의 수동 단계라면, 사용자는 그것을 건너뛸 것이고 아키텍처의 가치는 사라집니다.</strong></p>

<h3>7.5 외부 엔드포인트가 변경될 때 어떻게 되는가</h3>
<p>외부 LLM은 안정적인 인프라가 아닙니다. 모델은 더 이상 사용되지 않고, 벤더는 가격을 바꾸고, 새로운 옵션이 등장합니다. 이 접근 방식은 변환 레이어가 공급자에 구애받지 않을 때 가장 잘 작동합니다 — ChatGPT를 Claude나 새 벤더로 교체하는 것이 아키텍처 재작성이 아닌 설정 변경일 때.</p>

<h2>8. 이 접근 방식의 한계, 솔직하게</h2>
<p>이 접근 방식은 실제 문제를 해결하지만 모든 문제를 해결하지는 않습니다. 한계는 명확하게 언급할 가치가 있습니다.</p>
<ul>
  <li><strong>AI의 실제 작업이 원본 민감 데이터를 요구할 때는 도움이 되지 않습니다</strong> — 리터럴 식별자가 핵심인 검증, 검색, 개인화 작업.</li>
  <li><strong>레이턴시가 추가됩니다.</strong> 감지, 변환, 복원은 각각 시간이 걸립니다. 대부분의 엔터프라이즈 워크플로우에서 이것은 보이지 않습니다 — 오버헤드는 어차피 몇 초가 걸리는 워크플로우에서 일부 초의 분수입니다. 레이턴시에 민감한 애플리케이션의 경우 오버헤드가 중요할 수 있습니다.</li>
  <li><strong>감지 및 정의 레이어에 지속적인 투자가 필요합니다.</strong> 민감도는 정적이지 않습니다. 마커는 비즈니스와 함께 진화합니다. 정의도 진화해야 합니다. 팀이 그것을 소유해야 하고, 팀은 비즈니스가 실제로 어떻게 변화하는지와 연결되어야 합니다. 정의를 소유하지 않고 기술을 구매하면 아키텍처가 천천히 쇠퇴합니다.</li>
  <li><strong>애초에 어떤 데이터를 처리해야 하는가에 대한 조직적 결정을 대신하지 않습니다.</strong> 일부 워크플로우는 변환에 관계없이 외부 모델로 전송해서는 안 됩니다 — 데이터가 너무 민감하고, 워크플로우가 너무 중요하고, 실패 모드가 너무 비쌉니다. 이 접근 방식은 답이 <em>"적절한 아키텍처로 이것이 유용할 것이다"</em>인 워크플로우를 위한 것이지, 답이 <em>"절대 안 된다"</em>인 워크플로우를 위한 것이 아닙니다.</li>
  <li><strong>기업이 실제로 자체 환경 내에서 레이어를 배포해야 합니다.</strong> 이 접근 방식을 외부 SaaS로 제공하는 벤더들 — 변환이 벤더의 인프라에서 이루어지는 — 은 아키텍처를 다른 문제로 붕괴시켰습니다. 핵심은 변환이 데이터가 이미 존재하는 곳에서 실행된다는 것입니다.</li>
</ul>

<h2>9. AI 전략의 다음 단계</h2>
<p>2026년 대부분의 규제 EU 기업에서 실제 운영 AI로의 경로는 이 접근 방식의 어떤 버전을 통해 실행됩니다. 외부 LLM의 경제성은 무시하기에는 너무 좋습니다. 데이터 위치에 대한 제약은 무시하기에는 너무 현실적입니다. 기존 도구들 — 마스킹, 온프레미스 배포 — 은 문제의 일부를 해결하지만 전부는 아닙니다.</p>
<p>이 접근 방식은 완성된 범주가 아닙니다. 감지, 변환 강도, 복원 처리, 배포 토폴로지에 관한 서로 다른 설계 선택을 가진 여러 벤더의 여러 구현이 있습니다. 그 중에서 선택하는 것은 기업 환경에 특정한 질문들로 귀결됩니다. 레이어가 통합해야 하는 기존 시스템이 무엇인지, 민감도 정의가 어떻게 생겼는지, 보안 팀이 이미 어떤 배포 자세에 헌신했는지, 외부 모델과 온프레미스 모델 사이의 워크플로우 혼합이 어떻게 될 것인지.</p>
<p>구현 전반에 걸쳐 일관된 것은 이 접근 방식을 정의하는 아키텍처 약속입니다.</p>
<ol>
  <li>원본 데이터는 기업 경계 내부에 유지됩니다</li>
  <li>AI 역량은 보존됩니다</li>
  <li>변환은 기업이 제어하는 레이어에서 실행됩니다</li>
  <li>복원을 가능하게 하는 매핑은 기업의 독점 제어 하에 유지됩니다</li>
</ol>
<p>그 네 가지 속성이 유지될 때, 파일럿에서 정체되었던 워크플로우가 실제 운영으로 이동하기 시작합니다.</p>
<p>이 아티클을 시작하는 모순은 완전히 해결되지 않습니다 — 제약과 역량을 조화시킬 수 없는 워크플로우는 항상 있을 것입니다. 그러나 엔터프라이즈 AI 작업의 넓은 중간 영역에서, 이 접근 방식은 AI 전략과 데이터 전략이 더 이상 충돌하지 않도록 하는 아키텍처 답입니다.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 내용</div>
  <ul>
    <li>규제 산업 기업들은 모순에 직면합니다. 가장 유능한 AI 모델은 외부에 있고, 가장 유용한 데이터는 경계를 벗어날 수 없습니다</li>
    <li>세 가지 표준 대응책 — 위험 감수, 마스킹 및 삭제, 온프레미스 실행 — 은 각각 예측 가능한 지점에서 실패합니다</li>
    <li>다른 접근 방식은 경계를 넘을 <em>것인가 여부</em>가 아니라 <em>무엇이</em> 경계를 넘는가를 바꿉니다 — 문서 구조 보존 토큰화 사용</li>
    <li>네 단계: 감지 → 변환 → 외부 처리 → 복원</li>
    <li>민감 요소를 사전에 식별할 수 있는 분석 워크플로우에 적합합니다. 리터럴 식별자가 필요한 개인화나 검증 작업에는 맞지 않습니다</li>
    <li>네 가지 협상 불가능한 설계 속성: 기업 내부에서의 변환, 매핑의 독점 제어, 진화하는 민감도 정의, 인프라로서의 복원</li>
    <li>한계: 추가 레이턴시, 감지에 대한 지속적 투자, 애초에 무엇을 처리해야 하는가에 대한 조직적 결정의 대체 불가</li>
    <li>설계상 공급자에 구애받지 않습니다 — ChatGPT, Claude, Gemini를 교체하는 것은 아키텍처 재작성이 아닌 설정 변경입니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>이 접근 방식은 데이터 마스킹과 어떻게 다릅니까?</h3>
<p>마스킹은 <em>무엇이 제거되는가</em>를 최적화합니다 — 이름, ID, 식별 필드는 삭제 마커로 교체됩니다. 민감한 부분이 명확하게 분리 가능한 문서에서는 작동하지만, AI가 추론해야 하는 구조가 과정에서 파괴되기 때문에 운영 데이터에서는 실패합니다. 여기서 설명하는 접근 방식은 문서 구조 보존 토큰화를 사용합니다. 민감 요소는 형식, 유형, 관계를 유지하는 플레이스홀더로 교체됩니다. 따라서 AI는 단편화된 문서가 아닌 일관된 문서를 봅니다. 원본 값으로의 매핑은 기업 내부에 유지됩니다.</p>

<h3>이 접근 방식은 모든 외부 LLM에서 작동합니까, 아니면 특정 것만?</h3>
<p>이 접근 방식은 설계상 공급자에 구애받지 않습니다. 외부 LLM의 관점에서 일반적인 요청을 받습니다 — 문서가 변환되었다는 것을 알 방법도 없고 알 필요도 없습니다. 이것은 ChatGPT를 Claude, Gemini, 또는 새 벤더로 교체하는 것이 아키텍처 재작성보다는 설정 변경임을 의미합니다. 변환 레이어는 상수이고, 외부 모델은 변수입니다.</p>

<h3>토큰과 원본 값 사이의 매핑은 어떻게 됩니까?</h3>
<p>매핑은 아키텍처의 가장 민감한 구성 요소입니다 — 사실상 데이터를 재식별하는 키입니다. 표준 및 좋은 관행은 매핑이 기업에 의해 독점적으로 유지되는 것입니다. 외부 LLM 공급자가 접근할 수 없는 스토리지에. 이것은 협상 불가능한 설계 속성입니다. 벤더의 아키텍처가 매핑이 기업 환경을 벗어나는 것을 허용한다면, 이 접근 방식의 보호는 붕괴됩니다.</p>

<h3>변환 레이어는 어디서 실행되어야 합니까?</h3>
<p>기업 환경 내부에서 — 온프레미스, 회사 자체 클라우드 VPC, 또는 기업이 제어하는 전용 인프라에서. 제약은 변환이 데이터가 외부 네트워크에 도달하기 <em>전에</em> 이루어진다는 것입니다. 이 접근 방식을 외부 SaaS로 제공하는 벤더들 — 변환이 벤더의 인프라에서 이루어지는 — 은 아키텍처를 다른 문제로 붕괴시켰습니다. 핵심은 변환이 데이터가 이미 존재하는 곳에서 실행된다는 것입니다.</p>

<h3>이 접근 방식이 해결하지 못하는 워크플로우는 무엇입니까?</h3>
<p>AI가 작업의 일부로 리터럴 민감 내용을 처리해야 하는 워크플로우입니다. 고객에게 직접 말을 거는 개인화된 콘텐츠 생성. 실제 식별자를 확인해야 하는 검증 워크플로우. 원본 문자열이 필요한 조사 검색. 유용한 경험 법칙: AI의 출력이 <em>"이런 종류의 데이터에 이 분석 작업을 수행하고 발견한 것을 알려달라"</em>로 표현될 수 있다면, 이 접근 방식은 일반적으로 작동합니다. 출력이 <em>"이 특정 고객/케이스/식별자를 처리해달라"</em>를 요구한다면, 일반적으로 작동하지 않습니다.</p>

<h3>온프레미스 오픈소스 모델 실행과 어떻게 다릅니까?</h3>
<p>온프레미스 배포는 AI 역량을 내부적인 것으로 교체하여 데이터 문제를 해결합니다 — 데이터는 절대 외부로 나가지 않지만, 모델은 기업이 호스팅할 수 있는 것입니다. 워크플로우가 소형 모델로 충분할 만큼 충분히 제한된 경우에 작동합니다. 변환 레이어 접근 방식은 최전선 외부 모델을 계속 활용하고 대신 경계를 넘는 <em>것</em>을 바꿉니다. 무거운 작업은 여전히 가장 유능한 모델에서 이루어집니다. 다른 것은 데이터의 형식입니다.</p>

## Section 04: Related Articles

Related articles
관련 아티클

Differential privacy for enterprise LLM
엔터프라이즈 LLM을 위한 차등 프라이버시

Sovereign AI for European enterprises
유럽 기업을 위한 Sovereign AI

On-prem LLM execution path
온프레미스 LLM 실행 경로

AI on network operations data
네트워크 운영 데이터에서의 AI

Running External LLMs on Sensitive Enterprise Data
민감한 엔터프라이즈 데이터에서 외부 LLM 실행하기
