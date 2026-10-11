// 수수 "나를 지치게 하는 습관 + 나 챙기기 처방" — 물(水) 편 — 6장 (발행 10/22)
// 복제 원본: 2026-09-18_susu-habit-earth (HABITS/CURES/MAIN/커버 문구만 교체, 헬퍼·레이아웃 동일)
// 도발+위로. 비판은 '습관(행동)'에만, 정체성 비난 없음. 반드시 처방(木·火·土)과 짝.
// 명리: 戌月(土) 水 중립 → 곧 亥月(水). "눌린다/약하다" 단정 없이 '고이기 쉬운 때' 톤.
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  earth: '#C8973A', wood: '#5E7C63', water: '#3F5A6B', fire: '#B0433F', metal: '#7C7F86',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;
const MAIN = C.water;

const HABITS = [
  '힘들어도 혼자 삭이고 아무한테도 말 안 한다',
  '밤에 생각이 많아져서 자꾸 늦게 잔다',
  '"조금만 더 생각하고" 하다가 시작을 미룬다',
];
const CURES = [
  { el: '木', color: C.wood, t: '생각 끝나기 전에 일단 한 걸음만 시작하기' },
  { el: '火', color: C.fire, t: '오늘 있었던 일 하나, 누구한테든 말해보기' },
  { el: '土', color: C.earth, t: '잘 시간 정해두고 그 시간엔 폰 내려놓기' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(63,90,107,0.10), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:800;letter-spacing:0.06em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:320px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">물(水) 타입 · 나도 모르게</div>
    <div style="font-size:70px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      혼자 삭이느라<br/><span style="color:${C.coral}">나를 가라앉히는</span> 습관 3</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      곧 겨울, 물(水) 기운이 제일 먼저 지치는 계절 앞에서. 성격 얘기가 아니라 바꿀 수 있는 '습관' 얘기예요.</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">뜨끔했으면 저장하고 하나씩 🌊</div>
` + foot;

// 02 왜
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">왜 자꾸 가라앉을까</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    혼자 삭이다,<br/><span style="color:${MAIN}">나까지 가라앉아요</span></div>
  <div style="position:absolute;top:470px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    물(水) 기운이 강하면 깊게 생각하고 오래 품는 결이 있어요. 근데 <span style="white-space:nowrap">흙(土)의</span> 달인 지금은 그 깊이가 고이기 쉬워서, 정작 <b>말할 타이밍</b>을 놓치고 생각 속에 혼자 잠기게 돼요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    겨울(水) 들어가기 전에, 습관 하나만 가볍게 손봐요.</div>
  ${handle()}
` + foot;

// 03 습관 3
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이런 습관, 널 가라앉혀</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    혹시 <span style="color:${MAIN}">이러고 있진</span> 않아요?</div>
  <div style="position:absolute;top:380px;left:90px;right:96px;display:flex;flex-direction:column;gap:24px">
    ${HABITS.map((t, i) => `
      <div style="display:flex;align-items:flex-start;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${MAIN};border-radius:18px;padding:28px 30px">
        <span style="font-size:34px;font-weight:800;color:${MAIN};flex:none">0${i + 1}</span>
        <span style="font-size:31px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 처방
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">대신 이렇게 해봐요</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    이번 주엔 <span style="color:${C.coral}">하나만 띄워요</span></div>
  <div style="position:absolute;top:380px;left:90px;right:96px;display:flex;flex-direction:column;gap:24px">
    ${CURES.map(c => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${c.color};border-radius:18px;padding:26px 30px">
        <div style="width:56px;height:56px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${c.color};display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:${c.color}">${c.el}</div>
        <span style="font-size:29px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${c.t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    셋 다 아니어도 돼요. 오늘 딱 하나만 해봐요.</div>
  ${handle()}
` + foot;

// 05 응원
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그리고 이 말은 꼭</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:76px 54px;color:${C.bg};text-align:center">
    <div style="font-size:50px;font-weight:800;line-height:1.4;letter-spacing:-0.02em;word-break:keep-all">
      깊은 건 약점이 아니라,<br/><span style="color:${C.gold}">그냥 당신의 결이에요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    다만 가라앉기만 하지 않게, 한 가지만 띄워 올려요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 하나만 띄우기</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오늘 <span style="color:${C.coral}">한 마디만 꺼내요</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    딱 이 얘기다 싶은 물(水) 친구 있으면 태그해서, 같이 한 마디씩 꺼내봐요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 사주에 물(水)이 얼마나 있는지 알면, 나 챙기는 법도 맞춤으로 찾을 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 水 친구 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
