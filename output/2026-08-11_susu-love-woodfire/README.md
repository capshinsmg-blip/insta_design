# 수수 2월차 W5① — "오행별 연애할 때 하는 행동 (목·화 편)"

- **회차**: 2월차 Week 5 · 피드① (기획안 기준) — 2월차 연애/궁합 시리즈 시작
- **훅 포인트**: "나 맞아요?" 댓글 참여 / **목표**: 공감·댓글
- **형식**: 카드뉴스 6장 (1080×1350, @2x)
- **테마**: 한지 화이트 + 목(녹색 #5E7C63)·화(빨강 #B0433F) + 하트 모티프
- **발행 권장**: 화요일 오후 7~9시

## 슬라이드 구성
| # | 내용 |
|:-:|:--|
| 01 | 커버 — "오행별 연애할 때 하는 행동" 木❤️火 편 |
| 02 | 목(木) 연애 행동 4가지 (직진형) |
| 03 | 목(木) 매력 vs 조심 |
| 04 | 화(火) 연애 행동 4가지 (열정형) |
| 05 | 화(火) 매력 vs 조심 |
| 06 | CTA — "나 이거 완전 맞는데?" 댓글 유도 + 프로필 링크 + 다음 편 土·金·水 |

캡션·해시태그·첫 댓글: `캡션.txt` 참조. (해시태그는 전 회차 고정: #사주 #오행 #사주팔자 #안산사주 #안산)

## 재생성/수정
```bash
node output/2026-08-11_susu-love-woodfire/build-slides.mjs
PUPPETEER_EXECUTABLE_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" \
  node scripts/html-carousel-gen.js --topic 2026-08-11_susu-love-woodfire
```
- 연애 행동 문구는 build-slides.mjs 상단 배열(`woodActs`, `fireActs`)만 수정.

## 발행
자동 업로드 없음. slide-01~06.png 를 순서대로 @susu.oheng 에 수동 업로드.
