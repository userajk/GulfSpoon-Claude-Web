import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "GulfSpoon accessibility statement and our commitment to WCAG 2.2 AA compliance. Learn about the steps we take to make our recipes accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Accessibility" }]} />
      <div className="max-w-3xl prose-custom">
        <h1 className="font-serif text-4xl text-deep-plum mb-6">Accessibility Statement</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: July 2026</p>
        <div className="space-y-6 text-charcoal leading-relaxed">
          <p>GulfSpoon is committed to making our website accessible to everyone, including people with disabilities. We aim to meet WCAG 2.2 Level AA standards.</p>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">What We Do</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>ARIA labels and roles for interactive elements</li>
            <li>Keyboard navigation support throughout the site</li>
            <li>Skip-to-content link for screen reader users</li>
            <li>Sufficient color contrast ratios</li>
            <li>Text alternatives for images</li>
            <li>Responsive design that works at all zoom levels</li>
            <li>Focus indicators for keyboard navigation</li>
          </ul>

          <h2 className="font-serif text-2xl text-deep-plum mt-8">Feedback</h2>
          <p>If you encounter any accessibility barriers on GulfSpoon, please <a href="/contact/" className="text-deep-plum underline">contact us</a>. We take accessibility feedback seriously and will work to address any issues.</p>
        </div>
      </div>
    </div>
  );
}
