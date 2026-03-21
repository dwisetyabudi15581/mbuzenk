import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Manfaat Renovasi Rumah untuk Kualitas Hidup Lebih Baik | MBUZENK ZETRO',
  description: 'Kenali manfaat renovasi rumah untuk kualitas hidup lebih baik. Dari kenyamanan hingga nilai jual properti. Tips renovasi dari kontraktor profesional Magetan.',
  keywords: [
    'manfaat renovasi rumah',
    'keuntungan renovasi',
    'renovasi rumah berkualitas',
    'renovasi rumah magetan',
    'jasa renovasi profesional',
    'tips renovasi',
    'kontraktor magetan',
  ],
  openGraph: {
    title: 'Manfaat Renovasi Rumah untuk Kualitas Hidup Lebih Baik',
    description: 'Kenali manfaat renovasi rumah untuk kualitas hidup lebih baik.',
    images: ['/project-renovasi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/manfaat-renovasi-rumah',
  },
}

export default function Page() {
  return <ArticleContent />
}
