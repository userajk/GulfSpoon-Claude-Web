import { Category } from "@/lib/schema/category";

export const categories: Category[] = [
  // Main categories
  { slug: "gulf-kitchen", name: "Gulf Kitchen", description: "Authentic Arabian Peninsula recipes from coastal seafood traditions to spice-laden desert dishes. Traditional Gulf cooking methods with step-by-step guides.", type: "category" },
  { slug: "expat-kitchens", name: "Expat Kitchens", description: "Recipes from the diverse expatriate communities that call the Gulf home. Pakistani, Filipino, Indian, and more — adapted for local Gulf pantry staples.", type: "category" },
  { slug: "breakfast", name: "Breakfast", description: "Traditional Gulf breakfasts and morning meals from across the region's diverse communities. Balaleet, halwa puri, shakshuka, and more to start your day.", type: "category" },
  { slug: "ramadan", name: "Ramadan", description: "Recipes for Iftar, Suhoor, and the holy month. Comforting soups, festive desserts, refreshing drinks, and nourishing mains for breaking the fast at sunset.", type: "category" },
  { slug: "quick-and-easy", name: "Quick & Easy", description: "Delicious meals ready in under 30 minutes. One-pot wonders, weeknight dinners, and simple recipes for busy home cooks who want bold Gulf-inspired flavors.", type: "category" },
  { slug: "air-fryer", name: "Air Fryer", description: "Crispy, golden air fryer recipes with a fraction of the oil. Chicken tenders, salmon, baked potatoes, and more — quick, easy, and perfectly crunchy results.", type: "category" },
  { slug: "drinks", name: "Drinks", description: "Traditional Arabic coffee, karak chai, fresh juices, smoothies, and homemade lattes. Hot and cold drink recipes from Gulf cafes and home kitchens in the region.", type: "category" },
  { slug: "desserts", name: "Desserts", description: "Sweet treats from the Gulf and beyond. Baklava, luqaimat, kunafa, semolina halwa, saffron crepes, and modern fusion desserts with step-by-step instructions.", type: "category" },
  { slug: "food-stories", name: "Food Stories", description: "Cultural features, ingredient deep dives, and the stories behind the dishes that bring Gulf communities together. Khaleeji traditions and expat food culture.", type: "category" },

  // Cuisines
  { slug: "emirati", name: "Emirati", description: "Traditional Emirati recipes from the UAE. Machboos, harees, balaleet, luqaimat, and more — authentic dishes celebrating the full culinary heritage of Emirates.", type: "cuisine", region: "Gulf" },
  { slug: "saudi", name: "Saudi", description: "Authentic Saudi Arabian recipes from Najdi kabsa and mandi to Hijazi foul and saleeg. Rich and diverse dishes from across the Kingdom's culinary regions.", type: "cuisine", region: "Gulf" },
  { slug: "omani", name: "Omani", description: "Authentic Omani recipes including shuwa, mashuai, and halwa. Unique spice blends and slow-cooked traditions from Oman's rich and ancient culinary heritage.", type: "cuisine", region: "Gulf" },
  { slug: "kuwaiti", name: "Kuwaiti", description: "Traditional Kuwaiti recipes blending Arabian, Persian, and Indian influences. Machboos, mutabbaq samak, gabout, and other beloved Kuwaiti family favorites.", type: "cuisine", region: "Gulf" },
  { slug: "bahraini", name: "Bahraini", description: "Bahraini cuisine shaped by the island's rich trading history. Seafood specialties, spiced rice dishes, and traditional sweets passed down through generations.", type: "cuisine", region: "Gulf" },
  { slug: "qatari", name: "Qatari", description: "Traditional Qatari recipes rooted in Bedouin heritage and Gulf seafood traditions. Machboos, madrouba, thareed, and more authentic dishes from Qatar homes.", type: "cuisine", region: "Gulf" },
  { slug: "pakistani", name: "Pakistani", description: "Pakistani recipes from the Gulf's largest expatriate community. Biryani, nihari, halwa puri, and more — home-style cooking adapted for Gulf kitchen staples.", type: "cuisine", region: "South Asia" },
  { slug: "indian", name: "Indian", description: "Indian recipes as prepared in Gulf kitchens. Kerala fish curries, dosas, North Indian biryanis, and butter chicken — home-style cooking with Gulf pantry items.", type: "cuisine", region: "South Asia" },
  { slug: "bangladeshi", name: "Bangladeshi", description: "Bangladeshi home cooking from the Gulf's vibrant Bengali community. Flavorful curries, biryanis, and traditional sweets adapted for locally found ingredients.", type: "cuisine", region: "South Asia" },
  { slug: "filipino", name: "Filipino", description: "Filipino recipes adapted for Gulf kitchens. Chicken adobo, pancit, sinigang, and more — comfort food from the Gulf's thriving Filipino expatriate community.", type: "cuisine", region: "Southeast Asia" },
  { slug: "sri-lankan", name: "Sri Lankan", description: "Sri Lankan recipes with bold spices, creamy coconut, and vibrant curries. Kottu, hoppers, and sambols from Sri Lankan home cooks living across the Gulf region.", type: "cuisine", region: "South Asia" },
  { slug: "egyptian", name: "Egyptian", description: "Egyptian recipes from the Gulf's North African community. Koshari, ful medames, molokhia, and more — hearty and flavorful home-cooked dishes for any kitchen.", type: "cuisine", region: "North Africa" },
  { slug: "levantine", name: "Levantine", description: "Levantine recipes from Lebanese, Syrian, Jordanian, and Palestinian kitchens. Shawarma, fattoush, hummus, and kibbeh — Gulf favorites with Levantine roots.", type: "cuisine", region: "Levant" },
  { slug: "persian", name: "Persian", description: "Persian recipes with fragrant saffron rice, slow-cooked stews, and herbed preparations. Tahdig, ghormeh sabzi, and more from the rich culinary heritage of Iran.", type: "cuisine", region: "Iran" },
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
