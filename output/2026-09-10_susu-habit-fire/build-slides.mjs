// 수수 "지치게 하는 습관 + 쉼 처방" — 불(火) 편 — 6장
// 도발+처방 포맷. 비판은 '행동/습관'에만 한정(정체성 비난 금지). 반드시 균형 처방(水·金)과 짝. 火과다체크와 각도차.
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  fire: '#B0433F', water: '#3F5A6B', metal: '#7C7F86',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

const HABITS = [
  '쉬는 날에도 뭔가 안 하면 불안해서 계속 일을 벌인다',
  '감정이 확 올라오면 그 자리에서 다 쏟아낸다',
  '동시에 여러 개 벌여놓고 다 붙잡고 있는다',
];
const CURES = [
  { el: '水', color: C.water, t: '하루 10분, 진짜 아무것도 안 하는 시간 정해두기' },
  { el: '金', color: C.metal, t: '벌인 것 중 하나는 오늘 "끝"이라고 매듭짓기' },
  { el: '水', color: C.water, t: '욱하면 바로 말고, 물 한 잔 마시고 3초만' },
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
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(176,67,63,0.08), transparent 55%);pointer-events:none}
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
    <div class="label" style="margin-bottom:28px">불(火) 타입 · 나도 모르게</div>
    <div style="font-size:70px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      나를 <span style="color:${C.fire}">방전시키는</span><br/>습관 3가지</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      성격 얘기가 아니에요. 바꿀 수 있는 '습관' 얘기예요.</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">뜨끔했으면 저장하고 하나씩 🔥</div>
` + foot;

// 02 왜
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">왜 자꾸 지칠까</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    불은 <span style="color:${C.fire}">확 타오르고</span><br/>확 꺼져요</div>
  <div style="position:absolute;top:470px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    불(火) 기운이 강하면 화력이 최고지만, 그만큼 금방 방전돼요. 문제는 성격이 아니라, 그걸 더 태우는 <b>몇 가지 습관</b>이에요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    습관은 바꾸면 되니까, 자책 말고 가볍게 봐요.</div>
  ${handle()}
` + foot;

// 03 습관 3
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이런 습관, 널 지치게 해</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    혹시 <span style="color:${C.fire}">이러고 있진</span> 않아요?</div>
  <div style="position:absolute;top:380px;left:90px;right:96px;display:flex;flex-direction:column;gap:24px">
    ${HABITS.map((t, i) => `
      <div style="display:flex;align-items:flex-start;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:18px;padding:28px 30px">
        <span style="font-size:34px;font-weight:800;color:${C.fire};flex:none">0${i + 1}</span>
        <span style="font-size:31px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 처방
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">대신 이렇게 쉬어요</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    넘치는 불엔 <span style="color:${C.water}">水</span>·<span style="color:${C.metal}">金</span> 한 스푼</div>
  <div style="position:absolute;top:380px;left:90px;right:96px;display:flex;flex-direction:column;gap:24px">
    ${CURES.map(c => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${c.color};border-radius:18px;padding:26px 30px">
        <div style="width:56px;height:56px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${c.color};display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:${c.color}">${c.el}</div>
        <span style="font-size:30px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${c.t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    셋 다 아니어도 돼요. 오늘 딱 하나만 해봐요.</div>
  ${handle()}
` + foot;

// 05 응원
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그리고 이 말은 꼭</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:76px 54px;color:${C.bg};text-align:center">
    <div style="font-size:52px;font-weight:800;line-height:1.4;letter-spacing:-0.02em;word-break:keep-all">
      불은 끄는 게 아니라,<br/><span style="color:${C.gold}">아껴 쓰는 거예요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    당신의 열정은 여전히 최고의 무기예요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 나를 위한 쉼</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오늘은 <span style="color:${C.coral}">덜 태워요</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    이거 딱 내 얘기다 싶은 불(火) 친구 있으면 태그해서, 같이 쉬어가요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 사주에 불이 얼마나 있는지 알면, 쉼도 맞춤으로 챙길 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 火 친구 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
