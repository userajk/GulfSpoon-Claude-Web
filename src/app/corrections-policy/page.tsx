import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Corrections Policy",
  description: "How GulfSpoon handles errors and corrections.",
};

export default function CorrectionsPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Corrections Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Corrections Policy</h1>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p>GulfSpoon is committed to accuracy. When errors are identified in our recipes or articles, we correct them promptly and transparently.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">How to Report an Error</h2>
          <p>If you find an error in any recipe or article, please <a href="/contact" className="text-deep-plum underline">contact us</a> with the article URL and a description of the issue.</p>
          <h2 className="font-serif text-2xl text-deep-plum mt-8">Our Process</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We review all reported errors within a reasonable timeframe</li>
            <li>Verified errors are corrected in the published content</li>
            <li>Significant corrections are noted at the end of the article</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
