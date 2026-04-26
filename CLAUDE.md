@AGENTS.md

# Site is offline (product redesign)

The public site is currently taken offline behind a single flag while the
product is being redesigned. The original site is preserved verbatim and is
fully browsable on localhost — do not delete the archived routes or the
components/lib/hooks they depend on.

## Architecture

- **`src/lib/site-status.ts`** — exports `SITE_OFFLINE` (currently `true`).
  Single source of truth for the toggle.
- **`src/proxy.ts`** — Next 16 proxy (formerly `middleware.ts`). In
  production, when `SITE_OFFLINE` is `true`, rewrites every request to
  `/offline` except for `/offline`, `/robots.txt`, `/sitemap.xml`,
  `/favicon.ico`, `/icon.svg`, and `/_next/*`. Bypassed entirely in dev
  (`process.env.NODE_ENV !== "production"`), so `npm run dev` always serves
  the full original site.
- **`src/app/offline/page.tsx`** — minimal centered notice, `noindex`. Uses
  the root layout only (no Header/Footer).
- **`src/app/(site)/`** — route group containing the entire original site
  (home, about, pricing, platform, contact, terms, privacy, resources,
  solutions, estimator, thank-you, and `api/*`). Route groups don't change
  URLs, so each page still serves at its original path. `(site)/layout.tsx`
  carries the Header, Footer, Organization JSON-LD, and full SEO metadata.
- **`src/app/layout.tsx`** — minimal root: `<html>`, `<body>`, Inter font.
  No Header/Footer, no site-specific metadata. Wraps both `/offline` and
  `(site)/*`.
- **`src/app/robots.ts`** and **`src/app/sitemap.ts`** — both branch on
  `SITE_OFFLINE`. Offline ⇒ `Disallow: /` and an empty sitemap.

## To bring the site back online

1. Set `SITE_OFFLINE = false` in `src/lib/site-status.ts`.
2. Redeploy.

That's it — proxy stops rewriting, robots/sitemap revert to the live
configuration, and every URL under `(site)/` is served as before. No file
moves required.

## Working in this repo

- Editing the offline notice copy → `src/app/offline/page.tsx`.
- Editing the original site (any page, component, etc.) → it lives where it
  always did, just inside `src/app/(site)/`. Imports from `@/components`,
  `@/lib`, `@/hooks`, `@/types` still resolve identically.
- New pages intended to ship as part of the redesigned site → put them
  under `src/app/(site)/` so they're gated by the same flag.
- New always-public pages (e.g. a future status page) → put them at
  `src/app/<route>/` (outside `(site)/`) and add the path to the
  `PASSTHROUGH` set in `src/proxy.ts`.
- Do **not** add a `not-found.tsx` at the root that mirrors `(site)`
  styling; the proxy already routes unmatched URLs to `/offline` in
  production, and dev should keep Next's default 404.
