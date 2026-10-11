// 수수 "오늘의 위로 — 오행별 한마디" (비연애 번아웃 위로) — 6장
// 저장형 감성. 오행 5개 각각 지친 오늘에 건네는 한마디. 정체성 비난 없이 위로.
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#7C7F86', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

const WORDS = [
  { ko: '목', han: '木', color: C.wood, t: '너무 많이 뻗으려 애쓰지 않아도 돼요. 오늘은 그 자리에 가만히 있어도 괜찮아요.' },
  { ko: '화', han: '火', color: C.fire, t: '다 밝을 필요 없어요. 오늘은 좀 꺼져 있어도, 그래도 돼요.' },
  { ko: '토', han: '土', color: C.earth, t: '다 떠안지 말아요. 하나쯤 내려놔도 무너지지 않아요.' },
  { ko: '금', han: '金', color: C.metal, t: '완벽하지 않아도 돼요. 오늘의 나도 충분히 잘했어요.' },
  { ko: '수', han: '水', color: C.water, t: '괜히 다 알아채느라 지쳤죠. 오늘은 아무 생각 안 해도 돼요.' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (E, s = 64) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${E.color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${E.color}">${E.han}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 8%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:800;letter-spacing:0.06em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

const wordCard = (W) => `
  <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${W.color};border-radius:20px;padding:30px 34px">
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">${elBadge(W, 56)}<span style="font-size:28px;font-weight:800;color:${W.color}">${W.ko}(${W.han})에게</span></div>
    <div style="font-size:31px;font-weight:600;color:${C.ink};line-height:1.55;word-break:keep-all">"${W.t}"</div>
  </div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오늘의 위로 · 오행별 한마디</div>
    <div style="font-size:78px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      오늘 많이 <span style="color:${C.coral}">지쳤죠?</span></div>
    <div style="margin-top:32px;font-size:35px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">내 오행이 건네는 한마디, 내 색부터 찾아봐요.</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">마음에 걸리면 저장해두세요 🤍</div>
` + foot;

// 02 목·화
const s2 = head() + page(2) + `
  <div style="position:absolute;top:130px;left:90px;right:90px">${wordCard(WORDS[0])}</div>
  <div style="position:absolute;top:560px;left:90px;right:90px">${wordCard(WORDS[1])}</div>
  ${handle()}
` + foot;

// 03 토·금
const s3 = head() + page(3) + `
  <div style="position:absolute;top:130px;left:90px;right:90px">${wordCard(WORDS[2])}</div>
  <div style="position:absolute;top:560px;left:90px;right:90px">${wordCard(WORDS[3])}</div>
  ${handle()}
` + foot;

// 04 수 (크게)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:300px;left:90px;right:90px">${wordCard(WORDS[4])}</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">
    내 오행 한마디, 오늘 유독 와닿는다면 저장해두세요.</div>
  ${handle()}
` + foot;

// 05 공통 위로
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그리고 우리 모두에게</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:80px 54px;color:${C.bg};text-align:center">
    <div style="font-size:56px;font-weight:800;line-height:1.35;letter-spacing:-0.02em">
      오늘의 나,<br/><span style="color:${C.gold}">그걸로 충분해요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    잘 해내지 못한 날도, 버텨낸 것만으로 대단한 거예요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 오늘의 위로</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오늘은 <span style="color:${C.coral}">나한테 다정하게</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    요즘 많이 지친 친구가 떠오르면, 이 한마디 조용히 보내주세요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행을 알면, 나한테 딱 맞는 위로도 찾을 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 친구에게</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
