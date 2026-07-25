import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getRecipe, getAllRecipes } from "@/content/recipes";
import { getAuthor } from "@/content/authors";
import { generateRecipeSchema, generateBreadcrumbSchema } from "@/lib/seo/structured-data";
import { formatDate, formatTime } from "@/lib/utilities/format";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RecipePageClient from "./RecipePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return {
    title: recipe.seoTitle,
    description: recipe.metaDescription,
    openGraph: {
      title: recipe.seoTitle,
      description: recipe.metaDescription,
      images: [recipe.heroImage],
      type: "article",
    },
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const author = getAuthor(recipe.author);
  const relatedRecipes = (recipe.relatedRecipeSlugs ?? [])
    .map((s) => getRecipe(s))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Recipes", href: "/recipes" },
    { label: recipe.archiveTitle },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateRecipeSchema(recipe)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Recipes", url: "/recipes" },
              { name: recipe.archiveTitle, url: `/recipes/${recipe.slug}` },
            ])
          ),
        }}
      />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <article>
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-[64px] md:leading-[72px] text-deep-plum mb-4">
              {recipe.pageTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-4 border-y border-warm-taupe py-3 text-sm text-on-surface-variant">
              <span>
                By{" "}
                {author ? (
                  <a href={`/authors/${author.slug}/`} className="font-bold hover:text-deep-plum">
                    {author.name}
                  </a>
                ) : (
                  recipe.author
                )}
              </span>
              <span className="text-warm-taupe">|</span>
              <span>Updated: {formatDate(recipe.updatedAt ?? recipe.publishedAt)}</span>
            </div>
          </header>

          <RecipePageClient recipe={recipe} relatedRecipes={relatedRecipes as import("@/lib/schema/recipe").Recipe[]} />
        </article>
      </div>
    </>
  );
}
