'use client';

import Link from 'next/link';

const navItems = [
    { name: '会社案内', href: '/company' },
    { name: '事業内容', href: '/service' },
    { name: 'お知らせ', href: '/news' },
    { name: '採用情報', href: '/recruit' },
    { name: 'お問い合わせ', href: '/contact' },
    { name: 'プライバシー', href: '/privacy' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[var(--color-dark)] text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
                    {/* Logo & Info */}
                    <div className="md:w-1/3">
                        <div className="font-black text-3xl tracking-tight mb-6 flex items-baseline">
                            <span className="text-[var(--color-primary)]">リチ</span>
                            <span className="text-white">ビル</span>
                        </div>
                        <div className="space-y-4 text-white/80 text-sm">
                            <p className="font-bold text-white/90">株式会社リッチ＆ビルド</p>
                            <p className="font-medium">総合人材コンサルティング</p>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase font-bold tracking-widest bg-white/10 px-2 py-1 rounded text-white/70">Tel</span>
                                    <a href="tel:090-7797-6699" className="hover:text-white transition-colors tracking-wide font-bold text-white/90">090-7797-6699</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase font-bold tracking-widest bg-white/10 px-2 py-1 rounded text-white/70">Mail</span>
                                    <a href="mailto:info@rich-and-build.co.jp" className="hover:text-white transition-colors tracking-wide font-medium text-white/90">info@rich-and-build.co.jp</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 flex flex-wrap content-start gap-x-10 gap-y-4 md:justify-end">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} RICH & BUILD Inc. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="text-xs font-medium text-white/50 hover:text-white/80 transition-colors tracking-widest flex items-center gap-2"
                    >
                        PAGE TOP
                    </button>
                </div>
            </div>
        </footer>
    );
};
