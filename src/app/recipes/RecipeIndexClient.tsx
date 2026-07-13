"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import RecipeCard from "@/components/recipes/RecipeCard";
import { cn } from "@/lib/utilities/format";
import type { Recipe } from "@/lib/schema/recipe";

const CUISINES = ["Emirati", "Kuwaiti", "Levantine", "Pakistani", "Filipino", "International"];
const MEALS = ["Breakfast", "Main Course", "Dessert", "Snack", "Dinner"];
const DIETARY = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];
const DIFFICULTY = ["Easy", "Medium", "Hard"];
const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "title", label: "A-Z" },
  { value: "quickest", label: "Preparation Time" },
];

interface Props {
  initialRecipes: Recipe[];
}

export default function RecipeIndexClient({ initialRecipes }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(() => searchParams.getAll("cuisine"));
  const [selectedMeals, setSelectedMeals] = useState<string[]>(() => searchParams.getAll("meal"));
  const [selectedDietary, setSelectedDietary] = useState<string[]>(() => searchParams.getAll("dietary"));
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>(() => searchParams.getAll("difficulty"));
  const [sort, setSort] = useState(searchParams.get("sort") ?? "newest");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const updateURL = useCallback(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    selectedCuisines.forEach((c) => params.append("cuisine", c));
    selectedMeals.forEach((m) => params.append("meal", m));
    selectedDietary.forEach((d) => params.append("dietary", d));
    selectedDifficulty.forEach((d) => params.append("difficulty", d));
    if (sort !== "newest") params.set("sort", sort);
    const str = params.toString();
    router.replace(`/recipes${str ? `?${str}` : ""}`, { scroll: false });
  }, [query, selectedCuisines, selectedMeals, selectedDietary, selectedDifficulty, sort, router]);

  useEffect(() => {
    const timer = setTimeout(updateURL, 300);
    return () => clearTimeout(timer);
  }, [updateURL]);

  const filtered = useMemo(() => {
    let results = [...initialRecipes];

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (r) =>
          r.recipeName.toLowerCase().includes(q) ||
          r.shortDescription.toLowerCase().includes(q) ||
          r.cuisine.toLowerCase().includes(q) ||
          r.ingredients.some((g) => g.items.some((i) => i.item.toLowerCase().includes(q)))
      );
    }

    if (selectedCuisines.length) {
      results = results.filter((r) => selectedCuisines.some((c) => r.cuisine.toLowerCase() === c.toLowerCase()));
    }
    if (selectedMeals.length) {
      results = results.filter((r) => selectedMeals.some((m) => r.mealTypes.some((mt) => mt.toLowerCase() === m.toLowerCase())));
    }
    if (selectedDietary.length) {
      results = results.filter((r) => selectedDietary.some((d) => (r.dietaryTags ?? []).some((dt) => dt.toLowerCase() === d.toLowerCase())));
    }
    if (selectedDifficulty.length) {
      results = results.filter((r) => selectedDifficulty.includes(r.difficulty));
    }

    switch (sort) {
      case "title": results.sort((a, b) => a.recipeName.localeCompare(b.recipeName)); break;
      case "quickest": results.sort((a, b) => a.totalTimeMinutes - b.totalTimeMinutes); break;
      default: results.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return results;
  }, [initialRecipes, query, selectedCuisines, selectedMeals, selectedDietary, selectedDifficulty, sort]);

  function toggleFilter(arr: string[], setArr: (v: string[]) => void, value: string) {
    setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  }

  function clearAll() {
    setQuery(""); setSelectedCuisines([]); setSelectedMeals([]); setSelectedDietary([]); setSelectedDifficulty([]);
    setSort("newest");
  }

  const hasFilters = query || selectedCuisines.length || selectedMeals.length || selectedDietary.length || selectedDifficulty.length;

  const filterSidebar = (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant pb-2">
        <h2 className="font-serif text-xl text-deep-plum">Filters</h2>
        {hasFilters && (
          <button onClick={clearAll} className="label-caps text-saffron hover:text-deep-plum transition-colors">
            Clear All
          </button>
        )}
      </div>
      <FilterGroup title="Cuisine" options={CUISINES} selected={selectedCuisines} toggle={(v) => toggleFilter(selectedCuisines, setSelectedCuisines, v)} />
      <FilterGroup title="Meal" options={MEALS} selected={selectedMeals} toggle={(v) => toggleFilter(selectedMeals, setSelectedMeals, v)} />
      <FilterGroup title="Dietary" options={DIETARY} selected={selectedDietary} toggle={(v) => toggleFilter(selectedDietary, setSelectedDietary, v)} />
      <FilterGroup title="Difficulty" options={DIFFICULTY} selected={selectedDifficulty} toggle={(v) => toggleFilter(selectedDifficulty, setSelectedDifficulty, v)} />
    </div>
  );

  return (
    <>
      {/* Search */}
      <div className="relative w-full max-w-4xl mb-8">
        <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-warm-taupe" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by ingredient, dish, or cuisine..."
          className="w-full h-14 pl-14 pr-5 bg-white border border-outline-variant text-base focus:border-deep-plum focus:ring-0 focus:outline-none"
          aria-label="Search recipes"
        />
      </div>

      {/* Mobile filter toggle */}
      <button
        onClick={() => setMobileFiltersOpen(true)}
        className="md:hidden flex items-center gap-2 mb-6 text-sm font-semibold text-deep-plum border border-deep-plum px-4 py-2"
      >
        <SlidersHorizontal size={16} /> Filters
      </button>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-warm-cream p-6 overflow-y-auto rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-xl text-deep-plum">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={24} />
              </button>
            </div>
            {filterSidebar}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden md:block md:col-span-3 pr-4 border-r border-outline-variant">
          {filterSidebar}
        </aside>

        {/* Results */}
        <div className="md:col-span-9">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-2 border-b border-outline-variant gap-3">
            <p className="text-sm text-on-surface-variant">
              <strong className="text-deep-plum">{filtered.length}</strong> recipes found
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="label-caps text-on-surface-variant">Sort By:</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border-none text-sm font-semibold text-deep-plum focus:ring-0 cursor-pointer pr-6"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="font-serif text-2xl text-deep-plum mb-2">No recipes found</h3>
              <p className="text-on-surface-variant mb-4">Try adjusting your filters or search term.</p>
              <button onClick={clearAll} className="text-sm font-semibold text-saffron hover:text-deep-plum transition-colors">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function FilterGroup({ title, options, selected, toggle }: {
  title: string;
  options: string[];
  selected: string[];
  toggle: (v: string) => void;
}) {
  return (
    <div className="space-y-2 pt-2 border-t border-outline-variant/50">
      <h3 className="label-caps text-on-surface-variant mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
              className="accent-deep-plum w-4 h-4"
            />
            <span className={cn("text-sm group-hover:text-deep-plum transition-colors", selected.includes(opt) && "font-semibold")}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
