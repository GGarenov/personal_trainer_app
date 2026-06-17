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

- [x] Left column: Logo + tagline
- [x] Middle column: Quick nav links (same as navbar)
- [x] Right column: Social media icon links (Instagram, YouTube, Facebook, TikTok — use SVG icons)
- [x] Bottom bar: `© 2026 [Trainer Name]. All Rights Reserved.`
- [x] All columns collapse to a single column on mobile

---

## PHASE 3 — Home Page

### 3.1 Hero section (`Hero.astro`)

- [x] Full-width, full-height section with a **background image** (trainer photo — placeholder for now)
- [x] Dark overlay gradient on top of the image
- [x] Large heading (e.g. `TRANSFORM YOUR BODY`) using the display font
- [x] Subheading (e.g. `Science-based training & nutrition programs`)
- [x] Primary CTA button: **"View Programs"** → links to `/programs`
- [x] Subtle scroll-down arrow animation at the bottom

### 3.2 Category cards (`CategoryCards.astro`)

- [x] Two side-by-side clickable cards
  - Card 1 → **Training Programs** image + title + arrow → `/programs`
  - Card 2 → **Nutrition Plans** image + title + arrow → `/nutrition`
- [x] On hover: image zooms slightly, overlay darkens
- [x] On mobile: stack vertically

### 3.3 Transformation slider (`TransformationSlider.jsx`) — React island

- [x] Install a slider lib: `npm install embla-carousel-react` (or use a CSS-only carousel)
- [x] Each slide contains:
  - Side-by-side **Before / After** photos (use `<img>` with `object-fit: cover`)
  - Client quote in italic
  - Client name + result (e.g. _"John Smith – Lost 30 kg"_)
- [x] Auto-play every 5 seconds
- [x] Prev/Next arrow buttons + dot indicators
- [x] Add `client:load` when using the island in the `.astro` parent

### 3.4 Recent blog posts (`RecentBlogPosts.astro`)

- [x] Fetch the 3 latest posts from the Content Collection
- [x] Display as a 3-column card grid (1-col on mobile)
- [x] Each card: thumbnail image, category tag, title, date, short excerpt, "Read More" link
- [x] Section heading: **"Latest from the Blog"** with a "View All" link → `/blog`

---

## PHASE 4 — About Page

### 4.1 Hero banner

- [x] Full-width banner with trainer photo (different from home hero)
- [x] Overlaid name + tagline

### 4.2 Story section

- [x] Center photo banner (`about_hero_image.png`) above story text
- [x] Long-form "My Story" text (placeholder copy — replace with real content later)
- [x] Include stats bar (e.g. `10+ Years Experience · 200+ Clients Transformed · 3 World Records`)
- [x] On mobile: stack photo above text

### 4.3 Certifications / credentials strip

- [x] Horizontal row of certification logos or text badges (ISSA, NASM, etc.)
- [x] Greyscale by default, full-color on hover

---

## PHASE 5 — Training Programs Page

### 5.1 Page hero

- [x] Short hero banner with heading **"Training Programs"** and a breadcrumb

### 5.2 Program cards (reuse `ProgramCard.astro`)

- [x] 2-column grid (1-col on mobile)
- [x] Each card:
  - Program photo / cover image
  - Program name
  - Short description (3–4 bullet points of what's included)
  - Price (e.g. `€49`)
  - **"Add to Cart"** button → React island to trigger cart store
- [x] Add a small "Most Popular" badge on one program

### 5.3 Cart store (`src/store/cart.js`)

- [x] Use `nanostores` atom to hold `{ items: [], total: 0 }`
- [x] Export `addItem(product)`, `removeItem(id)`, `clearCart()` helpers
- [x] `CartIcon.jsx` reads from store and shows item count badge

---

## PHASE 6 — Nutrition Plans Page

### 6.1 Layout

- [x] Mirror the Training Programs page exactly
- [x] Different hero image
- [x] Different plan cards (e.g. "Weight Loss Meal Plan", "Muscle Gain Meal Plan")
- [x] Same `ProgramCard.astro` component — just pass different props

---

## PHASE 7 — Blog

### 7.1 Content Collections setup (`src/content.config.ts`)

- [x] Add the config (Astro 6 Content Layer API with `glob` loader)
- [x] Create 3–5 placeholder `.md` blog posts under `src/content/blog/`
- [x] Each file: frontmatter matching the schema + placeholder body text

### 7.2 Blog index page (`src/pages/blog/[...page].astro`)

- [x] Fetch all posts, sort by date descending
- [x] Category filter tabs (All / Training / Nutrition / Mindset / Transformations)
- [x] Responsive grid of `BlogCard.astro` components
- [x] Pagination (show 6 per page) — use Astro's `paginate()` helper

### 7.3 Blog post page (`src/pages/blog/[slug].astro`)

- [x] Dynamic route using `getStaticPaths()` from Content Collections
- [x] Render `<Content />` (Markdown body)
- [x] Show: title, author, date, category tag, cover image
- [x] Related posts section at the bottom (same category, max 3)

---

## PHASE 8 — Contact Page

### 8.1 Layout

- [x] Two-column layout: left = contact info, right = form (1-col on mobile)
- [x] Left side: email, social links, location (optional)

### 8.2 Contact form (`ContactForm.jsx`) — React island

- [x] Fields: **Name · Email · Subject · Message**
- [x] Client-side validation (required fields, valid email format)
- [x] On submit: POST to a form endpoint
  - Option A (simple): Use **Netlify Forms** (`netlify` attribute on form)
  - Option B: Use **Formspree** (free tier) — `https://formspree.io/f/YOUR_ID`
- [x] Show success / error message after submission
- [x] Add `client:load` in the parent `.astro` file

---

## PHASE 9 — SEO, Performance & Accessibility

### 9.1 SEO

- [x] Add `<meta name="description">` to every page via `BaseLayout.astro` title prop
- [x] Add Open Graph tags (`og:title`, `og:description`, `og:image`) in `BaseLayout.astro`
- [x] Add `<link rel="canonical">` to every page
- [x] Create `src/pages/sitemap.xml.js` using `@astrojs/sitemap` (`npx astro add sitemap`)
- [x] Create `public/robots.txt`

### 9.2 Images & format optimization

> **Good news:** Astro already converts images to **WebP** at build time when you use `<Image />` from `astro:assets` (powered by `sharp`). Visitors do **not** download your raw 5 MB `.jpg` / `.png` source files — they get compressed `.webp` variants.  
> **The problem:** Huge originals (e.g. `plant_meal.jpg` at 6 MB+) still slow down **builds**, bloat the repo, and any component using a plain `<img>` tag bypasses optimization entirely.

#### 9.2.1 Audit & organize source files

- [x] Run a size audit on `src/assets/` — flag any file over **500 KB** for re-export or compression
- [ ] Reorganize into subfolders (optional but recommended):
  ```
  src/assets/
  ├── images/
  │   ├── hero/
  │   ├── programs/
  │   ├── nutrition/
  │   ├── blog/
  │   └── transformations/
  ```
- [ ] Remove unused placeholder images (`image_one.png` … `image_seven.jpg`) once all references are migrated
- [ ] Prefer **JPEG** for photos and **PNG** only when transparency is required (logos, graphics)

#### 9.2.2 Pre-compress source assets (before commit)

Source files should be reasonably sized *before* Astro processes them. Target guidelines:

| Type | Max dimensions | Target file size |
| ---- | -------------- | ---------------- |
| Hero / banner | 1920 × 1080 | ≤ 300 KB |
| Card / blog thumbnail | 1200 × 800 | ≤ 150 KB |
| Before/after slide | 800 × 1000 | ≤ 120 KB |

Tools (pick one):

- [x] **Sharp CLI** — batch resize: `npx sharp-cli resize 1920 -- input.jpg -o output.jpg` (via `scripts/compress-assets.mjs`)
- [ ] **Squoosh** (https://squoosh.app) — drag-and-drop, export WebP or JPEG at ~80 quality
- [ ] **ImageOptim** (Mac) or **FileOptimizer** (Windows) — lossless/lossy batch compress

- [x] Re-export oversized blog images (`training_blog_*.jpg`, `nutrition_blog_*.jpg`, etc.)
- [x] Re-export oversized meal plan images (`plant_meal.jpg`, `weight_loss_meal_plan.jpg`, etc.)
- [x] Re-export hero/banner assets (`banner.png`, `about_hero_image.png`) — PNG heroes are often the worst offenders

#### 9.2.3 Use Astro `<Image />` everywhere (auto WebP output)

- [x] Hero, program cards, blog cards, and about page already use `<Image />`
- [x] Replace remaining plain `<img>` tags in `TransformationSlider.jsx` with optimized URLs passed from the Astro parent (or use `<Image />` in Astro and pass `src` strings from `getImage()`)
- [x] Always provide descriptive `alt` text
- [x] Always set `width` + `height` (or `aspect-ratio` via CSS) to prevent layout shift (CLS)
- [x] Add `loading="lazy"` on below-the-fold images; keep `loading="eager"` only for the home hero
- [x] Provide responsive `widths` and `sizes` props so mobile gets smaller files:

```astro
<Image
  src={cover}
  alt="Description"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### 9.2.4 Centralize image maps

- [x] `src/lib/blogImages.ts` — blog cover lookup
- [x] Create `src/lib/productImages.ts` — move image map out of `ProgramCard.astro` (same pattern as blog)
- [x] When adding a new image: import in the lib file + reference by filename string in data/frontmatter

#### 9.2.5 Optional — global quality setting

In `astro.config.mjs`, lower default quality if files are still too large after source compression:

```js
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: { limitInputPixels: false },
    },
  },
});
```

Per-image quality override:

```astro
<Image src={hero} quality={75} alt="..." />
```

- [x] Tune `quality` (70–80 is usually fine for photos) after checking output in `dist/_astro/`

#### 9.2.6 Verify at build time

After `npm run build`, check the terminal **"generating optimized images"** section:

- [x] No single WebP output over **200 KB** for card/thumbnail sizes (typical breakpoints; a few full-width variants may exceed)
- [x] Hero WebP outputs under **400 KB**
- [ ] Spot-check pages in Chrome DevTools → Network → Img filter → confirm `.webp` is served, not raw `.jpg`/`.png`

### 9.3 Accessibility

- [x] All interactive elements reachable by keyboard
- [x] Navbar has `aria-label="Main navigation"`
- [x] All icon-only buttons have `aria-label`
- [x] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Run Lighthouse audit → fix any flagged issues

### 9.4 Performance & fast loading

> Goal: **PageSpeed Insights mobile score ≥ 90** (also tracked in Phase 12). Image work in 9.2 is the biggest win; these items cover the rest.

#### 9.4.1 JavaScript & React islands

- [x] Change `TransformationSlider` from `client:load` to `client:visible` (below the fold — no need to hydrate on first paint)
- [x] Change `AddToCartButton` from `client:load` to `client:visible` on program/nutrition pages
- [x] Audit: only `CartIcon` and `ContactForm` truly need `client:load`

#### 9.4.2 Fonts

- [x] Google Fonts loaded via `<link>` in `BaseLayout.astro`
- [x] Add `&display=swap` (already present) and consider `font-display: swap` in CSS as fallback
- [x] Preload only the weights actually used (currently Bebas Neue + DM Sans 400/500/700 — trim if possible)

#### 9.4.3 Caching & delivery

- [ ] Deploy to a CDN host (Netlify / Vercel / Cloudflare Pages) — static assets in `dist/_astro/` get long cache headers automatically
- [ ] After deploy, confirm response headers: `cache-control` on `/_astro/*` files

#### 9.4.4 Measure before and after

- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on `/`, `/programs`, `/blog` **before** optimization — save scores
- [ ] Re-run after completing 9.2 + 9.4 — target **LCP < 2.5 s**, **CLS < 0.1** on mobile
- [ ] Check Chrome DevTools → Network → throttle "Fast 3G" → total page weight under **1.5 MB** on home page

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
5. **Images** — never commit multi-MB photos. Compress sources first, then let Astro's `<Image />` generate WebP. Plain `<img>` tags skip optimization entirely.
