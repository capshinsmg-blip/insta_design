// 수수 3주차 피드② "금(金) 오행 — 완벽주의자의 속마음" — ISTJ·INTJ 공감형 6장
// 훅: 겉은 차갑지만 속은 진심 + "이거 다 맞으면 금(金)" 체크. 목표: 공감·저장.
// 한지 화이트 + 금(강철) 포인트. [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  metal: '#52565C', // 금 시그니처(강철)
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  metalbg: 'rgba(82,86,92,0.09)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const metalBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.metal};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${C.metal}">金</span></div>`;
const check = (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="36" rx="11" fill="${C.metalbg}" stroke="${C.metal}" stroke-width="2"/><path d="M12 20.5 L18 26 L28 14" stroke="${C.metal}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(82,86,92,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.metal}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버 — 속마음 훅
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 타입 · 金 금</div>
    <div style="font-size:76px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      차가워 보여도<br/><span style="color:${C.metal}">사실은 진심인</span> 사람</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">완벽주의자 ISTJ·INTJ, 그리고 금(金) 오행이라면 공감할걸요.</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['한번 뱉은 말은 반드시 지킨다', "'대충'이라는 걸 잘 못 한다", '겉은 무뚝뚝해도 정은 깊다'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.65">${check(34)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장하고 공감해보세요 ✦</div>
` + foot;

// 02 금 기운이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${metalBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">금(金) 오행</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">가을 · 쇠</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    가을처럼 <span style="color:${C.metal}">단단하게</span> 벼려진 기운</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    금(金)은 가을, 쇠의 기운이에요.<br/>불필요한 걸 덜어내고 <b style="color:${C.metal}">원칙과 완성</b>으로<br/>나아가는 결단의 에너지죠.</div>
  <div style="position:absolute;top:780px;left:90px;right:90px;display:flex;gap:14px">
    ${['결단', '원칙', '완성'].map(t => `<div style="background:${C.metalbg};border:1px solid ${C.metal}59;border-radius:999px;padding:14px 30px;font-size:27px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 체크리스트 (ISTJ·INTJ 공감)
const checklist = [
  '한번 뱉은 말은 반드시 지킨다',
  "'대충'이라는 걸 잘 못 한다",
  '계획이 틀어지면 스트레스받는다',
  '감정 표현이 서툴러 오해받곤 한다',
  '아닌 건 아니라고 말한다',
  '겉은 무뚝뚝해도 정은 깊다',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">공감 · ISTJ · INTJ 주목</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이거 다 맞으면 <span style="color:${C.metal}">금(金)</span></div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${checklist.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:22px 26px">
        ${check(42)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:132px;left:90px;font-size:27px;font-weight:700;color:${C.metal}">ISTJ·INTJ라면 뜨끔했죠? ✋</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 속마음 (완벽주의자의 속마음 — 리빌)
const inner = [
  ['무심한 게 아니라', '티 내는 법을 모를 뿐이에요'],
  ['까다로운 게 아니라', '실망시키기 싫을 뿐이에요'],
  ['완벽하려는 건', '그만큼 진심이라서예요'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">속마음 · 사실은</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    차가운 게 아니라 <span style="color:${C.metal}">서툴 뿐</span></div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${inner.map(([a, b]) => `
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.metal};border-radius:18px;padding:30px 34px">
        <div style="font-size:27px;font-weight:600;color:${C.sub}">${a}</div>
        <div style="margin-top:8px;font-size:32px;font-weight:800;color:${C.ink};word-break:keep-all">${b}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    그 단단함 안에, <b style="color:${C.ink}">누구보다 깊은 마음</b>이 있어요.</div>
  ${handle()}
` + foot;

// 05 균형
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 금(金)의 균형</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    넘치거나 부족하면</div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.metal};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.metal};letter-spacing:0.02em">금이 넘치면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">완벽주의로 스스로를 몰아세우고, 차가워 보여요</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.sub};letter-spacing:0.02em">금이 부족하면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">우유부단하고, 매듭을 짓기 어려워져요</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    너무 날카로워도, 무뎌도 문제예요.<br/><b style="color:${C.ink}">부족한 기운은 원석으로 채워주면 돼요.</b></div>
  ${handle()}
` + foot;

// 06 CTA — [필수] 프로필 링크 키워드
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 金</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:72px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 사주가<br/><span style="color:${C.metal}">궁금하다면?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="display:flex;align-items:center;gap:14px"><span style="font-size:40px">📌</span>
      <span style="font-size:42px;font-weight:800">프로필 링크 확인!</span></div>
    <div style="margin-top:24px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 오행 밸런스 — 어떤 기운이 강하고<br/><b style="color:${C.gold}">부족한지</b> 프로필 링크에서 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 水 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
