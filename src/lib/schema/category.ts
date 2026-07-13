import { z } from "zod";

export const CategorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  imageAlt: z.string().optional(),
  parentSlug: z.string().optional(),
  type: z.enum(["category", "cuisine"]),
  region: z.string().optional(),
});

export type Category = z.infer<typeof CategorySchema>;
