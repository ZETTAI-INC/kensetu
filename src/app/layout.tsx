import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社リッチ＆ビルド | 人材コンサルティングで未来を創る",
  description: "株式会社リッチ＆ビルドは、人材派遣・人材紹介・人材育成・人材SNSコンサルティングを通じて、企業と人材の成長を支援します。あなたのキャリアアップを全力でサポートします。",
  keywords: "人材派遣, 人材紹介, 人材育成, キャリアアップ, HRコンサルティング, リッチ＆ビルド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans bg-background text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
