import type { Metadata } from 'next'
import { TanggaBesiContent } from '@/components/pages/TanggaBesiPage'

export const metadata: Metadata = {
  title: 'Tangga Besi & Tangga Spiral Magetan | Custom Design - MBUZENK ZETRO',
  description: 'Jasa pembuatan tangga besi dan tangga spiral di Magetan. Tangga minimalis, tangga putar, tangga industrial dengan desain custom. Garansi 2 tahun. Gratis survei! Hubungi: 0857-3860-2255.',
  keywords: [
    'tangga besi magetan',
    'tangga spiral magetan',
    'tangga minimalis',
    'pembuatan tangga besi',
    'tangga putar',
    'tangga industrial',
    'jasa tangga besi',
    'harga tangga besi',
  ],
  openGraph: {
    title: 'Tangga Besi & Tangga Spiral Magetan | MBUZENK ZETRO',
    description: 'Jasa pembuatan tangga besi dan tangga spiral di Magetan. Custom design, garansi 2 tahun!',
    images: ['/project-tangga.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/tangga-besi/',
  },
}

export default function Page() {
  return <TanggaBesiContent />
}
