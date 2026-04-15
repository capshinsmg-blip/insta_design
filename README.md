# insta-carousel-builder

> **Claude Code 하네스로 돌아가는 인스타 캐러셀 자동 제작 도구.**
> 나노바나나 Pro(Gemini 3.0 Pro Image) 기반. **한글 97.8% 정확도 실증.**

AI 이미지 도구로 인스타 캐러셀을 만들면 한글이 깨지고 AI 티가 나서 결국 수작업/외주로 돌아간다 — 는 통념을, Gemini 3.0 Pro Image 하나로 깨는 레포입니다.

**9장 4분, 500원, 한글 97.8% (실측)**.

---

## 이게 뭐예요?

에이나우(AINOW) 내부에서 실사용 중인 인스타 캐러셀 생성 파이프라인을 오픈소스로 공개한 버전입니다.

- ✅ `.env` 에 Gemini API 키 하나 + `npx` 한 줄이면 재현 가능
- ✅ `templates/slides.example.json` 의 프롬프트 9개만 수정하면 본인 콘텐츠로 교체
- ✅ Claude Code `.claude/agents/` + `.claude/commands/` 하네스로 품질 검증까지 자동화
- ✅ 디자인 DNA(`#131316` + `#CF5C3F` + Pretendard) 유지된 채로 주제만 바뀜

---

## 빠른 시작 (Quickstart)

```bash
# 1. 레포 clone
git clone https://github.com/ainow/insta-carousel-builder.git
cd insta-carousel-builder

# 2. 의존성 설치
pip install python-dotenv google-genai
npm install  # (optional, 품질 체크 훅용)

# 3. API 키 세팅
cp .env.example .env
# .env 열어서 GEMINI_API_KEY 채우기 — https://aistudio.google.com/apikey

# 4. 기본 예제 생성 (에이나우 Claude Code 7가지 꿀팁)
python scripts/nanobanana-gen.py --topic claude-code-tips

# 5. 본인 주제로 수정
# templates/slides.example.json 을 복사해서 프롬프트 9장 수정
cp templates/slides.example.json templates/slides.my-topic.json
# 수정 후:
python scripts/nanobanana-gen.py --topic my-topic --slides templates/slides.my-topic.json
```

결과: `output/{topic}/slide-01.png ~ slide-09.png`

---

## 왜 이 레포인가? (Why)

시중의 AI 이미지 캐러셀 도구 대부분은 3가지 중 하나가 부족합니다:

| 문제 | 이 레포의 해법 |
|:---|:---|
| ❌ 한글 깨짐 | ✅ Gemini 3.0 Pro Image — 한글 네이티브 렌더링 (실측 97.8%) |
| ❌ 매번 다른 디자인 | ✅ `common_style` 고정 DNA로 9장 통일 |
| ❌ 생성 후 일일이 포토샵 | ✅ 1080×1350 PNG 바로 업로드 가능 |

---

## 구조

```
insta-carousel-builder/
├── CLAUDE.md                   # Claude Code 지시서 (에이전트 진입점)
├── .claude/
│   ├── agents/                 # 서브에이전트 (researcher / writer / reviewer)
│   └── commands/               # /carousel-new, /carousel-quality 등
├── knowledge/                  # 브랜드 팩트 / 톤 / 패턴 (커스터마이즈 포인트)
├── templates/
│   └── slides.example.json    # 9장 프롬프트 예제 (복사해서 수정)
├── scripts/
│   ├── nanobanana-gen.py      # 이미지 생성기 (Python, Gemini SDK)
│   ├── quality-check.js       # PostToolUse 훅 (Node.js)
│   └── duplicate-check.js
├── output/                     # 생성 결과 (gitignored)
└── docs/GETTING-STARTED.md
```

---

## 라이선스

MIT. 자유롭게 포크/수정/재배포. 크레딧은 환영이지만 강제 아닙니다.

---

## 만든 곳

**에이나우(AINOW)** — AI 생산자 양성 플랫폼.
- 인스타그램: [@ai.ainow](https://instagram.com/ai.ainow)
- 이 레포가 실제로 어떻게 만들어졌는지 궁금하면: [에이나우 유튜브 채널](https://youtube.com/@신영선의AI탐구)

> *"AI 이미지는 한글이 깨진다"는 통념이 2026년 현재 깨졌습니다.
> 이 레포는 그 증거입니다.*
