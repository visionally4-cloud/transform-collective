import { createFileRoute } from "@tanstack/react-router";
import { journal } from "@/lib/journal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal & Lookbooks — Marlowe & Vane" },
      {
        name: "description",
        content:
          "Seasonal lookbooks and styling notes shot on film: one room and two evenings, a coat walked across east London, and a four-piece wardrobe.",
      },
      { property: "og:title", content: "Journal & Lookbooks — Marlowe & Vane" },
      {
        property: "og:description",
        content: "Seasonal lookbooks and styling notes, shot on film in London.",
      },
    ],
  }),
  component: Journal,
});

function Journal() {
  const [lead, ...rest] = journal;

  return (
    <div className="mx-auto max-w-[86rem] px-5 pb-20 pt-12 md:px-10 md:pt-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Lookbooks, notes, and one long walk</h1>
      </header>

      <article className="mt-12">
        <div className="grain overflow-hidden rounded-md">
          <img
            src={lead.image}
            alt={lead.title}
            width={1400}
            height={1000}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <div className="mt-6 max-w-3xl">
          <p className="eyebrow">
            {lead.category} — {lead.date}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">{lead.title}</h2>
          <p className="mt-4 text-sm leading-[1.85] text-muted-foreground md:text-base">{lead.standfirst}</p>
        </div>
      </article>

      <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
        {rest.map((entry) => (
          <article key={entry.slug}>
            <div className="grain overflow-hidden rounded-md">
              <img
                src={entry.image}
                alt={entry.title}
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="eyebrow mt-5">
              {entry.category} — {entry.date}
            </p>
            <h2 className="mt-2 text-2xl">{entry.title}</h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{entry.standfirst}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
