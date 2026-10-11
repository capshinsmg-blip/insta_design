// 수수 "[올해 남은 두 달] 내게 부족한 오행 채우는 10월 체크리스트" — 저장형 + ★10월 유일 프로필 전환 편 6장 (발행 10/29 목)
// 복제 원본: 2026-08-22_susu-fill-oheng (헬퍼·row 구조, TOTAL=6) + 2026-08-29_susu-stone-guide (stepBadge 3단계·CTA 톤).
// 안전선: 원석=효능 아닌 '리마인더/상징' 고정 문구. 병오년 火 강년 → 金·水 지치기 쉬운 '경향' 톤(단정·겁주기 X). 戌月=土 안정·채우기.
// 가격·효능·예약 절차 등 확인 안 된 정보 X. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#7C7F86', water: '#3F5A6B',
  goldbg: 'rgba(200,151,58,0.12)',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 6;

// 오행별: signal = 03 체크리스트(요즘 이런 신호) / tip = 04 채우기 10월 버전(생활 한 가지)
const ELS = [
  { ko: '목', han: '木', color: C.wood,  signal: '시작이 잘 안 되고 자꾸 미룬다',   tip: '아침 10분 산책, 작은 시작 하나' },
  { ko: '화', han: '火', color: C.fire,  signal: '표현이 줄고 의욕이 가라앉는다',   tip: '햇빛 보기, 고마운 말 한마디 꺼내기' },
  { ko: '토', han: '土', color: C.earth, signal: '불안하고 루틴이 자꾸 무너진다',   tip: '식사 시간 고정, 저녁 루틴 하나' },
  { ko: '금', han: '金', color: C.metal, signal: '마무리를 못 하고 벌여만 둔다',    tip: '서랍 하나 비우기, 끝내지 못한 일 하나 매듭' },
  { ko: '수', han: '水', color: C.water, signal: '잠을 자도 회복이 안 된다',        tip: '따뜻한 물, 30분 일찍 자기' },
];

// 05 원석=리마인더 3단계 (08-29 stone-guide 톤)
const STEPS = [
  ['01', '사주 보기', '비어 있는 오행 찾기'],
  ['02', '그 빛깔 원석', '부족한 기운의 색으로'],
  ['03', '손으로 팔찌 제작', '수수가 함께 골라 만들어요'],
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 88) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;
const stepBadge = (num, s = 78) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.goldbg};border:2.5px solid ${C.gold};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.42)}px;font-weight:800;color:${C.gold};letter-spacing:-0.02em">${num}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const brandTop = () => `<div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
  ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 오행 5줄 카드 리스트 (08-22 fillSlide row 구조 재활용)
const elRow = (e, main, tag) => `<div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:16px;padding:22px 26px">
    ${elBadge(e.han, e.color, 60)}
    <div style="flex:1;min-width:0"><span style="font-size:22px;font-weight:800;color:${e.color};letter-spacing:0.02em">${tag}</span>
      <div style="margin-top:4px;font-size:29px;font-weight:600;color:${C.ink};word-break:keep-all;line-height:1.3">${main}</div></div></div>`;

// 01 커버
const s1 = head() + page(1) + brandTop() + `
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">戌月 · 채우기 좋은 달</div>
    <div style="font-size:68px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
      올해 남은 두 달,<br/><span style="color:${C.coral}">비어 있는 기운</span>부터 채워요</div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">
      가을의 흙(土) 달은 흩어진 걸 모으고<br/>채우기 좋은 때예요.</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    ${ELS.map(e => `<div style="width:96px;height:96px;border-radius:50%;background:${C.bg};border:2.5px solid ${e.color};display:flex;align-items:center;justify-content:center"><span style="font-size:44px;font-weight:700;color:${e.color}">${e.han}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장해두고 하나씩 체크 ✦</div>
` + foot;

// 02 왜 지금
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">왜 지금 채워요?</div>
  <div style="position:absolute;top:186px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.3;letter-spacing:-0.028em;word-break:keep-all">
    불(火)이 센 해,<br/><span style="color:${C.coral}">쉽게 지치는 기운</span>이 있어요</div>
  <div style="position:absolute;top:420px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:20px;padding:34px 36px">
      <div style="font-size:23px;font-weight:800;color:${C.fire};letter-spacing:0.02em">올해 · 2026 병오년(丙午)</div>
      <div style="margin-top:8px;font-size:30px;font-weight:500;color:${C.ink};line-height:1.6;word-break:keep-all">
        불(火)이 유난히 강한 해라,<br/>쇠(金)·물(水) 기운은 눌리거나 지치기 쉬운 결이에요.</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:20px;padding:34px 36px">
      <div style="font-size:23px;font-weight:800;color:${C.gold};letter-spacing:0.02em">이달 · 戌月(土)</div>
      <div style="margin-top:8px;font-size:30px;font-weight:500;color:${C.ink};line-height:1.6;word-break:keep-all">
        땅(土)이 안정을 주는 달. 흩어진 걸 모으고, <b>비운 자리를 채워 넣기 좋은 타이밍</b>이에요.</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    겁내라는 게 아니라, 미리 알고 챙기자는 뜻이에요.<br/>같은 오행이라도 내 사주에 따라 흐름은 달라요.</div>
  ${handle()}
` + foot;

// 03 체크리스트
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">CHECK · 요즘 이런 신호 있다면</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    요즘 이런 신호, <span style="color:${C.coral}">몇 개</span>나 있어요?</div>
  <div style="position:absolute;top:320px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${ELS.map(e => elRow(e, e.signal, `${e.ko}(${e.han}) 기운이 비었을지도`)).join('')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.55;word-break:keep-all">
    2개 이상이면 그 기운이 비어 있을지도 몰라요.<br/>좋고 나쁨 없는 결이니, 채울 자리를 찾는 힌트로만.</div>
  ${handle()}
` + foot;

// 04 채우기 10월 버전
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">FILL · 채우기 10월 버전</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    비운 자리, <span style="color:${C.coral}">생활 한 가지</span>로 채워요</div>
  <div style="position:absolute;top:320px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${ELS.map(e => elRow(e, e.tip, `${e.ko}(${e.han}) 채우기`)).join('')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.55;word-break:keep-all">
    다 하려고 말고, 비어 있는 기운 하나만 골라서 남은 두 달 가볍게.</div>
  ${handle()}
` + foot;

// 05 원석은 리마인더
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">원석은 리마인더</div>
  <div style="position:absolute;top:186px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.3;letter-spacing:-0.028em;word-break:keep-all">
    부족한 빛깔을 곁에 두는 건<br/><span style="color:${C.gold}">'잊지 말자'</span>는 상징이에요</div>
  <div style="position:absolute;top:420px;left:90px;right:96px;font-size:30px;color:${C.ink};font-weight:500;line-height:1.62;word-break:keep-all">
    효능이 아니라, 볼 때마다 <b>'나는 이 기운을 채우는 중'</b>이라고 떠올리게 해주는 리마인더예요. 수수는 이렇게 만들어요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;display:flex;gap:16px">
    ${STEPS.map(([n, t, d]) => `
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:28px 18px;text-align:center;display:flex;flex-direction:column;align-items:center">
        ${stepBadge(n, 62)}
        <div style="margin-top:14px;font-size:25px;font-weight:800;color:${C.ink};word-break:keep-all">${t}</div>
        <div style="margin-top:6px;font-size:21px;color:${C.sub};line-height:1.4;word-break:keep-all">${d}</div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:140px;left:90px;right:100px;font-size:24px;color:${C.sub};line-height:1.5;word-break:keep-all">
    ※ 원석=리마인더/상징, 효능 아님. 돈·건강·운을 바꿔주는 물건이 아니에요.</div>
  ${handle()}
` + foot;

// 06 CTA (10월 유일 강한 전환)
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서, 내 건 뭐가 비었을까?</div>
  <div style="position:absolute;top:196px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
    내 사주에서 뭐가 비었는지<br/><span style="color:${C.coral}">정확히</span> 알고 싶다면</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">
    체크리스트는 힌트일 뿐, 정확한 건 <b style="color:${C.ink}">사주 원국</b>을 봐야 알 수 있어요.</div>
  <div style="position:absolute;top:600px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:48px 46px;color:${C.bg}">
    <div style="font-size:40px;font-weight:800;line-height:1.28">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:22px;font-size:28px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      생년월일로 보는 오행 → 비어 있는 기운 → 맞춤 원석 팔찌.<br/>프로필 링크에서 상담 안내를 볼 수 있어요.</div>
  </div>
  <div style="position:absolute;bottom:118px;left:90px;right:96px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    저장해두고 하나씩 체크 ✦ 궁금한 오행은 <b style="color:${C.ink}">댓글</b>로 남겨주세요.</div>
  <div style="position:absolute;bottom:60px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
