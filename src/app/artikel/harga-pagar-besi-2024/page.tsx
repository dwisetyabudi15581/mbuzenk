import type { Metadata } from 'next'
import HargaPagarPage from './HargaPagarPage'

export const metadata: Metadata = {
  title: 'Harga Pagar Besi Minimalis 2024 - Update Terbaru | MBUZENK ZETRO Magetan',
  description: 'Daftar harga pagar besi minimalis terbaru 2024. Pagar BRC, pagar hollow, pagar custom dengan berbagai model dan ukuran. Harga terjangkau, garansi 2 tahun. Hubungi 0857-3860-2255.',
  keywords: [
    'harga pagar besi',
    'harga pagar minimalis 2024',
    'pagar besi magetan',
    'pagar BRC harga',
    'pagar hollow minimalis',
    'biaya pembuatan pagar',
  ],
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/harga-pagar-besi-2024',
  },
}

export default function Page() {
  return <HargaPagarPage />
}
