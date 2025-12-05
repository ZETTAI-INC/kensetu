import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, Heart } from 'lucide-react';

export default function RecruitPage() {
    return (
        <main>
            <SubpageHero
                titleEn="RECRUIT"
                titleJa="採用情報"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                        経験がなくても大丈夫。<br />
                        「やり続ける力」があれば。
                    </h2>
                    <p className="text-emerald-800/70 leading-loose text-lg text-left md:text-center">
                        株式会社リッチ＆ビルドは、未経験から建設業界で活躍できる人材を育成しています。<br />
                        大切なのは経験やスキルではなく、「継続する力」と「成長したい気持ち」。<br />
                        私たちと一緒に、日本の施工管理業界を新しく創っていきませんか？
                    </p>
                </div>
            </section>

            {/* CEO Message */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-2/5">
                            <div className="aspect-[3/4] bg-emerald-100 relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-emerald-300 font-bold tracking-widest text-xl">
                                    CEO PHOTO
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5">
                            <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">CEO MESSAGE</p>
                            <h3 className="text-3xl font-bold mb-8 text-[#064E3B]">
                                スキルや経験がなくても、<br />
                                誰よりも「やり続ける」ことで<br />
                                道は開ける。
                            </h3>
                            <div className="space-y-4 text-emerald-800/70 leading-relaxed">
                                <p>
                                    僕は高校を卒業して行くところがなく、アメリカで4年間"筋肉留学"をしていました。帰国後は建築現場で働き始めたものの、腰を痛めて挫折。その後も職を転々としながら、最終的に営業の世界に辿り着きました。
                                </p>
                                <p>
                                    スキルも経験もなかった僕が営業成績トップを取れたのは、ただ「誰よりもやり続けた」から。筋トレと同じで、継続すれば必ず結果は出る。そう気づいたんです。
                                </p>
                                <p>
                                    建設業界は人手不足が深刻です。でも、若い力が加わればもっと面白くなる。経験がなくても、やる気と継続力があれば大丈夫。仲間と一緒に、全部デカくしていく。そんな会社を目指しています。
                                </p>
                            </div>
                            <div className="mt-8 text-right">
                                <p className="text-lg font-bold text-[#064E3B]">代表取締役</p>
                                <p className="text-2xl font-bold text-[#064E3B]">荒井 武志</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Rich & Build */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">WHY RICH & BUILD</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">リッチ＆ビルドで働く魅力</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Zap,
                                title: '未経験OK',
                                text: '経験やスキルは不問。やる気と継続力があれば、ゼロからプロフェッショナルを目指せます。'
                            },
                            {
                                icon: Users,
                                title: '仲間と成長',
                                text: '同じ志を持った仲間と切磋琢磨。一人じゃないから、困難も乗り越えられる。'
                            },
                            {
                                icon: TrendingUp,
                                title: 'キャリアアップ',
                                text: '資格取得支援制度完備。着実にスキルアップして、市場価値の高い人材に成長できます。'
                            },
                            {
                                icon: Heart,
                                title: '手厚いサポート',
                                text: '現場での悩みや不安にも寄り添う、アットホームなサポート体制。安心して働けます。'
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-[#F0FDF4] p-8 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B]">{item.title}</h3>
                                <p className="text-emerald-800/70 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Types */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">JOB TYPE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">募集職種</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: '施工管理（建築）', desc: 'ビルやマンション、商業施設などの建築現場における施工管理業務。工程・品質・安全の管理を担当。' },
                            { title: '施工管理（土木）', desc: '道路、橋梁、トンネルなどのインフラ工事における施工管理業務。社会基盤を支える仕事です。' },
                            { title: '施工管理（設備）', desc: '空調・衛生設備の工事における施工管理業務。快適な空間づくりに貢献します。' },
                            { title: '施工管理（電気）', desc: '電気設備工事における施工管理業務。現代社会に不可欠なインフラを支えます。' },
                            { title: '営業', desc: 'ゼネコンやサブコンへの提案営業、技術者のマッチング、フォローアップを担当します。' },
                            { title: '採用・人事', desc: '新卒・中途採用の企画・運営、社員研修の企画など、人材に関わる業務全般を担当。' }
                        ].map((job, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B]">{job.title}</h3>
                                <p className="text-emerald-800/70 text-sm leading-relaxed mb-6">{job.desc}</p>
                                <div className="text-emerald-500 font-bold text-sm flex items-center gap-2 hover:text-emerald-600 transition-colors cursor-pointer">
                                    詳細を見る <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">REQUIREMENTS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">募集要項</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-[#F0FDF4] rounded-2xl overflow-hidden">
                            <table className="w-full">
                                <tbody className="divide-y divide-emerald-100">
                                    {[
                                        { label: '雇用形態', value: '正社員' },
                                        { label: '応募資格', value: '学歴不問・未経験歓迎\n普通自動車免許（あれば尚可）' },
                                        { label: '勤務地', value: '首都圏の各プロジェクト先' },
                                        { label: '勤務時間', value: '8:00〜17:00（現場による）' },
                                        { label: '給与', value: '月給 25万円〜\n※経験・能力を考慮の上、決定' },
                                        { label: '待遇・福利厚生', value: '社会保険完備、交通費支給、資格取得支援制度、研修制度あり' },
                                        { label: '休日・休暇', value: '週休2日制（土日祝）、GW、夏季休暇、年末年始休暇' },
                                    ].map((row, index) => (
                                        <tr key={index}>
                                            <th className="px-8 py-6 text-left font-bold text-[#064E3B] w-1/3 bg-emerald-50 align-top">{row.label}</th>
                                            <td className="px-8 py-6 text-emerald-800/80 whitespace-pre-line">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Entry CTA */}
            <section className="py-32 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <p className="font-bold tracking-widest text-emerald-100 mb-4">ENTRY</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">一緒に、未来を創ろう。</h2>
                    <p className="text-lg mb-12 text-emerald-50 max-w-2xl mx-auto leading-relaxed">
                        経験は問いません。大切なのは「やり続ける力」。<br />
                        私たちと一緒に、建設業界の新しいスタンダードを創りませんか？
                    </p>
                    <Link href="/contact">
                        <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-16 py-8 rounded-full text-xl font-bold tracking-widest">
                            エントリーはこちら
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
