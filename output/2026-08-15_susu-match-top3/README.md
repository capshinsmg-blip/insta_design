# 수수 2월차 W7① — "잘 맞는 오행 궁합 Top 3 쌍"

- **회차**: 2월차 Week 7 · 피드① (기획안 기준)
- **훅 포인트**: "나랑 맞는 오행 찾았다" 저장 / **목표**: 저장·궁합
- **형식**: 카드뉴스 5장 (1080×1350, @2x)
- **테마**: 한지 화이트 + 원소별 색 + 하트, 상생(相生) 원리 기반
- **발행일**: 8/18(화)

## 슬라이드 구성
| # | 내용 |
|:-:|:--|
| 01 | 커버 — 궁합 Top3 + 상생 흐름(水→木→火→土) |
| 02 | TOP1 수(水)❤️목(木) — 水生木, 받쳐주고 성장 |
| 03 | TOP2 목(木)❤️화(火) — 木生火, 열정 시너지 |
| 04 | TOP3 화(火)❤️토(土) — 火生土, 품어주는 안정 |
| 05 | CTA — 3쌍 요약 + 저장 + 프로필 링크 + 다음 편 노력 궁합 |

캡션·해시태그·첫 댓글: `캡션.txt`. 해시태그 고정: #사주 #오행 #사주팔자 #안산사주 #안산

## 재생성/수정
```bash
node output/2026-08-15_susu-match-top3/build-slides.mjs
PUPPETEER_EXECUTABLE_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" \
  node scripts/html-carousel-gen.js --topic 2026-08-15_susu-match-top3
```
- 궁합 쌍/문구는 build-slides.mjs 의 pairSlide() 호출 인자만 수정.

## 발행
자동 업로드 없음. slide-01~05.png 를 순서대로 @susu.oheng 에 수동 업로드.
