import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Marlowe & Vane" },
      {
        name: "description",
        content:
          "A founder's note from our Bermondsey workroom: why we draft every garment twice, who makes them, and how we use less cloth.",
      },
      { property: "og:title", content: "Our Story — Marlowe & Vane" },
      {
        property: "og:description",
        content: "Why we draft every garment twice, who makes them, and how we use less cloth.",
      },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <div className="mx-auto max-w-[86rem] px-5 pb-20 pt-12 md:px-10 md:pt-16">
      <header className="max-w-3xl">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-3 text-4xl leading-tight md:text-5xl">
          We kept making the same garment twice. So we stopped.
        </h1>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <article className="space-y-5 text-sm leading-[1.85] text-muted-foreground md:text-base">
          <p>
            Marlowe &amp; Vane began in 2021 in a cold Bermondsey workroom with two machines, a borrowed
            steamer, and a shirt I couldn't stop cutting apart. I wanted it to be a shirt in the morning and
            something else entirely by eight in the evening — not a compromise between the two.
          </p>
          <p>
            It took eleven attempts. The eleventh became The Ashcombe, and it taught us the rule we still work
            to: draft both silhouettes fully, then find the fastening that joins them. Never the other way
            round. If a piece only really works in one shape, it doesn't leave the workroom.
          </p>
          <p>
            Everything is made within ninety minutes of London by three small workshops we've used since the
            beginning. Our cloth comes from mills in Yorkshire and Como, and we buy in short runs — enough for
            the season, not for a warehouse. Because a convertible piece replaces two garments, we cut roughly
            forty per cent less cloth per wardrobe than we would otherwise. That is the whole of our
            sustainability claim, and we'd rather it stayed that plain.
          </p>
          <p className="text-foreground">— Imogen Vane, founder</p>
          <p>
            <Link to="/shop" className="link-underline text-champagne">
              Shop the collection
            </Link>
          </p>
        </article>

        <div className="space-y-6">
          <div className="grain overflow-hidden rounded-md">
            <img
              src={founder}
              alt="Imogen Vane at her workbench"
              width={1200}
              height={1400}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div className="grain overflow-hidden rounded-md">
            <img
              src={atelier}
              alt="Pinning a seam in the Bermondsey workroom"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
        {[
          {
            t: "Craftsmanship",
            c: "Half-canvassed fronts, felled seams, corozo and horn buttons. Conversions are tested to two hundred cycles before a piece is signed off.",
          },
          {
            t: "Cloth",
            c: "British lambswool and Donegal-flecked wool, Egyptian cotton poplin, 19–22mm silk. Short runs, mill-traced.",
          },
          {
            t: "Made in England",
            c: "Three workshops within ninety minutes of London. Repairs and re-fittings handled in-house, for as long as you own the piece.",
          },
        ].map((b) => (
          <div key={b.t}>
            <h2 className="text-xl">{b.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.c}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
