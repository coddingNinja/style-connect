import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import {
  discountPercent,
  effectivePrice,
  formatPrice,
  getCategory,
  getProduct,
  isOnSale,
  relatedProducts,
  store,
  type Product,
} from "@/data/store";
import { buildWhatsAppOrderLink } from "@/lib/whatsapp";
import { SaleBadge, StockBadge } from "@/components/store/StockBadge";
import { ProductCard } from "@/components/store/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.name} — ${store.name}`;
    const description = `${p.description.slice(0, 150)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail key={product.id} product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const category = getCategory(product.categorySlug);
  const onSale = isOnSale(product);
  const soldOut = product.stock <= 0;

  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [color, setColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  const maxQty = Math.max(1, Math.min(product.stock, 10));
  const unit = effectivePrice(product);

  const orderLink = buildWhatsAppOrderLink(product, {
    quantity,
    ...(size ? { size } : {}),
    ...(color ? { color } : {}),
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Link to="/shop" className="inline-flex items-center gap-1 hover:text-foreground">
          <ChevronLeft className="h-3 w-3" /> Shop
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link
              to="/shop/$category"
              params={{ category: category.slug }}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onClick={() => setZoom((v) => !v)}
          >
            <img
              src={product.images[activeImage]}
              alt={`${product.name} — view ${activeImage + 1}`}
              width={900}
              height={1200}
              className={`h-full w-full cursor-zoom-in object-cover transition-transform duration-700 ${zoom ? "scale-150" : "scale-100"}`}
            />
            {onSale && (
              <div className="absolute left-4 top-4">
                <SaleBadge percent={discountPercent(product)} />
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`h-20 w-16 overflow-hidden rounded-md border transition-colors ${i === activeImage ? "border-accent" : "border-border"}`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:pl-4">
          {category && <p className="eyebrow text-accent">{category.name}</p>}
          <h1 className="mt-3 text-3xl text-foreground sm:text-4xl">{product.name}</h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className={`text-2xl font-semibold ${onSale ? "text-sale" : "text-foreground"}`}>
              {formatPrice(unit)}
            </span>
            {onSale && (
              <span className="text-base text-muted-foreground line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <StockBadge stock={product.stock} />
            <span className="text-xs text-muted-foreground">
              {soldOut ? "Restocking soon" : `${product.stock} left in stock`}
            </span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-7">
              <p className="eyebrow text-muted-foreground">Colour</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                      color === c
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`min-w-12 rounded-md border px-3 py-2 text-xs transition-colors ${
                      size === s
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div>
              <p className="eyebrow text-muted-foreground">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-md border border-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={soldOut || quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="grid h-10 w-10 place-items-center text-foreground disabled:opacity-40"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  disabled={soldOut || quantity >= maxQty}
                  onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
                  className="grid h-10 w-10 place-items-center text-foreground disabled:opacity-40"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            {!soldOut && (
              <div className="pt-6">
                <p className="text-xs text-muted-foreground">Order total</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatPrice(unit * quantity)}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8">
            {soldOut ? (
              <div className="w-full rounded-md border border-border bg-muted px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Out of Stock
              </div>
            ) : (
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-whatsapp px-6 py-4 text-sm font-semibold uppercase tracking-widest text-whatsapp-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order via WhatsApp
              </a>
            )}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No checkout needed — your order details open pre-filled in WhatsApp.
            </p>
          </div>

          {product.details.length > 0 && (
            <ul className="mt-8 space-y-2 border-t border-border pt-6">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-accent">—</span>
                  {d}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-md bg-surface px-4 py-3 text-xs text-surface-foreground">
              <Truck className="h-4 w-4 shrink-0 text-accent" />
              Nationwide delivery in 2–4 days
            </div>
            <div className="flex items-center gap-3 rounded-md bg-surface px-4 py-3 text-xs text-surface-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
              7-day exchange guarantee
            </div>
          </div>
        </div>
      </div>

      {relatedProducts(product).length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl text-foreground sm:text-3xl">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts(product).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.31 5.05 4.51 2.97 1.2 3.19.96 3.76.91.57-.05 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.07-.13-.27-.2-.57-.35zM12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.45 3.37 1.25 4.79L2 22l5.5-1.42a9.8 9.8 0 0 0 4.54 1.13c5.43 0 9.84-4.4 9.84-9.84C21.88 6.4 17.47 2 12.04 2z" />
    </svg>
  );
}
