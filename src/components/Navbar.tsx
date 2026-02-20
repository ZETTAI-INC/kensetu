'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                    isScrolled || isMobileMenuOpen
                        ? 'bg-white/98 backdrop-blur-md shadow-sm py-1 md:py-1.5 border-b border-border'
                        : 'bg-transparent py-1.5 md:py-2'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo - リチビル */}
                    <Link
                        href="/"
                        className="z-50 relative group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Image
                            src="/images/logo-richibiru.png"
                            alt="リチビル"
                            width={480}
                            height={428}
                            className={cn(
                                "h-[120px] md:h-[160px] w-auto transition-all duration-300 -my-8 md:-my-12",
                                isScrolled || isMobileMenuOpen ? "" : "brightness-0 invert drop-shadow-lg"
                            )}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-base font-extrabold tracking-wider transition-all duration-300 relative group/nav",
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
                        className="md:hidden z-50 relative w-12 h-12 flex flex-col justify-center items-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="メニュー"
                    >
                        <span className={cn(
                            "w-5 h-[2px] transition-all duration-300 absolute",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                        )} />
                        <span className={cn(
                            "w-5 h-[2px] transition-all duration-300",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "opacity-0" : "opacity-100"
                        )} />
                        <span className={cn(
                            "w-5 h-[2px] transition-all duration-300 absolute",
                            isMobileMenuOpen || isScrolled ? "bg-[var(--color-primary)]" : "bg-white",
                            isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                        )} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-20 px-5 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col w-full">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.04 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-lg font-extrabold text-[var(--color-text-primary)] py-4 block hover:text-[var(--color-primary)] transition-colors border-b border-[var(--color-border)]"
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
                            transition={{ delay: 0.35 }}
                            className="mt-6 pb-8"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="inline-block w-full text-center bg-[var(--color-primary)] text-white font-extrabold py-3.5 rounded-full hover:bg-[var(--color-primary-hover)] transition-all shadow-md text-base">
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
