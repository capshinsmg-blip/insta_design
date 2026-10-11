#!/usr/bin/env python3
"""광범위 트렌드 수집 — 사주 니치에 국한하지 않고 20-30 여성이 반응하는
다양한 인기 카테고리(심리테스트·밸런스게임·MBTI·감성·자기계발·연애·별자리 등)의
고참여 게시물을 긁어와, 잘 되는 '포맷·훅'을 사주에 접목하기 위한 소재로 삼는다."""
import os, sys, io, json
from pathlib import Path
from urllib.parse import quote

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

# 인기·바이럴 포맷 위주 다양한 카테고리 (사주 인접~비인접 골고루)
TAGS = [
    "심리테스트", "밸런스게임", "mbti", "성격유형",   # 인터랙티브/성격
    "감성글귀", "위로", "공감", "오늘의명언",           # 감성/저장
    "연애심리", "재회", "짝사랑",                       # 연애
    "자기계발", "갓생", "습관",                         # 자기계발
    "별자리", "타로",                                  # 인접 신비
]
LIMIT = int(sys.argv[1]) if len(sys.argv) > 1 else 30
DAYS = int(sys.argv[2]) if len(sys.argv) > 2 else 45
OUT = Path(__file__).resolve().parent / '2026-run' / 'broad_raw.json'

token = os.environ.get('APIFY_TOKEN')
if not token:
    print('ERROR: APIFY_TOKEN not set'); sys.exit(1)
client = ApifyClient(token)

urls = [f"https://www.instagram.com/explore/tags/{quote(t)}/" for t in TAGS]
run_input = {
    "directUrls": urls,
    "resultsType": "posts",
    "resultsLimit": LIMIT,     # 태그당
    "addParentData": False,
}
print(f"태그 {len(TAGS)}개 × {LIMIT} (최근 {DAYS}일 우선) 스크랩...")
print("tags:", ", ".join(TAGS))
run = client.actor("apify/instagram-scraper").call(run_input=run_input)
try:
    run_id = run["id"]
except (TypeError, KeyError):
    run_id = getattr(run, "id", None)
items = list(client.run(run_id).dataset().iterate_items())
print("items:", len(items))

OUT.parent.mkdir(parents=True, exist_ok=True)
json.dump(items, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=2, default=str)
print("saved:", OUT)
