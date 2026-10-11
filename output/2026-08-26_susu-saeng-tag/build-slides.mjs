// 수수 (재구성 C) "이 오행이면 이 친구 태그 — 오행 상생 궁합" — 태그 바이럴 7장
// 상생(相生) 사이클: 각 오행 '나를 살려주는(生我)' + '내가 살려주는(我生)' 2명 태그 유도.
// 점수·운명 단정 없음. 한지 화이트 + 오행색 + 하트.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#52565C', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 7;
const COL = { 목: C.wood, 화: C.fire, 토: C.earth, 금: C.metal, 수: C.water };
const HAN = { 목: '木', 화: '火', 토: '土', 금: '金', 수: '水' };

// 각 오행: from=나를 살려주는(生我), to=내가 살려주는(我生)
const ELS = [
  { ko: '목', from: '수', fromtxt: '물이 나무를 키우듯, 지친 나를 묵묵히 채워주는 사람', to: '화', totxt: '나무가 불을 지피듯, 내가 응원하면 활활 타오르는 사람' },
  { ko: '화', from: '목', fromtxt: '나무가 불을 살리듯, 내 열정에 기름을 부어주는 사람', to: '토', totxt: '불이 흙을 데우듯, 내가 챙기면 든든해지는 사람' },
  { ko: '토', from: '화', fromtxt: '불이 흙을 데우듯, 차가워진 나를 따뜻하게 해주는 사람', to: '금', totxt: '흙이 쇠를 품듯, 내가 품어주게 되는 야무진 사람' },
  { ko: '금', from: '토', fromtxt: '흙이 쇠를 품듯, 날 선 나를 넉넉히 받아주는 사람', to: '수', totxt: '쇠가 물을 맑히듯, 내가 정리해주면 깊어지는 사람' },
  { ko: '수', from: '금', fromtxt: '쇠가 물을 맑히듯, 흐트러진 나를 다잡아주는 사람', to: '목', totxt: '물이 나무를 키우듯, 내가 스며들어 자라게 하는 사람' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (ko, s = 84) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${COL[ko]};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${COL[ko]}">${HAN[ko]}</span></div>`;
const heart = (s = 30, color = C.coral) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(168,56,72,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 오행 태그 슬라이드
function tagSlide(n, e) {
  const relCard = (label, targetKo, txt) => `<div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${COL[targetKo]};border-radius:18px;padding:26px 30px">
    ${elBadge(targetKo, 76)}
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px;font-weight:800;color:${COL[targetKo]}">${label}</span>${heart(24, COL[targetKo])}<span style="font-size:24px;font-weight:800;color:${C.ink}">${targetKo}(${HAN[targetKo]}) 오행</span></div>
      <div style="margin-top:8px;font-size:25px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">${txt}</div>
    </div></div>`;
  return head() + page(n) + `
    <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
      ${elBadge(e.ko)}<div><div style="font-size:22px;font-weight:700;letter-spacing:0.04em;color:${COL[e.ko]}">${e.ko}(${HAN[e.ko]}) 오행이라면</div>
        <div style="font-size:44px;font-weight:800;color:${C.ink};margin-top:2px">이 사람을 태그!</div></div></div>
    <div style="position:absolute;top:310px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
      ${relCard('나를 살려주는', e.from, e.fromtxt)}
      ${relCard('내가 살려주는', e.to, e.totxt)}
    </div>
    <div style="position:absolute;bottom:140px;left:90px;right:90px;font-size:30px;font-weight:800;color:${C.coral}">떠오른 그 얼굴, 지금 태그하세요 👇</div>
    ${handle()}
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행 상생 궁합 · TAG</div>
    <div style="font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      이 조합이면<br/><span style="color:${C.coral}">무조건 찰떡</span></div>
    <div style="margin-top:28px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">서로를 살려주는 '상생(相生)' 궁합.<br/>내 오행 살려주는 그 사람, 지금 태그해요 👇</div>
  </div>
  <div style="position:absolute;top:840px;left:90px;right:90px;display:flex;align-items:center;justify-content:center;gap:16px">
    ${['수', '목', '화', '토', '금'].map((ko, i) => `
      ${i ? `<span style="font-size:30px;color:${C.gold}">→</span>` : ''}
      <div style="width:78px;height:78px;border-radius:50%;background:${C.bg};border:2.5px solid ${COL[ko]};display:flex;align-items:center;justify-content:center"><span style="font-size:38px;font-weight:700;color:${COL[ko]}">${HAN[ko]}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:25px;color:${C.sub}">앞이 뒤를 살려주는 흐름 = 상생</div>
  <div style="position:absolute;bottom:70px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">내 오행 찾아서, 그 친구 태그 준비 ✦</div>
` + foot;

// 02~06 오행별
const elementSlides = ELS.map((e, i) => tagSlide(i + 2, e));

// 07 CTA
const s7 = head() + page(7) + `
  <div style="position:absolute;top:96px;left:90px" class="label">TAG · 우리 상생</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:64px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    떠오른 그 사람,<br/><span style="color:${C.coral}">태그 완료?</span> 🫶</div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 오행이랑 그 사람 오행, 진짜 궁합은<br/>프로필 링크에서 사주로 확인해봐요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">태그가 곧 소개 · 고마워요 🌿</div></div>
` + foot;

const slides = [s1, ...elementSlides, s7];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
