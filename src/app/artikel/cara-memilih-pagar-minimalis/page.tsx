import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Memilih Pagar Minimalis yang Tepat untuk Rumah | MBUZENK ZETRO',
  description: 'Panduan lengkap cara memilih pagar minimalis untuk rumah. Tips memilih material, desain, tinggi pagar, dan model yang sesuai dengan rumah Anda. Konsultasi gratis!',
  keywords: [
    'cara memilih pagar minimalis',
    'pagar minimalis untuk rumah',
    'tips memilih pagar',
    'model pagar minimalis 2024',
    'pagar besi minimalis magetan',
    'desain pagar modern',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Cara Memilih Pagar Minimalis yang Tepat untuk Rumah',
    description: 'Panduan lengkap cara memilih pagar minimalis untuk rumah.',
    images: ['/project-pagar.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/cara-memilih-pagar-minimalis/',
  },
}

export default function Page() {
  return <ArticleContent />
}
