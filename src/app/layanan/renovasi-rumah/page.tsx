import type { Metadata } from 'next'
import { RenovasiPage } from '@/components/pages/RenovasiPage'

export const metadata: Metadata = {
  title: 'Renovasi Rumah Magetan - Jasa Renovasi Rumah Profesional | MBUZENK ZETRO',
  description: 'Jasa renovasi rumah terpercaya di Magetan. Spesialis renovasi kamar mandi, dapur, atap, plafon, dan renovasi total. Pengalaman 19+ tahun, 1000+ proyek selesai. Konsultasi gratis: 0857-3860-2255',
  keywords: [
    'renovasi rumah magetan',
    'jasa renovasi magetan',
    'renovasi kamar mandi magetan',
    'renovasi dapur magetan',
    'renovasi atap magetan',
    'kontraktor renovasi magetan',
    'harga renovasi rumah magetan',
    'renovasi rumah minimalis magetan',
    'jasa perbaikan rumah magetan',
    'tukang renovasi magetan',
  ],
  openGraph: {
    title: 'Renovasi Rumah Magetan - Jasa Renovasi Profesional | MBUZENK ZETRO',
    description: 'Jasa renovasi rumah terpercaya di Magetan. Pengalaman 19+ tahun, 1000+ proyek selesai.',
    images: ['/project-renovasi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/renovasi-rumah',
  },
}

export default function Page() {
  return <RenovasiPage />
}
