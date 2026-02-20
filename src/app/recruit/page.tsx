import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RecruitPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero - Full Screen with Image */}
            <section className="relative h-[60vh] md:h-[80vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src="/images/concept-workers.png"
                        alt="キャリアを築く若い女性たち"
                        className="w-full h-full object-cover"
                    />
                    {/* Mobile: full coverage / Desktop: gradient */}
                    <div className="absolute inset-0 bg-[var(--color-dark)]/70 md:bg-transparent" />
                    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[var(--color-dark)]/85 via-[var(--color-dark)]/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-end pb-12 md:items-center md:pb-0">
                    <div className="w-full max-w-7xl mx-auto px-5 md:px-12">
                        <div className="max-w-2xl">
                            <span className="inline-block text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3 md:mb-4">
                                CAREERS
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-4 md:mb-6">
                                事業成長の<br />
                                プロフェッショナル<br />
                                集団として
                            </h1>
                            <p className="text-white/60 text-sm md:text-lg font-bold leading-relaxed">
                                顧客成長と自己成長を、同時実現していく。<br />
                                私たちは、そんな意欲あふれる仲間を求めています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Environment */}
            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-5 md:px-12">
                    <div className="mb-12 md:mb-16">
                        <span className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm">ENVIRONMENT</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] mt-3">
                            成長を支える環境
                        </h2>
                    </div>

                    {/* Features Grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
                        {[
                            {
                                num: '01',
                                title: '研修プログラム',
                                text: '未経験からでもプロフェッショナルへ。基礎的なビジネスマナーから、専門的なコンサルティングスキルまで、段階的な研修プログラムを用意しています。'
                            },
                            {
                                num: '02',
                                title: '資格取得支援制度',
                                text: '自己研鑽を全面的にバックアップ。業務に関連する資格取得にかかる費用を会社が支援します。スキルアップがそのままキャリアアップに繋がります。'
                            },
                            {
                                num: '03',
                                title: 'キャリアサポート',
                                text: '「選択したキャリア」の実現を徹底的にサポート。定期的な1on1ミーティングで、あなたの目指す未来と現状の課題を共有し、具体的なアクションプランを一緒に考えます。'
                            },
                            {
                                num: '04',
                                title: '抜擢文化',
                                text: '年齢や社歴に関わらず、意欲と実力のあるメンバーには重要なポジションやプロジェクトを任せます。圧倒的な成長スピードを実現できる環境です。'
                            },
                        ].map((item) => (
                            <div key={item.num} className="bg-[var(--color-secondary)] rounded-2xl p-6 md:p-8 hover:shadow-md transition-all">
                                <span className="text-4xl font-black text-[var(--color-primary)]/20">{item.num}</span>
                                <h3 className="text-2xl font-black text-[var(--color-text-primary)] mt-2 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statement Section */}
            <section className="py-12 md:py-24 bg-[var(--color-dark)]">
                <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white leading-tight mb-3 md:mb-4">
                        Be Professional
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                        プロフェッショナルとして、誇りを持って働く。
                    </p>
                </div>
            </section>

            {/* Entry CTA */}
            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
                    <span className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3 md:mb-4 block">ENTRY</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-5 md:mb-6 leading-tight">
                        まずは、お話ししませんか？
                    </h2>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                        あなたのキャリアについて、これからの未来について。<br />
                        私たちと一緒に考えましょう。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-extrabold text-base hover:bg-[var(--color-primary-hover)] transition-all shadow-md hover:shadow-lg"
                    >
                        エントリーする
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
