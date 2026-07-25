"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart3, Bookmark } from "lucide-react";
import { formatTime, cn } from "@/lib/utilities/format";
import { useSavedRecipes } from "@/lib/saved-recipes";
import type { Recipe } from "@/lib/schema/recipe";

interface RecipeCardProps {
  recipe: Recipe;
  priority?: boolean;
}

export default function RecipeCard({ recipe, priority = false }: RecipeCardProps) {
  const { toggle, isSaved, hydrated } = useSavedRecipes();
  const saved = hydrated && isSaved(recipe.slug);

  return (
    <article className="group">
      <Link href={`/recipes/${recipe.slug}/`} className="block">
        <div className="relative overflow-hidden mb-2 aspect-[4/5] border border-outline-variant bg-surface-container">
          <Image
            src={recipe.heroImage}
            alt={recipe.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority={priority}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle(recipe.slug);
            }}
            className={cn(
              "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors",
              saved
                ? "bg-deep-plum text-white"
                : "bg-white/80 backdrop-blur-sm text-deep-plum hover:bg-deep-plum hover:text-white"
            )}
            aria-label={saved ? "Remove from saved recipes" : "Save recipe"}
          >
            <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="space-y-1.5">
          <span className="label-caps text-saffron block">
            {recipe.categories[0]?.replace(/-/g, " ")}
            {recipe.cuisine !== "International" && ` · ${recipe.cuisine}`}
          </span>
          <h3 className="font-serif text-xl text-deep-plum group-hover:text-saffron transition-colors line-clamp-2 leading-snug">
            {recipe.archiveTitle}
          </h3>
          <div className="flex items-center gap-4 pt-1.5 border-t border-outline-variant/30 text-on-surface-variant text-sm">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {formatTime(recipe.totalTimeMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 size={14} /> {recipe.difficulty}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
