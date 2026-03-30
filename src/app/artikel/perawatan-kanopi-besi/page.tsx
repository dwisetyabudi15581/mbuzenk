import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Merawat Kanopi Besi Agar Awet dan Tahan Lama | MBUZENK ZETRO',
  description: 'Panduan lengkap perawatan kanopi besi untuk hasil maksimal. Tips membersihkan, mencegah karat, dan merawat kanopi baja ringan. Konsultasi gratis!',
  keywords: [
    'cara merawat kanopi',
    'perawatan kanopi besi',
    'kanopi anti karat',
    'tips merawat kanopi baja ringan',
    'kanopi tahan lama',
    'perawatan kanopi magetan',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Cara Merawat Kanopi Besi Agar Awet dan Tahan Lama',
    description: 'Panduan lengkap perawatan kanopi besi untuk hasil maksimal.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/perawatan-kanopi-besi/',
  },
}

export default function Page() {
  return <ArticleContent />
}
