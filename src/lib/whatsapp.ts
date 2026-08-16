import { effectivePrice, formatPrice, isOnSale, store, type Product } from "@/data/store";

export type OrderSelection = {
  size?: string;
  color?: string;
  quantity: number;
};

/** Builds a wa.me link with a URL-encoded, ready-to-process order message. */
export function buildWhatsAppOrderLink(product: Product, selection: OrderSelection) {
  const unit = effectivePrice(product);
  const lines = [
    `Hi ${store.name}, I'd like to place an order.`,
    "",
    `Product: ${product.name}`,
  ];

  if (selection.color) lines.push(`Colour: ${selection.color}`);
  if (selection.size) lines.push(`Size: ${selection.size}`);

  lines.push(`Quantity: ${selection.quantity}`);
  lines.push(
    `Unit price: ${formatPrice(unit)}${isOnSale(product) ? ` (was ${formatPrice(product.price)})` : ""}`,
  );
  lines.push(`Total: ${formatPrice(unit * selection.quantity)}`);
  lines.push("", "Please confirm availability and delivery details.");

  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Generic enquiry link used in the header/footer. */
export function buildWhatsAppEnquiryLink(message = `Hi ${store.name}, I have a question.`) {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
