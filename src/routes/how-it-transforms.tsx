import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/lib/products";
import step1 from "@/assets/step-1.jpg";
import step2 from "@/assets/step-2.jpg";
import step3 from "@/assets/step-3.jpg";
import heroPoster from "@/assets/hero-frame.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/how-it-transforms")({
  head: () => ({
    meta: [
      { title: "How It Transforms — Marlowe & Vane" },
      {
        name: "description",
        content:
          "A step-by-step guide to changing a Marlowe & Vane garment from one silhouette to another: concealed fastenings, folded panels, sixty seconds.",
      },
      { property: "og:title", content: "How It Transforms — Marlowe & Vane" },
      {
        property: "og:description",
        content: "Concealed fastenings, folded panels, sixty seconds. Here is how each piece changes shape.",
      },
    ],
  }),
  component: HowItTransforms,
});

const steps = [
  {
    image: step1,
    title: "Find the fastening",
    copy: "Every conversion point sits inside a seam — press-studs at the shoulder, hooks at the waist, a short zip beneath the belt. Nothing is visible from the outside, in either silhouette.",
  },
  {
    image: step2,
    title: "Release the folded panel",
    copy: "The extra length is built in from the first pattern, folded and tacked into the garment. Drop it, run your thumb along the fold once, and the crease relaxes within a few minutes of wear.",
  },
  {
    image: step3,
    title: "Fasten the new shape",
    copy: "Belt it, hook it, or wrap it — whichever the piece asks for. Under a minute, no tools, no trip to a tailor. Reversing it is the same three movements backwards.",
  },
];

function HowItTransforms() {
  return (
    <div>
      <section className="grain relative h-[50vh] min-h-[22rem] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative mx-auto flex h-full max-w-[86rem] flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
          <p className="eyebrow">How it transforms</p>
          <h1 className="mt-3 max-w-[24ch] text-4xl md:text-5xl">
            Built to change shape, not to be altered
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[86rem] px-5 py-14 md:px-10 md:py-20">
        <ol className="space-y-16">
          {steps.map((s, i) => (
            <li key={s.title} className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
              <div className={`grain overflow-hidden rounded-md ${i % 2 ? "md:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-champagne">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-3xl">{s.title}</h2>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[60rem] px-5 py-14 md:px-10 md:py-20">
          <p className="eyebrow">By piece</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Instructions for each garment</h2>
          <Accordion type="single" collapsible className="mt-8">
            {products.map((p) => (
              <AccordionItem key={p.slug} value={p.slug} className="border-border">
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  <span>
                    {p.name}
                    <span className="ml-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.transforms}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="ml-4 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {p.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                  <Link
                    to="/shop/$slug"
                    params={{ slug: p.slug }}
                    className="link-underline mt-4 inline-block text-[0.7rem] uppercase tracking-[0.18em] text-champagne"
                  >
                    View {p.name}
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-[86rem] px-5 py-14 text-center md:px-10">
        <h2 className="text-3xl md:text-4xl">Ready to see them on?</h2>
        <div className="mt-6">
          <Button asChild variant="gold" size="editorialWide">
            <Link to="/shop">Shop the collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
