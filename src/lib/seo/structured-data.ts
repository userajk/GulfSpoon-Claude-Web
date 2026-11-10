import { Recipe } from "@/lib/schema/recipe";
import { Story } from "@/lib/schema/story";
import { getAuthor } from "@/content/authors";

const SITE_URL = "https://gulfspoon.com";

const DIET_MAP: Record<string, string> = {
  vegetarian: "https://schema.org/VegetarianDiet",
  vegan: "https://schema.org/VeganDiet",
  "gluten-free": "https://schema.org/GlutenFreeDiet",
  halal: "https://schema.org/HalalDiet",
  "low-calorie": "https://schema.org/LowCalorieDiet",
  "low-fat": "https://schema.org/LowFatDiet",
};

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
    image: [`${SITE_URL}${recipe.heroImage}`],
    url: `${SITE_URL}/recipes/${recipe.slug}/`,
    mainEntityOfPage: `${SITE_URL}/recipes/${recipe.slug}/`,
    author: {
      "@type": "Person",
      name: author?.name ?? recipe.author,
      ...(author ? { url: `${SITE_URL}/authors/${author.slug}/` } : {}),
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

  const keywords = [recipe.primaryKeyword, ...(recipe.secondaryKeywords ?? [])].filter(Boolean);
  if (keywords.length) schema.keywords = keywords.join(", ");
  if (recipe.cookingMethods.length) schema.cookingMethod = recipe.cookingMethods.join(", ");
  if (recipe.dietaryTags?.length) schema.suitableForDiet = recipe.dietaryTags
    .map((t) => DIET_MAP[t.toLowerCase()])
    .filter(Boolean);
  if (recipe.nutrition && Object.keys(recipe.nutrition).length) {
    schema.nutrition = { "@type": "NutritionInformation", ...recipe.nutrition };
  }

  return schema;
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(story: Story) {
  const author = getAuthor(story.author);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    image: [`${SITE_URL}${story.heroImage}`],
    mainEntityOfPage: `${SITE_URL}/beyond-the-recipes/${story.slug}/`,
    ...(story.primaryKeyword
      ? { keywords: [story.primaryKeyword, ...(story.secondaryKeywords ?? [])].join(", ") }
      : {}),
    author: {
      "@type": "Person",
      name: author?.name ?? story.author,
      ...(author ? { url: `${SITE_URL}/authors/${author.slug}/` } : {}),
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
