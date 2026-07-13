import { Category } from "@/lib/schema/category";

export const categories: Category[] = [
  // Main categories
  { slug: "gulf-kitchen", name: "Gulf Kitchen", description: "Authentic recipes from the Arabian Peninsula, from coastal seafood traditions to the spice-laden dishes of the desert.", type: "category" },
  { slug: "expat-kitchens", name: "Expat Kitchens", description: "Recipes from the diverse expatriate communities that call the Gulf home, bringing flavors from across the world.", type: "category" },
  { slug: "breakfast", name: "Breakfast", description: "Start your day with traditional Gulf breakfasts and morning meals from across the region's diverse communities.", type: "category" },
  { slug: "ramadan", name: "Ramadan", description: "Recipes for Iftar, Suhoor, and the holy month — from comforting soups to festive desserts and refreshing drinks.", type: "category" },
  { slug: "quick-and-easy", name: "Quick & Easy", description: "Delicious meals ready in under 30 minutes, one-pot wonders, and weeknight dinners for busy home cooks.", type: "category" },
  { slug: "drinks", name: "Drinks", description: "From traditional Arabic coffee and karak chai to fresh juices, smoothies, and homemade lattes.", type: "category" },
  { slug: "desserts", name: "Desserts", description: "Sweet treats from the Gulf and beyond — baklava, luqaimat, kunafa, halwa, and modern fusion desserts.", type: "category" },
  { slug: "food-stories", name: "Food Stories", description: "Cultural features, ingredient guides, and the stories behind the dishes that bring communities together.", type: "category" },

  // Cuisines
  { slug: "emirati", name: "Emirati", description: "Traditional Emirati dishes celebrating the culinary heritage of the UAE.", type: "cuisine", region: "Gulf" },
  { slug: "saudi", name: "Saudi", description: "Rich and diverse Saudi Arabian cuisine, from Najdi dishes to Hijazi favorites.", type: "cuisine", region: "Gulf" },
  { slug: "omani", name: "Omani", description: "Omani culinary traditions featuring unique spice blends and slow-cooked specialties.", type: "cuisine", region: "Gulf" },
  { slug: "kuwaiti", name: "Kuwaiti", description: "Kuwaiti recipes blending Arabian, Persian, and Indian influences.", type: "cuisine", region: "Gulf" },
  { slug: "bahraini", name: "Bahraini", description: "Bahraini cuisine reflecting the island's rich trading history and seafood traditions.", type: "cuisine", region: "Gulf" },
  { slug: "qatari", name: "Qatari", description: "Traditional Qatari dishes rooted in Bedouin heritage and Gulf seafood traditions.", type: "cuisine", region: "Gulf" },
  { slug: "pakistani", name: "Pakistani", description: "Pakistani recipes from the Gulf's largest expatriate community, adapted for local kitchens.", type: "cuisine", region: "South Asia" },
  { slug: "indian", name: "Indian", description: "Indian cuisine as prepared in Gulf kitchens, from Kerala fish curries to North Indian biryanis.", type: "cuisine", region: "South Asia" },
  { slug: "bangladeshi", name: "Bangladeshi", description: "Bangladeshi home cooking from the Gulf's vibrant Bengali community.", type: "cuisine", region: "South Asia" },
  { slug: "filipino", name: "Filipino", description: "Filipino recipes adapted for Gulf kitchens, from adobo to pancit and beyond.", type: "cuisine", region: "Southeast Asia" },
  { slug: "sri-lankan", name: "Sri Lankan", description: "Sri Lankan cuisine featuring bold spices, coconut, and vibrant curries.", type: "cuisine", region: "South Asia" },
  { slug: "egyptian", name: "Egyptian", description: "Egyptian recipes from the Gulf's North African community, from koshari to ful medames.", type: "cuisine", region: "North Africa" },
  { slug: "levantine", name: "Levantine", description: "Levantine dishes — Lebanese, Syrian, Jordanian, and Palestinian flavors in Gulf kitchens.", type: "cuisine", region: "Levant" },
  { slug: "persian", name: "Persian", description: "Persian culinary traditions featuring fragrant rice dishes, stews, and herbed preparations.", type: "cuisine", region: "Iran" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategories(type?: "category" | "cuisine"): Category[] {
  if (type) return categories.filter((c) => c.type === type);
  return categories;
}

export function getCuisines(): Category[] {
  return categories.filter((c) => c.type === "cuisine");
}
