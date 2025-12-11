import Link from 'next/link';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Concept Section */}
      <section className="py-20 md:py-32 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <span className="block text-[var(--color-primary)] font-bold tracking-widest text-sm mb-4">
                OUR CONCEPT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-[var(--color-text-primary)]">
                建設業界の未来を、<br />
                ここから変えていく。
              </h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-loose">
                <p>
                  株式会社リッチ＆ビルドは、単なる人材派遣会社ではありません。<br />
                  私たちは、建設業界が抱える課題を「人」の力で解決し、
                  新しい価値を創造するパートナーです。
                </p>
                <p>
                  未経験からプロフェッショナルへ。<br />
                  徹底した教育制度とキャリアサポートで、
                  あなたの可能性を最大限に引き出します。
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest border-b border-[var(--color-primary)] pb-1 text-[var(--color-primary)] hover:opacity-70 transition-opacity"
                >
                  VIEW MORE
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/concept-workers.png"
                  alt="コンセプト"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="block text-[var(--color-primary)] font-bold tracking-widest text-sm mb-3">
                BUSINESS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]">
                事業内容
              </h2>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-[var(--color-border)] mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative aspect-video overflow-hidden rounded-sm shadow-lg group">
              <img
                src="/images/business-building.png"
                alt="施工管理"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)] flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-primary)]"></span>
                施工管理の人材派遣
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-loose mb-8">
                建築・土木・設備・電気など、あらゆる建設現場における施工管理業務をサポートします。
                若手からベテランまで、プロジェクトの規模や特性に合わせた最適な人材をご提案。
                現場の安全・品質・工程・原価管理を強力にバックアップします。
              </p>
              <div>
                <Link
                  href="/service"
                  className="inline-block bg-[var(--color-primary)] text-white text-sm font-bold tracking-widest px-8 py-3 hover:bg-[var(--color-primary-hover)] transition-colors shadow-md"
                >
                  詳しく見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-16">
            <span className="block text-[var(--color-primary)] font-bold tracking-widest text-sm mb-3">
              CLIENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              主要取引先
            </h2>
          </div>
          <LogoGrid logos={[
            { src: '', alt: '住友電設株式会社' },
            { src: '', alt: '株式会社日比谷アメニス' },
            { src: '', alt: '株式会社関電工' },
            { src: '', alt: '東急建設株式会社' },
            { src: '', alt: '大成建設株式会社' },
            { src: '', alt: '鹿島建設株式会社' },
            { src: '', alt: '清水建設株式会社' },
            { src: '', alt: '株式会社大林組' },
            { src: '', alt: '株式会社竹中工務店' },
            { src: '', alt: '戸田建設株式会社' },
          ]} />
          <div className="mt-12 text-center">
            <Link
              href="/client"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              取引実績一覧を見る
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              NEWS
            </h2>
            <Link
              href="/news"
              className="text-sm font-bold text-[var(--color-primary)] hover:opacity-70"
            >
              VIEW ALL →
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 md:py-40 bg-[var(--color-primary)] overflow-hidden">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-grid.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            CONTACT
          </h2>
          <p className="text-white/80 font-medium mb-12 leading-relaxed">
            お仕事のご依頼、採用に関するご質問など、<br />
            お気軽にお問い合わせください。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] text-lg font-bold tracking-widest px-16 py-5 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-xl"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
