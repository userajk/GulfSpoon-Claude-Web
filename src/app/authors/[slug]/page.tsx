import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAuthor, getAllAuthors } from "@/content/authors";
import { getAllRecipes } from "@/content/recipes";
import { getAllStories } from "@/content/stories";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return { title: `${author.name} — ${author.role}`, description: author.biography };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const recipes = getAllRecipes().filter((r) => r.author === author.slug);
  const stories = getAllStories().filter((s) => s.author === author.slug);

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Contributors", href: "/contributors" }, { label: author.name }]} />

      <header className="max-w-3xl mb-12">
        <h1 className="font-serif text-4xl text-deep-plum mb-2">{author.name}</h1>
        <p className="label-caps text-saffron mb-4">{author.role}</p>
        <p className="text-on-surface-variant leading-relaxed">{author.biography}</p>
        {author.expertise && author.expertise.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {author.expertise.map((e) => (
              <span key={e} className="text-xs px-3 py-1 border border-outline-variant text-on-surface-variant">{e}</span>
            ))}
          </div>
        )}
        {author.culturalBackground && (
          <p className="text-sm text-on-surface-variant mt-4"><strong>Cultural Background:</strong> {author.culturalBackground}</p>
        )}
        {author.recipeTestingApproach && (
          <p className="text-sm text-on-surface-variant mt-2"><strong>Testing Approach:</strong> {author.recipeTestingApproach}</p>
        )}
      </header>

      {recipes.length > 0 && (
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-deep-plum mb-6">Recipes by {author.name}</h2>
          <RecipeCardGrid recipes={recipes} columns={3} />
        </section>
      )}

      {stories.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl text-deep-plum mb-6">Stories by {author.name}</h2>
          <div className="space-y-4">
            {stories.map((story) => (
              <a key={story.slug} href={`/food-stories/${story.slug}`} className="block p-4 border border-outline-variant hover:border-deep-plum transition-colors">
                <span className="label-caps text-saffron">{story.category}</span>
                <h3 className="font-serif text-lg text-deep-plum">{story.title}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{story.standfirst}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
