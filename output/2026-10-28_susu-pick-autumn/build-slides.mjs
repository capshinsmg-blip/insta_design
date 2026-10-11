// 수수 "지금 끌리는 가을 장면 하나 골라봐" 취향 고르기 #3 · 가을 편 — 6장 (발행 10/28 수)
// 참여형(댓글). 복제 원본: 2026-09-08_susu-pick-stone (단일 선택형). 선택=지금 내 마음을 비추는 '거울'(효능·운명 아님).
// 규칙: 따뜻한 팔레트·사람 말투. 원석=상징 고정 문구. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
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

const OPT = [
  { key: '1', emoji: '🌄', label: '해 뜨는 새벽 산길', el: '목(木)', color: C.wood, need: '새로 시작하고 싶은 마음', line: '뻗어나갈 힘이 차오르는 중이에요' },
  { key: '2', emoji: '🔥', label: '모닥불 앞, 친구들 웃음소리', el: '화(火)', color: C.fire, need: '사람 속에서 데워지고 싶은 마음', line: '온기와 표현이 그리운 때예요' },
  { key: '3', emoji: '🍠', label: '따뜻한 아랫목과 군고구마', el: '토(土)', color: C.earth, need: '안정되고 든든해지고 싶은 마음', line: '단단한 일상이 필요한 신호예요' },
  { key: '4', emoji: '🍂', label: '낙엽 쓸린 조용한 골목', el: '금(金)', color: C.metal, need: '정리하고 비우고 싶은 마음', line: '덜어내고 가벼워지고 싶은 때예요' },
  { key: '5', emoji: '🌧️', label: '비 오는 창가, 차 한 잔', el: '수(水)', color: C.water, need: '쉬고 회복하고 싶은 마음', line: '느려져서 나를 채우고 싶은 때예요' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
// 원본 stone() 자리 → 장면 이모지 원형 칩 (오행색 테두리)
const scene = (o, s = 92) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${o.color}18;border:2px solid ${o.color}55;display:flex;align-items:center;justify-content:center;font-size:${Math.round(s * 0.5)}px;line-height:1">${o.emoji}</div>`;

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

const resultCard = (o) => `
  <div style="display:flex;align-items:center;gap:24px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${o.color};border-radius:18px;padding:24px 28px">
    ${scene(o, 64)}
    <div style="flex:1"><div style="display:flex;align-items:center;gap:12px"><span style="font-size:26px;font-weight:800;color:${o.color}">${o.key} · ${o.label}</span></div>
    <div style="margin-top:5px;font-size:27px;font-weight:700;color:${C.ink};word-break:keep-all">${o.el} · ${o.need}</div>
    <div style="margin-top:3px;font-size:23px;color:${C.sub};line-height:1.35;word-break:keep-all">${o.line}</div></div></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오늘의 취향 테스트 · 가을 편</div>
    <div style="font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      지금 제일 끌리는<br/><span style="color:${C.coral}">가을 장면</span> 하나 골라봐요</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      정답은 없어요. 눈이 가는 장면이<br/>요즘 내 마음이 바라는 기운을 살짝 비춰줘요.</div>
  </div>
  <div style="position:absolute;top:900px;left:90px;right:90px;display:flex;justify-content:space-between">
    ${OPT.map(o => scene(o, 86)).join('')}
  </div>
  <div style="position:absolute;bottom:112px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">직감으로 딱 하나! 뒷장에서 확인 →</div>
` + foot;

// 02 안내
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">고르는 법</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    정답은 없어요</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    가을 장면마다 오행의 기운이 담겨 있어요. 지금 눈이 가는 장면 하나가, 요즘 내 마음이 바라는 기운을 살짝 알려줘요. 너무 고민 말고 <b>직감으로</b> 딱 하나만 골라요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 번호(1~5) 기억해두고, 뒷장에서 확인해봐요.</div>
  ${handle()}
` + foot;

// 03 선택지
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">어떤 장면이 제일 끌려요?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    <span style="color:${C.coral}">딱 하나만</span> 골라봐요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${OPT.map(o => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:20px 30px">
        ${scene(o, 66)}
        <span style="font-size:34px;font-weight:800;color:${C.ink}">${o.key}</span>
        <span style="font-size:32px;font-weight:600;color:${o.color};word-break:keep-all">${o.label}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 결과 1~3
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내가 고른 건? (1/2)</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    지금 <span style="color:${C.coral}">내 마음</span>은요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${[OPT[0], OPT[1], OPT[2]].map(resultCard).join('')}
  </div>
  ${handle()}
` + foot;

// 05 결과 4~5 + 거울·리마인더
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내가 고른 건? (2/2)</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${[OPT[3], OPT[4]].map(resultCard).join('')}
  </div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:20px;padding:34px 36px;font-size:29px;color:${C.ink};line-height:1.6;word-break:keep-all">
    끌리는 장면은 운명도 효능도 아니라, <b>지금 내 마음을 비춰주는 거울</b>이에요. 맞았다면 잠깐 나를 챙겨주라는 신호로요. 그 오행 빛깔을 곁에 두는 것도 '잊지 말자'는 리마인더일 뿐이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">COMMENT · 뭐 골랐어요?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    당신은 <span style="color:${C.coral}">몇 번</span>이었어요?</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 번호(1~5)나 오행이랑 "맞다/아니다"를 댓글로 남겨줘요. 친구는 뭘 골랐을지 궁금하면 태그!</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 사주에 어떤 오행이 비어 있는지 알면, 끌리는 장면이 더 잘 보여요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 댓글 · 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
