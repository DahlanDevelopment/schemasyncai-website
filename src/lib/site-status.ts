/**
 * Master switch for taking the public site offline.
 *
 * When `true`, every production request is rewritten to `/offline` by
 * `proxy.ts`, and `robots.ts` / `sitemap.ts` block indexing.
 *
 * Local `next dev` always serves the full site regardless of this flag, so the
 * archived version under `src/app/(site)/` remains viewable on localhost.
 *
 * To bring the site back online: set this to `false` and redeploy.
 */
export const SITE_OFFLINE = true;
