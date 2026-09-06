import { Link } from "@tanstack/react-router";
import { Newsletter } from "@/components/newsletter";
import { products } from "@/lib/products";

export function SiteFooter() {
  const strip = [...products.slice(0, 3), ...products.slice(4, 7)];

  return (
    <footer className="border-t border-border">
      <section className="border-b border-border px-5 py-12 md:px-10">
        <div className="mx-auto max-w-[86rem]">
          <p className="eyebrow">@marloweandvane</p>
          <div className="mt-5 grid grid-cols-3 gap-2 md:grid-cols-6">
            {strip.map((p) => (
              <Link key={p.slug} to="/shop/$slug" params={{ slug: p.slug }} className="grain block overflow-hidden">
                <img
                  src={p.images[1]}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-square w-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[86rem] gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-xl tracking-[0.28em] uppercase">Marlowe &amp; Vane</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            One letter a month: new pieces, fittings in London, and the occasional note from the workroom.
          </p>
          <div className="mt-5">
            <Newsletter compact />
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          <p className="eyebrow">Shop</p>
          <Link to="/shop" className="block text-muted-foreground hover:text-foreground">All pieces</Link>
          <Link to="/shop" search={{ filter: "Convertible" }} className="block text-muted-foreground hover:text-foreground">
            Convertible
          </Link>
          <Link to="/how-it-transforms" className="block text-muted-foreground hover:text-foreground">
            How it transforms
          </Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Stockists</Link>
        </nav>

        <nav className="space-y-3 text-sm">
          <p className="eyebrow">House</p>
          <Link to="/our-story" className="block text-muted-foreground hover:text-foreground">Our story</Link>
          <Link to="/journal" className="block text-muted-foreground hover:text-foreground">Journal</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact</Link>
          <a href="https://instagram.com" className="block text-muted-foreground hover:text-foreground">Instagram</a>
        </nav>
      </div>

      <div className="mx-auto flex max-w-[86rem] flex-col gap-3 border-t border-border px-5 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Marlowe &amp; Vane — a demonstration site</p>
        <p className="flex gap-6">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Shipping &amp; Returns</span>
        </p>
      </div>
    </footer>
  );
}
