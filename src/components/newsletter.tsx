import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) {
          toast.error("Please enter a valid email address.");
          return;
        }
        setEmail("");
        toast.success("You're on the list. We write once a month, no more.");
      }}
      className={compact ? "flex w-full max-w-sm gap-0" : "flex w-full max-w-md gap-0"}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        aria-label="Email address"
        className="h-12 w-full border border-border border-r-0 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-champagne"
      />
      <Button type="submit" variant="gold" size="editorial" className="shrink-0">
        Join
      </Button>
    </form>
  );
}
