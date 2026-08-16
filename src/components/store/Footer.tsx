import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories, store } from "@/data/store";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface transition-colors duration-500">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-[0.24em] text-surface-foreground">
            {store.name.toUpperCase()}
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{store.tagline}</p>
          <a
            href={buildWhatsAppEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Shop</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">
                All pieces
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/shop/$category"
                  params={{ category: c.slug }}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {store.phoneDisplay}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {store.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {store.address}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {store.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {store.name}. Prototype storefront — orders are placed over
        WhatsApp.
      </div>
    </footer>
  );
}
