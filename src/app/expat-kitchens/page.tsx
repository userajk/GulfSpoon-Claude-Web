import { Metadata } from "next";
import { getCategory, getCategories } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Expat Kitchens",
  description: "Recipes from the diverse expatriate communities that call the Gulf home, bringing flavors from across the world.",
};

export default function ExpatKitchensPage() {
  const category = getCategory("expat-kitchens")!;
  const expatCuisines = getCategories("cuisine").filter((c) => c.region !== "Gulf");
  return <CategoryPage category={category} subcategories={expatCuisines} />;
}
