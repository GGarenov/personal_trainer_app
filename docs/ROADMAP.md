# 💪 Personal Trainer Portfolio – Project Roadmap

> **Stack:** Astro + React + Tailwind CSS  
> **Reference site:** jeffnippard.com  
> **Role reading this:** You are the developer. Work through each task top-to-bottom. Check off boxes as you go.

---

## PHASE 1 — Project Setup & Configuration

### 1.1 Scaffold the project

- [x] Run `npm create astro@latest trainer-portfolio` → choose **"Empty"** template
- [x] `cd trainer-portfolio`
- [x] Add React integration: `npx astro add react`
- [x] Add Tailwind integration: `npx astro add tailwind`
- [x] Verify `astro.config.mjs` contains both `react()` and `tailwind()` integrations
- [x] Run `npm run dev` — confirm the dev server starts on `localhost:4321`

### 1.2 Folder structure

Create the following structure manually or with `mkdir -p`:

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── CategoryCards.astro
│   │   ├── TransformationSlider.jsx   ← React island
│   │   └── RecentBlogPosts.astro
│   ├── shared/
│   │   ├── Button.astro
│   │   ├── ProgramCard.astro
│   │   └── CartIcon.jsx               ← React island
│   └── blog/
│       └── BlogCard.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── programs.astro
│   ├── nutrition.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── contact.astro
├── content/
│   ├── blog/          ← .md files for blog posts
│   └── config.ts      ← Astro Content Collections config
├── store/
│   └── cart.js        ← Nano Stores cart state
└── styles/
    └── global.css
```

- [x] Create all folders and placeholder files listed above

### 1.3 Tailwind & global styles

- [x] Open `tailwind.config.mjs` and extend the theme:
  - Add your brand color palette (e.g. `primary: "#E8FF00"`, `dark: "#0A0A0A"`, `surface: "#111111"`)
  - Add custom font families (see 1.4)
- [x] In `src/styles/global.css` add `@tailwind base/components/utilities` and set `body { background: #0A0A0A; color: #fff; }`
- [x] Import `global.css` inside `BaseLayout.astro`

### 1.4 Fonts

- [x] Choose two Google Fonts (suggested: **Bebas Neue** for headings + **DM Sans** for body)
- [x] Add `<link>` tags in `BaseLayout.astro` `<head>`
- [x] Register font families in `tailwind.config.mjs` under `theme.extend.fontFamily`

### 1.5 Install extra dependencies

```bash
npm install nanostores @nanostores/react   # cart state
npm install @astrojs/rss                   # RSS feed for blog (optional)
npm install sharp                          # image optimisation (Astro uses this)
```

- [x] Run the install command above

---

## PHASE 2 — Layout Shell (Navbar + Footer)

### 2.1 BaseLayout.astro

- [x] Create `<html lang="en">` wrapper with `<head>` (meta, title slot, fonts, global CSS) and `<body>`
- [x] Add `<Navbar />` at the top of `<body>`
- [x] Add `<slot />` in the middle
- [x] Add `<Footer />` at the bottom
- [x] Accept a `title` prop and bind it to `<title>` and `<meta name="description">`

### 2.2 Navbar.astro

- [x] Logo on the left (image or text — placeholder for now)
- [x] Nav links: **Home · About · Training Programs · Nutrition Plans · Blog · Contact**
- [x] `<CartIcon client:load />` React island on the right (shows item count badge)
- [x] Make the navbar **sticky** (`position: sticky; top: 0`) with a dark/blur background
- [x] Add a **mobile hamburger menu** (toggle with a small React island or CSS-only checkbox hack)
- [x] Mark active link with a highlight color using `Astro.url.pathname`

### 2.3 Footer.astro

- [ ] Left column: Logo + tagline
- [ ] Middle column: Quick nav links (same as navbar)
- [ ] Right column: Social media icon links (Instagram, YouTube, Facebook, TikTok — use SVG icons)
- [ ] Bottom bar: `© 2026 [Trainer Name]. All Rights Reserved.`
- [ ] All columns collapse to a single column on mobile

---

## PHASE 3 — Home Page

### 3.1 Hero section (`Hero.astro`)

- [ ] Full-width, full-height section with a **background image** (trainer photo — placeholder for now)
- [ ] Dark overlay gradient on top of the image
- [ ] Large heading (e.g. `TRANSFORM YOUR BODY`) using the display font
- [ ] Subheading (e.g. `Science-based training & nutrition programs`)
- [ ] Primary CTA button: **"View Programs"** → links to `/programs`
- [ ] Subtle scroll-down arrow animation at the bottom

### 3.2 Category cards (`CategoryCards.astro`)

- [ ] Two side-by-side clickable cards
  - Card 1 → **Training Programs** image + title + arrow → `/programs`
  - Card 2 → **Nutrition Plans** image + title + arrow → `/nutrition`
- [ ] On hover: image zooms slightly, overlay darkens
- [ ] On mobile: stack vertically

### 3.3 Transformation slider (`TransformationSlider.jsx`) — React island

- [ ] Install a slider lib: `npm install embla-carousel-react` (or use a CSS-only carousel)
- [ ] Each slide contains:
  - Side-by-side **Before / After** photos (use `<img>` with `object-fit: cover`)
  - Client quote in italic
  - Client name + result (e.g. _"John Smith – Lost 30 kg"_)
- [ ] Auto-play every 5 seconds
- [ ] Prev/Next arrow buttons + dot indicators
- [ ] Add `client:load` when using the island in the `.astro` parent

### 3.4 Recent blog posts (`RecentBlogPosts.astro`)

- [ ] Fetch the 3 latest posts from the Content Collection
- [ ] Display as a 3-column card grid (1-col on mobile)
- [ ] Each card: thumbnail image, category tag, title, date, short excerpt, "Read More" link
- [ ] Section heading: **"Latest from the Blog"** with a "View All" link → `/blog`

---

## PHASE 4 — About Page

### 4.1 Hero banner

- [ ] Full-width banner with trainer photo (different from home hero)
- [ ] Overlaid name + tagline

### 4.2 Story section

- [ ] Left: portrait photo of the trainer
- [ ] Right: long-form "My Story" text (placeholder copy — replace with real content later)
- [ ] Include stats bar (e.g. `10+ Years Experience · 200+ Clients Transformed · 3 World Records`)
- [ ] On mobile: stack photo above text

### 4.3 Certifications / credentials strip

- [ ] Horizontal row of certification logos or text badges (ISSA, NASM, etc.)
- [ ] Greyscale by default, full-color on hover

---

## PHASE 5 — Training Programs Page

### 5.1 Page hero

- [ ] Short hero banner with heading **"Training Programs"** and a breadcrumb

### 5.2 Program cards (reuse `ProgramCard.astro`)

- [ ] 2-column grid (1-col on mobile)
- [ ] Each card:
  - Program photo / cover image
  - Program name
  - Short description (3–4 bullet points of what's included)
  - Price (e.g. `€49`)
  - **"Add to Cart"** button → React island to trigger cart store
- [ ] Add a small "Most Popular" badge on one program

### 5.3 Cart store (`src/store/cart.js`)

- [ ] Use `nanostores` atom to hold `{ items: [], total: 0 }`
- [ ] Export `addItem(product)`, `removeItem(id)`, `clearCart()` helpers
- [ ] `CartIcon.jsx` reads from store and shows item count badge

---

## PHASE 6 — Nutrition Plans Page

### 6.1 Layout

- [ ] Mirror the Training Programs page exactly
- [ ] Different hero image
- [ ] Different plan cards (e.g. "Weight Loss Meal Plan", "Muscle Gain Meal Plan")
- [ ] Same `ProgramCard.astro` component — just pass different props

---

## PHASE 7 — Blog

### 7.1 Content Collections setup (`src/content/config.ts`)

```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string(),
    category: z.enum(["Training", "Nutrition", "Mindset", "Transformations"]),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

- [ ] Add the config above
- [ ] Create 3–5 placeholder `.md` blog posts under `src/content/blog/`
- [ ] Each file: frontmatter matching the schema + placeholder body text

### 7.2 Blog index page (`src/pages/blog/index.astro`)

- [ ] Fetch all posts, sort by date descending
- [ ] Category filter tabs (All / Training / Nutrition / Mindset / Transformations)
- [ ] Responsive grid of `BlogCard.astro` components
- [ ] Pagination (show 6 per page) — use Astro's `paginate()` helper

### 7.3 Blog post page (`src/pages/blog/[slug].astro`)

- [ ] Dynamic route using `getStaticPaths()` from Content Collections
- [ ] Render `<Content />` (Markdown body)
- [ ] Show: title, author, date, category tag, cover image
- [ ] Related posts section at the bottom (same category, max 3)

---

## PHASE 8 — Contact Page

### 8.1 Layout

- [ ] Two-column layout: left = contact info, right = form (1-col on mobile)
- [ ] Left side: email, social links, location (optional)

### 8.2 Contact form (`ContactForm.jsx`) — React island

- [ ] Fields: **Name · Email · Subject · Message**
- [ ] Client-side validation (required fields, valid email format)
- [ ] On submit: POST to a form endpoint
  - Option A (simple): Use **Netlify Forms** (`netlify` attribute on form)
  - Option B: Use **Formspree** (free tier) — `https://formspree.io/f/YOUR_ID`
- [ ] Show success / error message after submission
- [ ] Add `client:load` in the parent `.astro` file

---

## PHASE 9 — SEO, Performance & Accessibility

### 9.1 SEO

- [ ] Add `<meta name="description">` to every page via `BaseLayout.astro` title prop
- [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`) in `BaseLayout.astro`
- [ ] Add `<link rel="canonical">` to every page
- [ ] Create `src/pages/sitemap.xml.js` using `@astrojs/sitemap` (`npx astro add sitemap`)
- [ ] Create `public/robots.txt`

### 9.2 Images

- [ ] Replace all `<img>` tags with Astro's `<Image />` component from `astro:assets`
- [ ] Always provide `alt` text
- [ ] Use `width` + `height` props to prevent layout shift
- [ ] Store all local images in `src/assets/images/`

### 9.3 Accessibility

- [ ] All interactive elements reachable by keyboard
- [ ] Navbar has `aria-label="Main navigation"`
- [ ] All icon-only buttons have `aria-label`
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Run Lighthouse audit → fix any flagged issues

---

## PHASE 10 — Content Population

- [ ] Replace all placeholder copy with real trainer bio text
- [ ] Upload real trainer photos to `src/assets/images/trainer/`
- [ ] Upload client transformation before/after photos to `src/assets/images/transformations/`
- [ ] Write 3 real blog posts
- [ ] Add real program names, descriptions, and prices
- [ ] Add real social media URLs in the Footer
- [ ] Add real contact email/phone to the Contact page

---

## PHASE 11 — Deployment

### 11.1 Choose a host (pick one)

| Option               | Command                 | Notes              |
| -------------------- | ----------------------- | ------------------ |
| **Netlify**          | `npx astro add netlify` | Best for forms too |
| **Vercel**           | `npx astro add vercel`  | Easiest CI/CD      |
| **Cloudflare Pages** | Manual adapter          | Best performance   |

### 11.2 Deploy steps (Netlify example)

- [ ] `npx astro add netlify`
- [ ] Push repo to GitHub
- [ ] Connect GitHub repo in Netlify dashboard
- [ ] Set build command: `npm run build`, publish dir: `dist`
- [ ] Add environment variables if using any API keys
- [ ] Trigger first deploy — verify the live URL works
- [ ] Add custom domain in Netlify settings
- [ ] Enable HTTPS (auto with Netlify)

---

## PHASE 12 — Post-Launch

- [ ] Set up Google Analytics 4 (add GA4 script to `BaseLayout.astro`)
- [ ] Test all "Add to Cart" flows end-to-end
- [ ] Test contact form submission
- [ ] Check all pages on mobile (iPhone SE, iPhone 14, Galaxy S22)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) — target score ≥ 90 on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Set up a payment processor (Stripe or Gumroad) for program purchases — this is a **separate task** outside of pure frontend scope

---

## Quick Reference — Component Cheat Sheet

| Component                  | Type  | `client:*` needed?         |
| -------------------------- | ----- | -------------------------- |
| `Navbar.astro`             | Astro | No (unless hamburger menu) |
| `CartIcon.jsx`             | React | `client:load`              |
| `Hero.astro`               | Astro | No                         |
| `TransformationSlider.jsx` | React | `client:load`              |
| `ContactForm.jsx`          | React | `client:load`              |
| `BlogCard.astro`           | Astro | No                         |
| `ProgramCard.astro`        | Astro | No                         |

---

## Notes for the Developer

1. **Always use `client:load` sparingly** — only on components that need JS on first paint (cart, slider, form). Use `client:visible` for below-the-fold islands.
2. **Mobile-first** — write Tailwind classes for mobile, then override with `md:` and `lg:` prefixes.
3. **One source of truth** — all product data (programs, prices) should live in a single `src/data/products.ts` file, not duplicated across pages.
4. **Git discipline** — commit after completing each Phase. Suggested branch strategy: `main` → `develop` → `feature/phase-X`.
