# NMT Solutions website

A static-first Next.js 14 and React 18 website for NMT Solutions, rebuilt on the `revamp` branch. It introduces our services, technology stack, and product work through accessible HTML and small interactive isometric scenes.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No database, authentication provider, upload service, or API keys are required. Contact links open the visitor's email application; this website does not store inquiries.

## Production and checks

```sh
npm run typecheck
npm run build
npm run start
npm run test:e2e
```

The browser checks use installed Google Chrome, start the production build on port 3017, and cover keyboard controls, responsive layout, JavaScript-disabled reading, WebGL fallback, metadata, crawler resources, and axe WCAG 2.2 A/AA rules. Automated checks support, but do not replace, manual assistive-technology review. Run `npm run build` before `npm run test:e2e`.

## Content and product stages

Edit `src/lib/site-content.ts` to maintain service copy, technology categories, FAQs, and projects. Project pages, structured data, the sitemap, and `/llms.txt` use this shared source.

- **Upcoming:** Lead Follow-up & Booking Automation, Supplier Catalog Cleaner, Control Nest v2.
- **Legacy:** Control Nest.

Descriptions were grounded in the project repositories located through T3 Code: `lead-follow-up-and-booking-automation/docs/idea.md`, `supplier-catalog-cleanup/docs/idea.md`, and `Control-Nest-v2/README.md`. Public upcoming/legacy stages follow the owner's requested positioning. Upcoming features are described as product direction, with no launch-date or availability claims. No private project settings, budgets, credentials, or customer information are published.

## SEO and AI discoverability

The default production origin is `https://nmt-solutions.in`. Set the optional `NEXT_PUBLIC_SITE_URL` before building if the production domain changes. This controls canonical URLs, metadata, structured data, the sitemap, and AI-readable links. No `.env` file is needed for the default domain.

Public pages render meaningful text without JavaScript. The site provides page-specific titles and descriptions, canonical URLs, Open Graph and Twitter cards, organization/service/project structured data, `/sitemap.xml`, `/robots.txt`, and `/llms.txt`. Crawler access is allowed; any production CDN or host must also allow access. Submit the sitemap in the site's search-console account after deployment.

The [Google guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features) recommends normal SEO foundations, crawlable text, and structured data that matches visible content. `/llms.txt` is an additional [community proposal](https://llmstxt.org/), not a guarantee of indexing or inclusion in AI answers.

The social card is a local PNG at `public/og-image.png`, generated from `public/brand/social-card.svg`. To regenerate it:

```sh
node -e "require('sharp')('public/brand/social-card.svg').png().toFile('public/og-image.png')"
```

## Motion and accessibility

React Three Fiber 8 matches the existing React 18 version. Framer Motion handles UI transitions; Fiber owns mesh transforms. The 3D code is loaded separately, uses procedural geometry without remote model or font requests, limits pixel density, suspends drawing offscreen/in background tabs, and respects reduced motion. The hero has a manual motion pause control. Technology layers render on demand and settle to idle. Native HTML controls duplicate every informational canvas interaction, and a CSS illustration is available without WebGL.

The interface includes a skip link, semantic landmarks and headings, visible keyboard focus, live selection announcements, native FAQ disclosures, an Escape-dismissable mobile menu, and reduced-transparency/high-contrast preferences.

Skills applied: local React Three Fiber fundamentals, animation, and materials; Apple motion guidance; [GitHub Framer Motion guidance](https://github.com/github/awesome-copilot/tree/main/skills/gsap-framer-scroll-animation); and [isometric-animation](https://github.com/iart-ai/explainer-video-skills/tree/main/skills/isometric-animation). Existing React/Next.js versions were retained.

## Removed backend

Clerk providers and middleware, PostgreSQL/Drizzle connections, migrations, product admin routes, upload endpoints, product state, and database-backed subscriptions were removed with their dependencies. The old `/our-products` URLs redirect to the new project section. Client-development technology descriptions can still mention databases; they do not add database dependencies to this website.

The pre-existing legal policy text is retained with semantic markup and consistent page styling.
