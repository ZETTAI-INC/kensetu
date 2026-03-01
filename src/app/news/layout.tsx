import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_URL } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbList } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: PAGE_METADATA.news.title,
  description: PAGE_METADATA.news.description,
  keywords: PAGE_METADATA.news.keywords,
  alternates: { canonical: `${SITE_URL}/news` },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = generateBreadcrumbList([
    { name: 'ホーム', path: '/' },
    { name: 'お知らせ', path: '/news' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
