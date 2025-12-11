'use client';

import Link from 'next/link';

const navItems = [
    { name: 'Company', href: '/company' },
    { name: 'Service', href: '/service' },
    { name: 'Client', href: '/client' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
    { name: 'Recruit', href: '/recruit' },
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
                        <div className="font-bold text-2xl tracking-tighter mb-6">
                            RICH & BUILD
                        </div>
                        <div className="space-y-4 text-white/80 text-sm">
                            <p className="font-medium">株式会社リッチ＆ビルド</p>
                            <div className="space-y-1 opacity-80">
                                <p>代表取締役：荒井 武志</p>
                                <p>資本金：2,000万円</p>
                            </div>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-2 py-0.5 rounded text-white">Tel</span>
                                    <a href="tel:090-7797-6699" className="hover:text-[var(--color-accent)] transition-colors tracking-widest font-medium">090-7797-6699</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-2 py-0.5 rounded text-white">Mail</span>
                                    <a href="mailto:takeshi.arai625@gmail.com" className="hover:text-[var(--color-accent)] transition-colors tracking-wide font-medium">takeshi.arai625@gmail.com</a>
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
                                className="text-sm font-bold text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300"
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
                    <p className="text-xs text-white/50 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} RICH & BUILD Inc. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="text-xs font-bold text-white/50 hover:text-white transition-colors tracking-widest flex items-center gap-2"
                    >
                        PAGE TOP ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

