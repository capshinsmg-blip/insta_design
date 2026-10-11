// 수수 "오행별 스트레스 푸는 법" — 6장
// 저장형 실용. 오행마다 맞는 해소법이 다름. 정체성 비난 없이 실용 팁.
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

const WAYS = [
  { ko: '목', han: '木', color: C.wood, way: '몸을 움직여서 풀어요', t: '뻗치는 에너지는 밖으로. 산책·운동·새로운 계획 짜기가 잘 맞아요.' },
  { ko: '화', han: '火', color: C.fire, way: '신나게 분출해서 풀어요', t: '참지 말고 확! 노래방·수다·춤처럼 뜨겁게 쏟아내면 개운해져요.' },
  { ko: '토', han: '土', color: C.earth, way: '익숙한 걸로 안정시켜요', t: '집밥·정리·늘 가던 산책길. 편안한 루틴이 마음을 가라앉혀요.' },
  { ko: '금', han: '金', color: C.metal, way: '혼자 정돈하며 풀어요', t: '방 정리하고 할 일 목록 딱 정리. 깔끔해지면 머리도 개운해져요.' },
  { ko: '수', han: '水', color: C.water, way: '조용히 잠수해서 충전해요', t: '따뜻한 물·잠·혼자만의 시간. 아무 말 안 해도 되는 시간이 약이에요.' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (W, s = 60) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${W.color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${W.color}">${W.han}</span></div>`;

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

const wayCard = (W) => `
  <div style="display:flex;align-items:flex-start;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${W.color};border-radius:18px;padding:24px 28px">
    ${elBadge(W, 60)}
    <div style="flex:1">
      <div style="font-size:27px;font-weight:800;color:${W.color}">${W.ko}(${W.han}) · ${W.way}</div>
      <div style="margin-top:6px;font-size:26px;font-weight:500;color:${C.ink};line-height:1.5;word-break:keep-all">${W.t}</div>
    </div></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행별 스트레스 해소법</div>
    <div style="font-size:74px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      스트레스, <span style="color:${C.coral}">푸는 법</span>이<br/>오행마다 달라요</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      안 맞는 방법은 오히려 더 지쳐요. 내 방식부터 찾아봐요.</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">저장해두고 힘들 때 꺼내 보세요 🍃</div>
` + foot;

// 02 목·화·토
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내 오행에 맞는 방법 (1/2)</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${wayCard(WAYS[0])}${wayCard(WAYS[1])}${wayCard(WAYS[2])}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 03 금·수
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내 오행에 맞는 방법 (2/2)</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${wayCard(WAYS[3])}${wayCard(WAYS[4])}
  </div>
  <div style="position:absolute;top:560px;left:90px;right:96px;font-size:33px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">
    내 방법, <span style="color:${C.coral}">여기 있었네요</span> 🎯</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    나랑 안 맞는 방법으로 억지로 풀면 더 지쳐요.</div>
  ${handle()}
` + foot;

// 04 공통 팁
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">기억할 한 가지</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:76px 54px;color:${C.bg};text-align:center">
    <div style="font-size:50px;font-weight:800;line-height:1.4;letter-spacing:-0.02em;word-break:keep-all">
      나한테 맞는 방법이<br/><span style="color:${C.gold}">제일 잘 풀려요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    남들 방식 따라 하지 말고, 내 결대로 쉬어요.</div>
  ${handle()}
` + foot;

// 05 부족한 기운 채우기 (원석 리마인더)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">곁에 두는 작은 도움</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    내 색을 곁에 두면</div>
  <div style="position:absolute;top:440px;left:90px;right:96px;font-size:33px;color:${C.ink};font-weight:500;line-height:1.72;word-break:keep-all">
    내 오행 색을 곁에 두는 건 기운을 바꿔주는 물건이라서가 아니라, <b>"오늘은 나부터 쉬자"</b>를 떠올리게 해주는 리마인더예요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    스트레스 받을 때 한 번씩 눈에 들어오게요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 해소법</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오늘은 <span style="color:${C.coral}">내 방식대로</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    내 오행은 몇 번이었어요? 댓글로 알려주고, 요즘 힘든 친구에게도 보내주세요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행을 알면, 나한테 딱 맞는 쉬는 법도 정확히 찾을 수 있어요.</div>
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
