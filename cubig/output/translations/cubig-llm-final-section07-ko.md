# Section07_FAQ — ko

| Prop | ko |
|------|----|
| sectionTitle | 자주 묻는 |
| sectionTitleHighlight | 질문 |
| faq1Q | CUBIG LLM Capsule은 무엇입니까? |
| faq1A | LLM Capsule은 CUBIG의 AI 활성화 데이터 레이어입니다. AI 처리 전에 기업 민감 데이터를 로컬에서 캡슐화하고, 어떤 LLM이든 원본 노출 없이 실제 문서 작업을 가능하게 하며, AI 결과물에 원본 데이터를 자동 복원합니다. CUBIG AI-Ready Data Infrastructure 프레임워크의 세 가지 블로커 중 '제한된 데이터' 문제를 해결합니다. |
| faq2Q | LLM Capsule은 데이터 마스킹·삭제와 어떻게 다릅니까? |
| faq2A | 마스킹과 삭제는 민감 데이터를 영구적으로 제거해, AI 모델에 필요한 맥락을 파괴합니다. 마스킹된 입력으로 나온 AI 결과물에는 [REDACTED] 빈칸이 포함되어 수작업 재구성이 필요합니다. LLM Capsule은 복원 가능한 워크플로우를 만듭니다. 데이터를 구조 보존 방식으로 캡슐화하고, AI가 완전한 결과물을 만들면, 복원이 원본 값을 자동으로 되돌립니다. 결과는 깨진 조각이 아닌, 바로 쓸 수 있는 기업 문서입니다. |
| faq3Q | LLM Capsule은 프롬프트 보안 게이트웨이와 어떻게 다릅니까? |
| faq3A | 프롬프트 보안 게이트웨이는 API 레벨에서 작동합니다 — 프롬프트를 스캔하고 위험 콘텐츠를 차단하거나 제거합니다. RAG 파이프라인이나 배치 워크플로우로 처리되는 기업 문서는 보호하지 못하며, 결과물 복원도 없습니다. LLM Capsule은 데이터 레이어에서 작동해, AI 처리 전에 민감 항목을 캡슐화하고 처리 후 결과물을 복원합니다. 필터가 아닌 활성화 레이어입니다. |
| faq3LinkLabel | 전체 비교 보기 |
| faq4Q | 복원이 기업 AI에서 왜 중요합니까? |
| faq4A | 복원 없이는 AI 결과물을 실제 기업 업무에 사용할 수 없습니다. '[PERSON_01]이 [DATE_02]에 [ID_04]를 접수했습니다'라는 요약문은 보고서에 넣을 수 없습니다. 복원은 원래 이름, 수치, 날짜, 참조를 AI 결과물에 자동으로 되돌립니다 — 보험 청구 처리, 법률 검토, 임상 보고서, 비즈니스 운영에 수작업 없이 바로 사용 가능합니다. |
| faq5Q | LLM Capsule은 CUBIG AI-Ready Data Infrastructure에서 어떤 위치입니까? |
| faq5A | CUBIG AI-Ready Data Infrastructure는 기업 AI의 세 가지 블로커를 해결합니다. LLM Capsule은 제한된 데이터 — 외부 AI에 노출할 수 없는 민감정보를 해결합니다. DTS는 사용 불가 데이터 — 부족하거나 프라이버시로 잠긴 학습 데이터셋을 해결합니다. SynTitan은 불안정한 실행 — 데이터 변경 시 깨지는 프로덕션 AI 파이프라인을 해결합니다. LLM Capsule은 단독 또는 SynTitan 워크플로우 내에서 작동합니다. |
| faq6Q | LLM Capsule은 DTS와 어떻게 다릅니까? |
| faq6A | 서로 다른 레이어에서 작동합니다. LLM Capsule은 인터랙션 레이어에서 AI 사용 중 데이터를 보호합니다 — 실시간으로 캡슐화하고 복원합니다. DTS는 데이터셋 레이어에서 AI 학습·검증용 프라이버시 안전 합성 데이터셋을 생성합니다. 둘 다 CUBIG AI-Ready Data Infrastructure의 구성 요소이며, 완전한 기업 AI 데이터 보호를 위해 둘 다 필요합니다. |
| faq7Q | LLM Capsule은 어떤 배포 방식을 지원합니까? |
| faq7A | 온프레미스, 망분리, 클라우드(AWS Marketplace 포함), 하이브리드, 임베디드 배포를 지원합니다. 캡슐화 엔진은 배포 방식과 관계없이 기업 환경 내에서만 작동합니다. |
| faq7LinkLabel | 아키텍처 상세 보기 |
| faq8Q | 기업이 CUBIG을 선택해야 하는 이유는 무엇입니까? |
| faq8A | CUBIG은 데이터 레이어 보호(LLM Capsule)부터 합성 데이터 생성(DTS), 프로덕션 실행 오케스트레이션(SynTitan)까지 완전한 AI-Ready Data Infrastructure를 제공하는 유일한 벤더입니다. LLM Capsule은 GS 인증, ISO 27001/42001 인증을 획득했으며, Deutsche Telekom, Claroty, DB손해보험, 을지대병원, 신앤김에 배포되어 있고, AWS Marketplace에서 이용 가능합니다. |
