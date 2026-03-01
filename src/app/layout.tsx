import type { Metadata } from "next";
import { Space_Grotesk, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, PAGE_METADATA } from "@/lib/metadata";
import {
  JsonLd,
  generateOrganization,
  generateLocalBusiness,
  generateWebSite,
} from "@/lib/jsonld";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_METADATA.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_METADATA.home.description,
  keywords: PAGE_METADATA.home.keywords,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'theme-color': '#5CC0EE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${spaceGrotesk.variable} ${zenKaku.variable} antialiased font-sans bg-background text-text-primary`}
      >
        <JsonLd data={generateOrganization()} />
        <JsonLd data={generateLocalBusiness()} />
        <JsonLd data={generateWebSite()} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
