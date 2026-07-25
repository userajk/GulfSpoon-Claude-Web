import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStory, getAllStories } from "@/content/stories";
import { getAuthor } from "@/content/authors";
import { getRecipe } from "@/content/recipes";
import { formatDate } from "@/lib/utilities/format";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo/structured-data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: story.seoTitle,
    description: story.metaDescription,
    openGraph: { title: story.seoTitle, description: story.metaDescription, images: [story.heroImage], type: "article" },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const author = getAuthor(story.author);
  const relatedRecipes = (story.relatedRecipes ?? []).map((s) => getRecipe(s)).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(story)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Food Stories", url: "/food-stories" },
        { name: story.title, url: `/food-stories/${story.slug}/` },
      ])) }} />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8">
        <Breadcrumbs items={[{ label: "Food Stories", href: "/food-stories" }, { label: story.title }]} />

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <span className="label-caps text-saffron block mb-3">{story.category}</span>
            <h1 className="font-serif text-4xl md:text-[48px] md:leading-[56px] text-deep-plum mb-4">
              {story.title}
            </h1>
            <p className="text-lg text-on-surface-variant italic mb-4">{story.standfirst}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant border-y border-warm-taupe py-3">
              {author && (
                <span>
                  By <Link href={`/authors/${author.slug}/`} className="font-bold hover:text-deep-plum">{author.name}</Link>
                </span>
              )}
              <span className="text-warm-taupe">|</span>
              <span>{formatDate(story.publishedAt)}</span>
            </div>
          </header>

          <div className="relative aspect-[16/9] mb-8 border border-warm-taupe">
            <Image src={story.heroImage} alt={story.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" priority />
          </div>

          {/* Table of Contents */}
          {story.tableOfContents && story.tableOfContents.length > 0 && (
            <nav className="mb-8 p-4 border border-outline-variant bg-soft-ivory">
              <h2 className="label-caps text-deep-plum mb-3">Contents</h2>
              <ul className="space-y-1">
                {story.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-on-surface-variant hover:text-deep-plum transition-colors">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12
              [&_h2]:font-serif [&_h2]:text-deep-plum [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4
              [&_p]:text-charcoal [&_p]:leading-relaxed [&_p]:mb-4
              [&_strong]:text-deep-plum
              [&_figure]:my-10 [&_figure]:border [&_figure]:border-warm-taupe
              [&_figcaption]:text-sm [&_figcaption]:text-on-surface-variant [&_figcaption]:italic [&_figcaption]:px-4 [&_figcaption]:py-3 [&_figcaption]:bg-soft-ivory"
            dangerouslySetInnerHTML={{ __html: story.content
              .replace(/## (.*?) \{#(.*?)\}/g, '<h2 id="$2">$1</h2>')
              .replace(/\{\{image:(.*?)\}\}/g, (_match, key) => {
                const img = story.contentImages?.[key];
                if (!img) return '';
                return `</p><figure><img src="${img.src}" alt="${img.alt}" loading="lazy" style="width:100%;height:auto;display:block;" />${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}</figure><p>`;
              })
              .replace(/\n\n/g, '</p><p>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />

          {/* Author bio */}
          {author && (
            <div className="border-t border-warm-taupe pt-8 mb-12">
              <h3 className="label-caps text-on-surface-variant mb-3">About the Author</h3>
              <Link href={`/authors/${author.slug}/`} className="flex items-start gap-4 group">
                <div>
                  <span className="font-serif text-lg text-deep-plum group-hover:text-saffron transition-colors">{author.name}</span>
                  <p className="text-sm text-on-surface-variant mt-1">{author.biography}</p>
                </div>
              </Link>
            </div>
          )}

          {/* Related recipes */}
          {relatedRecipes.length > 0 && (
            <div className="mb-12">
              <h3 className="font-serif text-2xl text-deep-plum mb-6">Related Recipes</h3>
              <RecipeCardGrid recipes={relatedRecipes as import("@/lib/schema/recipe").Recipe[]} columns={3} />
            </div>
          )}
        </article>
      </div>
    </>
  );
}
