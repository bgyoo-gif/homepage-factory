#!/usr/bin/env python3
"""
DeepL API를 활용한 TSX Props 텍스트 자동 번역 스크립트.

사용법:
  python3 server/deepl-translate.py --page product --lang KO
  python3 server/deepl-translate.py --page product --lang DE
  python3 server/deepl-translate.py --page product --lang JA
  python3 server/deepl-translate.py --all --lang KO

출력: llm-capsule/output/translations/{page}-{lang}-lines.md
"""

import os
import re
import sys
import json
import time
import argparse
import urllib.request
import urllib.parse

DEEPL_API_KEY = os.environ.get("DEEPL_API_KEY", "75f5fe29-53f7-4491-9d26-f5b49216e7cc:fx")
DEEPL_API_URL = "https://api-free.deepl.com/v2/translate"

FRAMER_ROOT = "llm-capsule/output/framer"
OUTPUT_ROOT = "llm-capsule/output/translations"

# 번역 금지 용어 (DeepL에 보내기 전에 placeholder로 치환, 번역 후 복원)
NO_TRANSLATE = [
    "LLM Capsule", "CUBIG", "Zero Exposure", "SynTitan",
    "AWS Marketplace", "ChatGPT", "Claude", "Gemini", "Perplexity",
    "ISO 27001", "ISO 42001", "ISO/IEC 27001", "ISO/IEC 42001",
    "GS Certification", "KISA", "TTA", "Gartner",
    "Proof of Value", "PoV", "RBAC", "VPC", "SLA",
    "RAG", "PII", "GDPR", "HIPAA", "SOX", "DSGVO",
]

LANG_MAP = {
    "KO": "KO",
    "DE": "DE",
    "JA": "JA",
}

LANG_LABELS = {
    "KO": "한국어 번역",
    "DE": "Deutsche Übersetzung",
    "JA": "日本語翻訳",
}


def extract_props_from_tsx(tsx_path):
    """TSX 파일에서 텍스트 Props의 defaultValue를 추출."""
    with open(tsx_path, "r") as f:
        content = f.read()

    props = []

    # function 파라미터에서 string 기본값 추출
    param_pattern = re.compile(r'(\w+)\s*=\s*"([^"]+)"')
    # addPropertyControls 영역 찾기
    controls_start = content.find("addPropertyControls(")
    func_start = content.find("export default function")
    func_end = content.find("}: Props)")
    if func_end < 0:
        func_end = content.find("}) {")

    if func_start >= 0 and func_end >= 0:
        func_params = content[func_start:func_end]
        for match in param_pattern.finditer(func_params):
            name, value = match.group(1), match.group(2)
            # 필터: URL, 이미지, SVG, 짧은 값 제외
            if any(skip in name.lower() for skip in [
                "href", "image", "bgimage", "icon", "path", "alt",
                "loading", "aria", "classname", "xmlns", "viewbox"
            ]):
                continue
            if value.startswith("http") or value.startswith("/") or value.startswith("#"):
                continue
            if value.startswith("M") and " " in value and any(c.isdigit() for c in value[:5]):
                continue
            if re.match(r"^[\d.\s]+$", value):
                continue
            if "application/" in value:
                continue
            if len(value) < 5:
                continue
            props.append((name, value))

    return props


def protect_terms(text):
    """번역하지 않을 용어가 있는지 기록만 함. 번역 후 후처리로 복원."""
    found = {}
    for term in NO_TRANSLATE:
        if term in text:
            found[term] = True
    return text, found


def restore_terms(text, found):
    """번역 후 용어가 변형됐으면 원래 용어로 복원."""
    # DeepL이 대부분 영문 고유명사를 유지하지만, 간혹 번역하는 경우 대비
    # 알려진 오역 패턴 교정
    corrections = {
        # KO
        "LLM 캡슐": "LLM Capsule",
        "제로 노출": "Zero Exposure",
        "제로 익스포저": "Zero Exposure",
        # DE
        "LLM-Kapsel": "LLM Capsule",
        "Null-Exposition": "Zero Exposure",
        # JA
        "LLMカプセル": "LLM Capsule",
        "ゼロエクスポージャー": "Zero Exposure",
    }
    for wrong, correct in corrections.items():
        text = text.replace(wrong, correct)
    return text


def translate_text(text, target_lang):
    """DeepL API로 텍스트 번역."""
    # 번역 금지 용어 보호
    protected_text, protected_map = protect_terms(text)

    data = urllib.parse.urlencode({
        "text": protected_text,
        "source_lang": "EN",
        "target_lang": target_lang,
    }).encode("utf-8")

    req = urllib.request.Request(
        DEEPL_API_URL,
        data=data,
        headers={"Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}"},
    )

    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            translated = result["translations"][0]["text"]
            # 보호된 용어 복원
            translated = restore_terms(translated, protected_map)
            return translated
    except Exception as e:
        print(f"  [ERROR] Translation failed: {e}")
        return None


def translate_page(page_name, target_lang):
    """한 페이지의 TSX Props를 추출하고 번역 파일 생성."""
    page_dir = os.path.join(FRAMER_ROOT, page_name)
    if not os.path.isdir(page_dir):
        print(f"[SKIP] {page_name} — directory not found")
        return False

    # TSX 파일 수집
    tsx_files = []
    tsx_dir = os.path.join(page_dir, "tsx")
    if os.path.isdir(tsx_dir):
        tsx_files = sorted([
            os.path.join(tsx_dir, f)
            for f in os.listdir(tsx_dir)
            if f.endswith(".tsx")
        ])
    else:
        tsx_files = sorted([
            os.path.join(page_dir, f)
            for f in os.listdir(page_dir)
            if f.endswith(".tsx")
        ])

    if not tsx_files:
        print(f"[SKIP] {page_name} — no TSX files")
        return False

    lang_code = target_lang.lower()
    lang_label = LANG_LABELS.get(target_lang, target_lang)
    output_path = os.path.join(OUTPUT_ROOT, f"{page_name}-{lang_code}-lines.md")

    lines = [f"# {page_name.replace('-', ' ').title()} — {lang_label}\n"]

    total_props = 0
    for tsx_path in tsx_files:
        section_name = os.path.basename(tsx_path).replace(".tsx", "")
        props = extract_props_from_tsx(tsx_path)
        if not props:
            continue

        lines.append(f"\n## {section_name}\n")

        for prop_name, value in props:
            # DeepL로 번역
            translated = translate_text(value, target_lang)
            if translated:
                lines.append(f"\n{value}")
                lines.append(f"{translated}")
                total_props += 1
            else:
                lines.append(f"\n{value}")
                lines.append(f"[TRANSLATION FAILED]")

            # Rate limit 방지 (Free tier)
            time.sleep(0.1)

    # 파일 저장
    os.makedirs(OUTPUT_ROOT, exist_ok=True)
    with open(output_path, "w") as f:
        f.write("\n".join(lines) + "\n")

    print(f"[DONE] {page_name} → {output_path} ({total_props} props)")
    return True


def get_all_pages():
    """모든 framer 페이지 목록."""
    pages = []
    for d in sorted(os.listdir(FRAMER_ROOT)):
        full = os.path.join(FRAMER_ROOT, d)
        if os.path.isdir(full) and not d.startswith("."):
            pages.append(d)
    return pages


def main():
    parser = argparse.ArgumentParser(description="DeepL TSX Props 자동 번역")
    parser.add_argument("--page", help="번역할 페이지 이름 (예: product)")
    parser.add_argument("--all", action="store_true", help="모든 페이지 번역")
    parser.add_argument("--lang", required=True, choices=["KO", "DE", "JA"], help="대상 언어")
    args = parser.parse_args()

    if not args.page and not args.all:
        parser.error("--page 또는 --all 중 하나를 지정하세요")

    target_lang = LANG_MAP[args.lang]

    if args.all:
        pages = get_all_pages()
        print(f"번역 대상: {len(pages)} 페이지 → {args.lang}")
        for i, page in enumerate(pages):
            print(f"\n[{i+1}/{len(pages)}] {page}")
            translate_page(page, target_lang)
            time.sleep(1)  # 페이지 간 간격
    else:
        translate_page(args.page, target_lang)


if __name__ == "__main__":
    main()
