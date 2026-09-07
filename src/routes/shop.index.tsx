import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categories, products, type Category } from "@/lib/products";

type Search = { filter?: Category | "All" };

export const Route = createFileRoute("/shop/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const raw = String(search['filter'] ?? "All");
    const valid = ["All", ...categories] as string[];
    return { filter: (valid.includes(raw) ? raw : "All") as Category | "All" };
  },
  head: () => ({
    meta: [
      { title: "Shop the Collection — Marlowe & Vane" },
      {
        name: "description",
        content:
          "Eight convertible pieces in cotton, silk and British wool. Shirts, dresses and garments that change shape. Prices in GBP.",
      },
      { property: "og:title", content: "Shop the Collection — Marlowe & Vane" },
      {
        property: "og:description",
        content: "Eight convertible pieces in cotton, silk and British wool. Shirts, dresses, convertible.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { filter = "All" } = Route.useSearch();
  const visible = filter === "All" ? products : products.filter((p) => p.categories.includes(filter));
  const tabs: Array<Category | "All"> = ["All", ...categories];

  return (
    <div className="mx-auto max-w-[86rem] px-5 pb-20 pt-10 md:px-10 md:pt-14">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Autumn collection</p>
          <h1 className="mt-2 text-4xl md:text-5xl">The collection</h1>
        </div>
        <nav className="flex flex-wrap gap-2" aria-label="Filter by category">
          {tabs.map((t) => (
            <Link
              key={t}
              to="/shop"
              search={{ filter: t }}
              className={`border px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                filter === t
                  ? "border-champagne text-champagne"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </Link>
          ))}
        </nav>
      </header>

      <p className="mt-6 text-sm text-muted-foreground">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"} — hover any image to see its second silhouette.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
        {visible.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
