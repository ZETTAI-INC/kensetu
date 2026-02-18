import { SubpageHero } from '@/components/SubpageHero';
import { CheckCircle2, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicePage() {
    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="SERVICE"
                titleJa="事業紹介"
                backgroundImage="/images/hero-main.png"
            />

            {/* Intro */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-[var(--color-text-primary)] tracking-tight">
                        人材の<br className="md:hidden" />総合コンサルタント
                    </h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                        企業の成長は「人」で決まります。<br />
                        総合人材コンサルティングを通じて、<br className="hidden md:block" />
                        トータルで企業の課題解決と成長を支援します。
                    </p>
                </div>
            </section>

            {/* Service 1: Consulting */}
            <section className="py-12 md:py-20 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/images/service-consulting.png"
                                        alt="総合人材コンサルティング"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-[0.15em] text-xs">SERVICE 01</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text-primary)]">総合人材コンサルティング</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-sm">
                                    採用戦略の立案から、入社後の人材育成、評価制度の設計、
                                    そして組織開発まで。
                                    「人」に関わるあらゆる課題に対し、専門的な知見で解決策を提示します。
                                </p>
                                <ul className="space-y-2">
                                    {['採用戦略の策定', '人材育成プログラム', '評価制度設計', '組織開発支援'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)] text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Training */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/images/service-page-consulting.png"
                                        alt="人材育成"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-[0.15em] text-xs">SERVICE 02</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text-primary)]">人材育成</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-sm">
                                    独自の教育プログラムで即戦力を育成します。
                                    ビジネスマナーから専門的なスキルまで、
                                    段階的な研修体制で人材の成長を支援します。
                                </p>
                                <ul className="space-y-2">
                                    {['段階的な研修プログラム', '実践的なスキル習得', '資格取得支援', 'キャリアパス設計'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)] text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Career Support */}
            <section className="py-12 md:py-20 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/images/recruit-hero.png"
                                        alt="キャリアサポート"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-[0.15em] text-xs">SERVICE 03</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text-primary)]">キャリアサポート</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-sm">
                                    一人ひとりの「やりたいこと」と企業の「求める人材像」を
                                    高い精度で結びつけ、双方にとって最適なキャリアを実現します。
                                    定期的なフォローアップで長期的な成長を支えます。
                                </p>
                                <ul className="space-y-2">
                                    {['丁寧なヒアリング', '最適なキャリアマッチング', '定着率の向上', '長期的なフォローアップ'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)] text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
                        人材に関する課題、<br className="md:hidden" />ご相談ください
                    </h2>
                    <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm">
                        貴社の「人」に関するお悩みを、私たちが解決します。<br />
                        まずはお気軽にお問い合わせください。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[var(--color-primary-hover)] transition-all shadow-md hover:shadow-lg"
                    >
                        お問い合わせ
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
