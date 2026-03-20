# MBUZENK ZETRO Website

Website landing page untuk MBUZENK ZETRO - Spesialis Las & Renovasi.

## Cara Deploy ke Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub (Recommended)
1. Push ke GitHub repository
2. Connect ke Vercel
3. Auto deploy

### Option 3: Upload Manual
1. Buka https://vercel.com
2. Drag & drop folder ini

## Setup Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## Environment Variables (Opsional)

Untuk testimoni permanent, tambahkan di Vercel:
```
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

Daftar gratis di: https://upstash.com

## Struktur Project

```
├── public/          # Gambar dan assets
├── src/
│   ├── app/         # Halaman utama
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── api/testimonials/
│   ├── components/  # UI Components
│   ├── hooks/       # Custom hooks
│   └── lib/         # Utilities
├── package.json
└── next.config.ts
```

## Kontak

- **WhatsApp:** +62 857-3860-2255
- **Email:** info@mbuzenkzetro.com
- **Alamat:** Magetan, Jawa Timur
