# SchemaSync.AI Website

Enterprise marketing website for SchemaSync.AI — AI-Powered Salesforce Schema Integration for M&A.

## Site status

The public site is currently **offline** for a product redesign. In production, every request is rewritten to `/offline` by `proxy.ts`. The full original site is preserved under `src/app/(site)/` and remains fully browsable in local dev.

To bring the site back online, flip `SITE_OFFLINE` to `false` in `src/lib/site-status.ts` and redeploy.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — `next dev` always serves the full site, regardless of the offline flag, so the archive is always reviewable locally.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **Salesforce Web-to-Lead** integration
