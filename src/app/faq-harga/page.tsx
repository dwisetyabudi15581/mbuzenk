import type { Metadata } from 'next'
import FAQContent from './FAQContent'

export const metadata: Metadata = {
  title: 'FAQ Harga - Pertanyaan Seputar Layanan | MBUZENK ZETRO',
  description: 'Jawaban lengkap pertanyaan yang sering diajukan tentang layanan bengkel las MBUZENK ZETRO Magetan. Konsultasi gratis untuk penawaran terbaik.',
  keywords: [
    'faq bengkel las',
    'harga kanopi magetan',
    'harga pagar besi',
    'biaya renovasi',
    'estimasi harga las',
  ],
  openGraph: {
    title: 'FAQ Harga - Pertanyaan Seputar Layanan | MBUZENK ZETRO',
    description: 'Jawaban lengkap pertanyaan yang sering diajukan tentang layanan bengkel las.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/faq-harga/',
  },
}

export default function Page() {
  return <FAQContent />
}
