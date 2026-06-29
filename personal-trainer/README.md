# George Stevens Fitness

Marketing site for a personal training and nutrition coaching business. Built as a static Astro site with React islands for interactive features (cart, contact form, program assessment quiz, Calendly booking).

## Tech stack

- [Astro](https://astro.build) 6 — static site generation
- [React](https://react.dev) 19 — interactive UI islands
- [Tailwind CSS](https://tailwindcss.com) 4 — styling
- [Nanostores](https://github.com/nanostores/nanostores) — cart state
- [EmailJS](https://www.emailjs.com/) — contact form delivery
- [Calendly](https://calendly.com/) — session booking embed

## Requirements

- **Node.js** `>=22.12.0`
- **npm** (comes with Node)

## Getting started

```sh
# Install dependencies
npm install

# Copy env template and fill in your values
cp .env.example .env

# Start dev server at http://localhost:4321
npm run dev
```

## Environment variables

Create a `.env` file in the project root (see `.env.example`). All vars are prefixed with `PUBLIC_` so Astro exposes them to the client.

| Variable | Required | Description |
| --- | --- | --- |
| `PUBLIC_CALENDLY_URL` | No | Calendly event URL. Falls back to `src/config/site.ts` if unset. |
| `PUBLIC_EMAILJS_SERVICE_ID` | Yes (contact) | EmailJS service ID for the contact form |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | Yes (contact) | EmailJS template ID |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | Yes (contact) | EmailJS public key |

`.env` is gitignored — never commit real keys. Set the same variables in your hosting provider before deploying.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | TypeScript + Astro diagnostics |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (write) |
| `npm run compress-assets` | Compress oversized images in `src/assets/` |

Optional: compress oversized images in `src/assets/` before committing:

```sh
npm run compress-assets
```

## Quality checks

```sh
npm run check    # TypeScript + Astro
npm run lint     # ESLint
npm run format   # Prettier (writes files)
```

## Project structure

```text
personal-trainer/
├── public/              Static files (favicon, robots.txt)
├── scripts/             Build helpers (asset compression)
├── src/
│   ├── assets/          Images processed by Astro
│   ├── components/      Astro + React components by feature
│   ├── config/          Site-wide config (Calendly URL)
│   ├── content/blog/    Markdown blog posts
│   ├── data/          Product catalog (types, trainingPrograms, nutritionPlans)
│   ├── layouts/         BaseLayout.astro
│   ├── lib/             Utilities (blog, images, assessment)
│   ├── pages/           File-based routes
│   ├── store/           Cart state (Nanostores)
│   └── styles/          Global CSS + Tailwind theme
├── astro.config.mjs
└── package.json
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/about` | About page |
| `/programs`, `/programs/[id]` | Training program catalog + detail |
| `/nutrition`, `/nutrition/[id]` | Nutrition plans + detail |
| `/blog` | Blog listing, categories, pagination |
| `/program-selector` | Training program assessment quiz |
| `/book` | Calendly booking |
| `/contact` | Contact form (EmailJS) |
| `/checkout` | Cart checkout (demo) |

## Deployment

The site builds to fully static HTML in `dist/`. Deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

**Before going live:**

1. Set your production domain in `astro.config.mjs` (`site` option).
2. Update the sitemap URL in `public/robots.txt` to match.
3. Set all `PUBLIC_*` environment variables on the host.
4. Run `npm run build` and verify `npm run preview` locally.
5. Test the contact form and Calendly embed on staging (ad blockers can block Calendly).

Build output includes an auto-generated sitemap at `/sitemap-index.xml`.

## Content

- **Blog posts** — add markdown files under `src/content/blog/` with frontmatter (`title`, `pubDate`, `description`, `author`, `image`, `category`, `tags`). Cover images in `src/assets/` are auto-discovered by filename.
- **Products** — edit `src/data/trainingPrograms.ts` or `nutritionPlans.ts`. New cover images in `src/assets/` are auto-discovered (no map edits needed).
