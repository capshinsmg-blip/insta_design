// 수수 2월차 W6① "신금(辛金) 일간 — 차갑게 보이지만 사실은" — 공감 자극형 6장
// 훅: 저 맞아요(신금 당사자 공감). 겉모습 → 속마음 대비. 한지 화이트 + 신금(강철/보석) 포인트.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  metal: '#52565C', // 신금 시그니처(정제된 금속/보석)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  metalbg: 'rgba(82,86,92,0.09)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const sinBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.metal};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${C.metal}">辛</span></div>`;
// 보석(젬) 불릿
const gem = (s = 28, color = C.metal) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M5 4 H19 L22 9.5 L12 21 L2 9.5 Z" fill="${color}" fill-opacity="0.9"/><path d="M2 9.5 H22" stroke="#F7F2EC" stroke-opacity="0.55" stroke-width="1"/><path d="M9 4 L7.5 9.5 L12 21 M15 4 L16.5 9.5 L12 21" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="0.8"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(82,86,92,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.metal}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:288px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">일간 유형 · 辛金 신금</div>
    <div style="font-size:76px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      차갑게 보이지만<br/><span style="color:${C.metal}">사실은 여린</span> 사람</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">혹시 신금(辛金) 일간인가요? "저 맞아요" 싶으면 끝까지 👀</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['깔끔하고 세련됐다는 말을 들어요', '예민한데, 정은 은근 많아요', '상처를 오래 담아두는 편이에요'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.7">${gem(28)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">내 일간, 프로필에서 확인 ✦</div>
` + foot;

// 02 일간이란 + 신금
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">일간(日干)이란?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    태어난 날이 정하는<br/><span style="color:${C.metal}">나의 기운</span></div>
  <div style="position:absolute;top:410px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    사주 여덟 글자 중, 태어난 <b style="color:${C.metal}">'날'의 천간</b>이<br/>나를 대표하는 <b style="color:${C.metal}">일간</b>이에요.<br/>오행보다 한 겹 더 구체적인 '나 자신'이죠.</div>
  <div style="position:absolute;top:800px;left:90px;right:90px;display:flex;align-items:center;gap:22px;background:${C.metalbg};border:1px solid ${C.metal}44;border-radius:20px;padding:30px 34px">
    ${sinBadge(76)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">辛金 · 신금</div>
      <div style="margin-top:6px;font-size:26px;color:${C.sub};word-break:keep-all">보석처럼 다듬어진, 예민하고 빛나는 금(金)</div></div>
  </div>
  ${handle()}
` + foot;

// 03 겉모습
const outer = [
  '깔끔하고 세련된 첫인상',
  '말과 행동에 군더더기가 없어요',
  '예민하고 까다로워 보여요',
  '자존심이 세고 곁을 쉽게 안 줘요',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">겉모습 · 이렇게 보여요</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    신금(辛金)은 <span style="color:${C.metal}">이런 사람</span></div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${outer.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 26px">
        ${gem(32)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:28px;font-weight:700;color:${C.metal}">완벽주의, 디테일에 강해요 💎</div>
  ${handle()}
` + foot;

// 04 속마음
const inner = [
  ['무심해 보여도', '사실 상처를 잘 받는 여린 마음이에요'],
  ['까칠해 보여도', '인정과 애정에 목마른 사람이에요'],
  ['냉정해 보여도', '좋아하는 사람껜 한없이 다정해요'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">속마음 · 사실은</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    차가운 게 아니라 <span style="color:${C.metal}">섬세한 것</span></div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${inner.map(([a, b]) => `
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.metal};border-radius:18px;padding:30px 34px">
        <div style="font-size:27px;font-weight:600;color:${C.sub}">${a}</div>
        <div style="margin-top:8px;font-size:31px;font-weight:800;color:${C.ink};word-break:keep-all">${b}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    예민함은 결국, <b style="color:${C.ink}">세상을 섬세하게 느끼는 힘</b>이에요.</div>
  ${handle()}
` + foot;

// 05 신금인 당신에게 (위로/강점)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">신금인 당신에게</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    그 <span style="color:${C.metal}">날카로움</span>은<br/>사실 재능이에요</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    남들이 놓치는 디테일을 잡아내고,<br/>아닌 건 아니라 말할 줄 아는 사람.<br/><br/>그 예민함과 기준이<br/><b style="color:${C.metal}">당신을 특별하게</b> 만들어요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    곁을 내준 사람에겐, 누구보다 진심인 사람이니까요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.metal}">저 맞아요? · 辛金</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:72px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    저 완전<br/><span style="color:${C.metal}">신금인데요?</span> 🙋</div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 일간이 뭔지, 프로필 링크에서 확인해보세요.<br/>댓글엔 "저 신금이요 🙋" 남겨주면 반가워요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">다음 편은 甲木 일간 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
