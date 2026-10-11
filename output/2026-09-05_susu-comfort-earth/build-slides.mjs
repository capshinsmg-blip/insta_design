// 수수 "오늘의 위로" 처방 시리즈 — 흙(土) 편 — 6장
// 저장형 감성 포맷. 번아웃 위로 + 작은 허락 + 원석=리마인더(효능 아님).
// 규칙: 따뜻한 팔레트·사람 말투·정체성 비난 없이 위로.
// [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

// ===== 오행별 데이터 =====
const M = {
  ko: '토', han: '土', color: C.earth,
  coverHook: ['다 잘하려다 지친', '土(토)에게'],
  coverSub: '오늘은 좀 안 해도 괜찮아요',
  recognize: [
    '남들 챙기느라 정작 나는 늘 뒷전',
    '힘들어도 "괜찮아"가 먼저 나온다',
    '쉬는 게 왜 이렇게 불편한지 모르겠다',
  ],
  bigComfort: ['이제 좀,', '안 해도 돼요'],
  allow: [
    '부탁 하나쯤은 거절하기',
    '오늘 할 일 하나는 내일로 미루기',
    '"괜찮아" 말고 "나 힘들어"라고 말해보기',
  ],
  stone: '흙(土)의 기운을 곁에 두는 건 효능이 아니라, <b>"나도 좀 챙기자"</b>를 매일 떠올리려는 다짐이에요.',
  ctaSend: '土 같은 친구에게 보내주기',
};
// =========================

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const heart = (s = 30, color = C.coral) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${color}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 8%, ${M.color}14, transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:800;letter-spacing:0.06em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오늘의 위로 · 흙(土) 기운</div>
    <div style="font-size:78px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      ${M.coverHook[0]}<br/><span style="color:${C.coral}">${M.coverHook[1]}</span></div>
    <div style="margin-top:34px;font-size:38px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">${M.coverSub}</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;display:flex;align-items:center;gap:12px">
    ${heart(28, C.coral)}<span style="font-size:27px;font-weight:700;color:${C.gold}">마음에 걸리면 저장해두세요</span></div>
` + foot;

// 02 이런 당신
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">혹시 요즘 이렇지 않아요?</div>
  <div style="position:absolute;top:230px;left:90px;right:96px;display:flex;flex-direction:column;gap:40px">
    ${M.recognize.map(t => `
      <div style="font-size:42px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">"${t}"</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">
    하나라도 끄덕였다면, 이 카드는 당신 거예요.</div>
  ${handle()}
` + foot;

// 03 큰 위로
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그동안 애썼어요</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:80px 56px;color:${C.bg};text-align:center">
    <div style="font-size:80px;font-weight:800;line-height:1.22;letter-spacing:-0.03em">
      ${M.bigComfort[0]}<br/><span style="color:${C.gold}">${M.bigComfort[1]}</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    다 짊어지지 않아도, 당신은 이미 충분해요.</div>
  ${handle()}
` + foot;

// 04 작은 허락
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">오늘은 이렇게 해봐요</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    나에게 주는 <span style="color:${C.coral}">작은 허락</span></div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${M.allow.map((t, i) => `
      <div style="display:flex;align-items:center;gap:24px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${M.color};border-radius:18px;padding:30px 32px">
        <span style="font-size:36px;font-weight:800;color:${M.color};width:44px;flex:none">0${i + 1}</span>
        <span style="font-size:32px;font-weight:700;color:${C.ink};line-height:1.35;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.5;word-break:keep-all">
    딱 하나만 해봐도, 오늘 마음이 조금 가벼워져요.</div>
  ${handle()}
` + foot;

// 05 원석 리마인더
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">곁에 두는 작은 다짐</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
    흙(土)의 색을<br/>곁에 두는 이유</div>
  <div style="position:absolute;top:470px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.72;word-break:keep-all">
    ${M.stone}</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    기운을 바꿔주는 물건이 아니라, 나를 챙기게 해주는 리마인더예요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 오늘의 위로</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오늘 하루,<br/><span style="color:${C.coral}">나부터 챙겨요</span></div>
  <div style="position:absolute;top:490px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행을 알면, 나한테 딱 맞는 위로도 찾을 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · ${M.ctaSend}</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
