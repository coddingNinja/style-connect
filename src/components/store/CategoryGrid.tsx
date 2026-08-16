import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories, productsByCategory } from "@/data/store";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
      {categories.map((c, i) => (
        <Link
          key={c.id}
          to="/shop/$category"
          params={{ category: c.slug }}
          className={`group relative overflow-hidden rounded-lg bg-surface ${
            i === 0 ? "col-span-2 lg:col-span-2" : ""
          }`}
        >
          <div className={`${i === 0 ? "aspect-[4/5] lg:aspect-[8/9]" : "aspect-[3/4]"}`}>
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-4 pt-14">
            <p className="font-display text-xl text-primary-foreground">{c.name}</p>
            <p className="mt-0.5 text-xs text-primary-foreground/80">
              {productsByCategory(c.slug).length} pieces
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/90">
              Shop
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
