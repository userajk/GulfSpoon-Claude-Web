import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Recipe Testing Policy",
  description: "How GulfSpoon tests and verifies recipes before publication.",
};

export default function RecipeTestingPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Recipe Testing Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Recipe Testing Policy</h1>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p>Every recipe published on GulfSpoon undergoes testing to ensure accuracy and reliability. Our process includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Testing in home kitchens with commonly available equipment</li>
            <li>Using ingredients accessible in Gulf-region supermarkets</li>
            <li>Verifying preparation and cooking times</li>
            <li>Confirming ingredient quantities and proportions</li>
            <li>Noting potential substitutions and variations</li>
          </ul>
          <p>If you find an issue with any recipe, please <a href="/contact" className="text-deep-plum underline">let us know</a> so we can investigate and correct it.</p>
        </div>
      </div>
    </div>
  );
}
