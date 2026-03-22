import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Keuntungan Menggunakan Kanopi Baja Ringan | MBUZENK ZETRO',
  description: 'Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda. Ringan, anti karat, dan hemat biaya. Konsultasi gratis dengan bengkel las profesional Magetan.',
  keywords: [
    'kanopi baja ringan',
    'keuntungan kanopi baja ringan',
    'kanopi anti karat',
    'kanopi carport magetan',
    'baja ringan vs besi',
    'kanopi minimalis modern',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Keuntungan Menggunakan Kanopi Baja Ringan',
    description: 'Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/keuntungan-kanopi-baja-ringan',
  },
}

export default function Page() {
  return <ArticleContent />
}
