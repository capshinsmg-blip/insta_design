// 수수 2월차 W7① "잘 맞는 오행 궁합 Top 3 쌍" — 저장 유도형 5장
// 훅: "나랑 맞는 오행 찾았다" 저장. 상생(相生) 기반 3쌍. 한지 화이트 + 원소별 색 + 하트.
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
const TOTAL = 5;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 128) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3.5px solid ${color};display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(110,26,43,0.06)">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;
const heart = (s = 44, color = C.coral) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 궁합 쌍 슬라이드
function pairSlide(n, rank, aHan, aKo, aColor, bHan, bKo, bColor, principle, headline, body, tagline) {
  return head() + page(n) + `
    <div style="position:absolute;top:96px;left:90px" class="label">궁합 TOP ${rank} · ${principle}</div>
    <div style="position:absolute;top:200px;left:90px;right:90px;display:flex;align-items:center;justify-content:center;gap:34px">
      <div style="text-align:center">${elBadge(aHan, aColor)}<div style="margin-top:16px;font-size:30px;font-weight:800;color:${aColor}">${aKo}(${aHan})</div></div>
      ${heart(56)}
      <div style="text-align:center">${elBadge(bHan, bColor)}<div style="margin-top:16px;font-size:30px;font-weight:800;color:${bColor}">${bKo}(${bHan})</div></div>
    </div>
    <div style="position:absolute;top:560px;left:90px;right:90px;text-align:center;font-size:46px;font-weight:800;line-height:1.3;letter-spacing:-0.02em;word-break:keep-all">
      ${headline}</div>
    <div style="position:absolute;top:720px;left:90px;right:90px;font-size:31px;color:${C.ink};font-weight:500;line-height:1.68;word-break:keep-all;text-align:center">
      ${body}</div>
    <div style="position:absolute;bottom:150px;left:90px;right:90px;text-align:center;font-size:29px;font-weight:700;color:${C.coral}">${tagline}</div>
    ${handle()}
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:330px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 궁합 · 상생 편</div>
    <div style="font-size:80px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      잘 맞는 오행<br/><span style="color:${C.coral}">궁합 Top 3</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">서로를 살려주는 '상생(相生)'의 짝이에요.<br/>내 오행이랑 맞는 짝, 찾았다 싶으면 저장 📌</div>
  </div>
  <div style="position:absolute;top:800px;left:90px;right:90px;display:flex;align-items:center;justify-content:center;gap:20px">
    ${['水', '木', '火', '土'].map((h, i) => `
      ${i ? `<span style="font-size:34px;color:${C.gold}">→</span>` : ''}
      <div style="width:70px;height:70px;border-radius:50%;background:${C.bg};border:2.5px solid ${[C.water, C.wood, C.fire, C.earth][i]};display:flex;align-items:center;justify-content:center"><span style="font-size:34px;font-weight:700;color:${[C.water, C.wood, C.fire, C.earth][i]}">${h}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;text-align:center;font-size:25px;color:${C.sub}">앞 기운이 뒤 기운을 살려주는 흐름 = 상생</div>
` + foot;

// 02~04 Top 3 쌍
const s2 = pairSlide(2, 1, '水', '수', C.water, '木', '목', C.wood, '水生木',
  '받쳐주는 水 × 뻗어가는 木',
  '물이 나무를 키우듯,<br/>수(水)의 깊은 이해가 목(木)의 추진력을<br/>안정적으로 받쳐줘요.<br/>목은 방향과 활기를, 수는 쉼과 위로를.',
  '안정 속에서 함께 자라는 커플 🌿');

const s3 = pairSlide(3, 2, '木', '목', C.wood, '火', '화', C.fire, '木生火',
  '불붙이는 木 × 타오르는 火',
  '나무가 불을 지피듯,<br/>목(木)의 추진력이 화(火)의 열정에<br/>기름을 부어요.<br/>둘 다 에너지가 넘쳐 늘 새롭고 뜨거운 사이.',
  '함께라면 못 할 게 없는 열정 커플 🔥');

const s4 = pairSlide(4, 3, '火', '화', C.fire, '土', '토', C.earth, '火生土',
  '데워주는 火 × 품어주는 土',
  '불이 흙을 데우듯,<br/>화(火)의 다정한 표현이 토(土)를 따뜻하게,<br/>토(土)의 안정감이 뜨거운 화를<br/>편안하게 받아줘요.',
  '뜨거움을 든든히 품는 커플 🤎');

// 05 CTA
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 궁합 찾기</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    나랑 맞는 오행,<br/><span style="color:${C.coral}">찾았나요?</span></div>
  <div style="position:absolute;top:400px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${[['水', '수', C.water, '木', '목', C.wood], ['木', '목', C.wood, '火', '화', C.fire], ['火', '화', C.fire, '土', '토', C.earth]].map(([ah, ak, ac, bh, bk, bc]) => `
      <div style="display:flex;align-items:center;gap:16px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:20px 26px">
        <span style="font-size:28px;font-weight:800;color:${ac}">${ak}(${ah})</span>
        <span style="opacity:0.8"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${C.coral}"/></svg></span>
        <span style="font-size:28px;font-weight:800;color:${bc}">${bk}(${bh})</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:250px;left:90px;right:90px;background:${C.ink};border-radius:24px;padding:38px 42px;color:${C.bg}">
    <div style="font-size:34px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면? <span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:12px;font-size:25px;color:rgba(247,242,236,0.78);word-break:keep-all">내 오행이랑 상대 오행, 프로필에서 궁합까지 확인해요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">다음 편은 노력 궁합 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
