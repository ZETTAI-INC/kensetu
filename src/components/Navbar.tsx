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
                        ? 'bg-white/98 backdrop-blur-md shadow-sm py-3 border-b border-border'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo - リチビル */}
                    <Link
                        href="/"
                        className="z-50 relative group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="font-black flex items-baseline leading-none tracking-tight">
                            <span className={cn(
                                "text-3xl md:text-4xl transition-colors duration-300",
                                isScrolled || isMobileMenuOpen ? "text-[var(--color-primary)]" : "text-white drop-shadow-lg"
                            )}>
                                リチ
                            </span>
                            <span className={cn(
                                "text-3xl md:text-4xl transition-colors duration-300",
                                isScrolled || isMobileMenuOpen ? "text-[#1A202C]" : "text-white drop-shadow-lg"
                            )}>
                                ビル
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold tracking-wider transition-all duration-300 relative group/nav",
                                    isScrolled
                                        ? "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                                        : "text-white/90 hover:text-white drop-shadow-sm"
                                )}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover/nav:w-full" />
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
                        className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col items-center justify-start"
                    >
                        <nav className="flex flex-col gap-1 w-full max-w-sm">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-lg font-bold text-[var(--color-text-primary)] py-4 block hover:text-[var(--color-primary)] transition-colors border-b border-[var(--color-border)]"
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
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="inline-block bg-[var(--color-primary)] text-white font-bold py-4 px-12 rounded-full hover:bg-[var(--color-primary-hover)] transition-all shadow-lg tracking-widest text-sm">
                                    お問い合わせ
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
