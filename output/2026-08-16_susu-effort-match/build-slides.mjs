// 수수 2월차 W7② "노력이 필요한 오행 궁합 — 이해하면 달라져요" — 커플 타깃 6장
// 훅: 상극이지만 이해하면 좋아짐. 한지 화이트 + 원소별 색 + ⇄ 커넥터.
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
  pos: '#5E7C63', // 긍정(이해하면)
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
const elBadge = (han, color, s = 120) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3.5px solid ${color};display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(110,26,43,0.06)">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;
const swap = (s = 56) => `<svg width="${s}" height="${Math.round(s * 0.75)}" viewBox="0 0 52 40" fill="none"><path d="M13 13 H40 M33 6 L42 13 L33 20" stroke="${C.gold}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M39 27 H12 M19 20 L10 27 L19 34" stroke="${C.gold}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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

// 상극 쌍 슬라이드 (부딪힘 → 이해하면)
function effortPair(n, aHan, aKo, aColor, bHan, bKo, bColor, principle, clash, understand, tagline) {
  return head() + page(n) + `
    <div style="position:absolute;top:96px;left:90px" class="label">노력 궁합 · ${principle}</div>
    <div style="position:absolute;top:180px;left:90px;right:90px;display:flex;align-items:center;justify-content:center;gap:30px">
      <div style="text-align:center">${elBadge(aHan, aColor)}<div style="margin-top:14px;font-size:28px;font-weight:800;color:${aColor}">${aKo}(${aHan})</div></div>
      ${swap(60)}
      <div style="text-align:center">${elBadge(bHan, bColor)}<div style="margin-top:14px;font-size:28px;font-weight:800;color:${bColor}">${bKo}(${bHan})</div></div>
    </div>
    <div style="position:absolute;top:500px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.coral};border-radius:18px;padding:32px 34px">
        <div style="font-size:24px;font-weight:800;color:${C.coral};letter-spacing:0.02em">⚡ 이래서 부딪혀요</div>
        <div style="margin-top:12px;font-size:30px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${clash}</div></div>
      <div style="background:rgba(94,124,99,0.08);border:1px solid rgba(94,124,99,0.3);border-left:6px solid ${C.pos};border-radius:18px;padding:32px 34px">
        <div style="font-size:24px;font-weight:800;color:${C.pos};letter-spacing:0.02em">💚 이렇게 이해하면</div>
        <div style="margin-top:12px;font-size:30px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${understand}</div></div>
    </div>
    <div style="position:absolute;bottom:130px;left:90px;right:90px;text-align:center;font-size:29px;font-weight:700;color:${C.gold}">${tagline}</div>
    <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:320px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 궁합 · 상극 편</div>
    <div style="font-size:74px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      노력이 필요한 궁합,<br/><span style="color:${C.coral}">이해하면 달라져요</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">안 맞는 게 아니라, 서로를 다듬는 사이예요.<br/>연애 중인데 이 조합이라면 끝까지 보세요 💛</div>
  </div>
  <div style="position:absolute;top:840px;left:90px;right:90px;display:flex;align-items:center;justify-content:center;gap:26px">
    <div style="width:80px;height:80px;border-radius:50%;background:${C.bg};border:3px solid ${C.water};display:flex;align-items:center;justify-content:center"><span style="font-size:40px;font-weight:700;color:${C.water}">水</span></div>
    ${swap(56)}
    <div style="width:80px;height:80px;border-radius:50%;background:${C.bg};border:3px solid ${C.fire};display:flex;align-items:center;justify-content:center"><span style="font-size:40px;font-weight:700;color:${C.fire}">火</span></div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;text-align:center;font-size:25px;color:${C.sub}">누른다 = 깎아서 빛낸다. 상극도 이해하면 성장이에요.</div>
` + foot;

// 02~04 상극 3쌍
const s2 = effortPair(2, '水', '수', C.water, '火', '화', C.fire, '水克火',
  '차분한 수(水)는 화(火)의 뜨거움이 부담스럽고, 화는 수가 답답하게 느껴져요.',
  '수는 화에게 안정을, 화는 수에게 온기를 줘요. 서로의 온도만 맞추면 최고의 균형!',
  '온도만 맞추면 환상의 균형 ⚖️');

const s3 = effortPair(3, '木', '목', C.wood, '土', '토', C.earth, '木克土',
  '밀어붙이는 목(木)은 토(土)가 느려 답답하고, 토는 목의 속도가 부담스러워요.',
  '목의 추진력 + 토의 안정감이면 목표를 끝까지. 목이 늦추고 토가 나오면 든든한 팀.',
  '속도만 맞추면 든든한 팀 🤝');

const s4 = effortPair(4, '火', '화', C.fire, '金', '금', C.metal, '火克金',
  '표현하는 화(火)에겐 금(金)이 차갑고, 절제하는 금에겐 화가 과하게 느껴져요.',
  '화가 금의 벽을 녹이고, 금이 화의 열을 다듬어요. 서로 없는 걸 채워주는 사이.',
  '서로의 결핍을 채우는 사이 💫');

// 05 정리 — 노력 궁합도 결국
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서 · 결론</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    안 맞는 궁합은<br/><span style="color:${C.coral}">없어요</span></div>
  <div style="position:absolute;top:480px;left:90px;right:100px;font-size:35px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    잘 맞는 짝은 편하게 흐르고,<br/>노력이 필요한 짝은 <b style="color:${C.pos}">서로를 성장</b>시켜요.<br/><br/>중요한 건 궁합보다,<br/><b style="color:${C.ink}">이해하려는 마음</b>이니까요.</div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:29px;color:${C.sub};line-height:1.6">지금 그 사람과의 조합, 어떤가요?</div>
  ${handle()}
` + foot;

// 06 CTA — 커플 태그 + 프로필
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}">TAG · 우리 궁합</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    우리 이 조합인데?<br/><span style="color:${C.coral}">연인 태그 👇</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      연인·썸남썸녀 태그하고, 우리 궁합을<br/>프로필 링크에서 같이 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 재성(財) →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
