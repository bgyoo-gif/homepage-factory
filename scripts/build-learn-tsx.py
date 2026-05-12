#!/usr/bin/env python3
"""
Build per-page TSX for each learn article.

Reads:
  - llm-capsule/output/html/{slug}-b-type.html (metadata extraction)
  - llm-capsule/output/html/{slug}-bodyhtml.html (body content)

Writes:
  - llm-capsule/output/framer/learn/{PascalCase}.tsx

Each output TSX imports LearnArticle from shared/ and hardcodes all Props.
User just drops the component into Framer; no Props input needed.

Excludes CTA section (LearnArticle.tsx doesn't render CTA anyway).
"""

import re
import sys
from pathlib import Path

# ── Per-article config (slug → metadata not extractable from HTML) ──
ARTICLES = [
    {
        "slug": "public-sector-genai-three-approaches",
        "component": "PublicSectorGenaiThreeApproaches",
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
]

# ── Paths ──
ROOT = Path(__file__).resolve().parent.parent
HTML_DIR = ROOT / "llm-capsule" / "output" / "html"
OUT_DIR = ROOT / "llm-capsule" / "output" / "framer" / "learn"


def js_template_escape(s: str) -> str:
    """Escape for embedding in a JS template literal (backtick string)."""
    # Order matters: escape backslashes first
    s = s.replace("\\", "\\\\")
    s = s.replace("`", "\\`")
    s = s.replace("${", "\\${")
    return s


def js_string_escape(s: str) -> str:
    """Escape for embedding in a JS double-quoted string."""
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", "\\n")
    return s


def extract_faq_jsonld(b_type_html: str) -> str:
    """Extract FAQPage JSON-LD from the b-type HTML, return as compact string."""
    # Look for <script type="application/ld+json"> blocks
    pattern = re.compile(
        r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',
        re.DOTALL,
    )
    for m in pattern.finditer(b_type_html):
        content = m.group(1).strip()
        if '"FAQPage"' in content:
            # Compact: strip extra whitespace, keep valid JSON
            return re.sub(r"\s+", " ", content).strip()
    return ""


def build_tsx(article: dict) -> str:
    slug = article["slug"]
    component = article["component"]

    bodyhtml_path = HTML_DIR / f"{slug}-bodyhtml.html"
    btype_path = HTML_DIR / f"{slug}-b-type.html"

    if not bodyhtml_path.exists():
        raise FileNotFoundError(f"Missing bodyhtml: {bodyhtml_path}")
    if not btype_path.exists():
        raise FileNotFoundError(f"Missing b-type: {btype_path}")

    body_html = bodyhtml_path.read_text(encoding="utf-8")
    b_type_html = btype_path.read_text(encoding="utf-8")
    faq_jsonld = extract_faq_jsonld(b_type_html)

    # Build related links arrays
    related_props = []
    for i, (title, href) in enumerate(article["related"], start=1):
        related_props.append(
            f'      related{i}Title={{"{js_string_escape(title)}"}}\n'
            f'      related{i}Href={{"{js_string_escape(href)}"}}'
        )
    related_block = "\n".join(related_props)

    tsx = f"""// AUTO-GENERATED. Do not edit by hand.
// Source: llm-capsule/output/html/{slug}-bodyhtml.html
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py

import LearnArticle from "../shared/LearnArticle"

const BODY_HTML = `{js_template_escape(body_html)}`

const FAQ_JSON_LD = `{js_template_escape(faq_jsonld)}`

export default function {component}() {{
  return (
    <LearnArticle
      backLabel="← Learn"
      backHref="/resources/learn"
      title={{"{js_string_escape(article["title"])}"}}
      lead={{"{js_string_escape(article["lead"])}"}}
      category={{"{js_string_escape(article["category"])}"}}
      readTime={{"{js_string_escape(article["readTime"])}"}}
      dateUpdated={{"{js_string_escape(article["dateUpdated"])}"}}
      tldrLabel={{"{js_string_escape(article["tldrLabel"])}"}}
      tldrBody={{"{js_string_escape(article["tldrBody"])}"}}
      bodyHtml={{BODY_HTML}}
      canonicalUrl={{"{js_string_escape(article["canonicalUrl"])}"}}
      datePublished={{"{article["datePublished"]}"}}
      dateModified={{"{article["dateModified"]}"}}
      inLanguage={{"{article["inLanguage"]}"}}
      breadcrumbLabel={{"{js_string_escape(article["breadcrumbLabel"])}"}}
      faqJsonLd={{FAQ_JSON_LD}}
      relatedSectionLabel="함께 읽으면 좋은 글"
{related_block}
    />
  )
}}
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

    print(f"\nDone. Drop these into Framer — no Props input needed.")


if __name__ == "__main__":
    main()
