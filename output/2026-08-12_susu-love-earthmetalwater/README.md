# 수수 2월차 W5② — "오행별 연애할 때 하는 행동 (토·금·수 편)"

- **회차**: 2월차 Week 5 · 피드② (기획안 기준) — 목·화 편(W5①)의 짝
- **훅 포인트**: 시리즈 저장 유도 / **목표**: 저장·시리즈 완결
- **형식**: 카드뉴스 6장 (1080×1350, @2x)
- **테마**: 한지 화이트 + 토(황토 #C8973A)·금(강철 #52565C)·수(물빛 #3F5A6B) + 하트
- **발행 권장**: 목요일 오후 7~9시

## 슬라이드 구성
| # | 내용 |
|:-:|:--|
| 01 | 커버 — 토·금·수 편 + "목·화 편이랑 같이 저장" |
| 02 | 토(土) 연애 (안정형) — 행동 3 + 매력/조심 |
| 03 | 금(金) 연애 (원칙형) — 행동 3 + 매력/조심 |
| 04 | 수(水) 연애 (감성형) — 행동 3 + 매력/조심 |
| 05 | 오행별 잘 맞는 상대 (5원소 궁합 요약) |
| 06 | CTA — "5원소 다 모았죠?" 시리즈 저장 + 프로필 링크 + 궁합편 예고 |

캡션·해시태그·첫 댓글: `캡션.txt` 참조. 해시태그 고정: #사주 #오행 #사주팔자 #안산사주 #안산

## 재생성/수정
```bash
node output/2026-08-12_susu-love-earthmetalwater/build-slides.mjs
PUPPETEER_EXECUTABLE_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" \
  node scripts/html-carousel-gen.js --topic 2026-08-12_susu-love-earthmetalwater
```
- 원소별 연애 행동은 build-slides.mjs 의 loveSlide() 호출 인자만 수정.

## 발행
자동 업로드 없음. slide-01~06.png 를 순서대로 @susu.oheng 에 수동 업로드.
