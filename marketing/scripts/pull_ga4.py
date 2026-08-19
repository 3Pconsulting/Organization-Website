"""
Pulls yesterday's GA4 numbers for 3phelpme.com and appends a Snapshot entry
to marketing/insights-analysis.md.

Setup (one-time):
  1. Copy config.local.json.example to config.local.json in this same folder.
  2. Fill in your real GA4 Property ID (Admin > Property Settings > Property ID).
  3. Confirm credentials_path points at the downloaded service account JSON key.

Run:
  python pull_ga4.py

Uses "yesterday" rather than "today" because GA4 same-day data is often
still processing and incomplete.
"""

import json
import re
from datetime import date, timedelta
from pathlib import Path

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    OrderBy,
    RunReportRequest,
)
from google.oauth2 import service_account

SCRIPT_DIR = Path(__file__).parent
CONFIG_PATH = SCRIPT_DIR / "config.local.json"
INSIGHTS_PATH = SCRIPT_DIR.parent / "insights-analysis.md"

CONVERSION_PAGES = {
    "Operational Snapshot": "/operational-snapshot.html",
    "Contact form": "/contact.html",
    "Business Fixes catalog": "/business-fixes.html",
}


def load_config():
    if not CONFIG_PATH.exists():
        raise SystemExit(
            f"Missing {CONFIG_PATH}. Copy config.local.json.example to "
            "config.local.json and fill in your real values first."
        )
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


def get_client(credentials_path):
    creds = service_account.Credentials.from_service_account_file(credentials_path)
    return BetaAnalyticsDataClient(credentials=creds)


def run_report(client, property_id, dimensions, metrics, order_by=None, limit=None):
    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date="yesterday", end_date="yesterday")],
        order_bys=order_by or [],
        limit=limit,
    )
    return client.run_report(request)


def totals(client, property_id):
    resp = run_report(client, property_id, [], ["sessions", "totalUsers", "newUsers"])
    if not resp.rows:
        return {"sessions": 0, "totalUsers": 0, "newUsers": 0}
    row = resp.rows[0]
    return {
        "sessions": row.metric_values[0].value,
        "totalUsers": row.metric_values[1].value,
        "newUsers": row.metric_values[2].value,
    }


def top_pages(client, property_id, limit=5):
    resp = run_report(
        client,
        property_id,
        ["pagePath"],
        ["screenPageViews"],
        order_by=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="screenPageViews"), desc=True)],
        limit=limit,
    )
    return [(r.dimension_values[0].value, r.metric_values[0].value) for r in resp.rows]


def traffic_sources(client, property_id):
    resp = run_report(
        client,
        property_id,
        ["sessionDefaultChannelGroup"],
        ["sessions"],
        order_by=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="sessions"), desc=True)],
    )
    return [(r.dimension_values[0].value, r.metric_values[0].value) for r in resp.rows]


def conversion_signals(client, property_id):
    resp = run_report(client, property_id, ["pagePath"], ["screenPageViews"])
    views_by_path = {r.dimension_values[0].value: r.metric_values[0].value for r in resp.rows}
    return {
        label: views_by_path.get(path, "0")
        for label, path in CONVERSION_PAGES.items()
    }


def next_snapshot_number():
    if not INSIGHTS_PATH.exists():
        return 1
    text = INSIGHTS_PATH.read_text(encoding="utf-8")
    numbers = [int(n) for n in re.findall(r"^## Snapshot (\d+)", text, re.MULTILINE)]
    return max(numbers, default=0) + 1


def format_snapshot(number, report_date, t, pages, sources, conversions):
    pages_str = "; ".join(f"{p} ({v} views)" for p, v in pages) or "no data"
    sources_str = "; ".join(f"{s}: {v}" for s, v in sources) or "no data"
    conv_str = "; ".join(f"{k}: {v}" for k, v in conversions.items())

    return f"""
## Snapshot {number}

Date: {report_date.isoformat()}

GA4 — sessions: {t['sessions']}
GA4 — users: {t['totalUsers']} ({t['newUsers']} new)
GA4 — top pages (up to 5): {pages_str}
GA4 — traffic source breakdown: {sources_str}
GA4 — conversion signals (Snapshot starts / contact form views / Business Fix views): {conv_str}

Search Console — clicks: not pulled yet (manual)
Search Console — impressions: not pulled yet (manual)
Search Console — notable position changes: not pulled yet (manual)

Facebook — reach: not pulled yet (manual)
Facebook — engagement: not pulled yet (manual)
Facebook — follower count: not pulled yet (manual)

Instagram — reach: not pulled yet (manual)
Instagram — engagement: not pulled yet (manual)
Instagram — follower count: not pulled yet (manual)

Notable events this day: (fill in if relevant)

Access limitations (if any metric/platform couldn't be checked): GA4 pulled automatically; Search Console and social still manual as of this snapshot.
"""


def append_snapshot(snapshot_text):
    if not INSIGHTS_PATH.exists():
        raise SystemExit(f"Can't find {INSIGHTS_PATH} — is the repo path right?")
    marker = "# Daily Snapshot Template"
    text = INSIGHTS_PATH.read_text(encoding="utf-8")
    idx = text.find(marker)
    if idx == -1:
        # Fall back to appending at the end if the template marker moved.
        INSIGHTS_PATH.write_text(text + "\n" + snapshot_text, encoding="utf-8")
        return
    text = text[:idx] + snapshot_text.strip("\n") + "\n\n---\n\n" + text[idx:]
    INSIGHTS_PATH.write_text(text, encoding="utf-8")


def main():
    config = load_config()
    client = get_client(config["credentials_path"])
    property_id = config["property_id"]

    t = totals(client, property_id)
    pages = top_pages(client, property_id)
    sources = traffic_sources(client, property_id)
    conversions = conversion_signals(client, property_id)

    number = next_snapshot_number()
    report_date = date.today() - timedelta(days=1)
    snapshot = format_snapshot(number, report_date, t, pages, sources, conversions)

    append_snapshot(snapshot)
    print(f"Logged Snapshot {number} for {report_date.isoformat()} into {INSIGHTS_PATH}")


if __name__ == "__main__":
    main()
