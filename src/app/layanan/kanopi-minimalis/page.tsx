import type { Metadata } from 'next'
import { KanopiPage } from '@/components/pages/KanopiPage'

export const metadata: Metadata = {
  title: 'Kanopi Minimalis Magetan - Jasa Pembuatan Kanopi Carport & Teras | MBUZENK ZETRO',
  description: 'Jasa pembuatan kanopi minimalis di Magetan. Spesialis kanopi carport, kanopi teras, kanopi pagar dengan bahan spandek, polikarbonat, dan alderon. Harga terjangkau, garansi kerja. Hubungi: 0857-3860-2255',
  keywords: [
    'kanopi minimalis magetan',
    'kanopi carport magetan',
    'jasa kanopi magetan',
    'kanopi teras minimalis',
    'harga kanopi magetan',
    'kanopi spandek magetan',
    'kanopi polikarbonat magetan',
    'pembuatan kanopi magetan',
    'tukang kanopi magetan',
    'bengkel las kanopi magetan',
  ],
  openGraph: {
    title: 'Kanopi Minimalis Magetan - Jasa Pembuatan Kanopi | MBUZENK ZETRO',
    description: 'Jasa pembuatan kanopi minimalis di Magetan. Spesialis kanopi carport, teras, pagar. Harga terjangkau, garansi kerja.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/kanopi-minimalis',
  },
}

export default function Page() {
  return <KanopiPage />
}
