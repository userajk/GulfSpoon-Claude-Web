import { Category } from "@/lib/schema/category";

export const categories: Category[] = [
  // Main categories
  { slug: "gulf-kitchen", name: "Gulf Kitchen", description: "Authentic recipes from the Arabian Peninsula, from coastal seafood traditions to the spice-laden dishes of the desert.", type: "category" },
  { slug: "expat-kitchens", name: "Expat Kitchens", description: "Recipes from the diverse expatriate communities that call the Gulf home, bringing flavors from across the world.", type: "category" },
  { slug: "breakfast", name: "Breakfast", description: "Start your day with traditional Gulf breakfasts and morning meals from across the region's diverse communities.", type: "category" },
  { slug: "ramadan", name: "Ramadan", description: "Recipes for Iftar, Suhoor, and the holy month — from comforting soups to festive desserts and refreshing drinks.", type: "category" },
  { slug: "quick-and-easy", name: "Quick & Easy", description: "Delicious meals ready in under 30 minutes, one-pot wonders, and weeknight dinners for busy home cooks.", type: "category" },
  { slug: "air-fryer", name: "Air Fryer", description: "Crispy, golden air fryer recipes with a fraction of the oil — chicken tenders, falafel, samosas, and more. Quick, easy, and perfectly crunchy every time.", type: "category" },
  { slug: "drinks", name: "Drinks", description: "From traditional Arabic coffee and karak chai to fresh juices, smoothies, and homemade lattes.", type: "category" },
  { slug: "desserts", name: "Desserts", description: "Sweet treats from the Gulf and beyond — baklava, luqaimat, kunafa, halwa, and modern fusion desserts.", type: "category" },
  { slug: "food-stories", name: "Food Stories", description: "Cultural features, ingredient guides, and the stories behind the dishes that bring communities together.", type: "category" },

  // Cuisines
  { slug: "emirati", name: "Emirati", description: "Explore traditional Emirati recipes from the UAE — machboos, harees, balaleet, luqaimat, and more. Authentic dishes celebrating the culinary heritage of the Emirates.", type: "cuisine", region: "Gulf" },
  { slug: "saudi", name: "Saudi", description: "Discover authentic Saudi Arabian recipes, from Najdi kabsa and mandi to Hijazi foul and saleeg. Rich, diverse dishes from across the Kingdom.", type: "cuisine", region: "Gulf" },
  { slug: "omani", name: "Omani", description: "Authentic Omani recipes featuring shuwa, mashuai, and halwa. Discover the unique spice blends and slow-cooked traditions of Oman's culinary heritage.", type: "cuisine", region: "Gulf" },
  { slug: "kuwaiti", name: "Kuwaiti", description: "Traditional Kuwaiti recipes blending Arabian, Persian, and Indian influences. Try machboos, mutabbaq samak, gabout, and other Kuwaiti favorites.", type: "cuisine", region: "Gulf" },
  { slug: "bahraini", name: "Bahraini", description: "Explore Bahraini cuisine shaped by the island's rich trading history. Seafood specialties, spiced rice dishes, and traditional sweets from Bahrain.", type: "cuisine", region: "Gulf" },
  { slug: "qatari", name: "Qatari", description: "Traditional Qatari recipes rooted in Bedouin heritage and Gulf seafood traditions. Discover machboos, madrouba, thareed, and more from Qatar.", type: "cuisine", region: "Gulf" },
  { slug: "pakistani", name: "Pakistani", description: "Pakistani recipes from the Gulf's largest expatriate community. Biryani, nihari, halwa puri, and more — adapted for home kitchens in the Gulf region.", type: "cuisine", region: "South Asia" },
  { slug: "indian", name: "Indian", description: "Indian recipes as prepared in Gulf kitchens — from Kerala fish curries and dosas to North Indian biryanis and butter chicken. Home-style cooking with Gulf pantry staples.", type: "cuisine", region: "South Asia" },
  { slug: "bangladeshi", name: "Bangladeshi", description: "Bangladeshi home cooking from the Gulf's vibrant Bengali community. Flavorful curries, biryanis, and traditional sweets adapted for local ingredients.", type: "cuisine", region: "South Asia" },
  { slug: "filipino", name: "Filipino", description: "Filipino recipes adapted for Gulf kitchens — chicken adobo, pancit, sinigang, and more. Comfort food from the Gulf's thriving Filipino community.", type: "cuisine", region: "Southeast Asia" },
  { slug: "sri-lankan", name: "Sri Lankan", description: "Sri Lankan recipes featuring bold spices, creamy coconut, and vibrant curries. Discover kottu, hoppers, and fiery sambols from Sri Lankan home cooks in the Gulf.", type: "cuisine", region: "South Asia" },
  { slug: "egyptian", name: "Egyptian", description: "Egyptian recipes from the Gulf's North African community. Koshari, ful medames, molokhia, and more — hearty, flavorful dishes for the home kitchen.", type: "cuisine", region: "North Africa" },
  { slug: "levantine", name: "Levantine", description: "Levantine recipes from Lebanese, Syrian, Jordanian, and Palestinian kitchens. Shawarma, fattoush, hummus, and kibbeh — Gulf favorites with Levantine roots.", type: "cuisine", region: "Levant" },
  { slug: "persian", name: "Persian", description: "Persian recipes featuring fragrant saffron rice, slow-cooked stews, and herbed preparations. Tahdig, ghormeh sabzi, and more from Iran's rich culinary tradition.", type: "cuisine", region: "Iran" },
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
