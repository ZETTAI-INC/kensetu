import type { Metadata } from "next";
import { Space_Grotesk, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  title: "リチビル | 株式会社リッチ＆ビルド - 人材コンサルティング",
  description: "株式会社リッチ＆ビルド（リチビル）は、総合人材コンサルティングを通じて、企業と人材の成長を支援します。あなたのキャリアアップを全力でサポートします。",
  keywords: "リチビル, 総合人材コンサルティング, 人材育成, キャリアアップ, HRコンサルティング, リッチ＆ビルド",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
