"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { restaurant } from "@/config/restaurant.config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo / Name */}
        <Link
          href="#"
          onClick={handleNavClick}
          className={`font-display text-xl tracking-wide transition-colors ${
            scrolled ? "text-primary" : "text-on-primary"
          }`}
        >
          {restaurant.logoPath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={restaurant.logoPath}
              alt={restaurant.name}
              className="h-8 w-auto"
            />
          ) : (
            restaurant.name
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {restaurant.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-muted" : "text-on-primary/80"
              }`}
            >
              {link.label}
            </a>
          ))}

          {restaurant.navCta && (
            <a
              href={restaurant.navCta.href}
              className={`text-sm font-medium px-4 py-2 rounded-sm border transition-colors ${
                scrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-on-primary"
                  : "border-on-primary/60 text-on-primary hover:border-on-primary"
              }`}
            >
              {restaurant.navCta.label}
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          className={`md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 ${
            scrolled ? "text-primary" : "text-on-primary"
          }`}
        >
          <span
            className={`block h-px w-full bg-current transition-transform origin-center ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-current transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-current transition-transform origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {restaurant.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-text-main font-medium text-lg border-b border-border pb-4 last:border-0 last:pb-0"
            >
              {link.label}
            </a>
          ))}
          {restaurant.navCta && (
            <a
              href={restaurant.navCta.href}
              onClick={handleNavClick}
              className="mt-2 text-center text-sm font-medium px-4 py-3 bg-primary text-on-primary rounded-sm"
            >
              {restaurant.navCta.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
