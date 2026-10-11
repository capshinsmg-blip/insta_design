#!/usr/bin/env python3
"""@susu.oheng 본인 계정 발행 게시물 목록·날짜 수집 (Apify Instagram Scraper).
사용: python fetch_own_posts.py [limit]              -> 새로 스크랩
      python fetch_own_posts.py --run <RUN_ID>       -> 기존 run 데이터셋만 가져오기(재스크랩 X)"""
import os, sys, io, json
from pathlib import Path

# Windows 콘솔 이모지 안전 출력
try:
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass

try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).resolve().parent.parent / '.env')
except ImportError:
    pass
from apify_client import ApifyClient

USERNAME = "susu.oheng"
OUT = Path(__file__).resolve().parent / '2026-run' / 'own_posts.json'
token = os.environ.get('APIFY_TOKEN')
if not token:
    print('ERROR: APIFY_TOKEN not set'); sys.exit(1)
client = ApifyClient(token)

if len(sys.argv) > 2 and sys.argv[1] == '--run':
    run_id = sys.argv[2]
    print(f"fetching existing run {run_id} dataset ...")
else:
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else 80
    run_input = {
        "directUrls": [f"https://www.instagram.com/{USERNAME}/"],
        "resultsType": "posts", "resultsLimit": limit, "addParentData": False,
    }
    print(f"scraping @{USERNAME} posts (limit {limit}) ...")
    run = client.actor("apify/instagram-scraper").call(run_input=run_input)
    try:
        run_id = run["id"]
    except (TypeError, KeyError):
        run_id = getattr(run, "id", None)

items = list(client.run(run_id).dataset().iterate_items())
print("items:", len(items))

def ts(it):
    return it.get("timestamp") or it.get("takenAt") or ""
items_sorted = sorted(items, key=ts)

# 저장 먼저 (프린트 실패해도 데이터 보존)
OUT.parent.mkdir(parents=True, exist_ok=True)
json.dump(items_sorted, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=2, default=str)
print("saved:", OUT)

print("\n===== published (oldest first) =====")
for i, it in enumerate(items_sorted, 1):
    t = str(ts(it))[:16]
    typ = it.get("type") or it.get("productType") or "?"
    n_child = len(it.get("childPosts") or []) or it.get("imagesCount") or 1
    cap = (it.get("caption") or "").replace("\n", " ")[:70]
    url = it.get("url") or it.get("shortCode") or ""
    line = f"{i:>2}. {t}  [{typ} x{n_child}]  {cap}  | {url}"
    print(line.encode('utf-8', 'replace').decode('utf-8'))
