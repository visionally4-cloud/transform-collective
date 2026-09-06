import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Newsletter } from "@/components/newsletter";
import { products } from "@/lib/products";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-frame.jpg";
import step1 from "@/assets/step-1.jpg";
import step2 from "@/assets/step-2.jpg";
import step3 from "@/assets/step-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marlowe & Vane — Clothes That Change Shape" },
      {
        name: "description",
        content:
          "British-made convertible clothing: a poplin shirt that lengthens into a dress, a trench that shortens into a jacket. Shop the collection.",
      },
      { property: "og:title", content: "Marlowe & Vane — Clothes That Change Shape" },
      {
        property: "og:description",
        content: "British-made convertible clothing. One garment, two silhouettes. Shop the collection.",
      },
    ],
  }),
  component: Home,
});

const showcase = [
  { image: step1, title: "Release", copy: "Concealed snaps and hooks sit inside the seam, never on show." },
  { image: step2, title: "Unfold", copy: "A second panel is folded into the garment from the start." },
  { image: step3, title: "Fasten", copy: "Belt, hook, wrap — a minute at most, no tools, no re-tailoring." },
];

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="grain relative h-[78vh] min-h-[30rem] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        <div className="relative mx-auto flex h-full max-w-[86rem] flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
          <p className="eyebrow rise-in">Autumn collection — made in London</p>
          <h1 className="rise-in mt-4 max-w-[22ch] text-[2.7rem] leading-[1.02] md:text-6xl lg:text-7xl">
            One garment. <em className="italic text-champagne">Two</em> silhouettes.
          </h1>
          <div className="rise-in mt-8">
            <Button asChild variant="solidLight" size="editorialWide">
              <Link to="/shop">Shop the collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[86rem] px-5 py-14 md:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Pieces that do two jobs</h2>
          </div>
          <Link
            to="/shop"
            className="link-underline flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-champagne"
          >
            View all eight <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* Transform showcase */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[86rem] px-5 py-16 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Transform</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Three movements, sixty seconds</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Every piece is drafted twice — once for each silhouette — so neither one feels like a compromise.
              Here is what changing shape actually looks like.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {showcase.map((s, i) => (
              <li key={s.title}>
                <div className="grain overflow-hidden rounded-md">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-xl">{s.title}</h3>
                <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="quiet" size="editorial">
              <Link to="/how-it-transforms">See it step by step</Link>
            </Button>
            <Button asChild variant="gold" size="editorial">
              <Link to="/shop">Shop convertible pieces</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* One-line story teaser */}
      <section className="mx-auto max-w-[86rem] px-5 py-10 md:px-10 md:py-12">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We began in a Bermondsey workroom with one stubborn question: why buy two garments?{" "}
          <Link to="/our-story" className="link-underline text-champagne">
            Our story
          </Link>
        </p>
      </section>

      {/* Signup */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[86rem] gap-8 px-5 py-14 md:grid-cols-2 md:items-center md:px-10 md:py-20">
          <div>
            <h2 className="text-3xl md:text-4xl">Early access, once a month</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              New pieces are cut in small runs. Subscribers see them a week before anyone else.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
