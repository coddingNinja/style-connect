import { Link } from "@tanstack/react-router";
import {
  discountPercent,
  effectivePrice,
  formatPrice,
  isOnSale,
  type Product,
} from "@/data/store";
import { SaleBadge, StockBadge } from "./StockBadge";

export function ProductCard({ product }: { product: Product }) {
  const onSale = isOnSale(product);

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group card-surface flex flex-col overflow-hidden rounded-lg hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
          {onSale && <SaleBadge percent={discountPercent(product)} />}
        </div>
        <div className="absolute bottom-3 left-3">
          <StockBadge stock={product.stock} className="backdrop-blur-sm" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-lg leading-snug text-card-foreground">{product.name}</h3>
        <div className="mt-auto flex flex-wrap items-baseline gap-2 pt-2">
          <span className={`text-sm font-semibold ${onSale ? "text-sale" : "text-card-foreground"}`}>
            {formatPrice(effectivePrice(product))}
          </span>
          {onSale && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-surface/60 px-6 py-20 text-center">
        <p className="font-display text-2xl text-foreground">Nothing matches those filters</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try widening the price range or clearing a filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
