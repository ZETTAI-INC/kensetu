import Link from 'next/link';
import { NewsList } from '@/components/NewsList';
import { HeroSection } from '@/components/HeroSection';
import { LottieAnimation } from '@/components/LottieAnimation';
import { ArrowRight } from 'lucide-react';
import { JsonLd, generateBreadcrumbList } from '@/lib/jsonld';

export default function Home() {
  const breadcrumb = generateBreadcrumbList([{ name: 'ホーム', path: '/' }]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <HeroSection />

      {/* Concept Section */}
      <section className="py-12 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <span className="block text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-4">
                OUR CONCEPT
              </span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-[var(--color-text-primary)]">
                人生を変える"最初の一歩"を<br />
                ともに踏み出す。
              </h2>
              <div className="space-y-5 text-[var(--color-text-secondary)] leading-loose text-base md:text-lg">
                <p>
                  株式会社リッチ＆ビルドは、人材の総合コンサルタントです。<br />
                  一人ひとりに向き合い、挑戦できる環境と成長の機会を提供し続け、可能性を最大化します。
                </p>
                <p>
                  人生が変わったと心から言えるまで、共に歩みます。
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 text-base font-extrabold tracking-wider text-[var(--color-primary)] hover:opacity-70 transition-opacity group"
                >
                  VIEW MORE
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/company-vision.png"
                  alt="若い女性チームの協業"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - 3 Pillars */}
      <section className="py-12 md:py-28 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
          <div className="text-center mb-12 md:mb-20">
            <span className="block text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">
              BUSINESS
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)]">
              事業内容
            </h2>
            <p className="mt-5 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              総合人材コンサルティングで、<br />
              企業の成長をトータルサポートします。
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {[
              {
                title: '総合人材コンサルティング',
                subtitle: 'Consulting',
                desc: '採用戦略の立案から人材育成、評価制度設計、組織開発まで。\n「人」に関わるあらゆる課題に対し、多角的な視点で解決を支援します。',
                image: '/images/service-consulting.png',
              },
              {
                title: '人材育成',
                subtitle: 'Training',
                desc: '独自の教育プログラムで即戦力を育成。\nビジネスマナーから専門スキルまで、段階的な研修体制を整えています。',
                image: '/images/service-page-consulting.png',
              },
              {
                title: 'キャリアサポート',
                subtitle: 'Career Support',
                desc: '一人ひとりの「やりたいこと」と企業の「求める人材像」を\n高い精度で結びつけ、双方にとって最適なキャリアを実現します。',
                image: '/images/recruit-hero.png',
              },
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-14 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col h-full justify-center">
                    <span className="text-sm font-extrabold tracking-[0.2em] mb-3 uppercase text-[var(--color-primary)]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-base leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                    <div className="mt-6">
                      <Link href="/service" className="group inline-flex items-center gap-2 text-base font-extrabold text-[var(--color-primary)] hover:opacity-70 transition-opacity">
                        VIEW MORE
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <Link
              href="/service"
              className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-extrabold text-base hover:bg-[var(--color-primary-hover)] transition-all shadow-md hover:shadow-lg"
            >
              事業内容を詳しく見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Career Growth Section */}
      <section className="py-12 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            {/* Left: Lottie Animation */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-3/4 max-w-xs md:max-w-sm lg:max-w-lg mx-auto">
                <LottieAnimation
                  src="https://assets-v2.lottiefiles.com/a/e230d174-117d-11ee-b969-83893fd0d7e9/f8gAWC2jne.lottie"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-2 md:mb-3">
                CAREER GROWTH
              </span>
              <h2 className="text-2xl md:text-5xl font-black leading-tight mb-4 md:mb-6 text-[var(--color-text-primary)]">
                顧客成長と自己成長を、<br />
                同時実現していく。
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-5 md:mb-6">
                <p>
                  事業成長のプロフェッショナル集団として、
                  徹底した教育制度とキャリアサポートを用意しています。
                </p>
                <p>
                  研修プログラムや資格取得支援制度を活用し、
                  あなたの選択したキャリアを全力で応援します。
                </p>
              </div>

              {/* Values - Clean tags */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
                {['可能性を重視する', '一歩目は一緒に', '失敗は成長の通過点', '向き合い続ける', '人生に責任を持つ'].map((value, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[var(--color-primary-light)] text-[var(--color-primary)] px-3 md:px-4 py-1.5 md:py-2 rounded-full font-extrabold text-xs md:text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <Link
                href="/recruit"
                className="group inline-flex items-center gap-2 font-extrabold text-[var(--color-primary)] text-sm md:text-base"
              >
                採用情報を見る
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-24 bg-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-5 md:px-12 w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="block text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-2">NEWS</span>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
                お知らせ
              </h2>
            </div>
            <Link
              href="/news"
              className="text-base font-extrabold text-[var(--color-primary)] hover:opacity-70 flex items-center gap-1"
            >
              VIEW ALL
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-12 md:py-24 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/contact-bg.png')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 text-center">
          <span className="block text-white/80 font-extrabold tracking-[0.2em] text-sm mb-3">CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            お気軽にお問い合わせください
          </h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            人材に関するご相談、採用に関するご質問など、<br />
            お気軽にお問い合わせください。
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white text-base font-extrabold tracking-wider px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
          >
            お問い合わせ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
