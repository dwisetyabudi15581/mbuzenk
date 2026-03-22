import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Jenis-Jenis Tangga Besi untuk Rumah Minimalis | MBUZENK ZETRO',
  description: 'Panduan lengkap jenis tangga besi untuk rumah minimalis. Tangga spiral, tangga lurus, tangga L, dan tangga U. Konsultasi gratis dengan bengkel las profesional Magetan.',
  keywords: [
    'jenis tangga besi',
    'tangga besi minimalis',
    'tangga spiral magetan',
    'tangga besi untuk rumah minimalis',
    'model tangga modern',
    'tangga besi custom',
    'bengkel las tangga magetan',
  ],
  openGraph: {
    title: 'Jenis-Jenis Tangga Besi untuk Rumah Minimalis',
    description: 'Panduan lengkap jenis tangga besi untuk rumah minimalis.',
    images: ['/project-tangga.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/jenis-tangga-besi-minimalis',
  },
}

export default function Page() {
  return <ArticleContent />
}
