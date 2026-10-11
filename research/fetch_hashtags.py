#!/usr/bin/env python3
"""니치 해시태그로 인스타 상위 게시물 수집 (Apify Instagram Scraper).
계정을 몰라도 해시태그 탐색으로 고참여 콘텐츠·계정을 자동 발굴한다."""
import os, sys, json, argparse
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import quote

try:
    from dotenv import load_dotenv
    # .env는 프로젝트 루트에 있음
    load_dotenv(Path(__file__).resolve().parent.parent / '.env')
except ImportError:
    pass
from apify_client import ApifyClient

HASHTAGS = ['사주', '사주팔자', '신점', '타로', '운세']  # 니치 코어

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--tags', nargs='+', default=HASHTAGS)
    ap.add_argument('--limit', type=int, default=40, help='태그당 최대 게시물')
    ap.add_argument('--days', type=int, default=30)
    ap.add_argument('--output', '-o', default='research/2026-run/raw.json')
    a = ap.parse_args()

    token = os.environ.get('APIFY_TOKEN')
    if not token:
        print('ERROR: APIFY_TOKEN not set'); sys.exit(1)
    client = ApifyClient(token)

    urls = [f"https://www.instagram.com/explore/tags/{quote(t)}/" for t in a.tags]
    start_date = (datetime.now() - timedelta(days=a.days)).strftime('%Y-%m-%d')
    print(f"태그: {', '.join(a.tags)}")
    print(f"태그당 {a.limit}개, {start_date} 이후 게시물")

    run_input = {
        "directUrls": urls,
        "resultsType": "posts",
        "resultsLimit": a.limit,
        "onlyPostsNewerThan": start_date,
        "addParentData": False,
    }
    run = client.actor("apify/instagram-scraper").call(run_input=run_input)
    items = list(client.dataset(run["defaultDatasetId"]).iterate_items())
    print(f"수집 완료: {len(items)}개")

    Path(a.output).parent.mkdir(parents=True, exist_ok=True)
    with open(a.output, 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False, indent=2, default=str)
    print(f"저장: {a.output}")

if __name__ == '__main__':
    main()
