// 수수 2월차 W5② "오행별 연애할 때 하는 행동 (토·금·수 편)" — 연애/공감형 6장
// 훅: 시리즈 저장 유도. 한지 화이트 + 토(황토)·금(강철)·수(물빛) + 하트.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  earth: '#C8973A', metal: '#52565C', water: '#3F5A6B',
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
const elBadge = (han, color, s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${color}">${han}</span></div>`;
const heart = (s = 32, color = C.coral) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" fill-opacity="0.9"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.06), transparent 55%);pointer-events:none}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 원소 연애 슬라이드 (행동 3 + 매력/조심)
function loveSlide(n, han, ko, color, season, headAccent, acts, charm, careful, caption) {
  return head() + page(n) + `
    <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
      ${elBadge(han, color)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">${ko}(${han})의 연애</div>
        <div style="font-size:22px;color:${C.sub};margin-top:4px">${season}</div></div></div>
    <div style="position:absolute;top:262px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
      ${ko}(${han})는 <span style="color:${color}">이렇게</span> 사랑해요</div>
    <div style="position:absolute;top:420px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
      ${acts.map(t => `
        <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:22px 26px">
          ${heart(34, color)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
    </div>
    <div style="position:absolute;top:790px;left:90px;right:90px;display:flex;gap:18px">
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-left:5px solid ${color};border-radius:16px;padding:26px 26px">
        <div style="font-size:22px;font-weight:800;color:${color}">이런 게 매력 ♥</div>
        <div style="margin-top:10px;font-size:25px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">${charm}</div></div>
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-left:5px solid ${C.faint};border-radius:16px;padding:26px 26px">
        <div style="font-size:22px;font-weight:800;color:${C.sub}">이건 조심</div>
        <div style="margin-top:10px;font-size:25px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">${careful}</div></div>
    </div>
    <div style="position:absolute;bottom:132px;left:90px;font-size:27px;font-weight:700;color:${color}">${caption}</div>
    <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div style="font-size:25px;font-weight:700;letter-spacing:0.14em;color:${C.coral};margin-bottom:30px">오행 연애 · 土 金 水 편</div>
    <div style="font-size:78px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      오행별<br/><span style="color:${C.coral}">연애할 때</span> 하는 행동</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">목·화 편에 이어 이번엔 토(土)·금(金)·수(水). 5원소 다 모으면 저장각 📌</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;align-items:center;gap:22px">
    <div style="display:flex;align-items:center;gap:12px">${elBadge('土', C.earth, 70)}<span style="font-size:28px;font-weight:700;color:${C.earth}">토</span></div>
    <div style="display:flex;align-items:center;gap:12px">${elBadge('金', C.metal, 70)}<span style="font-size:28px;font-weight:700;color:${C.metal}">금</span></div>
    <div style="display:flex;align-items:center;gap:12px">${elBadge('水', C.water, 70)}<span style="font-size:28px;font-weight:700;color:${C.water}">수</span></div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">목·화 편이랑 같이 저장하세요 ✦</div>
` + foot;

// 02 토
const s2 = loveSlide(2, '土', '토', C.earth, '환절기·흙 · 안정형',
  C.earth,
  ['갑자기보다 천천히 스며들어요', '챙김이 자연스럽고 한결같아요', '참다가 한번에 서운함이 터져요'],
  '편안하고 오래가는 사랑',
  '표현을 아껴서 속을 모를 때',
  '느리지만 진국인 사랑 🤎');

// 03 금
const s3 = loveSlide(3, '金', '금', C.metal, '가을·쇠 · 원칙형',
  C.metal,
  ['좋아도 티를 잘 안 내요 (츤데레)', '약속과 신뢰를 제일 중요하게', '무뚝뚝해도 챙길 건 다 챙겨요'],
  '믿음직하고 한 사람에게 진심',
  '표현이 서툴러 오해받기 쉬움',
  '무심한 척, 사실 다 챙기는 🤍');

// 04 수
const s4 = loveSlide(4, '水', '수', C.water, '겨울·물 · 감성형',
  C.water,
  ['상대 감정을 먼저 알아채요', '말보다 분위기로 마음을 전해요', '상처도 사랑도 오래 담아둬요'],
  '깊고 섬세한 교감',
  '속을 잘 안 보여줘 답답할 때',
  '조용하지만 가장 깊은 사랑 💧');

// 05 오행별 잘 맞는 상대 (시리즈 요약)
const match = [
  ['木', '목', C.wood ?? '#5E7C63', '함께 성장할 사람'],
  ['火', '화', C.fire ?? '#B0433F', '차분히 받아주는 사람'],
  ['土', '토', C.earth, '표현을 먼저 해주는 사람'],
  ['金', '금', C.metal, '믿음을 지켜주는 사람'],
  ['水', '수', C.water, '곁을 편히 내주는 사람'],
];
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.14em;color:${C.coral}">MATCH · 잘 맞는 상대</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    오행별, 이런 사람과 <span style="color:${C.coral}">잘 맞아요</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${match.map(([han, ko, c, m]) => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${c};border-radius:16px;padding:22px 26px">
        <div style="width:56px;height:56px;flex:none;border-radius:50%;background:${C.bg};border:2.5px solid ${c};display:flex;align-items:center;justify-content:center"><span style="font-size:30px;font-weight:700;color:${c}">${han}</span></div>
        <span style="font-size:28px;font-weight:700;color:${C.ink}">${ko}</span>
        ${heart(24, C.coral)}
        <span style="font-size:29px;font-weight:600;color:${C.ink};word-break:keep-all">${m}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">내 오행이랑 상대 오행, 맞춰볼까요? 📌</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 06 CTA — 시리즈 저장 유도 + 프로필 링크
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}">SAVE · 오행 연애 시리즈</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    5원소 연애,<br/><span style="color:${C.coral}">이제 다 모았죠?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      목·화 편이랑 같이 저장해두세요.<br/>내 오행이랑 상대 오행, 궁합도 확인할 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 궁합편 예고 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
