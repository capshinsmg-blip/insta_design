// 수수 "끌리는 계절 2개 골라 → 지금 내 오행 무드 조합" 취향 고르기(조합형) — 6장
// 참여형(댓글). pick-stone과 로직 변주: '2개 조합'. 선택=지금 마음의 거울(효능 아님).
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#9AA0A6', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

const SEASONS = [
  { emoji: '🌱', season: '봄', ko: '목', han: '木', color: C.wood, need: '새로 시작하고 싶은 마음' },
  { emoji: '🔥', season: '여름', ko: '화', han: '火', color: C.fire, need: '뜨겁게 몰입하고 싶은 마음' },
  { emoji: '🍂', season: '환절기', ko: '토', han: '土', color: C.earth, need: '안정되고 단단해지고 싶은 마음' },
  { emoji: '🍃', season: '가을', ko: '금', han: '金', color: C.metal, need: '정리하고 비우고 싶은 마음' },
  { emoji: '❄️', season: '겨울', ko: '수', han: '水', color: C.water, need: '쉬고 회복하고 싶은 마음' },
];
const COMBOS = [
  ['봄 + 가을', C.wood, C.metal, '새 시작과 정리 사이 — 비우면서 새로 채우고 싶은 때'],
  ['여름 + 겨울', C.fire, C.water, '몰입과 쉼 사이 — 뜨겁게 하고 푹 쉬고 싶은 때'],
  ['환절기 + 겨울', C.earth, C.water, '안정과 회복 사이 — 단단히 나를 돌보고 싶은 때'],
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const dot = (color, s = 22) => `<span style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${color};box-shadow:0 0 0 5px ${color}22"></span>`;

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
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오늘의 취향 테스트 · 계절 편</div>
    <div style="font-size:66px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      끌리는 계절 <span style="color:${C.coral}">2개</span>만<br/>골라봐요</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      그 두 기운의 조합이, 지금 내 마음을 비춰줘요.</div>
  </div>
  <div style="position:absolute;top:880px;left:90px;right:90px;display:flex;justify-content:space-between;font-size:64px">
    ${SEASONS.map(s => `<span>${s.emoji}</span>`).join('')}
  </div>
  <div style="position:absolute;bottom:112px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">직감으로 2개! 뒷장에서 확인 →</div>
` + foot;

// 02 안내
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">고르는 법</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    정답은 없어요</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    계절마다 오행의 기운이 담겨 있어요. 지금 눈이 가는 <b>2개</b>를 고르면, 그 조합이 요즘 내가 바라는 마음을 알려줘요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 2개, 기억해두고 뒷장에서 확인해봐요.</div>
  ${handle()}
` + foot;

// 03 계절별 기운
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">계절에 담긴 오행 기운</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    어떤 <span style="color:${C.coral}">2개</span>가 끌려요?</div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${SEASONS.map(s => `
      <div style="display:flex;align-items:center;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${s.color};border-radius:15px;padding:18px 26px">
        <span style="font-size:34px">${s.emoji}</span>
        <span style="font-size:28px;font-weight:800;color:${C.ink};width:150px">${s.season} · ${s.ko}(${s.han})</span>
        <span style="font-size:26px;color:${C.sub};word-break:keep-all">${s.need}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 조합 해석 예시
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">두 기운의 조합은?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    예를 들면 <span style="color:${C.coral}">이런 느낌</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${COMBOS.map(([name, c1, c2, desc]) => `
      <div style="background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:26px 30px">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">${dot(c1, 20)}${dot(c2, 20)}<span style="font-size:28px;font-weight:800;color:${C.ink}">${name}</span></div>
        <div style="font-size:26px;color:${C.sub};line-height:1.45;word-break:keep-all">${desc}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    내가 고른 조합엔 어떤 마음이 담겼을까요?</div>
  ${handle()}
` + foot;

// 05 거울 리마인더
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이건 거울이에요</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    맞히는 게 아니라,<br/><span style="color:${C.coral}">비추는 거예요</span></div>
  <div style="position:absolute;top:520px;left:90px;right:96px;font-size:33px;color:${C.ink};font-weight:500;line-height:1.72;word-break:keep-all">
    고른 2개가 지금 내가 바라는 두 가지 기운이에요. 정답을 맞히는 테스트가 아니라, 요즘 내 마음을 잠깐 들여다보는 거울이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">COMMENT · 뭐 골랐어요?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    당신의 <span style="color:${C.coral}">2개</span>는요?</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 계절 2개를 댓글로 남겨줘요. 친구는 어떤 조합일지 궁금하면 태그!</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 사주에 어떤 오행이 부족한지 알면, 끌리는 계절이 더 잘 보여요.</div>
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
