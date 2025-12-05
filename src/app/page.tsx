import { HeroSection } from '@/components/HeroSection';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Concept Section */}
      <section id="concept" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">CONCEPT</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-[#064E3B]">私たちの想い</h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed text-[#064E3B]">
                施工管理の未来を、<br />
                一緒に創りませんか。
              </h3>

              <p className="text-emerald-800/70 leading-loose mb-8">
                株式会社リッチ＆ビルドは、施工管理の人材派遣を通じて建設業界に新しい風を吹き込みます。
                経験やスキルがなくても、「やり続ける力」があれば必ず成長できる。
                私たちはそう信じています。
              </p>
              <p className="text-emerald-800/70 leading-loose mb-12">
                若い力と情熱で、日本の建設現場をもっと元気に、もっと魅力的に。
                共に成長し、共に挑戦する仲間を待っています。
              </p>

              <Link href="/company">
                <Button variant="outline" className="rounded-full px-10 py-6 text-sm tracking-widest border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors">
                  VIEW MORE
                </Button>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/concept-team.png"
                  alt="チームワーク"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-32 bg-[#F0FDF4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">BUSINESS</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#064E3B]">事業内容</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-emerald-100">
                    <img
                      src="/images/business-construction.png"
                      alt="施工管理"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-6 text-[#064E3B]">施工管理人材派遣</h3>
                  <p className="text-emerald-800/70 leading-loose mb-8">
                    建築・土木・設備・電気など、あらゆる建設現場において即戦力となる施工管理技術者を派遣します。
                    未経験者の育成から、経験豊富なベテランまで、現場のニーズに合わせた最適な人材をマッチングします。
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-[#064E3B]">若手人材の積極採用・育成</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-[#064E3B]">キャリアアップ支援制度</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-[#064E3B]">安心のサポート体制</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/service">
              <Button variant="outline" className="rounded-full px-10 py-6 text-sm tracking-widest border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section id="client" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">CLIENT</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#064E3B]">取引実績</h2>
            <p className="text-emerald-800/70">
              大手ゼネコン・サブコンを含む多数の企業様との取引実績があります
            </p>
          </div>

          <LogoGrid logos={[
            { src: '', alt: 'Client 1' },
            { src: '', alt: 'Client 2' },
            { src: '', alt: 'Client 3' },
            { src: '', alt: 'Client 4' },
            { src: '', alt: 'Client 5' },
            { src: '', alt: 'Client 6' },
            { src: '', alt: 'Client 7' },
            { src: '', alt: 'Client 8' },
          ]} />

          <div className="text-center mt-12">
            <Link href="/client">
              <Button variant="outline" className="rounded-full px-10 py-6 text-sm tracking-widest border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-32 bg-[#F0FDF4]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">NEWS</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#064E3B]">お知らせ</h2>
            </div>
            <Link href="/news" className="mt-4 md:mt-0">
              <Button variant="outline" className="rounded-full px-8 py-4 text-sm tracking-widest border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors">
                VIEW ALL <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Member Section */}
      <section id="member" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">MEMBER</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#064E3B]">経営陣</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="bg-[#F0FDF4] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-emerald-200 rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-emerald-400 font-bold">
                  PHOTO
                </div>
              </div>
              <p className="text-emerald-500 text-sm font-bold tracking-wider mb-2">CEO</p>
              <h3 className="text-2xl font-bold text-[#064E3B] mb-2">荒井 武志</h3>
              <p className="text-sm text-emerald-600 mb-4">代表取締役</p>
              <p className="text-emerald-800/70 text-sm leading-relaxed">
                「継続は力なり」をモットーに、スキルや経験がなくても誰よりもやり続けることで道を切り拓いてきた。
                仲間と一緒に大きな成長を目指す会社を創る。
              </p>
            </div>

            {/* Director */}
            <div className="bg-[#F0FDF4] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-emerald-200 rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-emerald-400 font-bold">
                  PHOTO
                </div>
              </div>
              <p className="text-emerald-500 text-sm font-bold tracking-wider mb-2">DIRECTOR</p>
              <h3 className="text-2xl font-bold text-[#064E3B] mb-2">鵜山 康宏</h3>
              <p className="text-sm text-emerald-600 mb-4">取締役</p>
              <p className="text-emerald-800/70 text-sm leading-relaxed">
                職人の家系に生まれ、営業の世界で叩き上げ。2年間休み0日で営業トップに。
                23歳で起業し、現在は複数の会社を経営する実業家。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/company">
              <Button variant="outline" className="rounded-full px-10 py-6 text-sm tracking-widest border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/recruit-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <p className="font-bold tracking-widest text-emerald-100 mb-4">JOIN US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">一緒に、未来を創ろう。</h2>
          <p className="text-lg mb-12 text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            経験は問いません。大切なのは「やり続ける力」。<br />
            私たちと一緒に、建設業界の新しいスタンダードを創りませんか？
          </p>
          <Link href="/recruit">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-8 rounded-full text-lg font-bold tracking-wider">
              採用情報を見る <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-[#064E3B]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-emerald-400 font-bold tracking-widest mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">お問い合わせ</h2>
          <p className="text-emerald-100/80 mb-12 max-w-xl mx-auto">
            人材に関するご相談、お見積もりなど、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-6 rounded-full text-base font-bold tracking-wider">
              お問い合わせはこちら
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
