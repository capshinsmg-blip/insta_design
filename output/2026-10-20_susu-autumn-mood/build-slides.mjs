// 수수 "오행별 '가을 타는' 방식 🍂" 시즌 공감 — 6장 (발행 10/20 · 戌月 土 환절기)
// 복제 원본: 2026-10-17_susu-meme-party (MEMES 배열·커버·요약·CTA 문구만 교체, 말풍선 구조 그대로).
// 태그·공유 포맷. 자체 텍스트 말풍선(오리지널). 계절 감수성 톤 — 우울·외로움·질병 뉘앙스 금지.
// 규칙: 따뜻한 팔레트·사람 말투. [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
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

const MEMES = [
  { ko: '목', han: '木', color: C.wood, ctx: '가을 오면', msg: '"뭔가 새로 시작하고 싶다" 갑자기 운동·공부 등록' },
  { ko: '화', han: '火', color: C.fire, ctx: '해가 짧아지면', msg: '"놀자 놀자!! 가을엔 사람이 필요해" 약속 꽉꽉' },
  { ko: '토', han: '土', color: C.earth, ctx: '찬바람 불면', msg: '"집이 최고" 이불 속에서 귤이랑 붕어빵 쟁임' },
  { ko: '금', han: '金', color: C.metal, ctx: '낙엽 지면', msg: '"올해 뭐 했지" 노트 펴고 조용히 정리 모드' },
  { ko: '수', han: '水', color: C.water, ctx: '밤이 길어지면', msg: '노래 틀고 창밖 보면서 괜히 센치… 옛날 생각' },
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
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 6%, rgba(200,151,58,0.08), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:800;letter-spacing:0.06em;color:${C.gold}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 오행 밈 카드 (상황 + 말풍선 + 태그)
const memeCard = (m) => `
  <div style="margin-bottom:0">
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
      <div style="width:52px;height:52px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${m.color};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:${m.color}">${m.han}</div>
      <span style="font-size:26px;font-weight:800;color:${C.ink}">${m.ko}(${m.han})</span>
      <span style="font-size:24px;color:${C.sub}">${m.ctx}</span>
    </div>
    <div style="margin-left:20px;position:relative;display:inline-block;max-width:840px;background:${m.color}14;border:2px solid ${m.color}44;border-radius:8px 26px 26px 26px;padding:26px 32px">
      <span style="font-size:32px;font-weight:700;color:${C.ink};line-height:1.4;word-break:keep-all">${m.msg}</span>
    </div>
  </div>`;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:340px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행 공감 · 가을 편 🍂</div>
    <div style="font-size:76px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      가을 타는 것도<br/>오행마다 <span style="color:${C.coral}">달라요</span></div>
    <div style="margin-top:34px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">
      나는 어떻게 타는 사람일까요?</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">가을 제일 타는 친구 있으면 태그 👀</div>
` + foot;

// 02 목·화
const s2 = head() + page(2) + `
  <div style="position:absolute;top:110px;left:90px;right:90px">${memeCard(MEMES[0])}</div>
  <div style="position:absolute;top:620px;left:90px;right:90px">${memeCard(MEMES[1])}</div>
  ${handle()}
` + foot;

// 03 토·금
const s3 = head() + page(3) + `
  <div style="position:absolute;top:110px;left:90px;right:90px">${memeCard(MEMES[2])}</div>
  <div style="position:absolute;top:620px;left:90px;right:90px">${memeCard(MEMES[3])}</div>
  ${handle()}
` + foot;

// 04 수 (크게)
const s4 = head() + page(4) + `
  <div style="position:absolute;top:200px;left:90px;right:90px">${memeCard(MEMES[4])}</div>
  <div style="position:absolute;top:560px;left:90px;right:96px;font-size:34px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">
    ...이 중에 <span style="color:${C.coral}">내 얘기</span>, 하나쯤 있죠?</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">
    타는 게 아니라, 계절이 내 결을 살짝 건드리는 거예요 🍂</div>
  ${handle()}
` + foot;

// 05 한 줄 요약
const s5 = head() + page(5) + `
  <div style="position:absolute;top:96px;left:90px" class="label">한 줄 요약</div>
  <div style="position:absolute;top:180px;left:90px;right:90px;font-size:48px;font-weight:800;line-height:1.24;letter-spacing:-0.025em;word-break:keep-all">
    나는 <span style="color:${C.coral}">어떤 가을</span>?</div>
  <div style="position:absolute;top:360px;left:90px;right:90px;display:flex;flex-direction:column;gap:18px">
    ${MEMES.map(m => `
      <div style="display:flex;align-items:center;gap:20px">
        <div style="width:50px;height:50px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${m.color};display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:${m.color}">${m.han}</div>
        <span style="font-size:27px;font-weight:800;color:${C.ink};width:80px">${m.ko}</span>
        <span style="font-size:26px;color:${C.sub};word-break:keep-all">${m.ctx.replace(/"/g, '')}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">TAG · 가을 타는 친구</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:62px;font-weight:800;line-height:1.24;letter-spacing:-0.03em;word-break:keep-all">
    가을 제일 타는<br/><span style="color:${C.coral}">그 친구</span>, 태그</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    그 친구 태그하고, 나는 몇 번인지 댓글로 남겨줘요. 서로 맞나 확인해보는 재미!</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">
      내 진짜 오행을 알면, 내가 가을을 어떻게 타는지도 보여요.</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">친구 태그 · 댓글</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
