import type { Metadata } from 'next'
import { AreaLayananContent } from '@/components/pages/AreaLayananPage'

export const metadata: Metadata = {
  title: 'Bengkel Las Magetan | Renovasi Rumah & Konstruksi - MBUZENK ZETRO',
  description: 'Bengkel las di Magetan. Jasa pembuatan kanopi, pagar besi, tangga, teralis, konstruksi baja, dan renovasi rumah. Pengalaman 19+ tahun, 1000+ proyek. Gratis survei! Hubungi: 0857-3860-2255.',
  keywords: [
    'bengkel las magetan',
    'las magetan',
    'renovasi rumah magetan',
    'kanopi magetan',
    'pagar besi magetan',
    'tukang las magetan',
    'konstruksi baja magetan',
    'bengkel las kabupaten magetan',
  ],
  openGraph: {
    title: 'Bengkel Las Magetan | MBUZENK ZETRO',
    description: 'Bengkel las terpercaya di Magetan. Kanopi, pagar, tangga, renovasi. 19+ tahun pengalaman!',
    images: ['/hero-image.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/area-layanan/magetan',
  },
}

export default function Page() {
  return <AreaLayananContent area="Magetan" />
}
