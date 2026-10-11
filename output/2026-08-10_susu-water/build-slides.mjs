// 수수 4주차 피드① "수(水) 오행 — 감수성과 직관의 기운" — 감성 유도형 5장 (오행 시리즈 마무리)
// 톤: 감성/시적. 저장 유도 없음. 프로필 링크 사주 조회만 유도.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  water: '#3F5A6B', // 수 시그니처(물빛)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  waterbg: 'rgba(63,90,107,0.10)',
};
const TOTAL = 5;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const waterBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.water};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${C.water}">水</span></div>`;
// 물방울 불릿
const drop = (s = 30, color = C.water) => `<svg width="${s}" height="${Math.round(s * 1.15)}" viewBox="0 0 24 28" fill="none"><path d="M12 3 C12 3 5 13 5 18 a7 7 0 1 0 14 0 C19 13 12 3 12 3 Z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(63,90,107,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.water}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버 — 감성 훅
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:430px;left:90px;right:90px">
    <div class="label" style="margin-bottom:32px">오행 타입 · 水 수</div>
    <div style="font-size:80px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      굳이 말하지 않아도<br/><span style="color:${C.water}">다 느끼는 사람</span></div>
    <div style="margin-top:32px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">감수성과 직관의 기운, 수(水) 오행 이야기.</div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:29px;color:${C.sub};font-style:italic">혹시, 당신의 이야기일까요?</div>
  <div style="position:absolute;bottom:80px;left:90px;font-size:24px;font-weight:600;color:${C.water};letter-spacing:0.02em">천천히 넘겨보세요 ✦</div>
` + foot;

// 02 수 기운이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${waterBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">수(水) 오행</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">겨울 · 물</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    겨울 물처럼 <span style="color:${C.water}">깊고 고요한</span> 기운</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    수(水)는 겨울, 물의 기운이에요.<br/>드러내지 않아도 세상을 깊이 느끼고,<br/><b style="color:${C.water}">직관으로 흐름을 읽는</b> 감수성의 에너지죠.</div>
  <div style="position:absolute;top:790px;left:90px;right:90px;display:flex;gap:14px">
    ${['감수성', '직관', '지혜'].map(t => `<div style="background:${C.waterbg};border:1px solid ${C.water}59;border-radius:999px;padding:14px 30px;font-size:27px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 감성 리빌 — 수의 마음
const mind = [
  '말보다 분위기로 먼저 느껴요',
  '남들이 놓친 감정을 알아채요',
  '혼자 있는 시간에 더 깊어져요',
  '상처도 오래, 사랑도 깊게 담아요',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">마음 · 물의 결</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신의 <span style="color:${C.water}">수(水)</span>는 이런 마음</div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:30px">
    ${mind.map(t => `
      <div style="display:flex;align-items:center;gap:24px">
        ${drop(32)}<span style="font-size:34px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;font-style:italic">조용하지만, 그 안은 아주 깊어요.</div>
  ${handle()}
` + foot;

// 04 감성 절정 — 위로
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서 · 당신에게</div>
  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    깊은 만큼,<br/><span style="color:${C.water}">가끔은 버거워도</span></div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:35px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    남의 마음까지 다 느껴서<br/>지칠 때가 있죠.<br/><br/>그건 약해서가 아니라,<br/><b style="color:${C.water}">그만큼 깊어서</b>예요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">
    당신의 감수성은 흠이 아니라, <b style="color:${C.ink}">당신의 결</b>이에요.</div>
  ${handle()}
` + foot;

// 05 CTA — 프로필 링크 사주 조회 (저장 유도 없음)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">水 · 나를 읽다</div>
  <div style="position:absolute;top:225px;left:90px;right:90px;font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 사주가<br/><span style="color:${C.water}">궁금하다면?</span></div>
  <div style="position:absolute;top:530px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="display:flex;align-items:center;gap:14px"><span style="font-size:40px">📌</span>
      <span style="font-size:42px;font-weight:800">프로필 링크 확인!</span></div>
    <div style="margin-top:24px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.82);word-break:keep-all">
      내 안엔 어떤 오행이 흐를까요.<br/>프로필 링크에서 <b style="color:${C.gold}">내 사주</b>를 조회해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">오행 이야기, 여기까지 ·</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
