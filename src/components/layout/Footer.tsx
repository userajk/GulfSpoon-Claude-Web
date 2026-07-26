import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/forms/NewsletterForm";

const exploreLinks = [
  { href: "/recipes/", label: "Recipes" },
  { href: "/gulf-kitchen/", label: "Gulf Kitchen" },
  { href: "/expat-kitchens/", label: "Expat Kitchens" },
];

const featureLinks = [
  { href: "/ramadan/", label: "Ramadan" },
  { href: "/breakfast/", label: "Breakfast" },
  { href: "/quick-and-easy/", label: "Quick & Easy" },
  { href: "/food-stories/", label: "Food Stories" },
  { href: "/about/", label: "About" },
];

const legalLinks = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Use" },
  { href: "/editorial-policy/", label: "Editorial Policy" },
  { href: "/accessibility/", label: "Accessibility" },
  { href: "/contact/", label: "Contact Us" },
  { href: "/cookie-policy/", label: "Cookie Preferences" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant mt-20">
      {/* Newsletter */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-16 border-b border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-lg">
            <h3 className="font-serif text-[32px] leading-10 text-deep-plum mb-2">
              The GulfSpoon Dispatch
            </h3>
            <p className="text-on-surface-variant">
              Curated recipes, cultural stories, and kitchen guides delivered weekly.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Links */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image src="/images/gulfspoon-logo-v2.png" alt="GulfSpoon" width={40} height={40} className="w-10 h-10 object-contain " />
              <span className="font-[var(--font-dancing-script)] text-[32px] leading-10 font-bold tracking-tight"><span style={{ color: "#4C1B42" }}>gulf</span><span style={{ color: "#DDA11B" }}>spoon</span></span>
            </Link>
            <p className="text-on-surface-variant text-sm max-w-xs">
              Recipes from the Gulf and the people who call it home.
            </p>
            <p className="text-on-surface-variant text-sm mt-4">
              &copy; {new Date().getFullYear()} GulfSpoon. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-caps text-deep-plum font-bold">Explore</span>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-saffron transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-caps text-deep-plum font-bold">Features</span>
            {featureLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-saffron transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-caps text-deep-plum font-bold">Legal</span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-saffron transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
