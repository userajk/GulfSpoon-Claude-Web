import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Air Fryer Recipes",
  description: getCategory("air-fryer")?.description ?? "",
};

export default function Page() {
  const category = getCategory("air-fryer")!;
  return <CategoryPage category={category} />;
}
