"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-herb-green font-semibold">
        Thank you for subscribing! Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white border border-warm-taupe px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none w-full sm:w-40"
        aria-label="First name"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white border border-warm-taupe px-4 py-3 text-sm focus:border-deep-plum focus:ring-0 focus:outline-none w-full sm:w-64"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-deep-plum text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-dark-aubergine transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
      {status === "error" && (
        <p className="text-error text-sm mt-1" role="alert">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
