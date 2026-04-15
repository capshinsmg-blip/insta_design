# insta-carousel-builder — Claude Code 지시서

> 이 프로젝트는 Claude Code에서 직접 실행하는 인스타 캐러셀 자동 제작 도구입니다.
> 팀원이 "이 주제로 캐러셀 만들어줘"라고 요청하면 **리서치 → 9장 프롬프트 설계 → 나노바나나 Pro 생성 → 품질 검증**까지 수행합니다.

---

## 즉시 실행 원칙

사용자가 아래처럼 요청하면 `/carousel-new <주제>` 파이프라인을 실행합니다:

- "바이브코딩으로 캐러셀 만들어줘"
- "AI 글쓰기 7가지 꿀팁으로 인스타 카드뉴스 써줘"
- "챗GPT 프롬프트 주제로 캐러셀 9장 만들자"

수동 호출: `/carousel-research`, `/carousel-prompt`, `/carousel-gen`, `/carousel-quality`

---

## 기본 산출물 — 9장 풀세트

**모든 캐러셀 요청은 기본적으로 9장 세트를 생산합니다:**
- Cover 1장 + 본문 7장 (예: TIP 01~07) + Outro 1장
- 각 슬라이드는 `templates/slides.*.json` 의 프롬프트로 정의

9장이 아닌 개수 지정은 사용자가 명시한 경우만 수용.

---

## 품질 킬라인 (9장 각각에 적용)

| # | 기준 | 허용 범위 |
|:---:|:---|:---|
| 1 | **해상도** | 1080×1350 (4:5 인스타 권장) |
| 2 | **한글 렌더링** | 오타 없어야 함 (`duplicate-check.js` 로 체크) |
| 3 | **디자인 DNA 일관성** | 9장 배경색/폰트/액센트 컬러 통일 |
| 4 | **Cover 후킹** | 3초 내 스크롤 멈춤 가능한 헤드라인 |
| 5 | **1장당 정보 밀도** | 한 슬라이드 = 한 포인트 (여러 개 = 혼란) |
| 6 | **CTA 슬라이드** | Outro 에 저장/공유/팔로우 중 **1개만** |
| 7 | **금칙어** | `knowledge/banned-words.json` 참조 |
| 8 | **톤** | 친근한 전문가. "안녕하세요 오늘은" 같은 filler 금지 |

→ `scripts/quality-check.js` 가 생성 직후 자동 검사. 한글 오타 감지 시 해당 슬라이드만 재생성.

---

## 작성 전 반드시 Read (생략 금지)

**매 작업마다**:
1. `knowledge/brand-facts.md` — 수치/브랜드 SSOT (이 파일 외 숫자 금지)
2. `knowledge/patterns/carousel-structure.md` — 9장 구조 공식
3. `templates/slides.example.json` — 프롬프트 템플릿
4. `output/_index.json` — 최근 패턴 → 의도적으로 다른 구조 선택

**상황별 추가 Read**:
- 주제 리서치: `knowledge/reference/` (있다면)
- 톤 잡기: `knowledge/tone/` (있다면)

---

## 3-Phase Pipeline (carousel-new 풀 파이프라인)

```
Phase 1 [리서치/기획]  → carousel-researcher 서브에이전트 dispatch
                          주제 요약, 9장 구조 초안, hook 후보 생성
Phase 2 [프롬프트 설계] → carousel-prompt-writer 서브에이전트 dispatch
                          9장 프롬프트 JSON 작성 (templates/slides.{topic}.json)
Phase 3 [이미지 생성]  → scripts/nanobanana-gen.py 실행
                          Gemini 3.0 Pro Image 로 9장 PNG 생성
Phase 4 [품질 검증]    → scripts/quality-check.js 자동 실행
                          → carousel-reviewer 서브에이전트 10항목 정성 채점
                          오타 감지 시 해당 슬라이드만 재생성
```

**서브에이전트 원칙**:
- 작성자(writer)와 검증자(reviewer) 분리 — 자기채점 편향 방지
- 메인 Claude는 오케스트레이터, 프롬프트는 writer 가 씀
- 파일 수정은 reviewer 가 아닌 메인/writer 가 함

---

## 출력 구조

```
output/{topic}/
├── slide-01.png ~ slide-09.png   # 1080×1350 PNG 9장
├── prompts.json                  # 사용된 프롬프트 (재현용)
├── metadata.json                 # 생성 시간/비용/품질 리포트
└── README.md                     # 주제 요약 + 사용 가이드
```

**명명 규칙**: `{YYYY-MM-DD}_{주제압축}` (공백 제거, 특수문자 금지)

---

## Zero-Inference 원칙

- 수치는 반드시 `brand-facts.md` 에서만 인용
- 이미지 생성 결과의 한글 오타 판정은 **스크립트가 수행** (LLM 판단 금지)
- 스크립트 경고 발생 시 무시하지 말고 재생성

---

## 환경 설정

`.env` 파일 (git 추적 금지):
```
GEMINI_API_KEY=AIza...         # https://aistudio.google.com/apikey
ANTHROPIC_API_KEY=              # (옵션) reviewer 서브에이전트 API 호출용
```

- Python ≥ 3.10 + `pip install python-dotenv google-genai`
- Node.js ≥ 20 (품질 체크 훅용)

---

## 주의사항

- 생성된 이미지는 **반드시 육안 검토 후 업로드** — AI 이미지 특유의 미세 왜곡 가능
- 자동 업로드 없음 (의도적 배제 — 인스타 알고리즘 패턴 탐지 회피)
- 하루 1~2 캐러셀 권장 (과도한 업로드 역효과)
- 9장 중 오타가 1~2장 나올 수 있음 (97.8% 실측치 = 9장당 0.2장 기대오류) → 해당 슬라이드만 재생성

---

## 참고

- **엔진**: `gemini-3-pro-image-preview` (별칭 `nano-banana-pro-preview`)
- **실측**: 9/9 성공, 4분 20초, 한글 97.8% (에이나우 2026-04-15)
- **원본 이관**: 에이나우 내부 `nanobanana-carousel` Skill 의 오픈소스 버전
