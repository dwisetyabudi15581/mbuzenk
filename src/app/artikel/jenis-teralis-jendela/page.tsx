import type { Metadata } from 'next'
import TeralisArticle from './TeralisArticle'

export const metadata: Metadata = {
  title: 'Jenis-jenis Teralis Jendela yang Populer di Indonesia | MBUZENK ZETRO',
  description: 'Panduan lengkap jenis teralis jendela: minimalis, klasik, artistik, dan security. Tips memilih teralis yang aman dan cantik untuk rumah Anda. Konsultasi gratis 0857-3860-2255.',
  keywords: [
    'jenis teralis jendela',
    'teralis minimalis',
    'teralis artistik',
    'teralis security',
    'harga teralis jendela',
    'pembuatan teralis magetan',
  ],
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/jenis-teralis-jendela',
  },
}

export default function Page() {
  return <TeralisArticle />
}
