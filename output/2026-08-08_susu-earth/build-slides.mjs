// 수수 3주차 피드① "토(土) 오행 — 주변에 꼭 한 명 있는 그 사람" — 태그 바이럴형 5장
// 훅: 주변 사람 시선("이런 친구 있잖아"→태그). 목표: 태그·공유. 한지 화이트 + 토(황토) 포인트.
// [필수] 마지막 페이지: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  earth: '#C8973A', // 토 시그니처(황토)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  earthbg: 'rgba(200,151,58,0.12)',
};
const TOTAL = 5;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const earthBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.earth};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${C.earth}">土</span></div>`;
// 마음/정(친구) 하트 불릿
const heart = (s = 34, color = C.earth) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.earth}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버 — 주변 시선 훅
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 타입 · 土 토</div>
    <div style="font-size:80px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      주변에 꼭 한 명 있는<br/><span style="color:${C.earth}">그 사람</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">묵묵히 다 받아주는 토(土) 친구, 지금 떠오르는 얼굴 있죠?</div>
  </div>
  <div style="position:absolute;top:820px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['힘들 때 제일 먼저 떠오르는 사람', '약속을 절대 안 어기는 사람', '없으면 유독 허전한 사람'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.7">${heart(34)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.earth};letter-spacing:0.02em">그 친구 태그 준비하세요 ✦</div>
` + foot;

// 02 토 기운이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${earthBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">토(土) 오행</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">환절기 · 흙</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    모두를 품는 <span style="color:${C.earth}">든든한 흙</span></div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    토(土)는 흙, 환절기의 기운이에요.<br/>사이사이를 메우고 <b style="color:${C.earth}">사람과 사람을 잇는</b><br/>안정과 포용의 에너지죠.</div>
  <div style="position:absolute;top:780px;left:90px;right:90px;display:flex;gap:14px">
    ${['안정', '신뢰', '포용'].map(t => `<div style="background:${C.earthbg};border:1px solid ${C.earth}66;border-radius:999px;padding:14px 30px;font-size:27px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 주변 시선 공감 (핵심 태그 훅)
const around = [
  '힘든 일이 생기면 제일 먼저 떠오른다',
  '약속을 절대 어기지 않는다',
  '티 안 내고 묵묵히 챙겨준다',
  '모임의 중심을 조용히 잡아준다',
  '있을 땐 몰라도, 없으면 허전하다',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이런 친구, 있죠?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신 곁의 <span style="color:${C.earth}">토(土)</span>는 이런 사람</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${around.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 26px">
        ${heart(38)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:132px;left:90px;font-size:27px;font-weight:700;color:${C.earth}">딱 떠오르는 얼굴, 있죠? 👀</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 왜 곁에 두면 좋은지 (가치)
const value = [
  ['흔들릴 때 중심을 잡아줘요', ''],
  ['곁에 있는 것만으로 안심돼요', ''],
  ['오래 볼수록 진가를 알게 돼요', ''],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이런 친구 하나면</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    인생이 <span style="color:${C.earth}">든든해져요</span></div>
  <div style="position:absolute;top:380px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${value.map(([t], i) => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.earth};border-radius:18px;padding:36px 34px">
        <span style="font-size:44px;font-weight:800;color:${C.earth};min-width:56px">0${i + 1}</span>
        <div style="font-size:34px;font-weight:700;color:${C.ink};word-break:keep-all">${t}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    이런 사람이 곁에 있다면, <b style="color:${C.ink}">이미 복 받은 거예요.</b></div>
  ${handle()}
` + foot;

// 05 CTA — 태그 + [필수] 프로필 링크 키워드
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">TAG · 土</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    떠오른 그 친구,<br/><span style="color:${C.earth}">태그하세요</span> 👇</div>
  <div style="position:absolute;top:530px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      그 친구를 태그하면 그 사람이 바로 토(土).<br/>내 오행도 프로필 링크에서 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 金 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
