// 수수 4주차 피드② "오행 5가지 총정리 — 한 장 요약" — 저장용 인포그래픽 1장
// 목표: 저장(레퍼런스). 5원소를 한 카드에 압축. 한지 화이트 라이트 테마.
// [필수] "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.035)',
};

// 5원소 요약 (시리즈 일관): 색/계절/키워드/한줄
const EL = [
  { han: '木', ko: '목', c: '#5E7C63', season: '봄', kw: '성장 · 시작 · 추진력', one: '새로운 걸 벌이고 앞장서는 사람' },
  { han: '火', ko: '화', c: '#B0433F', season: '여름', kw: '열정 · 표현 · 직감', one: '감정이 풍부한 분위기 메이커' },
  { han: '土', ko: '토', c: '#C8973A', season: '환절기', kw: '안정 · 신뢰 · 포용', one: '묵묵히 챙기는 든든한 사람' },
  { han: '金', ko: '금', c: '#52565C', season: '가을', kw: '결단 · 원칙 · 완성', one: '맺고 끊음이 분명한 완벽주의' },
  { han: '水', ko: '수', c: '#3F5A6B', season: '겨울', kw: '감수성 · 직관 · 지혜', one: '말없이 깊이 느끼는 사람' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 70% at 82% 6%, rgba(200,151,58,0.06), transparent 55%);pointer-events:none}
</style></head><body>`;
const foot = `</body></html>`;

const row = (o) => `
  <div style="display:flex;align-items:center;gap:24px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${o.c};border-radius:16px;padding:20px 26px">
    <div style="width:70px;height:70px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${o.c};display:flex;align-items:center;justify-content:center">
      <span style="font-size:38px;font-weight:700;color:${o.c}">${o.han}</span></div>
    <div style="flex:1">
      <div style="display:flex;align-items:baseline;gap:14px">
        <span style="font-size:30px;font-weight:800;color:${C.ink}">${o.ko}(${o.han})</span>
        <span style="font-size:21px;color:${C.sub}">${o.season}</span>
        <span style="font-size:23px;font-weight:700;color:${o.c}">${o.kw}</span>
      </div>
      <div style="margin-top:6px;font-size:24px;color:${C.sub};word-break:keep-all">${o.one}</div>
    </div>
  </div>`;

const s1 = head() + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(34)}<span style="font-size:25px;font-weight:800;letter-spacing:0.26em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:88px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.12em;color:${C.coral}">오행 총정리 · SAVE</div>

  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    오행 5가지 <span style="color:${C.coral}">한 장 요약</span></div>
  <div style="position:absolute;top:300px;left:90px;font-size:27px;color:${C.sub}">내 안의 다섯 기운, 한눈에 담아두세요.</div>

  <div style="position:absolute;top:390px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${EL.map(row).join('')}
  </div>

  <div style="position:absolute;bottom:96px;left:90px;right:90px;background:${C.ink};border-radius:24px;padding:36px 42px;color:${C.bg}">
    <div style="font-size:34px;font-weight:800;line-height:1.2">📌 나의 사주가 궁금하다면? <span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:14px;font-size:24px;color:rgba(247,242,236,0.75);word-break:keep-all">이 카드는 저장해두고 필요할 때 꺼내 보세요 · @susu.oheng</div>
  </div>
` + foot;

writeFileSync(join(slidesDir, 'slide-01.html'), s1, 'utf8');
console.log('  ✓ slide-01.html', `(${(s1.length / 1024).toFixed(1)} KB)`);
console.log('생성 완료:', slidesDir);
