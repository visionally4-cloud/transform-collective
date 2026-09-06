import p1a from "@/assets/p1-a.jpg";
import p1b from "@/assets/p1-b.jpg";
import p2a from "@/assets/p2-a.jpg";
import p2b from "@/assets/p2-b.jpg";
import p3a from "@/assets/p3-a.jpg";
import p3b from "@/assets/p3-b.jpg";
import p4a from "@/assets/p4-a.jpg";
import p4b from "@/assets/p4-b.jpg";
import p5a from "@/assets/p5-a.jpg";
import p5b from "@/assets/p5-b.jpg";
import p6a from "@/assets/p6-a.jpg";
import p6b from "@/assets/p6-b.jpg";
import p7a from "@/assets/p7-a.jpg";
import p7b from "@/assets/p7-b.jpg";
import p8a from "@/assets/p8-a.jpg";
import p8b from "@/assets/p8-b.jpg";

export type Category = "Shirts" | "Dresses" | "Convertible";

export type Product = {
  slug: string;
  name: string;
  price: number;
  blurb: string;
  materials: string;
  categories: Category[];
  transforms: string;
  images: string[];
  fit: string[];
  care: string[];
  steps: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    slug: "ashcombe-shirt-dress",
    name: "The Ashcombe",
    price: 420,
    blurb: "An oversized poplin shirt that lengthens into a belted dress.",
    materials: "100% long-staple Egyptian cotton poplin, corozo buttons",
    categories: ["Shirts", "Dresses", "Convertible"],
    transforms: "Shirt → belted midi dress",
    images: [p1a, p1b],
    fit: [
      "Relaxed through the shoulder; size down for a closer line.",
      "Model is 5'9\" / 175cm and wears a size 2.",
      "Shirt length hits mid-thigh; released hem falls just below the knee.",
    ],
    care: [
      "Machine wash cool at 30°C on a gentle cycle.",
      "Line dry in shade. Warm iron on the reverse.",
      "Do not tumble dry — the released hem panel may pucker.",
    ],
    steps: [
      "Unpick the two hidden hem snaps at the side seams.",
      "Let the inner panel drop and smooth the fold line by hand.",
      "Wrap the self-fabric belt twice and knot at the front.",
    ],
    sizes: ["1", "2", "3", "4"],
  },
  {
    slug: "beaufort-trench",
    name: "The Beaufort",
    price: 890,
    blurb: "A long gabardine trench that shortens into a cropped jacket.",
    materials: "Cotton-wool gabardine, Bemberg cupro lining, horn buttons",
    categories: ["Convertible"],
    transforms: "Full-length trench → cropped jacket",
    images: [p2a, p2b],
    fit: [
      "True to size with room for knitwear underneath.",
      "Sleeves detach at the shoulder seam for a waistcoat silhouette.",
      "Cropped length sits at the high hip.",
    ],
    care: ["Dry clean only.", "Store on a broad hanger.", "Re-proof yearly if worn in heavy rain."],
    steps: [
      "Unzip the concealed seam that runs beneath the waist belt.",
      "Detach the lower skirt panel and fold it into its own pocket bag.",
      "Refasten the belt to close the new hem.",
    ],
    sizes: ["1", "2", "3", "4"],
  },
  {
    slug: "wren-wrap-blouse",
    name: "The Wren",
    price: 310,
    blurb: "A silk wrap blouse that reties as an off-shoulder top.",
    materials: "19mm sand-washed silk crêpe de chine",
    categories: ["Shirts", "Convertible"],
    transforms: "Wrap blouse → off-shoulder top",
    images: [p3a, p3b],
    fit: [
      "Adjustable through the wrap; forgiving across the bust.",
      "Sleeves gather at the cuff with a covered elastic.",
      "Cropped to sit at the waistband.",
    ],
    care: ["Hand wash cool with a silk-safe detergent.", "Roll in a towel; dry flat.", "Cool iron on the reverse while barely damp."],
    steps: [
      "Untie the waist sash and open the wrap fully.",
      "Slide the collar down over both shoulders.",
      "Cross the panels behind you and retie at the back.",
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "halden-column-dress",
    name: "The Halden",
    price: 650,
    blurb: "A floor-length rib column that gathers up into a midi.",
    materials: "Merino-silk rib knit, 70% extra-fine merino / 30% silk",
    categories: ["Dresses", "Convertible"],
    transforms: "Column gown → gathered midi dress",
    images: [p4a, p4b],
    fit: [
      "Close-fitting and stretchy; take your usual size.",
      "Straps are adjustable by 4cm.",
      "Full length is 148cm from shoulder; gathered length is 108cm.",
    ],
    care: ["Hand wash cool.", "Dry flat away from heat.", "Steam rather than iron."],
    steps: [
      "Find the ribbon loop inside the left side seam.",
      "Draw the hem up and hook the loop to the internal waist tab.",
      "Arrange the gathers by hand so the drape falls forward.",
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "ellery-convertible-coat",
    name: "The Ellery",
    price: 1150,
    blurb: "A wool overcoat that becomes a cropped jacket and a wrap skirt.",
    materials: "Undyed British lambswool melton, cupro lining",
    categories: ["Convertible"],
    transforms: "Overcoat → jacket + wrap skirt",
    images: [p5a, p5b],
    fit: [
      "Generous, made to layer. Size down if you prefer it lean.",
      "Coat length 118cm; jacket length 58cm.",
      "The released panel wraps to a UK 6–16 waist.",
    ],
    care: ["Dry clean only.", "Brush with the nap after wear.", "Rest between wears to let the wool recover."],
    steps: [
      "Open the interior placket at the waist and release the eight hooks.",
      "Step out of the lower panel and fasten it as a wrap skirt.",
      "Button the jacket and turn the lapel back on itself.",
    ],
    sizes: ["1", "2", "3", "4"],
  },
  {
    slug: "kestrel-shirt",
    name: "The Kestrel",
    price: 285,
    blurb: "A crisp cotton shirt with a back panel that releases into a train.",
    materials: "Organic cotton twill, mother-of-pearl buttons",
    categories: ["Shirts", "Convertible"],
    transforms: "Day shirt → trailing evening shirt",
    images: [p6a, p6b],
    fit: [
      "Boxy through the body with a dropped shoulder.",
      "Sleeves roll and tab at the elbow.",
      "Released panel adds 46cm at the back hem.",
    ],
    care: ["Machine wash cool.", "Line dry.", "Hot iron while damp for a crisp collar."],
    steps: [
      "Unbutton the four inner placket buttons across the yoke.",
      "Let the back panel fall and shake it out once.",
      "Tuck the front only, leaving the back loose.",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "marlowe-slip",
    name: "The Marlowe",
    price: 395,
    blurb: "A bias slip dress that unhooks into a long skirt.",
    materials: "Silk-satin, 22mm, cut on the true bias",
    categories: ["Dresses", "Convertible"],
    transforms: "Slip dress → bias maxi skirt",
    images: [p7a, p7b],
    fit: [
      "Bias cut, skims the body. Take your usual size.",
      "Straps adjust at the back.",
      "Skirt sits on the natural waist.",
    ],
    care: ["Dry clean recommended.", "Hand wash cool if needed.", "Store hanging to keep the bias true."],
    steps: [
      "Unhook the bodice at the waist seam — six covered hooks.",
      "Fold the bodice inward and fasten the waistband.",
      "Wear with knitwear tucked or loose.",
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "pennard-cape-jacket",
    name: "The Pennard",
    price: 740,
    blurb: "A flecked wool cape that buttons down into a tailored blazer.",
    materials: "Donegal-flecked wool, half-canvas front, cupro lining",
    categories: ["Convertible"],
    transforms: "Cape → single-breasted blazer",
    images: [p8a, p8b],
    fit: [
      "Cut for layering over knitwear.",
      "Arms free in cape mode; set-in sleeves when buttoned.",
      "Blazer length sits at the hip.",
    ],
    care: ["Dry clean only.", "Brush after wear.", "Hang on a shaped hanger to hold the shoulder."],
    steps: [
      "Bring the side panels forward and align the underarm markers.",
      "Fasten the concealed underarm zips from cuff to hem.",
      "Button the front through and press the lapel roll.",
    ],
    sizes: ["1", "2", "3", "4"],
  },
];

export const categories: Category[] = ["Shirts", "Dresses", "Convertible"];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0 }).format(n);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
