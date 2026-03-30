import type { Metadata } from 'next'
import { AreaLayananContent } from '@/components/pages/AreaLayananPage'
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo'

export const metadata: Metadata = {
  title: 'Bengkel Las Magetan - Spesialis Las Besi & Renovasi Rumah | MBUZENK ZETRO',
  description: 'Bengkel las terpercaya di Magetan sejak 2005. Spesialis pembuatan kanopi minimalis, pagar besi, tangga besi, teralis, konstruksi baja, renovasi rumah. 1000+ proyek selesai. Survei gratis! Hubungi: 0857-3860-2255.',
  keywords: [
    'bengkel las magetan',
    'bengkel las',
    'las magetan',
    'tukang las magetan',
    'renovasi rumah magetan',
    'kanopi magetan',
    'pagar besi magetan',
    'tangga besi magetan',
    'teralis magetan',
    'konstruksi baja magetan',
    'bengkel las kabupaten magetan',
    'bengkel las terdekat magetan',
    'jasa las magetan',
    'spesialis las magetan',
  ],
  openGraph: {
    title: 'Bengkel Las Magetan - MBUZENK ZETRO',
    description: 'Bengkel las terpercaya di Magetan sejak 2005. Kanopi, pagar, tangga, renovasi. 1000+ proyek selesai. Survei gratis!',
    images: ['/hero-image.png'],
    type: 'website',
    locale: 'id_ID',
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/area-layanan/magetan/',
  },
}

const faqs = [
  {
    question: 'Di mana lokasi bengkel las MBUZENK ZETRO di Magetan?',
    answer: 'Bengkel las MBUZENK ZETRO berlokasi di CFR3+5JQ, Setro, Tebon, Kec. Barat, Kabupaten Magetan, Jawa Timur 63395. Kami melayani seluruh kecamatan di Kabupaten Magetan termasuk Maospati, Parang, Plaosan, Karas, Sukomoro, dan sekitarnya.',
  },
  {
    question: 'Apakah survei lokasi gratis untuk area Magetan?',
    answer: 'Ya, survei lokasi 100% GRATIS untuk seluruh area Kabupaten Magetan. Tim kami akan datang untuk pengukuran, konsultasi desain, dan memberikan penawaran harga langsung di lokasi Anda.',
  },
  {
    question: 'Berapa lama waktu pengerjaan untuk proyek di Magetan?',
    answer: 'Waktu pengerjaan tergantung jenis proyek. Untuk kanopi minimalis 2-4 hari, pagar besi 3-5 hari, tangga besi 5-7 hari, renovasi kamar mandi 7-14 hari. Karena bengkel kami ada di Magetan, proses lebih cepat dan efisien.',
  },
  {
    question: 'Apa saja layanan bengkel las di Magetan?',
    answer: 'Kami menyediakan layanan lengkap: pembuatan kanopi minimalis, pagar besi, tangga besi, teralis jendela, konstruksi baja ringan, kitchen set, pergola, renovasi rumah total, renovasi kamar mandi, dan berbagai pekerjaan las custom.',
  },
]

export default function Page() {
  return (
    <>
      <LocalBusinessSchema
        name="MBUZENK ZETRO - Bengkel Las Magetan"
        description="Bengkel las terpercaya di Magetan sejak 2005. Spesialis pembuatan kanopi minimalis, pagar besi, tangga besi, teralis, konstruksi baja, dan renovasi rumah. Melayani seluruh Kabupaten Magetan dan Jawa Timur."
      />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://www.mbuzenkzetro.com' },
          { name: 'Area Layanan', url: 'https://www.mbuzenkzetro.com/area-layanan' },
          { name: 'Bengkel Las Magetan', url: 'https://www.mbuzenkzetro.com/area-layanan/magetan' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AreaLayananContent area="Magetan" />
    </>
  )
}
