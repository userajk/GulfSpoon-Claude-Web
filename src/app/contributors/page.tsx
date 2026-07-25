import { Metadata } from "next";
import Link from "next/link";
import { getAllAuthors } from "@/content/authors";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Meet the food writers, recipe developers, and cultural researchers behind GulfSpoon. Our team brings deep expertise in Gulf, Levantine, and South Asian cuisines.",
};

export default function ContributorsPage() {
  const authors = getAllAuthors();

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Contributors" }]} />
      <header className="max-w-3xl mb-12">
        <h1 className="font-serif text-4xl md:text-[48px] md:leading-[56px] text-deep-plum mb-4">Our Contributors</h1>
        <p className="text-lg text-on-surface-variant">Meet the writers, recipe developers, and cultural researchers behind GulfSpoon.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author) => (
          <Link key={author.slug} href={`/authors/${author.slug}/`} className="group border border-outline-variant p-6 hover:border-deep-plum transition-colors">
            <h2 className="font-serif text-xl text-deep-plum group-hover:text-saffron transition-colors mb-1">{author.name}</h2>
            <p className="label-caps text-saffron mb-3">{author.role}</p>
            <p className="text-sm text-on-surface-variant line-clamp-3">{author.biography}</p>
            {author.expertise && author.expertise.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {author.expertise.map((e) => (
                  <span key={e} className="text-xs px-2 py-0.5 bg-soft-sand text-on-surface-variant">{e}</span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
