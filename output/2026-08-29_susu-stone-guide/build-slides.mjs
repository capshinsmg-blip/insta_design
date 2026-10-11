// 수수 (재구성 C 마지막) "내 사주엔 어떤 원석? — 3단계 큐레이션 + 프로필 전환" 6장
// 멀티에이전트 감수본(safe:true): 원석=효능 아닌 '리마인더/상징', 특정 석명 카탈로그 X(색 중심),
// 미신·공포 X, 가짜 예약정보 X. [필수] "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#8A8D93', water: '#3F5A6B',
  goldbg: 'rgba(200,151,58,0.12)',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  goldline: 'rgba(200,151,58,0.45)',
};
const TOTAL = 6;

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const stepBadge = (num, s = 78) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.goldbg};border:2.5px solid ${C.gold};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.42)}px;font-weight:800;color:${C.gold};letter-spacing:-0.02em">${num}</span></div>`;
const dot = (color, s = 24) => `<span style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${color};box-shadow:0 0 0 5px ${color}22"></span>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(200,151,58,0.10), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.14em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const brandTop = () => `<div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
  ${bead(34)}<span style="font-size:26px;font-weight:800;letter-spacing:0.26em;color:${C.ink}">SUSU</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버
const s1 = head() + page(1) + brandTop() + `
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 원석 큐레이션 · 3STEP</div>
    <div style="font-size:74px;font-weight:800;line-height:1.26;letter-spacing:-0.035em;word-break:keep-all">
      내 사주엔 <span style="color:${C.coral}">어떤 원석?</span><br/>딱 3단계면 골라져요</div>
    <div style="margin-top:32px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">
      아무거나 예쁜 돌 말고,<br/>나한테 '<b style="color:${C.ink}">맞는</b>' 색과 기운으로.</div>
  </div>
  <div style="position:absolute;top:812px;left:90px;right:90px;display:flex;gap:16px">
    ${[['01', '내 오행 찾기'], ['02', '색·기운 정하기'], ['03', '팔찌로 곁에']].map(([n, t]) => `
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:26px 20px;text-align:center">
        <div style="font-size:30px;font-weight:800;color:${C.gold}">${n}</div>
        <div style="margin-top:8px;font-size:23px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장해두고 천천히 따라오세요 →</div>
` + foot;

// 02 왜 아무 돌이나 X
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">고르기 전에, 딱 하나만</div>
  <div style="position:absolute;top:186px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.028em;word-break:keep-all">
    원석은 부적도 효능도 아니라<br/><span style="color:${C.gold}">'곁에 두는 상징'</span>이에요</div>
  <div style="position:absolute;top:430px;left:90px;right:96px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:20px;padding:40px 40px">
      <div style="font-size:32px;font-weight:600;color:${C.ink};line-height:1.62;word-break:keep-all">
        돈·건강·운을 <b style="color:${C.coral}">바꿔주는 물건이 아니라</b>,<br/>
        나에게 부족한 기운을 <b style="color:${C.ink}">매일 떠올리게 해주는 리마인더</b>예요.</div>
    </div>
  </div>
  <div style="position:absolute;top:720px;left:90px;right:96px;font-size:31px;color:${C.sub};line-height:1.6;word-break:keep-all">
    그래서 '아무 돌'이 아니라<br/><b style="color:${C.ink}">내게 맞는 하나</b>를 골라야 의미가 생겨요.</div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">그 '고르는 순서', 지금부터 3장 →</div>
  ${handle()}
` + foot;

// 03 STEP 1
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
    ${stepBadge('1')}<div><div style="font-size:25px;font-weight:700;letter-spacing:0.06em;color:${C.gold}">STEP 01</div>
      <div style="font-size:26px;font-weight:600;color:${C.sub};margin-top:2px">나를 알기</div></div></div>
  <div style="position:absolute;top:262px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
    내 사주에서<br/><span style="color:${C.coral}">'부족한 오행'</span> 찾기</div>
  <div style="position:absolute;top:492px;left:90px;right:96px;font-size:32px;color:${C.ink};font-weight:500;line-height:1.62;word-break:keep-all">
    목·화·토·금·수 다섯 기운 중,<br/>나에게 <b style="color:${C.ink}">적게 든 건</b> 무엇일까요?<br/>태어난 사주 안에 이미 <b style="color:${C.gold}">힌트</b>가 있어요.</div>
  <div style="position:absolute;top:770px;left:90px;right:96px;display:flex;justify-content:space-between;gap:12px">
    ${[['🌿', '목'], ['🔥', '화'], ['🟡', '토'], ['⚪', '금'], ['🌊', '수']].map(([e, t]) => `
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:24px 0;text-align:center">
        <div style="font-size:34px">${e}</div><div style="margin-top:6px;font-size:26px;font-weight:700;color:${C.ink}">${t}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;right:96px;font-size:27px;font-weight:600;color:${C.gold};line-height:1.5;word-break:keep-all">
    내 오행 밸런스가 궁금하면 → 프로필에서 확인 가능해요.</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 STEP 2 — 오행 5색
const map = [
  [C.wood, '🌿 목(木)', '초록·청록', '자라나는 기운'],
  [C.fire, '🔥 화(火)', '빨강·주황', '피어나는 기운'],
  [C.earth, '🟡 토(土)', '노랑·황토', '중심 잡는 기운'],
  [C.metal, '⚪ 금(金)', '흰색·은빛', '단정한 기운'],
  [C.water, '🌊 수(水)', '검정·남색', '깊고 차분한 기운'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
    ${stepBadge('2')}<div><div style="font-size:25px;font-weight:700;letter-spacing:0.06em;color:${C.gold}">STEP 02</div>
      <div style="font-size:26px;font-weight:600;color:${C.sub};margin-top:2px">색으로 정하기</div></div></div>
  <div style="position:absolute;top:250px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.24;letter-spacing:-0.028em;word-break:keep-all">
    그 오행의 <span style="color:${C.coral}">'색과 기운'</span> 고르기</div>
  <div style="position:absolute;top:388px;left:90px;right:90px;display:flex;flex-direction:column;gap:15px">
    ${map.map(([col, name, color, energy]) => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${col};border-radius:16px;padding:22px 26px">
        ${dot(col, 22)}
        <div style="font-size:29px;font-weight:800;color:${C.ink};width:190px;flex:none">${name}</div>
        <div style="font-size:28px;font-weight:700;color:${col}">${color}</div>
        <div style="margin-left:auto;font-size:25px;color:${C.sub};word-break:keep-all">${energy}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:96px;font-size:24px;color:${C.sub};line-height:1.55;word-break:keep-all">
    원석은 이 <b style="color:${C.ink}">색을 담는 그릇</b> — 초록빛 돌, 남색 돌처럼 '색'으로 골라요.<br/><span style="opacity:0.8">(정해진 판매목록이 아니라 색 감각을 잡는 단계예요)</span></div>
` + foot;

// 05 STEP 3
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
    ${stepBadge('3')}<div><div style="font-size:25px;font-weight:700;letter-spacing:0.06em;color:${C.gold}">STEP 03</div>
      <div style="font-size:26px;font-weight:600;color:${C.sub};margin-top:2px">곁에 두기</div></div></div>
  <div style="position:absolute;top:262px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
    그 색·기운을 담아<br/><span style="color:${C.coral}">'나만의 팔찌'</span>로 곁에</div>
  <div style="position:absolute;top:500px;left:90px;right:96px;font-size:31px;color:${C.ink};font-weight:500;line-height:1.62;word-break:keep-all">
    고른 색과 기운을 손목 위 한 줄로.<br/>볼 때마다 <b style="color:${C.gold}">'나는 이 기운을 채우는 중'</b>이라고<br/>스스로 떠올리게 돼요.</div>
  <div style="position:absolute;top:770px;left:90px;right:96px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:20px;padding:32px 36px;font-size:29px;color:${C.ink};line-height:1.55;word-break:keep-all">
      남이 정해준 게 아니라 <b style="color:${C.coral}">내 사주에서 출발한 하나</b>,<br/>수수가 함께 골라 만들어요.</div>
  </div>
  <div style="position:absolute;bottom:132px;left:90px;font-size:26px;font-weight:600;color:${C.gold}">팔찌는 요행이 아니라, 매일 한 번 누르는 다짐 스위치.</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서, 어디서부터?</div>
  <div style="position:absolute;top:196px;left:90px;right:90px;font-size:64px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    어떤 기운이 필요한지<br/><span style="color:${C.coral}">아직 모르겠다면?</span></div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">
    괜찮아요, 그게 정상이에요.<br/>시작은 언제나 <b style="color:${C.ink}">'내 사주 확인'</b>부터.</div>
  <div style="position:absolute;top:600px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="font-size:40px;font-weight:800;line-height:1.28">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:96px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    이 글이 도움 됐다면 <b style="color:${C.gold}">저장 📌</b> · 궁금한 오행은 <b style="color:${C.ink}">댓글</b>로 남겨주세요.</div>
  <div style="position:absolute;bottom:60px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
