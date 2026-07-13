import { z } from "zod";

export const AuthorSchema = z.object({
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  biography: z.string(),
  photo: z.string().optional(),
  expertise: z.array(z.string()).default([]),
  culturalBackground: z.string().optional(),
  recipeTestingApproach: z.string().optional(),
  professionalLinks: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
});

export type Author = z.infer<typeof AuthorSchema>;
