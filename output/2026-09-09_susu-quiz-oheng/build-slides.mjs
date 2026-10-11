// 수수 "3초 오행 퀴즈" — 6장
// 정답 유도 댓글 포맷. 문제 3개 → 정답 공개 → 몇 개 맞았는지 댓글.
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

const Q = [
  { hint: '한번 꽂히면 앞뒤 없이 돌진하고, 지는 건 정말 싫어해요', ans: '목', han: '木', color: C.wood, know: '나무처럼 위로 쭉 뻗는 추진력, 그게 목(木)이에요' },
  { hint: '밝고 텐션 최고, 근데 확 타올랐다가 금방 식어버려요', ans: '화', han: '火', color: C.fire, know: '불처럼 확 타올랐다 식는 열정, 그게 화(火)예요' },
  { hint: '말수는 적고 차분한데, 눈치·촉이 빠르고 알고 보면 정 많아요', ans: '수', han: '水', color: C.water, know: '물처럼 조용히 깊게 흐르는 마음, 그게 수(水)예요' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 62) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
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
  <div style="position:absolute;top:330px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">3초 오행 퀴즈 🧠</div>
    <div style="font-size:78px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      이 설명, <span style="color:${C.coral}">무슨 오행</span>일까요?</div>
    <div style="margin-top:34px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      문제 3개, 정답은 댓글에 먼저 남겨봐요. 다 맞히면 사주 촉 상위권!</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">정답은 5번째 장에서 공개 👀</div>
` + foot;

const qSlide = (n, idx) => {
  const it = Q[idx];
  return head() + page(n) + `
  <div style="position:absolute;top:96px;left:90px" class="label">문제 ${idx + 1}</div>
  <div style="position:absolute;top:230px;left:90px;font-size:150px;font-weight:800;color:${C.faint};line-height:0.9">Q${idx + 1}</div>
  <div style="position:absolute;top:470px;left:90px;right:96px;font-size:46px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">
    "${it.hint}"</div>
  <div style="position:absolute;top:820px;left:90px;font-size:40px;font-weight:800;color:${C.coral}">무슨 오행일까요?</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.5;word-break:keep-all">
    정답 떠올랐으면 댓글에 한 글자로 남겨봐요.</div>
  ${handle()}
` + foot;
};
const s2 = qSlide(2, 0);
const s3 = qSlide(3, 1);
const s4 = qSlide(4, 2);

// 05 정답 공개
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">정답 공개 🎉</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    몇 개나 <span style="color:${C.coral}">맞혔어요?</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${Q.map((it, i) => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${it.color};border-radius:16px;padding:22px 26px">
        <span style="font-size:26px;font-weight:800;color:${C.sub};width:52px;flex:none">Q${i + 1}</span>
        ${elBadge(it.han, it.color, 58)}
        <div style="flex:1"><div style="font-size:27px;font-weight:800;color:${it.color}">${it.ans}(${it.han})</div>
        <div style="margin-top:4px;font-size:23px;font-weight:600;color:${C.sub};line-height:1.35;word-break:keep-all">${it.know}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SCORE · 몇 점?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    점수는 <span style="color:${C.coral}">댓글로</span> 자랑해요</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    3개 다 맞혔으면 사주 촉 상위권! 몇 개 맞았는지 댓글에 남기고, 친구도 데려와서 시켜봐요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행이 뭔지 알면, 다음 퀴즈는 다 맞힐 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">댓글 · 친구 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
