import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "GulfSpoon community guidelines for respectful engagement. Learn our expectations for comments, recipe feedback, and interactions across our food community.",
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Community Guidelines" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Community Guidelines</h1>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p>GulfSpoon brings together food lovers from diverse cultural backgrounds. We ask that all interactions on our platform reflect the respect and hospitality that define Gulf culture.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">Our Expectations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Treat all contributors and community members with respect</li>
            <li>Be mindful of cultural sensitivities around food traditions</li>
            <li>Share constructive feedback about recipes</li>
            <li>Credit original sources when sharing recipes or food traditions</li>
            <li>Report inaccurate or harmful content to our editorial team</li>
          </ul>
          <p>If you have concerns about any content or interactions, please <a href="/contact/" className="text-deep-plum underline">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
}
