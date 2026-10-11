// 수수 "9월 마무리 & 10월 미리보기" — 6장
// 월말 전환/저장형. 9월(金 정리) 회고 + 10월(戊戌/土) 예고 → 10/1 월간 앵커로 연결.
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  metal: '#7C7F86', earth: '#C8973A',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

const CHECKS = [
  '미뤄둔 일 하나라도 매듭지었다면',
  '안 쓰던 것 하나라도 비웠다면',
  '무리하지 않고 나를 챙긴 날이 있었다면',
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const check = (s = 40, color = C.gold) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="36" rx="11" fill="${color}1F" stroke="${color}" stroke-width="2"/><path d="M12 20.5 L18 26 L28 14" stroke="${color}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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
    <div class="label" style="margin-bottom:28px">9월을 마무리하며</div>
    <div style="font-size:76px;font-weight:800;line-height:1.22;letter-spacing:-0.035em;word-break:keep-all">
      벌써 9월의<br/><span style="color:${C.coral}">마지막 날</span>이에요</div>
    <div style="margin-top:32px;font-size:35px;font-weight:600;color:${C.sub};line-height:1.5;word-break:keep-all">이번 달, 잘 보냈나요?</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">잠깐 나를 돌아보는 저장각 🍂</div>
` + foot;

// 02 9월은 어떤 달이었나
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">9월은 어떤 달?</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    정리하고 <span style="color:${C.coral}">비우는</span> 달</div>
  <div style="position:absolute;top:460px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    9월은 가을 <b style="color:${C.metal}">금(金)</b>의 계절이었어요. 새로 벌이기보다, 벌여둔 걸 하나씩 매듭짓기 좋은 시간이었죠.</div>
  ${handle()}
` + foot;

// 03 이런 나였다면 충분
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">이런 나였다면, 잘한 거예요</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    하나라도 <span style="color:${C.coral}">끄덕였다면</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;display:flex;flex-direction:column;gap:30px">
    ${CHECKS.map(t => `
      <div style="display:flex;align-items:center;gap:22px">${check(46, C.gold)}<span style="font-size:32px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:30px;font-weight:700;color:${C.gold};line-height:1.5">그걸로 9월은 충분히 잘 보낸 거예요.</div>
  ${handle()}
` + foot;

// 04 10월 미리보기
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그럼 10월은?</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
    거두고 <span style="color:${C.earth}">단단해지는</span> 달</div>
  <div style="position:absolute;top:460px;left:90px;right:96px;font-size:34px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    10월은 가을을 갈무리하는 <b style="color:${C.earth}">흙(土)</b>의 시간으로 들어서요. 그동안 애쓴 걸 거두고, 환절기 컨디션을 챙기기 좋은 달이에요.</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.55;word-break:keep-all">
    자세한 <b style="color:${C.ink}">10월 오행 흐름</b>은 내일(10/1) 올라와요 📅</div>
  ${handle()}
` + foot;

// 05 응원
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">9월의 나에게</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;background:${C.ink};border-radius:32px;padding:80px 54px;color:${C.bg};text-align:center">
    <div style="font-size:54px;font-weight:800;line-height:1.36;letter-spacing:-0.02em">
      한 달 살아낸 나,<br/><span style="color:${C.gold}">수고 많았어요</span></div>
  </div>
  <div style="position:absolute;bottom:170px;left:90px;right:100px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all;text-align:center">
    10월도 남들 속도 말고, 내 페이스로 가요.</div>
  ${handle()}
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 10월 예고</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    10월도 <span style="color:${C.coral}">같이 가요</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    내일 10월 오행 흐름으로 만나요. 9월 어땠는지 댓글로 짧게 남겨주면 좋아요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행을 알면, 10월 흐름이 나한테 어떻게 오는지 더 잘 보여요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 내일 또 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
