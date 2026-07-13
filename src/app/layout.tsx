import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/consent/CookieConsent";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GulfSpoon — Recipes from the Gulf and the People Who Call It Home",
    template: "%s | GulfSpoon",
  },
  description:
    "Discover the vibrant culinary traditions of the modern Gulf. From authentic Khaleeji staples to expat kitchens, explore recipes that bring diverse communities together.",
  metadataBase: new URL("https://gulfspoon.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GulfSpoon",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${sourceSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
