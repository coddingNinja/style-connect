import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { featuredProducts, saleProducts, store } from "@/data/store";
import { ProductCard } from "@/components/store/ProductCard";
import { CategoryGrid } from "@/components/store/CategoryGrid";

const title = `${store.name} — Modern Fashion Essentials`;
const description =
  "Atelier Nord is a considered wardrobe of silk, linen, wool and leather essentials. Browse the collection and order any piece directly over WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = featuredProducts();
  const sale = saleProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow text-accent">Autumn / Winter Edit</p>
            <h1 className="mt-4 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              {store.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {store.tagline} Quietly made pieces in natural fibres — ordered in a message, not a
              checkout queue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lift"
              >
                Shop the collection
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/shop/$category"
                params={{ category: "outerwear" }}
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-accent"
              >
                New outerwear
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: MessageCircle, label: "Order on WhatsApp" },
                { icon: Leaf, label: "Natural fibres only" },
                { icon: Sparkles, label: "Small-batch making" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-card shadow-lift">
            <img
              src={store.heroImage}
              alt="Two models wearing Atelier Nord tailoring in warm neutral tones"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-accent">Best sellers</p>
            <h2 className="mt-2 text-3xl text-foreground sm:text-4xl">Pieces we keep remaking</h2>
          </div>
          <Link
            to="/shop"
            className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border bg-surface py-16 transition-colors duration-500 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-accent">Categories</p>
          <h2 className="mt-2 text-3xl text-surface-foreground sm:text-4xl">Shop by category</h2>
          <div className="mt-8">
            <CategoryGrid />
          </div>
        </div>
      </section>

      {/* Sale */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-sale">On sale</p>
            <h2 className="mt-2 text-3xl text-foreground sm:text-4xl">Marked down this season</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Limited quantities — once a size is gone, it's gone.
            </p>
          </div>
          <Link
            to="/shop"
            className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {sale.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
