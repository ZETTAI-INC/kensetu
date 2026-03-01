import { SITE_URL, SITE_NAME, COMPANY_INFO } from './metadata';

// --- Schema generators ---

export function generateOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    alternateName: [COMPANY_INFO.shortName, COMPANY_INFO.nameEn],
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
    founder: {
      '@type': 'Person',
      name: COMPANY_INFO.ceo,
      jobTitle: '代表取締役',
    },
    address: {
      '@type': 'PostalAddress',
      postalCode: COMPANY_INFO.postalCode,
      addressRegion: COMPANY_INFO.addressPrefecture,
      addressLocality: COMPANY_INFO.addressCity,
      streetAddress: COMPANY_INFO.addressStreet,
      addressCountry: 'JP',
    },
  };
}

export function generateLocalBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      postalCode: COMPANY_INFO.postalCode,
      addressRegion: COMPANY_INFO.addressPrefecture,
      addressLocality: COMPANY_INFO.addressCity,
      streetAddress: COMPANY_INFO.addressStreet,
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.latitude,
      longitude: COMPANY_INFO.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
  };
}

export function generateWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'ja',
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
  };
}

export function generateBreadcrumbList(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function generateServiceWithOfferCatalog() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: '総合人材コンサルティング',
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '人材コンサルティングサービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '総合人材コンサルティング',
            description:
              '採用戦略の立案から人材育成、評価制度設計、組織開発まで。「人」に関わるあらゆる課題に対し、多角的な視点で解決を支援します。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '人材育成',
            description:
              '独自の教育プログラムで即戦力を育成。ビジネスマナーから専門スキルまで、段階的な研修体制で人材の成長を支援します。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'キャリアサポート',
            description:
              '一人ひとりの「やりたいこと」と企業の「求める人材像」を高い精度で結びつけ、双方にとって最適なキャリアを実現します。',
          },
        },
      ],
    },
  };
}

export function generateFAQPage() {
  const faqs = [
    {
      question: 'リチビル（リッチ＆ビルド）はどのようなサービスを提供していますか？',
      answer:
        '総合人材コンサルティング、人材育成、キャリアサポートの3つのサービスを提供しています。採用戦略の立案から人材育成、評価制度設計、組織開発まで、「人」に関わるあらゆる課題をトータルに支援します。',
    },
    {
      question: '未経験でも応募できますか？',
      answer:
        'はい、未経験の方も歓迎しています。独自の研修プログラムにより、ビジネスマナーから専門スキルまで段階的に学べる環境を整えています。資格取得支援制度もあり、未経験からプロフェッショナルへの成長をサポートします。',
    },
    {
      question: 'どのような業界に人材を派遣していますか？',
      answer:
        '主に建設業界を中心に、大手ゼネコン（大成建設、鹿島建設、清水建設、大林組、竹中工務店など）をはじめとする企業に人材を提供しています。',
    },
    {
      question: '人材の定着率はどのくらいですか？',
      answer:
        '独自の教育システムとフォローアップ体制により、高い定着率を実現しています。配属後も専任担当者が定期的に現場を訪問し、スタッフのメンタルケアや労務管理を徹底しています。',
    },
    {
      question: '人材の紹介までどのくらいの期間がかかりますか？',
      answer:
        '独自のデータベースとマッチングシステムにより、最短3日でのご提案が可能です。急な欠員や増員にも迅速に対応いたします。',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateAboutPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '会社情報 - ' + COMPANY_INFO.name,
    url: `${SITE_URL}/company`,
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
  };
}

export function generateContactPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'お問い合わせ - ' + COMPANY_INFO.name,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        contactType: 'customer service',
        availableLanguage: 'Japanese',
      },
    },
  };
}

// --- Component ---

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
