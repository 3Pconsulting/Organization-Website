# Working in this repo

## Verify you're in the right local folder before doing anything

There are **two local clones** of this repo on this machine. Only one is current:

- **`C:\Users\rebel\Gitbuh Repos\3p Help Me\Organization-Website\`** — the correct, active clone. Confirmed 2026-08-18 by matching a pushed commit's blob SHA against GitHub. Use this one.
- `F:\Rebel Ranch Ministries\3P\Claude Mapping and Linking Services\repo\` — a second, stale clone. It was 20 commits behind `origin/main` as of 2026-08-18 (missing Privacy Policy, Terms of Service, Disclaimer, several Insights articles, marketing graphics, and the shared header/footer partials refactor). An agent working from this path built a batch of SEO/analytics changes against outdated files before the mismatch was caught — none of that work was lost, but it had to be redone against the correct clone.

**Before editing anything here:**
1. Confirm your working directory is `C:\Users\rebel\Gitbuh Repos\3p Help Me\Organization-Website\`, not the F:\ path.
2. Run `git fetch origin main` and check `git log main..origin/main` — if it lists commits, your local copy is behind. Pull (or otherwise reconcile) before editing, don't build on stale files.
3. If you're not sure which clone is current, compare a file's blob SHA (`git rev-parse HEAD:index.html`) against GitHub's via `gh api repos/3Pconsulting/Organization-Website/contents/index.html --jq .sha` — matching SHAs confirm you're current.

## Remote / push notes

- Remote is configured over SSH (`git@github.com:3Pconsulting/Organization-Website.git`) but no SSH key is set up on this machine for that remote as of 2026-08-18. Push via HTTPS using the `gh` CLI's stored credentials instead:
  ```
  git -c credential.helper="!gh auth git-credential" push https://github.com/3Pconsulting/Organization-Website.git main
  ```
- Site is served via GitHub Pages behind a Fastly CDN with a ~10 minute cache (`Cache-Control: max-age=600` on `3phelpme.com`). A push can take a few minutes to show up on the live domain even though it's already on GitHub — check `raw.githubusercontent.com` or the GitHub Contents API (not the live domain) if you need to confirm a change landed immediately.

## Daily analytics check

Google Analytics (GA4) and social media (Facebook/Instagram) get checked
**daily** and logged in `marketing/insights-analysis.md` — read that file
before proposing marketing or content changes, and add a new Snapshot entry
after checking GA4/Search Console/Meta Insights for the day. Don't draw a
conclusion from a single day's numbers; the file has the exact rule for when
a pattern is real. This feeds `C:\Users\rebel\Command Center\` the same way
the equivalent Rebel Ranch tracker file does.

## AI attribution

Commits made by an AI agent should say so — include a `Co-Authored-By:` trailer naming the agent/session.
