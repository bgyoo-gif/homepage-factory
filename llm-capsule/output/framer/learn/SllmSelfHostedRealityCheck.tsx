// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component.
// No external imports — all LearnArticle logic inlined for Framer cross-folder compatibility.

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그 + .callout + .takeaways만 사용 (기존 learn 아티클과 동일 패턴) -->

<h2>1. sLLM 자체구축이 매력적으로 보이는 이유</h2>
<p>먼저 왜 많은 기관이 sLLM 자체구축에 끌리는지부터 짚어야 합니다. 그 매력에는 정당한 부분이 분명히 있습니다.</p>

<h3>1.1 데이터가 외부로 나가지 않는다는 안심감</h3>
<p>가장 큰 매력은 <strong>완전한 데이터 통제</strong>입니다. 모든 프롬프트와 응답이 기관 내부에서만 처리되므로, 외부 유출 가능성이 구조적으로 0입니다. 보안담당관 입장에서 이만큼 명쾌한 답은 없습니다. "우리 데이터는 외부에 가지 않는다"는 한 문장으로 모든 의심을 해소할 수 있습니다.</p>
<p>N²SF 정합성 측면에서도 명확합니다. 「위치-주체-객체」가 모두 기관 전산망 내부(S 등급)에 위치하므로, 정보 이동 보안원칙 위배가 발생하지 않습니다. 외부 AI 활용 시 발생하는 21개의 보안위협 상당수가 구조적으로 해소됩니다.</p>

<h3>1.2 데이터 주권과 자산화</h3>
<p>두 번째 매력은 <strong>데이터 주권</strong>입니다. 기관이 보유한 데이터를 외부 클라우드나 외부 AI 제공자의 손에 맡기지 않고, 직접 자산으로 가져갈 수 있습니다. 자체 데이터로 파인튜닝한 모델은 기관의 핵심 자산이 되며, 정책 변화나 외부 의존성에 흔들리지 않습니다.</p>
<p>특정 기관의 미션이 도메인 특화 AI 모델 자체를 구축하는 것이라면, 이는 단순한 매력 이상의 의미를 갖습니다. 예를 들어 법령 검색 특화 AI를 보유하는 것이 핵심 가치인 기관이라면, 자체 모델은 그 자체로 미션 달성의 도구가 됩니다.</p>

<h3>1.3 도메인 특화 가능성</h3>
<p>세 번째 매력은 <strong>파인튜닝 자유도</strong>입니다. 자체 데이터로 모델을 학습시키면 일반 모델보다 해당 기관 업무에 더 적합한 응답을 생성할 수 있다는 가능성이 있습니다. 법령 해석, 민원 응대, 정책 분석 등에서 일반 ChatGPT보다 나은 성능을 기대해볼 수 있습니다.</p>
<p>이 세 가지 매력은 모두 정당합니다. 문제는 이 매력의 대가가 무엇인지, 그리고 그 매력이 실제로 실현되는지를 정확히 봐야 한다는 점입니다.</p>

<h2>2. 진짜 비용 — 카탈로그가 보여주지 않는 것</h2>
<p>sLLM 자체구축의 비용 논의는 종종 "GPU 서버 가격"으로 시작해서 거기서 끝납니다. 그러나 실제 총소유비용(TCO, Total Cost of Ownership)은 GPU 가격의 몇 배에 달합니다. 5년 운영 기준으로 정리해보면 다음과 같습니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 540" xmlns="http://www.w3.org/2000/svg">
    <title>sLLM 자체구축 5년 총 비용 구조</title>
    <desc>32B급 sLLM 자체구축 시 초기 구축비, 연간 운영비, 5년 누적 총 비용 분석</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">sLLM 자체구축 5년 총 비용 (32B급 기준)</text>

    <text x="40" y="68" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">초기 구축비 — 약 8억 원</text>

    <rect x="40" y="80" width="600" height="40" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="40" y="80" width="450" height="40" rx="8" fill="#ef5350" stroke="#ef5350" stroke-width="0"/>
    <text x="60" y="100" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">GPU 서버 (H100 8장)</text>
    <text x="60" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">약 5억~6억 원</text>

    <rect x="490" y="80" width="80" height="40" rx="0" fill="#c73e3a" stroke="#c73e3a" stroke-width="0"/>
    <text x="500" y="100" font-family="Inter, sans-serif" font-size="11" fill="#fff">부속 인프라</text>
    <text x="500" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">1억</text>

    <rect x="570" y="80" width="70" height="40" rx="0" fill="#c73e3a" stroke="#c73e3a" stroke-width="0" opacity="0.85"/>
    <text x="580" y="100" font-family="Inter, sans-serif" font-size="11" fill="#fff">초기 인건비</text>
    <text x="580" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">1억</text>

    <text x="40" y="158" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#b97606">연간 운영비 — 약 4억 원 / 년</text>

    <rect x="40" y="170" width="600" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <rect x="40" y="170" width="320" height="40" rx="8" fill="#f59e0b" stroke="#f59e0b" stroke-width="0"/>
    <text x="60" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">전문 인력 (MLOps 2명+)</text>
    <text x="60" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">2억~3억</text>

    <rect x="360" y="170" width="160" height="40" rx="0" fill="#b97606" stroke="#b97606" stroke-width="0"/>
    <text x="370" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">전력·유지보수</text>
    <text x="370" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">5천만~1억</text>

    <rect x="520" y="170" width="120" height="40" rx="0" fill="#b97606" stroke="#b97606" stroke-width="0" opacity="0.85"/>
    <text x="530" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">SW 라이선스</text>
    <text x="530" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">수천만</text>

    <text x="40" y="248" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#3b2fbf">추가 비용 — 비주기적 발생</text>

    <rect x="40" y="260" width="290" height="60" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="56" y="282" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf">베이스 모델 교체</text>
    <text x="56" y="300" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">파인튜닝·인프라 재최적화</text>
    <text x="56" y="314" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">1~2년마다 약 2억~3억 원</text>

    <rect x="350" y="260" width="290" height="60" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="366" y="282" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf">GPU 업그레이드</text>
    <text x="366" y="300" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">3~5년 주기 하드웨어 교체</text>
    <text x="366" y="314" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">감가상각 + 신규 도입비</text>

    <line x1="40" y1="346" x2="640" y2="346" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="40" y="376" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">5년 누적 총 비용 (TCO) 추산</text>

    <rect x="40" y="394" width="600" height="68" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="60" y="420" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#c73e3a">최소 약 28억 ~ 최대 약 38억 원</text>
    <text x="60" y="440" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">초기 8억 + (연 운영비 4억 × 5년) + 베이스 모델 교체 2~6억</text>
    <text x="60" y="456" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">+ GPU 업그레이드 변동분</text>

    <text x="40" y="494" font-family="Inter, sans-serif" font-size="13" fill="#3a3d5e">비교: 게이트웨이 방식 5년 TCO는 일반적으로 8~12억 원 수준</text>
    <text x="40" y="516" font-family="Inter, sans-serif" font-size="12" fill="#6b7280">※ 위 수치는 일반적 시장 견적 기반 추정이며, 실제 비용은 기관 환경·계약 조건에 따라 변동</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 1. sLLM 자체구축 5년 총 비용 구조</figcaption>
</figure>

<h3>2.1 초기 구축비의 함정</h3>
<p>"GPU 서버 5~6억"이 전체 초기 비용이라고 생각하는 것은 흔한 오해입니다. 실제로는 GPU 외에도 다음이 필요합니다.</p>
<ul>
  <li><strong>네트워크·스토리지 인프라</strong>: 고대역폭 네트워크 스위치, NVMe 스토리지, 백업 시스템</li>
  <li><strong>전력·냉각 설비</strong>: H100 8장은 약 5kW 이상의 전력을 소비. 전산실 환경 점검과 보강이 필요한 경우 다수</li>
  <li><strong>보안 인프라</strong>: 모델 보호·접근 통제·감사 로그 시스템</li>
  <li><strong>초기 셋업 인건비</strong>: 모델 선정, 파인튜닝, 인프라 구축에 들어가는 첫 3~6개월의 전담 인력 비용</li>
</ul>

<h3>2.2 연간 운영비의 본질 — 사람</h3>
<p>sLLM 자체구축의 진짜 비용은 GPU가 아니라 <strong>사람</strong>입니다. 모델을 운영하려면 다음 역할이 필요합니다.</p>
<ul>
  <li>MLOps 엔지니어: 모델 배포·운영·모니터링</li>
  <li>AI 엔지니어: 파인튜닝·성능 개선·새 모델 평가</li>
  <li>인프라 엔지니어: GPU 서버 관리, 장애 대응</li>
</ul>
<p>최소 2명, 일반적으로 3~4명의 전문 인력이 필요합니다. 공공기관에서 이런 인력을 확보하는 것은 단순히 인건비 문제가 아닙니다. 시장 수요가 폭발적인 분야의 인력을 공공 보수 체계로 채용·유지하는 것 자체가 큰 도전입니다. 외부 위탁 운영을 선택하면 비용은 더 올라갑니다.</p>

<h3>2.3 보이지 않는 비용 — 베이스 모델 교체</h3>
<p>가장 간과되는 비용이 <strong>베이스 모델 교체 부담</strong>입니다. 오픈소스 LLM 생태계는 매우 빠르게 발전하고 있습니다. Llama 3에서 Llama 4로, 또는 다른 신규 모델이 나올 때마다 다음 작업이 반복됩니다.</p>
<ul>
  <li>새 베이스 모델에 대한 파인튜닝 재수행 (수주~수개월)</li>
  <li>인프라 최적화 재작업</li>
  <li>성능 비교·검증</li>
  <li>운영 중단 또는 병행 운영 부담</li>
</ul>
<p>이 사이클이 1~2년마다 반복되며, 매번 2억~3억 원 규모의 비용이 발생합니다. 5년 운영을 가정하면 최소 2회의 교체 사이클을 거쳐야 하며, 이 비용이 TCO에 누적됩니다.</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>총 비용 비교</strong> sLLM 자체구축의 5년 TCO는 보수적으로 잡아도 28억 원 이상입니다. 반면 외부 상용 LLM을 게이트웨이 방식으로 활용하는 경우 5년 TCO는 일반적으로 8~12억 원 수준입니다. <strong>약 3배의 비용 차이</strong>가 발생합니다.</div>
</div>

<h2>3. 성능 격차의 본질 — 따라잡히지 않는 이유</h2>
<p>비용을 감당할 수 있다고 가정해봅시다. 다음 질문은 "그래서 성능은 어떤가"입니다. 여기서 sLLM 자체구축의 두 번째 본질적 문제가 드러납니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 720 600" xmlns="http://www.w3.org/2000/svg">
    <title>상용 LLM 최상위 vs 자체구축 sLLM 최저등급 (7~8B) — 격차 확대 추세</title>
    <desc>2024년부터 2028년까지 상용 LLM 최상위와 7~8B급 sLLM의 성능 격차가 36점에서 46점으로 확대되는 추세</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">상용 LLM 최상위 vs 자체구축 sLLM 최저등급 (7~8B) — 격차 확대 추세</text>

    <text x="55" y="80" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">MMLU-Pro</text>
    <text x="55" y="120" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">100</text>
    <text x="55" y="160" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">90</text>
    <text x="55" y="200" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">80</text>
    <text x="55" y="240" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">70</text>
    <text x="55" y="280" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">60</text>
    <text x="55" y="320" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">50</text>
    <text x="55" y="360" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">40</text>
    <text x="55" y="400" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">30</text>

    <line x1="60" y1="120" x2="700" y2="120" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="160" x2="700" y2="160" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="200" x2="700" y2="200" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="240" x2="700" y2="240" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="280" x2="700" y2="280" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="320" x2="700" y2="320" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="360" x2="700" y2="360" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="400" x2="700" y2="400" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>

    <line x1="60" y1="420" x2="700" y2="420" stroke="#3a3d5e" stroke-width="1"/>
    <line x1="60" y1="80" x2="60" y2="420" stroke="#3a3d5e" stroke-width="1"/>

    <rect x="450" y="80" width="250" height="340" fill="#f7f8fb" fill-opacity="0.6"/>
    <text x="575" y="100" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#6b7280" text-anchor="middle">추세 기반 예측</text>

    <text x="100" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2024 H1</text>
    <text x="200" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2024 H2</text>
    <text x="300" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2025 H1</text>
    <text x="400" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2025 H2</text>
    <text x="500" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2026</text>
    <text x="600" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2027</text>
    <text x="680" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2028</text>

    <path d="M 100 248 L 200 200 L 300 140 L 400 128" fill="none" stroke="#5b4fe9" stroke-width="2.5"/>
    <circle cx="100" cy="248" r="5" fill="#5b4fe9"/>
    <circle cx="200" cy="200" r="5" fill="#5b4fe9"/>
    <circle cx="300" cy="140" r="5" fill="#5b4fe9"/>
    <circle cx="400" cy="128" r="5" fill="#5b4fe9"/>

    <path d="M 400 128 L 500 112 L 600 104 L 680 100" fill="none" stroke="#5b4fe9" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="500" cy="112" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>
    <circle cx="600" cy="104" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>
    <circle cx="680" cy="100" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>

    <text x="100" y="236" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">68</text>
    <text x="200" y="188" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">76</text>
    <text x="300" y="128" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~85</text>
    <text x="400" y="116" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~88</text>
    <text x="500" y="100" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~92</text>
    <text x="600" y="92" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~94</text>
    <text x="680" y="88" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~95</text>

    <path d="M 100 392 L 200 364 L 300 340 L 400 332" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <circle cx="100" cy="392" r="5" fill="#f59e0b"/>
    <circle cx="200" cy="364" r="5" fill="#f59e0b"/>
    <circle cx="300" cy="340" r="5" fill="#f59e0b"/>
    <circle cx="400" cy="332" r="5" fill="#f59e0b"/>

    <path d="M 400 332 L 500 328 L 600 328 L 680 324" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="500" cy="328" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="600" cy="328" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="680" cy="324" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>

    <text x="100" y="384" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">32</text>
    <text x="200" y="356" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">39</text>
    <text x="300" y="332" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~45</text>
    <text x="400" y="324" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~47</text>
    <text x="500" y="320" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~48</text>
    <text x="600" y="320" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~48</text>
    <text x="680" y="316" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~49</text>

    <line x1="100" y1="248" x2="100" y2="392" stroke="#ef5350" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="65" y="309" width="50" height="22" rx="11" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="90" y="324" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#c73e3a" text-anchor="middle">36점차</text>

    <line x1="400" y1="128" x2="400" y2="332" stroke="#ef5350" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="408" y="219" width="50" height="22" rx="11" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="433" y="234" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#c73e3a" text-anchor="middle">41점차</text>

    <line x1="680" y1="100" x2="680" y2="324" stroke="#c73e3a" stroke-width="2" stroke-dasharray="2 2"/>
    <rect x="645" y="205" width="60" height="22" rx="11" fill="#c73e3a" stroke="#c73e3a" stroke-width="0.5"/>
    <text x="675" y="220" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#fff" text-anchor="middle">46점차+</text>

    <rect x="100" y="468" width="14" height="14" rx="2" fill="#5b4fe9"/>
    <text x="122" y="480" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">상용 LLM 최상위 (GPT-4o → GPT-5, Claude 3.5/4 Sonnet 등)</text>

    <rect x="100" y="492" width="14" height="14" rx="2" fill="#f59e0b"/>
    <text x="122" y="504" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">자체구축 sLLM 최저등급 7~8B (Llama 3/3.1/3.3 8B, Qwen 2.5 7B)</text>

    <line x1="100" y1="522" x2="120" y2="522" stroke="#5b4fe9" stroke-width="2.5" stroke-dasharray="5 4"/>
    <text x="125" y="526" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">점선 영역 = 향후 3년 추세 기반 예측</text>

    <text x="60" y="554" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">※ 격차는 36점 → 41점 → 46점+로 명확한 확대 추세. 7~8B는 모델 크기 한계로 점진적 정체 예상.</text>
    <text x="60" y="572" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">※ 추론 시간 스케일링(o1/extended thinking 등) 본격화로 상용 LLM의 상승 곡선 가속. 2026 이후는 추정.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 2. MMLU-Pro 벤치마크 격차 — 시간에 따라 명확히 확대되는 추세</figcaption>
</figure>

<h3>3.1 왜 격차는 좁혀지지 않고 오히려 벌어지는가</h3>
<p>많은 sLLM 도입 검토 자료가 "오픈소스 모델 성능이 빠르게 좋아지고 있다"는 점을 강조합니다. 절대 점수만 보면 이는 사실입니다. 자체구축이 현실적으로 가능한 7~8B급 모델의 MMLU-Pro 점수는 Llama 3 8B 약 32점에서 Llama 3.3 8B·Qwen 2.5 7B를 거치며 약 47점까지 올라왔습니다. 1년 반 동안 15점 향상이라는 명확한 발전입니다.</p>
<p>그러나 같은 기간 상용 LLM의 발전 속도는 훨씬 빨랐습니다. 2024년 상반기 Claude 3 Opus가 MMLU-Pro 약 68점이었던 데서, 2024년 하반기 Claude 3.5 Sonnet 약 76점, 2025년에는 Claude 4 Sonnet·GPT-5 등이 약 85~88점대에 도달했습니다. <strong>격차는 2024년 상반기 36점에서 2025년 하반기 41점으로 오히려 확대</strong>되었습니다.</p>
<p>더 본질적인 문제는 향후 3년의 추세입니다. 7~8B 모델은 모델 크기의 본질적 한계로 인해 MMLU-Pro 50점 부근에서 점진적으로 정체할 것으로 예상됩니다. 반면 상용 LLM은 <strong>추론 시간 스케일링(inference-time scaling)</strong>이라는 새로운 패러다임으로 진입했습니다. OpenAI o1·o3 시리즈와 Claude의 extended thinking 기능이 그 예시입니다. 이 방식은 추론 시점에 더 많이 계산해서 성능을 끌어올리는 접근으로, 단순히 모델 크기로 좁힐 수 있는 격차가 아닙니다. 7~8B 모델에 같은 기법을 적용하려면 추론 비용이 비현실적으로 증가하므로, 작은 모델은 이 흐름에서 구조적으로 배제됩니다.</p>
<p>그 결과 2028년경 격차는 46점 이상으로 더 벌어질 가능성이 큽니다. "지금 sLLM을 구축하면 곧 따라잡을 수 있다"는 기대는 지난 2년의 데이터로 이미 반증되었으며, 향후 3년의 기술 추세도 같은 방향을 가리키고 있습니다.</p>
<p>격차가 좁혀지지 않는 이유는 단순합니다.</p>
<ul>
  <li><strong>투자 규모의 차이</strong>: OpenAI, Anthropic, Google은 각각 연 수조 원 단위를 모델 개발에 투입합니다. 오픈소스 진영 전체의 투자를 합쳐도 이에 못 미칩니다.</li>
  <li><strong>스케일링 법칙(Scaling Law)</strong>: 현재 AI 성능은 모델 크기·데이터·연산량에 비례해 향상됩니다. 상용 모델은 수천억~조 단위 파라미터를 다루는 반면, 자체구축이 현실적으로 가능한 sLLM은 7~32B 수준입니다. 수십~수백 배의 규모 차이가 성능 차이로 직결됩니다.</li>
  <li><strong>인프라 격차</strong>: 상용 모델은 수만 장의 GPU 클러스터에서 학습됩니다. 단일 기관의 H100 8장 시스템과는 출발선부터 다릅니다.</li>
  <li><strong>추론 시간 스케일링 진입 장벽</strong>: 2024년 말부터 본격화된 추론 시간 스케일링 패러다임은 작은 모델에는 비용 측면에서 적용하기 어렵습니다. 상용 모델만 누릴 수 있는 새 차원의 성능 향상 경로가 열렸습니다.</li>
</ul>

<h3>3.2 도메인 특화로 격차를 메울 수 있는가</h3>
<p>"우리는 특정 도메인에 특화된 모델이 필요하니까, 일반 성능이 낮아도 도메인 내에서는 더 우수하다"는 주장이 자주 제기됩니다. 이 주장에는 부분적 진실이 있지만, 무비판적으로 받아들이기에는 위험합니다.</p>
<p>현실은 다음과 같습니다.</p>
<ul>
  <li><strong>일반 능력의 기반</strong>: 도메인 특화 작업도 결국 일반적 언어 이해·추론 능력에 기반합니다. 일반 능력이 낮으면 도메인 특화도 한계가 명확합니다.</li>
  <li><strong>상용 모델의 컨텍스트 학습</strong>: 최신 상용 LLM은 RAG와 결합하면 도메인 특화 데이터에 즉시 적응합니다. 사전 학습 없이도 도메인 성능을 발휘합니다.</li>
  <li><strong>파인튜닝의 한계</strong>: sLLM을 도메인 파인튜닝하면 분명히 향상되지만, 그 향상 폭이 일반 성능 격차를 메울 만큼 크지 않은 경우가 많습니다.</li>
</ul>
<p>도메인 특화 자체가 매력적인 가치라는 점을 부정하는 것이 아닙니다. 다만 "도메인 특화면 성능 격차가 무의미해진다"는 단정은 검증이 필요합니다. 실제 POC를 통해 우리 기관 도메인에서 sLLM이 상용 LLM 대비 어떤 수준의 성능을 보이는지 측정하지 않고 결정하는 것은 위험합니다.</p>

<h2>4. 운영의 무게 — 인력과 책임</h2>
<p>비용과 성능에 더해, 세 번째로 자주 간과되는 것이 <strong>운영의 무게</strong>입니다. sLLM은 "구축하고 끝"이 아닙니다. 5년 이상 살아있는 시스템으로 유지해야 합니다.</p>

<h3>4.1 전담 인력 확보의 어려움</h3>
<p>AI 엔지니어·MLOps 전문가는 현재 가장 수요가 높은 인력군입니다. 대기업과 AI 스타트업이 연봉 1.5~2억 원대를 제시하는 시장에서, 공공기관 보수 체계로 이들을 채용·유지하는 것은 매우 어렵습니다. 외부 위탁 운영을 선택하면 비용이 올라갈 뿐 아니라, 지식의 외부 의존성이 생깁니다.</p>

<h3>4.2 장애와 책임의 무게</h3>
<p>자체 시스템 운영에는 책임이 따릅니다. 외부 상용 AI를 활용하면 서비스 장애 시 제공자가 일차 대응하지만, 자체 sLLM은 장애 발생 시 기관이 전적으로 책임집니다. GPU 하드웨어 장애, 모델 응답 품질 저하, 보안 사고 — 모든 책임이 기관 내부에 머무릅니다.</p>

<h3>4.3 모델 evolution 부담</h3>
<p>앞서 비용 측면에서 다룬 베이스 모델 교체는 운영 측면에서도 큰 부담입니다. 새 모델 출시 시 평가·도입 결정·전환 작업이 반복되며, 이는 일상 운영 외의 별도 프로젝트입니다. 운영팀의 인지적·시간적 부담이 누적됩니다.</p>

<h2>5. 그럼에도 sLLM이 정답인 경우</h2>
<p>이제 균형을 잡을 차례입니다. sLLM 자체구축이 분명히 정답이 되는 경우가 있습니다. 다음 조건들이 충족된다면 sLLM은 합리적 선택입니다.</p>
<ul>
  <li><strong>연 IT 예산 100억 원 이상의 대형 기관</strong>: 28~38억 원의 5년 TCO를 부담할 여력이 있고, 전담 AI팀 구성이 가능한 규모</li>
  <li><strong>외부 LLM 활용이 정책적·법적으로 완전히 금지된 분야</strong>: 일부 안보·국방 관련 기관에서는 외부 AI 활용 자체가 선택지가 아닙니다</li>
  <li><strong>특정 도메인 모델 보유가 기관 미션인 경우</strong>: 예를 들어 법령 검색 특화 AI를 국가 자산으로 보유하는 것이 기관의 핵심 가치인 경우</li>
  <li><strong>대규모·고빈도 사용 시나리오</strong>: 일일 수십만 건 이상의 AI 호출이 발생하는 환경에서는 API 종량제 대비 자체 운영이 단가 측면에서 유리해질 수 있습니다</li>
  <li><strong>장기 자산화 전략이 명확한 경우</strong>: 단순 도구가 아니라 기관의 지속적 자산으로 AI 모델을 보유하려는 전략적 의지가 있는 경우</li>
</ul>
<p>이 다섯 가지 조건 중 다수가 충족된다면, sLLM 자체구축은 충분히 검토할 만한 선택입니다. 그러나 위 조건 중 어느 것에도 해당하지 않는데 sLLM을 선택한다면, 그 선택의 근거를 다시 점검할 필요가 있습니다.</p>

<h2>6. 잘못된 이유로 sLLM을 선택하는 패턴들</h2>
<p>현장에서 자주 관찰되는 "잘못된 선택 이유"들이 있습니다. 이 중 하나에 해당한다면, sLLM 자체구축 결정을 한 번 더 점검해보시기 바랍니다.</p>

<h3>패턴 1 — "외부 AI는 위험하니까"</h3>
<p>가장 흔한 패턴입니다. "외부 AI는 위험하다"는 추상적 우려에서 출발해서, 자세한 분석 없이 "그러니까 자체구축"으로 결론을 내리는 경우입니다. 그러나 N²SF 모델 2는 외부 AI 활용에 대한 구체적 보안 통제 체계를 제시하고 있으며, 적절한 보호 레이어를 사용하면 외부 AI도 안전하게 활용 가능합니다. "외부 = 위험, 내부 = 안전"이라는 이분법은 분석이 아니라 직관입니다.</p>

<h3>패턴 2 — "데이터 주권이니까"</h3>
<p>"우리 데이터를 외부에 보낼 수 없다"는 명분으로 출발하는 경우입니다. 그러나 실제 활용 시나리오를 보면, 다루는 정보가 대부분 O 등급(공개 정보)이거나 적절한 보호 처리로 외부 전송이 가능한 정보인 경우가 많습니다. "데이터 주권"이라는 추상적 가치가 구체적 시나리오 분석을 대체해서는 안 됩니다.</p>

<h3>패턴 3 — "다른 기관이 하니까"</h3>
<p>비슷한 규모·유형의 기관이 sLLM 자체구축을 발표하면 따라가는 경우입니다. 그러나 그 기관의 선택이 우리 기관에도 맞다는 보장은 없습니다. 그 기관이 그렇게 선택한 이유와 우리 기관의 상황이 같은지 검증해야 합니다.</p>

<h3>패턴 4 — "예산이 잡혔으니까"</h3>
<p>"AI 구축 사업" 예산이 책정되었고, 그 예산을 사용해야 한다는 압박에서 sLLM이 선택되는 경우입니다. 예산을 받았다고 해서 가장 비싼 옵션을 골라야 하는 것은 아닙니다. 더 효율적인 옵션을 선택하고 남은 예산을 다른 디지털 전환 사업에 활용하는 것이 합리적입니다.</p>

<h3>패턴 5 — "벤더가 추천하니까"</h3>
<p>GPU·인프라·SI 벤더는 자연스럽게 자체구축을 권장합니다. 그들의 매출 구조와 일치하기 때문입니다. 벤더의 추천은 정보의 일부일 뿐이며, 의사결정의 근거가 되어서는 안 됩니다. 객관적 비교 분석이 필요합니다.</p>

<h2>7. sLLM 자체구축 의사결정 체크리스트</h2>
<p>sLLM 자체구축을 검토 중이라면, 다음 질문에 답해보시기 바랍니다. 대부분의 답이 "예"라면 sLLM은 합리적 선택입니다. 답이 명확하지 않거나 대부분 "아니오"라면, 다른 옵션을 함께 검토할 필요가 있습니다.</p>

<div class="takeaways">
  <div class="takeaways__label">sLLM 자체구축 적합성 체크리스트</div>
  <ul>
    <li>5년간 28억 원 이상의 TCO를 부담할 예산이 확보되어 있는가</li>
    <li>2명 이상의 AI/MLOps 전담 인력을 채용·유지할 계획이 있는가</li>
    <li>POC를 통해 우리 도메인에서 sLLM 성능이 충분함을 검증했는가</li>
    <li>1~2년마다 베이스 모델 교체 비용·작업을 감당할 수 있는가</li>
    <li>외부 AI 활용이 우리 기관에 정책적·법적으로 금지되어 있는가</li>
    <li>AI 모델 자체가 기관의 장기 자산이 되어야 할 미션이 있는가</li>
    <li>다른 선택지(게이트웨이, DLP 등)와 객관적으로 비교 분석했는가</li>
  </ul>
</div>

<p>sLLM 자체구축은 매력적이지만 결코 가벼운 선택이 아닙니다. 5년 후 우리 기관이 어떤 상태에 있을지를 가늠하고, 그 길이 정말 우리가 가야 할 길인지를 진지하게 검토하시기 바랍니다.</p>

<h2>자주 묻는 질문</h2>

<h3>7B 정도의 더 작은 모델로 시작하면 비용이 크게 줄지 않나요?</h3>
<p>GPU 인프라 측면에서는 줄어들 수 있습니다. H100 8장 대신 1~2장으로도 7B 모델 운영이 가능하므로, 초기 구축비를 절반 이하로 낮출 수 있습니다. 다만 운영 인력·전력·교체 부담 같은 비-GPU 비용은 거의 동일하게 발생합니다. 그리고 7B 모델의 성능은 32B 대비 더 큰 격차를 보이므로, 활용 가치 측면에서 재검토가 필요합니다.</p>

<h3>sLLM과 게이트웨이 방식을 병행할 수도 있나요?</h3>
<p>가능합니다. 일부 부서는 sLLM 자체구축으로, 다른 부서는 게이트웨이 방식으로 운영하는 하이브리드 구조를 검토하는 기관이 있습니다. 다만 두 시스템의 운영 거버넌스를 동시에 가져가는 부담이 있으므로, 정말 두 방식이 모두 필요한지 검토가 필요합니다. 대부분의 경우 한 방식으로 시작해서 필요시 확장하는 것이 효율적입니다.</p>

<h3>오픈소스 모델 성능이 곧 상용 모델을 따라잡지 않을까요?</h3>
<p>특정 벤치마크에서 일부 오픈소스 모델이 상용 모델과 유사한 점수를 받는 경우가 있습니다. 그러나 실제 업무 활용에서의 종합 성능, 특히 복잡한 추론과 긴 문맥 처리 능력에서는 격차가 여전히 큽니다. 그리고 상용 모델도 멈춰 있지 않습니다. 일시적으로 격차가 좁혀지더라도, 다음 세대 모델이 나오면 격차가 다시 벌어지는 패턴이 반복되고 있습니다.</p>

<h3>자체구축 시 어떤 베이스 모델을 선택해야 하나요?</h3>
<p>현재 시점에서는 Llama 계열, Qwen 계열, 그리고 한국어 특화 모델(Polyglot-Ko 등)이 주요 선택지입니다. 선택은 라이선스 조건, 한국어 성능, 커뮤니티 지원, 기관의 활용 시나리오에 따라 달라집니다. 다만 어느 모델을 선택하든 1~2년 후 더 좋은 모델이 나올 가능성이 매우 높으며, 교체 부담을 처음부터 고려해야 합니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024</li>
  <li>국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>Wang et al., "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark", 2024</li>
  <li>Hugging Face Open LLM Leaderboard, MMLU-Pro 벤치마크 (huggingface.co/spaces/open-llm-leaderboard)</li>
  <li>Kaplan et al., "Scaling Laws for Neural Language Models", 2020</li>
  <li>Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), 2022</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"7B 정도의 더 작은 모델로 시작하면 비용이 크게 줄지 않나요?","acceptedAnswer":{"@type":"Answer","text":"GPU 인프라 측면에서는 줄어들 수 있습니다. H100 8장 대신 1~2장으로도 7B 모델 운영이 가능합니다. 다만 운영 인력·전력·교체 부담 같은 비-GPU 비용은 거의 동일하게 발생하며, 7B 모델의 성능 격차는 더 큽니다."}}, {"@type":"Question","name":"sLLM과 게이트웨이 방식을 병행할 수도 있나요?","acceptedAnswer":{"@type":"Answer","text":"가능합니다. 일부 부서는 sLLM 자체구축으로, 다른 부서는 게이트웨이 방식으로 운영하는 하이브리드 구조를 검토할 수 있습니다. 다만 두 시스템의 운영 거버넌스를 동시에 가져가는 부담이 있습니다."}}, {"@type":"Question","name":"오픈소스 모델 성능이 곧 상용 모델을 따라잡지 않을까요?","acceptedAnswer":{"@type":"Answer","text":"특정 벤치마크에서 일시적으로 좁혀지는 경우는 있지만, 종합 성능과 복잡한 추론·긴 문맥 처리에서는 격차가 여전히 큽니다. 다음 세대 모델이 나오면 격차가 다시 벌어지는 패턴이 반복됩니다."}}, {"@type":"Question","name":"자체구축 시 어떤 베이스 모델을 선택해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"Llama 계열, Qwen 계열, 한국어 특화 모델(Polyglot-Ko 등)이 주요 선택지입니다. 라이선스 조건·한국어 성능·커뮤니티 지원·활용 시나리오에 따라 달라지며, 1~2년 후 교체 부담을 처음부터 고려해야 합니다."}} ] }`

export default function SllmSelfHostedRealityCheck() {
  // ── Page-specific values (replaces LearnArticle Props) ──
  const backLabel = "← Learn"
  const backHref = "/resources/learn"
  const title = "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프"
  const lead = "공공기관 sLLM 자체구축의 진짜 비용(5년 28~38억), 상용 LLM 대비 성능 격차 추세, 잘못된 선택 패턴을 분석합니다."
  const category = "정책 분석"
  const readTime = "18분 읽기"
  const dateUpdated = "2026년 5월 업데이트"
  const tldrLabel = "TL;DR"
  const tldrBody = "sLLM 자체구축은 데이터 통제와 도메인 특화 측면에서 매력적이지만, 진짜 비용은 GPU 인프라뿐 아니라 운영 인력·전력·교체 부담을 합치면 5년 누적 28~38억 원에 달합니다. 더 본질적인 문제는 상용 LLM과의 성능 격차가 시간이 갈수록 벌어진다는 점입니다. sLLM 자체구축이 정답인 경우는 명확히 존재하지만, 일반 행정 효율화가 목적이라면 게이트웨이 방식이 더 합리적입니다."
  const bodyHtml = BODY_HTML
  const canonicalUrl = "https://llmcapsule.ai/resources/learn/sllm-self-hosted-reality-check"
  const datePublished = "2026-05-01"
  const dateModified = "2026-05-01"
  const inLanguage = "ko-KR"
  const breadcrumbLabel = "sLLM 자체구축, 정말 답일까"
  const faqJsonLd = FAQ_JSON_LD
  const relatedSectionLabel = "함께 읽으면 좋은 글"
  const related1Title = "공공기관 생성형 AI 도입의 세 가지 길"
  const related1Href = "/resources/learn/public-sector-genai-three-approaches"
  const related2Title = "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까"
  const related2Href = "/resources/learn/n2sf-model-2-explained"
  const related3Title = "N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리"
  const related3Href = "/resources/learn/what-is-n2sf"
  const related4Title = ""
  const related4Href = ""

  // ── BEGIN inlined LearnArticle body ──
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": lead,
    "inLanguage": inLanguage,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
  })

  const breadcrumbJsonLd = breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside bodyHtml */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body (e.g. CTA link) */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={backHref} className="la-hero__back">{backLabel}</a>
              <h1 className="la-hero__title">{title}</h1>
              <p className="la-hero__lead">{lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{tldrLabel}</div>
              <p className="la-tldr__body">{tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
  // ── END inlined LearnArticle body ──
}
