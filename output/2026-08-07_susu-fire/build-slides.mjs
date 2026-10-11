// 수수 2주차 피드② "화(火) 오행 — 열정과 직감의 에너지" — ENFP·ENFJ 공감 자극형 6장
// 훅: MBTI 교차 공감. 목표: 공감·저장. 한지 화이트 + 화(불) 포인트.
// [필수] 마지막 페이지: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  fire: '#B0433F', // 화 시그니처
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
  firebg: 'rgba(176,67,63,0.10)',
};

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;

const fireBadge = (s = 84) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${C.bg};border:3px solid ${C.fire};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.52)}px;font-weight:700;color:${C.fire}">火</span></div>`;

// 스파크(불꽃 에너지) 불릿
const spark = (s = 34, color = C.fire) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="${color}"/></svg>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(176,67,63,0.07), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.fire}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 06</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 01 커버 — ENFP·ENFJ 훅
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:288px;left:90px;right:90px">
    <div class="label" style="margin-bottom:30px">오행 타입 · 火 화</div>
    <div style="font-size:74px;font-weight:800;line-height:1.24;letter-spacing:-0.035em;word-break:keep-all">
      화(火) 오행은<br/>MBTI로 치면<br/><span style="color:${C.fire}">ENFP · ENFJ</span></div>
    <div style="margin-top:30px;font-size:31px;color:${C.sub};line-height:1.55;word-break:keep-all">열정과 직감으로 사는 사람들, 이거 완전 내 얘기?</div>
  </div>
  <div style="position:absolute;top:850px;left:90px;display:flex;flex-direction:column;gap:22px">
    ${['리액션이 크고 감정 표현이 풍부하다', '처음 본 사람과도 5분이면 친해진다', '"느낌이 왔어" 촉이 잘 맞는다'].map(t => `
      <div style="display:flex;align-items:center;gap:20px"><span style="opacity:0.6">${spark(34)}</span><span style="font-size:29px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:118px;left:90px;font-size:26px;font-weight:700;color:${C.gold};letter-spacing:0.02em">저장하고 공감해보세요 ✦</div>
` + foot;

// 02 화 기운이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:92px;left:90px;display:flex;align-items:center;gap:20px">
    ${fireBadge(84)}<div><div style="font-size:30px;font-weight:800;color:${C.ink}">화(火) 오행</div>
      <div style="font-size:22px;color:${C.sub};margin-top:4px">여름 · 불</div></div></div>
  <div style="position:absolute;top:280px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    여름처럼 <span style="color:${C.fire}">타오르는</span> 열정</div>
  <div style="position:absolute;top:470px;left:90px;right:100px;font-size:34px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    화(火)는 여름, 불의 기운이에요.<br/>감정이 <b style="color:${C.fire}">뜨겁게 타오르고</b>,<br/>촉과 직감으로 세상을 느끼는 에너지죠.</div>
  <div style="position:absolute;top:780px;left:90px;right:90px;display:flex;gap:14px">
    ${['열정', '표현', '직감'].map(t => `<div style="background:${C.firebg};border:1px solid ${C.fire}59;border-radius:999px;padding:14px 30px;font-size:27px;font-weight:700;color:${C.ink}">${t}</div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 03 공감 포인트 (핵심 훅 — ENFP·ENFJ)
const empathy = [
  '리액션이 크고 감정 표현이 풍부하다',
  '처음 본 사람과도 금방 친해진다',
  '어느 모임이든 분위기 메이커가 된다',
  '"느낌이 왔어" 촉이 잘 맞는다',
  '정 주면 화끈하게 다 준다',
  '재미없는 건 1초도 못 참는다',
];
const s3 = head() + page(3) + `
  <div style="position:absolute;top:96px;left:90px" class="label">공감 · ENFP · ENFJ 주목</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    이거 다 <span style="color:${C.fire}">내 얘기</span> 같다면</div>
  <div style="position:absolute;top:350px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    ${empathy.map(t => `
      <div style="display:flex;align-items:center;gap:22px;background:${C.cardbg};border:1px solid ${C.faint};border-radius:16px;padding:22px 26px">
        ${spark(38)}<span style="font-size:30px;font-weight:600;color:${C.ink};word-break:keep-all">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:132px;left:90px;font-size:27px;font-weight:700;color:${C.fire}">ENFP·ENFJ라면 격하게 공감할걸요</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 04 매력
const strengths = [
  ['끌어당기는 에너지', '곁에 있으면 덩달아 신이 난다'],
  ['솔직한 표현력', '마음을 숨기지 않고 바로 전한다'],
  ['빠른 직감', '머리보다 촉이 먼저 안다'],
];
const s4 = head() + page(4) + `
  <div style="position:absolute;top:96px;left:90px" class="label">STRONG · 화(火)의 매력</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    화(火)가 강한 사람은</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:24px">
    ${strengths.map(([t, d], i) => `
      <div style="display:flex;align-items:center;gap:26px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:18px;padding:34px 32px">
        <span style="font-size:46px;font-weight:800;color:${C.fire};min-width:60px">0${i + 1}</span>
        <div><div style="font-size:33px;font-weight:800;color:${C.ink}">${t}</div>
          <div style="margin-top:8px;font-size:26px;color:${C.sub};line-height:1.5;word-break:keep-all">${d}</div></div></div>`).join('')}
  </div>
  ${handle()}
` + foot;

// 05 균형
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">BALANCE · 화(火)의 균형</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    넘치거나 부족하면</div>
  <div style="position:absolute;top:370px;left:90px;right:90px;display:flex;flex-direction:column;gap:22px">
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.fire};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.fire};letter-spacing:0.02em">화가 넘치면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">감정 기복이 크고, 쉽게 뜨거워졌다 지쳐요</div></div>
    <div style="background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:34px 34px">
      <div style="font-size:25px;font-weight:800;color:${C.sub};letter-spacing:0.02em">화가 부족하면</div>
      <div style="margin-top:12px;font-size:31px;font-weight:600;color:${C.ink};line-height:1.45;word-break:keep-all">무기력하고, 마음 표현이 서툴러져요</div></div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;color:${C.sub};line-height:1.6;word-break:keep-all">
    불은 너무 세도, 꺼져도 문제예요.<br/><b style="color:${C.ink}">부족한 기운은 원석으로 채워주면 돼요.</b></div>
  ${handle()}
` + foot;

// 06 CTA — [필수] "나의 사주가 궁금하다면? 프로필 링크 확인!"
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 火</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:70px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    나의 사주가<br/><span style="color:${C.fire}">궁금하다면?</span></div>
  <div style="position:absolute;top:520px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:52px 48px;color:${C.bg}">
    <div style="display:flex;align-items:center;gap:14px"><span style="font-size:40px">📌</span>
      <span style="font-size:42px;font-weight:800">프로필 링크 확인!</span></div>
    <div style="margin-top:24px;font-size:30px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      내 오행 밸런스 — 어떤 기운이 강하고<br/><b style="color:${C.gold}">부족한지</b> 프로필 링크에서 확인해보세요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">저장 · 다음 편은 土 →</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
