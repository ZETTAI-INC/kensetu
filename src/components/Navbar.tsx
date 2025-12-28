'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: '会社案内', href: '/company' },
        { name: '事業内容', href: '/service' },
        { name: 'お知らせ', href: '/news' },
        { name: '採用情報', href: '/recruit' },
        { name: 'お問い合わせ', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                    isScrolled || isMobileMenuOpen
                        ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-border'
                        : 'bg-transparent py-6'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="z-50 relative group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="font-bold flex flex-col leading-none">
                            <span className={cn(
                                "text-2xl tracking-tighter transition-colors duration-300",
                                isScrolled || isMobileMenuOpen ? "text-[var(--color-primary)]" : "text-white drop-shadow-md"
                            )}>
                                RICH & BUILD
                            </span>
                            <span className={cn(
                                "text-[10px] tracking-[0.2em] font-medium transition-colors duration-300",
                                isScrolled || isMobileMenuOpen ? "text-[var(--color-text-secondary)]" : "text-white/90 drop-shadow-md"
                            )}>
                                株式会社リッチ＆ビルド
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold tracking-wider transition-colors duration-300 hover:text-[var(--color-accent)]",
                                    isScrolled
                                        ? "text-[var(--color-primary)]"
                                        : "text-white drop-shadow-md"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="メニュー"
                    >
                        <span className={cn(
                            "w-6 h-[2px] transition-all duration-300 absolute",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                        )} />
                        <span className={cn(
                            "w-6 h-[2px] transition-all duration-300",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "opacity-0" : "opacity-100"
                        )} />
                        <span className={cn(
                            "w-6 h-[2px] transition-all duration-300 absolute",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                        )} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-[var(--color-secondary)]/98 backdrop-blur-xl pt-32 px-6 md:hidden flex flex-col items-center justify-start space-y-8"
                    >
                        <nav className="flex flex-col gap-6 w-full text-center">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-xl font-bold text-[var(--color-primary)] py-2 block hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-border)] mx-auto w-1/2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="inline-block bg-[var(--color-primary)] text-white font-bold py-4 px-12 rounded-full hover:bg-[var(--color-primary-hover)] transition-all shadow-lg tracking-widest text-sm">
                                    CONTACT US
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
