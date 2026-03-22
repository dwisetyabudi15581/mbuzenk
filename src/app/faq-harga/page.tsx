import type { Metadata } from 'next'
import FAQContent from './FAQContent'

export const metadata: Metadata = {
  title: 'FAQ Harga - Pertanyaan Seputar Layanan | MBUZENK ZETRO',
  description: 'Jawaban lengkap pertanyaan yang sering diajukan tentang layanan bengkel las MBUZENK ZETRO Magetan. Konsultasi gratis untuk penawaran terbaik.',
}

export default function Page() {
  return <FAQContent />
}
