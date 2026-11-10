import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStory, getAllStories } from "@/content/stories";
import { getAuthor } from "@/content/authors";
import { getRecipe } from "@/content/recipes";
import { formatDate } from "@/lib/utilities/format";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/seo/structured-data";
import { renderMarkdown } from "@/lib/markdown";
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
    alternates: { canonical: `/beyond-the-recipes/${story.slug}/` },
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
        { name: "Beyond the Recipes", url: "/beyond-the-recipes" },
        { name: story.title, url: `/beyond-the-recipes/${story.slug}/` },
      ])) }} />
      {story.faqs && story.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQPageSchema(story.faqs)) }} />
      )}

      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8">
        <Breadcrumbs items={[{ label: "Beyond the Recipes", href: "/beyond-the-recipes" }, { label: story.title }]} />

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
            className="rich-text text-lg mb-12"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(story.content, story.contentImages) }}
          />

          {/* FAQs */}
          {story.faqs && story.faqs.length > 0 && (
            <section className="rich-text mb-12" aria-labelledby="faq">
              <h2 id="faq">Frequently Asked Questions</h2>
              {story.faqs.map((faq, i) => (
                <div key={i}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}

          {/* Sources */}
          {story.sourceLinks && story.sourceLinks.length > 0 && (
            <section className="mb-12 border-t border-warm-taupe pt-6">
              <h2 className="label-caps text-on-surface-variant mb-3">Sources</h2>
              <ul className="space-y-1 text-sm">
                {story.sourceLinks.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener" target="_blank" className="text-deep-plum underline decoration-saffron underline-offset-2 hover:text-muted-berry">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

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
