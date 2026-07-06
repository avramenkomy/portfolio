import { ImageResponse } from 'next/og';

import site from '@/data/site';

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#09090b',
          color: '#fafafa',
          padding: '80px',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#3b82f6',
            fontWeight: 700,
          }}
        >
          Frontend Developer
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontWeight: 82,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              margin: 0,
              maxWidth: 900,
            }}
          >
            {site.name}
          </h1>

          <p
            style={{
              fontSize: 34,
              lineHeight: 1.4,
              color: '#a1a1aa',
              maxWidth: 900,
              marginTop: 28,
            }}
          >
            JavaScript • React • Next.js
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#a1a1aa',
          }}
        >
          {site.url}
        </div>
      </div>
    ),
    {
      ...site,
    }
  )
}