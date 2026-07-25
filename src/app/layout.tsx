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
    default: "GulfSpoon — Gulf Recipes and Expat Kitchens",
    template: "%s | GulfSpoon",
  },
  description:
    "Authentic Gulf recipes, expat kitchen favorites, and food stories from the Arabian Peninsula. Khaleeji, South Asian, and Levantine dishes for home cooks.",
  metadataBase: new URL("https://gulfspoon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GulfSpoon",
    title: "GulfSpoon — Gulf Recipes and Expat Kitchens",
    description:
      "Authentic Gulf recipes, expat kitchen favorites, and food stories from the Arabian Peninsula. Khaleeji, South Asian, and Levantine dishes for home cooks.",
    url: "https://gulfspoon.com",
    images: [
      {
        url: "/images/gulfspoon-og.png",
        width: 1200,
        height: 630,
        alt: "GulfSpoon — Gulf Recipes and Expat Kitchens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GulfSpoon — Gulf Recipes and Expat Kitchens",
    description:
      "Authentic Gulf recipes, expat kitchen favorites, and food stories from the Arabian Peninsula. Khaleeji, South Asian, and Levantine dishes for home cooks.",
  },
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
