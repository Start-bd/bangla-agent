# Bangla Agent — Astro Starter

## What's in here

- **Astro 7** (static output, zero JS by default) — solves the CSR/SSR
  problem your other properties (PolicyBD, BanglaSEO, toolsml, bdaihub)
  are still blocked on. Every page ships as real, crawlable HTML.
- `lang="bn"` set at the layout level — can't accidentally regress to `en`
  like the Lovable scaffold default.
- Content collections: `guides`, `use-cases`, `tools` (tools folder is
  empty — add `.md` files there when ready, following the same pattern).
- `robots.txt` with AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot) explicitly allowed from day one.
- `llms.txt` describing the site for AI assistants.
- Per-page Article/WebSite JSON-LD schema, unique canonical URLs, OG tags.
- Sitemap auto-generated via `@astrojs/sitemap`.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to ./dist
npm run preview   # preview the built site
```

## Adding content

Drop a new `.md` file into `src/content/guides/`, `src/content/use-cases/`,
or `src/content/tools/` with the frontmatter fields defined in
`src/content.config.ts`. Pages are generated automatically — no route code
needed.

## Deploying

`dist/` is a fully static site — deploy to Vercel, Netlify, Cloudflare
Pages, or any static host. Point `banglaagent.com`'s DNS at whichever you
pick. No Node server required for this static configuration.

## Before going live (from the pre-launch checklist)

- [ ] Replace `/public/og-default.png` placeholder — currently referenced
      but not created; add a real 1200x630 OG image.
- [ ] Add real favicon assets (currently using Astro's default).
- [ ] Verify raw HTML output again after adding real content (`view-source:`
      in browser, or `curl` + grep, same way this was checked during setup).
- [ ] Submit sitemap to Google Search Console immediately — don't repeat
      the bdaihub/toolsml gap where SE Ranking projects were created late.
- [ ] Set up an SE Ranking project for banglaagent.com from launch day.
- [ ] Decide on Supabase integration only if you need dynamic features
      (user submissions, accounts) — keep core content statically generated.

## Content plan (suggested first batch)

**Guides** (pillar/educational):
- ✅ AI এজেন্ট কী? (done — sample)
- চ্যাটবট বনাম AI এজেন্ট: পার্থক্য কী?
- ছোট ব্যবসার জন্য AI এজেন্ট শুরু করার গাইড
- বিকাশ/নগদ পেমেন্ট অটোমেশন কীভাবে কাজ করে

**Use cases** (industry-specific):
- ✅ WhatsApp অর্ডার বট (done — sample)
- রেস্টুরেন্টের জন্য মেসেঞ্জার রিজার্ভেশন বট
- রিটেইল দোকানের কাস্টমার সাপোর্ট অটোমেশন
- পেমেন্ট রিমাইন্ডার বট (বিকাশ/নগদ)

**Tools** (profiles — start once you've picked 5-10 relevant platforms)
