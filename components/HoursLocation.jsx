import { restaurant } from "@/config/restaurant.config";

export default function HoursLocation() {
  const { hours, hoursNote, location, contact } = restaurant;

  return (
    <section
      id="hours"
      className="bg-primary text-on-primary py-24 md:py-32"
      aria-labelledby="hours-heading"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* ── Hours ───────────────────────────────────────────── */}
        <div>
          <p className="text-accent text-xs tracking-widest font-sans font-medium uppercase mb-6">
            Opening hours
          </p>
          <h2
            id="hours-heading"
            className="font-display text-on-primary leading-display mb-10"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            When to find us
          </h2>

          <dl className="space-y-4 font-sans">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex justify-between gap-6 pb-4 border-b border-on-primary/15 last:border-0"
              >
                <dt className="text-on-primary/70 text-xl">{row.day}</dt>
                <dd className="text-on-primary text-xl font-medium text-right">
                  {row.times}
                </dd>
              </div>
            ))}
          </dl>

          {hoursNote && (
            <p className="text-on-primary/50 text-xs font-sans mt-6 italic">
              {hoursNote}
            </p>
          )}

          {/* Contact details */}
          <div id="location" className="mt-12 space-y-2">
            <p className="text-on-primary/70 text-sm font-sans">
              {location.address}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="block text-accent text-sm font-sans hover:underline"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="block text-accent text-sm font-sans hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* ── Map ─────────────────────────────────────────────── */}
        <div className="aspect-[4/3] md:aspect-auto md:h-[480px] rounded-sm overflow-hidden">
          {location.mapEmbedUrl ? (
            <iframe
              title={`Map to ${restaurant.name}`}
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            /* Placeholder shown when no map URL is set */
            <div className="w-full h-full bg-primary/80 border border-on-primary/20 flex items-center justify-center">
              <p className="text-on-primary/40 text-sm font-sans text-center px-6">
                Add a Google Maps embed URL to<br />
                <code className="text-accent text-xs">restaurant.config.js → location.mapEmbedUrl</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
