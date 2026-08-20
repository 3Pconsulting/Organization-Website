# 3P Help Me — Brand & Design Reference

One-stop reference for anyone (or any AI) creating graphics, social posts, ads, or
site content for 3P Help Me. Point a design agent at this file instead of
re-explaining colors, fonts, logo usage, and voice every time.

## What 3P actually does

3P Help Me is a **business optimization** consultancy: systems, analysis,
operations, management, process design — finding where a small business is
losing time, money, or control, and building the fix. The motto is
**"Work Smart Not Hard."** The name comes from **People · Process · Product**
— every fix looks at all three, not just software or just people.

Positioning in one line: certified Lean Six Sigma expertise, delivered as
fixed-price, fixed-scope engagements — not open-ended hourly consulting.

Full voice/copy rules (pain-first framing, no jargon, pricing rules, no
county-exclusive language) live in the project's `3p-site-handoff-and-voice`
notes — check there before writing new copy. This file is about the
*visual* system.

## Logo

Files (in `assets/logo/`):

| File | Use |
|---|---|
| `3P_HelpMe_Logo.png` | Full horizontal lockup (mark + "3P Help Me" + tagline). Primary logo, used in the site header and most graphics. Designed for **dark backgrounds** — the mark and tagline render in white/gold. |
| `3P_HelpMe_Circle.png` | Circular badge version of the mark alone. Used as favicon and as a small corner/watermark badge on social graphics. |
| `3P_circular_logo.svg` | Vector version of the circular mark. |
| `3P_Rectangular_Logo.svg` | Vector version of the horizontal lockup. |

The mark itself is an abstract **atomic/orbital icon** — a nucleus with
elliptical orbit rings — a deliberate visual echo of "systems," "moving
parts," and "things connected into one working whole." Reuse that idea
(orbits, nodes, connected paths, gear/network diagrams) as a recurring visual
motif in new graphics rather than introducing a different icon language.

Never recolor, distort, or redraw the logo. Use the existing files as-is.

## Color palette

Exact hex values pulled from the live site CSS — use these, don't
eyeball new ones.

| Role | Hex | Notes |
|---|---|---|
| Background (deepest) | `#08111F` | Page/graphic background, darkest navy |
| Background (card/raised) | `#0D1D30` | Cards, panels sitting on the deep background |
| Background (raised, alt) | `#132A42` | Alternate section background for visual rhythm |
| Gold (primary accent) | `#D4A017` | Borders, dividers, primary CTA buttons, icon strokes |
| Gold (bright/highlight) | `#F7D76A` | Hover states, headline emphasis words, brightest accent text |
| Ink (primary text) | `#E7ECF2` | Body text and headlines on navy |
| Ink (soft) | `rgba(231,236,242,0.68)` | Secondary/supporting text |
| Ink (faint) | `rgba(231,236,242,0.42)` | Tertiary text, footnotes, timestamps |
| Line (gold hairline) | `rgba(212,160,23,0.26)` | Thin borders, dividers between sections |
| Line (soft/neutral) | `rgba(231,236,242,0.10)` | Subtle internal dividers inside cards |

This is a **dark navy + gold** system, deliberately editorial/authoritative
— not a bright, casual startup palette. Keep backgrounds dark. Gold is an
accent color, not a fill color — use it for borders, small badges, icon
line-work, and emphasis words, not large blocks.

## Typography

Google Fonts import (already used site-wide):

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap
```

| Font | Role |
|---|---|
| **Source Serif 4** | Headlines (h1/h2/h3). Gives the premium/editorial feel — this is not a sans-serif-only brand. |
| **Source Sans 3** | Body copy, paragraphs, buttons. |
| **IBM Plex Mono** | Eyebrow labels, category tags, small uppercase/tracked text (e.g. "PEOPLE · PROCESS · PRODUCT", "FREE OPERATIONAL ASSESSMENT"). Always uppercase with wide letter-spacing when used this way. |

## Recurring layout patterns

- **Eyebrow labels**: a short horizontal gold dash (`—`) followed by a small
  uppercase, wide-tracked IBM Plex Mono label, e.g. `— START HERE`. Used
  above nearly every headline site-wide.
- **Hairline dividers**: thin 1px gold-tinted lines (`rgba(212,160,23,0.26)`)
  under headlines and between sections — never a heavy rule.
- **Corner-cut badges**: small bordered boxes with clipped corners (like a
  ticket/tag shape) used for callouts and CTA chips — see the "FREE
  OPERATIONAL ASSESSMENT" badge in the reference graphic below.
- **Line icons only**: simple single-weight gold or white outline icons
  (person, chat bubble, gear, org-chart/network glyph, dollar sign). No
  filled/solid icons, no multi-color icon sets, no cartoon style.
- Generous negative space. Don't crowd the navy background — the dark space
  is part of the design, not empty room to fill.

## Imagery style

Reference example: `social-media/images/free-operational-assessment.png`
(open it directly when briefing a design tool — it's the clearest single
example of the system in practice).

- Deep navy background, gold hairline border framing the whole graphic.
- One grounding "real object" prop per graphic when possible (a clipboard,
  a document, a checklist) rendered somewhat photographically/dimensionally
  against the flat navy field — it keeps abstract "systems/process" concepts
  from feeling too flat or corporate-clipart.
- Gold line icons paired with short bold labels for list-style content.
- Logo mark (white/gold line version) in the top-left corner of nearly every
  graphic; circular badge version of the logo in a bottom corner as a
  secondary mark on social posts.
- Avoid: stock-photo people smiling at laptops, generic blue-and-white
  "corporate" clip art, bright/saturated colors, flat filled icon sets.
- When conceptual imagery is needed (not text-driven), lean on the "systems"
  visual language already established by the logo: orbits, connected nodes,
  gears, flowcharts/org-chart shapes, interlocking pieces — this matches
  what 3P actually does (systems, analysis, operations, streamlining) and
  keeps every new graphic feeling like it belongs to the same brand.

## Ready-to-paste prompt block

For briefing an AI image tool (Canva Magic Media, Midjourney, DALL-E, etc.)
without re-typing all of the above every time:

```
Brand: 3P Help Me, a business optimization consultancy (People · Process ·
Product). Visual style: deep navy background (#08111F to #132A42 range),
gold accent color (#D4A017, brighter highlight #F7D76A), editorial/premium
consulting tone — not bright or casual. Simple single-weight gold or white
line icons only, no filled icons, no stock-photo people. Thin gold hairline
borders and dividers. Serif display type for headlines (Source Serif 4
equivalent), clean sans body text. Visual motif: connected nodes, orbits,
gears, org-chart/network shapes — echoing systems and streamlined process,
since that's the actual service. Logo is an abstract atomic/orbital mark;
don't invent a different icon language for the brand.
```

## Where to find existing examples

- `social-media/index.html` — library of already-built social graphics with
  captions and hashtags, useful as a bank of "what good looks like" examples.
- `assets/images/marketing-graphics/` — graphics used directly on the site.
- Any page's `<style>` block (e.g. `on-demand-operations-support.html`,
  `systems-automation-integration.html`) — the CSS custom properties at the
  top of each file are the single source of truth for exact color values if
  this doc and the code ever drift.
