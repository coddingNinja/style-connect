import { createFileRoute } from "@tanstack/react-router";
import { ShopView } from "@/components/store/ShopView";
import { store } from "@/data/store";

const title = `Shop All — ${store.name}`;
const description =
  "Browse the full Lumina Jewelry collection: gold vermeil, sterling silver, beaded stone, leather and charm bracelets. Filter by category, price, sale and stock.";

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
      subtitle="Every bracelet in the studio, from gold bangles to onyx bead stacks. Filter to narrow things down, then order the piece you want straight over WhatsApp."
    />
  );
}
