#!/usr/bin/env python3
"""수집 게시물 분석: 참여 상위·포맷·해시태그·계정·훅(첫 줄) 패턴 추출."""
import json, re, sys
from collections import Counter
from pathlib import Path

raw = json.load(open(sys.argv[1] if len(sys.argv) > 1 else 'research/2026-run/raw.json', encoding='utf-8'))

def hook_of(cap):
    if not cap: return ''
    for line in cap.split('\n'):
        t = line.strip().strip('⠀').strip()
        # 이모지/공백만 있는 줄 스킵
        if t and re.search(r'[가-힣A-Za-z0-9]', t):
            return t[:70]
    return cap.strip()[:70]

posts = []
for p in raw:
    likes = p.get('likesCount', 0) or 0
    comments = p.get('commentsCount', 0) or 0
    has_likes = likes > 0
    # 좋아요 숨김(-1) 잦음 → 댓글 가중치↑ 로 참여 점수 보정
    score = (likes if has_likes else 0) + 8 * comments
    posts.append({
        'user': p.get('ownerUsername', ''),
        'name': p.get('ownerFullName', ''),
        'type': p.get('type', ''),
        'likes': likes, 'comments': comments, 'has_likes': has_likes,
        'score': score,
        'hook': hook_of(p.get('caption') or ''),
        'caplen': len(p.get('caption') or ''),
        'hashtags': [h for h in (p.get('hashtags') or [])],
        'url': p.get('url', ''),
        'ts': (p.get('timestamp') or '')[:10],
    })

n = len(posts)
print(f"=== 총 {n}개 ===")
print("포맷:", dict(Counter(p['type'] for p in posts)))
print("좋아요 공개된 게시물:", sum(1 for p in posts if p['has_likes']), "/", n)
avg_caplen = round(sum(p['caplen'] for p in posts) / n)
print("평균 캡션 길이:", avg_caplen, "자")

# 상위 참여 (score 기준)
top = sorted(posts, key=lambda x: x['score'], reverse=True)[:20]
print("\n=== 참여 상위 20 (score = 좋아요 + 8*댓글) ===")
for i, p in enumerate(top, 1):
    print(f"{i:2d}. @{p['user']} | ♥{p['likes'] if p['has_likes'] else '숨김'} 💬{p['comments']} | {p['type']} | \"{p['hook']}\"")

# 계정 랭킹 (총 score)
acc = Counter()
acc_posts = Counter()
for p in posts:
    acc[p['user']] += p['score']; acc_posts[p['user']] += 1
print("\n=== 계정 랭킹 (총 참여 score) ===")
for u, s in acc.most_common(12):
    print(f"@{u} | score {s} | 게시물 {acc_posts[u]}개")

# 해시태그 빈도
tagc = Counter()
for p in posts:
    for h in p['hashtags']:
        tagc[h] += 1
print("\n=== 자주 쓰인 해시태그 Top 25 ===")
print(', '.join(f"#{t}({c})" for t, c in tagc.most_common(25)))

# 상위 게시물 훅 모음 (패턴 분석용)
print("\n=== 상위 30 훅(첫 줄) 모음 ===")
for p in sorted(posts, key=lambda x: x['score'], reverse=True)[:30]:
    print(f"- \"{p['hook']}\"  (@{p['user']}, 💬{p['comments']})")

# JSON 요약 저장
summary = {
    'total': n,
    'format': dict(Counter(p['type'] for p in posts)),
    'likes_public': sum(1 for p in posts if p['has_likes']),
    'avg_caption_len': avg_caplen,
    'top_posts': [{'user': p['user'], 'type': p['type'], 'likes': p['likes'], 'comments': p['comments'], 'hook': p['hook'], 'url': p['url']} for p in top],
    'top_accounts': [{'user': u, 'score': s, 'posts': acc_posts[u]} for u, s in acc.most_common(12)],
    'top_hashtags': [{'tag': t, 'count': c} for t, c in tagc.most_common(30)],
    'top_hooks': [p['hook'] for p in sorted(posts, key=lambda x: x['score'], reverse=True)[:30]],
}
out = 'research/2026-run/analysis.json'
json.dump(summary, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
print("\n저장:", out)
