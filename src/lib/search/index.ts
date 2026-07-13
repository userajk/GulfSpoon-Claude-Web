import { getAllRecipes, searchRecipes } from "@/content/recipes";
import { getAllStories, searchStories } from "@/content/stories";

export interface SearchResult {
  type: "recipe" | "story";
  slug: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  url: string;
}

export function search(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const recipeResults: SearchResult[] = searchRecipes(query).map((r) => ({
    type: "recipe",
    slug: r.slug,
    title: r.archiveTitle,
    description: r.shortDescription,
    image: r.heroImage,
    category: r.cuisine,
    url: `/recipes/${r.slug}`,
  }));

  const storyResults: SearchResult[] = searchStories(query).map((s) => ({
    type: "story",
    slug: s.slug,
    title: s.title,
    description: s.standfirst,
    image: s.heroImage,
    category: s.category,
    url: `/food-stories/${s.slug}`,
  }));

  return [...recipeResults, ...storyResults];
}

export function getFilteredRecipes(filters: {
  cuisine?: string[];
  mealType?: string[];
  dietary?: string[];
  difficulty?: string[];
  method?: string[];
  maxTime?: number;
  query?: string;
  sort?: string;
}) {
  let results = filters.query ? searchRecipes(filters.query) : getAllRecipes();

  if (filters.cuisine?.length) {
    results = results.filter((r) =>
      filters.cuisine!.some((c) => r.cuisine.toLowerCase() === c.toLowerCase())
    );
  }
  if (filters.mealType?.length) {
    results = results.filter((r) =>
      filters.mealType!.some((m) => r.mealTypes.some((mt) => mt.toLowerCase() === m.toLowerCase()))
    );
  }
  if (filters.dietary?.length) {
    results = results.filter((r) =>
      filters.dietary!.some((d) => (r.dietaryTags ?? []).some((dt) => dt.toLowerCase() === d.toLowerCase()))
    );
  }
  if (filters.difficulty?.length) {
    results = results.filter((r) =>
      filters.difficulty!.some((d) => r.difficulty.toLowerCase() === d.toLowerCase())
    );
  }
  if (filters.method?.length) {
    results = results.filter((r) =>
      filters.method!.some((m) => r.cookingMethods.some((cm) => cm.toLowerCase() === m.toLowerCase()))
    );
  }
  if (filters.maxTime) {
    results = results.filter((r) => r.totalTimeMinutes <= filters.maxTime!);
  }

  switch (filters.sort) {
    case "title":
      results.sort((a, b) => a.recipeName.localeCompare(b.recipeName));
      break;
    case "quickest":
      results.sort((a, b) => a.totalTimeMinutes - b.totalTimeMinutes);
      break;
    case "newest":
    default:
      results.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      break;
  }

  return results;
}
