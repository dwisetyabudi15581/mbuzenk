import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Tips Renovasi Rumah Hemat Biaya tapi Berkualitas | MBUZENK ZETRO',
  description: 'Panduan renovasi rumah hemat biaya tanpa mengorbankan kualitas. Tips perencanaan, pemilihan material, dan jasa renovasi terpercaya di Magetan. Konsultasi gratis!',
  keywords: [
    'tips renovasi rumah hemat',
    'renovasi rumah murah',
    'cara renovasi rumah biaya rendah',
    'renovasi rumah magetan',
    'jasa renovasi terpercaya',
    'tips hemat renovasi',
    'renovasi rumah berkualitas',
  ],
  openGraph: {
    title: 'Tips Renovasi Rumah Hemat Biaya tapi Berkualitas',
    description: 'Panduan renovasi rumah hemat biaya tanpa mengorbankan kualitas.',
    images: ['/project-renovasi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/tips-renovasi-rumah-hemat',
  },
}

export default function Page() {
  return <ArticleContent />
}
