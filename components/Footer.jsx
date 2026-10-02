import { restaurant } from "@/config/restaurant.config";

// Simple SVG icons for social platforms
const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export default function Footer() {
  const { name, nav, social, contact, seo } = restaurant;
  const year = new Date().getFullYear();

  const activeSocials = Object.entries(social).filter(
    ([, url]) => url !== null
  );

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8 items-start">

          {/* Brand + address */}
          <div>
            <p className="font-display text-primary text-xl mb-2">{name}</p>
            <p className="text-text-muted text-sm font-sans">
              {restaurant.location.address}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="text-text-muted text-sm font-sans hover:text-accent transition-colors mt-1 block"
            >
              {contact.phone}
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm font-sans hover:text-text-main transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          {activeSocials.length > 0 && (
            <div className="flex gap-4">
              {activeSocials.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on ${platform}`}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  {icons[platform]}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-text-muted text-xs font-sans">
            &copy; {year} {name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-sans">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
