"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";
import { search, type SearchResult } from "@/lib/search";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const results = useMemo(() => search(query), [query]);

  return (
    <>
      <div className="relative max-w-2xl mb-8">
        <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-taupe" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes, stories, ingredients..."
          className="w-full h-14 pl-12 pr-4 bg-white border border-outline-variant text-base focus:border-deep-plum focus:ring-0 focus:outline-none"
          autoFocus
          aria-label="Search"
        />
      </div>

      {query && (
        <p className="text-sm text-on-surface-variant mb-6">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-20">
          <h2 className="font-serif text-2xl text-deep-plum mb-2">No results found</h2>
          <p className="text-on-surface-variant">Try a different search term or browse our recipes.</p>
        </div>
      )}

      <div className="space-y-6">
        {results.map((result) => (
          <SearchResultItem key={`${result.type}-${result.slug}`} result={result} query={query} />
        ))}
      </div>
    </>
  );
}

function SearchResultItem({ result, query }: { result: SearchResult; query: string }) {
  return (
    <Link href={result.url} className="flex gap-4 group p-4 border border-outline-variant hover:border-deep-plum transition-colors">
      {result.image && (
        <div className="relative w-24 h-24 shrink-0 overflow-hidden">
          <Image src={result.image} alt="" fill className="object-cover" sizes="96px" />
        </div>
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="label-caps text-saffron">{result.type}</span>
          {result.category && <span className="text-xs text-on-surface-variant">· {result.category}</span>}
        </div>
        <h3 className="font-serif text-lg text-deep-plum group-hover:text-saffron transition-colors line-clamp-1">
          <HighlightMatch text={result.title} query={query} />
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2 mt-1">
          <HighlightMatch text={result.description} query={query} />
        </p>
      </div>
    </Link>
  );
}

function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-saffron/20 text-inherit">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
