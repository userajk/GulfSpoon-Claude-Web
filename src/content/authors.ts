import { Author } from "@/lib/schema/author";

export const authors: Author[] = [
  {
    slug: "sarah-al-fayed",
    name: "Sarah Al-Fayed",
    role: "Senior Recipe Developer",
    biography:
      "Sarah is a food writer and recipe developer based in Dubai, specializing in Gulf heritage cuisine. She grew up learning traditional Emirati cooking from her grandmother and has spent over a decade documenting the region's culinary traditions.",
    photo: "/images/authors/sarah-al-fayed.jpg",
    expertise: ["Emirati Cuisine", "Gulf Traditional", "Spice Blending"],
    culturalBackground: "Emirati, raised in Dubai with roots in Abu Dhabi",
    recipeTestingApproach:
      "Each recipe is tested a minimum of three times with commonly available ingredients before publication.",
    professionalLinks: [],
  },
  {
    slug: "omar-hussain",
    name: "Omar Hussain",
    role: "Contributing Writer",
    biography:
      "Omar is a food journalist and home cook from Karachi, now living in Doha. He writes about the intersection of South Asian and Gulf culinary traditions, exploring how expatriate communities adapt their home recipes.",
    photo: "/images/authors/omar-hussain.jpg",
    expertise: ["Pakistani Cuisine", "South Asian Fusion", "Street Food"],
    culturalBackground: "Pakistani, based in Qatar",
    recipeTestingApproach:
      "Recipes are developed to work in a standard home kitchen without specialty equipment.",
    professionalLinks: [],
  },
  {
    slug: "maria-santos",
    name: "Maria Santos",
    role: "Contributing Writer",
    biography:
      "Maria is a Filipino food writer and community organizer in Abu Dhabi. She documents the rich Filipino food culture thriving across the Gulf and shares recipes that bridge her homeland traditions with locally available ingredients.",
    photo: "/images/authors/maria-santos.jpg",
    expertise: ["Filipino Cuisine", "Community Cooking", "Adaptation Recipes"],
    culturalBackground: "Filipino, based in Abu Dhabi",
    recipeTestingApproach:
      "Recipes are tested using ingredients available at Gulf supermarkets and Asian grocery stores.",
    professionalLinks: [],
  },
  {
    slug: "editorial-team",
    name: "GulfSpoon Editorial Team",
    role: "Editorial Team",
    biography:
      "The GulfSpoon editorial team comprises food writers, recipe developers, and cultural researchers dedicated to documenting the diverse culinary landscape of the Gulf region.",
    expertise: ["Gulf Cuisine", "Editorial", "Recipe Development"],
    professionalLinks: [],
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAllAuthors(): Author[] {
  return authors;
}
