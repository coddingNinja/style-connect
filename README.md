# Style Connect

Build a modern, responsive e-commerce storefront frontend for a fashion/apparel brand — customer-facing pages only, no admin panel. This is a client-side prototype only — no payment gateway, no cart, and no real backend/database integration required. Use static mock/local data (JSON or local state) for products and categories.

CORE CONCEPT

A general multi-category store (not a single-product site) with multiple categories, each containing multiple products, defined in mock data. There is no online checkout — customers place orders directly via WhatsApp from the product page. The storefront should feel premium, clean, and trustworthy — this is being shown to a client as a sales prototype, so visual polish matters a lot.

PAGES / SECTIONS NEEDED

1. Homepage

   - Hero section with brand name (placeholder), tagline, and a CTA

   - Featured/best-selling products row

   - Category showcase (grid or carousel linking to category pages)

   - Sale/discounted items section (highlight products marked "on sale" in the mock data)

2. Category / Shop page

   - Grid of products filtered by category

   - Filter/sort controls (by category, price, "on sale", in stock)

   - Each product card shows: image, name, price (with strikethrough original price if on sale), stock status badge (e.g. "In Stock", "Low Stock", "Out of Stock")

3. Product detail page

   - Image gallery/zoom

   - Name, description, price, sale price if applicable

   - Stock quantity indicator (from mock data)

   - Size/color/variant selector if applicable (use placeholder variants)

   - Quantity selector

   - "Order via WhatsApp" button as the sole call-to-action (no add-to-cart, no checkout flow). Clicking it opens WhatsApp (wa.me link) with a pre-filled, URL-encoded message containing: product name, selected variant, quantity, and price, so the store owner receives ready-to-process order details directly on WhatsApp

   - Disable/hide the WhatsApp order button (or replace with "Out of Stock" label) when stock is 0

THEME / DARK MODE

- The site must support both Light Mode and Dark Mode, with a visible toggle (sun/moon icon) in the header/navbar on every page

- Respect the user's system preference (prefers-color-scheme) on first load, but allow manual override

- Persist the selected theme across navigation and reloads using local storage

- Both themes should feel equally polished, not just inverted colors:

  - Light mode: clean white/light neutral background, dark text, subtle shadows

  - Dark mode: true dark neutral background (not pure black), light text, adjusted contrast so product images, sale badges, and stock badges still stand out clearly

- Smooth transition/animation when switching modes (no jarring flash)

DESIGN DIRECTION

- Modern, minimal, mobile-first responsive design

- Clean product photography grid layout, generous white space

- Clear visual distinction for sale items (badge/tag)

- Stock status should be visually obvious (color-coded badges)

- WhatsApp button should use recognizable WhatsApp green and icon, and be prominent on the product page

- Include a simple header (logo/brand name, nav links, theme toggle) and footer (basic contact info, social links placeholders)

TECHNICAL NOTES

- Frontend only, customer-facing pages only — no admin panel, no authentication

- Store all product/category/stock data in a well-structured mock JSON/data file that's easy to edit manually and easy to later wire up to a real backend or admin panel

- No payment integration, no cart, no checkout flow

- WhatsApp ordering uses the wa.me API link format with a URL-encoded prefilled message, per product

- Keep components modular (ProductCard, CategoryGrid, ThemeToggle, etc.) so an admin panel and real backend can be added later without a rebuild

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6e771414-ee83-41c5-8e5a-43d398beae78).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
