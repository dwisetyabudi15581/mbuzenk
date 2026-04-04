import { Building2, Shield, Home, Hammer, Wrench } from 'lucide-react'

// =============================================
// TYPE DEFINITIONS
// =============================================
export interface TestimonialType {
  id: number
  name: string
  role: string
  location: string
  content: string
  rating: number
  date: string
  project: string
}

export interface ServiceType {
  icon: typeof Building2
  title: string
  description: string
  features: string[]
  image: string
  message: string
  category: string
}

export interface ProjectType {
  title: string
  category: string
  image: string
  client: string
  message: string
}

export interface FeatureType {
  icon: typeof Building2
  title: string
  desc: string
}

// =============================================
// DEFAULT TESTIMONIALS
// =============================================
export const DEFAULT_TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'Pemilik Rumah',
    location: 'Magetan',
    content: 'Pengerjaan kanopi sangat rapi dan tepat waktu. Tim MBUZENK ZETRO sangat profesional dari survey hingga pemasangan. Sangat recommended!',
    rating: 5,
    date: '2024-01-15',
    project: 'Kanopi Carport',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    location: 'Madiun',
    content: 'Pagar rumah saya sekarang terlihat lebih mewah berkat MBUZENK ZETRO. Desainnya minimalis sesuai yang saya inginkan. Terima kasih!',
    rating: 5,
    date: '2024-02-20',
    project: 'Pagar Minimalis',
  },
  {
    id: 3,
    name: 'Hendra Wijaya',
    role: 'Pengusaha',
    location: 'Ngawi',
    content: 'Tangga spiral yang dibuat sangat kokoh dan artistik. Harga juga sangat reasonable untuk kualitas setinggi ini. Top markotop!',
    rating: 5,
    date: '2024-03-10',
    project: 'Tangga Spiral',
  },
  {
    id: 4,
    name: 'Budi Santoso',
    role: 'Pemilik Rumah',
    location: 'Magetan',
    content: 'Renovasi kamar mandi berjalan lancar dan hasilnya memuaskan. Tim kerja rapi dan bersih. Pasti akan pakai jasa MBUZENK lagi!',
    rating: 5,
    date: '2024-03-25',
    project: 'Renovasi Kamar Mandi',
  },
  {
    id: 5,
    name: 'Dewi Kusuma',
    role: 'Ibu Rumah Tangga',
    location: 'Ponorogo',
    content: 'Kitchen set custom yang dibuat sangat sesuai dengan kebutuhan dapur saya. Kualitas material bagus dan finishing rapi.',
    rating: 5,
    date: '2024-04-05',
    project: 'Kitchen Set',
  },
  {
    id: 6,
    name: 'Agus Prasetyo',
    role: 'Wiraswasta',
    location: 'Magetan',
    content: 'Teralis jendela rumah saya sekarang terlihat lebih aman dan artistik. Desain custom sesuai permintaan. Puas!',
    rating: 5,
    date: '2024-04-18',
    project: 'Teralis Jendela',
  },
  {
    id: 7,
    name: 'Rina Wati',
    role: 'Pemilik Rumah',
    location: 'Madiun',
    content: 'Konstruksi atap baja ringan sangat kuat dan pemasangan cepat. Tim berpengalaman dan hasil profesional.',
    rating: 5,
    date: '2024-05-02',
    project: 'Konstruksi Baja',
  },
  {
    id: 8,
    name: 'Joko Widodo',
    role: 'Pensiunan',
    location: 'Ngawi',
    content: 'Pergola di taman rumah saya sekarang jadi tempat favorit keluarga. Desainnya cantik dan kokoh. Terima kasih MBUZENK!',
    rating: 5,
    date: '2024-05-15',
    project: 'Pergola Taman',
  },
]

// =============================================
// SERVICES DATA
// =============================================
export const SERVICES: ServiceType[] = [
  // Layanan Las
  {
    icon: Building2,
    title: 'Kanopi & Carport',
    description: 'Kanopi baja ringan dan besi hollow dengan desain modern untuk carport, teras, dan area outdoor rumah Anda.',
    features: ['Bahan berkualitas', 'Anti karat', 'Desain custom'],
    image: '/project-kanopi.webp',
    message: 'Halo, saya tertarik dengan layanan Kanopi & Carport. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Shield,
    title: 'Pagar & Gerbang',
    description: 'Pagar besi dengan berbagai model dari klasik hingga minimalis. Tersedia finishing cat duco atau galvanis.',
    features: ['Kuat & awet', 'Berbagai model', 'Harga terjangkau'],
    image: '/project-pagar.webp',
    message: 'Halo, saya tertarik dengan layanan Pagar & Gerbang. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Home,
    title: 'Tangga Besi',
    description: 'Tangga besi internal dan eksternal dengan desain elegan. Pilihan model spiral, L-shape, atau straight.',
    features: ['Presisi tinggi', 'Anti slip', 'Desain modern'],
    image: '/project-tangga.webp',
    message: 'Halo, saya tertarik dengan layanan Tangga Besi. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Hammer,
    title: 'Konstruksi Baja',
    description: 'Pembuatan rangka atap baja ringan, mezzanine, dan struktur baja untuk kebutuhan konstruksi Anda.',
    features: ['Tahan gempa', 'Ringan tapi kuat', 'Pemasangan cepat'],
    image: '/project-atap.webp',
    message: 'Halo, saya tertarik dengan layanan Konstruksi Baja. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  // Layanan Renovasi
  {
    icon: Wrench,
    title: 'Renovasi Total Rumah',
    description: 'Layanan renovasi lengkap dari perbaikan struktur hingga pembaruan total interior dan eksterior rumah.',
    features: ['Survey gratis', 'Tim lengkap', 'Hasil memuaskan'],
    image: '/project-renovasi.webp',
    message: 'Halo, saya tertarik dengan layanan Renovasi Total Rumah. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Building2,
    title: 'Kitchen Set',
    description: 'Pembuatan dan pemasangan kitchen set custom sesuai kebutuhan dapur Anda dengan material premium.',
    features: ['Desain custom', 'Material premium', 'Pemasangan rapi'],
    image: '/project-kitchen.webp',
    message: 'Halo, saya tertarik dengan layanan Kitchen Set. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Home,
    title: 'Renovasi Kamar Mandi',
    description: 'Renovasi kamar mandi dari desain modern hingga klasik dengan finishing berkualitas tinggi.',
    features: ['Waterproof', 'Desain modern', 'Peralatan premium'],
    image: '/project-kamar-mandi.webp',
    message: 'Halo, saya tertarik dengan layanan Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Building2,
    title: 'Pergola & Teralis',
    description: 'Pergola kayu-besi kombinasi dan teralis jendela dengan desain artistik untuk mempercantik rumah.',
    features: ['Desain artistik', 'Tahan lama', 'Maintenance mudah'],
    image: '/project-pergola.webp',
    message: 'Halo, saya tertarik dengan layanan Pergola & Teralis. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
]

// =============================================
// PROJECTS DATA
// =============================================
export const PROJECTS: ProjectType[] = [
  // Proyek Las
  {
    title: 'Kanopi Carport Modern',
    category: 'Las - Kanopi',
    image: '/project-kanopi.webp',
    client: 'Bpk. Ahmad - Magetan',
    message: 'Halo, saya tertarik dengan proyek Kanopi Carport Modern. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Pagar Minimalis Elegan',
    category: 'Las - Pagar',
    image: '/project-pagar.webp',
    client: 'Ibu Sari - Magetan',
    message: 'Halo, saya tertarik dengan proyek Pagar Minimalis Elegan. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Tangga Spiral Premium',
    category: 'Las - Tangga',
    image: '/project-tangga.webp',
    client: 'Bpk. Hendra - Madiun',
    message: 'Halo, saya tertarik dengan proyek Tangga Spiral Premium. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Rangka Atap Baja',
    category: 'Las - Konstruksi',
    image: '/project-atap.webp',
    client: 'CV. Maju Jaya - Magetan',
    message: 'Halo, saya tertarik dengan proyek Rangka Atap Baja. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Pergola Taman',
    category: 'Las - Pergola',
    image: '/project-pergola.webp',
    client: 'Ibu Dewi - Ngawi',
    message: 'Halo, saya tertarik dengan proyek Pergola Taman. Mohon informasi lebih lanjut.',
  },
  // Proyek Renovasi
  {
    title: 'Renovasi Total Rumah',
    category: 'Renovasi',
    image: '/project-renovasi.webp',
    client: 'Bpk. Budi - Magetan',
    message: 'Halo, saya tertarik dengan proyek Renovasi Total Rumah. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Kitchen Set Modern',
    category: 'Renovasi - Interior',
    image: '/project-kitchen.webp',
    client: 'Ibu Ratna - Magetan',
    message: 'Halo, saya tertarik dengan proyek Kitchen Set Modern. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Renovasi Kamar Mandi',
    category: 'Renovasi - Kamar Mandi',
    image: '/project-kamar-mandi.webp',
    client: 'Bpk. Joko - Madiun',
    message: 'Halo, saya tertarik dengan proyek Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Teralis Jendela Artistik',
    category: 'Las - Teralis',
    image: '/project-teralis.webp',
    client: 'Ibu Ani - Ponorogo',
    message: 'Halo, saya tertarik dengan proyek Teralis Jendela Artistik. Mohon informasi lebih lanjut.',
  },
]

// =============================================
// FOOTER SERVICES
// =============================================
export const FOOTER_SERVICES = [
  { name: 'Kanopi Minimalis', message: 'Halo, saya tertarik dengan layanan Kanopi Minimalis.' },
  { name: 'Pagar Besi', message: 'Halo, saya tertarik dengan layanan Pagar Besi.' },
  { name: 'Tangga Besi', message: 'Halo, saya tertarik dengan layanan Tangga Besi.' },
  { name: 'Konstruksi Baja', message: 'Halo, saya tertarik dengan layanan Konstruksi Baja.' },
  { name: 'Renovasi Rumah', message: 'Halo, saya tertarik dengan layanan Renovasi Rumah.' },
  { name: 'Pergola & Teralis', message: 'Halo, saya tertarik dengan layanan Pergola & Teralis.' },
]
