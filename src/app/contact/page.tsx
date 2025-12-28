'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="CONTACT"
                titleJa="お問い合わせ"
                backgroundImage="/images/contact-bg.png"
            />

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
                        <p className="text-sm md:text-base text-[#064E3B] leading-relaxed font-bold">
                            人材に関するご相談、お見積もり、採用に関するお問い合わせは<br className="hidden md:block" />
                            以下のフォームよりお気軽にご連絡ください。<br />
                            担当者より3営業日以内にご連絡させていただきます。
                        </p>
                    </motion.div>

                    <motion.form variants={itemVariants} className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-emerald-100">
                        <div className="space-y-6 md:space-y-8">
                            {/* Row 1: Name & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-[#064E3B] block">
                                        お名前 <span className="text-[#10B981] ml-1">*</span>
                                    </label>
                                    <input type="text" id="name" className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="山田 太郎" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-bold text-[#064E3B] block">
                                        貴社名
                                    </label>
                                    <input type="text" id="company" className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="株式会社サンプル" />
                                </div>
                            </div>

                            {/* Row 2: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-[#064E3B] block">
                                        メールアドレス <span className="text-[#10B981] ml-1">*</span>
                                    </label>
                                    <input type="email" id="email" className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="example@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-[#064E3B] block">
                                        電話番号 <span className="text-[#10B981] ml-1">*</span>
                                    </label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="090-1234-5678" />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <label htmlFor="category" className="text-sm font-bold text-[#064E3B] block">
                                    お問い合わせ種別 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <select id="category" className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all appearance-none text-[#064E3B]">
                                        <option>人材派遣のご相談</option>
                                        <option>採用について</option>
                                        <option>お見積もり依頼</option>
                                        <option>その他</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#10B981] text-xs">
                                        ▼
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-[#064E3B] block">
                                    お問い合わせ内容 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <textarea id="message" rows={6} className="w-full px-4 py-3 md:py-4 text-base rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all resize-none placeholder:text-[#064E3B]/30" placeholder="お問い合わせ内容をご記入ください"></textarea>
                            </div>

                            {/* Privacy */}
                            <div className="pt-2 text-center">
                                <label className="flex items-center justify-center gap-3 cursor-pointer group select-none">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                        <div className="w-6 h-6 border-2 border-emerald-300 rounded bg-white peer-checked:bg-[#10B981] peer-checked:border-[#064E3B] transition-all"></div>
                                        <svg className="absolute w-4 h-4 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm md:text-base text-[#064E3B]/70 group-hover:text-[#064E3B] transition-colors">
                                        <a href="/privacy" className="text-[#059669] font-bold hover:underline underline-offset-4" target="_blank">個人情報保護方針</a>に同意する
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className={cn(
                                            "bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-emerald-600 hover:to-teal-700 text-white px-12 py-4 rounded-full text-lg font-bold tracking-widest min-w-full md:min-w-[300px] shadow-lg hover:shadow-xl transition-all h-auto",
                                            !agreed && "opacity-50 cursor-not-allowed hover:shadow-none grayscale"
                                        )}
                                        disabled={!agreed}
                                    >
                                        送信する
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </main>
    );
}
