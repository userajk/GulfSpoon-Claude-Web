import Link from "next/link";
import Image from "next/image";
import { getCategory } from "@/content/categories";
import { getRecipesByCategory, getRecipesByCuisine } from "@/content/recipes";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";
import type { Category } from "@/lib/schema/category";

interface Props {
  category: Category;
  subcategories?: Category[];
}

export default function CategoryPage({ category, subcategories }: Props) {
  const recipes =
    category.type === "cuisine"
      ? getRecipesByCuisine(category.slug)
      : getRecipesByCategory(category.slug);

  const featured = recipes[0];
  const popular = recipes.slice(1, 4);
  const latest = recipes.slice(0, 6);

  const breadcrumbParent = category.type === "cuisine"
    ? { label: "Gulf Kitchen", href: "/gulf-kitchen" }
    : undefined;

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs
        items={[
          ...(breadcrumbParent ? [breadcrumbParent] : []),
          { label: category.name },
        ]}
      />

      {/* Header */}
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-[64px] md:leading-[72px] text-deep-plum mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-on-surface-variant">{category.description}</p>
      </header>

      {/* Subcategory nav */}
      {subcategories && subcategories.length > 0 && (
        <div className="mb-16 overflow-x-auto pb-4 border-b border-outline-variant">
          <div className="flex items-center gap-6 min-w-max justify-center">
            {subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/cuisines/${sub.slug}`}
                className="label-caps text-on-surface-variant hover:text-deep-plum transition-colors pb-3"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Featured recipe */}
      {featured && (
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <Link href={`/recipes/${featured.slug}`} className="block relative aspect-[4/3] overflow-hidden border border-outline-variant">
                <Image
                  src={featured.heroImage}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </Link>
            </div>
            <div className="md:col-span-4 bg-white p-6 border border-outline-variant">
              <span className="label-caps text-saffron mb-2 block">Featured Recipe</span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-plum mb-3 leading-tight">
                {featured.archiveTitle}
              </h2>
              <p className="text-on-surface-variant text-sm mb-4 line-clamp-4">
                {featured.shortDescription}
              </p>
              <Link
                href={`/recipes/${featured.slug}`}
                className="inline-flex items-center bg-deep-plum text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors"
              >
                Read Recipe
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Popular recipes */}
      {popular.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6 border-b border-outline-variant pb-3">
            <h3 className="font-serif text-2xl text-deep-plum">Popular Recipes</h3>
            <Link href="/recipes" className="label-caps text-saffron hover:text-deep-plum transition-colors">
              View All
            </Link>
          </div>
          <RecipeCardGrid recipes={popular} columns={3} />
        </section>
      )}

      {/* Latest */}
      {latest.length > 0 && (
        <section className="mb-20">
          <h3 className="font-serif text-2xl text-deep-plum mb-6">Latest Recipes</h3>
          <RecipeCardGrid recipes={latest} columns={3} />
        </section>
      )}

      {/* Newsletter block */}
      <section className="bg-surface-container-low border border-outline-variant p-8 md:p-12 text-center">
        <h3 className="font-serif text-2xl text-deep-plum mb-2">Stay Updated</h3>
        <p className="text-on-surface-variant mb-4">
          Get the latest {category.name.toLowerCase()} recipes delivered to your inbox.
        </p>
        <Link
          href="/recipes"
          className="inline-flex items-center bg-deep-plum text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors"
        >
          Browse All Recipes
        </Link>
      </section>
    </div>
  );
}
