import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers about GulfSpoon recipes, nutritional guidance, and food content. Understand the limitations of our recipe guidance and health information.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Disclaimer</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft disclaimer provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Recipe Information</h2>
          <p>Recipes on GulfSpoon are developed and tested in home kitchens. Results may vary depending on equipment, ingredients, altitude, and other factors. Always use your own judgement when cooking.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Allergen Information</h2>
          <p>While we strive to list all ingredients accurately, we cannot guarantee that recipes are free from allergens not explicitly listed. If you have food allergies, always verify ingredients independently.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Nutritional Information</h2>
          <p>GulfSpoon does not provide nutritional information for recipes. If nutritional data is important to you, we recommend using a dedicated nutrition calculator with the specific ingredients and quantities you use.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">External Links</h2>
          <p>GulfSpoon may contain links to external websites. We are not responsible for the content or privacy practices of those sites.</p>
        </div>
      </div>
    </div>
  );
}
