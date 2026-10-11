// 수수 "겉과 속이 다른 오행" 반전 시리즈 — 水(수) 편 — 6장
// 재사용 템플릿: 상단 F 객체만 교체하면 木/火/土 편 복제. (金은 기존 신금·금속마음과 겹쳐 제외)
// 규칙: 따뜻한 팔레트·사람 말투·단정어 완화("~하는 결")·"좋고 나쁨 없는 결" 병기·태그 유도.
// [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

// ===== 오행별 데이터 (木/火/土 편은 여기만 교체) =====
const F = {
  ko: '수', han: '水', color: C.water,
  coverHook: ['겉은 새침한데,', '알고 보면 정 다 퍼주는 사람'],
  coverSub: '혹시 당신, <b>물(水) 기운</b>일지도 몰라요',
  introHead: '조용한데, 속은 깊은 사람',
  introBody: '사주에 물(水) 기운이 강한 사람은 겉으로는 차분하고 무심해 보여요. 근데 그건 감정이 없어서가 아니라, 안에서는 다 느끼면서 티를 안 내는 것뿐이에요.',
  outer: [
    '말수가 적고 늘 차분하다',
    '감정 표현이 잘 없다',
    '쿨하고 거리감 있어 보인다',
    '무슨 생각 하는지 모르겠다는 말, 자주 듣는다',
  ],
  inner: [
    '사실은 정이 엄청 많다',
    '사소한 것도 다 기억하고 챙긴다',
    '걱정되면 티 안 내고 혼자 끙끙 앓는다',
    '표현이 서툴 뿐, 마음은 늘 있다',
  ],
  heardLine: '차가운 줄 알았다는 말, 많이 들었죠?',
  comfort: '근데 겪어본 사람은 알아요. 물처럼 <b>깊고 오래 가는 사람</b>이라는 거.',
};
// ===================================================

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3.5px solid ${F.color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${F.color}">${F.han}</span></div>`;
const dotRow = (text, color) => `<div style="display:flex;align-items:flex-start;gap:18px;margin-bottom:24px">
  <span style="width:14px;height:14px;flex:none;border-radius:50%;background:${color};margin-top:12px"></span>
  <span style="font-size:33px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">${text}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 82% 6%, ${F.color}14, transparent 55%);pointer-events:none}
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
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">겉과 속이 다른 오행</div>
    <div style="font-size:62px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
      ${F.coverHook[0]}<br/><span style="color:${C.coral}">${F.coverHook[1]}</span></div>
    <div style="margin-top:34px;font-size:34px;color:${C.sub};line-height:1.5;word-break:keep-all">${F.coverSub}</div>
  </div>
  <div style="position:absolute;top:880px;left:90px;display:flex;align-items:center;gap:20px">
    ${elBadge(96)}
    <div style="font-size:30px;font-weight:700;color:${F.color};line-height:1.4">${F.ko}(${F.han}) 기운의<br/>겉과 속</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">내 주변에 이런 사람 있으면 태그 👀</div>
` + foot;

// 02 인트로
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">${F.ko}(${F.han}) 기운이란</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">
    ${F.introHead}</div>
  <div style="position:absolute;top:430px;left:90px;right:96px;font-size:33px;color:${C.ink};font-weight:500;line-height:1.75;word-break:keep-all">
    ${F.introBody}</div>
  <div style="position:absolute;top:940px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.6;word-break:keep-all">
    좋고 나쁨의 얘기가 아니라, 그냥 타고난 성격의 결이에요.</div>
  ${handle()}
` + foot;

// 03 겉모습
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">남들이 보는 나</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.2;letter-spacing:-0.03em;word-break:keep-all">
    겉으로는 <span style="color:${F.color}">이런 사람</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px">
    ${F.outer.map(t => dotRow(t, F.color)).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 속마음
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">근데 진짜 속은</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:60px;font-weight:800;line-height:1.2;letter-spacing:-0.03em;word-break:keep-all">
    사실은 <span style="color:${C.coral}">이런 사람</span></div>
  <div style="position:absolute;top:400px;left:90px;right:96px">
    ${F.inner.map(t => dotRow(t, C.coral)).join('')}
  </div>
  ${handle()}
` + foot;

// 05 공감 · 위로
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서 자주 듣는 말</div>
  <div style="position:absolute;top:250px;left:90px;right:96px;font-size:52px;font-weight:800;line-height:1.34;letter-spacing:-0.025em;word-break:keep-all">
    "${F.heardLine}"</div>
  <div style="position:absolute;top:560px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="font-size:34px;font-weight:600;line-height:1.62;word-break:keep-all">${F.comfort.replace(/<b>/g, '<b style="color:' + C.gold + '">')}</div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:27px;color:${C.sub};line-height:1.5;word-break:keep-all">
    맞다면 조용히 저장, 그리고 스스로한테도 한 번 다정하게.</div>
  ${handle()}
` + foot;

// 06 CTA (태그)
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">내 주변에 이런 사람?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    딱 떠오르는 <span style="color:${C.coral}">그 사람,</span><br/>태그해서 알려주세요</div>
  <div style="position:absolute;top:560px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 오행이 뭔지 알면, 나도 이런 반전이 있을지 몰라요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 친구 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
