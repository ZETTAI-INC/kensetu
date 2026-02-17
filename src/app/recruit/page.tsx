import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RecruitPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero - Full Screen with Image */}
            <section className="relative h-[70vh] md:h-[80vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop"
                        alt="キャリアを築く若い女性たち"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/70 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-2xl">
                            <span className="inline-block text-[var(--color-accent)] font-black tracking-widest text-sm mb-4">
                                CAREERS
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                                事業成長の<br />
                                プロフェッショナル<br />
                                集団として
                            </h1>
                            <p className="text-white/80 text-base md:text-lg font-bold leading-relaxed">
                                顧客成長と自己成長を、同時実現していく。<br />
                                私たちは、そんな意欲あふれる仲間を求めています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Environment - Compact Layout */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="mb-12 md:mb-16">
                        <span className="text-[var(--color-primary)] font-black tracking-widest text-sm">ENVIRONMENT</span>
                        <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mt-3">
                            成長を支える環境
                        </h2>
                    </div>

                    {/* Features Grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="border-l-4 border-[var(--color-primary)] pl-6">
                            <span className="text-4xl font-black text-[var(--color-primary)]/20">01</span>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] mt-2 mb-3">
                                研修プログラム
                            </h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed font-bold">
                                未経験からでもプロフェッショナルへ。
                                基礎的なビジネスマナーから、専門的なコンサルティングスキルまで、
                                段階的な研修プログラムを用意しています。
                            </p>
                        </div>

                        <div className="border-l-4 border-[var(--color-primary)] pl-6">
                            <span className="text-4xl font-black text-[var(--color-primary)]/20">02</span>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] mt-2 mb-3">
                                資格取得支援制度
                            </h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed font-bold">
                                自己研鑽を全面的にバックアップ。
                                業務に関連する資格取得にかかる費用を会社が支援します。
                                スキルアップがそのままキャリアアップに繋がります。
                            </p>
                        </div>

                        <div className="border-l-4 border-[var(--color-primary)] pl-6">
                            <span className="text-4xl font-black text-[var(--color-primary)]/20">03</span>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] mt-2 mb-3">
                                キャリアサポート
                            </h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed font-bold">
                                「選択したキャリア」の実現を徹底的にサポート。
                                定期的な1on1ミーティングで、あなたの目指す未来と現状の課題を共有し、
                                具体的なアクションプランを一緒に考えます。
                            </p>
                        </div>

                        <div className="border-l-4 border-[var(--color-primary)] pl-6">
                            <span className="text-4xl font-black text-[var(--color-primary)]/20">04</span>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] mt-2 mb-3">
                                抜擢文化
                            </h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed font-bold">
                                年齢や社歴に関わらず、意欲と実力のあるメンバーには
                                重要なポジションやプロジェクトを任せます。
                                圧倒的な成長スピードを実現できる環境です。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statement Section */}
            <section className="py-16 md:py-24 bg-[#1E3A5F]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                        Be Professional
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 font-bold leading-relaxed">
                        プロフェッショナルとして、誇りを持って働く。
                    </p>
                </div>
            </section>

            {/* Entry CTA */}
            <section className="py-16 md:py-24 bg-[var(--color-secondary)]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <span className="text-[var(--color-primary)] font-black tracking-widest text-sm mb-4 block">ENTRY</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 leading-tight">
                        まずは、お話ししませんか？
                    </h2>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-8 font-bold leading-relaxed">
                        あなたのキャリアについて、これからの未来について。<br />
                        私たちと一緒に考えましょう。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-black text-base hover:bg-[var(--color-primary-hover)] hover:scale-105 transition-all shadow-xl"
                    >
                        エントリーする
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

