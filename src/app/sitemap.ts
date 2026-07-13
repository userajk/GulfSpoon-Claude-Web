import { MetadataRoute } from "next";
import { getAllRecipes } from "@/content/recipes";
import { getAllStories } from "@/content/stories";
import { getAllAuthors } from "@/content/authors";
import { getCuisines } from "@/content/categories";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gulfspoon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const recipes = getAllRecipes().map((r) => ({
    url: `${BASE_URL}/recipes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const stories = getAllStories().map((s) => ({
    url: `${BASE_URL}/food-stories/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const authors = getAllAuthors().map((a) => ({
    url: `${BASE_URL}/authors/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const cuisines = getCuisines().map((c) => ({
    url: `${BASE_URL}/cuisines/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticPages = [
    "", "/recipes", "/gulf-kitchen", "/expat-kitchens", "/breakfast",
    "/ramadan", "/quick-and-easy", "/drinks", "/desserts", "/food-stories",
    "/search", "/saved-recipes", "/about", "/contributors", "/contact",
    "/privacy-policy", "/cookie-policy", "/terms", "/disclaimer",
    "/editorial-policy", "/accessibility",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.5,
  }));

  return [...staticPages, ...recipes, ...stories, ...authors, ...cuisines];
}
