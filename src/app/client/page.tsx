import { SubpageHero } from '@/components/SubpageHero';
import { LogoGrid } from '@/components/LogoGrid';
import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

export default function ClientPage() {
    return (
        <main>
            <SubpageHero
                titleEn="CLIENT"
                titleJa="企業のご担当者様へ"
            />

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                            株式会社リッチ＆ビルドが<br />
                            選ばれる理由
                        </h2>
                        <p className="text-emerald-800/70 leading-loose text-lg text-justify md:text-center">
                            リッチ＆ビルドは、徹底したヒアリングとマッチングにより、<br />
                            貴社のプロジェクトに最適な人材をご提案いたします。<br />
                            若い力と成長意欲に満ちた人材で、現場に活気をお届けします。
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Users,
                                title: '若手人材の育成力',
                                text: '独自の研修プログラムで、未経験者でも現場で活躍できる人材を育成。若い力で現場に活気をもたらします。'
                            },
                            {
                                icon: Building2,
                                title: '幅広い対応分野',
                                text: '建築・土木・設備・電気など、あらゆる建設現場に対応可能。大規模プロジェクトから改修工事まで幅広くカバー。'
                            },
                            {
                                icon: TrendingUp,
                                title: '高い定着率',
                                text: '充実したフォロー体制と働きやすい環境づくりにより、長期的に現場に貢献できる人材を派遣します。'
                            },
                            {
                                icon: Shield,
                                title: '安心のサポート体制',
                                text: '派遣後も定期的なフォローを実施。現場でのトラブルや課題にも迅速に対応いたします。'
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B]">{item.title}</h3>
                                <p className="text-emerald-800/70 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education System */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-16 text-center">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">EDUCATION</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                            実践力を育む教育体制
                        </h2>
                        <p className="text-emerald-800/70 leading-loose text-lg text-justify md:text-center">
                            現場経験豊富な講師陣による実践的な研修を行っています。<br />
                            安全管理・品質管理・工程管理の基礎はもちろん、<br />
                            ビジネスマナーやコミュニケーション能力の向上にも力を入れています。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: 'STEP 01', title: '基礎研修', desc: '建設業界の基礎知識、安全教育' },
                            { step: 'STEP 02', title: '実技研修', desc: '図面の読み方、施工管理の実務' },
                            { step: 'STEP 03', title: 'OJT研修', desc: '現場での実践トレーニング' },
                        ].map((item, index) => (
                            <div key={index} className="bg-[#F0FDF4] p-6 rounded-xl text-center">
                                <p className="text-emerald-500 font-bold text-sm mb-2">{item.step}</p>
                                <h3 className="text-lg font-bold text-[#064E3B] mb-2">{item.title}</h3>
                                <p className="text-emerald-800/70 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logo Grid */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">CLIENT</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">主な取引先</h2>
                        <p className="text-emerald-800/70 mt-4">大手ゼネコン・サブコンを含む多数の企業様との取引実績があります</p>
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
                </div>
            </section>
        </main>
    );
}
