// 수수 "[내 지갑엔 왜 늘 같은 버릇이?] 오행별 돈 그릇 5성향" — 대괄호 훅·재포장 8장
// 카피: 멀티에이전트 초안+명리감수(투자권유·우열·낙인 필터) 통합. 한지 화이트 + 골드(돈) + ₩코인.
// [필수] 마지막: "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A', jae: '#B88A2E',
  wood: '#5E7C63', fire: '#B0433F', earth: '#C8973A', metal: '#52565C', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.04)',
};
const TOTAL = 8;

const ELS = [
  { ko: '목', han: '木', color: C.wood, nick: '굴리는 그릇',
    traits: "돈을 '키우는 도구'로 보는 편이에요. 배움·자기계발에 아낌없이 쓰고, 가만히 두기보다 굴려서 키우는 쪽이죠. 기회를 알아보는 눈이 밝은 성장형.",
    watch: '가능성에 끌리다 보면 \'지금의 나\'를 위한 몫이 얇아질 때가 있어요.',
    tip: '나에게 쓰는 통장 / 생활 통장, 두 개로 나눠두기' },
  { ko: '화', han: '火', color: C.fire, nick: '화끈한 그릇',
    traits: '기분·사람·경험에 화끈하게 쓰는 편이에요. 좋은 순간엔 지갑이 먼저 열리고, 곁을 챙길 줄 아는 따뜻함이 강점. 돈의 흐름이 시원시원해요.',
    watch: '기분이 결제 버튼을 대신 눌러줄 때가 있어요.',
    tip: "'경험 예산'은 따로 떼두고, 큰 결제는 하루 자고 결정하기" },
  { ko: '토', han: '土', color: C.earth, nick: '쌓는 그릇',
    traits: '차곡차곡 꾸준히 모으는 편이에요. 실물·신용을 믿고 티 안 나게 쌓아 올려, 그릇이 단단하고 안정적. 멀리 보는 안목이 강점이에요.',
    watch: '안정이 편한 만큼, 새로운 시도 앞에선 조금 망설이기도 해요.',
    tip: '비상금은 그대로, 자유롭게 쓰는 소액 한 칸만 열어두기' },
  { ko: '금', han: '金', color: C.metal, nick: '관리하는 그릇',
    traits: '손익이 또렷하고 계획이 촘촘한 편이에요. 알뜰한 관리 감각이 좋아 돈이 새는 곳을 잘 살피죠. 숫자 앞에서 냉정한 판단이 강점.',
    watch: '빈틈없이 챙기다 보면, 정작 나에게는 인색해질 때가 있어요.',
    tip: "한 달에 한 번은 '나를 위한 기쁜 소비'도 예산에 넣기" },
  { ko: '수', han: '水', color: C.water, nick: '흐르는 그릇',
    traits: '흐름·정보에 민감한 편이에요. 기회를 빠르게 알아보고 유연하게 움직이는 게 강점이죠. 붙잡아두기보다 자연스럽게 흘려보내는 쪽.',
    watch: '여기저기 관심이 많은 만큼, 남기고 싶은 몫도 흩어지기 쉬워요.',
    tip: "남기고 싶은 몫은 '자동이체' 한 줄기부터 고정하기" },
];

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const coin = (s = 30, color = C.jae) => `<svg width="${s}" height="${s}" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="13" fill="${color}" fill-opacity="0.92"/><circle cx="15" cy="15" r="13" stroke="${color}" stroke-width="1"/><text x="15" y="20.5" text-anchor="middle" font-size="15" font-weight="800" fill="#F7F2EC" font-family="'Pretendard Variable',sans-serif">₩</text></svg>`;
const elBadge = (han, color, s = 84) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3px solid ${color};display:flex;align-items:center;justify-content:center"><span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${color}">${han}</span></div>`;

const head = () => `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1080px;height:1350px;background:${C.bg};font-family:'Pretendard Variable','Pretendard',sans-serif;color:${C.ink};overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}
  body::before{content:'';position:absolute;inset:0;background:radial-gradient(120% 80% at 78% 8%, rgba(184,138,46,0.09), transparent 55%);pointer-events:none}
  .label{font-size:25px;font-weight:700;letter-spacing:0.16em;color:${C.jae}}
</style></head><body>`;
const foot = `</body></html>`;
const page = (n) => `<div style="position:absolute;top:100px;right:90px;font-size:22px;font-weight:700;letter-spacing:0.1em;color:${C.sub}">${String(n).padStart(2, '0')} <span style="color:${C.faint}">/ 0${TOTAL}</span></div>`;
const handle = () => `<div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">
  ${bead(28)}<span style="font-size:25px;font-weight:600;color:${C.sub};letter-spacing:0.02em">@susu.oheng</span></div>`;

// 오행 돈 그릇 슬라이드
function grutSlide(n, e) {
  return head() + page(n) + `
    <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:22px">
      ${elBadge(e.han, e.color)}
      <div><div style="font-size:22px;font-weight:700;letter-spacing:0.06em;color:${e.color}">${e.ko}(${e.han}) 오행</div>
        <div style="font-size:46px;font-weight:800;color:${C.ink};margin-top:2px">${e.nick}</div></div></div>
    <div style="position:absolute;top:270px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.65;word-break:keep-all">${e.traits}</div>
    <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.cardbg};border:1px solid ${C.faint};border-left:6px solid ${C.faint};border-radius:18px;padding:28px 32px">
      <div style="font-size:23px;font-weight:800;color:${C.sub}">⚠ 이럴 땐</div>
      <div style="margin-top:10px;font-size:28px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">${e.watch}</div></div>
    <div style="position:absolute;top:${640 + 200}px;left:90px;right:90px;background:${e.color}14;border:1px solid ${e.color}44;border-left:6px solid ${e.color};border-radius:18px;padding:28px 32px">
      <div style="font-size:23px;font-weight:800;color:${e.color}">💡 돈 습관 한 가지</div>
      <div style="margin-top:10px;font-size:28px;font-weight:700;color:${C.ink};line-height:1.5;word-break:keep-all">${e.tip}</div></div>
    <div style="position:absolute;bottom:120px;left:90px;font-size:24px;color:${C.sub}">더 좋은 그릇은 없어요. 모양이 다를 뿐 🫶</div>
    <div style="position:absolute;bottom:66px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
  ` + foot;
}

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:300px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행 돈 그릇 · 財</div>
    <div style="font-size:60px;font-weight:800;line-height:1.28;letter-spacing:-0.03em;word-break:keep-all">
      [내 지갑엔 왜 늘<br/><span style="color:${C.jae}">같은 버릇이 반복될까?]</span></div>
    <div style="margin-top:28px;font-size:30px;color:${C.sub};line-height:1.6;word-break:keep-all">의지가 약해서가 아니에요.<br/>오행마다 타고난 '돈 그릇' 모양이 다르거든요.</div>
  </div>
  <div style="position:absolute;top:880px;left:90px;right:90px;display:flex;flex-direction:column;gap:16px">
    ${['굴리는 그릇 · 화끈한 그릇 · 쌓는 그릇', '관리하는 그릇 · 흐르는 그릇', '당신은 어떤 그릇인가요? →'].map(t => `
      <div style="display:flex;align-items:center;gap:18px"><span style="opacity:0.9">${coin(26)}</span><span style="font-size:27px;font-weight:600;color:${C.sub}">${t}</span></div>`).join('')}
  </div>
  <div style="position:absolute;bottom:104px;left:90px;font-size:26px;font-weight:700;color:${C.jae};letter-spacing:0.02em">저장하고 내 돈 습관 챙기기 ✦</div>
` + foot;

// 02 돈 그릇이란
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">'돈 그릇'이 대체 뭔가요?</div>
  <div style="position:absolute;top:190px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.3;letter-spacing:-0.025em;word-break:keep-all">
    오행 기질이 <span style="color:${C.jae}">돈을 대하는 방식</span></div>
  <div style="position:absolute;top:400px;left:90px;right:100px;font-size:31px;color:${C.ink};font-weight:600;line-height:1.7;word-break:keep-all">
    돈이 많고 적음의 문제가 아니라,<br/>어떻게 벌고 · 쓰고 · 모으는지<br/>그 <b style="color:${C.jae}">'모양'</b>에 대한 이야기예요.<br/><br/>이미 잘 모으는 분도, 잘 쓰는 분도 있어요.<br/><b style="color:${C.ink}">더 좋은 그릇은 없어요, 모양이 다를 뿐.</b><br/>내 모양을 알면, 나에게 맞는 습관이 보여요.</div>
  ${handle()}
` + foot;

// 03~07 오행별
const elementSlides = ELS.map((e, i) => grutSlide(i + 3, e));

// 08 CTA
const s8 = head() + page(8) + `
  <div style="position:absolute;top:96px;left:90px" class="label">SAVE · 내 돈 그릇</div>
  <div style="position:absolute;top:200px;left:90px;right:90px;font-size:56px;font-weight:800;line-height:1.28;letter-spacing:-0.025em;word-break:keep-all">
    당신의 돈 그릇은<br/><span style="color:${C.jae}">어떤 모양인가요?</span></div>
  <div style="position:absolute;top:470px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:46px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">📌 나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:20px;font-size:27px;line-height:1.6;color:rgba(247,242,236,0.8);word-break:keep-all">
      더 좋고 나쁜 그릇은 없어요 — 실제 재물은<br/>특정 오행이 아니라 사주 전체의 균형에서 나와요.</div>
  </div>
  <div style="position:absolute;bottom:120px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">댓글에 내 돈 그릇 남기기 🫶</div></div>
` + foot;

const slides = [s1, s2, ...elementSlides, s8];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
