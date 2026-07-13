"use client";

import { useState, useEffect } from "react";

type ConsentState = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
};

const CONSENT_KEY = "gulfspoon-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function saveConsent(c: ConsentState) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    setVisible(false);
    setShowPrefs(false);
  }

  function acceptAll() {
    saveConsent({ necessary: true, functional: true, analytics: true, advertising: true });
  }

  function rejectNonEssential() {
    saveConsent({ necessary: true, functional: false, analytics: false, advertising: false });
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[70] p-4" role="dialog" aria-label="Cookie consent">
      <div className="max-w-[1320px] mx-auto bg-white border border-outline-variant shadow-lg p-6">
        {!showPrefs ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-sm text-charcoal flex-1">
              We use cookies to improve your experience. You can manage your preferences or accept all cookies.
            </p>
            <div className="flex gap-2 shrink-0">
              <button onClick={rejectNonEssential} className="px-4 py-2 text-sm border border-deep-plum text-deep-plum hover:bg-soft-sand transition-colors">
                Reject Non-Essential
              </button>
              <button onClick={() => setShowPrefs(true)} className="px-4 py-2 text-sm border border-deep-plum text-deep-plum hover:bg-soft-sand transition-colors">
                Manage Preferences
              </button>
              <button onClick={acceptAll} className="px-4 py-2 text-sm bg-deep-plum text-white hover:bg-dark-aubergine transition-colors">
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-xl text-deep-plum mb-4">Cookie Preferences</h3>
            <div className="space-y-3 mb-6">
              {(["necessary", "functional", "analytics", "advertising"] as const).map((key) => (
                <label key={key} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent[key]}
                    disabled={key === "necessary"}
                    onChange={() => setConsent((p) => ({ ...p, [key]: !p[key] }))}
                    className="accent-deep-plum w-4 h-4"
                  />
                  <span className="text-sm capitalize">{key}{key === "necessary" && " (required)"}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => saveConsent(consent)} className="px-4 py-2 text-sm bg-deep-plum text-white hover:bg-dark-aubergine transition-colors">
                Save Preferences
              </button>
              <button onClick={() => setShowPrefs(false)} className="px-4 py-2 text-sm border border-deep-plum text-deep-plum hover:bg-soft-sand transition-colors">
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
