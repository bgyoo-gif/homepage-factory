// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — LearnArticle logic inlined for Framer cross-folder compatibility.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그 + .callout + .takeaways만 사용 (기존 learn 아티클과 동일 패턴) -->

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 720 580" xmlns="http://www.w3.org/2000/svg">
    <title>공공기관 AI 도입 5가지 막힘 지점 — 단계별 매핑</title>
    <desc>도입 절차의 단계별로 자주 발생하는 5가지 막힘 지점을 시각화</desc>
    <defs>
      <marker id="stuckArrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#5b4fe9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">도입 단계별 막힘 지점 매핑</text>

    <rect x="40" y="60" width="120" height="50" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="100" y="80" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9" text-anchor="middle">N²SF 1~2단계</text>
    <text x="100" y="98" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf" text-anchor="middle">시나리오 정의</text>

    <rect x="180" y="60" width="120" height="50" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="240" y="80" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9" text-anchor="middle">N²SF 2단계</text>
    <text x="240" y="98" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf" text-anchor="middle">정보 등급 분류</text>

    <rect x="320" y="60" width="120" height="50" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="380" y="80" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9" text-anchor="middle">N²SF 3단계</text>
    <text x="380" y="98" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf" text-anchor="middle">솔루션 평가</text>

    <rect x="460" y="60" width="120" height="50" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="520" y="80" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9" text-anchor="middle">예산·조달</text>
    <text x="520" y="98" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf" text-anchor="middle">사업 추진</text>

    <rect x="600" y="60" width="80" height="50" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="640" y="80" font-family="Inter, sans-serif" font-size="10" fill="#5b4fe9" text-anchor="middle">N²SF 5단계</text>
    <text x="640" y="98" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf" text-anchor="middle">운영</text>

    <line x1="160" y1="85" x2="178" y2="85" stroke="#5b4fe9" stroke-width="1.2" marker-end="url(#stuckArrowA)"/>
    <line x1="300" y1="85" x2="318" y2="85" stroke="#5b4fe9" stroke-width="1.2" marker-end="url(#stuckArrowA)"/>
    <line x1="440" y1="85" x2="458" y2="85" stroke="#5b4fe9" stroke-width="1.2" marker-end="url(#stuckArrowA)"/>
    <line x1="580" y1="85" x2="598" y2="85" stroke="#5b4fe9" stroke-width="1.2" marker-end="url(#stuckArrowA)"/>

    <line x1="40" y1="140" x2="700" y2="140" stroke="#e5e7eb" stroke-width="0.5"/>

    <line x1="100" y1="110" x2="100" y2="180" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="240" y1="110" x2="240" y2="180" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="60" y="180" width="380" height="60" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="60" y="180" width="42" height="60" rx="8" fill="#ef5350" stroke="#ef5350"/>
    <text x="81" y="216" font-family="Inter, sans-serif" font-size="18" font-weight="500" fill="#fff" text-anchor="middle">1</text>
    <text x="116" y="204" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">수백만 건 문서의 등급 분류 부담</text>
    <text x="116" y="222" font-family="Inter, sans-serif" font-size="11" fill="#ef5350">분류 작업 자체가 별도 사업 규모</text>

    <line x1="100" y1="110" x2="100" y2="260" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="240" y1="110" x2="240" y2="260" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="60" y="260" width="380" height="60" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="60" y="260" width="42" height="60" rx="8" fill="#ef5350" stroke="#ef5350"/>
    <text x="81" y="296" font-family="Inter, sans-serif" font-size="18" font-weight="500" fill="#fff" text-anchor="middle">2</text>
    <text x="116" y="284" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">활용 시나리오와 모델 2의 충돌</text>
    <text x="116" y="302" font-family="Inter, sans-serif" font-size="11" fill="#ef5350">진짜 쓰고 싶은 업무는 대부분 S 등급</text>

    <line x1="380" y1="110" x2="380" y2="340" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="260" y="340" width="380" height="60" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="260" y="340" width="42" height="60" rx="8" fill="#ef5350" stroke="#ef5350"/>
    <text x="281" y="376" font-family="Inter, sans-serif" font-size="18" font-weight="500" fill="#fff" text-anchor="middle">3</text>
    <text x="316" y="364" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">비교 가능한 후보 솔루션이 너무 적음</text>
    <text x="316" y="382" font-family="Inter, sans-serif" font-size="11" fill="#ef5350">검증된 보호 레이어 솔루션 시장이 좁음</text>

    <line x1="520" y1="110" x2="520" y2="420" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="340" y="420" width="380" height="60" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="340" y="420" width="42" height="60" rx="8" fill="#ef5350" stroke="#ef5350"/>
    <text x="361" y="456" font-family="Inter, sans-serif" font-size="18" font-weight="500" fill="#fff" text-anchor="middle">4</text>
    <text x="396" y="444" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">예산 산정과 도입 시점 불일치</text>
    <text x="396" y="462" font-family="Inter, sans-serif" font-size="11" fill="#ef5350">1년 전 예산으로는 시장 변화 못 따라감</text>

    <line x1="640" y1="110" x2="640" y2="500" stroke="#ef5350" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="340" y="500" width="380" height="60" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="340" y="500" width="42" height="60" rx="8" fill="#ef5350" stroke="#ef5350"/>
    <text x="361" y="536" font-family="Inter, sans-serif" font-size="18" font-weight="500" fill="#fff" text-anchor="middle">5</text>
    <text x="396" y="524" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">도입 후 "쓸 만한 업무가 없음"</text>
    <text x="396" y="542" font-family="Inter, sans-serif" font-size="11" fill="#ef5350">과차단·O 등급 한계로 활용 안 됨</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 1. 5가지 막힘 지점의 단계별 분포</figcaption>
</figure>

<h2>지점 1 — 수백만 건 문서의 등급 분류 부담</h2>

<h3>실제 어떻게 막히는가</h3>
<p>N²SF 절차의 두 번째 단계가 정보 등급 분류(C/S/O)입니다. 정책 문서에는 한 줄로 적혀 있습니다. <strong>"기관이 보유한 정보자산을 등급별로 분류한다."</strong> 그런데 막상 시작하면 첫 번째 질문이 떠오릅니다.</p>
<blockquote>"우리 기관이 가진 문서가 몇 개죠?"</blockquote>
<p>광역지자체급이면 수백만 건, 중앙부처 본부급이면 수천만 건이 일반적입니다. 전자결재 결재 문서, 민원 처리 내역, 정책 보고서, 회의록, 공지사항, 외부 발송 문서 — 이 모든 것이 분류 대상입니다.</p>
<p>이걸 하나씩 분류하면 어떻게 될까요? 한 사람이 하루에 500건씩 분류한다고 가정해도(현실적으로 어렵습니다), 100만 건을 분류하려면 한 사람이 8년 동안 분류만 해야 합니다. 분류 기준을 통일하고 검토 단계를 거치면 시간은 더 늘어납니다.</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body">N²SF는 C/S/O 세 등급을 정의하지만, 실무에서 <strong>C 등급(기밀)은 일반적으로 시스템에 올라가 있지 않고 별도 USB·격리된 보관소 등에 보관</strong>됩니다. 즉 전자결재·문서관리 시스템상에서 분류 대상이 되는 정보는 C 등급을 제외한 S/O 이분입니다. 이 점을 인식하면 분류 작업의 실제 부담이 시각적으로 줄어듭니다.</div>
</div>

<h3>왜 그렇게 막히는가</h3>
<p>이 막힘의 본질은 정책 절차가 아니라 <strong>물리적 규모</strong>입니다. N²SF 가이드라인은 등급 분류의 원칙은 명확히 제시하지만, "수백만 건을 어떻게 효율적으로 분류할 것인가"의 실행 방법은 다루지 않습니다.</p>
<p>여기에 부서 간 책임 분담 문제가 더해집니다. 기관 전체 문서를 누가 분류할 것인가? 정보화담당관실이 다 할 수는 없습니다. 그렇다고 각 부서에 맡기면 분류 기준이 부서마다 달라집니다. 이 합의 자체가 또 막힘 요소가 됩니다.</p>

<h3>풀어내는 방향</h3>
<p>개별 분류 작업을 처음부터 끝까지 사람이 하지 않는 것이 핵심입니다. 가장 효과적인 풀이 두 가지를 정리합니다.</p>
<p><strong>방향 1 — 전자결재 시스템 메타데이터 연동 (가장 일반적)</strong></p>
<p>전자결재 시스템에는 결재 시점에 이미 다음과 같은 메타데이터(flag)가 등록되어 있습니다.</p>
<ul>
  <li><strong>작성 주체</strong>: 작성 부서·작성자</li>
  <li><strong>문서 제목</strong></li>
  <li><strong>외부·타부서 공개 여부</strong></li>
  <li>결재 라인·접근 권한</li>
  <li>문서 종류·분류 코드</li>
</ul>
<p>이 중 특히 <strong>"외부·타부서 공개 여부" flag</strong>가 S/O 분류에 거의 직접 매핑됩니다. 외부 공개 가능으로 표시된 문서는 O 등급, 내부 한정으로 표시된 문서는 S 등급으로 자동 분류 가능합니다. 작성 부서·문서 종류 같은 다른 flag와 조합하면 정확도가 더 높아집니다.</p>
<p>AI 솔루션이 전자결재 시스템의 표준 API를 호출해서 이 메타데이터를 조회하도록 설계하면, 별도의 대규모 분류 작업 없이 등급을 자동으로 도출할 수 있습니다. 새 분류 체계를 처음부터 만드는 것이 아니라, 이미 운영되고 있는 분류 체계를 활용하는 접근입니다.</p>
<p><strong>방향 2 — 자체 분류기 sLLM 구축 (섬세한 분류가 필요한 기관)</strong></p>
<p>기관 자체의 분류 정책이 복잡하거나 메타데이터만으로 식별이 어려운 비정형 문서가 많은 경우, 별도의 <strong>분류 전용 sLLM</strong>을 구축하는 것이 효율적 선택지가 됩니다. 본문이 분류 기준을 학습하면, 메타데이터가 없거나 모호한 문서도 자동 분류할 수 있습니다.</p>
<p>이때 분류기용 sLLM은 <strong>업무용 sLLM과 본질적으로 다른 카테고리</strong>로 봐야 합니다.</p>
<ul>
  <li><strong>업무용 sLLM</strong>: GPT·Claude 등 상용 LLM과 성능 경쟁을 해야 함. 모델 발전 속도를 따라잡기 위한 지속적 고도화 필요 → 비용·인력 부담 누적</li>
  <li><strong>분류기용 sLLM</strong>: 기관 문서의 등급 분류라는 좁은 작업만 잘하면 됨. 한 번 학습된 모델을 장기간 안정적으로 운영 가능 → 지속적 고도화 부담 거의 없음</li>
</ul>
<p>이런 차이 때문에, 일반적으로 sLLM 자체구축의 약점으로 지적되는 부분(상용 모델과의 격차, 모델 교체 부담)이 분류기 용도에서는 거의 작동하지 않습니다. 분류기용 sLLM은 한 번 잘 구축하면 장기간 안정적으로 운영 가능하고, 그 안정성이 오히려 강점이 됩니다.</p>
<p>두 방향은 상호 배타적이지 않습니다. 1차로 전자결재 메타데이터 연동으로 대부분의 문서를 자동 분류하고, 메타데이터로 식별이 어려운 비정형 문서나 특수 케이스만 분류기 sLLM이 처리하는 <strong>하이브리드 구조</strong>가 가장 실용적인 접근입니다.</p>
<p>위 두 방향에 더해, 다음 보조 접근도 함께 고려할 수 있습니다.</p>
<ul>
  <li><strong>대표 샘플 기반 분류</strong>: 모든 문서를 분류하지 않고, 부서·업무·문서종류별 대표 샘플을 분류한 뒤 그 규칙을 자동 적용</li>
  <li><strong>단계적 분류</strong>: 우선 활용 시나리오에 직접 사용되는 정보만 분류, 나머지는 운영하면서 점진 확장</li>
</ul>

<h2>지점 2 — 활용 시나리오와 모델 2 O 등급 한정의 충돌</h2>

<h3>실제 어떻게 막히는가</h3>
<p>모델 2는 외부 상용 LLM 활용 시 정보를 O 등급으로 한정합니다. 정책적으로 명확한 선이지만, 막상 활용 시나리오 정의 단계에서 현장 부서와 워크숍을 해보면 다른 그림이 나옵니다.</p>
<p>직원들이 정작 활용하고 싶은 업무는 다음과 같은 것들입니다.</p>
<ul>
  <li>정책 검토 보고서 작성 보조 — 내부 검토 의견 참조 필요</li>
  <li>법령 해석 자문 — 기관 자체 해석·내부 자문 자료 활용 필요</li>
  <li>회의록 요약 — 내부 회의 내용 입력 필요</li>
  <li>민원 응답 초안 작성 — 과거 민원 처리 사례 참조 필요</li>
</ul>
<p>이 업무들에서 활용하고 싶은 정보의 핵심은 모두 <strong>S 등급</strong>입니다. 즉 모델 2 O 등급 한정 도입을 진행하면, 직원들 입장에서는 "정작 쓰고 싶은 데서는 못 쓰는" 상태가 됩니다.</p>

<h3>왜 그렇게 막히는가</h3>
<p>이 막힘은 정책의 결함이 아니라, <strong>정책의 보수적 선과 현장 활용 욕구 사이의 간극</strong>입니다. 모델 2는 안전을 위한 최소 기준선을 제시하는 것이고, 현장 활용 욕구는 그 선 너머에 있는 것이 자연스럽습니다.</p>
<p>문제는 의사결정자들이 이 간극을 사전에 인식하지 못한 채 도입을 시작하는 경우입니다. 정책 부합성에 집중해서 시나리오 A(O 등급만)로 도입했는데, 운영 단계에서 직원 만족도가 낮고 활용도가 안 올라서 도입 효과를 입증하기 어려워집니다.</p>

<h3>풀어내는 방향</h3>
<p>이 간극을 인정하고 시작하는 것이 첫 단계입니다. 활용 시나리오 정의 단계에서 다음을 명확히 합니다.</p>
<ul>
  <li>O 등급으로만 가능한 시나리오는 무엇인가</li>
  <li>S 등급 활용이 필요한 시나리오는 무엇인가</li>
  <li>두 영역이 직원 활용 욕구에서 차지하는 비중은 각각 얼마인가</li>
</ul>
<p>이 분석 결과에 따라 도입 방식이 갈립니다.</p>
<ul>
  <li><strong>O 등급 비중이 충분하면</strong>: 모델 2 표준 절차(시나리오 A)로 진행. 다만 활용 가능 시나리오를 사전에 명시해서 직원 기대 관리</li>
  <li><strong>S 등급 활용이 필수면</strong>: 차등정보보호 기반 보호 레이어 도입(시나리오 B). 자체 위험평가 절차가 추가되지만 활용 폭이 본질적으로 달라짐</li>
  <li><strong>단계적 접근</strong>: O 등급으로 시작 → 운영 6~12개월 후 사용 패턴 분석 → S 등급 확장 결정</li>
</ul>

<h2>지점 3 — 비교 가능한 후보 솔루션이 너무 적음</h2>

<h3>실제 어떻게 막히는가</h3>
<p>RFP를 띄우는 단계에서 자주 발생하는 막힘입니다. 평가 기준은 만들었는데 평가 대상이 부족합니다.</p>
<p>특히 시나리오 B(S 등급 활용)로 가려는 경우, 검증된 보호 레이어 솔루션의 시장이 매우 좁습니다. <strong>차등정보보호(Differential Privacy) 기반의 보호 기법을 보유하고, 국내 인증·검증을 받은 솔루션</strong>은 손에 꼽을 정도입니다.</p>
<p>반면 단순 마스킹·키워드 차단 기반의 AI DLP 솔루션은 상대적으로 많습니다. 그래서 RFP를 띄우면 마스킹 솔루션이 다수 제안되고, 보호 레이어 솔루션은 1~2개만 들어오는 상황이 됩니다. 평가위원회 입장에서는 "비교가 안 된다"는 문제에 부딪힙니다.</p>

<h3>왜 그렇게 막히는가</h3>
<p>이 막힘의 본질은 시장 성숙도입니다. 차등정보보호는 학술적으로는 2006년 제안된 개념이지만, 국내 공공시장 적용 가능 수준의 솔루션이 본격 등장한 것은 최근입니다. 기술 자체의 진입 장벽이 높고(수학적 보안 보증·재식별 공격 방어 검증 등), 공공시장 진입을 위한 인증 트랙도 길어서 솔루션 공급이 한정되어 있습니다.</p>

<h3>풀어내는 방향</h3>
<p>후보가 적다고 마스킹 솔루션으로 타협하는 것은 위험합니다. 단순 마스킹 기반 솔루션은 운영 단계에서 보안 우려가 재발생하거나, 감사 단계에서 N²SF 정합성 논증이 도전받을 수 있습니다.</p>
<p>대안은 다음과 같습니다.</p>
<ul>
  <li><strong>평가 기준의 명시적 강화</strong>: RFP에서 "보호 기법의 종류(마스킹/차등정보보호 등)·학술적 근거·재식별 공격 검증 자료"를 명시적 평가 항목으로 요구. 이렇게 하면 마스킹 솔루션은 자연스럽게 평가 단계에서 차별화됩니다</li>
  <li><strong>후보가 적어도 PoC 수행</strong>: 1~2개 후보만 있더라도 PoC를 통해 실제 보호 강도·운영 적합성을 검증. 비교 평가는 어려워도 단독 적합성 평가는 가능</li>
  <li><strong>단계적 도입으로 시간 확보</strong>: 시나리오 A로 먼저 도입 후 시나리오 B 솔루션 시장 성숙을 기다리는 접근. 1~2년 후 시장이 더 성숙해 있을 가능성</li>
</ul>

<h2>지점 4 — 예산 산정과 도입 시점의 불일치</h2>

<h3>실제 어떻게 막히는가</h3>
<p>공공기관 예산은 통상 1년 전에 편성됩니다. 즉 2026년 사업 예산은 2025년 7~8월에 잡힙니다. 그런데 AI 시장의 변화 주기는 6개월 미만입니다. 새 모델이 나오고, 새 보안 가이드라인이 추가되고, 시장 가격이 변동됩니다.</p>
<p>그 결과 사업 시작 시점에 다음 중 하나가 발생합니다.</p>
<ul>
  <li><strong>예산 부족</strong>: 1년 전 견적 기반 예산이 현재 시장 가격에 못 미침</li>
  <li><strong>시나리오 변경 불가</strong>: 1년 전에 시나리오 A로 예산 잡았는데 시나리오 B가 필요한 상황 발견. 그러나 예산 항목 변경 불가</li>
  <li><strong>적절한 솔루션 부재</strong>: 1년 전 시장에 없던 새 솔루션이 등장했지만 평가 대상에 못 넣음</li>
</ul>

<h3>왜 그렇게 막히는가</h3>
<p>공공 예산 체계의 본질적 특성입니다. 안정적 예산 운용을 위해 1년 전 편성은 필수이고, 그 사이 시장 변화는 막을 수 없습니다. 이 간극은 AI뿐 아니라 모든 빠르게 변하는 IT 영역에 공통입니다.</p>

<h3>풀어내는 방향</h3>
<p>AI 도입을 한 번에 큰 사업으로 하지 않고, 사전 검토와 본 도입을 분리하는 접근이 효과적입니다.</p>
<ul>
  <li><strong>사전 검토 사업 + 본 사업 분리</strong>: 1차 연도에 소액 사전 검토 사업(시나리오 정의, 등급 분류, 모델링)을 수행. 결과를 기반으로 2차 연도에 본 도입 사업 정확하게 산정</li>
  <li><strong>단계별 분할 발주</strong>: 사업 자체를 1차(기반 구축)·2차(확장 운영)로 나누어 시장 변화 반영 여지 확보</li>
  <li><strong>예산 편성 시점 사전 검토</strong>: 7~8월 예산 편성 이전에 시나리오 정의와 시장 조사를 완료. 정확한 예산 산정 가능</li>
  <li><strong>유연한 예산 항목 설계</strong>: 솔루션비·인프라비·인건비를 별도 항목으로 잡아 시장 변화에 대응 가능한 구조</li>
</ul>

<h2>지점 5 — 도입 후 "쓸 만한 업무가 없음"</h2>

<h3>실제 어떻게 막히는가</h3>
<p>가장 무거운 막힘은 마지막입니다. 솔루션 도입까지는 성공했는데, 운영 단계에서 활용도가 기대 대비 현저히 낮은 경우입니다. 이 패턴은 보통 두 가지 형태로 나타납니다.</p>
<p><strong>형태 1 — DLP·차단 솔루션의 과차단</strong></p>
<p>안전을 위한 차단 솔루션을 도입했는데, 정상 업무 요청도 차단되는 경우가 대다수입니다. 직원이 보고서 작성에 관련 자료를 요청해도 키워드 매칭으로 차단되고, 민원 응답 초안을 요청해도 차단됩니다. 차단 정책을 완화하면 보안 우려가 커지고, 강화하면 사용성이 무너지는 딜레마에 빠집니다.</p>
<p>결과: 직원들 사이에 "그거 켜놓으면 일이 안 됨"이 정설이 되어 우회하거나 그냥 사용하지 않습니다. 결국 도입 의미가 사라지고, 다음 연도 예산 평가에서 "AI 도입 효과 불분명"으로 평가받습니다.</p>
<p><strong>형태 2 — O 등급 한정의 빈약함</strong></p>
<p>시나리오 A(O 등급만 활용)로 안전하게 도입했는데, 정작 활용 가능 정보가 너무 좁아서 직원들이 쓸 일이 없는 경우입니다.</p>
<p>예를 들어 법무 부서가 가장 활용하고 싶어 하는 정보는 판례입니다. 공개 판례는 O 등급이지만, 기관 자체의 해석·내부 검토 의견은 S 등급입니다. AI에게 판례만 보여주고 "이 사안에 대한 의견을 달라"고 하면, 일반적인 응답만 돌아옵니다. 정작 필요한 건 "우리 기관의 과거 비슷한 사안 처리 사례를 참조한 응답"인데, 그건 S 등급 정보가 들어가야 가능합니다.</p>
<p>비슷한 패턴이 거의 모든 부서에서 발생합니다. 정책 부서는 내부 정책 검토 의견을 참조해야 하고, 민원 부서는 과거 민원 처리 사례를 참조해야 하고, 인사 부서는 내부 인사 자료를 참조해야 합니다. 외부 보도자료나 일반 공지사항만으로 처리할 수 있는 업무는 정작 AI 도움이 없어도 가능한 영역인 경우가 많습니다.</p>

<h3>왜 그렇게 막히는가</h3>
<p>두 형태 모두 공통점은 <strong>"안전성을 위해 활용성을 희생"</strong>한 구조입니다. 보안 측면에서는 흠잡을 데 없지만, 도입의 본래 목적인 업무 효율화는 달성되지 않습니다. 그리고 이 한계는 도입 단계에서 보이지 않고, 운영 단계에서야 본격적으로 드러납니다.</p>

<h3>풀어내는 방향</h3>
<p>이 막힘을 피하려면 도입 단계에서 다음을 점검해야 합니다.</p>
<ul>
  <li><strong>활용 가능 시나리오 사전 검증</strong>: 도입 전에 "정말 직원들이 쓸 시나리오가 있는가"를 실제 부서별 워크숍으로 확인. 추상적 "업무 효율화"가 아니라 구체적 활용 사례를 5~10개 식별</li>
  <li><strong>DLP 정책의 정밀화</strong>: 단순 키워드 차단이 아니라 등급·맥락 기반의 정밀한 통제. 정상 업무는 통과시키고 실제 위험만 차단하는 설계</li>
  <li><strong>보호 레이어 도입 검토</strong>: 활용 가능 시나리오 중 S 등급 활용이 필수인 영역이 많으면, 차등정보보호 기반 보호 레이어로 시나리오 B 도입. 활용 폭이 본질적으로 달라짐</li>
  <li><strong>단계적 운영 점검</strong>: 도입 후 3개월·6개월 시점에 활용도 정량 점검. 활용도가 낮으면 즉시 진단 → 추가 조치</li>
</ul>

<h2>다섯 가지 막힘을 관통하는 한 가지 진단</h2>
<p>위 다섯 가지 막힘 지점은 표면적으로는 서로 다른 영역에서 발생하지만, 한 가지 공통점이 있습니다. <strong>정책 문서가 제시한 절차를 그대로 따랐을 뿐인데도 막힌다</strong>는 점입니다.</p>
<p>이게 의미하는 바는 분명합니다. N²SF와 모델 2가 제시한 정책 절차는 안전한 도입의 <strong>최소 기준선</strong>이지, 도입 성공을 보장하는 종합 가이드가 아닙니다. 정책 절차를 따르되, 그 절차가 우리 기관의 물리적 규모·활용 현실·시장 상황과 만났을 때 어떻게 변형되어야 하는지를 각 기관이 스스로 설계해야 합니다.</p>
<p>그 설계의 출발점은 막힘의 실제 모습을 정확히 진단하는 것입니다. "보안과 활용성의 균형" 같은 추상적 진단이 아니라, "수백만 건 문서 분류는 사람이 다 못 한다", "직원이 쓰고 싶은 건 대부분 S 등급이다", "검증된 솔루션 후보가 1~2개뿐이다" 같은 구체적 진단입니다. 진단이 정확하면 풀이는 보입니다.</p>

<div class="takeaways">
  <div class="takeaways__label">5가지 막힘과 풀이 방향 요약</div>
  <ul>
    <li><strong>지점 1 (등급 분류 부담)</strong> — 전자결재 메타데이터 연동, 분류기 sLLM, 또는 두 방식의 하이브리드</li>
    <li><strong>지점 2 (시나리오 충돌)</strong> — O/S 활용 비중 사전 분석, 보호 레이어 도입 또는 단계적 접근</li>
    <li><strong>지점 3 (솔루션 부족)</strong> — 평가 기준 강화로 차별화, 단독 적합성 평가, 단계적 도입</li>
    <li><strong>지점 4 (예산 불일치)</strong> — 사전 검토 사업 분리, 단계별 분할 발주, 유연한 예산 항목 설계</li>
    <li><strong>지점 5 (활용 안 됨)</strong> — 시나리오 사전 검증, DLP 정밀화, 보호 레이어로 활용 폭 확장</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>이 5가지 외에 다른 막힘은 없나요?</h3>
<p>있습니다. 다만 위 5가지가 가장 자주, 그리고 가장 크게 막히는 지점입니다. 다른 막힘으로는 사용자 교육 미흡, 거버넌스 부재, 외부 자문 일정 확보 어려움 등이 있으며, 모두 위 5가지의 변형이거나 결과로 볼 수 있습니다.</p>

<h3>5가지 모두를 한 사업에서 풀어야 하나요?</h3>
<p>모두 동시에 풀려고 하면 사업이 한없이 길어집니다. 도입 단계별로 우선 풀어야 할 지점이 다르므로, 단계별로 가장 큰 막힘을 식별해서 그 지점을 우선 풀어내는 접근이 효율적입니다. 예를 들어 N²SF 1~2단계에서는 지점 1·2가, 솔루션 평가 단계에서는 지점 3이 우선입니다.</p>

<h3>전자결재 API 연동은 어떻게 진행하나요?</h3>
<p>대부분의 공공기관 전자결재 시스템은 표준 API를 제공합니다. 문서 메타데이터(보안등급, 문서종류, 부서, 결재 라인)를 조회하는 API를 사용해서 AI 솔루션이 등급을 자동 식별하도록 연동합니다. 구체적 연동 방식은 기관의 전자결재 시스템(온나라·자체 시스템 등)에 따라 달라지며, 솔루션 벤더와 함께 설계하는 것이 일반적입니다.</p>

<h3>단계적 도입(시나리오 A → B)이 정말 가능한가요?</h3>
<p>가능합니다. 시나리오 A로 시작해서 6~12개월 운영하면서 활용 패턴을 분석하고, 그 결과를 바탕으로 시나리오 B 확장 여부를 결정합니다. 다만 시나리오 B로 확장할 때 보호 레이어 솔루션 도입이 추가되므로 별도 예산 확보가 필요합니다. 처음부터 두 단계 모두를 염두에 두고 사업을 설계하면 부드럽게 확장 가능합니다.</p>

<h3>도입 후 활용도가 낮으면 어떻게 진단하나요?</h3>
<p>도입 후 3개월·6개월 시점에 다음을 측정합니다. (1) 부서별·업무별 사용 빈도, (2) 차단된 요청 비율과 차단 사유, (3) 사용자 만족도 조사. 차단 비율이 비정상적으로 높으면 정책 정밀화가 필요한 신호이고, 특정 부서 사용 빈도가 낮으면 활용 시나리오 재정의가 필요한 신호입니다. 정량 데이터에 기반한 진단이 추측보다 훨씬 효과적입니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024</li>
  <li>국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>본 글의 막힘 패턴은 큐빅의 공공기관 도입 자문 사례에서 관찰된 패턴을 익명화·일반화하여 정리한 것입니다.</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"이 5가지 외에 다른 막힘은 없나요?","acceptedAnswer":{"@type":"Answer","text":"있습니다. 다만 위 5가지가 가장 자주, 그리고 가장 크게 막히는 지점입니다. 다른 막힘으로는 사용자 교육 미흡, 거버넌스 부재, 외부 자문 일정 확보 어려움 등이 있으며, 모두 위 5가지의 변형이거나 결과로 볼 수 있습니다."}}, {"@type":"Question","name":"5가지 모두를 한 사업에서 풀어야 하나요?","acceptedAnswer":{"@type":"Answer","text":"모두 동시에 풀려고 하면 사업이 한없이 길어집니다. 도입 단계별로 우선 풀어야 할 지점이 다르므로, 단계별로 가장 큰 막힘을 식별해서 그 지점을 우선 풀어내는 접근이 효율적입니다."}}, {"@type":"Question","name":"전자결재 API 연동은 어떻게 진행하나요?","acceptedAnswer":{"@type":"Answer","text":"대부분의 공공기관 전자결재 시스템은 표준 API를 제공합니다. 문서 메타데이터(보안등급, 문서종류, 부서, 결재 라인)를 조회하는 API를 사용해서 AI 솔루션이 등급을 자동 식별하도록 연동합니다."}}, {"@type":"Question","name":"단계적 도입(시나리오 A → B)이 정말 가능한가요?","acceptedAnswer":{"@type":"Answer","text":"가능합니다. 시나리오 A로 시작해서 6~12개월 운영하면서 활용 패턴을 분석하고, 그 결과를 바탕으로 시나리오 B 확장 여부를 결정합니다."}}, {"@type":"Question","name":"도입 후 활용도가 낮으면 어떻게 진단하나요?","acceptedAnswer":{"@type":"Answer","text":"도입 후 3개월·6개월 시점에 부서별·업무별 사용 빈도, 차단된 요청 비율과 차단 사유, 사용자 만족도 조사를 측정합니다. 정량 데이터에 기반한 진단이 추측보다 훨씬 효과적입니다."}} ] }`

export default function PublicSectorGenaiFiveStuckPoints({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 — 현장 분석",
  lead = "정책은 알겠는데 실무에서 막힌다는 정보화담당관 분들의 목소리를 5개 막힘 지점으로 정리합니다. 등급 분류 부담, 시나리오 충돌, 솔루션 후보 부족, 예산 시점, 활용 실패.",
  category = "현장 분석",
  readTime = "16분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "공공기관 생성형 AI 도입은 정책 자체보다 다음 다섯 가지 막힘 지점에서 멈춥니다. (1) 데이터 등급 분류 부담, (2) 활용 시나리오와 O 등급 충돌, (3) 솔루션 후보 부족, (4) 예산 시점 불일치, (5) 활용 실패. 다섯 지점을 관통하는 공통 진단은 '메타데이터·등급 자동화·차등정보보호 게이트웨이 같은 도구가 모두 갖춰져야 비로소 막힘이 풀린다'는 것입니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/public-sector-genai-five-stuck-points",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "ko-KR",
  breadcrumbLabel = "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵",
  related1Href = "/resources/learn/public-sector-external-llm-adoption-roadmap",
  related2Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related2Href = "/resources/learn/public-sector-genai-three-approaches",
  related3Title = "sLLM 자체구축, 정말 답일까",
  related3Href = "/resources/learn/sllm-self-hosted-reality-check",
  related4Title = "",
  related4Href = "",
}: Props) {
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
}

addPropertyControls(PublicSectorGenaiFiveStuckPoints, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 — 현장 분석" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "정책은 알겠는데 실무에서 막힌다는 정보화담당관 분들의 목소리를 5개 막힘 지점으로 정리합니다. 등급 분류 부담, 시나리오 충돌, 솔루션 후보 부족, 예산 시점, 활용 실패.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "현장 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "16분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "공공기관 생성형 AI 도입은 정책 자체보다 다음 다섯 가지 막힘 지점에서 멈춥니다. (1) 데이터 등급 분류 부담, (2) 활용 시나리오와 O 등급 충돌, (3) 솔루션 후보 부족, (4) 예산 시점 불일치, (5) 활용 실패. 다섯 지점을 관통하는 공통 진단은 '메타데이터·등급 자동화·차등정보보호 게이트웨이 같은 도구가 모두 갖춰져야 비로소 막힘이 풀린다'는 것입니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/public-sector-genai-five-stuck-points" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/public-sector-external-llm-adoption-roadmap" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "sLLM 자체구축, 정말 답일까" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/sllm-self-hosted-reality-check" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
