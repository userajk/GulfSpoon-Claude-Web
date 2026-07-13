"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="font-serif text-4xl text-deep-plum mb-4">Something Went Wrong</h1>
      <p className="text-lg text-on-surface-variant mb-8 max-w-lg">
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-deep-plum text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
