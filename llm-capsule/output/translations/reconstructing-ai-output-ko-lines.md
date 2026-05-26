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

### 1. Why Reconstruction Is More Than a Swap-Back

1. 복원이 단순한 역치환 이상인 이유

When enterprise AI teams design a workflow that sends tokenised documents to an external LLM, most of the attention goes to the preparation step: detection, transformation, what crosses the boundary. The response side gets less thought. The assumption is that once the model returns its output, the workflow just needs to swap the tokens back and the result is ready.
엔터프라이즈 AI 팀이 토큰화된 문서를 외부 LLM에 전송하는 워크플로우를 설계할 때, 대부분의 관심은 준비 단계에 집중됩니다. 감지, 변환, 경계를 넘는 데이터가 무엇인지. 응답 쪽에는 관심이 덜합니다. 모델이 출력을 반환하면 토큰만 되돌려 치환하면 결과가 완성된다는 가정 때문입니다.

That assumption is approximately right and operationally wrong. The reconstruction step is technically straightforward — look up tokens in a mapping, substitute back — and architecturally critical. It is where the difference between a pilot that demos well and a workflow that runs in production gets decided. Teams that treat reconstruction as an afterthought consistently find their AI projects stalling at the same point: the model works, the integration works, but the output is not in a form anyone can actually use without manual cleanup, and the productivity gain that justified the project evaporates.
그 가정은 대략적으로는 맞지만 운영적으로는 잘못된 것입니다. 복원 단계는 기술적으로 단순합니다. 매핑에서 토큰을 찾아 되돌려 치환합니다. 하지만 아키텍처 관점에서는 매우 중요합니다. 데모에서 잘 작동하는 파일럿과 프로덕션에서 실제로 운영되는 워크플로우의 차이가 결정되는 지점입니다. 복원을 부차적으로 다루는 팀은 항상 같은 지점에서 AI 프로젝트가 막힙니다. 모델도 작동하고 연동도 작동하지만, 출력이 수동 정리 없이는 실제로 사용할 수 있는 형태가 아니어서 프로젝트를 정당화했던 생산성 향상 효과가 사라집니다.

In the simplest case, reconstruction is symmetric with tokenisation. The input had Marlene Schmidt replaced with CUST-7F2A; the output references CUST-7F2A; the reconstruction step swaps CUST-7F2A back to Marlene Schmidt and the workflow continues.
가장 단순한 경우, 복원은 토큰화와 대칭입니다. 입력에서 Marlene Schmidt가 CUST-7F2A로 치환되었고, 출력에서 CUST-7F2A가 참조되면, 복원 단계에서 CUST-7F2A를 다시 Marlene Schmidt로 되돌리고 워크플로우가 계속됩니다.

If every workflow looked like this, reconstruction would be a trivial concern. Workflows don't look like this for a few reasons.
모든 워크플로우가 이런 형태라면 복원은 사소한 문제일 것입니다. 하지만 몇 가지 이유로 워크플로우는 이런 형태가 아닙니다.

The model's response is generative, not just substitutive. The LLM doesn't just copy tokens from input to output; it produces new text that reasons over the tokens. The output references tokens in new sentences, in new combinations, sometimes paraphrased, sometimes summarised, sometimes synthesised across multiple input tokens. A reconstruction layer has to handle tokens appearing in contexts the input never had.
모델의 응답은 생성적이며 단순히 치환적이지 않습니다. LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 출력은 새 문장, 새 조합으로 토큰을 참조하며, 때로는 의역되거나 요약되거나 여러 입력 토큰에 걸쳐 합성됩니다. 복원 레이어는 입력에 없었던 문맥에 등장하는 토큰을 처리해야 합니다.

The response can contain tokens the input didn't. A summarisation task that reasons over five tickets might produce a sentence like "Three of the affected customers (CUST-7F2A, CUST-3B91, CUST-9D2C) share the same firmware version." That construction is new. The reconstruction layer has to find each token, look it up, and substitute back into a sentence the model wrote.
응답에는 입력에 없던 토큰이 포함될 수 있습니다. 다섯 개의 티켓을 바탕으로 추론하는 요약 작업이 "영향을 받은 고객 중 세 명(CUST-7F2A, CUST-3B91, CUST-9D2C)이 동일한 펌웨어 버전을 사용합니다."와 같은 문장을 생성할 수 있습니다. 이 구문은 새로운 것입니다. 복원 레이어는 각 토큰을 찾아 조회하고 모델이 작성한 문장에 되돌려 치환해야 합니다.

The response sometimes contains malformed references to tokens. Models occasionally lose track of token formatting, especially across long outputs. A token that went in as CUST-7F2A might come back as CUST 7F2A, CUST7F2A, or simply "the customer designated 7F2A." A reconstruction layer that only does exact string matching fails in these cases, and the output to the user contains visible token fragments that should have been resolved.
응답에는 때때로 토큰에 대한 형식이 잘못된 참조가 포함됩니다. 모델은 특히 긴 출력에서 토큰 형식을 놓치는 경우가 있습니다. CUST-7F2A로 입력된 토큰이 CUST 7F2A, CUST7F2A, 또는 단순히 "7F2A로 지정된 고객"으로 반환될 수 있습니다. 정확한 문자열 매칭만 수행하는 복원 레이어는 이런 경우에 실패하고, 사용자에게 전달되는 출력에 해결되어야 했을 토큰 조각이 그대로 남게 됩니다.

The response may include the model's commentary or hedging. "Based on the information about customer CUST-7F2A, the most likely root cause is..." The reconstruction has to handle the token appearing in a clause the model added on its own, with the same correctness as a token that appears in a direct extraction.
응답에는 모델의 코멘트나 헤징이 포함될 수 있습니다. "고객 CUST-7F2A에 대한 정보를 바탕으로 가장 가능성 높은 근본 원인은..."과 같은 형태입니다. 복원은 모델이 스스로 추가한 절에 등장하는 토큰도 직접 추출한 토큰과 동일한 정확도로 처리해야 합니다.

What looks like swap-back, then, is actually a small but real text-processing problem: robust token recognition across diverse output forms, with the substitution happening in a way that preserves the grammatical coherence of the model's response.
따라서 역치환처럼 보이는 것은 실제로는 작지만 실질적인 텍스트 처리 문제입니다. 다양한 출력 형태에서 토큰을 견고하게 인식하고, 모델 응답의 문법적 일관성을 보존하는 방식으로 치환이 이루어져야 합니다.

### 2. Where Reconstruction Has to Happen

2. 복원이 실행되어야 하는 위치

The location of reconstruction is non-negotiable: it has to happen inside the enterprise environment, before the output reaches the user or any downstream system.
복원의 위치는 협상의 여지가 없습니다. 출력이 사용자나 다운스트림 시스템에 도달하기 전에 엔터프라이즈 환경 내부에서 실행되어야 합니다.

The reason is the same reason the mapping has to stay in the enterprise environment. Reconstruction requires reading the mapping. If reconstruction happens outside the enterprise — on a vendor's infrastructure, in a third-country region, on any system the enterprise doesn't fully control — then the mapping has to be made available to that location, which collapses the protection the tokenisation provided in the first place.
그 이유는 매핑이 엔터프라이즈 환경에 있어야 하는 이유와 같습니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부에서 일어난다면, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 시스템에서 실행된다면, 매핑을 해당 위치에서 접근 가능하게 해야 하며, 이는 토큰화가 처음에 제공한 보호를 무너뜨립니다.

This is the most common architectural mistake in deployments of this pattern: teams set up tokenisation inside the environment, send to the external LLM, and then run reconstruction in a cloud service or middleware that happens to be convenient. The convenience is real. The protection is gone. The mapping that was supposed to stay under the enterprise's exclusive control has been replicated to a location where the original promises no longer hold.
이것이 이 패턴 배포에서 가장 흔한 아키텍처 실수입니다. 팀이 환경 내부에서 토큰화를 설정하고, 외부 LLM에 전송한 다음, 편리하게 접근 가능한 클라우드 서비스나 미들웨어에서 복원을 실행합니다. 편의성은 실재합니다. 하지만 보호는 사라집니다. 엔터프라이즈의 독점적 통제 하에 있어야 했던 매핑이 원래의 약속이 더 이상 유효하지 않은 위치에 복제된 것입니다.

The correct architecture is that reconstruction is colocated with the source systems and the mapping — on-premise, in the enterprise's own VPC, in whatever EU-region infrastructure the workflow runs in. The output of the LLM comes back tokenised, traverses to the reconstruction layer inside the boundary, and emerges from that layer as business-ready content. The external journey of the data ends at the reconstruction step.
올바른 아키텍처는 복원이 소스 시스템 및 매핑과 함께 위치하는 것입니다. 온프레미스, 엔터프라이즈 자체 VPC, 또는 워크플로우가 실행되는 EU 리전 인프라 어디든. LLM의 출력은 토큰화된 상태로 반환되어 경계 내부의 복원 레이어로 이동하며, 해당 레이어에서 업무용 콘텐츠로 변환되어 나옵니다. 데이터의 외부 여정은 복원 단계에서 끝납니다.

For workflows where the rest of the architecture is meticulous about boundaries — encapsulation inside, mapping inside, audit logs inside — and reconstruction is the one piece that wandered outside, the rest of the architecture's promises are weakened to whatever the reconstruction location can guarantee.
아키텍처의 나머지 부분이 경계에 대해 철저한 워크플로우에서, 즉 내부 캡슐화, 내부 매핑, 내부 감사 로그를 갖추고 있는데 복원만 외부로 빠져나간 경우, 나머지 아키텍처의 약속은 복원 위치가 보장할 수 있는 수준으로 약화됩니다.

[SVG Figure 1 텍스트 번역]

Title: Where reconstruction has to happen
제목: 복원이 실행되어야 하는 위치

Description: Two architectures side by side. On the left, reconstruction runs on external middleware, forcing the mapping to be replicated outside the enterprise — the protection collapses. On the right, reconstruction runs inside the enterprise environment colocated with the mapping, and the protection holds.
설명: 두 아키텍처가 나란히 표시됩니다. 왼쪽은 복원이 외부 미들웨어에서 실행되어 매핑이 엔터프라이즈 외부에 복제되며 보호가 무너지는 경우입니다. 오른쪽은 복원이 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어 보호가 유지되는 경우입니다.

✗ Reconstruction outside the enterprise
✗ 엔터프라이즈 외부에서의 복원

ENTERPRISE
기업 환경

Tokenisation / runs inside ✓
토큰화 / 내부 실행 ✓

Mapping / held inside ✓
매핑 / 내부 보관 ✓

mapping replicated
매핑 복제됨

VENDOR / MIDDLEWARE
벤더 / 미들웨어

Reconstruction / runs OUTSIDE ✗
복원 / 외부 실행 ✗

Protection collapses to whatever the external location can guarantee — usually less than the original promise.
보호 수준이 외부 위치가 보장할 수 있는 수준으로 떨어집니다. 일반적으로 원래 약속보다 낮습니다.

✓ Reconstruction inside the enterprise
✓ 엔터프라이즈 내부에서의 복원

ENTERPRISE ENVIRONMENT
기업 환경

Tokenisation / runs inside ✓
토큰화 / 내부 실행 ✓

Mapping / held inside ✓
매핑 / 내부 보관 ✓

Reconstruction / colocated with mapping ✓
복원 / 매핑과 함께 위치 ✓

Audit log / separate access controls ✓
감사 로그 / 별도 접근 제어 ✓

EXTERNAL LLM / sees only tokens
외부 LLM / 토큰만 처리

Mapping never leaves the boundary. The external journey of the data ends at the reconstruction step.
매핑은 경계를 벗어나지 않습니다. 데이터의 외부 여정은 복원 단계에서 끝납니다.

Figure 1 · The most common architectural mistake — running reconstruction on external middleware because it's convenient — replicates the mapping outside the enterprise and collapses the protection the tokenisation provided.
그림 1 · 가장 흔한 아키텍처 실수는 편의를 위해 외부 미들웨어에서 복원을 실행하는 것입니다. 이는 매핑을 엔터프라이즈 외부에 복제하여 토큰화가 제공한 보호를 무너뜨립니다.

### 3. How Reconstruction Integrates With the Workflow

3. 복원이 워크플로우와 통합되는 방식

Reconstruction is not a standalone step the user invokes. It is infrastructure that has to integrate into wherever the AI's output is delivered. Three integration patterns cover most enterprise deployments.
복원은 사용자가 호출하는 독립적인 단계가 아닙니다. AI 출력이 전달되는 모든 위치에 통합되어야 하는 인프라입니다. 세 가지 연동 패턴이 대부분의 엔터프라이즈 배포를 커버합니다.

3.1 Inline Reconstruction in the Response Path
3.1 응답 경로에서의 인라인 복원

The AI integration layer — whatever middleware sits between the workflow and the LLM endpoint — performs reconstruction before returning the response to the calling system. The calling system never sees tokens; it receives the business-ready output. This is the cleanest pattern and works for synchronous request-response workflows: contract review, summarisation, classification.
AI 연동 레이어, 즉 워크플로우와 LLM 엔드포인트 사이에 위치한 미들웨어가 호출 시스템에 응답을 반환하기 전에 복원을 수행합니다. 호출 시스템은 토큰을 볼 수 없으며 업무용 출력을 받습니다. 이것이 가장 깔끔한 패턴으로, 계약 검토, 요약, 분류 같은 동기식 요청-응답 워크플로우에 적합합니다.

3.2 Streaming Reconstruction
3.2 스트리밍 복원

For LLM responses that stream token-by-token (in the NLP sense, not the data-protection sense — note the unfortunate vocabulary collision), reconstruction has to work on the stream, recognising data-protection tokens as they appear and substituting in real time. This is harder than batch reconstruction because the data-protection token may be partially streamed at any given moment, and the reconstruction layer has to buffer enough to recognise it. Workflows that use streaming UIs (chat-style interfaces, live summarisation feeds) need this pattern; workflows that wait for the full response don't.
토큰 단위로 스트리밍되는 LLM 응답의 경우(데이터 보호 의미가 아닌 NLP 의미의 토큰, 불행히도 용어 충돌이 있습니다), 복원은 스트림에서 작동해야 하며 데이터 보호 토큰이 나타나는 즉시 인식하고 실시간으로 치환해야 합니다. 어느 시점에서든 데이터 보호 토큰이 부분적으로만 스트리밍될 수 있기 때문에 배치 복원보다 어렵습니다. 복원 레이어는 이를 인식할 만큼 충분히 버퍼링해야 합니다. 스트리밍 UI(채팅 스타일 인터페이스, 실시간 요약 피드)를 사용하는 워크플로우는 이 패턴이 필요하며, 전체 응답을 기다리는 워크플로우는 필요하지 않습니다.

3.3 Event-Driven Reconstruction
3.3 이벤트 기반 복원

For workflows where the AI's output triggers downstream actions — creating a ticket in the operations platform, writing a report into the document management system, updating a record in the CRM — reconstruction has to happen at the boundary between the AI integration and the downstream system. The tokenised response can be processed for routing, classification, or triage in the integration layer; reconstruction happens just before the data is written into the system the user will see.
AI 출력이 다운스트림 작업을 트리거하는 워크플로우, 즉 운영 플랫폼에서 티켓 생성, 문서 관리 시스템에 보고서 작성, CRM 레코드 업데이트 등의 경우, 복원은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어져야 합니다. 토큰화된 응답은 연동 레이어에서 라우팅, 분류 또는 트리아지 처리를 위해 처리될 수 있습니다. 복원은 데이터가 사용자가 볼 시스템에 기록되기 직전에 이루어집니다.

The architecture has to make explicit which of these patterns applies to which workflow. A misalignment — running streaming reconstruction on a workflow that should be event-driven, or inline reconstruction on a workflow that should stream — produces user-visible defects that look like AI quality problems but are actually integration problems.
아키텍처는 어떤 패턴이 어떤 워크플로우에 적용되는지 명확히 해야 합니다. 패턴이 맞지 않으면, 예를 들어 이벤트 기반이어야 하는 워크플로우에 스트리밍 복원을 실행하거나 스트리밍이어야 하는 워크플로우에 인라인 복원을 실행하면, AI 품질 문제처럼 보이지만 실제로는 연동 문제인 사용자 가시적 결함이 발생합니다.

### 4. When the Model Produces Tokens That Don't Exist

4. 모델이 존재하지 않는 토큰을 생성할 때

A specific failure mode worth treating carefully: the model occasionally hallucinates tokens. It produces a string that looks like a token in the system's format but doesn't correspond to anything in the mapping.
신중하게 다루어야 할 특정 실패 모드가 있습니다. 모델이 때때로 토큰을 환각합니다. 시스템 형식의 토큰처럼 보이지만 매핑에 존재하지 않는 문자열을 생성합니다.

This happens for predictable reasons. The model has seen CUST-7F2A and CUST-3B91 in the input and produces CUST-5D44 in the output, drawing on the pattern. Or the model summarises and invents a token-shaped placeholder for an entity it inferred. Or, more rarely, the model echoes a token format from its training data that happens to collide with the enterprise's token format.
이는 예측 가능한 이유로 발생합니다. 모델이 입력에서 CUST-7F2A와 CUST-3B91을 보고 패턴을 활용하여 출력에서 CUST-5D44를 생성합니다. 또는 모델이 추론한 엔티티에 대해 토큰 형태의 플레이스홀더를 만들어냅니다. 더 드물게는 모델이 학습 데이터의 토큰 형식을 반향하여 엔터프라이즈의 토큰 형식과 충돌하기도 합니다.

The reconstruction layer cannot silently substitute a hallucinated token, because there is nothing to substitute it with. It also cannot leave the hallucinated token in the output, because the user will see a fragment that looks like a system identifier. There are three reasonable responses.
복원 레이어는 환각 토큰을 조용히 치환할 수 없습니다. 치환할 대상이 없기 때문입니다. 또한 환각 토큰을 출력에 그대로 둘 수도 없습니다. 사용자가 시스템 식별자처럼 보이는 조각을 보게 되기 때문입니다. 합리적인 대응은 세 가지입니다.

Flag the hallucinated token in the output and surface it to the user as an explicit gap — for example, "[Reference to an entity the model produced but the system cannot resolve.]" This preserves transparency at the cost of some output cleanliness.
출력에서 환각 토큰에 플래그를 표시하고 사용자에게 명시적 갭으로 표시합니다. 예를 들어 "[모델이 생성했지만 시스템이 해석할 수 없는 엔티티에 대한 참조.]"와 같이. 이는 출력의 깔끔함을 일부 희생하고 투명성을 유지합니다.

Drop the hallucinated reference and rewrite the surrounding sentence. This produces cleaner output but requires the reconstruction layer to do non-trivial text manipulation, and may obscure that the model produced something not grounded in the input.
환각 참조를 삭제하고 주변 문장을 재작성합니다. 더 깔끔한 출력을 생성하지만 복원 레이어가 상당한 텍스트 조작을 수행해야 하며, 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨길 수 있습니다.

Reject the response and re-prompt the model, with a system instruction that constrains it to use only the tokens that appeared in the input. This produces the highest-quality output but adds latency and cost.
응답을 거부하고 입력에 등장한 토큰만 사용하도록 제한하는 시스템 지침과 함께 모델에 재프롬프트합니다. 가장 높은 품질의 출력을 생성하지만 지연 시간과 비용이 추가됩니다.

Different workflows want different responses. A summarisation for internal review may prefer the first option (flag and surface). A document going to a customer may prefer the third (re-prompt). The choice should be configurable at the workflow level, not hard-coded into the reconstruction layer.
워크플로우마다 다른 대응을 원합니다. 내부 검토용 요약은 첫 번째 옵션(플래그 표시)을 선호할 수 있습니다. 고객에게 전달되는 문서는 세 번째(재프롬프트)를 선호할 수 있습니다. 이 선택은 복원 레이어에 하드코딩되지 않고 워크플로우 수준에서 구성 가능해야 합니다.

### 5. Audit and Traceability

5. 감사 및 추적성

Reconstruction is the moment where the original sensitive values re-enter the workflow. From an audit perspective, it is one of the most important moments in the architecture, because it is where the access controls on the original data are exercised.
복원은 원본 민감 값이 워크플로우에 재진입하는 순간입니다. 감사 관점에서 이것은 아키텍처에서 가장 중요한 순간 중 하나입니다. 원본 데이터에 대한 접근 제어가 행사되는 지점이기 때문입니다.

A well-designed reconstruction layer logs every operation: which token was looked up, when, in service of which workflow, by which integration. The log doesn't need to contain the original values — that would defeat the point of access controls — but it has to contain enough metadata to answer the question "who triggered the reconstruction of which token, and where did the result go."
잘 설계된 복원 레이어는 모든 연산을 기록합니다. 어떤 토큰이 조회되었는지, 언제, 어떤 워크플로우를 위해, 어떤 연동에 의해. 로그는 원본 값을 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 "어떤 토큰의 복원이 누구에 의해 트리거되었고 결과가 어디로 갔는지"에 답할 수 있는 충분한 메타데이터를 포함해야 합니다.

This matters operationally for two reasons. First, it makes the architecture auditable: an internal review of the workflow can verify that reconstruction is happening only for legitimate workflows and that the integration is behaving as designed. Second, it makes incident response possible: if a reconstruction integration is misbehaving, the log shows what happened and what was exposed.
이는 두 가지 이유로 운영적으로 중요합니다. 첫째, 아키텍처를 감사 가능하게 만듭니다. 워크플로우의 내부 검토를 통해 복원이 적법한 워크플로우에 대해서만 이루어지고 연동이 설계된 대로 작동하고 있음을 검증할 수 있습니다. 둘째, 인시던트 대응을 가능하게 합니다. 복원 연동이 오작동하는 경우, 로그가 무슨 일이 있었고 무엇이 노출되었는지 보여줍니다.

The audit also matters for the failure case where reconstruction emits to a downstream system that shouldn't have received the original values. If a reconstruction integration accidentally writes business-ready output to a logging system that wasn't supposed to see customer names, the audit trail is what tells the team what was exposed and to whom. Without the log, the team is guessing.
감사는 또한 복원이 원본 값을 받아서는 안 될 다운스트림 시스템으로 내보내는 실패 케이스에서도 중요합니다. 복원 연동이 실수로 고객 이름을 볼 수 없어야 했던 로깅 시스템에 업무용 출력을 기록했다면, 감사 추적이 팀에게 무엇이 어디에 노출되었는지 알려줍니다. 로그가 없으면 팀은 추측만 할 수 있습니다.

Reconstruction logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture.
복원 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 그리고 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. 사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.

### 6. The Operational Mistakes Most Teams Make

6. 대부분의 팀이 저지르는 운영 실수

Across deployments of this pattern, a small set of mistakes show up repeatedly. They are worth naming explicitly.
이 패턴의 배포 전반에 걸쳐 소수의 실수가 반복적으로 나타납니다. 명시적으로 언급할 가치가 있습니다.

Building reconstruction as a manual cleanup step. The most common mistake. The team gets tokenisation working, sees the AI output coming back tokenised, and adds a manual "now find and replace the tokens" step to the user's workflow. Users skip the step. Or they do it inconsistently. Or they paste tokenised output into a system that wasn't supposed to see it, and the cleanup never happens. Reconstruction has to be infrastructure, automatic and invisible. If it requires a human action, it will fail intermittently in ways that are hard to detect.
복원을 수동 정리 단계로 구축하는 것. 가장 흔한 실수입니다. 팀이 토큰화를 작동시키고, AI 출력이 토큰화된 상태로 반환되는 것을 보고, 사용자의 워크플로우에 수동으로 "토큰을 찾아 교체"하는 단계를 추가합니다. 사용자는 이 단계를 건너뜁니다. 또는 일관성 없이 수행합니다. 또는 토큰화된 출력을 볼 수 없어야 했던 시스템에 붙여 넣어 정리가 전혀 이루어지지 않습니다. 복원은 자동적이고 눈에 보이지 않는 인프라여야 합니다. 사람의 행동이 필요하면 감지하기 어려운 방식으로 간헐적으로 실패하게 됩니다.

Running reconstruction in the wrong location. Discussed above. The convenience of running reconstruction in a vendor cloud or middleware service is real; the protection cost is also real. The architecture promises the original values stay in the enterprise environment, and reconstruction has to honour that promise.
잘못된 위치에서 복원을 실행하는 것. 위에서 언급했습니다. 벤더 클라우드나 미들웨어 서비스에서 복원을 실행하는 편의성은 실재합니다. 보호 비용도 실재합니다. 아키텍처는 원본 값이 엔터프라이즈 환경에 유지될 것을 약속하며, 복원은 그 약속을 지켜야 합니다.

Treating reconstruction as a static substitution. Real reconstruction has to handle malformed tokens, hallucinated tokens, tokens in unexpected contexts, and streaming responses. A naive implementation that does exact string match-and-replace will work in the demo and fail in production where the model's actual output is messier than the demo cases.
복원을 정적 치환으로 취급하는 것. 실제 복원은 형식이 잘못된 토큰, 환각 토큰, 예상치 못한 문맥의 토큰, 그리고 스트리밍 응답을 처리해야 합니다. 정확한 문자열 매치 앤 리플레이스를 수행하는 단순한 구현은 데모에서는 작동하지만 모델의 실제 출력이 데모 케이스보다 지저분한 프로덕션에서는 실패합니다.

Not logging reconstruction. Reconstruction without an audit trail is reconstruction the team cannot defend. The first time someone asks "did the AI ever see this customer's name, and if so, where did the result go," the team without reconstruction logs cannot answer.
복원을 기록하지 않는 것. 감사 추적 없는 복원은 팀이 방어할 수 없는 복원입니다. 누군가가 "AI가 이 고객의 이름을 본 적이 있나요, 그렇다면 결과는 어디로 갔나요"라고 처음 물어볼 때, 복원 로그가 없는 팀은 답할 수 없습니다.

Coupling reconstruction tightly to a specific LLM provider. Reconstruction logic that assumes ChatGPT's response format will break when the workflow switches to Claude or Gemini, even though the underlying tokenisation didn't change. The reconstruction layer should be provider-agnostic, treating the model's response as text-to-process rather than a known structure.
복원을 특정 LLM 제공업체에 긴밀하게 결합하는 것. ChatGPT의 응답 형식을 가정하는 복원 로직은 기본 토큰화가 변경되지 않았더라도 워크플로우가 Claude 또는 Gemini로 전환될 때 작동하지 않게 됩니다. 복원 레이어는 제공업체와 무관하게, 모델의 응답을 알려진 구조가 아닌 처리해야 할 텍스트로 취급해야 합니다.

### 7. What Good Reconstruction Looks Like

7. 좋은 복원의 모습

A reconstruction layer that works in production has a small set of properties.
프로덕션에서 작동하는 복원 레이어는 소수의 속성을 갖추고 있습니다.

Runs inside the enterprise environment, colocated with the mapping
매핑과 함께 엔터프라이즈 환경 내부에서 실행됩니다.

Invoked automatically at the integration boundary, never as a manual step
연동 경계에서 자동으로 호출되며, 수동 단계로 실행되지 않습니다.

Handles streaming, batch, and event-driven workflows through different invocation patterns but a shared core
다른 호출 패턴을 통해 스트리밍, 배치, 이벤트 기반 워크플로우를 처리하지만 공유된 코어를 사용합니다.

Recognises tokens robustly across the variations real model output produces — formatting drift, partial references, paraphrases
포맷 변형, 부분적 참조, 의역 등 실제 모델 출력이 생성하는 다양한 변형에서 토큰을 견고하게 인식합니다.

Distinguishes between legitimate tokens and hallucinated token-shaped strings, and handles each according to a configurable policy
적법한 토큰과 환각 토큰 형태의 문자열을 구분하고 각각을 구성 가능한 정책에 따라 처리합니다.

Logs every operation in a separate audit trail under the enterprise's exclusive control
모든 연산을 엔터프라이즈의 독점 통제 하에 별도의 감사 추적에 기록합니다.

Provider-agnostic, so the workflow can swap LLM endpoints without rewriting the reconstruction layer
제공업체 무관하게 작동하므로 워크플로우가 복원 레이어를 재작성하지 않고도 LLM 엔드포인트를 교체할 수 있습니다.

When these properties hold, reconstruction becomes invisible infrastructure. The user submits a document, the workflow runs, the result comes back with real values in real structure, and the user never sees a token. The architecture's promise — that sensitive data stayed inside the boundary while the AI did useful work — holds across both halves of the workflow.
이러한 속성이 갖추어지면 복원은 투명한 인프라가 됩니다. 사용자가 문서를 제출하고, 워크플로우가 실행되고, 결과가 실제 구조에 실제 값으로 반환되며, 사용자는 토큰을 볼 수 없습니다. 민감한 데이터가 AI가 유용한 작업을 수행하는 동안 경계 내에 유지되었다는 아키텍처의 약속이 워크플로우의 두 절반 모두에서 유지됩니다.

When these properties don't hold, reconstruction is the place the workflow breaks. The tokenisation can be perfect, the model can be excellent, the boundaries can be meticulous — and the user still ends up with output they can't use, or with sensitive data accidentally appearing in a downstream system that wasn't supposed to receive it. The last mile is where the architecture either delivers on its promise or quietly fails to.
이러한 속성이 갖추어지지 않으면 복원이 워크플로우가 깨지는 지점이 됩니다. 토큰화가 완벽하고, 모델이 탁월하고, 경계가 철저해도, 사용자는 여전히 사용할 수 없는 출력을 받거나 민감한 데이터가 받아서는 안 될 다운스트림 시스템에 실수로 나타나는 상황에 처하게 됩니다. 마지막 구간이 바로 아키텍처가 약속을 이행하거나 조용히 실패하는 곳입니다.

### 8. Where This Fits in the Broader Pattern

8. 더 넓은 패턴에서의 위치

Reconstruction is one of the four stages of the broader pattern — detection, transformation (tokenisation), external processing, reconstruction — that lets external LLMs operate on data that cannot leave the enterprise environment in raw form. The four stages compose. The strength of the architecture is the weakest of the four.
복원은 더 넓은 패턴의 네 단계 중 하나입니다. 감지, 변환(토큰화), 외부 처리, 복원. 이 패턴은 외부 LLM이 원시 형태로 엔터프라이즈 환경을 벗어날 수 없는 데이터를 처리할 수 있게 해줍니다. 네 단계는 합성됩니다. 아키텍처의 강도는 네 단계 중 가장 약한 것의 강도입니다.

For the architecture as a whole, and the design decisions that the other three stages carry, see the pillar overview on running external LLMs on sensitive enterprise data. For why removal-based approaches (masking, redaction, PII guardrails) break on operational data — and why this pattern was needed in the first place — see the article on why AI workflows stall at tables, tickets, and operational documents. For the tokenisation patterns on the input side that this article's reconstruction reverses, see the article on tokenisation for LLM inputs.
아키텍처 전체와 나머지 세 단계가 담고 있는 설계 결정에 대해서는 민감한 엔터프라이즈 데이터에서 외부 LLM을 실행하는 것에 관한 필러 개요를 참조하십시오. 제거 기반 접근법(마스킹, 검열, PII 가드레일)이 운영 데이터에서 실패하는 이유, 그리고 이 패턴이 애초에 필요한 이유에 대해서는 AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유에 관한 아티클을 참조하십시오. 이 아티클의 복원이 되돌리는 입력 측 토큰화 패턴에 대해서는 LLM 입력을 위한 토큰화 아티클을 참조하십시오.

### Key Takeaways

핵심 요약

Reconstruction is technically straightforward and architecturally critical — it's where pilots that demo well diverge from workflows that run in production
복원은 기술적으로 단순하지만 아키텍처 관점에서 매우 중요합니다. 데모에서 잘 작동하는 파일럿과 프로덕션에서 운영되는 워크플로우가 갈리는 지점입니다.

It's not a simple swap-back: LLM output is generative, contains new token combinations, suffers formatting drift, and sometimes hallucinates token-shaped strings
단순한 역치환이 아닙니다. LLM 출력은 생성적이며 새로운 토큰 조합을 포함하고 포맷 변형을 겪으며 때로는 토큰 형태의 문자열을 환각합니다.

Location is non-negotiable — reconstruction has to run inside the enterprise environment, colocated with the mapping; external reconstruction collapses the protection
위치는 협상의 여지가 없습니다. 복원은 매핑과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 외부 복원은 보호를 무너뜨립니다.

Three integration patterns cover most workflows: inline, streaming, and event-driven — and misaligning the pattern produces defects that look like model problems
세 가지 연동 패턴이 대부분의 워크플로우를 커버합니다. 인라인, 스트리밍, 이벤트 기반. 패턴을 잘못 선택하면 모델 문제처럼 보이는 결함이 발생합니다.

Hallucinated tokens need an explicit, configurable policy: flag and surface, drop and rewrite, or reject and re-prompt
환각 토큰에는 명시적이고 구성 가능한 정책이 필요합니다. 플래그 표시, 삭제 후 재작성, 또는 거부 후 재프롬프트.

Audit is essential — reconstruction is the moment original values re-enter the workflow, and logs are how the team defends or investigates that moment
감사가 필수적입니다. 복원은 원본 값이 워크플로우에 재진입하는 순간이며, 로그는 팀이 그 순간을 방어하거나 조사하는 방법입니다.

Five recurring mistakes: manual cleanup, wrong location, static substitution, no logging, provider lock-in
다섯 가지 반복 실수: 수동 정리, 잘못된 위치, 정적 치환, 로그 미기록, 제공업체 종속.

Good reconstruction is invisible infrastructure; bad reconstruction is where the architecture quietly fails on the last mile
좋은 복원은 투명한 인프라입니다. 나쁜 복원은 아키텍처가 마지막 구간에서 조용히 실패하는 지점입니다.

### FAQ

Why isn't reconstruction just a simple swap-back?
복원이 왜 단순한 역치환이 아닌가요?

The LLM doesn't just copy tokens from input to output — it generates new text that reasons over them. Tokens appear in contexts the input never had, in combinations the model invented, sometimes with formatting drift (CUST-7F2A coming back as CUST 7F2A or "the customer designated 7F2A"). A naive exact-match swap fails on these cases, leaving token fragments visible in the output. Real reconstruction is robust token recognition across diverse generative output forms, with substitution that preserves grammatical coherence.
LLM은 입력에서 출력으로 토큰을 단순히 복사하지 않습니다. 토큰을 바탕으로 추론한 새 텍스트를 생성합니다. 토큰은 입력에 없었던 문맥, 모델이 만들어낸 조합으로 나타나며, 때로는 포맷 변형이 발생합니다(CUST-7F2A가 CUST 7F2A 또는 "7F2A로 지정된 고객"으로 반환되는 경우). 단순한 정확한 매치 역치환은 이런 경우에 실패하여 토큰 조각이 출력에 그대로 남게 됩니다. 실제 복원은 다양한 생성적 출력 형태에서 견고한 토큰 인식이며, 문법적 일관성을 보존하는 치환입니다.

Where does reconstruction have to run?
복원은 어디에서 실행되어야 하나요?

Inside the enterprise environment, colocated with the mapping and the source systems. Reconstruction requires reading the mapping; if reconstruction runs outside the enterprise — on a vendor's infrastructure, in a third-country region, or on middleware the enterprise doesn't fully control — the mapping has to be replicated to that location, which collapses the protection the tokenisation provided. This is the most common architectural mistake in deployments of this pattern.
매핑 및 소스 시스템과 함께 엔터프라이즈 환경 내부에서 실행되어야 합니다. 복원은 매핑을 읽어야 합니다. 복원이 엔터프라이즈 외부, 즉 벤더 인프라, 제3국 리전, 또는 엔터프라이즈가 완전히 통제하지 않는 미들웨어에서 실행된다면 매핑을 해당 위치에 복제해야 하며, 이는 토큰화가 제공한 보호를 무너뜨립니다. 이것이 이 패턴 배포에서 가장 흔한 아키텍처 실수입니다.

What are the three integration patterns for reconstruction?
복원을 위한 세 가지 연동 패턴은 무엇인가요?

Inline reconstruction — the AI integration layer performs reconstruction before returning the response. Works for synchronous request-response workflows like contract review. Streaming reconstruction — works on token-by-token streams, buffering enough to recognise data-protection tokens as they appear. Needed for chat-style UIs and live summarisation. Event-driven reconstruction — happens at the boundary between AI integration and a downstream system like a CRM, ticketing platform, or document store; reconstruction occurs just before the data is written into the system the user will see.
인라인 복원 — AI 연동 레이어가 응답을 반환하기 전에 복원을 수행합니다. 계약 검토와 같은 동기식 요청-응답 워크플로우에 적합합니다. 스트리밍 복원 — 토큰 단위 스트림에서 작동하며 데이터 보호 토큰이 나타날 때 인식할 만큼 충분히 버퍼링합니다. 채팅 스타일 UI 및 실시간 요약에 필요합니다. 이벤트 기반 복원 — CRM, 티켓팅 플랫폼, 문서 저장소 같은 AI 연동과 다운스트림 시스템 사이의 경계에서 이루어집니다. 데이터가 사용자가 볼 시스템에 기록되기 직전에 복원이 이루어집니다.

What should happen when the model hallucinates a token?
모델이 토큰을 환각할 때 어떻게 해야 하나요?

Three reasonable responses, and the choice should be configurable per workflow. Flag the hallucinated token and surface it as an explicit gap — preserves transparency at the cost of cleanliness. Drop the hallucinated reference and rewrite the surrounding sentence — cleaner output but obscures that the model produced something not grounded in the input. Reject the response and re-prompt the model with a constraint to use only input tokens — highest quality, adds latency and cost. A summarisation for internal review may prefer flagging; a document going to a customer may prefer re-prompting.
세 가지 합리적인 대응이 있으며 선택은 워크플로우별로 구성 가능해야 합니다. 환각 토큰에 플래그를 표시하고 명시적 갭으로 표시합니다. 깔끔함을 희생하고 투명성을 유지합니다. 환각 참조를 삭제하고 주변 문장을 재작성합니다. 더 깔끔한 출력이지만 모델이 입력에 근거하지 않은 내용을 생성했다는 사실을 숨깁니다. 응답을 거부하고 입력 토큰만 사용하도록 제한하여 모델에 재프롬프트합니다. 가장 높은 품질이지만 지연 시간과 비용이 추가됩니다. 내부 검토용 요약은 플래그 표시를 선호할 수 있고 고객에게 전달되는 문서는 재프롬프트를 선호할 수 있습니다.

What does a reconstruction audit log need to contain?
복원 감사 로그에는 무엇이 포함되어야 하나요?

Enough metadata to answer "who triggered the reconstruction of which token, when, in service of which workflow, and where did the result go." It does not need to contain the original values themselves — that would defeat the access controls — but it has to make the operation traceable. Logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture.
"어떤 토큰의 복원이 누구에 의해 언제, 어떤 워크플로우를 위해 트리거되었고 결과가 어디로 갔는지"에 답할 수 있는 충분한 메타데이터를 포함해야 합니다. 원본 값 자체는 포함할 필요가 없습니다. 그렇게 하면 접근 제어의 의미가 없어집니다. 하지만 연산을 추적 가능하게 해야 합니다. 로그는 워크플로우 로그와 별도로, 다른 접근 제어 하에, 매핑 자체와 동일한 경계 제약 하에 보관되어야 합니다. 사실상 아키텍처에서 가장 민감한 연산의 감사 추적입니다.

What are the most common reconstruction mistakes?
가장 흔한 복원 실수는 무엇인가요?

Five recur. Manual cleanup — building reconstruction as a step users have to perform; they will skip it. Wrong location — running reconstruction in a vendor cloud because it's convenient; it collapses the protection. Static substitution — treating reconstruction as exact string match-and-replace; it fails on the messy real output from production models. No logging — the team cannot defend the architecture or do incident response. Provider lock-in — coupling reconstruction logic to a specific LLM's response format; it breaks when the workflow switches vendor.
다섯 가지가 반복됩니다. 수동 정리 — 사용자가 수행해야 하는 단계로 복원을 구축하면 건너뜁니다. 잘못된 위치 — 편의를 위해 벤더 클라우드에서 복원을 실행하면 보호가 무너집니다. 정적 치환 — 복원을 정확한 문자열 매치 앤 리플레이스로 취급하면 프로덕션 모델의 지저분한 실제 출력에서 실패합니다. 로그 미기록 — 팀이 아키텍처를 방어하거나 인시던트 대응을 할 수 없습니다. 제공업체 종속 — 복원 로직을 특정 LLM의 응답 형식에 결합하면 워크플로우가 벤더를 전환할 때 작동하지 않게 됩니다.

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
