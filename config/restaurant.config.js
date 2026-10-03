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
  name: "Frying Friet",
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
    siteUrl: "https://verdure-demo.vercel.app",
    /** Absolute URL to the Open Graph share image (1200×630px recommended) */
    ogImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    /** Your Google Search Console verification code (or remove the key) */
    googleVerification: "q7iYaySCvrg8nWa6mu6oHSadfXncbMp0GY_qedzCCFg",
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
    eyebrow: "Est. 2026 · Pacita Avenue",
    /** Main headline — can be different from restaurant.name */
    headline: "Good food,\ngrown close.",
    /** Subheading shown below the headline */
    subheading:
      "Serving the best, mouthwatering flavored chicken wings in the south!",
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
    note: null,
    categories: [
      {
        id: "fries",
        label: "Fries",
        items: [
          {
            name: "Classic Fries",
            description: "Himalayan Salt & Parmesan Cheese and choose (1) dipping sauce ",
            sizes: [
              {label: "Small", price: "100"},
              {label: "Large", price: "200"}
            ],
            tag: null,
          },
          {
            name: "Flavored Fries",
            description: "Cheese, Spicy Cheese, Sour Cream, BBQ, Spicy BBQ + (1) dipping sauce",
            sizes: [
              {label: "Small", price: "130"},
              {label: "Medium", price: "180"},
              {label: "Large", price: "250"},
            ],
            tag: null,
          },
          {
            name: "Cheesy Loaded Fries",
            description: "Himalayan Salt, Parmesan Cheese, Cheddar Cheese w/ Overloaded Dipping Sauce",
            sizes: [
              {label: "Small", price: "150"},
              {label: "Medium", price: "200"},
              {label: "Large", price: "250"},
            ],
            tag: null,
          },
        ],
        Flavors:
          {label: "Dipping Sauce Flavors", available: "Cheese, Garlic Mayo, Ketchup, Hot Sauce"},
      },
      {
        id: "single order",
        label: "Single Order",
        items: [
          {
            name: "2 pcs Wings w/ Rice",
            description: "Choose (1) flavor of chicken wings",
            price: "130",
            tag: null,
          },
          {
            name: "3 pcs Wings w/ Rice",
            description: "Choose (1) flavor of chicken wings",
            price: "160",
            tag: null,
          },
          {
            name: "4 pcs Wings w/ Rice",
            description: "Choose (2) flavors of chicken wings",
            price: "200",
            tag: null,
          },
        ],
        Flavors:
          {label: "Chicken Wings Flavors", available: "FF Classic Buffalo Wings (Mild, Spicy, Super Spicy), Korean BBQ (Spicy), Lemon Glaze, Hickory BBQ, Yang Yeom, Salted Egg (Mild), Sweet & Sour, Honey Mustard, Smokey BBQ, Honey Garlic, Salt & Pepper, Garlic Parmesan, Japanese Teriyaki, Cheesy Bacon"},
      },
      {
        id: "ff platter",
        label: "FF Platter",
        items: [
          {
            name: "FFP1",
            description: "6 pcs chicken wings",
            price: "320",
            tag: "(2) flavors to choose",
          },
          {
            name: "FFP2",
            description: "12 pcs chicken wings",
            price: "650",
            tag: "(3) flavors to choose",
          },
          {
            name: "FFP3",
            description: "16 pcs chicken wings",
            price: "850",
            tag: "(4) flavors to choose",
          },
          {
            name: "FFP4",
            description: "20 pcs chicken wings",
            price: "1,060",
            tag: "(4) flavors to choose",
          },
          {
            name: "FFP5",
            description: "30 pcs chicken wings",
            price: "1,590",
            tag: "(5) flavors to choose",
          },
        ],
        Flavors:
          {label: "Chicken Wings Flavors", available: "FF Classic Buffalo Wings (Mild, Spicy, Super Spicy), Korean BBQ (Spicy), Lemon Glaze, Hickory BBQ, Yang Yeom, Salted Egg (Mild), Sweet & Sour, Honey Mustard, Smokey BBQ, Honey Garlic, Salt & Pepper, Garlic Parmesan, Japanese Teriyaki, Cheesy Bacon"},
      },
      {
        id: "unli",
        label: "UNLI",
        items: [
          {
            name: "2 Pcs Wings w/ Unli Rice",
            description: null,
            price: "170",
            tag: "(1) flavor to choose",
          },
          {
            name: "2 Pcs Wings w/ Unli Rice & Ice Tea",
            description: null,
            price: "200",
            tag: "(1) flavor to choose",
          },
          {
            name: "UNLI EVERYTHING",
            description: "Unli Wings, Unli Rice, Unli Fries, Unli Drinks",
            price: "409",
            tag: null,
          },
        ],
      },
      {
        id: "ff bucket",
        label: "FF Bucket",
        items: [
          {
            name: "FFB1",
            description: "Bucket of 5 + 1 Beers",
            price: "650",
            tag: null,
          },
          {
            name: "FFB2",
            description: "Bucket of 5 + 1 Beers w/ Fries",
            price: "750",
            tag: null,
          },
          {
            name: "FFB3",
            description: "Bucket of 5 + 1 Beers w/ Wings",
            price: "900",
            tag: null,
          },
          {
            name: "FFB4",
            description: "Bucket of 5 + 1 Beers w/ Fries & Wings",
            price: "1,000",
            tag: null,
          },
        ],
        Flavors:
          {label: "Beer", available: "San Mig Light, San Mig Flavored Beer, Pale Pilsen, Red Horse"},
      },
      {
        id: "extras",
        label: "Extras",
        items: [
          {
            name: "Dipping Sauce",
            description: "Cheese, Garlic Mayo, Blue Cheese, Sriracha Mayo",
            price: "30",
            tag: null,
          },
          {
            name: "Extra Rice",
            description: null,
            price: "35",
            tag: null,
          },
          {
            name: "Bottled Water",
            description: null,
            price: "30",
            tag: null,
          },
          {
            name: "Soda in can",
            description: "Coca Cola, Coca Cola Zero, Sprite, Royal",
            price: "85",
            tag: null,
          },
          {
            name: "Soda in can",
            description: "Mug",
            price: "105",
            tag: null,
          },
        ],
      },
    ],
  },

  // ── 9. Hours ───────────────────────────────────────────────
  hours: [
    { day: "Open Daily", times: "2PM - 2AM" },
  ],
  hoursNote: "Last food orders 30 minutes before closing.",

  // ── 10. Location ───────────────────────────────────────────
  location: {
    address: "83V4+8VM Goodings, Pacita Avenue, San Pedro, Laguna, Philippines, 4023",
    /** Paste a Google Maps embed URL here (Maps → Share → Embed a map → copy src="...") */
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0526268529093!2d121.05716539999997!3d14.343333099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7001fdaa6cb%3A0x7af2ef4c14272145!2sFRYING%20FRIET%20BAR%20AND%20RESTAURANT!5e1!3m2!1sen!2sph!4v1791022137742!5m2!1sen!2sph",
  },

  // ── 11. Contact ────────────────────────────────────────────
  contact: {
    phone: "+63 0912 345 6789",
    // email: "yourstyleph.bymj@gmail.com",
    email: "sample@email.com",
  },

  // ── 12. Social ─────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    /** Set to null to hide a platform */
    twitter: null,
  },
};

module.exports = { restaurant };
