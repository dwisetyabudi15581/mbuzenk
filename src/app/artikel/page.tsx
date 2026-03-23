import type { Metadata } from 'next'
import { ArticleHeader, ArticleContent, ArticleCTA } from './ArticlePageContent'

export const metadata: Metadata = {
  title: 'Artikel Tips & Panduan | MBUZENK ZETRO',
  description: 'Kumpulan artikel tips dan panduan seputar kanopi, pagar, teralis, tangga besi, dan renovasi rumah dari MBUZENK ZETRO - Bengkel Las Magetan.',
  keywords: [
    'artikel kanopi',
    'tips renovasi rumah',
    'panduan pagar besi',
    'cara memilih teralis',
    'bengkel las magetan',
    'tips bengkel las',
  ],
  openGraph: {
    title: 'Artikel Tips & Panduan | MBUZENK ZETRO',
    description: 'Kumpulan artikel tips dan panduan seputar kanopi, pagar, teralis, tangga besi, dan renovasi rumah.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel',
  },
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <ArticleHeader />
      <ArticleContent />
      <ArticleCTA />
    </main>
  )
}
