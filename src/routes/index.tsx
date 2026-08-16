import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, MessageCircle, Sparkles } from "lucide-react";
import { featuredProducts, saleProducts, store } from "@/data/store";
import { ProductCard } from "@/components/store/ProductCard";
import { CategoryGrid } from "@/components/store/CategoryGrid";
import { HeroSlider } from "@/components/store/HeroSlider";

const title = `${store.name} — Handcrafted Bracelets`;
const description =
  "Lumina Jewelry crafts gold, sterling silver, beaded, leather and charm bracelets. Browse the collection and order any piece directly over WhatsApp.";

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
      {/* Hero poster slider */}
      <HeroSlider />

      {/* Value strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
          {[
            { icon: MessageCircle, label: "Order on WhatsApp" },
            { icon: Gem, label: "Solid 925 silver & gold vermeil" },
            { icon: Sparkles, label: "Hand-finished, small batch" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" />
              {label}
            </div>
          ))}
        </div>
      </section>


      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-accent">Best sellers</p>
            <h2 className="mt-2 text-3xl text-foreground sm:text-4xl">Bracelets we keep remaking</h2>
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
