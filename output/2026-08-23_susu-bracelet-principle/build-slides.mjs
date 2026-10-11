// 수수 3월차 W10② "오행 팔찌란? 원석이 기운을 보완하는 원리" — 브랜드 소개 5장
// 정직한 프레이밍: 효능 단정 X → '부족한 오행을 매일 의식하게 하는 리마인더·상징'. 한지 화이트 + 팥/골드.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  goldbg: 'rgba(200,151,58,0.12)',
};
const TOTAL = 5;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:110px;right:90px;font-size:20px;letter-spacing:0.14em;color:${C.sub}">BRAND · 오행 팔찌</div>
  <div style="position:absolute;top:360px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">수수가 만드는 것</div>
    <div style="font-size:84px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      오행 팔찌,<br/><span style="color:${C.coral}">대체 뭐예요?</span></div>
    <div style="margin-top:32px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">사주로 만드는, 세상에 하나뿐인 내 팔찌.<br/>'기운을 보완한다'는 게 무슨 뜻인지 솔직하게 풀어볼게요.</div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;display:flex;align-items:center;gap:16px">
    ${bead(40, C.wood ?? '#5E7C63')}${bead(40, C.fire ?? '#B0433F')}${bead(40, C.gold)}${bead(40, '#9AA0A6')}${bead(40, C.water ?? '#3F5A6B')}
  </div>
  <div style="position:absolute;bottom:84px;left:90px;font-size:24px;font-weight:600;color:${C.gold};letter-spacing:0.02em">끝까지 보면 왜 손목에 차는지 알게 돼요 ✦</div>
` + foot;

// 02 오행 팔찌란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">WHAT · 오행 팔찌란</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    내 사주 속 기운을 담은 <span style="color:${C.coral}">팔찌</span></div>
  <div style="position:absolute;top:430px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    사주 여덟 글자에서 내 오행 균형을 읽고,<br/><b style="color:${C.coral}">부족한 기운을 상징하는 원석과 색</b>으로<br/>하나하나 손으로 엮은 팔찌예요.</div>
  <div style="position:absolute;top:820px;left:90px;right:90px;display:flex;gap:14px">
    ${['사주 분석', '맞춤 원석', '수제 제작'].map(t => `<div style="flex:1;text-align:center;background:${C.goldbg};border:1px solid ${C.gold}55;border-radius:16px;padding:24px 18px;font-size:26px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 원리 (정직하게)
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">WHY · 보완의 원리</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    "원석이 기운을 채운다?"<br/><span style="color:${C.coral}">사실은요…</span></div>
  <div style="position:absolute;top:400px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${[
    ['돌이 마법처럼 기운을 넣진 않아요', C.sub],
    ['부족한 오행의 색·원석을 매일 손목에 지니며', C.ink],
    ['그 기운을 의식하고 챙기게 하는 리마인더예요', C.coral],
  ].map(([t, col], i) => `
      <div style="display:flex;align-items:flex-start;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:26px 30px">
        <span style="font-size:30px;font-weight:800;color:${C.gold};min-width:40px">${i + 1}</span>
        <span style="font-size:30px;font-weight:600;color:${col};line-height:1.4;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    전통에서 원석을 각 오행과 연결지어 온, <b style="color:${C.ink}">나를 위한 상징이자 습관</b>이에요.</div>
  ${handle()}
` + foot;

// 04 수수의 제작
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">HOW · 수수의 방식</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    그래서 수수는 <span style="color:${C.coral}">이렇게</span></div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${[
    ['01', '사주를 읽어요', '타고난 오행의 균형을 분석'],
    ['02', '원석을 골라요', '부족한 기운을 상징하는 원석·색'],
    ['03', '손으로 지어요', '하나뿐인 팔찌로 정성껏 제작'],
  ].map(([n, t, d]) => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:18px;padding:30px 32px">
        <span style="font-size:42px;font-weight:800;color:${C.gold};min-width:58px">${n}</span>
        <div><div style="font-size:31px;font-weight:800;color:${C.ink}">${t}</div>
          <div style="margin-top:6px;font-size:25px;color:${C.sub};word-break:keep-all">${d}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">그래서 세상에 딱 하나뿐이에요 🤍</div>
  ${handle()}
` + foot;

// 05 CTA
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 팔찌</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    내게 맞는 오행 팔찌가<br/><span style="color:${C.coral}">궁금하다면?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 사주 오행을 먼저 보고,<br/>내게 필요한 원석·색을 함께 찾아드려요.</div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">다음 편은 오행별 추천 원석 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
