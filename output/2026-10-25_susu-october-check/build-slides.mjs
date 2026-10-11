// 수수 "10월 중간 점검 · 이달 잘 거둔 것 하나 적기" — 6장 (발행 10/25 일요일, 참여+저장)
// 복제 원본: 2026-09-30_susu-month-wrap (미발행 9월 마무리 편). 헬퍼·레이아웃 재활용, 오행 뱃지(elBadge)는 주간카드 헬퍼 차용.
// 명리: 10/12~10/31 전 구간 戊戌월(土) = 거두는 달. 10월 월간(9/30 발행) 흐름과 정합(土·金 순풍 / 火·水 중립 / 木 주의). 단정·겁주기·예언형 금지.
// 역할 분리: 이 편 = '거둔 것 하나 적기' 행동 + 댓글 참여 / 10/26 주간카드 = 실천(잘한 것 하나 + 11월 바람 한 줄).
// 규칙: 따뜻한 팔레트·사람 말투·이모지는 커버 하단(원본 자리)만. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
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

// ===== 이번 편 데이터 (카피 전문) =====
const W = {
  // 01 커버
  coverLabel: '10월 중간 점검 · 戌月',
  coverHead: ['10월, 잘 거둔 것', '하나만', ' 적어봐요'],   // [1행, 코랄 강조, 2행 나머지]
  coverSub: '큰 성과 말고요. 끝낸 것, 버린 것, 지킨 것 — 아무거나 하나.',
  coverFoot: '댓글에 한 줄, 나중에 다시 보게 저장 🍂',
  // 02 왜 지금
  whyLabel: '왜 지금?',
  whyHead: ['못 한 것 세는 달 말고,', '거둔 것', ' 세는 달이에요'],
  whyBody: '10월은 흙(土)의 달, 戌月이에요. 가을걷이처럼 <b style="color:#C8973A">거두는 달</b>이죠. 10월이 4분의 3쯤 지난 지금, 잘한 것 하나만 적어두면 남은 한 주가 한결 가벼워져요.',
  whyNote: '큰 성과 아니어도 돼요. 아주 작은 것 하나면 충분해요.',
  // 03 오행별 힌트
  hintLabel: '오행별 거둔 것 힌트',
  hintHead: ['뭘 적을지 모르겠다면', '힌트'],
  hints: [
    ['목', '木', C.wood, '시작한 것 중 하나라도 이어간 것'],
    ['화', '火', C.fire, '마음을 표현한 순간 하나'],
    ['토', '土', C.earth, '지킨 루틴이나 약속 하나'],
    ['금', '金', C.metal, '끝냈거나 비운 것 하나'],
    ['수', '水', C.water, '제대로 쉰 날 하루'],
  ],
  hintNote: '내 오행 모르면 아무 줄이나 골라도 돼요.',
  // 04 체크 3칸
  checkLabel: '한 칸만 채워도 OK',
  checkIntro: '세 칸 중, 하나만 골라봐요',
  checks: ['끝낸 것', '버린 것', '지킨 것'],
  checkCardNote: ['한 칸만 채워도 ', '충분히 거둔 거예요.'],
  checkNote: '세 개 다 아니어도 돼요. 하나면 충분.',
  // 05 남은 한 주
  weekLabel: '남은 한 주',
  weekHead: ['10/26~31,', '마지막 한 주는'],
  weekBody: '戌月 끝자락, 입동(11/7)을 앞둔 시간이에요. 거둔 것 하나 들고, 11월에 바라는 것 한 줄 적어두면 달이 깔끔하게 넘어가요.',
  weekNote: '월요일 <b style="color:#6E1A2B">주간운세</b>에서 이어서 가요 →',
  // 06 CTA
  ctaLabel: '댓글 · 저장',
  ctaHead: ['댓글에 ', '거둔 것 하나', '남겨주세요'],
  ctaSub: '서로 거둔 걸 보면, 내 것도 떠올라요.',
  ctaCardBody: '내 오행을 알면, 내가 뭘 잘 거두는 사람인지도 보여요.',
  ctaFoot: '댓글 · 저장',
};
// =====================================

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (han, color, s = 58) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;
// 빈 체크박스 (CSS 네모, 이모지 아님)
const box = (s = 50, color = C.gold) => `<span style="width:${s}px;height:${s}px;flex:none;border:3px solid ${color};border-radius:12px;background:rgba(200,151,58,0.10)"></span>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 8%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
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
  <div style="position:absolute;top:360px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">${W.coverLabel}</div>
    <div style="font-size:76px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      ${W.coverHead[0]}<br/><span style="color:${C.coral}">${W.coverHead[1]}</span>${W.coverHead[2]}</div>
    <div style="margin-top:32px;font-size:35px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">${W.coverSub}</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">${W.coverFoot}</div>
` + foot;

// 02 왜 지금
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${W.whyLabel}</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    ${W.whyHead[0]}<br/><span style="color:${C.coral}">${W.whyHead[1]}</span>${W.whyHead[2]}</div>
  <div style="position:absolute;top:460px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    ${W.whyBody}</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    ${W.whyNote}</div>
  ${handle()}
` + foot;

// 03 오행별 '거둔 것' 힌트
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${W.hintLabel}</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    ${W.hintHead[0]} <span style="color:${C.coral}">${W.hintHead[1]}</span></div>
  <div style="position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:17px">
    ${W.hints.map(([ko, han, color, hint]) => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${color};border-radius:16px;padding:20px 26px">
        ${elBadge(han, color, 58)}
        <div style="flex:1"><div style="font-size:25px;font-weight:800;color:${C.ink}">${ko}(${han})</div>
        <div style="margin-top:5px;font-size:25px;font-weight:600;color:${C.sub};line-height:1.4;word-break:keep-all">${hint}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;font-weight:700;color:${C.gold};line-height:1.5;word-break:keep-all">${W.hintNote}</div>
  ${handle()}
` + foot;

// 04 체크 3칸 (다크 카드, CSS 네모)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${W.checkLabel}</div>
  <div style="position:absolute;top:196px;left:90px;right:96px;font-size:36px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">
    ${W.checkIntro}</div>
  <div style="position:absolute;top:322px;left:90px;right:90px;background:${C.ink};border-radius:30px;padding:64px 60px;color:${C.bg}">
    <div style="display:flex;flex-direction:column;gap:46px">
      ${W.checks.map((t) => `
        <div style="display:flex;align-items:center;gap:30px">${box(54)}<span style="font-size:60px;font-weight:800;letter-spacing:-0.02em;line-height:1">${t}</span></div>`).join('')}
    </div>
    <div style="margin-top:50px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.86);word-break:keep-all">${W.checkCardNote[0]}<span style="color:${C.gold};font-weight:700">${W.checkCardNote[1]}</span></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.5;word-break:keep-all">
    ${W.checkNote}</div>
  ${handle()}
` + foot;

// 05 남은 한 주
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${W.weekLabel}</div>
  <div style="position:absolute;top:250px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    ${W.weekHead[0]}<br/><span style="color:${C.earth}">${W.weekHead[1]}</span></div>
  <div style="position:absolute;top:540px;left:90px;right:96px;font-size:36px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    ${W.weekBody}</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    ${W.weekNote}</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${W.ctaLabel}</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    ${W.ctaHead[0]}<span style="color:${C.coral}">${W.ctaHead[1]}</span><br/>${W.ctaHead[2]}</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    ${W.ctaSub}</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      ${W.ctaCardBody}</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">${W.ctaFoot}</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
