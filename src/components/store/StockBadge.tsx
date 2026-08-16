import { stockLevel } from "@/data/store";

const styles: Record<string, string> = {
  "in-stock": "bg-success/12 text-success ring-success/30",
  "low-stock": "bg-warning/18 text-warning ring-warning/35",
  "out-of-stock": "bg-muted text-muted-foreground ring-border",
};

const labels: Record<string, string> = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
};

export function StockBadge({ stock, className = "" }: { stock: number; className?: string }) {
  const level = stockLevel(stock);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ring-1 ring-inset ${styles[level]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {labels[level]}
    </span>
  );
}

export function SaleBadge({ percent }: { percent: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sale px-2.5 py-1 text-[11px] font-semibold tracking-wide text-sale-foreground shadow-soft">
      −{percent}%
    </span>
  );
}
