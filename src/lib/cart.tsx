import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  open: () => void;
  close: () => void;
  add: (line: Omit<CartLine, "id" | "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((line: Omit<CartLine, "id" | "qty">) => {
    const id = `${line.slug}-${line.size}`;
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id);
      if (existing) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { ...line, id, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev.flatMap((l) => (l.id === id ? (qty <= 0 ? [] : [{ ...l, qty }]) : [l])),
    );
  }, []);

  const value = useMemo<CartValue>(
    () => ({
      lines,
      isOpen,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      remove,
      setQty,
    }),
    [lines, isOpen, add, remove, setQty],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
