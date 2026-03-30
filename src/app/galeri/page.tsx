import type { Metadata } from 'next'
import GalleryPage from './GalleryPage'

export const metadata: Metadata = {
  title: 'Galeri Proyek - Portofolio MBUZENK ZETRO | Bengkel Las Magetan',
  description: 'Lihat galeri proyek dan portofolio MBUZENK ZETRO. Hasil pekerjaan kanopi, pagar, tangga, teralis, dan renovasi rumah berkualitas. Bengkel las terpercaya Magetan.',
  keywords: [
    'galeri proyek bengkel las',
    'portofolio kanopi magetan',
    'hasil pagar besi',
    'proyek renovasi magetan',
    'galeri bengkel las',
    'contoh pagar minimalis',
    'model kanopi terbaru',
  ],
  openGraph: {
    title: 'Galeri Proyek - Portofolio MBUZENK ZETRO',
    description: 'Lihat galeri proyek dan portofolio hasil pekerjaan MBUZENK ZETRO.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/galeri/',
  },
}

export default function Page() {
  return <GalleryPage />
}
