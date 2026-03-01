import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_URL } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbList, generateContactPage } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: PAGE_METADATA.contact.keywords,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = generateBreadcrumbList([
    { name: 'ホーム', path: '/' },
    { name: 'お問い合わせ', path: '/contact' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={generateContactPage()} />
      {children}
    </>
  );
}
