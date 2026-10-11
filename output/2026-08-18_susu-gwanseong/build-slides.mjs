// 수수 2월차 W8② "관성(官星) 강한 여자의 연애 패턴" — 공감형 6장
// 카피: 멀티에이전트 초안+명리감수+통합(검증본, 편관 그림자·젠더클리셰 보정). 한지 화이트 + 관성(와인로즈) + 하트.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  gwan: '#9B3B57', // 관성 시그니처(와인로즈)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  gwanbg: 'rgba(155,59,87,0.09)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const heart = (s = 30, color = C.gwan) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(155,59,87,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.gwan}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">십신 유형 · 官星 관성</div>
    <div style="font-size:66px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
      쉽게 안 빠져요.<br/>근데 한번 빠지면,<br/><span style="color:${C.gwan}">오래 가요</span></div>
    <div style="margin-top:30px;font-size:29px;color:${C.sub};line-height:1.55;word-break:keep-all">사주 속 '관성(官星)'이 진한 당신의 연애 패턴 — 혹시 이거 완전 나?</div>
  </div>
  <div style="position:absolute;top:880px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['아무나 안 만난다', '밀당은 서툴다', '한번 정하면 오래 간다'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.85">${heart(30)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.gwan};letter-spacing:0.02em">이거 나잖아 싶으면 저장 ✦</div>
` + foot;

// 02 관성이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">관성(官星)이란?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    나를 <span style="color:${C.gwan}">다스리고 이끄는</span> 기운</div>
  <div style="position:absolute;top:410px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    원래는 <b style="color:${C.gwan}">명예·규율·책임</b>을 두루 뜻해요.<br/>여성의 사주에선 이 별이 '이성과 관계'를<br/>보는 축이 되기도 하죠.<br/>연애는 그 여러 결 중 하나예요.</div>
  <div style="position:absolute;top:850px;left:90px;right:90px;display:flex;align-items:center;gap:20px;background:${C.gwanbg};border:1px solid ${C.gwan}44;border-radius:20px;padding:28px 32px">
    ${heart(46)}<span style="font-size:29px;font-weight:700;color:${C.ink};word-break:keep-all">그래서 관성이 또렷하면, 사랑을 대하는 결도 분명해요</span>
  </div>
  ${handle()}
` + foot;

// 03 연애 패턴 (이거 나잖아)
const traits = [
  '"아무나 안 만나요." 끌림보다 신뢰가 먼저 — 기준이 분명해요.',
  '"밀당은 잘 못해요." 좋으면 티가 나고, 아니면 선을 확실히 그어요.',
  '"한번 마음 정하면 오래 가요." 약속도 신뢰도 소중히 지켜요.',
  '"말보다 행동을 봐요." 책임감 있는 태도에서 마음이 움직여요.',
  '책임감이 커서, 가끔은 관계를 좀 무겁게 짊어질 때도 있어요.',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:92px;left:90px" class="label">이거 나잖아 · 연애 패턴</div>
  <div style="position:absolute;top:160px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.26;letter-spacing:-0.025em;word-break:keep-all">
    관성이 진한 사람의 <span style="color:${C.gwan}">사랑</span></div>
  <div style="position:absolute;top:320px;left:90px;right:90px;display:flex;flex-direction:column;gap:15px">
    ${traits.map(t => `
      <div style="display:flex;align-items:flex-start;gap:18px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:15px;padding:20px 24px">
        <span style="margin-top:3px;flex:none">${heart(26)}</span><span style="font-size:27px;font-weight:500;color:${C.ink};line-height:1.42;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:100px;font-size:25px;color:${C.sub};word-break:keep-all">하나라도 끄덕였다면, 사주 속 관성이 또렷한 편일 수 있어요.</div>
  <div style="position:absolute;bottom:66px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 정관 vs 편관
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">같은 관성, 다른 끌림</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    정관 <span style="color:${C.sub};font-weight:700">vs</span> 편관</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:26px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gwan};border-radius:18px;padding:32px 36px">
      <div style="font-size:30px;font-weight:800;color:${C.gwan}">정관 (正官) · 신뢰형</div>
      <div style="margin-top:12px;font-size:29px;font-weight:500;color:${C.ink};line-height:1.55;word-break:keep-all">반듯하고 안정적인 끌림. 신뢰가 쌓일수록<br/>깊어지는, 믿음 먼저인 사랑.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.ink};border-radius:18px;padding:32px 36px">
      <div style="font-size:30px;font-weight:800;color:${C.ink}">편관 (偏官·칠살) · 몰입형</div>
      <div style="margin-top:12px;font-size:29px;font-weight:500;color:${C.ink};line-height:1.55;word-break:keep-all">강렬하고 카리스마 있는 끌림. 단, 그 긴장감이<br/>통제로 기울 땐 스스로 선을 지켜주면 좋아요.</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;font-weight:700;color:${C.gwan}">나는 신뢰형? 몰입형? 🤍🖤</div>
  ${handle()}
` + foot;

// 05 밸런스
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 강약은 성향</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    진지한 게 <span style="color:${C.gwan}">잘못은 아니에요</span></div>
  <div style="position:absolute;top:390px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gwan};border-radius:18px;padding:30px 34px">
      <div style="font-size:24px;font-weight:800;color:${C.gwan}">관성이 진하면</div>
      <div style="margin-top:10px;font-size:28px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">사랑에 진지하고 책임감이 깊어요. 단, 너무 강하면 상대 기준에 나를 자꾸 맞추게 될 수도 — 내 페이스를 지키는 게 포인트.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:30px 34px">
      <div style="font-size:24px;font-weight:800;color:${C.sub}">관성이 옅으면</div>
      <div style="margin-top:10px;font-size:28px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">형식보다 감정의 흐름대로, 관계에 덜 얽매이는 자유로운 결이에요.</div></div>
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    강약은 좋고 나쁨이 아니라, <b style="color:${C.ink}">사랑을 대하는 나만의 결</b>이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.gwan}">SAVE · 官</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.26;letter-spacing:-0.025em;word-break:keep-all">
    진지한 당신의 연애는,<br/><span style="color:${C.gwan}">틀리지 않았어요</span></div>
  <div style="position:absolute;top:500px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      정관인지 편관인지, 얼마나 진한지는<br/>내 사주 원국이 알려줘요.</div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:90px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">끝까지 지키는 그 마음, 가끔은 스스로에게도 건네주세요 🤍</div>
  <div style="position:absolute;bottom:66px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
