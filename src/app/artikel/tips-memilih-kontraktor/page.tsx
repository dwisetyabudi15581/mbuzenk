import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Tips Memilih Kontraktor Renovasi yang Terpercaya | MBUZENK ZETRO',
  description: 'Panduan lengkap memilih kontraktor renovasi yang terpercaya dan profesional. Cek lisensi, portofolio, testimoni, dan garansi. Tips dari kontraktor berpengalaman Magetan.',
  keywords: [
    'cara memilih kontraktor',
    'kontraktor renovasi terpercaya',
    'tips memilih kontraktor',
    'kontraktor magetan',
    'jasa renovasi profesional',
    'kontraktor berpengalaman',
    'renovasi rumah magetan',
  ],
  openGraph: {
    title: 'Tips Memilih Kontraktor Renovasi yang Terpercaya',
    description: 'Panduan lengkap memilih kontraktor renovasi yang terpercaya dan profesional.',
    images: ['/project-renovasi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/tips-memilih-kontraktor',
  },
}

export default function Page() {
  return <ArticleContent />
}
