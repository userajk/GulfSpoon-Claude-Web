import { Suspense } from "react";
import { Metadata } from "next";
import { getAllRecipes } from "@/content/recipes";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RecipeIndexClient from "./RecipeIndexClient";

export const metadata: Metadata = {
  title: "Recipe Index",
  description: "Explore our curated collection of recipes from the Gulf region and beyond. Filter by cuisine, meal type, dietary needs, and more.",
};

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 pt-8 pb-20">
      <Breadcrumbs items={[{ label: "Recipes" }]} />
      <div className="max-w-3xl mb-8">
        <h1 className="font-serif text-4xl md:text-[64px] md:leading-[72px] text-deep-plum mb-2">
          Recipe Index
        </h1>
        <p className="text-lg text-on-surface-variant">
          Explore our curated collection of recipes, ranging from traditional Gulf heritage dishes to modern expatriate adaptations.
        </p>
      </div>
      <Suspense>
        <RecipeIndexClient initialRecipes={recipes} />
      </Suspense>
    </div>
  );
}
