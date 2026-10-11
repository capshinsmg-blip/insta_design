// 수수 월간 시리즈 3회차 "이달의 오행 흐름 — 2026년 11월(병오년 己亥월/水)" — 6장
// 카피: 멀티에이전트 초안+명리감수(오호둔 월주 己亥·亥月 왕상휴수사·亥木장생 검증, safe:true) 통합.
// 한지 화이트 + 코랄(월간 시리즈 accent) + 水(청록) 시그니처 글로우. [필수] 마지막 "나의 사주가 궁금하다면? 프로필 링크 확인!"
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
const FOCUS = C.water; // 이달 주인공 水

const ELS = {
  수: { han: '水', color: C.water, flag: '순풍', keyword: '제 계절 만나 왕성히 차오름', advice: '밖으로 뻗기보다 안으로 모으기. 푹 자고 물 한 잔, 다음 계획을 조용히.' },
  목: { han: '木', color: C.wood, flag: '순풍', keyword: '장생 — 뿌리 내리는 상승', advice: '봄에 자라날 씨앗이 되는 때. 배움·준비를 조용히 시작하기 좋아요.' },
  금: { han: '金', color: C.metal, flag: '중립', keyword: '내어주며 비우는 흐름', advice: '꽉 쥔 걸 조금 내려놓아요. 비운 만큼 가벼워지고 여백이 생겨요.' },
  토: { han: '土', color: C.earth, flag: '주의', keyword: '발밑을 다지는 때', advice: '크게 벌이기보다 발밑을 단단히. 기본·루틴부터 다지면 든든해요.' },
  화: { han: '火', color: C.fire, flag: '주의', keyword: '온기를 지키는 때', advice: '크게 태우기보다 작은 불씨를 지켜요. 잘 자고 따뜻하게, 나부터.' },
};

const M = {
  ym: '2026.11', mm: '11',
  label: '이달의 오행 흐름 · 2026.11',
  cover_hook: ['겨울의 첫 문 11월,', '내 오행은 어디로 흐를까?'],
  cover_sub: '병오년(丙午) · 己亥월/水 편 — 火 기운이 배경에 남은 채, 이달의 주인공은 왕성하게 차오르는 물(水)이에요.',
  cover_bullets: ['🌊 水 · 제 계절 만나 왕성히 차오름 (순풍)', '🌿 木 · 물의 뿌리 얻어 장생 상승 (순풍)', '🔥 火 · 겨울 문턱, 온기를 지키는 때 (주의)'],
  month_headline: ['입동 지나', '水의 시간으로'],
  month_body: '11월 7일 입동이 지나면, 절기의 계절은 <b style="color:' + C.water + '">亥月(해월) — 물(水)의 시간</b>으로 들어서요. 겨울의 첫 문이 열리고 물의 기운이 왕성해지는 달이에요. 병오년이라 <b style="color:' + C.fire + '">火</b> 기운은 배경에 뿌리로 남고, 흐름은 <b style="color:' + C.water + '">水로</b> 모여요.',
  order: ['수', '목', '금', '토', '화'],
  focus_han: '水',
  groupA: { label: '차오름 · 상승 오행', kos: ['수', '목'], summary: '水가 제 계절을 만나 차오르고, 水生木으로 木도 뿌리를 내려요.' },
  groupB: { label: '비움 · 다짐 · 온기', kos: ['금', '토', '화'], headline: '나머지 오행의 11월', summary: "'주의'는 나쁜 게 아니라, 힘을 아끼고 안을 다지는 시기라는 뜻이에요." },
  cta_note: '겨울은 끝이 아니라 안으로 모으고 씨앗을 품는 계절이에요. 흐름은 큰 계절의 바람이라 체감은 내 원국에 따라 달라요. 겁먹기보다 따뜻하게 나를 데우며 천천히 준비해요 ❄️',
  glow: 'rgba(63,90,107,0.10)',
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
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, ${M.glow}, transparent 55%);pointer-events:none}
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
  <div style="position:absolute;top:290px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">${M.label}</div>
    <div style="font-size:64px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
      ${M.cover_hook[0]}<br/><span style="color:${C.coral}">${M.cover_hook[1]}</span></div>
    <div style="margin-top:28px;font-size:29px;color:${C.sub};line-height:1.55;word-break:keep-all">${M.cover_sub}</div>
  </div>
  <div style="position:absolute;top:855px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${M.cover_bullets.map(t => `<div style="font-size:27px;font-weight:600;color:${C.sub}">${t}</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">저장하고 이달 내내 꺼내 보세요 ✦</div>
` + foot;

// 02 이달은 어떤 달
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">11월은 어떤 달?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    ${M.month_headline[0]} <span style="color:${C.coral}">${M.month_headline[1]}</span></div>
  <div style="position:absolute;top:420px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    ${M.month_body}</div>
  <div style="position:absolute;top:900px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    ※ 달의 처음 1~6일은 아직 戌月의 꼬리예요. 달력의 월과 절기의 월은 조금 어긋나고, 체감은 <b style="color:${C.ink}">내 사주 원국에 따라</b> 달라요.</div>
  ${handle()}
` + foot;

// 03 오행별 흐름 한눈에
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">11월 오행 흐름 · 한눈에</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    내 오행, <span style="color:${C.coral}">이달 흐름은?</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${M.order.map(ko => {
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

// 04 주인공/상승
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${M.groupA.label}</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이달의 <span style="color:${FOCUS}">주인공은 ${M.focus_han}</span></div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${M.groupA.kos.map(detailCard).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">${M.groupA.summary}</div>
  ${handle()}
` + foot;

// 05 나머지
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${M.groupB.label}</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    ${M.groupB.headline.replace('나머지 오행의', '나머지 오행의 <span style="color:' + C.coral + '">') + '</span>'}</div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${M.groupB.kos.map(detailCard).join('')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">${M.groupB.summary}</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 오행의 11월</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    그래서, <span style="color:${C.coral}">내 오행의 11월은?</span></div>
  <div style="position:absolute;top:470px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:27px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">${M.cta_note}</div>
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
