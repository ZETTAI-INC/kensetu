'use client';

import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section className="relative h-dvh w-full overflow-hidden">
            {/* Background Image - Modern & Inclusive */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/images/hero-creative.png"
                        alt="建設現場で活躍するプロフェッショナル"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
                {/* Neutral Dark Overlay - More natural */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/60 to-transparent z-10" />
            </div>

            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-bold text-white tracking-widest leading-tight drop-shadow-xl mb-8">
                            <span className="block text-xl md:text-2xl mb-4 text-white/90 font-medium tracking-[0.2em] pl-1">
                                人と企業の成長を支援する
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-wider">
                                あなたの可能性を、<br />
                                最大化する。
                            </span>
                        </h1>
                        <p className="text-white/80 text-base md:text-lg font-medium tracking-widest max-w-xl leading-relaxed border-l-4 border-white/50 pl-6">
                            人材の総合コンサルタント。<br className="hidden md:block" />
                            キャリアと企業の未来を創ります。
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-12 md:right-20 z-20 flex flex-col items-center gap-4">
                <span className="text-white text-xs tracking-[0.3em] font-medium vertical-rl">SCROLL</span>
                <motion.div
                    className="w-px h-24 bg-white/50 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute top-0 w-full bg-white"
                        style={{ height: '50%' }}
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};
