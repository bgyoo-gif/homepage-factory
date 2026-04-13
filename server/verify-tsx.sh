#!/bin/bash
# TSX 전수 검증 스크립트 — TSX 생성/수정 후 반드시 실행
# 사용법: bash server/verify-tsx.sh

DIR="llm-capsule/output/framer"
ERRORS=0

echo "=== TSX 전수 검증 시작 ==="
echo ""

# 1. 860px 잔여
COUNT=$(grep -rl '860' "$DIR" 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [1] 860px 잔여: ${COUNT}개 파일"
  grep -rl '860' "$DIR" 2>/dev/null
  ERRORS=$((ERRORS+1))
else
  echo "✓ [1] 860px 잔여: 0"
fi

# 2. container padding: 0; 덮어쓰기 (1440px에서)
COUNT=$(find "$DIR" -type f \( -name '*.tsx' -o -name '*.html' \) -exec grep -l 'container { padding: 0; }' {} \; 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [2] container padding: 0; 잔여: ${COUNT}개 파일"
  find "$DIR" -type f \( -name '*.tsx' -o -name '*.html' \) -exec grep -l 'container { padding: 0; }' {} \; 2>/dev/null
  ERRORS=$((ERRORS+1))
else
  echo "✓ [2] container padding: 0; 덮어쓰기 없음"
fi

# 3. section padding 64px/48px
COUNT=$(grep -rl 'section.*padding: 64px\|section.*padding: 48px' "$DIR" 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [3] section padding 64/48px: ${COUNT}개 파일"
  ERRORS=$((ERRORS+1))
else
  echo "✓ [3] section padding: 60px 통일"
fi

# 4. @media in TSX (Container Queries만 허용)
COUNT=$(find "$DIR" -name '*.tsx' -exec grep -l '@media' {} \; 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [4] @media 사용: ${COUNT}개 TSX"
  ERRORS=$((ERRORS+1))
else
  echo "✓ [4] @media 없음 (Container Queries만)"
fi

# 5. GNB nav 잔여 (step-tabs nav 제외)
COUNT=$(find "$DIR" -name '*.tsx' -exec grep -l 'role="navigation"' {} \; 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [5] GNB nav 잔여: ${COUNT}개 TSX"
  ERRORS=$((ERRORS+1))
else
  echo "✓ [5] GNB nav 없음"
fi

# 6. footer 잔여
COUNT=$(find "$DIR" -name '*.tsx' -exec grep -l '<footer\|className.*footer' {} \; 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [6] footer 잔여: ${COUNT}개 TSX"
  ERRORS=$((ERRORS+1))
else
  echo "✓ [6] footer 없음"
fi

# 7. CTA band max-width: 1440px (전폭이어야 함)
COUNT=$(find "$DIR" -name '*.tsx' -exec grep -l 'cta.*band.*max-width.*1440\|cta-band.*1440.*max-width' {} \; 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -gt 0 ]; then
  echo "❌ [7] CTA band max-width 1440px: ${COUNT}개 TSX"
  ERRORS=$((ERRORS+1))
else
  echo "✓ [7] CTA band 전폭 (max-width 없음)"
fi

# 8. 1440px container에 max-width + padding 120px 규칙 존재
MISSING=0
find "$DIR" -path '*/tsx/*.tsx' -type f | while read f; do
  has_container=$(grep -c '[a-z]-container {' "$f")
  has_1440=$(grep -c '1440.*container.*padding.*120\|container.*1440.*padding.*120' "$f")
  if [ "$has_container" -gt 0 ] && [ "$has_1440" -eq 0 ]; then
    echo "  MISSING 1440px rule: $(basename $f)"
    MISSING=$((MISSING+1))
  fi
done
echo "✓ [8] 1440px container 규칙 검사 완료"

echo ""
if [ "$ERRORS" -gt 0 ]; then
  echo "❌ 검증 실패: ${ERRORS}개 항목"
  exit 1
else
  echo "✓ 전체 검증 통과"
  exit 0
fi
