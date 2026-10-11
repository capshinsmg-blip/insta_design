// 수수 1회차 "수수가 어떤 공간인지 소개할게요" — 카드뉴스 5장 생성기 (v2)
// 변경: 폰트 확대 / 2p 문구 수정 / 3p 오행 상생·상극 관계도 / 4p 새 착용컷(수·화·토)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const photos = JSON.parse(readFileSync(join(__dirname, '_photos.json'), 'utf8'));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const OHENG = {
  wood:  { han: '木', ko: '목', c: '#5E7C63' },
  fire:  { han: '火', ko: '화', c: '#B0433F' },
  earth: { han: '土', ko: '토', c: '#C8973A' },
  metal: { han: '金', ko: '금', c: '#9AA0A6' },
  water: { han: '水', ko: '수', c: '#3F5A6B' },
};

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
  .bar{width:64px;height:5px;background:${C.gold};border-radius:3px}
  .sub{color:${C.sub};line-height:1.6}
</style>
</head>
<body>`;
const foot = `</body></html>`;

const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// ── SLIDE 01 — 커버 ──
const s1 = head() + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span>
  </div>
  <div style="position:absolute;top:110px;right:90px;font-size:21px;letter-spacing:0.14em;color:${C.sub}">사주 오행 공방</div>

  <div style="position:absolute;bottom:150px;left:90px;right:90px">
    <div class="label" style="margin-bottom:34px">수수 · 첫인사</div>
    <div style="font-size:88px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      당신의 오행을 담은<br/><span style="color:${C.coral}">단 하나의 팔찌</span>
    </div>
    <div class="bar" style="margin-top:42px"></div>
    <div class="sub" style="margin-top:32px;font-size:30px">사주로 만드는 원석 팔찌, 수수를 소개합니다.</div>
  </div>
  <div style="position:absolute;bottom:74px;right:90px;font-size:22px;color:${C.gold};font-weight:600;letter-spacing:0.04em">저장 필수 ✦</div>
` + foot;

// ── SLIDE 02 — 수수는 어떤 곳 ──
const s2 = head() + `
  <div style="position:absolute;top:96px;left:90px" class="label">ABOUT · 수수</div>
  <div style="position:absolute;top:205px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    수수는<br/><span style="color:${C.coral}">사주로 팔찌를 만드는</span><br/>작은 공방이에요
  </div>
  <div style="position:absolute;top:610px;left:90px;width:74px;height:5px;background:${C.gold};border-radius:3px"></div>
  <div class="sub" style="position:absolute;top:672px;left:90px;right:100px;font-size:34px;line-height:1.7;word-break:keep-all">
    타고난 사주 속 <b style="color:${C.ink};font-weight:700">오행의 균형</b>을 읽고,<br/>
    부족한 기운을 원석으로 채운 팔찌를<br/>
    하나하나 손으로 만들어요.
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:90px;display:flex;gap:16px">
    ${['운명이 아니라 균형', '매일 지니는 부적', '나만을 위한 제작'].map(t => `
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:28px 22px;text-align:center;font-size:25px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// ── SLIDE 03 — 오행 상생·상극 관계도 ──
function ohengDiagram() {
  const cx = 450, cy = 425, R = 300, nr = 66;
  const ang = { wood: 0, fire: 72, earth: 144, metal: 216, water: 288 };
  const P = {};
  for (const k in ang) {
    const t = (ang[k] - 90) * Math.PI / 180;
    P[k] = { x: cx + R * Math.cos(t), y: cy + R * Math.sin(t) };
  }
  const trim = (a, b, pa, pb) => {
    const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
    return { x1: a.x + ux * pa, y1: a.y + uy * pa, x2: b.x - ux * pb, y2: b.y - uy * pb };
  };
  const saeng = [['wood', 'fire'], ['fire', 'earth'], ['earth', 'metal'], ['metal', 'water'], ['water', 'wood']];
  const geuk = [['wood', 'earth'], ['earth', 'water'], ['water', 'fire'], ['fire', 'metal'], ['metal', 'wood']];
  const line = (pair, cls) => {
    const t = trim(P[pair[0]], P[pair[1]], nr + 8, nr + 16);
    return `<line x1="${t.x1.toFixed(1)}" y1="${t.y1.toFixed(1)}" x2="${t.x2.toFixed(1)}" y2="${t.y2.toFixed(1)}" class="${cls}"/>`;
  };
  const node = (k) => {
    const o = OHENG[k], p = P[k];
    return `<g>
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${nr}" fill="${C.bg}" stroke="${o.c}" stroke-width="3.5"/>
      <text x="${p.x.toFixed(1)}" y="${(p.y - 4).toFixed(1)}" text-anchor="middle" font-size="52" font-weight="700" fill="${o.c}" font-family="'Pretendard Variable',sans-serif">${o.han}</text>
      <text x="${p.x.toFixed(1)}" y="${(p.y + 34).toFixed(1)}" text-anchor="middle" font-size="21" font-weight="700" fill="${C.ink}" font-family="'Pretendard Variable',sans-serif">${o.ko}</text>
    </g>`;
  };
  return `<svg width="900" height="820" viewBox="0 0 900 820" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="aS" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${C.coral}"/></marker>
      <marker id="aG" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="rgba(110,26,43,0.32)"/></marker>
    </defs>
    <style>
      .saeng{stroke:${C.coral};stroke-width:4;marker-end:url(#aS)}
      .geuk{stroke:rgba(110,26,43,0.30);stroke-width:2.5;stroke-dasharray:3 9;stroke-linecap:round;marker-end:url(#aG)}
    </style>
    ${geuk.map(p => line(p, 'geuk')).join('')}
    ${saeng.map(p => line(p, 'saeng')).join('')}
    ${Object.keys(OHENG).map(node).join('')}
  </svg>`;
}
const s3 = head() + `
  <div style="position:absolute;top:96px;left:90px" class="label">오행(五行)의 상성</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    다섯 기운은 서로<br/><span style="color:${C.coral}">돕고 견제해요</span>
  </div>
  <div style="position:absolute;top:352px;left:90px">${ohengDiagram()}</div>
  <div style="position:absolute;bottom:150px;left:90px;right:90px;display:flex;gap:44px;align-items:center">
    <div style="display:flex;align-items:center;gap:14px">
      <svg width="52" height="14"><line x1="2" y1="7" x2="40" y2="7" stroke="${C.coral}" stroke-width="4"/><path d="M40,2 L50,7 L40,12 z" fill="${C.coral}"/></svg>
      <span style="font-size:25px;font-weight:700;color:${C.ink}">상생 <span style="color:${C.sub};font-weight:500">· 서로를 살려요</span></span>
    </div>
    <div style="display:flex;align-items:center;gap:14px">
      <svg width="52" height="14"><line x1="2" y1="7" x2="40" y2="7" stroke="rgba(110,26,43,0.4)" stroke-width="2.5" stroke-dasharray="3 7"/><path d="M40,2 L50,7 L40,12 z" fill="rgba(110,26,43,0.4)"/></svg>
      <span style="font-size:25px;font-weight:700;color:${C.ink}">상극 <span style="color:${C.sub};font-weight:500">· 서로를 눌러요</span></span>
    </div>
  </div>
  ${handle()}
` + foot;

// ── SLIDE 04 — 그래서 수수는 (3스텝 + 착용컷) ──
const steps = [
  ['01', '사주를 읽어요', '타고난 오행의 균형 분석'],
  ['02', '원석을 골라요', '부족한 기운을 채울 원석'],
  ['03', '손으로 지어요', '하나뿐인 팔찌로 제작'],
];
const shots = [
  [photos.water, '水 · 수 오행'],
  [photos.fire, '火 · 화 오행'],
  [photos.earth, '土 · 토 오행'],
];
const s4 = head() + `
  <div style="position:absolute;top:96px;left:90px" class="label">HOW · 수수의 방식</div>
  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    그래서 수수는<br/><span style="color:${C.coral}">이렇게 만들어요</span>
  </div>

  <div style="position:absolute;top:470px;left:90px;right:90px;display:flex;gap:16px">
    ${steps.map(([n, t, d]) => `
      <div style="flex:1;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:28px 22px">
        <div style="font-size:40px;font-weight:800;color:${C.gold}">${n}</div>
        <div style="margin-top:10px;font-size:29px;font-weight:700;color:${C.ink}">${t}</div>
        <div style="margin-top:8px;font-size:21px;color:${C.sub};line-height:1.45;word-break:keep-all">${d}</div>
      </div>`).join('')}
  </div>

  <div style="position:absolute;top:775px;left:90px;font-size:25px;font-weight:700;color:${C.coral};letter-spacing:0.02em">오행별 원석 예시</div>
  <div style="position:absolute;top:828px;left:90px;right:90px;display:flex;gap:20px">
    ${shots.map(([src, cap]) => `
      <div style="flex:1;text-align:center">
        <div style="width:100%;height:296px;border-radius:22px;overflow:hidden;border:1px solid ${C.faint};box-shadow:0 12px 28px rgba(110,26,43,0.08)">
          <img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block"/>
        </div>
        <div style="margin-top:16px;font-size:26px;font-weight:700;color:${C.ink}">${cap}</div>
      </div>`).join('')}
  </div>
  ${handle()}
` + foot;

// ── SLIDE 05 — CTA ──
const s5 = head() + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 오행 찾기</div>
  <div style="position:absolute;top:225px;left:90px;right:90px;font-size:80px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 사주가<br/><span style="color:${C.coral}">궁금하다면?</span>
  </div>
  <div class="bar" style="position:absolute;top:500px;left:90px"></div>

  <div style="position:absolute;top:610px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="display:flex;align-items:center;gap:14px">
      <span style="font-size:40px">📌</span>
      <span style="font-size:42px;font-weight:800;letter-spacing:-0.01em">프로필 링크 확인!</span>
    </div>
    <div style="margin-top:24px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 사주 속 <b style="color:${C.gold}">부족한 오행</b>, 프로필 링크에서<br/>바로 확인해보세요.
    </div>
  </div>

  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">
      ${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span>
    </div>
    <div style="font-size:24px;color:${C.sub}">팔로우하고 내 오행 찾기 →</div>
  </div>
` + foot;

const slides = [s1, s2, s3, s4, s5];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
