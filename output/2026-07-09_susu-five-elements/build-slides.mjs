// 수수 2회차 "목·화·토·금·수 — 내 몸 안의 5가지 기운" — 오행 인포그래픽 6장
// 커버 1 + 오행 5장. 저장 유도. 한지 화이트 라이트 테마.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};

// 오행 데이터 (성향 = 단정 아님, 기운의 경향으로 서술)
const EL = [
  { key: 'wood', han: '木', ko: '목', c: '#5E7C63', season: '봄 · 나무',
    essence: '새싹처럼 뻗어 나가는 기운', kw: ['성장', '시작', '추진력'],
    person: '새로운 걸 벌이고 앞장서는 사람.\n목표가 생기면 바로 움직여요.',
    strong: '리더십과 자신감', weak: '시작이 두렵고 결정을 미뤄요' },
  { key: 'fire', han: '火', ko: '화', c: '#B0433F', season: '여름 · 불',
    essence: '타오르는 열정과 직감', kw: ['열정', '표현', '사교'],
    person: '밝고 감정 표현이 풍부해요.\n사람들 사이에서 빛나는 타입.',
    strong: '매력과 추진 에너지', weak: '쉽게 지치고 표현이 서툴러요' },
  { key: 'earth', han: '土', ko: '토', c: '#C8973A', season: '환절기 · 흙',
    essence: '모두를 품는 든든한 흙', kw: ['안정', '신뢰', '포용'],
    person: '주변을 챙기고 중심을 잡는 사람.\n곁에 있으면 편안해져요.',
    strong: '신뢰와 포용력', weak: '불안해지고 줏대가 약해져요' },
  { key: 'metal', han: '金', ko: '금', c: '#8D8F94', season: '가을 · 쇠',
    essence: '단단하게 벼려진 결단력', kw: ['결단', '원칙', '완성'],
    person: '깔끔하고 맺고 끊음이 분명해요.\n시작한 건 끝을 봐요.',
    strong: '추진력과 완성력', weak: '우유부단하고 마무리가 약해요' },
  { key: 'water', han: '水', ko: '수', c: '#3F5A6B', season: '겨울 · 물',
    essence: '깊고 유연하게 흐르는 지혜', kw: ['지혜', '유연', '통찰'],
    person: '생각이 깊고 적응이 빨라요.\n조용히 상황을 꿰뚫어 봐요.',
    strong: '통찰력과 유연함', weak: '겁이 많고 융통성이 떨어져요' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(200,151,58,0.06), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.coral}}
</style>
</head>
<body>`;
const foot = `</body></html>`;

const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 06</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// ── 커버 ──
const cover = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span>
  </div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:32px">오행 가이드 · 저장용</div>
    <div style="font-size:82px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      나를 이루는<br/><span style="color:${C.coral}">다섯 가지 기운</span>
    </div>
    <div style="margin-top:30px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">목·화·토·금·수 — 내 안엔 어떤 기운이 강할까요?</div>
  </div>
  <div style="position:absolute;top:760px;left:90px;right:90px;display:flex;justify-content:space-between">
    ${EL.map(o => `
      <div style="text-align:center">
        <div style="width:150px;height:150px;border-radius:50%;background:${C.bg};border:3px solid ${o.c};display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(110,26,43,0.06)">
          <span style="font-size:60px;font-weight:700;color:${o.c}">${o.han}</span>
        </div>
        <div style="margin-top:18px;font-size:25px;font-weight:700;color:${C.ink}">${o.ko}</div>
      </div>`).join('')}
  </div>
  <div style="position:absolute;bottom:120px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장하고 하나씩 찾아보세요 ✦</div>
` + foot;

// ── 오행 슬라이드 ──
function elSlide(o, n, isLast) {
  const chip = (t) => `<div style="background:${o.c}1F;border:1px solid ${o.c}59;border-radius:999px;padding:12px 26px;font-size:26px;font-weight:700;color:${C.ink}">${t}</div>`;
  return head() + page(n) + `
    <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
      <div style="width:84px;height:84px;border-radius:50%;background:${C.bg};border:3px solid ${o.c};display:flex;align-items:center;justify-content:center">
        <span style="font-size:44px;font-weight:700;color:${o.c}">${o.han}</span>
      </div>
      <div>
        <div style="font-size:30px;font-weight:800;color:${C.ink}">${o.ko}(${o.han}) 오행</div>
        <div style="font-size:22px;color:${C.sub};margin-top:4px">${o.season}</div>
      </div>
    </div>

    <div style="position:absolute;top:250px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.3;letter-spacing:-0.02em;word-break:keep-all">
      ${o.essence}
    </div>

    <div style="position:absolute;top:410px;left:90px;right:90px;display:flex;gap:14px">
      ${o.kw.map(chip).join('')}
    </div>

    <div style="position:absolute;top:530px;left:90px;right:100px;font-size:34px;font-weight:600;color:${C.ink};line-height:1.6;word-break:keep-all">
      ${o.person.replace(/\n/g, '<br/>')}
    </div>

    <div style="position:absolute;top:${isLast ? 760 : 800}px;left:90px;right:90px;display:flex;gap:18px">
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-left:5px solid ${o.c};border-radius:16px;padding:26px 26px">
        <div style="font-size:22px;font-weight:800;color:${o.c};letter-spacing:0.02em">강하면</div>
        <div style="margin-top:10px;font-size:26px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">${o.strong}</div>
      </div>
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-left:5px solid ${C.faint};border-radius:16px;padding:26px 26px">
        <div style="font-size:22px;font-weight:800;color:${C.sub};letter-spacing:0.02em">부족하면</div>
        <div style="margin-top:10px;font-size:26px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">${o.weak}</div>
      </div>
    </div>

    ${isLast ? `<div style="position:absolute;bottom:110px;left:90px;right:90px;background:${C.ink};border-radius:22px;padding:34px 40px;display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:26px;font-weight:800;color:${C.bg}">📌 나의 사주가 궁금하다면? 프로필 링크 확인!</span>
        <span style="font-size:24px;color:${C.gold};font-weight:700">@susu.oheng</span>
      </div>` : handle()}
  ` + foot;
}

const slides = [cover, ...EL.map((o, i) => elSlide(o, i + 2, i === EL.length - 1))];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
