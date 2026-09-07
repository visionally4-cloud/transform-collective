import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct, products, type Product } from "@/lib/products";
import clipVideo from "@/assets/hero.mp4.asset.json";
import clipPoster from "@/assets/hero-frame.jpg";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Piece unavailable — Marlowe & Vane" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.transforms} | Marlowe & Vane`;
    return {
      meta: [
        { title },
        { name: "description", content: `${product.blurb} ${product.materials}. ${formatPrice(product.price)}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: product.blurb },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="mt-3 text-3xl md:text-4xl">We can&rsquo;t find that piece</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        It may have sold through. The full collection is only a click away.
      </p>
      <Button asChild variant="gold" size="editorial" className="mt-8">
        <Link to="/shop">Shop the collection</Link>
      </Button>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const gallery = [
    { src: product.images[0]!, caption: `${product.name} — first silhouette` },
    { src: product.images[1]!, caption: `${product.name} — transformed` },
  ];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const onAdd = () => {
    if (!size) return;
    add({ slug: product.slug, name: product.name, price: product.price, size, image: product.images[0]! });
  };

  return (
    <div className="mx-auto max-w-[86rem] px-5 pb-24 pt-8 md:px-10 md:pt-12">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Collection
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        {/* Gallery */}
        <div>
          <div
            className="grain relative overflow-hidden rounded-md bg-surface"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
            }}
          >
            <img
              src={gallery[active]!.src}
              alt={gallery[active]!.caption}
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700"
              style={{ transformOrigin: origin, transform: zoom ? "scale(1.6)" : "scale(1)" }}
            />
            <span className="pointer-events-none absolute bottom-3 left-3 bg-background/70 px-2 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              Hover to zoom
            </span>
          </div>

          <div className="mt-3 flex gap-3">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={g.caption}
                aria-current={i === active}
                className={`grain w-20 overflow-hidden rounded-sm border transition-colors md:w-24 ${
                  i === active ? "border-champagne" : "border-border hover:border-muted-foreground"
                }`}
              >
                <img src={g.src} alt="" width={200} height={250} className="aspect-[4/5] w-full object-cover" />
              </button>
            ))}
          </div>

          {/* Transformation clip */}
          <figure className="mt-10">
            <div className="grain overflow-hidden rounded-md bg-surface">
              <video
                src={clipVideo.url}
                poster={clipPoster}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Filmed in the studio, one take: {product.transforms.toLowerCase()}.
            </figcaption>
          </figure>
        </div>

        {/* Buy column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-champagne">{product.transforms}</p>
          <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{product.name}</h1>
          <p className="mt-3 text-lg tabular-nums text-muted-foreground">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-[46ch] text-sm leading-[1.85] text-muted-foreground md:text-base">
            {product.blurb} Made in England in small runs, cut to be worn two ways so it earns its place in your
            wardrobe twice over.
          </p>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">{product.materials}</p>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <p className="eyebrow">Size</p>
              <span className="text-xs text-muted-foreground">
                {size ? `Selected: ${size}` : "Choose a size"}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-14 border px-4 py-3 text-xs uppercase tracking-[0.18em] transition-colors ${
                    size === s
                      ? "border-champagne text-champagne"
                      : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="gold"
            size="editorialWide"
            className="mt-6 w-full"
            disabled={!size}
            onClick={onAdd}
          >
            {size ? "Add to bag" : "Select a size"}
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Free UK delivery and returns. Ships in 2&ndash;3 working days.
          </p>

          <Accordion type="single" collapsible className="mt-10 border-t border-border">
            <AccordionItem value="fit">
              <AccordionTrigger className="text-left text-sm uppercase tracking-[0.14em]">
                Size &amp; fit
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {product.fit.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="transform">
              <AccordionTrigger className="text-left text-sm uppercase tracking-[0.14em]">
                How it transforms
              </AccordionTrigger>
              <AccordionContent>
                <ol className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {product.steps.map((s, i) => (
                    <li key={s}>
                      <span className="text-champagne">{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
                <Link to="/how-it-transforms" className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.18em]">
                  See the full method
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger className="text-left text-sm uppercase tracking-[0.14em]">
                Care
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {product.care.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="mt-24 border-t border-border pt-12">
        <h2 className="text-2xl md:text-3xl">Wear it with</h2>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
