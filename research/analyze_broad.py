#!/usr/bin/env python3
"""broad_raw.json 분석 — 참여도 랭킹, 인기 계정, 댓글유도(참여형) 아웃라이어 추출.
워크플로우에 넣을 컴팩트 다이제스트(digest.md/json) 생성."""
import sys, io, json, re
from pathlib import Path
from collections import defaultdict

try:
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass

base = Path(__file__).resolve().parent / '2026-run'
raw = json.load(open(base / 'broad_raw.json', encoding='utf-8'))

def num(x):
    try: return int(x or 0)
    except Exception: return 0

posts = []
seen = set()
for it in raw:
    url = it.get('url') or it.get('shortCode')
    cap = it.get('caption')
    if not url or not cap or url in seen:
        continue
    seen.add(url)
    likes = num(it.get('likesCount'))
    comments = num(it.get('commentsCount'))
    views = num(it.get('videoViewCount') or it.get('videoPlayCount'))
    posts.append({
        'url': url,
        'acct': it.get('ownerUsername') or '?',
        'likes': likes, 'comments': comments, 'views': views,
        'type': it.get('type') or it.get('productType') or '?',
        'ts': str(it.get('timestamp') or '')[:10],
        'cap': re.sub(r'\s+', ' ', cap).strip(),
        'eng': likes + comments,
        'cratio': (comments / likes) if likes else 0,
    })

print(f"고유 게시물: {len(posts)}")

# 1) 참여도 상위
top_eng = sorted(posts, key=lambda p: p['eng'], reverse=True)[:45]

# 2) 인기 계정 (총 참여도 합)
acct_eng = defaultdict(lambda: {'eng': 0, 'n': 0})
for p in posts:
    acct_eng[p['acct']]['eng'] += p['eng']
    acct_eng[p['acct']]['n'] += 1
top_acct = sorted(acct_eng.items(), key=lambda kv: kv[1]['eng'], reverse=True)[:20]

# 3) 댓글유도(참여형) 아웃라이어 — 댓글비율 높은 것 (좋아요 200+ 필터)
top_cratio = sorted([p for p in posts if p['likes'] >= 200],
                    key=lambda p: p['cratio'], reverse=True)[:20]

def line(p, i):
    return f"{i:>2}. ❤{p['likes']:>6} 💬{p['comments']:>5} [{p['type']}] @{p['acct']} | {p['cap'][:110]}"

out = []
out.append("# 광범위 트렌드 다이제스트 (사주 접목용)\n")
out.append(f"수집: 16개 카테고리(심리테스트·밸런스게임·mbti·성격유형·감성·위로·공감·명언·연애심리·재회·짝사랑·자기계발·갓생·습관·별자리·타로), 고유 {len(posts)}건\n")

out.append("\n## A. 참여도 TOP 45 (좋아요+댓글)\n")
for i, p in enumerate(top_eng, 1):
    out.append(line(p, i))

out.append("\n\n## B. 인기 계정 TOP 20 (총 참여도)\n")
for i, (a, d) in enumerate(top_acct, 1):
    out.append(f"{i:>2}. @{a}  참여합계 {d['eng']:>8}  게시물 {d['n']}")

out.append("\n\n## C. 댓글유도(참여형) 아웃라이어 TOP 20 (댓글비율 높음)\n")
for i, p in enumerate(top_cratio, 1):
    out.append(f"{i:>2}. 💬비율{p['cratio']*100:>5.1f}% ❤{p['likes']} 💬{p['comments']} @{p['acct']} | {p['cap'][:110]}")

digest = "\n".join(out)
(base / 'digest.md').write_text(digest, encoding='utf-8')
print("saved:", base / 'digest.md')
print("\n" + digest[:3000])
