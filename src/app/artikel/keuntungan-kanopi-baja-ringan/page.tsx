import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo'

export const metadata: Metadata = {
  title: 'Keuntungan Menggunakan Kanopi Baja Ringan | MBUZENK ZETRO',
  description: 'Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda. Ringan, anti karat, dan hemat biaya. Konsultasi gratis dengan bengkel las profesional Magetan.',
  keywords: [
    'kanopi baja ringan',
    'keuntungan kanopi baja ringan',
    'kanopi anti karat',
    'kanopi carport magetan',
    'baja ringan vs besi',
    'kanopi minimalis modern',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Keuntungan Menggunakan Kanopi Baja Ringan',
    description: 'Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda.',
    images: ['/project-kanopi.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/keuntungan-kanopi-baja-ringan/',
  },
}

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="Keuntungan Menggunakan Kanopi Baja Ringan"
        description="Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda. Ringan, anti karat, dan hemat biaya."
        url="https://www.mbuzenkzetro.com/artikel/keuntungan-kanopi-baja-ringan"
        datePublished="2024-03-01"
        dateModified="2024-12-01"
        image="/project-kanopi.png"
        keywords={['kanopi baja ringan', 'keuntungan kanopi', 'kanopi anti karat', 'baja ringan vs besi']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://www.mbuzenkzetro.com' },
          { name: 'Artikel', url: 'https://www.mbuzenkzetro.com/artikel' },
          { name: 'Keuntungan Kanopi Baja Ringan', url: 'https://www.mbuzenkzetro.com/artikel/keuntungan-kanopi-baja-ringan' },
        ]}
      />
      <ArticleContent />
    </>
  )
}
