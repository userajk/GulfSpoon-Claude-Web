import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Quick & Easy",
  description: getCategory("quick-and-easy")?.description ?? "",
};

export default function Page() {
  const category = getCategory("quick-and-easy")!;
  return <CategoryPage category={category} />;
}
