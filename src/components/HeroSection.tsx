'use client';

import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section className="relative h-dvh w-full overflow-hidden">
            {/* Background Image - Static & Professional */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/images/hero-construction-manager.png"
                        alt="Construction Site Manager"
                        className="w-full h-full object-cover object-[center_20%]"
                    />
                </motion.div>
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
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
                            <span className="block text-2xl md:text-3xl mb-4 text-white/90 font-medium tracking-[0.2em] pl-1">
                                日本の建設業界を、
                            </span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-wider">
                                新しく創る。
                            </span>
                        </h1>
                        <p className="text-white/80 text-base md:text-xl font-medium tracking-widest max-w-xl leading-relaxed border-l-4 border-[var(--color-primary)] pl-6">
                            信頼と実績で築く、確かな未来。<br className="hidden md:block" />
                            私たちは施工管理のプロフェッショナル集団です。
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
