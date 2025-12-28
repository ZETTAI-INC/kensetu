import Link from 'next/link';
import { NewsList } from '@/components/NewsList';
import { HeroSection } from '@/components/HeroSection';
import { Users, Briefcase, GraduationCap, ArrowRight, TrendingUp, Heart, Sparkles } from 'lucide-react';

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
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 text-[var(--color-text-primary)]">
                可能性を解放し、<br />
                働くをもっと自由に。
              </h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-loose font-bold">
                <p>
                  株式会社リッチ＆ビルドは、人材の総合コンサルタントです。<br />
                  私たちは、既成概念にとらわれず、すべての人が持つ無限の可能性を信じています。
                </p>
                <p>
                  「働く」を、もっと自由で、もっとワクワクするものへ。<br />
                  一人ひとりが輝ける場所を創り出します。
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="チームワーク"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - 3 Pillars (Industry Conscious Layout) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-20 md:mb-32">
            <span className="block text-[var(--color-primary)] font-black tracking-widest text-sm mb-3">
              BUSINESS
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)]">
              事業内容
            </h2>
            <p className="mt-8 text-[var(--color-text-secondary)] max-w-2xl mx-auto font-bold text-lg leading-loose">
              人材派遣、人材紹介、人材コンサルティング。<br />
              3つの柱で、企業の成長をトータルサポートします。
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {[
              {
                title: '人材派遣',
                subtitle: 'Staffing',
                desc: 'ニーズに寄り添い、最適な人材を派遣。\n伴走型で一緒に事業拡大に貢献します。',
                image: '/images/service-staffing.png',
                color: 'text-[var(--color-primary)]',
              },
              {
                title: '人材紹介',
                subtitle: 'Recruitment',
                desc: 'ニーズに寄り添い、最適な人材を紹介。\n求職者と企業の幸せな出会いを創出します。',
                image: '/images/service-recruitment.png',
                color: 'text-[var(--color-primary)]',
              },
              {
                title: '人材コンサル',
                subtitle: 'Consulting',
                desc: '採用戦略、人材育成、評価制度設計、組織開発など、\n多角的な視点で課題解決を支援します。',
                image: '/images/service-consulting.png',
                color: 'text-[var(--color-primary)]',
              },
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col h-full justify-center">
                    <span className={`text-sm font-black tracking-widest mb-4 uppercase ${item.color} opacity-80`}>
                      {item.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-8 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-loose font-bold whitespace-pre-line">
                      {item.desc}
                    </p>
                    <div className="mt-8 md:mt-10">
                      <Link href="/service" className="group inline-flex items-center gap-2 font-black text-[var(--color-text-primary)] border-b-2 border-[var(--color-primary)] pb-1 hover:text-[var(--color-primary)] transition-colors">
                        VIEW MORE
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/service"
              className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[var(--color-primary-hover)] hover:scale-105 transition-all shadow-xl"
            >
              事業内容を詳しく見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Career Growth Section */}
      <section className="py-24 md:py-40 bg-[var(--color-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/career-growth.png"
                    alt="RICH & BUILD - キャリアを築く"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent block */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--color-primary)] rounded-2xl -z-10" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-[var(--color-primary)] font-black tracking-widest text-sm mb-6">
                CAREER GROWTH
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-10 text-[var(--color-text-primary)]">
                顧客成長と自己成長を、<br />
                同時実現していく。
              </h2>
              <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-loose font-bold mb-12">
                <p>
                  事業成長のプロフェッショナル集団として、
                  徹底した教育制度とキャリアサポートを用意しています。
                </p>
                <p>
                  研修プログラムや資格取得支援制度を活用し、
                  あなたの選択したキャリアを全力で応援します。
                </p>
              </div>

              {/* Values - Simple horizontal badges */}
              <div className="flex flex-wrap gap-3 mb-12">
                {['常に挑戦', '仕事に本気', '継続は力なり', 'ヒトに誠実'].map((value, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full font-black text-sm tracking-wide"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <Link
                href="/recruit"
                className="group inline-flex items-center gap-3 font-black text-[var(--color-primary)] text-lg"
              >
                採用情報を見る
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
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
      <section className="relative py-24 md:py-40 bg-[#1a2e35] overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            CONTACT
          </h2>
          <p className="text-white/70 font-bold mb-12 leading-relaxed">
            人材に関するご相談、採用に関するご質問など、<br />
            お気軽にお問い合わせください。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white text-lg font-black tracking-widest px-16 py-5 rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-xl"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
