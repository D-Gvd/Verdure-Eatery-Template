/**
 * ============================================================
 *  RESTAURANT CONFIG — edit this file to customize your site
 * ============================================================
 *
 *  Sections:
 *    1. Identity       — name, tagline, logo
 *    2. Colors         — full palette (flows into Tailwind)
 *    3. Fonts          — Google Fonts loaded by Next.js
 *    4. SEO            — title, description, Open Graph image
 *    5. Navigation     — nav links
 *    6. Hero           — headline, image, CTA
 *    7. About          — story section
 *    8. Menu           — categories + items
 *    9. Hours          — opening hours per day
 *   10. Location       — address + Google Maps embed URL
 *   11. Contact        — phone, email
 *   12. Social         — Instagram, Facebook, etc.
 */

const restaurant = {
  // ── 1. Identity ────────────────────────────────────────────
  name: "Verdure",
  tagline: "Seasonal cooking. Honest food. A table for everyone.",
  /** Path to a logo file in /public, or null to use the text name */
  logoPath: null,

  // ── 2. Colors ──────────────────────────────────────────────
  // These feed directly into tailwind.config.js — change them here
  // and they update everywhere on the site.
  colors: {
    /** Main brand color — used for the hero panel, buttons, accents */
    primary: "#1E3A2F",
    /** Warm background for most pages */
    background: "#F8F5EE",
    /** Slightly deeper background for cards / alternating sections */
    surface: "#EEEAE0",
    /** Body text */
    text: "#181510",
    /** Secondary / muted text */
    muted: "#7A7060",
    /** Warm accent color — links, highlights, prices */
    accent: "#C8A96E",
    /** Subtle borders and dividers */
    border: "#DDD8CE",
    /** Text that sits on the primary (green) background */
    onPrimary: "#F8F5EE",
  },

  // ── 3. Fonts ───────────────────────────────────────────────
  // Google Font names. Change these in app/layout.js too (next/font).
  fonts: {
    display: "DM Serif Display", // headings
    body: "DM Sans",             // body text
  },

  // ── 4. SEO ─────────────────────────────────────────────────
  seo: {
    siteTitle: "Verdure — Seasonal Kitchen",
    description:
      "Verdure is a neighbourhood eatery serving seasonal, ingredient-driven cooking. Find us at 42 Elm Street. Open Tuesday through Sunday.",
    /** Absolute URL where your site will live */
    siteUrl: "https://verdure.example.com",
    /** Absolute URL to the Open Graph share image (1200×630px recommended) */
    ogImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    /** Your Google Search Console verification code (or remove the key) */
    googleVerification: "",
  },

  // ── 5. Navigation ──────────────────────────────────────────
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Hours", href: "#hours" },
    { label: "Find us", href: "#location" },
  ],
  /** Label for the nav CTA button */
  navCta: { label: "Reserve a table", href: "tel:+15550001234" },

  // ── 6. Hero ────────────────────────────────────────────────
  hero: {
    /** Eyebrow text above the restaurant name */
    eyebrow: "Est. 2019 · Elm Street",
    /** Main headline — can be different from restaurant.name */
    headline: "Good food,\ngrown close.",
    /** Subheading shown below the headline */
    subheading:
      "We cook with what's in season, sourced from farmers within 50 miles. Simple as that.",
    cta: { label: "See the menu", href: "#menu" },
    /** Unsplash or your own image URL */
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=85",
    imageAlt: "Inside Verdure — warm lighting, wooden tables",
  },

  // ── 7. About ───────────────────────────────────────────────
  about: {
    eyebrow: "Our story",
    heading: "A kitchen rooted in the seasons.",
    paragraphs: [
      "Verdure started as a weekend pop-up in a borrowed kitchen. We had a single table, a chalkboard menu, and produce from two local farms. Five years and two neighbourhoods later, the idea hasn't changed.",
      "Everything on the plate travels less than fifty miles. The menu changes every few weeks — not because we're restless, but because that's how ingredients work. When courgettes are gone, courgettes are gone.",
    ],
    /** Pull quote shown large — keep it short */
    pullQuote: "Eat what's here, while it's here.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85",
    imageAlt: "Chef plating a dish at Verdure",
  },

  // ── 8. Menu ────────────────────────────────────────────────
  menu: {
    note: "Menu changes seasonally. Ask your server about today's specials.",
    categories: [
      {
        id: "starters",
        label: "Starters",
        items: [
          {
            name: "Roasted carrot soup",
            description: "Brown butter, toasted seeds, sourdough croutons",
            price: "9",
            tag: null,
          },
          {
            name: "Burrata & heritage tomato",
            description: "Aged balsamic, basil oil, flaky salt",
            price: "13",
            tag: "Seasonal",
          },
          {
            name: "Crispy polenta bites",
            description: "Romesco, grated manchego",
            price: "10",
            tag: "Vegan option",
          },
          {
            name: "Smoked salmon rillettes",
            description: "Cucumber, dill crème fraîche, rye crackers",
            price: "12",
            tag: null,
          },
        ],
      },
      {
        id: "mains",
        label: "Mains",
        items: [
          {
            name: "Pan-roasted chicken thigh",
            description: "White bean cassoulet, salsa verde, grilled bread",
            price: "22",
            tag: null,
          },
          {
            name: "Fettuccine with wild mushroom",
            description: "Confit garlic cream, parmesan, fresh thyme",
            price: "18",
            tag: "Vegetarian",
          },
          {
            name: "Grass-fed beef bavette",
            description: "Roasted shallots, pomme purée, red wine jus",
            price: "28",
            tag: null,
          },
          {
            name: "Seared cod fillet",
            description: "Pea & potato hash, brown butter, capers",
            price: "24",
            tag: null,
          },
          {
            name: "Squash & lentil dahl",
            description: "Coconut yogurt, crispy shallots, flatbread",
            price: "16",
            tag: "Vegan",
          },
        ],
      },
      {
        id: "desserts",
        label: "Desserts",
        items: [
          {
            name: "Salted caramel tart",
            description: "Shortcrust pastry, whipped crème fraîche",
            price: "8",
            tag: null,
          },
          {
            name: "Dark chocolate mousse",
            description: "Candied hazelnuts, sea salt",
            price: "8",
            tag: "Gluten-free",
          },
          {
            name: "Seasonal fruit crumble",
            description: "Oat & almond topping, vanilla ice cream",
            price: "9",
            tag: "Ask about today's fruit",
          },
        ],
      },
      {
        id: "drinks",
        label: "Drinks",
        items: [
          {
            name: "House red wine",
            description: "Grenache blend, Languedoc, France",
            price: "8 / 32",
            tag: "Glass / Bottle",
          },
          {
            name: "House white wine",
            description: "Vermentino, Sardinia, Italy",
            price: "8 / 32",
            tag: "Glass / Bottle",
          },
          {
            name: "Natural wine of the week",
            description: "Ask your server — changes weekly",
            price: "10",
            tag: null,
          },
          {
            name: "Craft beer",
            description: "Rotating local tap",
            price: "6",
            tag: null,
          },
          {
            name: "Hibiscus lemonade",
            description: "House-made, lightly sparkling",
            price: "5",
            tag: "Non-alcoholic",
          },
          {
            name: "Espresso / Flat white",
            description: "Single-origin beans from Elm Roasters",
            price: "3.5 / 4",
            tag: null,
          },
        ],
      },
    ],
  },

  // ── 9. Hours ───────────────────────────────────────────────
  hours: [
    { day: "Monday", times: "Closed" },
    { day: "Tuesday – Friday", times: "12:00 – 15:00  ·  18:00 – 22:00" },
    { day: "Saturday", times: "11:00 – 23:00" },
    { day: "Sunday", times: "11:00 – 17:00" },
  ],
  hoursNote: "Last food orders 30 minutes before closing.",

  // ── 10. Location ───────────────────────────────────────────
  location: {
    address: "42 Elm Street, Portland, OR 97201",
    /** Paste a Google Maps embed URL here (Maps → Share → Embed a map → copy src="...") */
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0!2d-122.6784!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzQyLjMiVw!5e0!3m2!1sen!2sus!4v1234567890",
  },

  // ── 11. Contact ────────────────────────────────────────────
  contact: {
    phone: "+1 (555) 000-1234",
    email: "hello@verdure.example.com",
  },

  // ── 12. Social ─────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    /** Set to null to hide a platform */
    twitter: null,
  },
};

module.exports = { restaurant };
