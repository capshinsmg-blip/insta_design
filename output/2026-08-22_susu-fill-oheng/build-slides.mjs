// 수수 3월차 W10① "부족한 오행 채우는 방법 — 컬러·음식·원석" — 실용/저장형 7장
// 원석은 효능 단정 대신 '전통적으로 그 기운을 상징' 톤. 한지 화이트 + 오행별 색.
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

const ELS = [
  { ko: '목', han: '木', color: C.wood, color_txt: '초록 · 청록', food: '신맛 · 새싹채소 · 나물', stone: '초록빛 원석 (아벤츄린 등)', tip: '아침 산책, 새로운 시작 하나' },
  { ko: '화', han: '火', color: C.fire, color_txt: '빨강 · 주황', food: '쓴맛 · 붉은 음식 (토마토 등)', stone: '붉은빛 원석 (가넷 등)', tip: '햇빛 쬐기, 마음 표현하기' },
  { ko: '토', han: '土', color: C.earth, color_txt: '노랑 · 베이지', food: '단맛 · 곡물 · 뿌리채소', stone: '황색빛 원석 (시트린 등)', tip: '규칙적인 식사, 안정 루틴' },
  { ko: '금', han: '金', color: C.metal, color_txt: '흰색 · 은색', food: '매운맛 · 흰 음식 (무·배)', stone: '맑고 흰 원석 (수정 등)', tip: '정리정돈, 마무리 습관' },
  { ko: '수', han: '水', color: C.water, color_txt: '검정 · 남색', food: '짠맛 · 검은 음식 (콩·김)', stone: '검정·파랑 원석 (오닉스 등)', tip: '충분한 수분과 휴식' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 88) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;

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

// 오행 채우기 슬라이드
function fillSlide(n, e) {
  const row = (icon, lab, val) => `<div style="display:flex;align-items:center;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 28px">
    <span style="font-size:34px">${icon}</span>
    <div><span style="font-size:23px;font-weight:800;color:${e.color};letter-spacing:0.02em">${lab}</span>
      <div style="margin-top:4px;font-size:29px;font-weight:600;color:${C.ink};word-break:keep-all">${val}</div></div></div>`;
  return head() + page(n) + `
    <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
      ${elBadge(e.han, e.color)}<div><div style="font-size:44px;font-weight:800;color:${C.ink}">${e.ko}(${e.han}) 기운 채우기</div></div></div>
    <div style="position:absolute;top:280px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
      ${row('🎨', '컬러', e.color_txt)}
      ${row('🍽️', '음식', e.food)}
      ${row('💎', '원석', e.stone)}
    </div>
    <div style="position:absolute;top:790px;left:90px;right:90px;background:${e.color}14;border:1px solid ${e.color}44;border-radius:16px;padding:26px 30px">
      <span style="font-size:23px;font-weight:800;color:${e.color}">생활 속 한 가지</span>
      <div style="margin-top:6px;font-size:28px;font-weight:600;color:${C.ink};word-break:keep-all">${e.tip}</div></div>
    <div style="position:absolute;bottom:132px;left:90px;right:100px;font-size:23px;color:${C.sub};line-height:1.45;word-break:keep-all">
      ※ 원석은 전통적으로 ${e.ko}(${e.han})을 상징해온 빛깔 — 효능이 아니라 '곁에 두는 상징'이에요.</div>
    <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:310px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">SAVE · 오행 밸런스</div>
    <div style="font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
      부족한 오행,<br/><span style="color:${C.coral}">이렇게 채워요</span></div>
    <div style="margin-top:28px;font-size:30px;color:${C.sub};line-height:1.55;word-break:keep-all">컬러 · 음식 · 원석 · 생활 습관까지.<br/>내게 부족한 기운, 일상에서 채우는 법 📌</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    ${ELS.map(e => `<div style="text-align:center"><div style="width:96px;height:96px;border-radius:50%;background:${C.bg};border:2.5px solid ${e.color};display:flex;align-items:center;justify-content:center"><span style="font-size:44px;font-weight:700;color:${e.color}">${e.han}</span></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">내 오행부터 찾고, 하나씩 채워봐요 ✦</div>
` + foot;

// 02~06 오행별
const elementSlides = ELS.map((e, i) => fillSlide(i + 2, e));

// 07 CTA
const s7 = head() + page(7) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 오행 채우기</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    근데, 뭘 채워야 할지<br/><span style="color:${C.coral}">알아야 채우죠?</span></div>
  <div style="position:absolute;top:470px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내게 부족한 오행이 뭔지 먼저 알아야<br/>컬러도 음식도 원석도 딱 맞게 채울 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    다음 편은 '오행 팔찌란? 원석이 기운을 보완하는 원리' 편이에요.</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

const slides = [s1, ...elementSlides, s7];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
