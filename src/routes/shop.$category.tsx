import { createFileRoute, notFound } from "@tanstack/react-router";
import { ShopView } from "@/components/store/ShopView";
import { getCategory, store } from "@/data/store";

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} — ${store.name}`;
    const description = `${loaderData.category.description} Shop the ${loaderData.category.name.toLowerCase()} edit at ${store.name} and order over WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  return (
    <ShopView
      categorySlug={category.slug}
      title={category.name}
      subtitle={category.description}
    />
  );
}
