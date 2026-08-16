import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import {
  categories,
  effectivePrice,
  formatPrice,
  isOnSale,
  priceBounds,
  products,
  type Product,
} from "@/data/store";
import { ProductGrid } from "./ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Alphabetical" },
];

export function ShopView({
  categorySlug,
  title,
  subtitle,
}: {
  categorySlug?: string;
  title: string;
  subtitle: string;
}) {
  const bounds = priceBounds();
  const [category, setCategory] = useState<string>(categorySlug ?? "all");
  const [maxPrice, setMaxPrice] = useState<number>(bounds.max);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const items = useMemo(() => {
    let list: Product[] = products.filter((p) =>
      category === "all" ? true : p.categorySlug === category,
    );
    list = list.filter((p) => effectivePrice(p) <= maxPrice);
    if (onSaleOnly) list = list.filter(isOnSale);
    if (inStockOnly) list = list.filter((p) => p.stock > 0);

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => effectivePrice(a) - effectivePrice(b));
    if (sort === "price-desc") sorted.sort((a, b) => effectivePrice(b) - effectivePrice(a));
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured")
      sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return sorted;
  }, [category, maxPrice, onSaleOnly, inStockOnly, sort]);

  const reset = () => {
    setCategory(categorySlug ?? "all");
    setMaxPrice(bounds.max);
    setOnSaleOnly(false);
    setInStockOnly(false);
    setSort("featured");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="max-w-2xl">
        <p className="eyebrow text-accent">Shop</p>
        <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          to="/shop"
          className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          activeOptions={{ exact: true }}
          activeProps={{ className: "border-accent bg-accent text-accent-foreground" }}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/shop/$category"
            params={{ category: c.slug }}
            className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            activeProps={{ className: "border-accent bg-accent text-accent-foreground" }}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground lg:hidden"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filters &amp; sort
            </span>
            <span className="text-xs text-muted-foreground">{items.length} items</span>
          </button>

          <div
            className={`${filtersOpen ? "block" : "hidden"} mt-4 space-y-6 rounded-lg border border-border bg-card p-5 lg:mt-0 lg:block`}
          >
            <div>
              <label className="eyebrow text-muted-foreground" htmlFor="filter-category">
                Category
              </label>
              <select
                id="filter-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="eyebrow text-muted-foreground" htmlFor="filter-price">
                Max price
              </label>
              <input
                id="filter-price"
                type="range"
                min={bounds.min}
                max={bounds.max}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-3 w-full accent-accent"
              />
              <p className="mt-1 text-xs text-muted-foreground">Up to {formatPrice(maxPrice)}</p>
            </div>

            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 text-sm text-card-foreground">
                <input
                  type="checkbox"
                  checked={onSaleOnly}
                  onChange={(e) => setOnSaleOnly(e.target.checked)}
                  className="h-4 w-4 accent-accent"
                />
                On sale only
              </label>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-card-foreground">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="h-4 w-4 accent-accent"
                />
                In stock only
              </label>
            </div>

            <div>
              <label className="eyebrow text-muted-foreground" htmlFor="filter-sort">
                Sort by
              </label>
              <select
                id="filter-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={reset}
              className="w-full rounded-md border border-border px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Reset filters
            </button>
          </div>
        </aside>

        <div>
          <p className="mb-4 hidden text-xs uppercase tracking-widest text-muted-foreground lg:block">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>
          <ProductGrid items={items} />
        </div>
      </div>
    </div>
  );
}
