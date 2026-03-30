import type { Metadata } from 'next'
import { PagarBesiContent } from '@/components/pages/PagarBesiPage'

export const metadata: Metadata = {
  title: 'Pagar Besi Minimalis Magetan | Harga Terjangkau - MBUZENK ZETRO',
  description: 'Jasa pembuatan pagar besi minimalis di Magetan. Pagar BRC, pagar custom, pagar besi hollow dengan harga terjangkau. Garansi 2 tahun. Gratis survei! Hubungi: 0857-3860-2255. Melayani Madiun, Ngawi, Ponorogo.',
  keywords: [
    'pagar besi magetan',
    'pagar minimalis magetan',
    'harga pagar besi',
    'pembuatan pagar besi',
    'pagar BRC magetan',
    'pagar hollow minimalis',
    'jasa pagar besi',
    'tukang pagar magetan',
  ],
  openGraph: {
    title: 'Pagar Besi Minimalis Magetan | MBUZENK ZETRO',
    description: 'Jasa pembuatan pagar besi minimalis di Magetan. Pagar BRC, pagar custom dengan harga terjangkau. Garansi 2 tahun!',
    images: ['/project-pagar.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/pagar-besi/',
  },
}

export default function Page() {
  return <PagarBesiContent />
}
