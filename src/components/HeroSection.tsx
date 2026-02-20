'use client';

import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section className="relative h-dvh w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/images/hero-main-new.jpg"
                        alt="建設現場で活躍するプロフェッショナル"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
                {/* Mobile: full coverage overlay / Desktop: gradient to right */}
                <div className="absolute inset-0 bg-[var(--color-dark)]/70 md:bg-transparent z-10" />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[var(--color-dark)]/85 via-[var(--color-dark)]/50 to-transparent z-10" />
            </div>

            <div className="absolute inset-0 z-20 flex items-end pb-24 md:items-center md:pb-0">
                <div className="w-full max-w-7xl mx-auto px-5 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-extrabold text-white tracking-wider leading-tight mb-6 md:mb-8">
                            <span className="block text-sm md:text-xl mb-3 md:mb-5 text-white/80 font-bold tracking-[0.2em] md:tracking-[0.25em]">
                                人と企業の成長を支援する
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-wide leading-[1.2] md:leading-[1.15]">
                                あなたの可能性を、<br />
                                最大化する。
                            </span>
                        </h1>
                        <p className="text-white/60 text-sm md:text-lg font-bold tracking-wider max-w-xl leading-relaxed border-l-2 border-[var(--color-primary)] pl-4 md:pl-5">
                            人材の総合コンサルタント。<br className="hidden md:block" />
                            キャリアと企業の未来を創ります。
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - hidden on mobile */}
            <div className="absolute bottom-10 right-8 md:right-16 z-20 hidden md:flex flex-col items-center gap-3">
                <span className="text-white/60 text-xs tracking-[0.3em] font-bold vertical-rl">SCROLL</span>
                <motion.div
                    className="w-px h-16 bg-white/30 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute top-0 w-full bg-white/70"
                        style={{ height: '50%' }}
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};
