"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Printer, Bookmark, Share2, ChefHat, Clock, Users, BarChart3, ArrowDown } from "lucide-react";
import { formatTime, scaleAmount, cn } from "@/lib/utilities/format";
import { useSavedRecipes } from "@/lib/saved-recipes";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";
import type { Recipe } from "@/lib/schema/recipe";

interface Props {
  recipe: Recipe;
  relatedRecipes: Recipe[];
}

export default function RecipePageClient({ recipe, relatedRecipes }: Props) {
  const [scale, setScale] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [cookMode, setCookMode] = useState(false);
  const { toggle, isSaved, hydrated } = useSavedRecipes();
  const recipeCardRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);

  const saved = hydrated && isSaved(recipe.slug);

  function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: recipe.pageTitle, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  }

  function toggleIngredient(key: string) {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className={cn(cookMode && "text-lg leading-relaxed")}>
      {/* Top controls */}
      <div className="flex flex-wrap gap-3 mb-6 no-print">
        <button
          onClick={() => recipeCardRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-1 text-sm font-semibold text-deep-plum hover:text-saffron transition-colors"
        >
          <ArrowDown size={16} /> Jump to Recipe
        </button>
        <button
          onClick={() => ingredientsRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-1 text-sm font-semibold text-deep-plum hover:text-saffron transition-colors"
        >
          <ArrowDown size={16} /> Jump to Ingredients
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1 text-sm font-semibold text-deep-plum hover:text-saffron transition-colors"
        >
          <Printer size={16} /> Print
        </button>
        <button
          onClick={() => toggle(recipe.slug)}
          className="flex items-center gap-1 text-sm font-semibold text-deep-plum hover:text-saffron transition-colors"
        >
          <Bookmark size={16} fill={saved ? "currentColor" : "none"} /> {saved ? "Saved" : "Save"}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-1 text-sm font-semibold text-deep-plum hover:text-saffron transition-colors"
        >
          <Share2 size={16} /> Share
        </button>
      </div>

      {/* Hero image */}
      <div className="relative w-full aspect-[16/9] mb-8 border border-warm-taupe bg-soft-ivory p-1">
        <Image
          src={recipe.heroImage}
          alt={recipe.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 820px"
          priority
        />
      </div>

      {/* Quick facts */}
      <div className="bg-soft-ivory border border-warm-taupe p-4 flex flex-wrap justify-between gap-4 mb-12">
        {[
          { label: "Prep", value: formatTime(recipe.prepTimeMinutes), icon: <Clock size={16} /> },
          { label: "Cook", value: formatTime(recipe.cookTimeMinutes), icon: <Clock size={16} /> },
          { label: "Total", value: formatTime(recipe.totalTimeMinutes), icon: <Clock size={16} /> },
          { label: "Servings", value: String(recipe.servings * scale), icon: <Users size={16} /> },
          { label: "Difficulty", value: recipe.difficulty, icon: <BarChart3 size={16} /> },
          { label: "Cuisine", value: recipe.cuisine, icon: <ChefHat size={16} /> },
        ].map((fact) => (
          <div key={fact.label} className="flex flex-col items-center min-w-[80px]">
            <span className="label-caps text-saffron mb-1">{fact.label}</span>
            <span className="text-sm font-bold flex items-center gap-1">{fact.icon} {fact.value}</span>
          </div>
        ))}
      </div>

      {/* Short Description */}
      <p className="text-lg leading-relaxed mb-8">
        {recipe.shortDescription}
      </p>

      {/* Intro & Origin */}
      {recipe.intro && (
        <div className="mb-12 space-y-4 text-base leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: recipe.intro
              .split("\n\n")
              .map((p) => `<p>${p.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p>`)
              .join(""),
          }}
        />
      )}

      {/* Recipe card */}
      <div ref={recipeCardRef} className="bg-soft-ivory border border-warm-taupe p-6 md:p-8 mb-12" id="recipe-card">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-plum">{recipe.recipeName}</h2>
        </div>

        {/* Scale + Print controls */}
        <div className="flex items-center justify-between border-b border-warm-taupe pb-4 mb-6 no-print">
          <div className="flex items-center gap-3">
            <span className="label-caps text-saffron">Scale:</span>
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => setScale(s)}
                className={cn(
                  "text-sm font-semibold px-2 py-1 transition-colors",
                  scale === s ? "text-deep-plum underline" : "text-on-surface-variant hover:text-deep-plum"
                )}
              >
                {s}x
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCookMode((p) => !p)}
              className={cn(
                "text-sm font-semibold px-3 py-1 border transition-colors",
                cookMode ? "bg-deep-plum text-white border-deep-plum" : "border-deep-plum text-deep-plum hover:bg-deep-plum hover:text-white"
              )}
            >
              {cookMode ? "Exit Cook Mode" : "Cook Mode"}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 text-sm font-semibold border border-deep-plum text-deep-plum px-3 py-1 hover:bg-deep-plum hover:text-white transition-colors"
            >
              <Printer size={14} /> Print
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div ref={ingredientsRef}>
            <h3 className="font-serif text-2xl text-deep-plum mb-4 border-b border-soft-sand pb-2">
              Ingredients
            </h3>
            {recipe.ingredients.map((group, gi) => (
              <div key={gi} className="mb-4">
                {group.title && (
                  <h4 className="label-caps text-on-surface-variant mb-3">{group.title}</h4>
                )}
                <ul className="space-y-3">
                  {group.items.map((ing, ii) => {
                    const key = `${gi}-${ii}`;
                    const checked = checkedIngredients.has(key);
                    const scaledAmount = scaleAmount(ing.amount, scale);
                    return (
                      <li key={key} className="flex items-start gap-3">
                        <button
                          onClick={() => toggleIngredient(key)}
                          className={cn(
                            "w-4 h-4 mt-1 shrink-0 border transition-colors",
                            checked ? "bg-saffron border-saffron" : "border-warm-taupe"
                          )}
                          aria-label={`Mark ${ing.item} as ${checked ? "needed" : "done"}`}
                        />
                        <span className={cn("text-base", checked && "line-through text-on-surface-variant")}>
                          {scaledAmount && `${scaledAmount} `}
                          {ing.unit && `${ing.unit} `}
                          {ing.item}
                          {ing.note && <span className="text-on-surface-variant"> ({ing.note})</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-serif text-2xl text-deep-plum mb-4 border-b border-soft-sand pb-2">
              Instructions
            </h3>
            <ol className="space-y-6">
              {recipe.instructions.map((step) => (
                <li key={step.step} className="relative pl-8">
                  <span className="absolute left-0 top-0 font-serif text-xl text-saffron leading-none">
                    {step.step}
                  </span>
                  <p className="text-base leading-relaxed">{step.text}</p>
                  {step.tip && (
                    <p className="mt-2 text-base text-herb-green italic border-l-2 border-herb-green pl-3">
                      {step.tip}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Tips */}
      {recipe.tips && recipe.tips.length > 0 && (
        <div className="mb-12 border border-herb-green bg-herb-green/5 p-6">
          <h3 className="font-serif text-xl text-deep-plum mb-3">Tips</h3>
          <ul className="space-y-2">
            {recipe.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-base">
                <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2.5 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Substitutions */}
      {recipe.substitutions && recipe.substitutions.length > 0 && (
        <div className="mb-12">
          <h3 className="font-serif text-xl text-deep-plum mb-3">Substitutions</h3>
          <ul className="space-y-2">
            {recipe.substitutions.map((sub, i) => (
              <li key={i} className="flex items-start gap-2 text-base">
                <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2.5 shrink-0" />
                {sub}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Storage */}
      {recipe.storage && (
        <div className="mb-12">
          <h3 className="font-serif text-xl text-deep-plum mb-2">Storage</h3>
          <p className="text-base text-on-surface-variant">{recipe.storage}</p>
        </div>
      )}

      {/* FAQs */}
      {recipe.faqs && recipe.faqs.length > 0 && (
        <div className="mb-12">
          <h3 className="font-serif text-xl text-deep-plum mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {recipe.faqs.map((faq, i) => (
              <div key={i}>
                <h4 className="font-semibold text-base mb-1">{faq.question}</h4>
                <p className="text-base text-on-surface-variant">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related recipes */}
      {relatedRecipes.length > 0 && (
        <div className="mb-12">
          <h3 className="font-serif text-2xl text-deep-plum mb-6">You Might Also Like</h3>
          <RecipeCardGrid recipes={relatedRecipes} columns={3} />
        </div>
      )}
    </div>
  );
}
