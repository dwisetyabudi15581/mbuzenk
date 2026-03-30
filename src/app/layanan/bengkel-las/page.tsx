import type { Metadata } from 'next'
import { BengkelLasPage } from '@/components/pages/BengkelLasPage'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo'

export const metadata: Metadata = {
  title: 'Bengkel Las Magetan - Spesialis Las Besi & Konstruksi Baja | MBUZENK ZETRO',
  description: 'Bengkel las terpercaya di Magetan sejak 2005. Spesialis las besi, konstruksi baja, pagar besi minimalis, tangga besi, teralis jendela, kanopi. 1000+ proyek selesai. Survei gratis! Hubungi: 0857-3860-2255.',
  keywords: [
    'bengkel las magetan',
    'bengkel las',
    'las magetan',
    'las besi magetan',
    'tukang las magetan',
    'las pagar magetan',
    'las tangga magetan',
    'konstruksi baja magetan',
    'bengkel las terdekat',
    'jasa las magetan',
    'las kanopi magetan',
    'las teralis magetan',
    'bengkel las terpercaya',
    'spesialis las magetan',
    'bengkel las jawa timur',
  ],
  openGraph: {
    title: 'Bengkel Las Magetan - Spesialis Las Besi & Konstruksi Baja',
    description: 'Bengkel las terpercaya di Magetan sejak 2005. Spesialis las besi, konstruksi baja, pagar, tangga. 1000+ proyek selesai. Survei gratis!',
    images: ['/service-las.png'],
    type: 'website',
    locale: 'id_ID',
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/layanan/bengkel-las/',
  },
}

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan di bengkel las MBUZENK ZETRO?',
    answer: 'Waktu pengerjaan tergantung jenis dan kompleksitas pekerjaan. Untuk pagar besi minimalis biasanya 3-5 hari kerja, kanopi 2-4 hari kerja, tangga besi 5-7 hari kerja, dan konstruksi baja 7-14 hari kerja. Kami selalu memberikan estimasi waktu yang jelas sebelum pengerjaan.',
  },
  {
    question: 'Apakah bengkel las MBUZENK ZETRO melayani area di luar Magetan?',
    answer: 'Ya, kami melayani area Magetan, Madiun, Ngawi, Ponorogo, Surabaya, dan seluruh Jawa Timur. Untuk lokasi di luar radius 50km dari Magetan, akan ada biaya transportasi yang diinformasikan saat survei gratis.',
  },
  {
    question: 'Berapa biaya survei lokasi untuk pengerjaan las?',
    answer: 'Survei lokasi GRATIS untuk area Magetan dan sekitarnya. Tim kami akan datang untuk pengukuran, konsultasi desain, dan memberikan penawaran harga langsung di lokasi Anda.',
  },
  {
    question: 'Apakah ada garansi untuk hasil pekerjaan las?',
    answer: 'Ya, kami memberikan garansi konstruksi besi hingga 2 tahun, garansi finishing cat 6 bulan, dan garansi service gratis seumur hidup untuk pelanggan setia. Kualitas adalah prioritas utama kami.',
  },
  {
    question: 'Bagaimana sistem pembayaran di bengkel las MBUZENK ZETRO?',
    answer: 'Sistem pembayaran fleksibel: DP 50% untuk memulai pengerjaan, pelunasan setelah pekerjaan selesai dan disetujui. Kami juga menerima pembayaran bertahap untuk proyek besar. Transfer bank dan tunai tersedia.',
  },
  {
    question: 'Material apa saja yang digunakan untuk pagar besi dan kanopi?',
    answer: 'Kami menggunakan material berkualitas tinggi seperti besi hollow galvanis, besi WF (Wide Flange), spandek, polikarbonat, alderon, dan baja ringan. Semua material memenuhi standar SNI dengan garansi anti karat.',
  },
]

export default function Page() {
  return (
    <>
      <ServiceSchema
        serviceName="Bengkel Las Magetan - Spesialis Las Besi & Konstruksi Baja"
        serviceDescription="Bengkel las terpercaya di Magetan sejak 2005. Spesialis pembuatan pagar besi minimalis, tangga besi, teralis jendela, kanopi, dan konstruksi baja. Melayani Magetan, Madiun, Ngawi, Ponorogo, dan seluruh Jawa Timur."
        serviceUrl="https://www.mbuzenkzetro.com/layanan/bengkel-las"
        serviceImage="/service-las.png"
        areaServed={['Magetan', 'Madiun', 'Ngawi', 'Ponorogo', 'Surabaya', 'Jawa Timur']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://www.mbuzenkzetro.com' },
          { name: 'Layanan', url: 'https://www.mbuzenkzetro.com/layanan' },
          { name: 'Bengkel Las Magetan', url: 'https://www.mbuzenkzetro.com/layanan/bengkel-las' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <BengkelLasPage />
    </>
  )
}
