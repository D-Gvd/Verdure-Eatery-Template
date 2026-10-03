import { restaurant } from "@/config/restaurant.config";
import "./globals.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// All values come from restaurant.config.js → seo section.
export const metadata = {
  title: {
    default: restaurant.seo.siteTitle,
    template: `%s | ${restaurant.name}`,
  },
  description: restaurant.seo.description,
  metadataBase: new URL(restaurant.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: restaurant.seo.siteTitle,
    description: restaurant.seo.description,
    url: restaurant.seo.siteUrl,
    siteName: restaurant.name,
    images: [
      {
        url: restaurant.seo.ogImage,
        width: 1200,
        height: 630,
        alt: restaurant.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.seo.siteTitle,
    description: restaurant.seo.description,
    images: [restaurant.seo.ogImage],
  },
  // Uncomment and fill in restaurant.seo.googleVerification to verify with Search Console
  verification: {
    google: restaurant.seo.googleVerification,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    // font-sans and font-display are defined in tailwind.config.js
    // and pull family names from restaurant.config.js → fonts
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
