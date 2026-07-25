"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bookmark, Menu, X } from "lucide-react";
import { cn } from "@/lib/utilities/format";

const navLinks = [
  { href: "/recipes/", label: "Recipes" },
  { href: "/gulf-kitchen/", label: "Gulf Kitchen" },
  { href: "/expat-kitchens/", label: "Expat Kitchens" },
  { href: "/breakfast/", label: "Breakfast" },
  { href: "/ramadan/", label: "Ramadan" },
  { href: "/quick-and-easy/", label: "Quick & Easy" },
  { href: "/food-stories/", label: "Food Stories" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-deep-plum focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-outline-variant bg-warm-cream transition-all duration-300",
          scrolled && "shadow-[0_4px_20px_rgba(45,38,38,0.05)]"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between w-full max-w-[1320px] mx-auto px-5 md:px-10 transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="GulfSpoon Home">
            <Image
              src="/images/gulfspoon-logo-v2.png"
              alt="GulfSpoon"
              width={44}
              height={44}
              className={cn("object-contain  transition-all duration-300", scrolled ? "w-8 h-8" : "w-10 h-10")}
              priority
            />
            <span className={cn("font-[var(--font-dancing-script)] font-bold tracking-tight transition-all duration-300", scrolled ? "text-2xl" : "text-3xl")}>
              <span style={{ color: "#4C1B42" }}>gulf</span>
              <span style={{ color: "#DDA11B" }}>spoon</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-caps text-on-surface-variant hover:text-saffron transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/search/"
              className="text-deep-plum hover:text-saffron transition-colors p-2"
              aria-label="Search recipes"
            >
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <Link
              href="/saved-recipes/"
              className="text-deep-plum hover:text-saffron transition-colors p-2"
              aria-label="Saved recipes"
            >
              <Bookmark size={20} strokeWidth={1.5} />
            </Link>
            <button
              className="lg:hidden text-deep-plum p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="absolute right-0 top-0 bottom-0 w-[280px] bg-warm-cream shadow-lg flex flex-col"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-5 h-20 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <Image src="/images/gulfspoon-logo-v2.png" alt="GulfSpoon" width={32} height={32} className="w-8 h-8 object-contain " />
                <span className="font-[var(--font-dancing-script)] text-2xl font-bold tracking-tight"><span style={{ color: "#4C1B42" }}>gulf</span><span style={{ color: "#DDA11B" }}>spoon</span></span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-deep-plum"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col py-4 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 label-caps text-on-surface-variant hover:text-deep-plum hover:bg-soft-sand transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-4 border-outline-variant mx-6" />
              <Link
                href="/search/"
                className="px-6 py-3 label-caps text-on-surface-variant hover:text-deep-plum flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Search size={16} /> Search
              </Link>
              <Link
                href="/saved-recipes/"
                className="px-6 py-3 label-caps text-on-surface-variant hover:text-deep-plum flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Bookmark size={16} /> Saved Recipes
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
