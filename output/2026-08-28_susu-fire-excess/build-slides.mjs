// 수수 (재구성 C) "√ 이거 다 맞으면 火 과다? — 시작만 뜨겁고 금방 식는 사람" 체크리스트 6장
// 훅: 자가진단 체크 + 태그. 화 과다=성향(좋고 나쁨 아님), 균형(水·金)으로 착지.
// 한지 화이트 + 화(火) 빨강 포인트. [필수] "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  fire: '#B0433F', water: '#3F5A6B', metal: '#52565C',
  firebg: 'rgba(176,67,63,0.10)',
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
const fireBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${C.fire};display:flex;align-items:center;justify-content:center"><span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${C.fire}">火</span></div>`;
const check = (s = 42) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="36" rx="11" fill="${C.firebg}" stroke="${C.fire}" stroke-width="2"/><path d="M12 20.5 L18 26 L28 14" stroke="${C.fire}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(176,67,63,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.fire}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 자가진단 · 火 과다</div>
    <div style="font-size:76px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      시작만 뜨겁고<br/><span style="color:${C.fire}">금방 식는 사람?</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">이거 다 맞으면 당신, '火 과다'일지도 몰라요 🔥</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['불타오르다 갑자기 확 식는다', '하고 싶은 게 자주 바뀐다', '욱했다가 금방 후회한다'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.6">${check(38)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장하고 체크해보세요 ✦</div>
` + foot;

// 02 화 과다란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${fireBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">火 과다</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">불(火)이 넘치는 상태</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    열정은 폭발, <span style="color:${C.fire}">오래는 못 가는</span></div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    사주에 불(火) 기운이 넘치면,<br/><b style="color:${C.fire}">순간 화력은 최고</b>지만<br/>금세 타버려 지치기 쉬운 경향이 있어요.<br/><br/>좋고 나쁨이 아니라, 그저 <b style="color:${C.ink}">기질의 결</b>이에요.</div>
  ${handle()}
` + foot;

// 03 체크리스트
const checklist = [
  '시작할 땐 누구보다 불타는데 금방 식는다',
  '하고 싶은 게 자주 바뀐다 (동시에 여러 개)',
  '욱했다가 금방 후회한 적이 많다',
  '감정이 얼굴·말투에 다 드러난다',
  '지루한 건 1초도 못 참는다',
  '주목받고 인정받고 싶은 마음이 크다',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">CHECK · 나 火 과다일까?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이런 나, <span style="color:${C.fire}">몇 개나</span> 맞을까?</div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${checklist.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:20px 26px">
        ${check(40)}<span style="font-size:29px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;font-size:27px;font-weight:700;color:${C.fire}">4개 이상이면 '火 과다' 기질! 🔥</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 강점
const strengths = [
  ['폭발적인 추진력', '한번 붙으면 무섭게 몰아쳐요'],
  ['끌어당기는 에너지', '곁에 있으면 덩달아 신이 나요'],
  ['숨김없는 솔직함', '마음이 투명해서 편안해요'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">STRONG · 火 과다의 매력</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    근데 이거, <span style="color:${C.fire}">엄청난 무기</span>예요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${strengths.map(([t, d]) => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:18px;padding:32px 32px">
        <span style="font-size:38px">🔥</span>
        <div><div style="font-size:32px;font-weight:800;color:${C.ink}">${t}</div>
          <div style="margin-top:6px;font-size:26px;color:${C.sub};line-height:1.45;word-break:keep-all">${d}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;font-weight:700;color:${C.fire}">불은 잘 다루면 최고의 에너지 🔥</div>
  ${handle()}
` + foot;

// 05 균형 (水·金)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 火 다스리기</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    넘치는 불엔 <span style="color:${C.water}">水</span>·<span style="color:${C.metal}">金</span>을</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.water};border-radius:18px;padding:30px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.water}">💧 水 — 열 식히기</div>
      <div style="margin-top:10px;font-size:29px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">충분한 잠·수분·혼자만의 시간으로 과열을 낮춰요.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.metal};border-radius:18px;padding:30px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.metal}">⚙️ 金 — 매듭짓기</div>
      <div style="margin-top:10px;font-size:29px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">벌인 일 하나씩 마무리, 큰 결정은 하루 자고 결정.</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    부족한 기운은 <b style="color:${C.ink}">색·원석으로 곁에 두는 상징</b>으로 챙겨도 좋아요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px;font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.fire}">COMMENT · 몇 개?</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    몇 개<br/><span style="color:${C.fire}">체크됐나요?</span> 🔥</div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:50px 48px;color:${C.bg}">
    <div style="font-size:38px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      댓글에 체크 개수를 남겨주세요.<br/>내 주변 '火 과다' 친구도 태그해봐요 🔥</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 태그 🔥</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
