import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Stockists — Marlowe & Vane" },
      {
        name: "description",
        content:
          "Book a fitting at our Bermondsey studio, ask about sizing or conversions, or find the stockists carrying Marlowe & Vane.",
      },
      { property: "og:title", content: "Contact & Stockists — Marlowe & Vane" },
      {
        property: "og:description",
        content: "Book a fitting, ask about sizing, or find a stockist near you.",
      },
    ],
  }),
  component: Contact;
});

const stockists = [
  { city: "London", name: "Vane Studio, Bermondsey Street SE1", note: "Fittings by appointment, Tue–Sat" },
  { city: "Edinburgh", name: "Thorne & Ash, Thistle Street", note: "Full collection" },
  { city: "Copenhagen", name: "Hverdag, Værnedamsvej", note: "Selected pieces" },
  { city: "New York", name: "Field Notes, Crosby Street", note: "Selected pieces" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const field = "h-12 w-full border border-border bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-champagne";

  return (
    <div className="mx-auto max-w-[86rem] px-5 pb-20 pt-12 md:px-10 md:pt-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Say hello, or come and try one on</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Questions about sizing, conversions or repairs reach a real person — usually within one working day.
        </p>
      </header>

      <div className="mt-12 grid gap-14 md:grid-cols-2">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.name || !form.email.includes("@") || !form.message) {
              toast.error("Please fill in your name, a valid email, and a message.");
              return;
            }
            setForm({ name: "", email: "", message: "" });
            toast.success("Thank you — we'll be in touch shortly.");
          }}
        >
          <input
            className={field}
            placeholder="Name"
            aria-label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className={field}
            placeholder="Email address"
            aria-label="Email address"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="min-h-40 w-full border border-border bg-transparent p-4 text-sm outline-none placeholder:text-muted-foreground focus:border-champagne"
            placeholder="How can we help?"
            aria-label="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button type="submit" variant="gold" size="editorial">
            Send message
          </Button>
        </form>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl">Stockists</h2>
            <ul className="mt-5 divide-y divide-border">
              {stockists.map((s) => (
                <li key={s.name} className="py-4">
                  <p className="eyebrow">{s.city}</p>
                  <p className="mt-1 text-base">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Elsewhere</h2>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="https://instagram.com" className="link-underline hover:text-foreground">Instagram</a>
              <a href="https://pinterest.com" className="link-underline hover:text-foreground">Pinterest</a>
              <a href="mailto:studio@marloweandvane.co.uk" className="link-underline hover:text-foreground">
                studio@marloweandvane.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
