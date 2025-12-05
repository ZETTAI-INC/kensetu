'use client';

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
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0 bg-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={heroImages[currentImageIndex]}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Diagonal White Overlay */}
            <div
                className="absolute inset-0 z-10 bg-white/90 md:bg-white/85 backdrop-blur-[2px] [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] md:[clip-path:polygon(0_0,55%_0,40%_100%,0%_100%)]"
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <p className="text-sm md:text-base font-bold tracking-widest text-gray-500 mb-4">
                            RICH&BUILD
                        </p>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight text-black leading-[1.1]">
                            <span className="block">日本の</span>
                            <span className="block">施工管理業界を</span>
                            <span className="block">新しく創る</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Bottom Right Vertical */}
            <div className="absolute bottom-12 right-8 z-20 hidden md:flex flex-col items-center gap-4">
                <span className="text-black/80 text-xs tracking-[0.3em] rotate-90 origin-center translate-y-4">SCROLL</span>
                <motion.div
                    className="w-px h-24 bg-black/30 mt-8"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>

            {/* Slide Indicators - Bottom Center? Or keep them? 
               The reference image doesn't clearly show them, but let's keep them unobtrusive.
               Maybe move to bottom center or left?
               Let's keep them bottom center for now, but style for light background if they fall there?
               Actually, with the diagonal split, bottom center might be on the image or the white part depending on width.
               Let's put them bottom center.
            */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-black w-6' : 'bg-black/30'
                            }`}
                        aria-label={`スライド ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
