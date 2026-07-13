import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="font-serif text-4xl md:text-[56px] md:leading-[64px] text-deep-plum mb-4">
        This Dish Has Left the Table
      </h1>
      <p className="text-lg text-on-surface-variant mb-8 max-w-lg">
        We could not find the page you are looking for. It may have been moved, renamed, or removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-deep-plum text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors">
          Back to Home
        </Link>
        <Link href="/recipes" className="border border-deep-plum text-deep-plum px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-deep-plum hover:text-white transition-colors">
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}
