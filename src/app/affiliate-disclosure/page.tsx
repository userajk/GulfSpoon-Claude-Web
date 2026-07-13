import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "GulfSpoon affiliate and sponsorship disclosure.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Affiliate Disclosure</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft disclosure provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>
          <p>GulfSpoon may contain links to products or services from third-party retailers. If we include affiliate links in the future, they will be clearly disclosed within the relevant content.</p>
          <p>Any affiliate relationships will not influence our editorial content, recipe selections, or product recommendations. Our editorial integrity is independent of any commercial relationships.</p>
        </div>
      </div>
    </div>
  );
}
