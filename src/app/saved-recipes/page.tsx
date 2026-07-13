import { Metadata } from "next";
import SavedRecipesClient from "./SavedRecipesClient";

export const metadata: Metadata = {
  title: "Saved Recipes",
  description: "Your saved recipes collection.",
};

export default function SavedRecipesPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <h1 className="font-serif text-4xl text-deep-plum mb-8">Saved Recipes</h1>
      <SavedRecipesClient />
    </div>
  );
}
