import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Copyright Policy",
  description: "GulfSpoon copyright and intellectual property policy. Understand how our recipe content, photography, and written materials are protected under copyright law.",
};

export default function CopyrightPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Copyright Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Copyright Policy</h1>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft copyright policy provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>
          <p>All content on GulfSpoon — including recipes, articles, photographs, illustrations, and design elements — is the intellectual property of GulfSpoon unless otherwise attributed.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">Permitted Use</h2>
          <p>You may share individual recipes for personal, non-commercial use with a link back to the original page on GulfSpoon.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">Prohibited Use</h2>
          <p>Reproducing, republishing, or redistributing GulfSpoon content without written permission is prohibited. This includes scraping content for use in other publications or websites.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">DMCA</h2>
          <p>If you believe content on GulfSpoon infringes your copyright, please <a href="/contact/" className="text-deep-plum underline">contact us</a> with details of the alleged infringement.</p>
        </div>
      </div>
    </div>
  );
}
