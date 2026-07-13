export interface Story {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  standfirst: string;
  category: string;
  author: string;
  reviewer?: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage: string;
  imageAlt: string;
  tableOfContents?: { id: string; title: string }[];
  content: string;
  sourceLinks?: { title: string; url: string }[];
  relatedStories?: string[];
  relatedRecipes?: string[];
}
