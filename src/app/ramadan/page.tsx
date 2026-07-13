import { Metadata } from "next";
import { getCategory } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Ramadan",
  description: getCategory("ramadan")?.description ?? "",
};

export default function Page() {
  const category = getCategory("ramadan")!;
  return <CategoryPage category={category} />;
}
