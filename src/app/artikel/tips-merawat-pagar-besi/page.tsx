import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Tips Merawat Pagar Besi Agar Tidak Berkarat | MBUZENK ZETRO',
  description: 'Panduan lengkap cara merawat pagar besi agar awet dan tidak berkarat. Tips perawatan pagar BRC, pagar hollow, dan pagar minimalis dari bengkel las profesional Magetan. Konsultasi gratis!',
  keywords: [
    'cara merawat pagar besi',
    'pagar besi anti karat',
    'perawatan pagar minimalis',
    'tips pagar tidak berkarat',
    'pagar besi tahan lama',
    'bengkel las magetan',
    'pagar BRC magetan',
  ],
  openGraph: {
    title: 'Tips Merawat Pagar Besi Agar Tidak Berkarat',
    description: 'Panduan lengkap cara merawat pagar besi agar awet dan tidak berkarat.',
    images: ['/project-pagar.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/tips-merawat-pagar-besi',
  },
}

export default function Page() {
  return <ArticleContent />
}
