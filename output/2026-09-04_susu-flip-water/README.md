# 수수 "겉과 속이 다른 오행" 반전 시리즈 (水·木·火·土 4편)

- **포맷**: 인스타 인기 '겉vs속 반전 성격' → 오행에 접목(벤치마크 @seoa.notes, 댓글·태그 유발 최강). 9월 배치(트렌드 재구성 시즌2) 코어.
- **구조 6장**: 커버(반전 훅) → 오행 소개(좋고나쁨 없는 결) → 겉모습 4 → 속마음 4 → 공감+위로 → CTA(친구 태그 + 프로필).
- **목표**: 태그·저장·댓글 + 프로필 전환.
- **안전(감수 반영)**: 단정어 회피("혹시 당신…일지도", "이런 결") · "좋고 나쁨 없는 성격의 결" 병기 · 정체성 비난 없이 위로로 착지.
- **디자인**: 따뜻한 팔레트. 오행색은 뱃지·겉모습 포인트에만, 속마음은 코랄(겉=차가움/속=따뜻함 대비). 사람 말투.
- **金 제외**: 기존 신금·금 속마음 회차와 겹쳐 4편(水木火土)만 제작.

## 4편 폴더 / 발행일
| 편 | 폴더 | 발행 | 훅 |
|:--|:--|:--|:--|
| 水 | `2026-09-04_susu-flip-water` | 9/4 | 겉은 새침한데 알고 보면 정 다 퍼주는 사람 |
| 木 | `2026-09-11_susu-flip-wood` | 9/11 | "너 세 보여" 소리 듣는데 사실 제일 먼저 상처받는 사람 |
| 火 | `2026-09-16_susu-flip-fire` | 9/16 | 어딜 가나 분위기 메이커인데 집에 오면 방전되는 사람 |
| 土 | `2026-09-23_susu-flip-earth` | 9/23 | 무던해 보이는데 사실 혼자 다 짊어지는 사람 |

## ♻️ 복제법
`build-slides.mjs` 상단 **`F` 객체만 교체**(ko/han/color·coverHook·coverSub·introHead/Body·outer[4]·inner[4]·heardLine·comfort).

## 재생성 (PowerShell)
```powershell
$env:PUPPETEER_EXECUTABLE_PATH='C:\Program Files\Google\Chrome\Application\chrome.exe'
node "output\2026-09-04_susu-flip-water\build-slides.mjs"
node "scripts\html-carousel-gen.js" --topic 2026-09-04_susu-flip-water
```
각 편 캡션·해시태그·첫 댓글: 각 폴더 `캡션.txt`. 해시태그 고정: #사주 #오행 #사주팔자 #안산사주 #안산
