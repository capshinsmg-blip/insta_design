// 수수 3월차 W9① "2026 병오년(丙午) — 오행별 하반기 키워드" — 연운/저장형 6장
// 카피: 멀티에이전트 초안+명리감수+통합(검증본). 한지 화이트 + 火강년(코랄) + 오행 플래그.
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
  목: { han: '木', color: C.wood, keyword: '빛나는 표현, 에너지 관리는 필수', flag: '중립', advice: '쏟아낸 만큼 채우기. 큰 일 사이엔 회복 루틴을 꼭.' },
  화: { han: '火', color: C.fire, keyword: '주목받는 나의 계절, 과열은 조심', flag: '중립', advice: '잘 나갈 때일수록 쉬는 시간표를 먼저 짜두세요.' },
  토: { han: '土', color: C.earth, keyword: '안정과 결실의 계절', flag: '순풍', advice: '미뤄둔 결실을 거두기 좋은 때. 새 계획도 지금.' },
  금: { han: '金', color: C.metal, keyword: '단련의 시간, 큰 결단은 한 박자 늦게', flag: '주의', advice: '급한 결단·큰 계약은 미루고, 실력을 벼리는 시기로.' },
  수: { han: '水', color: C.water, keyword: '비우고 충전하는 계절', flag: '주의', advice: '충분한 잠·물·혼자만의 시간이 올해 나를 지켜요.' },
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
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(176,67,63,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 상세 카드 (자세히 슬라이드용)
const detailCard = (ko) => {
  const e = ELS[ko];
  return `<div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:18px;padding:26px 30px">
    ${elBadge(e.han, e.color, 72)}
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:12px"><span style="font-size:29px;font-weight:800;color:${C.ink}">${ko}(${e.han})</span>${flagPill(e.flag)}</div>
      <div style="margin-top:8px;font-size:25px;color:${C.sub};line-height:1.45;word-break:keep-all">${e.advice}</div>
    </div></div>`;
};

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">연운 · 2026 丙午年</div>
    <div style="font-size:66px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
      🔥 2026 병오년<br/>오행별 <span style="color:${C.coral}">하반기 키워드</span></div>
    <div style="margin-top:28px;font-size:29px;color:${C.sub};line-height:1.55;word-break:keep-all">천간 丙·지지 午, 온통 불(火)인 한 해.<br/>내 오행엔 순풍일까, 잠깐 충전할 때일까?</div>
  </div>
  <div style="position:absolute;top:860px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${['⛰️ 土 → 가장 순한 바람, 안정과 결실', '🌿 木·🔥 火 → 빛나지만 과열은 살짝 주의', '⚔️ 金·💧 水 → 조율하고 충전하는 계절'].map(t => `
      <div style="font-size:27px;font-weight:600;color:${C.sub}">${t}</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">저장하고 하반기 내내 꺼내 보세요 ✦</div>
` + foot;

// 02 병오년이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">병오년(丙午年)은 어떤 해?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    한 해 내내 <span style="color:${C.coral}">불(火)이 강한</span> 해</div>
  <div style="position:absolute;top:420px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    천간 丙(양의 불)과 지지 午(불)이 만나,<br/>火 기운이 유난히 강한 해예요.<br/><br/>불은 어떤 오행엔 힘을 주고(生),<br/>어떤 오행엔 기운을 빼거나 눌러요(洩·剋).<br/>그래서 <b style="color:${C.coral}">내 오행에 따라 부는 바람</b>이 달라요.</div>
  ${handle()}
` + foot;

// 03 오행별 키워드 한눈에
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">오행별 키워드 · 한눈에</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    내 오행, <span style="color:${C.coral}">하반기 흐름은?</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${['목', '화', '토', '금', '수'].map(ko => {
  const e = ELS[ko];
  return `<div style="display:flex;align-items:center;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:15px;padding:18px 24px">
      ${elBadge(e.han, e.color, 58)}
      <div style="flex:1"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:26px;font-weight:800;color:${e.color}">${ko}</span>${flagPill(e.flag)}</div>
      <div style="margin-top:4px;font-size:24px;font-weight:600;color:${C.ink};word-break:keep-all">${e.keyword}</div></div></div>`;
}).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;font-size:25px;color:${C.sub}">순풍 · 중립 · 주의 — 자세한 흐름은 다음 장에서 ▶</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 순풍·중립 자세히 (토·목·화)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">순풍 · 중립 오행</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    <span style="color:${C.sunpung}">순풍</span> 부는 오행은?</div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${detailCard('토')}${detailCard('목')}${detailCard('화')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">토(土)는 火生土로 결실의 해, 목·화는 빛나되 소모·과열만 관리하면 OK.</div>
  ${handle()}
` + foot;

// 05 주의·충전 자세히 (금·수)
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">주의 · 충전 오행</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    <span style="color:${C.juui}">충전</span>이 필요한 오행은?</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${detailCard('금')}${detailCard('수')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    '주의'는 나쁜 게 아니라, <b style="color:${C.ink}">단단해지고 채우는 시기</b>라는 뜻이에요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 흐름 알기</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    키워드는 참고일 뿐,<br/><span style="color:${C.coral}">진짜 흐름은 내 사주 안에</span></div>
  <div style="position:absolute;top:490px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:37px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      같은 오행이라도 태어난 원국에 따라 흐름은 달라져요.<br/>겁먹기보다, 내게 맞는 하반기를 준비해요 🌿</div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 주의 오행 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
