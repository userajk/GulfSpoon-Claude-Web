import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCategory, getCuisines } from "@/content/categories";
import CategoryPage from "@/components/layout/CategoryPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCuisines().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return { title: `${cat.name} Recipes`, description: cat.description };
}

export default async function CuisinePage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category || category.type !== "cuisine") notFound();
  return <CategoryPage category={category} />;
}
