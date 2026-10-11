// 수수 주간 시리즈 "주간 오행 운세" — 10월 4주차 (10/26~11/1, 戌月 끝자락·입동 11/7 앞) — 6장
// 재사용 템플릿: 상단 W 객체만 교체하면 다음 주차 복제. 명리는 10월 월간(9/30 발행, 丙午년 戊戌월/土) 흐름과 정합: 土·金 순풍 / 火·水 중립 / 木 주의. 11월(己亥/水) 예고 포함.
// 규칙: 내부코드 노출금지·"N월 M주차 주간운세" 라벨·따뜻한 팔레트(회색 배제)·사람 말투·예언형 금지(경향·챙김 톤). 9/30 month-wrap의 "한 달 체크" 요소를 슬라이드 4에 흡수.
// [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

// 따뜻한 팔레트 (회색은 오행 뱃지에만)
const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#7C7F86', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
  goldsoft: 'rgba(200,151,58,0.14)',
};
const TOTAL = 6;

// ===== 이번 주 데이터 (다음 주차는 여기만 교체) =====
const W = {
  weekLabel: '10월 4주차',
  dateText: '10월 26일 – 11월 1일',
  q2title: ['10월 마무리,', '물(水)의 계절 준비'],
  q2body: '흙(土)의 달이 끝나가고, 입동(11/7)을 지나면 겨울의 물(水)로 넘어가요. 한 달을 돌아보고 다음 달에 바라는 걸 적어두기 좋은 주예요. 사주에선 계절이 바뀌는 문턱마다 <b style="color:' + '#C8973A' + '">흙(土)</b>이 다리를 놓아줘요.',
  moods: [
    ['목', '木', C.wood, '11월부터 조금 풀려요. 이번 주는 계획만'],
    ['화', '火', C.fire, '한 달 애썼어요, 이번 주는 천천히'],
    ['토', '土', C.earth, '내 계절 마지막 주, 받은 건 돌려주기'],
    ['금', '金', C.metal, '잘 마무리한 것 하나, 스스로 칭찬하기'],
    ['수', '水', C.water, '곧 내 계절. 컨디션 끌어올리기'],
  ],
  practice: ['잘한 것 하나,', '바라는 것 한 줄'],
  practiceBody: '10월에 잘한 것 하나, 11월에 바라는 것 한 줄. 두 줄이면 한 달이 깔끔하게 넘어가요.',
  seasonAnswer: '가을',
  ctaNote: "11월 1일엔 '이달의 오행 흐름 · 11월 편'이 올라와요",
};
// ==================================================

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 58) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 82% 6%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
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
  <div style="position:absolute;top:352px;left:90px;right:90px">
    <div class="label" style="margin-bottom:26px">주간 오행 운세</div>
    <div style="font-size:112px;font-weight:800;line-height:1.0;letter-spacing:-0.04em;color:${C.ink}">${W.weekLabel}</div>
    <div style="margin-top:22px;font-size:32px;font-weight:600;color:${C.sub}">${W.dateText}</div>
    <div style="margin-top:44px;font-size:44px;font-weight:800;line-height:1.35;letter-spacing:-0.02em;color:${C.coral};word-break:keep-all">
      이번 주, 내 오행은<br/>어떤 흐름일까요?</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">저장해두고 이번 주에 꺼내 보세요</div>
` + foot;

// 02 이번 주 키워드
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이번 주 키워드</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:66px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    ${W.q2title[0]}<br/><span style="color:${C.coral}">${W.q2title[1]}</span></div>
  <div style="position:absolute;top:470px;left:90px;right:96px;font-size:33px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    ${W.q2body}</div>
  <div style="position:absolute;top:900px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.6;word-break:keep-all">
    타고난 사주는 사람마다 달라서, 느끼는 정도도 조금씩 달라요.</div>
  ${handle()}
` + foot;

// 03 오행별 이번 주
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내 오행별 이번 주</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신 오행은 <span style="color:${C.coral}">이번 주 어때요?</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px;display:flex;flex-direction:column;gap:17px">
    ${W.moods.map(([ko, han, color, mood]) => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${color};border-radius:16px;padding:20px 26px">
        ${elBadge(han, color, 58)}
        <div style="flex:1"><div style="font-size:25px;font-weight:800;color:${C.ink}">${ko}(${han})</div>
        <div style="margin-top:5px;font-size:25px;font-weight:600;color:${C.sub};line-height:1.4;word-break:keep-all">${mood}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 이번 주 딱 하나 (구체 행동, 골드 강조 = 고대비)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이번 주 딱 하나만</div>
  <div style="position:absolute;top:196px;left:90px;right:96px;font-size:36px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">
    이번 주는 이거 하나면 충분해요</div>
  <div style="position:absolute;top:322px;left:90px;right:90px;background:${C.ink};border-radius:30px;padding:66px 56px;color:${C.bg}">
    <div style="font-size:70px;font-weight:800;line-height:1.18;letter-spacing:-0.03em;word-break:keep-all">
      ${W.practice[0]}<br/><span style="color:${C.gold}">${W.practice[1]}</span></div>
    <div style="margin-top:30px;font-size:31px;line-height:1.62;color:rgba(247,242,236,0.86);word-break:keep-all">${W.practiceBody}</div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    거창한 거 말고, 진짜 딱 하나만요.</div>
  ${handle()}
` + foot;

// 05 내 오행 모르겠다면 (계절로 감 잡기 → 프로필)
const seasons = [
  ['🌱', '봄', '목(木)', C.wood], ['🔥', '여름', '화(火)', C.fire],
  ['🍂', '환절기', '토(土)', C.earth], ['🍃', '가을', '금(金)', C.metal], ['❄️', '겨울', '수(水)', C.water],
];
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내 오행이 뭔지 모르겠다면</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    태어난 <span style="color:${C.coral}">계절</span>로 대충 감 잡기</div>
  <div style="position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:14px">
    ${seasons.map(([e, s, el, color]) => `
      <div style="display:flex;align-items:center;gap:20px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:14px;padding:18px 26px">
        <span style="font-size:30px">${e}</span>
        <span style="font-size:27px;font-weight:700;color:${C.ink};width:210px">${s}에 태어남</span>
        <span style="font-size:28px;color:${C.sub}">→</span>
        <span style="font-size:28px;font-weight:800;color:${color}">${el}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:128px;left:90px;right:100px;font-size:25px;color:${C.sub};line-height:1.6;word-break:keep-all">
    근데 이건 진짜 대충이에요. 정확한 내 오행은 태어난 날짜로 봐야 해서, 궁금하면 프로필에서 확인해요.</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">다음 주 월요일에 또</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:64px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    다음 주에 또<br/><span style="color:${C.coral}">내 색 보러 와요</span></div>
  <div style="position:absolute;top:470px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행 알고 보면 이 카드가 훨씬 잘 맞아요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="flex:1;margin-left:24px;text-align:right;font-size:24px;color:${C.sub};line-height:1.4;word-break:keep-all">${W.ctaNote}</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
