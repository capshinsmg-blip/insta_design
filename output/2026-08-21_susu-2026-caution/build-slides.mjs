// 수수 3월차 W9② "올해 특히 주의해야 할 오행 유형 (2026 병오년)" — 대비/공감형 5장
// W9①(명리감수 검증) 연장. 겁주기 금지, "미리 알면 챙긴다" 톤. 火克金·火旺水涸.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  metal: '#52565C', water: '#3F5A6B', pos: '#5E7C63',
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
const elBadge = (han, color, s = 84) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(176,67,63,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 주의 오행 슬라이드 (신호 / 챙김 2단)
function cautionSlide(n, han, ko, color, principle, headline, signal, care, soft) {
  return head() + page(n) + `
    <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
      ${elBadge(han, color)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">${ko}(${han}) 오행</div>
        <div style="font-size:22px;color:${C.sub};margin-top:4px">${principle}</div></div></div>
    <div style="position:absolute;top:262px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
      ${headline}</div>
    <div style="position:absolute;top:430px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${color};border-radius:18px;padding:30px 34px">
        <div style="font-size:24px;font-weight:800;color:${color};letter-spacing:0.02em">이럴 수 있어요</div>
        <div style="margin-top:12px;font-size:30px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${signal}</div></div>
      <div style="background:rgba(94,124,99,0.08);border:1px solid rgba(94,124,99,0.3);border-left:6px solid ${C.pos};border-radius:18px;padding:30px 34px">
        <div style="font-size:24px;font-weight:800;color:${C.pos};letter-spacing:0.02em">이렇게 챙겨요</div>
        <div style="margin-top:12px;font-size:30px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${care}</div></div>
    </div>
    <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">${soft}</div>
    ${handle()}
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">연운 · 병오년 체크</div>
    <div style="font-size:70px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
      올해, 특히<br/><span style="color:${C.coral}">챙겨야 할</span> 오행이 있어요</div>
    <div style="margin-top:28px;font-size:29px;color:${C.sub};line-height:1.55;word-break:keep-all">병오년 火 강년, 잠깐 숨 고를 오행은?<br/>미리 알면 겁낼 일이 아니라 챙길 일이에요.</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${['⚔️ 金 · 압박이 늘 수 있는 해', '💧 水 · 쉽게 지칠 수 있는 해', '🔥 火 · 잘 나가도 과열은 조심'].map(t => `
      <div style="font-size:28px;font-weight:600;color:${C.sub}">${t}</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">겁내지 말고, 챙기는 마음으로 ✦</div>
` + foot;

// 02 왜 주의?
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">왜 숨 고를 때일까?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    불이 강한 해엔,<br/><span style="color:${C.coral}">눌리고 마르는</span> 오행이 있어요</div>
  <div style="position:absolute;top:460px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    병오년은 불(火)이 아주 강한 해예요.<br/>불에 눌리는 <b style="color:${C.metal}">금(金)</b>,<br/>불에 마르는 <b style="color:${C.water}">수(水)</b>는<br/>유난히 힘이 빠지기 쉬운 흐름이죠.</div>
  <div style="position:absolute;top:900px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    물론 <b style="color:${C.ink}">개인 사주 원국에 따라 다르지만</b>, 미리 알면 대비가 돼요.</div>
  ${handle()}
` + foot;

// 03 금(金) 주의
const s3 = cautionSlide(3, '金', '금', C.metal, '火克金 · 불이 쇠를 누름',
  '금(金) — <span style="color:' + C.metal + '">눌리기 쉬운</span> 해',
  '압박감·스트레스가 늘고, 결단이 자꾸 흔들릴 수 있어요.',
  '큰 결단·계약은 한 박자 늦게. 무리한 확장보다 실력을 다지는 데 집중해요.',
  '눌린다기보다, 명검으로 벼려지는 시기예요.');

// 04 수(水) 주의
const s4 = cautionSlide(4, '水', '수', C.water, '火旺水涸 · 불에 물이 마름',
  '수(水) — <span style="color:' + C.water + '">쉽게 지치는</span> 해',
  '감정 소모·번아웃, 체력 저하가 느껴질 수 있어요.',
  '충분한 잠·수분·혼자만의 시간. 쉼을 일정에 먼저 넣어두는 게 최고의 습관이에요.',
  '화(火)도 잘 나가되 과열은 조심 — 쉬는 시간표를 먼저 짜요.');

// 05 CTA
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 미리 챙기기</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    조심하라는 게 아니라,<br/><span style="color:${C.coral}">챙기라는 거예요</span></div>
  <div style="position:absolute;top:500px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 오행이 올해 어떤 흐름인지 미리 알면,<br/>겁낼 일이 아니라 대비할 일이 돼요.</div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">다음 편은 오행 채우는 법 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
