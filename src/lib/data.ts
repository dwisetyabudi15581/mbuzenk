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
    image: '/project-kanopi.png',
    message: 'Halo, saya tertarik dengan layanan Kanopi & Carport. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Shield,
    title: 'Pagar & Gerbang',
    description: 'Pagar besi dengan berbagai model dari klasik hingga minimalis. Tersedia finishing cat duco atau galvanis.',
    features: ['Kuat & awet', 'Berbagai model', 'Harga terjangkau'],
    image: '/project-pagar.png',
    message: 'Halo, saya tertarik dengan layanan Pagar & Gerbang. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Home,
    title: 'Tangga Besi',
    description: 'Tangga besi internal dan eksternal dengan desain elegan. Pilihan model spiral, L-shape, atau straight.',
    features: ['Presisi tinggi', 'Anti slip', 'Desain modern'],
    image: '/project-tangga.png',
    message: 'Halo, saya tertarik dengan layanan Tangga Besi. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  {
    icon: Hammer,
    title: 'Konstruksi Baja',
    description: 'Pembuatan rangka atap baja ringan, mezzanine, dan struktur baja untuk kebutuhan konstruksi Anda.',
    features: ['Tahan gempa', 'Ringan tapi kuat', 'Pemasangan cepat'],
    image: '/project-atap.png',
    message: 'Halo, saya tertarik dengan layanan Konstruksi Baja. Mohon informasi lebih lanjut.',
    category: 'Las',
  },
  // Layanan Renovasi
  {
    icon: Wrench,
    title: 'Renovasi Total Rumah',
    description: 'Layanan renovasi lengkap dari perbaikan struktur hingga pembaruan total interior dan eksterior rumah.',
    features: ['Survey gratis', 'Tim lengkap', 'Hasil memuaskan'],
    image: '/project-renovasi.png',
    message: 'Halo, saya tertarik dengan layanan Renovasi Total Rumah. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Building2,
    title: 'Kitchen Set',
    description: 'Pembuatan dan pemasangan kitchen set custom sesuai kebutuhan dapur Anda dengan material premium.',
    features: ['Desain custom', 'Material premium', 'Pemasangan rapi'],
    image: '/project-kitchen.png',
    message: 'Halo, saya tertarik dengan layanan Kitchen Set. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Home,
    title: 'Renovasi Kamar Mandi',
    description: 'Renovasi kamar mandi dari desain modern hingga klasik dengan finishing berkualitas tinggi.',
    features: ['Waterproof', 'Desain modern', 'Peralatan premium'],
    image: '/project-kamar-mandi.png',
    message: 'Halo, saya tertarik dengan layanan Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
    category: 'Renovasi',
  },
  {
    icon: Building2,
    title: 'Pergola & Teralis',
    description: 'Pergola kayu-besi kombinasi dan teralis jendela dengan desain artistik untuk mempercantik rumah.',
    features: ['Desain artistik', 'Tahan lama', 'Maintenance mudah'],
    image: '/project-pergola.png',
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
    image: '/project-kanopi.png',
    client: 'Bpk. Ahmad - Magetan',
    message: 'Halo, saya tertarik dengan proyek Kanopi Carport Modern. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Pagar Minimalis Elegan',
    category: 'Las - Pagar',
    image: '/project-pagar.png',
    client: 'Ibu Sari - Magetan',
    message: 'Halo, saya tertarik dengan proyek Pagar Minimalis Elegan. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Tangga Spiral Premium',
    category: 'Las - Tangga',
    image: '/project-tangga.png',
    client: 'Bpk. Hendra - Madiun',
    message: 'Halo, saya tertarik dengan proyek Tangga Spiral Premium. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Rangka Atap Baja',
    category: 'Las - Konstruksi',
    image: '/project-atap.png',
    client: 'CV. Maju Jaya - Magetan',
    message: 'Halo, saya tertarik dengan proyek Rangka Atap Baja. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Pergola Taman',
    category: 'Las - Pergola',
    image: '/project-pergola.png',
    client: 'Ibu Dewi - Ngawi',
    message: 'Halo, saya tertarik dengan proyek Pergola Taman. Mohon informasi lebih lanjut.',
  },
  // Proyek Renovasi
  {
    title: 'Renovasi Total Rumah',
    category: 'Renovasi',
    image: '/project-renovasi.png',
    client: 'Bpk. Budi - Magetan',
    message: 'Halo, saya tertarik dengan proyek Renovasi Total Rumah. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Kitchen Set Modern',
    category: 'Renovasi - Interior',
    image: '/project-kitchen.png',
    client: 'Ibu Ratna - Magetan',
    message: 'Halo, saya tertarik dengan proyek Kitchen Set Modern. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Renovasi Kamar Mandi',
    category: 'Renovasi - Kamar Mandi',
    image: '/project-kamar-mandi.png',
    client: 'Bpk. Joko - Madiun',
    message: 'Halo, saya tertarik dengan proyek Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
  },
  {
    title: 'Teralis Jendela Artistik',
    category: 'Las - Teralis',
    image: '/project-teralis.png',
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
