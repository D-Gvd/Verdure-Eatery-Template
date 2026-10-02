import Image from "next/image";
import { restaurant } from "@/config/restaurant.config";

export default function About() {
  const { about } = restaurant;

  return (
    <section
      id="about"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* ── Text column ─────────────────────────────────────── */}
        <div>
          <p className="text-accent text-xs tracking-widest font-sans font-medium uppercase mb-6">
            {about.eyebrow}
          </p>

          <h2
            id="about-heading"
            className="font-display text-primary leading-display mb-8"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            {about.heading}
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-4 text-text-muted font-sans text-base leading-relaxed prose-width">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* ── Photo + pull quote ──────────────────────────────── */}
        <div className="relative">
          {/* Photograph */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Pull quote — floated over the bottom of the image */}
          <blockquote
            className="md:absolute md:-bottom-8 md:-left-10 bg-primary text-on-primary
                        font-display italic px-8 py-6 max-w-xs
                        mt-6 md:mt-0"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.4 }}
          >
            &ldquo;{about.pullQuote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
