# MBUZENK ZETRO - Website Landing Page

Website landing page profesional untuk spesialis las dan renovasi.

## Fitur

- **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- **Multi Section** - Hero, Tentang Kami, Layanan, Portofolio, Testimoni, Kontak
- **WhatsApp Integration** - Semua tombol CTA terintegrasi dengan WhatsApp
- **Form Kontak** - Form kontak yang mengirim langsung ke WhatsApp
- **Testimoni Dinamis** - Sistem testimoni dengan localStorage

## Tech Stack

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI Components
- **Lucide Icons** - Icon Library

## Instalasi

1. Extract project ini
2. Install dependencies:
   ```bash
   npm install
   # atau
   bun install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   # atau
   bun run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000)

## Konfigurasi

Edit file `src/app/page.tsx` dan ubah konfigurasi di bagian `CONFIG`:

```typescript
const CONFIG = {
  // Data Bisnis
  businessName: 'MBUZENK ZETRO',
  tagline: 'Spesialis Las & Renovasi',
  
  // Kontak
  phone: '6285738602255',
  whatsapp: '6285738602255',
  email: 'info@mbuzenkzetro.com',
  address: 'CFR3+5JQ, Setro, Tebon, Kec. Bar.',
  city: 'Kabupaten Magetan, Jawa Timur 63395',
  
  // ... dan seterusnya
}
```

## Struktur Folder

```
mbuzenkzetro-website/
├── public/              # Gambar dan aset statis
│   ├── hero-image.png
│   ├── service-las.png
│   └── project-*.png    # Gambar portofolio
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout utama
│   │   ├── page.tsx     # Halaman utama
│   │   └── globals.css  # Style global
│   ├── components/
│   │   └── ui/          # Komponen UI
│   ├── hooks/           # Custom hooks
│   └── lib/             # Utility functions
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

## Build untuk Production

```bash
npm run build
# atau
bun run build
```

## Deploy

Website ini dapat di-deploy ke:
- Vercel (recommended)
- Netlify
- Hosting lain yang support Next.js

## License

Copyright © 2024 MBUZENK ZETRO. All rights reserved.
