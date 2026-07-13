import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Breakfast",
  description: getCategory("breakfast")?.description ?? "",
};

export default function Page() {
  const category = getCategory("breakfast")!;
  return <CategoryPage category={category} />;
}
