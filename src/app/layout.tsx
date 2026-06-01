import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.name} | International Recycling & Commodity Trading`,
    template: `%s | ${site.name}`,
  },
  description:
    "Recycling and commodity trading since 2001. We purchase, process, trade, export and recycle scrap paper, plastic, metal, used engine oil and tires across Canada and the UAE.",
  keywords: [
    "recycling",
    "commodity trading",
    "scrap paper",
    "plastic recycling",
    "metal scrap",
    "used engine oil recovery",
    "tire recycling",
    "circular economy",
    "Canada",
    "UAE",
  ],
  openGraph: {
    title: `${site.name} | International Recycling & Commodity Trading`,
    description:
      "Transforming waste into value since 2001. Recycling and commodity trading across Canada and the UAE.",
    type: "website",
    locale: "en_CA",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
