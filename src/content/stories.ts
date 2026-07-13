import { Story } from "@/lib/schema/story";

export const stories: Story[] = [
  {
    slug: "the-soul-of-khaleeji-cooking",
    title: "The Soul of Khaleeji Cooking",
    seoTitle: "The Soul of Khaleeji Cooking: A Guide to Gulf Spices and Traditions",
    metaDescription: "Explore the essential spices, ingredients, and traditions that define Khaleeji cooking — from loomi and bezar to the communal dining culture of the Gulf.",
    standfirst: "To understand Gulf cuisine is to understand its history as a global trading hub. The flavor profiles are built on a foundation of imported spices that have been integrated over centuries.",
    category: "Culture",
    author: "sarah-al-fayed",
    publishedAt: "2024-09-01",
    heroImage: "/images/stories/khaleeji-cooking.jpg",
    imageAlt: "An assortment of Gulf spices including dried black limes, bezar blend, and saffron threads in brass bowls",
    tableOfContents: [
      { id: "spice-trade", title: "The Spice Trade Legacy" },
      { id: "essential-spices", title: "Essential Gulf Spices" },
      { id: "communal-dining", title: "The Communal Table" },
    ],
    content: `## The Spice Trade Legacy {#spice-trade}

The Arabian Gulf has been a crossroads of global trade for millennia. Long before oil was discovered, the region's ports connected the spice routes of India, East Africa, and Southeast Asia with the Mediterranean world. This history lives on in every Gulf kitchen.

## Essential Gulf Spices {#essential-spices}

**Loomi (Black Lime):** Sun-dried limes that impart a complex, earthy sourness essential to stews and rice dishes. They are used whole (pierced) in cooking and removed before serving.

**Bezar:** The ubiquitous Gulf spice blend, varying from home to home but typically featuring cumin, coriander, cinnamon, black pepper, and dried chilies. Some families add cloves, nutmeg, or dried rose petals.

**Baharat:** A broader Middle Eastern spice blend that in Gulf kitchens often overlaps with bezar but tends to include paprika and allspice.

**Saffron:** Used generously in Gulf cooking — far more than in most other cuisines. It colors rice, flavors desserts, and appears in beverages.

## The Communal Table {#communal-dining}

Gulf dining is inherently communal. The traditional sufra — a cloth spread on the floor — brings family members together around shared platters. This practice continues today, even in modern households, reflecting values of hospitality and togetherness that define the region's food culture.`,
    relatedRecipes: ["chicken-machboos", "fish-salona", "emirati-harees"],
  },
  {
    slug: "halwa-puri-sundays-in-the-gulf",
    title: "Halwa Puri Sundays in the Gulf",
    seoTitle: "Halwa Puri Sundays: How Pakistani Breakfast Traditions Thrive in the Gulf",
    metaDescription: "The story of how Pakistani halwa puri breakfast became a Gulf weekend tradition, connecting expatriate communities to home.",
    standfirst: "Every Friday morning in Sharjah, Deira, and Doha, the smell of deep-frying puris and toasting semolina fills apartment corridors — a weekly ritual that connects Gulf-based Pakistani families to home.",
    category: "Expat Stories",
    author: "omar-hussain",
    publishedAt: "2024-09-18",
    heroImage: "/images/stories/halwa-puri-sundays.jpg",
    imageAlt: "A family-style spread of halwa puri breakfast with multiple dishes on a tablecloth",
    tableOfContents: [
      { id: "ritual", title: "The Friday Ritual" },
      { id: "adaptation", title: "Adapting to Gulf Kitchens" },
      { id: "community", title: "Community and Connection" },
    ],
    content: `## The Friday Ritual {#ritual}

For millions of Pakistanis living across the Gulf, the weekend breakfast spread of halwa puri isn't just a meal — it's a lifeline to identity. The tradition, deeply rooted in Lahore and Karachi street food culture, has been faithfully recreated in apartments from Abu Dhabi to Muscat.

## Adapting to Gulf Kitchens {#adaptation}

Gulf-based home cooks have adapted the recipe in subtle ways. Local ghee brands have become favorites for the halwa. The channay (chickpea curry) sometimes incorporates Gulf spices like bezar alongside the traditional chana masala. And the puris, while faithful to the original, might be fried in oils more readily available in Gulf supermarkets.

## Community and Connection {#community}

The halwa puri breakfast extends beyond the family table. On Fridays, families share plates with neighbors, and the tradition has become a way for second-generation Gulf-born Pakistanis to connect with their heritage through taste and ritual.`,
    relatedRecipes: ["pakistani-halwa-puri"],
    relatedStories: ["the-soul-of-khaleeji-cooking"],
  },
  {
    slug: "adobo-in-abu-dhabi",
    title: "Adobo in Abu Dhabi",
    seoTitle: "Adobo in Abu Dhabi: Filipino Food Culture in the Gulf",
    metaDescription: "How Filipino cooks have kept adobo and other cherished dishes alive in Gulf kitchens, adapting ingredients while preserving tradition.",
    standfirst: "The Filipino community in the Gulf is one of the largest expatriate populations in the region. Their food traditions — from adobo to sinigang — have quietly become part of the Gulf's culinary landscape.",
    category: "Expat Stories",
    author: "maria-santos",
    publishedAt: "2024-10-02",
    heroImage: "/images/stories/adobo-abu-dhabi.jpg",
    imageAlt: "A home kitchen scene with Filipino dishes being prepared",
    tableOfContents: [
      { id: "home-cooking", title: "Home Cooking Abroad" },
      { id: "ingredient-hunt", title: "The Ingredient Hunt" },
      { id: "sharing-food", title: "Sharing Food, Building Bridges" },
    ],
    content: `## Home Cooking Abroad {#home-cooking}

For Filipino workers and families in the Gulf, cooking from home is an act of cultural preservation. In shared apartments and family kitchens, the flavors of the Philippines are kept alive through daily cooking.

## The Ingredient Hunt {#ingredient-hunt}

Gulf cities have seen a growth in Filipino grocery stores and sections in major supermarkets. Cane vinegar, calamansi, and banana ketchup are now readily available, making it easier than ever to cook authentic Filipino food abroad.

## Sharing Food, Building Bridges {#sharing-food}

Filipino cooks in the Gulf are known for their generosity. Office potlucks, community celebrations, and neighborhood sharing have introduced Filipino dishes to colleagues and friends from across the world, creating cultural bridges through food.`,
    relatedRecipes: ["filipino-chicken-adobo"],
    relatedStories: ["halwa-puri-sundays-in-the-gulf"],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAllStories(): Story[] {
  return stories;
}

export function searchStories(query: string): Story[] {
  const q = query.toLowerCase();
  return stories.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.standfirst.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q)
  );
}
