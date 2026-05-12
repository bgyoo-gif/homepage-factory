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
        "slug": "public-sector-genai-three-approaches",
        "component": "PublicSectorGenaiThreeApproaches",
        "source_type": "bodyhtml",
        "title": "공공기관 생성형 AI 도입의 세 가지 길",
        "lead": "AI DLP·차단, sLLM 자체구축, 게이트웨이 방식 — N²SF 시대 공공기관의 선택지를 비용·성능·보안·정합성 관점에서 객관적으로 비교합니다.",
        "category": "정책 분석",
        "readTime": "18분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "공공기관의 생성형 AI 도입은 AI DLP·차단, sLLM 자체구축, 게이트웨이 방식의 세 갈래로 나뉩니다. 차단 방식은 안전하지만 활용을 포기해야 하고, sLLM 자체구축은 7~13억 원의 초기 비용에 더해 최신 상용 모델과의 성능 격차가 누적됩니다. 게이트웨이 방식은 비용과 성능의 균형을 잡지만, 내부 보호 기법의 수준이 N²SF 정합성을 결정합니다. 단순 마스킹은 재식별 공격에 취약하며, 차등정보보호(Differential Privacy) 기반의 게이트웨이가 수학적으로 검증된 유일한 답에 가깝습니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-genai-three-approaches",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관 생성형 AI 도입의 세 가지 길",
        "related": [
            ("N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
            ("sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프", "/resources/learn/sllm-self-hosted-reality-check"),
            ("", ""),
        ],
    },
    {
        "slug": "what-is-n2sf",
        "component": "WhatIsN2sf",
        "source_type": "bodyhtml",
        "title": "N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리",
        "lead": "국가 망 보안체계(N²SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다.",
        "category": "정책 분석",
        "readTime": "20분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "N²SF는 공공부문 보안의 패러다임 전환입니다. 모든 외부 자원을 일률 차단하던 망분리에서, 정보를 C(기밀)·S(민감)·O(공개) 세 등급으로 분류하고 등급별로 다른 통제를 적용하는 다중계층보안으로 전환했습니다. 이 전환은 외부 생성형 AI 활용의 길을 열되, 「위치-주체-객체」 모델링·정보 이동 보안원칙·21개 보안위협 식별·50여 개 보안통제 항목이라는 구체적인 프레임워크 안에서만 가능합니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/what-is-n2sf",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "N²SF란 무엇인가",
        "related": [
            ("N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
            ("기업 AI를 위한 차등 프라이버시", "/resources/learn/differential-privacy-for-enterprise-llm"),
            ("", ""),
        ],
    },
    {
        "slug": "n2sf-model-2-explained",
        "component": "N2sfModel2Explained",
        "source_type": "bodyhtml",
        "title": "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
        "lead": "국가정보원·NSR이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, AI 연계체계까지 처음부터 끝까지.",
        "category": "정책 분석",
        "readTime": "20분 읽기",
        "dateUpdated": "2026년 5월 업데이트",
        "tldrLabel": "TL;DR",
        "tldrBody": "N²SF 모델 2는 공공기관이 외부 생성형 AI를 활용할 때 따라야 할 구체적 보안 프레임워크입니다. 「위치(기관 전산망 S) - 주체(이용자 단말 S) - 객체(외부 생성형 AI O)」라는 흐름을 21개 보안위협으로 식별하고, 50여 개 보안통제 항목으로 대응책을 제시합니다. 핵심은 두 보안원칙(정보 생산·저장, 정보 이동)과 AI 연계체계입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/n2sf-model-2-explained",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "N²SF 모델 2 완벽 해설",
        "related": [
            ("N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
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
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
            ("N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리", "/resources/learn/what-is-n2sf"),
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
        "tldrBody": "공공기관의 외부 LLM 도입은 「위치-주체-객체」를 보안등급별로 평가하는 N²SF 정합성에서 출발합니다. 정보화담당관은 5단계(준비·위협 식별·연계체계 설계·통제 적용·검증)를 분기별로 운영하면서, 시나리오 A(O 등급 공개 활용)는 4개월, 시나리오 B(S 등급 민감 업무)는 6~8개월의 로드맵으로 분기하는 것이 일반적입니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-external-llm-adoption-roadmap",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "공공기관 외부 LLM 활용 도입 가이드",
        "related": [
            ("N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까", "/resources/learn/n2sf-model-2-explained"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
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
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
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
        "tldrBody": "2026 경영평가편람은 'AI 활용 등 혁신'을 신설 가점 1.5점으로 명문화했습니다. 권장이 아니라 사실상의 의무로의 전환입니다. 가점 확보를 위해서는 활용 시나리오 정의, 보안·통제 체계, 정량 성과 측정, N²SF 정합성, 외부 검증의 다섯 가지 요건이 필요하며, 이를 분기별 로드맵으로 운영해야 합니다.",
        "canonicalUrl": "https://llmcapsule.ai/resources/learn/public-sector-2026-management-evaluation-ai-incentive",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-01",
        "inLanguage": "ko-KR",
        "breadcrumbLabel": "2026 경영평가 'AI 활용 등 혁신' 가점",
        "related": [
            ("공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵", "/resources/learn/public-sector-external-llm-adoption-roadmap"),
            ("공공기관 생성형 AI 도입의 세 가지 길", "/resources/learn/public-sector-genai-three-approaches"),
            ("공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지", "/resources/learn/public-sector-genai-five-stuck-points"),
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

    # Related items (up to 4) — extract hrefs from related section, then resolve titles
    # via RELATED_TITLE_OVERRIDES (slug-keyed) so category labels in source HTML
    # don't bleed into the link text.
    related = []
    related_section = re.search(
        r'<section[^>]*class="related[^"]*"[^>]*>(.*?)</section>',
        html,
        re.DOTALL,
    )
    if related_section:
        for ahref in re.findall(
            r'<a[^>]+href="([^"]+)"',
            related_section.group(1),
        ):
            href = ahref
            if href.startswith("/learn/"):
                href = "/resources/" + href.lstrip("/")
            # extract slug from href
            slug_match = re.search(r'/resources/learn/([^/?#]+)', href)
            if not slug_match:
                continue
            ref_slug = slug_match.group(1)
            if ref_slug == slug:  # skip self-reference
                continue
            text = RELATED_TITLE_OVERRIDES.get(ref_slug, ref_slug.replace("-", " ").title())
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

    # Build interface block
    iface_lines = [f"  {p['name']}?: string" for p in PROPS_SPEC]
    iface_block = "\n".join(iface_lines)

    # Build destructured Props with defaults block
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

    # Build addPropertyControls block
    control_lines = []
    for p in PROPS_SPEC:
        name = p["name"]
        title_attr = p["title"]
        textarea = ", displayTextArea: true" if p["textarea"] else ""
        v = prop_values.get(name, "")
        if v == "__BODY_HTML__":
            dv = "BODY_HTML"
            line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: {dv}{textarea} }},'
        elif v == "__FAQ_JSON_LD__":
            dv = "FAQ_JSON_LD"
            line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: {dv}{textarea} }},'
        else:
            line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: "{js_string_escape(v)}"{textarea} }},'
        control_lines.append(line)
    controls_block = "\n".join(control_lines)

    tsx = f"""// AUTO-GENERATED. Do not edit by hand.
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
    return tsx


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
