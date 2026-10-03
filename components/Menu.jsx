"use client";

import { useState } from "react";
import { restaurant } from "@/config/restaurant.config";

function MenuItem({ item }) {
  return (
    <div className="flex items-stretch justify-between gap-4 py-4 border-b border-border last:border-0">
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-sans font-medium text-text-main text-base">
            {item.name}
          </h3>
          {item.tag && (
            <span className="text-accent text-xs font-sans shrink-0">
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-text-muted text-sm mt-0.5 font-sans">
            {item.description}
          </p>
        )}
      </div>

      {/* ── Price: single or sized ── */}
      {item.sizes ? (
        <div className="flex flex-col justify-center items-end gap-1 shrink-0">
          {item.sizes.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-text-muted text-xs font-sans">{s.label}</span>
              <span className="text-text-main font-sans text-sm font-medium tabular-nums">
                ₱{s.price}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <span className="flex items-center text-text-main font-sans text-sm font-medium shrink-0 tabular-nums">
          ₱{item.price}
        </span>
      )}
    </div>
  );
}

export default function Menu() {
  const { menu } = restaurant;
  const [activeId, setActiveId] = useState(menu.categories[0].id);

  const activeCategory = menu.categories.find((c) => c.id === activeId);

  return (
    <section
      id="menu"
      className="bg-background py-24 md:py-32"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-accent text-xs tracking-widest font-sans font-medium uppercase mb-4">
            What we&rsquo;re serving
          </p>
          <h2
            id="menu-heading"
            className="font-display text-primary leading-display"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            The menu
          </h2>
          {menu.note && (
            <p className="text-text-muted text-sm font-sans mt-3 italic">
              {menu.note}
            </p>
          )}
        </div>

        {/* Category tabs */}
        <div
          className="flex gap-1 border-b border-border mb-10 overflow-x-auto"
          role="tablist"
          aria-label="Menu categories"
        >
          {menu.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveId(cat.id)}
              className={`shrink-0 text-sm font-sans font-medium px-5 py-3 border-b-2 transition-colors ${
                activeId === cat.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-muted hover:text-text-main"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items panel */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
        >
          <div>
            {activeCategory.items.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}

          {activeCategory.Flavors && (
            <div className="mt-2">
              <p className="text-sm font-sans font-medium text-primary">
                Available {activeCategory.Flavors.label}:
              </p>
              <p className="text-accent text-xs font-sans shrink-0">
                {activeCategory.Flavors.available}
              </p>
            </div>
          )}
          </div>
        </div>

        {/* CTA hint */}
        <p className="mt-10 text-text-muted text-sm font-sans">
          Prices exclude tax. Please let us know about any allergies.{" "}
          <a href={`mailto:${restaurant.contact.email}`} className="text-accent underline underline-offset-2">
            Contact us
          </a>{" "}
          for private dining enquiries.
        </p>
      </div>
    </section>
  );
}
