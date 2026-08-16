import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { categories, store } from "@/data/store";
import { ThemeToggle } from "./ThemeToggle";

const linkBase =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md transition-colors duration-500">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-3">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link to="/" className={linkBase} activeProps={{ className: "text-foreground" }}>
              Home
            </Link>
            <Link to="/shop" className={linkBase} activeProps={{ className: "text-foreground" }}>
              Shop All
            </Link>
            <Link
              to="/shop/$category"
              params={{ category: "women" }}
              className={linkBase}
              activeProps={{ className: "text-foreground" }}
            >
              Women
            </Link>
            <Link
              to="/shop/$category"
              params={{ category: "men" }}
              className={linkBase}
              activeProps={{ className: "text-foreground" }}
            >
              Men
            </Link>
          </nav>
        </div>

        <Link
          to="/"
          className="hidden justify-center lg:flex"
          aria-label={`${store.name} home`}
        >
          <span className="font-display text-2xl tracking-[0.28em] text-foreground">
            {store.name.toUpperCase()}
          </span>
        </Link>

        <div className="flex items-center justify-end gap-3">
          <Link to="/" className="lg:hidden">
            <span className="font-display text-lg tracking-[0.2em] text-foreground">
              {store.name.toUpperCase()}
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm text-foreground">
              Home
            </Link>
            <Link to="/shop" onClick={() => setOpen(false)} className="text-sm text-foreground">
              Shop All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/shop/$category"
                params={{ category: c.slug }}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
