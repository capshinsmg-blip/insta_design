// 수수 "지금 끌리는 원석 하나 골라봐" 취향 고르기 — 6장
// 참여형(댓글). 선택=지금 내 마음을 비추는 '거울/리마인더'(효능·인과 아님). 컬러픽과 차별: 원석 오브젝트 + '현재 상태' 프레이밍.
// 규칙: 따뜻한 팔레트·사람 말투. 원석=상징 고정 문구. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#9AA0A6', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

const OPT = [
  { key: 'A', label: '초록빛', color: C.wood, need: '새로 시작하고 성장하고 싶은 때', line: '뻗어나갈 에너지가 차오르고 있어요' },
  { key: 'B', label: '붉은빛', color: C.fire, need: '열정을 쏟을 곳이 필요한 때', line: '마음속 불씨가 방향을 찾고 있어요' },
  { key: 'C', label: '노란빛', color: C.earth, need: '안정과 중심이 필요한 때', line: '단단하게 자리 잡고 싶은 마음이에요' },
  { key: 'D', label: '맑은 흰빛', color: C.metal, need: '정리하고 비우고 싶은 때', line: '복잡한 걸 덜어내고 싶은 신호예요' },
  { key: 'E', label: '깊은 남빛', color: C.water, need: '쉬고 회복하고 싶은 때', line: '느려지고 나를 채우고 싶은 때예요' },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const stone = (color, s = 92) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${color};box-shadow:0 6px 18px ${color}44, inset 0 -6px 12px rgba(0,0,0,0.15), inset 6px 6px 14px rgba(255,255,255,0.35)"></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:800;letter-spacing:0.06em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

const resultCard = (o) => `
  <div style="display:flex;align-items:center;gap:24px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${o.color};border-radius:18px;padding:24px 28px">
    ${stone(o.color, 64)}
    <div style="flex:1"><div style="display:flex;align-items:center;gap:12px"><span style="font-size:26px;font-weight:800;color:${o.color}">${o.key} · ${o.label}</span></div>
    <div style="margin-top:5px;font-size:27px;font-weight:700;color:${C.ink};word-break:keep-all">지금, ${o.need}</div>
    <div style="margin-top:3px;font-size:23px;color:${C.sub};line-height:1.35;word-break:keep-all">${o.line}</div></div></div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오늘의 취향 테스트 🖐</div>
    <div style="font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      지금 제일 <span style="color:${C.coral}">끌리는</span><br/>원석 하나 골라봐요</div>
    <div style="margin-top:32px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      고른 하나가 지금 내 마음을 비추는 거울이에요.</div>
  </div>
  <div style="position:absolute;top:900px;left:90px;right:90px;display:flex;justify-content:space-between">
    ${OPT.map(o => stone(o.color, 86)).join('')}
  </div>
  <div style="position:absolute;bottom:112px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">직감으로 딱 하나! 뒷장에서 확인 →</div>
` + foot;

// 02 안내
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">고르는 법</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    정답은 없어요</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    지금 눈이 가는 색 하나가, 요즘 내 마음이 무엇을 바라는지 살짝 알려줘요. 너무 고민 말고 <b>직감으로</b> 딱 하나만 골라요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 번호(A~E) 기억해두고, 뒷장에서 확인해봐요.</div>
  ${handle()}
` + foot;

// 03 선택지
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">어떤 게 제일 끌려요?</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:50px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    <span style="color:${C.coral}">딱 하나만</span> 골라봐요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${OPT.map(o => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:18px;padding:20px 30px">
        ${stone(o.color, 66)}
        <span style="font-size:34px;font-weight:800;color:${C.ink}">${o.key}</span>
        <span style="font-size:32px;font-weight:600;color:${o.color}">${o.label} 원석</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 결과 A~C
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내가 고른 건? (1/2)</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    지금 <span style="color:${C.coral}">내 마음</span>은요</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${[OPT[0], OPT[1], OPT[2]].map(resultCard).join('')}
  </div>
  ${handle()}
` + foot;

// 05 결과 D~E + 원석 리마인더
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내가 고른 건? (2/2)</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;display:flex;flex-direction:column;gap:20px">
    ${[OPT[3], OPT[4]].map(resultCard).join('')}
  </div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.gold};border-radius:20px;padding:34px 36px;font-size:29px;color:${C.ink};line-height:1.6;word-break:keep-all">
    원석은 기운을 바꿔주는 물건이 아니라, <b>지금 내 마음을 떠올리게 해주는 리마인더</b>예요. 맞았다면 잠깐 나를 챙겨주라는 신호로요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">COMMENT · 뭐 골랐어요?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    당신은 <span style="color:${C.coral}">몇 번</span>이었어요?</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    고른 알파벳(A~E)이랑 "맞다/아니다"를 댓글로 남겨줘요. 친구는 뭘 골랐을지도 궁금하면 태그!</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 사주에 어떤 오행이 부족한지 알면, 색이 더 잘 보여요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 댓글 · 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
