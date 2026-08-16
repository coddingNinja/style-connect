import { createFileRoute } from "@tanstack/react-router";
import { ShopView } from "@/components/store/ShopView";
import { store } from "@/data/store";

const title = `Shop All — ${store.name}`;
const description =
  "Browse the full Atelier Nord collection: silk dresses, linen shirting, wool tailoring, leather footwear and accessories. Filter by category, price, sale and stock.";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ShopAll,
});

function ShopAll() {
  return (
    <ShopView
      title="The full collection"
      subtitle="Every piece in the studio, from silk slips to shearling-season coats. Filter to narrow things down, then order the piece you want straight over WhatsApp."
    />
  );
}
