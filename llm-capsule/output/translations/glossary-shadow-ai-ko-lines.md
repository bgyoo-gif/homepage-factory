# glossary/shadow-ai — 한국어 번역

## Section 01: Hero

← Glossary
← 용어 사전

Shadow AI
Shadow AI

Employees using ChatGPT (or any external LLM) on personal devices or unapproved channels — because the official tooling can't handle the data the work depends on.
공식 도구가 업무에 필요한 데이터를 처리할 수 없기 때문에 — 직원들이 개인 기기나 비승인 채널에서 ChatGPT(또는 외부 LLM)를 사용합니다.

Risk concept
리스크 개념

## Section 02: Definition Block

Definition
정의

Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing AI enablement data layer. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.
Shadow AI는 기업 직원이 승인된 채널 외부에서 외부 LLM을 무단으로 사용하는 행위입니다 — 주로 공식 AI 도구가 업무에 실제로 필요한 규제 데이터를 처리할 수 없기 때문입니다. 근본 원인은 직원의 일탈이 아닙니다. 데이터 레이어의 부재입니다. 직원들은 파일럿과 초기 데모에서 생산성을 경험하고, 운영 도구가 이를 제공하지 못하면 통제를 우회합니다.

## Section 03: Body HTML

<!-- h2: Why it emerges -->
발생 원인

<!-- p: intro -->
Shadow AI는 원인이 아니라 증상입니다. 근본적인 패턴은 다음과 같습니다.

<!-- ol li 1 -->
기업이 합성 데이터로 AI 파일럿을 진행합니다. 직원들은 상당한 생산성 향상을 경험합니다.

<!-- ol li 2 -->
실제 운영 데이터를 외부 LLM으로 전송할 수 없어 보안 검토 단계에서 파일럿이 중단됩니다.

<!-- ol li 3 -->
파일럿 범위가 사용 불가능한 수준으로 축소됩니다. 생산성 향상은 사라집니다.

<!-- ol li 4 -->
생산성을 경험한 직원들이 우회책을 찾습니다 — 개인 기기에서 ChatGPT에 익명화된 스니펫을 복사·붙여넣기하거나, 삭제 처리된 문서를 캡처하거나, 비승인 AI 플러그인을 사용합니다.

<!-- ol li 5 -->
기업은 최악의 상황에 놓입니다. AI 생산성은 거버넌스 밖에서 이루어지고, 거버넌스 안에서는 운영 AI가 전혀 없습니다.

<!-- h2: The structural fix -->
구조적 해결책

<!-- p: structural fix body -->
Shadow AI는 정책 강화만으로는 해결되지 않습니다 — 그것은 증상을 치료하는 것입니다. 구조적 해결책은 공식 도구가 실제 운영 데이터를 처리할 수 있도록 하는 데이터 레이어입니다. 로컬에서 캡슐화하고, 승인된 외부 LLM(Path A) 또는 온프레미스 로컬 모델(Path B)을 통해 처리한 뒤, 원위치에 복원합니다. 공식 도구가 파일럿에서 경험한 것을 제공하면 Shadow AI 사용은 줄어듭니다.

<!-- h2: Where it shows up -->
발생 사례

<!-- ul li 1 -->
통신사 NOC 분석가가 RCA 지원을 위해 익명화된 티켓 내용을 ChatGPT에 붙여넣습니다.

<!-- ul li 2 -->
병원 임상의가 개인 기기에서 AI 도구를 이용해 문서 초안을 작성합니다.

<!-- ul li 3 -->
보험 언더라이터가 비식별화된 청구 요약본으로 AI 출력을 테스트합니다.

<!-- ul li 4 -->
법률 어소시에이트가 컨슈머 AI 도구로 삭제 처리된 계약서를 요약합니다.

<!-- ul li 5 -->
엔지니어가 민감한 식별자가 포함된 내부 문서에 컨슈머 AI 도구를 사용합니다.

<!-- h2: Related terms (bodyHtml internal list) -->
관련 용어

<!-- a: Blocked AI workflow -->
차단된 AI 워크플로우

<!-- a: AI enablement data layer -->
데이터 레이어

<!-- a: Learn article -->
Learn: 기업 AI 파일럿이 중단되는 이유

## Section 04: Related Terms (Props)

Blocked AI workflow
차단된 AI 워크플로우

AI enablement data layer
데이터 레이어

Learn: Why enterprise AI pilots stall
Learn: 기업 AI 파일럿이 중단되는 이유
