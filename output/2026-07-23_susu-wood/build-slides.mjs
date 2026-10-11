// 수수 2주차 피드① "목(木) 오행 — 봄의 기운을 타고난 사람들" — 체크리스트형 6장
// 훅: 이거 다 맞으면 목 타입. 목표: 공감·저장. 한지 화이트 + 목(녹색) 포인트.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', // 목 시그니처
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  woodbg: 'rgba(94,124,99,0.10)',
};

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const woodBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.wood};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${C.wood}">木</span></div>`;

const check = (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="36" rx="11" fill="${C.woodbg}" stroke="${C.wood}" stroke-width="2"/><path d="M12 20.5 L18 26 L28 14" stroke="${C.wood}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(94,124,99,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.wood}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 06</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 타입 · 木 목</div>
    <div style="font-size:80px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      이거 다 맞으면<br/>당신은 <span style="color:${C.wood}">목(木) 타입</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">봄의 기운을 타고난 사람들, 몇 개나 해당될까요?</div>
  </div>
  <div style="position:absolute;top:800px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['새로운 걸 시작할 때 제일 설렌다', '남을 따르기보다 내가 주도한다', '한번 꽂히면 앞뒤 없이 돌진한다'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.55">${check(40)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:120px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장하고 체크해보세요 ✦</div>
` + foot;

// 02 목 기운이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${woodBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">목(木) 오행</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">봄 · 나무</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    새싹처럼 <span style="color:${C.wood}">위로 뻗는</span> 기운</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    목(木)은 봄, 나무의 기운이에요.<br/>가만히 있기보다 <b style="color:${C.wood}">자라고 뻗어 나가려는</b><br/>성장과 시작의 에너지죠.</div>
  <div style="position:absolute;top:780px;left:90px;right:90px;display:flex;gap:14px">
    ${['성장', '시작', '추진력'].map(t => `<div style="background:${C.woodbg};border:1px solid ${C.wood}59;border-radius:999px;padding:14px 30px;font-size:27px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 체크리스트 (핵심 훅)
const checklist = [
  '새로운 걸 시작할 때 제일 설렌다',
  '하고 싶은 게 생기면 일단 저지른다',
  '남을 따르기보다 내가 주도하는 게 편하다',
  '지는 걸 싫어하고 경쟁심이 있다',
  '정이 많고 사람을 잘 챙긴다',
  '한번 꽂히면 앞뒤 안 재고 돌진한다',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">CHECK · 나 목(木)일까?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이런 당신, <span style="color:${C.wood}">목(木)</span>일지도</div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${checklist.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:22px 26px">
        ${check(42)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:132px;left:90px;font-size:27px;font-weight:700;color:${C.coral}">몇 개나 해당되나요? 👀</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 강점
const strengths = [
  ['시작하는 용기', '남들이 재는 사이, 이미 첫발을 뗀다'],
  ['타고난 리더십', '방향을 정하고 사람을 이끈다'],
  ['멈추지 않는 성장', '어제보다 나은 나를 만든다'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">STRONG · 목(木)의 매력</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    목(木)이 강한 사람은</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${strengths.map(([t, d], i) => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.wood};border-radius:18px;padding:34px 32px">
        <span style="font-size:46px;font-weight:800;color:${C.wood};min-width:60px">0${i + 1}</span>
        <div><div style="font-size:33px;font-weight:800;color:${C.ink}">${t}</div>
          <div style="margin-top:8px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">${d}</div></div></div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 05 넘치면/부족하면
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 목(木)의 균형</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    넘치거나 부족하면</div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.coral};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.coral};letter-spacing:0.02em">목이 넘치면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">고집이 세지고, 조급하고 욱하기 쉬워요</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.sub};letter-spacing:0.02em">목이 부족하면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">시작이 두렵고, 의욕이 잘 안 생겨요</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    균형이 무너지면 나무도 흔들려요.<br/><b style="color:${C.ink}">부족한 기운은 원석으로 채워주면 돼요.</b></div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 木</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 사주가<br/><span style="color:${C.wood}">궁금하다면?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="display:flex;align-items:center;gap:14px"><span style="font-size:40px">📌</span>
      <span style="font-size:40px;font-weight:800">프로필 링크 확인!</span></div>
    <div style="margin-top:24px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      몇 개 체크됐나요? 4개 이상이면 <b style="color:${C.gold}">목(木) 타입</b>!<br/>내 오행 밸런스는 프로필 링크에서 확인하세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 火 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
