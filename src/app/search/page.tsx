import { Suspense } from "react";
import { Metadata } from "next";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search GulfSpoon for Gulf, Levantine, South Asian, and expat recipes by ingredient, dish name, cuisine, or dietary preference. Find your next favorite meal.",
};

export default function SearchPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <h1 className="font-serif text-4xl text-deep-plum mb-8">Search</h1>
      <Suspense>
        <SearchPageClient />
      </Suspense>
    </div>
  );
}
