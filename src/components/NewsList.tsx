import Link from 'next/link';

interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
    image?: string;
}

const defaultNewsItems: NewsItem[] = [
    {
        id: '1',
        date: '2025.01.15',
        category: 'お知らせ',
        title: 'ホームページを公開しました',
        image: '/images/news-default.png',
    },
    {
        id: '2',
        date: '2025.01.10',
        category: '採用',
        title: '2025年度の採用を開始しました',
        image: '/images/news-default.png',
    },
];

interface NewsListProps {
    items?: NewsItem[];
}

export const NewsList = ({ items }: NewsListProps) => {
    const newsItems = items || defaultNewsItems;

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group block">
                    {item.image && (
                        <div className="aspect-video bg-emerald-50 mb-6 overflow-hidden relative rounded-xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    )}
                    {!item.image && (
                        <div className="aspect-video bg-emerald-50 mb-6 overflow-hidden relative rounded-xl flex items-center justify-center">
                            <span className="text-emerald-300 font-bold tracking-widest">NEWS</span>
                        </div>
                    )}
                    <div className="flex items-center gap-4 mb-3">
                        <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                            {item.category}
                        </span>
                    </div>
                    <p className="text-emerald-600/70 text-sm mb-2 font-medium">{item.date}</p>
                    <h3 className="text-lg font-bold leading-relaxed text-[#064E3B] group-hover:text-emerald-600 transition-colors">
                        {item.title}
                    </h3>
                </Link>
            ))}
        </div>
    );
};
