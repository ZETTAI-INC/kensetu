import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'リチビル - 株式会社リッチ＆ビルド | 総合人材コンサルティング';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #EAF6FD 50%, #5CC0EE 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 8px 32px rgba(92, 192, 238, 0.2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0px',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '96px',
                fontWeight: 900,
                color: '#5CC0EE',
                letterSpacing: '-0.02em',
              }}
            >
              リチ
            </span>
            <span
              style={{
                fontSize: '96px',
                fontWeight: 900,
                color: '#1A202C',
                letterSpacing: '-0.02em',
              }}
            >
              ビル
            </span>
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#4A5568',
              letterSpacing: '0.15em',
              marginBottom: '24px',
            }}
          >
            株式会社リッチ＆ビルド
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: '#5CC0EE',
                borderRadius: '2px',
              }}
            />
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#5CC0EE',
                letterSpacing: '0.2em',
              }}
            >
              総合人材コンサルティング
            </span>
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: '#5CC0EE',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
