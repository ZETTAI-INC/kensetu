'use client';

import Link from 'next/link';
import { ArrowUp, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#064E3B] py-16 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Left: Logo & Company Info */}
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-2xl tracking-widest flex flex-col leading-tight">
                            <span className="text-emerald-400 text-sm tracking-[0.2em]">RICH & BUILD</span>
                            <span className="text-white text-xl">リッチ＆ビルド</span>
                        </div>
                        <p className="text-emerald-200/70 text-sm leading-relaxed mt-4">
                            日本の施工管理業界を新しく創る
                        </p>
                        <div className="flex flex-col gap-2 mt-4 text-emerald-100/80 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-emerald-400" />
                                <a href="mailto:takeshi.arai625@gmail.com" className="hover:text-emerald-400 transition-colors">
                                    takeshi.arai625@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-emerald-400" />
                                <a href="tel:090-7797-6699" className="hover:text-emerald-400 transition-colors">
                                    090-7797-6699
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Center: Navigation */}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                        <Link href="/" className="hover:text-emerald-400 transition-colors text-sm">ホーム</Link>
                        <Link href="/contact" className="hover:text-emerald-400 transition-colors text-sm">お問い合わせ</Link>
                        <Link href="/company" className="hover:text-emerald-400 transition-colors text-sm">会社情報</Link>
                        <Link href="/recruit" className="hover:text-emerald-400 transition-colors text-sm">採用情報</Link>
                        <Link href="/service" className="hover:text-emerald-400 transition-colors text-sm">事業紹介</Link>
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors text-sm">プライバシーポリシー</Link>
                        <Link href="/client" className="hover:text-emerald-400 transition-colors text-sm">取引実績</Link>
                        <Link href="/news" className="hover:text-emerald-400 transition-colors text-sm">ニュース</Link>
                    </div>

                    {/* Right: Page Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex flex-col items-center justify-center w-20 h-20 rounded-full border border-emerald-500/50 hover:bg-emerald-500/20 transition-colors gap-2 self-start lg:self-center"
                    >
                        <ArrowUp className="w-5 h-5 text-emerald-400 stroke-[1.5]" />
                        <span className="text-[10px] tracking-widest text-emerald-400">TOP</span>
                    </button>
                </div>

                {/* Company Details */}
                <div className="mt-12 pt-8 border-t border-emerald-800/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-emerald-200/70">
                        <div>
                            <p className="text-emerald-400 font-bold mb-2">会社名</p>
                            <p>株式会社リッチ＆ビルド</p>
                        </div>
                        <div>
                            <p className="text-emerald-400 font-bold mb-2">代表者</p>
                            <p>荒井 武志</p>
                        </div>
                        <div>
                            <p className="text-emerald-400 font-bold mb-2">資本金</p>
                            <p>2,000万円</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-xs text-emerald-200/50 tracking-wider text-center">
                    &copy; {new Date().getFullYear()} Rich & Build Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
