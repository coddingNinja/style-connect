/**
 * MOCK STOREFRONT DATA
 * ---------------------------------------------------------------
 * Single source of truth for the prototype. Edit freely — the whole
 * site (home, shop, category pages, product pages) is generated from
 * the arrays below. Swapping this file for API calls later requires no
 * component changes as long as the shapes stay the same.
 */

import heroImg from "@/assets/hero.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catMen from "@/assets/cat-men.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catFootwear from "@/assets/cat-footwear.jpg";
import pKnit from "@/assets/p-knit.jpg";
import pTrench from "@/assets/p-trench.jpg";
import pLinen from "@/assets/p-linen.jpg";
import pDenim from "@/assets/p-denim.jpg";
import pSlip from "@/assets/p-slip.jpg";
import pScarf from "@/assets/p-scarf.jpg";
import pBoots from "@/assets/p-boots.jpg";
import pBlazer from "@/assets/p-blazer.jpg";

export const store = {
  name: "Atelier Nord",
  tagline: "Considered essentials, made to be lived in.",
  heroImage: heroImg,
  /** International format, digits only — used to build wa.me links. */
  whatsappNumber: "923001234567",
  currency: "PKR",
  currencySymbol: "Rs",
  email: "hello@ateliernord.example",
  phoneDisplay: "+92 300 123 4567",
  address: "Studio 4, Zamzama Boulevard, Karachi",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
};

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
    slug: "women",
    name: "Women",
    description: "Fluid silhouettes in silk, linen and fine wool.",
    image: catWomen,
  },
  {
    id: "c2",
    slug: "men",
    name: "Men",
    description: "Relaxed tailoring and everyday layers.",
    image: catMen,
  },
  {
    id: "c3",
    slug: "outerwear",
    name: "Outerwear",
    description: "Coats and jackets built for long seasons.",
    image: pTrench,
  },
  {
    id: "c4",
    slug: "footwear",
    name: "Footwear",
    description: "Hand-finished leather, quietly constructed.",
    image: catFootwear,
  },
  {
    id: "c5",
    slug: "accessories",
    name: "Accessories",
    description: "Bags, scarves and small leather goods.",
    image: catAccessories,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "silk-wrap-midi-dress",
    name: "Silk Wrap Midi Dress",
    categorySlug: "women",
    description:
      "A weightless wrap dress cut from washed sand-toned silk. The bias skirt falls into a soft column, while the self-tie waist lets you set the fit exactly where you want it.",
    details: ["100% mulberry silk", "Bias-cut skirt", "Self-tie waist", "Dry clean only"],
    price: 18500,
    salePrice: 14800,
    stock: 12,
    featured: true,
    images: [catWomen, pSlip, pScarf],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sand", "Ivory", "Black"],
  },
  {
    id: "p2",
    slug: "black-silk-slip-dress",
    name: "Bias Silk Slip Dress",
    categorySlug: "women",
    description:
      "The evening staple: a fine-strap slip in matte black silk with a discreet side slit and a clean, unlined finish.",
    details: ["Matte silk crepe", "Side slit", "Adjustable straps"],
    price: 16200,
    stock: 4,
    featured: true,
    images: [pSlip, catWomen],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Espresso"],
  },
  {
    id: "p3",
    slug: "ribbed-wool-sweater",
    name: "Ribbed Wool Sweater",
    categorySlug: "women",
    description:
      "Chunky rib knit in undyed lambswool with dropped shoulders and a rounded neckline. Warm without weight.",
    details: ["Undyed lambswool", "Dropped shoulder", "Ribbed cuffs and hem"],
    price: 11900,
    salePrice: 8900,
    stock: 23,
    featured: true,
    images: [pKnit, catWomen],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oatmeal", "Fog"],
  },
  {
    id: "p4",
    slug: "relaxed-linen-shirt",
    name: "Relaxed Linen Shirt",
    categorySlug: "men",
    description:
      "Cut generously from garment-washed European linen, with a soft collar that sits well open or buttoned.",
    details: ["100% European linen", "Garment washed", "Mother-of-pearl buttons"],
    price: 9800,
    stock: 31,
    featured: true,
    images: [pLinen, catMen],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Optic White", "Clay", "Sage"],
  },
  {
    id: "p5",
    slug: "wool-overshirt",
    name: "Wool Overshirt",
    categorySlug: "men",
    description:
      "A midweight overshirt in brushed navy wool — the layer that works over a tee and under a coat.",
    details: ["Brushed wool blend", "Chest pocket", "Boxy fit"],
    price: 15400,
    salePrice: 12300,
    stock: 7,
    images: [catMen, pBlazer],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal"],
  },
  {
    id: "p6",
    slug: "straight-leg-denim",
    name: "Straight Leg Denim",
    categorySlug: "men",
    description:
      "Rigid Japanese denim in a mid indigo wash, cut straight through the leg with a clean mid rise.",
    details: ["13.5oz Japanese denim", "Mid rise, straight leg", "Copper hardware"],
    price: 12600,
    stock: 0,
    images: [pDenim, catMen],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Mid Indigo", "Washed Black"],
  },
  {
    id: "p7",
    slug: "camel-trench-coat",
    name: "Camel Trench Coat",
    categorySlug: "outerwear",
    description:
      "A double-breasted trench in water-resistant cotton gabardine with belted cuffs and a full storm shield.",
    details: ["Cotton gabardine", "Double breasted", "Belted cuffs", "Removable waist belt"],
    price: 32900,
    salePrice: 24900,
    stock: 5,
    featured: true,
    images: [pTrench, catWomen],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Stone"],
  },
  {
    id: "p8",
    slug: "tailored-wool-blazer",
    name: "Tailored Wool Blazer",
    categorySlug: "outerwear",
    description:
      "Single-button tailoring in a dry charcoal wool. Lightly structured shoulder, softly roped sleeve head.",
    details: ["Virgin wool", "Half-canvassed", "Single button", "Two flap pockets"],
    price: 27500,
    stock: 9,
    images: [pBlazer, catMen],
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Charcoal", "Ink"],
  },
  {
    id: "p9",
    slug: "leather-low-top-sneaker",
    name: "Leather Low-Top Sneaker",
    categorySlug: "footwear",
    description:
      "Minimal low-top in full-grain white leather over a vulcanised cream sole. Unlined, so it softens with wear.",
    details: ["Full-grain leather", "Vulcanised rubber sole", "Made in Portugal"],
    price: 17400,
    salePrice: 13900,
    stock: 18,
    featured: true,
    images: [catFootwear, pBoots],
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Optic White", "Bone"],
  },
  {
    id: "p10",
    slug: "leather-ankle-boot",
    name: "Leather Ankle Boot",
    categorySlug: "footwear",
    description:
      "A clean-lined ankle boot on a low stacked heel, with an inside zip and a leather-lined footbed.",
    details: ["Polished calf leather", "35mm stacked heel", "Inside zip"],
    price: 22800,
    stock: 3,
    images: [pBoots, catFootwear],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Dark Tan"],
  },
  {
    id: "p11",
    slug: "structured-leather-tote",
    name: "Structured Leather Tote",
    categorySlug: "accessories",
    description:
      "A hand-finished tote in vegetable-tanned tan leather, roomy enough for a laptop and quiet enough for anything.",
    details: ["Vegetable-tanned leather", "Suede lining", "Fits 14\" laptop"],
    price: 24900,
    salePrice: 19900,
    stock: 6,
    featured: true,
    images: [catAccessories, pScarf],
    colors: ["Tan", "Black"],
  },
  {
    id: "p12",
    slug: "cashmere-scarf",
    name: "Cashmere Scarf",
    categorySlug: "accessories",
    description:
      "Featherweight cashmere in dusty rose, woven on a slow loom and finished with a hand-knotted fringe.",
    details: ["100% cashmere", "Hand-knotted fringe", "180 x 70 cm"],
    price: 8900,
    stock: 0,
    images: [pScarf, catAccessories],
    colors: ["Dusty Rose", "Camel", "Grey Marl"],
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

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const saleProducts = () => products.filter(isOnSale);

export const relatedProducts = (p: Product) =>
  products.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);

export const priceBounds = () => {
  const values = products.map(effectivePrice);
  return { min: Math.min(...values), max: Math.max(...values) };
};
