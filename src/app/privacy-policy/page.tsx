import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the GulfSpoon privacy policy to understand how we collect, use, and protect your personal information when you browse recipes and use our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Privacy Policy</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p className="p-4 bg-soft-sand border border-warm-taupe text-sm"><strong>Note:</strong> This is a draft privacy policy provided as a template. It must be reviewed and finalized by a qualified legal professional before publication.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Information We Collect</h2>
          <p>When you use GulfSpoon, we may collect information you provide directly, such as your name and email address when subscribing to our newsletter or submitting a contact form.</p>
          <p>We also collect certain information automatically, including your IP address, browser type, pages visited, and referring URL. This data helps us understand how visitors use our site.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To send newsletters you have subscribed to</li>
            <li>To respond to your inquiries</li>
            <li>To improve our content and user experience</li>
            <li>To analyze site usage through analytics tools (with your consent)</li>
          </ul>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Cookies</h2>
          <p>We use cookies to remember your preferences, such as cookie consent choices and saved recipes (stored locally on your device). See our <a href="/cookie-policy/" className="text-deep-plum underline">Cookie Policy</a> for details.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="/contact/" className="text-deep-plum underline">our contact page</a>.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Contact</h2>
          <p>If you have questions about this policy, please <a href="/contact/" className="text-deep-plum underline">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
}
