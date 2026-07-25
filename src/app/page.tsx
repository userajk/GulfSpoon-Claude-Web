import Image from "next/image";
import Link from "next/link";
import { getAllRecipes } from "@/content/recipes";
import { getAllStories } from "@/content/stories";
import RecipeCardGrid from "@/components/recipes/RecipeCardGrid";
import { UtensilsCrossed, Flame, Coffee, IceCreamCone, BookOpen, Salad, Sunrise, Moon } from "lucide-react";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo/structured-data";

const categoryStrip = [
  { href: "/gulf-kitchen", label: "Gulf Kitchen", icon: "UtensilsCrossed" },
  { href: "/expat-kitchens", label: "Expat Kitchens", icon: "Flame" },
  { href: "/breakfast", label: "Breakfast", icon: "Sunrise" },
  { href: "/ramadan", label: "Ramadan", icon: "Moon" },
  { href: "/quick-and-easy", label: "Quick & Easy", icon: "Salad" },
  { href: "/desserts", label: "Desserts", icon: "IceCreamCone" },
  { href: "/drinks", label: "Drinks", icon: "Coffee" },
  { href: "/food-stories", label: "Food Stories", icon: "BookOpen" },
];

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={28} />,
  Flame: <Flame size={28} />,
  Coffee: <Coffee size={28} />,
  IceCreamCone: <IceCreamCone size={28} />,
  BookOpen: <BookOpen size={28} />,
  Salad: <Salad size={28} />,
  Sunrise: <Sunrise size={28} />,
  Moon: <Moon size={28} />,
};

const cuisineCards = [
  { slug: "emirati", name: "Emirati", image: "/images/recipes/chicken-machboos.jpg" },
  { slug: "pakistani", name: "Pakistani", image: "/images/recipes/halwa-puri.jpg" },
  { slug: "filipino", name: "Filipino", image: "/images/recipes/chicken-adobo.jpg" },
  { slug: "levantine", name: "Levantine", image: "/images/recipes/gulf-shakshuka.jpg" },
  { slug: "kuwaiti", name: "Kuwaiti", image: "/images/recipes/mutabbaq-samak.jpg" },
];

const quickEasyTabs = [
  "Under 30 Minutes", "One-Pot Meals", "Air Fryer", "Weeknight Dinners", "Lunchboxes", "Small-Kitchen Cooking",
];

const ramadanTabs = [
  "Iftar", "Suhoor", "Ramadan Drinks", "Make-Ahead Meals", "Desserts", "Eid Recipes",
];

export default function HomePage() {
  const recipes = getAllRecipes();
  const stories = getAllStories();
  const trending = recipes.slice(0, 5);
  const breakfastRecipes = recipes.filter((r) => r.categories.includes("breakfast")).slice(0, 3);
  const latestRecipes = recipes.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center">
        <Image
          src="/images/hero-cooking.png"
          alt="A copper wok tossing vibrant vegetables and diced meat over a blue gas flame"
          fill
          className="object-cover object-right"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-cream via-warm-cream/80 to-transparent w-2/3 hidden md:block" />
        <div className="absolute inset-0 bg-warm-cream/70 md:hidden" />

        <div className="relative w-full max-w-[1320px] mx-auto px-5 md:px-10 z-10">
          <div className="max-w-[540px]">
            <span className="label-caps text-saffron block mb-4">Welcome to GulfSpoon</span>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight text-deep-plum mb-6 text-balance">
              Good Food.<br />
              Many Cultures.<br />
              One Table.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-8 max-w-md">
              Discover the vibrant tapestry of culinary traditions that make up the modern Gulf.
              From authentic Khaleeji staples to the rich flavors of expat kitchens, explore
              recipes that bring diverse communities together around a shared love for food.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/recipes/"
                className="inline-flex items-center bg-deep-plum text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors"
              >
                Browse Recipes
              </Link>
              <Link
                href="/gulf-kitchen/"
                className="text-sm font-semibold text-deep-plum border-b-2 border-saffron pb-0.5 hover:text-saffron transition-colors"
              >
                Explore Gulf Kitchens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="border-b border-outline-variant py-6 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 md:gap-10 justify-between items-center md:justify-center">
            {categoryStrip.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex flex-col items-center gap-2 group min-w-[72px] shrink-0"
              >
                <span className="text-warm-taupe group-hover:text-saffron transition-colors">
                  {iconMap[cat.icon]}
                </span>
                <span className="label-caps text-on-surface-variant group-hover:text-deep-plum transition-colors text-center whitespace-nowrap text-[11px]">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-20 max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-4xl text-deep-plum">Trending Now</h2>
          <Link href="/recipes/" className="text-sm font-semibold text-deep-plum hover:text-saffron underline decoration-saffron underline-offset-4 transition-colors">
            View All
          </Link>
        </div>
        <RecipeCardGrid recipes={trending} columns={5} priority />
      </section>

      {/* A Gulf of Flavours */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <h2 className="font-serif text-4xl text-deep-plum mb-8 text-center">A Gulf of Flavours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cuisineCards.map((c) => (
              <Link key={c.slug} href={`/cuisines/${c.slug}/`} className="group relative aspect-[3/4] overflow-hidden border border-outline-variant">
                <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 50vw, 20vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-xl text-white">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How the Gulf Starts Its Day */}
      <section className="py-20 max-w-[1320px] mx-auto px-5 md:px-10">
        <h2 className="font-serif text-4xl text-deep-plum mb-8">How the Gulf Starts Its Day</h2>
        <RecipeCardGrid recipes={breakfastRecipes} columns={3} />
      </section>

      {/* Quick & Easy */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <h2 className="font-serif text-4xl text-deep-plum mb-6">Quick &amp; Easy</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {quickEasyTabs.map((tab) => (
              <Link key={tab} href="/quick-and-easy/" className="px-4 py-2 text-sm border border-outline-variant text-on-surface-variant hover:border-deep-plum hover:text-deep-plum transition-colors">
                {tab}
              </Link>
            ))}
          </div>
          <RecipeCardGrid
            recipes={recipes.filter((r) => r.categories.includes("quick-and-easy")).slice(0, 3)}
            columns={3}
          />
        </div>
      </section>

      {/* Gather Around the Ramadan Table */}
      <section className="py-20 max-w-[1320px] mx-auto px-5 md:px-10">
        <h2 className="font-serif text-4xl text-deep-plum mb-6">Gather Around the Ramadan Table</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {ramadanTabs.map((tab) => (
            <Link key={tab} href="/ramadan/" className="px-4 py-2 text-sm border border-outline-variant text-on-surface-variant hover:border-deep-plum hover:text-deep-plum transition-colors">
              {tab}
            </Link>
          ))}
        </div>
        <RecipeCardGrid
          recipes={recipes.filter((r) => r.categories.includes("ramadan")).slice(0, 3)}
          columns={3}
        />
      </section>

      {/* Latest Recipes */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <h2 className="font-serif text-4xl text-deep-plum mb-8">Latest Recipes</h2>
          <RecipeCardGrid recipes={latestRecipes} columns={3} />
        </div>
      </section>

      {/* Food Stories */}
      <section className="py-20 max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-4xl text-deep-plum">Food Stories</h2>
          <Link href="/food-stories/" className="text-sm font-semibold text-deep-plum hover:text-saffron underline decoration-saffron underline-offset-4 transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.slice(0, 3).map((story) => (
            <Link key={story.slug} href={`/food-stories/${story.slug}/`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden mb-3 border border-outline-variant">
                <Image src={story.heroImage} alt={story.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <span className="label-caps text-saffron block mb-1">{story.category}</span>
              <h3 className="font-serif text-xl text-deep-plum group-hover:text-saffron transition-colors line-clamp-2">{story.title}</h3>
              <p className="text-on-surface-variant text-sm mt-1 line-clamp-2">{story.standfirst}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
