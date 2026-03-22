import type { Metadata } from 'next'
import { TeralisContent } from '@/components/pages/TeralisPage'

export const metadata: Metadata = {
  title: 'Teralis Jendela Magetan | Keamanan & Artistik - MBUZENK ZETRO',
  description: 'Jasa pembuatan teralis jendela dan pintu di Magetan. Teralis minimalis, teralis artistik, teralis custom dengan harga terjangkau. Garansi 2 tahun. Gratis survei! Hubungi: 0857-3860-2255.',
  keywords: [
    'teralis jendela magetan',
    'teralis minimalis',
    'pembuatan teralis',
    'teralis pintu',
    'teralis artistik',
    'harga teralis jendela',
    'jasa teralis magetan',
    'teralis besi',
  ],
  openGraph: {
    title: 'Teralis Jendela Magetan | MBUZENK ZETRO',
    description: 'Jasa pembuatan teralis jendela dan pintu di Magetan. Desain minimalis dan artistik!',
    images: ['/project-teralis.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/teralis-jendela',
  },
}

export default function Page() {
  return <TeralisContent />
}
