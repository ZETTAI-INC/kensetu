'use client';

import Link from 'next/link';

const navItems = [
    { name: 'Company', href: '/company' },
    { name: 'Service', href: '/service' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/recruit' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Subtle decorative line Top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
                    {/* Logo & Info */}
                    <div className="md:w-1/3">
                        <div className="font-black text-3xl tracking-tighter mb-6 text-white">
                            RICH & BUILD
                        </div>
                        <div className="space-y-4 text-white text-base">
                            <p className="font-bold text-white">株式会社リッチ＆ビルド</p>
                            <div className="space-y-1">
                                <p className="font-bold text-white">総合人材コンサルティング</p>
                            </div>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase font-black tracking-widest bg-white/20 px-2 py-1 rounded text-white">Tel</span>
                                    <a href="tel:090-7797-6699" className="hover:opacity-70 transition-opacity tracking-widest font-bold text-white text-lg">090-7797-6699</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase font-black tracking-widest bg-white/20 px-2 py-1 rounded text-white">Mail</span>
                                    <a href="mailto:info@rich-and-build.co.jp" className="hover:opacity-70 transition-opacity tracking-wide font-bold text-white">info@rich-and-build.co.jp</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 flex flex-wrap content-start gap-x-12 gap-y-4 md:justify-end">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-bold text-white hover:text-white/80 hover:translate-x-1 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 bg-black/20">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} RICH & BUILD Inc. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="text-sm font-bold text-white hover:text-white/80 transition-colors tracking-widest flex items-center gap-2"
                    >
                        PAGE TOP ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};
