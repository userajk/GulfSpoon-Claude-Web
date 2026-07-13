import { z } from "zod";

export const IngredientSchema = z.object({
  item: z.string(),
  amount: z.string().optional(),
  unit: z.string().optional(),
  note: z.string().optional(),
  amountNumeric: z.number().optional(),
});

export const IngredientGroupSchema = z.object({
  title: z.string().optional(),
  items: z.array(IngredientSchema),
});

export const InstructionStepSchema = z.object({
  step: z.number(),
  text: z.string(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  tip: z.string().optional(),
});

export interface Recipe {
  slug: string;
  recipeName: string;
  archiveTitle: string;
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  author: string;
  tester?: string;
  publishedAt: string;
  updatedAt?: string;
  cuisine: string;
  region?: string;
  categories: string[];
  mealTypes: string[];
  cookingMethods: string[];
  dietaryTags?: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  additionalTimeMinutes?: number;
  totalTimeMinutes: number;
  servings: number;
  estimatedCost?: string;
  heroImage: string;
  cardImage?: string;
  imageAlt: string;
  ingredients: IngredientGroup[];
  instructions: InstructionStep[];
  equipment?: string[];
  tips?: string[];
  substitutions?: string[];
  variations?: string[];
  servingSuggestions?: string[];
  storage?: string;
  reheating?: string;
  makeAhead?: string;
  troubleshooting?: string[];
  faqs?: { question: string; answer: string }[];
  relatedRecipeSlugs?: string[];
  nutrition?: Record<string, string>;
  rating?: number;
  ratingCount?: number;
}

export type Ingredient = z.infer<typeof IngredientSchema>;
export type IngredientGroup = z.infer<typeof IngredientGroupSchema>;
export type InstructionStep = z.infer<typeof InstructionStepSchema>;
