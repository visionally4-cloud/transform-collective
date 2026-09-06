import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
      aria-label={product.name}
    >
      <div className="grain relative overflow-hidden rounded-md bg-surface">
        <img
          src={product.images[0]}
          alt={`${product.name} — ${product.blurb}`}
          width={1024}
          height={1280}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img
          src={product.images[1]}
          alt={`${product.name} shown in its second silhouette`}
          width={1024}
          height={1280}
          loading="lazy"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <span className="absolute left-3 top-3 bg-background/75 px-2 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-champagne backdrop-blur">
          {product.transforms}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground tabular-nums">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
    </Link>
  );
}
