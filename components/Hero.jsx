// import Image from "next/image";
// import { restaurant } from "@/config/restaurant.config";

// export default function Hero() {
//   const { hero } = restaurant;

//   // Break the headline on the literal \n in the config string
//   const headlineLines = hero.headline.split("\n");

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col md:flex-row"
//       aria-label="Welcome"
//     >
//       {/* ── Left panel: brand content ──────────────────────── */}
//       <div className="relative z-10 flex items-center min-h-screen bg-primary md:w-[42%] px-8 sm:px-12 xl:px-16 py-28 md:py-0">
//         <div className="max-w-sm w-full">
//           {/* Eyebrow */}
//           <p className="text-accent text-xs tracking-widest font-sans font-medium mb-8 uppercase">
//             {hero.eyebrow}
//           </p>

//           {/* Headline */}
//           <h1 className="font-display text-on-primary leading-display mb-6"
//             style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}>
//             {headlineLines.map((line, i) => (
//               <span key={i} className="block">
//                 {line}
//               </span>
//             ))}
//           </h1>

//           {/* Subheading */}
//           <p className="text-on-primary/65 font-sans text-base leading-relaxed mb-10 prose-width">
//             {hero.subheading}
//           </p>

//           {/* CTA */}
//           <a
//             href={hero.cta.href}
//             className="inline-block text-sm font-medium font-sans px-6 py-3 bg-accent text-primary
//                        hover:bg-accent/90 transition-colors rounded-sm"
//           >
//             {hero.cta.label}
//           </a>

//           {/* Divider line — decorative element that spans from panel to photo on desktop */}
//           <div className="hidden md:block absolute right-0 top-1/2 w-px h-32 -translate-y-1/2 bg-on-primary/10" />
//         </div>
//       </div>

//       {/* ── Right panel: photograph ─────────────────────────── */}
//       <div className="relative h-64 md:h-auto md:flex-1">
//         <Image
//           src={hero.image}
//           alt={hero.imageAlt}
//           fill
//           className="object-cover"
//           priority
//           sizes="(max-width: 768px) 100vw, 58vw"
//         />
//         {/* Subtle darkening at the seam where panels meet */}
//         <div className="hidden md:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary/20 to-transparent" />
//       </div>
//     </section>
//   );
// }

// ------------

import Image from "next/image";
import { restaurant } from "@/config/restaurant.config";

export default function Hero() {
  const { hero } = restaurant;

  const headlineLines = hero.headline.split("\n");

  return (
    <section
      id="home"
      // Mobile: stack vertically. Desktop: side-by-side, full viewport height.
      className="flex flex-col md:flex-row min-h-screen"
      aria-label="Welcome"
    >
      {/* ── Text panel — bottom on mobile, left on desktop ───── */}
      <div className="relative z-10 flex flex-1 items-center bg-primary md:w-[42%] px-8 sm:px-12 xl:px-16 py-14 md:py-0">
        <div className="max-w-sm w-full">
          {/* Eyebrow */}
          <p className="text-accent text-xs tracking-widest font-sans font-medium mb-6 md:mb-8 uppercase">
            {hero.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-display text-on-primary leading-display mb-5 md:mb-6"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
          >
            {headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p className="text-on-primary/65 font-sans text-base leading-relaxed mb-8 md:mb-10 prose-width">
            {hero.subheading}
          </p>

          {/* CTA */}
          <a
            href={hero.cta.href}
            className="inline-block text-sm font-medium font-sans px-6 py-3 bg-accent text-primary
                       hover:bg-accent/90 transition-colors rounded-sm"
          >
            {hero.cta.label}
          </a>

          {/* Decorative seam line — desktop only */}
          <div className="hidden md:block absolute right-0 top-1/2 w-px h-32 -translate-y-1/2 bg-on-primary/10" />
        </div>
      </div>

      {/* ── Image — top on mobile, right panel on desktop ────── */}
      {/* Reordered in the DOM so it renders first on mobile */}
      <div className="relative h-[50vh] order-last md:order-last md:h-auto md:flex-1">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        {/* Seam gradient — desktop only */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

    </section>
  );
}