import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllStories } from "@/content/stories";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Food Stories",
  description: "Cultural features, ingredient deep dives, and the stories behind the dishes that bring Gulf communities together. Khaleeji traditions and expat food culture.",
};

export default function FoodStoriesPage() {
  const stories = getAllStories();
  const featured = stories[0];
  const latest = stories.slice(1);

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Food Stories" }]} />
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-[64px] md:leading-[72px] text-deep-plum mb-4">
          Food Stories
        </h1>
        <p className="text-lg text-on-surface-variant">
          Cultural features, ingredient guides, and the stories behind the dishes that bring communities together.
        </p>
      </header>

      {featured && (
        <section className="mb-20">
          <Link href={`/food-stories/${featured.slug}/`} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[16/10] overflow-hidden border border-outline-variant">
                <Image src={featured.heroImage} alt={featured.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
              <div>
                <span className="label-caps text-saffron mb-2 block">Featured · {featured.category}</span>
                <h2 className="font-serif text-3xl text-deep-plum group-hover:text-saffron transition-colors mb-3">{featured.title}</h2>
                <p className="text-on-surface-variant">{featured.standfirst}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section>
        <h2 className="font-serif text-2xl text-deep-plum mb-8">Latest Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((story) => (
            <Link key={story.slug} href={`/food-stories/${story.slug}/`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden mb-3 border border-outline-variant">
                <Image src={story.heroImage} alt={story.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <span className="label-caps text-saffron block mb-1">{story.category}</span>
              <h3 className="font-serif text-xl text-deep-plum group-hover:text-saffron transition-colors">{story.title}</h3>
              <p className="text-on-surface-variant text-sm mt-1 line-clamp-2">{story.standfirst}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
