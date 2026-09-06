import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";

export type JournalEntry = {
  slug: string;
  title: string;
  category: string;
  date: string;
  standfirst: string;
  image: string;
};

export const journal: JournalEntry[] = [
  {
    slug: "one-room-two-evenings",
    title: "One Room, Two Evenings",
    category: "Lookbook",
    date: "November 2026",
    standfirst:
      "A single hotel room, a single suitcase, and two very different nights out. Shot on film in Marylebone, with nothing changed but the garments themselves.",
    image: j1,
  },
  {
    slug: "walking-home-in-the-ellery",
    title: "Walking Home in the Ellery",
    category: "Styling",
    date: "October 2026",
    standfirst:
      "Our overcoat spends the morning as a coat and the evening as a jacket and skirt. We followed it across east London for a day to see how it behaves in real weather.",
    image: j2,
  },
  {
    slug: "the-four-piece-wardrobe",
    title: "The Four-Piece Wardrobe",
    category: "Journal",
    date: "September 2026",
    standfirst:
      "What if a week away needed four garments instead of eleven? A packing note on restraint, and the small pleasure of folding less.",
    image: j3,
  },
];
