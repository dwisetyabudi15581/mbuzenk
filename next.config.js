/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Tambahkan trailing slash untuk konsistensi URL
  trailingSlash: true,
  
  // Skip trailing slash redirect untuk API routes
  skipTrailingSlashRedirect: true,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Remote patterns untuk external images (jika diperlukan)
    remotePatterns: [],
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
          // Security headers
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
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache untuk images - long cache
      {
        source: '/:path(.*?)\\.(png|jpg|jpeg|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache untuk JS/CSS - long cache with immutable
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Power by header (security - hide framework info)
  poweredByHeader: false,
};

module.exports = nextConfig;
