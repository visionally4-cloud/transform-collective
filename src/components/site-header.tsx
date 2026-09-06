import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/how-it-transforms", label: "How It Transforms" },
  { to: "/our-story", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { open, count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[86rem] items-center gap-6 px-5 md:h-20 md:px-10">
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link to="/" className="font-display text-lg tracking-[0.3em] uppercase md:text-xl">
          Marlowe&nbsp;&amp;&nbsp;Vane
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[0.72rem] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-champagne" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={open}
          className="ml-auto flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] md:ml-8"
          aria-label="Open bag"
        >
          <ShoppingBag className="size-4" />
          <span className="tabular-nums">{count}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-display text-2xl"
              activeProps={{ className: "text-champagne" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
