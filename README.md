# MBUZENK ZETRO - Website Bengkel Las & Renovasi

Website profesional untuk **MBUZENK ZETRO**, bengkel las dan jasa renovasi rumah terpercaya di Magetan, Jawa Timur.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: Upstash Redis (untuk testimoni)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/               # API routes
│   │   └── testimonials/  # Testimonials CRUD API
│   ├── artikel/           # Article pages (12+ articles)
│   ├── area-layanan/      # Service area pages (Magetan, Madiun, Ngawi, Ponorogo)
│   ├── faq-harga/         # FAQ & Pricing page
│   ├── galeri/            # Gallery page
│   ├── layanan/           # Service pages (6 services)
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── pages/             # Page-specific components
│   ├── sections/          # Homepage sections
│   ├── seo/               # SEO components
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities & configurations
    ├── config.ts          # Business configuration
    ├── data.ts            # Static data
    ├── schema.ts          # Schema definitions
    └── testimonials-db.ts # Redis database functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone repository
```bash
git clone https://github.com/dwisetyabudi15581/mbuzenk.git
cd mbuzenk
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Configure environment variables (optional)
```env
# Upstash Redis (untuk penyimpanan testimoni permanen)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

5. Run development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Features

### SEO Optimized
- ✅ Comprehensive metadata untuk setiap halaman
- ✅ JSON-LD structured data (LocalBusiness, FAQ, Organization, WebSite)
- ✅ Dynamic sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph & Twitter Cards

### Halaman Utama
- **Homepage** - Landing page dengan semua sections
- **Layanan** - 6 halaman layanan:
  - Bengkel Las
  - Kanopi Minimalis
  - Pagar Besi
  - Teralis Jendela
  - Tangga Besi
  - Renovasi Rumah
- **Area Layanan** - 4 halaman:
  - Magetan
  - Madiun
  - Ngawi
  - Ponorogo
- **Artikel** - 12+ artikel SEO-friendly
- **Galeri** - Dokumentasi proyek
- **FAQ & Harga** - Pertanyaan umum

### UI/UX
- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Smooth animations
- ✅ Floating WhatsApp button
- ✅ Back to top button
- ✅ Image lightbox
- ✅ Loading states
- ✅ Error boundaries

## 🔧 Configuration

Edit `src/lib/config.ts` untuk mengubah informasi bisnis:

```typescript
export const CONFIG = {
  businessName: 'MBUZENK ZETRO',
  tagline: 'Spesialis Las & Renovasi',
  phone: '6285738602255',
  whatsapp: '6285738602255',
  email: 'mbuzenkzetro@gmail.com',
  address: 'CFR3+5JQ, Setro, Tebon, Kec. Bar.',
  city: 'Kabupaten Magetan, Jawa Timur 63395',
  // ... dll
}
```

## 📱 Contact Integration

- WhatsApp floating button dengan tooltip
- Click-to-call functionality
- WhatsApp deep links untuk setiap layanan

## 🚀 Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Import project di Vercel
3. Configure environment variables
4. Deploy

### Manual Build

```bash
npm run build
npm run start
```

## 📄 License

This project is proprietary software for MBUZENK ZETRO.

---

**Developed for MBUZENK ZETRO - Bengkel Las & Renovasi Magetan**

📞 +62 857-3860-2255 | 📧 mbuzenkzetro@gmail.com
