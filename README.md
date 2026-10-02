# Eatery — Next.js Restaurant Template

A clean, minimal, and modern website template for a small local restaurant or café. Built with **Next.js 14** and **Tailwind CSS**. Deploy to Vercel for free in minutes.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Customizing the site

**Everything lives in one file: `config/restaurant.config.js`**

Open it and update:

| Section | What it controls |
|---|---|
| `name`, `tagline` | Restaurant identity |
| `colors` | Full palette — updates the entire site |
| `seo` | Page title, description, Open Graph image |
| `hero` | Headline, photo, CTA button |
| `about` | Story text, pull quote, photo |
| `menu` | Categories, dishes, prices, tags |
| `hours` | Opening hours per day |
| `location` | Address and Google Maps embed URL |
| `contact` | Phone, email |
| `social` | Instagram, Facebook, Twitter/X |

### Changing the color palette

Edit the `colors` object in `restaurant.config.js`:

```js
colors: {
  primary:    "#1E3A2F",  // brand color (buttons, hero panel, headings)
  background: "#F8F5EE",  // page background
  surface:    "#EEEAE0",  // alternate section background
  text:       "#181510",  // body text
  muted:      "#7A7060",  // secondary text
  accent:     "#C8A96E",  // links, prices, highlights
  border:     "#DDD8CE",  // dividers
  onPrimary:  "#F8F5EE",  // text that sits on the primary color
},
```

Colors flow automatically from the config into Tailwind — no other files need editing.

### Changing fonts

1. Update `fonts.display` and `fonts.body` in `restaurant.config.js`
2. Open `app/layout.js` and update the `next/font/google` imports to match

Available Google Fonts: https://fonts.google.com

### Replacing images

Swap any Unsplash URL in the config for your own image URL. If you host images in `/public`, use a path like `/my-photo.jpg`.

If you use a CDN or CMS for images, add its domain to `next.config.mjs`:

```js
remotePatterns: [
  { protocol: "https", hostname: "your-cdn.io" },
]
```

### Adding the Google Maps embed

1. Go to [maps.google.com](https://maps.google.com) and search for your address
2. Click **Share → Embed a map**
3. Copy the URL from the `src="..."` attribute
4. Paste it into `restaurant.config.js → location.mapEmbedUrl`

---

## Deploying to Vercel (free tier)

1. Push this folder to a GitHub (or GitLab) repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your repository — Vercel auto-detects Next.js
4. Click **Deploy**

Your site will be live at a `*.vercel.app` URL. To use a custom domain, add it under **Project Settings → Domains** in the Vercel dashboard.

---

## Google Search (SEO)

The template is SEO-ready out of the box:

- Metadata (title, description, Open Graph) is generated from `restaurant.config.js → seo`
- `/sitemap.xml` is auto-generated from `app/sitemap.js`
- `/robots.txt` is generated from `app/robots.js`
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<dl>`)
- `next/image` for optimized, lazy-loaded images

To verify with Google Search Console:

1. Get your verification code from [Google Search Console](https://search.google.com/search-console)
2. Paste it into `restaurant.config.js → seo.googleVerification`
3. Uncomment the `verification` block in `app/layout.js`

---

## Project structure

```
├── config/
│   └── restaurant.config.js   ← Edit this to customize everything
├── app/
│   ├── layout.js              ← Fonts + global metadata
│   ├── page.js                ← Home page (assembles components)
│   ├── globals.css            ← Base styles
│   ├── sitemap.js             ← Auto-generated sitemap
│   └── robots.js              ← robots.txt
├── components/
│   ├── Navbar.jsx             ← Fixed nav, scroll-aware, mobile drawer
│   ├── Hero.jsx               ← Split panel hero
│   ├── About.jsx              ← Story section with pull quote
│   ├── Menu.jsx               ← Tabbed menu with categories
│   ├── HoursLocation.jsx      ← Hours table + map embed
│   └── Footer.jsx             ← Social links + quick nav
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## License

MIT — use freely for personal or commercial projects.
