import { Metadata } from "next";
import { getCategory, getCategories } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Expat Kitchens",
  description: getCategory("expat-kitchens")?.description ?? "",
};

export default function ExpatKitchensPage() {
  const category = getCategory("expat-kitchens")!;
  const expatCuisines = getCategories("cuisine").filter((c) => c.region !== "Gulf");
  return <CategoryPage category={category} subcategories={expatCuisines} />;
}
