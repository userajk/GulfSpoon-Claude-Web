import RecipeCard from "./RecipeCard";
import type { Recipe } from "@/lib/schema/recipe";

interface RecipeCardGridProps {
  recipes: Recipe[];
  columns?: 3 | 5;
  priority?: boolean;
}

export default function RecipeCardGrid({ recipes, columns = 3, priority = false }: RecipeCardGridProps) {
  const gridClass = columns === 5
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClass}>
      {recipes.map((recipe, i) => (
        <RecipeCard key={recipe.slug} recipe={recipe} priority={priority && i < 3} />
      ))}
    </div>
  );
}
