# 1. Stay on Astro; add React only when a feature demands it

Date: 2026-08-17

## Status

Accepted

## Context

The portfolio is being rebuilt as a professionally-focused consulting site with a
deep-linkable Games section. The owner is a professional React developer and
raised converting the app to React (e.g. Next.js) if it would meaningfully improve
the result.

The site's nature matters more than the owner's stack preference here:

- It is **content-and-design driven** (markdown case studies + games), not an
  application (no auth, dashboards, or dynamic data).
- Its top goal is **credibility with corporate clients**, for which load speed and
  SEO are load-bearing.
- The "interesting" bar is met with **scroll/flow animation and a few interactive
  moments**, not app-wide interactivity.

The current codebase is Astro 2.0 (outdated; current is 5.x) with content
collections already in use.

## Decision

Stay on **Astro**, upgraded to 5.x, keeping content collections. Ship **zero JS by
default** and introduce **React only as islands**, on demand, when a specific
feature is genuinely worth the interactivity (e.g. a standout interactive
animation or a playable widget in the Games section).

Reach for a full React framework (Next.js) only if the site later becomes a web
*app* rather than a portfolio.

## Consequences

- Best-in-class default performance and SEO, directly serving the consulting goal.
- The owner still writes React for every part that actually needs it, without
  paying the JS cost on static content pages.
- Content stays in Astro content collections (good markdown ergonomics) rather
  than MDX-in-Next.
- If the site's needs shift toward a dynamic application, this decision should be
  revisited — the migration cost is the trade-off we are accepting.
