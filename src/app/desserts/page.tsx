import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Desserts",
  description: getCategory("desserts")?.description ?? "",
};

export default function Page() {
  const category = getCategory("desserts")!;
  return <CategoryPage category={category} />;
}
