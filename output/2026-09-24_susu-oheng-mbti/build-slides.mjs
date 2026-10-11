// 수수 "오행 × MBTI 재미 크로스" — 6장
// 신규 유입(MBTI 검색). 멀티에이전트 감수(safe:true): 인과·규정·운명론 금지, '재미 무드 매칭' 선긋기, 실제 오행=사주 분리.
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

const MAP = [
  { ko: '목', han: '木', color: C.wood, mood: '추진·리더십', mbti: 'ENTJ · ESTJ · ENFJ', why: '앞장서 판을 만드는 에너지가 쭉 뻗는 나무랑 통해서' },
  { ko: '화', han: '火', color: C.fire, mood: '밝음·표현', mbti: 'ENFP · ESFP · ENTP · ESTP', why: '있으면 자리가 환해지는 분위기가 활활 타는 불이랑 닮아서' },
  { ko: '토', han: '土', color: C.earth, mood: '안정·챙김', mbti: 'ISFJ · ESFJ · ISFP', why: '든든하게 받쳐주는 느낌이 넉넉한 땅이랑 비슷해서' },
  { ko: '금', han: '金', color: C.metal, mood: '논리·단정', mbti: 'ISTJ · INTJ · ISTP', why: '군더더기 없는 정돈이 잘 벼린 쇠붙이랑 통해서' },
  { ko: '수', han: '水', color: C.water, mood: '깊음·직관', mbti: 'INFJ · INFP · INTP', why: '티 안 나게 다 읽는 촉이 고요한 물이랑 닮아서' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (m, s = 62) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${m.color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${m.color}">${m.han}</span></div>`;

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

const mapCard = (m) => `
  <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${m.color};border-radius:18px;padding:22px 28px">
    ${elBadge(m, 62)}
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:12px"><span style="font-size:27px;font-weight:800;color:${m.color}">${m.ko}(${m.han})</span><span style="font-size:23px;font-weight:700;color:${C.sub}">${m.mood}</span></div>
      <div style="margin-top:6px;font-size:28px;font-weight:800;color:${C.ink};letter-spacing:0.01em">${m.mbti}</div>
      <div style="margin-top:4px;font-size:22px;color:${C.sub};line-height:1.35;word-break:keep-all">${m.why}</div>
    </div></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:320px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">재미로 보는 크로스</div>
    <div style="font-size:82px;font-weight:800;line-height:1.14;letter-spacing:-0.04em;word-break:keep-all">
      <span style="color:${C.coral}">MBTI</span> × 오행,<br/>무슨 조합일까?</div>
    <div style="margin-top:34px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      성격유형은 아는데, 내 오행은 처음이죠?</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">같은 조합인 친구 있으면 태그 👀</div>
` + foot;

// 02 선긋기 (framing)
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">잠깐, 이건 이런 거예요</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    서로 <span style="color:${C.coral}">다른 렌즈</span>예요</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:32px;color:${C.ink};font-weight:500;line-height:1.72;word-break:keep-all">
    오행은 <b>사주에서 보는 타고난 기질의 흐름</b>, MBTI는 <b>성격유형 검사</b>예요. 오늘은 그냥 '에너지가 비슷한 짝'을 재미로 맞춰봤어요.</div>
  <div style="position:absolute;top:900px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.55;word-break:keep-all">
    ※ 오행이 MBTI를, MBTI가 오행을 정하는 건 아니에요. 순수 재미용!</div>
  ${handle()}
` + foot;

// 03 목·화·토
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">에너지가 통하는 짝 (1/2)</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${mapCard(MAP[0])}${mapCard(MAP[1])}${mapCard(MAP[2])}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 금·수
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">에너지가 통하는 짝 (2/2)</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${mapCard(MAP[3])}${mapCard(MAP[4])}
  </div>
  <div style="position:absolute;top:560px;left:90px;right:96px;font-size:34px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">
    내 MBTI는 <span style="color:${C.coral}">어느 오행</span>이랑 통해요?</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    맞으면 신기하고, 아니어도 재밌는 게 크로스의 매력 😉</div>
  ${handle()}
` + foot;

// 05 실제 오행은 사주로 (분리)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">근데 진짜 내 오행은?</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    오행은 <span style="color:${C.coral}">사주로</span> 봐요</div>
  <div style="position:absolute;top:490px;left:90px;right:96px;font-size:33px;color:${C.ink};font-weight:500;line-height:1.72;word-break:keep-all">
    오늘 매칭은 어디까지나 무드 놀이! 실제 내 오행은 <b>태어난 날짜·시간(사주)</b>으로 봐야 정확해요. MBTI로 내 오행이 정해지는 건 아니에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">TAG · 같은 조합?</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    같은 조합인 <span style="color:${C.coral}">친구</span>,<br/>딱 떠오르죠?</div>
  <div style="position:absolute;top:420px;left:90px;right:96px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">
    태그해서 "너 이거 맞아?" 물어봐요. 내 MBTI랑 오행 조합도 댓글로!</div>
  <div style="position:absolute;top:650px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:42px 46px;color:${C.bg}">
    <div style="font-size:34px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:16px;font-size:27px;line-height:1.55;color:rgba(247,242,236,0.84);word-break:keep-all">
      실제 내 오행은 사주(생년월일시)로 확인할 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">친구 태그 · 댓글</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
