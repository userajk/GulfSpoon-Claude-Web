import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Advertising Policy",
  description: "GulfSpoon advertising and sponsorship guidelines. Learn how we maintain editorial independence and transparency in all sponsored and advertising content.",
};

export default function AdvertisingPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Advertising Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Advertising Policy</h1>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft advertising policy provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>
          <p>GulfSpoon maintains a clear separation between editorial content and advertising. Any sponsored content or advertising will be clearly labeled as such.</p>
          <p>Advertising does not influence our editorial decisions, recipe selections, or content recommendations. Our editorial team operates independently of our business relationships.</p>
          <p>For advertising inquiries, please <a href="/contact/" className="text-deep-plum underline">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
}
