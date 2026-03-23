import type { Metadata } from 'next'
import { BengkelLasPage } from '@/components/pages/BengkelLasPage'

export const metadata: Metadata = {
  title: 'Bengkel Las Magetan - Spesialis Las Besi & Konstruksi Baja | MBUZENK ZETRO',
  description: 'Bengkel las terpercaya di Magetan. Spesialis las besi, konstruksi baja, pagar besi, tangga besi, teralis, dan konstruksi ringan. Pengalaman 19+ tahun. Hubungi: 0857-3860-2255',
  keywords: [
    'bengkel las magetan',
    'las besi magetan',
    'tukang las magetan',
    'las pagar magetan',
    'las tangga magetan',
    'konstruksi baja magetan',
    'bengkel las terdekat',
    'jasa las magetan',
    'las kanopi magetan',
    'las teralis magetan',
  ],
  openGraph: {
    title: 'Bengkel Las Magetan - Spesialis Las Besi | MBUZENK ZETRO',
    description: 'Bengkel las terpercaya di Magetan. Spesialis las besi, konstruksi baja, pagar, tangga. Pengalaman 19+ tahun.',
    images: ['/service-las.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/bengkel-las',
  },
}

export default function Page() {
  return <BengkelLasPage />
}
