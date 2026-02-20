'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { NewsList } from '@/components/NewsList';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { HorizontalScroll } from '@/components/ui/HorizontalScroll';

// Mock Data
const ALL_NEWS = [
    { id: '1', date: '2025.01.15', category: 'お知らせ', title: 'ホームページを公開しました' },
    { id: '2', date: '2025.01.10', category: '採用', title: '2025年度の採用を開始しました' },
    { id: '3', date: '2025.01.05', category: 'お知らせ', title: '新年のご挨拶' },
];

const CATEGORIES = ['ALL', 'お知らせ', '採用', 'プレスリリース', 'メディア掲載', 'IR情報'];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const filteredNews = activeCategory === 'ALL'
        ? ALL_NEWS
        : ALL_NEWS.filter(item => item.category === activeCategory);

    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="NEWS"
                titleJa="お知らせ"
                backgroundImage="/images/contact-bg.png"
            />

            <div className="container mx-auto px-5 md:px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Category Filter */}
                    <div className="mb-10 md:mb-16">
                        <HorizontalScroll className="md:flex md:flex-wrap md:justify-center md:gap-3 md:overflow-visible pb-4 md:pb-0">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-5 py-2.5 rounded-full text-base font-extrabold tracking-wider transition-all duration-300 border whitespace-nowrap snap-start",
                                        activeCategory === cat
                                            ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                                            : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </HorizontalScroll>
                    </div>

                    {/* News List */}
                    <div className="min-h-[400px]">
                        {filteredNews.length > 0 ? (
                            <NewsList items={filteredNews} />
                        ) : (
                            <div className="text-center py-16 text-[var(--color-text-muted)]">
                                該当するニュースがありません
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {filteredNews.length > 0 && (
                        <div className="mt-16 flex justify-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white text-base font-extrabold">1</button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
