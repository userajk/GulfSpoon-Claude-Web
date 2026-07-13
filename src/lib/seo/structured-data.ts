import { Recipe } from "@/lib/schema/recipe";
import { Story } from "@/lib/schema/story";
import { getAuthor } from "@/content/authors";

const SITE_URL = "https://gulfspoon.com";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GulfSpoon",
    url: SITE_URL,
    logo: `${SITE_URL}/images/gulfspoon-logo-v2.png`,
    description: "Recipes from the Gulf and the people who call it home.",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GulfSpoon",
    url: SITE_URL,
    description: "Recipes from the Gulf and the people who call it home.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateRecipeSchema(recipe: Recipe) {
  const author = getAuthor(recipe.author);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.recipeName,
    image: `${SITE_URL}${recipe.heroImage}`,
    author: {
      "@type": "Person",
      name: author?.name ?? recipe.author,
    },
    datePublished: recipe.publishedAt,
    description: recipe.shortDescription,
    prepTime: `PT${recipe.prepTimeMinutes}M`,
    cookTime: `PT${recipe.cookTimeMinutes}M`,
    totalTime: `PT${recipe.totalTimeMinutes}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.mealTypes[0],
    recipeCuisine: recipe.cuisine,
    recipeIngredient: recipe.ingredients.flatMap((g) =>
      g.items.map((i) => [i.amount, i.unit, i.item].filter(Boolean).join(" "))
    ),
    recipeInstructions: recipe.instructions.map((s) => ({
      "@type": "HowToStep",
      text: s.text,
    })),
  };

  if (recipe.updatedAt) {
    schema.dateModified = recipe.updatedAt;
  }

  return schema;
}

export function generateArticleSchema(story: Story) {
  const author = getAuthor(story.author);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    image: `${SITE_URL}${story.heroImage}`,
    author: {
      "@type": "Person",
      name: author?.name ?? story.author,
    },
    datePublished: story.publishedAt,
    dateModified: story.updatedAt ?? story.publishedAt,
    description: story.standfirst,
    publisher: {
      "@type": "Organization",
      name: "GulfSpoon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/gulfspoon-logo-v2.png`,
      },
    },
  };
}
