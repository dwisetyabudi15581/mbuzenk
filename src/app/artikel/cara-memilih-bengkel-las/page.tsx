import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Memilih Bengkel Las yang Tepat dan Terpercaya | MBUZENK ZETRO',
  description: 'Tips lengkap memilih bengkel las profesional dan terpercaya. Cek portofolio, garansi, dan testimoni pelanggan. Bengkel las magetan dengan pengalaman 18+ tahun.',
  keywords: [
    'cara memilih bengkel las',
    'bengkel las terpercaya',
    'bengkel las magetan',
    'tips pilih bengkel las',
    'bengkel las profesional',
    'jasa las magetan',
    'bengkel welding magetan',
  ],
  openGraph: {
    title: 'Cara Memilih Bengkel Las yang Tepat dan Terpercaya',
    description: 'Tips lengkap memilih bengkel las profesional dan terpercaya.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/cara-memilih-bengkel-las/',
  },
}

export default function Page() {
  return <ArticleContent />
}
