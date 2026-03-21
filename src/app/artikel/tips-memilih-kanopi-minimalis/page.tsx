import type { Metadata } from 'next'
import ArticleKanopi from './ArticleKanopi'

export const metadata: Metadata = {
  title: 'Tips Memilih Kanopi Minimalis yang Tepat untuk Rumah | MBUZENK ZETRO',
  description: 'Panduan lengkap memilih kanopi minimalis untuk carport dan teras. Tips memilih material, ukuran, dan desain kanopi yang cocok untuk rumah Anda. Konsultasi gratis! Hubungi 0857-3860-2255.',
  keywords: [
    'tips memilih kanopi',
    'kanopi minimalis magetan',
    'jenis kanopi',
    'material kanopi',
    'harga kanopi minimalis',
    'kanopi carport',
    'kanopi teras',
    'kanopi baja ringan',
  ],
  openGraph: {
    title: 'Tips Memilih Kanopi Minimalis yang Tepat',
    description: 'Panduan lengkap memilih kanopi minimalis untuk rumah Anda.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/tips-memilih-kanopi-minimalis',
  },
}

export default function Page() {
  return <ArticleKanopi />
}
