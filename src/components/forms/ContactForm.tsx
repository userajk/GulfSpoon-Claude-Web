"use client";

import { useState } from "react";

const REASONS = [
  "Recipe Suggestion",
  "Correction or Update",
  "Partnership Inquiry",
  "General Feedback",
  "Press or Media",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          reason: data.get("reason"),
          message: data.get("message"),
          articleUrl: data.get("articleUrl"),
          consent: data.get("consent") === "on",
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-herb-green bg-herb-green/5 p-6 text-center" role="alert">
        <h2 className="font-serif text-xl text-deep-plum mb-2">Message Sent</h2>
        <p className="text-on-surface-variant">Thank you for reaching out. We will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">Name <span className="text-error">*</span></label>
        <input type="text" id="name" name="name" required className="w-full border border-warm-taupe bg-warm-cream px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email <span className="text-error">*</span></label>
        <input type="email" id="email" name="email" required className="w-full border border-warm-taupe bg-warm-cream px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none" />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-semibold mb-1">Reason <span className="text-error">*</span></label>
        <select id="reason" name="reason" required className="w-full border border-warm-taupe bg-warm-cream px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none">
          <option value="">Select a reason...</option>
          {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">Message <span className="text-error">*</span></label>
        <textarea id="message" name="message" required rows={5} className="w-full border border-warm-taupe bg-warm-cream px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none resize-y" />
      </div>

      <div>
        <label htmlFor="articleUrl" className="block text-sm font-semibold mb-1">Related Article URL <span className="text-on-surface-variant font-normal">(optional)</span></label>
        <input type="url" id="articleUrl" name="articleUrl" className="w-full border border-warm-taupe bg-warm-cream px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none" />
      </div>

      <label className="flex items-start gap-3">
        <input type="checkbox" name="consent" required className="accent-deep-plum w-4 h-4 mt-0.5" />
        <span className="text-sm text-on-surface-variant">
          I agree that my information will be used to respond to my inquiry. See our <a href="/privacy-policy" className="text-deep-plum underline">Privacy Policy</a>.
        </span>
      </label>

      {status === "error" && (
        <p className="text-error text-sm" role="alert">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-deep-plum text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
