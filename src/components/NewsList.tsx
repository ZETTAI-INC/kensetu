import Link from 'next/link';

interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
}

const defaultNewsItems: NewsItem[] = [
    {
        id: '1',
        date: '2025.01.15',
        category: 'お知らせ',
        title: 'ホームページを公開しました',
    },
    {
        id: '2',
        date: '2025.01.10',
        category: '採用',
        title: '2025年度の採用を開始しました',
    },
];

interface NewsListProps {
    items?: NewsItem[];
}

export const NewsList = ({ items }: NewsListProps) => {
    const newsItems = items || defaultNewsItems;

    return (
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group block">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 md:py-8 border-b border-[var(--color-border)] hover:bg-[var(--color-secondary)] transition-colors px-6 -mx-6 rounded-lg group-hover:pl-8">
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-[var(--color-text-secondary)] font-bold text-sm tracking-widest">{item.date}</span>
                            <span className="px-3 py-1 bg-white text-[var(--color-primary)] text-xs font-bold tracking-wider border border-[var(--color-border)]">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                            {item.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};
