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
        <div className="divide-y divide-[var(--color-border)]">
            {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group block">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 py-5 md:py-6 hover:bg-[var(--color-secondary)] transition-colors px-4 -mx-4 rounded-lg">
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="text-[var(--color-text-muted)] font-medium text-xs tracking-wider">{item.date}</span>
                            <span className="px-2.5 py-0.5 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold tracking-wider rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                            {item.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};
