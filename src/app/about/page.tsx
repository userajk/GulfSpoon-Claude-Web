import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About GulfSpoon",
  description: "GulfSpoon is a multicultural recipe publication covering Gulf cuisine, expatriate kitchens, and the diverse food traditions of the Arabian Peninsula.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "About" }]} />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-[48px] md:leading-[56px] text-deep-plum mb-6">
          About GulfSpoon
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
          GulfSpoon is a multicultural recipe and food publication dedicated to documenting the rich, diverse culinary landscape of the Arabian Gulf region. We celebrate the traditional Khaleeji recipes passed down through generations alongside the vibrant food traditions brought by the millions of expatriates who call the Gulf home.
        </p>
        <h2 className="font-serif text-2xl text-deep-plum mt-12 mb-4">Our Mission</h2>
        <p className="text-charcoal leading-relaxed mb-6">
          We believe that food is the most powerful bridge between cultures. The Gulf region is home to one of the most diverse populations on earth, and its kitchens reflect that diversity. GulfSpoon exists to document, preserve, and share the recipes that bring these communities together around a shared table.
        </p>
        <h2 className="font-serif text-2xl text-deep-plum mt-12 mb-4">What We Cover</h2>
        <ul className="space-y-3 text-charcoal mb-6">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 shrink-0" /><strong>Gulf Kitchen:</strong> Authentic Emirati, Saudi, Omani, Kuwaiti, Bahraini, and Qatari recipes.</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 shrink-0" /><strong>Expat Kitchens:</strong> Pakistani, Indian, Filipino, Bangladeshi, Sri Lankan, Egyptian, Levantine, and Persian recipes as prepared in Gulf homes.</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 shrink-0" /><strong>Food Stories:</strong> Cultural features, ingredient guides, and the stories behind the dishes.</li>
        </ul>
        <h2 className="font-serif text-2xl text-deep-plum mt-12 mb-4">Our Approach</h2>
        <p className="text-charcoal leading-relaxed mb-6">
          Every recipe on GulfSpoon is developed and tested in home kitchens using commonly available ingredients. We prioritize clarity, accuracy, and respect for the cultural origins of each dish. We do not fabricate ratings, testimonials, or credentials.
        </p>
        <div className="mt-12 border-t border-outline-variant pt-8">
          <p className="text-on-surface-variant text-sm">
            Interested in contributing? <Link href="/contact" className="text-deep-plum font-semibold hover:text-saffron transition-colors">Get in touch</Link> or visit our <Link href="/contributors" className="text-deep-plum font-semibold hover:text-saffron transition-colors">contributors page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
