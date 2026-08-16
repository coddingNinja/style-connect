/**
 * MOCK STOREFRONT DATA — BRACELETS
 * ---------------------------------------------------------------
 * Single source of truth for the prototype. Edit freely — the whole
 * site (home, shop, category pages, product pages) is generated from
 * the arrays below.
 */

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import bGold from "@/assets/b-gold-cuff.jpg";
import bSilver from "@/assets/b-silver-chain.jpg";
import bOnyx from "@/assets/b-onyx-bead.jpg";
import bLeather from "@/assets/b-leather-wrap.jpg";
import bCharm from "@/assets/b-charm.jpg";
import bPearl from "@/assets/b-pearl.jpg";
import bTennis from "@/assets/b-tennis.jpg";

export const store = {
  name: "Lumina Jewelry",
  tagline: "Handcrafted bracelets, made to be worn every day.",
  heroImage: hero1,
  /** International format, digits only — used to build wa.me links. */
  whatsappNumber: "923001234567",
  currency: "PKR",
  currencySymbol: "Rs",
  email: "hello@luminajewelry.example",
  phoneDisplay: "+92 300 123 4567",
  address: "Studio 4, Zamzama Boulevard, Karachi",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
};

/** Full-bleed posters for the homepage hero slider. */
export type Slide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaTo: string;
  ctaCategory?: string;
};

export const heroSlides: Slide[] = [
  {
    id: "s1",
    image: hero1,
    eyebrow: "New collection",
    title: "Gold Standard",
    subtitle: "Stacking cuffs and bangles in 18k gold vermeil — timeless, never loud.",
    ctaLabel: "Shop gold",
    ctaTo: "category",
    ctaCategory: "gold",
  },
  {
    id: "s2",
    image: hero2,
    eyebrow: "Everyday icons",
    title: "Strength in Silver",
    subtitle: "Solid sterling chains, finished by hand and built to outlast trends.",
    ctaLabel: "Shop silver",
    ctaTo: "category",
    ctaCategory: "silver",
  },
  {
    id: "s3",
    image: hero3,
    eyebrow: "Natural stone",
    title: "Beauty in Every Stone",
    subtitle: "Onyx, howlite and pearl beads strung on durable elastic cord.",
    ctaLabel: "Shop beaded",
    ctaTo: "category",
    ctaCategory: "beaded",
  },
];

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  details: string[];
  price: number;
  /** Set when the item is on sale; `price` stays the original price. */
  salePrice?: number;
  stock: number;
  featured?: boolean;
  images: string[];
  sizes?: string[];
  colors?: string[];
};

export const categories: Category[] = [
  {
    id: "c1",
    slug: "gold",
    name: "Gold",
    description: "18k gold vermeil cuffs, bangles and chains.",
    image: bGold,
  },
  {
    id: "c2",
    slug: "silver",
    name: "Silver",
    description: "Solid 925 sterling links and rope chains.",
    image: bSilver,
  },
  {
    id: "c3",
    slug: "beaded",
    name: "Beaded",
    description: "Natural stone beads on durable cord.",
    image: bOnyx,
  },
  {
    id: "c4",
    slug: "leather",
    name: "Leather",
    description: "Braided leather with steel hardware.",
    image: bLeather,
  },
  {
    id: "c5",
    slug: "charms",
    name: "Charms",
    description: "Build-your-own charm bracelets and pendants.",
    image: bCharm,
  },
];

const SIZES = ['6.5"', '7"', '7.5"', '8"'];

export const products: Product[] = [
  {
    id: "p1",
    slug: "eterna-gold-bangle",
    name: "Eterna Gold Bangle",
    categorySlug: "gold",
    description:
      "A perfectly round bangle in 18k gold vermeil over solid brass. Slim enough to stack, weighty enough to feel like heirloom jewellery.",
    details: ["18k gold vermeil", "2.5mm profile", "Slip-on fit", "Tarnish resistant"],
    price: 6800,
    salePrice: 5400,
    stock: 24,
    featured: true,
    images: [bGold, bTennis],
    sizes: SIZES,
    colors: ["Yellow Gold", "Rose Gold"],
  },
  {
    id: "p2",
    slug: "solene-gold-cuff",
    name: "Solene Open Cuff",
    categorySlug: "gold",
    description:
      "An open cuff that slides on with a gentle flex, polished to a mirror finish so it catches light from every angle.",
    details: ["18k gold vermeil", "Adjustable open cuff", "High polish finish"],
    price: 8900,
    stock: 5,
    featured: true,
    images: [bGold, bSilver],
    sizes: ["One size"],
    colors: ["Yellow Gold"],
  },
  {
    id: "p3",
    slug: "lumina-tennis-bracelet",
    name: "Lumina Tennis Bracelet",
    categorySlug: "gold",
    description:
      "A full line of brilliant-cut cubic zirconia set in four-prong gold settings — the evening piece that works with everything.",
    details: ["Brilliant-cut CZ", "Gold vermeil settings", "Double safety clasp"],
    price: 14900,
    salePrice: 11900,
    stock: 8,
    featured: true,
    images: [bTennis, bGold],
    sizes: SIZES,
    colors: ["Gold", "Silver"],
  },
  {
    id: "p4",
    slug: "atlas-curb-chain",
    name: "Atlas Curb Chain",
    categorySlug: "silver",
    description:
      "A substantial 7mm curb chain in solid 925 sterling silver with a hand-set box clasp. Unisex, and quietly heavy on the wrist.",
    details: ["Solid 925 sterling", "7mm curb links", "Box clasp with safety catch"],
    price: 9600,
    stock: 17,
    featured: true,
    images: [bSilver, bLeather],
    sizes: SIZES,
    colors: ["Polished", "Brushed"],
  },
  {
    id: "p5",
    slug: "rope-twist-silver",
    name: "Rope Twist Bracelet",
    categorySlug: "silver",
    description:
      "Twisted sterling strands form a rope that moves like fabric and reflects like metal.",
    details: ["925 sterling silver", "5mm rope weave", "Magnetic clasp"],
    price: 7400,
    salePrice: 5900,
    stock: 3,
    images: [bSilver, bCharm],
    sizes: SIZES,
    colors: ["Silver"],
  },
  {
    id: "p6",
    slug: "signet-id-bracelet",
    name: "Signet ID Bracelet",
    categorySlug: "silver",
    description:
      "A flat engravable ID plate joined to a heavy curb chain — add initials or a date at checkout over WhatsApp.",
    details: ["925 sterling", "Engravable plate", "Free hand engraving"],
    price: 11200,
    stock: 0,
    images: [bSilver, bTennis],
    sizes: SIZES,
    colors: ["Silver"],
  },
  {
    id: "p7",
    slug: "onyx-bead-bracelet",
    name: "Black Onyx Bead Bracelet",
    categorySlug: "beaded",
    description:
      "Grade-A black onyx rounds, hand-strung on double elastic cord with a single sterling accent bead.",
    details: ["8mm black onyx", "Double elastic cord", "Sterling accent bead"],
    price: 3900,
    salePrice: 2900,
    stock: 42,
    featured: true,
    images: [bOnyx, bPearl],
    sizes: SIZES,
    colors: ["Onyx", "Matte Onyx"],
  },
  {
    id: "p8",
    slug: "freshwater-pearl-bracelet",
    name: "Freshwater Pearl Bracelet",
    categorySlug: "beaded",
    description:
      "Lustrous freshwater pearls spaced with tiny gold beads — soft, bridal, and easy to wear with a t-shirt.",
    details: ["7-8mm freshwater pearls", "Gold-filled spacers", "Hand knotted"],
    price: 6400,
    stock: 11,
    featured: true,
    images: [bPearl, bOnyx],
    sizes: SIZES,
    colors: ["White", "Peach"],
  },
  {
    id: "p9",
    slug: "howlite-stone-stack",
    name: "Howlite Stone Stack",
    categorySlug: "beaded",
    description:
      "A three-piece stack of white howlite, rose quartz and amethyst rounds. Wear together or split them up.",
    details: ["Set of three", "8mm natural stone", "Stretch fit"],
    price: 8200,
    salePrice: 6500,
    stock: 4,
    images: [bOnyx, bPearl],
    sizes: SIZES,
    colors: ["Mixed stone"],
  },
  {
    id: "p10",
    slug: "braided-leather-wrap",
    name: "Braided Leather Wrap",
    categorySlug: "leather",
    description:
      "Double-wrap braided leather with a brushed steel magnetic clasp that snaps shut one-handed.",
    details: ["Full-grain braided leather", "Brushed steel clasp", "Water resistant"],
    price: 4900,
    stock: 26,
    featured: true,
    images: [bLeather, bSilver],
    sizes: SIZES,
    colors: ["Black", "Tan", "Espresso"],
  },
  {
    id: "p11",
    slug: "mariner-leather-cord",
    name: "Mariner Leather Cord",
    categorySlug: "leather",
    description:
      "A single 4mm leather cord with a knotted sterling loop — the most minimal thing we make.",
    details: ["4mm round leather", "Sterling loop", "Adjustable slide knot"],
    price: 3200,
    salePrice: 2400,
    stock: 2,
    images: [bLeather, bCharm],
    sizes: ["Adjustable"],
    colors: ["Black", "Chestnut"],
  },
  {
    id: "p12",
    slug: "keepsake-charm-bracelet",
    name: "Keepsake Charm Bracelet",
    categorySlug: "charms",
    description:
      "A sterling link bracelet supplied with three charms of your choice — message us and we'll build it with you.",
    details: ["925 sterling links", "Includes 3 charms", "Add charms any time"],
    price: 10400,
    salePrice: 8300,
    stock: 9,
    featured: true,
    images: [bCharm, bSilver],
    sizes: SIZES,
    colors: ["Silver", "Gold"],
  },
];

/* ----------------------------- selectors ----------------------------- */

export const formatPrice = (value: number) =>
  `${store.currencySymbol} ${value.toLocaleString("en-US")}`;

export const effectivePrice = (p: Product) => p.salePrice ?? p.price;

export const isOnSale = (p: Product) => typeof p.salePrice === "number" && p.salePrice < p.price;

export const discountPercent = (p: Product) =>
  isOnSale(p) ? Math.round((1 - (p.salePrice as number) / p.price) * 100) : 0;

export type StockLevel = "in-stock" | "low-stock" | "out-of-stock";

export const stockLevel = (stock: number): StockLevel =>
  stock <= 0 ? "out-of-stock" : stock <= 5 ? "low-stock" : "in-stock";

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const saleProducts = () => products.filter(isOnSale);

export const relatedProducts = (p: Product) =>
  products.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);

export const priceBounds = () => {
  const values = products.map(effectivePrice);
  return { min: Math.min(...values), max: Math.max(...values) };
};
