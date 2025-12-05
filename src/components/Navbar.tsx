'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'COMPANY', href: '/company' },
        { name: 'SERVICE', href: '/service' },
        { name: 'CLIENT', href: '/client' },
        { name: 'NEWS', href: '/news' },
        { name: 'CONTACT', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine header style state
    const isDarkText = isScrolled || isMobileMenuOpen;
    const headerBg = isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent';

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-500',
                    isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className={cn(
                            "text-2xl font-bold tracking-tighter transition-colors z-50 relative font-sans flex items-center gap-2",
                            (isScrolled || isMobileMenuOpen) ? "text-[#064E3B]" : "text-[#064E3B]"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="leading-none">
                            <span className="block text-xs tracking-[0.2em] text-emerald-500">RICH & BUILD</span>
                            <span className="block text-lg">リッチ＆ビルド</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold tracking-widest hover:text-emerald-500 transition-colors relative group",
                                    (isScrolled) ? "text-[#064E3B]" : "text-[#064E3B]"
                                )}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link href="/recruit">
                            <Button
                                variant="outline"
                                className={cn(
                                    "rounded-full px-8 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors",
                                    (isScrolled) ? "border-emerald-500 text-emerald-600" : "border-emerald-500 text-emerald-600"
                                )}
                            >
                                RECRUIT
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className={cn("w-6 h-0.5 block transition-colors", isMobileMenuOpen ? "bg-[#064E3B]" : "bg-[#064E3B]")}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={cn("w-6 h-0.5 block transition-colors", isMobileMenuOpen ? "bg-[#064E3B]" : "bg-[#064E3B]")}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className={cn("w-6 h-0.5 block transition-colors", isMobileMenuOpen ? "bg-[#064E3B]" : "bg-[#064E3B]")}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-bold text-[#064E3B] tracking-widest"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/recruit" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="outline" className="w-full rounded-full border-emerald-500 text-emerald-600 text-lg py-6 mt-4">
                                    RECRUIT
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
