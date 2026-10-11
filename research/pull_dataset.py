#!/usr/bin/env python3
"""이미 실행된 Apify run의 데이터셋을 가져와 저장(재실행 없이)."""
import os, json, sys
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parent.parent / '.env')
from apify_client import ApifyClient

client = ApifyClient(os.environ['APIFY_TOKEN'])
run_id = sys.argv[1] if len(sys.argv) > 1 else 'KicnYZkP4389ysLbq'
out = sys.argv[2] if len(sys.argv) > 2 else 'research/2026-run/raw.json'

# RunClient.dataset() → 해당 run의 기본 데이터셋 클라이언트 (id 불필요)
items = list(client.run(run_id).dataset().iterate_items())
print('items:', len(items))
Path(out).parent.mkdir(parents=True, exist_ok=True)
json.dump(items, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=2, default=str)
print('saved:', out)
