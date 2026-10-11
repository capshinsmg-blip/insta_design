// 수수 2월차 W5① "오행별 연애할 때 하는 행동 (목·화 편)" — 연애/공감형 6장
// 훅: 나 맞아요? 댓글 참여. 한지 화이트 + 목(녹색)·화(빨강) 포인트 + 하트 모티프.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${color}">${han}</span></div>`;
const heart = (s = 32, color = C.coral) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.14em}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="color:${C.coral};margin-bottom:30px">오행 연애 · 木 火 편</div>
    <div style="font-size:78px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      오행별<br/><span style="color:${C.coral}">연애할 때</span> 하는 행동</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">이번 편은 목(木)·화(火). "나 이거 완전 맞는데?" 싶으면 댓글로 🙋</div>
  </div>
  <div style="position:absolute;top:840px;left:90px;display:flex;align-items:center;gap:26px">
    <div style="display:flex;align-items:center;gap:14px">${elBadge('木', C.wood, 74)}<span style="font-size:30px;font-weight:700;color:${C.wood}">목</span></div>
    ${heart(30, C.coral)}
    <div style="display:flex;align-items:center;gap:14px">${elBadge('火', C.fire, 74)}<span style="font-size:30px;font-weight:700;color:${C.fire}">화</span></div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">다음 편은 土·金·水 · 저장각 ✦</div>
` + foot;

// 02 목 연애 행동
const woodActs = [
  '좋으면 직진, 밀당은 잘 못 해요',
  '데이트 계획을 주도적으로 짜요',
  '"같이 더 잘되자" 함께 성장하려 해요',
  '한번 빠지면 앞뒤 없이 훅 빠져요',
];
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${elBadge('木', C.wood)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">목(木)의 연애</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">봄·나무 · 직진형</div></div></div>
  <div style="position:absolute;top:270px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    목(木)은 <span style="color:${C.wood}">이렇게</span> 사랑해요</div>
  <div style="position:absolute;top:440px;left:90px;right:90px;display:flex;flex-direction:column;gap:26px">
    ${woodActs.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 26px">
        ${heart(34, C.wood)}<span style="font-size:31px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:28px;font-weight:700;color:${C.wood}">썸부터 직진하는 스타일 🌿</div>
  ${handle()}
` + foot;

// 03 목 매력/조심
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label" style="color:${C.wood}"><span style="color:${C.wood}">木 · 이런 점은 참고</span></div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    목(木) 연애의 <span style="color:${C.wood}">매력과 주의</span></div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.wood};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.wood};letter-spacing:0.02em">이런 게 매력 ♥</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">듬직하게 리드하고, 마음을 솔직하게 표현해요</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.sub};letter-spacing:0.02em">이건 조심</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">지기 싫어서, 다툴 때 잘 안 물러나요</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    목(木)에겐 <b style="color:${C.ink}">함께 성장할 사람</b>이 잘 맞아요.</div>
  ${handle()}
` + foot;

// 04 화 연애 행동
const fireActs = [
  '좋으면 온 세상이 다 알아요 (표현 화끈)',
  '연락도, 애정표현도 자주 해요',
  '촉으로 상대 마음을 다 읽어요',
  '금방 뜨거워지고, 삐지기도 빨라요',
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${elBadge('火', C.fire)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">화(火)의 연애</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">여름·불 · 열정형</div></div></div>
  <div style="position:absolute;top:270px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    화(火)는 <span style="color:${C.fire}">이렇게</span> 사랑해요</div>
  <div style="position:absolute;top:440px;left:90px;right:90px;display:flex;flex-direction:column;gap:26px">
    ${fireActs.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 26px">
        ${heart(34, C.fire)}<span style="font-size:31px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:28px;font-weight:700;color:${C.fire}">사랑에 진심인 로맨티스트 🔥</div>
  ${handle()}
` + foot;

// 05 화 매력/조심
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.14em;color:${C.fire}">火 · 이런 점은 참고</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    화(火) 연애의 <span style="color:${C.fire}">매력과 주의</span></div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.fire};letter-spacing:0.02em">이런 게 매력 ♥</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">표현이 뜨겁고, 이벤트와 분위기를 잘 챙겨요</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.sub};letter-spacing:0.02em">이건 조심</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">감정 기복이 커서, 뜨겁다 금방 식기도 해요</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    화(火)에겐 <b style="color:${C.ink}">차분히 받아주는 사람</b>이 잘 맞아요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}">COMMENT · 나 맞아요?</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나 이거<br/><span style="color:${C.coral}">완전 맞는데?</span> 🙋</div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      댓글에 내 오행(또는 MBTI)을 남겨주세요.<br/>다음 편은 토·금·수 연애 편이에요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편 土·金·水 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
