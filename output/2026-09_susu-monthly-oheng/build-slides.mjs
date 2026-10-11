// 수수 월간 시리즈 1회차 "이달의 오행 흐름 — 2026년 9월(병오년 丁酉월/金)" — 6장
// 카피: 멀티에이전트 초안+명리감수(오호둔 월간지·酉月 생극 검증) 통합. 한지 화이트 + 코랄(연운 시리즈 accent).
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#52565C', water: '#3F5A6B',
  sunpung: '#5E7C63', jungrip: '#C8973A', juui: '#A83848',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 6;
const FLAGC = { '순풍': C.sunpung, '중립': C.jungrip, '주의': C.juui };

const ELS = {
  금: { han: '金', color: C.metal, keyword: '제 계절 만난 반등', flag: '순풍', note: '酉月을 만나 여름내 눌렸던 金이 회복·단단해지는 흐름', advice: '미뤄둔 마무리·결정을 하나씩 매듭지어요. 결단이 잘 서는 때.' },
  수: { han: '水', color: C.water, keyword: '차오르는 회복의 조짐', flag: '중립', note: '金生水로 기운을 받아 서서히 차오르는 초입', advice: '쉼·수분·재정비로 안을 채워요. 잠과 물 한 잔부터.' },
  토: { han: '土', color: C.earth, keyword: '바쁜 결실 나눔', flag: '중립', note: '火生土로 받고 土生金으로 내어주며 분주한 흐름', advice: '나누되 내 몫도 챙기며 페이스 조절, 사이사이 쉼표.' },
  화: { han: '火', color: C.fire, keyword: '정점 지나 숨 고르기', flag: '중립', note: '여름 정점을 지나 갈무리하는 때(火 기세 완화)', advice: '속도를 살짝 늦추고, 벌여둔 일을 정리하며 다음을 준비.' },
  목: { han: '木', color: C.wood, keyword: '정리·가지치기', flag: '주의', note: '金克木 — 왕성한 金 앞에서 木은 정리로 향하는 흐름', advice: '큰 확장은 다음으로. 덜어내고 다듬으면 오히려 가벼워져요.' },
};

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 72) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;
const flagPill = (flag) => `<span style="font-size:20px;font-weight:800;color:${FLAGC[flag]};background:${FLAGC[flag]}1F;border:1px solid ${FLAGC[flag]}55;border-radius:999px;padding:5px 16px">${flag}</span>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(82,86,92,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

const detailCard = (ko) => {
  const e = ELS[ko];
  return `<div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:18px;padding:24px 28px">
    ${elBadge(e.han, e.color, 74)}
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:12px"><span style="font-size:28px;font-weight:800;color:${C.ink}">${ko}(${e.han})</span>${flagPill(e.flag)}<span style="font-size:24px;font-weight:700;color:${e.color}">${e.keyword}</span></div>
      <div style="margin-top:8px;font-size:24px;color:${C.sub};line-height:1.45;word-break:keep-all">${e.advice}</div>
    </div></div>`;
};

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">이달의 오행 흐름 · 2026.09</div>
    <div style="font-size:70px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
      9월, 내 오행은<br/><span style="color:${C.coral}">순풍일까 주의일까?</span></div>
    <div style="margin-top:28px;font-size:29px;color:${C.sub};line-height:1.55;word-break:keep-all">병오년(丙午) · 丁酉월/金 편 — 火 강세 속, 이달의 주인공은 반등하는 金이에요.</div>
  </div>
  <div style="position:absolute;top:855px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${['⚔️ 金 · 제 계절 만나 반등 (순풍)', '🔥 火 · 정점 지나 숨 고르기', '🌿 木 · 정리로 접어드는 때 (주의)'].map(t => `
      <div style="font-size:27px;font-weight:600;color:${C.sub}">${t}</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">저장하고 이달 내내 꺼내 보세요 ✦</div>
` + foot;

// 02 9월은 어떤 달
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">9월은 어떤 달?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    백로 지나 <span style="color:${C.coral}">金의 시간</span>으로</div>
  <div style="position:absolute;top:420px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    9월 7일 백로가 지나면, 절기의 계절은<br/><b style="color:${C.metal}">酉月(유월) — 金의 시간</b>으로 들어서요.<br/>올해는 병오년이라 火 기운이 배경에 짙지만,<br/>방향은 서서히 <b style="color:${C.metal}">金으로</b> 기울죠.</div>
  <div style="position:absolute;top:900px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    ※ 달력의 월과 절기의 월은 조금 어긋나고, 체감은 <b style="color:${C.ink}">내 사주 원국에 따라</b> 달라요.</div>
  ${handle()}
` + foot;

// 03 오행별 흐름 한눈에
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">9월 오행 흐름 · 한눈에</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    내 오행, <span style="color:${C.coral}">이달 흐름은?</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${['금', '수', '토', '화', '목'].map(ko => {
  const e = ELS[ko];
  return `<div style="display:flex;align-items:center;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:15px;padding:18px 24px">
      ${elBadge(e.han, e.color, 58)}
      <div style="flex:1"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:26px;font-weight:800;color:${e.color}">${ko}</span>${flagPill(e.flag)}</div>
      <div style="margin-top:4px;font-size:24px;font-weight:600;color:${C.ink};word-break:keep-all">${e.keyword}</div></div></div>`;
}).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;font-size:25px;color:${C.sub}">자세한 흐름·조언은 다음 장에서 ▶</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 반등·회복 (금·수)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">반등 · 회복 오행</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이달의 <span style="color:${C.metal}">주인공은 金</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${detailCard('금')}${detailCard('수')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    金이 제 계절을 만나 반등하고, 金生水로 <b style="color:${C.ink}">水도 회복의 조짐</b>이에요.</div>
  ${handle()}
` + foot;

// 05 갈무리·결실·정리 (화·토·목)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">갈무리 · 결실 · 정리</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    나머지 오행의 <span style="color:${C.coral}">9월</span></div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${detailCard('화')}${detailCard('토')}${detailCard('목')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    '주의'는 나쁜 게 아니라, <b style="color:${C.ink}">덜어내고 다듬는 시기</b>라는 뜻이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 오행의 9월</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    그래서, <span style="color:${C.coral}">내 오행의 9월은?</span></div>
  <div style="position:absolute;top:470px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:27px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      흐름은 큰 계절의 바람이에요. 체감은 내 원국에 따라 달라요.<br/>겁먹기보다 '준비'의 힌트로 가볍게 즐겨요 🌾</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">매월 1일 · 이달의 오행 흐름 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
