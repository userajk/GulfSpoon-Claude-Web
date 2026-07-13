import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Drinks",
  description: getCategory("drinks")?.description ?? "",
};

export default function Page() {
  const category = getCategory("drinks")!;
  return <CategoryPage category={category} />;
}
