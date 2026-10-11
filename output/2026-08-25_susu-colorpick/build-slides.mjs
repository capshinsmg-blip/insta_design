// 수수 (재구성 C-1) "지금 가장 끌리는 오행 색은?" — 컬러픽 심리테스트 실험 6장
// 오행 5색 = 지금 끌리는/필요한 기운. '재미로' 프레이밍(단정 아님). 한지 화이트 + 오행색 스와치.
// QA: 토#C8973A는 채움색만, 텍스트 라벨은 한지화이트/팥버건디로 대비.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#8A8F96', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 6;

const ELS = [
  { ko: '목', han: '木', color: C.wood, cname: '초록·청록', read: "'시작·성장'의 기운이 당기는 때예요.", desc: '새로운 도전이나 환기가 필요하다는 신호일 수 있어요.', tip: '미뤄둔 새 시작 하나, 오늘 작게 떼어보기.' },
  { ko: '화', han: '火', color: C.fire, cname: '빨강·주홍', read: "'열정·표현·활력'을 원하는 때예요.", desc: '사람과 에너지가 그립고, 표현하고 싶은 마음이 커요.', tip: '마음을 한 마디 표현하기, 햇빛 잠깐 쬐기.' },
  { ko: '토', han: '土', color: C.earth, cname: '노랑·베이지', read: "'안정·중심'이 필요한 때예요.", desc: '조금 흔들려서 쉼과 단단한 리듬을 찾고 있어요.', tip: '규칙적인 식사·수면 같은 작은 루틴 챙기기.' },
  { ko: '금', han: '金', color: C.metal, cname: '흰색·은빛', read: "'정리·결단'의 기운이 필요한 때예요.", desc: '복잡한 걸 덜어내고 매듭짓고 싶은 마음이에요.', tip: '책상·지갑·할 일 하나 딱 정리하기.' },
  { ko: '수', han: '水', color: C.water, cname: '파랑·남색', read: "'휴식·성찰'이 필요한 때예요.", desc: '지쳐서 고요함과 충전을 원하고 있어요.', tip: '충분한 잠·물 한 잔·혼자만의 시간 갖기.' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
// 컬러 스와치(원형, 채움색만 · 라벨은 버건디)
const swatch = (e, s = 168) => `<div style="text-align:center">
  <div style="width:${s}px;height:${s}px;border-radius:50%;background:${e.color};box-shadow:0 10px 26px rgba(110,26,43,0.12);border:4px solid ${C.bg};outline:2px solid ${e.color}55"></div>
  <div style="margin-top:16px;font-size:28px;font-weight:800;color:${C.ink}">${e.ko}<span style="font-size:20px;color:${C.sub}">(${e.han})</span></div></div>`;
const dot = (color, s = 30) => `<span style="display:inline-block;width:${s}px;height:${s}px;border-radius:50%;background:${color};flex:none"></span>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(168,56,72,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 결과 카드
const resultCard = (e) => `<div style="display:flex;align-items:flex-start;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${e.color};border-radius:18px;padding:26px 30px">
  <div style="margin-top:4px">${dot(e.color, 40)}</div>
  <div style="flex:1">
    <div style="font-size:27px;font-weight:800;color:${C.ink}">${e.cname}에 끌렸다면 — ${e.read}</div>
    <div style="margin-top:8px;font-size:24px;color:${C.sub};line-height:1.45;word-break:keep-all">${e.desc}</div>
    <div style="margin-top:8px;font-size:24px;font-weight:700;color:${e.color === C.earth ? C.ink : e.color};word-break:keep-all">💡 ${e.tip}</div>
  </div></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행 컬러 테스트 🎨</div>
    <div style="font-size:72px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
      지금 가장<br/><span style="color:${C.coral}">끌리는 색은?</span></div>
    <div style="margin-top:28px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">직감으로 하나만 고르면,<br/>지금 당신에게 필요한 '기운'을 알려드려요.</div>
  </div>
  <div style="position:absolute;top:840px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    ${ELS.map(e => `<div style="width:110px;height:110px;border-radius:50%;background:${e.color};border:4px solid ${C.bg};box-shadow:0 6px 16px rgba(110,26,43,0.1)"></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:110px;left:90px;font-size:26px;font-weight:700;color:${C.coral};letter-spacing:0.02em">넘겨서 하나 골라보세요 ✦</div>
` + foot;

// 02 픽
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">PICK · 직감으로 하나!</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:54px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    5가지 색 중 <span style="color:${C.coral}">가장 끌리는 하나</span></div>
  <div style="position:absolute;top:420px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:flex-start">
    ${ELS.slice(0, 3).map(e => swatch(e, 260 / 1.4)).join('')}
  </div>
  <div style="position:absolute;top:720px;left:200px;right:200px;display:flex;justify-content:space-around;align-items:flex-start">
    ${ELS.slice(3).map(e => swatch(e, 260 / 1.4)).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:90px;font-size:28px;font-weight:700;color:${C.ink}">골랐나요? 결과는 넘겨서 확인 👉</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 03 결과 A (목·화·토)
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">RESULT · 내가 고른 색은?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    끌린 색이 <span style="color:${C.coral}">지금의 나</span></div>
  <div style="position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${resultCard(ELS[0])}${resultCard(ELS[1])}${resultCard(ELS[2])}
  </div>
  <div style="position:absolute;bottom:130px;left:90px;font-size:24px;color:${C.sub}">금·수 색을 골랐다면 다음 장에서 ▶</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 결과 B (금·수) + 의미
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">RESULT · 내가 고른 색은?</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    <span style="color:${C.coral}">금·수</span> 색을 골랐다면</div>
  <div style="position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${resultCard(ELS[3])}${resultCard(ELS[4])}
  </div>
  <div style="position:absolute;top:770px;left:90px;right:90px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:28px 32px">
    <div style="font-size:26px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">여러 색이 끌렸다면? 지금 내 안에 여러 기운이 섞여 있다는 뜻이에요. 제일 먼저 눈이 간 색을 우선으로 봐요.</div></div>
  ${handle()}
` + foot;

// 05 면책·재미
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">NOTE · 가볍게 즐기기</div>
  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    색은 <span style="color:${C.coral}">오늘의 마음</span>을<br/>비추는 거울이에요</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.72;word-break:keep-all">
    끌리는 색은 그날그날 달라질 수 있어요.<br/>오늘 고른 색은 <b style="color:${C.coral}">지금 내게 필요한 기운</b>의 힌트일 뿐,<br/>정해진 운명이 아니랍니다.<br/><br/>재미로 가볍게, 나를 돌아보는 시간으로 즐겨요 🌿</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">
    * 진짜 내게 부족한 오행은 <b style="color:${C.ink}">사주 원국</b>을 봐야 정확해요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">COMMENT · 내 색 남기기</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신이 고른 색은<br/><span style="color:${C.coral}">무슨 색인가요?</span></div>
  <div style="position:absolute;top:480px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:27px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      댓글에 내가 고른 색(오행)을 남겨주세요.<br/>내 사주 속 진짜 오행 균형도 확인해봐요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">🌿🔥⛰️⚪💧 내 색은?</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
