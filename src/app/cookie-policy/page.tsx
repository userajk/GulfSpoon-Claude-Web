import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how GulfSpoon uses cookies and similar technologies to improve your browsing experience, remember preferences, and analyze site traffic.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Cookie Policy</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft cookie policy provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Cookies We Use</h2>
          <h3 className="font-serif text-lg text-deep-plum mt-4">Essential Cookies</h3>
          <p>Required for basic site functionality. These cannot be disabled.</p>
          <h3 className="font-serif text-lg text-deep-plum mt-4">Functional Cookies</h3>
          <p>Remember your preferences, such as saved recipes (stored in localStorage).</p>
          <h3 className="font-serif text-lg text-deep-plum mt-4">Analytics Cookies</h3>
          <p>Help us understand how visitors interact with the site. Only loaded with your consent.</p>
          <h3 className="font-serif text-lg text-deep-plum mt-4">Marketing Cookies</h3>
          <p>Used to deliver relevant content and measure campaign effectiveness. Only loaded with your consent.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Managing Cookies</h2>
          <p>You can manage your cookie preferences at any time through our cookie consent banner. You can also clear cookies through your browser settings.</p>
        </div>
      </div>
    </div>
  );
}
