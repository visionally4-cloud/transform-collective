import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, remove, setQty } = useCart();

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[26rem] flex-col border-l border-border bg-surface transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="text-lg">Your bag</h2>
          <button onClick={close} aria-label="Close bag" className="text-muted-foreground hover:text-foreground">
            <X className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <p className="text-sm text-muted-foreground">Nothing here yet.</p>
            <Button asChild variant="quiet" size="editorial" onClick={close}>
              <Link to="/shop">Browse the collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 py-5">
                  <img
                    src={line.image}
                    alt={line.name}
                    loading="lazy"
                    className="h-28 w-20 shrink-0 object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <p className="text-base">{line.name}</p>
                      <p className="text-sm text-muted-foreground">{formatPrice(line.price * line.qty)}</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Size {line.size}</p>
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center border border-border">
                        <button
                          className="px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setQty(line.id, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="px-2 text-sm">{line.qty}</span>
                        <button
                          className="px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setQty(line.id, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(line.id)}
                        className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-champagne"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="space-y-4 border-t border-border px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="eyebrow">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Complimentary UK delivery and 30-day returns. Duties calculated at checkout.
              </p>
              <Button variant="gold" size="editorial" className="w-full">
                Checkout
              </Button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
