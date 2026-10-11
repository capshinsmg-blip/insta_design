// 수수 2월차 W6② "갑목(甲木) 일간 — 리더십의 이면" — 주변 지목/태그형 6장
// 훅: 내 주변 갑목 1명씩은 있잖아요(3인칭 지목). 겉(리더십) → 이면(무게). 한지 화이트 + 갑목(포레스트 그린) + 잎.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  gap: '#4C7355', // 갑목 시그니처(깊은 포레스트 그린)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  gapbg: 'rgba(76,115,85,0.10)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const gapBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.gap};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${C.gap}">甲</span></div>`;
// 잎(나무) 불릿
const leaf = (s = 28, color = C.gap) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M4.5 19.5 C4 10 11 3.2 19.5 4 C20.3 12.5 13 20 4.5 19.5 Z" fill="${color}" fill-opacity="0.9"/><path d="M5 19 C9.5 14.5 14 10.5 18 7.5" stroke="#F7F2EC" stroke-opacity="0.5" stroke-width="1.2" stroke-linecap="round"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(76,115,85,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.gap}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버 — 주변 지목 + 이면 tease
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:288px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">일간 유형 · 甲木 갑목</div>
    <div style="font-size:76px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      늘 앞장서는 그 사람,<br/>혹시 <span style="color:${C.gap}">갑목(甲木)</span>?</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">내 주변에 꼭 한 명 있잖아요. 리더십 뒤에 숨은 이면, 지금 떠올랐다면 👀</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['어느 무리에서든 앞장서는 사람', '곧고 반듯해서 믿음직한 사람', '다 짊어지려다 지치는 사람'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.75">${leaf(28)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">그 사람 태그 준비하세요 ✦</div>
` + foot;

// 02 갑목 소개
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">일간(日干) · 甲木</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    하늘로 곧게 뻗는<br/><span style="color:${C.gap}">큰 나무</span></div>
  <div style="position:absolute;top:410px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    태어난 '날'이 정하는 나의 기운, 일간.<br/>갑목(甲木)은 그중 <b style="color:${C.gap}">아름드리 큰 나무</b>예요.<br/>무리의 기둥이자, 앞장서 뻗어가는 대들보죠.</div>
  <div style="position:absolute;top:800px;left:90px;right:90px;display:flex;align-items:center;gap:22px;background:${C.gapbg};border:1px solid ${C.gap}44;border-radius:20px;padding:30px 34px">
    ${gapBadge(76)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">甲木 · 갑목</div>
      <div style="margin-top:6px;font-size:26px;color:${C.sub};word-break:keep-all">곧고 강직한, 무리를 이끄는 큰 나무</div></div>
  </div>
  ${handle()}
` + foot;

// 03 겉모습 (주변 시선)
const outer = [
  '어느 무리에서든 앞장서요',
  '곧고 반듯해서 믿음직해요',
  '책임감이 강해 일을 떠맡아요',
  '자존심이 세고 쉽게 안 굽혀요',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">겉모습 · 이런 사람 있죠?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신 곁의 <span style="color:${C.gap}">갑목(甲木)</span>은</div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${outer.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 26px">
        ${leaf(32)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:28px;font-weight:700;color:${C.gap}">"그 사람이 하자면 하는" 카리스마 🌳</div>
  ${handle()}
` + foot;

// 04 리더십의 이면
const inner = [
  ['강해 보여도', '사실 어깨가 늘 무거워요'],
  ['굽히지 못해', '혼자 삭이며 외로워해요'],
  ['다 짊어지려다', '정작 자기를 못 챙겨요'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이면 · 사실은</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    리더십 뒤엔 <span style="color:${C.gap}">이런 무게</span>가</div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${inner.map(([a, b]) => `
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gap};border-radius:18px;padding:30px 34px">
        <div style="font-size:27px;font-weight:600;color:${C.sub}">${a}</div>
        <div style="margin-top:8px;font-size:31px;font-weight:800;color:${C.ink};word-break:keep-all">${b}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    부러질지언정, <b style="color:${C.ink}">잘 휘어지지 않는 나무</b>라서요.</div>
  ${handle()}
` + foot;

// 05 그 사람에게
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그 사람에게</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    그 사람에게도<br/><span style="color:${C.gap}">기댈 나무</span>가 필요해요</div>
  <div style="position:absolute;top:480px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    늘 먼저 주고, 늘 앞장서던 사람.<br/>그래서 정작 <b style="color:${C.gap}">자기 얘긴 잘 못 해요.</b><br/><br/>"잘하고 있다"는 말 한마디,<br/>먼저 건네주면 그 큰 나무도 쉬어가요.</div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:29px;color:${C.sub};line-height:1.6">오늘, 그 사람에게 먼저 손 내밀어 볼까요?</div>
  ${handle()}
` + foot;

// 06 CTA — 태그 + 프로필 링크
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.gap}">TAG · 甲木</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    떠오른 그 사람,<br/><span style="color:${C.gap}">태그하세요</span> 👇</div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      그 사람이 바로 갑목(甲木)일지도.<br/>내 일간도 프로필 링크에서 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">다음 편은 오행 궁합 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
