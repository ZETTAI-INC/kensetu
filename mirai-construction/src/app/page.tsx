import Link from 'next/link';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Concept Section - Split layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                CONCEPT
              </h2>
              <p className="text-sm text-gray-500 tracking-wide mb-10">
                株式会社リッチ＆ビルドについて
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                建設業界のリーダーをつくる。
              </h3>
              <p className="text-gray-600 leading-[2] mb-4">
                "ゼロからの挑戦"　設備・電気のスペシャリストとして成長し、
              </p>
              <p className="text-gray-600 leading-[2] mb-10">
                あなたの力で業界の未来を切り拓くリーダーになりませんか？
              </p>
              <Link
                href="/company"
                className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                VIEW MORE
              </Link>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src="/images/concept-workers.png"
                  alt="コンセプト"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - Split layout (image left, text right) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: Large Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full min-h-[400px] md:min-h-[600px] bg-gray-100">
                <img
                  src="/images/business-building.png"
                  alt="ビジネス"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex items-center">
              <div className="px-8 md:px-16 py-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  BUSINESS
                </h2>
                <p className="text-sm text-gray-500 tracking-wide mb-12">
                  事業内容
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  施工管理の人材派遣
                </h3>
                <p className="text-gray-600 leading-[2] mb-10">
                  株式会社リッチ＆ビルドは、施工管理の人材派遣を行っています。若い力と情熱で日本の建設業界を支え、施工管理のプロフェッショナル集団を目指しております。
                </p>
                <div>
                  <Link
                    href="/service"
                    className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">CLIENT</h2>
            <p className="text-sm text-gray-500 tracking-wide">取引実績</p>
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

          <div className="text-center mt-12">
            <Link
              href="/client"
              className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">NEWS</h2>
              <p className="text-sm text-gray-500 tracking-wide">お知らせ</p>
            </div>
            <Link
              href="/news"
              className="mt-6 md:mt-0 inline-block border border-black rounded-full px-8 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Contact Section - Full width background image */}
      <section className="relative py-32 md:py-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            CONTACT
          </h2>
          <p className="text-sm text-white/80 tracking-wide mb-10">
            お問い合わせ
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-10 py-4 rounded-full font-medium hover:bg-[#B91C1C] transition-colors"
          >
            お問い合わせはこちら →
          </Link>
        </div>
      </section>
    </>
  );
}
