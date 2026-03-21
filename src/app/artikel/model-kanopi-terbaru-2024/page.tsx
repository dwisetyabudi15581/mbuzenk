import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Model Kanopi Terbaru 2024 untuk Rumah Modern | MBUZENK ZETRO',
  description: 'Koleksi model kanopi terbaru 2024 untuk carport dan teras rumah modern. Kanopi minimalis, kanopi alderon, kanopi polikarbonat dengan desain terkini. Konsultasi gratis!',
  keywords: [
    'model kanopi 2024',
    'kanopi terbaru',
    'desain kanopi modern',
    'kanopi minimalis terbaru',
    'model kanopi carport',
    'kanopi rumah modern',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Model Kanopi Terbaru 2024 untuk Rumah Modern',
    description: 'Koleksi model kanopi terbaru 2024 untuk carport dan teras rumah modern.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/model-kanopi-terbaru-2024',
  },
}

export default function Page() {
  return <ArticleContent />
}
