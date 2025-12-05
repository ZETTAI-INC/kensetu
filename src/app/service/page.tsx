import { SubpageHero } from '@/components/SubpageHero';
import { Building2, GraduationCap, TrendingUp, Users, MessageCircle, Heart, HardHat, Zap, Shield } from 'lucide-react';

export default function ServicePage() {
    return (
        <main>
            <SubpageHero
                titleEn="SERVICE"
                titleJa="事業紹介"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                        施工管理のプロフェッショナルを、<br />
                        あなたの現場へ
                    </h2>
                    <p className="text-emerald-800/70 leading-loose text-lg text-left md:text-center">
                        株式会社リッチ＆ビルドは、建設業界における施工管理技術者の派遣を通じて、<br />
                        プロジェクトの円滑な進行をサポートしています。<br />
                        私たちは単なる人材派遣にとどまらず、現場のニーズに合わせた最適な人材をマッチング。<br />
                        未経験から育成した若い力と、信頼のサポート体制で、<br />
                        お客様の現場を強力にバックアップします。
                    </p>
                </div>
            </section>

            {/* Main Service */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 bg-emerald-100 aspect-video md:aspect-auto relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-emerald-300 font-bold tracking-widest text-xl">
                                        CONSTRUCTION
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-12">
                                    <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">MAIN SERVICE</p>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#064E3B]">施工管理人材派遣</h3>
                                    <p className="text-emerald-800/70 leading-relaxed mb-8">
                                        建築・土木・設備・電気など、あらゆる建設現場において、工程管理・品質管理・安全管理を行う施工管理技術者を派遣します。大規模プロジェクトから改修工事まで、幅広いニーズに対応可能です。
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <HardHat className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <span className="font-medium text-[#064E3B]">建築・土木・設備・電気工事</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <span className="font-medium text-[#064E3B]">即戦力から育成人材まで対応</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <Shield className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <span className="font-medium text-[#064E3B]">安心のフォロー体制</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Fields */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">FIELD</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">対応分野</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: '建築工事', desc: 'オフィスビル・マンション・商業施設など' },
                            { title: '土木工事', desc: '道路・橋梁・トンネル・ダムなど' },
                            { title: '設備工事', desc: '空調・衛生・給排水設備など' },
                            { title: '電気工事', desc: '電気設備・通信設備・プラントなど' },
                        ].map((field, index) => (
                            <div key={index} className="bg-[#F0FDF4] p-8 rounded-xl hover:shadow-lg transition-shadow text-center">
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B]">{field.title}</h3>
                                <p className="text-emerald-800/70 text-sm">{field.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">FEATURE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">リッチ＆ビルドの強み</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Users,
                                title: '若手人材の\n積極採用・育成',
                                text: '未経験者でも安心。独自の研修プログラムで基礎からしっかり学べる環境を整えています。若い力で現場に活気を。'
                            },
                            {
                                icon: GraduationCap,
                                title: '実践的な\n教育カリキュラム',
                                text: '現場経験豊富な講師陣による実践的な研修。資格取得支援制度も充実しており、着実にスキルアップできます。'
                            },
                            {
                                icon: TrendingUp,
                                title: 'キャリア形成\nサポート',
                                text: '一人ひとりの将来のビジョンに合わせたキャリアプランの作成と実現をサポート。長期的な成長を支援します。'
                            },
                            {
                                icon: Building2,
                                title: '豊富な\n取引実績',
                                text: '大手ゼネコン・サブコンを中心に多数の取引実績。現場の特性を熟知したマッチングで、最適な人材を派遣します。'
                            },
                            {
                                icon: MessageCircle,
                                title: '密な\nコミュニケーション',
                                text: '派遣後も定期的なフォローを実施。現場での悩みやトラブルにも迅速に対応し、安心して働ける環境を整えます。'
                            },
                            {
                                icon: Heart,
                                title: '高い\n定着率',
                                text: '働きやすい環境づくりと手厚いサポートにより、業界平均を上回る定着率を実現。長く安定して働ける職場です。'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 whitespace-pre-line text-[#064E3B]">{item.title}</h3>
                                <p className="text-emerald-800/70 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">FLOW</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">ご利用の流れ</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'お問い合わせ', desc: 'お電話またはお問い合わせフォームよりご連絡ください。' },
                                { step: '02', title: 'ヒアリング', desc: '現場の状況やご要望を詳しくお伺いし、最適な人材をご提案します。' },
                                { step: '03', title: '人材のご紹介', desc: 'ご要望に合った人材をご紹介。事前の顔合わせも可能です。' },
                                { step: '04', title: '派遣開始', desc: '契約締結後、派遣を開始。定期的なフォローで安心のサポート。' },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <h3 className="text-xl font-bold text-[#064E3B] mb-2">{item.title}</h3>
                                        <p className="text-emerald-800/70">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
