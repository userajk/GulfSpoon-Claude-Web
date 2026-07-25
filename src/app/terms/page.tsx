import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms and conditions for using GulfSpoon, including content usage, intellectual property rights, and user responsibilities when accessing our recipes and food stories.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Terms of Use</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> These are draft terms of use provided as a template. They must be reviewed and finalized by a qualified legal professional before publication.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Acceptance of Terms</h2>
          <p>By accessing GulfSpoon, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Use of Content</h2>
          <p>All recipes, articles, photographs, and other content on GulfSpoon are protected by copyright. You may view, print, and share recipes for personal, non-commercial use with proper attribution.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">User Submissions</h2>
          <p>By submitting content through our contact form or newsletter signup, you grant GulfSpoon permission to use that content for the purpose of responding to your inquiry.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Disclaimer</h2>
          <p>GulfSpoon provides recipes and food content for informational purposes. We are not responsible for any adverse effects resulting from the use of recipes or information on this site. See our <a href="/disclaimer/" className="text-deep-plum underline">Disclaimer</a> for more details.</p>
        </div>
      </div>
    </div>
  );
}
