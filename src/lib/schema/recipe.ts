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
  intro?: string;
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
  /** The one search query this page owns. No other page may target it. */
  primaryKeyword?: string;
  /** Supporting long-tail queries from the same cluster (emitted as schema keywords). */
  secondaryKeywords?: string[];
  /** 40–60 word direct answer shown near the top (featured snippet / AI answer target). */
  quickAnswer?: string;
  /** Optional reference table, e.g. time and temperature by size. */
  cookingChart?: CookingChart;
  /** Extra H2 sections rendered as markdown (links to /recipes/… and /beyond-the-recipes/… allowed). */
  sections?: { id: string; heading: string; body: string }[];
}

export interface CookingChart {
  caption: string;
  headers: string[];
  rows: string[][];
}

export type Ingredient = z.infer<typeof IngredientSchema>;
export type IngredientGroup = z.infer<typeof IngredientGroupSchema>;
export type InstructionStep = z.infer<typeof InstructionStepSchema>;
