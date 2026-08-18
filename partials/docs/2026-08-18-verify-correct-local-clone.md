# Verify You're Working on the Correct Local Clone

**Date:** August 18, 2026
**Repository:** 3Pconsulting/Organization-Website
**Website:** 3phelpme.com

## The problem

This repo has more than one local clone on the owner's machine, and they are not interchangeable:

- **Correct / active clone:** `C:\Users\rebel\Gitbuh Repos\3p Help Me\Organization-Website\`
  Remote is HTTPS (`https://github.com/3Pconsulting/Organization-Website.git`) and pushes work from this machine.
- **Stale / abandoned clone:** `F:\Rebel Ranch Ministries\3P\Claude Mapping and Linking Services\repo\`
  Remote is SSH (`git@github.com:3Pconsulting/Organization-Website.git`) and this machine has no working SSH key for it — pushes fail outright. As of 2026-08-18 it was 20 commits behind `origin/main` (missing the legal pages, the shared header/footer partials, and most of the newer Insights articles).

An agent that edits files under the F:\ path can do real, wasted work: it looks like a normal git repo, changes appear to apply cleanly, but the result can never be pushed, and it's built on an outdated snapshot of the site (e.g. editing per-page headers that were later unified into `partials/header.html`).

## What to do before starting any work here

1. **Confirm you are in `C:\Users\rebel\Gitbuh Repos\3p Help Me\Organization-Website\`**, not the F:\ path or any other clone. If you're unsure which folder you're in, check `git remote -v` — it should show the `https://github.com/...` URL, not `git@github.com:...`.
2. **Confirm you are current before editing anything:**
   ```
   git fetch origin main
   git log --oneline main..origin/main
   ```
   If that shows any commits, pull/rebase (or ask the owner how to proceed) before making changes — don't edit against a stale snapshot.
3. If push fails with an SSH `Permission denied (publickey)` error, that's a sign you're in the wrong clone (the F:\ one), not a credentials problem to work around.

## Why this matters

On 2026-08-18 an agent built a full round of SEO/analytics changes (GA4, Search Console verification, Open Graph tags, sitemap.xml) against the F:\ clone, committed locally, and only discovered at push time that the clone was 20 commits stale and missing entire pages (Privacy Policy, Terms of Service, Disclaimer, several Insights articles, the shared header/footer partial system). The work had to be redone from scratch against the correct clone. Checking `git remote -v` and `git fetch` first would have caught this before any time was spent.
