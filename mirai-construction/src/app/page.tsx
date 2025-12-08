import Link from 'next/link';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />



      {/* Concept Section */}
      <section className="relative py-32 md:py-48 bg-[#F0FFF4] overflow-hidden">
        {/* Diagonal Background Accent */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#E6FFFA] -skew-x-12 translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -left-20 -top-20 text-[200px] font-black text-[#009900] opacity-[0.05] select-none pointer-events-none hidden md:block">
                01
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-[#004d00]">
                CONCEPT
              </h2>
              <p className="text-sm md:text-base font-bold tracking-widest text-[#009900] mb-12">
                株式会社リッチ＆ビルドについて
              </p>
              <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight text-[#004d00]">
                建設業界の<br />リーダーをつくる。
              </h3>
              <p className="text-[#004d00]/80 leading-loose mb-6 font-medium">
                "ゼロからの挑戦"<br />
                設備・電気のスペシャリストとして成長し、
              </p>
              <p className="text-[#004d00]/80 leading-loose mb-12 font-medium">
                あなたの力で業界の未来を切り拓く<br />
                リーダーになりませんか？
              </p>
              <Link
                href="/company"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest border-b-2 border-[#009900] pb-1 text-[#009900] hover:opacity-60 transition-opacity"
              >
                VIEW MORE
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-[#009900]/10 translate-x-4 translate-y-4" />
                <img
                  src="/images/concept-workers.png"
                  alt="コンセプト"
                  className="relative w-full h-full object-cover transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="relative py-32 md:py-48 bg-[#009900] text-white overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 bg-[#008000]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#009900] [clip-path:polygon(0_0,60%_0,40%_100%,0%_100%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
            {/* Text Side (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="absolute -right-20 -top-10 text-[200px] font-black text-white opacity-[0.1] select-none pointer-events-none hidden md:block">
                02
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
                BUSINESS
              </h2>
              <p className="text-sm md:text-base font-bold tracking-widest text-[#FFF] mb-16 opacity-80">
                事業内容
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/50"></span>
                    施工管理の人材派遣
                  </h3>
                  <p className="text-white/90 leading-loose pl-16">
                    株式会社リッチ＆ビルドは、施工管理の人材派遣を行っています。若い力と情熱で日本の建設業界を支え、施工管理のプロフェッショナル集団を目指しております。
                  </p>
                </div>
              </div>

              <div className="mt-16 pl-16">
                <Link
                  href="/service"
                  className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest border-b-2 border-white pb-1 hover:opacity-60 transition-opacity"
                >
                  VIEW MORE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Image Side (Left on Desktop) */}
            <div className="w-full md:w-1/2">
              <div className="relative h-full min-h-[500px]">
                <img
                  src="/images/business-building.png"
                  alt="ビジネス"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-32 md:py-48 bg-[#F0FFF4] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.9] text-[#004d00]">
                CLIENT
              </h2>
              <p className="text-sm md:text-base font-bold tracking-widest text-[#009900]">
                取引実績
              </p>
            </div>
            <Link
              href="/client"
              className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest border-b-2 border-[#009900] pb-1 text-[#009900] hover:opacity-60 transition-opacity mb-2"
            >
              VIEW MORE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 md:py-48 bg-[#E6FFFA] relative overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#009900]/10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.9] text-[#004d00]">
                NEWS
              </h2>
              <p className="text-sm md:text-base font-bold tracking-widest text-[#009900]">
                お知らせ
              </p>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest border-b-2 border-[#009900] pb-1 text-[#009900] hover:opacity-60 transition-opacity mb-2"
            >
              VIEW ALL
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 md:py-48 bg-[#059669] overflow-hidden">
        {/* Background Overlay with diagonal cut */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/contact-bg.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
            CONTACT
          </h2>
          <p className="text-sm md:text-base font-bold tracking-widest text-white/70 mb-16">
            お問い合わせ
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#006600] text-lg md:text-xl font-bold tracking-widest px-16 py-6 hover:bg-[#E6FFFA] border-2 border-white transition-all duration-300 shadow-xl"
          >
            お問い合わせをはじめる
          </Link>
        </div>
      </section>
    </>
  );
}
