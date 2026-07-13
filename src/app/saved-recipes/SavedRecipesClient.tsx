"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useSavedRecipes } from "@/lib/saved-recipes";
import { getRecipe } from "@/content/recipes";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";
import type { Recipe } from "@/lib/schema/recipe";

export default function SavedRecipesClient() {
  const { saved, hydrated } = useSavedRecipes();

  if (!hydrated) {
    return <p className="text-on-surface-variant">Loading...</p>;
  }

  const recipes = saved.map((slug) => getRecipe(slug)).filter(Boolean) as Recipe[];

  if (recipes.length === 0) {
    return (
      <div className="text-center py-20">
        <Bookmark size={48} className="mx-auto text-warm-taupe mb-4" />
        <h2 className="font-serif text-2xl text-deep-plum mb-2">No saved recipes yet</h2>
        <p className="text-on-surface-variant mb-6">
          Browse our recipes and tap the bookmark icon to save your favorites.
        </p>
        <Link
          href="/recipes"
          className="inline-flex items-center bg-deep-plum text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors"
        >
          Browse Recipes
        </Link>
      </div>
    );
  }

  return <RecipeCardGrid recipes={recipes} columns={3} />;
}
