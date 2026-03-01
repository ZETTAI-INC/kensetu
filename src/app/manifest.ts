import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '株式会社リッチ＆ビルド - 総合人材コンサルティング',
    short_name: 'リチビル',
    description:
      '株式会社リッチ＆ビルド（リチビル）は、総合人材コンサルティングを通じて企業と人材の成長を支援します。',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#5CC0EE',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}
