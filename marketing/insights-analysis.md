# 3P Help Me Analytics Tracker

## Purpose

This file tracks how 3phelpme.com and 3P's social accounts (Facebook,
Instagram) are actually performing, so decisions about where to put marketing
effort are made from logged data instead of guessing. It covers two sources
in one place:

- **Website (Google Analytics / GA4)** — traffic, top pages, and the
  conversion signals that matter for 3P specifically: Operational Snapshot
  starts, contact form starts, and Business Fix page views.
- **Social (Facebook + Instagram)** — reach, engagement, and follower growth
  for whatever's been posted (including the carousel sets built from the
  Insights articles).

This is read-only performance analysis. The agent does not spend ad budget,
boost a post, change GA4/Search Console settings, or change account roles
from this workflow. Any of that requires separate explicit authorization.

Before making a recommendation about content or spend, check this file the
same way `insights-analysis.md` is checked in the Rebel Ranch repo before a
new draft batch — see `AGENTS.md` in this repo.

---

## Review cadence

- **Log a Snapshot daily.** This is a deliberately tighter cadence than the
  every-2-weeks pattern used in the Rebel Ranch repo, because the site's
  tracking (GA4, Search Console, social links) only just went live and the
  owner wants a daily read while traffic is still low and every session
  matters.
- **Daily logging is not the same as daily conclusions.** Record what
  happened each day. Do not write a Recommendation entry off a single day's
  numbers — traffic at this stage is low-volume and noisy; one good or bad
  day is not a pattern.
- A pattern is the same result repeating across **at least 5 consecutive
  daily snapshots**, or a clear multi-day trend (e.g. steady week-over-week
  growth/decline), not a single spike or dip.
- Once monthly sessions climb into a range where day-to-day noise stops
  dominating (a judgment call, not a fixed number — flag it when it feels
  true), revisit whether daily logging is still the right cadence or whether
  to drop back to weekly, the way RRM's social review runs every 2 weeks.

---

## Where the agent looks

**Google Analytics (GA4), via analytics.google.com:**
- Sessions and users for the day/period
- Top 5 pages by views
- Traffic source breakdown (organic search, direct, social, referral)
- Conversion signals: Operational Snapshot starts (`operational-snapshot.html`
  engagement), Contact form page views (`contact.html`), Business Fix detail
  page views
- New vs. returning visitors

**Google Search Console, via search.google.com/search-console:**
- Total clicks and impressions for the period
- Average position for the site's core terms
- Any new/lost indexed pages (useful right after the sitemap submission)

**Facebook Page Insights (facebook.com/3pHelpMe) and Instagram Insights
(instagram.com/3p_helpme), via Meta Business Suite if linked, native Insights
otherwise:**
- Reach and impressions per post
- Engagement (reactions, comments, shares, saves) and engagement rate
- Follower count, start and end of period
- Which carousel (see the Carousel Content Handoff) drove the most saves/shares

If a metric or platform can't be accessed (no login, insights not visible,
GA4/Search Console not yet showing data), record that limitation in the
snapshot instead of estimating a number.

---

## Recommendation workflow

When a pattern holds across 5+ consecutive daily snapshots (or a clear
multi-day trend), the agent adds a Recommendation entry instead of changing
anything directly — e.g. adjusting which carousel to post next, flagging a
page with high traffic but no conversions, or noting a traffic source worth
leaning into.

Status formatting rule: keep the status label and its single current value on
one line. Allowed values are `Needs review`, `Approved`, `Rejected`, and
`Applied`. This exact shape is what lets Command Center
(`C:\Users\rebel\Command Center\`) auto-detect and classify entries in this
file the same way it already does for the Rebel Ranch tracker files — see
`priority-rules.md` in that folder.

---

## Snapshot 1

Date: 2026-08-18

GA4 — sessions: 0
GA4 — users: 0 (0 new)
GA4 — top pages (up to 5): no data
GA4 — traffic source breakdown: no data
GA4 — conversion signals (Snapshot starts / contact form views / Business Fix views): Operational Snapshot: 0; Contact form: 0; Business Fixes catalog: 0

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

---

# Daily Snapshot Template

## Snapshot #

Date:

GA4 — sessions:
GA4 — users:
GA4 — top pages (up to 5):
GA4 — traffic source breakdown:
GA4 — conversion signals (Snapshot starts / contact form views / Business Fix views):

Search Console — clicks:
Search Console — impressions:
Search Console — notable position changes:

Facebook — reach:
Facebook — engagement:
Facebook — follower count:

Instagram — reach:
Instagram — engagement:
Instagram — follower count:

Notable events this day (e.g. carousel posted, article shared, press mention):

Access limitations (if any metric/platform couldn't be checked):

---

# Recommendation Template

## Recommendation #

Date:

Based on snapshots:
List the Snapshot # entries this recommendation is drawn from (must be 5+
consecutive days, or a clear multi-day trend).

Pattern observed:

Source(s) involved (GA4 / Search Console / Facebook / Instagram):

Proposed action:
State the exact change — e.g. "Post Carousel 5 next, since Carousel 1 and 2
are driving the most Snapshot starts" or "Add an Open Graph image variant for
[page], since it has high impressions but a low click-through rate."

Confidence:
Building (fewer than 5 supporting snapshots, watching for more) / Confirmed
(5+ consecutive days or a clear trend).

Status: Needs review

---

## Notes

- No snapshots logged yet. The first entry gets created the next time the
  agent (or the owner) checks GA4/Search Console/Meta Insights.
- GA4 is `G-T33MLE0MJM` under the dedicated `3pconsultingfirm@gmail.com`
  account (property ID `550682754`) — moved here 2026-08-19 after an earlier
  Measurement ID turned out to be homed under the RRM Google account by
  mistake. GA4 pulls are automated via `scripts/pull_ga4.py`. Search Console
  was auto-verified as Owner under the same account the same day. Expect
  very little data for the first few days since tracking only just moved —
  log what exists rather than waiting for a "full" dataset.
- This file is 3P's equivalent of the Rebel Ranch repo's
  `marketing/social-media/insights-analysis.md`, adapted to add the website
  (GA4/Search Console) side since 3P didn't have that tracking until this
  week. See that file for the pattern this one is built on.
- **Meta (Facebook/Instagram) automation is blocked as of 2026-08-19**,
  pending phone verification on the Meta Developer app — the owner's only
  available number is on Tello (an MVNO), which isn't delivering Meta's SMS
  verification code (suspected A2P delivery issue, not a typo/wrong-number
  problem — normal texts work fine on the same line). Owner is following up
  with Tello support. Social fields stay manual until this clears; GA4
  automation is unaffected and already running nightly.
