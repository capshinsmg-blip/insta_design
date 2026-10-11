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
  { ko: '목', han: '木', color: C.wood, t: '뭐든 리드하고 밀어붙이는 사람. 나를 이끌어주는 든든함에 끌려요.' },
  { ko: '화', han: '火', color: C.fire, t: '표현이 확실하고 다정한 사람. 좋아하는 티 팍팍 내주는 게 좋아요.' },
  { ko: '토', han: '土', color: C.earth, t: '한결같고 편안한 사람. 요란하지 않아도 늘 곁에 있는 안정감에 끌려요.' },
  { ko: '금', han: '金', color: C.metal, t: '깔끔하고 자기 세계가 뚜렷한 사람. 흔들리지 않는 단단함이 멋져 보여요.' },
  { ko: '수', han: '水', color: C.water, t: '말은 적어도 속 깊은 사람. 나를 조용히 다 알아주는 느낌에 스며들어요.' },
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
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">${elBadge(W, 56)}<span style="font-size:28px;font-weight:800;color:${W.color}">${W.ko}(${W.han}) 같은 사람</span></div>
    <div style="font-size:31px;font-weight:600;color:${C.ink};line-height:1.55;word-break:keep-all">"${W.t}"</div>
  </div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행별 이상형 · 이런 사람에게 끌려요</div>
    <div style="font-size:74px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      나는 어떤 사람에게<br/><span style="color:${C.coral}">끌릴까?</span></div>
    <div style="margin-top:32px;font-size:35px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">내 오행이 끌리는 타입, 은근 잘 맞아요.</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">내 이상형인 친구 있으면 태그 👀</div>
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
    내 오행이 끌리는 타입, 유독 고개 끄덕여졌다면 저장!</div>
  ${handle()}
` + foot;

// 05 한 줄 정리
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서 결론은</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:80px 54px;color:${C.bg};text-align:center">
    <div style="font-size:52px;font-weight:800;line-height:1.35;letter-spacing:-0.02em">
      끌리는 데는<br/><span style="color:${C.gold}">다 이유가 있어요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    내 오행이 뭘 채우고 싶은지가, 이상형에도 은근히 담겨요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">TAG · 내 이상형</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    딱 <span style="color:${C.coral}">이런 사람</span> 있잖아요</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    내 이상형은 몇 번 오행이었어요? 댓글로 남기고, 딱 떠오르는 그 사람 태그해봐요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행을 알면, 나랑 잘 맞는 오행도 찾을 수 있어요.</div>
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
