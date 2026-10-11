// 수수 "오행 밸런스게임" — 여행 스타일 (金 계획 vs 木 즉흥) — 6장
// 댓글 편가르기. 정적 캐러셀이라 '댓글 참여'. A/B 파라미터화.
// [필수] 마지막 장 + 캡션 끝 "나의 사주가 궁금하다면? 프로필 링크 확인!"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const slidesDir = join(__dirname, 'slides');
mkdirSync(slidesDir, { recursive: true });

const C = {
  bg: '#F7F2EC', ink: '#6E1A2B', coral: '#A83848', gold: '#C8973A',
  wood: '#5E7C63', fire: '#B0433F', water: '#3F5A6B',
  sub: 'rgba(110,26,43,0.55)', faint: 'rgba(110,26,43,0.10)', cardbg: 'rgba(110,26,43,0.045)',
};
const TOTAL = 6;

// ===== 이 편 데이터 =====
const TOPIC = '주말 편';
const A = { ko: '화', han: '火', color: C.fire, name: '밖으로 나가는 火', word: '밖으로', emoji: '🔥' };
const B = { ko: '수', han: '水', color: C.water, name: '집콕하는 水', word: '집콕', emoji: '🏠' };
const COVER_TITLE0 = '주말엔 나는,';
const COVER_SUB = '세 가지 상황, 나는 어느 쪽에 가까울까요?';
const KIND = '주말';
const QUESTIONS = [
  { q: '금요일 밤이 되면?', a: '약속 잡고 나갈 준비부터', b: '집에서 쉴 생각에 벌써 설렌다' },
  { q: '주말 계획은?', a: '사람 만나고 뭐라도 해야 함', b: '침대랑 한 몸, 아무것도 안 하기' },
  { q: '갑자기 연휴가 생기면?', a: '여행이든 뭐든 일단 밖으로!', b: '집에서 정주행하며 힐링' },
];
const CTA_SUB = '내 사주에 火(밖으로 뻗는 기운)이 많은지 水(안으로 모으는 기운)가 많은지, 진짜로 확인할 수 있어요.';
// ========================

const bead = (size = 40, color = C.gold) => `
<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="13" fill="${color}" fill-opacity="0.9"/>
  <circle cx="20" cy="20" r="13" stroke="${color}" stroke-width="1.2"/>
  <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" stroke="#F7F2EC" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="16" cy="16" r="3" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>`;
const elBadge = (E, s = 72) => `<div style="width:${s}px;height:${s}px;flex:none;border-radius:50%;background:${C.bg};border:3.5px solid ${E.color};display:flex;align-items:center;justify-content:center">
  <span style="font-size:${Math.round(s * 0.5)}px;font-weight:700;color:${E.color}">${E.han}</span></div>`;

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

const vsCard = (E, text) => `
  <div style="flex:1;background:${E.color}0F;border:2px solid ${E.color}55;border-radius:22px;padding:36px 28px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:18px">
    ${elBadge(E, 80)}
    <div style="font-size:26px;font-weight:800;color:${E.color}">${E.name}</div>
    <div style="font-size:29px;font-weight:600;color:${C.ink};line-height:1.4;word-break:keep-all">"${text}"</div>
  </div>`;

const qSlide = (n, Q) => head() + page(n) + `
  <div style="position:absolute;top:96px;left:90px" class="label">상황 ${n - 2}</div>
  <div style="position:absolute;top:170px;left:90px;right:90px;font-size:52px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">${Q.q}</div>
  <div style="position:absolute;top:400px;left:90px;right:90px;display:flex;align-items:stretch;gap:20px">
    ${vsCard(A, Q.a)}${vsCard(B, Q.b)}
  </div>
  <div style="position:absolute;top:392px;left:50%;transform:translate(-50%,-6px);width:70px;height:70px;border-radius:50%;background:${C.ink};color:${C.bg};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;z-index:2">VS</div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:29px;font-weight:700;color:${C.gold};text-align:center">나는 <span style="color:${A.color}">${A.han}</span> or <span style="color:${B.color}">${B.han}</span>? 댓글에 한 글자!</div>
  <div style="position:absolute;bottom:70px;left:90px;display:flex;align-items:center;gap:12px">${bead(26)}<span style="font-size:24px;font-weight:600;color:${C.sub}">@susu.oheng</span></div>
` + foot;

// 01 커버
const s1 = head() + page(1) + `
  <div style="position:absolute;top:96px;left:90px;display:flex;align-items:center;gap:14px">
    ${bead(36)}<span style="font-size:27px;font-weight:800;letter-spacing:0.28em;color:${C.ink}">SUSU</span></div>
  <div style="position:absolute;top:330px;left:90px;right:90px">
    <div class="label" style="margin-bottom:28px">오행 밸런스게임 · ${TOPIC}</div>
    <div style="font-size:70px;font-weight:800;line-height:1.2;letter-spacing:-0.035em;word-break:keep-all">
      ${COVER_TITLE0}<br/><span style="color:${A.color}">${A.word} ${A.han}${A.emoji}</span> vs <span style="color:${B.color}">${B.word} ${B.han}${B.emoji}</span>?</div>
    <div style="margin-top:34px;font-size:33px;color:${C.sub};line-height:1.5;word-break:keep-all">${COVER_SUB}</div>
  </div>
  <div style="position:absolute;bottom:116px;left:90px;font-size:27px;font-weight:700;color:${C.gold}">댓글로 편 갈라봐요 👀</div>
` + foot;

// 02 규칙
const s2 = head() + page(2) + `
  <div style="position:absolute;top:96px;left:90px" class="label">게임 방법</div>
  <div style="position:absolute;top:220px;left:90px;right:90px;font-size:58px;font-weight:800;line-height:1.26;letter-spacing:-0.03em;word-break:keep-all">아주 간단해요</div>
  <div style="position:absolute;top:420px;left:90px;right:96px;display:flex;flex-direction:column;gap:30px">
    <div style="font-size:36px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">1. 다음 장부터 나오는 상황을 보고</div>
    <div style="font-size:36px;font-weight:600;color:${C.ink};line-height:1.5;word-break:keep-all">2. 내가 더 가까운 쪽을 골라서</div>
    <div style="font-size:36px;font-weight:700;color:${C.coral};line-height:1.5;word-break:keep-all">3. 댓글에 <span style="color:${A.color}">${A.han}</span> 아니면 <span style="color:${B.color}">${B.han}</span>, 한 글자만!</div>
  </div>
  <div style="position:absolute;bottom:150px;left:90px;right:100px;font-size:28px;color:${C.sub};line-height:1.6;word-break:keep-all">맞고 틀린 건 없어요. 그냥 내 ${KIND} 스타일 알아보는 재미예요.</div>
  ${handle()}
` + foot;

const s3 = qSlide(3, QUESTIONS[0]);
const s4 = qSlide(4, QUESTIONS[1]);
const s5 = qSlide(5, QUESTIONS[2]);

// 06 CTA
const s6 = head() + page(6) + `
  <div style="position:absolute;top:96px;left:90px" class="label">그래서, 너는?</div>
  <div style="position:absolute;top:210px;left:90px;right:90px;font-size:64px;font-weight:800;line-height:1.22;letter-spacing:-0.03em;word-break:keep-all">
    당신은 <span style="color:${A.color}">${A.han}</span>? <span style="color:${B.color}">${B.han}</span>?</div>
  <div style="position:absolute;top:400px;left:90px;right:96px;font-size:32px;color:${C.sub};line-height:1.6;word-break:keep-all">
    더 많이 고른 쪽이 내 ${KIND} 스타일이에요. 댓글로 알려주고, 같이 갈 친구도 태그해봐요.</div>
  <div style="position:absolute;top:640px;left:90px;right:90px;background:${C.ink};border-radius:28px;padding:44px 46px;color:${C.bg}">
    <div style="font-size:36px;font-weight:800;line-height:1.25">나의 사주가 궁금하다면?<br/><span style="color:${C.gold}">프로필 링크 확인!</span></div>
    <div style="margin-top:18px;font-size:29px;line-height:1.6;color:rgba(247,242,236,0.84);word-break:keep-all">${CTA_SUB}</div>
  </div>
  <div style="position:absolute;bottom:110px;left:90px;right:90px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">${bead(32)}<span style="font-size:29px;font-weight:700;color:${C.ink}">@susu.oheng</span></div>
    <div style="font-size:24px;color:${C.sub}">댓글 · 친구 태그</div></div>
` + foot;

const slides = [s1, s2, s3, s4, s5, s6];
slides.forEach((html, i) => {
  const name = `slide-0${i + 1}.html`;
  writeFileSync(join(slidesDir, name), html, 'utf8');
  console.log('  ✓', name, `(${(html.length / 1024).toFixed(0)} KB)`);
});
console.log('\n생성 완료:', slidesDir);
