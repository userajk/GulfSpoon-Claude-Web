import { Metadata } from "next";
import { getCategory, getCategories } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Gulf Kitchen",
  description: "Authentic recipes from the Arabian Peninsula — from coastal seafood traditions to spice-laden dishes of the desert.",
};

export default function GulfKitchenPage() {
  const category = getCategory("gulf-kitchen")!;
  const gulfCuisines = getCategories("cuisine").filter((c) => c.region === "Gulf");
  return <CategoryPage category={category} subcategories={gulfCuisines} />;
}
