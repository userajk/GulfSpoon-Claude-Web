import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "Learn about GulfSpoon editorial standards, recipe testing methodology, and content guidelines. Every recipe is tested and reviewed before publication.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Editorial Policy</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <h2 className="font-serif text-2xl text-deep-plum mt-8">Our Standards</h2>
          <p>GulfSpoon is committed to publishing accurate, well-tested recipes and culturally respectful food content. Our editorial team reviews all content before publication.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Recipe Testing</h2>
          <p>Every recipe published on GulfSpoon is tested in a home kitchen using commonly available ingredients. We specify preparation and cooking times based on our testing experience.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Cultural Sensitivity</h2>
          <p>We work with contributors from the communities whose cuisines we feature. We credit cultural origins and avoid misattributing dishes.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Corrections</h2>
          <p>If you find an error in any recipe or article, please <a href="/contact/" className="text-deep-plum underline">contact us</a>. We will review and correct verified errors promptly.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Independence</h2>
          <p>Our editorial content is independent of any advertising or sponsorship relationships. Sponsored content, if any, is clearly labeled.</p>
        </div>
      </div>
    </div>
  );
}
