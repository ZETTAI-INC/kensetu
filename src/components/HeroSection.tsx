'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    '/images/hero-slide-1.png',
    '/images/hero-slide-2.png',
    '/images/hero-slide-3.png',
];

export const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#F0FDF4] flex items-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0FDF4] via-[#F0FDF4]/90 to-transparent z-[1]" />

            {/* Right Side: Image with Diagonal Cut */}
            <div
                className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0"
                style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
            >
                <div className="relative w-full h-full bg-emerald-100">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            alt="施工管理の現場"
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-emerald-900/20" />
                </div>
            </div>

            {/* Left Side: Text Content */}
            <div className="container relative z-10 px-6 h-full flex flex-col justify-center">
                <div className="max-w-2xl pt-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-600 font-bold tracking-widest mb-6 text-sm"
                    >
                        RICH & BUILD
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-[#064E3B]"
                    >
                        日本の<br />
                        施工管理業界を<br />
                        <span className="text-emerald-500">新しく創る</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-xl text-emerald-800/80 mb-12 leading-relaxed"
                    >
                        施工管理×人材×若手の力で、<br className="md:hidden" />
                        建設業界の未来を切り拓く。
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/recruit">
                            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-full text-base font-bold tracking-wider">
                                採用情報を見る
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-base font-bold tracking-wider">
                                お問い合わせ
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4 z-20">
                <span className="text-emerald-700 font-bold tracking-widest text-sm" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
                <div className="w-px h-16 bg-emerald-500"></div>
            </div>
        </section>
    );
};
