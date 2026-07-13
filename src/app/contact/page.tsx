import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the GulfSpoon editorial team. We welcome recipe suggestions, corrections, partnership inquiries, and feedback.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 md:py-20">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl text-deep-plum mb-4">Contact Us</h1>
        <p className="text-on-surface-variant mb-8">
          We welcome recipe suggestions, corrections, partnership inquiries, and feedback. Please fill out the form below and we will respond as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
