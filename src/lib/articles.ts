// =============================================
// ARTICLES DATA - Data artikel untuk website
// =============================================

export interface ArticleType {
  slug: string
  title: string
  description: string
  excerpt: string
  category: 'kanopi' | 'pagar' | 'teralis' | 'tangga' | 'renovasi' | 'bengkel-las' | 'tips'
  image: string
  color: string
  date: string
  keywords: string[]
  relatedArticles: string[] // slug dari artikel terkait
}

export const ARTICLES: ArticleType[] = [
  {
    slug: 'keuntungan-kanopi-baja-ringan',
    title: 'Keuntungan Menggunakan Kanopi Baja Ringan',
    description: 'Kenali keuntungan kanopi baja ringan untuk carport dan teras rumah Anda. Ringan, anti karat, dan hemat biaya.',
    excerpt: 'Kanopi baja ringan menjadi pilihan populer untuk carport dan teras rumah modern. Material ini memiliki banyak keunggulan dibanding besi konvensional.',
    category: 'kanopi',
    image: '/articles/kanopi-baja-ringan.jpg',
    color: 'blue',
    date: '2024-03-01',
    keywords: ['kanopi baja ringan', 'keuntungan kanopi', 'kanopi anti karat', 'baja ringan vs besi'],
    relatedArticles: ['tips-memilih-kanopi-minimalis', 'model-kanopi-terbaru-2024', 'perawatan-kanopi-besi']
  },
  {
    slug: 'tips-memilih-kanopi-minimalis',
    title: 'Tips Memilih Kanopi Minimalis yang Tepat untuk Rumah',
    description: 'Panduan lengkap cara memilih kanopi minimalis yang tepat untuk melindungi carport dan teras rumah Anda.',
    excerpt: 'Kanopi minimalis menjadi pilihan populer untuk melindungi carport dan teras rumah. Selain fungsional, kanopi juga menambah estetika rumah Anda.',
    category: 'kanopi',
    image: '/articles/tips-kanopi-minimalis.jpg',
    color: 'orange',
    date: '2024-03-05',
    keywords: ['kanopi minimalis', 'tips memilih kanopi', 'kanopi carport', 'model kanopi'],
    relatedArticles: ['keuntungan-kanopi-baja-ringan', 'model-kanopi-terbaru-2024', 'perawatan-kanopi-besi']
  },
  {
    slug: 'model-kanopi-terbaru-2024',
    title: 'Model Kanopi Terbaru 2024 untuk Rumah Modern',
    description: 'Koleksi model kanopi terbaru 2024 yang mengutamakan desain minimalis, fungsionalitas, dan estetika modern.',
    excerpt: 'Tahun 2024 menghadirkan berbagai model kanopi terbaru yang mengutamakan desain minimalis, fungsionalitas, dan estetika modern.',
    category: 'kanopi',
    image: '/articles/model-kanopi-2024.jpg',
    color: 'rose',
    date: '2024-03-10',
    keywords: ['model kanopi 2024', 'kanopi modern', 'tren kanopi', 'kanopi terbaru'],
    relatedArticles: ['tips-memilih-kanopi-minimalis', 'keuntungan-kanopi-baja-ringan', 'perawatan-kanopi-besi']
  },
  {
    slug: 'perawatan-kanopi-besi',
    title: 'Cara Merawat Kanopi Besi Agar Awet dan Tahan Lama',
    description: 'Panduan lengkap cara merawat kanopi besi agar tetap awet dan tahan lama hingga 20-30 tahun.',
    excerpt: 'Perawatan kanopi yang rutin dan tepat akan membuat investasi Anda lebih berharga. Kanopi yang dirawat dengan baik bisa bertahan hingga 20-30 tahun.',
    category: 'kanopi',
    image: '/articles/perawatan-kanopi.jpg',
    color: 'indigo',
    date: '2024-03-15',
    keywords: ['perawatan kanopi', 'kanopi besi awet', 'cara merawat kanopi', 'kanopi anti karat'],
    relatedArticles: ['keuntungan-kanopi-baja-ringan', 'tips-memilih-kanopi-minimalis', 'model-kanopi-terbaru-2024']
  },
  {
    slug: 'cara-memilih-pagar-minimalis',
    title: 'Cara Memilih Pagar Minimalis yang Tepat untuk Rumah',
    description: 'Panduan lengkap cara memilih pagar minimalis yang sempurna untuk keamanan dan estetika rumah Anda.',
    excerpt: 'Pagar minimalis adalah pilihan populer untuk rumah modern. Selain berfungsi sebagai keamanan, pagar juga menjadi elemen penting dalam tampilan eksterior rumah.',
    category: 'pagar',
    image: '/articles/pagar-minimalis.jpg',
    color: 'teal',
    date: '2024-03-08',
    keywords: ['pagar minimalis', 'cara memilih pagar', 'pagar besi', 'model pagar'],
    relatedArticles: ['tips-merawat-pagar-besi', 'pentingnya-teralis-jendela', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'tips-merawat-pagar-besi',
    title: 'Tips Merawat Pagar Besi Agar Tidak Berkarat',
    description: 'Tips lengkap cara merawat pagar besi agar tetap awet dan terlihat seperti baru.',
    excerpt: 'Pagar besi adalah investasi jangka panjang untuk keamanan dan estetika rumah Anda. Namun tanpa perawatan yang tepat, pagar besi bisa cepat berkarat dan rusak.',
    category: 'pagar',
    image: '/articles/merawat-pagar.jpg',
    color: 'slate',
    date: '2024-03-12',
    keywords: ['merawat pagar besi', 'pagar anti karat', 'perawatan pagar', 'pagar awet'],
    relatedArticles: ['cara-memilih-pagar-minimalis', 'pentingnya-teralis-jendela', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'pentingnya-teralis-jendela',
    title: 'Pentingnya Teralis Jendela untuk Keamanan Rumah',
    description: 'Mengapa teralis jendela sangat penting dan bagaimana memilih yang tepat untuk keamanan rumah Anda.',
    excerpt: 'Teralis jendela bukan sekadar aksesoris rumah, tetapi investasi keamanan yang sangat penting untuk melindungi keluarga dan harta benda Anda.',
    category: 'teralis',
    image: '/articles/teralis-jendela.jpg',
    color: 'red',
    date: '2024-03-18',
    keywords: ['teralis jendela', 'keamanan rumah', 'pentingnya teralis', 'teralis anti maling'],
    relatedArticles: ['jenis-teralis-jendela', 'cara-memilih-pagar-minimalis', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'jenis-teralis-jendela',
    title: 'Jenis-jenis Teralis Jendela yang Populer',
    description: 'Panduan lengkap memilih teralis jendela untuk rumah Anda dengan berbagai jenis yang populer.',
    excerpt: 'Teralis jendela tidak hanya berfungsi sebagai keamanan, tapi juga menambah estetika rumah. Kenali jenis-jenis teralis yang populer beserta kelebihannya.',
    category: 'teralis',
    image: '/articles/jenis-teralis.jpg',
    color: 'slate',
    date: '2024-03-20',
    keywords: ['jenis teralis', 'teralis minimalis', 'teralis artistik', 'model teralis jendela'],
    relatedArticles: ['pentingnya-teralis-jendela', 'cara-memilih-pagar-minimalis', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'jenis-tangga-besi-minimalis',
    title: 'Jenis-Jenis Tangga Besi untuk Rumah Minimalis',
    description: 'Panduan lengkap jenis-jenis tangga besi dan cara memilih yang tepat untuk rumah minimalis Anda.',
    excerpt: 'Tangga besi menjadi pilihan populer untuk rumah minimalis modern. Selain kuat dan tahan lama, tangga besi juga memiliki berbagai model yang bisa disesuaikan.',
    category: 'tangga',
    image: '/articles/tangga-besi.jpg',
    color: 'amber',
    date: '2024-03-22',
    keywords: ['tangga besi', 'tangga minimalis', 'jenis tangga', 'tangga spiral'],
    relatedArticles: ['cara-memilih-bengkel-las', 'tips-memilih-kontraktor', 'manfaat-renovasi-rumah']
  },
  {
    slug: 'tips-memilih-kontraktor',
    title: 'Tips Memilih Kontraktor Renovasi yang Terpercaya',
    description: 'Panduan mengidentifikasi kontraktor terpercaya dan profesional untuk proyek renovasi rumah Anda.',
    excerpt: 'Memilih kontraktor yang tepat adalah kunci suksesnya proyek renovasi rumah Anda. Kontraktor yang salah bisa menyebabkan budget membengkak dan hasil tidak sesuai.',
    category: 'renovasi',
    image: '/articles/kontraktor-renovasi.jpg',
    color: 'purple',
    date: '2024-03-25',
    keywords: ['memilih kontraktor', 'kontraktor terpercaya', 'tips kontraktor', 'kontraktor renovasi'],
    relatedArticles: ['tips-renovasi-rumah-hemat', 'manfaat-renovasi-rumah', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'manfaat-renovasi-rumah',
    title: 'Manfaat Renovasi Rumah untuk Kualitas Hidup Lebih Baik',
    description: 'Berbagai manfaat renovasi rumah dari kenyamanan hingga nilai investasi untuk kualitas hidup yang lebih baik.',
    excerpt: 'Renovasi rumah bukan sekadar memperbaiki yang rusak atau mengubah tampilan. Lebih dari itu, renovasi adalah investasi untuk kualitas hidup yang lebih baik.',
    category: 'renovasi',
    image: '/articles/manfaat-renovasi.jpg',
    color: 'cyan',
    date: '2024-03-28',
    keywords: ['manfaat renovasi', 'renovasi rumah', 'nilai properti', 'investasi rumah'],
    relatedArticles: ['tips-renovasi-rumah-hemat', 'tips-memilih-kontraktor', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'tips-renovasi-rumah-hemat',
    title: 'Tips Renovasi Rumah Hemat Biaya tapi Berkualitas',
    description: 'Tips lengkap untuk renovasi rumah hemat biaya tanpa mengorbankan kualitas hasil.',
    excerpt: 'Renovasi rumah tidak selalu harus menguras kantong. Dengan perencanaan yang tepat dan strategi yang bijak, Anda bisa mendapatkan rumah impian.',
    category: 'renovasi',
    image: '/articles/renovasi-hemat.jpg',
    color: 'violet',
    date: '2024-04-01',
    keywords: ['renovasi hemat', 'tips renovasi murah', 'renovasi budget', 'hemat renovasi'],
    relatedArticles: ['manfaat-renovasi-rumah', 'tips-memilih-kontraktor', 'cara-memilih-bengkel-las']
  },
  {
    slug: 'cara-memilih-bengkel-las',
    title: 'Cara Memilih Bengkel Las yang Tepat dan Terpercaya',
    description: 'Panduan memilih bengkel las profesional dan terpercaya untuk hasil pekerjaan berkualitas.',
    excerpt: 'Memilih bengkel las yang tepat sangat penting untuk mendapatkan hasil pekerjaan yang berkualitas dan tahan lama.',
    category: 'bengkel-las',
    image: '/articles/bengkel-las.jpg',
    color: 'emerald',
    date: '2024-04-05',
    keywords: ['bengkel las', 'memilih bengkel las', 'bengkel las terpercaya', 'bengkel las magetan'],
    relatedArticles: ['tips-memilih-kontraktor', 'keuntungan-kanopi-baja-ringan', 'cara-memilih-pagar-minimalis']
  }
]

// Helper function untuk mendapatkan artikel berdasarkan slug
export function getArticleBySlug(slug: string): ArticleType | undefined {
  return ARTICLES.find(article => article.slug === slug)
}

// Helper function untuk mendapatkan artikel terkait
export function getRelatedArticles(slug: string, limit: number = 4): ArticleType[] {
  const article = getArticleBySlug(slug)
  if (!article) return []
  
  return article.relatedArticles
    .map(relatedSlug => getArticleBySlug(relatedSlug))
    .filter((a): a is ArticleType => a !== undefined)
    .slice(0, limit)
}

// Helper function untuk mendapatkan artikel berdasarkan kategori
export function getArticlesByCategory(category: ArticleType['category']): ArticleType[] {
  return ARTICLES.filter(article => article.category === category)
}

// Kategori artikel untuk filter
export const ARTICLE_CATEGORIES = [
  { id: 'all', label: 'Semua Artikel' },
  { id: 'kanopi', label: 'Kanopi' },
  { id: 'pagar', label: 'Pagar' },
  { id: 'teralis', label: 'Teralis' },
  { id: 'tangga', label: 'Tangga' },
  { id: 'renovasi', label: 'Renovasi' },
  { id: 'bengkel-las', label: 'Bengkel Las' },
] as const

// Warna untuk setiap kategori
export const CATEGORY_COLORS: Record<ArticleType['category'], string> = {
  'kanopi': 'blue',
  'pagar': 'teal',
  'teralis': 'red',
  'tangga': 'amber',
  'renovasi': 'purple',
  'bengkel-las': 'emerald',
  'tips': 'violet'
}
