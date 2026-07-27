import { Metadata } from "next";
import { getCategory, getCategories } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Gulf Kitchen",
  description: getCategory("gulf-kitchen")?.description ?? "",
};

export default function GulfKitchenPage() {
  const category = getCategory("gulf-kitchen")!;
  const gulfCuisines = getCategories("cuisine").filter((c) => c.region === "Gulf");
  return <CategoryPage category={category} subcategories={gulfCuisines} />;
}
