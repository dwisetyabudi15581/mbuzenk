import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Pentingnya Teralis Jendela untuk Keamanan Rumah | MBUZENK ZETRO',
  description: 'Mengapa teralis jendela penting untuk keamanan rumah? Manfaat teralis, jenis-jenis teralis, dan tips memilih teralis yang tepat. Konsultasi gratis dengan bengkel las Magetan.',
  keywords: [
    'pentingnya teralis jendela',
    'teralis untuk keamanan rumah',
    'manfaat teralis jendela',
    'teralis jendela magetan',
    'keamanan rumah',
    'teralis anti maling',
    'bengkel las magetan',
  ],
  openGraph: {
    title: 'Pentingnya Teralis Jendela untuk Keamanan Rumah',
    description: 'Mengapa teralis jendela penting untuk keamanan rumah?',
    images: ['/project-teralis.png'],
  },
  alternates: {
    canonical: 'https://www.mbuzenkzetro.com/artikel/pentingnya-teralis-jendela',
  },
}

export default function Page() {
  return <ArticleContent />
}
