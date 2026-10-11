// 수수 (재구성 C) "끊긴 인연, 다시 다가가도 될까? — 내 오행으로 점검" 재회 편 6장
// 카피: 멀티에이전트+감수(예언 금지·운명론 금지·양쪽 여지·감정안전, safe:true) 통합. 한지 화이트 + 와인로즈.
// 핵심: 상대 예측 X → 내 마음 점검. [필수] "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A', rose: '#9B3B57',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#52565C', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 6;
const COL = { 목: C.wood, 화: C.fire, 토: C.earth, 금: C.metal, 수: C.water };
const HAN = { 목: '木', 화: '火', 토: '土', 금: '金', 수: '水' };

const ELS = [
  { ko: '목', tendency: "미련을 '새로 시작하고 싶은 마음'으로 착각하기 쉬워요.", care: '그리운 게 그 사람인지, 새 출발 자체인지 나눠보기.' },
  { ko: '화', tendency: '감정이 확 올라오면 밤에 곧장 연락 버튼을 눌러버려요.', care: '보내기 전 딱 하루만 자고, 내일의 나에게 다시 묻기.' },
  { ko: '토', tendency: '정과 익숙함 때문에 지난 관계를 오래 붙잡고 있게 돼요.', care: '익숙함인지 사랑인지, 감정의 이름부터 구분하기.' },
  { ko: '금', tendency: '자존심에 먼저 연락 못 하고 속으로만 삭여요.', care: '이 침묵이 후회로 남을지 정리로 남을지 미리 정해두기.' },
  { ko: '수', tendency: '혼자 오래 곱씹으며 그날의 장면을 계속 되감아요.', care: '머릿속 감정과 실제 있었던 사실을 종이에 갈라 적기.' },
];
const CHECKS = [
  "지금 그리운 게 '그 사람'일까, '그때의 나·지금의 외로움'일까?",
  '헤어진 이유가, 시간이 지나면 바뀔 문제였을까?',
  '그 관계 안에서 나를 잃지 않고 지낼 수 있었을까?',
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (ko, s = 58) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:2.5px solid ${COL[ko]};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${COL[ko]}">${HAN[ko]}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(155,59,87,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.rose}}
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
    <div class="label" style="margin-bottom:28px">재회 · 나부터 점검</div>
    <div style="font-size:66px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
      끊긴 인연,<br/><span style="color:${C.rose}">다시 다가가도 될까?</span></div>
    <div style="margin-top:28px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">상대 마음을 맞히는 게 아니라,<br/>내 오행으로 '나'부터 점검하는 재회 편.</div>
  </div>
  <div style="position:absolute;top:860px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${['재회 앞에 선 내 모습, 오행별 5가지', '다가가기 전 꼭 물어볼 self-check 3', '놓아주는 것도 용기라는 이야기'].map(t => `
      <div style="font-size:27px;font-weight:600;color:${C.sub}">· ${t}</div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.rose};letter-spacing:0.02em">혼자 앓았다면, 천천히 넘겨보세요 ✦</div>
` + foot;

// 02 프레임 (점 아님)
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">먼저 · 오해 풀기</div>
  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    이건 <span style="color:${C.rose}">점이 아니에요</span></div>
  <div style="position:absolute;top:440px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    '그 사람이 언제, 왜 연락할까'를<br/>맞히는 카드가 아니에요.<br/><br/>다시 다가가도 될지, 내 마음이 준비됐는지 —<br/>주어를 <b style="color:${C.rose}">'상대'가 아니라 '나'로</b> 바꿔<br/>돌아보는 자기점검이에요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.55;word-break:keep-all">
    답은 재회일 수도, <b style="color:${C.ink}">조용한 놓아줌일 수도</b> 있어요.</div>
  ${handle()}
` + foot;

// 03 오행별 재회 앞 나
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">재회 앞에 선 나 · 오행별</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    나는 이럴 때 <span style="color:${C.rose}">흔들려요</span></div>
  <div style="position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:14px">
    ${ELS.map(e => `
      <div style="display:flex;align-items:flex-start;gap:18px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${COL[e.ko]};border-radius:15px;padding:18px 22px">
        ${elBadge(e.ko, 56)}
        <div style="flex:1"><div style="font-size:25px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${e.ko}(${HAN[e.ko]}) · ${e.tendency}</div>
        <div style="margin-top:5px;font-size:22px;color:${COL[e.ko] === C.earth ? C.sub : COL[e.ko]};font-weight:600;word-break:keep-all">→ ${e.care}</div></div></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 self-check
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">CHECK · 다가가기 전에</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    딱 <span style="color:${C.rose}">세 가지만</span> 물어봐요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${CHECKS.map((c, i) => `
      <div style="display:flex;align-items:flex-start;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:30px 32px">
        <span style="font-size:34px;font-weight:800;color:${C.rose};min-width:44px">Q${i + 1}</span>
        <span style="font-size:29px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${c}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    답이 바로 안 나와도 괜찮아요. <b style="color:${C.ink}">질문을 품는 것</b>만으로 충분해요.</div>
  ${handle()}
` + foot;

// 05 놓아줌도 용기
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그리고 · 당신에게</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.32;letter-spacing:-0.025em;word-break:keep-all">
    다가가도, <span style="color:${C.rose}">놓아줘도</span><br/>둘 다 용기예요</div>
  <div style="position:absolute;top:520px;left:90px;right:100px;font-size:32px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    억지로 붙잡지 않아도,<br/>무조건 손절하지 않아도 괜찮아요.<br/><br/>지금은 상대의 답보다,<br/><b style="color:${C.rose}">내 마음의 준비</b>를 먼저 챙겨주세요.</div>
  <div style="position:absolute;bottom:150px;left:90px;font-size:27px;color:${C.sub};font-style:italic">당신은 이미 충분히 애썼어요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">나부터 · 점검</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    상대 말고,<br/><span style="color:${C.rose}">'나'를 먼저 점검해요</span></div>
  <div style="position:absolute;top:500px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:27px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      재회 앞 내 오행은 어떤 모습일까요.<br/>내 마음의 결부터 사주로 들여다봐요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장하고 천천히 다시 봐요 🫶</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
