// N2SF Model 2 — Part 2: N2SF Framework + Model 2 Diagram + Pain Point + Alt Compare + Our Approach + Strengths + Use Cases
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect, useRef } from "react"

const BASE_IMG = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/"

const DEFAULT_CSO = [
  {
    grade: "C",
    name: "Classified · 기밀",
    items: ["국가안보·수사·방위 기밀", "핵심 보안 정책과 취약점", "유출 시 피해가 큰 자료"],
    aiItems: ["외부 AI 연결이 어렵습니다", "별도 폐쇄망 검토가 필요합니다", "일반 AI 활용과 분리해 봐야 합니다"],
    badge: "외부 전송 대상이 아닙니다",
  },
  {
    grade: "S",
    name: "Sensitive · 민감",
    items: ["민원·회의록·계약서·보고서", "개인정보와 업무 맥락이 섞인 문서", "로그·티켓·예산·감사 자료"],
    aiItems: ["가장 쓰고 싶지만 가장 많이 막힙니다", "원문을 그대로 보내면 문제가 됩니다", "가리고 기록하고 복원하는 구조가 필요합니다"],
    badge: "가장 먼저 봐야 할 등급",
  },
  {
    grade: "O",
    name: "Open · 공개",
    items: ["보도자료·공지·공개 통계", "외부 공개가 가능한 문서", "민감정보가 없는 자료"],
    aiItems: ["외부 AI 활용이 비교적 자유롭습니다", "업무 효과는 제한적일 수 있습니다", "S등급까지 다루려면 별도 구조가 필요합니다"],
    badge: "공개자료 중심 활용",
  },
]

const DEFAULT_IMPL = [
  { title: "인증·접근 통제", req: "인증 서버, 비인가 접근 차단", solution: "기관 ID 연동, 이용자 권한 분리" },
  { title: "콘텐츠 통제", req: "자료유형 통제, 프롬프트·콘텐츠 필터링", solution: "민감정보 자동 비식별화 및 응답 복원" },
  { title: "감사·로그", req: "일방향 통신, 통제 기록", solution: "모든 캡슐화 이력 자동 로그, 실적 보고서 자동 생성" },
]

const DEFAULT_CASES = [
  { badge: "CASE 1", title: "국민신문고 민원 답변 작성", desc: "민원인 식별정보 노출 위험으로 AI 사용 제한", tags: ["이름", "주소", "민원번호"], image: `${BASE_IMG}case-1.png` },
  { badge: "CASE 2", title: "타 기관 수발신 공문 요약", desc: "대외비 및 내부 의사결정 과정 포함으로 외부 반출 금지", tags: ["대외비", "의사결정"], image: `${BASE_IMG}case-2.png` },
  { badge: "CASE 3", title: "위원회·간담회 회의록 정리", desc: "비공개 발언 및 참석자 실명 노출 위험으로 활용 불가", tags: ["실명", "비공개 발언"], image: `${BASE_IMG}case-3.png` },
  { badge: "CASE 4", title: "계약서 및 과업지시서 검토", desc: "사업 예산, 업체 영업비밀 등 민감 정보 혼재", tags: ["사업예산", "영업비밀"], image: `${BASE_IMG}case-4.png` },
  { badge: "CASE 5", title: "정책 보고서·리포트 초안", desc: "기밀 유지 및 미공개 내부 통계 유출 우려", tags: ["미공개 통계", "기밀", "내부 자료"], image: `${BASE_IMG}case-5.png` },
]

const DEFAULT_ALT_HEADERS = ["비교 항목", "외부 AI 그대로", "자체 sLLM·프라이빗 LLM", "일반 AI DLP·마스킹", "LLM Capsule"]
const DEFAULT_ALT_ROWS = [
  { label: "도입 속도", cols: ["빠름 (즉시)", "12개월 이상", "보통 (2~3개월)", "빠름 (2~4주)"], marks: ["○", "×", "△", "○"] },
  { label: "초기 비용", cols: ["거의 없음", "수십억 단위", "중간", "합리적 (조달 가능)"], marks: ["○", "×", "△", "○"] },
  { label: "N2SF 모델 2 준수", cols: ["위반", "가능 (구축 시)", "부분 위반", "표준 구현"], marks: ["×", "○", "×", "○"] },
  { label: "AI 응답 정확도", cols: ["높음", "상용 대비 낮음", "구조 깨짐, 정확도 하락", "높음 (구조 보존)"], marks: ["○", "△", "×", "○"] },
  { label: "민감 정보 보호", cols: ["그대로 외부 전송", "내부 통제", "***로 가림", "캡슐화 + 자동 복원"], marks: ["×", "○", "△", "○"] },
  { label: "감사 로그·실적 보고", cols: ["없음", "별도 구축 필요", "없음", "자동 생성"], marks: ["×", "△", "×", "○"] },
  { label: "운영 인력", cols: ["불필요", "전담 팀 필요", "실무자 수동 복원", "최소 운영"], marks: ["○", "×", "△", "○"] },
]

const DEFAULT_WHY = [
  { badge: "N2SF · C/S/O", title: "공개 자료가 아니라 업무 자료를 활용할 수 있어야 합니다.", body: "공개자료는 외부 AI에 쓸 수 있어도, 현업이 정작 쓰고 싶은 민원·회의록·계약서는 대부분 민감한 내용이 섞여 있습니다. 민감 문서도 AI에 활용할 수 있어야 합니다" },
  { badge: "SHADOW AI", title: "AI 활용을 막기만 하면 숨어서 사용합니다.", body: "대안 없는 금지는 '우회 사용'을 유발합니다. 합법적이고 안전한 AI 통로를 열어주어, 실무자의 업무 효율과 기관의 보안 통제권을 동시에 확보해야 합니다." },
  { badge: "성과 · 평가", title: "단순 도입보다 안전하게 활용 가능한 구조여야 평가 점수가 좋습니다.", body: "단순 도입 여부보단 보안·윤리·법·데이터 거버넌스 기준을 충족하는지를 평가합니다. 즉 N2SF 모델 2 정합성을 갖춘 AI 도입이 곧 경영평가 가점의 핵심 조건입니다." },
]

const DEFAULT_FLOW = [
  { num: "1", title: "캡슐화", body: "공공 문서가 외부 AI로 나가기 전, 기관 안에서 민감 정보를 자동 탐지하고 비식별 처리합니다. 문서 표·구조는 그대로 유지됩니다." },
  { num: "2", title: "외부 AI 처리", body: "챗GPT·Claude·Gemini는 캡슐화된 프롬프트만 받습니다. 원본 정보는 외부로 나가지 않습니다." },
  { num: "3", title: "업무용 복원", body: "임시 토큰으로 대체되었던 민감정보가 AI 응답과 동시에 원본으로 100% 자동 치환됩니다. 담당자가 빈칸을 다시 채워 넣는 수작업이 필요없습니다." },
]

const DEFAULT_STRENGTHS = [
  { icon: "⊕", title: "N2SF 모델 2 표준 대응", body: "프롬프트 필터링, 등급 식별, 일방향 통신, 감사 로그까지 모델 2가 요구하는 보안통제를 기본 구현합니다.", highlight: "추가 개발 없이 도입 즉시 적용" },
  { icon: "◎", title: "정보 등급 자동 분류", body: "민원·공문·계약서 안의", highlight: "민감 정보를 문맥 기반으로 탐지", bodyAfter: "합니다. 정규식 규칙으로는 잡지 못하는 영업비밀·미공개 통계도 잡습니다." },
  { icon: "↻", title: "원본 자동 복원 (Restoration)", body: "마스킹과 다릅니다. AI 응답이 돌아오면 [이름A]·[계좌B] 같은 토큰이 자동으로 원본 정보로 복원됩니다.", highlight: "실무자가 수동으로 채워 넣을 필요가 없습니다." },
  { icon: "⌘", title: "문서 구조 보존", body: "표 구조·중첩 섹션·문서 간 참조가 캡슐화 과정에서 그대로 유지됩니다. AI가 구조적으로 완전한 문서를 받기 때문에,", highlight: "응답 정확도가 떨어지지 않습니다." },
  { icon: "◉", title: "온프레미스·내부망 설치", body: "LLM Capsule은 기관 내부망에 설치됩니다. 외부 클라우드를 거치지 않고,", highlight: "기관 운영 환경 안에서", bodyAfter: " 모든 통제가 끝납니다." },
  { icon: "≡", title: "감사 로그·도입 실적 보고서", body: "프롬프트 원문, 캡슐화 과정, 적용 규칙, AI 응답까지 연결된", highlight: "감사 로그를 제공", bodyAfter: "합니다. 정부 평가에 제출할 AI 도입 실적 보고서가 그 로그에서 자동 생성됩니다." },
]

const DEFAULT_UC_TABS = [
  { label: "민원 응대", image: `${BASE_IMG}uc-civil.png` },
  { label: "규정 검토", image: `${BASE_IMG}uc-regulation.png` },
  { label: "보고서 작성", image: `${BASE_IMG}uc-report.png` },
  { label: "감사 지원", image: `${BASE_IMG}uc-audit.png` },
]

const fallbackImg = (prop: string | undefined, fallback: string) =>
  prop && prop.length > 0 ? prop : fallback
const fallbackArr = <T,>(arr: T[] | undefined, def: T[]): T[] =>
  arr && arr.length > 0 ? arr : def

export default function N2sfPart2({
  // N2SF Framework
  n2sfKicker = "N2SF FRAMEWORK",
  n2sfHeadline = "국가정보원에서\n국가·공공기관 망 보안 프레임워크(N2SF)를\n발표했습니다.",
  n2sfDescription = "국가사이버보안기본지침이 '필수 망분리'에서 '다중계층 보안'으로 전환되면서, 정부·공공기관은 모든 정보를 C·S·O 세 등급으로 나누고 등급에 맞는 보안체계를 갖춰야 합니다. 그 기준이 N2SF입니다.",
  n2sfCoverImage = `${BASE_IMG}n2sf-cover.png`,
  csoCards = DEFAULT_CSO,
  // Model 2
  m2Eyebrow = "MODEL 2 · AI 연계체계",
  m2Headline = "N2SF의 「모델 2」프레임워크로\nAI를 안전하게 업무에 활용할 수 있습니다.",
  m2Sub = "N2SF가 제시하는 11가지 보안 모델 중, 「모델 2」는 업무환경에서 외부 생성형 AI를 활용하는 표준입니다. LLM Capsule은 이 표준 시나리오의 「AI 연계체계」 위치에서, 단말과 외부 AI 사이의 정보 흐름을 안전하게 처리합니다.",
  m2ImplCards = DEFAULT_IMPL,
  m2DiagramCaption = "출처. 「N2SF 보안 가이드라인 1.0 (부록2) 모델 2 — 업무환경에서 생성형 AI 활용」 그림 2-8 (AI 연계체계) 재구성",
  // Pain Point
  painKicker = "PAIN POINT",
  painHeadline = "가장 AI가 필요한 업무일수록,\n엄격한 보안 문턱에 부딪힙니다.",
  painBody1 = "공식적인 지원이 늦어지는 사이, 실무자들은 업무 효율을 위해 개인 계정으로 외부 AI를 몰래 사용하는 이른바 '섀도우 AI' 환경에 노출되기 쉽습니다.",
  painBody2 = "공공문서 속 민감정보를 자동으로 가려서 안전하게 외부 AI에 연결하고 모든 프롬프트 내역을 안전하게 기록하는 현실적인 대안이 필요합니다.",
  painEmphasis1 = "가장 시간과 인력이 많이 드는 핵심 업무에 AI가 투입되어야 진정한 행정 혁신이 완성됩니다.",
  painEmphasis2 = "막연한 사용 보류를 넘어, 현업에 '안전하고 투명한 AI 사용 환경'을 열어주어야 할 때입니다.",
  painCaseLabel = "AI 사용이 제한되는 실제 공공 업무 사례",
  painCases = DEFAULT_CASES,
  // Alt Compare
  altKicker = "ALTERNATIVE COMPARISON",
  altHeadline = "외부 AI 차단·자체 구축·마스킹,\n어떤 선택지가 우리 기관에 맞을까요?",
  altDescription = "공공 생성형 AI 도입은 보안성·활용성·운영 부담을 함께 봐야 합니다. 차단·자체 구축·DLP·통제 레이어를 한눈에 비교했습니다.",
  altHeaders = DEFAULT_ALT_HEADERS,
  altRows = DEFAULT_ALT_ROWS,
  // Our Approach
  appKicker = "OUR APPROACH",
  appHeadline = "민감정보는 가리고,\n업무는 멈추지 않게 합니다.",
  appDescription = "공공기관이 AI 도입에 앞서 풀어야 할 문제 LLM Capsule은 3가지 문제를 모두 해결합니다.",
  whyCards = DEFAULT_WHY,
  flowTitle = "LLM Capsule은 이렇게 흐르게 합니다",
  flowSub = "정보를 등급에 맞게 변환해서 외부 AI에 전달하고, 응답이 돌아오면 원본으로 자동 복원합니다.",
  flowSteps = DEFAULT_FLOW,
  trustLine = "N2SF 모델 2가 요구하는 AI 연계체계 보안통제 항목을 표준으로 구현합니다.",
  // Strengths (dark)
  strKicker = "WHY LLM CAPSULE",
  strHeadline = "이미 도입한 기관들이\nLLM Capsule을 선택한 이유",
  strengthCards = DEFAULT_STRENGTHS,
  // Use Cases
  ucKicker = "USE CASES",
  ucHeadline = "실제 공공 업무에서는\n어떻게 쓰일까요?",
  ucDescription = "문서 구조나 양식을 유지한채 문제가 될 수 있는 민감한 내용만 알아서 처리합니다. 결과는 다시 알아서 복원하여 업무에 바로 쓸 수 있는 그대로 확인할 수 있습니다.",
  ucTabs = DEFAULT_UC_TABS,
}: Props) {
  const _csoCards = fallbackArr(csoCards, DEFAULT_CSO)
  const _m2ImplCards = fallbackArr(m2ImplCards, DEFAULT_IMPL)
  const _painCases = fallbackArr(painCases, DEFAULT_CASES)
  const _altHeaders = fallbackArr(altHeaders, DEFAULT_ALT_HEADERS)
  const _altRows = fallbackArr(altRows, DEFAULT_ALT_ROWS)
  const _whyCards = fallbackArr(whyCards, DEFAULT_WHY)
  const _flowSteps = fallbackArr(flowSteps, DEFAULT_FLOW)
  const _strengthCards = fallbackArr(strengthCards, DEFAULT_STRENGTHS)
  const _ucTabs = fallbackArr(ucTabs, DEFAULT_UC_TABS)

  const [ucActive, setUcActive] = useState(0)
  const [ucFade, setUcFade] = useState(false)
  const ucRef = useRef<HTMLDivElement>(null)
  const [ucVisible, setUcVisible] = useState(false)

  useEffect(() => {
    if (!ucRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setUcVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(ucRef.current)
    return () => obs.disconnect()
  }, [])

  const switchUc = (i: number) => {
    if (i === ucActive) return
    setUcFade(true)
    setTimeout(() => {
      setUcActive(i)
      setUcFade(false)
    }, 250)
  }

  const nl = (s: string) =>
    s.split("\n").map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ))

  const accentNl = (s: string) => {
    const parts = s.split("\n")
    return parts.map((line, i) => (
      <span key={i}>
        {i > 0 ? <span className="p2-accent">{line}</span> : line}
        {i < parts.length - 1 && <br />}
      </span>
    ))
  }

  const resolvedUcImg = fallbackImg(_ucTabs[ucActive]?.image, DEFAULT_UC_TABS[ucActive]?.image || "")

  return (
    <div className="p2-root">
      <style>{CSS}</style>

      {/* N2SF FRAMEWORK (DARK) */}
      <section className="p2-s p2-s-dark">
        <div className="p2-container">
          <span className="p2-sh-kicker">{n2sfKicker}</span>
          <h2 className="p2-sh-big">{accentNl(n2sfHeadline)}</h2>
          <p className="p2-section-lead">{n2sfDescription}</p>
          <div className="p2-cso-grid">
            <div className="p2-cso-cover">
              <div className="p2-cso-cover-imgwrap">
                <img className="p2-cso-cover-img" src={fallbackImg(n2sfCoverImage, `${BASE_IMG}n2sf-cover.png`)} alt="N2SF 가이드라인 표지" />
              </div>
              <div className="p2-cso-cover-foot">
                <div className="p2-cap-label">National Intelligence Service</div>
                <div className="p2-cap-title">국가 망 보안체계<br />보안 가이드라인 (2025.9)</div>
              </div>
            </div>
            {_csoCards.map((c, i) => (
              <div className={`p2-cso-rich p2-cso-${c.grade.toLowerCase()}`} key={i}>
                <div className="p2-cso-head">
                  <div className="p2-cso-grade">{c.grade}</div>
                  <div className="p2-cso-name">{c.name}</div>
                </div>
                <div className="p2-cso-body">
                  <div>
                    <h5>어떤 자료인가요</h5>
                    <ul>{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                  </div>
                  <div>
                    <h5>AI 활용 기준</h5>
                    <ul>{c.aiItems.map((it, j) => <li key={j}>{it}</li>)}</ul>
                  </div>
                  <div className="p2-cso-badge">{c.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL 2 DIAGRAM */}
      <section className="p2-s p2-s-alt">
        <div className="p2-container">
          <div className="p2-m2-section">
            <div className="p2-m2-header">
              <div className="p2-m2-eyebrow">{m2Eyebrow}</div>
              <h3 className="p2-m2-h">{nl(m2Headline)}</h3>
              <p className="p2-m2-sub">{m2Sub}</p>
            </div>
            <div className="p2-m2-diagram-wrap">
              <svg className="p2-m2-diagram" viewBox="0 0 1100 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="N2SF 모델 2 다이어그램">
                <defs>
                  <linearGradient id="p2liaisonGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F0EBFB" /><stop offset="100%" stopColor="#E8F8FB" /></linearGradient>
                  <linearGradient id="p2capsuleGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#2B155B" /><stop offset="100%" stopColor="#3D2378" /></linearGradient>
                  <marker id="p2arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#444151" /></marker>
                  <marker id="p2arrowCyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#00D9F5" /></marker>
                </defs>
                <g><rect x="10" y="120" width="150" height="120" rx="14" fill="#F8F9FB" stroke="#E8E6EE" strokeWidth="1.5" /><text x="85" y="148" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#7C3AED" letterSpacing="0.05em">S 등급</text><text x="85" y="174" textAnchor="middle" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#0E0B1A">이용자 단말</text><text x="85" y="196" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fill="#6B6878">기관 업무 환경</text><text x="85" y="215" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fill="#6B6878">민원·공문·회의록</text></g>
                <g><rect x="260" y="40" width="580" height="280" rx="20" fill="url(#p2liaisonGrad)" stroke="#D9CFF0" strokeWidth="2" /><text x="550" y="74" textAnchor="middle" fontFamily="Pretendard" fontSize="15" fontWeight="700" fill="#2B155B" letterSpacing="0.06em">AI 연계체계 · LLM CAPSULE</text>
                  <g><rect x="290" y="100" width="160" height="92" rx="12" fill="#fff" stroke="#D9CFF0" strokeWidth="1.5" /><text x="370" y="125" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#2B155B">인증 서버</text><text x="370" y="148" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">기관 ID 연동</text><text x="370" y="165" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">비인가 접근 차단</text><text x="370" y="182" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">권한 분리·관리</text></g>
                  <g><rect x="470" y="100" width="160" height="92" rx="12" fill="url(#p2capsuleGrad)" stroke="#2B155B" strokeWidth="1.5" /><text x="550" y="125" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#00D9F5">콘텐츠 통제</text><text x="550" y="148" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#fff">비식별·익명화</text><text x="550" y="165" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#fff">프롬프트 필터링</text><text x="550" y="182" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#fff">자료 유형 식별</text></g>
                  <g><rect x="650" y="100" width="160" height="92" rx="12" fill="#fff" stroke="#D9CFF0" strokeWidth="1.5" /><text x="730" y="125" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#2B155B">감사 로그</text><text x="730" y="148" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">일방향 통신 기록</text><text x="730" y="165" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">통제 이력 보관</text><text x="730" y="182" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">실적 보고서 자동</text></g>
                  <g><rect x="290" y="220" width="520" height="68" rx="12" fill="#fff" stroke="#D9CFF0" strokeWidth="1.5" strokeDasharray="6 4" /><text x="550" y="245" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#2B155B">응답 복원 (Restoration)</text><text x="550" y="266" textAnchor="middle" fontFamily="Pretendard" fontSize="13" fill="#6B6878">AI 응답이 돌아오면 캡슐 토큰이 원본 정보로 자동 복원되어 업무에 바로 사용</text></g>
                </g>
                <g><rect x="940" y="120" width="150" height="120" rx="14" fill="#F8F9FB" stroke="#E8E6EE" strokeWidth="1.5" /><text x="1015" y="148" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="700" fill="#2A9788" letterSpacing="0.05em">O 등급</text><text x="1015" y="174" textAnchor="middle" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#0E0B1A">외부 생성형 AI</text><text x="1015" y="196" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fill="#6B6878">ChatGPT · Claude</text><text x="1015" y="215" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fill="#6B6878">Gemini · 외부 LLM</text></g>
                <line x1="170" y1="160" x2="252" y2="160" stroke="#444151" strokeWidth="2" markerEnd="url(#p2arrow)" />
                <line x1="848" y1="160" x2="932" y2="160" stroke="#444151" strokeWidth="2" markerEnd="url(#p2arrow)" />
                <line x1="932" y1="210" x2="848" y2="210" stroke="#00D9F5" strokeWidth="2" markerEnd="url(#p2arrowCyan)" />
                <line x1="252" y1="210" x2="170" y2="210" stroke="#00D9F5" strokeWidth="2" markerEnd="url(#p2arrowCyan)" />
                <text x="211" y="150" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="600" fill="#444151">요청</text>
                <text x="890" y="150" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="600" fill="#444151">캡슐화 후</text>
                <text x="890" y="232" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="600" fill="#0E8FA5">응답</text>
                <text x="211" y="232" textAnchor="middle" fontFamily="Pretendard" fontSize="14" fontWeight="600" fill="#0E8FA5">복원 후</text>
              </svg>
              <div className="p2-m2-diagram-caption">{m2DiagramCaption}</div>
            </div>
            <div className="p2-m2-impl">
              {_m2ImplCards.map((c, i) => (
                <div className="p2-m2-impl-card" key={i}>
                  <div className="p2-m2-impl-title">{c.title}</div>
                  <div className="p2-m2-impl-req">{c.req}</div>
                  <div className="p2-m2-impl-arrow">→ LLM Capsule의 해결방식</div>
                  <div className="p2-m2-impl-llm">{c.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT */}
      <section className="p2-s">
        <div className="p2-container">
          <div className="p2-pain-grid">
            <div className="p2-pain-left">
              <span className="p2-sh-kicker">{painKicker}</span>
              <h2 className="p2-sh-big">{accentNl(painHeadline)}</h2>
              <p className="p2-pain-body">{painBody1}</p>
              <p className="p2-pain-body">{painBody2}</p>
              <div className="p2-pain-emphasis">
                <p>{painEmphasis1}</p>
                <p>{painEmphasis2}</p>
              </div>
            </div>
            <div className="p2-pain-right">
              <div className="p2-pain-right-label">{painCaseLabel}</div>
              <div className="p2-case-grid">
                {_painCases.map((c, i) => {
                  const img = fallbackImg(c.image, DEFAULT_CASES[i]?.image || "")
                  return (
                    <div className="p2-case-card" key={i}>
                      <div className="p2-case-body-wrap">
                        <span className="p2-case-badge">{c.badge}</span>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                        <div className="p2-case-tags">
                          {c.tags.map((t, j) => <span className="p2-case-tag" key={j}>{t}</span>)}
                        </div>
                      </div>
                      <div className="p2-case-image" data-bg={String(i + 1)}>
                        {img && <img src={img} alt={c.title} />}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALT COMPARE */}
      <section className="p2-s p2-s-alt">
        <div className="p2-container">
          <div className="p2-sh-wrap-center">
            <span className="p2-sh-kicker">{altKicker}</span>
            <h2 className="p2-sh-big p2-center">{accentNl(altHeadline)}</h2>
            <p className="p2-section-lead p2-center">{nl(altDescription)}</p>
          </div>
          <div className="p2-alt-compare">
            <table>
              <thead>
                <tr>
                  {_altHeaders.map((h, i) => (
                    <th key={i} className={i === _altHeaders.length - 1 ? "p2-our" : ""}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {_altRows.map((r, i) => (
                  <tr key={i}>
                    <td className="p2-row-label">{r.label}</td>
                    {r.cols.map((col, j) => (
                      <td key={j} className={j === r.cols.length - 1 ? "p2-our" : ""}>
                        <span className={`p2-alt-mark p2-alt-mark-${r.marks[j]}`}>{r.marks[j]}</span>
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="p2-s">
        <div className="p2-container">
          <span className="p2-sh-kicker">{appKicker}</span>
          <h2 className="p2-sh-big">{accentNl(appHeadline)}</h2>
          <p className="p2-section-lead">{nl(appDescription)}</p>
          <div className="p2-why-grid">
            {_whyCards.map((c, i) => (
              <div className="p2-why-card" key={i}>
                <span className="p2-why-badge">{c.badge}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <h3 className="p2-flow-heading">{flowTitle}</h3>
          <p className="p2-flow-sub">{flowSub}</p>
          <div className="p2-flow-grid">
            {_flowSteps.map((s, i) => (
              <div className="p2-flow-step" key={i}>
                <div className="p2-flow-num">{s.num}</div>
                <div className="p2-flow-title">{s.title}</div>
                <p className="p2-flow-body">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="p2-trust-line">{trustLine}</div>
        </div>
      </section>

      {/* WHY LLM CAPSULE (DARK) */}
      <section className="p2-s p2-s-dark">
        <div className="p2-container">
          <div className="p2-sh-wrap-center">
            <span className="p2-sh-kicker">{strKicker}</span>
            <h2 className="p2-sh-big p2-center">{accentNl(strHeadline)}</h2>
          </div>
          <div className="p2-strength-grid">
            {_strengthCards.map((c, i) => (
              <div className="p2-strength-card" key={i}>
                <div className="p2-strength-icon">{c.icon}</div>
                <div className="p2-strength-title">{c.title}</div>
                <p className="p2-strength-body">
                  {c.body} <strong>{c.highlight}</strong>{c.bodyAfter || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="p2-s p2-uc-section">
        <div className="p2-container">
          <div className="p2-sh-wrap-center">
            <span className="p2-sh-kicker">{ucKicker}</span>
            <h2 className="p2-sh-big p2-center">{accentNl(ucHeadline)}</h2>
            <p className="p2-section-lead p2-center">{nl(ucDescription)}</p>
          </div>
          <div className="p2-uc-tabs">
            {_ucTabs.map((t, i) => (
              <button
                key={i}
                className={`p2-uc-tab${i === ucActive ? " active" : ""}`}
                onClick={() => switchUc(i)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div
            ref={ucRef}
            className={`p2-uc-img-wrap${ucVisible ? " p2-uc-visible" : ""}`}
          >
            <img
              className={`p2-uc-img${ucFade ? " p2-uc-fade" : ""}`}
              src={resolvedUcImg}
              alt={_ucTabs[ucActive]?.label || ""}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

interface CsoCard { grade: string; name: string; items: string[]; aiItems: string[]; badge: string }
interface ImplCard { title: string; req: string; solution: string }
interface PainCase { badge: string; title: string; desc: string; tags: string[]; image: string }
interface AltRow { label: string; cols: string[]; marks: string[] }
interface WhyCard { badge: string; title: string; body: string }
interface FlowStep { num: string; title: string; body: string }
interface StrengthCard { icon: string; title: string; body: string; highlight: string; bodyAfter?: string }
interface UcTab { label: string; image: string }

interface Props {
  n2sfKicker?: string; n2sfHeadline?: string; n2sfDescription?: string; n2sfCoverImage?: string
  csoCards?: CsoCard[]
  m2Eyebrow?: string; m2Headline?: string; m2Sub?: string; m2ImplCards?: ImplCard[]; m2DiagramCaption?: string
  painKicker?: string; painHeadline?: string; painBody1?: string; painBody2?: string
  painEmphasis1?: string; painEmphasis2?: string; painCaseLabel?: string; painCases?: PainCase[]
  altKicker?: string; altHeadline?: string; altDescription?: string; altHeaders?: string[]; altRows?: AltRow[]
  appKicker?: string; appHeadline?: string; appDescription?: string
  whyCards?: WhyCard[]; flowTitle?: string; flowSub?: string; flowSteps?: FlowStep[]; trustLine?: string
  strKicker?: string; strHeadline?: string; strengthCards?: StrengthCard[]
  ucKicker?: string; ucHeadline?: string; ucDescription?: string; ucTabs?: UcTab[]
}

addPropertyControls(N2sfPart2, {
  n2sfKicker: { type: ControlType.String, title: "N2SF Kicker", defaultValue: "N2SF FRAMEWORK" },
  n2sfHeadline: { type: ControlType.String, title: "N2SF Headline", displayTextArea: true, defaultValue: "국가정보원에서\n국가·공공기관 망 보안 프레임워크(N2SF)를\n발표했습니다." },
  n2sfDescription: { type: ControlType.String, title: "N2SF Desc", displayTextArea: true, defaultValue: "국가사이버보안기본지침이 '필수 망분리'에서 '다중계층 보안'으로 전환되면서, 정부·공공기관은 모든 정보를 C·S·O 세 등급으로 나누고 등급에 맞는 보안체계를 갖춰야 합니다. 그 기준이 N2SF입니다." },
  n2sfCoverImage: { type: ControlType.Image, title: "N2SF Cover" },
  csoCards: { type: ControlType.Array, title: "CSO Cards", control: { type: ControlType.Object, controls: { grade: { type: ControlType.String, title: "Grade" }, name: { type: ControlType.String, title: "Name" }, items: { type: ControlType.Array, title: "Items", control: { type: ControlType.String } }, aiItems: { type: ControlType.Array, title: "AI Items", control: { type: ControlType.String } }, badge: { type: ControlType.String, title: "Badge" } } } },
  m2Eyebrow: { type: ControlType.String, title: "M2 Eyebrow", defaultValue: "MODEL 2 · AI 연계체계" },
  m2Headline: { type: ControlType.String, title: "M2 Headline", displayTextArea: true, defaultValue: "N2SF의 「모델 2」프레임워크로\nAI를 안전하게 업무에 활용할 수 있습니다." },
  m2Sub: { type: ControlType.String, title: "M2 Sub", displayTextArea: true, defaultValue: "N2SF가 제시하는 11가지 보안 모델 중, 「모델 2」는 업무환경에서 외부 생성형 AI를 활용하는 표준입니다. LLM Capsule은 이 표준 시나리오의 「AI 연계체계」 위치에서, 단말과 외부 AI 사이의 정보 흐름을 안전하게 처리합니다." },
  m2ImplCards: { type: ControlType.Array, title: "M2 Impl Cards", control: { type: ControlType.Object, controls: { title: { type: ControlType.String, title: "Title" }, req: { type: ControlType.String, title: "Req" }, solution: { type: ControlType.String, title: "Solution" } } } },
  m2DiagramCaption: { type: ControlType.String, title: "Diagram Caption", displayTextArea: true, defaultValue: "출처. 「N2SF 보안 가이드라인 1.0 (부록2) 모델 2 — 업무환경에서 생성형 AI 활용」 그림 2-8 (AI 연계체계) 재구성" },
  painKicker: { type: ControlType.String, title: "Pain Kicker", defaultValue: "PAIN POINT" },
  painHeadline: { type: ControlType.String, title: "Pain Headline", displayTextArea: true, defaultValue: "가장 AI가 필요한 업무일수록,\n엄격한 보안 문턱에 부딪힙니다." },
  painBody1: { type: ControlType.String, title: "Pain Body 1", displayTextArea: true, defaultValue: "공식적인 지원이 늦어지는 사이, 실무자들은 업무 효율을 위해 개인 계정으로 외부 AI를 몰래 사용하는 이른바 '섀도우 AI' 환경에 노출되기 쉽습니다." },
  painBody2: { type: ControlType.String, title: "Pain Body 2", displayTextArea: true, defaultValue: "공공문서 속 민감정보를 자동으로 가려서 안전하게 외부 AI에 연결하고 모든 프롬프트 내역을 안전하게 기록하는 현실적인 대안이 필요합니다." },
  painEmphasis1: { type: ControlType.String, title: "Pain Emphasis 1", displayTextArea: true, defaultValue: "가장 시간과 인력이 많이 드는 핵심 업무에 AI가 투입되어야 진정한 행정 혁신이 완성됩니다." },
  painEmphasis2: { type: ControlType.String, title: "Pain Emphasis 2", displayTextArea: true, defaultValue: "막연한 사용 보류를 넘어, 현업에 '안전하고 투명한 AI 사용 환경'을 열어주어야 할 때입니다." },
  painCaseLabel: { type: ControlType.String, title: "Pain Case Label", defaultValue: "AI 사용이 제한되는 실제 공공 업무 사례" },
  painCases: { type: ControlType.Array, title: "Pain Cases", control: { type: ControlType.Object, controls: { badge: { type: ControlType.String, title: "Badge" }, title: { type: ControlType.String, title: "Title" }, desc: { type: ControlType.String, title: "Desc" }, tags: { type: ControlType.Array, title: "Tags", control: { type: ControlType.String } }, image: { type: ControlType.Image, title: "Image" } } } },
  altKicker: { type: ControlType.String, title: "Alt Kicker", defaultValue: "ALTERNATIVE COMPARISON" },
  altHeadline: { type: ControlType.String, title: "Alt Headline", displayTextArea: true, defaultValue: "외부 AI 차단·자체 구축·마스킹,\n어떤 선택지가 우리 기관에 맞을까요?" },
  altDescription: { type: ControlType.String, title: "Alt Desc", displayTextArea: true, defaultValue: "공공 생성형 AI 도입은 보안성·활용성·운영 부담을 함께 봐야 합니다. 차단·자체 구축·DLP·통제 레이어를 한눈에 비교했습니다." },
  appKicker: { type: ControlType.String, title: "App Kicker", defaultValue: "OUR APPROACH" },
  appHeadline: { type: ControlType.String, title: "App Headline", displayTextArea: true, defaultValue: "민감정보는 가리고,\n업무는 멈추지 않게 합니다." },
  appDescription: { type: ControlType.String, title: "App Desc", displayTextArea: true, defaultValue: "공공기관이 AI 도입에 앞서 풀어야 할 문제 LLM Capsule은 3가지 문제를 모두 해결합니다." },
  whyCards: { type: ControlType.Array, title: "Why Cards", control: { type: ControlType.Object, controls: { badge: { type: ControlType.String, title: "Badge" }, title: { type: ControlType.String, title: "Title" }, body: { type: ControlType.String, title: "Body", displayTextArea: true } } } },
  flowTitle: { type: ControlType.String, title: "Flow Title", defaultValue: "LLM Capsule은 이렇게 흐르게 합니다" },
  flowSub: { type: ControlType.String, title: "Flow Sub", defaultValue: "정보를 등급에 맞게 변환해서 외부 AI에 전달하고, 응답이 돌아오면 원본으로 자동 복원합니다." },
  flowSteps: { type: ControlType.Array, title: "Flow Steps", control: { type: ControlType.Object, controls: { num: { type: ControlType.String, title: "Num" }, title: { type: ControlType.String, title: "Title" }, body: { type: ControlType.String, title: "Body", displayTextArea: true } } } },
  trustLine: { type: ControlType.String, title: "Trust Line", defaultValue: "N2SF 모델 2가 요구하는 AI 연계체계 보안통제 항목을 표준으로 구현합니다." },
  strKicker: { type: ControlType.String, title: "Str Kicker", defaultValue: "WHY LLM CAPSULE" },
  strHeadline: { type: ControlType.String, title: "Str Headline", displayTextArea: true, defaultValue: "이미 도입한 기관들이\nLLM Capsule을 선택한 이유" },
  strengthCards: { type: ControlType.Array, title: "Strength Cards", control: { type: ControlType.Object, controls: { icon: { type: ControlType.String, title: "Icon" }, title: { type: ControlType.String, title: "Title" }, body: { type: ControlType.String, title: "Body", displayTextArea: true }, highlight: { type: ControlType.String, title: "Highlight" }, bodyAfter: { type: ControlType.String, title: "Body After" } } } },
  ucKicker: { type: ControlType.String, title: "UC Kicker", defaultValue: "USE CASES" },
  ucHeadline: { type: ControlType.String, title: "UC Headline", displayTextArea: true, defaultValue: "실제 공공 업무에서는\n어떻게 쓰일까요?" },
  ucDescription: { type: ControlType.String, title: "UC Desc", displayTextArea: true, defaultValue: "문서 구조나 양식을 유지한채 문제가 될 수 있는 민감한 내용만 알아서 처리합니다. 결과는 다시 알아서 복원하여 업무에 바로 쓸 수 있는 그대로 확인할 수 있습니다." },
  ucTabs: { type: ControlType.Array, title: "UC Tabs", control: { type: ControlType.Object, controls: { label: { type: ControlType.String, title: "Label" }, image: { type: ControlType.Image, title: "Image" } } } },
})

const CSS = `
:root{
  --p2-primary:#2B155B;--p2-primary-soft:#3D2378;--p2-primary-deep:#0E0B1A;
  --p2-cyan:#00D9F5;--p2-ink:#0E0B1A;--p2-ink-2:#444151;--p2-ink-3:#6B6878;
  --p2-bg:#FFFFFF;--p2-bg-soft:#F8F7FA;--p2-bg-tint:#F0EBFB;
  --p2-line:#E8E6EE;--p2-radius-md:12px;--p2-radius-lg:16px;--p2-radius-sm:8px;
  --p2-shadow-md:0 4px 6px rgba(14,11,26,.04),0 12px 32px rgba(14,11,26,.08);
  --p2-fs-body:16px;--p2-fs-lead:18px;--p2-fs-card:15px;--p2-fs-meta:13px;--p2-fs-micro:11px;
}
.p2-root{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,system-ui,sans-serif;background:var(--p2-bg);color:var(--p2-ink);line-height:1.6;-webkit-font-smoothing:antialiased;word-break:keep-all;overflow-wrap:break-word}
.p2-root *{box-sizing:border-box;margin:0;padding:0}
.p2-container{max-width:1160px;margin:0 auto;padding:0 24px}
.p2-accent{color:var(--p2-primary)}
.p2-center{text-align:center;margin-left:auto;margin-right:auto}
.p2-sh-wrap-center{text-align:center}
.p2-sh-wrap-center .p2-section-lead{margin-left:auto;margin-right:auto;text-align:center;margin-top:0}

.p2-s{padding:120px 0}
.p2-s-alt{background:var(--p2-bg-soft)}
.p2-s-dark{background:var(--p2-primary-deep);color:#fff;padding:120px 0;position:relative;overflow:hidden}
.p2-s-dark::before{content:"";position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(0,217,245,.08) 0%,transparent 70%);pointer-events:none}
.p2-s-dark::after{content:"";position:absolute;bottom:-30%;left:-15%;width:600px;height:600px;background:radial-gradient(circle,rgba(124,58,237,.10) 0%,transparent 70%);pointer-events:none}
.p2-s-dark .p2-container{position:relative;z-index:1}
.p2-s-dark .p2-sh-kicker{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.15)}
.p2-s-dark .p2-sh-kicker::before{background:var(--p2-cyan)}
.p2-s-dark .p2-sh-big{color:#fff}
.p2-s-dark .p2-sh-big .p2-accent{color:var(--p2-cyan)}
.p2-s-dark .p2-section-lead{color:#B8B5C5}
.p2-s-dark .p2-section-lead strong{color:#fff;font-weight:700}

.p2-sh-kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:var(--p2-ink);color:#fff;font-size:12px;font-weight:600;letter-spacing:.04em;margin-bottom:28px;text-transform:uppercase}
.p2-sh-kicker::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--p2-cyan)}
.p2-sh-big{font-size:clamp(32px,4.4vw,52px);font-weight:700;letter-spacing:-.03em;line-height:1.12;color:var(--p2-ink);margin-bottom:28px;max-width:920px}
.p2-section-lead{font-size:var(--p2-fs-lead);color:var(--p2-ink-2);line-height:1.8;max-width:680px;margin-bottom:64px}

/* CSO GRID */
.p2-cso-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin:56px 0;align-items:stretch}
.p2-cso-cover{border-radius:var(--p2-radius-lg);overflow:hidden;border:1px solid var(--p2-line);background:#fff;display:flex;flex-direction:column;box-shadow:0 8px 24px rgba(14,11,26,.10)}
.p2-cso-cover-imgwrap{flex:1;padding:18px;display:flex;align-items:center;justify-content:center;background:#fff;min-height:0}
.p2-cso-cover-img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
.p2-cso-cover-foot{padding:14px 16px;border-top:1px solid var(--p2-line);background:var(--p2-bg-soft)}
.p2-cap-label{font-size:var(--p2-fs-micro);font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--p2-ink-3);margin-bottom:4px}
.p2-cap-title{font-size:14px;font-weight:700;color:var(--p2-ink);line-height:1.4}
.p2-cso-rich{border-radius:var(--p2-radius-lg);border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);padding:28px 22px;display:flex;flex-direction:column;gap:18px}
.p2-cso-head{display:flex;align-items:center;gap:12px}
.p2-cso-grade{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;background:var(--p2-primary-soft)}
.p2-cso-name{font-size:15px;font-weight:700;color:rgba(255,255,255,.9)}
.p2-cso-body{font-size:13px;color:rgba(255,255,255,.7);line-height:1.7;display:flex;flex-direction:column;gap:14px;flex:1}
.p2-cso-body h5{font-size:12px;font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.05em;margin-bottom:8px;text-transform:uppercase}
.p2-cso-body ul{list-style:none;padding:0;display:flex;flex-direction:column;gap:6px}
.p2-cso-body ul li{padding-left:16px;position:relative}
.p2-cso-body ul li::before{content:"·";position:absolute;left:0;color:rgba(255,255,255,.4)}
.p2-cso-badge{margin-top:auto;padding:6px 14px;border-radius:var(--p2-radius-sm);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);font-size:12px;font-weight:600;color:rgba(255,255,255,.8);text-align:center}

/* MODEL 2 */
.p2-m2-header{max-width:880px;margin-bottom:48px}
.p2-m2-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:var(--p2-ink);color:#fff;font-size:12px;font-weight:600;letter-spacing:.04em;margin-bottom:20px;text-transform:uppercase}
.p2-m2-h{font-size:clamp(24px,3vw,36px);font-weight:700;letter-spacing:-.02em;line-height:1.3;color:var(--p2-ink);margin-bottom:18px}
.p2-m2-h em{font-style:normal;color:var(--p2-primary);font-weight:800}
.p2-m2-sub{font-size:var(--p2-fs-body);color:var(--p2-ink-2);line-height:1.8}
.p2-m2-sub strong{color:var(--p2-ink);font-weight:700}
.p2-m2-diagram-wrap{margin-bottom:48px}
.p2-m2-diagram{width:100%;height:auto;display:block}
.p2-m2-diagram-caption{margin-top:16px;font-size:var(--p2-fs-micro);color:var(--p2-ink-3);text-align:center}
.p2-m2-impl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.p2-m2-impl-card{padding:28px 24px;border:1px solid var(--p2-line);border-radius:var(--p2-radius-lg);background:#fff;box-shadow:0 4px 16px rgba(14,11,26,.04);transition:transform .22s,box-shadow .22s}
.p2-m2-impl-card:hover{transform:translateY(-3px);box-shadow:var(--p2-shadow-md)}
.p2-m2-impl-title{font-size:11px;font-weight:700;color:var(--p2-ink-3);letter-spacing:.05em;text-transform:uppercase}
.p2-m2-impl-req{font-size:var(--p2-fs-card);font-weight:700;color:var(--p2-ink);margin:10px 0;line-height:1.5}
.p2-m2-impl-arrow{font-size:12px;color:var(--p2-primary);font-weight:600;margin-bottom:6px}
.p2-m2-impl-llm{font-size:var(--p2-fs-meta);color:var(--p2-ink-2);line-height:1.6}

/* PAIN */
.p2-pain-grid{display:flex;flex-direction:column;gap:0}
.p2-pain-body{font-size:var(--p2-fs-body);color:var(--p2-ink-2);line-height:1.85;margin-bottom:4px}
.p2-pain-body strong{font-weight:700;color:var(--p2-ink)}
.p2-pain-emphasis{margin-top:32px;padding:24px 28px;background:var(--p2-bg-tint);border-left:3px solid var(--p2-primary);border-radius:0 var(--p2-radius-md) var(--p2-radius-md) 0;font-size:var(--p2-fs-body);color:var(--p2-ink);line-height:1.8}
.p2-pain-emphasis p{margin-bottom:10px}
.p2-pain-emphasis p:last-child{margin-bottom:0}
.p2-pain-emphasis strong{color:var(--p2-primary);font-weight:700}
.p2-pain-right{margin-top:56px}
.p2-pain-right-label{font-size:14px;font-weight:700;color:var(--p2-ink);letter-spacing:.02em;margin-bottom:28px;display:flex;align-items:center;gap:12px}
.p2-pain-right-label::before{content:'';width:3px;height:16px;background:var(--p2-primary);border-radius:2px}
.p2-pain-right-label::after{content:'';flex:1;height:1px;background:var(--p2-line)}

/* CASE GRID */
.p2-case-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.p2-case-card{display:grid;grid-template-columns:1fr 160px;min-height:160px;border:1px solid var(--p2-line);border-radius:var(--p2-radius-lg);background:var(--p2-bg);overflow:hidden;transition:transform .22s,box-shadow .22s,border-color .22s}
.p2-case-card:hover{transform:translateY(-3px);box-shadow:var(--p2-shadow-md);border-color:#C9B7E6}
.p2-case-body-wrap{display:flex;flex-direction:column;gap:8px;padding:28px;justify-content:center}
.p2-case-badge{font-size:var(--p2-fs-micro);font-weight:700;letter-spacing:.06em;color:var(--p2-primary);text-transform:uppercase}
.p2-case-body-wrap h4{font-size:15px;font-weight:700;color:var(--p2-ink);line-height:1.4}
.p2-case-body-wrap p{font-size:var(--p2-fs-meta);color:var(--p2-ink-3);line-height:1.6}
.p2-case-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:2px}
.p2-case-tag{padding:3px 10px;border-radius:4px;background:#F3F1F8;color:var(--p2-ink-3);font-size:11px;font-weight:500}
.p2-case-image{position:relative;background:#DEE2FD;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:8px}
.p2-case-image[data-bg="1"]{background:#DEE2FD}
.p2-case-image[data-bg="2"]{background:#DFE0FB}
.p2-case-image[data-bg="3"]{background:#E4DBE8}
.p2-case-image[data-bg="4"]{background:#D3D1F8}
.p2-case-image[data-bg="5"]{background:#D1CEFC}
.p2-case-image img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block;filter:saturate(.78) brightness(1.02);transition:transform .35s,filter .35s}
.p2-case-card:hover .p2-case-image img{transform:scale(1.04);filter:saturate(1) brightness(1)}

/* ALT COMPARE */
.p2-alt-compare{margin-top:48px;border:1px solid var(--p2-line);border-radius:var(--p2-radius-lg);overflow:hidden;background:var(--p2-bg);box-shadow:0 8px 32px rgba(14,11,26,.06)}
.p2-alt-compare{overflow-x:auto;scrollbar-width:none}
.p2-alt-compare::-webkit-scrollbar{display:none}
.p2-alt-compare table{width:100%;border-collapse:collapse;min-width:720px}
.p2-alt-compare thead th{padding:20px 16px;background:var(--p2-bg-soft);font-size:14px;font-weight:700;color:var(--p2-ink-3);text-align:left;border-bottom:1px solid var(--p2-line)}
.p2-alt-compare thead th.p2-our{background:var(--p2-primary);color:#fff}
.p2-alt-compare tbody td{padding:18px 16px;font-size:14px;color:var(--p2-ink-3);border-bottom:1px solid var(--p2-line);line-height:1.6;vertical-align:top}
.p2-alt-compare tbody tr:last-child td{border-bottom:0}
.p2-alt-compare tbody td.p2-row-label{font-weight:700;color:var(--p2-ink);background:var(--p2-bg-soft);width:160px}
.p2-alt-compare tbody td.p2-our{background:#F3EDFB;color:var(--p2-ink);font-weight:600;border-left:2px solid var(--p2-primary);border-right:2px solid var(--p2-primary)}
.p2-alt-compare tbody tr:last-child td.p2-our{border-bottom:2px solid var(--p2-primary)}
.p2-alt-mark{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;font-size:11px;font-weight:700;margin-right:8px;background:transparent;color:var(--p2-ink-3);border:1.5px solid var(--p2-ink-3);flex-shrink:0}
.p2-alt-compare td.p2-our .p2-alt-mark{background:var(--p2-primary);border-color:var(--p2-primary);color:#fff}

/* WHY / FLOW */
.p2-why-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:48px;margin-bottom:64px}
.p2-why-card{position:relative;padding:32px 28px;border-radius:14px;background:linear-gradient(180deg,#F8F5FF 0%,#F1ECFB 100%);border:1px solid #E0D5F2;box-shadow:0 4px 16px rgba(43,21,91,.06);transition:transform .25s,box-shadow .25s;overflow:hidden}
.p2-why-card:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(43,21,91,.12)}
.p2-why-badge{display:inline-block;padding:5px 12px;border-radius:999px;background:#fff;border:1px solid #E0D5F2;color:var(--p2-primary);font-size:11px;font-weight:700;letter-spacing:.02em;margin-bottom:14px}
.p2-why-card h3{font-size:18px;font-weight:700;color:var(--p2-ink);margin-bottom:12px;letter-spacing:-.01em;line-height:1.4}
.p2-why-card p{font-size:var(--p2-fs-card);color:var(--p2-ink-2);line-height:1.7}
.p2-flow-heading{font-size:22px;font-weight:700;color:var(--p2-ink);margin-bottom:8px;letter-spacing:-.01em}
.p2-flow-sub{font-size:var(--p2-fs-body);color:var(--p2-ink-2);margin-bottom:24px}
.p2-flow-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin:32px 0}
.p2-flow-step{padding:32px 28px;border-radius:12px;background:var(--p2-bg-soft);position:relative;border:1px solid var(--p2-line);box-shadow:0 4px 16px rgba(14,11,26,.04)}
.p2-flow-num{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:var(--p2-primary);color:#fff;font-weight:700;margin-bottom:16px}
.p2-flow-title{font-size:18px;font-weight:700;color:var(--p2-ink);margin-bottom:12px}
.p2-flow-body{font-size:var(--p2-fs-card);color:var(--p2-ink-2);line-height:1.7}
.p2-trust-line{margin-top:24px;padding:20px 28px;background:#F0EBFB;border:1px solid #D9CFF0;border-radius:var(--p2-radius-md);font-size:15px;color:var(--p2-primary);font-weight:600;text-align:center}

/* STRENGTHS (dark) */
.p2-strength-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:48px}
.p2-strength-card{position:relative;padding:32px 28px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);box-shadow:none;transition:transform .25s,box-shadow .25s;backdrop-filter:blur(8px)}
.p2-strength-card:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(0,0,0,.25);border-color:rgba(255,255,255,.18)}
.p2-strength-icon{font-size:24px;margin-bottom:16px}
.p2-strength-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;letter-spacing:-.01em;line-height:1.4}
.p2-strength-body{font-size:var(--p2-fs-card);color:#B8B5C5;line-height:1.7}
.p2-strength-body strong{color:var(--p2-cyan)}

/* UC */
.p2-uc-section{padding-bottom:0}
.p2-uc-tabs{display:flex;gap:12px;justify-content:center;margin-top:48px;flex-wrap:wrap;margin-bottom:0}
.p2-uc-tab{padding:12px 24px;border-radius:999px;border:1px solid var(--p2-line);background:var(--p2-bg);color:var(--p2-ink-2);font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit}
.p2-uc-tab:hover{border-color:var(--p2-primary);color:var(--p2-primary)}
.p2-uc-tab.active{background:var(--p2-primary);color:#fff;border-color:var(--p2-primary)}
.p2-uc-img-wrap{margin-top:20px;overflow:hidden;border-radius:12px;opacity:0;transform:translateY(28px);transition:opacity .3s ease-in-out,transform .3s ease-in-out}
.p2-uc-img-wrap.p2-uc-visible{opacity:1;transform:translateY(0)}
.p2-uc-img{width:100%;display:block;margin-top:-40px;transition:opacity .3s ease-in-out}
.p2-uc-img.p2-uc-fade{opacity:0}

/* RESPONSIVE */
@media(max-width:1000px){
  .p2-m2-impl{grid-template-columns:1fr}
  .p2-cso-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:900px){
  .p2-s{padding:80px 0}
  .p2-s-dark{padding:80px 0}
  .p2-why-grid,.p2-flow-grid,.p2-strength-grid{grid-template-columns:1fr}
  .p2-case-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
  .p2-sh-big{font-size:clamp(28px,7vw,38px);letter-spacing:-.025em}
  .p2-sh-kicker{font-size:11px;padding:6px 12px;margin-bottom:20px}
  .p2-cso-grid{grid-template-columns:1fr}
  .p2-uc-tabs{gap:8px;margin-top:32px}
  .p2-uc-tab{padding:10px 18px;font-size:13px}
}
@media(max-width:600px){
  .p2-container{padding:0 16px}
  .p2-case-card{grid-template-columns:1fr}
  .p2-case-image{aspect-ratio:16/9}
  .p2-case-body-wrap{padding:20px}
  .p2-section-lead{font-size:15px;margin-bottom:40px}
}
`
