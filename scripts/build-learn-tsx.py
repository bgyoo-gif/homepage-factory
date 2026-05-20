#!/usr/bin/env python3
"""
Build per-page TSX for each learn article.

Two source patterns supported:
  - "bodyhtml": uses pre-extracted llm-capsule/output/html/{slug}-bodyhtml.html
                + manually-curated metadata in ARTICLES.
                (For learn_post_01~04 articles)
  - "input":    parses llm-capsule/input/llmcapsule_260506/learn/{slug}.html
                directly, auto-extracting all metadata.
                (For original v6.2 learn articles)

Outputs:
  llm-capsule/output/framer/learn/{PascalCase}.tsx

Each output TSX imports LearnArticle from shared/ and hardcodes all Props.
User just drops the component into Framer; no Props input needed.
Excludes CTA section (LearnArticle.tsx doesn't render CTA anyway).
"""

import re
import sys
from pathlib import Path

# ── Paths ──
ROOT = Path(__file__).resolve().parent.parent
HTML_DIR = ROOT / "llm-capsule" / "output" / "html"
INPUT_DIR = ROOT / "llm-capsule" / "input" / "llmcapsule_260506" / "learn"
OUT_DIR = ROOT / "llm-capsule" / "output" / "framer" / "learn"
LEARN_ARTICLE_TSX = ROOT / "llm-capsule" / "output" / "framer" / "shared" / "LearnArticle.tsx"
TRANSLATIONS_DIR = ROOT / "llm-capsule" / "output" / "translations"


def parse_translation_md_learn(md_path):
    """Parse learn article section-based md → {prop_name: translated_text}.

    Expected section mapping:
      Section 01 Hero: pairs → title, lead, category, readTime, dateUpdated
      Section 02 TL;DR: pairs → tldrLabel, tldrBody
      Section 03 (Article Body): entire HTML block → bodyHtml
      Section 04+ Related: pairs → related titles (best-effort)
    """
    if not md_path.exists():
        return {}

    text = md_path.read_text(encoding="utf-8")
    out = {}

    sec01 = re.search(
        r"##\s*Section\s*01[^\n]*\n(.*?)(?=##\s*Section|\Z)",
        text, re.DOTALL | re.IGNORECASE,
    )
    if sec01:
        pairs = _extract_md_pairs(sec01.group(1))
        # Best-effort mapping: first 5 pairs map to title/lead/category/readTime/dateUpdated
        hero_keys = ["title", "lead", "category", "readTime", "dateUpdated"]
        for i, (en, tr) in enumerate(pairs[:len(hero_keys)]):
            out[hero_keys[i]] = tr

    sec02 = re.search(
        r"##\s*Section\s*02[^\n]*\n(.*?)(?=##\s*Section|\Z)",
        text, re.DOTALL | re.IGNORECASE,
    )
    if sec02:
        pairs = _extract_md_pairs(sec02.group(1))
        tldr_keys = ["tldrLabel", "tldrBody"]
        for i, (en, tr) in enumerate(pairs[:len(tldr_keys)]):
            out[tldr_keys[i]] = tr

    sec03 = re.search(
        r"##\s*Section\s*03[^\n]*\n(.*?)(?=##\s*Section|\Z)",
        text, re.DOTALL | re.IGNORECASE,
    )
    if sec03:
        body = sec03.group(1).strip()
        if body:
            out["bodyHtml"] = body

    return out


def _extract_md_pairs(text):
    """Return [(en, translation)] pairs from section text, sequential order."""
    pairs = []
    lines = [ln.rstrip() for ln in text.split("\n")]
    i = 0
    while i < len(lines):
        if not lines[i].strip():
            i += 1
            continue
        en = lines[i].strip()
        j = i + 1
        while j < len(lines) and not lines[j].strip():
            j += 1
        if j >= len(lines):
            break
        tr = lines[j].strip()
        pairs.append((en, tr))
        i = j + 1
    return pairs


# ── Inline LearnArticle body (loaded from shared/LearnArticle.tsx) ──
def load_learn_article_body() -> str:
    """Extract the function body of LearnArticle (line 126 to before line 685)."""
    text = LEARN_ARTICLE_TSX.read_text(encoding="utf-8")
    lines = text.split("\n")
    # 1-indexed: 126..684 inclusive. Python list is 0-indexed → 125..683
    body_lines = lines[125:684]
    return "\n".join(body_lines)


LEARN_ARTICLE_BODY = load_learn_article_body()


# ── Props specification (mirrors LearnArticle.tsx interface + addPropertyControls) ──
PROPS_SPEC = [
    {"name": "backLabel",          "title": "Back Label",            "textarea": False},
    {"name": "backHref",           "title": "Back URL",              "textarea": False},
    {"name": "title",              "title": "Title",                 "textarea": False},
    {"name": "lead",               "title": "Lead",                  "textarea": True},
    {"name": "category",           "title": "Category",              "textarea": False},
    {"name": "readTime",           "title": "Read Time",             "textarea": False},
    {"name": "dateUpdated",        "title": "Date Updated",          "textarea": False},
    {"name": "tldrLabel",          "title": "TL;DR Label",           "textarea": False},
    {"name": "tldrBody",           "title": "TL;DR Body",            "textarea": True},
    {"name": "bodyHtml",           "title": "Body HTML",             "textarea": True},
    {"name": "canonicalUrl",       "title": "Canonical URL",         "textarea": False},
    {"name": "datePublished",      "title": "Date Published",        "textarea": False},
    {"name": "dateModified",       "title": "Date Modified",         "textarea": False},
    {"name": "inLanguage",         "title": "Language",              "textarea": False},
    {"name": "breadcrumbLabel",    "title": "Breadcrumb Label",      "textarea": False},
    {"name": "faqJsonLd",          "title": "FAQ JSON-LD (raw JSON)", "textarea": True},
    {"name": "relatedSectionLabel", "title": "Related Section Label", "textarea": False},
    {"name": "related1Title",      "title": "Related 1 Title",       "textarea": False},
    {"name": "related1Href",       "title": "Related 1 URL",         "textarea": False},
    {"name": "related2Title",      "title": "Related 2 Title",       "textarea": False},
    {"name": "related2Href",       "title": "Related 2 URL",         "textarea": False},
    {"name": "related3Title",      "title": "Related 3 Title",       "textarea": False},
    {"name": "related3Href",       "title": "Related 3 URL",         "textarea": False},
    {"name": "related4Title",      "title": "Related 4 Title",       "textarea": False},
    {"name": "related4Href",       "title": "Related 4 URL",         "textarea": False},
]


# ── Articles config ──
ARTICLES = [
    # ── Pattern A: pre-extracted bodyhtml (learn_post_01~04) ──
    {
        "slug": "public-sector-genai-three-approaches-in-korea",
        "component": "PublicSectorGenaiThreeApproaches",
        "source_type": "bodyhtml",
        "title": "공공기관 생성형 AI 도입의 세 가지 길",
        "lead": "AI DLP·차단, sLLM 자체구축, 게이트웨이 방식 — N2SF 시대 공공기관의 선택지를 비용·성능·보안·정합성 관점에서 객관적으로 비교합니다.",
        "category": "정책 분석",
        "readTime": "18분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "공공기관의 생성형 AI 도입은 AI DLP·차단, sLLM 자체구축, 게이트웨이 방식의 세 갈래로 나뉩니다. 차단 방식은 안전하지만 활용을 포기해야 하고, sLLM 자체구축은 7~13억 원의 초기 비용에 더해 최신 상용 모델과의 성능 격차가 누적됩니다. 게이트웨이 방식은 비용과 성능의 균형을 잡지만, 내부 보호 기법의 수준이 N2SF 정합성을 결정합니다. 단순 마스킹은 재식별 공격에 취약하며, 차등정보보호(Differential Privacy) 기반의 게이트웨이가 수학적으로 검증된 유일한 답에 가깝습니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-genai-three-approaches-in-korea",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관 생성형 AI 도입의 세 가지 길",
        "related": [
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
            ("sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프", "/resources/learn/sllm-self-hosted-reality-check"),
            ("", ""),
        ],
    },
    {
        "slug": "what-is-n2sf",
        "component": "WhatIsN2sf",
        "source_type": "bodyhtml",
        "title": "N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리",
        "lead": "국가 망 보안체계(N2SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다.",
        "category": "정책 분석",
        "readTime": "20분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "N2SF는 공공부문 보안의 패러다임 전환입니다. 모든 외부 자원을 일률 차단하던 망분리에서, 정보를 C(기밀)·S(민감)·O(공개) 세 등급으로 분류하고 등급별로 다른 통제를 적용하는 다중계층보안으로 전환했습니다. 이 전환은 외부 생성형 AI 활용의 길을 열되, 「위치-주체-객체」 모델링·정보 이동 보안원칙·21개 보안위협 식별·50여 개 보안통제 항목이라는 구체적인 프레임워크 안에서만 가능합니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/what-is-n2sf",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "N2SF란 무엇인가",
        "related": [
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("기업 AI를 위한 차등 프라이버시", "/resources/learn/differential-privacy-for-enterprise-llm"),
            ("", ""),
        ],
    },
    {
        "slug": "n2sf-model-2-explained",
        "component": "N2sfModel2Explained",
        "source_type": "bodyhtml",
        "title": "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
        "lead": "국가정보원·NSR이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, AI 연계체계까지 처음부터 끝까지.",
        "category": "정책 분석",
        "readTime": "20분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "N2SF 모델 2는 공공기관이 외부 생성형 AI를 활용할 때 따라야 할 구체적 보안 프레임워크입니다. 「위치(기관 전산망 S) - 주체(이용자 단말 S) - 객체(외부 생성형 AI O)」라는 흐름을 21개 보안위협으로 식별하고, 50여 개 보안통제 항목으로 대응책을 제시합니다. 핵심은 두 보안원칙(정보 생산·저장, 정보 이동)과 AI 연계체계입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/n2sf-model-2-explained",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "N2SF 모델 2 완벽 해설",
        "related": [
            ("N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프", "/resources/learn/sllm-self-hosted-reality-check"),
            ("", ""),
        ],
    },
    {
        "slug": "sllm-self-hosted-reality-check",
        "component": "SllmSelfHostedRealityCheck",
        "source_type": "bodyhtml",
        "title": "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프",
        "lead": "공공기관 sLLM 자체구축의 진짜 비용(5년 28~38억), 상용 LLM 대비 성능 격차 추세, 잘못된 선택 패턴을 분석합니다.",
        "category": "정책 분석",
        "readTime": "18분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "sLLM 자체구축은 데이터 통제와 도메인 특화 측면에서 매력적이지만, 진짜 비용은 GPU 인프라뿐 아니라 운영 인력·전력·교체 부담을 합치면 5년 누적 28~38억 원에 달합니다. 더 본질적인 문제는 상용 LLM과의 성능 격차가 시간이 갈수록 벌어진다는 점입니다. sLLM 자체구축이 정답인 경우는 명확히 존재하지만, 일반 행정 효율화가 목적이라면 게이트웨이 방식이 더 합리적입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/sllm-self-hosted-reality-check",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "sLLM 자체구축, 정말 답일까",
        "related": [
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
            ("", ""),
        ],
    },
    {
        "slug": "public-sector-external-llm-adoption-roadmap",
        "component": "PublicSectorExternalLlmAdoptionRoadmap",
        "source_type": "bodyhtml",
        "title": "공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 분기 로드맵",
        "lead": "정보화담당관 관점에서 외부 LLM 도입을 분기별 5단계로 정리합니다. 시나리오 A(공개 활용) 4개월 vs 시나리오 B(민감 업무) 6~8개월 로드맵 비교.",
        "category": "정책 분석",
        "readTime": "20분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "공공기관의 외부 LLM 도입은 「위치-주체-객체」를 보안등급별로 평가하는 N2SF 정합성에서 출발합니다. 정보화담당관은 5단계(준비·위협 식별·연계체계 설계·통제 적용·검증)를 분기별로 운영하면서, 시나리오 A(O 등급 공개 활용)는 4개월, 시나리오 B(S 등급 민감 업무)는 6~8개월의 로드맵으로 분기하는 것이 일반적입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-external-llm-adoption-roadmap",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관 외부 LLM 활용 도입 가이드",
        "related": [
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지", "/resources/learn/public-sector-genai-five-stuck-points"),
            ("", ""),
        ],
    },
    {
        "slug": "public-sector-genai-five-stuck-points",
        "component": "PublicSectorGenaiFiveStuckPoints",
        "source_type": "bodyhtml",
        "title": "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지 — 현장 분석",
        "lead": "정책은 알겠는데 실무에서 막힌다는 정보화담당관 분들의 목소리를 5개 막힘 지점으로 정리합니다. 등급 분류 부담, 시나리오 충돌, 솔루션 후보 부족, 예산 시점, 활용 실패.",
        "category": "현장 분석",
        "readTime": "16분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "공공기관 생성형 AI 도입은 정책 자체보다 다음 다섯 가지 막힘 지점에서 멈춥니다. (1) 데이터 등급 분류 부담, (2) 활용 시나리오와 O 등급 충돌, (3) 솔루션 후보 부족, (4) 예산 시점 불일치, (5) 활용 실패. 다섯 지점을 관통하는 공통 진단은 '메타데이터·등급 자동화·차등정보보호 게이트웨이 같은 도구가 모두 갖춰져야 비로소 막힘이 풀린다'는 것입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-genai-five-stuck-points",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지",
        "related": [
            ("공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵", "/resources/learn/public-sector-external-llm-adoption-roadmap"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("sLLM 자체구축, 정말 답일까", "/resources/learn/sllm-self-hosted-reality-check"),
            ("", ""),
        ],
    },
    {
        "slug": "public-sector-2026-management-evaluation-ai-incentive",
        "component": "PublicSector2026ManagementEvaluationAiIncentive",
        "source_type": "bodyhtml",
        "title": "2026 경영평가 'AI 활용 등 혁신' 가점 — 공공기관 핵심 경쟁력 분석",
        "lead": "2026 경영평가편람에 신설된 'AI 활용 등 혁신' 가점 1.5점이 공공기관 경쟁력에 어떤 영향을 주는지, 어떻게 확보할 수 있는지 정보화담당관 관점에서 정리합니다.",
        "category": "정책 분석",
        "readTime": "18분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "2026 경영평가편람은 'AI 활용 등 혁신'을 신설 가점 1.5점으로 명문화했습니다. 권장이 아니라 사실상의 의무로의 전환입니다. 가점 확보를 위해서는 활용 시나리오 정의, 보안·통제 체계, 정량 성과 측정, N2SF 정합성, 외부 검증의 다섯 가지 요건이 필요하며, 이를 분기별 로드맵으로 운영해야 합니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-2026-management-evaluation-ai-incentive",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "2026 경영평가 'AI 활용 등 혁신' 가점",
        "related": [
            ("공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵", "/resources/learn/public-sector-external-llm-adoption-roadmap"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지", "/resources/learn/public-sector-genai-five-stuck-points"),
            ("", ""),
        ],
    },
    {
        "slug": "chatgpt-teams-korea-public-sector",
        "component": "ChatgptTeamsKoreaPublicSector",
        "source_type": "bodyhtml",
        "title": "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까",
        "lead": "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N2SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다.",
        "category": "정책 분석",
        "readTime": "12분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "ChatGPT Teams는 글로벌 기준으로는 진일보한 보안 옵션을 제공합니다. 다만 한국 공공 영역에서는 별도의 적합성 검토가 필요합니다. CSAP 인증의 적용성, 개인정보보호법상 국외이전, N2SF 모델 2 등급 체계, 경영평가·감사 관점 — 네 가지 적합성 지점을 짚습니다. 검토 가능한 대안 방향은 (A) CSAP 인증 국내 LLM, (B) 자체 sLLM 구축(모델 1), (C) 외부 LLM + 보호 레이어 결합 세 가지이며, 기관의 활용 우선순위·운영 역량에 따라 적합성이 달라집니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/chatgpt-teams-korea-public-sector",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-18",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관의 ChatGPT Teams 사용 — 한국 규제 환경 적합성 분석",
        "related": [
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까", "/resources/learn/public-sector-chatgpt-input-guide"),
            ("공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵", "/resources/learn/public-sector-external-llm-adoption-roadmap"),
        ],
    },
    {
        "slug": "chatgpt-teams-ciso-control-gap",
        "component": "ChatgptTeamsCisoControlGap",
        "source_type": "bodyhtml",
        "title": "ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것",
        "lead": "ChatGPT Teams의 관리자 콘솔은 사후 가시성을 제공하지만 사전 통제는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 보안팀이 마주하는 통제 공백을 분석합니다.",
        "category": "보안 분석",
        "readTime": "14분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "ChatGPT Teams의 관리자 콘솔은 사용자 관리·도메인 검증·SSO 연동·사용 로그·데이터 보관 기간 설정 같은 기능을 추가해 일반 ChatGPT보다 진일보했습니다. 다만 그 방향이 사후 가시성(visibility)에 치우쳐 있고, 사전 통제(control)는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 검토 지점이 보안팀의 책임 구조에 영향을 줍니다. 사전 통제 모델이 왜 필요한지, 그리고 입력 단계 가명화가 결합된 보호 레이어가 이 공백을 어떻게 메우는지 정리합니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/chatgpt-teams-ciso-control-gap",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-18",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "ChatGPT Teams의 관리자 콘솔, CISO에게 충분한가",
        "related": [
            ("안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까", "/resources/learn/chatgpt-teams-korea-public-sector"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까", "/resources/learn/public-sector-chatgpt-input-guide"),
            ("", ""),
        ],
    },
    {
        "slug": "differential-privacy-explained",
        "component": "DifferentialPrivacyExplained",
        "source_type": "bodyhtml",
        "title": "차등정보보호란 무엇인가 — 1분 요약부터 수학적 원리까지",
        "lead": "차등정보보호(Differential Privacy)는 개인정보를 통계적으로 보호하는 수학적 프레임워크입니다. 단순 마스킹과 무엇이 다른지, 왜 미국 인구조사국·Apple·Google이 사용하는지, 공공기관 LLM 활용에 어떻게 연결되는지 정리했습니다.",
        "category": "기술 해설",
        "readTime": "11분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "1분 요약",
        "tldrBody": "차등정보보호(Differential Privacy)는 데이터에 수학적으로 계산된 노이즈를 더해 개인 정보를 보호하는 기술입니다. 핵심 가치는 세 가지입니다 — 유용성을 유지하면서도, 개별 레코드 추론 가능성을 제한하고, 보호 강도를 정량적으로 측정·관리할 수 있다는 점입니다. 2006년 Cynthia Dwork가 제안한 이후 학계 표준이 됐고, 미국 인구조사국 2020년 인구조사, Apple iOS 사용자 통계, Google 등에서 실제 적용되고 있습니다. 노이즈 크기는 엡실론(ε) 값으로 조절되며, 보호 강도와 데이터 정확도 사이의 균형을 결정합니다. 다만 차등정보보호는 평균·합계·분포 같은 수치형 통계에 가장 잘 맞고, 텍스트·자유 형식 데이터에는 별도 메커니즘이 필요합니다. 공공기관 관점에서는 외부 LLM 활용 시 민감 정보를 통계적으로 보호된 형태로 변환해 전송할 수 있다는 의미이며 — N2SF 모델 2의 \"원문 외부 전송 회피\" 원칙과 직접 연결됩니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/differential-privacy-explained",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "차등정보보호란 무엇인가",
        "related": [
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("N2SF란 무엇인가 — 공공기관 보안의 새 패러다임", "/resources/learn/what-is-n2sf"),
            ("sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프", "/resources/learn/sllm-self-hosted-reality-check"),
            ("", ""),
        ],
    },
    {
        "slug": "public-sector-chatgpt-input-guide",
        "component": "PublicSectorChatgptInputGuide",
        "source_type": "bodyhtml",
        "title": "ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까",
        "lead": "외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다.",
        "category": "정책 분석",
        "readTime": "16분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "ChatGPT·Claude·Gemini 같은 외부 상용 LLM을 구독한 공공기관이 가장 자주 마주치는 질문은 \"정작 어떤 업무 정보까지 입력해도 되는가\"입니다. N2SF 모델 2는 외부 상용 LLM에 입력 가능한 정보를 O 등급(공개)으로 한정하거나, 자체 위험평가 절차를 거치도록 규정합니다. 그러나 실제 직원이 쓰고 싶은 업무 정보 — 회의록, 정책 분석, 인사 자료 — 대부분은 O 등급이 아닙니다. 결과적으로 \"구독은 했는데 정작 쓸 수 있는 범위가 좁다\"는 상황이 생깁니다. 이 글은 5가지 실무 사례로 등급 판단의 실제 모습을 보여주고, 기관이 선택할 수 있는 세 가지 접근 방식(가이드라인 운영 / 외부 LLM 제한 / 보호 레이어 도입)을 정리합니다. 본문에서 단정적 등급 판단은 하지 않습니다. 최종 판단은 기관의 정보보안 담당자 영역입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-chatgpt-input-guide",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까",
        "related": [
            ("공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵", "/resources/learn/public-sector-external-llm-adoption-roadmap"),
            ("N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches-in-korea"),
            ("", ""),
        ],
    },
    # ── Pattern B: auto-parse from v6.2 input HTML ──
    {"slug": "pilot-to-production-enterprise-ai", "component": "PilotToProductionEnterpriseAi", "source_type": "input"},
    {"slug": "telecom-noc-ai-deployment", "component": "TelecomNocAiDeployment", "source_type": "input"},
    {"slug": "hospital-ai-deployment-phi-protection", "component": "HospitalAiDeploymentPhiProtection", "source_type": "input"},
    {"slug": "ai-on-network-operations-data", "component": "AiOnNetworkOperationsData", "source_type": "input"},
    {"slug": "pii-guardrails-vs-operational-data-protection", "component": "PiiGuardrailsVsOperationalDataProtection", "source_type": "input"},
    {"slug": "sovereign-ai-european-enterprises", "component": "SovereignAiEuropeanEnterprises", "source_type": "input"},
    {"slug": "differential-privacy-for-enterprise-llm", "component": "DifferentialPrivacyForEnterpriseLlm", "source_type": "input"},
    {"slug": "on-prem-llm-execution-path", "component": "OnPremLlmExecutionPath", "source_type": "input"},
]


# ── Escape helpers ──
def js_template_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace("`", "\\`")
    s = s.replace("${", "\\${")
    return s


def js_string_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def strip_html_tags(s: str) -> str:
    """Strip HTML tags but keep entities decoded simply."""
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'")
    return re.sub(r"\s+", " ", s).strip()


def extract_faq_jsonld(html: str) -> str:
    pattern = re.compile(
        r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',
        re.DOTALL,
    )
    for m in pattern.finditer(html):
        content = m.group(1).strip()
        if '"FAQPage"' in content:
            return re.sub(r"\s+", " ", content).strip()
    return ""


# ── Pattern A: bodyhtml-based source ──
def load_bodyhtml(article: dict) -> tuple[str, str]:
    """Returns (body_html, faq_jsonld) from pre-extracted bodyhtml.html + b-type.html."""
    slug = article["slug"]
    bodyhtml_path = HTML_DIR / f"{slug}-bodyhtml.html"
    btype_path = HTML_DIR / f"{slug}-b-type.html"
    if not bodyhtml_path.exists():
        raise FileNotFoundError(f"Missing bodyhtml: {bodyhtml_path}")
    body_html = bodyhtml_path.read_text(encoding="utf-8")
    faq = extract_faq_jsonld(btype_path.read_text(encoding="utf-8")) if btype_path.exists() else ""
    return body_html, faq


# ── Pattern B: parse from v6.2 input HTML directly ──
RELATED_TITLE_OVERRIDES = {
    # slug → (Korean display title for related card)
    "pilot-to-production-enterprise-ai": "Why enterprise AI pilots stall — and how they get to production",
    "telecom-noc-ai-deployment": "How to deploy AI in a telecom NOC without exposing network data",
    "hospital-ai-deployment-phi-protection": "Hospital AI deployment with PHI protection",
    "ai-on-network-operations-data": "AI on network operations data",
    "pii-guardrails-vs-operational-data-protection": "PII guardrails vs operational data protection",
    "sovereign-ai-european-enterprises": "Sovereign AI for European enterprises",
    "differential-privacy-for-enterprise-llm": "Differential privacy for enterprise LLM",
    "on-prem-llm-execution-path": "On-prem LLM execution path",
}


def parse_input_article(article: dict) -> dict:
    """Parse metadata + body from input HTML (Pattern B)."""
    slug = article["slug"]
    path = INPUT_DIR / f"{slug}.html"
    if not path.exists():
        raise FileNotFoundError(f"Missing input: {path}")
    html = path.read_text(encoding="utf-8")

    # html lang
    m = re.search(r'<html[^>]*lang="([^"]+)"', html)
    lang = m.group(1) if m else "en"
    in_language = "ko-KR" if lang.startswith("ko") else lang

    # canonical
    m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    canonical = m.group(1) if m else f"https://llmcapsule.ai/resources/learn/{slug}"
    # normalize old /learn/ → /resources/learn/
    canonical = canonical.replace("/learn/", "/resources/learn/").replace("/resources/resources/", "/resources/")

    # description (meta)
    m = re.search(r'<meta name="description" content="([^"]+)"', html)
    description = m.group(1) if m else ""

    # title from <h1>
    m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.DOTALL)
    title_raw = m.group(1) if m else ""
    title = strip_html_tags(title_raw)

    # lead from article-hero__lead
    m = re.search(r'<p[^>]*class="article-hero__lead"[^>]*>(.*?)</p>', html, re.DOTALL)
    lead = strip_html_tags(m.group(1)) if m else description

    # date published from JSON-LD or meta
    m = re.search(r'"datePublished":\s*"([^"]+)"', html)
    date_published = m.group(1) if m else "2025-04-15"

    # meta chips from article-hero
    hero_match = re.search(r'<section class="article-hero">(.*?)</section>', html, re.DOTALL)
    category = ""
    read_time = ""
    date_updated = ""
    if hero_match:
        hero_html = hero_match.group(1)
        chips = re.findall(r'<span[^>]*class="article-meta__chip"[^>]*>(.*?)</span>', hero_html, re.DOTALL)
        time_m = re.search(r'<span[^>]*class="article-meta__time"[^>]*>(.*?)</span>', hero_html, re.DOTALL)
        date_m = re.search(r'<span[^>]*class="article-meta__date"[^>]*>(.*?)</span>', hero_html, re.DOTALL)
        if chips:
            category = strip_html_tags(chips[0])
        if time_m:
            read_time = strip_html_tags(time_m.group(1))
        if date_m:
            date_updated = strip_html_tags(date_m.group(1))

    if not category:
        category = "Learn"
    if not read_time:
        read_time = "10 min read"
    if not date_updated:
        date_updated = f"Updated {date_published}"

    # TL;DR
    tldr_label = "TL;DR"
    tldr_body = ""
    tldr_match = re.search(
        r'<section class="tldr"[^>]*>.*?<div class="tldr__label">(.*?)</div>\s*<p class="tldr__body">(.*?)</p>',
        html,
        re.DOTALL,
    )
    if not tldr_match:
        tldr_match = re.search(
            r'<div class="tldr"[^>]*>.*?<div class="tldr__label">(.*?)</div>\s*<p class="tldr__body">(.*?)</p>',
            html,
            re.DOTALL,
        )
    if tldr_match:
        tldr_label = strip_html_tags(tldr_match.group(1))
        # tldr body may contain <strong>; preserve inner HTML
        tldr_body = tldr_match.group(2)
        # Strip outer whitespace and normalize
        tldr_body = re.sub(r"\s+", " ", tldr_body).strip()
        # For passing to a Props string, strip HTML tags but keep readable
        tldr_body = strip_html_tags(tldr_body)

    # Body content: <article class="article-body">...</article>
    body_match = re.search(r'<article class="article-body"[^>]*>(.*?)</article>', html, re.DOTALL)
    body_html = body_match.group(1).strip() if body_match else ""

    # Remove "Related" section from body if it appears as <h2>Related</h2> + following <div class="related"...
    body_html = re.sub(
        r'<h2>\s*Related[^<]*</h2>\s*<div\s+class="related[^"]*"[^>]*>.*?</div>',
        "",
        body_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    body_html = re.sub(
        r'<h2>\s*Related[^<]*</h2>\s*<ul[^>]*>.*?</ul>',
        "",
        body_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    # Drop CTA-Strip if present
    body_html = re.sub(r'<section class="cta[-_]strip[^"]*"[^>]*>.*?</section>', "", body_html, flags=re.DOTALL)

    body_html = body_html.strip()

    # FAQ JSON-LD
    faq = extract_faq_jsonld(html)

    # Breadcrumb label = title
    breadcrumb_label = title

    # Related items (up to 4) — extract hrefs from related section
    # Tries 2 patterns:
    #   1) <section class="related">...</section>
    #   2) <h2>Related</h2><ul>...</ul> (legacy English learn pages)
    related = []
    related_html = ""
    m1 = re.search(
        r'<section[^>]*class="related[^"]*"[^>]*>(.*?)</section>',
        html,
        re.DOTALL,
    )
    if m1:
        related_html = m1.group(1)
    else:
        m2 = re.search(
            r'<h2>\s*Related[^<]*</h2>\s*<ul[^>]*>(.*?)</ul>',
            html,
            re.DOTALL | re.IGNORECASE,
        )
        if m2:
            related_html = m2.group(1)

    if related_html:
        for ahref, atext in re.findall(
            r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>',
            related_html,
            re.DOTALL,
        ):
            href = ahref
            if href.startswith("/learn/"):
                href = "/resources/" + href.lstrip("/")
            if href.startswith("/glossary/"):
                href = "/resources/" + href.lstrip("/")
            # Determine slug + skip self-reference
            slug_match = re.search(r'/resources/(?:learn|glossary)/([^/?#]+)', href)
            if slug_match and slug_match.group(1) == slug:
                continue
            # Determine label: prefer override (for known slugs), else use anchor text
            ref_slug = slug_match.group(1) if slug_match else ""
            text = (
                RELATED_TITLE_OVERRIDES.get(ref_slug)
                or strip_html_tags(atext)
                or (ref_slug.replace("-", " ").title() if ref_slug else "")
            )
            if not text or not href:
                continue
            # de-dup
            if any(r[1] == href for r in related):
                continue
            related.append((text, href))
            if len(related) >= 4:
                break
    while len(related) < 4:
        related.append(("", ""))

    return {
        "title": title,
        "lead": lead,
        "category": category,
        "readTime": read_time,
        "dateUpdated": date_updated,
        "tldrLabel": tldr_label,
        "tldrBody": tldr_body,
        "canonicalUrl": canonical,
        "datePublished": date_published,
        "dateModified": date_published,
        "inLanguage": in_language,
        "breadcrumbLabel": breadcrumb_label,
        "related": related,
        "bodyHtml": body_html,
        "faqJsonLd": faq,
    }


# ── TSX builder ──
def build_tsx(article: dict) -> str:
    component = article["component"]

    if article["source_type"] == "bodyhtml":
        body_html, faq_jsonld = load_bodyhtml(article)
        meta = article  # uses curated metadata
    elif article["source_type"] == "input":
        parsed = parse_input_article(article)
        meta = parsed
        body_html = parsed["bodyHtml"]
        faq_jsonld = parsed["faqJsonLd"]
    else:
        raise ValueError(f"Unknown source_type: {article['source_type']}")

    related_props_lines = []
    for i, (rtitle, rhref) in enumerate(meta["related"], start=1):
        related_props_lines.append(
            f'      related{i}Title={{"{js_string_escape(rtitle)}"}}\n'
            f'      related{i}Href={{"{js_string_escape(rhref)}"}}'
        )
    related_block = "\n".join(related_props_lines)

    back_label = "← Learn"
    back_href = "/resources/learn"
    related_section_label = "함께 읽으면 좋은 글" if meta["inLanguage"].startswith("ko") else "Related articles"

    # Map of prop name → default value for this page
    prop_values: dict[str, str] = {
        "backLabel": back_label,
        "backHref": back_href,
        "title": meta["title"],
        "lead": meta["lead"],
        "category": meta["category"],
        "readTime": meta["readTime"],
        "dateUpdated": meta["dateUpdated"],
        "tldrLabel": meta["tldrLabel"],
        "tldrBody": meta["tldrBody"],
        "bodyHtml": "__BODY_HTML__",  # reference to const, handled specially below
        "canonicalUrl": meta["canonicalUrl"],
        "datePublished": meta["datePublished"],
        "dateModified": meta.get("dateModified") or meta["datePublished"],
        "inLanguage": meta["inLanguage"],
        "breadcrumbLabel": meta["breadcrumbLabel"],
        "faqJsonLd": "__FAQ_JSON_LD__",  # reference to const
        "relatedSectionLabel": related_section_label,
    }
    for i, (rtitle, rhref) in enumerate(meta["related"], start=1):
        prop_values[f"related{i}Title"] = rtitle
        prop_values[f"related{i}Href"] = rhref

    # Load ko/de translations from md files (if present).
    slug = article["slug"]
    ko_md = TRANSLATIONS_DIR / f"{slug}-ko-lines.md"
    de_md = TRANSLATIONS_DIR / f"{slug}-de-lines.md"
    ko_translations = parse_translation_md_learn(ko_md)
    de_translations = parse_translation_md_learn(de_md)
    has_locale = bool(ko_translations) or bool(de_translations)

    # ── Without locale dropdown (legacy behavior) ──
    if not has_locale:
        iface_lines = [f"  {p['name']}?: string" for p in PROPS_SPEC]
        iface_block = "\n".join(iface_lines)
        default_lines = []
        for p in PROPS_SPEC:
            name = p["name"]
            v = prop_values.get(name, "")
            if v == "__BODY_HTML__":
                default_lines.append(f"  {name} = BODY_HTML,")
            elif v == "__FAQ_JSON_LD__":
                default_lines.append(f"  {name} = FAQ_JSON_LD,")
            else:
                default_lines.append(f'  {name} = "{js_string_escape(v)}",')
        defaults_block = "\n".join(default_lines)
        control_lines = []
        for p in PROPS_SPEC:
            name = p["name"]
            title_attr = p["title"]
            textarea = ", displayTextArea: true" if p["textarea"] else ""
            v = prop_values.get(name, "")
            if v == "__BODY_HTML__":
                line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: BODY_HTML{textarea} }},'
            elif v == "__FAQ_JSON_LD__":
                line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: FAQ_JSON_LD{textarea} }},'
            else:
                line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: "{js_string_escape(v)}"{textarea} }},'
            control_lines.append(line)
        controls_block = "\n".join(control_lines)
        return f"""// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — LearnArticle logic inlined for Framer cross-folder compatibility.

import {{ addPropertyControls, ControlType }} from "framer"

interface Props {{
{iface_block}
}}

const BODY_HTML = `{js_template_escape(body_html)}`

const FAQ_JSON_LD = `{js_template_escape(faq_jsonld)}`

export default function {component}({{
{defaults_block}
}}: Props) {{
{LEARN_ARTICLE_BODY}
}}

addPropertyControls({component}, {{
{controls_block}
}})
"""

    # ── With locale dropdown (en/ko/de) ──
    iface_block = '  locale?: "en" | "ko" | "de"\n' + \
                  "\n".join(f"  {p['name']}?: string" for p in PROPS_SPEC)
    default_lines = ['  locale = "en",']
    for p in PROPS_SPEC:
        default_lines.append(f'  {p["name"]} = "",')
    defaults_block = "\n".join(default_lines)

    locale_control = (
        '  locale: { type: ControlType.Enum, title: "Locale", '
        'options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], '
        'defaultValue: "en" },'
    )
    control_lines = [locale_control]
    for p in PROPS_SPEC:
        name = p["name"]
        title_attr = p["title"]
        textarea = ", displayTextArea: true" if p["textarea"] else ""
        control_lines.append(
            f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: ""{textarea} }},'
        )
    controls_block = "\n".join(control_lines)

    def render_dict(translations, is_en):
        lines = []
        for p in PROPS_SPEC:
            name = p["name"]
            if name == "bodyHtml":
                if is_en:
                    lines.append(f"    {name}: BODY_HTML,")
                else:
                    val = translations.get(name, "")
                    lines.append(f"    {name}: `{js_template_escape(val)}`,")
            elif name == "faqJsonLd":
                if is_en:
                    lines.append(f"    {name}: FAQ_JSON_LD,")
                else:
                    val = translations.get(name, "")
                    lines.append(f"    {name}: `{js_template_escape(val)}`,")
            else:
                if is_en:
                    val = prop_values.get(name, "")
                else:
                    val = translations.get(name, prop_values.get(name, ""))
                lines.append(f'    {name}: "{js_string_escape(val)}",')
        return "\n".join(lines)

    en_dict = render_dict({}, is_en=True)
    ko_dict = render_dict(ko_translations, is_en=False)
    de_dict = render_dict(de_translations, is_en=False)

    resolver_lines = ['  const T = TRANSLATIONS[locale] || TRANSLATIONS.en']
    for p in PROPS_SPEC:
        name = p["name"]
        resolver_lines.append(
            f'  const _{name} = {name} || T["{name}"] || TRANSLATIONS.en["{name}"]'
        )
    resolver_block = "\n".join(resolver_lines)

    body = LEARN_ARTICLE_BODY
    for p in PROPS_SPEC:
        name = p["name"]
        body = re.sub(
            rf'(?<![\w."_]){re.escape(name)}(?![\w])',
            f"_{name}",
            body,
        )

    return f"""// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import {{ addPropertyControls, ControlType }} from "framer"

interface Props {{
{iface_block}
}}

const BODY_HTML = `{js_template_escape(body_html)}`

const FAQ_JSON_LD = `{js_template_escape(faq_jsonld)}`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {{
  en: {{
{en_dict}
  }},
  ko: {{
{ko_dict}
  }},
  de: {{
{de_dict}
  }},
}}

export default function {component}({{
{defaults_block}
}}: Props) {{
{resolver_block}

{body}
}}

addPropertyControls({component}, {{
{controls_block}
}})
"""


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Output: {OUT_DIR}")

    for article in ARTICLES:
        out_path = OUT_DIR / f"{article['component']}.tsx"
        try:
            tsx = build_tsx(article)
            out_path.write_text(tsx, encoding="utf-8")
            size_kb = out_path.stat().st_size / 1024
            print(f"  ✓ {out_path.name}  ({size_kb:.1f} KB)")
        except FileNotFoundError as e:
            print(f"  ✗ {article['component']}.tsx  SKIP: {e}", file=sys.stderr)
            continue

    print(f"\nDone. {len(ARTICLES)} articles generated.")


if __name__ == "__main__":
    main()
