/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tambahkan trailing slash untuk konsistensi URL
  trailingSlash: true,
  // Skip trailing slash redirect untuk API routes
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Redirect dari non-www ke www (jika deploy di Vercel, ini bisa dihandle di vercel.json)
  async redirects() {
    return [
      // Redirect halaman tanpa trailing slash ke dengan trailing slash
      // Ini sudah otomatis ditangani oleh trailingSlash: true
    ];
  },
  // Headers untuk SEO dan keamanan
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
