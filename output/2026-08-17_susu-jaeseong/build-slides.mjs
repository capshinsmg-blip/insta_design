// 수수 2월차 W8① "재성(財星) 강한 사람의 특징 — 돈과의 관계" — 재테크 2030 저장형 6장
// 카피: 멀티에이전트 초안+명리감수+통합(검증본). 한지 화이트 + 재성(골드) + ₩ 코인.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  jae: '#B88A2E', // 재성 시그니처(딥 골드)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  jaebg: 'rgba(184,138,46,0.10)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const coin = (s = 30, color = C.jae) => `<svg width="${s}" height="${s}" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="13" fill="${color}" fill-opacity="0.92"/><circle cx="15" cy="15" r="13" stroke="${color}" stroke-width="1"/><text x="15" y="20.5" text-anchor="middle" font-size="15" font-weight="800" fill="#F7F2EC" font-family="'Pretendard Variable',sans-serif">₩</text></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(184,138,46,0.09), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.jae}}
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
    <div class="label" style="margin-bottom:30px">십신 유형 · 財星 재성</div>
    <div style="font-size:82px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      돈이 남는 사람은<br/><span style="color:${C.jae}">뭐가 다를까?</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">사주 십신 '재성(財星)'으로 읽는 나의 돈 성향.</div>
  </div>
  <div style="position:absolute;top:840px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['재성이 뭐길래?', '재성 뚜렷한 사람의 돈 습관', '정재 vs 편재, 나는?'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.9">${coin(28)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.jae};letter-spacing:0.02em">저장하고 내 씀씀이랑 맞춰보세요 ✦</div>
` + foot;

// 02 재성이란?
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">재성(財星)이란?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    사주에서 <span style="color:${C.jae}">돈·재물</span>을<br/>뜻하는 기운</div>
  <div style="position:absolute;top:430px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    십신 중 '돈과 재물'을 상징하는 기운이에요.<br/>내가 다스리고 손에 쥐는 것 —<br/>그래서 <b style="color:${C.jae}">돈을 벌고, 쓰고, 모으는 태도</b>가<br/>여기서 드러나요.</div>
  <div style="position:absolute;top:840px;left:90px;right:90px;display:flex;align-items:center;gap:20px;background:${C.jaebg};border:1px solid ${C.jae}44;border-radius:20px;padding:28px 32px">
    ${coin(52)}<span style="font-size:29px;font-weight:700;color:${C.ink};word-break:keep-all">재성 = 내가 다스리는 돈·현실 자원</span>
  </div>
  ${handle()}
` + foot;

// 03 재성 뚜렷한 사람 특징
const traits = [
  '돈이 들고 나는 흐름에 감이 빠른 편',
  '숫자·계산에 밝고 현실 감각이 또렷',
  '쓸 땐 쓰고 아낄 땐 아끼는 기준이 분명',
  "'이거 남는 거 맞나?'부터 따져봐요",
  '가치 없다 싶으면 지갑이 잘 안 열려요',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">CHECK · 돈과의 관계</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    재성 뚜렷한 사람은 <span style="color:${C.jae}">이래요</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${traits.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:22px 26px">
        ${coin(34)}<span style="font-size:29px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;right:100px;font-size:26px;color:${C.sub};word-break:keep-all">다 맞진 않아도 2개 이상이면 재성이 뚜렷한 편일 수 있어요.</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 정재 vs 편재
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">같은 재성, 다른 결</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    정재 <span style="color:${C.sub};font-weight:700">vs</span> 편재</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:26px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.jae};border-radius:18px;padding:34px 36px">
      <div style="font-size:30px;font-weight:800;color:${C.jae}">정재 (正財) · 안정형</div>
      <div style="margin-top:12px;font-size:29px;font-weight:500;color:${C.ink};line-height:1.55;word-break:keep-all">월급·저축처럼 꾸준히 모으는 결.<br/>예측 가능한 돈을 편안해해요.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.coral};border-radius:18px;padding:34px 36px">
      <div style="font-size:30px;font-weight:800;color:${C.coral}">편재 (偏財) · 스케일형</div>
      <div style="margin-top:12px;font-size:29px;font-weight:500;color:${C.ink};line-height:1.55;word-break:keep-all">크게 벌고 크게 쓰며, 사람과 기회에<br/>잘 베푸는 결. 사업·투자 같은 유동적 돈에 감각.</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;font-weight:700;color:${C.jae}">나는 꾸준형? 스케일형? 💰</div>
  ${handle()}
` + foot;

// 05 밸런스
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 강약은 성향</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    강하다고 좋고, <span style="color:${C.jae}">약하다고 나쁜 게 아니에요</span></div>
  <div style="position:absolute;top:390px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.jae};border-radius:18px;padding:30px 34px">
      <div style="font-size:24px;font-weight:800;color:${C.jae}">재성이 강하면</div>
      <div style="margin-top:10px;font-size:29px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">현실 감각과 돈에 관심이 뚜렷해요. 단, 사주 전체 균형에 따라 돈을 다스리기도·쫓기기도 해요.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:30px 34px">
      <div style="font-size:24px;font-weight:800;color:${C.sub}">재성이 옅으면</div>
      <div style="margin-top:10px;font-size:29px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">돈보다 의미·관계를 먼저 봐요. 그만큼 욕심에 덜 휘둘리는 강점도 있어요.</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    강약은 우열이 아니라 <b style="color:${C.ink}">성향의 결</b>이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.jae}">SAVE · 財</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:72px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 재성은<br/><span style="color:${C.jae}">어떤 결일까?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 사주 속 돈 성향(재성)이 궁금하다면,<br/>프로필 링크에서 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 관성(官) →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
