# NMT Solutions website

A Next.js 14 and React 18 website for NMT Solutions. It describes our services, technology stack, and projects, with an interactive 3D service scene and animated architecture diagrams.

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

To run production checks alongside a dev server, set `NMT_BUILD_DIR=.next-verify` for both the build and test commands. This keeps the two servers from overwriting each other's output.

## Content and product stages

Edit `src/lib/site-content.ts` to maintain service copy, technology categories, FAQs, and projects. Project pages, structured data, the sitemap, and `/llms.txt` use this shared source.

- Lead Follow-up & Booking Automation, Supplier Catalog Cleaner, and Control Nest v2 are in development.
- Control Nest v2 has a [public website](https://controlnest.nmt-solutions.in/) and a [setup guide](https://controlnest.nmt-solutions.in/guide).
- The original Control Nest is a legacy project.

Project descriptions use the repositories located through T3 Code: `lead-follow-up-and-booking-automation/docs/idea.md`, `supplier-catalog-cleanup/docs/idea.md`, and `Control-Nest-v2/README.md`. The Control Nest v2 page includes device controls, schedules, local and remote access, energy estimates, updates, and setup requirements.

## Branding and copy

The header, footer, hero logo, and social image use the original `src/assets/svgs/nmt-logo.svg`. `public/brand/nmt-logo.svg` is an identical copy. The wordmark retains the original NMT badge and Solutions text. The theme uses the logo's gradient endpoints, purple `#4e1a70` and blue `#2b4cf2`.

The logo and wordmark tilt on pointer interaction and respect reduced motion. The hero's wording, composition, and headline typography are preserved. Its star, controls, and display frame use the new theme.

`src/app/glass.css` defines the glass materials, buttons, navigation, and responsive theme over the existing page layout. Space Grotesk is used for headings and controls; Manrope is used for reading text. The fonts are self-hosted, with their licenses in `src/app/fonts`. The original wordmark and hero headline retain Geist.

The logo uses a superscript TM symbol. [CIPAM's trademark guidance](https://cipam.gov.in/upload/IprAwarenessModal/section5_1756118549_2.pdf#page=16) distinguishes this symbol from the registered mark symbol. There is no trademark application notice in the page copy.

Marketing copy outside the hero follows the `unslop` skill. The support address is `wafa.khan@nmtsolutions.in` throughout the site, including legal contact details and structured data.

## SEO and AI discoverability

The default production origin is `https://nmtsolutions.in`. Set the optional `NEXT_PUBLIC_SITE_URL` before building if the production domain changes. This controls canonical URLs, metadata, structured data, the sitemap, and AI-readable links. No `.env` file is needed for the default domain.

Public pages render meaningful text without JavaScript. The site provides page-specific titles and descriptions, canonical URLs, Open Graph and Twitter cards, organization/service/project structured data, `/sitemap.xml`, `/robots.txt`, and `/llms.txt`. Crawler access is allowed; any production CDN or host must also allow access. Submit the sitemap in the site's search-console account after deployment.

The [Google guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features) recommends normal SEO foundations, crawlable text, and structured data that matches visible content. `/llms.txt` is an additional [community proposal](https://llmstxt.org/), not a guarantee of indexing or inclusion in AI answers.

The social card is a local PNG at `public/og-image.png`, generated from `public/brand/social-card.svg`. To regenerate it:

```sh
node -e "require('sharp')('public/brand/social-card.svg').png().toFile('public/og-image.png')"
```

## Motion and accessibility

React Three Fiber 8 matches the existing React 18 version. Framer Motion handles UI transitions; Fiber owns the hero's mesh transforms. The 3D code is loaded separately, uses procedural geometry without remote model or font requests, limits pixel density, suspends drawing offscreen/in background tabs, and respects reduced motion. The header and hero share a manual motion pause control. Native HTML controls duplicate every informational canvas interaction, and a CSS illustration is available without WebGL.

The technology section uses category-specific SVG architecture diagrams instead of generic stacked plates: components forming a browser interface, shared mobile code reaching iOS and Android, API requests and background jobs, and IoT. The IoT flow is App → API → PostgreSQL, with a separate API → Cloudflare Tunnel → Raspberry Pi device branch. Each flow loops automatically. A keyboard-accessible pause/resume button below the diagram shares the site's motion control and preserves the flow's position. Framer Motion updates one motion value for the SVG signals; drawing stops offscreen and in background tabs. Reduced-motion preferences produce a static highlight. These diagrams need no WebGL and render without a graphics download. `TechnologyDiagram.tsx` owns the diagrams and their explanatory captions.

The navigation selection follows the current section and responds to focus and pointer input. Service cards reveal implementation details with keyboard-accessible buttons. A faint SVG network follows the selected service, pauses in background tabs, and uses Framer Motion values for a small pointer response. It does not create another WebGL context or display simulated live metrics. Route loading uses stacked isometric panels and a travelling signal; pending form buttons use three signal bars. Both respect reduced motion.

The interface includes a skip link, semantic landmarks and headings, visible keyboard focus, live selection announcements, native FAQ disclosures, an Escape-dismissable mobile menu, and reduced-transparency/high-contrast preferences.

Skills applied: local React Three Fiber fundamentals, animation, and materials; Apple motion and glass-material guidance; [Anthropic frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design); [GitHub Framer Motion guidance](https://github.com/github/awesome-copilot/tree/main/skills/gsap-framer-scroll-animation); and [isometric-animation](https://github.com/iart-ai/explainer-video-skills/tree/main/skills/isometric-animation). Existing React/Next.js versions were retained.

## Removed backend

Clerk providers and middleware, PostgreSQL/Drizzle connections, migrations, product admin routes, upload endpoints, product state, and database-backed subscriptions were removed with their dependencies. The old `/our-products` URLs redirect to the new project section. Client-development technology descriptions can still mention databases; they do not add database dependencies to this website.

The pre-existing legal policy text is retained with semantic markup and consistent page styling.
